import FormatPageLayout from '@/components/FormatPageLayout'

export const metadata = {
  title: 'M4A para Texto: Transcrição Grátis de Memórias de Voz do iPhone e Áudio da Apple | Mictoo',
  description:
    'Carregue um ficheiro M4A das Memórias de Voz do iPhone, GarageBand, Apple Podcasts ou FaceTime, e obtenha uma transcrição editável em segundos. AAC dentro de MP4, sem necessidade de conversão.',
  alternates: {
    canonical: 'https://mictoo.com/pt/m4a-to-text',
    languages: {
      'en': 'https://mictoo.com/m4a-to-text',
      'fr': 'https://mictoo.com/fr/m4a-to-text',
      'de': 'https://mictoo.com/de/m4a-to-text',
      'es': 'https://mictoo.com/es/m4a-to-text',
      'ru': 'https://mictoo.com/ru/m4a-to-text',
      'it': 'https://mictoo.com/it/m4a-to-text',
      'pt': 'https://mictoo.com/pt/m4a-to-text',
      'pl': 'https://mictoo.com/pl/m4a-to-text',
      'ja': 'https://mictoo.com/ja/m4a-to-text',
      'ko': 'https://mictoo.com/ko/m4a-to-text',
      'x-default': 'https://mictoo.com/m4a-to-text',
    },
  },
  openGraph: {
    title: 'M4A para Texto: Transcrição de Memórias de Voz do iPhone e Áudio da Apple | Mictoo',
    description: 'Carregue M4A das Memórias de Voz, GarageBand, Apple Podcasts ou FaceTime. Transcrição editável em segundos.',
    url: 'https://mictoo.com/pt/m4a-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'M4A para Texto: Transcrição Grátis de Memórias de Voz do iPhone',
    description: 'Carregue M4A das Memórias de Voz, GarageBand, Apple Podcasts. Transcrição editável em segundos.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

const LANGS = {
  'en': 'https://mictoo.com/m4a-to-text',
  'fr': 'https://mictoo.com/fr/m4a-to-text',
  'de': 'https://mictoo.com/de/m4a-to-text',
  'es': 'https://mictoo.com/es/m4a-to-text',
  'ru': 'https://mictoo.com/ru/m4a-to-text',
  'it': 'https://mictoo.com/it/m4a-to-text',
  'pt': 'https://mictoo.com/pt/m4a-to-text',
  'pl': 'https://mictoo.com/pl/m4a-to-text',
  'ja': 'https://mictoo.com/ja/m4a-to-text',
  'ko': 'https://mictoo.com/ko/m4a-to-text',
  'x-default': 'https://mictoo.com/m4a-to-text',
}

export default function PtM4aToTextPage() {
  return (
    <FormatPageLayout
      locale="pt"
      badge="M4A · AAC · iPhone · Grátis"
      h1First="M4A para Texto"
      h1Second="Para Memórias de Voz do iPhone e áudio da Apple"
      subtitle="M4A é o que a sua aplicação de Memórias de Voz do iPhone escreve, o que o GarageBand exporta e o que os Apple Podcasts distribuem. Arraste o ficheiro diretamente do seu dispositivo, mantenha o AAC, obtenha uma transcrição com timestamps em segundos."
      highlightFormat="m4a"
      previewFileName="voice-memo.m4a"
      previewWordCount={148}
      previewDurationLabel="6:18"
      previewLines={[
        { t: '0:00',  line: 'Okay, gravação rápida antes que eu me esqueça da ideia toda.' },
        { t: '0:04',  line: 'A proposta é que dividimos o fluxo de checkout em dois passos claros em vez de um formulário longo.' },
        { t: '0:13',  line: 'Passo um, apenas email e cartão. Passo dois, detalhes de envio após ver o número de confirmação.' },
        { t: '0:22',  line: 'A razão pela qual isso importa é que a desistência no formulário atual de uma única página é de cerca de trinta e oito por cento.' },
        { t: '0:32',  line: 'A maior parte dessa desistência acontece na seção de envio, não na entrada do cartão, o que é contra-intuitivo.' },
        { t: '0:42',  line: 'Se mudarmos o envio para depois da compra, provavelmente podemos recuperar doze a quinze por cento desse tráfego.' },
        { t: '0:52',  line: 'Em termos de cronograma, acho que isso é duas semanas de frontend, uma semana de backend, talvez uma semana de testes.' },
        { t: '1:02',  line: 'Falar com a equipe de checkout amanhã para ver se há algo que já tentaram e falhou.' },
      ]}
      whyTitle="Por que escolher a Mictoo para transcrição de M4A"
      whyCards={[
        {
          icon: 'mic',
          title: 'Construído para Memórias de Voz do iPhone',
          desc: 'Arraste o .m4a diretamente da sua folha de partilha de Memórias de Voz ou do iCloud. Sem problemas de formato, sem etapa de conversão.',
        },
        {
          icon: 'gear',
          title: 'AAC dentro de MP4, tratado nativamente',
          desc: 'M4A é áudio AAC em um contêiner MP4. Analisamos a caixa ftyp, extraímos a faixa AAC e entregamos ao Whisper sem re-encodificação.',
        },
        {
          icon: 'sparkles',
          title: 'Resumo de IA para ideias de memórias de voz',
          desc: 'O resumo aparece ao lado da transcrição. Transforma memórias de brainstorm confusas em uma lista de ações concisa.',
        },
        {
          icon: 'globe',
          title: 'Traduza para mais de 50 idiomas',
          desc: 'Memória de voz em espanhol, nota gravada durante uma reunião em francês, ditado em japonês. Traduza para inglês (ou qualquer alvo) após a transcrição.',
        },
      ]}
      scenariosTitle="Quando M4A para texto é a escolha certa"
      scenarios={[
        {
          icon: 'mic',
          title: 'Memórias de Voz do iPhone',
          desc: 'Cada gravação da aplicação de Memórias de Voz integrada no iPhone ou iPad. Ideias, notas de reuniões, clipes de entrevistas, palestras.',
        },
        {
          icon: 'briefcase',
          title: 'Gravações de FaceTime e chamadas',
          desc: 'Áudio exportado de chamadas do FaceTime, WhatsApp ou sessões do Zoom frequentemente aparece como M4A. Arraste o ficheiro para uma versão de texto limpa.',
        },
        {
          icon: 'sparkles',
          title: 'Exportações do GarageBand e Logic',
          desc: 'Bounce apenas vocal, episódio de podcast ou edição de entrevista do GarageBand ou Logic Pro. Obtenha uma transcrição para construir notas do programa.',
        },
        {
          icon: 'video',
          title: 'Episódios de Apple Podcasts',
          desc: 'Episódio descarregado dos Apple Podcasts (M4A no iOS por padrão). Transcrição para citar, referenciar ou reutilizar.',
        },
        {
          icon: 'editPen',
          title: 'Ditado e notas longas',
          desc: 'Você ditou um capítulo, uma nota ou uma entrada de diário nas Memórias de Voz. Transforme isso em texto editável pronto para a sua aplicação de escrita.',
        },
        {
          icon: 'users',
          title: 'Entrevista de campo',
          desc: 'Jornalismo, pesquisa ou entrevista de história oral gravada no iPhone. A transcrição é o material bruto para a história ou artigo.',
        },
      ]}
      technicalTitle="O que saber sobre M4A"
      technicalIntro="M4A descreve um contêiner de áudio baseado em MP4, não um único codec. A maioria das gravações de voz usa AAC, enquanto alguns ficheiros usam ALAC sem perdas."
      technicalFacts={[
        {
          icon: 'layers',
          title: 'Contêiner e codec',
          desc: 'Um ficheiro .m4a contém frequentemente áudio AAC ou ALAC. O contêiner fornece temporização e metadados em torno desse fluxo de áudio.',
        },
        {
          icon: 'mic',
          title: 'Fluxo de trabalho das Memórias de Voz',
          desc: 'Você pode partilhar a gravação original de um iPhone ou Mac e carregá-la sem primeiro renomeá-la para MP3.',
        },
        {
          icon: 'clip',
          title: 'Metadados são separados',
          desc: 'Títulos, arte e metadados da Apple não são inseridos no texto da transcrição. Mantenha-os nas suas notas ou sistema de publicação.',
        },
        {
          icon: 'cloud',
          title: 'Gravações longas',
          desc: 'M4A é geralmente compacto, mas gravações longas de Memórias de Voz podem ainda exceder limites de upload. Divida ou exporte uma cópia de discurso menor quando necessário.',
        },
      ]}
      faq={[
        {
          q: 'Aceitam M4A das Memórias de Voz do iPhone diretamente?',
          a: 'Sim. As Memórias de Voz escrevem M4A padrão (AAC em contêiner MP4). Partilhe o ficheiro da aplicação, guarde no iCloud ou Ficheiros, e arraste-o aqui. Sem conversão necessária.',
        },
        {
          q: 'Qual é a diferença entre M4A e MP4?',
          a: 'M4A é a versão apenas áudio do contêiner MP4. Ambos usam o cabeçalho ftyp e codec AAC. .m4a sinaliza conteúdo apenas áudio enquanto .mp4 normalmente implica vídeo. A Mictoo aceita ambos diretamente.',
        },
        {
          q: 'A minha gravação do iPhone tem mais de 60 MB. E agora?',
          a: 'Uma Memória de Voz de 90 minutos pode exceder 60 MB. Se estiver autenticado, dividimos automaticamente até cerca de 3 horas. Para utilizadores anónimos, reduza primeiro: ffmpeg -i in.m4a -b:a 64k -ac 1 out.m4a. A qualidade do discurso permanece limpa.',
        },
        {
          q: 'Os metadados do iPhone (título, localização, data) aparecerão?',
          a: 'Não. A transcrição é texto simples sem metadados do dispositivo. Se você depender da data ou localização da gravação, mantenha esse mapeamento nas suas notas.',
        },
        {
          q: 'A Mictoo transcreve ficheiros M4A não ingleses?',
          a: 'Sim. O Whisper large-v3 suporta mais de 50 idiomas com deteção automática. Para memórias de voz curtas ou sotaques não ingleses, defina o idioma explicitamente para resultados mais limpos na primeira passagem.',
        },
        {
          q: 'Posso descarregar legendas SRT para um vídeo que usa este M4A?',
          a: 'Sim. Descarregue SRT ou VTT após a transcrição. Os timestamps alinham-se à linha do tempo original do M4A, então se você sincronizar o M4A a uma faixa de vídeo, as legendas correspondem com precisão ao quadro.',
        },
        {
          q: 'Posso traduzir a transcrição para outro idioma?',
          a: 'Sim. Após a transcrição, escolha um idioma alvo e clique em Traduzir. A tradução é feita no GPT-4o-mini e aparece ao lado do original.',
        },
        {
          q: 'O meu ficheiro M4A é mantido nos seus servidores?',
          a: 'Não. O áudio é transmitido para o fornecedor de transcrição, processado uma vez e removido da memória. Nunca o gravamos em disco. As transcrições são armazenadas apenas se você fizer login e salvar no histórico.',
        },
        {
          q: 'A qualidade do M4A afeta a transcrição?',
          a: 'Pouco. As Memórias de Voz do iPhone gravam a cerca de 32-64 kbps AAC, o que é suficiente para o Whisper. O Whisper reamostra para 16 kHz mono internamente, então a taxa de bits do codec tem impacto mínimo para discurso limpo.',
        },
        {
          q: 'Quanto tempo leva uma transcrição de M4A?',
          a: 'Uma Memória de Voz de 10 minutos normalmente termina em 15-30 segundos de ponta a ponta. Uma entrevista de 60 minutos termina em 60-90 segundos. A velocidade de upload é frequentemente o passo mais longo.',
        },
      ]}
      ctaHeadline="Arraste a sua Memória de Voz, obtenha uma transcrição limpa"
      ctaSubtitle="Memórias de Voz do iPhone, GarageBand, FaceTime, Apple Podcasts. AAC em MP4, sem necessidade de conversão."
      ctaButton="Carregar M4A para transcrever"
    />
  )
}