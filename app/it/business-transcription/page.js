import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/business-transcription',
  'fr': 'https://mictoo.com/fr/business-transcription',
  'de': 'https://mictoo.com/de/business-transcription',
  'es': 'https://mictoo.com/es/business-transcription',
  'ru': 'https://mictoo.com/ru/business-transcription',
  'it': 'https://mictoo.com/it/business-transcription',
  'pt': 'https://mictoo.com/pt/business-transcription',
  'pl': 'https://mictoo.com/pl/business-transcription',
  'ja': 'https://mictoo.com/ja/business-transcription',
  'x-default': 'https://mictoo.com/business-transcription',
}

export const metadata = {
  title: 'Trascrizione aziendale — Riunioni, call e interviste in testo | Mictoo',
  description: 'Trascrizione aziendale gratuita per riunioni, call con clienti, interviste utente e demo prodotto. Senza registrazione. Audio o video, fino a 25 MB.',
  alternates: { canonical: 'https://mictoo.com/it/business-transcription', languages: LANGS },
}

export default function ItBusinessPage() {
  return (
    <LandingLayout
      badge="Aziende · Team · Gratis"
      h1={<>Trascrizione aziendale<br /><span className="text-brand-600">Riunioni, call, interviste in testo</span></>}
      subtitle="Trasforma riunioni, call con clienti, interviste utente e demo in trascrizioni pulite. Pronte per Notion, Confluence, CRM o report. Gratis, senza account."
      defaultLanguage="it"
      features={[
        { icon: '💼', title: 'Workflow aziendali', desc: 'Riunioni di team, call vendite, ricerca utente, interviste candidati — converti audio in testo ricercabile e condivisibile.' },
        { icon: '📊', title: 'Riassunto IA incluso', desc: 'Oltre alla trascrizione, ottieni automaticamente un riassunto IA con punti chiave e action item. Pronto da incollare nel report o nel CRM.' },
        { icon: '🔒', title: 'Sicurezza e privacy', desc: 'I file vengono elaborati e immediatamente eliminati. Non memorizziamo audio o trascrizioni sui nostri server.' },
      ]}
      faq={[
        { q: 'Mictoo è adatto per riunioni di lavoro confidenziali?', a: "Per contenuti regolamentati (HIPAA, dati GDPR-protetti), verifica la policy aziendale sui servizi IA di terze parti. Mictoo non memorizza file, ma l'audio passa attraverso il provider IA. Per audio strettamente confidenziale, considera soluzioni on-premise." },
        { q: 'Come trascrivere una call Zoom o Teams?', a: 'Registra la call con la funzione integrata della piattaforma, scarica il file MP4 o M4A e caricalo su Mictoo. La trascrizione e il riassunto sono pronti in pochi secondi.' },
        { q: 'Posso ottenere etichette degli speaker (Host, Cliente, ecc.)?', a: 'Non automaticamente nel piano gratuito. La trascrizione è un singolo flusso di testo — le etichette possono essere aggiunte manualmente nell\'editor del browser prima dell\'export.' },
        { q: 'Funziona per riunioni multilingue?', a: 'Whisper supporta oltre 50 lingue con rilevamento automatico. Se la riunione mescola due lingue, conviene dividere il file e trascrivere ogni parte separatamente impostando la lingua manualmente.' },
        { q: 'Qual è il limite di durata?', a: 'Fino a 25 MB per file. Per riunioni di 1+ ora, esporta in mono a basso bitrate o dividi la registrazione in parti. La guida how-to-compress-audio descrive tre approcci.' },
      ]}
      relatedLinks={[
        { href: '/it/meeting-transcription', label: 'Trascrizione di riunioni' },
        { href: '/it/zoom-transcription', label: 'Trascrizione Zoom' },
        { href: '/it/interview-transcription', label: 'Trascrizione di interviste' },
        { href: '/it', label: 'Tutti i formati' },
      ]}
    />
  )
}
