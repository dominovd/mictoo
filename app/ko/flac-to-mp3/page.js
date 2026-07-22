import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/flac-to-mp3',
  'fr': 'https://mictoo.com/fr/flac-to-mp3',
  'de': 'https://mictoo.com/de/flac-to-mp3',
  'es': 'https://mictoo.com/es/flac-to-mp3',
  'ru': 'https://mictoo.com/ru/flac-to-mp3',
  'it': 'https://mictoo.com/it/flac-to-mp3',
  'pt': 'https://mictoo.com/pt/flac-to-mp3',
  'pl': 'https://mictoo.com/pl/flac-to-mp3',
  'ja': 'https://mictoo.com/ja/flac-to-mp3',
  'ko': 'https://mictoo.com/ko/flac-to-mp3',
  'x-default': 'https://mictoo.com/flac-to-mp3',
}

export const metadata = {
  title: 'FLAC에서 MP3로, 무료 온라인 변환기 | Mictoo',
  description:
    'FLAC를 MP3로 무료로 변환하세요. 손실 없는 FLAC를 128 kbps MP3로 몇 초 만에 줄이세요. 가입 필요 없음, 워터마크 없음. 최대 25 MB.',
  alternates: { canonical: 'https://mictoo.com/ko/flac-to-mp3', languages: LANGS },
  openGraph: {
    title: 'FLAC에서 MP3로, 무료 온라인 변환기 | Mictoo',
    description: '손실 없는 FLAC를 128 kbps MP3로 줄이세요. 가입 필요 없음.',
    url: 'https://mictoo.com/ko/flac-to-mp3',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FLAC에서 MP3로, 무료 온라인 변환기',
    description: '손실 없는 FLAC를 휴대용 MP3로 줄이세요.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function KoFlacToMp3Page() {
  return (
    <ConverterPageLayout
      locale="ko"
      mode="converter" from="flac" to="mp3" currentHref="/ko/flac-to-mp3"
      badge="FLAC → MP3 · 무료 · 가입 필요 없음"
      h1First="FLAC에서 MP3로"
      h1Second="무료 온라인 변환기"
      subtitle="손실 없는 FLAC 파일(CD 리핑, Tidal 다운로드 또는 고해상도 소스에서)을 드롭하고 몇 초 만에 휴대용 128 kbps MP3를 받으세요."
      outputFormat="MP3" outputQuality="128 kbps" outputAudio="스테레오"
      stepsTitle="FLAC에서 MP3 변환 과정"
      steps={[
        { icon: 'upload',   title: 'FLAC 드롭하기',       desc: '모든 FLAC(네이티브 또는 FLAC-in-OGG). 최대 25 MB를 익명으로.' },
        { icon: 'waveform', title: '디코딩 및 인코딩', desc: 'ffmpeg가 손실 없는 FLAC를 디코딩하고 128 kbps 스테레오 MP3로 다시 인코딩합니다.' },
        { icon: 'download', title: 'MP3 다운로드',    desc: '5-8배 더 작은 MP3를 받아서 어떤 플레이어에서도 준비하세요.' },
      ]}
      previewInputName="album-track.flac"
      previewInputSize="42 MB · 00:05:12 · 16비트 / 44.1 kHz"
      previewOutputName="album-track.mp3"
      previewOutputSize="00:05:12 · 128 kbps · 4.8 MB"
      whyTitle="왜 Mictoo를 FLAC에서 MP3로 사용해야 하나요?"
      whyCards={[
        { icon: 'target',    title: '손실 없는 마스터 유지', desc: '당신의 FLAC 파일은 수정되지 않습니다. 우리는 단지 복사본을 생성합니다.' },
        { icon: 'fileAudio', title: '작은 청취용 복사본',    desc: '128 kbps MP3는 종종 FLAC보다 몇 배 더 작습니다. 변환은 손실이 있으므로 FLAC을 마스터로 유지하세요.' },
        { icon: 'lock',      title: '변환 후 파일 삭제',       desc: '업로드된 FLAC는 변환 후 삭제됩니다; MP3는 한 시간 이내에 삭제됩니다.' },
        { icon: 'shield',    title: '워터마크나 태그 없음',       desc: '오디오만 재인코딩됩니다. 인트로 스플라이스 없음, 브랜드 메타데이터 없음.' },
      ]}
      scenariosTitle="FLAC에서 MP3가 유용한 경우"
      scenarios={[
        { icon: 'headphones', title: '전화용 CD 리핑' },
        { icon: 'mail',       title: '더 작은 파일 이메일로 전송' },
        { icon: 'archive',    title: '휴대용 음악 라이브러리' },
        { icon: 'editPen',    title: 'DAW 가져오기' },
        { icon: 'waveform',   title: '팟캐스트 청취용 복사본' },
        { icon: 'video',      title: '비디오 사운드트랙' },
      ]}
      tipsTitle="FLAC에서 MP3로의 깨끗한 변환을 위한 팁"
      tips={[
        'FLAC을 손실 없는 아카이브 복사본으로 유지하세요.',
        '128 kbps는 대부분의 청취에서 투명합니다.',
        '25 MB 이상의 트랙은 업로드 전에 소스를 잘라내거나 나누세요.',
        'Vorbis 메타데이터 태그(제목/아티스트)는 MP3로 전달되지 않습니다.',
      ]}
      processTitle="변환 중에 발생하는 일"
      processSteps={['FLAC 컨테이너', '손실 없는 디코드', 'MP3 인코딩']}
      compareTitle="FLAC vs MP3"
      compareRows={[
        { fmt: 'FLAC', contains: '아니요', size: '대형 (~5-8 MB/분)', best: '아카이브, 고음질 재생' },
        { fmt: 'MP3',  contains: '아니요', size: '소형 (~1 MB/분)',   best: '공유, 전화, 어디서나' },
      ]}
      faq={[
        { q: 'FLAC에서 MP3로 변환기가 무료인가요?', a: '네. 25 MB까지의 파일은 계정 없이 변환할 수 있으며, 출력에는 워터마크가 없습니다.' },
        { q: 'FLAC에서 MP3로 변환할 때 품질을 잃나요?', a: '기술적으로 그렇습니다(MP3는 손실이 있음), 하지만 128 kbps에서는 손실이 일반적인 청취에서 들리지 않습니다. FLAC을 아카이브 복사본으로 유지하세요.' },
        { q: 'FLAC-in-OGG 파일이 지원되나요?', a: '네. 네이티브 FLAC(매직 바이트 fLaC)와 OGG 컨테이너 내의 FLAC 모두 작동합니다.' },
        { q: '파일이 저장되나요?', a: '아니요. 업로드된 FLAC는 변환 후 삭제됩니다; MP3는 한 시간 이내에 삭제됩니다.' },
        { q: '내 FLAC가 25 MB를 초과합니다. 이제 어떻게 하나요?', a: '소스를 잘라내거나 나누거나, 업로드 전에 낮은 해상도의 청취용 복사본을 내보내세요.' },
      ]}
      ctaHeadline="지금 FLAC를 MP3로 변환하세요"
      ctaSubtitle="FLAC를 드롭하고 몇 초 만에 휴대용 MP3를 받으세요. 가입 필요 없음. 워터마크 없음."
      ctaButton="FLAC 파일 선택"
      moreTools={[
        { href: '/ko/wav-to-mp3',  label: 'WAV에서 MP3로' },
        { href: '/ko/mp4-to-mp3',  label: 'MP4에서 MP3로' },
        { href: '/ko/webm-to-mp3', label: 'WEBM에서 MP3로' },
        { href: '/ko/flac-to-text', label: 'FLAC에서 텍스트로' },
      ]}
    />
  )
}