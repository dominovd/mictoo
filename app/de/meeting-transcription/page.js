import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/meeting-transcription',
  'fr': 'https://mictoo.com/fr/meeting-transcription',
  'de': 'https://mictoo.com/de/meeting-transcription',
  'es': 'https://mictoo.com/es/meeting-transcription',
  'ru': 'https://mictoo.com/ru/meeting-transcription',
  'it': 'https://mictoo.com/it/meeting-transcription',
  'pt': 'https://mictoo.com/pt/meeting-transcription',
  'pl': 'https://mictoo.com/pl/meeting-transcription',
  'ja': 'https://mictoo.com/ja/meeting-transcription',
  'ko': 'https://mictoo.com/ko/meeting-transcription',
  'x-default': 'https://mictoo.com/meeting-transcription',
}

export const metadata = {
  title: 'Besprechungstranskription für jede aufgezeichnete Plattform | Mictoo',
  description:
    'Laden Sie eine autorisierte Besprechungsaufnahme von Zoom, Teams, Meet, Webex, Loom oder Riverside für Text, Zusammenfassung und Exporte hoch.',
  alternates: {
    canonical: 'https://mictoo.com/de/meeting-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: 'Besprechungstranskription: Jede Plattform, jede Aufnahme | Mictoo',
    description: 'Laden Sie eine Besprechungsaufnahme hoch, erhalten Sie ein Transkript. Kostenlos.',
    url: 'https://mictoo.com/de/meeting-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Besprechungstranskription: Jede Plattform',
    description: 'Laden Sie eine Besprechungsaufnahme hoch, erhalten Sie ein Transkript.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function DeMeetingTranscriptionPage() {
  return (
    <UseCaseLayout
      locale="de"
      badge="Jede Plattform · Kostenlos · Keine Anmeldung"
      h1First="Besprechungstranskription"
      h1Second="Eine Upload-Seite für jede Plattform"
      subtitle="Laden Sie eine Aufnahme von Zoom, Teams, Google Meet, Webex, Loom oder einer Bildschirmaufnahme hoch. Erhalten Sie ein sauberes Transkript mit Zeitstempeln, KI-Zusammenfassung und Exporten."
      currentHref="/de/meeting-transcription"

      platforms={[
        { name: 'Zoom',        iconKey: 'videoCameraFill', brandBg: '#2D8CFF', href: '/de/zoom-transcription' },
        { name: 'Google Meet', iconKey: 'videoCameraFill', brandBg: '#00832D', href: '/de/google-meet-transcription' },
        { name: 'MS Teams',    iconKey: 'videoCameraFill', brandBg: '#4B53BC', href: '/de/teams-meeting-transcription' },
        { name: 'Webex',       iconKey: 'videoCameraFill', brandBg: '#0F1F35' },
        { name: 'Loom',        iconKey: 'loomPlay',        brandBg: '#625DF5' },
        { name: 'Riverside',   iconKey: 'waveMic',         brandBg: '#4B2AF7' },
      ]}

      howItWorksTitle="Wie die Besprechungstranskription funktioniert"
      steps={[
        {
          icon: 'folder',
          title: 'Finden Sie Ihre Besprechungsaufnahme',
          desc: 'Exportieren oder laden Sie die Aufnahme von jeder Plattform herunter.',
        },
        {
          icon: 'upload',
          title: 'Ziehen Sie die Datei hierher',
          desc: 'Laden Sie Ihre Datei im MP3-, MP4-, WAV- oder anderen unterstützten Formaten hoch.',
        },
        {
          icon: 'editPen',
          title: 'Transkript, Zusammenfassung, Exporte',
          desc: 'Erhalten Sie ein zeitgestempeltes Transkript, eine KI-Zusammenfassung und Exportdateien.',
        },
      ]}

      exampleTitle="Beispieltranskript & Zusammenfassung"
      exampleFileName="meeting-recording.mp4"
      exampleDurationLabel="30:15"
      exampleLines={[
        { t: '0:00',  line: 'Danke, dass Sie alle dabei sind. Lassen Sie uns schnell den Fortschritt der letzten Woche zusammenfassen, bevor wir in die heutige Agenda einsteigen.' },
        { t: '0:12',  line: 'Wir haben den Onboarding-Prozess abgeschlossen und einen Anstieg der Aktivierung um zwölf Prozent im Vergleich zur vorherigen Basislinie festgestellt.' },
        { t: '0:28',  line: 'Großartig. Als Nächstes müssen wir den Checkout-Fehler auf Mobilgeräten beheben, bevor er weitere zahlende Kunden erreicht.' },
        { t: '0:36',  line: 'Ich werde ein Ticket erstellen und es bis zum Ende des Tages dem Team zuweisen. Sollte innerhalb des Sprints gelöst werden.' },
        { t: '0:44',  line: 'Wir sollten auch die Updates zur Preisgestaltungsseite besprechen. Die aktuelle Version konvertiert nicht so, wie wir es erwartet haben.' },
        { t: '0:55',  line: 'Ich werde bis zum Ende des Tages einen Entwurf teilen, und wir können ihn morgen vor dem Standup gemeinsam überprüfen.' },
      ]}
      summaryPoints={[
        'Onboarding-Prozess abgeschlossen mit 12% Anstieg der Aktivierung.',
        'Checkout-Fehler auf Mobilgeräten muss behoben werden.',
        'Updates zur Preisgestaltungsseite sind zu besprechen.',
        'Entwurf wird bis EOD geteilt und morgen überprüft.',
      ]}
      actionItems={[
        'Ticket für den mobilen Checkout-Fehler erstellen',
        'Entwurf der Preisgestaltungsseite teilen',
        'Entwurf morgen überprüfen',
      ]}

      whyTitle="Warum ein plattformunabhängiger Upload hilfreich ist"
      whyCards={[
        {
          icon: 'globe',
          title: 'Funktioniert auf jeder Besprechungsplattform',
          desc: 'Laden Sie von Zoom, Teams, Google Meet, Webex, Loom und mehr hoch.',
        },
        {
          icon: 'target',
          title: 'Ein Überprüfungsworkflow',
          desc: 'Verwenden Sie dasselbe zeitgestempelte Layout und dieselben Exportoptionen, unabhängig davon, welche Plattform die Aufnahme erstellt hat.',
        },
        {
          icon: 'lock',
          title: 'Funktioniert von einer autorisierten Datei',
          desc: 'Mictoo verarbeitet eine Aufnahme, für die Sie bereits die Erlaubnis zur Nutzung haben; Zugriffs- und Downloadrichtlinien gehören weiterhin zur Quellplattform.',
        },
        {
          icon: 'sparkles',
          title: 'Zusammenfassung und Übersetzung inklusive',
          desc: 'Erhalten Sie KI-Zusammenfassungen und übersetzen Sie Transkripte in über 50 Sprachen.',
        },
      ]}

      scenariosTitle="Häufige Szenarien für Besprechungstranskriptionen"
      scenarios={[
        { icon: 'chat',      title: 'Kundenrückblick-E-Mails' },
        { icon: 'search',    title: 'Nutzerforschungsnotizen' },
        { icon: 'users',     title: 'Recruiter-Screenings' },
        { icon: 'briefcase', title: 'Team-Besprechungsarchive' },
        { icon: 'headset',   title: 'Support-Eskalationen' },
        { icon: 'globe',     title: 'Mehrsprachige Besprechungen' },
      ]}

      practicalTitle="Wo Sie eine Besprechungsaufnahme finden"
      practicalIntro="Der genaue Standort hängt von der Plattform und Ihrer Rolle in der Besprechung ab. Laden Sie nur Aufnahmen herunter, auf die Sie autorisierten Zugriff haben, und beachten Sie die Richtlinien zur Zustimmung der Teilnehmer und der Organisation, bevor Sie hochladen."
      practicalItems={[
        {
          title: 'Zoom-Cloud- oder lokale Aufnahme',
          desc: 'Cloud-Aufnahmen sind im Zoom-Webportal für berechtigte kostenpflichtige Konten verfügbar. Computeraufnahmen werden normalerweise im lokalen Zoom-Ordner gespeichert.',
        },
        {
          title: 'Google Meet-Aufnahme',
          desc: 'Berechtigte Meet-Aufnahmen werden im Ordner „Mein Laufwerk“ › „Meet-Aufnahmen“ des Organisators gespeichert. Die Verfügbarkeit hängt von der Edition und den Admin-Einstellungen ab.',
        },
        {
          title: 'Microsoft Teams-Aufnahme',
          desc: 'Finden Sie die Aufnahme im Besprechungs-Chat, OneDrive oder der SharePoint-Seite des Kanals. Die Berechtigungen zum Herunterladen können durch Richtlinien eingeschränkt werden.',
        },
        {
          title: 'Webex, Loom und Riverside',
          desc: 'Verwenden Sie die Plattform-Export- oder Download-Steuerung, um eine Audio- oder Videodatei zu erhalten, und bestätigen Sie, dass die Datei vor dem Hochladen korrekt abgespielt wird.',
        },
      ]}

      tipsTitle="Tipps für bessere Besprechungstranskripte"
      tips={[
        'Bevorzugen Sie Audio-Only-Exporte, wenn Sie einen kleineren Upload wünschen.',
        'Nehmen Sie in einem ruhigen Raum auf und reduzieren Sie Hintergrundgeräusche.',
        'Verwenden Sie die automatische Erkennung für mehrsprachige oder gemischte Sprachgespräche.',
        'Überprüfen Sie Namen und Terminologie nach der Transkription.',
      ]}

      guidesTitle="Wählen Sie den richtigen Plattformleitfaden"
      guides={[
        { href: '/de/zoom-transcription',          icon: 'video', title: 'Zoom-Besprechungen',    desc: 'Schritt-für-Schritt-Download-Leitfaden' },
        { href: '/de/google-meet-transcription',   icon: 'video', title: 'Google Meet',      desc: 'Schritt-für-Schritt-Download-Leitfaden' },
        { href: '/de/teams-meeting-transcription', icon: 'video', title: 'Microsoft Teams',  desc: 'Schritt-für-Schritt-Download-Leitfaden' },
        { href: '/de/meeting-transcription#tool',  icon: 'file',  title: 'Andere Plattformen',  desc: 'Alle Leitfäden und Tipps ansehen' },
      ]}

      faq={[
        {
          q: 'Kann ich eine Zoom-, Meet- oder Teams-Aufnahme transkribieren?',
          a: 'Ja. Jede Audio- oder Videodatei von jeder Besprechungsplattform funktioniert. Laden Sie einfach die Aufnahme herunter und ziehen Sie sie hierher. Wir akzeptieren MP3, MP4, WAV, M4A, WEBM, FLAC und mehr.',
        },
        {
          q: 'Ist die Besprechungstranskription kostenlos?',
          a: 'Ja. Dateien bis zu 25 MB anonym, 60 MB bei Anmeldung. Längere Besprechungen können automatisch für angemeldete Benutzer aufgeteilt werden. Keine Kreditkarte erforderlich.',
        },
        {
          q: 'Identifiziert Mictoo verschiedene Sprecher?',
          a: 'Nein. Das aktuelle Transkript ist fortlaufender Text mit Zeitstempeln pro Zeile und ohne automatische „Sprecher 1 / Sprecher 2“-Bezeichnungen.',
        },
        {
          q: 'Werden Besprechungsaufnahmen gespeichert?',
          a: 'Nein. Die Datei wird an den Transkriptionsanbieter gestreamt, einmal verarbeitet und aus dem Speicher gelöscht. Das Transkript wird nur gespeichert, wenn Sie sich anmelden und es zu Ihrer Historie hinzufügen.',
        },
        {
          q: 'Welche Exportformate sind verfügbar?',
          a: 'TXT (reiner Text), SRT und VTT (Untertitel mit Zeitstempeln, die mit der Aufnahme ausgerichtet sind), und DOCX (Word-Dokument). Angemeldete Benutzer erhalten auch PDF und JSON.',
        },
        {
          q: 'Kann ich das Transkript übersetzen?',
          a: 'Ja. Wählen Sie nach der Transkription eine Zielsprache aus und klicken Sie auf Übersetzen. Nützlich, um Rückblick-E-Mails an Teilnehmer in ihrer bevorzugten Sprache zu senden oder um mehrsprachige Besprechungen in einer einzigen Arbeitssprache zu archivieren.',
        },
      ]}

      ctaHeadline="Verwandeln Sie Ihre nächste Besprechung in klare Notizen"
      ctaSubtitle="Laden Sie eine Aufnahme von jeder Plattform hoch und erhalten Sie in Sekundenschnelle ein Transkript, eine Zusammenfassung und Exporte."
      ctaButton="Eine Besprechungsaufnahme hochladen"

      relatedLinks={[
        { href: '/de/interview-transcription',  label: 'Interviewtranskription' },
        { href: '/de/podcast-transcription',    label: 'Podcasttranskription' },
        { href: '/de/lecture-transcription',    label: 'Vorlesungstranskription' },
        { href: '/de/business-transcription',   label: 'Business-Transkription' },
        { href: '/de/voice-memo-to-text',       label: 'Sprachnotiz in Text' },
      ]}
    />
  )
}