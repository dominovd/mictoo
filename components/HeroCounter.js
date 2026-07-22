'use client'

// Live "N,NNN+ transcripts created" counter for the homepage hero.
//
// Fetches the real count from /api/stats (backed by the Supabase transcripts
// table) on mount. Rounds DOWN to the nearest 500 and appends "+" so the
// number reads as a marketing-friendly milestone rather than a raw exact
// number. At 4,813 you see "4,500+"; at 13,247 you see "13,000+".
//
// Localization: takes a `locale` prop; suffix "transcripts created" comes
// from layouts.hero.transcriptsCreated. Number formatting uses the locale's
// Intl.NumberFormat conventions.

import { useEffect, useState } from 'react'
import { t } from '@/lib/i18n'

const VISIBILITY_THRESHOLD = 1000
const ROUND_TO = 500

// Map our short locale codes to BCP-47 tags for Intl.NumberFormat
const BCP47 = {
  en: 'en', fr: 'fr', de: 'de', es: 'es', ru: 'ru',
  it: 'it', pt: 'pt', pl: 'pl', ja: 'ja', ko: 'ko',
}

export default function HeroCounter({ locale = 'en' }) {
  const [count, setCount] = useState(null)

  useEffect(() => {
    let cancelled = false
    fetch('/api/stats')
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (cancelled) return
        if (data && typeof data.count === 'number') setCount(data.count)
      })
      .catch(() => {
        /* silent — counter just hides */
      })
    return () => {
      cancelled = true
    }
  }, [])

  if (count == null || count < VISIBILITY_THRESHOLD) return null

  const rounded = Math.floor(count / ROUND_TO) * ROUND_TO
  const formatted = new Intl.NumberFormat(BCP47[locale] || 'en').format(rounded)
  const suffix = t(locale, 'layouts.hero.transcriptsCreated')

  return (
    <div className="inline-flex items-center gap-2 text-sm text-slate-500">
      <span className="w-5 h-5 text-brand-500">
        <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path d="M3 17l6-6 4 4 8-8" />
          <path d="M17 7h4v4" />
        </svg>
      </span>
      <span>
        <span className="font-semibold text-slate-800">{formatted}+</span> {suffix}
      </span>
    </div>
  )
}
