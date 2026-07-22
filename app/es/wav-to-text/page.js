import FormatPageLayout from '@/components/FormatPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/wav-to-text',
  'fr': 'https://mictoo.com/fr/wav-to-text',
  'de': 'https://mictoo.com/de/wav-to-text',
  'es': 'https://mictoo.com/es/wav-to-text',
  'ru': 'https://mictoo.com/ru/wav-to-text',
  'it': 'https://mictoo.com/it/wav-to-text',
  'pt': 'https://mictoo.com/pt/wav-to-text',
  'pl': 'https://mictoo.com/pl/wav-to-text',
  'ja': 'https://mictoo.com/ja/wav-to-text',
  'ko': 'https://mictoo.com/ko/wav-to-text',
  'x-default': 'https://mictoo.com/wav-to-text',
}

export const metadata = {
  title: 'WAV a Texto: Transcripción WAV Online Gratuita | Mictoo',
  description:
    'Sube un archivo WAV, obtén una transcripción editable con marcas de tiempo en segundos. Diseñado para rebotes de estudio, grabaciones de campo, exportaciones de DAW. Soporta PCM y Broadcast Wave (BWF). Gratis, sin registro.',
  alternates: {
    canonical: 'https://mictoo.com/es/wav-to-text',
    languages: LANGS,
  },

  openGraph: {
    title: "WAV a Texto: Transcripción WAV Online Gratuita | Mictoo",
    description: "Sube un archivo WAV, obtén una transcripción editable con marcas de tiempo en segundos. Rebotes de estudio, grabaciones de campo, exportaciones de DAW. PCM y BWF soportados.",
    url: "https://mictoo.com/es/wav-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "WAV a Texto: Transcripción WAV Online Gratuita",
    description: "Sube un WAV, obtén una transcripción editable con marcas de tiempo en segundos. Rebotes de estudio, grabaciones de campo, exportaciones de DAW.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function EsWavToTextPage() {
  return (
    <FormatPageLayout
      locale="es"
      badge="WAV · PCM · BWF · Gratis"
      h1First="WAV a Texto"
      h1Second="Rebotes de estudio, grabaciones de campo, exportaciones de DAW"
      subtitle="WAV es el formato que tu DAW utiliza para los rebotes, tu grabadora de campo escribe en la tarjeta, y los estudios de transmisión estandarizan. Sube un WAV PCM o BWF y obtén una transcripción con marcas de tiempo en segundos. Gratis, sin registro."
      highlightFormat="wav"
      previewFileName="grabación-de-campo.wav"
      previewWordCount={166}
      previewDurationLabel="14:22"
      previewLines={[
        { t: '0:00',  line: 'Explorador de locaciones, día tres. Estamos instalados en el lado este de la cresta a unos seis mil pies.' },
        { t: '0:09',  line: 'El viento viene en ráfagas desde el oeste, así que tengo el blimp encendido y he recortado a ochenta hertz.' },
        { t: '0:18',  line: 'Los niveles están alcanzando picos alrededor de menos doce en el micrófono de entrevista, lo cual se siente bien para este ambiente.' },
        { t: '0:28',  line: 'De pie junto a mí está el guardabosques que ha trabajado en esta sección del parque durante veintidós años.' },
        { t: '0:37',  line: 'Cuando la gente pregunta qué ha cambiado más aquí, siempre empiezo con los incendios en el verano de 2020.' },
        { t: '0:47',  line: 'El bosque nunca se vio igual después de eso, y los patrones de vida silvestre tardaron años en restablecerse.' },
        { t: '0:57',  line: '¿Puedes contarme cómo fueron esas primeras semanas después de los incendios en el terreno?' },
        { t: '1:05',  line: 'Claro. El humo permaneció durante unas seis semanas en total, y la visibilidad nunca superó media milla.' },
      ]}
      whyTitle="Por qué elegir Mictoo para la transcripción de WAV"
      whyCards={[
        {
          icon: 'waveform',
          title: 'PCM y BWF, sin conversión',
          desc: 'WAV PCM estándar de 16/24/32 bits y Broadcast Wave (BWF) con metadatos. Aceptamos el archivo tal cual sin necesidad de un paso de conversión.',
        },
        {
          icon: 'target',
          title: 'Sin artefactos de códec con pérdida',
          desc: 'PCM sin comprimir no añade artefactos de compresión con pérdida. Una grabación limpia puede ser una fuente fuerte, pero el ruido de la habitación y la colocación del micrófono aún importan.',
        },
        {
          icon: 'gear',
          title: 'Cualquier tasa de muestreo, cualquier profundidad de bits',
          desc: '44.1 kHz, 48 kHz, 96 kHz, 192 kHz. Whisper re-muestrea a 16 kHz mono internamente, así que tu tasa de origen no afecta la calidad.',
        },
        {
          icon: 'clip',
          title: 'Los metadatos de BWF se preservan en tu lado',
          desc: 'Ignoramos los bloques de metadatos iXML/bext durante la transcripción. Tu archivo WAV original (y sus metadatos) nunca se modifica.',
        },
      ]}
      scenariosTitle="Cuándo la transcripción de WAV es la opción adecuada"
      scenarios={[
        {
          icon: 'mic',
          title: 'Captura de grabadora de campo',
          desc: 'Zoom H4n, H5, H6, Tascam DR-40, Sound Devices MixPre. Lo que sea que el equipo de campo escriba en la tarjeta, sube el WAV para una transcripción limpia.',
        },
        {
          icon: 'waveform',
          title: 'Rebote de DAW para referencia',
          desc: 'Mezcla preliminar o rebote solo de voz desde Logic, Pro Tools o Ableton. Obtén una versión de texto de la letra o diálogo para referencia.',
        },
        {
          icon: 'briefcase',
          title: 'Entrevista de transmisión',
          desc: 'Grabación BWF de una entrevista de radio o estudio de podcast. La transcripción alimenta notas de show, citas y documentación de archivo.',
        },
        {
          icon: 'book',
          title: 'Archivo de historia oral',
          desc: 'Grabación de historia oral de larga duración capturada en WAV para preservación. La transcripción hace que el archivo sea buscable y citabile.',
        },
        {
          icon: 'users',
          title: 'Grabación de deposición y legal',
          desc: 'Procedimientos grabados capturados como WAV sin comprimir para calidad de evidencia. Transcripción para revisión y citación.',
        },
        {
          icon: 'sparkles',
          title: 'Trabajo de voz en off',
          desc: 'Paso de ADR, grabación de narración o sesión de voz en off rebotada a WAV. La transcripción confirma que la lectura coincide con el guion.',
        },
      ]}
      technicalTitle="Qué hay dentro de un archivo WAV"
      technicalIntro="WAV es un contenedor comúnmente utilizado para audio PCM sin comprimir. Su resolución adicional es útil para producción y archivo, mientras que las condiciones de grabación aún determinan cuán inteligible es el habla."
      technicalFacts={[
        {
          icon: 'waveform',
          title: 'PCM y Broadcast Wave',
          desc: 'Las grabaciones estándar de WAV PCM y BWF pueden llevar el mismo audio hablado; BWF añade metadatos de producción alrededor de él.',
        },
        {
          icon: 'gear',
          title: 'Tasa de muestreo y profundidad de bits',
          desc: 'Altas tasas de muestreo y profundidades de bits preservan el margen de producción, pero no pueden reparar ruido, recortes o un micrófono distante.',
        },
        {
          icon: 'cloud',
          title: 'Grande por diseño',
          desc: 'WAV sin comprimir crece rápidamente. Para entrevistas largas, divide la grabación o haz una copia de voz mono más pequeña si es necesario.',
        },
        {
          icon: 'clip',
          title: 'Los metadatos permanecen fuera',
          desc: 'BWF, iXML y metadatos de cue no se añaden a la transcripción, y el archivo fuente original no se modifica.',
        },
      ]}
      faq={[
        {
          q: '¿Qué tipos de archivos WAV acepta Mictoo?',
          a: 'WAV PCM estándar a 16 bits, 24 bits o 32 bits en punto flotante, cualquier tasa de muestreo (44.1 kHz a 192 kHz), mono o estéreo. Broadcast Wave (BWF) también es totalmente compatible con metadatos iXML/bext preservados en tu archivo original.',
        },
        {
          q: '¿Una mayor profundidad de bits o tasa de muestreo mejora la transcripción?',
          a: 'No. Whisper re-muestrea todo el audio a 16 kHz mono internamente antes de la transcripción, así que la profundidad de bits y la tasa de muestreo más allá de ese límite no afectan la precisión. La calidad de grabación (elección del micrófono, habitación, nivel de ruido) importa mucho más que la especificación del contenedor.',
        },
        {
          q: 'Mi WAV de estudio tiene más de 60 MB. ¿Qué hago?',
          a: 'Un WAV estéreo de 24 bits a 48 kHz es alrededor de 17 MB por minuto, así que cualquier grabación de más de unos 3 minutos alcanza el límite. Convierte a WAV mono a 16 kHz (o MP3 a 128 kbps) con ffmpeg -i in.wav -ar 16000 -ac 1 out.wav. La calidad de transcripción es idéntica.',
        },
        {
          q: '¿Conservas mi archivo WAV?',
          a: 'No. El archivo se transmite al proveedor de transcripción, se procesa una vez y se elimina de la memoria. Nunca lo escribimos en disco. La transcripción solo se almacena si inicias sesión y la añades a tu historial.',
        },
        {
          q: '¿Puedo mantener las marcas de tiempo originales de BWF en la transcripción?',
          a: 'La transcripción utiliza marcas de tiempo relativas desde el inicio del archivo (0:00 de referencia). Los metadatos de tiempo absoluto de BWF no se trasladan al texto de salida. Alinea los dos en tu lado si necesitas coincidencia de tiempo de escena.',
        },
        {
          q: '¿Mictoo transcribe WAV en otros idiomas?',
          a: 'Sí. Whisper large-v3 soporta más de 50 idiomas con detección automática. Para grabaciones cortas o acentos inusuales, establece el idioma explícitamente en el menú desplegable para una detección más limpia en la primera pasada.',
        },
        {
          q: '¿Puedo obtener subtítulos SRT para una grabación WAV?',
          a: 'Sí. Descarga SRT o VTT después de la transcripción. Ambos formatos incluyen marcas de tiempo alineadas a la línea de tiempo original de WAV para su uso en editores de video o herramientas de accesibilidad.',
        },
        {
          q: '¿Cuánto tiempo tarda una transcripción de WAV?',
          a: 'Un WAV de 15 minutos generalmente termina en 20-40 segundos de principio a fin. Archivos más grandes cerca del límite de carga tardan 40-80 segundos. La velocidad de carga suele ser el paso más largo ya que los archivos WAV son grandes.',
        },
        {
          q: '¿Soportan grabaciones de 32 bits en punto flotante de Sound Devices?',
          a: 'Sí. Los archivos WAV de 32 bits en punto flotante de MixPre, F-series o grabadoras Zoom F-series son aceptados y transcritos de la misma manera que el PCM estándar.',
        },
        {
          q: '¿Puedo traducir la transcripción a otro idioma?',
          a: 'Sí. Después de la transcripción, elige un idioma de destino y haz clic en Traducir. La traducción se realiza en GPT-4o-mini y aparece junto a la transcripción original.',
        },
      ]}
      ctaHeadline="Sube tu WAV, obtén una transcripción limpia"
      ctaSubtitle="PCM, BWF, cualquier tasa de muestreo. Rebotes de estudio, grabaciones de campo, exportaciones de DAW."
      ctaButton="Subir WAV para transcribir"
    />
  )
}