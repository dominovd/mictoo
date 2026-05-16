import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/youtube-to-text',
  'fr': 'https://mictoo.com/fr/youtube-to-text',
  'de': 'https://mictoo.com/de/youtube-to-text',
  'es': 'https://mictoo.com/es/youtube-to-text',
  'ru': 'https://mictoo.com/ru/youtube-to-text',
  'it': 'https://mictoo.com/it/youtube-to-text',
  'pt': 'https://mictoo.com/pt/youtube-to-text',
  'pl': 'https://mictoo.com/pl/youtube-to-text',
  'ja': 'https://mictoo.com/ja/youtube-to-text',
  'ko': 'https://mictoo.com/ko/youtube-to-text',
  'x-default': 'https://mictoo.com/youtube-to-text',
}

export const metadata = {
  title: 'YouTube a texto — Transcribe vídeos de YouTube gratis | Mictoo',
  description: 'Transcribe vídeos de YouTube a texto y subtítulos SRT gratis. Descarga primero el audio y súbelo a Mictoo. MP3, MP4, M4A. Sin registro.',
  alternates: { canonical: 'https://mictoo.com/es/youtube-to-text', languages: LANGS },
}

export default function EsYouTubeToTextPage() {
  return (
    <LandingLayout
      badge="YouTube · SRT · Gratis"
      h1={<>YouTube a texto<br /><span className="text-brand-600">Transcribe vídeos de YouTube gratis</span></>}
      subtitle="Convierte cualquier vídeo de YouTube en una transcripción o archivo de subtítulos SRT. Gratis, sin registro. Descarga el archivo de audio o vídeo, luego súbelo a Mictoo."
      defaultLanguage="es"
      features={[
        { icon: '🎬', title: 'Cualquier vídeo de YouTube', desc: 'Tutoriales, podcasts, entrevistas, clases, vlogs — cualquier vídeo con voz clara. Idiomas detectados automáticamente, más de 50 compatibles.' },
        { icon: '📺', title: 'SRT para subtítulos', desc: 'Después de transcribir, descarga un archivo .srt listo para usar. Súbelo a YouTube Studio para añadir subtítulos precisos a tus propios vídeos.' },
        { icon: '📝', title: 'Reutiliza tu contenido', desc: 'Convierte un vídeo en una entrada de blog, show notes, citas para redes sociales o guion para traducción. La transcripción es editable en el navegador.' },
      ]}
      faq={[
        { q: '¿Cómo obtengo el audio de un vídeo de YouTube?', a: 'Para tus propios vídeos: abre YouTube Studio → Contenido → clic en el vídeo → Descargar. Para vídeos de terceros, las opciones dependen de la licencia del vídeo y de las Condiciones de servicio de YouTube. Muchos usuarios descargan primero su propio contenido y luego lo suben aquí.' },
        { q: '¿Puede Mictoo descargar directamente desde una URL de YouTube?', a: 'No — para respetar las Condiciones de servicio de YouTube y los derechos de los creadores, Mictoo no descarga desde URL. Sube un archivo de audio o vídeo que tengas derecho a transcribir.' },
        { q: '¿Cómo añado subtítulos de Mictoo a mi vídeo de YouTube?', a: 'Después de transcribir, haz clic en «Descargar .srt» para obtener el archivo de subtítulos. En YouTube Studio: abre el vídeo → Subtítulos → Añadir idioma → Subir archivo → elige el .srt. Los subtítulos se sincronizan automáticamente.' },
        { q: '¿Funciona la transcripción para vídeos no anglófonos?', a: 'Sí. Mictoo detecta automáticamente el idioma hablado y admite más de 50 idiomas — español, francés, alemán, ruso, japonés, chino, árabe y más. Configura el idioma manualmente si la detección falla.' },
        { q: '¿Cuál es el tamaño máximo del vídeo?', a: 'Hasta 25 MB por subida. Una exportación de audio de 25 minutos a 128 kbps cabe. Para vídeos más largos, extrae solo la pista de audio (M4A es lo más eficiente) o divide el archivo en partes.' },
      ]}
      relatedLinks={[
        { href: '/transcribe-video-to-text', label: 'Vídeo a texto' },
        { href: '/es/free-srt-generator', label: 'Generador de SRT' },
        { href: '/es/podcast-transcription', label: 'Transcripción de podcasts' },
        { href: '/es', label: 'Todos los formatos' },
      ]}
    />
  )
}
