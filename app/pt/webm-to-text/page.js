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
      features={[
        { icon: '🖥️', title: 'Navegador e tela', desc: 'WEBM é o formato padrão para gravações de tela do Chrome e Firefox, clipes do Loom e gravações WebRTC.' },
        { icon: '🎬', title: 'WEBM áudio e vídeo', desc: 'Suporta tanto WEBM só áudio quanto WEBM vídeo. O áudio é extraído automaticamente.' },
        { icon: '📄', title: 'Export .txt e .srt', desc: 'Baixe a transcrição como texto simples ou como arquivo SRT com timestamps.' },
      ]}
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
