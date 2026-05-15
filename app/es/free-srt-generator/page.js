import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/free-srt-generator',
  'fr': 'https://mictoo.com/fr/free-srt-generator',
  'de': 'https://mictoo.com/de/free-srt-generator',
  'es': 'https://mictoo.com/es/free-srt-generator',
  'ru': 'https://mictoo.com/ru/free-srt-generator',
  'x-default': 'https://mictoo.com/free-srt-generator',
}

export const metadata = {
  title: 'Generador de SRT gratuito — Crear archivos de subtítulos online | Mictoo',
  description: 'Genera archivos SRT a partir de cualquier audio o vídeo gratis. Sube tu archivo, obtén una transcripción con marcas de tiempo y descarga un .srt listo para usar. Sin registro.',
  alternates: { canonical: 'https://mictoo.com/es/free-srt-generator', languages: LANGS },
}

export default function EsSrtGeneratorPage() {
  return (
    <LandingLayout
      badge="SRT · Subtítulos · Gratis"
      h1={<>Generador de SRT gratuito<br /><span className="text-brand-600">Crea archivos de subtítulos online</span></>}
      subtitle="Sube cualquier archivo de audio o vídeo y descarga un SRT listo para usar en segundos. Funciona con YouTube, Premiere Pro, DaVinci Resolve y cualquier editor de vídeo."
      defaultLanguage="es"
      features={[
        { icon: '🎬', title: 'SRT listo para YouTube', desc: 'Sube el archivo .srt directamente a YouTube Studio para añadir subtítulos a tus vídeos. Las marcas de tiempo se sincronizan automáticamente.' },
        { icon: '⏱️', title: 'Timecodes precisos', desc: 'Cada segmento de subtítulo recibe una marca de tiempo HH:MM:SS,ms — el formato estándar que usan todas las herramientas de vídeo profesionales.' },
        { icon: '🌍', title: '50+ idiomas', desc: 'Genera SRT en cualquier idioma — inglés, español, francés, alemán, japonés, y 46 más. El idioma se detecta automáticamente.' },
      ]}
      faq={[
        { q: '¿Qué es un archivo SRT?', a: 'Un archivo SRT (SubRip Subtitle) es un archivo de texto plano con entradas de subtítulos con marcas de tiempo. Cada entrada tiene un número de secuencia, una hora de inicio → fin, y el texto del subtítulo. SRT es el formato de subtítulos más ampliamente compatible.' },
        { q: '¿Cómo generar un SRT a partir de un vídeo?', a: 'Sube tu archivo de vídeo o audio arriba. Mictoo lo transcribe y añade marcas de tiempo a cada segmento. Después de la transcripción, haz clic en el botón .srt para descargar tu archivo de subtítulos.' },
        { q: '¿Cómo añadir subtítulos SRT a un vídeo de YouTube?', a: 'En YouTube Studio, abre tu vídeo y haz clic en Subtítulos. Selecciona Añadir idioma, luego Subir archivo y elige tu .srt. YouTube sincroniza los subtítulos automáticamente.' },
        { q: '¿El SRT funciona en Premiere Pro y DaVinci Resolve?', a: 'Sí. En Premiere Pro: Archivo → Importar → selecciona tu .srt. En DaVinci Resolve: abre la página Edit, ve a Archivo → Importar Subtítulo, y selecciona el .srt.' },
        { q: '¿El generador SRT es realmente gratis?', a: 'Sí, totalmente gratis. Sin cuenta, sin suscripción, sin marcas de agua. Sube tu archivo y descarga el SRT — eso es todo.' },
        { q: '¿Cuál es el tamaño máximo de archivo?', a: 'Hasta 25 MB. Para vídeos más largos, extrae primero la pista de audio para reducir el tamaño, o divide el vídeo en segmentos más cortos.' },
        { q: '¿Puedo generar SRT desde archivos de audio (MP3, WAV)?', a: 'Sí. Mictoo genera SRT a partir de cualquier formato de audio o vídeo: MP3, MP4, WAV, M4A, OGG, WEBM, FLAC.' },
        { q: '¿Puedo editar los subtítulos antes de descargar?', a: 'Sí. Después de la transcripción puedes editar el texto en el navegador antes de descargar. La estructura de timestamps se conserva en el SRT exportado.' },
      ]}
      relatedLinks={[
        { href: '/es/timestamped-transcription', label: 'Transcripción con marcas de tiempo' },
        { href: '/transcribe-video-to-text', label: 'Vídeo a texto' },
        { href: '/transcribe-mp3-to-text', label: 'MP3 a texto' },
        { href: '/es', label: 'Todos los formatos' },
      ]}
    />
  )
}
