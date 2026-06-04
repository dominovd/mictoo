import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/free-srt-generator',
  'fr': 'https://mictoo.com/fr/free-srt-generator',
  'de': 'https://mictoo.com/de/free-srt-generator',
  'es': 'https://mictoo.com/es/free-srt-generator',
  'ru': 'https://mictoo.com/ru/free-srt-generator',
  'it': 'https://mictoo.com/it/free-srt-generator',
  'pt': 'https://mictoo.com/pt/free-srt-generator',
  'pl': 'https://mictoo.com/pl/free-srt-generator',
  'ja': 'https://mictoo.com/ja/free-srt-generator',
  'ko': 'https://mictoo.com/ko/free-srt-generator',
  'x-default': 'https://mictoo.com/free-srt-generator',
}

export const metadata = {
  title: 'SRT-Generator — SRT-Untertiteldateien online erstellen | Mictoo',
  description:
    'Kostenloser SRT-Untertitel-Generator. Laden Sie Ihre Audio- oder Videodatei hoch und erhalten Sie in Sekunden eine saubere .srt-Datei mit Zeitstempeln. Funktioniert mit YouTube, Premiere, DaVinci, CapCut.',
  alternates: { canonical: 'https://mictoo.com/de/free-srt-generator', languages: LANGS },

  openGraph: {
    title: "SRT-Generator — SRT-Untertiteldateien online erstellen | Mictoo",
    description: "Kostenloser SRT-Untertitel-Generator. Laden Sie Ihre Audio- oder Videodatei hoch und erhalten Sie in Sekunden eine saubere .srt-Datei mit Zeitstempeln. Funktioniert mit YouTube, Premiere, DaVinci, CapCut.",
    url: "https://mictoo.com/de/free-srt-generator",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SRT-Generator — SRT-Untertiteldateien online erstellen | Mictoo",
    description: "Kostenloser SRT-Untertitel-Generator. Laden Sie Ihre Audio- oder Videodatei hoch und erhalten Sie in Sekunden eine saubere .srt-Datei mit Zeitstempeln. Funktioniert mit YouTube, Premiere, DaVinci, CapCut.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function DeSrtPage() {
  return (
    <LandingLayout
      defaultLanguage="de"
      enableYouTubeUrl
      badge="SRT · Untertitel · Kostenlos"
      h1={
        <>
          SRT-Generator
          <br />
          <span className="text-brand-600">KI-Untertitel aus jedem Audio oder Video</span>
        </>
      }
      subtitle="Erzeugen Sie Untertiteldateien aus jedem Audio oder Video. Holen Sie sich eine saubere .srt mit präzisen Zeitstempeln in Sekunden. Drop-in für YouTube, Premiere, DaVinci Resolve, CapCut, Final Cut."
      howItWorks={[
        {
          icon: '📂',
          title: 'Audio oder Video ablegen',
          desc: 'MP3, M4A, MP4, MOV, WAV, FLAC, OGG, WEBM, AAC. Wir extrahieren Audio aus Video automatisch.',
        },
        {
          icon: '⚡',
          title: 'KI transkribiert und richtet aus',
          desc: 'Whisper large-v3 transkribiert das Audio und erzeugt Zeitstempel für jede Zeile. Ein 10-Minuten-Video dauert meist 15 Sekunden. Ein 30-Minuten-Video, etwa eine Minute.',
        },
        {
          icon: '💾',
          title: '.srt herunterladen',
          desc: 'Klicken Sie „Als SRT herunterladen". Die Datei ist Standardformat, drop-in kompatibel mit jedem großen Video-Editor und YouTube Studio.',
        },
      ]}
      whyUse={{
        title: 'Warum dieser SRT-Generator',
        bullets: [
          {
            title: 'Whisper large-v3-Zeitstempel sind framegenau',
            desc: 'Zeitstempel sind in Millisekunden, was präziser ist als jede gängige Video-Framerate. Sie passen korrekt bei 24, 25, 29.97, 30, 50 und 60 fps ohne Offset-Anpassung.',
          },
          {
            title: 'Kostenlos, kein Minuten-Zähler',
            desc: 'Transkribieren Sie 10 Minuten oder 60. Gleicher Preis (kostenlos). Kein „Upgrade auf Pro"-Gate nach der ersten Datei.',
          },
          {
            title: 'Über 50 Sprachen',
            desc: 'Erzeugen Sie Untertitel für Inhalte in jeder großen Sprache. Nützlich für internationale YouTube-Kanäle und übersetzte Untertitel-Spuren.',
          },
          {
            title: 'Standard-.srt-Format',
            desc: 'Keine proprietären Erweiterungen, keine seltsame Kodierung. Funktioniert in Premiere Pro, DaVinci Resolve, Final Cut, CapCut, Kapwing, Descript, YouTube Studio, VLC, MPV.',
          },
          {
            title: 'Keine Datei wird gespeichert',
            desc: 'Das Audio wird zum Transkriptions-Anbieter gestreamt und nach der Verarbeitung verworfen. Wir behalten Ihr Video nicht.',
          },
        ],
      }}
      useCases={{
        title: 'Wofür Leute SRT-Dateien erzeugen',
        items: [
          {
            title: 'YouTube-Uploads',
            desc: 'Ersetzen Sie YouTubes Auto-Untertitel durch eine saubere .srt. Bessere Zeichensetzung, weniger Fehler, bessere Barrierefreiheit für schwerhörige Zuschauer. Bonus: YouTubes Suche indexiert hochgeladene Untertitel zuverlässiger als auto-generierte.',
          },
          {
            title: 'Untertitel für Social-Media-Videos (TikTok, Reels, Shorts)',
            desc: 'Erzeugen Sie die .srt hier, importieren Sie in CapCut oder Premiere, stylen Sie die Untertitel nach Geschmack, brennen Sie sie ins Video ein. Die meisten Zuschauer schauen ohne Ton, also sind Untertitel nicht mehr optional.',
          },
          {
            title: 'Untertitel für Barrierefreiheit',
            desc: 'Konferenz-Vortrags-Aufnahmen, interne Schulungsvideos, Online-Kurse. Untertitel machen sie für gehörlose und schwerhörige Zuschauer nutzbar und für jeden in lauter Umgebung.',
          },
          {
            title: 'Übersetzungs-Pipeline',
            desc: 'Erzeugen Sie die .srt in der Ausgangssprache, fügen Sie sie in DeepL oder ChatGPT zum Übersetzen ein, speichern Sie als Zielsprachen-.srt. Ergebnis: Untertitel auf Synchronisations-Qualität in einer anderen Sprache, ohne menschliche Übersetzung zu bezahlen.',
          },
          {
            title: 'Video-Bearbeitung unter Zeitdruck',
            desc: 'Wenn Sie Untertitel gestern brauchen und nicht auf einen menschlichen Transkribierer warten können, sind KI-Untertitel gut genug für den ersten Schnitt. Später polieren.',
          },
        ],
      }}
      proTips={{
        title: 'Tipps für SRT-Erzeugung',
        tips: [
          {
            title: 'Für lange Videos die .srt in 10-Minuten-Stücken erzeugen und zusammenfügen',
            desc: 'Einfacher, falsche Zeitstempel in der Mitte zu korrigieren, falls Drift auftritt. Die meisten Editoren lassen Sie mehrere .srt-Dateien importieren und zusammenfügen.',
          },
          {
            title: 'Nur-Audio-Upload ist schneller als Video-Upload für denselben Inhalt',
            desc: 'Audio zuerst extrahieren: ffmpeg -i video.mp4 -vn -ac 1 -b:a 64k audio.mp3. Die .srt, die Sie zurückbekommen, funktioniert gegen das Original-Video, weil Zeitstempel Zeitstempel sind.',
          },
          {
            title: 'Untertitel erst nach dem Schnitt einbrennen',
            desc: 'Wenn Sie Untertitel ins Video einbrennen, bevor Sie Schnitte machen, müssen Sie die Untertitel beim Schneiden neu machen. Am Ende einbrennen, wenn das Video gesperrt ist.',
          },
          {
            title: 'Zeilenlänge der .srt handhabbar halten',
            desc: 'Whisper produziert manchmal lange einzeilige Untertitel für lange Sätze. Die meisten Editoren lassen Sie lange Zeilen automatisch teilen, oder Sie können manuell für bessere Lesbarkeit teilen.',
          },
          {
            title: 'Bei mehrsprachigen Videos die .srt eine Sprache nach der anderen erzeugen',
            desc: 'Wenn Ihr Video englische und spanische Abschnitte hat, erzeugen Sie die .srt für jeden Abschnitt separat (Sprache jedes Mal manuell setzen), dann in eine .srt zusammenführen.',
          },
          {
            title: '.srt in einem Texteditor bearbeiten, nicht in einem Video-Editor',
            desc: 'Eine .srt ist nur Text mit Zeitstempeln. Öffnen Sie sie in VS Code, Notepad++ oder BBEdit, um Tippfehler schnell zu korrigieren. Wieder in den Video-Editor importieren, wenn fertig.',
          },
          {
            title: 'Für TikTok und Reels die Untertitel manuell zu einer kurzen Zeile pro Untertitel kürzen',
            desc: 'Whispers natürliche Sätze sind länger als TikToks knackiger Untertitel-Stil. Bearbeiten Sie die .srt, um zum Stil der Plattform zu passen.',
          },
        ],
      }}
      faq={[
        {
          q: 'Was ist eine SRT-Datei?',
          a: 'SRT (SubRip Subtitle) ist das gängigste Untertitel-Dateiformat. Reiner Text mit Zeitstempeln und dem Untertitel-Text. Jeder größere Video-Player und Editor liest .srt-Dateien.',
        },
        {
          q: 'Wie erzeuge ich eine SRT-Datei aus einem Video?',
          a: 'Video hier hochladen. Wir extrahieren das Audio, transkribieren und erzeugen die .srt. „Als SRT herunterladen" klicken, wenn fertig.',
        },
        {
          q: 'Wie füge ich SRT-Untertitel zu einem YouTube-Video hinzu?',
          a: 'In YouTube Studio Ihr Video öffnen, zu Untertitel gehen, Sprache hinzufügen klicken, die .srt-Datei hochladen. YouTube nutzt sie als offizielle Untertitel für diese Sprache.',
        },
        {
          q: 'Funktioniert die SRT-Datei in Premiere Pro und DaVinci Resolve?',
          a: 'Ja. In Premiere: File, Import, die .srt auswählen. In DaVinci: die .srt in den Projekt-Bin ziehen. Beide behandeln sie als Untertitelspur, die Sie weiter auf der Timeline bearbeiten können.',
        },
        {
          q: 'Funktioniert es in CapCut und Final Cut?',
          a: 'Ja. CapCut: Captions antippen, Import SRT. Final Cut: File, Import, Captions, die .srt auswählen. Beide platzieren Untertitel an den richtigen Zeiten auf der Timeline.',
        },
        {
          q: 'Ist der SRT-Generator wirklich kostenlos?',
          a: 'Ja. Keine Gebühr pro Datei, kein Minuten-Zähler, keine E-Mail nötig für Dateien unter 25 MB. Dateien zwischen 25 MB und 60 MB brauchen ein kostenloses angemeldetes Konto.',
        },
        {
          q: 'Wie groß darf die Datei maximal sein?',
          a: '25 MB ohne Konto, 60 MB mit kostenlosem Konto.',
        },
        {
          q: 'Kann ich SRT aus Audiodateien (MP3, WAV) erzeugen?',
          a: 'Ja. Audiodatei direkt ablegen. Wir erzeugen die .srt mit Zeitstempeln, als wäre es Video-Audio. Nützlich, um Untertitel hinzuzufügen, wenn Sie das Audio später mit Bildern oder Folien synchronisieren.',
        },
        {
          q: 'Werden die Zeitstempel bei einem langen Video driften?',
          a: 'Whisper-Zeitstempel sind auf das tatsächliche Audio ausgerichtet, also ist Drift selten. Für sehr lange Dateien (60 Minuten) kann Sub-Sekunden-Drift bei den letzten Untertiteln auftreten. Wenn Sie es bemerken, betroffene Untertitel manuell korrigieren.',
        },
        {
          q: 'Kann ich die Untertitel vor dem Download bearbeiten?',
          a: 'Ja. Nach der Transkription falsche Wörter im Ergebnis-View korrigieren, dann die .srt mit Ihren Änderungen herunterladen.',
        },
        {
          q: 'Welche Sprachen unterstützt der SRT-Generator?',
          a: 'Über 50 Sprachen mit Auto-Erkennung. Für kürzere Videos oder Nicht-Englisch-Inhalte die Sprache manuell wählen für zuverlässigere Ergebnisse.',
        },
        {
          q: 'Wird das Audio gespeichert?',
          a: 'Nein. Die Datei wird zu unserem Transkriptions-Anbieter gestreamt, verarbeitet und verworfen. Wir behalten weder das Audio noch die erzeugte .srt.',
        },
        {
          q: 'Kann ich die SRT in einer anderen Sprache als der Audio-Sprache erzeugen?',
          a: 'Nicht direkt. SRT in der Ausgangssprache erzeugen, dann den Text der .srt mit DeepL oder ChatGPT übersetzen. Die Zeitstempel bleiben gleich, nur der Text ändert sich.',
        },
      ]}
      relatedLinks={[
        { href: '/de/transcribe-video-to-text', label: 'Video in Text', desc: 'Derselbe Motor, ausgerichtet auf reinen Text-Output.' },
        { href: '/de/timestamped-transcription', label: 'Transkription mit Zeitstempeln', desc: 'Für Satz- oder Wort-Zeitstempel in anderen Formaten.' },
        { href: '/de/youtube-to-text', label: 'YouTube in Text', desc: 'Zum Ersetzen von YouTubes Auto-Untertiteln.' },
        { href: '/de/transcribe-audio-to-text', label: 'Audio in Text', desc: 'Für reine Audio-Transkription.' },
      ]}
    />
  )
}
