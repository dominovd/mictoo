import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/sermon-transcription',
  'fr': 'https://mictoo.com/fr/sermon-transcription',
  'de': 'https://mictoo.com/de/sermon-transcription',
  'es': 'https://mictoo.com/es/sermon-transcription',
  'ru': 'https://mictoo.com/ru/sermon-transcription',
  'it': 'https://mictoo.com/it/sermon-transcription',
  'pt': 'https://mictoo.com/pt/sermon-transcription',
  'pl': 'https://mictoo.com/pl/sermon-transcription',
  'ja': 'https://mictoo.com/ja/sermon-transcription',
  'ko': 'https://mictoo.com/ko/sermon-transcription',
  'x-default': 'https://mictoo.com/sermon-transcription',
}

export const metadata = {
  title: 'Trascrizione di sermoni — Generatore gratis di transcript | Mictoo',
  description: "Trascrivi gratis sermoni e audio di chiesa in testo. Ideale per blog, note di studio e accessibilità. Supporta MP3, MP4, M4A. Senza registrazione.",
  alternates: { canonical: 'https://mictoo.com/it/sermon-transcription', languages: LANGS },
}

export default function ItSermonPage() {
  return (
    <LandingLayout
      badge="Sermoni · Chiesa · Gratis"
      h1={<>Trascrizione di sermoni<br /><span className="text-brand-600">Generatore gratis di transcript</span></>}
      subtitle="Trasforma le registrazioni dei sermoni in testo pulito in pochi secondi. Ideale per blog di chiesa, guide di studio, post per i social e per rendere accessibili i messaggi a chi ha difficoltà uditive."
      defaultLanguage="it"
      features={[
        { icon: '📖', title: 'Riutilizza ogni sermone', desc: 'Trasforma un sermone in articolo di blog, devozionale, newsletter, guida di studio e citazioni pronte per i social. Moltiplica la tua portata senza lavoro extra.' },
        { icon: '♿', title: 'Accessibilità', desc: 'Offri trascrizioni così che i membri sordi, ipoudenti o che partecipano da remoto possano vivere pienamente il messaggio.' },
        { icon: '🌐', title: 'Multilingua', desc: 'Funziona con italiano, inglese, spagnolo, portoghese, coreano, francese, russo e oltre 45 altre lingue. Perfetto per congregazioni multilingue.' },
      ]}
      faq={[
        { q: 'Come trasformare in testo una registrazione di un sermone?', a: 'Esporta la registrazione dal mixer della chiesa, dal feed podcast o da YouTube come MP3, MP4 o M4A. Carica il file sopra — Mictoo lo trascrive in pochi secondi.' },
        { q: 'Posso trascrivere sermoni dal canale YouTube della nostra chiesa?', a: 'Sì. Per il tuo canale: YouTube Studio → Contenuti → clicca sul video → Scarica. Carica il file su Mictoo. Per canali esterni serve il permesso — molti ministeri condividono i download audio tramite il feed podcast.' },
        { q: 'E con i versetti biblici e i nomi propri?', a: 'La trascrizione IA gestisce bene versetti e nomi comuni, ma talvolta sbaglia nomi biblici rari o terminologia specifica della tua chiesa. Correggili nell\'editor del browser prima del download — di solito 30 secondi di rilettura.' },
        { q: 'Qual è la durata massima del sermone?', a: 'Fino a 25 MB per file. Un sermone di 30 minuti a 128 kbps entra comodamente. Per messaggi più lunghi (45-60 minuti) abbassa il bitrate a 64 kbps mono o dividi in due parti.' },
        { q: 'I file restano privati?', a: 'Sì. I sermoni vengono elaborati e immediatamente eliminati. Non memorizziamo né l\'audio né il contenuto della trascrizione.' },
      ]}
      relatedLinks={[
        { href: '/it/podcast-transcription', label: 'Trascrizione di podcast' },
        { href: '/it/lecture-transcription', label: 'Trascrizione di lezioni' },
        { href: '/it', label: 'Tutti i formati' },
      ]}
    />
  )
}
