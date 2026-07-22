// FormatPageLayout — shared skeleton for every "/X-to-text" format landing.
//
// Structure mirrors /transcribe-audio-to-text (the umbrella page). Each
// format-specific page passes props to override the parts that differ:
//
//   - Hero (badge / h1 first line / h1 second line / subtitle)
//   - Related-format cards
//   - Live transcript preview (filename + 8 timestamped lines)
//   - "Why one X-to-text tool is better" 4 benefit cards
//   - "When this page is the right fit" 6 scenario cards
//   - Format-specific technical notes
//   - FAQ questions/answers
//   - Bottom CTA copy
//
// Shared across every format page (rendered by this component, no props):
//   - Hero-adjacent HeroChips + HeroCounter (already shared)
//   - UploadZone
//   - How it works (3 steps — same text)
//   - Bottom CTA plate (copy is per-page, structure shared)
//   - More transcription tools (4 cards)
//
// Localization: EN only for now. Format pages in other 9 locales still
// render via LandingLayout; port later.

import Link from 'next/link'
import UploadZone from '@/components/UploadZone'
import HeroChips from '@/components/HeroChips'
import HeroCounter from '@/components/HeroCounter'

// ── Inline SVG icon set ──────────────────────────────────────────────────────
const Icons = {
  music:    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M9 18V5l10-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="16" cy="16" r="3" /></svg>,
  file:     <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /></svg>,
  upload:   <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M12 3v14m-5-5l5-5 5 5" /><path d="M4 21h16" /></svg>,
  sparkles: <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5zM19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8z" /></svg>,
  editPen:  <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4z" /></svg>,
  video:    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><rect x="2" y="6" width="14" height="12" rx="2" /><path d="M22 8l-6 4 6 4z" /></svg>,
  check:    <svg fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg>,
  warn:     <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M12 3l10 18H2z" /><path d="M12 10v4M12 18h.01" /></svg>,
  xCircle:  <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M8 8l8 8M16 8l-8 8" /></svg>,
  arrowRight: <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6l6 6-6 6" /></svg>,
  bolt:     <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M13 2L3 14h7l-1 8 10-12h-7z" /></svg>,
  target:   <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>,
  gear:     <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" /><path d="M12 1v3M12 20v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M1 12h3M20 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" /></svg>,
  cloud:    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M18 19a4 4 0 1 0-1-7.87A6 6 0 0 0 6 12a4 4 0 0 0 0 8z" /></svg>,
  search:   <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.35-4.35" /></svg>,
  layers:   <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M12 2L2 8l10 6 10-6zM2 16l10 6 10-6M2 12l10 6 10-6" /></svg>,
  users:    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /></svg>,
  ear:      <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M6 8.5C6 5.5 8.5 3 12 3s6 2.5 6 5.5c0 2-1 3-2.5 4S13 14 12 15c-1 1-1 2-1 3 0 1.5-1 3-3 3s-3-1.5-3-3" /></svg>,
  clip:     <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>,
  waveform: <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M3 12h2M19 12h2M7 8v8M11 5v14M15 8v8" /></svg>,
  mic:      <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><rect x="9" y="2" width="6" height="12" rx="3" /><path d="M5 10v2a7 7 0 0 0 14 0v-2M12 19v3M8 22h8" /></svg>,
  book:     <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V2H6.5A2.5 2.5 0 0 0 4 4.5v15z" /><path d="M8 6h8M8 10h6" /></svg>,
  briefcase: <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><path d="M3 12h18" /></svg>,
  globe:    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2c2.5 3 4 6.5 4 10s-1.5 7-4 10c-2.5-3-4-6.5-4-10s1.5-7 4-10z" /></svg>,
}

function Eyebrow({ children }) {
  return (
    <span className="inline-block bg-brand-50 text-brand-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
      {children}
    </span>
  )
}

// Default related-format cards. The video page replaces these with video
// containers so the section stays relevant to the current intent.
const FORMAT_CARDS = [
  { key: 'mp3',  name: 'MP3',  ext: '.mp3',  href: '/transcribe-mp3-to-text' },
  { key: 'm4a',  name: 'M4A',  ext: '.m4a',  href: '/m4a-to-text' },
  { key: 'wav',  name: 'WAV',  ext: '.wav',  href: '/wav-to-text' },
  { key: 'flac', name: 'FLAC', ext: '.flac', href: '/flac-to-text' },
  { key: 'ogg',  name: 'OGG',  ext: '.ogg',  href: '/ogg-to-text' },
  { key: 'aac',  name: 'AAC',  ext: '.aac',  href: '/aac-to-text' },
  { key: 'webm', name: 'WebM', ext: '.webm', href: '/webm-to-text' },
]

// ── Component ───────────────────────────────────────────────────────────────
export default function FormatPageLayout({
  // Hero
  badge,
  h1First,
  h1Second,
  subtitle,

  // Related formats
  highlightFormat = null,
  relatedFormatsTitle = 'Other audio formats you can transcribe',
  relatedFormats = FORMAT_CARDS,

  // Live preview mockup content
  previewFileName = 'audio.mp3',
  previewWordCount = 180,
  previewLines = [],   // [{t, line}]
  previewDurationLabel = '1:39',

  // "Why one X-to-text tool is better" — 4 cards
  whyTitle = 'Why one audio-to-text tool is better',
  whyCards = [],       // [{icon, title, desc}]

  // "When this page is the right fit" — 6 cards
  scenariosTitle = 'When this page is the right fit',
  scenarios = [],      // [{icon, title, desc}]

  // Compact, format-specific technical section
  technicalTitle,
  technicalIntro,
  technicalFacts = [], // [{icon, title, desc}]

  // FAQ
  faq = [],            // [{q, a}]

  // Bottom CTA
  ctaHeadline = 'Drop your audio file and get the text',
  ctaSubtitle = 'Free. No signup. No limits on format.',
  ctaButton = 'Upload audio to transcribe',

  // Enable YouTube URL input in the upload zone (video page uses this)
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
      </section>

      {/* ────────────────── FORMAT GRID ────────────────── */}
      <section className="bg-white py-16 px-4 border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">{relatedFormatsTitle}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {relatedFormats.map(({ key, name, ext, href }) => {
              const isCurrent = highlightFormat === key
              const card = (
                <>
                  <div className={
                    'inline-flex items-center justify-center w-12 h-12 rounded-xl mb-3 transition-colors ' +
                    (isCurrent ? 'bg-brand-600 text-white' : 'bg-brand-50 text-brand-600 group-hover:bg-brand-100')
                  }>
                    <span className="w-6 h-6">{key === 'video' ? Icons.video : Icons.file}</span>
                  </div>
                  <div className={'text-sm font-bold leading-tight ' + (isCurrent ? 'text-brand-700' : 'text-slate-900')}>
                    {name}
                  </div>
                  <div className={'text-[11px] mt-0.5 ' + (isCurrent ? 'text-brand-600 font-semibold' : 'text-slate-400')}>
                    {isCurrent ? 'You are here' : ext}
                  </div>
                </>
              )
              const className =
                'rounded-2xl p-4 text-center transition-all group ' +
                (isCurrent
                  ? 'bg-brand-50 border-2 border-brand-500 shadow-sm'
                  : 'bg-white border border-slate-200 hover:border-brand-400 hover:shadow-sm')

              return href ? (
                <Link
                  key={key}
                  href={href}
                  className={className}
                >
                  {card}
                </Link>
              ) : (
                <div key={key} className={className}>{card}</div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ────────────────── HOW IT WORKS + LIVE PREVIEW ────────────────── */}
      <section className="bg-slate-50 py-16 px-4 border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-10">How it works</h2>

          <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] gap-10 items-start">
            <ol className="space-y-8">
              {[
                { step: 1, icon: Icons.upload,   title: 'Drop your file',                    desc: 'Upload from your device or drag and drop. Any common audio or video format.' },
                { step: 2, icon: Icons.waveform, title: 'Whisper transcribes the audio',     desc: 'Whisper large-v3 runs on our backend with automatic punctuation and per-segment timestamps.' },
                { step: 3, icon: Icons.editPen,  title: 'Edit, export, share',               desc: 'Review the transcript, summarize with AI, translate to 50+ languages, and export as TXT, DOCX, PDF, or SRT.' },
              ].map(({ step, icon, title, desc }) => (
                <li key={step} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-600 text-white text-sm font-semibold flex items-center justify-center">
                    {step}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-5 h-5 text-brand-600">{icon}</span>
                      <h3 className="font-semibold text-slate-900">{title}</h3>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
                  </div>
                </li>
              ))}
            </ol>

            {/* Live preview mockup — matches the real Wave 3 transcript block */}
            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden lg:-mt-[72px]">
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-100 gap-3 flex-wrap">
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center">
                    <span className="w-4 h-4">{Icons.file}</span>
                  </span>
                  <div className="min-w-0">
                    <div className="font-semibold text-slate-800 text-sm truncate">{previewFileName}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5 flex items-center gap-1.5">
                      <span className="inline-flex items-center gap-1 text-emerald-600 font-medium">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        Completed
                      </span>
                      <span className="text-slate-300">·</span>
                      <span>{previewWordCount} words</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 flex-shrink-0">
                  <button className="inline-flex items-center gap-1 text-xs bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-slate-700 font-medium">
                    <svg className="w-3.5 h-3.5 text-slate-500" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                      <path d="M5 8l6 6M4 14l6-6 2-3M2 5h12M7 2h1M22 22l-5-10-5 10M14 18h6" />
                    </svg>
                    Translate
                    <span className="text-slate-400">▾</span>
                  </button>
                  <button className="inline-flex items-center gap-1 text-xs bg-brand-600 text-white rounded-lg px-2.5 py-1.5 font-semibold">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                    </svg>
                    Download
                    <span>▾</span>
                  </button>
                  <button className="text-xs text-slate-500 hover:text-slate-700 px-2 py-1.5">↑ New</button>
                </div>
              </div>

              <div className="flex items-center gap-4 px-5 pt-3 text-xs border-b border-slate-100">
                <button className="pb-2.5 font-semibold text-brand-700 border-b-2 border-brand-600">Transcript</button>
                <button className="pb-2.5 text-slate-500">AI Summary</button>
                <button className="pb-2.5 text-slate-500">Chat</button>
              </div>

              <div className="px-5 pt-4">
                <div className="inline-flex items-center gap-0 bg-slate-100 rounded-lg p-0.5 text-xs">
                  <button className="px-3 py-1 rounded-md bg-white text-slate-800 shadow-sm font-medium">Reader</button>
                  <button className="px-3 py-1 rounded-md text-slate-500">Editor</button>
                </div>
              </div>

              <div className="px-5 pt-3">
                <div className="flex items-center gap-3 bg-slate-100 rounded-full px-3 py-2 text-slate-600 text-xs">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                  <span className="font-mono">0:00 / {previewDurationLabel}</span>
                  <div className="flex-1 h-1 rounded-full bg-slate-300/70 relative">
                    <div className="absolute inset-y-0 left-0 w-0 bg-brand-500 rounded-full" />
                  </div>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.5 4.5 0 0 0 2.5-4z" /></svg>
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="5" r="1.5" /><circle cx="12" cy="12" r="1.5" /><circle cx="12" cy="19" r="1.5" /></svg>
                </div>
              </div>

              <div className="px-5 pt-3">
                <div className="relative">
                  <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <circle cx="11" cy="11" r="7" /><path d="M21 21l-4.35-4.35" />
                  </svg>
                  <div className="text-xs text-slate-400 border border-slate-200 rounded-lg pl-8 pr-3 py-2 bg-white">Search transcript…</div>
                </div>
              </div>

              <div className="px-5 pt-3">
                <div className="border border-slate-200 rounded-xl overflow-hidden divide-y divide-slate-100 bg-white">
                  {previewLines.map((row, i) => (
                    <div key={i} className="grid grid-cols-[auto_1fr] gap-4 px-4 py-2.5 items-start text-sm hover:bg-slate-50">
                      <span className="font-mono text-xs text-brand-600 font-semibold pt-0.5 whitespace-nowrap">{row.t}</span>
                      <span className="text-slate-700 leading-snug">{row.line}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-[11px] text-slate-400 px-5 py-3">
                Cleaner per-line layout with timestamps. Best for reading.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────── WHY ONE X-TO-TEXT TOOL ────────────────── */}
      {whyCards.length > 0 && (
        <section className="bg-white py-16 px-4 border-b border-slate-100">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">{whyTitle}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {whyCards.map(({ icon, title, desc }) => (
                <div key={title} className="bg-white border border-slate-200 rounded-2xl p-5">
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-brand-50 text-brand-600 mb-4">
                    <span className="w-6 h-6">{Icons[icon] || Icons.sparkles}</span>
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ────────────────── WHEN THIS PAGE IS THE RIGHT FIT ────────────────── */}
      {scenarios.length > 0 && (
        <section className="bg-white py-16 px-4 border-b border-slate-100">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">{scenariosTitle}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {scenarios.map(({ icon, title, desc }) => (
                <div key={title} className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-brand-400 hover:shadow-sm transition-all">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-brand-50 text-brand-600 mb-3">
                    <span className="w-5 h-5">{Icons[icon] || Icons.sparkles}</span>
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-1.5">{title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ────────────────── FORMAT-SPECIFIC TECHNICAL NOTES ────────────────── */}
      {technicalFacts.length > 0 && (
        <section className="bg-slate-50 py-16 px-4 border-b border-slate-100">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900">{technicalTitle}</h2>
            {technicalIntro && (
              <p className="mt-3 max-w-3xl text-sm text-slate-600 leading-relaxed">{technicalIntro}</p>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
              {technicalFacts.map(({ icon, title, desc }) => (
                <div key={title} className="bg-white border border-slate-200 rounded-2xl p-5">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-brand-50 text-brand-600 mb-3">
                    <span className="w-5 h-5">{Icons[icon] || Icons.gear}</span>
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-1.5">{title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ────────────────── FAQ (1 column) ────────────────── */}
      {faq.length > 0 && (
        <section id="faq" className="bg-slate-50 py-16 px-4 border-b border-slate-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-10 text-center">Frequently asked questions</h2>
            <div className="space-y-3">
              {faq.map(({ q, a }, i) => (
                <details
                  key={q}
                  className="group bg-white border border-slate-200 rounded-xl overflow-hidden open:shadow-sm"
                  {...(i === 0 ? { open: true } : {})}
                >
                  <summary className="cursor-pointer list-none px-5 py-4 flex items-center justify-between gap-3 font-semibold text-slate-800 hover:bg-slate-50 transition-colors">
                    <span>{q}</span>
                    <svg
                      className="w-4 h-4 flex-shrink-0 text-slate-400 transition-transform group-open:rotate-180"
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed">
                    <p>{a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ────────────────── BOTTOM CTA PLATE ────────────────── */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="relative bg-gradient-to-r from-brand-600 via-brand-500 to-brand-600 rounded-3xl overflow-hidden shadow-lg shadow-brand-500/20">
          <div className="absolute right-24 top-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-white/10 blur-3xl pointer-events-none hidden md:block" />
          <div className="relative flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 py-10 px-6 md:px-10 text-center md:text-left">
            <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur border border-white/20 flex items-center justify-center text-white flex-shrink-0">
              <span className="w-7 h-7">{Icons.sparkles}</span>
            </div>
            <div className="min-w-0 flex-1 max-w-lg">
              <div className="font-bold text-white text-xl md:text-2xl leading-tight">
                {ctaHeadline}
              </div>
              <div className="text-sm text-white/85 mt-1.5">
                {ctaSubtitle}
              </div>
              <div className="mt-3 flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-1 text-[11px] text-white/80">
                <span className="inline-flex items-center gap-1"><span className="w-3 h-3">{Icons.check}</span> No signup</span>
                <span className="inline-flex items-center gap-1"><span className="w-3 h-3">{Icons.check}</span> No credit card</span>
                <span className="inline-flex items-center gap-1"><span className="w-3 h-3">{Icons.check}</span> 50+ languages</span>
              </div>
            </div>
            <Link
              href="#tool"
              className="inline-flex items-center gap-2 bg-white text-brand-700 font-bold text-sm md:text-base px-6 py-3.5 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex-shrink-0 group"
            >
              <span>{ctaButton}</span>
              <span className="w-4 h-4 group-hover:translate-x-0.5 transition-transform">{Icons.arrowRight}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ────────────────── MORE TRANSCRIPTION TOOLS ────────────────── */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-lg font-semibold text-slate-800 mb-4">More transcription tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            { href: '/transcribe-audio-to-text',  icon: Icons.file,  title: 'Audio to Text',       desc: 'One page for every audio format.' },
            { href: '/transcribe-video-to-text',  icon: Icons.video, title: 'Video to Text',       desc: 'Extract text from any video.' },
            { href: '/youtube-to-text',           icon: Icons.video, title: 'YouTube to Text',     desc: 'Transcribe YouTube videos.' },
            { href: '/free-srt-generator',        icon: Icons.file,  title: 'Free SRT Generator',  desc: 'Create accurate SRT subtitles online.' },
          ].map(({ href, icon, title, desc }) => (
            <Link
              key={href}
              href={href}
              className="group bg-white border border-slate-200 rounded-2xl p-4 flex items-center gap-3 hover:border-brand-400 hover:shadow-sm transition-all"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex-shrink-0">
                <span className="w-5 h-5">{icon}</span>
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-semibold text-slate-900 text-sm">{title}</div>
                <div className="text-xs text-slate-500 leading-snug mt-0.5">{desc}</div>
              </div>
              <span className="w-4 h-4 text-slate-300 group-hover:text-brand-500 group-hover:translate-x-0.5 transition-all flex-shrink-0">
                {Icons.arrowRight}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
