import FormatPageLayout from '@/components/FormatPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/transcribe-video-to-text',
  'fr': 'https://mictoo.com/fr/transcribe-video-to-text',
  'de': 'https://mictoo.com/de/transcribe-video-to-text',
  'es': 'https://mictoo.com/es/transcribe-video-to-text',
  'ru': 'https://mictoo.com/ru/transcribe-video-to-text',
  'it': 'https://mictoo.com/it/transcribe-video-to-text',
  'pt': 'https://mictoo.com/pt/transcribe-video-to-text',
  'pl': 'https://mictoo.com/pl/transcribe-video-to-text',
  'ja': 'https://mictoo.com/ja/transcribe-video-to-text',
  'ko': 'https://mictoo.com/ko/transcribe-video-to-text',
  'x-default': 'https://mictoo.com/transcribe-video-to-text',
}

export const metadata = {
  title: 'Video zu Text: Kostenlose Online-Video-Transkription für MP4, MOV, WebM | Mictoo',
  description:
    'Laden Sie ein MP4-, MOV-, WebM-, AVI- oder MKV-Video hoch und erhalten Sie ein Transkript mit Zeitstempeln, KI-Zusammenfassung und SRT-Untertiteln. Für Bildschirmaufzeichnungen, Tutorials, Vlogs und Webinare.',
  alternates: {
    canonical: 'https://mictoo.com/de/transcribe-video-to-text',
    languages: LANGS,
  },
  openGraph: {
    title: 'Video zu Text: Kostenlose Online-Video-Transkription | Mictoo',
    description: 'MP4-, MOV-, WebM-Video-Transkription mit SRT, Zusammenfassung und Übersetzung.',
    url: 'https://mictoo.com/de/transcribe-video-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Video zu Text: Kostenlose Online-Video-Transkription',
    description: 'MP4-, MOV-, WebM-Video-Transkription mit SRT und Zusammenfassung.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function DeTranscribeVideoToTextPage() {
  return (
    <FormatPageLayout
      locale="de"
      badge="Videodateien · MP4 · MOV · WebM · Kostenlos"
      h1First="Video zu Text"
      h1Second="Für Bildschirmaufzeichnungen, Tutorials und Vlogs"
      subtitle="Laden Sie eine MP4-, MOV-, WebM-, MKV- oder AVI-Datei hoch. Wir extrahieren die Audiospur, transkribieren mit Whisper large-v3 und liefern ein Transkript mit Zeitstempeln, KI-Zusammenfassung und SRT-Untertiteln, die bereit sind, wieder ins Video eingefügt zu werden."
      highlightFormat="video"
      relatedFormatsTitle="Video-Container, die Sie hochladen können"
      relatedFormats={[
        { key: 'video', name: 'MP4', ext: '.mp4' },
        { key: 'mov', name: 'MOV', ext: '.mov' },
        { key: 'webm', name: 'WebM', ext: '.webm', href: '/de/webm-to-text' },
        { key: 'mkv', name: 'MKV', ext: '.mkv' },
        { key: 'avi', name: 'AVI', ext: '.avi' },
        { key: 'mpeg', name: 'MPEG', ext: '.mpeg' },
      ]}
      previewFileName="keynote-recording.mp4"
      previewWordCount={205}
      previewDurationLabel="32:47"
      enableYouTubeUrl={true}
      previewLines={[
        { t: '0:00',  line: 'Guten Morgen zusammen, und danke, dass Sie heute hierher gekommen sind.' },
        { t: '0:06',  line: 'Wir werden die nächsten dreißig Minuten damit verbringen, wo sich das Video 2026 verändert hat und was das für die Creator bedeutet.' },
        { t: '0:15',  line: 'Drei schnelle Zahlen, bevor wir anfangen. Zweiundneunzig Prozent der Internetnutzer sehen jede Woche Videos.' },
        { t: '0:24',  line: 'Kurzform hat jetzt mehr Betrachtungszeit als Langform auf jeder wichtigen Plattform.' },
        { t: '0:32',  line: 'Und die Suchanfragen, die zu einem Videoergebnis führen, sind im Jahresvergleich um das Zweieinhalbfache gestiegen.' },
        { t: '0:41',  line: 'Die Plattformen drängen also auf Video. Das Publikum sieht mehr Videos. Dieser Teil ist nicht umstritten.' },
        { t: '0:50',  line: 'Was umstritten ist, ist, was tatsächlich Aufmerksamkeit in diesem Video-Ozean erregt.' },
        { t: '0:58',  line: 'Lassen Sie mich die drei Muster durchgehen, die wir bei Creatorn gesehen haben, die jede Woche arbeiten.' },
      ]}
      whyTitle="Warum Mictoo für Video-Transkription"
      whyCards={[
        {
          icon: 'video',
          title: 'Jeder gängige Video-Container',
          desc: 'MP4, MOV, WebM, MKV, AVI. Wir demuxen die Audiospur serverseitig, sodass Sie das Video unverändert hochladen können, ohne einen Umwandlungsschritt.',
        },
        {
          icon: 'clip',
          title: 'SRT und VTT bereit für die Timeline',
          desc: 'Zeitstempel stimmen mit der ursprünglichen Video-Timeline überein. Laden Sie SRT oder VTT herunter und fügen Sie es direkt in Premiere, DaVinci, CapCut oder Ihren YouTube-Upload ein.',
        },
        {
          icon: 'sparkles',
          title: 'KI-Zusammenfassung für Beschreibungen',
          desc: 'Automatisch generierte Zusammenfassung neben dem Transkript. Solide erste Entwurf für Videobeschreibungen, Blog-Zusammenfassungen und Kapiteltitel.',
        },
        {
          icon: 'globe',
          title: 'Übersetzen Sie Untertitel in über 50 Sprachen',
          desc: 'Nachdem das Transkript bereit ist, übersetzen Sie die Untertitel in Spanisch, Französisch, Deutsch, Portugiesisch und 45+ andere Sprachen mit einem Klick.',
        },
      ]}
      scenariosTitle="Wann Video zu Text die richtige Wahl ist"
      scenarios={[
        {
          icon: 'video',
          title: 'YouTube-Video-Untertitel',
          desc: 'Aufgenommen, bearbeitet und als MP4 exportiert. Laden Sie die Datei für SRT-Untertitel und eine beschreibungsbereite Zusammenfassung hoch.',
        },
        {
          icon: 'briefcase',
          title: 'Loom- und Bildschirmaufzeichnungen',
          desc: 'WebM oder MP4 von Loom, OBS oder Browser-Bildschirmaufnahme. Erhalten Sie eine saubere Textversion des Walkthroughs.',
        },
        {
          icon: 'users',
          title: 'Webinar- und Workshop-Aufzeichnungen',
          desc: 'Langform-Event-Aufzeichnung. Das Transkript wird zum Nachfolge-Blogbeitrag, LinkedIn-Zusammenfassung und durchsuchbaren Archiv.',
        },
        {
          icon: 'editPen',
          title: 'Vlog- und Tutorial-Inhalte',
          desc: 'Vlog-Ausschnitt, Tutorial-Erklärung oder Produktdemo. Transkript speist Notizen, Untertitel und Wiederverwertung für soziale Medien.',
        },
        {
          icon: 'book',
          title: 'Kurslektionen-Archiv',
          desc: 'Aufgezeichnete Vorlesung oder Lektion MP4. Geben Sie den Studenten eine durchsuchbare Textversion und sichern Sie Untertitel für Barrierefreiheit.',
        },
        {
          icon: 'mic',
          title: 'Interview- und Testimonial-Video',
          desc: 'Gesprächsinterview oder Kunden-Testimonial. Transkript erleichtert das Zitieren, Bearbeiten und Übersetzen erheblich.',
        },
      ]}
      technicalTitle="Was mit der Videodatei passiert"
      technicalIntro="Mictoo verwendet die gesprochene Audiospur für die Transkription. Der Container und die Bildqualität verbessern nicht die Spracherkennung, beeinflussen jedoch die Upload-Größe und ob ein Audiostream verfügbar ist."
      technicalFacts={[
        {
          icon: 'video',
          title: 'Audiospur extrahiert',
          desc: 'Die Sprachspur wird aus dem Video-Container dekodiert. Sie müssen vor dem Hochladen keine separate MP3 exportieren.',
        },
        {
          icon: 'clip',
          title: 'Ursprüngliche Timeline beibehalten',
          desc: 'Transkriptsegmente und Untertitel-Exporte verwenden die ursprüngliche Medien-Timeline, sodass sie wieder mit dem Video abgeglichen werden können.',
        },
        {
          icon: 'layers',
          title: 'Container ist nicht der Codec',
          desc: 'MP4, MOV, WebM, MKV und AVI können verschiedene Audio-Codecs enthalten. Die Datei wird beim Verarbeiten inspiziert.',
        },
        {
          icon: 'ear',
          title: 'Sprache ist erforderlich',
          desc: 'Stille Clips und nur Musikvideos haben kein zuverlässiges gesprochenes Transkript. Überprüfen Sie zuerst, ob die beabsichtigte Audiospur hörbar ist.',
        },
      ]}
      faq={[
        {
          q: 'Welche Videoformate akzeptiert Mictoo?',
          a: 'MP4, MOV, WebM, MKV, AVI und die meisten anderen gängigen Container. Wir demuxen die Audiospur serverseitig, sodass Sie einen dieser Container direkt hochladen können, ohne zuerst in Audio umzuwandeln.',
        },
        {
          q: 'Wie groß darf eine Videodatei sein, die ich hochladen kann?',
          a: 'Bis zu 25 MB anonym, 60 MB bei Anmeldung. Für längere Videos teilen wir Dateien bis zu etwa 3 Stunden automatisch auf, wenn Sie angemeldet sind. Für sehr große Exporte, reduzieren Sie zuerst die Videoqualität oder extrahieren Sie die Audiospur und laden Sie die Audiodatei hoch.',
        },
        {
          q: 'Kann ich stattdessen eine YouTube-URL einfügen?',
          a: 'Ja. Auf dieser Seite können Sie eine YouTube-Video-URL einfügen, und Mictoo wird die Untertitel abrufen, wenn verfügbar. Wenn keine Untertitel vorhanden sind, laden Sie die Videodatei oder die extrahierte Audiospur für eine vollständige Whisper-Transkription hoch.',
        },
        {
          q: 'Stimmen die Zeitstempel mit dem ursprünglichen Video überein?',
          a: 'Ja. Transkript- und SRT/VTT-Zeitstempel verwenden die ursprüngliche Video-Timeline. Sie bieten eine nützliche erste Untertitelspur, aber Sie sollten die Zeit und Zeilenumbrüche in Ihrem Editor vor der Veröffentlichung überprüfen.',
        },
        {
          q: 'Kann ich SRT-Untertitel für das Video erhalten?',
          a: 'Ja. Laden Sie nach der Transkription als SRT oder VTT herunter. Beide Formate funktionieren in Premiere, DaVinci Resolve, Final Cut, CapCut, YouTube Studio und den meisten modernen Video-Playern.',
        },
        {
          q: 'Extrahieren Sie Audio aus stummen Videoclips?',
          a: 'Nein. Wenn das Video keine hörbare Sprache hat, gibt es nichts zu transkribieren. Bei Clips mit nur Musik wird das Transkript normalerweise leer oder enthält kurze Textfragmente.',
        },
        {
          q: 'Kann ich die Untertitel in eine andere Sprache übersetzen?',
          a: 'Ja. Nach der Transkription wählen Sie eine Zielsprache und klicken auf Übersetzen. Die Übersetzung erfolgt auf GPT-4o-mini und erscheint neben dem Original. Exportieren Sie die übersetzten SRT für Untertitel in Fremdsprachen.',
        },
        {
          q: 'Wird meine Videodatei auf Ihren Servern gespeichert?',
          a: 'Nein. Das Video wird an den Transkriptionsanbieter gestreamt, wir extrahieren das Audio im Speicher, transkribieren einmal und löschen alles aus dem Speicher. Das Transkript wird nur gespeichert, wenn Sie sich anmelden und entscheiden, es in der Historie zu speichern.',
        },
        {
          q: 'Transkribiert Mictoo nicht-englische Videos?',
          a: 'Ja. Whisper large-v3 unterstützt über 50 Sprachen mit automatischer Erkennung. Für kurze Videos oder nicht-englische Inhalte stellen Sie die Sprache explizit im Dropdown-Menü ein, um eine sauberere erste Erkennung zu erhalten.',
        },
        {
          q: 'Wie lange dauert eine Video-Transkription?',
          a: 'Ein 30-minütiges MP4 dauert normalerweise 40-70 Sekunden von Anfang bis Ende. Die Upload-Zeit und die Größe der Videodatei sind normalerweise der längere Schritt, da wir die Datei empfangen müssen, bevor wir das Audio demuxen.',
        },
      ]}
      ctaHeadline="Laden Sie Ihr Video hoch, erhalten Sie Untertitel und ein Transkript"
      ctaSubtitle="MP4, MOV, WebM, MKV, AVI. SRT, VTT, DOCX und eine Zusammenfassung in Sekunden."
      ctaButton="Video zum Transkribieren hochladen"
    />
  )
}