import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/podcast-transcription',
  'fr': 'https://mictoo.com/fr/podcast-transcription',
  'de': 'https://mictoo.com/de/podcast-transcription',
  'es': 'https://mictoo.com/es/podcast-transcription',
  'ru': 'https://mictoo.com/ru/podcast-transcription',
  'it': 'https://mictoo.com/it/podcast-transcription',
  'pt': 'https://mictoo.com/pt/podcast-transcription',
  'pl': 'https://mictoo.com/pl/podcast-transcription',
  'ja': 'https://mictoo.com/ja/podcast-transcription',
  'ko': 'https://mictoo.com/ko/podcast-transcription',
  'x-default': 'https://mictoo.com/podcast-transcription',
}

export const metadata = {
  title: '요약 및 SRT가 포함된 팟캐스트 전사 | Mictoo',
  description:
    '팟캐스트 에피소드를 업로드하고 타임스탬프가 있는 텍스트, AI 요약 및 쇼 노트, 자막 및 아카이브용 내보내기를 받으세요.',
  alternates: {
    canonical: 'https://mictoo.com/ko/podcast-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: '팟캐스트 전사: 무료 AI 팟캐스트 전사 생성기 | Mictoo',
    description: '에피소드를 업로드하고 몇 초 만에 깔끔한 타임스탬프 전사를 받으세요.',
    url: 'https://mictoo.com/ko/podcast-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '팟캐스트 전사: 무료 생성기',
    description: '에피소드를 업로드하고 깔끔한 전사를 받으세요.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function KoPodcastTranscriptionPage() {
  return (
    <UseCaseLayout
      locale="ko"
      badge="팟캐스터 · 호스트 · 무료"
      h1First="팟캐스트 전사"
      h1Second="모든 에피소드에 대한 무료 AI 전사"
      subtitle="모든 녹음 도구에서 에피소드를 드롭하세요. AI 요약과 함께 깔끔한 타임스탬프 전사를 받아 쇼 노트, SEO 요약 및 YouTube 자막을 준비하세요."
      currentHref="/ko/podcast-transcription"

      platforms={[
        { name: 'Riverside',  iconKey: 'waveMic',   brandBg: '#4B2AF7' },
        { name: 'Zencastr',   iconKey: 'soundwave', brandBg: '#F7B32B' },
        { name: 'SquadCast',  iconKey: 'waveMic',   brandBg: '#7E22CE' },
        { name: 'Cleanfeed',  iconKey: 'soundwave', brandBg: '#0F766E' },
        { name: 'Descript',   iconKey: 'soundwave', brandBg: '#111827' },
        { name: 'Anchor',     iconKey: 'mic',       brandBg: '#8B5CF6' },
      ]}

      howItWorksTitle="팟캐스트 전사가 작동하는 방식"
      steps={[
        {
          icon: 'folder',
          title: '에피소드를 내보내기',
          desc: 'DAW 또는 녹음 도구에서 생성하는 모든 형식. MP3가 가장 일반적이지만 M4A, WAV 및 FLAC도 모두 작동합니다.',
        },
        {
          icon: 'upload',
          title: '파일을 여기에 드롭하세요',
          desc: '로그인 시 최대 60 MB의 파일을 업로드하세요. 긴 에피소드는 자동으로 세그먼트로 나누어지고 다시 연결됩니다.',
        },
        {
          icon: 'editPen',
          title: '쇼 노트, 자막, 내보내기',
          desc: '전사, AI 요약, YouTube 비디오 버전의 SRT 및 블로그용 DOCX. 처리 시간은 에피소드 길이와 파일 크기에 따라 다릅니다.',
        },
      ]}

      exampleTitle="예시 팟캐스트 전사"
      exampleFileName="episode-042.mp3"
      exampleDurationLabel="52:07"
      exampleLines={[
        { t: '0:00',  line: '쇼에 다시 오신 것을 환영합니다. 이것은 에피소드 42이며, 오늘은 2026년의 독립 팟캐스팅에 대해 이야기하고 있습니다.' },
        { t: '0:10',  line: '제 손님은 8년 동안 에피소드를 놓치지 않고 주간 쇼를 운영해왔습니다. 여기 와 주셔서 감사합니다.' },
        { t: '0:20',  line: '초대해 주셔서 감사합니다. 우리가 모두 오디오가 이미 포화 상태라고 말할 때 시작했다는 것이 믿기지 않습니다.' },
        { t: '0:30',  line: '거기서 시작해 봅시다. 2018년에 팟캐스트를 시작하는 것과 지금의 차이점은 무엇인가요?' },
        { t: '0:38',  line: '배급은 진입하기 어려웠지만, 청중은 더 인내심이 있었습니다. 본질적으로 주의가 더 저렴했습니다.' },
        { t: '0:48',  line: '오늘날 도구는 놀랍습니다. 몇 초 만에 전사, AI 쇼 노트, 그러나 주의 자체는 훨씬 더 희귀합니다.' },
        { t: '0:58',  line: '좋은 전환점입니다. 전사가 기본적으로 무료가 되었을 때 귀하의 쇼 노트 작업 흐름은 어떻게 되나요?' },
      ]}
      summaryPoints={[
        '에피소드 42, 2026년 독립 팟캐스팅에 초점.',
        '손님: 8년 주간 쇼 호스트.',
        '토론: 2018년과 2026년의 배급 변화.',
        '주의 경제가 새로운 병목 현상.',
      ]}
      actionItems={[
        '요약에서 쇼 노트 초안 작성',
        '소셜 미디어용 3개의 인용문 추출',
        'YouTube 비디오 버전으로 SRT 게시',
      ]}

      whyTitle="왜 Mictoo인가요? 팟캐스트 전사를 위해"
      whyCards={[
        {
          icon: 'sparkles',
          title: '쇼 노트를 위한 AI 요약',
          desc: '에피소드 설명, 블로그 요약 및 SEO 친화적인 쇼 노트의 견고한 초안.',
        },
        {
          icon: 'clip',
          title: 'YouTube 버전을 위한 SRT',
          desc: '타임스탬프가 원본 오디오에 맞춰져 있습니다. SRT를 YouTube Studio에 드롭하면 자막이 완료됩니다.',
        },
        {
          icon: 'globe',
          title: '국제 청중을 위한 번역',
          desc: '50개 이상의 언어로 원클릭 번역. 솔로 호스트는 번역 에이전시 없이 전 세계에 배급합니다.',
        },
        {
          icon: 'gear',
          title: '모든 비트레이트, 모든 녹음기',
          desc: '32 kbps 음성 노트에서 320 kbps 스튜디오 바운스까지 깨끗한 음성을 위해 동일하게 전사됩니다.',
        },
      ]}

      scenariosTitle="팟캐스트 전사 시나리오"
      scenarios={[
        { icon: 'chat',      title: '쇼 노트' },
        { icon: 'clip',      title: 'YouTube 자막' },
        { icon: 'search',    title: 'SEO 요약' },
        { icon: 'sparkles',  title: '인용문 클립' },
        { icon: 'globe',     title: '번역' },
        { icon: 'book',      title: '백 카탈로그' },
      ]}

      tipsTitle="더 깔끔한 팟캐스트 전사를 위한 팁"
      tips={[
        'DAW에서 허용할 때 음성 전용 스템을 바운스하세요.',
        '음성 최적화된 64 kbps 모노 MP3는 동일하게 전사됩니다.',
        '인터뷰 에피소드의 경우 전사 전에 음악 베드를 제거하세요.',
        '호스트와 게스트의 이름을 한 번 검토하세요. 이후에는 일관되게 나타납니다.',
      ]}

      guidesTitle="관련 전사 가이드"
      guides={[
        { href: '/ko/transcribe-mp3-to-text',    icon: 'file',  title: 'MP3 전사',   desc: '팟캐스트 형식 가이드' },
        { href: '/ko/m4a-to-text',               icon: 'file',  title: 'M4A 전사',   desc: 'GarageBand 및 Apple 내보내기' },
        { href: '/ko/wav-to-text',               icon: 'file',  title: 'WAV 전사',   desc: '스튜디오 바운스' },
        { href: '/ko/timestamped-transcription', icon: 'file',  title: '타임스탬프 심층 분석', desc: 'SRT / VTT 내보내기 메커니즘' },
      ]}

      faq={[
        {
          q: 'Mictoo는 어떤 팟캐스트 플랫폼과 호환되나요?',
          a: '모든 플랫폼과 호환됩니다. 호스트와 관계없이 모든 오디오 또는 비디오 파일을 수락합니다. 일반: Riverside, Zencastr, SquadCast, Anchor, Buzzsprout, Libsyn. 로그인 시 최대 60 MB까지 무료입니다.',
        },
        {
          q: '전사를 자동으로 쇼 노트로 받을 수 있나요?',
          a: 'AI 요약이 전사와 함께 자동으로 나타납니다. 이를 쇼 노트의 첫 번째 초안으로 사용한 다음 귀하의 목소리에 맞게 다듬으세요.',
        },
        {
          q: '제 에피소드가 60 MB를 초과합니다. 이제 어떻게 하나요?',
          a: '긴 파일은 자동으로 나누기 위해 로그인하세요. 또는 먼저 ffmpeg -i episode.mp3 -b:a 64k -ac 1 out.mp3로 다운샘플링하세요. 60분짜리 팟캐스트는 정확도 손실 없이 ~28 MB가 됩니다.',
        },
        {
          q: 'YouTube 비디오 버전의 SRT를 다운로드할 수 있나요?',
          a: '예. SRT 및 VTT는 원본 오디오에 맞춰진 타임스탬프를 포함합니다. YouTube Studio에 직접 드롭하세요.',
        },
        {
          q: 'Mictoo는 비영어 팟캐스트를 전사하나요?',
          a: '예. Whisper large-v3는 50개 이상의 언어를 지원하며 자동 감지가 가능합니다. 짧은 에피소드나 특이한 억양의 경우 언어를 명시적으로 선택하세요.',
        },
        {
          q: '에피소드는 귀하의 서버에 저장되나요?',
          a: '아니요. 오디오는 전사 제공업체로 스트리밍되고 한 번 처리되며 메모리에서 삭제됩니다. 전사는 로그인할 경우에만 저장됩니다.',
        },
        {
          q: '누가 말하고 있는지 식별할 수 있나요? (호스트 대 게스트)',
          a: '아니요. 현재 전사는 타임스탬프가 있는 연속 텍스트이며 자동 스피커 레이블이 없습니다.',
        },
      ]}

      ctaHeadline="모든 에피소드를 게시 가능한 텍스트로 변환하세요"
      ctaSubtitle="쇼 노트, YouTube 자막, SEO 요약, 번역. 모두 단일 업로드에서 가능합니다."
      ctaButton="팟캐스트 에피소드 업로드"

      relatedLinks={[
        { href: '/ko/interview-transcription',   label: '인터뷰 전사' },
        { href: '/ko/webinar-transcription',     label: '웨비나 전사' },
        { href: '/ko/transcribe-mp3-to-text',    label: 'MP3를 텍스트로' },
        { href: '/ko/free-srt-generator',        label: '무료 SRT 생성기' },
        { href: '/ko/meeting-transcription',     label: '회의 전사' },
      ]}
    />
  )
}