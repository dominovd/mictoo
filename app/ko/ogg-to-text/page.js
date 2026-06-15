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
      valueBlock={
        <article className="prose-content">
          <p>OGG는 하나의 오디오 코덱이 아니라 Vorbis, Opus, 때로는 FLAC을 담는 컨테이너입니다. Telegram 음성 메시지는 보통 .oga로 저장되고 내부 코덱은 Opus입니다. Mictoo는 확장자만 보지 않고 실제 오디오 형식을 감지해 처리합니다.</p>
          <p>Linux 녹음 앱, WebRTC 통화, 오픈소스 오디오 자료도 변환 없이 바로 올릴 수 있습니다. 먼저 MP3로 바꿀 필요가 없습니다.</p>
          <p>60MB까지 무료입니다. Telegram Opus 음성은 매우 작아서 긴 음성 메모도 제한에 걸리는 일이 드뭅니다.</p>
        </article>
      }
      howItWorks={[
        { icon: '🐧', title: 'OGG, OGA, Opus 업로드', desc: 'Vorbis, Opus, FLAC이 들어 있는 OGG를 처리합니다. .ogg, .oga, .opus 확장자 모두 실제 코덱을 확인합니다.' },
        { icon: '🎤', title: '오디오를 추출하고 받아쓰기', desc: '서버에서 OGG 컨테이너의 오디오를 꺼내 Whisper가 처리할 수 있는 형태로 디코딩합니다.' },
        { icon: '💬', title: '수정하고 내보내기', desc: '결과를 화면에서 확인하고 이름이나 용어를 고친 뒤 TXT, SRT, VTT, DOCX로 저장할 수 있습니다.' },
      ]}
      whyUse={{
        title: 'OGG와 .oga에 Mictoo를 쓰는 이유',
        bullets: [
          { title: 'Telegram 음성을 바로 처리', desc: 'Telegram Desktop이나 Web에서 저장한 음성 메시지는 .oga인 경우가 많습니다. .ogg로 이름을 바꾸거나 MP3로 변환하지 않아도 됩니다.' },
          { title: 'Vorbis와 Opus를 구분할 필요 없음', desc: '오래된 OGG는 Vorbis, 최근 음성 메모와 통화 녹음은 Opus가 많습니다. Mictoo가 내부 형식을 감지합니다.' },
          { title: '작은 파일에서도 음성이 선명함', desc: 'Opus는 낮은 비트레이트의 음성에 강합니다. 말소리가 또렷하면 짧은 Telegram 메모도 잘 받아쓸 수 있습니다.' },
          { title: 'Linux와 브라우저 녹음에 적합', desc: 'GNOME/KDE 녹음, WebRTC 통화, 오픈소스 오디오 자료처럼 OGG가 자연스럽게 나오는 작업 흐름에 맞습니다.' },
        ],
      }}
      useCases={{
        title: 'OGG 파일이 자주 나오는 곳',
        items: [
          { title: 'Telegram 긴 음성 메시지', desc: '업무 설명, 가족 메시지, 그룹 채팅의 긴 음성을 글로 남길 때 유용합니다.' },
          { title: 'Linux 데스크톱 녹음', desc: 'Linux 녹음 앱은 OGG나 Opus를 선택하는 경우가 있습니다. 연구 메모나 팟캐스트 소스를 바로 처리할 수 있습니다.' },
          { title: '브라우저 통화 백업', desc: 'WebRTC 기반 통화 녹음은 Opus를 쓰는 경우가 많아 나중에 회의록으로 만들기 좋습니다.' },
          { title: '아카이브 오디오와 발음 샘플', desc: 'Wikipedia나 교육 자료의 OGG 오디오를 검색 가능한 텍스트로 바꿀 수 있습니다.' },
        ],
      }}
      proTips={{
        title: 'OGG 받아쓰기 팁',
        tips: [
          { title: '.oga를 억지로 바꾸지 않기', desc: '.oga도 오디오 전용 OGG 확장자입니다. Mictoo에서는 그대로 업로드하면 됩니다.' },
          { title: 'Telegram은 Desktop이나 Web에서 저장', desc: '모바일 앱에서는 파일로 꺼내기 어려울 수 있습니다. Desktop/Web의 저장 기능이 더 확실합니다.' },
          { title: '짧은 음성은 언어를 직접 선택', desc: '몇 초짜리 메시지는 자동 감지가 흔들릴 수 있습니다. 한국어 음성이면 한국어를 선택하세요.' },
        ],
      }}
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
