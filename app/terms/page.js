export const metadata = {
  title: 'Terms of Service — Mictoo',
  description: 'Terms of service for Mictoo free transcription tool.',
  alternates: { canonical: 'https://mictoo.com/terms' },
}

export default function TermsPage() {
  return (
    <section className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-slate-900 mb-2">Terms of Service</h1>
      <p className="text-sm text-slate-400 mb-10">Last updated: May 2025</p>

      <div className="space-y-8 text-slate-600 text-sm leading-relaxed">
        <div>
          <h2 className="text-lg font-semibold text-slate-800 mb-2">1. Acceptance of terms</h2>
          <p>
            By using Mictoo ("the Service"), you agree to these Terms of Service. If you do not
            agree, please do not use the Service.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-800 mb-2">2. Use of the service</h2>
          <p>
            Mictoo provides a free audio and video transcription tool powered by OpenAI Whisper.
            You may use the Service for personal and commercial purposes, provided that:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>You only upload files you have the right to transcribe.</li>
            <li>You do not attempt to abuse, overload, or reverse-engineer the Service.</li>
            <li>You do not upload content that is illegal or violates third-party rights.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-800 mb-2">3. Intellectual property</h2>
          <p>
            You retain full ownership of the files you upload and the transcripts you generate.
            We claim no rights over your content.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-800 mb-2">4. Disclaimer of warranties</h2>
          <p>
            The Service is provided "as is" without warranties of any kind. We do not guarantee
            100% transcription accuracy. Use the output at your own discretion.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-800 mb-2">5. Limitation of liability</h2>
          <p>
            To the fullest extent permitted by law, Mictoo and its operators shall not be liable
            for any indirect, incidental, or consequential damages arising from your use of the
            Service.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-800 mb-2">6. Changes to terms</h2>
          <p>
            We may update these terms at any time. Continued use of the Service after changes
            are posted constitutes acceptance of the updated terms.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-800 mb-2">7. Contact</h2>
          <p>
            Questions? Email us at{' '}
            <a href="mailto:info@mictoo.com" className="text-brand-600 hover:underline">
              info@mictoo.com
            </a>.
          </p>
        </div>
      </div>
    </section>
  )
}
