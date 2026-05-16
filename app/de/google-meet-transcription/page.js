import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/google-meet-transcription',
  'fr': 'https://mictoo.com/fr/google-meet-transcription',
  'de': 'https://mictoo.com/de/google-meet-transcription',
  'es': 'https://mictoo.com/es/google-meet-transcription',
  'ru': 'https://mictoo.com/ru/google-meet-transcription',
  'it': 'https://mictoo.com/it/google-meet-transcription',
  'pt': 'https://mictoo.com/pt/google-meet-transcription',
  'pl': 'https://mictoo.com/pl/google-meet-transcription',
  'x-default': 'https://mictoo.com/google-meet-transcription',
}

export const metadata = {
  title: 'Google Meet Transkription — Meet-Aufzeichnungen kostenlos transkribieren | Mictoo',
  description: 'Transkribieren Sie Google Meet-Aufzeichnungen kostenlos in Text. Funktioniert mit MP4-Exporten aus Google Drive. Keine Anmeldung erforderlich.',
  alternates: { canonical: 'https://mictoo.com/de/google-meet-transcription', languages: LANGS },
}

export default function DeGoogleMeetPage() {
  return (
    <LandingLayout
      badge="Google Meet · MP4 · Kostenlos"
      h1={<>Google Meet Transkription<br /><span className="text-brand-600">Meet-Aufzeichnungen in Text umwandeln</span></>}
      subtitle="Laden Sie Ihren Google Meet MP4-Export hoch und erhalten Sie in Sekunden eine saubere Texttranskription. Kostenlos, ohne Anmeldung. Ergänzt Googles Live-Untertitel ideal für ein sauberes Meeting-Protokoll."
      defaultLanguage="de"
      features={[
        { icon: '🎬', title: 'Direkter MP4-Support', desc: 'Google Meet exportiert Aufzeichnungen als MP4 in Ihre Google Drive. Datei herunterladen und in Mictoo ablegen — keine Konvertierung oder Extraktion nötig.' },
        { icon: '🧾', title: 'Sauberer als Live-Untertitel', desc: 'Live-Untertitel erfassen das Wesentliche, aber lassen Satzzeichen und Namen aus. Mictoo erzeugt eine ausgefeilte Transkription, die Sie in Docs, Notion oder eine Recap-E-Mail einfügen können.' },
        { icon: '🔒', title: 'Privat', desc: 'Dateien werden verarbeitet und sofort gelöscht. Wir speichern weder das Meeting-Audio noch die Transkription.' },
      ]}
      faq={[
        { q: 'Wie lade ich eine Google Meet-Aufzeichnung herunter?', a: 'Öffnen Sie Google Drive → Meine Ablage → Meet Recordings (automatisch erstellter Ordner). Suchen Sie Ihr Meeting, klicken Sie auf ⋮ → Herunterladen. Die Datei ist ein MP4 — direkt in Mictoo ablegen.' },
        { q: 'Warum Mictoo nutzen, wenn Google Meet bereits Live-Untertitel hat?', a: 'Live-Untertitel sind während des Meetings hilfreich, werden aber standardmäßig nicht gespeichert und enthalten keine Satzzeichen oder korrekte Großschreibung. Mictoo gibt Ihnen eine ausgefeilte, bearbeitbare Transkription, fertig zum Teilen oder Weiterverwenden.' },
        { q: 'Kann ich Sprecher-Labels (Host, Gast 1 usw.) bekommen?', a: 'Nicht automatisch in der kostenlosen Version. Die Transkription ist ein einzelner Textstream — Sprecher-Labels können manuell im Browser-Editor hinzugefügt werden.' },
        { q: 'Wie lang darf die Meet-Aufzeichnung sein?', a: 'Bis zu 25 MB pro Datei. Ein Google Meet MP4 in Standardqualität ist etwa 50 MB pro 30 Minuten; extrahieren Sie die Audio-Spur (M4A) oder komprimieren Sie das Video, um die Grenze einzuhalten.' },
        { q: 'Sind Googles "Notizen für mich" das Gleiche?', a: 'Nein — Workspace\'s "Notizen für mich" erzeugt eine KI-Zusammenfassung, keine wortgetreue Transkription. Mictoo liefert die vollständige wortgenaue Transkription, die Sie bei Bedarf separat zusammenfassen können.' },
      ]}
      relatedLinks={[
        { href: '/de/zoom-transcription', label: 'Zoom Transkription' },
        { href: '/de/meeting-transcription', label: 'Meeting Transkription' },
        { href: '/de', label: 'Alle Formate' },
      ]}
    />
  )
}
