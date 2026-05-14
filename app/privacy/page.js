import InfoSectionsLayout from '@/components/InfoSectionsLayout'

const LOCALE_ALTERNATES = {
  'en': 'https://mictoo.com/privacy',
  'fr': 'https://mictoo.com/fr/privacy',
  'de': 'https://mictoo.com/de/privacy',
  'es': 'https://mictoo.com/es/privacy',
  'ru': 'https://mictoo.com/ru/privacy',
  'x-default': 'https://mictoo.com/privacy',
}

export const metadata = {
  title: 'Privacy Policy — Mictoo',
  description: 'Privacy policy for Mictoo. We do not store your audio files or transcripts.',
  alternates: {
    canonical: 'https://mictoo.com/privacy',
    languages: LOCALE_ALTERNATES,
  },
}

export default function PrivacyPage() {
  return (
    <InfoSectionsLayout
      h1="Privacy Policy"
      lastUpdated="Last updated: May 2026"
      sections={[
        {
          heading: '1. What we collect',
          body: 'Mictoo does not require you to create an account and does not collect any personal information. When you upload a file, it is sent directly to the AI API for transcription. We do not store, log, or retain your audio or video files.',
        },
        {
          heading: '2. File processing',
          body: "Uploaded files are transmitted securely to our AI provider's servers for speech recognition. Files are processed in real time and are not stored on our servers or on our provider's servers beyond the duration of a single API request.",
        },
        {
          heading: '3. Analytics & advertising',
          body: (
            <>
              We may display ads via Google AdSense. Google may use cookies to serve relevant ads. You can opt out via{' '}
              <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">Google Ad Settings</a>
              . We may use anonymous analytics (e.g. page view counts) to understand usage. No personally identifiable data is collected.
            </>
          ),
        },
        {
          heading: '4. Cookies',
          body: 'Mictoo itself does not set cookies. Third-party services such as Google AdSense may set their own cookies on your device.',
        },
        {
          heading: "5. Children's privacy",
          body: 'Mictoo is not directed at children under 13. We do not knowingly collect data from children.',
        },
        {
          heading: '6. Contact',
          body: (
            <>
              Questions about this policy? Email us at{' '}
              <a href="mailto:info@mictoo.com" className="text-brand-600 hover:underline">info@mictoo.com</a>.
            </>
          ),
        },
      ]}
    />
  )
}
