import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/webinar-transcription',
  'fr': 'https://mictoo.com/fr/webinar-transcription',
  'de': 'https://mictoo.com/de/webinar-transcription',
  'es': 'https://mictoo.com/es/webinar-transcription',
  'ru': 'https://mictoo.com/ru/webinar-transcription',
  'it': 'https://mictoo.com/it/webinar-transcription',
  'pt': 'https://mictoo.com/pt/webinar-transcription',
  'pl': 'https://mictoo.com/pl/webinar-transcription',
  'x-default': 'https://mictoo.com/webinar-transcription',
}

export const metadata = {
  title: 'Webinar-Transkription — Kostenloses Transkript für Webinar-Aufzeichnungen | Mictoo',
  description: 'Transkribieren Sie Webinar-Aufzeichnungen kostenlos in Text und SRT-Untertitel. Funktioniert mit Zoom, Webex, GoToWebinar und allen MP4/MP3-Exporten. Ohne Anmeldung.',
  alternates: { canonical: 'https://mictoo.com/de/webinar-transcription', languages: LANGS },
}

export default function DeWebinarPage() {
  return (
    <LandingLayout
      badge="Webinare · MP4 · Kostenlos"
      h1={<>Webinar-Transkription<br /><span className="text-brand-600">Kostenloser Transkript-Generator</span></>}
      subtitle="Verwandeln Sie Ihre Webinar-Aufzeichnung in eine durchsuchbare Texttranskription oder SRT-Untertiteldatei. Funktioniert mit Zoom, Webex, GoToWebinar und jedem MP4/MP3-Export."
      defaultLanguage="de"
      features={[
        { icon: '🎥', title: 'Jeder Plattform-Export', desc: 'Zoom, Webex, GoToWebinar, Demio, Livestorm — alle exportieren als MP4 oder M4A. Datei direkt ablegen, keine Konvertierung nötig.' },
        { icon: '📝', title: 'Webinar mehrfach verwerten', desc: 'Verwandeln Sie ein Webinar in einen Blogartikel, Social-Posts, einen Newsletter und ein Follow-up-Dokument für Teilnehmer.' },
        { icon: '📺', title: 'SRT für On-Demand-Replays', desc: 'Laden Sie die .srt-Datei herunter und nutzen Sie sie als Untertitel, wenn Sie das Replay auf YouTube, Vimeo oder Ihrer Website veröffentlichen.' },
      ]}
      faq={[
        { q: 'Wie lade ich meine Zoom- oder Webex-Webinar-Aufzeichnung herunter?', a: 'In Zoom: Web-Portal öffnen → Aufzeichnungen → das Webinar anklicken → Herunterladen. In Webex: Aufzeichnung in "Meine Aufzeichnungen" öffnen → Herunterladen. Beide exportieren standardmäßig als MP4.' },
        { q: 'Kann ich ein Transkript erhalten, während das Webinar läuft?', a: 'Mictoo arbeitet auf aufgezeichneten Dateien, nicht auf Live-Audio-Streams. Für Echtzeit-Untertitel nutzen Sie die Live-Captions-Funktion Ihrer Webinar-Plattform und laden danach die Aufzeichnung für ein sauberes Transkript hoch.' },
        { q: 'Was ist mit mehreren Sprechern und Q&A-Segmenten?', a: 'Mictoo erzeugt eine einzelne Transkription mit allem Gesprochenen. Sprecher-Labels (Host, Panelist 1, Publikum) können manuell im Browser-Editor vor dem Download hinzugefügt werden.' },
        { q: 'Was ist die maximale Webinar-Länge?', a: 'Bis zu 25 MB pro Datei. Ein 60-minütiges Webinar in 64 kbps Mono passt locker; exportieren Sie mit niedrigerer Bitrate oder extrahieren Sie das M4A-Audio für längere Sitzungen.' },
        { q: 'Ist die Transkription für Fach- oder Branchenbegriffe genau?', a: 'Die Genauigkeit ist hoch bei klarem Audio. Markennamen, Akronyme und ungewöhnliche Terminologie werden gelegentlich falsch geschrieben — schnell im Browser-Editor vor dem Export korrigierbar.' },
      ]}
      relatedLinks={[
        { href: '/de/meeting-transcription', label: 'Meeting Transkription' },
        { href: '/de/zoom-transcription', label: 'Zoom Transkription' },
        { href: '/de/free-srt-generator', label: 'SRT-Generator' },
        { href: '/de', label: 'Alle Formate' },
      ]}
    />
  )
}
