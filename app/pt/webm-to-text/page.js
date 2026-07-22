import FormatPageLayout from '@/components/FormatPageLayout'

export const metadata = {
  title: 'WebM para Texto: Transcrição de Loom, OBS e Gravações de Ecrã do Navegador | Mictoo',
  description:
    'Carregue gravações de ecrã WebM do Loom, OBS ou da API MediaRecorder do navegador. Removemos o vídeo e transcrevemos o áudio. Transcrição editável com marcas de tempo em segundos.',
  alternates: {
    canonical: 'https://mictoo.com/pt/webm-to-text',
    languages: {
      'en': 'https://mictoo.com/webm-to-text',
      'fr': 'https://mictoo.com/fr/webm-to-text',
      'de': 'https://mictoo.com/de/webm-to-text',
      'es': 'https://mictoo.com/es/webm-to-text',
      'ru': 'https://mictoo.com/ru/webm-to-text',
      'it': 'https://mictoo.com/it/webm-to-text',
      'pt': 'https://mictoo.com/pt/webm-to-text',
      'pl': 'https://mictoo.com/pl/webm-to-text',
      'ja': 'https://mictoo.com/ja/webm-to-text',
      'ko': 'https://mictoo.com/ko/webm-to-text',
      'x-default': 'https://mictoo.com/webm-to-text',
    },
  },
  openGraph: {
    title: 'WebM para Texto: Transcrição de Loom, OBS, Gravações do Navegador | Mictoo',
    description: 'Carregue uma gravação de ecrã WebM. Extraímos o áudio e devolvemos uma transcrição editável com marcas de tempo.',
    url: 'https://mictoo.com/pt/webm-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WebM para Texto: Transcrição de Loom, OBS, Gravações do Navegador',
    description: 'Carregue uma gravação de ecrã WebM. Extraímos o áudio e devolvemos uma transcrição editável.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

const LANGS = {
  'en': 'https://mictoo.com/webm-to-text',
  'fr': 'https://mictoo.com/fr/webm-to-text',
  'de': 'https://mictoo.com/de/webm-to-text',
  'es': 'https://mictoo.com/es/webm-to-text',
  'ru': 'https://mictoo.com/ru/webm-to-text',
  'it': 'https://mictoo.com/it/webm-to-text',
  'pt': 'https://mictoo.com/pt/webm-to-text',
  'pl': 'https://mictoo.com/pl/webm-to-text',
  'ja': 'https://mictoo.com/ja/webm-to-text',
  'ko': 'https://mictoo.com/ko/webm-to-text',
  'x-default': 'https://mictoo.com/webm-to-text',
}

export default function PtWebmToTextPage() {
  return (
    <FormatPageLayout
      locale="pt"
      badge="WebM · Loom · OBS · Gravação de ecrã"
      h1First="WebM para Texto"
      h1Second="Para Loom, OBS e gravações de ecrã do navegador"
      subtitle="WebM é o que o Loom exporta, o que o OBS grava por padrão nas versões mais recentes, e o que os navegadores escrevem quando a sua aplicação utiliza a API MediaRecorder. Deixe o ficheiro, removemos o vídeo e transcrevemos o áudio em segundos."
      highlightFormat="webm"
      previewFileName="loom-recording.webm"
      previewWordCount={172}
      previewDurationLabel="7:36"
      previewLines={[
        { t: '0:00',  line: 'Olá equipa, queria passar pelo novo fluxo de integração antes de o lançarmos na quinta-feira.' },
        { t: '0:07',  line: 'Este é o meu ecrã. O que estão a ver é a página de entrada após um novo registo.' },
        { t: '0:14',  line: 'A primeira coisa a notar é que o modal de boas-vindas agora está sobre o painel em vez de bloquear todo o viewport.' },
        { t: '0:23',  line: 'Isso é intencional. Os utilizadores estavam a ficar confusos quando o painel estava completamente escondido pelo tour.' },
        { t: '0:32',  line: 'Em segundo lugar, os três passos do tour são mais curtos. Cortámos o texto aproximadamente pela metade com base na última ronda de feedback.' },
        { t: '0:41',  line: 'Se eu clicar em Saltar Tour aqui, o modal fecha e colocamos o utilizador diretamente num coach mark de estado vazio.' },
        { t: '0:51',  line: 'Esse coach mark aponta para o botão principal de upload, que é a única ação que cada utilizador precisa fazer primeiro.' },
        { t: '1:00',  line: 'Deixem-me saber o que pensam. Questões bloqueadoras de lançamento até quarta-feira de manhã, se possível.' },
      ]}
      whyTitle="Por que escolher a Mictoo para transcrição de WebM"
      whyCards={[
        {
          icon: 'video',
          title: 'WebM de vídeo tratado no servidor',
          desc: 'Gravação de ecrã WebM com a faixa de vídeo intacta. Nós demuxamos, removemos o vídeo e transcrevemos o áudio. Nenhuma extração local necessária.',
        },
        {
          icon: 'gear',
          title: 'Opus e Vorbis ambos suportados',
          desc: 'A maioria dos ficheiros WebM transporta áudio Opus (mais recente) ou Vorbis (mais antigo). Nós lidamos com ambos os codecs, sem conversão manual necessária.',
        },
        {
          icon: 'clip',
          title: 'Legendas SRT para o walkthrough',
          desc: 'Descarregue SRT ou VTT após a transcrição. As marcas de tempo alinham-se ao WebM original, para que as legendas correspondam à gravação de ecrã com precisão de quadro.',
        },
        {
          icon: 'sparkles',
          title: 'Resumo de IA para notas de lançamento',
          desc: 'O resumo de IA é um bom primeiro rascunho para a descrição do ticket, nota de lançamento ou atualização assíncrona que um walkthrough foi feito para substituir.',
        },
      ]}
      scenariosTitle="Quando WebM para texto é a escolha certa"
      scenarios={[
        {
          icon: 'video',
          title: 'Walkthrough do Loom',
          desc: 'Demonstração de produto, revisão de código ou atualização assíncrona gravada no Loom. A transcrição alimenta o ticket, o documento do notion ou o e-mail de acompanhamento.',
        },
        {
          icon: 'briefcase',
          title: 'Gravação de ecrã do OBS',
          desc: 'Tutorial ou captura de gameplay gravada com o OBS Studio. A transcrição torna-se a descrição do YouTube ou o artigo do blog.',
        },
        {
          icon: 'gear',
          title: 'Saída da MediaRecorder do navegador',
          desc: 'Áudio gravado pela aplicação via API MediaRecorder. Deixe o .webm que a sua aplicação produziu sem qualquer etapa de conversão.',
        },
        {
          icon: 'users',
          title: 'Gravação do Google Meet ou Firefox',
          desc: 'Algumas ferramentas de reunião e navegadores gravam em WebM por padrão. Deixe o ficheiro para uma versão de texto pesquisável da conversa.',
        },
        {
          icon: 'editPen',
          title: 'Revisão de design assíncrona',
          desc: 'O designer grava um WebM a passar por um mockup. Os revisores recebem uma transcrição escrita para que possam ler antes de assistir.',
        },
        {
          icon: 'book',
          title: 'Captura de ecrã de palestra',
          desc: 'O instrutor gravou slides com narração e partilhou como WebM. Os alunos recebem uma transcrição pesquisável juntamente com o vídeo.',
        },
      ]}
      technicalTitle="O que saber sobre gravações WebM"
      technicalIntro="WebM é um formato amigável para navegadores que pode conter vídeo mais áudio ou apenas áudio. As definições do navegador e do gravador determinam quais faixas e codecs estão presentes."
      technicalFacts={[
        {
          icon: 'layers',
          title: 'Áudio Opus ou Vorbis',
          desc: 'A maioria das gravações de fala WebM recentes utiliza Opus; ficheiros mais antigos podem usar Vorbis. Ambos estão dentro do contêiner WebM.',
        },
        {
          icon: 'video',
          title: 'Apenas áudio ou com vídeo',
          desc: 'Um WebM pode conter uma gravação de ecrã ou apenas uma faixa de microfone. A transcrição utiliza o fluxo de fala audível.',
        },
        {
          icon: 'clip',
          title: 'Exportações baseadas em linha do tempo',
          desc: 'As marcas de tempo da transcrição seguem a linha do tempo da gravação decodificada para trabalho posterior de legendagem ou edição.',
        },
        {
          icon: 'gear',
          title: 'Saída do gravador do navegador',
          desc: 'As definições da MediaRecorder variam de navegador para navegador. Se uma captura não tiver permissão de microfone, pode não conter fala para transcrever.',
        },
      ]}
      faq={[
        {
          q: 'Que tipo de ficheiros WebM a Mictoo aceita?',
          a: 'Qualquer WebM padrão: vídeo com áudio Opus ou Vorbis (Loom, OBS, MediaRecorder do navegador), ou WebM apenas de áudio. Nós demuxamos a faixa de áudio no servidor e transcrevemos com o Whisper large-v3.',
        },
        {
          q: 'Preciso extrair o áudio eu mesmo primeiro?',
          a: 'Não. Carregue o vídeo WebM tal como está. Nós tratamos do demux no servidor e apenas transcrevemos a faixa de áudio. Se já extraiu o áudio (Opus ou Vorbis), isso também funciona.',
        },
        {
          q: 'O meu Loom tem mais de 60 MB. E agora?',
          a: 'Um Loom de 20-30 minutos frequentemente excede 60 MB. Se estiver autenticado, nós dividimos automaticamente ficheiros longos até cerca de 3 horas. Caso contrário, use as definições de download do Loom para reduzir a qualidade, ou exporte o áudio e carregue isso.',
        },
        {
          q: 'As marcas de tempo correspondem à minha gravação de ecrã?',
          a: 'Sim. As marcas de tempo na transcrição e nas exportações SRT/VTT alinham-se à linha do tempo original do WebM, para que as legendas correspondam à gravação de ecrã com precisão de quadro quando colocadas de volta no vídeo.',
        },
        {
          q: 'Posso obter legendas SRT para o walkthrough?',
          a: 'Sim. Descarregue SRT ou VTT após a transcrição. Coloque no seu editor de vídeo, upload do YouTube, ou fluxo de re-renderização do Loom.',
        },
        {
          q: 'A Mictoo transcreve WebM não em inglês?',
          a: 'Sim. O Whisper large-v3 suporta mais de 50 idiomas com deteção automática. Para gravações curtas ou conteúdo não em inglês, defina o idioma explicitamente para resultados mais limpos na primeira passagem.',
        },
        {
          q: 'E se o WebM não tiver faixa de áudio?',
          a: 'A transcrição ficará vazia. Ficheiros WebM sem uma faixa de áudio (gravações de ecrã silenciosas, capturas estilo GIF) não têm nada para o Whisper transcrever.',
        },
        {
          q: 'Posso traduzir a transcrição para outro idioma?',
          a: 'Sim. Após a transcrição, escolha um idioma-alvo e clique em Traduzir. A tradução é feita com o GPT-4o-mini e aparece ao lado do original.',
        },
        {
          q: 'O meu ficheiro WebM é guardado nos vossos servidores?',
          a: 'Não. O WebM é transmitido para o fornecedor de transcrição, nós demuxamos e transcrevemos na memória, depois descartamos tudo. A transcrição é apenas armazenada se você se autenticar e salvar no histórico.',
        },
        {
          q: 'Quanto tempo leva uma transcrição de WebM?',
          a: 'Um Loom de 10 minutos normalmente termina em 20-40 segundos de ponta a ponta. Ficheiros WebM mais longos (30-45 minutos) levam 60-90 segundos. A velocidade de upload é frequentemente o passo mais longo para grandes gravações de ecrã.',
        },
      ]}
      ctaHeadline="Deixe a sua gravação do Loom ou OBS"
      ctaSubtitle="Gravações de ecrã WebM, saída da MediaRecorder do navegador. Vídeo demuxado no servidor."
      ctaButton="Carregar WebM para transcrever"
    />
  )
}