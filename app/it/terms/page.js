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
  title: 'Termini di servizio — Mictoo',
  description: 'Termini di servizio per l\'utilizzo di Mictoo.',
  alternates: { canonical: 'https://mictoo.com/it/terms', languages: LOCALE_ALTERNATES },
}

export default function ItTermsPage() {
  return (
    <InfoSectionsLayout
      h1="Termini di servizio"
      lastUpdated="Ultimo aggiornamento: maggio 2026"
      sections={[
        {
          heading: '1. Accettazione',
          body: 'Utilizzando Mictoo accetti i presenti termini. Se non li accetti, non utilizzare il servizio.',
        },
        {
          heading: '2. Utilizzo del servizio',
          body: 'Mictoo è uno strumento di trascrizione gratuito offerto "così com\'è". Sei responsabile dei file che carichi e devi avere il diritto legale di trascriverli. È vietato l\'utilizzo per contenuti illegali, abusivi o lesivi del copyright.',
        },
        {
          heading: '3. Limitazione di responsabilità',
          body: 'Il servizio è fornito "così com\'è" senza garanzie di alcun tipo. Non garantiamo accuratezza del 100% nella trascrizione. Usa l\'output a tua discrezione.',
        },
        {
          heading: '4. Disponibilità',
          body: 'Possiamo modificare, sospendere o interrompere il servizio in qualsiasi momento senza preavviso.',
        },
        {
          heading: '5. Modifiche ai termini',
          body: 'Potremmo aggiornare questi termini occasionalmente. Le modifiche entrano in vigore alla pubblicazione su questa pagina.',
        },
        {
          heading: '6. Contatti',
          body: (
            <>
              Domande sui termini? Scrivici a{' '}
              <a href="mailto:info@mictoo.com" className="text-brand-600 hover:underline">info@mictoo.com</a>.
            </>
          ),
        },
      ]}
    />
  )
}
