import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/aac-to-mp3',
  'fr': 'https://mictoo.com/fr/aac-to-mp3',
  'de': 'https://mictoo.com/de/aac-to-mp3',
  'es': 'https://mictoo.com/es/aac-to-mp3',
  'ru': 'https://mictoo.com/ru/aac-to-mp3',
  'it': 'https://mictoo.com/it/aac-to-mp3',
  'pt': 'https://mictoo.com/pt/aac-to-mp3',
  'pl': 'https://mictoo.com/pl/aac-to-mp3',
  'ja': 'https://mictoo.com/ja/aac-to-mp3',
  'ko': 'https://mictoo.com/ko/aac-to-mp3',
  'x-default': 'https://mictoo.com/aac-to-mp3',
}

export const metadata = {
  title: 'AAC a MP3: Convertidor Online Gratis | Mictoo',
  description:
    'Convierte AAC a MP3 gratis, en segundos, con una explicación clara de cuándo la conversión realmente ayuda y cuándo solo te cuesta calidad.',
  alternates: {
    canonical: 'https://mictoo.com/es/aac-to-mp3',
    languages: LANGS,
  },
  openGraph: {
    title: 'AAC a MP3: Convertidor Online Gratis | Mictoo',
    description: 'Convierte AAC a MP3 gratis, en segundos.',
    url: 'https://mictoo.com/es/aac-to-mp3',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AAC a MP3: Convertidor Online Gratis',
    description: 'Convierte AAC a MP3 en segundos. Gratis, sin registro.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function EsAacToMp3Page() {
  return (
    <ConverterPageLayout
      locale="es"
      mode="converter" from="aac" to="mp3" currentHref="/es/aac-to-mp3"
      badge="AAC → MP3 · Gratis · Sin registro"
      h1First="AAC a MP3"
      h1Second="Convertidor online gratis"
      subtitle="Suelta un archivo .aac en bruto (stream ADTS, volcado de transmisión o audio extraído de iPhone) y obtén un MP3 portátil en segundos."
      outputFormat="MP3" outputQuality="128 kbps" outputAudio="Estéreo"
      stepsTitle="Cómo funciona la conversión de AAC a MP3"
      steps={[
        { icon: 'upload',   title: 'Suelta el AAC',        desc: 'Enmarcado ADTS o ADIF en bruto, hasta 25 MB de forma anónima.' },
        { icon: 'waveform', title: 'Decodificamos y codificamos', desc: 'ffmpeg lee el flujo de bits AAC y lo re-codifica a 128 kbps estéreo MP3.' },
        { icon: 'download', title: 'Descarga el MP3',    desc: 'Obtén tu MP3 limpio en segundos, listo para cualquier reproductor.' },
      ]}
      previewInputName="broadcast-clip.aac"
      previewInputSize="8.4 MB · 00:07:22 · 128 kbps AAC"
      previewOutputName="broadcast-clip.mp3"
      previewOutputSize="00:07:22 · 128 kbps MP3 · 6.8 MB"
      whyTitle="¿Por qué usar Mictoo para AAC a MP3?"
      whyCards={[
        { icon: 'target',   title: 'AAC en bruto manejado',        desc: 'Tanto los enmarcados ADTS como ADIF funcionan directamente, sin reempaquetado manual.' },
        { icon: 'fileAudio',title: 'MP3 se reproduce en todas partes',   desc: 'Los dispositivos más antiguos y los anfitriones de podcasts heredados a veces prefieren MP3 sobre AAC.' },
        { icon: 'lock',     title: 'Archivos eliminados después',    desc: 'El AAC subido se elimina tras la conversión; el MP3 se purga dentro de la hora.' },
        { icon: 'shield',   title: 'Sin marca de agua ni etiqueta',    desc: 'Solo el audio, re-codificado. Sin introducción de marca o metadatos.' },
      ]}
      scenariosTitle="Cuándo es útil AAC a MP3"
      scenarios={[
        { icon: 'video',      title: 'Volcado de transmisión HLS' },
        { icon: 'headphones', title: 'El anfitrión del podcast requiere MP3' },
        { icon: 'mail',       title: 'Compatibilidad con reproductores heredados' },
        { icon: 'editPen',    title: 'Importación a DAW (herramientas más antiguas)' },
        { icon: 'archive',    title: 'Formato de archivo consistente' },
        { icon: 'waveform',   title: 'AAC extraído de iPhone' },
      ]}
      tipsTitle="Consejos para una conversión limpia de AAC a MP3"
      tips={[
        'Si tu dispositivo reproduce AAC de forma nativa, puede que no necesites convertir.',
        'Tanto AAC como MP3 son con pérdida; la re-codificación añade una pequeña pérdida de calidad.',
        'Mantén el archivo fuente por debajo del límite actual de carga de 25 MB.',
        'Para transcripción, sube el AAC directamente a /es/aac-to-text en su lugar.',
      ]}
      processTitle="Qué sucede durante la conversión"
      processSteps={['Frames AAC ADTS', 'Decodificar', 'Codificación MP3']}
      compareTitle="AAC vs MP3"
      compareRows={[
        { fmt: 'AAC', contains: 'No', size: 'Pequeño (eficiente)', best: 'Dispositivos modernos, streaming, iPhone' },
        { fmt: 'MP3', contains: 'No', size: 'Pequeño',             best: 'Compatibilidad universal, reproductores heredados' },
      ]}
      faq={[
        { q: '¿Realmente necesito convertir AAC a MP3?', a: 'Rara vez. La mayoría de los dispositivos modernos reproducen AAC de forma nativa. Convierte solo si una herramienta o anfitrión específico requiere explícitamente MP3.' },
        { q: '¿Es gratis el convertidor?', a: 'Sí. Los archivos de hasta 25 MB pueden ser convertidos sin una cuenta, y la salida no tiene marca de agua.' },
        { q: '¿Cuál es la pérdida de calidad?', a: 'AAC y MP3 son ambos con pérdida. La re-codificación añade una pequeña pérdida extra pero es inaudible para la escucha típica a 128 kbps.' },
        { q: '¿Qué enmarcados AAC funcionan?', a: 'ADTS (el más común), ADIF y LATM todos se decodifican. AAC dentro de MP4/M4A también funciona pero es un camino de entrada diferente.' },
        { q: '¿Se almacenan los archivos?', a: 'No. El AAC subido se elimina tras la conversión; el MP3 se purga dentro de la hora.' },
      ]}
      ctaHeadline="Convierte tu AAC a MP3 ahora"
      ctaSubtitle="Suelta tu AAC y obtén un MP3 limpio en segundos. Sin registro. Sin marca de agua."
      ctaButton="Elige un archivo AAC"
      moreTools={[
        { href: '/es/m4a-to-mp3',  label: 'M4A a MP3' },
        { href: '/es/mp4-to-mp3',  label: 'MP4 a MP3' },
        { href: '/es/wav-to-mp3',  label: 'WAV a MP3' },
        { href: '/es/aac-to-text', label: 'AAC a Texto' },
      ]}
    />
  )
}