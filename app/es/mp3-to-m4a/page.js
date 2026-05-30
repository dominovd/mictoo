import LandingLayout from '@/components/LandingLayout'
import ConverterZone from '@/components/ConverterZone'

const LANGS = {
  'en': 'https://mictoo.com/mp3-to-m4a',
  'fr': 'https://mictoo.com/fr/mp3-to-m4a',
  'de': 'https://mictoo.com/de/mp3-to-m4a',
  'es': 'https://mictoo.com/es/mp3-to-m4a',
  'ru': 'https://mictoo.com/ru/mp3-to-m4a',
  'it': 'https://mictoo.com/it/mp3-to-m4a',
  'pt': 'https://mictoo.com/pt/mp3-to-m4a',
  'pl': 'https://mictoo.com/pl/mp3-to-m4a',
  'ja': 'https://mictoo.com/ja/mp3-to-m4a',
  'ko': 'https://mictoo.com/ko/mp3-to-m4a',
  'x-default': 'https://mictoo.com/mp3-to-m4a',
}

export const metadata = {
  title: 'MP3 a M4A — conversor en línea gratuito | Mictoo',
  description:
    'Convierta MP3 a M4A gratis en línea. Recodifique MP3 a AAC dentro de un contenedor M4A para iPhone, iTunes y el ecosistema Apple. Sin registro, sin marca de agua.',
  alternates: { canonical: 'https://mictoo.com/es/mp3-to-m4a', languages: LANGS },

  openGraph: {
    title: "MP3 a M4A — conversor en línea gratuito | Mictoo",
    description: "Convierta MP3 a M4A gratis en línea. Recodifique MP3 a AAC dentro de un contenedor M4A para iPhone, iTunes y el ecosistema Apple. Sin registro, sin marca de agua.",
    url: "https://mictoo.com/es/mp3-to-m4a",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MP3 a M4A — conversor en línea gratuito | Mictoo",
    description: "Convierta MP3 a M4A gratis en línea. Recodifique MP3 a AAC dentro de un contenedor M4A para iPhone, iTunes y el ecosistema Apple. Sin registro, sin marca de agua.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function EsMp3ToM4aPage() {
  return (
    <LandingLayout
      defaultLanguage="es"
      badge="MP3 → M4A · Gratis · Sin registro"
      h1={<>MP3 a M4A<br /><span className="text-brand-600">Conversor en línea gratuito</span></>}
      subtitle="Suelte un MP3. Reciba un M4A, audio AAC dentro de un contenedor MP4. Se reproduce de forma nativa en iTunes, Apple Music y en cualquier iPhone. Sin marca de agua, sin email."
      tool={<ConverterZone from="mp3" to="m4a" />}
      howItWorks={[
        { icon: '📂', title: 'Suelte el MP3', desc: 'Arrastre cualquier MP3 a la caja. Hasta 25 MB de forma anónima, 60 MB tras registrarse.' },
        { icon: '⚡', title: 'ffmpeg recodifica a AAC', desc: 'AAC a 128 kbps dentro de un contenedor M4A, con la bandera faststart para que se reproduzca de inmediato al hacer streaming. Termina en 3 a 10 segundos.' },
        { icon: '⬇️', title: 'Descargue el M4A', desc: 'El resultado tiene el nombre original con .m4a. Los archivos se borran de nuestros servidores en menos de una hora.' },
      ]}
      whyUse={{ title: 'Por qué convertir MP3 a M4A', bullets: [
        { title: 'El ecosistema Apple prefiere M4A', desc: 'iTunes, Apple Music, iCloud Music Library, GarageBand, todos manejan M4A como formato de primera clase. MP3 también funciona, pero M4A es el que hablan de forma nativa.' },
        { title: 'AAC suena algo mejor que MP3 al mismo bitrate', desc: 'A 128 kbps la diferencia es pequeña pero real, sobre todo en las altas frecuencias. Si su MP3 de origen ya es con pérdida, este recodificado no lo empeora.' },
        { title: 'M4A soporta marcadores de capítulo y metadatos más ricos', desc: 'Si está haciendo audiolibros, previas de podcast o cualquier cosa para el ecosistema Apple, M4A maneja los capítulos con orden. El soporte de capítulos en MP3 es irregular.' },
        { title: 'Los tonos de llamada de iPhone tienen que ser M4A', desc: 'Los tonos de llamada personalizados de iPhone usan la extensión M4R, el mismo formato AAC en MP4 que M4A. Convierta y renombre a .m4r para usar como tono.' },
        { title: 'Sin marca de agua, sin venta cruzada', desc: 'Su audio recodificado, nada más.' },
      ]}}
      useCases={{ title: 'Cuándo conviene convertir MP3 a M4A', items: [
        { title: 'Importar una colección de música a Apple Music', desc: 'M4A se importa limpio y se integra con iCloud Music Library. Los MP3 pueden tener a veces problemas de metadatos durante la sincronización.' },
        { title: 'Hacer un tono de llamada para iPhone', desc: 'Convierta MP3 a M4A, recorte a menos de 40 segundos, renombre a .m4r y suéltelo en Finder con el iPhone conectado.' },
        { title: 'Audiolibro con marcadores de capítulo', desc: 'M4A soporta capítulos; el soporte en MP3 no es fiable. Para audiolibros largos en los que el oyente quiere saltar entre capítulos, M4A es el formato adecuado.' },
        { title: 'Limpieza de notas de voz para iCloud', desc: 'Si tiene una carpeta de notas de voz en MP3 y las quiere en iCloud o Apple Voice Memos, M4A es más nativo y se sincroniza con más fiabilidad.' },
        { title: 'Proyecto de GarageBand o Logic', desc: 'Al importar audio de referencia en el software musical de Apple, M4A entra mejor que MP3 en algunos flujos de trabajo.' },
      ]}}
      proTips={{ title: 'Consejos para la conversión MP3 a M4A', tips: [
        { title: 'Recodificar añade una pequeña pérdida', desc: 'Está pasando de un formato con pérdida a otro. A 128 kbps AAC desde un MP3 de 128 kbps, la pérdida es real pero inaudible para casi cualquier persona en casi cualquier equipo. Para uso crítico, busque una fuente sin pérdida.' },
        { title: 'Para tonos, recorte antes de convertir', desc: 'Los tonos de llamada de iPhone están limitados a 40 segundos. Recorte el MP3 en Audacity o QuickTime primero y luego convierta.' },
        { title: 'AAC a 96 kbps suele superar a MP3 a 128 kbps', desc: 'Nuestro conversor entrega a 128 kbps por compatibilidad, pero con control total podría bajar el bitrate con AAC y aún así igualar la calidad de MP3. No ofrecemos el selector para mantener la herramienta sencilla.' },
        { title: 'M4A frente a MP4: mismo contenedor, convención distinta', desc: 'Los archivos M4A contienen solo audio. Los MP4 pueden contener vídeo, audio o ambos. iTunes usa la extensión .m4a para dejar la distinción clara. Algunos reproductores aceptan cualquiera de las dos extensiones.' },
        { title: 'Los marcadores de capítulo no los añadimos nosotros', desc: 'Solo recodificamos el audio. Para añadir marcadores de capítulo, use Apple Books para audiolibros o una herramienta dedicada como Chapter and Verse.' },
        { title: 'Para MP3 protegidos con DRM, la conversión fallará', desc: 'El DRM es muy raro en MP3 en 2026, pero si por algún motivo tiene uno, no se decodificará.' },
      ]}}
      faq={[
        { q: '¿La conversión MP3 a M4A es realmente gratis?', a: 'Sí. Sin cuenta hasta 25 MB, sin marca de agua, sin límite de tiempo.' },
        { q: '¿Cuál es el tamaño máximo de archivo?', a: '25 MB de forma anónima, 60 MB con una cuenta gratuita.' },
        { q: '¿Sonará el M4A peor que el MP3?', a: 'En teoría sí, recodificar cualquier formato con pérdida añade una pequeña pérdida. En la práctica, a 128 kbps AAC desde un MP3 de 128 kbps, ningún humano oye la diferencia en reproducción de consumo.' },
        { q: '¿Cuál es la diferencia entre M4A y MP4?', a: 'M4A y MP4 son el mismo formato de contenedor. La extensión .m4a solo señala "solo audio" para que iTunes sepa qué hacer con el archivo. Algunos reproductores aceptan cualquiera de las dos extensiones.' },
        { q: '¿Cuánto tarda?', a: 'Segundos. Un MP3 de 25 MB se convierte en 3 a 10 segundos.' },
        { q: '¿Qué calidad entregan?', a: 'AAC a 128 kbps dentro de un contenedor M4A, 44.1 kHz, distribución de canales del origen conservada.' },
        { q: '¿Guardan mis archivos?', a: 'No. La subida se borra tras la conversión. La salida se purga en menos de una hora.' },
        { q: '¿Puedo hacer un tono de llamada de iPhone con esto?', a: 'De forma indirecta. Convierta MP3 a M4A, recorte a menos de 40 segundos en QuickTime, renombre el .m4a a .m4r y suéltelo en Finder con el iPhone conectado.' },
        { q: '¿iTunes aceptará el resultado?', a: 'Sí. M4A es el formato nativo de iTunes.' },
        { q: 'Mi MP3 ya es de 320 kbps. ¿Debo convertir?', a: 'Solo si necesita específicamente M4A por compatibilidad. El resultado será AAC a 128 kbps, técnicamente una bajada de calidad respecto a un MP3 de 320 kbps, pero en la práctica inaudible en la mayoría de equipos. Para conservar la calidad de 320 kbps necesitaría un conversor distinto que permita fijar bitrates superiores.' },
        { q: '¿Se trasladan las etiquetas?', a: 'Las etiquetas básicas (título, artista, álbum) suelen pasar. La carátula y los comentarios detallados son irregulares entre las ID3 de MP3 y los metadatos iTunes de M4A. Vuelva a etiquetar en iTunes o Mp3tag tras la conversión.' },
        { q: '¿Puedo convertir por lotes?', a: 'Aún no en el nivel gratuito. Abra varias pestañas del navegador para convertir varios archivos en paralelo.' },
      ]}
      relatedLinks={[
        { href: '/es/m4a-to-mp3', label: 'M4A a MP3', desc: 'La dirección contraria.' },
        { href: '/es/wav-to-mp3', label: 'WAV a MP3', desc: 'Reduzca WAV a MP3 portátil.' },
        { href: '/es/m4a-to-text', label: 'M4A a texto', desc: 'Transcriba audio M4A directamente.' },
        { href: '/es/how-to-compress-audio', label: 'Comprimir audio', desc: 'Para archivos que necesitan ser aún más pequeños.' },
      ]}
    />
  )
}
