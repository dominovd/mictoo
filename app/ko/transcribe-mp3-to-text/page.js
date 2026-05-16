import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/transcribe-mp3-to-text',
  'fr': 'https://mictoo.com/fr/transcribe-mp3-to-text',
  'de': 'https://mictoo.com/de/transcribe-mp3-to-text',
  'es': 'https://mictoo.com/es/transcribe-mp3-to-text',
  'ru': 'https://mictoo.com/ru/transcribe-mp3-to-text',
  'it': 'https://mictoo.com/it/transcribe-mp3-to-text',
  'pt': 'https://mictoo.com/pt/transcribe-mp3-to-text',
  'pl': 'https://mictoo.com/pl/transcribe-mp3-to-text',
  'ja': 'https://mictoo.com/ja/transcribe-mp3-to-text',
  'ko': 'https://mictoo.com/ko/transcribe-mp3-to-text',
  'x-default': 'https://mictoo.com/transcribe-mp3-to-text',
}

export const metadata = {
  title: 'MP3를 텍스트로 — 무료 온라인 MP3 받아쓰기 | Mictoo',
  description: 'MP3를 온라인에서 무료로 텍스트로 변환. MP3 파일을 업로드하고 몇 초 만에 정확한 받아쓰기를 받으세요. AI. 가입 불필요.',
  alternates: { canonical: 'https://mictoo.com/ko/transcribe-mp3-to-text', languages: LANGS },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'MP3를 텍스트로 — Mictoo',
  url: 'https://mictoo.com/ko/transcribe-mp3-to-text',
  description: 'AI를 사용한 무료 온라인 MP3에서 텍스트로 변환기.',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}

export default function KoMP3ToTextPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LandingLayout
        badge="무료 · 가입 불필요 · 즉시"
        h1={<>MP3를 텍스트로 변환<br /><span className="text-brand-600">온라인, 무료</span></>}
        subtitle="모든 MP3 파일을 업로드하고 몇 초 만에 정확한 텍스트 받아쓰기를 받으세요. 인터뷰, 팟캐스트, 강의, 음성 메모 등에 대응."
        defaultLanguage="ko"
        features={[
          { icon: '🎵', title: '모든 MP3', desc: '음성 녹음, 팟캐스트 에피소드, 음악 인터뷰, 강의 — 최대 25MB의 모든 MP3에서 작동.' },
          { icon: '🌍', title: '50개 이상의 언어', desc: '자동 언어 감지. MP3는 한국어, 영어, 일본어, 중국어, 스페인어 또는 다른 46개 언어일 수 있습니다.' },
          { icon: '📋', title: '복사 또는 다운로드', desc: '편집 가능한 텍스트로 받아쓰기를 받으세요. .txt 또는 .srt(자막)로 다운로드.' },
        ]}
        faq={[
          { q: 'MP3를 텍스트로 변환하는 방법은?', a: '위 도구로 MP3 파일을 업로드하세요. Mictoo가 AI로 자동으로 받아쓰기하고 몇 초 만에 텍스트를 표시합니다.' },
          { q: 'MP3에서 텍스트로 변환이 무료인가요?', a: '네, 완전히 무료입니다. 계정 없음. 업로드하고 받아쓰기하세요.' },
          { q: 'MP3의 최대 크기는?', a: '최대 25MB. 더 긴 녹음의 경우 파일을 압축하거나 짧은 세그먼트로 분할하세요.' },
          { q: 'MP3 받아쓰기가 얼마나 정확한가요?', a: 'Mictoo는 AI를 사용하며 일반적으로 깨끗한 녹음에서 95% 이상의 정확도를 달성합니다. 배경 소음이나 강한 억양이 있는 경우 품질이 다를 수 있습니다.' },
          { q: 'MP3 파일에서 자막을 받을 수 있나요?', a: '네. 받아쓰기 후 .srt 버튼을 클릭하여 타임스탬프가 있는 자막 파일을 다운로드할 수 있습니다.' },
        ]}
        relatedLinks={[
          { href: '/ko/transcribe-audio-to-text', label: '오디오를 텍스트로' },
          { href: '/ko/transcribe-video-to-text', label: '비디오를 텍스트로' },
          { href: '/ko', label: '모든 포맷' },
        ]}
      />
    </>
  )
}
