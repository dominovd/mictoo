import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/youtube-to-text',
  'fr': 'https://mictoo.com/fr/youtube-to-text',
  'de': 'https://mictoo.com/de/youtube-to-text',
  'es': 'https://mictoo.com/es/youtube-to-text',
  'ru': 'https://mictoo.com/ru/youtube-to-text',
  'it': 'https://mictoo.com/it/youtube-to-text',
  'pt': 'https://mictoo.com/pt/youtube-to-text',
  'pl': 'https://mictoo.com/pl/youtube-to-text',
  'ja': 'https://mictoo.com/ja/youtube-to-text',
  'x-default': 'https://mictoo.com/youtube-to-text',
}

export const metadata = {
  title: 'YouTube in Text — YouTube-Videos kostenlos transkribieren | Mictoo',
  description: 'YouTube-Videos kostenlos in Text und SRT-Untertitel umwandeln. Zuerst Audio herunterladen, dann zu Mictoo hochladen. MP3, MP4, M4A. Ohne Anmeldung.',
  alternates: { canonical: 'https://mictoo.com/de/youtube-to-text', languages: LANGS },
}

export default function DeYouTubeToTextPage() {
  return (
    <LandingLayout
      badge="YouTube · SRT · Kostenlos"
      h1={<>YouTube in Text<br /><span className="text-brand-600">YouTube-Videos kostenlos transkribieren</span></>}
      subtitle="Verwandeln Sie jedes YouTube-Video in ein Transkript oder eine SRT-Untertiteldatei. Kostenlos, ohne Anmeldung. Audio- oder Videodatei herunterladen, dann zu Mictoo hochladen."
      defaultLanguage="de"
      features={[
        { icon: '🎬', title: 'Jedes YouTube-Video', desc: 'Tutorials, Podcasts, Interviews, Vorlesungen, Vlogs — jedes Video mit klarer Sprache. Sprachen automatisch erkannt, 50+ unterstützt.' },
        { icon: '📺', title: 'SRT für Untertitel', desc: 'Nach der Transkription können Sie eine einsatzbereite .srt-Datei herunterladen. In YouTube Studio hochladen, um genaue Untertitel zu Ihren Videos hinzuzufügen.' },
        { icon: '📝', title: 'Inhalte wiederverwenden', desc: 'Verwandeln Sie ein Video in einen Blogpost, Show Notes, Social-Media-Zitate oder ein Übersetzungsskript. Das Transkript ist im Browser bearbeitbar.' },
      ]}
      faq={[
        { q: 'Wie bekomme ich Audio aus einem YouTube-Video?', a: 'Für eigene Videos: YouTube Studio öffnen → Inhalt → Video anklicken → Herunterladen. Für fremde Videos hängen die Möglichkeiten von der Lizenz und den YouTube-Nutzungsbedingungen ab. Viele Nutzer laden zunächst ihre eigenen Inhalte herunter und laden sie hier hoch.' },
        { q: 'Kann Mictoo direkt von einer YouTube-URL herunterladen?', a: 'Nein — um YouTubes Nutzungsbedingungen und die Rechte der Creator zu respektieren, lädt Mictoo nicht von URLs. Laden Sie eine Audio- oder Videodatei hoch, zu deren Transkription Sie berechtigt sind.' },
        { q: 'Wie füge ich Mictoo-Untertitel zu meinem YouTube-Video hinzu?', a: 'Nach der Transkription auf „Download .srt" klicken. In YouTube Studio: Video öffnen → Untertitel → Sprache hinzufügen → Datei hochladen → .srt wählen. Untertitel werden automatisch synchronisiert.' },
        { q: 'Funktioniert die Transkription bei nicht-englischen Videos?', a: 'Ja. Mictoo erkennt die gesprochene Sprache automatisch und unterstützt über 50 Sprachen — Spanisch, Französisch, Deutsch, Russisch, Japanisch, Chinesisch, Arabisch und mehr. Manuell einstellbar, falls die Erkennung daneben liegt.' },
        { q: 'Was ist die maximale Videogröße?', a: 'Bis zu 25 MB pro Upload. Ein 25-minütiger Audio-Export mit 128 kbps passt. Für längere Videos extrahieren Sie nur die Audiospur (M4A ist am effizientesten) oder teilen die Datei in mehrere Teile.' },
      ]}
      relatedLinks={[
        { href: '/transcribe-video-to-text', label: 'Video in Text' },
        { href: '/de/free-srt-generator', label: 'SRT-Generator' },
        { href: '/de/podcast-transcription', label: 'Podcast-Transkription' },
        { href: '/de', label: 'Alle Formate' },
      ]}
    />
  )
}
