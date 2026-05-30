import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/timestamped-transcription',
  'fr': 'https://mictoo.com/fr/timestamped-transcription',
  'de': 'https://mictoo.com/de/timestamped-transcription',
  'es': 'https://mictoo.com/es/timestamped-transcription',
  'ru': 'https://mictoo.com/ru/timestamped-transcription',
  'it': 'https://mictoo.com/it/timestamped-transcription',
  'pt': 'https://mictoo.com/pt/timestamped-transcription',
  'pl': 'https://mictoo.com/pl/timestamped-transcription',
  'ja': 'https://mictoo.com/ja/timestamped-transcription',
  'ko': 'https://mictoo.com/ko/timestamped-transcription',
  'x-default': 'https://mictoo.com/timestamped-transcription',
}

export const metadata = {
  title: 'Transcripción con marcas de tiempo — generador gratuito | Mictoo',
  description:
    'Transcripción gratuita con marcas de tiempo. Obtén marcas por palabra o por frase para cualquier audio o vídeo. Pensado para periodismo, research, podcasting, montaje de vídeo.',
  alternates: { canonical: 'https://mictoo.com/es/timestamped-transcription', languages: LANGS },

  openGraph: {
    title: "Transcripción con marcas de tiempo — generador gratuito | Mictoo",
    description: "Transcripción gratuita con marcas de tiempo. Obtén marcas por palabra o por frase para cualquier audio o vídeo. Pensado para periodismo, research, podcasting, montaje de vídeo.",
    url: "https://mictoo.com/es/timestamped-transcription",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Transcripción con marcas de tiempo — generador gratuito | Mictoo",
    description: "Transcripción gratuita con marcas de tiempo. Obtén marcas por palabra o por frase para cualquier audio o vídeo. Pensado para periodismo, research, podcasting, montaje de vídeo.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function EsTimestampedPage() {
  return (
    <LandingLayout
      defaultLanguage="es"
      badge="Marcas de tiempo · Citación · Gratis"
      h1={
        <>
          Transcripción con marcas de tiempo
          <br />
          <span className="text-brand-600">Transcripciones time-coded gratis</span>
        </>
      }
      subtitle="Marcas de tiempo precisas para cada línea o palabra de tu audio. Vuelve a momentos exactos, cita frases concretas, construye marcadores de capítulos. Gratis, sin registro."
      howItWorks={[
        {
          icon: '📂',
          title: 'Sube el archivo',
          desc: 'MP3, M4A, MP4, WAV, FLAC, OGG, WEBM, AAC. Trabajamos con formatos de audio y vídeo.',
        },
        {
          icon: '⚡',
          title: 'La IA transcribe y marca los tiempos',
          desc: 'Whisper large-v3 genera la transcripción con marcas precisas al milisegundo por segmento (y opcionalmente por palabra).',
        },
        {
          icon: '💾',
          title: 'Elige la granularidad y descarga',
          desc: 'Marcas por frase (lo más común) o por palabra (para trabajo de alineación precisa). Descarga como TXT con marcas inline, SRT para flujos de subtítulos, o copia al portapapeles.',
        },
      ]}
      whyUse={{
        title: 'Por qué Mictoo para transcripción con marcas',
        bullets: [
          {
            title: 'Marcas al milisegundo',
            desc: 'Whisper produce marcas con precisión de milisegundo. Más preciso que cualquier tasa de fotogramas común, más que suficiente para trabajo de citación.',
          },
          {
            title: 'Por frase por defecto, por palabra cuando lo necesitas',
            desc: 'Por frase mantiene las transcripciones legibles. Por palabra es excesivo para tomar notas pero esencial para montaje de vídeo y alineación con música.',
          },
          {
            title: 'Gratis',
            desc: 'Sin contador de minutos. Sin tier "las marcas cuestan extra". El mismo precio que la transcripción simple (gratis).',
          },
          {
            title: 'Export SRT para flujos de vídeo',
            desc: 'Las marcas en formato SRT funcionan directamente en Premiere, DaVinci, CapCut y YouTube Studio como pistas de subtítulos.',
          },
          {
            title: 'Marcas inline en TXT para citación',
            desc: 'Texto plano con marcadores [00:01:23] al inicio de cada segmento. Fácil de pegar en notas de research, posts de blog o borradores periodísticos.',
          },
          {
            title: 'No guardamos archivos',
            desc: 'El audio va al proveedor de transcripción y se descarta. Nada queda en nuestros servidores.',
          },
        ],
      }}
      useCases={{
        title: 'Para qué se usan las transcripciones con marcas',
        items: [
          {
            title: 'Periodismo y citación',
            desc: '¿Citando a una fuente de una entrevista? Pon la marca de tiempo junto a la cita en tus notas. Cuando el editor o fact-checker pregunte "¿dónde dijeron eso exactamente?", tienes la respuesta en dos segundos.',
          },
          {
            title: 'Marcadores de capítulo para podcast',
            desc: 'Genera la transcripción, escanea buscando cortes naturales de sección, copia las marcas a la función de capítulos de tu podcast host. Los reproductores modernos muestran capítulos en la barra de reproducción.',
          },
          {
            title: 'Cortes brutos de montaje de vídeo',
            desc: 'Obtén la transcripción, marca las líneas que quieres conservar, búscalas en la línea de tiempo por marca de tiempo. El "montaje en papel" es mucho más rápido que rebobinar.',
          },
          {
            title: 'Research académico y codificación cualitativa',
            desc: 'Los investigadores en NVivo, Atlas.ti o MAXQDA etiquetan segmentos de transcripción con códigos. Las marcas dejan volver al audio en el momento exacto cuando codifican pasajes ambiguos.',
          },
          {
            title: 'Alineación con música para vídeos de karaoke',
            desc: 'Marcas por palabra para proyectos tipo karaoke o lyric-video. Cada palabra se ilumina en el momento exacto en que se canta.',
          },
        ],
      }}
      proTips={{
        title: 'Consejos para transcripción con marcas',
        tips: [
          {
            title: 'Las marcas por frase sirven para el 95 % de los casos',
            desc: 'Salvo que hagas alineación con música o subtítulos por palabra, por frase es lo que quieres. Más legible, más fácil de editar.',
          },
          {
            title: 'Las marcas por palabra inflan tamaño y complejidad',
            desc: 'Un SRT por palabra para una charla de 30 minutos tiene miles de entradas. Úsalo solo cuando realmente necesites precisión por palabra.',
          },
          {
            title: 'Para podcasts, genera marcadores de capítulo desde cortes naturales',
            desc: 'Mira la transcripción buscando transiciones de tema, cambios de agenda o presentaciones de invitado. Copia esas marcas en tu podcast host como marcadores de capítulo.',
          },
          {
            title: 'Para periodismo, guarda la marca con cada cita que puedas usar',
            desc: 'El tú del futuro, 3 semanas después, no recordará de qué entrevista vino una cita, mucho menos en qué punto de la entrevista. La marca lo resuelve.',
          },
          {
            title: 'Las marcas SRT son zero-padded, las TXT no',
            desc: 'SRT usa 00:01:23,456. TXT suele usar [1:23]. Si pegas en un CMS que espera un formato, convierte antes.',
          },
          {
            title: 'Para montaje de vídeo, la marca en nuestro SRT se alinea contra el audio en el archivo original',
            desc: 'Si reexportas tu vídeo a otra tasa de fotogramas, las marcas siguen coincidiendo porque están en tiempo absoluto (milisegundos), no en fotogramas.',
          },
          {
            title: 'Las marcas se desvían en audio malo',
            desc: 'Cuando Whisper alucina palabras en zonas de música o silencio, las marcas de esas palabras fantasma son aproximaciones. Las marcas de habla real siguen siendo precisas. Confía en las secciones de habla, ignora las de música.',
          },
        ],
      }}
      faq={[
        {
          q: '¿Cuál es la diferencia entre marcas por frase y por palabra?',
          a: 'Por frase: una marca por línea de texto (normalmente una frase). Por palabra: una marca por palabra. Por frase es legible y buena para citación, podcasting y la mayoría del trabajo de vídeo. Por palabra es para alineación con música, vídeos de karaoke y animaciones de subtítulos por palabra.',
        },
        {
          q: '¿Qué precisión tienen las marcas de tiempo?',
          a: 'Whisper produce marcas en milisegundos. Se alinean correctamente a cada tasa de fotogramas común (24, 25, 29.97, 30, 50, 60 fps) sin offset.',
        },
        {
          q: '¿Las marcas se desviarán en un archivo largo?',
          a: 'Raramente. Whisper alinea las marcas al audio real, así que se mantienen precisas incluso para archivos de 60 minutos. Puede haber drift subsegundo en los últimos segmentos de archivos muy largos. Si lo notas, ajústalo a mano.',
        },
        {
          q: '¿Puedo obtener un TXT con marcas inline como [00:01:23] antes de cada línea?',
          a: 'Sí. Descarga como TXT y incluimos marcas por frase inline. Formato: [00:01:23] Texto de la frase aquí.',
        },
        {
          q: '¿El SRT incluye marcas de tiempo?',
          a: 'Sí, ese es el sentido del formato SRT. Cada entrada de subtítulo tiene marca de inicio y de fin.',
        },
        {
          q: '¿Cómo se compara con los subtítulos automáticos de YouTube con marcas?',
          a: 'Los subtítulos automáticos de YouTube tienen marcas pero no puntuación y menor precisión. Los nuestros tienen puntuación completa, mejor precisión y SRT estándar que funciona en cualquier editor de vídeo.',
        },
        {
          q: '¿Puedo saltar a una marca concreta del audio desde la transcripción?',
          a: 'En nuestra vista de resultados, haz clic en cualquier marca y el reproductor de audio salta a ese momento. Tras descargar necesitas un reproductor aparte.',
        },
        {
          q: '¿Las marcas funcionan en Premiere o DaVinci Resolve?',
          a: 'Sí. Importa el SRT en la línea de tiempo. Los subtítulos aparecen en los momentos correctos automáticamente.',
        },
        {
          q: '¿Qué idiomas se soportan para transcripción con marcas?',
          a: 'Los mismos 50+ idiomas que la transcripción simple. Las marcas llegan automáticamente con cada transcripción sea cual sea el idioma.',
        },
        {
          q: '¿Se guarda el audio?',
          a: 'No. El archivo va al proveedor de transcripción y se descarta tras procesarse.',
        },
        {
          q: '¿Puedo usar marcas por palabra para hacer un vídeo karaoke?',
          a: 'Sí, pero necesitarás software de vídeo que pueda renderizar resaltado por palabra desde un formato JSON o SRT. Algunas herramientas (Premiere, After Effects, software karaoke especializado) lo soportan directamente.',
        },
        {
          q: '¿Cuánto tarda generar la transcripción con marcas?',
          a: 'Lo mismo que la transcripción simple, alrededor del 1–2 % de la duración del audio. Las marcas llegan automáticamente, sin tiempo extra de procesamiento.',
        },
      ]}
      relatedLinks={[
        { href: '/es/free-srt-generator', label: 'Generador de SRT', desc: 'Mismas marcas, enfocado en flujos de subtítulos.' },
        { href: '/es/podcast-transcription', label: 'Transcripción de podcast', desc: 'Marcas para show notes y marcadores de capítulo.' },
        { href: '/es/interview-transcription', label: 'Transcripción de entrevistas', desc: 'Marcas para citación y rastreo de citas.' },
        { href: '/es/transcribe-audio-to-text', label: 'Audio a texto', desc: 'Para salida en texto plano sin marcas.' },
      ]}
    />
  )
}
