import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/business-transcription',
  'fr': 'https://mictoo.com/fr/business-transcription',
  'de': 'https://mictoo.com/de/business-transcription',
  'es': 'https://mictoo.com/es/business-transcription',
  'ru': 'https://mictoo.com/ru/business-transcription',
  'it': 'https://mictoo.com/it/business-transcription',
  'pt': 'https://mictoo.com/pt/business-transcription',
  'pl': 'https://mictoo.com/pl/business-transcription',
  'ja': 'https://mictoo.com/ja/business-transcription',
  'ko': 'https://mictoo.com/ko/business-transcription',
  'x-default': 'https://mictoo.com/business-transcription',
}

export const metadata = {
  title: 'Transkription von Geschäftstreffen und KI-Zusammenfassung | Mictoo',
  description:
    'Wandeln Sie autorisierte interne Besprechungsaufzeichnungen in zeitgestempelte Transkripte, KI-Zusammenfassungen und exportierbare Zusammenfassungsdokumente um.',
  alternates: {
    canonical: 'https://mictoo.com/de/business-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: 'Geschäftstranskription: Interne Meetings zu Text | Mictoo',
    description: 'Transkribieren Sie interne Unternehmensbesprechungen ohne IT-Setup.',
    url: 'https://mictoo.com/de/business-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Geschäftstranskription',
    description: 'Gründer 1:1s, All-Hands, Executive-Briefings.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function DeBusinessTranscriptionPage() {
  return (
    <UseCaseLayout
      locale="de"
      badge="Gründer · Führungskräfte · Kleine Teams · Kostenlos"
      h1First="Geschäftstranskription"
      h1Second="Gründer 1:1s, All-Hands, Executive-Briefings"
      subtitle="Ein praktisches Transkriptionstool für autorisierte interne Meetings. Laden Sie die Aufnahme hoch, überprüfen Sie das Transkript und die KI-Zusammenfassung, und exportieren Sie dann eine Zusammenfassung für Ihr Team."
      currentHref="/de/business-transcription"

      platforms={[
        { name: 'Zoom',        iconKey: 'videoCameraFill', brandBg: '#2D8CFF', href: '/de/zoom-transcription' },
        { name: 'MS Teams',    iconKey: 'videoCameraFill', brandBg: '#4B53BC', href: '/de/teams-meeting-transcription' },
        { name: 'Google Meet', iconKey: 'videoCameraFill', brandBg: '#00832D', href: '/de/google-meet-transcription' },
        { name: 'Webex',       iconKey: 'videoCameraFill', brandBg: '#0F1F35' },
        { name: 'BlueJeans',   iconKey: 'videoCameraFill', brandBg: '#005EB8' },
        { name: 'GoToMeeting', iconKey: 'videoCameraFill', brandBg: '#F68B1F' },
      ]}

      howItWorksTitle="So funktioniert die Geschäftstranskription"
      steps={[
        {
          icon: 'folder',
          title: 'Exportieren Sie die Aufnahme',
          desc: 'Von Zoom, Teams, Meet, Webex oder was auch immer Ihr Unternehmen verwendet. MP4 oder M4A Audio-only funktionieren beide.',
        },
        {
          icon: 'upload',
          title: 'Legen Sie die Datei hier ab',
          desc: 'Laden Sie eine Aufnahme hoch, die Ihre Organisation zur Verarbeitung zulässt. Es ist keine Softwareinstallation oder Verzeichnisintegration erforderlich.',
        },
        {
          icon: 'editPen',
          title: 'Transkript, Zusammenfassung, Aktionspunkte',
          desc: 'Zeitgestempeltes Transkript, KI-Zusammenfassung, DOCX-Export bereit für die Zusammenfassungs-E-Mail.',
        },
      ]}

      exampleTitle="Beispiel für ein Transkript eines Geschäftstreffens"
      exampleFileName="q3-strategy-session.mp4"
      exampleDurationLabel="58:42"
      exampleLines={[
        { t: '0:00',  line: 'Danke an alle, dass Sie sich Zeit genommen haben. Dies ist unser Q3-Strategie-Check-in, und wir haben etwa eine Stunde eingeplant.' },
        { t: '0:10',  line: 'Lassen Sie mich mit dem Top-Line-Update beginnen. Der Umsatz liegt acht Prozent über dem Plan, hauptsächlich durch die Expansion im mittleren Markt.' },
        { t: '0:22',  line: 'Die neue Unternehmensstrategie verläuft langsamer als wir prognostiziert haben. Zwei Deals sind von Q2 auf Q3 gerutscht.' },
        { t: '0:35',  line: 'Wir sollten besprechen, ob wir im mittleren Markt stärker investieren oder in diesem Quartal mehr auf die Unternehmensbereitschaft drängen.' },
        { t: '0:48',  line: 'Meine Meinung: Der mittlere Markt funktioniert, und wir sollten das Team nicht ablenken, indem wir noch dem Unternehmenssegment nachjagen.' },
        { t: '1:02',  line: 'Einverstanden. Lassen Sie uns ein Ziel von dreißig neuen Konten im mittleren Markt bis Ende Q3 setzen und die Unternehmensstrategie in der Planung für Q4 erneut überprüfen.' },
        { t: '1:14',  line: 'Ein weiteres Thema, bevor wir abschließen. Der Engineering-Fahrplan für dasselbe Quartal, den wir mit diesen Kundenverpflichtungen verknüpfen.' },
      ]}
      summaryPoints={[
        'Umsatz 8% über dem Plan, getrieben durch den mittleren Markt.',
        'Unternehmensstrategie rutscht (2 Deals von Q2 auf Q3 verschoben).',
        'Entscheidung: Im mittleren Markt in diesem Quartal stärker investieren.',
        'Ziel: 30 neue Konten im mittleren Markt bis Ende Q3.',
      ]}
      actionItems={[
        'Ziel von 30 Konten im mittleren Markt festlegen',
        'Unternehmensstrategie in der Planung für Q4 erneut überprüfen',
        'Engineering-Fahrplan an Kundenverpflichtungen anpassen',
      ]}

      whyTitle="Warum Mictoo für die Geschäftstranskription"
      whyCards={[
        {
          icon: 'lock',
          title: 'Keine Softwareinstallation',
          desc: 'Der Browser-Workflow erfordert keinen Desktop-Client oder Verzeichnisintegration. Ihre Unternehmensrichtlinien gelten weiterhin.',
        },
        {
          icon: 'sparkles',
          title: 'Zusammenfassung bereit für die Zusammenfassungs-E-Mail',
          desc: 'Die KI-Zusammenfassung liefert den Entwurf der Zusammenfassung in Sekunden. Kürzen Sie, was Sie bereits festgelegt haben, und behalten Sie, was eskaliert werden muss.',
        },
        {
          icon: 'shield',
          title: 'Aufnahmen werden nicht gespeichert',
          desc: 'Audio wird an den Transkriptionsanbieter gestreamt und nach der Verarbeitung gelöscht. Nur das Transkript bleibt auf angemeldeten Konten bestehen.',
        },
        {
          icon: 'globe',
          title: 'Übersetzen für internationale Teams',
          desc: 'Meeting auf Englisch, aber die Zusammenfassung muss an eine deutsche Tochtergesellschaft gehen? Ein Klick.',
        },
      ]}

      scenariosTitle="Häufige Geschäftsszenarien"
      scenarios={[
        { icon: 'briefcase', title: 'Executive-Briefing' },
        { icon: 'users',     title: 'All-Hands' },
        { icon: 'chat',      title: 'Gründer 1:1' },
        { icon: 'target',    title: 'Strategietagung' },
        { icon: 'search',    title: 'Vorstand-Update' },
        { icon: 'headset',   title: 'Kundeneskalation' },
      ]}

      tipsTitle="Tipps für interne Aufnahmen"
      tips={[
        'Bevorzugen Sie Audio-only-Exporte, wenn Ihre Plattform diese anbietet.',
        'Für Meeting-Videos über 60 MB, extrahieren Sie zuerst Audio mit ffmpeg.',
        'Verwenden Sie Auto-Detect für mehrsprachige Führungsgespräche.',
        'Speichern Sie das Transkript in der Historie, um ein durchsuchbares Archiv aufzubauen.',
      ]}

      guidesTitle="Wählen Sie den richtigen Plattformleitfaden"
      guides={[
        { href: '/de/zoom-transcription',          icon: 'video', title: 'Zoom',        desc: 'Cloud Recording, M4A Audio-only' },
        { href: '/de/teams-meeting-transcription', icon: 'video', title: 'MS Teams',    desc: 'OneDrive oder SharePoint-Pfad' },
        { href: '/de/google-meet-transcription',   icon: 'video', title: 'Google Meet', desc: 'Drive-Aufzeichnung, kostenlose Lösung' },
        { href: '/de/meeting-transcription#tool',  icon: 'file',  title: 'Andere',       desc: 'Webex, BlueJeans, GoToMeeting' },
      ]}

      faq={[
        {
          q: 'Wird die Aufnahme meines Unternehmens an Ihre Server gesendet?',
          a: 'Die Audiodaten werden an den Transkriptionsanbieter gestreamt, einmal verarbeitet und aus dem Speicher gelöscht. Wir schreiben die Audiodaten niemals auf die Festplatte. Nur das Texttranskript bleibt bestehen, und nur wenn Sie sich anmelden und es speichern.',
        },
        {
          q: 'Brauche ich eine Genehmigung, um eine Unternehmensaufnahme hochzuladen?',
          a: 'Das hängt von den Richtlinien Ihrer Organisation und den Informationen in der Aufnahme ab. Mictoo erfordert keine Softwareinstallation, aber Sie sollten alle erforderlichen Genehmigungen einholen, bevor Sie Unternehmensmedien an einen externen Transkriptionsanbieter senden.',
        },
        {
          q: 'Kann ich Mictoo für regulierte Branchen verwenden?',
          a: 'Überprüfen Sie Ihre spezifischen Compliance-Anforderungen. Wir bieten keinen unterschriebenen BAA oder SOC 2-Bericht an. Für streng regulierte Umgebungen verwenden Sie stattdessen ein vollständig selbstgehostetes Transkriptionstool.',
        },
        {
          q: 'Kann ich eine KI-Zusammenfassung für die Zusammenfassungs-E-Mail erhalten?',
          a: 'Ja. Die KI-Zusammenfassung erscheint automatisch neben dem Transkript. Solider erster Entwurf für die Follow-up-E-Mail oder Notion-Dokument.',
        },
        {
          q: 'Was ist, wenn das Meeting über 60 MB ist?',
          a: 'Melden Sie sich an, um Auto-Split zu aktivieren (bis zu etwa 3 Stunden). Oder extrahieren Sie Audio aus dem Video mit ffmpeg -i meeting.mp4 -vn -ac 1 -ar 16000 audio.m4a, reduziert die Dateigröße um das 5-15-fache.',
        },
        {
          q: 'Kann ich das Transkript für ein internationales Team übersetzen?',
          a: 'Ja. Nach der Transkription wählen Sie eine Zielsprache und klicken Sie auf Übersetzen. Nützlich für Tochtergesellschaften in anderen Sprachen.',
        },
        {
          q: 'Welche Exportformate eignen sich für eine Zusammenfassungs-E-Mail?',
          a: 'TXT zum Einfügen in den E-Mail-Text, DOCX für einen ordentlichen Anhang, PDF (angemeldet) für das Archiv. Die Zusammenfassung ist separat verfügbar.',
        },
      ]}

      ctaHeadline="Wandeln Sie interne Meetings in Zusammenfassungsdokumente um"
      ctaSubtitle="Gründer 1:1s, All-Hands und Executive-Briefings. Laden Sie autorisierte Medien für ein Transkript und eine Zusammenfassung hoch."
      ctaButton="Laden Sie ein Geschäftstreffen hoch"

      relatedLinks={[
        { href: '/de/meeting-transcription',       label: 'Meeting-Transkription' },
        { href: '/de/zoom-transcription',          label: 'Zoom-Transkription' },
        { href: '/de/teams-meeting-transcription', label: 'Teams-Transkription' },
        { href: '/de/google-meet-transcription',   label: 'Google Meet-Transkription' },
        { href: '/de/interview-transcription',     label: 'Interview-Transkription' },
      ]}
    />
  )
}