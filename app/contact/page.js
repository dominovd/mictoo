import ContactLayout from '@/components/ContactLayout'

const LOCALE_ALTERNATES = {
  'en': 'https://mictoo.com/contact',
  'fr': 'https://mictoo.com/fr/contact',
  'de': 'https://mictoo.com/de/contact',
  'es': 'https://mictoo.com/es/contact',
  'ru': 'https://mictoo.com/ru/contact',
  'it': 'https://mictoo.com/it/contact',
  'x-default': 'https://mictoo.com/contact',
}

export const metadata = {
  title: 'Contact — Mictoo',
  description: 'Get in touch with the Mictoo team. We read every message.',
  alternates: {
    canonical: 'https://mictoo.com/contact',
    languages: LOCALE_ALTERNATES,
  },
}

export default function ContactPage() {
  return (
    <ContactLayout
      privacyHref="/privacy"
      strings={{
        h1: 'Contact us',
        lead: "Have a question, feedback, or feature request? We'd love to hear from you. We read every message and aim to reply within 24 hours.",
        privacyPrefix: 'For privacy matters, see our',
        privacyLinkLabel: 'Privacy Policy',
        privacySuffix: '.',
      }}
    />
  )
}
