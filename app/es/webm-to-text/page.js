import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/webm-to-text',
  'fr': 'https://mictoo.com/fr/webm-to-text',
  'de': 'https://mictoo.com/de/webm-to-text',
  'es': 'https://mictoo.com/es/webm-to-text',
  'ru': 'https://mictoo.com/ru/webm-to-text',
  'it': 'https://mictoo.com/it/webm-to-text',
  'pt': 'https://mictoo.com/pt/webm-to-text',
  'pl': 'https://mictoo.com/pl/webm-to-text',
  'x-default': 'https://mictoo.com/webm-to-text',
}

export const metadata = {
  title: 'WEBM a texto — Transcripción de WEBM gratis online | Mictoo',
  description: 'Convierte archivos de audio y vídeo WEBM a texto gratis online. Sube cualquier grabación WEBM y obtén una transcripción precisa al instante. Sin registro.',
  alternates: { canonical: 'https://mictoo.com/es/webm-to-text', languages: LANGS },
}

export default function EsWebmToTextPage() {
  return (
    <LandingLayout
      badge="WEBM · Grabaciones del navegador · Gratis"
      h1={<>WEBM a texto<br /><span className="text-brand-600">Transcripción de WEBM gratis online</span></>}
      subtitle="Sube cualquier archivo de audio o vídeo WEBM y obtén una transcripción precisa en segundos. WEBM lo usan habitualmente los navegadores, las grabadoras de pantalla y las herramientas de videollamada. Sin cuenta."
      defaultLanguage="es"
      features={[
        { icon: '🖥️', title: 'Navegador y pantalla', desc: 'WEBM es el formato por defecto para grabaciones de pantalla de Chrome y Firefox, clips de Loom y grabaciones WebRTC.' },
        { icon: '🎬', title: 'WEBM audio y vídeo', desc: 'Soporta tanto WEBM de solo audio como WEBM de vídeo. El audio se extrae automáticamente.' },
        { icon: '📄', title: 'Export .txt y .srt', desc: 'Descarga la transcripción como texto simple o como archivo SRT con marcas de tiempo.' },
      ]}
      faq={[
        { q: '¿Cómo convierto WEBM a texto?', a: 'Sube tu archivo WEBM arriba. La transcripción se genera automáticamente y aparece en segundos.' },
        { q: '¿La conversión WEBM a texto es gratis?', a: 'Sí, completamente gratis. Sin cuenta ni registro.' },
        { q: '¿Puedo transcribir grabaciones de pantalla de Chrome?', a: 'Sí. La grabadora integrada de Chrome guarda el vídeo como WEBM. Sube el archivo directamente para obtener la transcripción.' },
        { q: '¿Cuál es el tamaño máximo del WEBM?', a: 'Hasta 25 MB. Para grabaciones más grandes, extrae primero la pista de audio para reducir el tamaño.' },
      ]}
      relatedLinks={[
        { href: '/es/transcribe-video-to-text', label: 'Vídeo a texto' },
        { href: '/es/wav-to-text', label: 'WAV a texto' },
        { href: '/es', label: 'Todos los formatos' },
      ]}
    />
  )
}
