import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/meeting-transcription',
  'fr': 'https://mictoo.com/fr/meeting-transcription',
  'de': 'https://mictoo.com/de/meeting-transcription',
  'es': 'https://mictoo.com/es/meeting-transcription',
  'ru': 'https://mictoo.com/ru/meeting-transcription',
  'it': 'https://mictoo.com/it/meeting-transcription',
  'pt': 'https://mictoo.com/pt/meeting-transcription',
  'pl': 'https://mictoo.com/pl/meeting-transcription',
  'ja': 'https://mictoo.com/ja/meeting-transcription',
  'ko': 'https://mictoo.com/ko/meeting-transcription',
  'x-default': 'https://mictoo.com/meeting-transcription',
}

export const metadata = {
  title: 'Transcripción de Reuniones para Cualquier Plataforma Grabada | Mictoo',
  description:
    'Sube una grabación de reunión autorizada de Zoom, Teams, Meet, Webex, Loom o Riverside para obtener texto, resumen y exportaciones.',
  alternates: {
    canonical: 'https://mictoo.com/es/meeting-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: 'Transcripción de Reuniones: Cualquier Plataforma, Cualquier Grabación | Mictoo',
    description: 'Sube cualquier grabación de reunión, obtén una transcripción. Gratis.',
    url: 'https://mictoo.com/es/meeting-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transcripción de Reuniones: Cualquier Plataforma',
    description: 'Sube cualquier grabación de reunión, obtén una transcripción.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function EsMeetingTranscriptionPage() {
  return (
    <UseCaseLayout
      locale="es"
      badge="Cualquier plataforma · Gratis · Sin registro"
      h1First="Transcripción de Reuniones"
      h1Second="Una página de subida para cualquier plataforma"
      subtitle="Sube una grabación de Zoom, Teams, Google Meet, Webex, Loom o cualquier captura de pantalla. Obtén una transcripción limpia con marcas de tiempo, resumen de IA y exportaciones."
      currentHref="/es/meeting-transcription"

      platforms={[
        { name: 'Zoom',        iconKey: 'videoCameraFill', brandBg: '#2D8CFF', href: '/es/zoom-transcription' },
        { name: 'Google Meet', iconKey: 'videoCameraFill', brandBg: '#00832D', href: '/es/google-meet-transcription' },
        { name: 'MS Teams',    iconKey: 'videoCameraFill', brandBg: '#4B53BC', href: '/es/teams-meeting-transcription' },
        { name: 'Webex',       iconKey: 'videoCameraFill', brandBg: '#0F1F35' },
        { name: 'Loom',        iconKey: 'loomPlay',        brandBg: '#625DF5' },
        { name: 'Riverside',   iconKey: 'waveMic',         brandBg: '#4B2AF7' },
      ]}

      howItWorksTitle="Cómo funciona la transcripción de reuniones"
      steps={[
        {
          icon: 'folder',
          title: 'Encuentra tu grabación de reunión',
          desc: 'Exporta o descarga la grabación desde cualquier plataforma.',
        },
        {
          icon: 'upload',
          title: 'Suelta el archivo aquí',
          desc: 'Sube tu archivo en MP3, MP4, WAV u otros formatos soportados.',
        },
        {
          icon: 'editPen',
          title: 'Transcripción, resumen, exportaciones',
          desc: 'Obtén una transcripción con marcas de tiempo, resumen de IA y archivos de exportación.',
        },
      ]}

      exampleTitle="Ejemplo de transcripción y resumen"
      exampleFileName="meeting-recording.mp4"
      exampleDurationLabel="30:15"
      exampleLines={[
        { t: '0:00',  line: 'Gracias a todos por unirse. Recapitularemos rápidamente el progreso de la semana pasada antes de entrar en la agenda de hoy.' },
        { t: '0:12',  line: 'Lanzamos el flujo de incorporación y vimos un aumento del doce por ciento en la activación sobre la línea base anterior.' },
        { t: '0:28',  line: 'Genial. A continuación, necesitamos solucionar el error de pago en móvil antes de que afecte a más clientes de pago.' },
        { t: '0:36',  line: 'Crearé un ticket y lo asignaré al equipo para el final del día. Debería resolverse dentro del sprint.' },
        { t: '0:44',  line: 'También deberíamos discutir las actualizaciones de la página de precios. La versión actual no está convirtiendo como esperábamos.' },
        { t: '0:55',  line: 'Compartiré un borrador para el final del día y podremos revisarlo juntos mañana antes de la reunión.' },
      ]}
      summaryPoints={[
        'Flujo de incorporación lanzado con un aumento del 12% en la activación.',
        'El error de pago en móvil necesita ser solucionado.',
        'Actualizaciones de la página de precios a discutir.',
        'Borrador a compartir para el final del día y revisar mañana.',
      ]}
      actionItems={[
        'Crear ticket para el error de pago en móvil',
        'Compartir borrador de la página de precios',
        'Revisar borrador mañana',
      ]}

      whyTitle="Por qué una subida agnóstica a la plataforma ayuda"
      whyCards={[
        {
          icon: 'globe',
          title: 'Funciona en todas las plataformas de reunión',
          desc: 'Sube desde Zoom, Teams, Google Meet, Webex, Loom y más.',
        },
        {
          icon: 'target',
          title: 'Un flujo de revisión',
          desc: 'Usa el mismo formato con marcas de tiempo y opciones de exportación sin importar qué plataforma creó la grabación.',
        },
        {
          icon: 'lock',
          title: 'Funciona desde un archivo autorizado',
          desc: 'Mictoo procesa una grabación para la que ya tienes permiso; las políticas de acceso y descarga pertenecen a la plataforma de origen.',
        },
        {
          icon: 'sparkles',
          title: 'Resumen y traducción incluidos',
          desc: 'Obtén resúmenes de IA y traduce transcripciones a más de 50 idiomas.',
        },
      ]}

      scenariosTitle="Escenarios comunes de transcripción de reuniones"
      scenarios={[
        { icon: 'chat',      title: 'Correos electrónicos de resumen para clientes' },
        { icon: 'search',    title: 'Notas de investigación de usuarios' },
        { icon: 'users',     title: 'Entrevistas de reclutadores' },
        { icon: 'briefcase', title: 'Archivos de reuniones de equipo' },
        { icon: 'headset',   title: 'Escalaciones de soporte' },
        { icon: 'globe',     title: 'Reuniones multilingües' },
      ]}

      practicalTitle="Dónde encontrar una grabación de reunión"
      practicalIntro="La ubicación exacta depende de la plataforma y tu rol en la reunión. Descarga solo grabaciones a las que estás autorizado a acceder, y sigue las políticas de consentimiento de los participantes y de la organización antes de subir."
      practicalItems={[
        {
          title: 'Grabación en la nube o local de Zoom',
          desc: 'Las grabaciones en la nube están disponibles desde el portal web de Zoom en cuentas de pago elegibles. Las grabaciones en computadora normalmente se guardan en la carpeta local de Zoom.',
        },
        {
          title: 'Grabación de Google Meet',
          desc: 'Las grabaciones elegibles de Meet se guardan en la carpeta Mi Unidad › Grabaciones de Meet del organizador. La disponibilidad depende de la edición y la configuración del administrador.',
        },
        {
          title: 'Grabación de Microsoft Teams',
          desc: 'Encuentra la grabación en el chat de la reunión, OneDrive o el sitio de SharePoint del canal. Los permisos de descarga pueden estar restringidos por políticas.',
        },
        {
          title: 'Webex, Loom y Riverside',
          desc: 'Usa el control de exportación o descarga de la plataforma para obtener un archivo de audio o video, luego confirma que el archivo se reproduce correctamente antes de subirlo.',
        },
      ]}

      tipsTitle="Consejos para mejores transcripciones de reuniones"
      tips={[
        'Prefiere exportaciones solo de audio cuando quieras una subida más pequeña.',
        'Graba en un espacio tranquilo y reduce el ruido de fondo.',
        'Usa detección automática para llamadas multilingües o de idiomas mixtos.',
        'Revisa nombres y terminología después de la transcripción.',
      ]}

      guidesTitle="Guía para elegir la plataforma adecuada"
      guides={[
        { href: '/es/zoom-transcription',          icon: 'video', title: 'Reuniones de Zoom',    desc: 'Guía de descarga paso a paso' },
        { href: '/es/google-meet-transcription',   icon: 'video', title: 'Google Meet',      desc: 'Guía de descarga paso a paso' },
        { href: '/es/teams-meeting-transcription', icon: 'video', title: 'Microsoft Teams',  desc: 'Guía de descarga paso a paso' },
        { href: '/es/meeting-transcription#tool',  icon: 'file',  title: 'Otras plataformas',  desc: 'Ver todas las guías y consejos' },
      ]}

      faq={[
        {
          q: '¿Puedo transcribir una grabación de Zoom, Meet o Teams?',
          a: 'Sí. Cualquier archivo de audio o video de cualquier plataforma de reunión funciona. Solo descarga la grabación y súbela aquí. Aceptamos MP3, MP4, WAV, M4A, WEBM, FLAC y más.',
        },
        {
          q: '¿Es gratuita la transcripción de reuniones?',
          a: 'Sí. Archivos de hasta 25 MB de forma anónima, 60 MB al iniciar sesión. Las reuniones más largas pueden dividirse automáticamente para los usuarios registrados. No se requiere tarjeta de crédito.',
        },
        {
          q: '¿Mictoo identifica a diferentes hablantes?',
          a: 'No. La transcripción actual es texto continuo con marcas de tiempo por línea y sin etiquetas automáticas de "Hablante 1 / Hablante 2".',
        },
        {
          q: '¿Se almacenan las grabaciones de reuniones?',
          a: 'No. El archivo se transmite al proveedor de transcripción, se procesa una vez y se elimina de la memoria. La transcripción solo se guarda si inicias sesión y la agregas a tu historial.',
        },
        {
          q: '¿Qué formatos de exportación están disponibles?',
          a: 'TXT (texto plano), SRT y VTT (subtítulos con marcas de tiempo alineadas a la grabación), y DOCX (documento de Word). Los usuarios registrados también obtienen PDF y JSON.',
        },
        {
          q: '¿Puedo traducir la transcripción?',
          a: 'Sí. Después de la transcripción, elige un idioma de destino y haz clic en Traducir. Útil para enviar correos electrónicos de resumen a los participantes en su idioma preferido, o para archivar reuniones en diferentes idiomas en un solo idioma de trabajo.',
        },
      ]}

      ctaHeadline="Convierte tu próxima reunión en notas claras"
      ctaSubtitle="Suelta una grabación de cualquier plataforma y obtén una transcripción, resumen y exportaciones en segundos."
      ctaButton="Sube una grabación de reunión"

      relatedLinks={[
        { href: '/es/interview-transcription',  label: 'Transcripción de Entrevistas' },
        { href: '/es/podcast-transcription',    label: 'Transcripción de Podcasts' },
        { href: '/es/lecture-transcription',    label: 'Transcripción de Conferencias' },
        { href: '/es/business-transcription',   label: 'Transcripción de Negocios' },
        { href: '/es/voice-memo-to-text',       label: 'Notas de Voz a Texto' },
      ]}
    />
  )
}