// Minimal stats helpers backed by Upstash Redis.
// Same env vars as the rate limiter — `UPSTASH_REDIS_REST_URL` and
// `UPSTASH_REDIS_REST_TOKEN`. If they're missing, every function is a no-op
// and getTranscriptionCount() returns null so callers can hide the UI.

const COUNTER_KEY = 'mictoo:transcribed_count'

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
