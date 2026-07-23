// Server-side locale resolution for locale-less pages (/account, /history,
// /auth/callback). Reads the same `mictoo_locale` cookie that the client
// runtime helper writes on every localized page visit. Falls back to the
// referer's locale prefix, then to EN.
//
// Keep in sync with lib/locale-runtime.js — the cookie name in particular.

import { cookies, headers } from 'next/headers'
import { detectLocaleFromPath, LOCALES } from './i18n'
import { LOCALE_COOKIE } from './locale-runtime'

export function serverLocale() {
  // 1) Prefer the cookie set by lib/locale-runtime.js on any /<loc>/ visit.
  try {
    const stored = cookies().get(LOCALE_COOKIE)?.value
    if (stored && LOCALES.includes(stored)) return stored
  } catch {}

  // 2) Fall back to whatever locale the page they came from had in its URL.
  try {
    const ref = headers().get('referer') || ''
    if (ref) {
      const url = new URL(ref)
      return detectLocaleFromPath(url.pathname)
    }
  } catch {}

  return 'en'
}
