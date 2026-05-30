import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/webm-to-text',
  'fr': 'https://mictoo.com/fr/webm-to-text',
  'de': 'https://mictoo.com/de/webm-to-text',
  'es': 'https://mictoo.com/es/webm-to-text',
  'ru': 'https://mictoo.com/ru/webm-to-text',
  'it': 'https://mictoo.com/it/webm-to-text',
  'pt': 'https://mictoo.com/pt/webm-to-text',
  'pl': 'https://mictoo.com/pl/webm-to-text',
  'ja': 'https://mictoo.com/ja/webm-to-text',
  'ko': 'https://mictoo.com/ko/webm-to-text',
  'x-default': 'https://mictoo.com/webm-to-text',
}

export const metadata = {
  title: 'WEBM을 텍스트로 — 무료 온라인 WEBM 받아쓰기 | Mictoo',
  description: 'WEBM 오디오·비디오 파일을 온라인에서 무료로 텍스트로 변환. 모든 WEBM 녹화를 업로드하고 즉시 정확한 받아쓰기를 받으세요. 가입 불필요.',
  alternates: { canonical: 'https://mictoo.com/ko/webm-to-text', languages: LANGS },

  openGraph: {
    title: "WEBM을 텍스트로 — 무료 온라인 WEBM 받아쓰기 | Mictoo",
    description: "WEBM 오디오·비디오 파일을 온라인에서 무료로 텍스트로 변환. 모든 WEBM 녹화를 업로드하고 즉시 정확한 받아쓰기를 받으세요. 가입 불필요.",
    url: "https://mictoo.com/ko/webm-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "WEBM을 텍스트로 — 무료 온라인 WEBM 받아쓰기 | Mictoo",
    description: "WEBM 오디오·비디오 파일을 온라인에서 무료로 텍스트로 변환. 모든 WEBM 녹화를 업로드하고 즉시 정확한 받아쓰기를 받으세요. 가입 불필요.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function KoWebmToTextPage() {
  return (
    <LandingLayout
      badge="WEBM · 브라우저 녹화 · 무료"
      h1={<>WEBM을 텍스트로<br /><span className="text-brand-600">무료 온라인 WEBM 받아쓰기</span></>}
      subtitle="모든 WEBM 오디오 또는 비디오 파일을 업로드하고 몇 초 만에 정확한 텍스트 받아쓰기를 받으세요. WEBM은 브라우저, 화면 녹화기 및 화상 회의 도구에서 널리 사용됩니다. 계정 불필요."
      defaultLanguage="ko"
      features={[
        { icon: '🖥️', title: '브라우저와 화면', desc: 'WEBM은 Chrome 및 Firefox 화면 녹화, Loom 클립 및 WebRTC 녹화의 기본 포맷입니다.' },
        { icon: '🎬', title: 'WEBM 오디오와 비디오', desc: '오디오 전용 WEBM과 비디오 WEBM 모두 지원. 오디오는 자동으로 추출됩니다.' },
        { icon: '📄', title: '.txt 및 .srt 내보내기', desc: '받아쓰기를 일반 텍스트로 또는 타임스탬프 SRT 파일로 다운로드.' },
      ]}
      faq={[
        { q: 'WEBM을 텍스트로 변환하는 방법은?', a: '위에 WEBM 파일을 업로드하세요. 받아쓰기는 몇 초 만에 자동으로 생성됩니다.' },
        { q: 'WEBM에서 텍스트 변환이 무료인가요?', a: '네, 완전히 무료입니다. 계정이나 가입이 필요하지 않습니다.' },
        { q: 'Chrome 화면 녹화를 받아쓰기할 수 있나요?', a: '네. Chrome의 내장 화면 녹화 도구는 비디오를 WEBM으로 저장합니다. 파일을 직접 업로드하여 받아쓰기를 받으세요.' },
        { q: 'WEBM의 최대 크기는?', a: '최대 25MB. 더 큰 녹화의 경우 먼저 오디오 트랙을 추출하여 크기를 줄이세요.' },
      ]}
      relatedLinks={[
        { href: '/ko/transcribe-video-to-text', label: '비디오를 텍스트로' },
        { href: '/ko/wav-to-text', label: 'WAV를 텍스트로' },
        { href: '/ko', label: '모든 포맷' },
      ]}
    />
  )
}
