// Minimal stats helpers backed by Upstash Redis.
// Same env vars as the rate limiter — `UPSTASH_REDIS_REST_URL` and
// `UPSTASH_REDIS_REST_TOKEN`. If they're missing, every function is a no-op
// and getTranscriptionCount() returns null so callers can hide the UI.

const COUNTER_KEY = 'mictoo:transcribed_count'
// Separate counter for the YouTube URL → transcript flow (Wave 8.5).
// Tracking this independently of file-upload transcriptions lets us
// answer "is URL ingestion actually used?" at the 2026-06-24 review
// without grepping logs. Only successful fetches bump the count.
const YT_COUNTER_KEY = 'mictoo:youtube_fetched_count'

let redisPromise = null

async function getRedis() {
  if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
    return null
  }
  if (!redisPromise) {
    redisPromise = (async () => {
      const { Redis } = await import('@upstash/redis')
      return new Redis({
        url: process.env.UPSTASH_REDIS_REST_URL,
        token: process.env.UPSTASH_REDIS_REST_TOKEN,
      })
    })()
  }
  return redisPromise
}

// Increment after a successful transcription. Fire-and-forget — never blocks
// the user response. Errors are swallowed (counter is non-critical).
export async function bumpTranscriptionCount() {
  try {
    const redis = await getRedis()
    if (!redis) return
    await redis.incr(COUNTER_KEY)
  } catch (err) {
    console.error('[stats] bumpTranscriptionCount failed', err?.message)
  }
}

// Read the current counter. Returns null if Upstash isn't configured
// or if the read fails. UI should hide the badge in those cases.
export async function getTranscriptionCount() {
  try {
    const redis = await getRedis()
    if (!redis) return null
    const value = await redis.get(COUNTER_KEY)
    if (value == null) return 0
    const n = Number(value)
    return Number.isFinite(n) ? n : 0
  } catch (err) {
    console.error('[stats] getTranscriptionCount failed', err?.message)
    return null
  }
}

// Same pattern as above for the YouTube URL fetch counter. Bumped from
// /api/youtube-captions on a successful transcript pull, read from
// /api/stats so the UI can show how many URLs we've processed.
export async function bumpYouTubeFetchCount() {
  try {
    const redis = await getRedis()
    if (!redis) return
    await redis.incr(YT_COUNTER_KEY)
  } catch (err) {
    console.error('[stats] bumpYouTubeFetchCount failed', err?.message)
  }
}

export async function getYouTubeFetchCount() {
  try {
    const redis = await getRedis()
    if (!redis) return null
    const value = await redis.get(YT_COUNTER_KEY)
    if (value == null) return 0
    const n = Number(value)
    return Number.isFinite(n) ? n : 0
  } catch (err) {
    console.error('[stats] getYouTubeFetchCount failed', err?.message)
    return null
  }
}
