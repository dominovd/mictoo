import LandingLayout from '@/components/LandingLayout'
import ConverterZone from '@/components/ConverterZone'

const LANGS = {
  'en': 'https://mictoo.com/webm-to-mp3',
  'fr': 'https://mictoo.com/fr/webm-to-mp3',
  'de': 'https://mictoo.com/de/webm-to-mp3',
  'es': 'https://mictoo.com/es/webm-to-mp3',
  'ru': 'https://mictoo.com/ru/webm-to-mp3',
  'it': 'https://mictoo.com/it/webm-to-mp3',
  'pt': 'https://mictoo.com/pt/webm-to-mp3',
  'pl': 'https://mictoo.com/pl/webm-to-mp3',
  'ja': 'https://mictoo.com/ja/webm-to-mp3',
  'ko': 'https://mictoo.com/ko/webm-to-mp3',
  'x-default': 'https://mictoo.com/webm-to-mp3',
}

export const metadata = {
  title: 'WEBM을 MP3로 — 무료 온라인 변환기 | Mictoo',
  description:
    'WEBM을 MP3로 무료 온라인 변환합니다. WEBM 비디오나 오디오 파일에서 MP3 오디오를 몇 초 만에 꺼냅니다. 가입 없이, 워터마크 없음. 최대 25 MB.',
  alternates: { canonical: 'https://mictoo.com/ko/webm-to-mp3', languages: LANGS },

  openGraph: {
    title: "WEBM을 MP3로 — 무료 온라인 변환기 | Mictoo",
    description: "WEBM을 MP3로 무료 온라인 변환합니다. WEBM 비디오나 오디오 파일에서 MP3 오디오를 몇 초 만에 꺼냅니다. 가입 없이, 워터마크 없음. 최대 25 MB.",
    url: "https://mictoo.com/ko/webm-to-mp3",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "WEBM을 MP3로 — 무료 온라인 변환기 | Mictoo",
    description: "WEBM을 MP3로 무료 온라인 변환합니다. WEBM 비디오나 오디오 파일에서 MP3 오디오를 몇 초 만에 꺼냅니다. 가입 없이, 워터마크 없음. 최대 25 MB.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function KoWebmToMp3Page() {
  return (
    <LandingLayout
      defaultLanguage="ko"
      badge="WEBM → MP3 · 무료 · 가입 없이"
      h1={<>WEBM을 MP3로<br /><span className="text-brand-600">무료 온라인 변환기</span></>}
      subtitle="WEBM 파일 (브라우저 녹음 도구, YouTube 다운로더, 화면 캡처 도구가 선호하는 형식)을 드롭하세요. 깔끔한 MP3를 얻습니다. 워터마크 없음, 이메일 불필요."
      tool={<ConverterZone from="webm" to="mp3" />}
      howItWorks={[
        { icon: '📂', title: 'WEBM을 드롭', desc: '오디오 전용 또는 비디오 WEBM 모두 됩니다. 25 MB까지 익명으로, 가입 후 60 MB까지.' },
        { icon: '⚡', title: '추출하고 재인코딩', desc: 'ffmpeg가 WEBM 컨테이너에서 오디오 스트림 (Opus 또는 Vorbis)을 꺼내 44.1 kHz의 128 kbps MP3로 재인코딩합니다. 보통 3~10초.' },
        { icon: '⬇️', title: 'MP3를 다운로드', desc: '출력은 원래 이름에 .mp3가 붙은 형태입니다. 파일은 1시간 이내에 서버에서 제거됩니다.' },
      ]}
      whyUse={{ title: 'WEBM을 MP3로 변환하는 이유', bullets: [
        { title: 'WEBM은 브라우저에는 훌륭하지만 그 외에는 끔찍합니다', desc: 'iPhone은 WEBM을 재생하지 않습니다. 대부분의 카오디오도 마찬가지입니다. 오래된 블루투스 스피커 다수도요. MP3는 떠올릴 수 있는 모든 곳에서 재생됩니다.' },
        { title: '음성 메모 앱과 브라우저 녹음기는 WEBM에 저장합니다', desc: '웹 기반 녹음 도구 (Loom, MDN MediaRecorder API, 브라우저 오디오 녹음기)는 Chrome과 Firefox가 네이티브로 지원하기 때문에 WEBM을 기본으로 합니다. 녹음을 어딘가 보낼 거라면 MP3가 더 안전한 형식입니다.' },
        { title: 'YouTube 다운로더는 기본으로 WEBM을 줍니다', desc: '4K Video Downloader나 yt-dlp에서 형식을 지정하지 않고 "오디오만"을 고르면, 보통 WEBM Opus 파일을 얻습니다. MP3로 변환하면 iOS와 오디오 편집 앱에서 재생할 수 있게 됩니다.' },
        { title: 'Opus가 기술적으로는 더 낫지만, 호환성이 이깁니다', desc: 'WEBM 컨테이너 안의 Opus 코덱은 바이트당 MP3보다 낫습니다. 하지만 청중이 재생할 수 없다면 무의미합니다. MP3는 공용어입니다.' },
        { title: '워터마크 없음, 업셀 없음', desc: 'MP3는 오디오를 재인코딩한 것일 뿐입니다. 인트로, 태그, "Pro 구매" 오버레이를 결과 페이지에 추가하지 않습니다.' },
      ]}}
      useCases={{ title: 'WEBM을 MP3로 변환하고 싶을 때', items: [
        { title: '브라우저 오디오 녹음을 휴대용 파일로', desc: '웹 기반 녹음기 (내장 마이크 도구, 온라인 음성 녹음기 등)를 써서 WEBM이 생겼습니다. MP3로 변환해서 팟캐스트 편집기에 넣거나 전사 담당자에게 보내세요.' },
        { title: 'Loom이나 Vidyard 다운로드를 오디오 전용 클립으로', desc: 'Loom 다운로드는 WEBM일 수 있습니다. 녹화의 오디오만 필요하다면 변환해서 더 작은 파일로 저장하세요.' },
        { title: 'YouTube 오디오 다운로드를 보편적 형식으로', desc: 'Opus/WEBM을 기본으로 하는 다운로더로 YouTube에서 오디오 전용을 받았을 때, MP3 변환은 파일을 어디서나 재생 가능하게 합니다.' },
        { title: '화면 녹화에서 내레이션만', desc: 'OBS, Chrome 내장 화면 녹화기 등은 종종 WEBM으로 출력합니다. 전사나 팟캐스트용으로 보이스오버만 원한다면 변환하세요.' },
        { title: 'WebRTC 통화 녹음', desc: '일부 화상 회의 도구는 WEBM으로 녹음합니다. 클라이언트에게 보내거나 MP3를 기대하는 CRM에 저장하기 전에 변환하세요.' },
      ]}}
      proTips={{ title: '깔끔한 WEBM → MP3 변환을 위한 팁', tips: [
        { title: 'VP9 비디오의 WEBM도 괜찮음 — 비디오 스트림은 무시합니다', desc: '비디오 WEBM (VP9 + Opus)을 변환기에 드롭할 수 있습니다. 비디오를 제거하고 오디오만 유지합니다. 결과는 오디오 전용 WEBM을 줬을 때와 동일한 크기입니다.' },
        { title: 'Opus 오디오는 ffmpeg 안에서 무손실로 디코딩됨', desc: 'Opus → MP3로 가는 데 이중 손실 문제는 없습니다. 결과에 영향을 주는 것은 128 kbps MP3의 지각적 인코딩뿐, 입력이 손실 형식이라는 점 자체는 영향을 주지 않습니다.' },
        { title: '음성은 모노로 충분하지만 스테레오 유지', desc: '변환기는 소스 채널 레이아웃을 보존합니다. WEBM이 모노 (음성 녹음에 일반적)라면 MP3도 모노입니다. 업믹스하지 않습니다.' },
        { title: '변환이 실패하면 WEBM이 부분적으로 손상되었을 가능성', desc: 'WEBM 스트림은 녹음 도중 잘려서 컨테이너가 반쯤 망가지기도 합니다. VLC에서 열어 새 WEBM으로 다시 내보내거나 비디오 편집기에서 처리한 후 재시도하세요.' },
        { title: 'YouTube 다운로드는 가능하면 M4A를 직접 선택', desc: '다운로드를 직접 제어할 수 있다면, M4A (MP4 컨테이너 안의 AAC)를 고르면 이 단계 전체를 건너뜁니다. M4A는 MP3가 재생되는 곳이면 어디서나 재생됩니다. 4K Video Downloader의 "M4A" 형식 옵션을 사용하세요.' },
        { title: 'DRM으로 암호화된 WEBM은 실패합니다', desc: '일부 스트리밍 서비스는 DRM 적용 WEBM을 사용합니다. ffmpeg는 그것을 복호화할 수 없으며 Mictoo도 마찬가지입니다. 원본 WEBM은 보호되지 않은 것이어야 합니다.' },
      ]}}
      faq={[
        { q: 'WEBM → MP3 변환이 정말 무료인가요', a: '예. 25 MB까지 계정 불필요, 워터마크 없음, 시간 제한된 "체험판" 없음. 마케팅 페이지의 디스플레이 광고가 서버 비용을 충당합니다.' },
        { q: '최대 파일 크기는 얼마인가요', a: '익명으로 25 MB, 무료 계정으로 60 MB. WEBM은 효율적입니다. 25 MB는 보통 20~40분의 오디오에 해당합니다.' },
        { q: 'WEBM 비디오를 MP3로 변환할 수 있나요', a: '예. 비디오 스트림을 제거하고 오디오만 출력합니다. 소스가 비디오든 오디오 전용 WEBM이든 MP3 크기는 동일합니다.' },
        { q: 'MP3가 WEBM보다 음질이 나쁘게 들리나요', a: '이론적으로는 약간. 같은 비트레이트에서 Opus가 MP3보다 낫습니다. 128 kbps에서는 거의 모든 청취자와 거의 모든 자료에서 차이를 들을 수 없습니다.' },
        { q: '얼마나 걸리나요', a: '몇 초입니다. 25 MB WEBM 파일은 3~10초에 변환됩니다. 업로드 속도가 병목입니다.' },
        { q: '어떤 MP3 설정을 쓰나요', a: '고정 비트레이트 128 kbps, 44.1 kHz, 소스 채널 레이아웃 유지 (모노 입력은 모노 출력, 스테레오 입력은 스테레오 출력).' },
        { q: '파일을 보관하나요', a: '아니요. 업로드는 변환 후 삭제됩니다. 출력은 1시간 이내에 제거됩니다. 로컬에 저장하세요.' },
        { q: 'Loom에서 받은 WEBM이 실패했어요. 왜죠', a: '일부 Loom 다운로드는 WEBM 컨테이너 안에 프래그먼티드 MP4를 쓰거나 비표준 헤더를 가집니다. VLC에서 열어 다시 내보낸 후 재시도하세요. 또는 Loom에서 MP4로 직접 다운로드 옵션이 있다면 그쪽을 쓰세요.' },
        { q: 'Opus 파일에도 작동하나요', a: '파일이 .webm 대신 .opus로 끝난다면 먼저 .webm으로 이름을 바꾸세요. 컨테이너는 기능적으로 동일하고 ffmpeg는 똑같이 읽습니다.' },
        { q: '이 도구로 YouTube 비디오를 다운로드할 수 있나요', a: '아니요. URL을 가져오지 않습니다. 다운로더 앱 (4K Video Downloader, yt-dlp, ClipGrab)으로 WEBM을 로컬에 저장한 후 여기에 드롭하세요.' },
        { q: 'iPhone이나 iTunes에서 출력을 재생할 수 있나요', a: '예. MP3는 모든 Apple 기기와 소프트웨어를 포함해 어디서나 재생됩니다.' },
        { q: 'WEBM을 그대로 두지 않고 왜 변환하나요', a: 'WEBM은 Chrome과 Firefox에서는 괜찮지만, iOS, 많은 카오디오, 오래된 블루투스 스피커, 많은 전문 오디오 소프트웨어는 처리하지 않습니다. MP3는 보편적입니다.' },
      ]}
      relatedLinks={[
        { href: '/ko/mp4-to-mp3', label: 'MP4를 MP3로', desc: '같은 발상으로, 소스가 WEBM 대신 MP4인 경우.' },
        { href: '/ko/wav-to-mp3', label: 'WAV를 MP3로', desc: '무손실 WAV에서 휴대용 MP3로.' },
        { href: '/ko/webm-to-text', label: 'WEBM을 텍스트로', desc: 'MP3 단계를 건너뛰고 바로 전사.' },
        { href: '/ko/how-to-compress-audio', label: '오디오 압축', desc: 'MP3도 공유하기 너무 크다면.' },
      ]}
    />
  )
}
