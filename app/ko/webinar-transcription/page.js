import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/webinar-transcription',
  'fr': 'https://mictoo.com/fr/webinar-transcription',
  'de': 'https://mictoo.com/de/webinar-transcription',
  'es': 'https://mictoo.com/es/webinar-transcription',
  'ru': 'https://mictoo.com/ru/webinar-transcription',
  'it': 'https://mictoo.com/it/webinar-transcription',
  'pt': 'https://mictoo.com/pt/webinar-transcription',
  'pl': 'https://mictoo.com/pl/webinar-transcription',
  'ja': 'https://mictoo.com/ja/webinar-transcription',
  'ko': 'https://mictoo.com/ko/webinar-transcription',
  'x-default': 'https://mictoo.com/webinar-transcription',
}

export const metadata = {
  title: '웨비나 전사 및 요약과 캡션 | Mictoo',
  description:
    '웨비나 녹화를 업로드하고 타임스탬프가 있는 텍스트, AI 요약 및 재생을 위한 SRT/VTT 캡션을 받으세요.',
  alternates: {
    canonical: 'https://mictoo.com/ko/webinar-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: '웨비나 전사: 무료 | Mictoo',
    description: '웨비나 녹화를 업로드하고 깔끔한 전사를 받으세요.',
    url: 'https://mictoo.com/ko/webinar-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '웨비나 전사',
    description: '모든 웨비나 플랫폼에 대한 무료 전사.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function KoWebinarTranscriptionPage() {
  return (
    <UseCaseLayout
      locale="ko"
      badge="웨비나 · 장기 형식 · 무료"
      h1First="웨비나 전사"
      h1Second="모든 웨비나 녹화에 대한 무료 전사"
      subtitle="Zoom 웨비나, StreamYard, Demio, ON24, GoToWebinar 또는 Restream에서 업로드하세요. 전체 전사, AI 요약 및 주문형 재생 페이지에 적합한 캡션을 받으세요."
      currentHref="/ko/webinar-transcription"

      platforms={[
        { name: 'Zoom Webinar', iconKey: 'broadcast',       brandBg: '#2D8CFF', href: '/ko/zoom-transcription' },
        { name: 'StreamYard',   iconKey: 'broadcast',       brandBg: '#6B21A8' },
        { name: 'Restream',     iconKey: 'broadcast',       brandBg: '#EC1E62' },
        { name: 'ON24',         iconKey: 'videoCameraFill', brandBg: '#3B82F6' },
        { name: 'Demio',        iconKey: 'videoCameraFill', brandBg: '#F97316' },
        { name: 'Livestorm',    iconKey: 'videoCameraFill', brandBg: '#DA1F5C' },
      ]}

      howItWorksTitle="웨비나 전사가 작동하는 방식"
      steps={[
        {
          icon: 'folder',
          title: '웨비나 녹화 내보내기',
          desc: '대부분의 플랫폼은 이벤트 후 MP4 다운로드를 제공합니다. 일부는 오디오 전용 M4A도 제공합니다.',
        },
        {
          icon: 'upload',
          title: '파일을 여기로 드롭하세요',
          desc: '긴 웨비나(60분 이상)는 로그인하여 자동 분할의 혜택을 받을 수 있습니다. 익명으로 최대 25 MB, 로그인 시 60 MB까지 무료입니다.',
        },
        {
          icon: 'editPen',
          title: '전사, 요약, 캡션',
          desc: '재생 페이지를 위한 타임스탬프가 있는 전사, 블로그 요약으로서의 AI 요약, 주문형 비디오의 캡션을 위한 SRT.',
        },
      ]}

      exampleTitle="예시 웨비나 전사"
      exampleFileName="product-launch-webinar.mp4"
      exampleDurationLabel="1시간 4분 22초"
      exampleLines={[
        { t: '0:00',  line: '여러분, 환영합니다. 참여해 주셔서 감사합니다. 제 이름은 Sam이며 회사의 제품 마케팅을 담당하고 있습니다.' },
        { t: '0:12',  line: '오늘 우리는 플랫폼의 버전 5를 공식 출시하고 있으며, 새로운 기능을 안내해 드리겠습니다.' },
        { t: '0:25',  line: '세 가지 주요 변경 사항: 재구성된 보고서, 상위 10개 CRM과의 네이티브 통합, 새로운 가격 모델.' },
        { t: '0:40',  line: '보고서부터 시작하겠습니다. 이는 여러분이 2년 동안 가장 많이 질문한 변경 사항입니다.' },
        { t: '0:52',  line: '이전 보고서는 느리고, 대용량 데이터 세트에서 오류가 발생하며, 사용자 정의하기 어려웠습니다. 이 세 가지 모두 수정되었습니다.' },
        { t: '1:07',  line: '여기 새로운 보고서 작성기의 실시간 데모가 있습니다. 클릭하는 동안 미리보기가 얼마나 빠르게 업데이트되는지 주목하세요.' },
        { t: '1:22',  line: '모든 필드는 드래그 앤 드롭이 가능하며, 필터는 쌓을 수 있고, 모든 보고서를 공유 템플릿으로 저장할 수 있습니다.' },
      ]}
      summaryPoints={[
        '버전 5 출시 및 3가지 주요 변경 사항.',
        '재구성된 보고서(속도, 데이터 세트 크기, 사용자 정의 수정).',
        '상위 10개 CRM과의 네이티브 통합.',
        '새로운 가격 모델.',
      ]}
      actionItems={[
        '전사에서 블로그 요약 초안 작성',
        '소셜 미디어용 데모 클립 편집',
        '주문형으로 캡션이 있는 재생 게시',
      ]}

      whyTitle="웨비나 전사에 Mictoo를 선택하는 이유"
      whyCards={[
        {
          icon: 'clip',
          title: '재생을 위한 SRT 캡션',
          desc: '타임스탬프가 원본 비디오와 일치합니다. SRT를 주문형 재생 플레이어 또는 YouTube 업로드에 드롭하세요.',
        },
        {
          icon: 'sparkles',
          title: '블로그 요약을 위한 AI 요약',
          desc: '60분 웨비나를 200단어 요약으로 변환합니다. 후속 이메일이나 블로그 게시물의 훌륭한 초안입니다.',
        },
        {
          icon: 'search',
          title: '랜딩 페이지에서 검색 가능한 전사',
          desc: '주문형 랜딩 페이지에 전사를 게시하세요. 참석자들은 스킴하고, SEO는 상승하며, 아무도 60분을 시청할 필요가 없습니다.',
        },
        {
          icon: 'globe',
          title: '국제 참석자를 위한 번역',
          desc: '후속 이메일 및 비영어 주문형 재생 페이지를 위해 50개 이상의 언어로 원클릭 번역.',
        },
      ]}

      scenariosTitle="일반적인 웨비나 시나리오"
      scenarios={[
        { icon: 'broadcast', title: '제품 출시' },
        { icon: 'book',      title: '교육 / 아카데미' },
        { icon: 'briefcase', title: '영업 지원' },
        { icon: 'target',    title: '고객 교육' },
        { icon: 'users',     title: '분석가 브리핑' },
        { icon: 'globe',     title: '다국어 이벤트' },
      ]}

      tipsTitle="웨비나 녹화를 위한 팁"
      tips={[
        '플랫폼에서 제공하는 경우 오디오 전용 내보내기를 선호하세요.',
        '60분 이상의 웨비나의 경우, 3시간까지 자동 분할을 위해 로그인하세요.',
        '파일에 호스트 이름을 포함시켜 전사 헤더가 맥락을 유지하도록 하세요.',
        '소셜 클립을 위해 전사에서 주요 인용을 추출하세요.',
      ]}

      guidesTitle="관련 도구"
      guides={[
        { href: '/ko/zoom-transcription',        icon: 'video', title: 'Zoom 웨비나',      desc: '클라우드 녹화 MP4 / M4A' },
        { href: '/ko/free-srt-generator',        icon: 'file',  title: 'SRT 생성기',     desc: '주문형 비디오 캡션' },
        { href: '/ko/podcast-transcription',     icon: 'headset', title: '팟캐스트',         desc: '웨비나 오디오 재사용' },
        { href: '/ko/timestamped-transcription', icon: 'file',  title: '타임스탬프',       desc: '독자 친화적인 내보내기' },
      ]}

      faq={[
        {
          q: 'Mictoo는 어떤 웨비나 플랫폼과 호환되나요?',
          a: '모든 플랫폼과 호환됩니다. 플랫폼에 관계없이 모든 오디오 또는 비디오 파일을 수락합니다. Zoom 웨비나, StreamYard, Demio, Livestorm, ON24, GoToWebinar, Restream, Riverside Studio 등입니다.',
        },
        {
          q: '내 웨비나 녹화가 60MB를 초과합니다. 어떻게 하나요?',
          a: '로그인하여 자동 분할을 사용하세요(약 3시간까지). 또는 플랫폼에서 오디오 전용으로 내보내거나 오디오를 추출하세요: ffmpeg -i webinar.mp4 -vn -ac 1 -ar 16000 audio.m4a.',
        },
        {
          q: '주문형 재생 페이지에 전사를 게시할 수 있나요?',
          a: '네. 전사를 주문형 랜딩 페이지 HTML에 복사하세요. 검색 가능한 콘텐츠를 추가하고, SEO를 개선하며, 시청할 수 없는 참석자에게 스킴할 수 있는 방법을 제공합니다.',
        },
        {
          q: '녹화된 웨비나 비디오에 대한 캡션을 받을 수 있나요?',
          a: '네. 전사 후 SRT 또는 VTT를 다운로드하세요. 두 가지 모두 YouTube, Vimeo, Wistia, Descript 및 모든 최신 비디오 플레이어와 호환됩니다.',
        },
        {
          q: 'Mictoo는 발표자와 Q&A 스피커를 구분하나요?',
          a: '아니요. 현재 전사는 각 줄에 타임스탬프가 있는 연속 텍스트이며 자동 스피커 레이블이 없습니다.',
        },
        {
          q: '웨비나 전사를 번역할 수 있나요?',
          a: '네. 목표 언어를 선택하고 번역을 클릭하세요. 국제 참석자나 비영어 주문형 재생 페이지에 유용합니다.',
        },
        {
          q: '웨비나 녹화는 귀하의 서버에 보관되나요?',
          a: '아니요. 파일은 전사 제공업체로 스트리밍되고, 한 번 처리된 후 삭제됩니다. 로그인한 계정에서는 전사만 유지됩니다.',
        },
      ]}

      ctaHeadline="웨비나를 재생 준비가 된 자산으로 전환하세요"
      ctaSubtitle="전체 전사, SRT 캡션, AI 요약 및 검색 가능한 랜딩 페이지 복사본."
      ctaButton="웨비나 녹화 업로드"

      relatedLinks={[
        { href: '/ko/meeting-transcription',   label: '회의 전사' },
        { href: '/ko/zoom-transcription',      label: 'Zoom 전사' },
        { href: '/ko/podcast-transcription',   label: '팟캐스트 전사' },
        { href: '/ko/lecture-transcription',   label: '강의 전사' },
        { href: '/ko/free-srt-generator',      label: '무료 SRT 생성기' },
      ]}
    />
  )
}