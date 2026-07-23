'use client'

// Client-side patcher for <html lang="…">.
//
// Root layout renders <html lang="en"> so all pages stay statically
// prerenderable (using headers() in the root layout would demote all 480+
// pages to dynamic server-render mode and blow up Vercel invocations).
// This tiny client effect updates document.documentElement.lang on mount
// and on route change, deriving the locale from the URL prefix. Screen
// readers pick up the change on subsequent focus events and Google's JS
// rendering pipeline sees the correct value. Raw-HTML crawlers still see
// "en" but rely on canonical + hreflang for locale assignment.

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const LOCALES = new Set(['fr', 'de', 'es', 'ru', 'it', 'pt', 'pl', 'ja', 'ko'])

// Locale-less pages that still need to render in the user's locale by
// pulling the code from ?next=/<loc>/... (the sign-in flow carries the
// origin page in that param so we can come back to it after auth). We
// intentionally avoid useSearchParams() — it needs a Suspense boundary
// during SSG and would otherwise flip pages into dynamic render.
const LOCALE_FROM_NEXT_PATHS = new Set(['/sign-in'])

function nextParamLocale() {
  if (typeof window === 'undefined') return null
  try {
    const nxt = new URLSearchParams(window.location.search).get('next')
    if (!nxt) return null
    const seg = nxt.split('/').filter(Boolean)[0]
    return LOCALES.has(seg) ? seg : null
  } catch {
    return null
  }
}

function detectLocale(pathname) {
  if (LOCALE_FROM_NEXT_PATHS.has(pathname)) {
    const fromNext = nextParamLocale()
    if (fromNext) return fromNext
  }
  const seg = (pathname || '/').split('/')[1] || ''
  return LOCALES.has(seg) ? seg : 'en'
}

export default function HtmlLangEffect() {
  const pathname = usePathname()

  useEffect(() => {
    const locale = detectLocale(pathname)
    if (document.documentElement.lang !== locale) {
      document.documentElement.lang = locale
    }
  }, [pathname])

  return null
}
