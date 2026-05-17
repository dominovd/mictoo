// Auth callback — Supabase magic-link and OAuth providers redirect here
// after the user completes the external auth flow. We exchange the `code`
// for a session, set the cookie, and bounce the user to wherever they were
// going before sign-in (or `/account` by default).

import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export const dynamic = 'force-dynamic'

export async function GET(request) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  const next = searchParams.get('next') || '/account'

  if (!code) {
    // No code = malformed callback or auth was cancelled. Send to sign-in
    // with an error flag the page can use to show a friendly message.
    return NextResponse.redirect(`${origin}/sign-in?error=missing_code`)
  }

  const supabase = createClient()
  const { error } = await supabase.auth.exchangeCodeForSession(code)

  if (error) {
    console.error('[auth/callback] exchangeCodeForSession failed', error.message)
    return NextResponse.redirect(`${origin}/sign-in?error=auth_failed`)
  }

  // Use `next` if it's a same-origin relative path; otherwise fall back.
  const safeNext = next.startsWith('/') && !next.startsWith('//') ? next : '/account'
  return NextResponse.redirect(`${origin}${safeNext}`)
}
