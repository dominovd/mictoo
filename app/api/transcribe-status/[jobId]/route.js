import { NextResponse } from 'next/server'
import { getJob } from '@/lib/queue'

export const runtime = 'nodejs'

// Polling endpoint for queued transcription jobs.
// Returns one of:
//   { status: 'queued',     position, queueLength }
//   { status: 'processing' }
//   { status: 'completed',  text, segments, language }
//   { status: 'failed',     error }
// or 404 if the job is unknown / TTL-expired.

export async function GET(_request, { params }) {
  const jobId = params?.jobId
  if (!jobId || typeof jobId !== 'string') {
    return NextResponse.json({ error: 'Missing jobId.' }, { status: 400 })
  }

  const job = await getJob(jobId)
  if (!job) {
    return NextResponse.json({ error: 'Job not found or expired.' }, { status: 404 })
  }

  if (job.status === 'queued') {
    return NextResponse.json({
      status: 'queued',
      position: job.position ?? null,
      queueLength: job.queueLength ?? null,
    })
  }

  if (job.status === 'processing') {
    return NextResponse.json({ status: 'processing' })
  }

  if (job.status === 'completed') {
    return NextResponse.json({
      status: 'completed',
      text: job.text || '',
      segments: job.segments || [],
      language: job.detectedLanguage || null,
    })
  }

  // failed
  return NextResponse.json({
    status: 'failed',
    error: job.error || 'Transcription failed.',
  })
}

// Block other methods so bots probing the path get a clean 405.
const methodNotAllowed = () =>
  NextResponse.json(
    { error: 'Method not allowed. Use GET.' },
    { status: 405, headers: { Allow: 'GET' } }
  )

export const POST = methodNotAllowed
export const PUT = methodNotAllowed
export const PATCH = methodNotAllowed
export const DELETE = methodNotAllowed
export const HEAD = methodNotAllowed
export const OPTIONS = methodNotAllowed
