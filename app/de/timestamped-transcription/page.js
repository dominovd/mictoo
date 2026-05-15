import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/timestamped-transcription',
  'fr': 'https://mictoo.com/fr/timestamped-transcription',
  'de': 'https://mictoo.com/de/timestamped-transcription',
  'es': 'https://mictoo.com/es/timestamped-transcription',
  'ru': 'https://mictoo.com/ru/timestamped-transcription',
  'x-default': 'https://mictoo.com/timestamped-transcription',
}

export const metadata = {
  title: 'Transkript mit Zeitstempeln — Kostenloser Generator | Mictoo',
  description: 'Kostenlose Transkripte mit Zeitstempeln. Audio oder Video hochladen und SRT-Datei mit exakten Timecodes herunterladen. Ohne Anmeldung.',
  alternates: { canonical: 'https://mictoo.com/de/timestamped-transcription', languages: LANGS },
}

export default function DeTimestampedPage() {
  return (
    <LandingLayout
      badge="Timecodes · SRT · Kostenlos"
      h1={<>Transkript mit Zeitstempeln<br /><span className="text-brand-600">Kostenloser Generator</span></>}
      subtitle="Laden Sie eine beliebige Audio- oder Videodatei hoch und erhalten Sie ein Transkript mit exakten Zeitstempeln. Als SRT herunterladen — bereit für YouTube, Videoeditoren und Untertitel-Tools. Ohne Anmeldung."
      defaultLanguage="de"
      features={[
        { icon: '⏱️', title: 'Automatische Timecodes', desc: 'Jedes Segment erhält einen präzisen Start- und Endzeitstempel — automatisch aus Ihrer Audiodatei generiert.' },
        { icon: '📄', title: 'Als .srt herunterladen', desc: 'Exportieren Sie Ihr Transkript mit Zeitstempeln als SRT-Untertiteldatei. Direkt in YouTube, Premiere, DaVinci oder beliebige Untertitel-Tools hochladbar.' },
        { icon: '✏️', title: 'Editierbarer Text', desc: 'Überprüfen und bearbeiten Sie den Klartext-Transkript im Browser vor dem Download. Kein Konto nötig.' },
      ]}
      faq={[
        { q: 'Was ist ein Transkript mit Zeitstempeln?', a: 'Ein Transkript mit Zeitstempeln (auch zeitcodiertes Transkript) ist eine Textversion eines Audio- oder Videoinhalts, in der jede Zeile die genaue Uhrzeit enthält, zu der sie gesprochen wurde — z.B. „00:01:23 → Hallo, willkommen zur Sendung". So können Sie den Text mit dem Originalmedium synchronisieren.' },
        { q: 'Wie erstelle ich kostenlos ein zeitcodiertes Transkript?', a: 'Laden Sie Ihre Audio- oder Videodatei mit dem Tool oben hoch. Mictoo erzeugt automatisch ein Transkript mit Zeitstempeln und lässt Sie es als SRT-Datei oder Klartext herunterladen.' },
        { q: 'Was ist eine SRT-Datei?', a: 'SRT (SubRip Subtitle) ist ein Standard-Untertitelformat mit zeitgesteuerten Textsegmenten. SRT wird von YouTube, Netflix, Premiere Pro, Final Cut, DaVinci Resolve und den meisten Videoplattformen und Editoren unterstützt.' },
        { q: 'Kann ich die SRT-Datei für YouTube-Untertitel verwenden?', a: 'Ja. Nach dem Download der .srt-Datei gehen Sie in YouTube Studio → Untertitel → Sprache hinzufügen → Datei hochladen. Ihre zeitcodierten Untertitel werden automatisch mit dem Video synchronisiert.' },
        { q: 'Wie genau sind die Zeitstempel?', a: 'Zeitstempel werden auf Segmentebene generiert (in der Regel alle 5–15 Sekunden). Bei klarem Audio ist die Genauigkeit hoch. Überlappende Sprecher oder starke Hintergrundgeräusche können die Genauigkeit beeinträchtigen.' },
        { q: 'Was ist der Unterschied zwischen Transkript und Transkript mit Zeitstempeln?', a: 'Ein einfaches Transkript ist nur die Textversion des Audios. Ein Transkript mit Zeitstempeln fügt Zeitstempel hinzu, sodass jeder Abschnitt einem bestimmten Moment der Aufnahme zugeordnet werden kann — wichtig für Untertitel und Videoschnitt.' },
        { q: 'Welche Dateiformate werden unterstützt?', a: 'MP3, MP4, WAV, M4A, OGG, WEBM, FLAC. Jede Audio- oder Videodatei bis 25 MB.' },
      ]}
      relatedLinks={[
        { href: '/de/free-srt-generator', label: 'SRT-Generator' },
        { href: '/transcribe-video-to-text', label: 'Video in Text' },
        { href: '/transcribe-audio-to-text', label: 'Audio in Text' },
        { href: '/de', label: 'Alle Formate' },
      ]}
    />
  )
}
