import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/m4a-to-mp3',
  'fr': 'https://mictoo.com/fr/m4a-to-mp3',
  'de': 'https://mictoo.com/de/m4a-to-mp3',
  'es': 'https://mictoo.com/es/m4a-to-mp3',
  'ru': 'https://mictoo.com/ru/m4a-to-mp3',
  'it': 'https://mictoo.com/it/m4a-to-mp3',
  'pt': 'https://mictoo.com/pt/m4a-to-mp3',
  'pl': 'https://mictoo.com/pl/m4a-to-mp3',
  'ja': 'https://mictoo.com/ja/m4a-to-mp3',
  'ko': 'https://mictoo.com/ko/m4a-to-mp3',
  'x-default': 'https://mictoo.com/m4a-to-mp3',
}

export const metadata = {
  title: 'M4A a MP3: Convertitore Gratuito per Audio Apple | Mictoo',
  description:
    'Converti i memo vocali dell’iPhone, i rimbalzi di GarageBand e i file M4A dell’ecosistema Apple in MP3 universale per host di podcast, telefoni Android più vecchi e lettori legacy.',
  alternates: {
    canonical: 'https://mictoo.com/it/m4a-to-mp3',
    languages: LANGS,
  },
  openGraph: {
    title: 'M4A a MP3: Convertitore Gratuito per Audio Apple | Mictoo',
    description: 'Memo vocali dell’iPhone e rimbalzi di GarageBand in MP3 universale.',
    url: 'https://mictoo.com/it/m4a-to-mp3',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'M4A a MP3: Convertitore Gratuito',
    description: 'Memo vocali dell’iPhone in MP3 universale.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function ItM4aToMp3Page() {
  return (
    <ConverterPageLayout
      locale="it"
      mode="converter" from="m4a" to="mp3" currentHref="/it/m4a-to-mp3"
      badge="M4A → MP3 · Gratuito · Audio Apple"
      h1First="M4A a MP3"
      h1Second="Convertitore gratuito per audio dell’ecosistema Apple"
      subtitle="Trascina un memo vocale dell’iPhone, un rimbalzo di GarageBand o un esportazione di Apple Podcasts e ottieni un MP3 universale per host di podcast, telefoni Android più vecchi e lettori legacy."
      outputFormat="MP3" outputQuality="128 kbps" outputAudio="Stereo"
      stepsTitle="Come funziona la conversione da M4A a MP3"
      steps={[
        { icon: 'upload',   title: 'Trascina l’M4A',        desc: 'Da memo vocali, GarageBand, Apple Podcasts. Fino a 25 MB in modo anonimo.' },
        { icon: 'waveform', title: 'Decodifichiamo e codifichiamo', desc: 'ffmpeg decodifica l’AAC all’interno del contenitore M4A e lo ricodifica in MP3 a 128 kbps.' },
        { icon: 'download', title: 'Scarica l’MP3',    desc: 'Ottieni un MP3 compatibile con la maggior parte dei lettori e editor audio attuali.' },
      ]}
      previewInputName="memo-vocale.m4a"
      previewInputSize="6.2 MB · 00:12:04"
      previewOutputName="memo-vocale.mp3"
      previewOutputSize="00:12:04 · 128 kbps · 11.5 MB"
      whyTitle="Perché usare Mictoo per M4A a MP3?"
      whyCards={[
        { icon: 'target',   title: 'Compatibile con iPhone',        desc: 'I memo vocali dell’iPhone in formato .m4a vengono caricati direttamente, senza bisogno di rinominare.' },
        { icon: 'fileAudio',title: 'MP3 per host legacy',   desc: 'Alcuni host di podcast e dispositivi Android più vecchi preferiscono ancora MP3 rispetto a M4A.' },
        { icon: 'lock',     title: 'File eliminati dopo',    desc: 'L’M4A caricato viene eliminato dopo la conversione; l’MP3 viene rimosso entro un’ora.' },
        { icon: 'shield',   title: 'Nessuna filigrana o tag',    desc: 'Solo audio, ricodificato. Nessuna introduzione con marchio, nessun metadato iniettato.' },
      ]}
      scenariosTitle="Quando M4A a MP3 è utile"
      scenarios={[
        { icon: 'headphones', title: 'Memo vocale dell’iPhone' },
        { icon: 'waveform',   title: 'Rimbalzo di GarageBand' },
        { icon: 'mail',       title: 'Host di podcast legacy' },
        { icon: 'archive',    title: 'Formato di libreria coerente' },
        { icon: 'editPen',    title: 'Importazione in DAW più vecchi' },
        { icon: 'video',      title: 'Editor video non Apple' },
      ]}
      tipsTitle="Suggerimenti per una conversione pulita da M4A a MP3"
      tips={[
        'Se la tua piattaforma accetta M4A, potresti non aver bisogno di convertire.',
        'Entrambi i formati sono lossy; la ricodifica aggiunge una piccola perdita di qualità.',
        'I metadati ID3 e iTunes non vengono trasferiti.',
        'Per la trascrizione, carica direttamente l’M4A su /it/m4a-to-text.',
      ]}
      processTitle="Cosa succede durante la conversione"
      processSteps={['M4A (contenitore MP4)', 'Decodifica AAC', 'Codifica MP3']}
      compareTitle="M4A vs MP3"
      compareRows={[
        { fmt: 'M4A', contains: 'No', size: 'Piccolo (efficiente)', best: 'Ecosistema Apple, dispositivi moderni' },
        { fmt: 'MP3', contains: 'No', size: 'Piccolo',             best: 'Universale, lettori legacy, host più vecchi' },
      ]}
      faq={[
        { q: 'Devo convertire M4A in MP3?', a: 'Solo se uno strumento o host specifico richiede MP3. La maggior parte dei dispositivi moderni (inclusi tutti gli Android e Windows nel 2026) riproduce nativamente M4A.' },
        { q: 'Il convertitore è gratuito?', a: 'Sì. I file fino a 25 MB possono essere convertiti senza un account, e l’output non ha filigrana.' },
        { q: 'Perderò qualità?', a: 'M4A e MP3 sono entrambi lossy. La ricodifica aggiunge una piccola perdita ma è inaudibile per l’ascolto tipico.' },
        { q: 'Funziona il formato nativo dei memo vocali dell’iPhone?', a: 'Sì. I memo vocali dell’iPhone scrivono standard .m4a che viene caricato direttamente.' },
        { q: 'I file vengono memorizzati?', a: 'No. L’M4A caricato viene eliminato dopo la conversione; l’MP3 viene rimosso entro un’ora.' },
      ]}
      ctaHeadline="Converti il tuo M4A in MP3 ora"
      ctaSubtitle="Trascina il tuo memo vocale dell’iPhone o audio Apple e ottieni un MP3 portatile."
      ctaButton="Scegli un file M4A"
      moreTools={[
        { href: '/it/aac-to-mp3',  label: 'AAC a MP3' },
        { href: '/it/mp4-to-mp3',  label: 'MP4 a MP3' },
        { href: '/it/mp3-to-m4a',  label: 'MP3 a M4A' },
        { href: '/it/m4a-to-text', label: 'M4A a Testo' },
      ]}
    />
  )
}