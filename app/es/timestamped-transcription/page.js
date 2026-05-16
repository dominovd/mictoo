import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/timestamped-transcription',
  'fr': 'https://mictoo.com/fr/timestamped-transcription',
  'de': 'https://mictoo.com/de/timestamped-transcription',
  'es': 'https://mictoo.com/es/timestamped-transcription',
  'ru': 'https://mictoo.com/ru/timestamped-transcription',
  'it': 'https://mictoo.com/it/timestamped-transcription',
  'pt': 'https://mictoo.com/pt/timestamped-transcription',
  'x-default': 'https://mictoo.com/timestamped-transcription',
}

export const metadata = {
  title: 'Transcripción con marcas de tiempo — Generador gratuito | Mictoo',
  description: 'Genera transcripciones con marcas de tiempo gratis. Sube audio o vídeo y descarga un archivo SRT con timecodes exactos. Sin registro.',
  alternates: { canonical: 'https://mictoo.com/es/timestamped-transcription', languages: LANGS },
}

export default function EsTimestampedPage() {
  return (
    <LandingLayout
      badge="Timecodes · SRT · Gratis"
      h1={<>Transcripción con marcas de tiempo<br /><span className="text-brand-600">Generador gratuito con timecodes</span></>}
      subtitle="Sube cualquier archivo de audio o vídeo y obtén una transcripción con marcas de tiempo exactas. Descarga como SRT — listo para YouTube, editores de vídeo y herramientas de subtitulado. Sin registro."
      defaultLanguage="es"
      features={[
        { icon: '⏱️', title: 'Timecodes automáticos', desc: 'Cada segmento recibe una marca de tiempo precisa de inicio y fin — generada automáticamente a partir de tu audio.' },
        { icon: '📄', title: 'Descarga como .srt', desc: 'Exporta tu transcripción con marcas de tiempo como archivo de subtítulos SRT. Súbelo directamente a YouTube, Premiere, DaVinci o cualquier herramienta de subtitulado.' },
        { icon: '✏️', title: 'Texto editable', desc: 'Revisa y edita la transcripción en texto plano en tu navegador antes de descargar. Sin cuenta.' },
      ]}
      faq={[
        { q: '¿Qué es una transcripción con marcas de tiempo?', a: 'Una transcripción con marcas de tiempo (o transcripción con timecodes) es una versión textual de un audio o vídeo donde cada línea incluye la hora exacta en la que se pronunció — por ejemplo, «00:01:23 → Hola, bienvenidos al programa». Esto permite sincronizar el texto con el medio original.' },
        { q: '¿Cómo crear una transcripción con timecodes gratis?', a: 'Sube tu archivo de audio o vídeo con la herramienta de arriba. Mictoo genera automáticamente una transcripción con marcas de tiempo y te permite descargarla como SRT o texto plano con timestamps.' },
        { q: '¿Qué es un archivo SRT?', a: 'SRT (SubRip Subtitle) es un formato estándar de archivo de subtítulos que contiene segmentos de texto con marcas de tiempo. SRT es compatible con YouTube, Netflix, Premiere Pro, Final Cut, DaVinci Resolve y la mayoría de plataformas y editores de vídeo.' },
        { q: '¿Puedo usar el SRT para los subtítulos de YouTube?', a: 'Sí. Después de descargar el .srt, ve a YouTube Studio → Subtítulos → Añadir idioma → Subir archivo. Tus subtítulos con timecodes se sincronizarán automáticamente con el vídeo.' },
        { q: '¿Cuál es la precisión de los timestamps?', a: 'Los timestamps se generan a nivel de segmento (normalmente cada 5–15 segundos). La precisión es alta para audio claro. Voces solapadas o ruido de fondo pueden afectar la precisión.' },
        { q: '¿Diferencia entre transcripción y transcripción con marcas de tiempo?', a: 'Una transcripción simple es solo la versión textual del audio. Una transcripción con timecodes añade marcas de tiempo para que cada sección pueda asociarse a un momento concreto de la grabación — esencial para subtítulos y edición.' },
        { q: '¿Qué formatos son compatibles?', a: 'MP3, MP4, WAV, M4A, OGG, WEBM, FLAC. Cualquier archivo de audio o vídeo de hasta 25 MB.' },
      ]}
      relatedLinks={[
        { href: '/es/free-srt-generator', label: 'Generador de SRT' },
        { href: '/transcribe-video-to-text', label: 'Vídeo a texto' },
        { href: '/transcribe-audio-to-text', label: 'Audio a texto' },
        { href: '/es', label: 'Todos los formatos' },
      ]}
    />
  )
}
