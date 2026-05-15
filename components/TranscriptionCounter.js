'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { detectLocaleFromPath, t } from '@/lib/i18n'

// Trust badge for the footer. Fetches the all-time counter once on mount and
// only renders when the count crosses the visibility threshold. Below the
// threshold the component renders null so visitors don't see embarrassing
// early numbers.
const VISIBILITY_THRESHOLD = 1000

export default function TranscriptionCounter() {
  const pathname = usePathname() || '/'
  const locale = detectLocaleFromPath(pathname)
  const [count, setCount] = useState(null)

  useEffect(() => {
    let cancelled = false
    fetch('/api/stats')
      .then(r => r.ok ? r.json() : null)
      .then(data => {
        if (cancelled) return
        if (data && typeof data.count === 'number') setCount(data.count)
      })
      .catch(() => { /* silent failure — badge just won't render */ })
    return () => { cancelled = true }
  }, [])

  if (count == null || count < VISIBILITY_THRESHOLD) return null

  // Locale-aware number formatting: 12,847 in en, 12 847 in fr/ru, 12.847 in de/es etc.
  const formatted = new Intl.NumberFormat(locale).format(count)

  return (
    <p className="text-xs text-slate-400">
      {t(locale, 'footer.counter', { count: formatted })}
    </p>
  )
}
