import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/teams-meeting-transcription',
  'fr': 'https://mictoo.com/fr/teams-meeting-transcription',
  'de': 'https://mictoo.com/de/teams-meeting-transcription',
  'es': 'https://mictoo.com/es/teams-meeting-transcription',
  'ru': 'https://mictoo.com/ru/teams-meeting-transcription',
  'it': 'https://mictoo.com/it/teams-meeting-transcription',
  'pt': 'https://mictoo.com/pt/teams-meeting-transcription',
  'pl': 'https://mictoo.com/pl/teams-meeting-transcription',
  'ja': 'https://mictoo.com/ja/teams-meeting-transcription',
  'ko': 'https://mictoo.com/ko/teams-meeting-transcription',
  'x-default': 'https://mictoo.com/teams-meeting-transcription',
}

export const metadata = {
  title: 'Transkription von Teams-Meetings aus MP4-Aufnahmen | Mictoo',
  description:
    'Laden Sie ein Microsoft Teams MP4 von OneDrive oder SharePoint hoch und erhalten Sie ein zeitgestempeltes Transkript, eine KI-Zusammenfassung und Exportdateien.',
  alternates: {
    canonical: 'https://mictoo.com/de/teams-meeting-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: 'Transkription von Teams-Meetings aus MP4 | Mictoo',
    description: 'Laden Sie eine Teams-Aufnahme von OneDrive oder SharePoint hoch und erhalten Sie Text, Zusammenfassung und Exporte.',
    url: 'https://mictoo.com/de/teams-meeting-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transkription von Teams-Meetings',
    description: 'Laden Sie ein MP4 von OneDrive oder SharePoint hoch und erhalten Sie ein Transkript.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function DeTeamsMeetingTranscriptionPage() {
  return (
    <UseCaseLayout
      locale="de"
      badge="Teams · OneDrive / SharePoint · M365 · Kostenlos"
      h1First="Transkription von Teams-Meetings"
      h1Second="Von OneDrive oder SharePoint MP4 zu Text"
      subtitle="Laden Sie die Teams-Aufnahme herunter, auf die Sie zugreifen dürfen, und laden Sie dann das MP4 für ein zeitgestempeltes Transkript, eine KI-Zusammenfassung und Exporte hoch. Die Verfügbarkeit der Aufnahme hängt von Ihrer Microsoft 365-Lizenz und den Richtlinien Ihrer Organisation ab."
      currentHref="/de/teams-meeting-transcription"

      platforms={[
        { name: 'OneDrive',    iconKey: 'videoCameraFill', brandBg: '#0364B8' },
        { name: 'SharePoint',  iconKey: 'videoCameraFill', brandBg: '#036C70' },
        { name: 'Channel MP4', iconKey: 'videoCameraFill', brandBg: '#4B53BC' },
        { name: 'Zoom',        iconKey: 'videoCameraFill', brandBg: '#2D8CFF', href: '/de/zoom-transcription' },
        { name: 'Google Meet', iconKey: 'videoCameraFill', brandBg: '#00832D', href: '/de/google-meet-transcription' },
        { name: 'Meeting hub', iconKey: 'videoCameraFill', brandBg: '#0F1F35', href: '/de/meeting-transcription' },
      ]}

      howItWorksTitle="So funktioniert die Transkription von Teams-Meetings"
      steps={[
        {
          icon: 'folder',
          title: 'Finden Sie die Aufnahme',
          desc: 'Private Besprechung: OneDrive › Meine Dateien › Aufnahmen. Kanalbesprechung: die SharePoint-Website des Kanals.',
        },
        {
          icon: 'upload',
          title: 'Laden Sie das MP4 hier hoch',
          desc: 'Laden Sie es von OneDrive oder SharePoint herunter und ziehen Sie es hinein. Bei über 60 MB extrahieren Sie den Audioinhalt oder melden Sie sich an, um eine automatische Aufteilung zu erhalten.',
        },
        {
          icon: 'editPen',
          title: 'Transkript, Zusammenfassung, Exporte',
          desc: 'Zeitgestempeltes Transkript, KI-Zusammenfassung, TXT/SRT/VTT/DOCX. Ein 30-minütiger Teams-Anruf endet in etwa einer Minute.',
        },
      ]}

      exampleTitle="Beispiel für ein Teams-Meeting-Transkript"
      exampleFileName="teams-channel-meeting.mp4"
      exampleDurationLabel="41:08"
      exampleLines={[
        { t: '0:00',  line: 'Richtig, willkommen zur Sprint-Überprüfung. Wir werden durchgehen, was geliefert wurde, was nicht und warum.' },
        { t: '0:11',  line: 'Das Zahlungsteam hat am Dienstag den neuen Rückerstattungsprozess geliefert. Die Akzeptanz liegt über den Erwartungen, etwa vierzig Prozent der berechtigten Tickets.' },
        { t: '0:24',  line: 'Das Suchteam hatte eine längere Indizierungspipeline als erwartet. Lieferung auf den nächsten Sprint verschoben.' },
        { t: '0:35',  line: 'Das ist in Ordnung, aber wir müssen die Verzögerung dem Kundenserviceteam mitteilen, damit sie die Erwartungen managen können.' },
        { t: '0:47',  line: 'Ich werde heute eine Nachricht im gemeinsamen Kanal mit dem überarbeiteten Zeitplan und dem Grund senden.' },
        { t: '0:58',  line: 'Drittens ist die Absturzrate der mobilen Anwendung leicht gestiegen. Immer noch innerhalb der SLA, aber es ist wert, in diesem Sprint darauf zu achten.' },
        { t: '1:09',  line: 'Das Geräte-Team ist bereits dabei. Wir sollten bis Mittwoch die Ursache finden und bis Ende des Sprints eine Lösung haben.' },
      ]}
      summaryPoints={[
        'Rückerstattungsprozess am Dienstag geliefert, 40% Akzeptanz.',
        'Suchteam hat einen Sprint verzögert (Indizierungspipeline).',
        'Absturzrate der mobilen Anwendung ist gestiegen, aber innerhalb der SLA.',
        'Ursache für den Absturz der mobilen Anwendung bis Mittwoch.',
      ]}
      actionItems={[
        'Verzögerungsnotiz an den Kundenserviceteam senden',
        'Ursache für den Absturz der mobilen Anwendung untersuchen (Mittwoch)',
        'Neues Lieferdatum des Suchteams bestätigen',
      ]}

      whyTitle="Warum Mictoo für Teams-Aufnahmen"
      whyCards={[
        {
          icon: 'folder',
          title: 'Funktioniert mit heruntergeladenen Aufnahmen',
          desc: 'Verwenden Sie ein MP4, für das Sie bereits die Erlaubnis zum Herunterladen von OneDrive oder der SharePoint-Website des Kanals haben.',
        },
        {
          icon: 'target',
          title: 'Namen und Terminologie überprüfen',
          desc: 'Das zeitgestempelte Ergebnis erleichtert das Finden und Korrigieren von Produktnamen, Akronymen und Fachbegriffen.',
        },
        {
          icon: 'sparkles',
          title: 'Zusammenfassung neben dem Transkript',
          desc: 'Erstellen Sie einen Entwurf der Zusammenfassung und halten Sie ihn neben dem vollständigen Text zur Überprüfung bereit, bevor Sie ihn teilen.',
        },
        {
          icon: 'globe',
          title: 'Übersetzen von mehrsprachigen Aufnahmen',
          desc: 'Aufnahme in einer Sprache, Zusammenfassung in einer anderen. Ein Klick, 50+ Sprachen.',
        },
      ]}

      scenariosTitle="Häufige Teams-Szenarien"
      scenarios={[
        { icon: 'chat',      title: 'Sprint-Überprüfung' },
        { icon: 'briefcase', title: 'Board-Synchronisierung' },
        { icon: 'users',     title: 'Standup' },
        { icon: 'target',    title: 'OKR-Überprüfung' },
        { icon: 'headset',   title: 'Support-Eskalation' },
        { icon: 'globe',     title: 'Internationale Anruf' },
      ]}

      tipsTitle="Tipps für Teams-Aufnahmen"
      tips={[
        'Private Besprechungen werden in OneDrive (Konto des Organisators) gespeichert.',
        'Kanalbesprechungen werden auf der SharePoint-Website des Kanals gespeichert.',
        'GCC-/Unternehmensmieter können Downloads einschränken: fragen Sie die IT.',
        'Für lange Besprechungen extrahieren Sie den Audioinhalt mit ffmpeg, um die Datei zu verkleinern.',
      ]}

      guidesTitle="Andere Besprechungsplattformen"
      guides={[
        { href: '/de/zoom-transcription',        icon: 'video', title: 'Zoom',        desc: 'Cloud + Lokal + M4A' },
        { href: '/de/google-meet-transcription', icon: 'video', title: 'Google Meet', desc: 'Workspace + kostenlos' },
        { href: '/de/meeting-transcription',     icon: 'video', title: 'Meeting hub', desc: 'Jede Plattform, ein Upload' },
        { href: '/de/business-transcription',    icon: 'briefcase', title: 'Business', desc: 'Autorisierte interne Aufnahmen' },
      ]}

      faq={[
        {
          q: 'Wo werden Teams-Aufnahmen gespeichert?',
          a: 'Private Besprechungen: im OneDrive des Organisators unter Meine Dateien › Aufnahmen. Kanalbesprechungen: auf der SharePoint-Website, die diesen Kanal unterstützt, im Kanalordner in Dokumenten.',
        },
        {
          q: 'Brauche ich Teams Premium, um eine Aufnahme hochzuladen?',
          a: 'Mictoo verarbeitet die heruntergeladene Mediendatei, anstatt sich mit Ihrem Teams-Konto zu verbinden. Ihre Fähigkeit, innerhalb von Teams aufzuzeichnen, zu transkribieren oder herunterzuladen, hängt weiterhin von Ihrer Microsoft 365-Lizenz, Ihrer Rolle in der Besprechung und den Richtlinien Ihrer Organisation ab.',
        },
        {
          q: 'Sollte ich das Teams-Transkript verwenden oder die Aufnahme hochladen?',
          a: 'Verwenden Sie das Teams-Transkript, wenn es verfügbar ist und Ihren Anforderungen entspricht. Das Hochladen der Aufnahme ist nützlich, wenn Sie Mictoo-Exporte, Übersetzungen oder ein zusätzliches Transkript zur Überprüfung wünschen. Die Genauigkeit variiert mit der Aufnahme.',
        },
        {
          q: 'Meine Teams MP4 ist über 60 MB. Was jetzt?',
          a: 'Extrahieren Sie den Audioinhalt: ffmpeg -i teams.mp4 -vn -ac 1 -ar 16000 audio.m4a. Oder melden Sie sich an, um eine automatische Aufteilung von Dateien bis zu etwa 3 Stunden zu erhalten.',
        },
        {
          q: 'Kann ich Mictoo für GCC-/Unternehmensmieter verwenden?',
          a: 'Einige Unternehmens- und Regierungs-Mieter schränken Downloads oder externe Verarbeitung ein. Befolgen Sie die Richtlinien Ihrer Organisation und überprüfen Sie dies mit der IT oder dem Eigentümer der Aufnahme, bevor Sie Mediendateien von Besprechungen herunterladen oder hochladen.',
        },
        {
          q: 'Identifiziert Mictoo die Sprecher in Teams?',
          a: 'Nein. Das aktuelle Transkript ist fortlaufender Text mit Zeitstempeln pro Zeile und ohne automatische Sprecherbezeichnungen.',
        },
        {
          q: 'Werden Teams-Aufnahmen auf Ihren Servern gespeichert?',
          a: 'Nein. Die Datei wird an den Transkriptionsanbieter gestreamt, einmal verarbeitet und dann gelöscht. Nur das Transkript bleibt auf angemeldeten Konten bestehen.',
        },
      ]}

      ctaHeadline="Verwandeln Sie Teams-Meetings in klaren Text"
      ctaSubtitle="Laden Sie eine autorisierte Aufnahme von OneDrive oder SharePoint hoch und erhalten Sie Text, Zusammenfassung und Exporte."
      ctaButton="Teams-Aufnahme hochladen"

      relatedLinks={[
        { href: '/de/meeting-transcription',       label: 'Meeting-Transkription' },
        { href: '/de/zoom-transcription',          label: 'Zoom-Transkription' },
        { href: '/de/google-meet-transcription',   label: 'Google Meet-Transkription' },
        { href: '/de/business-transcription',      label: 'Business-Transkription' },
        { href: '/de/webinar-transcription',       label: 'Webinar-Transkription' },
      ]}
    />
  )
}