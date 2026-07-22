import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/webinar-transcription',
  'fr': 'https://mictoo.com/fr/webinar-transcription',
  'de': 'https://mictoo.com/de/webinar-transcription',
  'es': 'https://mictoo.com/es/webinar-transcription',
  'ru': 'https://mictoo.com/ru/webinar-transcription',
  'it': 'https://mictoo.com/it/webinar-transcription',
  'pt': 'https://mictoo.com/pt/webinar-transcription',
  'pl': 'https://mictoo.com/pl/webinar-transcription',
  'ja': 'https://mictoo.com/ja/webinar-transcription',
  'ko': 'https://mictoo.com/ko/webinar-transcription',
  'x-default': 'https://mictoo.com/webinar-transcription',
}

export const metadata = {
  title: 'Transcrição de Webinar com Resumo e Legendas | Mictoo',
  description:
    'Carregue uma gravação de webinar e obtenha texto com marcação de tempo, um resumo de IA e legendas SRT/VTT para a repetição.',
  alternates: {
    canonical: 'https://mictoo.com/pt/webinar-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: 'Transcrição de Webinar: Grátis | Mictoo',
    description: 'Carregue a sua gravação de webinar, obtenha uma transcrição limpa.',
    url: 'https://mictoo.com/pt/webinar-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transcrição de Webinar',
    description: 'Transcrição gratuita para qualquer plataforma de webinar.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function PtWebinarTranscriptionPage() {
  return (
    <UseCaseLayout
      locale="pt"
      badge="Webinars · Long-form · Grátis"
      h1First="Transcrição de Webinar"
      h1Second="Transcrição gratuita para qualquer gravação de webinar"
      subtitle="Carregue a partir de Zoom Webinars, StreamYard, Demio, ON24, GoToWebinar ou Restream. Obtenha uma transcrição completa, resumo de IA e legendas prontas para a página de repetição sob demanda."
      currentHref="/pt/webinar-transcription"

      platforms={[
        { name: 'Zoom Webinar', iconKey: 'broadcast',       brandBg: '#2D8CFF', href: '/pt/zoom-transcription' },
        { name: 'StreamYard',   iconKey: 'broadcast',       brandBg: '#6B21A8' },
        { name: 'Restream',     iconKey: 'broadcast',       brandBg: '#EC1E62' },
        { name: 'ON24',         iconKey: 'videoCameraFill', brandBg: '#3B82F6' },
        { name: 'Demio',        iconKey: 'videoCameraFill', brandBg: '#F97316' },
        { name: 'Livestorm',    iconKey: 'videoCameraFill', brandBg: '#DA1F5C' },
      ]}

      howItWorksTitle="Como funciona a transcrição de webinars"
      steps={[
        {
          icon: 'folder',
          title: 'Exporte a gravação do webinar',
          desc: 'A maioria das plataformas fornece um download em MP4 após o evento. Algumas também fornecem áudio apenas em M4A.',
        },
        {
          icon: 'upload',
          title: 'Coloque o arquivo aqui',
          desc: 'Webinars longos (60+ minutos) beneficiam de auto-divisão ao entrar. Grátis até 25 MB anonimamente, 60 MB ao entrar.',
        },
        {
          icon: 'editPen',
          title: 'Transcrição, resumo, legendas',
          desc: 'Transcrição com marcação de tempo para a página de repetição, resumo de IA como recapitulação do blog, SRT para legendas no vídeo sob demanda.',
        },
      ]}

      exampleTitle="Exemplo de transcrição de webinar"
      exampleFileName="product-launch-webinar.mp4"
      exampleDurationLabel="1:04:22"
      exampleLines={[
        { t: '0:00',  line: 'Bem-vindos a todos, e obrigado por se juntarem. Meu nome é Sam e lidero o marketing de produtos na empresa.' },
        { t: '0:12',  line: 'Hoje estamos oficialmente lançando a versão cinco da plataforma, e quero mostrar o que há de novo.' },
        { t: '0:25',  line: 'Três mudanças principais: relatórios reconstruídos, integrações nativas com os dez principais CRMs e um novo modelo de preços.' },
        { t: '0:40',  line: 'Deixe-me começar com relatórios, porque essa é a mudança que a maioria de vocês tem perguntado há dois anos.' },
        { t: '0:52',  line: 'Os relatórios antigos eram lentos, quebravam em grandes conjuntos de dados e eram difíceis de personalizar. Todas as três questões foram corrigidas.' },
        { t: '1:07',  line: 'Aqui está uma demonstração ao vivo do novo construtor de relatórios. Enquanto clico, preste atenção em quão rápido as pré-visualizações são atualizadas.' },
        { t: '1:22',  line: 'Cada campo é arrastável, os filtros são empilháveis e você pode salvar qualquer relatório como um modelo compartilhado.' },
      ]}
      summaryPoints={[
        'Lançamento da versão 5 com 3 mudanças principais.',
        'Relatórios reconstruídos (corrige velocidade, tamanho do conjunto de dados, personalização).',
        'Integrações nativas com os 10 principais CRMs.',
        'Novo modelo de preços.',
      ]}
      actionItems={[
        'Rascunho de recapitulação do blog a partir da transcrição',
        'Cortar clipe de demonstração para social',
        'Publicar repetição legendada sob demanda',
      ]}

      whyTitle="Por que escolher Mictoo para transcrição de webinars"
      whyCards={[
        {
          icon: 'clip',
          title: 'Legendas SRT para a repetição',
          desc: 'As marcações de tempo alinham-se ao vídeo original. Coloque SRT no seu reprodutor de repetição sob demanda ou upload no YouTube.',
        },
        {
          icon: 'sparkles',
          title: 'Resumo de IA para a recapitulação do blog',
          desc: 'Transforma um webinar de 60 minutos em um resumo de 200 palavras. Um bom primeiro rascunho para o e-mail de acompanhamento ou post no blog.',
        },
        {
          icon: 'search',
          title: 'Transcrição pesquisável na página de destino',
          desc: 'Publique a transcrição na página de destino sob demanda. Os participantes podem escanear, o SEO melhora, ninguém precisa assistir 60 minutos.',
        },
        {
          icon: 'globe',
          title: 'Traduza para participantes internacionais',
          desc: 'Tradução com um clique para mais de 50 idiomas para e-mails de acompanhamento e páginas de repetição não em inglês.',
        },
      ]}

      scenariosTitle="Cenários comuns de webinars"
      scenarios={[
        { icon: 'broadcast', title: 'Lançamento de produto' },
        { icon: 'book',      title: 'Treinamento / academia' },
        { icon: 'briefcase', title: 'Capacitação de vendas' },
        { icon: 'target',    title: 'Educação do cliente' },
        { icon: 'users',     title: 'Briefing para analistas' },
        { icon: 'globe',     title: 'Evento multilíngue' },
      ]}

      tipsTitle="Dicas para gravações de webinars"
      tips={[
        'Prefira exportação apenas de áudio quando a sua plataforma oferecer.',
        'Para webinars de 60+ minutos, entre para auto-divisão de até 3 horas.',
        'Inclua o nome do anfitrião no arquivo para que o cabeçalho da transcrição mantenha o contexto.',
        'Extraia citações-chave da transcrição para clipes sociais.',
      ]}

      guidesTitle="Ferramentas relacionadas"
      guides={[
        { href: '/pt/zoom-transcription',        icon: 'video', title: 'Zoom Webinar',      desc: 'Gravação em nuvem MP4 / M4A' },
        { href: '/pt/free-srt-generator',        icon: 'file',  title: 'Gerador de SRT',     desc: 'Legendas de vídeo sob demanda' },
        { href: '/pt/podcast-transcription',     icon: 'headset', title: 'Podcast',         desc: 'Reutilizar áudio de webinar' },
        { href: '/pt/timestamped-transcription', icon: 'file',  title: 'Com marcação de tempo', desc: 'Exportação amigável ao leitor' },
      ]}

      faq={[
        {
          q: 'Com quais plataformas de webinar a Mictoo funciona?',
          a: 'Com todas. Aceitamos qualquer arquivo de áudio ou vídeo, independentemente da plataforma. Zoom Webinars, StreamYard, Demio, Livestorm, ON24, GoToWebinar, Restream, Riverside Studio e mais.',
        },
        {
          q: 'Minha gravação de webinar tem mais de 60 MB. E agora?',
          a: 'Entre para auto-divisão (até cerca de 3 horas). Ou exporte áudio apenas da plataforma, ou extraia áudio: ffmpeg -i webinar.mp4 -vn -ac 1 -ar 16000 audio.m4a.',
        },
        {
          q: 'Posso publicar a transcrição na página de repetição sob demanda?',
          a: 'Sim. Copie a transcrição para o HTML da sua página de destino sob demanda. Adiciona conteúdo pesquisável, melhora o SEO, dá aos participantes que não podem assistir uma forma de escanear.',
        },
        {
          q: 'Posso obter legendas para o vídeo gravado do webinar?',
          a: 'Sim. Baixe SRT ou VTT após a transcrição. Ambos funcionam com YouTube, Vimeo, Wistia, Descript e todos os reprodutores de vídeo modernos.',
        },
        {
          q: 'A Mictoo identifica apresentadores vs oradores de Q&A?',
          a: 'Não. A transcrição atual é texto contínuo com marcações de tempo por linha e sem rótulos automáticos de orador.',
        },
        {
          q: 'Posso traduzir a transcrição do webinar?',
          a: 'Sim. Escolha um idioma alvo e clique em Traduzir. Útil para participantes internacionais ou páginas de repetição não em inglês.',
        },
        {
          q: 'As gravações de webinars são mantidas nos seus servidores?',
          a: 'Não. O arquivo é transmitido para o fornecedor de transcrição, processado uma vez e descartado. Apenas a transcrição persiste em contas com login.',
        },
      ]}

      ctaHeadline="Transforme seu webinar em um ativo pronto para repetição"
      ctaSubtitle="Transcrição completa, legendas SRT, resumo de IA e cópia pesquisável na página de destino."
      ctaButton="Carregar uma gravação de webinar"

      relatedLinks={[
        { href: '/pt/meeting-transcription',   label: 'Transcrição de Reunião' },
        { href: '/pt/zoom-transcription',      label: 'Transcrição de Zoom' },
        { href: '/pt/podcast-transcription',   label: 'Transcrição de Podcast' },
        { href: '/pt/lecture-transcription',   label: 'Transcrição de Aula' },
        { href: '/pt/free-srt-generator',      label: 'Gerador de SRT Gratuito' },
      ]}
    />
  )
}