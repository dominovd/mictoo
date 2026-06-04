import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/transcribe-video-to-text',
  'fr': 'https://mictoo.com/fr/transcribe-video-to-text',
  'de': 'https://mictoo.com/de/transcribe-video-to-text',
  'es': 'https://mictoo.com/es/transcribe-video-to-text',
  'ru': 'https://mictoo.com/ru/transcribe-video-to-text',
  'it': 'https://mictoo.com/it/transcribe-video-to-text',
  'pt': 'https://mictoo.com/pt/transcribe-video-to-text',
  'pl': 'https://mictoo.com/pl/transcribe-video-to-text',
  'ja': 'https://mictoo.com/ja/transcribe-video-to-text',
  'ko': 'https://mictoo.com/ko/transcribe-video-to-text',
  'x-default': 'https://mictoo.com/transcribe-video-to-text',
}

export const metadata = {
  title: '비디오를 텍스트로 — 무료 온라인 받아쓰기 | Mictoo',
  description:
    '무료 비디오 텍스트 받아쓰기. MP4, MOV, WEBM, AVI를 업로드하여 AI 받아쓰기 또는 SRT 자막 파일을 얻으세요. 스크린 녹화, 튜토리얼, 블로그에 작동.',
  alternates: { canonical: 'https://mictoo.com/ko/transcribe-video-to-text', languages: LANGS },

  openGraph: {
    title: "비디오를 텍스트로 — 무료 온라인 받아쓰기 | Mictoo",
    description: "무료 비디오 텍스트 받아쓰기. MP4, MOV, WEBM, AVI를 업로드하여 AI 받아쓰기 또는 SRT 자막 파일을 얻으세요. 스크린 녹화, 튜토리얼, 블로그에 작동.",
    url: "https://mictoo.com/ko/transcribe-video-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "비디오를 텍스트로 — 무료 온라인 받아쓰기 | Mictoo",
    description: "무료 비디오 텍스트 받아쓰기. MP4, MOV, WEBM, AVI를 업로드하여 AI 받아쓰기 또는 SRT 자막 파일을 얻으세요. 스크린 녹화, 튜토리얼, 블로그에 작동.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function KoVideoToTextPage() {
  return (
    <LandingLayout
      defaultLanguage="ko"
      enableYouTubeUrl
      badge="MP4 · MOV · WEBM · 무료"
      h1={<>비디오를 텍스트로<br /><span className="text-brand-600">무료 AI 비디오 받아쓰기</span></>}
      subtitle="모든 비디오 파일을 위한 무료 AI 받아쓰기. 오디오를 자동 추출합니다. 계정 불필요, 분당 과금 없음, 이메일 불필요."
      howItWorks={[
        { icon: '🎬', title: '비디오 드롭 — 또는 YouTube URL 붙여넣기', desc: 'MP4, MOV, WEBM, AVI 또는 모든 일반 비디오 컨테이너. 스크린 녹화, 블로그, 웨비나 내보내기, Zoom MP4. 드래그하거나 클릭하여 선택. 새로운 기능: 업로드 대신 YouTube 링크를 붙여넣으면 다운로드 없이 몇 초 만에 받아쓰기를 가져옵니다.' },
        { icon: '⚡', title: '오디오를 추출하고 AI가 받아쓰기', desc: '비디오에서 오디오 트랙을 꺼내서 그것만 Whisper large-v3로 보냅니다. 먼저 MP3로 변환할 필요 없음. 30분 비디오는 보통 약 1분에 완료.' },
        { icon: '📋', title: '복사, 다운로드 또는 자막 받기', desc: '메모용 TXT, 또는 비디오 편집기에 자막으로 넣기 위해 SRT로 다운로드. 내보내기 전에 잘못된 단어를 브라우저에서 수정.' },
      ]}
      whyUse={{ title: '비디오에 Mictoo를 사용하는 이유', bullets: [
        { title: 'YouTube URL을 직접 붙여넣기', desc: 'YouTube 비디오의 다운로드 단계를 건너뛰세요 — 드롭 존 위의 입력란에 링크를 넣으면 받아쓰기가 몇 초 만에 돌아옵니다. 자막이 없는 비디오는 오디오 파일을 업로드하면 Whisper가 처리합니다.' },
        { title: '오디오 추출이 자동', desc: 'MP4를 드롭. 내부에서 오디오를 꺼내 음성 모델에 보냅니다. 스스로 ffmpeg을 실행할 필요 없음.' },
        { title: '출력이 실제 비디오 편집기에서 작동', desc: '생성하는 SRT는 Premiere Pro, DaVinci Resolve, Final Cut, CapCut, YouTube Studio에서 작동합니다. 타임코드는 프레임 정확.' },
        { title: '큰 비디오 파일? 비디오가 아닌 오디오를 압축', desc: '200 MB 비디오는 보통 195 MB 비디오와 5 MB 오디오. 전부 압축할 필요 없고, 오디오 트랙만.' },
        { title: '파일은 저장되지 않음', desc: '비디오가 우리에게 오고, 오디오를 추출하고, 받아쓰기 제공업체로 보내고, 둘 다 폐기합니다. 비디오나 오디오를 서버에 보관하지 않습니다.' },
      ]}}
      useCases={{ title: '비디오 받아쓰기의 용도', items: [
        { title: '소셜 미디어 비디오 자막', desc: 'TikTok, Instagram Reels, YouTube Shorts 모두 번인 자막의 혜택을 받습니다. 여기서 SRT를 생성하고, CapCut이나 Premiere로 가져오고, 자막을 맛에 맞게 스타일링하고, 비디오에 번인.' },
        { title: '튜토리얼과 코스 콘텐츠', desc: '스크린캐스트 튜토리얼을 녹화한다면, 텍스트 버전이 SEO, 접근성, 번역에 도움이 됩니다. 비디오 옆에 받아쓰기를 블로그나 코스 플랫폼에 붙여넣기.' },
        { title: '웨비나 후속 조치', desc: '1시간 웨비나를 했습니다. 녹화를 받아쓰기하고, 가볍게 편집하고, 끝까지 있지 못한 참가자에게 후속 이메일로 보내세요.' },
        { title: '편집을 위한 인터뷰 컷', desc: '긴 비디오 인터뷰를 편집할 때, 두 번째 모니터에 받아쓰기로 "페이퍼 편집"을 할 수 있습니다. 유지할 라인을 표시하고, 타임라인에서 찾기, 스크러빙보다 훨씬 빠릅니다.' },
        { title: '번역과 더빙 준비', desc: '원본 언어로 받아쓰기하고, DeepL이나 ChatGPT로 텍스트를 번역하고, 더빙이나 자막 번역의 스크립트로 사용.' },
      ]}}
      proTips={{ title: '비디오 받아쓰기 팁', tips: [
        { title: '비디오가 60 MB 초과면 먼저 오디오 추출', desc: '1080p 비디오는 주로 픽셀 바이트로, 어차피 버립니다. 오디오 트랙만 가져오기: ffmpeg -i video.mp4 -vn -ac 1 -b:a 64k audio.mp3. 500 MB 비디오가 30 MB 미만 오디오로 축소.' },
        { title: '내보내기 전에 에디터에서 배경 음악 음소거', desc: '비디오에 다이얼로그 아래 음악이 있으면(B-roll, 인트로, 전환), 업로드용 버전을 내보내기 전에 에디터에서 음악 트랙을 음소거하거나 낮추세요. Whisper는 음악 아래 묻힌 음성에서 가끔 단어를 만듭니다.' },
        { title: '음악 없는 스크린캐스트가 가장 쉽다', desc: '슬라이드에 대해 말하는 사람의 Loom, Zoom, OBS 녹화는 가장 깨끗한 받아쓰기를 만듭니다. 음악 없음, 한 목소리, 깨끗한 마이크. 거의 사람 수준의 정확도를 얻습니다.' },
        { title: '멀티스피커 비디오는 가능하면 별도 트랙 녹화', desc: '녹화를 제어한다면, 각 스피커를 자신의 트랙에 녹화. 각 트랙을 별도로 받아쓰기. 더 깨끗한 귀속, 중첩에서 오류 적음.' },
        { title: '프레임레이트는 중요하지 않고, 오디오 품질만', desc: 'Whisper는 비디오를 보지 않고, 오디오만. 나쁜 오디오의 4K 비디오는 라발리에 마이크의 480p 비디오보다 받아쓰기가 나쁩니다. 노력을 오디오에 쏟으세요.' },
        { title: 'SRT 타임코드는 일부 에디터에서 작은 오프셋 필요', desc: '대부분의 에디터는 SRT 타임코드를 완벽하게 정렬합니다. 일부 오래된 에디터는 첫 자막이 00:00:00,000이 아닌 00:00:01,000에서 시작하기를 기대합니다. 자막이 1초 어긋난다면, 보통 이것이 원인입니다.' },
      ]}}
      faq={[
        { q: '어떤 비디오 포맷을 지원합니까?', a: 'MP4, MOV, WEBM, AVI, MKV, FLV. 비디오가 VLC에서 재생되면, 거의 확실히 여기서도 작동합니다. 오디오를 내부에서 추출하므로 비디오 코덱은 거의 중요하지 않습니다.' },
        { q: '내 비디오 파일이 업로드하기에 너무 큽니다. 어떻게 해야?', a: '두 가지 옵션. 먼저 오디오만 추출(ffmpeg 명령 하나, 위 팁 참조)하고 그것을 업로드. 또는 에디터에서 더 작은 내보내기 사용(낮은 해상도 또는 비트레이트). 60 MB 초과 파일에는 오디오 추출이 빠릅니다.' },
        { q: '일반 텍스트뿐만 아니라 SRT 자막을 얻을 수 있습니까?', a: '네. 받아쓰기 후 "SRT로 다운로드"를 클릭. SRT는 YouTube Studio, Premiere Pro, DaVinci Resolve, Final Cut, CapCut 및 모든 표준 비디오 에디터에서 작동.' },
        { q: 'SRT 타이밍이 내 비디오 프레임과 정확히 일치합니까?', a: '네. SRT 타임코드는 밀리초로, 모든 비디오 프레임레이트보다 정밀합니다. 24, 25, 29.97, 30, 50, 60 fps에서 올바르게 맞습니다.' },
        { q: '오디오 없는 비디오(화면 텍스트만)를 받아쓸 수 있습니까?', a: '아니요. 발화된 오디오를 받아씁니다. 화면 텍스트 인식에는 OCR이 필요하고, 다른 도구입니다.' },
        { q: '비디오에서 텍스트로의 정확도는?', a: '오디오에 따라 다름. 깨끗한 보이스오버: 거의 사람 수준 정확도(95% 이상). 방 음향이 나쁜 회의 비디오: 약 85-90%. 다이얼로그가 낮은 음악 위주 비디오: 그보다 낮음.' },
        { q: '내 비디오가 YouTube나 제3자 서비스에 업로드됩니까?', a: '아니요. 비디오는 받아쓰기 제공업체로 스트리밍되고 폐기됩니다. YouTube, Google 또는 다른 곳에 아무것도 업로드되지 않습니다. 클라우드 비디오 스토리지 사업이 아닙니다.' },
        { q: '다운로드 전에 받아쓰기를 편집할 수 있습니까?', a: '네. 내보내기 전에 브라우저에서 잘못된 단어를 수정. 고유 명사와 기술 용어에 유용.' },
        { q: '360 비디오나 VR 비디오 포맷을 지원합니까?', a: '비디오 코덱은 우리에게 중요하지 않습니다. 파일이 표준 컨테이너(MP4, MOV)이고 오디오 트랙이 있는 한, 오디오를 추출하고 받아씁니다.' },
        { q: '내 비디오에 여러 오디오 트랙(주석, 원본, 음악)이 있다면?', a: '기본 트랙만 사용. 특정 트랙을 원한다면, 그 트랙을 기본으로 비디오를 재내보내거나, 원하는 트랙을 추출하여 오디오로 업로드.' },
        { q: '비디오 길이 제한이 있습니까?', a: '무료로 파일당 30분, 가입으로 60분. 더 긴 비디오는 청크로 분할. 받아쓰기는 나중에 재결합 가능.' },
        { q: '라이브 비디오 스트림을 받아쓸 수 있습니까?', a: '아니요. 녹화된 파일로만 작동합니다. 라이브 받아쓰기에는 다른 카테고리의 도구가 필요합니다.' },
      ]}
      relatedLinks={[
        { href: '/ko/free-srt-generator', label: 'SRT 생성기', desc: '같은 도구, 자막 워크플로우 지향.' },
        { href: '/ko/youtube-to-text', label: 'YouTube를 텍스트로', desc: '비디오가 이미 YouTube에 있을 때.' },
        { href: '/ko/zoom-transcription', label: 'Zoom 받아쓰기', desc: 'Zoom MP4 녹화 전용.' },
        { href: '/ko/how-to-compress-audio', label: '오디오 압축', desc: '오디오가 크기 제한을 초과하는 비디오용.' },
      ]}
    />
  )
}
