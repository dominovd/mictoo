import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/voice-memo-to-text',
  'fr': 'https://mictoo.com/fr/voice-memo-to-text',
  'de': 'https://mictoo.com/de/voice-memo-to-text',
  'es': 'https://mictoo.com/es/voice-memo-to-text',
  'ru': 'https://mictoo.com/ru/voice-memo-to-text',
  'it': 'https://mictoo.com/it/voice-memo-to-text',
  'pt': 'https://mictoo.com/pt/voice-memo-to-text',
  'pl': 'https://mictoo.com/pl/voice-memo-to-text',
  'ja': 'https://mictoo.com/ja/voice-memo-to-text',
  'ko': 'https://mictoo.com/ko/voice-memo-to-text',
  'x-default': 'https://mictoo.com/voice-memo-to-text',
}

export const metadata = {
  title: '음성 메모를 텍스트로 — iPhone 음성 메모를 무료로 받아쓰기 | Mictoo',
  description: 'iPhone 음성 메모와 Android 녹음을 무료로 텍스트로 변환. M4A와 MP3 지원. 가입 불필요, 앱 불필요. 정확한 AI 받아쓰기.',
  alternates: { canonical: 'https://mictoo.com/ko/voice-memo-to-text', languages: LANGS },
}

export default function KoVoiceMemoPage() {
  return (
    <LandingLayout
      badge="iPhone · Android · 무료"
      h1={<>음성 메모를 텍스트로<br /><span className="text-brand-600">온라인 무료 받아쓰기</span></>}
      subtitle="iPhone 음성 메모 또는 Android 녹음을 업로드하고 몇 초 만에 정확한 받아쓰기를 받으세요. 가입 불필요, 설치할 앱 없음."
      defaultLanguage="ko"
      features={[
        { icon: '📱', title: 'iPhone과 Android', desc: 'iPhone 음성 메모는 .m4a로 내보냅니다 — 완벽 지원. Android 녹음기는 .m4a, .mp3 또는 .wav로 내보냅니다 — 모두 지원.' },
        { icon: '🧠', title: '노트와 아이디어에 이상적', desc: '음성 메모, 브레인스토밍 세션, 알림을 Notion, Obsidian 또는 좋아하는 편집기에 붙여넣을 수 있는 검색 가능한 텍스트로 변환.' },
        { icon: '🆓', title: '100% 무료', desc: '구독 없음, 앱 내 구매 없음, 워터마크 없음. 월간 제한 없음 — 받아쓰기가 필요할 때마다 메모를 업로드하세요.' },
      ]}
      faq={[
        { q: 'iPhone에서 PC로 음성 메모를 전송하는 방법은?', a: '음성 메모 앱 열기, 메모 탭 → "…" → "공유" → "파일에 저장" 또는 Mac으로 AirDrop. 그런 다음 PC의 Mictoo에 .m4a 파일을 업로드하세요.' },
        { q: 'iPhone에서 직접 받아쓰기할 수 있나요?', a: '네. iPhone의 Safari에서 mictoo.com을 열고 업로드 영역을 탭하여 파일 앱에서 음성 메모를 선택. 받아쓰기는 몇 초 만에 표시되며 .txt로 복사하거나 다운로드할 수 있습니다.' },
        { q: 'Android는 음성 녹음을 어떤 포맷으로 저장하나요?', a: '대부분의 Android 휴대폰은 녹음기 앱에 따라 .m4a 또는 .mp3로 저장합니다. 두 포맷 모두 지원됩니다. 일부 앱은 .amr을 사용합니다 — 무료 변환기로 먼저 .m4a로 변환하세요.' },
        { q: '음성 녹음이 비공개로 유지되나요?', a: '네. 파일은 받아쓰기 목적으로만 AI 엔진에 전송되며 서버에 저장되지 않습니다. 받아쓰기는 브라우저에 남아 있으며 당신의 것입니다.' },
        { q: '메모가 25MB를 초과하면?', a: 'iPhone 음성 메모는 기본 품질에서 분당 약 1MB — 25분이 25MB에 들어맞습니다. 더 긴 메모의 경우 설정 → 음성 메모에서 음성 메모 품질을 "압축됨"으로 변경하거나 녹음을 분할하세요.' },
      ]}
      relatedLinks={[
        { href: '/ko', label: '모든 포맷' },
        { href: '/ko/meeting-transcription', label: '회의 받아쓰기' },
        { href: '/ko/interview-transcription', label: '인터뷰 받아쓰기' },
      ]}
    />
  )
}
