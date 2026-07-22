import FormatPageLayout from '@/components/FormatPageLayout'

export const metadata = {
  title: 'WAV를 텍스트로: 무료 온라인 WAV 전사 | Mictoo',
  description:
    'WAV 파일을 업로드하면 초 단위로 타임스탬프가 있는 편집 가능한 전사를 받을 수 있습니다. 스튜디오 바운스, 현장 녹음, DAW 내보내기를 위해 제작되었습니다. PCM 및 방송 웨이브(BWF)를 지원합니다. 무료, 가입 필요 없음.',
  alternates: {
    canonical: 'https://mictoo.com/ko/wav-to-text',
    languages: {
      'en': 'https://mictoo.com/wav-to-text',
      'fr': 'https://mictoo.com/fr/wav-to-text',
      'de': 'https://mictoo.com/de/wav-to-text',
      'es': 'https://mictoo.com/es/wav-to-text',
      'ru': 'https://mictoo.com/ru/wav-to-text',
      'it': 'https://mictoo.com/it/wav-to-text',
      'pt': 'https://mictoo.com/pt/wav-to-text',
      'pl': 'https://mictoo.com/pl/wav-to-text',
      'ja': 'https://mictoo.com/ja/wav-to-text',
      'ko': 'https://mictoo.com/ko/wav-to-text',
      'x-default': 'https://mictoo.com/wav-to-text',
    },
  },

  openGraph: {
    title: "WAV를 텍스트로: 무료 온라인 WAV 전사 | Mictoo",
    description: "WAV 파일을 업로드하면 초 단위로 타임스탬프가 있는 편집 가능한 전사를 받을 수 있습니다. 스튜디오 바운스, 현장 녹음, DAW 내보내기를 지원합니다. PCM 및 BWF가 지원됩니다.",
    url: "https://mictoo.com/ko/wav-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "WAV를 텍스트로: 무료 온라인 WAV 전사",
    description: "WAV 파일을 업로드하면 초 단위로 타임스탬프가 있는 편집 가능한 전사를 받을 수 있습니다. 스튜디오 바운스, 현장 녹음, DAW 내보내기를 지원합니다.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function KoWavToTextPage() {
  return (
    <FormatPageLayout
      locale="ko"
      badge="WAV · PCM · BWF · 무료"
      h1First="WAV를 텍스트로"
      h1Second="스튜디오 바운스, 현장 녹음, DAW 내보내기"
      subtitle="WAV는 당신의 DAW가 바운스하는 형식이며, 현장 녹음기가 카드에 기록하는 형식이며, 방송 스튜디오에서 표준화된 형식입니다. PCM 또는 BWF WAV를 드롭하면 초 단위로 타임스탬프가 있는 전사를 받을 수 있습니다. 무료, 가입 필요 없음."
      highlightFormat="wav"
      previewFileName="field-recording.wav"
      previewWordCount={166}
      previewDurationLabel="14분 22초"
      previewLines={[
        { t: '0:00',  line: '장소 탐색, 3일째. 우리는 약 6,000피트 높이의 능선 동쪽에 세팅되어 있습니다.' },
        { t: '0:09',  line: '바람은 서쪽에서 오는 돌풍으로 불고 있어, 나는 블림프를 켜고 80헤르츠에서 롤오프했습니다.' },
        { t: '0:18',  line: '인터뷰 마이크의 레벨은 약 -12에서 피크를 찍고 있으며, 이 분위기에는 적합하게 느껴집니다.' },
        { t: '0:28',  line: '내 옆에 서 있는 것은 이 공원의 이 구역에서 22년 동안 일해온 레인저입니다.' },
        { t: '0:37',  line: '사람들이 여기서 가장 많이 변한 것이 무엇인지 물어보면, 나는 항상 2020년 여름의 화재로 시작합니다.' },
        { t: '0:47',  line: '그 이후로 숲은 결코 같은 모습이 아니었고, 야생 동물의 패턴은 재설정하는 데 몇 년이 걸렸습니다.' },
        { t: '0:57',  line: '화재 이후 첫 몇 주가 어떤 모습이었는지 설명해 주실 수 있나요?' },
        { t: '1:05',  line: '물론입니다. 연기는 총 6주 동안 지속되었고, 가시성은 절대 반 마일을 넘지 않았습니다.' },
      ]}
      whyTitle="WAV 전사를 위한 Mictoo의 이유"
      whyCards={[
        {
          icon: 'waveform',
          title: 'PCM 및 BWF, 변환 없음',
          desc: '표준 16/24/32비트 PCM WAV 및 메타데이터가 포함된 방송 웨이브(BWF). 우리는 파일을 변환 단계 없이 그대로 수락합니다.',
        },
        {
          icon: 'target',
          title: '손실 코덱 아티팩트 없음',
          desc: '압축되지 않은 PCM은 손실 압축 아티팩트를 추가하지 않습니다. 깨끗한 녹음은 강력한 소스가 될 수 있지만, 방 소음과 마이크 위치도 여전히 중요합니다.',
        },
        {
          icon: 'gear',
          title: '모든 샘플 속도, 모든 비트 깊이',
          desc: '44.1 kHz, 48 kHz, 96 kHz, 192 kHz. Whisper는 내부적으로 16 kHz 모노로 리샘플링하므로, 소스 속도가 품질에 영향을 미치지 않습니다.',
        },
        {
          icon: 'clip',
          title: 'BWF 메타데이터는 귀하의 측에서 보존됩니다',
          desc: '우리는 전사 중에 iXML/bext 메타데이터 블록을 무시합니다. 귀하의 원본 WAV 파일(및 그 메타데이터)은 수정되지 않습니다.',
        },
      ]}
      scenariosTitle="WAV를 텍스트로 변환할 때 적합한 경우"
      scenarios={[
        {
          icon: 'mic',
          title: '현장 녹음기 캡처',
          desc: 'Zoom H4n, H5, H6, Tascam DR-40, Sound Devices MixPre. 현장 장비가 카드에 기록하는 것을 드롭하면 깨끗한 전사를 받을 수 있습니다.',
        },
        {
          icon: 'waveform',
          title: '참조용 DAW 바운스',
          desc: 'Logic, Pro Tools 또는 Ableton에서의 러프 믹스 또는 보컬 전용 바운스. 가사 또는 대화의 텍스트 버전을 참조용으로 얻을 수 있습니다.',
        },
        {
          icon: 'briefcase',
          title: '방송 인터뷰',
          desc: '라디오 인터뷰 또는 팟캐스트 스튜디오에서의 BWF 녹음. 전사는 쇼 노트, 인용 및 아카이브 문서에 사용됩니다.',
        },
        {
          icon: 'book',
          title: '구술 역사 아카이브',
          desc: '보존을 위해 WAV로 캡처된 장기 구술 역사 녹음. 전사는 아카이브를 검색 가능하고 인용 가능하게 만듭니다.',
        },
        {
          icon: 'users',
          title: '증언 및 법적 녹음',
          desc: '증거 품질을 위해 압축되지 않은 WAV로 캡처된 녹음된 절차. 검토 및 인용을 위한 전사.',
        },
        {
          icon: 'sparkles',
          title: '보이스오버 작업',
          desc: 'ADR 패스, 내레이션 녹음 또는 WAV로 바운스된 보이스오버 세션. 전사는 읽기가 스크립트와 일치하는지 확인합니다.',
        },
      ]}
      technicalTitle="WAV 파일의 내부"
      technicalIntro="WAV는 압축되지 않은 PCM 오디오에 일반적으로 사용되는 컨테이너입니다. 추가 해상도는 제작 및 아카이빙에 유용하지만, 녹음 조건이 음성이 얼마나 이해 가능한지를 결정합니다."
      technicalFacts={[
        {
          icon: 'waveform',
          title: 'PCM 및 방송 웨이브',
          desc: '표준 PCM WAV 및 BWF 녹음은 동일한 음성을 전달할 수 있습니다. BWF는 그 주위에 제작 메타데이터를 추가합니다.',
        },
        {
          icon: 'gear',
          title: '샘플 속도 및 비트 깊이',
          desc: '높은 샘플 속도와 비트 깊이는 제작 헤드룸을 보존하지만, 노이즈, 클리핑 또는 먼 마이크를 수리할 수는 없습니다.',
        },
        {
          icon: 'cloud',
          title: '설계상 크기',
          desc: '압축되지 않은 WAV는 빠르게 커집니다. 긴 인터뷰의 경우, 녹음을 나누거나 필요에 따라 더 작은 모노 음성 복사본을 만드세요.',
        },
        {
          icon: 'clip',
          title: '메타데이터는 외부에 유지됩니다',
          desc: 'BWF, iXML 및 큐 메타데이터는 전사에 추가되지 않으며, 원본 소스 파일은 수정되지 않습니다.',
        },
      ]}
      faq={[
        {
          q: 'Mictoo는 어떤 종류의 WAV 파일을 수락하나요?',
          a: '표준 PCM WAV는 16비트, 24비트 또는 32비트 부동소수점, 모든 샘플 속도(44.1 kHz에서 192 kHz까지), 모노 또는 스테레오를 지원합니다. 방송 웨이브(BWF)도 원본 파일에서 iXML/bext 메타데이터가 보존되어 완전히 지원됩니다.',
        },
        {
          q: '더 높은 비트 깊이나 샘플 속도가 전사 품질을 개선하나요?',
          a: '아니요. Whisper는 모든 오디오를 전사 전에 내부적으로 16 kHz 모노로 리샘플링하므로, 그 이상의 비트 깊이와 샘플 속도는 정확도에 영향을 미치지 않습니다. 녹음 품질(마이크 선택, 방, 노이즈 바닥)이 컨테이너 사양보다 훨씬 더 중요합니다.',
        },
        {
          q: '내 스튜디오 WAV가 60 MB를 초과합니다. 이제 어떻게 하나요?',
          a: '스테레오 24비트 48 kHz WAV는 분당 약 17 MB이므로, 약 3분 이상 녹음된 경우 한계에 도달합니다. ffmpeg -i in.wav -ar 16000 -ac 1 out.wav를 사용하여 16 kHz 모노 WAV(또는 128 kbps MP3)로 변환하세요. 전사 품질은 동일합니다.',
        },
        {
          q: '내 WAV 파일을 보관하나요?',
          a: '아니요. 파일은 전사 제공업체로 스트리밍되어 한 번 처리되고 메모리에서 삭제됩니다. 우리는 파일을 디스크에 기록하지 않습니다. 전사는 귀하가 로그인하고 기록에 추가하지 않는 한 저장되지 않습니다.',
        },
        {
          q: '전사에 원본 BWF 타임스탬프를 유지할 수 있나요?',
          a: '전사는 파일 시작(0:00 기준)부터의 상대 타임스탬프를 사용합니다. BWF 절대 시간 메타데이터는 텍스트 출력에 포함되지 않습니다. 장면 시간 코드 정렬이 필요하면 귀하의 측에서 두 가지를 일치시켜야 합니다.',
        },
        {
          q: 'Mictoo는 비영어 WAV를 전사하나요?',
          a: '네. Whisper large-v3는 50개 이상의 언어를 자동 감지하여 지원합니다. 짧은 녹음이나 특이한 억양의 경우, 더 깨끗한 첫 번째 감지를 위해 드롭다운에서 언어를 명시적으로 설정하세요.',
        },
        {
          q: 'WAV 녹음에 대한 SRT 자막을 받을 수 있나요?',
          a: '네. 전사 후 SRT 또는 VTT를 다운로드하세요. 두 형식 모두 원본 WAV 타임라인에 맞춰 타임스탬프가 정렬되어 비디오 편집기나 접근성 도구에서 사용할 수 있습니다.',
        },
        {
          q: 'WAV 전사에는 얼마나 걸리나요?',
          a: '15분 WAV는 일반적으로 전체적으로 20-40초 안에 완료됩니다. 업로드 한계에 가까운 큰 파일은 40-80초가 걸립니다. WAV 파일이 크기 때문에 업로드 속도가 종종 더 긴 단계입니다.',
        },
        {
          q: 'Sound Devices의 32비트 부동소수점 녹음을 지원하나요?',
          a: '네. MixPre, F시리즈 또는 Zoom F시리즈 레코더에서의 32비트 부동소수점 WAV 파일은 표준 PCM과 동일한 방식으로 수락되고 전사됩니다.',
        },
        {
          q: '전사를 다른 언어로 번역할 수 있나요?',
          a: '네. 전사 후 목표 언어를 선택하고 번역을 클릭하세요. 번역은 GPT-4o-mini에서 실행되며 원본 전사와 함께 표시됩니다.',
        },
      ]}
      ctaHeadline="WAV를 드롭하고 깨끗한 전사를 받으세요"
      ctaSubtitle="PCM, BWF, 모든 샘플 속도. 스튜디오 바운스, 현장 녹음, DAW 내보내기."
      ctaButton="WAV 업로드하여 전사하기"
    />
  )
}