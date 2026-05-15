import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/m4a-to-text',
  'fr': 'https://mictoo.com/fr/m4a-to-text',
  'de': 'https://mictoo.com/de/m4a-to-text',
  'es': 'https://mictoo.com/es/m4a-to-text',
  'ru': 'https://mictoo.com/ru/m4a-to-text',
  'x-default': 'https://mictoo.com/m4a-to-text',
}

export const metadata = {
  title: 'M4A zu Text — Kostenlose M4A-Transkription online | Mictoo',
  description: 'M4A-Audiodateien kostenlos in Text umwandeln. Laden Sie eine beliebige M4A-Datei hoch — iPhone-Sprachmemos, Aufnahmen, Podcasts — und erhalten Sie sofort eine Transkription. Ohne Anmeldung.',
  alternates: { canonical: 'https://mictoo.com/de/m4a-to-text', languages: LANGS },
}

export default function DeM4AToTextPage() {
  return (
    <LandingLayout
      badge="M4A · iPhone · Kostenlos · Sofort"
      h1={<>M4A zu Text<br /><span className="text-brand-600">Kostenlose M4A-Transkription online</span></>}
      subtitle="M4A-Audiodateien sofort in Text umwandeln. Ideal für iPhone-Sprachmemos, Sprachaufnahmen und Podcast-Audiodateien. Kein Konto erforderlich."
      defaultLanguage="de"
      features={[
        { icon: '📱', title: 'iPhone-Sprachmemos', desc: 'M4A ist das Standardformat für iPhone-Sprachmemos und Aufnahmen. Direkt hochladen und in Sekunden eine Transkription erhalten.' },
        { icon: '🎵', title: 'Jede M4A-Datei', desc: 'M4A-Dateien aus jeder Quelle — iPhone, Mac, digitale Rekorder, Podcast-Apps — werden vollständig unterstützt.' },
        { icon: '📄', title: 'Text- oder SRT-Export', desc: 'Laden Sie die Transkription als einfache .txt-Datei oder .srt-Untertiteldatei mit Zeitstempeln herunter.' },
      ]}
      faq={[
        { q: 'Wie wandle ich M4A in Text um?', a: 'Laden Sie Ihre M4A-Datei mit dem Tool oben hoch. Die Transkription wird automatisch erzeugt und in Sekunden angezeigt.' },
        { q: 'Kann ich iPhone-Sprachmemos transkribieren?', a: 'Ja. iPhone-Sprachmemos werden als M4A-Dateien gespeichert. Laden Sie die Datei direkt vom iPhone hoch oder nach Übertragung auf den Computer.' },
        { q: 'Ist M4A zu Text kostenlos?', a: 'Ja, vollständig kostenlos. Kein Konto, kein Abo. Einfach hochladen und transkribieren.' },
        { q: 'Wie groß darf die M4A-Datei sein?', a: 'Bis zu 25 MB. Die meisten Sprachaufnahmen und kurzen Audioclips liegen deutlich darunter.' },
        { q: 'Welche anderen Audioformate werden unterstützt?', a: 'Zusätzlich zu M4A unterstützt Mictoo MP3, MP4, WAV, OGG, WEBM und FLAC.' },
      ]}
      relatedLinks={[
        { href: '/de/wav-to-text', label: 'WAV zu Text' },
        { href: '/de/transcribe-mp3-to-text', label: 'MP3 zu Text' },
        { href: '/de', label: 'Alle Formate' },
      ]}
    />
  )
}
