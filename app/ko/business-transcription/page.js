import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/business-transcription',
  'fr': 'https://mictoo.com/fr/business-transcription',
  'de': 'https://mictoo.com/de/business-transcription',
  'es': 'https://mictoo.com/es/business-transcription',
  'ru': 'https://mictoo.com/ru/business-transcription',
  'it': 'https://mictoo.com/it/business-transcription',
  'pt': 'https://mictoo.com/pt/business-transcription',
  'pl': 'https://mictoo.com/pl/business-transcription',
  'ja': 'https://mictoo.com/ja/business-transcription',
  'ko': 'https://mictoo.com/ko/business-transcription',
  'x-default': 'https://mictoo.com/business-transcription',
}

export const metadata = {
  title: '비즈니스 회의 전사 및 AI 요약 | Mictoo',
  description:
    '승인된 내부 회의 녹음을 타임스탬프가 있는 전사본, AI 요약 및 내보낼 수 있는 요약 문서로 변환합니다.',
  alternates: {
    canonical: 'https://mictoo.com/ko/business-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: '비즈니스 전사: 내부 회의를 텍스트로 | Mictoo',
    description: 'IT 설정 없이 내부 회사 회의를 전사합니다.',
    url: 'https://mictoo.com/ko/business-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '비즈니스 전사',
    description: '창립자 1:1, 전체 회의, 임원 브리핑.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function KoBusinessTranscriptionPage() {
  return (
    <UseCaseLayout
      locale="ko"
      badge="창립자 · 임원 · 소규모 팀 · 무료"
      h1First="비즈니스 전사"
      h1Second="창립자 1:1, 전체 회의, 임원 브리핑"
      subtitle="승인된 내부 회의를 위한 실용적인 전사 도구입니다. 녹음을 업로드하고, 전사본과 AI 요약을 검토한 후, 팀을 위한 요약을 내보내세요."
      currentHref="/ko/business-transcription"

      platforms={[
        { name: 'Zoom',        iconKey: 'videoCameraFill', brandBg: '#2D8CFF', href: '/ko/zoom-transcription' },
        { name: 'MS Teams',    iconKey: 'videoCameraFill', brandBg: '#4B53BC', href: '/ko/teams-meeting-transcription' },
        { name: 'Google Meet', iconKey: 'videoCameraFill', brandBg: '#00832D', href: '/ko/google-meet-transcription' },
        { name: 'Webex',       iconKey: 'videoCameraFill', brandBg: '#0F1F35' },
        { name: 'BlueJeans',   iconKey: 'videoCameraFill', brandBg: '#005EB8' },
        { name: 'GoToMeeting', iconKey: 'videoCameraFill', brandBg: '#F68B1F' },
      ]}

      howItWorksTitle="비즈니스 전사가 작동하는 방식"
      steps={[
        {
          icon: 'folder',
          title: '녹음 내보내기',
          desc: 'Zoom, Teams, Meet, Webex 또는 귀사가 사용하는 어떤 것이든. MP4 또는 M4A 오디오 전용 모두 가능합니다.',
        },
        {
          icon: 'upload',
          title: '파일 여기로 드롭',
          desc: '귀사가 처리할 수 있도록 허용하는 녹음을 업로드하세요. 소프트웨어 설치나 디렉토리 통합이 필요하지 않습니다.',
        },
        {
          icon: 'editPen',
          title: '전사본, 요약, 작업 항목',
          desc: '타임스탬프가 있는 전사본, AI 요약, 요약 이메일을 위한 DOCX 내보내기 준비 완료.',
        },
      ]}

      exampleTitle="비즈니스 회의 전사 예시"
      exampleFileName="q3-strategy-session.mp4"
      exampleDurationLabel="58분 42초"
      exampleLines={[
        { t: '0:00',  line: '모두 시간 내주셔서 감사합니다. 이것은 우리의 Q3 전략 점검이며, 약 한 시간이 차단되어 있습니다.' },
        { t: '0:10',  line: '상위 업데이트로 시작하겠습니다. 수익은 계획보다 8% 앞서고 있으며, 주로 중형 시장 확장에서 발생하고 있습니다.' },
        { t: '0:22',  line: '새로운 기업 전략은 우리가 예상했던 것보다 느립니다. 두 건의 거래가 Q2에서 Q3로 미뤄졌습니다.' },
        { t: '0:35',  line: '우리는 중형 시장에 집중할지 아니면 이번 분기에 기업 준비를 더 강하게 추진할지 논의해야 합니다.' },
        { t: '0:48',  line: '제 생각은 중형 시장이 효과적이며, 아직 기업 세그먼트를 추구함으로써 팀을 방해해서는 안 된다는 것입니다.' },
        { t: '1:02',  line: '동의합니다. Q3 말까지 30개의 새로운 중형 시장 계정을 목표로 설정하고, Q4 계획에서 기업을 재검토합시다.' },
        { t: '1:14',  line: '마무리하기 전에 한 가지 더 주제입니다. 같은 분기의 엔지니어링 로드맵으로, 우리는 이러한 고객 약속과 연결됩니다.' },
      ]}
      summaryPoints={[
        '수익 8% 계획보다 앞서며, 중형 시장에 의해 추진됩니다.',
        '기업 전략이 미뤄지고 있습니다 (2건의 거래가 Q2에서 Q3로 이동).',
        '결정: 이번 분기에 중형 시장에 집중합니다.',
        '목표: Q3 말까지 30개의 새로운 중형 시장 계정.',
      ]}
      actionItems={[
        '30계정 중형 시장 목표 설정',
        'Q4 계획에서 기업 전략 재검토',
        '고객 약속에 맞춰 엔지니어링 로드맵 조정',
      ]}

      whyTitle="비즈니스 전사에 Mictoo를 선택하는 이유"
      whyCards={[
        {
          icon: 'lock',
          title: '소프트웨어 설치 없음',
          desc: '브라우저 워크플로우는 데스크탑 클라이언트나 디렉토리 통합이 필요하지 않습니다. 귀사의 정책이 여전히 적용됩니다.',
        },
        {
          icon: 'sparkles',
          title: '요약 이메일 준비 완료',
          desc: 'AI 요약은 몇 초 안에 요약 초안을 제공합니다. 이미 약속한 내용을 다듬고, 에스컬레이션이 필요한 내용을 유지하세요.',
        },
        {
          icon: 'shield',
          title: '녹음이 저장되지 않음',
          desc: '오디오 스트림은 전사 제공업체로 전송되며 처리 후 삭제됩니다. 전사본만 로그인한 계정에 남습니다.',
        },
        {
          icon: 'globe',
          title: '국제 팀을 위한 번역',
          desc: '영어로 회의하지만 요약은 독일 자회사로 보내야 하나요? 클릭 한 번으로 가능합니다.',
        },
      ]}

      scenariosTitle="일반적인 비즈니스 시나리오"
      scenarios={[
        { icon: 'briefcase', title: '임원 브리핑' },
        { icon: 'users',     title: '전체 회의' },
        { icon: 'chat',      title: '창립자 1:1' },
        { icon: 'target',    title: '전략 오프사이트' },
        { icon: 'search',    title: '이사회 업데이트' },
        { icon: 'headset',   title: '고객 에스컬레이션' },
      ]}

      tipsTitle="내부 녹음을 위한 팁"
      tips={[
        '플랫폼에서 제공하는 경우 오디오 전용 내보내기를 선호하세요.',
        '60 MB를 초과하는 회의 비디오 MP4의 경우, 먼저 ffmpeg로 오디오를 추출하세요.',
        '다국어 리더십 통화를 위해 자동 감지를 사용하세요.',
        '검색 가능한 아카이브를 구축하기 위해 전사본을 기록에 저장하세요.',
      ]}

      guidesTitle="올바른 플랫폼 선택 가이드"
      guides={[
        { href: '/ko/zoom-transcription',          icon: 'video', title: 'Zoom',        desc: '클라우드 녹음, M4A 오디오 전용' },
        { href: '/ko/teams-meeting-transcription', icon: 'video', title: 'MS Teams',    desc: 'OneDrive 또는 SharePoint 경로' },
        { href: '/ko/google-meet-transcription',   icon: 'video', title: 'Google Meet', desc: '드라이브 녹음, 무료 우회 방법' },
        { href: '/ko/meeting-transcription#tool',  icon: 'file',  title: '기타',       desc: 'Webex, BlueJeans, GoToMeeting' },
      ]}

      faq={[
        {
          q: '내 회사의 녹음이 귀사의 서버로 전송되나요?',
          a: '오디오 스트림은 전사 제공업체(Groq/Replicate/Deepgram/OpenAI 라우팅에 따라)로 전송되며, 한 번 처리되고 메모리에서 삭제됩니다. 우리는 오디오를 디스크에 기록하지 않습니다. 전사본만 남으며, 로그인하고 저장해야만 가능합니다.',
        },
        {
          q: '회사 녹음을 업로드하려면 승인이 필요합니까?',
          a: '이는 귀사의 정책과 녹음의 정보에 따라 다릅니다. Mictoo는 소프트웨어 설치를 요구하지 않지만, 외부 전사 제공업체에 회사 미디어를 전송하기 전에 필요한 승인을 받아야 합니다.',
        },
        {
          q: '규제 산업에 Mictoo를 사용할 수 있나요?',
          a: '귀하의 특정 준수 요구 사항을 확인하세요. 우리는 서명된 BAA 또는 SOC 2 보고서를 제공하지 않습니다. 엄격한 규제 환경에서는 완전히 자체 호스팅된 전사 도구를 사용하는 것이 좋습니다.',
        },
        {
          q: '요약 이메일을 위한 AI 요약을 받을 수 있나요?',
          a: '네. AI 요약은 전사본과 함께 자동으로 표시됩니다. 후속 이메일이나 Notion 문서의 훌륭한 초안입니다.',
        },
        {
          q: '회의가 60 MB를 초과하면 어떻게 하나요?',
          a: '로그인하여 자동 분할을 활성화하세요 (약 3시간까지). 또는 ffmpeg -i meeting.mp4 -vn -ac 1 -ar 16000 audio.m4a로 비디오에서 오디오를 추출하면 파일 크기가 5-15배 줄어듭니다.',
        },
        {
          q: '국제 팀을 위해 전사본을 번역할 수 있나요?',
          a: '네. 전사 후 목표 언어를 선택하고 번역을 클릭하세요. 다국어 자회사에 유용합니다.',
        },
        {
          q: '요약 이메일에 어떤 내보내기 형식이 적합합니까?',
          a: '이메일 본문에 붙여넣기 위한 TXT, 적절한 첨부 파일을 위한 DOCX, 아카이브를 위한 PDF(로그인한 경우). 요약은 별도로 제공됩니다.',
        },
      ]}

      ctaHeadline="내부 회의를 요약 문서로 변환하세요"
      ctaSubtitle="창립자 1:1, 전체 회의 및 임원 브리핑. 승인된 미디어를 업로드하여 전사본과 요약을 받으세요."
      ctaButton="비즈니스 회의 업로드"

      relatedLinks={[
        { href: '/ko/meeting-transcription',       label: '회의 전사' },
        { href: '/ko/zoom-transcription',          label: '줌 전사' },
        { href: '/ko/teams-meeting-transcription', label: '팀 전사' },
        { href: '/ko/google-meet-transcription',   label: '구글 미트 전사' },
        { href: '/ko/interview-transcription',     label: '인터뷰 전사' },
      ]}
    />
  )
}