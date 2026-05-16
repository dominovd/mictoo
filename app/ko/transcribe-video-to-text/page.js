import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/transcribe-video-to-text',
  'fr': 'https://mictoo.com/fr/transcribe-video-to-text',
  'de': 'https://mictoo.com/de/transcribe-video-to-text',
  'es': 'https://mictoo.com/es/transcribe-video-to-text',
  'ru': 'https://mictoo.com/ru/transcribe-video-to-text',
  'it': 'https://mictoo.com/it/transcribe-video-to-text',
  'pt': 'https://mictoo.com/pt/transcribe-video-to-text',
  'pl': 'https://mictoo.com/pl/transcribe-video-to-text',
  'ja': 'https://mictoo.com/ja/transcribe-video-to-text',
  'ko': 'https://mictoo.com/ko/transcribe-video-to-text',
  'x-default': 'https://mictoo.com/transcribe-video-to-text',
}

export const metadata = {
  title: '비디오를 텍스트로 — 무료 온라인 비디오 받아쓰기 | Mictoo',
  description: '비디오를 온라인에서 무료로 텍스트로 변환. MP4, WEBM 또는 MOV를 업로드하고 즉시 정확한 받아쓰기를 받으세요. AI. 계정 불필요.',
  alternates: { canonical: 'https://mictoo.com/ko/transcribe-video-to-text', languages: LANGS },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: '비디오를 텍스트로 — Mictoo',
  url: 'https://mictoo.com/ko/transcribe-video-to-text',
  description: '무료 온라인 비디오에서 텍스트로 변환기. MP4, WEBM 등 받아쓰기.',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}

export default function KoVideoToTextPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LandingLayout
        badge="MP4 · WEBM · 무료 · 즉시"
        h1={<>비디오를 텍스트로 변환<br /><span className="text-brand-600">무료 받아쓰기</span></>}
        subtitle="모든 비디오 파일 — YouTube 다운로드, 스크린캐스트, 인터뷰, 강의 — 을 업로드하고 몇 초 만에 발화된 단어를 텍스트로 받으세요."
        defaultLanguage="ko"
        features={[
          { icon: '🎬', title: 'MP4, WEBM 등', desc: 'MP4, WEBM, MPEG 및 기타 비디오 포맷 지원. 오디오는 자동으로 추출됩니다.' },
          { icon: '🎞️', title: 'SRT 자막', desc: '타임스탬프가 있는 .srt 파일을 다운로드 — YouTube 또는 모든 비디오 편집기에 업로드 준비 완료.' },
          { icon: '⚡', title: '즉시 결과', desc: '10분 비디오는 일반적으로 30초 이내에 받아쓰기됩니다. 대기열 없음, 대기 시간 없음.' },
        ]}
        faq={[
          { q: '비디오를 무료로 받아쓰기하는 방법은?', a: '위 도구로 비디오 파일을 업로드하세요. Mictoo가 오디오를 추출하고 AI로 받아쓰기합니다. 받아쓰기는 몇 초 만에 나타납니다.' },
          { q: '비디오에서 자막을 받을 수 있나요?', a: '네. 받아쓰기 후 .srt 다운로드 버튼을 클릭하여 YouTube, Premiere 또는 모든 편집 도구에 업로드할 수 있는 타임스탬프 자막 파일을 받을 수 있습니다.' },
          { q: '어떤 비디오 포맷이 지원되나요?', a: 'MP4, WEBM, MPEG. 오디오 파일(MP3, WAV, M4A, OGG, FLAC)도 지원됩니다.' },
          { q: 'YouTube 비디오에서 작동하나요?', a: '네 — 먼저 다운로더로 YouTube에서 자신의 비디오를 다운로드한 다음 받아쓰기를 위해 여기에 파일을 업로드하세요.' },
          { q: '크기 제한이 있나요?', a: '최대 25MB. 더 긴 비디오의 경우 먼저 오디오 트랙을 추출(예: ffmpeg 또는 온라인 변환기)하여 크기를 줄이세요.' },
        ]}
        relatedLinks={[
          { href: '/ko/transcribe-mp3-to-text', label: 'MP3를 텍스트로' },
          { href: '/ko/transcribe-audio-to-text', label: '오디오를 텍스트로' },
          { href: '/ko', label: '모든 포맷' },
        ]}
      />
    </>
  )
}
