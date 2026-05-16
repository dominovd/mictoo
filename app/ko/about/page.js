import AboutLayout from '@/components/AboutLayout'

const LOCALE_ALTERNATES = {
  'en': 'https://mictoo.com/about',
  'fr': 'https://mictoo.com/fr/about',
  'de': 'https://mictoo.com/de/about',
  'es': 'https://mictoo.com/es/about',
  'ru': 'https://mictoo.com/ru/about',
  'it': 'https://mictoo.com/it/about',
  'pt': 'https://mictoo.com/pt/about',
  'pl': 'https://mictoo.com/pl/about',
  'ja': 'https://mictoo.com/ja/about',
  'ko': 'https://mictoo.com/ko/about',
  'x-default': 'https://mictoo.com/about',
}

export const metadata = {
  title: '소개 — Mictoo',
  description: 'Mictoo는 AI 기반의 무료 오디오·비디오 받아쓰기 도구입니다.',
  alternates: { canonical: 'https://mictoo.com/ko/about', languages: LOCALE_ALTERNATES },
}

export default function KoAboutPage() {
  return (
    <AboutLayout
      strings={{
        h1: 'Mictoo 소개',
        lead: 'Mictoo는 가입이 필요 없는 무료 오디오·비디오 받아쓰기 도구로, 음성을 빠르고 정확하게 텍스트로 변환하고자 하는 모든 사람을 위해 만들어졌습니다.',
        ourWhy: '훌륭한 받아쓰기에 구독, 계정 또는 기술적 능력이 필요해서는 안 된다고 생각해 Mictoo를 만들었습니다. 파일을 업로드하고 텍스트를 받으세요. 그게 전부입니다.',
        whatPowersHeading: 'Mictoo의 작동 원리',
        whatPowersBody: 'Mictoo는 OpenAI의 Whisper를 사용합니다. 이는 ChatGPT에서 사용되는 것과 같은 음성 인식 모델로, 68만 시간의 다국어 오디오로 훈련되었으며 50개 이상의 언어 자동 감지를 지원하고 가장 정확한 받아쓰기 모델 중 하나로 널리 인정받고 있습니다. Mictoo는 속도와 비용 효율을 위해 Groq API(미국 호스팅, whisper-large-v3 모델)를 통해 Whisper를 실행하며, OpenAI의 Whisper API를 자동 폴백으로 사용합니다. 파일은 받아쓰기 제공자에게 직접 전송되며 Mictoo 서버에는 저장되지 않습니다. Groq도 OpenAI도 API 데이터를 모델 훈련에 사용하지 않으며, OpenAI는 부정 사용 모니터링을 위해 API 데이터를 최대 30일간 보관한 후 삭제합니다.',
        principlesHeading: '우리의 원칙',
        principles: [
          { label: '무료.', body: '숨겨진 비용, 체험 기간, 신용카드 모두 불필요.' },
          { label: '개인정보 보호.', body: '파일은 저장되지 않습니다. 처리된 후 즉시 삭제됩니다.' },
          { label: '단순.', body: '한 페이지, 한 도구, 마찰 제로.' },
          { label: '정확.', body: '받아쓰기 품질을 위해 사용 가능한 최고의 AI 모델을 사용합니다.' },
        ],
        contactHeading: '문의',
        contactPrefix: '피드백, 요청 또는 질문이 있으신가요?',
        contactLinkLabel: '문의하기',
        contactSuffix: ' — 직접 답변드립니다.',
      }}
    />
  )
}
