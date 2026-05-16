import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/meeting-transcription',
  'fr': 'https://mictoo.com/fr/meeting-transcription',
  'de': 'https://mictoo.com/de/meeting-transcription',
  'es': 'https://mictoo.com/es/meeting-transcription',
  'ru': 'https://mictoo.com/ru/meeting-transcription',
  'it': 'https://mictoo.com/it/meeting-transcription',
  'x-default': 'https://mictoo.com/meeting-transcription',
}

export const metadata = {
  title: 'Trascrizione di riunioni — Da call Zoom/Teams/Meet a testo | Mictoo',
  description: 'Trascrivi gratis registrazioni di riunioni Zoom, Teams o Google Meet. Carica MP4 o M4A e ottieni transcript + riassunto IA in pochi secondi. Senza registrazione.',
  alternates: { canonical: 'https://mictoo.com/it/meeting-transcription', languages: LANGS },
}

export default function ItMeetingPage() {
  return (
    <LandingLayout
      badge="Zoom · Teams · Meet · Gratis"
      h1={<>Trascrizione di riunioni<br /><span className="text-brand-600">Call in testo, gratis</span></>}
      subtitle="Carica la registrazione della tua riunione (Zoom, Teams, Google Meet o qualsiasi MP4/M4A) e ottieni una trascrizione pulita e un riassunto IA con action item. Senza account."
      defaultLanguage="it"
      features={[
        { icon: '🎥', title: 'Qualsiasi piattaforma', desc: 'Funziona con Zoom, Microsoft Teams, Google Meet, Webex, Loom — qualsiasi piattaforma esporta MP4 o M4A.' },
        { icon: '✨', title: 'Riassunto IA + action item', desc: 'Dopo la trascrizione, ottieni automaticamente un riassunto, punti chiave e action item — pronti per il follow-up via email.' },
        { icon: '🔒', title: 'Privato', desc: 'Nessun bot IA nelle tue call. Tu registri, tu carichi, tu controlli. I file vengono elaborati e immediatamente eliminati.' },
      ]}
      faq={[
        { q: 'Come trascrivere una riunione Zoom?', a: 'In Zoom: abilita Local Recording o Cloud Recording prima della call. Dopo la riunione, scarica il file MP4 (o M4A solo audio) e caricalo qui.' },
        { q: 'Come trascrivere una riunione Teams?', a: 'Microsoft Teams salva le registrazioni in OneDrive o SharePoint. Aprila, clicca su Scarica, ottieni un MP4 — caricalo direttamente su Mictoo.' },
        { q: 'Come trascrivere una riunione Google Meet?', a: 'Google Meet esporta in MP4 su Google Drive (cartella "Meet Recordings"). Scaricalo e caricalo qui.' },
        { q: 'Posso ottenere automaticamente le etichette degli speaker?', a: 'Non nel piano gratuito. La trascrizione è un singolo flusso. Le etichette (Host / Partecipante 1 / Partecipante 2) si aggiungono manualmente nell\'editor del browser.' },
        { q: 'Qual è la durata massima di una riunione?', a: 'Fino a 25 MB per file. Per riunioni di 30+ minuti, esporta a basso bitrate o estrai solo la traccia audio (M4A) per stare nel limite.' },
      ]}
      relatedLinks={[
        { href: '/it/zoom-transcription', label: 'Trascrizione Zoom' },
        { href: '/it/google-meet-transcription', label: 'Trascrizione Google Meet' },
        { href: '/it/teams-meeting-transcription', label: 'Trascrizione Teams' },
        { href: '/it', label: 'Tutti i formati' },
      ]}
    />
  )
}
