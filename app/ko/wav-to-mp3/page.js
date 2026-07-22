import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/wav-to-mp3',
  'fr': 'https://mictoo.com/fr/wav-to-mp3',
  'de': 'https://mictoo.com/de/wav-to-mp3',
  'es': 'https://mictoo.com/es/wav-to-mp3',
  'ru': 'https://mictoo.com/ru/wav-to-mp3',
  'it': 'https://mictoo.com/it/wav-to-mp3',
  'pt': 'https://mictoo.com/pt/wav-to-mp3',
  'pl': 'https://mictoo.com/pl/wav-to-mp3',
  'ja': 'https://mictoo.com/ja/wav-to-mp3',
  'ko': 'https://mictoo.com/ko/wav-to-mp3',
  'x-default': 'https://mictoo.com/wav-to-mp3',
}

export const metadata = {
  title: 'WAV를 MP3로 변환, 무료 온라인 변환기 | Mictoo',
  description:
    'WAV를 MP3로 무료 온라인 변환합니다. 손실 없는 WAV 파일을 128 kbps MP3로 몇 초 만에 축소합니다. 가입 필요 없음, 워터마크 없음. 최대 25 MB.',
  alternates: { canonical: 'https://mictoo.com/ko/wav-to-mp3', languages: LANGS },
  openGraph: {
    title: 'WAV를 MP3로 변환, 무료 온라인 변환기 | Mictoo',
    description: '손실 없는 WAV를 휴대 가능한 128 kbps MP3로 축소합니다. 가입 필요 없음.',
    url: 'https://mictoo.com/ko/wav-to-mp3',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WAV를 MP3로 변환, 무료 온라인 변환기',
    description: 'WAV를 휴대 가능한 MP3로 축소합니다.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function KoWavToMp3Page() {
  return (
    <ConverterPageLayout
      locale="ko"
      mode="converter" from="wav" to="mp3" currentHref="/ko/wav-to-mp3"
      badge="WAV → MP3 · 무료 · 가입 필요 없음"
      h1First="WAV를 MP3로"
      h1Second="무료 온라인 변환기"
      subtitle="압축되지 않은 WAV 파일을 드롭하고 몇 초 만에 작고 휴대 가능한 MP3를 얻으세요. 워터마크 없음, 이메일 없음, 대기 없음."
      outputFormat="MP3" outputQuality="128 kbps" outputAudio="스테레오"
      stepsTitle="WAV를 MP3로 변환하는 방법"
      steps={[
        { icon: 'upload',   title: 'WAV 파일 드롭하기',         desc: '최대 25 MB의 WAV 파일을 업로드하세요. 계정이 필요하지 않습니다.' },
        { icon: 'waveform', title: 'MP3로 인코딩합니다',      desc: 'ffmpeg가 44.1 kHz에서 128 kbps 스테레오 MP3로 인코딩합니다. 25 MB WAV는 약 10초 만에 완료됩니다.' },
        { icon: 'download', title: 'MP3 다운로드하기',     desc: '원본 파일 이름으로 더 작은 128 kbps MP3를 받으세요.' },
      ]}
      previewInputName="studio-bounce.wav"
      previewInputSize="120 MB · 00:12:34 · 16비트 / 44.1 kHz"
      previewOutputName="studio-bounce.mp3"
      previewOutputSize="00:12:34 · 128 kbps · 11.5 MB"
      whyTitle="WAV를 MP3로 변환할 때 Mictoo를 사용하는 이유"
      whyCards={[
        { icon: 'target',   title: '한 가지 작업을 잘 수행',      desc: '변환만 합니다. 뉴스레터 팝업 없음, 가짜 진행 바 없음.' },
        { icon: 'fileAudio',title: '훨씬 작은 출력',    desc: '압축되지 않은 PCM WAV 파일은 128 kbps에서 8, 12배 더 작아집니다. 정확한 비율은 소스에 따라 다릅니다.' },
        { icon: 'lock',     title: '변환 후 파일 삭제',    desc: '변환이 완료되면 업로드한 파일이 삭제됩니다. MP3는 한 시간 이내에 삭제됩니다.' },
        { icon: 'shield',   title: '워터마크나 태그 없음',    desc: '브랜드 소개 없음, 메타데이터 주입 없음. 오디오만 재인코딩됩니다.' },
      ]}
      scenariosTitle="WAV를 MP3로 변환할 때 유용한 경우"
      scenarios={[
        { icon: 'headphones', title: '전화용 스튜디오 바운스' },
        { icon: 'mail',       title: '더 작은 파일 이메일로 보내기' },
        { icon: 'archive',    title: '더 작은 크기로 아카이브' },
        { icon: 'editPen',    title: '전사 준비하기' },
        { icon: 'waveform',   title: '음악 라이브러리 가져오기' },
        { icon: 'video',      title: '비디오용 보이스오버' },
      ]}
      tipsTitle="WAV를 MP3로 변환할 때 유용한 팁"
      tips={[
        '128 kbps는 대부분의 청취에 투명합니다.',
        'WAV가 25 MB를 초과하면 업로드 전에 잘라내거나 압축하세요.',
        '다채널 WAV는 스테레오로 다운믹스됩니다.',
        '손실 없는 보존을 위해 WAV를 아카이브 복사본으로 유지하세요.',
      ]}
      processTitle="변환 중에 발생하는 일"
      processSteps={['WAV 컨테이너', 'PCM 디코딩', 'MP3 인코딩']}
      compareTitle="WAV vs MP3"
      compareRows={[
        { fmt: 'WAV', contains: '아니요', size: '대형 (~10 MB/분)', best: '편집, 아카이브, 스튜디오' },
        { fmt: 'MP3', contains: '아니요', size: '소형 (~1 MB/분)',  best: '공유, 재생, 청취' },
      ]}
      faq={[
        { q: 'WAV를 MP3로 변환하는 변환기는 무료인가요?', a: '네. 25 MB까지의 파일에 대해 계정이 필요 없으며, 출력에는 워터마크가 없습니다.' },
        { q: '변환이 오디오 품질을 감소시키나요?', a: '약간. 128 kbps의 MP3는 손실 형식이지만, 품질 저하는 음성과 일반 음악 재생에 대해 들리지 않습니다. WAV를 마스터로 유지하세요.' },
        { q: '업로드된 파일이 저장되나요?', a: '아니요. 귀하의 WAV는 변환을 위해 Vercel Blob 스토리지에 잠시 저장되며, 그 후 삭제됩니다. MP3는 한 시간 이내에 삭제됩니다.' },
        { q: '큰 WAV를 변환할 수 있나요?', a: '현재 업로드 한도는 25 MB입니다. 더 큰 파일의 경우, 업로드 전에 잘라내거나 모노 또는 낮은 샘플 속도의 복사본을 내보내세요.' },
        { q: '모바일에서 작동하나요?', a: '네. iOS Safari와 Android Chrome에서 업로드가 가능합니다.' },
      ]}
      ctaHeadline="지금 WAV를 MP3로 변환하세요"
      ctaSubtitle="WAV를 드롭하고 몇 초 만에 휴대 가능한 MP3를 받으세요. 가입 필요 없음. 워터마크 없음."
      ctaButton="WAV 파일 선택"
      moreTools={[
        { href: '/ko/mp4-to-mp3',  label: 'MP4를 MP3로' },
        { href: '/ko/webm-to-mp3', label: 'WEBM을 MP3로' },
        { href: '/ko/flac-to-mp3', label: 'FLAC을 MP3로' },
        { href: '/ko/mp3-to-wav',  label: 'MP3를 WAV로' },
        { href: '/ko/wav-to-text', label: 'WAV를 텍스트로' },
      ]}
    />
  )
}