import ContactLayout from '@/components/ContactLayout'

const LOCALE_ALTERNATES = {
  'en': 'https://mictoo.com/contact',
  'fr': 'https://mictoo.com/fr/contact',
  'de': 'https://mictoo.com/de/contact',
  'es': 'https://mictoo.com/es/contact',
  'ru': 'https://mictoo.com/ru/contact',
  'it': 'https://mictoo.com/it/contact',
  'pt': 'https://mictoo.com/pt/contact',
  'pl': 'https://mictoo.com/pl/contact',
  'ja': 'https://mictoo.com/ja/contact',
  'ko': 'https://mictoo.com/ko/contact',
  'x-default': 'https://mictoo.com/contact',
}

export const metadata = {
  title: 'Contacto — Mictoo',
  description: 'Contacto de Mictoo. info@mictoo.com va a una bandeja humana real. Respuesta en un día laborable. Alcance de soporte, consultas de negocio y atajos de FAQ.',
  alternates: { canonical: 'https://mictoo.com/es/contact', languages: LOCALE_ALTERNATES },
}

export default function EsContactPage() {
  return (
    <ContactLayout
      privacyHref="/es/privacy"
      strings={{
        h1: 'Contáctanos',
        lead:
          '¿Tienes una pregunta, un comentario o una sugerencia de funcionalidad? Nos encantaría saber de ti. Leemos cada mensaje y respondemos en un día laborable.',
        privacyPrefix: 'Para temas de privacidad, consulta nuestra',
        privacyLinkLabel: 'Política de privacidad',
        privacySuffix: '.',

        responseTimeHeading: 'Tiempo de respuesta',
        responseTimeBody:
          'info@mictoo.com va a una bandeja humana real, no a un sistema de tickets. Respondemos de lunes a viernes, CET, normalmente en un día laborable. Si escribes un viernes por la noche, espera respuesta el lunes. No somos un servicio de soporte 24/7 y no fingimos serlo.',

        supportScopeHeading: 'Con qué podemos ayudar',
        supportScopeItems: [
          { label: 'Reportes de bugs.', body: 'Algo roto en el uploader, transcripciones que vuelven incoherentes, el SRT que no carga en tu editor de vídeo. Incluye el nombre del archivo y la hora de subida si puedes.' },
          { label: 'Sugerencias de funcionalidad.', body: 'Cuéntanos qué te gustaría que hiciera Mictoo. No prometemos nada, pero las leemos de verdad y hemos sacado funciones que pidieron los usuarios.' },
          { label: 'Preguntas sobre calidad de transcripción.', body: 'Si un archivo concreto vuelve con mala precisión, mándalo (o descríbelo) y ayudamos a diagnosticar si es problema de grabación o de modelo.' },
          { label: 'Cuenta o facturación.', body: 'En el tier gratuito no hay facturación. Para el tier Pro (cuando lance), las preguntas de billing van también aquí.' },
          { label: 'Partnerships e integraciones.', body: 'Si quieres integrar Mictoo en tu producto, o estás construyendo algo complementario, estamos abiertos a hablar.' },
        ],

        faqShortcutHeading: 'Más rápido que el email',
        faqShortcutBody: [
          'Si tu pregunta es de las comunes, probablemente la respuesta ya esté en el FAQ de la landing correspondiente. Enlaces rápidos: precios, límites de tamaño y duración, formatos soportados y preguntas de privacidad están al pie de cualquier landing (por ejemplo, en la página Audio a texto).',
          'Para cualquier otra cosa, el email es el canal correcto.',
        ],

        businessHeading: 'Negocio y prensa',
        businessBody: [
          'Mismo email: info@mictoo.com. Usa [Press] o [Business] en el asunto para que enrutemos bien el mensaje. Abiertos a entrevistas sobre el espacio indie de SEO y herramientas de IA en productividad, pero no hacemos colocaciones pagadas ni contenido patrocinado.',
          'Si eres periodista escribiendo sobre herramientas de transcripción o IA en software de productividad, damos respuestas directas sobre cómo funciona Mictoo por dentro, cuánto cuesta mantenerlo y qué pensamos del panorama competitivo.',
        ],

        languagesHeading: 'Idiomas',
        languagesBody:
          'Damos soporte en inglés. Respuestas en español y ruso son best-effort. Si escribes en otro idioma, responderemos en inglés salvo que encontremos a alguien fluido en el equipo.',
      }}
    />
  )
}
