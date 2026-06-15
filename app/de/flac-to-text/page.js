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
  'ko': 'https://mictoo.com/ko/flac-to-text',
  'x-default': 'https://mictoo.com/flac-to-text',
}

export const metadata = {
  title: 'FLAC zu Text — Kostenlose FLAC-Audio-Transkription online | Mictoo',
  description: 'FLAC-Audiodateien kostenlos online in Text umwandeln. Laden Sie eine beliebige FLAC-Aufnahme hoch und erhalten Sie in Sekunden eine genaue Transkription. Ohne Anmeldung.',
  alternates: { canonical: 'https://mictoo.com/de/flac-to-text', languages: LANGS },

  openGraph: {
    title: "FLAC zu Text — Kostenlose FLAC-Audio-Transkription online | Mictoo",
    description: "FLAC-Audiodateien kostenlos online in Text umwandeln. Laden Sie eine beliebige FLAC-Aufnahme hoch und erhalten Sie in Sekunden eine genaue Transkription. Ohne Anmeldung.",
    url: "https://mictoo.com/de/flac-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FLAC zu Text — Kostenlose FLAC-Audio-Transkription online | Mictoo",
    description: "FLAC-Audiodateien kostenlos online in Text umwandeln. Laden Sie eine beliebige FLAC-Aufnahme hoch und erhalten Sie in Sekunden eine genaue Transkription. Ohne Anmeldung.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function DeFlacToTextPage() {
  return (
    <LandingLayout
      badge="FLAC · Verlustfrei · Kostenlos"
      h1={<>FLAC zu Text<br /><span className="text-brand-600">Kostenlose FLAC-Transkription online</span></>}
      subtitle="Laden Sie eine beliebige FLAC-Audiodatei hoch und wandeln Sie sie sofort in Text um. Die verlustfreie Qualität von FLAC sorgt für exzellente Transkriptionsgenauigkeit. Kein Konto nötig."
      defaultLanguage="de"
      valueBlock={
        <>
          <p>
            FLAC komprimiert Audio verlustfrei: Es bewahrt die Details einer WAV-Datei, ist aber kleiner. Das eignet sich für Archive, Podcast-Master, Feldaufnahmen und hochwertige Sprachsammlungen.
          </p>
          <p>
            Mictoo dekodiert FLAC direkt, damit die beste verfügbare Quelle für die Spracherkennung genutzt wird.
          </p>
        </>
      }
      howItWorks={[
        { title: 'FLAC hochladen', desc: 'Nutzen Sie das Original oder eine kürzere Arbeitskopie der Aufnahme.' },
        { title: 'Verlustfrei dekodieren', desc: 'Mictoo liest die Audiodaten in voller Qualität, bevor die Transkription startet.' },
        { title: 'Korrigieren und exportieren', desc: 'Prüfen Sie Namen und Fachbegriffe, dann als Text oder Untertitel herunterladen.' },
      ]}
      whyUse={{
        title: 'Warum direkt aus FLAC transkribieren',
        bullets: [
          'Hilfreich bei leisen Stimmen, Akzenten und schwierigen Aufnahmen.',
          'Kein MP3-Zwischenschritt, wenn die FLAC-Datei bereits sauber ist.',
          'Passt zu Archiv- und Mastering-Workflows, in denen Qualität wichtig bleibt.',
          'Das Original bleibt unverändert, während Sie mit dem Text arbeiten.',
        ],
      }}
      useCases={{
        title: 'Wann FLAC zu Text sinnvoll ist',
        items: [
          { title: 'Oral-History-Archive', desc: 'Transkribieren Sie Interviews mit bestmöglicher Audioquelle.' },
          { title: 'CD-Rips und Master', desc: 'Nutzen Sie saubere Quellen für Notizen und Untertitel.' },
          { title: 'Feldaufnahmen', desc: 'Verarbeiten Sie Stimmen mit Nebengeräuschen oder wechselnden Pegeln.' },
          { title: 'Familienarchive', desc: 'Machen Sie ältere Zeugnisse und Erzählungen durchsuchbar.' },
        ],
      }}
      proTips={{
        title: 'Tipps für FLAC-Dateien',
        tips: [
          'Die FLAC-Kompressionsstufe ändert nicht die Qualität, nur Kodierzeit und Dateigröße.',
          'Für sehr große Dateien besser eine Mono-16-kHz-Arbeitskopie erstellen als starkes MP3.',
          'Nur in MP3 konvertieren, wenn die Upload-Größe deutlich reduziert werden muss.',
        ],
      }}
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
