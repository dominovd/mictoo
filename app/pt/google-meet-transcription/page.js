import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/google-meet-transcription',
  'fr': 'https://mictoo.com/fr/google-meet-transcription',
  'de': 'https://mictoo.com/de/google-meet-transcription',
  'es': 'https://mictoo.com/es/google-meet-transcription',
  'ru': 'https://mictoo.com/ru/google-meet-transcription',
  'it': 'https://mictoo.com/it/google-meet-transcription',
  'pt': 'https://mictoo.com/pt/google-meet-transcription',
  'pl': 'https://mictoo.com/pl/google-meet-transcription',
  'ja': 'https://mictoo.com/ja/google-meet-transcription',
  'ko': 'https://mictoo.com/ko/google-meet-transcription',
  'x-default': 'https://mictoo.com/google-meet-transcription',
}

export const metadata = {
  title: 'Transcrição de Gravações do Google Meet para Texto | Mictoo',
  description:
    'Carregue uma gravação autorizada do Google Meet do Drive ou uma captura de tela local e obtenha uma transcrição, resumo de IA e exportações.',
  alternates: {
    canonical: 'https://mictoo.com/pt/google-meet-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: 'Transcrição do Google Meet: Conta Workspace ou Gratuita | Mictoo',
    description: 'Gravação do Drive ou captura de tela do Meet gratuito. Qualquer uma funciona.',
    url: 'https://mictoo.com/pt/google-meet-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transcrição do Google Meet',
    description: 'Qualquer nível de conta, uma página de upload.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function PtGoogleMeetTranscriptionPage() {
  return (
    <UseCaseLayout
      locale="pt"
      badge="Google Meet · Captura do Drive ou local · Gratuito"
      h1First="Transcrição do Google Meet"
      h1Second="Gravações do Drive e capturas locais para texto"
      subtitle="Carregue uma gravação do Google Meet do Drive ou uma captura local que você está autorizado a fazer. A disponibilidade da gravação depende da edição do Workspace do anfitrião, permissões e configurações do administrador."
      currentHref="/pt/google-meet-transcription"

      platforms={[
        { name: 'Meet MP4',    iconKey: 'videoCameraFill', brandBg: '#00832D' },
        { name: 'QuickTime',   iconKey: 'videoCameraFill', brandBg: '#0F172A' },
        { name: 'OBS',         iconKey: 'videoCameraFill', brandBg: '#302E31' },
        { name: 'Zoom',        iconKey: 'videoCameraFill', brandBg: '#2D8CFF', href: '/pt/zoom-transcription' },
        { name: 'MS Teams',    iconKey: 'videoCameraFill', brandBg: '#4B53BC', href: '/pt/teams-meeting-transcription' },
        { name: 'Meeting hub', iconKey: 'videoCameraFill', brandBg: '#0F1F35', href: '/pt/meeting-transcription' },
      ]}

      howItWorksTitle="Como funciona a transcrição do Google Meet"
      steps={[
        {
          icon: 'folder',
          title: 'Obtenha a gravação',
          desc: 'Gravação elegível do Workspace: Drive › Meu Drive › Gravações do Meet. Caso contrário, use uma captura local autorizada que siga as regras de consentimento dos participantes.',
        },
        {
          icon: 'upload',
          title: 'Coloque o arquivo aqui',
          desc: 'MP4 ou M4A funcionam. Para MP4s grandes, extraia o áudio com ffmpeg primeiro ou faça login para divisão automática.',
        },
        {
          icon: 'editPen',
          title: 'Transcrição, resumo, exportações',
          desc: 'Obtenha uma transcrição com carimbo de data/hora, resumo de IA e exportações em TXT/SRT/VTT/DOCX. O tempo de processamento depende da duração e do tamanho do arquivo.',
        },
      ]}

      exampleTitle="Exemplo de transcrição do Google Meet"
      exampleFileName="meet-recording.mp4"
      exampleDurationLabel="27:45"
      exampleLines={[
        { t: '0:00',  line: 'Olá equipe, obrigado por se juntarem. Sincronização rápida sobre o plano de lançamento do Q3 antes de eu ir para o offsite na próxima semana.' },
        { t: '0:10',  line: 'O marketing finalizou o texto da página de destino. A engenharia está no caminho certo para o congelamento de funcionalidades na sexta-feira.' },
        { t: '0:22',  line: 'Os documentos de suporte são o item de risco. Estamos atrasados em cerca de três dias e precisamos recuperar antes do lançamento.' },
        { t: '0:33',  line: 'Posso transferir a Anna dos documentos de integração para ajudar esta semana. Isso deve recuperar a lacuna.' },
        { t: '0:44',  line: 'Ótimo. Segundo tópico, as mudanças na página de preços que discutimos. Alguém tem preocupações antes de as enviarmos.' },
        { t: '0:56',  line: 'A única coisa que eu destacaria é a estrutura do nível empresarial. Parece um pouco frágil para o ponto de preço.' },
        { t: '1:08',  line: 'Ponto justo. Deixe-me revisar essa seção esta semana e compartilhar uma versão revisada na sexta-feira.' },
      ]}
      summaryPoints={[
        'Lançamento do Q3 a caminho, congelamento de funcionalidades na sexta-feira.',
        'Documentos de suporte atrasados em 3 dias (risco).',
        'Anna reatribuída para fechar a lacuna dos documentos.',
        'Estrutura do nível empresarial precisa de revisão.',
      ]}
      actionItems={[
        'Reatribuir Anna para documentos de suporte esta semana',
        'Revisar a estrutura do nível empresarial até sexta-feira',
        'Confirmar o congelamento de funcionalidades na reunião de sexta-feira',
      ]}

      whyTitle="Por que escolher a Mictoo para transcrição do Google Meet"
      whyCards={[
        {
          icon: 'lock',
          title: 'Funciona com um arquivo de mídia',
          desc: 'Carregue uma gravação do Drive ou uma captura local autorizada sem conectar a Mictoo à sua conta do Google.',
        },
        {
          icon: 'target',
          title: 'Texto com carimbo de data/hora para revisão',
          desc: 'Revise nomes e termos técnicos em relação à gravação e, em seguida, exporte a transcrição corrigida no formato que você precisa.',
        },
        {
          icon: 'sparkles',
          title: 'Resumo de IA sempre incluído',
          desc: 'O resumo da transcrição de IA do Workspace é um recurso pago separado. O nosso está incluído em todas as transcrições.',
        },
        {
          icon: 'globe',
          title: 'Traduza para mais de 50 idiomas',
          desc: 'Recapitulação de reuniões em várias línguas sem um fornecedor de tradução.',
        },
      ]}

      scenariosTitle="Cenários comuns do Meet"
      scenarios={[
        { icon: 'chat',      title: 'Reunião / sincronização' },
        { icon: 'briefcase', title: 'Revisão do cliente' },
        { icon: 'search',    title: 'Entrevista com usuário' },
        { icon: 'users',     title: 'Reunião geral' },
        { icon: 'headset',   title: 'Chamada de suporte' },
        { icon: 'globe',     title: 'Multilíngue' },
      ]}

      tipsTitle="Dicas para gravações do Google Meet"
      tips={[
        'As gravações do Meet do Workspace são salvas no Drive › Gravações do Meet.',
        'Nível gratuito: QuickTime (Mac) ou OBS (Win/Linux) funcionam bem.',
        'MP4 grande? Extraia o áudio: ffmpeg -i meet.mp4 -vn -ac 1 -ar 16000 audio.m4a.',
        'Faça login para divisão automática de reuniões longas.',
      ]}

      guidesTitle="Outras plataformas de reunião"
      guides={[
        { href: '/pt/zoom-transcription',          icon: 'video', title: 'Zoom',           desc: 'Nuvem + Local + M4A' },
        { href: '/pt/teams-meeting-transcription', icon: 'video', title: 'MS Teams',       desc: 'Caminhos do OneDrive + SharePoint' },
        { href: '/pt/meeting-transcription',       icon: 'video', title: 'Meeting hub',    desc: 'Qualquer plataforma, um upload' },
        { href: '/pt/webinar-transcription',       icon: 'monitor', title: 'Webinars',     desc: 'ON24, Demio, StreamYard' },
      ]}

      faq={[
        {
          q: 'Preciso do Google Workspace para gravar uma chamada do Meet?',
          a: 'A disponibilidade da gravação do Google depende da edição da conta do anfitrião, função na reunião, configurações do administrador e permissões. As gravações elegíveis são salvas no Drive. Se você fizer uma captura local em vez disso, obtenha o consentimento necessário dos participantes e siga a política aplicável.',
        },
        {
          q: 'Onde as gravações do Meet do Workspace são salvas?',
          a: 'No Drive do organizador da reunião: Meu Drive › Gravações do Meet. O MP4 geralmente aparece dentro de alguns minutos após o término da reunião. Uma notificação por e-mail é enviada quando está pronto.',
        },
        {
          q: 'Devo usar a transcrição do Meet ou carregar a gravação?',
          a: 'Use a transcrição do Meet quando estiver disponível e atender às suas necessidades. Carregar a mídia é útil quando você deseja exportações da Mictoo, tradução ou uma transcrição adicional para revisar. A precisão varia com o áudio.',
        },
        {
          q: 'Minha gravação do Meet tem mais de 60 MB. E agora?',
          a: 'Extraia apenas o áudio com ffmpeg -i meet.mp4 -vn -ac 1 -ar 16000 audio.m4a. Ou faça login para divisão automática de arquivos longos de até cerca de 3 horas.',
        },
        {
          q: 'Posso obter um resumo de IA da chamada do Meet?',
          a: 'Sim. O resumo de IA aparece automaticamente ao lado da transcrição. Um bom primeiro rascunho para o e-mail de recapitulação ou documento de acompanhamento.',
        },
        {
          q: 'A Mictoo identifica quem está falando no Meet?',
          a: 'Não. A transcrição atual é texto contínuo com carimbos de data/hora por linha e sem rótulos automáticos de falante.',
        },
        {
          q: 'As gravações do Meet são mantidas em seus servidores?',
          a: 'Não. O áudio é transmitido para o fornecedor de transcrição, processado uma vez e descartado. Apenas a transcrição persiste em contas com login.',
        },
      ]}

      ctaHeadline="Transforme chamadas do Meet em texto limpo"
      ctaSubtitle="Carregue uma gravação autorizada do Drive ou uma captura local para texto, resumo e exportações."
      ctaButton="Carregar gravação do Meet"

      relatedLinks={[
        { href: '/pt/meeting-transcription',       label: 'Transcrição de Reuniões' },
        { href: '/pt/zoom-transcription',          label: 'Transcrição do Zoom' },
        { href: '/pt/teams-meeting-transcription', label: 'Transcrição do Teams' },
        { href: '/pt/webinar-transcription',       label: 'Transcrição de Webinars' },
        { href: '/pt/business-transcription',      label: 'Transcrição Empresarial' },
      ]}
    />
  )
}