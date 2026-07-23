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
const STORAGE_KEY = 'mictoo:locale'

// Pages where we should try ?next → localStorage → 'en' instead of relying
// on URL prefix (which is empty on these paths).
export const LOCALE_LESS_USER_PATHS = new Set([
  '/sign-in',
  '/account',
  '/history',
  '/auth/callback',
])

export function readSavedLocale() {
  if (typeof window === 'undefined') return null
  try {
    const v = localStorage.getItem(STORAGE_KEY)
    return v && LOCALES.has(v) ? v : null
  } catch {
    return null
  }
}

export function saveLocaleFromPath(pathname) {
  if (typeof window === 'undefined') return
  const seg = (pathname || '/').split('/')[1] || ''
  if (!LOCALES.has(seg)) return
  try {
    localStorage.setItem(STORAGE_KEY, seg)
  } catch {}
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
