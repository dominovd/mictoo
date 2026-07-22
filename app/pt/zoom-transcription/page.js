import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/zoom-transcription',
  'fr': 'https://mictoo.com/fr/zoom-transcription',
  'de': 'https://mictoo.com/de/zoom-transcription',
  'es': 'https://mictoo.com/es/zoom-transcription',
  'ru': 'https://mictoo.com/ru/zoom-transcription',
  'it': 'https://mictoo.com/it/zoom-transcription',
  'pt': 'https://mictoo.com/pt/zoom-transcription',
  'pl': 'https://mictoo.com/pl/zoom-transcription',
  'ja': 'https://mictoo.com/ja/zoom-transcription',
  'ko': 'https://mictoo.com/ko/zoom-transcription',
  'x-default': 'https://mictoo.com/zoom-transcription',
}

export const metadata = {
  title: 'Transcrição do Zoom para Gravações na Nuvem e Locais | Mictoo',
  description:
    'Carregue uma gravação MP4/M4A do Zoom na nuvem ou local e obtenha uma transcrição com timestamp, resumo de IA e arquivos de exportação.',
  alternates: {
    canonical: 'https://mictoo.com/pt/zoom-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: 'Transcrição de Gravações do Zoom | Mictoo',
    description: 'Carregue um MP4/M4A do Zoom na nuvem ou local e obtenha uma transcrição, resumo e exportações.',
    url: 'https://mictoo.com/pt/zoom-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transcrição do Zoom: Grátis',
    description: 'Carregue uma gravação do Zoom e obtenha uma transcrição com timestamp.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function PtZoomTranscriptionPage() {
  return (
    <UseCaseLayout
      locale="pt"
      badge="Zoom · Nuvem / Local / Áudio M4A · Grátis"
      h1First="Transcrição do Zoom"
      h1Second="Gravações na nuvem e locais para texto"
      subtitle="Carregue uma gravação MP4 do Zoom na Nuvem, um M4A apenas áudio, ou uma gravação local. Obtenha uma transcrição com timestamp, resumo de IA, tradução e arquivos de exportação em um único fluxo de trabalho."
      currentHref="/pt/zoom-transcription"

      platforms={[
        { name: 'MP4 na Nuvem',    iconKey: 'videoCameraFill', brandBg: '#2D8CFF' },
        { name: 'Áudio M4A',       iconKey: 'mic',             brandBg: '#0EA5A4' },
        { name: 'MP4 Local',       iconKey: 'videoCameraFill', brandBg: '#4B53BC' },
        { name: 'Google Meet',     iconKey: 'videoCameraFill', brandBg: '#00832D', href: '/pt/google-meet-transcription' },
        { name: 'MS Teams',        iconKey: 'videoCameraFill', brandBg: '#4B53BC', href: '/pt/teams-meeting-transcription' },
        { name: 'Meeting hub',     iconKey: 'videoCameraFill', brandBg: '#0F1F35', href: '/pt/meeting-transcription' },
      ]}

      howItWorksTitle="Como funciona a transcrição do Zoom"
      steps={[
        {
          icon: 'folder',
          title: 'Baixar do Zoom',
          desc: 'Nuvem: zoom.us → Gravações → baixe MP4 ou a versão "Áudio Apenas (M4A)". Local: ~/Documents/Zoom/.',
        },
        {
          icon: 'upload',
          title: 'Solte o arquivo aqui',
          desc: 'O M4A apenas áudio é geralmente muito menor do que o MP4 e evita o upload da faixa de vídeo. Grátis até 25 MB anonimamente, 60 MB com login.',
        },
        {
          icon: 'editPen',
          title: 'Revise e exporte',
          desc: 'O tempo de processamento depende da duração, tamanho do arquivo e demanda. Quando completo, revise a transcrição e exporte um resumo, legendas ou um DOCX.',
        },
      ]}

      exampleTitle="Exemplo de transcrição de reunião do Zoom"
      exampleFileName="zoom-cloud-recording.m4a"
      exampleDurationLabel="34:12"
      exampleLines={[
        { t: '0:00',  line: 'Certo, desculpem pela demora, pessoal. O Zoom se recusou a me deixar entrar até eu atualizar. Vamos começar.' },
        { t: '0:10',  line: 'Hoje estamos revisando o feedback do protótipo da semana passada e decidindo o que priorizar para o sprint.' },
        { t: '0:22',  line: 'No geral, o feedback foi positivo. Doze dos quinze participantes entenderam o fluxo sem ajuda.' },
        { t: '0:33',  line: 'Os três que ficaram presos enfrentaram o mesmo problema na tela de configurações. Devemos corrigir isso primeiro.' },
        { t: '0:45',  line: 'Concordo. Já tenho uma revisão de design em andamento. Deve estar pronta para revisão até quinta-feira.' },
        { t: '0:56',  line: 'Em segundo lugar, todos adoraram o novo estado vazio, mas ninguém encontrou o botão de importação. Está muito escondido.' },
        { t: '1:08',  line: 'Vamos mover a importação para a ação principal no estado vazio. Isso é uma mudança de uma linha para a engenharia.' },
      ]}
      summaryPoints={[
        'Feedback do protótipo: 12/15 completaram o fluxo sem ajuda.',
        'Bloqueador: a tela de configurações confundiu 3/15 participantes.',
        'Estado vazio bem recebido, mas botão de Importar difícil de encontrar.',
        'Revisão de design até quinta-feira.',
      ]}
      actionItems={[
        'Corrigir a tela de configurações (revisão de design na quinta)',
        'Promover Importar para ação principal no estado vazio',
        'Compartilhar protótipo revisado na reunião de sexta-feira',
      ]}

      whyTitle="Por que usar Mictoo com uma gravação do Zoom"
      whyCards={[
        {
          icon: 'target',
          title: 'Uma segunda transcrição para revisar',
          desc: 'Use Mictoo quando quiser uma transcrição adicional e texto com timestamp para verificar nomes, terminologia e citações importantes.',
        },
        {
          icon: 'lock',
          title: 'Processa arquivos baixados',
          desc: 'Mictoo não se conecta à sua conta do Zoom. Carregue uma gravação na nuvem ou local que você já tenha permissão para usar.',
        },
        {
          icon: 'gear',
          title: 'Funciona com Gravação Local também',
          desc: 'A transcrição embutida do Zoom é apenas para a Nuvem. Gravação Local não recebe nada. Mictoo funciona com ambos.',
        },
        {
          icon: 'sparkles',
          title: 'Resumo + Tradução incluídos',
          desc: 'O resumo de IA aparece automaticamente ao lado da transcrição. Traduza para mais de 50 idiomas com um clique.',
        },
      ]}

      scenariosTitle="Cenários comuns do Zoom"
      scenarios={[
        { icon: 'chat',      title: 'Chamada com cliente' },
        { icon: 'users',     title: 'Standup da equipe' },
        { icon: 'briefcase', title: 'Demonstração de vendas' },
        { icon: 'search',    title: 'Entrevista com usuário' },
        { icon: 'book',      title: 'Webinar' },
        { icon: 'globe',     title: 'Chamada multilíngue' },
      ]}

      tipsTitle="Dicas para gravações do Zoom"
      tips={[
        'Baixe a versão M4A "Áudio Apenas". Mesma precisão, 10x menor.',
        'A cota de Gravação na Nuvem não é gasta na nossa transcrição (executamos externamente).',
        'Gravação Local também funciona. Veja em ~/Documents/Zoom/.',
        'Para chamadas longas acima de 60 MB, faça login para auto-dividir.',
      ]}

      guidesTitle="Plataformas de reunião com seus próprios guias"
      guides={[
        { href: '/pt/google-meet-transcription',   icon: 'video', title: 'Google Meet', desc: 'Workspace + solução gratuita' },
        { href: '/pt/teams-meeting-transcription', icon: 'video', title: 'MS Teams',    desc: 'Caminhos do OneDrive + SharePoint' },
        { href: '/pt/meeting-transcription',       icon: 'video', title: 'Meeting hub', desc: 'Qualquer plataforma, um upload' },
        { href: '/pt/webinar-transcription',       icon: 'monitor', title: 'Webinars',  desc: 'Webinars do Zoom, Demio, ON24' },
      ]}

      faq={[
        {
          q: 'Quais tipos de gravação do Zoom funcionam?',
          a: 'Gravação na Nuvem MP4 (vídeo), Gravação na Nuvem M4A (apenas áudio) e Gravação Local MP4. Também exportação chat.txt se você quiser o log do chat, embora não transcrevamos o chat.',
        },
        {
          q: 'Preciso do Zoom Pro ou superior?',
          a: 'Não. Qualquer gravação do Zoom funciona, incluindo da Gravação Local do nível gratuito. A Gravação na Nuvem do Zoom requer Pro+, mas se você já tem o arquivo, o Mictoo não se importa com o seu nível do Zoom.',
        },
        {
          q: 'Minha Gravação na Nuvem MP4 tem mais de 60 MB. E agora?',
          a: 'Se a sua gravação incluir um download de Áudio Apenas (M4A), use-o para evitar o upload da faixa de vídeo. A disponibilidade e o tamanho do arquivo dependem das configurações de gravação e duração.',
        },
        {
          q: 'Devo usar a transcrição de áudio do Zoom ou o Mictoo?',
          a: 'A transcrição de áudio do Zoom é conveniente quando a gravação na nuvem e a transcrição estão habilitadas na sua conta. O Mictoo é útil para arquivos locais, formatos de exportação adicionais, tradução ou para produzir outra transcrição para revisar. A precisão varia com a gravação.',
        },
        {
          q: 'O Mictoo identifica os falantes do Zoom?',
          a: 'Não. A transcrição atual é texto contínuo com timestamps por linha e sem rótulos automáticos "Falante 1 / Falante 2".',
        },
        {
          q: 'Onde a Gravação Local é salva?',
          a: 'Por padrão, em ~/Documents/Zoom/ no Mac e %USERPROFILE%\\Documents\\Zoom\\ no Windows. Cada reunião recebe sua própria pasta com o MP4 e o áudio.m4a separado.',
        },
        {
          q: 'Minha gravação do Zoom é armazenada nos seus servidores?',
          a: 'Não. O arquivo é transmitido para o provedor de transcrição, processado uma vez e removido da memória. Apenas a transcrição persiste se você fizer login.',
        },
      ]}

      ctaHeadline="Transforme gravações do Zoom em texto limpo"
      ctaSubtitle="MP4 na Nuvem ou M4A, Gravação Local, qualquer nível do Zoom. Grátis por arquivo."
      ctaButton="Carregar gravação do Zoom"

      relatedLinks={[
        { href: '/pt/meeting-transcription',       label: 'Transcrição de Reunião' },
        { href: '/pt/google-meet-transcription',   label: 'Transcrição do Google Meet' },
        { href: '/pt/teams-meeting-transcription', label: 'Transcrição do Teams' },
        { href: '/pt/webinar-transcription',       label: 'Transcrição de Webinar' },
        { href: '/pt/interview-transcription',     label: 'Transcrição de Entrevista' },
      ]}
    />
  )
}