import FormatPageLayout from '@/components/FormatPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/webm-to-text',
  'fr': 'https://mictoo.com/fr/webm-to-text',
  'de': 'https://mictoo.com/de/webm-to-text',
  'es': 'https://mictoo.com/es/webm-to-text',
  'ru': 'https://mictoo.com/ru/webm-to-text',
  'it': 'https://mictoo.com/it/webm-to-text',
  'pt': 'https://mictoo.com/pt/webm-to-text',
  'pl': 'https://mictoo.com/pl/webm-to-text',
  'ja': 'https://mictoo.com/ja/webm-to-text',
  'ko': 'https://mictoo.com/ko/webm-to-text',
  'x-default': 'https://mictoo.com/webm-to-text',
}

export const metadata = {
  title: 'WebM a Texto: Transcripción de Loom, OBS y Grabaciones de Pantalla del Navegador | Mictoo',
  description:
    'Sube grabaciones de pantalla WebM de Loom, OBS o la API MediaRecorder del navegador. Eliminamos el video y transcribimos el audio. Transcripción editable con marcas de tiempo en segundos.',
  alternates: {
    canonical: 'https://mictoo.com/es/webm-to-text',
    languages: LANGS,
  },
  openGraph: {
    title: 'WebM a Texto: Transcripción de Loom, OBS, Grabaciones del Navegador | Mictoo',
    description: 'Sube una grabación de pantalla WebM. Extraemos el audio y devolvemos una transcripción editable con marcas de tiempo.',
    url: 'https://mictoo.com/es/webm-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WebM a Texto: Transcripción de Loom, OBS, Grabaciones del Navegador',
    description: 'Sube una grabación de pantalla WebM. Extraemos el audio y devolvemos una transcripción editable.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function EsWebmToTextPage() {
  return (
    <FormatPageLayout
      locale="es"
      badge="WebM · Loom · OBS · Grabación de pantalla"
      h1First="WebM a Texto"
      h1Second="Para grabaciones de pantalla de Loom, OBS y navegador"
      subtitle="WebM es lo que exporta Loom, lo que graba OBS por defecto en versiones más recientes, y lo que escriben los navegadores cuando tu aplicación utiliza la API MediaRecorder. Suelta el archivo, eliminamos el video y transcribimos el audio en segundos."
      highlightFormat="webm"
      previewFileName="loom-recording.webm"
      previewWordCount={172}
      previewDurationLabel="7:36"
      previewLines={[
        { t: '0:00',  line: 'Hola equipo, quería repasar el nuevo flujo de incorporación antes de lanzarlo el jueves.' },
        { t: '0:07',  line: 'Esta es mi pantalla. Lo que están viendo es la página de inicio después de un registro nuevo.' },
        { t: '0:14',  line: 'Lo primero que hay que notar, el modal de bienvenida ahora se sitúa sobre el panel en lugar de bloquear toda la vista.' },
        { t: '0:23',  line: 'Eso es intencionado. Los usuarios seguían confundidos cuando el panel estaba completamente oculto por el recorrido.' },
        { t: '0:32',  line: 'En segundo lugar, los tres pasos del recorrido son más cortos. Reducimos el texto aproximadamente a la mitad basado en la última ronda de comentarios.' },
        { t: '0:41',  line: 'Si hago clic en Omitir Recorrido aquí, el modal se cierra y llevamos al usuario directamente a una marca de coach de estado vacío.' },
        { t: '0:51',  line: 'Esa marca de coach apunta al botón de carga principal, que es la única acción que cada usuario necesita hacer primero.' },
        { t: '1:00',  line: 'Déjenme saber qué piensan. Problemas que bloquean el envío para el miércoles por la mañana si es posible.' },
      ]}
      whyTitle="Por qué Mictoo para la transcripción de WebM"
      whyCards={[
        {
          icon: 'video',
          title: 'Video WebM manejado del lado del servidor',
          desc: 'Grabación de pantalla WebM con la pista de video intacta. Demuxamos, eliminamos el video y transcribimos el audio. No se necesita extracción local.',
        },
        {
          icon: 'gear',
          title: 'Opus y Vorbis ambos soportados',
          desc: 'La mayoría de los archivos WebM llevan audio Opus (más reciente) o Vorbis (más antiguo). Manejamos ambos códecs, no se requiere conversión manual.',
        },
        {
          icon: 'clip',
          title: 'Subtítulos SRT para el recorrido',
          desc: 'Descarga SRT o VTT después de la transcripción. Las marcas de tiempo se alinean con el WebM original, por lo que los subtítulos coinciden con la grabación de pantalla con precisión de fotograma.',
        },
        {
          icon: 'sparkles',
          title: 'Resumen de IA para notas de lanzamiento',
          desc: 'El resumen de IA es un buen primer borrador para la descripción del ticket, nota de lanzamiento o actualización asíncrona que se hizo para reemplazar.',
        },
      ]}
      scenariosTitle="Cuándo WebM a texto es la opción adecuada"
      scenarios={[
        {
          icon: 'video',
          title: 'Recorrido de Loom',
          desc: 'Demostración de producto, revisión de código o actualización asíncrona grabada en Loom. La transcripción alimenta el ticket, el documento de Notion o el correo electrónico de seguimiento.',
        },
        {
          icon: 'briefcase',
          title: 'Grabación de pantalla de OBS',
          desc: 'Tutorial o captura de juego grabada con OBS Studio. La transcripción se convierte en la descripción de YouTube o en un artículo de blog.',
        },
        {
          icon: 'gear',
          title: 'Salida de MediaRecorder del navegador',
          desc: 'Audio grabado por la aplicación a través de la API MediaRecorder. Suelta el .webm que tu aplicación produjo sin ningún paso de conversión.',
        },
        {
          icon: 'users',
          title: 'Grabación de Google Meet o Firefox',
          desc: 'Algunas herramientas de reunión y navegadores graban en WebM por defecto. Suelta el archivo para una versión de texto buscable de la conversación.',
        },
        {
          icon: 'editPen',
          title: 'Revisión de diseño asíncrona',
          desc: 'El diseñador graba un WebM revisando un prototipo. Los revisores obtienen una transcripción escrita para que puedan hojear antes de ver.',
        },
        {
          icon: 'book',
          title: 'Captura de pantalla de conferencia',
          desc: 'Instructor grabó diapositivas con narración y compartió como WebM. Los estudiantes obtienen una transcripción buscable junto al video.',
        },
      ]}
      technicalTitle="Qué saber sobre las grabaciones WebM"
      technicalIntro="WebM es un contenedor amigable para el navegador que puede contener video más audio o solo audio. La configuración del navegador y del grabador determina qué pistas y códecs están presentes."
      technicalFacts={[
        {
          icon: 'layers',
          title: 'Audio Opus o Vorbis',
          desc: 'La mayoría de las grabaciones de voz recientes en WebM utilizan Opus; los archivos más antiguos pueden usar Vorbis. Ambos están dentro del contenedor WebM.',
        },
        {
          icon: 'video',
          title: 'Solo audio o con video',
          desc: 'Un WebM puede contener una grabación de pantalla o solo una pista de micrófono. La transcripción utiliza el flujo de voz audible.',
        },
        {
          icon: 'clip',
          title: 'Exportaciones basadas en la línea de tiempo',
          desc: 'Las marcas de tiempo de la transcripción siguen la línea de tiempo de la grabación decodificada para trabajos posteriores de subtitulado o edición.',
        },
        {
          icon: 'gear',
          title: 'Salida del grabador del navegador',
          desc: 'Las configuraciones de MediaRecorder varían según el navegador. Si una captura no tiene permiso de micrófono, puede no contener voz para transcribir.',
        },
      ]}
      faq={[
        {
          q: '¿Qué tipo de archivos WebM acepta Mictoo?',
          a: 'Cualquier WebM estándar: video con audio Opus o Vorbis (Loom, OBS, MediaRecorder del navegador), o WebM solo de audio. Demuxamos la pista de audio del lado del servidor y transcribimos con Whisper large-v3.',
        },
        {
          q: '¿Necesito extraer el audio yo mismo primero?',
          a: 'No. Sube el video WebM tal cual. Manejamos el demux del lado del servidor y solo transcribimos la pista de audio. Si ya extrajiste el audio (Opus o Vorbis), eso también funciona.',
        },
        {
          q: 'Mi Loom supera los 60 MB. ¿Qué hago?',
          a: 'Un Loom de 20-30 minutos a menudo supera los 60 MB. Si estás registrado, dividimos automáticamente archivos largos de hasta aproximadamente 3 horas. De lo contrario, utiliza la configuración de descarga de Loom para reducir la calidad, o exporta el audio y súbelo.',
        },
        {
          q: '¿Las marcas de tiempo coinciden con mi grabación de pantalla?',
          a: 'Sí. Las marcas de tiempo en la transcripción y en las exportaciones SRT/VTT se alinean con la línea de tiempo original de WebM, por lo que los subtítulos coinciden con la grabación de pantalla con precisión de fotograma cuando se vuelven a colocar en el video.',
        },
        {
          q: '¿Puedo obtener subtítulos SRT para el recorrido?',
          a: 'Sí. Descarga SRT o VTT después de la transcripción. Suelta en tu editor de video, carga en YouTube, o en el flujo de re-renderizado de Loom.',
        },
        {
          q: '¿Mictoo transcribe WebM en idiomas no ingleses?',
          a: 'Sí. Whisper large-v3 soporta más de 50 idiomas con detección automática. Para grabaciones cortas o contenido en idiomas no ingleses, establece el idioma explícitamente para obtener resultados más limpios en la primera pasada.',
        },
        {
          q: '¿Qué pasa si el WebM no tiene pista de audio?',
          a: 'La transcripción estará vacía. Los archivos WebM sin pista de audio (grabaciones de pantalla silenciosas, capturas al estilo GIF) no tienen nada que Whisper transcriba.',
        },
        {
          q: '¿Puedo traducir la transcripción a otro idioma?',
          a: 'Sí. Después de la transcripción, elige un idioma de destino y haz clic en Traducir. La traducción se ejecuta en GPT-4o-mini y aparece junto al original.',
        },
        {
          q: '¿Se guarda mi archivo WebM en sus servidores?',
          a: 'No. El WebM se transmite al proveedor de transcripción, demuxamos y transcribimos en memoria, luego eliminamos todo. La transcripción solo se almacena si inicias sesión y la guardas en el historial.',
        },
        {
          q: '¿Cuánto tiempo lleva una transcripción de WebM?',
          a: 'Un Loom de 10 minutos típicamente termina en 20-40 segundos de principio a fin. Archivos WebM más largos (30-45 minutos) tardan 60-90 segundos. La velocidad de carga suele ser el paso más largo para grandes grabaciones de pantalla.',
        },
      ]}
      ctaHeadline="Suelta tu grabación de Loom o OBS"
      ctaSubtitle="Grabaciones de pantalla WebM, salida de MediaRecorder del navegador. Video demuxado del lado del servidor."
      ctaButton="Subir WebM para transcribir"
    />
  )
}