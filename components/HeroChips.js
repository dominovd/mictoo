// Four inline trust chips shown under the H1 in every landing hero.
// Server-safe (no hooks, no client hydration) so it renders inside the
// SSR'd hero without shipping JS. Used by both app/page.js (homepage)
// and components/LandingLayout.js (all format / use-case landings).
//
// Chip pattern: outline SVG icon + short label. Icons use currentColor
// so the brand-blue class inherits.
//
// Localization: takes a `locale` prop; labels read from
// lib/i18n.js -> layouts.hero.* with EN fallback.

import { t } from '@/lib/i18n'

function TrustChip({ icon, label }) {
  return (
    <div className="inline-flex items-center gap-1.5 text-slate-600 text-sm">
      <span className="w-5 h-5 text-brand-600 flex-shrink-0">{icon}</span>
      <span>{label}</span>
    </div>
  )
}

const ICONS = {
  free: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7M12 7H7.5a2.5 2.5 0 1 1 0-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 1 0 0-5C13 2 12 7 12 7z" />
    </svg>
  ),
  shield: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path d="M12 2l9 4v6c0 5-3.9 9.5-9 10-5.1-.5-9-5-9-10V6z" />
    </svg>
  ),
  globe: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2c2.5 3 4 6.5 4 10s-1.5 7-4 10c-2.5-3-4-6.5-4-10s1.5-7 4-10z" />
    </svg>
  ),
  sparkles: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5zM19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8z" />
    </svg>
  ),
}

export default function HeroChips({ locale = 'en' }) {
  const chips = [
    { key: 'free',          icon: ICONS.free,     label: t(locale, 'layouts.hero.free') },
    { key: 'autoDeleted',   icon: ICONS.shield,   label: t(locale, 'layouts.hero.autoDeleted') },
    { key: 'manyLanguages', icon: ICONS.globe,    label: t(locale, 'layouts.hero.manyLanguages') },
    { key: 'aiSummary',     icon: ICONS.sparkles, label: t(locale, 'layouts.hero.aiSummary') },
  ]
  return (
    <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2">
      {chips.map((chip) => (
        <TrustChip key={chip.key} icon={chip.icon} label={chip.label} />
      ))}
    </div>
  )
}
