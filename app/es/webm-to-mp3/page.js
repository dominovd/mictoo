import LandingLayout from '@/components/LandingLayout'
import ConverterZone from '@/components/ConverterZone'

const LANGS = {
  'en': 'https://mictoo.com/webm-to-mp3',
  'fr': 'https://mictoo.com/fr/webm-to-mp3',
  'de': 'https://mictoo.com/de/webm-to-mp3',
  'es': 'https://mictoo.com/es/webm-to-mp3',
  'ru': 'https://mictoo.com/ru/webm-to-mp3',
  'it': 'https://mictoo.com/it/webm-to-mp3',
  'pt': 'https://mictoo.com/pt/webm-to-mp3',
  'pl': 'https://mictoo.com/pl/webm-to-mp3',
  'ja': 'https://mictoo.com/ja/webm-to-mp3',
  'ko': 'https://mictoo.com/ko/webm-to-mp3',
  'x-default': 'https://mictoo.com/webm-to-mp3',
}

export const metadata = {
  title: 'WEBM a MP3 — conversor en línea gratuito | Mictoo',
  description:
    'Convierta WEBM a MP3 gratis en línea. Extraiga audio MP3 de cualquier archivo WEBM (vídeo o audio) en segundos. Sin registro, sin marca de agua. Hasta 25 MB.',
  alternates: { canonical: 'https://mictoo.com/es/webm-to-mp3', languages: LANGS },
}

export default function EsWebmToMp3Page() {
  return (
    <LandingLayout
      defaultLanguage="es"
      badge="WEBM → MP3 · Gratis · Sin registro"
      h1={<>WEBM a MP3<br /><span className="text-brand-600">Conversor en línea gratuito</span></>}
      subtitle="Suelte un archivo WEBM (el formato que adoran las grabadoras del navegador, los descargadores de YouTube y las herramientas de captura de pantalla). Reciba un MP3 limpio. Sin marca de agua, sin email."
      tool={<ConverterZone from="webm" to="mp3" />}
      howItWorks={[
        { icon: '📂', title: 'Suelte el WEBM', desc: 'WEBM solo de audio o con vídeo, ambos funcionan. Hasta 25 MB de forma anónima, 60 MB tras registrarse.' },
        { icon: '⚡', title: 'Extraemos y recodificamos', desc: 'ffmpeg saca la pista de audio (Opus o Vorbis) del contenedor WEBM y la recodifica a MP3 de 128 kbps a 44.1 kHz. Suele tardar de 3 a 10 segundos.' },
        { icon: '⬇️', title: 'Descargue el MP3', desc: 'La salida conserva el nombre original con .mp3. Los archivos se borran de nuestros servidores en menos de una hora.' },
      ]}
      whyUse={{ title: 'Por qué convertir WEBM a MP3', bullets: [
        { title: 'WEBM va genial en el navegador, fatal en todo lo demás', desc: 'Los iPhone no reproducen WEBM. La mayoría de autorradios tampoco. Muchos altavoces Bluetooth antiguos tampoco. MP3 se reproduce en todo lo que se le ocurra.' },
        { title: 'Las apps de notas de voz y las grabadoras de navegador guardan en WEBM', desc: 'Las herramientas de grabación basadas en web (Loom, la API MediaRecorder de MDN, las grabadoras de audio del navegador) usan WEBM por defecto porque Chrome y Firefox lo soportan de forma nativa. Si quiere enviar la grabación a otro sitio, MP3 es el formato más seguro.' },
        { title: 'Los descargadores de YouTube entregan WEBM por defecto', desc: 'Cuando elige "solo audio" en 4K Video Downloader o yt-dlp sin especificar formato, a menudo recibe un archivo WEBM con Opus. Convertir a MP3 lo hace reproducible en iOS y en apps de edición de audio.' },
        { title: 'Opus es técnicamente mejor, pero gana la compatibilidad', desc: 'El códec Opus dentro de un contenedor WEBM es mejor que MP3 byte por byte. Pero si su audiencia no puede reproducirlo, da igual. MP3 es la lingua franca.' },
        { title: 'Sin marca de agua, sin venta cruzada', desc: 'El MP3 es solo el audio recodificado. No añadimos intro, etiqueta ni un mensaje de "compra Pro" en la página de resultado.' },
      ]}}
      useCases={{ title: 'Cuándo conviene convertir WEBM a MP3', items: [
        { title: 'Grabación de audio en navegador → archivo portátil', desc: 'Usó una grabadora basada en web (herramienta integrada de micrófono, grabadora de voz en línea, etc.) y obtuvo un WEBM. Convierta a MP3 para soltarlo en su editor de podcast o enviarlo a un transcriptor.' },
        { title: 'Descarga de Loom o Vidyard → clip solo de audio', desc: 'Las descargas de Loom pueden ser WEBM. Si solo necesita el audio de la grabación, convierta y guarde el archivo más pequeño.' },
        { title: 'Descarga de audio de YouTube → formato universal', desc: 'Cuando descarga solo audio de YouTube con un descargador que usa Opus/WEBM por defecto, la conversión a MP3 hace que el archivo se reproduzca en todas partes.' },
        { title: 'Grabación de pantalla → solo la narración', desc: 'OBS, la grabadora de pantalla integrada de Chrome y herramientas similares suelen entregar WEBM. Si solo quiere la voz para transcripción o un podcast, convierta.' },
        { title: 'Grabaciones de llamadas WebRTC', desc: 'Algunas herramientas de videoconferencia graban en WEBM. Convierta antes de enviar a clientes o guardar en un CRM que espera MP3.' },
      ]}}
      proTips={{ title: 'Consejos para una conversión WEBM a MP3 limpia', tips: [
        { title: 'WEBM con vídeo VP9 va bien, ignoramos la pista de vídeo', desc: 'Puede soltar un WEBM con vídeo (VP9 + Opus) en el conversor. Quitamos el vídeo y dejamos solo el audio. El resultado tiene el mismo tamaño que si nos hubiera dado un WEBM solo de audio.' },
        { title: 'El audio Opus se decodifica sin pérdida dentro de ffmpeg', desc: 'No hay un problema de doble pérdida al ir de Opus a MP3. La codificación perceptual de MP3 a 128 kbps es lo único que afecta al resultado, no el hecho de que el origen sea un formato con pérdida.' },
        { title: 'Para voz, mono basta pero conservamos estéreo', desc: 'Nuestro conversor mantiene la distribución de canales del origen. Si su WEBM es mono (típico en grabaciones de voz), el MP3 es mono. No subimos canales.' },
        { title: 'Si la conversión falla, probablemente el WEBM esté incompleto', desc: 'Los flujos WEBM a veces se cortan a mitad de grabación y dejan el contenedor medio roto. Ábralos en VLC y vuelva a exportarlos como un WEBM nuevo, o pase por un editor de vídeo, y reinténtelo.' },
        { title: 'Para descargas de YouTube, prefiera M4A directamente si su descargador lo permite', desc: 'Si controla la descarga, elegir M4A (AAC dentro de un contenedor MP4) se salta todo este paso. M4A se reproduce en todas partes donde se reproduce MP3. Use la opción de formato "M4A" de 4K Video Downloader.' },
        { title: 'Los WEBM cifrados con DRM fallarán', desc: 'Algunos servicios de streaming usan WEBM con DRM. ffmpeg no puede descifrarlos, y nosotros tampoco. El WEBM original tiene que estar sin protección.' },
      ]}}
      faq={[
        { q: '¿La conversión WEBM a MP3 es realmente gratis?', a: 'Sí. Sin cuenta hasta 25 MB, sin marca de agua, sin "prueba" limitada en el tiempo. Los anuncios de las páginas editoriales cubren el coste de servidor.' },
        { q: '¿Cuál es el tamaño máximo de archivo?', a: '25 MB de forma anónima, 60 MB con una cuenta gratuita. WEBM es eficiente, 25 MB suelen representar 20 a 40 minutos de audio.' },
        { q: '¿Puedo convertir un vídeo WEBM a MP3?', a: 'Sí. Quitamos la pista de vídeo y entregamos solo el audio. El MP3 tiene el mismo tamaño tanto si el origen era vídeo como WEBM solo de audio.' },
        { q: '¿Sonará el MP3 peor que el WEBM?', a: 'En teoría, un poco. Opus al mismo bitrate es mejor que MP3. A 128 kbps la diferencia es inaudible para casi todos los oyentes en casi cualquier material.' },
        { q: '¿Cuánto tarda?', a: 'Segundos. Un archivo WEBM de 25 MB se convierte en 3 a 10 segundos. La velocidad de subida es el cuello de botella.' },
        { q: '¿Qué ajustes de MP3 usan?', a: '128 kbps a bitrate constante, 44.1 kHz, conserva la distribución de canales del origen (mono entra, mono sale; estéreo entra, estéreo sale).' },
        { q: '¿Guardan mis archivos?', a: 'No. La subida se borra tras la conversión. La salida se purga en menos de una hora. Guárdela en local.' },
        { q: 'Mi WEBM de Loom falló. ¿Por qué?', a: 'Algunas descargas de Loom usan un MP4 fragmentado dentro de un contenedor WEBM o tienen cabeceras no estándar. Pruebe a abrirlo en VLC, exportarlo de nuevo y reintentar. O descárguelo directamente de Loom como MP4 si está la opción.' },
        { q: '¿Funciona específicamente para archivos Opus?', a: 'Si su archivo acaba en .opus en lugar de .webm, renómbrelo a .webm primero. El contenedor es funcionalmente el mismo y ffmpeg los lee de forma idéntica.' },
        { q: '¿Puedo descargar vídeos de YouTube con esto?', a: 'No. No traemos URL. Use una app descargadora (4K Video Downloader, yt-dlp, ClipGrab) para guardar el WEBM en local primero y luego suéltelo aquí.' },
        { q: '¿iPhone o iTunes reproducirán la salida?', a: 'Sí. MP3 se reproduce en todas partes, incluidos todos los dispositivos y software de Apple.' },
        { q: '¿Por qué convertir en vez de quedarme con el WEBM?', a: 'WEBM va bien en Chrome y Firefox, pero iOS, muchos autorradios, altavoces Bluetooth antiguos y bastante software de audio profesional no lo manejan. MP3 es universal.' },
      ]}
      relatedLinks={[
        { href: '/es/mp4-to-mp3', label: 'MP4 a MP3', desc: 'Misma idea, con un origen MP4 en lugar de WEBM.' },
        { href: '/es/wav-to-mp3', label: 'WAV a MP3', desc: 'WAV sin pérdida convertido en MP3 portátil.' },
        { href: '/es/webm-to-text', label: 'WEBM a texto', desc: 'Sáltese el MP3, vaya directo a la transcripción.' },
        { href: '/es/how-to-compress-audio', label: 'Comprimir audio', desc: 'Si el MP3 sigue siendo demasiado grande para compartir.' },
      ]}
    />
  )
}
