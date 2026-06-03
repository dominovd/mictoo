import { NextResponse } from 'next/server'
import { createHash } from 'crypto'
import { getYouTubeCaptions } from '@/lib/youtube-captions'
import { createClient as createSupabaseServerClient } from '@/lib/supabase/server'

export const runtime = 'nodejs'
export const maxDuration = 30

// Reuse the transcribe pattern: anonymous and authenticated buckets with a
// distinct rate-limit prefix so YouTube fetches don't share quota with
// regular audio uploads. Captions-fetch is cheap on our side (no Whisper,
// just one HTTP fetch + parse), so the limits can be more generous.
let rateLimiters = null
async function getRateLimiters() {
  if (rateLimiters) return rateLimiters
  if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
    return null
  }
  const { Ratelimit } = await import('@upstash/ratelimit')
  const { Redis } = await import('@upstash/redis')

  const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
  })

  rateLimiters = {
    // Captions fetch is essentially free for us — generous caps. Still
    // rate-limited to prevent abuse / accidental loops.
    anon: new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(10, '24 h'),
      analytics: true,
      prefix: 'mictoo:rl:yt:anon:d',
    }),
    authHourly: new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(20, '1 h'),
      analytics: true,
      prefix: 'mictoo:rl:yt:auth:h',
    }),
    authDaily: new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(40, '24 h'),
      analytics: true,
      prefix: 'mictoo:rl:yt:auth:d',
    }),
  }
  return rateLimiters
}

function getAnonKey(request) {
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
    request.headers.get('x-real-ip') ||
    '127.0.0.1'
  const ua = request.headers.get('user-agent') || ''
  const region =
    request.headers.get('x-vercel-ip-country') ||
    request.headers.get('x-vercel-ip-region') ||
    ''
  return createHash('md5').update(`${ip}|${ua}|${region}`).digest('hex')
}

function friendlyReset(resetMs) {
  const ms = Math.max(0, resetMs - Date.now())
  const minutes = Math.ceil(ms / 60000)
  if (minutes < 60) return `~${minutes} min`
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  return m ? `~${h}h ${m}m` : `~${h}h`
}

export async function POST(request) {
  try {
    let authUser = null
    try {
      const supabase = createSupabaseServerClient()
      const { data } = await supabase.auth.getUser()
      authUser = data?.user ?? null
    } catch {
      /* anonymous */
    }

    const limiters = await getRateLimiters()
    if (limiters) {
      if (authUser) {
        const d = await limiters.authDaily.limit(authUser.id)
        if (!d.success) {
          return NextResponse.json(
            { error: `Daily limit reached. You've used your ${d.limit} YouTube fetches for today. Resets in ${friendlyReset(d.reset)}.`, signInHelps: false },
            { status: 429 }
          )
        }
        const h = await limiters.authHourly.limit(authUser.id)
        if (!h.success) {
          return NextResponse.json(
            { error: `Too many requests this hour. You've used ${h.limit}. Try again in ${friendlyReset(h.reset)}.`, signInHelps: false },
            { status: 429 }
          )
        }
      } else {
        const a = await limiters.anon.limit(getAnonKey(request))
        if (!a.success) {
          return NextResponse.json(
            { error: `You've used ${a.limit} free YouTube fetches today. Sign up to keep going free.`, signInHelps: true },
            { status: 429 }
          )
        }
      }
    }

    let body
    try {
      body = await request.json()
    } catch {
      return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 })
    }

    const url = typeof body?.url === 'string' ? body.url.trim() : ''
    const preferLang = typeof body?.lang === 'string' ? body.lang : undefined
    if (!url) {
      return NextResponse.json({ error: 'Missing YouTube URL.' }, { status: 400 })
    }

    let result
    try {
      result = await getYouTubeCaptions(url, { preferLang })
    } catch (err) {
      // Map our internal error codes to user-facing messages + appropriate
      // HTTP status. NO_CAPTIONS is the single most common "expected" outcome
      // — surface it with 200 + a `noCaptions: true` flag so the client can
      // route the user to the download guide without an error UI.
      const code = err?.code || 'UNKNOWN'
      const msg = err?.message || 'Could not fetch captions.'
      if (code === 'NO_CAPTIONS') {
        return NextResponse.json({ noCaptions: true, error: msg }, { status: 200 })
      }
      if (code === 'BAD_URL') {
        return NextResponse.json({ error: msg }, { status: 400 })
      }
      // Treat YouTube blocking / fetch failures as 502 so the client can
      // distinguish them from validation errors.
      console.error('youtube-captions:', code, msg)
      return NextResponse.json({ error: msg, code }, { status: 502 })
    }

    // Reassemble a flat text for the existing transcript flow (Reader uses
    // segments, but Editor + exports work off `text`).
    const text = result.segments.map(s => s.text).join(' ').replace(/\s+/g, ' ').trim()

    return NextResponse.json({
      videoId: result.videoId,
      title: result.title,
      author: result.author,
      durationSec: result.durationSec,
      languageCode: result.languageCode,
      languageName: result.languageName,
      isAutoGenerated: result.isAutoGenerated,
      segments: result.segments,
      text,
    })
  } catch (err) {
    console.error('youtube-captions route error:', err?.message || err)
    return NextResponse.json({ error: 'Server error.' }, { status: 500 })
  }
}
