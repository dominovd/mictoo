import LandingLayout from '@/components/LandingLayout'
import ConverterZone from '@/components/ConverterZone'

const LANGS = {
  'en': 'https://mictoo.com/mp3-to-wav',
  'fr': 'https://mictoo.com/fr/mp3-to-wav',
  'de': 'https://mictoo.com/de/mp3-to-wav',
  'es': 'https://mictoo.com/es/mp3-to-wav',
  'ru': 'https://mictoo.com/ru/mp3-to-wav',
  'it': 'https://mictoo.com/it/mp3-to-wav',
  'pt': 'https://mictoo.com/pt/mp3-to-wav',
  'pl': 'https://mictoo.com/pl/mp3-to-wav',
  'ja': 'https://mictoo.com/ja/mp3-to-wav',
  'ko': 'https://mictoo.com/ko/mp3-to-wav',
  'x-default': 'https://mictoo.com/mp3-to-wav',
}

export const metadata = {
  title: 'MP3를 WAV로 — 무료 온라인 변환기 | Mictoo',
  description:
    'MP3를 WAV로 무료 온라인 변환합니다. 압축된 MP3를 오디오 편집용 비압축 16비트/44.1 kHz WAV로 펼칩니다. 가입 없이, 워터마크 없음.',
  alternates: { canonical: 'https://mictoo.com/ko/mp3-to-wav', languages: LANGS },
}

export default function KoMp3ToWavPage() {
  return (
    <LandingLayout
      defaultLanguage="ko"
      badge="MP3 → WAV · 무료 · 가입 없이"
      h1={<>MP3를 WAV로<br /><span className="text-brand-600">무료 온라인 변환기</span></>}
      subtitle="MP3를 드롭하세요. 오디오 편집 소프트웨어에 바로 쓸 수 있는 16비트/44.1 kHz PCM WAV를 얻습니다. 워터마크 없음, 이메일 불필요."
      tool={<ConverterZone from="mp3" to="wav" />}
      howItWorks={[
        { icon: '📂', title: 'MP3를 드롭', desc: 'MP3를 박스에 드래그하세요. 25 MB까지 익명, 60 MB는 가입 후.' },
        { icon: '⚡', title: 'ffmpeg가 PCM으로 디코딩', desc: '16비트 PCM, 44.1 kHz, 소스 채널 레이아웃 유지. 일반 파일에 몇 초.' },
        { icon: '⬇️', title: 'WAV를 다운로드', desc: 'WAV는 비압축이므로 MP3의 약 10배 크기입니다. 1시간 이내에 서버에서 제거됩니다.' },
      ]}
      whyUse={{ title: 'MP3를 WAV로 변환하는 이유', bullets: [
        { title: '오디오 편집기는 WAV를 선호', desc: 'Audacity, Adobe Audition, Logic, Pro Tools, 모두 MP3를 열지만 대부분의 작업 (정밀 편집, 이펙트 적용, 노멀라이즈)은 WAV에서 더 잘 됩니다. 먼저 변환해두면 반복 MP3 인코딩의 미세한 품질 손실을 피할 수 있습니다.' },
        { title: '편집 시 추가 품질 손실 없음', desc: '각 MP3 재인코딩은 오디오를 약간씩 저하시킵니다. WAV로 변환, 편집, 마지막에 MP3로 내보내기. 이 한 번의 왕복이 최선입니다.' },
        { title: '일부 레거시 하드웨어와 소프트웨어에 필수', desc: '일부 오래된 CD 굽기 소프트웨어, 샘플러, 녹음 장비는 WAV만 읽습니다. 변환이 다리가 됩니다.' },
        { title: '포렌식과 방송 용도', desc: '포렌식 오디오 분석과 방송 워크플로는 포맷이 잘 이해되고 비압축이기 때문에 전통적으로 WAV를 씁니다. MP3는 소스 자료로는 허용되지만 작업 포맷은 WAV입니다.' },
        { title: '워터마크 없음, 업셀 없음', desc: 'WAV 컨테이너에 디코딩된 오디오뿐입니다. 아무것도 추가하지 않습니다.' },
      ]}}
      useCases={{ title: 'MP3를 WAV로 변환하고 싶을 때', items: [
        { title: 'Audacity, Reaper, Logic에서 오디오 편집', desc: '먼저 WAV로 변환한 후 이펙트 적용, 잘라내기, 노멀라이즈, 믹스를 합니다. 작은 배포 파일이 필요하면 마지막에 MP3로 다시 내보내세요.' },
        { title: 'LP나 CD용 마스터링', desc: 'LP 커팅과 CD 프레싱 모두 무손실 오디오를 원합니다. 소스가 MP3뿐이라면 WAV로 변환해서 마스터링 엔지니어가 작업할 자료를 주세요. 다만 오디오 품질은 MP3 소스로 제한됩니다.' },
        { title: '샘플러용 샘플 준비', desc: '하드웨어 샘플러 (Akai, Korg)는 종종 특정 비트 깊이와 샘플 레이트의 WAV 파일을 원합니다.' },
        { title: '비디오용 보이스오버 작업', desc: '일부 비디오 편집기 (DaVinci, Premiere)는 MP3를 잘 다루지만 WAV에서 더 나은 파형을 보여주고 이펙트를 더 깔끔하게 적용합니다.' },
        { title: '포렌식이나 전사 분석', desc: '일부 전문 분석 도구는 WAV 입력이 필요합니다.' },
      ]}}
      proTips={{ title: 'MP3 → WAV 변환 팁', tips: [
        { title: 'WAV는 MP3의 10배 크기가 됨', desc: '5 MB MP3는 16비트/44.1 kHz WAV로 대략 50 MB로 펼쳐집니다. 변환은 손실된 품질을 복원하지 않습니다. 작업 가능한 포맷을 줄 뿐입니다.' },
        { title: 'WAV 품질은 MP3에 의해 한정됨', desc: '128 kbps MP3를 WAV로 변환해서 CD 음질로 만들 수는 없습니다. WAV는 기존 오디오를 추가 압축 손실 없이 편집할 수 있게 할 뿐입니다.' },
        { title: '더 높은 충실도가 필요하면 원본을 요청하세요', desc: '진지한 마스터링이나 복원을 한다면 소스에서 무손실 원본 (WAV, FLAC, ALAC)을 받으세요. MP3 → WAV는 우회책이지 업그레이드가 아닙니다.' },
        { title: '하드웨어에는 샘플 레이트가 중요', desc: '대부분의 하드웨어는 44.1 kHz (CD)나 48 kHz (비디오)를 원합니다. Mictoo의 변환기는 항상 44.1로 출력합니다. 48이 필요하면 Audacity에서 WAV를 열어 리샘플하세요.' },
        { title: '24비트 WAV는 Audacity 사용', desc: 'Mictoo의 변환기는 16비트 WAV를 출력합니다. 24비트가 필요하면 결과 WAV를 Audacity에서 열어 24비트 float으로 다시 내보내세요. 소스 오디오가 16비트 등가일지라도 추가 비트 깊이는 편집 헤드룸을 줍니다.' },
        { title: '모노 입력, 모노 출력 — 공간 절약', desc: 'MP3가 모노라면 WAV도 모노가 됩니다. 스테레오 변환의 절반 크기입니다. 소스 채널 레이아웃을 유지합니다.' },
      ]}}
      faq={[
        { q: 'MP3 → WAV 변환이 정말 무료인가요', a: '예. 25 MB까지 계정 불필요, 워터마크 없음, 시간 제한 없음.' },
        { q: '왜 WAV가 MP3보다 그렇게 큰가요', a: 'MP3는 귀가 거의 알아차리지 못하는 오디오 데이터를 지각적 압축으로 버립니다. WAV는 모든 샘플을 풀 정밀도로 저장합니다. 일반 MP3는 WAV 등가의 10분의 1 크기입니다.' },
        { q: 'WAV가 MP3보다 좋게 들리나요', a: '아니요. MP3는 원래 인코딩 중에 이미 데이터를 잃었습니다. WAV는 오디오를 있는 그대로 보존하지만 품질을 복원하지는 않습니다.' },
        { q: '어떤 WAV 포맷으로 출력하나요', a: '16비트 PCM, 44.1 kHz, 소스 채널 레이아웃 유지 (모노 입력은 모노 출력, 스테레오 입력은 스테레오 출력).' },
        { q: '얼마나 걸리나요', a: '몇 초입니다. MP3 디코딩은 빠릅니다.' },
        { q: '24비트나 32비트 float WAV를 얻을 수 있나요', a: '이 변환기로는 안 됩니다. Mictoo의 16비트 WAV를 Audacity에서 열어 원하는 비트 깊이로 다시 내보내세요. MP3로 소스 오디오 정밀도가 제한되어도 추가 비트는 편집 헤드룸을 줍니다.' },
        { q: '파일을 보관하나요', a: '아니요. 업로드는 변환 후 삭제됩니다. 출력은 1시간 이내에 제거됩니다.' },
        { q: '일괄 변환이 되나요', a: '무료 단계에서는 아직 안 됩니다. 여러 브라우저 탭을 여세요.' },
        { q: '48 kHz 샘플 레이트는 어떻게 하나요', a: 'Mictoo는 44.1 kHz (CD 레이트)로 출력합니다. 48 kHz (비디오 작업)가 필요하면 변환 후 Audacity에서 WAV를 리샘플하세요.' },
        { q: '왜 변환이라도 하나요', a: '주로 오디오 편집을 위해서입니다. Audacity, Pro Tools, Logic, 모두 MP3보다 WAV에서 더 잘 작동합니다. 특히 반복 편집에서요.' },
        { q: '일부 MP3에서 변환이 실패하나요', a: '드뭅니다. ffmpeg는 사실상 모든 표준 MP3를 디코딩합니다. 정말로 손상된 파일은 실패할 수 있지만, 그 외에는 안정적입니다.' },
        { q: '두 파일을 다 보관해야 하나요', a: '편집에는 WAV로 작업하세요. 배포에는 MP3도 보관하세요. 편집이 끝나면 체인의 끝에서 WAV로부터 새 MP3로 다시 내보내세요.' },
      ]}
      relatedLinks={[
        { href: '/ko/wav-to-mp3', label: 'WAV를 MP3로', desc: '반대 방향의 변환.' },
        { href: '/ko/flac-to-mp3', label: 'FLAC을 MP3로', desc: '무손실 FLAC을 휴대용 MP3로.' },
        { href: '/ko/wav-to-text', label: 'WAV를 텍스트로', desc: 'WAV 오디오를 직접 전사합니다.' },
        { href: '/ko/how-to-compress-audio', label: '오디오 압축', desc: '더 작아져야 하는 파일에.' },
      ]}
    />
  )
}
