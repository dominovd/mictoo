import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/transcribe-video-to-text',
  'fr': 'https://mictoo.com/fr/transcribe-video-to-text',
  'de': 'https://mictoo.com/de/transcribe-video-to-text',
  'es': 'https://mictoo.com/es/transcribe-video-to-text',
  'ru': 'https://mictoo.com/ru/transcribe-video-to-text',
  'it': 'https://mictoo.com/it/transcribe-video-to-text',
  'pt': 'https://mictoo.com/pt/transcribe-video-to-text',
  'x-default': 'https://mictoo.com/transcribe-video-to-text',
}

export const metadata = {
  title: 'Vídeo em texto — Transcrição de vídeo grátis online | Mictoo',
  description: 'Converta vídeo em texto online grátis. Envie MP4, WEBM ou MOV e receba uma transcrição precisa na hora. IA. Sem conta.',
  alternates: { canonical: 'https://mictoo.com/pt/transcribe-video-to-text', languages: LANGS },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Vídeo em texto — Mictoo',
  url: 'https://mictoo.com/pt/transcribe-video-to-text',
  description: 'Conversor de vídeo em texto online grátis. Transcreve MP4, WEBM e outros formatos.',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}

export default function PtVideoToTextPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LandingLayout
        badge="MP4 · WEBM · Grátis · Instantâneo"
        h1={<>Vídeo em texto online<br /><span className="text-brand-600">Transcrição grátis</span></>}
        subtitle="Envie qualquer arquivo de vídeo — downloads do YouTube, screencasts, entrevistas, aulas — e receba as palavras faladas como texto em segundos."
        defaultLanguage="pt"
        features={[
          { icon: '🎬', title: 'MP4, WEBM e outros', desc: 'Suporta MP4, WEBM, MPEG e outros formatos de vídeo. O áudio é extraído automaticamente.' },
          { icon: '🎞️', title: 'Legendas SRT', desc: 'Baixe um arquivo .srt com timestamps — pronto para upload no YouTube ou em qualquer editor de vídeo.' },
          { icon: '⚡', title: 'Resultados instantâneos', desc: 'Um vídeo de 10 minutos é tipicamente transcrito em menos de 30 segundos. Sem fila, sem espera.' },
        ]}
        faq={[
          { q: 'Como transcrever um vídeo grátis?', a: 'Envie seu arquivo de vídeo com a ferramenta acima. O Mictoo extrai o áudio e o transcreve com IA. A transcrição aparece em segundos.' },
          { q: 'Posso obter legendas a partir de um vídeo?', a: 'Sim. Após a transcrição, clique no botão de download .srt para obter um arquivo de legendas com timestamps que pode ser usado no YouTube, Premiere ou qualquer editor.' },
          { q: 'Quais formatos de vídeo são suportados?', a: 'MP4, WEBM, MPEG. Também são aceitos arquivos de áudio (MP3, WAV, M4A, OGG, FLAC).' },
          { q: 'Funciona com vídeos do YouTube?', a: 'Sim — baixe primeiro seu vídeo do YouTube (com um downloader), depois envie o arquivo aqui para transcrição.' },
          { q: 'Há limite de tamanho?', a: 'Até 25 MB. Para vídeos mais longos, extraia primeiro a faixa de áudio (ex. com ffmpeg ou um conversor online) para reduzir o tamanho.' },
        ]}
        relatedLinks={[
          { href: '/pt/transcribe-mp3-to-text', label: 'MP3 em texto' },
          { href: '/pt/transcribe-audio-to-text', label: 'Áudio em texto' },
          { href: '/pt', label: 'Todos os formatos' },
        ]}
      />
    </>
  )
}
