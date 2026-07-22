import FormatPageLayout from '@/components/FormatPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/aac-to-text',
  'fr': 'https://mictoo.com/fr/aac-to-text',
  'de': 'https://mictoo.com/de/aac-to-text',
  'es': 'https://mictoo.com/es/aac-to-text',
  'ru': 'https://mictoo.com/ru/aac-to-text',
  'it': 'https://mictoo.com/it/aac-to-text',
  'pt': 'https://mictoo.com/pt/aac-to-text',
  'pl': 'https://mictoo.com/pl/aac-to-text',
  'ja': 'https://mictoo.com/ja/aac-to-text',
  'ko': 'https://mictoo.com/ko/aac-to-text',
  'x-default': 'https://mictoo.com/aac-to-text',
}

export const metadata = {
  title: 'AAC a Texto: Transcripción de Audio AAC y ADTS en Crudo | Mictoo',
  description:
    'Sube archivos .aac en crudo (stream ADTS o ADIF), obtén una transcripción editable en segundos. Común para descargas de podcasts, archivos de transmisión, audio extraído de iPhone.',
  alternates: {
    canonical: 'https://mictoo.com/es/aac-to-text',
    languages: LANGS,
  },
  openGraph: {
    title: 'AAC a Texto: Transcripción de Audio AAC y ADTS en Crudo | Mictoo',
    description: 'Sube archivos .aac en crudo (stream ADTS o ADIF). Transcripción editable en segundos.',
    url: 'https://mictoo.com/es/aac-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AAC a Texto: Transcripción de Stream AAC en Crudo',
    description: 'Sube .aac en crudo (ADTS o ADIF). Transcripción editable en segundos.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function EsAacToTextPage() {
  return (
    <FormatPageLayout
      locale="es"
      badge="AAC · ADTS · Stream de codec en crudo"
      h1First="AAC a Texto"
      h1Second="Streams ADTS en crudo, archivos de transmisión, audio extraído"
      subtitle="Los archivos .aac en crudo a menudo provienen de streams de transmisión, capturas de radio y pistas de medios extraídas. Suelta el archivo y Mictoo inspecciona su estructura antes de transcribir el audio hablado con Whisper large-v3."
      highlightFormat="aac"
      previewFileName="broadcast-audio.aac"
      previewWordCount={142}
      previewDurationLabel="9:44"
      previewLines={[
        { t: '0:00',  line: 'Estás escuchando el programa matutino. Son las siete y quince y estamos de vuelta con nuestra historia principal.' },
        { t: '0:08',  line: 'Durante la noche, el consejo de la ciudad aprobó la nueva expansión del transporte después de casi tres años de debate.' },
        { t: '0:17',  line: 'El plan añadirá dos nuevas líneas de tren ligero y extenderá la existente en aproximadamente ocho millas.' },
        { t: '0:27',  line: 'Para desglosar lo que esto significa para los viajeros diarios, nos acompaña en el estudio nuestro reportero de transporte.' },
        { t: '0:37',  line: 'Gracias por invitarme. La noticia es que el corredor hacia el este finalmente obtiene una opción de tren después de veinte años.' },
        { t: '0:47',  line: 'Para cualquiera que actualmente conduzca esa sección durante la hora pico, esto es genuinamente transformador.' },
        { t: '0:56',  line: 'La construcción comienza la próxima primavera y se espera que la primera nueva línea abra en dos mil veintinueve.' },
        { t: '1:06',  line: 'El consejo estima que aproximadamente cuarenta mil pasajeros diarios utilizarán los nuevos segmentos una vez que abran.' },
      ]}
      whyTitle="Por qué Mictoo para la transcripción AAC"
      whyCards={[
        {
          icon: 'waveform',
          title: 'ADTS manejado de forma nativa',
          desc: 'La mayoría de los archivos .aac en crudo están enmarcados en ADTS (Audio Data Transport Stream). Detectamos la palabra de sincronización 0xFFF y entregamos el stream a Whisper.',
        },
        {
          icon: 'gear',
          title: 'ADIF y LATM también soportados',
          desc: 'Las enmarcaciones ADIF (Audio Data Interchange Format) y LATM, menos comunes, también funcionan. No se necesita reempaquetado manual ni paso de ffmpeg.',
        },
        {
          icon: 'clip',
          title: 'No se requiere contenedor',
          desc: 'AAC generalmente vive dentro de M4A o MP4, pero a veces el stream en crudo llega a tu disco. Mictoo acepta cualquiera sin preguntar.',
        },
        {
          icon: 'sparkles',
          title: 'Resumen AI para segmentos de archivo',
          desc: 'Segmento de transmisión, clip de archivo de radio o volcado de streaming. El resumen AI te permite clasificar archivos más rápido.',
        },
      ]}
      scenariosTitle="Cuándo AAC a texto es la opción correcta"
      scenarios={[
        {
          icon: 'briefcase',
          title: 'Archivo de radio de transmisión',
          desc: 'Segmento grabado de un stream HLS o Icecast que se envía como AAC en crudo. La transcripción hace que el archivo sea buscable.',
        },
        {
          icon: 'video',
          title: 'Captura de livestream HLS',
          desc: 'YouTube Live, Twitch o stream de radio HLS capturado como una secuencia de trozos .aac. Suelta el archivo, obtén el texto.',
        },
        {
          icon: 'mic',
          title: 'Audio extraído de iPhone',
          desc: 'Audio extraído de una grabación de iPhone o archivo compartido que perdió su contenedor M4A y salió como AAC en crudo.',
        },
        {
          icon: 'gear',
          title: 'Exportación de servicio de streaming',
          desc: 'Plataforma de podcast o aplicación de streaming que proporciona descargas de AAC en crudo. Salta la conversión y suelta el archivo directamente.',
        },
        {
          icon: 'users',
          title: 'Entrevista de transmisión',
          desc: 'Entrevista alojada en la radio archivada como AAC en crudo. La transcripción es la copia lista para citar para artículos o programas.',
        },
        {
          icon: 'editPen',
          title: 'Salida intermedia de FFmpeg',
          desc: 'Extrajiste la pista de audio con ffmpeg -c:a copy y obtuviste un .aac. Suéltalo aquí en lugar de re-muxear a M4A primero.',
        },
      ]}
      technicalTitle="AAC en crudo comparado con M4A"
      technicalIntro="AAC es un códec de audio. Un archivo que termina en .aac es a menudo un stream en crudo enmarcado, mientras que M4A generalmente envuelve audio AAC en un contenedor MP4 con búsqueda y metadatos."
      technicalFacts={[
        {
          icon: 'waveform',
          title: 'ADTS es común',
          desc: 'AAC en crudo se almacena comúnmente como tramas ADTS, especialmente cuando el audio ha sido extraído de un stream o flujo de trabajo de transmisión.',
        },
        {
          icon: 'layers',
          title: 'M4A añade un contenedor',
          desc: 'M4A puede llevar el mismo códec AAC con temporización, indexación y metadatos suministrados por un contenedor basado en MP4.',
        },
        {
          icon: 'search',
          title: 'La extensión es solo una pista',
          desc: 'La estructura del archivo se inspecciona durante el procesamiento, por lo que una extensión engañosa no se convierte en texto de transcripción.',
        },
        {
          icon: 'briefcase',
          title: 'Flujos de trabajo de transmisión',
          desc: 'AAC en crudo a menudo aparece después de la captura HLS o la extracción de audio. Mantén la referencia de la fuente original para el contexto de archivo.',
        },
      ]}
      faq={[
        {
          q: '¿Qué tipo de archivos AAC acepta Mictoo?',
          a: 'AAC en crudo en enmarcación ADTS (la más común), ADIF y enmarcaciones LATM. Detectamos la palabra de sincronización del lado del servidor y entregamos el stream a Whisper. AAC dentro de M4A (ver la página de M4A) también funciona, pero es un camino de entrada diferente.',
        },
        {
          q: '¿Cuál es la diferencia entre .aac y .m4a?',
          a: '.aac es típicamente un bitstream ADTS en crudo: tramas AAC con pequeños encabezados de 7 bytes, sin contenedor. .m4a es audio AAC envuelto en un contenedor MP4 con metadatos e indexación de búsqueda. Ambos utilizan el códec AAC, pero la estructura del archivo difiere.',
        },
        {
          q: 'Mi archivo AAC tiene más de 60 MB. ¿Qué hago ahora?',
          a: 'AAC a bitrates de transmisión típicos (128 kbps) es alrededor de 1 MB por minuto, así que 60 MB es aproximadamente una grabación de una hora. Si estás registrado, dividimos automáticamente hasta aproximadamente 3 horas. De lo contrario, reduce la calidad: ffmpeg -i in.aac -b:a 64k -ac 1 out.aac.',
        },
        {
          q: '¿Produce AAC en crudo transcripciones peores que M4A?',
          a: 'No. El stream de audio es idéntico; solo difiere el contenedor. Whisper re-muestrea a 16 kHz mono internamente de cualquier manera. La precisión depende de la calidad de la grabación subyacente, no de si está enmarcado en ADTS o envuelto en MP4.',
        },
        {
          q: '¿Mictoo transcribe AAC no inglés?',
          a: 'Sí. Whisper large-v3 soporta más de 50 idiomas con detección automática. Para acentos inusuales o clips de transmisión cortos, establece el idioma explícitamente para obtener resultados más limpios en la primera pasada.',
        },
        {
          q: '¿Puedo obtener subtítulos SRT para el clip de transmisión?',
          a: 'Sí. Descarga SRT o VTT después de la transcripción. Las marcas de tiempo se alinean con la línea de tiempo del stream AAC original para su uso en editores de video, superposiciones de accesibilidad o indexación de archivos.',
        },
        {
          q: '¿Se guarda mi archivo AAC en sus servidores?',
          a: 'No. El audio se transmite al proveedor de transcripción, se procesa una vez y se elimina de la memoria. Nunca lo escribimos en disco. Las transcripciones solo se almacenan si inicias sesión y guardas en el historial.',
        },
        {
          q: '¿Puedo traducir la transcripción a otro idioma?',
          a: 'Sí. Después de la transcripción, elige un idioma objetivo y haz clic en Traducir. La traducción se realiza en GPT-4o-mini y aparece junto a la original.',
        },
        {
          q: '¿Qué pasa si el archivo tiene una extensión .aac pero en realidad es M4A?',
          a: 'Inspeccionamos los bytes mágicos, no la extensión. Si el archivo comienza con ftyp (firma M4A/MP4), lo tratamos como M4A. Si comienza con bytes de sincronización ADTS, lo tratamos como AAC en crudo. De cualquier manera, la transcripción funciona.',
        },
        {
          q: '¿Cuánto tiempo tarda una transcripción AAC?',
          a: 'Un AAC de 10 minutos típicamente termina en 15-30 segundos de principio a fin. Archivos más grandes cerca del límite de carga tardan 45-80 segundos. La velocidad de carga suele ser el paso más largo.',
        },
      ]}
      ctaHeadline="Suelta tu AAC en crudo y obtén la transcripción"
      ctaSubtitle="Enmarcaciones ADTS, ADIF y LATM. Archivos de transmisión, capturas HLS, audio extraído."
      ctaButton="Sube AAC para transcribir"
    />
  )
}