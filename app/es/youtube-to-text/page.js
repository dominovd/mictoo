import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/youtube-to-text',
  'fr': 'https://mictoo.com/fr/youtube-to-text',
  'de': 'https://mictoo.com/de/youtube-to-text',
  'es': 'https://mictoo.com/es/youtube-to-text',
  'ru': 'https://mictoo.com/ru/youtube-to-text',
  'it': 'https://mictoo.com/it/youtube-to-text',
  'pt': 'https://mictoo.com/pt/youtube-to-text',
  'pl': 'https://mictoo.com/pl/youtube-to-text',
  'ja': 'https://mictoo.com/ja/youtube-to-text',
  'ko': 'https://mictoo.com/ko/youtube-to-text',
  'x-default': 'https://mictoo.com/youtube-to-text',
}

export const metadata = {
  title: 'YouTube a texto — transcripción gratuita de vídeos de YouTube | Mictoo',
  description:
    'Transcripción gratuita de YouTube a texto. Descarga el vídeo, sube el archivo, recibe una transcripción precisa con IA. Mejor que los subtítulos automáticos, con marcas de tiempo y export SRT.',
  alternates: { canonical: 'https://mictoo.com/es/youtube-to-text', languages: LANGS },

  openGraph: {
    title: "YouTube a texto — transcripción gratuita de vídeos de YouTube | Mictoo",
    description: "Transcripción gratuita de YouTube a texto. Descarga el vídeo, sube el archivo, recibe una transcripción precisa con IA. Mejor que los subtítulos automáticos, con marcas de tiempo y export SRT.",
    url: "https://mictoo.com/es/youtube-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "YouTube a texto — transcripción gratuita de vídeos de YouTube | Mictoo",
    description: "Transcripción gratuita de YouTube a texto. Descarga el vídeo, sube el archivo, recibe una transcripción precisa con IA. Mejor que los subtítulos automáticos, con marcas de tiempo y export SRT.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function EsYouTubeToTextPage() {
  return (
    <LandingLayout
      defaultLanguage="es"
      enableYouTubeUrl
      badge="YouTube · SRT · GRATIS"
      h1={
        <>
          YouTube a texto
          <br />
          <span className="text-brand-600">Herramienta gratuita de transcripción de YouTube</span>
        </>
      }
      subtitle="Obtén una transcripción limpia y precisa de cualquier vídeo de YouTube. Descarga el archivo, súbelo aquí, la IA hace el resto. Mejor que los subtítulos automáticos, con puntuación correcta y marcas de tiempo."
      howItWorks={[
        {
          icon: '🔗',
          title: 'Pega un enlace de YouTube',
          desc: 'Pega cualquier URL de YouTube en el campo de arriba. Sacamos los subtítulos existentes en un par de segundos, sin descarga ni espera a que Whisper vuelva a transcribir. Funciona con la mayoría de vídeos públicos con subtítulos automáticos o subidos por el creador.',
        },
        {
          icon: '📂',
          title: 'O sube un archivo',
          desc: '¿El vídeo no tiene subtítulos, es una subida privada o quieres directamente la calidad de Whisper? Descarga el audio con una app de escritorio gratuita (mira nuestra guía de descarga abajo), súbelo en la misma página y lo pasamos por Whisper large-v3.',
        },
        {
          icon: '📋',
          title: 'Recibe la transcripción',
          desc: 'Léela en el navegador, cópiala al portapapeles o expórtala como TXT, SRT, VTT o DOCX. Traduce a 28 idiomas en un clic. Resumen IA gratis arriba.',
        },
      ]}
      whyUse={{
        title: 'Lo que recibes en Mictoo',
        bullets: [
          {
            title: 'Sin paso de descarga',
            desc: 'Pega una URL de YouTube y la transcripción vuelve en segundos. Sin app de escritorio, sin gestión de archivos, sin esperar a que se suba un vídeo largo.',
          },
          {
            title: 'Transcripción fresca con Whisper como fallback',
            desc: 'Si el vídeo no tiene subtítulos, sube el audio. Whisper large-v3 maneja acentos, música y nombres propios mejor que los subtítulos automáticos de YouTube, con menos palabras inventadas y puntuación completa.',
          },
          {
            title: 'SRT limpio, listo para editar',
            desc: 'Formato SRT estándar que se importa directamente en Premiere, DaVinci Resolve, Final Cut, CapCut. Sin XML, sin marcas de tiempo raras, sin limpieza manual.',
          },
          {
            title: 'Resumen IA gratis en cada transcripción',
            desc: 'Ideas clave y puntos de acción al inicio de cada resultado, sin un clic extra. Los competidores suelen cobrar 15–20 $/mes por esto.',
          },
          {
            title: 'Traduce a 28 idiomas',
            desc: 'Un clic después de la transcripción. Se mantienen las marcas de tiempo originales, así el SRT traducido sigue sincronizado con el audio.',
          },
          {
            title: 'Sin registro, sin marca de agua, sin límites de tiempo',
            desc: 'Uso anónimo hasta 25 MB. Regístrate gratis para archivos de 60 MB y un historial privado de tus transcripciones.',
          },
        ],
      }}
      useCases={{
        title: 'Para qué usa la gente las transcripciones de YouTube',
        items: [
          {
            title: 'Estudiar clases y tutoriales largos',
            desc: 'Una clase del MIT de 90 minutos es más fácil de estudiar con una versión en texto. Pasas por las partes que necesitas y saltas al timestamp en el vídeo para la explicación en directo.',
          },
          {
            title: 'Citar en trabajos académicos o periodísticos',
            desc: 'Cuando referencias lo que alguien dijo en un vídeo, tener la transcripción con marcas de tiempo te permite citar el momento exacto. Mucho más rápido que volver a ver para encontrar la cita.',
          },
          {
            title: 'Reaprovechar tu propio contenido de YouTube',
            desc: 'Convierte un vídeo de YouTube en un post de blog, una newsletter, un hilo de X, un artículo de LinkedIn. La transcripción es el primer borrador.',
          },
          {
            title: 'Traducir vídeos para uso personal',
            desc: 'Obtienes la transcripción en el idioma original, la pasas por DeepL o ChatGPT, recibes una traducción. Útil para tutoriales o entrevistas en idioma extranjero.',
          },
          {
            title: 'Sustituir subtítulos automáticos malos en tu propio canal',
            desc: 'Genera un SRT limpio aquí, súbelo a YouTube Studio como pista de subtítulos oficial. Mejor experiencia para el espectador, mejor SEO.',
          },
        ],
      }}
      proTips={{
        title: 'Consejos para transcribir YouTube',
        tips: [
          {
            title: 'Elige siempre "solo audio" en el descargador',
            desc: 'No necesitas vídeo para transcribir. Un M4A solo audio es una décima parte del tamaño y se descarga en segundos. Tanto 4K Video Downloader como ClipGrab tienen la opción "solo audio" en el desplegable de formato. El M4A suele estar por debajo de 25 MB incluso para vídeos de 30 minutos.',
          },
          {
            title: 'Para vídeos de más de 30 minutos, el solo audio suele caber sin dividir',
            desc: 'El solo audio evita el límite de tamaño en la mayoría de vídeos. Si una charla de 90 minutos pasa de 60 MB, divídela en tres trozos de 30 minutos. Nuestra guía de división tiene instrucciones paso a paso en Audacity, sin línea de comandos.',
          },
          {
            title: 'Sáltate la música de intro y outro',
            desc: 'Los tutoriales de YouTube suelen tener 15 segundos de música tema al principio y al final. Recórtalos en Audacity antes de subir. Whisper a veces inventa palabras en secciones solo musicales.',
          },
          {
            title: 'Para canales de tutorial con código en pantalla, también necesitas la versión en audio',
            desc: 'El reconocimiento de texto en pantalla es otra categoría de herramienta (OCR). Si el tutorial se basa en mostrar código, tendrás que sacar capturas por separado para la parte visual. La transcripción captura todo lo que el presentador dice en voz alta.',
          },
          {
            title: 'Los subtítulos automáticos de YouTube sirven como verificación',
            desc: 'Si el vídeo tiene subtítulos automáticos, puedes compararlos con tu transcripción de Whisper para detectar diferencias. Normalmente gana Whisper, pero en jerga rara o nombres propios YouTube podría haber captado algo que Whisper no.',
          },
          {
            title: 'Usa un descargador que conserve el título del vídeo como nombre de archivo',
            desc: 'Tanto 4K Video Downloader como ClipGrab pueden poner el título de YouTube como nombre por defecto. Eso mantiene tus transcripciones organizadas en vez de acabar con una carpeta llena de "video.mp4", "video (1).mp4", "video (2).mp4".',
          },
        ],
      }}
      faq={[
        {
          q: '¿Puedo pegar un enlace de YouTube directamente en Mictoo?',
          a: 'Por ahora no. YouTube bloquea activamente que servidores de terceros descarguen vídeos. Hay que descargar el vídeo o el audio primero en tu propio ordenador (una app de escritorio gratuita como 4K Video Downloader o ClipGrab lo hace en dos clics) y luego subir el archivo a Mictoo. Soportar URLs directamente requeriría mantener infraestructura de descarga que YouTube rompe con frecuencia.',
        },
        {
          q: '¿Es legal transcribir vídeos de YouTube?',
          a: 'Para estudio personal, investigación, periodismo, accesibilidad y uso justo, generalmente sí en la mayoría de jurisdicciones. Para republicar la transcripción comercialmente, normalmente necesitas permiso del creador. Las condiciones de YouTube prohíben descargar contenido salvo que YouTube lo permita explícitamente (botón Download) o tengas permiso del creador. Comprueba las condiciones para tu caso. Esto no es asesoramiento legal.',
        },
        {
          q: '¿Mi transcripción coincidirá con los subtítulos automáticos de YouTube?',
          a: 'No, la nuestra será mejor. Los subtítulos automáticos no tienen puntuación y tienen peor precisión. Whisper large-v3 produce frases completas con puntuación, mayúsculas y mejor precisión en música, acentos y nombres propios.',
        },
        {
          q: '¿Cuál es el mejor descargador de YouTube?',
          a: 'Para la mayoría: 4K Video Downloader o ClipGrab. Ambos son gratis, ambos tienen una app de escritorio limpia para Mac, Windows y Linux, ambos te permiten coger solo audio en un clic. Evita los sitios "descargador de YouTube online" que aparecen en Google, la mayoría están plagados de anuncios con malware y se rompen cada pocos meses. Si te manejas bien con la línea de comandos, yt-dlp es la opción más fiable (es el motor que está detrás de muchas apps GUI).',
        },
        {
          q: '¿Cómo descargo solo el audio?',
          a: 'En 4K Video Downloader: pega el enlace de YouTube, cuando salga el diálogo de formato elige "Extract Audio" y M4A o MP3. En ClipGrab: pega el enlace, en el desplegable "Format" elige MP3 o "Original audio". Ambos producen un único archivo de audio listo para subir aquí.',
        },
        {
          q: '¿Y si el vídeo de YouTube está en un idioma que no hablo?',
          a: 'Whisper detecta el idioma automáticamente y transcribe en el original. Luego puedes pegar el resultado en DeepL o ChatGPT para traducirlo. Dos pasos, pero el resultado suele ser mejor que los subtítulos auto-traducidos de YouTube.',
        },
        {
          q: '¿Cuánto tarda en transcribir un vídeo de YouTube?',
          a: 'Solo el paso de transcripción tarda alrededor del 1–2 % de la duración del audio. Una charla de 30 minutos termina en torno a un minuto. El tiempo de descarga depende de tu conexión y de la velocidad del descargador.',
        },
        {
          q: '¿Tendré etiquetas de hablante para vídeos de YouTube con varios hablantes?',
          a: 'No, Whisper no hace diarización por defecto. Para entrevistas y mesas con varios hablantes tendrás que añadir etiquetas a mano según el flujo de la conversación.',
        },
        {
          q: '¿Puedo generar subtítulos listos para YouTube?',
          a: 'Sí. Descarga como SRT tras la transcripción y luego sube el SRT en YouTube Studio en la sección Subtítulos. Reemplaza los automáticos por una versión limpia.',
        },
        {
          q: '¿Mictoo guarda el vídeo de YouTube que subo?',
          a: 'No. El archivo va a nuestro proveedor de transcripción, se procesa y se descarta. No guardamos el vídeo ni el audio.',
        },
        {
          q: 'Mi vídeo de YouTube tiene capítulos. ¿La transcripción los reflejará?',
          a: 'No extraemos los metadatos de capítulos de YouTube. La transcripción llega como un documento continuo. Si quieres transcripciones alineadas a capítulos, divide el archivo de audio en las marcas de capítulo antes de subir.',
        },
        {
          q: '¿Puedo transcribir un directo de YouTube después de que termine?',
          a: 'Sí, siempre que el directo quede archivado como vídeo normal. Descárgalo de la misma forma (yt-dlp u otra app), luego súbelo. La transcripción durante el directo en sí no está soportada.',
        },
      ]}
      relatedLinks={[
        { href: '/es/transcribe-video-to-text', label: 'Vídeo a texto', desc: 'Para archivos de vídeo que no vienen de YouTube (Zoom, grabaciones de pantalla, vlogs).' },
        { href: '/es/free-srt-generator', label: 'Generador de SRT', desc: 'Para subir subtítulos limpios de vuelta a YouTube Studio.' },
        { href: '/es/podcast-transcription', label: 'Transcripción de podcast', desc: 'Para audio tipo podcast subido a YouTube.' },
        { href: '/es/how-to-split-audio', label: 'Cómo dividir audio', desc: 'Para vídeos largos que superan el límite de 60 minutos.' },
      ]}
    />
  )
}
