import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/mp3-to-wav',
  'fr': 'https://mictoo.com/fr/mp3-to-wav',
  'de': 'https://mictoo.com/de/mp3-to-wav',
  'es': 'https://mictoo.com/es/mp3-to-wav',
  'ru': 'https://mictoo.com/ru/mp3-to-wav',
  'it': 'https://mictoo.com/it/mp3-to-wav',
  'pt': 'https://mictoo.com/pt/mp3-to-wav',
  'pl': 'https://mictoo.com/pl/mp3-to-wav',
  'ja': 'https://mictoo.com/ja/mp3-to-wav',
  'ko': 'https://mictoo.com/ko/mp3-to-wav',
  'x-default': 'https://mictoo.com/mp3-to-wav',
}

export const metadata = {
  title: 'MP3에서 WAV로, 무료 온라인 변환기 | Mictoo',
  description:
    'MP3를 WAV로 무료로 변환하세요. 압축된 MP3를 비압축 16비트/44.1 kHz WAV로 확장하여 오디오 편집에 사용하세요. 회원가입 필요 없고, 워터마크도 없습니다.',
  alternates: { canonical: 'https://mictoo.com/ko/mp3-to-wav', languages: LANGS },
  openGraph: {
    title: 'MP3에서 WAV로, 무료 온라인 변환기 | Mictoo',
    description: 'MP3를 비압축 16비트/44.1 kHz WAV로 변환합니다. 편집용입니다.',
    url: 'https://mictoo.com/ko/mp3-to-wav',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MP3에서 WAV로, 무료 온라인 변환기',
    description: 'DAW 편집 및 마스터링을 위한.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function KoMp3ToWavPage() {
  return (
    <ConverterPageLayout
      locale="ko"
      mode="converter" from="mp3" to="wav" currentHref="/ko/mp3-to-wav"
      badge="MP3 → WAV · 무료 · 편집자 친화적"
      h1First="MP3에서 WAV로"
      h1Second="무료 온라인 변환기"
      subtitle="MP3를 드롭하면 비압축 16비트 / 44.1 kHz WAV를 받아 DAW 편집, 마스터링 또는 CD 굽기에 사용하세요. 워터마크도 없고, 이메일도 필요 없습니다."
      outputFormat="WAV" outputQuality="16비트 / 44.1 kHz" outputAudio="스테레오"
      stepsTitle="MP3에서 WAV로 변환하는 방법"
      steps={[
        { icon: 'upload',   title: 'MP3 드롭하기',       desc: '비트 전송률에 관계없이, 최대 25 MB까지 익명으로 가능합니다.' },
        { icon: 'waveform', title: 'PCM으로 디코딩',   desc: 'ffmpeg가 MP3를 비압축 16비트 / 44.1 kHz PCM으로 디코딩하여 WAV 컨테이너에 포장합니다.' },
        { icon: 'download', title: 'WAV 다운로드',   desc: 'Audacity, Pro Tools, Logic, Ableton 및 모든 오디오 편집기에 적합합니다.' },
      ]}
      previewInputName="voiceover.mp3"
      previewInputSize="4.6 MB · 00:05:00 · 128 kbps"
      previewOutputName="voiceover.wav"
      previewOutputSize="00:05:00 · 16비트 / 44.1 kHz · 50 MB"
      whyTitle="MP3에서 WAV로 변환할 때 Mictoo를 사용하는 이유"
      whyCards={[
        { icon: 'target',   title: 'DAW 준비 완료 출력',       desc: '비압축 PCM은 오디오 편집기와 마스터링 도구가 기대하는 것입니다.' },
        { icon: 'fileAudio',title: '표준 16비트 / 44.1', desc: '오디오 편집기, 마스터링 도구 및 CD 제작 소프트웨어에 널리 지원되는 PCM 설정입니다.' },
        { icon: 'lock',     title: '파일은 변환 후 삭제',    desc: '업로드된 MP3는 변환 후 삭제되며, WAV는 한 시간 이내에 삭제됩니다.' },
        { icon: 'shield',   title: '워터마크 또는 태그 없음',    desc: '그냥 오디오, PCM으로 디코딩되었습니다. 브랜드 소개도 없고, 메타데이터도 주입되지 않습니다.' },
      ]}
      scenariosTitle="MP3에서 WAV로 변환이 유용한 경우"
      scenarios={[
        { icon: 'editPen',    title: 'Audacity 편집' },
        { icon: 'waveform',   title: 'Pro Tools 가져오기' },
        { icon: 'headphones', title: '마스터링 작업 흐름' },
        { icon: 'archive',    title: 'CD 굽기' },
        { icon: 'video',      title: 'WAV 요구 사항이 있는 비디오 편집기' },
        { icon: 'target',     title: '음성 복제 훈련 입력' },
      ]}
      tipsTitle="깨끗한 MP3에서 WAV로 변환을 위한 팁"
      tips={[
        'WAV는 MP3보다 10배 큽니다 (분당 약 10 MB).',
        '출력은 "진정한" 무손실이 아닙니다 ,  MP3 신호를 보존합니다.',
        '진정한 무손실 오디오를 원하면 FLAC 또는 원본 WAV 마스터에서 시작하세요.',
        '소스 파일을 현재 25 MB 업로드 제한 이하로 유지하세요.',
      ]}
      processTitle="변환 중에 발생하는 일"
      processSteps={['MP3 스트림', 'PCM으로 디코드', 'WAV 컨테이너']}
      compareTitle="MP3와 WAV"
      compareRows={[
        { fmt: 'MP3', contains: '아니요', size: '작음 (~1 MB/분)', best: '공유, 휴대폰, 스트리밍' },
        { fmt: 'WAV', contains: '아니요', size: '큼 (~10 MB/분)', best: '편집, 마스터링, CD 굽기' },
      ]}
      faq={[
        { q: 'MP3에서 WAV로 변환하면 무손실 품질이 복구되나요?', a: '아니요. MP3는 손실 형식입니다; WAV는 MP3 신호를 보존하지만 그 이상은 아닙니다. 진정한 무손실을 원하면 FLAC 또는 원본 WAV에서 시작해야 합니다.' },
        { q: '변환기가 무료인가요?', a: '네. 최대 25 MB의 파일은 계정 없이 변환할 수 있으며, 출력에는 워터마크가 없습니다.' },
        { q: 'WAV 파일이 이렇게 큰 이유는 무엇인가요?', a: 'WAV는 비압축 PCM입니다. 5 MB MP3는 대략 50 MB WAV로 변환됩니다. 이는 정상입니다.' },
        { q: '비트 깊이와 샘플링 주파수는 무엇인가요?', a: '16비트 / 44.1 kHz 스테레오 (CD 품질). 이는 표준 DAW 가져오기 형식입니다.' },
        { q: '파일이 저장되나요?', a: '아니요. 업로드된 MP3는 변환 후 삭제되며, WAV는 한 시간 이내에 삭제됩니다.' },
      ]}
      ctaHeadline="지금 MP3를 WAV로 변환하세요"
      ctaSubtitle="MP3를 드롭하고 편집을 위한 비압축 WAV를 받으세요."
      ctaButton="MP3 파일 선택"
      moreTools={[
        { href: '/ko/wav-to-mp3',  label: 'WAV에서 MP3로' },
        { href: '/ko/mp3-to-m4a',  label: 'MP3에서 M4A로' },
        { href: '/ko/flac-to-mp3', label: 'FLAC에서 MP3로' },
        { href: '/ko/wav-to-text', label: 'WAV에서 텍스트로' },
      ]}
    />
  )
}