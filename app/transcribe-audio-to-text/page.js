// /transcribe-audio-to-text — umbrella "any audio format" landing.
//
// Rebuilt from LandingLayout into a custom long-form page following the
// mockup provided by the user. Reuses shared HeroChips + HeroCounter +
// UploadZone in the hero so the top of the page matches every other
// landing on the site, then diverges into format-specific sections that
// don't fit the generic LandingLayout template:
//
//   1. Hero + tinted upload (shared HeroChips + HeroCounter)
//   2. "Every common audio format, one upload" — 7 format cards
//   3. "How it works" — 3 steps + live transcript preview (same JSX
//      mockup as the homepage)
//   4. "Why one audio-to-text tool is better" — 4 benefit cards
//   5. "When this page is the right fit" — 6 scenario cards
//   6. "Audio quality matters more than file format" — 3 quality tiers
//   7. "How Mictoo detects your format" — magic-bytes explanation
//   8. "Supported audio formats" — 4-column table
//   9. FAQ (1 column, per user request)
//  10. Bottom CTA plate
//  11. More transcription tools — 4 cards
//
// Adapted to real mictoo:
//   - File caps: 25 MB anon / 60 MB signed-in / 180 MB auto-split
//   - Whisper large-v3 via Groq (Replicate/Deepgram/OpenAI fallback)
//   - 50+ languages, AI summary, Translate, Chat with transcript
//
// Localization: EN only for now. Other 9 locales still use the old
// LandingLayout-based /transcribe-audio-to-text; port later.

import Link from 'next/link'
import UploadZone from '@/components/UploadZone'
import HeroChips from '@/components/HeroChips'
import HeroCounter from '@/components/HeroCounter'

// ── Page-level metadata & canonical ─────────────────────────────────────────
export const metadata = {
  title: 'Audio to Text: Free Online Transcription for Any Audio Format | Mictoo',
  description:
    'One page for any audio format. Drop MP3, M4A, WAV, FLAC, OGG, AAC, WebM and more. Get a clean transcript with timestamps, AI summary, and exports for TXT, SRT, VTT, and DOCX.',
  alternates: {
    canonical: 'https://mictoo.com/transcribe-audio-to-text',
    languages: {
      'en': 'https://mictoo.com/transcribe-audio-to-text',
      'fr': 'https://mictoo.com/fr/transcribe-audio-to-text',
      'de': 'https://mictoo.com/de/transcribe-audio-to-text',
      'es': 'https://mictoo.com/es/transcribe-audio-to-text',
      'ru': 'https://mictoo.com/ru/transcribe-audio-to-text',
      'it': 'https://mictoo.com/it/transcribe-audio-to-text',
      'pt': 'https://mictoo.com/pt/transcribe-audio-to-text',
      'pl': 'https://mictoo.com/pl/transcribe-audio-to-text',
      'ja': 'https://mictoo.com/ja/transcribe-audio-to-text',
      'ko': 'https://mictoo.com/ko/transcribe-audio-to-text',
      'x-default': 'https://mictoo.com/transcribe-audio-to-text',
    },
  },
  openGraph: {
    title: 'Audio to Text: Free Online Transcription | Mictoo',
    description: 'Drop any audio file (MP3, M4A, WAV, FLAC, OGG, AAC, WebM) and get a transcript. Free, no signup.',
    url: 'https://mictoo.com/transcribe-audio-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Audio to Text: Free Online Transcription',
    description: 'Drop any audio file, get a transcript. Free, no signup.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

// ── FAQ data (drives both UI and JSON-LD schema) ─────────────────────────────
const FAQ = [
  {
    q: 'What audio formats can I upload?',
    a: 'MP3, M4A, WAV, FLAC, OGG, AAC, WebM, MP4, MOV, plus AIFF, AU, OPUS, and MPEG. If your file plays in a normal media player, Mictoo can transcribe it. Video files are accepted too, we extract the audio track server-side.',
  },
  {
    q: 'How long does transcription take?',
    a: 'Usually seconds. A 10-minute audio file finishes in around 15 to 30 seconds; a 60-minute podcast is done in about a minute. Longer files that get auto-split take slightly longer as chunks are transcribed in parallel and merged.',
  },
  {
    q: 'Is audio transcription really free?',
    a: 'Yes. Free transcription up to 25 MB per file with no signup. A free account raises the per-file limit to 60 MB, and files up to 180 MB are auto-split into chunks and merged into a single transcript. No credit card, no hidden fees.',
  },
  {
    q: 'Are my audio files stored?',
    a: 'No. Files are streamed directly to the speech recognition provider (Groq for speed, with Replicate, Deepgram, and OpenAI as fallback), processed, and then deleted. Mictoo does not retain audio and providers do not train on API data.',
  },
  {
    q: 'Does file format affect accuracy?',
    a: 'Audio quality matters far more than format. Clean speech in a compressed MP3 will transcribe better than noisy audio in an uncompressed WAV. Mictoo runs the same Whisper large-v3 model on every format so accuracy stays consistent across all supported types.',
  },
  {
    q: 'Do I need to convert my audio to a specific format first?',
    a: 'No. That is the whole point of this page. Upload whatever your recorder, DAW, phone, or download tool produced. We detect the format from the file header and route it to Whisper directly. No converter step, no quality loss.',
  },
  {
    q: 'Can I edit the transcript before downloading?',
    a: 'Yes. After transcription, switch to the Editor view to fix any wrong names or jargon. Both Reader (per-line timestamps) and Editor (plain text) modes are available. Exports use whichever version you last edited.',
  },
  {
    q: 'How many languages does the transcription support?',
    a: 'Over 50 languages including English, Spanish, French, German, Portuguese, Russian, Ukrainian, Japanese, Chinese, Arabic, and many more. Auto-detect works for most files, or you can pick the language manually in the upload form for short clips.',
  },
  {
    q: 'Can I translate the transcript?',
    a: 'Yes. After transcription, click Translate and pick from 28 target languages. The translation is available in the Reader view and in every export format. Timestamps are preserved so the translated SRT still matches the audio.',
  },
  {
    q: 'What export formats are available?',
    a: 'TXT (plain text), SRT (subtitles), timestamped TXT, and DOCX (Word document). Registered users also get PDF, VTT (web captions), and JSON. All exports available from the Download menu after transcription finishes.',
  },
]

// ── JSON-LD schemas ──────────────────────────────────────────────────────────
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}

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
}

// Small waveform strip used inside the audio-quality cards. `pattern` controls
// bar-height distribution: 'clean' = rolling voice-like, 'noisy' = spiky,
// 'compressed' = mostly flat.
function WaveStrip({ pattern = 'clean', colorClass = 'bg-emerald-400' }) {
  const bars = Array.from({ length: 42 }).map((_, i) => {
    if (pattern === 'clean') return 4 + Math.round(10 + 6 * Math.sin(i / 2) + 4 * Math.cos(i / 3.5))
    if (pattern === 'noisy') return 3 + ((i * 13) % 20) + ((i * 7) % 6)
    return 3 + ((i * 5) % 6) // compressed — flat
  })
  return (
    <div className="flex items-center gap-0.5 h-8">
      {bars.map((h, i) => (
        <div key={i} className={'w-0.5 rounded-sm ' + colorClass} style={{ height: h + 'px' }} />
      ))}
    </div>
  )
}

function Eyebrow({ children }) {
  return (
    <span className="inline-block bg-brand-50 text-brand-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
      {children}
    </span>
  )
}

// ── Page component ──────────────────────────────────────────────────────────
export default function TranscribeAudioToTextPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ────────────────── HERO + UPLOAD ────────────────── */}
      <section className="bg-gradient-to-b from-brand-50/40 via-slate-100/60 to-slate-100 pt-16 pb-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Eyebrow>Any audio format · Free · No signup</Eyebrow>
          <h1 className="mt-5 text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
            Audio to Text{' '}
            <br />
            <span className="text-brand-600">One page for any audio format</span>
          </h1>
          <p className="mt-5 text-lg text-slate-600 max-w-2xl mx-auto">
            Drop MP3, M4A, WAV, FLAC, OGG, AAC, WebM and more. Get a clean transcript with timestamps, AI summary, and exports.
          </p>

          <div className="mt-6 mb-5">
            <HeroChips />
          </div>

          <HeroCounter />
        </div>

        <div id="tool" className="max-w-2xl mx-auto mt-10 scroll-mt-20">
          <UploadZone />
        </div>
      </section>

      {/* ────────────────── FORMAT GRID ────────────────── */}
      <section className="bg-white py-16 px-4 border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Every common audio format, one upload</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {[
              { name: 'MP3',  ext: '.mp3',  href: '/transcribe-mp3-to-text' },
              { name: 'M4A',  ext: '.m4a',  href: '/m4a-to-text' },
              { name: 'WAV',  ext: '.wav',  href: '/wav-to-text' },
              { name: 'FLAC', ext: '.flac', href: '/flac-to-text' },
              { name: 'OGG',  ext: '.ogg',  href: '/ogg-to-text' },
              { name: 'AAC',  ext: '.aac',  href: '/aac-to-text' },
              { name: 'WebM', ext: '.webm', href: '/webm-to-text' },
            ].map(({ name, ext, href }) => (
              <Link
                key={name}
                href={href}
                className="bg-white border border-slate-200 rounded-2xl p-4 text-center hover:border-brand-400 hover:shadow-sm transition-all group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-50 text-brand-600 mb-3 group-hover:bg-brand-100 transition-colors">
                  <span className="w-6 h-6">{Icons.file}</span>
                </div>
                <div className="text-sm font-bold text-slate-900 leading-tight">{name}</div>
                <div className="text-[11px] text-slate-400 mt-0.5">{ext}</div>
              </Link>
            ))}
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
                {
                  step: 1, icon: Icons.upload,
                  title: 'Drop any audio file',
                  desc: 'Upload from your device or drag and drop. MP3, M4A, WAV, FLAC, OGG, AAC, WebM, and more.',
                },
                {
                  step: 2, icon: Icons.waveform,
                  title: 'Whisper transcribes the audio',
                  desc: 'Whisper large-v3 runs on our backend with automatic punctuation, paragraph breaks, and per-segment timestamps.',
                },
                {
                  step: 3, icon: Icons.editPen,
                  title: 'Edit, export, share',
                  desc: 'Review the transcript, summarize with AI, translate to 50+ languages, and export as TXT, DOCX, PDF, or SRT.',
                },
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

            {/* Live preview mockup — matches the real transcript-view block
                (Wave 3 header, Reader/Editor toggle, native-style audio
                player, search input, per-line timestamped list, footer
                hint). Static English content so it makes sense as a
                marketing demo. lg:-mt-[72px] pulls the mockup up so its
                top edge aligns with the H2 baseline on desktop, matching
                the same treatment the homepage uses. */}
            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden lg:-mt-[72px]">
              {/* Header — file icon + name + Completed + word count | Translate | Download | New file */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-100 gap-3 flex-wrap">
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center">
                    <span className="w-4 h-4">{Icons.file}</span>
                  </span>
                  <div className="min-w-0">
                    <div className="font-semibold text-slate-800 text-sm truncate">interview-notes.mp3</div>
                    <div className="text-[11px] text-slate-400 mt-0.5 flex items-center gap-1.5">
                      <span className="inline-flex items-center gap-1 text-emerald-600 font-medium">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        Completed
                      </span>
                      <span className="text-slate-300">·</span>
                      <span>180 words</span>
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

              {/* Tabs */}
              <div className="flex items-center gap-4 px-5 pt-3 text-xs border-b border-slate-100">
                <button className="pb-2.5 font-semibold text-brand-700 border-b-2 border-brand-600">Transcript</button>
                <button className="pb-2.5 text-slate-500">AI Summary</button>
                <button className="pb-2.5 text-slate-500">Chat</button>
              </div>

              {/* Reader / Editor toggle */}
              <div className="px-5 pt-4">
                <div className="inline-flex items-center gap-0 bg-slate-100 rounded-lg p-0.5 text-xs">
                  <button className="px-3 py-1 rounded-md bg-white text-slate-800 shadow-sm font-medium">Reader</button>
                  <button className="px-3 py-1 rounded-md text-slate-500">Editor</button>
                </div>
              </div>

              {/* Native-style audio player mock */}
              <div className="px-5 pt-3">
                <div className="flex items-center gap-3 bg-slate-100 rounded-full px-3 py-2 text-slate-600 text-xs">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                  <span className="font-mono">0:00 / 1:39</span>
                  <div className="flex-1 h-1 rounded-full bg-slate-300/70 relative">
                    <div className="absolute inset-y-0 left-0 w-0 bg-brand-500 rounded-full" />
                  </div>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.5 4.5 0 0 0 2.5-4z" /></svg>
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="5" r="1.5" /><circle cx="12" cy="12" r="1.5" /><circle cx="12" cy="19" r="1.5" /></svg>
                </div>
              </div>

              {/* Search transcript input */}
              <div className="px-5 pt-3">
                <div className="relative">
                  <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <circle cx="11" cy="11" r="7" /><path d="M21 21l-4.35-4.35" />
                  </svg>
                  <div className="text-xs text-slate-400 border border-slate-200 rounded-lg pl-8 pr-3 py-2 bg-white">Search transcript…</div>
                </div>
              </div>

              {/* Per-line timestamped list */}
              <div className="px-5 pt-3">
                <div className="border border-slate-200 rounded-xl overflow-hidden divide-y divide-slate-100 bg-white">
                  {[
                    { t: '0:00',  line: 'Hi, thanks for making time today. Let us start simple.' },
                    { t: '0:07',  line: 'I started making short films back in college as a hobby.' },
                    { t: '0:15',  line: 'What draws you to a story before you commit to it?' },
                    { t: '0:24',  line: 'Real people, real moments. I observe first, script later.' },
                    { t: '0:34',  line: 'How do you keep the crew energy up on long shoots?' },
                    { t: '0:42',  line: 'Small rituals. Coffee at call time, a walk before magic hour.' },
                    { t: '0:54',  line: 'What advice would you give someone starting out?' },
                    { t: '1:02',  line: 'Watch a lot. Then shoot even more. Nothing beats reps.' },
                  ].map((row, i) => (
                    <div key={i} className="grid grid-cols-[auto_1fr] gap-4 px-4 py-2.5 items-start text-sm hover:bg-slate-50">
                      <span className="font-mono text-xs text-brand-600 font-semibold pt-0.5 whitespace-nowrap">{row.t}</span>
                      <span className="text-slate-700 leading-snug">{row.line}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer hint */}
              <p className="text-[11px] text-slate-400 px-5 py-3">
                Cleaner per-line layout with timestamps. Best for reading.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────── WHY ONE AUDIO-TO-TEXT TOOL ────────────────── */}
      <section className="bg-white py-16 px-4 border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Why one audio-to-text tool is better</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: Icons.cloud,
                title: 'No convert-first step',
                desc: 'Upload any audio format directly. Save time and keep your original quality, no lossy round-trip through a converter.',
              },
              {
                icon: Icons.gear,
                title: 'Automatic format detection',
                desc: 'Mictoo detects the format from the file header and applies the best transcription settings for that codec.',
              },
              {
                icon: Icons.target,
                title: 'Same accuracy across formats',
                desc: 'Powered by Whisper large-v3 for consistent accuracy whether your file is MP3, WAV, FLAC, or WebM.',
              },
              {
                icon: Icons.sparkles,
                title: 'Summary and exports included',
                desc: 'Get AI summaries, translate to 50+ languages, and export as TXT, SRT, VTT, or DOCX. No add-on plans.',
              },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-white border border-slate-200 rounded-2xl p-5">
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-brand-50 text-brand-600 mb-4">
                  <span className="w-6 h-6">{icon}</span>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────── WHEN THIS PAGE IS THE RIGHT FIT ────────────────── */}
      <section className="bg-white py-16 px-4 border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">When this page is the right fit</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: Icons.layers,  title: 'Mixed-format archives', desc: 'One upload for all your files, whatever they were recorded on.' },
              { icon: Icons.search,  title: 'Unknown file format',   desc: 'Not sure what your recorder produced. We detect it and transcribe it.' },
              { icon: Icons.bolt,    title: 'Quick transcription',   desc: 'Fast results without setup, converters, or manual format picking.' },
              { icon: Icons.clip,    title: 'Cross-tool workflows',  desc: 'Drop files exported from Zoom, Descript, Audacity, GarageBand, or any DAW.' },
              { icon: Icons.users,   title: 'First-time users',      desc: 'No signup, simple UI, free. A safe first try before committing to any tool.' },
              { icon: Icons.ear,     title: 'Audio quality testing', desc: 'Check clarity and see how much usable text you can get from a rough recording.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-brand-400 hover:shadow-sm transition-all">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-brand-50 text-brand-600 mb-3">
                  <span className="w-5 h-5">{icon}</span>
                </div>
                <h3 className="font-semibold text-slate-900 mb-1.5">{title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────── AUDIO QUALITY + FORMAT DETECTION ────────────────── */}
      <section className="bg-slate-50 py-16 px-4 border-b border-slate-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          {/* Quality tiers */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Audio quality matters more than file format</h2>
            <div className="space-y-3">
              {[
                { icon: Icons.check,   iconClass: 'bg-emerald-100 text-emerald-600', title: 'Clear speech',      desc: 'Clean audio with minimal background noise delivers the most accurate transcripts.', waveClass: 'bg-emerald-400', pattern: 'clean' },
                { icon: Icons.warn,    iconClass: 'bg-amber-100 text-amber-600',     title: 'Noisy audio',       desc: 'Background noise or overlap can reduce accuracy, no matter the format.',           waveClass: 'bg-amber-400',   pattern: 'noisy' },
                { icon: Icons.xCircle, iconClass: 'bg-rose-100 text-rose-600',       title: 'Compressed audio',  desc: 'Very low bitrates or heavy compression may remove important details.',             waveClass: 'bg-rose-300',    pattern: 'compressed' },
              ].map(({ icon, iconClass, title, desc, waveClass, pattern }) => (
                <div key={title} className="bg-white border border-slate-200 rounded-2xl p-4 flex items-center gap-4">
                  <div className={'flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ' + iconClass}>
                    <span className="w-5 h-5">{icon}</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-semibold text-slate-900 text-sm">{title}</div>
                    <div className="text-xs text-slate-500 leading-snug mt-0.5">{desc}</div>
                  </div>
                  <div className="hidden sm:block flex-shrink-0">
                    <WaveStrip pattern={pattern} colorClass={waveClass} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Format detection */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">How Mictoo detects your format</h2>
            <div className="bg-white border border-slate-200 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center font-mono text-[10px] font-bold leading-tight text-center">
                  1010<br />1010
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We read the file header (magic bytes) to identify your format instantly. This ensures the best settings for accurate transcription and means you never need to pick the format manually.
                </p>
              </div>

              <div className="mt-6">
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">Examples</div>
                <div className="flex flex-wrap gap-2">
                  {[
                    ['ID3',   'MP3'],
                    ['ftyp',  'M4A'],
                    ['RIFF',  'WAV'],
                    ['fLaC',  'FLAC'],
                    ['OggS',  'OGG'],
                    ['ADTS',  'AAC'],
                    ['EBML',  'WebM'],
                  ].map(([bytes, fmt]) => (
                    <div key={fmt} className="inline-flex items-center gap-1.5 bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs">
                      <span className="font-mono text-brand-700 font-semibold">{bytes}</span>
                      <span className="text-slate-400">·</span>
                      <span className="text-slate-600 font-medium">{fmt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────── SUPPORTED FORMATS TABLE ────────────────── */}
      <section className="bg-white py-16 px-4 border-b border-slate-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Supported audio formats</h2>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-x-auto">
            <table className="w-full text-sm min-w-[720px]">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50">
                  <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Format</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Common source</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Best for</th>
                  <th className="text-center px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Direct upload</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  ['MP3',  'Recorders, podcasts, downloads',  'General use, small files'],
                  ['M4A',  'iPhone Voice Memos, Apple apps',  'High quality, efficient size'],
                  ['WAV',  'Recordings, DAW exports',         'Uncompressed, pro audio'],
                  ['FLAC', 'Music archives, high fidelity',   'Lossless quality'],
                  ['OGG',  'Open source recordings, apps',    'Web and streaming'],
                  ['AAC',  'Mobile recordings, streaming',    'Balanced quality and size'],
                  ['WebM', 'Web recordings, browsers',        'Online video and audio'],
                ].map(([fmt, source, best]) => (
                  <tr key={fmt} className="hover:bg-slate-50">
                    <td className="px-5 py-4 font-semibold text-slate-900">{fmt}</td>
                    <td className="px-5 py-4 text-slate-600">{source}</td>
                    <td className="px-5 py-4 text-slate-600">{best}</td>
                    <td className="px-5 py-4 text-center">
                      <span className="inline-flex items-center justify-center w-5 h-5 text-brand-600">
                        {Icons.check}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ────────────────── FAQ (1 column) ────────────────── */}
      <section id="faq" className="bg-slate-50 py-16 px-4 border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-10 text-center">Frequently asked questions</h2>
          <div className="space-y-3">
            {FAQ.map(({ q, a }, i) => (
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
                Drop any audio file and get the text
              </div>
              <div className="text-sm text-white/85 mt-1.5">
                Free. No signup. No limits on format.
              </div>
              <div className="mt-3 flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-1 text-[11px] text-white/80">
                <span className="inline-flex items-center gap-1"><span className="w-3 h-3">{Icons.check}</span> Any format</span>
                <span className="inline-flex items-center gap-1"><span className="w-3 h-3">{Icons.check}</span> No signup</span>
                <span className="inline-flex items-center gap-1"><span className="w-3 h-3">{Icons.check}</span> 50+ languages</span>
              </div>
            </div>
            <Link
              href="#tool"
              className="inline-flex items-center gap-2 bg-white text-brand-700 font-bold text-sm md:text-base px-6 py-3.5 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex-shrink-0 group"
            >
              <span>Upload audio to transcribe</span>
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
            { href: '/transcribe-mp3-to-text',   icon: Icons.music, title: 'MP3 to Text',        desc: 'Transcribe MP3 files to text instantly.' },
            { href: '/transcribe-video-to-text', icon: Icons.video, title: 'Video to Text',      desc: 'Extract text from any video.' },
            { href: '/youtube-to-text',          icon: Icons.video, title: 'YouTube to Text',    desc: 'Transcribe YouTube videos.' },
            { href: '/free-srt-generator',       icon: Icons.file,  title: 'Free SRT Generator', desc: 'Create accurate SRT subtitles online.' },
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
