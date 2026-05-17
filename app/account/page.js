// /account — minimal profile page for Phase A.
// Server Component: redirects to /sign-in if the user isn't logged in.
// Future phases will expand this with: transcription history (Phase B),
// notification preferences (Phase B), saved exports (Phase C), etc.

import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Account — Mictoo',
  description: 'Your Mictoo account: profile, transcription history, and notification preferences.',
  robots: { index: false, follow: false },
}

export default async function AccountPage() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/sign-in?next=/account')
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('email, full_name, avatar_url, created_at')
    .eq('id', user.id)
    .maybeSingle()

  const display = profile?.full_name || profile?.email || user.email || 'You'
  const memberSince = profile?.created_at
    ? new Date(profile.created_at).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
    : null

  return (
    <section className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-slate-900 mb-2">Your account</h1>
      <p className="text-slate-500 mb-10">Manage your Mictoo profile and preferences.</p>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 mb-6">
        <div className="flex items-center gap-4 mb-6">
          {profile?.avatar_url ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={profile.avatar_url}
              alt=""
              className="w-14 h-14 rounded-full border border-slate-200"
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="w-14 h-14 rounded-full bg-brand-50 text-brand-600 inline-flex items-center justify-center text-xl font-semibold">
              {display.charAt(0).toUpperCase()}
            </div>
          )}
          <div>
            <p className="font-semibold text-slate-800">{display}</p>
            <p className="text-sm text-slate-500">{user.email}</p>
            {memberSince && (
              <p className="text-xs text-slate-400 mt-0.5">Member since {memberSince}</p>
            )}
          </div>
        </div>

        <div className="border-t border-slate-100 pt-5 space-y-3 text-sm text-slate-600">
          <p>
            <strong className="text-slate-700">History.</strong> Coming soon — your past
            transcripts will appear here, kept for 7 days.
          </p>
          <p>
            <strong className="text-slate-700">Email notifications.</strong> Coming soon —
            opt in to get an email when a queued transcript is ready.
          </p>
          <p>
            <strong className="text-slate-700">Export formats.</strong> Coming soon — Word
            (DOCX), PDF, VTT subtitles, and JSON in addition to TXT and SRT.
          </p>
        </div>
      </div>

      <form action="/auth/sign-out" method="POST">
        <button type="submit" className="text-sm text-slate-500 hover:text-brand-600 transition-colors">
          ← Sign out
        </button>
      </form>
    </section>
  )
}
