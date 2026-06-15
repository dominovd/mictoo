import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/wav-to-text',
  'fr': 'https://mictoo.com/fr/wav-to-text',
  'de': 'https://mictoo.com/de/wav-to-text',
  'es': 'https://mictoo.com/es/wav-to-text',
  'ru': 'https://mictoo.com/ru/wav-to-text',
  'it': 'https://mictoo.com/it/wav-to-text',
  'pt': 'https://mictoo.com/pt/wav-to-text',
  'pl': 'https://mictoo.com/pl/wav-to-text',
  'ja': 'https://mictoo.com/ja/wav-to-text',
  'ko': 'https://mictoo.com/ko/wav-to-text',
  'x-default': 'https://mictoo.com/wav-to-text',
}

export const metadata = {
  title: 'WAV zu Text — Kostenlose WAV-Transkription online | Mictoo',
  description: 'WAV-Dateien kostenlos online in Text umwandeln. Laden Sie eine beliebige WAV-Audiodatei hoch und erhalten Sie in Sekunden eine genaue Transkription. Ohne Anmeldung.',
  alternates: { canonical: 'https://mictoo.com/de/wav-to-text', languages: LANGS },

  openGraph: {
    title: "WAV zu Text — Kostenlose WAV-Transkription online | Mictoo",
    description: "WAV-Dateien kostenlos online in Text umwandeln. Laden Sie eine beliebige WAV-Audiodatei hoch und erhalten Sie in Sekunden eine genaue Transkription. Ohne Anmeldung.",
    url: "https://mictoo.com/de/wav-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "WAV zu Text — Kostenlose WAV-Transkription online | Mictoo",
    description: "WAV-Dateien kostenlos online in Text umwandeln. Laden Sie eine beliebige WAV-Audiodatei hoch und erhalten Sie in Sekunden eine genaue Transkription. Ohne Anmeldung.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function DeWavToTextPage() {
  return (
    <LandingLayout
      badge="WAV · Kostenlos · Sofort"
      h1={<>WAV zu Text<br /><span className="text-brand-600">Kostenlose WAV-Transkription online</span></>}
      subtitle="Laden Sie eine beliebige WAV-Audiodatei hoch und erhalten Sie in Sekunden eine genaue Texttranskription. Unterstützt alle WAV-Aufnahmen — Interviews, Anrufe, Vorlesungen, Sprachnotizen. Kein Konto nötig."
      defaultLanguage="de"
      valueBlock={
        <>
          <p>
            WAV ist unkomprimiertes oder kaum verarbeitetes Audio und kommt häufig aus Recordern, Studios, Interviews, Vorlesungen und Broadcast-Workflows. Die Dateien sind groß, aber oft sehr sauber.
          </p>
          <p>
            Mictoo verarbeitet WAV direkt, inklusive PCM- und Broadcast-WAV-Dateien, damit Sie aus hochwertigen Quellen schnell Text und Untertitel erzeugen.
          </p>
        </>
      }
      howItWorks={[
        { title: 'WAV-Datei hochladen', desc: 'Legen Sie PCM, Standard-WAV oder Broadcast-WAV aus Recorder, Studio oder Schnittprogramm ab.' },
        { title: 'Sprache erkennen', desc: 'Mictoo dekodiert die Audiodaten und erstellt ein Transkript mit Zeitstempeln.' },
        { title: 'Export wählen', desc: 'Nutzen Sie TXT für Notizen oder SRT für Untertitel und Video-Workflows.' },
      ]}
      whyUse={{
        title: 'Warum WAV direkt transkribieren',
        bullets: [
          'Unkomprimierte Sprache gibt der Erkennung eine saubere Ausgangsbasis.',
          'Praktisch für Studio-, Feld- und Interviewaufnahmen ohne Formatwechsel.',
          'Broadcast-WAV-Material lässt sich in Textform leichter archivieren und durchsuchen.',
          'Bei schwierigen Stimmen lohnt sich die bessere Quelle gegenüber einem stark komprimierten MP3.',
        ],
      }}
      useCases={{
        title: 'Wann WAV zu Text passt',
        items: [
          { title: 'Interviews', desc: 'Transkribieren Sie Recorder-Dateien mit möglichst guter Sprachqualität.' },
          { title: 'Podcast-Produktion', desc: 'Erstellen Sie Shownotes, Zitate und Untertitel aus WAV-Mastern.' },
          { title: 'Vorlesungen', desc: 'Machen Sie lange Aufnahmen für Studierende durchsuchbar.' },
          { title: 'Archive', desc: 'Verknüpfen Sie hochwertige Audiodateien mit lesbaren Texten.' },
        ],
      }}
      proTips={{
        title: 'Tipps für WAV-Dateien',
        tips: [
          'Für lange Aufnahmen eine 16-kHz-Mono-Arbeitskopie erstellen, wenn die Datei zu groß ist.',
          'Stille am Anfang und Ende kürzen, bevor Sie sehr große Dateien hochladen.',
          'Für reine Sprachnotizen kann ein temporäres MP3 reichen, aber das WAV-Original behalten.',
        ],
      }}
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
