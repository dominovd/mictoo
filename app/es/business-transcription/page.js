import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/business-transcription',
  'fr': 'https://mictoo.com/fr/business-transcription',
  'de': 'https://mictoo.com/de/business-transcription',
  'es': 'https://mictoo.com/es/business-transcription',
  'ru': 'https://mictoo.com/ru/business-transcription',
  'it': 'https://mictoo.com/it/business-transcription',
  'pt': 'https://mictoo.com/pt/business-transcription',
  'pl': 'https://mictoo.com/pl/business-transcription',
  'ja': 'https://mictoo.com/ja/business-transcription',
  'x-default': 'https://mictoo.com/business-transcription',
}

export const metadata = {
  title: 'Transcripción profesional — Reuniones, llamadas y entrevistas | Mictoo',
  description: 'Transcribe reuniones de negocio, llamadas de ventas, entrevistas y conferencias gratis. Instantáneo, preciso, sin registro. Descarga como texto o SRT.',
  alternates: { canonical: 'https://mictoo.com/es/business-transcription', languages: LANGS },
}

export default function EsBusinessPage() {
  return (
    <LandingLayout
      badge="Reuniones · Llamadas · Entrevistas · Gratis"
      h1={<>Transcripción profesional<br /><span className="text-brand-600">Reuniones y llamadas a texto</span></>}
      subtitle="Convierte cualquier reunión grabada, llamada de ventas, entrevista o presentación en un documento de texto buscable en segundos. Sin cuenta, sin suscripción."
      defaultLanguage="es"
      features={[
        { icon: '📞', title: 'Ventas y llamadas con clientes', desc: 'Transcribe llamadas de ventas, entrevistas con clientes y sesiones de descubrimiento. Repasa los puntos clave y compromisos sin volver a escuchar.' },
        { icon: '📊', title: 'Reuniones y dailies', desc: 'Convierte grabaciones de Zoom, Google Meet y Teams en texto. Comparte notas de reunión sin pedir que todos vean el vídeo.' },
        { icon: '🔐', title: 'Procesamiento confidencial', desc: 'Las grabaciones se procesan al instante y nunca se almacenan. Tus conversaciones de negocio se mantienen confidenciales.' },
      ]}
      faq={[
        { q: '¿Cómo transcribir una grabación de reunión?', a: 'Exporta tu reunión como MP4 o MP3 desde Zoom, Google Meet o Teams. Súbela aquí y obtén la transcripción completa en segundos.' },
        { q: '¿Puedo transcribir una grabación de Zoom gratis?', a: 'Sí. Descarga la grabación localmente (MP4 o M4A) y súbela a Mictoo. La transcripción se genera al instante, sin coste.' },
        { q: '¿Están seguros mis datos de negocio?', a: 'Sí. Los archivos se procesan en tiempo real y se eliminan al instante. No guardamos nada en nuestros servidores. Nunca entrenamos modelos con tus datos.' },
        { q: '¿Cómo transcribir una llamada de ventas?', a: 'Exporta la llamada desde tu CRM o herramienta de grabación como MP3 o WAV, súbela arriba y descarga la transcripción como .txt.' },
        { q: '¿Se admiten varios hablantes?', a: 'La transcripción captura todas las palabras en un único bloque de texto. La diarización (etiquetar quién dijo qué) requiere un servicio profesional de transcripción.' },
        { q: '¿Qué plataformas de reunión son compatibles?', a: 'Cualquier plataforma que permita descargar la grabación: Zoom, Google Meet, Microsoft Teams, Webex, Riverside, Loom y otras. Exporta como MP4, MP3, M4A o WAV.' },
        { q: '¿Puedo transcribir un podcast o webinar?', a: 'Sí. Los episodios de podcast, webinars y charlas de conferencia se transcriben muy bien. Sube el archivo de audio y obtén la transcripción en segundos.' },
      ]}
      relatedLinks={[
        { href: '/transcribe-audio-to-text', label: 'Audio a texto' },
        { href: '/timestamped-transcription', label: 'Transcripción con marcas de tiempo' },
        { href: '/transcribe-video-to-text', label: 'Vídeo a texto' },
        { href: '/es', label: 'Todos los formatos' },
      ]}
    />
  )
}
