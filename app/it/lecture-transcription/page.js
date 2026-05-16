import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/lecture-transcription',
  'fr': 'https://mictoo.com/fr/lecture-transcription',
  'de': 'https://mictoo.com/de/lecture-transcription',
  'es': 'https://mictoo.com/es/lecture-transcription',
  'ru': 'https://mictoo.com/ru/lecture-transcription',
  'it': 'https://mictoo.com/it/lecture-transcription',
  'pt': 'https://mictoo.com/pt/lecture-transcription',
  'pl': 'https://mictoo.com/pl/lecture-transcription',
  'x-default': 'https://mictoo.com/lecture-transcription',
}

export const metadata = {
  title: 'Trascrizione di lezioni — Da audio a testo per studenti | Mictoo',
  description: 'Trasforma le registrazioni delle lezioni in testo studiabile. Gratis, senza account. Carica MP3 o M4A e ottieni una trascrizione pulita in pochi secondi.',
  alternates: { canonical: 'https://mictoo.com/it/lecture-transcription', languages: LANGS },
}

export default function ItLecturePage() {
  return (
    <LandingLayout
      badge="Studenti · Università · Gratis"
      h1={<>Trascrizione di lezioni<br /><span className="text-brand-600">Da audio a appunti</span></>}
      subtitle="Carica la registrazione della lezione e ottieni una trascrizione testuale completa. Ideale per ripassare, studiare e annotare. Senza account, senza app."
      defaultLanguage="it"
      features={[
        { icon: '🎓', title: 'Per studenti', desc: 'Registra la lezione, caricala su Mictoo e ottieni un testo ricercabile in pochi secondi. Aggiungi i tuoi commenti nel browser.' },
        { icon: '🔍', title: 'Cerca nelle lezioni', desc: 'Trasforma ore di audio in testo cercabile. Trova rapidamente la definizione, il concetto o il riferimento che ti serve.' },
        { icon: '🌍', title: '50+ lingue', desc: 'Funziona con lezioni in italiano, inglese, spagnolo, francese, tedesco e molte altre lingue accademiche.' },
      ]}
      faq={[
        { q: 'Come registrare una lezione per la trascrizione?', a: 'iPhone: app Voice Memos. Android: registratore vocale integrato. Laptop: QuickTime (Mac) o Voice Recorder (Windows). Esporta in MP3 o M4A e carica qui.' },
        { q: 'È legale registrare una lezione?', a: 'Dipende dalla policy della tua università e dalla legge locale. Molti atenei permettono la registrazione per uso personale; alcuni richiedono il consenso del docente. Controlla prima.' },
        { q: 'Quanto è accurata la trascrizione di una lezione?', a: 'Per un docente che parla chiaramente in un\'aula con poco rumore, la precisione supera il 95%. Sale di rumore, accenti forti o aule molto grandi possono ridurla.' },
        { q: 'Posso trascrivere una lezione in lingua straniera?', a: 'Sì. Mictoo supporta più di 50 lingue con rilevamento automatico. Funziona molto bene per lezioni in inglese, spagnolo, francese, tedesco e molte altre.' },
        { q: 'Qual è la durata massima della lezione?', a: 'Fino a 25 MB per file. Per una lezione di 60-90 minuti, esporta in mono a 64 kbps oppure dividi in segmenti più brevi.' },
      ]}
      relatedLinks={[
        { href: '/it/transcribe-mp3-to-text', label: 'MP3 in testo' },
        { href: '/it/m4a-to-text', label: 'M4A in testo' },
        { href: '/it/voice-memo-to-text', label: 'Memo vocale in testo' },
        { href: '/it', label: 'Tutti i formati' },
      ]}
    />
  )
}
