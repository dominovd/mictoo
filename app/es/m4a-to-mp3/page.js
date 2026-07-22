import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/m4a-to-mp3',
  'fr': 'https://mictoo.com/fr/m4a-to-mp3',
  'de': 'https://mictoo.com/de/m4a-to-mp3',
  'es': 'https://mictoo.com/es/m4a-to-mp3',
  'ru': 'https://mictoo.com/ru/m4a-to-mp3',
  'it': 'https://mictoo.com/it/m4a-to-mp3',
  'pt': 'https://mictoo.com/pt/m4a-to-mp3',
  'pl': 'https://mictoo.com/pl/m4a-to-mp3',
  'ja': 'https://mictoo.com/ja/m4a-to-mp3',
  'ko': 'https://mictoo.com/ko/m4a-to-mp3',
  'x-default': 'https://mictoo.com/m4a-to-mp3',
}

export const metadata = {
  title: 'M4A a MP3: Conversor gratuito para audio de Apple | Mictoo',
  description:
    'Convierte notas de voz de iPhone, bounces de GarageBand y archivos M4A del ecosistema de Apple a MP3 universal para anfitriones de podcast, teléfonos Android antiguos y reproductores heredados.',
  alternates: {
    canonical: 'https://mictoo.com/es/m4a-to-mp3',
    languages: LANGS,
  },
  openGraph: {
    title: 'M4A a MP3: Conversor gratuito para audio de Apple | Mictoo',
    description: 'Notas de voz de iPhone y bounces de GarageBand a MP3 universal.',
    url: 'https://mictoo.com/es/m4a-to-mp3',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'M4A a MP3: Conversor gratuito',
    description: 'Notas de voz de iPhone a MP3 universal.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function EsM4aToMp3Page() {
  return (
    <ConverterPageLayout
      locale="es"
      mode="converter" from="m4a" to="mp3" currentHref="/es/m4a-to-mp3"
      badge="M4A → MP3 · Gratis · Audio de Apple"
      h1First="M4A a MP3"
      h1Second="Conversor gratuito para audio del ecosistema de Apple"
      subtitle="Suelta una nota de voz de iPhone, un bounce de GarageBand o una exportación de Apple Podcasts y obtén un MP3 universal para anfitriones de podcast, teléfonos Android antiguos y reproductores heredados."
      outputFormat="MP3" outputQuality="128 kbps" outputAudio="Estéreo"
      stepsTitle="Cómo funciona la conversión de M4A a MP3"
      steps={[
        { icon: 'upload',   title: 'Suelta el M4A',        desc: 'Desde notas de voz, GarageBand, Apple Podcasts. Hasta 25 MB de forma anónima.' },
        { icon: 'waveform', title: 'Decodificamos y codificamos', desc: 'ffmpeg decodifica el AAC dentro del contenedor M4A y lo vuelve a codificar a MP3 de 128 kbps.' },
        { icon: 'download', title: 'Descarga el MP3',    desc: 'Obtén un MP3 compatible con la mayoría de los reproductores y editores de audio actuales.' },
      ]}
      previewInputName="nota-de-voz.m4a"
      previewInputSize="6.2 MB · 00:12:04"
      previewOutputName="nota-de-voz.mp3"
      previewOutputSize="00:12:04 · 128 kbps · 11.5 MB"
      whyTitle="¿Por qué usar Mictoo para M4A a MP3?"
      whyCards={[
        { icon: 'target',   title: 'Amigable con iPhone',        desc: 'Las notas de voz de iPhone en formato .m4a se cargan directamente, no es necesario renombrar.' },
        { icon: 'fileAudio',title: 'MP3 para anfitriones heredados',   desc: 'Algunos anfitriones de podcast y dispositivos Android antiguos aún prefieren MP3 sobre M4A.' },
        { icon: 'lock',     title: 'Archivos eliminados después',    desc: 'El M4A subido se elimina después de la conversión; el MP3 se purga en menos de una hora.' },
        { icon: 'shield',   title: 'Sin marca de agua ni etiqueta',    desc: 'Solo el audio, re-codificado. Sin introducción de marca, sin metadatos inyectados.' },
      ]}
      scenariosTitle="Cuándo es útil M4A a MP3"
      scenarios={[
        { icon: 'headphones', title: 'Nota de voz de iPhone' },
        { icon: 'waveform',   title: 'Bounce de GarageBand' },
        { icon: 'mail',       title: 'Anfitrión de podcast heredado' },
        { icon: 'archive',    title: 'Formato de biblioteca consistente' },
        { icon: 'editPen',    title: 'Importación de DAW antiguos' },
        { icon: 'video',      title: 'Editor de video no Apple' },
      ]}
      tipsTitle="Consejos para una conversión limpia de M4A a MP3"
      tips={[
        'Si tu plataforma acepta M4A, puede que no necesites convertir.',
        'Ambos formatos son con pérdida; la re-codificación añade una pequeña pérdida de calidad.',
        'Los metadatos ID3 e iTunes no se transfieren.',
        'Para transcripción, sube el M4A directamente a /m4a-to-text.',
      ]}
      processTitle="Qué sucede durante la conversión"
      processSteps={['M4A (contenedor MP4)', 'Decodificación AAC', 'Codificación MP3']}
      compareTitle="M4A vs MP3"
      compareRows={[
        { fmt: 'M4A', contains: 'No', size: 'Pequeño (eficiente)', best: 'Ecosistema de Apple, dispositivos modernos' },
        { fmt: 'MP3', contains: 'No', size: 'Pequeño',             best: 'Universal, reproductores heredados, anfitriones antiguos' },
      ]}
      faq={[
        { q: '¿Necesito convertir M4A a MP3?', a: 'Solo si una herramienta o anfitrión específico requiere MP3. La mayoría de los dispositivos modernos (incluidos todos los Android y Windows en 2026) reproducen M4A de forma nativa.' },
        { q: '¿Es gratuito el conversor?', a: 'Sí. Los archivos de hasta 25 MB se pueden convertir sin una cuenta, y la salida no tiene marca de agua.' },
        { q: '¿Perderé calidad?', a: 'M4A y MP3 son ambos con pérdida. La re-codificación añade una pequeña pérdida pero es inaudible para la escucha típica.' },
        { q: '¿Funciona el formato nativo de notas de voz de iPhone?', a: 'Sí. Las notas de voz de iPhone escriben estándar .m4a que se carga directamente.' },
        { q: '¿Se almacenan los archivos?', a: 'No. El M4A subido se elimina después de la conversión; el MP3 se purga en menos de una hora.' },
      ]}
      ctaHeadline="Convierte tu M4A a MP3 ahora"
      ctaSubtitle="Suelta tu nota de voz de iPhone o audio de Apple y obtén un MP3 portátil."
      ctaButton="Elige un archivo M4A"
      moreTools={[
        { href: '/es/aac-to-mp3',  label: 'AAC a MP3' },
        { href: '/es/mp4-to-mp3',  label: 'MP4 a MP3' },
        { href: '/es/mp3-to-m4a',  label: 'MP3 a M4A' },
        { href: '/es/m4a-to-text', label: 'M4A a Texto' },
      ]}
    />
  )
}