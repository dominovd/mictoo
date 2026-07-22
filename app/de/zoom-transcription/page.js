import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/zoom-transcription',
  'fr': 'https://mictoo.com/fr/zoom-transcription',
  'de': 'https://mictoo.com/de/zoom-transcription',
  'es': 'https://mictoo.com/es/zoom-transcription',
  'ru': 'https://mictoo.com/ru/zoom-transcription',
  'it': 'https://mictoo.com/it/zoom-transcription',
  'pt': 'https://mictoo.com/pt/zoom-transcription',
  'pl': 'https://mictoo.com/pl/zoom-transcription',
  'ja': 'https://mictoo.com/ja/zoom-transcription',
  'ko': 'https://mictoo.com/ko/zoom-transcription',
  'x-default': 'https://mictoo.com/zoom-transcription',
}

export const metadata = {
  title: 'Zoom-Transkription für Cloud- und lokale Aufnahmen | Mictoo',
  description:
    'Laden Sie eine Zoom-Cloud- oder lokale MP4/M4A-Aufnahme hoch und erhalten Sie ein zeitgestempeltes Transkript, eine KI-Zusammenfassung und Exportdateien.',
  alternates: {
    canonical: 'https://mictoo.com/de/zoom-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: 'Zoom-Aufnahme-Transkription | Mictoo',
    description: 'Laden Sie eine Zoom-Cloud- oder lokale MP4/M4A hoch und erhalten Sie ein Transkript, eine Zusammenfassung und Exporte.',
    url: 'https://mictoo.com/de/zoom-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zoom-Transkription: Kostenlos',
    description: 'Laden Sie eine Zoom-Aufnahme hoch und erhalten Sie ein zeitgestempeltes Transkript.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function DeZoomTranscriptionPage() {
  return (
    <UseCaseLayout
      locale="de"
      badge="Zoom · Cloud / Lokal / M4A-Audio · Kostenlos"
      h1First="Zoom-Transkription"
      h1Second="Cloud- und lokale Aufnahmen in Text"
      subtitle="Laden Sie eine Zoom-Cloud-Aufnahme MP4, eine Audio-only M4A oder eine lokale Aufnahme hoch. Erhalten Sie ein zeitgestempeltes Transkript, eine KI-Zusammenfassung, Übersetzungen und Exportdateien in einem Workflow."
      currentHref="/de/zoom-transcription"

      platforms={[
        { name: 'Cloud MP4',    iconKey: 'videoCameraFill', brandBg: '#2D8CFF' },
        { name: 'M4A-Audio',    iconKey: 'mic',             brandBg: '#0EA5A4' },
        { name: 'Lokale MP4',    iconKey: 'videoCameraFill', brandBg: '#4B53BC' },
        { name: 'Google Meet',  iconKey: 'videoCameraFill', brandBg: '#00832D', href: '/de/google-meet-transcription' },
        { name: 'MS Teams',     iconKey: 'videoCameraFill', brandBg: '#4B53BC', href: '/de/teams-meeting-transcription' },
        { name: 'Meeting Hub',  iconKey: 'videoCameraFill', brandBg: '#0F1F35', href: '/de/meeting-transcription' },
      ]}

      howItWorksTitle="So funktioniert die Zoom-Transkription"
      steps={[
        {
          icon: 'folder',
          title: 'Von Zoom herunterladen',
          desc: 'Cloud: zoom.us → Aufnahmen → MP4 oder die Version "Audio Only (M4A)" herunterladen. Lokal: ~/Documents/Zoom/.',
        },
        {
          icon: 'upload',
          title: 'Datei hier ablegen',
          desc: 'Audio-only M4A ist normalerweise viel kleiner als MP4 und vermeidet das Hochladen des Videotracks. Kostenlos bis zu 25 MB anonym, 60 MB angemeldet.',
        },
        {
          icon: 'editPen',
          title: 'Überprüfen und exportieren',
          desc: 'Die Verarbeitungszeit hängt von der Dauer, der Dateigröße und der Nachfrage ab. Wenn abgeschlossen, überprüfen Sie das Transkript und exportieren Sie eine Zusammenfassung, Untertitel oder eine DOCX-Zusammenfassung.',
        },
      ]}

      exampleTitle="Beispiel eines Zoom-Meeting-Transkripts"
      exampleFileName="zoom-cloud-recording.m4a"
      exampleDurationLabel="34:12"
      exampleLines={[
        { t: '0:00',  line: 'In Ordnung, entschuldigen Sie die Verzögerung, alle zusammen. Zoom hat sich geweigert, mich hereinzulassen, bis ich aktualisiert habe. Lassen Sie uns anfangen.' },
        { t: '0:10',  line: 'Heute überprüfen wir das Feedback zum Prototyp von letzter Woche und entscheiden, was wir für den Sprint priorisieren.' },
        { t: '0:22',  line: 'Insgesamt war das Feedback positiv. Zwölf von fünfzehn Teilnehmern verstanden den Ablauf ohne Hilfe.' },
        { t: '0:33',  line: 'Die drei, die hängen geblieben sind, hatten alle dasselbe Problem auf dem Einstellungsbildschirm. Wir sollten das zuerst beheben.' },
        { t: '0:45',  line: 'Einverstanden. Ich habe bereits eine Designüberarbeitung in Arbeit. Sollte bis Donnerstag zur Überprüfung bereit sein.' },
        { t: '0:56',  line: 'Zweitens, alle fanden den neuen leeren Zustand großartig, aber niemand fand den Import-Button. Er ist zu tief vergraben.' },
        { t: '1:08',  line: 'Lassen Sie uns den Import in die primäre Aktion im leeren Zustand verschieben. Das ist eine einzeilige Änderung für die Technik.' },
      ]}
      summaryPoints={[
        'Feedback zum Prototyp: 12/15 haben den Ablauf ohne Hilfe abgeschlossen.',
        'Blocker: Einstellungsbildschirm verwirrte 3/15 Teilnehmer.',
        'Leerer Zustand gut angenommen, aber Import-Button schwer zu finden.',
        'Designüberarbeitung bis Donnerstag.',
      ]}
      actionItems={[
        'Einstellungsbildschirm beheben (Designüberarbeitung Donnerstag)',
        'Import zur primären Aktion im leeren Zustand befördern',
        'Überarbeiteten Prototyp im Standup am Freitag teilen',
      ]}

      whyTitle="Warum Mictoo mit einer Zoom-Aufnahme verwenden"
      whyCards={[
        {
          icon: 'target',
          title: 'Ein zweites Transkript zur Überprüfung',
          desc: 'Verwenden Sie Mictoo, wenn Sie ein zusätzliches Transkript und zeitgestempelten Text zur Überprüfung von Namen, Terminologie und wichtigen Zitaten wünschen.',
        },
        {
          icon: 'lock',
          title: 'Verarbeitet heruntergeladene Dateien',
          desc: 'Mictoo verbindet sich nicht mit Ihrem Zoom-Konto. Laden Sie eine Cloud- oder lokale Aufnahme hoch, für die Sie bereits die Erlaubnis zur Nutzung haben.',
        },
        {
          icon: 'gear',
          title: 'Funktioniert auch mit lokalen Aufnahmen',
          desc: 'Das integrierte Transkript von Zoom ist nur für die Cloud. Lokale Aufnahmen erhalten nichts. Mictoo funktioniert mit beiden.',
        },
        {
          icon: 'sparkles',
          title: 'Zusammenfassung + Übersetzung inklusive',
          desc: 'Die KI-Zusammenfassung erscheint automatisch neben dem Transkript. Übersetzen Sie in über 50 Sprachen mit einem Klick.',
        },
      ]}

      scenariosTitle="Häufige Zoom-Szenarien"
      scenarios={[
        { icon: 'chat',      title: 'Kundenanruf' },
        { icon: 'users',     title: 'Team-Standup' },
        { icon: 'briefcase', title: 'Verkaufsdemonstration' },
        { icon: 'search',    title: 'Benutzerinterview' },
        { icon: 'book',      title: 'Webinar' },
        { icon: 'globe',     title: 'Mehrsprachiger Anruf' },
      ]}

      tipsTitle="Tipps für Zoom-Aufnahmen"
      tips={[
        'Laden Sie die M4A-Version "Audio Only" herunter. Gleiche Genauigkeit, 10x kleiner.',
        'Das Quota für Cloud-Aufnahmen wird nicht für unsere Transkription verwendet (wir arbeiten extern).',
        'Lokale Aufnahmen funktionieren ebenfalls. Suchen Sie unter ~/Documents/Zoom/.',
        'Für lange Anrufe über 60 MB melden Sie sich an für die automatische Aufteilung.',
      ]}

      guidesTitle="Meeting-Plattformen mit eigenen Anleitungen"
      guides={[
        { href: '/de/google-meet-transcription',   icon: 'video', title: 'Google Meet', desc: 'Workspace + kostenlose Lösung' },
        { href: '/de/teams-meeting-transcription', icon: 'video', title: 'MS Teams',    desc: 'OneDrive + SharePoint-Pfade' },
        { href: '/de/meeting-transcription',       icon: 'video', title: 'Meeting Hub', desc: 'Jede Plattform, ein Upload' },
        { href: '/de/webinar-transcription',       icon: 'monitor', title: 'Webinare',  desc: 'Zoom-Webinare, Demio, ON24' },
      ]}

      faq={[
        {
          q: 'Welche Zoom-Aufzeichnungstypen funktionieren?',
          a: 'Cloud-Aufzeichnung MP4 (Video), Cloud-Aufzeichnung M4A (Audio-only) und lokale Aufzeichnung MP4. Auch chat.txt-Export, wenn Sie das Chatprotokoll möchten, obwohl wir den Chat nicht transkribieren.',
        },
        {
          q: 'Brauche ich Zoom Pro oder höher?',
          a: 'Nein. Jede Zoom-Aufzeichnung funktioniert, auch von der kostenlosen lokalen Aufzeichnung. Die Zoom-Cloud-Aufzeichnung selbst erfordert Pro+, aber wenn Sie die Datei bereits haben, interessiert Mictoo nicht für Ihre Zoom-Stufe.',
        },
        {
          q: 'Meine Cloud-Aufzeichnung MP4 ist über 60 MB. Was nun?',
          a: 'Wenn Ihre Aufnahme einen Download "Audio Only (M4A)" enthält, verwenden Sie ihn, um das Hochladen des Videotracks zu vermeiden. Verfügbarkeit und Dateigröße hängen von den Aufnahmeinstellungen und der Dauer ab.',
        },
        {
          q: 'Sollte ich die Zoom-Audio-Transkription oder Mictoo verwenden?',
          a: 'Die Zoom-Audio-Transkription ist praktisch, wenn die Cloud-Aufzeichnung und Transkription auf Ihrem Konto aktiviert sind. Mictoo ist nützlich für lokale Dateien, zusätzliche Exportformate, Übersetzungen oder um ein weiteres Transkript zur Überprüfung zu erstellen. Die Genauigkeit variiert mit der Aufnahme.',
        },
        {
          q: 'Identifiziert Mictoo Zoom-Sprecher?',
          a: 'Nein. Das aktuelle Transkript ist kontinuierlicher Text mit zeitgestempelten Zeilen und ohne automatische "Sprecher 1 / Sprecher 2"-Labels.',
        },
        {
          q: 'Wo speichert die lokale Aufnahme?',
          a: 'Standardmäßig unter ~/Documents/Zoom/ auf Mac und %USERPROFILE%\\Documents\\Zoom\\ auf Windows. Jedes Meeting erhält seinen eigenen Ordner mit der MP4 und separater audio.m4a.',
        },
        {
          q: 'Wird meine Zoom-Aufzeichnung auf Ihren Servern gespeichert?',
          a: 'Nein. Die Datei streamt zum Transkriptionsanbieter, wird einmal verarbeitet und aus dem Speicher gelöscht. Nur das Transkript bleibt bestehen, wenn Sie sich anmelden.',
        },
      ]}

      ctaHeadline="Verwandeln Sie Zoom-Aufnahmen in sauberen Text"
      ctaSubtitle="Cloud MP4 oder M4A, lokale Aufnahme, jede Zoom-Stufe. Kostenlos pro Datei."
      ctaButton="Zoom-Aufnahme hochladen"

      relatedLinks={[
        { href: '/de/meeting-transcription',       label: 'Meeting-Transkription' },
        { href: '/de/google-meet-transcription',   label: 'Google Meet-Transkription' },
        { href: '/de/teams-meeting-transcription', label: 'Teams-Transkription' },
        { href: '/de/webinar-transcription',       label: 'Webinar-Transkription' },
        { href: '/de/interview-transcription',     label: 'Interview-Transkription' },
      ]}
    />
  )
}