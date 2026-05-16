import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/teams-meeting-transcription',
  'fr': 'https://mictoo.com/fr/teams-meeting-transcription',
  'de': 'https://mictoo.com/de/teams-meeting-transcription',
  'es': 'https://mictoo.com/es/teams-meeting-transcription',
  'ru': 'https://mictoo.com/ru/teams-meeting-transcription',
  'it': 'https://mictoo.com/it/teams-meeting-transcription',
  'pt': 'https://mictoo.com/pt/teams-meeting-transcription',
  'pl': 'https://mictoo.com/pl/teams-meeting-transcription',
  'ja': 'https://mictoo.com/ja/teams-meeting-transcription',
  'x-default': 'https://mictoo.com/teams-meeting-transcription',
}

export const metadata = {
  title: 'Microsoft Teams Transkription — Teams-Aufzeichnungen transkribieren | Mictoo',
  description: 'Transkribieren Sie Microsoft Teams-Besprechungsaufzeichnungen kostenlos in Text. Funktioniert mit MP4 aus OneDrive oder SharePoint. Keine Anmeldung.',
  alternates: { canonical: 'https://mictoo.com/de/teams-meeting-transcription', languages: LANGS },
}

export default function DeTeamsPage() {
  return (
    <LandingLayout
      badge="Microsoft Teams · MP4 · Kostenlos"
      h1={<>Microsoft Teams Transkription<br /><span className="text-brand-600">Teams-Meetings als Text</span></>}
      subtitle="Verwandeln Sie Ihre Microsoft Teams-Besprechungsaufzeichnung in eine saubere Texttranskription oder eine SRT-Untertiteldatei. Kostenlos, kein Konto erforderlich. Funktioniert mit MP4 aus OneDrive oder SharePoint."
      defaultLanguage="de"
      features={[
        { icon: '🏢', title: 'Optimiert für Teams-Workflows', desc: 'Laden Sie die Aufzeichnung aus OneDrive oder SharePoint herunter — meist unter "Aufzeichnungen" im Meeting-Chat — und legen Sie sie in Mictoo ab. Die MP4 funktioniert direkt.' },
        { icon: '📤', title: 'Teilbare Transkripte', desc: 'Fügen Sie die Transkription in einen Teams-Chat, OneNote oder eine Loop-Komponente ein, um sie mit Teilnehmern zu teilen, die das Meeting verpasst haben.' },
        { icon: '🌐', title: 'Alle Meeting-Sprachen', desc: 'Transkribiert Englisch, Deutsch, Spanisch, Französisch, Italienisch, Niederländisch, Polnisch, Japanisch, Chinesisch und 40+ weitere. Sprache wird automatisch erkannt.' },
      ]}
      faq={[
        { q: 'Wo speichert Teams meine Besprechungsaufzeichnungen?', a: 'Bei den meisten Organisationen speichert Teams Aufzeichnungen im OneDrive des Aufzeichners (1:1-/Gruppenchats) oder im SharePoint-Ordner des Kanals (Kanalbesprechungen). Aufzeichnung öffnen, auf Herunterladen klicken, und Sie erhalten eine MP4-Datei.' },
        { q: 'Bietet Teams nicht bereits ein Transkript?', a: 'Microsoft Teams bietet integrierte Live-Transkription, wenn Ihr Admin sie aktiviert hat, aber die Datei bleibt im Teams-Ökosystem und ist nicht immer herunterladbar. Mictoo gibt Ihnen ein portables .txt oder .srt, das Sie überall nutzen können.' },
        { q: 'Kann ich SRT-Untertitel für das Teams-Video erhalten?', a: 'Ja. Nach der Transkription können Sie eine .srt-Datei mit Zeitstempeln herunterladen und als Untertitel auf YouTube, Vimeo oder jedem Videoeditor für eine saubere Wiedergabe hochladen.' },
        { q: 'Was ist mit vertraulichen Meeting-Inhalten?', a: 'Mictoo speichert keine Dateien. Audio wird an unseren KI-Anbieter zur Transkription gesendet und sofort verworfen. Für Meetings mit regulierten Daten (HIPAA, DSGVO-beschränkt, vertraulich) prüfen Sie die Richtlinien Ihrer Organisation zu Drittanbieter-KI-Diensten vor dem Upload.' },
        { q: 'Was ist die maximale Teams-Aufzeichnungslänge?', a: 'Bis zu 25 MB pro Datei. Die meisten Teams MP4-Exporte überschreiten dies bei Meetings über 30 Minuten — extrahieren Sie zuerst das Audio (M4A) oder nutzen Sie einen Video-Kompressor.' },
      ]}
      relatedLinks={[
        { href: '/de/zoom-transcription', label: 'Zoom Transkription' },
        { href: '/de/meeting-transcription', label: 'Meeting Transkription' },
        { href: '/de', label: 'Alle Formate' },
      ]}
    />
  )
}
