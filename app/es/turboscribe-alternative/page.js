import ComparisonLayout from '@/components/ComparisonLayout'

const LANGS = {
  'en': 'https://mictoo.com/turboscribe-alternative',
  'fr': 'https://mictoo.com/fr/turboscribe-alternative',
  'de': 'https://mictoo.com/de/turboscribe-alternative',
  'es': 'https://mictoo.com/es/turboscribe-alternative',
  'ru': 'https://mictoo.com/ru/turboscribe-alternative',
  'it': 'https://mictoo.com/it/turboscribe-alternative',
  'pt': 'https://mictoo.com/pt/turboscribe-alternative',
  'pl': 'https://mictoo.com/pl/turboscribe-alternative',
  'ja': 'https://mictoo.com/ja/turboscribe-alternative',
  'x-default': 'https://mictoo.com/turboscribe-alternative',
}

export const metadata = {
  title: 'Alternativa a TurboScribe — Transcripción Whisper gratis, sin registro | Mictoo',
  description: 'TurboScribe es una herramienta popular basada en Whisper, pero exige cuenta y limita a los usuarios gratis a 30 minutos al día. Mictoo es totalmente sin registro y con resumen IA integrado.',
  alternates: { canonical: 'https://mictoo.com/es/turboscribe-alternative', languages: LANGS },
}

export default function EsTurboScribeAlternativePage() {
  return (
    <ComparisonLayout
      badge="Comparativa · TurboScribe · Gratis"
      h1={<>Alternativa a TurboScribe<br /><span className="text-brand-600">Mismo Whisper, sin registro</span></>}
      subtitle="TurboScribe y Mictoo usan ambos OpenAI Whisper, así que la calidad de transcripción es casi idéntica. Las diferencias principales son registro, límites de archivo y resumen IA integrado."
      competitorName="TurboScribe"
      rows={[
        { label: 'Plan gratis',            mictoo: 'Sin tope mensual, 25 MB por archivo', them: '3 archivos / día, 30 min cada uno' },
        { label: 'Requiere cuenta',         mictoo: 'No', them: 'Sí (registro con email)' },
        { label: 'Planes de pago',          mictoo: 'Gratis',  them: '20 $ / mes ilimitado' },
        { label: 'Tamaño archivo (gratis)', mictoo: '25 MB por archivo', them: '~150 MB / 30 min por archivo' },
        { label: 'Tamaño archivo (pago)',   mictoo: 'Igual que gratis',   them: '5 GB / 10 h por archivo' },
        { label: 'Subida por lotes',        mictoo: 'No', them: 'Sí (pago, hasta 50 archivos)' },
        { label: 'Modelo de transcripción', mictoo: 'OpenAI Whisper', them: 'OpenAI Whisper' },
        { label: 'Resumen IA',              mictoo: 'Sí, gratis', them: 'Sí (de pago)' },
        { label: 'Export SRT',              mictoo: 'Sí, gratis', them: 'Sí' },
        { label: 'Historial de transcripciones', mictoo: 'No', them: 'Sí (asociado a la cuenta)' },
      ]}
      whyMictoo={[
        { icon: '🆓', title: 'De verdad sin registro', desc: 'TurboScribe pide un email incluso en el plan gratis. Mictoo no pide nada — suelta archivo, obtén texto. Útil para grabaciones puntuales donde no quieres otra cuenta más.' },
        { icon: '✨', title: 'Resumen IA en el plan gratis', desc: 'Mictoo genera automáticamente un resumen de 2-3 frases, puntos clave y action items tras cada transcripción. TurboScribe deja el resumen IA detrás del muro de pago de 20 $/mes.' },
        { icon: '🔒', title: 'Nada se almacena', desc: 'Sin historial de transcripciones, sin espacio en la nube, sin proyectos. El audio se transmite a Whisper y se descarta al instante. TurboScribe guarda tus transcripciones en tu cuenta.' },
      ]}
      whenToChoose={{
        mictoo: [
          'Quieres cero fricción de registro',
          'Necesitas resumen IA en el plan gratis',
          'Tus archivos pesan menos de 25 MB (o puedes comprimirlos)',
          'Valoras no tener un historial almacenado',
        ],
        them: [
          'Necesitas archivos mayores de 25 MB en el plan gratis',
          'Quieres un historial de todas las transcripciones pasadas',
          'Necesitas subir muchos archivos a la vez (batch)',
          'No te importa pagar 20 $/mes por archivos grandes ilimitados',
        ],
      }}
      faq={[
        { q: '¿La calidad de transcripción es la misma?', a: 'Sí, en esencia. Ambas herramientas usan el modelo Whisper de OpenAI. Las diferencias vienen de cómo segmentan el audio y manejan casos límite, pero la precisión núcleo es comparable.' },
        { q: '¿Por qué Mictoo tiene un límite de archivo más pequeño?', a: 'El límite de 25 MB viene de la API Whisper de OpenAI. TurboScribe maneja archivos más grandes dividiéndolos en sus servidores y juntando los resultados. Estamos trabajando en el mismo enfoque.' },
        { q: '¿Puedo transcribir archivos largos con Mictoo?', a: 'Por ahora los archivos deben caber bajo 25 MB. La guía how-to-compress-audio en nuestro sitio explica tres formas rápidas: extraer la pista de audio, bajar el bitrate o dividir en segmentos.' },
        { q: '¿Mictoo planea añadir cuenta/historial?', a: 'Un historial local (guardado en tu navegador, sin cuenta en el servidor) está en la hoja de ruta. El historial en la nube con registro no está intencionalmente en el producto — entra en conflicto con el posicionamiento sin registro.' },
        { q: '¿Cuál es más rápido?', a: 'TurboScribe anuncia ~30 minutos procesados en menos de un minuto. Mictoo es similar — la mayoría de archivos se transcriben en 15-30 segundos. Ambos parecen casi instantáneos para archivos de menos de 25 minutos.' },
      ]}
      relatedLinks={[
        { href: '/es/descript-alternative', label: 'Alternativa a Descript' },
        { href: '/es/notta-alternative', label: 'Alternativa a Notta' },
        { href: '/es', label: 'Probar Mictoo' },
      ]}
    />
  )
}
