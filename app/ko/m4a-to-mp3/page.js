import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/m4a-to-mp3',
  'fr': 'https://mictoo.com/fr/m4a-to-mp3',
  'de': 'https://mictoo.com/de/m4a-to-mp3',
  'es': 'https://mictoo.com/es/m4a-to-mp3',
  'ru': 'https://mictoo.com/ru/m4a-to-mp3',
  'it': 'https://mictoo.com/it/m4a-to-mp3',
  'pt': 'https://mictoo.com/pt/m4a-to-mp3',
  'pl': 'https://mictoo.com/pl/m4a-to-mp3',
  'ja': 'https://mictoo.com/ja/m4a-to-mp3',
  'ko': 'https://mictoo.com/ko/m4a-to-mp3',
  'x-default': 'https://mictoo.com/m4a-to-mp3',
}

export const metadata = {
  title: 'M4A에서 MP3로: 애플 오디오를 위한 무료 변환기 | Mictoo',
  description:
    '아이폰 음성 메모, GarageBand 바운스 및 애플 생태계 M4A 파일을 팟캐스트 호스트, 구형 안드로이드 폰 및 레거시 플레이어를 위한 범용 MP3로 변환합니다.',
  alternates: {
    canonical: 'https://mictoo.com/ko/m4a-to-mp3',
    languages: LANGS,
  },
  openGraph: {
    title: 'M4A에서 MP3로: 애플 오디오를 위한 무료 변환기 | Mictoo',
    description: '아이폰 음성 메모와 GarageBand 바운스를 범용 MP3로 변환합니다.',
    url: 'https://mictoo.com/ko/m4a-to-mp3',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'M4A에서 MP3로: 무료 변환기',
    description: '아이폰 음성 메모를 범용 MP3로 변환합니다.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function KoM4aToMp3Page() {
  return (
    <ConverterPageLayout
      locale="ko"
      mode="converter" from="m4a" to="mp3" currentHref="/ko/m4a-to-mp3"
      badge="M4A → MP3 · 무료 · 애플 오디오"
      h1First="M4A에서 MP3로"
      h1Second="애플 생태계 오디오를 위한 무료 변환기"
      subtitle="아이폰 음성 메모, GarageBand 바운스 또는 애플 팟캐스트 내보내기를 드롭하면 팟캐스트 호스트, 구형 안드로이드 폰 및 레거시 플레이어에 적합한 범용 MP3를 얻을 수 있습니다."
      outputFormat="MP3" outputQuality="128 kbps" outputAudio="스테레오"
      stepsTitle="M4A에서 MP3 변환이 작동하는 방식"
      steps={[
        { icon: 'upload',   title: 'M4A 드롭',        desc: '음성 메모, GarageBand, 애플 팟캐스트에서. 최대 25 MB 익명으로.' },
        { icon: 'waveform', title: '디코딩 및 인코딩', desc: 'ffmpeg가 M4A 컨테이너 내부의 AAC를 디코딩하고 128 kbps MP3로 다시 인코딩합니다.' },
        { icon: 'download', title: 'MP3 다운로드',    desc: '대부분의 현재 플레이어 및 오디오 편집기와 호환되는 MP3를 얻습니다.' },
      ]}
      previewInputName="voice-memo.m4a"
      previewInputSize="6.2 MB · 00:12:04"
      previewOutputName="voice-memo.mp3"
      previewOutputSize="00:12:04 · 128 kbps · 11.5 MB"
      whyTitle="M4A에서 MP3로 Mictoo를 사용하는 이유는?"
      whyCards={[
        { icon: 'target',   title: '아이폰 친화적',        desc: '아이폰 음성 메모의 기본 .m4a 파일이 직접 드롭됩니다. 이름 변경이 필요 없습니다.' },
        { icon: 'fileAudio',title: '레거시 호스트를 위한 MP3',   desc: '일부 팟캐스트 호스트와 구형 안드로이드 장치는 여전히 M4A보다 MP3를 선호합니다.' },
        { icon: 'lock',     title: '변환 후 파일 삭제',    desc: '업로드된 M4A는 변환 후 삭제됩니다. MP3는 한 시간 이내에 삭제됩니다.' },
        { icon: 'shield',   title: '워터마크 또는 태그 없음',    desc: '오디오만 재인코딩됩니다. 브랜드 소개 없음, 메타데이터 주입 없음.' },
      ]}
      scenariosTitle="M4A에서 MP3로 변환이 유용한 경우"
      scenarios={[
        { icon: 'headphones', title: '아이폰 음성 메모' },
        { icon: 'waveform',   title: 'GarageBand 바운스' },
        { icon: 'mail',       title: '레거시 팟캐스트 호스트' },
        { icon: 'archive',    title: '일관된 라이브러리 형식' },
        { icon: 'editPen',    title: '구형 DAW 가져오기' },
        { icon: 'video',      title: '비애플 비디오 편집기' },
      ]}
      tipsTitle="M4A에서 MP3로 변환을 위한 팁"
      tips={[
        '플랫폼이 M4A를 지원하는 경우 변환할 필요가 없을 수 있습니다.',
        '두 형식 모두 손실 형식입니다. 재인코딩은 약간의 품질 손실을 추가합니다.',
        'ID3 및 iTunes 메타데이터는 전달되지 않습니다.',
        '전사용으로는 M4A를 /m4a-to-text에 직접 업로드하세요.',
      ]}
      processTitle="변환 중에 발생하는 일"
      processSteps={['M4A (MP4 컨테이너)', 'AAC 디코드', 'MP3 인코딩']}
      compareTitle="M4A와 MP3"
      compareRows={[
        { fmt: 'M4A', contains: '아니요', size: '작음 (효율적)', best: '애플 생태계, 현대 장치' },
        { fmt: 'MP3', contains: '아니요', size: '작음',             best: '범용, 레거시 플레이어, 구형 호스트' },
      ]}
      faq={[
        { q: 'M4A를 MP3로 변환해야 하나요?', a: '특정 도구나 호스트가 MP3를 요구하는 경우에만 필요합니다. 대부분의 현대 장치(2026년 모든 안드로이드 및 윈도우 포함)는 M4A를 기본적으로 재생합니다.' },
        { q: '변환기는 무료인가요?', a: '네. 최대 25 MB의 파일은 계정 없이 변환할 수 있으며, 출력에는 워터마크가 없습니다.' },
        { q: '품질이 손실되나요?', a: 'M4A와 MP3는 모두 손실 형식입니다. 재인코딩은 약간의 손실을 추가하지만 일반적인 청취에서는 들리지 않습니다.' },
        { q: '아이폰 음성 메모의 기본 형식이 작동하나요?', a: '네. 아이폰 음성 메모는 표준 .m4a를 작성하여 직접 드롭됩니다.' },
        { q: '파일이 저장되나요?', a: '아니요. 업로드된 M4A는 변환 후 삭제되며, MP3는 한 시간 이내에 삭제됩니다.' },
      ]}
      ctaHeadline="지금 M4A를 MP3로 변환하세요"
      ctaSubtitle="아이폰 음성 메모 또는 애플 오디오를 드롭하고 휴대 가능한 MP3를 얻으세요."
      ctaButton="M4A 파일 선택"
      moreTools={[
        { href: '/ko/aac-to-mp3',  label: 'AAC에서 MP3로' },
        { href: '/ko/mp4-to-mp3',  label: 'MP4에서 MP3로' },
        { href: '/ko/mp3-to-m4a',  label: 'MP3에서 M4A로' },
        { href: '/ko/m4a-to-text', label: 'M4A에서 텍스트로' },
      ]}
    />
  )
}