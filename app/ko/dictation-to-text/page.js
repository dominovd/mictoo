import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/dictation-to-text',
  'fr': 'https://mictoo.com/fr/dictation-to-text',
  'de': 'https://mictoo.com/de/dictation-to-text',
  'es': 'https://mictoo.com/es/dictation-to-text',
  'ru': 'https://mictoo.com/ru/dictation-to-text',
  'it': 'https://mictoo.com/it/dictation-to-text',
  'pt': 'https://mictoo.com/pt/dictation-to-text',
  'pl': 'https://mictoo.com/pl/dictation-to-text',
  'ja': 'https://mictoo.com/ja/dictation-to-text',
  'ko': 'https://mictoo.com/ko/dictation-to-text',
  'x-default': 'https://mictoo.com/dictation-to-text',
}

export const metadata = {
  title: '구술을 텍스트로 — 무료 음성 구술 받아쓰기 | Mictoo',
  description: '구술 오디오 녹음을 무료로 텍스트로 변환. 작가, 의사, 변호사, 연구자에 이상적. MP3, M4A, WAV 지원. 가입 불필요.',
  alternates: { canonical: 'https://mictoo.com/ko/dictation-to-text', languages: LANGS },

  openGraph: {
    title: "구술을 텍스트로 — 무료 음성 구술 받아쓰기 | Mictoo",
    description: "구술 오디오 녹음을 무료로 텍스트로 변환. 작가, 의사, 변호사, 연구자에 이상적. MP3, M4A, WAV 지원. 가입 불필요.",
    url: "https://mictoo.com/ko/dictation-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "구술을 텍스트로 — 무료 음성 구술 받아쓰기 | Mictoo",
    description: "구술 오디오 녹음을 무료로 텍스트로 변환. 작가, 의사, 변호사, 연구자에 이상적. MP3, M4A, WAV 지원. 가입 불필요.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function KoDictationPage() {
  return (
    <LandingLayout
      badge="구술 · 음성 → 텍스트 · 무료"
      h1={<>구술을 텍스트로<br /><span className="text-brand-600">무료 음성 구술 받아쓰기</span></>}
      subtitle="생각을 녹음하고, 챕터를 구술하거나 노트를 작성한 다음 — 여기에 파일을 업로드하여 정확한 텍스트 받아쓰기를 받으세요. 가입 불필요, 설치할 앱 없음."
      defaultLanguage="ko"
      valueBlock={
        <article className="prose-content">
          <p>녹음된 받아쓰기는 실시간 입력과 다릅니다. 생각하며 말하고 나중에 글로 다듬는 작업 흐름입니다.</p>
          <p>Mictoo에 음성을 넣으면 초안, 메모, 장 구성, 보고서 재료로 쓸 수 있는 텍스트가 만들어집니다.</p>
        </article>
      }
      howItWorks={[
        { icon: '⬆️', title: '파일 업로드', desc: '받아쓰기 녹음 또는 영상을 선택합니다. 먼저 변환할 필요가 없습니다.' },
        { icon: '🎧', title: '오디오 읽기', desc: 'Mictoo가 내부 오디오 트랙을 꺼내 받아쓰기하기 좋은 형태로 디코딩합니다.' },
        { icon: '📝', title: '수정하고 저장', desc: '결과를 확인하고 이름이나 용어를 고친 뒤 TXT, SRT, VTT, DOCX로 저장할 수 있습니다.' },
      ]}
      whyUse={{
        title: '받아쓰기에 Mictoo를 쓰는 이유',
        bullets: [
          { title: '변환 단계를 줄임', desc: '다른 형식으로 바꾼 뒤 업로드하면 시간이 걸리고 관리할 파일도 늘어납니다. 원본을 바로 사용할 수 있습니다.' },
          { title: '자막과 메모 모두에 사용', desc: '일반 텍스트뿐 아니라 타임스탬프가 있는 SRT/VTT도 만들 수 있어 영상 게시와 검토에 좋습니다.' },
          { title: '긴 녹음을 나중에 검색', desc: '텍스트로 만들면 중요한 발언, 인용, 질문, 섹션을 찾기 쉬워집니다.' },
          { title: '가입 없이 테스트', desc: '짧은 확인이나 일회성 작업도 계정 생성 없이 시작할 수 있습니다.' },
        ],
      }}
      useCases={{
        title: '받아쓰기 받아쓰기 활용',
        items: [
          { title: '회의와 인터뷰 기록', desc: '녹음을 글로 만들어 요약, 인용, 공유용 메모로 이어갈 수 있습니다.' },
          { title: '자막 초안', desc: '영상이나 오디오를 공개하기 전에 SRT/VTT의 기초를 만들 수 있습니다.' },
          { title: '교육 및 연구 메모', desc: '강의, 조사, 현장 노트를 검색 가능한 텍스트로 바꿀 수 있습니다.' },
          { title: '사내 지식화', desc: '데모, 설명회, 교육 녹화를 나중에 읽을 수 있는 자료로 바꿀 수 있습니다.' },
        ],
      }}
      proTips={{
        title: '받아쓰기 받아쓰기 팁',
        tips: [
          { title: '오디오만 필요하면 추출', desc: '영상이 너무 크면 오디오만 내보내 업로드하면 더 빠릅니다.' },
          { title: '전문 용어는 마지막에 확인', desc: '사람 이름, 제품명, 성경 구절, 브랜드명은 손으로 검토하면 품질이 올라갑니다.' },
          { title: '긴 녹음은 나누기', desc: '긴 파일은 장이나 세션별로 나누면 확인과 수정이 쉬워집니다.' },
        ],
      }}
      faq={[
        { q: '휴대폰에서 구술을 녹음하는 방법은?', a: 'iPhone: 음성 메모 앱 — .m4a로 내보내기. Android: 내장 녹음기 또는 Easy Voice Recorder — .mp3 또는 .m4a로 내보내기. Mictoo에 파일을 업로드하세요.' },
        { q: 'Mictoo가 실시간 구술 도구인가요?', a: '아니요 — Mictoo는 기존 오디오 파일을 받아쓰기합니다. 실시간 구술(말하면서 텍스트 보기)에는 시스템 내장 구술(macOS, Windows, iOS, Android)을 사용하세요. 나중에 긴 녹음을 정리하기 위해 Mictoo를 사용하세요.' },
        { q: '구술 받아쓰기가 얼마나 정확한가요?', a: '한 명의 화자가 명확하게 구술하면 일반적으로 95% 이상의 정확도로 받아쓰기됩니다. 자연스러운 속도로 조용한 방에서 말하고 최상의 결과를 위해 헤드폰을 사용하세요.' },
        { q: '의료 또는 법률 구술에 사용할 수 있나요?', a: '네, 단 환자 또는 클라이언트 데이터의 AI 처리에 관한 현지 규정을 확인하세요. Mictoo는 파일을 저장하지 않지만 — 오디오는 받아쓰기를 위해 AI 제공자를 거칩니다. 규제된 워크플로우의 경우 컴플라이언스 팀과 상의하세요.' },
        { q: '구술의 최대 길이는?', a: '최대 25MB. 64 kbps 모노로 약 50분의 구술에 해당합니다. 더 긴 녹음의 경우 챕터로 분할하거나 비트레이트를 낮추세요.' },
      ]}
      relatedLinks={[
        { href: '/ko/voice-memo-to-text', label: '음성 메모를 텍스트로' },
        { href: '/ko', label: '모든 포맷' },
      ]}
    />
  )
}
