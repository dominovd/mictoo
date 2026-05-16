import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/meeting-transcription',
  'fr': 'https://mictoo.com/fr/meeting-transcription',
  'de': 'https://mictoo.com/de/meeting-transcription',
  'es': 'https://mictoo.com/es/meeting-transcription',
  'ru': 'https://mictoo.com/ru/meeting-transcription',
  'it': 'https://mictoo.com/it/meeting-transcription',
  'pt': 'https://mictoo.com/pt/meeting-transcription',
  'pl': 'https://mictoo.com/pl/meeting-transcription',
  'ja': 'https://mictoo.com/ja/meeting-transcription',
  'ko': 'https://mictoo.com/ko/meeting-transcription',
  'x-default': 'https://mictoo.com/meeting-transcription',
}

export const metadata = {
  title: '회의 받아쓰기 — Zoom/Teams/Meet 통화를 텍스트로 | Mictoo',
  description: 'Zoom, Teams 또는 Google Meet 회의 녹음을 무료로 받아쓰기. MP4 또는 M4A를 업로드하고 받아쓰기 + AI 요약을 몇 초 만에 받으세요. 가입 불필요.',
  alternates: { canonical: 'https://mictoo.com/ko/meeting-transcription', languages: LANGS },
}

export default function KoMeetingPage() {
  return (
    <LandingLayout
      badge="Zoom · Teams · Meet · 무료"
      h1={<>회의 받아쓰기<br /><span className="text-brand-600">통화를 텍스트로, 무료</span></>}
      subtitle="회의 녹음(Zoom, Teams, Google Meet 또는 모든 MP4/M4A)을 업로드하고 깨끗한 받아쓰기와 액션 아이템이 포함된 AI 요약을 받으세요. 계정 불필요."
      defaultLanguage="ko"
      features={[
        { icon: '🎥', title: '모든 플랫폼', desc: 'Zoom, Microsoft Teams, Google Meet, Webex, Loom 등 MP4 또는 M4A를 내보내는 모든 플랫폼에서 작동합니다.' },
        { icon: '✨', title: 'AI 요약 + 액션', desc: '받아쓰기 후 자동으로 요약, 핵심 포인트 및 액션 아이템을 받으세요 — 이메일 후속 조치에 바로 사용 가능.' },
        { icon: '🔒', title: '비공개', desc: '통화에 참여하는 AI 봇 없음. 당신이 녹음하고, 업로드하고, 제어합니다. 파일은 처리된 후 즉시 삭제됩니다.' },
      ]}
      faq={[
        { q: 'Zoom 회의를 받아쓰기하는 방법은?', a: 'Zoom에서: 통화 전 로컬 녹화 또는 클라우드 녹화를 활성화. 회의 후 MP4(또는 오디오만 M4A)를 다운로드하여 여기에 업로드하세요.' },
        { q: 'Teams 회의를 받아쓰기하는 방법은?', a: 'Microsoft Teams는 OneDrive 또는 SharePoint에 녹화를 저장합니다. 열고 다운로드를 클릭하면 MP4를 얻을 수 있습니다 — Mictoo에 직접 업로드하세요.' },
        { q: 'Google Meet 회의를 받아쓰기하는 방법은?', a: 'Google Meet은 Google Drive("Meet Recordings" 폴더)에 MP4로 내보냅니다. 다운로드하여 여기에 업로드하세요.' },
        { q: '화자 레이블을 자동으로 받을 수 있나요?', a: '무료 플랜에서는 받을 수 없습니다. 받아쓰기는 단일 스트림입니다. 레이블(호스트 / 참가자1 / 참가자2)은 브라우저 편집기에서 수동으로 추가할 수 있습니다.' },
        { q: '회의의 최대 길이는?', a: '파일당 최대 25MB. 30분 이상의 회의는 낮은 비트레이트로 내보내거나 오디오 트랙(M4A)만 추출하여 제한 내에 맞추세요.' },
      ]}
      relatedLinks={[
        { href: '/ko/zoom-transcription', label: 'Zoom 받아쓰기' },
        { href: '/ko/google-meet-transcription', label: 'Google Meet 받아쓰기' },
        { href: '/ko/teams-meeting-transcription', label: 'Teams 받아쓰기' },
        { href: '/ko', label: '모든 포맷' },
      ]}
    />
  )
}
