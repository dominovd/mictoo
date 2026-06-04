import { NextResponse } from 'next/server'
import { createHash } from 'crypto'
import { fetchTranscript } from '@/lib/yt-transcript-provider'
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
    // Tight limits during the transcriptapi Free-tier launch (100 credits
    // lifetime). Anon = 3/day, auth = 5/day. transcriptapi already serves
    // repeat fetches of the same video from a shared 24h cache for free,
    // so heavy users hitting the same popular videos don't actually burn
    // our quota. These caps protect against (a) accidental loops and
    // (b) one bad actor scraping us. Bump them up after we move to the
    // Annual $4.50/mo (1000 credits/mo recurring) plan.
    anon: new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(3, '24 h'),
      analytics: true,
      prefix: 'mictoo:rl:yt:anon:d',
    }),
    authDaily: new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(5, '24 h'),
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
      } else {
        const a = await limiters.anon.limit(getAnonKey(request))
        if (!a.success) {
          return NextResponse.json(
            { error: `You've used ${a.limit} free YouTube fetches today. Sign up for ${5} per day.`, signInHelps: true },
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
      result = await fetchTranscript(url)
    } catch (err) {
      const code = err?.code || 'UNKNOWN'
      const msg = err?.message || 'Could not fetch captions.'
      console.error('youtube-captions:', code, msg)
      // NO_CAPTIONS = soft fail. Surface to client with noCaptions:true so
      // the UI shows the "use the download guide" fallback instead of a
      // generic error.
      if (code === 'NO_CAPTIONS') {
        return NextResponse.json({ noCaptions: true, error: msg }, { status: 200 })
      }
      if (code === 'BAD_URL') {
        return NextResponse.json({ error: msg }, { status: 400 })
      }
      if (code === 'NO_API_KEY') {
        // Misconfiguration — env var missing in prod. Surface a friendly
        // error but log loudly so we notice.
        console.error('CRITICAL: TRANSCRIPTAPI_KEY missing from environment.')
        return NextResponse.json({ error: 'YouTube ingestion temporarily unavailable.' }, { status: 503 })
      }
      if (code === 'RATE_LIMITED') {
        // Provider rate limit (not ours). Bubble up.
        return NextResponse.json({ error: 'Upstream rate limit, please retry in a minute.' }, { status: 429 })
      }
      return NextResponse.json({ error: msg, code }, { status: 502 })
    }

    return NextResponse.json({
      videoId: result.videoId,
      title: result.title,
      author: result.author,
      durationSec: result.durationSec,
      languageCode: result.language,
      languageName: undefined,
      isAutoGenerated: false,
      segments: result.segments,
      text: result.text,
      provider: result.provider,
    })
  } catch (err) {
    console.error('youtube-captions route error:', err?.message || err)
    return NextResponse.json({ error: 'Server error.' }, { status: 500 })
  }
}
