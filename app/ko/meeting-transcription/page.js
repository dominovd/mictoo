import UseCaseLayout from '@/components/UseCaseLayout'

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
  title: '모든 녹화 플랫폼을 위한 회의 전사 | Mictoo',
  description:
    'Zoom, Teams, Meet, Webex, Loom 또는 Riverside에서 승인된 회의 녹음을 업로드하여 텍스트, 요약 및 내보내기를 받으세요.',
  alternates: {
    canonical: 'https://mictoo.com/ko/meeting-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: '회의 전사: 모든 플랫폼, 모든 녹음 | Mictoo',
    description: '회의 녹음을 드롭하면 전사를 받을 수 있습니다. 무료입니다.',
    url: 'https://mictoo.com/ko/meeting-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '회의 전사: 모든 플랫폼',
    description: '회의 녹음을 드롭하면 전사를 받을 수 있습니다.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function KoMeetingTranscriptionPage() {
  return (
    <UseCaseLayout
      locale="ko"
      badge="모든 플랫폼 · 무료 · 가입 필요 없음"
      h1First="회의 전사"
      h1Second="모든 플랫폼을 위한 하나의 업로드 페이지"
      subtitle="Zoom, Teams, Google Meet, Webex, Loom 또는 기타 화면 캡처에서 녹음을 업로드하세요. 타임스탬프가 있는 깨끗한 전사와 AI 요약 및 내보내기를 받으세요."
      currentHref="/ko/meeting-transcription"

      platforms={[
        { name: 'Zoom',        iconKey: 'videoCameraFill', brandBg: '#2D8CFF', href: '/ko/zoom-transcription' },
        { name: 'Google Meet', iconKey: 'videoCameraFill', brandBg: '#00832D', href: '/ko/google-meet-transcription' },
        { name: 'MS Teams',    iconKey: 'videoCameraFill', brandBg: '#4B53BC', href: '/ko/teams-meeting-transcription' },
        { name: 'Webex',       iconKey: 'videoCameraFill', brandBg: '#0F1F35' },
        { name: 'Loom',        iconKey: 'loomPlay',        brandBg: '#625DF5' },
        { name: 'Riverside',   iconKey: 'waveMic',         brandBg: '#4B2AF7' },
      ]}

      howItWorksTitle="회의 전사가 작동하는 방식"
      steps={[
        {
          icon: 'folder',
          title: '회의 녹음 찾기',
          desc: '모든 플랫폼에서 녹음을 내보내거나 다운로드하세요.',
        },
        {
          icon: 'upload',
          title: '파일을 여기로 드롭하세요',
          desc: 'MP3, MP4, WAV 또는 기타 지원되는 형식으로 파일을 업로드하세요.',
        },
        {
          icon: 'editPen',
          title: '전사, 요약, 내보내기',
          desc: '타임스탬프가 있는 전사, AI 요약 및 내보내기 파일을 받으세요.',
        },
      ]}

      exampleTitle="예시 전사 및 요약"
      exampleFileName="meeting-recording.mp4"
      exampleDurationLabel="30분 15초"
      exampleLines={[
        { t: '0:00',  line: '모두 참석해 주셔서 감사합니다. 오늘의 의제로 넘어가기 전에 지난 주 진행 상황을 간단히 요약하겠습니다.' },
        { t: '0:12',  line: '온보딩 흐름을 출시했으며 이전 기준선에 비해 12% 증가했습니다.' },
        { t: '0:28',  line: '좋습니다. 다음으로, 더 많은 유료 고객에게 영향을 미치기 전에 모바일 체크아웃 버그를 수정해야 합니다.' },
        { t: '0:36',  line: '티켓을 생성하고 팀에 오늘 중으로 할당하겠습니다. 스프린트 내에 해결될 것입니다.' },
        { t: '0:44',  line: '가격 페이지 업데이트에 대해서도 논의해야 합니다. 현재 버전은 우리가 예상한 대로 전환되지 않고 있습니다.' },
        { t: '0:55',  line: '오늘 중으로 초안을 공유하겠습니다. 내일 스탠드업 전에 함께 검토할 수 있습니다.' },
      ]}
      summaryPoints={[
        '온보딩 흐름이 출시되었고 활성화가 12% 증가했습니다.',
        '모바일 체크아웃 버그를 수정해야 합니다.',
        '가격 페이지 업데이트를 논의해야 합니다.',
        '오늘 중으로 초안을 공유하고 내일 검토합니다.',
      ]}
      actionItems={[
        '모바일 체크아웃 버그에 대한 티켓 생성',
        '가격 페이지 초안 공유',
        '내일 초안 검토',
      ]}

      whyTitle="플랫폼에 구애받지 않는 업로드의 장점"
      whyCards={[
        {
          icon: 'globe',
          title: '모든 회의 플랫폼에서 작동',
          desc: 'Zoom, Teams, Google Meet, Webex, Loom 등에서 업로드하세요.',
        },
        {
          icon: 'target',
          title: '하나의 검토 워크플로우',
          desc: '어떤 플랫폼에서 녹음이 생성되었든 동일한 타임스탬프 레이아웃과 내보내기 옵션을 사용하세요.',
        },
        {
          icon: 'lock',
          title: '승인된 파일에서 작동',
          desc: 'Mictoo는 이미 사용 권한이 있는 녹음을 처리합니다. 접근 및 다운로드 정책은 여전히 원본 플랫폼에 속합니다.',
        },
        {
          icon: 'sparkles',
          title: '요약 및 번역 포함',
          desc: 'AI 요약을 받고 50개 이상의 언어로 전사를 번역하세요.',
        },
      ]}

      scenariosTitle="일반적인 회의 전사 시나리오"
      scenarios={[
        { icon: 'chat',      title: '고객 요약 이메일' },
        { icon: 'search',    title: '사용자 연구 노트' },
        { icon: 'users',     title: '채용 담당자 스크리닝' },
        { icon: 'briefcase', title: '팀 회의 아카이브' },
        { icon: 'headset',   title: '지원 에스컬레이션' },
        { icon: 'globe',     title: '다국어 회의' },
      ]}

      practicalTitle="회의 녹음을 찾는 방법"
      practicalIntro="정확한 위치는 플랫폼과 회의 역할에 따라 다릅니다. 접근 권한이 있는 녹음만 다운로드하고, 업로드하기 전에 참가자 동의 및 조직 정책을 따르세요."
      practicalItems={[
        {
          title: 'Zoom 클라우드 또는 로컬 녹음',
          desc: '클라우드 녹음은 적격 유료 계정의 Zoom 웹 포털에서 사용할 수 있습니다. 컴퓨터 녹음은 일반적으로 로컬 Zoom 폴더에 저장됩니다.',
        },
        {
          title: 'Google Meet 녹음',
          desc: '적격 Meet 녹음은 주최자의 내 드라이브 › Meet 녹음 폴더에 저장됩니다. 가용성은 에디션 및 관리자 설정에 따라 다릅니다.',
        },
        {
          title: 'Microsoft Teams 녹음',
          desc: '회의 채팅, OneDrive 또는 채널 SharePoint 사이트에서 녹음을 찾으세요. 다운로드 권한은 정책에 의해 제한될 수 있습니다.',
        },
        {
          title: 'Webex, Loom 및 Riverside',
          desc: '플랫폼 내보내기 또는 다운로드 컨트롤을 사용하여 오디오 또는 비디오 파일을 얻고, 업로드 전에 파일이 올바르게 재생되는지 확인하세요.',
        },
      ]}

      tipsTitle="더 나은 회의 전사를 위한 팁"
      tips={[
        '더 작은 업로드를 원할 때는 오디오 전용 내보내기를 선호하세요.',
        '조용한 공간에서 녹음하고 배경 소음을 줄이세요.',
        '다국어 또는 혼합 언어 통화에는 자동 감지를 사용하세요.',
        '전사 후 이름과 용어를 검토하세요.',
      ]}

      guidesTitle="올바른 플랫폼 가이드 선택"
      guides={[
        { href: '/ko/zoom-transcription',          icon: 'video', title: 'Zoom 회의',    desc: '단계별 다운로드 가이드' },
        { href: '/ko/google-meet-transcription',   icon: 'video', title: 'Google Meet',      desc: '단계별 다운로드 가이드' },
        { href: '/ko/teams-meeting-transcription', icon: 'video', title: 'Microsoft Teams',  desc: '단계별 다운로드 가이드' },
        { href: '/ko/meeting-transcription#tool',  icon: 'file',  title: '기타 플랫폼',  desc: '모든 가이드 및 팁 보기' },
      ]}

      faq={[
        {
          q: 'Zoom, Meet 또는 Teams 녹음을 전사할 수 있나요?',
          a: '네. 모든 회의 플랫폼의 오디오 또는 비디오 파일이 작동합니다. 녹음을 다운로드하고 여기로 드롭하세요. MP3, MP4, WAV, M4A, WEBM, FLAC 등을 지원합니다.',
        },
        {
          q: '회의 전사는 무료인가요?',
          a: '네. 25 MB까지는 익명으로, 로그인 시 60 MB까지 가능합니다. 더 긴 회의는 로그인한 사용자에게 자동으로 분할될 수 있습니다. 신용 카드가 필요하지 않습니다.',
        },
        {
          q: 'Mictoo는 다른 화자를 식별하나요?',
          a: '아니요. 현재 전사는 각 줄에 타임스탬프가 있는 연속 텍스트이며 자동 "화자 1 / 화자 2" 레이블이 없습니다.',
        },
        {
          q: '회의 녹음은 저장되나요?',
          a: '아니요. 파일은 전사 제공업체로 스트리밍되고, 한 번 처리된 후 메모리에서 삭제됩니다. 전사는 로그인하고 기록에 추가해야만 저장됩니다.',
        },
        {
          q: '어떤 내보내기 형식이 가능한가요?',
          a: 'TXT (일반 텍스트), SRT 및 VTT (녹음에 맞춘 타임스탬프가 있는 자막), DOCX (Word 문서)입니다. 로그인한 사용자에게는 PDF 및 JSON도 제공됩니다.',
        },
        {
          q: '전사를 번역할 수 있나요?',
          a: '네. 전사 후 목표 언어를 선택하고 번역을 클릭하세요. 참가자에게 선호하는 언어로 요약 이메일을 보내거나, 다국어 회의를 단일 작업 언어로 아카이브하는 데 유용합니다.',
        },
      ]}

      ctaHeadline="다음 회의를 명확한 노트로 바꾸세요"
      ctaSubtitle="모든 플랫폼에서 녹음을 드롭하고 몇 초 안에 전사, 요약 및 내보내기를 받으세요."
      ctaButton="회의 녹음 업로드"

      relatedLinks={[
        { href: '/ko/interview-transcription',  label: '인터뷰 전사' },
        { href: '/ko/podcast-transcription',    label: '팟캐스트 전사' },
        { href: '/ko/lecture-transcription',    label: '강의 전사' },
        { href: '/ko/business-transcription',   label: '비즈니스 전사' },
        { href: '/ko/voice-memo-to-text',       label: '음성 메모를 텍스트로' },
      ]}
    />
  )
}