import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/mp4-to-mp3',
  'fr': 'https://mictoo.com/fr/mp4-to-mp3',
  'de': 'https://mictoo.com/de/mp4-to-mp3',
  'es': 'https://mictoo.com/es/mp4-to-mp3',
  'ru': 'https://mictoo.com/ru/mp4-to-mp3',
  'it': 'https://mictoo.com/it/mp4-to-mp3',
  'pt': 'https://mictoo.com/pt/mp4-to-mp3',
  'pl': 'https://mictoo.com/pl/mp4-to-mp3',
  'ja': 'https://mictoo.com/ja/mp4-to-mp3',
  'ko': 'https://mictoo.com/ko/mp4-to-mp3',
  'x-default': 'https://mictoo.com/mp4-to-mp3',
}

export const metadata = {
  title: 'MP4에서 MP3로, 무료 온라인 변환기 | Mictoo',
  description:
    'MP4를 MP3로 무료로 변환하세요. 비디오를 드롭하면 깨끗한 128 kbps MP3 오디오 파일을 몇 초 안에 받을 수 있습니다. 가입 필요 없음, 워터마크 없음, 이메일 없음. 최대 25 MB.',
  alternates: { canonical: 'https://mictoo.com/ko/mp4-to-mp3', languages: LANGS },
  openGraph: {
    title: 'MP4에서 MP3로, 무료 온라인 변환기 | Mictoo',
    description: 'MP4를 MP3로 무료로 변환하세요. 128 kbps, 가입 필요 없음, 워터마크 없음.',
    url: 'https://mictoo.com/ko/mp4-to-mp3',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MP4에서 MP3로, 무료 온라인 변환기',
    description: 'MP4를 MP3로 무료로 변환하세요. 128 kbps, 가입 필요 없음, 워터마크 없음.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function KoMp4ToMp3Page() {
  return (
    <ConverterPageLayout
      locale="ko"
      mode="converter"
      from="mp4"
      to="mp3"
      currentHref="/ko/mp4-to-mp3"

      badge="MP4 → MP3 · 무료 · 가입 필요 없음"
      h1First="MP4에서 MP3로"
      h1Second="무료 온라인 변환기"
      subtitle="MP4 비디오를 드롭하면 몇 초 안에 깨끗한 MP3 오디오 파일을 받을 수 있습니다. 워터마크 없음, 이메일 없음, 대기 없음."

      outputFormat="MP3"
      outputQuality="128 kbps"
      outputAudio="스테레오"

      stepsTitle="MP4에서 MP3로 변환하는 방법"
      steps={[
        {
          icon: 'upload',
          title: 'MP4 드롭하기',
          desc: 'MP4 비디오를 업로드하세요. 최대 25 MB의 파일을 지원합니다.',
        },
        {
          icon: 'waveform',
          title: '오디오 추출',
          desc: '서버가 오디오 트랙을 추출하고 MP3로 인코딩합니다.',
        },
        {
          icon: 'download',
          title: 'MP3 다운로드',
          desc: '몇 초 안에 깨끗한 MP3 파일을 받으세요.',
        },
      ]}

      previewInputName="meeting-recording.mp4"
      previewInputSize="128.4 MB · 00:45:32"
      previewOutputName="meeting-recording.mp3"
      previewOutputSize="00:45:32 · 128 kbps"

      whyTitle="왜 Mictoo를 MP4에서 MP3로 변환할까요?"
      whyCards={[
        {
          icon: 'target',
          title: '변환만 집중',
          desc: '우리는 MP4를 MP3로 빠르고 신뢰성 있게 변환하는 것에 집중합니다.',
        },
        {
          icon: 'fileAudio',
          title: '작고 보편적인 MP3',
          desc: 'MP3는 어디서나 작동하며 파일 크기를 작게 유지합니다.',
        },
        {
          icon: 'lock',
          title: '파일 삭제',
          desc: '업로드된 파일은 안전하게 처리되며 변환 후 삭제됩니다.',
        },
        {
          icon: 'shield',
          title: '워터마크나 오디오 태그 없음',
          desc: '워터마크나 추가 태그 없이 깨끗한 MP3를 받으세요.',
        },
      ]}

      scenariosTitle="MP4에서 MP3로 변환이 유용한 경우"
      scenarios={[
        { icon: 'headphones', title: '비디오 팟캐스트 저장' },
        { icon: 'cap',        title: '강의 오디오 추출' },
        { icon: 'mail',       title: '더 작은 파일 이메일로 전송' },
        { icon: 'editPen',    title: '전사 준비' },
        { icon: 'waveform',   title: '배경 오디오' },
        { icon: 'archive',    title: '음성 녹음 보관' },
      ]}

      tipsTitle="깨끗한 변환을 위한 팁"
      tips={[
        '먼저 큰 비디오를 잘라내세요.',
        '128 kbps는 음성과 음악에 적합합니다.',
        '기본 오디오 트랙이 사용됩니다.',
        'DRM 보호된 비디오는 지원되지 않습니다.',
      ]}
      processTitle="변환 중에 발생하는 일"
      processSteps={[
        'MP4 컨테이너',
        '오디오 트랙 추출',
        'MP3 인코딩',
      ]}

      compareTitle="MP4와 MP3"
      compareRows={[
        { fmt: 'MP4', contains: '예', size: '대형', best: '비디오 시청 및 공유' },
        { fmt: 'MP3', contains: '아니오',  size: '소형', best: '청취, 오디오 전용' },
      ]}

      faq={[
        { q: 'MP4에서 MP3로 변환기가 무료인가요?', a: '예. 25 MB까지의 파일에 대해 계정이 필요 없으며, 시간 제한도 없고, 출력에 워터마크도 없습니다. 마케팅 페이지의 광고가 서버 비용을 충당합니다.' },
        { q: '변환이 오디오 품질을 저하시킵니까?', a: '약간. MP3는 손실 형식이지만, 128 kbps에서 품질 손실은 음성과 일반 음악 재생에서는 들리지 않습니다. 무손실이 필요하면 WAV로 변환하세요.' },
        { q: '업로드된 파일이 저장되나요?', a: '아니요. 당신의 MP4는 변환되는 동안 Vercel Blob 저장소에 잠시 저장되며, 그 후 삭제됩니다. 결과 MP3는 한 시간 이내에 삭제됩니다. MP3를 로컬에 저장하세요.' },
        { q: '큰 MP4를 변환할 수 있나요?', a: '현재 업로드 한도는 25 MB입니다. MP4가 더 크면 QuickTime, 사진 앱 또는 다른 비디오 편집기에서 잘라낸 후 업로드하세요.' },
        { q: '모바일에서 작동하나요?', a: '예. 이 페이지는 모바일 친화적이며 iOS Safari와 Android Chrome에서 업로드가 가능합니다. iPhone에서는 비디오를 먼저 파일로 공유하여 선택할 수 있습니다.' },
      ]}

      ctaHeadline="지금 MP4를 MP3로 변환하세요"
      ctaSubtitle="비디오를 드롭하고 몇 초 안에 깨끗한 MP3를 받으세요. 가입 필요 없음. 워터마크 없음."
      ctaButton="MP4 파일 선택"

      moreTools={[
        { href: '/ko/wav-to-mp3',  label: 'WAV에서 MP3로' },
        { href: '/ko/webm-to-mp3', label: 'WEBM에서 MP3로' },
        { href: '/ko/flac-to-mp3', label: 'FLAC에서 MP3로' },
        { href: '/ko/aac-to-mp3',  label: 'AAC에서 MP3로' },
        { href: '/ko/m4a-to-mp3',  label: 'M4A에서 MP3로' },
        { href: '/ko/mp3-to-wav',  label: 'MP3에서 WAV로' },
      ]}
    />
  )
}