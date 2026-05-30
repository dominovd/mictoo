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
  description:
    'Mictoo 문의. info@mictoo.com은 실제 사람의 받은편지함으로 갑니다. 1영업일 이내 응답. 지원 범위, 비즈니스 문의, FAQ 단축키.',
  alternates: { canonical: 'https://mictoo.com/ko/contact', languages: LOCALE_ALTERNATES },

  openGraph: {
    title: "문의 — Mictoo",
    description: "Mictoo 문의. info@mictoo.com은 실제 사람의 받은편지함으로 갑니다. 1영업일 이내 응답. 지원 범위, 비즈니스 문의, FAQ 단축키.",
    url: "https://mictoo.com/ko/contact",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "문의 — Mictoo",
    description: "Mictoo 문의. info@mictoo.com은 실제 사람의 받은편지함으로 갑니다. 1영업일 이내 응답. 지원 범위, 비즈니스 문의, FAQ 단축키.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function KoContactPage() {
  return (
    <ContactLayout
      privacyHref="/ko/privacy"
      strings={{
        h1: '문의하기',
        lead:
          '질문, 피드백 또는 기능 요청이 있으신가요? 듣게 되어 기쁩니다. 모든 메시지를 읽고 1영업일 이내에 답변합니다.',
        privacyPrefix: '개인정보 관련 질문은',
        privacyLinkLabel: '개인정보 보호 정책',
        privacySuffix: '을 참조하세요.',

        responseTimeHeading: '응답 시간',
        responseTimeBody:
          'info@mictoo.com은 티켓 시스템이 아닌 실제 사람의 받은편지함으로 갑니다. 월요일부터 금요일까지 중부 유럽 시간으로 응답하며, 보통 1영업일 이내. 금요일 저녁에 작성하면 월요일에 응답을 기대하세요. 24/7 지원이 아니며 그런 척하지 않습니다.',

        supportScopeHeading: '도움드릴 수 있는 것',
        supportScopeItems: [
          { label: '버그 보고.', body: '업로더의 깨진 무언가, 혼란스러운 받아쓰기, 비디오 에디터에서 작동하지 않는 SRT. 가능하면 파일 이름과 업로드 시간을 알려주세요.' },
          { label: '기능 요청.', body: 'Mictoo가 무엇을 하기를 원하는지 알려주세요. 약속은 없지만 실제로 읽고 사용자가 요청한 기능을 제공해왔습니다.' },
          { label: '받아쓰기 품질 질문.', body: '특정 파일이 나쁜 정확도로 돌아왔다면, 보내거나(또는 설명) 녹음 문제인지 모델 문제인지 진단을 돕습니다.' },
          { label: '계정 또는 청구.', body: '무료 계층에는 청구가 없습니다. Pro 플랜(출시 시) 청구 질문도 여기로 옵니다.' },
          { label: '파트너십과 통합.', body: 'Mictoo를 자신의 제품에 통합하거나 보완적인 것을 구축하고 싶다면 대화에 열려 있습니다.' },
        ],

        faqShortcutHeading: '이메일보다 빠름',
        faqShortcutBody: [
          '질문이 일반적인 것 중 하나라면, 적절한 랜딩의 FAQ가 이미 답을 가지고 있을 가능성. 빠른 링크: 가격, 파일 크기 및 길이 제한, 지원 포맷, 개인정보 질문은 각 랜딩 하단에서 답변됩니다(예: 오디오를 텍스트로 페이지).',
          '그 외 모든 것에는 이메일이 올바른 채널.',
        ],

        businessHeading: '비즈니스와 언론 문의',
        businessBody: [
          '같은 이메일: info@mictoo.com. 제목에 [Press] 또는 [Business]를 사용하여 메시지를 적절히 라우팅. 인디 SEO와 생산성 공간의 AI 도구에 대한 인터뷰에 열려 있지만, 유료 배치나 후원 콘텐츠는 하지 않습니다.',
          '받아쓰기 도구나 생산성 소프트웨어의 AI에 대해 쓰는 기자라면, Mictoo가 내부적으로 어떻게 작동하는지, 운영에 얼마나 드는지, 경쟁사에 대해 어떻게 생각하는지 직접적인 답변을 드립니다.',
        ],

        languagesHeading: '언어',
        languagesBody:
          '영어로 지원 제공. 한국어, 러시아어, 스페인어 응답은 최선의 노력. 다른 언어로 작성하면 팀에서 유창한 화자를 찾지 못하는 한 영어로 답변합니다.',
      }}
    />
  )
}
