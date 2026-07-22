import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/google-meet-transcription',
  'fr': 'https://mictoo.com/fr/google-meet-transcription',
  'de': 'https://mictoo.com/de/google-meet-transcription',
  'es': 'https://mictoo.com/es/google-meet-transcription',
  'ru': 'https://mictoo.com/ru/google-meet-transcription',
  'it': 'https://mictoo.com/it/google-meet-transcription',
  'pt': 'https://mictoo.com/pt/google-meet-transcription',
  'pl': 'https://mictoo.com/pl/google-meet-transcription',
  'ja': 'https://mictoo.com/ja/google-meet-transcription',
  'ko': 'https://mictoo.com/ko/google-meet-transcription',
  'x-default': 'https://mictoo.com/google-meet-transcription',
}

export const metadata = {
  title: 'Google Meet Aufzeichnungstranskription in Text | Mictoo',
  description:
    'Laden Sie eine autorisierte Google Meet-Aufzeichnung von Drive oder einer lokalen Bildschirmaufnahme hoch und erhalten Sie ein Transkript, eine KI-Zusammenfassung und Exporte.',
  alternates: {
    canonical: 'https://mictoo.com/de/google-meet-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: 'Google Meet Transkription: Workspace oder kostenloses Konto | Mictoo',
    description: 'Aufzeichnung von Drive oder Bildschirmaufnahme aus dem kostenlosen Meet. Beides funktioniert.',
    url: 'https://mictoo.com/de/google-meet-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Google Meet Transkription',
    description: 'Jede Kontostufe, eine Upload-Seite.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function DeGoogleMeetTranscriptionPage() {
  return (
    <UseCaseLayout
      locale="de"
      badge="Google Meet · Drive oder lokale Aufnahme · Kostenlos"
      h1First="Google Meet Transkription"
      h1Second="Drive-Aufzeichnungen und lokale Aufnahmen in Text"
      subtitle="Laden Sie eine Google Meet-Aufzeichnung von Drive oder einer lokalen Aufnahme hoch, die Sie autorisiert sind zu erstellen. Die Verfügbarkeit der Aufzeichnung hängt von der Workspace-Edition des Hosts, den Berechtigungen und den Administrator-Einstellungen ab."
      currentHref="/de/google-meet-transcription"

      platforms={[
        { name: 'Meet MP4',    iconKey: 'videoCameraFill', brandBg: '#00832D' },
        { name: 'QuickTime',   iconKey: 'videoCameraFill', brandBg: '#0F172A' },
        { name: 'OBS',         iconKey: 'videoCameraFill', brandBg: '#302E31' },
        { name: 'Zoom',        iconKey: 'videoCameraFill', brandBg: '#2D8CFF', href: '/de/zoom-transcription' },
        { name: 'MS Teams',    iconKey: 'videoCameraFill', brandBg: '#4B53BC', href: '/de/teams-meeting-transcription' },
        { name: 'Meeting hub', iconKey: 'videoCameraFill', brandBg: '#0F1F35', href: '/de/meeting-transcription' },
      ]}

      howItWorksTitle="Wie die Google Meet Transkription funktioniert"
      steps={[
        {
          icon: 'folder',
          title: 'Holen Sie sich die Aufzeichnung',
          desc: 'Berechtigte Workspace-Aufzeichnung: Drive › Mein Drive › Meet-Aufzeichnungen. Andernfalls verwenden Sie eine autorisierte lokale Aufnahme, die den Teilnehmerzustimmungsregeln folgt.',
        },
        {
          icon: 'upload',
          title: 'Datei hier ablegen',
          desc: 'MP4 oder M4A funktionieren beide. Bei großen MP4s zuerst Audio mit ffmpeg extrahieren oder sich für die automatische Aufteilung anmelden.',
        },
        {
          icon: 'editPen',
          title: 'Transkript, Zusammenfassung, Exporte',
          desc: 'Erhalten Sie ein zeitgestempeltes Transkript, eine KI-Zusammenfassung und TXT/SRT/VTT/DOCX-Exporte. Die Verarbeitungszeit hängt von der Dauer und der Dateigröße ab.',
        },
      ]}

      exampleTitle="Beispiel für ein Google Meet-Transkript"
      exampleFileName="meet-recording.mp4"
      exampleDurationLabel="27:45"
      exampleLines={[
        { t: '0:00',  line: 'Hey Team, danke fürs Dabeisein. Schnelle Abstimmung zum Q3-Startplan, bevor ich nächste Woche ins Offsite gehe.' },
        { t: '0:10',  line: 'Das Marketing hat den Text für die Landingpage finalisiert. Die Technik ist auf Kurs für den Feature-Freeze am Freitag.' },
        { t: '0:22',  line: 'Support-Dokumente sind das Risiko. Wir liegen etwa drei Tage hinter dem Zeitplan und müssen vor dem Start aufholen.' },
        { t: '0:33',  line: 'Ich kann Anna von den Onboarding-Dokumenten abziehen, um diese Woche zu helfen. Das sollte die Lücke schließen.' },
        { t: '0:44',  line: 'Großartig. Zweites Thema, die Änderungen auf der Preis-Seite, die wir besprochen haben. Hat jemand Bedenken, bevor wir sie veröffentlichen?' },
        { t: '0:56',  line: 'Das Einzige, was ich anmerken würde, ist die Darstellung der Enterprise-Stufe. Fühlt sich für den Preis etwas dünn an.' },
        { t: '1:08',  line: 'Guter Punkt. Lassen Sie mich diesen Abschnitt diese Woche noch einmal durchsehen und am Freitag eine überarbeitete Version teilen.' },
      ]}
      summaryPoints={[
        'Q3-Start läuft gut, Feature-Freeze am Freitag.',
        'Support-Dokumente liegen 3 Tage zurück (Risiko).',
        'Anna wurde umgeschichtet, um die Dokumentenlücke zu schließen.',
        'Darstellung der Enterprise-Stufe muss überarbeitet werden.',
      ]}
      actionItems={[
        'Anna diese Woche den Support-Dokumenten zuweisen',
        'Darstellung der Enterprise-Stufe bis Freitag überarbeiten',
        'Feature-Freeze im Standup am Freitag bestätigen',
      ]}

      whyTitle="Warum Mictoo für Google Meet Transkription"
      whyCards={[
        {
          icon: 'lock',
          title: 'Funktioniert mit einer Mediendatei',
          desc: 'Laden Sie eine Drive-Aufzeichnung oder eine autorisierte lokale Aufnahme hoch, ohne Mictoo mit Ihrem Google-Konto zu verbinden.',
        },
        {
          icon: 'target',
          title: 'Zeitgestempelter Text zur Überprüfung',
          desc: 'Überprüfen Sie Namen und technische Begriffe im Vergleich zur Aufzeichnung und exportieren Sie dann das korrigierte Transkript im benötigten Format.',
        },
        {
          icon: 'sparkles',
          title: 'KI-Zusammenfassung immer enthalten',
          desc: 'Die KI-Zusammenfassung des Workspace-Transkripts ist eine separate kostenpflichtige Funktion. Unsere ist in jedem Transkript enthalten.',
        },
        {
          icon: 'globe',
          title: 'In über 50 Sprachen übersetzen',
          desc: 'Übergreifende Meeting-Zusammenfassung ohne Übersetzungsanbieter.',
        },
      ]}

      scenariosTitle="Häufige Meet-Szenarien"
      scenarios={[
        { icon: 'chat',      title: 'Standup / Sync' },
        { icon: 'briefcase', title: 'Kundenüberprüfung' },
        { icon: 'search',    title: 'Nutzerinterview' },
        { icon: 'users',     title: 'All-Hands' },
        { icon: 'headset',   title: 'Support-Anruf' },
        { icon: 'globe',     title: 'Mehrsprachig' },
      ]}

      tipsTitle="Tipps für Google Meet-Aufzeichnungen"
      tips={[
        'Workspace Meet-Aufzeichnungen werden in Drive › Meet-Aufzeichnungen gespeichert.',
        'Kostenlose Stufe: QuickTime (Mac) oder OBS (Win/Linux) funktionieren gut.',
        'Große MP4? Audio extrahieren: ffmpeg -i meet.mp4 -vn -ac 1 -ar 16000 audio.m4a.',
        'Melden Sie sich an, um lange Meetings automatisch aufzuteilen.',
      ]}

      guidesTitle="Andere Meeting-Plattformen"
      guides={[
        { href: '/de/zoom-transcription',          icon: 'video', title: 'Zoom',           desc: 'Cloud + Lokal + M4A' },
        { href: '/de/teams-meeting-transcription', icon: 'video', title: 'MS Teams',       desc: 'OneDrive + SharePoint-Pfade' },
        { href: '/de/meeting-transcription',       icon: 'video', title: 'Meeting hub',    desc: 'Jede Plattform, ein Upload' },
        { href: '/de/webinar-transcription',       icon: 'monitor', title: 'Webinare',     desc: 'ON24, Demio, StreamYard' },
      ]}

      faq={[
        {
          q: 'Brauche ich Google Workspace, um einen Meet-Anruf aufzunehmen?',
          a: 'Die Verfügbarkeit der Google-Aufzeichnung hängt von der Edition des Hostkontos, der Rolle im Meeting, den Administrator-Einstellungen und den Berechtigungen ab. Berechtigte Aufzeichnungen werden in Drive gespeichert. Wenn Sie stattdessen eine lokale Aufnahme machen, holen Sie sich die erforderliche Zustimmung der Teilnehmer und befolgen Sie die geltenden Richtlinien.',
        },
        {
          q: 'Wo werden Workspace Meet-Aufzeichnungen gespeichert?',
          a: 'Im Drive des Meeting-Organisators: Mein Drive › Meet-Aufzeichnungen. Die MP4 erscheint normalerweise innerhalb weniger Minuten nach dem Ende des Meetings. Eine E-Mail-Benachrichtigung wird gesendet, wenn sie bereit ist.',
        },
        {
          q: 'Sollte ich das Meet-Transkript verwenden oder die Aufzeichnung hochladen?',
          a: 'Verwenden Sie das Meet-Transkript, wenn es verfügbar ist und Ihren Anforderungen entspricht. Das Hochladen der Mediendatei ist nützlich, wenn Sie Mictoo-Exporte, Übersetzungen oder ein zusätzliches Transkript zur Überprüfung wünschen. Die Genauigkeit variiert mit dem Audio.',
        },
        {
          q: 'Meine Meet-Aufzeichnung ist über 60 MB. Was jetzt?',
          a: 'Extrahieren Sie nur das Audio mit ffmpeg -i meet.mp4 -vn -ac 1 -ar 16000 audio.m4a. Oder melden Sie sich an, um lange Dateien bis zu etwa 3 Stunden automatisch aufzuteilen.',
        },
        {
          q: 'Kann ich eine KI-Zusammenfassung des Meet-Anrufs erhalten?',
          a: 'Ja. Die KI-Zusammenfassung erscheint automatisch neben dem Transkript. Solide erste Entwurf für die Zusammenfassungs-E-Mail oder das Follow-up-Dokument.',
        },
        {
          q: 'Identifiziert Mictoo, wer im Meet spricht?',
          a: 'Nein. Das aktuelle Transkript ist fortlaufender Text mit zeitgestempelten Zeilen und ohne automatische Sprecherbezeichnungen.',
        },
        {
          q: 'Werden Meet-Aufzeichnungen auf Ihren Servern gespeichert?',
          a: 'Nein. Die Audioübertragung erfolgt an den Transkriptionsanbieter, wird einmal verarbeitet und dann gelöscht. Nur das Transkript bleibt auf angemeldeten Konten bestehen.',
        },
      ]}

      ctaHeadline="Verwandeln Sie Meet-Anrufe in klaren Text"
      ctaSubtitle="Laden Sie eine autorisierte Drive-Aufzeichnung oder lokale Aufnahme für Text, Zusammenfassung und Exporte hoch."
      ctaButton="Meet-Aufzeichnung hochladen"

      relatedLinks={[
        { href: '/de/meeting-transcription',       label: 'Meeting-Transkription' },
        { href: '/de/zoom-transcription',          label: 'Zoom-Transkription' },
        { href: '/de/teams-meeting-transcription', label: 'Teams-Transkription' },
        { href: '/de/webinar-transcription',       label: 'Webinar-Transkription' },
        { href: '/de/business-transcription',      label: 'Business-Transkription' },
      ]}
    />
  )
}