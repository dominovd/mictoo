import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/free-srt-generator',
  'fr': 'https://mictoo.com/fr/free-srt-generator',
  'de': 'https://mictoo.com/de/free-srt-generator',
  'es': 'https://mictoo.com/es/free-srt-generator',
  'ru': 'https://mictoo.com/ru/free-srt-generator',
  'it': 'https://mictoo.com/it/free-srt-generator',
  'pt': 'https://mictoo.com/pt/free-srt-generator',
  'pl': 'https://mictoo.com/pl/free-srt-generator',
  'ja': 'https://mictoo.com/ja/free-srt-generator',
  'ko': 'https://mictoo.com/ko/free-srt-generator',
  'x-default': 'https://mictoo.com/free-srt-generator',
}

export const metadata = {
  title: '무료 SRT 생성기 — 온라인으로 자막 생성 | Mictoo',
  description: '모든 오디오 또는 비디오에서 무료로 SRT 파일을 생성. 파일을 업로드하고 타임스탬프 받아쓰기를 받아 .srt를 다운로드. 가입 불필요.',
  alternates: { canonical: 'https://mictoo.com/ko/free-srt-generator', languages: LANGS },
}

export default function KoSrtGeneratorPage() {
  return (
    <LandingLayout
      badge="SRT · 자막 · 무료"
      h1={<>무료 SRT 생성기<br /><span className="text-brand-600">온라인으로 자막 생성</span></>}
      subtitle="모든 오디오 또는 비디오 파일을 업로드하고 몇 초 만에 완성된 SRT 파일을 다운로드. YouTube, Premiere Pro, DaVinci Resolve 및 모든 비디오 편집기와 호환."
      defaultLanguage="ko"
      features={[
        { icon: '🎬', title: 'YouTube 지원 SRT', desc: 'YouTube Studio에 .srt 파일을 직접 업로드하여 자막 추가. 타임스탬프는 자동으로 동기화됩니다.' },
        { icon: '⏱️', title: '정확한 타임코드', desc: '각 자막 세그먼트에 HH:MM:SS,ms 타임스탬프 부여 — 모든 전문 비디오 도구에서 사용되는 표준 형식.' },
        { icon: '🌍', title: '50개 이상의 언어', desc: '한국어, 영어, 일본어, 중국어, 스페인어 등 46개 이상의 언어로 SRT 생성. 언어는 자동 감지됩니다.' },
      ]}
      faq={[
        { q: 'SRT 파일이란?', a: 'SRT(SubRip Subtitle) 파일은 타임스탬프가 있는 자막 항목을 포함하는 텍스트 파일입니다. 각 항목에는 시퀀스 번호, 시작 → 종료 시간, 자막 텍스트가 포함됩니다. SRT는 가장 널리 지원되는 자막 형식입니다.' },
        { q: '비디오에서 SRT를 생성하는 방법은?', a: '위에서 비디오 또는 오디오 파일을 업로드하세요. Mictoo가 받아쓰기를 수행하고 각 세그먼트에 타임스탬프를 추가합니다. 받아쓰기 후 .srt 버튼을 클릭하여 자막 파일을 다운로드합니다.' },
        { q: 'YouTube 비디오에 SRT 자막을 추가하는 방법은?', a: 'YouTube Studio에서 비디오를 열고 자막을 클릭. 언어 추가 → 파일 업로드를 선택하고 .srt를 선택. YouTube가 자막을 자동 동기화합니다.' },
        { q: 'SRT 파일이 Premiere Pro와 DaVinci Resolve에서 작동하나요?', a: '네. Premiere Pro: 파일 → 가져오기 → .srt 선택. DaVinci Resolve: 편집 페이지를 열고 파일 → 자막 가져오기로 이동하여 .srt 선택.' },
        { q: 'SRT 생성기가 정말 무료인가요?', a: '네, 완전히 무료입니다. 계정 불필요, 구독 불필요, 워터마크 없음. 파일을 업로드하고 SRT를 다운로드 — 그게 전부입니다.' },
        { q: '파일 크기 상한은?', a: '최대 25MB. 긴 비디오의 경우 오디오 트랙을 먼저 추출하여 크기를 줄이거나 비디오를 짧은 세그먼트로 분할하세요.' },
        { q: '오디오 파일(MP3, WAV)에서 SRT를 생성할 수 있나요?', a: '네. Mictoo는 MP3, MP4, WAV, M4A, OGG, WEBM, FLAC 등 모든 오디오·비디오 포맷에서 SRT를 생성합니다.' },
        { q: '다운로드 전에 자막을 편집할 수 있나요?', a: '네. 받아쓰기 후 다운로드 전에 브라우저에서 텍스트를 편집할 수 있습니다. 타임스탬프 구조는 내보낸 SRT에 유지됩니다.' },
      ]}
      relatedLinks={[
        { href: '/ko/timestamped-transcription', label: '타임스탬프 받아쓰기' },
        { href: '/ko/transcribe-video-to-text', label: '비디오를 텍스트로' },
        { href: '/ko/transcribe-mp3-to-text', label: 'MP3를 텍스트로' },
        { href: '/ko', label: '모든 포맷' },
      ]}
    />
  )
}
