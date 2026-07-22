import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/timestamped-transcription',
  'fr': 'https://mictoo.com/fr/timestamped-transcription',
  'de': 'https://mictoo.com/de/timestamped-transcription',
  'es': 'https://mictoo.com/es/timestamped-transcription',
  'ru': 'https://mictoo.com/ru/timestamped-transcription',
  'it': 'https://mictoo.com/it/timestamped-transcription',
  'pt': 'https://mictoo.com/pt/timestamped-transcription',
  'pl': 'https://mictoo.com/pl/timestamped-transcription',
  'ja': 'https://mictoo.com/ja/timestamped-transcription',
  'ko': 'https://mictoo.com/ko/timestamped-transcription',
  'x-default': 'https://mictoo.com/timestamped-transcription',
}

export const metadata = {
  title: '타임스탬프가 있는 전사: 무료 시간 코드 전사 생성기 | Mictoo',
  description:
    '오디오 또는 비디오에 대한 세그먼트 수준의 시간 코드가 포함된 무료 타임스탬프 전사. 저널리즘, 연구, 팟캐스트 및 비디오 편집에 유용합니다.',
  alternates: {
    canonical: 'https://mictoo.com/ko/timestamped-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: '타임스탬프가 있는 전사: 무료 시간 코드 전사 생성기 | Mictoo',
    description: '모든 오디오 또는 비디오에 대한 문장 수준의 타임스탬프.',
    url: 'https://mictoo.com/ko/timestamped-transcription',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '타임스탬프가 있는 전사: 무료',
    description: '저널리즘, 연구, 편집을 위한 시간 코드 전사.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function KoTimestampedTranscriptionPage() {
  return (
    <ConverterPageLayout
      locale="ko"
      mode="upload" currentHref="/ko/timestamped-transcription"
      badge="타임스탬프 · 오디오 또는 비디오 · 무료"
      h1First="타임스탬프가 있는 전사"
      h1Second="저널리즘, 연구, 편집을 위한 시간 코드 전사"
      subtitle="오디오 또는 비디오를 업로드하고 세그먼트별 타임스탬프가 포함된 전사를 받으세요. 타임스탬프를 클릭하면 오디오 플레이어에서 해당 순간으로 이동합니다. 무료이며, 가입이 필요 없습니다."
      stepsTitle="타임스탬프 전사가 작동하는 방식"
      steps={[
        { icon: 'upload',   title: '오디오 또는 비디오 드롭',       desc: 'MP3, MP4, WAV, M4A, WEBM, FLAC 등. 익명으로 최대 25 MB 또는 로그인 시 180 MB.' },
        { icon: 'waveform', title: 'Whisper가 세그먼트 타임스탬프 제공', desc: 'Whisper large-v3는 원본 오디오에 맞춘 세그먼트별 타임스탬프를 제공합니다.' },
        { icon: 'download', title: '타임스탬프와 함께 내보내기',      desc: '인라인 타임스탬프가 포함된 TXT, 자막용 SRT / VTT, 검토용 DOCX.' },
      ]}
      whyTitle="타임스탬프 전사에 Mictoo를 사용하는 이유는?"
      whyCards={[
        { icon: 'clock',    title: '클릭하여 이동 가능한 타임스탬프',   desc: '독자 보기에서 모든 타임스탬프를 클릭할 수 있습니다. 오디오 플레이어에서 원하는 순간으로 이동하세요.' },
        { icon: 'target',   title: 'Whisper 품질의 전사', desc: 'Whisper large-v3는 구두점 추가 및 다양한 언어, 억양, 녹음 유형을 처리합니다.' },
        { icon: 'captions', title: 'SRT + VTT 포함',         desc: '타임스탬프는 비디오 자막을 위한 SRT 및 VTT 내보내기로 전달됩니다.' },
        { icon: 'lock',     title: '업로드된 파일은 후에 삭제됨',        desc: '업로드된 오디오는 전사 후 삭제되며, 전사는 로그인된 계정에서만 유지됩니다.' },
      ]}
      scenariosTitle="타임스탬프 전사가 유용한 경우"
      scenarios={[
        { icon: 'editPen',    title: '저널리즘 인용 찾기' },
        { icon: 'target',     title: 'UX 연구 인용' },
        { icon: 'video',      title: '비디오 편집 큐 리스트' },
        { icon: 'headphones', title: '팟캐스트 쇼 노트' },
        { icon: 'archive',    title: '법적 / 발견' },
        { icon: 'waveform',   title: '오디오 북마킹' },
      ]}
      tipsTitle="더 깔끔한 타임스탬프 출력을 위한 팁"
      tips={[
        '독자 보기가 클릭하여 이동하는 내비게이션에 가장 적합합니다.',
        'SRT / VTT 내보내기의 경우, 타임스탬프는 원본 파일 타임라인에 맞춰 정렬됩니다.',
        '긴 녹음의 경우, 약 3시간까지 자동 분할을 위해 로그인하세요.',
        '검색창은 일치하는 항목을 강조 표시하고 즉시 타임스탬프를 보여줍니다.',
      ]}
      processTitle="전사 중에 발생하는 일"
      processSteps={['오디오 / 비디오', 'Whisper large-v3', '타임스탬프가 있는 텍스트']}
      faq={[
        { q: '타임스탬프의 세분화 수준은?', a: '세그먼트별(대략 문장별). Whisper는 원본 오디오에 맞춘 세그먼트 수준의 타임스탬프를 기본적으로 생성합니다.' },
        { q: '타임스탬프를 클릭하여 오디오로 이동할 수 있나요?', a: '네. 독자 보기에서 모든 타임스탬프를 클릭할 수 있으며, 오디오 플레이어가 해당 순간으로 이동합니다.' },
        { q: '이 도구는 무료인가요?', a: '네. 익명으로 최대 25 MB 또는 로그인 시 180 MB까지 무료입니다. 워터마크가 없고 분당 요금이 없습니다.' },
        { q: '어떤 내보내기 형식이 지원되나요?', a: 'TXT(인라인 타임스탬프 포함), SRT, VTT, DOCX. 로그인한 사용자는 구조화된 타임스탬프 데이터와 함께 PDF 및 JSON도 받을 수 있습니다.' },
        { q: '발표자를 식별하나요?', a: '아직은 아닙니다. 발표자 레이블이 없는 연속 타임스탬프 텍스트. 다이어리제이션은 Pro 로드맵에 있습니다.' },
        { q: '녹음이 서버에 보관되나요?', a: '아니요. 오디오는 전사 제공업체로 스트리밍되며, 한 번 처리되고 삭제됩니다. 전사는 로그인된 계정에서만 유지됩니다.' },
      ]}
      ctaHeadline="클릭하여 이동 가능한 타임스탬프 전사 받기"
      ctaSubtitle="저널리즘, UX 연구, 비디오 편집, 팟캐스트 쇼 노트. 파일당 무료입니다."
      ctaButton="오디오 또는 비디오 업로드"
      moreTools={[
        { href: '/ko/free-srt-generator',       label: 'SRT 생성기' },
        { href: '/ko/youtube-to-text',          label: 'YouTube에서 텍스트로' },
        { href: '/ko/transcribe-audio-to-text', label: '오디오에서 텍스트로' },
        { href: '/ko/transcribe-video-to-text', label: '비디오에서 텍스트로' },
      ]}
    />
  )
}