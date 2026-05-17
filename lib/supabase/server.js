// Supabase client for Server Components, Route Handlers, and Server Actions.
// Reads/writes session cookies via Next.js `cookies()` so the session stays
// in sync between server renders and the browser.
//
// Usage in a Route Handler:
//   import { createClient } from '@/lib/supabase/server'
//   export async function GET() {
//     const supabase = createClient()
//     const { data: { user } } = await supabase.auth.getUser()
//     ...
//   }

import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export function createClient() {
  const cookieStore = cookies()

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            )
          } catch {
            // The `setAll` method was called from a Server Component.
            // Safe to ignore if you have middleware refreshing user sessions.
          }
        },
      },
    }
  )
}

// Service-role client — bypasses RLS. ONLY use in trusted server code where
// you need to act on behalf of any user (e.g. the transcribe-worker writing
// to another user's transcripts row). NEVER expose the service role key to
// the browser; this function should only ever be called from Route Handlers
// or Server Actions.
import { createClient as createSupabaseClient } from '@supabase/supabase-js'

export function createServiceClient() {
  if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
    throw new Error('SUPABASE_SERVICE_ROLE_KEY not set')
  }
  return createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY,
    { auth: { persistSession: false, autoRefreshToken: false } }
  )
}
