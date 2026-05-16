import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'Trascrizione IA Audio e Video in Testo, Gratuita — Mictoo',
  description: 'Trascrivi audio e video in testo gratis online. Senza registrazione. Su IA. Supporta MP3, MP4, WAV e oltre 50 lingue.',
  alternates: {
    canonical: 'https://mictoo.com/it',
    languages: {
      'en': 'https://mictoo.com',
      'fr': 'https://mictoo.com/fr',
      'de': 'https://mictoo.com/de',
      'es': 'https://mictoo.com/es',
      'ru': 'https://mictoo.com/ru',
      'it': 'https://mictoo.com/it',
      'pt': 'https://mictoo.com/pt',
      'pl': 'https://mictoo.com/pl',
      'x-default': 'https://mictoo.com',
    },
  },
  openGraph: {
    title: 'Mictoo — Trascrizione IA Audio & Video Gratuita',
    description: 'Carica audio o video e ottieni la trascrizione in pochi secondi.',
    url: 'https://mictoo.com/it',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630, alt: 'Mictoo — Trascrizione IA Audio & Video Gratuita' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mictoo — Trascrizione IA Gratuita',
    description: 'Carica audio o video e ottieni la trascrizione in pochi secondi.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function ItalianPage() {
  return (
    <LandingLayout
      badge="IA · Gratis · Senza registrazione · 50+ lingue"
      h1={<>Trascrizione audio e video in testo<br /><span className="text-brand-600">con IA, gratis online</span></>}
      subtitle="Carica qualsiasi file audio o video e ottieni una trascrizione IA precisa in pochi secondi. Nessun account richiesto."
      defaultLanguage="it"
      features={[
        {
          icon: '🎙️',
          title: 'Tutti i formati audio',
          desc: 'MP3, MP4, WAV, M4A, OGG, WEBM, FLAC. Fino a 25 MB.',
        },
        {
          icon: '🇮🇹',
          title: 'Italiano e oltre 50 lingue',
          desc: 'Rilevamento automatico della lingua. Funziona con italiano, inglese, spagnolo, francese e molte altre.',
        },
        {
          icon: '📥',
          title: 'Scarica come .txt o .srt',
          desc: 'Modifica la trascrizione nel browser e scarica come testo o sottotitoli.',
        },
      ]}
      faq={[
        {
          q: 'Come convertire audio in testo gratuitamente?',
          a: 'Carica il file audio sopra. Mictoo lo trascrive automaticamente con Whisper di OpenAI e mostra il testo in pochi secondi.',
        },
        {
          q: "Quanto è accurato il riconoscimento vocale per l'italiano?",
          a: "Whisper, il modello su cui si basa Mictoo, è addestrato su migliaia di ore di audio in italiano e garantisce alta precisione.",
        },
        {
          q: 'I miei file vengono salvati sui server?',
          a: 'No. I file vengono elaborati istantaneamente e non vengono memorizzati sui nostri server.',
        },
      ]}
      relatedLinks={[
        { href: '/', label: 'English' },
        { href: '/fr', label: 'Français' },
        { href: '/de', label: 'Deutsch' },
        { href: '/es', label: 'Español' },
        { href: '/ru', label: 'Русский' },
      ]}
    />
  )
}
