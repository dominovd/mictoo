'use client'

import { useEffect, useState } from 'react'

// AccountCredits — card on the /account page showing the user's daily
// transcription credit balance, reset time, and the rules around how
// credits are consumed.
//
// Reads /api/credits which returns the same authDaily bucket the
// transcribe routes burn from. Updates on mount and on
// visibilitychange (so the count refreshes when the user returns to
// the tab after a transcribe finishes).
//
// Labels are passed in by the server-rendered page so the strings are
// i18n-ready and don't double-render.

export default function AccountCredits({ labels }) {
  const [state, setState] = useState({ loaded: false, data: null })

  useEffect(() => {
    let mounted = true
    async function load() {
      try {
        const r = await fetch('/api/credits', { cache: 'no-store' })
        if (!mounted) return
        if (!r.ok) {
          setState({ loaded: true, data: null })
          return
        }
        const j = await r.json()
        setState({ loaded: true, data: j })
      } catch {
        if (mounted) setState({ loaded: true, data: null })
      }
    }
    load()
    function onVisible() {
      if (document.visibilityState === 'visible') load()
    }
    document.addEventListener('visibilitychange', onVisible)
    return () => {
      mounted = false
      document.removeEventListener('visibilitychange', onVisible)
    }
  }, [])

  const data = state.data

  // Format reset time as a human-friendly "in X hours" / "at HH:MM" string.
  function formatReset(resetMs) {
    if (!resetMs) return null
    const ms = Math.max(0, resetMs - Date.now())
    const minutes = Math.ceil(ms / 60_000)
    if (minutes < 60) return labels.resetInMinutes.replace('{n}', String(minutes))
    const hours = Math.floor(minutes / 60)
    const rem = minutes % 60
    return rem
      ? labels.resetInHoursMinutes.replace('{h}', String(hours)).replace('{m}', String(rem))
      : labels.resetInHours.replace('{h}', String(hours))
  }

  return (
    <div className="pt-2">
      <p className="font-semibold text-slate-700 mb-3">{labels.heading}</p>

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
        {/* Big number / label row */}
        <div className="flex items-baseline gap-2 mb-1">
          <span className="text-2xl" aria-hidden="true">🪙</span>
          {!state.loaded ? (
            <span className="text-sm text-slate-400">{labels.loading}</span>
          ) : !data || !data.available ? (
            <span className="text-sm text-slate-500">{labels.unavailable}</span>
          ) : (
            <>
              <span className="text-2xl font-bold text-slate-900 leading-none">
                {data.remaining}
              </span>
              <span className="text-sm text-slate-500">
                {labels.ofLimit.replace('{n}', String(data.limit))}
              </span>
            </>
          )}
        </div>

        {/* Reset time */}
        {data?.available && data.resetAtMs ? (
          <p className="text-xs text-slate-500 mb-3">
            {labels.resetsIn} {formatReset(data.resetAtMs)}
          </p>
        ) : (
          <p className="text-xs text-slate-500 mb-3">{labels.resetsDaily}</p>
        )}

        {/* Rules: how a credit is consumed */}
        <ul className="text-xs text-slate-600 space-y-1.5 list-none">
          <li className="flex gap-2">
            <span className="text-brand-600 flex-shrink-0" aria-hidden="true">·</span>
            <span>{labels.ruleNormal}</span>
          </li>
          <li className="flex gap-2">
            <span className="text-brand-600 flex-shrink-0" aria-hidden="true">·</span>
            <span>{labels.ruleBigFile}</span>
          </li>
          <li className="flex gap-2">
            <span className="text-brand-600 flex-shrink-0" aria-hidden="true">·</span>
            <span>{labels.ruleVideo}</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
