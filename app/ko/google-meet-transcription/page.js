import UseCaseLayout from '@/components/UseCaseLayout'

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
  title: '구글 미트 녹화 전사 텍스트 | Mictoo',
  description:
    'Drive 또는 로컬 화면 캡처에서 승인된 구글 미트 녹화를 업로드하고 전사, AI 요약 및 내보내기를 받으세요.',
  alternates: {
    canonical: 'https://mictoo.com/ko/google-meet-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: '구글 미트 전사: 워크스페이스 또는 무료 계정 | Mictoo',
    description: 'Drive에서 녹화하거나 무료 미트에서 화면 캡처. 둘 다 가능합니다.',
    url: 'https://mictoo.com/ko/google-meet-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '구글 미트 전사',
    description: '모든 계정 등급, 하나의 업로드 페이지.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function KoGoogleMeetTranscriptionPage() {
  return (
    <UseCaseLayout
      locale="ko"
      badge="구글 미트 · Drive 또는 로컬 캡처 · 무료"
      h1First="구글 미트 전사"
      h1Second="Drive 녹화 및 로컬 캡처를 텍스트로"
      subtitle="Drive에서 승인된 구글 미트 녹화 또는 로컬 캡처를 업로드하세요. 녹화 가능 여부는 호스트의 워크스페이스 에디션, 권한 및 관리자 설정에 따라 다릅니다."
      currentHref="/ko/google-meet-transcription"

      platforms={[
        { name: 'Meet MP4',    iconKey: 'videoCameraFill', brandBg: '#00832D' },
        { name: 'QuickTime',   iconKey: 'videoCameraFill', brandBg: '#0F172A' },
        { name: 'OBS',         iconKey: 'videoCameraFill', brandBg: '#302E31' },
        { name: 'Zoom',        iconKey: 'videoCameraFill', brandBg: '#2D8CFF', href: '/ko/zoom-transcription' },
        { name: 'MS Teams',    iconKey: 'videoCameraFill', brandBg: '#4B53BC', href: '/ko/teams-meeting-transcription' },
        { name: 'Meeting hub', iconKey: 'videoCameraFill', brandBg: '#0F1F35', href: '/ko/meeting-transcription' },
      ]}

      howItWorksTitle="구글 미트 전사가 작동하는 방식"
      steps={[
        {
          icon: 'folder',
          title: '녹화 가져오기',
          desc: '적격 워크스페이스 녹화: Drive › 내 드라이브 › 미트 녹화. 그렇지 않으면, 참가자 동의 규칙을 따르는 승인된 로컬 캡처를 사용하세요.',
        },
        {
          icon: 'upload',
          title: '파일을 여기로 드롭하세요',
          desc: 'MP4 또는 M4A 모두 가능합니다. 큰 MP4의 경우, 먼저 ffmpeg로 오디오를 추출하거나 로그인하여 자동 분할을 요청하세요.',
        },
        {
          icon: 'editPen',
          title: '전사, 요약, 내보내기',
          desc: '타임스탬프가 있는 전사, AI 요약 및 TXT/SRT/VTT/DOCX 내보내기를 받으세요. 처리 시간은 길이와 파일 크기에 따라 다릅니다.',
        },
      ]}

      exampleTitle="구글 미트 전사 예시"
      exampleFileName="meet-recording.mp4"
      exampleDurationLabel="27분 45초"
      exampleLines={[
        { t: '0:00',  line: '안녕하세요 팀, 참여해 주셔서 감사합니다. 다음 주 오프사이트에 들어가기 전에 Q3 출시 계획에 대한 간단한 동기화입니다.' },
        { t: '0:10',  line: '마케팅이 랜딩 페이지 복사본을 최종 확정했습니다. 엔지니어링은 금요일 기능 동결을 위해 순조롭게 진행되고 있습니다.' },
        { t: '0:22',  line: '지원 문서가 위험 항목입니다. 우리는 약 3일 뒤쳐져 있으며 출시 전에 따라잡아야 합니다.' },
        { t: '0:33',  line: '이번 주에 Anna를 온보딩 문서에서 이 도움으로 이동할 수 있습니다. 그게 간격을 회복할 것입니다.' },
        { t: '0:44',  line: '좋습니다. 두 번째 주제는 우리가 논의한 가격 페이지 변경 사항입니다. 배포하기 전에 우려 사항이 있습니까?' },
        { t: '0:56',  line: '내가 주의해야 할 한 가지는 기업 등급 프레이밍입니다. 가격대에 비해 조금 얇게 느껴집니다.' },
        { t: '1:08',  line: '공정한 지적입니다. 이번 주에 그 섹션을 다시 검토하고 금요일에 수정된 버전을 공유하겠습니다.' },
      ]}
      summaryPoints={[
        'Q3 출시가 잘 진행되고 있으며, 금요일에 기능 동결.',
        '지원 문서가 3일 뒤쳐져 있습니다 (위험).',
        'Anna가 문서 간격을 메우기 위해 재배치되었습니다.',
        '기업 등급 프레이밍이 수정이 필요합니다.',
      ]}
      actionItems={[
        '이번 주에 Anna를 지원 문서로 재배치',
        '금요일까지 기업 등급 프레이밍 수정',
        '금요일 스탠드업에서 기능 동결 확인',
      ]}

      whyTitle="구글 미트 전사를 위한 Mictoo의 이유"
      whyCards={[
        {
          icon: 'lock',
          title: '미디어 파일로 작동',
          desc: '구글 계정에 Mictoo를 연결하지 않고 Drive 녹화 또는 승인된 로컬 캡처를 업로드하세요.',
        },
        {
          icon: 'target',
          title: '검토를 위한 타임스탬프 텍스트',
          desc: '녹화에 대해 이름과 기술 용어를 검토한 후, 필요한 형식으로 수정된 전사를 내보내세요.',
        },
        {
          icon: 'sparkles',
          title: 'AI 요약 항상 포함',
          desc: '워크스페이스 AI 전사 요약은 별도의 유료 기능입니다. 우리의 것은 모든 전사와 함께 제공됩니다.',
        },
        {
          icon: 'globe',
          title: '50개 이상의 언어로 번역',
          desc: '번역 공급자 없이 다국어 회의 요약.',
        },
      ]}

      scenariosTitle="일반적인 미트 시나리오"
      scenarios={[
        { icon: 'chat',      title: '스탠드업 / 동기화' },
        { icon: 'briefcase', title: '클라이언트 리뷰' },
        { icon: 'search',    title: '사용자 인터뷰' },
        { icon: 'users',     title: '전체 회의' },
        { icon: 'headset',   title: '지원 전화' },
        { icon: 'globe',     title: '다국어' },
      ]}

      tipsTitle="구글 미트 녹화를 위한 팁"
      tips={[
        '워크스페이스 미트 녹화는 Drive › 미트 녹화에 저장됩니다.',
        '무료 등급: QuickTime (Mac) 또는 OBS (Win/Linux)가 잘 작동합니다.',
        '큰 MP4? 오디오 추출: ffmpeg -i meet.mp4 -vn -ac 1 -ar 16000 audio.m4a.',
        '긴 회의의 경우 자동 분할을 위해 로그인하세요.',
      ]}

      guidesTitle="기타 회의 플랫폼"
      guides={[
        { href: '/ko/zoom-transcription',          icon: 'video', title: 'Zoom',           desc: '클라우드 + 로컬 + M4A' },
        { href: '/ko/teams-meeting-transcription', icon: 'video', title: 'MS Teams',       desc: 'OneDrive + SharePoint 경로' },
        { href: '/ko/meeting-transcription',       icon: 'video', title: '회의 허브',    desc: '모든 플랫폼, 하나의 업로드' },
        { href: '/ko/webinar-transcription',       icon: 'monitor', title: '웨비나',     desc: 'ON24, Demio, StreamYard' },
      ]}

      faq={[
        {
          q: '구글 워크스페이스가 필요합니까?',
          a: '구글 녹화 가능 여부는 호스트 계정 에디션, 회의 역할, 관리자 설정 및 권한에 따라 다릅니다. 적격 녹화는 Drive에 저장됩니다. 로컬 캡처를 대신하는 경우, 필요한 참가자 동의를 얻고 적용 가능한 정책을 따르세요.',
        },
        {
          q: '워크스페이스 미트 녹화는 어디에 저장됩니까?',
          a: '회의 주최자의 Drive: 내 드라이브 › 미트 녹화에 저장됩니다. MP4는 일반적으로 회의 종료 몇 분 이내에 나타납니다. 준비되면 이메일 알림이 전송됩니다.',
        },
        {
          q: '미트 전사를 사용할까요, 녹화를 업로드할까요?',
          a: '미트 전사가 사용 가능하고 필요에 맞는 경우 사용하세요. 미디어를 업로드하는 것은 Mictoo 내보내기, 번역 또는 검토할 추가 전사가 필요할 때 유용합니다. 정확도는 오디오에 따라 다릅니다.',
        },
        {
          q: '내 미트 녹화가 60 MB를 초과합니다. 이제 어떻게 해야 하나요?',
          a: 'ffmpeg -i meet.mp4 -vn -ac 1 -ar 16000 audio.m4a로 오디오만 추출하세요. 또는 약 3시간까지 긴 파일의 자동 분할을 위해 로그인하세요.',
        },
        {
          q: '미트 통화의 AI 요약을 받을 수 있습니까?',
          a: '네. AI 요약은 전사와 함께 자동으로 나타납니다. 요약 이메일이나 후속 문서의 훌륭한 초안입니다.',
        },
        {
          q: 'Mictoo가 미트에서 누가 말하는지 식별합니까?',
          a: '아니요. 현재 전사는 라인별 타임스탬프가 있는 연속 텍스트이며 자동 스피커 레이블이 없습니다.',
        },
        {
          q: '미트 녹화가 귀하의 서버에 보관됩니까?',
          a: '아니요. 오디오가 전사 제공업체로 스트리밍되고 한 번 처리된 후 삭제됩니다. 서명된 계정에서는 전사만 지속됩니다.',
        },
      ]}

      ctaHeadline="미트 통화를 깔끔한 텍스트로 변환"
      ctaSubtitle="텍스트, 요약 및 내보내기를 위해 승인된 Drive 녹화 또는 로컬 캡처를 업로드하세요."
      ctaButton="미트 녹화 업로드"

      relatedLinks={[
        { href: '/ko/meeting-transcription',       label: '회의 전사' },
        { href: '/ko/zoom-transcription',          label: '줌 전사' },
        { href: '/ko/teams-meeting-transcription', label: '팀 전사' },
        { href: '/ko/webinar-transcription',       label: '웨비나 전사' },
        { href: '/ko/business-transcription',      label: '비즈니스 전사' },
      ]}
    />
  )
}