import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/m4a-to-text',
  'fr': 'https://mictoo.com/fr/m4a-to-text',
  'de': 'https://mictoo.com/de/m4a-to-text',
  'es': 'https://mictoo.com/es/m4a-to-text',
  'ru': 'https://mictoo.com/ru/m4a-to-text',
  'it': 'https://mictoo.com/it/m4a-to-text',
  'pt': 'https://mictoo.com/pt/m4a-to-text',
  'pl': 'https://mictoo.com/pl/m4a-to-text',
  'ja': 'https://mictoo.com/ja/m4a-to-text',
  'ko': 'https://mictoo.com/ko/m4a-to-text',
  'x-default': 'https://mictoo.com/m4a-to-text',
}

export const metadata = {
  title: 'M4A를 텍스트로 — 무료 온라인 M4A 받아쓰기 | Mictoo',
  description: 'M4A 오디오 파일을 무료로 텍스트로 변환. iPhone 음성 메모, 녹음, 팟캐스트 등 모든 M4A 파일을 업로드하고 즉시 받아쓰기를 받으세요. 가입 불필요.',
  alternates: { canonical: 'https://mictoo.com/ko/m4a-to-text', languages: LANGS },
}

export default function KoM4AToTextPage() {
  return (
    <LandingLayout
      badge="M4A · iPhone · 무료 · 즉시"
      h1={<>M4A를 텍스트로<br /><span className="text-brand-600">무료 온라인 M4A 받아쓰기</span></>}
      subtitle="M4A 오디오 파일을 즉시 텍스트로 변환. iPhone 음성 메모, 음성 녹음, 팟캐스트 파일에 이상적. 계정 불필요."
      defaultLanguage="ko"
      features={[
        { icon: '📱', title: 'iPhone 음성 메모', desc: 'M4A는 iPhone 음성 메모와 녹음의 기본 포맷입니다. 직접 업로드하고 몇 초 만에 받아쓰기를 받으세요.' },
        { icon: '🎵', title: '모든 M4A', desc: '모든 출처의 M4A 파일 — iPhone, Mac, 디지털 레코더, 팟캐스트 앱 — 완벽 지원.' },
        { icon: '📄', title: '텍스트 또는 SRT 내보내기', desc: '받아쓰기를 일반 .txt 또는 타임스탬프 .srt 자막 파일로 다운로드.' },
      ]}
      faq={[
        { q: 'M4A를 텍스트로 변환하는 방법은?', a: '위 도구로 M4A 파일을 업로드하세요. 받아쓰기는 자동으로 생성되며 몇 초 만에 표시됩니다.' },
        { q: 'iPhone 음성 메모를 받아쓰기할 수 있나요?', a: '네. iPhone 음성 메모는 M4A 파일로 저장됩니다. iPhone에서 직접 또는 컴퓨터로 전송 후 파일을 업로드하세요.' },
        { q: 'M4A에서 텍스트 변환이 무료인가요?', a: '네, 완전히 무료입니다. 계정 없음, 구독 없음. 업로드하고 받아쓰기하세요.' },
        { q: 'M4A의 최대 크기는?', a: '최대 25MB. 대부분의 음성 녹음과 짧은 오디오 클립은 이 한도에 여유 있게 들어맞습니다.' },
        { q: '다른 오디오 포맷은 어떤 것이 지원되나요?', a: 'M4A 외에도 Mictoo는 MP3, MP4, WAV, OGG, WEBM 및 FLAC를 지원합니다.' },
      ]}
      relatedLinks={[
        { href: '/ko/wav-to-text', label: 'WAV를 텍스트로' },
        { href: '/ko/transcribe-mp3-to-text', label: 'MP3를 텍스트로' },
        { href: '/ko', label: '모든 포맷' },
      ]}
    />
  )
}
