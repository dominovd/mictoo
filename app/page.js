// Mictoo homepage (EN).
//
// Redesigned from a functional single-column layout into a modern SaaS
// homepage with a tool grid, live result preview, audience segmentation,
// comparison table, and a bottom CTA plate. Adapted from the provided
// mockup with the following deliberate changes:
//   - brand palette (brand-blue) instead of the mockup's default blue
//   - existing SiteHeader / SiteFooter / logo kept (rendered by layout.js)
//   - existing UploadZone kept in full (no functionality simplified)
//   - flat nav in the header (no mega-menu) — SiteHeader unchanged
//   - long FAQ (10 questions) preserved for SEO / AI citation
//   - "live preview" is static JSX with brand colors, not a live component
//     (upgrade path: swap for a typing-animation later if needed)
//
// Locale coverage: EN only for now. fr/de/es/ru/it/pt/pl/ja/ko homes still
// use the previous layout; they will be ported via scripts/translate-page.mjs
// once we validate this one in prod.

import Image from 'next/image'
import UploadZone from '@/components/UploadZone'
import HeroCounter from '@/components/HeroCounter'

// ── Page-level metadata & canonical ─────────────────────────────────────────
export const metadata = {
  alternates: {
    canonical: 'https://mictoo.com',
    languages: {
      'en': 'https://mictoo.com',
      'fr': 'https://mictoo.com/fr',
      'de': 'https://mictoo.com/de',
      'es': 'https://mictoo.com/es',
      'ru': 'https://mictoo.com/ru',
      'it': 'https://mictoo.com/it',
      'pt': 'https://mictoo.com/pt',
      'pl': 'https://mictoo.com/pl',
      'ja': 'https://mictoo.com/ja',
      'ko': 'https://mictoo.com/ko',
      'x-default': 'https://mictoo.com',
    },
  },
}

// ── FAQ data (shared between UI and JSON-LD) ─────────────────────────────────
const FAQ = [
  {
    q: 'Is Mictoo really free?',
    a: 'Yes. Mictoo is completely free for files up to 25 MB. No account, no credit card, no hidden fees. Signed-in users get a higher 60 MB per-file limit and 7 free transcriptions per day, still with no payment required.',
  },
  {
    q: 'How accurate is the transcription?',
    a: "Mictoo uses OpenAI's Whisper large-v3, one of the most accurate open speech recognition models available. Accuracy depends on audio quality and accent, but typically exceeds 95% for clear recordings.",
  },
  {
    q: 'What languages are supported?',
    a: "Whisper supports over 50 languages including English, Spanish, French, German, Portuguese, Russian, Ukrainian, Japanese, Chinese, Arabic, and more. Language is detected automatically, or you can pick one manually in the upload form.",
  },
  {
    q: 'Is my file stored on your servers?',
    a: "No. Files are streamed directly to Groq's Whisper API (US-hosted) for transcription, with OpenAI's Whisper API kept as an automatic fallback, and are not stored on Mictoo's servers. Neither provider uses API audio for model training; OpenAI retains data for at most 30 days of abuse monitoring before deletion.",
  },
  {
    q: 'What is the maximum file size?',
    a: 'Up to 25 MB anonymously, 60 MB after a free sign-in. Larger files up to 180 MB are auto-split into chunks and merged into a single transcript for registered users.',
  },
  {
    q: 'What file formats does Mictoo support?',
    a: 'Mictoo supports MP3, MP4, WAV, M4A, OGG, WEBM, FLAC, AAC, MOV, and MPEG. Both audio and video files are accepted; for video we extract the audio track server-side.',
  },
  {
    q: 'How long does transcription take?',
    a: 'Most files finish in seconds. A 10-minute audio file typically takes 15 to 30 seconds; a 60-minute podcast is done in about a minute.',
  },
  {
    q: 'Can I edit the transcript after it is generated?',
    a: 'Yes. The transcript is fully editable in your browser before you copy or download it. No account is needed to save changes to your local session.',
  },
  {
    q: 'Do I need to create an account?',
    a: 'No. For files up to 25 MB, you can transcribe without an account. A free account unlocks larger files (up to 60 MB per file, 180 MB via auto-split), history, AI summary, translation to 28 languages, and chat with your transcript.',
  },
  {
    q: 'What technology powers Mictoo?',
    a: "Mictoo is built on OpenAI's Whisper large-v3 model, served by Groq for speed with OpenAI as fallback. It is the same speech recognition model that powers ChatGPT's voice features and many professional caption services.",
  },
]

// ── JSON-LD schemas ──────────────────────────────────────────────────────────
const webAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Mictoo',
  url: 'https://mictoo.com',
  description:
    'Free online audio and video transcription tool powered by OpenAI Whisper. No signup required. Supports 50+ languages.',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Web',
  browserRequirements: 'Requires a modern browser with JavaScript enabled.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  featureList: [
    'Transcribe audio to text',
    'Transcribe video to text',
    'Supports 50+ languages',
    'No account required',
    'Free to use',
    'AI-generated summary of the transcript',
    'Translate the transcript to 28 languages',
    'Chat with the transcript',
    'Supports MP3, MP4, WAV, M4A, OGG, WEBM, FLAC, AAC',
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}

// ── Small reusable pieces ────────────────────────────────────────────────────

// Trust chip: icon + short label, sits in the hero under the H1.
function TrustChip({ icon, label }) {
  return (
    <div className="inline-flex items-center gap-1.5 text-slate-600 text-sm">
      <span className="w-5 h-5 text-brand-600 flex-shrink-0">{icon}</span>
      <span>{label}</span>
    </div>
  )
}

// SVG icon set used in Trust chips + tool grid + benefit cards + audience row.
// All outline style, 24x24 viewBox, currentColor stroke — inherits color from
// the parent `text-brand-*` class.
const Icons = {
  gift: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7M12 7H7.5a2.5 2.5 0 1 1 0-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 1 0 0-5C13 2 12 7 12 7z" /></svg>
  ),
  shield: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M12 2l9 4v6c0 5-3.9 9.5-9 10-5.1-.5-9-5-9-10V6z" /></svg>
  ),
  globe: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2c2.5 3 4 6.5 4 10s-1.5 7-4 10c-2.5-3-4-6.5-4-10s1.5-7 4-10z" /></svg>
  ),
  sparkles: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5zM19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8z" /></svg>
  ),
  trending: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M3 17l6-6 4 4 8-8" /><path d="M17 7h4v4" /></svg>
  ),
  music: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M9 18V5l10-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="16" cy="16" r="3" /></svg>
  ),
  video: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><rect x="2" y="6" width="14" height="12" rx="2" /><path d="M22 8l-6 4 6 4z" /></svg>
  ),
  waveform: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M3 12h2M19 12h2M7 8v8M11 5v14M15 8v8" /></svg>
  ),
  users: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>
  ),
  mic: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><rect x="9" y="2" width="6" height="12" rx="3" /><path d="M5 10v2a7 7 0 0 0 14 0v-2M12 19v3M8 22h8" /></svg>
  ),
  editPen: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4z" /></svg>
  ),
  target: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>
  ),
  bolt: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M13 2L3 14h7l-1 8 10-12h-7z" /></svg>
  ),
  lock: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>
  ),
  cap: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M2 9l10-5 10 5-10 5L2 9z" /><path d="M6 11v4c0 1.5 2.7 3 6 3s6-1.5 6-3v-4M22 9v5" /></svg>
  ),
  newspaper: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M4 4h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4z" /><path d="M20 8h2v10a2 2 0 0 1-2 2" /><path d="M8 8h6M8 12h6M8 16h6" /></svg>
  ),
  briefcase: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><path d="M3 12h18" /></svg>
  ),
  check: (
    <svg fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg>
  ),
  upload: (
    <svg fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path d="M12 3v14m-5-5l5-5 5 5" /><path d="M4 21h16" /></svg>
  ),
  arrowRight: (
    <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M5 12h14m-6-6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" /></svg>
  ),
}

// ── Page component ───────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ────────────────── HERO + UPLOAD ──────────────────
        Single continuous section so the subtle background gradient wraps
        from the H1 all the way down through the Language selector and
        drop zone. Before this change the Language selector was floating
        on plain white with the gray background starting only below it —
        felt disconnected. Now everything sits inside one soft-slate
        container and the white drop-zone card stands out cleanly against
        the surrounding tone.
      */}
      <section className="bg-gradient-to-b from-brand-50/40 via-slate-100/60 to-slate-100 pt-16 pb-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block bg-brand-50 text-brand-700 text-xs font-semibold px-3 py-1 rounded-full mb-5 uppercase tracking-wide">
            Free AI transcription · No signup
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-5 leading-tight">
            Free AI Audio &amp; Video<br />
            Transcription to Text
          </h1>
          <p className="text-lg text-slate-600 mb-7 max-w-2xl mx-auto">
            Accurate transcripts in seconds. Upload MP3, MP4, WAV, and more. No account required.
          </p>

          {/* Trust chips */}
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 mb-5">
            <TrustChip icon={Icons.gift}     label="Free" />
            <TrustChip icon={Icons.shield}   label="Private" />
            <TrustChip icon={Icons.globe}    label="50+ languages" />
            <TrustChip icon={Icons.sparkles} label="AI summary" />
          </div>

          {/* Live counter from /api/stats (Supabase transcripts table).
              Rounded down to the nearest 500 with a + suffix, so it reads
              as a milestone rather than an exact number. Hides itself if
              the API is down or the count is below the visibility
              threshold. See components/HeroCounter.js. */}
          <HeroCounter />
        </div>

        {/* Upload tool sits inside the same section so the background
            wraps the Language selector too. */}
        <div id="tool" className="max-w-2xl mx-auto mt-10 scroll-mt-20">
          <UploadZone />
        </div>
      </section>

      {/* ────────────────── TOOL GRID ──────────────────
        Wrapped in the same slate-100 tint as the hero + upload section
        above so the top of the page reads as one cohesive intro block
        (hero + upload + "here are all the tools we have"). The seam
        against the following "How Mictoo works" section (bg-white) is
        where the intro area ends and the deeper content begins.
      */}
      <section className="bg-slate-100 border-b border-slate-200 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Convert any file to text</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { href: '/transcribe-mp3-to-text',   label: 'MP3 to Text',        icon: Icons.music },
              { href: '/transcribe-video-to-text', label: 'Video to Text',      icon: Icons.video },
              { href: '/wav-to-text',              label: 'WAV to Text',        icon: Icons.waveform },
              { href: '/meeting-transcription',    label: 'Meeting Transcription', icon: Icons.users },
              { href: '/podcast-transcription',    label: 'Podcast Transcription', icon: Icons.mic },
              { href: '/voice-memo-to-text',       label: 'Voice Memo to Text', icon: Icons.editPen },
            ].map(({ href, label, icon }) => (
              <a
                key={href}
                href={href}
                className="bg-white border border-slate-200 rounded-2xl p-4 text-center hover:border-brand-400 hover:shadow-sm transition-all group"
              >
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-brand-50 text-brand-600 mb-3 group-hover:bg-brand-100 transition-colors">
                  <span className="w-6 h-6">{icon}</span>
                </div>
                <div className="text-sm font-semibold text-slate-800 leading-tight">{label}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────── HOW MICTOO WORKS ────────────────── */}
      <section id="how-it-works" className="bg-white border-y border-slate-100 py-16 px-4 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-10">How Mictoo works</h2>

          <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] gap-10 items-start">
            {/* 3 steps */}
            <ol className="space-y-8">
              {[
                {
                  step: 1,
                  icon: Icons.upload,
                  title: 'Upload your file',
                  desc: 'Drag and drop or choose an audio or video file. MP3, MP4, WAV, M4A, and more.',
                },
                {
                  step: 2,
                  icon: Icons.sparkles,
                  title: 'AI transcribes',
                  desc: 'Whisper large-v3 converts speech to text with high accuracy and automatic punctuation.',
                },
                {
                  step: 3,
                  icon: Icons.editPen,
                  title: 'Review and export',
                  desc: 'Edit, summarize, translate, and download your transcript as TXT, DOCX, PDF, or SRT.',
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

            {/* Product result preview */}
            <Image
              src="/how-mictoo-works-interview.webp"
              alt="Mictoo transcript workspace showing an English transcript with timestamps and translation controls"
              width={1127}
              height={1395}
              sizes="(max-width: 1024px) 100vw, 512px"
              className="w-full max-w-lg h-auto justify-self-center lg:-mt-[72px] rounded-2xl border border-slate-200 shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* ────────────────── WHY CHOOSE MICTOO ────────────────── */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">Why choose Mictoo?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              icon: Icons.target,
              title: 'High accuracy',
              desc: 'Whisper large-v3 delivers accurate transcripts even with accents and background noise.',
            },
            {
              icon: Icons.bolt,
              title: 'Fast results',
              desc: 'Get transcripts in seconds, not hours. A 30-minute file usually finishes in about a minute.',
            },
            {
              icon: Icons.lock,
              title: 'Private by design',
              desc: 'Files are processed securely and are never stored on our servers. No training on your audio.',
            },
            {
              icon: Icons.globe,
              title: '50+ languages',
              desc: 'Transcribe and translate in over 50 languages. Auto-detect or pick your language.',
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
      </section>

      {/* ────────────────── BUILT FOR EVERY VOICE ────────────────── */}
      <section className="bg-white border-y border-slate-100 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Built for every voice</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {[
              {
                href: '/lecture-transcription',
                icon: Icons.cap,
                label: 'Students',
                desc: 'Transcribe lectures and study materials. Focus on learning.',
              },
              {
                href: '/podcast-transcription',
                icon: Icons.mic,
                label: 'Podcasters',
                desc: 'Turn episodes into show notes, blogs, and social content.',
              },
              {
                href: '/interview-transcription',
                icon: Icons.newspaper,
                label: 'Journalists',
                desc: 'Transcribe interviews quickly and verify quotes with ease.',
              },
              {
                href: '/meeting-transcription',
                icon: Icons.briefcase,
                label: 'Teams',
                desc: 'Document meetings and share actionable transcripts.',
              },
              {
                href: '/free-srt-generator',
                icon: Icons.video,
                label: 'Content creators',
                desc: 'Repurpose audio and video into captions, articles, and more.',
              },
            ].map(({ href, icon, label, desc }) => (
              <a
                key={href}
                href={href}
                className="bg-white border border-slate-200 rounded-2xl p-4 hover:border-brand-400 hover:shadow-sm transition-all group"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-brand-50 text-brand-600 mb-3">
                  <span className="w-5 h-5">{icon}</span>
                </div>
                <h3 className="font-semibold text-slate-900 mb-1 text-sm">{label}</h3>
                <p className="text-xs text-slate-500 leading-relaxed flex items-start justify-between gap-2">
                  <span>{desc}</span>
                  <span className="w-3.5 h-3.5 text-slate-300 group-hover:text-brand-500 transition-colors flex-shrink-0 mt-0.5">{Icons.arrowRight}</span>
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────── UNIFIED COMPARISON TABLE ──────────────────
        Single table where every named competitor gets its own row and
        the whole row is a link to that tool's /X-alternative page.
        Structure:
          - 4 feature columns: Free / No signup / Summary / Translation
          - Row 1: mictoo (brand-highlighted) with ✓ badges per cell
          - Rows 2-6: Descript / Fireflies / TurboScribe / Otter / Notta
                      each row is clickable → their alternative page
                      Cells use compact honest labels; detailed pricing
                      claims live on the per-tool comparison pages.
        Cell copy stays deliberately conservative on specific numbers so
        the table doesn't go out of date every time a competitor changes
        their free tier. Real numbers are on each linked page.
      */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-3">Free transcription without the subscription</h2>
        <p className="text-slate-600 mb-8 max-w-2xl">
          How mictoo stacks up against the tools people usually consider. Click any row for a full feature-by-feature comparison.
        </p>

        <div className="bg-white border border-slate-200 rounded-2xl overflow-x-auto">
          <table className="w-full text-sm min-w-[820px] border-collapse">
            <thead>
              <tr>
                <th className="text-left px-5 py-4 w-56"></th>
                <th className="text-center px-4 py-4 text-slate-500 font-semibold text-xs uppercase tracking-wide">Free</th>
                <th className="text-center px-4 py-4 text-slate-500 font-semibold text-xs uppercase tracking-wide">No signup</th>
                <th className="text-center px-4 py-4 text-slate-500 font-semibold text-xs uppercase tracking-wide">AI Summary</th>
                <th className="text-center px-4 py-4 text-slate-500 font-semibold text-xs uppercase tracking-wide">Translation</th>
              </tr>
            </thead>
            <tbody>
              {/* Mictoo row — brand-highlighted, not clickable (it's the reference) */}
              <tr className="bg-gradient-to-r from-brand-50 to-brand-50/40">
                <td className="px-5 py-5 border-t border-slate-100 align-middle">
                  <div className="inline-flex items-center gap-2.5">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <rect width="24" height="24" rx="6" fill="#0284c7" />
                      <path d="M8 8v8M12 6v12M16 10v4" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <div>
                      <div className="font-bold text-slate-900 leading-tight">mictoo</div>
                      <div className="text-[11px] text-brand-700 font-medium">Free for everyone</div>
                    </div>
                  </div>
                </td>
                {[
                  { yes: true, label: 'Unlimited' },
                  { yes: true, label: 'No account' },
                  { yes: true, label: 'Included' },
                  { yes: true, label: '50+ languages' },
                ].map(({ label }, i) => (
                  <td key={i} className="text-center px-4 py-5 border-t border-slate-100 align-middle">
                    <div className="inline-flex flex-col items-center gap-1.5">
                      <span className="w-6 h-6 rounded-full bg-brand-600 text-white flex items-center justify-center">
                        <span className="w-3.5 h-3.5">{Icons.check}</span>
                      </span>
                      <span className="text-[11px] text-slate-600 leading-snug">{label}</span>
                    </div>
                  </td>
                ))}
              </tr>

              {/* Competitor rows — one per tool, whole row is a link. */}
              {[
                {
                  name: 'Descript',    href: '/descript-alternative',    tag: 'Editor-first workflow',
                  cells: ['Limited tier',    'Signup required', 'Paid add-on',   'Limited'],
                },
                {
                  name: 'Fireflies',   href: '/fireflies-alternative',   tag: 'Meeting bot recorder',
                  cells: ['Limited tier',    'Signup required', 'Pro tier',      'Limited'],
                },
                {
                  name: 'TurboScribe', href: '/turboscribe-alternative', tag: 'Casual transcription',
                  cells: ['Daily cap',        'Signup required', 'Not included',  'Limited'],
                },
                {
                  name: 'Otter',       href: '/otter-alternative',       tag: 'Live meeting notes',
                  cells: ['Monthly cap',      'Signup required', 'Pro tier',      'Limited'],
                },
                {
                  name: 'Notta',       href: '/notta-alternative',       tag: 'Multi-language focus',
                  cells: ['Monthly cap',      'Signup required', 'Pro tier',      'Broad'],
                },
              ].map(({ name, href, tag, cells }) => (
                <tr key={href} className="group hover:bg-slate-50 transition-colors">
                  <td className="border-t border-slate-100 align-middle p-0">
                    <a href={href} className="flex items-center justify-between gap-3 px-5 py-4">
                      <div>
                        <div className="font-semibold text-slate-800">vs {name}</div>
                        <div className="text-[11px] text-slate-500 mt-0.5">{tag}</div>
                      </div>
                      <span className="w-4 h-4 text-slate-300 group-hover:text-brand-500 group-hover:translate-x-0.5 transition-all">
                        {Icons.arrowRight}
                      </span>
                    </a>
                  </td>
                  {cells.map((label, i) => (
                    <td key={i} className="border-t border-slate-100 align-middle p-0">
                      <a
                        href={href}
                        className="block text-center px-4 py-4 text-xs text-slate-500"
                        aria-hidden="true"
                        tabIndex={-1}
                      >
                        {label}
                      </a>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-slate-400 text-center mt-4">
          Snapshot only. Pricing pages change; see the linked comparison for current numbers.
        </p>
      </section>

      {/* ────────────────── SEARCHABLE TEXT PROSE + PILL LINKS ────────────────── */}
      <section className="bg-white border-y border-slate-100 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Turn audio and video into searchable text
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-slate-600 leading-relaxed">
            <p>
              Mictoo converts your audio and video into accurate, readable transcripts. Even search, edit, and share. Turn conversations into insights and never miss an important detail again.
            </p>
            <p>
              From interviews to lectures, meetings to podcasts, Mictoo helps you save time, improve accessibility, and repurpose your content with ease.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {[
              { href: '/transcribe-audio-to-text',  label: 'Audio to Text' },
              { href: '/transcribe-video-to-text',  label: 'Video to Text' },
              { href: '/meeting-transcription',     label: 'Meeting Transcription' },
              { href: '/podcast-transcription',     label: 'Podcast Transcription' },
              { href: '/timestamped-transcription', label: 'AI Summary' },
              { href: '/multilingual-transcription',label: 'Translate' },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm font-semibold text-slate-700 hover:border-brand-400 hover:text-brand-700 transition-colors"
              >
                <span>{label}</span>
                <span className="w-3.5 h-3.5 text-slate-400">{Icons.arrowRight}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────── FAQ ────────────────── */}
      <section id="faq" className="bg-white border-y border-slate-100 py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-10 text-center">
            Frequently asked questions
          </h2>
          <div className="space-y-3">
            {FAQ.map(({ q, a }, i) => (
              <details
                key={q}
                className="group border border-slate-200 rounded-xl overflow-hidden bg-white open:shadow-sm"
                {...(i === 0 ? { open: true } : {})}
              >
                <summary className="cursor-pointer list-none px-5 py-4 flex items-center justify-between gap-3 font-semibold text-slate-800 hover:bg-slate-50 transition-colors">
                  <span>{q}</span>
                  <svg
                    className="w-4 h-4 flex-shrink-0 text-slate-400 transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
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

      {/* ────────────────── BOTTOM CTA PLATE ──────────────────
        Redesigned: dropped the middle waveform badge (was a third
        waveform on top of the two side accents — too repetitive),
        replaced with an AI-sparkles badge, added a trust-chip row
        under the tagline, and made the CTA button larger with a
        right-arrow so it reads as an action, not a static link.
        Softer side-waveform accents so the copy has more contrast.
      */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="relative bg-gradient-to-r from-brand-600 via-brand-500 to-brand-600 rounded-3xl overflow-hidden shadow-lg shadow-brand-500/20">
          {/* Subtle radial glow behind the button — soft focus, no
              waveform accents (removed per user request; the plate reads
              cleaner without them and the sparkles badge alone carries
              the "AI transcription" cue). */}
          <div className="absolute right-24 top-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-white/10 blur-3xl pointer-events-none hidden md:block" />

          <div className="relative flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 py-10 px-6 md:px-10 text-center md:text-left">
            {/* AI badge — sparkles instead of a third waveform */}
            <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur border border-white/20 flex items-center justify-center text-white flex-shrink-0">
              <span className="w-7 h-7">{Icons.sparkles}</span>
            </div>

            <div className="min-w-0 flex-1 max-w-lg">
              <div className="font-bold text-white text-xl md:text-2xl leading-tight">
                Transcribe your file, free
              </div>
              <div className="text-sm text-white/85 mt-1.5">
                Drop your audio or video and get an accurate transcript in seconds.
              </div>
              {/* Trust chips — three reasons to trust the CTA */}
              <div className="mt-3 flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-1 text-[11px] text-white/80">
                <span className="inline-flex items-center gap-1">
                  <span className="w-3 h-3">{Icons.check}</span> No signup
                </span>
                <span className="inline-flex items-center gap-1">
                  <span className="w-3 h-3">{Icons.check}</span> No credit card
                </span>
                <span className="inline-flex items-center gap-1">
                  <span className="w-3 h-3">{Icons.check}</span> 50+ languages
                </span>
              </div>
            </div>

            <a
              href="#tool"
              className="inline-flex items-center gap-2 bg-white text-brand-700 font-bold text-sm md:text-base px-6 py-3.5 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex-shrink-0 group"
            >
              <span>Start Transcribing</span>
              <span className="w-4 h-4 group-hover:translate-x-0.5 transition-transform">{Icons.arrowRight}</span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
