import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/flac-to-text',
  'fr': 'https://mictoo.com/fr/flac-to-text',
  'de': 'https://mictoo.com/de/flac-to-text',
  'es': 'https://mictoo.com/es/flac-to-text',
  'ru': 'https://mictoo.com/ru/flac-to-text',
  'it': 'https://mictoo.com/it/flac-to-text',
  'pt': 'https://mictoo.com/pt/flac-to-text',
  'pl': 'https://mictoo.com/pl/flac-to-text',
  'ja': 'https://mictoo.com/ja/flac-to-text',
  'ko': 'https://mictoo.com/ko/flac-to-text',
  'x-default': 'https://mictoo.com/flac-to-text',
}

export const metadata = {
  title: 'FLAC을 텍스트로 — 무료 온라인 FLAC 오디오 받아쓰기 | Mictoo',
  description: 'FLAC 파일을 온라인에서 무료로 텍스트로 변환. 모든 FLAC 녹음을 업로드하고 몇 초 만에 정확한 받아쓰기를 받으세요. 가입 불필요.',
  alternates: { canonical: 'https://mictoo.com/ko/flac-to-text', languages: LANGS },

  openGraph: {
    title: "FLAC을 텍스트로 — 무료 온라인 FLAC 오디오 받아쓰기 | Mictoo",
    description: "FLAC 파일을 온라인에서 무료로 텍스트로 변환. 모든 FLAC 녹음을 업로드하고 몇 초 만에 정확한 받아쓰기를 받으세요. 가입 불필요.",
    url: "https://mictoo.com/ko/flac-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FLAC을 텍스트로 — 무료 온라인 FLAC 오디오 받아쓰기 | Mictoo",
    description: "FLAC 파일을 온라인에서 무료로 텍스트로 변환. 모든 FLAC 녹음을 업로드하고 몇 초 만에 정확한 받아쓰기를 받으세요. 가입 불필요.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function KoFlacToTextPage() {
  return (
    <LandingLayout
      badge="FLAC · 무손실 · 무료"
      h1={<>FLAC을 텍스트로<br /><span className="text-brand-600">무료 온라인 FLAC 받아쓰기</span></>}
      subtitle="모든 FLAC 오디오 파일을 업로드하고 즉시 텍스트로 변환. FLAC의 무손실 품질은 우수한 받아쓰기 정확도를 보장합니다. 계정 불필요."
      defaultLanguage="ko"
      valueBlock={
        <article className="prose-content">
          <p>FLAC은 음질 손실 없이 압축하는 형식입니다. 인터뷰 마스터, 현장 녹음, 구술사 자료, 장기 보관 오디오에서 자주 보입니다.</p>
          <p>Mictoo는 FLAC을 MP3로 바꾸지 않고 디코딩합니다. 어려운 녹음일수록 원본 정보를 유지한 채 처리하는 것이 좋습니다.</p>
        </article>
      }
      howItWorks={[
        { icon: '⬆️', title: '파일 업로드', desc: 'FLAC 녹음 또는 영상을 선택합니다. 먼저 변환할 필요가 없습니다.' },
        { icon: '🎧', title: '오디오 읽기', desc: 'Mictoo가 내부 오디오 트랙을 꺼내 받아쓰기하기 좋은 형태로 디코딩합니다.' },
        { icon: '📝', title: '수정하고 저장', desc: '결과를 확인하고 이름이나 용어를 고친 뒤 TXT, SRT, VTT, DOCX로 저장할 수 있습니다.' },
      ]}
      whyUse={{
        title: 'FLAC에 Mictoo를 쓰는 이유',
        bullets: [
          { title: '변환 단계를 줄임', desc: '다른 형식으로 바꾼 뒤 업로드하면 시간이 걸리고 관리할 파일도 늘어납니다. 원본을 바로 사용할 수 있습니다.' },
          { title: '자막과 메모 모두에 사용', desc: '일반 텍스트뿐 아니라 타임스탬프가 있는 SRT/VTT도 만들 수 있어 영상 게시와 검토에 좋습니다.' },
          { title: '긴 녹음을 나중에 검색', desc: '텍스트로 만들면 중요한 발언, 인용, 질문, 섹션을 찾기 쉬워집니다.' },
          { title: '가입 없이 테스트', desc: '짧은 확인이나 일회성 작업도 계정 생성 없이 시작할 수 있습니다.' },
        ],
      }}
      useCases={{
        title: 'FLAC 받아쓰기 활용',
        items: [
          { title: '회의와 인터뷰 기록', desc: '녹음을 글로 만들어 요약, 인용, 공유용 메모로 이어갈 수 있습니다.' },
          { title: '자막 초안', desc: '영상이나 오디오를 공개하기 전에 SRT/VTT의 기초를 만들 수 있습니다.' },
          { title: '교육 및 연구 메모', desc: '강의, 조사, 현장 노트를 검색 가능한 텍스트로 바꿀 수 있습니다.' },
          { title: '사내 지식화', desc: '데모, 설명회, 교육 녹화를 나중에 읽을 수 있는 자료로 바꿀 수 있습니다.' },
        ],
      }}
      proTips={{
        title: 'FLAC 받아쓰기 팁',
        tips: [
          { title: '오디오만 필요하면 추출', desc: '영상이 너무 크면 오디오만 내보내 업로드하면 더 빠릅니다.' },
          { title: '전문 용어는 마지막에 확인', desc: '사람 이름, 제품명, 성경 구절, 브랜드명은 손으로 검토하면 품질이 올라갑니다.' },
          { title: '긴 녹음은 나누기', desc: '긴 파일은 장이나 세션별로 나누면 확인과 수정이 쉬워집니다.' },
        ],
      }}
      faq={[
        { q: 'FLAC 파일을 텍스트로 변환하는 방법은?', a: '위 도구로 FLAC 파일을 업로드하세요. AI가 받아쓰기를 수행하고 몇 초 만에 텍스트를 표시합니다.' },
        { q: 'FLAC이 MP3보다 더 정확하게 받아쓰기되나요?', a: 'FLAC의 무손실 품질은 강하게 압축된 포맷과 비교하여 조용하거나 복잡한 오디오에서 정확도를 약간 향상시킬 수 있습니다.' },
        { q: 'FLAC에서 텍스트 변환이 무료인가요?', a: '네, 완전히 무료입니다. 계정이나 가입이 필요하지 않습니다.' },
        { q: 'FLAC의 최대 크기는?', a: '최대 25MB. FLAC 파일은 무손실 압축으로 인해 크기가 큽니다 — 파일이 제한을 초과하는 경우 손실 포맷으로 변환을 고려하세요.' },
      ]}
      relatedLinks={[
        { href: '/ko/wav-to-text', label: 'WAV를 텍스트로' },
        { href: '/ko/transcribe-mp3-to-text', label: 'MP3를 텍스트로' },
        { href: '/ko', label: '모든 포맷' },
      ]}
    />
  )
}
