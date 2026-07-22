import UseCaseLayout from '@/components/UseCaseLayout'

export const metadata = {
  title: 'Transcrição de Reuniões Empresariais e Resumo AI | Mictoo',
  description:
    'Transforme gravações autorizadas de reuniões internas em transcrições com timestamps, resumos AI e documentos de recapitulação exportáveis.',
  alternates: {
    canonical: 'https://mictoo.com/pt/business-transcription',
    languages: {
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
    },
  },
  openGraph: {
    title: 'Transcrição Empresarial: Reuniões Internas para Texto | Mictoo',
    description: 'Transcreva reuniões internas da empresa sem configuração de TI.',
    url: 'https://mictoo.com/pt/business-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transcrição Empresarial',
    description: 'Reuniões 1:1 com fundadores, reuniões gerais, briefings executivos.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function PtBusinessTranscriptionPage() {
  return (
    <UseCaseLayout
      locale="pt"
      badge="Fundadores · Executivos · Pequenas equipas · Grátis"
      h1First="Transcrição Empresarial"
      h1Second="Reuniões 1:1 com fundadores, reuniões gerais, briefings executivos"
      subtitle="Uma ferramenta prática de transcrição para reuniões internas autorizadas. Carregue a gravação, reveja a transcrição e o resumo AI, e depois exporte uma recapitulação para a sua equipa."
      currentHref="/pt/business-transcription"

      platforms={[
        { name: 'Zoom',        iconKey: 'videoCameraFill', brandBg: '#2D8CFF', href: '/pt/zoom-transcription' },
        { name: 'MS Teams',    iconKey: 'videoCameraFill', brandBg: '#4B53BC', href: '/pt/teams-meeting-transcription' },
        { name: 'Google Meet', iconKey: 'videoCameraFill', brandBg: '#00832D', href: '/pt/google-meet-transcription' },
        { name: 'Webex',       iconKey: 'videoCameraFill', brandBg: '#0F1F35' },
        { name: 'BlueJeans',   iconKey: 'videoCameraFill', brandBg: '#005EB8' },
        { name: 'GoToMeeting', iconKey: 'videoCameraFill', brandBg: '#F68B1F' },
      ]}

      howItWorksTitle="Como funciona a transcrição empresarial"
      steps={[
        {
          icon: 'folder',
          title: 'Exporte a gravação',
          desc: 'Do Zoom, Teams, Meet, Webex, ou qualquer que seja a plataforma que a sua empresa utiliza. MP4 ou M4A apenas de áudio funcionam.',
        },
        {
          icon: 'upload',
          title: 'Coloque o arquivo aqui',
          desc: 'Carregue uma gravação que a sua organização permite processar. Não é necessária instalação de software ou integração de diretório.',
        },
        {
          icon: 'editPen',
          title: 'Transcrição, resumo, itens de ação',
          desc: 'Transcrição com timestamps, resumo AI, exportação DOCX pronta para o email de recapitulação.',
        },
      ]}

      exampleTitle="Exemplo de transcrição de reunião empresarial"
      exampleFileName="q3-strategy-session.mp4"
      exampleDurationLabel="58:42"
      exampleLines={[
        { t: '0:00',  line: 'Obrigado a todos por arranjarem tempo. Esta é a nossa verificação de estratégia do Q3, e temos cerca de uma hora bloqueada.' },
        { t: '0:10',  line: 'Deixe-me começar com a atualização geral. A receita está a seguir oito por cento acima do plano, principalmente devido à expansão no mercado intermédio.' },
        { t: '0:22',  line: 'O novo movimento empresarial está mais lento do que projetámos. Dois negócios passaram do Q2 para o Q3.' },
        { t: '0:35',  line: 'Devemos discutir se devemos reforçar o mercado intermédio ou pressionar mais para a prontidão empresarial neste trimestre.' },
        { t: '0:48',  line: 'A minha opinião: o mercado intermédio está a funcionar, e não devemos distrair a equipa ao perseguir o segmento empresarial ainda.' },
        { t: '1:02',  line: 'Concordo. Vamos estabelecer uma meta de trinta novas contas no mercado intermédio até ao final do Q3 e rever a parte empresarial no planeamento do Q4.' },
        { t: '1:14',  line: 'Mais um tópico antes de terminarmos. O roteiro de engenharia para o mesmo trimestre, que ligamos a estes compromissos com os clientes.' },
      ]}
      summaryPoints={[
        'Receita 8% acima do plano, impulsionada pelo mercado intermédio.',
        'Movimento empresarial a escorregar (2 negócios mudaram do Q2 para o Q3).',
        'Decisão: reforçar o mercado intermédio neste trimestre.',
        'Meta: 30 novas contas no mercado intermédio até ao final do Q3.',
      ]}
      actionItems={[
        'Definir meta de 30 contas no mercado intermédio',
        'Rever movimento empresarial no planeamento do Q4',
        'Alinhar roteiro de engenharia com os compromissos dos clientes',
      ]}

      whyTitle="Por que escolher a Mictoo para transcrição empresarial"
      whyCards={[
        {
          icon: 'lock',
          title: 'Sem instalação de software',
          desc: 'O fluxo de trabalho no navegador não requer um cliente de desktop ou integração de diretório. As políticas da sua organização ainda se aplicam.',
        },
        {
          icon: 'sparkles',
          title: 'Resumo pronto para email de recapitulação',
          desc: 'O resumo AI fornece o rascunho da recapitulação em segundos. Corte o que já se comprometeu, mantenha o que precisa de escalonamento.',
        },
        {
          icon: 'shield',
          title: 'Gravações não armazenadas',
          desc: 'Os áudios são enviados para o fornecedor de transcrição e são eliminados após o processamento. Apenas a transcrição persiste em contas com sessão iniciada.',
        },
        {
          icon: 'globe',
          title: 'Traduza para equipas internacionais',
          desc: 'Reunião em inglês, mas a recapitulação precisa ir para uma subsidiária alemã? Um clique.',
        },
      ]}

      scenariosTitle="Cenários empresariais comuns"
      scenarios={[
        { icon: 'briefcase', title: 'Briefing executivo' },
        { icon: 'users',     title: 'Reuniões gerais' },
        { icon: 'chat',      title: 'Reunião 1:1 com fundadores' },
        { icon: 'target',    title: 'Estratégia fora do escritório' },
        { icon: 'search',    title: 'Atualização do conselho' },
        { icon: 'headset',   title: 'Escalonamento de cliente' },
      ]}

      tipsTitle="Dicas para gravações internas"
      tips={[
        'Prefira exportações apenas de áudio quando a sua plataforma as oferece.',
        'Para vídeo de reunião MP4 acima de 60 MB, extraia o áudio com ffmpeg primeiro.',
        'Use Detecção Automática para chamadas de liderança multilíngues.',
        'Salve a transcrição no histórico para construir um arquivo pesquisável.',
      ]}

      guidesTitle="Escolha o guia da plataforma certa"
      guides={[
        { href: '/pt/zoom-transcription',          icon: 'video', title: 'Zoom',        desc: 'Gravação na nuvem, áudio M4A apenas' },
        { href: '/pt/teams-meeting-transcription', icon: 'video', title: 'MS Teams',    desc: 'Caminho OneDrive ou SharePoint' },
        { href: '/pt/google-meet-transcription',   icon: 'video', title: 'Google Meet', desc: 'Gravação no Drive, solução gratuita' },
        { href: '/pt/meeting-transcription#tool',  icon: 'file',  title: 'Outro',       desc: 'Webex, BlueJeans, GoToMeeting' },
      ]}

      faq={[
        {
          q: 'A gravação da minha empresa é enviada para os seus servidores?',
          a: 'Os áudios são enviados para o fornecedor de transcrição (Groq/Replicate/Deepgram/OpenAI dependendo do roteamento), processados uma vez e eliminados da memória. Nunca gravamos o áudio em disco. Apenas a transcrição de texto persiste, e apenas se você iniciar sessão e salvá-la.',
        },
        {
          q: 'Preciso de aprovação para carregar uma gravação da empresa?',
          a: 'Isso depende das políticas da sua organização e da informação na gravação. A Mictoo não requer instalação de software, mas você deve obter qualquer autorização necessária antes de enviar mídia da empresa para um fornecedor de transcrição externo.',
        },
        {
          q: 'Posso usar a Mictoo para indústrias regulamentadas?',
          a: 'Verifique os seus requisitos específicos de conformidade. Não oferecemos um BAA assinado ou relatório SOC 2. Para ambientes rigorosamente regulamentados, use uma ferramenta de transcrição totalmente auto-hospedada.',
        },
        {
          q: 'Posso obter um resumo AI para o email de recapitulação?',
          a: 'Sim. O resumo AI aparece automaticamente ao lado da transcrição. Um bom primeiro rascunho para o email de seguimento ou documento do Notion.',
        },
        {
          q: 'E se a reunião tiver mais de 60 MB?',
          a: 'Inicie sessão para ativar a divisão automática (até cerca de 3 horas). Ou extraia o áudio do vídeo com ffmpeg -i meeting.mp4 -vn -ac 1 -ar 16000 audio.m4a, reduzindo o tamanho do arquivo em 5-15x.',
        },
        {
          q: 'Posso traduzir a transcrição para uma equipa internacional?',
          a: 'Sim. Após a transcrição, escolha um idioma alvo e clique em Traduzir. Útil para subsidiárias de diferentes idiomas.',
        },
        {
          q: 'Quais formatos de exportação funcionam para um email de recapitulação?',
          a: 'TXT para colar no corpo do email, DOCX para um anexo adequado, PDF (com sessão iniciada) para arquivo. O resumo está disponível separadamente.',
        },
      ]}

      ctaHeadline="Transforme reuniões internas em documentos de recapitulação"
      ctaSubtitle="Reuniões 1:1 com fundadores, reuniões gerais e briefings executivos. Carregue mídia autorizada para uma transcrição e resumo."
      ctaButton="Carregar uma reunião empresarial"

      relatedLinks={[
        { href: '/pt/meeting-transcription',       label: 'Transcrição de Reuniões' },
        { href: '/pt/zoom-transcription',          label: 'Transcrição do Zoom' },
        { href: '/pt/teams-meeting-transcription', label: 'Transcrição do Teams' },
        { href: '/pt/google-meet-transcription',   label: 'Transcrição do Google Meet' },
        { href: '/pt/interview-transcription',     label: 'Transcrição de Entrevistas' },
      ]}
    />
  )
}