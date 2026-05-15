import { NextResponse } from 'next/server'
import OpenAI from 'openai'
import { del } from '@vercel/blob'
import { bumpTranscriptionCount } from '@/lib/stats'

export const runtime = 'nodejs'
// 120s gives us headroom: ~10–20s to download a 25 MB blob from Vercel
// storage + 30–90s for Whisper on a long file. Pro plan supports up to 300s,
// but staying lower keeps cold-start billing in check.
export const maxDuration = 120

// ── Transcription providers ─────────────────────────────────────────────────
// Primary: Groq (whisper-large-v3, ~$0.00185/min vs OpenAI's $0.006/min, and
// free tier covers our current traffic). Schema-compatible with OpenAI Whisper:
// same `verbose_json` response with `segments[]`, `language`, `text` — so the
// rest of the pipeline (.srt / .txt+timestamps / paragraph splitting) keeps
// working unchanged.
//
// Fallback: OpenAI Whisper-1, used when Groq returns 429/5xx/network errors.
// Belt-and-braces — most of the time we never hit it. OpenAI key is also kept
// because /api/summarize still uses gpt-4o-mini.
const groq = process.env.GROQ_API_KEY
  ? new OpenAI({
      apiKey: process.env.GROQ_API_KEY,
      baseURL: 'https://api.groq.com/openai/v1',
    })
  : null

const openai = process.env.OPENAI_API_KEY
  ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
  : null

async function transcribeAudio(file, language) {
  const baseParams = {
    file,
    response_format: 'verbose_json',
    ...(language ? { language } : {}),
  }

  // Try Groq first.
  if (groq) {
    try {
      return await groq.audio.transcriptions.create({
        ...baseParams,
        model: 'whisper-large-v3',
      })
    } catch (err) {
      // 400 = file/codec is bad — falling back to another Whisper won't help.
      if (err?.status === 400) throw err
      // Everything else (429 quota, 5xx, network): try OpenAI if configured.
      if (!openai) throw err
      console.warn(
        '[transcribe] Groq failed, falling back to OpenAI',
        err?.status,
        err?.message
      )
      return await openai.audio.transcriptions.create({
        ...baseParams,
        model: 'whisper-1',
      })
    }
  }

  // No Groq configured — go straight to OpenAI.
  if (!openai) {
    throw new Error('No transcription provider configured (GROQ_API_KEY or OPENAI_API_KEY).')
  }
  return openai.audio.transcriptions.create({
    ...baseParams,
    model: 'whisper-1',
  })
}

// ── Rate limiter (optional — only activates if Upstash env vars are set) ────
let ratelimit = null

async function getRatelimiter() {
  if (ratelimit) return ratelimit
  if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
    return null
  }
  const { Ratelimit } = await import('@upstash/ratelimit')
  const { Redis } = await import('@upstash/redis')

  ratelimit = new Ratelimit({
    redis: new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
    }),
    // 3 transcriptions per IP per hour. Tightened from 10 to align with the
    // free-tier unit economics: at ~3.8 min avg per file and Groq pricing,
    // 3 files = ~$0.02 of API cost per user/hour, which AdSense margin on
    // surrounding SEO traffic can cover. Heavier use is the future paid tier.
    limiter: Ratelimit.slidingWindow(3, '1 h'),
    analytics: true,
  })
  return ratelimit
}

function getIP(request) {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
    request.headers.get('x-real-ip') ||
    '127.0.0.1'
  )
}

// Only accept blob URLs from our own Vercel Blob storage — prevents the
// route from being abused as an SSRF/proxy to fetch arbitrary URLs.
function isOurBlobUrl(url) {
  try {
    const parsed = new URL(url)
    return (
      parsed.protocol === 'https:' &&
      parsed.hostname.endsWith('.public.blob.vercel-storage.com')
    )
  } catch {
    return false
  }
}

const MAX_BYTES = 25 * 1024 * 1024 // OpenAI Whisper hard cap

export async function POST(request) {
  let blobUrl = null

  try {
    // ── Rate limit ──────────────────────────────────────────────────────────
    const limiter = await getRatelimiter()
    if (limiter) {
      const ip = getIP(request)
      const { success, limit, remaining, reset } = await limiter.limit(ip)

      if (!success) {
        const resetIn = Math.ceil((reset - Date.now()) / 1000 / 60)
        return NextResponse.json(
          {
            error: `Too many requests. You've used your 3 free transcriptions this hour. Try again in ~${resetIn} min.`,
          },
          {
            status: 429,
            headers: {
              'X-RateLimit-Limit': String(limit),
              'X-RateLimit-Remaining': String(remaining),
              'X-RateLimit-Reset': String(reset),
            },
          }
        )
      }
    }

    // ── Parse JSON body ─────────────────────────────────────────────────────
    let body
    try {
      body = await request.json()
    } catch {
      return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 })
    }

    blobUrl = body?.blobUrl
    const language = body?.language || undefined // 'en'/'es'/...; undefined = auto-detect
    const fileName = body?.fileName || 'audio.mp3'
    const fileType = body?.fileType || 'audio/mpeg'
    const fileSize = Number(body?.fileSize) || 0

    if (!blobUrl || typeof blobUrl !== 'string') {
      return NextResponse.json({ error: 'No file provided.' }, { status: 400 })
    }

    if (!isOurBlobUrl(blobUrl)) {
      // Don't echo the URL back — keep error generic to avoid signaling
      // what would be a valid host pattern to a fuzzer.
      return NextResponse.json({ error: 'Invalid file reference.' }, { status: 400 })
    }

    if (fileSize > MAX_BYTES) {
      return NextResponse.json(
        { error: 'File too large. Maximum size is 25MB.' },
        { status: 413 }
      )
    }

    // ── Fetch blob ──────────────────────────────────────────────────────────
    const blobRes = await fetch(blobUrl)
    if (!blobRes.ok) {
      console.error('[transcribe] blob fetch failed', blobRes.status, blobUrl)
      return NextResponse.json(
        { error: 'Could not retrieve the uploaded file. Please try again.' },
        { status: 500 }
      )
    }

    const arrayBuffer = await blobRes.arrayBuffer()
    if (arrayBuffer.byteLength > MAX_BYTES) {
      // Defense in depth — Vercel Blob already enforces this at upload time,
      // but a manual upload via a hand-issued token could in theory dodge it.
      return NextResponse.json(
        { error: 'File too large. Maximum size is 25MB.' },
        { status: 413 }
      )
    }
    const buffer = Buffer.from(arrayBuffer)

    const whisperFile = new File([buffer], fileName, { type: fileType })

    // ── Transcribe (Groq primary, OpenAI fallback) ──────────────────────────
    try {
      const transcription = await transcribeAudio(whisperFile, language)

      // Fire-and-forget counter bump. Doesn't block response. Safe if Upstash absent.
      bumpTranscriptionCount()

      return NextResponse.json({
        text: transcription.text,
        segments: transcription.segments ?? [],
        // Spoken language as detected by Whisper (e.g. "ukrainian", "english").
        // Used downstream by /api/summarize so the summary is written in the
        // same language as the recording, not the UI locale.
        language: transcription.language ?? null,
      })
    } catch (err) {
      // Inner catch — file metadata is available for richer logs.
      // Helps us see which formats/codecs actually fail in production.
      const fileMeta = { name: fileName, type: fileType, size: fileSize }
      console.error('[transcribe]', { ...fileMeta, status: err?.status, message: err?.message })

      // OpenAI returns 400 for unsupported codecs, empty audio, broken containers,
      // or audio-less video. Surface a friendly message instead of a 500.
      if (err?.status === 400) {
        return NextResponse.json(
          {
            error:
              "This file format or codec is not supported. Try exporting as MP3 or M4A, or extract the audio track if the file is video-only.",
          },
          { status: 400 }
        )
      }

      throw err  // re-throw for the outer catch to handle 401/429/etc.
    }
  } catch (err) {
    console.error('[transcribe]', err)

    if (err?.status === 401) {
      return NextResponse.json({ error: 'Invalid API key.' }, { status: 500 })
    }
    if (err?.status === 429) {
      return NextResponse.json(
        { error: 'Too many requests. Please wait a moment and try again.' },
        { status: 429 }
      )
    }

    return NextResponse.json(
      { error: err.message || 'Transcription failed. Please try again.' },
      { status: 500 }
    )
  } finally {
    // Clean up the uploaded blob in every case — success, OpenAI error,
    // rate limit, even unexpected crashes — so we never leak storage.
    // Best-effort: a failed delete just means the hourly cron will sweep it.
    if (blobUrl) {
      del(blobUrl).catch((err) => {
        console.error('[transcribe] blob delete failed', err?.message)
      })
    }
  }
}

// ── Reject non-POST methods cleanly with 405 ─────────────────────────────────
// Bots and crawlers regularly hit /api/transcribe with GET/HEAD; without these
// explicit handlers Vercel sometimes rejects them at the edge with 413, which
// pollutes the logs. Returning 405 is the correct HTTP semantic and is cheap.

const methodNotAllowed = () =>
  NextResponse.json(
    { error: 'Method not allowed. Use POST with JSON { blobUrl, language }.' },
    { status: 405, headers: { Allow: 'POST' } }
  )

export const GET = methodNotAllowed
export const HEAD = methodNotAllowed
export const PUT = methodNotAllowed
export const PATCH = methodNotAllowed
export const DELETE = methodNotAllowed
export const OPTIONS = methodNotAllowed
