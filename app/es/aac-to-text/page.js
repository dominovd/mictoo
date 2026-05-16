import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/aac-to-text',
  'fr': 'https://mictoo.com/fr/aac-to-text',
  'de': 'https://mictoo.com/de/aac-to-text',
  'es': 'https://mictoo.com/es/aac-to-text',
  'ru': 'https://mictoo.com/ru/aac-to-text',
  'it': 'https://mictoo.com/it/aac-to-text',
  'x-default': 'https://mictoo.com/aac-to-text',
}

export const metadata = {
  title: 'AAC a texto — Transcripción de audio AAC gratis online | Mictoo',
  description: 'Transcribe archivos de audio AAC a texto gratis. Arrastra tu .aac, .m4a u otro archivo codificado en AAC y obtén una transcripción precisa en segundos.',
  alternates: { canonical: 'https://mictoo.com/es/aac-to-text', languages: LANGS },
}

export default function EsAacToTextPage() {
  return (
    <LandingLayout
      badge="AAC · M4A · Gratis"
      h1={<>AAC a texto<br /><span className="text-brand-600">Transcripción de AAC gratis online</span></>}
      subtitle="Suelta tu archivo de audio AAC y obtén una transcripción precisa en segundos. Funciona con .aac y .m4a (AAC dentro de un contenedor MP4). Sin registro."
      defaultLanguage="es"
      features={[
        { icon: '🎧', title: 'Soporte nativo de AAC', desc: 'AAC es el códec de audio por defecto en dispositivos Apple, YouTube y la mayoría de servicios de streaming. Mictoo acepta .aac y .m4a directamente sin conversión.' },
        { icon: '🎯', title: 'Alta precisión', desc: 'AAC mantiene alta calidad en archivos pequeños — perfecto para transcripción IA. La mayoría de grabaciones claras se transcriben con 95%+ de precisión.' },
        { icon: '📥', title: 'Editar y exportar', desc: 'Revisa la transcripción en el navegador, corrige nombres y puntuación, luego descarga como .txt simple o subtítulos .srt.' },
      ]}
      faq={[
        { q: '¿Qué es un archivo AAC?', a: 'AAC (Advanced Audio Coding) es un formato de compresión de audio con pérdidas usado por iTunes, Apple Music, YouTube y la mayoría de apps de podcast. Los archivos llevan extensión .aac o .m4a. AAC ofrece mejor calidad que MP3 al mismo bitrate.' },
        { q: '¿Cuál es la diferencia entre .aac y .m4a?', a: 'Ambos contienen audio codificado en AAC. .aac es el flujo de audio puro; .m4a lo envuelve en un contenedor MP4 (así lo guardan iTunes y las notas de voz del iPhone). Mictoo soporta ambos directamente.' },
        { q: '¿Cómo convierto AAC a texto gratis?', a: 'Arrastra tu archivo AAC al área de subida de arriba. Mictoo lo transcribe automáticamente con IA y muestra el texto en segundos. Cópialo o descárgalo como .txt.' },
        { q: '¿Cuál es el tamaño máximo del AAC?', a: 'Hasta 25 MB por subida. AAC a 128 kbps da unos 25 minutos de audio en 25 MB; a 64 kbps casi una hora. Para archivos más largos, baja el bitrate o divide en segmentos.' },
        { q: '¿Puedo obtener marcas de tiempo para una transcripción AAC?', a: 'Sí. Tras la transcripción puedes descargar un archivo .srt con marcas precisas — útil para sincronizar la transcripción con el audio o vídeo original.' },
      ]}
      relatedLinks={[
        { href: '/es/m4a-to-text', label: 'M4A a texto' },
        { href: '/es/transcribe-mp3-to-text', label: 'MP3 a texto' },
        { href: '/es', label: 'Todos los formatos' },
      ]}
    />
  )
}
