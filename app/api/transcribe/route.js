import { NextResponse } from 'next/server'
import OpenAI from 'openai'

export const runtime = 'nodejs'
export const maxDuration = 60

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

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
    // 10 transcriptions per IP per hour (slidingWindow blocks at limit, so ~10 pass through)
    limiter: Ratelimit.slidingWindow(10, '1 h'),
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

export async function POST(request) {
  try {
    // ── Rate limit check ────────────────────────────────────────────────────
    const limiter = await getRatelimiter()
    if (limiter) {
      const ip = getIP(request)
      const { success, limit, remaining, reset } = await limiter.limit(ip)

      if (!success) {
        const resetIn = Math.ceil((reset - Date.now()) / 1000 / 60)
        return NextResponse.json(
          {
            error: `Too many requests. You've used your 5 free transcriptions this hour. Try again in ~${resetIn} min.`,
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

    // ── Parse form ──────────────────────────────────────────────────────────
    const formData = await request.formData()
    const file = formData.get('file')
    const language = formData.get('language') || undefined // e.g. 'en', 'es'; undefined = auto-detect

    if (!file || typeof file === 'string') {
      return NextResponse.json({ error: 'No file provided.' }, { status: 400 })
    }

    const MAX_BYTES = 25 * 1024 * 1024
    if (file.size > MAX_BYTES) {
      return NextResponse.json(
        { error: 'File too large. Maximum size is 25MB.' },
        { status: 413 }
      )
    }

    // ── Whisper ─────────────────────────────────────────────────────────────
    const arrayBuffer = await file.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    const whisperFile = new File([buffer], file.name || 'audio.mp3', {
      type: file.type || 'audio/mpeg',
    })

    try {
      const transcription = await openai.audio.transcriptions.create({
        file: whisperFile,
        model: 'whisper-1',
        response_format: 'verbose_json',
        ...(language ? { language } : {}),
      })

      return NextResponse.json({
        text: transcription.text,
        segments: transcription.segments ?? [],
      })
    } catch (err) {
      // Inner catch — file metadata is available for richer logs.
      // Helps us see which formats/codecs actually fail in production.
      const fileMeta = { name: file.name, type: file.type, size: file.size }
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
  }
}

// ── Reject non-POST methods cleanly with 405 ─────────────────────────────────
// Bots and crawlers regularly hit /api/transcribe with GET/HEAD; without these
// explicit handlers Vercel sometimes rejects them at the edge with 413, which
// pollutes the logs. Returning 405 is the correct HTTP semantic and is cheap.

const methodNotAllowed = () =>
  NextResponse.json(
    { error: 'Method not allowed. Use POST with a file in form-data.' },
    { status: 405, headers: { Allow: 'POST' } }
  )

export const GET = methodNotAllowed
export const HEAD = methodNotAllowed
export const PUT = methodNotAllowed
export const PATCH = methodNotAllowed
export const DELETE = methodNotAllowed
export const OPTIONS = methodNotAllowed
