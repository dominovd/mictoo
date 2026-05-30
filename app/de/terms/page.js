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
  'ko': 'https://mictoo.com/ko/terms',
  'x-default': 'https://mictoo.com/terms',
}

export const metadata = {
  title: 'Nutzungsbedingungen — Mictoo',
  description: 'Nutzungsbedingungen für das kostenlose Transkriptionstool Mictoo.',
  alternates: { canonical: 'https://mictoo.com/de/terms', languages: LOCALE_ALTERNATES },

  openGraph: {
    title: "Nutzungsbedingungen — Mictoo",
    description: "Nutzungsbedingungen für das kostenlose Transkriptionstool Mictoo.",
    url: "https://mictoo.com/de/terms",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nutzungsbedingungen — Mictoo",
    description: "Nutzungsbedingungen für das kostenlose Transkriptionstool Mictoo.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function DeTermsPage() {
  return (
    <InfoSectionsLayout
      h1="Nutzungsbedingungen"
      lastUpdated="Zuletzt aktualisiert: Mai 2026"
      sections={[
        {
          heading: '1. Annahme der Bedingungen',
          body: 'Durch die Nutzung von Mictoo („der Dienst") stimmen Sie diesen Nutzungsbedingungen zu. Wenn Sie nicht zustimmen, nutzen Sie den Dienst bitte nicht.',
        },
        {
          heading: '2. Nutzung des Dienstes',
          body: 'Mictoo stellt ein kostenloses KI-gestütztes Audio- und Video-Transkriptionstool bereit. Sie dürfen den Dienst für private und kommerzielle Zwecke nutzen, sofern:',
          list: [
            'Sie nur Dateien hochladen, zu deren Transkription Sie berechtigt sind.',
            'Sie nicht versuchen, den Dienst zu missbrauchen, zu überlasten oder zurückzuentwickeln.',
            'Sie keine illegalen Inhalte oder Inhalte hochladen, die Rechte Dritter verletzen.',
          ],
        },
        {
          heading: '3. Geistiges Eigentum',
          body: 'Sie behalten das volle Eigentum an den hochgeladenen Dateien und den erstellten Transkripten. Wir beanspruchen keine Rechte an Ihren Inhalten.',
        },
        {
          heading: '4. Gewährleistungsausschluss',
          body: 'Der Dienst wird „wie besehen" ohne jegliche Gewährleistung bereitgestellt. Wir garantieren keine 100-prozentige Transkriptionsgenauigkeit. Nutzen Sie die Ergebnisse nach eigenem Ermessen.',
        },
        {
          heading: '5. Haftungsbeschränkung',
          body: 'Soweit gesetzlich zulässig, haften Mictoo und seine Betreiber nicht für indirekte, beiläufige oder Folgeschäden, die sich aus Ihrer Nutzung des Dienstes ergeben.',
        },
        {
          heading: '6. Änderungen der Bedingungen',
          body: 'Wir können diese Bedingungen jederzeit aktualisieren. Die fortgesetzte Nutzung des Dienstes nach Veröffentlichung der Änderungen gilt als Annahme der aktualisierten Bedingungen.',
        },
        {
          heading: '7. Kontakt',
          body: (
            <>
              Fragen? Schreiben Sie uns an{' '}
              <a href="mailto:info@mictoo.com" className="text-brand-600 hover:underline">info@mictoo.com</a>.
            </>
          ),
        },
      ]}
    />
  )
}
