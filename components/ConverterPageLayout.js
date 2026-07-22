// ConverterPageLayout — shared skeleton for every /X-to-Y converter and
// upload-only tool page (SRT Generator, Timestamped Transcript).
//
// Structure follows the "Tools" mockup:
//   1. Hero: badge + h1First + h1Second brand-blue + subtitle
//      + 4 trust chips + big drop area (ConverterZone or UploadZone)
//      + Output/Quality/Audio info row (converters only)
//   2. 2-column body:
//      LEFT:
//        - "How X→Y works" — 3 numbered steps
//        - "Conversion preview" (converters) — Input → Complete → Output
//        - "Why use Mictoo for X→Y?" — 4 benefit cards
//        - "When X→Y is useful" — 6 compact chips
//        - Tips list + "What happens during conversion" flow diagram
//        - "X vs Y" comparison table (converters only)
//        - FAQ 2-column (CSS columns so items don't stretch)
//        - Bottom CTA plate
//        - More conversion tools (inline links)
//      RIGHT (sticky):
//        - TOOLS navigation (current tool highlighted)
//
// Handles two modes:
//   mode="converter" → renders ConverterZone with {from, to}, shows
//     Output/Quality/Audio info row, shows compare table
//   mode="upload" → renders UploadZone, hides Output row and compare table

import Link from 'next/link'
import UploadZone from '@/components/UploadZone'
import ConverterZone from '@/components/ConverterZone'
import HeroChips from '@/components/HeroChips'
import HeroCounter from '@/components/HeroCounter'
import { t } from '@/lib/i18n'

// ── Inline SVG icon set (subset shared with UseCaseLayout) ──────────────────
const Icons = {
  file:     <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /></svg>,
  fileAudio: <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /><path d="M9 18V13l4-1v6" /><circle cx="8" cy="18" r="1.5" /><circle cx="13" cy="18" r="1.5" /></svg>,
  upload:   <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M12 3v14m-5-5l5-5 5 5" /><path d="M4 21h16" /></svg>,
  download: <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" /></svg>,
  refresh:  <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M20 12a8 8 0 0 1-14.9 4M4 12a8 8 0 0 1 14.9-4M20 4v5h-5M4 20v-5h5" /></svg>,
  clock:    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>,
  captions: <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M7 12h3M14 12h3M7 15h5M13 15h4" /></svg>,
  gift:     <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><rect x="3" y="8" width="18" height="4" /><path d="M5 12v9h14v-9M12 8v13" /><path d="M12 8s-3-4-6-2 2 4 6 2zM12 8s3-4 6-2-2 4-6 2z" /></svg>,
  shield:   <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M12 2l8 3v6c0 5-3.5 9.5-8 11-4.5-1.5-8-6-8-11V5z" /></svg>,
  user:     <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" /><path d="M4 21c1-4 5-6 8-6s7 2 8 6" /></svg>,
  drop:     <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z" /></svg>,
  check:    <svg fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg>,
  arrowRight: <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6l6 6-6 6" /></svg>,
  sparkles: <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5zM19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8z" /></svg>,
  waveform: <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M3 12h2M19 12h2M7 8v8M11 5v14M15 8v8" /></svg>,
  lock:     <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>,
  target:   <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>,
  headphones: <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M4 15v-3a8 8 0 0 1 16 0v3" /><path d="M4 15a2 2 0 0 0 2 2h1v-4H6a2 2 0 0 0-2 2zM20 15a2 2 0 0 1-2 2h-1v-4h1a2 2 0 0 1 2 2z" /></svg>,
  mail:     <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>,
  editPen:  <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4z" /></svg>,
  archive:  <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="4" rx="1" /><path d="M5 8v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8M10 12h4" /></svg>,
  video:    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><rect x="2" y="6" width="14" height="12" rx="2" /><path d="M22 8l-6 4 6 4z" /></svg>,
  cap:      <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 3 1 9l11 6 9-4.9V17h2V9zM5 13.2v3.3l7 3.8 7-3.8v-3.3l-7 3.8z" /></svg>,
}

// TOOLS sidebar — labels resolved via layouts.converter.nav.<slug>
const TOOLS_NAV = [
  { slug: 'free-srt-generator',        icon: 'captions' },
  { slug: 'timestamped-transcription', icon: 'clock' },
  { slug: 'mp4-to-mp3',                icon: 'refresh' },
  { slug: 'wav-to-mp3',                icon: 'refresh' },
  { slug: 'webm-to-mp3',               icon: 'refresh' },
  { slug: 'flac-to-mp3',               icon: 'refresh' },
  { slug: 'aac-to-mp3',                icon: 'refresh' },
  { slug: 'wma-to-mp3',                icon: 'refresh' },
  { slug: 'm4a-to-mp3',                icon: 'refresh' },
  { slug: 'mp3-to-m4a',                icon: 'refresh' },
  { slug: 'mp3-to-wav',                icon: 'refresh' },
]

// Default 4-chip trust row — labels resolved via layouts.converterZone.chip*
// so each locale gets its own copy. Icons stay constant.
function defaultChips(locale) {
  return [
    { label: t(locale, 'layouts.converterZone.chipFree'),         icon: 'gift' },
    { label: t(locale, 'layouts.converterZone.chipAutoDeleted'),  icon: 'shield' },
    { label: t(locale, 'layouts.converterZone.chipNoSignup'),     icon: 'user' },
    { label: t(locale, 'layouts.converterZone.chipNoWatermark'),  icon: 'drop' },
  ]
}

function Eyebrow({ children }) {
  return (
    <span className="inline-block text-brand-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
      {children}
    </span>
  )
}

function TrustChip({ icon, label }) {
  return (
    <div className="inline-flex items-center gap-1.5 text-sm text-slate-600">
      <span className="w-4 h-4 text-brand-500">{Icons[icon]}</span>
      <span>{label}</span>
    </div>
  )
}

// ── Component ───────────────────────────────────────────────────────────────
export default function ConverterPageLayout({
  // Locale
  locale = 'en',

  // Mode: 'converter' (default) or 'upload'
  mode = 'converter',
  from,          // converter: source ext (mp4, wav, ...)
  to,            // converter: target ext (mp3, m4a, ...)

  // Hero
  badge,
  h1First,
  h1Second,
  subtitle,
  chips,         // optional override of the default 4 trust chips

  // Current tool (for sidebar highlight)
  currentHref,

  // Output info row (converter only) — shown as static chips below the zone
  outputFormat,       // 'MP3'
  outputQuality,      // '128 kbps'
  outputAudio,        // 'Stereo'

  // "How it works" — 3 steps
  stepsTitle,
  steps = [],         // [{icon, title, desc}]

  // Conversion preview mock (converter only)
  previewInputName,      // e.g. 'meeting-recording.mp4'
  previewInputSize,      // e.g. '128.4 MB · 00:45:32'
  previewOutputName,     // e.g. 'meeting-recording.mp3'
  previewOutputSize,     // e.g. '00:45:32 · 128 kbps'

  // Why cards
  whyTitle = 'Why use Mictoo',
  whyCards = [],         // [{icon, title, desc}]

  // Use case chips
  scenariosTitle = 'When this converter is useful',
  scenarios = [],        // [{icon, title}]

  // Tips + What happens
  tipsTitle,
  tips = [],             // string[]
  processTitle,
  processSteps = [],     // string[] (3 short steps for the mini-diagram)

  // Comparison table (converter only) — X vs Y
  compareTitle,          // 'MP4 vs MP3'
  compareRows = [],      // [{fmt, contains, size, best}]

  // FAQ
  faq = [],              // [{q, a}]

  // Bottom CTA
  ctaHeadline,
  ctaSubtitle,
  ctaButton,

  // More conversion tools — inline chips at the bottom
  moreTools = [],        // [{href, label}]
}) {
  const isConverter = mode === 'converter'
  const trustChips = chips || defaultChips(locale)

  // Labels for ConverterZone drop area — locale-aware, with {from}/{to}/{size}
  // interpolated per-page so the model can say ".mp4 only" or ".{{to}}".
  const zoneLabels = {
    dropPrimary:    t(locale, 'layouts.converterZone.dropPrimary',    { from: from || 'audio' }),
    dropSecondary:  t(locale, 'layouts.converterZone.dropSecondary'),
    browseButton:   t(locale, 'layouts.converterZone.browseButton'),
    sizeHint:       t(locale, 'layouts.converterZone.sizeHint',       { size: 25, from: from || 'audio' }),
    uploading:      t(locale, 'layouts.converterZone.uploading'),
    converting:     t(locale, 'layouts.converterZone.converting',     { to: to || 'output' }),
    doneTitle:      t(locale, 'layouts.converterZone.doneTitle'),
    downloadButton: t(locale, 'layouts.converterZone.downloadButton', { to: to || 'file' }),
    newFileButton:  t(locale, 'layouts.converterZone.newFileButton'),
    errorTitle:     t(locale, 'layouts.converterZone.errorTitle'),
    tryAgain:       t(locale, 'layouts.converterZone.tryAgain'),
  }

  const faqSchema = faq?.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: locale === 'pt' ? 'pt-BR' : locale,
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

      {/* ────────────────── HERO ────────────────── */}
      <section className="bg-gradient-to-b from-brand-50/40 via-slate-100/60 to-slate-100 pt-14 pb-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Eyebrow>{badge}</Eyebrow>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
            {h1First}
            {h1Second && (<><br /><span className="text-brand-600">{h1Second}</span></>)}
          </h1>
          <p className="mt-5 text-base text-slate-600 max-w-2xl mx-auto">{subtitle}</p>

          <div className="mt-5 flex flex-wrap justify-center items-center gap-x-6 gap-y-2">
            {trustChips.map((c) => <TrustChip key={c.label} {...c} />)}
          </div>
        </div>

        <div id="tool" className="max-w-3xl mx-auto mt-8 scroll-mt-20">
          {isConverter ? (
            <ConverterZone from={from} to={to} labels={zoneLabels} />
          ) : (
            <UploadZone locale={locale} />
          )}
        </div>

        {/* Output/Quality/Audio informational row — converter only */}
        {isConverter && (outputFormat || outputQuality || outputAudio) && (
          <div className="max-w-3xl mx-auto mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
            {outputFormat && (
              <div className="bg-white border border-slate-200 rounded-lg px-3 py-2 flex items-center gap-2 justify-center">
                <span className="w-4 h-4 text-brand-600">{Icons.fileAudio}</span>
                <span className="text-slate-500">{t(locale, 'layouts.converter.output')}</span>
                <span className="font-semibold text-slate-800">{outputFormat}</span>
              </div>
            )}
            {outputQuality && (
              <div className="bg-white border border-slate-200 rounded-lg px-3 py-2 flex items-center gap-2 justify-center">
                <span className="w-4 h-4 text-brand-600">{Icons.waveform}</span>
                <span className="text-slate-500">{t(locale, 'layouts.converter.quality')}</span>
                <span className="font-semibold text-slate-800">{outputQuality}</span>
              </div>
            )}
            {outputAudio && (
              <div className="bg-white border border-slate-200 rounded-lg px-3 py-2 flex items-center gap-2 justify-center">
                <span className="w-4 h-4 text-brand-600">{Icons.headphones}</span>
                <span className="text-slate-500">{t(locale, 'layouts.converter.audio')}</span>
                <span className="font-semibold text-slate-800">{outputAudio}</span>
              </div>
            )}
          </div>
        )}
      </section>

      {/* ────────────────── 2-COLUMN BODY ────────────────── */}
      <section className="bg-slate-50 py-14 px-4 border-b border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_260px] gap-10">
          {/* ── LEFT: main content ── */}
          <div className="min-w-0 space-y-12">

            {/* ── How it works — 3 steps ── */}
            {steps.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">{stepsTitle || t(locale, 'layouts.common.howItWorks')}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {steps.map(({ icon, title, desc }, i) => (
                    <div key={title} className="bg-white border border-slate-200 rounded-2xl p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-7 h-7 rounded-full bg-slate-100 text-slate-500 text-xs font-semibold flex items-center justify-center">
                          {i + 1}
                        </div>
                        <span className="w-5 h-5 text-brand-600">{Icons[icon] || Icons.upload}</span>
                      </div>
                      <div className="font-semibold text-slate-900 mb-1.5">{title}</div>
                      <div className="text-sm text-slate-600 leading-snug">{desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ── Conversion preview mock ── */}
            {isConverter && previewInputName && (
              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-3">{t(locale, 'layouts.converter.previewTitle')}</h2>
                <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr_auto] items-center gap-4">
                    {/* Input */}
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-slate-100 text-slate-500 flex items-center justify-center">
                        <span className="w-5 h-5">{Icons.video}</span>
                      </span>
                      <div className="min-w-0">
                        <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">{t(locale, 'layouts.converter.inputLabel')}</div>
                        <div className="font-medium text-slate-800 text-sm truncate">{previewInputName}</div>
                        {previewInputSize && <div className="text-xs text-slate-500 truncate">{previewInputSize}</div>}
                      </div>
                    </div>

                    {/* Complete pill */}
                    <div className="inline-flex items-center gap-1.5 text-emerald-700 text-xs font-semibold bg-emerald-50 rounded-full px-3 py-1 justify-self-center">
                      <span className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-full bg-emerald-500 text-white">
                        <span className="w-2.5 h-2.5">{Icons.check}</span>
                      </span>
                      {t(locale, 'layouts.converter.complete')}
                    </div>

                    {/* Output */}
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center">
                        <span className="w-5 h-5">{Icons.fileAudio}</span>
                      </span>
                      <div className="min-w-0">
                        <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">{t(locale, 'layouts.converter.outputLabel')}</div>
                        <div className="font-medium text-slate-800 text-sm truncate">{previewOutputName}</div>
                        {previewOutputSize && <div className="text-xs text-slate-500 truncate">{previewOutputSize}</div>}
                      </div>
                    </div>

                    {/* Visual preview only — the real download appears after conversion. */}
                    <div className="inline-flex items-center gap-1.5 bg-brand-600 text-white rounded-lg px-3 py-2 text-xs font-semibold justify-self-end sm:justify-self-auto">
                      <span className="w-3.5 h-3.5">{Icons.download}</span>
                      {t(locale, 'layouts.common.download')} {to?.toUpperCase() || ''}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ── Why cards ── */}
            {whyCards.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">{whyTitle}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {whyCards.map(({ icon, title, desc }) => (
                    <div key={title} className="bg-white border border-slate-200 rounded-2xl p-4">
                      <div className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-brand-50 text-brand-600 mb-3">
                        <span className="w-5 h-5">{Icons[icon] || Icons.sparkles}</span>
                      </div>
                      <div className="font-semibold text-slate-900 mb-1.5 text-sm">{title}</div>
                      <div className="text-xs text-slate-600 leading-snug">{desc}</div>
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
                      <div className="text-[12px] font-semibold text-slate-800 leading-tight">{title}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ── Tips + What happens ── */}
            {(tips.length > 0 || processSteps.length > 0) && (
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

                {processSteps.length > 0 && (
                  <div>
                    <h2 className="text-lg font-bold text-slate-900 mb-4">{processTitle || t(locale, 'layouts.converter.whatHappensTitle')}</h2>
                    <div className="bg-white border border-slate-200 rounded-2xl p-5">
                      <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-2">
                        {processSteps.slice(0, 3).flatMap((s, i) => {
                          const stepIcon = i === 0 ? Icons.video : i === 1 ? Icons.waveform : Icons.fileAudio
                          const nodes = [
                            <div key={`s${i}`} className="text-center">
                              <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-slate-50 border border-slate-200 mb-2 text-brand-600">
                                <span className="w-5 h-5">{stepIcon}</span>
                              </div>
                              <div className="text-[11px] font-semibold text-slate-800 leading-tight">{s}</div>
                            </div>,
                          ]
                          if (i < 2) {
                            nodes.push(
                              <div key={`a${i}`} className="text-slate-300 flex justify-center">
                                <span className="w-4 h-4">{Icons.arrowRight}</span>
                              </div>
                            )
                          }
                          return nodes
                        })}
                      </div>
                      <p className="text-[11px] text-slate-500 text-center mt-4 leading-snug">
                        {isConverter
                          ? t(locale, 'layouts.converter.processCaption', { from: from?.toUpperCase() || '', to: to?.toUpperCase() || '' })
                          : t(locale, 'layouts.converter.processCaptionUpload')}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* ── X vs Y comparison ── */}
            {isConverter && compareRows.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">{compareTitle || `${from?.toUpperCase()} vs ${to?.toUpperCase()}`}</h2>
                <div className="bg-white border border-slate-200 rounded-2xl overflow-x-auto">
                  <table className="w-full text-sm min-w-[520px]">
                    <thead>
                      <tr className="border-b border-slate-100 bg-slate-50">
                        <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">{t(locale, 'layouts.converter.tableFileType')}</th>
                        <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">{t(locale, 'layouts.converter.tableContainsVideo')}</th>
                        <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">{t(locale, 'layouts.converter.tableSize')}</th>
                        <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">{t(locale, 'layouts.converter.tableBestUse')}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {compareRows.map((row) => (
                        <tr key={row.fmt}>
                          <td className="px-5 py-4 font-semibold text-slate-900">{row.fmt}</td>
                          <td className="px-5 py-4 text-slate-600">{row.contains}</td>
                          <td className="px-5 py-4 text-slate-600">{row.size}</td>
                          <td className="px-5 py-4 text-slate-600">{row.best}</td>
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
                <h2 className="text-2xl font-bold text-slate-900 mb-6">{t(locale, 'layouts.common.faq')}</h2>
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

            {/* ── Bottom CTA plate ── */}
            {ctaHeadline && (
              <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 py-7 px-6 md:px-10 text-center md:text-left">
                  <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center flex-shrink-0">
                    <span className="w-6 h-6">{Icons.upload}</span>
                  </div>
                  <div className="min-w-0 flex-1 max-w-lg">
                    <div className="font-bold text-slate-900 text-lg leading-tight">{ctaHeadline}</div>
                    {ctaSubtitle && <div className="text-sm text-slate-500 mt-1">{ctaSubtitle}</div>}
                  </div>
                  <Link
                    href="#tool"
                    className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm px-5 py-3 rounded-xl transition-all flex-shrink-0"
                  >
                    <span>{ctaButton || t(locale, 'layouts.converter.defaultCtaButton')}</span>
                  </Link>
                </div>
              </div>
            )}

            {/* ── More conversion tools — inline links ── */}
            {moreTools.length > 0 && (
              <div>
                <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">{t(locale, 'layouts.converter.moreToolsTitle')}</h2>
                <div className="flex flex-wrap gap-x-5 gap-y-2">
                  {moreTools.map(({ href, label }) => (
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
              </div>
            )}
          </div>

          {/* ── RIGHT: sticky sidebar ── */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <div className="text-xs font-semibold text-amber-700 uppercase tracking-wide mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                {t(locale, 'layouts.converter.sidebarLabel')}
              </div>
              <nav className="space-y-1">
                {TOOLS_NAV.map((item) => {
                  const href = (locale === 'en' ? '' : `/${locale}`) + '/' + item.slug
                  const isCurrent = ('/' + item.slug) === currentHref || href === currentHref
                  const label = t(locale, `layouts.converter.nav.${item.slug}`)
                  return (
                    <Link
                      key={item.slug}
                      href={href}
                      className={
                        'group flex items-start gap-2.5 rounded-lg px-3 py-2 text-sm transition-colors ' +
                        (isCurrent
                          ? 'bg-amber-50 text-amber-900 font-semibold border border-amber-200 shadow-sm'
                          : 'text-slate-500 hover:text-slate-800 hover:bg-white/60')
                      }
                    >
                      <span className={'w-4 h-4 mt-0.5 flex-shrink-0 ' + (isCurrent ? 'text-amber-600' : 'text-slate-400')}>
                        {Icons[item.icon] || Icons.file}
                      </span>
                      <span className="leading-tight">{label}</span>
                    </Link>
                  )
                })}
              </nav>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
