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
          body: "Mictoo does not require an account and does not collect personal information. When you upload a file, your browser sends it directly to Vercel Blob, Vercel's US-hosted file storage. The file sits there briefly so our server can hand it off to OpenAI's Whisper API for transcription, and it is automatically deleted from Vercel Blob as soon as transcription finishes — typically within a minute. An hourly cleanup job sweeps any leftover uploads that for some reason weren't deleted right away. Mictoo keeps no permanent copy of your audio, video, or the transcript on its own servers.",
        },
        {
          heading: '2. File processing and our AI provider',
          body: "Files are transmitted over HTTPS to OpenAI's Whisper API and processed in real time. Per OpenAI's API data policy, your audio is not used for model training, and OpenAI retains API data only for a maximum of 30 days of abuse monitoring before deleting it. Mictoo itself keeps no copy of the audio or the transcript once your browser session ends.",
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
