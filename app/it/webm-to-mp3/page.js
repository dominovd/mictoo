import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/webm-to-mp3',
  'fr': 'https://mictoo.com/fr/webm-to-mp3',
  'de': 'https://mictoo.com/de/webm-to-mp3',
  'es': 'https://mictoo.com/es/webm-to-mp3',
  'ru': 'https://mictoo.com/ru/webm-to-mp3',
  'it': 'https://mictoo.com/it/webm-to-mp3',
  'pt': 'https://mictoo.com/pt/webm-to-mp3',
  'pl': 'https://mictoo.com/pl/webm-to-mp3',
  'ja': 'https://mictoo.com/ja/webm-to-mp3',
  'ko': 'https://mictoo.com/ko/webm-to-mp3',
  'x-default': 'https://mictoo.com/webm-to-mp3',
}

export const metadata = {
  title: 'WEBM in MP3, convertitore online gratuito | Mictoo',
  description:
    'Converti WEBM in MP3 gratuitamente online. Estrai audio MP3 da qualsiasi file video o audio WEBM in pochi secondi. Nessuna registrazione, nessun watermark. Fino a 25 MB.',
  alternates: { canonical: 'https://mictoo.com/it/webm-to-mp3', languages: LANGS },
  openGraph: {
    title: 'WEBM in MP3, convertitore online gratuito | Mictoo',
    description: 'Estrai MP3 da qualsiasi WEBM. Nessuna registrazione, nessun watermark.',
    url: 'https://mictoo.com/it/webm-to-mp3',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WEBM in MP3, convertitore online gratuito',
    description: 'Estrai MP3 da qualsiasi WEBM.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function ItWebmToMp3Page() {
  return (
    <ConverterPageLayout
      locale="it"
      mode="converter" from="webm" to="mp3" currentHref="/it/webm-to-mp3"
      badge="WEBM → MP3 · Gratuito · Nessuna registrazione"
      h1First="WEBM in MP3"
      h1Second="Convertitore online gratuito"
      subtitle="Trascina un WEBM (da Loom, OBS, registrazione Firefox, o un downloader di YouTube) e ottieni un MP3 pulito in pochi secondi. Nessun watermark, nessun email."
      outputFormat="MP3" outputQuality="128 kbps" outputAudio="Stereo"
      stepsTitle="Come funziona la conversione da WEBM a MP3"
      steps={[
        { icon: 'upload',   title: 'Trascina il WEBM',   desc: 'Video o audio solo WEBM, entrambi funzionano. Fino a 25 MB in modo anonimo.' },
        { icon: 'waveform', title: 'Noi demux e codifichiamo', desc: 'ffmpeg rimuove il video (se presente) e ricodifica l’audio Opus o Vorbis in MP3 a 128 kbps.' },
        { icon: 'download', title: 'Scarica l’MP3', desc: 'Ottieni il tuo MP3 pulito in pochi secondi. Nome file originale con estensione .mp3.' },
      ]}
      previewInputName="loom-walkthrough.webm"
      previewInputSize="72 MB · 00:08:12"
      previewOutputName="loom-walkthrough.mp3"
      previewOutputSize="00:08:12 · 128 kbps · 7.5 MB"
      whyTitle="Perché usare Mictoo per WEBM in MP3?"
      whyCards={[
        { icon: 'target',   title: 'Gestisce Opus e Vorbis', desc: 'Entrambi i codec audio WEBM funzionano direttamente, senza ripackaging manuale.' },
        { icon: 'video',    title: 'Video in WEBM gestito',   desc: 'Noi demuxiamo il video server-side. Non è necessario estrarre l’audio da soli.' },
        { icon: 'lock',     title: 'File eliminati dopo',     desc: 'Il WEBM caricato viene eliminato dopo la conversione; l’MP3 viene rimosso entro un’ora.' },
        { icon: 'shield',   title: 'Nessun watermark o tag',     desc: 'L’MP3 in output non ha tag di introduzione, nessun metadata brandizzato.' },
      ]}
      scenariosTitle="Quando WEBM in MP3 è utile"
      scenarios={[
        { icon: 'video',      title: 'Guida di Loom' },
        { icon: 'headphones', title: 'Output da downloader di YouTube' },
        { icon: 'mail',       title: 'Invia un file più piccolo' },
        { icon: 'editPen',    title: 'Preparati per la trascrizione' },
        { icon: 'waveform',   title: 'Registrazione del browser' },
        { icon: 'archive',    title: 'Archivia solo audio' },
      ]}
      tipsTitle="Suggerimenti per una conversione pulita da WEBM a MP3"
      tips={[
        'Il WEBM video viene demuxato automaticamente, non è necessario rimuovere prima.',
        'Per registrazioni superiori a 25 MB, ritaglia o dividi la sorgente prima di caricarla.',
        'La traccia audio predefinita viene utilizzata se ne esistono più di una.',
        'Per la trascrizione Whisper, carica direttamente il WEBM su /webm-to-text.',
      ]}
      processTitle="Cosa succede durante la conversione"
      processSteps={['Contenitore WEBM', 'Estrazione della traccia audio', 'Codifica MP3']}
      compareTitle="WEBM vs MP3"
      compareRows={[
        { fmt: 'WEBM', contains: 'Spesso sì', size: 'Medio-grande', best: 'Registrazione web, video del browser' },
        { fmt: 'MP3',  contains: 'No',        size: 'Piccolo',        best: 'Condivisione, riproduzione, ovunque' },
      ]}
      faq={[
        { q: 'Il convertitore da WEBM a MP3 è gratuito?', a: 'Sì. I file fino a 25 MB possono essere convertiti senza un account, e l’output non ha watermark.' },
        { q: 'Cosa succede se il mio WEBM ha video?', a: 'Noi demuxiamo la traccia video server-side e codifichiamo solo l’audio. Non è necessario pre-rimuovere nulla.' },
        { q: 'Quali codec audio WEBM funzionano?', a: 'Opus (moderno, più comune) e Vorbis (più vecchio). Entrambi sono supportati direttamente.' },
        { q: 'I file caricati vengono memorizzati?', a: 'No. Il WEBM viene eliminato dopo la conversione; l’MP3 viene rimosso entro un’ora.' },
        { q: 'Il mio WEBM è superiore a 25 MB. Cosa faccio?', a: 'Ritaglia la sorgente prima di caricarla, oppure estrai prima un WEBM solo audio per ridurre la dimensione del file.' },
      ]}
      ctaHeadline="Converti il tuo WEBM in MP3 ora"
      ctaSubtitle="Trascina il tuo WEBM e ottieni un MP3 pulito in pochi secondi. Nessuna registrazione. Nessun watermark."
      ctaButton="Scegli un file WEBM"
      moreTools={[
        { href: '/it/mp4-to-mp3',  label: 'MP4 in MP3' },
        { href: '/it/wav-to-mp3',  label: 'WAV in MP3' },
        { href: '/it/flac-to-mp3', label: 'FLAC in MP3' },
        { href: '/it/webm-to-text', label: 'WEBM in Testo' },
      ]}
    />
  )
}