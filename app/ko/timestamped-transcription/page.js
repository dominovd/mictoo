import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/timestamped-transcription',
  'fr': 'https://mictoo.com/fr/timestamped-transcription',
  'de': 'https://mictoo.com/de/timestamped-transcription',
  'es': 'https://mictoo.com/es/timestamped-transcription',
  'ru': 'https://mictoo.com/ru/timestamped-transcription',
  'it': 'https://mictoo.com/it/timestamped-transcription',
  'pt': 'https://mictoo.com/pt/timestamped-transcription',
  'pl': 'https://mictoo.com/pl/timestamped-transcription',
  'ja': 'https://mictoo.com/ja/timestamped-transcription',
  'ko': 'https://mictoo.com/ko/timestamped-transcription',
  'x-default': 'https://mictoo.com/timestamped-transcription',
}

export const metadata = {
  title: '타임코드 받아쓰기 — 무료 생성기 | Mictoo',
  description:
    '무료 타임코드 받아쓰기. 모든 오디오나 비디오의 단어 또는 문장 수준 타임코드. 저널리즘, 연구, 팟캐스팅, 비디오 편집에 완벽.',
  alternates: { canonical: 'https://mictoo.com/ko/timestamped-transcription', languages: LANGS },
}

export default function KoTimestampedPage() {
  return (
    <LandingLayout
      defaultLanguage="ko"
      badge="타임코드 · 인용 · 무료"
      h1={<>타임코드 받아쓰기<br /><span className="text-brand-600">무료 타임코드 받아쓰기</span></>}
      subtitle="오디오의 각 줄이나 단어에 대한 정확한 타임코드. 정확한 순간으로 돌아가기, 특정 구절 인용, 챕터 구축. 무료, 가입 불필요."
      howItWorks={[
        { icon: '📂', title: '파일 드롭', desc: 'MP3, M4A, MP4, WAV, FLAC, OGG, WEBM, AAC. 오디오와 비디오 포맷으로 작동.' },
        { icon: '⚡', title: 'AI가 받아쓰고 타임코드 부여', desc: 'Whisper large-v3가 각 세그먼트(선택적으로 각 단어)의 밀리초 정밀 타임코드가 있는 받아쓰기 생성.' },
        { icon: '💾', title: '세분성 선택하고 다운로드', desc: '문장 타임코드(가장 일반적) 또는 단어 타임코드(정밀 정렬 작업용) 선택. 인라인 타임코드가 있는 TXT, 자막 워크플로우용 SRT, 또는 클립보드에 복사로 다운로드.' },
      ]}
      whyUse={{ title: '타임코드 받아쓰기에 Mictoo를 사용하는 이유', bullets: [
        { title: '밀리초 정밀 타임코드', desc: 'Whisper는 밀리초 정밀도로 타임코드 출력. 모든 일반 비디오 프레임레이트보다 정밀, 인용 작업에 충분 이상.' },
        { title: '기본 문장 수준, 필요할 때 단어 수준', desc: '문장 수준이 받아쓰기를 읽기 쉽게 유지. 단어 수준은 노트에 과잉, 비디오 편집과 음악 정렬에 필수.' },
        { title: '무료', desc: '분 카운터 없음. "타임코드는 추가 요금" 계층 없음. 순수 받아쓰기와 같은 가격(무료).' },
        { title: '비디오 워크플로우용 SRT 내보내기', desc: 'SRT 포맷의 타임코드는 Premiere, DaVinci, CapCut, YouTube Studio에서 자막 트랙으로 직접 작동.' },
        { title: '인용용 TXT 인라인 타임코드', desc: '각 세그먼트 시작에 [00:01:23] 마커가 있는 일반 텍스트. 연구 노트, 블로그 게시물 또는 저널리즘 초안에 쉽게 붙여넣기.' },
        { title: '파일은 저장되지 않음', desc: '오디오는 받아쓰기 제공업체로 스트리밍되고 폐기. 서버에 아무것도 남지 않습니다.' },
      ]}}
      useCases={{ title: '사람들이 타임코드 받아쓰기를 사용하는 용도', items: [
        { title: '저널리즘과 인용', desc: '인터뷰에서 소스를 인용하나요? 노트의 인용 옆에 타임코드를 놓으세요. 편집자나 팩트체커가 "정확히 어디서 그렇게 말했나요"라고 물으면 2초 안에 답이 있습니다.' },
        { title: '팟캐스트용 챕터 마커', desc: '받아쓰기 생성, 자연스러운 섹션 전환을 스캔, 그 타임코드를 팟캐스트 호스트의 챕터 기능에 복사. 현대 플레이어는 재생 바에 챕터 표시.' },
        { title: '비디오 편집의 러프 컷', desc: '받아쓰기 가져오기, 유지하고 싶은 줄 표시, 타임코드로 타임라인에서 찾기. "페이퍼 편집"은 스크러빙보다 훨씬 빠름.' },
        { title: '학술 연구와 질적 코딩', desc: 'NVivo, Atlas.ti, MAXQDA의 연구자는 코드로 받아쓰기 세그먼트에 태그. 타임코드는 모호한 구절을 코딩할 때 정확한 순간을 위해 오디오로 돌아가게 합니다.' },
        { title: '싱어롱 비디오용 음악 정렬', desc: '카라오케 스타일이나 가사 비디오 프로젝트용 단어 타임코드. 각 단어가 노래되는 정확한 순간에 빛납니다.' },
      ]}}
      proTips={{ title: '타임코드 받아쓰기 팁', tips: [
        { title: '문장 타임코드가 95% 사용 사례에 작동', desc: '음악 정렬이나 단어별 비디오 캡션을 하지 않는 한, 문장 수준이 원하는 것. 더 읽기 쉽고, 편집하기 쉬움.' },
        { title: '단어 타임코드는 파일 크기와 복잡성을 부풀림', desc: '30분 강의의 단어 SRT는 수천 개의 항목. 정말 단어 정밀도가 필요할 때만 사용.' },
        { title: '팟캐스트에는 자연스러운 휴식에서 챕터 마커 생성', desc: '받아쓰기에서 주제 전환, 의제 변경 또는 게스트 소개를 찾기. 그 타임코드를 팟캐스트 호스트의 챕터 마커로 복사.' },
        { title: '저널리즘에는 사용할 수 있는 모든 인용과 함께 타임코드 저장', desc: '3주 후 미래의 당신은 인용이 어느 인터뷰에서 왔는지, 인터뷰의 어디서 왔는지 기억하지 못합니다. 타임코드가 이를 해결.' },
        { title: 'SRT 타임코드는 제로 패딩, TXT 타임코드는 아님', desc: 'SRT는 00:01:23,456 사용. TXT는 보통 [1:23] 사용. 포맷을 기대하는 CMS에 붙여넣는다면 붙여넣기 전에 변환.' },
        { title: '비디오 편집에서 우리 SRT의 타임코드는 원본 파일의 오디오에 정렬', desc: '비디오를 다른 프레임레이트로 재내보내도 타임코드는 여전히 맞음, 절대 시간(밀리초)이지 프레임이 아니기 때문.' },
        { title: '나쁜 오디오에서 타임코드가 드리프트', desc: 'Whisper가 음악이나 무음 중에 단어를 환각하면, 그 유령 단어의 타임코드는 추정. 실제 음성 타임코드는 정밀하게 유지. 음성 섹션만 신뢰, 음악 섹션 무시.' },
      ]}}
      faq={[
        { q: '문장과 단어 타임코드의 차이는?', a: '문장 수준: 텍스트 줄(보통 문장)당 하나의 타임코드. 단어 수준: 단어당 하나의 타임코드. 문장 수준은 읽기 쉽고 인용, 팟캐스팅, 대부분의 비디오 작업에 좋음. 단어 수준은 음악 정렬, 카라오케 비디오, 단어별 자막 애니메이션용.' },
        { q: '타임코드는 얼마나 정확합니까?', a: 'Whisper는 밀리초로 타임코드 출력. 모든 일반 비디오 프레임레이트(24, 25, 29.97, 30, 50, 60 fps)에서 오프셋 없이 올바르게 맞음.' },
        { q: '긴 파일에서 타임코드가 드리프트합니까?', a: '드물음. Whisper는 실제 오디오에 타임코드를 정렬하므로 60분 파일에서도 정밀하게 유지. 매우 긴 파일의 마지막 세그먼트에 서브초 드리프트가 나타날 수 있습니다. 알아채면 수동으로 조정.' },
        { q: '각 줄 앞에 [00:01:23] 같은 인라인 타임코드가 있는 TXT를 받을 수 있습니까?', a: '네. TXT로 다운로드하면 문장 타임코드를 인라인으로 삽입. 포맷: [00:01:23] 여기 문장 텍스트.' },
        { q: 'SRT에 타임코드가 포함됩니까?', a: '네, SRT 포맷의 전체 핵심. 각 자막 항목에 시작과 종료 타임코드가 있습니다.' },
        { q: 'YouTube의 타임코드 자동 자막과 비교하면?', a: 'YouTube의 자동 자막은 타임코드가 있지만 구두점이 없고 정확도가 낮음. 우리 것은 완전한 구두점, 더 나은 정확도, 모든 비디오 에디터에서 작동하는 표준 SRT 출력.' },
        { q: '받아쓰기에서 오디오의 특정 타임코드로 점프할 수 있습니까?', a: '결과 뷰에서 어느 타임코드든 클릭하여 오디오 플레이어를 그 순간으로 설정. 다운로드 후에는 별도 오디오 플레이어가 필요.' },
        { q: '타임코드가 Premiere나 DaVinci Resolve에서 작동합니까?', a: '네. SRT를 타임라인에 가져오기. 자막이 올바른 순간에 자동으로 나타남.' },
        { q: '타임코드 받아쓰기에 어떤 언어가 지원됩니까?', a: '순수 받아쓰기와 같은 50개 이상의 언어. 타임코드는 언어에 관계없이 모든 받아쓰기에 자동으로 함께 옵니다.' },
        { q: '오디오가 저장됩니까?', a: '아니요. 파일은 받아쓰기 제공업체로 스트리밍되고 처리 후 폐기.' },
        { q: '카라오케 비디오를 만들기 위해 단어 타임코드를 사용할 수 있습니까?', a: '네, 하지만 JSON이나 SRT 포맷에서 단어별 하이라이트를 렌더링할 수 있는 비디오 소프트웨어가 필요. 일부 도구(Premiere, After Effects, 전문 카라오케 소프트웨어)가 직접 지원.' },
        { q: '타임코드 받아쓰기를 생성하는 데 얼마나 걸립니까?', a: '순수 받아쓰기와 같이 오디오 길이의 약 1-2%. 타임코드는 자동으로 함께 옴, 추가 처리 시간 없음.' },
      ]}
      relatedLinks={[
        { href: '/ko/free-srt-generator', label: 'SRT 생성기', desc: '같은 타임코드, 자막 워크플로우 지향.' },
        { href: '/ko/podcast-transcription', label: '팟캐스트 받아쓰기', desc: '쇼노트와 챕터 마커용 타임코드.' },
        { href: '/ko/interview-transcription', label: '인터뷰 받아쓰기', desc: '인용과 소스 검색용 타임코드.' },
        { href: '/ko/transcribe-audio-to-text', label: '오디오를 텍스트로', desc: '타임코드 없는 일반 텍스트 출력용.' },
      ]}
    />
  )
}
