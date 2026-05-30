import LandingLayout from '@/components/LandingLayout'

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
  title: 'Transcripción de entrevistas — generador gratuito con IA | Mictoo',
  description:
    'Transcripción gratuita de entrevistas con IA. Sube la grabación (MP3, M4A, MP4, WAV) y obtén una transcripción limpia con marcas de tiempo en segundos. Pensado para periodistas e investigadores.',
  alternates: { canonical: 'https://mictoo.com/es/interview-transcription', languages: LANGS },

  openGraph: {
    title: "Transcripción de entrevistas — generador gratuito con IA | Mictoo",
    description: "Transcripción gratuita de entrevistas con IA. Sube la grabación (MP3, M4A, MP4, WAV) y obtén una transcripción limpia con marcas de tiempo en segundos. Pensado para periodistas e investigadores.",
    url: "https://mictoo.com/es/interview-transcription",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Transcripción de entrevistas — generador gratuito con IA | Mictoo",
    description: "Transcripción gratuita de entrevistas con IA. Sube la grabación (MP3, M4A, MP4, WAV) y obtén una transcripción limpia con marcas de tiempo en segundos. Pensado para periodistas e investigadores.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function EsInterviewPage() {
  return (
    <LandingLayout
      defaultLanguage="es"
      badge="Periodismo · Research · Gratis"
      h1={
        <>
          Transcripción de entrevistas
          <br />
          <span className="text-brand-600">Transcripciones de entrevista gratis</span>
        </>
      }
      subtitle="Convierte cualquier grabación de entrevista en texto limpio y citable. Para periodistas, investigadores, podcasters, equipos de selección. Sin registro, sin tarifa por minuto, sin email."
      howItWorks={[
        {
          icon: '🎙️',
          title: 'Sube el audio de la entrevista',
          desc: 'MP3 de una grabadora de voz, M4A de un móvil, MP4 de una videollamada, WAV de una grabadora de campo. Todos sirven.',
        },
        {
          icon: '⚡',
          title: 'La IA lo transcribe',
          desc: 'Whisper large-v3 lee el audio. Una entrevista de 30 minutos suele estar lista en alrededor de un minuto.',
        },
        {
          icon: '📋',
          title: 'Lee, edita, exporta',
          desc: 'Repasa la transcripción con marcas de tiempo. Arregla nombres o jerga en el editor. Descarga como TXT para notas, SRT para vídeo, o copia a tu software de codificación.',
        },
      ]}
      whyUse={{
        title: 'Por qué Mictoo para transcribir entrevistas',
        bullets: [
          {
            title: 'Whisper se maneja bien con entrevistas',
            desc: 'Una sola grabación con dos voces y turnos claros es el caso más limpio para reconocimiento de voz. La mayoría de entrevistas salen al 90–95 % de precisión en la primera pasada.',
          },
          {
            title: 'Marcas de tiempo para citar y rastrear citas',
            desc: 'Cada línea del export SRT tiene su timestamp. Cuando necesitas verificar una cita o volver a un momento concreto de la grabación, la marca te dice exactamente dónde.',
          },
          {
            title: 'Sin coste por entrevista',
            desc: 'Algunos servicios cobran por minuto o por entrevista. Nosotros no. Transcribe una o cincuenta, el precio es el mismo (gratis).',
          },
          {
            title: 'Más de 50 idiomas, incluso entrevistas bilingües',
            desc: 'Las entrevistas multilingües son comunes en research y periodismo. Whisper maneja el code-switching mejor que la mayoría de servicios.',
          },
          {
            title: 'Privacidad y protección de fuentes',
            desc: 'El archivo va al proveedor de transcripción y se descarta. No conservamos el audio. Para material sensible, esto importa.',
          },
        ],
      }}
      useCases={{
        title: 'Quién usa transcripciones de entrevista',
        items: [
          {
            title: 'Periodismo y reportajes',
            desc: 'Los reporteros transcriben entrevistas para citar con precisión y para repasar conversaciones largas en busca del material más útil. Una entrevista de 60 minutos a menudo acaba como 3–5 citas clave en la pieza publicada.',
          },
          {
            title: 'Research cualitativo y estudios académicos',
            desc: 'Los investigadores transcriben entrevistas semiestructuradas para codificar y analizar en NVivo, Atlas.ti o MAXQDA. La transcripción es el dataset.',
          },
          {
            title: 'Entrevistas de podcast',
            desc: 'Los anfitriones de podcast transcriben entrevistas con invitados para show notes, posts de blog del episodio y citas para redes. El audio llega a una audiencia, el texto llega a otra distinta a través del buscador.',
          },
          {
            title: 'Selección y entrevistas con candidatos',
            desc: 'Reclutadores y hiring managers transcriben entrevistas para compartir con el equipo. Más fácil que un vídeo para revisores en distintas zonas horarias. Más fácil comparar notas cuando todos tienen el mismo texto.',
          },
          {
            title: 'User research y customer interviews',
            desc: 'Los equipos de producto transcriben conversaciones con clientes para encontrar patrones. La transcripción va al repositorio de research (Dovetail, Marvin o un Notion compartido).',
          },
        ],
      }}
      proTips={{
        title: 'Consejos para transcribir entrevistas',
        tips: [
          {
            title: 'Usa un micrófono de verdad, incluso para la entrevista por teléfono',
            desc: 'Un lavalier o USB para el entrevistado en persona, y un cascos decente para el entrevistador al teléfono. La calidad de la grabación es el factor único más grande en la precisión de la transcripción.',
          },
          {
            title: 'Graba en un espacio tranquilo',
            desc: 'Las entrevistas en cafetería quedan muy bien en cámara y se transcriben mal. La música de fondo y el bullicio degradan la precisión más de lo que la gente cree.',
          },
          {
            title: 'Para entrevistas de dos voces, transcribe primero y añade etiquetas de hablante a mano después',
            desc: 'Whisper no hace diarización. Para una entrevista de ida y vuelta limpia, añadir "Entrevistador:" y "Fuente:" tarda unos 5 minutos por entrevista de 30.',
          },
          {
            title: 'Si tienes pistas de audio separadas (Riverside, SquadCast), transcribe cada una por separado',
            desc: 'Entonces obtienes atribución limpia sin adivinar. Algunas grabadoras de research capturan dos micros en dos canales de un solo archivo estéreo. Puedes dividirlo en dos mono primero.',
          },
          {
            title: 'Guarda la transcripción con la fecha y el nombre de la fuente',
            desc: 'Un archivo llamado 2026-05-25-jane-smith.txt es más fácil de encontrar seis meses después que transcript-final-v2.txt.',
          },
          {
            title: 'Edita las primeras 50 líneas con cuidado, deja el resto como está',
            desc: 'La gente ojea las transcripciones. La parte de inicio importa más. Más allá, arregla solo las citas que vayas a usar.',
          },
          {
            title: 'Fija el idioma manualmente si la entrevista no es en inglés',
            desc: 'La detección automática funciona para la mayoría de archivos, pero un falso arranque de 5 segundos al principio puede engañarla. Elegir el idioma explícitamente es más fiable.',
          },
        ],
      }}
      faq={[
        {
          q: '¿Es lo bastante preciso para citas periodísticas?',
          a: 'Para citas literales, siempre verifica contra el audio. Whisper acierta el 90–95 % de las palabras en audio de entrevista limpio. El 5–10 % que falla suele incluir nombres, términos técnicos y solapes. Usa las marcas SRT para volver a la grabación en cualquier cita que vayas a publicar.',
        },
        {
          q: '¿Tendré etiquetas de hablante?',
          a: 'No automáticamente. Las añades según el flujo de conversación. Para una entrevista de 2 hablantes esto es rápido. Para mesas o focus groups, planifica más tiempo o sube la pista de cada hablante por separado si las tienes.',
        },
        {
          q: '¿Puedo transcribir una entrevista en otro idioma?',
          a: 'Sí, más de 50 idiomas con detección automática. Para entrevistas de menos de 5 minutos o no en inglés que abran con chit-chat en inglés, elige el idioma manualmente.',
        },
        {
          q: 'Mi entrevista dura 90 minutos. ¿Qué hago?',
          a: 'Divídela en trozos por debajo del tope de 60 minutos. El corte natural es donde la conversación pausa (un café a media entrevista, un cambio de tema).',
        },
        {
          q: '¿Qué precisión tiene con términos técnicos y nombres propios?',
          a: 'Menos precisa que con vocabulario común. Whisper no sabe el nombre de la empresa de tu fuente, el término médico que usó o el software específico que mencionó. Cuenta con tener que arreglar estos a mano. El resto de la transcripción será sólido.',
        },
        {
          q: '¿Se guarda el audio?',
          a: 'No. El archivo va al proveedor de transcripción (Groq, con OpenAI como respaldo), se procesa y se descarta. No conservamos el audio en nuestros servidores.',
        },
        {
          q: '¿Esto cumple con las políticas de ética de research?',
          a: 'La mayoría de protocolos aprobados por un IRB exigen saber dónde se procesa el audio. Nuestros proveedores procesan en EE. UU. No conservamos. Para cumplimiento específico de IRB, documenta el flujo y consulta con tu IRB. Para máximo control, usa una instalación local de Whisper en tu propia máquina.',
        },
        {
          q: '¿Puedo importar la transcripción a NVivo, Atlas.ti o Dedoose?',
          a: 'Sí. Descarga como TXT e importa en tu herramienta de análisis cualitativo. La transcripción es texto plano, no hace falta ningún formato especial.',
        },
        {
          q: '¿Cuánto tarda la transcripción?',
          a: 'Alrededor del 1–2 % de la duración del audio. Una entrevista de 30 minutos termina en torno a 60 segundos.',
        },
        {
          q: '¿Qué pasa si la entrevista tiene mala calidad de audio?',
          a: 'Pásala primero por una herramienta de denoise (Audacity Noise Reduction o Adobe Podcast Enhance). Luego sube la versión limpia. Una mejor entrada da una salida notablemente mejor.',
        },
        {
          q: '¿Puedo transcribir una entrevista grabada con el móvil?',
          a: 'Sí. Las Notas de voz del iPhone se guardan como M4A, las grabadoras de Android suelen ser M4A o MP3. Ambos sirven. AirDrop o email el archivo a tu ordenador y súbelo aquí.',
        },
        {
          q: '¿Los timestamps del SRT coinciden exactamente con la grabación original?',
          a: 'Sí, al milisegundo. Los timestamps SRT reflejan el tiempo real en el archivo de audio. Funcionan para volver a un momento concreto en cualquier reproductor de audio o vídeo.',
        },
      ]}
      relatedLinks={[
        { href: '/es/podcast-transcription', label: 'Transcripción de podcast', desc: 'Para entrevistas de podcast y conversaciones de host.' },
        { href: '/es/timestamped-transcription', label: 'Transcripción con marcas de tiempo', desc: 'Para marcas por palabra o por frase.' },
        { href: '/es/voice-memo-to-text', label: 'Notas de voz a texto', desc: 'Para entrevistas grabadas por teléfono.' },
        { href: '/es/business-transcription', label: 'Transcripción de negocios', desc: 'Para llamadas de ventas, customer calls, focus groups.' },
      ]}
    />
  )
}
