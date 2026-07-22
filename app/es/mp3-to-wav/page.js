import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/mp3-to-wav',
  'fr': 'https://mictoo.com/fr/mp3-to-wav',
  'de': 'https://mictoo.com/de/mp3-to-wav',
  'es': 'https://mictoo.com/es/mp3-to-wav',
  'ru': 'https://mictoo.com/ru/mp3-to-wav',
  'it': 'https://mictoo.com/it/mp3-to-wav',
  'pt': 'https://mictoo.com/pt/mp3-to-wav',
  'pl': 'https://mictoo.com/pl/mp3-to-wav',
  'ja': 'https://mictoo.com/ja/mp3-to-wav',
  'ko': 'https://mictoo.com/ko/mp3-to-wav',
  'x-default': 'https://mictoo.com/mp3-to-wav',
}

export const metadata = {
  title: 'MP3 a WAV, convertidor online gratuito | Mictoo',
  description:
    'Convierte MP3 a WAV gratis online. Expande MP3 comprimido a WAV sin comprimir de 16 bits/44.1 kHz para edición de audio. Sin registro, sin marca de agua.',
  alternates: { canonical: 'https://mictoo.com/es/mp3-to-wav', languages: LANGS },
  openGraph: {
    title: 'MP3 a WAV, convertidor online gratuito | Mictoo',
    description: 'MP3 a WAV sin comprimir de 16 bits/44.1 kHz. Para edición.',
    url: 'https://mictoo.com/es/mp3-to-wav',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MP3 a WAV, convertidor online gratuito',
    description: 'Para edición y masterización en DAW.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function EsMp3ToWavPage() {
  return (
    <ConverterPageLayout
      locale="es"
      mode="converter" from="mp3" to="wav" currentHref="/es/mp3-to-wav"
      badge="MP3 → WAV · Gratis · Amigable con editores"
      h1First="MP3 a WAV"
      h1Second="Convertidor online gratuito"
      subtitle="Suelta un MP3 y obtén un WAV sin comprimir de 16 bits / 44.1 kHz para edición en DAW, masterización o grabación de CD. Sin marca de agua, sin email."
      outputFormat="WAV" outputQuality="16 bits / 44.1 kHz" outputAudio="Estéreo"
      stepsTitle="Cómo funciona la conversión de MP3 a WAV"
      steps={[
        { icon: 'upload',   title: 'Suelta el MP3',       desc: 'Cualquier MP3 de bitrate, hasta 25 MB de forma anónima.' },
        { icon: 'waveform', title: 'Decodificamos a PCM',   desc: 'ffmpeg decodifica el MP3 a PCM sin comprimir de 16 bits / 44.1 kHz envuelto en un contenedor WAV.' },
        { icon: 'download', title: 'Descarga el WAV',   desc: 'Listo para Audacity, Pro Tools, Logic, Ableton y cualquier editor de audio.' },
      ]}
      previewInputName="voz.mp3"
      previewInputSize="4.6 MB · 00:05:00 · 128 kbps"
      previewOutputName="voz.wav"
      previewOutputSize="00:05:00 · 16 bits / 44.1 kHz · 50 MB"
      whyTitle="¿Por qué usar Mictoo para MP3 a WAV?"
      whyCards={[
        { icon: 'target',   title: 'Salida lista para DAW',       desc: 'PCM sin comprimir es lo que esperan los editores de audio y herramientas de masterización.' },
        { icon: 'fileAudio',title: 'Estándar 16 bits / 44.1', desc: 'Una configuración PCM ampliamente soportada para editores de audio, herramientas de masterización y software de autoría de CD.' },
        { icon: 'lock',     title: 'Archivos eliminados después',    desc: 'El MP3 subido se elimina después de la conversión; el WAV se purga en menos de una hora.' },
        { icon: 'shield',   title: 'Sin marca de agua ni etiqueta',    desc: 'Solo el audio, decodificado a PCM. Sin introducción de marca, sin metadatos inyectados.' },
      ]}
      scenariosTitle="Cuándo es útil MP3 a WAV"
      scenarios={[
        { icon: 'editPen',    title: 'Edición en Audacity' },
        { icon: 'waveform',   title: 'Importación en Pro Tools' },
        { icon: 'headphones', title: 'Flujo de trabajo de masterización' },
        { icon: 'archive',    title: 'Grabación de CD' },
        { icon: 'video',      title: 'Editor de video con requisito de WAV' },
        { icon: 'target',     title: 'Entrada para entrenamiento de clonación de voz' },
      ]}
      tipsTitle="Consejos para una conversión limpia de MP3 a WAV"
      tips={[
        'WAV es 10× más grande que MP3 (alrededor de 10 MB por minuto).',
        'La salida no es "realmente" sin pérdidas ,  preserva la señal MP3.',
        'Para audio realmente sin pérdidas, comienza desde un maestro FLAC o WAV original.',
        'Mantén el archivo fuente por debajo del límite actual de carga de 25 MB.',
      ]}
      processTitle="Qué sucede durante la conversión"
      processSteps={['Flujo MP3', 'Decodificar a PCM', 'Contenedor WAV']}
      compareTitle="MP3 vs WAV"
      compareRows={[
        { fmt: 'MP3', contains: 'No', size: 'Pequeño (~1 MB/min)', best: 'Compartir, teléfonos, streaming' },
        { fmt: 'WAV', contains: 'No', size: 'Grande (~10 MB/min)', best: 'Edición, masterización, grabación de CD' },
      ]}
      faq={[
        { q: '¿Convertir MP3 a WAV recupera calidad sin pérdidas?', a: 'No. MP3 es con pérdidas; el WAV preserva la señal MP3 pero nada más. Para verdaderas sin pérdidas, necesitas comenzar desde un FLAC o WAV original.' },
        { q: '¿Es gratuito el convertidor?', a: 'Sí. Los archivos de hasta 25 MB pueden ser convertidos sin una cuenta, y la salida no tiene marca de agua.' },
        { q: '¿Por qué el archivo WAV es tan mucho más grande?', a: 'WAV es PCM sin comprimir. Un MP3 de 5 MB se convierte en aproximadamente un WAV de 50 MB. Eso es normal.' },
        { q: '¿Qué profundidad de bits y frecuencia de muestreo?', a: '16 bits / 44.1 kHz estéreo (calidad de CD). Este es el formato estándar de importación en DAW.' },
        { q: '¿Se almacenan los archivos?', a: 'No. El MP3 subido se elimina después de la conversión; el WAV se purga en menos de una hora.' },
      ]}
      ctaHeadline="Convierte tu MP3 a WAV ahora"
      ctaSubtitle="Suelta tu MP3 y obtén un WAV sin comprimir listo para editar."
      ctaButton="Elige un archivo MP3"
      moreTools={[
        { href: '/es/wav-to-mp3',  label: 'WAV a MP3' },
        { href: '/es/mp3-to-m4a',  label: 'MP3 a M4A' },
        { href: '/es/flac-to-mp3', label: 'FLAC a MP3' },
        { href: '/es/wav-to-text', label: 'WAV a Texto' },
      ]}
    />
  )
}