import ComparisonLayout from '@/components/ComparisonLayout'

const LANGS = {
  'en': 'https://mictoo.com/otter-alternative',
  'fr': 'https://mictoo.com/fr/otter-alternative',
  'de': 'https://mictoo.com/de/otter-alternative',
  'es': 'https://mictoo.com/es/otter-alternative',
  'ru': 'https://mictoo.com/ru/otter-alternative',
  'it': 'https://mictoo.com/it/otter-alternative',
  'pt': 'https://mictoo.com/pt/otter-alternative',
  'pl': 'https://mictoo.com/pl/otter-alternative',
  'ja': 'https://mictoo.com/ja/otter-alternative',
  'ko': 'https://mictoo.com/ko/otter-alternative',
  'x-default': 'https://mictoo.com/otter-alternative',
}

export const metadata = {
  title: 'Otter 대안 — 라이브 회의가 아닌 녹화 받아쓰기 | Mictoo',
  description: 'Otter는 라이브 회의의 실시간 자막용으로 제작되었습니다. Mictoo는 이미 있는 녹화를 받아쓰기 — 무료, 가입 불필요, 봇 없음. OpenAI Whisper 기반.',
  alternates: { canonical: 'https://mictoo.com/ko/otter-alternative', languages: LANGS },
}

export default function KoOtterAlternativePage() {
  return (
    <ComparisonLayout
      badge="비교 · Otter · 무료"
      h1={<>Otter 대안<br /><span className="text-brand-600">라이브 회의가 아닌 녹화용</span></>}
      subtitle="Otter는 라이브 회의 받아쓰기로 유명합니다 — 사람들이 말하면 자막이 나타납니다. Mictoo는 문제의 후반을 해결합니다: 이미 있는 녹화를 몇 초 만에 텍스트로 받아쓰기. 무료, 가입 불필요, OpenAI Whisper."
      competitorName="Otter"
      rows={[
        { label: '무료 플랜',           mictoo: '월간 제한 없음, 파일당 25MB', them: '월 300분, 녹화당 30분' },
        { label: '계정 필수',           mictoo: '아니요', them: '예 (이메일 가입)' },
        { label: '유료 플랜',           mictoo: '무료',  them: '$8.33 - 30 / 사용자 / 월' },
        { label: '라이브 받아쓰기',     mictoo: '아니요', them: '예 (실시간 자막)' },
        { label: '녹화 업로드',         mictoo: '예 (드래그 앤 드롭)', them: '예 (유료 가져오기)' },
        { label: 'AI 요약',             mictoo: '예, 무료', them: '예 (유료)' },
        { label: '받아쓰기 모델',       mictoo: 'OpenAI Whisper', them: '독자' },
        { label: '화자 레이블',         mictoo: '수동 편집', them: '자동 (유료)' },
        { label: '언어',               mictoo: '50개 이상', them: '3개 (영어, 프랑스어, 스페인어)' },
      ]}
      whyMictoo={[
        { icon: '🌍', title: '3개 대 50개 이상의 언어', desc: 'Otter는 영어, 프랑스어, 스페인어만 지원합니다. Mictoo는 자동 감지로 50개 이상의 언어를 지원하는 Whisper를 사용합니다 — 한국어, 일본어, 독일어, 러시아어, 중국어, 아랍어 등.' },
        { icon: '🆓', title: '300분 제한 없음', desc: 'Otter의 무료 플랜은 월 300분으로 제한됩니다. Mictoo는 분 할당량이 없습니다 — 파일당 25MB 제한만 있습니다.' },
        { icon: '🚫', title: '회의에 봇 없음', desc: 'Otter의 가치는 통화에 참여하는 라이브 봇입니다. 회의에 AI 봇 없이 로컬로 녹음하는 것을 선호한다면 Mictoo가 해당 워크플로우에 맞습니다.' },
      ]}
      whenToChoose={{
        mictoo: [
          '녹화가 있고 빠른 무료 받아쓰기를 원함',
          '영어가 아닌 오디오 작업(한국어, 일본어, 중국어 등)',
          '통화에 AI 봇을 원하지 않음',
          '회의뿐만 아니라 팟캐스트, 강의, 음성 메모 받아쓰기',
        ],
        them: [
          '회의 중 라이브 자막을 원함',
          '공유 회의 노트가 필요한 팀에 있음',
          'Zoom/Google Meet과의 Otter Assistant 통합이 중요',
          '화자 다이얼리제이션이 필수 요구사항(유료 플랜)',
        ],
      }}
      faq={[
        { q: 'Mictoo가 Otter처럼 라이브 받아쓰기를 하나요?', a: '아니요. Mictoo는 녹화 파일에서만 작동합니다. 회의 중 실시간 받아쓰기에는 Otter, Zoom 내장 자막 또는 Google Meet을 사용하세요. 나중에 세련된 받아쓰기 파일을 원한다면 Mictoo를 사용하세요.' },
        { q: 'Mictoo가 팟캐스터에게 Otter를 대체하나요?', a: '특히 팟캐스트 받아쓰기의 경우 네. MP3/M4A를 업로드하고 받아쓰기를 받고 .txt 또는 .srt로 다운로드. Otter의 가치는 라이브 캡처, Mictoo의 가치는 녹화 후 빠른 받아쓰기.' },
        { q: '회의 요약은 어떻습니까?', a: '두 도구 모두 핵심 포인트와 액션 아이템이 포함된 AI 요약을 생성합니다. Otter는 유료 플랜에 둡니다. Mictoo는 모든 받아쓰기에서 무료로 제공합니다.' },
        { q: 'Mictoo가 영어가 아닌 오디오에 정확한가요?', a: '네 — OpenAI Whisper는 사용 가능한 가장 강력한 다국어 음성 모델 중 하나입니다. Otter는 영어, 프랑스어, 스페인어로 제한됩니다. Mictoo는 자동 감지로 50개 이상의 언어를 지원합니다.' },
        { q: 'Mictoo에 모바일 앱이 있나요?', a: '네이티브 앱은 없지만 사이트는 모바일 브라우저에서 작동합니다. iPhone 또는 Android에서 mictoo.com을 열고 기기에서 파일을 선택하여 받아쓰기를 받으세요.' },
      ]}
      relatedLinks={[
        { href: '/ko/fireflies-alternative', label: 'Fireflies 대안' },
        { href: '/ko/meeting-transcription', label: '회의 받아쓰기' },
        { href: '/ko/voice-memo-to-text', label: '음성 메모를 텍스트로' },
        { href: '/ko', label: 'Mictoo 사용해보기' },
      ]}
    />
  )
}
