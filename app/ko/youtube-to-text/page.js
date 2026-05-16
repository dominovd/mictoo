import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/youtube-to-text',
  'fr': 'https://mictoo.com/fr/youtube-to-text',
  'de': 'https://mictoo.com/de/youtube-to-text',
  'es': 'https://mictoo.com/es/youtube-to-text',
  'ru': 'https://mictoo.com/ru/youtube-to-text',
  'it': 'https://mictoo.com/it/youtube-to-text',
  'pt': 'https://mictoo.com/pt/youtube-to-text',
  'pl': 'https://mictoo.com/pl/youtube-to-text',
  'ja': 'https://mictoo.com/ja/youtube-to-text',
  'ko': 'https://mictoo.com/ko/youtube-to-text',
  'x-default': 'https://mictoo.com/youtube-to-text',
}

export const metadata = {
  title: 'YouTube를 텍스트로 — YouTube 비디오 무료 받아쓰기 | Mictoo',
  description: 'YouTube 비디오를 텍스트와 SRT 자막으로 무료로 받아쓰기. 먼저 오디오를 다운로드하고 Mictoo에 업로드. MP3, MP4, M4A 지원. 가입 불필요.',
  alternates: { canonical: 'https://mictoo.com/ko/youtube-to-text', languages: LANGS },
}

export default function KoYouTubeToTextPage() {
  return (
    <LandingLayout
      badge="YouTube · SRT · 무료"
      h1={<>YouTube를 텍스트로<br /><span className="text-brand-600">YouTube 비디오 무료 받아쓰기</span></>}
      subtitle="모든 YouTube 비디오를 받아쓰기 또는 SRT 파일로 변환. 무료, 가입 불필요. 오디오 또는 비디오를 다운로드한 후 Mictoo에 파일을 업로드하세요."
      defaultLanguage="ko"
      features={[
        { icon: '🎬', title: '모든 YouTube 비디오', desc: '튜토리얼, 팟캐스트, 인터뷰, 강의, Vlog — 깨끗한 음성이 있으면 무엇이든. 언어 자동 감지, 50개 이상 지원.' },
        { icon: '📺', title: '자막용 SRT', desc: '받아쓰기 후 즉시 사용 가능한 .srt 파일 다운로드. YouTube Studio에 업로드하여 몇 초 만에 정확한 자막을 비디오에 추가할 수 있습니다.' },
        { icon: '📝', title: '콘텐츠 재사용', desc: '비디오를 블로그 게시물, 쇼 노트, SNS용 인용구, 번역용 스크립트로 변환. 받아쓰기는 브라우저에서 완전히 편집 가능합니다.' },
      ]}
      faq={[
        { q: 'YouTube 비디오에서 오디오를 다운로드하는 방법은?', a: '자신의 비디오의 경우: YouTube Studio → 콘텐츠 → 비디오 클릭 → 다운로드. 제3자 비디오의 경우 옵션은 비디오의 라이선스와 YouTube 이용약관에 따라 다릅니다. 많은 사용자는 먼저 자신의 콘텐츠를 다운로드하여 여기에 업로드합니다.' },
        { q: 'Mictoo가 YouTube URL에서 직접 다운로드할 수 있나요?', a: '아니요 — YouTube 이용약관과 창작자 권리를 존중하기 위해 Mictoo는 URL에서 콘텐츠를 다운로드하지 않습니다. 받아쓰기 권한이 있는 오디오 또는 비디오 파일을 업로드하세요.' },
        { q: 'Mictoo 캡션을 YouTube 비디오에 추가하는 방법은?', a: '받아쓰기 후 ".srt 다운로드"를 클릭하여 자막 파일을 받으세요. YouTube Studio에서: 비디오 열기 → 자막 → 언어 추가 → 파일 업로드 → .srt 선택. 자막은 자동으로 동기화됩니다.' },
        { q: '영어가 아닌 비디오에서도 받아쓰기가 작동하나요?', a: '네. Mictoo는 사용된 언어를 자동으로 감지하고 50개 이상의 언어를 지원합니다 — 한국어, 일본어, 중국어, 스페인어, 프랑스어, 독일어, 러시아어, 아랍어 등. 감지가 틀린 경우 언어를 수동으로 설정할 수 있습니다.' },
        { q: '비디오의 최대 크기는?', a: '업로드당 최대 25MB. 128 kbps의 25분 오디오 내보내기는 들어맞습니다. 긴 비디오의 경우 오디오 트랙을 추출(M4A가 가장 효율적)하거나 파일을 여러 부분으로 분할하세요.' },
      ]}
      relatedLinks={[
        { href: '/ko/transcribe-video-to-text', label: '비디오를 텍스트로' },
        { href: '/ko/free-srt-generator', label: 'SRT 생성기' },
        { href: '/ko/podcast-transcription', label: '팟캐스트 받아쓰기' },
        { href: '/ko', label: '모든 포맷' },
      ]}
    />
  )
}
