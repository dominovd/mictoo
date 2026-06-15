import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/wav-to-text',
  'fr': 'https://mictoo.com/fr/wav-to-text',
  'de': 'https://mictoo.com/de/wav-to-text',
  'es': 'https://mictoo.com/es/wav-to-text',
  'ru': 'https://mictoo.com/ru/wav-to-text',
  'it': 'https://mictoo.com/it/wav-to-text',
  'pt': 'https://mictoo.com/pt/wav-to-text',
  'pl': 'https://mictoo.com/pl/wav-to-text',
  'ja': 'https://mictoo.com/ja/wav-to-text',
  'ko': 'https://mictoo.com/ko/wav-to-text',
  'x-default': 'https://mictoo.com/wav-to-text',
}

export const metadata = {
  title: 'WAV em texto — Transcrição de WAV grátis online | Mictoo',
  description: 'Converta arquivos WAV em texto online grátis. Envie qualquer áudio WAV e receba uma transcrição precisa em segundos. Sem cadastro.',
  alternates: { canonical: 'https://mictoo.com/pt/wav-to-text', languages: LANGS },

  openGraph: {
    title: "WAV em texto — Transcrição de WAV grátis online | Mictoo",
    description: "Converta arquivos WAV em texto online grátis. Envie qualquer áudio WAV e receba uma transcrição precisa em segundos. Sem cadastro.",
    url: "https://mictoo.com/pt/wav-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "WAV em texto — Transcrição de WAV grátis online | Mictoo",
    description: "Converta arquivos WAV em texto online grátis. Envie qualquer áudio WAV e receba uma transcrição precisa em segundos. Sem cadastro.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function PtWavToTextPage() {
  return (
    <LandingLayout
      badge="WAV · Grátis · Instantâneo"
      h1={<>WAV em texto<br /><span className="text-brand-600">Transcrição de WAV grátis online</span></>}
      subtitle="Envie qualquer arquivo de áudio WAV e receba uma transcrição em texto precisa em segundos. Suporta todas as gravações WAV — entrevistas, chamadas, aulas, notas de voz. Sem conta."
      defaultLanguage="pt"
      valueBlock={
        <>
          <p>WAV costuma ser áudio sem compressão de estúdios, gravadores, DAWs, entrevistas e arquivos. A qualidade é alta, mas os arquivos podem ser grandes.</p>
          <p>O Mictoo transforma WAV em uma transcrição editável e permite exportar texto ou legendas sem digitar a gravação manualmente.</p>
        </>
      }
      howItWorks={[
        { title: 'Envie o WAV', desc: 'Adicione uma entrevista, aula, podcast, bounce de DAW ou gravação de campo.' },
        { title: 'A IA transcreve a fala', desc: 'O Mictoo processa o áudio e cria texto com timestamps.' },
        { title: 'Edite e exporte', desc: 'Copie o texto ou baixe formatos úteis como TXT ou SRT.' },
      ]}
      whyUse={{
        title: 'Por que Mictoo para WAV',
        bullets: [
          { title: 'Upload direto de WAV', desc: 'Evita converter gravações de estúdio ou gravador quando o arquivo cabe.' },
          { title: 'Útil para fontes profissionais', desc: 'Funciona para entrevistas, podcasts, aulas, material de arquivo e DAWs.' },
          { title: 'Timestamps para revisão', desc: 'Volte ao áudio original ao corrigir citações ou nomes.' },
          { title: 'Guia para arquivos grandes', desc: 'Você pode criar uma cópia mono mais leve se o WAV completo for pesado.' },
        ],
      }}
      useCases={{
        title: 'Quando transcrever WAV',
        items: [
          { title: 'Entrevistas', desc: 'Extraia citações e perguntas de gravações limpas.' },
          { title: 'Podcasts', desc: 'Crie show notes, captions e conteúdo reutilizável.' },
          { title: 'Aulas e palestras', desc: 'Transforme sessões longas em notas pesquisáveis.' },
          { title: 'Arquivos', desc: 'Torne gravações antigas ou institucionais pesquisáveis.' },
        ],
      }}
      proTips={{
        title: 'Dicas para WAV',
        tips: [
          { title: 'Use uma cópia 16 kHz mono se for pesado', desc: 'Para voz, uma cópia de trabalho mais leve costuma ser suficiente.' },
          { title: 'Corte silêncios', desc: 'Reduza tamanho e tempo de revisão sem tocar no conteúdo falado.' },
          { title: 'Guarde o WAV original', desc: 'Mantenha o master e use versão comprimida só se precisar subir mais rápido.' },
        ],
      }}
      faq={[
        { q: 'Como converto um arquivo WAV em texto?', a: 'Envie seu arquivo WAV com a ferramenta acima. O Mictoo o transcreve automaticamente com IA e mostra o texto em segundos.' },
        { q: 'A conversão WAV em texto é grátis?', a: 'Sim, totalmente grátis. Sem conta. Envie seus WAVs — sem cota mensal de minutos, sem cadastro.' },
        { q: 'Qual o tamanho máximo do WAV?', a: 'Até 25 MB. Para gravações maiores, converta primeiro para MP3 ou divida a gravação em segmentos.' },
        { q: 'Posso obter uma transcrição com timestamps a partir de um WAV?', a: 'Sim. Após a transcrição, clique no botão .srt para baixar um arquivo de legendas com timestamps exatos para cada segmento.' },
        { q: 'Quais outros formatos de áudio são suportados?', a: 'O Mictoo também suporta MP3, MP4, M4A, OGG, WEBM e FLAC além do WAV.' },
      ]}
      relatedLinks={[
        { href: '/pt/transcribe-mp3-to-text', label: 'MP3 em texto' },
        { href: '/pt/transcribe-audio-to-text', label: 'Áudio em texto' },
        { href: '/pt', label: 'Todos os formatos' },
      ]}
    />
  )
}
