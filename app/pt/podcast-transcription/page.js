import UseCaseLayout from '@/components/UseCaseLayout'

export const metadata = {
  title: 'Transcrição de Podcast com Resumo e SRT | Mictoo',
  description:
    'Carregue um episódio de podcast e obtenha texto com marcação de tempo, um resumo de IA e exportações para notas de apresentação, legendas e seu arquivo.',
  alternates: {
    canonical: 'https://mictoo.com/pt/podcast-transcription',
    languages: {
      'en': 'https://mictoo.com/podcast-transcription',
      'fr': 'https://mictoo.com/fr/podcast-transcription',
      'de': 'https://mictoo.com/de/podcast-transcription',
      'es': 'https://mictoo.com/es/podcast-transcription',
      'ru': 'https://mictoo.com/ru/podcast-transcription',
      'it': 'https://mictoo.com/it/podcast-transcription',
      'pt': 'https://mictoo.com/pt/podcast-transcription',
      'pl': 'https://mictoo.com/pl/podcast-transcription',
      'ja': 'https://mictoo.com/ja/podcast-transcription',
      'ko': 'https://mictoo.com/ko/podcast-transcription',
      'x-default': 'https://mictoo.com/podcast-transcription',
    },
  },
  openGraph: {
    title: 'Transcrição de Podcast: Gerador de Transcrições de Podcast Gratuito | Mictoo',
    description: 'Carregue seu episódio, obtenha uma transcrição limpa com marcação de tempo em segundos.',
    url: 'https://mictoo.com/pt/podcast-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transcrição de Podcast: Gerador Gratuito',
    description: 'Carregue seu episódio, obtenha uma transcrição limpa.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function PtPodcastTranscriptionPage() {
  return (
    <UseCaseLayout
      locale="pt"
      badge="Podcasters · Anfitriões · Gratuito"
      h1First="Transcrição de Podcast"
      h1Second="Transcrição de IA gratuita para cada episódio"
      subtitle="Carregue seu episódio de qualquer ferramenta de gravação. Obtenha uma transcrição limpa, com marcação de tempo e resumo de IA pronta para notas de apresentação, resumo SEO e legendas do YouTube."
      currentHref="/pt/podcast-transcription"

      platforms={[
        { name: 'Riverside',  iconKey: 'waveMic',   brandBg: '#4B2AF7' },
        { name: 'Zencastr',   iconKey: 'soundwave', brandBg: '#F7B32B' },
        { name: 'SquadCast',  iconKey: 'waveMic',   brandBg: '#7E22CE' },
        { name: 'Cleanfeed',  iconKey: 'soundwave', brandBg: '#0F766E' },
        { name: 'Descript',   iconKey: 'soundwave', brandBg: '#111827' },
        { name: 'Anchor',     iconKey: 'mic',       brandBg: '#8B5CF6' },
      ]}

      howItWorksTitle="Como funciona a transcrição de podcast"
      steps={[
        {
          icon: 'folder',
          title: 'Exporte o episódio',
          desc: 'Qualquer formato que sua DAW ou ferramenta de gravação produza. MP3 é o mais comum, mas M4A, WAV e FLAC também funcionam.',
        },
        {
          icon: 'upload',
          title: 'Carregue o arquivo aqui',
          desc: 'Carregue arquivos de até 60 MB quando estiver logado. Episódios mais longos são automaticamente divididos em segmentos e unidos novamente.',
        },
        {
          icon: 'editPen',
          title: 'Notas de apresentação, legendas, exportações',
          desc: 'Transcrição, resumo de IA, SRT para a versão em vídeo do YouTube e DOCX para o blog. O tempo de processamento depende do comprimento do episódio e do tamanho do arquivo.',
        },
      ]}

      exampleTitle="Exemplo de transcrição de podcast"
      exampleFileName="episode-042.mp3"
      exampleDurationLabel="52:07"
      exampleLines={[
        { t: '0:00',  line: 'Bem-vindo de volta ao programa. Este é o episódio quarenta e dois, e hoje estamos falando sobre podcasting independente em 2026.' },
        { t: '0:10',  line: 'Meu convidado tem um programa semanal há oito anos sem perder um episódio. Obrigado por estar aqui.' },
        { t: '0:20',  line: 'Obrigado por me receber. É louco pensar que começamos isso quando todos disseram que o áudio já estava saturado.' },
        { t: '0:30',  line: 'Vamos começar por aí. O que era diferente ao lançar um podcast em 2018 em comparação com agora.' },
        { t: '0:38',  line: 'A distribuição era mais difícil de penetrar, mas o público era mais paciente. A atenção era mais barata, essencialmente.' },
        { t: '0:48',  line: 'Hoje as ferramentas são incríveis. Transcrição em segundos, notas de apresentação de IA, mas a atenção em si é muito mais escassa.' },
        { t: '0:58',  line: 'Esse é um bom gancho. Qual é o seu fluxo de trabalho de notas de apresentação agora que as transcrições são basicamente gratuitas.' },
      ]}
      summaryPoints={[
        'Episódio 42, foco no podcasting independente em 2026.',
        'Convidado: anfitrião de programa semanal de 8 anos.',
        'Discussão: mudanças na distribuição de 2018 a 2026.',
        'A economia da atenção é o novo gargalo.',
      ]}
      actionItems={[
        'Redigir notas de apresentação a partir do resumo',
        'Extrair 3 citações para redes sociais',
        'Publicar SRT na versão em vídeo do YouTube',
      ]}

      whyTitle="Por que escolher Mictoo para transcrição de podcast"
      whyCards={[
        {
          icon: 'sparkles',
          title: 'Resumo de IA para notas de apresentação',
          desc: 'Rascunho sólido para descrições de episódios, resumos de blog e notas de apresentação otimizadas para SEO.',
        },
        {
          icon: 'clip',
          title: 'SRT para a versão do YouTube',
          desc: 'As marcas de tempo alinham-se ao áudio original. Carregue o SRT no YouTube Studio e as legendas estão feitas.',
        },
        {
          icon: 'globe',
          title: 'Traduza para públicos internacionais',
          desc: 'Tradução com um clique para mais de 50 idiomas. Anfitriões solo distribuem globalmente sem uma agência de tradução.',
        },
        {
          icon: 'gear',
          title: 'Qualquer bitrate, qualquer gravador',
          desc: 'Notas de voz de 32 kbps a 320 kbps transcrevem de forma idêntica para uma fala limpa.',
        },
      ]}

      scenariosTitle="Cenários de transcrição de podcast"
      scenarios={[
        { icon: 'chat',      title: 'Notas de apresentação' },
        { icon: 'clip',      title: 'Legendas do YouTube' },
        { icon: 'search',    title: 'Resumo SEO' },
        { icon: 'sparkles',  title: 'Citações destacadas' },
        { icon: 'globe',     title: 'Tradução' },
        { icon: 'book',      title: 'Catálogo de episódios' },
      ]}

      tipsTitle="Dicas para transcrições de podcast mais limpas"
      tips={[
        'Exporte um stem somente de voz quando sua DAW permitir.',
        'Um MP3 mono de 64 kbps otimizado para voz transcreve tão bem quanto.',
        'Para episódios de entrevista, remova as camas musicais antes da transcrição.',
        'Revise os nomes do anfitrião e do convidado uma vez, eles aparecem consistentemente depois.',
      ]}

      guidesTitle="Guias de transcrição relacionados"
      guides={[
        { href: '/pt/transcribe-mp3-to-text',    icon: 'file',  title: 'Transcrição de MP3',   desc: 'Guia de formato de podcast' },
        { href: '/pt/m4a-to-text',               icon: 'file',  title: 'Transcrição de M4A',   desc: 'Exportações do GarageBand e Apple' },
        { href: '/pt/wav-to-text',               icon: 'file',  title: 'Transcrição de WAV',   desc: 'Bounces de estúdio' },
        { href: '/pt/timestamped-transcription', icon: 'file',  title: 'Mergulho profundo em timestamps', desc: 'Mecânica de exportação SRT / VTT' },
      ]}

      faq={[
        {
          q: 'Com quais plataformas de podcast o Mictoo funciona?',
          a: 'Com todas elas. Aceitamos qualquer arquivo de áudio ou vídeo, independentemente do host. Comum: Riverside, Zencastr, SquadCast, Anchor, Buzzsprout, Libsyn. Gratuito por arquivo até 60 MB logado.',
        },
        {
          q: 'Posso obter a transcrição como notas de apresentação automaticamente?',
          a: 'O resumo de IA aparece ao lado da transcrição automaticamente. Use-o como o primeiro rascunho de suas notas de apresentação e depois ajuste para se adequar à sua voz.',
        },
        {
          q: 'Meu episódio tem mais de 60 MB. E agora?',
          a: 'Faça login para dividir automaticamente arquivos mais longos, ou reduza a amostra primeiro com ffmpeg -i episode.mp3 -b:a 64k -ac 1 out.mp3. Um podcast de 60 minutos se torna ~28 MB sem perda de precisão.',
        },
        {
          q: 'Posso baixar SRT para a versão em vídeo do YouTube?',
          a: 'Sim. SRT e VTT incluem marcas de tempo alinhadas ao áudio original. Carregue diretamente no YouTube Studio.',
        },
        {
          q: 'O Mictoo transcreve podcasts em idiomas não ingleses?',
          a: 'Sim. Whisper large-v3 suporta mais de 50 idiomas com detecção automática. Para episódios curtos ou sotaques incomuns, escolha o idioma explicitamente.',
        },
        {
          q: 'Os episódios são armazenados em seus servidores?',
          a: 'Não. O áudio é transmitido para o provedor de transcrição, processado uma vez e removido da memória. As transcrições são armazenadas apenas se você estiver logado.',
        },
        {
          q: 'Posso identificar quem está falando (anfitrião vs convidado)?',
          a: 'Não. A transcrição atual é texto contínuo com marcas de tempo e sem rótulos automáticos de falantes.',
        },
      ]}

      ctaHeadline="Transforme cada episódio em texto publicável"
      ctaSubtitle="Notas de apresentação, legendas do YouTube, resumo SEO, tradução. Tudo a partir de um único upload."
      ctaButton="Carregar um episódio de podcast"

      relatedLinks={[
        { href: '/pt/interview-transcription',   label: 'Transcrição de Entrevista' },
        { href: '/pt/webinar-transcription',     label: 'Transcrição de Webinar' },
        { href: '/pt/transcribe-mp3-to-text',    label: 'MP3 para Texto' },
        { href: '/pt/free-srt-generator',        label: 'Gerador de SRT Gratuito' },
        { href: '/pt/meeting-transcription',     label: 'Transcrição de Reunião' },
      ]}
    />
  )
}