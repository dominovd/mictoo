import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/aac-to-text',
  'fr': 'https://mictoo.com/fr/aac-to-text',
  'de': 'https://mictoo.com/de/aac-to-text',
  'es': 'https://mictoo.com/es/aac-to-text',
  'ru': 'https://mictoo.com/ru/aac-to-text',
  'it': 'https://mictoo.com/it/aac-to-text',
  'pt': 'https://mictoo.com/pt/aac-to-text',
  'pl': 'https://mictoo.com/pl/aac-to-text',
  'ja': 'https://mictoo.com/ja/aac-to-text',
  'ko': 'https://mictoo.com/ko/aac-to-text',
  'x-default': 'https://mictoo.com/aac-to-text',
}

export const metadata = {
  title: 'AAC a texto — Transcripción de audio AAC gratis online | Mictoo',
  description: 'Transcribe archivos de audio AAC a texto gratis. Arrastra tu .aac, .m4a u otro archivo codificado en AAC y obtén una transcripción precisa en segundos.',
  alternates: { canonical: 'https://mictoo.com/es/aac-to-text', languages: LANGS },

  openGraph: {
    title: "AAC a texto — Transcripción de audio AAC gratis online | Mictoo",
    description: "Transcribe archivos de audio AAC a texto gratis. Arrastra tu .aac, .m4a u otro archivo codificado en AAC y obtén una transcripción precisa en segundos.",
    url: "https://mictoo.com/es/aac-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AAC a texto — Transcripción de audio AAC gratis online | Mictoo",
    description: "Transcribe archivos de audio AAC a texto gratis. Arrastra tu .aac, .m4a u otro archivo codificado en AAC y obtén una transcripción precisa en segundos.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function EsAacToTextPage() {
  return (
    <LandingLayout
      badge="AAC · M4A · Gratis"
      h1={<>AAC a texto<br /><span className="text-brand-600">Transcripción de AAC gratis online</span></>}
      subtitle="Suelta tu archivo de audio AAC y obtén una transcripción precisa en segundos. Funciona con .aac y .m4a (AAC dentro de un contenedor MP4). Sin registro."
      defaultLanguage="es"
      valueBlock={
        <>
          <p>AAC es un códec de audio, no siempre un formato de archivo visible. Puede aparecer como .aac puro, dentro de M4A/MP4 o en exportaciones de vídeo y podcast.</p>
          <p>Mictoo permite subir estos archivos directamente, transcribir la voz y exportar el resultado sin crear una copia WAV intermedia.</p>
        </>
      }
      howItWorks={[
        { title: 'Sube AAC o M4A', desc: 'Añade un archivo .aac, .m4a o un medio que use audio AAC.' },
        { title: 'Se lee el flujo de audio', desc: 'Mictoo procesa el audio y prepara una transcripción editable.' },
        { title: 'Edita y exporta', desc: 'Corrige nombres o términos técnicos y descarga TXT o SRT.' },
      ]}
      whyUse={{
        title: 'Por qué Mictoo para AAC',
        bullets: [
          { title: 'Carga directa', desc: 'No necesitas convertir a WAV o MP3 antes de transcribir.' },
          { title: 'Ideal para audio comprimido claro', desc: 'AAC conserva buena voz en archivos relativamente pequeños.' },
          { title: 'Útil para fuentes de vídeo', desc: 'Muchos clips y exportaciones móviles usan AAC internamente.' },
          { title: 'Flujo no destructivo', desc: 'Trabaja desde una copia o el archivo original sin modificarlo.' },
        ],
      }}
      useCases={{
        title: 'Usos comunes de AAC',
        items: [
          { title: 'Podcasts y CDN', desc: 'Convierte episodios o cortes de audio codificados en AAC.' },
          { title: 'Extractos de YouTube o MP4', desc: 'Transcribe la pista de voz después de separar el audio.' },
          { title: 'Apps móviles', desc: 'Procesa audios exportados por apps que usan AAC por defecto.' },
          { title: 'Grabaciones ligeras', desc: 'Obtén texto de archivos pequeños sin inflarlos a WAV.' },
        ],
      }}
      proTips={{
        title: 'Consejos para AAC',
        tips: [
          { title: 'No subas el bitrate artificialmente', desc: 'Aumentar el bitrate no recupera detalle perdido y solo crea archivos más grandes.' },
          { title: 'Envuelve AAC en M4A si una app falla', desc: 'Algunas herramientas manejan mejor contenedores M4A que flujos .aac puros.' },
          { title: 'Revisa nombres propios', desc: 'La compresión puede afectar palabras raras, marcas y términos técnicos.' },
        ],
      }}
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
