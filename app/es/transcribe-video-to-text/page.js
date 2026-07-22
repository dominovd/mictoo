import FormatPageLayout from '@/components/FormatPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/transcribe-video-to-text',
  'fr': 'https://mictoo.com/fr/transcribe-video-to-text',
  'de': 'https://mictoo.com/de/transcribe-video-to-text',
  'es': 'https://mictoo.com/es/transcribe-video-to-text',
  'ru': 'https://mictoo.com/ru/transcribe-video-to-text',
  'it': 'https://mictoo.com/it/transcribe-video-to-text',
  'pt': 'https://mictoo.com/pt/transcribe-video-to-text',
  'pl': 'https://mictoo.com/pl/transcribe-video-to-text',
  'ja': 'https://mictoo.com/ja/transcribe-video-to-text',
  'ko': 'https://mictoo.com/ko/transcribe-video-to-text',
  'x-default': 'https://mictoo.com/transcribe-video-to-text',
}

export const metadata = {
  title: 'Vídeo a Texto: Transcripción de Vídeo Online Gratuita para MP4, MOV, WebM | Mictoo',
  description:
    'Sube un vídeo en MP4, MOV, WebM, AVI o MKV y obtén una transcripción con marcas de tiempo, resumen de IA y subtítulos SRT. Para grabaciones de pantalla, tutoriales, vlogs y seminarios web.',
  alternates: {
    canonical: 'https://mictoo.com/es/transcribe-video-to-text',
    languages: LANGS,
  },
  openGraph: {
    title: 'Vídeo a Texto: Transcripción de Vídeo Online Gratuita | Mictoo',
    description: 'Transcripción de vídeo MP4, MOV, WebM con SRT, resumen y traducción.',
    url: 'https://mictoo.com/es/transcribe-video-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vídeo a Texto: Transcripción de Vídeo Online Gratuita',
    description: 'Transcripción de vídeo MP4, MOV, WebM con SRT y resumen.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function EsTranscribeVideoToTextPage() {
  return (
    <FormatPageLayout
      locale="es"
      badge="Archivos de vídeo · MP4 · MOV · WebM · Gratis"
      h1First="Vídeo a Texto"
      h1Second="Para grabaciones de pantalla, tutoriales y vlogs"
      subtitle="Sube un archivo MP4, MOV, WebM, MKV o AVI. Extraemos la pista de audio, transcribimos con Whisper large-v3 y devolvemos una transcripción con marcas de tiempo, resumen de IA y subtítulos SRT listos para añadir al vídeo."
      highlightFormat="video"
      relatedFormatsTitle="Contenedores de vídeo que puedes subir"
      relatedFormats={[
        { key: 'video', name: 'MP4', ext: '.mp4' },
        { key: 'mov', name: 'MOV', ext: '.mov' },
        { key: 'webm', name: 'WebM', ext: '.webm', href: '/es/webm-to-text' },
        { key: 'mkv', name: 'MKV', ext: '.mkv' },
        { key: 'avi', name: 'AVI', ext: '.avi' },
        { key: 'mpeg', name: 'MPEG', ext: '.mpeg' },
      ]}
      previewFileName="keynote-recording.mp4"
      previewWordCount={205}
      previewDurationLabel="32:47"
      enableYouTubeUrl={true}
      previewLines={[
        { t: '0:00',  line: 'Buenos días a todos, y gracias por venir hoy.' },
        { t: '0:06',  line: 'Vamos a pasar los próximos treinta minutos hablando sobre cómo cambió el vídeo en 2026 y lo que eso significa para los creadores.' },
        { t: '0:15',  line: 'Tres números rápidos antes de empezar. Noventa y dos por ciento de los usuarios de internet ven vídeos cada semana.' },
        { t: '0:24',  line: 'El contenido corto ahora representa más tiempo de visualización que el contenido largo en todas las plataformas principales.' },
        { t: '0:32',  line: 'Y las búsquedas que llevan a un resultado de vídeo han crecido dos veces y media año tras año.' },
        { t: '0:41',  line: 'Así que las plataformas están impulsando el vídeo. La audiencia está viendo más vídeos. Esa parte no es controvertida.' },
        { t: '0:50',  line: 'Lo que es controvertido es lo que realmente capta la atención en ese océano de vídeos.' },
        { t: '0:58',  line: 'Déjame repasar los tres patrones que hemos visto funcionar para los creadores que publican cada semana.' },
      ]}
      whyTitle="Por qué Mictoo para la transcripción de vídeo"
      whyCards={[
        {
          icon: 'video',
          title: 'Cada contenedor de vídeo común',
          desc: 'MP4, MOV, WebM, MKV, AVI. Desmuxamos la pista de audio del lado del servidor, así que subes el vídeo tal cual sin ningún paso de conversión.',
        },
        {
          icon: 'clip',
          title: 'SRT y VTT listos para la línea de tiempo',
          desc: 'Las marcas de tiempo se alinean con la línea de tiempo original del vídeo. Descarga SRT o VTT y añádelo directamente a Premiere, DaVinci, CapCut o tu subida a YouTube.',
        },
        {
          icon: 'sparkles',
          title: 'Resumen de IA para descripciones',
          desc: 'Resumen generado automáticamente junto a la transcripción. Un sólido primer borrador para descripciones de vídeo, resúmenes de blogs y títulos de capítulos.',
        },
        {
          icon: 'globe',
          title: 'Traduce subtítulos a más de 50 idiomas',
          desc: 'Después de que la transcripción esté lista, traduce los subtítulos al español, francés, alemán, portugués y más de 45 idiomas en un clic.',
        },
      ]}
      scenariosTitle="Cuándo la transcripción de vídeo a texto es adecuada"
      scenarios={[
        {
          icon: 'video',
          title: 'Subtítulos de vídeo de YouTube',
          desc: 'Grabado, editado y exportado a MP4. Sube el archivo para obtener subtítulos SRT y un resumen listo para la descripción.',
        },
        {
          icon: 'briefcase',
          title: 'Grabaciones de Loom y pantalla',
          desc: 'WebM o MP4 de Loom, OBS o captura de pantalla del navegador. Obtén una versión de texto limpia del recorrido.',
        },
        {
          icon: 'users',
          title: 'Grabaciones de seminarios web y talleres',
          desc: 'Grabación de evento de formato largo. La transcripción se convierte en el post del blog de seguimiento, resumen de LinkedIn y archivo buscable.',
        },
        {
          icon: 'editPen',
          title: 'Contenido de vlog y tutorial',
          desc: 'Corte de vlog, explicación de tutorial o demostración de producto. La transcripción alimenta las notas del programa, subtítulos y reutilización en redes sociales.',
        },
        {
          icon: 'book',
          title: 'Archivo de lecciones de curso',
          desc: 'Lección o conferencia grabada en MP4. Ofrece a los estudiantes una versión de texto buscable y asegura subtítulos para accesibilidad.',
        },
        {
          icon: 'mic',
          title: 'Vídeo de entrevista y testimonio',
          desc: 'Entrevista sentada o testimonio de cliente. La transcripción facilita enormemente la cita, edición y traducción.',
        },
      ]}
      technicalTitle="Qué sucede con el archivo de vídeo"
      technicalIntro="Mictoo utiliza la pista de audio hablada para la transcripción. El contenedor y la calidad de imagen no mejoran el reconocimiento de voz, pero afectan el tamaño de subida y si hay una pista de audio disponible."
      technicalFacts={[
        {
          icon: 'video',
          title: 'Pista de audio extraída',
          desc: 'La pista de voz se decodifica del contenedor de vídeo. No necesitas exportar un MP3 separado antes de subirlo.',
        },
        {
          icon: 'clip',
          title: 'Línea de tiempo original mantenida',
          desc: 'Los segmentos de transcripción y las exportaciones de subtítulos utilizan la línea de tiempo original del medio para que puedan coincidir con el vídeo.',
        },
        {
          icon: 'layers',
          title: 'El contenedor no es el códec',
          desc: 'MP4, MOV, WebM, MKV y AVI pueden contener diferentes códecs de audio. El archivo se inspecciona cuando se procesa.',
        },
        {
          icon: 'ear',
          title: 'Se requiere voz',
          desc: 'Los clips silenciosos y los vídeos solo de música no tienen una transcripción hablada confiable. Asegúrate de que la pista de audio deseada sea audible primero.',
        },
      ]}
      faq={[
        {
          q: '¿Qué formatos de vídeo acepta Mictoo?',
          a: 'MP4, MOV, WebM, MKV, AVI y la mayoría de otros contenedores comunes. Desmuxamos la pista de audio del lado del servidor, así que puedes subir cualquiera de estos directamente sin convertir a audio primero.',
        },
        {
          q: '¿Cuál es el tamaño máximo de archivo de vídeo que puedo subir?',
          a: 'Hasta 25 MB de forma anónima, 60 MB al iniciar sesión. Para vídeos más largos, dividimos automáticamente archivos de hasta aproximadamente 3 horas si estás conectado. Para exportaciones muy grandes, reduce la calidad del vídeo primero o extrae la pista de audio y sube el audio.',
        },
        {
          q: '¿Puedo pegar una URL de YouTube en su lugar?',
          a: 'Sí. En esta página puedes pegar una URL de vídeo de YouTube y Mictoo buscará subtítulos cuando estén disponibles. Cuando no existan subtítulos, sube el archivo de vídeo o el audio extraído para una transcripción completa con Whisper.',
        },
        {
          q: '¿Las marcas de tiempo se alinean con el vídeo original?',
          a: 'Sí. Las marcas de tiempo de la transcripción y SRT/VTT utilizan la línea de tiempo original del vídeo. Proporcionan una útil pista de subtítulos de primer pase, pero deberías revisar el tiempo y los saltos de línea en tu editor antes de publicar.',
        },
        {
          q: '¿Puedo obtener subtítulos SRT para el vídeo?',
          a: 'Sí. Descarga como SRT o VTT después de la transcripción. Ambos formatos funcionan en Premiere, DaVinci Resolve, Final Cut, CapCut, YouTube Studio y la mayoría de los reproductores de vídeo modernos.',
        },
        {
          q: '¿Extraen audio de clips de vídeo silenciosos?',
          a: 'No. Si el vídeo no tiene voz audible, no hay nada que transcribir. Para clips con solo música, la transcripción será típicamente vacía o con fragmentos de letras cortas.',
        },
        {
          q: '¿Puedo traducir los subtítulos a otro idioma?',
          a: 'Sí. Después de la transcripción, elige un idioma de destino y haz clic en Traducir. La traducción se realiza en GPT-4o-mini y aparece junto al original. Exporta el SRT traducido para subtítulos en otro idioma.',
        },
        {
          q: '¿Se guardará mi archivo de vídeo en sus servidores?',
          a: 'No. El vídeo se transmite al proveedor de transcripción, extraemos el audio en memoria, transcribimos una vez y eliminamos todo de la memoria. La transcripción solo se almacena si inicias sesión y eliges guardarla en el historial.',
        },
        {
          q: '¿Mictoo transcribe vídeos en otros idiomas?',
          a: 'Sí. Whisper large-v3 soporta más de 50 idiomas con detección automática. Para vídeos cortos o contenido en otro idioma, establece el idioma explícitamente en el menú desplegable para una detección más limpia en el primer pase.',
        },
        {
          q: '¿Cuánto tiempo tarda una transcripción de vídeo?',
          a: 'Un MP4 de 30 minutos normalmente termina en 40-70 segundos de principio a fin. El tiempo de subida y el tamaño del archivo de vídeo suelen ser el paso más largo porque necesitamos recibir el archivo antes de desmuxar el audio.',
        },
      ]}
      ctaHeadline="Súbete tu vídeo, obtén subtítulos y una transcripción"
      ctaSubtitle="MP4, MOV, WebM, MKV, AVI. SRT, VTT, DOCX y un resumen en segundos."
      ctaButton="Subir vídeo para transcribir"
    />
  )
}