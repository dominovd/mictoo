import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/business-transcription',
  'fr': 'https://mictoo.com/fr/business-transcription',
  'de': 'https://mictoo.com/de/business-transcription',
  'es': 'https://mictoo.com/es/business-transcription',
  'ru': 'https://mictoo.com/ru/business-transcription',
  'it': 'https://mictoo.com/it/business-transcription',
  'pt': 'https://mictoo.com/pt/business-transcription',
  'pl': 'https://mictoo.com/pl/business-transcription',
  'ja': 'https://mictoo.com/ja/business-transcription',
  'ko': 'https://mictoo.com/ko/business-transcription',
  'x-default': 'https://mictoo.com/business-transcription',
}

export const metadata = {
  title: 'Transcripción de Reuniones Empresariales y Resumen AI | Mictoo',
  description:
    'Convierte grabaciones internas autorizadas de reuniones en transcripciones con marcas de tiempo, resúmenes AI y documentos de resumen exportables.',
  alternates: {
    canonical: 'https://mictoo.com/es/business-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: 'Transcripción Empresarial: Reuniones Internas a Texto | Mictoo',
    description: 'Transcribe reuniones internas de la empresa sin configuración de TI.',
    url: 'https://mictoo.com/es/business-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transcripción Empresarial',
    description: 'Reuniones 1:1 de fundadores, reuniones generales, informes ejecutivos.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function EsBusinessTranscriptionPage() {
  return (
    <UseCaseLayout
      locale="es"
      badge="Fundadores · Ejecutivos · Pequeños equipos · Gratis"
      h1First="Transcripción Empresarial"
      h1Second="Reuniones 1:1 de fundadores, reuniones generales, informes ejecutivos"
      subtitle="Una herramienta de transcripción práctica para reuniones internas autorizadas. Sube la grabación, revisa la transcripción y el resumen AI, luego exporta un resumen para tu equipo."
      currentHref="/es/business-transcription"

      platforms={[
        { name: 'Zoom',        iconKey: 'videoCameraFill', brandBg: '#2D8CFF', href: '/es/zoom-transcription' },
        { name: 'MS Teams',    iconKey: 'videoCameraFill', brandBg: '#4B53BC', href: '/es/teams-meeting-transcription' },
        { name: 'Google Meet', iconKey: 'videoCameraFill', brandBg: '#00832D', href: '/es/google-meet-transcription' },
        { name: 'Webex',       iconKey: 'videoCameraFill', brandBg: '#0F1F35' },
        { name: 'BlueJeans',   iconKey: 'videoCameraFill', brandBg: '#005EB8' },
        { name: 'GoToMeeting', iconKey: 'videoCameraFill', brandBg: '#F68B1F' },
      ]}

      howItWorksTitle="Cómo funciona la transcripción empresarial"
      steps={[
        {
          icon: 'folder',
          title: 'Exporta la grabación',
          desc: 'Desde Zoom, Teams, Meet, Webex, o lo que use tu empresa. MP4 o M4A solo de audio funcionan.',
        },
        {
          icon: 'upload',
          title: 'Suelta el archivo aquí',
          desc: 'Sube una grabación que tu organización te permita procesar. No se requiere instalación de software ni integración de directorio.',
        },
        {
          icon: 'editPen',
          title: 'Transcripción, resumen, acciones',
          desc: 'Transcripción con marcas de tiempo, resumen AI, exportación DOCX lista para el correo de resumen.',
        },
      ]}

      exampleTitle="Ejemplo de transcripción de reunión empresarial"
      exampleFileName="q3-strategy-session.mp4"
      exampleDurationLabel="58:42"
      exampleLines={[
        { t: '0:00',  line: 'Gracias a todos por hacer tiempo. Esta es nuestra revisión de estrategia del Q3, y tenemos aproximadamente una hora bloqueada.' },
        { t: '0:10',  line: 'Déjame comenzar con la actualización general. Los ingresos están un ocho por ciento por encima del plan, principalmente por la expansión en el mercado medio.' },
        { t: '0:22',  line: 'El nuevo movimiento empresarial es más lento de lo que proyectamos. Dos acuerdos se trasladaron del Q2 al Q3.' },
        { t: '0:35',  line: 'Deberíamos discutir si duplicamos esfuerzos en el mercado medio o presionamos más en la preparación empresarial este trimestre.' },
        { t: '0:48',  line: 'Mi opinión: el mercado medio está funcionando, y no deberíamos distraer al equipo persiguiendo el segmento empresarial aún.' },
        { t: '1:02',  line: 'De acuerdo. Establezcamos un objetivo de treinta nuevas cuentas en el mercado medio para finales del Q3 y revisemos la empresa en la planificación del Q4.' },
        { t: '1:14',  line: 'Un tema más antes de concluir. La hoja de ruta de ingeniería para el mismo trimestre, que vinculamos a estos compromisos con los clientes.' },
      ]}
      summaryPoints={[
        'Ingresos 8% por encima del plan, impulsados por el mercado medio.',
        'Movimiento empresarial deslizándose (2 acuerdos trasladados del Q2 al Q3).',
        'Decisión: duplicar esfuerzos en el mercado medio este trimestre.',
        'Objetivo: 30 nuevas cuentas en el mercado medio para finales del Q3.',
      ]}
      actionItems={[
        'Establecer objetivo de 30 cuentas en el mercado medio',
        'Revisar movimiento empresarial en la planificación del Q4',
        'Alinear la hoja de ruta de ingeniería con los compromisos de los clientes',
      ]}

      whyTitle="Por qué Mictoo para la transcripción empresarial"
      whyCards={[
        {
          icon: 'lock',
          title: 'Sin instalación de software',
          desc: 'El flujo de trabajo en el navegador no requiere un cliente de escritorio ni integración de directorio. Las políticas de tu organización aún se aplican.',
        },
        {
          icon: 'sparkles',
          title: 'Resumen listo para el correo de resumen',
          desc: 'El resumen AI proporciona el borrador del resumen en segundos. Recorta lo que ya te comprometiste, mantén lo que necesita escalación.',
        },
        {
          icon: 'shield',
          title: 'Grabaciones no almacenadas',
          desc: 'Los flujos de audio se envían al proveedor de transcripción y se eliminan después del procesamiento. Solo la transcripción persiste en cuentas con sesión iniciada.',
        },
        {
          icon: 'globe',
          title: 'Traduce para equipos internacionales',
          desc: '¿Reunión en inglés pero el resumen necesita ir a una subsidiaria alemana? Un clic.',
        },
      ]}

      scenariosTitle="Escenarios empresariales comunes"
      scenarios={[
        { icon: 'briefcase', title: 'Informe ejecutivo' },
        { icon: 'users',     title: 'Reuniones generales' },
        { icon: 'chat',      title: 'Reunión 1:1 de fundadores' },
        { icon: 'target',    title: 'Retiro de estrategia' },
        { icon: 'search',    title: 'Actualización de la junta' },
        { icon: 'headset',   title: 'Escalación de cliente' },
      ]}

      tipsTitle="Consejos para grabaciones internas"
      tips={[
        'Prefiere exportaciones solo de audio cuando tu plataforma las ofrezca.',
        'Para video de reunión MP4 de más de 60 MB, extrae audio con ffmpeg primero.',
        'Usa detección automática para llamadas de liderazgo multilingües.',
        'Guarda la transcripción en el historial para construir un archivo buscable.',
      ]}

      guidesTitle="Guía para elegir la plataforma adecuada"
      guides={[
        { href: '/es/zoom-transcription',          icon: 'video', title: 'Zoom',        desc: 'Grabación en la nube, solo audio M4A' },
        { href: '/es/teams-meeting-transcription', icon: 'video', title: 'MS Teams',    desc: 'Ruta de OneDrive o SharePoint' },
        { href: '/es/google-meet-transcription',   icon: 'video', title: 'Google Meet', desc: 'Grabación de Drive, solución gratuita' },
        { href: '/es/meeting-transcription#tool',  icon: 'file',  title: 'Otro',       desc: 'Webex, BlueJeans, GoToMeeting' },
      ]}

      faq={[
        {
          q: '¿Se envía la grabación de mi empresa a sus servidores?',
          a: 'Los flujos de audio se envían al proveedor de transcripción (Groq/Replicate/Deepgram/OpenAI dependiendo de la ruta), se procesan una vez y se eliminan de la memoria. Nunca escribimos el audio en disco. Solo la transcripción de texto persiste, y solo si inicias sesión y la guardas.',
        },
        {
          q: '¿Necesito aprobación para subir una grabación de la empresa?',
          a: 'Eso depende de las políticas de tu organización y de la información en la grabación. Mictoo no requiere instalación de software, pero debes obtener cualquier autorización necesaria antes de enviar medios de la empresa a un proveedor de transcripción externo.',
        },
        {
          q: '¿Puedo usar Mictoo para industrias reguladas?',
          a: 'Verifica tus requisitos específicos de cumplimiento. No ofrecemos un BAA firmado ni un informe SOC 2. Para entornos estrictamente regulados, utiliza una herramienta de transcripción completamente autohospedada en su lugar.',
        },
        {
          q: '¿Puedo obtener un resumen AI para el correo de resumen?',
          a: 'Sí. El resumen AI aparece junto a la transcripción automáticamente. Un sólido primer borrador para el correo de seguimiento o documento de Notion.',
        },
        {
          q: '¿Qué pasa si la reunión supera los 60 MB?',
          a: 'Inicia sesión para habilitar la división automática (hasta aproximadamente 3 horas). O extrae audio del video con ffmpeg -i meeting.mp4 -vn -ac 1 -ar 16000 audio.m4a, reduce el tamaño del archivo de 5 a 15 veces.',
        },
        {
          q: '¿Puedo traducir la transcripción para un equipo internacional?',
          a: 'Sí. Después de la transcripción, elige un idioma de destino y haz clic en Traducir. Útil para subsidiarias de diferentes idiomas.',
        },
        {
          q: '¿Qué formatos de exportación funcionan para un correo de resumen?',
          a: 'TXT para pegar en el cuerpo del correo, DOCX para un archivo adjunto adecuado, PDF (iniciado sesión) para archivo. El resumen está disponible por separado.',
        },
      ]}

      ctaHeadline="Convierte reuniones internas en documentos de resumen"
      ctaSubtitle="Reuniones 1:1 de fundadores, reuniones generales e informes ejecutivos. Sube medios autorizados para una transcripción y resumen."
      ctaButton="Sube una reunión empresarial"

      relatedLinks={[
        { href: '/es/meeting-transcription',       label: 'Transcripción de Reuniones' },
        { href: '/es/zoom-transcription',          label: 'Transcripción de Zoom' },
        { href: '/es/teams-meeting-transcription', label: 'Transcripción de Teams' },
        { href: '/es/google-meet-transcription',   label: 'Transcripción de Google Meet' },
        { href: '/es/interview-transcription',     label: 'Transcripción de Entrevistas' },
      ]}
    />
  )
}