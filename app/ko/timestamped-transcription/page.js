import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/timestamped-transcription',
  'fr': 'https://mictoo.com/fr/timestamped-transcription',
  'de': 'https://mictoo.com/de/timestamped-transcription',
  'es': 'https://mictoo.com/es/timestamped-transcription',
  'ru': 'https://mictoo.com/ru/timestamped-transcription',
  'it': 'https://mictoo.com/it/timestamped-transcription',
  'pt': 'https://mictoo.com/pt/timestamped-transcription',
  'pl': 'https://mictoo.com/pl/timestamped-transcription',
  'ja': 'https://mictoo.com/ja/timestamped-transcription',
  'ko': 'https://mictoo.com/ko/timestamped-transcription',
  'x-default': 'https://mictoo.com/timestamped-transcription',
}

export const metadata = {
  title: '타임스탬프 받아쓰기 — 무료 타임코드 생성기 | Mictoo',
  description: '타임스탬프가 있는 받아쓰기를 무료로 생성. 오디오 또는 비디오를 업로드하고 정확한 타임코드가 있는 SRT 파일을 다운로드. 가입 불필요.',
  alternates: { canonical: 'https://mictoo.com/ko/timestamped-transcription', languages: LANGS },
}

export default function KoTimestampedPage() {
  return (
    <LandingLayout
      badge="타임코드 · SRT · 무료"
      h1={<>타임스탬프 받아쓰기<br /><span className="text-brand-600">타임코드 무료 받아쓰기</span></>}
      subtitle="모든 오디오 또는 비디오 파일을 업로드하고 정확한 타임스탬프가 있는 받아쓰기를 받으세요. SRT로 다운로드 — YouTube, 비디오 편집기, 자막 도구에 바로 사용 가능. 가입 불필요."
      defaultLanguage="ko"
      features={[
        { icon: '⏱️', title: '자동 타임코드', desc: '각 세그먼트에 정확한 시작·종료 타임스탬프 부여 — 오디오에서 자동 생성됩니다.' },
        { icon: '📄', title: '.srt로 다운로드', desc: '타임스탬프 받아쓰기를 SRT 자막 파일로 내보내기. YouTube, Premiere, DaVinci 또는 자막 도구에 직접 업로드.' },
        { icon: '✏️', title: '편집 가능한 텍스트', desc: '다운로드 전 브라우저에서 받아쓰기를 검토하고 편집. 계정 불필요.' },
      ]}
      faq={[
        { q: '타임스탬프 받아쓰기란?', a: '타임스탬프(또는 타임코드) 받아쓰기는 각 줄에 발화된 정확한 시간이 포함된 오디오·비디오의 텍스트 버전입니다 — 예: "00:01:23 → 안녕하세요, 프로그램에 오신 것을 환영합니다". 텍스트를 원본 미디어와 동기화할 수 있습니다.' },
        { q: '타임스탬프 받아쓰기를 무료로 만드는 방법은?', a: '위 도구에 오디오 또는 비디오 파일을 업로드하세요. Mictoo가 타임스탬프 받아쓰기를 자동 생성하고 SRT 또는 타임코드가 있는 일반 텍스트로 다운로드할 수 있게 합니다.' },
        { q: 'SRT 파일이란?', a: 'SRT(SubRip Subtitle)는 타임스탬프가 있는 텍스트 세그먼트를 포함하는 표준 자막 파일 형식입니다. YouTube, Netflix, Premiere Pro, Final Cut, DaVinci Resolve 및 대부분의 비디오 플랫폼과 편집기에서 지원됩니다.' },
        { q: 'SRT를 YouTube 자막으로 사용할 수 있나요?', a: '네. .srt를 다운로드한 후 YouTube Studio → 자막 → 언어 추가 → 파일 업로드로 이동. 타임스탬프 자막이 비디오와 자동 동기화됩니다.' },
        { q: '타임스탬프 정확도는?', a: '타임스탬프는 세그먼트 단위(보통 5-15초마다)로 생성됩니다. 깨끗한 오디오에서는 정확도가 높습니다. 겹치는 음성이나 강한 배경 소음은 정확도에 영향을 줄 수 있습니다.' },
        { q: '일반 받아쓰기와 타임스탬프 받아쓰기의 차이는?', a: '일반 받아쓰기는 오디오의 텍스트 버전입니다. 타임스탬프 받아쓰기는 각 섹션을 녹음의 정확한 순간과 연결할 수 있도록 타임스탬프를 추가합니다 — 자막과 비디오 편집에 필수적입니다.' },
        { q: '어떤 포맷이 지원되나요?', a: 'MP3, MP4, WAV, M4A, OGG, WEBM, FLAC. 최대 25MB의 모든 오디오 또는 비디오 파일.' },
      ]}
      relatedLinks={[
        { href: '/ko/free-srt-generator', label: 'SRT 생성기' },
        { href: '/ko/transcribe-video-to-text', label: '비디오를 텍스트로' },
        { href: '/ko/transcribe-audio-to-text', label: '오디오를 텍스트로' },
        { href: '/ko', label: '모든 포맷' },
      ]}
    />
  )
}
