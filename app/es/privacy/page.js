import InfoSectionsLayout from '@/components/InfoSectionsLayout'

const LOCALE_ALTERNATES = {
  'en': 'https://mictoo.com/privacy',
  'fr': 'https://mictoo.com/fr/privacy',
  'de': 'https://mictoo.com/de/privacy',
  'es': 'https://mictoo.com/es/privacy',
  'ru': 'https://mictoo.com/ru/privacy',
  'x-default': 'https://mictoo.com/privacy',
}

export const metadata = {
  title: 'Política de privacidad — Mictoo',
  description: 'Política de privacidad de Mictoo. No almacenamos tus archivos de audio ni tus transcripciones.',
  alternates: { canonical: 'https://mictoo.com/es/privacy', languages: LOCALE_ALTERNATES },
}

export default function EsPrivacyPage() {
  return (
    <InfoSectionsLayout
      h1="Política de privacidad"
      lastUpdated="Última actualización: mayo de 2026"
      sections={[
        {
          heading: '1. Qué recopilamos',
          body: 'Mictoo no requiere crear una cuenta y no recopila información personal. Cuando subes un archivo, se envía directamente a la API de IA para su transcripción. No almacenamos, registramos ni retenemos tus archivos de audio o vídeo.',
        },
        {
          heading: '2. Procesamiento de archivos',
          body: 'Los archivos subidos se transmiten de forma segura a los servidores de nuestro proveedor de IA para el reconocimiento de voz. Se procesan en tiempo real y no se conservan en nuestros servidores ni en los del proveedor más allá de la duración de una sola petición a la API.',
        },
        {
          heading: '3. Analítica y publicidad',
          body: (
            <>
              Podemos mostrar anuncios mediante Google AdSense. Google puede usar cookies para ofrecer anuncios relevantes. Puedes desactivarlas a través de{' '}
              <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">Google Ad Settings</a>
              . Podemos usar estadísticas anónimas (por ejemplo, conteo de páginas vistas) para entender el uso. No se recopila información personal identificable.
            </>
          ),
        },
        {
          heading: '4. Cookies',
          body: 'Mictoo no establece cookies. Servicios de terceros como Google AdSense pueden establecer sus propias cookies en tu dispositivo.',
        },
        {
          heading: '5. Privacidad de menores',
          body: 'Mictoo no está dirigido a menores de 13 años. No recopilamos a sabiendas datos de menores.',
        },
        {
          heading: '6. Contacto',
          body: (
            <>
              ¿Preguntas sobre esta política? Escríbenos a{' '}
              <a href="mailto:info@mictoo.com" className="text-brand-600 hover:underline">info@mictoo.com</a>.
            </>
          ),
        },
      ]}
    />
  )
}
