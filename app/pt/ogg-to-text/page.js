import LandingLayout from '@/components/LandingLayout'

const LANGS = {
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
}

export const metadata = {
  title: 'OGG em texto — Transcrição de áudio OGG grátis online | Mictoo',
  description: 'Converta arquivos de áudio OGG em texto grátis online. Envie qualquer gravação OGG Vorbis e receba uma transcrição precisa na hora. Sem cadastro.',
  alternates: { canonical: 'https://mictoo.com/pt/ogg-to-text', languages: LANGS },

  openGraph: {
    title: "OGG em texto — Transcrição de áudio OGG grátis online | Mictoo",
    description: "Converta arquivos de áudio OGG em texto grátis online. Envie qualquer gravação OGG Vorbis e receba uma transcrição precisa na hora. Sem cadastro.",
    url: "https://mictoo.com/pt/ogg-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "OGG em texto — Transcrição de áudio OGG grátis online | Mictoo",
    description: "Converta arquivos de áudio OGG em texto grátis online. Envie qualquer gravação OGG Vorbis e receba uma transcrição precisa na hora. Sem cadastro.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function PtOggToTextPage() {
  return (
    <LandingLayout
      badge="OGG · Vorbis · Grátis · Instantâneo"
      h1={<>OGG em texto<br /><span className="text-brand-600">Transcrição de OGG grátis online</span></>}
      subtitle="Envie qualquer arquivo de áudio OGG e converta em texto em segundos. Suporta OGG Vorbis e OGG Opus. Sem conta."
      defaultLanguage="pt"
      valueBlock={
        <>
          <p>OGG é um contêiner: pode guardar áudio Vorbis, Opus ou outras variantes. Ele aparece em mensagens de voz, ferramentas open source, exportações Linux e alguns apps web.</p>
          <p>O Mictoo extrai a faixa de áudio, detecta o codec e gera uma transcrição legível com timestamps, sem exigir conversão prévia.</p>
        </>
      }
      howItWorks={[
        { title: 'Envie o arquivo OGG', desc: 'Adicione um .ogg ou .oga do Telegram, navegador, gravador ou ferramenta Linux.' },
        { title: 'O Mictoo detecta o codec', desc: 'O sistema lê o contêiner e processa a faixa Vorbis ou Opus correta.' },
        { title: 'Baixe o texto', desc: 'Copie a transcrição ou exporte como TXT/SRT com timestamps.' },
      ]}
      whyUse={{
        title: 'Por que usar o Mictoo para OGG',
        bullets: [
          { title: 'Suporte a OGG e OGA', desc: 'Útil para arquivos que muitas ferramentas gerais ainda recusam.' },
          { title: 'Sem conversão prévia', desc: 'Evita passar por MP3 só para obter texto rapidamente.' },
          { title: 'Timestamps práticos', desc: 'Volte ao áudio original com referências de tempo claras.' },
          { title: 'Bom para Opus da web', desc: 'Funciona bem com áudio de chamadas, navegadores e mensagens.' },
        ],
      }}
      useCases={{
        title: 'Quando transcrever OGG',
        items: [
          { title: 'Mensagens do Telegram', desc: 'Transforme .oga curtos em notas pesquisáveis.' },
          { title: 'Gravações Linux', desc: 'Transcreva capturas feitas por ferramentas de áudio open source.' },
          { title: 'Chamadas WebRTC', desc: 'Recupere conteúdo de reuniões ou testes gravados em Opus.' },
          { title: 'Arquivos antigos', desc: 'Torne gravações OGG pesquisáveis sem recodificar.' },
        ],
      }}
      proTips={{
        title: 'Dicas para arquivos OGG',
        tips: [
          { title: 'Teste também .oga', desc: 'Muitas mensagens de voz usam essa extensão com áudio semelhante.' },
          { title: 'Extraia só o áudio se for pesado', desc: 'Em gravações grandes, enviar a faixa de voz pode ser mais rápido.' },
          { title: 'Defina o idioma em clipes curtos', desc: 'A detecção automática tem menos contexto em mensagens de poucos segundos.' },
        ],
      }}
      faq={[
        { q: 'Como converto OGG em texto?', a: 'Envie seu arquivo OGG acima. A transcrição é gerada automaticamente em segundos.' },
        { q: 'A conversão OGG em texto é grátis?', a: 'Sim, totalmente grátis. Sem cadastro ou conta.' },
        { q: 'Qual o tamanho máximo do arquivo OGG?', a: 'Até 25 MB.' },
        { q: 'Quais outros formatos de áudio são suportados?', a: 'Também são suportados MP3, MP4, WAV, M4A, FLAC, WEBM.' },
      ]}
      relatedLinks={[
        { href: '/pt/wav-to-text', label: 'WAV em texto' },
        { href: '/pt/flac-to-text', label: 'FLAC em texto' },
        { href: '/pt', label: 'Todos os formatos' },
      ]}
    />
  )
}
