import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/sermon-transcription',
  'fr': 'https://mictoo.com/fr/sermon-transcription',
  'de': 'https://mictoo.com/de/sermon-transcription',
  'es': 'https://mictoo.com/es/sermon-transcription',
  'ru': 'https://mictoo.com/ru/sermon-transcription',
  'it': 'https://mictoo.com/it/sermon-transcription',
  'pt': 'https://mictoo.com/pt/sermon-transcription',
  'pl': 'https://mictoo.com/pl/sermon-transcription',
  'ja': 'https://mictoo.com/ja/sermon-transcription',
  'ko': 'https://mictoo.com/ko/sermon-transcription',
  'x-default': 'https://mictoo.com/sermon-transcription',
}

export const metadata = {
  title: '설교 받아쓰기 — 무료 설교 받아쓰기 생성기 | Mictoo',
  description: '설교와 교회 오디오를 텍스트로 무료로 받아쓰기. 블로그, 학습 노트, 접근성에 이상적. MP3, MP4, M4A 지원. 가입 불필요.',
  alternates: { canonical: 'https://mictoo.com/ko/sermon-transcription', languages: LANGS },

  openGraph: {
    title: "설교 받아쓰기 — 무료 설교 받아쓰기 생성기 | Mictoo",
    description: "설교와 교회 오디오를 텍스트로 무료로 받아쓰기. 블로그, 학습 노트, 접근성에 이상적. MP3, MP4, M4A 지원. 가입 불필요.",
    url: "https://mictoo.com/ko/sermon-transcription",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "설교 받아쓰기 — 무료 설교 받아쓰기 생성기 | Mictoo",
    description: "설교와 교회 오디오를 텍스트로 무료로 받아쓰기. 블로그, 학습 노트, 접근성에 이상적. MP3, MP4, M4A 지원. 가입 불필요.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function KoSermonPage() {
  return (
    <LandingLayout
      badge="설교 · 교회 · 무료"
      h1={<>설교 받아쓰기<br /><span className="text-brand-600">무료 받아쓰기 생성기</span></>}
      subtitle="설교 녹음을 몇 초 만에 깨끗한 텍스트로 변환. 교회 블로그, 학습 가이드, SNS 게시물, 청각 장애인을 위한 접근성에 이상적."
      defaultLanguage="ko"
      valueBlock={
        <article className="prose-content">
          <p>설교 받아쓰기는 예배 기록뿐 아니라 교회 사이트, 소그룹 자료, 인용문, 자막, 검색 가능한 아카이브에 쓸 수 있습니다.</p>
          <p>Mictoo는 예배 오디오나 영상에서 추출한 음성을 텍스트화하고 편집하기 쉬운 초안을 돌려줍니다.</p>
        </article>
      }
      howItWorks={[
        { icon: '⬆️', title: '파일 업로드', desc: '설교 녹음 또는 영상을 선택합니다. 먼저 변환할 필요가 없습니다.' },
        { icon: '🎧', title: '오디오 읽기', desc: 'Mictoo가 내부 오디오 트랙을 꺼내 받아쓰기하기 좋은 형태로 디코딩합니다.' },
        { icon: '📝', title: '수정하고 저장', desc: '결과를 확인하고 이름이나 용어를 고친 뒤 TXT, SRT, VTT, DOCX로 저장할 수 있습니다.' },
      ]}
      whyUse={{
        title: '설교에 Mictoo를 쓰는 이유',
        bullets: [
          { title: '변환 단계를 줄임', desc: '다른 형식으로 바꾼 뒤 업로드하면 시간이 걸리고 관리할 파일도 늘어납니다. 원본을 바로 사용할 수 있습니다.' },
          { title: '자막과 메모 모두에 사용', desc: '일반 텍스트뿐 아니라 타임스탬프가 있는 SRT/VTT도 만들 수 있어 영상 게시와 검토에 좋습니다.' },
          { title: '긴 녹음을 나중에 검색', desc: '텍스트로 만들면 중요한 발언, 인용, 질문, 섹션을 찾기 쉬워집니다.' },
          { title: '가입 없이 테스트', desc: '짧은 확인이나 일회성 작업도 계정 생성 없이 시작할 수 있습니다.' },
        ],
      }}
      useCases={{
        title: '설교 받아쓰기 활용',
        items: [
          { title: '회의와 인터뷰 기록', desc: '녹음을 글로 만들어 요약, 인용, 공유용 메모로 이어갈 수 있습니다.' },
          { title: '자막 초안', desc: '영상이나 오디오를 공개하기 전에 SRT/VTT의 기초를 만들 수 있습니다.' },
          { title: '교육 및 연구 메모', desc: '강의, 조사, 현장 노트를 검색 가능한 텍스트로 바꿀 수 있습니다.' },
          { title: '사내 지식화', desc: '데모, 설명회, 교육 녹화를 나중에 읽을 수 있는 자료로 바꿀 수 있습니다.' },
        ],
      }}
      proTips={{
        title: '설교 받아쓰기 팁',
        tips: [
          { title: '오디오만 필요하면 추출', desc: '영상이 너무 크면 오디오만 내보내 업로드하면 더 빠릅니다.' },
          { title: '전문 용어는 마지막에 확인', desc: '사람 이름, 제품명, 성경 구절, 브랜드명은 손으로 검토하면 품질이 올라갑니다.' },
          { title: '긴 녹음은 나누기', desc: '긴 파일은 장이나 세션별로 나누면 확인과 수정이 쉬워집니다.' },
        ],
      }}
      faq={[
        { q: '설교 녹음을 텍스트로 변환하는 방법은?', a: '교회 음향 콘솔, 팟캐스트 피드 또는 YouTube에서 MP3, MP4 또는 M4A로 내보냅니다. 위에 파일을 업로드하면 Mictoo가 몇 초 만에 받아쓰기를 수행합니다.' },
        { q: '교회 YouTube 채널에서 설교를 받아쓰기할 수 있나요?', a: '네. 자신의 채널의 경우: YouTube Studio → 콘텐츠 → 비디오 클릭 → 다운로드. Mictoo에 파일을 업로드하세요. 제3자 채널의 경우 허가가 필요합니다 — 많은 사역에서 팟캐스트 피드를 통해 오디오 다운로드를 제공합니다.' },
        { q: '성경 구절과 고유 명사는 어떻습니까?', a: 'AI 받아쓰기는 일반적인 구절과 이름을 잘 처리하지만 때때로 희귀한 성경 이름이나 교회 특정 용어를 잘못 표기합니다. 다운로드 전 브라우저 편집기에서 수정하세요 — 보통 30초 검토.' },
        { q: '설교의 최대 길이는?', a: '파일당 최대 25MB. 128 kbps의 30분 설교는 편안하게 들어맞습니다. 더 긴 메시지(45-60분)의 경우 비트레이트를 64 kbps 모노로 낮추거나 두 부분으로 분할하세요.' },
        { q: '파일이 비공개로 유지되나요?', a: '네. 설교는 처리된 후 즉시 삭제됩니다. 오디오나 받아쓰기 내용을 저장하지 않습니다.' },
      ]}
      relatedLinks={[
        { href: '/ko/podcast-transcription', label: '팟캐스트 받아쓰기' },
        { href: '/ko/lecture-transcription', label: '강의 받아쓰기' },
        { href: '/ko', label: '모든 포맷' },
      ]}
    />
  )
}
