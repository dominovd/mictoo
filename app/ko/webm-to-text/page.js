import FormatPageLayout from '@/components/FormatPageLayout'

export const metadata = {
  title: 'WebM을 텍스트로: Loom, OBS 및 브라우저 화면 녹화 전사 | Mictoo',
  description:
    'Loom, OBS 또는 브라우저 MediaRecorder API에서 WebM 화면 녹화를 업로드하세요. 우리는 비디오를 제거하고 오디오를 전사합니다. 초 단위로 타임스탬프가 있는 편집 가능한 전사본입니다.',
  alternates: {
    canonical: 'https://mictoo.com/ko/webm-to-text',
    languages: {
      'en': 'https://mictoo.com/webm-to-text',
      'fr': 'https://mictoo.com/fr/webm-to-text',
      'de': 'https://mictoo.com/de/webm-to-text',
      'es': 'https://mictoo.com/es/webm-to-text',
      'ru': 'https://mictoo.com/ru/webm-to-text',
      'it': 'https://mictoo.com/it/webm-to-text',
      'pt': 'https://mictoo.com/pt/webm-to-text',
      'pl': 'https://mictoo.com/pl/webm-to-text',
      'ja': 'https://mictoo.com/ja/webm-to-text',
      'ko': 'https://mictoo.com/ko/webm-to-text',
      'x-default': 'https://mictoo.com/webm-to-text',
    },
  },
  openGraph: {
    title: 'WebM을 텍스트로: Loom, OBS, 브라우저 녹화 전사 | Mictoo',
    description: 'WebM 화면 녹화를 업로드하세요. 우리는 오디오를 추출하고 타임스탬프가 있는 편집 가능한 전사본을 반환합니다.',
    url: 'https://mictoo.com/ko/webm-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WebM을 텍스트로: Loom, OBS, 브라우저 녹화 전사',
    description: 'WebM 화면 녹화를 업로드하세요. 우리는 오디오를 추출하고 편집 가능한 전사본을 반환합니다.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function KoWebmToTextPage() {
  return (
    <FormatPageLayout
      locale="ko"
      badge="WebM · Loom · OBS · 화면 녹화"
      h1First="WebM을 텍스트로"
      h1Second="Loom, OBS 및 브라우저 화면 녹화를 위한"
      subtitle="WebM은 Loom이 내보내는 형식이며, OBS는 최신 버전에서 기본적으로 녹화하고, 브라우저는 MediaRecorder API를 사용할 때 작성합니다. 파일을 드롭하면 비디오를 제거하고 오디오를 초 단위로 전사합니다."
      highlightFormat="webm"
      previewFileName="loom-recording.webm"
      previewWordCount={172}
      previewDurationLabel="7분 36초"
      previewLines={[
        { t: '0:00',  line: '안녕하세요 팀, 목요일에 출시하기 전에 새로운 온보딩 흐름을 설명하고 싶습니다.' },
        { t: '0:07',  line: '이것이 제 화면입니다. 보시는 것은 새로 가입한 후의 랜딩 페이지입니다.' },
        { t: '0:14',  line: '첫 번째로 주목할 점은 환영 모달이 이제 대시보드 위에 위치하고 전체 뷰포트를 차단하지 않는다는 것입니다.' },
        { t: '0:23',  line: '그것은 의도적입니다. 사용자는 투어가 대시보드를 완전히 숨길 때 혼란스러워했습니다.' },
        { t: '0:32',  line: '두 번째로, 세 가지 투어 단계가 더 짧아졌습니다. 우리는 마지막 피드백을 바탕으로 복사본을 대략 절반으로 줄였습니다.' },
        { t: '0:41',  line: '여기서 투어 건너뛰기를 클릭하면 모달이 닫히고 사용자가 빈 상태의 코치 마크로 바로 이동합니다.' },
        { t: '0:51',  line: '그 코치 마크는 모든 사용자가 먼저 수행해야 하는 기본 업로드 버튼을 가리킵니다.' },
        { t: '1:00',  line: '생각을 알려주세요. 가능하면 수요일 아침까지 배포 차단 문제를 해결해주세요.' },
      ]}
      whyTitle="WebM 전사를 위한 Mictoo의 이유"
      whyCards={[
        {
          icon: 'video',
          title: '서버 측에서 처리되는 비디오 WebM',
          desc: '비디오 트랙이 intact한 WebM 화면 녹화. 우리는 디멀렉스하고 비디오를 제거하며 오디오를 전사합니다. 로컬 추출이 필요 없습니다.',
        },
        {
          icon: 'gear',
          title: 'Opus 및 Vorbis 모두 지원',
          desc: '대부분의 WebM 파일은 Opus 오디오(신형) 또는 Vorbis(구형)를 포함합니다. 우리는 두 코덱을 처리하며 수동 변환이 필요 없습니다.',
        },
        {
          icon: 'clip',
          title: '워크스루를 위한 SRT 자막',
          desc: '전사 후 SRT 또는 VTT를 다운로드하세요. 타임스탬프는 원래 WebM과 일치하므로 자막이 화면 녹화와 정확하게 일치합니다.',
        },
        {
          icon: 'sparkles',
          title: '릴리스 노트를 위한 AI 요약',
          desc: 'AI 요약은 티켓 설명, 릴리스 노트 또는 교체된 워크스루를 위한 훌륭한 초안입니다.',
        },
      ]}
      scenariosTitle="WebM을 텍스트로 변환할 때 적합한 경우"
      scenarios={[
        {
          icon: 'video',
          title: 'Loom 워크스루',
          desc: 'Loom에서 녹화된 제품 데모, 코드 리뷰 또는 비동기 업데이트. 전사는 티켓, 노션 문서 또는 후속 이메일에 사용됩니다.',
        },
        {
          icon: 'briefcase',
          title: 'OBS 화면 녹화',
          desc: 'OBS Studio로 녹화된 튜토리얼 또는 게임 플레이 캡처. 전사는 YouTube 설명 또는 블로그 작성에 사용됩니다.',
        },
        {
          icon: 'gear',
          title: '브라우저 MediaRecorder 출력',
          desc: 'MediaRecorder API를 통해 앱에서 녹음된 오디오. 변환 단계 없이 앱에서 생성된 .webm 파일을 드롭하세요.',
        },
        {
          icon: 'users',
          title: 'Google Meet 또는 Firefox 녹화',
          desc: '일부 회의 도구와 브라우저는 기본적으로 WebM으로 녹화합니다. 파일을 드롭하면 대화의 검색 가능한 텍스트 버전을 얻을 수 있습니다.',
        },
        {
          icon: 'editPen',
          title: '비동기 디자인 리뷰',
          desc: '디자이너가 모형을 설명하는 WebM을 녹화합니다. 리뷰어는 시청하기 전에 스킴할 수 있도록 서면 전사를 받습니다.',
        },
        {
          icon: 'book',
          title: '강의 화면 캡처',
          desc: '강사가 내레이션과 함께 슬라이드를 녹화하고 WebM으로 공유합니다. 학생들은 비디오와 함께 검색 가능한 전사를 받습니다.',
        },
      ]}
      technicalTitle="WebM 녹화에 대해 알아야 할 사항"
      technicalIntro="WebM은 비디오와 오디오 또는 오디오만 포함할 수 있는 브라우저 친화적인 컨테이너입니다. 브라우저 및 녹화기 설정에 따라 어떤 트랙과 코덱이 있는지가 결정됩니다."
      technicalFacts={[
        {
          icon: 'layers',
          title: 'Opus 또는 Vorbis 오디오',
          desc: '최근 WebM 음성 녹음은 Opus를 사용하며, 구형 파일은 Vorbis를 사용할 수 있습니다. 두 가지 모두 WebM 컨테이너 내에 있습니다.',
        },
        {
          icon: 'video',
          title: '오디오 전용 또는 비디오와 함께',
          desc: 'WebM은 화면 녹화 또는 마이크 트랙만 포함할 수 있습니다. 전사는 들리는 음성 스트림을 사용합니다.',
        },
        {
          icon: 'clip',
          title: '타임라인 기반 내보내기',
          desc: '전사 타임스탬프는 나중에 자막이나 편집 작업을 위해 디코딩된 녹음 타임라인을 따릅니다.',
        },
        {
          icon: 'gear',
          title: '브라우저 녹화기 출력',
          desc: 'MediaRecorder 설정은 브라우저에 따라 다릅니다. 캡처에 마이크 권한이 없으면 전사할 음성이 없을 수 있습니다.',
        },
      ]}
      faq={[
        {
          q: 'Mictoo는 어떤 종류의 WebM 파일을 수락하나요?',
          a: '표준 WebM: Opus 또는 Vorbis 오디오가 포함된 비디오(Loom, OBS, 브라우저 MediaRecorder) 또는 오디오 전용 WebM. 우리는 서버 측에서 오디오 트랙을 디멀렉스하고 Whisper large-v3로 전사합니다.',
        },
        {
          q: '먼저 오디오를 직접 추출해야 하나요?',
          a: '아니요. WebM 비디오를 있는 그대로 업로드하세요. 우리는 서버 측에서 디멀렉스를 처리하고 오디오 트랙만 전사합니다. 이미 오디오를 추출한 경우(Opus 또는 Vorbis), 그것도 가능합니다.',
        },
        {
          q: '제 Loom이 60 MB를 초과합니다. 이제 어떻게 하나요?',
          a: '20-30분의 Loom은 종종 60 MB를 초과합니다. 로그인한 경우, 우리는 약 3시간까지 긴 파일을 자동으로 분할합니다. 그렇지 않으면 Loom 다운로드 설정을 사용하여 품질을 줄이거나 오디오를 내보내고 업로드하세요.',
        },
        {
          q: '타임스탬프가 제 화면 녹화와 일치하나요?',
          a: '네. 전사본의 타임스탬프와 SRT/VTT 내보내기의 타임스탬프는 원래 WebM 타임라인과 일치하므로 자막이 비디오에 다시 드롭될 때 정확하게 일치합니다.',
        },
        {
          q: '워크스루를 위한 SRT 자막을 받을 수 있나요?',
          a: '네. 전사 후 SRT 또는 VTT를 다운로드하세요. 비디오 편집기, YouTube 업로드 또는 Loom 재렌더링 워크플로에 드롭하세요.',
        },
        {
          q: 'Mictoo는 비영어 WebM을 전사하나요?',
          a: '네. Whisper large-v3는 50개 이상의 언어를 지원하며 자동 감지합니다. 짧은 녹음이나 비영어 콘텐츠의 경우, 더 깔끔한 첫 번째 결과를 위해 언어를 명시적으로 설정하세요.',
        },
        {
          q: 'WebM에 오디오 트랙이 없으면 어떻게 하나요?',
          a: '전사본은 비어 있습니다. 오디오 트랙이 없는 WebM 파일(무음 화면 녹화, GIF 스타일 캡처)은 Whisper가 전사할 것이 없습니다.',
        },
        {
          q: '전사본을 다른 언어로 번역할 수 있나요?',
          a: '네. 전사 후 목표 언어를 선택하고 번역을 클릭하세요. 번역은 GPT-4o-mini에서 실행되며 원본과 함께 표시됩니다.',
        },
        {
          q: '제 WebM 파일이 귀하의 서버에 저장되나요?',
          a: '아니요. WebM은 전사 제공업체로 스트리밍되며, 우리는 메모리에서 디멀렉스하고 전사한 후 모든 것을 삭제합니다. 전사는 로그인하고 기록에 저장하지 않는 한 저장되지 않습니다.',
        },
        {
          q: 'WebM 전사에는 얼마나 걸리나요?',
          a: '10분 Loom은 일반적으로 끝까지 20-40초가 걸립니다. 더 긴 WebM 파일(30-45분)은 60-90초가 걸립니다. 대형 화면 녹화의 경우 업로드 속도가 더 긴 단계인 경우가 많습니다.',
        },
      ]}
      ctaHeadline="Loom 또는 OBS 녹화를 드롭하세요"
      ctaSubtitle="WebM 화면 녹화, 브라우저 MediaRecorder 출력. 비디오는 서버 측에서 디멀렉스됩니다."
      ctaButton="WebM 업로드하여 전사하기"
    />
  )
}