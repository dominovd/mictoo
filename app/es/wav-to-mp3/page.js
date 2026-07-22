import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/wav-to-mp3',
  'fr': 'https://mictoo.com/fr/wav-to-mp3',
  'de': 'https://mictoo.com/de/wav-to-mp3',
  'es': 'https://mictoo.com/es/wav-to-mp3',
  'ru': 'https://mictoo.com/ru/wav-to-mp3',
  'it': 'https://mictoo.com/it/wav-to-mp3',
  'pt': 'https://mictoo.com/pt/wav-to-mp3',
  'pl': 'https://mictoo.com/pl/wav-to-mp3',
  'ja': 'https://mictoo.com/ja/wav-to-mp3',
  'ko': 'https://mictoo.com/ko/wav-to-mp3',
  'x-default': 'https://mictoo.com/wav-to-mp3',
}

export const metadata = {
  title: 'WAV a MP3, convertidor online gratuito | Mictoo',
  description:
    'Convierte WAV a MP3 gratis online. Reduce archivos WAV sin pérdida a MP3 portátil de 128 kbps en segundos. Sin registro, sin marca de agua. Hasta 25 MB.',
  alternates: { canonical: 'https://mictoo.com/es/wav-to-mp3', languages: LANGS },
  openGraph: {
    title: 'WAV a MP3, convertidor online gratuito | Mictoo',
    description: 'Reduce WAV sin pérdida a MP3 portátil de 128 kbps. Sin registro.',
    url: 'https://mictoo.com/es/wav-to-mp3',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WAV a MP3, convertidor online gratuito',
    description: 'Reduce WAV a MP3 portátil.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function EsWavToMp3Page() {
  return (
    <ConverterPageLayout
      locale="es"
      mode="converter" from="wav" to="mp3" currentHref="/es/wav-to-mp3"
      badge="WAV → MP3 · Gratis · Sin registro"
      h1First="WAV a MP3"
      h1Second="Convertidor online gratuito"
      subtitle="Suelta un archivo WAV sin comprimir y obtén un pequeño MP3 portátil en segundos. Sin marca de agua, sin correo electrónico, sin espera."
      outputFormat="MP3" outputQuality="128 kbps" outputAudio="Estéreo"
      stepsTitle="Cómo funciona la conversión de WAV a MP3"
      steps={[
        { icon: 'upload',   title: 'Suelta el WAV',         desc: 'Sube un archivo WAV de hasta 25 MB. No se requiere cuenta.' },
        { icon: 'waveform', title: 'Codificamos a MP3',      desc: 'ffmpeg codifica a MP3 estéreo de 128 kbps a 44.1 kHz. Un WAV de 25 MB termina en unos 10 segundos.' },
        { icon: 'download', title: 'Descarga el MP3',     desc: 'Obtén un MP3 más pequeño de 128 kbps con el nombre de archivo base original.' },
      ]}
      previewInputName="studio-bounce.wav"
      previewInputSize="120 MB · 00:12:34 · 16-bit / 44.1 kHz"
      previewOutputName="studio-bounce.mp3"
      previewOutputSize="00:12:34 · 128 kbps · 11.5 MB"
      whyTitle="¿Por qué usar Mictoo para WAV a MP3?"
      whyCards={[
        { icon: 'target',   title: 'Un trabajo bien hecho',      desc: 'Solo la conversión. Sin ventana emergente de boletín, sin barra de progreso falsa.' },
        { icon: 'fileAudio',title: 'Salida mucho más pequeña',    desc: 'Los archivos WAV PCM sin comprimir a menudo se reducen de 8 a 12 veces a 128 kbps. La relación exacta depende de la fuente.' },
        { icon: 'lock',     title: 'Archivos eliminados después',    desc: 'Tu subida se elimina una vez que termina la conversión; el MP3 se purga dentro de la hora.' },
        { icon: 'shield',   title: 'Sin marca de agua ni etiqueta',    desc: 'Sin introducción de marca, sin metadatos inyectados. Solo el audio, re-codificado.' },
      ]}
      scenariosTitle="Cuándo es útil WAV a MP3"
      scenarios={[
        { icon: 'headphones', title: 'Rebote de estudio para el teléfono' },
        { icon: 'mail',       title: 'Enviar un archivo más pequeño' },
        { icon: 'archive',    title: 'Archivar en tamaño más pequeño' },
        { icon: 'editPen',    title: 'Preparar para transcripción' },
        { icon: 'waveform',   title: 'Importar a la biblioteca musical' },
        { icon: 'video',      title: 'Voz en off para video' },
      ]}
      tipsTitle="Consejos para una conversión limpia de WAV a MP3"
      tips={[
        '128 kbps es transparente para la mayoría de las escuchas.',
        'Si el WAV supera los 25 MB, recórtalo o comprímelo antes de subirlo.',
        'WAV multicanal se mezcla a estéreo.',
        'Para preservación sin pérdida, guarda el WAV como copia de archivo.',
      ]}
      processTitle="Qué sucede durante la conversión"
      processSteps={['Contenedor WAV', 'Decodificar PCM', 'Codificación MP3']}
      compareTitle="WAV vs MP3"
      compareRows={[
        { fmt: 'WAV', contains: 'No', size: 'Grande (~10 MB/min)', best: 'Edición, archivo, estudio' },
        { fmt: 'MP3', contains: 'No', size: 'Pequeño (~1 MB/min)',  best: 'Compartir, reproducción, escucha' },
      ]}
      faq={[
        { q: '¿Es gratuito el convertidor de WAV a MP3?', a: 'Sí. No se necesita cuenta para archivos de hasta 25 MB, y la salida no tiene marca de agua.' },
        { q: '¿La conversión reduce la calidad del audio?', a: 'Levemente. MP3 a 128 kbps es un formato con pérdida, pero la caída de calidad es inaudible para la voz y la reproducción musical típica. Guarda tu WAV como el maestro.' },
        { q: '¿Se almacenan los archivos subidos?', a: 'No. Tu WAV se almacena en Vercel Blob solo el tiempo necesario para convertirlo, luego se elimina. El MP3 se purga dentro de la hora.' },
        { q: '¿Puedo convertir un WAV grande?', a: 'El límite actual de subida es de 25 MB. Para un archivo más grande, recórtalo o exporta una copia mono o de menor tasa de muestreo antes de subirlo.' },
        { q: '¿Funciona en móviles?', a: 'Sí. Las subidas funcionan desde iOS Safari y Android Chrome.' },
      ]}
      ctaHeadline="Convierte tu WAV a MP3 ahora"
      ctaSubtitle="Suelta tu WAV y obtén un MP3 portátil en segundos. Sin registro. Sin marca de agua."
      ctaButton="Elige un archivo WAV"
      moreTools={[
        { href: '/es/mp4-to-mp3',  label: 'MP4 a MP3' },
        { href: '/es/webm-to-mp3', label: 'WEBM a MP3' },
        { href: '/es/flac-to-mp3', label: 'FLAC a MP3' },
        { href: '/es/mp3-to-wav',  label: 'MP3 a WAV' },
        { href: '/es/wav-to-text', label: 'WAV a Texto' },
      ]}
    />
  )
}