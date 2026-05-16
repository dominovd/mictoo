import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/interview-transcription',
  'fr': 'https://mictoo.com/fr/interview-transcription',
  'de': 'https://mictoo.com/de/interview-transcription',
  'es': 'https://mictoo.com/es/interview-transcription',
  'ru': 'https://mictoo.com/ru/interview-transcription',
  'it': 'https://mictoo.com/it/interview-transcription',
  'pt': 'https://mictoo.com/pt/interview-transcription',
  'pl': 'https://mictoo.com/pl/interview-transcription',
  'ja': 'https://mictoo.com/ja/interview-transcription',
  'ko': 'https://mictoo.com/ko/interview-transcription',
  'x-default': 'https://mictoo.com/interview-transcription',
}

export const metadata = {
  title: '인터뷰 받아쓰기 — 오디오를 텍스트로 무료 | Mictoo',
  description: '인터뷰, 사용자 연구, 두 명의 화자 팟캐스트를 받아쓰기. 무료, 계정 불필요. MP3, M4A 또는 WAV를 업로드하고 몇 초 만에 받아쓰기를 받으세요.',
  alternates: { canonical: 'https://mictoo.com/ko/interview-transcription', languages: LANGS },
}

export default function KoInterviewPage() {
  return (
    <LandingLayout
      badge="기자 · 연구 · 무료"
      h1={<>인터뷰 받아쓰기<br /><span className="text-brand-600">오디오를 텍스트로, 무료</span></>}
      subtitle="인터뷰 녹음을 업로드하고 몇 초 만에 깨끗한 받아쓰기를 받으세요. 저널리즘, 사용자 연구, 기사 인용, 두 명의 화자 팟캐스트에 이상적."
      defaultLanguage="ko"
      features={[
        { icon: '🎤', title: '기자를 위해', desc: '녹음된 인터뷰를 기사에 붙여넣을 수 있는 인용구로 변환. 오디오를 다시 듣는 대신 텍스트를 검색하세요.' },
        { icon: '🧪', title: '사용자 연구를 위해', desc: '사용자 연구 세션이 검색 가능한 텍스트로 변환됩니다. 질적 데이터에서 패턴, 인용구 및 인사이트를 빠르게 찾을 수 있습니다.' },
        { icon: '🌍', title: '50개 이상의 언어', desc: '한국어, 영어, 일본어, 중국어, 스페인어, 프랑스어, 독일어 등 많은 언어의 인터뷰에서 작동합니다.' },
      ]}
      faq={[
        { q: '두 명의 화자가 있는 인터뷰를 받아쓰기하는 방법은?', a: '오디오 파일(MP3, M4A, WAV)을 업로드하세요 — Mictoo가 모든 것을 단일 스트림으로 받아쓰기합니다. 음성을 분리(인터뷰어 / 게스트)하려면 브라우저 편집기에서 수동으로 레이블을 추가할 수 있습니다.' },
        { q: '받아쓰기가 얼마나 정확한가요?', a: '음성이 잘 분리된 깨끗한 녹음의 경우 정확도가 95%를 넘습니다. 겹치는 음성, 매우 강한 억양 또는 배경 소음은 정확도를 낮출 수 있습니다.' },
        { q: '화자 레이블을 자동으로 받을 수 있나요?', a: '무료 플랜에서는 받을 수 없습니다. 받아쓰기는 단일 텍스트 블록입니다. 레이블은 다운로드 전 편집기에서 30-60초 만에 추가할 수 있습니다.' },
        { q: '받아쓰기용 인터뷰를 녹음하는 방법은?', a: '대면: iPhone의 음성 메모 앱 또는 Android의 내장 녹음기. 원격: Zoom/Meet/Teams 통화를 녹음. MP3 또는 M4A로 내보내고 여기에 업로드하세요.' },
        { q: '인터뷰가 비공개로 유지되나요?', a: '네. 파일은 받아쓰기 목적으로만 AI 제공자에 전송되며 즉시 삭제됩니다. Mictoo는 자체 서버에 아무것도 저장하지 않습니다.' },
      ]}
      relatedLinks={[
        { href: '/ko/podcast-transcription', label: '팟캐스트 받아쓰기' },
        { href: '/ko/business-transcription', label: '비즈니스 받아쓰기' },
        { href: '/ko/transcribe-mp3-to-text', label: 'MP3를 텍스트로' },
        { href: '/ko', label: '모든 포맷' },
      ]}
    />
  )
}
