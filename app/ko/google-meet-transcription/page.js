import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/google-meet-transcription',
  'fr': 'https://mictoo.com/fr/google-meet-transcription',
  'de': 'https://mictoo.com/de/google-meet-transcription',
  'es': 'https://mictoo.com/es/google-meet-transcription',
  'ru': 'https://mictoo.com/ru/google-meet-transcription',
  'it': 'https://mictoo.com/it/google-meet-transcription',
  'pt': 'https://mictoo.com/pt/google-meet-transcription',
  'pl': 'https://mictoo.com/pl/google-meet-transcription',
  'ja': 'https://mictoo.com/ja/google-meet-transcription',
  'ko': 'https://mictoo.com/ko/google-meet-transcription',
  'x-default': 'https://mictoo.com/google-meet-transcription',
}

export const metadata = {
  title: 'Google Meet 받아쓰기 — Meet 녹화를 무료로 받아쓰기 | Mictoo',
  description: 'Google Meet 녹화를 무료로 텍스트로 받아쓰기. Google Drive에서 내보낸 MP4와 작동. 가입 불필요, 설치 불필요.',
  alternates: { canonical: 'https://mictoo.com/ko/google-meet-transcription', languages: LANGS },
}

export default function KoGoogleMeetPage() {
  return (
    <LandingLayout
      badge="Google Meet · MP4 · 무료"
      h1={<>Google Meet 받아쓰기<br /><span className="text-brand-600">Meet 녹화를 텍스트로 변환</span></>}
      subtitle="Google Meet에서 내보낸 MP4를 업로드하고 몇 초 만에 깨끗한 받아쓰기를 받으세요. 무료, 가입 불필요. Google의 라이브 자막을 정리된 회의 요약으로 보완합니다."
      defaultLanguage="ko"
      features={[
        { icon: '🎬', title: 'MP4 직접 지원', desc: 'Google Meet은 MP4로 Google Drive에 녹화를 내보냅니다. 파일을 다운로드하여 Mictoo에 업로드하세요 — 변환이나 추출 불필요.' },
        { icon: '🧾', title: '라이브 자막보다 깨끗', desc: 'Google의 라이브 자막은 의미를 포착하지만 구두점과 이름을 생략합니다. Mictoo는 Docs, Notion 또는 후속 이메일에 붙여넣을 수 있는 세련된 받아쓰기를 만듭니다.' },
        { icon: '🔒', title: '비공개', desc: '파일은 처리된 후 즉시 삭제됩니다. 회의 오디오나 받아쓰기를 저장하지 않습니다.' },
      ]}
      faq={[
        { q: 'Google Meet 녹화를 다운로드하는 방법은?', a: 'Google Drive 열기 → 내 드라이브 → Meet Recordings(자동 생성된 폴더). 회의를 찾아 ⋮ → 다운로드를 클릭. 파일은 MP4입니다 — 그대로 Mictoo에 업로드하세요.' },
        { q: 'Google Meet에 라이브 자막이 있는데 왜 Mictoo를 사용하나요?', a: '라이브 자막은 회의 중에 유용하지만 기본적으로 저장되지 않으며 구두점이나 대문자가 없습니다. Mictoo는 공유 또는 재사용에 바로 사용할 수 있는 세련되고 편집 가능한 받아쓰기를 제공합니다.' },
        { q: '화자 레이블(호스트, 게스트 1 등)을 받을 수 있나요?', a: '무료 플랜에서는 자동으로 받을 수 없습니다. 받아쓰기는 단일 텍스트 스트림입니다 — 레이블은 브라우저 편집기에서 수동으로 추가할 수 있습니다.' },
        { q: 'Meet 녹화의 최대 길이는?', a: '파일당 최대 25MB. 기본 품질의 Google Meet MP4는 30분당 약 50MB입니다. 제한 내에 맞추려면 오디오 트랙(M4A)을 추출하거나 비디오를 압축하세요.' },
        { q: 'Google의 "Take notes for me" 기능과 같나요?', a: '아니요 — Workspace의 "Take notes for me" 기능은 AI 요약을 생성하며 충실한 받아쓰기가 아닙니다. Mictoo는 완전한 단어별 받아쓰기를 제공하며 필요에 따라 별도로 요약할 수 있습니다.' },
      ]}
      relatedLinks={[
        { href: '/ko/zoom-transcription', label: 'Zoom 받아쓰기' },
        { href: '/ko/meeting-transcription', label: '회의 받아쓰기' },
        { href: '/ko', label: '모든 포맷' },
      ]}
    />
  )
}
