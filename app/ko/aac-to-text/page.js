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
      valueBlock={
        <article className="prose-content">
          <p>AAC는 iPhone, YouTube 추출 오디오, 스트리밍 플랫폼에서 흔한 압축 오디오 코덱입니다. 원시 .aac 파일도 있고 M4A나 MP4 안에 들어 있는 AAC도 있습니다. 이 페이지는 AAC 오디오를 먼저 변환하지 않고 바로 받아쓰기할 때 쓰면 좋습니다.</p>
          <p>Mictoo는 AAC 헤더와 프로파일을 확인한 뒤 받아쓰기용으로 디코딩합니다. WAV로 바꾼다고 원래 음질 정보가 늘어나지는 않습니다. 직접 업로드하는 편이 빠르고 추가 손실도 없습니다.</p>
        </article>
      }
      howItWorks={[
        { icon: '🎧', title: 'AAC 파일 업로드', desc: '원시 .aac 또는 AAC 오디오가 들어 있는 녹음을 선택합니다.' },
        { icon: '🔎', title: '형식 감지', desc: 'ADTS/ADIF 같은 차이를 확인하고 읽을 수 있는 오디오로 디코딩합니다.' },
        { icon: '📄', title: '텍스트 저장', desc: '받아쓰기를 확인한 뒤 TXT, SRT, VTT, DOCX로 내보낼 수 있습니다.' },
      ]}
      whyUse={{
        title: 'AAC 받아쓰기에 Mictoo를 쓰는 이유',
        bullets: [
          { title: '원시 AAC 직접 처리', desc: '일부 편집 앱이나 배포 시스템은 M4A가 아니라 .aac만 내보냅니다. Mictoo는 그대로 받을 수 있습니다.' },
          { title: '컨테이너 차이를 처리', desc: 'AAC는 코덱이고 M4A/MP4는 컨테이너입니다. 어디에 들어 있든 오디오를 꺼내 처리합니다.' },
          { title: '재인코딩을 피함', desc: 'WAV나 MP3로 바꾼 뒤 업로드하면 시간이 늘고 손실이 추가될 수 있습니다.' },
          { title: '영상에서 나온 오디오에 적합', desc: 'YouTube, 스마트폰 영상, 스트리밍 아카이브에서 추출한 AAC를 메모나 자막으로 만들기 좋습니다.' },
        ],
      }}
      useCases={{
        title: 'AAC를 받아쓰기하는 상황',
        items: [
          { title: '팟캐스트 CDN 오디오', desc: '배포용 AAC 에피소드를 원고, 인용문, 검색 가능한 기록으로 바꿀 수 있습니다.' },
          { title: '영상에서 추출한 오디오', desc: 'MP4나 YouTube 자료에서 뽑은 AAC를 먼저 텍스트화하고 편집할 수 있습니다.' },
          { title: '모바일 앱 음성', desc: '게임, 학습 앱, 보이스메모 앱의 내보내기 파일에 AAC가 쓰이는 경우가 있습니다.' },
          { title: '방송 및 녹음 아카이브', desc: '오래된 자료가 AAC만 남아 있어도 내용 검색용 텍스트를 만들 수 있습니다.' },
        ],
      }}
      proTips={{
        title: 'AAC 업로드 팁',
        tips: [
          { title: '비트레이트를 억지로 올리지 않기', desc: '64kbps AAC를 320kbps로 바꿔도 정보가 늘지 않습니다. 원본을 쓰는 편이 낫습니다.' },
          { title: '재생 문제가 있으면 M4A로 감싸기', desc: '일부 앱은 원시 AAC를 싫어합니다. Mictoo에는 직접 넣을 수 있지만 공유용으로는 M4A가 편합니다.' },
          { title: '짧은 클립은 언어 지정', desc: '광고 오디오나 효과음이 섞인 짧은 파일은 언어를 직접 선택하면 안정적입니다.' },
        ],
      }}
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
