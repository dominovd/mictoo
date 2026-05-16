import ContactLayout from '@/components/ContactLayout'

const LOCALE_ALTERNATES = {
  'en': 'https://mictoo.com/contact',
  'fr': 'https://mictoo.com/fr/contact',
  'de': 'https://mictoo.com/de/contact',
  'es': 'https://mictoo.com/es/contact',
  'ru': 'https://mictoo.com/ru/contact',
  'it': 'https://mictoo.com/it/contact',
  'pt': 'https://mictoo.com/pt/contact',
  'pl': 'https://mictoo.com/pl/contact',
  'ja': 'https://mictoo.com/ja/contact',
  'ko': 'https://mictoo.com/ko/contact',
  'x-default': 'https://mictoo.com/contact',
}

export const metadata = {
  title: '문의 — Mictoo',
  description: '피드백, 기능 요청 또는 질문이 있으면 Mictoo 팀에 문의하세요.',
  alternates: { canonical: 'https://mictoo.com/ko/contact', languages: LOCALE_ALTERNATES },
}

export default function KoContactPage() {
  return (
    <ContactLayout
      strings={{
        h1: '문의',
        lead: '피드백, 기능 요청 또는 파일 관련 문제가 있으신가요? 언제든 듣겠습니다.',
        emailHeading: '이메일',
        emailNote: '보통 1-2영업일 이내에 답변드립니다.',
        topicsHeading: '다루는 주제',
        topics: [
          '기술적 문제 (받아쓰기 작동 안 함, 지원 포맷 등)',
          '기능 요청 및 제안',
          '개인정보 및 데이터 처리',
          '협업 및 파트너십',
          '언론 및 미디어',
        ],
      }}
    />
  )
}
