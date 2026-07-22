import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/youtube-to-text',
  'fr': 'https://mictoo.com/fr/youtube-to-text',
  'de': 'https://mictoo.com/de/youtube-to-text',
  'es': 'https://mictoo.com/es/youtube-to-text',
  'ru': 'https://mictoo.com/ru/youtube-to-text',
  'it': 'https://mictoo.com/it/youtube-to-text',
  'pt': 'https://mictoo.com/pt/youtube-to-text',
  'pl': 'https://mictoo.com/pl/youtube-to-text',
  'ja': 'https://mictoo.com/ja/youtube-to-text',
  'ko': 'https://mictoo.com/ko/youtube-to-text',
  'x-default': 'https://mictoo.com/youtube-to-text',
}

export const metadata = {
  title: 'YouTube를 텍스트로: 전사, 요약 및 SRT | Mictoo',
  description:
    'YouTube URL을 붙여넣어 사용 가능한 자막을 사용하거나, 오디오를 업로드하여 타임스탬프, 요약 및 SRT 내보내기가 포함된 새로운 전사를 생성하세요.',
  alternates: {
    canonical: 'https://mictoo.com/ko/youtube-to-text',
    languages: LANGS,
  },
  openGraph: {
    title: 'YouTube를 텍스트로: 무료 YouTube 비디오 전사 | Mictoo',
    description: 'YouTube URL을 붙여넣고, 타임스탬프가 있는 깔끔한 전사, 요약 및 SRT 자막을 받으세요.',
    url: 'https://mictoo.com/ko/youtube-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YouTube를 텍스트로: 무료 YouTube 전사',
    description: 'YouTube URL을 붙여넣거나 오디오를 업로드하여 전사를 받으세요.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function KoYouTubeToTextPage() {
  return (
    <UseCaseLayout
      locale="ko"
      badge="YouTube URL 또는 업로드 · 무료 · 가입 필요 없음"
      h1First="YouTube를 텍스트로"
      h1Second="URL을 붙여넣고, 깔끔한 전사를 받으세요"
      subtitle="사용 가능한 자막을 사용하려면 YouTube 링크를 붙여넣거나, 오디오를 업로드하여 새로운 Whisper 전사를 생성하세요. 텍스트를 검토하고, 요약을 생성하며, SRT 자막을 내보내세요."
      currentHref="/ko/youtube-to-text"
      enableYouTubeUrl

      platforms={[
        { name: 'YouTube',      iconKey: 'videoCameraFill', brandBg: '#FF0000' },
        { name: 'YouTube Live', iconKey: 'broadcast',       brandBg: '#B91C1C' },
        { name: 'YT Shorts',    iconKey: 'videoCameraFill', brandBg: '#DC2626' },
        { name: 'YT Music',     iconKey: 'soundwave',       brandBg: '#7F1D1D' },
        { name: 'YT Premium',   iconKey: 'videoCameraFill', brandBg: '#0F172A' },
        { name: 'Video hub',    iconKey: 'videoCameraFill', brandBg: '#2D8CFF', href: '/ko/transcribe-video-to-text' },
      ]}

      howItWorksTitle="YouTube 전사가 작동하는 방식"
      steps={[
        {
          icon: 'folder',
          title: 'URL을 붙여넣거나 오디오 업로드',
          desc: '빠른 경로: YouTube 링크를 붙여넣으면 기존 자막을 가져옵니다. Whisper 경로: 오디오를 업로드하여 새로운 전사를 생성합니다.',
        },
        {
          icon: 'upload',
          title: '자막 또는 새로운 전사',
          desc: 'URL 경로는 사용 가능한 자막을 반환합니다. 업로드 경로는 Whisper large-v3를 실행하며, 처리 시간은 미디어 길이와 크기에 따라 다릅니다.',
        },
        {
          icon: 'editPen',
          title: '요약, SRT, 번역',
          desc: '전사와 함께 AI 요약이 제공됩니다. 비디오용 SRT를 다운로드하고, 50개 이상의 언어로 번역하며, DOCX 또는 PDF로 내보낼 수 있습니다.',
        },
      ]}

      exampleTitle="예시 YouTube 전사"
      exampleFileName="youtube-video.mp4"
      exampleDurationLabel="12:34"
      exampleLines={[
        { t: '0:00',  line: '채널에 다시 오신 것을 환영합니다. 오늘은 2026년 제품 분석의 세 가지 가장 큰 변화에 대해 살펴보겠습니다.' },
        { t: '0:12',  line: '첫 번째 변화, 세션 재생은 이제 기본 사항입니다. 모든 진지한 도구는 기본 계층에서 이를 제공합니다.' },
        { t: '0:24',  line: '두 번째 변화, 맞춤형 SQL 대시보드에서 자연어 쿼리로의 전환이 빠르게 진행되고 있습니다.' },
        { t: '0:37',  line: '세 번째 변화, 창고 네이티브 도구가 구 이벤트 기반 분석 스택을 대체하고 있습니다.' },
        { t: '0:50',  line: '각 변화가 올해 평가해야 할 도구에 실제로 어떤 의미가 있는지 설명하겠습니다.' },
        { t: '1:02',  line: '세션 재생이 먼저입니다. 현재 도구가 이를 위해 추가 요금을 부과한다면, 다른 도구를 찾아보라는 신호입니다.' },
        { t: '1:14',  line: '현대 도구는 이벤트, 퍼널 및 집단과 함께 재생을 하나의 제품으로 묶어 제공합니다. 유료 추가 기능이 아닙니다.' },
      ]}
      summaryPoints={[
        '2026년 제품 분석의 3가지 가장 큰 변화.',
        '세션 재생은 이제 모든 진지한 도구에서 기본 사항입니다.',
        'SQL 대시보드에서 자연어 쿼리로의 전환.',
        '창고 네이티브 도구가 이벤트 기반 스택을 대체합니다.',
      ]}
      actionItems={[
        '현재 도구에서 번들 재생 평가',
        '이번 분기에 1개의 창고 네이티브 분석 도구 사용해보기',
        '3가지 변화에 대한 블로그 요약 초안 작성',
      ]}

      whyTitle="YouTube 전사에 Mictoo를 선택해야 하는 이유"
      whyCards={[
        {
          icon: 'target',
          title: '올바른 전사 경로 선택',
          desc: '속도를 위해 기존 자막을 사용하거나, 이름, 구두점 및 전문 용어를 검토할 새로운 전사를 원할 때 오디오를 업로드하세요.',
        },
        {
          icon: 'clip',
          title: '비디오 설명을 위한 SRT',
          desc: 'SRT를 다운로드하고 YouTube Studio에 재업로드하여 편집된 자막을 사용하거나, 작업 흐름의 다른 곳에서 사용하세요.',
        },
        {
          icon: 'sparkles',
          title: '에피소드 노트를 위한 AI 요약',
          desc: '비디오 설명, 블로그 요약 및 챕터 제목을 위한 견고한 첫 초안. 60분 팟캐스트를 200단어로 변환하세요.',
        },
        {
          icon: 'globe',
          title: '50개 이상의 언어로 자막 번역',
          desc: '국제 청중이신가요? 전사를 번역한 다음, 번역된 SRT를 비디오에 재업로드하세요.',
        },
      ]}

      scenariosTitle="일반적인 YouTube 시나리오"
      scenarios={[
        { icon: 'search',    title: '비디오 조사' },
        { icon: 'editPen',   title: '블로그 요약' },
        { icon: 'clip',      title: 'SRT 자막' },
        { icon: 'chat',      title: '인용 추출' },
        { icon: 'globe',     title: '자막 번역' },
        { icon: 'headset',   title: 'YouTube에서 팟캐스트' },
      ]}

      tipsTitle="YouTube 전사를 위한 팁"
      tips={[
        '비디오에 이미 자막이 있는 경우 URL이 가장 빠른 경로입니다.',
        '기술적이거나 비영어 비디오의 경우, 오디오 업로드 경로를 선호하세요.',
        '매우 긴 스트림: 오디오를 다운로드하고 업로드 전에 분할하세요.',
        '자신의 비디오의 경우, 최상의 정확성을 위해 원본 오디오를 업로드하세요.',
      ]}

      guidesTitle="관련 도구"
      guides={[
        { href: '/ko/transcribe-video-to-text',      icon: 'video', title: '비디오를 텍스트로',       desc: '비-YouTube MP4, MOV, WebM' },
        { href: '/ko/transcribe-audio-to-text',      icon: 'file',  title: '오디오를 텍스트로',       desc: '모든 오디오 형식' },
        { href: '/ko/free-srt-generator',            icon: 'file',  title: 'SRT 생성기',       desc: '자막 중심 내보내기' },
        { href: '/ko/how-to-download-youtube-video', icon: 'video', title: 'YouTube에서 다운로드',    desc: '가이드: 오디오 가져오기' },
      ]}

      faq={[
        {
          q: 'YouTube URL을 붙여넣기만 하면 되나요?',
          a: '네. 비디오에 자막이 있는 경우(제작자가 업로드한 자막 또는 자동 생성된 자막), 몇 초 안에 가져옵니다. 자막이 없는 경우, 전체 Whisper 전사를 위해 오디오 파일을 업로드하세요.',
        },
        {
          q: '업로드 경로는 YouTube 자막과 어떻게 다르나요?',
          a: 'URL 경로는 비디오에 이미 사용 가능한 자막을 반환합니다. 업로드 경로는 오디오에서 별도의 Whisper 전사를 생성합니다. 두 버전 모두 오류가 포함될 수 있으므로, 게시하기 전에 이름, 숫자 및 타이밍을 검토하세요.',
        },
        {
          q: 'YouTube 비디오에서 오디오를 어떻게 추출하나요?',
          a: '원하는 브라우저 도구 또는 데스크탑 추출기를 사용한 다음, MP3 또는 M4A를 업로드하세요. 저작권 문제로 다운로드 도구를 호스팅하지 않지만, 일반적인 옵션에 대한 가이드 "YouTube 비디오 다운로드 방법"을 참조하세요.',
        },
        {
          q: 'Mictoo는 비영어 YouTube 비디오를 전사하나요?',
          a: '네. Whisper large-v3는 50개 이상의 언어를 지원하며 자동 감지가 가능합니다. 짧은 클립이나 특이한 억양의 경우, 드롭다운에서 언어를 명시적으로 설정하세요.',
        },
        {
          q: '비디오의 AI 요약을 받을 수 있나요?',
          a: '네. AI 요약은 전사와 함께 자동으로 표시됩니다. 비디오 설명, 블로그 요약 또는 에피소드 노트를 위한 견고한 첫 초안입니다.',
        },
        {
          q: 'SRT를 다운로드하여 비디오에 자막을 추가할 수 있나요?',
          a: '네. 전사 후 SRT 또는 VTT를 다운로드하세요. 두 형식 모두 YouTube Studio, Premiere, DaVinci, Final Cut, CapCut 및 대부분의 최신 플레이어에서 작동합니다.',
        },
        {
          q: 'YouTube 전사를 번역할 수 있나요?',
          a: '네. 목표 언어를 선택하고 번역을 클릭하세요. 국제 청중이나 비영어 재생 페이지에 유용합니다.',
        },
        {
          q: '내 YouTube 데이터가 귀하의 서버에 보관되나요?',
          a: '아니요. 가져온 자막과 업로드된 오디오는 한 번 처리되고 삭제됩니다. 전사만이 지속되며, 로그인하여 기록에 저장하면 가능합니다.',
        },
      ]}

      ctaHeadline="모든 YouTube 비디오를 텍스트로 변환하세요"
      ctaSubtitle="빠른 경로를 위해 URL을 붙여넣거나, 전체 Whisper 경로를 위해 오디오를 업로드하세요. 비디오당 무료입니다."
      ctaButton="YouTube URL을 붙여넣거나 업로드하세요"

      relatedLinks={[
        { href: '/ko/transcribe-video-to-text', label: '비디오를 텍스트로' },
        { href: '/ko/podcast-transcription',    label: '팟캐스트 전사' },
        { href: '/ko/lecture-transcription',    label: '강의 전사' },
        { href: '/ko/free-srt-generator',       label: '무료 SRT 생성기' },
        { href: '/ko/webinar-transcription',    label: '웨비나 전사' },
      ]}
    />
  )
}