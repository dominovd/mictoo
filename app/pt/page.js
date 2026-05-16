import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'Transcrição IA de Áudio e Vídeo em Texto, Grátis — Mictoo',
  description: 'Transcreva áudio e vídeo em texto grátis online. Sem cadastro. Com IA. Suporta MP3, MP4, WAV e mais de 50 idiomas.',
  alternates: {
    canonical: 'https://mictoo.com/pt',
    languages: {
      'en': 'https://mictoo.com',
      'fr': 'https://mictoo.com/fr',
      'de': 'https://mictoo.com/de',
      'es': 'https://mictoo.com/es',
      'ru': 'https://mictoo.com/ru',
      'it': 'https://mictoo.com/it',
      'pt': 'https://mictoo.com/pt',
      'pl': 'https://mictoo.com/pl',
      'ja': 'https://mictoo.com/ja',
      'x-default': 'https://mictoo.com',
    },
  },
  openGraph: {
    title: 'Mictoo — Transcrição IA de Áudio & Vídeo Grátis',
    description: 'Envie áudio ou vídeo e receba a transcrição em segundos.',
    url: 'https://mictoo.com/pt',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630, alt: 'Mictoo — Transcrição IA de Áudio & Vídeo Grátis' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mictoo — Transcrição IA Grátis',
    description: 'Envie áudio ou vídeo e receba a transcrição em segundos.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function PortuguesePage() {
  return (
    <LandingLayout
      badge="IA · Grátis · Sem cadastro · 50+ idiomas"
      h1={<>Transcrição de áudio e vídeo em texto<br /><span className="text-brand-600">com IA, grátis online</span></>}
      subtitle="Envie qualquer arquivo de áudio ou vídeo e receba uma transcrição IA precisa em segundos. Nenhuma conta necessária."
      defaultLanguage="pt"
      features={[
        {
          icon: '🎙️',
          title: 'Todos os formatos de áudio',
          desc: 'MP3, MP4, WAV, M4A, OGG, WEBM, FLAC. Até 25 MB.',
        },
        {
          icon: '🇧🇷',
          title: 'Português e mais de 50 idiomas',
          desc: 'Detecção automática de idioma. Funciona com português, inglês, espanhol, francês e muitos outros.',
        },
        {
          icon: '📥',
          title: 'Baixe como .txt ou .srt',
          desc: 'Edite a transcrição no navegador e baixe como texto ou legendas.',
        },
      ]}
      faq={[
        {
          q: 'Como converter áudio em texto gratuitamente?',
          a: 'Envie o arquivo de áudio acima. Mictoo o transcreve automaticamente com o Whisper da OpenAI e mostra o texto em segundos.',
        },
        {
          q: 'O reconhecimento de voz funciona bem para português?',
          a: 'Sim. O Whisper, modelo no qual o Mictoo se baseia, foi treinado em milhares de horas de áudio em português e oferece alta precisão.',
        },
        {
          q: 'Meus arquivos ficam salvos no servidor?',
          a: 'Não. Os arquivos são processados instantaneamente e não ficam armazenados em nossos servidores.',
        },
      ]}
      relatedLinks={[
        { href: '/', label: 'English' },
        { href: '/fr', label: 'Français' },
        { href: '/de', label: 'Deutsch' },
        { href: '/es', label: 'Español' },
        { href: '/ru', label: 'Русский' },
        { href: '/it', label: 'Italiano' },
      ]}
    />
  )
}
