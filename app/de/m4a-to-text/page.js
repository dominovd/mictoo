import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/m4a-to-text',
  'fr': 'https://mictoo.com/fr/m4a-to-text',
  'de': 'https://mictoo.com/de/m4a-to-text',
  'es': 'https://mictoo.com/es/m4a-to-text',
  'ru': 'https://mictoo.com/ru/m4a-to-text',
  'it': 'https://mictoo.com/it/m4a-to-text',
  'pt': 'https://mictoo.com/pt/m4a-to-text',
  'pl': 'https://mictoo.com/pl/m4a-to-text',
  'ja': 'https://mictoo.com/ja/m4a-to-text',
  'ko': 'https://mictoo.com/ko/m4a-to-text',
  'x-default': 'https://mictoo.com/m4a-to-text',
}

export const metadata = {
  title: 'M4A zu Text — Kostenlose M4A-Transkription online | Mictoo',
  description: 'M4A-Audiodateien kostenlos in Text umwandeln. Laden Sie eine beliebige M4A-Datei hoch — iPhone-Sprachmemos, Aufnahmen, Podcasts — und erhalten Sie sofort eine Transkription. Ohne Anmeldung.',
  alternates: { canonical: 'https://mictoo.com/de/m4a-to-text', languages: LANGS },

  openGraph: {
    title: "M4A zu Text — Kostenlose M4A-Transkription online | Mictoo",
    description: "M4A-Audiodateien kostenlos in Text umwandeln. Laden Sie eine beliebige M4A-Datei hoch — iPhone-Sprachmemos, Aufnahmen, Podcasts — und erhalten Sie sofort eine Transkription. Ohne Anmeldung.",
    url: "https://mictoo.com/de/m4a-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "M4A zu Text — Kostenlose M4A-Transkription online | Mictoo",
    description: "M4A-Audiodateien kostenlos in Text umwandeln. Laden Sie eine beliebige M4A-Datei hoch — iPhone-Sprachmemos, Aufnahmen, Podcasts — und erhalten Sie sofort eine Transkription. Ohne Anmeldung.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function DeM4AToTextPage() {
  return (
    <LandingLayout
      badge="M4A · iPhone · Kostenlos · Sofort"
      h1={<>M4A zu Text<br /><span className="text-brand-600">Kostenlose M4A-Transkription online</span></>}
      subtitle="M4A-Audiodateien sofort in Text umwandeln. Ideal für iPhone-Sprachmemos, Sprachaufnahmen und Podcast-Audiodateien. Kein Konto erforderlich."
      defaultLanguage="de"
      valueBlock={
        <>
          <p>
            M4A ist das Standardformat vieler iPhone-Sprachmemos, Apple-Podcast-Downloads, GarageBand-Exporte und mobiler Aufnahme-Apps. Meist steckt darin eine effiziente AAC-Spur.
          </p>
          <p>
            Mictoo akzeptiert M4A direkt. Sie können die Datei hochladen, ohne sie vorher in MP3 umzuwandeln.
          </p>
        </>
      }
      howItWorks={[
        { title: 'M4A ablegen', desc: 'Importieren Sie ein iPhone-Sprachmemo, einen Apple-Export oder eine andere .m4a-Sprachaufnahme.' },
        { title: 'Direkt dekodieren', desc: 'Mictoo liest AAC oder ALAC und bereitet die Transkription im Browser vor.' },
        { title: 'Ergebnis exportieren', desc: 'Laden Sie Text, SRT oder eine Zusammenfassung für Ihren Workflow herunter.' },
      ]}
      whyUse={{
        title: 'Warum M4A praktisch ist',
        bullets: [
          'iPhone-Sprachmemos bleiben klein und liefern trotzdem klare Sprache.',
          'Für moderne Aufnahmen ist keine MP3-Konvertierung nötig.',
          'Funktioniert mit GarageBand, Logic, FaceTime und Notiz-App-Exporten.',
          'Die Quelldatei bleibt erhalten, während Sie das Transkript bearbeiten.',
        ],
      }}
      useCases={{
        title: 'Typische M4A-Anwendungsfälle',
        items: [
          { title: 'iPhone-Sprachmemos', desc: 'Verwandeln Sie Ideen, Interviews oder Feldnotizen schnell in Text.' },
          { title: 'Audio-Produktionsentwürfe', desc: 'Transkribieren Sie GarageBand- oder Logic-Rohmaterial vor dem Schnitt.' },
          { title: 'Aufgezeichnete Kurse und Calls', desc: 'Finden Sie wichtige Stellen ohne vollständiges Anhören.' },
          { title: 'Lernen und Hörmaterial', desc: 'Erstellen Sie Lernnotizen aus gesprochenen Inhalten.' },
        ],
      }}
      proTips={{
        title: 'Tipps für M4A',
        tips: [
          'Lange Stille vor dem Upload schneiden, besonders bei Voice-Memos.',
          'Lossless ist für reine Sprachtranskription meistens unnötig.',
          'Bei mehrsprachigen Dateien die erkannte Sprache vor dem finalen Export prüfen.',
        ],
      }}
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
