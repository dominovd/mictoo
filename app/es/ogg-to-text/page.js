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
  'ja': 'https://mictoo.com/ja/ogg-to-text',
  'ko': 'https://mictoo.com/ko/ogg-to-text',
  'x-default': 'https://mictoo.com/ogg-to-text',
}

export const metadata = {
  title: 'OGG a texto — Transcripción de audio OGG gratis online | Mictoo',
  description: 'Convierte archivos de audio OGG a texto gratis online. Sube cualquier grabación OGG Vorbis y obtén una transcripción precisa al instante. Sin registro.',
  alternates: { canonical: 'https://mictoo.com/es/ogg-to-text', languages: LANGS },

  openGraph: {
    title: "OGG a texto — Transcripción de audio OGG gratis online | Mictoo",
    description: "Convierte archivos de audio OGG a texto gratis online. Sube cualquier grabación OGG Vorbis y obtén una transcripción precisa al instante. Sin registro.",
    url: "https://mictoo.com/es/ogg-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "OGG a texto — Transcripción de audio OGG gratis online | Mictoo",
    description: "Convierte archivos de audio OGG a texto gratis online. Sube cualquier grabación OGG Vorbis y obtén una transcripción precisa al instante. Sin registro.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function EsOggToTextPage() {
  return (
    <LandingLayout
      badge="OGG · Vorbis · Gratis · Instantáneo"
      h1={<>OGG a texto<br /><span className="text-brand-600">Transcripción de OGG gratis online</span></>}
      subtitle="Sube cualquier archivo de audio OGG y conviértelo en texto en segundos. Soporta OGG Vorbis y OGG Opus. Sin cuenta."
      defaultLanguage="es"
      valueBlock={
        <>
          <p>OGG es un contenedor: puede guardar audio Vorbis, Opus u otras variantes. Es común en mensajes de voz, herramientas open source, exportaciones de Linux y algunas aplicaciones web.</p>
          <p>Mictoo extrae la pista de audio, detecta el códec y genera una transcripción legible con marcas de tiempo, sin obligarte a convertir el archivo primero.</p>
        </>
      }
      howItWorks={[
        { title: 'Sube el archivo OGG', desc: 'Añade un .ogg o .oga de Telegram, un navegador, una grabadora o una herramienta Linux.' },
        { title: 'Mictoo detecta el códec', desc: 'El sistema lee el contenedor y procesa la pista Vorbis u Opus adecuada.' },
        { title: 'Descarga el texto', desc: 'Copia la transcripción o expórtala como TXT/SRT con marcas de tiempo.' },
      ]}
      whyUse={{
        title: 'Por qué usar Mictoo para OGG',
        bullets: [
          { title: 'Soporte para OGG y OGA', desc: 'Útil para archivos que muchas herramientas generales todavía rechazan.' },
          { title: 'Sin conversión previa', desc: 'Evita pasar por MP3 solo para obtener un texto rápido.' },
          { title: 'Timestamps prácticos', desc: 'Vuelve al mensaje o grabación original con referencias temporales claras.' },
          { title: 'Bueno para Opus web', desc: 'Funciona bien con audio de llamadas, navegadores y mensajería.' },
        ],
      }}
      useCases={{
        title: 'Cuándo transcribir un OGG',
        items: [
          { title: 'Mensajes de Telegram', desc: 'Convierte .oga cortos en notas buscables.' },
          { title: 'Grabaciones de Linux', desc: 'Transcribe capturas generadas por herramientas de audio open source.' },
          { title: 'Llamadas WebRTC', desc: 'Recupera el contenido de reuniones o pruebas grabadas en Opus.' },
          { title: 'Archivos antiguos', desc: 'Haz consultables grabaciones OGG sin recodificarlas.' },
        ],
      }}
      proTips={{
        title: 'Consejos para archivos OGG',
        tips: [
          { title: 'Prueba también .oga', desc: 'Muchos mensajes de voz usan esa extensión aunque el flujo sea parecido.' },
          { title: 'Extrae solo el audio si pesa demasiado', desc: 'En grabaciones grandes, subir la pista de voz puede ser más rápido.' },
          { title: 'Fija el idioma en clips cortos', desc: 'La detección automática tiene menos contexto en mensajes de pocos segundos.' },
        ],
      }}
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
