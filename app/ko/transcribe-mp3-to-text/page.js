import FormatPageLayout from '@/components/FormatPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/transcribe-mp3-to-text',
  'fr': 'https://mictoo.com/fr/transcribe-mp3-to-text',
  'de': 'https://mictoo.com/de/transcribe-mp3-to-text',
  'es': 'https://mictoo.com/es/transcribe-mp3-to-text',
  'ru': 'https://mictoo.com/ru/transcribe-mp3-to-text',
  'it': 'https://mictoo.com/it/transcribe-mp3-to-text',
  'pt': 'https://mictoo.com/pt/transcribe-mp3-to-text',
  'pl': 'https://mictoo.com/pl/transcribe-mp3-to-text',
  'ja': 'https://mictoo.com/ja/transcribe-mp3-to-text',
  'ko': 'https://mictoo.com/ko/transcribe-mp3-to-text',
  'x-default': 'https://mictoo.com/transcribe-mp3-to-text',
}

export const metadata = {
  title: 'MP3를 텍스트로: 팟캐스트 및 음성 녹음을 위한 무료 온라인 MP3 전사 | Mictoo',
  description:
    '타임스탬프, AI 요약 및 내보내기가 포함된 MP3 오디오 파일을 전사합니다. 팟캐스트, 음성 메모 및 다운로드한 오디오에 최적화되어 있습니다. MP3를 드롭하면 몇 초 안에 텍스트를 얻을 수 있습니다.',
  alternates: {
    canonical: 'https://mictoo.com/ko/transcribe-mp3-to-text',
    languages: LANGS,
  },
  openGraph: {
    title: 'MP3를 텍스트로: 무료 온라인 MP3 전사 | Mictoo',
    description: 'MP3 팟캐스트 또는 음성 녹음을 드롭하면 몇 초 안에 요약과 함께 전사를 얻을 수 있습니다.',
    url: 'https://mictoo.com/ko/transcribe-mp3-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MP3를 텍스트로: 무료 온라인 MP3 전사',
    description: 'MP3를 드롭하면 전사를 얻을 수 있습니다.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function KoTranscribeMp3ToTextPage() {
  return (
    <FormatPageLayout
      locale="ko"
      badge="MP3 · 팟캐스트 친화적 · 무료"
      h1First="MP3를 텍스트로"
      h1Second="팟캐스트, 음성 메모 및 인터뷰를 위한"
      subtitle="MP3는 팟캐스트 및 음성 녹음을 위한 일반적인 형식입니다. 에피소드를 드롭하면 타임스탬프, AI 요약 및 쇼 노트를 위한 깔끔한 내보내기가 포함된 전사를 얻을 수 있습니다."
      highlightFormat="mp3"
      previewFileName="podcast-episode.mp3"
      previewWordCount={182}
      previewDurationLabel="28분 14초"
      previewLines={[
        { t: '0:00',  line: '쇼에 다시 오신 것을 환영합니다. 오늘은 2026년 독립 팟캐스트의 상태에 대해 이야기하고 있습니다.' },
        { t: '0:07',  line: '제 손님은 8년 동안 에피소드를 놓치지 않고 주간 쇼를 운영해왔습니다.' },
        { t: '0:14',  line: '초대해 주셔서 감사합니다. 우리가 오디오가 이미 포화 상태라고 말할 때 시작했다는 것이 믿기지 않습니다.' },
        { t: '0:22',  line: '거기서 시작해 봅시다. 2018년에 팟캐스트를 시작하는 것과 지금의 차이점은 무엇인가요?' },
        { t: '0:30',  line: '배급은 진입하기 더 어려웠지만, 청중은 더 인내심이 있었습니다.' },
        { t: '0:37',  line: '오늘날 도구는 놀랍고, 몇 초 안에 전사되고, 쇼 노트를 위한 AI 요약이 있지만, 주목은 더 희귀합니다.' },
        { t: '0:47',  line: '좋은 전환점입니다. 전사가 기본적으로 무료가 되었을 때, 당신의 쇼 노트 작업 흐름은 어떻게 되나요?' },
        { t: '0:55',  line: 'MP3를 내보내고, 전사 도구에 드롭한 다음, AI 요약을 노트의 첫 번째 초안으로 사용합니다.' },
      ]}
      whyTitle="MP3 전사를 위한 Mictoo의 이유"
      whyCards={[
        {
          icon: 'mic',
          title: '팟캐스트 및 음성을 위해 제작됨',
          desc: 'MP3는 팟캐스트 네트워크가 배포하고 음성 앱이 내보내는 형식입니다. 타임스탬프가 준비된 음성 콘텐츠에 맞춰 조정되었습니다.',
        },
        {
          icon: 'gear',
          title: '일반 MP3 설정 수용',
          desc: '고정 비트 전송률 또는 가변 비트 전송률, 모노 또는 스테레오. 명확한 음성이 가장 중요합니다. 매우 낮은 비트 전송률과 들리는 압축 아티팩트는 정확도를 감소시킬 수 있습니다.',
        },
        {
          icon: 'sparkles',
          title: '쇼 노트를 위한 AI 요약',
          desc: '전사와 함께 요약이 자동으로 나타납니다. 에피소드 노트, 설명 및 SEO 친화적인 요약을 위한 확실한 첫 번째 초안입니다.',
        },
        {
          icon: 'globe',
          title: 'SRT, VTT 및 50개 이상의 언어',
          desc: '에피소드의 YouTube 비디오 버전을 위해 SRT 또는 VTT로 내보냅니다. 스페인어, 프랑스어, 독일어 및 45개 이상의 다른 언어로 한 번의 클릭으로 번역합니다.',
        },
      ]}
      scenariosTitle="MP3를 텍스트로 변환할 때 적합한 경우"
      scenarios={[
        {
          icon: 'mic',
          title: '팟캐스트 쇼 노트',
          desc: '에피소드를 반송하고 호스트에 업로드했습니다. 전사 및 AI 요약을 위한 동일한 MP3를 여기 드롭하세요.',
        },
        {
          icon: 'layers',
          title: '팟캐스트 백 카탈로그',
          desc: '전사 없이 이미 게시된 여러 에피소드. 아카이브를 보충하고 모든 에피소드를 검색 가능하게 만들기 위해 하나씩 처리합니다.',
        },
        {
          icon: 'editPen',
          title: '음성 메모를 문서로',
          desc: '휴대폰에서 녹음된 음성 메모(많은 앱이 MP3로 내보냄). 떠오르는 아이디어를 검색 가능하고 편집 가능한 텍스트로 변환합니다.',
        },
        {
          icon: 'clip',
          title: '다운로드한 인터뷰',
          desc: '기사에서 인용하고 싶은 팟캐스트 인터뷰, 참조하고 싶은 컨퍼런스 토크 MP3, 공부하고 싶은 다운로드한 강의.',
        },
        {
          icon: 'book',
          title: '오디오북 챕터',
          desc: '노트 작성을 위한 인쇄된 텍스트로 원하는 오디오북 MP3 챕터. 대형 오디오북 파일은 종종 60 MB를 초과하며 먼저 분할해야 합니다.',
        },
        {
          icon: 'video',
          title: 'YouTube에서 MP3 오디오',
          desc: 'YouTube 오디오 추출기는 종종 호환성을 위해 MP3로 출력됩니다. 추출된 파일을 드롭하여 타임스탬프가 포함된 깔끔한 전사를 얻습니다.',
        },
      ]}
      technicalTitle="MP3에서 중요한 것"
      technicalIntro="MP3 설정은 파일 크기에 영향을 미치며 극단적인 경우 이해 가능성에 영향을 줄 수 있습니다. 이러한 세부 사항은 파일을 있는 그대로 업로드할지, 먼저 더 작은 음성 복사본을 만들지 결정하는 데 도움이 됩니다."
      technicalFacts={[
        {
          icon: 'waveform',
          title: '비트 전송률 및 명확성',
          desc: '적당한 비트 전송률의 음성은 일반적으로 적합합니다. 매우 낮은 비트 전송률, 클리핑 또는 강한 아티팩트는 자음과 이름을 숨길 수 있습니다.',
        },
        {
          icon: 'gear',
          title: 'CBR 및 VBR',
          desc: '고정 비트 전송률 및 가변 비트 전송률 MP3 파일 모두 업로드할 수 있습니다. 타임스탬프는 디코딩된 오디오 타임라인을 따릅니다.',
        },
        {
          icon: 'clip',
          title: 'ID3 태그는 별도로 유지',
          desc: '아티스트, 제목, 아트워크 및 챕터 메타데이터는 전사에 삽입되지 않습니다. 해당 메타데이터는 게시 시스템에 유지하세요.',
        },
        {
          icon: 'cloud',
          title: '긴 에피소드',
          desc: '에피소드가 업로드 한도를 초과하면 더 낮은 비트 전송률로 모노 음성 복사본을 내보내거나 자연스러운 중단에서 분할합니다.',
        },
      ]}
      faq={[
        {
          q: 'Mictoo는 모든 MP3 파일을 전사하나요?',
          a: 'Mictoo는 고정 또는 가변 비트 전송률, 모노 또는 스테레오 오디오가 포함된 일반 MP3 파일을 수용합니다. 손상된 파일, 지원되지 않는 변형 또는 심각한 압축 아티팩트가 있는 녹음은 재내보내기가 필요할 수 있습니다. 로그인 시 한도는 60 MB이며, 익명으로는 25 MB입니다.',
        },
        {
          q: 'MP3 비트 전송률이 전사 품질에 영향을 미치나요?',
          a: '녹음의 명확성이 높은 비트 전송률보다 더 중요하지만, 비트 전송률이 무관하지는 않습니다. 적당한 비트 전송률의 깨끗한 음성 녹음은 일반적으로 적합합니다. 공격적인 압축, 클리핑 또는 매우 낮은 비트 전송률은 음성 세부 정보를 제거하고 정확도를 감소시킬 수 있습니다.',
        },
        {
          q: '내 팟캐스트 MP3가 60 MB를 초과합니다. 이제 어떻게 하나요?',
          a: 'ffmpeg로 더 작은 모노 음성 복사본을 만드세요: ffmpeg -i podcast.mp3 -b:a 64k -ac 1 output.mp3. 업로드하기 전에 들리는 아티팩트를 확인하거나 자연스러운 중단에서 에피소드를 분할하세요.',
        },
        {
          q: '에피소드의 AI 요약을 받을 수 있나요?',
          a: '네. 전사가 완료된 후 전사와 함께 AI 요약이 자동으로 나타납니다. 팟캐스트 쇼 노트, 에피소드 설명 및 SEO 친화적인 요약을 위한 확실한 첫 번째 초안입니다.',
        },
        {
          q: 'YouTube 버전의 SRT 자막을 다운로드할 수 있나요?',
          a: '네. 전사 후 SRT 또는 VTT로 내보낼 수 있습니다. 두 형식 모두 원래 MP3 타임라인에 맞춰 타임스탬프가 포함됩니다. YouTube 업로드 또는 비디오 편집기에 자막을 위해 드롭하세요.',
        },
        {
          q: 'Mictoo는 비영어 MP3 파일을 전사하나요?',
          a: '네. Whisper large-v3는 50개 이상의 언어를 지원하며 자동 감지가 가능합니다. 짧은 MP3 또는 비영어 콘텐츠의 경우, 더 깨끗한 첫 번째 패스 감지를 위해 드롭다운에서 언어를 명시적으로 설정하세요.',
        },
        {
          q: '전사를 다른 언어로 번역할 수 있나요?',
          a: '네. 전사가 완료된 후, 대상 언어를 선택하고 번역을 클릭하세요. 번역은 GPT-4o-mini에 의해 생성되며 원본 전사와 함께 나타납니다.',
        },
        {
          q: '내 MP3 파일이 귀하의 서버에 저장되나요?',
          a: '아니요. MP3는 전사 제공업체로 스트리밍되고, 한 번 처리된 후 메모리에서 삭제됩니다. 우리는 오디오를 디스크에 기록하지 않습니다. 텍스트 전사는 로그인하고 기록에 추가하기로 선택한 경우에만 저장됩니다.',
        },
        {
          q: 'ID3 메타데이터(아티스트, 제목, 앨범)가 전사에 나타나나요?',
          a: '아니요. 전사는 MP3 메타데이터 없이 일반 텍스트입니다. ID3 태그는 전사 중 무시됩니다. 에피소드 메타데이터와 일치하는 전사가 필요하다면, 해당 매핑을 자신의 아카이브 시스템에 유지하세요.',
        },
        {
          q: 'MP3 전사에는 얼마나 걸리나요?',
          a: '30분짜리 팟캐스트 MP3는 일반적으로 30-50초 내에 끝납니다. 업로드 한도에 가까운 대형 파일은 60-90초가 걸립니다. 업로드 속도가 종종 과정에서 더 긴 단계입니다.',
        },
      ]}
      ctaHeadline="MP3를 드롭하고, 쇼 노트를 더 빠르게 작성하세요"
      ctaSubtitle="팟캐스트 에피소드, 음성 메모, 다운로드한 인터뷰, 오디오북 챕터. 몇 초 안에 텍스트와 요약을 얻으세요."
      ctaButton="전사를 위해 MP3 업로드"
    />
  )
}