import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/podcast-transcription',
  'fr': 'https://mictoo.com/fr/podcast-transcription',
  'de': 'https://mictoo.com/de/podcast-transcription',
  'es': 'https://mictoo.com/es/podcast-transcription',
  'ru': 'https://mictoo.com/ru/podcast-transcription',
  'it': 'https://mictoo.com/it/podcast-transcription',
  'pt': 'https://mictoo.com/pt/podcast-transcription',
  'pl': 'https://mictoo.com/pl/podcast-transcription',
  'ja': 'https://mictoo.com/ja/podcast-transcription',
  'ko': 'https://mictoo.com/ko/podcast-transcription',
  'x-default': 'https://mictoo.com/podcast-transcription',
}

export const metadata = {
  title: 'Transcripción de Podcast con Resumen y SRT | Mictoo',
  description:
    'Sube un episodio de podcast y obtén texto con marcas de tiempo, un resumen de IA y exportaciones para notas del programa, subtítulos y tu archivo.',
  alternates: {
    canonical: 'https://mictoo.com/es/podcast-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: 'Transcripción de Podcast: Generador de Transcripciones de Podcast Gratuito | Mictoo',
    description: 'Sube tu episodio, obtén una transcripción limpia con marcas de tiempo en segundos.',
    url: 'https://mictoo.com/es/podcast-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transcripción de Podcast: Generador Gratuito',
    description: 'Sube tu episodio, obtén una transcripción limpia.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function EsPodcastTranscriptionPage() {
  return (
    <UseCaseLayout
      locale="es"
      badge="Podcasters · Anfitriones · Gratis"
      h1First="Transcripción de Podcast"
      h1Second="Transcripción gratuita de IA para cada episodio"
      subtitle="Suelta tu episodio desde cualquier herramienta de grabación. Obtén una transcripción limpia con marcas de tiempo y un resumen de IA listo para notas del programa, resumen SEO y subtítulos de YouTube."
      currentHref="/es/podcast-transcription"

      platforms={[
        { name: 'Riverside',  iconKey: 'waveMic',   brandBg: '#4B2AF7' },
        { name: 'Zencastr',   iconKey: 'soundwave', brandBg: '#F7B32B' },
        { name: 'SquadCast',  iconKey: 'waveMic',   brandBg: '#7E22CE' },
        { name: 'Cleanfeed',  iconKey: 'soundwave', brandBg: '#0F766E' },
        { name: 'Descript',   iconKey: 'soundwave', brandBg: '#111827' },
        { name: 'Anchor',     iconKey: 'mic',       brandBg: '#8B5CF6' },
      ]}

      howItWorksTitle="Cómo funciona la transcripción de podcast"
      steps={[
        {
          icon: 'folder',
          title: 'Exporta el episodio',
          desc: 'Cualquier formato que tu DAW o herramienta de grabación produzca. MP3 es el más común, pero M4A, WAV y FLAC también funcionan.',
        },
        {
          icon: 'upload',
          title: 'Suelta el archivo aquí',
          desc: 'Sube archivos de hasta 60 MB cuando inicies sesión. Los episodios más largos se dividen automáticamente en segmentos y se vuelven a unir.',
        },
        {
          icon: 'editPen',
          title: 'Notas del programa, subtítulos, exportaciones',
          desc: 'Transcripción, resumen de IA, SRT para la versión de video de YouTube y DOCX para el blog. El tiempo de procesamiento depende de la duración del episodio y el tamaño del archivo.',
        },
      ]}

      exampleTitle="Ejemplo de transcripción de podcast"
      exampleFileName="episode-042.mp3"
      exampleDurationLabel="52:07"
      exampleLines={[
        { t: '0:00',  line: 'Bienvenido de nuevo al programa. Este es el episodio cuarenta y dos, y hoy estamos hablando sobre el podcasting independiente en 2026.' },
        { t: '0:10',  line: 'Mi invitado ha estado dirigiendo un programa semanal durante ocho años sin perder un episodio. Gracias por estar aquí.' },
        { t: '0:20',  line: 'Gracias por invitarme. Es increíble pensar que comenzamos esto cuando todos decían que el audio ya estaba saturado.' },
        { t: '0:30',  line: 'Comencemos por ahí. ¿Qué fue diferente al lanzar un podcast en 2018 en comparación con ahora?' },
        { t: '0:38',  line: 'La distribución era más difícil de penetrar, pero las audiencias eran más pacientes. La atención era más barata, esencialmente.' },
        { t: '0:48',  line: 'Hoy las herramientas son increíbles. Transcripción en segundos, notas de programa de IA, pero la atención en sí es mucho más escasa.' },
        { t: '0:58',  line: 'Esa es una buena transición. ¿Cuál es tu flujo de trabajo de notas del programa ahora que las transcripciones son básicamente gratuitas?' },
      ]}
      summaryPoints={[
        'Episodio 42, enfoque en el podcasting independiente en 2026.',
        'Invitado: anfitrión de programa semanal de 8 años.',
        'Discusión: cambios en la distribución 2018 vs 2026.',
        'La economía de la atención es el nuevo cuello de botella.',
      ]}
      actionItems={[
        'Redactar notas del programa a partir del resumen',
        'Extraer 3 citas para redes sociales',
        'Publicar SRT en la versión de video de YouTube',
      ]}

      whyTitle="Por qué Mictoo para la transcripción de podcast"
      whyCards={[
        {
          icon: 'sparkles',
          title: 'Resumen de IA para notas del programa',
          desc: 'Borrador sólido para descripciones de episodios, resúmenes de blogs y notas del programa optimizadas para SEO.',
        },
        {
          icon: 'clip',
          title: 'SRT para la versión de YouTube',
          desc: 'Las marcas de tiempo se alinean con el audio original. Suelta el SRT en YouTube Studio y los subtítulos están listos.',
        },
        {
          icon: 'globe',
          title: 'Traduce para audiencias internacionales',
          desc: 'Traducción con un clic a más de 50 idiomas. Anfitriones solitarios distribuyen globalmente sin una agencia de traducción.',
        },
        {
          icon: 'gear',
          title: 'Cualquier bitrate, cualquier grabador',
          desc: 'Notas de voz de 32 kbps a rebotes de estudio de 320 kbps se transcriben de manera idéntica para un habla clara.',
        },
      ]}

      scenariosTitle="Escenarios de transcripción de podcast"
      scenarios={[
        { icon: 'chat',      title: 'Notas del programa' },
        { icon: 'clip',      title: 'Subtítulos de YouTube' },
        { icon: 'search',    title: 'Resumen SEO' },
        { icon: 'sparkles',  title: 'Citas destacadas' },
        { icon: 'globe',     title: 'Traducción' },
        { icon: 'book',      title: 'Catálogo anterior' },
      ]}

      tipsTitle="Consejos para transcripciones de podcast más limpias"
      tips={[
        'Rebota un stem solo de voz cuando tu DAW lo permita.',
        'Un MP3 mono de 64 kbps optimizado para voz se transcribe igual de bien.',
        'Para episodios de entrevistas, elimina las camas musicales antes de la transcripción.',
        'Revisa los nombres de anfitriones e invitados una vez, aparecerán de manera consistente después.',
      ]}

      guidesTitle="Guías de transcripción relacionadas"
      guides={[
        { href: '/es/transcribe-mp3-to-text',    icon: 'file',  title: 'Transcripción de MP3',   desc: 'Guía de formato de podcast' },
        { href: '/es/m4a-to-text',               icon: 'file',  title: 'Transcripción de M4A',   desc: 'Exportaciones de GarageBand y Apple' },
        { href: '/es/wav-to-text',               icon: 'file',  title: 'Transcripción de WAV',   desc: 'Rebotes de estudio' },
        { href: '/es/timestamped-transcription', icon: 'file',  title: 'Profundización en marcas de tiempo', desc: 'Mecánica de exportación SRT / VTT' },
      ]}

      faq={[
        {
          q: '¿Con qué plataformas de podcast funciona Mictoo?',
          a: 'Con todas. Aceptamos cualquier archivo de audio o video independientemente del anfitrión. Comunes: Riverside, Zencastr, SquadCast, Anchor, Buzzsprout, Libsyn. Gratis por archivo hasta 60 MB al iniciar sesión.',
        },
        {
          q: '¿Puedo obtener la transcripción como notas del programa automáticamente?',
          a: 'El resumen de IA aparece junto a la transcripción automáticamente. Úsalo como el primer borrador de tus notas del programa y luego recorta para que se ajuste a tu voz.',
        },
        {
          q: 'Mi episodio supera los 60 MB. ¿Qué hago ahora?',
          a: 'Inicia sesión para dividir automáticamente archivos más largos, o reduce primero con ffmpeg -i episode.mp3 -b:a 64k -ac 1 out.mp3. Un podcast de 60 minutos se convierte en ~28 MB sin pérdida de precisión.',
        },
        {
          q: '¿Puedo descargar SRT para la versión de video de YouTube?',
          a: 'Sí. SRT y VTT incluyen marcas de tiempo alineadas con el audio original. Suéltalo directamente en YouTube Studio.',
        },
        {
          q: '¿Transcribe Mictoo podcasts en otros idiomas?',
          a: 'Sí. Whisper large-v3 soporta más de 50 idiomas con detección automática. Para episodios cortos o acentos inusuales, elige el idioma explícitamente.',
        },
        {
          q: '¿Se almacenan los episodios en sus servidores?',
          a: 'No. El audio se transmite al proveedor de transcripción, se procesa una vez y se elimina de la memoria. Las transcripciones solo se almacenan si inicias sesión.',
        },
        {
          q: '¿Puedo identificar quién está hablando (anfitrión vs invitado)?',
          a: 'No. La transcripción actual es texto continuo con marcas de tiempo y sin etiquetas automáticas de hablantes.',
        },
      ]}

      ctaHeadline="Convierte cada episodio en texto publicable"
      ctaSubtitle="Notas del programa, subtítulos de YouTube, resumen SEO, traducción. Todo a partir de una sola carga."
      ctaButton="Sube un episodio de podcast"

      relatedLinks={[
        { href: '/es/interview-transcription',   label: 'Transcripción de Entrevista' },
        { href: '/es/webinar-transcription',     label: 'Transcripción de Webinar' },
        { href: '/es/transcribe-mp3-to-text',    label: 'MP3 a Texto' },
        { href: '/es/free-srt-generator',        label: 'Generador de SRT Gratuito' },
        { href: '/es/meeting-transcription',     label: 'Transcripción de Reunión' },
      ]}
    />
  )
}