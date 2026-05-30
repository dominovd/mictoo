import AboutLayout from '@/components/AboutLayout'

const LOCALE_ALTERNATES = {
  'en': 'https://mictoo.com/about',
  'fr': 'https://mictoo.com/fr/about',
  'de': 'https://mictoo.com/de/about',
  'es': 'https://mictoo.com/es/about',
  'ru': 'https://mictoo.com/ru/about',
  'it': 'https://mictoo.com/it/about',
  'pt': 'https://mictoo.com/pt/about',
  'pl': 'https://mictoo.com/pl/about',
  'ja': 'https://mictoo.com/ja/about',
  'ko': 'https://mictoo.com/ko/about',
  'x-default': 'https://mictoo.com/about',
}

export const metadata = {
  title: 'Mictoo 소개 — 무료 AI 받아쓰기 도구',
  description:
    'Mictoo 뒤에 있는 사람들, 무료 AI 오디오·비디오 받아쓰기 도구. 작동 방식, 수익화 방법, 파일에 하는(그리고 하지 않는) 일.',
  alternates: { canonical: 'https://mictoo.com/ko/about', languages: LOCALE_ALTERNATES },

  openGraph: {
    title: "Mictoo 소개 — 무료 AI 받아쓰기 도구",
    description: "Mictoo 뒤에 있는 사람들, 무료 AI 오디오·비디오 받아쓰기 도구. 작동 방식, 수익화 방법, 파일에 하는(그리고 하지 않는) 일.",
    url: "https://mictoo.com/ko/about",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mictoo 소개 — 무료 AI 받아쓰기 도구",
    description: "Mictoo 뒤에 있는 사람들, 무료 AI 오디오·비디오 받아쓰기 도구. 작동 방식, 수익화 방법, 파일에 하는(그리고 하지 않는) 일.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function KoAboutPage() {
  return (
    <AboutLayout
      contactHref="/ko/contact"
      strings={{
        h1: 'Mictoo 소개',
        lead:
          'Mictoo는 음성을 빠르고 정확하게 텍스트로 변환해야 하는 모든 사람을 위해 만들어진 가입 불필요한 무료 오디오·비디오 받아쓰기 도구입니다.',
        ourWhy:
          '좋은 받아쓰기에 구독, 계정 또는 기술적 기술이 필요해서는 안 된다고 생각하여 Mictoo를 만들었습니다. 파일 드롭, 텍스트 받기. 끝.',

        whoBuiltHeading: 'Mictoo 뒤의 사람들',
        whoBuiltBody: [
          'Mictoo는 SEO, 콘텐츠, 개발자 도구에 지난 10년을 보낸 작은 팀이 구축하고 운영하는 인디 프로젝트입니다. 10억 사용자를 쫓는 VC 자금 스타트업이 아닙니다. 무료 계층 세그먼트를 잡으려는 받아쓰기 거인의 사이드 프로젝트도 아닙니다. 우리는 직접 받아쓰기 도구를 사용하고 모든 옵션이 닫혀 있거나 느리거나 사용자에게 적대적인 것에 지친 사람들입니다.',
          '사이트 뒤의 사람들에게 직접 연락하고 싶다면, 이 페이지 하단의 이메일은 실제 사람의 받은편지함으로 전달됩니다. 모든 메시지가 읽힙니다.',
        ],

        whatPowersHeading: 'Mictoo를 움직이는 것',
        whatPowersBody:
          'Mictoo는 ChatGPT에서 사용되는 것과 같은 음성 인식 모델인 OpenAI의 Whisper에서 실행됩니다. Whisper large-v3는 68만 시간의 다국어 오디오에서 훈련되었습니다. 자동 감지로 50개 이상의 언어를 지원하고 사용 가능한 가장 강력한 개방형 음성 인식 모델로 널리 간주됩니다. 속도와 비용 효율성을 위해 Groq의 미국 호스트 API(whisper-large-v3)를 통해 Whisper를 실행하고, Groq를 사용할 수 없으면 OpenAI의 Whisper API를 자동 폴백으로 사용합니다. 파일은 받아쓰기 제공업체로 직접 스트리밍되며 Mictoo 서버에 절대 보관되지 않습니다. Groq나 OpenAI 모두 API 오디오로 모델을 훈련하지 않으며, OpenAI는 삭제 전 학대 모니터링을 위해 최대 30일간 API 데이터를 보관합니다.',

        securityHeading: '보안과 파일에 일어나는 일',
        securityBody: [
          '오디오 또는 비디오 파일은 Vercel Blob Storage에 업로드되고, 받아쓰기 제공업체로 스트리밍되고, 받아쓰여지고, 삭제됩니다. 대부분의 파일에 전체 라운드트립이 1분 미만이며, 끝에 우리 인프라에 파일의 복사본이 없습니다.',
          '받아쓰기도 보관하지 않습니다. 브라우저 탭에 존재합니다. 보관하고 싶으면 다운로드 버튼을 클릭. 탭을 닫으면 무엇을 받아쓰셨는지에 대한 기록이 없습니다. 우리가 기록하는 유일한 것은 처리된 파일 수의 익명 카운터로, 사용을 추적하고 제공업체에 지불하기 위함입니다.',
          '로그인한 경우(무료, 선택사항), 다시 열 수 있도록 계정에 과거 받아쓰기의 작은 기록을 보관합니다. 익명 받아쓰기는 기록을 보관하지 않습니다.',
        ],

        moneyHeading: '우리가 수익화하는 방법',
        moneyBody: [
          'Mictoo는 디스플레이 광고로 자금을 조달합니다. Google AdSense에 신청하고 마케팅 페이지(실제 도구 흐름이 아님)에 광고를 표시할 계획입니다. 광고가 호스팅과 API 청구서를 커버합니다.',
          '광고를 넘어, 더 긴 파일, 배치 업로드 또는 스피커 분리가 필요한 사용자를 위한 작은 Pro 플랜을 구축 중입니다, 제공할 수 있게 되면. 무료 계층은 사라지지 않을 것입니다. 무료 계층이 존재하는 이유는 대부분의 사람들이 가끔 하나의 파일을 받아써야 하고, 그것을 위해 월간 구독을 지불할 필요가 없어야 하기 때문입니다.',
          '우리는 데이터를 팔지 않습니다. 팔 데이터가 없습니다, 파일이나 받아쓰기를 보관하지 않으니까. 제3자가 당신에 대해 보는 유일한 것은 Google 측에서 AdSense가 처리하는 표준 광고 타겟팅(위치, 광범위한 관심사)입니다.',
        ],

        principlesHeading: '우리의 원칙',
        principles: [
          { label: '무료.', body: '숨겨진 비용 없음, 체험판 없음, 핵심 도구에 신용카드 없음.' },
          { label: '비공개.', body: '파일은 절대 보관되지 않음. 처리되고 즉시 삭제됨.' },
          { label: '단순.', body: '한 페이지, 한 도구, 제로 마찰.' },
          { label: '정확.', body: '받아쓰기 품질에 사용 가능한 최고의 AI 모델 사용.' },
        ],

        editorialHeading: '우리가 하지 않을 일',
        editorialBullets: [
          { label: '다크 패턴 없음.', body: '가짜 카운트다운 타이머 없음, "파일이 60초 후 만료, 다운로드에 지불" 없음, 업로드 흐름 중간의 이메일 벽 없음.' },
          { label: '가격의 미끼 상술 없음.', body: '무료 계층은 정말 무료. 이전에 무료였던 기능을 소급하여 제한하지 않을 것입니다.' },
          { label: '받아쓰기 재판매 없음.', body: '받아쓰기를 보관하지 않습니다. 약관에 숨겨진 "훈련 데이터" 라이선스가 없습니다.' },
          { label: '기만적인 광고 네트워크 없음.', body: '브라우저 UI를 교환하거나 뒤로 버튼을 가로채는 네트워크가 아닌 Google AdSense를 사용합니다.' },
          { label: '가짜 리뷰 없음.', body: '리뷰 사이트에서 Mictoo를 본다면, 그것은 유기적으로 그곳에 왔습니다. 우리는 배치에 지불하지 않고 자신의 리뷰를 쓰지 않습니다.' },
        ],

        contactHeading: '연락처',
        contactPrefix: '피드백, 기능 요청 또는 질문?',
        contactCtaLabel: '문의하기',
        contactSuffix: ' 또는 이메일:',
      }}
    />
  )
}
