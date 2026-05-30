import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/transcribe-audio-to-text',
  'fr': 'https://mictoo.com/fr/transcribe-audio-to-text',
  'de': 'https://mictoo.com/de/transcribe-audio-to-text',
  'es': 'https://mictoo.com/es/transcribe-audio-to-text',
  'ru': 'https://mictoo.com/ru/transcribe-audio-to-text',
  'it': 'https://mictoo.com/it/transcribe-audio-to-text',
  'pt': 'https://mictoo.com/pt/transcribe-audio-to-text',
  'pl': 'https://mictoo.com/pl/transcribe-audio-to-text',
  'ja': 'https://mictoo.com/ja/transcribe-audio-to-text',
  'ko': 'https://mictoo.com/ko/transcribe-audio-to-text',
  'x-default': 'https://mictoo.com/transcribe-audio-to-text',
}

export const metadata = {
  title: '오디오를 텍스트로 — 무료 온라인 받아쓰기 | Mictoo',
  description:
    '무료 오디오 텍스트 변환기. 모든 파일(MP3, WAV, M4A, FLAC, OGG, AAC)을 업로드하여 몇 초 만에 깨끗한 받아쓰기를 얻으세요. 가입 불필요, 50개 이상의 언어 지원.',
  alternates: { canonical: 'https://mictoo.com/ko/transcribe-audio-to-text', languages: LANGS },

  openGraph: {
    title: "오디오를 텍스트로 — 무료 온라인 받아쓰기 | Mictoo",
    description: "무료 오디오 텍스트 변환기. 모든 파일(MP3, WAV, M4A, FLAC, OGG, AAC)을 업로드하여 몇 초 만에 깨끗한 받아쓰기를 얻으세요. 가입 불필요, 50개 이상의 언어 지원.",
    url: "https://mictoo.com/ko/transcribe-audio-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "오디오를 텍스트로 — 무료 온라인 받아쓰기 | Mictoo",
    description: "무료 오디오 텍스트 변환기. 모든 파일(MP3, WAV, M4A, FLAC, OGG, AAC)을 업로드하여 몇 초 만에 깨끗한 받아쓰기를 얻으세요. 가입 불필요, 50개 이상의 언어 지원.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function KoAudioToTextPage() {
  return (
    <LandingLayout
      defaultLanguage="ko"
      badge="MP3 · WAV · M4A · FLAC · 무료"
      h1={<>오디오를 텍스트로<br /><span className="text-brand-600">무료 AI 받아쓰기</span></>}
      subtitle="모든 오디오 파일을 위한 무료 AI 받아쓰기. MP3, WAV, M4A, FLAC, OGG, AAC. 계정 불필요, 분당 과금 없음."
      howItWorks={[
        { icon: '📂', title: '오디오 드롭', desc: '모든 일반 포맷이 작동합니다. 휴대폰의 MP3, 필드 레코더의 WAV, iPhone 음성 메모의 M4A, 팟캐스트 내보내기의 FLAC. 파일을 드래그하거나 클릭하여 선택.' },
        { icon: '⚡', title: 'AI가 받아쓰기', desc: 'OpenAI Whisper large-v3을 사용. 10분 파일은 약 20초, 30분 파일은 1분 미만 걸립니다.' },
        { icon: '📋', title: '복사, 다운로드 또는 편집', desc: '브라우저에서 받아쓰기를 읽고, 메모용 TXT 또는 타임스탬프가 필요하면 SRT로 다운로드. 내보내기 전에 잘못된 단어를 인라인으로 수정.' },
      ]}
      whyUse={{ title: '오디오를 텍스트로 변환에 Mictoo를 사용하는 이유', bullets: [
        { title: '하나의 모델, 그것도 최고의 것', desc: '모두에게 Whisper large-v3을 사용. "무료 버전은 약한 모델에서 실행"같은 속임수 없음. 비싼 엔터프라이즈 받아쓰기를 구동하는 같은 모델이 당신의 파일을 받아씁니다.' },
        { title: '광범위한 포맷 지원', desc: 'MP3, WAV, M4A, FLAC, OGG, WEBM, AAC, 그리고 오디오가 포함된 비디오 포맷(MP4, MOV). "MP3만 허용, 먼저 변환하세요"같은 마찰 없음.' },
        { title: '50개 이상의 언어, 이중언어 파일도', desc: '자동 감지가 짧은 오디오 샘플에서 언어를 선택. 녹음 중간에 언어가 바뀌면(인터뷰에서 흔함), Whisper가 전환을 따라갑니다.' },
        { title: '파일은 저장되지 않음', desc: '오디오는 받아쓰기 제공업체로 스트리밍되고, 처리되고, 폐기됩니다. 파일을 데이터베이스나 스토리지에 기록하지 않습니다. 제공업체(Groq, OpenAI)는 API 데이터로 훈련하지 않습니다.' },
        { title: '별표 없는 무료', desc: '계정 없이 파일당 최대 30분. 무료 가입으로 최대 60분. 그 외에는 제한이 없습니다.' },
      ]}}
      useCases={{ title: '오디오를 텍스트로 변환이 정말 시간을 절약하는 경우', items: [
        { title: '인터뷰 메모', desc: '취재원과 1시간 대화했습니다. 인용을 찾기 위해 녹음을 되감는 대신 받아쓰기에서 Ctrl+F. 5분이 아닌 5초.' },
        { title: '음성 메모 정리', desc: '이동 중에 반쯤 형성된 아이디어를 휴대폰에 받아 적었습니다. 이제 텍스트로 원합니다. M4A를 드롭, 문장을 받고, Notion에 붙여넣기.' },
        { title: '강의와 웨비나 복습', desc: '2시간 강의를 2배속으로 보는 것은 힘듭니다. 텍스트 받아쓰기는 섹션별로 훑어보고 중요한 부분만 파고들 수 있게 합니다.' },
        { title: '번역 준비', desc: 'Whisper는 원본 언어로 받아씁니다. 거기서 DeepL이나 ChatGPT에 복사하여 깨끗하게 번역. 원시 오디오에서의 자동 번역보다 좋습니다.' },
        { title: '백 카탈로그 오디오 검색', desc: '수년간의 통화, 에피소드, 회의 녹음? 배치 받아쓰기로 갑자기 검색 가능한 아카이브가 생깁니다. 구독이 있는 모든 "AI 회의 도구"보다 저렴합니다.' },
      ]}}
      proTips={{ title: '깨끗한 오디오 받아쓰기를 위한 팁', tips: [
        { title: '모노로 충분. 스테레오는 낭비된 대역폭', desc: '음성에 2채널이 필요 없습니다. 파일이 거대하면 모노로 재인코딩하면 받아쓰기 품질 손실 없이 크기가 절반이 됩니다. ffmpeg 한 줄: ffmpeg -i input.wav -ac 1 output.wav.' },
        { title: '음성에는 64 kbps MP3로 완전히 충분', desc: 'DAW나 에디터에서 내보낼 때, 64 kbps 모노 MP3가 Whisper에 필요한 모든 것을 제공합니다. 더 높은 비트레이트는 정확도를 개선하지 않고, 파일을 더 크게 만들 뿐입니다.' },
        { title: '시작과 끝의 긴 침묵을 잘라내세요', desc: '첫 단어 전에 90초의 죽은 공기가 있으면, 그 90초가 길이 제한을 잡아먹습니다. 업로드 전에 Audacity에서 잘라내세요(Effect, Truncate Silence).' },
        { title: '짧은 파일에는 언어를 수동으로 설정', desc: '자동 감지는 첫 오디오 청크를 샘플링하여 언어를 식별합니다. 5분 미만 파일에서는 이 샘플이 작고 감지가 덜 신뢰할 수 있습니다. 드롭다운에서 언어를 명시적으로 선택하세요.' },
        { title: '배경 음악이 Whisper를 환각시킵니다', desc: '오디오에 음성 아래 음악이 있으면(스폰서 읽기, 인트로 베드, B-roll), 모델은 음악만 있는 부분에서 가끔 만들어진 단어를 삽입합니다. 음악이 없는 버전이 있으면 그것을 사용하세요.' },
        { title: '매우 시끄러운 파일에는 먼저 노이즈 제거', desc: '무료 옵션: Audacity 노이즈 감소(내장) 또는 Adobe Podcast Enhance(무료 웹, 놀랍게도 좋음). 파일을 한 번 통과시킨 다음 깨끗한 버전을 업로드하세요.' },
      ]}}
      faq={[
        { q: '최고의 무료 오디오 텍스트 변환기는?', a: '우리는 편향되어 있지만, 정직한 답변: Whisper large-v3을 사용하는 모든 도구가 무료 계층의 최고입니다. Mictoo는 가입 장벽 없이 정확히 그 모델을 실행합니다. Otter와 Trint는 좋지만 무료 할당량을 초과하면 분당 과금합니다. 가끔의 받아쓰기에는 무료가 올바른 계층입니다.' },
        { q: '오디오에서 텍스트로의 정확도는 얼마나?', a: '주요 언어의 깨끗한 음성에는: 5-10% 단어 오류율. 시끄러운 오디오, 강한 억양 또는 전문 용어에서는 정확도가 떨어집니다. 대부분의 사용(메모, 검색, 초안)에 충분합니다. 법적 또는 의료 기록에는 사람을 고용하세요.' },
        { q: '어떤 오디오 포맷을 지원합니까?', a: 'MP3, WAV, M4A, FLAC, OGG, WEBM, AAC. MP4와 MOV같은 비디오 파일도(오디오를 자동 추출). AIFF와 ALAC는 직접 지원되지 않습니다. 먼저 WAV나 FLAC로 변환하세요.' },
        { q: '받아쓰기는 얼마나 걸립니까?', a: '5분 파일은 보통 10-15초 만에 완료. 30분 파일은 45-60초. 파일 전체를 하나의 요청으로 처리하므로 사용자 측에서 분할할 필요가 없습니다.' },
        { q: '전화 통화 녹음을 받아쓰기할 수 있습니까?', a: '네. 전화 통화는 보통 8 kHz 모노에 일부 압축이 있습니다. Whisper가 처리할 수 있고, 정확도는 스튜디오 오디오보다 약간 낮습니다. 관할권에서 녹음이 합법인지 확인하세요.' },
        { q: '언어를 선택해야 합니까?', a: '아니요, 자동 감지가 기본입니다. 5분 미만의 오디오 또는 비음성 시작이 있는 파일에는, 더 신뢰할 수 있는 결과를 위해 수동으로 언어를 선택하세요.' },
        { q: '분당 과금이 있습니까?', a: '과금 없음. 받아쓰기는 분 카운터 없이 무료입니다. 디스플레이 광고와 파워 유저를 위한 계획된 Pro 플랜으로 자금 조달합니다.' },
        { q: '최대 파일 크기는?', a: '계정 없이 25 MB, 무료 가입으로 60 MB. 파일이 더 크면 압축 가이드를 참조하세요.' },
        { q: '내 오디오가 서버에 저장됩니까?', a: '아니요. 파일을 받아쓰기 제공업체로 직접 스트리밍하고, 텍스트를 받고, 오디오를 폐기합니다. 데이터베이스나 스토리지에 아무것도 기록되지 않습니다.' },
        { q: '다운로드 전에 받아쓰기를 편집할 수 있습니까?', a: '네. 받아쓰기 후, 결과 뷰어에서 잘못된 단어를 인라인으로 수정하고 편집된 버전을 다운로드할 수 있습니다.' },
        { q: '출력 포맷은 무엇입니까?', a: '일반 텍스트(TXT), 타임스탬프가 있는 자막 파일(SRT), 클립보드 복사. SRT는 YouTube Studio, Premiere Pro, DaVinci Resolve 및 모든 표준 비디오 에디터에서 작동합니다.' },
        { q: 'Mictoo가 모바일에서 작동합니까?', a: '네. 사이트는 모바일 친화적입니다. iOS 파일 앱이나 Android 다운로드 폴더에서 직접 휴대폰에서 업로드할 수 있습니다.' },
      ]}
      relatedLinks={[
        { href: '/ko/transcribe-mp3-to-text', label: 'MP3를 텍스트로', desc: 'MP3 관련 팁과 특수성.' },
        { href: '/ko/transcribe-video-to-text', label: '비디오를 텍스트로', desc: '같은 엔진, MP4와 MOV 파일에 최적화.' },
        { href: '/ko/timestamped-transcription', label: '타임코드 받아쓰기', desc: '문장 또는 단어별 타임스탬프가 필요할 때.' },
        { href: '/ko/how-to-compress-audio', label: '오디오 압축', desc: '파일이 업로드하기에 너무 클 때.' },
      ]}
    />
  )
}
