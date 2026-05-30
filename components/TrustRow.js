'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { detectLocaleFromPath, t } from '@/lib/i18n'

// Inline trust signals shown in the hero. Four items separated by dots:
//   1. Live transcription counter (real, from /api/stats — only shown above
//      the visibility threshold so we don't surface embarrassing numbers
//      before launch traction)
//   2. AI summary — bundled feature, competitors paywall this at $15-20/mo
//   3. Translate, 28 langs — bundled feature, also paywalled by competitors
//   4. OpenAI Whisper — credibility through association (and accurate)
//
// Previous versions had "50+ languages" and "No signup required" here, but
// both duplicated the badge directly above ("AI · FREE · NO SIGNUP · 50+
// LANGUAGES"). Swapped to surface the two strongest pricing differentiators
// that aren't in the badge — both are free in Mictoo and paid in TurboScribe
// / Otter / Rev.
//
// All four are factual; nothing fake. The counter falls back to the static
// three when the API is down or under threshold, so the row never collapses
// to nothing.
const COUNTER_VISIBILITY_THRESHOLD = 1000

export default function TrustRow({ locale: localeProp }) {
  const pathname = usePathname() || '/'
  const locale = localeProp || detectLocaleFromPath(pathname)
  const [count, setCount] = useState(null)

  useEffect(() => {
    let cancelled = false
    fetch('/api/stats')
      .then(r => r.ok ? r.json() : null)
      .then(data => {
        if (cancelled) return
        if (data && typeof data.count === 'number') setCount(data.count)
      })
      .catch(() => { /* silent failure — row just hides the counter */ })
    return () => { cancelled = true }
  }, [])

  const showCounter = count != null && count >= COUNTER_VISIBILITY_THRESHOLD
  const formatted = showCounter ? new Intl.NumberFormat(locale).format(count) : null

  const items = [
    showCounter && t(locale, 'trust.transcripts', { count: formatted }),
    t(locale, 'trust.summary'),
    t(locale, 'trust.translate'),
    t(locale, 'trust.engine'),
  ].filter(Boolean)

  return (
    <div className="flex items-center justify-center flex-wrap gap-x-2 gap-y-1 mt-4 text-xs text-slate-400">
      {items.map((item, i) => (
        <span key={i} className="inline-flex items-center gap-2">
          {i > 0 && <span className="text-slate-300" aria-hidden="true">·</span>}
          <span>{item}</span>
        </span>
      ))}
    </div>
  )
}
