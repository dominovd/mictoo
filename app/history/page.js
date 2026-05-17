// /history — authenticated user's recent transcripts.
//
// Server-renders the list (last 7 days, newest first) using the user-scoped
// Supabase client so RLS does the filtering at the database level. The
// per-row interactions (expand, re-export, delete) live in a Client
// Component to keep this page server-only.

import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import HistoryList from '@/components/HistoryList'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Your history — Mictoo',
  description: "Your recent transcripts, kept for 7 days. Re-export to any format or delete.",
  robots: { index: false, follow: false },
}

const RETENTION_DAYS = 7

export default async function HistoryPage() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) {
    redirect('/sign-in?next=/history')
  }

  const sinceIso = new Date(Date.now() - RETENTION_DAYS * 24 * 60 * 60 * 1000).toISOString()

  const { data: transcripts, error } = await supabase
    .from('transcripts')
    .select('id, file_name, file_size, file_type, language, text, segments, summary, duration_seconds, created_at')
    .gte('created_at', sinceIso)
    .order('created_at', { ascending: false })
    .limit(100)

  if (error) {
    console.error('[history] query failed', error.message)
  }

  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Your history</h1>
        <p className="text-slate-500 text-sm">
          Transcripts you created in the last {RETENTION_DAYS} days. After that they're deleted
          automatically — Mictoo never keeps your audio long-term.
        </p>
      </div>

      {(!transcripts || transcripts.length === 0) ? (
        <EmptyState />
      ) : (
        <HistoryList transcripts={transcripts} />
      )}
    </section>
  )
}

function EmptyState() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-10 text-center">
      <div className="text-4xl mb-4">📝</div>
      <h2 className="text-lg font-semibold text-slate-800 mb-2">No transcripts yet</h2>
      <p className="text-sm text-slate-500 mb-6">
        Your transcribed audio will appear here. We keep them for 7 days, then they're
        permanently deleted.
      </p>
      <a href="/" className="btn-primary inline-block">↑ Transcribe a file</a>
    </div>
  )
}
