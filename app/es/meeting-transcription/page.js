import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/meeting-transcription',
  'fr': 'https://mictoo.com/fr/meeting-transcription',
  'de': 'https://mictoo.com/de/meeting-transcription',
  'es': 'https://mictoo.com/es/meeting-transcription',
  'ru': 'https://mictoo.com/ru/meeting-transcription',
  'it': 'https://mictoo.com/it/meeting-transcription',
  'pt': 'https://mictoo.com/pt/meeting-transcription',
  'x-default': 'https://mictoo.com/meeting-transcription',
}

export const metadata = {
  title: 'Transcripción de reuniones — Acta IA gratuita | Mictoo',
  description: 'Transcribe reuniones, llamadas y sesiones de Zoom/Teams a texto gratis. Sin registro. Edita en el navegador, descarga como .txt o .srt.',
  alternates: { canonical: 'https://mictoo.com/es/meeting-transcription', languages: LANGS },
}

export default function EsMeetingPage() {
  return (
    <LandingLayout
      badge="Reuniones · Llamadas · Gratis"
      h1={<>Transcripción de reuniones<br /><span className="text-brand-600">Acta IA gratuita</span></>}
      subtitle="Convierte grabaciones de reuniones, conferencias telefónicas y sesiones de Zoom/Teams en texto buscable. Sin registro. Edita en el navegador y descarga como .txt o .srt."
      defaultLanguage="es"
      features={[
        { icon: '🏢', title: 'Reuniones y llamadas', desc: 'Funciona con Zoom, Microsoft Teams, Google Meet y cualquier grabación local. MP3, MP4, M4A, WAV, WEBM.' },
        { icon: '🔍', title: 'Notas buscables', desc: 'Obtén una transcripción completa para buscar, compartir y convertir en acciones, decisiones y seguimientos.' },
        { icon: '🔒', title: 'Privacidad por diseño', desc: 'Los archivos se procesan y eliminan al instante. Nunca almacenamos tu audio ni la transcripción de la reunión.' },
      ]}
      faq={[
        { q: '¿Cómo transcribir una grabación de reunión?', a: 'Exporta tu grabación como MP3, MP4, M4A o WAV. Súbela arriba — la transcripción se genera en segundos y está lista para copiar o descargar.' },
        { q: '¿Funciona con Zoom y Microsoft Teams?', a: 'Sí. Zoom guarda como MP4 (vídeo) o M4A (solo audio). Teams guarda como MP4. Ambos funcionan directamente con Mictoo — solo sube el archivo.' },
        { q: '¿Puedo obtener etiquetas de hablante (Anfitrión, Invitado 1, Invitado 2)?', a: 'Mictoo devuelve una transcripción completa sin etiquetas automáticas en la versión gratuita. Puedes añadir etiquetas manualmente en el editor del navegador antes de descargar.' },
        { q: '¿Qué precisión tiene para reuniones?', a: 'Para reuniones con un hablante a la vez y audio claro, la precisión suele superar el 95 %. Varios hablantes simultáneos o mucho ruido de fondo pueden reducirla.' },
        { q: '¿Cuál es la duración máxima?', a: 'Hasta 25 MB por archivo (≈25 minutos a 128 kbps). Para reuniones más largas, exporta a un bitrate menor o divide en segmentos.' },
      ]}
      relatedLinks={[
        { href: '/es/zoom-transcription', label: 'Transcripción de Zoom' },
        { href: '/es/business-transcription', label: 'Transcripción profesional' },
        { href: '/es/interview-transcription', label: 'Transcripción de entrevistas' },
        { href: '/es', label: 'Todos los formatos' },
      ]}
    />
  )
}
