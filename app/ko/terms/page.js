import InfoSectionsLayout from '@/components/InfoSectionsLayout'

const LOCALE_ALTERNATES = {
  'en': 'https://mictoo.com/terms',
  'fr': 'https://mictoo.com/fr/terms',
  'de': 'https://mictoo.com/de/terms',
  'es': 'https://mictoo.com/es/terms',
  'ru': 'https://mictoo.com/ru/terms',
  'it': 'https://mictoo.com/it/terms',
  'pt': 'https://mictoo.com/pt/terms',
  'pl': 'https://mictoo.com/pl/terms',
  'ja': 'https://mictoo.com/ja/terms',
  'ko': 'https://mictoo.com/ko/terms',
  'x-default': 'https://mictoo.com/terms',
}

export const metadata = {
  title: '이용약관 — Mictoo',
  description: 'Mictoo 이용약관.',
  alternates: { canonical: 'https://mictoo.com/ko/terms', languages: LOCALE_ALTERNATES },

  openGraph: {
    title: "이용약관 — Mictoo",
    description: "Mictoo 이용약관.",
    url: "https://mictoo.com/ko/terms",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "이용약관 — Mictoo",
    description: "Mictoo 이용약관.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function KoTermsPage() {
  return (
    <InfoSectionsLayout
      h1="이용약관"
      lastUpdated="최종 업데이트: 2026년 5월"
      sections={[
        {
          heading: '1. 동의',
          body: 'Mictoo를 사용함으로써 본 약관에 동의하는 것으로 간주됩니다. 동의하지 않는 경우 서비스를 사용하지 마십시오.',
        },
        {
          heading: '2. 서비스 사용',
          body: 'Mictoo는 "있는 그대로" 제공되는 무료 받아쓰기 도구입니다. 업로드한 파일에 대한 책임은 사용자에게 있으며 받아쓰기를 수행할 권리가 있어야 합니다. 불법, 모욕적이거나 저작권을 침해하는 콘텐츠 사용은 금지됩니다.',
        },
        {
          heading: '3. 책임 제한',
          body: '서비스는 어떠한 보증 없이 "있는 그대로" 제공됩니다. 받아쓰기의 100% 정확성을 보장하지 않습니다. 결과는 사용자 본인의 책임 하에 사용하십시오.',
        },
        {
          heading: '4. 가용성',
          body: '사전 통지 없이 서비스를 수정, 중단 또는 종료할 수 있습니다.',
        },
        {
          heading: '5. 약관 변경',
          body: '본 약관은 수시로 업데이트될 수 있습니다. 변경 사항은 이 페이지에 게시되는 즉시 효력을 발생합니다.',
        },
        {
          heading: '6. 문의',
          body: (
            <>
              약관 관련 질문이 있으면{' '}
              <a href="mailto:info@mictoo.com" className="text-brand-600 hover:underline">info@mictoo.com</a>으로 문의하세요.
            </>
          ),
        },
      ]}
    />
  )
}
