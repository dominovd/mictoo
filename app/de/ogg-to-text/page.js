import FormatPageLayout from '@/components/FormatPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/ogg-to-text',
  'fr': 'https://mictoo.com/fr/ogg-to-text',
  'de': 'https://mictoo.com/de/ogg-to-text',
  'es': 'https://mictoo.com/es/ogg-to-text',
  'ru': 'https://mictoo.com/ru/ogg-to-text',
  'it': 'https://mictoo.com/it/ogg-to-text',
  'pt': 'https://mictoo.com/pt/ogg-to-text',
  'pl': 'https://mictoo.com/pl/ogg-to-text',
  'ja': 'https://mictoo.com/ja/ogg-to-text',
  'ko': 'https://mictoo.com/ko/ogg-to-text',
  'x-default': 'https://mictoo.com/ogg-to-text',
}

export const metadata = {
  title: 'OGG zu Text: Telegram-Sprachnachrichten, Linux-Audio und Opus/Vorbis-Transkription | Mictoo',
  description:
    'Laden Sie OGG-Audio (Vorbis, Opus, FLAC innerhalb von OGG) oder Telegram .oga-Sprachnachrichten hoch. Bearbeitbares Transkript mit Zeitstempeln in Sekunden, keine Anmeldung erforderlich.',
  alternates: {
    canonical: 'https://mictoo.com/de/ogg-to-text',
    languages: LANGS,
  },
  openGraph: {
    title: 'OGG zu Text: Telegram-Sprachnachrichten, Linux-Audio, Opus/Vorbis-Transkription | Mictoo',
    description: 'Laden Sie OGG-Audio oder Telegram .oga-Sprachnachrichten hoch. Bearbeitbares Transkript in Sekunden.',
    url: 'https://mictoo.com/de/ogg-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OGG zu Text: Telegram-Sprachnachrichten und Linux-Audio-Transkription',
    description: 'Laden Sie OGG-Audio oder Telegram .oga-Sprachnachrichten hoch. Bearbeitbares Transkript in Sekunden.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function DeOggToTextPage() {
  return (
    <FormatPageLayout
      locale="de"
      badge="OGG · Vorbis · Opus · .oga"
      h1First="OGG zu Text"
      h1Second="Telegram-Sprachnachrichten, Linux-Audio, Opus und Vorbis"
      subtitle="OGG ist das, was Telegram Voice verwendet (.oga), was Linux-Audio-Apps standardmäßig verwenden und was der Open-Source Opus-Codec enthält. Laden Sie die Datei hoch, wir erkennen den Audiostream automatisch und transkribieren mit Whisper large-v3."
      highlightFormat="ogg"
      previewFileName="telegram-voice.oga"
      previewWordCount={128}
      previewDurationLabel="1:52"
      previewLines={[
        { t: '0:00',  line: 'Hey, schnelle Sprachnachricht zum Anruf morgen.' },
        { t: '0:03',  line: 'Ich habe mir die Präsentation angesehen und ich denke, Folien vier bis sechs müssen überdacht werden, bevor wir präsentieren.' },
        { t: '0:10',  line: 'Das Hauptproblem ist, dass die Geschichte vom Problem direkt zum Preis springt, ohne die Demobilder zu zeigen.' },
        { t: '0:20',  line: 'Was ich tun würde, ist Folie fünf gegen den Demofluss zu tauschen und den Preis ans Ende der Präsentation zu schieben.' },
        { t: '0:30',  line: 'So bauen wir die Spannung auf, was das Produkt tatsächlich tut, bevor wir über die Kosten sprechen.' },
        { t: '0:39',  line: 'Außerdem hat der Kunde gestern erwähnt, dass er die Integrationsfolie sehen möchte, die sich derzeit im Anhang befindet.' },
        { t: '0:49',  line: 'Verschieben Sie sie in den Hauptfluss, vielleicht zwischen die Demo und die Preisgestaltung.' },
        { t: '0:56',  line: 'Bis bald, lassen Sie mich wissen, was Sie denken, wenn Sie die Gelegenheit haben.' },
      ]}
      whyTitle="Warum Mictoo für OGG-Transkription"
      whyCards={[
        {
          icon: 'mic',
          title: 'Telegram-Sprachnachrichten, nativ',
          desc: 'Telegram .oga-Sprachnachrichten werden direkt akzeptiert. Kein Umbenennen, kein Repackaging. Wir kümmern uns um den Opus-Stream im OGG-Container.',
        },
        {
          icon: 'gear',
          title: 'Vorbis, Opus und FLAC-in-OGG',
          desc: 'Jeder Codec im OGG-Container funktioniert: Vorbis (älter), Opus (modern), FLAC-in-OGG (audiophil). Automatisch serverseitig erkannt.',
        },
        {
          icon: 'sparkles',
          title: 'KI-Zusammenfassung für Sprachnachrichtenschlangen',
          desc: 'Sprachnachrichten neigen dazu, ausschweifend zu sein. Die KI-Zusammenfassung verwandelt eine fünfminütige .oga in eine zweiseitige Zusammenfassung, die Sie umsetzen können.',
        },
        {
          icon: 'globe',
          title: 'Übersetzung in 50+ Sprachen',
          desc: 'Sprachnachricht in Russisch, Spanisch oder Portugiesisch aus einem Gruppenchat. Nach der Transkription ins Englische (oder jede andere Zielsprache) übersetzen.',
        },
      ]}
      scenariosTitle="Wann OGG zu Text die richtige Wahl ist"
      scenarios={[
        {
          icon: 'mic',
          title: 'Telegram-Sprachnachricht',
          desc: 'Sprachnotiz, die von einem Kollegen oder Kunden über Telegram gesendet wurde. Speichern Sie die .oga aus dem Chat, laden Sie sie hier hoch und erhalten Sie eine Textversion zum Überfliegen.',
        },
        {
          icon: 'gear',
          title: 'Linux-Audioaufnahme',
          desc: 'Aufnahme von Audacity, GNOME Sound Recorder oder einem KDE-Audiotool, das standardmäßig OGG verwendet. Vollständig unterstützt, keine Konvertierung erforderlich.',
        },
        {
          icon: 'briefcase',
          title: 'Export aus Open-Source-Apps',
          desc: 'Podcast- oder Interviewrekorder, der OGG exportiert (viele FOSS-Apps verwenden aus Lizenzgründen standardmäßig Vorbis oder Opus).',
        },
        {
          icon: 'video',
          title: 'Firefox MediaRecorder-Aufnahme',
          desc: 'Firefox produziert oft OGG/Opus aus Browser-Aufnahme-Apps. Laden Sie die Datei hoch für ein sauberes Transkript mit Zeitstempeln.',
        },
        {
          icon: 'editPen',
          title: 'Diktierte Notiz oder Memo',
          desc: 'Sprachgesteuerte Notiz, die in einer App erfasst wird, die als OGG speichert. Verwandeln Sie sie in bearbeitbaren Text, bereit für Ihren Schreibworkflow.',
        },
        {
          icon: 'users',
          title: 'Mehrsprecher-OGG-Chatprotokoll',
          desc: 'Discord, Mumble oder ähnliche VOIP-Aufnahmen, die als OGG exportiert wurden. Transkript zur Referenz, Protokoll oder Archiv.',
        },
      ]}
      technicalTitle="Was in einer OGG-Datei enthalten sein kann"
      technicalIntro="OGG ist eine Containerfamilie und kein einzelner Audio-Codec. Zu wissen, welcher Streamtyp und welche Erweiterung vorhanden ist, hilft zu erklären, woher eine Aufnahme stammt, aber Sie müssen sie vor dem Hochladen nicht repacken."
      technicalFacts={[
        {
          icon: 'layers',
          title: 'Vorbis, Opus oder FLAC',
          desc: 'Der OGG-Container kann mehrere Codecs tragen. Sprachnachrichten verwenden häufig Opus; ältere Desktop-Audio verwenden oft Vorbis.',
        },
        {
          icon: 'file',
          title: '.oga und .ogg',
          desc: '.oga ist die Audio-nur-Erweiterung in derselben Containerfamilie. Telegram-Sprachnachrichten exportieren oft mit dieser Erweiterung.',
        },
        {
          icon: 'mic',
          title: 'Quelle der Sprachnachricht',
          desc: 'Kurze mobile Nachrichten können Raumgeräusche und Telefonverarbeitung enthalten; eine klare Aufnahme ist wichtiger als der Name des Containers.',
        },
        {
          icon: 'gear',
          title: 'Header-basierte Inspektion',
          desc: 'Die Streamstruktur wird während der Verarbeitung inspiziert, sodass eine ungewöhnliche Erweiterung nicht zuerst umbenannt werden muss.',
        },
      ]}
      faq={[
        {
          q: 'Welche Arten von OGG-Dateien akzeptiert Mictoo?',
          a: 'Jeder Standard-OGG-Container: Vorbis-Audio (älter, häufig auf Linux), Opus-Audio (neu, verwendet von Telegram-Sprachnachrichten und modernen Apps) und FLAC-in-OGG. Auch Telegram .oga-Dateien, die OGG mit einer anderen Erweiterung sind.',
        },
        {
          q: 'Ist eine .oga-Datei dasselbe wie .ogg?',
          a: 'Effektiv ja. .oga ist die standardisierte Erweiterung für Audio-nur OGG, die am häufigsten von Telegram-Sprachnachrichten verwendet wird, die einen Opus-Stream tragen. Mictoo behandelt .oga und .ogg gleich.',
        },
        {
          q: 'Meine OGG-Datei ist über 60 MB. Was nun?',
          a: 'Opus und Vorbis sind effizient, sodass 60 MB normalerweise eine sehr lange Aufnahme bedeutet. Wenn Sie angemeldet sind, teilen wir automatisch bis zu etwa 3 Stunden. Andernfalls zuerst herunterskalieren: ffmpeg -i in.ogg -b:a 32k -ac 1 out.ogg. Sprache bleibt klar.',
        },
        {
          q: 'Akzeptieren Sie OGG-Video (Theora)?',
          a: 'Der Audiotrack innerhalb eines OGG/Theora-Containers wird transkribiert. Laden Sie die .ogv-Datei hoch und wir demuxen den Audio wie bei jedem Videoformat. Stille Theora-Clips erzeugen leere Transkripte.',
        },
        {
          q: 'Transkribiert Mictoo nicht-englisches OGG?',
          a: 'Ja. Whisper large-v3 unterstützt 50+ Sprachen mit automatischer Erkennung. Für kurze Sprachnachrichten oder nicht-englische Inhalte stellen Sie die Sprache explizit für sauberere Ergebnisse bei der ersten Durchlauf ein.',
        },
        {
          q: 'Kann ich SRT-Untertitel für eine OGG-Aufnahme erhalten?',
          a: 'Ja. Laden Sie SRT oder VTT nach der Transkription herunter. Zeitstempel stimmen mit der ursprünglichen OGG-Zeitleiste überein, um sie in Videobearbeitungsprogrammen oder Barrierefreiheitswerkzeugen zu verwenden.',
        },
        {
          q: 'Wird meine OGG-Datei auf Ihren Servern gespeichert?',
          a: 'Nein. Die Audio-Streams werden an den Transkriptionsanbieter gesendet, einmal verarbeitet und aus dem Speicher gelöscht. Wir schreiben es niemals auf die Festplatte. Transkripte werden nur gespeichert, wenn Sie sich anmelden und in der Historie speichern.',
        },
        {
          q: 'Kann ich das Transkript in eine andere Sprache übersetzen?',
          a: 'Ja. Wählen Sie nach der Transkription eine Zielsprache aus und klicken Sie auf Übersetzen. Die Übersetzung erfolgt mit GPT-4o-mini und erscheint neben dem Original.',
        },
        {
          q: 'Beeinflusst die OGG-Qualität das Transkript?',
          a: 'Kaum. Opus bei 24-32 kbps klingt klar für Sprache und transkribiert im Wesentlichen genauso gut wie höhere Bitraten. Whisper resampelt intern auf 16 kHz mono, sodass die Bitrate minimale Auswirkungen auf klare Sprache hat.',
        },
        {
          q: 'Wie lange dauert eine OGG-Transkription?',
          a: 'Eine 2-minütige Telegram-Sprachnachricht benötigt normalerweise 5-15 Sekunden von Anfang bis Ende. Längere OGG-Dateien (30-45 Minuten) benötigen 45-90 Sekunden. Die Upload-Geschwindigkeit ist oft der längere Schritt.',
        },
      ]}
      ctaHeadline="Laden Sie Ihre Telegram-Sprachnachricht oder OGG-Datei hoch"
      ctaSubtitle="Opus, Vorbis, FLAC-in-OGG, .oga-Sprachnachrichten. Jeder OGG-Stream, nativ verarbeitet."
      ctaButton="OGG hochladen zur Transkription"
    />
  )
}