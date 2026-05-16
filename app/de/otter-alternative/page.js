import ComparisonLayout from '@/components/ComparisonLayout'

const LANGS = {
  'en': 'https://mictoo.com/otter-alternative',
  'fr': 'https://mictoo.com/fr/otter-alternative',
  'de': 'https://mictoo.com/de/otter-alternative',
  'es': 'https://mictoo.com/es/otter-alternative',
  'ru': 'https://mictoo.com/ru/otter-alternative',
  'it': 'https://mictoo.com/it/otter-alternative',
  'pt': 'https://mictoo.com/pt/otter-alternative',
  'pl': 'https://mictoo.com/pl/otter-alternative',
  'ja': 'https://mictoo.com/ja/otter-alternative',
  'x-default': 'https://mictoo.com/otter-alternative',
}

export const metadata = {
  title: 'Otter-Alternative — Aufnahmen transkribieren, nicht Live-Meetings | Mictoo',
  description: 'Otter ist auf Live-Meeting-Transkription mit Echtzeit-Untertiteln gebaut. Mictoo transkribiert Aufnahmen, die Sie bereits haben — kostenlos, ohne Anmeldung, ohne Bot. Angetrieben von OpenAI Whisper.',
  alternates: { canonical: 'https://mictoo.com/de/otter-alternative', languages: LANGS },
}

export default function DeOtterAlternativePage() {
  return (
    <ComparisonLayout
      badge="Vergleich · Otter · Kostenlos"
      h1={<>Otter-Alternative<br /><span className="text-brand-600">Für Aufnahmen, nicht Live-Meetings</span></>}
      subtitle="Otter ist berühmt für Live-Meeting-Transkription — Untertitel erscheinen, während Leute sprechen. Mictoo löst die andere Hälfte des Problems: eine Aufnahme, die Sie bereits haben, in Sekunden in Text umgewandelt. Kostenlos, ohne Anmeldung, OpenAI Whisper."
      competitorName="Otter"
      rows={[
        { label: 'Kostenlose Stufe',       mictoo: 'Keine Monatsgrenze, 25 MB pro Datei', them: '300 Minuten / Monat, 30 Min pro Aufnahme' },
        { label: 'Konto erforderlich',     mictoo: 'Nein', them: 'Ja (E-Mail-Anmeldung)' },
        { label: 'Bezahlpläne',            mictoo: 'Kostenlos',  them: '8,33 - 30 $ / Nutzer / Monat' },
        { label: 'Live-Transkription',     mictoo: 'Nein',  them: 'Ja (Echtzeit-Untertitel)' },
        { label: 'Aufnahme-Upload',        mictoo: 'Ja (Datei ablegen)', them: 'Ja (kostenpflichtiger Import)' },
        { label: 'KI-Zusammenfassung',     mictoo: 'Ja, kostenlos', them: 'Ja (kostenpflichtig)' },
        { label: 'Transkriptionsmodell',   mictoo: 'OpenAI Whisper', them: 'Proprietär' },
        { label: 'Sprecher-Labels',        mictoo: 'Manuell',   them: 'Automatisch (payment)' },
        { label: 'Sprachen',               mictoo: '50+',  them: '3 (Englisch, Französisch, Spanisch)' },
      ]}
      whyMictoo={[
        { icon: '🌍', title: '50+ Sprachen vs 3', desc: 'Otter unterstützt nur Englisch, Französisch und Spanisch. Mictoo nutzt Whisper, das 50+ Sprachen mit automatischer Erkennung handhabt — Deutsch, Russisch, Japanisch, Arabisch, Ukrainisch und mehr.' },
        { icon: '🆓', title: 'Keine 300-Minuten-Grenze', desc: 'Otters kostenloser Plan begrenzt auf 300 Minuten pro Monat. Mictoo hat keine Minutenquote — nur das 25-MB-Limit pro Datei.' },
        { icon: '🚫', title: 'Kein Bot in Ihren Meetings', desc: 'Otters Mehrwert ist der Live-Bot, der Calls beitritt. Wenn Sie lieber lokal aufnehmen und keinen KI-Bot im Meeting haben wollen, passt Mictoo zu diesem Workflow.' },
      ]}
      whenToChoose={{
        mictoo: [
          'Sie haben eine Aufnahme und wollen ein schnelles, kostenloses Transkript',
          'Sie arbeiten mit nicht-englischem Audio (Russisch, Deutsch, Japanisch etc.)',
          'Sie wollen keinen KI-Bot in Ihren Calls',
          'Sie transkribieren Podcasts, Vorlesungen, Sprachmemos, nicht nur Meetings',
        ],
        them: [
          'Sie wollen Live-Untertitel während Meetings',
          'Sie sind in einem Team, das geteilte Meeting-Notes braucht',
          'Otter Assistant integriert mit Zoom/Google Meet ist kritisch',
          'Sprecher-Diarisierung ist harte Anforderung (kostenpflichtiger Plan)',
        ],
      }}
      faq={[
        { q: 'Kann Mictoo Live-Transkription wie Otter?', a: 'Nein. Mictoo arbeitet nur auf aufgezeichneten Dateien. Für Echtzeit-Transkription während eines Meetings nutzen Sie Otter, Zooms eingebaute Untertitel oder Google Meet Captions. Mictoo danach für ein sauberes Transkript-File.' },
        { q: 'Ersetzt Mictoo Otter für Podcaster?', a: 'Für Podcast-Transkription speziell, ja. MP3/M4A ablegen, Transkript erhalten, als .txt oder .srt herunterladen. Otters Wert ist Live-Aufnahme; Mictoos Wert ist schnelle Post-Aufnahme-Transkription.' },
        { q: 'Was ist mit Meeting-Zusammenfassungen?', a: 'Beide Tools erzeugen KI-Zusammenfassungen mit Kernpunkten und Action Items. Otter stellt das in Bezahlpläne; Mictoo bietet es kostenlos in jeder Transkription.' },
        { q: 'Ist Mictoo genau bei nicht-englischem Audio?', a: 'Ja — OpenAI Whisper ist eines der stärksten mehrsprachigen Speech-Modelle. Otter ist auf Englisch, Französisch, Spanisch begrenzt; Mictoo handhabt 50+ Sprachen mit Auto-Erkennung.' },
        { q: 'Hat Mictoo eine mobile App?', a: 'Keine native App, aber die Seite funktioniert in mobilen Browsern. mictoo.com auf iPhone oder Android öffnen, Datei vom Gerät wählen, Transkript erhalten.' },
      ]}
      relatedLinks={[
        { href: '/de/fireflies-alternative', label: 'Fireflies-Alternative' },
        { href: '/de/meeting-transcription', label: 'Meeting Transkription' },
        { href: '/de/voice-memo-to-text', label: 'Sprachmemo zu Text' },
        { href: '/de', label: 'Mictoo ausprobieren' },
      ]}
    />
  )
}
