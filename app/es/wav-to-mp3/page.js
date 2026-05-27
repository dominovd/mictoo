import LandingLayout from '@/components/LandingLayout'
import ConverterZone from '@/components/ConverterZone'

const LANGS = {
  'en': 'https://mictoo.com/wav-to-mp3',
  'fr': 'https://mictoo.com/fr/wav-to-mp3',
  'de': 'https://mictoo.com/de/wav-to-mp3',
  'es': 'https://mictoo.com/es/wav-to-mp3',
  'ru': 'https://mictoo.com/ru/wav-to-mp3',
  'it': 'https://mictoo.com/it/wav-to-mp3',
  'pt': 'https://mictoo.com/pt/wav-to-mp3',
  'pl': 'https://mictoo.com/pl/wav-to-mp3',
  'ja': 'https://mictoo.com/ja/wav-to-mp3',
  'ko': 'https://mictoo.com/ko/wav-to-mp3',
  'x-default': 'https://mictoo.com/wav-to-mp3',
}

export const metadata = {
  title: 'WAV a MP3 — conversor en línea gratuito | Mictoo',
  description:
    'Convierta WAV a MP3 gratis en línea. Reduzca archivos WAV sin pérdida a MP3 portátiles de 128 kbps en segundos. Sin registro, sin marca de agua. Hasta 25 MB.',
  alternates: { canonical: 'https://mictoo.com/es/wav-to-mp3', languages: LANGS },
}

export default function EsWavToMp3Page() {
  return (
    <LandingLayout
      defaultLanguage="es"
      badge="WAV → MP3 · Gratis · Sin registro"
      h1={<>WAV a MP3<br /><span className="text-brand-600">Conversor en línea gratuito</span></>}
      subtitle="Suelte un archivo WAV. Reciba un MP3 compacto, diez veces más pequeño, con sonido casi idéntico para voz hablada o escucha informal. Sin marca de agua, sin email."
      tool={<ConverterZone from="wav" to="mp3" />}
      howItWorks={[
        { icon: '📂', title: 'Suelte el WAV', desc: 'Arrastre cualquier WAV (16 bits, 24 bits, mono, estéreo) a la caja. Hasta 25 MB de forma anónima, 60 MB con registro.' },
        { icon: '⚡', title: 'Volvemos a codificarlo a MP3', desc: 'ffmpeg en el servidor, 128 kbps a bitrate constante, 44.1 kHz, estéreo. Un WAV de 25 MB (unos 2 minutos a 24 bits/96 kHz, o 5 minutos a 16 bits/44.1) termina en pocos segundos.' },
        { icon: '⬇️', title: 'Descargue el MP3', desc: 'El resultado se llama como el original con .mp3 al final. La subida y la salida se borran de nuestros servidores en menos de una hora.' },
      ]}
      whyUse={{ title: 'Por qué convertir WAV a MP3', bullets: [
        { title: 'Los archivos WAV son enormes', desc: 'Un WAV de 5 minutos a 16 bits/44.1 kHz pesa unos 50 MB. El mismo audio en MP3 a 128 kbps pesa 5 MB. Para enviar por email, subir a un host de podcast o cargar en el móvil, el MP3 es el formato que quiere.' },
        { title: 'MP3 se reproduce en todas partes', desc: 'WAV va bien en el escritorio, pero es inestable en autorradios antiguos, en algunos altavoces Bluetooth y en muchos reproductores web. MP3 simplemente funciona.' },
        { title: 'La pérdida de calidad a 128 kbps es inaudible para la escucha habitual', desc: 'No notará la diferencia entre un MP3 a 128 kbps y el WAV original a menos que esté masterizando música con monitores de estudio. Para voz, podcast o escucha informal es el compromiso evidente.' },
        { title: 'Sin marca de agua, sin ventanas emergentes', desc: 'El MP3 es solo su audio recodificado. No añadimos una intro que diga "Convertido por..." ni mostramos un popup falso pidiéndole que espere 30 segundos.' },
        { title: 'Privacidad por defecto', desc: 'Los WAV de una grabación de campo pueden ser sensibles. El archivo llega a Vercel Blob, se convierte y se borra. No lo miramos, no lo guardamos.' },
      ]}}
      useCases={{ title: 'Cuándo conviene convertir WAV a MP3', items: [
        { title: 'Grabación de campo → clip listo para email', desc: 'Una Zoom H1n o grabadora similar suele guardar en WAV por defecto. Convierta a MP3 antes de compartir con un productor, periodista o transcriptor.' },
        { title: 'Export de estudio → escucha cómoda en el móvil', desc: 'Audacity, Reaper, Logic, todos exportan por defecto a WAV. Exporte la mezcla preliminar como MP3 para compartirla con colaboradores o escucharla en movimiento.' },
        { title: 'Preparación de podcast', desc: 'La mayoría de plataformas de podcast (Anchor, Buzzsprout, Transistor) aceptan WAV pero recomiendan MP3 porque la subida es más rápida y los cargos de ancho de banda son menores.' },
        { title: 'Limpieza de notas de voz', desc: 'Si su teléfono o grabadora guardó en WAV, convierta a MP3 antes de meterlo en su archivo de Notion o Notas. Ahorra almacenamiento a buen precio.' },
        { title: 'Cadena de limpieza de audio', desc: 'Grabó en WAV para editar, hizo los cortes y ahora quiere que el resultado final sea un MP3 más pequeño para distribuir. Este es el último paso.' },
      ]}}
      proTips={{ title: 'Consejos para una conversión WAV a MP3 limpia', tips: [
        { title: 'Un WAV de 24 bits se convierte igual que uno de 16 bits', desc: 'MP3 no conserva profundidad de bits por encima de lo que la codificación perceptual necesita. Un WAV de 24 bits no le da ninguna ventaja audible frente a uno de 16 bits cuando se recodifica a MP3 de 128 kbps.' },
        { title: 'Si el WAV supera los 25 MB, recórtelo primero', desc: 'Ábralo en Audacity (gratis) o QuickTime, corte la parte que realmente necesita, expórtelo como un WAV más pequeño y luego convierta. O inicie sesión para el tope de 60 MB.' },
        { title: 'Mono entra, mono sale', desc: 'Si su WAV de origen es mono (típico de grabaciones de voz), el MP3 resultante también será mono. Un MP3 mono a 128 kbps es excesivo, pero nuestro conversor estandariza en 128 por simplicidad.' },
        { title: 'Para masterizar o archivar, no use MP3', desc: 'Si va a guardar el archivo como copia maestra para futuras remasterizaciones, quédese en WAV (o FLAC). MP3 es un formato de distribución, no de archivo.' },
        { title: '¿320 kbps o VBR? Abra el MP3 en Audacity después', desc: 'Exportamos a 128 kbps constantes. Para un bitrate mayor o VBR, lleve el MP3 a Audacity y vuelva a exportarlo. La pérdida de calidad de un único recodificado extra es pequeña.' },
        { title: 'Los WAV con cabeceras raras fallan en silencio', desc: 'Algunos archivos BWF (broadcast WAV) tienen cabeceras que ffmpeg no puede leer. Ábralos en Audacity, guárdelos como WAV estándar y reinténtelo.' },
      ]}}
      faq={[
        { q: '¿La conversión WAV a MP3 es realmente gratis?', a: 'Sí. No hace falta cuenta hasta 25 MB, no hay límite de tiempo, no hay marca de agua en la salida. Los anuncios de las páginas editoriales pagan el servidor.' },
        { q: '¿Cuál es el tamaño máximo de archivo?', a: '25 MB de forma anónima, 60 MB con una cuenta gratuita. Un WAV de 25 MB son unos 5 minutos a 16 bits/44.1 kHz estéreo, o unos 2 minutos a 24 bits/96 kHz.' },
        { q: '¿Cuánto tarda?', a: 'Segundos. La conversión en sí es mucho más rápida que en tiempo real. Un WAV de 25 MB termina en 3 a 8 segundos. La velocidad de subida es el cuello de botella.' },
        { q: '¿Qué calidad de MP3 entregan?', a: '128 kbps a bitrate constante, 44.1 kHz, conserva el número de canales del origen (mono entra, mono sale; estéreo entra, estéreo sale). Es el ajuste universal de "suficientemente bueno para todo".' },
        { q: '¿Guardan mis archivos?', a: 'No. La subida se borra justo después de la conversión. El resultado se purga en menos de una hora con nuestro cron de limpieza. Guárdelo en local.' },
        { q: '¿Sonará el MP3 distinto al WAV?', a: 'En la mayoría de equipos de reproducción y la mayoría del material de origen, no. Masterizando con monitores de estudio y oídos descansados, quizá, pero en ese caso no estaría usando un conversor web.' },
        { q: '¿Puedo conseguir un bitrate más alto (256 o 320 kbps)?', a: 'Aquí no directamente. Lleve nuestro MP3 a 128 kbps a Audacity y vuelva a exportarlo al bitrate que quiera. El doble recodificado añade una pérdida audible despreciable.' },
        { q: '¿Y FLAC en lugar de MP3?', a: 'FLAC es compresión sin pérdida. La mitad del tamaño del WAV, sin pérdida de calidad. Para uso de archivo es la mejor opción. No entregamos FLAC desde este conversor, pero nuestra página /flac-to-mp3 cubre la dirección contraria.' },
        { q: 'Mi WAV es de 32 bits flotante. ¿Se convertirá?', a: 'Sí. ffmpeg maneja WAV de 32 bits flotante sin problema. La salida MP3 es la misma sea cual sea la profundidad de bits del origen.' },
        { q: '¿Por qué un audio mono acaba en un MP3 estéreo?', a: 'Conservamos la distribución de canales del origen. Un WAV mono pasa a MP3 mono. Un WAV estéreo pasa a MP3 estéreo. No subimos ni mezclamos canales.' },
        { q: '¿Sirve para música o solo para voz?', a: 'Ambas. El MP3 a 128 kbps es un compromiso perceptual leve para música, válido para escuchar en el coche, con auriculares en ambientes ruidosos o reproducción informal. Para escucha crítica de música quédese con el WAV o use FLAC.' },
        { q: '¿Puedo convertir por lotes?', a: 'Aún no. Un archivo a la vez en el nivel gratuito. Los lotes están previstos para un futuro plan Pro.' },
      ]}
      relatedLinks={[
        { href: '/es/mp4-to-mp3', label: 'MP4 a MP3', desc: 'Saque el audio MP3 de un archivo de vídeo.' },
        { href: '/es/flac-to-mp3', label: 'FLAC a MP3', desc: 'Convierta FLAC sin pérdida a MP3 portátil.' },
        { href: '/es/mp3-to-wav', label: 'MP3 a WAV', desc: 'La dirección contraria, WAV sin comprimir desde MP3.' },
        { href: '/es/transcribe-audio-to-text', label: 'Audio a texto', desc: '¿Quiere las palabras y no el audio? Sáltese el MP3 y transcriba directamente.' },
      ]}
    />
  )
}
