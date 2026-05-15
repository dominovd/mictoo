import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/dictation-to-text',
  'fr': 'https://mictoo.com/fr/dictation-to-text',
  'de': 'https://mictoo.com/de/dictation-to-text',
  'es': 'https://mictoo.com/es/dictation-to-text',
  'ru': 'https://mictoo.com/ru/dictation-to-text',
  'x-default': 'https://mictoo.com/dictation-to-text',
}

export const metadata = {
  title: 'Dictado a texto — Transcripción gratis de dictado por voz | Mictoo',
  description: 'Convierte grabaciones de dictado a texto gratis. Ideal para escritores, médicos, abogados e investigadores. Soporta MP3, M4A, WAV. Sin registro.',
  alternates: { canonical: 'https://mictoo.com/es/dictation-to-text', languages: LANGS },
}

export default function EsDictationPage() {
  return (
    <LandingLayout
      badge="Dictado · Voz → Texto · Gratis"
      h1={<>Dictado a texto<br /><span className="text-brand-600">Transcripción gratis de dictado por voz</span></>}
      subtitle="Graba tus ideas, dicta un capítulo o toma notas — luego sube el archivo aquí para obtener una transcripción precisa. Sin registro, sin app que instalar."
      defaultLanguage="es"
      features={[
        { icon: '📝', title: 'Para escritores e investigadores', desc: 'Dicta un borrador de capítulo, un esquema de artículo o notas de entrevista. Mictoo convierte tu voz en texto limpio y editable en segundos.' },
        { icon: '👨‍⚕️', title: 'Para médicos y abogados', desc: 'Dicta notas de caso, resúmenes de pacientes o memos desde tu teléfono, y conviértelos en texto para tus registros. Los archivos se procesan y eliminan al instante.' },
        { icon: '🌍', title: 'Más de 50 idiomas', desc: 'Dicta en español, inglés, francés, alemán, ruso, japonés y muchos más. El idioma se detecta automáticamente; lo puedes cambiar manualmente.' },
      ]}
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
