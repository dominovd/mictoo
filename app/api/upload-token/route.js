import { handleUpload } from '@vercel/blob/client'
import { NextResponse } from 'next/server'

export const runtime = 'nodejs'

// Issues a short-lived, scoped client token so the browser can upload the
// audio file directly to Vercel Blob, bypassing the 4.5 MB serverless body
// limit. The token is constrained to audio/video MIME types and ≤25 MB —
// Vercel enforces those server-side, so a malicious client can't override.
//
// IP rate-limit: the storage cost lives here (every upload becomes a stored
// blob until /api/transcribe deletes it, or the hourly cron sweep does).
// Without a limit a bot could fill the bucket with orphaned 25 MB files.

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
    // Same window as /api/transcribe — they're effectively paired endpoints.
    // 10 tokens/hour/IP is plenty for legit users (each transcription =
    // 1 token + 1 transcribe call) and tight enough to keep abuse bounded.
    limiter: Ratelimit.slidingWindow(10, '1 h'),
    analytics: true,
    prefix: 'mictoo:upload-token',
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

const ALLOWED_CONTENT_TYPES = [
  'audio/mpeg',
  'audio/mp4',
  'audio/wav',
  'audio/x-wav',
  'audio/m4a',
  'audio/x-m4a',
  'audio/ogg',
  'audio/webm',
  'audio/flac',
  'audio/aac',
  'audio/vnd.dlna.adts',
  'video/mp4',
  'video/webm',
  'video/mpeg',
  // Browsers sometimes send this for files they can't sniff (e.g. .flac on
  // Safari, .opus). Vercel Blob still validates extension internally, and
  // /api/transcribe re-checks via OpenAI which rejects non-audio anyway.
  'application/octet-stream',
]

const MAX_BYTES = 25 * 1024 * 1024 // 25 MB — OpenAI Whisper hard cap

export async function POST(request) {
  // ── handleUpload ──────────────────────────────────────────────────────────
  // The Vercel Blob client SDK in the browser POSTs to this endpoint twice:
  // first to request a token (body.type = 'blob.generate-client-token'),
  // then after upload to notify completion (body.type = 'blob.upload-completed').
  // We rate-limit only the FIRST call — the completion ping is a callback we
  // can't avoid and shouldn't consume the user's budget.
  let body
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 })
  }

  if (body?.type === 'blob.generate-client-token') {
    const limiter = await getRatelimiter()
    if (limiter) {
      const ip = getIP(request)
      const { success, reset } = await limiter.limit(ip)

      if (!success) {
        const resetIn = Math.ceil((reset - Date.now()) / 1000 / 60)
        return NextResponse.json(
          { error: `Too many uploads. Try again in ~${resetIn} min.` },
          { status: 429 }
        )
      }
    }
  }

  try {
    const jsonResponse = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async () => ({
        allowedContentTypes: ALLOWED_CONTENT_TYPES,
        maximumSizeInBytes: MAX_BYTES,
        // Random suffix on the path makes the public blob URL effectively
        // unguessable for the brief window between upload and deletion.
        addRandomSuffix: true,
        // tokenPayload is echoed back to onUploadCompleted — keep it minimal.
        tokenPayload: JSON.stringify({}),
      }),
      onUploadCompleted: async () => {
        // No-op for now. We could log here for audit, but blob URL is
        // already in the response the client receives and immediately
        // passes to /api/transcribe — there's nothing extra to record.
      },
    })

    return NextResponse.json(jsonResponse)
  } catch (err) {
    console.error('[upload-token]', err)
    return NextResponse.json(
      { error: err?.message || 'Failed to issue upload token.' },
      { status: 400 }
    )
  }
}

// Reject non-POST cleanly — same rationale as /api/transcribe.
const methodNotAllowed = () =>
  NextResponse.json(
    { error: 'Method not allowed.' },
    { status: 405, headers: { Allow: 'POST' } }
  )

export const GET = methodNotAllowed
export const HEAD = methodNotAllowed
export const PUT = methodNotAllowed
export const PATCH = methodNotAllowed
export const DELETE = methodNotAllowed
export const OPTIONS = methodNotAllowed
