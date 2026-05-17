// DELETE /api/history/[id]
// Deletes one of the authenticated user's transcripts. RLS on the
// `transcripts` table guarantees a user can only delete their own row
// (the policy is `using (auth.uid() = user_id)`).
//
// Returns 401 if not authenticated, 404 if the row doesn't exist or
// belongs to someone else (RLS hides cross-user rows), 200 otherwise.

import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export const dynamic = 'force-dynamic'

export async function DELETE(_request, { params }) {
  const id = params?.id
  if (!id || typeof id !== 'string') {
    return NextResponse.json({ error: 'Missing id.' }, { status: 400 })
  }

  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) {
    return NextResponse.json({ error: 'Sign in required.' }, { status: 401 })
  }

  // RLS will only allow deleting a row where user_id = auth.uid(), so we
  // don't need to add a redundant filter here — but adding it makes the
  // 404 path explicit and faster (no row lookup ambiguity).
  const { data, error } = await supabase
    .from('transcripts')
    .delete()
    .eq('id', id)
    .eq('user_id', user.id)
    .select('id')
    .maybeSingle()

  if (error) {
    console.error('[history/delete] failed', error.message)
    return NextResponse.json({ error: 'Could not delete.' }, { status: 500 })
  }
  if (!data) {
    return NextResponse.json({ error: 'Not found.' }, { status: 404 })
  }
  return NextResponse.json({ ok: true })
}

const methodNotAllowed = () =>
  NextResponse.json(
    { error: 'Method not allowed. Use DELETE.' },
    { status: 405, headers: { Allow: 'DELETE' } }
  )

export const GET = methodNotAllowed
export const POST = methodNotAllowed
export const PUT = methodNotAllowed
export const PATCH = methodNotAllowed
export const HEAD = methodNotAllowed
export const OPTIONS = methodNotAllowed
