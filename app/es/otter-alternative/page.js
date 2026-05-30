import ComparisonLayout from '@/components/ComparisonLayout'

const LANGS = {
  'en': 'https://mictoo.com/otter-alternative',
  'fr': 'https://mictoo.com/fr/otter-alternative',
  'de': 'https://mictoo.com/de/otter-alternative',
  'es': 'https://mictoo.com/es/otter-alternative',
  'ru': 'https://mictoo.com/ru/otter-alternative',
  'it': 'https://mictoo.com/it/otter-alternative',
  'pt': 'https://mictoo.com/pt/otter-alternative',
  'pl': 'https://mictoo.com/pl/otter-alternative',
  'ja': 'https://mictoo.com/ja/otter-alternative',
  'ko': 'https://mictoo.com/ko/otter-alternative',
  'x-default': 'https://mictoo.com/otter-alternative',
}

export const metadata = {
  title: 'Alternativa a Otter — Transcribe grabaciones, no reuniones en vivo | Mictoo',
  description: 'Otter está pensado para transcripción en directo de reuniones con subtítulos a tiempo real. Mictoo transcribe las grabaciones que ya tienes — gratis, sin registro, sin bot. Basado en OpenAI Whisper.',
  alternates: { canonical: 'https://mictoo.com/es/otter-alternative', languages: LANGS },

  openGraph: {
    title: "Alternativa a Otter — Transcribe grabaciones, no reuniones en vivo | Mictoo",
    description: "Otter está pensado para transcripción en directo de reuniones con subtítulos a tiempo real. Mictoo transcribe las grabaciones que ya tienes — gratis, sin registro, sin bot. Basado en OpenAI Whisper.",
    url: "https://mictoo.com/es/otter-alternative",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alternativa a Otter — Transcribe grabaciones, no reuniones en vivo | Mictoo",
    description: "Otter está pensado para transcripción en directo de reuniones con subtítulos a tiempo real. Mictoo transcribe las grabaciones que ya tienes — gratis, sin registro, sin bot. Basado en OpenAI Whisper.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function EsOtterAlternativePage() {
  return (
    <ComparisonLayout
      badge="Comparativa · Otter · Gratis"
      h1={<>Alternativa a Otter<br /><span className="text-brand-600">Para grabaciones, no reuniones en directo</span></>}
      subtitle="Otter es famoso por la transcripción en directo de reuniones — los subtítulos aparecen mientras la gente habla. Mictoo resuelve la otra mitad del problema: una grabación que ya tienes, transcrita a texto en segundos. Gratis, sin registro, OpenAI Whisper."
      competitorName="Otter"
      rows={[
        { label: 'Plan gratis',            mictoo: 'Sin tope mensual, 25 MB por archivo', them: '300 minutos / mes, 30 min por grabación' },
        { label: 'Requiere cuenta',         mictoo: 'No', them: 'Sí (registro con email)' },
        { label: 'Planes de pago',          mictoo: 'Gratis',  them: '8,33 - 30 $ / usuario / mes' },
        { label: 'Transcripción en vivo',   mictoo: 'No',  them: 'Sí (subtítulos en tiempo real)' },
        { label: 'Subida de grabación',     mictoo: 'Sí (suelta archivo)', them: 'Sí (import de pago)' },
        { label: 'Resumen IA',              mictoo: 'Sí, gratis', them: 'Sí (de pago)' },
        { label: 'Modelo de transcripción', mictoo: 'OpenAI Whisper', them: 'Propietario' },
        { label: 'Etiquetas de hablantes',  mictoo: 'Edición manual', them: 'Automático (de pago)' },
        { label: 'Idiomas',                 mictoo: '50+',  them: '3 (inglés, francés, español)' },
      ]}
      whyMictoo={[
        { icon: '🌍', title: '50+ idiomas frente a 3', desc: 'Otter solo soporta inglés, francés y español. Mictoo usa Whisper, que maneja más de 50 idiomas con detección automática — alemán, ruso, japonés, árabe, ucraniano y más.' },
        { icon: '🆓', title: 'Sin tope de 300 minutos', desc: 'El plan gratis de Otter te limita a 300 minutos al mes. Mictoo no tiene cuota de minutos — solo el límite de 25 MB por archivo.' },
        { icon: '🚫', title: 'Sin bot en tus reuniones', desc: 'El valor de Otter es el bot en vivo que se une a las llamadas. Si prefieres grabar localmente y no tener un bot IA en tu reunión, Mictoo encaja con ese flujo.' },
      ]}
      whenToChoose={{
        mictoo: [
          'Tienes una grabación y quieres una transcripción rápida y gratis',
          'Trabajas con audio no en inglés (ruso, alemán, japonés, etc.)',
          'No quieres un bot IA en tus llamadas',
          'Transcribes podcasts, clases, notas de voz — no solo reuniones',
        ],
        them: [
          'Quieres subtítulos en directo durante reuniones',
          'Estás en un equipo que necesita notas de reunión compartidas',
          'La integración del Otter Assistant con Zoom/Meet es crítica',
          'La diarización de hablantes es un requisito (plan de pago)',
        ],
      }}
      faq={[
        { q: '¿Mictoo hace transcripción en directo como Otter?', a: 'No. Mictoo trabaja solo sobre archivos grabados. Para transcripción en tiempo real durante una reunión, usa Otter, los subtítulos integrados de Zoom o los de Google Meet. Usa Mictoo después si quieres un archivo de transcripción pulido.' },
        { q: '¿Mictoo reemplaza a Otter para podcasters?', a: 'Para transcripción de podcast específicamente, sí. Suelta tu MP3/M4A, obtén la transcripción, descárgala como .txt o .srt. El valor de Otter es la captura en vivo; el de Mictoo, la transcripción rápida post-grabación.' },
        { q: '¿Y los resúmenes de reunión?', a: 'Ambas herramientas generan resúmenes IA con puntos clave y action items. Otter los pone en planes de pago; Mictoo los ofrece gratis en cada transcripción.' },
        { q: '¿Mictoo es preciso con audio no en inglés?', a: 'Sí — OpenAI Whisper es uno de los modelos de voz multilingües más fuertes disponibles. Otter está limitado a inglés, francés y español; Mictoo maneja 50+ idiomas con detección automática.' },
        { q: '¿Mictoo tiene app móvil?', a: 'No hay app nativa, pero el sitio funciona en navegadores móviles. Abre mictoo.com en iPhone o Android, elige un archivo del dispositivo y obtén la transcripción.' },
      ]}
      relatedLinks={[
        { href: '/es/fireflies-alternative', label: 'Alternativa a Fireflies' },
        { href: '/es/meeting-transcription', label: 'Transcripción de reuniones' },
        { href: '/es/voice-memo-to-text', label: 'Nota de voz a texto' },
        { href: '/es', label: 'Probar Mictoo' },
      ]}
    />
  )
}
