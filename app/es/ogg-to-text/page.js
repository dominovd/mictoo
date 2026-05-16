import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/ogg-to-text',
  'fr': 'https://mictoo.com/fr/ogg-to-text',
  'de': 'https://mictoo.com/de/ogg-to-text',
  'es': 'https://mictoo.com/es/ogg-to-text',
  'ru': 'https://mictoo.com/ru/ogg-to-text',
  'it': 'https://mictoo.com/it/ogg-to-text',
  'pt': 'https://mictoo.com/pt/ogg-to-text',
  'pl': 'https://mictoo.com/pl/ogg-to-text',
  'x-default': 'https://mictoo.com/ogg-to-text',
}

export const metadata = {
  title: 'OGG a texto — Transcripción de audio OGG gratis online | Mictoo',
  description: 'Convierte archivos de audio OGG a texto gratis online. Sube cualquier grabación OGG Vorbis y obtén una transcripción precisa al instante. Sin registro.',
  alternates: { canonical: 'https://mictoo.com/es/ogg-to-text', languages: LANGS },
}

export default function EsOggToTextPage() {
  return (
    <LandingLayout
      badge="OGG · Vorbis · Gratis · Instantáneo"
      h1={<>OGG a texto<br /><span className="text-brand-600">Transcripción de OGG gratis online</span></>}
      subtitle="Sube cualquier archivo de audio OGG y conviértelo en texto en segundos. Soporta OGG Vorbis y OGG Opus. Sin cuenta."
      defaultLanguage="es"
      features={[
        { icon: '🎙️', title: 'OGG Vorbis y Opus', desc: 'Soporta archivos OGG de cualquier origen — grabadoras de voz, navegadores web, apps de comunicación.' },
        { icon: '🌍', title: '50+ idiomas', desc: 'Idioma detectado automáticamente. Funciona en español, inglés, francés, alemán y más.' },
        { icon: '📄', title: 'Export .txt y .srt', desc: 'Descarga como texto simple o archivo SRT con marcas de tiempo.' },
      ]}
      faq={[
        { q: '¿Cómo convierto OGG a texto?', a: 'Sube tu archivo OGG arriba. La transcripción se genera automáticamente en segundos.' },
        { q: '¿La conversión OGG a texto es gratis?', a: 'Sí, completamente gratis. Sin registro ni cuenta.' },
        { q: '¿Cuál es el tamaño máximo del OGG?', a: 'Hasta 25 MB.' },
        { q: '¿Qué otros formatos de audio se soportan?', a: 'También se soportan MP3, MP4, WAV, M4A, FLAC, WEBM.' },
      ]}
      relatedLinks={[
        { href: '/es/wav-to-text', label: 'WAV a texto' },
        { href: '/es/flac-to-text', label: 'FLAC a texto' },
        { href: '/es', label: 'Todos los formatos' },
      ]}
    />
  )
}
