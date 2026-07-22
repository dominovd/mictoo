import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/podcast-transcription',
  'fr': 'https://mictoo.com/fr/podcast-transcription',
  'de': 'https://mictoo.com/de/podcast-transcription',
  'es': 'https://mictoo.com/es/podcast-transcription',
  'ru': 'https://mictoo.com/ru/podcast-transcription',
  'it': 'https://mictoo.com/it/podcast-transcription',
  'pt': 'https://mictoo.com/pt/podcast-transcription',
  'pl': 'https://mictoo.com/pl/podcast-transcription',
  'ja': 'https://mictoo.com/ja/podcast-transcription',
  'ko': 'https://mictoo.com/ko/podcast-transcription',
  'x-default': 'https://mictoo.com/podcast-transcription',
}

export const metadata = {
  title: 'Podcast-Transkription mit Zusammenfassung und SRT | Mictoo',
  description:
    'Laden Sie eine Podcast-Episode hoch und erhalten Sie einen zeitgestempelten Text, eine KI-Zusammenfassung und Exporte für Shownotes, Untertitel und Ihr Archiv.',
  alternates: {
    canonical: 'https://mictoo.com/de/podcast-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: 'Podcast-Transkription: Kostenloser KI-Podcast-Transkriptgenerator | Mictoo',
    description: 'Laden Sie Ihre Episode hoch und erhalten Sie in Sekunden ein sauberes, zeitgestempeltes Transkript.',
    url: 'https://mictoo.com/de/podcast-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Podcast-Transkription: Kostenloser Generator',
    description: 'Laden Sie Ihre Episode hoch und erhalten Sie ein sauberes Transkript.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function DePodcastTranscriptionPage() {
  return (
    <UseCaseLayout
      locale="de"
      badge="Podcaster · Gastgeber · Kostenlos"
      h1First="Podcast-Transkription"
      h1Second="Kostenloses KI-Transkript für jede Episode"
      subtitle="Laden Sie Ihre Episode von jedem Aufnahme-Tool hoch. Erhalten Sie ein sauberes, zeitgestempeltes Transkript mit KI-Zusammenfassung, bereit für Shownotes, SEO-Zusammenfassung und YouTube-Untertitel."
      currentHref="/de/podcast-transcription"

      platforms={[
        { name: 'Riverside',  iconKey: 'waveMic',   brandBg: '#4B2AF7' },
        { name: 'Zencastr',   iconKey: 'soundwave', brandBg: '#F7B32B' },
        { name: 'SquadCast',  iconKey: 'waveMic',   brandBg: '#7E22CE' },
        { name: 'Cleanfeed',  iconKey: 'soundwave', brandBg: '#0F766E' },
        { name: 'Descript',   iconKey: 'soundwave', brandBg: '#111827' },
        { name: 'Anchor',     iconKey: 'mic',       brandBg: '#8B5CF6' },
      ]}

      howItWorksTitle="Wie die Podcast-Transkription funktioniert"
      steps={[
        {
          icon: 'folder',
          title: 'Episode exportieren',
          desc: 'Jedes Format, das Ihr DAW oder Aufnahme-Tool produziert. MP3 ist am häufigsten, aber M4A, WAV und FLAC funktionieren ebenfalls.',
        },
        {
          icon: 'upload',
          title: 'Datei hier ablegen',
          desc: 'Laden Sie Dateien bis zu 60 MB hoch, wenn Sie angemeldet sind. Längere Episoden werden automatisch in Segmente aufgeteilt und wieder zusammengefügt.',
        },
        {
          icon: 'editPen',
          title: 'Shownotes, Untertitel, Exporte',
          desc: 'Transkript, KI-Zusammenfassung, SRT für die YouTube-Version und DOCX für den Blog. Die Verarbeitungszeit hängt von der Episodenlänge und der Dateigröße ab.',
        },
      ]}

      exampleTitle="Beispiel für ein Podcast-Transkript"
      exampleFileName="episode-042.mp3"
      exampleDurationLabel="52:07"
      exampleLines={[
        { t: '0:00',  line: 'Willkommen zurück zur Show. Dies ist Episode zweiundvierzig, und heute sprechen wir über unabhängiges Podcasting im Jahr 2026.' },
        { t: '0:10',  line: 'Mein Gast hat seit acht Jahren jede Woche eine Show ohne eine Episode auszulassen. Danke, dass Sie hier sind.' },
        { t: '0:20',  line: 'Danke, dass ich hier sein darf. Es ist verrückt zu denken, dass wir damit angefangen haben, als alle sagten, dass Audio bereits gesättigt sei.' },
        { t: '0:30',  line: 'Lassen Sie uns dort anfangen. Was war anders beim Start eines Podcasts im Jahr 2018 im Vergleich zu jetzt.' },
        { t: '0:38',  line: 'Die Verbreitung war schwieriger, aber die Zuhörer waren geduldiger. Aufmerksamkeit war im Grunde genommen günstiger.' },
        { t: '0:48',  line: 'Heute sind die Werkzeuge erstaunlich. Transkription in Sekunden, KI-Shownotes, aber die Aufmerksamkeit selbst ist viel seltener.' },
        { t: '0:58',  line: 'Das ist ein guter Übergang. Wie sieht Ihr Shownotes-Workflow aus, jetzt wo Transkripte im Grunde kostenlos sind?' },
      ]}
      summaryPoints={[
        'Episode 42, Fokus auf unabhängiges Podcasting im Jahr 2026.',
        'Gast: Gastgeber einer wöchentlichen Show seit 8 Jahren.',
        'Diskussion: Veränderungen in der Verbreitung 2018 vs. 2026.',
        'Aufmerksamkeitsökonomie als neuer Engpass.',
      ]}
      actionItems={[
        'Draft Shownotes aus der Zusammenfassung',
        'Extrahieren Sie 3 Zitate für soziale Medien',
        'Veröffentlichen Sie SRT für die YouTube-Version',
      ]}

      whyTitle="Warum Mictoo für Podcast-Transkription"
      whyCards={[
        {
          icon: 'sparkles',
          title: 'KI-Zusammenfassung für Shownotes',
          desc: 'Solide erste Entwurf für Episodenbeschreibungen, Blog-Zusammenfassungen und SEO-freundliche Shownotes.',
        },
        {
          icon: 'clip',
          title: 'SRT für die YouTube-Version',
          desc: 'Zeitstempel stimmen mit dem Originalaudio überein. SRT in YouTube Studio ablegen und die Untertitel sind fertig.',
        },
        {
          icon: 'globe',
          title: 'Übersetzen für internationale Zielgruppen',
          desc: 'Ein-Klick-Übersetzung in über 50 Sprachen. Solo-Gastgeber syndizieren global ohne Übersetzungsagentur.',
        },
        {
          icon: 'gear',
          title: 'Jede Bitrate, jeder Rekorder',
          desc: '32 kbps Sprachnotizen bis 320 kbps Studio-Bounces transkribieren identisch für sauberen Sprachfluss.',
        },
      ]}

      scenariosTitle="Szenarien für Podcast-Transkription"
      scenarios={[
        { icon: 'chat',      title: 'Shownotes' },
        { icon: 'clip',      title: 'YouTube-Untertitel' },
        { icon: 'search',    title: 'SEO-Zusammenfassung' },
        { icon: 'sparkles',  title: 'Zitat-Clips' },
        { icon: 'globe',     title: 'Übersetzung' },
        { icon: 'book',      title: 'Back-Katalog' },
      ]}

      tipsTitle="Tipps für sauberere Podcast-Transkripte"
      tips={[
        'Bounce einen nur Sprach-Stamm, wenn Ihr DAW es erlaubt.',
        'Ein sprachoptimiertes 64 kbps Mono MP3 transkribiert ebenso gut.',
        'Bei Interviewepisoden Musikbetten vor der Transkription entfernen.',
        'Überprüfen Sie die Namen von Gastgeber und Gast einmal, sie erscheinen danach konsistent.',
      ]}

      guidesTitle="Verwandte Transkriptionsanleitungen"
      guides={[
        { href: '/de/transcribe-mp3-to-text',    icon: 'file',  title: 'MP3-Transkription',   desc: 'Podcast-Format-Anleitung' },
        { href: '/de/m4a-to-text',               icon: 'file',  title: 'M4A-Transkription',   desc: 'GarageBand und Apple-Exporte' },
        { href: '/de/wav-to-text',               icon: 'file',  title: 'WAV-Transkription',   desc: 'Studio-Bounces' },
        { href: '/de/timestamped-transcription', icon: 'file',  title: 'Zeitstempel-Tiefenblick', desc: 'SRT / VTT Exportmechanik' },
      ]}

      faq={[
        {
          q: 'Mit welchen Podcast-Plattformen funktioniert Mictoo?',
          a: 'Mit allen. Wir akzeptieren jede Audio- oder Videodatei, unabhängig vom Host. Häufig: Riverside, Zencastr, SquadCast, Anchor, Buzzsprout, Libsyn. Kostenlos pro Datei bis zu 60 MB, wenn Sie angemeldet sind.',
        },
        {
          q: 'Kann ich das Transkript automatisch als Shownotes erhalten?',
          a: 'Die KI-Zusammenfassung erscheint automatisch neben dem Transkript. Verwenden Sie es als ersten Entwurf Ihrer Shownotes und kürzen Sie es dann, um zu Ihrer Stimme zu passen.',
        },
        {
          q: 'Meine Episode ist über 60 MB. Was nun?',
          a: 'Melden Sie sich an, um längere Dateien automatisch zu splitten, oder reduzieren Sie die Qualität zuerst mit ffmpeg -i episode.mp3 -b:a 64k -ac 1 out.mp3. Ein 60-minütiger Podcast wird auf ~28 MB ohne Genauigkeitsverlust.',
        },
        {
          q: 'Kann ich SRT für die YouTube-Version herunterladen?',
          a: 'Ja. SRT und VTT enthalten Zeitstempel, die mit dem Originalaudio übereinstimmen. Direkt in YouTube Studio ablegen.',
        },
        {
          q: 'Transkribiert Mictoo nicht-englische Podcasts?',
          a: 'Ja. Whisper large-v3 unterstützt über 50 Sprachen mit automatischer Erkennung. Für kurze Episoden oder ungewöhnliche Akzente wählen Sie die Sprache ausdrücklich aus.',
        },
        {
          q: 'Werden Episoden auf Ihren Servern gespeichert?',
          a: 'Nein. Das Audio wird an den Transkriptionsanbieter gestreamt, einmal verarbeitet und aus dem Speicher gelöscht. Transkripte werden nur gespeichert, wenn Sie sich anmelden.',
        },
        {
          q: 'Kann ich identifizieren, wer spricht (Gastgeber vs. Gast)?',
          a: 'Nein. Das aktuelle Transkript ist kontinuierlicher Text mit Zeitstempeln und ohne automatische Sprecherbezeichnungen.',
        },
      ]}

      ctaHeadline="Verwandeln Sie jede Episode in veröffentlichbaren Text"
      ctaSubtitle="Shownotes, YouTube-Untertitel, SEO-Zusammenfassung, Übersetzung. Alles aus einem einzigen Upload."
      ctaButton="Laden Sie eine Podcast-Episode hoch"

      relatedLinks={[
        { href: '/de/interview-transcription',   label: 'Interview-Transkription' },
        { href: '/de/webinar-transcription',     label: 'Webinar-Transkription' },
        { href: '/de/transcribe-mp3-to-text',    label: 'MP3 zu Text' },
        { href: '/de/free-srt-generator',        label: 'Kostenloser SRT-Generator' },
        { href: '/de/meeting-transcription',     label: 'Meeting-Transkription' },
      ]}
    />
  )
}