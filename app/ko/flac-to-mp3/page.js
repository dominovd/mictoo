import LandingLayout from '@/components/LandingLayout'
import ConverterZone from '@/components/ConverterZone'

const LANGS = {
  'en': 'https://mictoo.com/flac-to-mp3',
  'fr': 'https://mictoo.com/fr/flac-to-mp3',
  'de': 'https://mictoo.com/de/flac-to-mp3',
  'es': 'https://mictoo.com/es/flac-to-mp3',
  'ru': 'https://mictoo.com/ru/flac-to-mp3',
  'it': 'https://mictoo.com/it/flac-to-mp3',
  'pt': 'https://mictoo.com/pt/flac-to-mp3',
  'pl': 'https://mictoo.com/pl/flac-to-mp3',
  'ja': 'https://mictoo.com/ja/flac-to-mp3',
  'ko': 'https://mictoo.com/ko/flac-to-mp3',
  'x-default': 'https://mictoo.com/flac-to-mp3',
}

export const metadata = {
  title: 'FLAC을 MP3로 — 무료 온라인 변환기 | Mictoo',
  description:
    'FLAC을 MP3로 무료 온라인 변환합니다. 무손실 FLAC을 128 kbps MP3로 몇 초 만에 줄입니다. 가입 없이, 워터마크 없음. 최대 25 MB.',
  alternates: { canonical: 'https://mictoo.com/ko/flac-to-mp3', languages: LANGS },

  openGraph: {
    title: "FLAC을 MP3로 — 무료 온라인 변환기 | Mictoo",
    description: "FLAC을 MP3로 무료 온라인 변환합니다. 무손실 FLAC을 128 kbps MP3로 몇 초 만에 줄입니다. 가입 없이, 워터마크 없음. 최대 25 MB.",
    url: "https://mictoo.com/ko/flac-to-mp3",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FLAC을 MP3로 — 무료 온라인 변환기 | Mictoo",
    description: "FLAC을 MP3로 무료 온라인 변환합니다. 무손실 FLAC을 128 kbps MP3로 몇 초 만에 줄입니다. 가입 없이, 워터마크 없음. 최대 25 MB.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function KoFlacToMp3Page() {
  return (
    <LandingLayout
      defaultLanguage="ko"
      badge="FLAC → MP3 · 무료 · 가입 없이"
      h1={<>FLAC을 MP3로<br /><span className="text-brand-600">무료 온라인 변환기</span></>}
      subtitle="FLAC 파일을 드롭하세요. 크기가 3분의 1이고 어디서나 재생되는 휴대용 MP3를 얻습니다. 워터마크 없음, 이메일 불필요."
      tool={<ConverterZone from="flac" to="mp3" />}
      howItWorks={[
        { icon: '📂', title: 'FLAC을 드롭', desc: 'FLAC을 박스에 드래그하세요. 25 MB까지 익명, 60 MB는 가입 후.' },
        { icon: '⚡', title: 'ffmpeg가 MP3로 재인코딩', desc: '128 kbps 고정 비트레이트, 44.1 kHz, 채널 레이아웃 유지. 일반적인 25 MB FLAC은 3~10초 내에 완료됩니다.' },
        { icon: '⬇️', title: 'MP3를 다운로드', desc: '결과는 원래 파일명에 .mp3가 붙은 형태입니다. 1시간 이내에 서버에서 제거됩니다.' },
      ]}
      whyUse={{ title: 'FLAC을 MP3로 변환하는 이유', bullets: [
        { title: 'FLAC은 무손실이지만 거대합니다', desc: '5분 FLAC은 일반 비트레이트로 25~40 MB입니다. 같은 오디오를 128 kbps MP3로 하면 5 MB입니다. 폰, 차, 블루투스에서는 이 크기가 중요합니다.' },
        { title: '대부분의 카오디오와 블루투스 스피커는 FLAC을 재생하지 않습니다', desc: '2026년에도 출고 시 차량 인포테인먼트와 다수의 중급 블루투스 기기는 MP3만 받습니다. MP3는 그냥 작동합니다.' },
        { title: '128 kbps의 품질 손실은 거의 누구에게도 들리지 않음', desc: '컨슈머 헤드폰, 차 안, 폰 스피커 어디서도 차이를 알 수 없습니다. 절충이 보이는 건 스튜디오 모니터의 비판적 청취에서뿐입니다.' },
        { title: 'iPod, 옛 MP3 플레이어, 단순 음악 앱에서 MP3가 이깁니다', desc: '최근 iPhone보다 오래된 기기에 음악을 올린다면 MP3가 더 안전합니다. 레거시 하드웨어의 FLAC 지원은 들쭉날쭉합니다.' },
        { title: '워터마크 없음, 업셀 없음', desc: '오디오를 재인코딩한 것뿐입니다. 아무것도 끼워 넣지 않습니다.' },
      ]}}
      useCases={{ title: 'FLAC을 MP3로 변환하고 싶을 때', items: [
        { title: 'Bandcamp / Qobuz 다운로드를 폰 라이브러리로', desc: 'Bandcamp는 유료 다운로드에 기본으로 FLAC을 줍니다. MP3로 변환해 폰의 음악 컬렉션에 맞추거나 FLAC을 처리하지 못하는 카 시스템에 동기화하세요.' },
        { title: 'CD 리핑을 휴대용 라이브러리로', desc: '보관용으로 CD를 FLAC으로 리핑했다면, 일상 청취용으로 각 앨범을 MP3로 변환하고 FLAC을 마스터로 유지하세요.' },
        { title: '스튜디오 내보내기를 배포로', desc: '음악 프로듀서가 FLAC을 보낼 수 있습니다. 팟캐스트 호스트, 웹 플레이어, 또는 협업자에게 러프 믹스를 이메일로 보내려면 MP3로 변환하세요.' },
        { title: '현장 녹음을 빠르게 공유', desc: 'Tascam DR-40X나 Zoom F3 같은 현장 녹음기는 FLAC으로 녹음할 수 있습니다. MP3로 작업하는 프로듀서나 사운드 에디터에게 보내기 전에 변환하세요.' },
        { title: '라이브러리 정리', desc: 'FLAC으로 가득한 오래된 하드 드라이브를 정리합니다. 원본은 NAS에 두고 활성 사용을 위해 MP3로 변환합니다.' },
      ]}}
      proTips={{ title: '깔끔한 FLAC → MP3 변환을 위한 팁', tips: [
        { title: 'FLAC은 무손실이라 첫 인코딩은 문제없음', desc: 'FLAC → MP3로 한 번 가는 데 품질 페널티가 없습니다. 아티팩트가 들리기 시작하는 것은 MP3를 다시 재인코딩하거나 MP3에서 다른 손실 포맷으로 갈 때뿐입니다.' },
        { title: '오디오파일 용도라면 FLAC을 유지', desc: '하이엔드 헤드폰, 전용 DAC, 비판적 청취를 한다면 FLAC을 유지할 가치가 있습니다. MP3는 배포와 일상용입니다.' },
        { title: '태그가 항상 옮겨지지는 않음', desc: 'FLAC 태그 (Vorbis 코멘트)와 MP3 태그 (ID3)는 다른 포맷입니다. Mictoo의 변환기는 그 사이에서 커버 아트와 상세 메타데이터를 옮기지 않습니다. 변환 후 MusicBrainz Picard나 Mp3tag로 직접 태그를 다세요.' },
        { title: '24비트/96 kHz FLAC은 16비트/44.1과 같은 결과', desc: 'MP3는 사실상 16비트/48 kHz에서 한계가 있습니다. 소스의 추가 비트 깊이와 샘플 레이트는 MP3 인코딩에서 살아남지 않지만, 해를 끼치지도 않습니다.' },
        { title: '무손실 변환에는 ALAC을 쓰세요', desc: 'iTunes/Apple Music에서 재생되는 무손실이 필요하다면 FLAC을 ALAC (Apple Lossless)로 변환하세요. 음질은 같고, 메타데이터 발자국은 FLAC의 절반이며, Apple 생태계에서 네이티브로 재생됩니다.' },
        { title: '더 높은 MP3 비트레이트는 Audacity에서 다시 내보내기', desc: 'Mictoo의 변환기는 128 kbps로 출력합니다. 320 kbps가 필요하면 MP3를 Audacity (무료)에서 열어 다시 내보내세요. 이중 인코딩은 거의 들리지 않습니다.' },
      ]}}
      faq={[
        { q: 'FLAC → MP3 변환이 정말 무료인가요', a: '예. 25 MB까지 계정 불필요, 워터마크 없음, 시간 제한 없음. 마케팅 페이지의 디스플레이 광고가 서버 비용을 충당합니다.' },
        { q: '최대 파일 크기는 얼마인가요', a: '익명으로 25 MB, 무료 계정으로 60 MB. FLAC의 일반 5분 곡은 30~40 MB이므로 풀 앨범은 트랙별로 변환해야 할 수 있습니다.' },
        { q: '음질 차이를 들을 수 있나요', a: '폰 스피커, 차 안, 저가 헤드폰에서는 아닙니다. 스튜디오 모니터에서 비판적으로 들으면 가능성 있습니다. 마스터링과 오디오파일 재생을 제외하면 절충은 합리적입니다.' },
        { q: '커버 아트와 메타데이터가 옮겨지나요', a: '부분적으로. 기본 태그 (아티스트, 제목, 앨범)는 보통 옮겨집니다. 커버 아트와 상세 Vorbis 코멘트는 그렇지 않을 때가 많습니다. 변환 후 MusicBrainz Picard나 Mp3tag로 깔끔하게 다세요.' },
        { q: 'MP3 품질은 어떻게 출력되나요', a: '고정 비트레이트 128 kbps, 44.1 kHz, 소스 채널 레이아웃 유지.' },
        { q: '얼마나 걸리나요', a: '몇 초입니다. 25 MB FLAC은 3~10초에 변환됩니다. 업로드가 병목입니다.' },
        { q: '파일을 보관하나요', a: '아니요. 업로드는 변환 후 삭제됩니다. 출력은 1시간 이내에 정리 cron으로 제거됩니다.' },
        { q: '앨범 전체를 일괄 변환할 수 있나요', a: '아직 안 됩니다. 무료 단계는 한 번에 한 파일입니다. 우회책으로 여러 브라우저 탭을 여세요.' },
        { q: '24비트/96 kHz FLAC이 MP3와 같게 들리나요', a: '컨슈머 재생에서는 거의 확실히 그렇습니다. 24비트와 높은 샘플 레이트는 처리와 마스터링에 의미가 있지, MP3 등급의 오디오 체인 청취에는 의미가 없습니다.' },
        { q: '대신 ALAC으로 변환해야 하나요', a: 'Apple Music이나 iTunes에서 무손실 오디오가 필요하다면 예. ALAC은 FLAC의 Apple 대응입니다. Mictoo는 ALAC을 출력하지 않지만 Audacity는 가능합니다.' },
        { q: 'Hi-Res 다운로드의 FLAC인데 변환할 가치가 있나요', a: '폰이나 차 안에서 듣는다면 MP3가 동일하게 들립니다. 향후 처리를 위해 원본은 유지하세요.' },
        { q: '128 kbps보다 높이 갈 수 있나요', a: '이 변환기로는 안 됩니다. MP3를 Audacity에서 원하는 비트레이트로 다시 인코딩하세요.' },
      ]}
      relatedLinks={[
        { href: '/ko/wav-to-mp3', label: 'WAV를 MP3로', desc: '무손실 WAV를 MP3로 변환합니다.' },
        { href: '/ko/mp3-to-wav', label: 'MP3를 WAV로', desc: '반대 방향. MP3를 비압축 WAV로 펼칩니다.' },
        { href: '/ko/flac-to-text', label: 'FLAC을 텍스트로', desc: 'FLAC 오디오를 텍스트로 직접 전사합니다.' },
        { href: '/ko/how-to-compress-audio', label: '오디오 압축', desc: 'MP3가 여전히 더 작아야 한다면.' },
      ]}
    />
  )
}
