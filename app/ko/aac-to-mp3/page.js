import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/aac-to-mp3',
  'fr': 'https://mictoo.com/fr/aac-to-mp3',
  'de': 'https://mictoo.com/de/aac-to-mp3',
  'es': 'https://mictoo.com/es/aac-to-mp3',
  'ru': 'https://mictoo.com/ru/aac-to-mp3',
  'it': 'https://mictoo.com/it/aac-to-mp3',
  'pt': 'https://mictoo.com/pt/aac-to-mp3',
  'pl': 'https://mictoo.com/pl/aac-to-mp3',
  'ja': 'https://mictoo.com/ja/aac-to-mp3',
  'ko': 'https://mictoo.com/ko/aac-to-mp3',
  'x-default': 'https://mictoo.com/aac-to-mp3',
}

export const metadata = {
  title: 'AAC를 MP3로: 무료 온라인 변환기 | Mictoo',
  description:
    'AAC를 MP3로 무료로 변환하고, 변환이 실제로 도움이 되는 경우와 품질을 저하시킬 수 있는 경우에 대한 명확한 설명을 제공합니다.',
  alternates: {
    canonical: 'https://mictoo.com/ko/aac-to-mp3',
    languages: LANGS,
  },
  openGraph: {
    title: 'AAC를 MP3로: 무료 온라인 변환기 | Mictoo',
    description: 'AAC를 MP3로 무료로 변환합니다.',
    url: 'https://mictoo.com/ko/aac-to-mp3',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AAC를 MP3로: 무료 온라인 변환기',
    description: 'AAC를 MP3로 몇 초 안에 변환합니다. 무료, 가입 필요 없음.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function KoAacToMp3Page() {
  return (
    <ConverterPageLayout
      locale="ko"
      mode="converter" from="aac" to="mp3" currentHref="/ko/aac-to-mp3"
      badge="AAC → MP3 · 무료 · 가입 필요 없음"
      h1First="AAC를 MP3로"
      h1Second="무료 온라인 변환기"
      subtitle="원시 .aac 파일(ADTS 스트림, 방송 덤프 또는 추출된 iPhone 오디오)을 드롭하고 몇 초 안에 휴대용 MP3를 받으세요."
      outputFormat="MP3" outputQuality="128 kbps" outputAudio="스테레오"
      stepsTitle="AAC를 MP3로 변환하는 방법"
      steps={[
        { icon: 'upload',   title: 'AAC 드롭하기',        desc: '원시 ADTS 또는 ADIF 프레임, 최대 25 MB 익명으로.' },
        { icon: 'waveform', title: '우리가 디코딩하고 인코딩합니다', desc: 'ffmpeg가 AAC 비트스트림을 읽고 128 kbps 스테레오 MP3로 다시 인코딩합니다.' },
        { icon: 'download', title: 'MP3 다운로드',    desc: '몇 초 안에 깨끗한 MP3를 받아보세요. 모든 플레이어에 준비 완료.' },
      ]}
      previewInputName="broadcast-clip.aac"
      previewInputSize="8.4 MB · 00:07:22 · 128 kbps AAC"
      previewOutputName="broadcast-clip.mp3"
      previewOutputSize="00:07:22 · 128 kbps MP3 · 6.8 MB"
      whyTitle="AAC를 MP3로 변환할 때 Mictoo를 사용하는 이유는?"
      whyCards={[
        { icon: 'target',   title: '원시 AAC 처리',        desc: 'ADTS 및 ADIF 프레임 모두 직접 작동, 수동 재포장 필요 없음.' },
        { icon: 'fileAudio',title: 'MP3는 어디서나 재생',   desc: '구형 장치 및 레거시 팟캐스트 호스트는 때때로 AAC보다 MP3를 선호합니다.' },
        { icon: 'lock',     title: '파일은 변환 후 삭제',    desc: '업로드된 AAC는 변환 후 삭제됩니다; MP3는 한 시간 이내에 삭제됩니다.' },
        { icon: 'shield',   title: '워터마크나 태그 없음',    desc: '오디오만 재인코딩됩니다. 브랜드 소개나 메타데이터 없음.' },
      ]}
      scenariosTitle="AAC를 MP3로 변환할 때 유용한 경우"
      scenarios={[
        { icon: 'video',      title: 'HLS 방송 덤프' },
        { icon: 'headphones', title: '팟캐스트 호스트가 MP3 요구' },
        { icon: 'mail',       title: '레거시 플레이어 호환성' },
        { icon: 'editPen',    title: 'DAW 가져오기(구형 도구)' },
        { icon: 'archive',    title: '일관된 아카이브 형식' },
        { icon: 'waveform',   title: '추출된 iPhone AAC' },
      ]}
      tipsTitle="깨끗한 AAC를 MP3로 변환하기 위한 팁"
      tips={[
        '장치가 AAC를 기본적으로 재생할 수 있다면 변환할 필요가 없을 수 있습니다.',
        'AAC와 MP3는 모두 손실 형식입니다; 재인코딩은 약간의 품질 손실을 추가합니다.',
        '소스 파일을 현재 25 MB 업로드 제한 이하로 유지하세요.',
        '전사용으로는 AAC를 /aac-to-text로 직접 업로드하세요.',
      ]}
      processTitle="변환 중에 발생하는 일"
      processSteps={['AAC ADTS 프레임', '디코드', 'MP3 인코딩']}
      compareTitle="AAC vs MP3"
      compareRows={[
        { fmt: 'AAC', contains: '아니오', size: '작음(효율적)', best: '현대 장치, 스트리밍, iPhone' },
        { fmt: 'MP3', contains: '아니오', size: '작음',             best: '보편적 호환성, 레거시 플레이어' },
      ]}
      faq={[
        { q: '정말로 AAC를 MP3로 변환해야 하나요?', a: '드물게. 대부분의 현대 장치는 AAC를 기본적으로 재생합니다. 특정 도구나 호스트가 명시적으로 MP3를 요구하는 경우에만 변환하세요.' },
        { q: '변환기는 무료인가요?', a: '네. 25 MB까지의 파일은 계정 없이 변환할 수 있으며, 출력에는 워터마크가 없습니다.' },
        { q: '품질 손실은 무엇인가요?', a: 'AAC와 MP3는 모두 손실 형식입니다. 재인코딩은 약간의 추가 손실을 발생시키지만, 128 kbps에서 일반적인 청취에는 들리지 않습니다.' },
        { q: '어떤 AAC 프레임이 작동하나요?', a: 'ADTS(가장 일반적), ADIF, LATM 모두 디코딩됩니다. MP4/M4A 내의 AAC도 작동하지만 다른 입력 경로입니다.' },
        { q: '파일이 저장되나요?', a: '아니요. 업로드된 AAC는 변환 후 삭제됩니다; MP3는 한 시간 이내에 삭제됩니다.' },
      ]}
      ctaHeadline="지금 AAC를 MP3로 변환하세요"
      ctaSubtitle="AAC를 드롭하고 몇 초 안에 깨끗한 MP3를 받으세요. 가입 필요 없음. 워터마크 없음."
      ctaButton="AAC 파일 선택"
      moreTools={[
        { href: '/ko/m4a-to-mp3',  label: 'M4A를 MP3로' },
        { href: '/ko/mp4-to-mp3',  label: 'MP4를 MP3로' },
        { href: '/ko/wav-to-mp3',  label: 'WAV를 MP3로' },
        { href: '/ko/aac-to-text', label: 'AAC를 텍스트로' },
      ]}
    />
  )
}