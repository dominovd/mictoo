import ComparisonLayout from '@/components/ComparisonLayout'

const LANGS = {
  'en': 'https://mictoo.com/notta-alternative',
  'fr': 'https://mictoo.com/fr/notta-alternative',
  'de': 'https://mictoo.com/de/notta-alternative',
  'es': 'https://mictoo.com/es/notta-alternative',
  'ru': 'https://mictoo.com/ru/notta-alternative',
  'it': 'https://mictoo.com/it/notta-alternative',
  'pt': 'https://mictoo.com/pt/notta-alternative',
  'pl': 'https://mictoo.com/pl/notta-alternative',
  'ja': 'https://mictoo.com/ja/notta-alternative',
  'ko': 'https://mictoo.com/ko/notta-alternative',
  'x-default': 'https://mictoo.com/notta-alternative',
}

export const metadata = {
  title: 'Alternativa a Notta — Transcripción gratis sin límites mensuales | Mictoo',
  description: 'Notta limita a los usuarios gratis a 120 minutos al mes y cada transcripción a 3 minutos. Mictoo es gratis, sin registro, sin cuota mensual de minutos — basado en OpenAI Whisper.',
  alternates: { canonical: 'https://mictoo.com/es/notta-alternative', languages: LANGS },
}

export default function EsNottaAlternativePage() {
  return (
    <ComparisonLayout
      badge="Comparativa · Notta · Gratis"
      h1={<>Alternativa a Notta<br /><span className="text-brand-600">Sin tope mensual de 120 minutos</span></>}
      subtitle="Notta es una herramienta de transcripción todo-en-uno popular, pero su plan gratis te limita a 120 minutos al mes y 3 minutos por archivo. Mictoo no tiene cuota mensual y solo un límite por archivo — gratis, sin registro."
      competitorName="Notta"
      rows={[
        { label: 'Plan gratis',            mictoo: 'Sin tope mensual, 25 MB por archivo', them: '120 min/mes, 3 min por archivo' },
        { label: 'Requiere cuenta',         mictoo: 'No', them: 'Sí (registro con email)' },
        { label: 'Planes de pago',          mictoo: 'Gratis',  them: '9 - 25 $ / usuario / mes' },
        { label: 'Duración por archivo',    mictoo: '~25 min (límite de tamaño)', them: '3 min (gratis) / 5 h (de pago)' },
        { label: 'Transcripción en vivo',   mictoo: 'No',  them: 'Sí (Notta Bot en reuniones)' },
        { label: 'Resumen IA',              mictoo: 'Sí, gratis', them: 'Sí (de pago)' },
        { label: 'Modelo de transcripción', mictoo: 'OpenAI Whisper', them: 'Propietario' },
        { label: 'Etiquetas de hablantes',  mictoo: 'Edición manual', them: 'Automático (de pago)' },
        { label: 'Idiomas',                 mictoo: '50+',  them: '100+ (planes de pago)' },
      ]}
      whyMictoo={[
        { icon: '⏳', title: 'Sin límite de 3 minutos por archivo', desc: 'El límite gratis de 3 minutos por archivo de Notta es demasiado corto para un podcast, una clase o una entrevista. Mictoo maneja archivos de audio de ~25 minutos gratis.' },
        { icon: '🆓', title: 'Sin cuota mensual de minutos', desc: 'Notta cuenta cada minuto contra una cuota de 120 min/mes. Mictoo solo limita el tamaño individual de archivo — suelta un archivo o varios, sin contar minutos.' },
        { icon: '✨', title: 'Resumen IA en el plan gratis', desc: 'Notta pone los resúmenes IA en planes de pago. Mictoo genera un resumen con puntos clave y action items gratis, en cada transcripción.' },
      ]}
      whenToChoose={{
        mictoo: [
          'Necesitas transcribir gratis archivos más largos de 3 minutos',
          'No quieres chocar con el tope mensual de 120 minutos',
          'Quieres resumen IA sin pagar',
          'No necesitas diarización automática de hablantes',
        ],
        them: [
          'Necesitas que un Notta Bot se una a tus reuniones en vivo',
          'Necesitas etiquetas de hablantes automáticas',
          'Quieres un flujo integrado con CRM',
          'No te importa pagar por funciones ilimitadas',
        ],
      }}
      faq={[
        { q: '¿Es Mictoo realmente gratis sin cuota de minutos?', a: 'Sí. El único límite es el tamaño por archivo (25 MB, que da unos 25 minutos a un bitrate típico de podcast). No hay seguimiento mensual de minutos ni límite del número de archivos.' },
        { q: '¿Por qué Notta limita tanto a los usuarios gratis?', a: 'Notta usa un modelo freemium donde la capa gratis está limitada a propósito para incentivar el pago. El modelo de Mictoo es con anuncios, así que la capa gratis es generosa por diseño.' },
        { q: '¿Cómo gana dinero Mictoo si es gratis?', a: 'Anuncios display (Google AdSense), mostrados en el estado de carga mientras el archivo se transcribe. La transcripción y la zona de subida no llevan anuncios.' },
        { q: '¿Mictoo soporta transcripción en vivo?', a: 'No — Mictoo trabaja solo sobre archivos grabados. Para captura en directo usa los subtítulos integrados de tu plataforma (Zoom, Google Meet, Teams) y luego sube la grabación a Mictoo para una transcripción pulida.' },
        { q: '¿Qué idiomas soporta Mictoo?', a: 'OpenAI Whisper maneja 50+ idiomas con detección automática — inglés, español, francés, alemán, ruso, ucraniano, japonés, chino, árabe, hindi, coreano y muchos más. No hace falta seleccionar idioma salvo que la detección se equivoque.' },
      ]}
      relatedLinks={[
        { href: '/es/turboscribe-alternative', label: 'Alternativa a TurboScribe' },
        { href: '/es/otter-alternative', label: 'Alternativa a Otter' },
        { href: '/es/podcast-transcription', label: 'Transcripción de podcast' },
        { href: '/es', label: 'Probar Mictoo' },
      ]}
    />
  )
}
