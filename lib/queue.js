// Transcription job queue backed by Upstash Redis.
// Used when Groq returns 429 (daily-cap exhaustion or per-minute spike beyond
// our quick inline retry) — instead of paying for the ~3.2x more expensive
// OpenAI Whisper-1, we enqueue the job and let a Vercel Cron worker process
// it as Groq capacity becomes available.
//
// Falls back to a no-op (returns null/throws) if Upstash env vars are missing,
// so dev environments without Redis still work for everything except queueing.

import crypto from 'node:crypto'

const QUEUE_KEY = 'mictoo:transcribe:queue'
const JOB_KEY_PREFIX = 'mictoo:transcribe:job:'
const JOB_TTL_SECONDS = 60 * 60 // 1 hour — aligns with cleanup-blobs cron
// Hard cap on the queue length. Prevents a bot or buggy client from filling
// the queue with thousands of jobs (which would all eventually try to call
// Groq/OpenAI and burn money or DOS the worker). Throws QueueFullError when
// the cap would be crossed by a new enqueue.
const QUEUE_FULL_LIMIT = 30

export class QueueFullError extends Error {
  constructor(currentLength) {
    super(`Queue is full (${currentLength} jobs pending).`)
    this.name = 'QueueFullError'
    this.currentLength = currentLength
  }
}

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

function jobKey(jobId) {
  return `${JOB_KEY_PREFIX}${jobId}`
}

// `segments` is the heaviest field and is the only thing that needs explicit
// JSON encoding before going into the Redis Hash (Upstash stores all hash
// values as strings; objects/arrays would otherwise stringify to "[object …]").
function encodeJob(data) {
  const out = { ...data }
  if (out.segments !== undefined && typeof out.segments !== 'string') {
    out.segments = JSON.stringify(out.segments)
  }
  return out
}

function decodeJob(data) {
  if (!data || Object.keys(data).length === 0) return null
  const out = { ...data }
  if (typeof out.segments === 'string') {
    try {
      out.segments = JSON.parse(out.segments)
    } catch {
      out.segments = []
    }
  }
  // Coerce numeric/string fields back to expected types.
  if (out.fileSize !== undefined) out.fileSize = Number(out.fileSize)
  if (out.attemptCount !== undefined) out.attemptCount = Number(out.attemptCount)
  if (out.createdAt !== undefined) out.createdAt = Number(out.createdAt)
  if (out.startedAt !== undefined) out.startedAt = Number(out.startedAt)
  if (out.completedAt !== undefined) out.completedAt = Number(out.completedAt)
  return out
}

export async function isQueueAvailable() {
  return Boolean(await getRedis())
}

// Adds a new job to the queue. Returns the generated jobId.
// `payload` should contain { blobUrl, language, fileName, fileType, fileSize }.
// Optional `userId` is captured so the worker can save the finished transcript
// to that user's history (Phase B). Anonymous jobs leave it null.
export async function enqueueJob(payload) {
  const redis = await getRedis()
  if (!redis) throw new Error('Queue not configured (Upstash Redis env vars missing).')

  // Refuse new jobs if the queue is already saturated. Caller (e.g.
  // /api/transcribe) catches QueueFullError and returns 503 so the user
  // sees "service busy, try again later" instead of silently joining a
  // gigantic backlog.
  const currentLen = await redis.llen(QUEUE_KEY)
  if (currentLen >= QUEUE_FULL_LIMIT) {
    throw new QueueFullError(currentLen)
  }

  const jobId = crypto.randomUUID()
  const data = encodeJob({
    status: 'queued',
    createdAt: Date.now(),
    attemptCount: 0,
    ...payload,
  })

  await redis.hset(jobKey(jobId), data)
  await redis.expire(jobKey(jobId), JOB_TTL_SECONDS)
  // LPUSH at head, worker RPOPs from tail = FIFO.
  await redis.lpush(QUEUE_KEY, jobId)

  return jobId
}

// Reads a job by id, including computed `position` and `queueLength`
// when the job is still queued. Returns null if the job has expired/gone.
export async function getJob(jobId) {
  const redis = await getRedis()
  if (!redis) return null

  const raw = await redis.hgetall(jobKey(jobId))
  const job = decodeJob(raw)
  if (!job) return null

  if (job.status === 'queued') {
    const queueLength = await redis.llen(QUEUE_KEY)
    // LPOS returns 0-based index from the LPUSH end (newest).
    // Since worker RPOPs (oldest first), position-from-front = queueLength - lpos.
    const lposIndex = await redis.lpos(QUEUE_KEY, jobId)
    if (lposIndex !== null && lposIndex !== undefined) {
      job.position = queueLength - Number(lposIndex)
      job.queueLength = queueLength
    }
  }

  return job
}

// Worker entry point: atomically pulls the oldest job, marks it processing,
// returns its full payload. Returns null when the queue is empty.
export async function claimNextJob() {
  const redis = await getRedis()
  if (!redis) return null

  const jobId = await redis.rpop(QUEUE_KEY)
  if (!jobId) return null

  const raw = await redis.hgetall(jobKey(jobId))
  const job = decodeJob(raw)
  if (!job) {
    // Job hash expired between LPUSH and RPOP — TTL race. Skip cleanly.
    console.warn('[queue] claimed jobId with missing hash:', jobId)
    return null
  }

  await redis.hset(jobKey(jobId), {
    status: 'processing',
    startedAt: Date.now(),
  })
  await redis.expire(jobKey(jobId), JOB_TTL_SECONDS)

  return { jobId, ...job }
}

// Writes the successful transcription result back to the job hash.
// Status becomes 'completed' and the client polling endpoint will surface it.
// `transcriptId` (optional) is the id of the row inserted into the
// `transcripts` table for an authed user — surfaced to the client so it can
// later attach the AI summary to the same row.
export async function setJobResult(jobId, result) {
  const redis = await getRedis()
  if (!redis) return

  await redis.hset(
    jobKey(jobId),
    encodeJob({
      status: 'completed',
      completedAt: Date.now(),
      text: result.text || '',
      segments: result.segments || [],
      detectedLanguage: result.language || '',
      transcriptId: result.transcriptId || '',
    })
  )
  await redis.expire(jobKey(jobId), JOB_TTL_SECONDS)
}

export async function setJobError(jobId, errorMessage) {
  const redis = await getRedis()
  if (!redis) return

  await redis.hset(jobKey(jobId), {
    status: 'failed',
    completedAt: Date.now(),
    error: errorMessage || 'Transcription failed.',
  })
  await redis.expire(jobKey(jobId), JOB_TTL_SECONDS)
}

// Pushes a job back into the queue with an incremented attempt counter.
// Used when Groq is still rate-limited at worker run time — we'll retry on
// the next cron tick instead of paying for OpenAI fallback or failing the job.
export async function requeueJob(jobId) {
  const redis = await getRedis()
  if (!redis) return

  await redis.hincrby(jobKey(jobId), 'attemptCount', 1)
  await redis.hset(jobKey(jobId), { status: 'queued' })
  await redis.expire(jobKey(jobId), JOB_TTL_SECONDS)
  await redis.lpush(QUEUE_KEY, jobId)
}

export async function getQueueLength() {
  const redis = await getRedis()
  if (!redis) return 0
  return await redis.llen(QUEUE_KEY)
}
