import FormatPageLayout from '@/components/FormatPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/m4a-to-text',
  'fr': 'https://mictoo.com/fr/m4a-to-text',
  'de': 'https://mictoo.com/de/m4a-to-text',
  'es': 'https://mictoo.com/es/m4a-to-text',
  'ru': 'https://mictoo.com/ru/m4a-to-text',
  'it': 'https://mictoo.com/it/m4a-to-text',
  'pt': 'https://mictoo.com/pt/m4a-to-text',
  'pl': 'https://mictoo.com/pl/m4a-to-text',
  'ja': 'https://mictoo.com/ja/m4a-to-text',
  'ko': 'https://mictoo.com/ko/m4a-to-text',
  'x-default': 'https://mictoo.com/m4a-to-text',
}

export const metadata = {
  title: 'M4A a Texto: Transcripción de Memoria de Voz y Audio de Apple Gratis | Mictoo',
  description:
    'Sube un archivo M4A desde las Memorias de Voz de iPhone, GarageBand, Apple Podcasts o FaceTime, y obtén una transcripción editable en segundos. AAC dentro de MP4, sin necesidad de conversión.',
  alternates: {
    canonical: 'https://mictoo.com/es/m4a-to-text',
    languages: LANGS,
  },
  openGraph: {
    title: 'M4A a Texto: Transcripción de Memoria de Voz y Audio de Apple | Mictoo',
    description: 'Sube M4A desde Memorias de Voz, GarageBand, Apple Podcasts o FaceTime. Transcripción editable en segundos.',
    url: 'https://mictoo.com/es/m4a-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'M4A a Texto: Transcripción Gratis de Memoria de Voz de iPhone',
    description: 'Sube M4A desde Memorias de Voz, GarageBand, Apple Podcasts. Transcripción editable en segundos.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function EsM4aToTextPage() {
  return (
    <FormatPageLayout
      locale="es"
      badge="M4A · AAC · iPhone · Gratis"
      h1First="M4A a Texto"
      h1Second="Para Memorias de Voz de iPhone y audio de Apple"
      subtitle="M4A es lo que tu aplicación de Memorias de Voz de iPhone escribe, lo que GarageBand exporta y lo que Apple Podcasts distribuye. Arrastra el archivo directamente desde tu dispositivo, mantén el AAC, obtén una transcripción con marcas de tiempo en segundos."
      highlightFormat="m4a"
      previewFileName="voice-memo.m4a"
      previewWordCount={148}
      previewDurationLabel="6:18"
      previewLines={[
        { t: '0:00',  line: 'Está bien, una rápida memoria de voz antes de que olvide toda la idea.' },
        { t: '0:04',  line: 'Así que la propuesta es que tomemos el flujo de pago y lo dividamos en dos pasos claros en lugar de un formulario largo.' },
        { t: '0:13',  line: 'Paso uno, solo correo electrónico y tarjeta. Paso dos, detalles de envío después de que vean el número de confirmación.' },
        { t: '0:22',  line: 'La razón por la que esto importa es que la tasa de abandono en el formulario de una sola página actual es de alrededor del treinta y ocho por ciento.' },
        { t: '0:32',  line: 'La mayor parte de ese abandono ocurre en la sección de envío, no en la entrada de la tarjeta, lo cual es contraintuitivo.' },
        { t: '0:42',  line: 'Si trasladamos el envío a después de la compra, probablemente podamos recuperar del doce al quince por ciento de ese tráfico.' },
        { t: '0:52',  line: 'En cuanto al tiempo, creo que esto son dos semanas de frontend, una semana de backend, tal vez una semana de pruebas.' },
        { t: '1:02',  line: 'Hacer seguimiento con el equipo de pago mañana para ver si hay algo que ya intentaron y falló.' },
      ]}
      whyTitle="Por qué Mictoo para la transcripción de M4A"
      whyCards={[
        {
          icon: 'mic',
          title: 'Construido para Memorias de Voz de iPhone',
          desc: 'Arrastra el .m4a directamente desde tu hoja de compartir Memorias de Voz o desde iCloud. Sin molestias de formato, sin paso de conversión.',
        },
        {
          icon: 'gear',
          title: 'AAC dentro de MP4, manejado de forma nativa',
          desc: 'M4A es audio AAC en un contenedor MP4. Analizamos la caja ftyp, extraemos la pista AAC y se la entregamos a Whisper sin re-codificación.',
        },
        {
          icon: 'sparkles',
          title: 'Resumen de IA para ideas de memorias de voz',
          desc: 'El resumen aparece junto a la transcripción. Convierte memorias de lluvia de ideas en una lista de acciones concisa.',
        },
        {
          icon: 'globe',
          title: 'Traduce a más de 50 idiomas',
          desc: 'Memoria de voz en español, nota grabada durante una reunión en francés, dictado en japonés. Traduce al inglés (o cualquier objetivo) después de la transcripción.',
        },
      ]}
      scenariosTitle="Cuándo M4A a texto es la opción correcta"
      scenarios={[
        {
          icon: 'mic',
          title: 'Memorias de Voz de iPhone',
          desc: 'Cada grabación de la aplicación de Memorias de Voz integrada en iPhone o iPad. Ideas, notas de reuniones, clips de entrevistas, conferencias.',
        },
        {
          icon: 'briefcase',
          title: 'Grabaciones de FaceTime y llamadas',
          desc: 'El audio exportado de FaceTime, llamadas de WhatsApp o sesiones de Zoom a menudo llega como M4A. Arrastra el archivo para obtener una versión de texto limpia.',
        },
        {
          icon: 'sparkles',
          title: 'Exportaciones de GarageBand y Logic',
          desc: 'Rebote solo de voz, episodio de podcast o edición de entrevista de GarageBand o Logic Pro. Obtén una transcripción para construir notas del programa.',
        },
        {
          icon: 'video',
          title: 'Episodios de Apple Podcasts',
          desc: 'Episodio descargado de Apple Podcasts (M4A en iOS por defecto). Transcripción para citar, referenciar o reutilizar.',
        },
        {
          icon: 'editPen',
          title: 'Dictado y notas largas',
          desc: 'Dictaste un capítulo, un memo o una entrada de diario en Memorias de Voz. Convierte eso en texto editable listo para tu aplicación de escritura.',
        },
        {
          icon: 'users',
          title: 'Entrevista de campo',
          desc: 'Entrevista de periodismo, investigación o historia oral grabada en iPhone. La transcripción es el material bruto para la historia o el trabajo.',
        },
      ]}
      technicalTitle="Qué saber sobre M4A"
      technicalIntro="M4A describe un contenedor de audio basado en MP4, no un solo códec. La mayoría de las grabaciones de voz utilizan AAC, mientras que algunos archivos utilizan ALAC sin pérdida."
      technicalFacts={[
        {
          icon: 'layers',
          title: 'Contenedor y códec',
          desc: 'Un archivo .m4a comúnmente contiene audio AAC o ALAC. El contenedor proporciona sincronización y metadatos alrededor de esa corriente de audio.',
        },
        {
          icon: 'mic',
          title: 'Flujo de trabajo de Memorias de Voz',
          desc: 'Puedes compartir la grabación original desde un iPhone o Mac y subirla sin tener que renombrarla primero a MP3.',
        },
        {
          icon: 'clip',
          title: 'Los metadatos son separados',
          desc: 'Títulos, obras de arte y metadatos de Apple no se insertan en el texto de la transcripción. Mantenlos en tus notas o sistema de publicación.',
        },
        {
          icon: 'cloud',
          title: 'Grabaciones largas',
          desc: 'M4A es generalmente compacto, pero las Memorias de Voz largas pueden aún exceder los límites de carga. Divide o exporta una copia de discurso más pequeña cuando sea necesario.',
        },
      ]}
      faq={[
        {
          q: '¿Aceptan M4A directamente de las Memorias de Voz de iPhone?',
          a: 'Sí. Las Memorias de Voz escriben M4A estándar (AAC en contenedor MP4). Comparte el archivo desde la aplicación, guarda en iCloud o Archivos, y arrástralo aquí. No se requiere conversión.',
        },
        {
          q: '¿Cuál es la diferencia entre M4A y MP4?',
          a: 'M4A es la versión solo de audio del contenedor MP4. Ambos utilizan el encabezado ftyp y el códec AAC. .m4a señala contenido solo de audio mientras que .mp4 generalmente implica video. Mictoo acepta ambos directamente.',
        },
        {
          q: 'Mi grabación de iPhone supera los 60 MB. ¿Qué hago?',
          a: 'Una memoria de voz de 90 minutos puede exceder los 60 MB. Si estás registrado, dividimos automáticamente hasta aproximadamente 3 horas. Para usuarios anónimos, reduce primero: ffmpeg -i in.m4a -b:a 64k -ac 1 out.m4a. La calidad del discurso se mantiene limpia.',
        },
        {
          q: '¿Se mostrarán los metadatos de iPhone (título, ubicación, fecha)?',
          a: 'No. La transcripción es texto plano sin metadatos del dispositivo. Si dependes de la fecha o ubicación de la grabación, mantén ese mapeo en tus notas.',
        },
        {
          q: '¿Mictoo transcribe archivos M4A en otros idiomas?',
          a: 'Sí. Whisper large-v3 soporta más de 50 idiomas con detección automática. Para memorias de voz cortas o acentos no ingleses, establece el idioma explícitamente para obtener resultados más limpios en la primera pasada.',
        },
        {
          q: '¿Puedo descargar subtítulos SRT para un video que utiliza este M4A?',
          a: 'Sí. Descarga SRT o VTT después de la transcripción. Las marcas de tiempo se alinean con la línea de tiempo original de M4A, así que si sincronizas el M4A con una pista de video, los subtítulos coinciden con precisión de fotograma.',
        },
        {
          q: '¿Puedo traducir la transcripción a otro idioma?',
          a: 'Sí. Después de la transcripción, elige un idioma objetivo y haz clic en Traducir. La traducción se realiza en GPT-4o-mini y aparece junto a la original.',
        },
        {
          q: '¿Se mantiene mi archivo M4A en sus servidores?',
          a: 'No. El audio se transmite al proveedor de transcripción, se procesa una vez y se elimina de la memoria. Nunca lo escribimos en disco. Las transcripciones solo se almacenan si inicias sesión y guardas en el historial.',
        },
        {
          q: '¿La calidad de M4A afecta la transcripción?',
          a: 'Apenas. Las Memorias de Voz de iPhone graban a alrededor de 32-64 kbps AAC, lo cual es suficiente para Whisper. Whisper vuelve a muestrear a 16 kHz mono internamente, por lo que la tasa de bits del códec tiene un impacto mínimo en el discurso limpio.',
        },
        {
          q: '¿Cuánto tiempo tarda una transcripción de M4A?',
          a: 'Una memoria de voz de 10 minutos normalmente termina en 15-30 segundos de principio a fin. Una entrevista de 60 minutos termina en 60-90 segundos. La velocidad de carga suele ser el paso más largo.',
        },
      ]}
      ctaHeadline="Arrastra tu Memoria de Voz, obtén una transcripción limpia"
      ctaSubtitle="Memorias de Voz de iPhone, GarageBand, FaceTime, Apple Podcasts. AAC en MP4, sin necesidad de conversión."
      ctaButton="Sube M4A para transcribir"
    />
  )
}