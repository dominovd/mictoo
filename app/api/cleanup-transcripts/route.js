// Daily Vercel Cron — deletes transcripts older than the 7-day retention
// window we promise to users on /history. Uses the service-role Supabase
// client because RLS would otherwise scope deletes to a single user.

import { NextResponse } from 'next/server'
import { createServiceClient } from '@/lib/supabase/server'

export const runtime = 'nodejs'
export const maxDuration = 60

const RETENTION_DAYS = 7

export async function GET(request) {
  const authHeader = request.headers.get('authorization')
  if (!process.env.CRON_SECRET || authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new Response('Unauthorized', { status: 401 })
  }

  const cutoffIso = new Date(Date.now() - RETENTION_DAYS * 24 * 60 * 60 * 1000).toISOString()

  try {
    const supabase = createServiceClient()
    const { data, error } = await supabase
      .from('transcripts')
      .delete()
      .lt('created_at', cutoffIso)
      .select('id')

    if (error) {
      console.error('[cleanup-transcripts]', error.message)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }
    return NextResponse.json({ deleted: data?.length || 0, cutoff: cutoffIso })
  } catch (err) {
    console.error('[cleanup-transcripts] threw', err?.message)
    return NextResponse.json({ error: err?.message || 'Cleanup failed.' }, { status: 500 })
  }
}

const methodNotAllowed = () =>
  NextResponse.json(
    { error: 'Method not allowed. Cron-only endpoint.' },
    { status: 405, headers: { Allow: 'GET' } }
  )

export const POST = methodNotAllowed
export const PUT = methodNotAllowed
export const PATCH = methodNotAllowed
export const DELETE = methodNotAllowed
export const HEAD = methodNotAllowed
export const OPTIONS = methodNotAllowed
