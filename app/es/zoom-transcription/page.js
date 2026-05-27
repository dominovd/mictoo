import LandingLayout from '@/components/LandingLayout'

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
  title: 'Transcripción de Zoom — transcribe grabaciones gratis | Mictoo',
  description:
    'Transcripción gratuita de Zoom. Sube tu Cloud Recording (MP4) o grabación local (M4A) y obtén una transcripción precisa con IA en segundos. Sin registro, sin tarifa por minuto.',
  alternates: { canonical: 'https://mictoo.com/es/zoom-transcription', languages: LANGS },
}

export default function EsZoomPage() {
  return (
    <LandingLayout
      defaultLanguage="es"
      badge="ZOOM · MP4 · M4A · GRATIS"
      h1={
        <>
          Transcripción de Zoom
          <br />
          <span className="text-brand-600">Convierte grabaciones de Zoom en texto</span>
        </>
      }
      subtitle="Convierte tu grabación de Zoom en texto limpio. Cloud Recording MP4 o M4A local, ambos sirven. Sube el archivo y obtén la transcripción en segundos."
      howItWorks={[
        {
          icon: '🎬',
          title: 'Exporta tu grabación de Zoom',
          desc: 'Las cloud recordings se descargan como MP4 (vídeo + audio) o M4A (solo audio). Las grabaciones locales se guardan en tu equipo como MP4 más M4A. Cualquier formato vale.',
        },
        {
          icon: '⚡',
          title: 'Sube el archivo',
          desc: 'Arrástralo. Extraemos el audio (si es vídeo) y lo enviamos a Whisper large-v3. Una reunión de 30 minutos suele estar lista en menos de un minuto.',
        },
        {
          icon: '📋',
          title: 'Recibe la transcripción',
          desc: 'Léela, cópiala o descárgala como TXT o SRT. Arregla nombres o jerga mal entendidos en el editor antes de exportar.',
        },
      ]}
      whyUse={{
        title: 'Por qué Mictoo para grabaciones de Zoom',
        bullets: [
          {
            title: 'Funciona en cualquier plan de Zoom, incluido el gratuito',
            desc: 'La transcripción de Zoom está limitada a ciertos planes de pago. La nuestra no exige ningún plan de Zoom. Grabas, descargas, subes, listo.',
          },
          {
            title: 'Mejor con inglés no nativo y code-switching',
            desc: 'Whisper large-v3 maneja acentos y reuniones bilingües mejor que la transcripción nativa de Zoom, que históricamente es english-first.',
          },
          {
            title: 'El M4A solo audio es lo bastante pequeño para subirlo directo',
            desc: 'La mayoría de reuniones de Zoom de 30 minutos quedan entre 15 y 25 MB como M4A. Cabe cómodamente en el tier gratuito sin comprimir.',
          },
          {
            title: 'Sin preocuparte por la retención de 14 días',
            desc: 'Las Cloud Recordings de Zoom pueden desaparecer en 14 o 30 días según el plan. Una vez tienes el archivo descargado y transcrito aquí, es tuyo para siempre.',
          },
          {
            title: 'Privacidad',
            desc: 'El archivo va al proveedor de transcripción y se descarta. No escribimos la grabación de Zoom en nuestra base de datos ni en el almacenamiento.',
          },
        ],
      }}
      useCases={{
        title: 'Para qué se transcriben grabaciones de Zoom',
        items: [
          {
            title: 'Actas de reuniones internas',
            desc: 'Pasa la grabación, recibe el texto, pégalo en Notion o Confluence. Los que se perdieron la reunión se ponen al día en cinco minutos de lectura en vez de una hora de vídeo.',
          },
          {
            title: 'Llamadas con cliente y de ventas',
            desc: 'Guarda la transcripción en el CRM junto al deal. El tú del futuro, seis meses después, te lo agradecerá.',
          },
          {
            title: 'Standups asíncronos para equipos distribuidos',
            desc: 'Algunos equipos graban standups asíncronos en lugar de hacer reuniones en vivo. Las transcripciones los hacen buscables y ojeables.',
          },
          {
            title: 'Entrevistas de investigación',
            desc: 'Research cualitativo, entrevistas de usuario, llamadas de criba de candidatos. Lo que codificas y etiquetas es el texto, no el vídeo.',
          },
          {
            title: 'Transcripciones de webinars y mesas redondas',
            desc: 'Publica la transcripción junto a la grabación para accesibilidad y SEO. Los buscadores indexan el texto, pero no el vídeo.',
          },
        ],
      }}
      proTips={{
        title: 'Consejos para transcribir Zoom',
        tips: [
          {
            title: 'Descarga el M4A solo audio, no el MP4',
            desc: 'La Cloud Recording de Zoom ofrece ambos. El M4A es una décima parte del tamaño del MP4 con la misma calidad de audio. Subida más rápida, muy por debajo del límite de 60 MB para la mayoría de reuniones.',
          },
          {
            title: 'Activa "Record a separate audio file for each participant" para reuniones con varios hablantes',
            desc: 'En Ajustes de Zoom, Recording. Te da un M4A por hablante. Transcribe cada uno por separado para atribución limpia sin diarización.',
          },
          {
            title: 'Silencia a los participantes que no hablan',
            desc: 'El ruido de fondo de los micrófonos abiertos durante una presentación produce palabras fantasma en la transcripción. Vale la pena imponerlo en llamadas grandes.',
          },
          {
            title: 'La grabación local y la cloud tienen la misma calidad',
            desc: 'Ambas graban con los mismos ajustes de audio por defecto. La local es más rápida (no hay subida a Zoom primero) pero ocupa espacio en disco.',
          },
          {
            title: 'Para contenido sensible, usa grabación local',
            desc: 'La cloud guarda tu reunión en los servidores de Zoom. La local se queda en tu máquina hasta que decidas dónde enviarla. Para conversaciones confidenciales con clientes o de RR. HH., local y luego directo a nosotros es el camino que preserva la privacidad.',
          },
          {
            title: 'Las reuniones de Zoom largas (más de 60 minutos) hay que dividirlas',
            desc: 'Nuestro tope por archivo es 60 minutos con login. Para una llamada de 90 minutos, divídela en dos trozos de 45. Fácil en Audacity (File, Export, Multiple) o con ffmpeg.',
          },
        ],
      }}
      faq={[
        {
          q: '¿Mictoo funciona con Cloud Recordings de Zoom?',
          a: 'Sí. Descarga el MP4 o M4A desde tu biblioteca de grabaciones de Zoom y súbelo a Mictoo. El export M4A solo audio es más rápido y pequeño.',
        },
        {
          q: '¿Funciona con grabaciones de Zoom Phone?',
          a: 'Sí. Zoom Phone graba en MP3 o M4A. Ambos sirven. El audio telefónico (8 kHz mono) se transcribe algo menos preciso que una reunión por vídeo, pero el resultado se lee bien.',
        },
        {
          q: '¿Y con grabaciones locales de Zoom?',
          a: 'Misma historia. Zoom las guarda como MP4 más M4A en tu carpeta de Zoom por defecto. Sube el M4A aquí.',
        },
        {
          q: '¿Tendré etiquetas de hablante?',
          a: 'No automáticamente. Si activaste "Record a separate audio file for each participant" en los ajustes de Zoom, puedes transcribir el archivo de cada hablante por separado. Si no, tendrás que añadir las etiquetas a mano según el flujo de la conversación.',
        },
        {
          q: 'Mi grabación de Zoom supera los 60 MB. ¿Qué hago?',
          a: 'Usa la descarga solo audio (M4A) en vez del MP4. Si sigue siendo demasiado grande, divide en trozos o vuelve a codificar con menor bitrate. Mira nuestras guías de compresión y división.',
        },
        {
          q: '¿Cómo se compara Mictoo con la transcripción nativa de Zoom?',
          a: 'Somos mejores en precisión para inglés no nativo, mejores con acentos y con cobertura de idiomas más amplia (más de 50). La transcripción de Zoom es más cómoda si ya pagas el plan correcto. La nuestra es gratis y funciona en cualquier tier de Zoom.',
        },
        {
          q: '¿Mi grabación de Zoom se guarda en vuestros servidores?',
          a: 'No. El archivo va al proveedor de transcripción (Groq, con OpenAI como respaldo), se transcribe y se descarta. No escribimos la grabación en disco.',
        },
        {
          q: '¿Puedo transcribir una reunión de Zoom en tiempo real?',
          a: 'No. Trabajamos solo con archivos grabados. Para tiempo real durante la reunión, la herramienta nativa de Zoom o un asistente de reuniones dedicado sería lo correcto.',
        },
        {
          q: '¿Qué hay de los webinars de Zoom y reuniones grandes?',
          a: 'Mismo flujo. Descarga la grabación, sube, transcribe. Para webinars muy largos (más de 60 minutos) divide primero.',
        },
        {
          q: '¿Transcribirá los mensajes del chat de la reunión?',
          a: 'No. Zoom guarda los mensajes del chat por separado (como TXT en tu carpeta de Zoom). Nosotros solo transcribimos el audio. Combínalos tú si necesitas ambos.',
        },
        {
          q: '¿Qué precisión tiene la transcripción de audio de Zoom?',
          a: 'Para audio limpio de reunión con buenos micrófonos, entre 90 % y 95 %. Para reuniones con mal audio (micrófono de laptop, sala ruidosa, Wi-Fi débil), la precisión baja un poco. Los nombres y términos técnicos suelen necesitar limpieza.',
        },
        {
          q: '¿Esto funciona también con grabaciones de Microsoft Teams o Google Meet?',
          a: 'Sí, el mismo motor. Tenemos páginas dedicadas para Google Meet y Microsoft Teams.',
        },
      ]}
      relatedLinks={[
        { href: '/es/google-meet-transcription', label: 'Transcripción de Google Meet', desc: 'Mismo flujo para grabaciones de Google Meet.' },
        { href: '/es/teams-meeting-transcription', label: 'Transcripción de Teams', desc: 'Para grabaciones de Microsoft Teams.' },
        { href: '/es/meeting-transcription', label: 'Transcripción de reunión', desc: 'Página genérica si tu grabación viene de otra plataforma.' },
        { href: '/es/interview-transcription', label: 'Transcripción de entrevista', desc: 'Para llamadas uno a uno y entrevistas cualitativas.' },
      ]}
    />
  )
}
