import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/zoom-transcription',
  'fr': 'https://mictoo.com/fr/zoom-transcription',
  'de': 'https://mictoo.com/de/zoom-transcription',
  'es': 'https://mictoo.com/es/zoom-transcription',
  'ru': 'https://mictoo.com/ru/zoom-transcription',
  'it': 'https://mictoo.com/it/zoom-transcription',
  'pt': 'https://mictoo.com/pt/zoom-transcription',
  'pl': 'https://mictoo.com/pl/zoom-transcription',
  'ja': 'https://mictoo.com/ja/zoom-transcription',
  'ko': 'https://mictoo.com/ko/zoom-transcription',
  'x-default': 'https://mictoo.com/zoom-transcription',
}

export const metadata = {
  title: 'Zoom 받아쓰기 — Zoom 녹화를 무료로 텍스트로 | Mictoo',
  description: 'Zoom 회의 녹화를 무료로 받아쓰기. Zoom Cloud 또는 Local Recording에서 내보낸 MP4와 M4A로 작동. 가입 불필요.',
  alternates: { canonical: 'https://mictoo.com/ko/zoom-transcription', languages: LANGS },
}

export default function KoZoomPage() {
  return (
    <LandingLayout
      badge="Zoom · MP4 · 무료"
      h1={<>Zoom 받아쓰기<br /><span className="text-brand-600">Zoom 녹화를 텍스트로</span></>}
      subtitle="Zoom 통화 녹화를 업로드하고 몇 초 만에 깨끗한 받아쓰기를 받으세요. 무료, 계정 불필요. Cloud Recording 또는 Local Recording의 MP4와 작동합니다."
      defaultLanguage="ko"
      features={[
        { icon: '⚡', title: '빠르고 무료', desc: '25분 Zoom 회의는 보통 30초 이내에 받아쓰기됩니다. 100% 무료, 계정 불필요, 신용카드 불필요.' },
        { icon: '🎯', title: '높은 정확도', desc: 'Zoom 오디오(보통 한 번에 한 명의 화자가 있는 깨끗한 오디오)는 Whisper에서 우수한 결과를 제공합니다 — 정확도 일반적으로 95% 이상.' },
        { icon: '📥', title: '.txt 또는 .srt 내보내기', desc: '받아쓰기를 일반 텍스트로 또는 타임코드가 있는 SRT 자막 파일로 다운로드.' },
      ]}
      faq={[
        { q: 'Zoom에서 녹화를 활성화하는 방법은?', a: 'Zoom 설정: 녹화로 이동 → 로컬 녹화(자신의 PC) 또는 클라우드 녹화(Zoom 클라우드, 유료 플랜 필요)를 활성화. 통화 중 녹화를 클릭하세요.' },
        { q: 'Zoom에 이미 자동 받아쓰기가 있나요?', a: '네, Zoom은 활성화하면 라이브 받아쓰기를 제공하지만 파일은 Zoom 생태계에 남아 있으며 항상 휴대 가능한 .txt로 다운로드할 수 없습니다. Mictoo는 어디서나 사용할 수 있는 휴대 가능한 .txt 또는 .srt를 제공합니다.' },
        { q: 'Zoom 비디오용 SRT 자막을 받을 수 있나요?', a: '네. 받아쓰기 후 타임코드가 있는 .srt 파일을 다운로드하여 YouTube, Vimeo 또는 모든 비디오 편집기에서 자막으로 사용할 수 있습니다.' },
        { q: '기밀 콘텐츠는 어떻습니까?', a: 'Mictoo는 파일을 저장하지 않습니다. 오디오는 받아쓰기를 위해 AI 제공자에 전송되며 폐기됩니다. 규제 데이터가 있는 통화의 경우 외부 AI 서비스에 대한 회사 정책을 확인하세요.' },
        { q: 'Zoom 녹화의 최대 길이는?', a: '파일당 최대 25MB. 64 kbps 모노의 30분 통화는 들어맞습니다. 더 긴 통화의 경우 오디오만(M4A) 추출하거나 비디오를 압축하세요.' },
      ]}
      relatedLinks={[
        { href: '/ko/meeting-transcription', label: '회의 받아쓰기' },
        { href: '/ko/google-meet-transcription', label: 'Google Meet 받아쓰기' },
        { href: '/ko/teams-meeting-transcription', label: 'Teams 받아쓰기' },
        { href: '/ko', label: '모든 포맷' },
      ]}
    />
  )
}
