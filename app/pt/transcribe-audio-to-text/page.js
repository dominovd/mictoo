import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/transcribe-audio-to-text',
  'fr': 'https://mictoo.com/fr/transcribe-audio-to-text',
  'de': 'https://mictoo.com/de/transcribe-audio-to-text',
  'es': 'https://mictoo.com/es/transcribe-audio-to-text',
  'ru': 'https://mictoo.com/ru/transcribe-audio-to-text',
  'it': 'https://mictoo.com/it/transcribe-audio-to-text',
  'pt': 'https://mictoo.com/pt/transcribe-audio-to-text',
  'pl': 'https://mictoo.com/pl/transcribe-audio-to-text',
  'ja': 'https://mictoo.com/ja/transcribe-audio-to-text',
  'ko': 'https://mictoo.com/ko/transcribe-audio-to-text',
  'x-default': 'https://mictoo.com/transcribe-audio-to-text',
}

export const metadata = {
  title: 'Áudio em texto — transcrição online grátis | Mictoo',
  description:
    'Conversor grátis de áudio em texto. Envie qualquer arquivo (MP3, WAV, M4A, FLAC, OGG, AAC) e receba uma transcrição limpa em segundos. Sem cadastro, mais de 50 idiomas.',
  alternates: { canonical: 'https://mictoo.com/pt/transcribe-audio-to-text', languages: LANGS },
}

export default function PtAudioToTextPage() {
  return (
    <LandingLayout
      defaultLanguage="pt"
      badge="MP3 · WAV · M4A · FLAC · GRÁTIS"
      h1={
        <>
          Áudio em texto
          <br />
          <span className="text-brand-600">Transcrição IA grátis</span>
        </>
      }
      subtitle="Transcrição IA grátis para qualquer arquivo de áudio. MP3, WAV, M4A, FLAC, OGG, AAC. Sem conta, sem cobrança por minuto."
      howItWorks={[
        {
          icon: '📂',
          title: 'Solte o áudio',
          desc: 'Qualquer formato comum funciona. MP3 do celular, WAV do gravador de campo, M4A de memos de voz do iPhone, FLAC de export de podcast. Arraste o arquivo ou clique para escolher.',
        },
        {
          icon: '⚡',
          title: 'A IA transcreve',
          desc: 'Usamos OpenAI Whisper large-v3. Um arquivo de 10 minutos demora cerca de 20 segundos. Um de 30 minutos, menos de um minuto.',
        },
        {
          icon: '📋',
          title: 'Copie, baixe ou edite',
          desc: 'Leia a transcrição no navegador. Baixe como TXT para anotações ou SRT se precisar de marcadores de tempo. Corrija palavras erradas inline antes de exportar.',
        },
      ]}
      whyUse={{
        title: 'Por que Mictoo para áudio em texto',
        bullets: [
          {
            title: 'Um modelo, e ele é o melhor',
            desc: 'Usamos Whisper large-v3 para todo mundo. Sem truques tipo "a versão grátis roda em modelo mais fraco". O mesmo modelo que move transcrição enterprise cara transcreve seu arquivo.',
          },
          {
            title: 'Suporte amplo a formatos',
            desc: 'MP3, WAV, M4A, FLAC, OGG, WEBM, AAC, mais formatos de vídeo com áudio dentro (MP4, MOV). Sem fricção do tipo "só aceitamos MP3, converta antes".',
          },
          {
            title: 'Mais de 50 idiomas, inclusive arquivos bilíngues',
            desc: 'A detecção automática escolhe o idioma a partir de uma amostra curta de áudio. Se o seu arquivo trocar de idioma no meio da gravação (típico em entrevistas), o Whisper acompanha a troca.',
          },
          {
            title: 'Nenhum arquivo é guardado',
            desc: 'Seu áudio é enviado ao provedor de transcrição, processado e descartado. Nunca gravamos o arquivo em nosso banco ou storage. Os provedores (Groq, OpenAI) não treinam com dados de API.',
          },
          {
            title: 'Grátis sem asterisco',
            desc: 'Até 30 minutos por arquivo sem conta. Com cadastro grátis, até 60 minutos por arquivo. Nada mais é limitado.',
          },
        ],
      }}
      useCases={{
        title: 'Quando áudio em texto realmente economiza tempo',
        items: [
          {
            title: 'Notas de entrevista',
            desc: 'Você passou uma hora conversando com uma fonte. Em vez de procurar uma citação ouvindo a gravação, dá Ctrl+F na transcrição. Cinco segundos em vez de cinco minutos.',
          },
          {
            title: 'Limpar memos de voz',
            desc: 'Você ditou uma ideia pela metade no celular durante a rua. Agora quer ela como texto. Solta o M4A, recebe frases, cola no Notion.',
          },
          {
            title: 'Revisar aulas e webinars depois',
            desc: 'Duas horas de aula em 2x é puxado. Uma transcrição em texto deixa você escanear seção por seção e só mergulhar nas partes que importam.',
          },
          {
            title: 'Preparação para tradução',
            desc: 'O Whisper transcreve no idioma original. De lá você cola no DeepL ou ChatGPT e traduz limpo. Melhor do que tradução automática direto do áudio bruto.',
          },
          {
            title: 'Busca em catálogo antigo de áudio',
            desc: 'Anos de gravações de calls, episódios ou reuniões? Com transcrição em lote, você de repente tem um arquivo pesquisável. Mais barato do que qualquer "ferramenta IA de meeting" com assinatura.',
          },
        ],
      }}
      proTips={{
        title: 'Dicas para uma transcrição de áudio limpa',
        tips: [
          {
            title: 'Mono basta. Stereo é largura de banda desperdiçada',
            desc: 'Fala não precisa de dois canais. Se o arquivo está enorme, reencode para mono e o tamanho cai pela metade sem perda de qualidade na transcrição. Comando ffmpeg: ffmpeg -i input.wav -ac 1 output.wav.',
          },
          {
            title: 'MP3 a 64 kbps é mais que suficiente para fala',
            desc: 'Ao exportar de uma DAW ou editor, MP3 mono a 64 kbps dá ao Whisper tudo o que ele precisa. Bitrates maiores não melhoram a precisão, só engordam o arquivo.',
          },
          {
            title: 'Corte silêncios longos no começo e no fim',
            desc: 'Se a sua gravação tem 90 segundos de ar morto antes da primeira palavra, esses 90 segundos comem o limite de duração. Corte em Audacity (Effect, Truncate Silence) antes do upload.',
          },
          {
            title: 'Escolha o idioma manualmente para arquivos curtos',
            desc: 'A detecção automática amostra o primeiro chunk de áudio para identificar o idioma. Em arquivos abaixo de 5 minutos a amostra é pequena e a detecção fica menos confiável. Escolha o idioma explicitamente no menu.',
          },
          {
            title: 'Música de fundo faz o Whisper alucinar',
            desc: 'Se o áudio tem música por baixo da fala (sponsor reads, intro beds, B-roll), o modelo às vezes inventa palavras em trechos só de música. Se você tem uma versão sem música, use ela.',
          },
          {
            title: 'Para arquivos muito ruidosos, faça denoise antes',
            desc: 'Opções grátis: Audacity Noise Reduction (integrado) ou Adobe Podcast Enhance (web grátis, surpreendentemente bom). Passe o arquivo uma vez e depois carregue a versão limpa.',
          },
        ],
      }}
      faq={[
        {
          q: 'Qual é o melhor conversor grátis de áudio em texto?',
          a: 'Somos suspeitos, mas a resposta honesta: qualquer ferramenta que use Whisper large-v3 está no topo do free tier. Mictoo roda exatamente esse modelo sem muro de cadastro. Otter e Trint são bons, mas cobram por minuto além da cota grátis. Para transcrições ocasionais, free é o nível certo.',
        },
        {
          q: 'Quão precisa é a conversão de áudio em texto?',
          a: 'Para fala limpa em idioma principal: 5 a 10 por cento de taxa de erro por palavra. Para áudio ruidoso, sotaques fortes ou vocabulário técnico, a precisão cai. Para a maioria dos usos (notas, busca, rascunhos) é o bastante. Para registros jurídicos ou médicos, contrate um humano.',
        },
        {
          q: 'Quais formatos de áudio vocês suportam?',
          a: 'MP3, WAV, M4A, FLAC, OGG, WEBM, AAC. Também arquivos de vídeo como MP4 e MOV (extraímos o áudio automaticamente). AIFF e ALAC não são suportados diretamente. Converta para WAV ou FLAC antes.',
        },
        {
          q: 'Quanto tempo demora a transcrição?',
          a: 'Um arquivo de 5 minutos costuma ficar pronto em 10 a 15 segundos. Um de 30 minutos em 45 a 60. Processamos o arquivo inteiro como uma única requisição, sem precisar dividir do seu lado.',
        },
        {
          q: 'Posso transcrever uma gravação de chamada?',
          a: 'Sim. Chamadas telefônicas costumam ser 8 kHz mono com alguma compressão. O Whisper lida bem, a precisão é um pouco menor que áudio de estúdio. Garanta que a gravação seja legal na sua jurisdição.',
        },
        {
          q: 'Preciso escolher o idioma?',
          a: 'Não, detecção automática vem por padrão. Para áudio abaixo de 5 minutos ou arquivos que começam com algo não-falado, escolha o idioma manualmente para resultados mais confiáveis.',
        },
        {
          q: 'Tem cobrança por minuto?',
          a: 'Sem cobrança. Transcrição é grátis sem contador de minutos. Nos financiamos com publicidade display e um plano Pro planejado para power users.',
        },
        {
          q: 'Qual o tamanho máximo de arquivo?',
          a: '25 MB sem conta, 60 MB com cadastro grátis. Se o arquivo for maior, veja nosso guia de compressão.',
        },
        {
          q: 'Meu áudio é guardado nos seus servidores?',
          a: 'Não. Enviamos o arquivo direto ao provedor de transcrição, recebemos o texto de volta e descartamos o áudio. Nada é gravado em banco de dados ou storage nosso.',
        },
        {
          q: 'Posso editar a transcrição antes do download?',
          a: 'Sim. Após a transcrição, dá para corrigir palavras erradas inline no visualizador de resultado e baixar a versão editada.',
        },
        {
          q: 'Quais formatos de saída tem?',
          a: 'Texto puro (TXT), arquivo de legenda (SRT) com timecode e copiar para a área de transferência. O SRT funciona no YouTube Studio, Premiere Pro, DaVinci Resolve e qualquer editor de vídeo padrão.',
        },
        {
          q: 'Mictoo funciona no celular?',
          a: 'Sim. A página é mobile-friendly. Dá para carregar direto do celular, inclusive do app Arquivos do iOS ou da pasta Downloads do Android.',
        },
      ]}
      relatedLinks={[
        { href: '/pt/transcribe-mp3-to-text', label: 'MP3 em texto', desc: 'Dicas e particularidades específicas de MP3.' },
        { href: '/pt/transcribe-video-to-text', label: 'Vídeo em texto', desc: 'Mesmo motor, otimizado para arquivos MP4 e MOV.' },
        { href: '/pt/timestamped-transcription', label: 'Transcrição com timecode', desc: 'Quando você precisa de marcadores por frase ou por palavra.' },
        { href: '/pt/how-to-compress-audio', label: 'Comprimir áudio', desc: 'Quando o arquivo é grande demais para upload.' },
      ]}
    />
  )
}
