import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/webinar-transcription',
  'fr': 'https://mictoo.com/fr/webinar-transcription',
  'de': 'https://mictoo.com/de/webinar-transcription',
  'es': 'https://mictoo.com/es/webinar-transcription',
  'ru': 'https://mictoo.com/ru/webinar-transcription',
  'it': 'https://mictoo.com/it/webinar-transcription',
  'pt': 'https://mictoo.com/pt/webinar-transcription',
  'pl': 'https://mictoo.com/pl/webinar-transcription',
  'ja': 'https://mictoo.com/ja/webinar-transcription',
  'ko': 'https://mictoo.com/ko/webinar-transcription',
  'x-default': 'https://mictoo.com/webinar-transcription',
}

export const metadata = {
  title: 'Transcripción de webinars — Transcript gratis para grabaciones | Mictoo',
  description: 'Transcribe grabaciones de webinars a texto y subtítulos SRT gratis. Funciona con Zoom, Webex, GoToWebinar y cualquier export MP4 o MP3. Sin registro.',
  alternates: { canonical: 'https://mictoo.com/es/webinar-transcription', languages: LANGS },

  openGraph: {
    title: "Transcripción de webinars — Transcript gratis para grabaciones | Mictoo",
    description: "Transcribe grabaciones de webinars a texto y subtítulos SRT gratis. Funciona con Zoom, Webex, GoToWebinar y cualquier export MP4 o MP3. Sin registro.",
    url: "https://mictoo.com/es/webinar-transcription",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Transcripción de webinars — Transcript gratis para grabaciones | Mictoo",
    description: "Transcribe grabaciones de webinars a texto y subtítulos SRT gratis. Funciona con Zoom, Webex, GoToWebinar y cualquier export MP4 o MP3. Sin registro.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function EsWebinarPage() {
  return (
    <LandingLayout
      badge="Webinars · MP4 · Gratis"
      h1={<>Transcripción de webinars<br /><span className="text-brand-600">Generador gratis de transcript</span></>}
      subtitle="Convierte la grabación de tu webinar en una transcripción de texto buscable o en un archivo de subtítulos SRT. Funciona con Zoom, Webex, GoToWebinar y cualquier export MP4/MP3."
      defaultLanguage="es"
      valueBlock={
        <>
          <p>Un webinar no termina cuando se cierra la sala. La grabación puede alimentar artículos, documentación, follow-up comercial, base de conocimiento y subtítulos.</p>
          <p>Mictoo convierte el audio o vídeo del webinar en texto editable para reutilizarlo después del evento.</p>
        </>
      }
      howItWorks={[
        { title: 'Descarga la grabación', desc: 'Exporta el webinar desde Zoom, Teams, Meet u otra plataforma.' },
        { title: 'Sube el archivo', desc: 'Mictoo transcribe la presentación, el demo y la sección de preguntas.' },
        { title: 'Reutiliza el contenido', desc: 'Crea notas, clips, artículos, subtítulos o documentación interna.' },
      ]}
      whyUse={{
        title: 'Por qué transcribir webinars',
        bullets: [
          { title: 'Búsqueda rápida', desc: 'Encuentra preguntas, objeciones y temas sin ver todo el vídeo.' },
          { title: 'Contenido post-evento', desc: 'Convierte la sesión en resumen, blog post o email de seguimiento.' },
          { title: 'Subtítulos', desc: 'Usa la transcripción como base para captions y accesibilidad.' },
          { title: 'Documentación interna', desc: 'Guarda demos, entrenamientos y lanzamientos en texto consultable.' },
        ],
      }}
      useCases={{
        title: 'Usos de una transcripción de webinar',
        items: [
          { title: 'Marketing', desc: 'Extrae mensajes, preguntas y clips para campañas.' },
          { title: 'Customer training', desc: 'Convierte sesiones educativas en guías paso a paso.' },
          { title: 'Q&A', desc: 'Reutiliza respuestas frecuentes para soporte y ventas.' },
          { title: 'Demos internas', desc: 'Documenta procesos y decisiones de producto.' },
        ],
      }}
      proTips={{
        title: 'Consejos para webinars',
        tips: [
          { title: 'Separa sesiones largas', desc: 'Divide keynote, demo y Q&A para revisar más rápido.' },
          { title: 'Revisa términos de marca', desc: 'Productos, nombres de clientes y siglas suelen necesitar ajustes.' },
          { title: 'Extrae audio de MP4 grandes', desc: 'Una pista M4A o MP3 puede ahorrar tiempo de subida.' },
        ],
      }}
      faq={[
        { q: '¿Cómo descargo la grabación de mi webinar en Zoom o Webex?', a: 'En Zoom: portal web → Grabaciones → clic en el webinar → Descargar. En Webex: abre la grabación en Mis Grabaciones → Descargar. Ambos exportan en MP4 por defecto.' },
        { q: '¿Puedo obtener una transcripción mientras el webinar está en directo?', a: 'Mictoo trabaja sobre archivos grabados, no sobre streams en vivo. Para subtítulos en tiempo real usa la función de live captions de tu plataforma de webinar y luego sube la grabación para una transcripción pulida.' },
        { q: '¿Qué pasa con varios oradores y sesiones de preguntas?', a: 'Mictoo genera una única transcripción con todo lo hablado. Las etiquetas de orador (Anfitrión, Panelista 1, Audiencia) pueden añadirse manualmente en el editor del navegador antes de descargar.' },
        { q: '¿Cuál es la duración máxima del webinar?', a: 'Hasta 25 MB por archivo. Un webinar de 60 minutos en audio mono a 64 kbps cabe sin problema; exporta a menor bitrate o extrae el audio M4A para sesiones más largas.' },
        { q: '¿La transcripción es precisa con términos técnicos o de sector?', a: 'La precisión es alta con audio claro. Marcas, siglas y terminología inusual a veces se escriben mal — rápido de corregir en el editor del navegador antes de exportar.' },
      ]}
      relatedLinks={[
        { href: '/es/meeting-transcription', label: 'Transcripción de reuniones' },
        { href: '/es/zoom-transcription', label: 'Transcripción de Zoom' },
        { href: '/es/free-srt-generator', label: 'Generador SRT' },
        { href: '/es', label: 'Todos los formatos' },
      ]}
    />
  )
}
