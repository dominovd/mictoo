import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/sermon-transcription',
  'fr': 'https://mictoo.com/fr/sermon-transcription',
  'de': 'https://mictoo.com/de/sermon-transcription',
  'es': 'https://mictoo.com/es/sermon-transcription',
  'ru': 'https://mictoo.com/ru/sermon-transcription',
  'it': 'https://mictoo.com/it/sermon-transcription',
  'pt': 'https://mictoo.com/pt/sermon-transcription',
  'pl': 'https://mictoo.com/pl/sermon-transcription',
  'ja': 'https://mictoo.com/ja/sermon-transcription',
  'ko': 'https://mictoo.com/ko/sermon-transcription',
  'x-default': 'https://mictoo.com/sermon-transcription',
}

export const metadata = {
  title: 'Predigttranskription für Gottesdienste und Studien | Mictoo',
  description:
    'Laden Sie eine Predigt- oder Gottesdienstaufnahme hoch und erhalten Sie durchsuchbaren Text, Zeitstempel, eine KI-Zusammenfassung und Exportdateien.',
  alternates: {
    canonical: 'https://mictoo.com/de/sermon-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: 'Predigttranskription: Kostenlos | Mictoo',
    description: 'Laden Sie Ihre Gottesdienstaufnahme hoch, erhalten Sie ein sauberes Transkript.',
    url: 'https://mictoo.com/de/sermon-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Predigttranskription',
    description: 'Kostenlose Transkripte für Kirchen und Studien.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function DeSermonTranscriptionPage() {
  return (
    <UseCaseLayout
      locale="de"
      badge="Kirchen · Pastoren · Studium · Kostenlos"
      h1First="Predigttranskription"
      h1Second="Kostenloses Transkript für Gottesdienste und Studien"
      subtitle="Laden Sie eine Aufnahme des Sonntagsgottesdienstes, eine Wochennacht-Lehre oder eine Bibelstudiumssitzung hoch. Erhalten Sie ein sauberes Transkript mit Zeitstempeln für die Kirchenwebsite, Studiennotizen und Podcast-Episoden-Notizen."
      currentHref="/de/sermon-transcription"

      platforms={[
        { name: 'SermonAudio',   iconKey: 'broadcast', brandBg: '#B91C1C' },
        { name: 'ProPresenter',  iconKey: 'monitor',   brandBg: '#0EA5E9' },
        { name: 'YouTube Live',  iconKey: 'broadcast', brandBg: '#FF0000' },
        { name: 'Facebook Live', iconKey: 'broadcast', brandBg: '#1877F2' },
        { name: 'Zoom',          iconKey: 'videoCameraFill', brandBg: '#2D8CFF', href: '/de/zoom-transcription' },
        { name: 'Church stream', iconKey: 'broadcast', brandBg: '#6B21A8' },
      ]}

      howItWorksTitle="So funktioniert die Predigttranskription"
      steps={[
        {
          icon: 'folder',
          title: 'Exportieren Sie die Gottesdienstaufnahme',
          desc: 'Sonntag Livestream MP4, Sanctuary Sound-Board WAV oder den Podcast MP3, den Sie bereits veröffentlichen.',
        },
        {
          icon: 'upload',
          title: 'Laden Sie die Datei hier hoch',
          desc: 'MP3, MP4, WAV, M4A funktionieren alle. Lange Gottesdienste profitieren von der automatischen Aufteilung für angemeldete Benutzer.',
        },
        {
          icon: 'editPen',
          title: 'Transkript für die Website',
          desc: 'Sauberer Text, bereit für die Kirchenwebsite, Studiennotizen, Podcastbeschreibung und durchsuchbares Archiv.',
        },
      ]}

      exampleTitle="Beispiel für ein Predigttranskript"
      exampleFileName="sonntagsdienst-jan-14.mp3"
      exampleDurationLabel="38:56"
      exampleLines={[
        { t: '0:00',  line: 'Guten Morgen, Kirche. Bitte schlagen Sie mit mir das Evangelium nach Matthäus, Kapitel fünf, Vers drei auf.' },
        { t: '0:12',  line: 'Heute Morgen beginnen wir eine neue Serie über das, was Jesus das gesegnete Leben nannte, die Seligpreisungen.' },
        { t: '0:24',  line: 'Selig sind die Armen im Geist, denn ihnen gehört das Reich der Himmel. Das ist unser Text in dieser Woche.' },
        { t: '0:38',  line: 'Das Wort, das Jesus hier für gesegnet verwendet, bedeutet nicht glücklich in einem oberflächlichen, situativen Sinne.' },
        { t: '0:51',  line: 'Es bedeutet tief, grundlegend zufrieden aufgrund Ihrer Beziehung zu Gott, unabhängig von den Umständen.' },
        { t: '1:04',  line: 'Und arm im Geist zu sein, bedeutet nicht materielle Armut. Es ist eine Haltung der Abhängigkeit von Gott.' },
        { t: '1:18',  line: 'Es bedeutet zu wissen, dass alles, was Sie aufbauen, alles, was Sie erreichen, letztendlich auf Gnade und nicht auf Verdienst beruht.' },
      ]}
      summaryPoints={[
        'Neue Serie über die Seligpreisungen (Matthäus 5).',
        'Fokus: "Selig sind die Armen im Geist."',
        'Selig = tiefe Zufriedenheit durch die Beziehung zu Gott.',
        'Arm im Geist = Haltung der Abhängigkeit, nicht materielle Armut.',
      ]}
      actionItems={[
        'Transkript auf der Kirchenwebsite veröffentlichen',
        '60-Sekunden-Clip für soziale Medien schneiden',
        'In den wöchentlichen Studienleitfaden aufnehmen',
      ]}

      whyTitle="Warum Mictoo für die Predigttranskription"
      whyCards={[
        {
          icon: 'search',
          title: 'Durchsuchbares Predigtarchiv',
          desc: 'Veröffentlichen Sie Transkripte auf der Kirchenwebsite. Gemeindemitglieder finden Lehren nach Thema oder Vers, Monate oder Jahre später.',
        },
        {
          icon: 'sparkles',
          title: 'Studiennotizen und Kleingruppenleitfäden',
          desc: 'Die KI-Zusammenfassung ist der Ausgangspunkt für den wöchentlichen Studienleitfaden oder die Fragen zur Kleingruppendiskussion.',
        },
        {
          icon: 'clip',
          title: 'Untertitel für die Livestream-Wiederholung',
          desc: 'SRT für die YouTube- oder Facebook-Video-Version. Barrierefreiheit für hörgeschädigte Mitglieder.',
        },
        {
          icon: 'globe',
          title: 'Übersetzen für mehrsprachige Gemeinden',
          desc: 'Predigt auf Englisch, aber ein Teil der Gemeinde bevorzugt Spanisch oder Koreanisch. Übersetzung mit einem Klick.',
        },
      ]}

      scenariosTitle="Häufige Predigt-Szenarien"
      scenarios={[
        { icon: 'church',    title: 'Sonntagsgottesdienst' },
        { icon: 'book',      title: 'Bibelstudium' },
        { icon: 'chat',      title: 'Kleingruppe' },
        { icon: 'sparkles',  title: 'Andacht' },
        { icon: 'globe',     title: 'Missionen' },
        { icon: 'headset',   title: 'Podcast' },
      ]}

      tipsTitle="Tipps für Predigtaufnahmen"
      tips={[
        'Sound-Board WAV oder M4A liefert einen klareren Input als das Raum-Mikrofon.',
        'Für lange Gottesdienste über 60 MB, melden Sie sich an für die automatische Aufteilung.',
        'Für Gemeinden mit vielen biblischen Begriffen, überprüfen Sie die Schlüsselwörter.',
        'Fügen Sie den Predigtitel im Dateinamen für die Archivreihenfolge hinzu.',
      ]}

      guidesTitle="Verwandte Werkzeuge"
      guides={[
        { href: '/de/transcribe-mp3-to-text',    icon: 'file',  title: 'MP3-Format',        desc: 'Podcast-freundlicher Export' },
        { href: '/de/wav-to-text',               icon: 'file',  title: 'WAV-Format',        desc: 'Sound-Board-Aufnahme' },
        { href: '/de/lecture-transcription',     icon: 'book',  title: 'Vorlesung / Studium',   desc: 'Lehrreiche Inhalte' },
        { href: '/de/free-srt-generator',        icon: 'file',  title: 'SRT-Untertitel',      desc: 'Livestream-Wiederholung' },
      ]}

      faq={[
        {
          q: 'Kann ich eine Aufnahme eines Sonntagslivestreams transkribieren?',
          a: 'Ja. Laden Sie das MP4 von YouTube Live, Facebook Live oder Ihrem Kirchenstream-Anbieter herunter und laden Sie es hier hoch. Das Video wird serverseitig automatisch demuxed.',
        },
        {
          q: 'Behandelt Mictoo biblische Verweise und theologische Begriffe genau?',
          a: 'Whisper large-v3 behandelt gängige englische Schrift- und theologische Vokabeln gut. Bei ungewöhnlichen Eigennamen (ältere Transliterationen, spezifische Übersetzungsbegriffe) überprüfen Sie nach der Transkription.',
        },
        {
          q: 'Ist Mictoo kostenlos für Kirchen?',
          a: 'Ja. Kostenlos pro Datei bis zur Größenobergrenze. Keine kirchenspezifische Stufe oder Lizenz.',
        },
        {
          q: 'Meine Gottesdienstaufnahme ist über 60 MB. Was nun?',
          a: 'Melden Sie sich für die automatische Aufteilung an (bis zu etwa 3 Stunden). Oder downsample: ffmpeg -i service.mp3 -b:a 64k -ac 1 out.mp3. Gleiche Genauigkeit, 3-5x kleiner.',
        },
        {
          q: 'Kann ich Untertitel für die Livestream-Wiederholung erhalten?',
          a: 'Ja. Laden Sie SRT oder VTT nach der Transkription herunter. Die Zeitstempel stimmen mit der ursprünglichen Aufnahme für YouTube, Facebook oder Ihr Video-Hosting überein.',
        },
        {
          q: 'Kann ich die Predigt für das Missionsteam übersetzen?',
          a: 'Ja. Wählen Sie eine Zielsprache und klicken Sie auf Übersetzen. Nützlich für mehrsprachige Gemeinden, Missionen und Diaspora-Dienste.',
        },
        {
          q: 'Werden Aufnahmen auf Ihren Servern gespeichert?',
          a: 'Nein. Der Audio streamt zum Transkriptionsanbieter, wird einmal verarbeitet und gelöscht. Nur das Transkript bleibt auf angemeldeten Konten bestehen.',
        },
      ]}

      ctaHeadline="Machen Sie jede Predigt zu einer durchsuchbaren Ressource"
      ctaSubtitle="Transkript für die Website, Untertitel für die Wiederholung, Notizen für Studiengruppen."
      ctaButton="Eine Predigt hochladen"

      relatedLinks={[
        { href: '/de/lecture-transcription',     label: 'Vorlesungstranskription' },
        { href: '/de/podcast-transcription',     label: 'Podcast-Transkription' },
        { href: '/de/webinar-transcription',     label: 'Webinar-Transkription' },
        { href: '/de/free-srt-generator',        label: 'Kostenloser SRT-Generator' },
        { href: '/de/interview-transcription',   label: 'Interview-Transkription' },
      ]}
    />
  )
}