import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/mp3-to-m4a',
  'fr': 'https://mictoo.com/fr/mp3-to-m4a',
  'de': 'https://mictoo.com/de/mp3-to-m4a',
  'es': 'https://mictoo.com/es/mp3-to-m4a',
  'ru': 'https://mictoo.com/ru/mp3-to-m4a',
  'it': 'https://mictoo.com/it/mp3-to-m4a',
  'pt': 'https://mictoo.com/pt/mp3-to-m4a',
  'pl': 'https://mictoo.com/pl/mp3-to-m4a',
  'ja': 'https://mictoo.com/ja/mp3-to-m4a',
  'ko': 'https://mictoo.com/ko/mp3-to-m4a',
  'x-default': 'https://mictoo.com/mp3-to-m4a',
}

export const metadata = {
  title: 'MP3 in M4A, convertitore online gratuito | Mictoo',
  description:
    'Converti MP3 in M4A gratuitamente online. Ricodifica MP3 in AAC all’interno di un contenitore M4A per iPhone, iTunes e l’ecosistema Apple. Nessuna registrazione, nessun watermark.',
  alternates: { canonical: 'https://mictoo.com/it/mp3-to-m4a', languages: LANGS },
  openGraph: {
    title: 'MP3 in M4A, convertitore online gratuito | Mictoo',
    description: 'MP3 in AAC all’interno di M4A. Compatibile con iPhone. Nessuna registrazione.',
    url: 'https://mictoo.com/it/mp3-to-m4a',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MP3 in M4A, convertitore online gratuito',
    description: 'AAC in MP4 compatibile con iPhone.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function ItMp3ToM4aPage() {
  return (
    <ConverterPageLayout
      locale="it"
      mode="converter" from="mp3" to="m4a" currentHref="/it/mp3-to-m4a"
      badge="MP3 → M4A · Gratuito · Compatibile con iPhone"
      h1First="MP3 in M4A"
      h1Second="Convertitore online gratuito"
      subtitle="Trascina un MP3 e ottieni un M4A (AAC in contenitore MP4) per Note Vocali iPhone, iTunes, GarageBand e l’ecosistema Apple. Nessun watermark, nessun email."
      outputFormat="M4A" outputQuality="128 kbps AAC" outputAudio="Stereo"
      stepsTitle="Come funziona la conversione da MP3 a M4A"
      steps={[
        { icon: 'upload',   title: 'Trascina l’MP3',        desc: 'Qualsiasi MP3 con bitrate, fino a 25 MB in modo anonimo.' },
        { icon: 'waveform', title: 'Ricodifichiamo in AAC', desc: 'ffmpeg decodifica l’MP3 e ricodifica come 128 kbps AAC all’interno di un contenitore .m4a.' },
        { icon: 'download', title: 'Scarica l’M4A',   desc: 'File compatibile con iPhone con il nome originale più estensione .m4a.' },
      ]}
      previewInputName="episodio.mp3"
      previewInputSize="8.4 MB · 00:09:22"
      previewOutputName="episodio.m4a"
      previewOutputSize="00:09:22 · 128 kbps AAC · 7.6 MB"
      whyTitle="Perché usare Mictoo per MP3 in M4A?"
      whyCards={[
        { icon: 'target',    title: 'Output compatibile con Apple',    desc: 'M4A funziona nativamente con i comuni flussi di lavoro multimediali di iPhone, iTunes, GarageBand e Apple.' },
        { icon: 'fileAudio', title: 'Output prevedibile',       desc: 'Il file è ricodificato come 128 kbps AAC. La sua dimensione finale dipende principalmente dalla durata della registrazione.' },
        { icon: 'lock',      title: 'File eliminati dopo',      desc: 'L’MP3 caricato viene eliminato dopo la conversione; l’M4A viene rimosso entro un’ora.' },
        { icon: 'shield',    title: 'Nessun watermark o tag',      desc: 'Solo l’audio, ricodificato. Nessuna introduzione brandizzata, nessun metadato iniettato.' },
      ]}
      scenariosTitle="Quando MP3 in M4A è utile"
      scenarios={[
        { icon: 'headphones', title: 'Importazione in libreria iTunes' },
        { icon: 'waveform',   title: 'Progetto GarageBand' },
        { icon: 'video',      title: 'Colonna sonora iMovie' },
        { icon: 'mail',       title: 'Compatibilità AirDrop' },
        { icon: 'archive',    title: 'Archivio ecosistema Apple' },
        { icon: 'editPen',    title: 'Importazione in Logic Pro' },
      ]}
      tipsTitle="Consigli per una conversione pulita da MP3 a M4A"
      tips={[
        'MP3 e AAC sono entrambi lossy; la ricodifica aggiunge una piccola perdita di qualità.',
        'Per lossless, converti in WAV invece.',
        'I tag ID3 non vengono trasferiti nell’M4A.',
        'Mantieni il file sorgente sotto l’attuale limite di upload di 25 MB.',
      ]}
      processTitle="Cosa succede durante la conversione"
      processSteps={['Stream MP3', 'Decodifica', 'Codifica AAC / M4A']}
      compareTitle="MP3 vs M4A"
      compareRows={[
        { fmt: 'MP3', contains: 'No', size: 'Piccolo', best: 'Universale, lettori legacy' },
        { fmt: 'M4A', contains: 'No', size: 'Leggermente più piccolo', best: 'iPhone, iTunes, GarageBand, app Apple' },
      ]}
      faq={[
        { q: 'Il convertitore da MP3 a M4A è gratuito?', a: 'Sì. I file fino a 25 MB possono essere convertiti senza un account, e l’output non ha watermark.' },
        { q: 'Convertire MP3 in M4A migliora la qualità?', a: 'No. La ricodifica da un formato lossy a un altro può solo comportare una leggera perdita di qualità. Fallo solo per compatibilità con l’ecosistema Apple.' },
        { q: 'L’M4A funzionerà in iTunes e Apple Music?', a: 'Sì. L’AAC standard all’interno del contenitore MP4 è esattamente il formato utilizzato da iTunes.' },
        { q: 'I file vengono memorizzati?', a: 'No. L’MP3 caricato viene eliminato dopo la conversione; l’M4A viene rimosso entro un’ora.' },
        { q: 'Posso convertire in M4A lossless (ALAC)?', a: 'Non da questa pagina. L’output è lossy AAC. Per lossless, converti prima MP3 in WAV, poi in ALAC nel tuo DAW.' },
      ]}
      ctaHeadline="Converti il tuo MP3 in M4A ora"
      ctaSubtitle="Trascina il tuo MP3 e ottieni un M4A compatibile con iPhone in pochi secondi."
      ctaButton="Scegli un file MP3"
      moreTools={[
        { href: '/it/m4a-to-mp3',  label: 'M4A in MP3' },
        { href: '/it/mp3-to-wav',  label: 'MP3 in WAV' },
        { href: '/it/mp4-to-mp3',  label: 'MP4 in MP3' },
        { href: '/it/m4a-to-text', label: 'M4A in Testo' },
      ]}
    />
  )
}