import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/business-transcription',
  'fr': 'https://mictoo.com/fr/business-transcription',
  'de': 'https://mictoo.com/de/business-transcription',
  'es': 'https://mictoo.com/es/business-transcription',
  'ru': 'https://mictoo.com/ru/business-transcription',
  'it': 'https://mictoo.com/it/business-transcription',
  'pt': 'https://mictoo.com/pt/business-transcription',
  'pl': 'https://mictoo.com/pl/business-transcription',
  'ja': 'https://mictoo.com/ja/business-transcription',
  'ko': 'https://mictoo.com/ko/business-transcription',
  'x-default': 'https://mictoo.com/business-transcription',
}

export const metadata = {
  title: '비즈니스 받아쓰기 — 회의, 통화, 인터뷰를 텍스트로 | Mictoo',
  description: '회의, 고객 통화, 사용자 인터뷰 및 제품 데모를 위한 무료 비즈니스 받아쓰기. 가입 불필요. 오디오 또는 비디오, 최대 25MB.',
  alternates: { canonical: 'https://mictoo.com/ko/business-transcription', languages: LANGS },
}

export default function KoBusinessPage() {
  return (
    <LandingLayout
      badge="비즈니스 · 팀 · 무료"
      h1={<>비즈니스 받아쓰기<br /><span className="text-brand-600">회의, 통화, 인터뷰를 텍스트로</span></>}
      subtitle="회의, 고객 통화, 사용자 인터뷰 및 데모를 깨끗한 받아쓰기로 변환. Notion, Confluence, CRM 또는 보고서에 바로 사용 가능. 무료, 계정 불필요."
      defaultLanguage="ko"
      features={[
        { icon: '💼', title: '비즈니스 프로세스', desc: '팀 회의, 영업 통화, 사용자 연구, 후보자 인터뷰 — 오디오를 검색 가능하고 공유 가능한 텍스트로 변환.' },
        { icon: '📊', title: 'AI 요약 포함', desc: '받아쓰기 외에도 핵심 포인트와 액션 아이템이 포함된 AI 요약을 자동으로 받으세요. 보고서 또는 CRM에 바로 붙여넣을 수 있습니다.' },
        { icon: '🔒', title: '보안과 개인정보', desc: '파일은 처리된 후 즉시 삭제됩니다. 오디오 또는 받아쓰기를 서버에 저장하지 않습니다.' },
      ]}
      faq={[
        { q: 'Mictoo가 기밀 비즈니스 회의에 적합한가요?', a: '규제 콘텐츠(GDPR 민감 데이터)의 경우 외부 AI 서비스에 대한 회사 정책을 확인하세요. Mictoo는 파일을 저장하지 않지만 오디오는 AI 제공자를 거칩니다. 엄격하게 기밀인 오디오의 경우 온프레미스 솔루션을 고려하세요.' },
        { q: 'Zoom 또는 Teams 통화를 받아쓰기하는 방법은?', a: '플랫폼 내장 기능으로 통화를 녹음하고 MP4 또는 M4A 파일을 다운로드하여 Mictoo에 업로드합니다. 받아쓰기와 요약은 몇 초 만에 완성됩니다.' },
        { q: '화자 레이블(호스트, 클라이언트 등)을 받을 수 있나요?', a: '무료 플랜에서는 자동으로 받을 수 없습니다. 받아쓰기는 단일 텍스트 스트림입니다 — 레이블은 내보내기 전에 브라우저 편집기에서 수동으로 추가할 수 있습니다.' },
        { q: '다국어 회의에서 작동하나요?', a: 'Whisper는 자동 감지로 50개 이상의 언어를 지원합니다. 회의가 두 언어를 혼합하는 경우 파일을 분할하고 각 부분을 별도로 받아쓰기하면서 언어를 수동으로 설정하는 것이 가장 좋습니다.' },
        { q: '시간 제한은?', a: '파일당 최대 25MB. 1시간 이상의 회의의 경우 낮은 비트레이트 모노로 내보내거나 녹음을 분할하세요. how-to-compress-audio 가이드에서 세 가지 접근 방식을 설명합니다.' },
      ]}
      relatedLinks={[
        { href: '/ko/meeting-transcription', label: '회의 받아쓰기' },
        { href: '/ko/zoom-transcription', label: 'Zoom 받아쓰기' },
        { href: '/ko/interview-transcription', label: '인터뷰 받아쓰기' },
        { href: '/ko', label: '모든 포맷' },
      ]}
    />
  )
}
