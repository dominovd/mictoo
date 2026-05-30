import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/ogg-to-text',
  'fr': 'https://mictoo.com/fr/ogg-to-text',
  'de': 'https://mictoo.com/de/ogg-to-text',
  'es': 'https://mictoo.com/es/ogg-to-text',
  'ru': 'https://mictoo.com/ru/ogg-to-text',
  'it': 'https://mictoo.com/it/ogg-to-text',
  'pt': 'https://mictoo.com/pt/ogg-to-text',
  'pl': 'https://mictoo.com/pl/ogg-to-text',
  'ja': 'https://mictoo.com/ja/ogg-to-text',
  'ko': 'https://mictoo.com/ko/ogg-to-text',
  'x-default': 'https://mictoo.com/ogg-to-text',
}

export const metadata = {
  title: 'OGG를 텍스트로 — 무료 온라인 OGG 오디오 받아쓰기 | Mictoo',
  description: 'OGG 오디오 파일을 온라인에서 무료로 텍스트로 변환. 모든 OGG Vorbis 녹음을 업로드하고 즉시 정확한 받아쓰기를 받으세요. 가입 불필요.',
  alternates: { canonical: 'https://mictoo.com/ko/ogg-to-text', languages: LANGS },

  openGraph: {
    title: "OGG를 텍스트로 — 무료 온라인 OGG 오디오 받아쓰기 | Mictoo",
    description: "OGG 오디오 파일을 온라인에서 무료로 텍스트로 변환. 모든 OGG Vorbis 녹음을 업로드하고 즉시 정확한 받아쓰기를 받으세요. 가입 불필요.",
    url: "https://mictoo.com/ko/ogg-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "OGG를 텍스트로 — 무료 온라인 OGG 오디오 받아쓰기 | Mictoo",
    description: "OGG 오디오 파일을 온라인에서 무료로 텍스트로 변환. 모든 OGG Vorbis 녹음을 업로드하고 즉시 정확한 받아쓰기를 받으세요. 가입 불필요.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function KoOggToTextPage() {
  return (
    <LandingLayout
      badge="OGG · Vorbis · 무료 · 즉시"
      h1={<>OGG를 텍스트로<br /><span className="text-brand-600">무료 온라인 OGG 받아쓰기</span></>}
      subtitle="모든 OGG 오디오 파일을 업로드하고 몇 초 만에 텍스트로 변환. OGG Vorbis와 OGG Opus 지원. 계정 불필요."
      defaultLanguage="ko"
      features={[
        { icon: '🎙️', title: 'OGG Vorbis 및 Opus', desc: '모든 출처의 OGG 파일 지원 — 녹음기, 브라우저, 메시징 앱.' },
        { icon: '🌍', title: '50개 이상의 언어', desc: '언어 자동 감지. 한국어, 영어, 일본어, 중국어, 스페인어, 프랑스어 등에서 작동합니다.' },
        { icon: '📄', title: '.txt 및 .srt 내보내기', desc: '일반 텍스트 또는 타임스탬프 SRT 파일로 다운로드.' },
      ]}
      faq={[
        { q: 'OGG를 텍스트로 변환하는 방법은?', a: '위에 OGG 파일을 업로드하세요. 받아쓰기는 몇 초 만에 자동으로 생성됩니다.' },
        { q: 'OGG에서 텍스트 변환이 무료인가요?', a: '네, 완전히 무료입니다. 가입이나 계정이 필요하지 않습니다.' },
        { q: 'OGG 파일의 최대 크기는?', a: '최대 25MB.' },
        { q: '다른 오디오 포맷은 어떤 것이 지원되나요?', a: 'MP3, MP4, WAV, M4A, FLAC, WEBM도 지원됩니다.' },
      ]}
      relatedLinks={[
        { href: '/ko/wav-to-text', label: 'WAV를 텍스트로' },
        { href: '/ko/flac-to-text', label: 'FLAC을 텍스트로' },
        { href: '/ko', label: '모든 포맷' },
      ]}
    />
  )
}
