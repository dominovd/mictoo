import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/voice-memo-to-text',
  'fr': 'https://mictoo.com/fr/voice-memo-to-text',
  'de': 'https://mictoo.com/de/voice-memo-to-text',
  'es': 'https://mictoo.com/es/voice-memo-to-text',
  'ru': 'https://mictoo.com/ru/voice-memo-to-text',
  'it': 'https://mictoo.com/it/voice-memo-to-text',
  'pt': 'https://mictoo.com/pt/voice-memo-to-text',
  'pl': 'https://mictoo.com/pl/voice-memo-to-text',
  'x-default': 'https://mictoo.com/voice-memo-to-text',
}

export const metadata = {
  title: 'Nota de voz a texto — Transcribe Voice Memos del iPhone gratis | Mictoo',
  description: 'Convierte notas de voz del iPhone y grabaciones de Android a texto gratis. Soporta M4A y MP3. Sin registro, sin app. Transcripción IA precisa.',
  alternates: { canonical: 'https://mictoo.com/es/voice-memo-to-text', languages: LANGS },
}

export default function EsVoiceMemoPage() {
  return (
    <LandingLayout
      badge="iPhone · Android · Gratis"
      h1={<>Nota de voz a texto<br /><span className="text-brand-600">Transcripción gratis online</span></>}
      subtitle="Sube tu nota de voz del iPhone o grabación de Android y obtén una transcripción precisa en segundos. Sin registro, sin app que instalar."
      defaultLanguage="es"
      features={[
        { icon: '📱', title: 'iPhone y Android', desc: 'Las Voice Memos del iPhone se exportan como .m4a — totalmente soportadas. Las grabadoras de Android exportan en .m4a, .mp3 o .wav — todos soportados.' },
        { icon: '🧠', title: 'Ideal para notas e ideas', desc: 'Convierte tus notas de voz, sesiones de brainstorming y recordatorios en texto buscable para pegar en Notion, Obsidian o tu editor favorito.' },
        { icon: '🆓', title: '100% gratis', desc: 'Sin suscripción, sin compras en la app, sin marca de agua. Sin tope mensual — sube una nota de voz cuando necesites una transcripción.' },
      ]}
      faq={[
        { q: '¿Cómo paso mi nota de voz del iPhone al ordenador?', a: 'Abre la app Voice Memos, toca la nota, luego "…" y "Compartir" → "Guardar en Archivos" o AirDrop a tu Mac. Después suelta el archivo .m4a en Mictoo en el ordenador.' },
        { q: '¿Puedo transcribir directamente en el iPhone?', a: 'Sí. Abre mictoo.com en Safari del iPhone, toca el área de subida y selecciona una nota de voz desde la app Archivos. La transcripción aparece en segundos y puedes copiarla o descargarla como .txt.' },
        { q: '¿En qué formato graba Android las notas de voz?', a: 'La mayoría de teléfonos Android graban en .m4a o .mp3 según la app. Ambos formatos son compatibles. Algunas apps usan .amr — conviértelo primero a .m4a con cualquier convertidor gratuito.' },
        { q: '¿Es privada mi grabación de voz?', a: 'Sí. Los archivos se envían al motor IA únicamente para la transcripción y nunca se almacenan en nuestros servidores. La transcripción permanece en tu navegador y es solo tuya.' },
        { q: '¿Y si mi nota de voz supera 25 MB?', a: 'Las Voice Memos del iPhone ocupan ~1 MB por minuto en calidad por defecto — 25 minutos caben en 25 MB. Para notas más largas, cambia la calidad de Voice Memos a "Comprimido" en Ajustes → Notas de Voz, o divide la grabación.' },
      ]}
      relatedLinks={[
        { href: '/es', label: 'Todos los formatos' },
        { href: '/es/meeting-transcription', label: 'Transcripción de reuniones' },
        { href: '/es/interview-transcription', label: 'Transcripción de entrevistas' },
      ]}
    />
  )
}
