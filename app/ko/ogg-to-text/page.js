import FormatPageLayout from '@/components/FormatPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/ogg-to-text',
  'fr': 'https://mictoo.com/fr/ogg-to-text',
  'de': 'https://mictoo.com/de/ogg-to-text',
  'es': 'https://mictoo.com/es/ogg-to-text',
  'ru': 'https://mictoo.com/ru/ogg-to-text',
  'it': 'https://mictoo.com/it/ogg-to-text',
  'pt': 'https://mictoo.com/pt/ogg-to-text',
  'pl': 'https://mictoo.com/pl/ogg-to-text',
  'ja': 'https://mictoo.com/ja/ogg-to-text',
  'ko': 'https://mictoo.com/ko/ogg-to-text',
  'x-default': 'https://mictoo.com/ogg-to-text',
}

export const metadata = {
  title: 'OGG를 텍스트로: 텔레그램 음성, 리눅스 오디오, Opus/Vorbis 전사 | Mictoo',
  description:
    'OGG 오디오 (Vorbis, Opus, OGG 내 FLAC) 또는 텔레그램 .oga 음성 메시지를 업로드하세요. 타임스탬프가 포함된 편집 가능한 전사, 가입 필요 없음.',
  alternates: {
    canonical: 'https://mictoo.com/ko/ogg-to-text',
    languages: LANGS,
  },
  openGraph: {
    title: 'OGG를 텍스트로: 텔레그램 음성, 리눅스 오디오, Opus/Vorbis 전사 | Mictoo',
    description: 'OGG 오디오 또는 텔레그램 .oga 음성 메시지를 업로드하세요. 초 단위의 편집 가능한 전사.',
    url: 'https://mictoo.com/ko/ogg-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OGG를 텍스트로: 텔레그램 음성 및 리눅스 오디오 전사',
    description: 'OGG 오디오 또는 텔레그램 .oga 음성 메시지를 업로드하세요. 초 단위의 편집 가능한 전사.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function KoOggToTextPage() {
  return (
    <FormatPageLayout
      locale="ko"
      badge="OGG · Vorbis · Opus · .oga"
      h1First="OGG를 텍스트로"
      h1Second="텔레그램 음성, 리눅스 오디오, Opus 및 Vorbis"
      subtitle="OGG는 텔레그램 음성이 사용하는 형식(.oga)이며, 리눅스 오디오 앱의 기본 형식이고, 오픈 소스 Opus 코덱이 포함되어 있습니다. 파일을 드롭하면 자동으로 오디오 스트림을 감지하고 Whisper large-v3로 전사합니다."
      highlightFormat="ogg"
      previewFileName="telegram-voice.oga"
      previewWordCount={128}
      previewDurationLabel="1분 52초"
      previewLines={[
        { t: '0:00',  line: '안녕하세요, 내일 통화에 대한 간단한 음성 메시지입니다.' },
        { t: '0:03',  line: '슬라이드를 살펴봤고, 4번에서 6번 슬라이드는 발표 전에 다시 생각해봐야 할 것 같습니다.' },
        { t: '0:10',  line: '주요 문제는 이야기가 문제에서 가격으로 바로 넘어가고 데모 스크린샷을 보여주지 않는 것입니다.' },
        { t: '0:20',  line: '제가 할 일은 5번 슬라이드를 데모 흐름으로 바꾸고 가격을 슬라이드의 끝으로 밀어내는 것입니다.' },
        { t: '0:30',  line: '그렇게 하면 제품이 실제로 무엇을 하는지에 대한 긴장을 쌓은 후에 비용에 대해 이야기할 수 있습니다.' },
        { t: '0:39',  line: '또한, 어제 클라이언트가 통합 슬라이드를 보고 싶다고 언급했는데, 현재 부록에 있습니다.' },
        { t: '0:49',  line: '그것을 메인 흐름으로 옮기고, 데모와 가격 사이에 두는 것이 좋습니다.' },
        { t: '0:56',  line: '곧 이야기합시다. 기회가 되면 당신의 생각을 알려주세요.' },
      ]}
      whyTitle="OGG 전사에 Mictoo가 적합한 이유"
      whyCards={[
        {
          icon: 'mic',
          title: '텔레그램 음성 메시지, 네이티브 지원',
          desc: '텔레그램 .oga 음성 노트가 바로 들어옵니다. 이름 변경이나 재포장이 필요 없습니다. OGG 컨테이너 내의 Opus 스트림을 처리합니다.',
        },
        {
          icon: 'gear',
          title: 'Vorbis, Opus 및 FLAC-in-OGG',
          desc: 'OGG 컨테이너 내의 모든 코덱이 작동합니다: Vorbis(구형), Opus(최신형), FLAC-in-OGG(오디오파일). 서버 측에서 자동 감지됩니다.',
        },
        {
          icon: 'sparkles',
          title: '음성 노트 체인에 대한 AI 요약',
          desc: '음성 메시지는 종종 장황합니다. AI 요약은 5분 .oga를 두 줄의 액션으로 바꿉니다.',
        },
        {
          icon: 'globe',
          title: '50개 이상의 언어로 번역',
          desc: '그룹 채팅에서 러시아어, 스페인어 또는 포르투갈어로 된 음성 메시지. 전사 후 영어(또는 원하는 언어)로 번역합니다.',
        },
      ]}
      scenariosTitle="OGG를 텍스트로 변환할 때 적합한 경우"
      scenarios={[
        {
          icon: 'mic',
          title: '텔레그램 음성 메시지',
          desc: '동료나 클라이언트가 텔레그램을 통해 보낸 음성 노트. 채팅에서 .oga를 저장하고 여기 드롭하면 텍스트 버전을 스킴할 수 있습니다.',
        },
        {
          icon: 'gear',
          title: '리눅스 오디오 녹음',
          desc: 'Audacity, GNOME Sound Recorder 또는 OGG를 기본으로 하는 KDE 오디오 도구에서 녹음. 완벽하게 지원되며 변환이 필요 없습니다.',
        },
        {
          icon: 'briefcase',
          title: '오픈 소스 앱 내보내기',
          desc: 'OGG로 내보내는 팟캐스트 또는 인터뷰 녹음기(많은 FOSS 앱이 라이센스 문제로 Vorbis 또는 Opus를 기본으로 사용합니다).',
        },
        {
          icon: 'video',
          title: 'Firefox MediaRecorder 캡처',
          desc: 'Firefox는 종종 브라우저 녹음 앱에서 OGG/Opus를 생성합니다. 파일을 드롭하여 타임스탬프가 있는 깨끗한 전사를 얻으세요.',
        },
        {
          icon: 'editPen',
          title: '음성으로 작성한 메모',
          desc: 'OGG로 저장되는 앱에서 캡처한 음성 우선 메모. 편집 가능한 텍스트로 변환하여 작성 워크플로우에 준비합니다.',
        },
        {
          icon: 'users',
          title: '다중 화자 OGG 채팅 로그',
          desc: 'Discord, Mumble 또는 유사한 VOIP 녹음이 OGG로 내보내집니다. 참고용, 회의록 또는 아카이브를 위한 전사.',
        },
      ]}
      technicalTitle="OGG 파일 내에 무엇이 있을 수 있나요"
      technicalIntro="OGG는 단일 오디오 코덱이 아닌 컨테이너 패밀리입니다. 스트림 유형과 확장을 아는 것은 녹음의 출처를 설명하는 데 도움이 되지만, 업로드 전에 재포장할 필요는 없습니다."
      technicalFacts={[
        {
          icon: 'layers',
          title: 'Vorbis, Opus 또는 FLAC',
          desc: 'OGG 컨테이너는 여러 코덱을 담을 수 있습니다. 음성 메시지는 일반적으로 Opus를 사용하며, 구형 데스크톱 오디오는 종종 Vorbis를 사용합니다.',
        },
        {
          icon: 'file',
          title: '.oga 및 .ogg',
          desc: '.oga는 같은 컨테이너 패밀리의 오디오 전용 확장입니다. 텔레그램 음성 내보내기는 종종 이 확장으로 도착합니다.',
        },
        {
          icon: 'mic',
          title: '음성 메시지 출처',
          desc: '짧은 모바일 메시지는 방 소음과 전화 처리음을 포함할 수 있으며, 명확한 캡처가 컨테이너 이름보다 더 중요합니다.',
        },
        {
          icon: 'gear',
          title: '헤더 기반 검사',
          desc: '스트림 구조는 처리 중에 검사되므로, 비정상적인 확장은 먼저 이름을 변경할 필요가 없습니다.',
        },
      ]}
      faq={[
        {
          q: 'Mictoo는 어떤 종류의 OGG 파일을 수락하나요?',
          a: '표준 OGG 컨테이너: Vorbis 오디오(구형, 리눅스에서 일반적), Opus 오디오(최신형, 텔레그램 음성과 현대 앱에서 사용됨), FLAC-in-OGG. 또한 OGG와 다른 확장을 가진 텔레그램 .oga 파일도 수락합니다.',
        },
        {
          q: 'OGA 파일이 OGG와 동일한가요?',
          a: '실질적으로 그렇습니다. .oga는 오디오 전용 OGG의 표준화된 확장으로, 대부분 텔레그램 음성 메시지에서 Opus 스트림을 담고 있습니다. Mictoo는 .oga와 .ogg를 동일하게 처리합니다.',
        },
        {
          q: '내 OGG 파일이 60 MB를 초과합니다. 이제 어떻게 하나요?',
          a: 'Opus와 Vorbis는 효율적이므로 60 MB에 도달하는 것은 일반적으로 매우 긴 녹음을 의미합니다. 로그인하면 최대 약 3시간까지 자동 분할됩니다. 그렇지 않으면 먼저 다운샘플링하세요: ffmpeg -i in.ogg -b:a 32k -ac 1 out.ogg. 음성이 선명하게 유지됩니다.',
        },
        {
          q: 'OGG 비디오(Theora)를 수락하나요?',
          a: 'OGG/Theora 컨테이너 내의 오디오 트랙이 전사됩니다. .ogv 파일을 업로드하면 다른 비디오 형식과 마찬가지로 오디오를 디뮤직합니다. 무음 Theora 클립은 빈 전사를 생성합니다.',
        },
        {
          q: 'Mictoo는 비영어 OGG를 전사하나요?',
          a: '예. Whisper large-v3는 50개 이상의 언어를 지원하며 자동 감지합니다. 짧은 음성 메시지나 비영어 콘텐츠의 경우, 더 깨끗한 첫 번째 결과를 위해 언어를 명시적으로 설정하세요.',
        },
        {
          q: 'OGG 녹음에 대한 SRT 자막을 받을 수 있나요?',
          a: '예. 전사 후 SRT 또는 VTT를 다운로드하세요. 타임스탬프는 비디오 편집기나 접근성 도구에서 사용할 수 있도록 원래 OGG 타임라인에 맞춰집니다.',
        },
        {
          q: '내 OGG 파일이 서버에 저장되나요?',
          a: '아니요. 오디오 스트림은 전사 제공업체로 전송되고, 한 번 처리된 후 메모리에서 삭제됩니다. 디스크에 기록하지 않습니다. 전사는 로그인하고 기록으로 저장할 경우에만 저장됩니다.',
        },
        {
          q: '전사를 다른 언어로 번역할 수 있나요?',
          a: '예. 전사 후 목표 언어를 선택하고 번역을 클릭하세요. 번역은 GPT-4o-mini에서 실행되며 원본과 함께 나타납니다.',
        },
        {
          q: 'OGG 품질이 전사에 영향을 미치나요?',
          a: '거의 영향을 미치지 않습니다. Opus는 24-32 kbps에서 음성이 선명하게 들리며, 높은 비트 전송률과 본질적으로 동일하게 전사됩니다. Whisper는 내부적으로 16 kHz 단일 채널로 리샘플링하므로, 비트 전송률은 깨끗한 음성에 미치는 영향이 최소화됩니다.',
        },
        {
          q: 'OGG 전사에는 얼마나 걸리나요?',
          a: '2분 길이의 텔레그램 음성 노트는 일반적으로 5-15초 내에 완료됩니다. 더 긴 OGG 파일(30-45분)은 45-90초가 걸립니다. 업로드 속도가 종종 더 긴 단계입니다.',
        },
      ]}
      ctaHeadline="텔레그램 음성 또는 OGG 파일을 드롭하세요"
      ctaSubtitle="Opus, Vorbis, FLAC-in-OGG, .oga 음성 메시지. 모든 OGG 스트림, 네이티브로 처리됩니다."
      ctaButton="OGG 업로드하여 전사하기"
    />
  )
}