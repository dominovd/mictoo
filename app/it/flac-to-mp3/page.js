import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/flac-to-mp3',
  'fr': 'https://mictoo.com/fr/flac-to-mp3',
  'de': 'https://mictoo.com/de/flac-to-mp3',
  'es': 'https://mictoo.com/es/flac-to-mp3',
  'ru': 'https://mictoo.com/ru/flac-to-mp3',
  'it': 'https://mictoo.com/it/flac-to-mp3',
  'pt': 'https://mictoo.com/pt/flac-to-mp3',
  'pl': 'https://mictoo.com/pl/flac-to-mp3',
  'ja': 'https://mictoo.com/ja/flac-to-mp3',
  'ko': 'https://mictoo.com/ko/flac-to-mp3',
  'x-default': 'https://mictoo.com/flac-to-mp3',
}

export const metadata = {
  title: 'FLAC in MP3, convertitore online gratuito | Mictoo',
  description:
    'Converti FLAC in MP3 gratuitamente online. Riduci FLAC senza perdita a MP3 a 128 kbps in pochi secondi. Nessuna registrazione, nessuna filigrana. Fino a 25 MB.',
  alternates: { canonical: 'https://mictoo.com/it/flac-to-mp3', languages: LANGS },
  openGraph: {
    title: 'FLAC in MP3, convertitore online gratuito | Mictoo',
    description: 'Riduci FLAC senza perdita a MP3 a 128 kbps. Nessuna registrazione.',
    url: 'https://mictoo.com/it/flac-to-mp3',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FLAC in MP3, convertitore online gratuito',
    description: 'Riduci FLAC senza perdita a MP3 portatile.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function ItFlacToMp3Page() {
  return (
    <ConverterPageLayout
      locale="it"
      mode="converter" from="flac" to="mp3" currentHref="/it/flac-to-mp3"
      badge="FLAC → MP3 · Gratuito · Nessuna registrazione"
      h1First="FLAC in MP3"
      h1Second="Convertitore online gratuito"
      subtitle="Trascina un file FLAC senza perdita (da un CD, download Tidal, o sorgente hi-res) e ottieni un MP3 portatile a 128 kbps in pochi secondi."
      outputFormat="MP3" outputQuality="128 kbps" outputAudio="Stereo"
      stepsTitle="Come funziona la conversione da FLAC a MP3"
      steps={[
        { icon: 'upload',   title: 'Trascina il FLAC',       desc: 'Qualsiasi FLAC (nativo o FLAC-in-OGG). Fino a 25 MB in modo anonimo.' },
        { icon: 'waveform', title: 'Decodifichiamo e codifichiamo', desc: 'ffmpeg decodifica il FLAC senza perdita e lo ricodifica in MP3 stereo a 128 kbps.' },
        { icon: 'download', title: 'Scarica l’MP3',    desc: 'Ottieni il tuo MP3 5-8 volte più piccolo, pronto per qualsiasi lettore.' },
      ]}
      previewInputName="album-track.flac"
      previewInputSize="42 MB · 00:05:12 · 16-bit / 44.1 kHz"
      previewOutputName="album-track.mp3"
      previewOutputSize="00:05:12 · 128 kbps · 4.8 MB"
      whyTitle="Perché usare Mictoo per FLAC in MP3?"
      whyCards={[
        { icon: 'target',    title: 'Mantiene il master senza perdita', desc: 'Il tuo file FLAC non viene mai modificato. Produciamo solo una copia.' },
        { icon: 'fileAudio', title: 'Copia di ascolto più piccola',    desc: 'Un MP3 a 128 kbps è spesso diverse volte più piccolo del FLAC. La conversione è con perdita, quindi conserva il FLAC come tuo master.' },
        { icon: 'lock',      title: 'File eliminati dopo',       desc: 'Il FLAC caricato viene eliminato dopo la conversione; l’MP3 viene purgato entro un’ora.' },
        { icon: 'shield',    title: 'Nessuna filigrana o tag',       desc: 'Solo l’audio, ricodificato. Nessuna giunzione introduttiva, nessun metadato brandizzato.' },
      ]}
      scenariosTitle="Quando FLAC in MP3 è utile"
      scenarios={[
        { icon: 'headphones', title: 'CD da riprodurre su telefono' },
        { icon: 'mail',       title: 'Invia un file più piccolo via email' },
        { icon: 'archive',    title: 'Libreria musicale portatile' },
        { icon: 'editPen',    title: 'Importazione in DAW' },
        { icon: 'waveform',   title: 'Copia per ascolto podcast' },
        { icon: 'video',      title: 'Colonna sonora video' },
      ]}
      tipsTitle="Suggerimenti per una conversione pulita da FLAC a MP3"
      tips={[
        'Conserva il FLAC come copia di archivio senza perdita.',
        '128 kbps è trasparente per la maggior parte degli ascolti.',
        'Per tracce superiori a 25 MB, accorcia o dividi la sorgente prima di caricarla.',
        'I tag metadati Vorbis (titolo/artista) non vengono trasferiti nell’MP3.',
      ]}
      processTitle="Cosa succede durante la conversione"
      processSteps={['Contenitore FLAC', 'Decodifica senza perdita', 'Codifica MP3']}
      compareTitle="FLAC vs MP3"
      compareRows={[
        { fmt: 'FLAC', contains: 'No', size: 'Grande (~5-8 MB/min)', best: 'Archiviazione, riproduzione hi-fi' },
        { fmt: 'MP3',  contains: 'No', size: 'Piccolo (~1 MB/min)',   best: 'Condivisione, telefoni, ovunque' },
      ]}
      faq={[
        { q: 'Il convertitore da FLAC a MP3 è gratuito?', a: 'Sì. I file fino a 25 MB possono essere convertiti senza un account, e l’output non ha filigrana.' },
        { q: 'Perdo qualità convertendo FLAC in MP3?', a: 'Tecnicamente sì (MP3 è con perdita), ma a 128 kbps la perdita è inaudibile per l’ascolto tipico. Conserva il FLAC come copia di archivio.' },
        { q: 'I file FLAC-in-OGG sono supportati?', a: 'Sì. Funzionano sia FLAC nativo (byte magici fLaC) che FLAC all’interno di contenitori OGG.' },
        { q: 'I file vengono memorizzati?', a: 'No. Il FLAC caricato viene eliminato dopo la conversione; l’MP3 viene purgato entro un’ora.' },
        { q: 'Il mio FLAC è superiore a 25 MB. Cosa faccio?', a: 'Accorcia o dividi la sorgente, oppure esporta una copia di ascolto a bassa risoluzione prima di caricarla.' },
      ]}
      ctaHeadline="Converti il tuo FLAC in MP3 ora"
      ctaSubtitle="Trascina il tuo FLAC e ottieni un MP3 portatile in pochi secondi. Nessuna registrazione. Nessuna filigrana."
      ctaButton="Scegli un file FLAC"
      moreTools={[
        { href: '/it/wav-to-mp3',  label: 'WAV in MP3' },
        { href: '/it/mp4-to-mp3',  label: 'MP4 in MP3' },
        { href: '/it/webm-to-mp3', label: 'WEBM in MP3' },
        { href: '/it/flac-to-text', label: 'FLAC in Testo' },
      ]}
    />
  )
}