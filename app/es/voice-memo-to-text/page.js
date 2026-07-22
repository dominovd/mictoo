import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/voice-memo-to-text',
  'fr': 'https://mictoo.com/fr/voice-memo-to-text',
  'de': 'https://mictoo.com/de/voice-memo-to-text',
  'es': 'https://mictoo.com/es/voice-memo-to-text',
  'ru': 'https://mictoo.com/ru/voice-memo-to-text',
  'it': 'https://mictoo.com/it/voice-memo-to-text',
  'pt': 'https://mictoo.com/pt/voice-memo-to-text',
  'pl': 'https://mictoo.com/pl/voice-memo-to-text',
  'ja': 'https://mictoo.com/ja/voice-memo-to-text',
  'ko': 'https://mictoo.com/ko/voice-memo-to-text',
  'x-default': 'https://mictoo.com/voice-memo-to-text',
}

export const metadata = {
  title: 'Transcripción de notas de voz a texto para iPhone y Android | Mictoo',
  description:
    'Sube una grabación de voz de iPhone o Android y obtén texto con marcas de tiempo, un resumen de IA y exportaciones editables.',
  alternates: {
    canonical: 'https://mictoo.com/es/voice-memo-to-text',
    languages: LANGS,
  },
  openGraph: {
    title: 'Transcripción de notas de voz a texto: Gratis | Mictoo',
    description: 'Sube tu grabación de voz de iPhone o Android, obtén texto limpio.',
    url: 'https://mictoo.com/es/voice-memo-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transcripción de notas de voz a texto',
    description: 'Transcripción gratuita para grabaciones de voz del teléfono.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function EsVoiceMemoToTextPage() {
  return (
    <UseCaseLayout
      locale="es"
      badge="iPhone · Android · Gratis"
      h1First="Transcripción de notas de voz a texto"
      h1Second="Transcripción gratuita para grabaciones de voz del teléfono"
      subtitle="Sube tu nota de voz de iPhone, grabación de voz de Android, nota de voz de WhatsApp o mensaje de voz de Telegram. Obtén una transcripción limpia en segundos. Sin registro, sin tarifa por minuto."
      currentHref="/es/voice-memo-to-text"

      platforms={[
        { name: 'iPhone',       iconKey: 'mic',       brandBg: '#0F172A' },
        { name: 'Google Rec',   iconKey: 'mic',       brandBg: '#4285F4' },
        { name: 'Samsung',      iconKey: 'mic',       brandBg: '#1428A0' },
        { name: 'WhatsApp',     iconKey: 'phone',     brandBg: '#25D366' },
        { name: 'Telegram',     iconKey: 'phone',     brandBg: '#0088CC' },
        { name: 'Audacity',     iconKey: 'soundwave', brandBg: '#0B60D6' },
      ]}

      howItWorksTitle="Cómo funciona la transcripción de notas de voz"
      steps={[
        {
          icon: 'folder',
          title: 'Comparte la grabación',
          desc: 'iPhone: hoja de compartir desde Notas de Voz. Android: archivo desde la app de Archivos. WhatsApp: reenvía como archivo.',
        },
        {
          icon: 'upload',
          title: 'Suelta el archivo aquí',
          desc: 'M4A (iPhone), MP3 (Android), OPUS/OGG (WhatsApp, Telegram) funcionan directamente.',
        },
        {
          icon: 'editPen',
          title: 'Transcripción en segundos',
          desc: 'Una nota de 5 minutos termina en unos 10 segundos. El resumen de IA convierte ideas desordenadas en una lista de acciones clara.',
        },
      ]}

      exampleTitle="Ejemplo de transcripción de nota de voz"
      exampleFileName="voice-memo.m4a"
      exampleDurationLabel="3:22"
      exampleLines={[
        { t: '0:00',  line: 'Está bien, nota de voz rápida antes de que olvide la idea completa.' },
        { t: '0:04',  line: 'La propuesta es que tomemos el flujo de pago y lo dividamos en dos pasos claros en lugar de un formulario largo.' },
        { t: '0:13',  line: 'Paso uno, solo correo y tarjeta. Paso dos, detalles de envío después de que vean el número de confirmación.' },
        { t: '0:22',  line: 'La razón por la que esto importa es que la tasa de abandono en el formulario de una sola página actual es de alrededor del treinta y ocho por ciento.' },
        { t: '0:32',  line: 'La mayor parte de ese abandono ocurre en la sección de envío, no en la entrada de la tarjeta, lo cual es contraintuitivo.' },
        { t: '0:42',  line: 'Si cambiamos el envío a después de la compra, probablemente podamos recuperar entre el doce y el quince por ciento de ese tráfico.' },
        { t: '0:52',  line: 'En cuanto a la línea de tiempo, creo que esto son dos semanas de frontend, una semana de backend, tal vez una semana de pruebas.' },
      ]}
      summaryPoints={[
        'Idea: dividir el flujo de pago en dos pasos.',
        'Paso 1: correo + tarjeta. Paso 2: envío después de la confirmación.',
        'Tasa de abandono actual: 38%, principalmente en la sección de envío.',
        'Recuperación estimada: 12-15% del tráfico.',
      ]}
      actionItems={[
        'Bocetar un prototipo de pago en dos pasos',
        'Verificar el 38% de abandono en analíticas',
        'Definir el alcance de ingeniería (~4 semanas en total)',
      ]}

      whyTitle="Por qué Mictoo para notas de voz"
      whyCards={[
        {
          icon: 'sparkles',
          title: 'Resumen de IA para notas desordenadas',
          desc: 'Las notas de voz son desordenadas por naturaleza. El resumen convierte un flujo de pensamiento de cinco minutos en una conclusión de dos líneas.',
        },
        {
          icon: 'mic',
          title: 'nativo .m4a de iPhone',
          desc: 'Apple Notas de Voz escribe .m4a (AAC en MP4). Lo aceptamos directamente, sin conversión.',
        },
        {
          icon: 'chat',
          title: 'nativo .oga de Telegram',
          desc: 'Guarda el mensaje de voz de Telegram del chat y suelta el archivo .oga. Opus en OGG, manejado de forma nativa.',
        },
        {
          icon: 'globe',
          title: 'Traduce para notas en diferentes idiomas',
          desc: 'Nota en tu idioma nativo, notas en inglés para el equipo. Un clic.',
        },
      ]}

      scenariosTitle="Escenarios comunes de notas de voz"
      scenarios={[
        { icon: 'sparkles', title: 'Captura de ideas' },
        { icon: 'chat',     title: 'Notas de reuniones' },
        { icon: 'editPen',  title: 'Escritura de borradores' },
        { icon: 'book',     title: 'Diario' },
        { icon: 'phone',    title: 'Mensaje de voz' },
        { icon: 'globe',    title: 'Multilingüe' },
      ]}

      tipsTitle="Consejos para notas de voz más limpias"
      tips={[
        'Sostén el teléfono cerca para reducir el ruido de la habitación.',
        'Para notas largas de más de 60 MB, inicia sesión para auto-dividir.',
        'Habla en un idioma por nota para la detección más limpia.',
        'Di "nuevo párrafo" si quieres que la transcripción se interrumpa allí.',
      ]}

      guidesTitle="Herramientas relacionadas"
      guides={[
        { href: '/es/m4a-to-text',        icon: 'file',  title: 'Formato M4A',       desc: 'Análisis profundo de iPhone / GarageBand' },
        { href: '/es/ogg-to-text',        icon: 'file',  title: 'OGG / .oga',       desc: 'Análisis profundo de voz de Telegram' },
        { href: '/es/dictation-to-text',  icon: 'editPen', title: 'Dictado',      desc: 'Flujo de trabajo de escritura con voz' },
        { href: '/es/interview-transcription', icon: 'chat', title: 'Entrevista',    desc: 'Entrevista por teléfono o en persona' },
      ]}

      faq={[
        {
          q: '¿Puedo transcribir notas de voz de iPhone directamente?',
          a: 'Sí. Comparte la nota desde la app de Notas de Voz (hoja de compartir → guardar en Archivos o enviártela a ti mismo) y suelta el .m4a en Mictoo. No se necesita conversión.',
        },
        {
          q: '¿Mictoo transcribe mensajes de voz de WhatsApp o Telegram?',
          a: 'Sí. Guarda el mensaje de voz del chat (reenviar → guardar como archivo) y suéltalo. Las notas de voz de WhatsApp son .opus, las notas de voz de Telegram son .oga (ambos son contenedores OGG). Ambos funcionan directamente.',
        },
        {
          q: '¿Cuál es el límite de tamaño de archivo?',
          a: '25 MB de forma anónima, 60 MB al iniciar sesión. Una nota de voz de 60 minutos a una tasa de bits típica es de aproximadamente 20-30 MB, por lo que la mayoría encajan bajo el límite gratuito.',
        },
        {
          q: '¿Mictoo transcribe notas de voz en idiomas no ingleses?',
          a: 'Sí. Whisper large-v3 soporta más de 50 idiomas. Para notas cortas o contenido en idiomas no ingleses, establece el idioma explícitamente para una detección más limpia en la primera pasada.',
        },
        {
          q: '¿Puedo obtener un resumen de una nota de lluvia de ideas desordenada?',
          a: 'Sí. El resumen de IA aparece automáticamente junto a la transcripción. Excelente para convertir notas de flujo de conciencia en listas de acciones claras.',
        },
        {
          q: '¿Se almacenan las notas de voz en sus servidores?',
          a: 'No. El audio se transmite al proveedor de transcripción, se procesa una vez y se elimina. Solo la transcripción persiste si inicias sesión y la guardas.',
        },
        {
          q: '¿Puedo traducir mi nota de voz a otro idioma?',
          a: 'Sí. Elige un idioma de destino y haz clic en Traducir después de la transcripción. GPT-4o-mini maneja la traducción y aparece junto al original.',
        },
      ]}

      ctaHeadline="Convierte notas de voz en texto y elementos de acción"
      ctaSubtitle="Notas de voz de iPhone, Android, WhatsApp, Telegram. Todos los formatos, una carga."
      ctaButton="Sube una nota de voz"

      relatedLinks={[
        { href: '/es/dictation-to-text',       label: 'Dictado a Texto' },
        { href: '/es/interview-transcription', label: 'Transcripción de Entrevista' },
        { href: '/es/m4a-to-text',             label: 'M4A a Texto' },
        { href: '/es/ogg-to-text',             label: 'OGG a Texto' },
        { href: '/es/meeting-transcription',   label: 'Transcripción de Reunión' },
      ]}
    />
  )
}