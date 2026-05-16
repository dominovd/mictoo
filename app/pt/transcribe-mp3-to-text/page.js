import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/transcribe-mp3-to-text',
  'fr': 'https://mictoo.com/fr/transcribe-mp3-to-text',
  'de': 'https://mictoo.com/de/transcribe-mp3-to-text',
  'es': 'https://mictoo.com/es/transcribe-mp3-to-text',
  'ru': 'https://mictoo.com/ru/transcribe-mp3-to-text',
  'it': 'https://mictoo.com/it/transcribe-mp3-to-text',
  'pt': 'https://mictoo.com/pt/transcribe-mp3-to-text',
  'pl': 'https://mictoo.com/pl/transcribe-mp3-to-text',
  'x-default': 'https://mictoo.com/transcribe-mp3-to-text',
}

export const metadata = {
  title: 'MP3 em texto — Transcrição de MP3 grátis online | Mictoo',
  description: 'Converta MP3 em texto online grátis. Envie seu arquivo MP3 e receba uma transcrição precisa em segundos. IA. Sem cadastro.',
  alternates: { canonical: 'https://mictoo.com/pt/transcribe-mp3-to-text', languages: LANGS },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'MP3 em texto — Mictoo',
  url: 'https://mictoo.com/pt/transcribe-mp3-to-text',
  description: 'Conversor de MP3 em texto online grátis com IA.',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}

export default function PtMP3ToTextPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LandingLayout
        badge="Grátis · Sem cadastro · Instantâneo"
        h1={<>Converter MP3 em texto<br /><span className="text-brand-600">Online, grátis</span></>}
        subtitle="Envie qualquer arquivo MP3 e receba uma transcrição em texto precisa em segundos. Funciona com entrevistas, podcasts, aulas, notas de voz e mais."
        defaultLanguage="pt"
        features={[
          { icon: '🎵', title: 'Qualquer MP3', desc: 'Funciona com gravações de voz, episódios de podcast, entrevistas musicais, aulas — qualquer MP3 até 25 MB.' },
          { icon: '🌍', title: '50+ idiomas', desc: 'Detecção automática de idioma. Seu MP3 pode estar em português, inglês, espanhol, francês ou outros 47 idiomas.' },
          { icon: '📋', title: 'Copiar ou baixar', desc: 'Receba a transcrição como texto editável. Baixe como .txt ou .srt (legendas).' },
        ]}
        faq={[
          { q: 'Como converter um MP3 em texto?', a: 'Envie seu arquivo MP3 com a ferramenta acima. O Mictoo o transcreve automaticamente com IA e mostra o texto em segundos.' },
          { q: 'A conversão MP3 em texto é grátis?', a: 'Sim, totalmente grátis. Sem conta. Só envie e transcreva.' },
          { q: 'Qual o tamanho máximo do MP3?', a: 'Até 25 MB. Para gravações mais longas, comprima o arquivo ou divida em segmentos mais curtos.' },
          { q: 'Quão precisa é a transcrição de MP3?', a: 'O Mictoo usa IA, que tipicamente atinge 95%+ de precisão em gravações limpas. A qualidade pode variar com muito ruído de fundo ou sotaques marcantes.' },
          { q: 'Posso obter legendas a partir de um MP3?', a: 'Sim. Após a transcrição, clique no botão .srt para baixar um arquivo de legendas com timestamps.' },
        ]}
        relatedLinks={[
          { href: '/pt/transcribe-audio-to-text', label: 'Áudio em texto' },
          { href: '/pt/transcribe-video-to-text', label: 'Vídeo em texto' },
          { href: '/pt', label: 'Todos os formatos' },
        ]}
      />
    </>
  )
}
