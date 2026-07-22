// Four inline trust chips shown under the H1 in every landing hero.
// Server-safe (no hooks, no client hydration) so it renders inside the
// SSR'd hero without shipping JS. Used by both app/page.js (homepage)
// and components/LandingLayout.js (all format / use-case landings).
//
// Chip pattern: outline SVG icon + short label. Icons use currentColor
// so the brand-blue class inherits.
//
// Kept purposely un-configurable — the goal is a consistent hero look
// across the whole site. If a page needs different chips, it can render
// its own row and hide this one.

function TrustChip({ icon, label }) {
  return (
    <div className="inline-flex items-center gap-1.5 text-slate-600 text-sm">
      <span className="w-5 h-5 text-brand-600 flex-shrink-0">{icon}</span>
      <span>{label}</span>
    </div>
  )
}

const CHIPS = [
  {
    label: 'Free',
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7M12 7H7.5a2.5 2.5 0 1 1 0-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 1 0 0-5C13 2 12 7 12 7z" />
      </svg>
    ),
  },
  {
    label: 'Auto-deleted',
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path d="M12 2l9 4v6c0 5-3.9 9.5-9 10-5.1-.5-9-5-9-10V6z" />
      </svg>
    ),
  },
  {
    label: '50+ languages',
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2c2.5 3 4 6.5 4 10s-1.5 7-4 10c-2.5-3-4-6.5-4-10s1.5-7 4-10z" />
      </svg>
    ),
  },
  {
    label: 'AI summary',
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5zM19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8z" />
      </svg>
    ),
  },
]

export default function HeroChips() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2">
      {CHIPS.map((chip) => (
        <TrustChip key={chip.label} icon={chip.icon} label={chip.label} />
      ))}
    </div>
  )
}
