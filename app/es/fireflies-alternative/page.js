import ComparisonLayout from '@/components/ComparisonLayout'

const LANGS = {
  'en': 'https://mictoo.com/fireflies-alternative',
  'fr': 'https://mictoo.com/fr/fireflies-alternative',
  'de': 'https://mictoo.com/de/fireflies-alternative',
  'es': 'https://mictoo.com/es/fireflies-alternative',
  'ru': 'https://mictoo.com/ru/fireflies-alternative',
  'it': 'https://mictoo.com/it/fireflies-alternative',
  'pt': 'https://mictoo.com/pt/fireflies-alternative',
  'x-default': 'https://mictoo.com/fireflies-alternative',
}

export const metadata = {
  title: 'Alternativa a Fireflies — Transcribe reuniones sin bot | Mictoo',
  description: 'Fireflies se une a tus reuniones como un bot para grabar y transcribir. Mictoo transcribe las grabaciones que ya tienes — sin bot, sin registro, sin OAuth. Gratis con OpenAI Whisper.',
  alternates: { canonical: 'https://mictoo.com/es/fireflies-alternative', languages: LANGS },
}

export default function EsFirefliesAlternativePage() {
  return (
    <ComparisonLayout
      badge="Comparativa · Fireflies · Gratis"
      h1={<>Alternativa a Fireflies<br /><span className="text-brand-600">Transcribe reuniones sin bot</span></>}
      subtitle="Fireflies se une a tus reuniones como un bot IA para grabar y transcribir en tiempo real. Mictoo funciona al revés — sube la grabación que ya tienes y obtén la transcripción. Sin bot, sin integración con calendario, sin registro."
      competitorName="Fireflies"
      rows={[
        { label: 'Plan gratis',            mictoo: 'Sin tope mensual, 25 MB por archivo', them: '800 minutos / usuario / mes' },
        { label: 'Requiere cuenta',         mictoo: 'No', them: 'Sí (email + OAuth)' },
        { label: 'Planes de pago',          mictoo: 'Gratis',  them: '10-19 $ / usuario / mes' },
        { label: 'Método de grabación',     mictoo: 'Subes la grabación tú', them: 'El bot se une a la reunión en directo' },
        { label: 'Transcripción en vivo',   mictoo: 'No',  them: 'Sí (durante la llamada)' },
        { label: 'Integración con calendario', mictoo: 'No',  them: 'Google / Outlook / Zoom' },
        { label: 'Resumen IA',              mictoo: 'Sí, gratis', them: 'Sí (de pago)' },
        { label: 'Integración CRM',         mictoo: 'No',  them: 'Salesforce, HubSpot, etc.' },
        { label: 'Modelo de transcripción', mictoo: 'OpenAI Whisper', them: 'Propietario' },
      ]}
      whyMictoo={[
        { icon: '🚫', title: 'Sin bot en tus reuniones', desc: 'A algunos participantes les incomoda un bot IA grabando la llamada. Con Mictoo grabas localmente con Zoom/Meet/Teams y transcribes después.' },
        { icon: '🆓', title: 'Sin registro, sin cuota', desc: 'El plan gratis de Fireflies te limita a 800 minutos por usuario al mes y exige OAuth. Mictoo funciona sin cuenta y sin contar minutos al mes.' },
        { icon: '🌍', title: 'Mejor para audio no-inglés', desc: 'OpenAI Whisper maneja más de 50 idiomas con alta precisión. Fireflies está optimizado para llamadas de negocio en inglés y es más débil en idiomas como ruso, ucraniano, polaco o coreano.' },
      ]}
      whenToChoose={{
        mictoo: [
          'Grabas reuniones tú mismo y quieres una transcripción después',
          'No quieres un bot IA uniéndose a tus llamadas',
          'Necesitas transcripción para reuniones no en inglés',
          'Quieres una opción gratis y sin registro para grabaciones puntuales',
        ],
        them: [
          'Quieres transcripción en directo durante la reunión',
          'Necesitas logging en CRM de conversaciones de ventas',
          'Tu equipo quiere grabación automática en todas las llamadas',
          'Necesitas analítica de conversación (tiempo de habla, sentimiento, etc.)',
        ],
      }}
      faq={[
        { q: '¿Mictoo puede unirse a mi reunión de Zoom o Teams como Fireflies?', a: 'No. Mictoo no se une a reuniones. Graba la llamada con la grabación integrada de Zoom/Teams/Meet, y luego sube el archivo. Así evitas el bot en tus reuniones y las dudas de privacidad asociadas.' },
        { q: '¿Cómo consigo una grabación para subir?', a: 'En Zoom: activa Local Recording o Cloud Recording en tu reunión. Tras la reunión, descarga el MP4 o M4A de Zoom y suéltalo en Mictoo.' },
        { q: '¿Mictoo hace action items y resumen como Fireflies?', a: 'Sí. Tras la transcripción, el Resumen IA de Mictoo muestra un resumen de 2-3 frases, puntos clave y action items — todo en el plan gratis. Fireflies ofrece funciones similares solo en planes de pago.' },
        { q: '¿Y la analítica de reuniones?', a: 'Mictoo no hace tiempo de habla, sentimiento ni analítica de hablantes. Si necesitas conversation intelligence para coaching de ventas, Fireflies (o Gong) encaja mejor.' },
        { q: '¿Es Mictoo seguro para reuniones confidenciales?', a: 'Los archivos se transmiten directamente a la API Whisper de OpenAI y se descartan. Mictoo no almacena nada. Según la política de datos de la API de OpenAI, tu audio no se usa para entrenar y se elimina tras un máximo de 30 días de monitorización anti-abuso.' },
      ]}
      relatedLinks={[
        { href: '/es/otter-alternative', label: 'Alternativa a Otter' },
        { href: '/es/meeting-transcription', label: 'Transcripción de reuniones' },
        { href: '/es/zoom-transcription', label: 'Transcripción de Zoom' },
        { href: '/es', label: 'Probar Mictoo' },
      ]}
    />
  )
}
