import InfoSectionsLayout from '@/components/InfoSectionsLayout'

const LOCALE_ALTERNATES = {
  'en': 'https://mictoo.com/terms',
  'fr': 'https://mictoo.com/fr/terms',
  'de': 'https://mictoo.com/de/terms',
  'es': 'https://mictoo.com/es/terms',
  'ru': 'https://mictoo.com/ru/terms',
  'it': 'https://mictoo.com/it/terms',
  'pt': 'https://mictoo.com/pt/terms',
  'pl': 'https://mictoo.com/pl/terms',
  'x-default': 'https://mictoo.com/terms',
}

export const metadata = {
  title: 'Terms of Service — Mictoo',
  description: 'Terms of service for Mictoo free transcription tool.',
  alternates: {
    canonical: 'https://mictoo.com/terms',
    languages: LOCALE_ALTERNATES,
  },
}

export default function TermsPage() {
  return (
    <InfoSectionsLayout
      h1="Terms of Service"
      lastUpdated="Last updated: May 2026"
      sections={[
        {
          heading: '1. Acceptance of terms',
          body: 'By using Mictoo ("the Service"), you agree to these Terms of Service. If you do not agree, please do not use the Service.',
        },
        {
          heading: '2. Use of the service',
          body: 'Mictoo provides a free audio and video transcription tool powered by AI. You may use the Service for personal and commercial purposes, provided that:',
          list: [
            'You only upload files you have the right to transcribe.',
            'You do not attempt to abuse, overload, or reverse-engineer the Service.',
            'You do not upload content that is illegal or violates third-party rights.',
          ],
        },
        {
          heading: '3. Intellectual property',
          body: 'You retain full ownership of the files you upload and the transcripts you generate. We claim no rights over your content.',
        },
        {
          heading: '4. Disclaimer of warranties',
          body: 'The Service is provided "as is" without warranties of any kind. We do not guarantee 100% transcription accuracy. Use the output at your own discretion.',
        },
        {
          heading: '5. Limitation of liability',
          body: 'To the fullest extent permitted by law, Mictoo and its operators shall not be liable for any indirect, incidental, or consequential damages arising from your use of the Service.',
        },
        {
          heading: '6. Changes to terms',
          body: 'We may update these terms at any time. Continued use of the Service after changes are posted constitutes acceptance of the updated terms.',
        },
        {
          heading: '7. Contact',
          body: (
            <>
              Questions? Email us at{' '}
              <a href="mailto:info@mictoo.com" className="text-brand-600 hover:underline">info@mictoo.com</a>.
            </>
          ),
        },
      ]}
    />
  )
}
