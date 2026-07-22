import FormatPageLayout from '@/components/FormatPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/transcribe-video-to-text',
  'fr': 'https://mictoo.com/fr/transcribe-video-to-text',
  'de': 'https://mictoo.com/de/transcribe-video-to-text',
  'es': 'https://mictoo.com/es/transcribe-video-to-text',
  'ru': 'https://mictoo.com/ru/transcribe-video-to-text',
  'it': 'https://mictoo.com/it/transcribe-video-to-text',
  'pt': 'https://mictoo.com/pt/transcribe-video-to-text',
  'pl': 'https://mictoo.com/pl/transcribe-video-to-text',
  'ja': 'https://mictoo.com/ja/transcribe-video-to-text',
  'ko': 'https://mictoo.com/ko/transcribe-video-to-text',
  'x-default': 'https://mictoo.com/transcribe-video-to-text',
}

export const metadata = {
  title: '비디오를 텍스트로: MP4, MOV, WebM을 위한 무료 온라인 비디오 전사 | Mictoo',
  description:
    'MP4, MOV, WebM, AVI 또는 MKV 비디오를 업로드하고 타임스탬프, AI 요약 및 SRT 자막이 포함된 전사를 받으세요. 화면 녹화, 튜토리얼, 브이로그 및 웨비나에 적합합니다.',
  alternates: {
    canonical: 'https://mictoo.com/ko/transcribe-video-to-text',
    languages: LANGS,
  },
  openGraph: {
    title: '비디오를 텍스트로: 무료 온라인 비디오 전사 | Mictoo',
    description: 'MP4, MOV, WebM 비디오 전사, SRT, 요약 및 번역.',
    url: 'https://mictoo.com/ko/transcribe-video-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '비디오를 텍스트로: 무료 온라인 비디오 전사',
    description: 'MP4, MOV, WebM 비디오 전사, SRT 및 요약.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function KoTranscribeVideoToTextPage() {
  return (
    <FormatPageLayout
      locale="ko"
      badge="비디오 파일 · MP4 · MOV · WebM · 무료"
      h1First="비디오를 텍스트로"
      h1Second="화면 녹화, 튜토리얼 및 브이로그를 위한"
      subtitle="MP4, MOV, WebM, MKV 또는 AVI 파일을 업로드하세요. 우리는 오디오 트랙을 추출하고 Whisper large-v3로 전사하며, 타임스탬프, AI 요약 및 SRT 자막이 포함된 전사를 반환합니다."
      highlightFormat="video"
      relatedFormatsTitle="업로드할 수 있는 비디오 컨테이너"
      relatedFormats={[
        { key: 'video', name: 'MP4', ext: '.mp4' },
        { key: 'mov', name: 'MOV', ext: '.mov' },
        { key: 'webm', name: 'WebM', ext: '.webm', href: '/ko/webm-to-text' },
        { key: 'mkv', name: 'MKV', ext: '.mkv' },
        { key: 'avi', name: 'AVI', ext: '.avi' },
        { key: 'mpeg', name: 'MPEG', ext: '.mpeg' },
      ]}
      previewFileName="keynote-recording.mp4"
      previewWordCount={205}
      previewDurationLabel="32분 47초"
      enableYouTubeUrl={true}
      previewLines={[
        { t: '0:00',  line: '안녕하세요 여러분, 오늘 여기까지 와 주셔서 감사합니다.' },
        { t: '0:06',  line: '우리는 다음 30분 동안 2026년에 비디오가 어떻게 변화했는지와 그것이 제작자에게 의미하는 바에 대해 이야기할 것입니다.' },
        { t: '0:15',  line: '시작하기 전에 세 가지 간단한 숫자를 말씀드리겠습니다. 인터넷 사용자 중 92%가 매주 비디오를 시청합니다.' },
        { t: '0:24',  line: '짧은 형식의 비디오가 이제 모든 주요 플랫폼에서 긴 형식보다 더 많은 시청 시간을 차지합니다.' },
        { t: '0:32',  line: '비디오 결과로 이어지는 검색이 매년 두 배 반 증가했습니다.' },
        { t: '0:41',  line: '그래서 플랫폼은 비디오를 밀어주고 있습니다. 관객은 더 많은 비디오를 시청하고 있습니다. 그 부분은 논란의 여지가 없습니다.' },
        { t: '0:50',  line: '논란이 되는 것은 실제로 그 비디오 바다에서 주목을 받는 것이 무엇인지입니다.' },
        { t: '0:58',  line: '매주 제작자들이 성공한 세 가지 패턴을 살펴보겠습니다.' },
      ]}
      whyTitle="비디오 전사를 위한 Mictoo의 이유"
      whyCards={[
        {
          icon: 'video',
          title: '모든 일반 비디오 컨테이너',
          desc: 'MP4, MOV, WebM, MKV, AVI. 우리는 서버 측에서 오디오 트랙을 분리하므로, 변환 단계 없이 비디오를 그대로 업로드할 수 있습니다.',
        },
        {
          icon: 'clip',
          title: '타임라인에 맞는 SRT 및 VTT',
          desc: '타임스탬프가 원본 비디오 타임라인에 맞춰져 있습니다. SRT 또는 VTT를 다운로드하고 Premiere, DaVinci, CapCut 또는 YouTube 업로드에 바로 드롭하세요.',
        },
        {
          icon: 'sparkles',
          title: '설명을 위한 AI 요약',
          desc: '전사와 함께 자동 생성된 요약. 비디오 설명, 블로그 요약 및 챕터 제목을 위한 훌륭한 초안입니다.',
        },
        {
          icon: 'globe',
          title: '50개 이상의 언어로 자막 번역',
          desc: '전사가 준비되면, 자막을 스페인어, 프랑스어, 독일어, 포르투갈어 및 45개 이상의 다른 언어로 한 번의 클릭으로 번역할 수 있습니다.',
        },
      ]}
      scenariosTitle="비디오를 텍스트로 변환할 때 적합한 경우"
      scenarios={[
        {
          icon: 'video',
          title: 'YouTube 비디오 자막',
          desc: '녹화, 편집 및 MP4로 내보내기. SRT 자막 및 설명 준비가 된 요약을 위해 파일을 드롭하세요.',
        },
        {
          icon: 'briefcase',
          title: 'Loom 및 화면 녹화',
          desc: 'Loom, OBS 또는 브라우저 화면 캡처에서 WebM 또는 MP4. 워크스루의 깔끔한 텍스트 버전을 얻으세요.',
        },
        {
          icon: 'users',
          title: '웨비나 및 워크숍 녹화',
          desc: '장기 이벤트 녹화. 전사는 후속 블로그 게시물, LinkedIn 요약 및 검색 가능한 아카이브가 됩니다.',
        },
        {
          icon: 'editPen',
          title: '브이로그 및 튜토리얼 콘텐츠',
          desc: '브이로그 컷, 튜토리얼 설명 또는 제품 데모. 전사는 쇼 노트, 자막 및 소셜 미디어 재사용에 활용됩니다.',
        },
        {
          icon: 'book',
          title: '강의 수업 아카이브',
          desc: '녹화된 강의 또는 수업 MP4. 학생들에게 검색 가능한 텍스트 버전을 제공하고 접근성을 위해 자막을 고정하세요.',
        },
        {
          icon: 'mic',
          title: '인터뷰 및 추천 비디오',
          desc: '대면 인터뷰 또는 고객 추천. 전사는 인용, 편집 및 번역을 훨씬 쉽게 만듭니다.',
        },
      ]}
      technicalTitle="비디오 파일에 대한 처리 과정"
      technicalIntro="Mictoo는 전사를 위해 음성 오디오 트랙을 사용합니다. 컨테이너 및 화질은 음성 인식에 영향을 미치지 않지만, 업로드 크기 및 오디오 스트림의 가용성에 영향을 미칩니다."
      technicalFacts={[
        {
          icon: 'video',
          title: '오디오 트랙 추출',
          desc: '음성 트랙이 비디오 컨테이너에서 디코딩됩니다. 업로드 전에 별도의 MP3로 내보낼 필요가 없습니다.',
        },
        {
          icon: 'clip',
          title: '원본 타임라인 유지',
          desc: '전사 세그먼트 및 자막 내보내기는 원본 미디어 타임라인을 사용하므로 비디오와 다시 일치시킬 수 있습니다.',
        },
        {
          icon: 'layers',
          title: '컨테이너는 코덱이 아닙니다',
          desc: 'MP4, MOV, WebM, MKV 및 AVI는 서로 다른 오디오 코덱을 포함할 수 있습니다. 파일은 처리될 때 검사됩니다.',
        },
        {
          icon: 'ear',
          title: '음성이 필요합니다',
          desc: '무음 클립 및 음악 전용 비디오는 신뢰할 수 있는 음성 전사가 없습니다. 먼저 의도한 오디오 트랙이 들리는지 확인하세요.',
        },
      ]}
      faq={[
        {
          q: 'Mictoo는 어떤 비디오 형식을 지원하나요?',
          a: 'MP4, MOV, WebM, MKV, AVI 및 대부분의 다른 일반 컨테이너. 우리는 서버 측에서 오디오 트랙을 분리하므로, 이러한 형식 중 어떤 것이든 직접 업로드할 수 있습니다.',
        },
        {
          q: '업로드할 수 있는 비디오 파일의 최대 크기는 얼마인가요?',
          a: '익명으로는 최대 25 MB, 로그인 시 60 MB입니다. 더 긴 비디오의 경우, 로그인하면 약 3시간까지 파일을 자동으로 분할합니다. 매우 큰 내보내기의 경우, 비디오를 먼저 다운샘플링하거나 오디오 트랙을 추출하여 업로드하세요.',
        },
        {
          q: '대신 YouTube URL을 붙여넣을 수 있나요?',
          a: '네. 이 페이지에서 YouTube 비디오 URL을 붙여넣으면 Mictoo가 가능한 경우 자막을 가져옵니다. 자막이 없을 경우, 비디오 파일이나 추출된 오디오를 업로드하여 Whisper 전사를 받을 수 있습니다.',
        },
        {
          q: '타임스탬프가 원본 비디오와 일치하나요?',
          a: '네. 전사 및 SRT/VTT 타임스탬프는 원본 비디오 타임라인을 사용합니다. 유용한 첫 번째 자막 트랙을 제공하지만, 게시하기 전에 편집기에서 타이밍 및 줄 바꿈을 검토해야 합니다.',
        },
        {
          q: '비디오에 대한 SRT 자막을 받을 수 있나요?',
          a: '네. 전사 후 SRT 또는 VTT로 다운로드할 수 있습니다. 두 형식 모두 Premiere, DaVinci Resolve, Final Cut, CapCut, YouTube Studio 및 대부분의 최신 비디오 플레이어에서 작동합니다.',
        },
        {
          q: '무음 비디오 클립에서 오디오를 추출하나요?',
          a: '아니요. 비디오에 들리는 음성이 없으면 전사할 것이 없습니다. 음악만 있는 클립의 경우, 전사는 일반적으로 비어 있거나 짧은 가사 조각만 포함됩니다.',
        },
        {
          q: '자막을 다른 언어로 번역할 수 있나요?',
          a: '네. 전사 후, 대상 언어를 선택하고 번역을 클릭하세요. 번역은 GPT-4o-mini에서 실행되며 원본과 함께 표시됩니다. 외국어 자막을 위해 번역된 SRT를 내보내세요.',
        },
        {
          q: '내 비디오 파일이 귀하의 서버에 저장되나요?',
          a: '아니요. 비디오는 전사 제공자에게 스트리밍되고, 우리는 메모리에서 오디오를 추출하고 한 번 전사한 후 모든 것을 메모리에서 삭제합니다. 전사는 로그인하고 기록에 저장하기로 선택한 경우에만 저장됩니다.',
        },
        {
          q: 'Mictoo는 비영어 비디오를 전사하나요?',
          a: '네. Whisper large-v3는 50개 이상의 언어를 지원하며 자동 감지가 가능합니다. 짧은 비디오나 비영어 콘텐츠의 경우, 더 깨끗한 첫 번째 감지를 위해 드롭다운에서 언어를 명시적으로 설정하세요.',
        },
        {
          q: '비디오 전사에는 얼마나 걸리나요?',
          a: '30분 MP4는 일반적으로 끝에서 끝까지 40-70초 안에 완료됩니다. 업로드 시간과 비디오 파일 크기가 대개 더 긴 단계입니다. 오디오를 분리하기 전에 파일을 수신해야 하기 때문입니다.',
        },
      ]}
      ctaHeadline="비디오를 드롭하고 자막 및 전사를 받으세요"
      ctaSubtitle="MP4, MOV, WebM, MKV, AVI. SRT, VTT, DOCX 및 요약을 몇 초 안에."
      ctaButton="전사를 위해 비디오 업로드"
    />
  )
}