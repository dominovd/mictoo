import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/zoom-transcription',
  'fr': 'https://mictoo.com/fr/zoom-transcription',
  'de': 'https://mictoo.com/de/zoom-transcription',
  'es': 'https://mictoo.com/es/zoom-transcription',
  'ru': 'https://mictoo.com/ru/zoom-transcription',
  'it': 'https://mictoo.com/it/zoom-transcription',
  'pt': 'https://mictoo.com/pt/zoom-transcription',
  'pl': 'https://mictoo.com/pl/zoom-transcription',
  'ja': 'https://mictoo.com/ja/zoom-transcription',
  'ko': 'https://mictoo.com/ko/zoom-transcription',
  'x-default': 'https://mictoo.com/zoom-transcription',
}

export const metadata = {
  title: 'Transcripción de Zoom para grabaciones en la nube y locales | Mictoo',
  description:
    'Sube una grabación MP4/M4A de Zoom en la nube o local y obtén una transcripción con marcas de tiempo, un resumen de IA y archivos de exportación.',
  alternates: {
    canonical: 'https://mictoo.com/es/zoom-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: 'Transcripción de grabaciones de Zoom | Mictoo',
    description: 'Sube un MP4/M4A de Zoom en la nube o local y obtén una transcripción, un resumen y exportaciones.',
    url: 'https://mictoo.com/es/zoom-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transcripción de Zoom: Gratis',
    description: 'Sube una grabación de Zoom y obtén una transcripción con marcas de tiempo.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function EsZoomTranscriptionPage() {
  return (
    <UseCaseLayout
      locale="es"
      badge="Zoom · Cloud / Local / Audio M4A · Gratis"
      h1First="Transcripción de Zoom"
      h1Second="Grabaciones en la nube y locales a texto"
      subtitle="Sube una grabación MP4 de Zoom en la nube, un M4A solo de audio, o una grabación local. Obtén una transcripción con marcas de tiempo, un resumen de IA, traducción y archivos de exportación en un solo flujo de trabajo."
      currentHref="/es/zoom-transcription"

      platforms={[
        { name: 'Cloud MP4',    iconKey: 'videoCameraFill', brandBg: '#2D8CFF' },
        { name: 'Audio M4A',    iconKey: 'mic',             brandBg: '#0EA5A4' },
        { name: 'Local MP4',    iconKey: 'videoCameraFill', brandBg: '#4B53BC' },
        { name: 'Google Meet',  iconKey: 'videoCameraFill', brandBg: '#00832D', href: '/es/google-meet-transcription' },
        { name: 'MS Teams',     iconKey: 'videoCameraFill', brandBg: '#4B53BC', href: '/es/teams-meeting-transcription' },
        { name: 'Meeting hub',  iconKey: 'videoCameraFill', brandBg: '#0F1F35', href: '/es/meeting-transcription' },
      ]}

      howItWorksTitle="Cómo funciona la transcripción de Zoom"
      steps={[
        {
          icon: 'folder',
          title: 'Descargar de Zoom',
          desc: 'Nube: zoom.us → Grabaciones → descargar MP4 o la versión "Solo audio (M4A)". Local: ~/Documents/Zoom/.',
        },
        {
          icon: 'upload',
          title: 'Suelta el archivo aquí',
          desc: 'El M4A solo de audio suele ser mucho más pequeño que el MP4 y evita subir la pista de video. Gratis hasta 25 MB de forma anónima, 60 MB si inicias sesión.',
        },
        {
          icon: 'editPen',
          title: 'Revisar y exportar',
          desc: 'El tiempo de procesamiento depende de la duración, el tamaño del archivo y la demanda. Cuando esté completo, revisa la transcripción y exporta un resumen, subtítulos o un resumen en DOCX.',
        },
      ]}

      exampleTitle="Ejemplo de transcripción de reunión de Zoom"
      exampleFileName="grabación-nube-zoom.m4a"
      exampleDurationLabel="34:12"
      exampleLines={[
        { t: '0:00',  line: 'Bien, disculpen la demora, todos. Zoom se negó a dejarme entrar hasta que actualizara. Comencemos.' },
        { t: '0:10',  line: 'Hoy estamos revisando los comentarios del prototipo de la semana pasada y decidiendo qué priorizar para el sprint.' },
        { t: '0:22',  line: 'En general, los comentarios fueron positivos. Doce de quince participantes entendieron el flujo sin ayuda.' },
        { t: '0:33',  line: 'Los tres que se quedaron atascados tuvieron el mismo problema en la pantalla de configuración. Deberíamos arreglar eso primero.' },
        { t: '0:45',  line: 'De acuerdo. Ya tengo una revisión de diseño en marcha. Debería estar lista para revisar el jueves.' },
        { t: '0:56',  line: 'En segundo lugar, a todos les encantó el nuevo estado vacío, pero nadie encontró el botón de importación. Está demasiado enterrado.' },
        { t: '1:08',  line: 'Movamos la importación a la acción principal en el estado vacío. Eso es un cambio de una línea para ingeniería.' },
      ]}
      summaryPoints={[
        'Comentarios del prototipo: 12/15 completaron el flujo sin ayuda.',
        'Obstáculo: la pantalla de configuración confundió a 3/15 participantes.',
        'El estado vacío fue bien recibido, pero el botón de Importar es difícil de encontrar.',
        'Revisión de diseño para el jueves.',
      ]}
      actionItems={[
        'Arreglar la pantalla de configuración (revisión de diseño el jueves)',
        'Promover Importar a la acción principal en el estado vacío',
        'Compartir el prototipo revisado en la reunión del viernes',
      ]}

      whyTitle="Por qué usar Mictoo con una grabación de Zoom"
      whyCards={[
        {
          icon: 'target',
          title: 'Una segunda transcripción para revisar',
          desc: 'Usa Mictoo cuando quieras una transcripción adicional y texto con marcas de tiempo para verificar nombres, terminología y citas clave.',
        },
        {
          icon: 'lock',
          title: 'Procesa archivos descargados',
          desc: 'Mictoo no se conecta a tu cuenta de Zoom. Sube una grabación en la nube o local que ya tengas permiso para usar.',
        },
        {
          icon: 'gear',
          title: 'También funciona con grabaciones locales',
          desc: 'La transcripción integrada de Zoom es solo para la nube. La grabación local no obtiene nada. Mictoo funciona con ambas.',
        },
        {
          icon: 'sparkles',
          title: 'Resumen + Traducción incluidos',
          desc: 'El resumen de IA aparece junto a la transcripción automáticamente. Traduce a más de 50 idiomas con un clic.',
        },
      ]}

      scenariosTitle="Escenarios comunes de Zoom"
      scenarios={[
        { icon: 'chat',      title: 'Llamada con cliente' },
        { icon: 'users',     title: 'Reunión de equipo' },
        { icon: 'briefcase', title: 'Demostración de ventas' },
        { icon: 'search',    title: 'Entrevista de usuario' },
        { icon: 'book',      title: 'Webinar' },
        { icon: 'globe',     title: 'Llamada multilingüe' },
      ]}

      tipsTitle="Consejos para grabaciones de Zoom"
      tips={[
        'Descarga la versión M4A "Solo audio". Misma precisión, 10 veces más pequeña.',
        'La cuota de grabación en la nube no se gasta en nuestra transcripción (funcionamos externamente).',
        'La grabación local también funciona. Busca en ~/Documents/Zoom/.',
        'Para llamadas largas de más de 60 MB, inicia sesión para la división automática.',
      ]}

      guidesTitle="Plataformas de reunión con sus propias guías"
      guides={[
        { href: '/es/google-meet-transcription',   icon: 'video', title: 'Google Meet', desc: 'Workspace + solución gratuita' },
        { href: '/es/teams-meeting-transcription', icon: 'video', title: 'MS Teams',    desc: 'Rutas de OneDrive + SharePoint' },
        { href: '/es/meeting-transcription',       icon: 'video', title: 'Meeting hub', desc: 'Cualquier plataforma, una carga' },
        { href: '/es/webinar-transcription',       icon: 'monitor', title: 'Webinars',  desc: 'Zoom Webinars, Demio, ON24' },
      ]}

      faq={[
        {
          q: '¿Qué tipos de grabaciones de Zoom funcionan?',
          a: 'Grabación en la nube MP4 (video), Grabación en la nube M4A (solo audio) y Grabación local MP4. También exportación chat.txt si deseas el registro de chat, aunque no transcribimos el chat.',
        },
        {
          q: '¿Necesito Zoom Pro o superior?',
          a: 'No. Cualquier grabación de Zoom funciona, incluyendo grabaciones locales de nivel gratuito. La grabación en la nube de Zoom requiere Pro+, pero si ya tienes el archivo, a Mictoo no le importa tu nivel de Zoom.',
        },
        {
          q: 'Mi grabación en la nube MP4 supera los 60 MB. ¿Qué hago?',
          a: 'Si tu grabación incluye una descarga de Solo audio (M4A), úsala para evitar subir la pista de video. La disponibilidad y el tamaño del archivo dependen de la configuración de grabación y la duración.',
        },
        {
          q: '¿Debería usar la transcripción de audio de Zoom o Mictoo?',
          a: 'La transcripción de audio de Zoom es conveniente cuando la grabación en la nube y la transcripción están habilitadas en tu cuenta. Mictoo es útil para archivos locales, formatos de exportación adicionales, traducción o para producir otra transcripción para revisar. La precisión varía con la grabación.',
        },
        {
          q: '¿Mictoo identifica a los hablantes de Zoom?',
          a: 'No. La transcripción actual es texto continuo con marcas de tiempo por línea y sin etiquetas automáticas de "Hablante 1 / Hablante 2".',
        },
        {
          q: '¿Dónde guarda la grabación local?',
          a: 'Por defecto, en ~/Documents/Zoom/ en Mac y %USERPROFILE%\\Documents\\Zoom\\ en Windows. Cada reunión tiene su propia carpeta con el MP4 y el audio.m4a separado.',
        },
        {
          q: '¿Se almacena mi grabación de Zoom en sus servidores?',
          a: 'No. El archivo se transmite al proveedor de transcripción, se procesa una vez y se elimina de la memoria. Solo la transcripción persiste si inicias sesión.',
        },
      ]}

      ctaHeadline="Convierte grabaciones de Zoom en texto limpio"
      ctaSubtitle="Cloud MP4 o M4A, grabación local, cualquier nivel de Zoom. Gratis por archivo."
      ctaButton="Subir grabación de Zoom"

      relatedLinks={[
        { href: '/es/meeting-transcription',       label: 'Transcripción de Reuniones' },
        { href: '/es/google-meet-transcription',   label: 'Transcripción de Google Meet' },
        { href: '/es/teams-meeting-transcription', label: 'Transcripción de Teams' },
        { href: '/es/webinar-transcription',       label: 'Transcripción de Webinars' },
        { href: '/es/interview-transcription',     label: 'Transcripción de Entrevistas' },
      ]}
    />
  )
}