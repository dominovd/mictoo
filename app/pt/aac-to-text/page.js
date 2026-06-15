import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/aac-to-text',
  'fr': 'https://mictoo.com/fr/aac-to-text',
  'de': 'https://mictoo.com/de/aac-to-text',
  'es': 'https://mictoo.com/es/aac-to-text',
  'ru': 'https://mictoo.com/ru/aac-to-text',
  'it': 'https://mictoo.com/it/aac-to-text',
  'pt': 'https://mictoo.com/pt/aac-to-text',
  'pl': 'https://mictoo.com/pl/aac-to-text',
  'ja': 'https://mictoo.com/ja/aac-to-text',
  'ko': 'https://mictoo.com/ko/aac-to-text',
  'x-default': 'https://mictoo.com/aac-to-text',
}

export const metadata = {
  title: 'AAC em texto — Transcrição de áudio AAC grátis online | Mictoo',
  description: 'Transcreva arquivos de áudio AAC em texto grátis. Arraste seu .aac, .m4a ou outro arquivo codificado em AAC e receba uma transcrição precisa em segundos.',
  alternates: { canonical: 'https://mictoo.com/pt/aac-to-text', languages: LANGS },

  openGraph: {
    title: "AAC em texto — Transcrição de áudio AAC grátis online | Mictoo",
    description: "Transcreva arquivos de áudio AAC em texto grátis. Arraste seu .aac, .m4a ou outro arquivo codificado em AAC e receba uma transcrição precisa em segundos.",
    url: "https://mictoo.com/pt/aac-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AAC em texto — Transcrição de áudio AAC grátis online | Mictoo",
    description: "Transcreva arquivos de áudio AAC em texto grátis. Arraste seu .aac, .m4a ou outro arquivo codificado em AAC e receba uma transcrição precisa em segundos.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function PtAacToTextPage() {
  return (
    <LandingLayout
      badge="AAC · M4A · Grátis"
      h1={<>AAC em texto<br /><span className="text-brand-600">Transcrição de AAC grátis online</span></>}
      subtitle="Envie seu arquivo de áudio AAC e receba uma transcrição em texto precisa em segundos. Funciona com .aac e .m4a (AAC dentro de um contêiner MP4). Sem cadastro."
      defaultLanguage="pt"
      valueBlock={
        <>
          <p>AAC é um codec de áudio, nem sempre um formato visível. Ele pode aparecer como .aac puro, dentro de M4A/MP4 ou em exportações de vídeo e podcast.</p>
          <p>O Mictoo permite enviar esses arquivos diretamente, transcrever a fala e exportar o resultado sem criar uma cópia WAV intermediária.</p>
        </>
      }
      howItWorks={[
        { title: 'Envie AAC ou M4A', desc: 'Adicione um .aac, .m4a ou mídia que use áudio AAC.' },
        { title: 'A faixa é processada', desc: 'O Mictoo lê o áudio e prepara uma transcrição editável.' },
        { title: 'Edite e exporte', desc: 'Corrija nomes ou termos técnicos e baixe TXT ou SRT.' },
      ]}
      whyUse={{
        title: 'Por que Mictoo para AAC',
        bullets: [
          { title: 'Upload direto', desc: 'Não é preciso converter para WAV ou MP3 antes da transcrição.' },
          { title: 'Bom para fala comprimida', desc: 'AAC mantém voz clara em arquivos relativamente pequenos.' },
          { title: 'Útil para fontes de vídeo', desc: 'Muitos clipes e exportações móveis usam AAC internamente.' },
          { title: 'Fluxo não destrutivo', desc: 'Trabalhe com uma cópia ou com o original sem alterá-lo.' },
        ],
      }}
      useCases={{
        title: 'Usos comuns de AAC',
        items: [
          { title: 'Podcasts e CDNs', desc: 'Converta episódios ou cortes de áudio codificados em AAC.' },
          { title: 'Trechos de YouTube ou MP4', desc: 'Transcreva a faixa de voz depois de separar o áudio.' },
          { title: 'Apps móveis', desc: 'Processe áudios exportados por apps que usam AAC por padrão.' },
          { title: 'Gravações leves', desc: 'Obtenha texto de arquivos pequenos sem inflar para WAV.' },
        ],
      }}
      proTips={{
        title: 'Dicas para AAC',
        tips: [
          { title: 'Não aumente o bitrate artificialmente', desc: 'Isso não recupera detalhe perdido e só cria arquivos maiores.' },
          { title: 'Use M4A se um app falhar', desc: 'Algumas ferramentas lidam melhor com contêiner M4A do que com .aac puro.' },
          { title: 'Revise nomes próprios', desc: 'Compressão pode afetar marcas, nomes e termos técnicos.' },
        ],
      }}
      faq={[
        { q: 'O que é um arquivo AAC?', a: 'AAC (Advanced Audio Coding) é um formato de compressão de áudio com perdas usado pelo iTunes, Apple Music, YouTube e pela maioria dos apps de podcast. Os arquivos têm extensão .aac ou .m4a. AAC oferece qualidade melhor que MP3 no mesmo bitrate.' },
        { q: 'Qual a diferença entre .aac e .m4a?', a: 'Ambos contêm áudio codificado em AAC. .aac é o fluxo de áudio bruto; .m4a o envolve em um contêiner MP4 (é assim que iTunes e Voice Memos do iPhone salvam). O Mictoo suporta os dois direto.' },
        { q: 'Como converto AAC em texto grátis?', a: 'Arraste seu arquivo AAC para a área de upload acima. O Mictoo o transcreve automaticamente com IA e mostra o texto em segundos. Copie ou baixe como .txt.' },
        { q: 'Qual o tamanho máximo do arquivo AAC?', a: 'Até 25 MB por upload. AAC a 128 kbps dá cerca de 25 minutos de áudio em 25 MB; a 64 kbps quase uma hora. Para arquivos mais longos, reduza o bitrate ou divida em segmentos.' },
        { q: 'Posso obter timestamps para uma transcrição AAC?', a: 'Sim. Após a transcrição, você pode baixar um arquivo .srt com timestamps precisos — útil para sincronizar a transcrição com o áudio ou vídeo original.' },
      ]}
      relatedLinks={[
        { href: '/pt/m4a-to-text', label: 'M4A em texto' },
        { href: '/pt/transcribe-mp3-to-text', label: 'MP3 em texto' },
        { href: '/pt', label: 'Todos os formatos' },
      ]}
    />
  )
}
