// Client-side locale resolution for locale-less user pages.
//
// Most pages live at /<locale>/<path> and we detect the locale from the URL.
// But a small set of pages are locale-less by design and must still render in
// the user's chosen locale:
//
//   /sign-in          — auth entry, may carry ?next=/<loc>/... from origin page
//   /account          — profile settings
//   /history          — saved transcripts
//   /auth/callback    — magic-link landing
//
// We persist the last locale the user was on (any /<locale>/... visit) to
// localStorage and read it back on the pages above. SiteHeader, LanguageSwitcher
// and HtmlLangEffect all import from here so behavior is consistent.
//
// This runs client-only (inside useEffect) — it never touches SSR, so pages
// stay statically prerenderable. First paint on these pages is EN; on hydration
// the chrome upgrades to the persisted locale.

const LOCALES = new Set(['fr', 'de', 'es', 'ru', 'it', 'pt', 'pl', 'ja', 'ko'])
export const LOCALE_COOKIE = 'mictoo_locale'
const ONE_YEAR = 60 * 60 * 24 * 365

// Pages where we should try ?next → cookie → 'en' instead of relying
// on URL prefix (which is empty on these paths).
export const LOCALE_LESS_USER_PATHS = new Set([
  '/sign-in',
  '/account',
  '/history',
  '/auth/callback',
])

// Cookie-based (not localStorage) so server components on /account and
// /history can read the same value via next/headers cookies().
function readCookie() {
  if (typeof document === 'undefined') return null
  const m = document.cookie.match(new RegExp('(?:^|; )' + LOCALE_COOKIE + '=([a-z]{2})'))
  return m ? m[1] : null
}

function writeCookie(loc) {
  if (typeof document === 'undefined') return
  try {
    document.cookie = `${LOCALE_COOKIE}=${loc}; path=/; max-age=${ONE_YEAR}; SameSite=Lax`
  } catch {}
}

export function readSavedLocale() {
  const v = readCookie()
  return v && LOCALES.has(v) ? v : null
}

export function saveLocaleFromPath(pathname) {
  const seg = (pathname || '/').split('/')[1] || ''
  if (!LOCALES.has(seg)) return
  writeCookie(seg)
}

export function localeFromNextParam() {
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

// Full resolution: URL prefix → (on locale-less pages) ?next → localStorage → 'en'.
// Call this inside useEffect after mount.
export function resolveRuntimeLocale(pathname) {
  const seg = (pathname || '/').split('/')[1] || ''
  if (LOCALES.has(seg)) return seg
  if (LOCALE_LESS_USER_PATHS.has(pathname)) {
    return localeFromNextParam() || readSavedLocale() || 'en'
  }
  return 'en'
}
