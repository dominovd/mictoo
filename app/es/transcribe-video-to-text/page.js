import LandingLayout from '@/components/LandingLayout'

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
  title: 'Vídeo a texto — transcripción gratuita en línea | Mictoo',
  description:
    'Transcripción gratuita de vídeo a texto. Sube MP4, MOV, WEBM, AVI y obtén una transcripción con IA o un archivo SRT. Funciona con grabaciones de pantalla, tutoriales y vlogs.',
  alternates: { canonical: 'https://mictoo.com/es/transcribe-video-to-text', languages: LANGS },

  openGraph: {
    title: "Vídeo a texto — transcripción gratuita en línea | Mictoo",
    description: "Transcripción gratuita de vídeo a texto. Sube MP4, MOV, WEBM, AVI y obtén una transcripción con IA o un archivo SRT. Funciona con grabaciones de pantalla, tutoriales y vlogs.",
    url: "https://mictoo.com/es/transcribe-video-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vídeo a texto — transcripción gratuita en línea | Mictoo",
    description: "Transcripción gratuita de vídeo a texto. Sube MP4, MOV, WEBM, AVI y obtén una transcripción con IA o un archivo SRT. Funciona con grabaciones de pantalla, tutoriales y vlogs.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function EsVideoToTextPage() {
  return (
    <LandingLayout
      defaultLanguage="es"
      enableYouTubeUrl
      badge="MP4 · MOV · WEBM · GRATIS"
      h1={
        <>
          Vídeo a texto
          <br />
          <span className="text-brand-600">Transcripción de vídeo con IA, gratis</span>
        </>
      }
      subtitle="Transcripción con IA gratuita para cualquier archivo de vídeo. Extraemos el audio por ti, automáticamente. Sin cuenta, sin tarifa por minuto, sin email."
      howItWorks={[
        {
          icon: '🎬',
          title: 'Suelta el vídeo o pega una URL de YouTube',
          desc: 'MP4, MOV, WEBM, AVI o cualquier contenedor de vídeo común. Grabaciones de pantalla, vlogs, exports de webinars, MP4 de Zoom. Arrástralo o haz clic para elegir. Nuevo: pega un enlace de YouTube en lugar de subir y sacamos la transcripción en segundos, sin necesidad de descarga.',
        },
        {
          icon: '⚡',
          title: 'Extraemos el audio, la IA lo transcribe',
          desc: 'Sacamos la pista de audio del vídeo y enviamos solo eso a Whisper large-v3. Sin necesidad de convertir a MP3 antes. Un vídeo de 30 minutos suele estar listo en alrededor de un minuto.',
        },
        {
          icon: '📋',
          title: 'Copia, descarga o saca subtítulos',
          desc: 'Descarga como TXT para notas, o como SRT para incrustar subtítulos en un editor de vídeo. Edita palabras erróneas en el navegador antes de exportar.',
        },
      ]}
      whyUse={{
        title: 'Por qué Mictoo para vídeo',
        bullets: [
          {
            title: 'Pega una URL de YouTube directamente',
            desc: 'Sáltate el paso de descarga para vídeos de YouTube: pega el enlace en el campo encima de la zona de subida y la transcripción vuelve en segundos. Para vídeos sin subtítulos, sube el archivo de audio y Whisper se encarga.',
          },
          {
            title: 'Extracción de audio automática',
            desc: 'Sueltas el MP4. Sacamos el audio de dentro y lo enviamos al modelo. Sin tener que ejecutar ffmpeg tú.',
          },
          {
            title: 'La salida funciona en editores de vídeo de verdad',
            desc: 'El SRT que generamos funciona en Premiere Pro, DaVinci Resolve, Final Cut, CapCut y YouTube Studio. Las marcas de tiempo son precisas a nivel de fotograma.',
          },
          {
            title: '¿Vídeo más grande? Comprime el audio, no el vídeo',
            desc: 'Un vídeo de 200 MB son típicamente 195 MB de vídeo y 5 MB de audio. No hace falta comprimirlo todo, solo la pista de audio.',
          },
          {
            title: 'No guardamos archivos',
            desc: 'El vídeo llega, extraemos el audio, lo enviamos al proveedor de transcripción y descartamos ambas versiones. No guardamos tu vídeo ni tu audio en nuestros servidores.',
          },
        ],
      }}
      useCases={{
        title: 'Para qué sirve transcribir vídeo',
        items: [
          {
            title: 'Subtítulos para vídeo en redes',
            desc: 'TikTok, Instagram Reels, YouTube Shorts mejoran con subtítulos incrustados. Genera el SRT aquí, impórtalo en CapCut o Premiere, dale estilo y quémalo en el vídeo.',
          },
          {
            title: 'Tutoriales y cursos',
            desc: 'Si grabas tutoriales en pantalla, una versión en texto ayuda con SEO, accesibilidad y traducción. Pega la transcripción en tu blog o plataforma de cursos como acompañamiento del vídeo.',
          },
          {
            title: 'Seguimiento a webinars',
            desc: 'Hiciste un webinar de una hora. Transcribe la grabación, edita un poco y mándalo por email a los asistentes que no pudieron quedarse hasta el final.',
          },
          {
            title: 'Cortes de entrevistas para edición',
            desc: 'Al editar una entrevista larga, tener la transcripción en otra pantalla te deja hacer un "montaje en papel". Marcas las líneas que quieres y luego las buscas por marca de tiempo en la línea de tiempo, mucho más rápido que rebobinar.',
          },
          {
            title: 'Preparación de traducción y doblaje',
            desc: 'Transcribe en el idioma original, pasa el texto por DeepL o ChatGPT para traducir y úsalo como guion para el doblaje o la traducción de subtítulos.',
          },
        ],
      }}
      proTips={{
        title: 'Consejos para transcribir vídeo',
        tips: [
          {
            title: 'Extrae el audio primero si tu vídeo supera los 60 MB',
            desc: 'Un vídeo 1080p son sobre todo bytes de píxeles que vamos a tirar de todas formas. Saca solo la pista de audio: ffmpeg -i video.mp4 -vn -ac 1 -b:a 64k audio.mp3. Un vídeo de 500 MB baja a menos de 30 MB de audio.',
          },
          {
            title: 'Silencia la música de fondo en el editor antes de exportar',
            desc: 'Si tu vídeo tiene música bajo el diálogo (B-roll, intro, transiciones), silencia o baja la pista musical antes de exportar la versión que vas a subir. Whisper a veces inventa palabras cuando la voz queda enterrada bajo la música.',
          },
          {
            title: 'Las grabaciones de pantalla sin música son las más fáciles',
            desc: 'Loom, Zoom, capturas de OBS de alguien hablando sobre diapositivas dan las transcripciones más limpias. Sin música, una sola voz, micro claro. Vas a obtener precisión casi humana.',
          },
          {
            title: 'Para vídeo con varios hablantes, graba pistas de audio separadas si puedes',
            desc: 'Si controlas la grabación, captura a cada hablante en su propia pista. Transcribe cada una por separado. Atribución más limpia, menos errores en los solapes.',
          },
          {
            title: 'La tasa de fotogramas no importa, lo que importa es el audio',
            desc: 'Whisper no mira el vídeo, solo el audio. Un vídeo 4K con mal sonido se transcribe peor que uno de 480p con un micrófono de solapa. Pon el esfuerzo en el audio.',
          },
          {
            title: 'Las marcas SRT pueden necesitar un pequeño desfase en algunos editores',
            desc: 'La mayoría de editores alinean las marcas SRT perfectamente. Algunos editores viejos esperan que el primer subtítulo empiece en 00:00:01,000 en vez de 00:00:00,000. Si los subtítulos van desfasados un segundo, suele ser por eso.',
          },
        ],
      }}
      faq={[
        {
          q: '¿Qué formatos de vídeo soportan?',
          a: 'MP4, MOV, WEBM, AVI, MKV, FLV. Si el vídeo se reproduce en VLC, casi seguro funciona aquí. Extraemos el audio dentro, así que el códec de vídeo no importa demasiado.',
        },
        {
          q: 'Mi archivo de vídeo es demasiado grande para subirlo. ¿Qué hago?',
          a: 'Dos opciones. Extrae solo el audio primero (un comando de ffmpeg, ver Consejos arriba) y sube eso. O usa un export más pequeño desde tu editor (resolución o bitrate menores). Para archivos por encima de 60 MB, extraer el audio es más rápido.',
        },
        {
          q: '¿Puedo obtener subtítulos SRT, no solo texto plano?',
          a: 'Sí. Después de transcribir, pulsa "Descargar SRT". El SRT funciona en YouTube Studio, Premiere Pro, DaVinci Resolve, Final Cut, CapCut y cualquier editor de vídeo estándar.',
        },
        {
          q: '¿Las marcas de tiempo SRT coinciden exactamente con los fotogramas?',
          a: 'Sí. Las marcas SRT están en milisegundos, lo que es más preciso que cualquier tasa de fotogramas. Encajan correctamente a 24, 25, 29.97, 30, 50 y 60 fps.',
        },
        {
          q: '¿Puedo transcribir un vídeo sin sonido (solo texto en pantalla)?',
          a: 'No. Transcribimos audio hablado. Para reconocer texto en pantalla necesitas OCR, que es una herramienta distinta.',
        },
        {
          q: '¿Qué precisión tiene "vídeo a texto"?',
          a: 'Depende del audio. Una voz en off limpia, precisión casi humana (95 % o más). Un vídeo de conferencia con mala acústica de sala, en torno al 85–90 %. Vídeo con mucha música y diálogo bajo, más abajo.',
        },
        {
          q: '¿Mi vídeo se subirá a YouTube o a servicios de terceros?',
          a: 'No. Tu vídeo va a nuestro proveedor de transcripción para procesarse y se descarta. No se sube a YouTube, Google ni ningún otro lugar. No estamos en el negocio del almacenamiento de vídeo en la nube.',
        },
        {
          q: '¿Puedo editar la transcripción antes de descargarla?',
          a: 'Sí. Corrige palabras mal entendidas en el navegador antes de exportar. Útil para arreglar nombres propios y términos técnicos.',
        },
        {
          q: '¿Soportan vídeo 360 o formatos VR?',
          a: 'El códec de vídeo no nos importa. Mientras el archivo sea un contenedor estándar (MP4, MOV) con una pista de audio, extraemos el audio y transcribimos.',
        },
        {
          q: '¿Qué pasa si mi vídeo tiene varias pistas de audio (comentario, original, música)?',
          a: 'Usamos solo la pista por defecto. Si quieres una pista concreta, vuelve a exportar el vídeo con esa pista como predeterminada, o extrae la pista deseada y súbela como audio.',
        },
        {
          q: '¿Hay límite de duración del vídeo?',
          a: '30 minutos por archivo en gratis, 60 minutos con login. Para vídeos más largos, divídelos en trozos. Las transcripciones se pueden concatenar después.',
        },
        {
          q: '¿Puedo transcribir una emisión de vídeo en vivo?',
          a: 'No. Trabajamos solo con archivos grabados. Para transcripción en vivo necesitas otra categoría de herramienta.',
        },
      ]}
      relatedLinks={[
        { href: '/es/free-srt-generator', label: 'Generador de SRT', desc: 'Misma herramienta, enfocada en flujos de subtítulos.' },
        { href: '/es/youtube-to-text', label: 'YouTube a texto', desc: 'Si tu vídeo ya está en YouTube.' },
        { href: '/es/zoom-transcription', label: 'Transcripción de Zoom', desc: 'Específicamente para grabaciones MP4 de Zoom.' },
        { href: '/es/how-to-compress-audio', label: 'Cómo comprimir audio', desc: 'Para vídeos cuyo audio excede el límite de tamaño.' },
      ]}
    />
  )
}
