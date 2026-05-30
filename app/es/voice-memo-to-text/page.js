import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/voice-memo-to-text',
  'fr': 'https://mictoo.com/fr/voice-memo-to-text',
  'de': 'https://mictoo.com/de/voice-memo-to-text',
  'es': 'https://mictoo.com/es/voice-memo-to-text',
  'ru': 'https://mictoo.com/ru/voice-memo-to-text',
  'it': 'https://mictoo.com/it/voice-memo-to-text',
  'pt': 'https://mictoo.com/pt/voice-memo-to-text',
  'pl': 'https://mictoo.com/pl/voice-memo-to-text',
  'ja': 'https://mictoo.com/ja/voice-memo-to-text',
  'ko': 'https://mictoo.com/ko/voice-memo-to-text',
  'x-default': 'https://mictoo.com/voice-memo-to-text',
}

export const metadata = {
  title: 'Nota de voz a texto — transcribe Voice Memos de iPhone gratis | Mictoo',
  description:
    'Transcripción gratuita de notas de voz. Sube tu Voice Memo de iPhone o la grabación de Android (M4A, MP3) y obtén texto limpio en segundos. Sin registro.',
  alternates: { canonical: 'https://mictoo.com/es/voice-memo-to-text', languages: LANGS },

  openGraph: {
    title: "Nota de voz a texto — transcribe Voice Memos de iPhone gratis | Mictoo",
    description: "Transcripción gratuita de notas de voz. Sube tu Voice Memo de iPhone o la grabación de Android (M4A, MP3) y obtén texto limpio en segundos. Sin registro.",
    url: "https://mictoo.com/es/voice-memo-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nota de voz a texto — transcribe Voice Memos de iPhone gratis | Mictoo",
    description: "Transcripción gratuita de notas de voz. Sube tu Voice Memo de iPhone o la grabación de Android (M4A, MP3) y obtén texto limpio en segundos. Sin registro.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function EsVoiceMemoPage() {
  return (
    <LandingLayout
      defaultLanguage="es"
      badge="iPhone · Android · Gratis"
      h1={
        <>
          Nota de voz a texto
          <br />
          <span className="text-brand-600">Transcriptor gratuito de notas de voz</span>
        </>
      }
      subtitle="Convierte notas de voz en texto limpio. iPhone, Android, grabadora dedicada, cualquier archivo de voz. Súbelo y obtén la transcripción en segundos. Sin registro, sin tarifa por minuto."
      howItWorks={[
        {
          icon: '📱',
          title: 'Pasa la nota al ordenador (o súbela desde el móvil)',
          desc: 'iPhone: abre Voice Memos, toca Compartir, AirDrop o email a ti. Android: localiza la grabación en Archivos o en la carpeta de tu app de grabación. O usa el navegador móvil para subir directamente desde el teléfono.',
        },
        {
          icon: '📂',
          title: 'Sube el archivo',
          desc: 'M4A del iPhone, M4A o MP3 de Android, WAV de algunas grabadoras. Todos sirven.',
        },
        {
          icon: '📋',
          title: 'Recibe la transcripción',
          desc: 'Léela en el navegador, cópiala al portapapeles o descárgala como TXT. Pégala en Notion, Apple Notes, Google Docs o donde vivan tus notas.',
        },
      ]}
      whyUse={{
        title: 'Por qué Mictoo para notas de voz',
        bullets: [
          {
            title: 'Soporte nativo de M4A',
            desc: 'Voice Memos de iPhone guarda como M4A. Aceptamos M4A directamente. Sin conversión.',
          },
          {
            title: 'Gratis sin contador de minutos',
            desc: 'Las notas de voz son formato de "una a la vez". Pagar por minuto por una idea de 2 minutos es tonto. Gratis sin tope encaja con el caso de uso.',
          },
          {
            title: 'Rápido en archivos cortos',
            desc: 'Una nota de voz de 2 minutos se transcribe en unos 5 segundos. Más rápido que teclear la idea tú.',
          },
          {
            title: 'Privacidad',
            desc: 'Las notas de voz suelen ser personales. Tu audio va al proveedor de transcripción, se procesa y se descarta. No lo guardamos.',
          },
          {
            title: 'Mobile-friendly',
            desc: 'Sube directamente desde tu teléfono usando el navegador. iOS y Android funcionan.',
          },
          {
            title: 'La detección automática maneja tu idioma',
            desc: 'Notas de voz en cualquiera de 50+ idiomas. Útil si piensas en dos idiomas y tus notas cambian.',
          },
        ],
      }}
      useCases={{
        title: 'Para qué usa la gente las transcripciones de notas de voz',
        items: [
          {
            title: 'Captura de ideas en movimiento',
            desc: 'Tuviste una idea en un paseo, la dictaste al móvil. Ahora quieres actuar sobre ella. Transcribe, pega en tu gestor de tareas o app de notas.',
          },
          {
            title: 'Dictado de escritura larga',
            desc: 'Algunos redactan ensayos, posts de blog o emails hablando. Transcribe la nota de voz, edita el texto, envía.',
          },
          {
            title: 'Acciones después de una reunión',
            desc: 'Te dictaste un resumen en el camino de vuelta de la sala. Transcribes, pegas en el documento del proyecto.',
          },
          {
            title: 'Notas de campo para periodistas e investigadores',
            desc: 'Captura observaciones y citas in situ. Transcribe después para notas ordenadas.',
          },
          {
            title: 'Listas-recordatorio (compra, prep, planes de proyecto)',
            desc: 'Las notas de voz son más rápidas que teclear en el móvil. Transcribe para tener una versión textual buscable y editable.',
          },
        ],
      }}
      proTips={{
        title: 'Consejos para transcripción de notas de voz',
        tips: [
          {
            title: 'Ten el móvil cerca, pero no demasiado',
            desc: 'De 10 a 15 cm de la boca es lo óptimo. Más cerca y el micro coge plosivos y respiración. Más lejos y pierdes inteligibilidad en entornos ruidosos.',
          },
          {
            title: 'El viento es el enemigo',
            desc: 'Una nota de voz de 10 segundos en una calle ventosa puede ser inservible. Si puedes, párate, gira la espalda al viento, luego graba. O usa auriculares con micro resistente al viento.',
          },
          {
            title: 'Pausa antes de palabras clave',
            desc: 'Al dictar un nombre, dirección o término técnico, pausa brevemente antes. Whisper maneja palabras aisladas mejor que el habla rápida para nombres propios.',
          },
          {
            title: 'Voice Memos de iPhone por defecto graba en M4A lossless, pero puedes ponerlo en lossy',
            desc: 'Settings, Voice Memos, Audio Quality. Lossless es excesivo para transcripción. Lossy es un tercio del tamaño sin diferencia en precisión.',
          },
          {
            title: 'Recorta silencios al inicio y al final antes de subir',
            desc: 'Voice Memos a veces captura 3–5 segundos de aire muerto. Recorta en la app Voice Memos (pulsa Edit) antes de compartir. Archivo más pequeño, transcripción más rápida.',
          },
          {
            title: 'Para dictados largos (escribiendo un borrador por voz), divide en trozos de 5–10 minutos',
            desc: 'Más fácil de editar. Más fácil regrabar un solo trozo si sale mal.',
          },
          {
            title: 'Whisper maneja tu acento mejor que el dictado nativo del móvil',
            desc: 'iOS tiene dictado integrado, pero es english-first y más débil con acentos. Whisper cubre más de 50 idiomas con mejor precisión.',
          },
        ],
      }}
      faq={[
        {
          q: '¿Mictoo soporta Voice Memos de iPhone?',
          a: 'Sí. Voice Memos de iPhone guarda como M4A (a veces ALAC lossless). El M4A funciona directamente. Para ALAC, convierte primero a WAV o M4A AAC.',
        },
        {
          q: '¿Cómo paso la nota de voz del iPhone a Mictoo?',
          a: 'Tres opciones. Abre la nota en Voice Memos, toca Compartir, elige AirDrop al Mac (más rápido) o email a ti. O usa Safari en el iPhone para abrir mictoo.com y subir directamente desde la app Archivos.',
        },
        {
          q: '¿Y las grabaciones de Android?',
          a: 'Las grabadoras de voz de Android suelen guardar como M4A o MP3. Ambos sirven. Localiza el archivo en la app Archivos, compártelo al ordenador o súbelo desde el navegador móvil.',
        },
        {
          q: '¿Puedo subir directamente desde el móvil?',
          a: 'Sí. El sitio es mobile-friendly. Toca la zona de subida, elige el archivo desde la app Archivos del teléfono o la carpeta de grabaciones.',
        },
        {
          q: '¿Cuánto puede durar la nota de voz?',
          a: 'Hasta 30 minutos por archivo en gratis, 60 minutos con login. La mayoría de notas duran menos de 5 minutos, dentro de cualquier límite.',
        },
        {
          q: '¿Qué precisión tiene la transcripción de notas de voz?',
          a: 'Para habla clara en entorno tranquilo, 90–95 %. Para habla mascullada, ruido de fondo (calle, café, coche), la precisión baja. Los nombres propios suelen necesitar limpieza.',
        },
        {
          q: '¿La transcripción incluirá puntuación?',
          a: 'Sí. Whisper añade puntuación automáticamente. No siempre es perfecta para habla dictada (que tiene menos límites naturales de frase), pero se usa tal cual.',
        },
        {
          q: '¿Funciona para dictar en un idioma no inglés?',
          a: 'Sí, más de 50 idiomas. Elige el idioma manualmente desde el desplegable para notas cortas (la detección automática necesita más audio para ser fiable).',
        },
        {
          q: '¿Se guarda mi nota de voz?',
          a: 'No. El archivo va a nuestro proveedor de transcripción, se procesa y se descarta.',
        },
        {
          q: '¿Puedo editar la transcripción antes de descargar?',
          a: 'Sí. Arregla palabras mal entendidas en el navegador antes de exportar.',
        },
        {
          q: '¿Esto funciona para grabar llamadas telefónicas?',
          a: 'Transcribimos el archivo que subes, sea cual sea cómo se grabó. La grabación de llamadas en sí requiere consentimiento en la mayoría de jurisdicciones. Pide consentimiento antes de grabar.',
        },
        {
          q: '¿Diferencia entre esto y el dictado nativo de iOS?',
          a: 'El dictado de iOS es en tiempo real mientras hablas, limitado a ciertos idiomas y más débil con acentos. Mictoo transcribe después de la grabación, soporta más de 50 idiomas y usa un modelo más preciso (Whisper large-v3).',
        },
      ]}
      relatedLinks={[
        { href: '/es/m4a-to-text', label: 'M4A a texto', desc: 'Específicamente para archivos M4A.' },
        { href: '/es/dictation-to-text', label: 'Dictado a texto', desc: 'Para borradores y escritura larga por voz.' },
        { href: '/es/interview-transcription', label: 'Transcripción de entrevistas', desc: 'Para entrevistas grabadas por teléfono.' },
        { href: '/es/transcribe-audio-to-text', label: 'Audio a texto', desc: 'Para otros formatos de audio.' },
      ]}
    />
  )
}
