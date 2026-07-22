// What's new page — ko wrapper. Renders the shared WhatsNewPage component
// with locale="ko". Entries come from data/changelog.json with per-entry
// translations picked by locale.

import WhatsNewPage from '@/components/WhatsNewPage'

export const metadata = {
  title: "새 소식 — Mictoo 최신 업데이트",
  description: "Mictoo 무료 AI 전사 도구 최신 업데이트: 새 기능, 통합, 제품 변경 사항.",
  alternates: {
    canonical: 'https://mictoo.com/ko/whats-new',
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
    title: "새 소식 — Mictoo 최신 업데이트",
    description: "Mictoo 무료 AI 전사 도구 최신 업데이트: 새 기능, 통합, 제품 변경 사항.",
    url: 'https://mictoo.com/ko/whats-new',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "새 소식 — Mictoo 최신 업데이트",
    description: "Mictoo 무료 AI 전사 도구 최신 업데이트: 새 기능, 통합, 제품 변경 사항.",
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function Page() {
  return <WhatsNewPage locale="ko" />
}
