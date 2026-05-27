import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/transcribe-mp3-to-text',
  'fr': 'https://mictoo.com/fr/transcribe-mp3-to-text',
  'de': 'https://mictoo.com/de/transcribe-mp3-to-text',
  'es': 'https://mictoo.com/es/transcribe-mp3-to-text',
  'ru': 'https://mictoo.com/ru/transcribe-mp3-to-text',
  'it': 'https://mictoo.com/it/transcribe-mp3-to-text',
  'pt': 'https://mictoo.com/pt/transcribe-mp3-to-text',
  'pl': 'https://mictoo.com/pl/transcribe-mp3-to-text',
  'ja': 'https://mictoo.com/ja/transcribe-mp3-to-text',
  'ko': 'https://mictoo.com/ko/transcribe-mp3-to-text',
  'x-default': 'https://mictoo.com/transcribe-mp3-to-text',
}

export const metadata = {
  title: 'MP3 a texto — transcripción gratuita con IA | Mictoo',
  description:
    'Conversor gratuito de MP3 a texto. Sube cualquier MP3 y obtén una transcripción con IA en segundos. Funciona con podcasts, entrevistas y clases. Más de 50 idiomas, sin registro.',
  alternates: { canonical: 'https://mictoo.com/es/transcribe-mp3-to-text', languages: LANGS },
}

export default function EsMp3ToTextPage() {
  return (
    <LandingLayout
      defaultLanguage="es"
      badge="MP3 · GRATIS · SIN REGISTRO"
      h1={
        <>
          MP3 a texto
          <br />
          <span className="text-brand-600">Transcripción gratuita de MP3</span>
        </>
      }
      subtitle="Transcripción con IA gratuita para cualquier MP3. Sube el archivo y obtén el texto en segundos. Sin cuenta, sin tarifa por minuto, sin email."
      howItWorks={[
        {
          icon: '📂',
          title: 'Sube el MP3',
          desc: 'Funciona cualquier MP3. Episodio de podcast, export de una nota de voz, rip de audio, archivo de voz generado por IA. Arrástralo o haz clic para elegir.',
        },
        {
          icon: '⚡',
          title: 'La IA lo transcribe',
          desc: 'Whisper large-v3 lee el MP3 y convierte la voz en texto. Un podcast típico de 30 minutos termina en alrededor de un minuto. Una nota de voz de 5 minutos en unos 15 segundos.',
        },
        {
          icon: '📋',
          title: 'Copia, descarga o edita',
          desc: 'Léelo en el navegador, cópialo al portapapeles o descárgalo como TXT o SRT. Corrige palabras mal entendidas antes de exportar.',
        },
      ]}
      whyUse={{
        title: 'Por qué Mictoo para MP3',
        bullets: [
          {
            title: 'Whisper large-v3, sin modelo recortado para gratuitos',
            desc: 'No corremos un modelo más débil "para usuarios gratuitos" y uno mejor para los de pago. Mismo modelo, misma precisión, cada archivo.',
          },
          {
            title: 'Las particularidades del MP3 las manejamos bien',
            desc: 'El MP3 tiene pérdidas, así que algunas herramientas se atragantan con archivos muy comprimidos (32 kbps, mono, baja frecuencia de muestreo). Whisper los procesa sin queja. Hemos visto transcripciones legibles desde MP3 de llamadas a 24 kbps.',
          },
          {
            title: 'Sin conversión de archivos',
            desc: 'Algunas herramientas de "MP3 a texto" piden WAV por debajo y vuelven a codificar tu MP3 antes. Nosotros mandamos el MP3 directo al modelo. Más rápido, sin la pérdida de una segunda codificación.',
          },
          {
            title: 'Sin contador de minutos',
            desc: 'Algunos competidores te dan 60 minutos gratis al mes y luego cobran 25 céntimos por minuto. Nosotros vivimos de publicidad, sin tope de minutos. Transcribe uno o cien.',
          },
          {
            title: 'Privacidad por defecto',
            desc: 'El MP3 va al proveedor de transcripción, se transcribe y se descarta. Nunca escribimos tu audio en disco de nuestro lado.',
          },
        ],
      }}
      useCases={{
        title: 'Para qué usa la gente "MP3 a texto"',
        items: [
          {
            title: 'Episodios de podcast',
            desc: 'Arrastra el MP3 desde tu host (Anchor, Buzzsprout, Transistor) y obtén texto para show notes, repropósito en blog o accesibilidad.',
          },
          {
            title: 'Grabaciones de llamadas',
            desc: 'MP3 es el export estándar de la mayoría de apps de grabación de llamadas. Transcribe para revisar rápido una llamada larga y encontrar la parte que importa.',
          },
          {
            title: 'Notas de voz exportadas desde el móvil',
            desc: 'Las notas de voz del iPhone son M4A por defecto, pero si las has compartido como MP3 vía AirDrop o usado una app Android que guarda MP3, esta es tu herramienta.',
          },
          {
            title: 'Muestras de audiolibros o rips de clases',
            desc: 'Para estudiar, tener el texto junto al audio duplica la retención. Solo mantente del lado correcto del copyright.',
          },
          {
            title: 'Voces IA y salida de TTS',
            desc: 'Si generaste voz con ElevenLabs, OpenAI TTS, Murf o cualquier otra herramienta de síntesis, puede que necesites una transcripción limpia de vuelta para trabajar con subtítulos o alineación.',
          },
        ],
      }}
      proTips={{
        title: 'Consejos para transcribir MP3',
        tips: [
          {
            title: 'Bitrate constante mejor que variable para Whisper',
            desc: 'El MP3 VBR (variable bitrate) puede confundir a algunos decodificadores en casos límite. Si controlas el export, elige CBR a 64 o 96 kbps mono. Menos trabajo para el modelo.',
          },
          {
            title: '64 kbps mono es el punto óptimo para voz en MP3',
            desc: 'Más alto es desperdicio para voz. Un episodio de 60 minutos a 64 kbps mono son unos 28 MB. Cabe en el límite gratuito de 25 MB justo, o cómodamente en el de 60 MB con login.',
          },
          {
            title: 'Si tu MP3 es enorme (más de 60 MB), recodifícalo antes de dividir',
            desc: 'Dividir y transcribir dos archivos es más trabajo que recodificar una vez con menor bitrate. ffmpeg: ffmpeg -i big.mp3 -ac 1 -b:a 64k small.mp3. Un original de 200 MB baja a 25–40 MB.',
          },
          {
            title: 'Quita los metadatos ID3 si el archivo está al límite',
            desc: 'Las etiquetas ID3 (carátula, letras, etc.) pueden añadir varios MB a un MP3. Si estás 1–2 MB por encima del límite, quitar las etiquetas con ffmpeg -i in.mp3 -map_metadata -1 -c:a copy out.mp3 podría bastar.',
          },
          {
            title: 'La codificación MP3 mala de conversores viejos provoca saltos de silencio',
            desc: 'Si tu transcripción se salta secciones, puede que el MP3 tenga silencios reales por un codificador defectuoso. Recodifica desde la fuente si la tienes, o usa Find Silence en Audacity para confirmar.',
          },
          {
            title: 'Para MP3 de llamadas (8 kHz mono), espera algo menos de precisión',
            desc: 'El audio telefónico pierde agudos, lo que te cuesta unos puntos de precisión. Sigue siendo legible, solo planifica más limpieza para nombres y números.',
          },
        ],
      }}
      faq={[
        {
          q: '¿MP3 es el mejor formato para transcribir?',
          a: 'Para la mayoría, sí. MP3 es pequeño, está soportado en todas partes y la precisión con Whisper es prácticamente idéntica a la de WAV o FLAC. Usa lossless (WAV, FLAC) solo si también necesitas el audio para editarlo después.',
        },
        {
          q: '¿Qué bitrates de MP3 funcionan mejor?',
          a: 'Cualquier cosa entre 32 kbps mono y 320 kbps estéreo. Para voz, 64–96 kbps mono es el punto dulce práctico. Más alto no mejora la transcripción, más bajo empieza a perder inteligibilidad para el modelo.',
        },
        {
          q: 'Mi MP3 supera los 60 MB. ¿Qué hago?',
          a: 'Dos opciones. Recodificar a menor bitrate (64 kbps mono divide la mayoría de MP3 por 4 o más), o dividir el archivo en trozos por debajo de 60 MB. Tenemos guías para ambos casos.',
        },
        {
          q: '¿Cuánto tarda en transcribir un MP3?',
          a: 'Alrededor del 1–2 % de la duración del audio. Un MP3 de 60 minutos termina en torno a 60 segundos. Uno de 10 minutos en 10–20 segundos. La subida por red suele ser la espera más larga.',
        },
        {
          q: '¿Mi MP3 se guarda o se comparte?',
          a: 'No. El archivo va al proveedor de transcripción (Groq, con OpenAI como respaldo), se transcribe y se descarta. No lo escribimos en nuestros servidores, y los proveedores que usamos no entrenan con datos de la API.',
        },
        {
          q: '¿Puedo subir varios MP3 a la vez?',
          a: 'Por ahora no en un solo clic. Hoy transcribes un archivo por vez. La subida por lotes está en la hoja de ruta del plan Pro de pago.',
        },
        {
          q: '¿Qué idiomas soportan?',
          a: 'Más de 50 idiomas. La detección automática cubre la mayoría de los casos. Para archivos de menos de 5 minutos o que empiezan con música o silencio, elige el idioma a mano.',
        },
        {
          q: '¿Puedo obtener marcas de tiempo desde un MP3?',
          a: 'Sí. Descarga como SRT (archivo de subtítulos) y tendrás marcas cada pocos segundos. O usa nuestra página de transcripción con marcas de tiempo para granularidad por palabra.',
        },
        {
          q: '¿Mictoo funciona con MP3 de podcast con marcadores de capítulos?',
          a: 'Extraemos el audio e ignoramos los metadatos de capítulos. Obtienes la transcripción completa como un único documento. Si quieres transcripciones por capítulo, divide el MP3 en los límites de capítulo primero.',
        },
        {
          q: '¿La transcripción de mi MP3 tendrá etiquetas de hablante?',
          a: 'No automáticamente. Whisper no hace diarización por defecto. Si necesitas etiquetas, sube la pista de cada hablante por separado (si la tienes) y márcalas tú.',
        },
        {
          q: '¿Puedo transcribir un MP3 con voz generada por IA?',
          a: 'Sí. Audio TTS (ElevenLabs, OpenAI, Murf, etc.) suele transcribirse más limpio que la voz humana porque no hay ruido de fondo ni vacilación.',
        },
        {
          q: 'Mi MP3 está en un idioma raro. ¿Funcionará?',
          a: 'Si Whisper soporta el idioma, sí. El modelo cubre más de 50 idiomas con buena precisión y soporte básico para muchos más. Pruébalo. Si el resultado es inutilizable, el idioma probablemente está fuera de los datos de entrenamiento.',
        },
      ]}
      relatedLinks={[
        { href: '/es/transcribe-audio-to-text', label: 'Audio a texto', desc: 'Para formatos no MP3 (WAV, M4A, FLAC, OGG).' },
        { href: '/es/podcast-transcription', label: 'Transcripción de podcast', desc: 'Mismo motor, consejos específicos para podcast.' },
        { href: '/es/free-srt-generator', label: 'Generador de SRT', desc: 'Cuando necesitas subtítulos para vídeo, no solo texto.' },
        { href: '/es/how-to-compress-audio', label: 'Cómo comprimir audio', desc: 'Si el MP3 es demasiado grande.' },
      ]}
    />
  )
}
