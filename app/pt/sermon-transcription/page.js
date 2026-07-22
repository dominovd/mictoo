import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/sermon-transcription',
  'fr': 'https://mictoo.com/fr/sermon-transcription',
  'de': 'https://mictoo.com/de/sermon-transcription',
  'es': 'https://mictoo.com/es/sermon-transcription',
  'ru': 'https://mictoo.com/ru/sermon-transcription',
  'it': 'https://mictoo.com/it/sermon-transcription',
  'pt': 'https://mictoo.com/pt/sermon-transcription',
  'pl': 'https://mictoo.com/pl/sermon-transcription',
  'ja': 'https://mictoo.com/ja/sermon-transcription',
  'ko': 'https://mictoo.com/ko/sermon-transcription',
  'x-default': 'https://mictoo.com/sermon-transcription',
}

export const metadata = {
  title: 'Transcrição de Sermões para Serviços e Estudo | Mictoo',
  description:
    'Carregue uma gravação de sermão ou serviço e obtenha texto pesquisável, marcas de tempo, um resumo de IA e ficheiros de exportação.',
  alternates: {
    canonical: 'https://mictoo.com/pt/sermon-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: 'Transcrição de Sermões: Grátis | Mictoo',
    description: 'Carregue a gravação do seu serviço, obtenha uma transcrição limpa.',
    url: 'https://mictoo.com/pt/sermon-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transcrição de Sermões',
    description: 'Transcrições grátis para igrejas e estudo.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function PtSermonTranscriptionPage() {
  return (
    <UseCaseLayout
      locale="pt"
      badge="Igrejas · Pastores · Estudo · Grátis"
      h1First="Transcrição de Sermões"
      h1Second="Transcrição grátis para serviços e estudo"
      subtitle="Carregue uma gravação de serviço de domingo, ensino em dia de semana ou sessão de estudo bíblico. Obtenha uma transcrição limpa com marcas de tempo para o site da igreja, notas de estudo e notas de episódios de podcast."
      currentHref="/pt/sermon-transcription"

      platforms={[
        { name: 'SermonAudio',   iconKey: 'broadcast', brandBg: '#B91C1C' },
        { name: 'ProPresenter',  iconKey: 'monitor',   brandBg: '#0EA5E9' },
        { name: 'YouTube Live',  iconKey: 'broadcast', brandBg: '#FF0000' },
        { name: 'Facebook Live', iconKey: 'broadcast', brandBg: '#1877F2' },
        { name: 'Zoom',          iconKey: 'videoCameraFill', brandBg: '#2D8CFF', href: '/pt/zoom-transcription' },
        { name: 'Igreja em direto', iconKey: 'broadcast', brandBg: '#6B21A8' },
      ]}

      howItWorksTitle="Como funciona a transcrição de sermões"
      steps={[
        {
          icon: 'folder',
          title: 'Exporte a gravação do serviço',
          desc: 'MP4 de livestream de domingo, WAV da mesa de som do santuário ou o MP3 do podcast que já publica.',
        },
        {
          icon: 'upload',
          title: 'Carregue o ficheiro aqui',
          desc: 'MP3, MP4, WAV, M4A funcionam todos. Serviços longos beneficiam de auto-divisão ao iniciar sessão.',
        },
        {
          icon: 'editPen',
          title: 'Transcrição para o site',
          desc: 'Texto limpo pronto para o site da igreja, notas de estudo, descrição do podcast e arquivo pesquisável.',
        },
      ]}

      exampleTitle="Exemplo de transcrição de sermão"
      exampleFileName="domingo-serviço-14-jan.mp3"
      exampleDurationLabel="38:56"
      exampleLines={[
        { t: '0:00',  line: 'Bom dia, igreja. Por favor, abram comigo o Evangelho de Mateus, capítulo cinco, versículo três.' },
        { t: '0:12',  line: 'Esta manhã começamos uma nova série sobre o que Jesus chamou de vida abençoada, as Bem-Aventuranças.' },
        { t: '0:24',  line: 'Bem-aventurados os pobres de espírito, porque deles é o reino dos céus. Esse é o nosso texto esta semana.' },
        { t: '0:38',  line: 'A palavra que Jesus usa aqui para abençoado não significa feliz de uma forma superficial ou circunstancial.' },
        { t: '0:51',  line: 'Significa estar profundamente, fundamentalmente contente por causa da sua relação com Deus, independentemente das circunstâncias.' },
        { t: '1:04',  line: 'E ser pobre de espírito não se trata de pobreza material. É uma postura de dependência de Deus.' },
        { t: '1:18',  line: 'É saber que tudo o que você constrói, tudo o que você realiza, repousa, em última análise, na graça, não no mérito.' },
      ]}
      summaryPoints={[
        'Nova série sobre as Bem-Aventuranças (Mateus 5).',
        'Foco: "Bem-aventurados os pobres de espírito."',
        'Bem-aventurado = contentamento profundo através da relação com Deus.',
        'Pobre de espírito = postura de dependência, não pobreza material.',
      ]}
      actionItems={[
        'Publicar a transcrição no site da igreja',
        'Cortar um clipe de 60 segundos para as redes sociais',
        'Incluir no guia de estudo semanal',
      ]}

      whyTitle="Por que escolher Mictoo para transcrição de sermões"
      whyCards={[
        {
          icon: 'search',
          title: 'Arquivo de sermões pesquisável',
          desc: 'Publique transcrições no site da igreja. Os congregantes encontram ensinamentos por tópico ou versículo, meses ou anos depois.',
        },
        {
          icon: 'sparkles',
          title: 'Notas de estudo e guias para pequenos grupos',
          desc: 'O resumo de IA é o ponto de partida para o guia de estudo semanal ou perguntas de discussão para pequenos grupos.',
        },
        {
          icon: 'clip',
          title: 'Legendas para a repetição do livestream',
          desc: 'SRT para a versão em vídeo do YouTube ou Facebook. Acessibilidade para os membros com dificuldades auditivas.',
        },
        {
          icon: 'globe',
          title: 'Traduzir para congregações multilíngues',
          desc: 'Sermão em inglês, mas parte da congregação prefere espanhol ou coreano. Tradução com um clique.',
        },
      ]}

      scenariosTitle="Cenários comuns de sermões"
      scenarios={[
        { icon: 'church',    title: 'Serviço de domingo' },
        { icon: 'book',      title: 'Estudo bíblico' },
        { icon: 'chat',      title: 'Pequeno grupo' },
        { icon: 'sparkles',  title: 'Devocional' },
        { icon: 'globe',     title: 'Missões' },
        { icon: 'headset',   title: 'Podcast' },
      ]}

      tipsTitle="Dicas para gravações de sermões"
      tips={[
        'WAV ou M4A da mesa de som dá uma entrada mais limpa do que o microfone ambiente.',
        'Para serviços longos acima de 60 MB, inicie sessão para auto-divisão.',
        'Para congregações com muitos termos bíblicos, revise palavras-chave.',
        'Inclua o título do sermão no nome do ficheiro para organização do arquivo.',
      ]}

      guidesTitle="Ferramentas relacionadas"
      guides={[
        { href: '/pt/transcribe-mp3-to-text',    icon: 'file',  title: 'Formato MP3',        desc: 'Exportação amigável para podcasts' },
        { href: '/pt/wav-to-text',               icon: 'file',  title: 'Formato WAV',        desc: 'Gravação da mesa de som' },
        { href: '/pt/lecture-transcription',     icon: 'book',  title: 'Transcrição de Aulas',   desc: 'Conteúdo focado no ensino' },
        { href: '/pt/free-srt-generator',        icon: 'file',  title: 'Legendas SRT',      desc: 'Repetição do livestream' },
      ]}

      faq={[
        {
          q: 'Posso transcrever uma gravação de livestream de domingo?',
          a: 'Sim. Baixe o MP4 do YouTube Live, Facebook Live ou do seu fornecedor de transmissão da igreja e carregue-o aqui. O vídeo é auto-demuxado no servidor.',
        },
        {
          q: 'O Mictoo lida com referências bíblicas e termos teológicos com precisão?',
          a: 'O Whisper large-v3 lida bem com vocabulário comum em inglês de escrituras e teologia. Para nomes próprios incomuns (transliterações mais antigas, termos de tradução específicos), revise após a transcrição.',
        },
        {
          q: 'O Mictoo é grátis para igrejas?',
          a: 'Sim. Grátis por ficheiro até o limite de tamanho. Sem nível ou licença específica para igrejas.',
        },
        {
          q: 'Minha gravação de serviço tem mais de 60 MB. E agora?',
          a: 'Inicie sessão para auto-divisão (até cerca de 3 horas). Ou reduza a amostra: ffmpeg -i service.mp3 -b:a 64k -ac 1 out.mp3. Mesma precisão, 3-5x menor.',
        },
        {
          q: 'Posso obter legendas para a repetição do livestream?',
          a: 'Sim. Baixe SRT ou VTT após a transcrição. As marcas de tempo alinham-se com a gravação original para YouTube, Facebook ou o seu serviço de vídeo.',
        },
        {
          q: 'Posso traduzir o sermão para a equipe de missões?',
          a: 'Sim. Escolha um idioma alvo e clique em Traduzir. Útil para congregações multilíngues, missões e ministério de diáspora.',
        },
        {
          q: 'As gravações são mantidas nos seus servidores?',
          a: 'Não. O áudio é transmitido para o fornecedor de transcrição, processado uma vez e descartado. Apenas a transcrição persiste em contas com sessão iniciada.',
        },
      ]}

      ctaHeadline="Transforme cada sermão em um recurso pesquisável"
      ctaSubtitle="Transcrição para o site, legendas para a repetição, notas para grupos de estudo."
      ctaButton="Carregar um sermão"

      relatedLinks={[
        { href: '/pt/lecture-transcription',     label: 'Transcrição de Aulas' },
        { href: '/pt/podcast-transcription',     label: 'Transcrição de Podcast' },
        { href: '/pt/webinar-transcription',     label: 'Transcrição de Webinar' },
        { href: '/pt/free-srt-generator',        label: 'Gerador de SRT Grátis' },
        { href: '/pt/interview-transcription',   label: 'Transcrição de Entrevista' },
      ]}
    />
  )
}