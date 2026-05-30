import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/dictation-to-text',
  'fr': 'https://mictoo.com/fr/dictation-to-text',
  'de': 'https://mictoo.com/de/dictation-to-text',
  'es': 'https://mictoo.com/es/dictation-to-text',
  'ru': 'https://mictoo.com/ru/dictation-to-text',
  'it': 'https://mictoo.com/it/dictation-to-text',
  'pt': 'https://mictoo.com/pt/dictation-to-text',
  'pl': 'https://mictoo.com/pl/dictation-to-text',
  'ja': 'https://mictoo.com/ja/dictation-to-text',
  'ko': 'https://mictoo.com/ko/dictation-to-text',
  'x-default': 'https://mictoo.com/dictation-to-text',
}

export const metadata = {
  title: '구술을 텍스트로 — 무료 음성 구술 받아쓰기 | Mictoo',
  description: '구술 오디오 녹음을 무료로 텍스트로 변환. 작가, 의사, 변호사, 연구자에 이상적. MP3, M4A, WAV 지원. 가입 불필요.',
  alternates: { canonical: 'https://mictoo.com/ko/dictation-to-text', languages: LANGS },

  openGraph: {
    title: "구술을 텍스트로 — 무료 음성 구술 받아쓰기 | Mictoo",
    description: "구술 오디오 녹음을 무료로 텍스트로 변환. 작가, 의사, 변호사, 연구자에 이상적. MP3, M4A, WAV 지원. 가입 불필요.",
    url: "https://mictoo.com/ko/dictation-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "구술을 텍스트로 — 무료 음성 구술 받아쓰기 | Mictoo",
    description: "구술 오디오 녹음을 무료로 텍스트로 변환. 작가, 의사, 변호사, 연구자에 이상적. MP3, M4A, WAV 지원. 가입 불필요.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function KoDictationPage() {
  return (
    <LandingLayout
      badge="구술 · 음성 → 텍스트 · 무료"
      h1={<>구술을 텍스트로<br /><span className="text-brand-600">무료 음성 구술 받아쓰기</span></>}
      subtitle="생각을 녹음하고, 챕터를 구술하거나 노트를 작성한 다음 — 여기에 파일을 업로드하여 정확한 텍스트 받아쓰기를 받으세요. 가입 불필요, 설치할 앱 없음."
      defaultLanguage="ko"
      features={[
        { icon: '📝', title: '작가와 연구자를 위해', desc: '챕터 초안, 기사 개요 또는 인터뷰 노트를 구술하세요. Mictoo는 음성을 몇 초 만에 깨끗하고 편집 가능한 텍스트로 변환합니다.' },
        { icon: '👨‍⚕️', title: '의사와 변호사를 위해', desc: '휴대폰에서 사례 노트, 환자 요약 또는 메모를 구술한 다음 기록을 위해 텍스트로 변환. 파일은 처리된 후 즉시 삭제됩니다.' },
        { icon: '🌍', title: '50개 이상의 언어', desc: '한국어, 영어, 스페인어, 프랑스어, 독일어, 일본어 등으로 구술. 언어는 자동 감지되며 필요시 변경할 수 있습니다.' },
      ]}
      faq={[
        { q: '휴대폰에서 구술을 녹음하는 방법은?', a: 'iPhone: 음성 메모 앱 — .m4a로 내보내기. Android: 내장 녹음기 또는 Easy Voice Recorder — .mp3 또는 .m4a로 내보내기. Mictoo에 파일을 업로드하세요.' },
        { q: 'Mictoo가 실시간 구술 도구인가요?', a: '아니요 — Mictoo는 기존 오디오 파일을 받아쓰기합니다. 실시간 구술(말하면서 텍스트 보기)에는 시스템 내장 구술(macOS, Windows, iOS, Android)을 사용하세요. 나중에 긴 녹음을 정리하기 위해 Mictoo를 사용하세요.' },
        { q: '구술 받아쓰기가 얼마나 정확한가요?', a: '한 명의 화자가 명확하게 구술하면 일반적으로 95% 이상의 정확도로 받아쓰기됩니다. 자연스러운 속도로 조용한 방에서 말하고 최상의 결과를 위해 헤드폰을 사용하세요.' },
        { q: '의료 또는 법률 구술에 사용할 수 있나요?', a: '네, 단 환자 또는 클라이언트 데이터의 AI 처리에 관한 현지 규정을 확인하세요. Mictoo는 파일을 저장하지 않지만 — 오디오는 받아쓰기를 위해 AI 제공자를 거칩니다. 규제된 워크플로우의 경우 컴플라이언스 팀과 상의하세요.' },
        { q: '구술의 최대 길이는?', a: '최대 25MB. 64 kbps 모노로 약 50분의 구술에 해당합니다. 더 긴 녹음의 경우 챕터로 분할하거나 비트레이트를 낮추세요.' },
      ]}
      relatedLinks={[
        { href: '/ko/voice-memo-to-text', label: '음성 메모를 텍스트로' },
        { href: '/ko', label: '모든 포맷' },
      ]}
    />
  )
}
