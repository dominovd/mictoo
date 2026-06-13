'use client'

import { useEffect, useState, useCallback } from 'react'

// CreditsWidget — small persistent display of "🪙 remaining / limit" credits
// for the signed-in user, shown next to the avatar in SiteHeader.
//
// Polls /api/credits on mount, on auth state change (via the `refreshAt`
// prop the parent can bump), and on a visibility-change event so the widget
// updates when the user returns to the tab after a transcribe.
//
// Anon users get `signedIn: false` from the API and the widget renders null.
// Redis misconfiguration returns `available: false` → widget shows "—" so
// the user knows the system isn't reporting accurately rather than seeing
// a stale or fabricated number.

export default function CreditsWidget({ refreshSignal = 0 }) {
  const [state, setState] = useState({ loaded: false, data: null })

  const load = useCallback(async () => {
    try {
      const res = await fetch('/api/credits', { cache: 'no-store' })
      if (!res.ok) {
        setState({ loaded: true, data: null })
        return
      }
      const json = await res.json()
      setState({ loaded: true, data: json })
    } catch {
      setState({ loaded: true, data: null })
    }
  }, [])

  // Initial load + refresh when the parent signals (e.g. after a transcribe
  // completes the page bumps refreshSignal). Visibilitychange also reloads
  // when the user comes back to the tab.
  useEffect(() => {
    load()
  }, [load, refreshSignal])

  useEffect(() => {
    function onVisible() {
      if (document.visibilityState === 'visible') load()
    }
    document.addEventListener('visibilitychange', onVisible)
    return () => document.removeEventListener('visibilitychange', onVisible)
  }, [load])

  // Pre-load: reserve space so the header doesn't shift when credits arrive.
  if (!state.loaded) {
    return <span className="w-20 h-7 inline-block" aria-hidden="true" />
  }
  const data = state.data
  // Anon user (or fetch failure that returned no JSON): hide entirely.
  if (!data || !data.signedIn) return null

  // Signed in but Redis unavailable: show neutral placeholder.
  if (!data.available) {
    return (
      <span
        className="hidden sm:inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium text-slate-400 bg-slate-50 border border-slate-200"
        title="Credits temporarily unavailable"
      >
        <span aria-hidden="true">🪙</span>
        <span>—</span>
      </span>
    )
  }

  const { used, limit, remaining } = data
  // Tint by remaining ratio: green-ish at 4-7, amber at 2-3, red at 0-1.
  const ratio = remaining / limit
  let palette
  if (remaining <= 1) palette = 'text-red-700 bg-red-50 border-red-200'
  else if (ratio <= 0.4) palette = 'text-amber-700 bg-amber-50 border-amber-200'
  else palette = 'text-brand-700 bg-brand-50 border-brand-200'

  return (
    <a
      href="/account"
      title={`You've used ${used} of ${limit} daily transcriptions. Visit Account for details.`}
      className={`hidden sm:inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border ${palette} hover:opacity-90 transition-opacity`}
    >
      <span aria-hidden="true">🪙</span>
      <span>
        {remaining}
        <span className="text-slate-400 mx-0.5">/</span>
        {limit}
      </span>
    </a>
  )
}
