import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/flac-to-mp3',
  'fr': 'https://mictoo.com/fr/flac-to-mp3',
  'de': 'https://mictoo.com/de/flac-to-mp3',
  'es': 'https://mictoo.com/es/flac-to-mp3',
  'ru': 'https://mictoo.com/ru/flac-to-mp3',
  'it': 'https://mictoo.com/it/flac-to-mp3',
  'pt': 'https://mictoo.com/pt/flac-to-mp3',
  'pl': 'https://mictoo.com/pl/flac-to-mp3',
  'ja': 'https://mictoo.com/ja/flac-to-mp3',
  'ko': 'https://mictoo.com/ko/flac-to-mp3',
  'x-default': 'https://mictoo.com/flac-to-mp3',
}

export const metadata = {
  title: 'FLAC a MP3, convertidor online gratuito | Mictoo',
  description:
    'Convierte FLAC a MP3 gratis online. Reduce el FLAC sin pérdidas a MP3 de 128 kbps en segundos. Sin registro, sin marca de agua. Hasta 25 MB.',
  alternates: { canonical: 'https://mictoo.com/es/flac-to-mp3', languages: LANGS },
  openGraph: {
    title: 'FLAC a MP3, convertidor online gratuito | Mictoo',
    description: 'Reduce el FLAC sin pérdidas a MP3 de 128 kbps. Sin registro.',
    url: 'https://mictoo.com/es/flac-to-mp3',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FLAC a MP3, convertidor online gratuito',
    description: 'Reduce el FLAC sin pérdidas a MP3 portátil.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function EsFlacToMp3Page() {
  return (
    <ConverterPageLayout
      locale="es"
      mode="converter" from="flac" to="mp3" currentHref="/es/flac-to-mp3"
      badge="FLAC → MP3 · Gratis · Sin registro"
      h1First="FLAC a MP3"
      h1Second="Convertidor online gratuito"
      subtitle="Suelta un archivo FLAC sin pérdidas (de un ripeo de CD, descarga de Tidal o fuente de alta resolución) y obtén un MP3 portátil de 128 kbps en segundos."
      outputFormat="MP3" outputQuality="128 kbps" outputAudio="Estéreo"
      stepsTitle="Cómo funciona la conversión de FLAC a MP3"
      steps={[
        { icon: 'upload',   title: 'Suelta el FLAC',       desc: 'Cualquier FLAC (nativo o FLAC-en-OGG). Hasta 25 MB de forma anónima.' },
        { icon: 'waveform', title: 'Decodificamos y codificamos', desc: 'ffmpeg decodifica el FLAC sin pérdidas y lo recodifica a MP3 estéreo de 128 kbps.' },
        { icon: 'download', title: 'Descarga el MP3',    desc: 'Obtén tu MP3 5-8 veces más pequeño, listo para cualquier reproductor.' },
      ]}
      previewInputName="album-track.flac"
      previewInputSize="42 MB · 00:05:12 · 16-bit / 44.1 kHz"
      previewOutputName="album-track.mp3"
      previewOutputSize="00:05:12 · 128 kbps · 4.8 MB"
      whyTitle="¿Por qué usar Mictoo para FLAC a MP3?"
      whyCards={[
        { icon: 'target',    title: 'Mantiene el máster sin pérdidas', desc: 'Tu archivo FLAC nunca se modifica. Solo producimos una copia.' },
        { icon: 'fileAudio', title: 'Copia de escucha más pequeña',    desc: 'Un MP3 de 128 kbps es a menudo varias veces más pequeño que FLAC. La conversión es con pérdidas, así que mantén el FLAC como tu máster.' },
        { icon: 'lock',      title: 'Archivos eliminados después',       desc: 'El FLAC subido se elimina después de la conversión; el MP3 se purga dentro de la hora.' },
        { icon: 'shield',    title: 'Sin marca de agua ni etiqueta',       desc: 'Solo el audio, recodificado. Sin corte de introducción, sin metadatos de marca.' },
      ]}
      scenariosTitle="Cuándo es útil FLAC a MP3"
      scenarios={[
        { icon: 'headphones', title: 'Ripeo de CD para el teléfono' },
        { icon: 'mail',       title: 'Enviar un archivo más pequeño por correo' },
        { icon: 'archive',    title: 'Biblioteca de música portátil' },
        { icon: 'editPen',    title: 'Importación en DAW' },
        { icon: 'waveform',   title: 'Copia de escucha para podcast' },
        { icon: 'video',      title: 'Banda sonora de video' },
      ]}
      tipsTitle="Consejos para una conversión limpia de FLAC a MP3"
      tips={[
        'Mantén el FLAC como la copia de archivo sin pérdidas.',
        '128 kbps es transparente para la mayoría de las escuchas.',
        'Para pistas de más de 25 MB, recorta o divide la fuente antes de subirla.',
        'Las etiquetas de metadatos Vorbis (título/artista) no se trasladan al MP3.',
      ]}
      processTitle="Qué sucede durante la conversión"
      processSteps={['Contenedor FLAC', 'Decodificación sin pérdidas', 'Codificación MP3']}
      compareTitle="FLAC vs MP3"
      compareRows={[
        { fmt: 'FLAC', contains: 'No', size: 'Grande (~5-8 MB/min)', best: 'Archivado, reproducción hi-fi' },
        { fmt: 'MP3',  contains: 'No', size: 'Pequeño (~1 MB/min)',   best: 'Compartir, teléfonos, en todas partes' },
      ]}
      faq={[
        { q: '¿Es gratuito el convertidor de FLAC a MP3?', a: 'Sí. Los archivos de hasta 25 MB se pueden convertir sin una cuenta, y la salida no tiene marca de agua.' },
        { q: '¿Pierdo calidad al convertir FLAC a MP3?', a: 'Técnicamente sí (MP3 tiene pérdidas), pero a 128 kbps la pérdida es inaudible para la escucha típica. Mantén el FLAC como la copia de archivo.' },
        { q: '¿Se admiten archivos FLAC-en-OGG?', a: 'Sí. Tanto FLAC nativo (bytes mágicos fLaC) como FLAC dentro de contenedores OGG funcionan.' },
        { q: '¿Se almacenan los archivos?', a: 'No. El FLAC subido se elimina después de la conversión; el MP3 se purga dentro de la hora.' },
        { q: 'Mi FLAC es mayor de 25 MB. ¿Qué hago?', a: 'Recorta o divide la fuente, o exporta una copia de escucha de menor resolución antes de subirla.' },
      ]}
      ctaHeadline="Convierte tu FLAC a MP3 ahora"
      ctaSubtitle="Suelta tu FLAC y obtén un MP3 portátil en segundos. Sin registro. Sin marca de agua."
      ctaButton="Elige un archivo FLAC"
      moreTools={[
        { href: '/es/wav-to-mp3',  label: 'WAV a MP3' },
        { href: '/es/mp4-to-mp3',  label: 'MP4 a MP3' },
        { href: '/es/webm-to-mp3', label: 'WEBM a MP3' },
        { href: '/es/flac-to-text', label: 'FLAC a Texto' },
      ]}
    />
  )
}