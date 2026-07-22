import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/wma-to-mp3',
  'fr': 'https://mictoo.com/fr/wma-to-mp3',
  'de': 'https://mictoo.com/de/wma-to-mp3',
  'es': 'https://mictoo.com/es/wma-to-mp3',
  'ru': 'https://mictoo.com/ru/wma-to-mp3',
  'it': 'https://mictoo.com/it/wma-to-mp3',
  'pt': 'https://mictoo.com/pt/wma-to-mp3',
  'pl': 'https://mictoo.com/pl/wma-to-mp3',
  'ja': 'https://mictoo.com/ja/wma-to-mp3',
  'ko': 'https://mictoo.com/ko/wma-to-mp3',
  'x-default': 'https://mictoo.com/wma-to-mp3',
}

export const metadata = {
  title: 'WMA에서 MP3로: 레거시 Windows Media 오디오를 위한 무료 변환기 | Mictoo',
  description:
    '오래된 WMA 파일을 범용 MP3로 변환합니다. 레거시 Windows Media 아카이브, 음성 메일 내보내기 및 현대적인 프로그램이 열 수 없는 리핑된 CD를 구출하기 위해 제작되었습니다.',
  alternates: {
    canonical: 'https://mictoo.com/ko/wma-to-mp3',
    languages: LANGS,
  },
  openGraph: {
    title: 'WMA에서 MP3로: 레거시 Windows Media 변환기 | Mictoo',
    description: '레거시 WMA 아카이브, 음성 메일 내보내기, 리핑된 CD를 구출합니다.',
    url: 'https://mictoo.com/ko/wma-to-mp3',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WMA에서 MP3로: 무료 변환기',
    description: '레거시 WMA 파일을 구출합니다. 무료입니다.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function KoWmaToMp3Page() {
  return (
    <ConverterPageLayout
      locale="ko"
      mode="converter" from="wma" to="mp3" currentHref="/ko/wma-to-mp3"
      badge="WMA → MP3 · 무료 · 레거시 구출"
      h1First="WMA에서 MP3로"
      h1Second="무료 레거시 Windows Media 변환기"
      subtitle="오래된 WMA 파일(음성 메일 내보내기, 리핑된 CD, 레거시 Windows Media 아카이브)을 드롭하면 모든 현대 장치나 플레이어가 열 수 있는 범용 MP3를 받을 수 있습니다."
      outputFormat="MP3" outputQuality="128 kbps" outputAudio="스테레오"
      stepsTitle="WMA에서 MP3 변환이 작동하는 방식"
      steps={[
        { icon: 'upload',   title: 'WMA 드롭하기',        desc: '익명으로 최대 25 MB의 모든 Windows Media Audio 버전.' },
        { icon: 'waveform', title: '디코딩 및 인코딩', desc: 'ffmpeg가 WMA를 읽고 44.1 kHz에서 128 kbps 스테레오 MP3로 재인코딩합니다.' },
        { icon: 'download', title: 'MP3 다운로드',    desc: '대부분의 현재 플레이어, 전화 및 오디오 편집기와 호환되는 MP3를 받습니다.' },
      ]}
      previewInputName="voicemail-2011.wma"
      previewInputSize="1.2 MB · 00:02:34"
      previewOutputName="voicemail-2011.mp3"
      previewOutputSize="00:02:34 · 128 kbps · 2.4 MB"
      whyTitle="왜 Mictoo를 WMA에서 MP3로 사용해야 할까요?"
      whyCards={[
        { icon: 'target',   title: '레거시 파일 처리',    desc: 'iTunes, Apple Music 및 현대 플레이어가 열 수 없는 오래된 Windows Media Audio 파일.' },
        { icon: 'fileAudio',title: '광범위한 MP3 호환성', desc: 'MP3는 macOS, Linux, iPhone, Android 및 일반 음악 플레이어에서 널리 지원됩니다.' },
        { icon: 'lock',     title: '변환 후 파일 삭제',     desc: '업로드된 WMA는 변환 후 삭제됩니다. MP3는 한 시간 이내에 삭제됩니다.' },
        { icon: 'shield',   title: '워터마크나 태그 없음',     desc: '오디오만 재인코딩됩니다. 브랜드 소개나 메타데이터가 삽입되지 않습니다.' },
      ]}
      scenariosTitle="WMA에서 MP3로 변환이 유용한 경우"
      scenarios={[
        { icon: 'archive',    title: '레거시 CD 리핑' },
        { icon: 'headphones', title: '오래된 음성 메일 내보내기' },
        { icon: 'editPen',    title: 'Windows Movie Maker 출력' },
        { icon: 'mail',       title: '비 Windows 장치에서 공유' },
        { icon: 'video',      title: '현대 편집기로 가져오기' },
        { icon: 'waveform',   title: '테이프 아카이브 구출' },
      ]}
      tipsTitle="WMA에서 MP3로 변환을 위한 팁"
      tips={[
        'DRM 보호된 WMA(오래된 Windows Media Player 대여)는 디코딩할 수 없습니다.',
        '비트레이트가 매우 낮은 WMA(음성 메일)는 소스와 동일하게 들립니다.',
        '오래된 WMV 비디오는 여기서 지원되지 않습니다. 대신 MP4에서 MP3로 변환하세요.',
        '25 MB를 초과하는 녹음의 경우, 업로드하기 전에 소스를 자르거나 나누세요.',
      ]}
      processTitle="변환 중에 발생하는 일"
      processSteps={['WMA (ASF)', 'Windows Media 디코딩', 'MP3 인코딩']}
      compareTitle="WMA vs MP3"
      compareRows={[
        { fmt: 'WMA', contains: '아니오', size: '작음', best: '레거시 Windows 워크플로우(사용 중단됨)' },
        { fmt: 'MP3', contains: '아니오', size: '작음', best: '범용 호환성, 현대 장치' },
      ]}
      faq={[
        { q: 'WMA에서 MP3로 변환기가 무료인가요?', a: '네. 25 MB까지의 파일은 계정 없이 변환할 수 있으며, 출력에는 워터마크가 없습니다.' },
        { q: '왜 현대 플레이어가 WMA를 열지 않나요?', a: 'Apple은 WMA를 지원하지 않았습니다. 일부 Android 플레이어는 이를 중단했습니다. WMA는 Windows 자체가 점점 멀어지고 있는 레거시 Microsoft 형식입니다.' },
        { q: 'DRM 보호된 WMA를 변환할 수 있나요?', a: '아니요. 오래된 Windows Media Player 대여는 ffmpeg가 디코딩할 수 없는 DRM을 사용했습니다. 우리는 저작권 보호를 우회하지 않습니다.' },
        { q: '파일이 저장되나요?', a: '아니요. 업로드된 WMA는 변환 후 삭제됩니다. MP3는 한 시간 이내에 삭제됩니다.' },
        { q: 'WMA 무손실은 어떻게 되나요?', a: '변환기는 WMA 무손실도 읽지만, 출력은 여전히 128 kbps MP3(손실)입니다. 무손실 출력을 원하시면 WAV로 변환하세요.' },
      ]}
      ctaHeadline="지금 WMA를 MP3로 변환하세요"
      ctaSubtitle="레거시 Windows Media Audio를 구출하세요. 몇 초 안에 휴대 가능한 MP3를 받으세요."
      ctaButton="WMA 파일 선택"
      moreTools={[
        { href: '/ko/mp4-to-mp3',  label: 'MP4에서 MP3로' },
        { href: '/ko/wav-to-mp3',  label: 'WAV에서 MP3로' },
        { href: '/ko/flac-to-mp3', label: 'FLAC에서 MP3로' },
        { href: '/ko/aac-to-mp3',  label: 'AAC에서 MP3로' },
      ]}
    />
  )
}