import FormatPageLayout from '@/components/FormatPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/transcribe-video-to-text',
  'fr': 'https://mictoo.com/fr/transcribe-video-to-text',
  'de': 'https://mictoo.com/de/transcribe-video-to-text',
  'es': 'https://mictoo.com/es/transcribe-video-to-text',
  'ru': 'https://mictoo.com/ru/transcribe-video-to-text',
  'it': 'https://mictoo.com/it/transcribe-video-to-text',
  'pt': 'https://mictoo.com/pt/transcribe-video-to-text',
  'pl': 'https://mictoo.com/pl/transcribe-video-to-text',
  'ja': 'https://mictoo.com/ja/transcribe-video-to-text',
  'ko': 'https://mictoo.com/ko/transcribe-video-to-text',
  'x-default': 'https://mictoo.com/transcribe-video-to-text',
}

export const metadata = {
  title: 'Vídeo para Texto: Transcrição de Vídeo Online Gratuita para MP4, MOV, WebM | Mictoo',
  description:
    'Carregue um vídeo MP4, MOV, WebM, AVI ou MKV e obtenha uma transcrição com marcas de tempo, resumo de IA e legendas SRT. Para gravações de tela, tutoriais, vlogs e webinars.',
  alternates: {
    canonical: 'https://mictoo.com/pt/transcribe-video-to-text',
    languages: LANGS,
  },
  openGraph: {
    title: 'Vídeo para Texto: Transcrição de Vídeo Online Gratuita | Mictoo',
    description: 'Transcrição de vídeo MP4, MOV, WebM com SRT, resumo e tradução.',
    url: 'https://mictoo.com/pt/transcribe-video-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vídeo para Texto: Transcrição de Vídeo Online Gratuita',
    description: 'Transcrição de vídeo MP4, MOV, WebM com SRT e resumo.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function PtTranscribeVideoToTextPage() {
  return (
    <FormatPageLayout
      locale="pt"
      badge="Ficheiros de vídeo · MP4 · MOV · WebM · Gratuito"
      h1First="Vídeo para Texto"
      h1Second="Para gravações de tela, tutoriais e vlogs"
      subtitle="Carregue um ficheiro MP4, MOV, WebM, MKV ou AVI. Extraímos a faixa de áudio, transcrevemos com Whisper large-v3 e devolvemos uma transcrição com marcas de tempo, resumo de IA e legendas SRT prontas para serem adicionadas ao vídeo."
      highlightFormat="video"
      relatedFormatsTitle="Contentores de vídeo que pode carregar"
      relatedFormats={[
        { key: 'video', name: 'MP4', ext: '.mp4' },
        { key: 'mov', name: 'MOV', ext: '.mov' },
        { key: 'webm', name: 'WebM', ext: '.webm', href: '/pt/webm-to-text' },
        { key: 'mkv', name: 'MKV', ext: '.mkv' },
        { key: 'avi', name: 'AVI', ext: '.avi' },
        { key: 'mpeg', name: 'MPEG', ext: '.mpeg' },
      ]}
      previewFileName="keynote-recording.mp4"
      previewWordCount={205}
      previewDurationLabel="32:47"
      enableYouTubeUrl={true}
      previewLines={[
        { t: '0:00',  line: 'Bom dia a todos, e obrigado por terem vindo hoje.' },
        { t: '0:06',  line: 'Vamos passar os próximos trinta minutos a discutir onde o vídeo mudou em 2026 e o que isso significa para os criadores.' },
        { t: '0:15',  line: 'Três números rápidos antes de começarmos. Noventa e dois por cento dos utilizadores da internet assistem a vídeo todas as semanas.' },
        { t: '0:24',  line: 'O formato curto agora representa mais tempo de visualização do que o formato longo em todas as principais plataformas.' },
        { t: '0:32',  line: 'E as pesquisas que levam a um resultado de vídeo cresceram duas vezes e meia ano após ano.' },
        { t: '0:41',  line: 'Portanto, as plataformas estão a promover vídeo. O público está a ver mais vídeo. Essa parte não é controversa.' },
        { t: '0:50',  line: 'O que é controverso é o que realmente chama a atenção nesse oceano de vídeo.' },
        { t: '0:58',  line: 'Deixe-me explicar os três padrões que vimos funcionar para criadores que publicam todas as semanas.' },
      ]}
      whyTitle="Por que escolher Mictoo para transcrição de vídeo"
      whyCards={[
        {
          icon: 'video',
          title: 'Todos os contentores de vídeo comuns',
          desc: 'MP4, MOV, WebM, MKV, AVI. Nós demuxamos a faixa de áudio no servidor, para que possa carregar o vídeo tal como está, sem etapa de conversão.',
        },
        {
          icon: 'clip',
          title: 'SRT e VTT prontos para a linha do tempo',
          desc: 'As marcas de tempo alinham-se à linha do tempo original do vídeo. Descarregue SRT ou VTT e insira diretamente no Premiere, DaVinci, CapCut ou no seu upload no YouTube.',
        },
        {
          icon: 'sparkles',
          title: 'Resumo de IA para descrições',
          desc: 'Resumo gerado automaticamente ao lado da transcrição. Um bom primeiro rascunho para descrições de vídeo, resumos de blog e títulos de capítulos.',
        },
        {
          icon: 'globe',
          title: 'Traduzir legendas para mais de 50 idiomas',
          desc: 'Após a transcrição estar pronta, traduza as legendas para espanhol, francês, alemão, português e mais de 45 outros idiomas com um clique.',
        },
      ]}
      scenariosTitle="Quando a transcrição de vídeo para texto é a escolha certa"
      scenarios={[
        {
          icon: 'video',
          title: 'Legendas de vídeo do YouTube',
          desc: 'Gravado, editado e exportado para MP4. Carregue o ficheiro para legendas SRT e um resumo pronto para descrição.',
        },
        {
          icon: 'briefcase',
          title: 'Gravações de Loom e de tela',
          desc: 'WebM ou MP4 do Loom, OBS ou captura de tela do navegador. Obtenha uma versão de texto limpa do walkthrough.',
        },
        {
          icon: 'users',
          title: 'Gravações de webinars e workshops',
          desc: 'Gravação de evento de longa duração. A transcrição torna-se o post de blog de seguimento, resumo no LinkedIn e arquivo pesquisável.',
        },
        {
          icon: 'editPen',
          title: 'Conteúdo de vlog e tutorial',
          desc: 'Corte de vlog, explicação de tutorial ou demonstração de produto. A transcrição alimenta as notas do programa, legendas ocultas e reaproveitamento para social.',
        },
        {
          icon: 'book',
          title: 'Arquivo de lições de curso',
          desc: 'Gravação de aula ou palestra em MP4. Dê aos alunos uma versão de texto pesquisável e fixe as legendas para acessibilidade.',
        },
        {
          icon: 'mic',
          title: 'Vídeo de entrevista e depoimento',
          desc: 'Entrevista sentada ou depoimento de cliente. A transcrição torna a citação, edição e tradução dramaticamente mais fáceis.',
        },
      ]}
      technicalTitle="O que acontece ao ficheiro de vídeo"
      technicalIntro="Mictoo utiliza a faixa de áudio falada para transcrição. O contentor e a qualidade da imagem não melhoram o reconhecimento de fala, mas afetam o tamanho do upload e se uma faixa de áudio está disponível."
      technicalFacts={[
        {
          icon: 'video',
          title: 'Faixa de áudio extraída',
          desc: 'A faixa de fala é decodificada do contentor de vídeo. Não precisa de exportar um MP3 separado antes de carregar.',
        },
        {
          icon: 'clip',
          title: 'Linha do tempo original mantida',
          desc: 'Os segmentos da transcrição e as exportações de legendas utilizam a linha do tempo original dos media para que possam ser correspondidos de volta ao vídeo.',
        },
        {
          icon: 'layers',
          title: 'O contentor não é o codec',
          desc: 'MP4, MOV, WebM, MKV e AVI podem conter diferentes codecs de áudio. O ficheiro é inspecionado quando é processado.',
        },
        {
          icon: 'ear',
          title: 'Fala é necessária',
          desc: 'Clipes silenciosos e vídeos apenas com música não têm uma transcrição falada fiável. Verifique se a faixa de áudio pretendida é audível primeiro.',
        },
      ]}
      faq={[
        {
          q: 'Quais formatos de vídeo o Mictoo aceita?',
          a: 'MP4, MOV, WebM, MKV, AVI e a maioria dos outros contentores comuns. Nós demuxamos a faixa de áudio no servidor, para que possa carregar qualquer um destes diretamente sem converter para áudio primeiro.',
        },
        {
          q: 'Qual é o tamanho máximo de ficheiro de vídeo que posso carregar?',
          a: 'Até 25 MB anonimamente, 60 MB quando está autenticado. Para vídeos mais longos, dividimos automaticamente ficheiros de até cerca de 3 horas se estiver autenticado. Para exportações muito grandes, reduza a resolução do vídeo primeiro ou extraia a faixa de áudio e carregue o áudio.',
        },
        {
          q: 'Posso colar uma URL do YouTube em vez disso?',
          a: 'Sim. Nesta página pode colar uma URL de vídeo do YouTube e o Mictoo buscará legendas quando disponíveis. Quando não existirem legendas, carregue o ficheiro de vídeo ou o áudio extraído para uma transcrição completa com Whisper.',
        },
        {
          q: 'As marcas de tempo alinham-se com o vídeo original?',
          a: 'Sim. As marcas de tempo da transcrição e SRT/VTT utilizam a linha do tempo original do vídeo. Elas fornecem uma útil faixa de legendas de primeira passagem, mas deve rever o tempo e as quebras de linha no seu editor antes de publicar.',
        },
        {
          q: 'Posso obter legendas SRT para o vídeo?',
          a: 'Sim. Descarregue como SRT ou VTT após a transcrição. Ambos os formatos funcionam no Premiere, DaVinci Resolve, Final Cut, CapCut, YouTube Studio e na maioria dos reprodutores de vídeo modernos.',
        },
        {
          q: 'Extraem áudio de clipes de vídeo silenciosos?',
          a: 'Não. Se o vídeo não tiver fala audível, não há nada para transcrever. Para clipes apenas com música, a transcrição será tipicamente vazia ou conterá fragmentos curtos de letras.',
        },
        {
          q: 'Posso traduzir as legendas para outro idioma?',
          a: 'Sim. Após a transcrição, escolha um idioma alvo e clique em Traduzir. A tradução é realizada no GPT-4o-mini e aparece ao lado do original. Exporte o SRT traduzido para legendas em língua estrangeira.',
        },
        {
          q: 'O meu ficheiro de vídeo será guardado nos vossos servidores?',
          a: 'Não. O vídeo é transmitido para o fornecedor de transcrição, extraímos o áudio na memória, transcrevemos uma vez e eliminamos tudo da memória. A transcrição só é armazenada se se autenticar e optar por guardá-la no histórico.',
        },
        {
          q: 'O Mictoo transcreve vídeos não em inglês?',
          a: 'Sim. O Whisper large-v3 suporta mais de 50 idiomas com deteção automática. Para vídeos curtos ou conteúdos não em inglês, defina o idioma explicitamente no dropdown para uma deteção de primeira passagem mais limpa.',
        },
        {
          q: 'Quanto tempo demora uma transcrição de vídeo?',
          a: 'Um MP4 de 30 minutos normalmente termina em 40-70 segundos de ponta a ponta. O tempo de upload e o tamanho do ficheiro de vídeo são geralmente a etapa mais longa porque precisamos receber o ficheiro antes de demuxar o áudio.',
        },
      ]}
      ctaHeadline="Carregue o seu vídeo, obtenha legendas e uma transcrição"
      ctaSubtitle="MP4, MOV, WebM, MKV, AVI. SRT, VTT, DOCX e um resumo em segundos."
      ctaButton="Carregar vídeo para transcrever"
    />
  )
}