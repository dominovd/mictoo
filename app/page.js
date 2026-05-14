import UploadZone from '@/components/UploadZone'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white border-b border-slate-100 py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <span className="inline-block bg-brand-50 text-brand-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
            Free · No signup · 50+ languages
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4 leading-tight">
            Transcribe Audio &amp; Video<br />
            <span className="text-brand-600">to Text Online, Free</span>
          </h1>
          <p className="text-lg text-slate-500 mb-8">
            Upload any audio or video file and get an accurate text transcript in seconds.
            Powered by OpenAI Whisper. No account required.
          </p>
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
                desc: 'Drag & drop or click to upload. Supports MP3, MP4, WAV, M4A, OGG, WEBM, FLAC. Up to 25MB.',
              },
              {
                step: '2',
                icon: '⚡',
                title: 'AI transcribes it',
                desc: 'OpenAI Whisper converts your audio to text with high accuracy across 50+ languages.',
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

      {/* SEO — formats supported */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-slate-900 text-center mb-4">
          Supported file formats
        </h2>
        <p className="text-center text-slate-500 mb-8">
          Mictoo transcribes all common audio and video formats.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {['MP3', 'MP4', 'WAV', 'M4A', 'OGG', 'WEBM', 'FLAC', 'MPEG'].map(fmt => (
            <span key={fmt} className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-mono font-semibold text-slate-700 shadow-sm">
              .{fmt.toLowerCase()}
            </span>
          ))}
        </div>
      </section>

      {/* FAQ — rich SEO text */}
      <section className="bg-white border-t border-slate-100 py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-10 text-center">
            Frequently asked questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: 'Is Mictoo really free?',
                a: 'Yes. Mictoo is completely free for files up to 25MB. No account, no credit card, no hidden fees.',
              },
              {
                q: 'How accurate is the transcription?',
                a: 'Mictoo uses OpenAI Whisper, one of the most accurate speech recognition models available. Accuracy depends on audio quality and accent, but typically exceeds 95% for clear recordings.',
              },
              {
                q: 'What languages are supported?',
                a: 'Whisper supports over 50 languages including English, Spanish, French, German, Portuguese, Russian, Japanese, Chinese, and more. Language is detected automatically.',
              },
              {
                q: 'Is my file stored or kept on your servers?',
                a: 'No. Files are processed and immediately discarded. We never store your audio or transcripts.',
              },
              {
                q: 'What is the maximum file size?',
                a: 'Up to 25MB — the limit set by the OpenAI Whisper API. For longer files, consider compressing your audio first or splitting it into parts.',
              },
            ].map(({ q, a }) => (
              <div key={q}>
                <h3 className="font-semibold text-slate-800 mb-1">{q}</h3>
                <p className="text-sm text-slate-500">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
