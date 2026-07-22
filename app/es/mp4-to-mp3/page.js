import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/mp4-to-mp3',
  'fr': 'https://mictoo.com/fr/mp4-to-mp3',
  'de': 'https://mictoo.com/de/mp4-to-mp3',
  'es': 'https://mictoo.com/es/mp4-to-mp3',
  'ru': 'https://mictoo.com/ru/mp4-to-mp3',
  'it': 'https://mictoo.com/it/mp4-to-mp3',
  'pt': 'https://mictoo.com/pt/mp4-to-mp3',
  'pl': 'https://mictoo.com/pl/mp4-to-mp3',
  'ja': 'https://mictoo.com/ja/mp4-to-mp3',
  'ko': 'https://mictoo.com/ko/mp4-to-mp3',
  'x-default': 'https://mictoo.com/mp4-to-mp3',
}

export const metadata = {
  title: 'MP4 a MP3, convertidor online gratuito | Mictoo',
  description:
    'Convierte MP4 a MP3 gratis online. Sube tu vídeo y obtén un archivo de audio MP3 limpio de 128 kbps en segundos. Sin registro, sin marca de agua, sin correo electrónico. Hasta 25 MB.',
  alternates: { canonical: 'https://mictoo.com/es/mp4-to-mp3', languages: LANGS },
  openGraph: {
    title: 'MP4 a MP3, convertidor online gratuito | Mictoo',
    description: 'Convierte MP4 a MP3 gratis online. 128 kbps, sin registro, sin marca de agua.',
    url: 'https://mictoo.com/es/mp4-to-mp3',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MP4 a MP3, convertidor online gratuito',
    description: 'Convierte MP4 a MP3 gratis online. 128 kbps, sin registro, sin marca de agua.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function EsMp4ToMp3Page() {
  return (
    <ConverterPageLayout
      locale="es"
      mode="converter"
      from="mp4"
      to="mp3"
      currentHref="/es/mp4-to-mp3"

      badge="MP4 → MP3 · Gratis · Sin registro"
      h1First="MP4 a MP3"
      h1Second="Convertidor online gratuito"
      subtitle="Súbete un vídeo MP4 y obtén un archivo de audio MP3 limpio en segundos. Sin marca de agua, sin correo electrónico, sin espera."

      outputFormat="MP3"
      outputQuality="128 kbps"
      outputAudio="Estéreo"

      stepsTitle="Cómo funciona la conversión de MP4 a MP3"
      steps={[
        {
          icon: 'upload',
          title: 'Súbete el MP4',
          desc: 'Sube tu vídeo MP4. Aceptamos archivos de hasta 25 MB.',
        },
        {
          icon: 'waveform',
          title: 'Extraemos el audio',
          desc: 'Nuestro servidor extrae la pista de audio y la codifica a MP3.',
        },
        {
          icon: 'download',
          title: 'Descarga el MP3',
          desc: 'Obtén tu archivo MP3 limpio en segundos.',
        },
      ]}

      previewInputName="grabación-reunión.mp4"
      previewInputSize="128.4 MB · 00:45:32"
      previewOutputName="grabación-reunión.mp3"
      previewOutputSize="00:45:32 · 128 kbps"

      whyTitle="¿Por qué usar Mictoo para MP4 a MP3?"
      whyCards={[
        {
          icon: 'target',
          title: 'Solo la conversión',
          desc: 'Nos enfocamos en una cosa: convertir MP4 a MP3 de forma rápida y fiable.',
        },
        {
          icon: 'fileAudio',
          title: 'MP3 pequeño y universal',
          desc: 'MP3 funciona en todas partes y mantiene los tamaños de archivo pequeños.',
        },
        {
          icon: 'lock',
          title: 'Los archivos se eliminan',
          desc: 'Tus subidas se procesan de forma segura y se eliminan después de la conversión.',
        },
        {
          icon: 'shield',
          title: 'Sin marca de agua ni etiqueta de audio',
          desc: 'Obtén un MP3 limpio sin marca de agua ni etiquetas añadidas.',
        },
      ]}

      scenariosTitle="Cuándo es útil MP4 a MP3"
      scenarios={[
        { icon: 'headphones', title: 'Guardar un pódcast de vídeo' },
        { icon: 'cap',        title: 'Extraer audio de una clase' },
        { icon: 'mail',       title: 'Enviar un archivo más pequeño' },
        { icon: 'editPen',    title: 'Preparar para transcripción' },
        { icon: 'waveform',   title: 'Audio de fondo' },
        { icon: 'archive',    title: 'Archivar grabaciones de voz' },
      ]}

      tipsTitle="Consejos para una conversión limpia"
      tips={[
        'Recorta vídeos grandes primero.',
        '128 kbps funciona para voz y música.',
        'Se utiliza la pista de audio predeterminada.',
        'Vídeo protegido por DRM no es compatible.',
      ]}
      processTitle="Qué sucede durante la conversión"
      processSteps={[
        'Contenedor MP4',
        'Extracción de la pista de audio',
        'Codificación MP3',
      ]}

      compareTitle="MP4 vs MP3"
      compareRows={[
        { fmt: 'MP4', contains: 'Sí', size: 'Grande', best: 'Ver, compartir vídeo' },
        { fmt: 'MP3', contains: 'No',  size: 'Pequeño', best: 'Escuchar, solo audio' },
      ]}

      faq={[
        { q: '¿Es gratuito el convertidor de MP4 a MP3?', a: 'Sí. No se necesita cuenta para archivos de hasta 25 MB, sin límite de tiempo, sin marca de agua en la salida, sin mensajes de actualización. Los anuncios en las páginas de marketing cubren los costos del servidor.' },
        { q: '¿La conversión reduce la calidad del audio?', a: 'Levemente. MP3 es un formato con pérdida, pero a 128 kbps la pérdida de calidad es inaudible para voz y reproducción musical típica. Si necesitas sin pérdida, convierte a WAV en su lugar.' },
        { q: '¿Se almacenan los archivos subidos?', a: 'No. Tu MP4 se almacena en Vercel Blob solo el tiempo necesario para ser convertido, luego se elimina. El MP3 resultante se purga en menos de una hora. Guarda el MP3 localmente.' },
        { q: '¿Puedo convertir un MP4 grande?', a: 'El límite actual de subida es de 25 MB. Si tu MP4 es más grande, recórtalo en QuickTime, la aplicación Fotos o en otro editor de vídeo antes de subirlo.' },
        { q: '¿Funciona en móvil?', a: 'Sí. La página es amigable para móviles y las subidas funcionan desde iOS Safari y Android Chrome. En iPhone, comparte el vídeo a Archivos primero para que el selector pueda acceder a él.' },
      ]}

      ctaHeadline="Convierte tu MP4 a MP3 ahora"
      ctaSubtitle="Súbete tu vídeo y obtén un MP3 limpio en segundos. Sin registro. Sin marca de agua."
      ctaButton="Elige un archivo MP4"

      moreTools={[
        { href: '/es/wav-to-mp3',  label: 'WAV a MP3' },
        { href: '/es/webm-to-mp3', label: 'WEBM a MP3' },
        { href: '/es/flac-to-mp3', label: 'FLAC a MP3' },
        { href: '/es/aac-to-mp3',  label: 'AAC a MP3' },
        { href: '/es/m4a-to-mp3',  label: 'M4A a MP3' },
        { href: '/es/mp3-to-wav',  label: 'MP3 a WAV' },
      ]}
    />
  )
}