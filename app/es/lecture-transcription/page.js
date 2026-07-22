import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/lecture-transcription',
  'fr': 'https://mictoo.com/fr/lecture-transcription',
  'de': 'https://mictoo.com/de/lecture-transcription',
  'es': 'https://mictoo.com/es/lecture-transcription',
  'ru': 'https://mictoo.com/ru/lecture-transcription',
  'it': 'https://mictoo.com/it/lecture-transcription',
  'pt': 'https://mictoo.com/pt/lecture-transcription',
  'pl': 'https://mictoo.com/pl/lecture-transcription',
  'ja': 'https://mictoo.com/ja/lecture-transcription',
  'ko': 'https://mictoo.com/ko/lecture-transcription',
  'x-default': 'https://mictoo.com/lecture-transcription',
}

export const metadata = {
  title: 'Transcripción de Clases y Seminarios | Mictoo',
  description:
    'Sube una clase, conferencia o seminario grabado y obtén texto buscable, marcas de tiempo, un resumen de IA y archivos de exportación.',
  alternates: {
    canonical: 'https://mictoo.com/es/lecture-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: 'Transcripción de Clases: Generador de Transcripciones Gratis | Mictoo',
    description: 'Sube tu clase o seminario grabado y obtén texto limpio en segundos.',
    url: 'https://mictoo.com/es/lecture-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transcripción de Clases: Generador Gratis',
    description: 'Sube la grabación de tu clase o seminario.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function EsLectureTranscriptionPage() {
  return (
    <UseCaseLayout
      locale="es"
      badge="Estudiantes · Académicos · Gratis"
      h1First="Transcripción de Clases"
      h1Second="Transcripciones gratis para clases y seminarios"
      subtitle="Sube tu conferencia grabada de Zoom, Panopto, YouTube, Kaltura o tu teléfono. Obtén una transcripción buscable con marcas de tiempo lista para notas de estudio, revisión y citación."
      currentHref="/es/lecture-transcription"

      platforms={[
        { name: 'Zoom',      iconKey: 'videoCameraFill', brandBg: '#2D8CFF', href: '/es/zoom-transcription' },
        { name: 'YouTube',   iconKey: 'videoCameraFill', brandBg: '#FF0000' },
        { name: 'Panopto',   iconKey: 'cap',             brandBg: '#014A96' },
        { name: 'Kaltura',   iconKey: 'cap',             brandBg: '#FA6425' },
        { name: 'Camtasia',  iconKey: 'videoCameraFill', brandBg: '#00A651' },
        { name: 'Voice Memo',iconKey: 'mic',             brandBg: '#F97316', href: '/es/voice-memo-to-text' },
      ]}

      howItWorksTitle="Cómo funciona la transcripción de clases"
      steps={[
        {
          icon: 'folder',
          title: 'Exporta la clase',
          desc: 'Descarga de Panopto/Kaltura, guarda desde la nube de Zoom o graba en tu teléfono durante la clase.',
        },
        {
          icon: 'upload',
          title: 'Suelta el archivo aquí',
          desc: 'MP3, MP4, M4A, WAV, MOV funcionan. Las conferencias largas se dividen automáticamente al iniciar sesión.',
        },
        {
          icon: 'editPen',
          title: 'Notas, resumen, citas',
          desc: 'Transcripción buscable con marcas de tiempo, resumen de IA, DOCX para notas de estudio. Chatea con la transcripción para prepararte para los exámenes.',
        },
      ]}

      exampleTitle="Ejemplo de transcripción de clase"
      exampleFileName="intro-microeconomics-lecture-08.mp4"
      exampleDurationLabel="47:32"
      exampleLines={[
        { t: '0:00',  line: 'Muy bien. La semana pasada terminamos con el concepto de excedente del consumidor. Hoy lo ampliamos con el excedente del productor.' },
        { t: '0:11',  line: 'El excedente del productor es la diferencia entre lo que un productor aceptaría por un bien y lo que realmente recibe.' },
        { t: '0:23',  line: 'Juntos, el excedente del consumidor más el excedente del productor nos da el bienestar total en un mercado antes de introducir impuestos o controles de precios.' },
        { t: '0:35',  line: 'Ahora, ¿por qué nos importa este concepto en la práctica? Porque nos permite evaluar si la política mejora o empeora un mercado.' },
        { t: '0:47',  line: 'Considera un impuesto por unidad. Desplaza la curva de oferta hacia arriba por el monto del impuesto, y ambos excedentes se reducen.' },
        { t: '0:58',  line: 'La brecha que aparece entre lo que los compradores pagan y lo que los vendedores reciben es lo que llamamos pérdida de peso muerto.' },
        { t: '1:08',  line: 'Por favor, abre el cuaderno en la página treinta y uno, y trabajemos juntos en un ejemplo numérico.' },
      ]}
      summaryPoints={[
        'Resumen: excedente del consumidor de la conferencia anterior.',
        'Nuevo concepto: excedente del productor y bienestar total.',
        'Aplicado al análisis de impuestos.',
        'Pérdida de peso muerto ilustrada numéricamente.',
      ]}
      actionItems={[
        'Revisa la página 31 del cuaderno',
        'Practica el cálculo de pérdida de peso muerto',
        'Lee el capítulo 4 antes del jueves',
      ]}

      whyTitle="Por qué Mictoo para la transcripción de clases"
      whyCards={[
        {
          icon: 'search',
          title: 'Buscable dentro de la transcripción',
          desc: 'Ctrl-F cualquier concepto de toda la conferencia de 45 minutos en un segundo. Mejor que rebuscar en el video.',
        },
        {
          icon: 'sparkles',
          title: 'Resumen de IA para notas de revisión',
          desc: 'El resumen es un buen punto de partida para la revisión. Recorta lo que ya sabes, conserva lo que te perdiste.',
        },
        {
          icon: 'chat',
          title: 'Chatea con la conferencia',
          desc: 'Haz preguntas sobre el material para prepararte para los exámenes. Las respuestas al estilo RAG citan la marca de tiempo exacta.',
        },
        {
          icon: 'globe',
          title: 'Traduce para estudiantes no nativos',
          desc: '¿Conferencia en inglés pero estudias en portugués? Traducción con un clic a más de 50 idiomas.',
        },
      ]}

      scenariosTitle="Escenarios comunes de conferencias"
      scenarios={[
        { icon: 'book',      title: 'Clase universitaria' },
        { icon: 'cap' ,      title: 'Curso en línea' },
        { icon: 'search',    title: 'Revisión para exámenes' },
        { icon: 'editPen',   title: 'Notas de estudio' },
        { icon: 'globe',     title: 'Estudiante no nativo' },
        { icon: 'headset',   title: 'Seminario grabado' },
      ]}

      tipsTitle="Consejos para transcripciones de conferencias más limpias"
      tips={[
        'Siéntate cerca del frente y usa tu teléfono como micrófono de respaldo.',
        'Las conferencias largas de más de 60 MB se dividen automáticamente al iniciar sesión.',
        'Establece el idioma explícitamente para contenido técnico o no en inglés.',
        'Usa el chat para hacer preguntas de seguimiento después de la transcripción.',
      ]}

      guidesTitle="Herramientas de aprendizaje relacionadas"
      guides={[
        { href: '/es/zoom-transcription',        icon: 'video', title: 'Conferencia de Zoom',      desc: 'Descarga de grabación en la nube' },
        { href: '/es/youtube-to-text',           icon: 'video', title: 'Conferencia de YouTube',   desc: 'Pega la URL o sube' },
        { href: '/es/voice-memo-to-text',        icon: 'mic',   title: 'Grabación de teléfono',   desc: 'Memo de voz de iPhone en clase' },
        { href: '/es/timestamped-transcription', icon: 'file',  title: 'Notas con marcas de tiempo', desc: 'Exportaciones alineadas con el tiempo' },
      ]}

      faq={[
        {
          q: '¿Puedo transcribir una grabación de clase de Zoom?',
          a: 'Sí. Descarga el MP4 o M4A de la grabación en la nube y suéltalo aquí. Consulta la guía de Zoom para la ruta de descarga exacta.',
        },
        {
          q: 'Mi conferencia es de más de 60 MB. ¿Qué hago ahora?',
          a: 'Inicia sesión para habilitar la división automática (hasta aproximadamente 3 horas). O reduce la calidad a 64 kbps mono MP3 con ffmpeg para una reducción de tamaño de 5x.',
        },
        {
          q: '¿Mictoo transcribe conferencias en otros idiomas?',
          a: 'Sí. Whisper large-v3 soporta más de 50 idiomas. Establece el idioma explícitamente para vocabulario técnico o acentos fuertes.',
        },
        {
          q: '¿Puedo buscar dentro de la transcripción?',
          a: 'Sí. La vista de lector incluye un cuadro de búsqueda con conteo de coincidencias y resaltado. Ctrl-F tu término y salta entre coincidencias.',
        },
        {
          q: '¿Puedo hacer preguntas sobre el material de la conferencia?',
          a: 'Sí. Chatear con la transcripción te permite preguntar "explica la pérdida de peso muerto" o "¿qué páginas mencionó el profesor?". Las respuestas citan marcas de tiempo.',
        },
        {
          q: '¿Puedo exportar las notas de la conferencia como DOCX o PDF?',
          a: 'Sí. DOCX para cualquiera, PDF y JSON para usuarios registrados. TXT siempre está disponible.',
        },
        {
          q: '¿Se guardan las grabaciones de conferencias en sus servidores?',
          a: 'No. Los flujos de audio se envían al proveedor de transcripción, se procesan una vez y se eliminan. Las transcripciones solo se guardan si inicias sesión.',
        },
      ]}

      ctaHeadline="Convierte conferencias en notas de estudio"
      ctaSubtitle="Transcripción buscable, resumen de IA, chatea con el material. Gratis por conferencia."
      ctaButton="Sube una conferencia"

      relatedLinks={[
        { href: '/es/webinar-transcription',     label: 'Transcripción de Webinar' },
        { href: '/es/sermon-transcription',      label: 'Transcripción de Sermón' },
        { href: '/es/voice-memo-to-text',        label: 'Memo de Voz a Texto' },
        { href: '/es/interview-transcription',   label: 'Transcripción de Entrevista' },
        { href: '/es/meeting-transcription',     label: 'Transcripción de Reunión' },
      ]}
    />
  )
}