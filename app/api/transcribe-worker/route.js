import { NextResponse } from 'next/server'
import OpenAI from 'openai'
import { del } from '@vercel/blob'
import { claimNextJob, setJobResult, setJobError, requeueJob } from '@/lib/queue'
import { bumpTranscriptionCount } from '@/lib/stats'
import { createServiceClient } from '@/lib/supabase/server'

export const runtime = 'nodejs'
// Same ceiling as /api/transcribe — a 25 MB file may take up to ~5 min on the
// OpenAI fallback path. The worker only processes one job per cron tick anyway,
// so the long maxDuration is "cap" not "expected".
export const maxDuration = 300

// One worker tick processes a single job pulled from the queue. The Vercel
// Cron schedule (every minute) drains the queue over time. Jobs that hit a
// Groq 429 inside the worker get requeued (up to MAX_ATTEMPTS), so a Groq
// daily-cap exhaustion just means the queue takes longer to clear, not that
// we pay for OpenAI fallback.

// After 3 retries (~3 minutes user wait) we conclude Groq's daily cap is
// exhausted, not a per-minute spike. At that point we fall back to OpenAI
// rather than make the user wait longer for an inevitable failure.
const MAX_ATTEMPTS = 3
// Same cap as the sync /api/transcribe path: only files ≤ 10 MB are allowed
// to use the OpenAI fallback when Groq is broken with 5xx/network errors.
// Larger files stay in the queue or fail cleanly.
const FALLBACK_MAX_BYTES = 10 * 1024 * 1024

const groq = process.env.GROQ_API_KEY
  ? new OpenAI({
      apiKey: process.env.GROQ_API_KEY,
      baseURL: 'https://api.groq.com/openai/v1',
    })
  : null

const openai = process.env.OPENAI_API_KEY
  ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
  : null

function buildWhisperFile(buffer, fileName, fileType) {
  // Match the normalization logic in /api/transcribe — keeps the two paths
  // identical so a job that gets queued behaves the same as one that runs
  // inline. See the comments in that file for the why.
  const safeName = fileName.replace(/\.([A-Za-z0-9]+)$/, (_, ext) => `.${ext.toLowerCase()}`)
  const isAac = safeName.endsWith('.aac') || /^audio\/(x-)?aac$/i.test(fileType || '')
  const isOpus = safeName.endsWith('.opus') || /^audio\/opus$/i.test(fileType || '')
  const isMov =
    safeName.endsWith('.mov') ||
    safeName.endsWith('.qt') ||
    safeName.endsWith('.3gp') ||
    /^video\/(quicktime|3gpp)$/i.test(fileType || '')
  let whisperName = safeName
  if (isAac) whisperName = whisperName.replace(/\.aac$/, '.m4a')
  else if (isOpus) whisperName = whisperName.replace(/\.opus$/, '.ogg')
  else if (isMov) whisperName = whisperName.replace(/\.(mov|qt|3gp)$/, '.mp4')
  return { file: new File([buffer], whisperName, { type: fileType }), isAac }
}

export async function GET(request) {
  const authHeader = request.headers.get('authorization')
  if (!process.env.CRON_SECRET || authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new Response('Unauthorized', { status: 401 })
  }

  if (!groq) {
    return NextResponse.json(
      { error: 'No transcription provider configured.' },
      { status: 500 }
    )
  }

  const job = await claimNextJob()
  if (!job) {
    return NextResponse.json({ status: 'idle' })
  }

  const { jobId, blobUrl, language, fileName, fileType, fileSize, attemptCount, userId } = job
  let shouldDeleteBlob = true

  try {
    // ── Fetch the blob the user uploaded earlier ─────────────────────────
    const blobRes = await fetch(blobUrl)
    if (!blobRes.ok) {
      throw new Error(`Could not retrieve uploaded file (HTTP ${blobRes.status}).`)
    }
    const buffer = Buffer.from(await blobRes.arrayBuffer())
    const { file: whisperFile, isAac } = buildWhisperFile(buffer, fileName, fileType || 'audio/mpeg')

    // ── Try Groq ─────────────────────────────────────────────────────────
    let transcription
    try {
      transcription = await groq.audio.transcriptions.create({
        file: whisperFile,
        response_format: 'verbose_json',
        ...(language ? { language } : {}),
        model: 'whisper-large-v3',
      })
    } catch (err) {
      // 400 = bad file/codec. No retry, no fallback will help.
      if (err?.status === 400) {
        const friendly = isAac
          ? "This AAC recording uses a codec Whisper can't read directly. Convert it to MP3 or M4A first — QuickTime, Audacity, or any online audio converter can do this in seconds."
          : 'This file format or codec is not supported. Try exporting as MP3 or M4A, or extract the audio track if the file is video-only.'
        throw new Error(friendly)
      }

      // 429 = Groq quota / rate limit. The queue is designed to wait out
      // short per-minute spikes — retry a few times before paying for OpenAI.
      // BUT: if we keep getting 429 after MAX_ATTEMPTS, we've hit Groq's
      // *daily* cap (which won't refill for hours), not a momentary spike.
      // In that case fall through to the OpenAI fallback path below — the
      // user already waited ~5 min and we shouldn't fail their job to save
      // a few cents.
      if (err?.status === 429) {
        const nextAttempt = Number(attemptCount || 0) + 1
        if (nextAttempt < MAX_ATTEMPTS) {
          console.warn(
            `[transcribe-worker] groq 429, requeue jobId=${jobId} (attempt ${nextAttempt}/${MAX_ATTEMPTS})`
          )
          await requeueJob(jobId)
          shouldDeleteBlob = false
          return NextResponse.json({ status: 'requeued', jobId, attempt: nextAttempt })
        }
        // Retries exhausted — log and fall through to the fallback section
        // below. We don't throw here; the next block handles "should we try
        // OpenAI given the file size?"
        console.warn(
          `[transcribe-worker] groq 429 attempts exhausted (${MAX_ATTEMPTS}), jobId=${jobId} — attempting openai fallback`
        )
      }

      // For 429-after-exhaustion, 5xx, network, or any other transient error:
      // try OpenAI fallback if the file is small enough to be worth it.
      // Anything larger fails cleanly so we don't burn ~$0.20 per file on a
      // long podcast during a Groq daily-cap day.
      if (openai && fileSize <= FALLBACK_MAX_BYTES) {
        console.warn(
          `[transcribe-worker] fallback: groq ${err?.status ?? 'error'} → openai for jobId=${jobId}`,
          { code: err?.code, message: err?.message }
        )
        try {
          transcription = await openai.audio.transcriptions.create({
            file: whisperFile,
            response_format: 'verbose_json',
            ...(language ? { language } : {}),
            model: 'whisper-1',
          })
          console.warn(`[transcribe-worker] fallback: openai succeeded jobId=${jobId}`)
        } catch (fallbackErr) {
          console.error(
            `[transcribe-worker] fallback: openai also failed ${fallbackErr?.status ?? 'error'}`,
            { code: fallbackErr?.code, message: fallbackErr?.message }
          )
          throw fallbackErr
        }
      } else if (err?.status === 429) {
        // 429-exhausted + file too large + can't fall back to OpenAI.
        // Friendly message specifically about this case.
        throw new Error(
          'Service is at its daily limit and your file is too large for backup processing. Please try again tomorrow or upload a shorter file.'
        )
      } else {
        throw err
      }
    }

    // ── Success ──────────────────────────────────────────────────────────
    // We insert the transcript row first (below) and then echo the id back
    // via setJobResult so the client polling /api/transcribe-status can pick
    // it up. Order matters: insert → setJobResult.
    bumpTranscriptionCount()

    // Save to history for authenticated users. Worker uses the service-role
    // Supabase client because there's no user-cookie context here (cron-only
    // endpoint). We explicitly write user_id from the job so RLS would still
    // protect it on subsequent reads via the anon key.
    //
    // The inserted row's id is also tucked back into the job hash so the
    // client (which polls /api/transcribe-status) can find out which row to
    // attach the AI summary to when /api/summarize completes.
    let transcriptId = null
    if (userId) {
      const segs = transcription.segments ?? []
      const durationSeconds = segs.length ? segs[segs.length - 1]?.end ?? null : null
      try {
        const supabase = createServiceClient()
        const { data, error: dbErr } = await supabase
          .from('transcripts')
          .insert({
            user_id: userId,
            file_name: fileName,
            file_size: fileSize,
            file_type: fileType,
            language: transcription.language ?? null,
            text: transcription.text ?? '',
            segments: segs,
            duration_seconds: durationSeconds,
            source: 'web',
          })
          .select('id')
          .single()
        if (dbErr) {
          console.error('[transcribe-worker] save to history failed', dbErr.message)
        } else if (data) {
          transcriptId = data.id
        }
      } catch (err) {
        console.error('[transcribe-worker] save to history threw', err?.message)
      }
    }

    await setJobResult(jobId, {
      text: transcription.text,
      segments: transcription.segments ?? [],
      language: transcription.language ?? null,
      transcriptId,
    })

    return NextResponse.json({ status: 'completed', jobId, transcriptId })
  } catch (err) {
    console.error('[transcribe-worker] job failed', {
      jobId,
      attempt: attemptCount,
      message: err?.message,
    })
    await setJobError(jobId, err?.message || 'Transcription failed.')
    return NextResponse.json(
      { status: 'failed', jobId, error: err?.message },
      { status: 500 }
    )
  } finally {
    if (shouldDeleteBlob && blobUrl) {
      del(blobUrl).catch((err) => {
        console.error('[transcribe-worker] blob delete failed', err?.message)
      })
    }
  }
}

const methodNotAllowed = () =>
  NextResponse.json(
    { error: 'Method not allowed. Cron-only endpoint.' },
    { status: 405, headers: { Allow: 'GET' } }
  )

export const POST = methodNotAllowed
export const PUT = methodNotAllowed
export const PATCH = methodNotAllowed
export const DELETE = methodNotAllowed
export const HEAD = methodNotAllowed
export const OPTIONS = methodNotAllowed
