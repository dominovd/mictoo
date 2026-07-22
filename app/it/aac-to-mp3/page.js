import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/aac-to-mp3',
  'fr': 'https://mictoo.com/fr/aac-to-mp3',
  'de': 'https://mictoo.com/de/aac-to-mp3',
  'es': 'https://mictoo.com/es/aac-to-mp3',
  'ru': 'https://mictoo.com/ru/aac-to-mp3',
  'it': 'https://mictoo.com/it/aac-to-mp3',
  'pt': 'https://mictoo.com/pt/aac-to-mp3',
  'pl': 'https://mictoo.com/pl/aac-to-mp3',
  'ja': 'https://mictoo.com/ja/aac-to-mp3',
  'ko': 'https://mictoo.com/ko/aac-to-mp3',
  'x-default': 'https://mictoo.com/aac-to-mp3',
}

export const metadata = {
  title: 'AAC a MP3: Convertitore Online Gratuito | Mictoo',
  description:
    'Converti AAC in MP3 gratuitamente, in pochi secondi, con una chiara spiegazione di quando la conversione è utile e quando compromette la qualità.',
  alternates: {
    canonical: 'https://mictoo.com/it/aac-to-mp3',
    languages: LANGS,
  },
  openGraph: {
    title: 'AAC a MP3: Convertitore Online Gratuito | Mictoo',
    description: 'Converti AAC in MP3 gratuitamente, in pochi secondi.',
    url: 'https://mictoo.com/it/aac-to-mp3',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AAC a MP3: Convertitore Online Gratuito',
    description: 'Converti AAC in MP3 in pochi secondi. Gratuito, senza registrazione.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function ItAacToMp3Page() {
  return (
    <ConverterPageLayout
      locale="it"
      mode="converter" from="aac" to="mp3" currentHref="/it/aac-to-mp3"
      badge="AAC → MP3 · Gratuito · Nessuna registrazione"
      h1First="AAC a MP3"
      h1Second="Convertitore online gratuito"
      subtitle="Carica un file .aac grezzo (stream ADTS, dump di trasmissione o audio estratto da iPhone) e ottieni un MP3 portatile in pochi secondi."
      outputFormat="MP3" outputQuality="128 kbps" outputAudio="Stereo"
      stepsTitle="Come funziona la conversione da AAC a MP3"
      steps={[
        { icon: 'upload',   title: 'Carica l’AAC',        desc: 'Framing ADTS o ADIF, fino a 25 MB in modo anonimo.' },
        { icon: 'waveform', title: 'Decodifichiamo e codifichiamo', desc: 'ffmpeg legge il bitstream AAC e lo ricodifica in MP3 stereo a 128 kbps.' },
        { icon: 'download', title: 'Scarica l’MP3',    desc: 'Ottieni il tuo MP3 pulito in pochi secondi, pronto per qualsiasi lettore.' },
      ]}
      previewInputName="broadcast-clip.aac"
      previewInputSize="8.4 MB · 00:07:22 · 128 kbps AAC"
      previewOutputName="broadcast-clip.mp3"
      previewOutputSize="00:07:22 · 128 kbps MP3 · 6.8 MB"
      whyTitle="Perché usare Mictoo per AAC a MP3?"
      whyCards={[
        { icon: 'target',   title: 'AAC grezzo gestito',        desc: 'Entrambi i framing ADTS e ADIF funzionano direttamente, senza ripackaging manuale.' },
        { icon: 'fileAudio',title: 'MP3 riproducibile ovunque',   desc: 'Dispositivi più vecchi e host di podcast legacy a volte preferiscono MP3 rispetto ad AAC.' },
        { icon: 'lock',     title: 'File eliminati dopo',    desc: 'L’AAC caricato viene eliminato dopo la conversione; l’MP3 viene rimosso entro un’ora.' },
        { icon: 'shield',   title: 'Nessuna filigrana o tag',    desc: 'Solo l’audio, ricodificato. Nessuna introduzione o metadata brandizzata.' },
      ]}
      scenariosTitle="Quando la conversione da AAC a MP3 è utile"
      scenarios={[
        { icon: 'video',      title: 'Dump di trasmissione HLS' },
        { icon: 'headphones', title: 'L’host del podcast richiede MP3' },
        { icon: 'mail',       title: 'Compatibilità con lettori legacy' },
        { icon: 'editPen',    title: 'Importazione DAW (strumenti più vecchi)' },
        { icon: 'archive',    title: 'Formato di archivio coerente' },
        { icon: 'waveform',   title: 'AAC estratto da iPhone' },
      ]}
      tipsTitle="Consigli per una conversione pulita da AAC a MP3"
      tips={[
        'Se il tuo dispositivo riproduce AAC nativamente, potresti non aver bisogno di convertire.',
        'Sia AAC che MP3 sono lossy; la ricodifica aggiunge una piccola perdita di qualità.',
        'Mantieni il file sorgente sotto l’attuale limite di caricamento di 25 MB.',
        'Per la trascrizione, carica direttamente l’AAC su /it/aac-to-text invece.',
      ]}
      processTitle="Cosa succede durante la conversione"
      processSteps={['Frame AAC ADTS', 'Decodifica', 'Codifica MP3']}
      compareTitle="AAC vs MP3"
      compareRows={[
        { fmt: 'AAC', contains: 'No', size: 'Piccolo (efficiente)', best: 'Dispositivi moderni, streaming, iPhone' },
        { fmt: 'MP3', contains: 'No', size: 'Piccolo',             best: 'Compatibilità universale, lettori legacy' },
      ]}
      faq={[
        { q: 'Ho davvero bisogno di convertire AAC in MP3?', a: 'Raramente. La maggior parte dei dispositivi moderni riproduce AAC nativamente. Converti solo se uno strumento o un host specifico richiede esplicitamente MP3.' },
        { q: 'Il convertitore è gratuito?', a: 'Sì. I file fino a 25 MB possono essere convertiti senza un account e l’output non ha filigrana.' },
        { q: 'Qual è la perdita di qualità?', a: 'AAC e MP3 sono entrambi lossy. La ricodifica aggiunge una piccola perdita extra ma è inaudibile per l’ascolto tipico a 128 kbps.' },
        { q: 'Quali framing AAC funzionano?', a: 'ADTS (il più comune), ADIF e LATM si decodificano tutti. AAC all’interno di MP4/M4A funziona anche ma è un percorso di ingresso diverso.' },
        { q: 'I file vengono memorizzati?', a: 'No. L’AAC caricato viene eliminato dopo la conversione; l’MP3 viene rimosso entro un’ora.' },
      ]}
      ctaHeadline="Converti il tuo AAC in MP3 ora"
      ctaSubtitle="Carica il tuo AAC e ottieni un MP3 pulito in pochi secondi. Nessuna registrazione. Nessuna filigrana."
      ctaButton="Scegli un file AAC"
      moreTools={[
        { href: '/it/m4a-to-mp3',  label: 'M4A a MP3' },
        { href: '/it/mp4-to-mp3',  label: 'MP4 a MP3' },
        { href: '/it/wav-to-mp3',  label: 'WAV a MP3' },
        { href: '/it/aac-to-text', label: 'AAC a Testo' },
      ]}
    />
  )
}