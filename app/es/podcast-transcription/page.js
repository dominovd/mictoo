import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/podcast-transcription',
  'fr': 'https://mictoo.com/fr/podcast-transcription',
  'de': 'https://mictoo.com/de/podcast-transcription',
  'es': 'https://mictoo.com/es/podcast-transcription',
  'ru': 'https://mictoo.com/ru/podcast-transcription',
  'it': 'https://mictoo.com/it/podcast-transcription',
  'pt': 'https://mictoo.com/pt/podcast-transcription',
  'pl': 'https://mictoo.com/pl/podcast-transcription',
  'ja': 'https://mictoo.com/ja/podcast-transcription',
  'ko': 'https://mictoo.com/ko/podcast-transcription',
  'x-default': 'https://mictoo.com/podcast-transcription',
}

export const metadata = {
  title: 'Transcripción de podcast — generador gratuito con IA | Mictoo',
  description:
    'Transcripción gratuita de podcast con IA. Sube tu episodio (MP3, MP4, M4A, WAV) y obtén una transcripción limpia con marcas de tiempo en segundos. Sin registro, sin tarifa por minuto.',
  alternates: { canonical: 'https://mictoo.com/es/podcast-transcription', languages: LANGS },
}

export default function EsPodcastPage() {
  return (
    <LandingLayout
      defaultLanguage="es"
      badge="Podcasters · Locutores · Gratis"
      h1={
        <>
          Transcripción de podcast
          <br />
          <span className="text-brand-600">Generador gratuito de transcripciones</span>
        </>
      }
      subtitle="Convierte cualquier episodio en texto limpio. Sube tu MP3, MP4 o M4A y obtén la transcripción en segundos. Sin cuenta, sin tarifa por minuto."
      howItWorks={[
        {
          icon: '📂',
          title: 'Sube el episodio',
          desc: 'MP3, MP4, M4A, WAV o FLAC. Cloud Recording de Riverside, export de Descript, audio puro de Zoom, archivos de anchor.fm. Todos valen.',
        },
        {
          icon: '⚡',
          title: 'La IA hace el trabajo',
          desc: 'Whisper large-v3 corre en nuestro backend y convierte el audio en texto. La mayoría de los episodios de 30 minutos terminan en menos de un minuto.',
        },
        {
          icon: '📋',
          title: 'Copia, descarga o edita',
          desc: 'Coge el texto como TXT, SRT para subtítulos o pégalo directo en tu editor de show notes. Corrige palabras erróneas en nuestro visor antes de exportar.',
        },
      ]}
      whyUse={{
        title: 'Por qué los podcasters usan Mictoo',
        bullets: [
          {
            title: 'Los episodios largos no son problema',
            desc: 'Hasta 60 minutos por archivo tras iniciar sesión (gratis). Para divisiones en dos partes, mantenemos los timestamps relativos para que puedas unir los archivos SRT después sin tener que hacer matemáticas.',
          },
          {
            title: 'Aguanta acentos y solapes',
            desc: 'Whisper large-v3 es el modelo de voz abierto más fuerte que conocemos para inglés no nativo. Si tu copresentador está en Berlín o São Paulo, la transcripción no se convertirá en papilla.',
          },
          {
            title: 'Las bases musicales no lo rompen',
            desc: 'Nuestro pipeline corre detección de actividad de voz antes de la transcripción. Las intros instrumentales largas se etiquetan como silencio, no como palabras inventadas. Las cuñas patrocinadas con música por debajo también salen limpias.',
          },
          {
            title: 'Sin suscripción',
            desc: 'Muchos podcasters transcriben uno o dos episodios al mes. Pagar 15 dólares por una suscripción mensual para eso es un derroche. Sube el archivo cuando lo necesites. Vivimos de publicidad y de un plan Pro futuro para los usuarios intensivos.',
          },
          {
            title: 'Tu audio no se guarda',
            desc: 'Los archivos van directos al proveedor de transcripción, se transcriben y se descartan. No guardamos tus episodios, y los proveedores que usamos (Groq, OpenAI) no entrenan con datos de la API.',
          },
        ],
      }}
      useCases={{
        title: 'Qué hacen los podcasters con la transcripción',
        items: [
          {
            title: 'Show notes y posts de blog',
            desc: 'Pega la transcripción en tu CMS, marca los capítulos, mete los enlaces, publica el post. Un episodio de 45 minutos suele dar entre 6000 y 8000 palabras de material fuente. Tres o cuatro posts ligeramente editados a partir de una grabación.',
          },
          {
            title: 'Citas para redes sociales',
            desc: 'Escanea la transcripción buscando la frase que mejor encajó y conviértela en una imagen. Mucho más rápido que rebuscar el audio a 1.5x para encontrar el timestamp.',
          },
          {
            title: 'Archivo buscable de tu catálogo',
            desc: 'Pasa tus episodios viejos por transcripción en lote y de pronto tienes un Ctrl+F sobre años de conversaciones. Útil cuando vuelve un invitado y quieres recordar de qué hablasteis la última vez.',
          },
          {
            title: 'Reemplazo de subtítulos automáticos en YouTube',
            desc: 'Los subtítulos automáticos de YouTube son mediocres para podcasts de dos voces y con música. Sube un SRT de Mictoo en su lugar. Mejor puntuación, menos errores, mejor accesibilidad.',
          },
          {
            title: 'Enlace de transcripción para accesibilidad',
            desc: 'Muchos podcasters añaden un enlace "leer la transcripción" en las show notes del RSS. Ayuda a oyentes sordos y con dificultades auditivas, y ayuda a los buscadores a encontrar tu contenido.',
          },
        ],
      }}
      proTips={{
        title: 'Consejos para transcripciones de podcast más limpias',
        tips: [
          {
            title: 'Quita la música de intro y outro primero',
            desc: 'Whisper ignora bien la música, pero 90 segundos de cold open instrumental a veces disparan palabras fantasma. Si tu intro es la misma en cada episodio, recorta los primeros 1:30 en Audacity antes de subir. Te ahorras minutos de limpieza.',
          },
          {
            title: 'Exporta a 64 kbps mono si tu archivo bruto es enorme',
            desc: 'La voz no necesita estéreo y 64 kbps es de sobra para habla. Un episodio de dos horas a 64 kbps mono son unos 55 MB. Cabe en el límite de 60 MB con login sin dividir. Con ffmpeg: ffmpeg -i episode.wav -ac 1 -b:a 64k episode.mp3.',
          },
          {
            title: 'Para entrevistas con mal audio del invitado, transcribe cada pista por separado',
            desc: 'Si grabas en Riverside o SquadCast y tienes pistas separadas por hablante, sube cada una por su cuenta. A Whisper le es más fácil con una sola voz a la vez. Atribución más limpia, menos palabras perdidas en los solapes.',
          },
          {
            title: 'Fija el idioma a mano en episodios cortos',
            desc: 'La detección automática analiza el primer trozo de audio. Si abres con un cold open de una palabra o con una risa, la detección puede irse al idioma equivocado. Para cualquier cosa de menos de 5 minutos, elige el idioma manualmente.',
          },
          {
            title: 'La puntuación será imperfecta. Arregla las primeras 10 líneas y deja el resto',
            desc: 'Whisper acierta la mayor parte de la puntuación, pero a veces se le escapan puntos y comas o el estilo directo. Para show notes, las primeras 10 líneas son las que importan (la gente las ojea). Más allá, da por publicado.',
          },
          {
            title: 'Usa el export SRT aunque no necesites subtítulos',
            desc: 'El SRT te da marcas de tiempo cada pocos segundos. Aunque vayas a pegar en un post de blog, esas marcas te ayudan a saltar al audio para verificar una cita. Tenemos un generador SRT gratis en este mismo sitio.',
          },
        ],
      }}
      faq={[
        {
          q: '¿Puedo transcribir un episodio de 2 horas?',
          a: 'Sí, pero divídelo primero. Nuestro tope por archivo es 30 minutos en gratis o 60 minutos con login. Para un episodio de 2 horas, divídelo en dos o tres partes y transcribe cada una. Nuestra guía de división explica cómo hacerlo en 60 segundos con ffmpeg o Audacity.',
        },
        {
          q: '¿Obtengo etiquetas de hablante (host vs invitado)?',
          a: 'No automáticamente por ahora. Whisper en sí no hace diarización. Si tienes pistas separadas por hablante (típico en Riverside, SquadCast, Zencastr), sube cada una por separado y etiquétalas tú en la transcripción final. Estamos viendo cómo añadir diarización, pero solo cuando podamos hacerlo bien.',
        },
        {
          q: '¿Cómo maneja los acentos y los podcasts bilingües?',
          a: 'Whisper large-v3 se entrenó con 680 000 horas de audio multilingüe. Inglés no nativo, acentos regionales y code-switching funcionan mejor que en modelos más pequeños. Para un podcast que cambia entre inglés y español a mitad del episodio, elige "Detección automática" y Whisper seguirá el cambio.',
        },
        {
          q: '¿Qué formatos de audio soportan para podcast?',
          a: 'MP3, M4A, WAV, FLAC, OGG, WEBM y AAC. Y archivos de vídeo como MP4 y MOV (extraemos el audio). Si tu host de podcast te deja descargar en cualquiera de ellos, estás cubierto. AIFF y ALAC no se soportan directamente, conviértelos a WAV primero.',
        },
        {
          q: '¿Hay límite de palabras por episodio?',
          a: 'No hay límite de palabras. Solo el límite de tamaño de archivo (25 MB gratis, 60 MB con login) y duración (30 min gratis, 60 min con login). Un episodio típico de 60 minutos produce entre 9000 y 11 000 palabras.',
        },
        {
          q: '¿Qué precisión tiene la transcripción de podcast comparada con humanos?',
          a: 'Para audio de estudio limpio, Whisper large-v3 ronda el 5–10 % de word error rate. Los humanos están en 3–5 %. Para la mayoría de show notes y reaprovechamiento en blog, la IA es suficiente. Para testimonios judiciales o citas académicas, contrata a un humano.',
        },
        {
          q: '¿Mi episodio se guarda en vuestros servidores?',
          a: 'No. Pasamos el audio directo al proveedor de transcripción (Groq, con OpenAI como respaldo). Ellos lo procesan y nosotros lo descartamos. Nunca escribimos tu archivo de podcast en nuestra base de datos ni en el almacenamiento.',
        },
        {
          q: '¿Puedo descargar como SRT para subtítulos?',
          a: 'Sí. Tras la transcripción, pulsa el botón de descarga SRT. Úsalo directamente en YouTube Studio, Premiere Pro, DaVinci Resolve o cualquier editor de vídeo.',
        },
        {
          q: '¿Cobráis por minuto?',
          a: 'No. La transcripción en Mictoo es gratis. Hoy estamos financiados por publicidad, con un plan Pro previsto para usuarios que necesitan archivos más largos o subida por lotes.',
        },
        {
          q: 'Mi episodio tiene lenguaje explícito. ¿Se censura?',
          a: 'Sin filtrado. La transcripción refleja exactamente lo que se dijo. Si quieres editar palabrotas para una versión limpia, hazlo tú tras descargar.',
        },
        {
          q: '¿Puedo editar la transcripción antes de descargar?',
          a: 'Sí. Hay un editor básico en la vista de resultados. Arregla palabras erróneas y descarga la versión editada como TXT o SRT.',
        },
        {
          q: '¿La transcripción de podcast de Mictoo cumple el GDPR?',
          a: 'No guardamos el audio ni la transcripción en nuestros servidores después de cerrar la página. Estamos en Europa, y nuestros proveedores (Groq US, OpenAI US) tienen DPAs firmados. Para preguntas concretas de cumplimiento, ver nuestra Política de Privacidad o escribir a info@mictoo.com.',
        },
      ]}
      relatedLinks={[
        { href: '/es/free-srt-generator', label: 'Generador de SRT', desc: 'Archivos de subtítulos listos para podcast, no solo texto plano.' },
        { href: '/es/timestamped-transcription', label: 'Transcripción con marcas de tiempo', desc: 'Para marcadores de capítulos, cortes y búsqueda de citas.' },
        { href: '/es/interview-transcription', label: 'Transcripción de entrevista', desc: 'Mismo motor, optimizado para el formato uno a uno.' },
        { href: '/es/youtube-to-text', label: 'YouTube a texto', desc: '¿Tu episodio ya está en YouTube? Coge el audio desde allí.' },
      ]}
    />
  )
}
