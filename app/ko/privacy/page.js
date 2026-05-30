import InfoSectionsLayout from '@/components/InfoSectionsLayout'

const LOCALE_ALTERNATES = {
  'en': 'https://mictoo.com/privacy',
  'fr': 'https://mictoo.com/fr/privacy',
  'de': 'https://mictoo.com/de/privacy',
  'es': 'https://mictoo.com/es/privacy',
  'ru': 'https://mictoo.com/ru/privacy',
  'it': 'https://mictoo.com/it/privacy',
  'pt': 'https://mictoo.com/pt/privacy',
  'pl': 'https://mictoo.com/pl/privacy',
  'ja': 'https://mictoo.com/ja/privacy',
  'ko': 'https://mictoo.com/ko/privacy',
  'x-default': 'https://mictoo.com/privacy',
}

export const metadata = {
  title: '개인정보처리방침 — Mictoo',
  description: 'Mictoo 개인정보처리방침. 오디오 파일이나 받아쓰기를 저장하지 않습니다.',
  alternates: { canonical: 'https://mictoo.com/ko/privacy', languages: LOCALE_ALTERNATES },

  openGraph: {
    title: "개인정보처리방침 — Mictoo",
    description: "Mictoo 개인정보처리방침. 오디오 파일이나 받아쓰기를 저장하지 않습니다.",
    url: "https://mictoo.com/ko/privacy",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "개인정보처리방침 — Mictoo",
    description: "Mictoo 개인정보처리방침. 오디오 파일이나 받아쓰기를 저장하지 않습니다.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function KoPrivacyPage() {
  return (
    <InfoSectionsLayout
      h1="개인정보처리방침"
      lastUpdated="최종 업데이트: 2026년 5월"
      sections={[
        {
          heading: '1. 수집하는 정보',
          body: 'Mictoo는 계정이 필요하지 않으며 개인정보를 수집하지 않습니다. 파일을 업로드하면 브라우저가 Vercel Blob(미국에 호스팅된 Vercel 파일 저장소)에 직접 전송합니다. 파일은 서버가 Groq의 Whisper API(미국 호스팅)로 전달하여 받아쓰기를 수행할 수 있도록 잠시 그곳에 머무르며, Groq가 일시적으로 사용 불가할 경우 OpenAI의 Whisper API로 자동 폴백됩니다. 받아쓰기가 완료되면 파일은 Vercel Blob에서 자동으로 삭제됩니다 — 보통 1분 이내. 시간당 정리 작업이 어떤 이유로 즉시 삭제되지 않은 잔여 업로드를 제거합니다. Mictoo는 자체 서버에 오디오, 비디오 또는 받아쓰기의 영구 복사본을 보관하지 않습니다.',
        },
        {
          heading: '2. 파일 처리 및 AI 제공자',
          body: '파일은 HTTPS를 통해 Groq의 Whisper API로 전송되며 미국에 위치한 인프라에서 실시간으로 처리됩니다. Groq의 데이터 정책에 따르면 귀하의 오디오는 모델 훈련에 사용되지 않습니다. Groq를 사용할 수 없는 드문 경우에는 요청이 자동으로 OpenAI의 Whisper API로 라우팅됩니다. OpenAI도 API 데이터를 모델 훈련에 사용하지 않으며, 부정 사용 모니터링을 위해 최대 30일간 보관한 후 삭제합니다. Mictoo는 브라우징 세션이 종료된 후 오디오나 받아쓰기 사본을 보관하지 않습니다.',
        },
        {
          heading: '3. 분석 및 광고',
          body: (
            <>
              Google AdSense를 통해 광고를 표시할 수 있습니다. Google은 관련성 있는 광고를 표시하기 위해 쿠키를 사용할 수 있습니다.{' '}
              <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">Google 광고 설정</a>
              에서 거부할 수 있습니다. 사용 현황을 이해하기 위해 익명 분석(예: 페이지뷰 수)을 사용할 수 있습니다. 개인을 식별할 수 있는 정보는 수집하지 않습니다.
            </>
          ),
        },
        {
          heading: '4. 쿠키',
          body: 'Mictoo 자체는 쿠키를 설정하지 않습니다. Google AdSense와 같은 제3자 서비스는 자체 쿠키를 설정할 수 있습니다.',
        },
        {
          heading: '5. 아동 개인정보 보호',
          body: 'Mictoo는 13세 미만 아동을 대상으로 하지 않습니다. 아동의 데이터를 의도적으로 수집하지 않습니다.',
        },
        {
          heading: '6. 문의',
          body: (
            <>
              방침 관련 질문이 있으면{' '}
              <a href="mailto:info@mictoo.com" className="text-brand-600 hover:underline">info@mictoo.com</a>으로 문의하세요.
            </>
          ),
        },
      ]}
    />
  )
}
