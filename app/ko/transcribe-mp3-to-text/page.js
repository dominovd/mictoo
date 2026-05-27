import LandingLayout from '@/components/LandingLayout'

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
  title: 'MP3를 텍스트로 — 무료 AI MP3 받아쓰기 | Mictoo',
  description:
    '무료 MP3 텍스트 변환기. 모든 MP3를 업로드하여 몇 초 만에 AI 받아쓰기. 팟캐스트, 인터뷰, 강의에 작동. 50개 이상의 언어, 가입 불필요.',
  alternates: { canonical: 'https://mictoo.com/ko/transcribe-mp3-to-text', languages: LANGS },
}

export default function KoMp3ToTextPage() {
  return (
    <LandingLayout
      defaultLanguage="ko"
      badge="MP3 · 무료 · 가입 불필요"
      h1={<>MP3를 텍스트로<br /><span className="text-brand-600">무료 MP3 받아쓰기</span></>}
      subtitle="모든 MP3를 위한 무료 AI 받아쓰기. 파일을 드롭하고 몇 초 만에 텍스트를 받으세요. 계정 불필요, 분당 과금 없음, 이메일 불필요."
      howItWorks={[
        { icon: '📂', title: 'MP3 드롭', desc: '모든 MP3 작동. 팟캐스트 다운로드, 음성 메모 내보내기, 오디오 립, AI 생성 음성 파일. 드래그하거나 클릭하여 선택.' },
        { icon: '⚡', title: 'AI가 받아쓰기', desc: 'Whisper large-v3가 MP3를 읽고 음성을 텍스트로 변환. 일반 30분 팟캐스트는 약 1분 완료. 5분 음성 메모는 약 15초.' },
        { icon: '📋', title: '복사, 다운로드 또는 편집', desc: '브라우저에서 읽고, 클립보드에 복사하거나 TXT 또는 SRT로 다운로드. 내보내기 전에 잘못된 단어를 인라인으로 수정.' },
      ]}
      whyUse={{ title: 'MP3에 Mictoo를 사용하는 이유', bullets: [
        { title: 'Whisper large-v3, 무료 계층용으로 축소된 모델 아님', desc: '"무료 사용자용"으로 더 작은 모델, 유료용으로 더 큰 모델 같은 것을 운영하지 않습니다. 같은 모델, 같은 정확도, 모든 파일.' },
        { title: 'MP3 특이성 잘 처리', desc: 'MP3는 손실 압축이고, 일부 도구는 매우 압축된 파일(32 kbps, 모노, 낮은 샘플레이트)에서 막힙니다. Whisper는 불평 없이 처리. 24 kbps 전화 통화 MP3에서도 읽을 수 있는 받아쓰기를 보았습니다.' },
        { title: '파일 변환 필요 없음', desc: '일부 "MP3 텍스트" 도구는 내부에서 WAV를 원해서 MP3를 미리 재인코딩합니다. 우리는 MP3를 모델에 직접 보냅니다. 더 빠르고, 두 번째 인코딩의 손실 없음.' },
        { title: '분 카운터 없음', desc: '일부 경쟁사는 월 60분 무료, 그 다음 분당 25센트 과금. 우리는 광고로 운영, 분 제한 없음. 1개 파일이든 100개든 받아쓰기.' },
        { title: '기본 프라이버시', desc: 'MP3는 음성 제공업체로 가서 받아쓰기되고 폐기됩니다. 우리 쪽 디스크에 오디오를 결코 쓰지 않습니다.' },
      ]}}
      useCases={{ title: '사람들이 "MP3를 텍스트로"를 사용하는 이유', items: [
        { title: '팟캐스트 에피소드', desc: '팟캐스트 호스트(Anchor, Buzzsprout, Transistor)에서 MP3를 드래그하여 쇼노트, 블로그 재사용 또는 접근성용 텍스트를 받으세요.' },
        { title: '통화 녹음', desc: 'MP3는 대부분의 통화 녹음 앱의 표준 내보내기. 긴 통화를 빠르게 훑어보고 중요한 부분을 찾기 위해 받아쓰기.' },
        { title: '휴대폰에서 내보낸 음성 메모', desc: 'iPhone 음성 메모는 기본 M4A지만, AirDrop으로 MP3로 보냈거나 MP3로 저장하는 Android 앱을 사용했다면 이것이 당신의 도구입니다.' },
        { title: '오디오북 발췌나 강의 립', desc: '공부용으로, 오디오 옆에 텍스트가 있으면 기억력이 두 배가 됩니다. 저작권의 올바른 쪽에 머물러주세요.' },
        { title: 'AI 음성과 TTS 출력', desc: 'ElevenLabs, OpenAI TTS, Murf 또는 다른 합성 도구로 음성을 생성했다면, 자막이나 정렬 작업을 위해 깨끗한 받아쓰기를 원할 수 있습니다.' },
      ]}}
      proTips={{ title: 'MP3 받아쓰기 팁', tips: [
        { title: '가변보다 일정 비트레이트가 Whisper에 더 좋음', desc: 'MP3 VBR(가변 비트레이트)은 일부 오디오 디코더를 엣지 케이스에서 혼란시킬 수 있습니다. 내보내기를 제어한다면, CBR 64 또는 96 kbps 모노를 선택하세요. 모델에 부담이 적습니다.' },
        { title: 'MP3 음성에 64 kbps 모노가 스위트 스팟', desc: '그보다 높으면 음성에는 낭비. 64 kbps 모노로 60분 에피소드는 약 28 MB. 25 MB 무료 계층에 맞고, 60 MB 로그인 계층에 여유롭게.' },
        { title: 'MP3가 거대(60 MB 초과)하면 분할 전에 재인코딩', desc: '분할 후 두 파일을 받아쓰기하는 것보다 한 번 낮은 비트레이트로 재인코딩하는 것이 작업이 적습니다. ffmpeg: ffmpeg -i big.mp3 -ac 1 -b:a 64k small.mp3. 원본 200 MB가 25-40 MB로.' },
        { title: '파일이 한계에 있으면 ID3 메타데이터 제거', desc: 'ID3 태그(커버, 가사 등)는 MP3에 몇 MB 추가할 수 있습니다. 제한을 1-2 MB 초과하면, ffmpeg -i in.mp3 -map_metadata -1 -c:a copy out.mp3로 태그를 제거하면 충분할 수 있습니다.' },
        { title: '오래된 변환기의 잘못된 MP3 인코딩이 무음 갭을 야기', desc: '받아쓰기가 섹션을 건너뛰면, MP3에 버그 있는 인코더의 실제 무음 갭이 있을 수 있습니다. 소스에서 재인코딩하거나 Audacity의 Find Silence로 확인.' },
        { title: '전화 통화 MP3(8 kHz 모노)는 정확도가 약간 낮음으로 예상', desc: '전화 오디오는 고주파를 잃어 정확도 몇 포인트 비용. 읽을 수 있는 상태로 남으니, 이름과 숫자의 클린업을 더 계획하세요.' },
      ]}}
      faq={[
        { q: 'MP3가 받아쓰기에 최적의 포맷인가요?', a: '대부분의 사용자에게, 네. MP3는 작고, 어디서나 지원되며, Whisper의 정확도는 WAV 또는 FLAC와 본질적으로 동일합니다. 손실 없는(WAV, FLAC)은 편집을 위해서도 오디오가 필요한 경우에만 사용하세요.' },
        { q: '어떤 MP3 비트레이트가 가장 잘 작동합니까?', a: '32 kbps 모노에서 320 kbps 스테레오까지 어떤 것이든. 음성에는 64-96 kbps 모노가 실용적 스위트 스팟. 더 높으면 받아쓰기를 개선하지 않고, 더 낮으면 모델에 가독성을 잃기 시작합니다.' },
        { q: '내 MP3가 60 MB를 초과합니다. 이제 어떻게?', a: '두 가지 옵션. 낮은 비트레이트로 재인코딩(64 kbps 모노는 대부분 MP3를 4분의 1 이하로 나눕니다), 또는 파일을 60 MB 미만 청크로 분할. 두 가이드 모두 있습니다.' },
        { q: 'MP3 받아쓰기에 얼마나 걸립니까?', a: '오디오 길이의 약 1-2%. 60분 MP3는 약 60초에 완료. 10분은 10-20초. 네트워크 업로드가 보통 가장 긴 대기.' },
        { q: '내 MP3가 저장되거나 공유됩니까?', a: '아니요. 파일은 우리 음성 제공업체(Groq, OpenAI 백업)로 가서 받아쓰기되고 폐기됩니다. 우리 서버에 기록되지 않으며, 사용하는 제공업체는 API 데이터로 훈련하지 않습니다.' },
        { q: '여러 MP3를 배치로 업로드할 수 있습니까?', a: '아직 한 번 클릭으로는 안 됩니다. 현재는 한 번에 한 파일. 배치 업로드는 유료 Pro 플랜의 로드맵에 있습니다.' },
        { q: '어떤 언어를 지원합니까?', a: '50개 이상의 언어. 자동 감지가 대부분의 케이스를 처리. 5분 미만 파일이나 음악 또는 무음으로 시작하는 파일에는 언어를 수동으로 선택.' },
        { q: 'MP3에서 타임코드를 얻을 수 있습니까?', a: '네. SRT(자막 파일)로 다운로드하여 몇 초마다 타임코드를 받으세요. 또는 단어 수준 세부 정밀도는 타임코드 받아쓰기 페이지를 사용.' },
        { q: 'Mictoo가 챕터 마커가 있는 팟캐스트 MP3에서 작동합니까?', a: '오디오를 추출하고 챕터 메타데이터를 무시합니다. 하나의 문서로 전체 받아쓰기를 받습니다. 챕터 정렬 받아쓰기를 원한다면, 미리 챕터 경계에서 MP3를 분할하세요.' },
        { q: 'MP3 받아쓰기에 스피커 레이블이 있습니까?', a: '자동으로는 없습니다. Whisper는 기본적으로 분리를 하지 않습니다. 레이블이 필요하면, 각 스피커 트랙을 별도로 업로드하고(있다면) 직접 레이블 지정.' },
        { q: 'AI 생성 음성의 MP3를 받아쓸 수 있습니까?', a: '네. TTS 오디오(ElevenLabs, OpenAI, Murf 등)는 배경 소음이나 망설임이 없어서 사람 목소리보다 깨끗하게 받아씁니다.' },
        { q: '내 MP3가 희귀 언어입니다. 작동할까요?', a: 'Whisper가 언어를 지원하면, 네. 모델은 50개 이상의 언어를 좋은 정확도로 다루고, 많은 다른 언어에 기본 지원이 있습니다. 시도해보세요. 결과가 사용할 수 없으면 그 언어는 훈련 데이터 밖일 가능성이 높습니다.' },
      ]}
      relatedLinks={[
        { href: '/ko/transcribe-audio-to-text', label: '오디오를 텍스트로', desc: 'MP3가 아닌 포맷(WAV, M4A, FLAC, OGG)용.' },
        { href: '/ko/podcast-transcription', label: '팟캐스트 받아쓰기', desc: '같은 엔진, 팟캐스트 관련 팁.' },
        { href: '/ko/free-srt-generator', label: 'SRT 생성기', desc: '텍스트뿐만 아니라 비디오 자막이 필요할 때.' },
        { href: '/ko/how-to-compress-audio', label: '오디오 압축 방법', desc: 'MP3가 너무 클 때.' },
      ]}
    />
  )
}
