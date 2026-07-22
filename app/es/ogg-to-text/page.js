import FormatPageLayout from '@/components/FormatPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/ogg-to-text',
  'fr': 'https://mictoo.com/fr/ogg-to-text',
  'de': 'https://mictoo.com/de/ogg-to-text',
  'es': 'https://mictoo.com/es/ogg-to-text',
  'ru': 'https://mictoo.com/ru/ogg-to-text',
  'it': 'https://mictoo.com/it/ogg-to-text',
  'pt': 'https://mictoo.com/pt/ogg-to-text',
  'pl': 'https://mictoo.com/pl/ogg-to-text',
  'ja': 'https://mictoo.com/ja/ogg-to-text',
  'ko': 'https://mictoo.com/ko/ogg-to-text',
  'x-default': 'https://mictoo.com/ogg-to-text',
}

export const metadata = {
  title: 'OGG a Texto: Transcripción de Voz de Telegram, Audio de Linux y Opus/Vorbis | Mictoo',
  description:
    'Sube audio OGG (Vorbis, Opus, FLAC dentro de OGG) o mensajes de voz .oga de Telegram. Transcripción editable con marcas de tiempo en segundos, sin registro.',
  alternates: {
    canonical: 'https://mictoo.com/es/ogg-to-text',
    languages: LANGS,
  },
  openGraph: {
    title: 'OGG a Texto: Voz de Telegram, Audio de Linux, Transcripción Opus/Vorbis | Mictoo',
    description: 'Sube audio OGG o mensajes de voz .oga de Telegram. Transcripción editable en segundos.',
    url: 'https://mictoo.com/es/ogg-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OGG a Texto: Transcripción de Voz de Telegram y Audio de Linux',
    description: 'Sube audio OGG o mensajes de voz .oga de Telegram. Transcripción editable en segundos.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function EsOggToTextPage() {
  return (
    <FormatPageLayout
      locale="es"
      badge="OGG · Vorbis · Opus · .oga"
      h1First="OGG a Texto"
      h1Second="Voz de Telegram, audio de Linux, Opus y Vorbis"
      subtitle="OGG es lo que utiliza Telegram Voice (.oga), lo que las aplicaciones de audio de Linux utilizan por defecto, y lo que el códec Opus de código abierto incluye. Suelta el archivo, detectamos automáticamente el flujo de audio y transcribimos con Whisper large-v3."
      highlightFormat="ogg"
      previewFileName="telegram-voice.oga"
      previewWordCount={128}
      previewDurationLabel="1:52"
      previewLines={[
        { t: '0:00',  line: 'Hola, un mensaje de voz rápido sobre la llamada de mañana.' },
        { t: '0:03',  line: 'Miré la presentación y creo que las diapositivas cuatro a seis necesitan una reconsideración antes de que presentemos.' },
        { t: '0:10',  line: 'El problema principal es que la historia salta del problema directamente al precio sin mostrar las capturas de pantalla de la demostración.' },
        { t: '0:20',  line: 'Lo que haría es intercambiar la diapositiva cinco por el flujo de la demostración y mover el precio al final de la presentación.' },
        { t: '0:30',  line: 'De esa manera, generamos tensión sobre lo que realmente hace el producto antes de hablar sobre el costo.' },
        { t: '0:39',  line: 'Además, el cliente mencionó ayer que quiere ver la diapositiva de integración, que actualmente está en el apéndice.' },
        { t: '0:49',  line: 'Muévela al flujo principal, tal vez entre la demostración y el precio.' },
        { t: '0:56',  line: 'Hablamos pronto, házmelo saber qué piensas cuando tengas la oportunidad.' },
      ]}
      whyTitle="Por qué Mictoo para la transcripción de OGG"
      whyCards={[
        {
          icon: 'mic',
          title: 'Mensajes de voz de Telegram, nativos',
          desc: 'Notas de voz .oga de Telegram se integran directamente. Sin renombrar, sin reempaquetar. Manejamos el flujo Opus dentro del contenedor OGG.',
        },
        {
          icon: 'gear',
          title: 'Vorbis, Opus y FLAC-en-OGG',
          desc: 'Cualquier códec dentro del contenedor OGG funciona: Vorbis (más antiguo), Opus (moderno), FLAC-en-OGG (audiophile). Detectado automáticamente del lado del servidor.',
        },
        {
          icon: 'sparkles',
          title: 'Resumen de IA para cadenas de notas de voz',
          desc: 'Los mensajes de voz tienden a ser divagantes. El resumen de IA convierte un .oga de cinco minutos en un resumen de dos líneas que puedes accionar.',
        },
        {
          icon: 'globe',
          title: 'Traduce a más de 50 idiomas',
          desc: 'Mensaje de voz en ruso, español o portugués de un chat grupal. Traduce al inglés (o cualquier objetivo) después de la transcripción.',
        },
      ]}
      scenariosTitle="Cuándo OGG a texto es la opción adecuada"
      scenarios={[
        {
          icon: 'mic',
          title: 'Mensaje de voz de Telegram',
          desc: 'Nota de voz enviada por un colega o cliente a través de Telegram. Guarda el .oga del chat, súbelo aquí, obtén una versión de texto para revisar.',
        },
        {
          icon: 'gear',
          title: 'Grabación de audio de Linux',
          desc: 'Grabación desde Audacity, GNOME Sound Recorder o una herramienta de audio de KDE que utiliza OGG por defecto. Totalmente compatible, sin conversión.',
        },
        {
          icon: 'briefcase',
          title: 'Exportación de aplicación de código abierto',
          desc: 'Grabadora de podcast o entrevista que exporta OGG (muchas aplicaciones FOSS utilizan Vorbis u Opus por razones de licencia).',
        },
        {
          icon: 'video',
          title: 'Captura de Firefox MediaRecorder',
          desc: 'Firefox a menudo produce OGG/Opus desde aplicaciones de grabación del navegador. Sube el archivo para obtener una transcripción limpia con marcas de tiempo.',
        },
        {
          icon: 'editPen',
          title: 'Nota o memo dictado',
          desc: 'Nota capturada en una aplicación que guarda como OGG. Convierte en texto editable listo para tu flujo de trabajo de escritura.',
        },
        {
          icon: 'users',
          title: 'Registro de chat OGG con múltiples hablantes',
          desc: 'Grabación de VOIP de Discord, Mumble o similar exportada a OGG. Transcripción para referencia, actas de reunión o archivo.',
        },
      ]}
      technicalTitle="Qué puede haber dentro de un archivo OGG"
      technicalIntro="OGG es una familia de contenedores en lugar de un solo códec de audio. Conocer el tipo de flujo y la extensión ayuda a explicar de dónde proviene una grabación, pero no necesitas reempaquetarlo antes de subirlo."
      technicalFacts={[
        {
          icon: 'layers',
          title: 'Vorbis, Opus o FLAC',
          desc: 'El contenedor OGG puede llevar varios códecs. Los mensajes de voz comúnmente utilizan Opus; el audio de escritorio más antiguo a menudo utiliza Vorbis.',
        },
        {
          icon: 'file',
          title: '.oga y .ogg',
          desc: '.oga es la extensión de audio solamente en la misma familia de contenedores. Las exportaciones de voz de Telegram a menudo llegan con esta extensión.',
        },
        {
          icon: 'mic',
          title: 'Fuente del mensaje de voz',
          desc: 'Los mensajes cortos móviles pueden incluir ruido de fondo y procesamiento del teléfono; una captura clara importa más que el nombre del contenedor.',
        },
        {
          icon: 'gear',
          title: 'Inspección basada en encabezados',
          desc: 'La estructura del flujo se inspecciona durante el procesamiento, por lo que una extensión inusual no necesita ser renombrada primero.',
        },
      ]}
      faq={[
        {
          q: '¿Qué tipos de archivos OGG acepta Mictoo?',
          a: 'Cualquier contenedor OGG estándar: audio Vorbis (más antiguo, común en Linux), audio Opus (más nuevo, utilizado por la voz de Telegram y aplicaciones modernas), y FLAC-en-OGG. También archivos .oga de Telegram, que son OGG con una extensión diferente.',
        },
        {
          q: '¿Es un archivo .oga lo mismo que .ogg?',
          a: 'Efectivamente sí. .oga es la extensión estandarizada para audio solamente OGG, utilizada comúnmente por mensajes de voz de Telegram que llevan un flujo Opus. Mictoo trata .oga y .ogg de la misma manera.',
        },
        {
          q: 'Mi archivo OGG tiene más de 60 MB. ¿Qué hago?',
          a: 'Opus y Vorbis son eficientes, así que alcanzar 60 MB generalmente significa una grabación muy larga. Si estás registrado, dividimos automáticamente hasta aproximadamente 3 horas. De lo contrario, baja la calidad primero: ffmpeg -i in.ogg -b:a 32k -ac 1 out.ogg. El habla se mantiene clara.',
        },
        {
          q: '¿Aceptan video OGG (Theora)?',
          a: 'La pista de audio dentro de un contenedor OGG/Theora se transcribe. Sube el archivo .ogv y demuxamos el audio igual que con cualquier formato de video. Clips silenciosos de Theora producirán transcripciones vacías.',
        },
        {
          q: '¿Mictoo transcribe OGG en idiomas no ingleses?',
          a: 'Sí. Whisper large-v3 soporta más de 50 idiomas con detección automática. Para mensajes de voz cortos o contenido en idiomas no ingleses, establece el idioma explícitamente para obtener resultados más limpios en la primera pasada.',
        },
        {
          q: '¿Puedo obtener subtítulos SRT para una grabación OGG?',
          a: 'Sí. Descarga SRT o VTT después de la transcripción. Las marcas de tiempo se alinean con la línea de tiempo original de OGG para su uso en editores de video o herramientas de accesibilidad.',
        },
        {
          q: '¿Se mantiene mi archivo OGG en sus servidores?',
          a: 'No. Los flujos de audio se envían al proveedor de transcripción, se procesan una vez y se eliminan de la memoria. Nunca lo escribimos en disco. Las transcripciones solo se almacenan si inicias sesión y guardas en el historial.',
        },
        {
          q: '¿Puedo traducir la transcripción a otro idioma?',
          a: 'Sí. Después de la transcripción, elige un idioma objetivo y haz clic en Traducir. La traducción se realiza en GPT-4o-mini y aparece junto a la original.',
        },
        {
          q: '¿Afecta la calidad de OGG a la transcripción?',
          a: 'Apenas. Opus a 24-32 kbps suena claro para la voz y se transcribe esencialmente tan bien como tasas de bits más altas. Whisper re-muestra a 16 kHz mono internamente, por lo que la tasa de bits tiene un impacto mínimo para el habla clara.',
        },
        {
          q: '¿Cuánto tiempo tarda una transcripción de OGG?',
          a: 'Una nota de voz de Telegram de 2 minutos generalmente termina en 5-15 segundos de principio a fin. Archivos OGG más largos (30-45 minutos) tardan de 45 a 90 segundos. La velocidad de carga suele ser el paso más largo.',
        },
      ]}
      ctaHeadline="Suelta tu archivo de voz de Telegram o OGG"
      ctaSubtitle="Opus, Vorbis, FLAC-en-OGG, mensajes de voz .oga. Cada flujo OGG, manejado de forma nativa."
      ctaButton="Sube OGG para transcribir"
    />
  )
}