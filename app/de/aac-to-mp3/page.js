import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/aac-to-mp3',
  'fr': 'https://mictoo.com/fr/aac-to-mp3',
  'de': 'https://mictoo.com/de/aac-to-mp3',
  'es': 'https://mictoo.com/es/aac-to-mp3',
  'ru': 'https://mictoo.com/ru/aac-to-mp3',
  'it': 'https://mictoo.com/it/aac-to-mp3',
  'pt': 'https://mictoo.com/pt/aac-to-mp3',
  'pl': 'https://mictoo.com/pl/aac-to-mp3',
  'ja': 'https://mictoo.com/ja/aac-to-mp3',
  'ko': 'https://mictoo.com/ko/aac-to-mp3',
  'x-default': 'https://mictoo.com/aac-to-mp3',
}

export const metadata = {
  title: 'AAC zu MP3: Kostenloser Online-Konverter | Mictoo',
  description:
    'Konvertieren Sie AAC kostenlos in MP3, in Sekunden, mit einer klaren Erklärung, wann die Konvertierung tatsächlich hilft und wann sie nur Qualität kostet.',
  alternates: {
    canonical: 'https://mictoo.com/de/aac-to-mp3',
    languages: LANGS,
  },
  openGraph: {
    title: 'AAC zu MP3: Kostenloser Online-Konverter | Mictoo',
    description: 'Konvertieren Sie AAC kostenlos in MP3, in Sekunden.',
    url: 'https://mictoo.com/de/aac-to-mp3',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AAC zu MP3: Kostenloser Online-Konverter',
    description: 'Konvertieren Sie AAC in MP3 in Sekunden. Kostenlos, keine Anmeldung.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function DeAacToMp3Page() {
  return (
    <ConverterPageLayout
      locale="de"
      mode="converter" from="aac" to="mp3" currentHref="/de/aac-to-mp3"
      badge="AAC → MP3 · Kostenlos · Keine Anmeldung"
      h1First="AAC zu MP3"
      h1Second="Kostenloser Online-Konverter"
      subtitle="Laden Sie eine rohe .aac-Datei (ADTS-Stream, Broadcast-Dump oder extrahierter iPhone-Audio) hoch und erhalten Sie in Sekunden ein tragbares MP3."
      outputFormat="MP3" outputQuality="128 kbps" outputAudio="Stereo"
      stepsTitle="Wie die AAC zu MP3-Konvertierung funktioniert"
      steps={[
        { icon: 'upload',   title: 'Laden Sie die AAC hoch',        desc: 'Rohe ADTS- oder ADIF-Formatierung, bis zu 25 MB anonym.' },
        { icon: 'waveform', title: 'Wir decodieren und kodieren', desc: 'ffmpeg liest den AAC-Datenstrom und kodiert ihn neu in 128 kbps Stereo MP3.' },
        { icon: 'download', title: 'Laden Sie das MP3 herunter',    desc: 'Erhalten Sie Ihr sauberes MP3 in Sekunden, bereit für jeden Player.' },
      ]}
      previewInputName="broadcast-clip.aac"
      previewInputSize="8.4 MB · 00:07:22 · 128 kbps AAC"
      previewOutputName="broadcast-clip.mp3"
      previewOutputSize="00:07:22 · 128 kbps MP3 · 6.8 MB"
      whyTitle="Warum Mictoo für AAC zu MP3 verwenden?"
      whyCards={[
        { icon: 'target',   title: 'Rohe AAC verarbeitet',        desc: 'Sowohl ADTS- als auch ADIF-Formatierungen funktionieren direkt, keine manuelle Neupackung.' },
        { icon: 'fileAudio',title: 'MP3 spielt überall',   desc: 'Ältere Geräte und Legacy-Podcast-Hosts bevorzugen manchmal MP3 gegenüber AAC.' },
        { icon: 'lock',     title: 'Dateien nachher gelöscht',    desc: 'Hochgeladene AAC wird nach der Konvertierung gelöscht; das MP3 wird innerhalb einer Stunde gelöscht.' },
        { icon: 'shield',   title: 'Kein Wasserzeichen oder Tag',    desc: 'Nur der Audio, neu kodiert. Kein markenbezogenes Intro oder Metadaten.' },
      ]}
      scenariosTitle="Wann AAC zu MP3 nützlich ist"
      scenarios={[
        { icon: 'video',      title: 'HLS-Broadcast-Dump' },
        { icon: 'headphones', title: 'Podcast-Host benötigt MP3' },
        { icon: 'mail',       title: 'Kompatibilität mit Legacy-Player' },
        { icon: 'editPen',    title: 'DAW-Import (ältere Tools)' },
        { icon: 'archive',    title: 'Konsistentes Archivformat' },
        { icon: 'waveform',   title: 'Gerippte iPhone AAC' },
      ]}
      tipsTitle="Tipps für eine saubere AAC zu MP3"
      tips={[
        'Wenn Ihr Gerät AAC nativ abspielt, müssen Sie möglicherweise nicht konvertieren.',
        'Sowohl AAC als auch MP3 sind verlustbehaftet; das Neucodieren führt zu einem kleinen Qualitätsverlust.',
        'Halten Sie die Quelldatei unter dem aktuellen Upload-Limit von 25 MB.',
        'Für Transkriptionen laden Sie die AAC stattdessen direkt zu /de/aac-to-text hoch.',
      ]}
      processTitle="Was während der Konvertierung passiert"
      processSteps={['AAC ADTS-Frames', 'Dekodieren', 'MP3-Kodierung']}
      compareTitle="AAC vs MP3"
      compareRows={[
        { fmt: 'AAC', contains: 'Nein', size: 'Klein (effizient)', best: 'Moderne Geräte, Streaming, iPhone' },
        { fmt: 'MP3', contains: 'Nein', size: 'Klein',             best: 'Universelle Kompatibilität, Legacy-Player' },
      ]}
      faq={[
        { q: 'Muss ich AAC wirklich in MP3 konvertieren?', a: 'Selten. Die meisten modernen Geräte spielen AAC nativ ab. Konvertieren Sie nur, wenn ein bestimmtes Tool oder ein Host ausdrücklich MP3 benötigt.' },
        { q: 'Ist der Konverter kostenlos?', a: 'Ja. Dateien bis zu 25 MB können ohne Konto konvertiert werden, und die Ausgabe hat kein Wasserzeichen.' },
        { q: 'Was ist der Qualitätsverlust?', a: 'AAC und MP3 sind beide verlustbehaftet. Das Neucodieren führt zu einem kleinen zusätzlichen Verlust, der jedoch bei typischem Hören bei 128 kbps nicht hörbar ist.' },
        { q: 'Welche AAC-Formatierungen funktionieren?', a: 'ADTS (am häufigsten), ADIF und LATM werden alle dekodiert. AAC innerhalb von MP4/M4A funktioniert ebenfalls, ist jedoch ein anderer Eingangsweg.' },
        { q: 'Werden Dateien gespeichert?', a: 'Nein. Hochgeladene AAC wird nach der Konvertierung gelöscht; das MP3 wird innerhalb einer Stunde gelöscht.' },
      ]}
      ctaHeadline="Konvertieren Sie jetzt Ihr AAC in MP3"
      ctaSubtitle="Laden Sie Ihr AAC hoch und erhalten Sie in Sekunden ein sauberes MP3. Keine Anmeldung. Kein Wasserzeichen."
      ctaButton="Wählen Sie eine AAC-Datei"
      moreTools={[
        { href: '/de/m4a-to-mp3',  label: 'M4A zu MP3' },
        { href: '/de/mp4-to-mp3',  label: 'MP4 zu MP3' },
        { href: '/de/wav-to-mp3',  label: 'WAV zu MP3' },
        { href: '/de/aac-to-text', label: 'AAC zu Text' },
      ]}
    />
  )
}