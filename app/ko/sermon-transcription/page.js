import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/sermon-transcription',
  'fr': 'https://mictoo.com/fr/sermon-transcription',
  'de': 'https://mictoo.com/de/sermon-transcription',
  'es': 'https://mictoo.com/es/sermon-transcription',
  'ru': 'https://mictoo.com/ru/sermon-transcription',
  'it': 'https://mictoo.com/it/sermon-transcription',
  'pt': 'https://mictoo.com/pt/sermon-transcription',
  'pl': 'https://mictoo.com/pl/sermon-transcription',
  'ja': 'https://mictoo.com/ja/sermon-transcription',
  'ko': 'https://mictoo.com/ko/sermon-transcription',
  'x-default': 'https://mictoo.com/sermon-transcription',
}

export const metadata = {
  title: '설교 받아쓰기 — 무료 설교 받아쓰기 생성기 | Mictoo',
  description: '설교와 교회 오디오를 텍스트로 무료로 받아쓰기. 블로그, 학습 노트, 접근성에 이상적. MP3, MP4, M4A 지원. 가입 불필요.',
  alternates: { canonical: 'https://mictoo.com/ko/sermon-transcription', languages: LANGS },
}

export default function KoSermonPage() {
  return (
    <LandingLayout
      badge="설교 · 교회 · 무료"
      h1={<>설교 받아쓰기<br /><span className="text-brand-600">무료 받아쓰기 생성기</span></>}
      subtitle="설교 녹음을 몇 초 만에 깨끗한 텍스트로 변환. 교회 블로그, 학습 가이드, SNS 게시물, 청각 장애인을 위한 접근성에 이상적."
      defaultLanguage="ko"
      features={[
        { icon: '📖', title: '모든 설교를 재사용', desc: '설교를 블로그 게시물, 묵상, 뉴스레터, 학습 가이드, SNS 인용구로 변환. 추가 작업 없이 도달 범위를 두 배로 늘리세요.' },
        { icon: '♿', title: '접근성', desc: '청각 장애인, 난청자 또는 원격 참가자가 메시지를 충분히 받을 수 있도록 받아쓰기를 제공합니다.' },
        { icon: '🌐', title: '다국어 지원', desc: '한국어, 영어, 스페인어, 포르투갈어, 일본어, 프랑스어, 러시아어 등 45개 이상의 언어를 지원합니다. 다국어 신도를 위해 이상적.' },
      ]}
      faq={[
        { q: '설교 녹음을 텍스트로 변환하는 방법은?', a: '교회 음향 콘솔, 팟캐스트 피드 또는 YouTube에서 MP3, MP4 또는 M4A로 내보냅니다. 위에 파일을 업로드하면 Mictoo가 몇 초 만에 받아쓰기를 수행합니다.' },
        { q: '교회 YouTube 채널에서 설교를 받아쓰기할 수 있나요?', a: '네. 자신의 채널의 경우: YouTube Studio → 콘텐츠 → 비디오 클릭 → 다운로드. Mictoo에 파일을 업로드하세요. 제3자 채널의 경우 허가가 필요합니다 — 많은 사역에서 팟캐스트 피드를 통해 오디오 다운로드를 제공합니다.' },
        { q: '성경 구절과 고유 명사는 어떻습니까?', a: 'AI 받아쓰기는 일반적인 구절과 이름을 잘 처리하지만 때때로 희귀한 성경 이름이나 교회 특정 용어를 잘못 표기합니다. 다운로드 전 브라우저 편집기에서 수정하세요 — 보통 30초 검토.' },
        { q: '설교의 최대 길이는?', a: '파일당 최대 25MB. 128 kbps의 30분 설교는 편안하게 들어맞습니다. 더 긴 메시지(45-60분)의 경우 비트레이트를 64 kbps 모노로 낮추거나 두 부분으로 분할하세요.' },
        { q: '파일이 비공개로 유지되나요?', a: '네. 설교는 처리된 후 즉시 삭제됩니다. 오디오나 받아쓰기 내용을 저장하지 않습니다.' },
      ]}
      relatedLinks={[
        { href: '/ko/podcast-transcription', label: '팟캐스트 받아쓰기' },
        { href: '/ko/lecture-transcription', label: '강의 받아쓰기' },
        { href: '/ko', label: '모든 포맷' },
      ]}
    />
  )
}
