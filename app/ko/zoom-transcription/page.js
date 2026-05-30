import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/zoom-transcription',
  'fr': 'https://mictoo.com/fr/zoom-transcription',
  'de': 'https://mictoo.com/de/zoom-transcription',
  'es': 'https://mictoo.com/es/zoom-transcription',
  'ru': 'https://mictoo.com/ru/zoom-transcription',
  'it': 'https://mictoo.com/it/zoom-transcription',
  'pt': 'https://mictoo.com/pt/zoom-transcription',
  'pl': 'https://mictoo.com/pl/zoom-transcription',
  'ja': 'https://mictoo.com/ja/zoom-transcription',
  'ko': 'https://mictoo.com/ko/zoom-transcription',
  'x-default': 'https://mictoo.com/zoom-transcription',
}

export const metadata = {
  title: 'Zoom 받아쓰기 — Zoom 녹화를 무료로 받아쓰기 | Mictoo',
  description:
    '무료 Zoom 받아쓰기. Cloud Recording(MP4) 또는 로컬 녹화(M4A)를 업로드하여 정확한 AI 받아쓰기를 몇 초 만에 받으세요. 가입 불필요, 분당 과금 없음.',
  alternates: { canonical: 'https://mictoo.com/ko/zoom-transcription', languages: LANGS },

  openGraph: {
    title: "Zoom 받아쓰기 — Zoom 녹화를 무료로 받아쓰기 | Mictoo",
    description: "무료 Zoom 받아쓰기. Cloud Recording(MP4) 또는 로컬 녹화(M4A)를 업로드하여 정확한 AI 받아쓰기를 몇 초 만에 받으세요. 가입 불필요, 분당 과금 없음.",
    url: "https://mictoo.com/ko/zoom-transcription",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zoom 받아쓰기 — Zoom 녹화를 무료로 받아쓰기 | Mictoo",
    description: "무료 Zoom 받아쓰기. Cloud Recording(MP4) 또는 로컬 녹화(M4A)를 업로드하여 정확한 AI 받아쓰기를 몇 초 만에 받으세요. 가입 불필요, 분당 과금 없음.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function KoZoomPage() {
  return (
    <LandingLayout
      defaultLanguage="ko"
      badge="ZOOM · MP4 · M4A · 무료"
      h1={<>Zoom 받아쓰기<br /><span className="text-brand-600">Zoom 녹화를 텍스트로 변환</span></>}
      subtitle="Zoom 녹화를 깨끗한 텍스트로 변환. Cloud Recording MP4 또는 로컬 M4A, 둘 다 작동. 파일을 드롭하고 몇 초 만에 받아쓰기 받기."
      howItWorks={[
        { icon: '🎬', title: 'Zoom 녹화 내보내기', desc: 'Cloud Recordings는 MP4(비디오 + 오디오) 또는 M4A(오디오만)로 다운로드. Local Recordings는 장치에 MP4와 M4A로 저장. 두 포맷 모두 여기서 작동.' },
        { icon: '⚡', title: '파일 드롭', desc: '드래그만. 비디오면 오디오를 꺼내 Whisper large-v3로 보냅니다. 30분 회의는 보통 1분 미만에 완료.' },
        { icon: '📋', title: '받아쓰기 받기', desc: '읽고, 복사하거나 TXT 또는 SRT로 다운로드. 내보내기 전에 잘못된 이름이나 기술 용어를 인라인으로 수정.' },
      ]}
      whyUse={{ title: 'Zoom 녹화에 Mictoo를 사용하는 이유', bullets: [
        { title: '무료 계획을 포함한 모든 Zoom 계획에서 작동', desc: 'Zoom의 받아쓰기는 특정 유료 계획에 제한. 우리는 Zoom 계획 요구 사항이 없습니다. 녹화, 다운로드, 업로드, 완료.' },
        { title: '비원어민 영어와 코드 스위칭에 더 좋음', desc: 'Whisper large-v3는 역사적으로 영어 우선이었던 Zoom 내장 받아쓰기보다 억양과 이중 언어 회의를 더 잘 처리합니다.' },
        { title: '오디오만 M4A는 직접 업로드에 충분히 작음', desc: '대부분의 30분 Zoom 회의는 M4A로 15-25 MB에 도달. 압축 없이 무료 계층에 편안하게 맞습니다.' },
        { title: '14일 보존 걱정 없음', desc: 'Zoom Cloud Recordings는 계획에 따라 14-30일 후 사라질 수 있습니다. 파일을 다운로드하여 여기서 받아쓰기하면 영원히 당신의 것.' },
        { title: '프라이버시', desc: '파일은 받아쓰기 제공업체로 스트리밍되고 폐기됩니다. Zoom 녹화를 데이터베이스나 스토리지에 기록하지 않습니다.' },
      ]}}
      useCases={{ title: '사람들이 Zoom 녹화를 받아쓰는 용도', items: [
        { title: '내부 회의 의사록', desc: '녹화를 통과시키고, 텍스트를 받고, Notion이나 Confluence에 붙여넣기. 회의를 놓친 사람들은 60분 비디오 대신 5분 읽기로 따라잡습니다.' },
        { title: '클라이언트와 영업 통화', desc: 'CRM의 거래 옆에 받아쓰기 저장. 6개월 후 미래의 당신이 감사할 것입니다.' },
        { title: '분산 팀을 위한 비동기 스탠드업', desc: '일부 팀은 라이브 회의 대신 비동기 스탠드업을 녹화합니다. 받아쓰기가 검색 가능하고 훑어볼 수 있게 만듭니다.' },
        { title: '연구 인터뷰', desc: '질적 연구, 사용자 인터뷰, 후보자 스크리닝 통화. 코딩하고 태그를 다는 것은 비디오가 아닌 텍스트.' },
        { title: '웨비나와 패널 받아쓰기', desc: '접근성과 발견 가능성을 위해 녹화와 함께 받아쓰기 게시. 검색 엔진은 비디오가 아닌 텍스트를 인덱싱.' },
      ]}}
      proTips={{ title: 'Zoom 받아쓰기 팁', tips: [
        { title: 'MP4 대신 오디오만 M4A 다운로드', desc: 'Zoom Cloud Recording은 둘 다 제공. M4A는 동일한 오디오 품질에 MP4의 10분의 1 크기. 더 빠른 업로드, 대부분의 회의에서 60 MB 한도 훨씬 아래.' },
        { title: '멀티스피커 회의에는 "Record a separate audio file for each participant" 활성화', desc: 'Zoom 설정, 녹화 아래. 스피커당 하나의 M4A를 제공. 각각을 별도로 받아쓰기하면 분리 없이 깨끗한 스피커 귀속.' },
        { title: '말하지 않는 참가자 음소거', desc: '프레젠테이션 중 열린 마이크의 배경 소음은 받아쓰기에 유령 단어를 생성. 큰 통화에서는 강제할 가치가 있습니다.' },
        { title: '로컬과 클라우드 녹화는 같은 품질', desc: '둘 다 기본적으로 같은 오디오 설정으로 녹화. 로컬은 더 빠름(먼저 Zoom에 업로드 안 함), 디스크 공간 필요.' },
        { title: '민감한 콘텐츠에는 로컬 녹화 사용', desc: 'Cloud Recording은 회의를 Zoom 서버에 저장. 로컬 녹화는 어디로 가는지 선택할 때까지 장치에 머무름. 기밀 클라이언트나 HR 대화에는 로컬 → 직접 우리에게가 프라이버시를 보존하는 방법.' },
        { title: '긴 Zoom 회의(60분 초과)는 분할 필요', desc: '우리 파일 한도는 가입으로 60분. 90분 통화는 45분 청크 2개로 분할. Audacity에서 쉽게(File, Export, Multiple) 또는 ffmpeg로.' },
      ]}}
      faq={[
        { q: 'Mictoo가 Zoom Cloud Recordings에서 작동합니까?', a: '네. Zoom 녹화 라이브러리에서 MP4 또는 M4A를 다운로드한 다음 여기에 업로드. M4A 오디오 전용 내보내기가 빠르고 작습니다.' },
        { q: 'Zoom Phone 통화 녹화에서 작동합니까?', a: '네. Zoom Phone은 MP3 또는 M4A로 녹화. 둘 다 작동. 전화 품질 오디오(8 kHz 모노)는 비디오 회의 오디오보다 약간 정확도가 낮지만 결과는 여전히 읽을 수 있습니다.' },
        { q: '로컬 Zoom 녹화는 어떻습니까?', a: '같은 이야기. Zoom은 기본 Zoom 폴더에 MP4와 M4A로 저장. M4A를 여기에 드롭.' },
        { q: '스피커 레이블을 받을 수 있습니까?', a: '자동으로는 안 됩니다. Zoom 설정에서 "Record a separate audio file for each participant"를 활성화했다면 각 스피커의 파일을 별도로 받아쓸 수 있습니다. 그렇지 않으면 대화 흐름에 따라 수동으로 스피커 레이블을 추가해야 합니다.' },
        { q: 'Zoom 녹화가 60 MB를 초과합니다. 이제 어떻게?', a: 'MP4 대신 오디오 전용 M4A 다운로드 사용. 여전히 너무 크면 청크로 분할하거나 더 낮은 비트레이트로 재인코딩. 압축과 분할 가이드 참조.' },
        { q: 'Zoom 내장 받아쓰기와 비교하면?', a: '우리는 비원어민 영어, 억양에서 더 좋고 언어 지원이 더 넓습니다(50개 이상). Zoom 내장 받아쓰기는 이미 적절한 Zoom 계획을 지불하고 있다면 더 편리. 우리 것은 무료이고 Zoom 계층에 관계없이 작동합니다.' },
        { q: '내 Zoom 녹화가 서버에 저장됩니까?', a: '아니요. 파일은 받아쓰기 제공업체(Groq, 백업으로 OpenAI)로 스트리밍되고, 받아쓰기되고, 폐기됩니다. 녹화를 디스크에 기록하지 않습니다.' },
        { q: 'Zoom 회의를 실시간으로 받아쓸 수 있습니까?', a: '아니요. 녹화된 파일로만 작동. 회의 중 실시간에는 Zoom 내장 도구나 전용 미팅 어시스턴트가 올바른 선택.' },
        { q: 'Zoom 웨비나와 대규모 회의는?', a: '같은 워크플로우. 녹화 다운로드, 업로드, 받아쓰기. 매우 긴 웨비나(60분 초과)는 먼저 분할.' },
        { q: '회의의 채팅 메시지가 받아쓰여집니까?', a: '아니요. 채팅 메시지는 Zoom에 의해 별도로 저장(Zoom 폴더 내 TXT로). 오디오만 받아쓰기. 둘 다 필요하면 직접 결합.' },
        { q: 'Zoom 오디오 받아쓰기의 정확도는?', a: '좋은 마이크의 깨끗한 회의 오디오: 90-95%. 나쁜 오디오의 회의(노트북 마이크, 시끄러운 방, 약한 WiFi)는 정확도가 약간 떨어집니다. 이름과 기술 용어는 보통 정리가 필요합니다.' },
        { q: 'Microsoft Teams나 Google Meet 녹화에서도 작동합니까?', a: '네, 같은 엔진. Google Meet과 Microsoft Teams용 전용 페이지가 있습니다.' },
      ]}
      relatedLinks={[
        { href: '/ko/google-meet-transcription', label: 'Google Meet 받아쓰기', desc: 'Google Meet 녹화용 같은 워크플로우.' },
        { href: '/ko/teams-meeting-transcription', label: 'Teams 받아쓰기', desc: 'Microsoft Teams 녹화용.' },
        { href: '/ko/meeting-transcription', label: '회의 받아쓰기', desc: '다른 플랫폼 녹화용 일반 페이지.' },
        { href: '/ko/interview-transcription', label: '인터뷰 받아쓰기', desc: '1대1 대화와 질적 인터뷰용.' },
      ]}
    />
  )
}
