import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/interview-transcription',
  'fr': 'https://mictoo.com/fr/interview-transcription',
  'de': 'https://mictoo.com/de/interview-transcription',
  'es': 'https://mictoo.com/es/interview-transcription',
  'ru': 'https://mictoo.com/ru/interview-transcription',
  'it': 'https://mictoo.com/it/interview-transcription',
  'x-default': 'https://mictoo.com/interview-transcription',
}

export const metadata = {
  title: 'Trascrizione di interviste — Da audio a testo gratis | Mictoo',
  description: 'Trascrivi interviste, ricerca utente e podcast a due voci. Gratis, senza account. Carica MP3, M4A o WAV e ottieni la trascrizione in pochi secondi.',
  alternates: { canonical: 'https://mictoo.com/it/interview-transcription', languages: LANGS },
}

export default function ItInterviewPage() {
  return (
    <LandingLayout
      badge="Giornalisti · Ricerca · Gratis"
      h1={<>Trascrizione di interviste<br /><span className="text-brand-600">Da audio a testo, gratis</span></>}
      subtitle="Carica la registrazione dell'intervista e ottieni una trascrizione pulita in pochi secondi. Ideale per giornalismo, ricerca utente, citazioni in articoli, podcast a due voci."
      defaultLanguage="it"
      features={[
        { icon: '🎤', title: 'Per giornalisti', desc: 'Trasforma le tue interviste registrate in citazioni pronte da incollare nell\'articolo. Cerca nel testo invece di riascoltare l\'audio.' },
        { icon: '🧪', title: 'Per la ricerca utente', desc: 'Le sessioni di user research diventano testo ricercabile. Trova rapidamente pattern, citazioni e insight nei dati qualitativi.' },
        { icon: '🌍', title: '50+ lingue', desc: 'Funziona con interviste in italiano, inglese, spagnolo, francese, tedesco e molte altre lingue.' },
      ]}
      faq={[
        { q: 'Come trascrivere un\'intervista a due voci?', a: 'Carica il file audio (MP3, M4A, WAV) — Mictoo trascrive tutto il parlato in un unico flusso. Per separare le voci (Intervistatore / Intervistato), puoi aggiungere le etichette manualmente nell\'editor del browser.' },
        { q: 'Quanto è accurata la trascrizione?', a: 'Per registrazioni chiare con voci ben separate, la precisione supera il 95%. Voci sovrapposte, accenti molto marcati o rumore di fondo possono ridurla.' },
        { q: 'Posso ottenere automaticamente le etichette degli speaker?', a: 'Non nel piano gratuito. La trascrizione è un singolo blocco di testo. Le etichette si aggiungono in 30-60 secondi nell\'editor prima del download.' },
        { q: 'Come registrare un\'intervista per la trascrizione?', a: 'In presenza: app Voice Memos su iPhone o registratore vocale Android. Da remoto: registra la call Zoom/Meet/Teams. Esporta in MP3 o M4A e carica qui.' },
        { q: 'Le interviste sono private?', a: 'Sì. I file vengono inviati al provider IA solo per la trascrizione e poi eliminati immediatamente. Mictoo non memorizza nulla sui propri server.' },
      ]}
      relatedLinks={[
        { href: '/it/podcast-transcription', label: 'Trascrizione di podcast' },
        { href: '/it/business-transcription', label: 'Trascrizione aziendale' },
        { href: '/it/transcribe-mp3-to-text', label: 'MP3 in testo' },
        { href: '/it', label: 'Tutti i formati' },
      ]}
    />
  )
}
