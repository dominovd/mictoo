import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/dictation-to-text',
  'fr': 'https://mictoo.com/fr/dictation-to-text',
  'de': 'https://mictoo.com/de/dictation-to-text',
  'es': 'https://mictoo.com/es/dictation-to-text',
  'ru': 'https://mictoo.com/ru/dictation-to-text',
  'it': 'https://mictoo.com/it/dictation-to-text',
  'pt': 'https://mictoo.com/pt/dictation-to-text',
  'pl': 'https://mictoo.com/pl/dictation-to-text',
  'ja': 'https://mictoo.com/ja/dictation-to-text',
  'ko': 'https://mictoo.com/ko/dictation-to-text',
  'x-default': 'https://mictoo.com/dictation-to-text',
}

export const metadata = {
  title: 'Dictado a Texto para Borradores de Voz Grabada | Mictoo',
  description:
    'Graba un borrador de voz, sube el archivo y obtén texto editable con marcas de tiempo y opciones de exportación para tu flujo de trabajo de escritura.',
  alternates: {
    canonical: 'https://mictoo.com/es/dictation-to-text',
    languages: LANGS,
  },
  openGraph: {
    title: 'Dictado a Texto: Gratis | Mictoo',
    description: 'Graba un borrador por voz, suelta el archivo, obtén texto limpio.',
    url: 'https://mictoo.com/es/dictation-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dictado a Texto',
    description: 'Escritura basada en voz para profesionales.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function EsDictationToTextPage() {
  return (
    <UseCaseLayout
      locale="es"
      badge="Escritores · Profesionales · Gratis"
      h1First="Dictado a Texto"
      h1Second="Escritura basada en voz para cualquiera que piense más rápido de lo que escribe"
      subtitle="Graba un borrador con tu teléfono, portátil o cualquier grabadora de voz. Suelta el archivo. Obtén texto limpio y puntuado listo para pegar en tu editor. Mejor precisión que el dictado integrado del teléfono para contenido largo."
      currentHref="/es/dictation-to-text"

      platforms={[
        { name: 'iPhone',       iconKey: 'mic',       brandBg: '#0F172A' },
        { name: 'Google Rec',   iconKey: 'mic',       brandBg: '#4285F4' },
        { name: 'Windows Rec',  iconKey: 'mic',       brandBg: '#0078D4' },
        { name: 'QuickTime',    iconKey: 'videoCameraFill', brandBg: '#374151' },
        { name: 'Audacity',     iconKey: 'soundwave', brandBg: '#0B60D6' },
        { name: 'Dragon',       iconKey: 'mic',       brandBg: '#DC2626' },
      ]}

      howItWorksTitle="Cómo funciona el dictado a texto"
      steps={[
        {
          icon: 'folder',
          title: 'Graba tu borrador',
          desc: 'Cualquier grabadora: nota de voz del teléfono, grabadora de voz del portátil o una aplicación de dictado dedicada.',
        },
        {
          icon: 'upload',
          title: 'Suelta el archivo aquí',
          desc: 'M4A (iPhone), MP3 (Android), WAV (grabadora). Gratis hasta 25 MB de forma anónima, 60 MB al iniciar sesión.',
        },
        {
          icon: 'editPen',
          title: 'Texto limpio, listo para pegar',
          desc: 'Puntuación automática, saltos de oración y formato. Cambia a modo Editor para ajustes antes de exportar.',
        },
      ]}

      exampleTitle="Ejemplo de borrador dictado"
      exampleFileName="capítulo-3-borrador.m4a"
      exampleDurationLabel="12:44"
      exampleLines={[
        { t: '0:00',  line: 'Capítulo tres. La mañana del juicio.' },
        { t: '0:06',  line: 'Alex apenas había dormido. No por ansiedad, exactamente, sino por la extraña quietud que sigue a una larga preparación.' },
        { t: '0:20',  line: 'Durante seis meses, cada hora de vigilia había sido consumida por el caso. Y ahora, de repente, no había nada más que hacer que presentarse.' },
        { t: '0:36',  line: 'El tribunal estaba a tres calles de su apartamento. Caminó despacio, dejando que el frío aire de marzo la envolviera.' },
        { t: '0:50',  line: 'Cuando llegó a las escaleras, los reporteros ya estaban reunidos, esperando un rostro que reconocieran.' },
        { t: '1:04',  line: 'Mantuvo la cabeza baja y pasó junto a ellos. Habría tiempo para preguntas más tarde. No antes.' },
        { t: '1:18',  line: 'Dentro, el vestíbulo estaba mayormente vacío. Unos pocos empleados, un conserje y el guardia de seguridad que había visto todos los días de esa semana.' },
      ]}
      summaryPoints={[
        'Apertura del capítulo 3: mañana del juicio.',
        'Personaje: Alex, protagonista, sin dormir, no ansioso.',
        'Escenario: fría mañana de marzo, tribunal a tres calles de distancia.',
        'Presencia de medios afuera; vestíbulo vacío adentro.',
      ]}
      actionItems={[]}

      whyTitle="Por qué elegir Mictoo para dictado"
      whyCards={[
        {
          icon: 'target',
          title: 'Diseñado para borradores grabados',
          desc: 'Graba un borrador completo primero, luego transcríbelo como un solo archivo. Esto mantiene el audio original disponible mientras revisas y editas el texto.',
        },
        {
          icon: 'editPen',
          title: 'Editor para limpieza post-dictado',
          desc: 'Cambia a modo Editor, corrige nombres, añade saltos de párrafo y exporta como DOCX listo para tu aplicación de escritura.',
        },
        {
          icon: 'sparkles',
          title: 'Resumen de IA para extracción de esquemas',
          desc: 'Borrador sólido para los puntos clave del capítulo, puntos de memoria o estructura de artículo.',
        },
        {
          icon: 'globe',
          title: 'Dicta en cualquier idioma',
          desc: 'Más de 50 idiomas con detección automática. Los escritores multilingües pueden cambiar de idioma entre grabaciones sin cambiar la configuración.',
        },
      ]}

      scenariosTitle="Escenarios comunes de dictado"
      scenarios={[
        { icon: 'editPen', title: 'Primer borrador' },
        { icon: 'book',    title: 'Dictado de capítulo' },
        { icon: 'briefcase', title: 'Memo / correo electrónico' },
        { icon: 'chat',    title: 'Diario' },
        { icon: 'search',  title: 'Notas de investigación' },
        { icon: 'globe',   title: 'Multilingüe' },
      ]}

      tipsTitle="Consejos para un dictado más limpio"
      tips={[
        'Di "coma", "punto", "nuevo párrafo" si quieres puntuación explícita.',
        'Graba en una habitación tranquila para que las palabras sean más fáciles de distinguir.',
        'Para capítulos largos de más de 60 MB, inicia sesión para auto-dividir.',
        'Revisa el modo Editor antes de exportar para nombres y términos técnicos.',
      ]}

      guidesTitle="Herramientas relacionadas"
      guides={[
        { href: '/es/voice-memo-to-text',      icon: 'mic',    title: 'Nota de voz',   desc: 'Captura de ideas, no escritura de borradores' },
        { href: '/es/m4a-to-text',             icon: 'file',   title: 'Formato M4A',   desc: 'Exportaciones de iPhone / Apple' },
        { href: '/es/transcribe-mp3-to-text',  icon: 'file',   title: 'Formato MP3',   desc: 'Exportaciones de grabadoras Android' },
        { href: '/es/interview-transcription', icon: 'chat',   title: 'Entrevista',    desc: 'Conversación grabada entre dos personas' },
      ]}

      faq={[
        {
          q: '¿Cómo se diferencia Mictoo del dictado telefónico en vivo?',
          a: 'Mictoo trabaja a partir de una grabación guardada en lugar de escuchar en vivo mientras escribes. Eso lo hace útil para revisar borradores más largos contra el audio original, sujeto a los límites actuales de tamaño de archivo y duración.',
        },
        {
          q: '¿Puedo dictar términos técnicos o médicos?',
          a: 'Whisper maneja bien el vocabulario técnico común. Para términos raros o propietarios, usa el modo Editor después de la transcripción para corregir cualquier error. Más rápido que dictar y corregir en línea.',
        },
        {
          q: '¿Cuál es el límite de tamaño de archivo para el dictado?',
          a: '25 MB de forma anónima, 60 MB al iniciar sesión. Una grabación de voz de 60 minutos a una tasa de bits típica es de 20-30 MB, por lo que la mayoría de las sesiones de dictado encajan bajo el límite gratuito.',
        },
        {
          q: '¿Mictoo añade puntuación automáticamente?',
          a: 'Sí. Las oraciones y los párrafos se detectan a partir del ritmo del habla. Di "coma" o "punto" si quieres puntuación explícita en un punto específico.',
        },
        {
          q: '¿Puedo editar la transcripción antes de exportar?',
          a: 'Sí. Cambia a modo Editor para editar cualquier palabra o línea en línea. Guarda los cambios y exporta como TXT, DOCX o PDF (si has iniciado sesión).',
        },
        {
          q: '¿Puedo traducir mi borrador dictado?',
          a: 'Sí. Elige un idioma de destino y haz clic en Traducir. Útil para escritores que producen en un segundo idioma, o traductores que redactan una versión de trabajo.',
        },
        {
          q: '¿Se almacenan los dictados en sus servidores?',
          a: 'No. El audio se transmite al proveedor de transcripción, se procesa una vez y se elimina. Solo la transcripción persiste si inicias sesión y la guardas.',
        },
      ]}

      ctaHeadline="Convierte borradores hablados en texto"
      ctaSubtitle="Capítulo, memo, artículo, entrada de diario. Más rápido que escribir cuando ya sabes lo que quieres decir."
      ctaButton="Sube un dictado"

      relatedLinks={[
        { href: '/es/voice-memo-to-text',      label: 'Nota de Voz a Texto' },
        { href: '/es/interview-transcription', label: 'Transcripción de Entrevista' },
        { href: '/es/lecture-transcription',   label: 'Transcripción de Clase' },
        { href: '/es/m4a-to-text',             label: 'M4A a Texto' },
        { href: '/es/transcribe-mp3-to-text',  label: 'MP3 a Texto' },
      ]}
    />
  )
}