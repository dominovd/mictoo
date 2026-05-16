import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'Transcripción IA de Audio y Vídeo a Texto, Gratis — Mictoo',
  description: 'Convierte audio y vídeo a texto gratis. Sin registro. Soporta MP3, MP4, WAV y más de 50 idiomas. Basado en IA.',
  alternates: {
    canonical: 'https://mictoo.com/es',
    languages: {
      'en': 'https://mictoo.com',
      'fr': 'https://mictoo.com/fr',
      'de': 'https://mictoo.com/de',
      'es': 'https://mictoo.com/es',
      'ru': 'https://mictoo.com/ru',
      'it': 'https://mictoo.com/it',
      'pt': 'https://mictoo.com/pt',
      'pl': 'https://mictoo.com/pl',
      'x-default': 'https://mictoo.com',
    },
  },
  openGraph: {
    title: 'Mictoo — Transcripción IA de Audio y Vídeo Gratuita',
    description: 'Sube un archivo de audio o vídeo y obtén la transcripción en segundos.',
    url: 'https://mictoo.com/es',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630, alt: 'Mictoo — Transcripción de Audio y Vídeo Gratuita' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mictoo — Transcripción Gratuita con IA',
    description: 'Sube un archivo de audio o vídeo y obtén la transcripción en segundos.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function SpanishPage() {
  return (
    <LandingLayout
      badge="IA · Gratis · Sin registro · 50+ idiomas"
      h1={<>Transcribir Audio y Vídeo a Texto<br /><span className="text-brand-600">con IA, Gratis y Online</span></>}
      subtitle="Sube cualquier archivo de audio o vídeo y obtén una transcripción IA precisa en segundos. Sin cuenta, sin suscripción."
      defaultLanguage="es"
      features={[
        {
          icon: '🎙️',
          title: 'Todos los formatos',
          desc: 'MP3, MP4, WAV, M4A, OGG, WEBM, FLAC. Hasta 25 MB.',
        },
        {
          icon: '🇪🇸',
          title: 'Español y 50+ idiomas',
          desc: 'Detección automática del idioma. Funciona para español, inglés, francés, alemán y muchos más.',
        },
        {
          icon: '📥',
          title: 'Descarga en .txt o .srt',
          desc: 'Edita la transcripción en el navegador y descárgala como texto o subtítulos.',
        },
      ]}
      faq={[
        {
          q: '¿Cómo transcribir audio a texto gratis?',
          a: 'Sube tu archivo de audio arriba. Mictoo lo transcribe automáticamente con Whisper de OpenAI y muestra el texto en segundos.',
        },
        {
          q: '¿Funciona bien para el español?',
          a: 'Sí. Whisper, el modelo de OpenAI sobre el que se basa Mictoo, ha sido entrenado con miles de horas de audio en español y ofrece una alta precisión.',
        },
        {
          q: '¿Se guardan mis archivos?',
          a: 'No. Tus archivos nunca se almacenan en nuestros servidores. Se procesan al instante y se eliminan.',
        },
      ]}
      relatedLinks={[
        { href: '/', label: 'English' },
        { href: '/fr', label: 'Français' },
        { href: '/de', label: 'Deutsch' },
        { href: '/ru', label: 'Русский' },
      ]}
    />
  )
}
