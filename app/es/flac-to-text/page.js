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
  title: 'FLAC a texto — Transcripción de audio FLAC gratis online | Mictoo',
  description: 'Convierte archivos FLAC a texto gratis online. Sube cualquier grabación FLAC y obtén una transcripción precisa en segundos. Sin registro.',
  alternates: { canonical: 'https://mictoo.com/es/flac-to-text', languages: LANGS },

  openGraph: {
    title: "FLAC a texto — Transcripción de audio FLAC gratis online | Mictoo",
    description: "Convierte archivos FLAC a texto gratis online. Sube cualquier grabación FLAC y obtén una transcripción precisa en segundos. Sin registro.",
    url: "https://mictoo.com/es/flac-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FLAC a texto — Transcripción de audio FLAC gratis online | Mictoo",
    description: "Convierte archivos FLAC a texto gratis online. Sube cualquier grabación FLAC y obtén una transcripción precisa en segundos. Sin registro.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function EsFlacToTextPage() {
  return (
    <LandingLayout
      badge="FLAC · Sin pérdidas · Gratis"
      h1={<>FLAC a texto<br /><span className="text-brand-600">Transcripción de FLAC gratis online</span></>}
      subtitle="Sube cualquier archivo de audio FLAC y conviértelo a texto al instante. La calidad sin pérdidas del FLAC asegura excelente precisión de transcripción. Sin cuenta."
      defaultLanguage="es"
      valueBlock={
        <>
          <p>FLAC comprime audio sin pérdida, por eso aparece en archivos, masters, entrevistas de campo, colecciones musicales y material histórico.</p>
          <p>Mictoo decodifica FLAC directamente y genera una transcripción sin pedirte que conviertas primero a WAV o MP3.</p>
        </>
      }
      howItWorks={[
        { title: 'Sube el FLAC', desc: 'Añade una grabación lossless, entrevista o archivo de audio.' },
        { title: 'Mictoo decodifica la voz', desc: 'El audio se procesa manteniendo la información necesaria para reconocer el habla.' },
        { title: 'Exporta la transcripción', desc: 'Copia el texto o descarga TXT/SRT para archivo, notas o subtítulos.' },
      ]}
      whyUse={{
        title: 'Por qué Mictoo para FLAC',
        bullets: [
          { title: 'Sin pérdida acumulada', desc: 'Evita convertir a formatos con pérdida antes de transcribir.' },
          { title: 'Bueno para archivos', desc: 'FLAC conserva material antiguo o sensible con tamaño razonable.' },
          { title: 'Útil para audio difícil', desc: 'Mantener una fuente limpia ayuda cuando hay ruido, eco o voces bajas.' },
          { title: 'Flujo simple', desc: 'Sube el archivo y trabaja con texto sin preparar versiones intermedias.' },
        ],
      }}
      useCases={{
        title: 'Cuándo transcribir FLAC',
        items: [
          { title: 'Historia oral', desc: 'Convierte entrevistas largas en archivos buscables.' },
          { title: 'Masters y sesiones', desc: 'Extrae texto de material de estudio o grabaciones editadas.' },
          { title: 'Grabaciones de campo', desc: 'Transcribe fuentes conservadas en formato sin pérdida.' },
          { title: 'Archivos familiares', desc: 'Crea texto para memorias, citas y búsqueda.' },
        ],
      }}
      proTips={{
        title: 'Consejos para FLAC',
        tips: [
          { title: 'No conviertas a MP3 si no hace falta', desc: 'Usa el FLAC cuando esté dentro del límite de subida.' },
          { title: 'Divide sesiones largas', desc: 'Los bloques más cortos son más fáciles de revisar y corregir.' },
          { title: 'Conserva el master', desc: 'Haz una copia de trabajo si necesitas reducir tamaño.' },
        ],
      }}
      faq={[
        { q: '¿Cómo convierto un archivo FLAC a texto?', a: 'Sube tu archivo FLAC con la herramienta de arriba. La IA lo transcribe y muestra el texto en segundos.' },
        { q: '¿El audio FLAC se transcribe con más precisión que MP3?', a: 'La calidad sin pérdidas del FLAC puede mejorar marginalmente la precisión en audios de volumen bajo o complejos, frente a formatos muy comprimidos.' },
        { q: '¿La conversión FLAC a texto es gratis?', a: 'Sí, completamente gratis. Sin cuenta ni registro.' },
        { q: '¿Cuál es el tamaño máximo del FLAC?', a: 'Hasta 25 MB. Los archivos FLAC son grandes por su compresión sin pérdidas — considera convertir a un formato con pérdidas si tu archivo supera el límite.' },
      ]}
      relatedLinks={[
        { href: '/es/wav-to-text', label: 'WAV a texto' },
        { href: '/es/transcribe-mp3-to-text', label: 'MP3 a texto' },
        { href: '/es', label: 'Todos los formatos' },
      ]}
    />
  )
}
