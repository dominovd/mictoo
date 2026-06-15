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
      valueBlock={
        <>
          <p>WAV suele ser audio sin comprimir de estudios, grabadoras, DAWs, entrevistas y archivos. La calidad es alta, pero los archivos pueden ser grandes.</p>
          <p>Mictoo convierte WAV en una transcripción editable y permite exportar texto o subtítulos sin que tengas que escribir la grabación a mano.</p>
        </>
      }
      howItWorks={[
        { title: 'Sube el WAV', desc: 'Añade una entrevista, clase, podcast, bounce de DAW o grabación de campo.' },
        { title: 'La IA transcribe la voz', desc: 'Mictoo procesa el audio y crea texto con marcas de tiempo.' },
        { title: 'Edita y exporta', desc: 'Copia el texto o descarga formatos útiles como TXT o SRT.' },
      ]}
      whyUse={{
        title: 'Por qué Mictoo para WAV',
        bullets: [
          { title: 'Carga directa de WAV', desc: 'Evita convertir grabaciones de estudio o grabadora cuando el archivo cabe.' },
          { title: 'Útil para fuentes profesionales', desc: 'Funciona para entrevistas, podcasts, clases, material de archivo y DAWs.' },
          { title: 'Timestamps para revisión', desc: 'Vuelve al audio original al corregir citas o nombres.' },
          { title: 'Guía para archivos grandes', desc: 'Puedes crear una copia mono ligera si el WAV completo pesa demasiado.' },
        ],
      }}
      useCases={{
        title: 'Cuándo transcribir WAV',
        items: [
          { title: 'Entrevistas', desc: 'Extrae citas y preguntas de grabaciones limpias.' },
          { title: 'Podcasts', desc: 'Crea show notes, captions y contenido reutilizable.' },
          { title: 'Clases y conferencias', desc: 'Convierte sesiones largas en notas buscables.' },
          { title: 'Archivos', desc: 'Haz consultables grabaciones antiguas o institucionales.' },
        ],
      }}
      proTips={{
        title: 'Consejos para WAV',
        tips: [
          { title: 'Usa una copia 16 kHz mono si pesa mucho', desc: 'Para voz, una copia de trabajo más ligera suele ser suficiente.' },
          { title: 'Recorta silencios', desc: 'Reduce tamaño y tiempo de revisión sin tocar el contenido hablado.' },
          { title: 'Conserva el WAV original', desc: 'Mantén el master y usa una versión comprimida solo si necesitas subir más rápido.' },
        ],
      }}
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
