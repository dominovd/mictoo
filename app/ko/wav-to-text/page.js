import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/wav-to-text',
  'fr': 'https://mictoo.com/fr/wav-to-text',
  'de': 'https://mictoo.com/de/wav-to-text',
  'es': 'https://mictoo.com/es/wav-to-text',
  'ru': 'https://mictoo.com/ru/wav-to-text',
  'it': 'https://mictoo.com/it/wav-to-text',
  'pt': 'https://mictoo.com/pt/wav-to-text',
  'pl': 'https://mictoo.com/pl/wav-to-text',
  'ja': 'https://mictoo.com/ja/wav-to-text',
  'ko': 'https://mictoo.com/ko/wav-to-text',
  'x-default': 'https://mictoo.com/wav-to-text',
}

export const metadata = {
  title: 'WAV를 텍스트로 — 무료 온라인 WAV 받아쓰기 | Mictoo',
  description: 'WAV 파일을 온라인에서 무료로 텍스트로 변환. 모든 WAV 오디오 파일을 업로드하고 몇 초 만에 정확한 받아쓰기를 받으세요. 가입 불필요.',
  alternates: { canonical: 'https://mictoo.com/ko/wav-to-text', languages: LANGS },

  openGraph: {
    title: "WAV를 텍스트로 — 무료 온라인 WAV 받아쓰기 | Mictoo",
    description: "WAV 파일을 온라인에서 무료로 텍스트로 변환. 모든 WAV 오디오 파일을 업로드하고 몇 초 만에 정확한 받아쓰기를 받으세요. 가입 불필요.",
    url: "https://mictoo.com/ko/wav-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "WAV를 텍스트로 — 무료 온라인 WAV 받아쓰기 | Mictoo",
    description: "WAV 파일을 온라인에서 무료로 텍스트로 변환. 모든 WAV 오디오 파일을 업로드하고 몇 초 만에 정확한 받아쓰기를 받으세요. 가입 불필요.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function KoWavToTextPage() {
  return (
    <LandingLayout
      badge="WAV · 무료 · 즉시"
      h1={<>WAV를 텍스트로<br /><span className="text-brand-600">무료 온라인 WAV 받아쓰기</span></>}
      subtitle="모든 WAV 오디오 파일을 업로드하고 몇 초 만에 정확한 텍스트 받아쓰기를 받으세요. 인터뷰, 통화, 강의, 음성 메모 등 모든 WAV 녹음 지원. 계정 불필요."
      defaultLanguage="ko"
      features={[
        { icon: '🎙️', title: '모든 WAV', desc: '표준 WAV, PCM, 방송용 WAV — 최대 25MB의 모든 WAV 포맷.' },
        { icon: '⏱️', title: '타임스탬프 포함', desc: '받아쓰기를 .txt 또는 타임코드가 있는 .srt 자막 파일로 다운로드.' },
        { icon: '🌍', title: '50개 이상의 언어', desc: '언어 자동 감지. 한국어, 영어, 일본어, 중국어, 스페인어, 프랑스어, 독일어 등 많은 언어에서 작동합니다.' },
      ]}
      faq={[
        { q: 'WAV 파일을 텍스트로 변환하는 방법은?', a: '위 도구로 WAV 파일을 업로드하세요. Mictoo가 AI로 자동으로 받아쓰기하고 몇 초 만에 텍스트를 표시합니다.' },
        { q: 'WAV에서 텍스트 변환이 무료인가요?', a: '네, 완전히 무료입니다. 계정 없음. WAV를 업로드하세요 — 월별 분 할당량 없음, 가입 없음.' },
        { q: 'WAV의 최대 크기는?', a: '최대 25MB. 더 큰 녹음의 경우 먼저 MP3로 변환하거나 녹음을 세그먼트로 분할하세요.' },
        { q: 'WAV에서 타임스탬프 받아쓰기를 받을 수 있나요?', a: '네. 받아쓰기 후 .srt 버튼을 클릭하여 각 세그먼트의 정확한 타임스탬프가 포함된 자막 파일을 다운로드할 수 있습니다.' },
        { q: '다른 오디오 포맷은 어떤 것이 지원되나요?', a: 'Mictoo는 WAV 외에도 MP3, MP4, M4A, OGG, WEBM 및 FLAC도 지원합니다.' },
      ]}
      relatedLinks={[
        { href: '/ko/transcribe-mp3-to-text', label: 'MP3를 텍스트로' },
        { href: '/ko/transcribe-audio-to-text', label: '오디오를 텍스트로' },
        { href: '/ko', label: '모든 포맷' },
      ]}
    />
  )
}
