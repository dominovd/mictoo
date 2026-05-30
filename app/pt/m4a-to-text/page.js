import LandingLayout from '@/components/LandingLayout'

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

export const metadata = {
  title: 'M4A em texto — Transcrição de M4A grátis online | Mictoo',
  description: 'Converta arquivos de áudio M4A em texto grátis. Envie qualquer M4A — voice memos do iPhone, gravações, podcasts — e obtenha a transcrição na hora. Sem cadastro.',
  alternates: { canonical: 'https://mictoo.com/pt/m4a-to-text', languages: LANGS },

  openGraph: {
    title: "M4A em texto — Transcrição de M4A grátis online | Mictoo",
    description: "Converta arquivos de áudio M4A em texto grátis. Envie qualquer M4A — voice memos do iPhone, gravações, podcasts — e obtenha a transcrição na hora. Sem cadastro.",
    url: "https://mictoo.com/pt/m4a-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "M4A em texto — Transcrição de M4A grátis online | Mictoo",
    description: "Converta arquivos de áudio M4A em texto grátis. Envie qualquer M4A — voice memos do iPhone, gravações, podcasts — e obtenha a transcrição na hora. Sem cadastro.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function PtM4AToTextPage() {
  return (
    <LandingLayout
      badge="M4A · iPhone · Grátis · Instantâneo"
      h1={<>M4A em texto<br /><span className="text-brand-600">Transcrição de M4A grátis online</span></>}
      subtitle="Converta arquivos de áudio M4A em texto na hora. Ideal para voice memos do iPhone, gravações de voz e arquivos de podcast. Sem conta."
      defaultLanguage="pt"
      features={[
        { icon: '📱', title: 'Voice memos do iPhone', desc: 'M4A é o formato padrão para voice memos e gravações do iPhone. Envie direto e obtenha a transcrição em segundos.' },
        { icon: '🎵', title: 'Qualquer M4A', desc: 'Arquivos M4A de qualquer origem — iPhone, Mac, gravadores digitais, apps de podcasting — totalmente suportados.' },
        { icon: '📄', title: 'Export em texto ou SRT', desc: 'Baixe a transcrição como .txt simples ou .srt com timestamps.' },
      ]}
      faq={[
        { q: 'Como converto M4A em texto?', a: 'Envie seu arquivo M4A com a ferramenta acima. A transcrição é gerada automaticamente e exibida em segundos.' },
        { q: 'Posso transcrever voice memos do iPhone?', a: 'Sim. Os voice memos do iPhone são salvos como M4A. Envie o arquivo direto do iPhone ou após transferir para o computador.' },
        { q: 'M4A em texto é grátis?', a: 'Sim, totalmente grátis. Sem conta, sem assinatura. Só envie e transcreva.' },
        { q: 'Qual o tamanho máximo do M4A?', a: 'Até 25 MB. A maioria das gravações de voz e clipes curtos cabe com folga.' },
        { q: 'Quais outros formatos de áudio são suportados?', a: 'Além de M4A, o Mictoo suporta MP3, MP4, WAV, OGG, WEBM e FLAC.' },
      ]}
      relatedLinks={[
        { href: '/pt/wav-to-text', label: 'WAV em texto' },
        { href: '/pt/transcribe-mp3-to-text', label: 'MP3 em texto' },
        { href: '/pt', label: 'Todos os formatos' },
      ]}
    />
  )
}
