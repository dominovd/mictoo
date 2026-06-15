import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/sermon-transcription',
  'fr': 'https://mictoo.com/fr/sermon-transcription',
  'de': 'https://mictoo.com/de/sermon-transcription',
  'es': 'https://mictoo.com/es/sermon-transcription',
  'ru': 'https://mictoo.com/ru/sermon-transcription',
  'it': 'https://mictoo.com/it/sermon-transcription',
  'pt': 'https://mictoo.com/pt/sermon-transcription',
  'pl': 'https://mictoo.com/pl/sermon-transcription',
  'ja': 'https://mictoo.com/ja/sermon-transcription',
  'ko': 'https://mictoo.com/ko/sermon-transcription',
  'x-default': 'https://mictoo.com/sermon-transcription',
}

export const metadata = {
  title: 'Transcripción de sermones — Generador gratis de transcript de sermón | Mictoo',
  description: 'Transcribe sermones y audios de iglesia a texto gratis. Ideal para blogs, notas de estudio y accesibilidad. Soporta MP3, MP4, M4A. Sin registro.',
  alternates: { canonical: 'https://mictoo.com/es/sermon-transcription', languages: LANGS },

  openGraph: {
    title: "Transcripción de sermones — Generador gratis de transcript de sermón | Mictoo",
    description: "Transcribe sermones y audios de iglesia a texto gratis. Ideal para blogs, notas de estudio y accesibilidad. Soporta MP3, MP4, M4A. Sin registro.",
    url: "https://mictoo.com/es/sermon-transcription",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Transcripción de sermones — Generador gratis de transcript de sermón | Mictoo",
    description: "Transcribe sermones y audios de iglesia a texto gratis. Ideal para blogs, notas de estudio y accesibilidad. Soporta MP3, MP4, M4A. Sin registro.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function EsSermonPage() {
  return (
    <LandingLayout
      badge="Sermones · Iglesia · Gratis"
      h1={<>Transcripción de sermones<br /><span className="text-brand-600">Generador gratis de transcript</span></>}
      subtitle="Convierte las grabaciones de sermones en texto limpio en segundos. Ideal para blogs de iglesia, guías de estudio, posts en redes y para hacer accesibles tus mensajes a personas con discapacidad auditiva."
      defaultLanguage="es"
      valueBlock={
        <>
          <p>Una predicación transcrita puede convertirse en notas para la iglesia, subtítulos de YouTube, material para grupos pequeños, citas y un archivo buscable.</p>
          <p>Mictoo ayuda a transformar audio o vídeo del servicio en texto editable para publicar, revisar y reutilizar.</p>
        </>
      }
      howItWorks={[
        { title: 'Sube el audio del sermón', desc: 'Usa el MP3, WAV, M4A o vídeo exportado del servicio.' },
        { title: 'Obtén un borrador', desc: 'Mictoo genera una transcripción con timestamps para revisar pasajes y nombres.' },
        { title: 'Publica o reutiliza', desc: 'Exporta texto para web, notas, subtítulos o archivo interno.' },
      ]}
      whyUse={{
        title: 'Por qué transcribir sermones',
        bullets: [
          { title: 'Accesibilidad', desc: 'Ayuda a personas que prefieren leer o necesitan apoyo escrito.' },
          { title: 'Reutilización de contenido', desc: 'Convierte mensajes en posts, boletines, devocionales o citas.' },
          { title: 'Archivo buscable', desc: 'Encuentra temas, series y referencias bíblicas más rápido.' },
          { title: 'Apoyo al equipo de medios', desc: 'Facilita subtítulos y descripciones para vídeos.' },
        ],
      }}
      useCases={{
        title: 'Usos para iglesias',
        items: [
          { title: 'Página del sermón', desc: 'Publica el texto junto al audio o vídeo.' },
          { title: 'Subtítulos de YouTube', desc: 'Crea una base para captions y revisión manual.' },
          { title: 'Material de grupo', desc: 'Extrae preguntas, puntos principales y citas.' },
          { title: 'Series predicadas', desc: 'Busca temas repetidos en meses o años de mensajes.' },
        ],
      }}
      proTips={{
        title: 'Consejos para sermones',
        tips: [
          { title: 'Extrae audio de vídeos grandes', desc: 'Subir solo la pista de voz suele ser más rápido.' },
          { title: 'Revisa nombres bíblicos', desc: 'Los nombres propios y referencias pueden necesitar corrección.' },
          { title: 'Divide conferencias largas', desc: 'Un archivo por sesión facilita revisión y publicación.' },
        ],
      }}
      faq={[
        { q: '¿Cómo paso la grabación de un sermón a texto?', a: 'Exporta la grabación desde la mesa de sonido de tu iglesia, tu feed de podcast o YouTube como MP3, MP4 o M4A. Suelta el archivo arriba — Mictoo lo transcribe en segundos.' },
        { q: '¿Puedo transcribir sermones del canal de YouTube de mi iglesia?', a: 'Sí. Para tu propio canal: YouTube Studio → Contenido → clic en el vídeo → Descargar. Suelta el archivo en Mictoo. Para canales externos necesitas permiso — muchos ministerios comparten descargas de audio a través de su feed de podcast.' },
        { q: '¿Qué pasa con versículos bíblicos y nombres propios?', a: 'La transcripción IA maneja bien versículos y nombres comunes, pero a veces escribe mal nombres bíblicos menos frecuentes o terminología propia de tu iglesia. Edítalos en el editor del navegador antes de descargar — suelen ser 30 segundos de revisión.' },
        { q: '¿Cuál es la duración máxima del sermón?', a: 'Hasta 25 MB por archivo. Un sermón de 30 minutos a 128 kbps cabe sin problema. Para mensajes más largos (45-60 minutos), baja el bitrate a 64 kbps mono o divide en dos partes.' },
        { q: '¿Son privados los archivos?', a: 'Sí. Los sermones se procesan y eliminan al instante. No almacenamos audio ni contenido de la transcripción.' },
      ]}
      relatedLinks={[
        { href: '/es/podcast-transcription', label: 'Transcripción de podcast' },
        { href: '/es/lecture-transcription', label: 'Transcripción de clases' },
        { href: '/es', label: 'Todos los formatos' },
      ]}
    />
  )
}
