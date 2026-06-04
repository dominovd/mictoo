'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { detectLocaleFromPath } from '@/lib/i18n'

// Social proof for the YouTube URL input on /youtube-to-text and
// /transcribe-video-to-text (Wave 8.5). Pulls youtubeCount from /api/stats
// (same endpoint as the global footer counter — shared 5min cache, so
// no extra network cost on pages that already render the footer badge).
//
// Hidden until the counter crosses a small threshold — showing "0 videos
// transcribed via URL" right next to the input box would be worse than
// showing nothing. Once we're past the threshold, the number itself is
// the trust signal.
const VISIBILITY_THRESHOLD = 10

export default function YouTubeFetchCounter() {
  const pathname = usePathname() || '/'
  const locale = detectLocaleFromPath(pathname)
  const [count, setCount] = useState(null)

  useEffect(() => {
    let cancelled = false
    fetch('/api/stats')
      .then(r => r.ok ? r.json() : null)
      .then(data => {
        if (cancelled) return
        if (data && typeof data.youtubeCount === 'number') setCount(data.youtubeCount)
      })
      .catch(() => { /* silent — badge just won't render */ })
    return () => { cancelled = true }
  }, [])

  if (count == null || count < VISIBILITY_THRESHOLD) return null

  // Locale-aware number formatting: 1,234 in en; 1 234 in fr/ru; 1.234 in de etc.
  // Matches the formatting in TranscriptionCounter so the two badges feel
  // consistent if rendered on the same page.
  const formatted = new Intl.NumberFormat(locale).format(count)

  return (
    <p className="text-[11px] text-slate-400 mt-2 flex items-center gap-1.5">
      <svg className="w-3 h-3 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
      <span>{formatted} videos transcribed from a URL</span>
    </p>
  )
}
