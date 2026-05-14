export const metadata = {
  title: 'About Mictoo — Free AI Transcription Tool',
  description: 'Learn about Mictoo, a free audio and video transcription tool powered by AI. No signup required.',
  alternates: { canonical: 'https://mictoo.com/about' },
}

export default function AboutPage() {
  return (
    <section className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-slate-900 mb-6">About Mictoo</h1>

      <div className="space-y-6 text-slate-600 text-sm leading-relaxed">
        <p className="text-base">
          Mictoo is a free, no-signup audio and video transcription tool built for anyone who
          needs to convert speech to text quickly and accurately.
        </p>

        <p>
          We built Mictoo because great transcription shouldn't require a subscription, an
          account, or technical skills. Drop your file, get your text. That's it.
        </p>

        <h2 className="text-lg font-semibold text-slate-800 mt-8 mb-2">What powers Mictoo?</h2>
        <p>
          Mictoo is powered by a state-of-the-art AI speech recognition model trained on
          hundreds of thousands of hours of multilingual audio. It supports over 50 languages
          with automatic language detection and is widely regarded as one of the most accurate
          free transcription engines available.
        </p>

        <h2 className="text-lg font-semibold text-slate-800 mt-8 mb-2">Our principles</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Free.</strong> No hidden costs, no trial periods, no credit card required.</li>
          <li><strong>Private.</strong> Your files are never stored. They are processed and immediately discarded.</li>
          <li><strong>Simple.</strong> One page, one tool, zero friction.</li>
          <li><strong>Accurate.</strong> We use the best available AI model for transcription quality.</li>
        </ul>

        <h2 className="text-lg font-semibold text-slate-800 mt-8 mb-2">Get in touch</h2>
        <p>
          Have feedback, a feature request, or a question?{' '}
          <a href="/contact" className="text-brand-600 hover:underline">Contact us</a> or email{' '}
          <a href="mailto:info@mictoo.com" className="text-brand-600 hover:underline">
            info@mictoo.com
          </a>.
        </p>
      </div>
    </section>
  )
}
