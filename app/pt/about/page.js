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
  'x-default': 'https://mictoo.com/about',
}

export const metadata = {
  title: 'Sobre — Mictoo',
  description: 'Informações sobre o Mictoo, a ferramenta gratuita de transcrição de áudio e vídeo com IA.',
  alternates: { canonical: 'https://mictoo.com/pt/about', languages: LOCALE_ALTERNATES },
}

export default function PtAboutPage() {
  return (
    <AboutLayout
      strings={{
        h1: 'Sobre o Mictoo',
        lead: 'O Mictoo é uma ferramenta gratuita de transcrição de áudio e vídeo, sem cadastro, feita para quem precisa converter fala em texto rapidamente e com precisão.',
        ourWhy: 'Criamos o Mictoo porque uma boa transcrição não deveria exigir assinatura, conta ou conhecimento técnico. Envie seu arquivo, receba o texto. Simples assim.',
        whatPowersHeading: 'O que move o Mictoo?',
        whatPowersBody: 'O Mictoo é movido pelo Whisper da OpenAI — o mesmo modelo de reconhecimento de voz usado no ChatGPT, treinado em 680.000 horas de áudio multilíngue. Ele suporta mais de 50 idiomas com detecção automática e é amplamente considerado um dos modelos de transcrição mais precisos disponíveis. O Mictoo executa o Whisper através da API da Groq (hospedada nos EUA, modelo whisper-large-v3) por velocidade e eficiência de custo, com a API Whisper da OpenAI como fallback automático. Os arquivos são enviados diretamente ao provedor de transcrição e nunca armazenados nos servidores do Mictoo; nem a Groq nem a OpenAI usam dados de API para treinar modelos, e a OpenAI retém dados de API apenas por no máximo 30 dias de monitoramento anti-abuso antes da exclusão.',
        principlesHeading: 'Nossos princípios',
        principles: [
          { label: 'Grátis.', body: 'Sem custos ocultos, sem períodos de teste, sem cartão de crédito.' },
          { label: 'Privado.', body: 'Seus arquivos nunca são armazenados. São processados e descartados imediatamente.' },
          { label: 'Simples.', body: 'Uma página, uma ferramenta, zero atrito.' },
          { label: 'Preciso.', body: 'Usamos o melhor modelo de IA disponível para qualidade de transcrição.' },
        ],
        contactHeading: 'Fale conosco',
        contactPrefix: 'Tem feedback, sugestão ou dúvida?',
        contactLinkLabel: 'Escreva pra gente',
        contactSuffix: ' — respondemos pessoalmente.',
      }}
    />
  )
}
