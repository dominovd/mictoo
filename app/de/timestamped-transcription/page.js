import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/timestamped-transcription',
  'fr': 'https://mictoo.com/fr/timestamped-transcription',
  'de': 'https://mictoo.com/de/timestamped-transcription',
  'es': 'https://mictoo.com/es/timestamped-transcription',
  'ru': 'https://mictoo.com/ru/timestamped-transcription',
  'it': 'https://mictoo.com/it/timestamped-transcription',
  'pt': 'https://mictoo.com/pt/timestamped-transcription',
  'pl': 'https://mictoo.com/pl/timestamped-transcription',
  'ja': 'https://mictoo.com/ja/timestamped-transcription',
  'ko': 'https://mictoo.com/ko/timestamped-transcription',
  'x-default': 'https://mictoo.com/timestamped-transcription',
}

export const metadata = {
  title: 'Zeitstempel-Transkription: Kostenloser zeitcodierter Transkript-Generator | Mictoo',
  description:
    'Kostenlose zeitstempel-Transkription mit segmentbasierten Zeitcodes für Audio oder Video. Nützlich für Journalismus, Forschung, Podcasting und Videobearbeitung.',
  alternates: {
    canonical: 'https://mictoo.com/de/timestamped-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: 'Zeitstempel-Transkription: Kostenloser zeitcodierter Transkript-Generator | Mictoo',
    description: 'Satzweise Zeitstempel für jedes Audio oder Video.',
    url: 'https://mictoo.com/de/timestamped-transcription',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zeitstempel-Transkription: Kostenlos',
    description: 'Zeitcodierte Transkripte für Journalismus, Forschung, Bearbeitung.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function DeTimestampedTranscriptionPage() {
  return (
    <ConverterPageLayout
      locale="de"
      mode="upload" currentHref="/de/timestamped-transcription"
      badge="Zeitstempel · Audio oder Video · Kostenlos"
      h1First="Zeitstempel-Transkription"
      h1Second="Zeitcodierte Transkripte für Journalismus, Forschung, Bearbeitung"
      subtitle="Laden Sie Audio oder Video hoch und erhalten Sie ein Transkript mit segmentbasierten Zeitstempeln. Klicken Sie auf einen Zeitstempel, um zu diesem Moment im Audioplayer zu springen. Kostenlos, keine Anmeldung."
      stepsTitle="So funktioniert die zeitstempel-Transkription"
      steps={[
        { icon: 'upload',   title: 'Audio oder Video hochladen',       desc: 'MP3, MP4, WAV, M4A, WEBM, FLAC und mehr. Bis zu 25 MB anonym oder 180 MB angemeldet.' },
        { icon: 'waveform', title: 'Whisper zeitstempelt Segmente', desc: 'Whisper large-v3 bietet segmentbasierte Zeitstempel, die mit dem Originalaudio ausgerichtet sind.' },
        { icon: 'download', title: 'Mit Zeitstempeln exportieren',      desc: 'TXT mit Inline-Zeitstempeln, SRT / VTT für Untertitel, DOCX zur Überprüfung.' },
      ]}
      whyTitle="Warum Mictoo für zeitstempel-Transkripte verwenden?"
      whyCards={[
        { icon: 'clock',    title: 'Klickbare Zeitstempel',   desc: 'Jeder Zeitstempel ist im Reader-Modus klickbar. Springen Sie zu jedem Moment im Audioplayer.' },
        { icon: 'target',   title: 'Whisper-Qualitätstranskription', desc: 'Whisper large-v3 fügt Interpunktion hinzu und verarbeitet viele Sprachen, Akzente und Aufnahmearten.' },
        { icon: 'captions', title: 'SRT + VTT inklusive',         desc: 'Zeitstempel werden in SRT- und VTT-Exporte für Video-Untertitel übernommen.' },
        { icon: 'lock',     title: 'Dateien nachher gelöscht',        desc: 'Hochgeladenes Audio wird nach der Transkription gelöscht; Transkripte bleiben nur bei angemeldeten Konten erhalten.' },
      ]}
      scenariosTitle="Wann sind zeitstempel-Transkripte nützlich?"
      scenarios={[
        { icon: 'editPen',    title: 'Journalismus-Zitatensuche' },
        { icon: 'target',     title: 'UX-Forschung-Zitation' },
        { icon: 'video',      title: 'Video-Bearbeitung Cue-Liste' },
        { icon: 'headphones', title: 'Podcast-Show-Notizen' },
        { icon: 'archive',    title: 'Rechtlich / Entdeckung' },
        { icon: 'waveform',   title: 'Audio-Buchmarkierung' },
      ]}
      tipsTitle="Tipps für sauberere zeitstempel-Ausgaben"
      tips={[
        'Der Reader-Modus ist am besten für die Navigation mit Klick-zu-Springen.',
        'Für SRT / VTT-Export richten sich die Zeitstempel nach der Originaldatei-Zeitleiste.',
        'Für lange Aufnahmen melden Sie sich an, um automatisch bis zu etwa 3 Stunden zu teilen.',
        'Die Suchleiste hebt Übereinstimmungen hervor und zeigt deren Zeitstempel sofort an.',
      ]}
      processTitle="Was passiert während der Transkription"
      processSteps={['Audio / Video', 'Whisper large-v3', 'Zeitstempeltext']}
      faq={[
        { q: 'Welche Granularität haben die Zeitstempel?', a: 'Pro-Segment (ungefähr pro Satz). Whisper produziert nativ segmentbasierte Zeitstempel, die mit dem Audio ausgerichtet sind.' },
        { q: 'Kann ich auf einen Zeitstempel klicken, um im Audio zu springen?', a: 'Ja. Im Reader-Modus ist jeder Zeitstempel klickbar und springt im Audioplayer zu diesem Moment.' },
        { q: 'Ist das Tool kostenlos?', a: 'Ja. Bis zu 25 MB anonym oder 180 MB, wenn angemeldet. Kein Wasserzeichen und keine Gebühr pro Minute.' },
        { q: 'Welche Exportformate werden unterstützt?', a: 'TXT (mit Inline-Zeitstempeln), SRT, VTT, DOCX. Angemeldete Benutzer erhalten auch PDF und JSON mit strukturierten Zeitstempel-Daten.' },
        { q: 'Identifizieren Sie Sprecher?', a: 'Noch nicht. Kontinuierlicher zeitstempeltext ohne Sprecherbezeichnungen. Diarisierung steht auf der Pro-Roadmap.' },
        { q: 'Werden Aufnahmen auf Ihren Servern gespeichert?', a: 'Nein. Audio wird an den Transkriptionsanbieter gestreamt, einmal verarbeitet und gelöscht. Transkripte bleiben nur bei angemeldeten Konten erhalten.' },
      ]}
      ctaHeadline="Erhalten Sie ein klickbares zeitstempel-Transkript"
      ctaSubtitle="Journalismus, UX-Forschung, Videobearbeitung, Podcast-Show-Notizen. Kostenlos pro Datei."
      ctaButton="Audio oder Video hochladen"
      moreTools={[
        { href: '/de/free-srt-generator',       label: 'SRT-Generator' },
        { href: '/de/youtube-to-text',          label: 'YouTube zu Text' },
        { href: '/de/transcribe-audio-to-text', label: 'Audio zu Text' },
        { href: '/de/transcribe-video-to-text', label: 'Video zu Text' },
      ]}
    />
  )
}