import FormatPageLayout from '@/components/FormatPageLayout'

export const metadata = {
  title: 'OGG para Texto: Voz do Telegram, Áudio Linux e Transcrição Opus/Vorbis | Mictoo',
  description:
    'Carregue áudio OGG (Vorbis, Opus, FLAC dentro de OGG) ou mensagens de voz .oga do Telegram. Transcrição editável com marcas de tempo em segundos, sem necessidade de registo.',
  alternates: {
    canonical: 'https://mictoo.com/pt/ogg-to-text',
    languages: {
      'en': 'https://mictoo.com/ogg-to-text',
      'fr': 'https://mictoo.com/fr/ogg-to-text',
      'de': 'https://mictoo.com/de/ogg-to-text',
      'es': 'https://mictoo.com/es/ogg-to-text',
      'ru': 'https://mictoo.com/ru/ogg-to-text',
      'it': 'https://mictoo.com/it/ogg-to-text',
      'pt': 'https://mictoo.com/pt/ogg-to-text',
      'pl': 'https://mictoo.com/pl/ogg-to-text',
      'ja': 'https://mictoo.com/ja/ogg-to-text',
      'ko': 'https://mictoo.com/ko/ogg-to-text',
      'x-default': 'https://mictoo.com/ogg-to-text',
    },
  },
  openGraph: {
    title: 'OGG para Texto: Voz do Telegram, Áudio Linux, Transcrição Opus/Vorbis | Mictoo',
    description: 'Carregue áudio OGG ou mensagens de voz .oga do Telegram. Transcrição editável em segundos.',
    url: 'https://mictoo.com/pt/ogg-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OGG para Texto: Transcrição de Voz do Telegram e Áudio Linux',
    description: 'Carregue áudio OGG ou mensagens de voz .oga do Telegram. Transcrição editável em segundos.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function PtOggToTextPage() {
  return (
    <FormatPageLayout
      locale="pt"
      badge="OGG · Vorbis · Opus · .oga"
      h1First="OGG para Texto"
      h1Second="Voz do Telegram, áudio Linux, Opus e Vorbis"
      subtitle="OGG é o que o Telegram Voice usa (.oga), o que as aplicações de áudio Linux utilizam por padrão, e o que o codec Opus de código aberto inclui. Carregue o ficheiro, nós detetamos automaticamente o fluxo de áudio e transcrevemos com Whisper large-v3."
      highlightFormat="ogg"
      previewFileName="telegram-voice.oga"
      previewWordCount={128}
      previewDurationLabel="1:52"
      previewLines={[
        { t: '0:00',  line: 'Olá, mensagem de voz rápida sobre a chamada de amanhã.' },
        { t: '0:03',  line: 'Olhei para o deck e acho que os slides quatro a seis precisam de uma reavaliação antes de apresentarmos.' },
        { t: '0:10',  line: 'O principal problema é que a história salta do problema diretamente para o preço sem mostrar as capturas de tela da demonstração.' },
        { t: '0:20',  line: 'O que eu faria era trocar o slide cinco pela demonstração e empurrar o preço para o final do deck.' },
        { t: '0:30',  line: 'Dessa forma, criamos a tensão em torno do que o produto realmente faz antes de falarmos sobre o custo.' },
        { t: '0:39',  line: 'Além disso, o cliente mencionou ontem que quer ver o slide de integração, que atualmente está no apêndice.' },
        { t: '0:49',  line: 'Mova-o para o fluxo principal, talvez entre a demonstração e o preço.' },
        { t: '0:56',  line: 'Falo contigo em breve, avisa-me o que achas quando tiveres a oportunidade.' },
      ]}
      whyTitle="Por que escolher a Mictoo para transcrição OGG"
      whyCards={[
        {
          icon: 'mic',
          title: 'Mensagens de voz do Telegram, nativas',
          desc: 'Notas de voz .oga do Telegram entram diretamente. Sem renomear, sem reembalar. Nós tratamos do fluxo Opus dentro do contêiner OGG.',
        },
        {
          icon: 'gear',
          title: 'Vorbis, Opus e FLAC-in-OGG',
          desc: 'Qualquer codec dentro do contêiner OGG funciona: Vorbis (mais antigo), Opus (moderno), FLAC-in-OGG (audiophile). Detetado automaticamente no servidor.',
        },
        {
          icon: 'sparkles',
          title: 'Resumo AI para cadeias de mensagens de voz',
          desc: 'As mensagens de voz tendem a ser prolixas. O resumo AI transforma um .oga de cinco minutos numa síntese de duas linhas que pode ser acionada.',
        },
        {
          icon: 'globe',
          title: 'Traduza para mais de 50 idiomas',
          desc: 'Mensagem de voz em russo, espanhol ou português de um chat em grupo. Traduza para inglês (ou qualquer alvo) após a transcrição.',
        },
      ]}
      scenariosTitle="Quando OGG para texto é a escolha certa"
      scenarios={[
        {
          icon: 'mic',
          title: 'Mensagem de voz do Telegram',
          desc: 'Nota de voz enviada por um colega ou cliente via Telegram. Guarde o .oga do chat, carregue aqui, obtenha uma versão em texto para ler rapidamente.',
        },
        {
          icon: 'gear',
          title: 'Gravação de áudio Linux',
          desc: 'Gravação a partir do Audacity, GNOME Sound Recorder ou uma ferramenta de áudio KDE que utiliza OGG por padrão. Totalmente suportado, sem conversão.',
        },
        {
          icon: 'briefcase',
          title: 'Exportação de app de código aberto',
          desc: 'Gravador de podcast ou entrevista que exporta OGG (muitas aplicações FOSS utilizam Vorbis ou Opus por razões de licenciamento).',
        },
        {
          icon: 'video',
          title: 'Captura do MediaRecorder do Firefox',
          desc: 'O Firefox frequentemente produz OGG/Opus a partir de aplicações de gravação do navegador. Carregue o ficheiro para uma transcrição limpa com marcas de tempo.',
        },
        {
          icon: 'editPen',
          title: 'Nota ou memorando ditado',
          desc: 'Nota capturada em uma aplicação que salva como OGG. Transforme-a em texto editável pronto para o seu fluxo de trabalho de escrita.',
        },
        {
          icon: 'users',
          title: 'Registo de chat OGG com múltiplos falantes',
          desc: 'Gravação de VOIP do Discord, Mumble ou similar exportada para OGG. Transcrição para referência, atas de reuniões ou arquivo.',
        },
      ]}
      technicalTitle="O que pode estar dentro de um ficheiro OGG"
      technicalIntro="OGG é uma família de contêineres em vez de um único codec de áudio. Saber o tipo de fluxo e a extensão ajuda a explicar de onde veio uma gravação, mas não precisa de ser reembalado antes do carregamento."
      technicalFacts={[
        {
          icon: 'layers',
          title: 'Vorbis, Opus ou FLAC',
          desc: 'O contêiner OGG pode transportar vários codecs. Mensagens de voz normalmente usam Opus; áudio de desktop mais antigo frequentemente usa Vorbis.',
        },
        {
          icon: 'file',
          title: '.oga e .ogg',
          desc: '.oga é a extensão apenas de áudio na mesma família de contêineres. Exportações de voz do Telegram frequentemente chegam com esta extensão.',
        },
        {
          icon: 'mic',
          title: 'Fonte da mensagem de voz',
          desc: 'Mensagens curtas podem incluir ruído ambiente e processamento do telefone; uma captura clara é mais importante do que o nome do contêiner.',
        },
        {
          icon: 'gear',
          title: 'Inspeção baseada em cabeçalho',
          desc: 'A estrutura do fluxo é inspecionada durante o processamento, então uma extensão incomum não precisa ser renomeada primeiro.',
        },
      ]}
      faq={[
        {
          q: 'Que tipos de ficheiros OGG a Mictoo aceita?',
          a: 'Qualquer contêiner OGG padrão: áudio Vorbis (mais antigo, comum no Linux), áudio Opus (mais recente, usado por mensagens de voz do Telegram e aplicações modernas), e FLAC-in-OGG. Também ficheiros .oga do Telegram, que são OGG com uma extensão diferente.',
        },
        {
          q: 'Um ficheiro .oga é o mesmo que .ogg?',
          a: 'Eficazmente sim. .oga é a extensão padronizada para OGG apenas de áudio, mais comumente usada por mensagens de voz do Telegram que transportam um fluxo Opus. A Mictoo trata .oga e .ogg da mesma forma.',
        },
        {
          q: 'O meu ficheiro OGG tem mais de 60 MB. E agora?',
          a: 'Opus e Vorbis são eficientes, então atingir 60 MB geralmente significa uma gravação muito longa. Se estiver autenticado, nós dividimos automaticamente até cerca de 3 horas. Caso contrário, faça um downsample primeiro: ffmpeg -i in.ogg -b:a 32k -ac 1 out.ogg. A fala permanece nítida.',
        },
        {
          q: 'Aceitam vídeo OGG (Theora)?',
          a: 'A faixa de áudio dentro de um contêiner OGG/Theora é transcrita. Carregue o ficheiro .ogv e nós demuxamos o áudio assim como com qualquer formato de vídeo. Clipes Theora silenciosos produzirão transcrições vazias.',
        },
        {
          q: 'A Mictoo transcreve OGG não inglês?',
          a: 'Sim. O Whisper large-v3 suporta mais de 50 idiomas com deteção automática. Para mensagens de voz curtas ou conteúdo não inglês, defina o idioma explicitamente para resultados mais limpos na primeira passagem.',
        },
        {
          q: 'Posso obter legendas SRT para uma gravação OGG?',
          a: 'Sim. Descarregue SRT ou VTT após a transcrição. As marcas de tempo alinham-se à linha do tempo original do OGG para uso em editores de vídeo ou ferramentas de acessibilidade.',
        },
        {
          q: 'O meu ficheiro OGG é mantido nos vossos servidores?',
          a: 'Não. Os fluxos de áudio vão para o fornecedor de transcrição, são processados uma vez e são removidos da memória. Nunca os gravamos em disco. As transcrições são armazenadas apenas se você se autenticar e salvar no histórico.',
        },
        {
          q: 'Posso traduzir a transcrição para outro idioma?',
          a: 'Sim. Após a transcrição, escolha um idioma alvo e clique em Traduzir. A tradução é realizada no GPT-4o-mini e aparece ao lado do original.',
        },
        {
          q: 'A qualidade OGG afeta a transcrição?',
          a: 'Pouco. Opus a 24-32 kbps soa nítido para voz e transcreve essencialmente tão bem quanto bitrates mais altos. O Whisper resample para 16 kHz mono internamente, então a taxa de bits tem impacto mínimo para fala limpa.',
        },
        {
          q: 'Quanto tempo leva uma transcrição OGG?',
          a: 'Uma nota de voz de 2 minutos do Telegram normalmente termina em 5-15 segundos do início ao fim. Ficheiros OGG mais longos (30-45 minutos) levam 45-90 segundos. A velocidade de upload é frequentemente o passo mais longo.',
        },
      ]}
      ctaHeadline="Carregue a sua voz do Telegram ou ficheiro OGG"
      ctaSubtitle="Opus, Vorbis, FLAC-in-OGG, mensagens de voz .oga. Cada fluxo OGG, tratado nativamente."
      ctaButton="Carregar OGG para transcrever"
    />
  )
}