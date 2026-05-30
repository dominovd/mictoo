import LandingLayout from '@/components/LandingLayout'
import ConverterZone from '@/components/ConverterZone'

const LANGS = {
  'en': 'https://mictoo.com/mp4-to-mp3',
  'fr': 'https://mictoo.com/fr/mp4-to-mp3',
  'de': 'https://mictoo.com/de/mp4-to-mp3',
  'es': 'https://mictoo.com/es/mp4-to-mp3',
  'ru': 'https://mictoo.com/ru/mp4-to-mp3',
  'it': 'https://mictoo.com/it/mp4-to-mp3',
  'pt': 'https://mictoo.com/pt/mp4-to-mp3',
  'pl': 'https://mictoo.com/pl/mp4-to-mp3',
  'ja': 'https://mictoo.com/ja/mp4-to-mp3',
  'ko': 'https://mictoo.com/ko/mp4-to-mp3',
  'x-default': 'https://mictoo.com/mp4-to-mp3',
}

export const metadata = {
  title: 'MP4를 MP3로 — 무료 온라인 변환기 | Mictoo',
  description:
    'MP4를 MP3로 무료 온라인 변환합니다. 비디오를 드롭하면 깔끔한 128 kbps MP3 오디오 파일을 몇 초 만에 얻을 수 있습니다. 가입 없이, 워터마크 없음, 이메일 불필요. 최대 25 MB.',
  alternates: { canonical: 'https://mictoo.com/ko/mp4-to-mp3', languages: LANGS },

  openGraph: {
    title: "MP4를 MP3로 — 무료 온라인 변환기 | Mictoo",
    description: "MP4를 MP3로 무료 온라인 변환합니다. 비디오를 드롭하면 깔끔한 128 kbps MP3 오디오 파일을 몇 초 만에 얻을 수 있습니다. 가입 없이, 워터마크 없음, 이메일 불필요. 최대 25 MB.",
    url: "https://mictoo.com/ko/mp4-to-mp3",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MP4를 MP3로 — 무료 온라인 변환기 | Mictoo",
    description: "MP4를 MP3로 무료 온라인 변환합니다. 비디오를 드롭하면 깔끔한 128 kbps MP3 오디오 파일을 몇 초 만에 얻을 수 있습니다. 가입 없이, 워터마크 없음, 이메일 불필요. 최대 25 MB.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function KoMp4ToMp3Page() {
  return (
    <LandingLayout
      defaultLanguage="ko"
      badge="MP4 → MP3 · 무료 · 가입 없이"
      h1={<>MP4를 MP3로<br /><span className="text-brand-600">무료 온라인 변환기</span></>}
      subtitle="MP4 비디오를 드롭하세요. MP3 오디오 파일을 얻습니다. 워터마크 없음, 이메일 불필요, 대기실 없음. 서버 측 ffmpeg로 처리되어 몇 초 안에 완료됩니다."
      tool={<ConverterZone from="mp4" to="mp3" />}
      howItWorks={[
        { icon: '📂', title: 'MP4를 드롭', desc: '아무 MP4 비디오나 박스에 드래그하거나 클릭해서 선택하세요. 25 MB까지의 파일은 익명으로 처리됩니다. 60 MB가 필요하면 로그인하세요.' },
        { icon: '⚡', title: '오디오를 추출합니다', desc: '서버 측 ffmpeg가 실행되어 비디오 스트림을 제거하고 오디오를 44.1 kHz의 128 kbps 스테레오 MP3로 재인코딩합니다. 25 MB 비디오는 보통 5~15초 내에 완료됩니다.' },
        { icon: '⬇️', title: 'MP3를 다운로드', desc: '다운로드 버튼을 누르면 원래 파일명에 .mp3 확장자가 붙은 파일을 받습니다. 업로드와 결과 모두 1시간 이내에 서버에서 삭제됩니다.' },
      ]}
      whyUse={{ title: 'MP4를 MP3로 변환할 때 Mictoo를 선택하는 이유', bullets: [
        { title: '변환만 합니다. 그 외에는 아무것도', desc: '팝업 없음, 카운트다운 타이머 없음, 결제를 강요하는 가짜 "무료" 단계 없음. 드롭, 변환, 다운로드만 합니다.' },
        { title: '128 kbps MP3, 작고 보편적', desc: '이 비트레이트는 음성 오디오에 실용적인 최적점입니다. 분당 약 1 MB, 어디서나 재생되고 깔끔하게 들립니다. 품질 선택기는 제공하지 않습니다. 일반 사용자에게 가치 없이 마찰만 더하기 때문입니다.' },
        { title: '파일은 서버에 남지 않습니다', desc: 'MP4는 Vercel Blob 저장소에 도착해서 변환되고 즉시 삭제됩니다. MP3 자체도 매시간 정리 작업으로 제거됩니다. 로컬에 사본을 보관하세요.' },
        { title: '워터마크 없음, 오디오 태그 없음', desc: '많은 무료 변환기들이 "FreeMP3.com에서 변환됨" 같은 자체 인트로를 끼워 넣습니다. Mictoo는 재인코딩 외에는 오디오에 손대지 않습니다.' },
        { title: '대부분의 다른 무료 변환기는 광고 네트워크를 두르고 있습니다', desc: 'Google에서 "mp4 to mp3"로 찾은 사이트의 다수가 뒤로가기 버튼을 가로채거나 가짜 바이러스 경고를 띄우는 AdSense 유입 페이지입니다. Mictoo는 마케팅 페이지의 디스플레이 광고로 운영되는 인디 SEO 프로젝트이며, 변환 흐름 내에는 광고를 넣지 않습니다.' },
      ]}}
      useCases={{ title: 'MP4를 MP3로 변환하고 싶을 때', items: [
        { title: '비디오로 가진 팟캐스트를 저장', desc: '많은 팟캐스트 피드가 YouTube 업로드나 Vimeo MP4로도 게시됩니다. 비디오 사본만 있다면 MP3가 스마트폰 친화적이고 10배 더 작아집니다.' },
        { title: '강의 녹화에서 음악이나 오디오만 추출', desc: 'Zoom과 Teams는 MP4로 내보냅니다. 출퇴근길에 듣거나 텍스트로 옮기거나 편집 소프트웨어에 넣고 싶다면 오디오만 있으면 됩니다.' },
        { title: '1 GB 비디오를 이메일로 보낼 수 있게 줄이기', desc: '1080p의 1시간 비디오는 쉽게 1 GB에 도달합니다. 같은 녹화의 오디오는 풀 품질에서 30~60 MB, 128 kbps에서는 30 MB 미만일 때가 많습니다. 갑자기 이메일로 보낼 수 있게 됩니다.' },
        { title: '오디오를 기대하는 전사 도구에 입력', desc: 'Mictoo의 자체 전사 도구는 MP4를 직접 받지만, 서드파티 도구, 오디오 편집기, DAW는 보통 순수 오디오를 원합니다. MP3는 최소공통분모 포맷입니다.' },
        { title: '스크린캐스트나 슬라이드쇼의 배경 음악', desc: 'YouTube 튜토리얼의 많은 MP4에는 독립 클립으로 쓰고 싶은 음악이나 내레이션이 들어 있습니다. 변환해서 iMovie, Audacity, Logic에 가져다 놓으세요.' },
      ]}}
      proTips={{ title: '깔끔한 MP4 → MP3 변환을 위한 팁', tips: [
        { title: 'MP4가 거대하다면 먼저 자르세요', desc: '가입 없이 상한은 25 MB, 가입 시 60 MB입니다. 1080p에서 10분 넘는 비디오는 들어가지 않을 가능성이 큽니다. QuickTime (Mac)이나 사진 앱 (Windows)에서 열어, 필요한 부분만 잘라 다시 내보내세요.' },
        { title: '128 kbps는 음성에는 과하고 음악에는 적절', desc: '말소리만이라면 64 kbps MP3가 절반 크기에 가청 손실 없이 가능합니다. Mictoo가 128 kbps로 표준화한 이유는, 비디오 안이 무엇인지 알기 어려운 경우가 많고 128이면 양쪽 모두 깔끔하게 들리기 때문입니다.' },
        { title: '원본 비디오에 여러 오디오 트랙이 있으면 기본 트랙만 재생', desc: '영화, DVD 리핑, 일부 강의 내보내기는 여러 언어 트랙을 포함합니다. Mictoo의 변환기는 기본 트랙을 사용합니다. 보조 트랙이 필요하다면 비디오 편집기에서 기본 트랙을 변경하고 MP4를 다시 내보낸 후 업로드하세요.' },
        { title: '캠코더 시절의 오래된 MP4는 디코딩되지 않을 수 있음', desc: 'AVCHD 등 캠코더 시절 MP4는 ffmpeg가 추가 라이브러리 없이는 읽지 못하는 코덱을 사용하기도 합니다. 변환이 실패하면, HandBrake (무료, 모든 플랫폼)에서 파일을 열어 표준 H.264 MP4로 다시 내보낸 후 재시도하세요.' },
        { title: '320 kbps나 VBR이 필요하면 이후에 Audacity 사용', desc: 'Mictoo의 MP3는 고정 128 kbps입니다. 더 높은 비트레이트나 VBR 파일이 필요하면 MP3를 Audacity (역시 무료)에서 열어 원하는 설정으로 다시 내보내세요. 더 높은 비트레이트로 재인코딩해도 품질 손실은 거의 없습니다.' },
        { title: '보호된 콘텐츠 (iTunes 영화, DRM)는 실패합니다', desc: 'DRM 보호 MP4는 ffmpeg로 읽을 수 없습니다. 저작권이 있는 콘텐츠의 복호화는 하지 않습니다. 스트리밍 서비스에서 받은 파일이라면, 변환 권리가 없을 가능성이 높습니다.' },
      ]}}
      faq={[
        { q: 'MP4 → MP3 변환기가 정말 무료인가요', a: '예. 25 MB까지는 계정 불필요, 시간 제한 없음, 출력 워터마크 없음, "첫 변환은 무료 그 다음은 업그레이드" 같은 수법도 없습니다. 서버 비용은 마케팅 페이지의 디스플레이 광고로 충당하며 변환기 자체에는 광고가 없습니다.' },
        { q: '최대 파일 크기는 얼마인가요', a: '계정 없이 25 MB, 무료 로그인 시 60 MB입니다. 실제 한계는 Vercel 함수 예산이지만, 모든 사용자의 변환을 60초 이내에 유지하기 위해 그 이하로 제한합니다.' },
        { q: '변환에 얼마나 걸리나요', a: '일반적인 10~20 MB MP4 (몇 분짜리 비디오)는 5~15초 내에 끝납니다. 병목은 업로드 속도지 변환 자체가 아닙니다. ffmpeg의 오디오 재인코딩은 실시간보다 훨씬 빠릅니다.' },
        { q: 'MP3 품질은 어떻게 되나요', a: '고정 비트레이트 128 kbps, 44.1 kHz, 스테레오입니다. 이것은 "어디에나 충분히 좋은" 보편 설정으로, 음성과 음악 모두 대부분의 귀에는 원본과 구별이 안 되며 오디오 분당 약 1 MB입니다.' },
        { q: '파일을 보관하나요', a: '아니요. 업로드는 변환에 필요한 동안만 Vercel Blob 저장소에 있다가 삭제됩니다. 결과 MP3는 1시간 이내에 정리 cron으로 제거됩니다. MP3는 로컬에 저장하세요. 다시 보낼 수 없습니다.' },
        { q: '출력에 워터마크나 오디오 태그가 들어가나요', a: '아니요. "Mictoo로 변환됨" 인트로나 브랜드 마무리를 끼워 넣지 않습니다. MP3는 원본 오디오를 재인코딩한 것일 뿐입니다.' },
        { q: '이것으로 YouTube 영상을 변환할 수 있나요', a: '권리가 있는 MP4 파일이라면 무엇이든 변환할 수 있습니다. 저희는 YouTube에서 영상을 다운로드하지 않습니다. 그것은 YouTube 이용약관에 어긋나기 때문입니다. 4K Video Downloader나 yt-dlp 같은 도구로 MP4를 로컬에 저장한 다음 여기에 드롭하세요.' },
        { q: '왜 형식이 MP4로만 제한되나요', a: '각 변환기는 하나의 URL에 하나의 작업입니다. MP4를 MP3로 변환하는 도구는 /mp4-to-mp3에, WAV를 MP3로 변환하는 도구는 /wav-to-mp3에 있습니다. 올바른 페이지를 선택하면 무엇을 기대해야 할지 명확해지고, Google에도 순위를 매기기 좋은 단일 목적 페이지를 제공할 수 있습니다.' },
        { q: 'MP4가 "지원되지 않는 코덱" 오류로 실패했습니다. 어떻게 해야 하나요', a: '오래된 캠코더 MP4와 일부 DRM 보호 파일은 ffmpeg가 기본적으로 디코딩할 수 없는 코덱을 사용합니다. HandBrake (무료)에서 파일을 열고 표준 H.264 MP4로 재내보내기 한 후 다시 시도하세요. 그래도 실패하면 DRM이 걸려 있을 가능성이 큽니다.' },
        { q: '모바일에서도 작동하나요', a: '예. 페이지는 모바일 친화적이며 iOS Safari와 Android Chrome에서 업로드가 가능합니다. iPhone에서는 파일 선택기가 영상에 접근할 수 있도록 먼저 파일 앱으로 공유해야 할 수 있습니다.' },
        { q: 'MP3는 손실 형식이지요. 걱정해야 하나요', a: '예, MP3는 손실 형식입니다. 128 kbps에서는 거의 모든 청취자가 거의 모든 소스에서 음질 저하를 느끼지 못합니다. 무손실이 필요하다면 (예: 음악 마스터링) MP4를 WAV로 변환하세요.' },
        { q: '왜 일괄 업로드는 없나요', a: '무료 등급은 한 번에 한 파일입니다. 일괄 처리는 추후 Pro 플랜에 예정되어 있습니다. 현재로서는 브라우저 탭을 여러 개 열어 병렬로 변환할 수 있습니다.' },
      ]}
      relatedLinks={[
        { href: '/ko/wav-to-mp3', label: 'WAV를 MP3로', desc: '무손실 WAV 파일을 작은 MP3로 축소합니다.' },
        { href: '/ko/webm-to-mp3', label: 'WEBM을 MP3로', desc: 'WEBM (YouTube 다운로더가 자주 주는 형식)에서 MP3를 꺼냅니다.' },
        { href: '/ko/transcribe-video-to-text', label: '비디오를 텍스트로', desc: 'MP3 단계를 건너뛰고 비디오에서 바로 텍스트 전사로.' },
        { href: '/ko/how-to-compress-audio', label: '오디오 압축', desc: 'MP3도 공유하기 너무 크다면.' },
      ]}
    />
  )
}
