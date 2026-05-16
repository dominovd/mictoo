import ComparisonLayout from '@/components/ComparisonLayout'

const LANGS = {
  'en': 'https://mictoo.com/turboscribe-alternative',
  'fr': 'https://mictoo.com/fr/turboscribe-alternative',
  'de': 'https://mictoo.com/de/turboscribe-alternative',
  'es': 'https://mictoo.com/es/turboscribe-alternative',
  'ru': 'https://mictoo.com/ru/turboscribe-alternative',
  'it': 'https://mictoo.com/it/turboscribe-alternative',
  'pt': 'https://mictoo.com/pt/turboscribe-alternative',
  'pl': 'https://mictoo.com/pl/turboscribe-alternative',
  'ja': 'https://mictoo.com/ja/turboscribe-alternative',
  'ko': 'https://mictoo.com/ko/turboscribe-alternative',
  'x-default': 'https://mictoo.com/turboscribe-alternative',
}

export const metadata = {
  title: 'TurboScribe 대안 — 가입 불필요 Whisper 무료 받아쓰기 | Mictoo',
  description: 'TurboScribe는 Whisper 기반 인기 도구이지만 계정이 필요하고 무료 사용자를 하루 30분으로 제한합니다. Mictoo는 AI 요약 내장으로 완전 가입 불필요.',
  alternates: { canonical: 'https://mictoo.com/ko/turboscribe-alternative', languages: LANGS },
}

export default function KoTurboScribeAlternativePage() {
  return (
    <ComparisonLayout
      badge="비교 · TurboScribe · 무료"
      h1={<>TurboScribe 대안<br /><span className="text-brand-600">같은 Whisper, 가입 불필요</span></>}
      subtitle="TurboScribe와 Mictoo 모두 OpenAI Whisper를 사용하므로 받아쓰기 품질이 거의 동일합니다. 주요 차이점은 가입, 파일 제한 및 AI 요약 내장입니다."
      competitorName="TurboScribe"
      rows={[
        { label: '무료 플랜',           mictoo: '월간 제한 없음, 파일당 25MB', them: '하루 3파일, 각 30분' },
        { label: '계정 필수',           mictoo: '아니요', them: '예 (이메일 가입)' },
        { label: '유료 플랜',           mictoo: '무료',  them: '$20 / 월 무제한' },
        { label: '파일 크기 (무료)',     mictoo: '파일당 25MB', them: '파일당 ~150MB / 30분' },
        { label: '파일 크기 (유료)',     mictoo: '무료와 동일', them: '파일당 5GB / 10시간' },
        { label: '배치 업로드',         mictoo: '아니요', them: '예 (유료, 최대 50파일)' },
        { label: '받아쓰기 모델',       mictoo: 'OpenAI Whisper', them: 'OpenAI Whisper' },
        { label: 'AI 요약',             mictoo: '예, 무료', them: '예 (유료)' },
        { label: 'SRT 내보내기',        mictoo: '예, 무료', them: '예' },
        { label: '받아쓰기 기록',       mictoo: '아니요', them: '예 (계정 기반)' },
      ]}
      whyMictoo={[
        { icon: '🆓', title: '진정한 가입 불필요', desc: 'TurboScribe는 무료 플랜에서도 이메일이 필요합니다. Mictoo는 아무것도 요구하지 않습니다 — 파일을 업로드하고 텍스트를 받으세요. 또 다른 계정을 만들고 싶지 않을 때 일회성 녹음에 유용합니다.' },
        { icon: '✨', title: '무료 플랜에서 AI 요약', desc: 'Mictoo는 각 받아쓰기 후 자동으로 2-3 문장 요약, 핵심 포인트 및 액션 아이템을 생성합니다. TurboScribe는 AI 요약을 월 $20 페이월 뒤에 둡니다.' },
        { icon: '🔒', title: '아무것도 저장되지 않음', desc: '받아쓰기 기록 없음, 클라우드 워크스페이스 없음, 프로젝트 없음. 오디오는 Whisper로 전송되어 즉시 폐기됩니다. TurboScribe는 받아쓰기를 계정에 저장합니다.' },
      ]}
      whenToChoose={{
        mictoo: [
          '제로 가입 마찰을 원함',
          '무료 플랜에서 AI 요약이 필요함',
          '파일이 25MB 이하(또는 압축 가능)',
          '저장된 기록이 없는 것을 가치 있게 여김',
        ],
        them: [
          '무료 플랜에서 25MB보다 큰 파일이 필요함',
          '모든 이전 받아쓰기의 기록을 원함',
          '한 번에 여러 파일을 업로드(배치)해야 함',
          '무제한 큰 파일을 위해 월 $20를 지불할 수 있음',
        ],
      }}
      faq={[
        { q: '받아쓰기 품질이 같나요?', a: '본질적으로 네. 두 도구 모두 OpenAI의 Whisper 모델을 사용합니다. 차이는 각 도구가 오디오를 세그먼트화하고 엣지 케이스를 처리하는 방식에서 비롯되지만 기본 정확도는 비교 가능합니다.' },
        { q: '왜 Mictoo는 파일 제한이 더 작나요?', a: '25MB 제한은 OpenAI의 Whisper API에서 옵니다. TurboScribe는 서버에서 파일을 분할하고 결과를 결합하여 더 큰 파일을 처리합니다. 동일한 접근 방식을 작업 중입니다.' },
        { q: 'Mictoo에서 긴 파일을 받아쓰기할 수 있나요?', a: '지금은 파일이 25MB 이하여야 합니다. 사이트의 how-to-compress-audio 가이드에서 세 가지 빠른 방법을 설명합니다: 오디오 추출, 비트레이트 낮추기 또는 세그먼트로 분할.' },
        { q: 'Mictoo가 계정/기록을 추가할 계획이 있나요?', a: '로컬 기록(브라우저에 저장, 서버 계정 없음)은 로드맵에 있습니다. 가입을 통한 클라우드 기록은 의도적으로 제품에 없습니다 — 가입 불필요 포지셔닝과 충돌합니다.' },
        { q: '어느 것이 더 빠른가요?', a: 'TurboScribe는 ~30분 처리를 1분 미만으로 광고합니다. Mictoo는 비슷합니다 — 대부분의 파일이 15-30초 만에 받아쓰기됩니다. 25분 미만의 파일에서는 둘 다 거의 즉각적으로 느껴집니다.' },
      ]}
      relatedLinks={[
        { href: '/ko/descript-alternative', label: 'Descript 대안' },
        { href: '/ko/notta-alternative', label: 'Notta 대안' },
        { href: '/ko', label: 'Mictoo 사용해보기' },
      ]}
    />
  )
}
