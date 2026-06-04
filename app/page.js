import UploadZone from '@/components/UploadZone'
import TrustRow from '@/components/TrustRow'

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
    a: 'Yes. Mictoo is completely free for files up to 25 MB. No account, no credit card, no hidden fees.',
  },
  {
    q: 'How accurate is the transcription?',
    a: "Mictoo uses OpenAI's Whisper, one of the most accurate open speech recognition models available. Accuracy depends on audio quality and accent, but typically exceeds 95% for clear recordings.",
  },
  {
    q: 'What languages are supported?',
    a: "Whisper supports over 50 languages including English, Spanish, French, German, Portuguese, Russian, Ukrainian, Japanese, Chinese, Arabic, and more. Language is detected automatically — no need to select it.",
  },
  {
    q: 'Is my file stored on your servers?',
    a: "No. Files are streamed directly to Groq's Whisper API (US-hosted) for transcription, with OpenAI's Whisper API kept as an automatic fallback, and are not stored on Mictoo's servers. Neither provider uses API audio for model training; OpenAI retains data for at most 30 days of abuse monitoring before deletion.",
  },
  {
    q: 'What is the maximum file size?',
    a: 'Up to 25 MB — the limit set by the AI API. For longer files, consider compressing your audio first or splitting it into shorter segments.',
  },
  {
    q: 'What file formats does Mictoo support?',
    a: 'Mictoo supports MP3, MP4, WAV, M4A, OGG, WEBM, FLAC, and MPEG. Both audio and video files are accepted.',
  },
  {
    q: 'How long does transcription take?',
    a: 'Most files are transcribed in seconds. A 10-minute audio file typically takes 15–30 seconds depending on server load.',
  },
  {
    q: 'Can I edit the transcript after it is generated?',
    a: 'Yes. The transcript is fully editable in your browser before you copy or download it. No account is needed to save changes.',
  },
  {
    q: 'Do I need to create an account?',
    a: 'No account or signup required. Just upload your file and get your transcript immediately.',
  },
  {
    q: 'What technology powers Mictoo?',
    a: "Mictoo is built on OpenAI's Whisper API — the same speech recognition model that powers ChatGPT's voice features. Whisper was trained on 680,000 hours of multilingual audio and is widely considered one of the most accurate speech recognition models available.",
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
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  featureList: [
    'Transcribe audio to text',
    'Transcribe video to text',
    'Supports 50+ languages',
    'No account required',
    'Free to use',
    'Supports MP3, MP4, WAV, M4A, OGG, WEBM, FLAC',
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

      {/* Hero */}
      <section className="bg-white border-b border-slate-100 py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <span className="inline-block bg-brand-50 text-brand-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
            AI · Free · No signup · 50+ languages
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4 leading-tight">
            Transcribe Audio &amp; Video<br />
            <span className="text-brand-600">to Text with AI, Free</span>
          </h1>
          <p className="text-lg text-slate-500 mb-4">
            Upload any audio or video file and get an accurate AI-powered text transcript in seconds.
            No account required.
          </p>
          <TrustRow locale="en" />
        </div>
      </section>

      {/* Upload tool */}
      <section className="max-w-2xl mx-auto px-4 -mt-6 pb-12">
        <UploadZone />
      </section>

      {/* How it works */}
      <section id="how-it-works" className="bg-white border-y border-slate-100 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-12">How it works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                icon: '📂',
                title: 'Upload your file',
                desc: 'Drag & drop or click to upload. Supports MP3, MP4, WAV, M4A, OGG, WEBM, FLAC. Up to 25 MB.',
              },
              {
                step: '2',
                icon: '⚡',
                title: 'AI transcribes it',
                desc: 'Our AI converts your audio to text with high accuracy across 50+ languages.',
              },
              {
                step: '3',
                icon: '📋',
                title: 'Copy or download',
                desc: 'Get your transcript instantly. Copy to clipboard or download as a .txt file.',
              },
            ].map(({ step, icon, title, desc }) => (
              <div key={step} className="text-center">
                <div className="text-4xl mb-4">{icon}</div>
                <div className="inline-block bg-brand-600 text-white text-xs font-bold px-2 py-0.5 rounded mb-3">
                  Step {step}
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">{title}</h3>
                <p className="text-sm text-slate-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Mictoo — SEO benefits section */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-slate-900 text-center mb-4">
          Why use Mictoo?
        </h2>
        <p className="text-center text-slate-500 mb-10 max-w-xl mx-auto">
          The fastest way to convert audio and video to text — without paying, signing up, or installing anything.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              icon: '🆓',
              title: '100% free',
              desc: 'No subscription, no trial. Mictoo is free to use with no monthly cap and no minute counting.',
            },
            {
              icon: '🔒',
              title: 'Private by design',
              desc: 'Files are streamed directly to the Whisper API (Groq primary, OpenAI fallback), processed, and discarded in seconds. We never log, retain, or train on your audio or transcripts.',
            },
            {
              icon: '🌍',
              title: '50+ languages',
              desc: 'Automatic language detection. Works for English, Spanish, French, German, Russian, Japanese, and many more.',
            },
            {
              icon: '🎯',
              title: 'High accuracy',
              desc: "Powered by OpenAI's Whisper — the same speech recognition model used in ChatGPT and the leading transcription services.",
            },
            {
              icon: '⚡',
              title: 'Fast results',
              desc: 'A 10-minute audio file is typically transcribed in under 30 seconds. No waiting in queues.',
            },
            {
              icon: '✏️',
              title: 'Editable output',
              desc: 'Review and edit your transcript right in the browser, then copy to clipboard or download as a .txt file.',
            },
            {
              icon: '🧠',
              title: 'AI summary included',
              desc: "After every transcript we generate a free GPT-powered summary with the key points and action items — competitors typically charge $15–20/month for this. No extra click, no upgrade prompt.",
            },
            {
              icon: '🌐',
              title: 'Translate to 28 languages',
              desc: 'One click translates the full transcript into Spanish, French, German, Japanese, and 24 others. Original timestamps preserved so the translated SRT still matches the audio.',
            },
            {
              icon: '💬',
              title: 'Chat with your transcript',
              desc: "Ask anything about a transcript you've created and get answers cited with clickable timestamps. Free, just requires a sign-in.",
            },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="flex gap-4 bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
              <div className="text-2xl flex-shrink-0">{icon}</div>
              <div>
                <h3 className="font-semibold text-slate-800 mb-1">{title}</h3>
                <p className="text-sm text-slate-500">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Use cases */}
      <section className="bg-white border-y border-slate-100 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-4">
            Who uses Mictoo?
          </h2>
          <p className="text-center text-slate-500 mb-10 max-w-xl mx-auto">
            From students to professionals — anyone who needs fast, accurate speech-to-text.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {[
              { icon: '🎓', label: 'Students', desc: 'Transcribe lectures, interviews, and research recordings.', href: '/lecture-transcription' },
              { icon: '🎙️', label: 'Podcasters', desc: 'Turn podcast episodes into blog posts, show notes, or subtitles.', href: '/podcast-transcription' },
              { icon: '📰', label: 'Journalists', desc: 'Convert recorded interviews to text in seconds.', href: '/interview-transcription' },
              { icon: '🏢', label: 'Business teams', desc: 'Transcribe meetings, calls, and presentations.', href: '/business-transcription' },
              { icon: '🌐', label: 'Content creators', desc: 'Create captions and transcripts for YouTube videos.', href: '/free-srt-generator' },
              { icon: '⚖️', label: 'Legal & medical', desc: 'Quickly draft transcripts for notes and documentation.', href: '/transcribe-audio-to-text' },
            ].map(({ icon, label, desc, href }) => (
              <a key={label} href={href} className="bg-slate-50 rounded-2xl p-6 hover:bg-brand-50 hover:shadow-sm transition-all block">
                <div className="text-3xl mb-3">{icon}</div>
                <h3 className="font-semibold text-slate-800 mb-2">{label}</h3>
                <p className="text-sm text-slate-500">{desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Supported formats */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-slate-900 text-center mb-4">
          Supported file formats
        </h2>
        <p className="text-center text-slate-500 mb-8">
          Mictoo transcribes all common audio and video formats.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            { fmt: 'MP3', href: '/transcribe-mp3-to-text' },
            { fmt: 'MP4', href: '/transcribe-video-to-text' },
            { fmt: 'WAV', href: '/wav-to-text' },
            { fmt: 'M4A', href: '/m4a-to-text' },
            { fmt: 'OGG', href: '/ogg-to-text' },
            { fmt: 'WEBM', href: '/webm-to-text' },
            { fmt: 'FLAC', href: '/flac-to-text' },
            { fmt: 'MPEG', href: '/transcribe-audio-to-text' },
          ].map(({ fmt, href }) => (
            <a key={fmt} href={href} className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-mono font-semibold text-slate-700 shadow-sm hover:border-brand-400 hover:text-brand-600 transition-colors">
              .{fmt.toLowerCase()}
            </a>
          ))}
        </div>
      </section>

      {/* Switching from another tool? — surfaces comparison pages to cold traffic */}
      <section className="bg-white border-y border-slate-100 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-4">
            Switching from another tool?
          </h2>
          <p className="text-center text-slate-500 mb-10 max-w-xl mx-auto">
            See how Mictoo compares to popular alternatives — features, pricing, signup, and trade-offs.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              ['Descript',    '/descript-alternative'],
              ['Fireflies',   '/fireflies-alternative'],
              ['TurboScribe', '/turboscribe-alternative'],
              ['Otter',       '/otter-alternative'],
              ['Notta',       '/notta-alternative'],
            ].map(([name, href]) => (
              <a key={href} href={href} className="px-5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-700 shadow-sm hover:border-brand-400 hover:text-brand-600 transition-colors">
                vs {name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ — accordion (matches landing pages). First item opens by default
          so first-time visitors see the format. JSON-LD FAQPage schema is
          already emitted at the top of <Home /> from the same FAQ array. */}
      <section id="faq" className="bg-white border-t border-slate-100 py-16 px-4">
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
    </>
  )
}
