import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/webinar-transcription',
  'fr': 'https://mictoo.com/fr/webinar-transcription',
  'de': 'https://mictoo.com/de/webinar-transcription',
  'es': 'https://mictoo.com/es/webinar-transcription',
  'ru': 'https://mictoo.com/ru/webinar-transcription',
  'it': 'https://mictoo.com/it/webinar-transcription',
  'pt': 'https://mictoo.com/pt/webinar-transcription',
  'pl': 'https://mictoo.com/pl/webinar-transcription',
  'ja': 'https://mictoo.com/ja/webinar-transcription',
  'ko': 'https://mictoo.com/ko/webinar-transcription',
  'x-default': 'https://mictoo.com/webinar-transcription',
}

export const metadata = {
  title: 'Transcripción de Webinar con Resumen y Subtítulos | Mictoo',
  description:
    'Sube una grabación de webinar y obtén texto con marcas de tiempo, un resumen de IA y subtítulos SRT/VTT para la repetición.',
  alternates: {
    canonical: 'https://mictoo.com/es/webinar-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: 'Transcripción de Webinar: Gratis | Mictoo',
    description: 'Sube tu grabación de webinar, obtén una transcripción limpia.',
    url: 'https://mictoo.com/es/webinar-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transcripción de Webinar',
    description: 'Transcripción gratuita para cualquier plataforma de webinar.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function EsWebinarTranscriptionPage() {
  return (
    <UseCaseLayout
      locale="es"
      badge="Webinars · Formato largo · Gratis"
      h1First="Transcripción de Webinar"
      h1Second="Transcripción gratuita para cualquier grabación de webinar"
      subtitle="Sube desde Zoom Webinars, StreamYard, Demio, ON24, GoToWebinar o Restream. Obtén una transcripción completa, resumen de IA y subtítulos listos para la página de repetición bajo demanda."
      currentHref="/es/webinar-transcription"

      platforms={[
        { name: 'Zoom Webinar', iconKey: 'broadcast',       brandBg: '#2D8CFF', href: '/es/zoom-transcription' },
        { name: 'StreamYard',   iconKey: 'broadcast',       brandBg: '#6B21A8' },
        { name: 'Restream',     iconKey: 'broadcast',       brandBg: '#EC1E62' },
        { name: 'ON24',         iconKey: 'videoCameraFill', brandBg: '#3B82F6' },
        { name: 'Demio',        iconKey: 'videoCameraFill', brandBg: '#F97316' },
        { name: 'Livestorm',    iconKey: 'videoCameraFill', brandBg: '#DA1F5C' },
      ]}

      howItWorksTitle="Cómo funciona la transcripción de webinars"
      steps={[
        {
          icon: 'folder',
          title: 'Exporta la grabación del webinar',
          desc: 'La mayoría de las plataformas ofrecen una descarga en MP4 después del evento. Algunas también proporcionan audio en M4A.',
        },
        {
          icon: 'upload',
          title: 'Suelta el archivo aquí',
          desc: 'Los webinars largos (más de 60 minutos) se benefician del auto-split al iniciar sesión. Gratis hasta 25 MB anónimamente, 60 MB al iniciar sesión.',
        },
        {
          icon: 'editPen',
          title: 'Transcripción, resumen, subtítulos',
          desc: 'Transcripción con marcas de tiempo para la página de repetición, resumen de IA como resumen del blog, SRT para subtítulos en el video bajo demanda.',
        },
      ]}

      exampleTitle="Ejemplo de transcripción de webinar"
      exampleFileName="product-launch-webinar.mp4"
      exampleDurationLabel="1:04:22"
      exampleLines={[
        { t: '0:00',  line: 'Bienvenidos a todos, y gracias por unirse. Mi nombre es Sam y dirijo el marketing de producto en la empresa.' },
        { t: '0:12',  line: 'Hoy estamos lanzando oficialmente la versión cinco de la plataforma, y quiero mostrarles lo que hay de nuevo.' },
        { t: '0:25',  line: 'Tres cambios principales: informes reconstruidos, integraciones nativas con los diez principales CRM, y un nuevo modelo de precios.' },
        { t: '0:40',  line: 'Déjenme comenzar con los informes porque ese es el cambio que la mayoría de ustedes ha estado pidiendo durante dos años.' },
        { t: '0:52',  line: 'Los informes antiguos eran lentos, se rompían con grandes conjuntos de datos y eran difíciles de personalizar. Los tres problemas están solucionados.' },
        { t: '1:07',  line: 'Aquí hay una demostración en vivo del nuevo generador de informes. Mientras hago clic, presten atención a la rapidez con que se actualizan las vistas previas.' },
        { t: '1:22',  line: 'Cada campo es arrastrable, los filtros son apilables y puedes guardar cualquier informe como una plantilla compartida.' },
      ]}
      summaryPoints={[
        'Lanzamiento de la versión 5 con 3 cambios principales.',
        'Informes reconstruidos (soluciona velocidad, tamaño del conjunto de datos, personalización).',
        'Integraciones nativas con los 10 principales CRM.',
        'Nuevo modelo de precios.',
      ]}
      actionItems={[
        'Borrador de resumen del blog a partir de la transcripción',
        'Cortar clip de demostración para redes sociales',
        'Publicar repetición subtitulada en demanda',
      ]}

      whyTitle="Por qué elegir Mictoo para la transcripción de webinars"
      whyCards={[
        {
          icon: 'clip',
          title: 'Subtítulos SRT para la repetición',
          desc: 'Las marcas de tiempo se alinean con el video original. Suelta el SRT en tu reproductor de repetición bajo demanda o carga en YouTube.',
        },
        {
          icon: 'sparkles',
          title: 'Resumen de IA para el resumen del blog',
          desc: 'Convierte un webinar de 60 minutos en un resumen de 200 palabras. Un sólido primer borrador para el correo electrónico de seguimiento o publicación en el blog.',
        },
        {
          icon: 'search',
          title: 'Transcripción buscable en la página de destino',
          desc: 'Publica la transcripción en la página de destino bajo demanda. Los asistentes pueden escanear, mejora el SEO, nadie tiene que ver 60 minutos.',
        },
        {
          icon: 'globe',
          title: 'Traducción para asistentes internacionales',
          desc: 'Traducción con un clic a más de 50 idiomas para correos electrónicos de seguimiento y páginas de repetición no en inglés.',
        },
      ]}

      scenariosTitle="Escenarios comunes de webinars"
      scenarios={[
        { icon: 'broadcast', title: 'Lanzamiento de producto' },
        { icon: 'book',      title: 'Entrenamiento / academia' },
        { icon: 'briefcase', title: 'Habilitación de ventas' },
        { icon: 'target',    title: 'Educación del cliente' },
        { icon: 'users',     title: 'Sesión informativa para analistas' },
        { icon: 'globe',     title: 'Evento multilingüe' },
      ]}

      tipsTitle="Consejos para grabaciones de webinars"
      tips={[
        'Preferir exportación solo de audio cuando tu plataforma lo ofrezca.',
        'Para webinars de más de 60 minutos, inicia sesión para auto-split hasta 3 horas.',
        'Incluye el nombre del anfitrión en el archivo para que el encabezado de la transcripción mantenga el contexto.',
        'Extrae citas clave de la transcripción para clips sociales.',
      ]}

      guidesTitle="Herramientas relacionadas"
      guides={[
        { href: '/es/zoom-transcription',        icon: 'video', title: 'Zoom Webinar',      desc: 'Grabación en la nube MP4 / M4A' },
        { href: '/es/free-srt-generator',        icon: 'file',  title: 'Generador de SRT',     desc: 'Subtítulos de video bajo demanda' },
        { href: '/es/podcast-transcription',     icon: 'headset', title: 'Podcast',         desc: 'Reutiliza el audio del webinar' },
        { href: '/es/timestamped-transcription', icon: 'file',  title: 'Con marcas de tiempo',       desc: 'Exportación amigable para el lector' },
      ]}

      faq={[
        {
          q: '¿Con qué plataformas de webinar funciona Mictoo?',
          a: 'Con todas. Aceptamos cualquier archivo de audio o video independientemente de la plataforma. Zoom Webinars, StreamYard, Demio, Livestorm, ON24, GoToWebinar, Restream, Riverside Studio y más.',
        },
        {
          q: 'Mi grabación de webinar supera los 60 MB. ¿Qué hago?',
          a: 'Inicia sesión para auto-split (hasta aproximadamente 3 horas). O exporta solo audio desde la plataforma, o extrae audio: ffmpeg -i webinar.mp4 -vn -ac 1 -ar 16000 audio.m4a.',
        },
        {
          q: '¿Puedo publicar la transcripción en la página de repetición bajo demanda?',
          a: 'Sí. Copia la transcripción en el HTML de tu página de destino bajo demanda. Agrega contenido buscable, mejora el SEO, da a los asistentes que no pueden ver una forma de escanear.',
        },
        {
          q: '¿Puedo obtener subtítulos para el video grabado del webinar?',
          a: 'Sí. Descarga SRT o VTT después de la transcripción. Ambos funcionan con YouTube, Vimeo, Wistia, Descript y todos los reproductores de video modernos.',
        },
        {
          q: '¿Mictoo identifica a los presentadores frente a los oradores de preguntas y respuestas?',
          a: 'No. La transcripción actual es texto continuo con marcas de tiempo por línea y sin etiquetas automáticas de oradores.',
        },
        {
          q: '¿Puedo traducir la transcripción del webinar?',
          a: 'Sí. Elige un idioma de destino y haz clic en Traducir. Útil para asistentes internacionales o páginas de repetición no en inglés.',
        },
        {
          q: '¿Se mantienen las grabaciones de webinars en sus servidores?',
          a: 'No. El archivo se transmite al proveedor de transcripción, se procesa una vez y se elimina. Solo la transcripción persiste en cuentas con sesión iniciada.',
        },
      ]}

      ctaHeadline="Convierte tu webinar en un activo listo para la repetición"
      ctaSubtitle="Transcripción completa, subtítulos SRT, resumen de IA y contenido buscable en la página de destino."
      ctaButton="Sube una grabación de webinar"

      relatedLinks={[
        { href: '/es/meeting-transcription',   label: 'Transcripción de Reuniones' },
        { href: '/es/zoom-transcription',      label: 'Transcripción de Zoom' },
        { href: '/es/podcast-transcription',   label: 'Transcripción de Podcast' },
        { href: '/es/lecture-transcription',   label: 'Transcripción de Conferencias' },
        { href: '/es/free-srt-generator',      label: 'Generador de SRT Gratuito' },
      ]}
    />
  )
}