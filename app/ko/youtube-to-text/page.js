import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/youtube-to-text',
  'fr': 'https://mictoo.com/fr/youtube-to-text',
  'de': 'https://mictoo.com/de/youtube-to-text',
  'es': 'https://mictoo.com/es/youtube-to-text',
  'ru': 'https://mictoo.com/ru/youtube-to-text',
  'it': 'https://mictoo.com/it/youtube-to-text',
  'pt': 'https://mictoo.com/pt/youtube-to-text',
  'pl': 'https://mictoo.com/pl/youtube-to-text',
  'ja': 'https://mictoo.com/ja/youtube-to-text',
  'ko': 'https://mictoo.com/ko/youtube-to-text',
  'x-default': 'https://mictoo.com/youtube-to-text',
}

export const metadata = {
  title: 'YouTube를 텍스트로 — YouTube 비디오 무료 받아쓰기 | Mictoo',
  description:
    '무료 YouTube 텍스트 받아쓰기. 비디오를 다운로드하고 파일을 드롭하면 정확한 AI 받아쓰기. YouTube 자동 자막보다 우수, 타임코드와 SRT 내보내기 포함.',
  alternates: { canonical: 'https://mictoo.com/ko/youtube-to-text', languages: LANGS },
}

export default function KoYouTubeToTextPage() {
  return (
    <LandingLayout
      defaultLanguage="ko"
      badge="YouTube · SRT · 무료"
      h1={<>YouTube를 텍스트로<br /><span className="text-brand-600">무료 YouTube 받아쓰기 도구</span></>}
      subtitle="모든 YouTube 비디오의 깨끗하고 정확한 받아쓰기를 얻으세요. 파일 다운로드, 여기에 드롭, AI가 나머지를 처리. YouTube 자동 자막보다 우수, 적절한 구두점과 타임코드 포함."
      howItWorks={[
        { icon: '⬇️', title: '비디오나 오디오 다운로드', desc: '가장 쉬운 방법: 4K Video Downloader나 ClipGrab 같은 무료 데스크톱 앱(Mac, Windows, Linux). 앱을 열고 YouTube 링크를 붙여넣고 "오디오만"(M4A 또는 MP3)을 선택, 다운로드 클릭. 몇 초 만에 완료. 법적 측면은 아래 FAQ 참조.' },
        { icon: '📂', title: '파일 드롭', desc: '다운로드한 파일을 Mictoo에 드래그. MP4, M4A, MP3, WAV, FLAC, OGG, WEBM 수락. 오디오는 Whisper large-v3로 갑니다.' },
        { icon: '📋', title: '받아쓰기 받기', desc: '브라우저에서 읽고, 클립보드에 복사, 또는 TXT나 SRT로 다운로드. SRT는 YouTube 자막으로 작동하며 자동 자막보다 훨씬 좋습니다.' },
      ]}
      whyUse={{ title: 'YouTube 자동 자막 대신 Mictoo를 사용하는 이유', bullets: [
        { title: '자동 자막은 구두점과 고유명사를 놓침', desc: 'YouTube 자막은 쉼표 없고, 마침표 없으며, 이름을 망가뜨리는 경향이 있는 의식의 흐름. Whisper large-v3는 구두점, 대문자화, 인식 가능한 고유명사와 함께 완전한 문장을 제공합니다.' },
        { title: '자동 자막은 항상 사용 가능하지 않음', desc: '작은 채널, 비공개 비디오, 종료된 라이브 스트림, 또는 덜 일반적인 언어의 비디오에는 자막이 없거나 기계 자막이 나쁜 경우가 많습니다. Whisper는 모두에서 작동.' },
        { title: '음악과 억양에서 더 나은 정확도', desc: 'YouTube의 자동 자막은 음악 막간과 비원어민 영어에 고전합니다. Whisper는 둘 다 더 잘 처리하며, 환각 단어가 적고 억양 커버리지가 강합니다.' },
        { title: '깨끗한 SRT를 얻습니다, YouTube XML 포맷이 아님', desc: 'YouTube의 자막 트랙은 이상한 타임스탬프와 함께 XML 또는 VTT로 다운로드. 우리의 SRT는 표준이고, 모든 비디오 에디터와 드롭인 호환.' },
        { title: '소유하지 않은 비디오에서 작동', desc: '개인 학습이나 연구 목적으로 YouTube의 강의, 인터뷰, 팟캐스트를 받아쓸 수 있습니다, 채널 소유자 액세스 필요 없음(저작권과 YouTube 약관 적용, FAQ 참조).' },
      ]}}
      useCases={{ title: '사람들이 YouTube 받아쓰기를 사용하는 용도', items: [
        { title: '긴 강의와 튜토리얼 공부', desc: '90분 MIT 강의는 텍스트 버전으로 공부하기가 더 쉬움. 필요한 부분을 훑어보고, 라이브 설명을 위해 비디오의 타임코드로 점프.' },
        { title: '학술 또는 저널리즘 작업에서 인용', desc: '비디오에서 누군가 말한 것을 참조할 때, 타임코드가 있는 받아쓰기로 정확한 순간을 인용할 수 있습니다. 인용을 찾기 위해 다시 보는 것보다 훨씬 빠릅니다.' },
        { title: '자신의 YouTube 콘텐츠 재활용', desc: 'YouTube 비디오를 블로그 게시물, 뉴스레터, X 스레드, LinkedIn 기사로 변환. 받아쓰기가 첫 번째 초안.' },
        { title: '개인 사용을 위한 비디오 번역', desc: '원본 언어로 받아쓰기를 얻고, DeepL이나 ChatGPT에 던지고, 번역을 받으세요. 외국어 튜토리얼이나 인터뷰에 유용.' },
        { title: '자신의 채널에서 나쁜 자동 자막 교체', desc: '여기서 깨끗한 SRT를 생성하고, YouTube Studio에 공식 자막 트랙으로 업로드. 더 나은 시청자 경험, 더 나은 SEO.' },
      ]}}
      proTips={{ title: 'YouTube 받아쓰기 팁', tips: [
        { title: '다운로더에서 항상 "오디오만" 선택', desc: '받아쓰기에 비디오가 필요 없습니다. 오디오만 있는 M4A는 비디오의 10분의 1 크기이고 몇 초만에 다운로드. 4K Video Downloader와 ClipGrab 모두 포맷 드롭다운에 "오디오만" 옵션이 있습니다. M4A는 30분 비디오에서도 보통 25 MB 미만입니다.' },
        { title: '30분 초과 비디오는 보통 분할 없이 오디오만으로 맞음', desc: '오디오만이 대부분의 비디오에서 크기 제한을 우회. 90분 강의가 여전히 60 MB 초과면 30분 청크 3개로 분할. 분할 가이드에 Audacity 단계별 지침이 있으며, 명령줄 불필요.' },
        { title: '인트로 음악과 아웃트로 건너뛰기', desc: 'YouTube 튜토리얼은 종종 시작과 끝에 15초 테마 음악이 있습니다. 업로드 전에 Audacity에서 잘라내기. Whisper는 음악만 있는 섹션에서 가끔 단어를 만듭니다.' },
        { title: '화면에 코드가 있는 튜토리얼 채널이라도 여전히 오디오 버전 필요', desc: '화면 텍스트 인식은 다른 도구 카테고리(OCR)입니다. 튜토리얼이 코드를 보여주는 것에 의존한다면, 시각적 부분을 위해 별도로 스크린샷을 찍어야 합니다. 받아쓰기는 발표자가 큰 소리로 말한 모든 것을 캡처.' },
        { title: 'YouTube의 라이브 자막을 정상성 체크로 사용', desc: '비디오에 자동 자막이 있다면, 차이를 찾기 위해 Whisper 받아쓰기와 비교할 수 있습니다. 보통 Whisper가 이기지만, 드문 속어나 고유명사에서는 YouTube가 Whisper가 놓친 것을 잡을 수도 있습니다.' },
        { title: '비디오 제목을 파일명으로 유지하는 다운로더 사용', desc: '4K Video Downloader와 ClipGrab 모두 YouTube 제목을 기본 파일명으로 설정할 수 있습니다. "video.mp4", "video (1).mp4", "video (2).mp4"로 가득 찬 폴더가 되는 대신 받아쓰기를 정리.' },
      ]}}
      faq={[
        { q: 'YouTube 링크를 Mictoo에 직접 붙여넣을 수 있나요?', a: '현재는 안 됩니다. YouTube는 제3자 서버가 비디오를 가져오는 것을 적극적으로 차단합니다. 먼저 비디오나 오디오를 다운로드(4K Video Downloader나 ClipGrab 같은 무료 데스크톱 앱이 두 번 클릭으로)하고 Mictoo에 파일을 업로드해야 합니다. URL 지원은 YouTube가 정기적으로 망가뜨리는 서버 측 다운로드 인프라를 운영하는 것을 의미합니다.' },
        { q: 'YouTube 비디오를 받아쓰는 것이 합법적입니까?', a: '대부분의 관할권에서 개인 학습, 연구, 저널리즘, 접근성, 공정 사용 목적에는 일반적으로 네. 받아쓰기의 상업적 게시에는 보통 비디오 제작자의 허가가 필요합니다. YouTube 이용약관은 YouTube가 명시적으로 허용(다운로드 버튼)하거나 제작자의 허가가 있는 경우를 제외하고 콘텐츠 다운로드를 금지합니다. 귀하의 경우에 약관을 확인하세요. 이것은 법적 조언이 아닙니다.' },
        { q: '내 받아쓰기가 YouTube의 자동 자막과 일치합니까?', a: '아니요, 우리의 것이 더 좋습니다. 자동 자막은 구두점이 없고 정확도가 낮습니다. Whisper large-v3는 구두점, 대문자화, 음악, 억양, 고유명사에서 더 나은 정확도와 함께 완전한 문장을 생성합니다.' },
        { q: '최고의 YouTube 다운로더는?', a: '대부분의 경우: 4K Video Downloader 또는 ClipGrab. 둘 다 무료이고, 둘 다 Mac, Windows, Linux에 깨끗한 데스크톱 앱이 있고, 둘 다 한 번 클릭으로 오디오만 가져올 수 있습니다. Google에 표시되는 "youtube downloader online" 사이트는 피하세요, 대부분 멀웨어 광고에 묻혀 있고 몇 달마다 깨집니다. 명령줄에 익숙하다면, yt-dlp가 가장 신뢰할 수 있는 옵션(많은 GUI 앱의 내부 엔진).' },
        { q: '오디오만 다운로드하는 방법은?', a: '4K Video Downloader에서: YouTube 링크를 붙여넣고, 포맷 대화 상자가 열리면 "Extract Audio"를 선택하고 M4A 또는 MP3 가져오기. ClipGrab에서: 링크 붙여넣기, "Format" 드롭다운에서 MP3 또는 "Original audio" 선택. 둘 다 여기에 업로드할 준비가 된 단일 오디오 파일을 생성합니다.' },
        { q: '내 YouTube 비디오가 내가 할 수 없는 언어라면?', a: 'Whisper는 언어를 자동 감지하고 원본 언어로 받아씁니다. 그런 다음 번역을 위해 결과를 DeepL이나 ChatGPT에 붙여넣을 수 있습니다. 두 단계지만 결과는 보통 YouTube의 자동 번역 자막보다 좋습니다.' },
        { q: 'YouTube 비디오를 받아쓰는 데 얼마나 걸립니까?', a: '받아쓰기 단계 자체는 오디오 길이의 약 1-2%. 30분 강의는 약 1분에 완료. 다운로드 시간은 연결과 yt-dlp 속도에 따라 다릅니다.' },
        { q: '멀티스피커 YouTube 비디오의 스피커 레이블을 얻을 수 있습니까?', a: '아니요, Whisper는 기본적으로 스피커 분리를 수행하지 않습니다. 여러 스피커가 있는 인터뷰와 패널의 경우 대화 흐름에 따라 수동으로 스피커 레이블을 추가해야 합니다.' },
        { q: 'YouTube에 준비된 자막을 생성할 수 있습니까?', a: '네. 받아쓰기 후 SRT로 다운로드한 다음 YouTube Studio의 자막에서 SRT를 업로드. 자동 자막을 깨끗한 버전으로 교체.' },
        { q: 'Mictoo가 내가 업로드한 YouTube 비디오를 저장합니까?', a: '아니요. 파일은 받아쓰기 제공업체로 스트리밍되고, 처리되고, 폐기됩니다. 비디오나 오디오를 보관하지 않습니다.' },
        { q: '내 YouTube 비디오에 챕터가 있습니다. 받아쓰기에 반영됩니까?', a: 'YouTube의 챕터 메타데이터를 추출하지 않습니다. 받아쓰기는 하나의 연속 문서로 옵니다. 챕터별 받아쓰기를 원한다면, 챕터 타임코드에서 업로드 전에 오디오 파일을 분할하세요.' },
        { q: 'YouTube 라이브스트림을 종료 후 받아쓸 수 있습니까?', a: '네, 라이브스트림이 일반 비디오로 보관되어 있는 한. 다른 비디오처럼 다운로드(yt-dlp)하고 업로드. 스트림 자체 동안의 라이브 받아쓰기는 지원되지 않습니다.' },
      ]}
      relatedLinks={[
        { href: '/ko/transcribe-video-to-text', label: '비디오를 텍스트로', desc: 'YouTube가 아닌 비디오 파일(Zoom, 스크린캐스트, 블로그)용.' },
        { href: '/ko/free-srt-generator', label: 'SRT 생성기', desc: '깨끗한 자막을 YouTube Studio에 다시 업로드하기 위해.' },
        { href: '/ko/podcast-transcription', label: '팟캐스트 받아쓰기', desc: 'YouTube에 업로드된 팟캐스트 같은 오디오용.' },
        { href: '/ko/how-to-split-audio', label: '오디오 분할', desc: '60분 제한을 초과하는 긴 비디오용.' },
      ]}
    />
  )
}
