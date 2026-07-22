// What's new page — it wrapper. Renders the shared WhatsNewPage component
// with locale="it". Entries come from data/changelog.json with per-entry
// translations picked by locale.

import WhatsNewPage from '@/components/WhatsNewPage'

export const metadata = {
  title: "Novità — Ultimi aggiornamenti di Mictoo",
  description: "Ultimi aggiornamenti dello strumento gratuito di trascrizione IA di Mictoo: nuove funzionalità, integrazioni e modifiche al prodotto.",
  alternates: {
    canonical: 'https://mictoo.com/it/whats-new',
    languages: {
      'en': 'https://mictoo.com/whats-new',
      'fr': 'https://mictoo.com/fr/whats-new',
      'de': 'https://mictoo.com/de/whats-new',
      'es': 'https://mictoo.com/es/whats-new',
      'ru': 'https://mictoo.com/ru/whats-new',
      'it': 'https://mictoo.com/it/whats-new',
      'pt': 'https://mictoo.com/pt/whats-new',
      'pl': 'https://mictoo.com/pl/whats-new',
      'ja': 'https://mictoo.com/ja/whats-new',
      'ko': 'https://mictoo.com/ko/whats-new',
      'x-default': 'https://mictoo.com/whats-new',
    },
  },
  openGraph: {
    title: "Novità — Ultimi aggiornamenti di Mictoo",
    description: "Ultimi aggiornamenti dello strumento gratuito di trascrizione IA di Mictoo: nuove funzionalità, integrazioni e modifiche al prodotto.",
    url: 'https://mictoo.com/it/whats-new',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Novità — Ultimi aggiornamenti di Mictoo",
    description: "Ultimi aggiornamenti dello strumento gratuito di trascrizione IA di Mictoo: nuove funzionalità, integrazioni e modifiche al prodotto.",
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function Page() {
  return <WhatsNewPage locale="it" />
}
