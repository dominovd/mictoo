import LandingLayout from '@/components/LandingLayout'
import ConverterZone from '@/components/ConverterZone'

const LANGS = {
  'en': 'https://mictoo.com/wav-to-mp3',
  'fr': 'https://mictoo.com/fr/wav-to-mp3',
  'de': 'https://mictoo.com/de/wav-to-mp3',
  'es': 'https://mictoo.com/es/wav-to-mp3',
  'ru': 'https://mictoo.com/ru/wav-to-mp3',
  'it': 'https://mictoo.com/it/wav-to-mp3',
  'pt': 'https://mictoo.com/pt/wav-to-mp3',
  'pl': 'https://mictoo.com/pl/wav-to-mp3',
  'ja': 'https://mictoo.com/ja/wav-to-mp3',
  'ko': 'https://mictoo.com/ko/wav-to-mp3',
  'x-default': 'https://mictoo.com/wav-to-mp3',
}

export const metadata = {
  title: 'WAV를 MP3로 — 무료 온라인 변환기 | Mictoo',
  description:
    'WAV를 MP3로 무료 온라인 변환합니다. 무손실 WAV 파일을 휴대하기 좋은 128 kbps MP3로 몇 초 만에 줄입니다. 가입 없이, 워터마크 없음. 최대 25 MB.',
  alternates: { canonical: 'https://mictoo.com/ko/wav-to-mp3', languages: LANGS },
}

export default function KoWavToMp3Page() {
  return (
    <LandingLayout
      defaultLanguage="ko"
      badge="WAV → MP3 · 무료 · 가입 없이"
      h1={<>WAV를 MP3로<br /><span className="text-brand-600">무료 온라인 변환기</span></>}
      subtitle="WAV 파일을 드롭하세요. 10배 더 작고 음성이나 일상적 청취에는 거의 동일한 음질의 컴팩트한 MP3를 얻습니다. 워터마크 없음, 이메일 불필요."
      tool={<ConverterZone from="wav" to="mp3" />}
      howItWorks={[
        { icon: '📂', title: 'WAV를 드롭', desc: '아무 WAV (16비트, 24비트, 모노, 스테레오)를 박스에 드래그하세요. 25 MB까지는 익명으로, 60 MB는 가입 후 처리합니다.' },
        { icon: '⚡', title: 'MP3로 재인코딩', desc: '서버 측 ffmpeg로, 128 kbps 고정 비트레이트, 44.1 kHz, 스테레오로 재인코딩합니다. 25 MB WAV (24비트/96 kHz로 약 2분, 또는 16비트/44.1로 약 5분)는 몇 초 내에 완료됩니다.' },
        { icon: '⬇️', title: 'MP3를 다운로드', desc: '결과는 원래 이름에 확장자가 .mp3로 바뀐 형태입니다. 업로드와 출력 모두 1시간 이내에 서버에서 삭제됩니다.' },
      ]}
      whyUse={{ title: 'WAV를 MP3로 변환하는 이유', bullets: [
        { title: 'WAV 파일은 거대합니다', desc: '5분짜리 16비트/44.1 kHz WAV는 약 50 MB입니다. 같은 오디오를 128 kbps MP3로 하면 5 MB입니다. 이메일 전송, 팟캐스트 호스트 업로드, 폰에 넣기에는 MP3가 적합합니다.' },
        { title: 'MP3는 어디서나 재생됩니다', desc: 'WAV는 데스크톱에서는 괜찮지만 오래된 카오디오, 일부 블루투스 스피커, 많은 웹 플레이어에서는 불안정합니다. MP3는 그냥 작동합니다.' },
        { title: '128 kbps의 품질 손실은 대부분의 청취 환경에서 들리지 않음', desc: '스튜디오 모니터로 음악을 마스터링하는 게 아니라면 128 kbps MP3와 원본 WAV의 차이를 듣지 못합니다. 음성, 팟캐스트, 일상 청취에는 명백히 합리적인 절충입니다.' },
        { title: '워터마크 없음, 팝업 없음', desc: 'MP3는 오디오를 재인코딩한 것뿐입니다. "변환됨..." 인트로를 추가하지 않고, 30초 대기하라는 가짜 팝업도 띄우지 않습니다.' },
        { title: '기본으로 프라이버시 보장', desc: '현장 녹음의 WAV는 민감할 수 있습니다. 파일은 Vercel Blob 저장소에 도착해서 변환되고 삭제됩니다. Mictoo는 보지 않고, 보관하지 않습니다.' },
      ]}}
      useCases={{ title: 'WAV를 MP3로 변환하고 싶을 때', items: [
        { title: '현장 녹음을 이메일로 보낼 수 있는 클립으로', desc: 'Zoom H1n 같은 녹음기는 보통 기본으로 WAV에 저장합니다. 프로듀서, 기자, 전사 담당자와 공유하기 전에 MP3로 변환하세요.' },
        { title: '스튜디오 내보내기를 폰 친화적 청취로', desc: 'Audacity, Reaper, Logic, 모두 기본이 WAV입니다. 러프 믹스를 MP3로 내보내 공동 작업자와 공유하거나 이동 중에 들어보세요.' },
        { title: '팟캐스트 준비', desc: '대부분의 팟캐스트 호스트 (Anchor, Buzzsprout, Transistor)는 WAV를 받지만, 업로드가 더 빠르고 대역폭 요금이 낮은 MP3를 권장합니다.' },
        { title: '음성 메모 정리', desc: '폰이나 녹음기가 WAV로 저장했다면, Notion이나 Notes 아카이브에 넣기 전에 MP3로 변환하세요. 저렴하게 저장 공간을 절약합니다.' },
        { title: '오디오 정리 파이프라인', desc: '편집을 위해 WAV로 녹음하고, 편집을 마치고, 배포용으로 더 작은 MP3로 마무리하려는 경우. 이것이 마지막 단계입니다.' },
      ]}}
      proTips={{ title: '깔끔한 WAV → MP3 변환을 위한 팁', tips: [
        { title: '24비트 WAV는 16비트와 같은 결과', desc: 'MP3는 어차피 지각 코딩이 필요한 이상의 비트 깊이를 유지하지 않습니다. 24비트 WAV를 128 kbps MP3로 재인코딩해도 16비트 대비 가청 우위가 없습니다.' },
        { title: 'WAV가 25 MB보다 크면 먼저 자르세요', desc: 'Audacity (무료)나 QuickTime에서 열고, 실제로 필요한 부분만 잘라 더 작은 WAV로 내보낸 후 변환하세요. 또는 60 MB 한도를 쓰려면 로그인하세요.' },
        { title: '모노 입력, 모노 출력', desc: '원본 WAV가 모노 (음성 녹음에 일반적)라면 결과 MP3도 모노가 됩니다. 모노 MP3에 128 kbps는 과합니다. 다만 단순함을 위해 Mictoo의 변환기는 128로 표준화합니다.' },
        { title: '마스터링이나 보관에는 MP3를 쓰지 마세요', desc: '나중에 재마스터링할 마스터 사본을 유지한다면 WAV (또는 FLAC)로 두세요. MP3는 배포 포맷이지 보관 포맷이 아닙니다.' },
        { title: '320 kbps나 VBR이 필요하면 Audacity에서 MP3 열기', desc: 'Mictoo는 고정 128 kbps로 내보냅니다. 더 높은 비트레이트나 VBR을 원하면 MP3를 Audacity로 가져가 다시 내보내세요. 추가 인코딩 한 번의 품질 손실은 작습니다.' },
        { title: '헤더가 특이한 WAV는 조용히 실패합니다', desc: '일부 BWF (방송용 WAV) 파일은 ffmpeg가 읽지 못하는 헤더를 가집니다. Audacity에서 열어 표준 WAV로 저장한 후 재시도하세요.' },
      ]}}
      faq={[
        { q: 'WAV → MP3 변환이 정말 무료인가요', a: '예. 25 MB까지 계정 불필요, 시간 제한 없음, 출력 워터마크 없음. 마케팅 페이지의 디스플레이 광고가 서버 비용을 충당합니다.' },
        { q: '최대 파일 크기는 얼마인가요', a: '익명으로 25 MB, 무료 계정으로 60 MB입니다. 25 MB WAV는 16비트/44.1 kHz 스테레오로 약 5분, 24비트/96 kHz로 약 2분에 해당합니다.' },
        { q: '얼마나 걸리나요', a: '몇 초입니다. 변환 자체는 실시간보다 훨씬 빠릅니다. 25 MB WAV는 3~8초에 완료됩니다. 업로드 속도가 병목입니다.' },
        { q: 'MP3 품질은 어떻게 출력되나요', a: '고정 비트레이트 128 kbps, 44.1 kHz, 소스 채널 수에 맞춤 (모노 입력은 모노 출력, 스테레오 입력은 스테레오 출력). "어디에나 충분히 좋은" 보편 설정입니다.' },
        { q: '파일을 보관하나요', a: '아니요. 업로드는 변환 직후 삭제됩니다. 결과는 1시간 이내에 정리 cron으로 제거됩니다. 로컬에 저장하세요.' },
        { q: 'MP3가 WAV와 다르게 들리나요', a: '대부분의 재생 시스템과 대부분의 소스 자료에서는 다르지 않습니다. 스튜디오 모니터에서 또렷한 귀로 마스터링하면 알 수도 있지만, 그쯤이면 웹 변환기를 쓰지 않을 겁니다.' },
        { q: '더 높은 비트레이트 (256이나 320 kbps)를 얻을 수 있나요', a: '직접은 안 됩니다. Mictoo의 128 kbps MP3를 Audacity로 가져가 원하는 비트레이트로 다시 내보내세요. 이중 인코딩으로 인한 가청 손실은 거의 없습니다.' },
        { q: 'MP3 대신 FLAC은 어떤가요', a: 'FLAC은 무손실 압축으로, WAV의 절반 크기에 품질 손실이 없습니다. 보관용으로는 더 나은 선택입니다. 이 변환기에서는 FLAC을 출력하지 않지만, /flac-to-mp3 페이지가 반대 방향을 다룹니다.' },
        { q: 'WAV가 32비트 float인데 변환되나요', a: '예. ffmpeg는 32비트 float WAV를 문제없이 처리합니다. MP3 출력은 입력 비트 깊이와 관계없이 동일합니다.' },
        { q: '모노 오디오인데 왜 MP3가 스테레오가 되나요', a: '소스 채널 레이아웃을 유지합니다. 모노 WAV는 모노 MP3, 스테레오 WAV는 스테레오 MP3입니다. 업믹스나 다운믹스를 하지 않습니다.' },
        { q: '음악에도 되나요, 아니면 음성만인가요', a: '둘 다 됩니다. 128 kbps MP3는 음악에서 약간의 지각적 절충이 있지만, 차 안, 소음 환경의 헤드폰, 일상 재생에는 충분합니다. 비판적 음악 청취에는 WAV를 유지하거나 FLAC을 쓰세요.' },
        { q: '일괄 변환이 되나요', a: '아직 안 됩니다. 무료 단계는 한 번에 한 파일입니다. 일괄 변환은 향후 Pro 플랜에 계획되어 있습니다.' },
      ]}
      relatedLinks={[
        { href: '/ko/mp4-to-mp3', label: 'MP4를 MP3로', desc: '비디오 파일에서 MP3 오디오를 꺼냅니다.' },
        { href: '/ko/flac-to-mp3', label: 'FLAC을 MP3로', desc: '무손실 FLAC을 휴대하기 좋은 MP3로 변환합니다.' },
        { href: '/ko/mp3-to-wav', label: 'MP3를 WAV로', desc: '반대 방향. MP3에서 비압축 WAV로.' },
        { href: '/ko/transcribe-audio-to-text', label: '오디오를 텍스트로', desc: '단어가 필요하지 오디오가 필요한 게 아니라면, MP3 단계를 건너뛰고 바로 전사하세요.' },
      ]}
    />
  )
}
