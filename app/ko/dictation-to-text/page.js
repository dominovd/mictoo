import UseCaseLayout from '@/components/UseCaseLayout'

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
  title: '녹음된 음성을 텍스트로 변환 | Mictoo',
  description:
    '음성 초안을 녹음하고, 파일을 업로드하여 편집 가능한 텍스트와 타임스탬프, 작성 워크플로우를 위한 내보내기 옵션을 받으세요.',
  alternates: {
    canonical: 'https://mictoo.com/ko/dictation-to-text',
    languages: LANGS,
  },
  openGraph: {
    title: '텍스트로의 음성 변환: 무료 | Mictoo',
    description: '음성으로 초안을 녹음하고, 파일을 드롭하여 깔끔한 텍스트를 얻으세요.',
    url: 'https://mictoo.com/ko/dictation-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '텍스트로의 음성 변환',
    description: '전문가를 위한 음성 중심의 글쓰기.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function KoDictationToTextPage() {
  return (
    <UseCaseLayout
      locale="ko"
      badge="작가 · 전문가 · 무료"
      h1First="텍스트로의 음성 변환"
      h1Second="타이핑보다 빠르게 생각하는 누구나를 위한 음성 중심의 글쓰기"
      subtitle="휴대폰, 노트북 또는 어떤 음성 녹음기로든 초안을 녹음하세요. 파일을 드롭하세요. 편집기에서 붙여넣기 위해 준비된 깔끔하고 문장 부호가 있는 텍스트를 얻으세요. 긴 형식의 콘텐츠에 대해 내장된 전화 음성 변환보다 더 나은 정확도를 제공합니다."
      currentHref="/ko/dictation-to-text"

      platforms={[
        { name: 'iPhone',       iconKey: 'mic',       brandBg: '#0F172A' },
        { name: 'Google Rec',   iconKey: 'mic',       brandBg: '#4285F4' },
        { name: 'Windows Rec',  iconKey: 'mic',       brandBg: '#0078D4' },
        { name: 'QuickTime',    iconKey: 'videoCameraFill', brandBg: '#374151' },
        { name: 'Audacity',     iconKey: 'soundwave', brandBg: '#0B60D6' },
        { name: 'Dragon',       iconKey: 'mic',       brandBg: '#DC2626' },
      ]}

      howItWorksTitle="음성을 텍스트로 변환하는 방법"
      steps={[
        {
          icon: 'folder',
          title: '초안 녹음하기',
          desc: '어떤 녹음기든지: 전화 음성 메모, 노트북 음성 녹음기, 또는 전용 음성 변환 앱.',
        },
        {
          icon: 'upload',
          title: '파일을 여기로 드롭하세요',
          desc: 'M4A (iPhone), MP3 (Android), WAV (녹음기). 익명으로 최대 25 MB, 로그인 시 60 MB까지 무료입니다.',
        },
        {
          icon: 'editPen',
          title: '편집할 준비가 된 깔끔한 텍스트',
          desc: '자동 문장 부호, 문장 구분 및 형식. 내보내기 전에 수정할 수 있도록 편집기 모드로 전환하세요.',
        },
      ]}

      exampleTitle="예시 음성 초안"
      exampleFileName="chapter-3-draft.m4a"
      exampleDurationLabel="12분 44초"
      exampleLines={[
        { t: '0:00',  line: '3장. 재판의 아침.' },
        { t: '0:06',  line: '알렉스는 거의 잠을 자지 못했다. 정확히 불안해서가 아니라 긴 준비 후에 따르는 이상한 정적 때문이다.' },
        { t: '0:20',  line: '6개월 동안, 모든 깨어있는 시간은 사건에 의해 소비되었다. 그리고 이제, 갑자기, 할 일이 없었다.' },
        { t: '0:36',  line: '법원은 그녀의 아파트에서 3블록 떨어져 있었다. 그녀는 천천히 걸으며 차가운 3월 공기가 스며들도록 했다.' },
        { t: '0:50',  line: '그녀가 앞 계단에 도착했을 때, 기자들은 이미 모여 있었고, 그들이 아는 얼굴을 기다리고 있었다.' },
        { t: '1:04',  line: '그녀는 고개를 숙이고 그들을 지나쳤다. 질문할 시간은 나중에 있을 것이다. 그 전에 아니다.' },
        { t: '1:18',  line: '안으로 들어가니 로비는 대부분 비어 있었다. 몇 명의 직원, 한 명의 청소부, 그리고 이번 주 매일 본 경비원.' },
      ]}
      summaryPoints={[
        '3장 시작: 재판의 아침.',
        '캐릭터: 알렉스, 주인공, 불안하지 않은 불면증.',
        '설정: 차가운 3월 아침, 법원은 3블록 떨어져 있음.',
        '밖의 미디어 존재; 안은 비어 있음.',
      ]}
      actionItems={[]}

      whyTitle="왜 Mictoo를 선택해야 할까요"
      whyCards={[
        {
          icon: 'target',
          title: '녹음된 초안을 위해 설계됨',
          desc: '먼저 전체 초안을 녹음한 후, 하나의 파일로 전사합니다. 이렇게 하면 텍스트를 검토하고 수정하는 동안 원본 오디오를 사용할 수 있습니다.',
        },
        {
          icon: 'editPen',
          title: '음성 변환 후 정리를 위한 편집기',
          desc: '편집기 모드로 전환하여 이름을 수정하고, 단락 구분을 추가하고, 작성 앱에 맞게 DOCX로 내보내세요.',
        },
        {
          icon: 'sparkles',
          title: '개요 추출을 위한 AI 요약',
          desc: '장면의 강력한 첫 번째 초안, 메모의 핵심 포인트 또는 기사 구조.',
        },
        {
          icon: 'globe',
          title: '모든 언어로 음성 변환',
          desc: '자동 감지로 50개 이상의 언어 지원. 다국어 작가는 설정을 변경하지 않고도 녹음 간에 언어를 전환할 수 있습니다.',
        },
      ]}

      scenariosTitle="일반적인 음성 변환 시나리오"
      scenarios={[
        { icon: 'editPen', title: '첫 번째 초안' },
        { icon: 'book',    title: '장 음성 변환' },
        { icon: 'briefcase', title: '메모 / 이메일' },
        { icon: 'chat',    title: '일기 쓰기' },
        { icon: 'search',  title: '연구 노트' },
        { icon: 'globe',   title: '다국어' },
      ]}

      tipsTitle="더 깔끔한 음성 변환을 위한 팁"
      tips={[
        '명확한 문장 부호를 원하면 "쉼표", "마침표", "새 단락"이라고 말하세요.',
        '단어를 구별하기 쉽게 조용한 방에서 녹음하세요.',
        '60 MB가 넘는 긴 장의 경우, 자동 분할을 위해 로그인하세요.',
        '내보내기 전에 편집기 모드에서 이름과 기술 용어를 검토하세요.',
      ]}

      guidesTitle="관련 도구"
      guides={[
        { href: '/ko/voice-memo-to-text',      icon: 'mic',    title: '음성 메모',   desc: '아이디어 캡처, 초안 작성 아님' },
        { href: '/ko/m4a-to-text',             icon: 'file',   title: 'M4A 형식',   desc: 'iPhone / Apple 내보내기' },
        { href: '/ko/transcribe-mp3-to-text',  icon: 'file',   title: 'MP3 형식',   desc: 'Android 녹음기 내보내기' },
        { href: '/ko/interview-transcription', icon: 'chat',   title: '인터뷰',    desc: '두 사람의 녹음된 대화' },
      ]}

      faq={[
        {
          q: 'Mictoo는 라이브 전화 음성 변환과 어떻게 다릅니까?',
          a: 'Mictoo는 타이핑하는 동안 라이브로 듣는 것이 아니라 저장된 녹음에서 작동합니다. 이는 현재 파일 크기 및 지속 시간 제한에 따라 원본 오디오에 대해 긴 초안을 검토하는 데 유용합니다.',
        },
        {
          q: '기술적이거나 의학적 용어를 음성 변환할 수 있습니까?',
          a: 'Whisper는 일반적인 기술 용어를 잘 처리합니다. 드물거나 독점적인 용어의 경우, 전사 후 편집기 모드에서 수정하여 빠르게 진행하세요.',
        },
        {
          q: '음성 변환의 파일 크기 제한은 무엇입니까?',
          a: '익명으로 25 MB, 로그인 시 60 MB입니다. 일반 비트레이트로 60분의 음성 녹음은 20-30 MB이므로 대부분의 음성 변환 세션은 무료 한도 내에 포함됩니다.',
        },
        {
          q: 'Mictoo가 자동으로 문장 부호를 추가합니까?',
          a: '예. 문장과 단락은 말의 리듬에서 감지됩니다. 특정 지점에서 명확한 문장 부호를 원하면 "쉼표" 또는 "마침표"라고 말하세요.',
        },
        {
          q: '내보내기 전에 전사본을 편집할 수 있습니까?',
          a: '예. 편집기 모드로 전환하여 어떤 단어 또는 줄을 인라인으로 편집하세요. 변경 사항을 저장하고 TXT, DOCX 또는 PDF(로그인 시)로 내보내세요.',
        },
        {
          q: '내가 음성 변환한 초안을 번역할 수 있습니까?',
          a: '예. 목표 언어를 선택하고 번역을 클릭하세요. 두 번째 언어로 작업하는 작가나 작업 버전을 작성하는 번역가에게 유용합니다.',
        },
        {
          q: '음성 변환이 귀하의 서버에 저장됩니까?',
          a: '아니요. 오디오는 전사 제공업체로 스트리밍되고, 한 번 처리된 후 삭제됩니다. 로그인하고 저장하면 전사본만 지속됩니다.',
        },
      ]}

      ctaHeadline="음성 초안을 텍스트로 변환하세요"
      ctaSubtitle="장, 메모, 기사, 일기 항목. 이미 말하고 싶은 내용을 알고 있다면 타이핑보다 빠릅니다."
      ctaButton="음성 변환 업로드"

      relatedLinks={[
        { href: '/ko/voice-memo-to-text',      label: '음성 메모를 텍스트로' },
        { href: '/ko/interview-transcription', label: '인터뷰 전사' },
        { href: '/ko/lecture-transcription',   label: '강의 전사' },
        { href: '/ko/m4a-to-text',             label: 'M4A를 텍스트로' },
        { href: '/ko/transcribe-mp3-to-text',  label: 'MP3를 텍스트로' },
      ]}
    />
  )
}