import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/webm-to-mp3',
  'fr': 'https://mictoo.com/fr/webm-to-mp3',
  'de': 'https://mictoo.com/de/webm-to-mp3',
  'es': 'https://mictoo.com/es/webm-to-mp3',
  'ru': 'https://mictoo.com/ru/webm-to-mp3',
  'it': 'https://mictoo.com/it/webm-to-mp3',
  'pt': 'https://mictoo.com/pt/webm-to-mp3',
  'pl': 'https://mictoo.com/pl/webm-to-mp3',
  'ja': 'https://mictoo.com/ja/webm-to-mp3',
  'ko': 'https://mictoo.com/ko/webm-to-mp3',
  'x-default': 'https://mictoo.com/webm-to-mp3',
}

export const metadata = {
  title: 'WEBM을 MP3로 변환, 무료 온라인 변환기 | Mictoo',
  description:
    'WEBM을 MP3로 무료로 변환하세요. 몇 초 만에 모든 WEBM 비디오 또는 오디오 파일에서 MP3 오디오를 추출합니다. 회원가입 필요 없고, 워터마크도 없습니다. 최대 25 MB.',
  alternates: { canonical: 'https://mictoo.com/ko/webm-to-mp3', languages: LANGS },
  openGraph: {
    title: 'WEBM을 MP3로 변환, 무료 온라인 변환기 | Mictoo',
    description: '모든 WEBM에서 MP3를 추출하세요. 회원가입 필요 없고, 워터마크도 없습니다.',
    url: 'https://mictoo.com/ko/webm-to-mp3',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WEBM을 MP3로 변환, 무료 온라인 변환기',
    description: '모든 WEBM에서 MP3를 추출하세요.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function KoWebmToMp3Page() {
  return (
    <ConverterPageLayout
      locale="ko"
      mode="converter" from="webm" to="mp3" currentHref="/ko/webm-to-mp3"
      badge="WEBM → MP3 · 무료 · 회원가입 필요 없음"
      h1First="WEBM을 MP3로"
      h1Second="무료 온라인 변환기"
      subtitle="WEBM 파일(예: Loom, OBS, Firefox 녹화 또는 YouTube 다운로더에서) 을 드롭하면 몇 초 안에 깨끗한 MP3를 얻을 수 있습니다. 워터마크 없음, 이메일 필요 없음."
      outputFormat="MP3" outputQuality="128 kbps" outputAudio="스테레오"
      stepsTitle="WEBM에서 MP3 변환 과정"
      steps={[
        { icon: 'upload',   title: 'WEBM 드롭하기',   desc: '비디오 또는 오디오 전용 WEBM 모두 가능. 최대 25 MB를 익명으로 처리합니다.' },
        { icon: 'waveform', title: '우리가 디멀렉스하고 인코딩합니다', desc: 'ffmpeg가 비디오 트랙(있는 경우)을 제거하고 Opus 또는 Vorbis 오디오를 128 kbps MP3로 재인코딩합니다.' },
        { icon: 'download', title: 'MP3 다운로드하기', desc: '몇 초 안에 깨끗한 MP3를 얻으세요. 원본 파일 이름에 .mp3 확장자가 붙습니다.' },
      ]}
      previewInputName="loom-walkthrough.webm"
      previewInputSize="72 MB · 00:08:12"
      previewOutputName="loom-walkthrough.mp3"
      previewOutputSize="00:08:12 · 128 kbps · 7.5 MB"
      whyTitle="WEBM을 MP3로 변환할 때 Mictoo를 사용하는 이유"
      whyCards={[
        { icon: 'target',   title: 'Opus 및 Vorbis 처리', desc: '두 WEBM 오디오 코덱이 직접 작동하며, 수동으로 재포장할 필요가 없습니다.' },
        { icon: 'video',    title: 'WEBM 내 비디오 처리',   desc: '비디오 트랙을 서버 측에서 디멀렉스합니다. 오디오를 직접 추출할 필요가 없습니다.' },
        { icon: 'lock',     title: '파일은 변환 후 삭제됩니다',     desc: '업로드된 WEBM은 변환 후 삭제되며, MP3는 한 시간 이내에 제거됩니다.' },
        { icon: 'shield',   title: '워터마크나 태그 없음',     desc: '출력 MP3에는 인트로 스플라이스나 브랜드 메타데이터가 없습니다.' },
      ]}
      scenariosTitle="WEBM을 MP3로 변환할 때 유용한 경우"
      scenarios={[
        { icon: 'video',      title: 'Loom 워크스루' },
        { icon: 'headphones', title: 'YouTube 다운로더 출력' },
        { icon: 'mail',       title: '더 작은 파일 이메일로 보내기' },
        { icon: 'editPen',    title: '전사 준비하기' },
        { icon: 'waveform',   title: '브라우저 녹화' },
        { icon: 'archive',    title: '오디오만 아카이브하기' },
      ]}
      tipsTitle="깨끗한 WEBM에서 MP3로 변환하기 위한 팁"
      tips={[
        '비디오-WEBM은 자동으로 디멀렉스되며, 먼저 제거할 필요가 없습니다.',
        '25 MB를 초과하는 녹화의 경우, 업로드하기 전에 소스를 자르거나 나누세요.',
        '여러 개가 존재할 경우 기본 오디오 트랙이 사용됩니다.',
        'Whisper 전사를 위해서는 WEBM을 /webm-to-text로 직접 업로드하세요.',
      ]}
      processTitle="변환 중에 발생하는 일"
      processSteps={['WEBM 컨테이너', '오디오 트랙 추출', 'MP3 인코딩']}
      compareTitle="WEBM과 MP3"
      compareRows={[
        { fmt: 'WEBM', contains: '종종 그렇습니다', size: '중간-대형', best: '웹 녹화, 브라우저 비디오' },
        { fmt: 'MP3',  contains: '아니요',        size: '작음',        best: '공유, 재생, 어디서나' },
      ]}
      faq={[
        { q: 'WEBM에서 MP3로 변환하는 것은 무료인가요?', a: '네. 최대 25 MB의 파일은 계정 없이 변환할 수 있으며, 출력에는 워터마크가 없습니다.' },
        { q: '내 WEBM에 비디오가 있다면?', a: '우리가 서버 측에서 비디오 트랙을 디멀렉스하고 오디오만 인코딩합니다. 미리 제거할 필요가 없습니다.' },
        { q: '어떤 WEBM 오디오 코덱이 작동하나요?', a: 'Opus(최신, 가장 일반적) 및 Vorbis(구형). 두 가지 모두 직접 지원됩니다.' },
        { q: '업로드된 파일은 저장되나요?', a: '아니요. WEBM은 변환 후 삭제되며, MP3는 한 시간 이내에 제거됩니다.' },
        { q: '내 WEBM이 25 MB를 초과합니다. 이제 어떻게 하나요?', a: '업로드하기 전에 소스를 자르거나, 오디오 전용 WEBM을 먼저 추출하여 파일 크기를 줄이세요.' },
      ]}
      ctaHeadline="지금 WEBM을 MP3로 변환하세요"
      ctaSubtitle="WEBM을 드롭하고 몇 초 안에 깨끗한 MP3를 얻으세요. 회원가입 필요 없음. 워터마크 없음."
      ctaButton="WEBM 파일 선택"
      moreTools={[
        { href: '/ko/mp4-to-mp3',  label: 'MP4에서 MP3로' },
        { href: '/ko/wav-to-mp3',  label: 'WAV에서 MP3로' },
        { href: '/ko/flac-to-mp3', label: 'FLAC에서 MP3로' },
        { href: '/ko/webm-to-text', label: 'WEBM에서 텍스트로' },
      ]}
    />
  )
}