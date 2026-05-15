'use client'

import { useState, useRef, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { LOCALES, LOCALE_META, LOCALIZED_PATHS, detectLocaleFromPath, stripLocale, t } from '@/lib/i18n'

export default function LanguageSwitcher() {
  const pathname = usePathname() || '/'
  const locale = detectLocaleFromPath(pathname)
  const restOfPath = stripLocale(pathname)
  const [open, setOpen] = useState(false)
  const wrapperRef = useRef(null)

  // Close on outside click / Esc
  useEffect(() => {
    function onClick(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) setOpen(false)
    }
    function onKey(e) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  function hrefFor(targetLocale) {
    // EN lives at root, others under /{locale}
    if (targetLocale === 'en') return restOfPath
    // Only build /<locale>/<path> if that path actually has a localized
    // version. Otherwise send the user to the locale's home page to avoid 404.
    if (LOCALIZED_PATHS.has(restOfPath)) {
      return `/${targetLocale}${restOfPath === '/' ? '' : restOfPath}`
    }
    return `/${targetLocale}`
  }

  const current = LOCALE_META[locale]
  const label = t(locale, 'langSwitcher.label')

  return (
    <div ref={wrapperRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen(v => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={label}
        className="btn-ghost flex items-center gap-1.5 text-sm"
      >
        <GlobeIcon className="w-4 h-4" />
        <span className="uppercase tracking-wide">{current.code}</span>
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label={label}
          className="absolute right-0 top-full mt-1 min-w-[180px] rounded-lg border border-slate-200 bg-white shadow-lg py-1 z-50"
        >
          {LOCALES.map(code => {
            const meta = LOCALE_META[code]
            const active = code === locale
            return (
              <li key={code}>
                <a
                  role="option"
                  aria-selected={active}
                  href={hrefFor(code)}
                  className="w-full flex items-center justify-between gap-3 px-3 py-2 text-sm hover:bg-slate-50 text-left text-slate-700"
                >
                  <span className="flex items-center gap-2">
                    <span aria-hidden>{meta.flag}</span>
                    <span>{meta.endonym}</span>
                  </span>
                  {active && <CheckIcon className="w-4 h-4 text-brand-600" />}
                </a>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

function GlobeIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" strokeLinecap="round" />
    </svg>
  )
}

function CheckIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  )
}
