import FormatPageLayout from '@/components/FormatPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/flac-to-text',
  'fr': 'https://mictoo.com/fr/flac-to-text',
  'de': 'https://mictoo.com/de/flac-to-text',
  'es': 'https://mictoo.com/es/flac-to-text',
  'ru': 'https://mictoo.com/ru/flac-to-text',
  'it': 'https://mictoo.com/it/flac-to-text',
  'pt': 'https://mictoo.com/pt/flac-to-text',
  'pl': 'https://mictoo.com/pl/flac-to-text',
  'ja': 'https://mictoo.com/ja/flac-to-text',
  'ko': 'https://mictoo.com/ko/flac-to-text',
  'x-default': 'https://mictoo.com/flac-to-text',
}

export const metadata = {
  title: 'FLAC a Texto: Transcripción Sin Pérdidas para Archivos de Palabras Habladas | Mictoo',
  description:
    'Sube una entrevista de historia oral en FLAC, una grabación de campo o una copia de preservación y obtén una transcripción editable con marcas de tiempo.',
  alternates: {
    canonical: 'https://mictoo.com/es/flac-to-text',
    languages: LANGS,
  },
  openGraph: {
    title: 'FLAC a Texto: Transcripción de Audio Sin Pérdidas | Mictoo',
    description: 'Sube una entrevista de historia oral en FLAC, una grabación de campo o una copia de preservación. Obtén una transcripción editable con marcas de tiempo.',
    url: 'https://mictoo.com/es/flac-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FLAC a Texto: Transcripción de Audio Sin Pérdidas',
    description: 'Sube un archivo de archivo de palabras habladas en FLAC o una grabación de campo y obtén una transcripción editable con marcas de tiempo.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function EsFlacToTextPage() {
  return (
    <FormatPageLayout
      locale="es"
      badge="FLAC · Sin Pérdidas · Gratis"
      h1First="FLAC a Texto"
      h1Second="Audio sin pérdidas para archivos de palabras habladas"
      subtitle="FLAC es utilizado por archivos de historia oral, grabadoras de campo y flujos de trabajo de preservación para almacenar audio sin compresión con pérdidas. Suelta el archivo .flac, conserva el máster sin pérdidas y obtén una transcripción con marcas de tiempo."
      highlightFormat="flac"
      previewFileName="grabación-archivística.flac"
      previewWordCount={155}
      previewDurationLabel="18:04"
      previewLines={[
        { t: '0:00',  line: 'Esta grabación se hizo en la casa familiar en octubre de mil novecientos setenta y ocho.' },
        { t: '0:07',  line: 'El sujeto es mi abuela, nacida en Cracovia en mil novecientos catorce, inmigró a Nueva York en mil novecientos treinta y nueve.' },
        { t: '0:18',  line: 'La calidad de la grabación está limitada por la fuente de cassette original. Por favor, ten en cuenta el volumen del entrevistador.' },
        { t: '0:27',  line: 'Abuela, ¿puedes contarme sobre el día que dejaste Cracovia por última vez?' },
        { t: '0:34',  line: 'Estaba lloviendo. Eso es lo que recuerdo primero. Todos estaban de pie en la plataforma bajo la lluvia.' },
        { t: '0:44',  line: 'Mi padre tenía dos maletas y mi madre tenía una. Yo solo tenía una pequeña bolsa que me había dado mi tía.' },
        { t: '0:54',  line: 'El tren debía salir a las seis de la mañana, pero no salió hasta casi las diez.' },
        { t: '1:04',  line: 'Y cuando finalmente salió, nadie en esa plataforma volvió a ver la ciudad de la misma manera.' },
      ]}
      whyTitle="Por qué Mictoo para la transcripción de FLAC"
      whyCards={[
        {
          icon: 'target',
          title: 'Sin compresión adicional con pérdidas',
          desc: 'FLAC preserva la señal grabada sin pérdida de compresión estilo MP3. La precisión de la transcripción aún depende de la claridad del habla y de la captura original.',
        },
        {
          icon: 'gear',
          title: 'Cualquier frecuencia de muestreo, cualquier profundidad de bits',
          desc: '44.1 kHz a 192 kHz, 16 bits a 24 bits. Whisper re-muestrea a 16 kHz mono internamente, por lo que tu tasa de origen no afecta la calidad.',
        },
        {
          icon: 'book',
          title: 'Flujo de trabajo amigable con la preservación',
          desc: 'Tu archivo FLAC original nunca se modifica. Lo transmitimos al proveedor de transcripción, extraemos audio en memoria y lo eliminamos después.',
        },
        {
          icon: 'clip',
          title: 'FLAC dentro de OGG también manejado',
          desc: 'FLAC nativo (bytes mágicos fLaC) y FLAC en OGG (OggS con un flujo FLAC) funcionan ambos. Sin reempaquetado manual.',
        },
      ]}
      scenariosTitle="Cuándo FLAC a texto es la opción adecuada"
      scenarios={[
        {
          icon: 'book',
          title: 'Archivo de historia oral',
          desc: 'Entrevista en formato largo preservada como FLAC sin pérdidas para el archivo. La transcripción la hace buscable, citada y lista para referencias.',
        },
        {
          icon: 'briefcase',
          title: 'Grabación institucional',
          desc: 'Conferencia o simposio grabado en museo, biblioteca o universidad en FLAC para preservación. La transcripción es la capa de acceso.',
        },
        {
          icon: 'mic',
          title: 'Entrevista o podcast extraído de CD',
          desc: 'Entrevista o episodio de podcast más antiguo que extrajiste de un CD como FLAC. Suelta el archivo para una transcripción moderna.',
        },
        {
          icon: 'waveform',
          title: 'Grabación de campo, captura sin pérdidas',
          desc: 'Grabadora de campo o captura manual escrita como FLAC para ahorrar espacio en la tarjeta sin perder calidad. Transcripción completa con marcas de tiempo.',
        },
        {
          icon: 'sparkles',
          title: 'Colecciones de entrevistas restauradas',
          desc: 'Entrevistas digitalizadas de cinta o disco almacenadas como FLAC después de la restauración. Agrega texto buscable mientras conservas la copia de preservación.',
        },
        {
          icon: 'users',
          title: 'Copia de preservación de deposición',
          desc: 'Grabación legal preservada como FLAC para la integridad del archivo. Transcripción para revisión, citación y descubrimiento posterior.',
        },
      ]}
      technicalTitle="Lo que FLAC sin pérdidas hace, y no hace, preservar"
      technicalIntro="FLAC preserva la señal de origen sin compresión con pérdidas. Protege una copia de archivo, pero no puede restaurar palabras ya oscurecidas por ruido, recortes, superposiciones o distancia del micrófono."
      technicalFacts={[
        {
          icon: 'waveform',
          title: 'Fuente sin pérdidas',
          desc: 'La decodificación devuelve la señal grabada sin pérdida de compresión estilo MP3, lo cual es útil para flujos de trabajo de preservación.',
        },
        {
          icon: 'ear',
          title: 'Sin limpieza automática',
          desc: 'Una copia sin pérdidas de una grabación ruidosa sigue siendo ruidosa. La claridad del habla al capturar sigue siendo el principal factor de precisión.',
        },
        {
          icon: 'clip',
          title: 'Comentarios Vorbis separados',
          desc: 'Artista, ID de archivo y otras etiquetas no se insertan en la transcripción. Mantén ese mapeo en tu catálogo de archivo.',
        },
        {
          icon: 'cloud',
          title: 'Copia de archivo eficiente',
          desc: 'FLAC es más pequeño que WAV sin comprimir, pero aún puede ser grande para sesiones largas. Divide grabaciones extensas si es necesario.',
        },
      ]}
      faq={[
        {
          q: '¿Qué archivos FLAC acepta Mictoo?',
          a: 'FLAC nativo (bytes mágicos fLaC) y contenedores FLAC en OGG, mono o estéreo, cualquier frecuencia de muestreo hasta 192 kHz, y profundidad de 16 o 24 bits. Aceptamos el archivo directamente sin conversión.',
        },
        {
          q: '¿La entrada sin pérdidas produce una mejor transcripción?',
          a: 'Para grabaciones de fuente limpia, la entrada sin pérdidas coincide con el límite de lo que Whisper puede extraer. Para fuentes ruidosas o degradadas (un rip de cassette, por ejemplo), la entrada sin pérdidas preserva la degradación fielmente pero no la corrige. La calidad de grabación importa más que el contenedor.',
        },
        {
          q: 'Mi archivo FLAC es mayor de 60 MB. ¿Qué hago ahora?',
          a: 'Un FLAC estéreo de 44.1 kHz y 16 bits es alrededor de 5 MB por minuto, por lo que cualquier grabación de más de unos 12 minutos alcanza el límite. Si estás registrado, dividimos automáticamente hasta unas 3 horas. De lo contrario, convierte a FLAC mono de 16 kHz o MP3 primero: ffmpeg -i in.flac -ar 16000 -ac 1 out.flac.',
        },
        {
          q: '¿Puedo conservar los metadatos FLAC (álbum, artista, año)?',
          a: 'La transcripción es texto plano sin metadatos FLAC. Las etiquetas de comentarios Vorbis se ignoran durante la transcripción. Mantén el mapeo de metadatos en tu sistema de archivo si lo necesitas más adelante.',
        },
        {
          q: '¿Mictoo transcribe FLAC en otros idiomas?',
          a: 'Sí. Whisper large-v3 soporta más de 50 idiomas con detección automática. Para acentos inusuales o grabaciones más antiguas, establece el idioma explícitamente para una detección más limpia en la primera pasada.',
        },
        {
          q: '¿Puedo obtener subtítulos SRT para un video que usa este audio?',
          a: 'Sí. Descarga SRT o VTT después de la transcripción. Las marcas de tiempo se alinean con la línea de tiempo original de FLAC para su uso en editores de video o herramientas de accesibilidad.',
        },
        {
          q: '¿Se mantiene mi archivo FLAC en sus servidores?',
          a: 'No. El audio se transmite al proveedor de transcripción, se procesa una vez y se elimina de la memoria. Nunca escribimos el audio en disco. Las transcripciones solo se almacenan si inicias sesión.',
        },
        {
          q: '¿Puedo traducir la transcripción a otro idioma?',
          a: 'Sí. Después de la transcripción, elige un idioma objetivo y haz clic en Traducir. La traducción se realiza en GPT-4o-mini y aparece junto al original.',
        },
        {
          q: '¿Cuánto tiempo tarda una transcripción de FLAC?',
          a: 'Un FLAC de 15 minutos generalmente termina en 25-45 segundos de principio a fin. Los archivos más grandes cerca del límite de carga tardan de 45 a 90 segundos. La velocidad de carga suele ser el paso más largo, ya que los archivos FLAC son grandes.',
        },
        {
          q: '¿Aceptan FLAC hi-res de 24 bits?',
          a: 'Sí. FLAC de 24 bits a 96 kHz o 192 kHz es totalmente compatible. Whisper re-muestrea internamente, por lo que el hi-res no mejora la precisión sobre 16 bits a 44.1 kHz para audio limpio, pero tampoco perjudica.',
        },
      ]}
      ctaHeadline="Suelta tu FLAC, obtén una transcripción lista para el archivo"
      ctaSubtitle="Fuente sin pérdidas dentro, texto buscable fuera. Historia oral, grabaciones de campo y copias de preservación."
      ctaButton="Sube FLAC para transcribir"
    />
  )
}