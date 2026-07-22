import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/wma-to-mp3',
  'fr': 'https://mictoo.com/fr/wma-to-mp3',
  'de': 'https://mictoo.com/de/wma-to-mp3',
  'es': 'https://mictoo.com/es/wma-to-mp3',
  'ru': 'https://mictoo.com/ru/wma-to-mp3',
  'it': 'https://mictoo.com/it/wma-to-mp3',
  'pt': 'https://mictoo.com/pt/wma-to-mp3',
  'pl': 'https://mictoo.com/pl/wma-to-mp3',
  'ja': 'https://mictoo.com/ja/wma-to-mp3',
  'ko': 'https://mictoo.com/ko/wma-to-mp3',
  'x-default': 'https://mictoo.com/wma-to-mp3',
}

export const metadata = {
  title: 'WMA a MP3: Convertitore Gratuito per Windows Media Audio Legacy | Mictoo',
  description:
    'Converti vecchi file WMA in MP3 universali. Creato per recuperare archivi Windows Media legacy, esportazioni di messaggi vocali e CD strappati che nulla di moderno vuole aprire.',
  alternates: {
    canonical: 'https://mictoo.com/it/wma-to-mp3',
    languages: LANGS,
  },
  openGraph: {
    title: 'WMA a MP3: Convertitore Windows Media Legacy | Mictoo',
    description: 'Recupera archivi WMA legacy, esportazioni di messaggi vocali, CD strappati.',
    url: 'https://mictoo.com/it/wma-to-mp3',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WMA a MP3: Convertitore Gratuito',
    description: 'Recupera file WMA legacy. Gratuito.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function ItWmaToMp3Page() {
  return (
    <ConverterPageLayout
      locale="it"
      mode="converter" from="wma" to="mp3" currentHref="/it/wma-to-mp3"
      badge="WMA → MP3 · Gratuito · Recupero legacy"
      h1First="WMA a MP3"
      h1Second="Convertitore Windows Media legacy gratuito"
      subtitle="Carica un vecchio file WMA (esportazione di messaggi vocali, CD strappato, archivio Windows Media legacy) e ottieni un MP3 universale che qualsiasi dispositivo o lettore moderno aprirà."
      outputFormat="MP3" outputQuality="128 kbps" outputAudio="Stereo"
      stepsTitle="Come funziona la conversione da WMA a MP3"
      steps={[
        { icon: 'upload',   title: 'Carica il WMA',        desc: 'Qualsiasi versione di Windows Media Audio, fino a 25 MB in modo anonimo.' },
        { icon: 'waveform', title: 'Decodifichiamo e codifichiamo', desc: 'ffmpeg legge il WMA e lo ricodifica in MP3 stereo a 128 kbps a 44.1 kHz.' },
        { icon: 'download', title: 'Scarica il MP3',    desc: 'Ottieni un MP3 compatibile con la maggior parte dei lettori, telefoni e editor audio attuali.' },
      ]}
      previewInputName="voicemail-2011.wma"
      previewInputSize="1.2 MB · 00:02:34"
      previewOutputName="voicemail-2011.mp3"
      previewOutputSize="00:02:34 · 128 kbps · 2.4 MB"
      whyTitle="Perché usare Mictoo per WMA a MP3?"
      whyCards={[
        { icon: 'target',   title: 'File legacy gestiti',    desc: 'Vecchi file Windows Media Audio che iTunes, Apple Music e i lettori moderni rifiutano di aprire.' },
        { icon: 'fileAudio',title: 'Ampia compatibilità MP3', desc: 'MP3 è ampiamente supportato su macOS, Linux, iPhone, Android e lettori musicali comuni.' },
        { icon: 'lock',     title: 'File eliminati dopo',     desc: 'Il WMA caricato viene eliminato dopo la conversione; l’MP3 viene purgato entro un’ora.' },
        { icon: 'shield',   title: 'Nessuna filigrana o tag',     desc: 'Solo l’audio, ricodificato. Nessuna introduzione con marchio, nessun metadato iniettato.' },
      ]}
      scenariosTitle="Quando WMA a MP3 è utile"
      scenarios={[
        { icon: 'archive',    title: 'Strappo CD legacy' },
        { icon: 'headphones', title: 'Vecchia esportazione di messaggi vocali' },
        { icon: 'editPen',    title: 'Output di Windows Movie Maker' },
        { icon: 'mail',       title: 'Condividi su dispositivo non Windows' },
        { icon: 'video',      title: 'Importa in editor moderno' },
        { icon: 'waveform',   title: 'Recupera archivio su nastro' },
      ]}
      tipsTitle="Suggerimenti per una conversione pulita da WMA a MP3"
      tips={[
        'WMA protetto da DRM (vecchi noleggi di Windows Media Player) non può essere decodificato.',
        'WMA a bitrate molto basso (messaggi vocali) suonerà come la sorgente.',
        'Il video WMV vecchio non è supportato qui; usa MP4 a MP3 invece.',
        'Per registrazioni superiori a 25 MB, ritaglia o dividi la sorgente prima di caricarla.',
      ]}
      processTitle="Cosa succede durante la conversione"
      processSteps={['WMA (ASF)', 'Decodifica Windows Media', 'Codifica MP3']}
      compareTitle="WMA vs MP3"
      compareRows={[
        { fmt: 'WMA', contains: 'No', size: 'Piccolo', best: 'Flussi di lavoro Windows legacy (deprecato)' },
        { fmt: 'MP3', contains: 'No', size: 'Piccolo', best: 'Compatibilità universale, dispositivi moderni' },
      ]}
      faq={[
        { q: 'Il convertitore da WMA a MP3 è gratuito?', a: 'Sì. I file fino a 25 MB possono essere convertiti senza un account, e l’output non ha filigrana.' },
        { q: 'Perché i lettori moderni rifiutano di aprire WMA?', a: 'Apple non ha mai supportato WMA. Alcuni lettori Android l’hanno abbandonato. WMA è un formato legacy di Microsoft che Windows stesso ha iniziato a lasciare.' },
        { q: 'Puoi convertire WMA protetto da DRM?', a: 'No. I vecchi noleggi di Windows Media Player utilizzavano DRM che ffmpeg non può decodificare. Non aggiriamo mai la protezione del copyright.' },
        { q: 'I file vengono memorizzati?', a: 'No. Il WMA caricato viene eliminato dopo la conversione; l’MP3 viene purgato entro un’ora.' },
        { q: 'E per WMA lossless?', a: 'Il convertitore legge anche WMA lossless, ma l’output rimane 128 kbps MP3 (lossy). Per output lossless, converti in WAV invece.' },
      ]}
      ctaHeadline="Converti il tuo WMA in MP3 ora"
      ctaSubtitle="Recupera Windows Media Audio legacy. Ottieni un MP3 portatile in pochi secondi."
      ctaButton="Scegli un file WMA"
      moreTools={[
        { href: '/it/mp4-to-mp3',  label: 'MP4 a MP3' },
        { href: '/it/wav-to-mp3',  label: 'WAV a MP3' },
        { href: '/it/flac-to-mp3', label: 'FLAC a MP3' },
        { href: '/it/aac-to-mp3',  label: 'AAC a MP3' },
      ]}
    />
  )
}