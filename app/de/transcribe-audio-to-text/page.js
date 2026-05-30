import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/transcribe-audio-to-text',
  'fr': 'https://mictoo.com/fr/transcribe-audio-to-text',
  'de': 'https://mictoo.com/de/transcribe-audio-to-text',
  'es': 'https://mictoo.com/es/transcribe-audio-to-text',
  'ru': 'https://mictoo.com/ru/transcribe-audio-to-text',
  'it': 'https://mictoo.com/it/transcribe-audio-to-text',
  'pt': 'https://mictoo.com/pt/transcribe-audio-to-text',
  'pl': 'https://mictoo.com/pl/transcribe-audio-to-text',
  'ja': 'https://mictoo.com/ja/transcribe-audio-to-text',
  'ko': 'https://mictoo.com/ko/transcribe-audio-to-text',
  'x-default': 'https://mictoo.com/transcribe-audio-to-text',
}

export const metadata = {
  title: 'Audio in Text — kostenlose Online-Transkription | Mictoo',
  description:
    'Kostenloser Audio-zu-Text-Konverter. Laden Sie eine beliebige Audiodatei (MP3, WAV, M4A, FLAC, OGG, AAC) hoch und erhalten Sie in Sekunden ein sauberes Transkript. Ohne Anmeldung, über 50 Sprachen.',
  alternates: { canonical: 'https://mictoo.com/de/transcribe-audio-to-text', languages: LANGS },

  openGraph: {
    title: "Audio in Text — kostenlose Online-Transkription | Mictoo",
    description: "Kostenloser Audio-zu-Text-Konverter. Laden Sie eine beliebige Audiodatei (MP3, WAV, M4A, FLAC, OGG, AAC) hoch und erhalten Sie in Sekunden ein sauberes Transkript. Ohne Anmeldung, über 50 Sprachen.",
    url: "https://mictoo.com/de/transcribe-audio-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Audio in Text — kostenlose Online-Transkription | Mictoo",
    description: "Kostenloser Audio-zu-Text-Konverter. Laden Sie eine beliebige Audiodatei (MP3, WAV, M4A, FLAC, OGG, AAC) hoch und erhalten Sie in Sekunden ein sauberes Transkript. Ohne Anmeldung, über 50 Sprachen.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function DeAudioToTextPage() {
  return (
    <LandingLayout
      defaultLanguage="de"
      badge="MP3 · WAV · M4A · FLAC · KOSTENLOS"
      h1={
        <>
          Audio in Text
          <br />
          <span className="text-brand-600">Kostenlose KI-Transkription</span>
        </>
      }
      subtitle="Kostenlose KI-Transkription für jede Audiodatei. MP3, WAV, M4A, FLAC, OGG, AAC. Ohne Konto, ohne Tarif pro Minute."
      howItWorks={[
        {
          icon: '📂',
          title: 'Audio ablegen',
          desc: 'Jedes gängige Format funktioniert. MP3 vom Handy, WAV vom Field Recorder, M4A aus iPhone Sprachmemos, FLAC aus einem Podcast-Export. Datei reinziehen oder klicken zum Auswählen.',
        },
        {
          icon: '⚡',
          title: 'KI transkribiert',
          desc: 'Wir nutzen OpenAI Whisper large-v3. Eine 10-Minuten-Datei dauert etwa 20 Sekunden. Eine 30-Minuten-Datei weniger als eine Minute.',
        },
        {
          icon: '📋',
          title: 'Kopieren, herunterladen oder bearbeiten',
          desc: 'Lesen Sie das Transkript im Browser. Laden Sie es als TXT für Notizen herunter oder als SRT, wenn Sie Zeitstempel brauchen. Korrigieren Sie falsch erkannte Wörter inline vor dem Export.',
        },
      ]}
      whyUse={{
        title: 'Warum Mictoo für Audio in Text',
        bullets: [
          {
            title: 'Ein Modell, und es ist das beste',
            desc: 'Wir nutzen Whisper large-v3 für alle. Keine Trickserei mit „die Gratisversion läuft auf einem schwächeren Modell". Dasselbe Modell, das in teuren Enterprise-Transkriptionen steckt, transkribiert Ihre Datei.',
          },
          {
            title: 'Formatunterstützung wirklich breit',
            desc: 'MP3, WAV, M4A, FLAC, OGG, WEBM, AAC, plus Videoformate mit Audio drin (MP4, MOV). Keine Reibung à la „wir akzeptieren nur MP3, konvertieren Sie zuerst".',
          },
          {
            title: 'Über 50 Sprachen, auch zweisprachige Dateien',
            desc: 'Auto-Erkennung wählt die Sprache aus einer kurzen Audio-Probe. Wenn Ihre Datei mitten in der Aufnahme die Sprache wechselt (typisch bei Interviews), folgt Whisper dem Wechsel.',
          },
          {
            title: 'Keine Datei wird gespeichert',
            desc: 'Ihr Audio wird zum Transkriptions-Anbieter gestreamt, verarbeitet und verworfen. Wir schreiben die Datei nie in unsere Datenbank oder unseren Speicher. Die Anbieter (Groq, OpenAI) trainieren nicht auf API-Daten.',
          },
          {
            title: 'Kostenlos ohne Sternchen',
            desc: 'Bis zu 30 Minuten pro Datei ohne Konto. Mit kostenloser Anmeldung bis zu 60 Minuten pro Datei. Nichts weiter ist eingeschränkt.',
          },
        ],
      }}
      useCases={{
        title: 'Wann Audio in Text wirklich Zeit spart',
        items: [
          {
            title: 'Interview-Notizen',
            desc: 'Sie haben eine Stunde mit einer Quelle gesprochen. Statt die Aufnahme nach einem Zitat zu durchsuchen, machen Sie Strg+F im Transkript. Fünf Sekunden statt fünf Minuten.',
          },
          {
            title: 'Sprachmemo-Aufräumen',
            desc: 'Sie haben eine halb-fertige Idee unterwegs ins Handy diktiert. Jetzt wollen Sie sie als Text. M4A ablegen, Sätze bekommen, in Notion kopieren.',
          },
          {
            title: 'Vorlesungen und Webinare nachbereiten',
            desc: 'Eine zweistündige Vorlesung in 2-fach-Geschwindigkeit ist hart. Ein Text-Transkript lässt Sie Abschnitt für Abschnitt scannen und nur in die Teile eintauchen, die wichtig sind.',
          },
          {
            title: 'Übersetzungs-Vorbereitung',
            desc: 'Whisper transkribiert in der Ausgangssprache. Von dort kopieren Sie in DeepL oder ChatGPT und übersetzen sauber. Besser als automatische Übersetzungen aus dem rohen Audio.',
          },
          {
            title: 'Audio-Suche im Backkatalog',
            desc: 'Jahre an Aufnahmen von Calls, Episoden oder Meetings? Per Batch-Transkription bekommen Sie plötzlich ein durchsuchbares Archiv. Billiger als jedes „KI-Meeting-Tool" mit Abo.',
          },
        ],
      }}
      proTips={{
        title: 'Tipps für saubere Audio-Transkription',
        tips: [
          {
            title: 'Mono reicht. Stereo ist verschwendete Bandbreite',
            desc: 'Sprache braucht keine zwei Kanäle. Wenn die Datei riesig ist, kodieren Sie sie in Mono um, und die Größe halbiert sich ohne Qualitätsverlust für die Transkription. ffmpeg-Einzeiler: ffmpeg -i input.wav -ac 1 output.wav.',
          },
          {
            title: '64 kbps MP3 reichen für Sprache völlig',
            desc: 'Wenn Sie aus einer DAW oder einem Editor exportieren, gibt 64 kbps Mono MP3 Whisper alles, was es braucht. Höhere Bitraten verbessern die Genauigkeit nicht, sie machen die Datei nur größer.',
          },
          {
            title: 'Lange Stille am Anfang und Ende abschneiden',
            desc: 'Wenn Ihre Aufnahme 90 Sekunden tote Luft vor dem ersten Wort hat, fressen diese 90 Sekunden Ihr Längen-Limit. Schneiden Sie sie in Audacity weg (Effect, Truncate Silence) vor dem Upload.',
          },
          {
            title: 'Sprache manuell wählen für kurze Dateien',
            desc: 'Die Auto-Erkennung samplet den ersten Audio-Chunk, um die Sprache zu identifizieren. Für Dateien unter 5 Minuten ist diese Stichprobe klein und die Erkennung unzuverlässig. Wählen Sie die Sprache explizit aus dem Dropdown.',
          },
          {
            title: 'Hintergrundmusik bringt Whisper zum Halluzinieren',
            desc: 'Wenn Ihr Audio Musik unter der Sprache hat (Sponsor-Reads, Intro-Beds, B-Roll), fügt das Modell manchmal erfundene Wörter in Musik-nur-Abschnitten ein. Wenn Sie eine Version ohne Musik haben, nehmen Sie die.',
          },
          {
            title: 'Bei sehr verrauschten Dateien zuerst entrauschen',
            desc: 'Kostenlose Optionen: Audacity Noise Reduction (eingebaut) oder Adobe Podcast Enhance (kostenloses Web-Tool, überraschend gut). Datei einmal durchlaufen lassen, dann die saubere Version hochladen.',
          },
        ],
      }}
      faq={[
        {
          q: 'Welcher kostenlose Audio-zu-Text-Konverter ist der beste?',
          a: 'Wir sind voreingenommen, aber die ehrliche Antwort: Jedes Tool, das Whisper large-v3 nutzt, ist Spitze im Free-Tier. Mictoo läuft auf genau diesem Modell ohne Anmeldewand. Otter und Trint sind gut, berechnen aber pro Minute über ihr Free-Kontingent hinaus. Für gelegentliche Transkripte ist Free die richtige Stufe.',
        },
        {
          q: 'Wie genau ist Audio in Text?',
          a: 'Für saubere Sprache in einer Hauptsprache: 5 bis 10 Prozent Wortfehlerrate. Für verrauschtes Audio, starke Akzente oder Fachvokabular sinkt die Genauigkeit. Für die meisten Anwendungen (Notizen, Suche, Entwürfe) reicht das. Für juristische oder medizinische Aufzeichnungen nehmen Sie einen Menschen.',
        },
        {
          q: 'Welche Audioformate unterstützen Sie?',
          a: 'MP3, WAV, M4A, FLAC, OGG, WEBM, AAC. Auch Videodateien wie MP4 und MOV (wir extrahieren das Audio automatisch). AIFF und ALAC werden nicht direkt unterstützt. Konvertieren Sie diese zuerst in WAV oder FLAC.',
        },
        {
          q: 'Wie lange dauert die Transkription?',
          a: 'Eine 5-Minuten-Datei ist meist in 10 bis 15 Sekunden fertig. Eine 30-Minuten-Datei in 45 bis 60 Sekunden. Wir verarbeiten die ganze Datei als eine Anfrage, kein Aufteilen auf Ihrer Seite nötig.',
        },
        {
          q: 'Kann ich eine Telefonaufnahme transkribieren?',
          a: 'Ja. Telefonanrufe sind meist 8 kHz Mono mit etwas Komprimierung. Whisper kommt damit klar, die Genauigkeit ist etwas niedriger als bei Studio-Audio. Stellen Sie sicher, dass die Aufnahme in Ihrer Jurisdiktion legal ist.',
        },
        {
          q: 'Muss ich die Sprache auswählen?',
          a: 'Nein, Auto-Erkennung ist standardmäßig aktiv. Für Audio unter 5 Minuten oder Dateien mit einem nicht-sprachlichen Anfang wählen Sie die Sprache manuell für zuverlässigere Ergebnisse.',
        },
        {
          q: 'Gibt es Kosten pro Minute?',
          a: 'Keine Gebühren. Transkription ist kostenlos ohne Minuten-Zähler. Wir finanzieren uns über Display-Werbung und einen geplanten Pro-Tarif für Power-User.',
        },
        {
          q: 'Wie groß darf die Datei maximal sein?',
          a: '25 MB ohne Konto, 60 MB nach kostenloser Anmeldung. Wenn die Datei größer ist, siehe unseren Komprimierungs-Guide.',
        },
        {
          q: 'Wird mein Audio auf Ihren Servern gespeichert?',
          a: 'Nein. Wir streamen die Datei direkt zum Transkriptions-Anbieter, bekommen den Text zurück und verwerfen das Audio. Es wird nichts in unsere Datenbank oder unseren Speicher geschrieben.',
        },
        {
          q: 'Kann ich das Transkript vor dem Download bearbeiten?',
          a: 'Ja. Nach der Transkription können Sie falsch erkannte Wörter inline im Ergebnis-Viewer korrigieren und dann die bearbeitete Version herunterladen.',
        },
        {
          q: 'Welche Ausgabeformate gibt es?',
          a: 'Plain Text (TXT), Untertiteldatei (SRT) mit Zeitstempeln und Kopieren in die Zwischenablage. Die SRT funktioniert in YouTube Studio, Premiere Pro, DaVinci Resolve und jedem Standard-Video-Editor.',
        },
        {
          q: 'Funktioniert Mictoo auf dem Handy?',
          a: 'Ja. Die Seite ist mobile-freundlich. Sie können direkt vom Handy hochladen, auch aus der iOS-Dateien-App oder dem Android-Downloads-Ordner.',
        },
      ]}
      relatedLinks={[
        { href: '/de/transcribe-mp3-to-text', label: 'MP3 in Text', desc: 'MP3-spezifische Tipps und Eigenheiten.' },
        { href: '/de/transcribe-video-to-text', label: 'Video in Text', desc: 'Derselbe Motor, optimiert für MP4- und MOV-Dateien.' },
        { href: '/de/timestamped-transcription', label: 'Transkription mit Zeitstempeln', desc: 'Wenn Sie Zeitstempel pro Satz oder pro Wort brauchen.' },
        { href: '/de/how-to-compress-audio', label: 'Audio komprimieren', desc: 'Wenn Ihre Datei zu groß für den Upload ist.' },
      ]}
    />
  )
}
