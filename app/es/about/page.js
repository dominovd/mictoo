import AboutLayout from '@/components/AboutLayout'

const LOCALE_ALTERNATES = {
  'en': 'https://mictoo.com/about',
  'fr': 'https://mictoo.com/fr/about',
  'de': 'https://mictoo.com/de/about',
  'es': 'https://mictoo.com/es/about',
  'ru': 'https://mictoo.com/ru/about',
  'it': 'https://mictoo.com/it/about',
  'pt': 'https://mictoo.com/pt/about',
  'pl': 'https://mictoo.com/pl/about',
  'ja': 'https://mictoo.com/ja/about',
  'ko': 'https://mictoo.com/ko/about',
  'x-default': 'https://mictoo.com/about',
}

export const metadata = {
  title: 'Acerca de Mictoo — Herramienta gratuita de transcripción con IA',
  description: 'Sobre Mictoo, una herramienta gratuita de transcripción de audio y vídeo con IA. Quién está detrás, cómo funciona, cómo ganamos dinero y qué hacemos (y qué no) con tus archivos.',
  alternates: { canonical: 'https://mictoo.com/es/about', languages: LOCALE_ALTERNATES },
}

export default function EsAboutPage() {
  return (
    <AboutLayout
      contactHref="/es/contact"
      strings={{
        h1: 'Acerca de Mictoo',
        lead:
          'Mictoo es una herramienta gratuita de transcripción de audio y vídeo, sin registro, creada para quien necesita convertir voz a texto de forma rápida y precisa.',
        ourWhy:
          'Creamos Mictoo porque una buena transcripción no debería requerir suscripción, cuenta ni conocimientos técnicos. Suelta tu archivo, obtén tu texto. Así de simple.',

        whoBuiltHeading: 'Quién está detrás de Mictoo',
        whoBuiltBody: [
          'Mictoo es un proyecto indie, hecho y mantenido por un equipo pequeño que lleva la última década trabajando en SEO, contenido y herramientas para desarrolladores. No somos una startup con financiación de capital riesgo persiguiendo mil millones de usuarios. Tampoco somos un proyecto secundario dentro de un gigante de la transcripción intentando capturar el segmento gratuito. Somos gente que usa herramientas de transcripción y se cansó de que cada opción esté detrás de un paywall, sea lenta o sea hostil al usuario.',
          'Si quieres llegar a la persona detrás del sitio directamente, el email al pie de esta página va a una bandeja real. Cada mensaje se lee.',
        ],

        whatPowersHeading: 'Qué hay debajo de Mictoo',
        whatPowersBody:
          'Mictoo se basa en Whisper de OpenAI, el mismo modelo de reconocimiento de voz que usa ChatGPT. Whisper large-v3 se entrenó con 680 000 horas de audio multilingüe. Soporta más de 50 idiomas con detección automática y se considera el modelo abierto de reconocimiento de voz más potente disponible. Servimos Whisper a través de la API de Groq (alojada en EE. UU., modelo whisper-large-v3) por velocidad y coste, con la API de Whisper de OpenAI como fallback automático si Groq no está disponible. Los archivos se transmiten directamente al proveedor de transcripción y nunca se almacenan en los servidores de Mictoo. Ni Groq ni OpenAI usan audio de API para entrenar modelos, y OpenAI retiene los datos de API por un máximo de 30 días para monitorización anti-abuso antes de borrarlos.',

        securityHeading: 'Seguridad y qué pasa con tu archivo',
        securityBody: [
          'Tu archivo de audio o vídeo sube a Vercel Blob storage, se streamea al proveedor de transcripción, se transcribe y se borra. Todo el viaje tarda menos de un minuto para la mayoría de archivos, y al final no queda ninguna copia de tu archivo en nuestra infraestructura.',
          'Tampoco guardamos tu transcripción. Vive en la pestaña del navegador. Si quieres conservarla, pulsa descargar. Una vez cierras la pestaña, no tenemos registro de lo que transcribiste. Lo único que registramos es un contador anónimo de cuántos archivos se han procesado, para seguir el uso y pagar las facturas de los proveedores.',
          'Si has iniciado sesión (gratis, opcional), guardamos un pequeño historial de transcripciones pasadas en tu cuenta para que puedas reabrirlas. La transcripción anónima no guarda historial de ningún tipo.',
        ],

        moneyHeading: 'Cómo ganamos dinero',
        moneyBody: [
          'Mictoo se financia con publicidad gráfica. Hemos solicitado Google AdSense y planeamos mostrar anuncios en las páginas de marketing (no en el flujo de la herramienta). Los anuncios cubren nuestros gastos de hosting y de API.',
          'Más allá de los anuncios, estamos construyendo un plan Pro pequeño para usuarios que necesiten archivos más largos, subida por lotes o diarización de hablantes cuando la lancemos. El tier gratuito no va a desaparecer. El tier gratuito existe porque la mayoría solo necesita transcribir un archivo de vez en cuando, y para eso no debería pagar una suscripción mensual.',
          'No vendemos tus datos. No tenemos datos para vender, porque no guardamos tus archivos ni tus transcripciones. Lo único que terceros ven sobre ti es targeting publicitario estándar (ubicación, intereses generales), que AdSense maneja en el lado de Google.',
        ],

        principlesHeading: 'Nuestros principios',
        principles: [
          { label: 'Gratis.', body: 'Sin costes ocultos, sin periodos de prueba, sin tarjeta para la herramienta principal.' },
          { label: 'Privado.', body: 'Tus archivos nunca se almacenan. Se procesan y se eliminan al instante.' },
          { label: 'Simple.', body: 'Una página, una herramienta, cero fricción.' },
          { label: 'Preciso.', body: 'Usamos el mejor modelo de IA disponible para la calidad de transcripción.' },
        ],

        editorialHeading: 'Lo que no haremos',
        editorialBullets: [
          { label: 'Sin dark patterns.', body: 'Sin temporizadores falsos, sin "tu archivo caduca en 60 segundos, paga para descargar", sin muros de email en mitad del flujo de subida.' },
          { label: 'Sin bait-and-switch en precios.', body: 'El tier gratuito es genuinamente gratis. No vamos a cerrar retroactivamente funciones que antes eran gratis.' },
          { label: 'Sin reventa de transcripciones.', body: 'No guardamos tus transcripciones. No tenemos una licencia de "datos de entrenamiento" escondida en las condiciones.' },
          { label: 'Sin redes publicitarias engañosas.', body: 'Usamos Google AdSense, no redes que sustituyen la UI del navegador o secuestran el botón Atrás.' },
          { label: 'Sin reseñas falsas.', body: 'Si ves Mictoo en una web de reseñas, llegó ahí orgánicamente. No pagamos por colocación ni escribimos nuestras propias reseñas.' },
        ],

        contactHeading: 'Contacto',
        contactPrefix: '¿Tienes preguntas, comentarios o sugerencias?',
        contactCtaLabel: 'Contáctanos',
        contactSuffix: ' o escribe a',
      }}
    />
  )
}
