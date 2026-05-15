import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/meeting-transcription',
  'fr': 'https://mictoo.com/fr/meeting-transcription',
  'de': 'https://mictoo.com/de/meeting-transcription',
  'es': 'https://mictoo.com/es/meeting-transcription',
  'ru': 'https://mictoo.com/ru/meeting-transcription',
  'x-default': 'https://mictoo.com/meeting-transcription',
}

export const metadata = {
  title: 'Meeting-Transkription — Kostenlose KI-Meeting-Protokolle | Mictoo',
  description: 'Meetings, Telefonkonferenzen und Zoom/Teams-Sessions kostenlos in Text umwandeln. Ohne Anmeldung. Im Browser bearbeiten, als .txt oder .srt herunterladen.',
  alternates: { canonical: 'https://mictoo.com/de/meeting-transcription', languages: LANGS },
}

export default function DeMeetingPage() {
  return (
    <LandingLayout
      badge="Meetings · Calls · Kostenlos"
      h1={<>Meeting-Transkription<br /><span className="text-brand-600">Kostenlose KI-Protokolle</span></>}
      subtitle="Verwandeln Sie Meeting-Aufnahmen, Telefonkonferenzen und Zoom/Teams-Sessions in durchsuchbaren Text. Ohne Anmeldung. Im Browser bearbeiten und als .txt oder .srt herunterladen."
      defaultLanguage="de"
      features={[
        { icon: '🏢', title: 'Meetings und Calls', desc: 'Funktioniert mit Zoom, Microsoft Teams, Google Meet und jeder lokalen Aufnahme. MP3, MP4, M4A, WAV, WEBM.' },
        { icon: '🔍', title: 'Durchsuchbare Notizen', desc: 'Volles Texttranskript zum Durchsuchen, Teilen und Umwandeln in Action Items, Entscheidungen und Follow-ups.' },
        { icon: '🔒', title: 'Vertraulich', desc: 'Dateien werden verarbeitet und sofort gelöscht. Wir speichern niemals Ihre Meeting-Audios oder -Transkripte.' },
      ]}
      faq={[
        { q: 'Wie transkribiere ich eine Meeting-Aufnahme?', a: 'Exportieren Sie die Aufnahme als MP3, MP4, M4A oder WAV. Hier hochladen — das Transkript ist in Sekunden bereit zum Kopieren oder Herunterladen.' },
        { q: 'Funktioniert mit Zoom und Microsoft Teams?', a: 'Ja. Zoom speichert als MP4 (Video) oder M4A (nur Audio). Teams speichert als MP4. Beides funktioniert direkt mit Mictoo — Datei einfach hochladen.' },
        { q: 'Bekomme ich Sprecher-Labels (Host, Gast 1, Gast 2)?', a: 'Mictoo gibt ein vollständiges Transkript ohne automatische Sprecher-Labels in der kostenlosen Version. Sie können Labels manuell im Browser-Editor vor dem Download hinzufügen.' },
        { q: 'Wie genau ist es für Meetings?', a: 'Bei Meetings mit einem Sprecher gleichzeitig und klarem Audio liegt die Genauigkeit über 95 %. Mehrere parallele Sprecher oder Hintergrundgeräusche können die Genauigkeit verringern.' },
        { q: 'Was ist die maximale Meeting-Länge?', a: 'Bis zu 25 MB pro Datei (≈25 Min bei 128 kbps). Für längere Meetings: niedrigere Bitrate exportieren oder in kürzere Segmente teilen.' },
      ]}
      relatedLinks={[
        { href: '/de/zoom-transcription', label: 'Zoom-Transkription' },
        { href: '/de/business-transcription', label: 'Business-Transkription' },
        { href: '/de/interview-transcription', label: 'Interview-Transkription' },
        { href: '/de', label: 'Alle Formate' },
      ]}
    />
  )
}
