import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/webinar-transcription',
  'fr': 'https://mictoo.com/fr/webinar-transcription',
  'de': 'https://mictoo.com/de/webinar-transcription',
  'es': 'https://mictoo.com/es/webinar-transcription',
  'ru': 'https://mictoo.com/ru/webinar-transcription',
  'it': 'https://mictoo.com/it/webinar-transcription',
  'x-default': 'https://mictoo.com/webinar-transcription',
}

export const metadata = {
  title: 'Transcripción de webinars — Transcript gratis para grabaciones | Mictoo',
  description: 'Transcribe grabaciones de webinars a texto y subtítulos SRT gratis. Funciona con Zoom, Webex, GoToWebinar y cualquier export MP4 o MP3. Sin registro.',
  alternates: { canonical: 'https://mictoo.com/es/webinar-transcription', languages: LANGS },
}

export default function EsWebinarPage() {
  return (
    <LandingLayout
      badge="Webinars · MP4 · Gratis"
      h1={<>Transcripción de webinars<br /><span className="text-brand-600">Generador gratis de transcript</span></>}
      subtitle="Convierte la grabación de tu webinar en una transcripción de texto buscable o en un archivo de subtítulos SRT. Funciona con Zoom, Webex, GoToWebinar y cualquier export MP4/MP3."
      defaultLanguage="es"
      features={[
        { icon: '🎥', title: 'Cualquier export de plataforma', desc: 'Zoom, Webex, GoToWebinar, Demio, Livestorm — todas exportan en MP4 o M4A. Sube tu archivo directamente, sin conversión.' },
        { icon: '📝', title: 'Reutiliza tu webinar', desc: 'Convierte un webinar en un post de blog, mensajes para redes, una newsletter y un documento de seguimiento para los asistentes.' },
        { icon: '📺', title: 'SRT para la repetición on-demand', desc: 'Descarga el archivo .srt y úsalo como subtítulos cuando publiques la repetición en YouTube, Vimeo o tu sitio web.' },
      ]}
      faq={[
        { q: '¿Cómo descargo la grabación de mi webinar en Zoom o Webex?', a: 'En Zoom: portal web → Grabaciones → clic en el webinar → Descargar. En Webex: abre la grabación en Mis Grabaciones → Descargar. Ambos exportan en MP4 por defecto.' },
        { q: '¿Puedo obtener una transcripción mientras el webinar está en directo?', a: 'Mictoo trabaja sobre archivos grabados, no sobre streams en vivo. Para subtítulos en tiempo real usa la función de live captions de tu plataforma de webinar y luego sube la grabación para una transcripción pulida.' },
        { q: '¿Qué pasa con varios oradores y sesiones de preguntas?', a: 'Mictoo genera una única transcripción con todo lo hablado. Las etiquetas de orador (Anfitrión, Panelista 1, Audiencia) pueden añadirse manualmente en el editor del navegador antes de descargar.' },
        { q: '¿Cuál es la duración máxima del webinar?', a: 'Hasta 25 MB por archivo. Un webinar de 60 minutos en audio mono a 64 kbps cabe sin problema; exporta a menor bitrate o extrae el audio M4A para sesiones más largas.' },
        { q: '¿La transcripción es precisa con términos técnicos o de sector?', a: 'La precisión es alta con audio claro. Marcas, siglas y terminología inusual a veces se escriben mal — rápido de corregir en el editor del navegador antes de exportar.' },
      ]}
      relatedLinks={[
        { href: '/es/meeting-transcription', label: 'Transcripción de reuniones' },
        { href: '/es/zoom-transcription', label: 'Transcripción de Zoom' },
        { href: '/es/free-srt-generator', label: 'Generador SRT' },
        { href: '/es', label: 'Todos los formatos' },
      ]}
    />
  )
}
