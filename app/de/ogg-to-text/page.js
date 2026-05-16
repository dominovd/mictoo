import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/ogg-to-text',
  'fr': 'https://mictoo.com/fr/ogg-to-text',
  'de': 'https://mictoo.com/de/ogg-to-text',
  'es': 'https://mictoo.com/es/ogg-to-text',
  'ru': 'https://mictoo.com/ru/ogg-to-text',
  'it': 'https://mictoo.com/it/ogg-to-text',
  'pt': 'https://mictoo.com/pt/ogg-to-text',
  'x-default': 'https://mictoo.com/ogg-to-text',
}

export const metadata = {
  title: 'OGG zu Text — Kostenlose OGG-Audio-Transkription online | Mictoo',
  description: 'OGG-Audiodateien kostenlos online in Text umwandeln. Laden Sie eine beliebige OGG-Vorbis-Aufnahme hoch und erhalten Sie sofort eine genaue Transkription. Ohne Anmeldung.',
  alternates: { canonical: 'https://mictoo.com/de/ogg-to-text', languages: LANGS },
}

export default function DeOggToTextPage() {
  return (
    <LandingLayout
      badge="OGG · Vorbis · Kostenlos · Sofort"
      h1={<>OGG zu Text<br /><span className="text-brand-600">Kostenlose OGG-Transkription online</span></>}
      subtitle="Laden Sie eine beliebige OGG-Audiodatei hoch und wandeln Sie sie in Sekunden in Text um. Unterstützt OGG Vorbis und OGG Opus. Kein Konto nötig."
      defaultLanguage="de"
      features={[
        { icon: '🎙️', title: 'OGG Vorbis & Opus', desc: 'Unterstützt OGG-Dateien aus jeder Quelle — Sprachrekorder, Webbrowser, Kommunikations-Apps.' },
        { icon: '🌍', title: '50+ Sprachen', desc: 'Sprache automatisch erkannt. Funktioniert für Deutsch, Englisch, Spanisch, Französisch und mehr.' },
        { icon: '📄', title: '.txt- und .srt-Export', desc: 'Download als einfacher Text oder als SRT-Untertiteldatei mit Zeitstempeln.' },
      ]}
      faq={[
        { q: 'Wie wandle ich OGG in Text um?', a: 'Laden Sie Ihre OGG-Datei oben hoch. Die Transkription wird in Sekunden automatisch erzeugt.' },
        { q: 'Ist die OGG-zu-Text-Konvertierung kostenlos?', a: 'Ja, vollständig kostenlos. Keine Anmeldung oder Konto erforderlich.' },
        { q: 'Wie groß darf die OGG-Datei sein?', a: 'Bis 25 MB.' },
        { q: 'Welche anderen Audioformate werden unterstützt?', a: 'Auch MP3, MP4, WAV, M4A, FLAC, WEBM werden unterstützt.' },
      ]}
      relatedLinks={[
        { href: '/de/wav-to-text', label: 'WAV zu Text' },
        { href: '/de/flac-to-text', label: 'FLAC zu Text' },
        { href: '/de', label: 'Alle Formate' },
      ]}
    />
  )
}
