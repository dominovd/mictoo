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
