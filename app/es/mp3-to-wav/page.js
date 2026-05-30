import LandingLayout from '@/components/LandingLayout'
import ConverterZone from '@/components/ConverterZone'

const LANGS = {
  'en': 'https://mictoo.com/mp3-to-wav',
  'fr': 'https://mictoo.com/fr/mp3-to-wav',
  'de': 'https://mictoo.com/de/mp3-to-wav',
  'es': 'https://mictoo.com/es/mp3-to-wav',
  'ru': 'https://mictoo.com/ru/mp3-to-wav',
  'it': 'https://mictoo.com/it/mp3-to-wav',
  'pt': 'https://mictoo.com/pt/mp3-to-wav',
  'pl': 'https://mictoo.com/pl/mp3-to-wav',
  'ja': 'https://mictoo.com/ja/mp3-to-wav',
  'ko': 'https://mictoo.com/ko/mp3-to-wav',
  'x-default': 'https://mictoo.com/mp3-to-wav',
}

export const metadata = {
  title: 'MP3 a WAV — conversor en línea gratuito | Mictoo',
  description:
    'Convierta MP3 a WAV gratis en línea. Expanda MP3 comprimido a WAV sin comprimir de 16 bits/44.1 kHz para edición de audio. Sin registro, sin marca de agua.',
  alternates: { canonical: 'https://mictoo.com/es/mp3-to-wav', languages: LANGS },

  openGraph: {
    title: "MP3 a WAV — conversor en línea gratuito | Mictoo",
    description: "Convierta MP3 a WAV gratis en línea. Expanda MP3 comprimido a WAV sin comprimir de 16 bits/44.1 kHz para edición de audio. Sin registro, sin marca de agua.",
    url: "https://mictoo.com/es/mp3-to-wav",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MP3 a WAV — conversor en línea gratuito | Mictoo",
    description: "Convierta MP3 a WAV gratis en línea. Expanda MP3 comprimido a WAV sin comprimir de 16 bits/44.1 kHz para edición de audio. Sin registro, sin marca de agua.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function EsMp3ToWavPage() {
  return (
    <LandingLayout
      defaultLanguage="es"
      badge="MP3 → WAV · Gratis · Sin registro"
      h1={<>MP3 a WAV<br /><span className="text-brand-600">Conversor en línea gratuito</span></>}
      subtitle="Suelte un MP3. Reciba un WAV PCM de 16 bits/44.1 kHz listo para software de edición de audio. Sin marca de agua, sin email."
      tool={<ConverterZone from="mp3" to="wav" />}
      howItWorks={[
        { icon: '📂', title: 'Suelte el MP3', desc: 'Arrastre el MP3 a la caja. Archivos de hasta 25 MB de forma anónima, 60 MB tras registrarse.' },
        { icon: '⚡', title: 'ffmpeg decodifica a PCM', desc: 'PCM de 16 bits, 44.1 kHz, distribución de canales del origen conservada. Unos segundos para un archivo típico.' },
        { icon: '⬇️', title: 'Descargue el WAV', desc: 'El archivo WAV pesa unas diez veces más que el MP3 porque no está comprimido. Se borra de nuestros servidores en menos de una hora.' },
      ]}
      whyUse={{ title: 'Por qué convertir MP3 a WAV', bullets: [
        { title: 'Los editores de audio prefieren WAV', desc: 'Audacity, Adobe Audition, Logic, Pro Tools, todos abren MP3 pero la mayoría de operaciones (edición precisa, aplicar efectos, normalizar) funcionan mejor sobre WAV. Convertir primero evita la leve pérdida de calidad de los recodificados repetidos de MP3.' },
        { title: 'Sin pérdida de calidad adicional al editar', desc: 'Cada recodificado de MP3 degrada el audio un poco. Convierta a WAV, haga sus ediciones, exporte de nuevo a MP3 al final. Esa única vuelta es lo mejor que puede hacer.' },
        { title: 'Requerido por algún hardware y software heredado', desc: 'Algunos programas antiguos de grabación de CD, samplers y equipos de grabación solo leen WAV. La conversión es el puente.' },
        { title: 'Uso forense y de difusión', desc: 'El análisis forense de audio y los flujos de difusión usan tradicionalmente WAV porque el formato está bien entendido y no comprimido. MP3 es aceptable como material de origen pero WAV es el formato de trabajo.' },
        { title: 'Sin marca de agua, sin venta cruzada', desc: 'Solo audio decodificado en un contenedor WAV. No añadimos nada.' },
      ]}}
      useCases={{ title: 'Cuándo conviene convertir MP3 a WAV', items: [
        { title: 'Edición de audio en Audacity, Reaper, Logic', desc: 'Convierta primero a WAV, luego aplique efectos, corte, normalice, mezcle. Vuelva a exportar a MP3 al final si necesita un archivo pequeño para distribución.' },
        { title: 'Masterización para vinilo o CD', desc: 'Tanto el corte de vinilo como el prensado de CD quieren audio sin pérdida. Si su única fuente es MP3, convertir a WAV le da al ingeniero de mastering algo con lo que trabajar, aunque la calidad de audio quede acotada por el MP3 de origen.' },
        { title: 'Preparación de samples para un sampler', desc: 'Los samplers hardware (Akai, Korg) suelen querer archivos WAV con profundidades de bits y frecuencias de muestreo concretas.' },
        { title: 'Trabajo de voz en off para un vídeo', desc: 'Algunos editores de vídeo (DaVinci, Premiere) manejan MP3 sin problema, pero muestran mejores formas de onda y aplican efectos con más limpieza sobre WAV.' },
        { title: 'Análisis forense o de transcripción', desc: 'Algunas herramientas de análisis especializadas requieren entrada en WAV.' },
      ]}}
      proTips={{ title: 'Consejos para la conversión MP3 a WAV', tips: [
        { title: 'El WAV ocupará 10 veces más que el MP3', desc: 'Un MP3 de 5 MB se expande a unos 50 MB como WAV de 16 bits/44.1 kHz. La conversión no restaura calidad perdida, solo le da un formato manejable.' },
        { title: 'La calidad del WAV está acotada por el MP3', desc: 'No puede hacer que un MP3 de 128 kbps suene como un CD convirtiéndolo a WAV. El WAV solo permite editar el audio existente sin más pérdida por compresión.' },
        { title: 'Para mayor fidelidad, pida el original', desc: 'Si está haciendo masterización o restauración seria, consiga el original sin pérdida (WAV, FLAC, ALAC) de la fuente. MP3 a WAV es un parche, no una mejora.' },
        { title: 'La frecuencia de muestreo importa para el hardware', desc: 'La mayoría del hardware quiere 44.1 kHz (CD) o 48 kHz (vídeo). Nuestro conversor entrega siempre 44.1. Si necesita 48, abra el WAV en Audacity y remuéstrelo.' },
        { title: 'WAV de 24 bits, use Audacity', desc: 'Nuestro conversor entrega WAV de 16 bits. Para 24 bits, abra el WAV resultante en Audacity y vuelva a exportar con coma flotante de 24 bits. La profundidad de bits extra da margen para editar aunque el audio de origen equivalga solo a 16 bits.' },
        { title: 'Mono entra, mono sale, ahorra espacio', desc: 'Si su MP3 es mono, el WAV también es mono, la mitad del tamaño de una conversión estéreo. Conservamos la distribución de canales del origen.' },
      ]}}
      faq={[
        { q: '¿La conversión MP3 a WAV es realmente gratis?', a: 'Sí. Sin cuenta hasta 25 MB, sin marca de agua, sin límite de tiempo.' },
        { q: '¿Por qué pesa tanto más el WAV que el MP3?', a: 'MP3 usa compresión perceptual para tirar datos de audio que el oído apenas percibe. WAV almacena cada muestra con precisión completa. Un MP3 típico es la décima parte del tamaño del WAV equivalente.' },
        { q: '¿Sonará el WAV mejor que el MP3?', a: 'No. El MP3 ya perdió datos durante su codificación original. WAV conserva el audio tal cual, no restaura calidad.' },
        { q: '¿Qué formato WAV entregan?', a: 'PCM de 16 bits, 44.1 kHz, distribución de canales del origen conservada (mono entra, mono sale; estéreo entra, estéreo sale).' },
        { q: '¿Cuánto tarda?', a: 'Segundos. Decodificar MP3 es rápido.' },
        { q: '¿Puedo obtener WAV de 24 bits o de 32 bits flotante?', a: 'No desde este conversor. Abra nuestro WAV de 16 bits en Audacity y vuelva a exportar con la profundidad de bits que quiera. Los bits extra dan margen para editar aunque la precisión del audio de origen quede acotada por el MP3.' },
        { q: '¿Guardan mis archivos?', a: 'No. La subida se borra tras la conversión. La salida se purga en menos de una hora.' },
        { q: '¿Puedo convertir por lotes?', a: 'Aún no en el nivel gratuito. Abra varias pestañas del navegador.' },
        { q: '¿Y la frecuencia de muestreo de 48 kHz?', a: 'Entregamos 44.1 kHz (tasa de CD). Para 48 kHz (trabajo de vídeo), remuestree el WAV en Audacity tras la conversión.' },
        { q: '¿Por qué molestarse en convertir?', a: 'Sobre todo para edición de audio. Audacity, Pro Tools, Logic, todos trabajan mejor con WAV que con MP3, sobre todo para ediciones repetidas.' },
        { q: '¿Fallará la conversión para algún MP3?', a: 'Rara vez. ffmpeg decodifica esencialmente cualquier MP3 estándar. Un archivo realmente corrupto podría fallar; por lo demás es fiable.' },
        { q: '¿Debo conservar ambos archivos?', a: 'Para editar, trabaje en WAV. Para distribución, conserve también el MP3. Cuando termine de editar, vuelva a exportar desde WAV a un MP3 nuevo al final de la cadena.' },
      ]}
      relatedLinks={[
        { href: '/es/wav-to-mp3', label: 'WAV a MP3', desc: 'La dirección contraria.' },
        { href: '/es/flac-to-mp3', label: 'FLAC a MP3', desc: 'FLAC sin pérdida a MP3 portátil.' },
        { href: '/es/wav-to-text', label: 'WAV a texto', desc: 'Transcriba audio WAV directamente.' },
        { href: '/es/how-to-compress-audio', label: 'Comprimir audio', desc: 'Para archivos que necesita hacer más pequeños.' },
      ]}
    />
  )
}
