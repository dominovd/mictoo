import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/google-meet-transcription',
  'fr': 'https://mictoo.com/fr/google-meet-transcription',
  'de': 'https://mictoo.com/de/google-meet-transcription',
  'es': 'https://mictoo.com/es/google-meet-transcription',
  'ru': 'https://mictoo.com/ru/google-meet-transcription',
  'it': 'https://mictoo.com/it/google-meet-transcription',
  'pt': 'https://mictoo.com/pt/google-meet-transcription',
  'pl': 'https://mictoo.com/pl/google-meet-transcription',
  'ja': 'https://mictoo.com/ja/google-meet-transcription',
  'x-default': 'https://mictoo.com/google-meet-transcription',
}

export const metadata = {
  title: 'Transcripción de Google Meet — Transcribe grabaciones de Meet gratis | Mictoo',
  description: 'Transcribe grabaciones de Google Meet a texto gratis. Funciona con MP4 exportados desde Google Drive. Sin registro, sin instalación.',
  alternates: { canonical: 'https://mictoo.com/es/google-meet-transcription', languages: LANGS },
}

export default function EsGoogleMeetPage() {
  return (
    <LandingLayout
      badge="Google Meet · MP4 · Gratis"
      h1={<>Transcripción de Google Meet<br /><span className="text-brand-600">Convierte grabaciones de Meet en texto</span></>}
      subtitle="Sube tu MP4 exportado desde Google Meet y obtén una transcripción limpia en segundos. Gratis, sin registro. Complementa los subtítulos en directo de Google para tener un acta de reunión pulida."
      defaultLanguage="es"
      features={[
        { icon: '🎬', title: 'Soporte directo de MP4', desc: 'Google Meet exporta las grabaciones a tu Google Drive como MP4. Descarga el archivo y suéltalo en Mictoo — sin conversión ni extracción.' },
        { icon: '🧾', title: 'Más limpio que los subtítulos en directo', desc: 'Los subtítulos en directo de Google captan lo esencial pero omiten puntuación y nombres. Mictoo produce una transcripción pulida lista para pegar en Docs, Notion o un email de resumen.' },
        { icon: '🔒', title: 'Privado', desc: 'Los archivos se procesan y eliminan al instante. Nunca almacenamos el audio de la reunión ni la transcripción.' },
      ]}
      faq={[
        { q: '¿Cómo descargo una grabación de Google Meet?', a: 'Abre Google Drive → Mi unidad → Meet Recordings (carpeta creada automáticamente). Busca tu reunión, haz clic en ⋮ → Descargar. El archivo es un MP4 — suéltalo en Mictoo tal cual.' },
        { q: '¿Por qué usar Mictoo si Google Meet ya tiene subtítulos en vivo?', a: 'Los subtítulos en directo son útiles durante la reunión, pero no se guardan por defecto y carecen de puntuación y mayúsculas. Mictoo te da una transcripción pulida y editable, lista para compartir o reutilizar.' },
        { q: '¿Puedo obtener etiquetas de hablantes (Anfitrión, Invitado 1, etc.)?', a: 'No automáticamente en el plan gratuito. La transcripción es un único flujo de texto — las etiquetas de hablante pueden añadirse manualmente en el editor del navegador.' },
        { q: '¿Cuál es la duración máxima de la grabación?', a: 'Hasta 25 MB por archivo. Un MP4 de Google Meet en calidad por defecto ocupa unos 50 MB por 30 minutos; considera extraer la pista de audio (M4A) o comprimir el vídeo para encajar dentro del límite.' },
        { q: '¿Las funciones "Tomar notas por mí" de Google son lo mismo?', a: 'No — la función "Tomar notas por mí" de Workspace genera un resumen IA, no una transcripción palabra por palabra. Mictoo entrega la transcripción verbatim que luego puedes resumir aparte si lo necesitas.' },
      ]}
      relatedLinks={[
        { href: '/es/zoom-transcription', label: 'Transcripción de Zoom' },
        { href: '/es/meeting-transcription', label: 'Transcripción de reuniones' },
        { href: '/es', label: 'Todos los formatos' },
      ]}
    />
  )
}
