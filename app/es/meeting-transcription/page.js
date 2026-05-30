import LandingLayout from '@/components/LandingLayout'

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
  title: 'Transcripción de reuniones — transcripción gratuita de llamadas con IA | Mictoo',
  description:
    'Transcripción gratuita de reuniones con IA. Sube la grabación de cualquier reunión (de cualquier plataforma) y obtén texto limpio en segundos. Sin registro, sin tarifa por minuto, más de 50 idiomas.',
  alternates: { canonical: 'https://mictoo.com/es/meeting-transcription', languages: LANGS },

  openGraph: {
    title: "Transcripción de reuniones — transcripción gratuita de llamadas con IA | Mictoo",
    description: "Transcripción gratuita de reuniones con IA. Sube la grabación de cualquier reunión (de cualquier plataforma) y obtén texto limpio en segundos. Sin registro, sin tarifa por minuto, más de 50 idiomas.",
    url: "https://mictoo.com/es/meeting-transcription",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Transcripción de reuniones — transcripción gratuita de llamadas con IA | Mictoo",
    description: "Transcripción gratuita de reuniones con IA. Sube la grabación de cualquier reunión (de cualquier plataforma) y obtén texto limpio en segundos. Sin registro, sin tarifa por minuto, más de 50 idiomas.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function EsMeetingPage() {
  return (
    <LandingLayout
      defaultLanguage="es"
      badge="Cualquier plataforma · Gratis · 50+ idiomas"
      h1={
        <>
          Transcripción de reuniones
          <br />
          <span className="text-brand-600">Transcripciones de reunión con IA, gratis</span>
        </>
      }
      subtitle="Convierte cualquier grabación de reunión en texto limpio. Funciona con Zoom, Meet, Teams, Webex, Discord, Skype, grabadoras de voz, lo que sea. Sin registro, sin tarifa por minuto."
      howItWorks={[
        {
          icon: '🎙️',
          title: 'Consigue la grabación de la reunión',
          desc: 'Sea cual sea la plataforma (Zoom, Meet, Teams, Webex, Discord, GoToMeeting, grabadora en persona), exporta la grabación como MP4, MP3, M4A, WAV, FLAC u OGG.',
        },
        {
          icon: '⚡',
          title: 'Sube el archivo',
          desc: 'Extraemos el audio si hace falta y lo enviamos a Whisper large-v3. Una reunión de 30 minutos termina en alrededor de un minuto.',
        },
        {
          icon: '📋',
          title: 'Recibe la transcripción',
          desc: 'Léela, cópiala o descárgala como TXT o SRT. Arregla palabras o jerga mal entendidas en el editor antes de exportar.',
        },
      ]}
      whyUse={{
        title: 'Por qué Mictoo para reuniones',
        bullets: [
          {
            title: 'La plataforma de origen no importa',
            desc: 'Zoom, Meet, Teams, Webex, Discord, GoToMeeting, BlueJeans, grabadoras en persona. Si tienes el archivo, lo transcribimos.',
          },
          {
            title: 'Un solo modelo para todas tus reuniones',
            desc: 'El mismo Whisper large-v3 para la llamada de ventas que grabaste en Zoom y la retro de equipo en Teams. Precisión consistente, formato de salida consistente.',
          },
          {
            title: 'Gratis sin contador de minutos',
            desc: 'La mayoría de transcripciones nativas de herramientas de reuniones vienen con una licencia que tiene su propio coste. La nuestra es genuinamente gratis, sin tope mensual.',
          },
          {
            title: 'Más de 50 idiomas',
            desc: 'Reuniones transfronterizas, conversaciones bilingües, equipos internacionales. Whisper las maneja todas con detección automática o selección manual.',
          },
          {
            title: 'Nada se guarda',
            desc: 'El archivo va al proveedor de transcripción y se descarta. No escribimos el audio de tu reunión en nuestros servidores.',
          },
        ],
      }}
      useCases={{
        title: 'Tipos comunes de reuniones que se transcriben',
        items: [
          {
            title: 'Standups y retros de equipo',
            desc: 'Los equipos asíncronos transcriben los standups para que los miembros en otras zonas horarias puedan ponerse al día. Las retros se benefician de un registro escrito para el follow-up.',
          },
          {
            title: 'Llamadas con cliente y customer',
            desc: 'Llamadas de ventas, check-ins con cuenta, customer interviews. Guarda la transcripción en el CRM junto al deal o el contacto.',
          },
          {
            title: 'Sesiones internas de formación y onboarding',
            desc: 'Los nuevos contratados leen la transcripción mientras ven el vídeo. Mejor retención, buscable después cuando olviden un paso.',
          },
          {
            title: 'Reuniones de junta, offsites de liderazgo, all-hands',
            desc: 'Las transcripciones hacen las comunicaciones corporativas más accesibles. Útil para empleados que no pudieron asistir y para recordkeeping.',
          },
          {
            title: 'Entrevistas e investigación cualitativa',
            desc: 'Sea criba de candidatos, entrevistas de usuario o periodismo, la transcripción es el producto de trabajo real.',
          },
        ],
      }}
      proTips={{
        title: 'Consejos para transcribir reuniones',
        tips: [
          {
            title: 'Extrae el audio si la fuente es vídeo',
            desc: 'Las plataformas de reuniones exportan MP4 con audio y vídeo. Solo necesitamos el audio. ffmpeg -i meeting.mp4 -vn -ac 1 -b:a 64k meeting.mp3 baja un MP4 de 1 GB a 25 MB o menos. Subida más rápida, misma transcripción.',
          },
          {
            title: 'Asegúrate de que todos tengan un micrófono de verdad',
            desc: 'Los micrófonos integrados de laptops en una llamada por Wi-Fi producen audio ruidoso y con eco. Un cascos USB con cable de 20 dólares para cada participante se amortiza en precisión de transcripción.',
          },
          {
            title: 'Silencia a los participantes que no hablan',
            desc: 'Los micrófonos abiertos durante una presentación captan el tecleo, el ruido de fondo de la sala y conversaciones laterales. Whisper a veces los transcribe como palabras sin sentido.',
          },
          {
            title: 'Para reuniones con hablantes no nativos de inglés, no dividas sin necesidad',
            desc: 'Whisper se beneficia de contexto largo para frases menos frecuentes. Un archivo continuo de 30 minutos se transcribe mejor que tres trozos de 10 si tienes elección.',
          },
          {
            title: 'Las reuniones largas se dividen mejor en pausas naturales',
            desc: 'Si tienes que cortar una reunión de 90 minutos en trozos, busca pausas naturales (un café, una transición de agenda) y corta ahí. Menos riesgo de partir una frase a la mitad.',
          },
          {
            title: 'Elige el idioma a mano en reuniones cortas o inusuales',
            desc: 'La detección automática analiza el primer trozo. En reuniones que empiezan con música de espera, un saludo breve o silencio, la selección manual es más fiable.',
          },
        ],
      }}
      faq={[
        {
          q: '¿Qué plataformas de reuniones soportan?',
          a: 'Todas. Trabajamos con el archivo de la grabación, no con la plataforma. Zoom, Microsoft Teams, Google Meet, Webex, Discord, Skype, GoToMeeting, BlueJeans, grabadoras en persona. Si el archivo es MP4, MP3, M4A, WAV, FLAC, OGG o WEBM, lo transcribimos.',
        },
        {
          q: 'Mi reunión fue en Zoom (o Meet, o Teams). ¿Uso esta página o la específica de plataforma?',
          a: 'Mismo motor, misma precisión. Las páginas específicas de plataforma dan consejos más enfocados. Usa la que te resulte más fácil.',
        },
        {
          q: '¿Tendré etiquetas de hablante?',
          a: 'No automáticamente. Whisper no hace diarización por defecto. Para una reunión con voces distinguibles, añade las etiquetas a mano según el flujo de conversación. Para reuniones con pistas de audio separadas por hablante (Riverside, SquadCast, a veces Zoom), transcribe cada pista por separado.',
        },
        {
          q: 'Mi grabación de reunión supera los 60 MB. ¿Qué hago?',
          a: 'Dos opciones. Extraer solo el audio del vídeo (un comando de ffmpeg) o dividir la reunión en trozos.',
        },
        {
          q: '¿Qué precisión tiene la transcripción de reuniones?',
          a: 'Para audio limpio (buenos micrófonos, sin ruido de fondo), 90–95 %. Para micrófonos de sala o altavoces, 80–90 %. Los nombres y términos técnicos suelen necesitar limpieza.',
        },
        {
          q: '¿Mi reunión se guardará en vuestros servidores?',
          a: 'No. El archivo va al proveedor de transcripción y se descarta tras procesarse. No escribimos el audio de tu reunión ni la transcripción en nuestra base de datos.',
        },
        {
          q: '¿La transcripción de reuniones de Mictoo cumple el GDPR?',
          a: 'No conservamos el audio ni la transcripción después de cerrar la página. Estamos en Europa, y nuestros proveedores (Groq US, OpenAI US) tienen DPAs firmados. Para preguntas concretas, ver nuestra Política de Privacidad.',
        },
        {
          q: '¿Puedo obtener un resumen de la reunión, no solo la transcripción?',
          a: 'Ahora mismo damos la transcripción completa. Para resúmenes, pega la transcripción en ChatGPT o Claude con un prompt como "Resume esta transcripción de reunión en decisiones clave y tareas".',
        },
        {
          q: '¿Qué idiomas se soportan?',
          a: 'Más de 50 con detección automática. Para reuniones de menos de 5 minutos o con intros sin habla, elige el idioma manualmente para mejor resultado.',
        },
        {
          q: '¿Puedo transcribir una reunión en tiempo real?',
          a: 'No. Trabajamos con archivos grabados. Para tiempo real, usa la función de transcripción nativa de la plataforma de reunión o un asistente de reuniones dedicado.',
        },
        {
          q: '¿Cómo consigo que el SRT se alinee con mi vídeo de reunión?',
          a: 'Descarga el SRT tras la transcripción. La mayoría de editores de vídeo (Premiere, DaVinci, CapCut, Final Cut) importan SRTs que se alinean automáticamente mientras el audio del vídeo coincida con lo que transcribiste.',
        },
        {
          q: '¿Puedo transcribir reuniones confidenciales?',
          a: 'Para reuniones confidenciales (RR. HH., legales, M&A, junta), sé cauto con cualquier servicio de transcripción en la nube, incluido el nuestro. Nuestro archivo no se guarda, pero pasa por un proveedor de voz de terceros para procesarse. Para máxima privacidad, usa una instalación local de Whisper.',
        },
      ]}
      relatedLinks={[
        { href: '/es/zoom-transcription', label: 'Transcripción de Zoom', desc: 'Consejos y flujo específicos de Zoom.' },
        { href: '/es/google-meet-transcription', label: 'Transcripción de Google Meet', desc: 'Para grabaciones de Google Meet.' },
        { href: '/es/teams-meeting-transcription', label: 'Transcripción de Teams', desc: 'Para grabaciones de Microsoft Teams.' },
        { href: '/es/business-transcription', label: 'Transcripción de negocios', desc: 'Para llamadas con cliente, conferencias y llamadas de ventas.' },
      ]}
    />
  )
}
