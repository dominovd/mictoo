import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/dictation-to-text',
  'fr': 'https://mictoo.com/fr/dictation-to-text',
  'de': 'https://mictoo.com/de/dictation-to-text',
  'es': 'https://mictoo.com/es/dictation-to-text',
  'ru': 'https://mictoo.com/ru/dictation-to-text',
  'it': 'https://mictoo.com/it/dictation-to-text',
  'pt': 'https://mictoo.com/pt/dictation-to-text',
  'pl': 'https://mictoo.com/pl/dictation-to-text',
  'ja': 'https://mictoo.com/ja/dictation-to-text',
  'ko': 'https://mictoo.com/ko/dictation-to-text',
  'x-default': 'https://mictoo.com/dictation-to-text',
}

export const metadata = {
  title: 'Dictado a texto — Transcripción gratis de dictado por voz | Mictoo',
  description: 'Convierte grabaciones de dictado a texto gratis. Ideal para escritores, médicos, abogados e investigadores. Soporta MP3, M4A, WAV. Sin registro.',
  alternates: { canonical: 'https://mictoo.com/es/dictation-to-text', languages: LANGS },

  openGraph: {
    title: "Dictado a texto — Transcripción gratis de dictado por voz | Mictoo",
    description: "Convierte grabaciones de dictado a texto gratis. Ideal para escritores, médicos, abogados e investigadores. Soporta MP3, M4A, WAV. Sin registro.",
    url: "https://mictoo.com/es/dictation-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dictado a texto — Transcripción gratis de dictado por voz | Mictoo",
    description: "Convierte grabaciones de dictado a texto gratis. Ideal para escritores, médicos, abogados e investigadores. Soporta MP3, M4A, WAV. Sin registro.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function EsDictationPage() {
  return (
    <LandingLayout
      badge="Dictado · Voz → Texto · Gratis"
      h1={<>Dictado a texto<br /><span className="text-brand-600">Transcripción gratis de dictado por voz</span></>}
      subtitle="Graba tus ideas, dicta un capítulo o toma notas — luego sube el archivo aquí para obtener una transcripción precisa. Sin registro, sin app que instalar."
      defaultLanguage="es"
      valueBlock={
        <>
          <p>La dictación grabada no se comporta igual que una reunión. Suele tener ideas largas, pausas, correcciones y frases que luego quieres convertir en borrador.</p>
          <p>Mictoo te permite grabar primero, pensar sin presión y convertir después el audio en texto editable.</p>
        </>
      }
      howItWorks={[
        { title: 'Graba tu dictado', desc: 'Usa el móvil, una grabadora o cualquier app de voz.' },
        { title: 'Sube el audio', desc: 'Mictoo lo transcribe y conserva una estructura fácil de revisar.' },
        { title: 'Convierte en borrador', desc: 'Edita frases, títulos, listas y notas hasta dejar un texto publicable.' },
      ]}
      whyUse={{
        title: 'Por qué Mictoo para dictados',
        bullets: [
          { title: 'Sin presión en tiempo real', desc: 'Puedes hablar, pausar y retomar antes de editar.' },
          { title: 'Bueno para ideas largas', desc: 'Convierte pensamientos completos en un borrador inicial.' },
          { title: 'Útil con acentos e idiomas', desc: 'Selecciona el idioma cuando la detección automática no tenga suficiente contexto.' },
          { title: 'Edición posterior sencilla', desc: 'Corrige puntuación, nombres y secciones en texto.' },
        ],
      }}
      useCases={{
        title: 'Qué dictar',
        items: [
          { title: 'Artículos', desc: 'Habla un esquema y conviértelo en primer borrador.' },
          { title: 'Notas de llamadas', desc: 'Resume decisiones justo después de una conversación.' },
          { title: 'Capítulos o ideas de libro', desc: 'Captura texto largo cuando escribir frena el ritmo.' },
          { title: 'Notas profesionales', desc: 'Documenta visitas, tareas o reportes mientras están frescos.' },
        ],
      }}
      proTips={{
        title: 'Consejos para dictar mejor',
        tips: [
          { title: 'Habla en frases completas', desc: 'La puntuación y la edición salen mejor con ideas cerradas.' },
          { title: 'Haz pausas entre secciones', desc: 'Luego será más fácil separar párrafos y títulos.' },
          { title: 'Di los marcadores en voz alta', desc: 'Frases como “punto uno” o “nuevo apartado” ayudan al editar.' },
        ],
      }}
      faq={[
        { q: '¿Cómo grabo un dictado en mi móvil?', a: 'iPhone: usa la app Voice Memos — export en .m4a. Android: usa la grabadora integrada o Easy Voice Recorder — export en .mp3 o .m4a. Suelta el archivo en Mictoo.' },
        { q: '¿Mictoo es una herramienta de dictado en tiempo real?', a: 'No — Mictoo transcribe archivos de audio existentes. Para dictado en tiempo real (hablar y ver el texto aparecer) usa el dictado integrado de tu sistema (macOS, Windows, iOS, Android). Usa Mictoo después para limpiar grabaciones largas.' },
        { q: '¿Qué precisión tiene la transcripción de dictado?', a: 'Un dictado claro con un único hablante se transcribe con 95%+ de precisión. Habla a un ritmo natural, en una habitación silenciosa, y usa unos auriculares para mejores resultados.' },
        { q: '¿Puedo usarlo para dictado médico o legal?', a: 'Sí, pero revisa la normativa local sobre procesamiento IA de datos de pacientes o clientes. Mictoo no almacena archivos — pero el audio pasa por nuestro proveedor IA para la transcripción. Para flujos regulados por HIPAA consulta a tu equipo de compliance.' },
        { q: '¿Cuál es la duración máxima del dictado?', a: 'Hasta 25 MB. A 64 kbps mono son unos 50 minutos de dictado. Para grabaciones más largas divide en capítulos o baja el bitrate.' },
      ]}
      relatedLinks={[
        { href: '/es/voice-memo-to-text', label: 'Nota de voz a texto' },
        { href: '/es', label: 'Todos los formatos' },
      ]}
    />
  )
}
