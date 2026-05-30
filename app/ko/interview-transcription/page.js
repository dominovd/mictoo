import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/interview-transcription',
  'fr': 'https://mictoo.com/fr/interview-transcription',
  'de': 'https://mictoo.com/de/interview-transcription',
  'es': 'https://mictoo.com/es/interview-transcription',
  'ru': 'https://mictoo.com/ru/interview-transcription',
  'it': 'https://mictoo.com/it/interview-transcription',
  'pt': 'https://mictoo.com/pt/interview-transcription',
  'pl': 'https://mictoo.com/pl/interview-transcription',
  'ja': 'https://mictoo.com/ja/interview-transcription',
  'ko': 'https://mictoo.com/ko/interview-transcription',
  'x-default': 'https://mictoo.com/interview-transcription',
}

export const metadata = {
  title: '인터뷰 받아쓰기 — 무료 AI 생성기 | Mictoo',
  description:
    '무료 AI 인터뷰 받아쓰기. 인터뷰 녹화(MP3, M4A, MP4, WAV)를 업로드하여 타임코드가 있는 깨끗한 받아쓰기를 몇 초 만에 받으세요. 기자와 연구자를 위해 제작됨.',
  alternates: { canonical: 'https://mictoo.com/ko/interview-transcription', languages: LANGS },

  openGraph: {
    title: "인터뷰 받아쓰기 — 무료 AI 생성기 | Mictoo",
    description: "무료 AI 인터뷰 받아쓰기. 인터뷰 녹화(MP3, M4A, MP4, WAV)를 업로드하여 타임코드가 있는 깨끗한 받아쓰기를 몇 초 만에 받으세요. 기자와 연구자를 위해 제작됨.",
    url: "https://mictoo.com/ko/interview-transcription",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "인터뷰 받아쓰기 — 무료 AI 생성기 | Mictoo",
    description: "무료 AI 인터뷰 받아쓰기. 인터뷰 녹화(MP3, M4A, MP4, WAV)를 업로드하여 타임코드가 있는 깨끗한 받아쓰기를 몇 초 만에 받으세요. 기자와 연구자를 위해 제작됨.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function KoInterviewPage() {
  return (
    <LandingLayout
      defaultLanguage="ko"
      badge="저널리즘 · 연구 · 무료"
      h1={<>인터뷰 받아쓰기<br /><span className="text-brand-600">무료 인터뷰 받아쓰기</span></>}
      subtitle="모든 인터뷰 녹화를 깨끗하고 인용 가능한 텍스트로 변환. 기자, 연구자, 팟캐스터, 채용 팀용. 계정 불필요, 분당 과금 없음, 이메일 불필요."
      howItWorks={[
        { icon: '🎙️', title: '인터뷰 오디오 드롭', desc: '음성 레코더의 MP3, 휴대폰의 M4A, 비디오 통화의 MP4, 필드 레코더의 WAV. 모두 작동.' },
        { icon: '⚡', title: 'AI가 받아쓰기', desc: 'Whisper large-v3가 오디오를 읽습니다. 30분 인터뷰는 보통 약 1분에 완료.' },
        { icon: '📋', title: '읽기, 편집, 내보내기', desc: '타임코드가 있는 받아쓰기를 훑어보세요. 잘못된 이름이나 전문 용어를 인라인으로 수정. 메모용 TXT, 비디오용 SRT로 다운로드 또는 코딩 소프트웨어에 복사.' },
      ]}
      whyUse={{ title: '인터뷰 받아쓰기에 Mictoo를 사용하는 이유', bullets: [
        { title: 'Whisper가 인터뷰에서 잘 작동', desc: '두 음성과 명확한 주고받기가 있는 단일 녹화는 음성 인식의 가장 깨끗한 사례. 대부분의 인터뷰는 첫 번째 패스에서 90-95% 정확도에 도달.' },
        { title: '인용과 소스 검색을 위한 타임코드', desc: 'SRT 내보내기의 각 줄에는 타임코드가 있습니다. 인용을 확인하거나 녹화의 특정 순간으로 돌아가야 할 때, 타임코드가 정확히 어디인지 알려줍니다.' },
        { title: '인터뷰당 비용 없음', desc: '일부 받아쓰기 서비스는 분당 또는 인터뷰당 과금. 우리는 그렇지 않습니다. 1개든 50개든 받아쓰기, 가격은 같음(무료).' },
        { title: '50개 이상의 언어, 이중 언어 인터뷰도', desc: '교차 언어 인터뷰는 연구와 저널리즘에서 일반적. Whisper는 대부분의 서비스보다 코드 스위칭을 더 잘 처리.' },
        { title: '프라이버시와 소스 보호', desc: '파일은 받아쓰기 제공업체로 스트리밍되고 폐기. 오디오를 보관하지 않습니다. 민감한 소스 자료에는 중요합니다.' },
      ]}}
      useCases={{ title: '인터뷰 받아쓰기를 사용하는 사람들', items: [
        { title: '저널리즘과 특집 기사 작성', desc: '기자들은 정확하게 인용하고 가장 유용한 자료를 위해 긴 대화를 훑어보기 위해 인터뷰를 받아씁니다. 60분 인터뷰는 종종 출판된 글에서 3-5개의 핵심 인용이 됩니다.' },
        { title: '질적 연구와 학술 연구', desc: '연구자들은 NVivo, Atlas.ti, MAXQDA 같은 도구에서 코딩과 분석을 위해 반구조화 인터뷰를 받아씁니다. 받아쓰기가 데이터셋.' },
        { title: '팟캐스팅 인터뷰', desc: '쇼 호스트는 쇼노트, 에피소드 블로그 게시물, 소셜 미디어용 인용 그래픽을 위해 게스트 인터뷰를 받아씁니다. 오디오는 한 청중에게, 텍스트는 검색을 통해 다른 청중에게 도달.' },
        { title: '채용과 후보자 스크리닝', desc: '채용 담당자와 채용 관리자는 팀과 공유하기 위해 인터뷰를 받아씁니다. 다른 시간대의 검토자에게 비디오보다 쉽습니다. 모두가 같은 텍스트를 가질 때 메모 비교가 쉽습니다.' },
        { title: '사용자 연구와 고객 인터뷰', desc: '제품 팀은 패턴을 찾기 위해 고객과의 대화를 받아씁니다. 받아쓰기는 연구 저장소(Dovetail, Marvin 또는 공유 Notion)로 갑니다.' },
      ]}}
      proTips={{ title: '인터뷰 받아쓰기 팁', tips: [
        { title: '전화 인터뷰에도 실제 마이크 사용', desc: '대면자에게는 라발리에 또는 USB 마이크, 전화로 인터뷰하는 사람에게는 적절한 헤드셋. 녹음 품질은 받아쓰기 정확도의 가장 큰 단일 요인입니다.' },
        { title: '조용한 환경에서 녹음', desc: '카페 인터뷰는 카메라에서 멋지게 보이지만 받아쓰기가 나쁩니다. 배경 음악과 잡담은 사람들이 생각하는 것보다 정확도를 더 손상시킵니다.' },
        { title: '두 명의 화자 인터뷰는 먼저 전체 녹화를 받아쓰고 그다음 수동으로 스피커 레이블 추가', desc: 'Whisper는 분리를 하지 않습니다. 깨끗한 질의응답 인터뷰의 경우, "인터뷰어:"와 "소스:"를 추가하는 데 30분 인터뷰당 약 5분이 걸립니다.' },
        { title: '별도의 오디오 트랙(Riverside, SquadCast)이 있다면 각각을 별도로 받아쓰기', desc: '추측 없이 깨끗한 귀속을 얻습니다. 일부 연구 레코더는 스테레오 파일의 두 채널에 두 마이크를 캡처. 먼저 두 모노 파일로 분할할 수 있습니다.' },
        { title: '날짜와 소스 이름으로 받아쓰기 저장', desc: '2026-05-25-jane-smith.txt라는 받아쓰기 파일은 transcript-final-v2.txt보다 6개월 후에 찾기 쉽습니다.' },
        { title: '정확도를 위해 처음 50줄 편집, 나머지는 그대로', desc: '사람들은 받아쓰기를 훑어봅니다. 시작 부분이 가장 중요. 그 이상은 사용할 것이라고 생각하는 인용만 수정.' },
        { title: '인터뷰가 영어가 아닌 경우 언어를 수동으로 설정', desc: '자동 감지는 대부분의 파일에서 작동하지만 처음 5초의 잘못된 시작이 잘못 안내할 수 있습니다. 명시적으로 언어를 선택하는 것이 더 신뢰할 수 있습니다.' },
      ]}}
      faq={[
        { q: '저널리즘 인용에 충분히 정확한가요?', a: '말 그대로의 인용에는 항상 오디오에 대해 확인해야 합니다. Whisper는 깨끗한 인터뷰 오디오에서 단어의 90-95%를 맞춥니다. 놓치는 5-10%는 종종 이름, 전문 용어, 겹치는 음성을 포함합니다. 게시하는 모든 인용에 대해 녹화로 돌아가기 위해 SRT 타임코드를 사용하세요.' },
        { q: '스피커 레이블을 받을 수 있나요?', a: '자동으로는 안 됩니다. 대화 흐름에 따라 추가합니다. 2 스피커 인터뷰는 빠릅니다. 패널이나 포커스 그룹에는 더 많은 시간을 계획하거나 있다면 각 스피커의 트랙을 별도로 업로드.' },
        { q: '다른 언어의 인터뷰를 받아쓸 수 있나요?', a: '네, 자동 감지로 50개 이상의 언어. 5분 미만의 인터뷰나 영어 잡담으로 시작하는 비영어 인터뷰에는 언어를 수동으로 선택.' },
        { q: '내 인터뷰가 90분입니다. 어떻게 해야?', a: '60분 한도 미만의 청크로 분할. 자연스러운 휴식은 대화가 멈추는 곳(인터뷰 중간의 커피, 주제 변경).' },
        { q: '전문 용어와 고유 명사는 얼마나 정확한가요?', a: '일반 어휘보다 덜 정확. Whisper는 소스의 회사 이름, 사용한 의학 용어 또는 참조한 특정 소프트웨어를 모릅니다. 수동으로 수정할 것으로 예상. 받아쓰기의 나머지는 단단할 것입니다.' },
        { q: '오디오가 저장됩니까?', a: '아니요. 파일은 받아쓰기 제공업체(Groq, 백업으로 OpenAI)로 스트리밍되고, 처리되고, 폐기됩니다. 서버에 오디오를 보관하지 않습니다.' },
        { q: '연구 윤리 정책에 준수합니까?', a: '대부분의 IRB 승인 연구 프로토콜은 오디오가 어디서 처리되는지 알아야 합니다. 제공업체는 미국에서 처리. 우리는 보관하지 않습니다. 특정 IRB 준수를 위해서는 워크플로우를 문서화하고 IRB에 확인.' },
        { q: '받아쓰기를 NVivo, Atlas.ti 또는 Dedoose로 가져올 수 있습니까?', a: '네. TXT로 다운로드하여 질적 분석 도구로 가져오기. 받아쓰기는 일반 텍스트, 특별한 포맷 불필요.' },
        { q: '받아쓰기는 얼마나 걸립니까?', a: '오디오 길이의 약 1-2%. 30분 인터뷰는 약 60초에 완료.' },
        { q: '인터뷰의 오디오 품질이 나쁘다면?', a: '먼저 노이즈 제거 도구(Audacity Noise Reduction 또는 Adobe Podcast Enhance)를 통과시키세요. 그런 다음 깨끗한 버전을 업로드. 더 나은 입력이 눈에 띄게 더 나은 출력을 줍니다.' },
        { q: '휴대폰에서 녹음한 인터뷰를 받아쓸 수 있습니까?', a: '네. iPhone 음성 메모는 M4A로 저장, Android 음성 레코더는 보통 M4A 또는 MP3. 둘 다 작동. AirDrop이나 이메일로 컴퓨터에 파일을 보낸 다음 여기에 업로드.' },
        { q: 'SRT의 타임코드가 원본 녹화와 정확히 일치합니까?', a: '네, 밀리초까지. SRT 타임코드는 오디오 파일의 실제 시간을 반영. 모든 오디오나 비디오 플레이어에서 특정 순간으로 돌아가는 데 작동.' },
      ]}
      relatedLinks={[
        { href: '/ko/podcast-transcription', label: '팟캐스트 받아쓰기', desc: '팟캐스트 인터뷰와 호스트 대화용.' },
        { href: '/ko/timestamped-transcription', label: '타임코드 받아쓰기', desc: '단어 또는 문장 수준 타임코드용.' },
        { href: '/ko/voice-memo-to-text', label: '음성 메모를 텍스트로', desc: '전화로 녹음한 인터뷰용.' },
        { href: '/ko/business-transcription', label: '비즈니스 받아쓰기', desc: '영업 통화, 고객 통화, 포커스 그룹용.' },
      ]}
    />
  )
}
