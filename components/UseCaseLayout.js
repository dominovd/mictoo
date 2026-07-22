// UseCaseLayout — shared skeleton for every use-case landing
// (/meeting-transcription, /interview-transcription, /podcast-transcription,
// /lecture-transcription, /business-transcription, /zoom-transcription,
// /google-meet-transcription, /teams-meeting-transcription,
// /voice-memo-to-text, /webinar-transcription, /sermon-transcription,
// /dictation-to-text).
//
// Structure (per user mockup):
//   1. Hero (badge + h1First + h1Second brand-blue + subtitle
//      + HeroChips + HeroCounter + UploadZone)
//   2. Platform chips row (6 platforms specific to this use case)
//   3. Main body — 2 columns:
//      LEFT:
//        - "How X works" — 3 numbered steps
//        - "Example transcript & summary" — Transcript/Notes tab
//          mockup + AI Summary panel (no speaker labels per prior direction)
//        - "Why X helps" — 4 benefit cards
//        - "Common X scenarios" — 6 compact chips
//        - "Tips for better X" (bullets left) + "Pick the right guide"
//          (platform cards right)
//        - FAQ — 2 columns
//      RIGHT (sticky sidebar):
//        - USE CASES navigation (current page highlighted)
//   4. Bottom CTA plate
//   5. Related use cases footer
//
// Localization: EN only for now. Localized use case pages still render
// via LandingLayout; port later.

import Link from 'next/link'
import UploadZone from '@/components/UploadZone'
import HeroChips from '@/components/HeroChips'
import HeroCounter from '@/components/HeroCounter'

// ── Inline SVG icon set ─────────────────────────────────────────────────────
const Icons = {
  file:     <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /></svg>,
  upload:   <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M12 3v14m-5-5l5-5 5 5" /><path d="M4 21h16" /></svg>,
  folder:   <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>,
  editPen:  <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4z" /></svg>,
  sparkles: <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5zM19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8z" /></svg>,
  check:    <svg fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg>,
  arrowRight: <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6l6 6-6 6" /></svg>,
  video:    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><rect x="2" y="6" width="14" height="12" rx="2" /><path d="M22 8l-6 4 6 4z" /></svg>,
  mic:      <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><rect x="9" y="2" width="6" height="12" rx="3" /><path d="M5 10v2a7 7 0 0 0 14 0v-2M12 19v3M8 22h8" /></svg>,
  users:    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /></svg>,
  chat:     <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>,
  headset:  <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M4 15v-3a8 8 0 0 1 16 0v3" /><path d="M4 15a2 2 0 0 0 2 2h1v-4H6a2 2 0 0 0-2 2zM20 15a2 2 0 0 1-2 2h-1v-4h1a2 2 0 0 1 2 2z" /></svg>,
  book:     <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V2H6.5A2.5 2.5 0 0 0 4 4.5v15z" /><path d="M8 6h8M8 10h6" /></svg>,
  briefcase: <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><path d="M3 12h18" /></svg>,
  monitor:  <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="14" rx="2" /><path d="M8 22h8M12 18v4" /></svg>,
  church:   <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M12 2v6M9 5h6" /><path d="M4 22h16V12l-8-5-8 5z" /><path d="M10 22v-6h4v6" /></svg>,
  cassette: <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><rect x="3" y="6" width="18" height="12" rx="2" /><circle cx="8" cy="12" r="2" /><circle cx="16" cy="12" r="2" /></svg>,
  globe:    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2c2.5 3 4 6.5 4 10s-1.5 7-4 10c-2.5-3-4-6.5-4-10s1.5-7 4-10z" /></svg>,
  shield:   <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M12 2l8 3v6c0 5-3.5 9.5-8 11-4.5-1.5-8-6-8-11V5z" /></svg>,
  lock:     <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>,
  search:   <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.35-4.35" /></svg>,
  gear:     <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" /><path d="M12 1v3M12 20v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M1 12h3M20 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" /></svg>,
  clip:     <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>,
  target:   <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>,
  youtube:  <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><rect x="2" y="6" width="20" height="12" rx="3" /><path d="M10 9.5v5l5-2.5z" fill="currentColor" stroke="none" /></svg>,
}

// USE CASES sidebar — always-visible list.
const USE_CASE_NAV = [
  { href: '/interview-transcription',      icon: 'chat',     label: 'Interview Transcription' },
  { href: '/podcast-transcription',        icon: 'headset',  label: 'Podcast Transcription' },
  { href: '/lecture-transcription',        icon: 'book',     label: 'Lecture Transcription' },
  { href: '/business-transcription',       icon: 'briefcase',label: 'Business Transcription' },
  { href: '/meeting-transcription',        icon: 'users',    label: 'Meeting Transcription' },
  { href: '/zoom-transcription',           icon: 'video',    label: 'Zoom Transcription' },
  { href: '/google-meet-transcription',    icon: 'video',    label: 'Google Meet Transcription' },
  { href: '/teams-meeting-transcription',  icon: 'video',    label: 'Teams Meeting Transcription' },
  { href: '/voice-memo-to-text',           icon: 'mic',      label: 'Voice Memo to Text' },
  { href: '/webinar-transcription',        icon: 'monitor',  label: 'Webinar Transcription' },
  { href: '/sermon-transcription',         icon: 'church',   label: 'Sermon Transcription' },
  { href: '/dictation-to-text',            icon: 'editPen',  label: 'Dictation to Text' },
  { href: '/youtube-to-text',              icon: 'youtube',  label: 'YouTube to Text' },
]

function Eyebrow({ children }) {
  return (
    <span className="inline-block bg-brand-50 text-brand-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
      {children}
    </span>
  )
}

// Stylized platform marks. NOT the actual brand logos (those are protected
// and Google/Zoom/etc do not permit third-party redistribution of the exact
// mark). These are lightweight recognizable stand-ins: a video-camera silhouette
// for meeting apps, a mic for audio-first tools, a loop for Loom, etc.
const PlatformMark = {
  // Video-camera pictogram — used for most meeting apps (Zoom, Google Meet,
  // Teams, Webex, generic video). White on brand background.
  videoCamera: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="7" width="12" height="10" rx="2" />
      <path d="M15 10l6-3v10l-6-3z" />
    </svg>
  ),
  // Filled variant for stronger contrast on dark backgrounds
  videoCameraFill: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M4 6h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm14 3.62l4-2.4v9.56l-4-2.4z" />
    </svg>
  ),
  // Play-triangle inside circle — Loom-style
  loomPlay: (
    <svg viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" fill="currentColor" opacity="0.15" />
      <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <path d="M11 9.5v5l4-2.5z" fill="currentColor" />
    </svg>
  ),
  // Waveform + mic — Riverside is podcast/audio-focused
  waveMic: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
      <rect x="9.5" y="4" width="5" height="10" rx="2.5" fill="currentColor" opacity="0.9" />
      <path d="M6 11v1a6 6 0 0 0 12 0v-1M12 20v-3" />
      <path d="M3 12h1M20 12h1" opacity="0.5" />
    </svg>
  ),
  // Sound wave — for podcast-recording tools
  soundwave: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
      <path d="M3 12h1M7 8v8M11 5v14M15 8v8M19 10v4M21 12h1" />
    </svg>
  ),
  // Microphone silhouette — for audio-only tools
  mic: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 3a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3zm5 8a1 1 0 0 0-2 0 3 3 0 1 1-6 0 1 1 0 0 0-2 0 5 5 0 0 0 4 4.9V19H8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2h-3v-3.1a5 5 0 0 0 4-4.9z" />
    </svg>
  ),
  // Phone handset — for phone-recording use case
  phone: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.9.6 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.5 2.8.6a2 2 0 0 1 1.8 2z" />
    </svg>
  ),
  // Cap / mortarboard — for lecture platforms
  cap: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 3 1 9l11 6 9-4.9V17h2V9zM5 13.2v3.3l7 3.8 7-3.8v-3.3l-7 3.8z" />
    </svg>
  ),
  // Broadcast tower — for webinar / broadcast
  broadcast: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
      <circle cx="12" cy="12" r="2" fill="currentColor" />
      <path d="M8.5 15.5A5 5 0 0 1 8.5 8.5M15.5 8.5a5 5 0 0 1 0 7M6 18a9 9 0 0 1 0-12M18 6a9 9 0 0 1 0 12" />
    </svg>
  ),
}

// Small platform pill/card used in the platform row + the "Pick the right
// guide" grid. Colors are the platform's brand.
function PlatformPill({ name, brandBg, iconKey, href }) {
  const mark = iconKey && PlatformMark[iconKey] ? PlatformMark[iconKey] : PlatformMark.videoCamera
  const inner = (
    <div className="flex items-center gap-2.5 bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm hover:border-brand-400 hover:shadow-sm transition-all">
      <span
        className="flex-shrink-0 w-6 h-6 rounded-md flex items-center justify-center text-white p-1"
        style={{ backgroundColor: brandBg }}
      >
        {mark}
      </span>
      <span className="font-medium text-slate-800">{name}</span>
    </div>
  )
  return href ? <Link href={href}>{inner}</Link> : inner
}

// ── Component ───────────────────────────────────────────────────────────────
export default function UseCaseLayout({
  // Hero
  badge,
  h1First,
  h1Second,
  subtitle,

  // Current use case (for sidebar highlight)
  currentHref,

  // Platform chips row under hero (6 platforms this use case works with)
  platformRowLabel = 'Works with',
  platforms = [],   // [{name, brandBg, letter, href}]

  // "How X works" — 3 steps
  howItWorksTitle = 'How it works',
  steps = [],       // [{icon, title, desc}]

  // Live example transcript mockup
  exampleTitle = 'Example transcript & summary',
  exampleFileName = 'meeting-recording.mp4',
  exampleDurationLabel = '30:15',
  exampleLines = [],   // [{t, line}]
  summaryPoints = [],  // string[] — discussion points
  actionItems = [],    // string[] — action items

  // "Why X helps" — 4 benefit cards
  whyTitle = 'Why a platform-agnostic upload helps',
  whyCards = [],       // [{icon, title, desc}]

  // "Common scenarios" — 6 compact chips
  scenariosTitle = 'Common scenarios',
  scenarios = [],      // [{icon, title}]

  // Optional practical guide unique to a specific use case
  practicalTitle,
  practicalIntro,
  practicalItems = [], // [{title, desc}]

  // Tips column + Platform guide grid
  tipsTitle = 'Tips for better transcripts',
  tips = [],           // string[]
  guidesTitle = 'Pick the right platform guide',
  guides = [],         // [{href, icon, title, desc}]

  // FAQ (2 columns)
  faq = [],            // [{q, a}]

  // Bottom CTA
  ctaHeadline = 'Turn your next meeting into clear notes',
  ctaSubtitle = 'Drop a recording from any platform and get a transcript, summary, and exports in seconds.',
  ctaButton = 'Upload a meeting recording',

  // Related use cases footer
  relatedLinks = [],   // [{href, label}]

  // Enable YouTube URL input in the upload zone (YouTube page uses this)
  enableYouTubeUrl = false,
}) {
  // JSON-LD FAQ schema for Google rich results
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
      <section className="bg-gradient-to-b from-brand-50/40 via-slate-100/60 to-slate-100 pt-16 pb-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Eyebrow>{badge}</Eyebrow>
          <h1 className="mt-5 text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
            {h1First}{' '}
            {h1Second && (<><br /><span className="text-brand-600">{h1Second}</span></>)}
          </h1>
          <p className="mt-5 text-lg text-slate-600 max-w-2xl mx-auto">{subtitle}</p>

          <div className="mt-6 mb-5">
            <HeroChips />
          </div>

          <HeroCounter />
        </div>

        <div id="tool" className="max-w-2xl mx-auto mt-10 scroll-mt-20">
          <UploadZone enableYouTubeUrl={enableYouTubeUrl} />
        </div>

        {/* Platform row under upload */}
        {platforms.length > 0 && (
          <div className="max-w-3xl mx-auto mt-8">
            <div className="flex flex-wrap gap-2.5 justify-center">
              {platforms.map((p) => (
                <PlatformPill key={p.name} {...p} />
              ))}
            </div>
          </div>
        )}
      </section>

      {/* ────────────────── 2-COLUMN BODY ────────────────── */}
      <section className="bg-slate-50 py-16 px-4 border-b border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_260px] gap-10">
          {/* ── LEFT: main content ── */}
          <div className="min-w-0 space-y-14">

            {/* ── How it works ── */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">{howItWorksTitle}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {steps.map(({ icon, title, desc }, i) => (
                  <div key={title} className="bg-white border border-slate-200 rounded-2xl p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-7 h-7 rounded-full bg-slate-100 text-slate-500 text-xs font-semibold flex items-center justify-center">
                        {i + 1}
                      </div>
                      <span className="w-5 h-5 text-brand-600">{Icons[icon] || Icons.folder}</span>
                    </div>
                    <div className="font-semibold text-slate-900 mb-1.5">{title}</div>
                    <div className="text-sm text-slate-600 leading-snug">{desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Example transcript + AI summary ── */}
            {exampleLines.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">{exampleTitle}</h2>
                <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">

                  {/* Tab bar */}
                  <div className="flex items-center justify-between border-b border-slate-100 px-4">
                    <div className="flex items-center gap-4">
                      <span className="pb-2.5 pt-3 font-semibold text-sm text-brand-700 border-b-2 border-brand-600">Transcript</span>
                      <span className="pb-2.5 pt-3 font-medium text-sm text-slate-500">Notes</span>
                    </div>
                    <div className="relative">
                      <span className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400">{Icons.search}</span>
                      <div className="text-xs text-slate-400 border border-slate-200 rounded-lg pl-7 pr-3 py-1.5 bg-white">Search</div>
                    </div>
                  </div>

                  {/* Two-column body: transcript left, AI summary right */}
                  <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
                    <div className="p-5">
                      <div className="divide-y divide-slate-100">
                        {exampleLines.map((row, i) => (
                          <div key={i} className="grid grid-cols-[auto_1fr] gap-4 py-2 items-start text-sm">
                            <span className="font-mono text-xs text-brand-600 font-semibold pt-0.5 whitespace-nowrap">{row.t}</span>
                            <span className="text-slate-700 leading-snug">{row.line}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-5 bg-slate-50/40">
                      <div className="text-sm font-semibold text-slate-800 mb-3 flex items-center gap-2">
                        <span className="w-4 h-4 text-brand-600">{Icons.sparkles}</span>
                        AI Summary
                      </div>
                      {summaryPoints.length > 0 && (
                        <ul className="space-y-1.5 text-sm text-slate-700">
                          {summaryPoints.map((p, i) => (
                            <li key={i} className="flex gap-2">
                              <span className="text-brand-500 mt-1.5 flex-shrink-0">•</span>
                              <span>{p}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {actionItems.length > 0 && (
                        <>
                          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mt-5 mb-2">Action items</div>
                          <ul className="space-y-1.5 text-sm text-slate-700">
                            {actionItems.map((it, i) => (
                              <li key={i} className="flex gap-2 items-start">
                                <span className="mt-1 w-3.5 h-3.5 rounded border border-slate-300 flex-shrink-0" />
                                <span>{it}</span>
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Player + export row */}
                  <div className="flex flex-wrap items-center gap-3 border-t border-slate-100 px-4 py-3 bg-white">
                    <div className="flex items-center gap-3 text-xs text-slate-500 flex-1 min-w-[220px]">
                      <svg className="w-4 h-4 text-slate-500" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                      <span className="font-mono">0:00 / {exampleDurationLabel}</span>
                      <div className="flex-1 h-1 rounded-full bg-slate-200">
                        <div className="h-full w-0 bg-brand-500 rounded-full" />
                      </div>
                      <span className="text-slate-500">1x</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 font-medium text-slate-700">Translate</span>
                      {['TXT', 'SRT', 'VTT', 'DOCX'].map((f) => (
                        <span
                          key={f}
                          className="text-xs bg-white border border-slate-200 rounded-lg px-2 py-1.5 font-semibold text-brand-700"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-[11px] text-slate-400 mt-2">
                  Illustration. Real transcripts show timestamps and text without speaker labels.
                </p>
              </div>
            )}

            {/* ── Why cards ── */}
            {whyCards.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">{whyTitle}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {whyCards.map(({ icon, title, desc }) => (
                    <div key={title} className="bg-white border border-slate-200 rounded-2xl p-5">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-brand-50 text-brand-600 mb-3">
                        <span className="w-5 h-5">{Icons[icon] || Icons.sparkles}</span>
                      </div>
                      <div className="font-semibold text-slate-900 mb-1.5">{title}</div>
                      <div className="text-sm text-slate-600 leading-snug">{desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ── Scenarios chips ── */}
            {scenarios.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">{scenariosTitle}</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                  {scenarios.map(({ icon, title }) => (
                    <div key={title} className="bg-white border border-slate-200 rounded-xl p-3 text-center">
                      <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-brand-50 text-brand-600 mb-2">
                        <span className="w-4 h-4">{Icons[icon] || Icons.sparkles}</span>
                      </div>
                      <div className="text-[13px] font-semibold text-slate-800 leading-tight">{title}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ── Optional use-case-specific practical guide ── */}
            {practicalItems.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">{practicalTitle}</h2>
                {practicalIntro && (
                  <p className="text-sm text-slate-600 leading-relaxed max-w-3xl mb-6">{practicalIntro}</p>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {practicalItems.map(({ title, desc }) => (
                    <div key={title} className="bg-white border border-slate-200 rounded-2xl p-5">
                      <div className="font-semibold text-slate-900 mb-1.5">{title}</div>
                      <div className="text-sm text-slate-600 leading-relaxed">{desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ── Tips + Platform guides ── */}
            {(tips.length > 0 || guides.length > 0) && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {tips.length > 0 && (
                  <div>
                    <h2 className="text-lg font-bold text-slate-900 mb-4">{tipsTitle}</h2>
                    <ul className="space-y-2.5">
                      {tips.map((tip, i) => (
                        <li key={i} className="flex gap-3 items-start text-sm text-slate-700">
                          <span className="w-5 h-5 flex-shrink-0 mt-0.5 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center">
                            <span className="w-3 h-3">{Icons.check}</span>
                          </span>
                          <span className="leading-snug">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {guides.length > 0 && (
                  <div>
                    <h2 className="text-lg font-bold text-slate-900 mb-4">{guidesTitle}</h2>
                    <div className="grid grid-cols-2 gap-3">
                      {guides.map(({ href, icon, title, desc }) => (
                        <Link
                          key={title}
                          href={href}
                          className="group bg-white border border-slate-200 rounded-xl p-4 hover:border-brand-400 hover:shadow-sm transition-all"
                        >
                          <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-brand-50 text-brand-600 mb-2">
                            <span className="w-4 h-4">{Icons[icon] || Icons.video}</span>
                          </div>
                          <div className="font-semibold text-slate-900 text-sm leading-tight">{title}</div>
                          <div className="text-[11px] text-slate-500 mt-1 leading-snug">{desc}</div>
                          <div className="text-[11px] text-brand-600 mt-2 inline-flex items-center gap-1 group-hover:gap-1.5 transition-all">
                            <span className="w-3.5 h-3.5">{Icons.arrowRight}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* ── FAQ 2-column ── */}
            {/*
              CSS columns instead of a 2-col grid so each item stays at its
              intrinsic height. In a grid the row-height matches the tallest
              cell, which makes a closed sibling look like a tall empty box
              next to an open item. With columns the items flow like a
              magazine and each column grows independently.
            */}
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
              <div className="text-xs font-semibold text-brand-700 uppercase tracking-wide mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                Use cases
              </div>
              <nav className="space-y-1">
                {USE_CASE_NAV.map((item) => {
                  const isCurrent = item.href === currentHref
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={
                        'group flex items-start gap-2.5 rounded-lg px-3 py-2 text-sm transition-colors ' +
                        (isCurrent
                          ? 'bg-white border border-slate-200 text-slate-900 font-semibold shadow-sm'
                          : 'text-slate-500 hover:text-slate-800 hover:bg-white/60')
                      }
                    >
                      <span className={'w-4 h-4 mt-0.5 flex-shrink-0 ' + (isCurrent ? 'text-brand-600' : 'text-slate-400')}>
                        {Icons[item.icon] || Icons.file}
                      </span>
                      <span className="leading-tight">{item.label}</span>
                    </Link>
                  )
                })}
              </nav>
            </div>
          </aside>
        </div>
      </section>

      {/* ────────────────── BOTTOM CTA PLATE ────────────────── */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="relative bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 py-8 px-6 md:px-10 text-center md:text-left">
            <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center flex-shrink-0">
              <span className="w-6 h-6">{Icons.upload}</span>
            </div>
            <div className="min-w-0 flex-1 max-w-lg">
              <div className="font-bold text-slate-900 text-lg leading-tight">{ctaHeadline}</div>
              <div className="text-sm text-slate-500 mt-1">{ctaSubtitle}</div>
            </div>
            <Link
              href="#tool"
              className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm px-5 py-3 rounded-xl transition-all flex-shrink-0"
            >
              <span>{ctaButton}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ────────────────── RELATED USE CASES ────────────────── */}
      {relatedLinks.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 pb-16">
          <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">Related use cases</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
            {relatedLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm text-brand-600 hover:text-brand-700 hover:underline inline-flex items-center gap-1 group"
              >
                <span>{label}</span>
                <span className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform">{Icons.arrowRight}</span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  )
}
