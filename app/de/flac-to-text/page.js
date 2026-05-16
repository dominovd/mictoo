import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/flac-to-text',
  'fr': 'https://mictoo.com/fr/flac-to-text',
  'de': 'https://mictoo.com/de/flac-to-text',
  'es': 'https://mictoo.com/es/flac-to-text',
  'ru': 'https://mictoo.com/ru/flac-to-text',
  'it': 'https://mictoo.com/it/flac-to-text',
  'pt': 'https://mictoo.com/pt/flac-to-text',
  'pl': 'https://mictoo.com/pl/flac-to-text',
  'ja': 'https://mictoo.com/ja/flac-to-text',
  'x-default': 'https://mictoo.com/flac-to-text',
}

export const metadata = {
  title: 'FLAC zu Text — Kostenlose FLAC-Audio-Transkription online | Mictoo',
  description: 'FLAC-Audiodateien kostenlos online in Text umwandeln. Laden Sie eine beliebige FLAC-Aufnahme hoch und erhalten Sie in Sekunden eine genaue Transkription. Ohne Anmeldung.',
  alternates: { canonical: 'https://mictoo.com/de/flac-to-text', languages: LANGS },
}

export default function DeFlacToTextPage() {
  return (
    <LandingLayout
      badge="FLAC · Verlustfrei · Kostenlos"
      h1={<>FLAC zu Text<br /><span className="text-brand-600">Kostenlose FLAC-Transkription online</span></>}
      subtitle="Laden Sie eine beliebige FLAC-Audiodatei hoch und wandeln Sie sie sofort in Text um. Die verlustfreie Qualität von FLAC sorgt für exzellente Transkriptionsgenauigkeit. Kein Konto nötig."
      defaultLanguage="de"
      features={[
        { icon: '🎵', title: 'Verlustfreie Audioqualität', desc: 'FLAC-Dateien bewahren die volle Audioqualität, was der KI-Transkription die höchstmögliche Genauigkeit ermöglicht.' },
        { icon: '⚡', title: 'Sofortige Ergebnisse', desc: 'Die meisten FLAC-Dateien werden in unter 30 Sekunden transkribiert, unabhängig von Qualität oder Bittiefe.' },
        { icon: '📄', title: '.txt- und .srt-Export', desc: 'Laden Sie die Transkription als einfachen Text oder als SRT-Untertiteldatei mit Zeitstempeln herunter.' },
      ]}
      faq={[
        { q: 'Wie wandle ich eine FLAC-Datei in Text um?', a: 'Laden Sie Ihre FLAC-Datei mit dem Tool oben hoch. Die KI transkribiert sie und zeigt den Text in Sekunden.' },
        { q: 'Wird FLAC genauer transkribiert als MP3?', a: 'Die verlustfreie Qualität von FLAC kann die Genauigkeit bei leisem oder komplexem Audio im Vergleich zu stark komprimierten Formaten leicht verbessern.' },
        { q: 'Ist die FLAC-zu-Text-Konvertierung kostenlos?', a: 'Ja, vollständig kostenlos. Kein Konto oder Anmeldung erforderlich.' },
        { q: 'Wie groß darf die FLAC-Datei sein?', a: 'Bis 25 MB. FLAC-Dateien sind aufgrund der verlustfreien Kompression groß — überlegen Sie eine Konvertierung in ein verlustbehaftetes Format, wenn die Datei das Limit überschreitet.' },
      ]}
      relatedLinks={[
        { href: '/de/wav-to-text', label: 'WAV zu Text' },
        { href: '/de/transcribe-mp3-to-text', label: 'MP3 zu Text' },
        { href: '/de', label: 'Alle Formate' },
      ]}
    />
  )
}
