import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/transcribe-audio-to-text',
  'fr': 'https://mictoo.com/fr/transcribe-audio-to-text',
  'de': 'https://mictoo.com/de/transcribe-audio-to-text',
  'es': 'https://mictoo.com/es/transcribe-audio-to-text',
  'ru': 'https://mictoo.com/ru/transcribe-audio-to-text',
  'it': 'https://mictoo.com/it/transcribe-audio-to-text',
  'pt': 'https://mictoo.com/pt/transcribe-audio-to-text',
  'pl': 'https://mictoo.com/pl/transcribe-audio-to-text',
  'ja': 'https://mictoo.com/ja/transcribe-audio-to-text',
  'ko': 'https://mictoo.com/ko/transcribe-audio-to-text',
  'x-default': 'https://mictoo.com/transcribe-audio-to-text',
}

export const metadata = {
  title: 'Audio a texto — transcripción gratuita en línea | Mictoo',
  description:
    'Conversor gratuito de audio a texto. Sube cualquier archivo de audio (MP3, WAV, M4A, FLAC, OGG, AAC) y obtén una transcripción clara en segundos. Sin registro, más de 50 idiomas.',
  alternates: { canonical: 'https://mictoo.com/es/transcribe-audio-to-text', languages: LANGS },
}

export default function EsAudioToTextPage() {
  return (
    <LandingLayout
      defaultLanguage="es"
      badge="MP3 · WAV · M4A · FLAC · GRATIS"
      h1={
        <>
          Audio a texto
          <br />
          <span className="text-brand-600">Transcripción con IA, gratis</span>
        </>
      }
      subtitle="Transcripción con IA gratuita para cualquier archivo de audio. MP3, WAV, M4A, FLAC, OGG, AAC. Sin cuenta, sin tarifa por minuto."
      howItWorks={[
        {
          icon: '📂',
          title: 'Sube el audio',
          desc: 'Funciona cualquier formato común. MP3 del móvil, WAV de una grabadora, M4A de las notas de voz del iPhone, FLAC de un export de podcast. Arrastra el archivo o haz clic para elegirlo.',
        },
        {
          icon: '⚡',
          title: 'La IA lo transcribe',
          desc: 'Usamos OpenAI Whisper large-v3. Un archivo de 10 minutos suele tardar unos 20 segundos. Uno de 30 minutos, menos de un minuto.',
        },
        {
          icon: '📋',
          title: 'Copia, descarga o edita',
          desc: 'Lee la transcripción en el navegador. Descárgala como TXT para notas o como SRT si quieres marcas de tiempo. Corrige palabras mal entendidas antes de exportar.',
        },
      ]}
      whyUse={{
        title: 'Por qué Mictoo para audio a texto',
        bullets: [
          {
            title: 'Un solo modelo, y es el bueno',
            desc: 'Usamos Whisper large-v3 para todos. Nada de "el plan gratuito corre con un modelo más débil". El mismo modelo que está detrás de las transcripciones empresariales caras es el que transcribe tu archivo.',
          },
          {
            title: 'Soporte de formatos realmente amplio',
            desc: 'MP3, WAV, M4A, FLAC, OGG, WEBM, AAC, y formatos de vídeo con audio dentro (MP4, MOV). Sin la fricción de "solo aceptamos MP3, convierte tú primero".',
          },
          {
            title: 'Más de 50 idiomas, incluso archivos bilingües',
            desc: 'Detección automática del idioma a partir de los primeros segundos. Si el archivo cambia de idioma a mitad de la grabación (típico en entrevistas), Whisper sigue el cambio.',
          },
          {
            title: 'No guardamos archivos',
            desc: 'Tu audio se transmite al proveedor de transcripción, se procesa y se descarta. Nunca escribimos el archivo en nuestra base de datos o almacenamiento. Los proveedores que usamos (Groq, OpenAI) no entrenan con datos de la API.',
          },
          {
            title: 'Gratis sin asteriscos',
            desc: 'Hasta 30 minutos por archivo sin cuenta. Con login gratuito subes a 60 minutos. Nada más con candado.',
          },
        ],
      }}
      useCases={{
        title: 'Cuándo audio a texto ahorra tiempo de verdad',
        items: [
          {
            title: 'Notas de entrevista',
            desc: 'Te has sentado una hora con una fuente. En vez de buscar esa frase en la grabación, haces Ctrl+F en la transcripción. Cinco segundos en vez de cinco minutos.',
          },
          {
            title: 'Limpieza de notas de voz',
            desc: 'Dictaste una idea a medio formar en el móvil mientras caminabas. Ahora la quieres como texto. Sube el M4A, recibe frases, copia a Notion.',
          },
          {
            title: 'Repaso de clases y webinars',
            desc: 'Una clase de dos horas es difícil de repasar a 2x. La transcripción en texto te deja saltar por secciones y profundizar solo en las partes que importan.',
          },
          {
            title: 'Preparación para traducir',
            desc: 'Whisper transcribe en el idioma original. Desde ahí pegas en DeepL o ChatGPT y traduces sin problemas. Mejor que las traducciones automáticas hechas directamente desde el audio.',
          },
          {
            title: 'Búsqueda en el archivo de audio',
            desc: '¿Tienes años de llamadas, episodios o reuniones grabadas? Transcríbelas en lote y de pronto tienes un archivo que se puede buscar como texto. Más barato que cualquier "asistente de IA para reuniones" con suscripción.',
          },
        ],
      }}
      proTips={{
        title: 'Consejos para una transcripción más limpia',
        tips: [
          {
            title: 'Mono basta. El estéreo es ancho de banda desperdiciado',
            desc: 'La voz no necesita dos canales. Si el archivo es enorme, vuélvelo a codificar en mono y cortas el tamaño a la mitad sin pérdida para la transcripción. ffmpeg en una línea: ffmpeg -i input.wav -ac 1 output.wav.',
          },
          {
            title: '64 kbps mono de MP3 es suficiente para voz',
            desc: 'Si exportas desde una DAW o un editor, 64 kbps mono MP3 le da a Whisper todo lo que necesita. Los bitrates más altos no mejoran la transcripción, solo agrandan el archivo.',
          },
          {
            title: 'Recorta los silencios largos al inicio y al final',
            desc: 'Si tu grabación tiene 90 segundos de aire muerto antes de la primera palabra, esos 90 segundos se comen el límite de duración. Quítalos en Audacity (Effect, Truncate Silence) antes de subir.',
          },
          {
            title: 'Elige el idioma a mano para archivos cortos',
            desc: 'La detección automática analiza el primer trozo de audio. En archivos de menos de 5 minutos esa muestra es pequeña y la detección no es fiable. Selecciona el idioma desde el desplegable.',
          },
          {
            title: 'La música de fondo hace que Whisper alucine',
            desc: 'Si tu audio tiene música bajo la voz (cuñas de patrocinio, intros, b-roll), el modelo a veces mete palabras inventadas en las secciones donde solo suena música. Si tienes una versión sin música, mejor esa.',
          },
          {
            title: 'Para archivos muy ruidosos, limpia el ruido primero',
            desc: 'Opciones gratuitas: Audacity Noise Reduction (integrado) o Adobe Podcast Enhance (web gratuita, sorprendentemente bueno). Pasa el archivo una vez y luego sube la versión limpia.',
          },
        ],
      }}
      faq={[
        {
          q: '¿Cuál es el mejor conversor gratuito de audio a texto?',
          a: 'Tenemos sesgo, pero la respuesta honesta: cualquier herramienta que corra Whisper large-v3 está en lo alto del segmento gratuito. Mictoo usa ese modelo sin muro de registro. Otter y Trint son buenos pero cobran por minuto pasada su cuota gratuita. Para transcripciones puntuales, el segmento gratuito es la opción correcta.',
        },
        {
          q: '¿Qué precisión tiene la transcripción de audio?',
          a: 'Para voz limpia en un idioma principal, espera entre 5 % y 10 % de palabras erróneas. Con audio ruidoso, acentos fuertes o vocabulario especializado la precisión baja. Para la mayoría de usos (notas, búsqueda, borradores) es suficiente. Para registros legales o médicos contrata a un humano.',
        },
        {
          q: '¿Qué formatos de audio soportan?',
          a: 'MP3, WAV, M4A, FLAC, OGG, WEBM, AAC. También archivos de vídeo como MP4 y MOV (extraemos el audio automáticamente). AIFF y ALAC no se admiten directamente. Conviértelos primero a WAV o FLAC.',
        },
        {
          q: '¿Cuánto tarda la transcripción?',
          a: 'Un archivo de 5 minutos suele terminar en 10–15 segundos. Uno de 30 minutos en 45–60 segundos. Procesamos el archivo entero como una única petición, sin tener que dividirlo tú.',
        },
        {
          q: '¿Puedo transcribir la grabación de una llamada telefónica?',
          a: 'Sí. Las llamadas suelen ser 8 kHz mono con compresión. Whisper las maneja, aunque la precisión es algo menor que con audio de estudio. Asegúrate de que grabar la llamada es legal en tu jurisdicción.',
        },
        {
          q: '¿Tengo que elegir el idioma?',
          a: 'No, la detección automática está activada por defecto. Para audios de menos de 5 minutos o archivos con un inicio sin habla, elige el idioma a mano para resultados más fiables.',
        },
        {
          q: '¿Hay coste por minuto?',
          a: 'Sin cobros. La transcripción es gratis y sin contador de minutos. Nos financiamos con publicidad gráfica y un plan Pro previsto para usuarios intensivos.',
        },
        {
          q: '¿Cuál es el tamaño máximo de archivo?',
          a: '25 MB sin cuenta, 60 MB tras iniciar sesión (también gratis). Si el archivo es más grande, mira nuestra guía de compresión.',
        },
        {
          q: '¿Mi audio se guarda en vuestros servidores?',
          a: 'No. Enviamos el archivo directamente al proveedor de transcripción, recibimos el texto y descartamos el audio. No se escribe nada en nuestra base de datos ni en el almacenamiento.',
        },
        {
          q: '¿Puedo editar la transcripción antes de descargarla?',
          a: 'Sí. Tras la transcripción, corrige palabras erróneas en el visor de resultados y descarga la versión editada.',
        },
        {
          q: '¿Qué formatos de salida hay?',
          a: 'Texto plano (TXT), archivo de subtítulos (SRT) con marcas de tiempo y copia al portapapeles. El SRT funciona en YouTube Studio, Premiere Pro, DaVinci Resolve y cualquier editor de vídeo estándar.',
        },
        {
          q: '¿Mictoo funciona en móvil?',
          a: 'Sí. El sitio está adaptado a móviles. Puedes subir directamente desde el teléfono, incluso desde la app Archivos de iOS o la carpeta de descargas de Android.',
        },
      ]}
      relatedLinks={[
        { href: '/es/transcribe-mp3-to-text', label: 'MP3 a texto', desc: 'Consejos y peculiaridades específicas de MP3.' },
        { href: '/es/transcribe-video-to-text', label: 'Vídeo a texto', desc: 'El mismo motor, optimizado para archivos MP4 y MOV.' },
        { href: '/es/timestamped-transcription', label: 'Transcripción con marcas de tiempo', desc: 'Cuando necesitas marcas por frase o por palabra.' },
        { href: '/es/how-to-compress-audio', label: 'Cómo comprimir audio', desc: 'Cuando tu archivo es demasiado grande para subirlo.' },
      ]}
    />
  )
}
