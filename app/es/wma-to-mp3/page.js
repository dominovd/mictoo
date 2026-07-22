import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/wma-to-mp3',
  'fr': 'https://mictoo.com/fr/wma-to-mp3',
  'de': 'https://mictoo.com/de/wma-to-mp3',
  'es': 'https://mictoo.com/es/wma-to-mp3',
  'ru': 'https://mictoo.com/ru/wma-to-mp3',
  'it': 'https://mictoo.com/it/wma-to-mp3',
  'pt': 'https://mictoo.com/pt/wma-to-mp3',
  'pl': 'https://mictoo.com/pl/wma-to-mp3',
  'ja': 'https://mictoo.com/ja/wma-to-mp3',
  'ko': 'https://mictoo.com/ko/wma-to-mp3',
  'x-default': 'https://mictoo.com/wma-to-mp3',
}

export const metadata = {
  title: 'WMA a MP3: Convertidor gratuito para Windows Media Audio antiguo | Mictoo',
  description:
    'Convierte archivos WMA antiguos a MP3 universal. Diseñado para rescatar archivos de Windows Media, exportaciones de correo de voz y CDs ripeados que nada moderno quiere abrir.',
  alternates: {
    canonical: 'https://mictoo.com/es/wma-to-mp3',
    languages: LANGS,
  },
  openGraph: {
    title: 'WMA a MP3: Convertidor de Windows Media antiguo | Mictoo',
    description: 'Rescata archivos WMA antiguos, exportaciones de correo de voz, CDs ripeados.',
    url: 'https://mictoo.com/es/wma-to-mp3',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WMA a MP3: Convertidor gratuito',
    description: 'Rescata archivos WMA antiguos. Gratis.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function EsWmaToMp3Page() {
  return (
    <ConverterPageLayout
      locale="es"
      mode="converter" from="wma" to="mp3" currentHref="/es/wma-to-mp3"
      badge="WMA → MP3 · Gratis · Rescate de legado"
      h1First="WMA a MP3"
      h1Second="Convertidor gratuito de Windows Media antiguo"
      subtitle="Suelta un archivo WMA antiguo (exportación de correo de voz, CD ripeado, archivo de Windows Media antiguo) y obtén un MP3 universal que cualquier dispositivo o reproductor moderno abrirá."
      outputFormat="MP3" outputQuality="128 kbps" outputAudio="Estéreo"
      stepsTitle="Cómo funciona la conversión de WMA a MP3"
      steps={[
        { icon: 'upload',   title: 'Suelta el WMA',        desc: 'Cualquier versión de Windows Media Audio, hasta 25 MB de forma anónima.' },
        { icon: 'waveform', title: 'Decodificamos y codificamos', desc: 'ffmpeg lee el WMA y lo re-codifica a MP3 estéreo de 128 kbps a 44.1 kHz.' },
        { icon: 'download', title: 'Descarga el MP3',    desc: 'Obtén un MP3 compatible con la mayoría de los reproductores actuales, teléfonos y editores de audio.' },
      ]}
      previewInputName="correo-voz-2011.wma"
      previewInputSize="1.2 MB · 00:02:34"
      previewOutputName="correo-voz-2011.mp3"
      previewOutputSize="00:02:34 · 128 kbps · 2.4 MB"
      whyTitle="¿Por qué usar Mictoo para WMA a MP3?"
      whyCards={[
        { icon: 'target',   title: 'Archivos de legado manejados',    desc: 'Archivos antiguos de Windows Media Audio que iTunes, Apple Music y reproductores modernos se niegan a abrir.' },
        { icon: 'fileAudio',title: 'Amplia compatibilidad con MP3', desc: 'MP3 es ampliamente compatible en macOS, Linux, iPhone, Android y reproductores de música comunes.' },
        { icon: 'lock',     title: 'Archivos eliminados después',     desc: 'El WMA subido se elimina después de la conversión; el MP3 se purga dentro de la hora.' },
        { icon: 'shield',   title: 'Sin marca de agua ni etiqueta',     desc: 'Solo el audio, re-codificado. Sin introducción de marca, sin metadatos inyectados.' },
      ]}
      scenariosTitle="Cuándo WMA a MP3 es útil"
      scenarios={[
        { icon: 'archive',    title: 'Ripeo de CD antiguo' },
        { icon: 'headphones', title: 'Exportación de correo de voz antiguo' },
        { icon: 'editPen',    title: 'Salida de Windows Movie Maker' },
        { icon: 'mail',       title: 'Compartir en dispositivo no Windows' },
        { icon: 'video',      title: 'Importar en editor moderno' },
        { icon: 'waveform',   title: 'Rescatar archivo de cinta' },
      ]}
      tipsTitle="Consejos para una conversión limpia de WMA a MP3"
      tips={[
        'WMA protegido por DRM (antiguas rentas de Windows Media Player) no se puede decodificar.',
        'WMA de muy baja tasa de bits (correo de voz) sonará igual que la fuente.',
        'Antiguo video WMV no es compatible aquí; usa MP4 a MP3 en su lugar.',
        'Para grabaciones de más de 25 MB, recorta o divide la fuente antes de subirla.',
      ]}
      processTitle="Qué sucede durante la conversión"
      processSteps={['WMA (ASF)', 'Decodificar Windows Media', 'Codificación MP3']}
      compareTitle="WMA vs MP3"
      compareRows={[
        { fmt: 'WMA', contains: 'No', size: 'Pequeño', best: 'Flujos de trabajo de Windows antiguos (obsoleto)' },
        { fmt: 'MP3', contains: 'No', size: 'Pequeño', best: 'Compatibilidad universal, dispositivos modernos' },
      ]}
      faq={[
        { q: '¿Es gratuito el convertidor de WMA a MP3?', a: 'Sí. Los archivos de hasta 25 MB se pueden convertir sin una cuenta, y la salida no tiene marca de agua.' },
        { q: '¿Por qué los reproductores modernos se niegan a abrir WMA?', a: 'Apple nunca soportó WMA. Algunos reproductores de Android lo han descartado. WMA es un formato antiguo de Microsoft del que Windows mismo se ha estado alejando.' },
        { q: '¿Puedes convertir WMA protegido por DRM?', a: 'No. Antiguas rentas de Windows Media Player usaban DRM que ffmpeg no puede decodificar. Nunca eludimos la protección de derechos de autor.' },
        { q: '¿Se almacenan los archivos?', a: 'No. El WMA subido se elimina después de la conversión; el MP3 se purga dentro de la hora.' },
        { q: '¿Qué pasa con WMA sin pérdidas?', a: 'El convertidor también lee WMA sin pérdidas, pero la salida sigue siendo MP3 de 128 kbps (con pérdida). Para salida sin pérdidas, convierte a WAV en su lugar.' },
      ]}
      ctaHeadline="Convierte tu WMA a MP3 ahora"
      ctaSubtitle="Rescata Windows Media Audio antiguo. Obtén un MP3 portátil en segundos."
      ctaButton="Elige un archivo WMA"
      moreTools={[
        { href: '/es/mp4-to-mp3',  label: 'MP4 a MP3' },
        { href: '/es/wav-to-mp3',  label: 'WAV a MP3' },
        { href: '/es/flac-to-mp3', label: 'FLAC a MP3' },
        { href: '/es/aac-to-mp3',  label: 'AAC a MP3' },
      ]}
    />
  )
}