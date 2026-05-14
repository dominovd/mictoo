import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/lecture-transcription',
  'fr': 'https://mictoo.com/fr/lecture-transcription',
  'de': 'https://mictoo.com/de/lecture-transcription',
  'es': 'https://mictoo.com/es/lecture-transcription',
  'ru': 'https://mictoo.com/ru/lecture-transcription',
  'x-default': 'https://mictoo.com/lecture-transcription',
}

export const metadata = {
  title: 'Transcripción de clases — Generador gratuito para estudiantes | Mictoo',
  description: 'Transcribe clases y conferencias a texto gratis. Sube la grabación y obtén una transcripción precisa en segundos. Sin registro.',
  alternates: { canonical: 'https://mictoo.com/es/lecture-transcription', languages: LANGS },
}

export default function EsLecturePage() {
  return (
    <LandingLayout
      badge="Estudiantes · Académicos · Gratis"
      h1={<>Transcripción de clases<br /><span className="text-brand-600">Generador gratuito para estudiantes</span></>}
      subtitle="Graba tu clase y sube el archivo aquí para obtener una transcripción completa en segundos. Repasa, estudia y busca contenido sin volver a escuchar. Sin cuenta."
      defaultLanguage="es"
      features={[
        { icon: '🎓', title: 'Para estudiantes', desc: 'Olvídate de tomar apuntes a toda prisa. Graba el audio, súbelo después y obtén un transcript buscable de la clase entera.' },
        { icon: '🔍', title: 'Texto buscable', desc: 'Encuentra al instante cualquier concepto o cita. Busca en todos los apuntes del semestre con Ctrl+F.' },
        { icon: '🌍', title: '50+ idiomas', desc: 'Funciona para clases en español, inglés, francés, alemán, mandarín, japonés y muchos más.' },
      ]}
      faq={[
        { q: '¿Cómo transcribir una clase gratis?', a: 'Graba la clase como MP3, MP4, M4A o WAV con tu móvil o portátil. Sube el archivo arriba y obtén la transcripción en segundos.' },
        { q: '¿Cuál es la mejor app para grabar clases?', a: 'Cualquier grabadora de voz: Notas de Voz del iPhone, grabadora de Android o el micrófono integrado del portátil. Guarda el archivo y súbelo aquí.' },
        { q: '¿Puedo transcribir clases universitarias?', a: 'Sí, siempre que tengas derecho a grabar y transcribir según la normativa de tu institución. Sube el archivo y consigue la transcripción al instante.' },
        { q: '¿Cuánto tarda la transcripción de una clase de 1 hora?', a: 'Con Mictoo, una clase de 1 hora se transcribe normalmente en menos de 2 minutos. Recuerda el límite de 25 MB — para clases largas, baja el bitrate o divide el archivo.' },
        { q: '¿Es precisa la transcripción de clases?', a: 'La precisión suele ser del 90–95 % con audio claro. Las clases técnicas con vocabulario específico pueden requerir correcciones manuales de términos especializados.' },
        { q: '¿Puedo transcribir clases en vídeo?', a: 'Sí. Descarga el vídeo o extrae el audio, luego sube el archivo aquí. Los vídeos MP4 y WEBM también son compatibles.' },
      ]}
      relatedLinks={[
        { href: '/interview-transcription', label: 'Transcripción de entrevistas' },
        { href: '/transcribe-audio-to-text', label: 'Audio a texto' },
        { href: '/timestamped-transcription', label: 'Transcripción con marcas de tiempo' },
        { href: '/es', label: 'Todos los formatos' },
      ]}
    />
  )
}
