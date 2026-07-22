// LanguagePageLayout — shared skeleton for every "by language" landing.
//
// Applies to:
//   /french-speech-to-text
//   /spanish-audio-to-text
//   /german-audio-transcription
//   /multilingual-transcription
//
// Structure (per user mockup):
//   1. Hero:
//      - emerald eyebrow badge ("FRENCH · WHISPER LARGE-V3 · FREE")
//      - h1First + h1Second (brand-blue)
//      - subtitle
//      - 4 trust chips
//      - UploadZone (with defaultLanguage pre-selected)
//      - Flag chips row (5 regional varieties)
//   2. 2-column body:
//      LEFT:
//        - How X transcription works — 3 numbered steps
//        - Example transcript in target language + AI Summary panel
//          (no speaker labels, per prior UseCaseLayout direction) +
//          Translate to English button + TXT/SRT/VTT/DOCX exports
//        - Why use Mictoo for X audio — 4 benefit cards
//        - X audio that works well — 6 compact chips
//        - Tips (bullets) + What makes X difficult — 4 example cards
//          (e.g. Liaisons "les amis" [le.z_a.mi])
//        - X varieties supported table
//        - FAQ 2-column via CSS columns
//      RIGHT (sticky):
//        - BY LANGUAGE navigation with emerald accent
//        - "More languages" link
//   3. Bottom CTA plate
//   4. "Explore other languages" — 3 cards linking to the other 3
//      by-language pages

import Link from 'next/link'
import UploadZone from '@/components/UploadZone'

// ── Inline SVG icon set ─────────────────────────────────────────────────────
const Icons = {
  file:     <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /></svg>,
  upload:   <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M12 3v14m-5-5l5-5 5 5" /><path d="M4 21h16" /></svg>,
  editPen:  <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4z" /></svg>,
  sparkles: <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5zM19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8z" /></svg>,
  check:    <svg fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg>,
  arrowRight: <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6l6 6-6 6" /></svg>,
  gift:     <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><rect x="3" y="8" width="18" height="4" /><path d="M5 12v9h14v-9M12 8v13" /><path d="M12 8s-3-4-6-2 2 4 6 2zM12 8s3-4 6-2-2 4-6 2z" /></svg>,
  shield:   <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M12 2l8 3v6c0 5-3.5 9.5-8 11-4.5-1.5-8-6-8-11V5z" /></svg>,
  globe:    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2c2.5 3 4 6.5 4 10s-1.5 7-4 10c-2.5-3-4-6.5-4-10s1.5-7 4-10z" /></svg>,
  accent:   <svg fill="none" viewBox="0 0 24 24"><text x="12" y="17" textAnchor="middle" fontSize="15" fontWeight="700" fill="currentColor">É</text></svg>,
  quote:    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M8 10c-2 0-3 1-3 3v4h4v-4M18 10c-2 0-3 1-3 3v4h4v-4" /></svg>,
  translate: <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M5 8l6 6M4 14l6-6 2-3M2 5h12M7 2h1M22 22l-5-10-5 10M14 18h6" /></svg>,
  mic:      <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><rect x="9" y="2" width="6" height="12" rx="3" /><path d="M5 10v2a7 7 0 0 0 14 0v-2M12 19v3M8 22h8" /></svg>,
  chat:     <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>,
  headphones: <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M4 15v-3a8 8 0 0 1 16 0v3" /><path d="M4 15a2 2 0 0 0 2 2h1v-4H6a2 2 0 0 0-2 2zM20 15a2 2 0 0 1-2 2h-1v-4h1a2 2 0 0 1 2 2z" /></svg>,
  book:     <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V2H6.5A2.5 2.5 0 0 0 4 4.5v15z" /><path d="M8 6h8M8 10h6" /></svg>,
  briefcase: <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><path d="M3 12h18" /></svg>,
  search:   <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.35-4.35" /></svg>,
  cap:      <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 3 1 9l11 6 9-4.9V17h2V9zM5 13.2v3.3l7 3.8 7-3.8v-3.3l-7 3.8z" /></svg>,
}

// BY LANGUAGE sidebar — 4 language pages.
const LANGUAGE_NAV = [
  { href: '/french-speech-to-text',        label: 'French Speech to Text' },
  { href: '/spanish-audio-to-text',        label: 'Spanish Audio to Text' },
  { href: '/german-audio-transcription',   label: 'German Audio Transcription' },
  { href: '/multilingual-transcription',   label: 'Multilingual Transcription' },
]

function Eyebrow({ children }) {
  return (
    <span className="inline-block bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
      {children}
    </span>
  )
}

function TrustChip({ icon, label }) {
  return (
    <div className="inline-flex items-center gap-1.5 text-sm text-slate-600">
      <span className="w-4 h-4 text-emerald-500">{Icons[icon] || Icons.check}</span>
      <span>{label}</span>
    </div>
  )
}

// Small flag pill: emoji flag + label. Emoji flags are OS-rendered so they
// look native across platforms and don't require any image asset.
function FlagPill({ flag, label }) {
  return (
    <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-xl px-3.5 py-2 text-sm">
      <span className="text-lg leading-none">{flag}</span>
      <span className="font-medium text-slate-800">{label}</span>
    </div>
  )
}

// ── Component ───────────────────────────────────────────────────────────────
export default function LanguagePageLayout({
  // Hero
  badge,                    // 'FRENCH · WHISPER LARGE-V3 · FREE'
  h1First,                  // 'French Speech to Text'
  h1Second,                 // 'Liaisons, accents, and Quebec French'
  subtitle,
  chips = [                 // 4 trust chips
    { label: 'Free', icon: 'gift' },
    { label: 'Private', icon: 'shield' },
    { label: 'Language variants', icon: 'globe' },
    { label: 'AI summary', icon: 'sparkles' },
  ],
  defaultLanguage,          // 'fr' / 'es' / 'de' / undefined (multilingual)
  currentHref,              // sidebar highlight

  // Flag chips row under upload
  flags = [],               // [{flag: '🇫🇷', label: 'France French'}]

  // How it works
  stepsTitle = 'How it works',
  steps = [],               // [{icon, title, desc}]

  // Example transcript preview
  exampleTitle,
  exampleFileName,
  exampleDurationLabel,
  exampleLines = [],        // [{t, line}]  target-language text
  summaryTitle = 'AI Summary',
  summaryPoints = [],       // string[] target-language bullets
  translateLabel = 'Translate to English',

  // Why cards
  whyTitle,
  whyCards = [],            // [{icon, title, desc}]

  // "X audio that works well" — 6 chips
  worksWellTitle,
  worksWell = [],           // [{icon, title}]

  // Tips + Challenges
  tipsTitle,
  tips = [],                // string[]
  challengesTitle,
  challenges = [],          // [{title, example, ipa}]  — 4 example cards

  // Varieties supported table
  varietiesTitle,
  varieties = [],           // [{flag, name, differences}]  Supported column always ✓

  // FAQ
  faq = [],                 // [{q, a}]

  // Bottom CTA
  ctaHeadline,
  ctaSubtitle,
  ctaButton,

  // "Explore other languages" cards
  exploreCards = [],        // [{href, title, desc, flag}]
}) {
  const faqSchema = faq?.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  } : null

  return (
    <>
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* ────────────────── HERO + UPLOAD ────────────────── */}
      <section className="bg-gradient-to-b from-emerald-50/30 via-slate-100/60 to-slate-100 pt-14 pb-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Eyebrow>{badge}</Eyebrow>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
            {h1First}
            {h1Second && (<><br /><span className="text-brand-600">{h1Second}</span></>)}
          </h1>
          <p className="mt-5 text-base text-slate-600 max-w-2xl mx-auto">{subtitle}</p>

          <div className="mt-5 flex flex-wrap justify-center items-center gap-x-6 gap-y-2">
            {chips.map((c) => <TrustChip key={c.label} {...c} />)}
          </div>
        </div>

        <div id="tool" className="max-w-2xl mx-auto mt-8 scroll-mt-20">
          <UploadZone defaultLanguage={defaultLanguage} />
        </div>

        {/* Flag chips row */}
        {flags.length > 0 && (
          <div className="max-w-3xl mx-auto mt-6 flex flex-wrap gap-2.5 justify-center">
            {flags.map((f) => <FlagPill key={f.label} {...f} />)}
          </div>
        )}
      </section>

      {/* ────────────────── 2-COLUMN BODY ────────────────── */}
      <section className="bg-slate-50 py-14 px-4 border-b border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_260px] gap-10">
          {/* ── LEFT: main content ── */}
          <div className="min-w-0 space-y-12">

            {/* ── How it works ── */}
            {steps.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">{stepsTitle}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {steps.map(({ icon, title, desc }, i) => (
                    <div key={title} className="bg-white border border-slate-200 rounded-2xl p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-7 h-7 rounded-full bg-slate-100 text-slate-500 text-xs font-semibold flex items-center justify-center">
                          {i + 1}
                        </div>
                        <span className="w-5 h-5 text-emerald-600">{Icons[icon] || Icons.upload}</span>
                      </div>
                      <div className="font-semibold text-slate-900 mb-1.5">{title}</div>
                      <div className="text-sm text-slate-600 leading-snug">{desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ── Example transcript + AI summary ── */}
            {exampleLines.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">{exampleTitle}</h2>
                <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                  {/* Tab bar */}
                  <div className="flex items-center justify-between border-b border-slate-100 px-4">
                    <div className="flex items-center gap-4">
                      <button className="pb-2.5 pt-3 font-semibold text-sm text-emerald-700 border-b-2 border-emerald-600">Transcript</button>
                      <button className="pb-2.5 pt-3 font-medium text-sm text-slate-500">Notes</button>
                    </div>
                    <div className="relative">
                      <span className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400">{Icons.search}</span>
                      <div className="text-xs text-slate-400 border border-slate-200 rounded-lg pl-7 pr-3 py-1.5 bg-white">Search</div>
                    </div>
                  </div>

                  {/* Body: transcript left, summary + export right */}
                  <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
                    <div className="p-5">
                      <div className="divide-y divide-slate-100">
                        {exampleLines.map((row, i) => (
                          <div key={i} className="grid grid-cols-[auto_1fr] gap-4 py-2 items-start text-sm">
                            <span className="font-mono text-xs text-emerald-600 font-semibold pt-0.5 whitespace-nowrap">{row.t}</span>
                            <span className="text-slate-700 leading-snug">{row.line}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-5 bg-slate-50/40 space-y-4">
                      <div>
                        <div className="text-sm font-semibold text-slate-800 mb-3 flex items-center gap-2">
                          <span className="w-4 h-4 text-emerald-600">{Icons.sparkles}</span>
                          {summaryTitle}
                        </div>
                        {summaryPoints.length > 0 && (
                          <p className="text-sm text-slate-700 leading-relaxed">
                            {summaryPoints.join(' ')}
                          </p>
                        )}
                      </div>

                      <div>
                        <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide mb-2">Translate to</div>
                        <button className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-lg px-3 py-1.5 text-xs font-semibold">
                          <span className="w-3.5 h-3.5">{Icons.translate}</span>
                          {translateLabel}
                        </button>
                      </div>

                      <div>
                        <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide mb-2">Export</div>
                        <div className="flex flex-wrap gap-1.5">
                          {['TXT', 'SRT', 'VTT', 'DOCX'].map((f) => (
                            <button key={f} className="text-xs bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 font-semibold text-emerald-700">
                              {f}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Player row */}
                  <div className="flex items-center gap-3 border-t border-slate-100 px-4 py-3 bg-white">
                    <svg className="w-4 h-4 text-slate-500" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                    <span className="text-xs font-mono text-slate-500">0:00 / {exampleDurationLabel}</span>
                    <div className="flex-1 h-1 rounded-full bg-slate-200">
                      <div className="h-full w-0 bg-emerald-500 rounded-full" />
                    </div>
                    <span className="text-xs text-slate-500">1×</span>
                  </div>
                </div>
                <p className="text-[11px] text-slate-400 mt-2">
                  Illustration. Real transcripts show timestamps and text without speaker labels.
                </p>
              </div>
            )}

            {/* ── Why cards (4) ── */}
            {whyCards.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">{whyTitle}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {whyCards.map(({ icon, title, desc }) => (
                    <div key={title} className="bg-white border border-slate-200 rounded-2xl p-5">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 mb-3">
                        <span className="w-5 h-5">{Icons[icon] || Icons.sparkles}</span>
                      </div>
                      <div className="font-semibold text-slate-900 mb-1.5 text-sm">{title}</div>
                      <div className="text-xs text-slate-600 leading-snug">{desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ── Works well chips (6) ── */}
            {worksWell.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">{worksWellTitle}</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                  {worksWell.map(({ icon, title }) => (
                    <div key={title} className="bg-white border border-slate-200 rounded-xl p-3 text-center">
                      <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 mb-2">
                        <span className="w-4 h-4">{Icons[icon] || Icons.mic}</span>
                      </div>
                      <div className="text-[12px] font-semibold text-slate-800 leading-tight">{title}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ── Tips + Challenges ── */}
            {(tips.length > 0 || challenges.length > 0) && (
              <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] gap-8">
                {tips.length > 0 && (
                  <div>
                    <h2 className="text-lg font-bold text-slate-900 mb-4">{tipsTitle}</h2>
                    <ul className="space-y-2.5">
                      {tips.map((tip, i) => (
                        <li key={i} className="flex gap-3 items-start text-sm text-slate-700">
                          <span className="w-5 h-5 flex-shrink-0 mt-0.5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                            <span className="w-3 h-3">{Icons.check}</span>
                          </span>
                          <span className="leading-snug">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {challenges.length > 0 && (
                  <div>
                    <h2 className="text-lg font-bold text-slate-900 mb-4">{challengesTitle}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {challenges.map(({ title, desc, example, ipa }) => (
                        <div key={title} className="bg-white border border-slate-200 rounded-xl p-4">
                          <div className="font-semibold text-slate-900 text-sm mb-1.5">{title}</div>
                          <div className="text-xs text-slate-600 leading-snug">{desc}</div>
                          {example && (
                            <div className="mt-3 pt-3 border-t border-slate-100">
                              <div className="text-sm text-emerald-700 font-semibold">"{example}"</div>
                              {ipa && <div className="text-[11px] font-mono text-slate-500 mt-0.5">[{ipa}]</div>}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* ── Varieties supported table ── */}
            {varieties.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">{varietiesTitle}</h2>
                <div className="bg-white border border-slate-200 rounded-2xl overflow-x-auto">
                  <table className="w-full text-sm min-w-[520px]">
                    <thead>
                      <tr className="border-b border-slate-100 bg-slate-50">
                        <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Variety</th>
                        <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Example differences</th>
                        <th className="text-center px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Supported</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {varieties.map(({ flag, name, differences }) => (
                        <tr key={name}>
                          <td className="px-5 py-4 font-semibold text-slate-900 whitespace-nowrap">
                            <span className="text-lg mr-2 align-middle">{flag}</span>
                            <span className="align-middle">{name}</span>
                          </td>
                          <td className="px-5 py-4 text-slate-600">{differences}</td>
                          <td className="px-5 py-4 text-center">
                            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500 text-white">
                              <span className="w-3 h-3">{Icons.check}</span>
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* ── FAQ 2-column via CSS columns ── */}
            {faq.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently asked questions</h2>
                <div className="columns-1 lg:columns-2 gap-3 space-y-3">
                  {faq.map(({ q, a }, i) => (
                    <details
                      key={q}
                      className="group bg-white border border-slate-200 rounded-xl overflow-hidden open:shadow-sm break-inside-avoid"
                      {...(i === 0 ? { open: true } : {})}
                    >
                      <summary className="cursor-pointer list-none px-4 py-3 flex items-center justify-between gap-3 font-semibold text-sm text-slate-800 hover:bg-slate-50">
                        <span>{q}</span>
                        <svg
                          className="w-4 h-4 flex-shrink-0 text-slate-400 transition-transform group-open:rotate-180"
                          fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <div className="px-4 pb-4 text-sm text-slate-600 leading-relaxed">
                        <p>{a}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* ── RIGHT: sticky sidebar ── */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <div className="text-xs font-semibold text-emerald-700 uppercase tracking-wide mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                By language
              </div>
              <nav className="space-y-1">
                {LANGUAGE_NAV.map((item) => {
                  const isCurrent = item.href === currentHref
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={
                        'group flex items-start gap-2.5 rounded-lg px-3 py-2 text-sm transition-colors ' +
                        (isCurrent
                          ? 'bg-emerald-50 text-emerald-900 font-semibold border border-emerald-200 shadow-sm'
                          : 'text-slate-500 hover:text-slate-800 hover:bg-white/60')
                      }
                    >
                      <span className={'w-4 h-4 mt-0.5 flex-shrink-0 ' + (isCurrent ? 'text-emerald-600' : 'text-slate-400')}>
                        {Icons.globe}
                      </span>
                      <span className="leading-tight">{item.label}</span>
                    </Link>
                  )
                })}
              </nav>
              <div className="mt-4 pl-3">
                <a href="#tool" className="text-sm font-semibold text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1">
                  More languages
                  <span className="w-3.5 h-3.5">{Icons.arrowRight}</span>
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ────────────────── BOTTOM CTA PLATE ────────────────── */}
      {ctaHeadline && (
        <section className="max-w-5xl mx-auto px-4 py-12">
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 py-8 px-6 md:px-10 text-center md:text-left">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                <span className="w-6 h-6">{Icons.mic}</span>
              </div>
              <div className="min-w-0 flex-1 max-w-lg">
                <div className="font-bold text-slate-900 text-lg leading-tight">{ctaHeadline}</div>
                {ctaSubtitle && <div className="text-sm text-slate-500 mt-1">{ctaSubtitle}</div>}
              </div>
              <Link
                href="#tool"
                className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm px-5 py-3 rounded-xl transition-all flex-shrink-0"
              >
                <span>{ctaButton || 'Upload audio'}</span>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ────────────────── EXPLORE OTHER LANGUAGES ────────────────── */}
      {exploreCards.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 pb-16">
          <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">Explore other languages</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {exploreCards.map(({ href, title, desc, flag }) => (
              <Link
                key={href}
                href={href}
                className="group bg-white border border-slate-200 rounded-2xl p-5 hover:border-emerald-400 hover:shadow-sm transition-all"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl leading-none">{flag}</span>
                  <div className="font-semibold text-slate-900">{title}</div>
                </div>
                <div className="text-sm text-slate-600 leading-snug">{desc}</div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  )
}
