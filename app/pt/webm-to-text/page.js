import LandingLayout from '@/components/LandingLayout'

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

export const metadata = {
  title: 'WEBM em texto — Transcrição de WEBM grátis online | Mictoo',
  description: 'Converta arquivos de áudio e vídeo WEBM em texto grátis online. Envie qualquer gravação WEBM e receba uma transcrição precisa na hora. Sem cadastro.',
  alternates: { canonical: 'https://mictoo.com/pt/webm-to-text', languages: LANGS },

  openGraph: {
    title: "WEBM em texto — Transcrição de WEBM grátis online | Mictoo",
    description: "Converta arquivos de áudio e vídeo WEBM em texto grátis online. Envie qualquer gravação WEBM e receba uma transcrição precisa na hora. Sem cadastro.",
    url: "https://mictoo.com/pt/webm-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "WEBM em texto — Transcrição de WEBM grátis online | Mictoo",
    description: "Converta arquivos de áudio e vídeo WEBM em texto grátis online. Envie qualquer gravação WEBM e receba uma transcrição precisa na hora. Sem cadastro.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function PtWebmToTextPage() {
  return (
    <LandingLayout
      badge="WEBM · Gravações de navegador · Grátis"
      h1={<>WEBM em texto<br /><span className="text-brand-600">Transcrição de WEBM grátis online</span></>}
      subtitle="Envie qualquer arquivo de áudio ou vídeo WEBM e receba uma transcrição em texto precisa em segundos. WEBM é comumente usado por navegadores, gravadores de tela e ferramentas de videochamada. Sem conta."
      defaultLanguage="pt"
      valueBlock={
        <>
          <p>WEBM costuma vir de gravações do navegador, captura de tela, Loom, OBS ou chamadas web. Pode conter vídeo, mas para transcrição o que importa é a faixa de voz.</p>
          <p>O Mictoo extrai o áudio do WEBM e converte em texto com timestamps, sem exigir renderização manual de outro arquivo.</p>
        </>
      }
      howItWorks={[
        { title: 'Envie o WEBM', desc: 'Adicione a gravação do navegador, tela ou chamada.' },
        { title: 'O áudio é extraído', desc: 'O Mictoo processa a voz e gera uma transcrição editável.' },
        { title: 'Exporte texto ou legendas', desc: 'Baixe TXT ou SRT para notas, documentação ou captions.' },
      ]}
      whyUse={{
        title: 'Por que Mictoo para WEBM',
        bullets: [
          { title: 'Menos passos técnicos', desc: 'Evita abrir ffmpeg só para extrair o áudio da gravação web.' },
          { title: 'Timestamps alinhados', desc: 'As marcas ajudam a voltar ao momento certo do vídeo.' },
          { title: 'Bom para Opus', desc: 'WEBM frequentemente usa Opus, eficiente para voz.' },
          { title: 'Privacidade prática', desc: 'Transcreva uma gravação local sem publicá-la em plataforma de vídeo.' },
        ],
      }}
      useCases={{
        title: 'Quando transcrever WEBM',
        items: [
          { title: 'Gravações Loom', desc: 'Transforme tutoriais e demos em notas ou documentação.' },
          { title: 'Capturas OBS', desc: 'Extraia texto de aulas, webinars ou testes de produto.' },
          { title: 'Reuniões no navegador', desc: 'Recupere decisões e perguntas de gravações locais.' },
          { title: 'QA e pesquisa', desc: 'Transcreva sessões de usuário para revisar citações e problemas.' },
        ],
      }}
      proTips={{
        title: 'Dicas para WEBM',
        tips: [
          { title: 'Extraia áudio se o vídeo for enorme', desc: 'Uma faixa OPUS ou M4A pode subir mais rápido que o WEBM completo.' },
          { title: 'Cuide do microfone', desc: 'Voz clara melhora mais a transcrição do que resolução de vídeo alta.' },
          { title: 'Guarde o WEBM original', desc: 'Use depois para editar clipes ou validar timestamps.' },
        ],
      }}
      faq={[
        { q: 'Como converto WEBM em texto?', a: 'Envie seu arquivo WEBM acima. A transcrição é gerada automaticamente em segundos.' },
        { q: 'A conversão WEBM em texto é grátis?', a: 'Sim, totalmente grátis. Sem conta ou cadastro.' },
        { q: 'Posso transcrever gravações de tela do Chrome?', a: 'Sim. O gravador de tela integrado do Chrome salva o vídeo como WEBM. Envie o arquivo direto para obter a transcrição.' },
        { q: 'Qual o tamanho máximo do WEBM?', a: 'Até 25 MB. Para gravações maiores, extraia primeiro a faixa de áudio para reduzir o tamanho.' },
      ]}
      relatedLinks={[
        { href: '/pt/transcribe-video-to-text', label: 'Vídeo em texto' },
        { href: '/pt/wav-to-text', label: 'WAV em texto' },
        { href: '/pt', label: 'Todos os formatos' },
      ]}
    />
  )
}
