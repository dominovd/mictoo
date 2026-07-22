import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/mp4-to-mp3',
  'fr': 'https://mictoo.com/fr/mp4-to-mp3',
  'de': 'https://mictoo.com/de/mp4-to-mp3',
  'es': 'https://mictoo.com/es/mp4-to-mp3',
  'ru': 'https://mictoo.com/ru/mp4-to-mp3',
  'it': 'https://mictoo.com/it/mp4-to-mp3',
  'pt': 'https://mictoo.com/pt/mp4-to-mp3',
  'pl': 'https://mictoo.com/pl/mp4-to-mp3',
  'ja': 'https://mictoo.com/ja/mp4-to-mp3',
  'ko': 'https://mictoo.com/ko/mp4-to-mp3',
  'x-default': 'https://mictoo.com/mp4-to-mp3',
}

export const metadata = {
  title: 'MP4 in MP3, convertitore online gratuito | Mictoo',
  description:
    'Converti MP4 in MP3 gratuitamente online. Carica il tuo video, ottieni un file audio MP3 pulito a 128 kbps in pochi secondi. Nessuna registrazione, nessun watermark, nessun’email. Fino a 25 MB.',
  alternates: { canonical: 'https://mictoo.com/it/mp4-to-mp3', languages: LANGS },
  openGraph: {
    title: 'MP4 in MP3, convertitore online gratuito | Mictoo',
    description: 'Converti MP4 in MP3 gratuitamente online. 128 kbps, nessuna registrazione, nessun watermark.',
    url: 'https://mictoo.com/it/mp4-to-mp3',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MP4 in MP3, convertitore online gratuito',
    description: 'Converti MP4 in MP3 gratuitamente online. 128 kbps, nessuna registrazione, nessun watermark.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function ItMp4ToMp3Page() {
  return (
    <ConverterPageLayout
      locale="it"
      mode="converter"
      from="mp4"
      to="mp3"
      currentHref="/it/mp4-to-mp3"

      badge="MP4 → MP3 · Gratuito · Nessuna registrazione"
      h1First="MP4 in MP3"
      h1Second="Convertitore online gratuito"
      subtitle="Carica un video MP4 e ottieni un file audio MP3 pulito in pochi secondi. Nessun watermark, nessuna email, nessuna attesa."

      outputFormat="MP3"
      outputQuality="128 kbps"
      outputAudio="Stereo"

      stepsTitle="Come funziona la conversione da MP4 a MP3"
      steps={[
        {
          icon: 'upload',
          title: 'Carica l’MP4',
          desc: 'Carica il tuo video MP4. Accettiamo file fino a 25 MB.',
        },
        {
          icon: 'waveform',
          title: 'Estraiamo l’audio',
          desc: 'Il nostro server estrae la traccia audio e la codifica in MP3.',
        },
        {
          icon: 'download',
          title: 'Scarica l’MP3',
          desc: 'Ottieni il tuo file MP3 pulito in pochi secondi.',
        },
      ]}

      previewInputName="registrazione-riunione.mp4"
      previewInputSize="128,4 MB · 00:45:32"
      previewOutputName="registrazione-riunione.mp3"
      previewOutputSize="00:45:32 · 128 kbps"

      whyTitle="Perché usare Mictoo per MP4 in MP3?"
      whyCards={[
        {
          icon: 'target',
          title: 'Solo la conversione',
          desc: 'Ci concentriamo su una cosa: convertire MP4 in MP3 rapidamente e in modo affidabile.',
        },
        {
          icon: 'fileAudio',
          title: 'MP3 piccolo e universale',
          desc: 'MP3 funziona ovunque e mantiene le dimensioni dei file ridotte.',
        },
        {
          icon: 'lock',
          title: 'I file vengono eliminati',
          desc: 'I tuoi caricamenti vengono elaborati in modo sicuro e cancellati dopo la conversione.',
        },
        {
          icon: 'shield',
          title: 'Nessun watermark o tag audio',
          desc: 'Ottieni un MP3 pulito senza watermark o tag aggiunti.',
        },
      ]}

      scenariosTitle="Quando MP4 in MP3 è utile"
      scenarios={[
        { icon: 'headphones', title: 'Salva un podcast video' },
        { icon: 'cap',        title: 'Estrai l’audio di una lezione' },
        { icon: 'mail',       title: 'Invia un file più piccolo' },
        { icon: 'editPen',    title: 'Prepara per la trascrizione' },
        { icon: 'waveform',   title: 'Audio di sottofondo' },
        { icon: 'archive',    title: 'Archivia registrazioni vocali' },
      ]}

      tipsTitle="Consigli per una conversione pulita"
      tips={[
        'Taglia prima i video enormi.',
        '128 kbps funziona per voce e musica.',
        'Viene utilizzata la traccia audio predefinita.',
        'Video protetti da DRM non sono supportati.',
      ]}
      processTitle="Cosa succede durante la conversione"
      processSteps={[
        'Contenitore MP4',
        'Estrazione della traccia audio',
        'Codifica MP3',
      ]}

      compareTitle="MP4 vs MP3"
      compareRows={[
        { fmt: 'MP4', contains: 'Sì', size: 'Grande', best: 'Guardare, condividere video' },
        { fmt: 'MP3', contains: 'No',  size: 'Piccolo', best: 'Ascoltare, solo audio' },
      ]}

      faq={[
        { q: 'Il convertitore da MP4 a MP3 è gratuito?', a: 'Sì. Nessun account necessario per file fino a 25 MB, nessun limite di tempo, nessun watermark sull’output, nessun messaggio di aggiornamento. Gli annunci pubblicitari sulle pagine di marketing coprono i costi del server.' },
        { q: 'La conversione riduce la qualità audio?', a: 'Leggermente. MP3 è un formato lossy, ma a 128 kbps la perdita di qualità è inaudibile per la voce e la riproduzione musicale tipica. Se hai bisogno di qualità lossless, converti in WAV invece.' },
        { q: 'I file caricati vengono memorizzati?', a: 'No. Il tuo MP4 viene memorizzato su Vercel Blob storage solo il tempo necessario per essere convertito, poi viene eliminato. L’MP3 risultante viene cancellato entro un’ora. Salva l’MP3 localmente.' },
        { q: 'Posso convertire un MP4 grande?', a: 'Il limite attuale per il caricamento è di 25 MB. Se il tuo MP4 è più grande, taglialo in QuickTime, nell’app Foto o in un altro editor video prima di caricarlo.' },
        { q: 'Funziona su mobile?', a: 'Sì. La pagina è mobile-friendly e i caricamenti funzionano da iOS Safari e Android Chrome. Su iPhone, condividi prima il video in Files in modo che il selettore possa raggiungerlo.' },
      ]}

      ctaHeadline="Converti il tuo MP4 in MP3 ora"
      ctaSubtitle="Carica il tuo video e ottieni un MP3 pulito in pochi secondi. Nessuna registrazione. Nessun watermark."
      ctaButton="Scegli un file MP4"

      moreTools={[
        { href: '/it/wav-to-mp3',  label: 'WAV in MP3' },
        { href: '/it/webm-to-mp3', label: 'WEBM in MP3' },
        { href: '/it/flac-to-mp3', label: 'FLAC in MP3' },
        { href: '/it/aac-to-mp3',  label: 'AAC in MP3' },
        { href: '/it/m4a-to-mp3',  label: 'M4A in MP3' },
        { href: '/it/mp3-to-wav',  label: 'MP3 in WAV' },
      ]}
    />
  )
}