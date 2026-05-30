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
  description:
    '무료 Google Meet 받아쓰기. Drive에서 녹화(MP4 또는 M4A)를 업로드하여 깨끗한 AI 받아쓰기를 몇 초 만에 받으세요. 무료 Google Workspace에서 작동.',
  alternates: { canonical: 'https://mictoo.com/ko/google-meet-transcription', languages: LANGS },

  openGraph: {
    title: "Google Meet 받아쓰기 — Meet 녹화를 무료로 받아쓰기 | Mictoo",
    description: "무료 Google Meet 받아쓰기. Drive에서 녹화(MP4 또는 M4A)를 업로드하여 깨끗한 AI 받아쓰기를 몇 초 만에 받으세요. 무료 Google Workspace에서 작동.",
    url: "https://mictoo.com/ko/google-meet-transcription",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Google Meet 받아쓰기 — Meet 녹화를 무료로 받아쓰기 | Mictoo",
    description: "무료 Google Meet 받아쓰기. Drive에서 녹화(MP4 또는 M4A)를 업로드하여 깨끗한 AI 받아쓰기를 몇 초 만에 받으세요. 무료 Google Workspace에서 작동.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function KoGoogleMeetPage() {
  return (
    <LandingLayout
      defaultLanguage="ko"
      badge="GOOGLE MEET · MP4 · 무료"
      h1={<>Google Meet 받아쓰기<br /><span className="text-brand-600">Meet 녹화 받아쓰기</span></>}
      subtitle="Google Meet 녹화를 깨끗한 텍스트로 변환. Drive의 MP4를 드롭하면 몇 초 만에 받아쓰기. 계정 불필요, 분당 과금 없음."
      howItWorks={[
        { icon: '☁️', title: 'Google Drive에서 다운로드', desc: 'Google Meet 녹화는 Drive의 "Meet Recordings" 폴더에 저장. MP4로 다운로드(오른쪽 클릭, 다운로드). 긴 회의는 업로드 시간 절약을 위해 먼저 오디오 추출.' },
        { icon: '⚡', title: '파일 드롭', desc: 'MP4에서 오디오를 추출하여 Whisper large-v3로 보냅니다. 30분 회의는 약 1분에 완료.' },
        { icon: '📋', title: '받아쓰기 받기', desc: '브라우저에서 읽고, 복사하거나 TXT 또는 SRT로 다운로드. 내보내기 전에 잘못된 단어를 인라인으로 수정.' },
      ]}
      whyUse={{ title: 'Google Meet에 Mictoo를 사용하는 이유', bullets: [
        { title: '무료를 포함한 모든 Workspace 계층에서 작동', desc: 'Meet 녹화 자체는 유료 계층이 필요하지만 파일이 있으면 Workspace 계층에 관계없이 받아쓰기가 무료입니다.' },
        { title: '비영어 지원이 더 좋음', desc: 'Google의 받아쓰기는 역사적으로 영어에서 가장 강합니다. Whisper large-v3는 자동 감지로 50개 이상의 언어를 다루고, 억양, 이중 언어 대화, 코드 스위칭에서 눈에 띄게 더 좋습니다.' },
        { title: 'Google로 데이터가 돌아가지 않음', desc: '민감한 회의에 의식적으로 Google 생태계 락인을 피한다면, 여기서 받아쓰기하면 텍스트가 Google Workspace 밖에 유지됩니다.' },
        { title: 'SRT 내보내기는 모든 비디오 에디터에서 작동', desc: 'Google의 받아쓰기는 텍스트를 Docs에 제공. 우리 것은 Premiere, DaVinci 또는 YouTube Studio용 깨끗한 SRT를 내보냅니다.' },
        { title: '프라이버시', desc: '파일은 받아쓰기 제공업체로 스트리밍되고 처리 후 폐기됩니다. 서버에 아무것도 기록되지 않습니다.' },
      ]}}
      useCases={{ title: '사람들이 Google Meet 녹화를 받아쓰는 용도', items: [
        { title: '모두가 검색할 수 있는 회의 메모', desc: 'Google Docs나 Notion에 받아쓰기 붙여넣기. 미래의 당신은 프로젝트의 14주차에 무엇이 결정되었는지 기억하지 못합니다. 검색 가능한 텍스트가 도움이 됩니다.' },
        { title: '분산 팀을 위한 비동기 캐치업', desc: '라이브 회의를 놓친 다른 시간대의 사람들은 60분 녹화를 1.5배속으로 보는 대신 몇 분 만에 받아쓰기를 읽습니다.' },
        { title: '클라이언트 통화 검토', desc: '계정 관리자는 중요한 클라이언트 통화를 받아쓰고 텍스트를 CRM에 저장. 더 빠른 회상, 더 나은 핸드오프.' },
        { title: '웨비나와 타운홀 받아쓰기', desc: 'Meet에서 녹화된 더 큰 이벤트의 경우, 받아쓰기가 접근성과 발견 가능성을 위해 (녹화와 함께) 게시하는 것입니다.' },
        { title: '1:1과 성과 대화(관리자용)', desc: '일부 관리자는 후속 조치를 위한 메모를 위해 1:1을 받아씁니다. 유용하지만 직원에게 이유에 대해 투명하게 하세요.' },
      ]}}
      proTips={{ title: 'Google Meet 받아쓰기 팁', tips: [
        { title: '업로드 전에 MP4에서 오디오 추출', desc: 'Meet 녹화는 720p 비디오로, 받아쓰기에는 낭비되는 바이트. 오디오만 가져오기: ffmpeg -i meet.mp4 -vn -ac 1 -b:a 64k meet.mp3. 1 GB MP4가 25 MB 이하로 축소.' },
        { title: 'MP4 다운로드, 스트리밍 안 함', desc: 'Drive는 가끔 브라우저 뷰어에서 MP4를 재생. 여기에 업로드하기 전에 실제로 파일을 다운로드했는지 확인. Drive 공유 링크는 파일 업로드가 아닙니다.' },
        { title: '60분 초과 회의는 업로드 전에 분할', desc: '우리 한도는 가입으로 파일당 60분. 먼저 오디오를 청크로 자르세요. 받아쓰기는 나중에 재결합 가능.' },
        { title: '가능하면 회의 중 백그라운드 탭과 앱 음소거', desc: '회의의 목소리 아래 재생되는 Spotify 트랙은 받아쓰기에 무작위 단어로 도착. 알림 소리도 마찬가지. 녹화 후에 항상 수정 가능한 것은 아닙니다.' },
        { title: '실제 마이크 사용, 저렴한 헤드셋도', desc: '내장 노트북 마이크는 키보드 타이핑, 팬 소음, 방 에코를 캡처. 20달러 유선 USB 헤드셋이 눈에 띄게 깨끗하게 받아쓰기됩니다.' },
        { title: '공유 녹화에서는 다른 곳에 재업로드 전에 Drive 공유 설정 확인', desc: '누군가 Meet 녹화를 공유했다면, 외부 사용을 위해 받아쓰기하기 전에 그것으로 무엇을 할 수 있는지 두 번 확인.' },
      ]}}
      faq={[
        { q: 'Mictoo가 Google Meet 녹화에서 작동합니까?', a: '네. Drive의 Meet Recordings 폴더에서 MP4를 다운로드한 다음 여기에 업로드. 오디오 추출(ffmpeg나 오디오 도구로)이 긴 회의에 이를 빠르게 합니다.' },
        { q: '유료 Google Workspace 계획이 필요합니까?', a: 'Meet를 녹화하려면 유료 Workspace 계획이 필요. 녹화가 Drive에 있으면 계층에 관계없이 여기서 받아쓰기가 무료입니다.' },
        { q: '내 녹화가 Google로 돌아갑니까?', a: '아니요. 파일은 받아쓰기 제공업체(Groq, 백업으로 OpenAI)로 가서 처리 후 폐기됩니다. Google이나 Google 서비스로 아무것도 돌아가지 않습니다.' },
        { q: 'Google 내장 받아쓰기와 비교하면?', a: '우리 것은 무료이고 모든 Workspace 계층에서 작동. Google 것은 계획에 포함되어 있고 회의가 영어라면 더 편리. 비영어, 억양 또는 이중 언어 회의에는 우리 것이 더 정확합니다.' },
        { q: '내 Meet 녹화가 60 MB를 초과합니다. 이제 어떻게?', a: 'ffmpeg나 오디오 도구로 오디오만 추출. 1 GB 비디오는 보통 30 MB 미만의 오디오로. 오디오 자체가 60 MB 초과면 청크로 분할.' },
        { q: '스피커 레이블을 받을 수 있습니까?', a: '자동으로는 안 됩니다. Whisper는 기본적으로 분리를 하지 않습니다. 수동으로 레이블을 추가해야 합니다. 구별 가능한 목소리가 있는 4인 회의의 경우 보통 5분 소요.' },
        { q: 'Meet 채팅 메시지에서 작동합니까?', a: '아니요. 채팅 메시지는 Google에 의해 Meet Recordings 폴더에 별도로 저장. 오디오만 받아쓰기. 둘 다 필요하면 직접 결합.' },
        { q: 'Google Meet 받아쓰기의 정확도는?', a: '깨끗한 오디오(좋은 마이크, 배경 소음 없음): 90-95%. 여러 마이크나 스피커폰의 회의실 녹음은 80-90%로 떨어짐. 이름과 기술 용어는 보통 정리 필요.' },
        { q: 'Google Meet 라이브스트림을 받아쓸 수 있습니까?', a: '아니요. 녹화된 파일로만 작동, 라이브 스트림은 아님. 스트림이 끝나고 녹화가 Drive에 저장되면 다운로드하여 받아쓸 수 있습니다.' },
        { q: '어떤 언어를 지원합니까?', a: '자동 감지로 50개 이상의 언어. 5분 미만 회의나 비음성 인트로가 있는 파일은 더 나은 결과를 위해 언어를 수동으로 선택.' },
        { q: 'Google Doc으로 내보낼 수 있습니까?', a: '일반 텍스트(TXT)와 SRT를 내보냅니다. Google Docs에 복사하여 붙여넣기. 직접적인 Drive 통합은 아직 없습니다.' },
        { q: '다른 Workspace 조직의 Meet 녹화에서 작동합니까?', a: 'Drive에서 파일을 다운로드할 액세스가 있다면, 네. 파일을 단순히 MP4로 처리. 출처를 확인하거나 신경 쓰지 않습니다.' },
      ]}
      relatedLinks={[
        { href: '/ko/zoom-transcription', label: 'Zoom 받아쓰기', desc: 'Zoom Cloud 또는 로컬 녹화용.' },
        { href: '/ko/teams-meeting-transcription', label: 'Teams 받아쓰기', desc: 'Microsoft Teams 녹화용.' },
        { href: '/ko/meeting-transcription', label: '회의 받아쓰기', desc: '다른 플랫폼 녹화용.' },
        { href: '/ko/transcribe-video-to-text', label: '비디오를 텍스트로', desc: '일반 비디오 텍스트 페이지.' },
      ]}
    />
  )
}
