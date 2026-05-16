import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/teams-meeting-transcription',
  'fr': 'https://mictoo.com/fr/teams-meeting-transcription',
  'de': 'https://mictoo.com/de/teams-meeting-transcription',
  'es': 'https://mictoo.com/es/teams-meeting-transcription',
  'ru': 'https://mictoo.com/ru/teams-meeting-transcription',
  'it': 'https://mictoo.com/it/teams-meeting-transcription',
  'pt': 'https://mictoo.com/pt/teams-meeting-transcription',
  'pl': 'https://mictoo.com/pl/teams-meeting-transcription',
  'ja': 'https://mictoo.com/ja/teams-meeting-transcription',
  'ko': 'https://mictoo.com/ko/teams-meeting-transcription',
  'x-default': 'https://mictoo.com/teams-meeting-transcription',
}

export const metadata = {
  title: 'Microsoft Teams 받아쓰기 — Teams 녹화 받아쓰기 | Mictoo',
  description: 'Microsoft Teams 회의 녹화를 무료로 텍스트로 받아쓰기. OneDrive 또는 SharePoint의 MP4와 작동. 가입 불필요.',
  alternates: { canonical: 'https://mictoo.com/ko/teams-meeting-transcription', languages: LANGS },
}

export default function KoTeamsPage() {
  return (
    <LandingLayout
      badge="Microsoft Teams · MP4 · 무료"
      h1={<>Microsoft Teams 받아쓰기<br /><span className="text-brand-600">Teams 회의를 텍스트로</span></>}
      subtitle="Microsoft Teams 회의 녹화를 깨끗한 텍스트 받아쓰기 또는 SRT 자막 파일로 변환. 무료, 계정 불필요. OneDrive 또는 SharePoint의 MP4와 작동합니다."
      defaultLanguage="ko"
      features={[
        { icon: '🏢', title: 'Teams 워크플로우에 최적화', desc: 'OneDrive 또는 SharePoint에서 녹화를 다운로드 — 보통 회의 채팅의 "Recordings" — 하여 Mictoo에 업로드. MP4는 그대로 작동합니다.' },
        { icon: '📤', title: '공유 가능한 받아쓰기', desc: '회의를 놓친 참가자에게 공유하기 위해 받아쓰기를 Teams 채팅, OneNote 또는 Loop 구성요소에 붙여넣을 수 있습니다.' },
        { icon: '🌐', title: '모든 회의 언어', desc: '한국어, 영어, 스페인어, 프랑스어, 독일어, 이탈리아어, 네덜란드어, 일본어, 중국어 등 40개 이상의 언어를 받아쓰기. 언어는 자동 감지됩니다.' },
      ]}
      faq={[
        { q: 'Teams는 회의 녹화를 어디에 저장하나요?', a: '대부분의 조직에서 Teams는 녹화자의 OneDrive(1:1 / 그룹 채팅) 또는 채널의 SharePoint 폴더(채널 회의)에 녹화를 저장합니다. 녹화를 열고 다운로드를 클릭하면 MP4 파일을 얻을 수 있습니다.' },
        { q: 'Teams에 이미 받아쓰기가 있지 않나요?', a: 'Microsoft Teams는 관리자가 활성화한 경우 내장 라이브 받아쓰기를 제공하지만 파일은 Teams 생태계에 남아 있으며 항상 다운로드할 수 없습니다. Mictoo는 어디서나 사용할 수 있는 휴대 가능한 .txt 또는 .srt를 제공합니다.' },
        { q: 'Teams 비디오용 SRT 자막을 받을 수 있나요?', a: '네. 받아쓰기 후 타임스탬프가 있는 .srt 파일을 다운로드하여 YouTube, Vimeo 또는 모든 비디오 편집기에서 자막으로 사용할 수 있습니다.' },
        { q: '기밀 회의 콘텐츠는 어떻습니까?', a: 'Mictoo는 파일을 저장하지 않습니다. 오디오는 받아쓰기 목적으로만 AI 제공자에 전송되며 즉시 폐기됩니다. 규제 데이터가 있는 회의의 경우 외부 AI 서비스에 대한 조직 정책을 확인하세요.' },
        { q: 'Teams 녹화의 최대 길이는?', a: '파일당 최대 25MB. 30분 이상 회의의 대부분의 Teams MP4는 이 제한을 초과합니다 — 오디오 추출(M4A) 또는 비디오 압축기를 사용하세요.' },
      ]}
      relatedLinks={[
        { href: '/ko/zoom-transcription', label: 'Zoom 받아쓰기' },
        { href: '/ko/meeting-transcription', label: '회의 받아쓰기' },
        { href: '/ko', label: '모든 포맷' },
      ]}
    />
  )
}
