import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'Transcripción IA de Audio y Vídeo a Texto, Gratis — Mictoo',
  description: "Transcriba sus archivos de audio y vídeo a texto gratis. Sin registro. Basado en OpenAI Whisper. MP3, MP4, WAV y más de 50 idiomas.",
  alternates: {
    canonical: 'https://mictoo.com/es',
    languages: {
      'en': 'https://mictoo.com',
      'fr': 'https://mictoo.com/fr',
      'de': 'https://mictoo.com/de',
      'es': 'https://mictoo.com/es',
      'ru': 'https://mictoo.com/ru',
      'it': 'https://mictoo.com/it',
      'pt': 'https://mictoo.com/pt',
      'pl': 'https://mictoo.com/pl',
      'ja': 'https://mictoo.com/ja',
      'ko': 'https://mictoo.com/ko',
      'x-default': 'https://mictoo.com',
    },
  },
  openGraph: {
    title: 'Mictoo — Transcripción IA de Audio y Vídeo Gratuita',
    description: "Suba un archivo de audio o vídeo y obtenga la transcripción en segundos.",
    url: 'https://mictoo.com/es',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630, alt: 'Mictoo — Transcripción de Audio y Vídeo Gratuita' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mictoo — Transcripción Gratuita con IA',
    description: "Suba un archivo de audio o vídeo y obtenga la transcripción en segundos.",
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function SpanishPage() {
  return (
    <LandingLayout
      defaultLanguage="es"
      badge="IA · Gratis · Sin registro · 50+ idiomas"
      h1={<>Transcribir Audio y Vídeo a Texto<br /><span className="text-brand-600">con IA, Gratis y Online</span></>}
      subtitle="Suba cualquier archivo de audio o vídeo y obtenga una transcripción IA precisa en segundos. Sin cuenta, sin suscripción."
      howItWorks={[
        { icon: '📂', title: 'Suba el archivo', desc: 'Arrastre y suelte o haga clic para subir. MP3, MP4, WAV, M4A, OGG, WEBM, FLAC. Hasta 25 MB de forma anónima, 60 MB tras el registro gratuito.' },
        { icon: '⚡', title: 'La IA transcribe', desc: "Whisper de OpenAI convierte el audio en texto con alta precisión en más de 50 idiomas. Un archivo de 10 minutos suele terminar en menos de 30 segundos." },
        { icon: '📋', title: 'Copie o descargue', desc: 'Edite la transcripción directamente en el navegador. Copie al portapapeles o expórtela en .txt, .srt, .pdf, .docx.' },
      ]}
      whyUse={{ title: 'Por qué Mictoo', bullets: [
        { title: '100% gratis', desc: "Sin suscripción, sin prueba limitada. Mictoo es gratuito, sin tope mensual ni contador de minutos." },
        { title: 'Privado por defecto', desc: "Sus archivos se envían directamente a la API de Whisper (Groq como principal, OpenAI como respaldo), se procesan y se borran en segundos. No guardamos nada y no entrenamos modelos con sus datos." },
        { title: 'Más de 50 idiomas', desc: "Detección automática del idioma. Funciona para español, inglés, francés, alemán, ruso, japonés y muchos más, incluidas variantes regionales." },
        { title: 'Alta precisión', desc: "Basado en Whisper de OpenAI, el mismo modelo de reconocimiento de voz que usa ChatGPT y los principales servicios de transcripción." },
        { title: 'Resultados rápidos', desc: "Un archivo de 10 minutos se transcribe en menos de 30 segundos. Sin colas de espera, sin pop-ups de \"espere 30 segundos\"." },
        { title: 'Salida editable', desc: "Revise y corrija la transcripción en el navegador, luego copie al portapapeles o descargue en .txt, .srt o .pdf." },
        { title: "Resumen con IA incluido", desc: "Después de cada transcripción, generamos un resumen gratuito con los puntos clave y las acciones a seguir. La misma función que TurboScribe cobra a 20 $/mes. Sin clic extra, sin invitación a pagar." },
        { title: "Traducción a 28 idiomas", desc: "Un clic traduce la transcripción completa al inglés, francés, alemán, japonés y otros 24 idiomas. Los timestamps originales se conservan, así el SRT traducido sigue sincronizado con el audio." },
      ]}}
      useCases={{ title: 'Quién usa Mictoo', items: [
        { title: 'Estudiantes', desc: "Transcriba clases magistrales, entrevistas y grabaciones de investigación. Texto buscable, más fácil de repasar que escuchar audio entero." },
        { title: 'Podcasters', desc: "Convierta los episodios en artículos de blog, notas del programa o subtítulos. SEO extra y accesibilidad inmediata." },
        { title: 'Periodistas', desc: "Pase entrevistas grabadas a texto en segundos. Citas exactas con marcas de tiempo para la verificación." },
        { title: 'Equipos en empresa', desc: "Transcriba reuniones, llamadas con clientes y presentaciones. Después busque por palabra clave en lugar de volver a escucharlo todo." },
        { title: 'Creadores de contenido', desc: "Genere subtítulos para YouTube, TikTok o Reels de Instagram. Exporte el SRT listo para subir en YouTube Studio." },
        { title: 'Sectores jurídico y médico', desc: "Borradores rápidos de transcripciones para notas y documentación. Conserve el archivo original para la versión definitiva." },
      ]}}
      proTips={{ title: 'Consejos para una mejor transcripción', tips: [
        { title: 'Audio mono a 64 kbps basta para la voz', desc: "Mictoo acepta hasta 25 MB. Para voz, mono a 64 kbps da unos 28 MB por hora sin pérdida de precisión notable. Consulte nuestra guía para comprimir audio." },
        { title: 'Si el archivo supera los 30 minutos, regístrese', desc: "Anónimo: máximo 30 minutos. Registro gratis: 60 minutos. Por encima: corte el archivo en partes y luego una las transcripciones." },
        { title: 'Indique el idioma si la detección automática falla', desc: "Whisper acierta en el 99% de los casos. En archivos muy cortos (menos de 10 segundos) o muy multilingües, el selector manual de idioma asegura la salida." },
        { title: "Para transcribir un vídeo, basta con el audio", desc: "Mictoo acepta MP4 directamente, pero también puede extraer el audio (con nuestro conversor MP4 a MP3) para subir un archivo 10 veces más pequeño." },
        { title: 'Resumen IA incluido en el resultado', desc: "Tras la transcripción, Mictoo genera automáticamente un resumen del contenido, los puntos clave y las acciones. Muy útil para reuniones y podcasts largos." },
        { title: 'Traduzca la transcripción a 28 idiomas', desc: "Cuando la transcripción esté lista, pulse Traducir en la vista Lector. Whisper transcribe el idioma de origen y GPT-4o-mini traduce al idioma de destino." },
      ]}}
      faq={[
        {
          q: '¿Cómo transcribir un archivo de audio a texto gratis?',
          a: "Suba su archivo de audio arriba. Mictoo lo transcribe automáticamente con Whisper de OpenAI y muestra el texto en segundos. No hace falta registro para archivos de hasta 25 MB.",
        },
        {
          q: '¿Funciona bien Mictoo en español?',
          a: "Sí. Whisper, el modelo de OpenAI sobre el que se apoya Mictoo, se entrenó con muchas horas de audio en español y ofrece una precisión muy alta, tanto para variantes ibéricas como latinoamericanas, incluyendo vocabulario técnico.",
        },
        {
          q: '¿Se guardan mis archivos?',
          a: "No. Sus archivos se envían directamente a la API de transcripción, se procesan y se borran en segundos. No conservamos nada en nuestros servidores ni lo usamos para entrenar modelos.",
        },
        {
          q: '¿Cuál es el tamaño máximo de archivo?',
          a: "25 MB para usuarios anónimos, 60 MB tras un registro gratuito. Un MP3 mono de 64 kbps equivale a unos 60 minutos de audio dentro de los 25 MB.",
        },
        {
          q: '¿Cuánto tarda la transcripción?',
          a: "Un archivo de 10 minutos suele transcribirse en menos de 30 segundos. Los archivos más largos tardan proporcionalmente más, pero siempre mucho más rápido que el tiempo real.",
        },
        {
          q: '¿Qué formatos de audio y vídeo se aceptan?',
          a: "MP3, MP4, WAV, M4A, OGG, WEBM, FLAC, MPEG. En los archivos de vídeo, Mictoo extrae automáticamente la pista de audio. Si su formato no es compatible, conviértalo antes a MP3 o WAV con nuestros conversores integrados.",
        },
        {
          q: '¿Puedo descargar los subtítulos en formato SRT?',
          a: "Sí. Tras la transcripción, pulse el botón .srt para descargar un archivo de subtítulos con marcas de tiempo, listo para subir a YouTube Studio, Premiere o Final Cut.",
        },
        {
          q: '¿Mictoo genera un resumen del contenido?',
          a: "Sí. Tras cada transcripción, Mictoo crea automáticamente un resumen IA con los puntos clave y las acciones a recordar. Muy útil para podcasts largos, reuniones y clases magistrales.",
        },
        {
          q: '¿Puedo transcribir un vídeo de YouTube?',
          a: "No directamente por URL. YouTube bloquea los servidores de terceros. Primero descargue el vídeo en local con una herramienta como 4K Video Downloader y luego suba el archivo MP4 aquí. Nuestra guía de descarga de YouTube explica el proceso paso a paso.",
        },
        {
          q: '¿Tiene Mictoo una aplicación móvil?',
          a: "Todavía no hay aplicación nativa, pero la web funciona perfectamente en iOS Safari y Android Chrome. Suba archivos desde el carrete o desde una nota de voz directamente desde el teléfono.",
        },
      ]}
      relatedLinks={[
        { href: '/es/transcribe-mp3-to-text', label: 'MP3 a texto', desc: 'Transcriba específicamente archivos MP3: podcasts, notas de voz, llamadas grabadas.' },
        { href: '/es/transcribe-video-to-text', label: 'Vídeo a texto', desc: "Transcriba MP4, MOV, WEBM: ideal para grabaciones de Zoom, vídeos de YouTube y screencasts." },
        { href: '/es/podcast-transcription', label: 'Transcripción de podcast', desc: 'El mismo motor con consejos específicos para podcasts largos y montaje.' },
        { href: '/es/free-srt-generator', label: 'Generador SRT gratuito', desc: 'Subtítulos con marcas de tiempo listos para YouTube Studio, Premiere o DaVinci Resolve.' },
      ]}
    />
  )
}
