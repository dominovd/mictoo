import ComparisonLayout from '@/components/ComparisonLayout'

const LANGS = {
  'en': 'https://mictoo.com/fireflies-alternative',
  'fr': 'https://mictoo.com/fr/fireflies-alternative',
  'de': 'https://mictoo.com/de/fireflies-alternative',
  'es': 'https://mictoo.com/es/fireflies-alternative',
  'ru': 'https://mictoo.com/ru/fireflies-alternative',
  'it': 'https://mictoo.com/it/fireflies-alternative',
  'pt': 'https://mictoo.com/pt/fireflies-alternative',
  'x-default': 'https://mictoo.com/fireflies-alternative',
}

export const metadata = {
  title: 'Fireflies-Alternative — Meetings ohne Bot transkribieren | Mictoo',
  description: 'Fireflies tritt Ihren Meetings als Bot bei, um aufzunehmen und zu transkribieren. Mictoo transkribiert Aufnahmen, die Sie bereits haben — kein Bot, keine Anmeldung, kein OAuth. Kostenlos mit OpenAI Whisper.',
  alternates: { canonical: 'https://mictoo.com/de/fireflies-alternative', languages: LANGS },
}

export default function DeFirefliesAlternativePage() {
  return (
    <ComparisonLayout
      badge="Vergleich · Fireflies · Kostenlos"
      h1={<>Fireflies-Alternative<br /><span className="text-brand-600">Meetings ohne Bot transkribieren</span></>}
      subtitle="Fireflies tritt Ihren Meetings als KI-Bot bei, um in Echtzeit aufzunehmen und zu transkribieren. Mictoo arbeitet umgekehrt — laden Sie die bereits vorhandene Aufnahme hoch und erhalten Sie ein Transkript. Kein Bot, keine Kalender-Integration, keine Anmeldung."
      competitorName="Fireflies"
      rows={[
        { label: 'Kostenlose Stufe',       mictoo: 'Keine Monatsgrenze, 25 MB pro Datei', them: '800 Minuten / Nutzer / Monat' },
        { label: 'Konto erforderlich',     mictoo: 'Nein', them: 'Ja (E-Mail + OAuth)' },
        { label: 'Bezahlpläne',            mictoo: 'Kostenlos',  them: '10-19 $ / Nutzer / Monat' },
        { label: 'Aufnahmemethode',        mictoo: 'Aufnahme selbst hochladen', them: 'Bot tritt Live-Meeting bei' },
        { label: 'Live-Transkription',     mictoo: 'Nein',  them: 'Ja (während des Calls)' },
        { label: 'Kalender-Integration',   mictoo: 'Nein',  them: 'Google / Outlook / Zoom' },
        { label: 'KI-Zusammenfassung',     mictoo: 'Ja, kostenlos', them: 'Ja (kostenpflichtig)' },
        { label: 'CRM-Integration',        mictoo: 'Nein',  them: 'Salesforce, HubSpot etc.' },
        { label: 'Transkriptionsmodell',   mictoo: 'OpenAI Whisper', them: 'Proprietär' },
      ]}
      whyMictoo={[
        { icon: '🚫', title: 'Kein Bot in Ihren Meetings', desc: 'Manche Teilnehmer sind mit einem aufnehmenden KI-Bot unwohl. Mit Mictoo nehmen Sie lokal mit Zoom/Meet/Teams auf und transkribieren danach.' },
        { icon: '🆓', title: 'Keine Anmeldung, kein Kontingent', desc: 'Fireflies\' kostenloser Plan ist auf 800 Minuten pro Nutzer/Monat begrenzt und verlangt OAuth. Mictoo arbeitet ohne Konto und ohne monatliche Minutenzählung.' },
        { icon: '🌍', title: 'Besser für nicht-englisches Audio', desc: 'OpenAI Whisper handhabt 50+ Sprachen mit starker Genauigkeit. Fireflies ist auf englische Business-Calls optimiert und schwächer bei Sprachen wie Russisch, Ukrainisch, Polnisch oder Koreanisch.' },
      ]}
      whenToChoose={{
        mictoo: [
          'Sie nehmen Meetings selbst auf und wollen danach ein Transkript',
          'Sie wollen keinen KI-Bot in Ihren Calls',
          'Sie brauchen Transkription für nicht-englische Meetings',
          'Sie wollen eine kostenlose Option ohne Anmeldung für einmalige Aufnahmen',
        ],
        them: [
          'Sie wollen Live-Transkription während des Meetings',
          'Sie brauchen CRM-Logging von Sales-Gesprächen',
          'Ihr Team will automatische Aufnahme aller Calls',
          'Sie brauchen Conversation Analytics (Sprechzeit, Sentiment etc.)',
        ],
      }}
      faq={[
        { q: 'Kann Mictoo meinem Zoom- oder Teams-Meeting wie Fireflies beitreten?', a: 'Nein. Mictoo tritt Meetings nicht bei. Sie zeichnen den Call mit der eingebauten Aufnahmefunktion von Zoom/Teams/Meet auf und laden die Datei hoch. Das vermeidet den Bot und die damit verbundenen Datenschutzbedenken.' },
        { q: 'Wie bekomme ich eine Aufnahme zum Hochladen?', a: 'In Zoom: Local Recording oder Cloud Recording im Meeting aktivieren. Nach dem Meeting MP4 oder M4A von Zoom herunterladen und in Mictoo ablegen.' },
        { q: 'Macht Mictoo Action Items und Zusammenfassung wie Fireflies?', a: 'Ja. Nach der Transkription zeigt Mictoos KI-Zusammenfassung einen 2-3-Satz-Überblick, Kernpunkte und Action Items — alles in der kostenlosen Stufe. Fireflies bietet ähnliche Funktionen nur in Bezahlplänen.' },
        { q: 'Was ist mit Meeting-Analytics?', a: 'Mictoo macht keine Sprechzeit-, Sentiment- oder Sprecher-Analysen. Wenn Sie Conversation Intelligence für Sales-Coaching brauchen, ist Fireflies (oder Gong) besser geeignet.' },
        { q: 'Ist Mictoo sicher für vertrauliche Meetings?', a: 'Dateien werden direkt an die Whisper-API von OpenAI gestreamt und verworfen. Mictoo speichert nichts. Gemäß OpenAIs API-Datenrichtlinie wird Ihr Audio nicht für Training verwendet und nach maximal 30 Tagen Missbrauchsüberwachung gelöscht.' },
      ]}
      relatedLinks={[
        { href: '/de/otter-alternative', label: 'Otter-Alternative' },
        { href: '/de/meeting-transcription', label: 'Meeting Transkription' },
        { href: '/de/zoom-transcription', label: 'Zoom Transkription' },
        { href: '/de', label: 'Mictoo ausprobieren' },
      ]}
    />
  )
}
