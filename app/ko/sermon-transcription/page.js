import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/sermon-transcription',
  'fr': 'https://mictoo.com/fr/sermon-transcription',
  'de': 'https://mictoo.com/de/sermon-transcription',
  'es': 'https://mictoo.com/es/sermon-transcription',
  'ru': 'https://mictoo.com/ru/sermon-transcription',
  'it': 'https://mictoo.com/it/sermon-transcription',
  'pt': 'https://mictoo.com/pt/sermon-transcription',
  'pl': 'https://mictoo.com/pl/sermon-transcription',
  'ja': 'https://mictoo.com/ja/sermon-transcription',
  'ko': 'https://mictoo.com/ko/sermon-transcription',
  'x-default': 'https://mictoo.com/sermon-transcription',
}

export const metadata = {
  title: '예배 및 학습을 위한 설교 전사 | Mictoo',
  description:
    '설교 또는 예배 녹음을 업로드하고 검색 가능한 텍스트, 타임스탬프, AI 요약 및 파일 내보내기를 받으세요.',
  alternates: {
    canonical: 'https://mictoo.com/ko/sermon-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: '설교 전사: 무료 | Mictoo',
    description: '서비스 녹음을 업로드하고 깔끔한 전사를 받으세요.',
    url: 'https://mictoo.com/ko/sermon-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '설교 전사',
    description: '교회 및 학습을 위한 무료 전사.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function KoSermonTranscriptionPage() {
  return (
    <UseCaseLayout
      locale="ko"
      badge="교회 · 목사 · 학습 · 무료"
      h1First="설교 전사"
      h1Second="예배 및 학습을 위한 무료 전사"
      subtitle="일요일 예배 녹음, 주중 강의 또는 성경 공부 세션을 드롭하세요. 교회 웹사이트, 학습 노트 및 팟캐스트 에피소드 노트를 위한 타임스탬프가 포함된 깔끔한 전사를 받으세요."
      currentHref="/ko/sermon-transcription"

      platforms={[
        { name: 'SermonAudio',   iconKey: 'broadcast', brandBg: '#B91C1C' },
        { name: 'ProPresenter',  iconKey: 'monitor',   brandBg: '#0EA5E9' },
        { name: 'YouTube Live',  iconKey: 'broadcast', brandBg: '#FF0000' },
        { name: 'Facebook Live', iconKey: 'broadcast', brandBg: '#1877F2' },
        { name: 'Zoom',          iconKey: 'videoCameraFill', brandBg: '#2D8CFF', href: '/ko/zoom-transcription' },
        { name: 'Church stream', iconKey: 'broadcast', brandBg: '#6B21A8' },
      ]}

      howItWorksTitle="설교 전사가 작동하는 방식"
      steps={[
        {
          icon: 'folder',
          title: '서비스 녹음 내보내기',
          desc: '일요일 라이브 스트림 MP4, 성전 사운드 보드 WAV 또는 이미 게시한 팟캐스트 MP3.',
        },
        {
          icon: 'upload',
          title: '파일을 여기에 드롭하세요',
          desc: 'MP3, MP4, WAV, M4A 모두 작동합니다. 긴 서비스는 로그인하여 자동 분할의 혜택을 받을 수 있습니다.',
        },
        {
          icon: 'editPen',
          title: '웹사이트용 전사',
          desc: '교회 웹사이트, 학습 노트, 팟캐스트 설명 및 검색 가능한 아카이브를 위한 깔끔한 텍스트.',
        },
      ]}

      exampleTitle="예시 설교 전사"
      exampleFileName="sunday-service-jan-14.mp3"
      exampleDurationLabel="38분 56초"
      exampleLines={[
        { t: '0:00',  line: '안녕하세요 교회 여러분. 마태복음 5장 3절로 함께 가시기 바랍니다.' },
        { t: '0:12',  line: '오늘 아침 우리는 예수님이 부르신 복된 삶, 팔복에 대한 새로운 시리즈를 시작합니다.' },
        { t: '0:24',  line: '영혼이 가난한 자는 복이 있나니, 천국은 그들의 것임이요. 이번 주의 본문입니다.' },
        { t: '0:38',  line: '예수님이 여기서 사용하는 복이란 단어는 얕고 상황적인 의미의 행복을 의미하지 않습니다.' },
        { t: '0:51',  line: '하나님과의 관계 때문에 깊고 근본적으로 만족한 상태를 의미합니다, 상황에 관계없이.' },
        { t: '1:04',  line: '영혼이 가난하다는 것은 물질적 가난에 관한 것이 아닙니다. 하나님에 대한 의존의 자세입니다.' },
        { t: '1:18',  line: '당신이 무엇을 쌓든, 무엇을 성취하든, 궁극적으로는 공로가 아닌 은혜에 의존한다는 것을 아는 것입니다.' },
      ]}
      summaryPoints={[
        '팔복(마태복음 5)에 대한 새로운 시리즈.',
        '초점: "영혼이 가난한 자는 복이 있나니."',
        '복 = 하나님과의 관계를 통한 깊은 만족.',
        '영혼이 가난함 = 물질적 가난이 아닌 의존의 자세.',
      ]}
      actionItems={[
        '교회 웹사이트에 전사 게시',
        '소셜 미디어용 60초 클립 제작',
        '주간 학습 가이드에 포함',
      ]}

      whyTitle="설교 전사를 위한 Mictoo의 이유"
      whyCards={[
        {
          icon: 'search',
          title: '검색 가능한 설교 아카이브',
          desc: '교회 사이트에 전사를 게시하세요. 회중은 주제나 구절로 가르침을 찾을 수 있습니다, 몇 달 또는 몇 년 후에도.',
        },
        {
          icon: 'sparkles',
          title: '학습 노트 및 소그룹 가이드',
          desc: 'AI 요약은 주간 학습 가이드 또는 소그룹 토론 질문의 시작점입니다.',
        },
        {
          icon: 'clip',
          title: '라이브 스트림 재생을 위한 자막',
          desc: 'YouTube 또는 Facebook 비디오 버전을 위한 SRT. 청각 장애인을 위한 접근성.',
        },
        {
          icon: 'globe',
          title: '다국어 회중을 위한 번역',
          desc: '영어로 된 설교지만 회중의 일부는 스페인어 또는 한국어를 선호합니다. 원클릭 번역.',
        },
      ]}

      scenariosTitle="일반적인 설교 시나리오"
      scenarios={[
        { icon: 'church',    title: '일요일 예배' },
        { icon: 'book',      title: '성경 공부' },
        { icon: 'chat',      title: '소그룹' },
        { icon: 'sparkles',  title: '묵상' },
        { icon: 'globe',     title: '선교' },
        { icon: 'headset',   title: '팟캐스트' },
      ]}

      tipsTitle="설교 녹음을 위한 팁"
      tips={[
        '사운드 보드 WAV 또는 M4A는 룸 마이크보다 더 깨끗한 입력을 제공합니다.',
        '60 MB 이상의 긴 서비스의 경우, 로그인하여 자동 분할을 사용하세요.',
        '성경 용어가 많은 회중의 경우, 주요 단어를 검토하세요.',
        '아카이브 정리를 위해 파일 이름에 설교 제목을 포함하세요.',
      ]}

      guidesTitle="관련 도구"
      guides={[
        { href: '/ko/transcribe-mp3-to-text',    icon: 'file',  title: 'MP3 형식',        desc: '팟캐스트 친화적인 내보내기' },
        { href: '/ko/wav-to-text',               icon: 'file',  title: 'WAV 형식',        desc: '사운드 보드 녹음' },
        { href: '/ko/lecture-transcription',     icon: 'book',  title: '강의 / 학습',   desc: '가르침이 많은 콘텐츠' },
        { href: '/ko/free-srt-generator',        icon: 'file',  title: 'SRT 자막',      desc: '라이브 스트림 재생' },
      ]}

      faq={[
        {
          q: '일요일 라이브 스트림 녹음을 전사할 수 있나요?',
          a: '네. YouTube Live, Facebook Live 또는 교회 스트림 제공자로부터 MP4를 다운로드하고 여기에 드롭하세요. 비디오는 서버 측에서 자동으로 분리됩니다.',
        },
        {
          q: 'Mictoo는 성경 참조 및 신학 용어를 정확하게 처리하나요?',
          a: 'Whisper large-v3는 일반적인 영어 성경 및 신학 용어를 잘 처리합니다. 비정상적인 고유 명사(구식 음역, 특정 번역 용어)에 대해서는 전사 후 검토하세요.',
        },
        {
          q: 'Mictoo는 교회를 위해 무료인가요?',
          a: '네. 크기 제한까지 파일당 무료입니다. 교회 전용 계층이나 라이센스는 없습니다.',
        },
        {
          q: '제 서비스 녹음이 60 MB를 초과합니다. 이제 어떻게 하나요?',
          a: '로그인하여 자동 분할을 사용하세요 (약 3시간까지). 또는 다운샘플링: ffmpeg -i service.mp3 -b:a 64k -ac 1 out.mp3. 동일한 정확도, 3-5배 작습니다.',
        },
        {
          q: '라이브 스트림 재생을 위한 자막을 받을 수 있나요?',
          a: '네. 전사 후 SRT 또는 VTT를 다운로드하세요. 타임스탬프는 YouTube, Facebook 또는 비디오 호스팅의 원본 녹음과 일치합니다.',
        },
        {
          q: '선교 팀을 위해 설교를 번역할 수 있나요?',
          a: '네. 목표 언어를 선택하고 번역 클릭하세요. 다국어 회중, 선교 및 디아스포라 사역에 유용합니다.',
        },
        {
          q: '녹음이 귀하의 서버에 보관되나요?',
          a: '아니요. 오디오가 전사 제공자로 스트리밍되고 한 번 처리된 후 삭제됩니다. 전사만 로그인한 계정에 남습니다.',
        },
      ]}

      ctaHeadline="모든 설교를 검색 가능한 리소스로 변환하세요"
      ctaSubtitle="웹사이트용 전사, 재생을 위한 자막, 학습 그룹을 위한 노트."
      ctaButton="설교 업로드"

      relatedLinks={[
        { href: '/ko/lecture-transcription',     label: '강의 전사' },
        { href: '/ko/podcast-transcription',     label: '팟캐스트 전사' },
        { href: '/ko/webinar-transcription',     label: '웨비나 전사' },
        { href: '/ko/free-srt-generator',        label: '무료 SRT 생성기' },
        { href: '/ko/interview-transcription',   label: '인터뷰 전사' },
      ]}
    />
  )
}