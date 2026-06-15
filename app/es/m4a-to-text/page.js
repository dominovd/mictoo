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
  'ja': 'https://mictoo.com/ja/m4a-to-text',
  'ko': 'https://mictoo.com/ko/m4a-to-text',
  'x-default': 'https://mictoo.com/m4a-to-text',
}

export const metadata = {
  title: 'M4A a texto — Transcripción de M4A gratis online | Mictoo',
  description: 'Convierte archivos de audio M4A a texto gratis. Sube cualquier archivo M4A — notas de voz del iPhone, grabaciones, podcasts — y obtén la transcripción al instante. Sin registro.',
  alternates: { canonical: 'https://mictoo.com/es/m4a-to-text', languages: LANGS },

  openGraph: {
    title: "M4A a texto — Transcripción de M4A gratis online | Mictoo",
    description: "Convierte archivos de audio M4A a texto gratis. Sube cualquier archivo M4A — notas de voz del iPhone, grabaciones, podcasts — y obtén la transcripción al instante. Sin registro.",
    url: "https://mictoo.com/es/m4a-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "M4A a texto — Transcripción de M4A gratis online | Mictoo",
    description: "Convierte archivos de audio M4A a texto gratis. Sube cualquier archivo M4A — notas de voz del iPhone, grabaciones, podcasts — y obtén la transcripción al instante. Sin registro.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function EsM4AToTextPage() {
  return (
    <LandingLayout
      badge="M4A · iPhone · Gratis · Instantáneo"
      h1={<>M4A a texto<br /><span className="text-brand-600">Transcripción de M4A gratis online</span></>}
      subtitle="Convierte archivos de audio M4A a texto al instante. Ideal para notas de voz del iPhone, grabaciones de voz y archivos de podcast. Sin cuenta."
      defaultLanguage="es"
      valueBlock={
        <>
          <p>M4A es el contenedor habitual de iPhone, Voice Memos, GarageBand, Logic y muchas apps de grabación. Suele guardar audio AAC o ALAC.</p>
          <p>Mictoo transcribe M4A directamente, lo que evita convertir notas de voz y grabaciones móviles antes de obtener texto.</p>
        </>
      }
      howItWorks={[
        { title: 'Sube tu M4A', desc: 'Añade una nota de voz, entrevista o exportación de audio de Apple.' },
        { title: 'Se procesa el audio', desc: 'Mictoo lee el contenedor y genera una transcripción editable.' },
        { title: 'Revisa y descarga', desc: 'Corrige detalles y exporta el texto o subtítulos.' },
      ]}
      whyUse={{
        title: 'Por qué Mictoo para M4A',
        bullets: [
          { title: 'Perfecto para Voice Memos', desc: 'Convierte grabaciones de iPhone en texto sin pasos extra.' },
          { title: 'Archivos más pequeños que WAV', desc: 'M4A suele ser práctico para subir entrevistas y notas largas.' },
          { title: 'Compatible con variantes comunes', desc: 'Funciona con fuentes móviles, podcasts y exportaciones de apps.' },
          { title: 'No destructivo', desc: 'Puedes conservar el audio original y trabajar solo con la transcripción.' },
        ],
      }}
      useCases={{
        title: 'Cuándo transcribir M4A',
        items: [
          { title: 'Notas de voz de iPhone', desc: 'Convierte ideas, entrevistas y recordatorios en texto editable.' },
          { title: 'GarageBand o Logic', desc: 'Transcribe borradores, podcasts y sesiones exportadas.' },
          { title: 'Llamadas grabadas', desc: 'Obtén notas de conversaciones guardadas como audio móvil.' },
          { title: 'Material de estudio', desc: 'Convierte clases o audiolibros personales en notas.' },
        ],
      }}
      proTips={{
        title: 'Consejos para M4A',
        tips: [
          { title: 'Recorta silencio largo', desc: 'Los archivos suben y se revisan mejor sin minutos vacíos.' },
          { title: 'No uses Lossless por costumbre', desc: 'Para voz clara, AAC normal suele bastar para transcripción.' },
          { title: 'Selecciona idioma si hay mezcla', desc: 'En audios cortos o bilingües, fijar el idioma ayuda.' },
        ],
      }}
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
