import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: '오디오와 비디오를 텍스트로 변환하는 AI 받아쓰기, 무료 — Mictoo',
  description: '오디오와 비디오를 무료로 텍스트로 변환. 가입 불필요, AI 사용. MP3, MP4, WAV, 50개 이상의 언어 지원.',
  alternates: {
    canonical: 'https://mictoo.com/ko',
    languages: {
      'en': 'https://mictoo.com',
      'fr': 'https://mictoo.com/fr',
      'de': 'https://mictoo.com/de',
      'es': 'https://mictoo.com/es',
      'ru': 'https://mictoo.com/ru',
      'it': 'https://mictoo.com/it',
      'pt': 'https://mictoo.com/pt',
      'pl': 'https://mictoo.com/pl',
      'ja': 'https://mictoo.com/ja',
      'ko': 'https://mictoo.com/ko',
      'x-default': 'https://mictoo.com',
    },
  },
  openGraph: {
    title: 'Mictoo — 무료 AI 오디오·비디오 받아쓰기',
    description: '오디오 또는 비디오를 업로드하고 몇 초 만에 받아쓰기를 받으세요.',
    url: 'https://mictoo.com/ko',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630, alt: 'Mictoo — 무료 AI 오디오·비디오 받아쓰기' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mictoo — 무료 AI 받아쓰기',
    description: '오디오 또는 비디오를 업로드하고 몇 초 만에 받아쓰기를 받으세요.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function KoreanPage() {
  return (
    <LandingLayout
      badge="AI · 무료 · 가입 불필요 · 50개 이상의 언어"
      h1={<>오디오와 비디오를 텍스트로<br /><span className="text-brand-600">AI 기반, 무료 온라인 받아쓰기</span></>}
      subtitle="모든 오디오 또는 비디오 파일을 업로드하고 몇 초 만에 정확한 AI 받아쓰기를 받으세요. 계정 등록은 필요하지 않습니다."
      defaultLanguage="ko"
      features={[
        {
          icon: '🎙️',
          title: '모든 오디오 포맷',
          desc: 'MP3, MP4, WAV, M4A, OGG, WEBM, FLAC. 최대 25MB.',
        },
        {
          icon: '🇰🇷',
          title: '한국어와 50개 이상의 언어',
          desc: '자동 언어 감지. 한국어, 영어, 일본어, 중국어 등 다양한 언어 지원.',
        },
        {
          icon: '📥',
          title: '.txt 또는 .srt로 다운로드',
          desc: '브라우저에서 받아쓰기를 편집하고 텍스트 또는 자막으로 다운로드.',
        },
      ]}
      faq={[
        {
          q: '오디오를 무료로 텍스트로 변환하는 방법은?',
          a: '위에서 오디오 파일을 업로드하세요. Mictoo가 OpenAI의 Whisper로 자동으로 받아쓰기를 수행하고 몇 초 만에 텍스트를 표시합니다.',
        },
        {
          q: '한국어 음성 인식이 잘 작동하나요?',
          a: '네. Mictoo의 기반인 Whisper 모델은 수천 시간의 한국어 오디오로 훈련되어 높은 정확도를 제공합니다.',
        },
        {
          q: '파일이 서버에 저장되나요?',
          a: '아니요. 파일은 즉시 처리되며 서버에 저장되지 않습니다.',
        },
      ]}
      relatedLinks={[
        { href: '/', label: 'English' },
        { href: '/fr', label: 'Français' },
        { href: '/de', label: 'Deutsch' },
        { href: '/es', label: 'Español' },
        { href: '/ru', label: 'Русский' },
        { href: '/it', label: 'Italiano' },
        { href: '/pt', label: 'Português' },
        { href: '/pl', label: 'Polski' },
        { href: '/ja', label: '日本語' },
      ]}
    />
  )
}
