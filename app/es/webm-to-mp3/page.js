import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/webm-to-mp3',
  'fr': 'https://mictoo.com/fr/webm-to-mp3',
  'de': 'https://mictoo.com/de/webm-to-mp3',
  'es': 'https://mictoo.com/es/webm-to-mp3',
  'ru': 'https://mictoo.com/ru/webm-to-mp3',
  'it': 'https://mictoo.com/it/webm-to-mp3',
  'pt': 'https://mictoo.com/pt/webm-to-mp3',
  'pl': 'https://mictoo.com/pl/webm-to-mp3',
  'ja': 'https://mictoo.com/ja/webm-to-mp3',
  'ko': 'https://mictoo.com/ko/webm-to-mp3',
  'x-default': 'https://mictoo.com/webm-to-mp3',
}

export const metadata = {
  title: 'WEBM a MP3, conversor online gratuito | Mictoo',
  description:
    'Convierte WEBM a MP3 gratis online. Extrae audio MP3 de cualquier archivo de video o audio WEBM en segundos. Sin registro, sin marca de agua. Hasta 25 MB.',
  alternates: { canonical: 'https://mictoo.com/es/webm-to-mp3', languages: LANGS },
  openGraph: {
    title: 'WEBM a MP3, conversor online gratuito | Mictoo',
    description: 'Extrae MP3 de cualquier WEBM. Sin registro, sin marca de agua.',
    url: 'https://mictoo.com/es/webm-to-mp3',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WEBM a MP3, conversor online gratuito',
    description: 'Extrae MP3 de cualquier WEBM.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function EsWebmToMp3Page() {
  return (
    <ConverterPageLayout
      locale="es"
      mode="converter" from="webm" to="mp3" currentHref="/es/webm-to-mp3"
      badge="WEBM → MP3 · Gratis · Sin registro"
      h1First="WEBM a MP3"
      h1Second="Conversor online gratuito"
      subtitle="Suelta un WEBM (de Loom, OBS, grabación de Firefox, o un descargador de YouTube) y obtén un MP3 limpio en segundos. Sin marca de agua, sin correo electrónico."
      outputFormat="MP3" outputQuality="128 kbps" outputAudio="Estéreo"
      stepsTitle="Cómo funciona la conversión de WEBM a MP3"
      steps={[
        { icon: 'upload',   title: 'Suelta el WEBM',   desc: 'Video o solo audio WEBM, ambos funcionan. Hasta 25 MB de forma anónima.' },
        { icon: 'waveform', title: 'Desmultiplexamos y codificamos', desc: 'ffmpeg elimina la pista de video (si la hay) y vuelve a codificar el audio Opus o Vorbis a 128 kbps MP3.' },
        { icon: 'download', title: 'Descarga el MP3', desc: 'Obtén tu MP3 limpio en segundos. Nombre de archivo original con extensión .mp3.' },
      ]}
      previewInputName="loom-walkthrough.webm"
      previewInputSize="72 MB · 00:08:12"
      previewOutputName="loom-walkthrough.mp3"
      previewOutputSize="00:08:12 · 128 kbps · 7.5 MB"
      whyTitle="¿Por qué usar Mictoo para WEBM a MP3?"
      whyCards={[
        { icon: 'target',   title: 'Maneja Opus y Vorbis', desc: 'Ambos códecs de audio WEBM funcionan directamente, sin necesidad de reempaquetar manualmente.' },
        { icon: 'video',    title: 'Video en WEBM manejado',   desc: 'Desmultiplexamos la pista de video del lado del servidor. Nunca necesitas extraer el audio tú mismo.' },
        { icon: 'lock',     title: 'Archivos eliminados después',     desc: 'El WEBM subido se elimina después de la conversión; el MP3 se purga en menos de una hora.' },
        { icon: 'shield',   title: 'Sin marca de agua ni etiqueta',     desc: 'El MP3 de salida no tiene un corte de introducción, ni metadatos de marca.' },
      ]}
      scenariosTitle="Cuándo es útil WEBM a MP3"
      scenarios={[
        { icon: 'video',      title: 'Guía de Loom' },
        { icon: 'headphones', title: 'Salida de descargador de YouTube' },
        { icon: 'mail',       title: 'Enviar un archivo más pequeño' },
        { icon: 'editPen',    title: 'Preparar para transcripción' },
        { icon: 'waveform',   title: 'Grabación en el navegador' },
        { icon: 'archive',    title: 'Archivar solo audio' },
      ]}
      tipsTitle="Consejos para una conversión limpia de WEBM a MP3"
      tips={[
        'El WEBM de video se desmultiplexa automáticamente, no es necesario eliminar primero.',
        'Para grabaciones de más de 25 MB, recorta o divide la fuente antes de subir.',
        'Se utiliza la pista de audio predeterminada si existen múltiples.',
        'Para la transcripción de Whisper, sube el WEBM directamente a /webm-to-text.',
      ]}
      processTitle="Qué sucede durante la conversión"
      processSteps={['Contenedor WEBM', 'Extracción de la pista de audio', 'Codificación a MP3']}
      compareTitle="WEBM vs MP3"
      compareRows={[
        { fmt: 'WEBM', contains: 'A menudo sí', size: 'Mediano-grande', best: 'Grabación web, video del navegador' },
        { fmt: 'MP3',  contains: 'No',        size: 'Pequeño',        best: 'Compartir, reproducción, en todas partes' },
      ]}
      faq={[
        { q: '¿Es gratuito el conversor de WEBM a MP3?', a: 'Sí. Los archivos de hasta 25 MB se pueden convertir sin una cuenta, y la salida no tiene marca de agua.' },
        { q: '¿Qué pasa si mi WEBM tiene video?', a: 'Desmultiplexamos la pista de video del lado del servidor y solo codificamos el audio. No necesitas pre-eliminar nada.' },
        { q: '¿Qué códecs de audio WEBM funcionan?', a: 'Opus (moderno, más común) y Vorbis (más antiguo). Ambos son compatibles directamente.' },
        { q: '¿Se almacenan los archivos subidos?', a: 'No. El WEBM se elimina después de la conversión; el MP3 se purga en menos de una hora.' },
        { q: 'Mi WEBM tiene más de 25 MB. ¿Qué hago?', a: 'Recorta la fuente antes de subir, o extrae primero un WEBM solo de audio para reducir el tamaño del archivo.' },
      ]}
      ctaHeadline="Convierte tu WEBM a MP3 ahora"
      ctaSubtitle="Suelta tu WEBM y obtén un MP3 limpio en segundos. Sin registro. Sin marca de agua."
      ctaButton="Elige un archivo WEBM"
      moreTools={[
        { href: '/es/mp4-to-mp3',  label: 'MP4 a MP3' },
        { href: '/es/wav-to-mp3',  label: 'WAV a MP3' },
        { href: '/es/flac-to-mp3', label: 'FLAC a MP3' },
        { href: '/es/webm-to-text', label: 'WEBM a Texto' },
      ]}
    />
  )
}