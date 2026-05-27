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
  title: 'Sobre o Mictoo — ferramenta grátis de transcrição IA',
  description:
    'Quem está por trás do Mictoo, uma ferramenta grátis de transcrição de áudio e vídeo com IA. Como funciona, como ganhamos dinheiro, e o que fazemos (e não fazemos) com seus arquivos.',
  alternates: { canonical: 'https://mictoo.com/pt/about', languages: LOCALE_ALTERNATES },
}

export default function PtAboutPage() {
  return (
    <AboutLayout
      contactHref="/pt/contact"
      strings={{
        h1: 'Sobre o Mictoo',
        lead:
          'O Mictoo é uma ferramenta grátis de transcrição de áudio e vídeo sem cadastro, feita para quem precisa transformar fala em texto rápido e com precisão.',
        ourWhy:
          'Construímos o Mictoo porque transcrição boa não deveria exigir assinatura, conta ou habilidade técnica. Solte o arquivo, receba o texto. Fim.',

        whoBuiltHeading: 'Quem está por trás do Mictoo',
        whoBuiltBody: [
          'O Mictoo é um projeto indie, construído e operado por um time pequeno que passou os últimos dez anos trabalhando em SEO, conteúdo e ferramentas para devs. Não somos uma startup VC-financiada atrás de um bilhão de usuários. Também não somos side project de um gigante de transcrição tentando ganhar o segmento free tier. Somos pessoas que usam ferramentas de transcrição e cansaram de toda opção ser fechada, lenta ou hostil ao usuário.',
          'Se você quer alcançar diretamente as pessoas por trás do site, o email no fim desta página chega numa caixa humana real. Toda mensagem é lida.',
        ],

        whatPowersHeading: 'O que move o Mictoo',
        whatPowersBody:
          'O Mictoo roda no Whisper da OpenAI, o mesmo modelo de reconhecimento de fala usado no ChatGPT. O Whisper large-v3 foi treinado em 680.000 horas de áudio multilíngue. Suporta mais de 50 idiomas com detecção automática e é considerado o modelo aberto mais forte de reconhecimento de fala disponível. Executamos o Whisper através da API da Groq hospedada nos EUA (whisper-large-v3) por velocidade e eficiência de custo, com a API Whisper da OpenAI como fallback automático se a Groq não estiver disponível. Os arquivos são enviados direto ao provedor de transcrição e nunca guardados nos servidores do Mictoo. Nem Groq nem OpenAI usam áudio de API para treinar modelos, e a OpenAI retém dados de API no máximo 30 dias para monitoramento anti-abuso antes de excluir.',

        securityHeading: 'Segurança e o que acontece com seu arquivo',
        securityBody: [
          'Seu arquivo de áudio ou vídeo é enviado ao Vercel Blob Storage, encaminhado ao provedor de transcrição, transcrito e excluído. Toda a volta leva menos de um minuto para a maioria dos arquivos, e no fim não há cópia do seu arquivo na nossa infraestrutura.',
          'Também não guardamos sua transcrição. Ela vive na aba do navegador. Se quiser manter, clique no botão de download. Quando você fecha a aba, não temos registro do que você transcreveu. A única coisa que logamos é um contador anônimo de quantos arquivos foram processados, para rastrear uso e pagar nossos provedores.',
          'Se você estiver logado (grátis, opcional), mantemos um pequeno histórico das suas transcrições passadas na sua conta, para você reabrir. Transcrição anônima não mantém histórico.',
        ],

        moneyHeading: 'Como ganhamos dinheiro',
        moneyBody: [
          'O Mictoo se financia com publicidade display. Aplicamos no Google AdSense e planejamos mostrar anúncios nas páginas de marketing (não no fluxo real da ferramenta). Os anúncios cobrem nossas contas de hosting e API.',
          'Além de anúncios, estamos construindo um pequeno plano Pro para usuários que precisam de arquivos mais longos, upload em lote ou diarização de orador, assim que conseguirmos entregar. O free tier não vai sumir. O free tier existe porque a maioria das pessoas precisa transcrever um arquivo de vez em quando, e não deveria precisar pagar uma assinatura mensal para isso.',
          'Não vendemos seus dados. Não temos dados para vender, porque não guardamos seus arquivos nem suas transcrições. A única coisa que terceiros veem sobre você é targeting publicitário padrão (localização, interesses gerais) que o AdSense gerencia no lado Google.',
        ],

        principlesHeading: 'Nossos princípios',
        principles: [
          { label: 'Grátis.', body: 'Sem custo oculto, sem teste, sem cartão de crédito para a ferramenta principal.' },
          { label: 'Privado.', body: 'Seus arquivos nunca são guardados. São processados e excluídos imediatamente.' },
          { label: 'Simples.', body: 'Uma página, uma ferramenta, zero atrito.' },
          { label: 'Preciso.', body: 'Usamos o melhor modelo IA disponível para qualidade de transcrição.' },
        ],

        editorialHeading: 'O que não vamos fazer',
        editorialBullets: [
          { label: 'Sem dark patterns.', body: 'Sem timer countdown falso, sem "seu arquivo expira em 60 segundos, pague para baixar", sem muro de email no meio do fluxo de upload.' },
          { label: 'Sem bait-and-switch de preço.', body: 'O free tier é grátis de verdade. Não vamos restringir retroativamente funções que antes eram grátis.' },
          { label: 'Sem revenda de transcrições.', body: 'Não guardamos suas transcrições. Não temos uma licença de "dados de treino" escondida nos termos.' },
          { label: 'Sem redes de publicidade enganosas.', body: 'Usamos Google AdSense, não redes que trocam o UI do navegador ou sequestram o botão voltar.' },
          { label: 'Sem avaliações falsas.', body: 'Se você vê Mictoo num site de reviews, chegou lá organicamente. Não pagamos por placement nem escrevemos as próprias reviews.' },
        ],

        contactHeading: 'Contato',
        contactPrefix: 'Feedback, pedido de função ou pergunta?',
        contactCtaLabel: 'Fale conosco',
        contactSuffix: ' ou mande um email para',
      }}
    />
  )
}
