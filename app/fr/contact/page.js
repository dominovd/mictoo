import ContactLayout from '@/components/ContactLayout'

const LOCALE_ALTERNATES = {
  'en': 'https://mictoo.com/contact',
  'fr': 'https://mictoo.com/fr/contact',
  'de': 'https://mictoo.com/de/contact',
  'es': 'https://mictoo.com/es/contact',
  'ru': 'https://mictoo.com/ru/contact',
  'it': 'https://mictoo.com/it/contact',
  'pt': 'https://mictoo.com/pt/contact',
  'pl': 'https://mictoo.com/pl/contact',
  'x-default': 'https://mictoo.com/contact',
}

export const metadata = {
  title: 'Contact — Mictoo',
  description: "Contactez l'équipe Mictoo. Nous lisons chaque message.",
  alternates: { canonical: 'https://mictoo.com/fr/contact', languages: LOCALE_ALTERNATES },
}

export default function FrContactPage() {
  return (
    <ContactLayout
      privacyHref="/fr/privacy"
      strings={{
        h1: 'Nous contacter',
        lead: "Une question, un retour ou une suggestion de fonctionnalité ? Nous serions ravis de vous lire. Nous lisons chaque message et essayons de répondre sous 24 heures.",
        privacyPrefix: 'Pour les questions de confidentialité, consultez notre',
        privacyLinkLabel: 'Politique de confidentialité',
        privacySuffix: '.',
      }}
    />
  )
}
