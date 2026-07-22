// What's new — chronological changelog page (EN).
//
// This is the EN root. Localized copies live at app/{loc}/whats-new/page.js
// and all import the shared renderer WhatsNewPage from
// '@/components/WhatsNewPage', passing their own locale='fr'|'de'|... prop.
// Keeps entries data-driven from data/changelog.json (one source of truth
// with per-entry translations block); each locale-aware page picks its
// title/body via the shared entry loader.

import WhatsNewPage from '@/components/WhatsNewPage'

export const metadata = {
  title: "What's New — Recent Updates to Mictoo",
  description:
    "Latest updates to Mictoo's free AI transcription tool: new features, integrations, language support, and product changes.",
  alternates: {
    canonical: 'https://mictoo.com/whats-new',
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
    title: "What's New — Mictoo Updates",
    description: "Latest feature releases and product changes on Mictoo.",
    url: 'https://mictoo.com/whats-new',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "What's New — Mictoo Updates",
    description: "Latest feature releases and product changes on Mictoo.",
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function Page() {
  return <WhatsNewPage locale="en" />
}
