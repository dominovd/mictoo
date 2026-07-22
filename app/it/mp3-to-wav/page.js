import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/mp3-to-wav',
  'fr': 'https://mictoo.com/fr/mp3-to-wav',
  'de': 'https://mictoo.com/de/mp3-to-wav',
  'es': 'https://mictoo.com/es/mp3-to-wav',
  'ru': 'https://mictoo.com/ru/mp3-to-wav',
  'it': 'https://mictoo.com/it/mp3-to-wav',
  'pt': 'https://mictoo.com/pt/mp3-to-wav',
  'pl': 'https://mictoo.com/pl/mp3-to-wav',
  'ja': 'https://mictoo.com/ja/mp3-to-wav',
  'ko': 'https://mictoo.com/ko/mp3-to-wav',
  'x-default': 'https://mictoo.com/mp3-to-wav',
}

export const metadata = {
  title: 'MP3 a WAV, convertitore online gratuito | Mictoo',
  description:
    'Converti MP3 in WAV gratuitamente online. Espandi MP3 compresso in WAV non compresso a 16 bit/44,1 kHz per l’editing audio. Nessuna registrazione, nessun watermark.',
  alternates: { canonical: 'https://mictoo.com/it/mp3-to-wav', languages: LANGS },
  openGraph: {
    title: 'MP3 a WAV, convertitore online gratuito | Mictoo',
    description: 'MP3 in WAV non compresso a 16 bit/44,1 kHz. Per l’editing.',
    url: 'https://mictoo.com/it/mp3-to-wav',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MP3 a WAV, convertitore online gratuito',
    description: 'Per editing e mastering DAW.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function ItMp3ToWavPage() {
  return (
    <ConverterPageLayout
      locale="it"
      mode="converter" from="mp3" to="wav" currentHref="/it/mp3-to-wav"
      badge="MP3 → WAV · Gratuito · Adatto per editor"
      h1First="MP3 a WAV"
      h1Second="Convertitore online gratuito"
      subtitle="Trascina un MP3 e ottieni un WAV non compresso a 16 bit / 44,1 kHz per editing DAW, mastering o masterizzazione CD. Nessun watermark, nessun email."
      outputFormat="WAV" outputQuality="16-bit / 44,1 kHz" outputAudio="Stereo"
      stepsTitle="Come funziona la conversione da MP3 a WAV"
      steps={[
        { icon: 'upload',   title: 'Trascina l’MP3',       desc: 'Qualsiasi MP3 a bitrate, fino a 25 MB in modo anonimo.' },
        { icon: 'waveform', title: 'Decodifichiamo in PCM', desc: 'ffmpeg decodifica l’MP3 in PCM non compresso a 16 bit / 44,1 kHz avvolto in un contenitore WAV.' },
        { icon: 'download', title: 'Scarica il WAV',       desc: 'Pronto per Audacity, Pro Tools, Logic, Ableton e qualsiasi editor audio.' },
      ]}
      previewInputName="voiceover.mp3"
      previewInputSize="4,6 MB · 00:05:00 · 128 kbps"
      previewOutputName="voiceover.wav"
      previewOutputSize="00:05:00 · 16-bit / 44,1 kHz · 50 MB"
      whyTitle="Perché usare Mictoo per MP3 a WAV?"
      whyCards={[
        { icon: 'target',   title: 'Output pronto per DAW',       desc: 'PCM non compresso è ciò che gli editor audio e gli strumenti di mastering si aspettano.' },
        { icon: 'fileAudio',title: 'Standard 16-bit / 44,1', desc: 'Un’impostazione PCM ampiamente supportata per editor audio, strumenti di mastering e software di masterizzazione CD.' },
        { icon: 'lock',     title: 'File eliminati dopo',    desc: 'L’MP3 caricato viene eliminato dopo la conversione; il WAV viene rimosso entro un’ora.' },
        { icon: 'shield',   title: 'Nessun watermark o tag',    desc: 'Solo l’audio, decodificato in PCM. Nessuna introduzione brandizzata, nessun metadata iniettato.' },
      ]}
      scenariosTitle="Quando MP3 a WAV è utile"
      scenarios={[
        { icon: 'editPen',    title: 'Editing in Audacity' },
        { icon: 'waveform',   title: 'Importazione in Pro Tools' },
        { icon: 'headphones', title: 'Flusso di lavoro di mastering' },
        { icon: 'archive',    title: 'Masterizzazione CD' },
        { icon: 'video',      title: 'Editor video con requisito WAV' },
        { icon: 'target',     title: 'Input per addestramento al voice-cloning' },
      ]}
      tipsTitle="Suggerimenti per una conversione pulita da MP3 a WAV"
      tips={[
        'WAV è 10× più grande di MP3 (circa 10 MB al minuto).',
        'L’output non è "veramente" lossless ,  preserva il segnale MP3.',
        'Per audio veramente lossless, inizia da un master FLAC o WAV originale.',
        'Mantieni il file sorgente sotto l’attuale limite di upload di 25 MB.',
      ]}
      processTitle="Cosa succede durante la conversione"
      processSteps={['Stream MP3', 'Decodifica in PCM', 'Contenitore WAV']}
      compareTitle="MP3 vs WAV"
      compareRows={[
        { fmt: 'MP3', contains: 'No', size: 'Piccolo (~1 MB/min)', best: 'Condivisione, telefoni, streaming' },
        { fmt: 'WAV', contains: 'No', size: 'Grande (~10 MB/min)', best: 'Editing, mastering, masterizzazione CD' },
      ]}
      faq={[
        { q: 'Convertire MP3 in WAV recupera la qualità lossless?', a: 'No. MP3 è lossy; il WAV preserva il segnale MP3 ma nulla di più. Per un vero lossless, devi partire da un FLAC o WAV originale.' },
        { q: 'Il convertitore è gratuito?', a: 'Sì. I file fino a 25 MB possono essere convertiti senza un account, e l’output non ha watermark.' },
        { q: 'Perché il file WAV è così molto più grande?', a: 'WAV è PCM non compresso. Un MP3 da 5 MB diventa circa un WAV da 50 MB. È normale.' },
        { q: 'Quale profondità di bit e frequenza di campionamento?', a: '16-bit / 44,1 kHz stereo (qualità CD). Questo è il formato standard per l’importazione in DAW.' },
        { q: 'I file vengono memorizzati?', a: 'No. L’MP3 caricato viene eliminato dopo la conversione; il WAV viene rimosso entro un’ora.' },
      ]}
      ctaHeadline="Converti il tuo MP3 in WAV ora"
      ctaSubtitle="Trascina il tuo MP3 e ottieni un WAV non compresso pronto per l’editing."
      ctaButton="Scegli un file MP3"
      moreTools={[
        { href: '/it/wav-to-mp3',  label: 'WAV a MP3' },
        { href: '/it/mp3-to-m4a',  label: 'MP3 a M4A' },
        { href: '/it/flac-to-mp3', label: 'FLAC a MP3' },
        { href: '/it/wav-to-text', label: 'WAV a Testo' },
      ]}
    />
  )
}