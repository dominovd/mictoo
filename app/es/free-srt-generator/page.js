import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/free-srt-generator',
  'fr': 'https://mictoo.com/fr/free-srt-generator',
  'de': 'https://mictoo.com/de/free-srt-generator',
  'es': 'https://mictoo.com/es/free-srt-generator',
  'ru': 'https://mictoo.com/ru/free-srt-generator',
  'it': 'https://mictoo.com/it/free-srt-generator',
  'pt': 'https://mictoo.com/pt/free-srt-generator',
  'pl': 'https://mictoo.com/pl/free-srt-generator',
  'ja': 'https://mictoo.com/ja/free-srt-generator',
  'ko': 'https://mictoo.com/ko/free-srt-generator',
  'x-default': 'https://mictoo.com/free-srt-generator',
}

export const metadata = {
  title: 'Generador de SRT gratuito: Crea archivos de subtítulos SRT en línea a partir de audio o video | Mictoo',
  description:
    'Genera archivos de subtítulos SRT limpios a partir de cualquier audio o video. Tiempos de marca de calidad Whisper, listos para YouTube, Premiere, Final Cut, DaVinci Resolve, CapCut. Gratis, sin registro.',
  alternates: {
    canonical: 'https://mictoo.com/es/free-srt-generator',
    languages: LANGS,
  },
  openGraph: {
    title: 'Generador de SRT gratuito | Mictoo',
    description: 'Genera archivos de subtítulos SRT a partir de audio o video. Listo para YouTube, Premiere, Final Cut.',
    url: 'https://mictoo.com/es/free-srt-generator',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Generador de SRT gratuito',
    description: 'Subtítulos SRT de calidad Whisper a partir de audio o video.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function EsFreeSrtGeneratorPage() {
  return (
    <ConverterPageLayout
      locale="es"
      mode="upload" currentHref="/es/free-srt-generator"
      badge="SRT · Audio o video · Gratis"
      h1First="Generador de SRT gratuito"
      h1Second="Subtítulos de calidad Whisper a partir de cualquier audio o video"
      subtitle="Sube audio o video, obtén un archivo de subtítulos SRT listo para YouTube, Premiere, Final Cut, DaVinci Resolve o CapCut. Sin registro, sin tarifa por minuto."
      stepsTitle="Cómo funciona la generación de SRT"
      steps={[
        { icon: 'upload',   title: 'Suelta audio o video', desc: 'MP3, MP4, WAV, M4A, WEBM, FLAC y más. Hasta 25 MB de forma anónima, 180 MB con registro.' },
        { icon: 'waveform', title: 'Whisper transcribe', desc: 'Whisper large-v3 produce marcas de tiempo por segmento alineadas con el audio original.' },
        { icon: 'download', title: 'Descargar SRT',        desc: 'Exportaciones SRT y VTT incluidas. Suelta en tu editor de video o carga a YouTube.' },
      ]}
      whyTitle="¿Por qué usar Mictoo para la generación de SRT?"
      whyCards={[
        { icon: 'target',   title: 'Subtítulos multilingües precisos', desc: 'Whisper large-v3 añade puntuación y maneja muchos idiomas, acentos y tipos de grabación.' },
        { icon: 'captions', title: 'SRT + VTT incluidos',                desc: 'Ambos formatos de subtítulos generados automáticamente. VTT para reproductores web, SRT para editores.' },
        { icon: 'lock',     title: 'Archivos eliminados después',               desc: 'El audio subido se elimina después de la transcripción; la transcripción persiste solo en cuentas registradas.' },
        { icon: 'shield',   title: 'Sin marca de agua ni etiqueta',               desc: 'SRT limpio sin introducción de marca o etiqueta "Hecho con X".' },
      ]}
      scenariosTitle="Cuándo es útil la generación de SRT"
      scenarios={[
        { icon: 'video',      title: 'Subtítulos para carga en YouTube' },
        { icon: 'editPen',    title: 'Importación en Premiere / DaVinci' },
        { icon: 'headphones', title: 'Versión de video de podcast' },
        { icon: 'mail',       title: 'Copia para revisión del cliente' },
        { icon: 'archive',    title: 'Archivo de accesibilidad' },
        { icon: 'target',     title: 'Subtítulos en idioma extranjero' },
      ]}
      tipsTitle="Consejos para subtítulos más limpios"
      tips={[
        'Para archivos de más de 25 MB, inicia sesión para cargas automáticas de hasta 180 MB.',
        'Establece el idioma explícitamente para contenido no inglés o técnico.',
        'Revisa nombres y términos inusuales en modo Editor antes de exportar.',
        'Traduce la transcripción primero, luego exporta SRT para subtítulos en idiomas extranjeros.',
      ]}
      processTitle="Qué sucede durante la generación"
      processSteps={['Audio / video', 'Transcripción Whisper', 'Exportación SRT + VTT']}
      faq={[
        { q: '¿Es gratuito el generador de SRT?', a: 'Sí. Hasta 25 MB de forma anónima o 180 MB al iniciar sesión. Sin marca de agua en el SRT y sin tarifa por minuto.' },
        { q: '¿Qué formatos de subtítulos obtengo?', a: 'SRT y VTT están ambos incluidos. TXT (texto plano) y DOCX también están disponibles. Los usuarios registrados además obtienen PDF y JSON.' },
        { q: '¿Qué tan precisas son las marcas de tiempo?', a: 'Whisper large-v3 proporciona marcas de tiempo por segmento alineadas con el audio original. Lo suficientemente precisas para subtítulos de YouTube y la mayoría de los casos de uso de edición de video.' },
        { q: '¿Identifican a los hablantes (diarización)?', a: 'Aún no. Subtítulos continuos con marcas de tiempo pero sin etiquetas de hablantes. La diarización está en la hoja de ruta Pro.' },
        { q: '¿Mictoo transcribe audio en idiomas no ingleses?', a: 'Sí. Whisper large-v3 soporta más de 50 idiomas con detección automática. Establece el idioma explícitamente para obtener resultados más limpios.' },
        { q: '¿Se guardan las grabaciones en sus servidores?', a: 'No. El audio se transmite al proveedor de transcripción, se procesa una vez y se elimina. Las transcripciones persisten solo en cuentas registradas.' },
      ]}
      ctaHeadline="Genera subtítulos SRT a partir de cualquier grabación"
      ctaSubtitle="YouTube, Premiere, Final Cut, DaVinci, CapCut. Marcas de tiempo de calidad Whisper."
      ctaButton="Sube audio o video"
      moreTools={[
        { href: '/es/timestamped-transcription', label: 'Transcripción con marcas de tiempo' },
        { href: '/es/youtube-to-text',           label: 'YouTube a Texto' },
        { href: '/es/transcribe-video-to-text',  label: 'Video a Texto' },
        { href: '/es/transcribe-audio-to-text',  label: 'Audio a Texto' },
      ]}
    />
  )
}