import { NextResponse } from 'next/server'
import OpenAI from 'openai'
import { del } from '@vercel/blob'
import { claimNextJob, setJobResult, setJobError, requeueJob } from '@/lib/queue'
import { bumpTranscriptionCount } from '@/lib/stats'

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

const MAX_ATTEMPTS = 5
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
  let whisperName = safeName
  if (isAac) whisperName = whisperName.replace(/\.aac$/, '.m4a')
  else if (isOpus) whisperName = whisperName.replace(/\.opus$/, '.ogg')
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

  const { jobId, blobUrl, language, fileName, fileType, fileSize, attemptCount } = job
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
      // 429 = Groq quota / rate limit. The whole point of the queue is to
      // wait this out instead of paying for OpenAI. Requeue and let the
      // next cron tick try again. Don't delete the blob — we still need it.
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
        // Exhausted attempts — surface a user-friendly message rather than
        // a raw 429. By the time we hit 5 retries Groq has been refusing
        // for at least ~5 minutes, which is genuinely a service problem.
        throw new Error(
          'Service is unusually busy right now. Please try again in a few minutes.'
        )
      }

      // 400 = bad file/codec — OpenAI won't help. Surface friendly error.
      if (err?.status === 400) {
        const friendly = isAac
          ? "This AAC recording uses a codec Whisper can't read directly. Convert it to MP3 or M4A first — QuickTime, Audacity, or any online audio converter can do this in seconds."
          : 'This file format or codec is not supported. Try exporting as MP3 or M4A, or extract the audio track if the file is video-only.'
        throw new Error(friendly)
      }

      // 5xx / network / unknown — try OpenAI fallback if the file is small
      // enough to be worth it. Anything larger just fails so we don't burn
      // ~$0.20 per file on a long podcast during a Groq incident.
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
      } else {
        throw err
      }
    }

    // ── Success ──────────────────────────────────────────────────────────
    await setJobResult(jobId, {
      text: transcription.text,
      segments: transcription.segments ?? [],
      language: transcription.language ?? null,
    })
    bumpTranscriptionCount()

    return NextResponse.json({ status: 'completed', jobId })
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
