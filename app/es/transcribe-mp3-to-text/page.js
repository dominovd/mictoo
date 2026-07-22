import FormatPageLayout from '@/components/FormatPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/transcribe-mp3-to-text',
  'fr': 'https://mictoo.com/fr/transcribe-mp3-to-text',
  'de': 'https://mictoo.com/de/transcribe-mp3-to-text',
  'es': 'https://mictoo.com/es/transcribe-mp3-to-text',
  'ru': 'https://mictoo.com/ru/transcribe-mp3-to-text',
  'it': 'https://mictoo.com/it/transcribe-mp3-to-text',
  'pt': 'https://mictoo.com/pt/transcribe-mp3-to-text',
  'pl': 'https://mictoo.com/pl/transcribe-mp3-to-text',
  'ja': 'https://mictoo.com/ja/transcribe-mp3-to-text',
  'ko': 'https://mictoo.com/ko/transcribe-mp3-to-text',
  'x-default': 'https://mictoo.com/transcribe-mp3-to-text',
}

export const metadata = {
  title: 'MP3 a Texto: Transcripción Online Gratuita de MP3 para Podcasts y Grabaciones de Voz | Mictoo',
  description:
    'Transcribe archivos de audio MP3 con marcas de tiempo, resumen de IA y exportaciones. Optimizado para podcasts, notas de voz y audio descargado. Sube tu MP3, obtén el texto en segundos.',
  alternates: {
    canonical: 'https://mictoo.com/es/transcribe-mp3-to-text',
    languages: LANGS,
  },
  openGraph: {
    title: 'MP3 a Texto: Transcripción Online Gratuita de MP3 | Mictoo',
    description: 'Sube tu podcast MP3 o grabación de voz, obtén una transcripción con resumen en segundos.',
    url: 'https://mictoo.com/es/transcribe-mp3-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MP3 a Texto: Transcripción Online Gratuita de MP3',
    description: 'Sube tu MP3, obtén una transcripción.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function EsTranscribeMp3ToTextPage() {
  return (
    <FormatPageLayout
      locale="es"
      badge="MP3 · Amigable para Podcasts · Gratis"
      h1First="MP3 a Texto"
      h1Second="Para podcasts, notas de voz y entrevistas"
      subtitle="MP3 es un formato común para podcasts y grabaciones de voz. Sube tu episodio, nota de voz o entrevista descargada y obtén una transcripción con marcas de tiempo, resumen de IA y exportaciones limpias para notas del programa."
      highlightFormat="mp3"
      previewFileName="episodio-podcast.mp3"
      previewWordCount={182}
      previewDurationLabel="28:14"
      previewLines={[
        { t: '0:00',  line: 'Bienvenido de nuevo al programa. Hoy hablamos sobre el estado del podcasting independiente en 2026.' },
        { t: '0:07',  line: 'Mi invitado ha estado dirigiendo un programa semanal durante ocho años sin perder un episodio.' },
        { t: '0:14',  line: 'Gracias por tenerme. Es increíble pensar que comenzamos esto cuando todos decían que el audio ya estaba saturado.' },
        { t: '0:22',  line: 'Empecemos por ahí. ¿Qué fue diferente al lanzar un podcast en 2018 en comparación con ahora?' },
        { t: '0:30',  line: 'La distribución era más difícil de penetrar, pero las audiencias eran más pacientes.' },
        { t: '0:37',  line: 'Hoy las herramientas son increíbles, transcripción en segundos, resúmenes de IA para notas del programa, pero la atención es más escasa.' },
        { t: '0:47',  line: 'Esa es una buena transición. ¿Cuál es tu flujo de trabajo para las notas del programa ahora que las transcripciones son básicamente gratuitas?' },
        { t: '0:55',  line: 'Exporto el MP3, lo subo a una herramienta de transcripción y uso el resumen de IA como el primer borrador de las notas.' },
      ]}
      whyTitle="Por qué Mictoo para la transcripción de MP3"
      whyCards={[
        {
          icon: 'mic',
          title: 'Construido para podcasts y voz',
          desc: 'MP3 es lo que las redes de podcasts distribuyen y las aplicaciones de voz exportan. Ajustado para contenido hablado con marcas de tiempo listas para notas del programa y subtítulos.',
        },
        {
          icon: 'gear',
          title: 'Configuraciones MP3 comunes aceptadas',
          desc: 'Bitrate constante o variable, mono o estéreo. La claridad del habla es lo más importante; bitrates muy bajos y artefactos de compresión audibles pueden reducir la precisión.',
        },
        {
          icon: 'sparkles',
          title: 'Resumen de IA para notas del programa',
          desc: 'Un resumen aparece junto a la transcripción automáticamente. Un sólido primer borrador para notas de episodios, descripciones y resúmenes amigables para SEO.',
        },
        {
          icon: 'globe',
          title: 'SRT, VTT y más de 50 idiomas',
          desc: 'Exporta SRT o VTT para la versión de video de YouTube del episodio. Traduce al español, francés, alemán y más de 45 otros idiomas con un clic.',
        },
      ]}
      scenariosTitle="Cuándo MP3 a texto es la opción adecuada"
      scenarios={[
        {
          icon: 'mic',
          title: 'Notas del programa de podcast',
          desc: 'Has subido el episodio, lo subiste a tu anfitrión. Sube el mismo MP3 aquí para la transcripción y el resumen de IA que se convertirán en las notas del programa.',
        },
        {
          icon: 'layers',
          title: 'Catálogo de podcasts',
          desc: 'Años de episodios ya publicados sin transcripciones. Procesa uno por uno para llenar el archivo y hacer que cada episodio sea buscable.',
        },
        {
          icon: 'editPen',
          title: 'Memo de voz a documento',
          desc: 'Notas de voz grabadas en tu teléfono (muchas aplicaciones exportan MP3). Convierte ideas divagantes en texto editable y buscable para tu aplicación de notas.',
        },
        {
          icon: 'clip',
          title: 'Entrevistas descargadas',
          desc: 'Entrevista de podcast que quieres citar en un artículo, MP3 de charla en conferencia que quieres referenciar, conferencia descargada que quieres estudiar.',
        },
        {
          icon: 'book',
          title: 'Capítulos de audiolibros',
          desc: 'Capítulo de audiolibro MP3 que quieres como texto impreso para tomar notas. Los archivos de audiolibros grandes a menudo superan los 60 MB y necesitan ser divididos primero.',
        },
        {
          icon: 'video',
          title: 'Audio de YouTube a MP3',
          desc: 'Los extractores de audio de YouTube a menudo producen MP3 por compatibilidad. Sube el archivo extraído para una transcripción limpia con marcas de tiempo.',
        },
      ]}
      technicalTitle="Qué importa en un MP3"
      technicalIntro="Las configuraciones de MP3 afectan el tamaño del archivo y pueden afectar la inteligibilidad en los extremos. Estos detalles te ayudan a decidir si subir el archivo tal cual o hacer primero una copia de voz más pequeña."
      technicalFacts={[
        {
          icon: 'waveform',
          title: 'Bitrate y claridad',
          desc: 'El habla a un bitrate moderado suele ser adecuada. Bitrate extremadamente bajo, clipping o artefactos fuertes pueden ocultar consonantes y nombres.',
        },
        {
          icon: 'gear',
          title: 'CBR y VBR',
          desc: 'Tanto archivos MP3 de bitrate constante como variable pueden ser subidos; las marcas de tiempo siguen la línea de tiempo del audio decodificado.',
        },
        {
          icon: 'clip',
          title: 'Las etiquetas ID3 permanecen separadas',
          desc: 'Artista, título, arte y metadatos de capítulos no se insertan en la transcripción. Mantén esos metadatos en tu sistema de publicación.',
        },
        {
          icon: 'cloud',
          title: 'Episodios largos',
          desc: 'Si un episodio excede el límite de carga, exporta una copia de voz mono a un bitrate más bajo o divídelo en un descanso natural.',
        },
      ]}
      faq={[
        {
          q: '¿Mictoo transcribirá cualquier archivo MP3?',
          a: 'Mictoo acepta archivos MP3 comunes con bitrate constante o variable, audio mono o estéreo. Archivos dañados, variantes no soportadas o grabaciones con artefactos de compresión severos pueden necesitar ser re-exportados. El límite es 60 MB cuando estás registrado y 25 MB anónimamente.',
        },
        {
          q: '¿Afecta el bitrate del MP3 la calidad de la transcripción?',
          a: 'La claridad de la grabación es más importante que un bitrate alto, pero el bitrate no es irrelevante. Una grabación de voz limpia a un bitrate moderado suele ser adecuada; la compresión agresiva, clipping o bitrate muy bajo pueden eliminar detalles del habla y reducir la precisión.',
        },
        {
          q: 'Mi MP3 de podcast supera los 60 MB. ¿Qué hago?',
          a: 'Crea una copia de voz mono más pequeña con ffmpeg: ffmpeg -i podcast.mp3 -b:a 64k -ac 1 output.mp3. Verifica el resultado por artefactos audibles antes de subir, o divide el episodio en un descanso natural.',
        },
        {
          q: '¿Puedo obtener un resumen de IA del episodio?',
          a: 'Sí. El resumen de IA aparece junto a la transcripción automáticamente después de que la transcripción termina. Es un sólido primer borrador para las notas del programa del podcast, descripciones de episodios y resúmenes amigables para SEO.',
        },
        {
          q: '¿Puedo descargar subtítulos SRT para la versión de YouTube?',
          a: 'Sí. Exporta como SRT o VTT después de la transcripción. Ambos formatos incluyen marcas de tiempo alineadas a la línea de tiempo original del MP3. Sube a tu carga de YouTube o editor de video para subtítulos.',
        },
        {
          q: '¿Mictoo transcribe archivos MP3 en otros idiomas?',
          a: 'Sí. Whisper large-v3 soporta más de 50 idiomas con detección automática. Para MP3 cortos o contenido no en inglés, establece el idioma explícitamente en el menú desplegable para una detección más limpia en la primera pasada.',
        },
        {
          q: '¿Puedo traducir la transcripción a otro idioma?',
          a: 'Sí. Después de que la transcripción termina, elige un idioma objetivo y haz clic en Traducir. La traducción es generada por GPT-4o-mini y aparece junto a la transcripción original.',
        },
        {
          q: '¿Se guardará mi archivo MP3 en sus servidores?',
          a: 'No. El MP3 se transmite al proveedor de transcripción, se procesa una vez y se elimina de la memoria. Nunca escribimos el audio en disco. La transcripción de texto solo se almacena si inicias sesión y eliges agregarla a tu historial.',
        },
        {
          q: '¿Aparecerán los metadatos ID3 (artista, título, álbum) en la transcripción?',
          a: 'No. La transcripción es texto plano sin metadatos MP3. Las etiquetas ID3 se ignoran durante la transcripción. Si necesitas que la transcripción esté emparejada con los metadatos del episodio, mantén ese mapeo en tu propio sistema de archivo.',
        },
        {
          q: '¿Cuánto tiempo tarda una transcripción de MP3?',
          a: 'Un MP3 de podcast de 30 minutos generalmente termina en 30-50 segundos de principio a fin. Los archivos más grandes cerca del límite de carga tardan de 60 a 90 segundos. La velocidad de carga suele ser el paso más largo del proceso.',
        },
      ]}
      ctaHeadline="Sube tu MP3, escribe notas del programa más rápido"
      ctaSubtitle="Episodio de podcast, nota de voz, entrevista descargada, capítulo de audiolibro. Obtén el texto y el resumen en segundos."
      ctaButton="Subir MP3 para transcribir"
    />
  )
}