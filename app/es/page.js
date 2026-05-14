import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'Transcribir Audio a Texto Gratis — Mictoo',
  description: 'Convierte audio y video a texto gratis. Sin registro. Soporta MP3, MP4, WAV y más de 50 idiomas. Basado en AI.',
  alternates: {
    canonical: 'https://mictoo.com/es',
    languages: {
      'en': 'https://mictoo.com',
      'fr': 'https://mictoo.com/fr',
      'de': 'https://mictoo.com/de',
      'es': 'https://mictoo.com/es',
      'x-default': 'https://mictoo.com',
    },
  },
}

export default function SpanishPage() {
  return (
    <LandingLayout
      badge="Gratis · Sin registro · IA"
      h1={<>Transcribir Audio a Texto<br /><span className="text-brand-600">Gratis y Online</span></>}
      subtitle="Sube cualquier archivo de audio o video y obtén una transcripción precisa en segundos. Sin cuenta, sin suscripción."
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
          a: 'Sube tu archivo de audio arriba. Mictoo lo transcribe automáticamente con IA y muestra el texto en segundos.',
        },
        {
          q: '¿Funciona bien para el español?',
          a: 'Sí. AI ha sido entrenado con miles de horas de audio en español y ofrece una alta precisión.',
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
      ]}
    />
  )
}
