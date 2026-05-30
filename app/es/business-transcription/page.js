import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/business-transcription',
  'fr': 'https://mictoo.com/fr/business-transcription',
  'de': 'https://mictoo.com/de/business-transcription',
  'es': 'https://mictoo.com/es/business-transcription',
  'ru': 'https://mictoo.com/ru/business-transcription',
  'it': 'https://mictoo.com/it/business-transcription',
  'pt': 'https://mictoo.com/pt/business-transcription',
  'pl': 'https://mictoo.com/pl/business-transcription',
  'ja': 'https://mictoo.com/ja/business-transcription',
  'ko': 'https://mictoo.com/ko/business-transcription',
  'x-default': 'https://mictoo.com/business-transcription',
}

export const metadata = {
  title: 'Transcripción de negocios — herramienta gratuita para reuniones y llamadas | Mictoo',
  description:
    'Transcripción gratuita de negocios. Llamadas de ventas, customer interviews, focus groups, reuniones de junta, conferencias. Sube y obtén una transcripción limpia con IA en segundos.',
  alternates: { canonical: 'https://mictoo.com/es/business-transcription', languages: LANGS },

  openGraph: {
    title: "Transcripción de negocios — herramienta gratuita para reuniones y llamadas | Mictoo",
    description: "Transcripción gratuita de negocios. Llamadas de ventas, customer interviews, focus groups, reuniones de junta, conferencias. Sube y obtén una transcripción limpia con IA en segundos.",
    url: "https://mictoo.com/es/business-transcription",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Transcripción de negocios — herramienta gratuita para reuniones y llamadas | Mictoo",
    description: "Transcripción gratuita de negocios. Llamadas de ventas, customer interviews, focus groups, reuniones de junta, conferencias. Sube y obtén una transcripción limpia con IA en segundos.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function EsBusinessPage() {
  return (
    <LandingLayout
      defaultLanguage="es"
      badge="Ventas · Research · Compliance · Gratis"
      h1={
        <>
          Transcripción de negocios
          <br />
          <span className="text-brand-600">Audio empresarial a texto, gratis</span>
        </>
      }
      subtitle="Convierte cualquier audio empresarial en texto limpio. Llamadas de ventas, customer interviews, focus groups, conferencias, reuniones de junta. Sin registro, sin tarifa por minuto."
      howItWorks={[
        {
          icon: '🎙️',
          title: 'Sube el audio o vídeo',
          desc: 'MP3 de una grabadora de llamadas, M4A del móvil, MP4 de una videoconferencia, WAV de una grabadora de campo. Llamada de ventas desde Gong, grabación de Zoom de una entrevista de cliente, M4A de una reunión de junta. Todos sirven.',
        },
        {
          icon: '⚡',
          title: 'La IA lo transcribe',
          desc: 'Whisper large-v3 procesa el audio. Una llamada de 30 minutos termina en alrededor de un minuto. Una reunión de 60 en algo menos de dos.',
        },
        {
          icon: '📋',
          title: 'Recibe la transcripción',
          desc: 'Léela, cópiala o descárgala como TXT o SRT. Pégala en tu CRM, repositorio de research, documento de proyecto o archivo de compliance.',
        },
      ]}
      whyUse={{
        title: 'Por qué Mictoo para audio empresarial',
        bullets: [
          {
            title: 'Misma precisión que las opciones caras',
            desc: 'Whisper large-v3 es el modelo detrás de muchas herramientas de transcripción empresarial de pago. Lo corremos sin el coste de licencia por puesto.',
          },
          {
            title: 'Encaja con uso esporádico',
            desc: 'Si transcribes una llamada de ventas a la semana, pagar la suscripción mensual por puesto de una herramienta empresarial es un derroche. Gratis sin contador de minutos encaja con el patrón de uso esporádico.',
          },
          {
            title: 'Más de 50 idiomas, útil para negocio internacional',
            desc: 'Entrevistas multilingües con clientes, llamadas de ventas transfronterizas, mesas con hablantes no nativos de inglés. Todo cubierto.',
          },
          {
            title: 'No guardamos archivos',
            desc: 'La grabación va al proveedor de transcripción y se descarta. Para audio empresarial que no quieres que se quede en un servidor de terceros, esto importa.',
          },
          {
            title: 'Export SRT para editores de vídeo',
            desc: 'Si tu audio empresarial viene de un vídeo (panel de conferencia, town hall), el SRT enchufa directo en Premiere, DaVinci o YouTube Studio para trabajo de subtítulos.',
          },
        ],
      }}
      useCases={{
        title: 'Casos comunes de transcripción de negocios',
        items: [
          {
            title: 'Resúmenes de llamadas de ventas',
            desc: 'Los account executives meten las grabaciones de llamada en el CRM junto al deal. Handoffs más rápidos, mejor recuperación de citas para emails de follow-up, coaching más fácil para sales managers.',
          },
          {
            title: 'Entrevistas con cliente para research de producto',
            desc: 'Product managers e investigadores de UX transcriben conversaciones con clientes para codificar patrones, escribir user stories y construir repositorios de research.',
          },
          {
            title: 'Transcripciones de focus group',
            desc: 'Las agencias de market research transcriben sesiones de focus group para análisis. La transcripción es lo que se codifica, no el vídeo.',
          },
          {
            title: 'Reuniones de junta y offsites de liderazgo',
            desc: 'Las transcripciones hacen las decisiones corporativas buscables y reducen ambigüedad meses después. Útil para governance, comunicaciones a empleados y trazas de auditoría.',
          },
          {
            title: 'Grabaciones de panel de conferencia',
            desc: 'Los equipos de marketing y PR transcriben paneles donde hablaron sus líderes. Posts de blog, citas para redes, contenido de sales enablement. Todo empieza con la transcripción.',
          },
        ],
      }}
      proTips={{
        title: 'Consejos para transcripción de negocios',
        tips: [
          {
            title: 'Para grabaciones de llamadas de ventas, mejor Gong o Chorus si puedes',
            desc: 'Esas herramientas atan la grabación, la transcripción y el logging en CRM en un solo flujo. Mictoo encaja en transcripción esporádica, no en una operación de ventas de alto volumen.',
          },
          {
            title: 'Para customer interviews, pide consentimiento y explica cómo se usa el audio',
            desc: '"Voy a grabar esta conversación para no tener que tomar notas. El audio se transcribe y se queda en nuestro repositorio de research." Esto además es obligatorio legalmente en muchas jurisdicciones para cualquier grabación de llamada.',
          },
          {
            title: 'Usa un buen micro, sobre todo para el cliente',
            desc: 'Las voces de cliente captadas por línea telefónica se transcriben con 5–10 % menos precisión que llamadas por dial-in con cascos USB del lado del cliente. Para entrevistas de alto valor, manda unos cascos antes de la llamada.',
          },
          {
            title: 'Recorta el small talk antes de subir para ahorrar presupuesto',
            desc: 'La mayoría de llamadas de negocio empiezan con 2–5 minutos de tiempo y cortesías. Recórtalo en Audacity antes de subir si el archivo está cerca del límite.',
          },
          {
            title: 'Elige el idioma manualmente en llamadas internacionales',
            desc: 'Si una llamada de ventas abre en inglés pero pasa a francés, la detección automática puede confundirse. Elige el idioma dominante manualmente.',
          },
          {
            title: 'Para audio empresarial confidencial, no uses ninguna transcripción en la nube, incluida la nuestra',
            desc: 'Conversaciones de RR. HH., M&A, legales, cualquier cosa privileged. Usa una instalación local de Whisper. El mismo modelo, corre offline, sin procesamiento de terceros.',
          },
        ],
      }}
      faq={[
        {
          q: '¿Mictoo es apto para uso empresarial?',
          a: 'Para transcripción esporádica (llamadas de ventas, entrevistas, paneles), sí. Para operaciones de alto volumen (un equipo de ventas transcribiendo 50 llamadas al día), una herramienta dedicada como Gong o Chorus encaja mejor porque empaqueta integración CRM, flujos de coaching y analítica de equipo.',
        },
        {
          q: '¿Mi audio empresarial se guarda en vuestros servidores?',
          a: 'No. El archivo va a nuestro proveedor de transcripción (Groq, con OpenAI como respaldo) y se descarta tras procesarse. No conservamos el audio ni la transcripción.',
        },
        {
          q: '¿Esto cumple GDPR?',
          a: 'No guardamos el audio ni la transcripción después de cerrar la página. Estamos en Europa, y nuestros proveedores (Groq US, OpenAI US) tienen DPAs firmados. Para tu situación GDPR concreta (obligaciones de data controller, base legal para grabar), ver nuestra Política de Privacidad y consulta con tu DPO.',
        },
        {
          q: '¿Puedo usar esto para grabar llamadas con clientes de la UE o California?',
          a: 'Puedes usar la transcripción. La grabación en sí requiere consentimiento de la otra parte en muchas jurisdicciones (two-party consent en California y partes de la UE). Pide consentimiento antes de grabar.',
        },
        {
          q: '¿Qué precisión tiene con nombres propios y nombres de empresa?',
          a: 'Menos precisa que con palabras comunes. Whisper no sabe el nombre de tu cliente, el nombre del producto o la terminología específica de tu empresa. Cuenta con arreglar esto a mano. El resto de la transcripción será sólido.',
        },
        {
          q: '¿Tendré etiquetas de hablante (comercial vs cliente)?',
          a: 'No automáticamente. Para llamadas de 2 hablantes, añade las etiquetas a mano según el flujo de conversación. Para llamadas multipartito con pistas de audio separadas por hablante, transcribe cada pista por separado.',
        },
        {
          q: '¿Cómo se compara con Gong, Chorus o Fireflies?',
          a: 'Esas son plataformas completas de llamadas de ventas con integración CRM, coaching automático, tagging por estado del deal y analítica de llamadas. Nosotros somos transcripción pura, sin integraciones, sin capa de coaching. Más barato (gratis), mucho más estrecho. Úsalos si necesitas la plataforma completa. Úsanos a nosotros si solo necesitas el texto.',
        },
        {
          q: '¿Puedo transcribir una llamada de negocio confidencial?',
          a: 'Para llamadas no sensibles, sí. Para confidenciales (RR. HH., legales, M&A, cualquier cosa privileged), evita cualquier transcripción en la nube incluida la nuestra. Usa una instalación local de Whisper.',
        },
        {
          q: '¿Cuánto tarda en transcribir una llamada de negocio?',
          a: 'Alrededor del 1–2 % de la duración del audio. Una llamada de 30 minutos termina en torno a 30–60 segundos.',
        },
        {
          q: '¿Qué formatos de salida hay?',
          a: 'Texto plano (TXT) y SRT (archivo de subtítulos con marcas de tiempo). La copia al portapapeles también funciona para pegar directo en un CRM o documento.',
        },
        {
          q: '¿Puedo subir varias llamadas de ventas a la vez?',
          a: 'Por ahora no en un solo clic. Hoy subes un archivo por vez. La subida por lotes está en la hoja de ruta del futuro plan Pro.',
        },
        {
          q: '¿Y si mi audio empresarial supera los 60 minutos?',
          a: 'Divídelo en trozos por debajo de 60 minutos. Las transcripciones se concatenan después.',
        },
      ]}
      relatedLinks={[
        { href: '/es/interview-transcription', label: 'Transcripción de entrevistas', desc: 'Para entrevistas uno a uno y research cualitativo.' },
        { href: '/es/meeting-transcription', label: 'Transcripción de reuniones', desc: 'Para grabaciones de cualquier reunión, de cualquier plataforma.' },
        { href: '/es/zoom-transcription', label: 'Transcripción de Zoom', desc: 'Para llamadas grabadas en Zoom.' },
        { href: '/es/teams-meeting-transcription', label: 'Transcripción de Teams', desc: 'Para llamadas de Microsoft Teams.' },
      ]}
    />
  )
}
