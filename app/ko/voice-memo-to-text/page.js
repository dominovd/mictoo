import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/voice-memo-to-text',
  'fr': 'https://mictoo.com/fr/voice-memo-to-text',
  'de': 'https://mictoo.com/de/voice-memo-to-text',
  'es': 'https://mictoo.com/es/voice-memo-to-text',
  'ru': 'https://mictoo.com/ru/voice-memo-to-text',
  'it': 'https://mictoo.com/it/voice-memo-to-text',
  'pt': 'https://mictoo.com/pt/voice-memo-to-text',
  'pl': 'https://mictoo.com/pl/voice-memo-to-text',
  'ja': 'https://mictoo.com/ja/voice-memo-to-text',
  'ko': 'https://mictoo.com/ko/voice-memo-to-text',
  'x-default': 'https://mictoo.com/voice-memo-to-text',
}

export const metadata = {
  title: '아이폰 및 안드로이드용 음성 메모를 텍스트로 변환 | Mictoo',
  description:
    '아이폰 또는 안드로이드 음성 녹음을 업로드하고 타임스탬프가 있는 텍스트, AI 요약 및 편집 가능한 내보내기를 받으세요.',
  alternates: {
    canonical: 'https://mictoo.com/ko/voice-memo-to-text',
    languages: LANGS,
  },
  openGraph: {
    title: '음성 메모를 텍스트로: 무료 | Mictoo',
    description: '아이폰 또는 안드로이드 음성 녹음을 드롭하고 깔끔한 텍스트를 받으세요.',
    url: 'https://mictoo.com/ko/voice-memo-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '음성 메모를 텍스트로',
    description: '전화 음성 녹음에 대한 무료 전사.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function KoVoiceMemoToTextPage() {
  return (
    <UseCaseLayout
      locale="ko"
      badge="아이폰 · 안드로이드 · 무료"
      h1First="음성 메모를 텍스트로"
      h1Second="전화 음성 녹음에 대한 무료 전사"
      subtitle="아이폰 음성 메모, 안드로이드 음성 녹음, WhatsApp 음성 메모 또는 Telegram 음성 메시지를 드롭하세요. 몇 초 안에 깔끔한 전사를 받으세요. 가입 필요 없음, 분당 요금 없음."
      currentHref="/ko/voice-memo-to-text"

      platforms={[
        { name: '아이폰',       iconKey: 'mic',       brandBg: '#0F172A' },
        { name: 'Google Rec',   iconKey: 'mic',       brandBg: '#4285F4' },
        { name: '삼성',        iconKey: 'mic',       brandBg: '#1428A0' },
        { name: 'WhatsApp',     iconKey: 'phone',     brandBg: '#25D366' },
        { name: 'Telegram',     iconKey: 'phone',     brandBg: '#0088CC' },
        { name: 'Audacity',     iconKey: 'soundwave', brandBg: '#0B60D6' },
      ]}

      howItWorksTitle="음성 메모 전사 작동 방식"
      steps={[
        {
          icon: 'folder',
          title: '녹음 공유하기',
          desc: '아이폰: 음성 메모에서 공유 시트. 안드로이드: 파일 앱에서 파일. WhatsApp: 파일로 전달하기.',
        },
        {
          icon: 'upload',
          title: '파일을 여기 드롭하세요',
          desc: 'M4A (아이폰), MP3 (안드로이드), OPUS/OGG (WhatsApp, Telegram) 모두 직접 작동합니다.',
        },
        {
          icon: 'editPen',
          title: '몇 초 안에 전사',
          desc: '5분 음성 메모는 약 10초 만에 완료됩니다. AI 요약은 산만한 아이디어를 간결한 작업 목록으로 변환합니다.',
        },
      ]}

      exampleTitle="예시 음성 메모 전사"
      exampleFileName="voice-memo.m4a"
      exampleDurationLabel="3:22"
      exampleLines={[
        { t: '0:00',  line: '좋아, 아이디어를 잊기 전에 간단한 음성 메모를 남길게.' },
        { t: '0:04',  line: '그래서 제안은 체크아웃 흐름을 하나의 긴 양식 대신 두 개의 명확한 단계로 나누는 것입니다.' },
        { t: '0:13',  line: '첫 번째 단계는 이메일과 카드입니다. 두 번째 단계는 확인 번호를 본 후 배송 세부정보입니다.' },
        { t: '0:22',  line: '이것이 중요한 이유는 현재의 단일 페이지 양식에서 이탈률이 약 38%이기 때문입니다.' },
        { t: '0:32',  line: '대부분의 이탈은 카드 입력이 아닌 배송 섹션에서 발생하는데, 이는 직관적이지 않습니다.' },
        { t: '0:42',  line: '배송을 구매 후로 옮기면 아마도 그 트래픽의 12-15%를 회복할 수 있을 것입니다.' },
        { t: '0:52',  line: '타임라인상으로, 저는 이 작업이 프론트엔드 2주, 백엔드 1주, 아마도 테스트 1주가 걸릴 것이라고 생각합니다.' },
      ]}
      summaryPoints={[
        '아이디어: 체크아웃 흐름을 두 단계로 나누기.',
        '1단계: 이메일 + 카드. 2단계: 확인 후 배송.',
        '현재 이탈률: 38%, 주로 배송 섹션에서 발생.',
        '예상 회복: 12-15%의 트래픽.',
      ]}
      actionItems={[
        '두 단계 체크아웃 목업 초안 작성',
        '분석에서 38% 이탈 확인',
        '엔지니어링 범위 설정 (~총 4주)',
      ]}

      whyTitle="음성 메모에 Mictoo를 선택하는 이유"
      whyCards={[
        {
          icon: 'sparkles',
          title: '산만한 메모를 위한 AI 요약',
          desc: '음성 메모는 본질적으로 엉망입니다. 요약은 5분의 생각의 흐름을 두 줄의 요점으로 변환합니다.',
        },
        {
          icon: 'mic',
          title: '아이폰 .m4a 네이티브',
          desc: 'Apple Voice Memos는 .m4a (MP4의 AAC)를 작성합니다. 우리는 이를 직접 수용하며 변환이 필요 없습니다.',
        },
        {
          icon: 'chat',
          title: 'Telegram .oga 네이티브',
          desc: '채팅에서 Telegram 음성 메시지를 저장하고 .oga 파일을 드롭하세요. Opus는 OGG에서 네이티브로 처리됩니다.',
        },
        {
          icon: 'globe',
          title: '다국어 메모 번역',
          desc: '모국어로 된 메모, 팀을 위한 영어 노트. 클릭 한 번으로 가능합니다.',
        },
      ]}

      scenariosTitle="일반적인 음성 메모 시나리오"
      scenarios={[
        { icon: 'sparkles', title: '아이디어 캡처' },
        { icon: 'chat',     title: '회의 노트' },
        { icon: 'editPen',  title: '초안 작성' },
        { icon: 'book',     title: '일기 쓰기' },
        { icon: 'phone',    title: '음성 메시지' },
        { icon: 'globe',    title: '다국어' },
      ]}

      tipsTitle="더 깔끔한 음성 메모를 위한 팁"
      tips={[
        '방 소음을 줄이기 위해 전화기를 가까이 대세요.',
        '60 MB 이상의 긴 메모의 경우, 자동 분할을 위해 로그인하세요.',
        '가장 깔끔한 감지를 위해 메모당 한 언어로 말하세요.',
        '전사가 그곳에서 끊기길 원하면 "새 단락"이라고 말하세요.',
      ]}

      guidesTitle="관련 도구"
      guides={[
        { href: '/ko/m4a-to-text',        icon: 'file',  title: 'M4A 형식',       desc: '아이폰 / GarageBand 심층 분석' },
        { href: '/ko/ogg-to-text',        icon: 'file',  title: 'OGG / .oga',       desc: 'Telegram 음성 심층 분석' },
        { href: '/ko/dictation-to-text',  icon: 'editPen', title: '받아쓰기',      desc: '음성 우선 작성 워크플로우' },
        { href: '/ko/interview-transcription', icon: 'chat', title: '인터뷰',    desc: '전화 또는 대면 인터뷰' },
      ]}

      faq={[
        {
          q: '아이폰 음성 메모를 직접 전사할 수 있나요?',
          a: '네. 음성 메모 앱에서 메모를 공유하고 (공유 시트 → 파일에 저장 또는 자신에게 전송) .m4a 파일을 Mictoo에 드롭하세요. 변환이 필요 없습니다.',
        },
        {
          q: 'Mictoo는 WhatsApp 또는 Telegram 음성 메시지를 전사하나요?',
          a: '네. 채팅에서 음성 메시지를 저장하고 (전달 → 파일로 저장) 드롭하세요. WhatsApp 음성 메모는 .opus, Telegram 음성 메모는 .oga (둘 다 OGG 컨테이너)입니다. 둘 다 직접 작동합니다.',
        },
        {
          q: '파일 크기 제한은 무엇인가요?',
          a: '익명으로는 25 MB, 로그인 시 60 MB입니다. 일반 비트 전송률의 60분 음성 메모는 약 20-30 MB이므로 대부분 무료 한도에 맞습니다.',
        },
        {
          q: 'Mictoo는 비영어 음성 메모를 전사하나요?',
          a: '네. Whisper large-v3는 50개 이상의 언어를 지원합니다. 짧은 메모나 비영어 콘텐츠의 경우, 첫 번째 감지를 더 깔끔하게 하기 위해 언어를 명시적으로 설정하세요.',
        },
        {
          q: '산만한 브레인스토밍 메모의 요약을 받을 수 있나요?',
          a: '네. AI 요약은 전사와 함께 자동으로 나타납니다. 흐름의식을 가진 메모를 간결한 작업 목록으로 변환하는 데 탁월합니다.',
        },
        {
          q: '음성 메모가 귀하의 서버에 저장되나요?',
          a: '아니요. 오디오는 전사 제공업체로 스트리밍되고, 한 번 처리된 후 삭제됩니다. 로그인하고 저장하면 전사만 지속됩니다.',
        },
        {
          q: '내 음성 메모를 다른 언어로 번역할 수 있나요?',
          a: '네. 목표 언어를 선택하고 전사 후 번역을 클릭하세요. GPT-4o-mini가 번역을 처리하며 원본과 함께 나타납니다.',
        },
      ]}

      ctaHeadline="음성 메모를 텍스트 및 작업 항목으로 변환하세요"
      ctaSubtitle="아이폰, 안드로이드, WhatsApp, Telegram 음성 메모. 모든 형식, 하나의 업로드."
      ctaButton="음성 메모 업로드"

      relatedLinks={[
        { href: '/ko/dictation-to-text',       label: '받아쓰기 텍스트' },
        { href: '/ko/interview-transcription', label: '인터뷰 전사' },
        { href: '/ko/m4a-to-text',             label: 'M4A 텍스트' },
        { href: '/ko/ogg-to-text',             label: 'OGG 텍스트' },
        { href: '/ko/meeting-transcription',   label: '회의 전사' },
      ]}
    />
  )
}