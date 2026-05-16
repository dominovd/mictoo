import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/transcribe-mp3-to-text',
  'fr': 'https://mictoo.com/fr/transcribe-mp3-to-text',
  'de': 'https://mictoo.com/de/transcribe-mp3-to-text',
  'es': 'https://mictoo.com/es/transcribe-mp3-to-text',
  'ru': 'https://mictoo.com/ru/transcribe-mp3-to-text',
  'it': 'https://mictoo.com/it/transcribe-mp3-to-text',
  'pt': 'https://mictoo.com/pt/transcribe-mp3-to-text',
  'x-default': 'https://mictoo.com/transcribe-mp3-to-text',
}

export const metadata = {
  title: 'MP3 a texto — Transcripción de MP3 gratis online | Mictoo',
  description: 'Convierte MP3 a texto online gratis. Sube tu archivo MP3 y obtén una transcripción precisa en segundos. IA. Sin registro.',
  alternates: { canonical: 'https://mictoo.com/es/transcribe-mp3-to-text', languages: LANGS },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'MP3 a texto — Mictoo',
  url: 'https://mictoo.com/es/transcribe-mp3-to-text',
  description: 'Conversor de MP3 a texto online gratis con IA.',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}

export default function EsMP3ToTextPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LandingLayout
        badge="Gratis · Sin registro · Instantáneo"
        h1={<>Convertir MP3 a texto<br /><span className="text-brand-600">Online, gratis</span></>}
        subtitle="Sube cualquier archivo MP3 y obtén una transcripción precisa en segundos. Funciona con entrevistas, podcasts, clases, notas de voz y más."
        defaultLanguage="es"
        features={[
          { icon: '🎵', title: 'Cualquier archivo MP3', desc: 'Funciona con grabaciones de voz, episodios de podcast, entrevistas musicales, clases — cualquier MP3 hasta 25 MB.' },
          { icon: '🌍', title: '50+ idiomas', desc: 'Detección automática de idioma. Tu MP3 puede estar en español, inglés, francés, alemán u otros 47 idiomas.' },
          { icon: '📋', title: 'Copiar o descargar', desc: 'Obtén la transcripción como texto editable. Descárgala como .txt o .srt (subtítulos).' },
        ]}
        faq={[
          { q: '¿Cómo convierto un MP3 a texto?', a: 'Sube tu archivo MP3 con la herramienta de arriba. Mictoo lo transcribe automáticamente con IA y muestra el texto en segundos.' },
          { q: '¿La conversión de MP3 a texto es gratis?', a: 'Sí, completamente gratis. Sin cuenta. Solo sube y transcribe.' },
          { q: '¿Cuál es el tamaño máximo del MP3?', a: 'Hasta 25 MB. Para grabaciones más largas, considera comprimir el archivo o dividirlo en segmentos más cortos.' },
          { q: '¿Qué precisión tiene la transcripción de MP3?', a: 'Mictoo usa IA, que normalmente alcanza 95%+ de precisión en grabaciones claras. La calidad varía con mucho ruido de fondo o acentos marcados.' },
          { q: '¿Puedo obtener subtítulos desde un MP3?', a: 'Sí. Tras la transcripción, pulsa el botón .srt para descargar un archivo de subtítulos con marcas de tiempo.' },
        ]}
        relatedLinks={[
          { href: '/es/transcribe-audio-to-text', label: 'Audio a texto' },
          { href: '/es/transcribe-video-to-text', label: 'Vídeo a texto' },
          { href: '/es', label: 'Todos los formatos' },
        ]}
      />
    </>
  )
}
