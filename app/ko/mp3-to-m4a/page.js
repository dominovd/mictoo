import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/mp3-to-m4a',
  'fr': 'https://mictoo.com/fr/mp3-to-m4a',
  'de': 'https://mictoo.com/de/mp3-to-m4a',
  'es': 'https://mictoo.com/es/mp3-to-m4a',
  'ru': 'https://mictoo.com/ru/mp3-to-m4a',
  'it': 'https://mictoo.com/it/mp3-to-m4a',
  'pt': 'https://mictoo.com/pt/mp3-to-m4a',
  'pl': 'https://mictoo.com/pl/mp3-to-m4a',
  'ja': 'https://mictoo.com/ja/mp3-to-m4a',
  'ko': 'https://mictoo.com/ko/mp3-to-m4a',
  'x-default': 'https://mictoo.com/mp3-to-m4a',
}

export const metadata = {
  title: 'MP3를 M4A로 변환, 무료 온라인 변환기 | Mictoo',
  description:
    'MP3를 무료로 M4A로 변환하세요. MP3를 AAC로 재인코딩하여 iPhone, iTunes 및 Apple 생태계에서 사용할 수 있는 M4A 컨테이너에 담습니다. 가입 필요 없고, 워터마크도 없습니다.',
  alternates: { canonical: 'https://mictoo.com/ko/mp3-to-m4a', languages: LANGS },
  openGraph: {
    title: 'MP3를 M4A로 변환, 무료 온라인 변환기 | Mictoo',
    description: 'MP3를 M4A로 변환. iPhone 친화적입니다. 가입 필요 없습니다.',
    url: 'https://mictoo.com/ko/mp3-to-m4a',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MP3를 M4A로 변환, 무료 온라인 변환기',
    description: 'iPhone 친화적인 AAC-in-MP4.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function KoMp3ToM4aPage() {
  return (
    <ConverterPageLayout
      locale="ko"
      mode="converter" from="mp3" to="m4a" currentHref="/ko/mp3-to-m4a"
      badge="MP3 → M4A · 무료 · iPhone 친화적"
      h1First="MP3를 M4A로 변환"
      h1Second="무료 온라인 변환기"
      subtitle="MP3를 드롭하면 iPhone 음성 메모, iTunes, GarageBand 및 Apple 생태계에서 사용할 수 있는 M4A(AAC가 포함된 MP4 컨테이너)를 얻을 수 있습니다. 워터마크 없고, 이메일 필요 없습니다."
      outputFormat="M4A" outputQuality="128 kbps AAC" outputAudio="스테레오"
      stepsTitle="MP3에서 M4A로 변환하는 방법"
      steps={[
        { icon: 'upload',   title: 'MP3 드롭하기',        desc: '비트 전송률에 관계없이 최대 25 MB의 MP3를 익명으로 업로드합니다.' },
        { icon: 'waveform', title: 'AAC로 재인코딩', desc: 'ffmpeg가 MP3를 디코딩하고 .m4a 컨테이너 안에 128 kbps AAC로 재인코딩합니다.' },
        { icon: 'download', title: 'M4A 다운로드',   desc: '원래 이름에 .m4a 확장자가 추가된 iPhone 친화적인 파일입니다.' },
      ]}
      previewInputName="episode.mp3"
      previewInputSize="8.4 MB · 00:09:22"
      previewOutputName="episode.m4a"
      previewOutputSize="00:09:22 · 128 kbps AAC · 7.6 MB"
      whyTitle="MP3를 M4A로 변환할 때 Mictoo를 사용하는 이유"
      whyCards={[
        { icon: 'target',    title: 'Apple 친화적인 출력',    desc: 'M4A는 일반적인 iPhone, iTunes, GarageBand 및 Apple 미디어 워크플로우와 원활하게 작동합니다.' },
        { icon: 'fileAudio', title: '예측 가능한 출력',       desc: '파일은 128 kbps AAC로 재인코딩됩니다. 최종 크기는 주로 녹음 시간에 따라 달라집니다.' },
        { icon: 'lock',      title: '변환 후 파일 삭제',      desc: '업로드된 MP3는 변환 후 삭제되며, M4A는 한 시간 이내에 삭제됩니다.' },
        { icon: 'shield',    title: '워터마크 또는 태그 없음',      desc: '오디오만 재인코딩됩니다. 브랜드 소개나 메타데이터 주입이 없습니다.' },
      ]}
      scenariosTitle="MP3를 M4A로 변환할 때 유용한 경우"
      scenarios={[
        { icon: 'headphones', title: 'iTunes 라이브러리 가져오기' },
        { icon: 'waveform',   title: 'GarageBand 프로젝트' },
        { icon: 'video',      title: 'iMovie 사운드트랙' },
        { icon: 'mail',       title: 'AirDrop 호환성' },
        { icon: 'archive',    title: 'Apple 생태계 아카이브' },
        { icon: 'editPen',    title: 'Logic Pro 가져오기' },
      ]}
      tipsTitle="MP3에서 M4A로 변환할 때 유용한 팁"
      tips={[
        'MP3와 AAC는 모두 손실 형식입니다. 재인코딩은 약간의 품질 손실을 추가합니다.',
        '무손실을 원하시면 WAV로 변환하세요.',
        'ID3 태그는 M4A로 전송되지 않습니다.',
        '소스 파일을 현재 25 MB 업로드 제한 이하로 유지하세요.',
      ]}
      processTitle="변환 중 발생하는 일"
      processSteps={['MP3 스트림', '디코드', 'AAC / M4A 인코딩']}
      compareTitle="MP3와 M4A 비교"
      compareRows={[
        { fmt: 'MP3', contains: '아니요', size: '작음', best: '범용, 레거시 플레이어' },
        { fmt: 'M4A', contains: '아니요', size: '조금 더 작음', best: 'iPhone, iTunes, GarageBand, Apple 앱' },
      ]}
      faq={[
        { q: 'MP3에서 M4A로 변환하는 것은 무료인가요?', a: '네. 25 MB까지의 파일은 계정 없이 변환할 수 있으며, 출력물에는 워터마크가 없습니다.' },
        { q: 'MP3를 M4A로 변환하면 품질이 향상되나요?', a: '아니요. 손실 형식에서 다른 손실 형식으로 재인코딩하면 품질이 약간 손실될 수 있습니다. Apple 생태계 호환성을 위해서만 수행하세요.' },
        { q: 'M4A는 iTunes와 Apple Music에서 작동하나요?', a: '네. MP4 컨테이너 안의 표준 AAC는 iTunes에서 사용하는 정확한 형식입니다.' },
        { q: '파일이 저장되나요?', a: '아니요. 업로드된 MP3는 변환 후 삭제되며, M4A는 한 시간 이내에 삭제됩니다.' },
        { q: '무손실 M4A(ALAC)로 변환할 수 있나요?', a: '이 페이지에서는 불가능합니다. 출력은 손실 AAC입니다. 무손실을 원하시면 MP3를 WAV로 먼저 변환한 후, DAW에서 ALAC로 변환하세요.' },
      ]}
      ctaHeadline="지금 MP3를 M4A로 변환하세요"
      ctaSubtitle="MP3를 드롭하면 몇 초 안에 iPhone 친화적인 M4A를 얻을 수 있습니다."
      ctaButton="MP3 파일 선택"
      moreTools={[
        { href: '/ko/m4a-to-mp3',  label: 'M4A를 MP3로' },
        { href: '/ko/mp3-to-wav',  label: 'MP3를 WAV로' },
        { href: '/ko/mp4-to-mp3',  label: 'MP4를 MP3로' },
        { href: '/ko/m4a-to-text', label: 'M4A를 텍스트로' },
      ]}
    />
  )
}