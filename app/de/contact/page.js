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
  title: 'Kontakt — Mictoo',
  description: 'Kontakt Mictoo. info@mictoo.com geht in einen echten menschlichen Posteingang. Antwort innerhalb eines Werktags. Support-Umfang, Geschäftsanfragen und FAQ-Shortcuts.',
  alternates: { canonical: 'https://mictoo.com/de/contact', languages: LOCALE_ALTERNATES },
}

export default function DeContactPage() {
  return (
    <ContactLayout
      privacyHref="/de/privacy"
      strings={{
        h1: 'Kontaktieren Sie uns',
        lead:
          'Haben Sie eine Frage, Feedback oder einen Funktionswunsch? Wir freuen uns auf Ihre Nachricht. Wir lesen jede Nachricht und antworten innerhalb eines Werktags.',
        privacyPrefix: 'Für Datenschutzfragen siehe unsere',
        privacyLinkLabel: 'Datenschutzerklärung',
        privacySuffix: '.',

        responseTimeHeading: 'Antwortzeit',
        responseTimeBody:
          'info@mictoo.com geht in einen echten menschlichen Posteingang, nicht in ein Ticketing-System. Wir antworten Montag bis Freitag, MEZ, meist innerhalb eines Werktags. Wenn Sie an einem Freitagabend schreiben, erwarten Sie eine Antwort am Montag. Wir sind kein 24/7-Support und tun nicht so.',

        supportScopeHeading: 'Wobei wir helfen können',
        supportScopeItems: [
          { label: 'Bug-Reports.', body: 'Etwas Kaputtes im Uploader, Transkripte, die wirr zurückkommen, die SRT, die nicht in Ihrem Video-Editor läuft. Geben Sie den Dateinamen und die Upload-Zeit an, wenn Sie können.' },
          { label: 'Funktionswünsche.', body: 'Sagen Sie uns, was Sie sich von Mictoo wünschen. Wir versprechen nichts, aber wir lesen sie wirklich und haben Features ausgeliefert, die Nutzer angefragt haben.' },
          { label: 'Fragen zur Transkriptionsqualität.', body: 'Wenn eine bestimmte Datei mit schlechter Genauigkeit zurückkam, schicken Sie sie (oder beschreiben Sie sie) und wir helfen zu diagnostizieren, ob es ein Aufnahme- oder Modell-Problem ist.' },
          { label: 'Account oder Abrechnung.', body: 'Im Free-Tier gibt es keine Abrechnung. Für den Pro-Tier (wenn er startet) gehen Abrechnungsfragen auch hierhin.' },
          { label: 'Partnerschaften und Integrationen.', body: 'Wenn Sie Mictoo in Ihr eigenes Produkt integrieren wollen, oder etwas Ergänzendes bauen, sind wir offen für ein Gespräch.' },
        ],

        faqShortcutHeading: 'Schneller als E-Mail',
        faqShortcutBody: [
          'Wenn Ihre Frage eine der häufigen ist, hat das FAQ auf der passenden Landing-Page wahrscheinlich schon die Antwort. Schnelle Links: Preise, Datei- und Längen-Limits, unterstützte Formate und Datenschutzfragen werden unten auf jeder Landing-Page beantwortet (zum Beispiel auf der Audio-in-Text-Seite).',
          'Für alles andere ist E-Mail der richtige Kanal.',
        ],

        businessHeading: 'Geschäfts- und Presse-Anfragen',
        businessBody: [
          'Gleiche E-Mail: info@mictoo.com. Nutzen Sie [Press] oder [Business] in der Betreffzeile, damit wir die Nachricht richtig routen. Wir sind offen für Interviews zum Thema Indie-SEO und KI-Tools im Produktivitäts-Bereich, machen aber keine bezahlten Platzierungen oder gesponserten Inhalte.',
          'Wenn Sie Journalist sind und über Transkriptions-Tools oder KI in Produktivitäts-Software schreiben, geben wir Ihnen direkte Antworten dazu, wie Mictoo unter der Haube funktioniert, was es kostet zu betreiben, und was wir vom Wettbewerb halten.',
        ],

        languagesHeading: 'Sprachen',
        languagesBody:
          'Wir bieten Support auf Englisch. Russische und spanische Antworten sind Best-Effort. Wenn Sie in einer anderen Sprache schreiben, antworten wir auf Englisch, außer wir finden einen fließenden Sprecher im Team.',
      }}
    />
  )
}
