import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/flac-to-text',
  'fr': 'https://mictoo.com/fr/flac-to-text',
  'de': 'https://mictoo.com/de/flac-to-text',
  'es': 'https://mictoo.com/es/flac-to-text',
  'ru': 'https://mictoo.com/ru/flac-to-text',
  'it': 'https://mictoo.com/it/flac-to-text',
  'x-default': 'https://mictoo.com/flac-to-text',
}

export const metadata = {
  title: 'FLAC a texto — Transcripción de audio FLAC gratis online | Mictoo',
  description: 'Convierte archivos FLAC a texto gratis online. Sube cualquier grabación FLAC y obtén una transcripción precisa en segundos. Sin registro.',
  alternates: { canonical: 'https://mictoo.com/es/flac-to-text', languages: LANGS },
}

export default function EsFlacToTextPage() {
  return (
    <LandingLayout
      badge="FLAC · Sin pérdidas · Gratis"
      h1={<>FLAC a texto<br /><span className="text-brand-600">Transcripción de FLAC gratis online</span></>}
      subtitle="Sube cualquier archivo de audio FLAC y conviértelo a texto al instante. La calidad sin pérdidas del FLAC asegura excelente precisión de transcripción. Sin cuenta."
      defaultLanguage="es"
      features={[
        { icon: '🎵', title: 'Calidad de audio sin pérdidas', desc: 'Los archivos FLAC conservan toda la calidad del audio, lo que ayuda a la transcripción IA a alcanzar la máxima precisión.' },
        { icon: '⚡', title: 'Resultados al instante', desc: 'La mayoría de archivos FLAC se transcriben en menos de 30 segundos, sea cual sea la calidad o profundidad de bits.' },
        { icon: '📄', title: 'Export .txt y .srt', desc: 'Descarga la transcripción como texto simple o como archivo SRT con marcas de tiempo.' },
      ]}
      faq={[
        { q: '¿Cómo convierto un archivo FLAC a texto?', a: 'Sube tu archivo FLAC con la herramienta de arriba. La IA lo transcribe y muestra el texto en segundos.' },
        { q: '¿El audio FLAC se transcribe con más precisión que MP3?', a: 'La calidad sin pérdidas del FLAC puede mejorar marginalmente la precisión en audios de volumen bajo o complejos, frente a formatos muy comprimidos.' },
        { q: '¿La conversión FLAC a texto es gratis?', a: 'Sí, completamente gratis. Sin cuenta ni registro.' },
        { q: '¿Cuál es el tamaño máximo del FLAC?', a: 'Hasta 25 MB. Los archivos FLAC son grandes por su compresión sin pérdidas — considera convertir a un formato con pérdidas si tu archivo supera el límite.' },
      ]}
      relatedLinks={[
        { href: '/es/wav-to-text', label: 'WAV a texto' },
        { href: '/es/transcribe-mp3-to-text', label: 'MP3 a texto' },
        { href: '/es', label: 'Todos los formatos' },
      ]}
    />
  )
}
