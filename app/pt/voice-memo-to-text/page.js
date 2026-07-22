import UseCaseLayout from '@/components/UseCaseLayout'

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
  title: 'Transcrição de Voz para Texto para iPhone e Android | Mictoo',
  description:
    'Carregue uma gravação de voz do iPhone ou Android e obtenha texto com timestamps, um resumo de IA e exportações editáveis.',
  alternates: {
    canonical: 'https://mictoo.com/pt/voice-memo-to-text',
    languages: LANGS,
  },
  openGraph: {
    title: 'Transcrição de Voz para Texto: Grátis | Mictoo',
    description: 'Envie a sua gravação de voz do iPhone ou Android, obtenha texto limpo.',
    url: 'https://mictoo.com/pt/voice-memo-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transcrição de Voz para Texto',
    description: 'Transcrição gratuita para gravações de voz do telefone.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function PtVoiceMemoToTextPage() {
  return (
    <UseCaseLayout
      locale="pt"
      badge="iPhone · Android · Grátis"
      h1First="Transcrição de Voz para Texto"
      h1Second="Transcrição gratuita para gravações de voz do telefone"
      subtitle="Envie o seu Voice Memo do iPhone, gravação de voz do Android, nota de voz do WhatsApp ou mensagem de voz do Telegram. Obtenha uma transcrição limpa em segundos. Sem registo, sem taxa por minuto."
      currentHref="/pt/voice-memo-to-text"

      platforms={[
        { name: 'iPhone',       iconKey: 'mic',       brandBg: '#0F172A' },
        { name: 'Google Rec',   iconKey: 'mic',       brandBg: '#4285F4' },
        { name: 'Samsung',      iconKey: 'mic',       brandBg: '#1428A0' },
        { name: 'WhatsApp',     iconKey: 'phone',     brandBg: '#25D366' },
        { name: 'Telegram',     iconKey: 'phone',     brandBg: '#0088CC' },
        { name: 'Audacity',     iconKey: 'soundwave', brandBg: '#0B60D6' },
      ]}

      howItWorksTitle="Como funciona a transcrição de voz"
      steps={[
        {
          icon: 'folder',
          title: 'Partilhe a gravação',
          desc: 'iPhone: partilhe a partir da aplicação Voice Memos. Android: ficheiro a partir da aplicação Files. WhatsApp: encaminhe como ficheiro.',
        },
        {
          icon: 'upload',
          title: 'Envie o ficheiro aqui',
          desc: 'M4A (iPhone), MP3 (Android), OPUS/OGG (WhatsApp, Telegram) funcionam diretamente.',
        },
        {
          icon: 'editPen',
          title: 'Transcrição em segundos',
          desc: 'Uma gravação de 5 minutos termina em cerca de 10 segundos. O resumo de IA transforma ideias dispersas numa lista de ações concisa.',
        },
      ]}

      exampleTitle="Exemplo de transcrição de voz"
      exampleFileName="voice-memo.m4a"
      exampleDurationLabel="3:22"
      exampleLines={[
        { t: '0:00',  line: 'Ok, gravação rápida antes que me esqueça da ideia toda.' },
        { t: '0:04',  line: 'A proposta é que dividimos o fluxo de checkout em dois passos claros em vez de um formulário longo.' },
        { t: '0:13',  line: 'Passo um, apenas email e cartão. Passo dois, detalhes de envio após ver o número de confirmação.' },
        { t: '0:22',  line: 'A razão pela qual isso importa é que a desistência no formulário de página única atual é de cerca de trinta e oito por cento.' },
        { t: '0:32',  line: 'A maior parte dessa desistência acontece na seção de envio, não na entrada do cartão, o que é contraintuitivo.' },
        { t: '0:42',  line: 'Se deslocarmos o envio para depois da compra, provavelmente conseguiremos recuperar doze a quinze por cento desse tráfego.' },
        { t: '0:52',  line: 'Em termos de cronograma, acho que isto são duas semanas de frontend, uma semana de backend, talvez uma semana de testes.' },
      ]}
      summaryPoints={[
        'Ideia: dividir o fluxo de checkout em dois passos.',
        'Passo 1: email + cartão. Passo 2: envio após confirmação.',
        'Desistência atual: 38%, principalmente na seção de envio.',
        'Recuperação estimada: 12-15% do tráfego.',
      ]}
      actionItems={[
        'Elaborar um mockup de checkout em dois passos',
        'Verificar a desistência de 38% nas análises',
        'Definir engenharia (~4 semanas no total)',
      ]}

      whyTitle="Por que escolher Mictoo para gravações de voz"
      whyCards={[
        {
          icon: 'sparkles',
          title: 'Resumo de IA para gravações dispersas',
          desc: 'As gravações de voz são confusas por natureza. O resumo transforma um fluxo de pensamento de cinco minutos numa conclusão de duas linhas.',
        },
        {
          icon: 'mic',
          title: 'iPhone .m4a nativo',
          desc: 'A Apple Voice Memos grava em .m4a (AAC em MP4). Aceitamos diretamente, sem conversão.',
        },
        {
          icon: 'chat',
          title: 'Telegram .oga nativo',
          desc: 'Guarde a mensagem de voz do Telegram do chat e envie o ficheiro .oga. Opus em OGG, tratado de forma nativa.',
        },
        {
          icon: 'globe',
          title: 'Traduza para notas em várias línguas',
          desc: 'Memo na sua língua nativa, notas em inglês para a equipa. Um clique.',
        },
      ]}

      scenariosTitle="Cenários comuns de gravações de voz"
      scenarios={[
        { icon: 'sparkles', title: 'Captura de ideias' },
        { icon: 'chat',     title: 'Notas de reunião' },
        { icon: 'editPen',  title: 'Redação de rascunhos' },
        { icon: 'book',     title: 'Jornalização' },
        { icon: 'phone',    title: 'Mensagem de voz' },
        { icon: 'globe',    title: 'Multilingue' },
      ]}

      tipsTitle="Dicas para gravações de voz mais limpas"
      tips={[
        'Segure o telefone perto para reduzir o ruído ambiente.',
        'Para gravações longas acima de 60 MB, faça login para auto-dividir.',
        'Fale numa língua por gravação para a deteção mais limpa.',
        'Diga "novo parágrafo" se quiser que a transcrição quebre ali.',
      ]}

      guidesTitle="Ferramentas relacionadas"
      guides={[
        { href: '/pt/m4a-to-text',        icon: 'file',  title: 'Formato M4A',       desc: 'iPhone / GarageBand em profundidade' },
        { href: '/pt/ogg-to-text',        icon: 'file',  title: 'OGG / .oga',       desc: 'Telegram voice em profundidade' },
        { href: '/pt/dictation-to-text',  icon: 'editPen', title: 'Ditado',      desc: 'Fluxo de trabalho de escrita com voz' },
        { href: '/pt/interview-transcription', icon: 'chat', title: 'Entrevista',    desc: 'Entrevista por telefone ou presencial' },
      ]}

      faq={[
        {
          q: 'Posso transcrever gravações de voz do iPhone diretamente?',
          a: 'Sim. Partilhe o memo a partir da aplicação Voice Memos (partilha → guardar em Ficheiros ou enviar para si mesmo) e envie o .m4a para o Mictoo. Sem conversão necessária.',
        },
        {
          q: 'O Mictoo transcreve mensagens de voz do WhatsApp ou Telegram?',
          a: 'Sim. Guarde a mensagem de voz do chat (encaminhar → guardar como ficheiro) e envie-a. As notas de voz do WhatsApp são .opus, as notas de voz do Telegram são .oga (ambas são contentores OGG). Ambas funcionam diretamente.',
        },
        {
          q: 'Qual é o limite de tamanho do ficheiro?',
          a: '25 MB anonimamente, 60 MB quando está registado. Uma gravação de voz de 60 minutos a uma taxa de bits típica é cerca de 20-30 MB, portanto a maioria encaixa-se no limite gratuito.',
        },
        {
          q: 'O Mictoo transcreve gravações de voz não em inglês?',
          a: 'Sim. O Whisper large-v3 suporta mais de 50 línguas. Para gravações curtas ou conteúdo não em inglês, defina a língua explicitamente para uma deteção mais limpa na primeira passagem.',
        },
        {
          q: 'Posso obter um resumo de um memo de brainstorming disperso?',
          a: 'Sim. O resumo de IA aparece automaticamente ao lado da transcrição. Excelente para transformar memos de fluxo de consciência em listas de ações concisas.',
        },
        {
          q: 'As gravações de voz são armazenadas nos seus servidores?',
          a: 'Não. O áudio é transmitido para o fornecedor de transcrição, processado uma vez e descartado. Apenas a transcrição persiste se fizer login e a guardar.',
        },
        {
          q: 'Posso traduzir o meu memo de voz para outra língua?',
          a: 'Sim. Escolha uma língua-alvo e clique em Traduzir após a transcrição. O GPT-4o-mini faz a tradução e aparece ao lado do original.',
        },
      ]}

      ctaHeadline="Transforme gravações de voz em texto e itens de ação"
      ctaSubtitle="Notas de voz do iPhone, Android, WhatsApp, Telegram. Todos os formatos, um upload."
      ctaButton="Carregar um memo de voz"

      relatedLinks={[
        { href: '/pt/dictation-to-text',       label: 'Ditado para Texto' },
        { href: '/pt/interview-transcription', label: 'Transcrição de Entrevista' },
        { href: '/pt/m4a-to-text',             label: 'M4A para Texto' },
        { href: '/pt/ogg-to-text',             label: 'OGG para Texto' },
        { href: '/pt/meeting-transcription',   label: 'Transcrição de Reunião' },
      ]}
    />
  )
}