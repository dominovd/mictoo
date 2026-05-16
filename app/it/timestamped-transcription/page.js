import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/timestamped-transcription',
  'fr': 'https://mictoo.com/fr/timestamped-transcription',
  'de': 'https://mictoo.com/de/timestamped-transcription',
  'es': 'https://mictoo.com/es/timestamped-transcription',
  'ru': 'https://mictoo.com/ru/timestamped-transcription',
  'it': 'https://mictoo.com/it/timestamped-transcription',
  'x-default': 'https://mictoo.com/timestamped-transcription',
}

export const metadata = {
  title: 'Trascrizione con marcatori temporali — Generatore gratuito con timecode | Mictoo',
  description: 'Genera trascrizioni con marcatori temporali gratis. Carica audio o video e scarica un file SRT con timecode esatti. Senza registrazione.',
  alternates: { canonical: 'https://mictoo.com/it/timestamped-transcription', languages: LANGS },
}

export default function ItTimestampedPage() {
  return (
    <LandingLayout
      badge="Timecode · SRT · Gratis"
      h1={<>Trascrizione con marcatori temporali<br /><span className="text-brand-600">Trascrizione gratuita con timecode</span></>}
      subtitle="Carica qualsiasi file audio o video e ottieni una trascrizione con timestamp esatti. Scarica come SRT — pronto per YouTube, editor video e strumenti di sottotitolaggio. Senza registrazione."
      defaultLanguage="it"
      features={[
        { icon: '⏱️', title: 'Timecode automatici', desc: 'Ogni segmento riceve un timestamp preciso di inizio e fine — generato automaticamente dal tuo audio.' },
        { icon: '📄', title: 'Download in .srt', desc: 'Esporta la tua trascrizione con marcatori in un file di sottotitoli SRT. Caricalo direttamente su YouTube, Premiere, DaVinci o qualsiasi strumento di sottotitolaggio.' },
        { icon: '✏️', title: 'Testo modificabile', desc: 'Rileggi e modifica la trascrizione nel browser prima del download. Nessun account richiesto.' },
      ]}
      faq={[
        { q: "Cos'è una trascrizione con marcatori temporali?", a: 'Una trascrizione con marcatori (o trascrizione con timecode) è una versione testuale di audio o video in cui ogni riga include l\'ora esatta in cui è stata pronunciata — ad esempio "00:01:23 → Ciao, benvenuti nello show". Permette di sincronizzare il testo con il media originale.' },
        { q: 'Come creare una trascrizione con marcatori gratis?', a: 'Carica il tuo file audio o video nello strumento sopra. Mictoo genera automaticamente una trascrizione con timestamp e ti permette di scaricarla in SRT o in testo semplice con marcatori.' },
        { q: "Cos'è un file SRT?", a: 'SRT (SubRip Subtitle) è un formato standard di file di sottotitoli contenente segmenti di testo con marcatori temporali. I file SRT sono supportati da YouTube, Netflix, Premiere Pro, Final Cut, DaVinci Resolve e dalla maggior parte delle piattaforme video ed editor.' },
        { q: 'Posso usare il file SRT per i sottotitoli YouTube?', a: 'Sì. Dopo aver scaricato il .srt, vai in YouTube Studio → Sottotitoli → Aggiungi lingua → Carica file. I tuoi sottotitoli con marcatori verranno sincronizzati automaticamente con il video.' },
        { q: 'Quanto sono accurati i timestamp?', a: 'I timestamp vengono generati a livello di segmento (di solito ogni 5-15 secondi). La precisione è alta per audio chiari. Voci sovrapposte o rumore di fondo significativo possono influenzare la precisione.' },
        { q: 'Qual è la differenza tra trascrizione e trascrizione con marcatori?', a: "Una trascrizione semplice è una versione testuale dell'audio. Una trascrizione con marcatori aggiunge timestamp così che ogni sezione possa essere associata a un momento preciso della registrazione — essenziale per sottotitoli e montaggio video." },
        { q: 'Quali formati sono supportati?', a: 'MP3, MP4, WAV, M4A, OGG, WEBM, FLAC. Qualsiasi file audio o video fino a 25 MB.' },
      ]}
      relatedLinks={[
        { href: '/it/free-srt-generator', label: 'Generatore SRT' },
        { href: '/it/transcribe-video-to-text', label: 'Video in testo' },
        { href: '/it/transcribe-audio-to-text', label: 'Audio in testo' },
        { href: '/it', label: 'Tutti i formati' },
      ]}
    />
  )
}
