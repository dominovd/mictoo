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
  'ja': 'https://mictoo.com/ja/webm-to-text',
  'ko': 'https://mictoo.com/ko/webm-to-text',
  'x-default': 'https://mictoo.com/webm-to-text',
}

export const metadata = {
  title: 'WEBM a texto — Transcripción de WEBM gratis online | Mictoo',
  description: 'Convierte archivos de audio y vídeo WEBM a texto gratis online. Sube cualquier grabación WEBM y obtén una transcripción precisa al instante. Sin registro.',
  alternates: { canonical: 'https://mictoo.com/es/webm-to-text', languages: LANGS },

  openGraph: {
    title: "WEBM a texto — Transcripción de WEBM gratis online | Mictoo",
    description: "Convierte archivos de audio y vídeo WEBM a texto gratis online. Sube cualquier grabación WEBM y obtén una transcripción precisa al instante. Sin registro.",
    url: "https://mictoo.com/es/webm-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "WEBM a texto — Transcripción de WEBM gratis online | Mictoo",
    description: "Convierte archivos de audio y vídeo WEBM a texto gratis online. Sube cualquier grabación WEBM y obtén una transcripción precisa al instante. Sin registro.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function EsWebmToTextPage() {
  return (
    <LandingLayout
      badge="WEBM · Grabaciones del navegador · Gratis"
      h1={<>WEBM a texto<br /><span className="text-brand-600">Transcripción de WEBM gratis online</span></>}
      subtitle="Sube cualquier archivo de audio o vídeo WEBM y obtén una transcripción precisa en segundos. WEBM lo usan habitualmente los navegadores, las grabadoras de pantalla y las herramientas de videollamada. Sin cuenta."
      defaultLanguage="es"
      valueBlock={
        <>
          <p>WEBM suele venir de grabaciones del navegador, capturas de pantalla, Loom, OBS o llamadas web. Puede contener vídeo, pero para transcribir solo importa la pista de voz.</p>
          <p>Mictoo extrae el audio del WEBM y lo convierte en texto con timestamps, sin que tengas que renderizar otro archivo manualmente.</p>
        </>
      }
      howItWorks={[
        { title: 'Sube el WEBM', desc: 'Añade la grabación del navegador, pantalla o llamada.' },
        { title: 'Se extrae el audio', desc: 'Mictoo procesa la pista de voz y genera una transcripción editable.' },
        { title: 'Exporta texto o subtítulos', desc: 'Descarga TXT o SRT para notas, documentación o captions.' },
      ]}
      whyUse={{
        title: 'Por qué Mictoo para WEBM',
        bullets: [
          { title: 'Menos pasos técnicos', desc: 'Evita abrir ffmpeg solo para obtener el audio de una grabación web.' },
          { title: 'Timestamps alineados', desc: 'Las marcas ayudan a volver al momento exacto del vídeo.' },
          { title: 'Bueno para Opus', desc: 'WEBM suele usar Opus, un códec eficiente para voz.' },
          { title: 'Privacidad práctica', desc: 'Puedes transcribir la grabación local sin publicarla en una plataforma de vídeo.' },
        ],
      }}
      useCases={{
        title: 'Cuándo transcribir WEBM',
        items: [
          { title: 'Grabaciones de Loom', desc: 'Convierte tutoriales y demos en notas o documentación.' },
          { title: 'Capturas OBS', desc: 'Extrae texto de clases, webinars o pruebas de producto.' },
          { title: 'Reuniones en navegador', desc: 'Recupera decisiones y preguntas de grabaciones locales.' },
          { title: 'QA y research', desc: 'Transcribe sesiones de usuario para revisar citas y problemas.' },
        ],
      }}
      proTips={{
        title: 'Consejos para WEBM',
        tips: [
          { title: 'Extrae audio si el vídeo es enorme', desc: 'Una pista OPUS o M4A puede subir más rápido que el WEBM completo.' },
          { title: 'Cuida el micrófono', desc: 'La transcripción mejora más con voz clara que con mayor resolución de vídeo.' },
          { title: 'Conserva el WEBM original', desc: 'Úsalo después para editar clips o validar timestamps.' },
        ],
      }}
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
