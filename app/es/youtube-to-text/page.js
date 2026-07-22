import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/youtube-to-text',
  'fr': 'https://mictoo.com/fr/youtube-to-text',
  'de': 'https://mictoo.com/de/youtube-to-text',
  'es': 'https://mictoo.com/es/youtube-to-text',
  'ru': 'https://mictoo.com/ru/youtube-to-text',
  'it': 'https://mictoo.com/it/youtube-to-text',
  'pt': 'https://mictoo.com/pt/youtube-to-text',
  'pl': 'https://mictoo.com/pl/youtube-to-text',
  'ja': 'https://mictoo.com/ja/youtube-to-text',
  'ko': 'https://mictoo.com/ko/youtube-to-text',
  'x-default': 'https://mictoo.com/youtube-to-text',
}

export const metadata = {
  title: 'YouTube a Texto: Transcripción, Resumen y SRT | Mictoo',
  description:
    'Pega una URL de YouTube para usar los subtítulos disponibles, o sube audio para una nueva transcripción con marcas de tiempo, resumen y exportación SRT.',
  alternates: {
    canonical: 'https://mictoo.com/es/youtube-to-text',
    languages: LANGS,
  },
  openGraph: {
    title: 'YouTube a Texto: Transcripción Gratuita de Videos de YouTube | Mictoo',
    description: 'Pega una URL de YouTube, obtén una transcripción limpia con marcas de tiempo, resumen y subtítulos SRT.',
    url: 'https://mictoo.com/es/youtube-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YouTube a Texto: Transcripción Gratuita de YouTube',
    description: 'Pega una URL de YouTube o sube audio, obtén una transcripción.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function EsYouTubeToTextPage() {
  return (
    <UseCaseLayout
      locale="es"
      badge="URL de YouTube o subir · Gratis · Sin registro"
      h1First="YouTube a Texto"
      h1Second="Pega una URL, obtén una transcripción limpia"
      subtitle="Pega un enlace de YouTube para usar subtítulos que ya están disponibles, o sube audio para crear una nueva transcripción de Whisper. Revisa el texto, genera un resumen y exporta subtítulos SRT."
      currentHref="/es/youtube-to-text"
      enableYouTubeUrl

      platforms={[
        { name: 'YouTube',      iconKey: 'videoCameraFill', brandBg: '#FF0000' },
        { name: 'YouTube Live', iconKey: 'broadcast',       brandBg: '#B91C1C' },
        { name: 'YT Shorts',    iconKey: 'videoCameraFill', brandBg: '#DC2626' },
        { name: 'YT Music',     iconKey: 'soundwave',       brandBg: '#7F1D1D' },
        { name: 'YT Premium',   iconKey: 'videoCameraFill', brandBg: '#0F172A' },
        { name: 'Video hub',    iconKey: 'videoCameraFill', brandBg: '#2D8CFF', href: '/es/transcribe-video-to-text' },
      ]}

      howItWorksTitle="Cómo funciona la transcripción de YouTube"
      steps={[
        {
          icon: 'folder',
          title: 'Pega una URL o sube audio',
          desc: 'Ruta rápida: pega el enlace de YouTube, obtenemos los subtítulos existentes. Ruta de Whisper: sube el audio para una nueva transcripción.',
        },
        {
          icon: 'upload',
          title: 'Subtítulos o transcripción nueva',
          desc: 'La ruta de URL devuelve los subtítulos disponibles. La ruta de subida ejecuta Whisper large-v3; el tiempo de procesamiento depende de la duración y tamaño del medio.',
        },
        {
          icon: 'editPen',
          title: 'Resumen, SRT, traducción',
          desc: 'Resumen de IA junto a la transcripción. Descarga SRT para el video, traduce a más de 50 idiomas, exporta como DOCX o PDF.',
        },
      ]}

      exampleTitle="Ejemplo de transcripción de YouTube"
      exampleFileName="youtube-video.mp4"
      exampleDurationLabel="12:34"
      exampleLines={[
        { t: '0:00',  line: 'Bienvenido de nuevo al canal. Hoy estamos viendo los tres cambios más grandes en la analítica de productos en 2026.' },
        { t: '0:12',  line: 'Cambio uno, la reproducción de sesiones es básicamente un requisito ahora. Cada herramienta seria lo incluye en el nivel base.' },
        { t: '0:24',  line: 'Cambio dos, el cambio de paneles SQL personalizados a consultas en lenguaje natural está ocurriendo rápidamente.' },
        { t: '0:37',  line: 'Cambio tres, las herramientas nativas de almacén están reemplazando la antigua pila de analítica basada en eventos.' },
        { t: '0:50',  line: 'Déjame explicar lo que significa cada cambio para las herramientas que deberías evaluar este año.' },
        { t: '1:02',  line: 'Primero, la reproducción de sesiones. Si tu herramienta actual cobra extra por ello, es una señal para buscar otras opciones.' },
        { t: '1:14',  line: 'Las herramientas modernas agrupan la reproducción con eventos, embudos y cohortes como un solo producto, no como un complemento de pago.' },
      ]}
      summaryPoints={[
        '3 cambios más grandes en la analítica de productos en 2026.',
        'La reproducción de sesiones es ahora un requisito en herramientas serias.',
        'Cambio de paneles SQL a consultas en lenguaje natural.',
        'Herramientas nativas de almacén reemplazando pilas basadas en eventos.',
      ]}
      actionItems={[
        'Evalúa la herramienta actual para reproducción agrupada',
        'Prueba 1 herramienta de analítica nativa de almacén este trimestre',
        'Redacta un resumen en el blog de los 3 cambios',
      ]}

      whyTitle="Por qué Mictoo para la transcripción de YouTube"
      whyCards={[
        {
          icon: 'target',
          title: 'Elige la ruta de transcripción correcta',
          desc: 'Usa subtítulos existentes para rapidez, o sube audio cuando quieras una nueva transcripción para revisar nombres, puntuación y términos especializados.',
        },
        {
          icon: 'clip',
          title: 'SRT para la descripción del video',
          desc: 'Descarga SRT y vuelve a subir a YouTube Studio para subtítulos editados, o úsalo en otro lugar de tu flujo de trabajo.',
        },
        {
          icon: 'sparkles',
          title: 'Resumen de IA para notas de episodios',
          desc: 'Borrador sólido para la descripción del video, resumen del blog y títulos de capítulos. Convierte un podcast de 60 minutos en 200 palabras.',
        },
        {
          icon: 'globe',
          title: 'Traduce subtítulos a más de 50 idiomas',
          desc: '¿Audiencia internacional? Traduce la transcripción y luego vuelve a subir como SRT traducido a tu video.',
        },
      ]}

      scenariosTitle="Escenarios comunes de YouTube"
      scenarios={[
        { icon: 'search',    title: 'Investigar un video' },
        { icon: 'editPen',   title: 'Resumen del blog' },
        { icon: 'clip',      title: 'Subtítulos SRT' },
        { icon: 'chat',      title: 'Cita' },
        { icon: 'globe',     title: 'Traducir subtítulos' },
        { icon: 'headset',   title: 'Podcast en YT' },
      ]}

      tipsTitle="Consejos para transcripciones de YouTube"
      tips={[
        'El camino más rápido es la URL cuando el video ya tiene subtítulos.',
        'Para videos técnicos o en otros idiomas, prefiere la ruta de subida de audio.',
        'Flujos muy largos: descarga el audio y divide antes de subir.',
        'Para tus propios videos, sube el audio original para mejor precisión.',
      ]}

      guidesTitle="Herramientas relacionadas"
      guides={[
        { href: '/es/transcribe-video-to-text',      icon: 'video', title: 'Video a Texto',       desc: 'MP4, MOV, WebM no de YouTube' },
        { href: '/es/transcribe-audio-to-text',      icon: 'file',  title: 'Audio a Texto',       desc: 'Cualquier formato de audio' },
        { href: '/es/free-srt-generator',            icon: 'file',  title: 'Generador de SRT',       desc: 'Exportación centrada en subtítulos' },
        { href: '/es/how-to-download-youtube-video', icon: 'video', title: 'Descargar de YT',    desc: 'Guía: obtener el audio' },
      ]}

      faq={[
        {
          q: '¿Puedo simplemente pegar una URL de YouTube?',
          a: 'Sí. Cuando el video tiene subtítulos (subidos por el creador o generados automáticamente), los obtenemos en segundos. Si no hay subtítulos, sube el archivo de audio en su lugar para una transcripción completa de Whisper.',
        },
        {
          q: '¿Cómo difiere la ruta de subida de los subtítulos de YouTube?',
          a: 'La ruta de URL devuelve subtítulos ya disponibles para el video. La ruta de subida crea una transcripción separada de Whisper a partir del audio. Cualquiera de las versiones puede contener errores, así que revisa nombres, números y tiempos antes de publicar.',
        },
        {
          q: '¿Cómo obtengo el audio de un video de YouTube?',
          a: 'Usa una herramienta de navegador o extractor de escritorio de tu elección, luego sube el MP3 o M4A. No alojamos una herramienta de descarga por razones de copyright, pero consulta nuestra guía "Cómo descargar un video de YouTube" para opciones comunes.',
        },
        {
          q: '¿Mictoo transcribe videos de YouTube en otros idiomas?',
          a: 'Sí. Whisper large-v3 soporta más de 50 idiomas con detección automática. Para clips cortos o acentos inusuales, establece el idioma explícitamente en el menú desplegable.',
        },
        {
          q: '¿Puedo obtener un resumen de IA del video?',
          a: 'Sí. El resumen de IA aparece junto a la transcripción automáticamente. Borrador sólido para una descripción de video, resumen de blog o notas de episodios.',
        },
        {
          q: '¿Puedo descargar SRT para añadir subtítulos de nuevo a mi video?',
          a: 'Sí. Descarga SRT o VTT después de la transcripción. Ambos formatos funcionan con YouTube Studio, Premiere, DaVinci, Final Cut, CapCut y la mayoría de los reproductores modernos.',
        },
        {
          q: '¿Puedo traducir una transcripción de YouTube?',
          a: 'Sí. Elige un idioma de destino y haz clic en Traducir. Útil para audiencias internacionales o páginas de reproducción en otros idiomas.',
        },
        {
          q: '¿Se mantiene mis datos de YouTube en sus servidores?',
          a: 'No. Los subtítulos obtenidos y el audio subido se procesan una vez y se eliminan. Solo la transcripción persiste si inicias sesión y la guardas en el historial.',
        },
      ]}

      ctaHeadline="Convierte cualquier video de YouTube en texto"
      ctaSubtitle="Pega una URL para el camino rápido, sube audio para el camino completo de Whisper. Gratis por video."
      ctaButton="Pega una URL de YouTube o sube"

      relatedLinks={[
        { href: '/es/transcribe-video-to-text', label: 'Video a Texto' },
        { href: '/es/podcast-transcription',    label: 'Transcripción de Podcast' },
        { href: '/es/lecture-transcription',    label: 'Transcripción de Clase' },
        { href: '/es/free-srt-generator',       label: 'Generador de SRT Gratis' },
        { href: '/es/webinar-transcription',    label: 'Transcripción de Webinar' },
      ]}
    />
  )
}