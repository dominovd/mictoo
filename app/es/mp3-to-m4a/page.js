import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/mp3-to-m4a',
  'fr': 'https://mictoo.com/fr/mp3-to-m4a',
  'de': 'https://mictoo.com/de/mp3-to-m4a',
  'es': 'https://mictoo.com/es/mp3-to-m4a',
  'ru': 'https://mictoo.com/ru/mp3-to-m4a',
  'it': 'https://mictoo.com/it/mp3-to-m4a',
  'pt': 'https://mictoo.com/pt/mp3-to-m4a',
  'pl': 'https://mictoo.com/pl/mp3-to-m4a',
  'ja': 'https://mictoo.com/ja/mp3-to-m4a',
  'ko': 'https://mictoo.com/ko/mp3-to-m4a',
  'x-default': 'https://mictoo.com/mp3-to-m4a',
}

export const metadata = {
  title: 'MP3 a M4A, convertidor online gratuito | Mictoo',
  description:
    'Convierte MP3 a M4A gratis online. Re-codifica MP3 a AAC dentro de un contenedor M4A para iPhone, iTunes y el ecosistema de Apple. Sin registro, sin marca de agua.',
  alternates: { canonical: 'https://mictoo.com/es/mp3-to-m4a', languages: LANGS },
  openGraph: {
    title: 'MP3 a M4A, convertidor online gratuito | Mictoo',
    description: 'MP3 a AAC dentro de M4A. Compatible con iPhone. Sin registro.',
    url: 'https://mictoo.com/es/mp3-to-m4a',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MP3 a M4A, convertidor online gratuito',
    description: 'AAC en MP4 compatible con iPhone.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function EsMp3ToM4aPage() {
  return (
    <ConverterPageLayout
      locale="es"
      mode="converter" from="mp3" to="m4a" currentHref="/es/mp3-to-m4a"
      badge="MP3 → M4A · Gratis · Compatible con iPhone"
      h1First="MP3 a M4A"
      h1Second="Convertidor online gratuito"
      subtitle="Suelta un MP3 y obtén un M4A (AAC en contenedor MP4) para Notas de Voz de iPhone, iTunes, GarageBand y el ecosistema de Apple. Sin marca de agua, sin correo electrónico."
      outputFormat="M4A" outputQuality="128 kbps AAC" outputAudio="Estéreo"
      stepsTitle="Cómo funciona la conversión de MP3 a M4A"
      steps={[
        { icon: 'upload',   title: 'Suelta el MP3',        desc: 'Cualquier MP3 de bitrate, hasta 25 MB de forma anónima.' },
        { icon: 'waveform', title: 'Re-codificamos a AAC', desc: 'ffmpeg decodifica el MP3 y re-codifica como 128 kbps AAC dentro de un contenedor .m4a.' },
        { icon: 'download', title: 'Descarga el M4A',   desc: 'Archivo compatible con iPhone con el nombre original más la extensión .m4a.' },
      ]}
      previewInputName="episodio.mp3"
      previewInputSize="8.4 MB · 00:09:22"
      previewOutputName="episodio.m4a"
      previewOutputSize="00:09:22 · 128 kbps AAC · 7.6 MB"
      whyTitle="¿Por qué usar Mictoo para MP3 a M4A?"
      whyCards={[
        { icon: 'target',    title: 'Salida compatible con Apple',    desc: 'M4A funciona de forma nativa con flujos de trabajo comunes de iPhone, iTunes, GarageBand y Apple.' },
        { icon: 'fileAudio', title: 'Salida predecible',       desc: 'El archivo se re-codifica como 128 kbps AAC. Su tamaño final depende principalmente de la duración de la grabación.' },
        { icon: 'lock',      title: 'Archivos eliminados después',      desc: 'El MP3 subido se elimina después de la conversión; el M4A se purga dentro de la hora.' },
        { icon: 'shield',    title: 'Sin marca de agua ni etiqueta',      desc: 'Solo el audio, re-codificado. Sin introducción de marca, sin metadatos inyectados.' },
      ]}
      scenariosTitle="Cuándo es útil MP3 a M4A"
      scenarios={[
        { icon: 'headphones', title: 'Importación a la biblioteca de iTunes' },
        { icon: 'waveform',   title: 'Proyecto de GarageBand' },
        { icon: 'video',      title: 'Banda sonora de iMovie' },
        { icon: 'mail',       title: 'Compatibilidad con AirDrop' },
        { icon: 'archive',    title: 'Archivo del ecosistema de Apple' },
        { icon: 'editPen',    title: 'Importación a Logic Pro' },
      ]}
      tipsTitle="Consejos para una conversión limpia de MP3 a M4A"
      tips={[
        'MP3 y AAC son ambos con pérdida; re-codificar añade una pequeña pérdida de calidad.',
        'Para sin pérdida, convierte a WAV en su lugar.',
        'Las etiquetas ID3 no se transfieren al M4A.',
        'Mantén el archivo fuente por debajo del límite actual de carga de 25 MB.',
      ]}
      processTitle="Qué sucede durante la conversión"
      processSteps={['Flujo MP3', 'Decodificar', 'Codificación AAC / M4A']}
      compareTitle="MP3 vs M4A"
      compareRows={[
        { fmt: 'MP3', contains: 'No', size: 'Pequeño', best: 'Universal, reproductores heredados' },
        { fmt: 'M4A', contains: 'No', size: 'Ligeramente más pequeño', best: 'iPhone, iTunes, GarageBand, aplicaciones de Apple' },
      ]}
      faq={[
        { q: '¿Es gratuito el convertidor de MP3 a M4A?', a: 'Sí. Los archivos de hasta 25 MB se pueden convertir sin una cuenta, y la salida no tiene marca de agua.' },
        { q: '¿Convertir MP3 a M4A mejora la calidad?', a: 'No. Re-codificar de un formato con pérdida a otro solo puede perder calidad ligeramente. Hazlo solo por compatibilidad con el ecosistema de Apple.' },
        { q: '¿Funcionará el M4A en iTunes y Apple Music?', a: 'Sí. AAC estándar dentro de un contenedor MP4 es el formato exacto que usa iTunes.' },
        { q: '¿Se almacenan los archivos?', a: 'No. El MP3 subido se elimina después de la conversión; el M4A se purga dentro de la hora.' },
        { q: '¿Puedo convertir a M4A sin pérdida (ALAC)?', a: 'No desde esta página. La salida es AAC con pérdida. Para sin pérdida, convierte MP3 a WAV primero, luego a ALAC en tu DAW.' },
      ]}
      ctaHeadline="Convierte tu MP3 a M4A ahora"
      ctaSubtitle="Suelta tu MP3 y obtén un M4A compatible con iPhone en segundos."
      ctaButton="Elige un archivo MP3"
      moreTools={[
        { href: '/es/m4a-to-mp3',  label: 'M4A a MP3' },
        { href: '/es/mp3-to-wav',  label: 'MP3 a WAV' },
        { href: '/es/mp4-to-mp3',  label: 'MP4 a MP3' },
        { href: '/es/m4a-to-text', label: 'M4A a Texto' },
      ]}
    />
  )
}