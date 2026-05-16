import ComparisonLayout from '@/components/ComparisonLayout'

const LANGS = {
  'en': 'https://mictoo.com/fireflies-alternative',
  'fr': 'https://mictoo.com/fr/fireflies-alternative',
  'de': 'https://mictoo.com/de/fireflies-alternative',
  'es': 'https://mictoo.com/es/fireflies-alternative',
  'ru': 'https://mictoo.com/ru/fireflies-alternative',
  'it': 'https://mictoo.com/it/fireflies-alternative',
  'pt': 'https://mictoo.com/pt/fireflies-alternative',
  'pl': 'https://mictoo.com/pl/fireflies-alternative',
  'ja': 'https://mictoo.com/ja/fireflies-alternative',
  'ko': 'https://mictoo.com/ko/fireflies-alternative',
  'x-default': 'https://mictoo.com/fireflies-alternative',
}

export const metadata = {
  title: 'Fireflies 대안 — 봇 없이 회의 받아쓰기 | Mictoo',
  description: 'Fireflies는 봇으로 회의에 참여하여 녹음 및 받아쓰기를 합니다. Mictoo는 이미 있는 녹화를 받아쓰기 — 봇 없음, 가입 없음, OAuth 없음. OpenAI Whisper로 무료.',
  alternates: { canonical: 'https://mictoo.com/ko/fireflies-alternative', languages: LANGS },
}

export default function KoFirefliesAlternativePage() {
  return (
    <ComparisonLayout
      badge="비교 · Fireflies · 무료"
      h1={<>Fireflies 대안<br /><span className="text-brand-600">봇 없이 회의 받아쓰기</span></>}
      subtitle="Fireflies는 회의에 AI 봇으로 참여하여 실시간으로 녹음 및 받아쓰기를 합니다. Mictoo는 반대로 작동합니다 — 이미 있는 녹화를 업로드하고 받아쓰기를 받으세요. 봇 없음, 캘린더 통합 없음, 가입 없음."
      competitorName="Fireflies"
      rows={[
        { label: '무료 플랜',           mictoo: '월간 제한 없음, 파일당 25MB', them: '800분 / 사용자 / 월' },
        { label: '계정 필수',           mictoo: '아니요', them: '예 (이메일 + OAuth)' },
        { label: '유료 플랜',           mictoo: '무료',  them: '$10-19 / 사용자 / 월' },
        { label: '녹음 방법',           mictoo: '자신이 녹화를 업로드', them: '봇이 라이브 회의에 참여' },
        { label: '라이브 받아쓰기',     mictoo: '아니요', them: '예 (통화 중)' },
        { label: '캘린더 통합',         mictoo: '아니요', them: 'Google / Outlook / Zoom' },
        { label: 'AI 요약',             mictoo: '예, 무료', them: '예 (유료)' },
        { label: 'CRM 통합',            mictoo: '아니요', them: 'Salesforce, HubSpot 등' },
        { label: '받아쓰기 모델',       mictoo: 'OpenAI Whisper', them: '독자' },
      ]}
      whyMictoo={[
        { icon: '🚫', title: '회의에 봇 없음', desc: '일부 참가자는 통화를 녹음하는 AI 봇에 불편함을 느낍니다. Mictoo로 Zoom/Meet/Teams에서 로컬로 녹음하고 나중에 받아쓰기할 수 있습니다.' },
        { icon: '🆓', title: '가입 없음, 할당량 없음', desc: 'Fireflies 무료 플랜은 800분/사용자/월로 제한되고 OAuth가 필요합니다. Mictoo는 계정 없이 작동하며 월간 분 계산이 없습니다.' },
        { icon: '🌍', title: '영어가 아닌 오디오에 더 좋음', desc: 'OpenAI Whisper는 50개 이상의 언어를 높은 정확도로 지원합니다. Fireflies는 영어 비즈니스 통화에 최적화되어 있으며 한국어, 우크라이나어, 일본어와 같은 언어에는 약합니다.' },
      ]}
      whenToChoose={{
        mictoo: [
          '자신이 회의를 녹음하고 종료 후 받아쓰기를 원함',
          '통화에 참여하는 AI 봇을 원하지 않음',
          '다른 언어의 회의에 대한 받아쓰기가 필요함',
          '일회성 녹음을 위해 가입 없는 무료 옵션을 원함',
        ],
        them: [
          '회의 중 라이브 받아쓰기를 원함',
          '영업 통화의 CRM 로깅이 필요함',
          '팀이 모든 통화의 자동 녹음을 원함',
          '대화 분석(말하는 시간, 감정 등)이 필요함',
        ],
      }}
      faq={[
        { q: 'Mictoo가 Fireflies처럼 Zoom 또는 Teams 회의에 참여할 수 있나요?', a: '아니요. Mictoo는 회의에 참여하지 않습니다. Zoom/Teams/Meet의 내장 녹화로 통화를 녹음하고 파일을 업로드합니다. 이는 회의의 봇과 관련된 개인정보 문제를 피합니다.' },
        { q: '업로드용 녹화를 받는 방법은?', a: 'Zoom에서: 회의 중 로컬 녹화 또는 클라우드 녹화를 활성화. 회의 후 Zoom에서 MP4 또는 M4A를 다운로드하고 Mictoo에 업로드.' },
        { q: 'Mictoo가 Fireflies처럼 액션 아이템과 요약을 만드나요?', a: '네. 받아쓰기 후 Mictoo의 AI 요약은 2-3 문장 개요, 핵심 포인트 및 액션 아이템을 표시합니다 — 모두 무료 플랜에서. Fireflies는 유사한 기능을 유료 플랜에서만 제공합니다.' },
        { q: '회의 분석은 어떻습니까?', a: 'Mictoo는 말하는 시간, 감정 또는 화자 분석을 하지 않습니다. 영업 코칭을 위한 대화 인텔리전스가 필요한 경우 Fireflies(또는 Gong)이 더 좋습니다.' },
        { q: 'Mictoo가 기밀 회의에 안전한가요?', a: '파일은 OpenAI의 Whisper API로 직접 전송되어 폐기됩니다. Mictoo는 아무것도 저장하지 않습니다. OpenAI의 API 데이터 정책에 따르면 오디오는 훈련에 사용되지 않으며 부정 사용 모니터링을 위해 최대 30일 후 삭제됩니다.' },
      ]}
      relatedLinks={[
        { href: '/ko/otter-alternative', label: 'Otter 대안' },
        { href: '/ko/meeting-transcription', label: '회의 받아쓰기' },
        { href: '/ko/zoom-transcription', label: 'Zoom 받아쓰기' },
        { href: '/ko', label: 'Mictoo 사용해보기' },
      ]}
    />
  )
}
