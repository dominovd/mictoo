import LandingLayout from '@/components/LandingLayout'
import ConverterZone from '@/components/ConverterZone'

const LANGS = {
  'en': 'https://mictoo.com/mp4-to-mp3',
  'fr': 'https://mictoo.com/fr/mp4-to-mp3',
  'de': 'https://mictoo.com/de/mp4-to-mp3',
  'es': 'https://mictoo.com/es/mp4-to-mp3',
  'ru': 'https://mictoo.com/ru/mp4-to-mp3',
  'it': 'https://mictoo.com/it/mp4-to-mp3',
  'pt': 'https://mictoo.com/pt/mp4-to-mp3',
  'pl': 'https://mictoo.com/pl/mp4-to-mp3',
  'ja': 'https://mictoo.com/ja/mp4-to-mp3',
  'ko': 'https://mictoo.com/ko/mp4-to-mp3',
  'x-default': 'https://mictoo.com/mp4-to-mp3',
}

export const metadata = {
  title: 'MP4 a MP3 — conversor en línea gratuito | Mictoo',
  description:
    'Convierta MP4 a MP3 gratis en línea. Suelte su vídeo y obtenga un archivo de audio MP3 limpio a 128 kbps en segundos. Sin registro, sin marca de agua, sin email. Hasta 25 MB.',
  alternates: { canonical: 'https://mictoo.com/es/mp4-to-mp3', languages: LANGS },
}

export default function EsMp4ToMp3Page() {
  return (
    <LandingLayout
      defaultLanguage="es"
      badge="MP4 → MP3 · Gratis · Sin registro"
      h1={<>MP4 a MP3<br /><span className="text-brand-600">Conversor en línea gratuito</span></>}
      subtitle="Suelte un vídeo MP4. Reciba un archivo de audio MP3. Sin marca de agua, sin email, sin sala de espera. Funciona con ffmpeg en el servidor, listo en segundos."
      tool={<ConverterZone from="mp4" to="mp3" />}
      howItWorks={[
        { icon: '📂', title: 'Suelte el MP4', desc: 'Arrastre cualquier vídeo MP4 a la caja o haga clic para elegir uno. Los archivos de hasta 25 MB pasan de forma anónima. Inicie sesión si necesita 60 MB.' },
        { icon: '⚡', title: 'Extraemos el audio', desc: 'ffmpeg corre en el servidor, quita el flujo de vídeo y vuelve a codificar el audio como MP3 estéreo a 128 kbps y 44.1 kHz. Un vídeo de 25 MB suele terminar en 5 a 15 segundos.' },
        { icon: '⬇️', title: 'Descargue el MP3', desc: 'El botón de descarga le da el archivo con el nombre original y la extensión .mp3. Su subida y el resultado se borran de nuestros servidores en menos de una hora.' },
      ]}
      whyUse={{ title: 'Por qué Mictoo para MP4 a MP3', bullets: [
        { title: 'Solo la conversión. Nada más', desc: 'Sin ventanas emergentes, sin cuentas atrás, sin nivel "gratis" falso que insiste en que pague. Suelte, convierta, descargue.' },
        { title: 'MP3 a 128 kbps, ligero y universal', desc: 'Ese bitrate es el punto dulce práctico para audio hablado. Aproximadamente 1 MB por minuto, se reproduce en todas partes, suena limpio. No ofrecemos un selector de calidad porque las opciones añaden fricción sin aportar valor al caso de uso típico.' },
        { title: 'Los archivos no se quedan en nuestros servidores', desc: 'Su MP4 aterriza en Vercel Blob, se convierte y se elimina de inmediato. El MP3 también lo borra nuestra limpieza horaria. Guarde una copia local.' },
        { title: 'Sin marca de agua, sin etiqueta de audio', desc: 'Muchos conversores gratuitos insertan su propia intro de "Convertido por FreeMP3.com". Nosotros no tocamos el audio aparte de volver a codificarlo.' },
        { title: 'La mayoría de conversores gratuitos son fachadas de redes publicitarias', desc: 'Muchos sitios que aparecen en Google para "mp4 a mp3" son puertas AdSense que secuestran el botón de retroceso o disparan falsas alertas de virus. Nosotros somos un proyecto SEO independiente financiado por anuncios en las páginas editoriales, no dentro del flujo de conversión.' },
      ]}}
      useCases={{ title: 'Cuándo conviene convertir MP4 a MP3', items: [
        { title: 'Guardar un podcast que tiene como vídeo', desc: 'Muchos feeds de podcast también se publican como subidas a YouTube o MP4 de Vimeo. Si solo tiene la copia en vídeo, el MP3 lo vuelve cómodo para el móvil y diez veces más ligero.' },
        { title: 'Sacar la música o el audio de una grabación de clase', desc: 'Zoom y Teams exportan en MP4. Solo necesita el audio si quiere escucharlo en el trayecto, transcribirlo o pasarlo a un programa de edición.' },
        { title: 'Reducir un vídeo de 1 GB para enviarlo por email', desc: 'Un vídeo de una hora a 1080p puede llegar fácilmente a 1 GB. El audio de esa misma grabación pesa 30 a 60 MB a calidad completa, a menudo menos de 30 MB a 128 kbps. De repente se puede enviar.' },
        { title: 'Alimentar una transcripción que espera audio', desc: 'Nuestra propia herramienta de transcripción acepta MP4 directamente, pero las herramientas de terceros, los editores de audio y los DAW suelen querer audio puro. El MP3 es el formato de mínimo común denominador.' },
        { title: 'Música de fondo para un screencast o presentación', desc: 'Muchos MP4 de tutoriales de YouTube contienen música o narración que quizá quiera como clip independiente. Convierta y suéltelo en iMovie, Audacity o Logic.' },
      ]}}
      proTips={{ title: 'Consejos para una conversión MP4 a MP3 limpia', tips: [
        { title: 'Si el MP4 es enorme, recórtelo primero', desc: 'Nuestro límite es 25 MB sin registro, 60 MB con registro. Un vídeo en 1080p de más de diez minutos no cabrá. Ábralo en QuickTime (Mac) o en la app Fotos (Windows), recorte justo la parte que necesita y vuelva a exportar.' },
        { title: '128 kbps sobra para voz, va perfecto para música', desc: 'Para palabra hablada un MP3 a 64 kbps pesaría la mitad sin pérdida audible. Estandarizamos en 128 kbps porque la mayoría no sabe qué hay dentro del vídeo y 128 suena limpio en ambos casos.' },
        { title: 'Si el vídeo de origen tiene varias pistas de audio, solo se reproduce la pista por defecto', desc: 'Las películas, los rips de DVD y algunos exports de clases incluyen varias pistas de idioma. Nuestro conversor toma la pista por defecto. Si necesita la pista secundaria, cámbiela como pista por defecto en su editor de vídeo y vuelva a exportar el MP4 antes de subirlo.' },
        { title: 'Los MP4 antiguos de videocámaras pueden no decodificarse', desc: 'Los MP4 AVCHD y otros de la era de las videocámaras a veces usan códecs que ffmpeg no lee sin librerías extra. Si la conversión falla, abra el archivo en HandBrake (gratis, todas las plataformas), vuelva a exportarlo como MP4 H.264 estándar y reinténtelo.' },
        { title: '¿Necesita 320 kbps o VBR? Use Audacity después', desc: 'Nuestro MP3 es a 128 kbps constantes. Si necesita un bitrate más alto o un archivo VBR, coja el MP3, ábralo en Audacity (también gratis) y vuelva a exportarlo con sus ajustes preferidos. La pérdida de calidad al recodificar a un bitrate superior es despreciable.' },
        { title: 'Para contenido protegido (películas de iTunes, DRM), fallará', desc: 'Los MP4 protegidos con DRM no los puede leer ffmpeg. Nosotros nunca desciframos contenido con derechos. Si el archivo viene de un servicio de streaming, probablemente no tiene derecho a convertirlo.' },
      ]}}
      faq={[
        { q: '¿El conversor MP4 a MP3 es realmente gratis?', a: 'Sí. No hace falta cuenta para archivos de hasta 25 MB, no hay límite de tiempo, no hay marca de agua en la salida, no hay truco de "primera conversión gratis y luego pague". Cubrimos los costes de servidor con anuncios en las páginas editoriales (no dentro del conversor).' },
        { q: '¿Cuál es el tamaño máximo de archivo?', a: '25 MB sin cuenta, 60 MB si inicia sesión (gratis). El presupuesto de las funciones de Vercel es el límite real. Nosotros lo recortamos por debajo para que la conversión termine en menos de 60 segundos para todo el mundo.' },
        { q: '¿Cuánto tarda la conversión?', a: 'Para un MP4 típico de 10 a 20 MB (unos minutos de vídeo) termina en 5 a 15 segundos. El cuello de botella es su velocidad de subida, no la conversión. ffmpeg recodifica el audio mucho más rápido que en tiempo real.' },
        { q: '¿Qué calidad tiene el MP3?', a: '128 kbps a bitrate constante, 44.1 kHz, estéreo. Es el ajuste universal de "suficientemente bueno para todo": indistinguible del original para casi cualquier oído, tanto en voz como en música, alrededor de 1 MB por minuto de audio.' },
        { q: '¿Guardan mis archivos?', a: 'No. Su subida vive en Vercel Blob justo el tiempo necesario para convertirla y luego la borramos. El MP3 resultante se purga en menos de una hora con nuestro cron de limpieza. Guarde el MP3 en local, no lo podemos reenviar.' },
        { q: '¿La salida lleva alguna marca de agua o etiqueta de audio?', a: 'No. No insertamos intros de "Convertido por Mictoo" ni outros de marca. El MP3 es solo el audio original recodificado.' },
        { q: '¿Puedo convertir vídeos de YouTube con esto?', a: 'Puede convertir cualquier archivo MP4 sobre el que tenga derechos. Nosotros no descargamos vídeos de YouTube, eso nos pondría del lado equivocado de las condiciones de servicio de YouTube. Use una herramienta como 4K Video Downloader o yt-dlp para guardar el MP4 en local y luego suéltelo aquí.' },
        { q: '¿Por qué se limitan los formatos solo a MP4?', a: 'Cada conversor es una URL con un único trabajo. MP4 a MP3 vive en /mp4-to-mp3, WAV a MP3 vive en /wav-to-mp3, y así. Elegir el adecuado nos dice qué esperar y le da a Google una página clara para posicionar.' },
        { q: 'Mi MP4 falló con "códec no soportado". ¿Y ahora?', a: 'Los MP4 antiguos de videocámaras y algunos archivos con DRM usan códecs que ffmpeg no decodifica de serie. Abra el archivo en HandBrake (gratis), vuelva a exportarlo como MP4 H.264 estándar y reinténtelo. Si sigue fallando, el archivo seguramente está bloqueado con DRM.' },
        { q: '¿Funciona en móvil?', a: 'Sí. La página está adaptada al móvil y las subidas funcionan desde Safari de iOS y Chrome de Android. En iPhone quizá necesite compartir el vídeo a Archivos primero para que el selector de archivos pueda alcanzarlo.' },
        { q: '¿Los MP3 son con pérdida? ¿Debo preocuparme?', a: 'Sí, MP3 es con pérdida. A 128 kbps la pérdida es inaudible para casi todos los oyentes en casi cualquier material de origen. Si necesita sin pérdida, por ejemplo para masterizar música, convierta MP4 a WAV en su lugar.' },
        { q: '¿Por qué no hay subida por lotes?', a: 'El nivel gratuito procesa un archivo a la vez. El procesamiento por lotes está en la hoja de ruta del plan Pro cuando se lance. Por ahora puede lanzar varias conversiones en paralelo en distintas pestañas del navegador.' },
      ]}
      relatedLinks={[
        { href: '/es/wav-to-mp3', label: 'WAV a MP3', desc: 'Comprima archivos WAV sin pérdida en MP3 compactos.' },
        { href: '/es/webm-to-mp3', label: 'WEBM a MP3', desc: 'Saque el MP3 de un WEBM (lo que suelen entregar los descargadores de YouTube).' },
        { href: '/es/transcribe-video-to-text', label: 'Vídeo a texto', desc: 'Sáltese el paso del MP3. Vaya directo a una transcripción de texto del vídeo.' },
        { href: '/es/how-to-compress-audio', label: 'Comprimir audio', desc: 'Cuando su MP3 sigue siendo demasiado grande para compartir.' },
      ]}
    />
  )
}
