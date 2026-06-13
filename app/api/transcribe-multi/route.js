// /api/transcribe-multi — big-file auto-split transcription for authed users.
//
// Sibling endpoint to /api/transcribe. The latter handles the well-tested
// single-file path (provider chain Groq → Replicate → Deepgram → OpenAI,
// queue-based 429 handling, fallback strategies). This one is the
// purpose-built path for files larger than 60 MB that need to be split
// into 2-3 chunks before any transcription happens.
//
// Why a separate route instead of weaving into /api/transcribe:
//   - /api/transcribe is 882 lines of production-tested logic with subtle
//     order dependencies (auth → rate limit → blob fetch → duration probe →
//     filename rename for codec compatibility → provider chain). Modifying
//     it in place to add a split path risks regressing the path that
//     handles 100% of today's traffic.
//   - Big-file is authed-only, MVP scope, and tolerates a simpler provider
//     setup. We use Groq with 1 retry, skip the paid fallback chain.
//     Chunks that fail come back as partial results per the PRD's strict
//     failure mode.
//   - Clear ownership: this file owns big-file orchestration end-to-end.
//
// Request body (same shape as /api/transcribe):
//   { blobUrl, language?, fileName?, fileType?, fileSize? }
//
// Response:
//   { text, segments, language, chunkCount, failedChunks?, _provider: 'multi-chunk' }
//
// Per PRD (big-file-autosplit-prd-2026-06-12.md):
//   - Auth required
//   - Up to 180 MB upload, split into 2-3 chunks (60 MB each)
//   - Video → extract audio first, count chunks by audio size
//   - Each chunk burns 1 authDaily credit
//   - Strict failure mode: partial transcript + warning if any chunk fails
//   - Up-front quota reservation (getRemaining check before consuming)

import { NextResponse } from 'next/server'
import OpenAI from 'openai'
import { del } from '@vercel/blob'
import { createClient as createSupabaseServerClient } from '@/lib/supabase/server'
import { bumpTranscriptionCount } from '@/lib/stats'
import { WHISPER_PROMPT } from '@/lib/transcribe/prompt'
import { extractAudio, getMediaInfo, splitAudio, chunkCountForSize } from '@/lib/audio-pipeline'
import { mergeChunks, findFailedChunks } from '@/lib/transcript-merge'

export const runtime = 'nodejs'
// ffmpeg split + 3 parallel Whisper calls + merge needs headroom. The
// /api/transcribe maxDuration is 300; we match.
export const maxDuration = 300

const groq = process.env.GROQ_API_KEY
  ? new OpenAI({
      apiKey: process.env.GROQ_API_KEY,
      baseURL: 'https://api.groq.com/openai/v1',
    })
  : null

// 60 MB per chunk = Groq's comfortable single-call ceiling. Decimal MB
// (1,000,000) to match what users see; see UploadZone for unit rationale.
const CHUNK_THRESHOLD_BYTES = 60 * 1000 * 1000
const AUTH_MAX_BYTES = 180 * 1000 * 1000  // 3 × CHUNK_THRESHOLD
const AUTH_DAILY_LIMIT = 7

// Reuse the canonical blob-host check from /api/transcribe so a malicious
// caller can't point us at an arbitrary URL.
function isOurBlobUrl(url) {
  try {
    const u = new URL(url)
    return /\.public\.blob\.vercel-storage\.com$/.test(u.host)
  } catch {
    return false
  }
}

// Transcribe a single chunk (Buffer) via Groq. One retry on transient errors
// (429 / 5xx / network). Returns the raw transcription object, or throws.
//
// We use whisper-large-v3 like the main route. The chunk is sent as a File
// with extension hint so Whisper's filename validator accepts it.
async function transcribeChunkBuffer(chunkBuffer, language, hintExt = 'm4a') {
  if (!groq) throw new Error('Groq not configured')
  const mimeForExt = {
    m4a: 'audio/mp4',
    mp3: 'audio/mpeg',
    wav: 'audio/wav',
    webm: 'audio/webm',
    ogg: 'audio/ogg',
    flac: 'audio/flac',
    mp4: 'video/mp4',
  }
  const file = new File(
    [chunkBuffer],
    `chunk.${hintExt}`,
    { type: mimeForExt[hintExt] || 'audio/mp4' }
  )
  const baseParams = {
    file,
    model: 'whisper-large-v3',
    response_format: 'verbose_json',
    prompt: WHISPER_PROMPT,
    ...(language ? { language } : {}),
  }
  let lastErr = null
  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      return await groq.audio.transcriptions.create(baseParams)
    } catch (err) {
      lastErr = err
      if (err?.status === 400) throw err // bad input, retry won't help
      const transient =
        err?.status === 429 ||
        (err?.status >= 500 && err?.status < 600) ||
        !err?.status
      if (attempt === 0 && transient) {
        await new Promise((r) => setTimeout(r, 3000))
        continue
      }
      break
    }
  }
  throw lastErr ?? new Error('Unknown Groq transcription error')
}

// Helper: turn ffmpeg media info + buffer into the audio buffer we'll split.
// If the input has a video stream, we extract audio first (drops 10-30× in size).
async function ensureAudioOnly(buffer, fileType, fileName) {
  const ext = (fileName?.split('.').pop() || '').toLowerCase()
  const info = await getMediaInfo(buffer, ext || 'bin')
  if (info.hasVideo) {
    const audioBuffer = await extractAudio(buffer, ext || 'mp4')
    // Re-probe audio for accurate duration (extract is a re-encode; ffprobe
    // on the new file gives the cleanest number).
    const audioInfo = await getMediaInfo(audioBuffer, 'm4a')
    return { buffer: audioBuffer, durationSec: audioInfo.durationSec, ext: 'm4a' }
  }
  return { buffer, durationSec: info.durationSec, ext: ext || 'mp3' }
}

export async function POST(request) {
  let blobUrl = null
  let shouldDeleteBlob = true

  try {
    // ── Auth check (required for this endpoint) ──────────────────────────
    let authUser = null
    try {
      const supabase = createSupabaseServerClient()
      const { data } = await supabase.auth.getUser()
      authUser = data?.user ?? null
    } catch {
      // Treat as anonymous on lookup failure.
    }
    if (!authUser) {
      return NextResponse.json(
        { error: 'Sign in required to transcribe files larger than 60 MB.', signInHelps: true },
        { status: 401 }
      )
    }

    // ── Parse JSON body ─────────────────────────────────────────────────
    let body
    try {
      body = await request.json()
    } catch {
      return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 })
    }
    blobUrl = body?.blobUrl
    const language = body?.language || undefined
    const fileName = body?.fileName || 'audio.mp3'
    const fileType = body?.fileType || 'audio/mpeg'
    const fileSize = Number(body?.fileSize) || 0

    if (!blobUrl || typeof blobUrl !== 'string') {
      return NextResponse.json({ error: 'No file provided.' }, { status: 400 })
    }
    if (!isOurBlobUrl(blobUrl)) {
      return NextResponse.json({ error: 'Invalid file reference.' }, { status: 400 })
    }
    if (fileSize > AUTH_MAX_BYTES) {
      return NextResponse.json(
        { error: `File too large. Maximum size is ${AUTH_MAX_BYTES / 1024 / 1024} MB.` },
        { status: 413 }
      )
    }

    // ── Fetch blob ──────────────────────────────────────────────────────
    const blobRes = await fetch(blobUrl)
    if (!blobRes.ok) {
      console.error('[transcribe-multi] blob fetch failed', blobRes.status, blobUrl)
      return NextResponse.json(
        { error: 'Could not retrieve the uploaded file. Please try again.' },
        { status: 500 }
      )
    }
    const arrayBuffer = await blobRes.arrayBuffer()
    if (arrayBuffer.byteLength > AUTH_MAX_BYTES) {
      return NextResponse.json(
        { error: `File too large. Maximum size is ${AUTH_MAX_BYTES / 1024 / 1024} MB.` },
        { status: 413 }
      )
    }
    const buffer = Buffer.from(arrayBuffer)

    // ── Strip video if present; we count credits by AUDIO size ──────────
    const { buffer: audioBuffer, durationSec, ext: audioExt } = await ensureAudioOnly(
      buffer,
      fileType,
      fileName
    )
    const audioSize = audioBuffer.byteLength
    const chunkCount = chunkCountForSize(audioSize, 60, 3)

    // If after audio extraction the content fits in one chunk, this route
    // shouldn't have been called — the client should use /api/transcribe
    // for single-chunk transcriptions. But handle gracefully: just process
    // as 1 chunk here (still 1 credit burn).
    //
    // Up-front credit check: getRemaining before consuming anything.
    let limiter = null
    if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
      const { Ratelimit } = await import('@upstash/ratelimit')
      const { Redis } = await import('@upstash/redis')
      const redis = new Redis({
        url: process.env.UPSTASH_REDIS_REST_URL,
        token: process.env.UPSTASH_REDIS_REST_TOKEN,
      })
      limiter = new Ratelimit({
        redis,
        // MUST match /api/transcribe authDaily prefix exactly so credits
        // are shared across both routes (single-file and multi-chunk).
        limiter: Ratelimit.slidingWindow(AUTH_DAILY_LIMIT, '24 h'),
        prefix: 'mictoo:rl:auth:d',
        analytics: false,
      })
    }
    if (limiter) {
      const { remaining } = await limiter.getRemaining(authUser.id)
      if (remaining < chunkCount) {
        return NextResponse.json(
          {
            error: `This file needs ${chunkCount} credits, but you have ${remaining} remaining today.`,
            signInHelps: false,
            chunkCount,
            remaining,
          },
          { status: 429 }
        )
      }
      // Atomically reserve N credits.
      for (let i = 0; i < chunkCount; i++) {
        const { success } = await limiter.limit(authUser.id)
        if (!success) {
          // Race: somebody else's request consumed in between. Bail.
          return NextResponse.json(
            {
              error: `Credits exhausted while reserving. Please retry.`,
              signInHelps: false,
            },
            { status: 429 }
          )
        }
      }
    }

    // ── Split into chunks ──────────────────────────────────────────────
    // For chunkCount === 1 we skip the split and just transcribe the audio
    // buffer directly.
    let chunkInputs
    if (chunkCount === 1) {
      chunkInputs = [{ buffer: audioBuffer, startSec: 0, endSec: durationSec, durationSec }]
    } else {
      chunkInputs = await splitAudio(audioBuffer, chunkCount, durationSec, audioExt)
    }

    // ── Transcribe each chunk in parallel ──────────────────────────────
    const chunkResults = await Promise.all(
      chunkInputs.map(async (chunk) => {
        try {
          const t = await transcribeChunkBuffer(chunk.buffer, language, 'm4a')
          return {
            startSec: chunk.startSec,
            endSec: chunk.endSec,
            durationSec: chunk.durationSec,
            transcript: {
              text: t.text || '',
              segments: t.segments || [],
              language: t.language,
            },
          }
        } catch (err) {
          console.error(`[transcribe-multi] chunk @ ${chunk.startSec.toFixed(1)}s failed:`, err?.message || err)
          return {
            startSec: chunk.startSec,
            endSec: chunk.endSec,
            durationSec: chunk.durationSec,
            transcript: null,
            error: err?.message || 'Chunk transcription failed',
          }
        }
      })
    )

    // ── Merge ────────────────────────────────────────────────────────────
    const merged = mergeChunks(chunkResults)
    const failed = findFailedChunks(chunkResults)
    if (failed.length === chunkResults.length) {
      // All chunks failed — that's a server-side error, not a partial result.
      return NextResponse.json(
        { error: 'All chunks failed to transcribe. Please try again.' },
        { status: 502 }
      )
    }

    // Success-path log: one line, parseable like the main route's "[transcribe] ok"
    console.log(
      `[transcribe-multi] ok user=${authUser.id} chunks=${chunkCount} failed=${failed.length} duration_sec=${Math.round(durationSec)} audio_bytes=${audioSize} lang=${merged.language || 'null'}`
    )

    // Best-effort stats bump (counts each full transcription as 1, not N)
    bumpTranscriptionCount()

    // ── Save to history (best effort; failures don't break the response) ──
    let transcriptId = null
    try {
      const supabase = createSupabaseServerClient()
      const { data, error } = await supabase
        .from('transcripts')
        .insert({
          user_id: authUser.id,
          source: fileName,
          language: merged.language || null,
          duration_sec: durationSec,
          text: merged.text,
          segments: merged.segments,
        })
        .select('id')
        .single()
      if (error) console.error('[transcribe-multi] history insert failed:', error.message)
      else transcriptId = data?.id ?? null
    } catch (err) {
      console.error('[transcribe-multi] history save error:', err?.message || err)
    }

    return NextResponse.json({
      text: merged.text,
      segments: merged.segments,
      language: merged.language,
      durationSec,
      chunkCount,
      failedChunks: failed.length ? failed : undefined,
      transcriptId,
      _provider: 'multi-chunk',
    })
  } catch (err) {
    console.error('[transcribe-multi] route error:', err?.message || err)
    return NextResponse.json(
      { error: 'Server error processing the big file. Please try again.' },
      { status: 500 }
    )
  } finally {
    if (shouldDeleteBlob && blobUrl) {
      del(blobUrl).catch((err) => {
        console.error('[transcribe-multi] blob cleanup failed:', err?.message || err)
      })
    }
  }
}
