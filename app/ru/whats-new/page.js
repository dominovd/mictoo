// What's new page — ru wrapper. Renders the shared WhatsNewPage component
// with locale="ru". Entries come from data/changelog.json with per-entry
// translations picked by locale.

import WhatsNewPage from '@/components/WhatsNewPage'

export const metadata = {
  title: "Что нового — свежие обновления Mictoo",
  description: "Свежие обновления бесплатного инструмента AI-транскрибации Mictoo: новые фичи, интеграции и изменения в продукте.",
  alternates: {
    canonical: 'https://mictoo.com/ru/whats-new',
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
    title: "Что нового — свежие обновления Mictoo",
    description: "Свежие обновления бесплатного инструмента AI-транскрибации Mictoo: новые фичи, интеграции и изменения в продукте.",
    url: 'https://mictoo.com/ru/whats-new',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Что нового — свежие обновления Mictoo",
    description: "Свежие обновления бесплатного инструмента AI-транскрибации Mictoo: новые фичи, интеграции и изменения в продукте.",
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function Page() {
  return <WhatsNewPage locale="ru" />
}
