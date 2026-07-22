import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/sermon-transcription',
  'fr': 'https://mictoo.com/fr/sermon-transcription',
  'de': 'https://mictoo.com/de/sermon-transcription',
  'es': 'https://mictoo.com/es/sermon-transcription',
  'ru': 'https://mictoo.com/ru/sermon-transcription',
  'it': 'https://mictoo.com/it/sermon-transcription',
  'pt': 'https://mictoo.com/pt/sermon-transcription',
  'pl': 'https://mictoo.com/pl/sermon-transcription',
  'ja': 'https://mictoo.com/ja/sermon-transcription',
  'ko': 'https://mictoo.com/ko/sermon-transcription',
  'x-default': 'https://mictoo.com/sermon-transcription',
}

export const metadata = {
  title: 'Transcripción de Sermones para Servicios y Estudio | Mictoo',
  description:
    'Sube una grabación de un sermón o servicio y obtén texto buscable, marcas de tiempo, un resumen de IA y archivos de exportación.',
  alternates: {
    canonical: 'https://mictoo.com/es/sermon-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: 'Transcripción de Sermones: Gratis | Mictoo',
    description: 'Sube tu grabación de servicio, obtén una transcripción limpia.',
    url: 'https://mictoo.com/es/sermon-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transcripción de Sermones',
    description: 'Transcripciones gratuitas para iglesias y estudio.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function EsSermonTranscriptionPage() {
  return (
    <UseCaseLayout
      locale="es"
      badge="Iglesias · Pastores · Estudio · Gratis"
      h1First="Transcripción de Sermones"
      h1Second="Transcripción gratuita para servicios y estudio"
      subtitle="Sube una grabación de un servicio dominical, enseñanza de entre semana o sesión de estudio bíblico. Obtén una transcripción limpia con marcas de tiempo para el sitio web de la iglesia, notas de estudio y notas de episodios de podcast."
      currentHref="/es/sermon-transcription"

      platforms={[
        { name: 'SermonAudio',   iconKey: 'broadcast', brandBg: '#B91C1C' },
        { name: 'ProPresenter',  iconKey: 'monitor',   brandBg: '#0EA5E9' },
        { name: 'YouTube Live',  iconKey: 'broadcast', brandBg: '#FF0000' },
        { name: 'Facebook Live', iconKey: 'broadcast', brandBg: '#1877F2' },
        { name: 'Zoom',          iconKey: 'videoCameraFill', brandBg: '#2D8CFF', href: '/es/zoom-transcription' },
        { name: 'Church stream', iconKey: 'broadcast', brandBg: '#6B21A8' },
      ]}

      howItWorksTitle="Cómo funciona la transcripción de sermones"
      steps={[
        {
          icon: 'folder',
          title: 'Exporta la grabación del servicio',
          desc: 'MP4 de la transmisión en vivo del domingo, WAV de la mesa de sonido del santuario o el MP3 del podcast que ya publicas.',
        },
        {
          icon: 'upload',
          title: 'Suelta el archivo aquí',
          desc: 'MP3, MP4, WAV, M4A funcionan todos. Los servicios largos se benefician del auto-dividido al iniciar sesión.',
        },
        {
          icon: 'editPen',
          title: 'Transcripción para el sitio web',
          desc: 'Texto limpio listo para el sitio web de la iglesia, notas de estudio, descripción del podcast y archivo buscable.',
        },
      ]}

      exampleTitle="Ejemplo de transcripción de sermón"
      exampleFileName="sunday-service-jan-14.mp3"
      exampleDurationLabel="38:56"
      exampleLines={[
        { t: '0:00',  line: 'Buenos días iglesia. Por favor, volved conmigo al Evangelio de Mateo, capítulo cinco, versículo tres.' },
        { t: '0:12',  line: 'Esta mañana comenzamos una nueva serie sobre lo que Jesús llamó la vida bendita, las Bienaventuranzas.' },
        { t: '0:24',  line: 'Bienaventurados los pobres en espíritu, porque de ellos es el reino de los cielos. Ese es nuestro texto esta semana.' },
        { t: '0:38',  line: 'La palabra que Jesús usa aquí para bendecido no significa feliz en un sentido superficial o circunstancial.' },
        { t: '0:51',  line: 'Significa estar profundamente, fundamentalmente contento por tu relación con Dios, independientemente de las circunstancias.' },
        { t: '1:04',  line: 'Y ser pobre en espíritu no se trata de pobreza material. Es una postura de dependencia de Dios.' },
        { t: '1:18',  line: 'Es saber que lo que sea que construyas, lo que sea que logres, descansa en última instancia en la gracia, no en el mérito.' },
      ]}
      summaryPoints={[
        'Nueva serie sobre las Bienaventuranzas (Mateo 5).',
        'Enfoque: "Bienaventurados los pobres en espíritu."',
        'Bienaventurado = profundo contento a través de la relación con Dios.',
        'Pobre en espíritu = postura de dependencia, no pobreza material.',
      ]}
      actionItems={[
        'Publicar la transcripción en el sitio web de la iglesia',
        'Cortar un clip de 60 segundos para redes sociales',
        'Incluir en la guía de estudio semanal',
      ]}

      whyTitle="Por qué Mictoo para la transcripción de sermones"
      whyCards={[
        {
          icon: 'search',
          title: 'Archivo de sermones buscable',
          desc: 'Publica transcripciones en el sitio de la iglesia. Los congregantes encuentran enseñanzas por tema o versículo, meses o años después.',
        },
        {
          icon: 'sparkles',
          title: 'Notas de estudio y guías para grupos pequeños',
          desc: 'El resumen de IA es el punto de partida para la guía de estudio semanal o preguntas de discusión para grupos pequeños.',
        },
        {
          icon: 'clip',
          title: 'Subtítulos para la repetición de la transmisión en vivo',
          desc: 'SRT para la versión de video de YouTube o Facebook. Accesibilidad para los miembros con problemas auditivos.',
        },
        {
          icon: 'globe',
          title: 'Traduce para congregaciones multilingües',
          desc: 'Sermón en inglés pero parte de la congregación prefiere español o coreano. Traducción con un clic.',
        },
      ]}

      scenariosTitle="Escenarios comunes de sermones"
      scenarios={[
        { icon: 'church',    title: 'Servicio dominical' },
        { icon: 'book',      title: 'Estudio bíblico' },
        { icon: 'chat',      title: 'Grupo pequeño' },
        { icon: 'sparkles',  title: 'Devocional' },
        { icon: 'globe',     title: 'Misiones' },
        { icon: 'headset',   title: 'Podcast' },
      ]}

      tipsTitle="Consejos para grabaciones de sermones"
      tips={[
        'WAV o M4A de la mesa de sonido proporciona una entrada más limpia que el micrófono de la sala.',
        'Para servicios largos de más de 60 MB, inicia sesión para auto-dividir.',
        'Para congregaciones con términos scripturales pesados, revisa palabras clave.',
        'Incluye el título del sermón en el nombre del archivo para ordenar el archivo.',
      ]}

      guidesTitle="Herramientas relacionadas"
      guides={[
        { href: '/es/transcribe-mp3-to-text',    icon: 'file',  title: 'Formato MP3',        desc: 'Exportación amigable para podcasts' },
        { href: '/es/wav-to-text',               icon: 'file',  title: 'Formato WAV',        desc: 'Grabación de mesa de sonido' },
        { href: '/es/lecture-transcription',     icon: 'book',  title: 'Transcripción de Clase / Estudio',   desc: 'Contenido con mucho contenido de enseñanza' },
        { href: '/es/free-srt-generator',        icon: 'file',  title: 'Subtítulos SRT',      desc: 'Repetición de transmisión en vivo' },
      ]}

      faq={[
        {
          q: '¿Puedo transcribir una grabación de transmisión en vivo del domingo?',
          a: 'Sí. Descarga el MP4 de YouTube Live, Facebook Live o tu proveedor de transmisión de la iglesia y súbelo aquí. El video se descompone automáticamente en el servidor.',
        },
        {
          q: '¿Mictoo maneja referencias scripturales y términos teológicos con precisión?',
          a: 'Whisper large-v3 maneja bien el vocabulario común de las escrituras en inglés y teológico. Para nombres propios inusuales (transliteraciones más antiguas, términos de traducción específicos), revisa después de la transcripción.',
        },
        {
          q: '¿Es Mictoo gratis para iglesias?',
          a: 'Sí. Gratis por archivo hasta el límite de tamaño. Sin nivel o licencia específica para iglesias.',
        },
        {
          q: 'Mi grabación de servicio es mayor de 60 MB. ¿Qué hago ahora?',
          a: 'Inicia sesión para auto-dividir (hasta aproximadamente 3 horas). O reduce la calidad: ffmpeg -i service.mp3 -b:a 64k -ac 1 out.mp3. La misma precisión, 3-5 veces más pequeño.',
        },
        {
          q: '¿Puedo obtener subtítulos para la repetición de la transmisión en vivo?',
          a: 'Sí. Descarga SRT o VTT después de la transcripción. Las marcas de tiempo se alinean con la grabación original para YouTube, Facebook o tu alojamiento de video.',
        },
        {
          q: '¿Puedo traducir el sermón para el equipo de misiones?',
          a: 'Sí. Elige un idioma objetivo y haz clic en Traducir. Útil para congregaciones multilingües, misiones y ministerio de diáspora.',
        },
        {
          q: '¿Se guardan las grabaciones en sus servidores?',
          a: 'No. El audio se transmite al proveedor de transcripción, se procesa una vez y se elimina. Solo la transcripción persiste en las cuentas con sesión iniciada.',
        },
      ]}

      ctaHeadline="Convierte cada sermón en un recurso buscable"
      ctaSubtitle="Transcripción para el sitio web, subtítulos para la repetición, notas para grupos de estudio."
      ctaButton="Sube un sermón"

      relatedLinks={[
        { href: '/es/lecture-transcription',     label: 'Transcripción de Clase' },
        { href: '/es/podcast-transcription',     label: 'Transcripción de Podcast' },
        { href: '/es/webinar-transcription',     label: 'Transcripción de Webinar' },
        { href: '/es/free-srt-generator',        label: 'Generador de SRT Gratis' },
        { href: '/es/interview-transcription',   label: 'Transcripción de Entrevista' },
      ]}
    />
  )
}