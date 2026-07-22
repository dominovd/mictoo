import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/teams-meeting-transcription',
  'fr': 'https://mictoo.com/fr/teams-meeting-transcription',
  'de': 'https://mictoo.com/de/teams-meeting-transcription',
  'es': 'https://mictoo.com/es/teams-meeting-transcription',
  'ru': 'https://mictoo.com/ru/teams-meeting-transcription',
  'it': 'https://mictoo.com/it/teams-meeting-transcription',
  'pt': 'https://mictoo.com/pt/teams-meeting-transcription',
  'pl': 'https://mictoo.com/pl/teams-meeting-transcription',
  'ja': 'https://mictoo.com/ja/teams-meeting-transcription',
  'ko': 'https://mictoo.com/ko/teams-meeting-transcription',
  'x-default': 'https://mictoo.com/teams-meeting-transcription',
}

export const metadata = {
  title: 'Transcrição de Reuniões do Teams a partir de Gravações MP4 | Mictoo',
  description:
    'Carregue um MP4 do Microsoft Teams a partir do OneDrive ou SharePoint e obtenha uma transcrição com carimbo de data/hora, resumo de IA e ficheiros de exportação.',
  alternates: {
    canonical: 'https://mictoo.com/pt/teams-meeting-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: 'Transcrição de Reuniões do Teams a partir de MP4 | Mictoo',
    description: 'Carregue uma gravação do Teams a partir do OneDrive ou SharePoint e obtenha texto, resumo e exportações.',
    url: 'https://mictoo.com/pt/teams-meeting-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transcrição de Reuniões do Teams',
    description: 'Carregue um MP4 a partir do OneDrive ou SharePoint e obtenha uma transcrição.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function PtTeamsMeetingTranscriptionPage() {
  return (
    <UseCaseLayout
      locale="pt"
      badge="Teams · OneDrive / SharePoint · M365 · Grátis"
      h1First="Transcrição de Reuniões do Teams"
      h1Second="De MP4 do OneDrive ou SharePoint a texto"
      subtitle="Descarregue a gravação do Teams à qual tem acesso, depois carregue o MP4 para uma transcrição com carimbo de data/hora, resumo de IA e exportações. A disponibilidade da gravação depende da sua licença do Microsoft 365 e das políticas da sua organização."
      currentHref="/pt/teams-meeting-transcription"

      platforms={[
        { name: 'OneDrive',    iconKey: 'videoCameraFill', brandBg: '#0364B8' },
        { name: 'SharePoint',  iconKey: 'videoCameraFill', brandBg: '#036C70' },
        { name: 'MP4 do Canal', iconKey: 'videoCameraFill', brandBg: '#4B53BC' },
        { name: 'Zoom',        iconKey: 'videoCameraFill', brandBg: '#2D8CFF', href: '/pt/zoom-transcription' },
        { name: 'Google Meet', iconKey: 'videoCameraFill', brandBg: '#00832D', href: '/pt/google-meet-transcription' },
        { name: 'Hub de Reuniões', iconKey: 'videoCameraFill', brandBg: '#0F1F35', href: '/pt/meeting-transcription' },
      ]}

      howItWorksTitle="Como funciona a transcrição de reuniões do Teams"
      steps={[
        {
          icon: 'folder',
          title: 'Encontre a gravação',
          desc: 'Reunião privada: OneDrive › Meus Ficheiros › Gravações. Reunião de canal: o site do SharePoint do canal.',
        },
        {
          icon: 'upload',
          title: 'Coloque o MP4 aqui',
          desc: 'Descarregue do OneDrive ou SharePoint e arraste para aqui. Para mais de 60 MB, extraia o áudio ou faça login para divisão automática.',
        },
        {
          icon: 'editPen',
          title: 'Transcrição, resumo, exportações',
          desc: 'Transcrição com carimbo de data/hora, resumo de IA, TXT/SRT/VTT/DOCX. Uma chamada de Teams de 30 minutos termina em cerca de um minuto.',
        },
      ]}

      exampleTitle="Exemplo de transcrição de reunião do Teams"
      exampleFileName="teams-channel-meeting.mp4"
      exampleDurationLabel="41:08"
      exampleLines={[
        { t: '0:00',  line: 'Certo, bem-vindos à revisão do sprint. Vamos passar pelo que foi enviado, o que não foi, e porquê.' },
        { t: '0:11',  line: 'A equipa de pagamentos enviou o novo fluxo de reembolso na terça-feira. A adoção está acima das expectativas, cerca de quarenta por cento dos bilhetes elegíveis.' },
        { t: '0:24',  line: 'A equipa de pesquisa encontrou um pipeline de indexação mais longo do que o esperado. Envio adiado para o próximo sprint.' },
        { t: '0:35',  line: 'Isso é aceitável, mas precisamos comunicar o atraso à equipa de sucesso do cliente para que possam gerir as expectativas.' },
        { t: '0:47',  line: 'Vou enviar uma nota no canal partilhado hoje com o cronograma revisto e a razão.' },
        { t: '0:58',  line: 'Em terceiro lugar, a taxa de falhas móveis aumentou ligeiramente. Ainda dentro do SLA, mas vale a pena monitorizar neste sprint.' },
        { t: '1:09',  line: 'A equipa de dispositivos já está a tratar disso. Devemos ter uma causa raiz até quarta-feira e uma solução até ao final do sprint.' },
      ]}
      summaryPoints={[
        'Fluxo de reembolso enviado na terça-feira, 40% de adoção.',
        'Equipa de pesquisa atrasou um sprint (pipeline de indexação).',
        'Taxa de falhas móveis aumentou, mas dentro do SLA.',
        'Causa raiz para falhas móveis até quarta-feira.',
      ]}
      actionItems={[
        'Enviar nota de atraso ao canal de sucesso do cliente',
        'Investigar a causa raiz das falhas móveis (quarta-feira)',
        'Confirmar nova data de envio da equipa de pesquisa',
      ]}

      whyTitle="Por que escolher a Mictoo para gravações do Teams"
      whyCards={[
        {
          icon: 'folder',
          title: 'Funciona com gravações descarregadas',
          desc: 'Use um MP4 que já tem permissão para descarregar do OneDrive ou do site SharePoint do canal.',
        },
        {
          icon: 'target',
          title: 'Revise nomes e terminologia',
          desc: 'A saída com carimbo de data/hora facilita encontrar e corrigir nomes de produtos, acrónimos e termos técnicos.',
        },
        {
          icon: 'sparkles',
          title: 'Resumo ao lado da transcrição',
          desc: 'Gere um rascunho de recapitulação e mantenha-o ao lado do texto completo para revisão antes de partilhar.',
        },
        {
          icon: 'globe',
          title: 'Traduzir gravações em várias línguas',
          desc: 'Gravação em uma língua, recapitulação necessária em outra. Um clique, mais de 50 línguas.',
        },
      ]}

      scenariosTitle="Cenários comuns do Teams"
      scenarios={[
        { icon: 'chat',      title: 'Revisão do sprint' },
        { icon: 'briefcase', title: 'Sincronização do conselho' },
        { icon: 'users',     title: 'Standup' },
        { icon: 'target',    title: 'Revisão de OKR' },
        { icon: 'headset',   title: 'Escalada de suporte' },
        { icon: 'globe',     title: 'Chamada internacional' },
      ]}

      tipsTitle="Dicas para gravações do Teams"
      tips={[
        'Reuniões privadas são guardadas no OneDrive (conta do organizador).',
        'Reuniões de canal são guardadas no site SharePoint do canal.',
        'Inquilinos GCC / empresariais podem restringir downloads: pergunte ao TI.',
        'Para reuniões longas, extraia o áudio com ffmpeg para reduzir o tamanho do ficheiro.',
      ]}

      guidesTitle="Outras plataformas de reunião"
      guides={[
        { href: '/pt/zoom-transcription',        icon: 'video', title: 'Zoom',        desc: 'Nuvem + Local + M4A' },
        { href: '/pt/google-meet-transcription', icon: 'video', title: 'Google Meet', desc: 'Workspace + grátis' },
        { href: '/pt/meeting-transcription',     icon: 'video', title: 'Hub de Reuniões', desc: 'Qualquer plataforma, um carregamento' },
        { href: '/pt/business-transcription',    icon: 'briefcase', title: 'Negócios', desc: 'Gravações internas autorizadas' },
      ]}

      faq={[
        {
          q: 'Onde são guardadas as gravações do Teams?',
          a: 'Reuniões privadas: na OneDrive do organizador em Meus Ficheiros › Gravações. Reuniões de canal: no site do SharePoint que suporta esse canal, na pasta do canal em Documentos.',
        },
        {
          q: 'Preciso de Teams Premium para carregar uma gravação?',
          a: 'A Mictoo processa o ficheiro de mídia descarregado em vez de se conectar à sua conta do Teams. A sua capacidade de gravar, transcrever ou descarregar dentro do Teams ainda depende da sua licença do Microsoft 365, função na reunião e políticas da organização.',
        },
        {
          q: 'Devo usar a transcrição do Teams ou carregar a gravação?',
          a: 'Use a transcrição do Teams quando estiver disponível e atender às suas necessidades. Carregar a gravação é útil quando você deseja exportações da Mictoo, tradução ou uma transcrição adicional para revisão. A precisão varia com a gravação.',
        },
        {
          q: 'Meu MP4 do Teams tem mais de 60 MB. E agora?',
          a: 'Extraia o áudio: ffmpeg -i teams.mp4 -vn -ac 1 -ar 16000 audio.m4a. Ou faça login para divisão automática de ficheiros de até cerca de 3 horas.',
        },
        {
          q: 'Posso usar a Mictoo para inquilinos GCC / empresariais?',
          a: 'Alguns inquilinos empresariais e governamentais restringem downloads ou processamento externo. Siga a política da sua organização e verifique com o TI ou o proprietário da gravação antes de descarregar ou carregar mídia de reunião.',
        },
        {
          q: 'A Mictoo identifica os oradores do Teams?',
          a: 'Não. A transcrição atual é texto contínuo com carimbos de data/hora por linha e sem rótulos automáticos de orador.',
        },
        {
          q: 'As gravações do Teams são armazenadas nos seus servidores?',
          a: 'Não. O ficheiro é transmitido para o fornecedor de transcrição, processado uma vez e descartado. Apenas a transcrição persiste em contas com login.',
        },
      ]}

      ctaHeadline="Transforme reuniões do Teams em texto limpo"
      ctaSubtitle="Carregue uma gravação autorizada do OneDrive ou SharePoint e obtenha texto, resumo e exportações."
      ctaButton="Carregar gravação do Teams"

      relatedLinks={[
        { href: '/pt/meeting-transcription',       label: 'Transcrição de Reuniões' },
        { href: '/pt/zoom-transcription',          label: 'Transcrição do Zoom' },
        { href: '/pt/google-meet-transcription',   label: 'Transcrição do Google Meet' },
        { href: '/pt/business-transcription',      label: 'Transcrição de Negócios' },
        { href: '/pt/webinar-transcription',       label: 'Transcrição de Webinar' },
      ]}
    />
  )
}