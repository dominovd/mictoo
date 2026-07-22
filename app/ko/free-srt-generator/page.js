import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/free-srt-generator',
  'fr': 'https://mictoo.com/fr/free-srt-generator',
  'de': 'https://mictoo.com/de/free-srt-generator',
  'es': 'https://mictoo.com/es/free-srt-generator',
  'ru': 'https://mictoo.com/ru/free-srt-generator',
  'it': 'https://mictoo.com/it/free-srt-generator',
  'pt': 'https://mictoo.com/pt/free-srt-generator',
  'pl': 'https://mictoo.com/pl/free-srt-generator',
  'ja': 'https://mictoo.com/ja/free-srt-generator',
  'ko': 'https://mictoo.com/ko/free-srt-generator',
  'x-default': 'https://mictoo.com/free-srt-generator',
}

export const metadata = {
  title: '무료 SRT 생성기: 오디오 또는 비디오에서 온라인으로 SRT 자막 파일 만들기 | Mictoo',
  description:
    '모든 오디오 또는 비디오에서 깔끔한 SRT 자막 파일을 생성합니다. Whisper 품질의 타임스탬프, YouTube, Premiere, Final Cut, DaVinci Resolve, CapCut에 적합합니다. 무료, 가입 필요 없음.',
  alternates: {
    canonical: 'https://mictoo.com/ko/free-srt-generator',
    languages: LANGS,
  },
  openGraph: {
    title: '무료 SRT 생성기 | Mictoo',
    description: '오디오 또는 비디오에서 SRT 자막 파일을 생성합니다. YouTube, Premiere, Final Cut에 적합합니다.',
    url: 'https://mictoo.com/ko/free-srt-generator',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '무료 SRT 생성기',
    description: 'Whisper 품질의 SRT 자막을 오디오 또는 비디오에서 생성합니다.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function KoFreeSrtGeneratorPage() {
  return (
    <ConverterPageLayout
      locale="ko"
      mode="upload" currentHref="/ko/free-srt-generator"
      badge="SRT · 오디오 또는 비디오 · 무료"
      h1First="무료 SRT 생성기"
      h1Second="모든 오디오 또는 비디오에서 Whisper 품질의 자막"
      subtitle="오디오 또는 비디오를 업로드하면 YouTube, Premiere, Final Cut, DaVinci Resolve 또는 CapCut에 적합한 SRT 자막 파일을 얻을 수 있습니다. 가입 필요 없음, 분당 요금 없음."
      stepsTitle="SRT 생성 과정"
      steps={[
        { icon: 'upload',   title: '오디오 또는 비디오 드롭하기', desc: 'MP3, MP4, WAV, M4A, WEBM, FLAC 등. 익명으로 최대 25 MB, 로그인 시 180 MB까지.' },
        { icon: 'waveform', title: 'Whisper가 전사합니다', desc: 'Whisper large-v3는 원본 오디오에 맞춘 세그먼트별 타임스탬프를 생성합니다.' },
        { icon: 'download', title: 'SRT 다운로드',        desc: 'SRT 및 VTT 내보내기가 포함됩니다. 비디오 편집기나 YouTube 업로드에 드롭하세요.' },
      ]}
      whyTitle="SRT 생성을 위해 Mictoo를 사용하는 이유는?"
      whyCards={[
        { icon: 'target',   title: '정확한 다국어 자막', desc: 'Whisper large-v3는 구두점을 추가하고 다양한 언어, 억양 및 녹음 유형을 처리합니다.' },
        { icon: 'captions', title: 'SRT + VTT 포함',                desc: '두 자막 형식이 자동으로 생성됩니다. 웹 플레이어용 VTT, 편집기용 SRT.' },
        { icon: 'lock',     title: '파일은 이후 삭제됩니다',               desc: '업로드된 오디오는 전사 후 삭제되며, 전사는 로그인한 계정에서만 유지됩니다.' },
        { icon: 'shield',   title: '워터마크나 태그 없음',               desc: '브랜드 소개나 "X로 제작" 태그가 없는 깔끔한 SRT.' },
      ]}
      scenariosTitle="SRT 생성이 유용한 경우"
      scenarios={[
        { icon: 'video',      title: 'YouTube 업로드 자막' },
        { icon: 'editPen',    title: 'Premiere / DaVinci 가져오기' },
        { icon: 'headphones', title: '팟캐스트 비디오 버전' },
        { icon: 'mail',       title: '클라이언트 검토용 복사본' },
        { icon: 'archive',    title: '접근성 아카이브' },
        { icon: 'target',     title: '외국어 자막' },
      ]}
      tipsTitle="더 깔끔한 자막을 위한 팁"
      tips={[
        '25 MB 이상의 파일은 로그인하여 최대 180 MB까지 자동 분할 업로드를 이용하세요.',
        '비영어 또는 기술 콘텐츠의 경우 언어를 명시적으로 설정하세요.',
        '내보내기 전에 편집기 모드에서 이름 및 특이한 용어를 검토하세요.',
        '먼저 전사를 번역한 후 외국어 자막을 위해 SRT를 내보내세요.',
      ]}
      processTitle="생성 과정에서 발생하는 일"
      processSteps={['오디오 / 비디오', 'Whisper 전사', 'SRT + VTT 내보내기']}
      faq={[
        { q: 'SRT 생성기는 무료인가요?', a: '네. 익명으로 최대 25 MB 또는 로그인 시 180 MB까지 가능합니다. SRT에 워터마크가 없고 분당 요금도 없습니다.' },
        { q: '어떤 자막 형식을 받을 수 있나요?', a: 'SRT와 VTT가 모두 포함됩니다. TXT(일반 텍스트)와 DOCX도 가능합니다. 로그인한 사용자는 추가로 PDF와 JSON을 받을 수 있습니다.' },
        { q: '타임스탬프의 정확도는 얼마나 되나요?', a: 'Whisper large-v3는 원본 오디오에 맞춘 세그먼트별 타임스탬프를 제공합니다. YouTube 자막 및 대부분의 비디오 편집 사용 사례에 충분히 정확합니다.' },
        { q: '화자를 식별하나요(다이어리제이션)?', a: '아직은 아닙니다. 타임스탬프가 있는 연속 자막이지만 화자 레이블은 없습니다. 다이어리제이션은 Pro 로드맵에 있습니다.' },
        { q: 'Mictoo는 비영어 오디오를 전사하나요?', a: '네. Whisper large-v3는 50개 이상의 언어를 지원하며 자동 감지 기능이 있습니다. 더 깔끔한 결과를 위해 언어를 명시적으로 설정하세요.' },
        { q: '녹음이 서버에 보관되나요?', a: '아니요. 오디오는 전사 제공업체로 스트리밍되고, 한 번 처리된 후 삭제됩니다. 전사는 로그인한 계정에서만 유지됩니다.' },
      ]}
      ctaHeadline="모든 녹음에서 SRT 자막 생성하기"
      ctaSubtitle="YouTube, Premiere, Final Cut, DaVinci, CapCut. Whisper 품질의 타임스탬프."
      ctaButton="오디오 또는 비디오 업로드"
      moreTools={[
        { href: '/ko/timestamped-transcription', label: '타임스탬프가 있는 전사' },
        { href: '/ko/youtube-to-text',           label: 'YouTube를 텍스트로' },
        { href: '/ko/transcribe-video-to-text',  label: '비디오를 텍스트로' },
        { href: '/ko/transcribe-audio-to-text',  label: '오디오를 텍스트로' },
      ]}
    />
  )
}