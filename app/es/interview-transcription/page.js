import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/interview-transcription',
  'fr': 'https://mictoo.com/fr/interview-transcription',
  'de': 'https://mictoo.com/de/interview-transcription',
  'es': 'https://mictoo.com/es/interview-transcription',
  'ru': 'https://mictoo.com/ru/interview-transcription',
  'it': 'https://mictoo.com/it/interview-transcription',
  'pt': 'https://mictoo.com/pt/interview-transcription',
  'pl': 'https://mictoo.com/pl/interview-transcription',
  'ja': 'https://mictoo.com/ja/interview-transcription',
  'x-default': 'https://mictoo.com/interview-transcription',
}

export const metadata = {
  title: 'Transcripción de entrevistas — Generador gratuito | Mictoo',
  description: 'Transcribe entrevistas a texto gratis. Sube tu grabación y obtén una transcripción precisa con marcas de tiempo. Incluye ejemplos y plantillas.',
  alternates: { canonical: 'https://mictoo.com/es/interview-transcription', languages: LANGS },
}

const INTERVIEW_TRANSCRIPT_EXAMPLE = `Entrevistador: ¿Podría describirme su metodología de investigación?

Entrevistado: Claro. Usamos un enfoque de métodos mixtos, empezando con una encuesta a 400 participantes y luego realizando entrevistas en profundidad con 20 de ellos para explorar los hallazgos cuantitativos con más detalle.

Entrevistador: ¿Cuáles fueron los principales desafíos?

Entrevistado: Reclutar participantes fue el mayor obstáculo. Terminamos colaborando con tres organizaciones comunitarias para llegar a una muestra más diversa.`

export default function EsInterviewPage() {
  return (
    <>
      <LandingLayout
        badge="Investigación · Periodismo · Gratis"
        h1={<>Transcripción de entrevistas<br /><span className="text-brand-600">Herramienta gratuita</span></>}
        subtitle="Sube la grabación de tu entrevista y obtén una transcripción de texto precisa en segundos. Ideal para investigación cualitativa, periodismo, entrevistas de RR.HH. y podcasts. Sin cuenta."
        defaultLanguage="es"
        features={[
          { icon: '🎙️', title: 'Cualquier formato', desc: 'Grabaciones presenciales, llamadas telefónicas, entrevistas en Zoom, focus groups — sube MP3, MP4, WAV o M4A.' },
          { icon: '📋', title: 'Salida editable', desc: 'Edita la transcripción directamente en el navegador. Añade etiquetas de hablante, corrige nombres y terminología, luego descarga.' },
          { icon: '⏱️', title: 'Marcas de tiempo por segmento', desc: 'Descarga como .srt para obtener segmentos con timecodes — útil para codificación cualitativa y referenciar momentos concretos.' },
        ]}
        faq={[
          { q: '¿Cómo transcribir una entrevista gratis?', a: 'Sube tu grabación (MP3, MP4, WAV o M4A) con la herramienta de arriba. La transcripción se genera automáticamente en segundos.' },
          { q: '¿Cómo es una transcripción de entrevista?', a: 'Es un registro textual verbatim de todo lo hablado durante la entrevista. Normalmente incluye turnos etiquetados como «Entrevistador» y «Entrevistado» (o por nombre), con el texto hablado en cada línea.' },
          { q: '¿Cuál es el formato correcto de una transcripción?', a: 'El formato estándar incluye: (1) etiqueta de hablante seguida de dos puntos, (2) texto verbatim, (3) línea en blanco entre turnos. Para investigación: añade marcas de tiempo en cada turno. Para periodismo: el habla consecutiva de la misma persona puede combinarse.' },
          { q: '¿Cómo formatear una transcripción para investigación cualitativa?', a: 'Usa transcripción verbatim incluyendo vacilaciones y muletillas. Añade marcas de tiempo cada 30–60 segundos. Etiqueta a los hablantes de forma consistente (p. ej. «P1», «P2» para anonimato). Edita nombres y detalles identificativos si lo requiere tu protocolo ético.' },
          { q: '¿Mictoo añade etiquetas de hablante automáticamente?', a: 'No automáticamente — la transcripción se entrega como un solo bloque de texto. Puedes añadir las etiquetas manualmente editando la transcripción en el navegador antes de descargar.' },
          { q: '¿Diferencia entre transcripción y notas de entrevista?', a: 'Las notas resumen los puntos clave y parafrasean al hablante. Una transcripción es un registro verbatim de cada palabra — más preciso y requerido en la mayoría de contextos de investigación y legales.' },
          { q: '¿Cuánto tarda una entrevista de 1 hora?', a: 'Con Mictoo, una entrevista de 1 hora suele transcribirse en menos de 2 minutos. La transcripción manual tomaría 4–6 horas.' },
        ]}
        relatedLinks={[
          { href: '/transcribe-audio-to-text', label: 'Audio a texto' },
          { href: '/es/timestamped-transcription', label: 'Transcripción con marcas de tiempo' },
          { href: '/es/business-transcription', label: 'Transcripción profesional' },
          { href: '/es', label: 'Todos los formatos' },
        ]}
      />

      <section className="max-w-2xl mx-auto px-4 pb-16">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Ejemplo de transcripción de entrevista</h2>
        <p className="text-sm text-slate-500 mb-4">Una transcripción básica de investigación cualitativa se ve así:</p>
        <pre className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-sm text-slate-700 whitespace-pre-wrap leading-relaxed font-mono">
          {INTERVIEW_TRANSCRIPT_EXAMPLE}
        </pre>
        <p className="text-xs text-slate-400 mt-3">
          Después de transcribir con Mictoo, edita directamente en el navegador para añadir etiquetas de hablante antes de descargar.
        </p>
      </section>
    </>
  )
}
