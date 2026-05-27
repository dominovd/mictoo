import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/podcast-transcription',
  'fr': 'https://mictoo.com/fr/podcast-transcription',
  'de': 'https://mictoo.com/de/podcast-transcription',
  'es': 'https://mictoo.com/es/podcast-transcription',
  'ru': 'https://mictoo.com/ru/podcast-transcription',
  'it': 'https://mictoo.com/it/podcast-transcription',
  'pt': 'https://mictoo.com/pt/podcast-transcription',
  'pl': 'https://mictoo.com/pl/podcast-transcription',
  'ja': 'https://mictoo.com/ja/podcast-transcription',
  'ko': 'https://mictoo.com/ko/podcast-transcription',
  'x-default': 'https://mictoo.com/podcast-transcription',
}

export const metadata = {
  title: '팟캐스트 받아쓰기 — 무료 AI 생성기 | Mictoo',
  description:
    '팟캐스트의 무료 AI 받아쓰기. 에피소드(MP3, MP4, M4A, WAV)를 업로드하여 타임코드가 있는 깨끗한 받아쓰기를 몇 초 만에 받으세요. 가입 불필요, 분당 과금 없음.',
  alternates: { canonical: 'https://mictoo.com/ko/podcast-transcription', languages: LANGS },
}

export default function KoPodcastPage() {
  return (
    <LandingLayout
      defaultLanguage="ko"
      badge="팟캐스터 · 호스트 · 무료"
      h1={<>팟캐스트 받아쓰기<br /><span className="text-brand-600">무료 받아쓰기 생성기</span></>}
      subtitle="모든 에피소드를 깨끗한 텍스트로 변환. MP3, MP4 또는 M4A를 업로드하여 몇 초 만에 받아쓰기를 받으세요. 계정 불필요, 분당 과금 없음."
      howItWorks={[
        { icon: '📂', title: '에피소드 드롭', desc: 'MP3, MP4, M4A, WAV 또는 FLAC. Riverside의 클라우드 녹음, Descript의 내보내기, Zoom의 원시 오디오, Anchor.fm 파일. 모두 작동.' },
        { icon: '⚡', title: 'AI가 작업', desc: 'Whisper large-v3가 우리 백엔드에서 실행되어 오디오를 텍스트로 변환. 대부분의 30분 에피소드는 1분 미만에 완료.' },
        { icon: '📋', title: '복사, 다운로드 또는 편집', desc: '텍스트를 TXT로, 자막용 SRT로, 또는 쇼노트 에디터에 직접 붙여넣기. 내보내기 전에 뷰어에서 잘못된 단어를 수정.' },
      ]}
      whyUse={{ title: '팟캐스터가 Mictoo를 사용하는 이유', bullets: [
        { title: '긴 에피소드가 문제 아님', desc: '무료 가입 후 파일당 최대 60분. 두 부분으로 분할하면 상대적 타임코드를 유지하여, 계산 없이 SRT 파일을 재결합할 수 있습니다.' },
        { title: '억양과 크로스토크가 견딤', desc: 'Whisper large-v3는 우리가 아는 비원어민 영어에 가장 강한 개방형 음성 모델. 공동 호스트가 베를린이나 상파울루 출신이라도 받아쓰기가 죽으로 변하지 않습니다.' },
        { title: '음악 베드가 깨뜨리지 않음', desc: '우리 파이프라인은 받아쓰기 전에 Voice Activity Detection을 실행합니다. 긴 악기 인트로는 만들어진 단어가 아닌 무음으로 표시. 음악 베드가 있는 스폰서 읽기도 깨끗하게 통과합니다.' },
        { title: '구독 없음', desc: '많은 팟캐스터가 월 1~2 에피소드를 받아씁니다. 월 15달러 시트를 지불하는 것은 낭비. 필요에 따라 파일 업로드. 광고와 파워 유저를 위한 계획된 Pro 플랜으로 운영.' },
        { title: '오디오는 저장되지 않음', desc: '파일은 음성 제공업체로 직접 스트리밍되고, 받아쓰기되고, 삭제됩니다. 에피소드를 보관하지 않으며 제공업체(Groq, OpenAI)는 API 데이터로 훈련하지 않습니다.' },
      ]}}
      useCases={{ title: '팟캐스터가 받아쓰기로 실제로 하는 일', items: [
        { title: '쇼노트와 블로그 게시물', desc: 'CMS에 받아쓰기를 붙여넣고, 챕터를 표시하고, 링크를 추가하고, 블로그 게시물을 게시. 45분 에피소드는 보통 6000-8000 단어의 소스 자료를 만듭니다. 하나의 녹음에서 가볍게 편집된 3-4개 블로그 게시물.' },
        { title: '소셜 미디어용 에피소드 인용', desc: '받아쓰기를 스캔하여 히트한 라인을 찾고 그래픽으로 만드세요. 1.5배속으로 타임코드를 위해 오디오를 사냥하는 것보다 훨씬 빠릅니다.' },
        { title: '백 카탈로그의 검색 가능한 아카이브', desc: '오래된 에피소드를 배치 받아쓰기로 통과시키면, 갑자기 수년간의 대화에 Ctrl+F가 가능합니다. 게스트가 돌아왔을 때 지난번에 무엇을 이야기했는지 기억하고 싶을 때 유용.' },
        { title: 'YouTube 자동 자막 대체', desc: 'YouTube의 자동 자막은 두 목소리와 음악이 있는 팟캐스트에는 평범합니다. 대신 Mictoo SRT를 업로드. 더 나은 구두점, 더 적은 오류, 더 나은 접근성.' },
        { title: '접근성 받아쓰기 링크', desc: '많은 팟캐스터가 RSS 쇼노트에 "받아쓰기 읽기" 링크를 삽입합니다. 청각 장애인 청취자를 돕고 검색 엔진이 콘텐츠를 찾는 데 도움을 줍니다.' },
      ]}}
      proTips={{ title: '깨끗한 팟캐스트 받아쓰기를 위한 팁', tips: [
        { title: '먼저 인트로와 아웃트로 음악 제거', desc: 'Whisper는 음악을 잘 무시하지만, 90초 악기 콜드 오픈은 가끔 유령 단어를 트리거합니다. 에피소드마다 같은 인트로라면, 업로드 전에 Audacity에서 처음 1:30을 잘라내세요. 나중에 몇 분의 정리를 절약.' },
        { title: '원시 파일이 거대하면 64 kbps 모노로 내보내기', desc: '음성에 스테레오가 필요 없고, 64 kbps가 음성에 충분. 64 kbps 모노로 2시간 에피소드는 약 55 MB. 로그인이 있는 60 MB 한도에 분할 없이 맞습니다. ffmpeg: ffmpeg -i episode.wav -ac 1 -b:a 64k episode.mp3.' },
        { title: '게스트 오디오가 나쁜 인터뷰에서는 각 트랙을 별도로 받아쓰기', desc: 'Riverside나 SquadCast에서 녹음하고 스피커당 별도 오디오 트랙이 있다면, 각각을 별도로 업로드. Whisper는 한 번에 한 목소리를 더 쉽게 처리. 더 깨끗한 귀속, 중첩에서 손실된 단어 적음.' },
        { title: '짧은 에피소드에는 언어를 명시적으로 설정', desc: '자동 감지는 첫 오디오 청크를 샘플링. 한 단어 콜드 오픈이나 웃음으로 열면, 감지가 잘못된 언어로 떨어질 수 있습니다. 5분 미만에는 언어를 수동으로 선택하세요.' },
        { title: '구두점은 불완전. 처음 10줄 수정, 나머지는 그대로', desc: 'Whisper는 대부분의 구두점을 맞추지만 가끔 세미콜론과 직접 화법을 놓칩니다. 쇼노트에는 처음 10줄이 중요(사람들이 훑어봄). 그 이상: 그대로 보내세요.' },
        { title: '자막이 필요 없어도 SRT 내보내기 사용', desc: 'SRT는 몇 초마다 타임코드를 제공. 블로그 게시물에 붙여넣어도, 이 타임코드는 인용을 확인하기 위해 오디오로 돌아가는 데 도움이 됩니다. 여기에 무료 SRT 생성기가 있습니다.' },
      ]}}
      faq={[
        { q: '2시간 에피소드를 받아쓸 수 있습니까?', a: '네, 하지만 먼저 분할. 우리 파일 한도는 무료 30분, 가입 후 60분. 2시간 에피소드는 2~3 부분으로 분할하여 각각을 받아쓰기. 오디오 분할 가이드는 ffmpeg나 Audacity로 60초에 하는 방법을 설명합니다.' },
        { q: '스피커 레이블(호스트 대 게스트)을 받을 수 있습니까?', a: '현재 자동으로는 안 됩니다. Whisper 자체는 스피커 분리를 하지 않습니다. 스피커당 별도 트랙이 있다면(Riverside, SquadCast, Zencastr에서 일반적), 각각을 별도로 업로드하고 최종 받아쓰기에서 직접 레이블 지정. 분리를 살펴보고 있지만 잘 할 수 있을 때만 출시합니다.' },
        { q: '억양과 이중언어 팟캐스트는 어떻게 처리합니까?', a: 'Whisper large-v3는 68만 시간의 다국어 오디오로 훈련되었습니다. 비원어민 영어, 지역 억양, 코드 스위칭이 더 작은 모델보다 잘 작동. 에피소드 중간에 영어와 스페인어 사이를 전환하는 팟캐스트에는 언어로 "자동 감지"를 선택하면 Whisper가 전환을 따라갑니다.' },
        { q: '팟캐스트용으로 어떤 오디오 포맷을 지원합니까?', a: 'MP3, M4A, WAV, FLAC, OGG, WEBM, AAC. 더하기 MP4와 MOV 같은 비디오 파일(오디오 추출). 팟캐스트 호스트가 이들 중 하나로 다운로드를 제공하면 준비 완료. AIFF와 ALAC는 직접 지원되지 않으며, 먼저 WAV로 변환.' },
        { q: '에피소드당 단어 한도가 있습니까?', a: '단어 한도 없음. 파일 크기 한도(무료 25 MB, 가입 60 MB)와 길이(무료 30분, 가입 60분)만. 일반 60분 에피소드는 약 9000-11000 단어를 생성합니다.' },
        { q: '인간 받아쓰기 작업자와 비교한 팟캐스트 받아쓰기 정확도는?', a: '깨끗한 스튜디오 오디오에서 Whisper large-v3은 보통 5-10% 단어 오류율에 도달. 인간 받아쓰기 작업자는 3-5%. 대부분의 쇼노트와 블로그 재사용 작업에는 AI로 충분. 법정 증언이나 학술 인용에는 인간을 고용하세요.' },
        { q: '에피소드가 서버에 저장됩니까?', a: '아니요. 오디오를 받아쓰기 제공업체(Groq, 백업으로 OpenAI)에 직접 전달. 그들이 처리하고 우리가 폐기. 팟캐스트 파일을 데이터베이스나 스토리지에 결코 기록하지 않습니다.' },
        { q: '자막용으로 SRT로 다운로드할 수 있습니까?', a: '네. 받아쓰기 후 SRT 다운로드 버튼 클릭. YouTube Studio, Premiere Pro, DaVinci Resolve 또는 모든 비디오 에디터에서 직접 사용.' },
        { q: '분당 과금합니까?', a: '아니요. Mictoo의 받아쓰기는 무료입니다. 현재는 광고로 자금 조달, 더 긴 파일이나 배치 업로드가 필요한 사용자를 위한 유료 Pro 플랜이 나중에 옵니다.' },
        { q: '내 에피소드에 노골적인 언어가 있습니다. 검열됩니까?', a: '필터링 없음. 받아쓰기는 정확히 말한 것을 반영. 깨끗한 버전을 위해 욕설을 편집하고 싶다면 다운로드 후 스스로 하세요.' },
        { q: '다운로드 전에 받아쓰기를 편집할 수 있습니까?', a: '네. 결과 뷰에 간단한 에디터가 있습니다. 잘못된 단어를 수정한 다음 편집된 버전을 TXT나 SRT로 다운로드.' },
        { q: 'Mictoo의 팟캐스트 받아쓰기는 GDPR 준수입니까?', a: '사이트를 떠난 후 서버에 오디오나 받아쓰기를 저장하지 않습니다. 우리는 유럽에 있고 제공업체(Groq US, OpenAI US)는 DPA에 서명했습니다. 특정 규정 준수 질문에 대해서는 개인정보 보호 정책을 참조하거나 info@mictoo.com에 쓰세요.' },
      ]}
      relatedLinks={[
        { href: '/ko/free-srt-generator', label: 'SRT 생성기', desc: '일반 텍스트가 아닌 팟캐스트 준비 자막 파일.' },
        { href: '/ko/timestamped-transcription', label: '타임코드 받아쓰기', desc: '챕터 마커, 편집, 인용 검색용.' },
        { href: '/ko/interview-transcription', label: '인터뷰 받아쓰기', desc: '같은 엔진, 1대1 포맷에 최적화.' },
        { href: '/ko/youtube-to-text', label: 'YouTube를 텍스트로', desc: '에피소드가 이미 YouTube에 있다면 거기서 오디오 가져오기.' },
      ]}
    />
  )
}
