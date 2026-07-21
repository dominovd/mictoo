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

            {/* Live result preview (static JSX mock) */}
            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
              {/* Header row */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 bg-slate-50">
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-4 h-4 text-brand-600">{Icons.video}</span>
                  <span className="font-semibold text-slate-800">Interview.mp4</span>
                  <span className="text-slate-400 text-xs">·</span>
                  <span className="text-xs text-emerald-600 font-medium">Completed in 18s</span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="text-xs bg-white border border-slate-200 rounded-lg px-2.5 py-1 text-slate-600 font-medium">Translate ▾</button>
                  <button className="text-xs bg-brand-600 text-white rounded-lg px-2.5 py-1 font-medium">Download ↓</button>
                </div>
              </div>

              {/* Tab bar */}
              <div className="flex items-center gap-4 px-4 pt-3 text-xs border-b border-slate-100">
                <button className="pb-2 font-semibold text-brand-700 border-b-2 border-brand-600">Transcript</button>
                <button className="pb-2 text-slate-500">AI Summary</button>
                <button className="pb-2 text-slate-500">Notes</button>
              </div>

              {/* Body: transcript lines + summary panel */}
              <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] divide-y md:divide-y-0 md:divide-x divide-slate-100">
                {/* Transcript */}
                <div className="p-4 space-y-3 text-sm">
                  {[
                    { t: '00:00:00', role: 'Interviewer', line: 'Can you tell us about your journey into filmmaking?' },
                    { t: '00:00:07', role: 'Guest',       line: 'It started as a hobby in college. I loved storytelling and visual arts.' },
                    { t: '00:00:15', role: 'Interviewer', line: 'What inspires your creative process?' },
                    { t: '00:00:24', role: 'Guest',       line: 'People and real life moments. I observe and translate them into stories.' },
                  ].map((row, i) => (
                    <div key={i} className="grid grid-cols-[auto_1fr] gap-3 items-start">
                      <div className="flex flex-col items-center gap-1 pt-0.5">
                        <button className="w-5 h-5 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center">
                          <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 24 24"><path d="M5 3l14 9-14 9V3z" /></svg>
                        </button>
                        <span className="font-mono text-[10px] text-slate-400 whitespace-nowrap">{row.t}</span>
                      </div>
                      <div>
                        <div className="text-[11px] font-semibold text-brand-700 mb-0.5">{row.role}:</div>
                        <div className="text-slate-700 leading-snug">{row.line}</div>
                      </div>
                    </div>
                  ))}
                  {/* Waveform + time */}
                  <div className="pt-3 mt-2 border-t border-slate-100">
                    <div className="flex items-end gap-0.5 h-6">
                      {Array.from({ length: 60 }).map((_, i) => {
                        // Deterministic pseudo-waveform so SSR matches client
                        const h = 4 + ((i * 17) % 18)
                        return <div key={i} className="w-0.5 rounded-sm bg-brand-300" style={{ height: h + 'px' }} />
                      })}
                    </div>
                    <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-1">
                      <span>00:00:00</span>
                      <span>12:45</span>
                    </div>
                  </div>
                </div>

                {/* AI Summary panel */}
                <div className="p-4 bg-slate-50/50">
                  <div className="flex items-center gap-1.5 mb-3">
                    <span className="w-4 h-4 text-brand-600">{Icons.sparkles}</span>
                    <div className="text-sm font-semibold text-slate-800">AI Summary</div>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-600 leading-relaxed">
                    <li className="flex gap-2">
                      <span className="w-1 h-1 mt-1.5 rounded-full bg-brand-500 flex-shrink-0" />
                      The guest discovered filmmaking in college as a hobby.
                    </li>
                    <li className="flex gap-2">
                      <span className="w-1 h-1 mt-1.5 rounded-full bg-brand-500 flex-shrink-0" />
                      Storytelling and visual arts sparked their passion.
                    </li>
                    <li className="flex gap-2">
                      <span className="w-1 h-1 mt-1.5 rounded-full bg-brand-500 flex-shrink-0" />
                      Real life moments and people inspire their creative process.
                    </li>
                  </ul>

                  <div className="mt-4">
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Key topics</div>
                    <div className="flex flex-wrap gap-1.5">
                      {['Filmmaking journey', 'Inspiration', 'Storytelling'].map((tag) => (
                        <span key={tag} className="text-[10px] font-semibold text-brand-700 bg-brand-50 px-2 py-0.5 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
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

      {/* ────────────────── COMPARISON TABLE ────────────────── */}
      {/*
        Structure:
          - 4 feature columns: Free / No signup / Summary / Translation
          - Row 1 (mictoo, brand-highlighted): checkmark + short affirmation
            in each cell.
          - Row 2 (Other tools): the drawback that generic alternatives have.
        Kept intentionally short: this is a snapshot, not the full comparison
        — those live on the alternative pages linked from the "Switching from
        another tool?" block below.
      */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">Free transcription without the subscription</h2>

        <div className="bg-white border border-slate-200 rounded-2xl overflow-x-auto">
          <table className="w-full text-sm min-w-[720px] border-collapse">
            <thead>
              <tr>
                <th className="text-left px-5 py-4 w-48"></th>
                <th className="text-center px-5 py-4 text-slate-500 font-semibold text-xs uppercase tracking-wide">Free</th>
                <th className="text-center px-5 py-4 text-slate-500 font-semibold text-xs uppercase tracking-wide">No signup</th>
                <th className="text-center px-5 py-4 text-slate-500 font-semibold text-xs uppercase tracking-wide">Summary</th>
                <th className="text-center px-5 py-4 text-slate-500 font-semibold text-xs uppercase tracking-wide">Translation</th>
              </tr>
            </thead>
            <tbody>
              {/* Mictoo row — brand-highlighted background across all cells */}
              <tr className="bg-gradient-to-r from-brand-50 to-brand-50/50">
                <td className="px-5 py-6 border-t border-slate-100">
                  <div className="inline-flex items-center gap-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
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
                  '100% free to use',
                  'Start transcribing immediately',
                  'AI summary included',
                  'Translate transcripts to 50+ languages',
                ].map((label) => (
                  <td key={label} className="text-center px-5 py-6 border-t border-slate-100 align-middle">
                    <div className="inline-flex flex-col items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-brand-600 text-white flex items-center justify-center">
                        <span className="w-3.5 h-3.5">{Icons.check}</span>
                      </span>
                      <span className="text-[11px] text-slate-600 leading-snug max-w-[10rem]">{label}</span>
                    </div>
                  </td>
                ))}
              </tr>
              {/* Other tools row */}
              <tr>
                <td className="px-5 py-5 border-t border-slate-100 text-sm font-semibold text-slate-500">Other tools</td>
                {[
                  'Limited free tier',
                  'Sign up required',
                  'Not included',
                  'Limited languages',
                ].map((label) => (
                  <td key={label} className="text-center px-5 py-5 border-t border-slate-100 text-xs text-slate-500">
                    {label}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-xs text-slate-400 text-center mt-4">
          Snapshot comparison. Feature-by-feature details for each tool live on the alternative pages.
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

      {/* ────────────────── ALTERNATIVE PAGES (kept from previous home) ────────────────── */}
      <section className="max-w-4xl mx-auto px-4 py-14">
        <h2 className="text-lg font-semibold text-slate-800 text-center mb-4">
          Switching from another tool?
        </h2>
        <p className="text-center text-slate-500 text-sm mb-8">
          Feature-by-feature comparisons, pricing notes, and honest tradeoffs.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            ['Descript',    '/descript-alternative'],
            ['Fireflies',   '/fireflies-alternative'],
            ['TurboScribe', '/turboscribe-alternative'],
            ['Otter',       '/otter-alternative'],
            ['Notta',       '/notta-alternative'],
          ].map(([name, href]) => (
            <a key={href} href={href} className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">
              vs {name}
            </a>
          ))}
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

      {/* ────────────────── BOTTOM CTA PLATE ────────────────── */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        <div className="relative bg-gradient-to-r from-brand-600 to-brand-500 rounded-2xl overflow-hidden shadow-md">
          {/* Waveform accent left */}
          <div className="absolute left-4 top-1/2 -translate-y-1/2 hidden sm:flex items-end gap-0.5 h-10 opacity-60">
            {Array.from({ length: 26 }).map((_, i) => {
              const h = 6 + ((i * 13) % 24)
              return <div key={i} className="w-0.5 rounded-sm bg-white" style={{ height: h + 'px' }} />
            })}
          </div>
          {/* Waveform accent right */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden sm:flex items-end gap-0.5 h-10 opacity-60">
            {Array.from({ length: 26 }).map((_, i) => {
              const h = 6 + ((i * 11) % 24)
              return <div key={i} className="w-0.5 rounded-sm bg-white" style={{ height: h + 'px' }} />
            })}
          </div>

          <div className="relative flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 py-8 px-6 text-center sm:text-left">
            {/* Waveform badge (center-left on desktop, top on mobile) */}
            <div className="w-12 h-12 rounded-full bg-white/15 backdrop-blur flex items-center justify-center text-white flex-shrink-0">
              <span className="w-6 h-6">{Icons.waveform}</span>
            </div>

            <div className="min-w-0">
              <div className="font-bold text-white text-lg leading-tight">
                Transcribe your first file, free
              </div>
              <div className="text-sm text-white/80 mt-0.5">
                No signup. No limits. Just drop your file and get started.
              </div>
            </div>

            <a
              href="#tool"
              className="inline-flex items-center gap-2 bg-white text-brand-700 font-semibold text-sm px-5 py-3 rounded-xl hover:bg-brand-50 transition-colors flex-shrink-0"
            >
              <span className="w-4 h-4">{Icons.upload}</span>
              <span>Upload a file</span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
