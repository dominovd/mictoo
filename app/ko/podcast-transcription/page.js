import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/podcast-transcription',
  'fr': 'https://mictoo.com/fr/podcast-transcription',
  'de': 'https://mictoo.com/de/podcast-transcription',
  'es': 'https://mictoo.com/es/podcast-transcription',
  'ru': 'https://mictoo.com/ru/podcast-transcription',
  'it': 'https://mictoo.com/it/podcast-transcription',
  'pt': 'https://mictoo.com/pt/podcast-transcription',
  'pl': 'https://mictoo.com/pl/podcast-transcription',
  'ja': 'https://mictoo.com/ja/podcast-transcription',
  'ko': 'https://mictoo.com/ko/podcast-transcription',
  'x-default': 'https://mictoo.com/podcast-transcription',
}

export const metadata = {
  title: '팟캐스트 받아쓰기 — 무료 받아쓰기 생성기 | Mictoo',
  description: '팟캐스트 에피소드를 무료로 텍스트로 받아쓰기. 오디오 파일을 업로드하고 즉시 완전한 받아쓰기를 받으세요. MP3, M4A, WAV 지원. 가입 불필요.',
  alternates: { canonical: 'https://mictoo.com/ko/podcast-transcription', languages: LANGS },
}

export default function KoPodcastPage() {
  return (
    <LandingLayout
      badge="팟캐스터 · YouTube · 무료"
      h1={<>팟캐스트 받아쓰기<br /><span className="text-brand-600">무료 받아쓰기 생성기</span></>}
      subtitle="모든 팟캐스트 에피소드를 몇 초 만에 완전한 텍스트 받아쓰기로 변환. 쇼 노트, 블로그 게시물, SEO 및 접근성에 이상적. MP3, M4A 또는 WAV 업로드 — 계정 불필요."
      defaultLanguage="ko"
      features={[
        { icon: '🎙️', title: '모든 팟캐스트 포맷', desc: 'MP3, M4A, WAV, OGG 또는 FLAC 파일을 업로드. 모든 팟캐스트 호스팅 플랫폼 내보내기와 작동.' },
        { icon: '📝', title: '쇼 노트 및 기사', desc: '받아쓰기를 SEO 최적화 콘텐츠, 쇼 노트 또는 검색 가능한 아카이브로 변환.' },
        { icon: '♿', title: '접근성', desc: '받아쓰기를 제공하여 청각 장애인이나 난청자가 팟캐스트에 접근할 수 있도록 합니다.' },
      ]}
      faq={[
        { q: '팟캐스트 에피소드를 무료로 받아쓰기하는 방법은?', a: 'MP3 또는 M4A로 에피소드를 다운로드하고 위에 업로드하면 몇 초 만에 완전한 받아쓰기를 받을 수 있습니다.' },
        { q: 'Spotify 팟캐스트를 받아쓰기할 수 있나요?', a: '오디오 파일에 액세스할 수 있는 경우(예: 자신의 프로그램) 직접 업로드하세요. 제3자 팟캐스트의 경우 오프라인 재생을 허용하는 앱을 통해 에피소드를 다운로드한 후 파일을 가져오세요.' },
        { q: '팟캐스트 받아쓰기를 만드는 이유는?', a: '받아쓰기는 SEO를 향상시키고(Google이 텍스트를 색인화), 청각 장애인이 콘텐츠에 접근할 수 있게 하며, 기사나 뉴스레터로 재사용할 수 있고, 청취자가 에피소드를 훑어보는 데 도움이 됩니다.' },
        { q: '받아쓰기가 정확한가요?', a: '한 명의 화자 또는 깨끗한 듀엣으로 잘 녹음된 팟캐스트의 경우 정확도는 일반적으로 95%를 넘습니다. 겹치는 음성, 강한 억양 또는 낮은 오디오 품질에서는 떨어집니다.' },
        { q: '두 명의 화자가 있는 인터뷰를 받아쓰기할 수 있나요?', a: '네. 받아쓰기는 모든 발화를 캡처합니다. 화자 레이블(호스트 / 게스트)은 브라우저 편집기에서 수동으로 추가됩니다.' },
        { q: '최대 크기는?', a: '최대 25MB. 대부분의 128 kbps MP3는 25분 동안 이 한도에 들어갑니다. 더 긴 에피소드의 경우 비트레이트를 낮추거나 파일을 분할하세요.' },
      ]}
      relatedLinks={[
        { href: '/ko/transcribe-mp3-to-text', label: 'MP3를 텍스트로' },
        { href: '/ko/m4a-to-text', label: 'M4A를 텍스트로' },
        { href: '/ko/interview-transcription', label: '인터뷰 받아쓰기' },
        { href: '/ko', label: '모든 포맷' },
      ]}
    />
  )
}
