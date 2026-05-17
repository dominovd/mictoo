// Session-refresh helper used by the top-level `middleware.js`.
// Runs on every request, refreshes the Supabase session cookie if it's about
// to expire, and forwards the updated cookie to both the user's browser and
// the downstream Server Component / Route Handler.
//
// Without this, server-rendered pages would see stale sessions.

import { createServerClient } from '@supabase/ssr'
import { NextResponse } from 'next/server'

export async function updateSession(request) {
  let supabaseResponse = NextResponse.next({ request })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
          supabaseResponse = NextResponse.next({ request })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  // IMPORTANT: do not remove this line — calling getUser() refreshes the
  // session and updates the cookies if necessary.
  await supabase.auth.getUser()

  return supabaseResponse
}
