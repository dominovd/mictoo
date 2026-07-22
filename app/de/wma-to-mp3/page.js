import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/wma-to-mp3',
  'fr': 'https://mictoo.com/fr/wma-to-mp3',
  'de': 'https://mictoo.com/de/wma-to-mp3',
  'es': 'https://mictoo.com/es/wma-to-mp3',
  'ru': 'https://mictoo.com/ru/wma-to-mp3',
  'it': 'https://mictoo.com/it/wma-to-mp3',
  'pt': 'https://mictoo.com/pt/wma-to-mp3',
  'pl': 'https://mictoo.com/pl/wma-to-mp3',
  'ja': 'https://mictoo.com/ja/wma-to-mp3',
  'ko': 'https://mictoo.com/ko/wma-to-mp3',
  'x-default': 'https://mictoo.com/wma-to-mp3',
}

export const metadata = {
  title: 'WMA zu MP3: Kostenloser Konverter für Legacy Windows Media Audio | Mictoo',
  description:
    'Konvertieren Sie alte WMA-Dateien in universelle MP3. Entwickelt, um Legacy Windows Media Archive, Voicemail-Exporte und gerippte CDs zu retten, die nichts Modernes öffnen möchte.',
  alternates: {
    canonical: 'https://mictoo.com/de/wma-to-mp3',
    languages: LANGS,
  },
  openGraph: {
    title: 'WMA zu MP3: Legacy Windows Media Konverter | Mictoo',
    description: 'Rettung von Legacy WMA-Archiven, Voicemail-Exporte, gerippte CDs.',
    url: 'https://mictoo.com/de/wma-to-mp3',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WMA zu MP3: Kostenloser Konverter',
    description: 'Rettung von Legacy WMA-Dateien. Kostenlos.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function DeWmaToMp3Page() {
  return (
    <ConverterPageLayout
      locale="de"
      mode="converter" from="wma" to="mp3" currentHref="/de/wma-to-mp3"
      badge="WMA → MP3 · Kostenlos · Legacy-Rettung"
      h1First="WMA zu MP3"
      h1Second="Kostenloser Legacy Windows Media Konverter"
      subtitle="Laden Sie eine alte WMA-Datei (Voicemail-Export, gerippte CD, Legacy Windows Media-Archiv) hoch und erhalten Sie eine universelle MP3, die jedes moderne Gerät oder jeden Player öffnen kann."
      outputFormat="MP3" outputQuality="128 kbps" outputAudio="Stereo"
      stepsTitle="So funktioniert die WMA zu MP3-Konvertierung"
      steps={[
        { icon: 'upload',   title: 'WMA hochladen',        desc: 'Jede Windows Media Audio-Version, bis zu 25 MB anonym.' },
        { icon: 'waveform', title: 'Wir dekodieren und kodieren', desc: 'ffmpeg liest die WMA und kodiert sie neu in 128 kbps Stereo MP3 bei 44,1 kHz.' },
        { icon: 'download', title: 'MP3 herunterladen',    desc: 'Erhalten Sie eine MP3, die mit den meisten aktuellen Playern, Handys und Audio-Editoren kompatibel ist.' },
      ]}
      previewInputName="voicemail-2011.wma"
      previewInputSize="1,2 MB · 00:02:34"
      previewOutputName="voicemail-2011.mp3"
      previewOutputSize="00:02:34 · 128 kbps · 2,4 MB"
      whyTitle="Warum Mictoo für WMA zu MP3 verwenden?"
      whyCards={[
        { icon: 'target',   title: 'Legacy-Dateien behandelt',    desc: 'Alte Windows Media Audio-Dateien, die iTunes, Apple Music und moderne Player nicht öffnen können.' },
        { icon: 'fileAudio',title: 'Breite MP3-Kompatibilität', desc: 'MP3 wird auf macOS, Linux, iPhone, Android und gängigen Musik-Playern weit unterstützt.' },
        { icon: 'lock',     title: 'Dateien nachher gelöscht',     desc: 'Hochgeladene WMA wird nach der Konvertierung gelöscht; die MP3 wird innerhalb einer Stunde entfernt.' },
        { icon: 'shield',   title: 'Kein Wasserzeichen oder Tag',     desc: 'Nur die Audiodatei, neu kodiert. Kein gebrandeter Intro, keine Metadaten eingefügt.' },
      ]}
      scenariosTitle="Wann WMA zu MP3 nützlich ist"
      scenarios={[
        { icon: 'archive',    title: 'Legacy CD-Rip' },
        { icon: 'headphones', title: 'Alter Voicemail-Export' },
        { icon: 'editPen',    title: 'Windows Movie Maker-Ausgabe' },
        { icon: 'mail',       title: 'Auf nicht-Windows-Gerät teilen' },
        { icon: 'video',      title: 'In modernen Editor importieren' },
        { icon: 'waveform',   title: 'Rettung von Tape-Archiven' },
      ]}
      tipsTitle="Tipps für eine saubere WMA zu MP3"
      tips={[
        'DRM-geschützte WMA (alte Windows Media Player-Mieten) können nicht dekodiert werden.',
        'Sehr niedrig-bitrate WMA (Voicemail) wird gleich wie die Quelle klingen.',
        'Altes WMV-Video wird hier nicht unterstützt; verwenden Sie stattdessen MP4 zu MP3.',
        'Für Aufnahmen über 25 MB, schneiden oder teilen Sie die Quelle, bevor Sie sie hochladen.',
      ]}
      processTitle="Was während der Konvertierung passiert"
      processSteps={['WMA (ASF)', 'Windows Media dekodieren', 'MP3-Kodierung']}
      compareTitle="WMA vs MP3"
      compareRows={[
        { fmt: 'WMA', contains: 'Nein', size: 'Klein', best: 'Legacy Windows-Workflows (veraltet)' },
        { fmt: 'MP3', contains: 'Nein', size: 'Klein', best: 'Universelle Kompatibilität, moderne Geräte' },
      ]}
      faq={[
        { q: 'Ist der WMA zu MP3-Konverter kostenlos?', a: 'Ja. Dateien bis zu 25 MB können ohne ein Konto konvertiert werden, und die Ausgabe hat kein Wasserzeichen.' },
        { q: 'Warum weigern sich moderne Player, WMA zu öffnen?', a: 'Apple hat WMA nie unterstützt. Einige Android-Player haben es fallen gelassen. WMA ist ein Legacy-Format von Microsoft, von dem sich Windows selbst entfernt hat.' },
        { q: 'Können Sie DRM-geschützte WMA konvertieren?', a: 'Nein. Alte Windows Media Player-Mieten verwendeten DRM, das ffmpeg nicht dekodieren kann. Wir umgehen niemals den Urheberrechtsschutz.' },
        { q: 'Werden Dateien gespeichert?', a: 'Nein. Hochgeladene WMA wird nach der Konvertierung gelöscht; die MP3 wird innerhalb einer Stunde entfernt.' },
        { q: 'Was ist mit WMA lossless?', a: 'Der Konverter kann auch WMA lossless lesen, aber die Ausgabe bleibt 128 kbps MP3 (verlustbehaftet). Für verlustfreie Ausgaben konvertieren Sie stattdessen in WAV.' },
      ]}
      ctaHeadline="Konvertieren Sie Ihre WMA jetzt in MP3"
      ctaSubtitle="Rettung von Legacy Windows Media Audio. Erhalten Sie in wenigen Sekunden eine tragbare MP3."
      ctaButton="Wählen Sie eine WMA-Datei"
      moreTools={[
        { href: '/de/mp4-to-mp3',  label: 'MP4 zu MP3' },
        { href: '/de/wav-to-mp3',  label: 'WAV zu MP3' },
        { href: '/de/flac-to-mp3', label: 'FLAC zu MP3' },
        { href: '/de/aac-to-mp3',  label: 'AAC zu MP3' },
      ]}
    />
  )
}