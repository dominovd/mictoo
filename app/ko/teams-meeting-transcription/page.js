import UseCaseLayout from '@/components/UseCaseLayout'

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
  title: 'MP4 녹화에서 Teams 회의 전사 | Mictoo',
  description:
    'OneDrive 또는 SharePoint에서 Microsoft Teams MP4를 업로드하고 타임스탬프가 있는 전사본, AI 요약 및 내보내기 파일을 받으세요.',
  alternates: {
    canonical: 'https://mictoo.com/ko/teams-meeting-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: 'MP4에서 Teams 회의 전사 | Mictoo',
    description: 'OneDrive 또는 SharePoint에서 Teams 녹화를 드롭하고 텍스트, 요약 및 내보내기를 받으세요.',
    url: 'https://mictoo.com/ko/teams-meeting-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Teams 회의 전사',
    description: 'OneDrive 또는 SharePoint에서 MP4를 업로드하고 전사본을 받으세요.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function KoTeamsMeetingTranscriptionPage() {
  return (
    <UseCaseLayout
      locale="ko"
      badge="Teams · OneDrive / SharePoint · M365 · 무료"
      h1First="Teams 회의 전사"
      h1Second="OneDrive 또는 SharePoint MP4에서 텍스트로"
      subtitle="접근할 수 있는 Teams 녹화를 다운로드한 후 MP4를 업로드하여 타임스탬프가 있는 전사본, AI 요약 및 내보내기를 받으세요. 녹화 가능성은 Microsoft 365 라이선스 및 조직 정책에 따라 다릅니다."
      currentHref="/ko/teams-meeting-transcription"

      platforms={[
        { name: 'OneDrive',    iconKey: 'videoCameraFill', brandBg: '#0364B8' },
        { name: 'SharePoint',  iconKey: 'videoCameraFill', brandBg: '#036C70' },
        { name: 'Channel MP4', iconKey: 'videoCameraFill', brandBg: '#4B53BC' },
        { name: 'Zoom',        iconKey: 'videoCameraFill', brandBg: '#2D8CFF', href: '/ko/zoom-transcription' },
        { name: 'Google Meet', iconKey: 'videoCameraFill', brandBg: '#00832D', href: '/ko/google-meet-transcription' },
        { name: 'Meeting hub', iconKey: 'videoCameraFill', brandBg: '#0F1F35', href: '/ko/meeting-transcription' },
      ]}

      howItWorksTitle="Teams 회의 전사가 작동하는 방식"
      steps={[
        {
          icon: 'folder',
          title: '녹화 찾기',
          desc: '개인 회의: OneDrive › 내 파일 › 녹화. 채널 회의: 채널의 SharePoint 사이트.',
        },
        {
          icon: 'upload',
          title: '여기에 MP4 드롭',
          desc: 'OneDrive 또는 SharePoint에서 다운로드하고 드래그하세요. 60 MB를 초과하는 경우 오디오를 추출하거나 자동 분할을 위해 로그인하세요.',
        },
        {
          icon: 'editPen',
          title: '전사본, 요약, 내보내기',
          desc: '타임스탬프가 있는 전사본, AI 요약, TXT/SRT/VTT/DOCX. 30분 Teams 통화는 약 1분 만에 완료됩니다.',
        },
      ]}

      exampleTitle="예시 Teams 회의 전사"
      exampleFileName="teams-channel-meeting.mp4"
      exampleDurationLabel="41:08"
      exampleLines={[
        { t: '0:00',  line: '좋습니다, 스프린트 리뷰에 오신 것을 환영합니다. 우리는 무엇이 출시되었고, 무엇이 출시되지 않았으며, 그 이유를 살펴볼 것입니다.' },
        { t: '0:11',  line: '결제 팀은 화요일에 새로운 환불 흐름을 출시했습니다. 채택률은 예상보다 높으며, 적격 티켓의 약 40%입니다.' },
        { t: '0:24',  line: '검색 팀은 예상보다 긴 인덱싱 파이프라인에 직면했습니다. 출시가 다음 스프린트로 미뤄졌습니다.' },
        { t: '0:35',  line: '괜찮지만, 고객 성공 팀에 지연을 전달해야 합니다. 그래야 그들이 기대치를 관리할 수 있습니다.' },
        { t: '0:47',  line: '오늘 공유 채널에 수정된 일정과 이유를 담은 메모를 보낼 것입니다.' },
        { t: '0:58',  line: '셋째, 모바일 충돌률이 약간 증가했습니다. 여전히 SLA 내에 있지만 이번 스프린트를 지켜볼 가치가 있습니다.' },
        { t: '1:09',  line: '장치 팀은 이미 작업 중입니다. 수요일까지 근본 원인을 파악하고 스프린트 종료 시 수정할 수 있을 것입니다.' },
      ]}
      summaryPoints={[
        '환불 흐름이 화요일에 출시되었고, 40% 채택률.',
        '검색 팀이 한 스프린트 지연됨 (인덱싱 파이프라인).',
        '모바일 충돌률이 증가했지만 SLA 내에 있음.',
        '모바일 충돌의 근본 원인은 수요일까지 파악됨.',
      ]}
      actionItems={[
        '고객 성공 채널에 지연 메모 보내기',
        '모바일 충돌 근본 원인 조사 (수요일)',
        '검색 팀의 새로운 출시 날짜 확인',
      ]}

      whyTitle="Teams 녹화를 위한 Mictoo의 이유"
      whyCards={[
        {
          icon: 'folder',
          title: '다운로드된 녹화와 호환',
          desc: 'OneDrive 또는 채널 SharePoint 사이트에서 다운로드할 권한이 있는 MP4를 사용하세요.',
        },
        {
          icon: 'target',
          title: '이름 및 용어 검토',
          desc: '타임스탬프가 있는 출력은 제품 이름, 약어 및 전문 용어를 찾고 수정하기 쉽게 만듭니다.',
        },
        {
          icon: 'sparkles',
          title: '전사본 옆에 요약',
          desc: '요약 초안을 생성하고 전체 텍스트 옆에 두어 공유 전에 검토하세요.',
        },
        {
          icon: 'globe',
          title: '다국어 녹화 번역',
          desc: '한 언어로 녹화하고 다른 언어로 요약이 필요합니다. 한 번의 클릭으로 50개 이상의 언어.',
        },
      ]}

      scenariosTitle="일반적인 Teams 시나리오"
      scenarios={[
        { icon: 'chat',      title: '스프린트 리뷰' },
        { icon: 'briefcase', title: '이사회 동기화' },
        { icon: 'users',     title: '스탠드업' },
        { icon: 'target',    title: 'OKR 리뷰' },
        { icon: 'headset',   title: '지원 에스컬레이션' },
        { icon: 'globe',     title: '국제 통화' },
      ]}

      tipsTitle="Teams 녹화를 위한 팁"
      tips={[
        '개인 회의는 OneDrive (주최자의 계정)에 저장됩니다.',
        '채널 회의는 채널의 SharePoint 사이트에 저장됩니다.',
        'GCC / 기업 테넌트는 다운로드를 제한할 수 있습니다: IT에 문의하세요.',
        '긴 회의의 경우, ffmpeg로 오디오를 추출하여 파일 크기를 줄이세요.',
      ]}

      guidesTitle="기타 회의 플랫폼"
      guides={[
        { href: '/ko/zoom-transcription',        icon: 'video', title: 'Zoom',        desc: '클라우드 + 로컬 + M4A' },
        { href: '/ko/google-meet-transcription', icon: 'video', title: 'Google Meet', desc: '워크스페이스 + 무료' },
        { href: '/ko/meeting-transcription',     icon: 'video', title: '회의 허브', desc: '모든 플랫폼, 한 번의 업로드' },
        { href: '/ko/business-transcription',    icon: 'briefcase', title: '비즈니스', desc: '허가된 내부 녹화' },
      ]}

      faq={[
        {
          q: 'Teams 녹화는 어디에 저장되나요?',
          a: '개인 회의: 주최자의 OneDrive에 내 파일 › 녹화 아래에 저장됩니다. 채널 회의: 해당 채널을 지원하는 SharePoint 사이트의 문서 내 채널 폴더에 저장됩니다.',
        },
        {
          q: '녹화를 업로드하려면 Teams Premium이 필요합니까?',
          a: 'Mictoo는 Teams 계정에 연결하는 대신 다운로드한 미디어 파일을 처리합니다. Teams 내에서 녹화, 전사 또는 다운로드할 수 있는 능력은 여전히 Microsoft 365 라이선스, 회의 역할 및 조직 정책에 따라 다릅니다.',
        },
        {
          q: 'Teams 전사본을 사용해야 하나요, 아니면 녹화를 업로드해야 하나요?',
          a: '전사본이 사용 가능하고 필요에 맞는 경우 Teams 전사본을 사용하세요. Mictoo 내보내기, 번역 또는 검토할 추가 전사본이 필요할 때 녹화를 업로드하는 것이 유용합니다. 정확도는 녹화에 따라 다릅니다.',
        },
        {
          q: '내 Teams MP4가 60 MB를 초과합니다. 이제 어떻게 하나요?',
          a: '오디오 추출: ffmpeg -i teams.mp4 -vn -ac 1 -ar 16000 audio.m4a. 또는 로그인하여 약 3시간까지 파일 자동 분할을 하세요.',
        },
        {
          q: 'GCC / 기업 테넌트에서 Mictoo를 사용할 수 있나요?',
          a: '일부 기업 및 정부 테넌트는 다운로드 또는 외부 처리를 제한합니다. 다운로드하거나 회의 미디어를 업로드하기 전에 조직 정책을 따르고 IT 또는 녹화 소유자에게 확인하세요.',
        },
        {
          q: 'Mictoo는 Teams 화자를 식별하나요?',
          a: '아니요. 현재 전사본은 줄별 타임스탬프가 있는 연속 텍스트이며 자동 화자 레이블이 없습니다.',
        },
        {
          q: 'Teams 녹화가 귀하의 서버에 저장되나요?',
          a: '아니요. 파일은 전사 제공업체로 스트리밍되고 한 번 처리된 후 삭제됩니다. 전사본만 로그인한 계정에 남습니다.',
        },
      ]}

      ctaHeadline="Teams 회의를 깔끔한 텍스트로 변환"
      ctaSubtitle="허가된 OneDrive 또는 SharePoint 녹화를 업로드하고 텍스트, 요약 및 내보내기를 받으세요."
      ctaButton="Teams 녹화 업로드"

      relatedLinks={[
        { href: '/ko/meeting-transcription',       label: '회의 전사' },
        { href: '/ko/zoom-transcription',          label: 'Zoom 전사' },
        { href: '/ko/google-meet-transcription',   label: 'Google Meet 전사' },
        { href: '/ko/business-transcription',      label: '비즈니스 전사' },
        { href: '/ko/webinar-transcription',       label: '웨비나 전사' },
      ]}
    />
  )
}