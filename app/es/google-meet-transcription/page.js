import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/google-meet-transcription',
  'fr': 'https://mictoo.com/fr/google-meet-transcription',
  'de': 'https://mictoo.com/de/google-meet-transcription',
  'es': 'https://mictoo.com/es/google-meet-transcription',
  'ru': 'https://mictoo.com/ru/google-meet-transcription',
  'it': 'https://mictoo.com/it/google-meet-transcription',
  'pt': 'https://mictoo.com/pt/google-meet-transcription',
  'pl': 'https://mictoo.com/pl/google-meet-transcription',
  'ja': 'https://mictoo.com/ja/google-meet-transcription',
  'ko': 'https://mictoo.com/ko/google-meet-transcription',
  'x-default': 'https://mictoo.com/google-meet-transcription',
}

export const metadata = {
  title: 'Transcripción de grabaciones de Google Meet a texto | Mictoo',
  description:
    'Sube una grabación autorizada de Google Meet desde Drive o una captura de pantalla local y obtén una transcripción, resumen de IA y exportaciones.',
  alternates: {
    canonical: 'https://mictoo.com/es/google-meet-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: 'Transcripción de Google Meet: Cuenta de Workspace o gratuita | Mictoo',
    description: 'Grabación desde Drive o captura de pantalla de Meet gratuita. Ambas funcionan.',
    url: 'https://mictoo.com/es/google-meet-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transcripción de Google Meet',
    description: 'Cualquier nivel de cuenta, una página de carga.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function EsGoogleMeetTranscriptionPage() {
  return (
    <UseCaseLayout
      locale="es"
      badge="Google Meet · Grabación desde Drive o captura local · Gratis"
      h1First="Transcripción de Google Meet"
      h1Second="Grabaciones de Drive y capturas locales a texto"
      subtitle="Sube una grabación de Google Meet desde Drive o una captura local que estés autorizado a realizar. La disponibilidad de la grabación depende de la edición de Workspace del anfitrión, permisos y configuraciones del administrador."
      currentHref="/es/google-meet-transcription"

      platforms={[
        { name: 'Meet MP4',    iconKey: 'videoCameraFill', brandBg: '#00832D' },
        { name: 'QuickTime',   iconKey: 'videoCameraFill', brandBg: '#0F172A' },
        { name: 'OBS',         iconKey: 'videoCameraFill', brandBg: '#302E31' },
        { name: 'Zoom',        iconKey: 'videoCameraFill', brandBg: '#2D8CFF', href: '/es/zoom-transcription' },
        { name: 'MS Teams',    iconKey: 'videoCameraFill', brandBg: '#4B53BC', href: '/es/teams-meeting-transcription' },
        { name: 'Meeting hub', iconKey: 'videoCameraFill', brandBg: '#0F1F35', href: '/es/meeting-transcription' },
      ]}

      howItWorksTitle="Cómo funciona la transcripción de Google Meet"
      steps={[
        {
          icon: 'folder',
          title: 'Obtén la grabación',
          desc: 'Grabación de Workspace elegible: Drive › Mi unidad › Grabaciones de Meet. De lo contrario, utiliza una captura local autorizada que siga las reglas de consentimiento de los participantes.',
        },
        {
          icon: 'upload',
          title: 'Suelta el archivo aquí',
          desc: 'MP4 o M4A funcionan. Para MP4 grandes, extrae el audio con ffmpeg primero o inicia sesión para la división automática.',
        },
        {
          icon: 'editPen',
          title: 'Transcripción, resumen, exportaciones',
          desc: 'Obtén una transcripción con marcas de tiempo, resumen de IA y exportaciones en TXT/SRT/VTT/DOCX. El tiempo de procesamiento depende de la duración y el tamaño del archivo.',
        },
      ]}

      exampleTitle="Ejemplo de transcripción de Google Meet"
      exampleFileName="grabacion-meet.mp4"
      exampleDurationLabel="27:45"
      exampleLines={[
        { t: '0:00',  line: 'Hola equipo, gracias por unirse. Sincronización rápida sobre el plan de lanzamiento del Q3 antes de que me dirija a la reunión fuera de la oficina la próxima semana.' },
        { t: '0:10',  line: 'Marketing ha finalizado el texto de la página de destino. Ingeniería está en camino para la congelación de características el viernes.' },
        { t: '0:22',  line: 'Los documentos de soporte son el ítem de riesgo. Estamos atrasados aproximadamente tres días y necesitamos ponernos al día antes del lanzamiento.' },
        { t: '0:33',  line: 'Puedo cambiar a Anna de los documentos de incorporación para ayudar esta semana. Eso debería recuperar el retraso.' },
        { t: '0:44',  line: 'Genial. Segundo tema, los cambios en la página de precios que discutimos. ¿Alguien tiene preocupaciones antes de que los enviemos?' },
        { t: '0:56',  line: 'Lo único que señalaría es el marco de la categoría empresarial. Se siente un poco escaso para el punto de precio.' },
        { t: '1:08',  line: 'Punto justo. Déjame revisar esa sección esta semana y compartir una versión revisada el viernes.' },
      ]}
      summaryPoints={[
        'Seguimiento del lanzamiento del Q3 bien, congelación de características el viernes.',
        'Documentos de soporte atrasados por 3 días (riesgo).',
        'Anna reasignada para cerrar la brecha de documentos.',
        'El marco de la categoría empresarial necesita revisión.',
      ]}
      actionItems={[
        'Reasignar a Anna a los documentos de soporte esta semana',
        'Revisar el marco de la categoría empresarial para el viernes',
        'Confirmar la congelación de características en la reunión del viernes',
      ]}

      whyTitle="Por qué Mictoo para la transcripción de Google Meet"
      whyCards={[
        {
          icon: 'lock',
          title: 'Funciona con un archivo multimedia',
          desc: 'Sube una grabación de Drive o una captura local autorizada sin conectar Mictoo a tu cuenta de Google.',
        },
        {
          icon: 'target',
          title: 'Texto con marcas de tiempo para revisión',
          desc: 'Revisa nombres y términos técnicos contra la grabación, luego exporta la transcripción corregida en el formato que necesites.',
        },
        {
          icon: 'sparkles',
          title: 'Resumen de IA siempre incluido',
          desc: 'El resumen de transcripción de IA de Workspace es una característica de pago separada. El nuestro está incluido con cada transcripción.',
        },
        {
          icon: 'globe',
          title: 'Traduce a más de 50 idiomas',
          desc: 'Resumen de reuniones multilingües sin un proveedor de traducción.',
        },
      ]}

      scenariosTitle="Escenarios comunes de Meet"
      scenarios={[
        { icon: 'chat',      title: 'Standup / sincronización' },
        { icon: 'briefcase', title: 'Revisión del cliente' },
        { icon: 'search',    title: 'Entrevista de usuario' },
        { icon: 'users',     title: 'Reunión general' },
        { icon: 'headset',   title: 'Llamada de soporte' },
        { icon: 'globe',     title: 'Multilingüe' },
      ]}

      tipsTitle="Consejos para grabaciones de Google Meet"
      tips={[
        'Las grabaciones de Meet de Workspace se guardan en Drive › Grabaciones de Meet.',
        'Nivel gratuito: QuickTime (Mac) o OBS (Win/Linux) funcionan bien.',
        '¿MP4 grande? Extrae el audio: ffmpeg -i grabacion-meet.mp4 -vn -ac 1 -ar 16000 audio.m4a.',
        'Inicia sesión para la división automática de reuniones largas.',
      ]}

      guidesTitle="Otras plataformas de reunión"
      guides={[
        { href: '/es/zoom-transcription',          icon: 'video', title: 'Zoom',           desc: 'Nube + Local + M4A' },
        { href: '/es/teams-meeting-transcription', icon: 'video', title: 'MS Teams',       desc: 'Rutas de OneDrive + SharePoint' },
        { href: '/es/meeting-transcription',       icon: 'video', title: 'Meeting hub',    desc: 'Cualquier plataforma, una carga' },
        { href: '/es/webinar-transcription',       icon: 'monitor', title: 'Webinars',     desc: 'ON24, Demio, StreamYard' },
      ]}

      faq={[
        {
          q: '¿Necesito Google Workspace para grabar una llamada de Meet?',
          a: 'La disponibilidad de grabación de Google depende de la edición de cuenta del anfitrión, el rol en la reunión, configuraciones del administrador y permisos. Las grabaciones elegibles se guardan en Drive. Si realizas una captura local en su lugar, obtén el consentimiento requerido de los participantes y sigue la política aplicable.',
        },
        {
          q: '¿Dónde se guardan las grabaciones de Meet de Workspace?',
          a: 'En el Drive del organizador de la reunión: Mi unidad › Grabaciones de Meet. El MP4 generalmente aparece dentro de unos minutos después de que finaliza la reunión. Se envía una notificación por correo electrónico cuando está listo.',
        },
        {
          q: '¿Debería usar la transcripción de Meet o subir la grabación?',
          a: 'Usa la transcripción de Meet cuando esté disponible y satisfaga tus necesidades. Subir el medio es útil cuando deseas exportaciones de Mictoo, traducción o una transcripción adicional para revisar. La precisión varía con el audio.',
        },
        {
          q: 'Mi grabación de Meet tiene más de 60 MB. ¿Qué hago ahora?',
          a: 'Extrae solo el audio con ffmpeg -i grabacion-meet.mp4 -vn -ac 1 -ar 16000 audio.m4a. O inicia sesión para la división automática de archivos largos de hasta aproximadamente 3 horas.',
        },
        {
          q: '¿Puedo obtener un resumen de IA de la llamada de Meet?',
          a: 'Sí. El resumen de IA aparece junto a la transcripción automáticamente. Un buen primer borrador para el correo electrónico de resumen o documento de seguimiento.',
        },
        {
          q: '¿Mictoo identifica quién está hablando en Meet?',
          a: 'No. La transcripción actual es texto continuo con marcas de tiempo por línea y sin etiquetas automáticas de hablante.',
        },
        {
          q: '¿Se mantienen las grabaciones de Meet en sus servidores?',
          a: 'No. El audio se transmite al proveedor de transcripción, se procesa una vez y se elimina. Solo la transcripción persiste en las cuentas con sesión iniciada.',
        },
      ]}

      ctaHeadline="Convierte las llamadas de Meet en texto limpio"
      ctaSubtitle="Sube una grabación autorizada de Drive o una captura local para texto, resumen y exportaciones."
      ctaButton="Subir grabación de Meet"

      relatedLinks={[
        { href: '/es/meeting-transcription',       label: 'Transcripción de Reuniones' },
        { href: '/es/zoom-transcription',          label: 'Transcripción de Zoom' },
        { href: '/es/teams-meeting-transcription', label: 'Transcripción de Teams' },
        { href: '/es/webinar-transcription',       label: 'Transcripción de Webinars' },
        { href: '/es/business-transcription',      label: 'Transcripción Empresarial' },
      ]}
    />
  )
}