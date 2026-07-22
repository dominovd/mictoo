import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/interview-transcription',
  'fr': 'https://mictoo.com/fr/interview-transcription',
  'de': 'https://mictoo.com/de/interview-transcription',
  'es': 'https://mictoo.com/es/interview-transcription',
  'ru': 'https://mictoo.com/ru/interview-transcription',
  'it': 'https://mictoo.com/it/interview-transcription',
  'pt': 'https://mictoo.com/pt/interview-transcription',
  'pl': 'https://mictoo.com/pl/interview-transcription',
  'ja': 'https://mictoo.com/ja/interview-transcription',
  'ko': 'https://mictoo.com/ko/interview-transcription',
  'x-default': 'https://mictoo.com/interview-transcription',
}

export const metadata = {
  title: 'Interview-Transkription für Audio und Video | Mictoo',
  description:
    'Laden Sie eine Interviewaufnahme hoch und erhalten Sie einen zeitgestempelten Text, eine KI-Zusammenfassung und Exporte für Berichterstattung, Forschung oder Überprüfung.',
  alternates: {
    canonical: 'https://mictoo.com/de/interview-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: 'Kostenloses Interview-Transkriptionstool | Mictoo',
    description: 'Kostenlose Interviewtranskription mit KI. Laden Sie Audio oder Video hoch und erhalten Sie in wenigen Minuten ein sauberes Transkript.',
    url: 'https://mictoo.com/de/interview-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kostenlose Interview-Transkription',
    description: 'Laden Sie Audio oder Video hoch und erhalten Sie in wenigen Minuten ein sauberes Transkript.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function DeInterviewTranscriptionPage() {
  return (
    <UseCaseLayout
      locale="de"
      badge="Journalisten · Forscher · UX · Kostenlos"
      h1First="Interview-Transkription"
      h1Second="Kostenloses Tool für Journalisten, Forscher und UX-Teams"
      subtitle="Laden Sie ein 1:1- oder Panel-Interview von jedem Recorder oder Meeting-App hoch. Erhalten Sie ein sauberes, zeitgestempeltes Transkript mit KI-Zusammenfassung und Exporte, die bereit für den Artikel, das Papier oder das Forschungsrepo sind."
      currentHref="/de/interview-transcription"

      platforms={[
        { name: 'Zoom',        iconKey: 'videoCameraFill', brandBg: '#2D8CFF', href: '/de/zoom-transcription' },
        { name: 'Google Meet', iconKey: 'videoCameraFill', brandBg: '#00832D', href: '/de/google-meet-transcription' },
        { name: 'MS Teams',    iconKey: 'videoCameraFill', brandBg: '#4B53BC', href: '/de/teams-meeting-transcription' },
        { name: 'Riverside',   iconKey: 'waveMic',         brandBg: '#4B2AF7' },
        { name: 'Voice Memo',  iconKey: 'mic',             brandBg: '#F97316', href: '/de/voice-memo-to-text' },
        { name: 'Telefonanruf',  iconKey: 'phone',           brandBg: '#0EA5A4' },
      ]}

      howItWorksTitle="Wie die Interview-Transkription funktioniert"
      steps={[
        {
          icon: 'folder',
          title: 'Exportieren Sie Ihr Interview',
          desc: 'Jede Aufnahme ist geeignet. Sprachmemo, Zoom-Cloud-Aufnahme, Riverside-Audiospur, Telefonanruf-Export.',
        },
        {
          icon: 'upload',
          title: 'Legen Sie die Datei hier ab',
          desc: 'Laden Sie MP3, MP4, M4A, WAV, MOV oder jedes gängige Audio- und Videoformat bis zu 60 MB hoch.',
        },
        {
          icon: 'editPen',
          title: 'Transkript, Zitate, Exporte',
          desc: 'Zeitgestempeltes Transkript, KI-Zusammenfassung, TXT / SRT / VTT / DOCX-Exporte. Bereit für den Artikel oder das Forschungspapier.',
        },
      ]}

      exampleTitle="Beispiel eines Interviewtranskripts"
      exampleFileName="researcher-interview.m4a"
      exampleDurationLabel="42:18"
      exampleLines={[
        { t: '0:00',  line: 'Danke, dass Sie sich die Zeit genommen haben. Könnten Sie zunächst Ihre Rolle beschreiben und wie lange Sie schon in dieser sind.' },
        { t: '0:08',  line: 'Sicher. Ich leite das Analytik-Team in einem mittelgroßen Fintech und bin seit etwas über zwei Jahren in dieser Rolle.' },
        { t: '0:20',  line: 'Davor war ich in einer größeren Bank tätig, hauptsächlich im Bereich Kundenbindung und Lebenszeitwertmodellierung.' },
        { t: '0:32',  line: 'Der Wechsel von einer großen Bank zu einem Fintech war hauptsächlich eine Frage des Tempos und der Freiheit, neue Dinge auszuprobieren.' },
        { t: '0:44',  line: 'Und die Werkzeuge haben sich stark verbessert. Was früher eine Woche in der alten Infrastruktur dauerte, dauert jetzt einen Nachmittag.' },
        { t: '0:56',  line: 'Könnten Sie mir ein Beispiel für diese Art von Veränderung geben? Etwas Konkretes, das Sie vorher nicht versucht hätten.' },
        { t: '1:04',  line: 'Das Offensichtliche sind Echtzeit-Kohortenexperimente. Wir bringen eine Idee am Morgen heraus und sehen am Abend bedeutende Daten.' },
      ]}
      summaryPoints={[
        'Leiter der Analytik in einem Fintech, über 2 Jahre in der Rolle.',
        'Vorherige Rolle in einer großen Bank mit Fokus auf Bindungsmodellierung.',
        'Fintech-Wechsel getrieben von Tempo und Experimentierfreiheit.',
        'Echtzeit-Kohortenexperimente möglich mit modernen Werkzeugen.',
      ]}
      actionItems={[
        'Folgen Sie dem Vergleich der Bindungsmodellierung nach',
        'Fragen Sie nach einem Beispiel für ein Echtzeit-Kohortenexperiment',
        'Erhalten Sie eine Einführung zu einem Kontakt des vorherigen Arbeitgebers',
      ]}

      whyTitle="Warum Mictoo für die Interview-Transkription"
      whyCards={[
        {
          icon: 'target',
          title: 'Überprüfen Sie Namen und Eigennamen',
          desc: 'Verwenden Sie Zeitstempel, um Namen, Städte, Organisationen und Fachbegriffe mit der ursprünglichen Interviewaufnahme abzugleichen.',
        },
        {
          icon: 'sparkles',
          title: 'KI-Zusammenfassung und Zitatextraktion',
          desc: 'Die KI-Zusammenfassung ist ein solider erster Entwurf für die Zitatliste, das Forschungsgedächtnis oder die Einleitung des Artikels.',
        },
        {
          icon: 'lock',
          title: 'Klares Verarbeitungsmodell',
          desc: 'Die Aufnahme wird zur Verarbeitung an einen Transkriptionsanbieter gesendet und nach Abschluss des Auftrags nicht von Mictoo gespeichert.',
        },
        {
          icon: 'globe',
          title: 'Übersetzen für mehrsprachige Arbeit',
          desc: 'Interview in Spanisch, Deutsch oder Japanisch durchgeführt. Übersetzen Sie in Ihre Arbeitssprache mit einem Klick.',
        },
      ]}

      scenariosTitle="Häufige Interview-Szenarien"
      scenarios={[
        { icon: 'chat',      title: 'Journalismus' },
        { icon: 'search',    title: 'UX-Forschung' },
        { icon: 'users',     title: 'Rekrutierung' },
        { icon: 'book',      title: 'Mündliche Geschichte' },
        { icon: 'briefcase', title: 'Rechtliche Aussage' },
        { icon: 'globe',     title: 'Mehrsprachig' },
      ]}

      tipsTitle="Tipps für sauberere Interviewtranskripte"
      tips={[
        'Nehmen Sie mit einem Ansteck- oder Handmikrofon in der Nähe des Subjekts auf.',
        'Bitten Sie das Subjekt, zwischen langen Antworten kurz zu pausieren.',
        'Setzen Sie die Sprache explizit für nicht-englische oder stark akzentuierte Sprache fest.',
        'Überprüfen Sie Namen und ungewöhnliche Begriffe nach der Transkription.',
      ]}

      guidesTitle="Wählen Sie den richtigen Recorder-Leitfaden"
      guides={[
        { href: '/de/zoom-transcription',        icon: 'video', title: 'Zoom-Interview',    desc: 'Cloud Recording MP4 oder M4A' },
        { href: '/de/google-meet-transcription', icon: 'video', title: 'Meet-Interview',    desc: 'Drive-Aufnahme-Download' },
        { href: '/de/voice-memo-to-text',        icon: 'mic',   title: 'iPhone Sprachmemo', desc: 'Jede M4A Sprachaufnahme' },
        { href: '/de/podcast-transcription',     icon: 'headset', title: 'Podcast-Stil',   desc: 'Riverside, Zencastr, Cleanfeed' },
      ]}

      faq={[
        {
          q: 'Welche Dateiformate akzeptiert Mictoo für Interviews?',
          a: 'MP3, MP4, M4A, WAV, MOV, WEBM, FLAC, OGG, AAC und die meisten anderen gängigen Audio- und Videoformate. Videodateien werden serverseitig automatisch demuxed.',
        },
        {
          q: 'Identifiziert Mictoo, wer spricht?',
          a: 'Nein. Das aktuelle Transkript ist fortlaufender Text mit Zeitstempeln pro Zeile und ohne automatische "Interviewer / Subjekt"-Bezeichnungen.',
        },
        {
          q: 'Ist die Interview-Transkription kostenlos?',
          a: 'Ja. Kostenlos pro Datei bis zu 25 MB anonym, 60 MB angemeldet. Längere Interviews können automatisch für angemeldete Benutzer aufgeteilt werden.',
        },
        {
          q: 'Kann ich Namen vor der Veröffentlichung des Transkripts schwärzen?',
          a: 'Ja. Wechseln Sie nach der Transkription in den Editor-Modus, um jedes Wort oder jede Zeile zu bearbeiten. Speichern Sie die bearbeitete Version und exportieren Sie sie.',
        },
        {
          q: 'Werden Aufnahmen auf Ihren Servern gespeichert?',
          a: 'Nein. Audio wird an den Transkriptionsanbieter gestreamt, einmal verarbeitet und dann verworfen. Transkripte werden nur gespeichert, wenn Sie sich anmelden.',
        },
        {
          q: 'Kann ich das Interviewtranskript übersetzen?',
          a: 'Ja. Wählen Sie eine Zielsprache und klicken Sie auf Übersetzen. Nützlich für mehrsprachige Feldforschung oder mehrsprachige Berichterstattung.',
        },
        {
          q: 'Welche Exportformate sind verfügbar?',
          a: 'TXT, SRT, VTT, DOCX. Angemeldete Benutzer erhalten auch PDF und JSON. Zeitstempel in SRT und VTT stimmen mit der ursprünglichen Aufnahme überein.',
        },
      ]}

      ctaHeadline="Verwandeln Sie Interviews in veröffentlichbaren Text"
      ctaSubtitle="Laden Sie Ihre Aufnahme hoch und erhalten Sie ein Transkript, eine Zusammenfassung und Exporte, die bereit für den Artikel oder das Forschungsrepo sind."
      ctaButton="Ein Interview hochladen"

      relatedLinks={[
        { href: '/de/meeting-transcription',      label: 'Meeting-Transkription' },
        { href: '/de/podcast-transcription',      label: 'Podcast-Transkription' },
        { href: '/de/voice-memo-to-text',         label: 'Sprachmemo in Text' },
        { href: '/de/business-transcription',     label: 'Business-Transkription' },
        { href: '/de/lecture-transcription',      label: 'Vorlesungs-Transkription' },
      ]}
    />
  )
}