import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/wav-to-text',
  'fr': 'https://mictoo.com/fr/wav-to-text',
  'de': 'https://mictoo.com/de/wav-to-text',
  'es': 'https://mictoo.com/es/wav-to-text',
  'ru': 'https://mictoo.com/ru/wav-to-text',
  'it': 'https://mictoo.com/it/wav-to-text',
  'pt': 'https://mictoo.com/pt/wav-to-text',
  'x-default': 'https://mictoo.com/wav-to-text',
}

export const metadata = {
  title: 'WAV zu Text — Kostenlose WAV-Transkription online | Mictoo',
  description: 'WAV-Dateien kostenlos online in Text umwandeln. Laden Sie eine beliebige WAV-Audiodatei hoch und erhalten Sie in Sekunden eine genaue Transkription. Ohne Anmeldung.',
  alternates: { canonical: 'https://mictoo.com/de/wav-to-text', languages: LANGS },
}

export default function DeWavToTextPage() {
  return (
    <LandingLayout
      badge="WAV · Kostenlos · Sofort"
      h1={<>WAV zu Text<br /><span className="text-brand-600">Kostenlose WAV-Transkription online</span></>}
      subtitle="Laden Sie eine beliebige WAV-Audiodatei hoch und erhalten Sie in Sekunden eine genaue Texttranskription. Unterstützt alle WAV-Aufnahmen — Interviews, Anrufe, Vorlesungen, Sprachnotizen. Kein Konto nötig."
      defaultLanguage="de"
      features={[
        { icon: '🎙️', title: 'Jede WAV-Datei', desc: 'Standard-WAV, PCM, Broadcast-WAV — jedes WAV-Format bis 25 MB wird akzeptiert.' },
        { icon: '⏱️', title: 'Zeitstempel inklusive', desc: 'Laden Sie die Transkription als .txt-Datei oder .srt-Untertiteldatei mit Zeitcodes herunter.' },
        { icon: '🌍', title: '50+ Sprachen', desc: 'Sprache wird automatisch erkannt. Funktioniert für Deutsch, Englisch, Spanisch, Französisch, Russisch und viele mehr.' },
      ]}
      faq={[
        { q: 'Wie wandle ich eine WAV-Datei in Text um?', a: 'Laden Sie Ihre WAV-Datei mit dem Tool oben hoch. Mictoo transkribiert sie automatisch per KI und zeigt den Text in Sekunden.' },
        { q: 'Ist die WAV-zu-Text-Konvertierung kostenlos?', a: 'Ja, vollständig kostenlos. Kein Konto erforderlich. Laden Sie Ihre WAV-Dateien hoch — kein Monatskontingent, keine Anmeldung.' },
        { q: 'Wie groß darf die WAV-Datei sein?', a: 'Bis zu 25 MB. Für größere Aufnahmen in MP3 konvertieren oder in kürzere Segmente aufteilen.' },
        { q: 'Kann ich ein Transkript mit Zeitstempeln aus einer WAV erhalten?', a: 'Ja. Nach der Transkription auf den .srt-Button klicken, um eine Untertiteldatei mit exakten Zeitstempeln zu erhalten.' },
        { q: 'Welche anderen Audioformate werden unterstützt?', a: 'Mictoo unterstützt zusätzlich zu WAV auch MP3, MP4, M4A, OGG, WEBM und FLAC.' },
      ]}
      relatedLinks={[
        { href: '/de/transcribe-mp3-to-text', label: 'MP3 zu Text' },
        { href: '/de/transcribe-audio-to-text', label: 'Audio zu Text' },
        { href: '/de', label: 'Alle Formate' },
      ]}
    />
  )
}
