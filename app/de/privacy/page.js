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
  title: 'Datenschutzerklärung — Mictoo',
  description: 'Datenschutzerklärung von Mictoo. Wir speichern weder Ihre Audiodateien noch Ihre Transkripte.',
  alternates: { canonical: 'https://mictoo.com/de/privacy', languages: LOCALE_ALTERNATES },
}

export default function DePrivacyPage() {
  return (
    <InfoSectionsLayout
      h1="Datenschutzerklärung"
      lastUpdated="Zuletzt aktualisiert: Mai 2026"
      sections={[
        {
          heading: '1. Was wir erfassen',
          body: 'Mictoo erfordert kein Benutzerkonto und erfasst keine personenbezogenen Daten. Wenn Sie eine Datei hochladen, wird sie direkt an die KI-API zur Transkription gesendet. Wir speichern, protokollieren oder bewahren Ihre Audio- oder Videodateien nicht auf.',
        },
        {
          heading: '2. Dateiverarbeitung',
          body: 'Hochgeladene Dateien werden sicher an die Server unseres KI-Anbieters zur Spracherkennung übertragen. Die Dateien werden in Echtzeit verarbeitet und nicht über die Dauer einer einzelnen API-Anfrage hinaus auf unseren Servern oder denen unseres Anbieters gespeichert.',
        },
        {
          heading: '3. Analyse und Werbung',
          body: (
            <>
              Wir zeigen möglicherweise Anzeigen über Google AdSense an. Google verwendet ggf. Cookies, um relevante Anzeigen zu schalten. Sie können dies über die{' '}
              <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">Google Ad Settings</a>
              {' '}deaktivieren. Wir nutzen ggf. anonyme Analysen (z.&nbsp;B. Seitenaufrufe), um die Nutzung zu verstehen. Es werden keine personenbezogenen Daten erfasst.
            </>
          ),
        },
        {
          heading: '4. Cookies',
          body: 'Mictoo selbst setzt keine Cookies. Drittanbieterdienste wie Google AdSense können ihre eigenen Cookies auf Ihrem Gerät speichern.',
        },
        {
          heading: '5. Datenschutz für Kinder',
          body: 'Mictoo richtet sich nicht an Kinder unter 13 Jahren. Wir erheben wissentlich keine Daten von Kindern.',
        },
        {
          heading: '6. Kontakt',
          body: (
            <>
              Fragen zu dieser Richtlinie? Schreiben Sie uns an{' '}
              <a href="mailto:info@mictoo.com" className="text-brand-600 hover:underline">info@mictoo.com</a>.
            </>
          ),
        },
      ]}
    />
  )
}
