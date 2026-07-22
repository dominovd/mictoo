import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/mp3-to-wav',
  'fr': 'https://mictoo.com/fr/mp3-to-wav',
  'de': 'https://mictoo.com/de/mp3-to-wav',
  'es': 'https://mictoo.com/es/mp3-to-wav',
  'ru': 'https://mictoo.com/ru/mp3-to-wav',
  'it': 'https://mictoo.com/it/mp3-to-wav',
  'pt': 'https://mictoo.com/pt/mp3-to-wav',
  'pl': 'https://mictoo.com/pl/mp3-to-wav',
  'ja': 'https://mictoo.com/ja/mp3-to-wav',
  'ko': 'https://mictoo.com/ko/mp3-to-wav',
  'x-default': 'https://mictoo.com/mp3-to-wav',
}

export const metadata = {
  title: 'MP3 zu WAV, kostenloser Online-Konverter | Mictoo',
  description:
    'Konvertieren Sie MP3 in WAV kostenlos online. Erweitern Sie komprimierte MP3 in unkomprimierte 16-Bit/44,1 kHz WAV für die Audiobearbeitung. Keine Anmeldung, kein Wasserzeichen.',
  alternates: { canonical: 'https://mictoo.com/de/mp3-to-wav', languages: LANGS },
  openGraph: {
    title: 'MP3 zu WAV, kostenloser Online-Konverter | Mictoo',
    description: 'MP3 in unkomprimierte 16-Bit/44,1 kHz WAV. Für die Bearbeitung.',
    url: 'https://mictoo.com/de/mp3-to-wav',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MP3 zu WAV, kostenloser Online-Konverter',
    description: 'Für DAW-Bearbeitung und Mastering.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function DeMp3ToWavPage() {
  return (
    <ConverterPageLayout
      locale="de"
      mode="converter" from="mp3" to="wav" currentHref="/de/mp3-to-wav"
      badge="MP3 → WAV · Kostenlos · Editor-freundlich"
      h1First="MP3 zu WAV"
      h1Second="Kostenloser Online-Konverter"
      subtitle="Laden Sie eine MP3 hoch und erhalten Sie eine unkomprimierte 16-Bit / 44,1 kHz WAV für DAW-Bearbeitung, Mastering oder CD-Brennen. Kein Wasserzeichen, keine E-Mail."
      outputFormat="WAV" outputQuality="16-Bit / 44,1 kHz" outputAudio="Stereo"
      stepsTitle="So funktioniert die MP3 zu WAV-Konvertierung"
      steps={[
        { icon: 'upload',   title: 'Laden Sie die MP3 hoch',       desc: 'Jede Bitrate MP3, bis zu 25 MB anonym.' },
        { icon: 'waveform', title: 'Wir dekodieren zu PCM',   desc: 'ffmpeg dekodiert die MP3 in unkomprimierte 16-Bit / 44,1 kHz PCM, verpackt in einem WAV-Container.' },
        { icon: 'download', title: 'Laden Sie die WAV herunter',   desc: 'Bereit für Audacity, Pro Tools, Logic, Ableton und jeden Audio-Editor.' },
      ]}
      previewInputName="voiceover.mp3"
      previewInputSize="4,6 MB · 00:05:00 · 128 kbps"
      previewOutputName="voiceover.wav"
      previewOutputSize="00:05:00 · 16-Bit / 44,1 kHz · 50 MB"
      whyTitle="Warum Mictoo für MP3 zu WAV verwenden?"
      whyCards={[
        { icon: 'target',   title: 'DAW-bereites Ergebnis',       desc: 'Unkomprimiertes PCM ist das, was Audio-Editoren und Mastering-Tools erwarten.' },
        { icon: 'fileAudio',title: 'Standard 16-Bit / 44,1', desc: 'Eine weit verbreitete PCM-Einstellung für Audio-Editoren, Mastering-Tools und CD-Authoring-Software.' },
        { icon: 'lock',     title: 'Dateien nachher gelöscht',    desc: 'Die hochgeladene MP3 wird nach der Konvertierung gelöscht; die WAV wird innerhalb einer Stunde entfernt.' },
        { icon: 'shield',   title: 'Kein Wasserzeichen oder Tag',    desc: 'Nur die Audiodatei, dekodiert zu PCM. Kein markiertes Intro, keine Metadaten eingefügt.' },
      ]}
      scenariosTitle="Wann MP3 zu WAV nützlich ist"
      scenarios={[
        { icon: 'editPen',    title: 'Audacity-Bearbeitung' },
        { icon: 'waveform',   title: 'Pro Tools-Import' },
        { icon: 'headphones', title: 'Mastering-Workflow' },
        { icon: 'archive',    title: 'CD-Brennen' },
        { icon: 'video',      title: 'Videobearbeiter mit WAV-Anforderung' },
        { icon: 'target',     title: 'Eingang für Sprachklontraining' },
      ]}
      tipsTitle="Tipps für eine saubere MP3 zu WAV-Konvertierung"
      tips={[
        'WAV ist 10× größer als MP3 (etwa 10 MB pro Minute).',
        'Das Ergebnis ist nicht „wirklich“ verlustfrei ,  es bewahrt das MP3-Signal.',
        'Für wirklich verlustfreie Audioqualität starten Sie von einem FLAC oder einem originalen WAV-Master.',
        'Halten Sie die Quelldatei unter dem aktuellen Upload-Limit von 25 MB.',
      ]}
      processTitle="Was während der Konvertierung passiert"
      processSteps={['MP3-Stream', 'Dekodieren zu PCM', 'WAV-Container']}
      compareTitle="MP3 vs WAV"
      compareRows={[
        { fmt: 'MP3', contains: 'Nein', size: 'Klein (~1 MB/min)', best: 'Teilen, Handys, Streaming' },
        { fmt: 'WAV', contains: 'Nein', size: 'Groß (~10 MB/min)', best: 'Bearbeitung, Mastering, CD-Brennen' },
      ]}
      faq={[
        { q: 'Stellt die Konvertierung von MP3 zu WAV verlustfreie Qualität wieder her?', a: 'Nein. MP3 ist verlustbehaftet; die WAV bewahrt das MP3-Signal, aber nichts weiter. Für wirklich verlustfrei müssen Sie von einem FLAC oder einem originalen WAV starten.' },
        { q: 'Ist der Konverter kostenlos?', a: 'Ja. Dateien bis zu 25 MB können ohne Konto konvertiert werden, und das Ergebnis hat kein Wasserzeichen.' },
        { q: 'Warum ist die WAV-Datei so viel größer?', a: 'WAV ist unkomprimiertes PCM. Eine 5 MB MP3 wird ungefähr zu einer 50 MB WAV. Das ist normal.' },
        { q: 'Welche Bit-Tiefe und Abtastrate?', a: '16-Bit / 44,1 kHz Stereo (CD-Qualität). Das ist das Standardformat für den DAW-Import.' },
        { q: 'Werden Dateien gespeichert?', a: 'Nein. Die hochgeladene MP3 wird nach der Konvertierung gelöscht; die WAV wird innerhalb einer Stunde entfernt.' },
      ]}
      ctaHeadline="Konvertieren Sie Ihre MP3 jetzt in WAV"
      ctaSubtitle="Laden Sie Ihre MP3 hoch und erhalten Sie eine unkomprimierte WAV, die bereit für die Bearbeitung ist."
      ctaButton="Wählen Sie eine MP3-Datei"
      moreTools={[
        { href: '/de/wav-to-mp3',  label: 'WAV zu MP3' },
        { href: '/de/mp3-to-m4a',  label: 'MP3 zu M4A' },
        { href: '/de/flac-to-mp3', label: 'FLAC zu MP3' },
        { href: '/de/wav-to-text', label: 'WAV zu Text' },
      ]}
    />
  )
}