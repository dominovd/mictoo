import InfoSectionsLayout from '@/components/InfoSectionsLayout'

const LOCALE_ALTERNATES = {
  'en': 'https://mictoo.com/terms',
  'fr': 'https://mictoo.com/fr/terms',
  'de': 'https://mictoo.com/de/terms',
  'es': 'https://mictoo.com/es/terms',
  'ru': 'https://mictoo.com/ru/terms',
  'it': 'https://mictoo.com/it/terms',
  'pt': 'https://mictoo.com/pt/terms',
  'pl': 'https://mictoo.com/pl/terms',
  'ja': 'https://mictoo.com/ja/terms',
  'x-default': 'https://mictoo.com/terms',
}

export const metadata = {
  title: 'Términos del servicio — Mictoo',
  description: 'Términos del servicio de la herramienta gratuita de transcripción Mictoo.',
  alternates: { canonical: 'https://mictoo.com/es/terms', languages: LOCALE_ALTERNATES },
}

export default function EsTermsPage() {
  return (
    <InfoSectionsLayout
      h1="Términos del servicio"
      lastUpdated="Última actualización: mayo de 2026"
      sections={[
        {
          heading: '1. Aceptación de los términos',
          body: 'Al usar Mictoo («el Servicio»), aceptas estos Términos del servicio. Si no estás de acuerdo, por favor no uses el Servicio.',
        },
        {
          heading: '2. Uso del servicio',
          body: 'Mictoo ofrece una herramienta gratuita de transcripción de audio y vídeo con IA. Puedes usar el Servicio con fines personales y comerciales, siempre que:',
          list: [
            'Solo subas archivos que tengas derecho a transcribir.',
            'No intentes abusar, sobrecargar o aplicar ingeniería inversa al Servicio.',
            'No subas contenido ilegal o que infrinja derechos de terceros.',
          ],
        },
        {
          heading: '3. Propiedad intelectual',
          body: 'Conservas la propiedad total de los archivos que subes y de las transcripciones generadas. No reclamamos ningún derecho sobre tu contenido.',
        },
        {
          heading: '4. Exclusión de garantías',
          body: 'El Servicio se proporciona «tal cual», sin garantías de ningún tipo. No garantizamos una precisión del 100&nbsp;% en la transcripción. Usa los resultados a tu propio criterio.',
        },
        {
          heading: '5. Limitación de responsabilidad',
          body: 'En la medida máxima permitida por la ley, Mictoo y sus operadores no serán responsables de daños indirectos, incidentales o consecuentes derivados de tu uso del Servicio.',
        },
        {
          heading: '6. Cambios en los términos',
          body: 'Podemos actualizar estos términos en cualquier momento. El uso continuado del Servicio tras publicar los cambios constituye la aceptación de los términos actualizados.',
        },
        {
          heading: '7. Contacto',
          body: (
            <>
              ¿Preguntas? Escríbenos a{' '}
              <a href="mailto:info@mictoo.com" className="text-brand-600 hover:underline">info@mictoo.com</a>.
            </>
          ),
        },
      ]}
    />
  )
}
