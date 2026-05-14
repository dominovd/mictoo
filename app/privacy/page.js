export const metadata = {
  title: 'Privacy Policy — Mictoo',
  description: 'Privacy policy for Mictoo. We do not store your audio files or transcripts.',
  alternates: { canonical: 'https://mictoo.com/privacy' },
}

export default function PrivacyPage() {
  return (
    <section className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-slate-900 mb-2">Privacy Policy</h1>
      <p className="text-sm text-slate-400 mb-10">Last updated: May 2025</p>

      <div className="space-y-8 text-slate-600 text-sm leading-relaxed">
        <div>
          <h2 className="text-lg font-semibold text-slate-800 mb-2">1. What we collect</h2>
          <p>
            Mictoo does not require you to create an account and does not collect any personal
            information. When you upload a file, it is sent directly to the AI API
            for transcription. We do not store, log, or retain your audio or video files.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-800 mb-2">2. File processing</h2>
          <p>
            Uploaded files are transmitted securely to our AI provider's servers for speech
            recognition. Files are processed in real time and are not stored on our servers or
            on our provider's servers beyond the duration of a single API request.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-800 mb-2">3. Analytics & advertising</h2>
          <p>
            We may display ads via Google AdSense. Google may use cookies to serve relevant ads.
            You can opt out via{' '}
            <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">
              Google Ad Settings
            </a>.
            We may use anonymous analytics (e.g. page view counts) to understand usage. No
            personally identifiable data is collected.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-800 mb-2">4. Cookies</h2>
          <p>
            Mictoo itself does not set cookies. Third-party services such as Google AdSense may
            set their own cookies on your device.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-800 mb-2">5. Children's privacy</h2>
          <p>
            Mictoo is not directed at children under 13. We do not knowingly collect data from
            children.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-800 mb-2">6. Contact</h2>
          <p>
            Questions about this policy? Email us at{' '}
            <a href="mailto:info@mictoo.com" className="text-brand-600 hover:underline">
              info@mictoo.com
            </a>.
          </p>
        </div>
      </div>
    </section>
  )
}
