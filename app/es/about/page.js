import AboutLayout from '@/components/AboutLayout'

const LOCALE_ALTERNATES = {
  'en': 'https://mictoo.com/about',
  'fr': 'https://mictoo.com/fr/about',
  'de': 'https://mictoo.com/de/about',
  'es': 'https://mictoo.com/es/about',
  'ru': 'https://mictoo.com/ru/about',
  'it': 'https://mictoo.com/it/about',
  'pt': 'https://mictoo.com/pt/about',
  'x-default': 'https://mictoo.com/about',
}

export const metadata = {
  title: 'Acerca de Mictoo — Herramienta gratuita de transcripción con IA',
  description: 'Conoce Mictoo, una herramienta gratuita de transcripción de audio y vídeo con IA. Sin registro.',
  alternates: { canonical: 'https://mictoo.com/es/about', languages: LOCALE_ALTERNATES },
}

export default function EsAboutPage() {
  return (
    <AboutLayout
      contactHref="/es/contact"
      strings={{
        h1: 'Acerca de Mictoo',
        lead: 'Mictoo es una herramienta gratuita de transcripción de audio y vídeo, sin registro, creada para quien necesita convertir voz a texto de forma rápida y precisa.',
        ourWhy: 'Creamos Mictoo porque una buena transcripción no debería requerir suscripción, cuenta ni conocimientos técnicos. Suelta tu archivo, obtén tu texto. Así de simple.',
        whatPowersHeading: '¿Qué impulsa Mictoo?',
        whatPowersBody: 'Mictoo se basa en Whisper de OpenAI — el mismo modelo de reconocimiento de voz que usa ChatGPT, entrenado con 680 000 horas de audio multilingüe. Soporta más de 50 idiomas con detección automática y se considera uno de los modelos de reconocimiento de voz más precisos disponibles. Mictoo ejecuta Whisper mediante la API de Groq (alojada en EE. UU., modelo whisper-large-v3) por velocidad y coste, con la API Whisper de OpenAI conservada como fallback automático. Tus archivos se transmiten directamente al proveedor de transcripción y nunca se almacenan en los servidores de Mictoo; ni Groq ni OpenAI usan datos de la API para entrenar modelos, y OpenAI retiene los datos de la API durante un máximo de 30 días con fines de monitorización anti-abuso antes de eliminarlos.',
        principlesHeading: 'Nuestros principios',
        principles: [
          { label: 'Gratis.', body: 'Sin costos ocultos, sin periodos de prueba, sin tarjeta de crédito.' },
          { label: 'Privado.', body: 'Tus archivos nunca se almacenan. Se procesan y se eliminan al instante.' },
          { label: 'Simple.', body: 'Una página, una herramienta, cero fricción.' },
          { label: 'Preciso.', body: 'Usamos el mejor modelo de IA disponible para la calidad de transcripción.' },
        ],
        contactHeading: 'Contacto',
        contactPrefix: '¿Tienes preguntas, comentarios o sugerencias?',
        contactCtaLabel: 'Contáctanos',
        contactSuffix: ' o escribe a',
      }}
    />
  )
}
