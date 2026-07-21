'use client'

// Live "N,NNN+ transcripts created" counter for the homepage hero.
//
// Fetches the real count from /api/stats (backed by the Supabase transcripts
// table) on mount. Rounds DOWN to the nearest 500 and appends "+" so the
// number reads as a marketing-friendly milestone rather than a raw exact
// number. At 4,813 you see "4,500+"; at 13,247 you see "13,000+".
//
// Hides itself entirely if:
//   - The API is down or returns bad data
//   - The count is below VISIBILITY_THRESHOLD (avoids showing "500+" while
//     we're still ramping up traction)
//
// Pairs with the SSR-rendered heading above. If the counter fails to render,
// the hero layout stays clean because this component just returns null.

import { useEffect, useState } from 'react'

const VISIBILITY_THRESHOLD = 1000
const ROUND_TO = 500

export default function HeroCounter() {
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
  const formatted = new Intl.NumberFormat('en').format(rounded)

  return (
    <div className="inline-flex items-center gap-2 text-sm text-slate-500">
      <span className="w-5 h-5 text-brand-500">
        <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path d="M3 17l6-6 4 4 8-8" />
          <path d="M17 7h4v4" />
        </svg>
      </span>
      <span>
        <span className="font-semibold text-slate-800">{formatted}+</span> transcripts created
      </span>
    </div>
  )
}
