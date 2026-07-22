import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/wav-to-mp3',
  'fr': 'https://mictoo.com/fr/wav-to-mp3',
  'de': 'https://mictoo.com/de/wav-to-mp3',
  'es': 'https://mictoo.com/es/wav-to-mp3',
  'ru': 'https://mictoo.com/ru/wav-to-mp3',
  'it': 'https://mictoo.com/it/wav-to-mp3',
  'pt': 'https://mictoo.com/pt/wav-to-mp3',
  'pl': 'https://mictoo.com/pl/wav-to-mp3',
  'ja': 'https://mictoo.com/ja/wav-to-mp3',
  'ko': 'https://mictoo.com/ko/wav-to-mp3',
  'x-default': 'https://mictoo.com/wav-to-mp3',
}

export const metadata = {
  title: 'WAV zu MP3, kostenloser Online-Konverter | Mictoo',
  description:
    'Konvertieren Sie WAV in MP3 kostenlos online. Verkleinern Sie verlustfreie WAV-Dateien auf tragbare 128 kbps MP3 in Sekunden. Keine Anmeldung, kein Wasserzeichen. Bis zu 25 MB.',
  alternates: { canonical: 'https://mictoo.com/de/wav-to-mp3', languages: LANGS },
  openGraph: {
    title: 'WAV zu MP3, kostenloser Online-Konverter | Mictoo',
    description: 'Verkleinern Sie verlustfreies WAV zu tragbaren 128 kbps MP3. Keine Anmeldung.',
    url: 'https://mictoo.com/de/wav-to-mp3',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WAV zu MP3, kostenloser Online-Konverter',
    description: 'Verkleinern Sie WAV zu tragbarem MP3.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function DeWavToMp3Page() {
  return (
    <ConverterPageLayout
      locale="de"
      mode="converter" from="wav" to="mp3" currentHref="/de/wav-to-mp3"
      badge="WAV → MP3 · Kostenlos · Keine Anmeldung"
      h1First="WAV zu MP3"
      h1Second="Kostenloser Online-Konverter"
      subtitle="Laden Sie eine unkomprimierte WAV-Datei hoch und erhalten Sie in Sekunden eine kleine, tragbare MP3. Kein Wasserzeichen, keine E-Mail, kein Warten."
      outputFormat="MP3" outputQuality="128 kbps" outputAudio="Stereo"
      stepsTitle="Wie die WAV zu MP3-Konvertierung funktioniert"
      steps={[
        { icon: 'upload',   title: 'Laden Sie die WAV hoch',         desc: 'Laden Sie eine WAV-Datei von bis zu 25 MB hoch. Kein Konto erforderlich.' },
        { icon: 'waveform', title: 'Wir kodieren in MP3',      desc: 'ffmpeg kodiert in 128 kbps Stereo MP3 bei 44,1 kHz. Eine 25 MB WAV benötigt etwa 10 Sekunden.' },
        { icon: 'download', title: 'Laden Sie die MP3 herunter',     desc: 'Erhalten Sie eine kleinere 128 kbps MP3 mit dem ursprünglichen Basisdateinamen.' },
      ]}
      previewInputName="studio-bounce.wav"
      previewInputSize="120 MB · 00:12:34 · 16-Bit / 44,1 kHz"
      previewOutputName="studio-bounce.mp3"
      previewOutputSize="00:12:34 · 128 kbps · 11,5 MB"
      whyTitle="Warum Mictoo für WAV zu MP3 verwenden?"
      whyCards={[
        { icon: 'target',   title: 'Eine Aufgabe gut erledigt',      desc: 'Nur die Konvertierung. Kein Newsletter-Popup, keine gefälschte Fortschrittsanzeige.' },
        { icon: 'fileAudio',title: 'Viel kleinere Ausgabe',    desc: 'Unkomprimierte PCM WAV-Dateien werden bei 128 kbps oft 8, 12× kleiner. Das genaue Verhältnis hängt von der Quelle ab.' },
        { icon: 'lock',     title: 'Dateien werden nachher gelöscht',    desc: 'Ihr Upload wird gelöscht, sobald die Konvertierung abgeschlossen ist; die MP3 wird innerhalb einer Stunde gelöscht.' },
        { icon: 'shield',   title: 'Kein Wasserzeichen oder Tag',    desc: 'Kein gebrandeter Intro, keine Metadaten eingefügt. Nur die Audiodatei, neu kodiert.' },
      ]}
      scenariosTitle="Wann ist WAV zu MP3 nützlich"
      scenarios={[
        { icon: 'headphones', title: 'Studio-Bounce für das Telefon' },
        { icon: 'mail',       title: 'Eine kleinere Datei per E-Mail' },
        { icon: 'archive',    title: 'Archivieren in kleinerer Größe' },
        { icon: 'editPen',    title: 'Für die Transkription vorbereiten' },
        { icon: 'waveform',   title: 'Musikbibliothek importieren' },
        { icon: 'video',      title: 'Voiceover für Video' },
      ]}
      tipsTitle="Tipps für eine saubere WAV zu MP3"
      tips={[
        '128 kbps ist für die meisten Hörgewohnheiten transparent.',
        'Wenn die WAV über 25 MB groß ist, schneiden oder komprimieren Sie sie vor dem Hochladen.',
        'Mehrkanal-WAV wird auf Stereo heruntergemischt.',
        'Für verlustfreie Erhaltung, behalten Sie die WAV als Archivkopie.',
      ]}
      processTitle="Was während der Konvertierung passiert"
      processSteps={['WAV-Container', 'PCM dekodieren', 'MP3-Kodierung']}
      compareTitle="WAV vs MP3"
      compareRows={[
        { fmt: 'WAV', contains: 'Nein', size: 'Groß (~10 MB/min)', best: 'Bearbeitung, Archivierung, Studio' },
        { fmt: 'MP3', contains: 'Nein', size: 'Klein (~1 MB/min)',  best: 'Teilen, Abspielen, Anhören' },
      ]}
      faq={[
        { q: 'Ist der WAV zu MP3-Konverter kostenlos?', a: 'Ja. Kein Konto ist erforderlich für Dateien bis zu 25 MB, und die Ausgabe hat kein Wasserzeichen.' },
        { q: 'Verringert die Konvertierung die Audioqualität?', a: 'Leicht. MP3 bei 128 kbps ist ein verlustbehaftetes Format, aber der Qualitätsverlust ist für Sprache und typische Musikwiedergabe nicht hörbar. Behalten Sie Ihre WAV als Master.' },
        { q: 'Werden hochgeladene Dateien gespeichert?', a: 'Nein. Ihre WAV landet auf dem Vercel Blob-Speicher nur lange genug zur Konvertierung, dann wird sie gelöscht. Die MP3 wird innerhalb einer Stunde gelöscht.' },
        { q: 'Kann ich eine große WAV konvertieren?', a: 'Das aktuelle Upload-Limit beträgt 25 MB. Für eine größere Datei schneiden Sie sie oder exportieren Sie eine Mono- oder Kopie mit niedrigerer Abtastrate, bevor Sie sie hochladen.' },
        { q: 'Funktioniert es auf Mobilgeräten?', a: 'Ja. Uploads funktionieren von iOS Safari und Android Chrome.' },
      ]}
      ctaHeadline="Konvertieren Sie jetzt Ihre WAV in MP3"
      ctaSubtitle="Laden Sie Ihre WAV hoch und erhalten Sie in Sekunden eine tragbare MP3. Keine Anmeldung. Kein Wasserzeichen."
      ctaButton="Wählen Sie eine WAV-Datei"
      moreTools={[
        { href: '/de/mp4-to-mp3',  label: 'MP4 zu MP3' },
        { href: '/de/webm-to-mp3', label: 'WEBM zu MP3' },
        { href: '/de/flac-to-mp3', label: 'FLAC zu MP3' },
        { href: '/de/mp3-to-wav',  label: 'MP3 zu WAV' },
        { href: '/de/wav-to-text', label: 'WAV zu Text' },
      ]}
    />
  )
}