import UseCaseLayout from '@/components/UseCaseLayout'

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
  title: 'Zoom 전사 서비스 | Mictoo',
  description:
    'Zoom 클라우드 또는 로컬 MP4/M4A 녹음을 업로드하고 타임스탬프가 포함된 전사본, AI 요약 및 내보내기 파일을 받으세요.',
  alternates: {
    canonical: 'https://mictoo.com/ko/zoom-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: 'Zoom 녹음 전사 | Mictoo',
    description: 'Zoom 클라우드 또는 로컬 MP4/M4A를 업로드하고 전사본, 요약 및 내보내기를 받으세요.',
    url: 'https://mictoo.com/ko/zoom-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zoom 전사: 무료',
    description: 'Zoom 녹음을 업로드하고 타임스탬프가 포함된 전사본을 받으세요.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function KoZoomTranscriptionPage() {
  return (
    <UseCaseLayout
      locale="ko"
      badge="Zoom · 클라우드 / 로컬 / M4A 오디오 · 무료"
      h1First="Zoom 전사"
      h1Second="클라우드 및 로컬 녹음을 텍스트로"
      subtitle="Zoom 클라우드 녹음 MP4, 오디오 전용 M4A 또는 로컬 녹음을 업로드하세요. 타임스탬프가 포함된 전사본, AI 요약, 번역 및 내보내기 파일을 하나의 워크플로우에서 받으세요."
      currentHref="/ko/zoom-transcription"

      platforms={[
        { name: '클라우드 MP4',    iconKey: 'videoCameraFill', brandBg: '#2D8CFF' },
        { name: 'M4A 오디오',    iconKey: 'mic',             brandBg: '#0EA5A4' },
        { name: '로컬 MP4',    iconKey: 'videoCameraFill', brandBg: '#4B53BC' },
        { name: 'Google Meet',  iconKey: 'videoCameraFill', brandBg: '#00832D', href: '/ko/google-meet-transcription' },
        { name: 'MS Teams',     iconKey: 'videoCameraFill', brandBg: '#4B53BC', href: '/ko/teams-meeting-transcription' },
        { name: '회의 허브',  iconKey: 'videoCameraFill', brandBg: '#0F1F35', href: '/ko/meeting-transcription' },
      ]}

      howItWorksTitle="Zoom 전사가 작동하는 방식"
      steps={[
        {
          icon: 'folder',
          title: 'Zoom에서 다운로드',
          desc: '클라우드: zoom.us → 녹화 → MP4 또는 "오디오 전용 (M4A)" 버전 다운로드. 로컬: ~/Documents/Zoom/.',
        },
        {
          icon: 'upload',
          title: '파일을 여기에 드롭',
          desc: '오디오 전용 M4A는 일반적으로 MP4보다 훨씬 작고 비디오 트랙을 업로드하지 않습니다. 익명으로 최대 25 MB, 로그인 시 60 MB까지 무료입니다.',
        },
        {
          icon: 'editPen',
          title: '검토 및 내보내기',
          desc: '처리 시간은 길이, 파일 크기 및 수요에 따라 다릅니다. 완료되면 전사본을 검토하고 요약, 자막 또는 DOCX 요약을 내보내세요.',
        },
      ]}

      exampleTitle="예시 Zoom 회의 전사"
      exampleFileName="zoom-cloud-recording.m4a"
      exampleDurationLabel="34:12"
      exampleLines={[
        { t: '0:00',  line: '좋습니다, 지연에 대해 사과드립니다. Zoom이 업데이트할 때까지 저를 들어오게 하지 않았습니다. 시작합시다.' },
        { t: '0:10',  line: '오늘은 지난주 프로토타입 피드백을 검토하고 스프린트에서 우선 순위를 정할 것입니다.' },
        { t: '0:22',  line: '전반적으로 피드백은 긍정적이었습니다. 15명의 참가자 중 12명이 도움 없이 흐름을 이해했습니다.' },
        { t: '0:33',  line: '막힌 세 명은 모두 설정 화면에서 동일한 문제를 겪었습니다. 먼저 그 문제를 해결해야 합니다.' },
        { t: '0:45',  line: '동의합니다. 이미 디자인 수정 작업 중입니다. 목요일까지 검토할 수 있을 것입니다.' },
        { t: '0:56',  line: '둘째, 모두가 새로운 빈 상태를 좋아했지만 아무도 가져오기 버튼을 찾지 못했습니다. 너무 깊이 묻혀 있습니다.' },
        { t: '1:08',  line: '가져오기를 빈 상태의 기본 작업으로 이동합시다. 엔지니어링에 대한 한 줄 변경입니다.' },
      ]}
      summaryPoints={[
        '프로토타입 피드백: 12/15가 도움 없이 흐름을 완료했습니다.',
        '차단 요소: 설정 화면이 3/15 참가자를 혼란스럽게 했습니다.',
        '빈 상태는 잘 받아들여졌지만 가져오기 버튼을 찾기 어렵습니다.',
        '목요일까지 디자인 수정이 있습니다.',
      ]}
      actionItems={[
        '설정 화면 수정 (목요일 디자인 수정)',
        '빈 상태에서 기본 작업으로 가져오기 홍보',
        '금요일 스탠드업에서 수정된 프로토타입 공유',
      ]}

      whyTitle="Zoom 녹음과 함께 Mictoo를 사용하는 이유"
      whyCards={[
        {
          icon: 'target',
          title: '검토할 추가 전사본',
          desc: '이름, 용어 및 주요 인용을 확인하기 위해 추가 전사본과 타임스탬프가 포함된 텍스트가 필요할 때 Mictoo를 사용하세요.',
        },
        {
          icon: 'lock',
          title: '다운로드한 파일 처리',
          desc: 'Mictoo는 귀하의 Zoom 계정에 연결되지 않습니다. 이미 사용 권한이 있는 클라우드 또는 로컬 녹음을 업로드하세요.',
        },
        {
          icon: 'gear',
          title: '로컬 녹음도 지원',
          desc: 'Zoom 내장 전사는 클라우드 전용입니다. 로컬 녹음은 아무것도 없습니다. Mictoo는 둘 다 작동합니다.',
        },
        {
          icon: 'sparkles',
          title: '요약 + 번역 포함',
          desc: 'AI 요약이 전사본과 함께 자동으로 나타납니다. 한 번의 클릭으로 50개 이상의 언어로 번역하세요.',
        },
      ]}

      scenariosTitle="일반적인 Zoom 시나리오"
      scenarios={[
        { icon: 'chat',      title: '클라이언트 통화' },
        { icon: 'users',     title: '팀 스탠드업' },
        { icon: 'briefcase', title: '판매 데모' },
        { icon: 'search',    title: '사용자 인터뷰' },
        { icon: 'book',      title: '웨비나' },
        { icon: 'globe',     title: '다국어 통화' },
      ]}

      tipsTitle="Zoom 녹음 팁"
      tips={[
        'M4A "오디오 전용" 버전을 다운로드하세요. 동일한 정확도, 10배 작습니다.',
        '클라우드 녹음 할당량은 우리의 전사에 소모되지 않습니다 (우리는 외부에서 실행됩니다).',
        '로컬 녹음도 작동합니다. ~/Documents/Zoom/에서 확인하세요.',
        '60 MB를 초과하는 긴 통화의 경우, 자동 분할을 위해 로그인하세요.',
      ]}

      guidesTitle="자체 가이드가 있는 회의 플랫폼"
      guides={[
        { href: '/ko/google-meet-transcription',   icon: 'video', title: 'Google Meet', desc: 'Workspace + 무료 우회 방법' },
        { href: '/ko/teams-meeting-transcription', icon: 'video', title: 'MS Teams',    desc: 'OneDrive + SharePoint 경로' },
        { href: '/ko/meeting-transcription',       icon: 'video', title: '회의 허브', desc: '모든 플랫폼, 하나의 업로드' },
        { href: '/ko/webinar-transcription',       icon: 'monitor', title: '웨비나',  desc: 'Zoom 웨비나, Demio, ON24' },
      ]}

      faq={[
        {
          q: '어떤 Zoom 녹음 유형이 작동하나요?',
          a: '클라우드 녹음 MP4 (비디오), 클라우드 녹음 M4A (오디오 전용), 로컬 녹음 MP4. 채팅 로그가 필요한 경우 chat.txt 내보내기도 가능합니다. 하지만 우리는 채팅을 전사하지 않습니다.',
        },
        {
          q: 'Zoom Pro 이상이 필요하나요?',
          a: '아니요. 무료 계층 로컬 녹음을 포함하여 모든 Zoom 녹음이 작동합니다. Zoom 클라우드 녹음 자체는 Pro+가 필요하지만, 이미 파일이 있다면 Mictoo는 귀하의 Zoom 계층에 신경 쓰지 않습니다.',
        },
        {
          q: '내 클라우드 녹음 MP4가 60 MB를 초과합니다. 이제 어떻게 하나요?',
          a: '녹음에 오디오 전용 (M4A) 다운로드가 포함되어 있다면, 비디오 트랙을 업로드하지 않도록 그것을 사용하세요. 가용성 및 파일 크기는 녹음 설정 및 길이에 따라 다릅니다.',
        },
        {
          q: 'Zoom 오디오 전사를 사용할까요, Mictoo를 사용할까요?',
          a: 'Zoom 오디오 전사는 클라우드 녹음 및 전사가 귀하의 계정에서 활성화된 경우 편리합니다. Mictoo는 로컬 파일, 추가 내보내기 형식, 번역 또는 검토할 다른 전사본을 생성하는 데 유용합니다. 정확도는 녹음에 따라 다릅니다.',
        },
        {
          q: 'Mictoo는 Zoom 화자를 식별하나요?',
          a: '아니요. 현재 전사본은 각 줄의 타임스탬프가 포함된 연속 텍스트이며 자동 "화자 1 / 화자 2" 레이블이 없습니다.',
        },
        {
          q: '로컬 녹음은 어디에 저장되나요?',
          a: '기본적으로 Mac의 ~/Documents/Zoom/ 및 Windows의 %USERPROFILE%\\Documents\\Zoom\\에 저장됩니다. 각 회의는 MP4와 별도의 audio.m4a가 있는 자체 폴더를 가집니다.',
        },
        {
          q: '내 Zoom 녹음이 귀하의 서버에 저장되나요?',
          a: '아니요. 파일은 전사 제공업체로 스트리밍되고 한 번 처리된 후 메모리에서 삭제됩니다. 로그인하면 전사본만 지속됩니다.',
        },
      ]}

      ctaHeadline="Zoom 녹음을 깔끔한 텍스트로 변환하세요"
      ctaSubtitle="클라우드 MP4 또는 M4A, 로컬 녹음, 모든 Zoom 계층. 파일당 무료입니다."
      ctaButton="Zoom 녹음 업로드"

      relatedLinks={[
        { href: '/ko/meeting-transcription',       label: '회의 전사' },
        { href: '/ko/google-meet-transcription',   label: 'Google Meet 전사' },
        { href: '/ko/teams-meeting-transcription', label: 'Teams 전사' },
        { href: '/ko/webinar-transcription',       label: '웨비나 전사' },
        { href: '/ko/interview-transcription',     label: '인터뷰 전사' },
      ]}
    />
  )
}