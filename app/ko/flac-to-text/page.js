import FormatPageLayout from '@/components/FormatPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/flac-to-text',
  'fr': 'https://mictoo.com/fr/flac-to-text',
  'de': 'https://mictoo.com/de/flac-to-text',
  'es': 'https://mictoo.com/es/flac-to-text',
  'ru': 'https://mictoo.com/ru/flac-to-text',
  'it': 'https://mictoo.com/it/flac-to-text',
  'pt': 'https://mictoo.com/pt/flac-to-text',
  'pl': 'https://mictoo.com/pl/flac-to-text',
  'ja': 'https://mictoo.com/ja/flac-to-text',
  'ko': 'https://mictoo.com/ko/flac-to-text',
  'x-default': 'https://mictoo.com/flac-to-text',
}

export const metadata = {
  title: 'FLAC에서 텍스트로: 구술 기록 보관을 위한 무손실 전사 | Mictoo',
  description:
    'FLAC 구술 역사 인터뷰, 현장 녹음 또는 보존 복사본을 업로드하고 타임스탬프가 있는 편집 가능한 전사를 받으세요.',
  alternates: {
    canonical: 'https://mictoo.com/ko/flac-to-text',
    languages: LANGS,
  },
  openGraph: {
    title: 'FLAC에서 텍스트로: 무손실 오디오 전사 | Mictoo',
    description: 'FLAC 구술 역사 인터뷰, 현장 녹음 또는 보존 복사본을 업로드하세요. 타임스탬프가 있는 편집 가능한 전사를 받으세요.',
    url: 'https://mictoo.com/ko/flac-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FLAC에서 텍스트로: 무손실 오디오 전사',
    description: 'FLAC 구술 기록 보관 또는 현장 녹음을 업로드하고 타임스탬프가 있는 편집 가능한 전사를 받으세요.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function KoFlacToTextPage() {
  return (
    <FormatPageLayout
      locale="ko"
      badge="FLAC · 무손실 · 무료"
      h1First="FLAC에서 텍스트로"
      h1Second="구술 기록 보관을 위한 무손실 오디오"
      subtitle="FLAC는 구술 역사 보관소, 현장 녹음기 및 보존 작업 흐름에서 손실 없는 압축으로 오디오를 저장하는 데 사용됩니다. .flac 파일을 드롭하고 무손실 마스터를 유지하며 타임스탬프가 있는 전사를 받으세요."
      highlightFormat="flac"
      previewFileName="archival-recording.flac"
      previewWordCount={155}
      previewDurationLabel="18분 04초"
      previewLines={[
        { t: '0:00',  line: '이 녹음은 1978년 10월 가족 집에서 이루어졌습니다.' },
        { t: '0:07',  line: '주제는 1914년 크라쿠프에서 태어나 1939년 뉴욕으로 이민 온 제 할머니입니다.' },
        { t: '0:18',  line: '녹음 품질은 원래 카세트 소스에 의해 제한됩니다. 인터뷰어의 볼륨을 염두에 두세요.' },
        { t: '0:27',  line: '할머니, 마지막으로 크라쿠프를 떠난 날에 대해 말씀해 주실 수 있나요?' },
        { t: '0:34',  line: '비가 내리고 있었습니다. 그것이 제가 처음 기억하는 것입니다. 모두가 비를 맞으며 플랫폼에 서 있었습니다.' },
        { t: '0:44',  line: '아버지는 두 개의 여행가방을 가지고 있었고 어머니는 하나를 가지고 있었습니다. 저는 이모가 주신 작은 가방만 있었습니다.' },
        { t: '0:54',  line: '기차는 아침 6시에 출발할 예정이었지만 거의 10시까지 출발하지 않았습니다.' },
        { t: '1:04',  line: '그리고 마침내 출발했을 때, 그 플랫폼에 있던 누구도 다시는 그 도시를 같은 방식으로 보지 않았습니다.' },
      ]}
      whyTitle="FLAC 전사를 위한 Mictoo의 이유"
      whyCards={[
        {
          icon: 'target',
          title: '추가 손실 압축 없음',
          desc: 'FLAC는 MP3 스타일의 압축 손실 없이 녹음된 신호를 보존합니다. 전사 정확도는 여전히 음성 명료성과 원래 캡처에 따라 달라집니다.',
        },
        {
          icon: 'gear',
          title: '모든 샘플링 주파수, 모든 비트 깊이',
          desc: '44.1 kHz에서 192 kHz까지, 16비트에서 24비트까지. Whisper는 내부적으로 16 kHz 모노로 리샘플링하므로 소스 비율이 품질에 영향을 미치지 않습니다.',
        },
        {
          icon: 'book',
          title: '보존 친화적인 작업 흐름',
          desc: '원본 FLAC 파일은 수정되지 않습니다. 우리는 전사 제공업체에 스트리밍하여 메모리에서 오디오를 추출하고 이후에 삭제합니다.',
        },
        {
          icon: 'clip',
          title: 'FLAC-inside-OGG도 처리됨',
          desc: '네이티브 FLAC (마법 바이트 fLaC) 및 FLAC-in-OGG (FLAC 스트림이 있는 OggS) 모두 작동합니다. 수동 재포장이 필요 없습니다.',
        },
      ]}
      scenariosTitle="FLAC에서 텍스트로의 적합한 경우"
      scenarios={[
        {
          icon: 'book',
          title: '구술 역사 보관소',
          desc: '무손실 FLAC으로 보존된 장기 인터뷰. 전사는 검색 가능하고 인용 가능하며 인용 준비가 됩니다.',
        },
        {
          icon: 'briefcase',
          title: '기관 녹음',
          desc: '박물관, 도서관 또는 대학에서 녹음된 강의나 심포지엄이 FLAC으로 보존됩니다. 전사는 접근 계층입니다.',
        },
        {
          icon: 'mic',
          title: 'CD에서 추출한 인터뷰 또는 팟캐스트',
          desc: 'CD에서 FLAC으로 추출한 오래된 인터뷰 또는 팟캐스트 에피소드. 파일을 드롭하여 현대적인 전사를 받으세요.',
        },
        {
          icon: 'waveform',
          title: '현장 녹음, 무손실 캡처',
          desc: '현장 녹음기 또는 핸드헬드 캡처가 품질 손실 없이 카드 공간을 절약하기 위해 FLAC으로 작성되었습니다. 타임스탬프가 있는 전체 전사.',
        },
        {
          icon: 'sparkles',
          title: '복원된 인터뷰 컬렉션',
          desc: '복원 후 FLAC으로 저장된 디지털화된 테이프 또는 디스크 인터뷰. 보존 복사본을 유지하면서 검색 가능한 텍스트를 추가하세요.',
        },
        {
          icon: 'users',
          title: '증언 보존 복사본',
          desc: '아카이벌 무결성을 위해 FLAC으로 보존된 법적 녹음. 검토, 인용 및 하류 발견을 위한 전사.',
        },
      ]}
      technicalTitle="무손실 FLAC이 보존하는 것과 보존하지 않는 것"
      technicalIntro="FLAC는 손실 압축 없이 소스 신호를 보존합니다. 아카이브 복사본을 보호하지만, 이미 노이즈, 클리핑, 겹침 또는 마이크 거리로 가려진 단어를 복원할 수는 없습니다."
      technicalFacts={[
        {
          icon: 'waveform',
          title: '무손실 소스',
          desc: '디코딩은 MP3 스타일의 압축 손실 없이 녹음된 신호를 반환하며, 이는 보존 작업 흐름에 유용합니다.',
        },
        {
          icon: 'ear',
          title: '자동 정리 없음',
          desc: '노이즈가 있는 녹음의 무손실 복사본은 여전히 노이즈가 있습니다. 캡처 시 음성 명료성이 주요 정확도 요소로 남아 있습니다.',
        },
        {
          icon: 'clip',
          title: 'Vorbis 댓글은 분리됨',
          desc: '아티스트, 아카이브 ID 및 기타 태그는 전사에 삽입되지 않습니다. 아카이브 카탈로그에서 해당 매핑을 유지하세요.',
        },
        {
          icon: 'cloud',
          title: '효율적인 아카이브 복사본',
          desc: 'FLAC는 압축되지 않은 WAV보다 작지만 긴 세션의 경우 여전히 클 수 있습니다. 필요한 경우 긴 녹음을 분할하세요.',
        },
      ]}
      faq={[
        {
          q: 'Mictoo에서 어떤 FLAC 파일을 수용하나요?',
          a: '네이티브 FLAC (마법 바이트 fLaC) 및 FLAC-in-OGG 컨테이너, 모노 또는 스테레오, 192 kHz까지의 모든 샘플링 주파수, 16 또는 24비트 깊이를 수용합니다. 우리는 변환 없이 파일을 직접 수용합니다.',
        },
        {
          q: '무손실 입력이 더 나은 전사를 생성하나요?',
          a: '깨끗한 소스 녹음의 경우, 무손실 입력은 Whisper가 추출할 수 있는 최대치를 일치시킵니다. 노이즈가 있거나 손상된 소스(예: 카세트 리핑)의 경우, 무손실은 손상을 충실히 보존하지만 이를 수정하지는 않습니다. 녹음 품질이 컨테이너보다 더 중요합니다.',
        },
        {
          q: '제 FLAC 파일이 60 MB를 초과합니다. 이제 어떻게 하나요?',
          a: '스테레오 44.1 kHz 16비트 FLAC는 분당 약 5 MB이므로, 약 12분 이상의 모든 녹음이 한계에 도달합니다. 로그인하면 최대 약 3시간까지 자동 분할됩니다. 그렇지 않으면 먼저 16 kHz 모노 FLAC 또는 MP3로 변환하세요: ffmpeg -i in.flac -ar 16000 -ac 1 out.flac.',
        },
        {
          q: 'FLAC 메타데이터(앨범, 아티스트, 연도)를 유지할 수 있나요?',
          a: '전사는 FLAC 메타데이터 없이 일반 텍스트입니다. Vorbis 댓글 태그는 전사 중에 무시됩니다. 하류에서 필요하다면 아카이브 시스템에서 메타데이터 매핑을 유지하세요.',
        },
        {
          q: 'Mictoo는 비영어 FLAC을 전사하나요?',
          a: '네. Whisper large-v3는 50개 이상의 언어를 지원하며 자동 감지가 가능합니다. 특이한 억양이나 오래된 녹음의 경우, 더 깨끗한 첫 번째 패스 감지를 위해 언어를 명시적으로 설정하세요.',
        },
        {
          q: '이 오디오를 사용하는 비디오에 대한 SRT 자막을 받을 수 있나요?',
          a: '네. 전사 후 SRT 또는 VTT를 다운로드하세요. 타임스탬프는 비디오 편집기나 접근성 도구에서 사용하기 위해 원래 FLAC 타임라인에 맞춰져 있습니다.',
        },
        {
          q: '제 FLAC 파일이 귀하의 서버에 저장되나요?',
          a: '아니요. 오디오는 전사 제공업체로 스트리밍되고 한 번 처리된 후 메모리에서 삭제됩니다. 우리는 오디오를 디스크에 기록하지 않습니다. 전사는 로그인할 경우에만 저장됩니다.',
        },
        {
          q: '전사를 다른 언어로 번역할 수 있나요?',
          a: '네. 전사 후 대상 언어를 선택하고 번역을 클릭하세요. 번역은 GPT-4o-mini에서 실행되며 원본과 함께 표시됩니다.',
        },
        {
          q: 'FLAC 전사에는 얼마나 걸리나요?',
          a: '15분 FLAC는 일반적으로 끝에서 끝까지 25-45초가 걸립니다. 업로드 한계에 가까운 큰 파일은 45-90초가 걸립니다. FLAC 파일이 크기 때문에 업로드 속도가 종종 더 긴 단계입니다.',
        },
        {
          q: '24비트 고해상도 FLAC을 수용하나요?',
          a: '네. 96 kHz 또는 192 kHz에서 24비트 FLAC이 완전히 지원됩니다. Whisper는 내부적으로 리샘플링하므로 고해상도가 깨끗한 오디오에 대해 16비트 44.1 kHz보다 정확도를 향상시키지는 않지만 해를 끼치지는 않습니다.',
        },
      ]}
      ctaHeadline="FLAC을 드롭하고 아카이브 준비된 전사를 받으세요"
      ctaSubtitle="무손실 소스 입력, 검색 가능한 텍스트 출력. 구술 역사, 현장 녹음 및 보존 복사본."
      ctaButton="FLAC 업로드하여 전사하기"
    />
  )
}