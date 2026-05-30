import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/lecture-transcription',
  'fr': 'https://mictoo.com/fr/lecture-transcription',
  'de': 'https://mictoo.com/de/lecture-transcription',
  'es': 'https://mictoo.com/es/lecture-transcription',
  'ru': 'https://mictoo.com/ru/lecture-transcription',
  'it': 'https://mictoo.com/it/lecture-transcription',
  'pt': 'https://mictoo.com/pt/lecture-transcription',
  'pl': 'https://mictoo.com/pl/lecture-transcription',
  'ja': 'https://mictoo.com/ja/lecture-transcription',
  'ko': 'https://mictoo.com/ko/lecture-transcription',
  'x-default': 'https://mictoo.com/lecture-transcription',
}

export const metadata = {
  title: 'Transcripción de clases — generador gratuito de transcripciones | Mictoo',
  description:
    'Transcripción gratuita de clases. Sube la grabación de una clase, conferencia universitaria o seminario (MP3, M4A, MP4) y obtén texto limpio en segundos. Pensado para estudiantes.',
  alternates: { canonical: 'https://mictoo.com/es/lecture-transcription', languages: LANGS },

  openGraph: {
    title: "Transcripción de clases — generador gratuito de transcripciones | Mictoo",
    description: "Transcripción gratuita de clases. Sube la grabación de una clase, conferencia universitaria o seminario (MP3, M4A, MP4) y obtén texto limpio en segundos. Pensado para estudiantes.",
    url: "https://mictoo.com/es/lecture-transcription",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Transcripción de clases — generador gratuito de transcripciones | Mictoo",
    description: "Transcripción gratuita de clases. Sube la grabación de una clase, conferencia universitaria o seminario (MP3, M4A, MP4) y obtén texto limpio en segundos. Pensado para estudiantes.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function EsLecturePage() {
  return (
    <LandingLayout
      defaultLanguage="es"
      badge="Estudiantes · Académicos · Gratis"
      h1={
        <>
          Transcripción de clases
          <br />
          <span className="text-brand-600">Herramienta gratuita de transcripción de clases</span>
        </>
      }
      subtitle="Convierte cualquier clase grabada en texto limpio para estudiar. Universidad, curso online, charla de conferencia, formación profesional. Sin registro, sin tarifa por minuto."
      howItWorks={[
        {
          icon: '🎓',
          title: 'Sube el audio o vídeo de la clase',
          desc: 'MP3 de una grabadora de voz, M4A del móvil, MP4 de una clase de Zoom o de una captura de pantalla de una clase online. WAV de una grabadora de research. Todos sirven.',
        },
        {
          icon: '⚡',
          title: 'La IA lo transcribe',
          desc: 'Whisper large-v3 lee el audio. Una clase de 60 minutos termina en alrededor de un minuto.',
        },
        {
          icon: '📋',
          title: 'Recibe la transcripción',
          desc: 'Léela, cópiala en tus apuntes o descárgala como TXT o SRT. Arregla términos técnicos mal entendidos en el editor antes de exportar.',
        },
      ]}
      whyUse={{
        title: 'Por qué Mictoo para clases',
        bullets: [
          {
            title: 'Lo largo va bien',
            desc: 'Hasta 60 minutos por archivo tras iniciar sesión (gratis). Para una clase de 90 minutos, divídela en dos trozos de 45. La transcripción se concatena.',
          },
          {
            title: 'Maneja vocabulario técnico mejor que la mayoría',
            desc: 'Whisper se ha entrenado con una variedad enorme de audio incluyendo clases académicas. Latín, jerga técnica, términos matemáticos, fragmentos de código suelen salir más limpios de lo esperado.',
          },
          {
            title: 'Sin coste por clase',
            desc: 'Para estudiantes, pagar transcripción por clase es un derroche. Gratis y sin contador de minutos significa que puedes transcribir cada clase del semestre.',
          },
          {
            title: 'Privacidad y derechos',
            desc: 'El archivo va al proveedor de transcripción y se descarta. No conservamos el audio. Útil cuando transcribes material del que tienes acceso (tus grabaciones) pero no quieres subir a un servicio de almacenamiento de terceros.',
          },
          {
            title: 'Más de 50 idiomas',
            desc: 'Estudiantes internacionales y cursos online en idiomas no ingleses, todo funciona. La detección automática cubre la mayoría de casos.',
          },
        ],
      }}
      useCases={{
        title: 'Para qué usan estudiantes y académicos las transcripciones de clase',
        items: [
          {
            title: 'Apuntes buscables',
            desc: 'Pega la transcripción en Notion, Obsidian o un documento de Word. Ctrl+F cualquier término que mencionó el profesor. Mejor que rebobinar un archivo de audio de 90 minutos.',
          },
          {
            title: 'Repaso para exámenes',
            desc: 'Ojea la transcripción mientras repasas tus apuntes a mano. Capta cosas que se te escaparon en la clase en directo.',
          },
          {
            title: 'Traducir clases para no nativos',
            desc: 'Transcribe en el idioma original, luego pasa por DeepL o ChatGPT para traducir. Útil para estudiantes que cursan en su segundo idioma.',
          },
          {
            title: 'Accesibilidad para estudiantes sordos o con dificultades auditivas',
            desc: 'Una transcripción o un archivo SRT da el mismo contenido en otra modalidad. Algunas universidades lo obligan para contenido de curso grabado.',
          },
          {
            title: 'Crear flashcards y materiales de estudio',
            desc: 'Las transcripciones alimentan tarjetas de Anki, documentos de resumen o herramientas de estudio asistidas por IA.',
          },
        ],
      }}
      proTips={{
        title: 'Consejos para transcribir clases',
        tips: [
          {
            title: 'Siéntate cerca del profesor en clases presenciales',
            desc: 'Grabar desde la última fila a través del ruido ambiente de la sala produce una transcripción con muchos huecos. El móvil en la primera fila, con la pantalla hacia abajo, captura voz limpia.',
          },
          {
            title: 'Usa una grabadora dedicada para clases largas',
            desc: 'Las grabaciones desde el móvil tienen auto-leveling agresivo y reducción de ruido que perjudican la transcripción. Una Zoom H1n o grabadora entry-level similar da audio mucho más limpio por unos 80 dólares.',
          },
          {
            title: 'Para clases online, graba el audio del sistema directamente',
            desc: 'OBS Studio en Windows o Mac puede grabar el audio de la clase directamente desde el sistema. Más limpio que capturar por el micro del laptop.',
          },
          {
            title: 'Fija el idioma manualmente',
            desc: 'La detección automática suele acertar pero se puede confundir por warmup del profesor en otro idioma. Elige el idioma de la clase explícitamente desde el desplegable.',
          },
          {
            title: 'Recorta los primeros 5 minutos si son anuncios administrativos',
            desc: '"¿Hicisteis los deberes? ¿Leísteis el capítulo 3?" no es útil para la transcripción. Recórtalo en Audacity antes de subir para ahorrar presupuesto de tamaño.',
          },
          {
            title: 'En clases STEM con ecuaciones, la transcripción captura las matemáticas habladas, no las ecuaciones',
            desc: 'Las expresiones matemáticas escritas en la pizarra no están en el audio, así que no estarán en la transcripción. Sigues necesitando capturarlas aparte (fotos de la pizarra, capturas de las slides).',
          },
          {
            title: 'Reescucha la grabación leyendo la transcripción en la primera revisión',
            desc: 'Es la mejor forma de arreglar términos específicos del profesor y referencias a ecuaciones. Una vez limpia, la transcripción se sostiene sola.',
          },
        ],
      }}
      faq={[
        {
          q: '¿Es lo bastante preciso para trabajos universitarios?',
          a: 'Para la mayoría del contenido de clase, sí. Whisper large-v3 da 90–95 % de precisión en audio limpio de clase. Términos técnicos y nombres propios suelen necesitar limpieza. Usa la transcripción como apuntes, no como fuente canónica para citas.',
        },
        {
          q: 'Mi clase no es en inglés. ¿Funcionará?',
          a: 'Sí. Whisper soporta más de 50 idiomas con buena precisión en los principales y soporte básico para muchos más. Elige el idioma manualmente desde el desplegable para mejores resultados.',
        },
        {
          q: 'Mi clase dura 90 minutos. ¿Qué hago?',
          a: 'Divídela. Nuestro tope es 60 minutos por archivo. Corta en dos trozos de 45 en un punto de pausa natural (la pausa a mitad de clase o una transición de tema).',
        },
        {
          q: '¿Es legal transcribir clases?',
          a: 'Para uso personal de estudio, generalmente sí en la mayoría de jurisdicciones, mientras tengas acceso legal a la grabación. Para redistribución (publicar la transcripción online, vender materiales de estudio), necesitas permiso del docente o de la institución. Algunas universidades tienen políticas explícitas sobre grabar y transcribir clases. Comprueba la tuya.',
        },
        {
          q: '¿Puedo transcribir una clase en vídeo de Coursera, edX o Khan Academy?',
          a: 'Sí, si puedes descargar el archivo de vídeo. Algunas plataformas permiten descargas para ver offline (obtienes un MP4). Súbelo aquí. Para plataformas que no permiten descargar, comprueba sus condiciones antes de scrapear.',
        },
        {
          q: '¿La transcripción incluirá el contenido de las slides?',
          a: 'No. Solo transcribimos el audio. Si el profesor lee las slides en voz alta, ese texto estará en la transcripción. Si las slides tienen texto en pantalla que el profesor no leyó, ese no estará. Combina con capturas de las slides para apuntes completos.',
        },
        {
          q: '¿Qué precisión tiene con términos técnicos y jerga?',
          a: 'Menos precisa que con vocabulario común. Para términos médicos en latín, símbolos matemáticos avanzados, siglas de nicho, espera arreglarlos a mano. El flujo general de la clase será sólido.',
        },
        {
          q: '¿Puedo exportar la transcripción a mi app de apuntes?',
          a: 'Sí. Descarga como TXT y pega en Notion, Obsidian, OneNote, Bear o cualquier herramienta de texto. El SRT funciona en reproductores de vídeo si quieres subtítulos junto a la grabación.',
        },
        {
          q: '¿Se guarda el audio de mi clase?',
          a: 'No. El archivo va a nuestro proveedor de transcripción, se procesa y se descarta. No conservamos el audio.',
        },
        {
          q: '¿Cuánto tarda en transcribir una clase?',
          a: 'Alrededor del 1–2 % de la duración del audio. Una clase de 60 minutos termina en torno a 60 segundos. La subida suele ser la espera más larga.',
        },
        {
          q: '¿Puedo obtener marcas de tiempo para volver a momentos concretos?',
          a: 'Sí. Descarga como SRT. Cada línea tiene una marca alineada al audio original. Útil para volver a un punto específico durante la preparación de un examen.',
        },
        {
          q: '¿Qué pasa con el Q&A al final de la clase?',
          a: 'El Q&A se transcribe igual que la parte principal. Las preguntas del público a veces salen menos claras (suelen estar más lejos del micro), pero la respuesta del profesor debería estar limpia. Añade una sección "Q&A" en tus apuntes.',
        },
      ]}
      relatedLinks={[
        { href: '/es/transcribe-audio-to-text', label: 'Audio a texto', desc: 'Para archivos de audio generales.' },
        { href: '/es/transcribe-video-to-text', label: 'Vídeo a texto', desc: 'Para clases en vídeo (MP4, MOV).' },
        { href: '/es/timestamped-transcription', label: 'Transcripción con marcas de tiempo', desc: 'Para volver a momentos concretos.' },
        { href: '/es/how-to-split-audio', label: 'Cómo dividir audio', desc: 'Para clases de más de 60 minutos.' },
      ]}
    />
  )
}
