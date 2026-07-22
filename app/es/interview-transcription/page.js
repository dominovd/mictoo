import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/interview-transcription',
  'fr': 'https://mictoo.com/fr/interview-transcription',
  'de': 'https://mictoo.com/de/interview-transcription',
  'es': 'https://mictoo.com/es/interview-transcription',
  'ru': 'https://mictoo.com/ru/interview-transcription',
  'it': 'https://mictoo.com/it/interview-transcription',
  'pt': 'https://mictoo.com/pt/interview-transcription',
  'pl': 'https://mictoo.com/pl/interview-transcription',
  'ja': 'https://mictoo.com/ja/interview-transcription',
  'ko': 'https://mictoo.com/ko/interview-transcription',
  'x-default': 'https://mictoo.com/interview-transcription',
}

export const metadata = {
  title: 'Transcripción de Entrevistas para Audio y Video | Mictoo',
  description:
    'Sube una grabación de entrevista y obtén texto con marcas de tiempo, un resumen de IA y exportaciones para informes, investigación o revisión.',
  alternates: {
    canonical: 'https://mictoo.com/es/interview-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: 'Herramienta de Transcripción de Entrevistas Gratuita | Mictoo',
    description: 'Transcripción de entrevistas gratuita con IA. Sube audio o video, obtén una transcripción limpia en minutos.',
    url: 'https://mictoo.com/es/interview-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transcripción de Entrevistas Gratuita',
    description: 'Sube audio o video, obtén una transcripción limpia en minutos.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function EsInterviewTranscriptionPage() {
  return (
    <UseCaseLayout
      locale="es"
      badge="Periodistas · Investigadores · UX · Gratis"
      h1First="Transcripción de Entrevistas"
      h1Second="Herramienta gratuita para periodistas, investigadores y equipos de UX"
      subtitle="Sube una entrevista 1:1 o de panel desde cualquier grabadora o aplicación de reuniones. Obtén una transcripción limpia con marcas de tiempo, un resumen de IA y exportaciones listas para el artículo, documento o repositorio de investigación."
      currentHref="/es/interview-transcription"

      platforms={[
        { name: 'Zoom',        iconKey: 'videoCameraFill', brandBg: '#2D8CFF', href: '/es/zoom-transcription' },
        { name: 'Google Meet', iconKey: 'videoCameraFill', brandBg: '#00832D', href: '/es/google-meet-transcription' },
        { name: 'MS Teams',    iconKey: 'videoCameraFill', brandBg: '#4B53BC', href: '/es/teams-meeting-transcription' },
        { name: 'Riverside',   iconKey: 'waveMic',         brandBg: '#4B2AF7' },
        { name: 'Voice Memo',  iconKey: 'mic',             brandBg: '#F97316', href: '/es/voice-memo-to-text' },
        { name: 'Phone call',  iconKey: 'phone',           brandBg: '#0EA5A4' },
      ]}

      howItWorksTitle="Cómo funciona la transcripción de entrevistas"
      steps={[
        {
          icon: 'folder',
          title: 'Exporta tu entrevista',
          desc: 'Cualquier grabación servirá. Nota de voz, grabación en la nube de Zoom, pista de audio de Riverside, exportación de llamada telefónica.',
        },
        {
          icon: 'upload',
          title: 'Suelta el archivo aquí',
          desc: 'Sube MP3, MP4, M4A, WAV, MOV, o cualquier formato de audio y video común de hasta 60 MB.',
        },
        {
          icon: 'editPen',
          title: 'Transcripción, citas, exportaciones',
          desc: 'Transcripción con marcas de tiempo, resumen de IA, exportaciones en TXT / SRT / VTT / DOCX. Listo para el artículo o documento de investigación.',
        },
      ]}

      exampleTitle="Ejemplo de transcripción de entrevista"
      exampleFileName="researcher-interview.m4a"
      exampleDurationLabel="42:18"
      exampleLines={[
        { t: '0:00',  line: 'Gracias por tomarte el tiempo. ¿Podrías empezar describiendo tu rol y cuánto tiempo llevas en él?' },
        { t: '0:08',  line: 'Claro. Dirijo el equipo de análisis en una fintech de tamaño medio, y he estado en este rol durante un poco más de dos años.' },
        { t: '0:20',  line: 'Antes de eso, estuve en un banco más grande, trabajando principalmente en la retención de clientes y modelado del valor de vida.' },
        { t: '0:32',  line: 'Así que el cambio de un gran banco a una fintech fue principalmente sobre el ritmo y la libertad para probar cosas nuevas.' },
        { t: '0:44',  line: 'Y las herramientas han avanzado mucho. Lo que antes tomaba una semana en la antigua infraestructura ahora toma una tarde.' },
        { t: '0:56',  line: '¿Puedes darme un ejemplo de ese tipo de cambio? Algo concreto que no habrías intentado antes.' },
        { t: '1:04',  line: 'Lo obvio son los experimentos de cohortes en tiempo real. Enviamos una idea por la mañana y vemos datos significativos esa misma tarde.' },
      ]}
      summaryPoints={[
        'Líder de análisis en fintech, más de 2 años en el rol.',
        'Rol anterior en un gran banco centrado en el modelado de retención.',
        'Cambio a fintech impulsado por el ritmo y la libertad de experimentar.',
        'Experimentos de cohortes en tiempo real posibles con herramientas modernas.',
      ]}
      actionItems={[
        'Hacer seguimiento sobre la comparación de modelado de retención',
        'Pedir un ejemplo de experimento de cohortes en tiempo real',
        'Conseguir una introducción al contacto del empleador anterior',
      ]}

      whyTitle="Por qué Mictoo para la transcripción de entrevistas"
      whyCards={[
        {
          icon: 'target',
          title: 'Revisa nombres y sustantivos propios',
          desc: 'Usa marcas de tiempo para verificar nombres, ciudades, organizaciones y términos especializados contra la grabación original de la entrevista.',
        },
        {
          icon: 'sparkles',
          title: 'Resumen de IA y extracción de citas',
          desc: 'El resumen de IA es un sólido primer borrador para la lista de citas, el memorando de investigación o la introducción del artículo.',
        },
        {
          icon: 'lock',
          title: 'Modelo de procesamiento claro',
          desc: 'La grabación se envía a un proveedor de transcripción para su procesamiento y no es retenida por Mictoo después de completar el trabajo.',
        },
        {
          icon: 'globe',
          title: 'Traduce para trabajo multilingüe',
          desc: 'Entrevista realizada en español, alemán o japonés. Traduce a tu idioma de trabajo con un clic.',
        },
      ]}

      scenariosTitle="Escenarios comunes de entrevistas"
      scenarios={[
        { icon: 'chat',      title: 'Periodismo' },
        { icon: 'search',    title: 'Investigación UX' },
        { icon: 'users',     title: 'Reclutamiento' },
        { icon: 'book',      title: 'Historia oral' },
        { icon: 'briefcase', title: 'Declaración legal' },
        { icon: 'globe',     title: 'Multilingüe' },
      ]}

      tipsTitle="Consejos para transcripciones de entrevistas más limpias"
      tips={[
        'Graba con un micrófono de solapa o de mano cerca del sujeto.',
        'Pide al sujeto que pause brevemente entre respuestas largas.',
        'Establece el idioma explícitamente para acentos pesados o no ingleses.',
        'Revisa nombres y términos inusuales después de la transcripción.',
      ]}

      guidesTitle="Elige la guía del grabador adecuado"
      guides={[
        { href: '/es/zoom-transcription',        icon: 'video', title: 'Entrevista en Zoom',    desc: 'Grabación en la nube MP4 o M4A' },
        { href: '/es/google-meet-transcription', icon: 'video', title: 'Entrevista en Meet',    desc: 'Descarga de grabación desde Drive' },
        { href: '/es/voice-memo-to-text',        icon: 'mic',   title: 'Nota de voz de iPhone', desc: 'Cualquier grabación de voz en M4A' },
        { href: '/es/podcast-transcription',     icon: 'headset', title: 'Estilo de Podcast',   desc: 'Riverside, Zencastr, Cleanfeed' },
      ]}

      faq={[
        {
          q: '¿Qué formatos de archivo acepta Mictoo para entrevistas?',
          a: 'MP3, MP4, M4A, WAV, MOV, WEBM, FLAC, OGG, AAC y la mayoría de otros formatos de audio y video comunes. Los archivos de video se demuxean automáticamente del lado del servidor.',
        },
        {
          q: '¿Mictoo identifica quién está hablando?',
          a: 'No. La transcripción actual es texto continuo con marcas de tiempo por línea y sin etiquetas automáticas de "Entrevistador / Sujeto".',
        },
        {
          q: '¿Es gratuita la transcripción de entrevistas?',
          a: 'Sí. Gratis por archivo hasta 25 MB de forma anónima, 60 MB si estás registrado. Las entrevistas más largas pueden dividirse automáticamente para los usuarios registrados.',
        },
        {
          q: '¿Puedo redactar nombres antes de publicar la transcripción?',
          a: 'Sí. Cambia a modo Editor después de la transcripción para editar cualquier palabra o línea. Guarda la versión editada y exporta.',
        },
        {
          q: '¿Se mantienen las grabaciones en sus servidores?',
          a: 'No. Los flujos de audio se envían al proveedor de transcripción, se procesan una vez y se eliminan. Las transcripciones solo se almacenan si inicias sesión.',
        },
        {
          q: '¿Puedo traducir la transcripción de la entrevista?',
          a: 'Sí. Elige un idioma objetivo y haz clic en Traducir. Útil para investigación de campo multilingüe o informes multilingües.',
        },
        {
          q: '¿Qué formatos de exportación están disponibles?',
          a: 'TXT, SRT, VTT, DOCX. Los usuarios registrados también obtienen PDF y JSON. Las marcas de tiempo en SRT y VTT se alinean con la grabación original.',
        },
      ]}

      ctaHeadline="Convierte entrevistas en texto publicable"
      ctaSubtitle="Suelta tu grabación y obtén una transcripción, resumen y exportaciones listas para el artículo o repositorio de investigación."
      ctaButton="Sube una entrevista"

      relatedLinks={[
        { href: '/es/meeting-transcription',      label: 'Transcripción de Reuniones' },
        { href: '/es/podcast-transcription',      label: 'Transcripción de Podcast' },
        { href: '/es/voice-memo-to-text',         label: 'Nota de Voz a Texto' },
        { href: '/es/business-transcription',     label: 'Transcripción Empresarial' },
        { href: '/es/lecture-transcription',      label: 'Transcripción de Conferencias' },
      ]}
    />
  )
}