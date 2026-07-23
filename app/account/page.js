// /account — minimal profile page for Phase A.
// Server Component: redirects to /sign-in if the user isn't logged in.
//
// The page URL itself is non-locale-prefixed (`/account`) but content is
// rendered in the user's locale. We infer the locale by peeking at the
// `referer` header — if the user came from a locale-prefixed page, we use
// that. Falls back to EN when no clear signal.
// Future phases will expand this with: notification preferences (Phase B.2),
// saved exports (Phase C), etc.

import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { t, localized } from '@/lib/i18n'
import { serverLocale } from '@/lib/locale-server'
import AccountPreferences from '@/components/AccountPreferences'
import AccountCredits from '@/components/AccountCredits'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Account — Mictoo',
  description: 'Your Mictoo account: profile, transcription history, and notification preferences.',
  robots: { index: false, follow: false },
}

export default async function AccountPage() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  // Prefers the mictoo_locale cookie (set by lib/locale-runtime.js on every
  // localized page visit), falls back to the referer's URL prefix, then EN.
  const locale = serverLocale()

  if (!user) {
    redirect(`/sign-in?next=${encodeURIComponent(localized('/account', locale))}`)
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('email, full_name, avatar_url, created_at')
    .eq('id', user.id)
    .maybeSingle()

  // Initial value for the email-notifications toggle. Missing row counts
  // as opted-in (matches the column default), so the toggle starts on for
  // every newly-registered user.
  const { data: prefs } = await supabase
    .from('notification_preferences')
    .select('notify_on_transcript_ready')
    .eq('user_id', user.id)
    .maybeSingle()
  const initialNotify = prefs?.notify_on_transcript_ready ?? true

  const display = profile?.full_name || profile?.email || user.email || 'You'

  // memberSince formatted in the user's locale where reasonable. Falls back
  // to 'en-US' for locales we don't pass through to Intl (the dict has the
  // string already wrapped in t(), so the date itself is the only fragment
  // that needs locale formatting).
  const memberSince = profile?.created_at
    ? new Date(profile.created_at).toLocaleDateString(
        { en: 'en-US', fr: 'fr-FR', de: 'de-DE', es: 'es-ES', ru: 'ru-RU' }[locale] || 'en-US',
        { month: 'long', year: 'numeric' }
      )
    : null

  return (
    <section className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-slate-900 mb-2">{t(locale, 'account.heading')}</h1>
      <p className="text-slate-500 mb-10">{t(locale, 'account.lead')}</p>

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
              <p className="text-xs text-slate-400 mt-0.5">
                {t(locale, 'account.memberSince', { date: memberSince })}
              </p>
            )}
          </div>
        </div>

        <div className="border-t border-slate-100 pt-5 space-y-3 text-sm text-slate-600">
          <p>
            <strong className="text-slate-700">{t(locale, 'account.historyHeading')}</strong>{' '}
            {t(locale, 'account.historyBody')}{' '}
            <a href="/history" className="text-brand-600 hover:underline">{t(locale, 'account.viewHistory')}</a>
          </p>
          <p>
            <strong className="text-slate-700">{t(locale, 'account.exportHeading')}</strong>{' '}
            {t(locale, 'account.exportBody')}
          </p>
          <AccountCredits
            labels={{
              heading: t(locale, 'account.credits.heading'),
              loading: t(locale, 'account.credits.loading'),
              unavailable: t(locale, 'account.credits.unavailable'),
              ofLimit: t(locale, 'account.credits.ofLimit'),
              resetsIn: t(locale, 'account.credits.resetsIn'),
              resetsDaily: t(locale, 'account.credits.resetsDaily'),
              resetInMinutes: t(locale, 'account.credits.resetInMinutes'),
              resetInHours: t(locale, 'account.credits.resetInHours'),
              resetInHoursMinutes: t(locale, 'account.credits.resetInHoursMinutes'),
              ruleNormal: t(locale, 'account.credits.ruleNormal'),
              ruleBigFile: t(locale, 'account.credits.ruleBigFile'),
              ruleVideo: t(locale, 'account.credits.ruleVideo'),
            }}
          />
          <div className="pt-2">
            <p className="font-semibold text-slate-700 mb-3">{t(locale, 'account.notifHeading')}</p>
            <AccountPreferences
              initialNotify={initialNotify}
              labels={{
                title: t(locale, 'account.notifyToggleTitle'),
                subtitle: t(locale, 'account.notifyToggleSubtitle'),
                saved: t(locale, 'account.notifySaved'),
                saveFailed: t(locale, 'account.notifySaveFailed'),
                signInRequired: t(locale, 'account.notifySignInRequired'),
              }}
            />
          </div>
        </div>
      </div>

      <form action="/auth/sign-out" method="POST">
        <button type="submit" className="text-sm text-slate-500 hover:text-brand-600 transition-colors">
          {t(locale, 'account.signOut')}
        </button>
      </form>
    </section>
  )
}
