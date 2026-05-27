import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/free-srt-generator',
  'fr': 'https://mictoo.com/fr/free-srt-generator',
  'de': 'https://mictoo.com/de/free-srt-generator',
  'es': 'https://mictoo.com/es/free-srt-generator',
  'ru': 'https://mictoo.com/ru/free-srt-generator',
  'it': 'https://mictoo.com/it/free-srt-generator',
  'pt': 'https://mictoo.com/pt/free-srt-generator',
  'pl': 'https://mictoo.com/pl/free-srt-generator',
  'ja': 'https://mictoo.com/ja/free-srt-generator',
  'ko': 'https://mictoo.com/ko/free-srt-generator',
  'x-default': 'https://mictoo.com/free-srt-generator',
}

export const metadata = {
  title: 'Generador de SRT — crea archivos de subtítulos SRT online | Mictoo',
  description:
    'Generador gratuito de subtítulos SRT. Sube tu audio o vídeo y obtén un .srt limpio con marcas de tiempo en segundos. Funciona con YouTube, Premiere, DaVinci, CapCut.',
  alternates: { canonical: 'https://mictoo.com/es/free-srt-generator', languages: LANGS },
}

export default function EsSrtPage() {
  return (
    <LandingLayout
      defaultLanguage="es"
      badge="SRT · Subtítulos · Gratis"
      h1={
        <>
          Generador de SRT
          <br />
          <span className="text-brand-600">Subtítulos con IA desde cualquier audio o vídeo</span>
        </>
      }
      subtitle="Genera archivos de subtítulos desde cualquier audio o vídeo. Consigue un .srt limpio con marcas de tiempo precisas en segundos. Drop-in para YouTube, Premiere, DaVinci Resolve, CapCut, Final Cut."
      howItWorks={[
        {
          icon: '📂',
          title: 'Sube el audio o el vídeo',
          desc: 'MP3, M4A, MP4, MOV, WAV, FLAC, OGG, WEBM, AAC. El audio se extrae del vídeo automáticamente.',
        },
        {
          icon: '⚡',
          title: 'La IA transcribe y alinea',
          desc: 'Whisper large-v3 transcribe el audio y genera marcas de tiempo para cada línea. Un vídeo de 10 minutos suele tardar 15 segundos. Uno de 30 minutos, en torno a un minuto.',
        },
        {
          icon: '💾',
          title: 'Descarga el .srt',
          desc: 'Pulsa "Descargar SRT". El archivo es formato estándar, drop-in compatible con cualquier editor de vídeo importante y con YouTube Studio.',
        },
      ]}
      whyUse={{
        title: 'Por qué este generador de SRT',
        bullets: [
          {
            title: 'Las marcas de Whisper large-v3 son precisas al fotograma',
            desc: 'Las marcas están en milisegundos, más preciso que cualquier tasa de fotogramas común. Se alinean correctamente a 24, 25, 29.97, 30, 50 y 60 fps sin ajuste de offset.',
          },
          {
            title: 'Gratis sin contador de minutos',
            desc: 'Transcribe 10 minutos o 60. El mismo precio (gratis). Sin gate de "actualiza a Pro" tras el primer archivo.',
          },
          {
            title: 'Más de 50 idiomas',
            desc: 'Genera subtítulos para contenido en cualquier idioma principal. Útil para canales internacionales de YouTube y pistas de subtítulos traducidas.',
          },
          {
            title: 'Formato .srt estándar',
            desc: 'Sin extensiones propietarias, sin codificación rara. Funciona en Premiere Pro, DaVinci Resolve, Final Cut, CapCut, Kapwing, Descript, YouTube Studio, VLC, MPV.',
          },
          {
            title: 'No guardamos archivos',
            desc: 'El audio va al proveedor de transcripción y se descarta tras procesarse. No conservamos tu vídeo.',
          },
        ],
      }}
      useCases={{
        title: 'Para qué se generan archivos SRT',
        items: [
          {
            title: 'Subidas a YouTube',
            desc: 'Reemplaza los subtítulos automáticos de YouTube con un .srt limpio. Mejor puntuación, menos errores, mejor accesibilidad para espectadores con dificultades auditivas. Bonus: el buscador de YouTube indexa con más fiabilidad los subtítulos subidos que los auto-generados.',
          },
          {
            title: 'Subtítulos para vídeo en redes (TikTok, Reels, Shorts)',
            desc: 'Genera el .srt aquí, impórtalo en CapCut o Premiere, da estilo a los subtítulos a tu gusto y quémalos en el vídeo. La mayoría de espectadores ven sin sonido, así que los subtítulos ya no son opcionales.',
          },
          {
            title: 'Subtitulado para accesibilidad',
            desc: 'Grabaciones de charlas de conferencia, vídeos de formación interna, cursos online. Los subtítulos los hacen utilizables para espectadores sordos o con dificultades auditivas y para cualquiera en entornos ruidosos.',
          },
          {
            title: 'Pipeline de traducción',
            desc: 'Genera el .srt en el idioma original, pégalo en DeepL o ChatGPT para traducir y guárdalo como .srt en el idioma de destino. Resultado: subtítulos con calidad de doblaje en otro idioma sin pagar traducción humana.',
          },
          {
            title: 'Montaje de vídeo a contrarreloj',
            desc: 'Cuando necesitas subtítulos ya y no puedes esperar a un transcriptor humano, los subtítulos con IA son suficientes para el primer corte. Pulir después.',
          },
        ],
      }}
      proTips={{
        title: 'Consejos para generar SRT',
        tips: [
          {
            title: 'Para vídeos largos, genera el .srt en trozos de 10 minutos y concatena',
            desc: 'Más fácil arreglar marcas erróneas en medio si hay drift. La mayoría de editores te dejan importar varios .srt y unirlos.',
          },
          {
            title: 'La subida de solo audio es más rápida que la de vídeo para el mismo contenido',
            desc: 'Extrae el audio primero: ffmpeg -i video.mp4 -vn -ac 1 -b:a 64k audio.mp3. El .srt resultante funciona contra el vídeo original, las marcas son las mismas.',
          },
          {
            title: 'Quema los subtítulos solo después de editar',
            desc: 'Si quemas los subtítulos en el vídeo antes de hacer cortes, tendrás que rehacerlos al cortar. Quema al final, cuando el vídeo esté bloqueado.',
          },
          {
            title: 'Mantén la longitud de línea del .srt manejable',
            desc: 'Whisper a veces produce subtítulos largos de una sola línea para frases largas. La mayoría de editores te dejan partir líneas largas automáticamente, o puedes partir manualmente para mejor legibilidad.',
          },
          {
            title: 'Para vídeos multilingües, genera el .srt un idioma a la vez',
            desc: 'Si tu vídeo tiene secciones en inglés y español, genera el .srt de cada sección por separado (fijando el idioma manualmente cada vez), luego une en un único .srt.',
          },
          {
            title: 'Edita el .srt en un editor de texto, no en un editor de vídeo',
            desc: 'Un .srt es texto plano con marcas de tiempo. Ábrelo en VS Code, Notepad++ o BBEdit para corregir erratas rápido. Reimporta al editor de vídeo cuando termines.',
          },
          {
            title: 'Para TikTok y Reels, acorta los subtítulos a mano a una línea corta por subtítulo',
            desc: 'Las frases naturales de Whisper son más largas que el estilo punzante de TikTok. Edita el .srt para encajar con el estilo de la plataforma.',
          },
        ],
      }}
      faq={[
        {
          q: '¿Qué es un archivo SRT?',
          a: 'SRT (SubRip Subtitle) es el formato de subtítulos más común. Texto plano con marcas de tiempo y el texto del subtítulo. Cualquier reproductor de vídeo o editor principal lee .srt.',
        },
        {
          q: '¿Cómo genero un archivo SRT desde un vídeo?',
          a: 'Sube el vídeo aquí. Extraemos el audio, transcribimos y generamos el .srt. Pulsa "Descargar SRT" cuando esté listo.',
        },
        {
          q: '¿Cómo añado subtítulos SRT a un vídeo de YouTube?',
          a: 'En YouTube Studio abre tu vídeo, ve a Subtítulos, clic en Añadir idiomas, sube el archivo .srt. YouTube lo usará como subtítulos oficiales para ese idioma.',
        },
        {
          q: '¿El archivo SRT funciona en Premiere Pro y DaVinci Resolve?',
          a: 'Sí. En Premiere, File, Import, selecciona el .srt. En DaVinci, arrastra el .srt al bin del proyecto. Ambos lo tratan como una pista de subtítulos que puedes seguir editando en la línea de tiempo.',
        },
        {
          q: '¿Funciona en CapCut y Final Cut?',
          a: 'Sí. CapCut: pulsa Captions, Import SRT. Final Cut: File, Import, Captions, selecciona el .srt. Ambos colocan los subtítulos en la línea de tiempo en los tiempos correctos.',
        },
        {
          q: '¿El generador de SRT es realmente gratis?',
          a: 'Sí. Sin tarifa por archivo, sin contador de minutos, sin email para archivos por debajo de 25 MB. Archivos entre 25 MB y 60 MB requieren cuenta gratuita.',
        },
        {
          q: '¿Cuál es el tamaño máximo de archivo?',
          a: '25 MB sin cuenta, 60 MB con cuenta gratuita.',
        },
        {
          q: '¿Puedo generar SRT desde archivos de audio (MP3, WAV)?',
          a: 'Sí. Suelta el archivo de audio directamente. Generamos el .srt con marcas de tiempo como si fuera audio de vídeo. Útil para añadir subtítulos cuando vas a sincronizar el audio con imágenes o slides después.',
        },
        {
          q: '¿Las marcas de tiempo se desviarán en un vídeo largo?',
          a: 'Las marcas de Whisper se alinean al audio real, el drift es raro. Para archivos muy largos (60 minutos), puede haber un drift subsegundo en los últimos subtítulos. Si lo notas, arregla los subtítulos afectados a mano.',
        },
        {
          q: '¿Puedo editar los subtítulos antes de descargar?',
          a: 'Sí. Tras la transcripción, arregla palabras mal entendidas en la vista de resultados y descarga el .srt con tus ediciones.',
        },
        {
          q: '¿Qué idiomas soporta el generador de SRT?',
          a: 'Más de 50 idiomas con detección automática. Para vídeos cortos o contenido no en inglés, elige el idioma manualmente para mejor resultado.',
        },
        {
          q: '¿Se guarda el audio?',
          a: 'No. El archivo va a nuestro proveedor de transcripción, se procesa y se descarta. No conservamos el audio ni el .srt generado.',
        },
        {
          q: '¿Puedo generar el SRT en un idioma distinto al del audio?',
          a: 'Directamente no. Genera el .srt en el idioma original y luego traduce el texto del .srt usando DeepL o ChatGPT. Las marcas se mantienen, solo cambia el texto.',
        },
      ]}
      relatedLinks={[
        { href: '/es/transcribe-video-to-text', label: 'Vídeo a texto', desc: 'Mismo motor, enfocado en salida de texto plano.' },
        { href: '/es/timestamped-transcription', label: 'Transcripción con marcas de tiempo', desc: 'Para marcas por frase o por palabra en otros formatos.' },
        { href: '/es/youtube-to-text', label: 'YouTube a texto', desc: 'Para reemplazar los subtítulos automáticos de YouTube.' },
        { href: '/es/transcribe-audio-to-text', label: 'Audio a texto', desc: 'Para transcripción pura de audio.' },
      ]}
    />
  )
}
