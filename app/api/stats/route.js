import { NextResponse } from 'next/server'
import { getTranscriptionCount } from '@/lib/stats'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

// Read-only counter endpoint for the UI badge in SiteFooter.
// Cached at the edge for 5 minutes — the counter doesn't need real-time precision.
export async function GET() {
  const count = await getTranscriptionCount()

  return NextResponse.json(
    { count },
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
