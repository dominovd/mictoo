import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/m4a-to-text',
  'fr': 'https://mictoo.com/fr/m4a-to-text',
  'de': 'https://mictoo.com/de/m4a-to-text',
  'es': 'https://mictoo.com/es/m4a-to-text',
  'ru': 'https://mictoo.com/ru/m4a-to-text',
  'it': 'https://mictoo.com/it/m4a-to-text',
  'pt': 'https://mictoo.com/pt/m4a-to-text',
  'pl': 'https://mictoo.com/pl/m4a-to-text',
  'x-default': 'https://mictoo.com/m4a-to-text',
}

export const metadata = {
  title: 'M4A a texto — Transcripción de M4A gratis online | Mictoo',
  description: 'Convierte archivos de audio M4A a texto gratis. Sube cualquier archivo M4A — notas de voz del iPhone, grabaciones, podcasts — y obtén la transcripción al instante. Sin registro.',
  alternates: { canonical: 'https://mictoo.com/es/m4a-to-text', languages: LANGS },
}

export default function EsM4AToTextPage() {
  return (
    <LandingLayout
      badge="M4A · iPhone · Gratis · Instantáneo"
      h1={<>M4A a texto<br /><span className="text-brand-600">Transcripción de M4A gratis online</span></>}
      subtitle="Convierte archivos de audio M4A a texto al instante. Ideal para notas de voz del iPhone, grabaciones de voz y archivos de podcast. Sin cuenta."
      defaultLanguage="es"
      features={[
        { icon: '📱', title: 'Notas de voz del iPhone', desc: 'M4A es el formato por defecto para las notas de voz y grabaciones del iPhone. Súbelo directamente y obtén la transcripción en segundos.' },
        { icon: '🎵', title: 'Cualquier archivo M4A', desc: 'Archivos M4A de cualquier origen — iPhone, Mac, grabadoras digitales, apps de podcasting — totalmente soportados.' },
        { icon: '📄', title: 'Exportar como texto o SRT', desc: 'Descarga la transcripción como .txt simple o .srt con marcas de tiempo.' },
      ]}
      faq={[
        { q: '¿Cómo convierto M4A a texto?', a: 'Sube tu archivo M4A con la herramienta de arriba. La transcripción se genera automáticamente y se muestra en segundos.' },
        { q: '¿Puedo transcribir notas de voz del iPhone?', a: 'Sí. Las notas de voz del iPhone se guardan como M4A. Sube el archivo directamente desde el iPhone o tras pasarlo al ordenador.' },
        { q: '¿M4A a texto es gratis?', a: 'Sí, completamente gratis. Sin cuenta, sin suscripción. Solo sube y transcribe.' },
        { q: '¿Cuál es el tamaño máximo del M4A?', a: 'Hasta 25 MB. La mayoría de grabaciones de voz y clips cortos caben con margen.' },
        { q: '¿Qué otros formatos de audio se soportan?', a: 'Además de M4A, Mictoo soporta MP3, MP4, WAV, OGG, WEBM y FLAC.' },
      ]}
      relatedLinks={[
        { href: '/es/wav-to-text', label: 'WAV a texto' },
        { href: '/es/transcribe-mp3-to-text', label: 'MP3 a texto' },
        { href: '/es', label: 'Todos los formatos' },
      ]}
    />
  )
}
