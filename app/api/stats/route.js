import { NextResponse } from 'next/server'
import { getTranscriptionCount, getYouTubeFetchCount } from '@/lib/stats'

export const runtime = 'nodejs'
// IMPORTANT: do NOT add `dynamic = 'force-dynamic'` here. Next.js 14
// treats that as "never cache the response", which causes Vercel's edge
// to ignore the Cache-Control header below. Cost analysis 2026-06-05
// showed this endpoint was being hit ~2k/day (one fetch per page load)
// because force-dynamic was bypassing the s-maxage=300 cache — driving
// Function Invocations + Fluid CPU + Observability events. Removing
// force-dynamic lets the edge cache for 5 min as intended.

// Read-only counter endpoint for the UI badges. Returns both the global
// transcription counter (footer trust badge) and the YouTube URL fetch
// counter (Wave 8.5 social proof on /youtube-to-text + /transcribe-video-
// to-text). Cached at the edge for 5 minutes — counters don't need
// real-time precision.
export async function GET() {
  const [count, youtubeCount] = await Promise.all([
    getTranscriptionCount(),
    getYouTubeFetchCount(),
  ])

  return NextResponse.json(
    { count, youtubeCount },
    {
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
      },
    }
  )
}

// Reject anything other than GET for the same reason as /api/transcribe.
const methodNotAllowed = () =>
  NextResponse.json(
    { error: 'Method not allowed.' },
    { status: 405, headers: { Allow: 'GET' } }
  )

export const POST = methodNotAllowed
export const PUT = methodNotAllowed
export const PATCH = methodNotAllowed
export const DELETE = methodNotAllowed
export const HEAD = methodNotAllowed
export const OPTIONS = methodNotAllowed
