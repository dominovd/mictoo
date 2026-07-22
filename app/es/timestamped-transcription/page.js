import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/timestamped-transcription',
  'fr': 'https://mictoo.com/fr/timestamped-transcription',
  'de': 'https://mictoo.com/de/timestamped-transcription',
  'es': 'https://mictoo.com/es/timestamped-transcription',
  'ru': 'https://mictoo.com/ru/timestamped-transcription',
  'it': 'https://mictoo.com/it/timestamped-transcription',
  'pt': 'https://mictoo.com/pt/timestamped-transcription',
  'pl': 'https://mictoo.com/pl/timestamped-transcription',
  'ja': 'https://mictoo.com/ja/timestamped-transcription',
  'ko': 'https://mictoo.com/ko/timestamped-transcription',
  'x-default': 'https://mictoo.com/timestamped-transcription',
}

export const metadata = {
  title: 'Transcripción con marcas de tiempo: Generador de transcripciones con códigos de tiempo gratuitos | Mictoo',
  description:
    'Transcripción con marcas de tiempo gratuita con códigos de tiempo a nivel de segmento para audio o video. Útil para periodismo, investigación, podcasting y edición de video.',
  alternates: {
    canonical: 'https://mictoo.com/es/timestamped-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: 'Transcripción con marcas de tiempo: Generador de transcripciones con códigos de tiempo gratuitos | Mictoo',
    description: 'Marcas de tiempo a nivel de oración para cualquier audio o video.',
    url: 'https://mictoo.com/es/timestamped-transcription',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transcripción con marcas de tiempo: Gratis',
    description: 'Transcripciones con códigos de tiempo para periodismo, investigación, edición.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function EsTimestampedTranscriptionPage() {
  return (
    <ConverterPageLayout
      locale="es"
      mode="upload" currentHref="/es/timestamped-transcription"
      badge="Con marcas de tiempo · Audio o video · Gratis"
      h1First="Transcripción con marcas de tiempo"
      h1Second="Transcripciones con códigos de tiempo para periodismo, investigación, edición"
      subtitle="Sube audio o video y obtén una transcripción con marcas de tiempo por segmento. Haz clic en cualquier marca de tiempo para saltar a ese momento en el reproductor de audio. Gratis, sin registro."
      stepsTitle="Cómo funciona la transcripción con marcas de tiempo"
      steps={[
        { icon: 'upload',   title: 'Suelta audio o video',       desc: 'MP3, MP4, WAV, M4A, WEBM, FLAC y más. Hasta 25 MB de forma anónima o 180 MB con cuenta.' },
        { icon: 'waveform', title: 'Whisper marca segmentos', desc: 'Whisper large-v3 proporciona marcas de tiempo por segmento alineadas al audio original.' },
        { icon: 'download', title: 'Exportar con marcas de tiempo',      desc: 'TXT con marcas de tiempo en línea, SRT / VTT para subtítulos, DOCX para revisión.' },
      ]}
      whyTitle="¿Por qué usar Mictoo para transcripciones con marcas de tiempo?"
      whyCards={[
        { icon: 'clock',    title: 'Marcas de tiempo clicables',   desc: 'Cada marca de tiempo es clicable en la vista del lector. Salta a cualquier momento en el reproductor de audio.' },
        { icon: 'target',   title: 'Transcripción de calidad Whisper', desc: 'Whisper large-v3 añade puntuación y maneja muchos idiomas, acentos y tipos de grabación.' },
        { icon: 'captions', title: 'SRT + VTT incluidos',         desc: 'Las marcas de tiempo se trasladan a las exportaciones SRT y VTT para subtitulado de video.' },
        { icon: 'lock',     title: 'Archivos eliminados después',        desc: 'El audio subido se elimina después de la transcripción; la transcripción persiste solo en cuentas registradas.' },
      ]}
      scenariosTitle="Cuándo son útiles las transcripciones con marcas de tiempo"
      scenarios={[
        { icon: 'editPen',    title: 'Búsqueda de citas en periodismo' },
        { icon: 'target',     title: 'Citación en investigación UX' },
        { icon: 'video',      title: 'Lista de señales para edición de video' },
        { icon: 'headphones', title: 'Notas del programa de podcast' },
        { icon: 'archive',    title: 'Legal / descubrimiento' },
        { icon: 'waveform',   title: 'Marcado de audio' },
      ]}
      tipsTitle="Consejos para una salida de marcas de tiempo más limpia"
      tips={[
        'La vista del lector es mejor para navegación clicable.',
        'Para exportación SRT / VTT, las marcas de tiempo se alinean con la línea de tiempo del archivo original.',
        'Para grabaciones largas, inicia sesión para auto-dividir hasta aproximadamente 3 horas.',
        'La barra de búsqueda resalta coincidencias y muestra su marca de tiempo al instante.',
      ]}
      processTitle="Qué sucede durante la transcripción"
      processSteps={['Audio / video', 'Whisper large-v3', 'Texto con marcas de tiempo']}
      faq={[
        { q: '¿Qué granularidad tienen las marcas de tiempo?', a: 'Por segmento (aproximadamente por oración). Whisper produce nativamente marcas de tiempo a nivel de segmento alineadas al audio.' },
        { q: '¿Puedo hacer clic en una marca de tiempo para saltar en el audio?', a: 'Sí. En la vista del lector, cada marca de tiempo es clicable y mueve el reproductor de audio a ese momento.' },
        { q: '¿Es la herramienta gratuita?', a: 'Sí. Hasta 25 MB de forma anónima o 180 MB al iniciar sesión. Sin marca de agua y sin tarifa por minuto.' },
        { q: '¿Qué formatos de exportación son compatibles?', a: 'TXT (con marcas de tiempo en línea), SRT, VTT, DOCX. Los usuarios registrados también obtienen PDF y JSON con datos de marcas de tiempo estructurados.' },
        { q: '¿Identifican a los hablantes?', a: 'Aún no. Texto continuo con marcas de tiempo sin etiquetas de hablantes. La diarización está en la hoja de ruta Pro.' },
        { q: '¿Se mantienen las grabaciones en sus servidores?', a: 'No. El audio se transmite al proveedor de transcripción, se procesa una vez y se elimina. Las transcripciones persisten solo en cuentas registradas.' },
      ]}
      ctaHeadline="Obtén una transcripción con marcas de tiempo clicables"
      ctaSubtitle="Periodismo, investigación UX, edición de video, notas de programas de podcast. Gratis por archivo."
      ctaButton="Sube audio o video"
      moreTools={[
        { href: '/es/free-srt-generator',       label: 'Generador de SRT' },
        { href: '/es/youtube-to-text',          label: 'YouTube a Texto' },
        { href: '/es/transcribe-audio-to-text', label: 'Audio a Texto' },
        { href: '/es/transcribe-video-to-text', label: 'Video a Texto' },
      ]}
    />
  )
}