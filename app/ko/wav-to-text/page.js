import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/wav-to-text',
  'fr': 'https://mictoo.com/fr/wav-to-text',
  'de': 'https://mictoo.com/de/wav-to-text',
  'es': 'https://mictoo.com/es/wav-to-text',
  'ru': 'https://mictoo.com/ru/wav-to-text',
  'it': 'https://mictoo.com/it/wav-to-text',
  'pt': 'https://mictoo.com/pt/wav-to-text',
  'pl': 'https://mictoo.com/pl/wav-to-text',
  'ja': 'https://mictoo.com/ja/wav-to-text',
  'ko': 'https://mictoo.com/ko/wav-to-text',
  'x-default': 'https://mictoo.com/wav-to-text',
}

export const metadata = {
  title: 'WAV를 텍스트로 — 무료 온라인 WAV 받아쓰기 | Mictoo',
  description: 'WAV 파일을 온라인에서 무료로 텍스트로 변환. 모든 WAV 오디오 파일을 업로드하고 몇 초 만에 정확한 받아쓰기를 받으세요. 가입 불필요.',
  alternates: { canonical: 'https://mictoo.com/ko/wav-to-text', languages: LANGS },

  openGraph: {
    title: "WAV를 텍스트로 — 무료 온라인 WAV 받아쓰기 | Mictoo",
    description: "WAV 파일을 온라인에서 무료로 텍스트로 변환. 모든 WAV 오디오 파일을 업로드하고 몇 초 만에 정확한 받아쓰기를 받으세요. 가입 불필요.",
    url: "https://mictoo.com/ko/wav-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "WAV를 텍스트로 — 무료 온라인 WAV 받아쓰기 | Mictoo",
    description: "WAV 파일을 온라인에서 무료로 텍스트로 변환. 모든 WAV 오디오 파일을 업로드하고 몇 초 만에 정확한 받아쓰기를 받으세요. 가입 불필요.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function KoWavToTextPage() {
  return (
    <LandingLayout
      badge="WAV · 무료 · 즉시"
      h1={<>WAV를 텍스트로<br /><span className="text-brand-600">무료 온라인 WAV 받아쓰기</span></>}
      subtitle="모든 WAV 오디오 파일을 업로드하고 몇 초 만에 정확한 텍스트 받아쓰기를 받으세요. 인터뷰, 통화, 강의, 음성 메모 등 모든 WAV 녹음 지원. 계정 불필요."
      defaultLanguage="ko"
      valueBlock={
        <article className="prose-content">
          <p>WAV는 비압축 또는 그에 가까운 녹음으로, 레코더, 스튜디오, 강의 녹음, 아카이브 오디오에서 많이 쓰입니다. 파일은 크지만 오디오 정보가 많이 남아 있습니다.</p>
          <p>Mictoo는 PCM과 Broadcast WAV를 직접 처리합니다. 큰 파일은 필요하면 나누거나 작업용 사본을 만들면 다루기 쉽습니다.</p>
        </article>
      }
      howItWorks={[
        { icon: '⬆️', title: '파일 업로드', desc: 'WAV 녹음 또는 영상을 선택합니다. 먼저 변환할 필요가 없습니다.' },
        { icon: '🎧', title: '오디오 읽기', desc: 'Mictoo가 내부 오디오 트랙을 꺼내 받아쓰기하기 좋은 형태로 디코딩합니다.' },
        { icon: '📝', title: '수정하고 저장', desc: '결과를 확인하고 이름이나 용어를 고친 뒤 TXT, SRT, VTT, DOCX로 저장할 수 있습니다.' },
      ]}
      whyUse={{
        title: 'WAV에 Mictoo를 쓰는 이유',
        bullets: [
          { title: '변환 단계를 줄임', desc: '다른 형식으로 바꾼 뒤 업로드하면 시간이 걸리고 관리할 파일도 늘어납니다. 원본을 바로 사용할 수 있습니다.' },
          { title: '자막과 메모 모두에 사용', desc: '일반 텍스트뿐 아니라 타임스탬프가 있는 SRT/VTT도 만들 수 있어 영상 게시와 검토에 좋습니다.' },
          { title: '긴 녹음을 나중에 검색', desc: '텍스트로 만들면 중요한 발언, 인용, 질문, 섹션을 찾기 쉬워집니다.' },
          { title: '가입 없이 테스트', desc: '짧은 확인이나 일회성 작업도 계정 생성 없이 시작할 수 있습니다.' },
        ],
      }}
      useCases={{
        title: 'WAV 받아쓰기 활용',
        items: [
          { title: '회의와 인터뷰 기록', desc: '녹음을 글로 만들어 요약, 인용, 공유용 메모로 이어갈 수 있습니다.' },
          { title: '자막 초안', desc: '영상이나 오디오를 공개하기 전에 SRT/VTT의 기초를 만들 수 있습니다.' },
          { title: '교육 및 연구 메모', desc: '강의, 조사, 현장 노트를 검색 가능한 텍스트로 바꿀 수 있습니다.' },
          { title: '사내 지식화', desc: '데모, 설명회, 교육 녹화를 나중에 읽을 수 있는 자료로 바꿀 수 있습니다.' },
        ],
      }}
      proTips={{
        title: 'WAV 받아쓰기 팁',
        tips: [
          { title: '오디오만 필요하면 추출', desc: '영상이 너무 크면 오디오만 내보내 업로드하면 더 빠릅니다.' },
          { title: '전문 용어는 마지막에 확인', desc: '사람 이름, 제품명, 성경 구절, 브랜드명은 손으로 검토하면 품질이 올라갑니다.' },
          { title: '긴 녹음은 나누기', desc: '긴 파일은 장이나 세션별로 나누면 확인과 수정이 쉬워집니다.' },
        ],
      }}
      faq={[
        { q: 'WAV 파일을 텍스트로 변환하는 방법은?', a: '위 도구로 WAV 파일을 업로드하세요. Mictoo가 AI로 자동으로 받아쓰기하고 몇 초 만에 텍스트를 표시합니다.' },
        { q: 'WAV에서 텍스트 변환이 무료인가요?', a: '네, 완전히 무료입니다. 계정 없음. WAV를 업로드하세요 — 월별 분 할당량 없음, 가입 없음.' },
        { q: 'WAV의 최대 크기는?', a: '최대 25MB. 더 큰 녹음의 경우 먼저 MP3로 변환하거나 녹음을 세그먼트로 분할하세요.' },
        { q: 'WAV에서 타임스탬프 받아쓰기를 받을 수 있나요?', a: '네. 받아쓰기 후 .srt 버튼을 클릭하여 각 세그먼트의 정확한 타임스탬프가 포함된 자막 파일을 다운로드할 수 있습니다.' },
        { q: '다른 오디오 포맷은 어떤 것이 지원되나요?', a: 'Mictoo는 WAV 외에도 MP3, MP4, M4A, OGG, WEBM 및 FLAC도 지원합니다.' },
      ]}
      relatedLinks={[
        { href: '/ko/transcribe-mp3-to-text', label: 'MP3를 텍스트로' },
        { href: '/ko/transcribe-audio-to-text', label: '오디오를 텍스트로' },
        { href: '/ko', label: '모든 포맷' },
      ]}
    />
  )
}
