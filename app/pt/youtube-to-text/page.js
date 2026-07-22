import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/youtube-to-text',
  'fr': 'https://mictoo.com/fr/youtube-to-text',
  'de': 'https://mictoo.com/de/youtube-to-text',
  'es': 'https://mictoo.com/es/youtube-to-text',
  'ru': 'https://mictoo.com/ru/youtube-to-text',
  'it': 'https://mictoo.com/it/youtube-to-text',
  'pt': 'https://mictoo.com/pt/youtube-to-text',
  'pl': 'https://mictoo.com/pl/youtube-to-text',
  'ja': 'https://mictoo.com/ja/youtube-to-text',
  'ko': 'https://mictoo.com/ko/youtube-to-text',
  'x-default': 'https://mictoo.com/youtube-to-text',
}

export const metadata = {
  title: 'YouTube para Texto: Transcrição, Resumo e SRT | Mictoo',
  description:
    'Cole uma URL do YouTube para usar as legendas disponíveis ou faça upload de áudio para uma nova transcrição com marcas de tempo, resumo e exportação SRT.',
  alternates: {
    canonical: 'https://mictoo.com/pt/youtube-to-text',
    languages: LANGS,
  },
  openGraph: {
    title: 'YouTube para Texto: Transcrição Gratuita de Vídeos do YouTube | Mictoo',
    description: 'Cole uma URL do YouTube, obtenha uma transcrição limpa com marcas de tempo, resumo e legendas SRT.',
    url: 'https://mictoo.com/pt/youtube-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YouTube para Texto: Transcrição Gratuita do YouTube',
    description: 'Cole uma URL do YouTube ou faça upload de áudio, obtenha uma transcrição.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function PtYouTubeToTextPage() {
  return (
    <UseCaseLayout
      locale="pt"
      badge="URL do YouTube ou upload · Gratuito · Sem registro"
      h1First="YouTube para Texto"
      h1Second="Cole uma URL, obtenha uma transcrição limpa"
      subtitle="Cole um link do YouTube para usar legendas que já estão disponíveis ou faça upload de áudio para criar uma nova transcrição do Whisper. Revise o texto, gere um resumo e exporte legendas SRT."
      currentHref="/pt/youtube-to-text"
      enableYouTubeUrl

      platforms={[
        { name: 'YouTube',      iconKey: 'videoCameraFill', brandBg: '#FF0000' },
        { name: 'YouTube Live', iconKey: 'broadcast',       brandBg: '#B91C1C' },
        { name: 'YT Shorts',    iconKey: 'videoCameraFill', brandBg: '#DC2626' },
        { name: 'YT Music',     iconKey: 'soundwave',       brandBg: '#7F1D1D' },
        { name: 'YT Premium',   iconKey: 'videoCameraFill', brandBg: '#0F172A' },
        { name: 'Video hub',    iconKey: 'videoCameraFill', brandBg: '#2D8CFF', href: '/pt/transcribe-video-to-text' },
      ]}

      howItWorksTitle="Como funciona a transcrição do YouTube"
      steps={[
        {
          icon: 'folder',
          title: 'Cole uma URL ou faça upload de áudio',
          desc: 'Caminho rápido: cole o link do YouTube, nós buscamos as legendas existentes. Caminho do Whisper: faça upload do áudio para uma nova transcrição.',
        },
        {
          icon: 'upload',
          title: 'Legendas ou nova transcrição',
          desc: 'O caminho da URL retorna as legendas disponíveis. O caminho de upload executa o Whisper large-v3; o tempo de processamento depende da duração e tamanho do media.',
        },
        {
          icon: 'editPen',
          title: 'Resumo, SRT, tradução',
          desc: 'Resumo de IA ao lado da transcrição. Baixe SRT para o vídeo, traduza para mais de 50 idiomas, exporte como DOCX ou PDF.',
        },
      ]}

      exampleTitle="Exemplo de transcrição do YouTube"
      exampleFileName="youtube-video.mp4"
      exampleDurationLabel="12:34"
      exampleLines={[
        { t: '0:00',  line: 'Bem-vindo de volta ao canal. Hoje estamos analisando as três maiores mudanças na análise de produtos em 2026.' },
        { t: '0:12',  line: 'Mudança um, a reprodução de sessões é basicamente um requisito agora. Todas as ferramentas sérias a incluem no nível básico.' },
        { t: '0:24',  line: 'Mudança dois, a transição de painéis SQL personalizados para consultas em linguagem natural está acontecendo rapidamente.' },
        { t: '0:37',  line: 'Mudança três, ferramentas nativas de armazém estão substituindo a antiga pilha de análises baseadas em eventos.' },
        { t: '0:50',  line: 'Deixe-me explicar o que cada mudança realmente significa para as ferramentas que você deve avaliar este ano.' },
        { t: '1:02',  line: 'Reprodução de sessões primeiro. Se sua ferramenta atual cobra a mais por isso, isso é um sinal para pesquisar.' },
        { t: '1:14',  line: 'Ferramentas modernas agrupam reprodução com eventos, funis e coortes como um único produto, não um complemento pago.' },
      ]}
      summaryPoints={[
        '3 maiores mudanças na análise de produtos em 2026.',
        'A reprodução de sessões agora é um requisito em ferramentas sérias.',
        'Mudança de painéis SQL para consultas em linguagem natural.',
        'Ferramentas nativas de armazém substituindo pilhas baseadas em eventos.',
      ]}
      actionItems={[
        'Avalie a ferramenta atual para reprodução agrupada',
        'Experimente 1 ferramenta de análise nativa de armazém neste trimestre',
        'Escreva um resumo em blog das 3 mudanças',
      ]}

      whyTitle="Por que escolher a Mictoo para transcrição do YouTube"
      whyCards={[
        {
          icon: 'target',
          title: 'Escolha o caminho certo para a transcrição',
          desc: 'Use legendas existentes para velocidade ou faça upload de áudio quando quiser uma nova transcrição para revisar nomes, pontuação e termos especializados.',
        },
        {
          icon: 'clip',
          title: 'SRT para a descrição do vídeo',
          desc: 'Baixe SRT e reenvie para o YouTube Studio para legendas editadas ou use em outro lugar no seu fluxo de trabalho.',
        },
        {
          icon: 'sparkles',
          title: 'Resumo de IA para notas de episódios',
          desc: 'Rascunho sólido para a descrição do vídeo, resumo do blog e títulos de capítulos. Transforme um podcast de 60 minutos em 200 palavras.',
        },
        {
          icon: 'globe',
          title: 'Traduza legendas para mais de 50 idiomas',
          desc: 'Público internacional? Traduza a transcrição e reenvie como SRT traduzido para o seu vídeo.',
        },
      ]}

      scenariosTitle="Cenários comuns do YouTube"
      scenarios={[
        { icon: 'search',    title: 'Pesquisar um vídeo' },
        { icon: 'editPen',   title: 'Resumo do blog' },
        { icon: 'clip',      title: 'Legendas SRT' },
        { icon: 'chat',      title: 'Citação' },
        { icon: 'globe',     title: 'Traduzir legendas' },
        { icon: 'headset',   title: 'Podcast no YT' },
      ]}

      tipsTitle="Dicas para transcrições do YouTube"
      tips={[
        'O caminho mais rápido é a URL quando o vídeo já tem legendas.',
        'Para vídeos técnicos ou não em inglês, prefira o caminho de upload de áudio.',
        'Streams muito longas: baixe o áudio e divida antes do upload.',
        'Para seus próprios vídeos, faça upload do áudio original para melhor precisão.',
      ]}

      guidesTitle="Ferramentas relacionadas"
      guides={[
        { href: '/pt/transcribe-video-to-text',      icon: 'video', title: 'Vídeo para Texto',       desc: 'MP4, MOV, WebM não do YouTube' },
        { href: '/pt/transcribe-audio-to-text',      icon: 'file',  title: 'Áudio para Texto',       desc: 'Qualquer formato de áudio' },
        { href: '/pt/free-srt-generator',            icon: 'file',  title: 'Gerador de SRT',       desc: 'Exportação focada em legendas' },
        { href: '/pt/how-to-download-youtube-video', icon: 'video', title: 'Baixar do YT',    desc: 'Guia: como obter o áudio' },
      ]}

      faq={[
        {
          q: 'Posso apenas colar uma URL do YouTube?',
          a: 'Sim. Quando o vídeo tem legendas (carregadas pelo criador ou geradas automaticamente), nós as buscamos em segundos. Se não houver legendas, faça upload do arquivo de áudio para uma transcrição completa do Whisper.',
        },
        {
          q: 'Como o caminho de upload difere das legendas do YouTube?',
          a: 'O caminho da URL retorna legendas já disponíveis para o vídeo. O caminho de upload cria uma transcrição separada do Whisper a partir do áudio. Qualquer versão pode conter erros, então revise nomes, números e tempos antes de publicar.',
        },
        {
          q: 'Como posso extrair o áudio de um vídeo do YouTube?',
          a: 'Use uma ferramenta de navegador ou extrator de desktop de sua escolha, depois faça upload do MP3 ou M4A. Não hospedamos uma ferramenta de download por razões de direitos autorais, mas veja nosso guia "Como baixar um vídeo do YouTube" para opções comuns.',
        },
        {
          q: 'A Mictoo transcreve vídeos do YouTube em idiomas não ingleses?',
          a: 'Sim. O Whisper large-v3 suporta mais de 50 idiomas com detecção automática. Para clipes curtos ou sotaques incomuns, defina o idioma explicitamente no menu suspenso.',
        },
        {
          q: 'Posso obter um resumo de IA do vídeo?',
          a: 'Sim. O resumo de IA aparece automaticamente ao lado da transcrição. Rascunho sólido para uma descrição de vídeo, resumo de blog ou notas de episódios.',
        },
        {
          q: 'Posso baixar SRT para adicionar legendas de volta ao meu vídeo?',
          a: 'Sim. Baixe SRT ou VTT após a transcrição. Ambos os formatos funcionam com YouTube Studio, Premiere, DaVinci, Final Cut, CapCut e a maioria dos players modernos.',
        },
        {
          q: 'Posso traduzir uma transcrição do YouTube?',
          a: 'Sim. Escolha um idioma-alvo e clique em Traduzir. Útil para públicos internacionais ou páginas de reprodução não em inglês.',
        },
        {
          q: 'Os meus dados do YouTube são mantidos nos seus servidores?',
          a: 'Não. As legendas buscadas e o áudio carregado são processados uma vez e descartados. Apenas a transcrição persiste se você fizer login e salvá-la no histórico.',
        },
      ]}

      ctaHeadline="Transforme qualquer vídeo do YouTube em texto"
      ctaSubtitle="Cole uma URL para o caminho rápido, faça upload de áudio para o caminho completo do Whisper. Gratuito por vídeo."
      ctaButton="Cole uma URL do YouTube ou faça upload"

      relatedLinks={[
        { href: '/pt/transcribe-video-to-text', label: 'Vídeo para Texto' },
        { href: '/pt/podcast-transcription',    label: 'Transcrição de Podcast' },
        { href: '/pt/lecture-transcription',    label: 'Transcrição de Aula' },
        { href: '/pt/free-srt-generator',       label: 'Gerador de SRT Gratuito' },
        { href: '/pt/webinar-transcription',    label: 'Transcrição de Webinar' },
      ]}
    />
  )
}