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
  title: 'Contatti — Mictoo',
  description: "Contatta il team di Mictoo per feedback, richieste di funzionalità o domande.",
  alternates: { canonical: 'https://mictoo.com/it/contact', languages: LOCALE_ALTERNATES },
}

export default function ItContactPage() {
  return (
    <ContactLayout
      strings={{
        h1: 'Contattaci',
        lead: "Hai un feedback, una richiesta di funzionalità o un problema con un file? Saremo felici di sentirti.",
        emailHeading: 'Email',
        emailNote: 'Solitamente rispondiamo entro 1-2 giorni lavorativi.',
        topicsHeading: 'Argomenti che gestiamo',
        topics: [
          'Problemi tecnici (la trascrizione non funziona, formati supportati, ecc.)',
          'Richieste di funzionalità e suggerimenti',
          'Privacy e gestione dei dati',
          'Collaborazioni e partnership',
          'Stampa e media',
        ],
      }}
    />
  )
}
