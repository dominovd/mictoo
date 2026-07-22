import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/flac-to-mp3',
  'fr': 'https://mictoo.com/fr/flac-to-mp3',
  'de': 'https://mictoo.com/de/flac-to-mp3',
  'es': 'https://mictoo.com/es/flac-to-mp3',
  'ru': 'https://mictoo.com/ru/flac-to-mp3',
  'it': 'https://mictoo.com/it/flac-to-mp3',
  'pt': 'https://mictoo.com/pt/flac-to-mp3',
  'pl': 'https://mictoo.com/pl/flac-to-mp3',
  'ja': 'https://mictoo.com/ja/flac-to-mp3',
  'ko': 'https://mictoo.com/ko/flac-to-mp3',
  'x-default': 'https://mictoo.com/flac-to-mp3',
}

export const metadata = {
  title: 'FLAC zu MP3, kostenloser Online-Konverter | Mictoo',
  description:
    'Konvertieren Sie FLAC in MP3 kostenlos online. Reduzieren Sie verlustfreies FLAC auf 128 kbps MP3 in Sekunden. Keine Anmeldung, kein Wasserzeichen. Bis zu 25 MB.',
  alternates: { canonical: 'https://mictoo.com/de/flac-to-mp3', languages: LANGS },
  openGraph: {
    title: 'FLAC zu MP3, kostenloser Online-Konverter | Mictoo',
    description: 'Reduzieren Sie verlustfreies FLAC auf 128 kbps MP3. Keine Anmeldung.',
    url: 'https://mictoo.com/de/flac-to-mp3',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FLAC zu MP3, kostenloser Online-Konverter',
    description: 'Reduzieren Sie verlustfreies FLAC auf tragbares MP3.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function DeFlacToMp3Page() {
  return (
    <ConverterPageLayout
      locale="de"
      mode="converter" from="flac" to="mp3" currentHref="/de/flac-to-mp3"
      badge="FLAC → MP3 · Kostenlos · Keine Anmeldung"
      h1First="FLAC zu MP3"
      h1Second="Kostenloser Online-Konverter"
      subtitle="Laden Sie eine verlustfreie FLAC-Datei (von einem CD-Rip, Tidal-Download oder hochauflösenden Quelle) hoch und erhalten Sie in Sekunden ein tragbares 128 kbps MP3."
      outputFormat="MP3" outputQuality="128 kbps" outputAudio="Stereo"
      stepsTitle="So funktioniert die FLAC zu MP3-Konvertierung"
      steps={[
        { icon: 'upload',   title: 'Laden Sie die FLAC hoch',       desc: 'Jede FLAC (native oder FLAC-in-OGG). Bis zu 25 MB anonym.' },
        { icon: 'waveform', title: 'Wir dekodieren und kodieren', desc: 'ffmpeg dekodiert das verlustfreie FLAC und kodiert es neu zu 128 kbps Stereo MP3.' },
        { icon: 'download', title: 'Laden Sie die MP3 herunter',    desc: 'Erhalten Sie Ihre 5-8x kleinere MP3, bereit für jeden Player.' },
      ]}
      previewInputName="album-track.flac"
      previewInputSize="42 MB · 00:05:12 · 16-Bit / 44,1 kHz"
      previewOutputName="album-track.mp3"
      previewOutputSize="00:05:12 · 128 kbps · 4,8 MB"
      whyTitle="Warum Mictoo für FLAC zu MP3 verwenden?"
      whyCards={[
        { icon: 'target',    title: 'Hält das verlustfreie Master', desc: 'Ihre FLAC-Datei wird niemals verändert. Wir erstellen nur eine Kopie.' },
        { icon: 'fileAudio', title: 'Kleinere Hörkopie',    desc: 'Eine 128 kbps MP3 ist oft mehrere Male kleiner als FLAC. Die Konvertierung ist verlustbehaftet, also behalten Sie das FLAC als Ihr Master.' },
        { icon: 'lock',      title: 'Dateien nachher gelöscht',       desc: 'Hochgeladene FLAC wird nach der Konvertierung gelöscht; die MP3 wird innerhalb einer Stunde entfernt.' },
        { icon: 'shield',    title: 'Kein Wasserzeichen oder Tag',       desc: 'Nur der Audio, neu kodiert. Kein Intro-Schnitt, keine markierten Metadaten.' },
      ]}
      scenariosTitle="Wann FLAC zu MP3 nützlich ist"
      scenarios={[
        { icon: 'headphones', title: 'CD-Rip für das Handy' },
        { icon: 'mail',       title: 'Eine kleinere Datei per E-Mail' },
        { icon: 'archive',    title: 'Tragbare Musiksammlung' },
        { icon: 'editPen',    title: 'DAW-Import' },
        { icon: 'waveform',   title: 'Podcast-Hörkopie' },
        { icon: 'video',      title: 'Video-Soundtrack' },
      ]}
      tipsTitle="Tipps für eine saubere FLAC zu MP3"
      tips={[
        'Behalten Sie das FLAC als die verlustfreie Archivkopie.',
        '128 kbps ist für die meisten Hörsituationen transparent.',
        'Für Titel über 25 MB, kürzen oder teilen Sie die Quelle vor dem Hochladen.',
        'Vorbis-Metadaten-Tags (Titel/Künstler) werden nicht in die MP3 übertragen.',
      ]}
      processTitle="Was während der Konvertierung passiert"
      processSteps={['FLAC-Container', 'Verlustfreies Dekodieren', 'MP3-Kodierung']}
      compareTitle="FLAC vs MP3"
      compareRows={[
        { fmt: 'FLAC', contains: 'Nein', size: 'Groß (~5-8 MB/min)', best: 'Archivierung, Hi-Fi-Wiedergabe' },
        { fmt: 'MP3',  contains: 'Nein', size: 'Klein (~1 MB/min)',   best: 'Teilen, Handys, überall' },
      ]}
      faq={[
        { q: 'Ist der FLAC zu MP3-Konverter kostenlos?', a: 'Ja. Dateien bis zu 25 MB können ohne Konto konvertiert werden, und die Ausgabe hat kein Wasserzeichen.' },
        { q: 'Verliere ich Qualität, wenn ich FLAC in MP3 konvertiere?', a: 'Technisch gesehen ja (MP3 ist verlustbehaftet), aber bei 128 kbps ist der Verlust für typisches Hören nicht hörbar. Behalten Sie das FLAC als Archivkopie.' },
        { q: 'Werden FLAC-in-OGG-Dateien unterstützt?', a: 'Ja. Sowohl native FLAC (magic bytes fLaC) als auch FLAC innerhalb von OGG-Containern funktionieren.' },
        { q: 'Werden Dateien gespeichert?', a: 'Nein. Hochgeladene FLAC wird nach der Konvertierung gelöscht; die MP3 wird innerhalb einer Stunde entfernt.' },
        { q: 'Meine FLAC ist über 25 MB. Was nun?', a: 'Kürzen oder teilen Sie die Quelle oder exportieren Sie eine niedrigere Auflösung Hörkopie, bevor Sie hochladen.' },
      ]}
      ctaHeadline="Konvertieren Sie jetzt Ihre FLAC in MP3"
      ctaSubtitle="Laden Sie Ihre FLAC hoch und erhalten Sie in Sekunden ein tragbares MP3. Keine Anmeldung. Kein Wasserzeichen."
      ctaButton="Wählen Sie eine FLAC-Datei"
      moreTools={[
        { href: '/de/wav-to-mp3',  label: 'WAV zu MP3' },
        { href: '/de/mp4-to-mp3',  label: 'MP4 zu MP3' },
        { href: '/de/webm-to-mp3', label: 'WEBM zu MP3' },
        { href: '/de/flac-to-text', label: 'FLAC zu Text' },
      ]}
    />
  )
}