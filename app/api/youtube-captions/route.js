import { NextResponse } from 'next/server'
import { createHash } from 'crypto'
import { fetchTranscript, extractYouTubeVideoId } from '@/lib/yt-transcript-provider'
import { bumpYouTubeFetchCount } from '@/lib/stats'
import { createClient as createSupabaseServerClient } from '@/lib/supabase/server'

// ──────────────────────────────────────────────────────────────────────────
// Transcript cache. Forever-TTL on Upstash KV: same video URL = same
// transcript = no point asking transcriptapi twice. Massive cost saver
// for the "Get full transcript" CTAs on /transcripts/{slug} pages, where
// 100 visitors clicking the same Ken Robinson summary translates to 1
// transcriptapi credit instead of 100.
//
// Cache also serves as a graceful degradation layer — if transcriptapi
// goes down (or our key runs out of credit), already-cached videos
// continue to work. The cost of a stale entry is near-zero because
// transcripts of public videos don't change.
//
// Key shape: yt:transcript:<videoId>
// Value: JSON-stringified TranscriptShape (see lib/yt-transcript-provider.js)
const CACHE_KEY = (vid) => `yt:transcript:${vid}`

let cacheRedisPromise = null
async function getCacheRedis() {
  if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
    return null
  }
  if (!cacheRedisPromise) {
    cacheRedisPromise = (async () => {
      const { Redis } = await import('@upstash/redis')
      return new Redis({
        url: process.env.UPSTASH_REDIS_REST_URL,
        token: process.env.UPSTASH_REDIS_REST_TOKEN,
      })
    })()
  }
  return cacheRedisPromise
}

async function getCachedTranscript(videoId) {
  try {
    const redis = await getCacheRedis()
    if (!redis) return null
    const cached = await redis.get(CACHE_KEY(videoId))
    if (!cached) return null
    // Upstash returns objects directly for JSON values stored via .set().
    // Just in case (older entries written by other code), tolerate strings.
    return typeof cached === 'string' ? JSON.parse(cached) : cached
  } catch (err) {
    console.error('[yt-cache] read failed', err?.message)
    return null
  }
}

async function setCachedTranscript(videoId, data) {
  try {
    const redis = await getCacheRedis()
    if (!redis) return
    // No expiry — transcripts of public videos don't change. If a video
    // gets DMCA'd or removed from YouTube, we can manually invalidate
    // with a one-off DEL command.
    await redis.set(CACHE_KEY(videoId), JSON.stringify(data))
  } catch (err) {
    console.error('[yt-cache] write failed', err?.message)
  }
}

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

    // ── Cache check (before burning a transcriptapi credit) ──────────────
    // Most "Get full transcript" CTAs from /transcripts/{slug} pages will
    // hit this — those 12 videos are bootstrap-warmed via
    // scripts/bootstrap-yt-cache.mjs, so the first user (and every
    // subsequent user) gets an instant cache hit, 0 credits.
    const cacheVideoId = extractYouTubeVideoId(url)
    if (cacheVideoId) {
      const cached = await getCachedTranscript(cacheVideoId)
      if (cached?.segments?.length) {
        bumpYouTubeFetchCount().catch(() => {})  // still count toward demand signal
        return NextResponse.json({
          ...cached,
          fromCache: true,
        })
      }
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

    // Fire-and-forget counter bump for the Wave 8.5 social proof badge on
    // /youtube-to-text + /transcribe-video-to-text. Never blocks the user
    // response, errors swallowed inside the helper. Only successful
    // fetches count — failures and cache hits-as-failures don't bump.
    bumpYouTubeFetchCount().catch(() => {})

    const payload = {
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
    }

    // Fire-and-forget cache write. If the cache write fails we still serve
    // the user — they get their transcript, and the next visitor for the
    // same video just pays another transcriptapi credit.
    setCachedTranscript(result.videoId, payload).catch(() => {})

    return NextResponse.json(payload)
  } catch (err) {
    console.error('youtube-captions route error:', err?.message || err)
    return NextResponse.json({ error: 'Server error.' }, { status: 500 })
  }
}
