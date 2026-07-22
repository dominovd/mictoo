import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/free-srt-generator',
  'fr': 'https://mictoo.com/fr/free-srt-generator',
  'de': 'https://mictoo.com/de/free-srt-generator',
  'es': 'https://mictoo.com/es/free-srt-generator',
  'ru': 'https://mictoo.com/ru/free-srt-generator',
  'it': 'https://mictoo.com/it/free-srt-generator',
  'pt': 'https://mictoo.com/pt/free-srt-generator',
  'pl': 'https://mictoo.com/pl/free-srt-generator',
  'ja': 'https://mictoo.com/ja/free-srt-generator',
  'ko': 'https://mictoo.com/ko/free-srt-generator',
  'x-default': 'https://mictoo.com/free-srt-generator',
}

export const metadata = {
  title: 'Kostenloser SRT-Generator: Erstellen Sie SRT-Untertiteldateien online aus Audio oder Video | Mictoo',
  description:
    'Erstellen Sie saubere SRT-Untertiteldateien aus beliebigem Audio oder Video. Whisper-Qualität Zeitstempel, bereit für YouTube, Premiere, Final Cut, DaVinci Resolve, CapCut. Kostenlos, keine Anmeldung erforderlich.',
  alternates: {
    canonical: 'https://mictoo.com/de/free-srt-generator',
    languages: LANGS,
  },
  openGraph: {
    title: 'Kostenloser SRT-Generator | Mictoo',
    description: 'Erstellen Sie SRT-Untertiteldateien aus Audio oder Video. Bereit für YouTube, Premiere, Final Cut.',
    url: 'https://mictoo.com/de/free-srt-generator',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kostenloser SRT-Generator',
    description: 'Whisper-Qualität SRT-Untertitel aus Audio oder Video.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function DeFreeSrtGeneratorPage() {
  return (
    <ConverterPageLayout
      locale="de"
      mode="upload" currentHref="/de/free-srt-generator"
      badge="SRT · Audio oder Video · Kostenlos"
      h1First="Kostenloser SRT-Generator"
      h1Second="Whisper-Qualität Untertitel aus beliebigem Audio oder Video"
      subtitle="Laden Sie Audio oder Video hoch und erhalten Sie eine SRT-Untertiteldatei, die bereit für YouTube, Premiere, Final Cut, DaVinci Resolve oder CapCut ist. Keine Anmeldung, keine Gebühr pro Minute."
      stepsTitle="So funktioniert die SRT-Generierung"
      steps={[
        { icon: 'upload',   title: 'Audio oder Video hochladen', desc: 'MP3, MP4, WAV, M4A, WEBM, FLAC und mehr. Bis zu 25 MB anonym, 180 MB angemeldet.' },
        { icon: 'waveform', title: 'Whisper transkribiert', desc: 'Whisper large-v3 erzeugt zeitstempel pro Segment, die mit dem ursprünglichen Audio ausgerichtet sind.' },
        { icon: 'download', title: 'SRT herunterladen',        desc: 'SRT- und VTT-Exporte sind enthalten. In Ihren Video-Editor oder YouTube-Upload einfügen.' },
      ]}
      whyTitle="Warum Mictoo für die SRT-Generierung verwenden?"
      whyCards={[
        { icon: 'target',   title: 'Genauigkeit mehrsprachiger Untertitel', desc: 'Whisper large-v3 fügt Interpunktion hinzu und verarbeitet viele Sprachen, Akzente und Aufnahmetypen.' },
        { icon: 'captions', title: 'SRT + VTT enthalten',                desc: 'Beide Untertitelformate werden automatisch generiert. VTT für Web-Player, SRT für Editoren.' },
        { icon: 'lock',     title: 'Dateien werden nach',               desc: 'Hochgeladenes Audio wird nach der Transkription gelöscht; Transkripte bleiben nur bei angemeldeten Konten bestehen.' },
        { icon: 'shield',   title: 'Kein Wasserzeichen oder Tag',       desc: 'Saubere SRT ohne markierte Einleitung oder "Hergestellt mit X" Tag.' },
      ]}
      scenariosTitle="Wann die SRT-Generierung nützlich ist"
      scenarios={[
        { icon: 'video',      title: 'YouTube-Upload-Untertitel' },
        { icon: 'editPen',    title: 'Premiere / DaVinci-Import' },
        { icon: 'headphones', title: 'Podcast-Video-Version' },
        { icon: 'mail',       title: 'Kundenprüfungs-Kopie' },
        { icon: 'archive',    title: 'Barrierefreiheitsarchiv' },
        { icon: 'target',     title: 'Untertitel in Fremdsprachen' },
      ]}
      tipsTitle="Tipps für sauberere Untertitel"
      tips={[
        'Für Dateien über 25 MB melden Sie sich an, um automatische Split-Uploads bis zu 180 MB zu erhalten.',
        'Setzen Sie die Sprache ausdrücklich für nicht-englische oder technische Inhalte.',
        'Überprüfen Sie Namen und ungewöhnliche Begriffe im Editor-Modus vor dem Export.',
        'Übersetzen Sie das Transkript zuerst, und exportieren Sie dann SRT für Untertitel in Fremdsprachen.',
      ]}
      processTitle="Was während der Generierung passiert"
      processSteps={['Audio / Video', 'Whisper-Transkription', 'SRT + VTT-Export']}
      faq={[
        { q: 'Ist der SRT-Generator kostenlos?', a: 'Ja. Bis zu 25 MB anonym oder 180 MB bei Anmeldung. Kein Wasserzeichen auf der SRT und keine Gebühr pro Minute.' },
        { q: 'Welche Untertitelformate erhalte ich?', a: 'SRT und VTT sind beide enthalten. TXT (reiner Text) und DOCX sind ebenfalls verfügbar. Angemeldete Benutzer erhalten zusätzlich PDF und JSON.' },
        { q: 'Wie genau sind die Zeitstempel?', a: 'Whisper large-v3 bietet zeitstempel pro Segment, die mit dem ursprünglichen Audio ausgerichtet sind. Genau genug für YouTube-Untertitel und die meisten Video-Editing-Anwendungsfälle.' },
        { q: 'Identifizieren Sie Sprecher (Diarisation)?', a: 'Noch nicht. Kontinuierliche Untertitel mit Zeitstempeln, aber keine Sprecherbezeichnungen. Diarisierung ist auf der Pro-Roadmap.' },
        { q: 'Transkribiert Mictoo nicht-englisches Audio?', a: 'Ja. Whisper large-v3 unterstützt über 50 Sprachen mit automatischer Erkennung. Setzen Sie die Sprache ausdrücklich für sauberere Ergebnisse.' },
        { q: 'Werden Aufnahmen auf Ihren Servern gespeichert?', a: 'Nein. Audio wird an den Transkriptionsanbieter gestreamt, einmal verarbeitet und gelöscht. Transkripte bleiben nur bei angemeldeten Konten bestehen.' },
      ]}
      ctaHeadline="Generieren Sie SRT-Untertitel aus jeder Aufnahme"
      ctaSubtitle="YouTube, Premiere, Final Cut, DaVinci, CapCut. Whisper-Qualität Zeitstempel."
      ctaButton="Audio oder Video hochladen"
      moreTools={[
        { href: '/de/timestamped-transcription', label: 'Timestamped Transcript' },
        { href: '/de/youtube-to-text',           label: 'YouTube zu Text' },
        { href: '/de/transcribe-video-to-text',  label: 'Video zu Text' },
        { href: '/de/transcribe-audio-to-text',  label: 'Audio zu Text' },
      ]}
    />
  )
}