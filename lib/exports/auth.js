// Shared auth-check helper for the /api/export/* routes. Returns the
// authenticated user or null (so callers can decide what to do — usually
// return a 401 so the client can redirect to /sign-in).

import { createClient } from '@/lib/supabase/server'

export async function requireUser() {
  const supabase = createClient()
  const { data: { user }, error } = await supabase.auth.getUser()
  if (error || !user) return null
  return user
}
