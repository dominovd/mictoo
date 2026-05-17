// Supabase client for Client Components (runs in the browser).
// Uses the anon key, which is safe to expose — row-level security policies
// in the database control what each user can read/write.
//
// Import from any `'use client'` component:
//   import { createClient } from '@/lib/supabase/client'
//   const supabase = createClient()
//   const { data, error } = await supabase.auth.signInWithOtp({ email })

import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  )
}
