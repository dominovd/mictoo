import AboutLayout from '@/components/AboutLayout'

const LOCALE_ALTERNATES = {
  'en': 'https://mictoo.com/about',
  'fr': 'https://mictoo.com/fr/about',
  'de': 'https://mictoo.com/de/about',
  'es': 'https://mictoo.com/es/about',
  'ru': 'https://mictoo.com/ru/about',
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
        whatPowersBody: 'Mictoo se basa en un modelo de reconocimiento de voz con IA de última generación entrenado con cientos de miles de horas de audio multilingüe. Soporta más de 50 idiomas con detección automática y es considerado uno de los motores de transcripción gratuitos más precisos.',
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
