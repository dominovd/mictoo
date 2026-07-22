import FormatPageLayout from '@/components/FormatPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/m4a-to-text',
  'fr': 'https://mictoo.com/fr/m4a-to-text',
  'de': 'https://mictoo.com/de/m4a-to-text',
  'es': 'https://mictoo.com/es/m4a-to-text',
  'ru': 'https://mictoo.com/ru/m4a-to-text',
  'it': 'https://mictoo.com/it/m4a-to-text',
  'pt': 'https://mictoo.com/pt/m4a-to-text',
  'pl': 'https://mictoo.com/pl/m4a-to-text',
  'ja': 'https://mictoo.com/ja/m4a-to-text',
  'ko': 'https://mictoo.com/ko/m4a-to-text',
  'x-default': 'https://mictoo.com/m4a-to-text',
}

export const metadata = {
  title: 'M4A를 텍스트로: 무료 iPhone 음성 메모 및 Apple 오디오 전사 | Mictoo',
  description:
    'iPhone 음성 메모, GarageBand, Apple Podcasts 또는 FaceTime에서 M4A 파일을 업로드하고 몇 초 안에 편집 가능한 전사를 받으세요. MP4 내 AAC, 변환 필요 없음.',
  alternates: {
    canonical: 'https://mictoo.com/ko/m4a-to-text',
    languages: LANGS,
  },
  openGraph: {
    title: 'M4A를 텍스트로: iPhone 음성 메모 및 Apple 오디오 전사 | Mictoo',
    description: '음성 메모, GarageBand, Apple Podcasts 또는 FaceTime에서 M4A를 업로드하세요. 몇 초 안에 편집 가능한 전사.',
    url: 'https://mictoo.com/ko/m4a-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'M4A를 텍스트로: 무료 iPhone 음성 메모 전사',
    description: '음성 메모, GarageBand, Apple Podcasts에서 M4A를 업로드하세요. 몇 초 안에 편집 가능한 전사.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function KoM4aToTextPage() {
  return (
    <FormatPageLayout
      locale="ko"
      badge="M4A · AAC · iPhone · 무료"
      h1First="M4A를 텍스트로"
      h1Second="iPhone 음성 메모 및 Apple 오디오용"
      subtitle="M4A는 iPhone 음성 메모 앱이 작성하는 형식이며, GarageBand가 내보내고, Apple Podcasts가 배포하는 형식입니다. 파일을 장치에서 직접 드롭하고, AAC를 유지하며, 몇 초 안에 타임스탬프가 포함된 전사를 받으세요."
      highlightFormat="m4a"
      previewFileName="voice-memo.m4a"
      previewWordCount={148}
      previewDurationLabel="6분 18초"
      previewLines={[
        { t: '0:00',  line: '좋아, 아이디어를 잊기 전에 빠른 음성 메모.' },
        { t: '0:04',  line: '그래서 제안은 체크아웃 흐름을 하나의 긴 양식 대신 두 개의 명확한 단계로 나누는 것입니다.' },
        { t: '0:13',  line: '1단계, 이메일과 카드. 2단계, 확인 번호를 본 후 배송 세부정보.' },
        { t: '0:22',  line: '이것이 중요한 이유는 현재의 단일 페이지 양식에서 이탈률이 약 38%입니다.' },
        { t: '0:32',  line: '대부분의 이탈은 카드 입력이 아닌 배송 섹션에서 발생하는데, 이는 직관적이지 않습니다.' },
        { t: '0:42',  line: '구매 후 배송을 이동하면 아마도 12%에서 15%의 트래픽을 회복할 수 있을 것입니다.' },
        { t: '0:52',  line: '타임라인상으로, 이 작업은 프론트엔드 2주, 백엔드 1주, 아마도 테스트 1주가 필요합니다.' },
        { t: '1:02',  line: '내일 체크아웃 팀과 후속 조치를 취해 그들이 이미 시도한 것이 있는지 확인하세요.' },
      ]}
      whyTitle="M4A 전사에 Mictoo를 선택해야 하는 이유"
      whyCards={[
        {
          icon: 'mic',
          title: 'iPhone 음성 메모를 위해 구축됨',
          desc: '음성 메모 공유 시트 또는 iCloud에서 .m4a 파일을 직접 드롭하세요. 형식에 대한 불만 없이, 변환 단계 없이.',
        },
        {
          icon: 'gear',
          title: 'MP4 내 AAC, 네이티브로 처리됨',
          desc: 'M4A는 MP4 컨테이너 내 AAC 오디오입니다. 우리는 ftyp 박스를 파싱하고, AAC 트랙을 추출하여 Whisper에 전달합니다. 재인코딩 없이.',
        },
        {
          icon: 'sparkles',
          title: '음성 메모 아이디어에 대한 AI 요약',
          desc: '요약이 전사와 함께 나타납니다. 방황하는 브레인스토밍 메모를 간결한 작업 목록으로 변환합니다.',
        },
        {
          icon: 'globe',
          title: '50개 이상의 언어로 번역',
          desc: '스페인어로 된 음성 메모, 프랑스 회의 중 기록된 노트, 일본어로 된 받아쓰기. 전사 후 영어(또는 원하는 언어)로 번역하세요.',
        },
      ]}
      scenariosTitle="M4A를 텍스트로 변환할 때 적합한 경우"
      scenarios={[
        {
          icon: 'mic',
          title: 'iPhone 음성 메모',
          desc: 'iPhone 또는 iPad의 기본 음성 메모 앱에서 모든 녹음. 아이디어, 회의 노트, 인터뷰 클립, 강의.',
        },
        {
          icon: 'briefcase',
          title: 'FaceTime 및 통화 녹음',
          desc: 'FaceTime, WhatsApp 통화 또는 Zoom 세션에서 내보낸 오디오가 종종 M4A로 저장됩니다. 파일을 드롭하여 깨끗한 텍스트 버전을 받으세요.',
        },
        {
          icon: 'sparkles',
          title: 'GarageBand 및 Logic 내보내기',
          desc: 'GarageBand 또는 Logic Pro에서의 보컬 전용 바운스, 팟캐스트 에피소드 또는 인터뷰 편집. 쇼 노트를 작성하기 위한 전사를 받으세요.',
        },
        {
          icon: 'video',
          title: 'Apple Podcasts 에피소드',
          desc: 'Apple Podcasts에서 다운로드한 에피소드(기본적으로 iOS에서 M4A). 인용, 참조 또는 재사용을 위한 전사.',
        },
        {
          icon: 'editPen',
          title: '받아쓰기 및 장문 노트',
          desc: '음성 메모에 장이나 메모, 일기 항목을 받아썼습니다. 이를 편집 가능한 텍스트로 변환하여 작성 앱에 준비하세요.',
        },
        {
          icon: 'users',
          title: '현장 인터뷰',
          desc: '저널리즘, 연구 또는 구술 역사 인터뷰가 iPhone에서 녹음되었습니다. 전사는 이야기나 논문의 원료입니다.',
        },
      ]}
      technicalTitle="M4A에 대해 알아야 할 사항"
      technicalIntro="M4A는 MP4 기반 오디오 컨테이너를 설명하며, 단일 코덱이 아닙니다. 대부분의 음성 녹음은 AAC를 사용하며, 일부 파일은 무손실 ALAC를 사용합니다."
      technicalFacts={[
        {
          icon: 'layers',
          title: '컨테이너 및 코덱',
          desc: '.m4a 파일은 일반적으로 AAC 또는 ALAC 오디오를 포함합니다. 컨테이너는 해당 오디오 스트림 주위의 타이밍 및 메타데이터를 제공합니다.',
        },
        {
          icon: 'mic',
          title: '음성 메모 워크플로우',
          desc: 'iPhone 또는 Mac에서 원본 녹음을 공유하고 MP3로 이름을 바꾸지 않고 업로드할 수 있습니다.',
        },
        {
          icon: 'clip',
          title: '메타데이터는 별도',
          desc: '제목, 아트워크 및 Apple 메타데이터는 전사 텍스트에 삽입되지 않습니다. 이를 노트나 출판 시스템에 보관하세요.',
        },
        {
          icon: 'cloud',
          title: '긴 녹음',
          desc: 'M4A는 일반적으로 컴팩트하지만 긴 음성 메모는 여전히 업로드 제한을 초과할 수 있습니다. 필요할 때 더 작은 음성 복사본으로 나누거나 내보내세요.',
        },
      ]}
      faq={[
        {
          q: 'iPhone 음성 메모에서 M4A를 직접 수락하나요?',
          a: '네. 음성 메모는 표준 M4A(AAC가 MP4 컨테이너에 포함됨)를 작성합니다. 앱에서 파일을 공유하고, iCloud 또는 파일에 저장한 후 여기에 드롭하세요. 변환이 필요 없습니다.',
        },
        {
          q: 'M4A와 MP4의 차이점은 무엇인가요?',
          a: 'M4A는 MP4 컨테이너의 오디오 전용 버전입니다. 둘 다 ftyp 헤더와 AAC 코덱을 사용합니다. .m4a는 오디오 전용 콘텐츠를 나타내고, .mp4는 일반적으로 비디오를 의미합니다. Mictoo는 두 가지 모두를 직접 수락합니다.',
        },
        {
          q: '내 iPhone 녹음이 60 MB를 초과합니다. 이제 어떻게 하나요?',
          a: '90분 음성 메모는 60 MB를 초과할 수 있습니다. 로그인하면 최대 약 3시간까지 자동 분할됩니다. 익명 사용자의 경우 먼저 다운샘플링하세요: ffmpeg -i in.m4a -b:a 64k -ac 1 out.m4a. 음성 품질은 깨끗하게 유지됩니다.',
        },
        {
          q: 'iPhone 메타데이터(제목, 위치, 날짜)가 나타나나요?',
          a: '아니요. 전사는 장치 메타데이터 없이 일반 텍스트입니다. 녹음 날짜나 위치에 의존하는 경우 해당 매핑을 노트에 보관하세요.',
        },
        {
          q: 'Mictoo는 비영어 M4A 파일을 전사하나요?',
          a: '네. Whisper large-v3는 50개 이상의 언어를 자동 감지하여 지원합니다. 짧은 음성 메모나 비영어 억양의 경우, 더 깨끗한 첫 번째 결과를 위해 언어를 명시적으로 설정하세요.',
        },
        {
          q: '이 M4A를 사용하는 비디오에 대한 SRT 자막을 다운로드할 수 있나요?',
          a: '네. 전사 후 SRT 또는 VTT를 다운로드하세요. 타임스탬프는 원래 M4A 타임라인에 맞춰 정렬되므로, M4A를 비디오 트랙에 동기화하면 자막이 프레임 단위로 정확하게 일치합니다.',
        },
        {
          q: '전사를 다른 언어로 번역할 수 있나요?',
          a: '네. 전사 후 목표 언어를 선택하고 번역을 클릭하세요. 번역은 GPT-4o-mini에서 실행되며 원본과 함께 나타납니다.',
        },
        {
          q: '내 M4A 파일이 서버에 저장되나요?',
          a: '아니요. 오디오는 전사 제공업체로 스트리밍되고, 한 번 처리된 후 메모리에서 삭제됩니다. 우리는 결코 디스크에 기록하지 않습니다. 전사는 로그인하고 기록에 저장할 경우에만 저장됩니다.',
        },
        {
          q: 'M4A 품질이 전사에 영향을 미치나요?',
          a: '거의 없습니다. iPhone 음성 메모는 약 32-64 kbps AAC로 녹음되며, Whisper에는 충분합니다. Whisper는 내부적으로 16 kHz 모노로 재샘플링하므로, 코덱 비트레이트는 깨끗한 음성에 미치는 영향이 최소화됩니다.',
        },
        {
          q: 'M4A 전사에는 얼마나 걸리나요?',
          a: '10분 음성 메모는 일반적으로 끝에서 끝까지 15-30초 안에 완료됩니다. 60분 인터뷰는 60-90초 안에 완료됩니다. 업로드 속도가 종종 더 긴 단계입니다.',
        },
      ]}
      ctaHeadline="음성 메모를 드롭하고 깨끗한 전사를 받으세요"
      ctaSubtitle="iPhone 음성 메모, GarageBand, FaceTime, Apple Podcasts. MP4 내 AAC, 변환 필요 없음."
      ctaButton="M4A 업로드하여 전사하기"
    />
  )
}