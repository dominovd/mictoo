import FormatPageLayout from '@/components/FormatPageLayout'

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
  title: 'MP3 zu Text: Kostenlose Online-MP3-Transkription für Podcasts und Sprachaufnahmen | Mictoo',
  description:
    'Transkribieren Sie MP3-Audiodateien mit Zeitstempeln, KI-Zusammenfassung und Exporten. Optimiert für Podcasts, Sprachnotizen und heruntergeladene Audios. Laden Sie Ihre MP3 hoch, erhalten Sie den Text in Sekunden.',
  alternates: {
    canonical: 'https://mictoo.com/de/transcribe-mp3-to-text',
    languages: LANGS,
  },
  openGraph: {
    title: 'MP3 zu Text: Kostenlose Online-MP3-Transkription | Mictoo',
    description: 'Laden Sie Ihren MP3-Podcast oder Ihre Sprachaufnahme hoch, erhalten Sie in Sekunden ein Transkript mit Zusammenfassung.',
    url: 'https://mictoo.com/de/transcribe-mp3-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MP3 zu Text: Kostenlose Online-MP3-Transkription',
    description: 'Laden Sie Ihre MP3 hoch, erhalten Sie ein Transkript.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function DeTranscribeMp3ToTextPage() {
  return (
    <FormatPageLayout
      locale="de"
      badge="MP3 · Podcast-freundlich · Kostenlos"
      h1First="MP3 zu Text"
      h1Second="Für Podcasts, Sprachnotizen und Interviews"
      subtitle="MP3 ist ein gängiges Format für Podcasts und Sprachaufnahmen. Laden Sie Ihre Episode, Sprachnotiz oder heruntergeladenes Interview hoch und erhalten Sie ein Transkript mit Zeitstempeln, KI-Zusammenfassung und sauberen Exporten für Shownotes."
      highlightFormat="mp3"
      previewFileName="podcast-episode.mp3"
      previewWordCount={182}
      previewDurationLabel="28:14"
      previewLines={[
        { t: '0:00',  line: 'Willkommen zurück zur Show. Heute sprechen wir über den Stand des unabhängigen Podcastings im Jahr 2026.' },
        { t: '0:07',  line: 'Mein Gast hat seit acht Jahren jede Woche eine Show ohne eine Episode auszulassen.' },
        { t: '0:14',  line: 'Danke, dass ich hier sein darf. Es ist verrückt zu denken, dass wir das gestartet haben, als alle sagten, Audio sei bereits gesättigt.' },
        { t: '0:22',  line: 'Lassen Sie uns dort anfangen. Was war anders beim Start eines Podcasts im Jahr 2018 im Vergleich zu jetzt?' },
        { t: '0:30',  line: 'Die Verbreitung war schwieriger, aber die Zuhörer waren geduldiger.' },
        { t: '0:37',  line: 'Heute sind die Werkzeuge erstaunlich, Transkription in Sekunden, KI-Zusammenfassungen für Shownotes, aber die Aufmerksamkeit ist knapper.' },
        { t: '0:47',  line: 'Das ist ein guter Übergang. Wie sieht Ihr Workflow für Shownotes aus, jetzt wo Transkripte praktisch kostenlos sind?' },
        { t: '0:55',  line: 'Ich exportiere die MP3, lade sie in ein Transkriptionstool hoch und benutze die KI-Zusammenfassung als ersten Entwurf der Notizen.' },
      ]}
      whyTitle="Warum Mictoo für MP3-Transkription"
      whyCards={[
        {
          icon: 'mic',
          title: 'Für Podcasts und Sprache entwickelt',
          desc: 'MP3 ist das Format, das Podcast-Netzwerke verbreiten und Sprach-Apps exportieren. Optimiert für Sprachinhalte mit Zeitstempeln, bereit für Shownotes und Untertitel.',
        },
        {
          icon: 'gear',
          title: 'Gängige MP3-Einstellungen akzeptiert',
          desc: 'Konstante oder variable Bitrate, Mono oder Stereo. Klare Sprache ist am wichtigsten; sehr niedrige Bitraten und hörbare Kompressionsartefakte können die Genauigkeit verringern.',
        },
        {
          icon: 'sparkles',
          title: 'KI-Zusammenfassung für Shownotes',
          desc: 'Eine Zusammenfassung erscheint automatisch neben dem Transkript. Solider erster Entwurf für Episodennotizen, Beschreibungen und SEO-freundliche Rückblicke.',
        },
        {
          icon: 'globe',
          title: 'SRT, VTT und 50+ Sprachen',
          desc: 'Exportieren Sie SRT oder VTT für die YouTube-Video-Version der Episode. Übersetzen Sie in Spanisch, Französisch, Deutsch und 45+ andere Sprachen mit einem Klick.',
        },
      ]}
      scenariosTitle="Wann MP3 zu Text die richtige Wahl ist"
      scenarios={[
        {
          icon: 'mic',
          title: 'Podcast-Shownotes',
          desc: 'Sie haben die Episode hochgeladen, die Sie bei Ihrem Host gespeichert haben. Laden Sie dieselbe MP3 hier hoch für das Transkript und die KI-Zusammenfassung, die die Shownotes werden.',
        },
        {
          icon: 'layers',
          title: 'Podcast-Backkatalog',
          desc: 'Jahre von Episoden bereits veröffentlicht ohne Transkripte. Verarbeiten Sie sie einzeln, um das Archiv aufzufüllen und jede Episode durchsuchbar zu machen.',
        },
        {
          icon: 'editPen',
          title: 'Sprachnotiz in Dokument umwandeln',
          desc: 'Sprachnotizen, die auf Ihrem Telefon aufgenommen wurden (viele Apps exportieren MP3). Verwandeln Sie wirre Ideen in durchsuchbaren, bearbeitbaren Text für Ihre Notizen-App.',
        },
        {
          icon: 'clip',
          title: 'Heruntergeladene Interviews',
          desc: 'Podcast-Interview, das Sie in einem Artikel zitieren möchten, MP3 eines Konferenzvortrags, den Sie referenzieren möchten, heruntergeladene Vorlesung, die Sie studieren möchten.',
        },
        {
          icon: 'book',
          title: 'Kapitel von Hörbüchern',
          desc: 'Hörbuch-MP3-Kapitel, das Sie als gedruckten Text für Notizen haben möchten. Große Hörbuchdateien überschreiten oft 60 MB und müssen zuerst aufgeteilt werden.',
        },
        {
          icon: 'video',
          title: 'YouTube-zu-MP3-Audio',
          desc: 'YouTube-Audio-Extraktoren geben oft MP3 für die Kompatibilität aus. Laden Sie die extrahierte Datei für ein sauberes Transkript mit Zeitstempeln hoch.',
        },
      ]}
      technicalTitle="Was bei einer MP3 wichtig ist"
      technicalIntro="MP3-Einstellungen beeinflussen die Dateigröße und können die Verständlichkeit an den Extremen beeinflussen. Diese Details helfen Ihnen zu entscheiden, ob Sie die Datei so hochladen oder zuerst eine kleinere Sprachkopie erstellen möchten."
      technicalFacts={[
        {
          icon: 'waveform',
          title: 'Bitrate und Klarheit',
          desc: 'Sprache bei moderater Bitrate ist normalerweise geeignet. Extrem niedrige Bitrate, Clipping oder starke Artefakte können Konsonanten und Namen verbergen.',
        },
        {
          icon: 'gear',
          title: 'CBR und VBR',
          desc: 'Sowohl konstant-bitrate als auch variable-bitrate MP3-Dateien können hochgeladen werden; Zeitstempel folgen der dekodierten Audio-Zeitleiste.',
        },
        {
          icon: 'clip',
          title: 'ID3-Tags bleiben separat',
          desc: 'Künstler, Titel, Artwork und Kapitel-Metadaten werden nicht in das Transkript eingefügt. Halten Sie diese Metadaten in Ihrem Veröffentlichungssystem.',
        },
        {
          icon: 'cloud',
          title: 'Lange Episoden',
          desc: 'Wenn eine Episode das Upload-Limit überschreitet, exportieren Sie eine Mono-Sprachkopie mit niedrigerer Bitrate oder teilen Sie sie an einer natürlichen Stelle.',
        },
      ]}
      faq={[
        {
          q: 'Wird Mictoo jede MP3-Datei transkribieren?',
          a: 'Mictoo akzeptiert gängige MP3-Dateien mit konstanter oder variabler Bitrate, Mono- oder Stereo-Audio. Beschädigte Dateien, nicht unterstützte Varianten oder Aufnahmen mit starken Kompressionsartefakten müssen möglicherweise erneut exportiert werden. Das Limit beträgt 60 MB, wenn Sie angemeldet sind, und 25 MB anonym.',
        },
        {
          q: 'Beeinflusst die MP3-Bitrate die Transkriptionsqualität?',
          a: 'Die Klarheit der Aufnahme ist wichtiger als eine hohe Bitrate, aber die Bitrate ist nicht irrelevant. Eine klare Sprachaufnahme bei moderater Bitrate ist normalerweise geeignet; aggressive Kompression, Clipping oder sehr niedrige Bitrate können Sprachdetails entfernen und die Genauigkeit verringern.',
        },
        {
          q: 'Meine Podcast-MP3 ist über 60 MB. Was nun?',
          a: 'Erstellen Sie eine kleinere Mono-Sprachkopie mit ffmpeg: ffmpeg -i podcast.mp3 -b:a 64k -ac 1 output.mp3. Überprüfen Sie das Ergebnis auf hörbare Artefakte, bevor Sie es hochladen, oder teilen Sie die Episode an einer natürlichen Stelle.',
        },
        {
          q: 'Kann ich eine KI-Zusammenfassung der Episode erhalten?',
          a: 'Ja. Die KI-Zusammenfassung erscheint automatisch neben dem Transkript, nachdem die Transkription abgeschlossen ist. Es ist ein solider erster Entwurf für Podcast-Shownotes, Episodenbeschreibungen und SEO-freundliche Rückblicke.',
        },
        {
          q: 'Kann ich SRT-Untertitel für die YouTube-Version herunterladen?',
          a: 'Ja. Exportieren Sie nach der Transkription als SRT oder VTT. Beide Formate enthalten Zeitstempel, die mit der ursprünglichen MP3-Zeitleiste ausgerichtet sind. Laden Sie sie in Ihren YouTube-Upload oder Video-Editor für Untertitel hoch.',
        },
        {
          q: 'Transkribiert Mictoo nicht-englische MP3-Dateien?',
          a: 'Ja. Whisper large-v3 unterstützt 50+ Sprachen mit automatischer Erkennung. Für kurze MP3s oder nicht-englische Inhalte wählen Sie die Sprache explizit im Dropdown-Menü für eine sauberere erste Erkennung.',
        },
        {
          q: 'Kann ich das Transkript in eine andere Sprache übersetzen?',
          a: 'Ja. Nachdem die Transkription abgeschlossen ist, wählen Sie eine Zielsprache und klicken Sie auf Übersetzen. Die Übersetzung wird von GPT-4o-mini generiert und erscheint neben dem ursprünglichen Transkript.',
        },
        {
          q: 'Wird meine MP3-Datei auf Ihren Servern gespeichert?',
          a: 'Nein. Die MP3 wird an den Transkriptionsanbieter gestreamt, einmal verarbeitet und aus dem Speicher gelöscht. Wir schreiben das Audio niemals auf die Festplatte. Das Texttranskript wird nur gespeichert, wenn Sie sich anmelden und entscheiden, es zu Ihrer Historie hinzuzufügen.',
        },
        {
          q: 'Wird ID3-Metadaten (Künstler, Titel, Album) im Transkript angezeigt?',
          a: 'Nein. Das Transkript ist reiner Text ohne MP3-Metadaten. ID3-Tags werden während der Transkription ignoriert. Wenn Sie das Transkript mit Episodenmetadaten abgleichen möchten, halten Sie diese Zuordnung in Ihrem eigenen Archivsystem.',
        },
        {
          q: 'Wie lange dauert eine MP3-Transkription?',
          a: 'Eine 30-minütige Podcast-MP3 benötigt normalerweise 30-50 Sekunden von Anfang bis Ende. Größere Dateien, die nahe am Upload-Limit liegen, benötigen 60-90 Sekunden. Die Upload-Geschwindigkeit ist oft der längere Schritt des Prozesses.',
        },
      ]}
      ctaHeadline="Laden Sie Ihre MP3 hoch, schreiben Sie Shownotes schneller"
      ctaSubtitle="Podcast-Episode, Sprachnotiz, heruntergeladenes Interview, Kapitel eines Hörbuchs. Erhalten Sie den Text und die Zusammenfassung in Sekunden."
      ctaButton="MP3 hochladen zur Transkription"
    />
  )
}