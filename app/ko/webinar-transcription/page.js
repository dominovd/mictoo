import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/webinar-transcription',
  'fr': 'https://mictoo.com/fr/webinar-transcription',
  'de': 'https://mictoo.com/de/webinar-transcription',
  'es': 'https://mictoo.com/es/webinar-transcription',
  'ru': 'https://mictoo.com/ru/webinar-transcription',
  'it': 'https://mictoo.com/it/webinar-transcription',
  'pt': 'https://mictoo.com/pt/webinar-transcription',
  'pl': 'https://mictoo.com/pl/webinar-transcription',
  'ja': 'https://mictoo.com/ja/webinar-transcription',
  'ko': 'https://mictoo.com/ko/webinar-transcription',
  'x-default': 'https://mictoo.com/webinar-transcription',
}

export const metadata = {
  title: '웨비나 받아쓰기 — 녹화의 무료 받아쓰기 | Mictoo',
  description: '웨비나 녹화를 텍스트와 SRT 자막으로 무료로 받아쓰기. Zoom, Webex, GoToWebinar 및 모든 MP4·MP3 내보내기와 작동. 가입 불필요.',
  alternates: { canonical: 'https://mictoo.com/ko/webinar-transcription', languages: LANGS },

  openGraph: {
    title: "웨비나 받아쓰기 — 녹화의 무료 받아쓰기 | Mictoo",
    description: "웨비나 녹화를 텍스트와 SRT 자막으로 무료로 받아쓰기. Zoom, Webex, GoToWebinar 및 모든 MP4·MP3 내보내기와 작동. 가입 불필요.",
    url: "https://mictoo.com/ko/webinar-transcription",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "웨비나 받아쓰기 — 녹화의 무료 받아쓰기 | Mictoo",
    description: "웨비나 녹화를 텍스트와 SRT 자막으로 무료로 받아쓰기. Zoom, Webex, GoToWebinar 및 모든 MP4·MP3 내보내기와 작동. 가입 불필요.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function KoWebinarPage() {
  return (
    <LandingLayout
      badge="웨비나 · MP4 · 무료"
      h1={<>웨비나 받아쓰기<br /><span className="text-brand-600">무료 받아쓰기 생성기</span></>}
      subtitle="웨비나 녹화를 검색 가능한 텍스트 받아쓰기 또는 SRT 자막 파일로 변환. Zoom, Webex, GoToWebinar 및 모든 MP4/MP3 내보내기와 작동합니다."
      defaultLanguage="ko"
      valueBlock={
        <article className="prose-content">
          <p>웨비나 녹화는 행사 후 글, 지식 베이스, FAQ, 팔로업 메일로 재활용할 수 있습니다. 먼저 텍스트로 만들면 쓸 부분을 찾기 쉽습니다.</p>
          <p>Mictoo는 MP4나 오디오 녹음을 업로드해 Q&A, 설명 파트, 제품명을 나중에 다듬을 수 있는 텍스트로 만듭니다.</p>
        </article>
      }
      howItWorks={[
        { icon: '⬆️', title: '파일 업로드', desc: '웨비나 녹음 또는 영상을 선택합니다. 먼저 변환할 필요가 없습니다.' },
        { icon: '🎧', title: '오디오 읽기', desc: 'Mictoo가 내부 오디오 트랙을 꺼내 받아쓰기하기 좋은 형태로 디코딩합니다.' },
        { icon: '📝', title: '수정하고 저장', desc: '결과를 확인하고 이름이나 용어를 고친 뒤 TXT, SRT, VTT, DOCX로 저장할 수 있습니다.' },
      ]}
      whyUse={{
        title: '웨비나에 Mictoo를 쓰는 이유',
        bullets: [
          { title: '변환 단계를 줄임', desc: '다른 형식으로 바꾼 뒤 업로드하면 시간이 걸리고 관리할 파일도 늘어납니다. 원본을 바로 사용할 수 있습니다.' },
          { title: '자막과 메모 모두에 사용', desc: '일반 텍스트뿐 아니라 타임스탬프가 있는 SRT/VTT도 만들 수 있어 영상 게시와 검토에 좋습니다.' },
          { title: '긴 녹음을 나중에 검색', desc: '텍스트로 만들면 중요한 발언, 인용, 질문, 섹션을 찾기 쉬워집니다.' },
          { title: '가입 없이 테스트', desc: '짧은 확인이나 일회성 작업도 계정 생성 없이 시작할 수 있습니다.' },
        ],
      }}
      useCases={{
        title: '웨비나 받아쓰기 활용',
        items: [
          { title: '회의와 인터뷰 기록', desc: '녹음을 글로 만들어 요약, 인용, 공유용 메모로 이어갈 수 있습니다.' },
          { title: '자막 초안', desc: '영상이나 오디오를 공개하기 전에 SRT/VTT의 기초를 만들 수 있습니다.' },
          { title: '교육 및 연구 메모', desc: '강의, 조사, 현장 노트를 검색 가능한 텍스트로 바꿀 수 있습니다.' },
          { title: '사내 지식화', desc: '데모, 설명회, 교육 녹화를 나중에 읽을 수 있는 자료로 바꿀 수 있습니다.' },
        ],
      }}
      proTips={{
        title: '웨비나 받아쓰기 팁',
        tips: [
          { title: '오디오만 필요하면 추출', desc: '영상이 너무 크면 오디오만 내보내 업로드하면 더 빠릅니다.' },
          { title: '전문 용어는 마지막에 확인', desc: '사람 이름, 제품명, 성경 구절, 브랜드명은 손으로 검토하면 품질이 올라갑니다.' },
          { title: '긴 녹음은 나누기', desc: '긴 파일은 장이나 세션별로 나누면 확인과 수정이 쉬워집니다.' },
        ],
      }}
      faq={[
        { q: 'Zoom 또는 Webex 웨비나 녹화를 다운로드하는 방법은?', a: 'Zoom: 웹 포털 → 녹화 → 웨비나 클릭 → 다운로드. Webex: 내 녹화에서 녹화 열기 → 다운로드. 둘 다 기본적으로 MP4로 내보냅니다.' },
        { q: '웨비나가 라이브 중에 받아쓰기를 받을 수 있나요?', a: 'Mictoo는 녹화된 파일에서만 작동하며 라이브 스트림에서는 작동하지 않습니다. 실시간 자막의 경우 웨비나 플랫폼의 라이브 캡션 기능을 사용한 다음 종료 후 녹화를 업로드하여 세련된 받아쓰기를 받으세요.' },
        { q: '여러 화자와 Q&A 세션은 어떻습니까?', a: 'Mictoo는 모든 발화를 포함하는 단일 받아쓰기를 생성합니다. 화자 레이블(호스트, 패널리스트 1, 청중)은 다운로드 전에 브라우저 편집기에서 수동으로 추가할 수 있습니다.' },
        { q: '웨비나의 최대 길이는?', a: '파일당 최대 25MB. 64 kbps 모노의 60분 웨비나는 쉽게 들어맞습니다. 더 긴 세션의 경우 낮은 비트레이트로 내보내거나 M4A 오디오를 추출하세요.' },
        { q: '기술 용어에 대한 받아쓰기가 정확한가요?', a: '깨끗한 오디오에서는 정확도가 높습니다. 브랜드 이름, 약어 및 특이한 용어는 때때로 잘못 표기됩니다 — 내보내기 전 브라우저 편집기에서 쉽게 수정할 수 있습니다.' },
      ]}
      relatedLinks={[
        { href: '/ko/meeting-transcription', label: '회의 받아쓰기' },
        { href: '/ko/zoom-transcription', label: 'Zoom 받아쓰기' },
        { href: '/ko/free-srt-generator', label: 'SRT 생성기' },
        { href: '/ko', label: '모든 포맷' },
      ]}
    />
  )
}
