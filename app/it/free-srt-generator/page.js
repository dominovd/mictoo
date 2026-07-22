import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/free-srt-generator',
  'fr': 'https://mictoo.com/fr/free-srt-generator',
  'de': 'https://mictoo.com/de/free-srt-generator',
  'es': 'https://mictoo.com/es/free-srt-generator',
  'ru': 'https://mictoo.com/ru/free-srt-generator',
  'it': 'https://mictoo.com/it/free-srt-generator',
  'pt': 'https://mictoo.com/pt/free-srt-generator',
  'pl': 'https://mictoo.com/pl/free-srt-generator',
  'ja': 'https://mictoo.com/ja/free-srt-generator',
  'ko': 'https://mictoo.com/ko/free-srt-generator',
  'x-default': 'https://mictoo.com/free-srt-generator',
}

export const metadata = {
  title: 'Generatore SRT gratuito: crea file di sottotitoli SRT online da audio o video | Mictoo',
  description:
    'Genera file di sottotitoli SRT puliti da qualsiasi audio o video. Timestamp di qualità Whisper, pronti per YouTube, Premiere, Final Cut, DaVinci Resolve, CapCut. Gratuito, senza registrazione.',
  alternates: {
    canonical: 'https://mictoo.com/it/free-srt-generator',
    languages: LANGS,
  },
  openGraph: {
    title: 'Generatore SRT gratuito | Mictoo',
    description: 'Genera file di sottotitoli SRT da audio o video. Pronto per YouTube, Premiere, Final Cut.',
    url: 'https://mictoo.com/it/free-srt-generator',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Generatore SRT gratuito',
    description: 'Sottotitoli SRT di qualità Whisper da audio o video.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function ItFreeSrtGeneratorPage() {
  return (
    <ConverterPageLayout
      locale="it"
      mode="upload" currentHref="/it/free-srt-generator"
      badge="SRT · Audio o video · Gratuito"
      h1First="Generatore SRT gratuito"
      h1Second="Sottotitoli di qualità Whisper da qualsiasi audio o video"
      subtitle="Carica audio o video, ottieni un file di sottotitoli SRT pronto per YouTube, Premiere, Final Cut, DaVinci Resolve o CapCut. Nessuna registrazione, nessun costo per minuto."
      stepsTitle="Come funziona la generazione SRT"
      steps={[
        { icon: 'upload',   title: 'Carica audio o video', desc: 'MP3, MP4, WAV, M4A, WEBM, FLAC e altro. Fino a 25 MB in modo anonimo, 180 MB dopo la registrazione.' },
        { icon: 'waveform', title: 'Whisper trascrive', desc: 'Whisper large-v3 produce timestamp per segmento allineati all’audio originale.' },
        { icon: 'download', title: 'Scarica SRT',        desc: 'Esportazioni SRT e VTT incluse. Inserisci nel tuo editor video o carica su YouTube.' },
      ]}
      whyTitle="Perché usare Mictoo per la generazione SRT?"
      whyCards={[
        { icon: 'target',   title: 'Sottotitoli multilingue accurati', desc: 'Whisper large-v3 aggiunge punteggiatura e gestisce molte lingue, accenti e tipi di registrazione.' },
        { icon: 'captions', title: 'SRT + VTT inclusi',                desc: 'Entrambi i formati di sottotitoli generati automaticamente. VTT per lettori web, SRT per editor.' },
        { icon: 'lock',     title: 'File eliminati dopo',               desc: 'L’audio caricato viene eliminato dopo la trascrizione; la trascrizione persiste solo sugli account registrati.' },
        { icon: 'shield',   title: 'Nessuna filigrana o tag',           desc: 'SRT pulito senza intro brandizzata o tag "Creato con X".' },
      ]}
      scenariosTitle="Quando la generazione SRT è utile"
      scenarios={[
        { icon: 'video',      title: 'Sottotitoli per caricamenti su YouTube' },
        { icon: 'editPen',    title: 'Importazione in Premiere / DaVinci' },
        { icon: 'headphones', title: 'Versione video del podcast' },
        { icon: 'mail',       title: 'Copia per revisione del cliente' },
        { icon: 'archive',    title: 'Archivio di accessibilità' },
        { icon: 'target',     title: 'Sottotitoli in lingua straniera' },
      ]}
      tipsTitle="Suggerimenti per sottotitoli più puliti"
      tips={[
        'Per file oltre 25 MB, accedi per caricamenti automatici fino a 180 MB.',
        'Imposta esplicitamente la lingua per contenuti non in inglese o tecnici.',
        'Controlla nomi e termini insoliti in modalità Editor prima dell’esportazione.',
        'Traduci prima la trascrizione, poi esporta SRT per sottotitoli in lingua straniera.',
      ]}
      processTitle="Cosa succede durante la generazione"
      processSteps={['Audio / video', 'Trascrizione Whisper', 'Esportazione SRT + VTT']}
      faq={[
        { q: 'Il generatore SRT è gratuito?', a: 'Sì. Fino a 25 MB in modo anonimo o 180 MB quando registrato. Nessuna filigrana sul SRT e nessun costo per minuto.' },
        { q: 'Quali formati di sottotitoli ottengo?', a: 'SRT e VTT sono entrambi inclusi. TXT (testo semplice) e DOCX sono anche disponibili. Gli utenti registrati ottengono inoltre PDF e JSON.' },
        { q: 'Quanto sono accurati i timestamp?', a: 'Whisper large-v3 fornisce timestamp per segmento allineati all’audio originale. Abbastanza accurati per i sottotitoli di YouTube e la maggior parte dei casi d’uso di editing video.' },
        { q: 'Identificate i relatori (diarizzazione)?', a: 'Non ancora. Sottotitoli continui con timestamp ma senza etichette per i relatori. La diarizzazione è sulla roadmap Pro.' },
        { q: 'Mictoo trascrive audio non in inglese?', a: 'Sì. Whisper large-v3 supporta oltre 50 lingue con auto-rilevamento. Imposta esplicitamente la lingua per risultati più puliti.' },
        { q: 'Le registrazioni vengono conservate sui vostri server?', a: 'No. L’audio viene inviato al fornitore di trascrizione, elaborato una sola volta e poi eliminato. Le trascrizioni persistono solo sugli account registrati.' },
      ]}
      ctaHeadline="Genera sottotitoli SRT da qualsiasi registrazione"
      ctaSubtitle="YouTube, Premiere, Final Cut, DaVinci, CapCut. Timestamp di qualità Whisper."
      ctaButton="Carica audio o video"
      moreTools={[
        { href: '/it/timestamped-transcription', label: 'Trascrizione con timestamp' },
        { href: '/it/youtube-to-text',           label: 'YouTube a Testo' },
        { href: '/it/transcribe-video-to-text',  label: 'Video a Testo' },
        { href: '/it/transcribe-audio-to-text',  label: 'Audio a Testo' },
      ]}
    />
  )
}