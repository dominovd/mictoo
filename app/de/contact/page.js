import ContactLayout from '@/components/ContactLayout'

const LOCALE_ALTERNATES = {
  'en': 'https://mictoo.com/contact',
  'fr': 'https://mictoo.com/fr/contact',
  'de': 'https://mictoo.com/de/contact',
  'es': 'https://mictoo.com/es/contact',
  'ru': 'https://mictoo.com/ru/contact',
  'it': 'https://mictoo.com/it/contact',
  'pt': 'https://mictoo.com/pt/contact',
  'x-default': 'https://mictoo.com/contact',
}

export const metadata = {
  title: 'Kontakt — Mictoo',
  description: 'Kontaktieren Sie das Mictoo-Team. Wir lesen jede Nachricht.',
  alternates: { canonical: 'https://mictoo.com/de/contact', languages: LOCALE_ALTERNATES },
}

export default function DeContactPage() {
  return (
    <ContactLayout
      privacyHref="/de/privacy"
      strings={{
        h1: 'Kontaktieren Sie uns',
        lead: 'Haben Sie eine Frage, Feedback oder einen Funktionswunsch? Wir freuen uns auf Ihre Nachricht. Wir lesen jede Nachricht und antworten innerhalb von 24 Stunden.',
        privacyPrefix: 'Für Datenschutzfragen siehe unsere',
        privacyLinkLabel: 'Datenschutzerklärung',
        privacySuffix: '.',
      }}
    />
  )
}
