import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/business-transcription',
  'fr': 'https://mictoo.com/fr/business-transcription',
  'de': 'https://mictoo.com/de/business-transcription',
  'es': 'https://mictoo.com/es/business-transcription',
  'ru': 'https://mictoo.com/ru/business-transcription',
  'it': 'https://mictoo.com/it/business-transcription',
  'pt': 'https://mictoo.com/pt/business-transcription',
  'pl': 'https://mictoo.com/pl/business-transcription',
  'ja': 'https://mictoo.com/ja/business-transcription',
  'ko': 'https://mictoo.com/ko/business-transcription',
  'x-default': 'https://mictoo.com/business-transcription',
}

export const metadata = {
  title: '비즈니스 받아쓰기 — 회의와 통화용 무료 도구 | Mictoo',
  description:
    '무료 비즈니스 받아쓰기. 영업 통화, 고객 인터뷰, 포커스 그룹, 이사회 회의, 컨퍼런스. 업로드하여 몇 초 만에 깨끗한 AI 받아쓰기. 가입 불필요.',
  alternates: { canonical: 'https://mictoo.com/ko/business-transcription', languages: LANGS },

  openGraph: {
    title: "비즈니스 받아쓰기 — 회의와 통화용 무료 도구 | Mictoo",
    description: "무료 비즈니스 받아쓰기. 영업 통화, 고객 인터뷰, 포커스 그룹, 이사회 회의, 컨퍼런스. 업로드하여 몇 초 만에 깨끗한 AI 받아쓰기. 가입 불필요.",
    url: "https://mictoo.com/ko/business-transcription",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "비즈니스 받아쓰기 — 회의와 통화용 무료 도구 | Mictoo",
    description: "무료 비즈니스 받아쓰기. 영업 통화, 고객 인터뷰, 포커스 그룹, 이사회 회의, 컨퍼런스. 업로드하여 몇 초 만에 깨끗한 AI 받아쓰기. 가입 불필요.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function KoBusinessPage() {
  return (
    <LandingLayout
      defaultLanguage="ko"
      badge="영업 · 연구 · 규정 준수 · 무료"
      h1={<>비즈니스 받아쓰기<br /><span className="text-brand-600">비즈니스 오디오를 텍스트로, 무료</span></>}
      subtitle="모든 비즈니스 오디오를 깨끗한 텍스트로 변환. 영업 통화, 고객 인터뷰, 포커스 그룹, 컨퍼런스, 이사회 회의. 계정 불필요, 분당 과금 없음."
      howItWorks={[
        { icon: '🎙️', title: '오디오 또는 비디오 드롭', desc: '통화 레코더의 MP3, 휴대폰의 M4A, 비디오 컨퍼런스의 MP4, 필드 레코더의 WAV. Gong의 영업 통화, 고객 인터뷰의 Zoom 녹화, 이사회 M4A. 모두 작동.' },
        { icon: '⚡', title: 'AI가 받아쓰기', desc: 'Whisper large-v3가 오디오를 처리합니다. 30분 통화는 약 1분에 완료. 60분 회의는 2분 미만.' },
        { icon: '📋', title: '받아쓰기 받기', desc: '읽고, 복사하거나 TXT 또는 SRT로 다운로드. CRM, 연구 저장소, 프로젝트 문서 또는 규정 준수 아카이브에 붙여넣기.' },
      ]}
      whyUse={{ title: '비즈니스 오디오에 Mictoo를 사용하는 이유', bullets: [
        { title: '고가 옵션과 같은 정확도', desc: 'Whisper large-v3는 많은 유료 엔터프라이즈 받아쓰기 도구 뒤의 모델. 프로 시트 라이선스 비용 없이 실행합니다.' },
        { title: '산발적 사용에 작동', desc: '주당 영업 통화 하나를 받아쓴다면, 엔터프라이즈 도구의 월별 시트를 지불하는 것은 낭비. 분 카운터 없는 무료가 산발적 사용 패턴에 맞습니다.' },
        { title: '50개 이상의 언어, 국제 비즈니스에 유용', desc: '다국어 고객 인터뷰, 국경 간 영업 통화, 비원어민 영어 화자가 있는 패널. 모두 커버.' },
        { title: '파일은 보관되지 않음', desc: '녹화는 받아쓰기 제공업체로 가서 폐기됩니다. 제3자 서버에 앉아 있는 것을 보고 싶지 않은 비즈니스 오디오에는 중요합니다.' },
        { title: '비디오 에디터용 SRT 내보내기', desc: '비즈니스 오디오가 비디오(컨퍼런스 패널, 타운홀)에서 온다면, SRT는 자막 작업을 위해 Premiere, DaVinci 또는 YouTube Studio에 직접 들어갑니다.' },
      ]}}
      useCases={{ title: '일반적인 비즈니스 받아쓰기 사용 사례', items: [
        { title: '영업 통화 요약', desc: '계정 임원은 거래 옆에 통화 녹화를 CRM에 넣습니다. 더 빠른 핸드오프, 후속 이메일을 위한 더 나은 인용 검색, 영업 관리자를 위한 더 쉬운 코칭.' },
        { title: '제품 연구를 위한 고객 인터뷰', desc: '제품 관리자와 UX 연구원은 패턴을 코딩하고, 사용자 스토리를 쓰고, 연구 저장소를 구축하기 위해 고객과의 대화를 받아씁니다.' },
        { title: '포커스 그룹 받아쓰기', desc: '시장 조사 기관은 분석을 위해 포커스 그룹 세션을 받아씁니다. 코딩하는 것은 비디오가 아닌 받아쓰기.' },
        { title: '이사회 회의와 리더십 오프사이트', desc: '받아쓰기는 기업 결정을 검색 가능하게 만들고 몇 달 후 모호성을 줄입니다. 거버넌스, 직원 커뮤니케이션, 감사 추적에 유용.' },
        { title: '컨퍼런스 패널 녹화', desc: '마케팅과 PR 팀은 자사 임원이 발언한 패널 토론을 받아씁니다. 블로그 게시물, 소셜용 인용 그래픽, 영업 활성화 콘텐츠. 모두 받아쓰기에서 시작.' },
      ]}}
      proTips={{ title: '비즈니스 받아쓰기 팁', tips: [
        { title: '영업 통화 녹화에는 가능하면 Gong이나 Chorus 같은 도구 사용', desc: '이 도구들은 녹화, 받아쓰기, CRM 로깅을 함께 수행. Mictoo는 가끔의 받아쓰기에 올바른 선택, 대용량 영업 운영에는 아닙니다.' },
        { title: '고객 인터뷰에서 동의를 얻고 오디오가 어떻게 사용될지 설명', desc: '"노트를 작성하지 않아도 되도록 이 대화를 녹음하고 있습니다. 오디오는 받아쓰여지고 우리 연구 저장소에 남습니다." 많은 관할권에서 이는 또한 모든 통화 녹음에 대한 법적 요구 사항.' },
        { title: '특히 클라이언트에게 적절한 마이크 사용', desc: '전화 라인을 통해 캡처된 클라이언트 음성은 클라이언트 측 USB 헤드셋의 다이얼인 통화보다 5-10% 덜 정확하게 받아쓰여집니다. 고가치 인터뷰에는 통화 전에 헤드셋을 보내세요.' },
        { title: '파일 크기 예산을 절약하기 위해 업로드 전 잡담 자르기', desc: '대부분의 비즈니스 통화는 2-5분의 날씨와 예의로 시작. 파일이 한도에 가깝다면 업로드 전에 Audacity에서 잘라내기.' },
        { title: '국제 통화에는 언어를 수동으로 선택', desc: '영업 통화가 영어로 열리지만 프랑스어로 전환되면 자동 감지가 혼란될 수 있습니다. 지배적인 언어를 수동으로 선택.' },
        { title: '기밀 비즈니스 오디오에는 클라우드 받아쓰기를 사용하지 마세요, 우리 것도', desc: 'HR 대화, M&A 토론, 법적 통화, 특권으로 커버된 모든 것. 로컬 Whisper 설치 사용. 같은 모델, 오프라인 실행, 제3자 처리 없음.' },
      ]}}
      faq={[
        { q: 'Mictoo가 비즈니스 사용에 적합합니까?', a: '가끔의 받아쓰기(영업 통화, 인터뷰, 패널)에는 네. 대용량 운영(하루 50통의 통화를 받아쓰는 영업 팀)에는 CRM 통합, 코칭 워크플로우, 팀 분석을 패키지화하는 Gong이나 Chorus 같은 전용 도구가 더 잘 맞습니다.' },
        { q: '내 비즈니스 오디오가 서버에 저장됩니까?', a: '아니요. 파일은 받아쓰기 제공업체(Groq, 백업으로 OpenAI)로 가서 처리 후 폐기. 오디오나 받아쓰기를 보관하지 않습니다.' },
        { q: 'GDPR 준수입니까?', a: '사이트를 떠난 후 오디오나 받아쓰기를 저장하지 않습니다. 우리는 유럽에 있고 제공업체(Groq US, OpenAI US)는 DPA에 서명. 특정 GDPR 상황(컨트롤러 의무, 녹음의 법적 근거)에 대해서는 개인정보 보호 정책을 참조하고 데이터 보호 책임자와 상담.' },
        { q: 'EU 또는 캘리포니아 클라이언트와의 통화 녹음에 사용할 수 있습니까?', a: '받아쓰기는 사용 가능. 녹음 자체는 많은 관할권에서 상대방의 동의가 필요(캘리포니아와 EU 일부의 양측 동의). 녹음 전에 동의를 받으세요.' },
        { q: '고유 명사와 회사 이름의 받아쓰기 정확도는?', a: '일반 단어보다 덜 정확. Whisper는 클라이언트 이름, 제품 이름 또는 회사 특정 용어를 모릅니다. 수동으로 수정할 것으로 예상. 받아쓰기의 나머지는 단단할 것입니다.' },
        { q: '스피커 레이블(영업자 대 클라이언트)을 받을 수 있습니까?', a: '자동으로는 안 됩니다. 2 스피커 통화는 대화에 따라 수동으로 레이블을 추가. 스피커당 별도 오디오 트랙이 있는 다자 통화는 각 트랙을 별도로 받아쓰기.' },
        { q: 'Gong, Chorus 또는 Fireflies와 비교하면?', a: '그것들은 CRM 통합, 자동 코칭, 거래 단계 태그 지정, 통화 분석이 있는 완전한 영업 통화 플랫폼. 우리는 순수 받아쓰기, 통합 없음, 코칭 레이어 없음. 더 저렴(무료), 훨씬 좁음. 완전한 플랫폼이 필요하면 그것을 사용. 텍스트만 필요하면 우리를 사용.' },
        { q: '기밀 비즈니스 통화를 받아쓸 수 있습니까?', a: '비기밀 비즈니스 통화에는 네. 기밀(HR, 법적, M&A, 특권이 있는 모든 것)에는 우리 것을 포함한 모든 클라우드 받아쓰기를 피하세요. 대신 로컬 Whisper 설치 사용.' },
        { q: '비즈니스 통화 받아쓰기는 얼마나 걸립니까?', a: '오디오 길이의 약 1-2%. 30분 통화는 약 30-60초에 완료.' },
        { q: '출력 포맷은?', a: '일반 텍스트(TXT)와 SRT(타임코드가 있는 자막 파일). 클립보드에 복사도 CRM이나 문서에 직접 붙여넣는 데 작동.' },
        { q: '여러 영업 통화를 배치로 업로드할 수 있습니까?', a: '아직 한 번 클릭으로는 안 됩니다. 현재는 한 번에 한 파일 업로드. 배치는 미래 Pro 플랜의 로드맵에 있습니다.' },
        { q: '비즈니스 오디오가 60분을 초과하는 경우는?', a: '60분 미만 청크로 분할. 받아쓰기는 나중에 재결합 가능.' },
      ]}
      relatedLinks={[
        { href: '/ko/interview-transcription', label: '인터뷰 받아쓰기', desc: '1대1 대화와 질적 연구용.' },
        { href: '/ko/meeting-transcription', label: '회의 받아쓰기', desc: '모든 회의 녹화, 모든 플랫폼용.' },
        { href: '/ko/zoom-transcription', label: 'Zoom 받아쓰기', desc: 'Zoom 녹화 통화용.' },
        { href: '/ko/teams-meeting-transcription', label: 'Teams 받아쓰기', desc: 'Microsoft Teams 통화용.' },
      ]}
    />
  )
}
