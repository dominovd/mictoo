import AboutLayout from '@/components/AboutLayout'

const LOCALE_ALTERNATES = {
  'en': 'https://mictoo.com/about',
  'fr': 'https://mictoo.com/fr/about',
  'de': 'https://mictoo.com/de/about',
  'es': 'https://mictoo.com/es/about',
  'ru': 'https://mictoo.com/ru/about',
  'it': 'https://mictoo.com/it/about',
  'pt': 'https://mictoo.com/pt/about',
  'pl': 'https://mictoo.com/pl/about',
  'ja': 'https://mictoo.com/ja/about',
  'ko': 'https://mictoo.com/ko/about',
  'x-default': 'https://mictoo.com/about',
}

export const metadata = {
  title: 'Über Mictoo — Kostenloses KI-Transkriptionstool',
  description: 'Über Mictoo, ein kostenloses KI-gestütztes Audio- und Video-Transkriptionstool. Wer dahintersteht, wie es funktioniert, wie wir Geld verdienen, und was wir mit Ihren Dateien tun (und nicht tun).',
  alternates: { canonical: 'https://mictoo.com/de/about', languages: LOCALE_ALTERNATES },
}

export default function DeAboutPage() {
  return (
    <AboutLayout
      contactHref="/de/contact"
      strings={{
        h1: 'Über Mictoo',
        lead:
          'Mictoo ist ein kostenloses Audio- und Video-Transkriptionstool ohne Anmeldung, gebaut für alle, die Sprache schnell und genau in Text umwandeln müssen.',
        ourWhy:
          "Wir haben Mictoo gebaut, weil großartige Transkription kein Abo, keinen Account und keine technischen Kenntnisse erfordern sollte. Datei ablegen, Text bekommen. Das war's.",

        whoBuiltHeading: 'Wer hinter Mictoo steht',
        whoBuiltBody: [
          'Mictoo ist ein Indie-Projekt, gebaut und betrieben von einem kleinen Team, das die letzten zehn Jahre an SEO, Content und Entwickler-Tools gearbeitet hat. Wir sind kein VC-finanziertes Startup, das einer Milliarde Nutzer hinterherjagt. Wir sind auch kein Nebenprojekt eines Transkriptions-Giganten, der versucht, den Free-Tier-Markt zu erobern. Wir sind Leute, die selbst Transkriptions-Tools nutzen und müde wurden, dass jede Option entweder verschlossen, langsam oder benutzerfeindlich ist.',
          'Wenn Sie den Menschen hinter der Seite direkt erreichen wollen, geht die E-Mail unten auf dieser Seite in einen echten Posteingang. Jede Nachricht wird gelesen.',
        ],

        whatPowersHeading: 'Was hinter Mictoo steckt',
        whatPowersBody:
          'Mictoo läuft auf Whisper von OpenAI, demselben Spracherkennungsmodell, das auch in ChatGPT genutzt wird. Whisper large-v3 wurde auf 680.000 Stunden mehrsprachiges Audio trainiert. Es unterstützt über 50 Sprachen mit Auto-Erkennung und gilt als das stärkste verfügbare offene Spracherkennungsmodell. Wir betreiben Whisper über Groqs US-gehostete API (whisper-large-v3) für Geschwindigkeit und Kosteneffizienz, mit OpenAIs Whisper-API als automatisches Fallback, falls Groq nicht verfügbar ist. Dateien werden direkt zum Transkriptions-Anbieter gestreamt und niemals auf Mictoo-Servern gespeichert. Weder Groq noch OpenAI nutzen API-Audio zum Trainieren von Modellen, und OpenAI speichert API-Daten höchstens 30 Tage zur Missbrauchs-Überwachung, bevor sie gelöscht werden.',

        securityHeading: 'Sicherheit und was mit Ihrer Datei passiert',
        securityBody: [
          'Ihre Audio- oder Videodatei lädt sich zu Vercel Blob Storage hoch, wird zum Transkriptions-Anbieter gestreamt, transkribiert und gelöscht. Die ganze Runde dauert für die meisten Dateien unter einer Minute, und am Ende gibt es keine Kopie Ihrer Datei auf unserer Infrastruktur.',
          'Wir speichern Ihr Transkript auch nicht. Es lebt im Browser-Tab. Wenn Sie es behalten wollen, klicken Sie den Download-Button. Sobald Sie den Tab schließen, haben wir keine Aufzeichnung dessen, was Sie transkribiert haben. Das Einzige, was wir loggen, ist ein anonymer Zähler, wie viele Dateien verarbeitet wurden, um die Nutzung zu verfolgen und unsere Anbieter zu bezahlen.',
          'Wenn Sie angemeldet sind (kostenlos, optional), behalten wir eine kleine Historie Ihrer vergangenen Transkripte in Ihrem Account, damit Sie sie erneut öffnen können. Anonyme Transkription behält keine Historie.',
        ],

        moneyHeading: 'Wie wir Geld verdienen',
        moneyBody: [
          'Mictoo finanziert sich durch Display-Werbung. Wir haben uns bei Google AdSense beworben und planen, Anzeigen auf den Marketing-Seiten zu zeigen (nicht im eigentlichen Tool-Flow). Anzeigen decken unsere Hosting- und API-Rechnungen.',
          'Über Anzeigen hinaus bauen wir einen kleinen Pro-Tarif für Nutzer, die längere Dateien, Batch-Uploads oder Sprecher-Diarisierung brauchen, sobald wir sie liefern. Der Free-Tier wird nicht verschwinden. Der Free-Tier existiert, weil die meisten Leute nur ab und zu eine Datei transkribieren müssen, und dafür sollten sie kein monatliches Abo bezahlen müssen.',
          'Wir verkaufen Ihre Daten nicht. Wir haben keine Daten zum Verkaufen, weil wir Ihre Dateien oder Transkripte nicht speichern. Das Einzige, was Dritte über Sie sehen, ist Standard-Werbe-Targeting (Standort, breite Interessen), das AdSense auf Googles Seite handhabt.',
        ],

        principlesHeading: 'Unsere Prinzipien',
        principles: [
          { label: 'Kostenlos.', body: 'Keine versteckten Kosten, keine Testphasen, keine Kreditkarte für das Kerntool.' },
          { label: 'Privat.', body: 'Ihre Dateien werden nie gespeichert. Sie werden verarbeitet und sofort gelöscht.' },
          { label: 'Einfach.', body: 'Eine Seite, ein Tool, null Hürden.' },
          { label: 'Genau.', body: 'Wir nutzen das beste verfügbare KI-Modell für Transkriptionsqualität.' },
        ],

        editorialHeading: 'Was wir nicht tun werden',
        editorialBullets: [
          { label: 'Keine Dark Patterns.', body: 'Keine falschen Countdown-Timer, kein „Ihre Datei läuft in 60 Sekunden ab, zahlen Sie zum Herunterladen", keine E-Mail-Wände mitten im Upload-Flow.' },
          { label: 'Kein Bait-and-Switch bei Preisen.', body: 'Der Free-Tier ist wirklich kostenlos. Wir werden Features, die früher kostenlos waren, nicht rückwirkend einschränken.' },
          { label: 'Kein Weiterverkauf von Transkripten.', body: 'Wir speichern Ihre Transkripte nicht. Wir haben keine „Trainingsdaten"-Lizenz versteckt in den Bedingungen.' },
          { label: 'Keine täuschenden Werbenetzwerke.', body: 'Wir nutzen Google AdSense, keine Netzwerke, die Ihre Browser-UI austauschen oder den Zurück-Button kapern.' },
          { label: 'Keine gefälschten Bewertungen.', body: 'Wenn Sie Mictoo auf einer Bewertungs-Seite sehen, ist es organisch dahin gekommen. Wir zahlen nicht für Platzierungen und schreiben nicht unsere eigenen Bewertungen.' },
        ],

        contactHeading: 'Kontakt',
        contactPrefix: 'Feedback, ein Funktionswunsch oder eine Frage?',
        contactCtaLabel: 'Kontaktieren Sie uns',
        contactSuffix: ' oder schreiben Sie an',
      }}
    />
  )
}
