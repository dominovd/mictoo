import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/lecture-transcription',
  'fr': 'https://mictoo.com/fr/lecture-transcription',
  'de': 'https://mictoo.com/de/lecture-transcription',
  'es': 'https://mictoo.com/es/lecture-transcription',
  'ru': 'https://mictoo.com/ru/lecture-transcription',
  'it': 'https://mictoo.com/it/lecture-transcription',
  'pt': 'https://mictoo.com/pt/lecture-transcription',
  'pl': 'https://mictoo.com/pl/lecture-transcription',
  'ja': 'https://mictoo.com/ja/lecture-transcription',
  'ko': 'https://mictoo.com/ko/lecture-transcription',
  'x-default': 'https://mictoo.com/lecture-transcription',
}

export const metadata = {
  title: 'Vorlesungsabschrift für Klassen und Seminare | Mictoo',
  description:
    'Laden Sie eine aufgezeichnete Klasse, Vorlesung oder ein Seminar hoch und erhalten Sie durchsuchbaren Text, Zeitstempel, eine KI-Zusammenfassung und Exportdateien.',
  alternates: {
    canonical: 'https://mictoo.com/de/lecture-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: 'Vorlesungsabschrift: Kostenloser Transkriptgenerator | Mictoo',
    description: 'Laden Sie Ihre aufgezeichnete Klasse oder Ihr Seminar hoch und erhalten Sie in Sekunden sauberen Text.',
    url: 'https://mictoo.com/de/lecture-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vorlesungsabschrift: Kostenloser Generator',
    description: 'Laden Sie Ihre Klassen- oder Seminaraufnahme hoch.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function DeLectureTranscriptionPage() {
  return (
    <UseCaseLayout
      locale="de"
      badge="Studierende · Akademiker · Kostenlos"
      h1First="Vorlesungsabschrift"
      h1Second="Kostenlose Transkripte für Klassen und Seminare"
      subtitle="Laden Sie Ihre aufgezeichnete Vorlesung von Zoom, Panopto, YouTube, Kaltura oder Ihrem Telefon hoch. Erhalten Sie ein durchsuchbares Transkript mit Zeitstempeln, bereit für Studiennotizen, Revision und Zitation."
      currentHref="/de/lecture-transcription"

      platforms={[
        { name: 'Zoom',      iconKey: 'videoCameraFill', brandBg: '#2D8CFF', href: '/de/zoom-transcription' },
        { name: 'YouTube',   iconKey: 'videoCameraFill', brandBg: '#FF0000' },
        { name: 'Panopto',   iconKey: 'cap',             brandBg: '#014A96' },
        { name: 'Kaltura',   iconKey: 'cap',             brandBg: '#FA6425' },
        { name: 'Camtasia',  iconKey: 'videoCameraFill', brandBg: '#00A651' },
        { name: 'Voice Memo',iconKey: 'mic',             brandBg: '#F97316', href: '/de/voice-memo-to-text' },
      ]}

      howItWorksTitle="Wie die Vorlesungsabschrift funktioniert"
      steps={[
        {
          icon: 'folder',
          title: 'Exportieren Sie die Vorlesung',
          desc: 'Laden Sie von Panopto/Kaltura herunter, speichern Sie aus der Zoom-Cloud oder zeichnen Sie während des Unterrichts auf Ihrem Telefon auf.',
        },
        {
          icon: 'upload',
          title: 'Legen Sie die Datei hier ab',
          desc: 'MP3, MP4, M4A, WAV, MOV funktionieren alle. Lange Vorlesungen werden automatisch aufgeteilt, wenn Sie angemeldet sind.',
        },
        {
          icon: 'editPen',
          title: 'Notizen, Zusammenfassung, Zitationen',
          desc: 'Durchsuchbares, zeitgestempeltes Transkript, KI-Zusammenfassung, DOCX für Studiennotizen. Chatten Sie mit dem Transkript, um sich auf Prüfungen vorzubereiten.',
        },
      ]}

      exampleTitle="Beispiel einer Vorlesungsabschrift"
      exampleFileName="intro-microeconomics-lecture-08.mp4"
      exampleDurationLabel="47:32"
      exampleLines={[
        { t: '0:00',  line: 'Alles klar. Letzte Woche haben wir mit dem Konzept des Konsumentenüberschusses abgeschlossen. Heute bauen wir darauf mit dem Produzentenüberschuss.' },
        { t: '0:11',  line: 'Der Produzentenüberschuss ist der Unterschied zwischen dem, was ein Produzent für ein Gut akzeptieren würde, und dem, was er tatsächlich erhält.' },
        { t: '0:23',  line: 'Zusammen geben der Konsumenten- und der Produzentenüberschuss uns das gesamte Wohlergehen in einem Markt, bevor wir Steuern oder Preisregulierungen einführen.' },
        { t: '0:35',  line: 'Warum ist uns dieses Konzept praktisch wichtig? Weil es uns ermöglicht zu bewerten, ob eine Politik einen Markt besser oder schlechter macht.' },
        { t: '0:47',  line: 'Betrachten Sie eine Steuer pro Einheit. Sie verschiebt die Angebotskurve um den Steuerbetrag nach oben, und beide Überschüsse schrumpfen.' },
        { t: '0:58',  line: 'Die Lücke, die zwischen dem, was Käufer zahlen, und dem, was Verkäufer erhalten, entsteht, nennen wir Wohlfahrtsverlust.' },
        { t: '1:08',  line: 'Bitte öffnen Sie das Arbeitsbuch auf Seite einunddreißig, und lassen Sie uns gemeinsam ein numerisches Beispiel durchgehen.' },
      ]}
      summaryPoints={[
        'Zusammenfassung: Konsumentenüberschuss aus der vorherigen Vorlesung.',
        'Neues Konzept: Produzentenüberschuss und gesamtes Wohlergehen.',
        'Angewandt auf die Steueranalyse.',
        'Wohlfahrtsverlust numerisch veranschaulicht.',
      ]}
      actionItems={[
        'Überprüfen Sie das Arbeitsbuch auf Seite 31',
        'Üben Sie die Berechnung des Wohlfahrtsverlusts',
        'Lesen Sie Kapitel 4 vor Donnerstag',
      ]}

      whyTitle="Warum Mictoo für Vorlesungsabschriften"
      whyCards={[
        {
          icon: 'search',
          title: 'Durchsuchbar im Transkript',
          desc: 'Drücken Sie Ctrl-F für jedes Konzept aus der gesamten 45-minütigen Vorlesung in einer Sekunde. Besser als durch das Video zu scrubbing.',
        },
        {
          icon: 'sparkles',
          title: 'KI-Zusammenfassung für Revisionsnotizen',
          desc: 'Die Zusammenfassung ist ein solider Ausgangspunkt für die Revision. Kürzen Sie, was Sie bereits wissen, und behalten Sie, was Sie verpasst haben.',
        },
        {
          icon: 'chat',
          title: 'Chatten Sie mit der Vorlesung',
          desc: 'Stellen Sie Fragen zum Material, um sich auf Prüfungen vorzubereiten. RAG-Stil Antworten zitieren den genauen Zeitstempel.',
        },
        {
          icon: 'globe',
          title: 'Übersetzen für nicht-native Studierende',
          desc: 'Vorlesung auf Englisch, aber Sie lernen auf Portugiesisch? Ein-Klick-Übersetzung in über 50 Sprachen.',
        },
      ]}

      scenariosTitle="Häufige Vorlesungsszenarien"
      scenarios={[
        { icon: 'book',      title: 'Universitätsklasse' },
        { icon: 'cap' ,      title: 'Online-Kurs' },
        { icon: 'search',    title: 'Prüfungsvorbereitung' },
        { icon: 'editPen',   title: 'Studiennotizen' },
        { icon: 'globe',     title: 'Nicht-native Studierende' },
        { icon: 'headset',   title: 'Aufgezeichnetes Seminar' },
      ]}

      tipsTitle="Tipps für sauberere Vorlesungsabschriften"
      tips={[
        'Sitzen Sie nah an der Front und verwenden Sie Ihr Telefon als Backup-Mikrofon.',
        'Lange Vorlesungen über 60 MB werden automatisch aufgeteilt, wenn Sie sich anmelden.',
        'Setzen Sie die Sprache explizit für technische oder nicht-englische Inhalte.',
        'Verwenden Sie den Chat, um nach der Transkription Folgefragen zu stellen.',
      ]}

      guidesTitle="Verwandte Lernwerkzeuge"
      guides={[
        { href: '/de/zoom-transcription',        icon: 'video', title: 'Zoom-Vorlesung',      desc: 'Cloud-Aufnahme herunterladen' },
        { href: '/de/youtube-to-text',           icon: 'video', title: 'YouTube-Vorlesung',   desc: 'URL einfügen oder hochladen' },
        { href: '/de/voice-memo-to-text',        icon: 'mic',   title: 'Telefonaufnahme',   desc: 'iPhone Voice Memo im Unterricht' },
        { href: '/de/timestamped-transcription', icon: 'file',  title: 'Zeitgestempelte Notizen', desc: 'Zeitlich abgestimmte Exporte' },
      ]}

      faq={[
        {
          q: 'Kann ich eine Zoom-Klassenaufnahme transkribieren?',
          a: 'Ja. Laden Sie die Cloud-Aufnahme MP4 oder M4A herunter und legen Sie sie hier ab. Siehe den Zoom-Leitfaden für den genauen Downloadpfad.',
        },
        {
          q: 'Meine Vorlesung ist über 60 MB. Was nun?',
          a: 'Melden Sie sich an, um die automatische Aufteilung zu aktivieren (bis zu etwa 3 Stunden). Oder reduzieren Sie die Größe auf 64 kbps Mono MP3 mit ffmpeg für eine 5-fache Größenreduktion.',
        },
        {
          q: 'Transkribiert Mictoo nicht-englische Vorlesungen?',
          a: 'Ja. Whisper large-v3 unterstützt über 50 Sprachen. Setzen Sie die Sprache explizit für technisches Vokabular oder starke Akzente.',
        },
        {
          q: 'Kann ich im Transkript suchen?',
          a: 'Ja. Die Leseransicht enthält ein Suchfeld mit Trefferanzahl und Hervorhebung. Drücken Sie Ctrl-F für Ihren Begriff und springen Sie zwischen den Treffern.',
        },
        {
          q: 'Kann ich Fragen zum Vorlesungsmaterial stellen?',
          a: 'Ja. Chatten Sie mit dem Transkript, um zu fragen „erklären Sie den Wohlfahrtsverlust“ oder „welche Seiten hat der Professor erwähnt“. Antworten zitieren Zeitstempel.',
        },
        {
          q: 'Kann ich Vorlesungsnotizen als DOCX oder PDF exportieren?',
          a: 'Ja. DOCX für alle, PDF und JSON für angemeldete Benutzer. TXT ist immer verfügbar.',
        },
        {
          q: 'Werden Vorlesungsaufnahmen auf Ihren Servern gespeichert?',
          a: 'Nein. Audio wird an den Transkriptionsanbieter gestreamt, einmal verarbeitet und dann gelöscht. Transkripte werden nur gespeichert, wenn Sie sich anmelden.',
        },
      ]}

      ctaHeadline="Verwandeln Sie Vorlesungen in Studiennotizen"
      ctaSubtitle="Durchsuchbares Transkript, KI-Zusammenfassung, chatten Sie mit dem Material. Kostenlos pro Vorlesung."
      ctaButton="Eine Vorlesung hochladen"

      relatedLinks={[
        { href: '/de/webinar-transcription',     label: 'Webinar-Transkription' },
        { href: '/de/sermon-transcription',      label: 'Predigt-Transkription' },
        { href: '/de/voice-memo-to-text',        label: 'Voice Memo zu Text' },
        { href: '/de/interview-transcription',   label: 'Interview-Transkription' },
        { href: '/de/meeting-transcription',     label: 'Besprechungs-Transkription' },
      ]}
    />
  )
}