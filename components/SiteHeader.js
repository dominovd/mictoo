'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { detectLocaleFromPath, localized, t } from '@/lib/i18n'
import { createClient } from '@/lib/supabase/client'
import LanguageSwitcher from './LanguageSwitcher'

export default function SiteHeader() {
  const pathname = usePathname() || '/'
  const locale = detectLocaleFromPath(pathname)

  // Home link stays at the locale's own root: /  /fr  /de  /es  /ru
  const homeHref = localized('/', locale)

  // Auth state. Subscribed via onAuthStateChange so sign-in/out in another tab
  // is reflected in the header instantly. `null` means "still loading" — we
  // render no auth UI yet to avoid flicker.
  const [user, setUser] = useState(null)
  const [authLoaded, setAuthLoaded] = useState(false)

  useEffect(() => {
    const supabase = createClient()
    let mounted = true

    supabase.auth.getUser().then(({ data }) => {
      if (!mounted) return
      setUser(data?.user ?? null)
      setAuthLoaded(true)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!mounted) return
      setUser(session?.user ?? null)
      setAuthLoaded(true)
    })

    return () => {
      mounted = false
      subscription?.unsubscribe()
    }
  }, [])

  return (
    <header className="bg-white border-b border-slate-100 sticky top-0 z-10">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <a href={homeHref} className="flex items-center gap-2 font-bold text-xl text-brand-600">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="6" fill="#0284c7" />
            <path d="M8 8v8M12 6v12M16 10v4" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
          mictoo
        </a>

        <nav className="flex items-center gap-1 text-sm text-slate-600">
          {/* All text nav links are hidden on mobile to prevent header overflow.
              On mobile users keep the logo (= home link) and the language switcher;
              all section/page navigation is reachable via scroll and the footer. */}
          <a href={localized('/', locale)} className="btn-ghost hidden md:inline-flex whitespace-nowrap">{t(locale, 'nav.transcribe')}</a>
          <a href={`${localized('/', locale)}#how-it-works`} className="btn-ghost hidden md:inline-flex whitespace-nowrap">{t(locale, 'nav.howItWorks')}</a>
          <a href={localized('/about', locale)} className="btn-ghost hidden md:inline-flex whitespace-nowrap">{t(locale, 'nav.about')}</a>
          <a href={localized('/contact', locale)} className="btn-ghost hidden md:inline-flex whitespace-nowrap">{t(locale, 'nav.contact')}</a>
          <LanguageSwitcher />
          <AuthMenu authLoaded={authLoaded} user={user} pathname={pathname} />
        </nav>
      </div>
    </header>
  )
}

function AuthMenu({ authLoaded, user, pathname }) {
  if (!authLoaded) {
    // Reserve space while loading to prevent layout shift.
    return <span className="w-8 h-8 inline-block" aria-hidden="true" />
  }

  if (!user) {
    // Anonymous — small "Sign in" button. `next` brings the user back to the
    // page they were on after a successful login.
    return (
      <a
        href={`/sign-in?next=${encodeURIComponent(pathname)}`}
        className="btn-ghost whitespace-nowrap text-slate-500 hover:text-brand-600"
      >
        Sign in
      </a>
    )
  }

  // Authenticated — "History" link + avatar/initial circle linking to /account.
  // History is the more frequently-used destination for power users (re-export
  // a past transcript), so we surface it as a sibling link rather than burying
  // it inside /account.
  const meta = user.user_metadata || {}
  const avatarUrl = meta.avatar_url || meta.picture
  const initial = (meta.full_name || meta.name || user.email || '?').charAt(0).toUpperCase()

  return (
    <>
      <a href="/history" className="btn-ghost whitespace-nowrap hidden sm:inline-flex">History</a>
      <a
        href="/account"
        title="Account"
        aria-label="Account"
        className="ml-1 inline-flex items-center justify-center w-8 h-8 rounded-full border border-slate-200 hover:border-brand-400 transition-colors overflow-hidden"
      >
        {avatarUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={avatarUrl} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        ) : (
          <span className="text-xs font-semibold text-brand-600 bg-brand-50 w-full h-full inline-flex items-center justify-center">
            {initial}
          </span>
        )}
      </a>
    </>
  )
}
