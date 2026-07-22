import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/interview-transcription',
  'fr': 'https://mictoo.com/fr/interview-transcription',
  'de': 'https://mictoo.com/de/interview-transcription',
  'es': 'https://mictoo.com/es/interview-transcription',
  'ru': 'https://mictoo.com/ru/interview-transcription',
  'it': 'https://mictoo.com/it/interview-transcription',
  'pt': 'https://mictoo.com/pt/interview-transcription',
  'pl': 'https://mictoo.com/pl/interview-transcription',
  'ja': 'https://mictoo.com/ja/interview-transcription',
  'ko': 'https://mictoo.com/ko/interview-transcription',
  'x-default': 'https://mictoo.com/interview-transcription',
}

export const metadata = {
  title: '오디오 및 비디오를 위한 인터뷰 전사 | Mictoo',
  description:
    '인터뷰 녹음을 업로드하고 타임스탬프가 있는 텍스트, AI 요약 및 보고서, 연구 또는 검토를 위한 내보내기를 받으세요.',
  alternates: {
    canonical: 'https://mictoo.com/ko/interview-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: '무료 인터뷰 전사 도구 | Mictoo',
    description: 'AI를 이용한 무료 인터뷰 전사. 오디오 또는 비디오를 업로드하고 몇 분 안에 깔끔한 전사를 받으세요.',
    url: 'https://mictoo.com/ko/interview-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '무료 인터뷰 전사',
    description: '오디오 또는 비디오를 업로드하고 몇 분 안에 깔끔한 전사를 받으세요.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function KoInterviewTranscriptionPage() {
  return (
    <UseCaseLayout
      locale="ko"
      badge="저널리스트 · 연구자 · UX · 무료"
      h1First="인터뷰 전사"
      h1Second="저널리스트, 연구자 및 UX 팀을 위한 무료 도구"
      subtitle="어떤 녹음기나 회의 앱에서 1:1 또는 패널 인터뷰를 업로드하세요. AI 요약 및 기사, 논문 또는 연구 리포를 위한 내보내기가 포함된 깔끔한 타임스탬프 전사를 받으세요."
      currentHref="/ko/interview-transcription"

      platforms={[
        { name: 'Zoom',        iconKey: 'videoCameraFill', brandBg: '#2D8CFF', href: '/ko/zoom-transcription' },
        { name: 'Google Meet', iconKey: 'videoCameraFill', brandBg: '#00832D', href: '/ko/google-meet-transcription' },
        { name: 'MS Teams',    iconKey: 'videoCameraFill', brandBg: '#4B53BC', href: '/ko/teams-meeting-transcription' },
        { name: 'Riverside',   iconKey: 'waveMic',         brandBg: '#4B2AF7' },
        { name: 'Voice Memo',  iconKey: 'mic',             brandBg: '#F97316', href: '/ko/voice-memo-to-text' },
        { name: 'Phone call',  iconKey: 'phone',           brandBg: '#0EA5A4' },
      ]}

      howItWorksTitle="인터뷰 전사가 작동하는 방식"
      steps={[
        {
          icon: 'folder',
          title: '인터뷰 내보내기',
          desc: '어떤 녹음도 가능합니다. 음성 메모, Zoom 클라우드 녹음, Riverside 오디오 트랙, 전화 통화 내보내기.',
        },
        {
          icon: 'upload',
          title: '파일을 여기에 드롭하세요',
          desc: 'MP3, MP4, M4A, WAV, MOV 또는 60 MB까지의 일반 오디오 및 비디오 형식을 업로드하세요.',
        },
        {
          icon: 'editPen',
          title: '전사, 인용, 내보내기',
          desc: '타임스탬프가 있는 전사, AI 요약, TXT / SRT / VTT / DOCX 내보내기. 기사나 연구 논문을 위한 준비 완료.',
        },
      ]}

      exampleTitle="예시 인터뷰 전사"
      exampleFileName="researcher-interview.m4a"
      exampleDurationLabel="42:18"
      exampleLines={[
        { t: '0:00',  line: '시간을 내주셔서 감사합니다. 당신의 역할과 얼마나 오래 그 역할을 해왔는지 설명해 주시겠습니까?' },
        { t: '0:08',  line: '물론입니다. 저는 중간 규모의 핀테크에서 분석 팀을 이끌고 있으며, 이 역할을 한 지 2년 조금 넘었습니다.' },
        { t: '0:20',  line: '그 이전에는 대형 은행에서 고객 유지 및 생애 가치 모델링을 주로 했습니다.' },
        { t: '0:32',  line: '그래서 대형 은행에서 핀테크로의 전환은 주로 속도와 새로운 것을 시도할 자유에 관한 것이었습니다.' },
        { t: '0:44',  line: '그리고 도구가 많이 발전했습니다. 예전에는 일주일이 걸리던 일이 이제는 오후에 끝납니다.' },
        { t: '0:56',  line: '그런 종류의 변화의 예를 들어주실 수 있나요? 이전에는 시도하지 않았을 구체적인 무언가.' },
        { t: '1:04',  line: '가장 분명한 것은 실시간 코호트 실험입니다. 우리는 아침에 아이디어를 내고 그날 저녁에 의미 있는 데이터를 봅니다.' },
      ]}
      summaryPoints={[
        '핀테크의 분석 리드, 2년 이상 역할 수행.',
        '대형 은행에서의 이전 역할은 유지 모델링에 집중.',
        '핀테크 전환은 속도와 실험의 자유에 의해 주도됨.',
        '현대 도구로 실시간 코호트 실험 가능.',
      ]}
      actionItems={[
        '유지 모델링 비교에 대한 후속 조치',
        '실시간 코호트 실험 예시 요청',
        '이전 고용주 연락처 소개 요청',
      ]}

      whyTitle="인터뷰 전사를 위한 Mictoo의 이유"
      whyCards={[
        {
          icon: 'target',
          title: '이름 및 고유 명사 검토',
          desc: '타임스탬프를 사용하여 이름, 도시, 조직 및 전문 용어를 원본 인터뷰 녹음과 대조하세요.',
        },
        {
          icon: 'sparkles',
          title: 'AI 요약 및 인용 추출',
          desc: 'AI 요약은 인용 목록, 연구 메모 또는 기사 소개를 위한 훌륭한 초안입니다.',
        },
        {
          icon: 'lock',
          title: '명확한 처리 모델',
          desc: '녹음은 처리하기 위해 전사 제공업체에 전송되며 작업이 완료된 후 Mictoo에 보관되지 않습니다.',
        },
        {
          icon: 'globe',
          title: '다국어 작업을 위한 번역',
          desc: '스페인어, 독일어 또는 일본어로 진행된 인터뷰. 클릭 한 번으로 작업 언어로 번역하세요.',
        },
      ]}

      scenariosTitle="일반적인 인터뷰 시나리오"
      scenarios={[
        { icon: 'chat',      title: '저널리즘' },
        { icon: 'search',    title: 'UX 연구' },
        { icon: 'users',     title: '채용' },
        { icon: 'book',      title: '구술 역사' },
        { icon: 'briefcase', title: '법적 진술' },
        { icon: 'globe',     title: '다국어' },
      ]}

      tipsTitle="더 깔끔한 인터뷰 전사를 위한 팁"
      tips={[
        '대상에 가까운 라펠 또는 핸드헬드 마이크로 녹음하세요.',
        '긴 답변 사이에 잠시 멈추도록 요청하세요.',
        '비영어 또는 강한 억양의 경우 언어를 명시적으로 설정하세요.',
        '전사 후 이름 및 비정상적인 용어를 검토하세요.',
      ]}

      guidesTitle="올바른 녹음기 선택 가이드"
      guides={[
        { href: '/ko/zoom-transcription',        icon: 'video', title: 'Zoom 인터뷰',    desc: '클라우드 녹음 MP4 또는 M4A' },
        { href: '/ko/google-meet-transcription', icon: 'video', title: 'Meet 인터뷰',    desc: '드라이브 녹음 다운로드' },
        { href: '/ko/voice-memo-to-text',        icon: 'mic',   title: '아이폰 음성 메모', desc: '모든 M4A 음성 녹음' },
        { href: '/ko/podcast-transcription',     icon: 'headset', title: '팟캐스트 스타일',   desc: 'Riverside, Zencastr, Cleanfeed' },
      ]}

      faq={[
        {
          q: 'Mictoo는 인터뷰에 어떤 파일 형식을 허용하나요?',
          a: 'MP3, MP4, M4A, WAV, MOV, WEBM, FLAC, OGG, AAC 및 대부분의 다른 일반 오디오 및 비디오 형식. 비디오 파일은 서버 측에서 자동으로 분리됩니다.',
        },
        {
          q: 'Mictoo는 누가 말하는지 식별하나요?',
          a: '아니요. 현재 전사는 타임스탬프가 있는 연속 텍스트로 "인터뷰어 / 피인터뷰" 레이블이 자동으로 붙지 않습니다.',
        },
        {
          q: '인터뷰 전사는 무료인가요?',
          a: '네. 25 MB까지는 익명으로 무료이며, 60 MB는 로그인한 사용자에게 제공됩니다. 더 긴 인터뷰는 로그인한 사용자에게 자동으로 분할될 수 있습니다.',
        },
        {
          q: '전사를 게시하기 전에 이름을 수정할 수 있나요?',
          a: '네. 전사 후 편집 모드로 전환하여 어떤 단어 또는 줄도 편집할 수 있습니다. 편집된 버전을 저장하고 내보내세요.',
        },
        {
          q: '녹음이 귀하의 서버에 보관되나요?',
          a: '아니요. 오디오 스트림은 전사 제공업체로 전송되어 한 번 처리되고 삭제됩니다. 전사는 로그인한 경우에만 저장됩니다.',
        },
        {
          q: '인터뷰 전사를 번역할 수 있나요?',
          a: '네. 목표 언어를 선택하고 번역을 클릭하세요. 다국어 현장 연구나 다국어 보고서에 유용합니다.',
        },
        {
          q: '어떤 내보내기 형식이 제공되나요?',
          a: 'TXT, SRT, VTT, DOCX. 로그인한 사용자에게는 PDF 및 JSON도 제공됩니다. SRT 및 VTT의 타임스탬프는 원본 녹음과 정렬됩니다.',
        },
      ]}

      ctaHeadline="인터뷰를 게시 가능한 텍스트로 변환하세요"
      ctaSubtitle="녹음을 드롭하고 전사, 요약 및 기사나 연구 리포를 위한 내보내기를 받으세요."
      ctaButton="인터뷰 업로드"

      relatedLinks={[
        { href: '/ko/meeting-transcription',      label: '회의 전사' },
        { href: '/ko/podcast-transcription',      label: '팟캐스트 전사' },
        { href: '/ko/voice-memo-to-text',         label: '음성 메모를 텍스트로' },
        { href: '/ko/business-transcription',     label: '비즈니스 전사' },
        { href: '/ko/lecture-transcription',      label: '강의 전사' },
      ]}
    />
  )
}