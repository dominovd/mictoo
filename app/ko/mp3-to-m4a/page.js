import LandingLayout from '@/components/LandingLayout'
import ConverterZone from '@/components/ConverterZone'

const LANGS = {
  'en': 'https://mictoo.com/mp3-to-m4a',
  'fr': 'https://mictoo.com/fr/mp3-to-m4a',
  'de': 'https://mictoo.com/de/mp3-to-m4a',
  'es': 'https://mictoo.com/es/mp3-to-m4a',
  'ru': 'https://mictoo.com/ru/mp3-to-m4a',
  'it': 'https://mictoo.com/it/mp3-to-m4a',
  'pt': 'https://mictoo.com/pt/mp3-to-m4a',
  'pl': 'https://mictoo.com/pl/mp3-to-m4a',
  'ja': 'https://mictoo.com/ja/mp3-to-m4a',
  'ko': 'https://mictoo.com/ko/mp3-to-m4a',
  'x-default': 'https://mictoo.com/mp3-to-m4a',
}

export const metadata = {
  title: 'MP3를 M4A로 — 무료 온라인 변환기 | Mictoo',
  description:
    'MP3를 M4A로 무료 온라인 변환합니다. MP3를 AAC로 재인코딩해 iPhone, iTunes, Apple 생태계용 M4A 컨테이너에 담습니다. 가입 없이, 워터마크 없음.',
  alternates: { canonical: 'https://mictoo.com/ko/mp3-to-m4a', languages: LANGS },

  openGraph: {
    title: "MP3를 M4A로 — 무료 온라인 변환기 | Mictoo",
    description: "MP3를 M4A로 무료 온라인 변환합니다. MP3를 AAC로 재인코딩해 iPhone, iTunes, Apple 생태계용 M4A 컨테이너에 담습니다. 가입 없이, 워터마크 없음.",
    url: "https://mictoo.com/ko/mp3-to-m4a",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MP3를 M4A로 — 무료 온라인 변환기 | Mictoo",
    description: "MP3를 M4A로 무료 온라인 변환합니다. MP3를 AAC로 재인코딩해 iPhone, iTunes, Apple 생태계용 M4A 컨테이너에 담습니다. 가입 없이, 워터마크 없음.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function KoMp3ToM4aPage() {
  return (
    <LandingLayout
      defaultLanguage="ko"
      badge="MP3 → M4A · 무료 · 가입 없이"
      h1={<>MP3를 M4A로<br /><span className="text-brand-600">무료 온라인 변환기</span></>}
      subtitle="MP3를 드롭하세요. M4A, 즉 MP4 컨테이너 안의 AAC 오디오를 얻습니다. iTunes, Apple Music, 모든 iPhone에서 네이티브로 재생됩니다. 워터마크 없음, 이메일 불필요."
      tool={<ConverterZone from="mp3" to="m4a" />}
      howItWorks={[
        { icon: '📂', title: 'MP3를 드롭', desc: '아무 MP3나 박스에 드래그하세요. 25 MB까지 익명, 60 MB는 가입 후.' },
        { icon: '⚡', title: 'ffmpeg가 AAC로 재인코딩', desc: 'M4A 컨테이너 안의 128 kbps AAC, faststart 플래그 적용. 스트리밍 시 즉시 재생됩니다. 3~10초 내에 완료.' },
        { icon: '⬇️', title: 'M4A를 다운로드', desc: '결과는 원래 이름에 .m4a가 붙은 형태입니다. 파일은 1시간 이내에 서버에서 제거됩니다.' },
      ]}
      whyUse={{ title: 'MP3를 M4A로 변환하는 이유', bullets: [
        { title: 'Apple 생태계는 M4A를 선호', desc: 'iTunes, Apple Music, iCloud 음악 라이브러리, GarageBand, 모두 M4A를 1급 포맷으로 처리합니다. MP3도 작동하지만, 네이티브로 말하는 언어는 M4A입니다.' },
        { title: '같은 비트레이트에서 AAC가 MP3보다 약간 더 좋게 들림', desc: '128 kbps에서 차이는 작지만 실재하며, 특히 고역에서 그렇습니다. 소스 MP3가 이미 손실이라면 이 재인코딩이 더 나빠지게 만들지 않습니다.' },
        { title: 'M4A는 챕터 마커와 풍부한 메타데이터를 지원', desc: '오디오북, 팟캐스트 미리보기 파일, Apple 생태계용 콘텐츠를 만든다면 M4A는 챕터를 깔끔하게 처리합니다. MP3의 챕터 지원은 들쭉날쭉합니다.' },
        { title: 'iPhone 벨소리는 M4A여야 함', desc: 'iPhone 커스텀 벨소리는 M4R 확장자를 씁니다. M4A와 같은 AAC-in-MP4 포맷입니다. 변환 후 벨소리 용도로 .m4r로 이름을 바꾸세요.' },
        { title: '워터마크 없음, 업셀 없음', desc: '오디오를 재인코딩한 것 외에는 아무것도 없습니다.' },
      ]}}
      useCases={{ title: 'MP3를 M4A로 변환하고 싶을 때', items: [
        { title: '음악 컬렉션을 Apple Music에 가져오기', desc: 'M4A는 깔끔하게 가져와지고 iCloud 음악 라이브러리와 통합됩니다. MP3는 동기화 중 가끔 메타데이터 문제가 있을 수 있습니다.' },
        { title: 'iPhone 벨소리 만들기', desc: 'MP3 → M4A로 변환, 40초 미만으로 자르기, .m4r로 이름 변경, iPhone 연결 중에 Finder에 드롭.' },
        { title: '챕터 마커가 있는 오디오북', desc: 'M4A는 챕터를 지원합니다. MP3 지원은 불안정합니다. 청취자가 챕터 사이를 이동하려는 긴 오디오북에는 M4A가 적합한 포맷입니다.' },
        { title: 'iCloud용 음성 메모 정리', desc: 'MP3 음성 메모 폴더가 있고 iCloud나 Apple Voice Memos에 넣고 싶다면 M4A가 더 네이티브이고 동기화도 더 안정적입니다.' },
        { title: 'GarageBand나 Logic 프로젝트', desc: 'Apple의 음악 소프트웨어에 참고 오디오를 가져올 때 일부 워크플로에서는 MP3보다 M4A가 더 부드럽게 들어옵니다.' },
      ]}}
      proTips={{ title: 'MP3 → M4A 변환 팁', tips: [
        { title: '재인코딩은 약간의 손실을 추가함', desc: '한 손실 포맷에서 다른 손실 포맷으로 가는 것입니다. 128 kbps MP3에서 128 kbps AAC로 가는 경우 손실은 실재하지만 대부분의 사람에게는 대부분의 환경에서 들리지 않습니다. 비판적 용도에는 무손실 소스를 찾으세요.' },
        { title: '벨소리는 변환 전에 자르세요', desc: 'iPhone 벨소리는 40초가 상한입니다. Audacity나 QuickTime에서 먼저 MP3를 자른 후 변환하세요.' },
        { title: '96 kbps AAC는 보통 128 kbps MP3를 능가함', desc: 'Mictoo의 변환기는 호환성을 위해 128 kbps로 출력하지만, 완전히 제어할 수 있다면 AAC를 더 낮춰도 MP3 품질에 맞출 수 있습니다. 도구를 단순하게 유지하기 위해 선택기는 제공하지 않습니다.' },
        { title: 'M4A vs MP4 — 같은 컨테이너, 다른 관습', desc: 'M4A 파일은 오디오만 포함합니다. MP4 파일은 비디오, 오디오 또는 둘 다 포함할 수 있습니다. iTunes는 구분을 명확히 하기 위해 .m4a 확장자를 씁니다. 일부 플레이어는 어느 확장자든 받습니다.' },
        { title: '챕터 마커는 Mictoo가 추가하지 않습니다', desc: '오디오를 재인코딩만 합니다. 챕터 마커를 추가하려면 오디오북에는 Apple Books를, 또는 Chapter and Verse 같은 전용 도구를 쓰세요.' },
        { title: 'DRM 보호 MP3는 변환이 실패합니다', desc: '2026년에 MP3의 DRM은 극히 드물지만, 어떻게든 가지고 있다면 디코딩되지 않습니다.' },
      ]}}
      faq={[
        { q: 'MP3 → M4A 변환이 정말 무료인가요', a: '예. 25 MB까지 계정 불필요, 워터마크 없음, 시간 제한 없음.' },
        { q: '최대 파일 크기는 얼마인가요', a: '익명으로 25 MB, 무료 계정으로 60 MB.' },
        { q: 'M4A가 MP3보다 음질이 나쁘게 들리나요', a: '이론적으로는 예. 어떤 손실 포맷이든 재인코딩하면 약간의 손실이 추가됩니다. 실제로 128 kbps MP3에서 128 kbps AAC로 가는 경우, 컨슈머 재생에서 사람이 차이를 들을 수 없습니다.' },
        { q: 'M4A와 MP4의 차이는 무엇인가요', a: 'M4A와 MP4는 같은 컨테이너 포맷입니다. .m4a 확장자는 "오디오 전용"을 알리는 신호이고 iTunes에 무엇을 할지 알려줍니다. 일부 플레이어는 어느 확장자든 받습니다.' },
        { q: '얼마나 걸리나요', a: '몇 초입니다. 25 MB MP3는 3~10초에 변환됩니다.' },
        { q: '어떤 품질로 출력하나요', a: 'M4A 컨테이너 안의 128 kbps AAC, 44.1 kHz, 소스 채널 레이아웃 유지.' },
        { q: '파일을 보관하나요', a: '아니요. 업로드는 변환 후 삭제됩니다. 출력은 1시간 이내에 제거됩니다.' },
        { q: '이걸로 iPhone 벨소리를 만들 수 있나요', a: '간접적으로 가능합니다. MP3를 M4A로 변환, QuickTime에서 40초 미만으로 자르기, .m4a를 .m4r로 이름 변경, iPhone 연결 상태에서 Finder에 드롭.' },
        { q: 'iTunes가 결과를 받아주나요', a: '예. M4A는 iTunes의 네이티브 포맷입니다.' },
        { q: 'MP3가 이미 320 kbps인데 변환해야 하나요', a: '호환성을 위해 M4A가 특별히 필요할 때만요. 결과는 128 kbps AAC가 됩니다. 320 kbps MP3에서는 기술적으로 품질 저하지만, 대부분의 재생에서 실질적으로 들리지 않습니다. 320 kbps 품질을 유지하려면 더 높은 비트레이트를 설정할 수 있는 다른 변환기가 필요합니다.' },
        { q: '태그가 옮겨지나요', a: '기본 태그 (제목, 아티스트, 앨범)는 보통 옮겨집니다. 커버 아트와 상세 코멘트는 MP3 ID3와 M4A iTunes 메타데이터 사이에서 불안정합니다. 변환 후 iTunes나 Mp3tag에서 다시 태그를 다세요.' },
        { q: '일괄 변환이 되나요', a: '무료 단계에서는 아직 안 됩니다. 여러 브라우저 탭을 열어 병렬로 변환하세요.' },
      ]}
      relatedLinks={[
        { href: '/ko/m4a-to-mp3', label: 'M4A를 MP3로', desc: '반대 방향의 변환.' },
        { href: '/ko/wav-to-mp3', label: 'WAV를 MP3로', desc: 'WAV를 휴대용 MP3로 줄입니다.' },
        { href: '/ko/m4a-to-text', label: 'M4A를 텍스트로', desc: 'M4A 오디오를 직접 전사합니다.' },
        { href: '/ko/how-to-compress-audio', label: '오디오 압축', desc: '더 작아져야 하는 파일에.' },
      ]}
    />
  )
}
