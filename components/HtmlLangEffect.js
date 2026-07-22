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

export default function HtmlLangEffect() {
  const pathname = usePathname()

  useEffect(() => {
    const seg = (pathname || '/').split('/')[1] || ''
    const locale = LOCALES.has(seg) ? seg : 'en'
    if (document.documentElement.lang !== locale) {
      document.documentElement.lang = locale
    }
  }, [pathname])

  return null
}
