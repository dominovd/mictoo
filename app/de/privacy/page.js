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
          body: 'Mictoo erfordert kein Benutzerkonto und erfasst keine personenbezogenen Daten. Wenn Sie eine Datei hochladen, sendet Ihr Browser sie direkt an Vercel Blob, den in den USA gehosteten Dateispeicher von Vercel. Die Datei liegt dort nur kurz, damit unser Server sie an die Whisper-API von Groq (in den USA gehostet) zur Transkription weiterleiten kann; die Whisper-API von OpenAI dient als automatischer Fallback, falls Groq kurzzeitig nicht verfügbar ist. Die Datei wird unmittelbar nach Abschluss der Transkription automatisch aus Vercel Blob gelöscht — in der Regel innerhalb einer Minute. Ein stündlicher Bereinigungs-Job entfernt verbliebene Uploads, die aus irgendeinem Grund nicht sofort gelöscht wurden. Mictoo selbst speichert keine dauerhafte Kopie Ihrer Audio-, Video- oder Transkriptdateien auf eigenen Servern.',
        },
        {
          heading: '2. Dateiverarbeitung und unser KI-Anbieter',
          body: 'Dateien werden über HTTPS an die Whisper-API von Groq übertragen und in Echtzeit auf US-amerikanischer Infrastruktur verarbeitet. Gemäß Groqs Datenrichtlinie werden Ihre Audiodaten nicht für das Training der Modelle verwendet. Im seltenen Fall, dass Groq nicht verfügbar ist, fällt die Anfrage automatisch auf die Whisper-API von OpenAI zurück; OpenAI trainiert ebenfalls nicht mit API-Daten und speichert sie höchstens 30 Tage zur Missbrauchsüberwachung, bevor sie gelöscht werden. Mictoo selbst behält nach Ende Ihrer Browser-Sitzung weder Audio noch Transkript.',
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
