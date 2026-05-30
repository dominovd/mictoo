import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/aac-to-text',
  'fr': 'https://mictoo.com/fr/aac-to-text',
  'de': 'https://mictoo.com/de/aac-to-text',
  'es': 'https://mictoo.com/es/aac-to-text',
  'ru': 'https://mictoo.com/ru/aac-to-text',
  'it': 'https://mictoo.com/it/aac-to-text',
  'pt': 'https://mictoo.com/pt/aac-to-text',
  'pl': 'https://mictoo.com/pl/aac-to-text',
  'ja': 'https://mictoo.com/ja/aac-to-text',
  'ko': 'https://mictoo.com/ko/aac-to-text',
  'x-default': 'https://mictoo.com/aac-to-text',
}

export const metadata = {
  title: 'AAC를 텍스트로 — 무료 온라인 AAC 오디오 받아쓰기 | Mictoo',
  description: 'AAC 오디오 파일을 무료로 텍스트로 받아쓰기. .aac, .m4a 또는 기타 AAC 인코딩 파일을 드래그하고 몇 초 만에 정확한 받아쓰기를 받으세요.',
  alternates: { canonical: 'https://mictoo.com/ko/aac-to-text', languages: LANGS },

  openGraph: {
    title: "AAC를 텍스트로 — 무료 온라인 AAC 오디오 받아쓰기 | Mictoo",
    description: "AAC 오디오 파일을 무료로 텍스트로 받아쓰기. .aac, .m4a 또는 기타 AAC 인코딩 파일을 드래그하고 몇 초 만에 정확한 받아쓰기를 받으세요.",
    url: "https://mictoo.com/ko/aac-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AAC를 텍스트로 — 무료 온라인 AAC 오디오 받아쓰기 | Mictoo",
    description: "AAC 오디오 파일을 무료로 텍스트로 받아쓰기. .aac, .m4a 또는 기타 AAC 인코딩 파일을 드래그하고 몇 초 만에 정확한 받아쓰기를 받으세요.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function KoAacToTextPage() {
  return (
    <LandingLayout
      badge="AAC · M4A · 무료"
      h1={<>AAC를 텍스트로<br /><span className="text-brand-600">무료 온라인 AAC 받아쓰기</span></>}
      subtitle="AAC 오디오 파일을 업로드하고 몇 초 만에 정확한 텍스트 받아쓰기를 받으세요. .aac 및 .m4a(MP4 컨테이너 내 AAC)와 작동합니다. 가입 불필요."
      defaultLanguage="ko"
      features={[
        { icon: '🎧', title: 'AAC 네이티브 지원', desc: 'AAC는 Apple 기기, YouTube 및 대부분의 스트리밍 서비스의 기본 오디오 코덱입니다. Mictoo는 .aac 및 .m4a를 변환 없이 직접 받아들입니다.' },
        { icon: '🎯', title: '높은 정확도', desc: 'AAC는 작은 파일 크기에서 고품질을 유지합니다 — AI 받아쓰기에 이상적. 깨끗한 녹음은 일반적으로 95% 이상의 정확도로 받아쓰기됩니다.' },
        { icon: '📥', title: '편집 및 내보내기', desc: '브라우저에서 받아쓰기를 검토하고 이름과 구두점을 수정한 다음 일반 .txt 또는 .srt 자막으로 다운로드.' },
      ]}
      faq={[
        { q: 'AAC 파일이란?', a: 'AAC(Advanced Audio Coding)는 iTunes, Apple Music, YouTube 및 대부분의 팟캐스트 앱에서 사용하는 손실 압축 오디오 포맷입니다. 파일에는 .aac 또는 .m4a 확장자가 있습니다. AAC는 동일한 비트레이트에서 MP3보다 더 나은 품질을 제공합니다.' },
        { q: '.aac와 .m4a의 차이는?', a: '둘 다 AAC 인코딩된 오디오를 포함합니다. .aac는 원시 오디오 스트림이며, .m4a는 MP4 컨테이너로 래핑됩니다(iTunes와 iPhone 음성 메모가 저장하는 방식). Mictoo는 둘 다 직접 지원합니다.' },
        { q: 'AAC를 무료로 텍스트로 변환하는 방법은?', a: '위 업로드 영역에 AAC 파일을 드래그하세요. Mictoo가 AI로 자동으로 받아쓰기하고 몇 초 만에 텍스트를 표시합니다. 복사 또는 .txt로 다운로드하세요.' },
        { q: 'AAC 파일의 최대 크기는?', a: '업로드당 최대 25MB. 128 kbps의 AAC로 25MB당 약 25분의 오디오, 64 kbps로 거의 1시간입니다. 더 긴 파일의 경우 비트레이트를 낮추거나 세그먼트로 분할하세요.' },
        { q: 'AAC 받아쓰기의 타임스탬프를 받을 수 있나요?', a: '네. 받아쓰기 후 정확한 타임스탬프가 있는 .srt 파일을 다운로드할 수 있습니다 — 받아쓰기를 원본 오디오 또는 비디오와 동기화하는 데 유용합니다.' },
      ]}
      relatedLinks={[
        { href: '/ko/m4a-to-text', label: 'M4A를 텍스트로' },
        { href: '/ko/transcribe-mp3-to-text', label: 'MP3를 텍스트로' },
        { href: '/ko', label: '모든 포맷' },
      ]}
    />
  )
}
