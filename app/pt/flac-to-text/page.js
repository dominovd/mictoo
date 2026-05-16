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
}

export default function PtFlacToTextPage() {
  return (
    <LandingLayout
      badge="FLAC · Sem perdas · Grátis"
      h1={<>FLAC em texto<br /><span className="text-brand-600">Transcrição de FLAC grátis online</span></>}
      subtitle="Envie qualquer arquivo de áudio FLAC e converta em texto na hora. A qualidade sem perdas do FLAC garante excelente precisão de transcrição. Sem conta."
      defaultLanguage="pt"
      features={[
        { icon: '🎵', title: 'Qualidade de áudio sem perdas', desc: 'Arquivos FLAC preservam toda a qualidade do áudio, ajudando a transcrição IA a atingir a precisão máxima.' },
        { icon: '⚡', title: 'Resultados instantâneos', desc: 'A maioria dos arquivos FLAC é transcrita em menos de 30 segundos, independentemente da qualidade ou profundidade de bits.' },
        { icon: '📄', title: 'Export .txt e .srt', desc: 'Baixe a transcrição como texto simples ou como arquivo SRT com timestamps.' },
      ]}
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
