import ComparisonLayout from '@/components/ComparisonLayout'

const LANGS = {
  'en': 'https://mictoo.com/descript-alternative',
  'fr': 'https://mictoo.com/fr/descript-alternative',
  'de': 'https://mictoo.com/de/descript-alternative',
  'es': 'https://mictoo.com/es/descript-alternative',
  'ru': 'https://mictoo.com/ru/descript-alternative',
  'it': 'https://mictoo.com/it/descript-alternative',
  'pt': 'https://mictoo.com/pt/descript-alternative',
  'x-default': 'https://mictoo.com/descript-alternative',
}

export const metadata = {
  title: 'Alternativa a Descript — Transcripción gratis sin registro | Mictoo',
  description: '¿Buscas una alternativa a Descript solo para transcripción? Mictoo te da transcripción IA gratis sin registro, basada en OpenAI Whisper. Sin editor, sin suscripción.',
  alternates: { canonical: 'https://mictoo.com/es/descript-alternative', languages: LANGS },
}

export default function EsDescriptAlternativePage() {
  return (
    <ComparisonLayout
      badge="Comparativa · Descript · Gratis"
      h1={<>Alternativa a Descript<br /><span className="text-brand-600">Transcripción gratis sin el editor</span></>}
      subtitle="Descript es un editor completo de audio y vídeo con transcripción integrada. Si solo necesitas la parte de transcripción, Mictoo es la opción gratis, sin registro, basada en OpenAI Whisper."
      competitorName="Descript"
      rows={[
        { label: 'Plan gratis',            mictoo: 'Sin tope mensual, 25 MB por archivo', them: '1 hora de transcripción / mes' },
        { label: 'Requiere cuenta',         mictoo: 'No', them: 'Sí (registro con email)' },
        { label: 'Planes de pago',          mictoo: 'Gratis',  them: '12-24 $ / mes' },
        { label: 'Editor de audio/vídeo',  mictoo: 'No',  them: 'Sí (completo)' },
        { label: 'Modelo de transcripción',mictoo: 'OpenAI Whisper', them: 'Propietario + opción Whisper' },
        { label: 'Resumen IA',              mictoo: 'Sí, gratis', them: 'Sí (de pago)' },
        { label: 'Export SRT',              mictoo: 'Sí, gratis', them: 'Sí (de pago)' },
        { label: 'Etiquetas de hablantes',  mictoo: 'Edición manual', them: 'Automático' },
        { label: 'Idiomas',                 mictoo: '50+',  them: '20+' },
      ]}
      whyMictoo={[
        { icon: '🆓', title: 'Gratis, sin registro', desc: 'Suelta un archivo y obtén una transcripción sin cuenta, ni tarjeta, ni email. Descript pide registro incluso en el plan gratis.' },
        { icon: '⚡', title: 'Más rápido para casos puntuales', desc: 'Sin app que instalar, sin editor que aprender. Una página, un drop, resultados en segundos. Diseñado para transcripción rápida, no para producción completa.' },
        { icon: '🔒', title: 'Privacidad primero', desc: 'El audio se transmite directamente a la API Whisper de OpenAI y no se almacena en los servidores de Mictoo. Sin proyectos, sin biblioteca en la nube, sin espacio de equipo.' },
      ]}
      whenToChoose={{
        mictoo: [
          'Solo necesitas transcripción, no edición',
          'Quieres algo gratis sin registro',
          'Transcribes una entrevista, podcast o reunión puntual',
          'No quieres una app de escritorio ni un espacio de equipo',
        ],
        them: [
          'Produces podcasts o vídeos y necesitas un editor real',
          'Quieres el flujo "editar audio editando texto"',
          'Necesitas etiquetas de hablantes automáticas siempre',
          'Trabajas en equipo con una biblioteca compartida de proyectos',
        ],
      }}
      faq={[
        { q: '¿Mictoo reemplaza completamente a Descript?', a: 'No para edición. Descript es un editor de audio y vídeo con transcripción integrada — Mictoo es solo la parte de transcripción. Si solo necesitas texto o subtítulos de una grabación, Mictoo reemplaza ese flujo gratis.' },
        { q: '¿La calidad de transcripción es la misma?', a: 'Ambas herramientas pueden usar OpenAI Whisper. Mictoo usa Whisper exclusivamente, así que la precisión es comparable. Descript ofrece un modelo propietario adicional en algunos planes.' },
        { q: '¿Mictoo tiene etiquetas de hablantes?', a: 'Mictoo entrega una única transcripción sin etiquetas automáticas en el plan gratis. Puedes añadir Hablante 1 / Hablante 2 manualmente en el editor del navegador antes de descargar. Descript las pone automáticamente.' },
        { q: '¿Puedo editar la transcripción en Mictoo?', a: 'Sí — la transcripción aparece en un cuadro de texto editable. Puedes corregir nombres, puntuación o saltos de párrafo antes de copiar o descargar como .txt o .srt.' },
        { q: '¿Y el export a Word o DOCX?', a: 'Mictoo exporta actualmente .txt y .srt. Copia la transcripción y pégala en Word para un DOCX rápido. El export DOCX nativo está en la hoja de ruta.' },
      ]}
      relatedLinks={[
        { href: '/es/turboscribe-alternative', label: 'Alternativa a TurboScribe' },
        { href: '/es/otter-alternative', label: 'Alternativa a Otter' },
        { href: '/es/notta-alternative', label: 'Alternativa a Notta' },
        { href: '/es', label: 'Probar Mictoo' },
      ]}
    />
  )
}
