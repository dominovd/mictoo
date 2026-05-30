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
  title: 'WAV a texto — Transcripción de WAV gratis online | Mictoo',
  description: 'Convierte archivos WAV a texto online gratis. Sube cualquier audio WAV y obtén una transcripción precisa en segundos. Sin registro.',
  alternates: { canonical: 'https://mictoo.com/es/wav-to-text', languages: LANGS },

  openGraph: {
    title: "WAV a texto — Transcripción de WAV gratis online | Mictoo",
    description: "Convierte archivos WAV a texto online gratis. Sube cualquier audio WAV y obtén una transcripción precisa en segundos. Sin registro.",
    url: "https://mictoo.com/es/wav-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "WAV a texto — Transcripción de WAV gratis online | Mictoo",
    description: "Convierte archivos WAV a texto online gratis. Sube cualquier audio WAV y obtén una transcripción precisa en segundos. Sin registro.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function EsWavToTextPage() {
  return (
    <LandingLayout
      badge="WAV · Gratis · Instantáneo"
      h1={<>WAV a texto<br /><span className="text-brand-600">Transcripción de WAV gratis online</span></>}
      subtitle="Sube cualquier archivo de audio WAV y obtén una transcripción precisa en segundos. Soporta todas las grabaciones WAV — entrevistas, llamadas, clases, notas de voz. Sin cuenta."
      defaultLanguage="es"
      features={[
        { icon: '🎙️', title: 'Cualquier WAV', desc: 'WAV estándar, PCM, broadcast WAV — cualquier formato WAV hasta 25 MB.' },
        { icon: '⏱️', title: 'Marcas de tiempo incluidas', desc: 'Descarga la transcripción como .txt o como archivo de subtítulos .srt con códigos de tiempo.' },
        { icon: '🌍', title: '50+ idiomas', desc: 'El idioma se detecta automáticamente. Funciona en español, inglés, francés, alemán, ruso y muchos más.' },
      ]}
      faq={[
        { q: '¿Cómo convierto un archivo WAV a texto?', a: 'Sube tu archivo WAV con la herramienta de arriba. Mictoo lo transcribe automáticamente con IA y muestra el texto en segundos.' },
        { q: '¿La conversión de WAV a texto es gratis?', a: 'Sí, completamente gratis. Sin cuenta. Sube tus WAV — sin cuota mensual de minutos, sin registro.' },
        { q: '¿Cuál es el tamaño máximo del WAV?', a: 'Hasta 25 MB. Para grabaciones mayores, convierte primero a MP3 o divide la grabación en segmentos.' },
        { q: '¿Puedo obtener una transcripción con marcas de tiempo desde un WAV?', a: 'Sí. Tras la transcripción, pulsa el botón .srt para descargar un archivo de subtítulos con marcas exactas para cada segmento.' },
        { q: '¿Qué otros formatos de audio se soportan?', a: 'Mictoo también soporta MP3, MP4, M4A, OGG, WEBM y FLAC además de WAV.' },
      ]}
      relatedLinks={[
        { href: '/es/transcribe-mp3-to-text', label: 'MP3 a texto' },
        { href: '/es/transcribe-audio-to-text', label: 'Audio a texto' },
        { href: '/es', label: 'Todos los formatos' },
      ]}
    />
  )
}
