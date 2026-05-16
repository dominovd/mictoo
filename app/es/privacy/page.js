import InfoSectionsLayout from '@/components/InfoSectionsLayout'

const LOCALE_ALTERNATES = {
  'en': 'https://mictoo.com/privacy',
  'fr': 'https://mictoo.com/fr/privacy',
  'de': 'https://mictoo.com/de/privacy',
  'es': 'https://mictoo.com/es/privacy',
  'ru': 'https://mictoo.com/ru/privacy',
  'it': 'https://mictoo.com/it/privacy',
  'pt': 'https://mictoo.com/pt/privacy',
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
          body: 'Mictoo no requiere una cuenta y no recopila información personal. Cuando subes un archivo, tu navegador lo envía directamente a Vercel Blob, el almacenamiento de archivos de Vercel alojado en EE. UU. El archivo permanece allí brevemente para que nuestro servidor lo transfiera a la API Whisper de Groq (alojada en EE. UU.) para su transcripción, con la API Whisper de OpenAI conservada como fallback automático si Groq no está disponible momentáneamente. El archivo se elimina automáticamente de Vercel Blob en cuanto termina la transcripción — normalmente en menos de un minuto. Una tarea de limpieza por hora barre las subidas residuales que por algún motivo no se eliminaron de inmediato. Mictoo no conserva ninguna copia permanente de tu audio, vídeo ni transcripción en sus propios servidores.',
        },
        {
          heading: '2. Procesamiento de archivos y nuestro proveedor de IA',
          body: 'Los archivos se envían por HTTPS a la API Whisper de Groq y se procesan en tiempo real en infraestructura ubicada en EE. UU. Según la política de datos de Groq, tu audio no se usa para entrenar modelos. En el raro caso de que Groq no esté disponible, la petición pasa automáticamente a la API Whisper de OpenAI; OpenAI tampoco entrena con datos de la API y los retiene durante un máximo de 30 días con fines de monitorización anti-abuso antes de eliminarlos. Mictoo no conserva copia alguna del audio ni de la transcripción una vez finalizada tu sesión de navegador.',
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
