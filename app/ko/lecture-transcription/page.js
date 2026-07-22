import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/lecture-transcription',
  'fr': 'https://mictoo.com/fr/lecture-transcription',
  'de': 'https://mictoo.com/de/lecture-transcription',
  'es': 'https://mictoo.com/es/lecture-transcription',
  'ru': 'https://mictoo.com/ru/lecture-transcription',
  'it': 'https://mictoo.com/it/lecture-transcription',
  'pt': 'https://mictoo.com/pt/lecture-transcription',
  'pl': 'https://mictoo.com/pl/lecture-transcription',
  'ja': 'https://mictoo.com/ja/lecture-transcription',
  'ko': 'https://mictoo.com/ko/lecture-transcription',
  'x-default': 'https://mictoo.com/lecture-transcription',
}

export const metadata = {
  title: '강의 전사 서비스 | Mictoo',
  description:
    '녹음된 수업, 강의 또는 세미나를 업로드하고 검색 가능한 텍스트, 타임스탬프, AI 요약 및 파일을 내보내세요.',
  alternates: {
    canonical: 'https://mictoo.com/ko/lecture-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: '강의 전사: 무료 전사 생성기 | Mictoo',
    description: '녹음된 수업이나 세미나를 업로드하고 몇 초 안에 깔끔한 텍스트를 얻으세요.',
    url: 'https://mictoo.com/ko/lecture-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '강의 전사: 무료 생성기',
    description: '수업이나 세미나 녹음을 업로드하세요.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function KoLectureTranscriptionPage() {
  return (
    <UseCaseLayout
      locale="ko"
      badge="학생 · 학계 · 무료"
      h1First="강의 전사"
      h1Second="수업 및 세미나를 위한 무료 전사"
      subtitle="Zoom, Panopto, YouTube, Kaltura 또는 휴대폰에서 녹음한 강의를 업로드하세요. 학습 노트, 복습 및 인용을 위한 타임스탬프가 포함된 검색 가능한 전사를 얻으세요."
      currentHref="/ko/lecture-transcription"

      platforms={[
        { name: 'Zoom',      iconKey: 'videoCameraFill', brandBg: '#2D8CFF', href: '/ko/zoom-transcription' },
        { name: 'YouTube',   iconKey: 'videoCameraFill', brandBg: '#FF0000' },
        { name: 'Panopto',   iconKey: 'cap',             brandBg: '#014A96' },
        { name: 'Kaltura',   iconKey: 'cap',             brandBg: '#FA6425' },
        { name: 'Camtasia',  iconKey: 'videoCameraFill', brandBg: '#00A651' },
        { name: 'Voice Memo',iconKey: 'mic',             brandBg: '#F97316', href: '/ko/voice-memo-to-text' },
      ]}

      howItWorksTitle="강의 전사 작동 방식"
      steps={[
        {
          icon: 'folder',
          title: '강의 내보내기',
          desc: 'Panopto/Kaltura에서 다운로드하거나, Zoom 클라우드에서 저장하거나, 수업 중에 휴대폰으로 녹음하세요.',
        },
        {
          icon: 'upload',
          title: '파일을 여기로 드롭하세요',
          desc: 'MP3, MP4, M4A, WAV, MOV 모두 작동합니다. 긴 강의는 로그인 시 자동으로 분할됩니다.',
        },
        {
          icon: 'editPen',
          title: '노트, 요약, 인용',
          desc: '검색 가능한 타임스탬프 전사, AI 요약, 학습 노트를 위한 DOCX. 시험 준비를 위해 전사와 대화하세요.',
        },
      ]}

      exampleTitle="예시 강의 전사"
      exampleFileName="intro-microeconomics-lecture-08.mp4"
      exampleDurationLabel="47분 32초"
      exampleLines={[
        { t: '0:00',  line: '좋습니다. 지난 주에 소비자 잉여 개념을 마쳤습니다. 오늘은 생산자 잉여로 그 개념을 확장합니다.' },
        { t: '0:11',  line: '생산자 잉여는 생산자가 상품에 대해 수용할 의사가 있는 금액과 실제로 받는 금액의 차이입니다.' },
        { t: '0:23',  line: '소비자 잉여와 생산자 잉여를 합치면 세금이나 가격 통제를 도입하기 전의 시장에서의 총 복지를 제공합니다.' },
        { t: '0:35',  line: '그렇다면 이 개념이 실제로 왜 중요할까요? 정책이 시장을 개선하는지 악화시키는지 평가할 수 있게 해주기 때문입니다.' },
        { t: '0:47',  line: '단위 세금을 고려해보세요. 세금 금액만큼 공급 곡선이 위로 이동하고, 두 잉여 모두 줄어듭니다.' },
        { t: '0:58',  line: '구매자가 지불하는 금액과 판매자가 받는 금액 사이에 나타나는 간극을 우리는 사중손실이라고 부릅니다.' },
        { t: '1:08',  line: '워크북을 31페이지로 열어보세요. 함께 수치 예제를 풀어봅시다.' },
      ]}
      summaryPoints={[
        '요약: 이전 강의에서의 소비자 잉여.',
        '새로운 개념: 생산자 잉여와 총 복지.',
        '세금 분석에 적용됨.',
        '사중손실을 수치적으로 설명함.',
      ]}
      actionItems={[
        '워크북 31페이지 검토',
        '사중손실 계산 연습',
        '목요일 전에 4장 읽기',
      ]}

      whyTitle="강의 전사에 Mictoo를 선택하는 이유"
      whyCards={[
        {
          icon: 'search',
          title: '전사 내에서 검색 가능',
          desc: '45분 강의 전체에서 Ctrl-F로 어떤 개념이든 1초 안에 찾을 수 있습니다. 비디오를 스크럽하는 것보다 낫습니다.',
        },
        {
          icon: 'sparkles',
          title: '복습 노트를 위한 AI 요약',
          desc: '요약은 훌륭한 복습 시작점입니다. 이미 아는 것은 줄이고, 놓친 것은 유지하세요.',
        },
        {
          icon: 'chat',
          title: '강의와 대화하기',
          desc: '시험 준비를 위해 자료에 대한 질문을 하세요. RAG 스타일의 답변은 정확한 타임스탬프를 인용합니다.',
        },
        {
          icon: 'globe',
          title: '비원어민 학생을 위한 번역',
          desc: '영어로 강의하지만 포르투갈어로 공부하나요? 50개 이상의 언어로 원클릭 번역.',
        },
      ]}

      scenariosTitle="일반적인 강의 시나리오"
      scenarios={[
        { icon: 'book',      title: '대학 수업' },
        { icon: 'cap' ,      title: '온라인 코스' },
        { icon: 'search',    title: '시험 복습' },
        { icon: 'editPen',   title: '학습 노트' },
        { icon: 'globe',     title: '비원어민 학생' },
        { icon: 'headset',   title: '녹음된 세미나' },
      ]}

      tipsTitle="더 깔끔한 강의 전사를 위한 팁"
      tips={[
        '앞쪽에 앉고 휴대폰을 백업 마이크로 사용하세요.',
        '60 MB를 초과하는 긴 강의는 로그인 시 자동으로 분할됩니다.',
        '기술적이거나 비영어 콘텐츠에 대해 언어를 명시적으로 설정하세요.',
        '전사 후에 후속 질문을 하려면 채팅을 사용하세요.',
      ]}

      guidesTitle="관련 학습 도구"
      guides={[
        { href: '/ko/zoom-transcription',        icon: 'video', title: 'Zoom 강의',      desc: '클라우드 녹음 다운로드' },
        { href: '/ko/youtube-to-text',           icon: 'video', title: 'YouTube 강의',   desc: 'URL 붙여넣기 또는 업로드' },
        { href: '/ko/voice-memo-to-text',        icon: 'mic',   title: '휴대폰 녹음',   desc: '수업 중 iPhone 음성 메모' },
        { href: '/ko/timestamped-transcription', icon: 'file',  title: '타임스탬프 노트', desc: '시간 정렬된 내보내기' },
      ]}

      faq={[
        {
          q: 'Zoom 수업 녹음을 전사할 수 있나요?',
          a: '네. 클라우드 녹음 MP4 또는 M4A를 다운로드하고 여기로 드롭하세요. 정확한 다운로드 경로는 Zoom 가이드를 참조하세요.',
        },
        {
          q: '제 강의가 60 MB를 초과합니다. 어떻게 하나요?',
          a: '로그인하여 자동 분할을 활성화하세요 (약 3시간까지). 또는 ffmpeg로 64 kbps 모노 MP3로 다운샘플링하여 5배 크기를 줄이세요.',
        },
        {
          q: 'Mictoo는 비영어 강의를 전사하나요?',
          a: '네. Whisper large-v3는 50개 이상의 언어를 지원합니다. 기술 용어나 강한 억양에 대해 언어를 명시적으로 설정하세요.',
        },
        {
          q: '전사 내에서 검색할 수 있나요?',
          a: '네. 리더 보기에는 일치 수와 하이라이트가 있는 검색 상자가 포함됩니다. Ctrl-F로 용어를 입력하고 일치 항목 간에 이동하세요.',
        },
        {
          q: '강의 자료에 대해 질문할 수 있나요?',
          a: '네. 전사와 대화하면 "사중손실 설명해줘" 또는 "교수님이 언급한 페이지는 무엇인가요"라고 질문할 수 있습니다. 답변은 타임스탬프를 인용합니다.',
        },
        {
          q: '강의 노트를 DOCX 또는 PDF로 내보낼 수 있나요?',
          a: '네. 누구나 사용할 수 있는 DOCX, 로그인한 사용자에게는 PDF 및 JSON이 제공됩니다. TXT는 항상 사용할 수 있습니다.',
        },
        {
          q: '강의 녹음이 서버에 보관되나요?',
          a: '아니요. 오디오가 전사 제공업체로 스트리밍되고, 한 번 처리된 후 삭제됩니다. 전사는 로그인한 경우에만 저장됩니다.',
        },
      ]}

      ctaHeadline="강의를 학습 노트로 변환하세요"
      ctaSubtitle="검색 가능한 전사, AI 요약, 자료와 대화하세요. 강의당 무료입니다."
      ctaButton="강의 업로드"

      relatedLinks={[
        { href: '/ko/webinar-transcription',     label: '웨비나 전사' },
        { href: '/ko/sermon-transcription',      label: '설교 전사' },
        { href: '/ko/voice-memo-to-text',        label: '음성 메모를 텍스트로' },
        { href: '/ko/interview-transcription',   label: '인터뷰 전사' },
        { href: '/ko/meeting-transcription',     label: '회의 전사' },
      ]}
    />
  )
}