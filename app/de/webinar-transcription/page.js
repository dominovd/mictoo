import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/webinar-transcription',
  'fr': 'https://mictoo.com/fr/webinar-transcription',
  'de': 'https://mictoo.com/de/webinar-transcription',
  'es': 'https://mictoo.com/es/webinar-transcription',
  'ru': 'https://mictoo.com/ru/webinar-transcription',
  'it': 'https://mictoo.com/it/webinar-transcription',
  'pt': 'https://mictoo.com/pt/webinar-transcription',
  'pl': 'https://mictoo.com/pl/webinar-transcription',
  'ja': 'https://mictoo.com/ja/webinar-transcription',
  'ko': 'https://mictoo.com/ko/webinar-transcription',
  'x-default': 'https://mictoo.com/webinar-transcription',
}

export const metadata = {
  title: 'Webinar-Transkription mit Zusammenfassung und Untertiteln | Mictoo',
  description:
    'Laden Sie eine Webinar-Aufzeichnung hoch und erhalten Sie zeitgestempelten Text, eine KI-Zusammenfassung und SRT/VTT-Untertitel für die Wiederholung.',
  alternates: {
    canonical: 'https://mictoo.com/de/webinar-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: 'Webinar-Transkription: Kostenlos | Mictoo',
    description: 'Laden Sie Ihre Webinar-Aufzeichnung hoch und erhalten Sie ein sauberes Transkript.',
    url: 'https://mictoo.com/de/webinar-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Webinar-Transkription',
    description: 'Kostenloses Transkript für jede Webinar-Plattform.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function DeWebinarTranscriptionPage() {
  return (
    <UseCaseLayout
      locale="de"
      badge="Webinare · Langform · Kostenlos"
      h1First="Webinar-Transkription"
      h1Second="Kostenloses Transkript für jede Webinar-Aufzeichnung"
      subtitle="Laden Sie von Zoom Webinars, StreamYard, Demio, ON24, GoToWebinar oder Restream hoch. Erhalten Sie ein vollständiges Transkript, eine KI-Zusammenfassung und Untertitel, die bereit für die On-Demand-Wiederholungsseite sind."
      currentHref="/de/webinar-transcription"

      platforms={[
        { name: 'Zoom Webinar', iconKey: 'broadcast',       brandBg: '#2D8CFF', href: '/de/zoom-transcription' },
        { name: 'StreamYard',   iconKey: 'broadcast',       brandBg: '#6B21A8' },
        { name: 'Restream',     iconKey: 'broadcast',       brandBg: '#EC1E62' },
        { name: 'ON24',         iconKey: 'videoCameraFill', brandBg: '#3B82F6' },
        { name: 'Demio',        iconKey: 'videoCameraFill', brandBg: '#F97316' },
        { name: 'Livestorm',    iconKey: 'videoCameraFill', brandBg: '#DA1F5C' },
      ]}

      howItWorksTitle="So funktioniert die Webinar-Transkription"
      steps={[
        {
          icon: 'folder',
          title: 'Exportieren Sie die Webinar-Aufzeichnung',
          desc: 'Die meisten Plattformen bieten einen MP4-Download nach der Veranstaltung an. Einige bieten auch nur Audio in M4A an.',
        },
        {
          icon: 'upload',
          title: 'Legen Sie die Datei hier ab',
          desc: 'Lange Webinare (über 60 Minuten) profitieren von der automatischen Aufteilung bei Anmeldung. Kostenlos bis zu 25 MB anonym, 60 MB angemeldet.',
        },
        {
          icon: 'editPen',
          title: 'Transkript, Zusammenfassung, Untertitel',
          desc: 'Zeitgestempeltes Transkript für die Wiederholungsseite, KI-Zusammenfassung als Blog-Rückblick, SRT für Untertitel im On-Demand-Video.',
        },
      ]}

      exampleTitle="Beispiel für ein Webinar-Transkript"
      exampleFileName="product-launch-webinar.mp4"
      exampleDurationLabel="1:04:22"
      exampleLines={[
        { t: '0:00',  line: 'Willkommen alle zusammen und danke, dass Sie dabei sind. Mein Name ist Sam und ich leite das Produktmarketing im Unternehmen.' },
        { t: '0:12',  line: 'Heute starten wir offiziell die Version fünf der Plattform, und ich möchte Sie durch die Neuheiten führen.' },
        { t: '0:25',  line: 'Drei Hauptänderungen: überarbeitete Berichterstattung, native Integrationen mit den zehn besten CRMs und ein neues Preismodell.' },
        { t: '0:40',  line: 'Lassen Sie mich mit der Berichterstattung beginnen, denn das ist die Änderung, nach der die meisten von Ihnen seit zwei Jahren fragen.' },
        { t: '0:52',  line: 'Die alten Berichte waren langsam, sie brachen bei großen Datensätzen und waren schwer anzupassen. Alle drei Probleme sind behoben.' },
        { t: '1:07',  line: 'Hier ist eine Live-Demo des neuen Berichtsbauers. Während ich durchklicke, achten Sie darauf, wie schnell die Vorschauen aktualisiert werden.' },
        { t: '1:22',  line: 'Jedes Feld ist per Drag-and-Drop, Filter sind stapelbar, und Sie können jeden Bericht als gemeinsame Vorlage speichern.' },
      ]}
      summaryPoints={[
        'Version 5 mit 3 Hauptänderungen.',
        'Überarbeitete Berichterstattung (verbessert Geschwindigkeit, Datensatzgröße, Anpassung).',
        'Native Integrationen mit den 10 besten CRMs.',
        'Neues Preismodell.',
      ]}
      actionItems={[
        'Entwurf des Blog-Rückblicks aus dem Transkript',
        'Demo-Clip für soziale Medien schneiden',
        'Untertitelte Wiederholung auf On-Demand veröffentlichen',
      ]}

      whyTitle="Warum Mictoo für Webinar-Transkription"
      whyCards={[
        {
          icon: 'clip',
          title: 'SRT-Untertitel für die Wiederholung',
          desc: 'Zeitstempel stimmen mit dem Originalvideo überein. Fügen Sie SRT in Ihren On-Demand-Wiederholungsplayer oder YouTube-Upload ein.',
        },
        {
          icon: 'sparkles',
          title: 'KI-Zusammenfassung für den Blog-Rückblick',
          desc: 'Verwandelt ein 60-minütiges Webinar in eine 200-Wörter-Zusammenfassung. Solider erster Entwurf für die Nachfass-E-Mail oder den Blogbeitrag.',
        },
        {
          icon: 'search',
          title: 'Durchsuchbares Transkript auf der Landingpage',
          desc: 'Veröffentlichen Sie das Transkript auf der On-Demand-Landingpage. Teilnehmer können überfliegen, SEO-Rankings verbessern, niemand muss 60 Minuten ansehen.',
        },
        {
          icon: 'globe',
          title: 'Übersetzen für internationale Teilnehmer',
          desc: 'Ein-Klick-Übersetzung in über 50 Sprachen für Nachfass-E-Mails und nicht-englische Wiederholungsseiten.',
        },
      ]}

      scenariosTitle="Häufige Webinar-Szenarien"
      scenarios={[
        { icon: 'broadcast', title: 'Produkteinführung' },
        { icon: 'book',      title: 'Schulung / Akademie' },
        { icon: 'briefcase', title: 'Vertriebshilfe' },
        { icon: 'target',    title: 'Kundenschulung' },
        { icon: 'users',     title: 'Analystenbriefing' },
        { icon: 'globe',     title: 'Mehrsprachige Veranstaltung' },
      ]}

      tipsTitle="Tipps für Webinar-Aufzeichnungen"
      tips={[
        'Bevorzugen Sie den Export nur für Audio, wenn Ihre Plattform dies anbietet.',
        'Für Webinare über 60 Minuten, melden Sie sich an für die automatische Aufteilung bis zu 3 Stunden.',
        'Fügen Sie den Namen des Moderators in die Datei ein, damit der Transkriptkopf den Kontext behält.',
        'Ziehen Sie wichtige Zitate aus dem Transkript für soziale Clips.',
      ]}

      guidesTitle="Verwandte Tools"
      guides={[
        { href: '/de/zoom-transcription',        icon: 'video', title: 'Zoom Webinar',      desc: 'Cloud Recording MP4 / M4A' },
        { href: '/de/free-srt-generator',        icon: 'file',  title: 'SRT-Generator',     desc: 'Untertitel für On-Demand-Videos' },
        { href: '/de/podcast-transcription',     icon: 'headset', title: 'Podcast',         desc: 'Webinar-Audio wiederverwenden' },
        { href: '/de/timestamped-transcription', icon: 'file',  title: 'Zeitgestempelt',       desc: 'Leserfreundlicher Export' },
      ]}

      faq={[
        {
          q: 'Mit welchen Webinar-Plattformen funktioniert Mictoo?',
          a: 'Mit allen. Wir akzeptieren jede Audio- oder Videodatei, unabhängig von der Plattform. Zoom Webinars, StreamYard, Demio, Livestorm, ON24, GoToWebinar, Restream, Riverside Studio und mehr.',
        },
        {
          q: 'Meine Webinar-Aufzeichnung ist über 60 MB. Was nun?',
          a: 'Melden Sie sich für die automatische Aufteilung an (bis zu etwa 3 Stunden). Oder exportieren Sie nur Audio von der Plattform oder extrahieren Sie Audio: ffmpeg -i webinar.mp4 -vn -ac 1 -ar 16000 audio.m4a.',
        },
        {
          q: 'Kann ich das Transkript auf der On-Demand-Wiederholungsseite veröffentlichen?',
          a: 'Ja. Kopieren Sie das Transkript in den HTML-Code Ihrer On-Demand-Landingpage. Fügt durchsuchbaren Inhalt hinzu, verbessert SEO, gibt Teilnehmern, die nicht zuschauen können, eine Möglichkeit zum Überfliegen.',
        },
        {
          q: 'Kann ich Untertitel für das aufgezeichnete Webinar-Video erhalten?',
          a: 'Ja. Laden Sie SRT oder VTT nach der Transkription herunter. Beide funktionieren mit YouTube, Vimeo, Wistia, Descript und jedem modernen Video-Player.',
        },
        {
          q: 'Identifiziert Mictoo Präsentatoren vs. Q&A-Sprecher?',
          a: 'Nein. Das aktuelle Transkript ist fortlaufender Text mit zeitgestempelten Zeilen und ohne automatische Sprechernamen.',
        },
        {
          q: 'Kann ich das Webinar-Transkript übersetzen?',
          a: 'Ja. Wählen Sie eine Zielsprache und klicken Sie auf Übersetzen. Nützlich für internationale Teilnehmer oder nicht-englische Wiederholungsseiten.',
        },
        {
          q: 'Werden Webinar-Aufzeichnungen auf Ihren Servern gespeichert?',
          a: 'Nein. Die Datei wird an den Transkriptionsanbieter gestreamt, einmal verarbeitet und dann gelöscht. Nur das Transkript bleibt auf angemeldeten Konten bestehen.',
        },
      ]}

      ctaHeadline="Verwandeln Sie Ihr Webinar in ein wiederverwendbares Asset"
      ctaSubtitle="Vollständiges Transkript, SRT-Untertitel, KI-Zusammenfassung und durchsuchbarer Landing-Page-Text."
      ctaButton="Laden Sie eine Webinar-Aufzeichnung hoch"

      relatedLinks={[
        { href: '/de/meeting-transcription',   label: 'Meeting-Transkription' },
        { href: '/de/zoom-transcription',      label: 'Zoom-Transkription' },
        { href: '/de/podcast-transcription',   label: 'Podcast-Transkription' },
        { href: '/de/lecture-transcription',   label: 'Vorlesungs-Transkription' },
        { href: '/de/free-srt-generator',      label: 'Kostenloser SRT-Generator' },
      ]}
    />
  )
}