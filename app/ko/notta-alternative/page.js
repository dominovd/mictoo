import ComparisonLayout from '@/components/ComparisonLayout'

const LANGS = {
  'en': 'https://mictoo.com/notta-alternative',
  'fr': 'https://mictoo.com/fr/notta-alternative',
  'de': 'https://mictoo.com/de/notta-alternative',
  'es': 'https://mictoo.com/es/notta-alternative',
  'ru': 'https://mictoo.com/ru/notta-alternative',
  'it': 'https://mictoo.com/it/notta-alternative',
  'pt': 'https://mictoo.com/pt/notta-alternative',
  'pl': 'https://mictoo.com/pl/notta-alternative',
  'ja': 'https://mictoo.com/ja/notta-alternative',
  'ko': 'https://mictoo.com/ko/notta-alternative',
  'x-default': 'https://mictoo.com/notta-alternative',
}

export const metadata = {
  title: 'Notta 대안 — 월간 제한 없는 무료 받아쓰기 | Mictoo',
  description: 'Notta는 무료 사용자를 월 120분, 각 받아쓰기를 3분으로 제한합니다. Mictoo는 무료, 가입 불필요, 월 분 할당량 없음 — OpenAI Whisper 기반.',
  alternates: { canonical: 'https://mictoo.com/ko/notta-alternative', languages: LANGS },

  openGraph: {
    title: "Notta 대안 — 월간 제한 없는 무료 받아쓰기 | Mictoo",
    description: "Notta는 무료 사용자를 월 120분, 각 받아쓰기를 3분으로 제한합니다. Mictoo는 무료, 가입 불필요, 월 분 할당량 없음 — OpenAI Whisper 기반.",
    url: "https://mictoo.com/ko/notta-alternative",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Notta 대안 — 월간 제한 없는 무료 받아쓰기 | Mictoo",
    description: "Notta는 무료 사용자를 월 120분, 각 받아쓰기를 3분으로 제한합니다. Mictoo는 무료, 가입 불필요, 월 분 할당량 없음 — OpenAI Whisper 기반.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function KoNottaAlternativePage() {
  return (
    <ComparisonLayout
      badge="비교 · Notta · 무료"
      h1={<>Notta 대안<br /><span className="text-brand-600">월 120분 제한 없음</span></>}
      subtitle="Notta는 인기 있는 올인원 받아쓰기 도구이지만 무료 플랜은 월 120분, 파일당 3분으로 제한됩니다. Mictoo는 월 할당량이 없고 파일 크기 제한만 있습니다 — 무료, 가입 불필요."
      competitorName="Notta"
      rows={[
        { label: '무료 플랜',           mictoo: '월간 제한 없음, 파일당 25MB', them: '월 120분, 파일당 3분' },
        { label: '계정 필수',           mictoo: '아니요', them: '예 (이메일 가입)' },
        { label: '유료 플랜',           mictoo: '무료',  them: '$9 - 25 / 사용자 / 월' },
        { label: '파일당 시간',         mictoo: '~25분 (크기 제한)', them: '3분 (무료) / 5시간 (유료)' },
        { label: '라이브 받아쓰기',     mictoo: '아니요', them: '예 (회의의 Notta Bot)' },
        { label: 'AI 요약',             mictoo: '예, 무료', them: '예 (유료)' },
        { label: '받아쓰기 모델',       mictoo: 'OpenAI Whisper', them: '독자' },
        { label: '화자 레이블',         mictoo: '수동 편집', them: '자동 (유료)' },
        { label: '언어',               mictoo: '50개 이상', them: '100개 이상 (유료 플랜)' },
      ]}
      whyMictoo={[
        { icon: '⏳', title: '파일당 3분 제한 없음', desc: 'Notta의 파일당 3분 제한은 팟캐스트, 강의 또는 인터뷰에 너무 짧습니다. Mictoo는 ~25분의 전체 오디오 파일을 무료로 처리합니다.' },
        { icon: '🆓', title: '월 분 할당량 없음', desc: 'Notta는 월 120분 할당량에 대해 모든 분을 계산합니다. Mictoo는 개별 파일 크기만 제한합니다 — 한 파일이든 여러 파일이든 분 계산 없이 업로드.' },
        { icon: '✨', title: '무료 플랜에서 AI 요약', desc: 'Notta는 AI 요약을 유료 플랜에 둡니다. Mictoo는 매번 무료로 핵심 포인트와 액션 아이템이 포함된 요약을 생성합니다.' },
      ]}
      whenToChoose={{
        mictoo: [
          '3분보다 긴 파일을 무료로 받아쓰기해야 함',
          '월 120분 제한에 도달하고 싶지 않음',
          '지불 없이 AI 요약을 원함',
          '자동 화자 다이얼리제이션이 필요하지 않음',
        ],
        them: [
          'Notta Bot이 라이브 회의에 참여해야 함',
          '자동 화자 레이블이 필요함',
          'CRM 통합 워크플로우를 원함',
          '무제한 기능을 위해 지불할 수 있음',
        ],
      }}
      faq={[
        { q: 'Mictoo가 정말 분 할당량 없이 무료인가요?', a: '네. 유일한 제한은 파일당 크기(25MB, 일반적인 팟캐스트 비트레이트에서 약 25분에 해당)입니다. 월간 분 추적 없음, 파일 수 제한 없음.' },
        { q: '왜 Notta는 무료 사용자를 그렇게 엄격하게 제한하나요?', a: 'Notta는 무료 플랜이 업그레이드를 장려하기 위해 의도적으로 제한된 프리미엄 모델을 사용합니다. Mictoo의 모델은 광고 기반이므로 무료 플랜은 설계상 관대합니다.' },
        { q: 'Mictoo가 무료라면 어떻게 돈을 버나요?', a: '디스플레이 광고(Google AdSense), 파일이 받아쓰기되는 동안 로딩 상태에 표시됩니다. 받아쓰기 자체와 업로드 영역은 광고 없음입니다.' },
        { q: 'Mictoo가 라이브 회의 받아쓰기를 지원하나요?', a: '아니요 — Mictoo는 녹화 파일에서만 작동합니다. 라이브 캡처에는 플랫폼의 내장 자막(Zoom, Google Meet, Teams)을 사용한 다음 세련된 받아쓰기를 위해 Mictoo에 녹화를 업로드하세요.' },
        { q: 'Mictoo는 어떤 언어를 지원하나요?', a: 'OpenAI Whisper는 자동 감지로 50개 이상의 언어를 지원합니다 — 한국어, 일본어, 영어, 중국어, 스페인어, 프랑스어, 독일어, 러시아어, 우크라이나어, 아랍어, 힌디어 등 다수. 자동 감지가 틀리지 않는 한 언어를 선택할 필요가 없습니다.' },
      ]}
      relatedLinks={[
        { href: '/ko/turboscribe-alternative', label: 'TurboScribe 대안' },
        { href: '/ko/otter-alternative', label: 'Otter 대안' },
        { href: '/ko/podcast-transcription', label: '팟캐스트 받아쓰기' },
        { href: '/ko', label: 'Mictoo 사용해보기' },
      ]}
    />
  )
}
