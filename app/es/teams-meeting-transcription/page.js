import LandingLayout from '@/components/LandingLayout'

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
  title: 'Transcripción de Microsoft Teams — transcribe reuniones | Mictoo',
  description:
    'Transcripción gratuita de Microsoft Teams. Sube la grabación (MP4) de OneDrive o SharePoint y obtén una transcripción limpia con IA en segundos. Sin registro.',
  alternates: { canonical: 'https://mictoo.com/es/teams-meeting-transcription', languages: LANGS },
}

export default function EsTeamsPage() {
  return (
    <LandingLayout
      defaultLanguage="es"
      badge="TEAMS · ONEDRIVE · GRATIS"
      h1={
        <>
          Transcripción de Microsoft Teams
          <br />
          <span className="text-brand-600">Transcripción gratuita de reuniones de Teams</span>
        </>
      }
      subtitle="Convierte tu grabación de Teams en texto limpio. Sube el MP4 desde OneDrive o SharePoint y obtén la transcripción en segundos. Sin registro, sin tarifa por minuto."
      howItWorks={[
        {
          icon: '☁️',
          title: 'Descarga desde OneDrive o SharePoint',
          desc: 'Las grabaciones de Teams se guardan en el OneDrive del organizador (para reuniones no-canal) o en el sitio de SharePoint (para reuniones en canal). Descárgalas como MP4. Para reuniones largas, extrae el audio primero.',
        },
        {
          icon: '⚡',
          title: 'Sube el archivo',
          desc: 'Extraemos el audio del MP4 y lo enviamos a Whisper large-v3. Una reunión de 30 minutos termina en alrededor de un minuto.',
        },
        {
          icon: '📋',
          title: 'Recibe la transcripción',
          desc: 'Léela en el navegador, cópiala o descárgala como TXT o SRT. Arregla nombres o jerga mal entendidos en el editor antes de exportar.',
        },
      ]}
      whyUse={{
        title: 'Por qué Mictoo para reuniones de Teams',
        bullets: [
          {
            title: 'Funciona sin licencia Microsoft 365 específica para transcripción',
            desc: 'Mientras tengas el archivo de la grabación, puedes transcribirlo aquí. No hace falta Teams Premium ni planes de Office concretos.',
          },
          {
            title: 'Mejor cobertura de no inglés y acentos',
            desc: 'La transcripción de Microsoft Teams funciona bien en inglés y los principales idiomas europeos occidentales. Whisper large-v3 cubre más de 50 idiomas con mejor manejo de acentos y conversaciones bilingües.',
          },
          {
            title: 'Gratis, sin contador de minutos',
            desc: 'La transcripción de Teams viene con tu licencia pero limitada por feature gates. Mictoo no tiene tope por reunión ni cap mensual de minutos.',
          },
          {
            title: 'Export SRT para editores de vídeo',
            desc: 'La transcripción de Teams vive dentro de la app Teams o se descarga como VTT. Nosotros exportamos TXT y SRT limpio, drop-in compatible con Premiere, DaVinci, CapCut y YouTube Studio.',
          },
          {
            title: 'Privacidad por defecto',
            desc: 'El archivo va al proveedor de transcripción, se procesa y se descarta. No conservamos el audio de tu reunión.',
          },
        ],
      }}
      useCases={{
        title: 'Para qué se transcriben reuniones de Teams',
        items: [
          {
            title: 'Actas de reuniones de proyecto',
            desc: 'Pega la transcripción en Confluence, Notion o una página de SharePoint. Los que se perdieron la llamada leen el texto en 5 minutos en vez de ver 60 minutos de vídeo.',
          },
          {
            title: 'Revisión de llamadas con cliente para equipos de cuenta',
            desc: 'Guarda la transcripción junto al deal en Salesforce, Dynamics o HubSpot. La recuperación de citas para emails de follow-up tarda segundos.',
          },
          {
            title: 'Registro de decisiones entre equipos',
            desc: 'Las decisiones grandes tomadas en llamadas de Teams quedan resumidas en la transcripción. Útil para governance y trazas de auditoría.',
          },
          {
            title: 'Llamadas con proveedores y contratistas',
            desc: 'Cuando un proyecto involucra a terceros, la transcripción es el registro inequívoco de lo acordado.',
          },
          {
            title: 'Cumplimiento e industrias reguladas',
            desc: 'Algunos sectores exigen registro de ciertas conversaciones. Las transcripciones convierten las grabaciones de audio en algo buscable e indexable.',
          },
        ],
      }}
      proTips={{
        title: 'Consejos para transcribir Teams',
        tips: [
          {
            title: 'Extrae el audio del MP4 antes de subir',
            desc: 'Los MP4 de Teams son vídeo 720p o 1080p, lo cual es irrelevante para una transcripción. Coge solo el audio: ffmpeg -i teams.mp4 -vn -ac 1 -b:a 64k teams.mp3. Un MP4 de 1.5 GB baja a 30 MB o menos.',
          },
          {
            title: 'Descarga desde OneDrive o SharePoint, no veas en streaming',
            desc: 'OneDrive a veces reproduce los MP4 en el navegador. Asegúrate de haber descargado el archivo antes de intentar subirlo aquí. Los enlaces compartidos de SharePoint no son el archivo en sí.',
          },
          {
            title: 'Para reuniones de más de 60 minutos, divide antes de subir',
            desc: 'Corta en trozos de 30 o 45 minutos primero. Las transcripciones se pueden concatenar. Las llamadas largas de Teams son comunes y vale la pena manejarlas con cuidado.',
          },
          {
            title: 'Silencia notificaciones de fondo durante la reunión si puedes',
            desc: 'Las notificaciones de escritorio de Outlook y los sonidos de chat de Teams durante la llamada acaban en el audio y a veces en la transcripción. Usa Focus Assist en Windows o No molestar en Mac.',
          },
          {
            title: 'Los micrófonos de sala necesitan limpieza',
            desc: 'Las Teams Rooms con micrófonos de techo tienen calidad variable. El eco y la captación a distancia perjudican la precisión. Adobe Podcast Enhance (web gratuito) ayuda con estas grabaciones antes de subir.',
          },
          {
            title: 'Para reuniones confidenciales, evita cualquier subida externa',
            desc: 'Incluida la nuestra. Para conversaciones de RR. HH., legales o de junta, mejor transcripción on-premise. Nuestro servicio es para reuniones no confidenciales donde el procesamiento en la nube con IA es aceptable.',
          },
        ],
      }}
      faq={[
        {
          q: '¿Mictoo funciona con grabaciones de Microsoft Teams?',
          a: 'Sí. Descarga el MP4 de OneDrive (el OneDrive del organizador para reuniones no-canal) o del sitio de SharePoint del canal. Súbelo a Mictoo. La extracción de audio primero lo acelera en reuniones largas.',
        },
        {
          q: '¿Necesito Teams Premium o un plan específico de Microsoft 365?',
          a: 'Necesitas un plan que te deje grabar reuniones. Cuando la grabación está en OneDrive o SharePoint, la transcripción aquí es gratis sea cual sea tu licencia.',
        },
        {
          q: '¿Mi grabación se subirá a Microsoft?',
          a: 'No. El archivo va a nuestro proveedor de transcripción (Groq, con OpenAI como respaldo) y se descarta tras procesarse. No va a Microsoft, Outlook ni a ningún servicio de Microsoft.',
        },
        {
          q: '¿Cómo se compara con la transcripción nativa de Teams?',
          a: 'La transcripción nativa de Teams está bien para reuniones en inglés si tu licencia la incluye. La nuestra es gratis, funciona en más idiomas y acentos, y exporta SRT limpio para editores de vídeo. Usa la que encaje con la reunión.',
        },
        {
          q: 'Mi grabación de Teams supera los 60 MB. ¿Qué hago?',
          a: 'Extrae solo el audio con ffmpeg o cualquier app de audio. Un MP4 de Teams de 1.5 GB baja a menos de 30 MB como audio. Si el audio sigue por encima de 60 MB, divide en trozos.',
        },
        {
          q: '¿Tendré etiquetas de hablante?',
          a: 'No automáticamente. Para una reunión con voces distinguibles, las etiquetas se añaden a mano según el flujo de la conversación. Si la reunión se grabó con pistas de audio separadas por hablante (raro en Teams), súbelas por separado para atribución limpia.',
        },
        {
          q: '¿Funciona con mensajes del chat de Teams?',
          a: 'No. Los mensajes del chat se quedan en Teams. Nosotros solo transcribimos el audio. Combínalos tú si necesitas ambos.',
        },
        {
          q: '¿Qué precisión tiene la transcripción de Teams?',
          a: 'Para reuniones con buenos micrófonos (laptop con cascos USB), 90–95 %. Para reuniones en salas con micrófonos de techo, 80–90 %. Nombres, términos técnicos y acrónimos suelen necesitar limpieza.',
        },
        {
          q: '¿Puedo transcribir una reunión de Teams en tiempo real?',
          a: 'No. Trabajamos con archivos grabados. Para tiempo real durante la reunión, usa los subtítulos en vivo o la transcripción nativa de Teams.',
        },
        {
          q: '¿Qué idiomas soportan?',
          a: 'Más de 50 con detección automática. Para reuniones de menos de 5 minutos o con intros sin habla (música de waiting room, tonos de espera), elige el idioma manualmente.',
        },
        {
          q: '¿Puedo exportar la transcripción a un Word o a OneDrive?',
          a: 'Exportamos texto plano (TXT) y SRT. Copia y pega en Word, o sube el TXT a OneDrive tú. No tenemos integración con Microsoft 365 todavía.',
        },
        {
          q: '¿Esto cumple GDPR para reuniones europeas de Teams?',
          a: 'No guardamos el audio ni la transcripción en nuestros servidores después de cerrar la página. Estamos en Europa, y nuestros proveedores (Groq US, OpenAI US) tienen DPAs firmados. Para preguntas concretas de cumplimiento, ver nuestra Política de Privacidad o escribir a info@mictoo.com.',
        },
      ]}
      relatedLinks={[
        { href: '/es/zoom-transcription', label: 'Transcripción de Zoom', desc: 'Para grabaciones Cloud o locales de Zoom.' },
        { href: '/es/google-meet-transcription', label: 'Transcripción de Google Meet', desc: 'Para grabaciones de Google Meet.' },
        { href: '/es/meeting-transcription', label: 'Transcripción de reunión', desc: 'Para grabaciones de otras plataformas.' },
        { href: '/es/business-transcription', label: 'Transcripción de negocios', desc: 'Para llamadas de ventas, entrevistas y otro audio de negocios.' },
      ]}
    />
  )
}
