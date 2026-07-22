import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/teams-meeting-transcription',
  'fr': 'https://mictoo.com/fr/teams-meeting-transcription',
  'de': 'https://mictoo.com/de/teams-meeting-transcription',
  'es': 'https://mictoo.com/es/teams-meeting-transcription',
  'ru': 'https://mictoo.com/ru/teams-meeting-transcription',
  'it': 'https://mictoo.com/it/teams-meeting-transcription',
  'pt': 'https://mictoo.com/pt/teams-meeting-transcription',
  'pl': 'https://mictoo.com/pl/teams-meeting-transcription',
  'ja': 'https://mictoo.com/ja/teams-meeting-transcription',
  'ko': 'https://mictoo.com/ko/teams-meeting-transcription',
  'x-default': 'https://mictoo.com/teams-meeting-transcription',
}

export const metadata = {
  title: 'Transcripción de reuniones de Teams a partir de grabaciones MP4 | Mictoo',
  description:
    'Sube un MP4 de Microsoft Teams desde OneDrive o SharePoint y obtén una transcripción con marcas de tiempo, resumen de IA y archivos de exportación.',
  alternates: {
    canonical: 'https://mictoo.com/es/teams-meeting-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: 'Transcripción de reuniones de Teams a partir de MP4 | Mictoo',
    description: 'Suelta una grabación de Teams desde OneDrive o SharePoint y obtén texto, resumen y exportaciones.',
    url: 'https://mictoo.com/es/teams-meeting-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transcripción de reuniones de Teams',
    description: 'Sube un MP4 desde OneDrive o SharePoint y obtén una transcripción.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function EsTeamsMeetingTranscriptionPage() {
  return (
    <UseCaseLayout
      locale="es"
      badge="Teams · OneDrive / SharePoint · M365 · Gratis"
      h1First="Transcripción de reuniones de Teams"
      h1Second="De MP4 de OneDrive o SharePoint a texto"
      subtitle="Descarga la grabación de Teams a la que tienes acceso, luego sube el MP4 para una transcripción con marcas de tiempo, resumen de IA y exportaciones. La disponibilidad de la grabación depende de tu licencia de Microsoft 365 y de las políticas de tu organización."
      currentHref="/es/teams-meeting-transcription"

      platforms={[
        { name: 'OneDrive',    iconKey: 'videoCameraFill', brandBg: '#0364B8' },
        { name: 'SharePoint',  iconKey: 'videoCameraFill', brandBg: '#036C70' },
        { name: 'Channel MP4', iconKey: 'videoCameraFill', brandBg: '#4B53BC' },
        { name: 'Zoom',        iconKey: 'videoCameraFill', brandBg: '#2D8CFF', href: '/es/zoom-transcription' },
        { name: 'Google Meet', iconKey: 'videoCameraFill', brandBg: '#00832D', href: '/es/google-meet-transcription' },
        { name: 'Meeting hub', iconKey: 'videoCameraFill', brandBg: '#0F1F35', href: '/es/meeting-transcription' },
      ]}

      howItWorksTitle="Cómo funciona la transcripción de reuniones de Teams"
      steps={[
        {
          icon: 'folder',
          title: 'Encuentra la grabación',
          desc: 'Reunión privada: OneDrive › Mis archivos › Grabaciones. Reunión de canal: el sitio de SharePoint del canal.',
        },
        {
          icon: 'upload',
          title: 'Suelta el MP4 aquí',
          desc: 'Descarga desde OneDrive o SharePoint y arrastra aquí. Para más de 60 MB, extrae el audio o inicia sesión para la división automática.',
        },
        {
          icon: 'editPen',
          title: 'Transcripción, resumen, exportaciones',
          desc: 'Transcripción con marcas de tiempo, resumen de IA, TXT/SRT/VTT/DOCX. Una llamada de Teams de 30 minutos termina en aproximadamente un minuto.',
        },
      ]}

      exampleTitle="Ejemplo de transcripción de reunión de Teams"
      exampleFileName="teams-channel-meeting.mp4"
      exampleDurationLabel="41:08"
      exampleLines={[
        { t: '0:00',  line: 'Bien, bienvenidos a la revisión del sprint. Vamos a repasar lo que se lanzó, lo que no se lanzó y por qué.' },
        { t: '0:11',  line: 'El equipo de pagos lanzó el nuevo flujo de reembolsos el martes. La adopción está por encima de lo esperado, alrededor del cuarenta por ciento de los tickets elegibles.' },
        { t: '0:24',  line: 'El equipo de búsqueda se encontró con un pipeline de indexación más largo de lo esperado. El lanzamiento se trasladó al siguiente sprint.' },
        { t: '0:35',  line: 'Está bien, pero necesitamos comunicar el retraso al equipo de éxito del cliente para que puedan gestionar las expectativas.' },
        { t: '0:47',  line: 'Enviaré una nota en el canal compartido hoy con la línea de tiempo revisada y la razón.' },
        { t: '0:58',  line: 'En tercer lugar, la tasa de fallos en móviles ha aumentado ligeramente. Sigue dentro del SLA, pero vale la pena vigilarlo este sprint.' },
        { t: '1:09',  line: 'El equipo de dispositivos ya está en ello. Deberíamos tener la causa raíz para el miércoles y una solución para el final del sprint.' },
      ]}
      summaryPoints={[
        'Flujo de reembolsos lanzado el martes, 40% de adopción.',
        'El equipo de búsqueda retrasó un sprint (pipeline de indexación).',
        'La tasa de fallos en móviles ha aumentado pero sigue dentro del SLA.',
        'Causa raíz del fallo en móviles para el miércoles.',
      ]}
      actionItems={[
        'Enviar nota de retraso al canal de éxito del cliente',
        'Investigar la causa raíz del fallo en móviles (miércoles)',
        'Confirmar nueva fecha de lanzamiento del equipo de búsqueda',
      ]}

      whyTitle="Por qué Mictoo para grabaciones de Teams"
      whyCards={[
        {
          icon: 'folder',
          title: 'Funciona con grabaciones descargadas',
          desc: 'Usa un MP4 que ya tienes permiso para descargar desde OneDrive o el sitio de SharePoint del canal.',
        },
        {
          icon: 'target',
          title: 'Revisar nombres y terminología',
          desc: 'La salida con marcas de tiempo facilita encontrar y corregir nombres de productos, acrónimos y términos especializados.',
        },
        {
          icon: 'sparkles',
          title: 'Resumen junto a la transcripción',
          desc: 'Genera un borrador de resumen y mantenlo junto al texto completo para revisión antes de compartir.',
        },
        {
          icon: 'globe',
          title: 'Traducir grabaciones en diferentes idiomas',
          desc: 'Grabación en un idioma, resumen necesario en otro. Un clic, más de 50 idiomas.',
        },
      ]}

      scenariosTitle="Escenarios comunes de Teams"
      scenarios={[
        { icon: 'chat',      title: 'Revisión del sprint' },
        { icon: 'briefcase', title: 'Sincronización de la junta' },
        { icon: 'users',     title: 'Standup' },
        { icon: 'target',    title: 'Revisión de OKR' },
        { icon: 'headset',   title: 'Escalación de soporte' },
        { icon: 'globe',     title: 'Llamada internacional' },
      ]}

      tipsTitle="Consejos para grabaciones de Teams"
      tips={[
        'Las reuniones privadas se guardan en OneDrive (cuenta del organizador).',
        'Las reuniones de canal se guardan en el sitio de SharePoint del canal.',
        'Los inquilinos de GCC / empresariales pueden restringir descargas: pregunta a IT.',
        'Para reuniones largas, extrae el audio con ffmpeg para reducir el tamaño del archivo.',
      ]}

      guidesTitle="Otras plataformas de reunión"
      guides={[
        { href: '/es/zoom-transcription',        icon: 'video', title: 'Zoom',        desc: 'Nube + Local + M4A' },
        { href: '/es/google-meet-transcription', icon: 'video', title: 'Google Meet', desc: 'Workspace + gratis' },
        { href: '/es/meeting-transcription',     icon: 'video', title: 'Meeting hub', desc: 'Cualquier plataforma, una carga' },
        { href: '/es/business-transcription',    icon: 'briefcase', title: 'Business', desc: 'Grabaciones internas autorizadas' },
      ]}

      faq={[
        {
          q: '¿Dónde se guardan las grabaciones de Teams?',
          a: 'Reuniones privadas: en OneDrive del organizador bajo Mis archivos › Grabaciones. Reuniones de canal: en el sitio de SharePoint que respalda ese canal, bajo la carpeta del canal en Documentos.',
        },
        {
          q: '¿Necesito Teams Premium para subir una grabación?',
          a: 'Mictoo procesa el archivo de medios descargado en lugar de conectarse a tu cuenta de Teams. Tu capacidad para grabar, transcribir o descargar dentro de Teams aún depende de tu licencia de Microsoft 365, rol en la reunión y políticas de la organización.',
        },
        {
          q: '¿Debería usar la transcripción de Teams o subir la grabación?',
          a: 'Usa la transcripción de Teams cuando esté disponible y cumpla con tus necesidades. Subir la grabación es útil cuando deseas exportaciones de Mictoo, traducción o una transcripción adicional para revisar. La precisión varía con la grabación.',
        },
        {
          q: 'Mi MP4 de Teams supera los 60 MB. ¿Qué hago ahora?',
          a: 'Extrae el audio: ffmpeg -i teams.mp4 -vn -ac 1 -ar 16000 audio.m4a. O inicia sesión para la división automática de archivos de hasta aproximadamente 3 horas.',
        },
        {
          q: '¿Puedo usar Mictoo para inquilinos de GCC / empresariales?',
          a: 'Algunos inquilinos empresariales y gubernamentales restringen descargas o procesamiento externo. Sigue la política de tu organización y consulta con IT o el propietario de la grabación antes de descargar o subir medios de reunión.',
        },
        {
          q: '¿Mictoo identifica a los hablantes de Teams?',
          a: 'No. La transcripción actual es texto continuo con marcas de tiempo por línea y sin etiquetas automáticas de hablantes.',
        },
        {
          q: '¿Las grabaciones de Teams se almacenan en sus servidores?',
          a: 'No. El archivo se transmite al proveedor de transcripción, se procesa una vez y se elimina. Solo la transcripción persiste en cuentas con sesión iniciada.',
        },
      ]}

      ctaHeadline="Convierte reuniones de Teams en texto limpio"
      ctaSubtitle="Sube una grabación autorizada de OneDrive o SharePoint y obtén texto, resumen y exportaciones."
      ctaButton="Subir grabación de Teams"

      relatedLinks={[
        { href: '/es/meeting-transcription',       label: 'Transcripción de reuniones' },
        { href: '/es/zoom-transcription',          label: 'Transcripción de Zoom' },
        { href: '/es/google-meet-transcription',   label: 'Transcripción de Google Meet' },
        { href: '/es/business-transcription',      label: 'Transcripción de Business' },
        { href: '/es/webinar-transcription',       label: 'Transcripción de Webinar' },
      ]}
    />
  )
}