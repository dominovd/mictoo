import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/transcribe-mp3-to-text',
  'fr': 'https://mictoo.com/fr/transcribe-mp3-to-text',
  'de': 'https://mictoo.com/de/transcribe-mp3-to-text',
  'es': 'https://mictoo.com/es/transcribe-mp3-to-text',
  'ru': 'https://mictoo.com/ru/transcribe-mp3-to-text',
  'it': 'https://mictoo.com/it/transcribe-mp3-to-text',
  'pt': 'https://mictoo.com/pt/transcribe-mp3-to-text',
  'pl': 'https://mictoo.com/pl/transcribe-mp3-to-text',
  'ja': 'https://mictoo.com/ja/transcribe-mp3-to-text',
  'ko': 'https://mictoo.com/ko/transcribe-mp3-to-text',
  'x-default': 'https://mictoo.com/transcribe-mp3-to-text',
}

export const metadata = {
  title: 'MP3 in Text — kostenlose KI-MP3-Transkription | Mictoo',
  description:
    'Kostenloser MP3-zu-Text-Konverter. Laden Sie eine beliebige MP3 hoch und erhalten Sie in Sekunden ein sauberes KI-Transkript. Funktioniert mit Podcasts, Interviews, Vorlesungen. Über 50 Sprachen, ohne Anmeldung.',
  alternates: { canonical: 'https://mictoo.com/de/transcribe-mp3-to-text', languages: LANGS },

  openGraph: {
    title: "MP3 in Text — kostenlose KI-MP3-Transkription | Mictoo",
    description: "Kostenloser MP3-zu-Text-Konverter. Laden Sie eine beliebige MP3 hoch und erhalten Sie in Sekunden ein sauberes KI-Transkript. Funktioniert mit Podcasts, Interviews, Vorlesungen. Über 50 Sprachen, ohne Anmeldung.",
    url: "https://mictoo.com/de/transcribe-mp3-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MP3 in Text — kostenlose KI-MP3-Transkription | Mictoo",
    description: "Kostenloser MP3-zu-Text-Konverter. Laden Sie eine beliebige MP3 hoch und erhalten Sie in Sekunden ein sauberes KI-Transkript. Funktioniert mit Podcasts, Interviews, Vorlesungen. Über 50 Sprachen, ohne Anmeldung.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function DeMp3ToTextPage() {
  return (
    <LandingLayout
      defaultLanguage="de"
      badge="MP3 · KOSTENLOS · OHNE ANMELDUNG"
      h1={
        <>
          MP3 in Text
          <br />
          <span className="text-brand-600">Kostenlose MP3-Transkription</span>
        </>
      }
      subtitle="Kostenlose KI-Transkription für jede MP3-Datei. Datei ablegen, in Sekunden den Text bekommen. Ohne Konto, ohne Tarif pro Minute, ohne E-Mail."
      howItWorks={[
        {
          icon: '📂',
          title: 'MP3 ablegen',
          desc: 'Jede MP3-Datei funktioniert. Podcast-Download, Sprachmemo-Export, gerippter Audio-Track, KI-generierte Sprachdatei. Reinziehen oder zum Auswählen klicken.',
        },
        {
          icon: '⚡',
          title: 'KI transkribiert',
          desc: 'Whisper large-v3 liest die MP3 und wandelt Sprache in Text um. Ein typischer 30-Minuten-Podcast ist in etwa einer Minute fertig. Ein 5-Minuten-Sprachmemo in rund 15 Sekunden.',
        },
        {
          icon: '📋',
          title: 'Kopieren, herunterladen oder bearbeiten',
          desc: 'Im Browser lesen, in die Zwischenablage kopieren oder als TXT oder SRT herunterladen. Falsche Wörter inline vor dem Export korrigieren.',
        },
      ]}
      whyUse={{
        title: 'Warum Mictoo für MP3',
        bullets: [
          {
            title: 'Whisper large-v3, kein abgespecktes Modell für Free-User',
            desc: 'Wir laufen kein schwächeres Modell „für kostenlose Nutzer" und ein besseres für Bezahlkunden. Dasselbe Modell, dieselbe Genauigkeit, jede Datei.',
          },
          {
            title: 'MP3-Eigenheiten werden richtig behandelt',
            desc: 'MP3 ist verlustbehaftet, und manche Tools verschlucken sich an stark komprimierten Dateien (32 kbps, Mono, niedrige Abtastrate). Whisper kommt damit ohne Klage klar. Wir haben lesbare Transkripte aus 24-kbps-Telefonanruf-MP3s gesehen.',
          },
          {
            title: 'Keine Dateikonvertierung nötig',
            desc: 'Manche „MP3-zu-Text"-Tools wollen heimlich WAV im Hintergrund und kodieren Ihre MP3 zuerst um. Wir senden die MP3 direkt an das Sprachmodell. Schneller, ohne Qualitätsverlust durch eine zweite Kodierung.',
          },
          {
            title: 'Kein Minuten-Zähler',
            desc: 'Manche Konkurrenten geben Ihnen 60 Minuten gratis pro Monat, danach 25 Cent pro Minute. Wir sind werbefinanziert und haben kein Minuten-Limit. Transkribieren Sie eine Datei oder hundert.',
          },
          {
            title: 'Privatsphäre standardmäßig',
            desc: 'Die MP3 wird zum Sprach-Anbieter gestreamt, transkribiert und verworfen. Wir schreiben Ihr Audio nie auf unsere Festplatten.',
          },
        ],
      }}
      useCases={{
        title: 'Wofür Leute MP3-zu-Text nutzen',
        items: [
          {
            title: 'Podcast-Episoden',
            desc: 'Ziehen Sie die MP3 von Ihrem Podcast-Hoster (Anchor, Buzzsprout, Transistor) rein und holen Sie sich den Text für Show Notes, Repurposing im Blog oder Barrierefreiheit.',
          },
          {
            title: 'Telefonaufnahmen',
            desc: 'MP3 ist der Standard-Export der meisten Anruf-Aufnahme-Apps. Transkribieren Sie, um einen langen Anruf schnell nach dem Teil zu durchsuchen, der wirklich wichtig ist.',
          },
          {
            title: 'Sprachmemos vom Handy',
            desc: 'iPhone Sprachmemos sind standardmäßig M4A, aber wenn Sie eines als MP3 per AirDrop verschickt oder eine Android-App genutzt haben, die MP3 speichert, ist das Ihr Tool.',
          },
          {
            title: 'Hörbuch-Samples oder Vorlesungs-Rips',
            desc: 'Zum Lernen verdoppelt der Text neben dem Audio die Behaltensleistung. Bleiben Sie nur auf der richtigen Seite des Urheberrechts.',
          },
          {
            title: 'KI-Voiceover und TTS-Output',
            desc: 'Wenn Sie Stimme mit ElevenLabs, OpenAI TTS, Murf oder einem anderen Sprachsynthese-Tool generiert haben, brauchen Sie vielleicht ein sauberes Transkript zurück für Untertitel- oder Alignment-Arbeit.',
          },
        ],
      }}
      proTips={{
        title: 'Tipps für MP3-Transkription',
        tips: [
          {
            title: 'Konstante Bitrate ist besser als variable für Whisper',
            desc: 'VBR (variable Bitrate) MP3 kann manche Audio-Dekoder in Grenzfällen verwirren. Wenn Sie den Export kontrollieren, wählen Sie CBR mit 64 oder 96 kbps Mono. Weniger Arbeit für das Modell.',
          },
          {
            title: '64 kbps Mono ist der Sweet Spot für Sprach-MP3',
            desc: 'Alles darüber ist verschwendet für Sprache. Eine 60-Minuten-Episode mit 64 kbps Mono ist rund 28 MB. Passt locker in das Free-Tier mit 25 MB, oder komfortabel in das 60-MB-Tier mit Anmeldung.',
          },
          {
            title: 'Wenn Ihre MP3 riesig ist (über 60 MB), vor dem Teilen umkodieren',
            desc: 'Teilen und dann zwei Dateien transkribieren ist mehr Arbeit als einmal mit niedrigerer Bitrate umkodieren. ffmpeg: ffmpeg -i big.mp3 -ac 1 -b:a 64k small.mp3. Ein Original von 200 MB sinkt auf 25 bis 40 MB.',
          },
          {
            title: 'ID3-Metadaten entfernen, wenn die Datei knapp dran ist',
            desc: 'ID3-Tags (Cover, Songtexte usw.) können einer MP3 mehrere MB hinzufügen. Wenn Sie 1 bis 2 MB über dem Limit sind, kann das Entfernen der Tags mit ffmpeg -i in.mp3 -map_metadata -1 -c:a copy out.mp3 reichen.',
          },
          {
            title: 'Schlechte MP3-Kodierung alter Konverter verursacht stille Lücken',
            desc: 'Wenn Ihr Transkript Abschnitte überspringt, hat die MP3 vielleicht tatsächlich stille Lücken durch einen fehlerhaften Encoder. Kodieren Sie aus der Quelle neu, falls vorhanden, oder nutzen Sie „Find Silence" in Audacity zur Bestätigung.',
          },
          {
            title: 'Bei Telefonanruf-MP3 (8 kHz Mono) rechnen Sie mit etwas weniger Genauigkeit',
            desc: 'Telefon-Audio verliert hohe Frequenzen, was Sie ein paar Prozent Genauigkeit kostet. Bleibt lesbar, planen Sie nur mehr Cleanup für Namen und Zahlen ein.',
          },
        ],
      }}
      faq={[
        {
          q: 'Ist MP3 das beste Format für Transkription?',
          a: 'Für die meisten Nutzer ja. MP3 ist klein, universell unterstützt, und die Genauigkeit mit Whisper ist im Wesentlichen identisch zu WAV oder FLAC. Nutzen Sie verlustfreie Formate (WAV, FLAC) nur, wenn Sie das Audio auch später noch bearbeiten wollen.',
        },
        {
          q: 'Welche MP3-Bitraten funktionieren am besten?',
          a: 'Alles von 32 kbps Mono bis 320 kbps Stereo funktioniert. Für Sprache sind 64 bis 96 kbps Mono der praktische Sweet Spot. Höher verbessert die Transkription nicht, niedriger fängt an, die Verständlichkeit für das Modell zu verlieren.',
        },
        {
          q: 'Meine MP3 ist über 60 MB. Was nun?',
          a: 'Zwei Optionen. Mit niedrigerer Bitrate neu kodieren (64 kbps Mono teilt die meisten MP3 durch 4 oder mehr), oder die Datei in Stücke unter 60 MB teilen. Wir haben Anleitungen für beides.',
        },
        {
          q: 'Wie lange dauert die Transkription einer MP3?',
          a: 'Etwa 1 bis 2 Prozent der Audiolänge. Eine 60-Minuten-MP3 ist in rund 60 Sekunden fertig. Eine 10-Minuten-MP3 in 10 bis 20 Sekunden. Der Netzwerk-Upload ist meist die längere Wartezeit.',
        },
        {
          q: 'Wird meine MP3 gespeichert oder geteilt?',
          a: 'Nein. Die Datei wird zu unserem Sprach-Anbieter (Groq, mit OpenAI als Backup) gestreamt, transkribiert und verworfen. Wir schreiben sie nicht auf unsere Server, und die genutzten Anbieter trainieren nicht auf API-Daten.',
        },
        {
          q: 'Kann ich mehrere MP3 im Batch hochladen?',
          a: 'Noch nicht mit einem Klick. Derzeit transkribieren Sie eine Datei nach der anderen. Batch-Upload ist auf der Roadmap für den bezahlten Pro-Tarif.',
        },
        {
          q: 'Welche Sprachen unterstützen Sie?',
          a: 'Über 50 Sprachen. Auto-Erkennung deckt die meisten Fälle ab. Für Dateien unter 5 Minuten oder Dateien, die mit Musik oder Stille beginnen, wählen Sie die Sprache manuell.',
        },
        {
          q: 'Kann ich Zeitstempel aus einer MP3 bekommen?',
          a: 'Ja. Laden Sie als SRT (Untertiteldatei) herunter, und Sie bekommen Zeitstempel alle paar Sekunden. Oder nutzen Sie unsere Seite „Transkription mit Zeitstempeln" für Wort-Granularität.',
        },
        {
          q: 'Funktioniert Mictoo mit Podcast-MP3s, die Kapitelmarken haben?',
          a: 'Wir extrahieren das Audio und ignorieren Kapitel-Metadaten. Sie bekommen das gesamte Transkript als ein Dokument. Wenn Sie kapitelweise Transkripte wollen, teilen Sie die MP3 zuerst an den Kapitelgrenzen.',
        },
        {
          q: 'Hat mein MP3-Transkript Sprecher-Labels?',
          a: 'Nicht automatisch. Whisper macht standardmäßig keine Sprecher-Diarisierung. Wenn Sie Labels brauchen, laden Sie die Spur jedes Sprechers separat hoch (falls vorhanden) und beschriften Sie sie selbst.',
        },
        {
          q: 'Kann ich eine KI-generierte Sprach-MP3 transkribieren?',
          a: 'Ja. TTS-Audio (ElevenLabs, OpenAI, Murf usw.) transkribiert sich meist sauberer als menschliche Sprache, weil es keine Hintergrundgeräusche oder Pausen gibt.',
        },
        {
          q: 'Meine MP3 ist in einer seltenen Sprache. Wird es funktionieren?',
          a: 'Wenn Whisper die Sprache unterstützt, ja. Das Modell deckt über 50 Sprachen mit guter Genauigkeit ab und unterstützt viele weitere grundlegend. Probieren Sie es. Wenn das Ergebnis unbrauchbar ist, liegt die Sprache wahrscheinlich außerhalb der Trainingsdaten.',
        },
      ]}
      relatedLinks={[
        { href: '/de/transcribe-audio-to-text', label: 'Audio in Text', desc: 'Für Nicht-MP3-Formate (WAV, M4A, FLAC, OGG).' },
        { href: '/de/podcast-transcription', label: 'Podcast-Transkription', desc: 'Derselbe Motor, Podcast-spezifische Tipps.' },
        { href: '/de/free-srt-generator', label: 'SRT-Generator', desc: 'Wenn Sie Untertitel für Video brauchen, nicht nur Text.' },
        { href: '/de/how-to-compress-audio', label: 'Audio komprimieren', desc: 'Wenn Ihre MP3 zu groß ist.' },
      ]}
    />
  )
}
