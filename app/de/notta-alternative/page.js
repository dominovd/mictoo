import ComparisonLayout from '@/components/ComparisonLayout'

const LANGS = {
  'en': 'https://mictoo.com/notta-alternative',
  'fr': 'https://mictoo.com/fr/notta-alternative',
  'de': 'https://mictoo.com/de/notta-alternative',
  'es': 'https://mictoo.com/es/notta-alternative',
  'ru': 'https://mictoo.com/ru/notta-alternative',
  'it': 'https://mictoo.com/it/notta-alternative',
  'x-default': 'https://mictoo.com/notta-alternative',
}

export const metadata = {
  title: 'Notta-Alternative — Kostenlose Transkription ohne Monatslimits | Mictoo',
  description: 'Notta begrenzt kostenlose Nutzer auf 120 Minuten pro Monat und jede Transkription auf 3 Minuten. Mictoo ist kostenlos, ohne Anmeldung, ohne Monats-Minutenquote — angetrieben von OpenAI Whisper.',
  alternates: { canonical: 'https://mictoo.com/de/notta-alternative', languages: LANGS },
}

export default function DeNottaAlternativePage() {
  return (
    <ComparisonLayout
      badge="Vergleich · Notta · Kostenlos"
      h1={<>Notta-Alternative<br /><span className="text-brand-600">Keine 120-Minuten-Monatsgrenze</span></>}
      subtitle="Notta ist ein beliebtes All-in-One-Transkriptions-Tool, aber die kostenlose Stufe begrenzt auf 120 Minuten pro Monat und 3 Minuten pro Datei. Mictoo hat keine Monatsquote und nur ein Datei-Limit — kostenlos, ohne Anmeldung."
      competitorName="Notta"
      rows={[
        { label: 'Kostenlose Stufe',       mictoo: 'Keine Monatsgrenze, 25 MB pro Datei', them: '120 Min/Monat, 3 Min pro Datei' },
        { label: 'Konto erforderlich',     mictoo: 'Nein', them: 'Ja (E-Mail-Anmeldung)' },
        { label: 'Bezahlpläne',            mictoo: 'Kostenlos',  them: '9 - 25 $ / Nutzer / Monat' },
        { label: 'Dauer pro Datei',        mictoo: '~25 Min (Dateigröße-Limit)', them: '3 Min (gratis) / 5 h (payment)' },
        { label: 'Live-Transkription',     mictoo: 'Nein',  them: 'Ja (Notta Bot in Meetings)' },
        { label: 'KI-Zusammenfassung',     mictoo: 'Ja, kostenlos', them: 'Ja (kostenpflichtig)' },
        { label: 'Transkriptionsmodell',   mictoo: 'OpenAI Whisper', them: 'Proprietär' },
        { label: 'Sprecher-Labels',        mictoo: 'Manuell',   them: 'Automatisch (kostenpflichtig)' },
        { label: 'Sprachen',               mictoo: '50+',  them: '100+ (Bezahlpläne)' },
      ]}
      whyMictoo={[
        { icon: '⏳', title: 'Keine 3-Minuten-Grenze pro Datei', desc: 'Nottas kostenlose 3-Minuten-Grenze pro Datei ist zu kurz für Podcasts, Vorlesungen oder Interviews. Mictoo verarbeitet volle ~25-minütige Audiodateien kostenlos.' },
        { icon: '🆓', title: 'Keine monatliche Minutenquote', desc: 'Notta zählt jede Minute gegen eine 120-Min/Monat-Quote. Mictoo begrenzt nur die einzelne Dateigröße — eine Datei oder mehrere, ohne Minutenzählung.' },
        { icon: '✨', title: 'KI-Zusammenfassung in der kostenlosen Stufe', desc: 'Notta stellt KI-Zusammenfassungen in Bezahlpläne. Mictoo erzeugt kostenlos eine Zusammenfassung mit Kernpunkten und Action Items, jedes Mal.' },
      ]}
      whenToChoose={{
        mictoo: [
          'Sie müssen kostenlos Dateien länger als 3 Minuten transkribieren',
          'Sie wollen die 120-Min-Monatsgrenze nicht erreichen',
          'Sie wollen KI-Zusammenfassung ohne zu zahlen',
          'Sie brauchen keine automatische Sprecher-Diarisierung',
        ],
        them: [
          'Sie brauchen den Notta Bot, der Live-Meetings beitritt',
          'Sie brauchen automatische Sprecher-Labels',
          'Sie wollen einen CRM-integrierten Workflow',
          'Sie zahlen gerne für unbegrenzte Features',
        ],
      }}
      faq={[
        { q: 'Ist Mictoo wirklich kostenlos ohne Minutenquote?', a: 'Ja. Das einzige Limit ist die Dateigröße (25 MB, was bei typischer Podcast-Bitrate etwa 25 Minuten entspricht). Keine monatliche Minutenzählung und kein Datei-Anzahl-Limit.' },
        { q: 'Warum begrenzt Notta kostenlose Nutzer so stark?', a: 'Notta nutzt ein Freemium-Modell, bei dem die kostenlose Stufe absichtlich limitiert ist, um Bezahl-Upgrades anzuregen. Mictoos Modell ist werbefinanziert, daher ist die kostenlose Stufe per Design großzügig.' },
        { q: 'Wie verdient Mictoo Geld, wenn es kostenlos ist?', a: 'Display-Anzeigen (Google AdSense), im Lade-Zustand während eine Datei transkribiert wird. Das Transkript selbst und der Upload-Bereich sind werbefrei.' },
        { q: 'Unterstützt Mictoo Live-Meeting-Transkription?', a: 'Nein — Mictoo arbeitet nur auf aufgezeichneten Dateien. Für Live-Capture nutzen Sie die eingebauten Captions Ihrer Meeting-Plattform (Zoom, Google Meet, Teams) und laden die Aufnahme danach in Mictoo für ein sauberes Transkript hoch.' },
        { q: 'Welche Sprachen unterstützt Mictoo?', a: 'OpenAI Whisper handhabt 50+ Sprachen mit automatischer Erkennung — Englisch, Spanisch, Französisch, Deutsch, Russisch, Ukrainisch, Japanisch, Chinesisch, Arabisch, Hindi, Koreanisch und mehr. Sprache nur auswählen, wenn die Auto-Erkennung sich irrt.' },
      ]}
      relatedLinks={[
        { href: '/de/turboscribe-alternative', label: 'TurboScribe-Alternative' },
        { href: '/de/otter-alternative', label: 'Otter-Alternative' },
        { href: '/de/podcast-transcription', label: 'Podcast Transkription' },
        { href: '/de', label: 'Mictoo ausprobieren' },
      ]}
    />
  )
}
