import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/wav-to-mp3',
  'fr': 'https://mictoo.com/fr/wav-to-mp3',
  'de': 'https://mictoo.com/de/wav-to-mp3',
  'es': 'https://mictoo.com/es/wav-to-mp3',
  'ru': 'https://mictoo.com/ru/wav-to-mp3',
  'it': 'https://mictoo.com/it/wav-to-mp3',
  'pt': 'https://mictoo.com/pt/wav-to-mp3',
  'pl': 'https://mictoo.com/pl/wav-to-mp3',
  'ja': 'https://mictoo.com/ja/wav-to-mp3',
  'ko': 'https://mictoo.com/ko/wav-to-mp3',
  'x-default': 'https://mictoo.com/wav-to-mp3',
}

export const metadata = {
  title: 'WAV in MP3, convertitore online gratuito | Mictoo',
  description:
    'Converti WAV in MP3 gratuitamente online. Riduci file WAV senza perdita a MP3 portatili a 128 kbps in pochi secondi. Nessuna registrazione, nessuna filigrana. Fino a 25 MB.',
  alternates: { canonical: 'https://mictoo.com/it/wav-to-mp3', languages: LANGS },
  openGraph: {
    title: 'WAV in MP3, convertitore online gratuito | Mictoo',
    description: 'Riduci WAV senza perdita a MP3 portatili a 128 kbps. Nessuna registrazione.',
    url: 'https://mictoo.com/it/wav-to-mp3',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WAV in MP3, convertitore online gratuito',
    description: 'Riduci WAV a MP3 portatile.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function ItWavToMp3Page() {
  return (
    <ConverterPageLayout
      locale="it"
      mode="converter" from="wav" to="mp3" currentHref="/it/wav-to-mp3"
      badge="WAV → MP3 · Gratuito · Nessuna registrazione"
      h1First="WAV in MP3"
      h1Second="Convertitore online gratuito"
      subtitle="Trascina un file WAV non compresso e ottieni un MP3 piccolo e portatile in pochi secondi. Nessuna filigrana, nessun’email, nessuna attesa."
      outputFormat="MP3" outputQuality="128 kbps" outputAudio="Stereo"
      stepsTitle="Come funziona la conversione da WAV a MP3"
      steps={[
        { icon: 'upload',   title: 'Trascina il WAV',         desc: 'Carica un file WAV fino a 25 MB. Non è necessario alcun account.' },
        { icon: 'waveform', title: 'Noi codifichiamo in MP3',  desc: 'ffmpeg codifica in MP3 stereo a 128 kbps a 44.1 kHz. Un WAV da 25 MB finisce in circa 10 secondi.' },
        { icon: 'download', title: 'Scarica l’MP3',          desc: 'Ottieni un MP3 più piccolo a 128 kbps con il nome file originale.' },
      ]}
      previewInputName="studio-bounce.wav"
      previewInputSize="120 MB · 00:12:34 · 16-bit / 44.1 kHz"
      previewOutputName="studio-bounce.mp3"
      previewOutputSize="00:12:34 · 128 kbps · 11.5 MB"
      whyTitle="Perché usare Mictoo per WAV in MP3?"
      whyCards={[
        { icon: 'target',   title: 'Un lavoro fatto bene',      desc: 'Solo la conversione. Nessun popup per la newsletter, nessuna barra di progresso falsa.' },
        { icon: 'fileAudio',title: 'Output molto più piccolo',   desc: 'I file WAV PCM non compressi diventano spesso 8, 12× più piccoli a 128 kbps. Il rapporto esatto dipende dalla sorgente.' },
        { icon: 'lock',     title: 'File eliminati dopo',       desc: 'Il tuo upload viene eliminato una volta completata la conversione; l’MP3 viene rimosso entro un’ora.' },
        { icon: 'shield',   title: 'Nessuna filigrana o tag',    desc: 'Nessuna introduzione con marchio, nessun metadato iniettato. Solo l’audio, ricodificato.' },
      ]}
      scenariosTitle="Quando WAV in MP3 è utile"
      scenarios={[
        { icon: 'headphones', title: 'Studio bounce per il telefono' },
        { icon: 'mail',       title: 'Invia un file più piccolo' },
        { icon: 'archive',    title: 'Archivia a dimensioni più piccole' },
        { icon: 'editPen',    title: 'Prepara per la trascrizione' },
        { icon: 'waveform',   title: 'Importazione della libreria musicale' },
        { icon: 'video',      title: 'Voiceover per video' },
      ]}
      tipsTitle="Suggerimenti per una conversione pulita da WAV a MP3"
      tips={[
        '128 kbps è trasparente per la maggior parte degli ascolti.',
        'Se il WAV supera i 25 MB, ritaglia o comprimi prima di caricarlo.',
        'Il WAV multicanale viene miscelato in stereo.',
        'Per una conservazione senza perdita, conserva il WAV come copia di archivio.',
      ]}
      processTitle="Cosa succede durante la conversione"
      processSteps={['Contenitore WAV', 'Decodifica PCM', 'Codifica MP3']}
      compareTitle="WAV vs MP3"
      compareRows={[
        { fmt: 'WAV', contains: 'No', size: 'Grande (~10 MB/min)', best: 'Editing, archiviazione, studio' },
        { fmt: 'MP3', contains: 'No', size: 'Piccolo (~1 MB/min)',  best: 'Condivisione, riproduzione, ascolto' },
      ]}
      faq={[
        { q: 'Il convertitore da WAV a MP3 è gratuito?', a: 'Sì. Non è necessario alcun account per file fino a 25 MB, e l’output non ha filigrana.' },
        { q: 'La conversione riduce la qualità audio?', a: 'Leggermente. L’MP3 a 128 kbps è un formato lossy ma la perdita di qualità è inaudibile per la voce e la riproduzione musicale tipica. Conserva il tuo WAV come master.' },
        { q: 'I file caricati vengono memorizzati?', a: 'No. Il tuo WAV viene memorizzato su Vercel Blob storage solo il tempo necessario per convertire, poi viene eliminato. L’MP3 viene rimosso entro un’ora.' },
        { q: 'Posso convertire un WAV grande?', a: 'Il limite attuale per il caricamento è di 25 MB. Per un file più grande, ritaglia o esporta una copia mono o a bassa frequenza di campionamento prima di caricarlo.' },
        { q: 'Funziona su mobile?', a: 'Sì. I caricamenti funzionano da iOS Safari e Android Chrome.' },
      ]}
      ctaHeadline="Converti il tuo WAV in MP3 ora"
      ctaSubtitle="Trascina il tuo WAV e ottieni un MP3 portatile in pochi secondi. Nessuna registrazione. Nessuna filigrana."
      ctaButton="Scegli un file WAV"
      moreTools={[
        { href: '/it/mp4-to-mp3',  label: 'MP4 in MP3' },
        { href: '/it/webm-to-mp3', label: 'WEBM in MP3' },
        { href: '/it/flac-to-mp3', label: 'FLAC in MP3' },
        { href: '/it/mp3-to-wav',  label: 'MP3 in WAV' },
        { href: '/it/wav-to-text', label: 'WAV in Testo' },
      ]}
    />
  )
}