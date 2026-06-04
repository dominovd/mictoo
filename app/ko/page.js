import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: '오디오와 비디오를 텍스트로 변환하는 AI 받아쓰기, 무료 — Mictoo',
  description: '오디오와 비디오를 무료로 텍스트로 변환. 가입 불필요, OpenAI Whisper 기반. MP3, MP4, WAV, 50개 이상의 언어 지원.',
  alternates: {
    canonical: 'https://mictoo.com/ko',
    languages: {
      'en': 'https://mictoo.com',
      'fr': 'https://mictoo.com/fr',
      'de': 'https://mictoo.com/de',
      'es': 'https://mictoo.com/es',
      'ru': 'https://mictoo.com/ru',
      'it': 'https://mictoo.com/it',
      'pt': 'https://mictoo.com/pt',
      'pl': 'https://mictoo.com/pl',
      'ja': 'https://mictoo.com/ja',
      'ko': 'https://mictoo.com/ko',
      'x-default': 'https://mictoo.com',
    },
  },
  openGraph: {
    title: 'Mictoo — 무료 AI 오디오·비디오 받아쓰기',
    description: '오디오 또는 비디오 파일을 업로드하고 몇 초 만에 받아쓰기를 받으세요.',
    url: 'https://mictoo.com/ko',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630, alt: 'Mictoo — 무료 AI 오디오·비디오 받아쓰기' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mictoo — 무료 AI 받아쓰기',
    description: '오디오 또는 비디오 파일을 업로드하고 몇 초 만에 받아쓰기를 받으세요.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function KoreanPage() {
  return (
    <LandingLayout
      defaultLanguage="ko"
      badge="AI · 무료 · 가입 불필요 · 50개 이상의 언어"
      h1={<>오디오와 비디오를 텍스트로<br /><span className="text-brand-600">AI 기반, 무료 온라인 받아쓰기</span></>}
      subtitle="모든 오디오 또는 비디오 파일을 업로드하면 몇 초 안에 정확한 AI 받아쓰기를 받을 수 있습니다. 계정은 필요하지 않습니다."
      howItWorks={[
        { icon: '📂', title: '파일 업로드', desc: '드래그 앤 드롭하거나 클릭하여 업로드합니다. MP3, MP4, WAV, M4A, OGG, WEBM, FLAC를 지원합니다. 익명 사용자는 최대 25MB, 가입 후에는 60MB까지 이용할 수 있습니다.' },
        { icon: '⚡', title: 'AI가 받아쓰기 수행', desc: 'OpenAI의 Whisper가 50개 이상의 언어에서 높은 정확도로 오디오를 텍스트로 변환합니다. 10분짜리 파일은 보통 30초 안에 완료됩니다.' },
        { icon: '📋', title: '복사 또는 다운로드', desc: '브라우저에서 받아쓰기를 바로 편집할 수 있습니다. 클립보드로 복사하거나 .txt, .srt, .pdf, .docx로 내보낼 수 있습니다.' },
      ]}
      whyUse={{ title: 'Mictoo를 선택하는 이유', bullets: [
        { title: '100% 무료', desc: '구독료나 체험판 제한이 없습니다. Mictoo는 월간 한도나 분 단위 카운터 없이 무료로 사용할 수 있습니다.' },
        { title: '기본적으로 프라이버시 보호', desc: '파일은 Whisper API(메인은 Groq, 백업은 OpenAI)로 직접 전송되어 처리된 후 몇 초 안에 삭제됩니다. 당사는 데이터를 보관하지 않으며 모델 학습에도 사용하지 않습니다.' },
        { title: '50개 이상의 언어 지원', desc: '언어가 자동으로 감지됩니다. 한국어, 영어, 일본어, 중국어, 스페인어, 독일어, 러시아어 등 다양한 언어에서 작동합니다.' },
        { title: '높은 정확도', desc: 'OpenAI의 Whisper로 구동됩니다. ChatGPT와 주요 받아쓰기 서비스에서 사용하는 것과 동일한 음성 인식 모델입니다.' },
        { title: '빠른 결과', desc: '10분짜리 파일은 30초 안에 받아쓰기가 완료됩니다. 대기열도 없고 "30초만 기다려 주세요" 같은 팝업도 없습니다.' },
        { title: '편집 가능한 출력', desc: '브라우저에서 받아쓰기를 검토하고 수정한 다음, 클립보드로 복사하거나 .txt, .srt, .pdf로 다운로드할 수 있습니다.' },
        { title: "AI 요약 기본 제공", desc: "각 전사 후에 GPT 기반 요약을 무료로 자동 생성합니다. 핵심 포인트와 액션 아이템이 한눈에 보입니다. 경쟁사들은 보통 월 15-20 달러의 유료 기능으로 제공하지만, Mictoo 에서는 추가 클릭도 업그레이드 권유도 없습니다." },
        { title: "28개 언어로 번역", desc: "원클릭으로 전사 전체를 스페인어, 프랑스어, 독일어, 일본어 등 28개 언어로 번역합니다. 원본 타임스탬프가 보존되므로 번역된 SRT 가 오디오와 계속 동기화됩니다." },
        { title: "트랜스크립트와 채팅", desc: "만든 트랜스크립트에 대해 무엇이든 물어보고 클릭 가능한 타임스탬프와 함께 답변을 받으세요. 무료, 로그인만 필요합니다." },
      ]}}
      useCases={{ title: 'Mictoo는 누가 사용하나요', items: [
        { title: '학생', desc: '강의, 인터뷰, 연구 녹음을 받아쓰기로 변환합니다. 검색 가능한 텍스트는 오디오를 다시 듣는 것보다 복습이 훨씬 쉽습니다.' },
        { title: '팟캐스터', desc: '에피소드를 블로그 글, 쇼노트, 자막으로 바꿀 수 있습니다. SEO 효과와 접근성을 동시에 얻을 수 있습니다.' },
        { title: '기자', desc: '녹음된 인터뷰를 몇 초 만에 텍스트로 변환합니다. 타임스탬프가 있어 정확한 인용과 사실 확인이 쉽습니다.' },
        { title: '기업 팀', desc: '회의, 고객 통화, 프레젠테이션을 받아쓰기로 남깁니다. 다시 듣는 대신 키워드로 검색할 수 있습니다.' },
        { title: '콘텐츠 크리에이터', desc: 'YouTube, TikTok, Instagram Reels용 자막을 만듭니다. SRT 내보내기는 YouTube Studio에 바로 업로드할 수 있습니다.' },
        { title: '법률·의료 분야', desc: '메모와 문서 작성을 위한 받아쓰기 초안을 빠르게 만들 수 있습니다. 최종본에는 원본 파일을 함께 보관하세요.' },
      ]}}
      proTips={{ title: '더 나은 받아쓰기를 위한 팁', tips: [
        { title: '음성에는 모노 64 kbps면 충분합니다', desc: 'Mictoo는 최대 25MB까지 받습니다. 음성의 경우 모노 64 kbps로 시간당 약 28MB이며, 정확도 손실이 거의 없습니다. 오디오 압축 가이드를 참고하세요.' },
        { title: '파일이 30분을 넘으면 가입하세요', desc: '익명은 최대 30분, 무료 가입 후에는 최대 60분까지 가능합니다. 그 이상이라면 파일을 나눠서 업로드한 뒤 받아쓰기를 이어 붙이세요.' },
        { title: '자동 감지가 틀리면 언어를 지정', desc: 'Whisper는 99% 경우에 언어를 정확히 맞춥니다. 10초 미만의 짧은 파일이나 여러 언어가 섞인 파일에서는 수동 언어 선택기를 사용하면 안전합니다.' },
        { title: '영상 받아쓰기는 오디오만 있어도 됩니다', desc: 'Mictoo는 MP4를 직접 받지만, 오디오만 추출(MP4에서 MP3 변환기 제공)하면 파일 크기가 10분의 1로 줄어듭니다.' },
        { title: 'AI 요약이 결과에 포함됩니다', desc: '받아쓰기가 끝나면 Mictoo가 핵심 요점과 액션 아이템이 담긴 AI 요약을 자동으로 생성합니다. 긴 회의나 팟캐스트에 유용합니다.' },
        { title: '받아쓰기를 28개 언어로 번역', desc: '받아쓰기가 준비되면 리더 화면에서 번역을 클릭하세요. Whisper가 원본 언어를 받아쓰고, 그 후 GPT-4o-mini가 원하는 언어로 번역합니다.' },
      ]}}
      faq={[
        {
          q: '오디오 파일을 무료로 텍스트로 변환하는 방법은 무엇인가요?',
          a: '위에 오디오 파일을 업로드하세요. Mictoo가 OpenAI의 Whisper로 자동으로 받아쓰기를 수행하고 몇 초 안에 텍스트를 보여줍니다. 25MB까지의 파일은 가입 없이 사용할 수 있습니다.',
        },
        {
          q: '한국어 음성 인식이 잘 작동하나요?',
          a: '네. Mictoo의 기반인 OpenAI Whisper 모델은 수천 시간의 한국어 오디오로 학습되었습니다. 지역 억양과 전문 용어에도 높은 정확도를 보입니다.',
        },
        {
          q: '파일이 서버에 저장되나요?',
          a: '아니요. 파일은 받아쓰기 API로 직접 전송되어 처리된 뒤 몇 초 안에 삭제됩니다. 당사 서버에 아무것도 남지 않으며, 모델 학습에도 사용되지 않습니다.',
        },
        {
          q: '최대 파일 크기는 얼마인가요?',
          a: '익명 사용자는 25MB, 무료 가입 후에는 60MB까지 가능합니다. 모노 64 kbps MP3라면 약 1시간 분량의 오디오가 25MB에 들어갑니다.',
        },
        {
          q: '받아쓰기에 시간이 얼마나 걸리나요?',
          a: '10분짜리 파일은 보통 30초 안에 받아쓰기가 끝납니다. 더 긴 파일은 비례해서 시간이 더 걸리지만, 실시간보다 훨씬 빠릅니다.',
        },
        {
          q: '어떤 오디오와 비디오 포맷을 지원하나요?',
          a: 'MP3, MP4, WAV, M4A, OGG, WEBM, FLAC, MPEG를 지원합니다. 비디오 파일의 경우 Mictoo가 자동으로 오디오 트랙을 추출합니다. 지원하지 않는 포맷이라면 내장 변환기로 먼저 MP3 또는 WAV로 변환하세요.',
        },
        {
          q: 'SRT 형식으로 자막을 다운로드할 수 있나요?',
          a: '네. 받아쓰기가 끝난 뒤 .srt 버튼을 클릭하면 타임스탬프가 포함된 자막 파일을 다운로드할 수 있습니다. YouTube Studio, Premiere, Final Cut에 바로 업로드할 수 있습니다.',
        },
        {
          q: 'Mictoo가 콘텐츠 요약도 만들어 주나요?',
          a: '네. 받아쓰기를 할 때마다 Mictoo가 핵심 요점과 액션 아이템이 담긴 AI 요약을 자동으로 생성합니다. 긴 팟캐스트, 회의, 강의에서 매우 유용합니다.',
        },
        {
          q: 'YouTube 영상을 받아쓰기할 수 있나요?',
          a: 'URL로 바로 받아쓰기는 할 수 없습니다. YouTube가 외부 서버를 차단하기 때문입니다. 4K Video Downloader 같은 도구로 영상을 먼저 내려받은 후 MP4 파일을 여기에 업로드하세요. YouTube 다운로드 가이드에서 절차를 자세히 안내합니다.',
        },
        {
          q: 'Mictoo에 모바일 앱이 있나요?',
          a: '아직 네이티브 앱은 없지만, 사이트가 iOS Safari와 Android Chrome에서 매끄럽게 작동합니다. 휴대폰의 카메라 롤이나 음성 메모에서 바로 업로드할 수 있습니다.',
        },
      ]}
      relatedLinks={[
        { href: '/ko/transcribe-mp3-to-text', label: 'MP3를 텍스트로', desc: '팟캐스트, 음성 메모, 녹음된 통화 등 MP3 파일 전용 받아쓰기.' },
        { href: '/ko/transcribe-video-to-text', label: '비디오를 텍스트로', desc: 'MP4, MOV, WEBM 받아쓰기. Zoom 녹화, YouTube 영상, 화면 녹화에 적합합니다.' },
        { href: '/ko/podcast-transcription', label: '팟캐스트 받아쓰기', desc: '동일한 엔진에 긴 팟캐스트와 편집에 특화된 팁을 더했습니다.' },
        { href: '/ko/free-srt-generator', label: '무료 SRT 생성기', desc: 'YouTube Studio, Premiere, DaVinci Resolve에서 바로 쓸 수 있는 타임스탬프 자막.' },
      ]}
    />
  )
}
