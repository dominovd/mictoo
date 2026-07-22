import FormatPageLayout from '@/components/FormatPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/aac-to-text',
  'fr': 'https://mictoo.com/fr/aac-to-text',
  'de': 'https://mictoo.com/de/aac-to-text',
  'es': 'https://mictoo.com/es/aac-to-text',
  'ru': 'https://mictoo.com/ru/aac-to-text',
  'it': 'https://mictoo.com/it/aac-to-text',
  'pt': 'https://mictoo.com/pt/aac-to-text',
  'pl': 'https://mictoo.com/pl/aac-to-text',
  'ja': 'https://mictoo.com/ja/aac-to-text',
  'ko': 'https://mictoo.com/ko/aac-to-text',
  'x-default': 'https://mictoo.com/aac-to-text',
}

export const metadata = {
  title: 'AAC를 텍스트로: 원시 AAC 및 ADTS 오디오 전사 | Mictoo',
  description:
    '원시 .aac 파일(ADTS 스트림 또는 ADIF)을 업로드하고 몇 초 안에 편집 가능한 전사를 받으세요. 팟캐스트 다운로드, 방송 아카이브, 아이폰 오디오 추출에 일반적입니다.',
  alternates: {
    canonical: 'https://mictoo.com/ko/aac-to-text',
    languages: LANGS,
  },
  openGraph: {
    title: 'AAC를 텍스트로: 원시 AAC 및 ADTS 오디오 전사 | Mictoo',
    description: '원시 .aac 파일(ADTS 스트림 또는 ADIF)을 업로드하세요. 몇 초 안에 편집 가능한 전사.',
    url: 'https://mictoo.com/ko/aac-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AAC를 텍스트로: 원시 AAC 스트림 전사',
    description: '원시 .aac (ADTS 또는 ADIF)를 업로드하세요. 몇 초 안에 편집 가능한 전사.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function KoAacToTextPage() {
  return (
    <FormatPageLayout
      locale="ko"
      badge="AAC · ADTS · 원시 코덱 스트림"
      h1First="AAC를 텍스트로"
      h1Second="원시 ADTS 스트림, 방송 아카이브, 추출된 오디오"
      subtitle="원시 .aac 파일은 종종 방송 스트림, 라디오 캡처 및 추출된 미디어 트랙에서 옵니다. 파일을 드롭하면 Mictoo가 구조를 검사한 후 Whisper large-v3로 음성을 전사합니다."
      highlightFormat="aac"
      previewFileName="broadcast-audio.aac"
      previewWordCount={142}
      previewDurationLabel="9분 44초"
      previewLines={[
        { t: '0:00',  line: '당신은 아침 방송을 듣고 있습니다. 지금은 7시 15분이며, 우리는 주요 뉴스로 돌아왔습니다.' },
        { t: '0:08',  line: '어젯밤 시의회는 거의 3년의 논의 끝에 새로운 교통 확장을 통과시켰습니다.' },
        { t: '0:17',  line: '이 계획은 두 개의 새로운 경전철 노선을 추가하고 기존 노선을 대략 8마일 연장할 것입니다.' },
        { t: '0:27',  line: '일일 통근자에게 이것이 의미하는 바를 분석하기 위해, 우리는 스튜디오에 우리의 교통 리포터를 초대했습니다.' },
        { t: '0:37',  line: '초대해 주셔서 감사합니다. 주요 뉴스는 동쪽 방향 통로가 마침내 20년 만에 철도 옵션을 갖게 되었다는 것입니다.' },
        { t: '0:47',  line: '현재 이 구간을 출퇴근 시간에 운전하는 사람에게는 정말로 변화를 가져올 것입니다.' },
        { t: '0:56',  line: '건설은 내년 봄에 시작되며, 첫 번째 새로운 노선은 2029년에 개통될 것으로 예상됩니다.' },
        { t: '1:06',  line: '시의회는 대략 4만 명의 일일 승객이 새로운 구간이 개통되면 이용할 것이라고 추정하고 있습니다.' },
      ]}
      whyTitle="AAC 전사를 위한 Mictoo의 이유"
      whyCards={[
        {
          icon: 'waveform',
          title: '원시 ADTS를 기본적으로 처리',
          desc: '대부분의 원시 .aac 파일은 ADTS 프레임(오디오 데이터 전송 스트림)입니다. 우리는 동기화 단어 0xFFF를 감지하고 스트림을 Whisper에 전달합니다.',
        },
        {
          icon: 'gear',
          title: 'ADIF 및 LATM도 지원',
          desc: '덜 일반적인 ADIF(오디오 데이터 교환 형식) 및 LATM 프레이밍도 작동합니다. 수동 재포장 또는 ffmpeg 단계가 필요하지 않습니다.',
        },
        {
          icon: 'clip',
          title: '컨테이너 필요 없음',
          desc: 'AAC는 일반적으로 M4A 또는 MP4 내부에 존재하지만, 때때로 원시 스트림이 디스크에 저장됩니다. Mictoo는 요청 없이 둘 다 수락합니다.',
        },
        {
          icon: 'sparkles',
          title: '아카이브 세그먼트를 위한 AI 요약',
          desc: '방송 세그먼트, 라디오 아카이브 클립 또는 스트리밍 덤프. AI 요약은 아카이브를 더 빠르게 분류할 수 있게 해줍니다.',
        },
      ]}
      scenariosTitle="AAC를 텍스트로 변환할 때 적합한 경우"
      scenarios={[
        {
          icon: 'briefcase',
          title: '방송 라디오 아카이브',
          desc: '원시 AAC로 배송되는 HLS 또는 Icecast 스트림에서 기록된 세그먼트. 전사는 아카이브를 검색 가능하게 만듭니다.',
        },
        {
          icon: 'video',
          title: 'HLS 라이브 스트림 캡처',
          desc: 'YouTube Live, Twitch 또는 라디오 HLS 스트림이 .aac 청크 시퀀스로 캡처됩니다. 파일을 드롭하면 텍스트를 얻습니다.',
        },
        {
          icon: 'mic',
          title: '아이폰 오디오 추출',
          desc: '아이폰 녹음 또는 공유 파일에서 추출된 오디오가 M4A 컨테이너를 잃고 원시 AAC로 나옵니다.',
        },
        {
          icon: 'gear',
          title: '스트리밍 서비스 내보내기',
          desc: '원시 AAC 다운로드를 제공하는 팟캐스트 플랫폼 또는 스트리밍 앱. 변환을 건너뛰고 파일을 직접 드롭하세요.',
        },
        {
          icon: 'users',
          title: '방송 인터뷰',
          desc: '원시 AAC로 아카이브된 라디오 호스트 인터뷰. 전사는 기사나 쇼를 위한 인용 준비된 복사본입니다.',
        },
        {
          icon: 'editPen',
          title: 'FFmpeg 중간 출력',
          desc: 'ffmpeg -c:a copy로 오디오 트랙을 추출하고 .aac를 얻었습니다. 먼저 M4A로 재muxing하는 대신 여기 드롭하세요.',
        },
      ]}
      technicalTitle="원시 AAC와 M4A 비교"
      technicalIntro="AAC는 오디오 코덱입니다. .aac로 끝나는 파일은 종종 원시 프레임 스트림인 반면, M4A는 일반적으로 MP4 컨테이너에 AAC 오디오를 래핑하여 탐색 및 메타데이터를 포함합니다."
      technicalFacts={[
        {
          icon: 'waveform',
          title: 'ADTS는 일반적입니다',
          desc: '원시 AAC는 스트림 또는 방송 워크플로우에서 오디오가 추출될 때 ADTS 프레임으로 저장되는 경우가 많습니다.',
        },
        {
          icon: 'layers',
          title: 'M4A는 컨테이너를 추가합니다',
          desc: 'M4A는 타이밍, 인덱싱 및 MP4 기반 컨테이너에 의해 제공된 메타데이터와 함께 동일한 AAC 코덱을 포함할 수 있습니다.',
        },
        {
          icon: 'search',
          title: '확장은 단지 단서일 뿐입니다',
          desc: '파일 구조는 처리 중에 검사되므로, 오해의 소지가 있는 확장은 전사 텍스트가 되지 않습니다.',
        },
        {
          icon: 'briefcase',
          title: '방송 워크플로우',
          desc: '원시 AAC는 종종 HLS 캡처 또는 오디오 추출 후 나타납니다. 아카이브 맥락을 위해 원본 소스 참조를 유지하세요.',
        },
      ]}
      faq={[
        {
          q: 'Mictoo는 어떤 종류의 AAC 파일을 수락하나요?',
          a: '원시 AAC는 ADTS 프레이밍(가장 일반적), ADIF 및 LATM 프레이밍을 포함합니다. 우리는 서버 측에서 동기화 단어를 감지하고 스트림을 Whisper에 전달합니다. M4A 내부의 AAC( M4A 페이지 참조)도 작동하지만 다른 수집 경로입니다.',
        },
        {
          q: '.aac와 .m4a의 차이는 무엇인가요?',
          a: '.aac는 일반적으로 원시 ADTS 비트스트림입니다: 작은 7바이트 헤더가 있는 AAC 프레임, 컨테이너 없음. .m4a는 메타데이터와 탐색 인덱싱이 포함된 MP4 컨테이너에 래핑된 AAC 오디오입니다. 두 파일 모두 AAC 코덱을 사용하지만 파일 구조는 다릅니다.',
        },
        {
          q: '내 AAC 파일이 60 MB를 초과합니다. 이제 어떻게 하나요?',
          a: '일반적인 방송 비트레이트(128 kbps)의 AAC는 분당 약 1 MB이므로 60 MB는 대략 1시간 녹음입니다. 로그인한 경우, 우리는 약 3시간까지 자동으로 분할합니다. 그렇지 않으면 다운샘플링하세요: ffmpeg -i in.aac -b:a 64k -ac 1 out.aac.',
        },
        {
          q: '원시 AAC가 M4A보다 더 나쁜 전사를 생성하나요?',
          a: '아니요. 오디오 스트림은 동일하며, 컨테이너만 다릅니다. Whisper는 내부적으로 16 kHz 모노로 리샘플링합니다. 정확도는 기본 녹음 품질에 따라 달라지며, ADTS 프레이밍 또는 MP4 래핑 여부에 따라 달라지지 않습니다.',
        },
        {
          q: 'Mictoo는 비영어 AAC를 전사하나요?',
          a: '네. Whisper large-v3는 50개 이상의 언어를 지원하며 자동 감지가 가능합니다. 특이한 억양이나 짧은 방송 클립의 경우, 더 깨끗한 첫 번째 통과 결과를 위해 언어를 명시적으로 설정하세요.',
        },
        {
          q: '방송 클립에 대한 SRT 자막을 받을 수 있나요?',
          a: '네. 전사 후 SRT 또는 VTT를 다운로드하세요. 타임스탬프는 비디오 편집기, 접근성 오버레이 또는 아카이브 인덱싱에 사용하기 위해 원래 AAC 스트림 타임라인에 맞춰집니다.',
        },
        {
          q: '내 AAC 파일이 서버에 저장되나요?',
          a: '아니요. 오디오는 전사 제공업체로 스트리밍되고, 한 번 처리된 후 메모리에서 삭제됩니다. 우리는 결코 디스크에 기록하지 않습니다. 전사는 로그인하고 기록에 저장할 경우에만 저장됩니다.',
        },
        {
          q: '전사를 다른 언어로 번역할 수 있나요?',
          a: '네. 전사 후 목표 언어를 선택하고 번역을 클릭하세요. 번역은 GPT-4o-mini에서 실행되며 원본과 함께 표시됩니다.',
        },
        {
          q: '파일에 .aac 확장이 있지만 실제로는 M4A인 경우 어떻게 하나요?',
          a: '우리는 매직 바이트를 검사하며, 확장은 검사하지 않습니다. 파일이 ftyp( M4A/MP4 서명)로 시작하면 M4A로 처리합니다. ADTS 동기화 바이트로 시작하면 원시 AAC로 처리합니다. 어쨌든 전사는 작동합니다.',
        },
        {
          q: 'AAC 전사에는 얼마나 걸리나요?',
          a: '10분 AAC는 일반적으로 끝에서 끝까지 15-30초가 걸립니다. 업로드 한계에 가까운 더 큰 파일은 45-80초가 걸립니다. 업로드 속도가 종종 더 긴 단계입니다.',
        },
      ]}
      ctaHeadline="원시 AAC를 드롭하고 전사를 받으세요"
      ctaSubtitle="ADTS, ADIF 및 LATM 프레이밍. 방송 아카이브, HLS 캡처, 추출된 오디오."
      ctaButton="전사할 AAC 업로드"
    />
  )
}