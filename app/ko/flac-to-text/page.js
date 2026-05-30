import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/flac-to-text',
  'fr': 'https://mictoo.com/fr/flac-to-text',
  'de': 'https://mictoo.com/de/flac-to-text',
  'es': 'https://mictoo.com/es/flac-to-text',
  'ru': 'https://mictoo.com/ru/flac-to-text',
  'it': 'https://mictoo.com/it/flac-to-text',
  'pt': 'https://mictoo.com/pt/flac-to-text',
  'pl': 'https://mictoo.com/pl/flac-to-text',
  'ja': 'https://mictoo.com/ja/flac-to-text',
  'ko': 'https://mictoo.com/ko/flac-to-text',
  'x-default': 'https://mictoo.com/flac-to-text',
}

export const metadata = {
  title: 'FLAC을 텍스트로 — 무료 온라인 FLAC 오디오 받아쓰기 | Mictoo',
  description: 'FLAC 파일을 온라인에서 무료로 텍스트로 변환. 모든 FLAC 녹음을 업로드하고 몇 초 만에 정확한 받아쓰기를 받으세요. 가입 불필요.',
  alternates: { canonical: 'https://mictoo.com/ko/flac-to-text', languages: LANGS },

  openGraph: {
    title: "FLAC을 텍스트로 — 무료 온라인 FLAC 오디오 받아쓰기 | Mictoo",
    description: "FLAC 파일을 온라인에서 무료로 텍스트로 변환. 모든 FLAC 녹음을 업로드하고 몇 초 만에 정확한 받아쓰기를 받으세요. 가입 불필요.",
    url: "https://mictoo.com/ko/flac-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FLAC을 텍스트로 — 무료 온라인 FLAC 오디오 받아쓰기 | Mictoo",
    description: "FLAC 파일을 온라인에서 무료로 텍스트로 변환. 모든 FLAC 녹음을 업로드하고 몇 초 만에 정확한 받아쓰기를 받으세요. 가입 불필요.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function KoFlacToTextPage() {
  return (
    <LandingLayout
      badge="FLAC · 무손실 · 무료"
      h1={<>FLAC을 텍스트로<br /><span className="text-brand-600">무료 온라인 FLAC 받아쓰기</span></>}
      subtitle="모든 FLAC 오디오 파일을 업로드하고 즉시 텍스트로 변환. FLAC의 무손실 품질은 우수한 받아쓰기 정확도를 보장합니다. 계정 불필요."
      defaultLanguage="ko"
      features={[
        { icon: '🎵', title: '무손실 오디오 품질', desc: 'FLAC 파일은 완전한 오디오 품질을 보존하여 AI 받아쓰기가 최대 정확도를 달성하는 데 도움이 됩니다.' },
        { icon: '⚡', title: '즉시 결과', desc: '대부분의 FLAC 파일은 품질과 비트 심도에 관계없이 30초 이내에 받아쓰기됩니다.' },
        { icon: '📄', title: '.txt 및 .srt 내보내기', desc: '받아쓰기를 일반 텍스트 또는 타임스탬프 SRT 파일로 다운로드.' },
      ]}
      faq={[
        { q: 'FLAC 파일을 텍스트로 변환하는 방법은?', a: '위 도구로 FLAC 파일을 업로드하세요. AI가 받아쓰기를 수행하고 몇 초 만에 텍스트를 표시합니다.' },
        { q: 'FLAC이 MP3보다 더 정확하게 받아쓰기되나요?', a: 'FLAC의 무손실 품질은 강하게 압축된 포맷과 비교하여 조용하거나 복잡한 오디오에서 정확도를 약간 향상시킬 수 있습니다.' },
        { q: 'FLAC에서 텍스트 변환이 무료인가요?', a: '네, 완전히 무료입니다. 계정이나 가입이 필요하지 않습니다.' },
        { q: 'FLAC의 최대 크기는?', a: '최대 25MB. FLAC 파일은 무손실 압축으로 인해 크기가 큽니다 — 파일이 제한을 초과하는 경우 손실 포맷으로 변환을 고려하세요.' },
      ]}
      relatedLinks={[
        { href: '/ko/wav-to-text', label: 'WAV를 텍스트로' },
        { href: '/ko/transcribe-mp3-to-text', label: 'MP3를 텍스트로' },
        { href: '/ko', label: '모든 포맷' },
      ]}
    />
  )
}
