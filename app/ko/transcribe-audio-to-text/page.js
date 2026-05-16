import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/transcribe-audio-to-text',
  'fr': 'https://mictoo.com/fr/transcribe-audio-to-text',
  'de': 'https://mictoo.com/de/transcribe-audio-to-text',
  'es': 'https://mictoo.com/es/transcribe-audio-to-text',
  'ru': 'https://mictoo.com/ru/transcribe-audio-to-text',
  'it': 'https://mictoo.com/it/transcribe-audio-to-text',
  'pt': 'https://mictoo.com/pt/transcribe-audio-to-text',
  'pl': 'https://mictoo.com/pl/transcribe-audio-to-text',
  'ja': 'https://mictoo.com/ja/transcribe-audio-to-text',
  'ko': 'https://mictoo.com/ko/transcribe-audio-to-text',
  'x-default': 'https://mictoo.com/transcribe-audio-to-text',
}

export const metadata = {
  title: '오디오를 텍스트로 — 무료 온라인 오디오 받아쓰기 | Mictoo',
  description: '오디오를 온라인에서 무료로 텍스트로 받아쓰기. 모든 오디오 파일을 업로드하고 즉시 정확한 받아쓰기를 받으세요. 50개 이상의 언어. AI.',
  alternates: { canonical: 'https://mictoo.com/ko/transcribe-audio-to-text', languages: LANGS },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: '오디오를 텍스트로 — Mictoo',
  url: 'https://mictoo.com/ko/transcribe-audio-to-text',
  description: '무료 온라인 오디오에서 텍스트로 변환기. MP3, WAV, M4A, OGG, FLAC 등 지원.',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}

export default function KoAudioToTextPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LandingLayout
        badge="MP3 · WAV · M4A · FLAC · 무료"
        h1={<>오디오를 텍스트로<br /><span className="text-brand-600">무료 AI 받아쓰기</span></>}
        subtitle="모든 오디오 녹음을 텍스트로 변환하는 가장 빠른 방법. 파일을 업로드 — 계정 불필요, 구독 불필요, 대기 시간 없음."
        defaultLanguage="ko"
        features={[
          { icon: '🎙️', title: '모든 오디오 포맷', desc: 'MP3, WAV, M4A, OGG, FLAC, WEBM — 최대 25MB의 모든 오디오 파일.' },
          { icon: '🧠', title: 'AI 정확도', desc: '수십만 시간의 다국어 오디오로 훈련된 AI로 업계 수준의 정확도를 제공합니다.' },
          { icon: '🔒', title: '비공개 및 안전', desc: '오디오는 저장되지 않습니다. 파일은 한 번 처리된 후 즉시 삭제됩니다.' },
        ]}
        faq={[
          { q: '최고의 무료 오디오에서 텍스트 변환기는?', a: 'Mictoo는 가장 정확한 무료 음성 인식 모델 중 하나로 여겨지는 AI를 사용합니다. 50개 이상의 언어를 지원하며 계정이 필요하지 않습니다.' },
          { q: '오디오 받아쓰기가 얼마나 정확한가요?', a: '우리의 AI는 깨끗한 녹음에서 95% 이상의 정확도를 달성합니다. 배경 소음이나 강한 억양은 정확도를 약간 낮출 수 있습니다.' },
          { q: '어떤 오디오 포맷이 지원되나요?', a: 'MP3, WAV, M4A, OGG, FLAC, WEBM, MPEG. 비디오 파일(MP4)도 허용됩니다.' },
          { q: '오디오 받아쓰기는 얼마나 걸리나요?', a: '10분 녹음은 보통 15-30초 만에 받아쓰기됩니다. 대기열 없음 — 파일은 즉시 처리됩니다.' },
          { q: '전화 통화 녹음을 받아쓰기할 수 있나요?', a: '네. MP3, WAV 또는 M4A의 통화 녹음이 잘 작동합니다. 여러 화자가 있는 오디오는 단일 텍스트 블록으로 받아쓰기됩니다(화자 레이블은 프로 도구가 필요).' },
          { q: '언어를 선택해야 하나요?', a: '아니요 — 언어가 자동 감지됩니다. 감지 결과가 좋지 않으면 드롭다운에서 수동으로 언어를 선택할 수 있습니다.' },
        ]}
        relatedLinks={[
          { href: '/ko/transcribe-mp3-to-text', label: 'MP3를 텍스트로' },
          { href: '/ko/transcribe-video-to-text', label: '비디오를 텍스트로' },
          { href: '/ko', label: '모든 포맷' },
        ]}
      />
    </>
  )
}
