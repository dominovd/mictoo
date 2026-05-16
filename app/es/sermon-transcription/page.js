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
  'x-default': 'https://mictoo.com/sermon-transcription',
}

export const metadata = {
  title: 'Transcripción de sermones — Generador gratis de transcript de sermón | Mictoo',
  description: 'Transcribe sermones y audios de iglesia a texto gratis. Ideal para blogs, notas de estudio y accesibilidad. Soporta MP3, MP4, M4A. Sin registro.',
  alternates: { canonical: 'https://mictoo.com/es/sermon-transcription', languages: LANGS },
}

export default function EsSermonPage() {
  return (
    <LandingLayout
      badge="Sermones · Iglesia · Gratis"
      h1={<>Transcripción de sermones<br /><span className="text-brand-600">Generador gratis de transcript</span></>}
      subtitle="Convierte las grabaciones de sermones en texto limpio en segundos. Ideal para blogs de iglesia, guías de estudio, posts en redes y para hacer accesibles tus mensajes a personas con discapacidad auditiva."
      defaultLanguage="es"
      features={[
        { icon: '📖', title: 'Reutiliza cada sermón', desc: 'Convierte un sermón en post de blog, devocional, newsletter, guía de estudio y citas listas para redes. Multiplica tu alcance sin trabajo extra.' },
        { icon: '♿', title: 'Accesibilidad', desc: 'Ofrece transcripciones para que miembros sordos, con dificultades auditivas o asistiendo en remoto puedan involucrarse plenamente con el mensaje.' },
        { icon: '🌐', title: 'Multilingüe', desc: 'Funciona en español, inglés, portugués, coreano, francés, ruso y más de 45 idiomas. Perfecto para congregaciones multilingües.' },
      ]}
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
