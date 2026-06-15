import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/flac-to-text',
  'fr': 'https://mictoo.com/fr/flac-to-text',
  'de': 'https://mictoo.com/de/flac-to-text',
  'es': 'https://mictoo.com/es/flac-to-text',
  'ru': 'https://mictoo.com/ru/flac-to-text',
  'it': 'https://mictoo.com/it/flac-to-text',
  'pt': 'https://mictoo.com/pt/flac-to-text',
  'pl': 'https://mictoo.com/pl/flac-to-text',
  'ja': 'https://mictoo.com/ja/flac-to-text',
  'ko': 'https://mictoo.com/ko/flac-to-text',
  'x-default': 'https://mictoo.com/flac-to-text',
}

export const metadata = {
  title: 'FLAC em texto — Transcrição de áudio FLAC grátis online | Mictoo',
  description: 'Converta arquivos FLAC em texto grátis online. Envie qualquer gravação FLAC e receba uma transcrição precisa em segundos. Sem cadastro.',
  alternates: { canonical: 'https://mictoo.com/pt/flac-to-text', languages: LANGS },

  openGraph: {
    title: "FLAC em texto — Transcrição de áudio FLAC grátis online | Mictoo",
    description: "Converta arquivos FLAC em texto grátis online. Envie qualquer gravação FLAC e receba uma transcrição precisa em segundos. Sem cadastro.",
    url: "https://mictoo.com/pt/flac-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FLAC em texto — Transcrição de áudio FLAC grátis online | Mictoo",
    description: "Converta arquivos FLAC em texto grátis online. Envie qualquer gravação FLAC e receba uma transcrição precisa em segundos. Sem cadastro.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function PtFlacToTextPage() {
  return (
    <LandingLayout
      badge="FLAC · Sem perdas · Grátis"
      h1={<>FLAC em texto<br /><span className="text-brand-600">Transcrição de FLAC grátis online</span></>}
      subtitle="Envie qualquer arquivo de áudio FLAC e converta em texto na hora. A qualidade sem perdas do FLAC garante excelente precisão de transcrição. Sem conta."
      defaultLanguage="pt"
      valueBlock={
        <>
          <p>FLAC comprime áudio sem perda, por isso aparece em arquivos, masters, entrevistas de campo, coleções musicais e material histórico.</p>
          <p>O Mictoo decodifica FLAC diretamente e gera uma transcrição sem pedir conversão prévia para WAV ou MP3.</p>
        </>
      }
      howItWorks={[
        { title: 'Envie o FLAC', desc: 'Adicione uma gravação lossless, entrevista ou arquivo de áudio.' },
        { title: 'O Mictoo decodifica a voz', desc: 'O áudio é processado mantendo a informação necessária para reconhecer a fala.' },
        { title: 'Exporte a transcrição', desc: 'Copie o texto ou baixe TXT/SRT para arquivo, notas ou legendas.' },
      ]}
      whyUse={{
        title: 'Por que Mictoo para FLAC',
        bullets: [
          { title: 'Sem perda acumulada', desc: 'Evita converter para formatos com perda antes de transcrever.' },
          { title: 'Bom para arquivos', desc: 'FLAC preserva material antigo ou sensível com tamanho razoável.' },
          { title: 'Útil para áudio difícil', desc: 'Uma fonte limpa ajuda quando há ruído, eco ou vozes baixas.' },
          { title: 'Fluxo simples', desc: 'Envie o arquivo e trabalhe com texto sem versões intermediárias.' },
        ],
      }}
      useCases={{
        title: 'Quando transcrever FLAC',
        items: [
          { title: 'História oral', desc: 'Converta entrevistas longas em arquivos pesquisáveis.' },
          { title: 'Masters e sessões', desc: 'Extraia texto de material de estúdio ou gravações editadas.' },
          { title: 'Gravações de campo', desc: 'Transcreva fontes preservadas em formato sem perda.' },
          { title: 'Arquivos familiares', desc: 'Crie texto para memórias, citações e busca.' },
        ],
      }}
      proTips={{
        title: 'Dicas para FLAC',
        tips: [
          { title: 'Não converta para MP3 se não precisar', desc: 'Use o FLAC quando estiver dentro do limite de upload.' },
          { title: 'Divida sessões longas', desc: 'Blocos menores são mais fáceis de revisar e corrigir.' },
          { title: 'Guarde o master', desc: 'Faça uma cópia de trabalho se precisar reduzir tamanho.' },
        ],
      }}
      faq={[
        { q: 'Como converto um arquivo FLAC em texto?', a: 'Envie seu arquivo FLAC com a ferramenta acima. A IA o transcreve e mostra o texto em segundos.' },
        { q: 'O FLAC transcreve com mais precisão que o MP3?', a: 'A qualidade sem perdas do FLAC pode marginalmente melhorar a precisão em áudios de baixo volume ou complexos, em comparação com formatos muito comprimidos.' },
        { q: 'A conversão FLAC em texto é grátis?', a: 'Sim, totalmente grátis. Sem conta ou cadastro.' },
        { q: 'Qual o tamanho máximo do FLAC?', a: 'Até 25 MB. Os FLAC são grandes por causa da compressão sem perdas — considere converter para um formato com perdas se o arquivo ultrapassar o limite.' },
      ]}
      relatedLinks={[
        { href: '/pt/wav-to-text', label: 'WAV em texto' },
        { href: '/pt/transcribe-mp3-to-text', label: 'MP3 em texto' },
        { href: '/pt', label: 'Todos os formatos' },
      ]}
    />
  )
}
