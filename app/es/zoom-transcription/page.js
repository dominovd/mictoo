import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/zoom-transcription',
  'fr': 'https://mictoo.com/fr/zoom-transcription',
  'de': 'https://mictoo.com/de/zoom-transcription',
  'es': 'https://mictoo.com/es/zoom-transcription',
  'ru': 'https://mictoo.com/ru/zoom-transcription',
  'it': 'https://mictoo.com/it/zoom-transcription',
  'pt': 'https://mictoo.com/pt/zoom-transcription',
  'pl': 'https://mictoo.com/pl/zoom-transcription',
  'x-default': 'https://mictoo.com/zoom-transcription',
}

export const metadata = {
  title: 'Transcripción de Zoom — Transcribe grabaciones de Zoom gratis | Mictoo',
  description: 'Transcribe grabaciones de reuniones de Zoom a texto gratis. Funciona con MP4 y M4A desde Zoom Cloud o Local Recording. Sin registro.',
  alternates: { canonical: 'https://mictoo.com/es/zoom-transcription', languages: LANGS },
}

export default function EsZoomPage() {
  return (
    <LandingLayout
      badge="Zoom · MP4 · M4A · Gratis"
      h1={<>Transcripción de Zoom<br /><span className="text-brand-600">Convierte grabaciones Zoom en texto</span></>}
      subtitle="Sube tu grabación de Zoom en MP4 o M4A y obtén una transcripción precisa en segundos. Perfecto para reuniones, webinars y entrevistas."
      defaultLanguage="es"
      features={[
        { icon: '🎬', title: 'Todas las grabaciones de Zoom', desc: 'Tanto las exportaciones de Zoom Cloud Recording (MP4) como las de Local Recording (M4A solo audio) son compatibles. Sube directamente — sin conversión.' },
        { icon: '✏️', title: 'Editable en el navegador', desc: 'Limpia la transcripción, añade nombres de hablantes, corrige nombres propios y descarga como .txt o .srt para el vídeo original.' },
        { icon: '⚡', title: 'Rápido y gratis', desc: 'Una reunión de Zoom de 25 minutos se transcribe normalmente en menos de 30 segundos. 100 % gratis, sin cuenta, sin tarjeta.' },
      ]}
      faq={[
        { q: '¿Cómo descargo mi grabación de Zoom?', a: 'Para Cloud Recording: abre el portal web de Zoom → Recordings → clic en la reunión → Descargar. Para Local Recording: abre Zoom desktop → Configuración → Grabación, los archivos están en la carpeta configurada.' },
        { q: '¿Diferencia entre MP4 y M4A en Zoom?', a: 'MP4 es el vídeo completo (con audio), M4A es solo audio. Ambos funcionan con Mictoo. Si solo necesitas la transcripción, M4A es más pequeño y rápido de subir.' },
        { q: '¿Puedo obtener subtítulos .srt para el vídeo de Zoom?', a: 'Sí. Después de transcribir, Mictoo muestra un botón de descarga .srt. El archivo contiene timestamps sincronizados y se puede subir a Zoom, YouTube Studio, Premiere Pro o DaVinci Resolve.' },
        { q: '¿Cuál es el tamaño máximo de grabación?', a: 'Hasta 25 MB por archivo. La mayoría de MP4 de Zoom de 25 minutos exceden esto — extrae la pista de audio como M4A o comprime el vídeo. Para 30–60 minutos, M4A a 64 kbps suele caber.' },
        { q: '¿Precisión con varios hablantes?', a: 'Alta cuando los hablantes se turnan y no se solapan. Mictoo genera una sola transcripción sin etiquetas — añade Anfitrión/Invitado manualmente en el editor del navegador.' },
      ]}
      relatedLinks={[
        { href: '/es/meeting-transcription', label: 'Transcripción de reuniones' },
        { href: '/transcribe-mp3-to-text', label: 'MP3 a texto' },
        { href: '/transcribe-video-to-text', label: 'Vídeo a texto' },
        { href: '/es', label: 'Todos los formatos' },
      ]}
    />
  )
}
