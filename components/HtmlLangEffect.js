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
import { usePathname, useSearchParams } from 'next/navigation'

const LOCALES = new Set(['fr', 'de', 'es', 'ru', 'it', 'pt', 'pl', 'ja', 'ko'])

// Locale-less pages that still need to render in the user's locale by
// pulling the code from ?next=/<loc>/... (the sign-in flow carries the
// origin page in that param so we can come back to it after auth).
const LOCALE_FROM_NEXT_PATHS = new Set(['/sign-in'])

function detectLocale(pathname, nextParam) {
  if (LOCALE_FROM_NEXT_PATHS.has(pathname) && nextParam) {
    const seg = nextParam.split('/')[1] || ''
    if (LOCALES.has(seg)) return seg
  }
  const seg = (pathname || '/').split('/')[1] || ''
  return LOCALES.has(seg) ? seg : 'en'
}

export default function HtmlLangEffect() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const nextParam = searchParams?.get('next')

  useEffect(() => {
    const locale = detectLocale(pathname, nextParam)
    if (document.documentElement.lang !== locale) {
      document.documentElement.lang = locale
    }
  }, [pathname, nextParam])

  return null
}
