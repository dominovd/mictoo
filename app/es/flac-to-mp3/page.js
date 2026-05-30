import LandingLayout from '@/components/LandingLayout'
import ConverterZone from '@/components/ConverterZone'

const LANGS = {
  'en': 'https://mictoo.com/flac-to-mp3',
  'fr': 'https://mictoo.com/fr/flac-to-mp3',
  'de': 'https://mictoo.com/de/flac-to-mp3',
  'es': 'https://mictoo.com/es/flac-to-mp3',
  'ru': 'https://mictoo.com/ru/flac-to-mp3',
  'it': 'https://mictoo.com/it/flac-to-mp3',
  'pt': 'https://mictoo.com/pt/flac-to-mp3',
  'pl': 'https://mictoo.com/pl/flac-to-mp3',
  'ja': 'https://mictoo.com/ja/flac-to-mp3',
  'ko': 'https://mictoo.com/ko/flac-to-mp3',
  'x-default': 'https://mictoo.com/flac-to-mp3',
}

export const metadata = {
  title: 'FLAC a MP3 — conversor en línea gratuito | Mictoo',
  description:
    'Convierta FLAC a MP3 gratis en línea. Reduzca FLAC sin pérdida a MP3 de 128 kbps en segundos. Sin registro, sin marca de agua. Hasta 25 MB.',
  alternates: { canonical: 'https://mictoo.com/es/flac-to-mp3', languages: LANGS },

  openGraph: {
    title: "FLAC a MP3 — conversor en línea gratuito | Mictoo",
    description: "Convierta FLAC a MP3 gratis en línea. Reduzca FLAC sin pérdida a MP3 de 128 kbps en segundos. Sin registro, sin marca de agua. Hasta 25 MB.",
    url: "https://mictoo.com/es/flac-to-mp3",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FLAC a MP3 — conversor en línea gratuito | Mictoo",
    description: "Convierta FLAC a MP3 gratis en línea. Reduzca FLAC sin pérdida a MP3 de 128 kbps en segundos. Sin registro, sin marca de agua. Hasta 25 MB.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function EsFlacToMp3Page() {
  return (
    <LandingLayout
      defaultLanguage="es"
      badge="FLAC → MP3 · Gratis · Sin registro"
      h1={<>FLAC a MP3<br /><span className="text-brand-600">Conversor en línea gratuito</span></>}
      subtitle="Suelte un archivo FLAC. Reciba un MP3 portátil con un tercio del tamaño, que se reproduce en todas partes. Sin marca de agua, sin email."
      tool={<ConverterZone from="flac" to="mp3" />}
      howItWorks={[
        { icon: '📂', title: 'Suelte el FLAC', desc: 'Arrastre su FLAC a la caja. Archivos de hasta 25 MB de forma anónima, 60 MB con registro.' },
        { icon: '⚡', title: 'ffmpeg recodifica a MP3', desc: '128 kbps a bitrate constante, 44.1 kHz, distribución de canales conservada. Un FLAC típico de 25 MB termina en 3 a 10 segundos.' },
        { icon: '⬇️', title: 'Descargue el MP3', desc: 'El resultado conserva el nombre de archivo original con .mp3. Se borra de nuestros servidores en menos de una hora.' },
      ]}
      whyUse={{ title: 'Por qué convertir FLAC a MP3', bullets: [
        { title: 'FLAC es sin pérdida pero enorme', desc: 'Un FLAC de 5 minutos a bitrates típicos ocupa 25 a 40 MB. El mismo audio en MP3 a 128 kbps son 5 MB. Para teléfonos, coches y Bluetooth, ese tamaño importa.' },
        { title: 'La mayoría de autorradios y altavoces Bluetooth no reproducen FLAC', desc: 'Incluso en 2026, los sistemas de infoentretenimiento de coche de fábrica y mucho equipo Bluetooth de gama media son "MP3 o nada". MP3 simplemente funciona.' },
        { title: 'A 128 kbps la pérdida de calidad es inaudible para casi todos', desc: 'Con auriculares de consumo, en el coche, con altavoces del teléfono, nadie notará la diferencia. El compromiso solo se aprecia con monitores de estudio en escucha crítica.' },
        { title: 'iPods, reproductores MP3 antiguos, apps de música básicas: gana MP3', desc: 'Si va a cargar música en cualquier cosa más antigua que un iPhone reciente, MP3 es la apuesta más segura. El soporte de FLAC en hardware legado es irregular.' },
        { title: 'Sin marca de agua, sin venta cruzada', desc: 'Solo su audio recodificado. No insertamos nada.' },
      ]}}
      useCases={{ title: 'Cuándo conviene convertir FLAC a MP3', items: [
        { title: 'Descarga de Bandcamp o Qobuz → biblioteca de teléfono', desc: 'Bandcamp entrega FLAC por defecto en las descargas de pago. Convierta a MP3 para meter una colección de música en el teléfono o sincronizar con un coche que no maneje FLAC.' },
        { title: 'Ripeado de CD → biblioteca portátil', desc: 'Si ripeó CD a FLAC para archivo, convierta cada álbum a MP3 para escucha diaria y conserve los FLAC como copia maestra.' },
        { title: 'Export de estudio → distribución', desc: 'Su productor musical puede enviarle FLAC. Convierta a MP3 para plataformas de podcast, reproductores web o simplemente para enviar por email la mezcla preliminar a un colaborador.' },
        { title: 'Grabaciones de campo → envío rápido', desc: 'Las grabadoras de campo como la Tascam DR-40X o la Zoom F3 pueden grabar en FLAC. Convierta antes de compartir con un productor o editor de sonido que trabaje en MP3.' },
        { title: 'Limpieza de biblioteca', desc: 'Limpiando un disco viejo lleno de FLAC, conserve los originales en un NAS y convierta a MP3 para uso activo.' },
      ]}}
      proTips={{ title: 'Consejos para una conversión FLAC a MP3 limpia', tips: [
        { title: 'FLAC es sin pérdida, así que el primer recodificado va bien', desc: 'No hay penalización de calidad al ir de FLAC a MP3 una vez. Solo empieza a oír artefactos al recodificar el MP3 de nuevo, o al pasar de MP3 a otros formatos con pérdida.' },
        { title: 'Para uso audiófilo, conserve el FLAC', desc: 'Si escucha con auriculares de gama alta, con un DAC dedicado o hace escucha crítica, vale la pena conservar el FLAC. MP3 es para distribución y uso casual.' },
        { title: 'Las etiquetas no siempre se trasladan', desc: 'Las etiquetas de FLAC (Vorbis comments) y las de MP3 (ID3) son formatos distintos. Nuestro conversor no transfiere carátula ni metadatos detallados entre ellos. Añada las etiquetas usted mismo con MusicBrainz Picard o Mp3tag tras la conversión.' },
        { title: 'Un FLAC de 24 bits/96 kHz se convierte igual que uno de 16 bits/44.1', desc: 'MP3 está limitado en la práctica a 16 bits/48 kHz. La profundidad de bits y la frecuencia de muestreo extra del origen no sobreviven a la codificación MP3, pero tampoco hacen daño.' },
        { title: 'Para conversión sin pérdida, use ALAC en su lugar', desc: 'Si necesita sin pérdida que se reproduzca en iTunes/Apple Music, convierta FLAC a ALAC (Apple Lossless) en su lugar. Misma calidad de audio, menor huella de metadatos que FLAC, se reproduce de forma nativa en el ecosistema Apple.' },
        { title: 'Para un MP3 con bitrate más alto, vuelva a exportar desde Audacity', desc: 'Nuestro conversor entrega 128 kbps. Para 320 kbps, abra el MP3 en Audacity (gratis) y vuelva a exportar. El doble recodificado es apenas audible.' },
      ]}}
      faq={[
        { q: '¿La conversión FLAC a MP3 es realmente gratis?', a: 'Sí. Sin cuenta hasta 25 MB, sin marca de agua, sin límite de tiempo. Los anuncios de las páginas editoriales cubren el coste de servidor.' },
        { q: '¿Cuál es el tamaño máximo de archivo?', a: '25 MB de forma anónima, 60 MB con una cuenta gratuita. Una canción típica de 5 minutos en FLAC son 30 a 40 MB, así que para álbumes completos quizá necesite convertir pista a pista.' },
        { q: '¿Notaré una diferencia de calidad?', a: 'En altavoces de teléfono, en el coche, con auriculares baratos, no. Con monitores de estudio y escucha crítica, posiblemente. El compromiso es razonable para todo excepto masterización y reproducción audiófila.' },
        { q: '¿Se traslada la carátula y los metadatos?', a: 'En parte. Las etiquetas básicas (artista, título, álbum) suelen pasar. La carátula y los Vorbis comments detallados a menudo no. Use MusicBrainz Picard o Mp3tag tras la conversión para etiquetas limpias.' },
        { q: '¿Qué calidad de MP3 entregan?', a: '128 kbps a bitrate constante, 44.1 kHz, conserva la distribución de canales del origen.' },
        { q: '¿Cuánto tarda?', a: 'Segundos. Un FLAC de 25 MB se convierte en 3 a 10 segundos. La subida es el cuello de botella.' },
        { q: '¿Guardan mis archivos?', a: 'No. La subida se borra tras la conversión. La salida se purga en menos de una hora con nuestro cron de limpieza.' },
        { q: '¿Puedo convertir por lotes un álbum entero?', a: 'Aún no. El nivel gratuito es un archivo a la vez. Abra varias pestañas del navegador como solución provisional.' },
        { q: 'Mi FLAC de 24 bits/96 kHz suena igual que el MP3, ¿en serio?', a: 'Casi con seguridad, en reproducción de consumo. Los 24 bits y la alta frecuencia de muestreo importan para procesado y masterización, no para escuchar a través de cadenas de audio de calidad MP3.' },
        { q: '¿Debería convertir a ALAC en su lugar?', a: 'Si necesita audio sin pérdida en Apple Music o iTunes, sí. ALAC es el equivalente Apple de FLAC. Nosotros no entregamos ALAC, pero Audacity sí.' },
        { q: 'Mi FLAC viene de una descarga Hi-Res. ¿Merece la pena convertir?', a: 'Para escuchar en el teléfono o en el coche, el MP3 sonará idéntico. Guarde el original para cualquier procesado futuro.' },
        { q: '¿Puedo obtener más de 128 kbps?', a: 'No desde este conversor. Recodifique el MP3 en Audacity con el bitrate que prefiera.' },
      ]}
      relatedLinks={[
        { href: '/es/wav-to-mp3', label: 'WAV a MP3', desc: 'Convierta WAV sin pérdida a MP3.' },
        { href: '/es/mp3-to-wav', label: 'MP3 a WAV', desc: 'La dirección contraria, MP3 expandido a WAV sin comprimir.' },
        { href: '/es/flac-to-text', label: 'FLAC a texto', desc: 'Transcriba audio FLAC directamente a texto.' },
        { href: '/es/how-to-compress-audio', label: 'Comprimir audio', desc: 'Cuando el MP3 todavía necesita ser más pequeño.' },
      ]}
    />
  )
}
