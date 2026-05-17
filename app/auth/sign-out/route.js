// Sign out — clears the session cookie and redirects home.
// POST-only so a stale GET (e.g. bot/prefetcher) can't accidentally log
// users out.

import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export const dynamic = 'force-dynamic'

export async function POST(request) {
  const supabase = createClient()
  await supabase.auth.signOut()
  const origin = new URL(request.url).origin
  return NextResponse.redirect(`${origin}/`, { status: 303 })
}

export async function GET() {
  return NextResponse.json(
    { error: 'Use POST to sign out.' },
    { status: 405, headers: { Allow: 'POST' } }
  )
}
