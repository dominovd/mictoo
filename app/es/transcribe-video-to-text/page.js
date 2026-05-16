import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/transcribe-video-to-text',
  'fr': 'https://mictoo.com/fr/transcribe-video-to-text',
  'de': 'https://mictoo.com/de/transcribe-video-to-text',
  'es': 'https://mictoo.com/es/transcribe-video-to-text',
  'ru': 'https://mictoo.com/ru/transcribe-video-to-text',
  'it': 'https://mictoo.com/it/transcribe-video-to-text',
  'pt': 'https://mictoo.com/pt/transcribe-video-to-text',
  'pl': 'https://mictoo.com/pl/transcribe-video-to-text',
  'ja': 'https://mictoo.com/ja/transcribe-video-to-text',
  'x-default': 'https://mictoo.com/transcribe-video-to-text',
}

export const metadata = {
  title: 'Vídeo a texto — Transcripción de vídeo gratis online | Mictoo',
  description: 'Convierte vídeo a texto online gratis. Sube MP4, WEBM o MOV y obtén una transcripción precisa al instante. IA. Sin cuenta.',
  alternates: { canonical: 'https://mictoo.com/es/transcribe-video-to-text', languages: LANGS },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Vídeo a texto — Mictoo',
  url: 'https://mictoo.com/es/transcribe-video-to-text',
  description: 'Conversor de vídeo a texto online gratis. Transcribe MP4, WEBM y otros formatos.',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}

export default function EsVideoToTextPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LandingLayout
        badge="MP4 · WEBM · Gratis · Instantáneo"
        h1={<>Vídeo a texto online<br /><span className="text-brand-600">Transcripción gratis</span></>}
        subtitle="Sube cualquier archivo de vídeo — descargas de YouTube, grabaciones de pantalla, entrevistas, clases — y obtén las palabras habladas como texto en segundos."
        defaultLanguage="es"
        features={[
          { icon: '🎬', title: 'MP4, WEBM y más', desc: 'Soporta MP4, WEBM, MPEG y otros formatos de vídeo. El audio se extrae automáticamente.' },
          { icon: '🎞️', title: 'Subtítulos SRT', desc: 'Descarga un archivo .srt con marcas de tiempo — listo para subirlo a YouTube o cualquier editor de vídeo.' },
          { icon: '⚡', title: 'Resultados al instante', desc: 'Un vídeo de 10 minutos se suele transcribir en menos de 30 segundos. Sin cola, sin esperas.' },
        ]}
        faq={[
          { q: '¿Cómo transcribo un vídeo gratis?', a: 'Sube tu archivo de vídeo con la herramienta de arriba. Mictoo extrae el audio y lo transcribe con IA. La transcripción aparece en segundos.' },
          { q: '¿Puedo obtener subtítulos desde un vídeo?', a: 'Sí. Tras la transcripción, pulsa el botón de descarga .srt para obtener un archivo de subtítulos con marcas de tiempo que puedes subir a YouTube, Premiere o cualquier editor.' },
          { q: '¿Qué formatos de vídeo se soportan?', a: 'MP4, WEBM, MPEG. También se aceptan archivos de audio (MP3, WAV, M4A, OGG, FLAC).' },
          { q: '¿Funciona con vídeos de YouTube?', a: 'Sí — descarga primero tu vídeo de YouTube (con un downloader), luego sube el archivo aquí para transcribirlo.' },
          { q: '¿Hay límite de tamaño?', a: 'Hasta 25 MB. Para vídeos más largos, extrae primero la pista de audio (p. ej. con ffmpeg o un conversor online) para reducir el tamaño.' },
        ]}
        relatedLinks={[
          { href: '/es/transcribe-mp3-to-text', label: 'MP3 a texto' },
          { href: '/es/transcribe-audio-to-text', label: 'Audio a texto' },
          { href: '/es', label: 'Todos los formatos' },
        ]}
      />
    </>
  )
}
