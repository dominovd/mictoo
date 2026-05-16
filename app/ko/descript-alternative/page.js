import ComparisonLayout from '@/components/ComparisonLayout'

const LANGS = {
  'en': 'https://mictoo.com/descript-alternative',
  'fr': 'https://mictoo.com/fr/descript-alternative',
  'de': 'https://mictoo.com/de/descript-alternative',
  'es': 'https://mictoo.com/es/descript-alternative',
  'ru': 'https://mictoo.com/ru/descript-alternative',
  'it': 'https://mictoo.com/it/descript-alternative',
  'pt': 'https://mictoo.com/pt/descript-alternative',
  'pl': 'https://mictoo.com/pl/descript-alternative',
  'ja': 'https://mictoo.com/ja/descript-alternative',
  'ko': 'https://mictoo.com/ko/descript-alternative',
  'x-default': 'https://mictoo.com/descript-alternative',
}

export const metadata = {
  title: 'Descript 대안 — 가입 불필요 무료 받아쓰기 | Mictoo',
  description: '받아쓰기 전용 Descript 대안을 찾고 계신가요? Mictoo는 OpenAI Whisper를 기반으로 한 가입 불필요 무료 AI 받아쓰기를 제공합니다. 편집기 없음, 구독 없음.',
  alternates: { canonical: 'https://mictoo.com/ko/descript-alternative', languages: LANGS },
}

export default function KoDescriptAlternativePage() {
  return (
    <ComparisonLayout
      badge="비교 · Descript · 무료"
      h1={<>Descript 대안<br /><span className="text-brand-600">편집기 없는 무료 받아쓰기</span></>}
      subtitle="Descript는 받아쓰기 기능이 있는 풀 오디오·비디오 편집기입니다. 받아쓰기 부분만 필요하다면 Mictoo는 OpenAI Whisper 기반의 가입 불필요 무료 옵션입니다."
      competitorName="Descript"
      rows={[
        { label: '무료 플랜',           mictoo: '월간 제한 없음, 파일당 25MB', them: '월 1시간 받아쓰기' },
        { label: '계정 필수',           mictoo: '아니요', them: '예 (이메일 가입)' },
        { label: '유료 플랜',           mictoo: '무료',  them: '$12-24 / 월' },
        { label: '오디오·비디오 편집기', mictoo: '아니요',  them: '예 (전체)' },
        { label: '받아쓰기 모델',       mictoo: 'OpenAI Whisper', them: '독자 + Whisper 옵션' },
        { label: 'AI 요약',             mictoo: '예, 무료', them: '예 (유료)' },
        { label: 'SRT 내보내기',        mictoo: '예, 무료', them: '예 (유료)' },
        { label: '화자 레이블',         mictoo: '수동 편집', them: '자동' },
        { label: '언어',               mictoo: '50개 이상', them: '20개 이상' },
      ]}
      whyMictoo={[
        { icon: '🆓', title: '무료, 가입 불필요', desc: '계정, 카드, 이메일 없이 파일을 업로드하고 받아쓰기를 받으세요. Descript는 무료 플랜에서도 가입이 필요합니다.' },
        { icon: '⚡', title: '일회성 작업에 더 빠름', desc: '설치할 앱 없음, 배울 편집기 없음. 한 페이지, 한 번의 드롭, 몇 초 만에 결과. 전체 제작이 아닌 빠른 받아쓰기를 위해 제작되었습니다.' },
        { icon: '🔒', title: '개인정보 우선', desc: '오디오는 OpenAI의 Whisper API로 직접 전송되며 Mictoo 서버에는 저장되지 않습니다. 프로젝트 없음, 클라우드 라이브러리 없음, 팀 공간 없음 — 설계상.' },
      ]}
      whenToChoose={{
        mictoo: [
          '받아쓰기만 필요하고 편집은 필요 없음',
          '가입 없이 무료 옵션을 원함',
          '일회성 인터뷰, 팟캐스트 또는 회의 받아쓰기',
          '데스크톱 앱이나 팀 공간을 원하지 않음',
        ],
        them: [
          '팟캐스트나 비디오를 제작하고 실제 편집기가 필요함',
          '"텍스트를 편집하여 오디오를 편집하는" 워크플로우를 원함',
          '매번 자동 화자 레이블이 필요함',
          '공유 프로젝트 라이브러리가 있는 팀에서 작업',
        ],
      }}
      faq={[
        { q: 'Mictoo가 Descript의 완전한 대체품인가요?', a: '편집의 경우 아닙니다. Descript는 받아쓰기 기능이 있는 오디오·비디오 편집기입니다 — Mictoo는 받아쓰기 부분만. 녹음에서 텍스트나 자막만 필요하다면 Mictoo는 해당 워크플로우를 무료로 대체합니다.' },
        { q: '받아쓰기 품질이 같나요?', a: '두 도구 모두 OpenAI Whisper를 사용할 수 있습니다. Mictoo는 Whisper만 사용하므로 정확도는 비슷합니다. Descript는 일부 플랜에서 추가 독자 모델을 제공합니다.' },
        { q: 'Mictoo에 화자 레이블이 있나요?', a: 'Mictoo는 무료 플랜에서 자동 레이블 없이 단일 받아쓰기를 반환합니다. 다운로드 전 브라우저 편집기에서 화자 1 / 화자 2를 수동으로 추가할 수 있습니다. Descript는 자동으로 레이블을 지정합니다.' },
        { q: 'Mictoo에서 받아쓰기를 편집할 수 있나요?', a: '네 — 받아쓰기는 편집 가능한 텍스트 필드에 나타납니다. 복사하거나 .txt 또는 .srt로 다운로드하기 전에 이름, 구두점 또는 단락을 수정할 수 있습니다.' },
        { q: 'Word 또는 DOCX로 내보내기는?', a: 'Mictoo는 현재 .txt와 .srt를 내보냅니다. 받아쓰기를 복사하여 Word에 붙여넣어 빠른 DOCX를 만드세요. 네이티브 DOCX 내보내기는 로드맵에 있습니다.' },
      ]}
      relatedLinks={[
        { href: '/ko/turboscribe-alternative', label: 'TurboScribe 대안' },
        { href: '/ko/otter-alternative', label: 'Otter 대안' },
        { href: '/ko/notta-alternative', label: 'Notta 대안' },
        { href: '/ko', label: 'Mictoo 사용해보기' },
      ]}
    />
  )
}
