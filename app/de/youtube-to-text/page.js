import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/youtube-to-text',
  'fr': 'https://mictoo.com/fr/youtube-to-text',
  'de': 'https://mictoo.com/de/youtube-to-text',
  'es': 'https://mictoo.com/es/youtube-to-text',
  'ru': 'https://mictoo.com/ru/youtube-to-text',
  'it': 'https://mictoo.com/it/youtube-to-text',
  'pt': 'https://mictoo.com/pt/youtube-to-text',
  'pl': 'https://mictoo.com/pl/youtube-to-text',
  'ja': 'https://mictoo.com/ja/youtube-to-text',
  'ko': 'https://mictoo.com/ko/youtube-to-text',
  'x-default': 'https://mictoo.com/youtube-to-text',
}

export const metadata = {
  title: 'YouTube zu Text: Transkript, Zusammenfassung und SRT | Mictoo',
  description:
    'Fügen Sie eine YouTube-URL ein, um verfügbare Untertitel zu verwenden, oder laden Sie Audio hoch, um ein neues Transkript mit Zeitstempeln, Zusammenfassung und SRT-Export zu erstellen.',
  alternates: {
    canonical: 'https://mictoo.com/de/youtube-to-text',
    languages: LANGS,
  },
  openGraph: {
    title: 'YouTube zu Text: Kostenlose YouTube-Video-Transkription | Mictoo',
    description: 'Fügen Sie eine YouTube-URL ein, erhalten Sie ein sauberes Transkript mit Zeitstempeln, Zusammenfassung und SRT-Untertiteln.',
    url: 'https://mictoo.com/de/youtube-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YouTube zu Text: Kostenlose YouTube-Transkription',
    description: 'Fügen Sie eine YouTube-URL ein oder laden Sie Audio hoch, um ein Transkript zu erhalten.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function DeYouTubeToTextPage() {
  return (
    <UseCaseLayout
      locale="de"
      badge="YouTube-URL oder hochladen · Kostenlos · Keine Anmeldung"
      h1First="YouTube zu Text"
      h1Second="Fügen Sie eine URL ein, erhalten Sie ein sauberes Transkript"
      subtitle="Fügen Sie einen YouTube-Link ein, um bereits verfügbare Untertitel zu verwenden, oder laden Sie Audio hoch, um ein neues Whisper-Transkript zu erstellen. Überprüfen Sie den Text, erstellen Sie eine Zusammenfassung und exportieren Sie SRT-Untertitel."
      currentHref="/de/youtube-to-text"
      enableYouTubeUrl

      platforms={[
        { name: 'YouTube',      iconKey: 'videoCameraFill', brandBg: '#FF0000' },
        { name: 'YouTube Live', iconKey: 'broadcast',       brandBg: '#B91C1C' },
        { name: 'YT Shorts',    iconKey: 'videoCameraFill', brandBg: '#DC2626' },
        { name: 'YT Music',     iconKey: 'soundwave',       brandBg: '#7F1D1D' },
        { name: 'YT Premium',   iconKey: 'videoCameraFill', brandBg: '#0F172A' },
        { name: 'Video hub',    iconKey: 'videoCameraFill', brandBg: '#2D8CFF', href: '/de/transcribe-video-to-text' },
      ]}

      howItWorksTitle="Wie die YouTube-Transkription funktioniert"
      steps={[
        {
          icon: 'folder',
          title: 'Fügen Sie eine URL ein oder laden Sie Audio hoch',
          desc: 'Schneller Weg: Fügen Sie den YouTube-Link ein, wir holen die vorhandenen Untertitel. Whisper-Weg: Laden Sie das Audio für eine frische Transkription hoch.',
        },
        {
          icon: 'upload',
          title: 'Untertitel oder frische Transkription',
          desc: 'Der URL-Pfad gibt verfügbare Untertitel zurück. Der Upload-Pfad führt Whisper large-v3 aus; die Verarbeitungszeit hängt von der Länge und Größe des Mediums ab.',
        },
        {
          icon: 'editPen',
          title: 'Zusammenfassung, SRT, Übersetzung',
          desc: 'AI-Zusammenfassung neben dem Transkript. Laden Sie SRT für das Video herunter, übersetzen Sie in über 50 Sprachen, exportieren Sie als DOCX oder PDF.',
        },
      ]}

      exampleTitle="Beispiel für ein YouTube-Transkript"
      exampleFileName="youtube-video.mp4"
      exampleDurationLabel="12:34"
      exampleLines={[
        { t: '0:00',  line: 'Willkommen zurück auf dem Kanal. Heute betrachten wir die drei größten Veränderungen in der Produktanalyse im Jahr 2026.' },
        { t: '0:12',  line: 'Änderung eins, die Sitzungswiedergabe ist jetzt im Grunde genommen Standard. Jedes ernsthafte Tool bietet es in der Basisklasse an.' },
        { t: '0:24',  line: 'Änderung zwei, der Übergang von benutzerdefinierten SQL-Dashboards zu Abfragen in natürlicher Sprache geschieht schnell.' },
        { t: '0:37',  line: 'Änderung drei, lagernative Tools verdrängen den alten ereignisbasierten Analyse-Stack.' },
        { t: '0:50',  line: 'Lassen Sie mich erklären, was jede Änderung tatsächlich für die Werkzeuge bedeutet, die Sie in diesem Jahr bewerten sollten.' },
        { t: '1:02',  line: 'Zuerst die Sitzungswiedergabe. Wenn Ihr aktuelles Tool dafür zusätzliche Gebühren erhebt, ist das ein Zeichen, sich umzusehen.' },
        { t: '1:14',  line: 'Moderne Tools bündeln die Wiedergabe mit Ereignissen, Trichtern und Kohorten als ein Produkt, nicht als kostenpflichtiges Add-On.' },
      ]}
      summaryPoints={[
        '3 größte Veränderungen in der Produktanalyse im Jahr 2026.',
        'Sitzungswiedergabe ist jetzt Standard bei ernsthaften Tools.',
        'Übergang von SQL-Dashboards zu Abfragen in natürlicher Sprache.',
        'Lagernative Tools ersetzen ereignisbasierte Stacks.',
      ]}
      actionItems={[
        'Bewerten Sie das aktuelle Tool für die gebündelte Wiedergabe',
        'Versuchen Sie in diesem Quartal ein lagernative Analyse-Tool',
        'Entwerfen Sie einen Blog-Rückblick auf die 3 Änderungen',
      ]}

      whyTitle="Warum Mictoo für YouTube-Transkription"
      whyCards={[
        {
          icon: 'target',
          title: 'Wählen Sie den richtigen Transkriptionsweg',
          desc: 'Verwenden Sie vorhandene Untertitel für Geschwindigkeit oder laden Sie Audio hoch, wenn Sie ein frisches Transkript zur Überprüfung von Namen, Interpunktion und Fachbegriffen wünschen.',
        },
        {
          icon: 'clip',
          title: 'SRT für die Videobeschreibung',
          desc: 'Laden Sie SRT herunter und laden Sie es wieder in YouTube Studio hoch für bearbeitete Untertitel oder verwenden Sie es anderswo in Ihrem Workflow.',
        },
        {
          icon: 'sparkles',
          title: 'AI-Zusammenfassung für Episodenhinweise',
          desc: 'Solide erste Entwurf für die Videobeschreibung, Blog-Rückblick und Kapitelüberschriften. Verwandeln Sie einen 60-minütigen Podcast in 200 Wörter.',
        },
        {
          icon: 'globe',
          title: 'Übersetzen Sie Untertitel in über 50 Sprachen',
          desc: 'Internationale Zielgruppe? Übersetzen Sie das Transkript und laden Sie es dann als übersetzte SRT zu Ihrem Video hoch.',
        },
      ]}

      scenariosTitle="Häufige YouTube-Szenarien"
      scenarios={[
        { icon: 'search',    title: 'Ein Video recherchieren' },
        { icon: 'editPen',   title: 'Blog-Rückblick' },
        { icon: 'clip',      title: 'SRT-Untertitel' },
        { icon: 'chat',      title: 'Zitat ziehen' },
        { icon: 'globe',     title: 'Untertitel übersetzen' },
        { icon: 'headset',   title: 'Podcast auf YT' },
      ]}

      tipsTitle="Tipps für YouTube-Transkripte"
      tips={[
        'Der schnellste Weg ist die URL, wenn das Video bereits Untertitel hat.',
        'Für technische oder nicht-englische Videos bevorzugen Sie den Audio-Upload-Weg.',
        'Sehr lange Streams: Laden Sie das Audio herunter und teilen Sie es vor dem Upload.',
        'Für Ihre eigenen Videos laden Sie das Quell-Audio für die beste Genauigkeit hoch.',
      ]}

      guidesTitle="Verwandte Tools"
      guides={[
        { href: '/de/transcribe-video-to-text',      icon: 'video', title: 'Video zu Text',       desc: 'Nicht-YouTube MP4, MOV, WebM' },
        { href: '/de/transcribe-audio-to-text',      icon: 'file',  title: 'Audio zu Text',       desc: 'Jedes Audioformat' },
        { href: '/de/free-srt-generator',            icon: 'file',  title: 'SRT-Generator',       desc: 'Untertitel-fokussierter Export' },
        { href: '/de/how-to-download-youtube-video', icon: 'video', title: 'Download von YT',    desc: 'Leitfaden: Audio erhalten' },
      ]}

      faq={[
        {
          q: 'Kann ich einfach eine YouTube-URL einfügen?',
          a: 'Ja. Wenn das Video Untertitel hat (vom Ersteller hochgeladen oder automatisch generiert), holen wir sie in Sekunden. Wenn keine Untertitel vorhanden sind, laden Sie stattdessen die Audiodatei für eine vollständige Whisper-Transkription hoch.',
        },
        {
          q: 'Wie unterscheidet sich der Upload-Pfad von YouTube-Untertiteln?',
          a: 'Der URL-Pfad gibt bereits verfügbare Untertitel für das Video zurück. Der Upload-Pfad erstellt ein separates Whisper-Transkript aus dem Audio. Beide Versionen können Fehler enthalten, überprüfen Sie daher Namen, Zahlen und Zeitangaben vor der Veröffentlichung.',
        },
        {
          q: 'Wie bekomme ich das Audio aus einem YouTube-Video?',
          a: 'Verwenden Sie ein Browser-Tool oder einen Desktop-Extractor Ihrer Wahl, und laden Sie dann die MP3 oder M4A hoch. Wir hosten aus urheberrechtlichen Gründen kein Download-Tool, aber sehen Sie sich unseren Leitfaden "Wie man ein YouTube-Video herunterlädt" für gängige Optionen an.',
        },
        {
          q: 'Transkribiert Mictoo nicht-englische YouTube-Videos?',
          a: 'Ja. Whisper large-v3 unterstützt über 50 Sprachen mit automatischer Erkennung. Für kurze Clips oder ungewöhnliche Akzente stellen Sie die Sprache im Dropdown-Menü explizit ein.',
        },
        {
          q: 'Kann ich eine AI-Zusammenfassung des Videos erhalten?',
          a: 'Ja. Die AI-Zusammenfassung erscheint automatisch neben dem Transkript. Solide erste Entwurf für eine Videobeschreibung, Blog-Rückblick oder Episodenhinweise.',
        },
        {
          q: 'Kann ich SRT herunterladen, um Untertitel wieder zu meinem Video hinzuzufügen?',
          a: 'Ja. Laden Sie SRT oder VTT nach der Transkription herunter. Beide Formate funktionieren mit YouTube Studio, Premiere, DaVinci, Final Cut, CapCut und den meisten modernen Playern.',
        },
        {
          q: 'Kann ich ein YouTube-Transkript übersetzen?',
          a: 'Ja. Wählen Sie eine Zielsprache und klicken Sie auf Übersetzen. Nützlich für internationale Zielgruppen oder nicht-englische Wiedergabeseiten.',
        },
        {
          q: 'Wird meine YouTube-Daten auf Ihren Servern gespeichert?',
          a: 'Nein. Abgerufene Untertitel und hochgeladenes Audio werden einmal verarbeitet und gelöscht. Nur das Transkript bleibt bestehen, wenn Sie sich anmelden und es in der Historie speichern.',
        },
      ]}

      ctaHeadline="Verwandeln Sie jedes YouTube-Video in Text"
      ctaSubtitle="Fügen Sie eine URL für den schnellen Weg ein, laden Sie Audio für den vollständigen Whisper-Weg hoch. Kostenlos pro Video."
      ctaButton="Fügen Sie eine YouTube-URL ein oder laden Sie hoch"

      relatedLinks={[
        { href: '/de/transcribe-video-to-text', label: 'Video zu Text' },
        { href: '/de/podcast-transcription',    label: 'Podcast-Transkription' },
        { href: '/de/lecture-transcription',    label: 'Vorlesungs-Transkription' },
        { href: '/de/free-srt-generator',       label: 'Kostenloser SRT-Generator' },
        { href: '/de/webinar-transcription',    label: 'Webinar-Transkription' },
      ]}
    />
  )
}