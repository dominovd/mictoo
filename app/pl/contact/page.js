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
  'ja': 'https://mictoo.com/ja/contact',
  'x-default': 'https://mictoo.com/contact',
}

export const metadata = {
  title: 'Kontakt — Mictoo',
  description: 'Skontaktuj się z zespołem Mictoo w sprawie feedbacku, próśb o funkcje lub pytań.',
  alternates: { canonical: 'https://mictoo.com/pl/contact', languages: LOCALE_ALTERNATES },
}

export default function PlContactPage() {
  return (
    <ContactLayout
      strings={{
        h1: 'Skontaktuj się',
        lead: 'Masz feedback, prośbę o funkcję lub problem z plikiem? Chętnie wysłuchamy.',
        emailHeading: 'Email',
        emailNote: 'Zwykle odpowiadamy w ciągu 1-2 dni roboczych.',
        topicsHeading: 'Tematy, którymi się zajmujemy',
        topics: [
          'Problemy techniczne (transkrypcja nie działa, obsługiwane formaty itp.)',
          'Prośby o funkcje i sugestie',
          'Prywatność i przetwarzanie danych',
          'Współpraca i partnerstwa',
          'Prasa i media',
        ],
      }}
    />
  )
}
