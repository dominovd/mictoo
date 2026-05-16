import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/podcast-transcription',
  'fr': 'https://mictoo.com/fr/podcast-transcription',
  'de': 'https://mictoo.com/de/podcast-transcription',
  'es': 'https://mictoo.com/es/podcast-transcription',
  'ru': 'https://mictoo.com/ru/podcast-transcription',
  'it': 'https://mictoo.com/it/podcast-transcription',
  'pt': 'https://mictoo.com/pt/podcast-transcription',
  'pl': 'https://mictoo.com/pl/podcast-transcription',
  'ja': 'https://mictoo.com/ja/podcast-transcription',
  'x-default': 'https://mictoo.com/podcast-transcription',
}

export const metadata = {
  title: 'Transcripción de podcasts — Generador gratuito de transcripciones | Mictoo',
  description: 'Transcribe episodios de podcast a texto gratis. Sube tu archivo de audio y obtén la transcripción al instante. MP3, M4A, WAV. Sin registro.',
  alternates: { canonical: 'https://mictoo.com/es/podcast-transcription', languages: LANGS },
}

export default function EsPodcastPage() {
  return (
    <LandingLayout
      badge="Podcasters · YouTube · Gratis"
      h1={<>Transcripción de podcasts<br /><span className="text-brand-600">Generador gratuito de transcripciones</span></>}
      subtitle="Convierte cualquier episodio de podcast en una transcripción de texto en segundos. Perfecto para show notes, artículos de blog, SEO y accesibilidad. MP3, M4A o WAV — sin cuenta."
      defaultLanguage="es"
      features={[
        { icon: '🎙️', title: 'Todos los formatos de podcast', desc: 'Sube archivos MP3, M4A, WAV, OGG o FLAC. Funciona con todos los exports de hosting de podcasts.' },
        { icon: '📝', title: 'Show notes y blogs', desc: 'Convierte la transcripción en contenido optimizado para SEO, show notes o un archivo consultable.' },
        { icon: '♿', title: 'Accesibilidad', desc: 'Ofrece transcripciones para que tu podcast sea accesible a personas sordas o con dificultades auditivas.' },
      ]}
      faq={[
        { q: '¿Cómo transcribir un episodio de podcast gratis?', a: 'Descarga tu episodio como MP3 o M4A, súbelo arriba y obtén la transcripción completa en segundos.' },
        { q: '¿Puedo transcribir un podcast de Spotify?', a: 'Si tienes acceso al archivo de audio (por ejemplo, tu propio programa), súbelo directamente. Para podcasts de terceros, descarga el episodio con una app que permita escucha sin conexión y luego sube el archivo.' },
        { q: '¿Por qué crear transcripciones de podcast?', a: 'Las transcripciones mejoran el SEO (Google indexa el texto), aumentan la accesibilidad, se reutilizan como artículos o newsletters y permiten a los oyentes escanear el contenido.' },
        { q: '¿Es precisa la transcripción?', a: 'Para podcasts bien grabados con un solo presentador o pareja de voces claras, la precisión suele superar el 95 %. Baja con voces solapadas, acentos fuertes o audio de baja calidad.' },
        { q: '¿Puedo transcribir una entrevista a dos voces?', a: 'Sí. La transcripción captura todas las palabras. Las etiquetas de hablante (Anfitrión/Invitado) se añaden manualmente en el editor del navegador.' },
        { q: '¿Cuál es el tamaño máximo?', a: 'Hasta 25 MB. La mayoría de MP3 a 128 kbps cabe en este límite para 25 minutos. Para episodios más largos, baja el bitrate o divide el archivo.' },
      ]}
      relatedLinks={[
        { href: '/transcribe-mp3-to-text', label: 'MP3 a texto' },
        { href: '/m4a-to-text', label: 'M4A a texto' },
        { href: '/interview-transcription', label: 'Transcripción de entrevistas' },
        { href: '/es', label: 'Todos los formatos' },
      ]}
    />
  )
}
