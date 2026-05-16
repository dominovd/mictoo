import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/webinar-transcription',
  'fr': 'https://mictoo.com/fr/webinar-transcription',
  'de': 'https://mictoo.com/de/webinar-transcription',
  'es': 'https://mictoo.com/es/webinar-transcription',
  'ru': 'https://mictoo.com/ru/webinar-transcription',
  'it': 'https://mictoo.com/it/webinar-transcription',
  'pt': 'https://mictoo.com/pt/webinar-transcription',
  'pl': 'https://mictoo.com/pl/webinar-transcription',
  'ja': 'https://mictoo.com/ja/webinar-transcription',
  'ko': 'https://mictoo.com/ko/webinar-transcription',
  'x-default': 'https://mictoo.com/webinar-transcription',
}

export const metadata = {
  title: '웨비나 받아쓰기 — 녹화의 무료 받아쓰기 | Mictoo',
  description: '웨비나 녹화를 텍스트와 SRT 자막으로 무료로 받아쓰기. Zoom, Webex, GoToWebinar 및 모든 MP4·MP3 내보내기와 작동. 가입 불필요.',
  alternates: { canonical: 'https://mictoo.com/ko/webinar-transcription', languages: LANGS },
}

export default function KoWebinarPage() {
  return (
    <LandingLayout
      badge="웨비나 · MP4 · 무료"
      h1={<>웨비나 받아쓰기<br /><span className="text-brand-600">무료 받아쓰기 생성기</span></>}
      subtitle="웨비나 녹화를 검색 가능한 텍스트 받아쓰기 또는 SRT 자막 파일로 변환. Zoom, Webex, GoToWebinar 및 모든 MP4/MP3 내보내기와 작동합니다."
      defaultLanguage="ko"
      features={[
        { icon: '🎥', title: '모든 플랫폼 내보내기', desc: 'Zoom, Webex, GoToWebinar, Demio, Livestorm — 모두 MP4 또는 M4A로 내보냅니다. 변환 없이 파일을 직접 업로드.' },
        { icon: '📝', title: '웨비나 재사용', desc: '웨비나를 블로그 게시물, SNS 게시물, 뉴스레터, 참가자용 후속 문서로 변환.' },
        { icon: '📺', title: '온디맨드 재생용 SRT', desc: 'YouTube, Vimeo 또는 자체 사이트에 재생을 게시할 때 자막으로 .srt 파일을 다운로드하여 사용.' },
      ]}
      faq={[
        { q: 'Zoom 또는 Webex 웨비나 녹화를 다운로드하는 방법은?', a: 'Zoom: 웹 포털 → 녹화 → 웨비나 클릭 → 다운로드. Webex: 내 녹화에서 녹화 열기 → 다운로드. 둘 다 기본적으로 MP4로 내보냅니다.' },
        { q: '웨비나가 라이브 중에 받아쓰기를 받을 수 있나요?', a: 'Mictoo는 녹화된 파일에서만 작동하며 라이브 스트림에서는 작동하지 않습니다. 실시간 자막의 경우 웨비나 플랫폼의 라이브 캡션 기능을 사용한 다음 종료 후 녹화를 업로드하여 세련된 받아쓰기를 받으세요.' },
        { q: '여러 화자와 Q&A 세션은 어떻습니까?', a: 'Mictoo는 모든 발화를 포함하는 단일 받아쓰기를 생성합니다. 화자 레이블(호스트, 패널리스트 1, 청중)은 다운로드 전에 브라우저 편집기에서 수동으로 추가할 수 있습니다.' },
        { q: '웨비나의 최대 길이는?', a: '파일당 최대 25MB. 64 kbps 모노의 60분 웨비나는 쉽게 들어맞습니다. 더 긴 세션의 경우 낮은 비트레이트로 내보내거나 M4A 오디오를 추출하세요.' },
        { q: '기술 용어에 대한 받아쓰기가 정확한가요?', a: '깨끗한 오디오에서는 정확도가 높습니다. 브랜드 이름, 약어 및 특이한 용어는 때때로 잘못 표기됩니다 — 내보내기 전 브라우저 편집기에서 쉽게 수정할 수 있습니다.' },
      ]}
      relatedLinks={[
        { href: '/ko/meeting-transcription', label: '회의 받아쓰기' },
        { href: '/ko/zoom-transcription', label: 'Zoom 받아쓰기' },
        { href: '/ko/free-srt-generator', label: 'SRT 생성기' },
        { href: '/ko', label: '모든 포맷' },
      ]}
    />
  )
}
