import AboutLayout from '@/components/AboutLayout'

const LOCALE_ALTERNATES = {
  'en': 'https://mictoo.com/about',
  'fr': 'https://mictoo.com/fr/about',
  'de': 'https://mictoo.com/de/about',
  'es': 'https://mictoo.com/es/about',
  'ru': 'https://mictoo.com/ru/about',
  'it': 'https://mictoo.com/it/about',
  'x-default': 'https://mictoo.com/about',
}

export const metadata = {
  title: 'Chi siamo — Mictoo',
  description: 'Informazioni su Mictoo, lo strumento gratuito di trascrizione audio e video basato su IA.',
  alternates: { canonical: 'https://mictoo.com/it/about', languages: LOCALE_ALTERNATES },
}

export default function ItAboutPage() {
  return (
    <AboutLayout
      strings={{
        h1: 'Chi è Mictoo',
        lead: "Mictoo è uno strumento gratuito di trascrizione audio e video, senza registrazione, pensato per chiunque debba convertire rapidamente e con precisione il parlato in testo.",
        ourWhy: "Abbiamo creato Mictoo perché una buona trascrizione non dovrebbe richiedere abbonamenti, account o competenze tecniche. Carica il file, ottieni il testo. Tutto qui.",
        whatPowersHeading: 'Cosa muove Mictoo?',
        whatPowersBody: "Mictoo si basa su Whisper di OpenAI — lo stesso modello di riconoscimento vocale usato in ChatGPT, addestrato su 680.000 ore di audio multilingua. Supporta oltre 50 lingue con rilevamento automatico ed è considerato uno dei modelli di trascrizione più precisi disponibili. Mictoo esegue Whisper tramite l'API di Groq (ospitata negli USA, modello whisper-large-v3) per velocità ed efficienza dei costi, con l'API Whisper di OpenAI come fallback automatico. I file vengono inviati direttamente al provider di trascrizione e non vengono mai memorizzati sui server di Mictoo; né Groq né OpenAI usano i dati API per addestrare i modelli, e OpenAI conserva i dati API solo per un massimo di 30 giorni di monitoraggio anti-abuso prima della cancellazione.",
        principlesHeading: 'I nostri principi',
        principles: [
          { label: 'Gratis.', body: 'Nessun costo nascosto, nessun periodo di prova, nessuna carta di credito richiesta.' },
          { label: 'Privato.', body: 'I tuoi file non vengono mai memorizzati. Vengono elaborati e immediatamente eliminati.' },
          { label: 'Semplice.', body: 'Una pagina, uno strumento, zero attriti.' },
          { label: 'Preciso.', body: 'Usiamo il miglior modello IA disponibile per la qualità della trascrizione.' },
        ],
        contactHeading: 'Contattaci',
        contactPrefix: 'Hai un feedback, una richiesta o una domanda?',
        contactLinkLabel: 'Scrivici',
        contactSuffix: '— ti rispondiamo personalmente.',
      }}
    />
  )
}
