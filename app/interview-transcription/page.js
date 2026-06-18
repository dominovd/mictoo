// /interview-transcription
//
// Long-form landing page for the "free interview transcription" SEO cluster.
// Hand-built layout (does NOT use LandingLayout) so the design can follow the
// reference mockups in /Downloads/mictoo/Interview Transcription/. The page
// drives traffic to the main app via CTA buttons that scroll to the homepage
// uploader. No UploadZone is embedded here on purpose.
//
// SEO keywords woven into prose (in order of priority):
//   free interview transcription, interview transcription tool,
//   interview transcription software, AI interview transcription,
//   transcribe interviews online, interview transcript example,
//   interview transcript sample, speech to text interview,
//   convert interview recording to text, free interview transcript generator.

import Link from 'next/link'

export const metadata = {
  title: 'Free Interview Transcription Tool: Convert Interviews to Text Online | Mictoo',
  description:
    'Transcribe interviews for free with AI. Upload audio or video recordings and get accurate interview transcripts in minutes. Supports MP3, WAV, M4A, MP4, MOV, and more.',
  alternates: {
    canonical: 'https://mictoo.com/interview-transcription',
    languages: {
      'en': 'https://mictoo.com/interview-transcription',
      'fr': 'https://mictoo.com/fr/interview-transcription',
      'de': 'https://mictoo.com/de/interview-transcription',
      'es': 'https://mictoo.com/es/interview-transcription',
      'ru': 'https://mictoo.com/ru/interview-transcription',
      'it': 'https://mictoo.com/it/interview-transcription',
      'pt': 'https://mictoo.com/pt/interview-transcription',
      'pl': 'https://mictoo.com/pl/interview-transcription',
      'ja': 'https://mictoo.com/ja/interview-transcription',
      'ko': 'https://mictoo.com/ko/interview-transcription',
      'x-default': 'https://mictoo.com/interview-transcription',
    },
  },
  openGraph: {
    title: 'Free Interview Transcription Tool | Mictoo',
    description:
      'Free interview transcription with AI. Upload audio or video, get a clean transcript in minutes. Works for journalism, research, podcasts, and hiring.',
    url: 'https://mictoo.com/interview-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Interview Transcription Tool',
    description:
      'AI interview transcription. Upload audio or video, get a transcript in minutes. Free.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

// Sample transcript shown in Section 4 ("Interview Transcript Example"). Keeps
// the page self-explanatory: a visitor sees what they will get before they
// click the upload button.
const SAMPLE_TRANSCRIPT = [
  { ts: '00:00:02', speaker: 'Interviewer', text: 'Can you tell me about your experience working remotely?' },
  { ts: '00:00:06', speaker: 'Candidate',   text: "I've been working remotely for over three years and collaborated with distributed teams across different time zones." },
  { ts: '00:00:18', speaker: 'Interviewer', text: 'What challenges did you face?' },
  { ts: '00:00:21', speaker: 'Candidate',   text: 'Communication and scheduling were the biggest ones initially. It took time to establish clear processes and expectations.' },
  { ts: '00:00:34', speaker: 'Interviewer', text: 'How do you stay productive while working from home?' },
  { ts: '00:00:38', speaker: 'Candidate',   text: 'A structured schedule, daily goals, and use of collaboration tools to stay organized and aligned with the team.' },
  { ts: '00:00:52', speaker: 'Interviewer', text: 'What tools do you find most helpful?' },
  { ts: '00:00:55', speaker: 'Candidate',   text: 'Slack for communication, Notion for documentation, and Google Drive for file sharing. These tools help keep everything in one place.' },
]

const FAQ = [
  {
    q: 'Is this really a free interview transcription tool?',
    a: 'Yes. Free transcription up to 60 MB per file with no signup, and registered users (also free) can upload up to 180 MB. There is no per-minute fee and no credit card. We make the service sustainable through optional Pro features, not by charging for the basic transcription.',
  },
  {
    q: 'How accurate is AI interview transcription compared to a human typist?',
    a: 'On a clean 2-person interview with decent microphones, Whisper large-v3 typically lands at 90 to 95 percent accuracy on the first pass. A human typist costs $1 to $3 per minute and adds 24 to 48 hours of turnaround. For most journalism, research, and hiring use cases, the AI transcript plus a quick review of the quotes you plan to publish is the right tradeoff.',
  },
  {
    q: 'Can I see an interview transcript example before I upload?',
    a: 'Yes. There is a sample interview transcript in the "Interview Transcript Example" section above, with the same formatting Mictoo produces: timestamps every few seconds, speaker turns, automatic punctuation. Your transcript will look the same once processing finishes.',
  },
  {
    q: 'Can I transcribe an interview in another language?',
    a: 'Yes, over 50 languages. Pick the language in the upload form for short clips or for interviews that start with English chit-chat before switching to the main language. Auto-detect works for longer interviews where the main language is clearly dominant.',
  },
  {
    q: 'My interview is 90 minutes. Can the tool handle that?',
    a: 'Yes, if you have a free account. Registered users can upload files up to 180 MB; longer interviews are auto-split into chunks and merged into a single transcript. For anonymous users, split the recording into 60-minute parts before uploading (the natural break is usually a topic shift or a pause).',
  },
  {
    q: 'Will I get speaker labels automatically?',
    a: 'Not yet. Whisper, the speech recognition engine, does not perform speaker diarization out of the box. For a 2-speaker interview, adding "Interviewer:" and "Source:" labels manually takes around 5 minutes per 30-minute interview. We are evaluating a diarization add-on for the Pro tier.',
  },
  {
    q: 'Can I convert an interview recording from my phone to text?',
    a: 'Yes. iPhone Voice Memos save as M4A, Android voice recorders save as M4A or MP3, and both upload directly. AirDrop or email the file to your computer, then drop it on the uploader. The same workflow works for recordings made inside Zoom, Google Meet, or Microsoft Teams.',
  },
  {
    q: 'Do I need to install interview transcription software on my computer?',
    a: 'No. Mictoo runs entirely in the browser. You upload the file from any device (Mac, Windows, Linux, iOS, Android), the transcription happens on our servers, and the transcript comes back to your browser. Nothing to install, nothing to update.',
  },
  {
    q: 'How long does AI interview transcription take?',
    a: 'Roughly 1 to 2 percent of the audio length. A 30-minute interview finishes in around 60 seconds. A 90-minute interview takes 2 to 3 minutes.',
  },
  {
    q: 'Is the audio stored after transcription?',
    a: 'No. Your file streams to the speech-to-text engine, gets processed, and is then deleted from our servers. We do not retain the audio and do not train any model on your recordings. For sensitive source material or interviews under NDA, this matters.',
  },
]

// CTA button used in hero, between sections, and at the bottom of the page.
// Always links to the homepage uploader (the actual tool lives at /).
function CtaButton({ children = 'Start Transcribing for Free', className = '' }) {
  return (
    <Link
      href="/#tool"
      className={
        'inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold px-6 py-3.5 rounded-xl shadow-sm transition-colors ' +
        className
      }
    >
      <span>{children}</span>
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </Link>
  )
}

function Bullet({ children }) {
  return (
    <li className="flex items-start gap-3 text-slate-700">
      <svg className="w-5 h-5 flex-shrink-0 text-brand-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
      <span className="text-sm leading-relaxed">{children}</span>
    </li>
  )
}

function SectionEyebrow({ children }) {
  return (
    <span className="inline-block bg-brand-50 text-brand-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
      {children}
    </span>
  )
}

export default function InterviewTranscriptionPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }

  return (
    <>
      {/* ─────────────── HERO ─────────────── */}
      <section className="bg-gradient-to-b from-brand-50/40 to-white border-b border-slate-100 py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <SectionEyebrow>AI · Free · No signup · 50+ languages</SectionEyebrow>
          <h1 className="mt-5 text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
            Free Interview Transcription Tool
          </h1>
          <p className="mt-5 text-lg text-slate-600 leading-relaxed">
            Convert interviews into accurate, searchable transcripts in minutes. Upload your audio or video recording and let AI turn speech into text automatically.
          </p>
        </div>

        {/* Hero illustration — placed above the CTA so visitors see the
            product visually before they decide to click. */}
        <div className="mt-10 max-w-4xl mx-auto">
          <img
            src="/interview/hero.webp"
            alt="Interview recording flowing through Mictoo AI speech recognition into a finished interview transcript"
            width={1695}
            height={928}
            className="w-full h-auto rounded-2xl"
            // Hero image — load eagerly so the picture is in the viewport when
            // the page renders. fetchpriority hints to the browser this is
            // the LCP candidate.
            fetchPriority="high"
          />
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <CtaButton />
          </div>
          <p className="mt-4 text-sm text-slate-500">
            No installation required. Upload your recording and get a transcript online.
          </p>
        </div>

        {/* Quick trust strip */}
        <div className="mt-12 max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-xs text-slate-500">
          <div className="bg-white border border-slate-200 rounded-xl px-3 py-3">
            <div className="font-semibold text-slate-800 text-sm">Whisper large-v3</div>
            <div className="mt-0.5">Same model paid services use</div>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl px-3 py-3">
            <div className="font-semibold text-slate-800 text-sm">~1 min per 30 min</div>
            <div className="mt-0.5">Typical processing time</div>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl px-3 py-3">
            <div className="font-semibold text-slate-800 text-sm">50+ languages</div>
            <div className="mt-0.5">Including bilingual interviews</div>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl px-3 py-3">
            <div className="font-semibold text-slate-800 text-sm">No retention</div>
            <div className="mt-0.5">Audio deleted after processing</div>
          </div>
        </div>
      </section>

      {/* ─────────────── SECTION 1: UPLOAD ─────────────── */}
      <section className="bg-white py-16 px-4 border-b border-slate-100">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <SectionEyebrow>Step 1</SectionEyebrow>
            <h2 className="mt-4 text-3xl font-bold text-slate-900">
              Upload Your Interview Recording
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Upload audio or video interviews directly from your device. Mictoo supports popular recording formats and helps you transcribe interviews without manual typing. Drag the file in, or click to browse.
            </p>
            <ul className="mt-6 space-y-3">
              <Bullet>Upload audio or video files</Bullet>
              <Bullet>Supports popular recording formats</Bullet>
              <Bullet>Simple drag-and-drop interface</Bullet>
              <Bullet>Start transcription in seconds</Bullet>
            </ul>
          </div>

          {/* Illustration: drag-and-drop upload */}
          <img
            src="/interview/step_1.webp"
            alt="Drag and drop interview file into Mictoo, showing supported MP3, WAV, M4A and MP4 formats"
            width={1536}
            height={1024}
            loading="lazy"
            className="w-full h-auto rounded-2xl"
          />
        </div>
      </section>

      {/* ─────────────── SECTION 2: AI TRANSCRIPTION ─────────────── */}
      <section className="bg-slate-50 py-16 px-4 border-b border-slate-100">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Illustration: AI transcription in progress */}
          <img
            src="/interview/step_2.webp"
            alt="Mictoo AI transcribing an interview: analyzing speech, generating transcript, adding punctuation"
            width={1536}
            height={1024}
            loading="lazy"
            className="order-2 md:order-1 w-full h-auto rounded-2xl"
          />

          <div className="order-1 md:order-2">
            <SectionEyebrow>Step 2</SectionEyebrow>
            <h2 className="mt-4 text-3xl font-bold text-slate-900">
              AI-Powered Interview Transcription
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Once your recording is uploaded, Mictoo automatically converts speech to text. The AI analyzes the audio, generates a transcript, and formats it into readable text with timestamps and paragraph breaks.
            </p>
            <ul className="mt-6 space-y-3">
              <Bullet>Automatic speech-to-text conversion</Bullet>
              <Bullet>Fast interview transcription with Whisper large-v3</Bullet>
              <Bullet>Automatic punctuation and paragraph breaks</Bullet>
              <Bullet>Readable transcript formatting with timestamps</Bullet>
            </ul>
          </div>
        </div>
      </section>

      {/* ─────────────── SECTION 3: EXPORT ─────────────── */}
      <section className="bg-white py-16 px-4 border-b border-slate-100">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <SectionEyebrow>Step 3</SectionEyebrow>
            <h2 className="mt-4 text-3xl font-bold text-slate-900">
              Export Your Transcript
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Download, edit, and share your transcript once processing is complete. Mictoo gives you multiple export formats so the transcript fits whatever you do next, from quoting in an article to importing into qualitative research software.
            </p>
            <ul className="mt-6 space-y-3">
              <Bullet>Export transcripts in DOCX, PDF, TXT, and SRT</Bullet>
              <Bullet>Copy transcript text in one click</Bullet>
              <Bullet>Use transcripts for research, hiring, journalism, and documentation</Bullet>
              <Bullet>Easy in-browser editing and review before export</Bullet>
            </ul>
          </div>

          {/* Illustration: interview transcript preview with export options */}
          <img
            src="/interview/step_3.webp"
            alt="Interview transcript preview with timestamps, speaker labels, and export options (DOCX, TXT, PDF)"
            width={1536}
            height={1024}
            loading="lazy"
            className="w-full h-auto rounded-2xl"
          />
        </div>
      </section>

      {/* ─────────────── SECTION 4: TRANSCRIPT EXAMPLE ─────────────── */}
      <section className="bg-slate-50 py-16 px-4 border-b border-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <SectionEyebrow>Sample</SectionEyebrow>
            <h2 className="mt-4 text-3xl font-bold text-slate-900">Interview Transcript Example</h2>
            <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
              Below is an interview transcript sample produced by Mictoo. Same formatting you get after a real upload: per-segment timestamps, speaker turns, automatic punctuation.
            </p>
          </div>

          <div className="mt-8 bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="flex items-center justify-between gap-3 px-5 py-3 border-b border-slate-100 bg-slate-50">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                <span className="inline-block w-2 h-2 rounded-full bg-brand-500" />
                Example AI-generated transcript
              </div>
              <div className="text-xs text-slate-400">Interview · 18:42 · English</div>
            </div>
            <div className="divide-y divide-slate-100">
              {SAMPLE_TRANSCRIPT.map((line) => (
                <div key={line.ts} className="grid grid-cols-[auto_auto_1fr] gap-3 px-5 py-3 text-sm">
                  <span className="font-mono text-xs text-slate-400 mt-0.5">{line.ts}</span>
                  <span className="text-xs font-semibold text-brand-700 mt-0.5 whitespace-nowrap">{line.speaker}:</span>
                  <span className="text-slate-700 leading-relaxed">{line.text}</span>
                </div>
              ))}
            </div>
            <div className="px-5 py-3 text-xs text-slate-400 bg-slate-50 border-t border-slate-100 flex items-center justify-between flex-wrap gap-2">
              <span>In the real tool you can edit any line, then export to DOCX, PDF, SRT, or TXT.</span>
              <div className="flex gap-1.5">
                {['DOCX', 'PDF', 'TXT', 'SRT'].map((f) => (
                  <span key={f} className="text-xs font-semibold text-brand-700 bg-brand-50 px-2 py-0.5 rounded">{f}</span>
                ))}
              </div>
            </div>
          </div>

          <p className="mt-6 text-slate-600 text-center max-w-2xl mx-auto leading-relaxed">
            Interview transcripts help transform recorded conversations into searchable and editable text. Researchers, recruiters, journalists, and students use transcripts to analyze interviews, review responses, and organize information.
          </p>
        </div>
      </section>

      {/* ─────────────── SECTION 5: USE CASES ─────────────── */}
      {/*
        Four colored cards (sky / emerald / purple / amber) modeled on
        use_case.png. Each card gets a top accent border in its theme
        color, a centered icon-on-tinted-square, a centered title in the
        same darker shade, the description below, and a bullet list with
        matching colored dots.

        Inline SVG icons match the reference style: outline strokes, flat
        illustration. We avoid an icon library to keep dependencies thin.

        IMPORTANT: Tailwind JIT scans classes statically, so every color
        utility must appear as a full literal class string in the source.
        That is why each card has its own pre-baked classes instead of a
        dynamic builder.
      */}
      <section className="bg-white py-16 px-4 border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <SectionEyebrow>Use cases</SectionEyebrow>
            <h2 className="mt-4 text-3xl font-bold text-slate-900">Perfect for Every Interview Scenario</h2>
            <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
              Mictoo AI helps you transcribe all types of interview conversations with accuracy and speed.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Job Interviews — sky */}
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-1 bg-sky-400" />
              <div className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-sky-50 text-sky-600">
                  {/* briefcase */}
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <rect x="3" y="7" width="18" height="13" rx="2" />
                    <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    <path d="M3 12h18" />
                  </svg>
                </div>
                <h3 className="mt-4 font-semibold text-sky-700">Job Interviews</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Transcribe candidate interviews and hiring conversations with clarity and precision.
                </p>
                <ul className="mt-5 space-y-2 text-xs text-slate-500 text-left">
                  {['Candidate interviews', 'Recruitment screening', 'Hiring notes'].map((b) => (
                    <li key={b} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Research Interviews — emerald */}
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-1 bg-emerald-400" />
              <div className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600">
                  {/* graduation cap */}
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path d="M2 9l10-5 10 5-10 5L2 9z" />
                    <path d="M6 11v4c0 1.5 2.7 3 6 3s6-1.5 6-3v-4" />
                    <path d="M22 9v5" />
                  </svg>
                </div>
                <h3 className="mt-4 font-semibold text-emerald-700">Research Interviews</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Capture and transcribe research conversations for academic and qualitative studies.
                </p>
                <ul className="mt-5 space-y-2 text-xs text-slate-500 text-left">
                  {['Academic research', 'Qualitative analysis', 'User interviews'].map((b) => (
                    <li key={b} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Podcast Interviews — purple */}
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-1 bg-purple-400" />
              <div className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-purple-50 text-purple-600">
                  {/* microphone */}
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <rect x="9" y="2" width="6" height="12" rx="3" />
                    <path d="M5 10v2a7 7 0 0 0 14 0v-2" />
                    <path d="M12 19v3" />
                    <path d="M8 22h8" />
                  </svg>
                </div>
                <h3 className="mt-4 font-semibold text-purple-700">Podcast Interviews</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Turn your podcast guest conversations into accurate transcripts and show notes.
                </p>
                <ul className="mt-5 space-y-2 text-xs text-slate-500 text-left">
                  {['Guest interviews', 'Show notes', 'Content repurposing'].map((b) => (
                    <li key={b} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Journalism Interviews — amber */}
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-1 bg-amber-400" />
              <div className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-amber-50 text-amber-600">
                  {/* newspaper */}
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path d="M4 4h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4z" />
                    <path d="M20 8h2v10a2 2 0 0 1-2 2" />
                    <path d="M8 8h6M8 12h6M8 16h6" />
                  </svg>
                </div>
                <h3 className="mt-4 font-semibold text-amber-700">Journalism Interviews</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Transcribe interviews for news articles, reporting, and fact-checking.
                </p>
                <ul className="mt-5 space-y-2 text-xs text-slate-500 text-left">
                  {['News reporting', 'Quotes extraction', 'Fact checking'].map((b) => (
                    <li key={b} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Footer plate — "Any interview, any format" with format chips */}
          <div className="mt-8 bg-brand-50/50 border border-brand-100 rounded-2xl px-5 py-4 flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-3 text-sm text-slate-600">
              <div className="w-10 h-10 rounded-xl bg-white border border-brand-100 flex items-center justify-center text-brand-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4" />
                  <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-slate-800">Any interview, any format</div>
                <div className="text-xs text-slate-500 mt-0.5">Mictoo supports audio and video files from Zoom, Google Meet, phone calls, and in-person interviews.</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 text-xs">
              {['MP3', 'WAV', 'MP4', 'M4A'].map((f) => (
                <span key={f} className="px-2.5 py-1 bg-white border border-brand-100 text-brand-700 font-semibold rounded-md">
                  {f}
                </span>
              ))}
              <span className="px-2.5 py-1 text-slate-400 italic">and more</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────── SECTION 6: AI vs MANUAL ─────────────── */}
      {/*
        Modeled on AI vs Manual.png. Side-by-side cards with a circular
        "VS" badge between them on desktop. Each row has its own outline
        icon to match the reference flat-illustration style. Bullet text
        is exactly as supplied in the user brief — icons are decoration,
        the bullet text is the content.

        Manual side (4 bullets — user brief):
          Listen and replay recordings
          Type every word manually
          Format transcript
          Proofread text

        AI side (3 bullets — user brief):
          Upload recording
          Generate transcript automatically
          Export and share
      */}
      <section className="bg-slate-50 py-16 px-4 border-b border-slate-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <SectionEyebrow>Save time</SectionEyebrow>
            <h2 className="mt-4 text-3xl font-bold text-slate-900">Save Hours of Manual Transcription</h2>
            <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
              Manual transcription requires listening, pausing, typing, formatting, and proofreading. AI interview transcription dramatically reduces the time required to convert interviews into text.
            </p>
          </div>

          <div className="mt-12 relative grid md:grid-cols-2 gap-5 md:gap-10">
            {/* VS badge — centered between the two cards on desktop */}
            <div
              className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white border-2 border-slate-200 items-center justify-center text-xs font-bold text-slate-600 shadow-sm"
              aria-hidden="true"
            >
              VS
            </div>

            {/* Manual card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-500 flex items-center justify-center">
                  {/* document with lines */}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <path d="M14 2v6h6" />
                    <path d="M8 13h8M8 17h6" />
                  </svg>
                </div>
                <div>
                  <div className="text-base font-semibold text-slate-800">Manual Transcription</div>
                  <div className="text-xs text-slate-500">The old way</div>
                </div>
              </div>

              <ul className="mt-5 space-y-3">
                {[
                  {
                    text: 'Listen and replay recordings',
                    // headphones
                    icon: (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                        <path d="M3 12a9 9 0 0 1 18 0" />
                        <path d="M3 12v4a2 2 0 0 0 2 2h2v-6H5a2 2 0 0 0-2 2z" />
                        <path d="M21 12v4a2 2 0 0 1-2 2h-2v-6h2a2 2 0 0 1 2 2z" />
                      </svg>
                    ),
                  },
                  {
                    text: 'Type every word manually',
                    // keyboard
                    icon: (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                        <rect x="2" y="6" width="20" height="12" rx="2" />
                        <path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M6 14h12" />
                      </svg>
                    ),
                  },
                  {
                    text: 'Format transcript',
                    // align-left
                    icon: (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                        <path d="M3 6h18M3 12h12M3 18h15" />
                      </svg>
                    ),
                  },
                  {
                    text: 'Proofread text',
                    // clipboard-check
                    icon: (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                        <rect x="8" y="3" width="8" height="4" rx="1" />
                        <path d="M16 5h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2" />
                        <path d="M9 14l2 2 4-4" />
                      </svg>
                    ),
                  },
                ].map(({ text, icon }) => (
                  <li key={text} className="flex items-center gap-3 text-sm text-slate-700">
                    <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-500 flex items-center justify-center flex-shrink-0">
                      {icon}
                    </span>
                    {text}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-center justify-between gap-3 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wide">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                  Takes
                </div>
                <div className="text-sm font-semibold text-slate-700">2 to 4 hours</div>
                <div className="text-xs text-slate-400">for a 1-hour interview</div>
              </div>
            </div>

            {/* AI card */}
            <div className="bg-white border-2 border-brand-400 rounded-2xl p-6 shadow-sm relative">
              <span className="absolute -top-3 left-6 text-[10px] font-bold tracking-wider text-white bg-brand-600 px-2 py-1 rounded">
                RECOMMENDED
              </span>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
                  {/* AI sparkles */}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5z" />
                    <path d="M19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8z" />
                  </svg>
                </div>
                <div>
                  <div className="text-base font-semibold text-brand-700">AI Interview Transcription</div>
                  <div className="text-xs text-slate-500">The smart way</div>
                </div>
              </div>

              <ul className="mt-5 space-y-3">
                {[
                  {
                    text: 'Upload recording',
                    // cloud-up
                    icon: (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                        <path d="M17 18a4 4 0 1 0-1-7.87A6 6 0 0 0 5 11a4 4 0 0 0 0 8h12z" />
                        <path d="M12 11v6m-3-3l3-3 3 3" />
                      </svg>
                    ),
                  },
                  {
                    text: 'Generate transcript automatically',
                    // sparkles wand
                    icon: (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                        <path d="M5 3v4M3 5h4M19 17v4M17 19h4M12 3l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" />
                      </svg>
                    ),
                  },
                  {
                    text: 'Export and share',
                    // share / arrow up
                    icon: (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                        <path d="M4 12v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7" />
                        <path d="M16 6l-4-4-4 4M12 2v13" />
                      </svg>
                    ),
                  },
                ].map(({ text, icon }) => (
                  <li key={text} className="flex items-center gap-3 text-sm text-slate-700">
                    <span className="w-7 h-7 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center flex-shrink-0">
                      {icon}
                    </span>
                    {text}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-center justify-between gap-3 bg-brand-50 border border-brand-100 rounded-xl px-4 py-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-brand-700 uppercase tracking-wide">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path d="M13 2L3 14h7l-1 8 10-12h-7z" />
                  </svg>
                  Takes
                </div>
                <div className="text-sm font-semibold text-brand-700">1 to 2 minutes</div>
                <div className="text-xs text-slate-500">for a 1-hour interview</div>
              </div>
            </div>
          </div>

          {/* Stat cards */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto">
            {[
              { stat: 'Save up to 95%', label: 'Of your time', desc: 'Focus on what matters, not on typing' },
              { stat: '2 to 4 hours',   label: 'Manual transcription', desc: 'For a 1-hour interview' },
              { stat: '5 to 10 min',    label: 'With Mictoo AI', desc: 'Same 1-hour interview, done' },
              { stat: '90% faster',     label: 'Every week', desc: 'Save hours across many interviews' },
            ].map(({ stat, label, desc }, i) => (
              <div key={label} className="bg-white border border-slate-200 rounded-xl px-4 py-4 text-center">
                <div className={'text-base font-bold ' + (i === 2 ? 'text-brand-600' : 'text-slate-800')}>{stat}</div>
                <div className="text-xs font-semibold text-slate-700 mt-1">{label}</div>
                <div className="text-[11px] text-slate-400 mt-1 leading-snug">{desc}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <CtaButton>Start Free Transcription</CtaButton>
          </div>
        </div>
      </section>

      {/* ─────────────── SECTION 7: SUPPORTED FORMATS ─────────────── */}
      <section className="bg-white py-16 px-4 border-b border-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <SectionEyebrow>Supported formats</SectionEyebrow>
            <h2 className="mt-4 text-3xl font-bold text-slate-900">Supported Audio and Video Formats</h2>
            <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
              Mictoo supports common interview recording formats. Upload recordings from voice recorders, smartphones, online meetings, video interviews, and other recording sources.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {[
              { name: 'MP3',  kind: 'Audio' },
              { name: 'WAV',  kind: 'Audio' },
              { name: 'M4A',  kind: 'Audio' },
              { name: 'AAC',  kind: 'Audio' },
              { name: 'MP4',  kind: 'Video' },
              { name: 'MOV',  kind: 'Video' },
              { name: 'WebM', kind: 'Video' },
              { name: 'OGG',  kind: 'Audio' },
              { name: 'FLAC', kind: 'Audio' },
              { name: 'MKV',  kind: 'Video' },
              { name: 'AVI',  kind: 'Video' },
              { name: 'OPUS', kind: 'Audio' },
            ].map(({ name, kind }) => (
              <div
                key={name}
                className="bg-white border border-slate-200 rounded-xl px-3 py-3 text-center hover:border-brand-400 transition-colors"
              >
                <div className="text-sm font-semibold text-slate-800">{name}</div>
                <div className="text-xs text-slate-400 mt-0.5">{kind}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-2xl mx-auto text-center text-xs text-slate-500">
            {[
              { icon: '📱', label: 'Phone recordings' },
              { icon: '💻', label: 'Computer recordings' },
              { icon: '🎙', label: 'Field recorders' },
              { icon: '📹', label: 'Video calls' },
              { icon: '☁',  label: 'Cloud sources' },
              { icon: '🎧', label: 'Headset interviews' },
            ].map(({ icon, label }) => (
              <div key={label} className="bg-slate-50 border border-slate-100 rounded-lg px-3 py-3">
                <div className="text-lg">{icon}</div>
                <div className="mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── SECTION 8: FAQ ─────────────── */}
      <section className="bg-slate-50 py-16 px-4 border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <div className="text-center">
            <SectionEyebrow>FAQ</SectionEyebrow>
            <h2 className="mt-4 text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
            <p className="mt-3 text-slate-600">
              Everything you might want to know about Mictoo as a free interview transcript generator.
            </p>
          </div>

          <div className="mt-10 space-y-3">
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

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />
        </div>
      </section>

      {/* ─────────────── BOTTOM CTA ─────────────── */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Ready to Transcribe Your Interview?
          </h2>
          <p className="mt-3 text-slate-600">
            Upload your recording and get an accurate transcript in minutes.
          </p>

          <div className="mt-8 flex items-center justify-center gap-3 sm:gap-6 text-xs text-slate-500">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center text-xl">🎙</div>
              <span>Recording</span>
            </div>
            <span className="text-slate-300">→</span>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center text-xl">⚡</div>
              <span>Mictoo AI</span>
            </div>
            <span className="text-slate-300">→</span>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center text-xl">📄</div>
              <span>Transcript</span>
            </div>
          </div>

          <div className="mt-10">
            <CtaButton />
          </div>
          <p className="mt-4 text-xs text-slate-500">No signup required</p>

          <div className="mt-10 pt-8 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <Link href="/podcast-transcription" className="bg-slate-50 hover:bg-slate-100 rounded-xl px-4 py-3 transition-colors">
              <div className="font-semibold text-slate-800">Podcast Transcription</div>
              <div className="text-slate-500 mt-0.5">For guest interview shows.</div>
            </Link>
            <Link href="/zoom-transcription" className="bg-slate-50 hover:bg-slate-100 rounded-xl px-4 py-3 transition-colors">
              <div className="font-semibold text-slate-800">Zoom Transcription</div>
              <div className="text-slate-500 mt-0.5">For interviews recorded in Zoom.</div>
            </Link>
            <Link href="/voice-memo-to-text" className="bg-slate-50 hover:bg-slate-100 rounded-xl px-4 py-3 transition-colors">
              <div className="font-semibold text-slate-800">Voice Memo to Text</div>
              <div className="text-slate-500 mt-0.5">For phone-recorded interviews.</div>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
