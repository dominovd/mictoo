import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/timestamped-transcription',
  'fr': 'https://mictoo.com/fr/timestamped-transcription',
  'de': 'https://mictoo.com/de/timestamped-transcription',
  'es': 'https://mictoo.com/es/timestamped-transcription',
  'ru': 'https://mictoo.com/ru/timestamped-transcription',
  'it': 'https://mictoo.com/it/timestamped-transcription',
  'pt': 'https://mictoo.com/pt/timestamped-transcription',
  'pl': 'https://mictoo.com/pl/timestamped-transcription',
  'ja': 'https://mictoo.com/ja/timestamped-transcription',
  'ko': 'https://mictoo.com/ko/timestamped-transcription',
  'x-default': 'https://mictoo.com/timestamped-transcription',
}

export const metadata = {
  title: 'Trascrizione Timestamped: Generatore di Trascrizioni con Codici Temporali Gratuiti | Mictoo',
  description:
    'Trascrizione timestamped gratuita con codici temporali a livello di segmento per audio o video. Utile per giornalismo, ricerca, podcasting e montaggio video.',
  alternates: {
    canonical: 'https://mictoo.com/it/timestamped-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: 'Trascrizione Timestamped: Generatore di Trascrizioni con Codici Temporali Gratuiti | Mictoo',
    description: 'Timestamp a livello di frase per qualsiasi audio o video.',
    url: 'https://mictoo.com/it/timestamped-transcription',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trascrizione Timestamped: Gratuita',
    description: 'Trascrizioni con codici temporali per giornalismo, ricerca, montaggio.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function ItTimestampedTranscriptionPage() {
  return (
    <ConverterPageLayout
      locale="it"
      mode="upload" currentHref="/it/timestamped-transcription"
      badge="Timestamped · Audio o video · Gratuito"
      h1First="Trascrizione Timestamped"
      h1Second="Trascrizioni con codici temporali per giornalismo, ricerca, montaggio"
      subtitle="Carica audio o video e ottieni una trascrizione con timestamp per segmento. Clicca su qualsiasi timestamp per saltare a quel momento nel lettore audio. Gratuito, senza registrazione."
      stepsTitle="Come funziona la trascrizione timestamped"
      steps={[
        { icon: 'upload',   title: 'Carica audio o video',       desc: 'MP3, MP4, WAV, M4A, WEBM, FLAC e altro. Fino a 25 MB in modo anonimo o 180 MB con accesso.' },
        { icon: 'waveform', title: 'Whisper timestamp segmenti', desc: 'Whisper large-v3 fornisce timestamp per segmento allineati all’audio originale.' },
        { icon: 'download', title: 'Esporta con timestamp',      desc: 'TXT con timestamp in linea, SRT / VTT per sottotitoli, DOCX per revisione.' },
      ]}
      whyTitle="Perché usare Mictoo per trascrizioni timestamped?"
      whyCards={[
        { icon: 'clock',    title: 'Timestamp cliccabili',   desc: 'Ogni timestamp è cliccabile nella vista Lettore. Salta a qualsiasi momento nel lettore audio.' },
        { icon: 'target',   title: 'Trascrizione di qualità Whisper', desc: 'Whisper large-v3 aggiunge punteggiatura e gestisce molte lingue, accenti e tipi di registrazione.' },
        { icon: 'captions', title: 'SRT + VTT inclusi',         desc: 'I timestamp vengono trasferiti agli export SRT e VTT per la sottotitolazione video.' },
        { icon: 'lock',     title: 'File eliminati dopo',        desc: 'L’audio caricato viene eliminato dopo la trascrizione; la trascrizione persiste solo sugli account registrati.' },
      ]}
      scenariosTitle="Quando le trascrizioni timestamped sono utili"
      scenarios={[
        { icon: 'editPen',    title: 'Ricerca citazioni giornalistiche' },
        { icon: 'target',     title: 'Citazione ricerca UX' },
        { icon: 'video',      title: 'Lista di cue per montaggio video' },
        { icon: 'headphones', title: 'Note di programma podcast' },
        { icon: 'archive',    title: 'Legale / scoperta' },
        { icon: 'waveform',   title: 'Bookmarking audio' },
      ]}
      tipsTitle="Suggerimenti per un output timestamped più pulito"
      tips={[
        'La vista Lettore è la migliore per la navigazione clicca-per-saltare.',
        'Per l’export SRT / VTT, i timestamp si allineano alla timeline del file originale.',
        'Per registrazioni lunghe, accedi per la suddivisione automatica fino a circa 3 ore.',
        'La barra di ricerca evidenzia le corrispondenze e mostra il loro timestamp istantaneamente.',
      ]}
      processTitle="Cosa succede durante la trascrizione"
      processSteps={['Audio / video', 'Whisper large-v3', 'Testo timestamped']}
      faq={[
        { q: 'Qual è la granularità dei timestamp?', a: 'Per segmento (approssimativamente per frase). Whisper produce nativamente timestamp a livello di segmento allineati all’audio.' },
        { q: 'Posso cliccare su un timestamp per saltare nell’audio?', a: 'Sì. Nella vista Lettore, ogni timestamp è cliccabile e sposta il lettore audio a quel momento.' },
        { q: 'Lo strumento è gratuito?', a: 'Sì. Fino a 25 MB in modo anonimo o 180 MB quando registrato. Nessun watermark e nessun costo per minuto.' },
        { q: 'Quali formati di export sono supportati?', a: 'TXT (con timestamp in linea), SRT, VTT, DOCX. Gli utenti registrati ottengono anche PDF e JSON con dati di timestamp strutturati.' },
        { q: 'Identificate i relatori?', a: 'Non ancora. Testo timestamped continuo senza etichette per i relatori. La diarizzazione è nella roadmap Pro.' },
        { q: 'Le registrazioni vengono conservate sui vostri server?', a: 'No. L’audio viene inviato al fornitore di trascrizione, elaborato una sola volta e viene eliminato. Le trascrizioni persistono solo sugli account registrati.' },
      ]}
      ctaHeadline="Ottieni una trascrizione timestamped clicca-per-saltare"
      ctaSubtitle="Giornalismo, ricerca UX, montaggio video, note di programma podcast. Gratuito per file."
      ctaButton="Carica audio o video"
      moreTools={[
        { href: '/it/free-srt-generator',       label: 'Generatore SRT' },
        { href: '/it/youtube-to-text',          label: 'YouTube a Testo' },
        { href: '/it/transcribe-audio-to-text', label: 'Audio a Testo' },
        { href: '/it/transcribe-video-to-text', label: 'Video a Testo' },
      ]}
    />
  )
}