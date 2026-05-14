import AboutLayout from '@/components/AboutLayout'

const LOCALE_ALTERNATES = {
  'en': 'https://mictoo.com/about',
  'fr': 'https://mictoo.com/fr/about',
  'de': 'https://mictoo.com/de/about',
  'es': 'https://mictoo.com/es/about',
  'ru': 'https://mictoo.com/ru/about',
  'x-default': 'https://mictoo.com/about',
}

export const metadata = {
  title: 'Über Mictoo — Kostenloses KI-Transkriptionstool',
  description: 'Erfahren Sie mehr über Mictoo, ein kostenloses Audio- und Video-Transkriptionstool mit KI. Keine Anmeldung erforderlich.',
  alternates: { canonical: 'https://mictoo.com/de/about', languages: LOCALE_ALTERNATES },
}

export default function DeAboutPage() {
  return (
    <AboutLayout
      contactHref="/de/contact"
      strings={{
        h1: 'Über Mictoo',
        lead: 'Mictoo ist ein kostenloses Audio- und Video-Transkriptionstool ohne Anmeldung, gebaut für alle, die Sprache schnell und genau in Text umwandeln müssen.',
        ourWhy: "Wir haben Mictoo gebaut, weil großartige Transkription kein Abo, keinen Account und keine technischen Kenntnisse erfordern sollte. Datei ablegen, Text bekommen. Das war's.",
        whatPowersHeading: 'Was steckt hinter Mictoo?',
        whatPowersBody: 'Mictoo nutzt ein hochmodernes KI-Spracherkennungsmodell, das auf Hunderttausenden Stunden mehrsprachiger Audiodaten trainiert wurde. Es unterstützt über 50 Sprachen mit automatischer Erkennung und gilt als eine der genauesten kostenlosen Transkriptions-Engines.',
        principlesHeading: 'Unsere Prinzipien',
        principles: [
          { label: 'Kostenlos.', body: 'Keine versteckten Kosten, keine Testphasen, keine Kreditkarte.' },
          { label: 'Privat.', body: 'Ihre Dateien werden nie gespeichert. Sie werden verarbeitet und sofort gelöscht.' },
          { label: 'Einfach.', body: 'Eine Seite, ein Tool, null Hürden.' },
          { label: 'Genau.', body: 'Wir nutzen das beste verfügbare KI-Modell für die Transkriptionsqualität.' },
        ],
        contactHeading: 'Kontakt',
        contactPrefix: 'Feedback, ein Funktionswunsch oder eine Frage?',
        contactCtaLabel: 'Kontaktieren Sie uns',
        contactSuffix: ' oder schreiben Sie an',
      }}
    />
  )
}
