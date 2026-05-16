import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/transcribe-audio-to-text',
  'fr': 'https://mictoo.com/fr/transcribe-audio-to-text',
  'de': 'https://mictoo.com/de/transcribe-audio-to-text',
  'es': 'https://mictoo.com/es/transcribe-audio-to-text',
  'ru': 'https://mictoo.com/ru/transcribe-audio-to-text',
  'it': 'https://mictoo.com/it/transcribe-audio-to-text',
  'x-default': 'https://mictoo.com/transcribe-audio-to-text',
}

export const metadata = {
  title: 'Audio a texto — Transcripción de audio gratis online | Mictoo',
  description: 'Transcribe audio a texto online gratis. Sube cualquier archivo de audio y obtén una transcripción precisa al instante. 50+ idiomas. IA.',
  alternates: { canonical: 'https://mictoo.com/es/transcribe-audio-to-text', languages: LANGS },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Audio a texto — Mictoo',
  url: 'https://mictoo.com/es/transcribe-audio-to-text',
  description: 'Conversor de audio a texto online gratis. Soporta MP3, WAV, M4A, OGG, FLAC y más.',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}

export default function EsAudioToTextPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LandingLayout
        badge="MP3 · WAV · M4A · FLAC · Gratis"
        h1={<>Audio a texto<br /><span className="text-brand-600">Transcripción IA gratis</span></>}
        subtitle="La forma más rápida de convertir cualquier grabación de audio en texto. Sube tu archivo — sin cuenta, sin suscripción, sin esperas."
        defaultLanguage="es"
        features={[
          { icon: '🎙️', title: 'Todos los formatos de audio', desc: 'MP3, WAV, M4A, OGG, FLAC, WEBM — cualquier archivo de audio hasta 25 MB.' },
          { icon: '🧠', title: 'Precisión IA', desc: 'Nuestra IA está entrenada con cientos de miles de horas de audio multilingüe, ofreciendo precisión líder en la industria.' },
          { icon: '🔒', title: 'Privado y seguro', desc: 'Tu audio nunca se almacena. Los archivos se procesan una vez y se descartan al instante.' },
        ]}
        faq={[
          { q: '¿Cuál es el mejor conversor gratis de audio a texto?', a: 'Mictoo usa IA, uno de los modelos de reconocimiento de voz gratis más precisos disponibles. Soporta 50+ idiomas y no requiere cuenta.' },
          { q: '¿Qué precisión tiene la transcripción de audio?', a: 'Nuestra IA alcanza 95%+ de precisión en grabaciones claras. El ruido de fondo o acentos marcados pueden reducirla un poco.' },
          { q: '¿Qué formatos de audio se soportan?', a: 'MP3, WAV, M4A, OGG, FLAC, WEBM, MPEG. También se aceptan archivos de vídeo (MP4).' },
          { q: '¿Cuánto tarda en transcribir audio?', a: 'Una grabación de 10 minutos suele transcribirse en 15-30 segundos. Sin cola — tu archivo se procesa al instante.' },
          { q: '¿Puedo transcribir una grabación de llamada?', a: 'Sí. Las grabaciones en MP3, WAV o M4A funcionan bien. El audio con varios hablantes se transcribe como un único bloque de texto (las etiquetas de hablante requieren herramienta pro).' },
          { q: '¿Tengo que seleccionar el idioma?', a: 'No — el idioma se detecta automáticamente. Si la detección no es buena, puedes elegir el idioma manualmente en el desplegable.' },
        ]}
        relatedLinks={[
          { href: '/es/transcribe-mp3-to-text', label: 'MP3 a texto' },
          { href: '/es/transcribe-video-to-text', label: 'Vídeo a texto' },
          { href: '/es', label: 'Todos los formatos' },
        ]}
      />
    </>
  )
}
