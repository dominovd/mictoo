import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/webm-to-mp3',
  'fr': 'https://mictoo.com/fr/webm-to-mp3',
  'de': 'https://mictoo.com/de/webm-to-mp3',
  'es': 'https://mictoo.com/es/webm-to-mp3',
  'ru': 'https://mictoo.com/ru/webm-to-mp3',
  'it': 'https://mictoo.com/it/webm-to-mp3',
  'pt': 'https://mictoo.com/pt/webm-to-mp3',
  'pl': 'https://mictoo.com/pl/webm-to-mp3',
  'ja': 'https://mictoo.com/ja/webm-to-mp3',
  'ko': 'https://mictoo.com/ko/webm-to-mp3',
  'x-default': 'https://mictoo.com/webm-to-mp3',
}

export const metadata = {
  title: 'WEBM zu MP3, kostenloser Online-Konverter | Mictoo',
  description:
    'Konvertieren Sie WEBM kostenlos online in MP3. Ziehen Sie MP3-Audio aus jeder WEBM-Video- oder Audiodatei in Sekunden. Keine Anmeldung, kein Wasserzeichen. Bis zu 25 MB.',
  alternates: { canonical: 'https://mictoo.com/de/webm-to-mp3', languages: LANGS },
  openGraph: {
    title: 'WEBM zu MP3, kostenloser Online-Konverter | Mictoo',
    description: 'Ziehen Sie MP3 aus jeder WEBM. Keine Anmeldung, kein Wasserzeichen.',
    url: 'https://mictoo.com/de/webm-to-mp3',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WEBM zu MP3, kostenloser Online-Konverter',
    description: 'Ziehen Sie MP3 aus jeder WEBM.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function DeWebmToMp3Page() {
  return (
    <ConverterPageLayout
      locale="de"
      mode="converter" from="webm" to="mp3" currentHref="/de/webm-to-mp3"
      badge="WEBM → MP3 · Kostenlos · Keine Anmeldung"
      h1First="WEBM zu MP3"
      h1Second="Kostenloser Online-Konverter"
      subtitle="Ziehen Sie eine WEBM-Datei (von Loom, OBS, Firefox-Aufzeichnung oder einem YouTube-Downloader) und erhalten Sie in Sekunden eine saubere MP3. Kein Wasserzeichen, keine E-Mail."
      outputFormat="MP3" outputQuality="128 kbps" outputAudio="Stereo"
      stepsTitle="Wie die WEBM zu MP3-Konvertierung funktioniert"
      steps={[
        { icon: 'upload',   title: 'WEBM ablegen',   desc: 'Video oder nur Audio-WEBM, beides funktioniert. Bis zu 25 MB anonym.' },
        { icon: 'waveform', title: 'Wir demuxen und kodieren', desc: 'ffmpeg entfernt den Videotrack (falls vorhanden) und kodiert den Opus- oder Vorbis-Audio in 128 kbps MP3 neu.' },
        { icon: 'download', title: 'Laden Sie die MP3 herunter', desc: 'Erhalten Sie Ihre saubere MP3 in Sekunden. Originaldateiname mit .mp3-Erweiterung.' },
      ]}
      previewInputName="loom-walkthrough.webm"
      previewInputSize="72 MB · 00:08:12"
      previewOutputName="loom-walkthrough.mp3"
      previewOutputSize="00:08:12 · 128 kbps · 7.5 MB"
      whyTitle="Warum Mictoo für WEBM zu MP3 verwenden?"
      whyCards={[
        { icon: 'target',   title: 'Verarbeitet Opus und Vorbis', desc: 'Beide WEBM-Audio-Codecs funktionieren direkt, keine manuelle Umverpackung erforderlich.' },
        { icon: 'video',    title: 'Video-in-WEBM verarbeitet',   desc: 'Wir demuxen den Videotrack serverseitig. Sie müssen das Audio nicht selbst extrahieren.' },
        { icon: 'lock',     title: 'Dateien werden nachher gelöscht',     desc: 'Die hochgeladene WEBM wird nach der Konvertierung gelöscht; die MP3 wird innerhalb einer Stunde gelöscht.' },
        { icon: 'shield',   title: 'Kein Wasserzeichen oder Tag',     desc: 'Die ausgegebene MP3 hat keinen Intro-Schnitt, keine markenbezogenen Metadaten.' },
      ]}
      scenariosTitle="Wann WEBM zu MP3 nützlich ist"
      scenarios={[
        { icon: 'video',      title: 'Loom-Durchlauf' },
        { icon: 'headphones', title: 'YouTube-Downloader-Ausgabe' },
        { icon: 'mail',       title: 'Eine kleinere Datei per E-Mail' },
        { icon: 'editPen',    title: 'Für Transkription vorbereiten' },
        { icon: 'waveform',   title: 'Browser-Aufzeichnung' },
        { icon: 'archive',    title: 'Nur Audio archivieren' },
      ]}
      tipsTitle="Tipps für eine saubere WEBM zu MP3"
      tips={[
        'Video-WEBM wird automatisch demuxed, keine Notwendigkeit, zuerst zu entfernen.',
        'Für Aufzeichnungen über 25 MB, schneiden oder teilen Sie die Quelle vor dem Hochladen.',
        'Der Standard-Audiotrack wird verwendet, wenn mehrere vorhanden sind.',
        'Für Whisper-Transkription, laden Sie die WEBM direkt zu /webm-to-text hoch.',
      ]}
      processTitle="Was während der Konvertierung passiert"
      processSteps={['WEBM-Container', 'Audio-Track-Extraktion', 'MP3-Kodierung']}
      compareTitle="WEBM vs MP3"
      compareRows={[
        { fmt: 'WEBM', contains: 'Oft ja', size: 'Mittel-groß', best: 'Web-Aufzeichnung, Browser-Video' },
        { fmt: 'MP3',  contains: 'Nein',        size: 'Klein',        best: 'Teilen, Abspielen, überall' },
      ]}
      faq={[
        { q: 'Ist der WEBM zu MP3-Konverter kostenlos?', a: 'Ja. Dateien bis zu 25 MB können ohne Konto konvertiert werden, und die Ausgabe hat kein Wasserzeichen.' },
        { q: 'Was passiert, wenn meine WEBM Video hat?', a: 'Wir demuxen den Videotrack serverseitig und kodieren nur das Audio. Sie müssen nichts vorab entfernen.' },
        { q: 'Welche WEBM-Audio-Codecs funktionieren?', a: 'Opus (modern, am häufigsten) und Vorbis (älter). Beide werden direkt unterstützt.' },
        { q: 'Werden hochgeladene Dateien gespeichert?', a: 'Nein. WEBM wird nach der Konvertierung gelöscht; die MP3 wird innerhalb einer Stunde gelöscht.' },
        { q: 'Meine WEBM ist über 25 MB. Was nun?', a: 'Schneiden Sie die Quelle vor dem Hochladen oder extrahieren Sie zuerst eine Audio-only WEBM, um die Dateigröße zu reduzieren.' },
      ]}
      ctaHeadline="Konvertieren Sie jetzt Ihre WEBM in MP3"
      ctaSubtitle="Legen Sie Ihre WEBM ab und erhalten Sie in Sekunden eine saubere MP3. Keine Anmeldung. Kein Wasserzeichen."
      ctaButton="Wählen Sie eine WEBM-Datei"
      moreTools={[
        { href: '/de/mp4-to-mp3',  label: 'MP4 zu MP3' },
        { href: '/de/wav-to-mp3',  label: 'WAV zu MP3' },
        { href: '/de/flac-to-mp3', label: 'FLAC zu MP3' },
        { href: '/de/webm-to-text', label: 'WEBM zu Text' },
      ]}
    />
  )
}