import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/lecture-transcription',
  'fr': 'https://mictoo.com/fr/lecture-transcription',
  'de': 'https://mictoo.com/de/lecture-transcription',
  'es': 'https://mictoo.com/es/lecture-transcription',
  'ru': 'https://mictoo.com/ru/lecture-transcription',
  'it': 'https://mictoo.com/it/lecture-transcription',
  'pt': 'https://mictoo.com/pt/lecture-transcription',
  'pl': 'https://mictoo.com/pl/lecture-transcription',
  'ja': 'https://mictoo.com/ja/lecture-transcription',
  'ko': 'https://mictoo.com/ko/lecture-transcription',
  'x-default': 'https://mictoo.com/lecture-transcription',
}

export const metadata = {
  title: '강의 받아쓰기 — 학생을 위한 오디오에서 텍스트로 | Mictoo',
  description: '강의 녹음을 학습용 텍스트로 변환. 무료, 계정 불필요. MP3 또는 M4A를 업로드하고 몇 초 만에 깨끗한 받아쓰기를 받으세요.',
  alternates: { canonical: 'https://mictoo.com/ko/lecture-transcription', languages: LANGS },
}

export default function KoLecturePage() {
  return (
    <LandingLayout
      badge="학생 · 대학 · 무료"
      h1={<>강의 받아쓰기<br /><span className="text-brand-600">오디오에서 노트로</span></>}
      subtitle="강의 녹음을 업로드하고 완전한 텍스트 받아쓰기를 받으세요. 복습, 공부, 노트 작성에 이상적. 계정 불필요, 앱 불필요."
      defaultLanguage="ko"
      features={[
        { icon: '🎓', title: '학생을 위해', desc: '강의를 녹음하고 Mictoo에 업로드하면 몇 초 만에 검색 가능한 텍스트를 얻을 수 있습니다. 브라우저에서 자신의 코멘트를 추가할 수 있습니다.' },
        { icon: '🔍', title: '강의 내 검색', desc: '몇 시간의 오디오를 검색 가능한 텍스트로 변환. 필요한 정의, 개념 또는 참조를 빠르게 찾을 수 있습니다.' },
        { icon: '🌍', title: '50개 이상의 언어', desc: '한국어, 영어, 스페인어, 프랑스어, 독일어 등 많은 학술 언어의 강의에서 작동합니다.' },
      ]}
      faq={[
        { q: '받아쓰기를 위해 강의를 녹음하는 방법은?', a: 'iPhone: 음성 메모 앱. Android: 내장 녹음기. 노트북: QuickTime(Mac) 또는 음성 녹음기(Windows). MP3 또는 M4A로 내보내고 여기에 업로드하세요.' },
        { q: '강의를 녹음하는 것이 합법인가요?', a: '대학 정책과 현지 법률에 따라 다릅니다. 많은 대학에서는 개인 사용을 위한 녹음을 허용하지만 일부는 강사의 동의를 요구합니다. 먼저 확인하세요.' },
        { q: '강의 받아쓰기가 얼마나 정확한가요?', a: '소음이 적은 강의실에서 명확하게 말하는 강사의 경우 정확도가 95%를 넘습니다. 배경 소음, 강한 억양 또는 매우 큰 강의실은 정확도를 낮출 수 있습니다.' },
        { q: '외국어 강의를 받아쓰기할 수 있나요?', a: '네. Mictoo는 자동 감지로 50개 이상의 언어를 지원합니다. 영어, 스페인어, 프랑스어, 독일어 등의 강의에서 매우 잘 작동합니다.' },
        { q: '강의의 최대 길이는?', a: '최대 25MB. 60-90분 강의의 경우 모노 64 kbps로 내보내거나 짧은 세그먼트로 분할하세요.' },
      ]}
      relatedLinks={[
        { href: '/ko/transcribe-mp3-to-text', label: 'MP3를 텍스트로' },
        { href: '/ko/m4a-to-text', label: 'M4A를 텍스트로' },
        { href: '/ko/voice-memo-to-text', label: '음성 메모를 텍스트로' },
        { href: '/ko', label: '모든 포맷' },
      ]}
    />
  )
}
