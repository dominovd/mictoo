import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/free-srt-generator',
  'fr': 'https://mictoo.com/fr/free-srt-generator',
  'de': 'https://mictoo.com/de/free-srt-generator',
  'es': 'https://mictoo.com/es/free-srt-generator',
  'ru': 'https://mictoo.com/ru/free-srt-generator',
  'it': 'https://mictoo.com/it/free-srt-generator',
  'pt': 'https://mictoo.com/pt/free-srt-generator',
  'x-default': 'https://mictoo.com/free-srt-generator',
}

export const metadata = {
  title: 'Generatore SRT gratuito — Crea sottotitoli online | Mictoo',
  description: 'Genera file SRT da qualsiasi audio o video gratis. Carica il tuo file, ottieni una trascrizione con marcatori e scarica un .srt pronto all\'uso. Senza registrazione.',
  alternates: { canonical: 'https://mictoo.com/it/free-srt-generator', languages: LANGS },
}

export default function ItSrtGeneratorPage() {
  return (
    <LandingLayout
      badge="SRT · Sottotitoli · Gratis"
      h1={<>Generatore SRT gratuito<br /><span className="text-brand-600">Crea sottotitoli online</span></>}
      subtitle="Carica qualsiasi file audio o video e scarica un file SRT pronto all'uso in pochi secondi. Compatibile con YouTube, Premiere Pro, DaVinci Resolve e qualsiasi editor video."
      defaultLanguage="it"
      features={[
        { icon: '🎬', title: 'SRT pronto per YouTube', desc: 'Carica il file .srt direttamente in YouTube Studio per aggiungere sottotitoli. I timestamp sono sincronizzati automaticamente.' },
        { icon: '⏱️', title: 'Timecode precisi', desc: 'Ogni segmento di sottotitolo riceve un timestamp HH:MM:SS,ms — il formato standard usato da tutti gli strumenti video professionali.' },
        { icon: '🌍', title: '50+ lingue', desc: 'Genera SRT in tutte le lingue — italiano, inglese, spagnolo, francese, giapponese e 46 altre. La lingua è rilevata automaticamente.' },
      ]}
      faq={[
        { q: "Cos'è un file SRT?", a: 'Un file SRT (SubRip Subtitle) è un file di testo contenente voci di sottotitoli con marcatori temporali. Ogni voce ha un numero di sequenza, un orario inizio → fine e il testo del sottotitolo. SRT è il formato di sottotitoli più ampiamente supportato.' },
        { q: 'Come generare un SRT da un video?', a: 'Carica il tuo file video o audio sopra. Mictoo lo trascrive e aggiunge timestamp a ogni segmento. Dopo la trascrizione, clicca il pulsante .srt per scaricare il file di sottotitoli.' },
        { q: 'Come aggiungere sottotitoli SRT a un video YouTube?', a: 'In YouTube Studio, apri il tuo video e clicca su Sottotitoli. Seleziona Aggiungi lingua, poi Carica file e scegli il tuo .srt. YouTube sincronizza i sottotitoli automaticamente.' },
        { q: 'Il file SRT funziona in Premiere Pro e DaVinci Resolve?', a: 'Sì. In Premiere Pro: File → Importa → seleziona il tuo .srt. In DaVinci Resolve: apri la pagina Edit, vai in File → Importa Sottotitoli e seleziona il .srt.' },
        { q: 'Il generatore SRT è davvero gratis?', a: 'Sì, completamente gratis. Nessun account, nessun abbonamento, nessuna filigrana. Carica il file e scarica l\'SRT — tutto qui.' },
        { q: 'Qual è la dimensione massima del file?', a: 'Fino a 25 MB. Per video più lunghi, estrai prima la traccia audio per ridurre le dimensioni, oppure dividi il video in segmenti più brevi.' },
        { q: 'Posso generare un SRT da un file audio (MP3, WAV)?', a: 'Sì. Mictoo genera SRT da qualsiasi formato audio o video: MP3, MP4, WAV, M4A, OGG, WEBM, FLAC.' },
        { q: 'Posso modificare i sottotitoli prima del download?', a: 'Sì. Dopo la trascrizione, puoi modificare il testo nel browser prima del download. La struttura dei timestamp è preservata nell\'SRT esportato.' },
      ]}
      relatedLinks={[
        { href: '/it/timestamped-transcription', label: 'Trascrizione con marcatori' },
        { href: '/it/transcribe-video-to-text', label: 'Video in testo' },
        { href: '/it/transcribe-mp3-to-text', label: 'MP3 in testo' },
        { href: '/it', label: 'Tutti i formati' },
      ]}
    />
  )
}
