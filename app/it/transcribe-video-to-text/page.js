import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/transcribe-video-to-text',
  'fr': 'https://mictoo.com/fr/transcribe-video-to-text',
  'de': 'https://mictoo.com/de/transcribe-video-to-text',
  'es': 'https://mictoo.com/es/transcribe-video-to-text',
  'ru': 'https://mictoo.com/ru/transcribe-video-to-text',
  'it': 'https://mictoo.com/it/transcribe-video-to-text',
  'pt': 'https://mictoo.com/pt/transcribe-video-to-text',
  'pl': 'https://mictoo.com/pl/transcribe-video-to-text',
  'ja': 'https://mictoo.com/ja/transcribe-video-to-text',
  'x-default': 'https://mictoo.com/transcribe-video-to-text',
}

export const metadata = {
  title: 'Video in testo — Trascrizione video gratis online | Mictoo',
  description: 'Converti video in testo online gratis. Carica MP4, WEBM o MOV e ottieni una trascrizione precisa all\'istante. IA. Senza account.',
  alternates: { canonical: 'https://mictoo.com/it/transcribe-video-to-text', languages: LANGS },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Video in testo — Mictoo',
  url: 'https://mictoo.com/it/transcribe-video-to-text',
  description: 'Convertitore video-testo online gratis. Trascrive MP4, WEBM e altri formati video.',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}

export default function ItVideoToTextPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LandingLayout
        badge="MP4 · WEBM · Gratis · Istantaneo"
        h1={<>Video in testo online<br /><span className="text-brand-600">Trascrizione gratis</span></>}
        subtitle="Carica qualsiasi file video — download YouTube, screencast, interviste, lezioni — e ottieni le parole parlate come testo in pochi secondi."
        defaultLanguage="it"
        features={[
          { icon: '🎬', title: 'MP4, WEBM e altri', desc: 'Supporta MP4, WEBM, MPEG e altri formati video. L\'audio viene estratto automaticamente.' },
          { icon: '🎞️', title: 'Sottotitoli SRT', desc: 'Scarica un file .srt con timestamp — pronto per essere caricato su YouTube o qualsiasi editor video.' },
          { icon: '⚡', title: 'Risultati istantanei', desc: 'Un video di 10 minuti viene tipicamente trascritto in meno di 30 secondi. Nessuna coda, nessuna attesa.' },
        ]}
        faq={[
          { q: 'Come trascrivere un video gratis?', a: 'Carica il tuo file video con lo strumento sopra. Mictoo estrae l\'audio e lo trascrive con l\'IA. La trascrizione appare in pochi secondi.' },
          { q: 'Posso ottenere i sottotitoli da un video?', a: 'Sì. Dopo la trascrizione, clicca il pulsante di download .srt per ottenere un file di sottotitoli con timestamp che puoi caricare su YouTube, Premiere o qualsiasi editor.' },
          { q: 'Quali formati video sono supportati?', a: 'MP4, WEBM, MPEG. Sono supportati anche i file audio (MP3, WAV, M4A, OGG, FLAC).' },
          { q: 'Funziona con i video YouTube?', a: 'Sì — scarica prima il tuo video YouTube (con un downloader), poi carica il file qui per la trascrizione.' },
          { q: "C'è un limite di dimensione?", a: 'Fino a 25 MB. Per video più lunghi, estrai prima la traccia audio (es. con ffmpeg o un convertitore online) per ridurre la dimensione.' },
        ]}
        relatedLinks={[
          { href: '/it/transcribe-mp3-to-text', label: 'MP3 in testo' },
          { href: '/it/transcribe-audio-to-text', label: 'Audio in testo' },
          { href: '/it', label: 'Tutti i formati' },
        ]}
      />
    </>
  )
}
