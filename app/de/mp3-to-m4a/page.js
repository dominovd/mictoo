import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/mp3-to-m4a',
  'fr': 'https://mictoo.com/fr/mp3-to-m4a',
  'de': 'https://mictoo.com/de/mp3-to-m4a',
  'es': 'https://mictoo.com/es/mp3-to-m4a',
  'ru': 'https://mictoo.com/ru/mp3-to-m4a',
  'it': 'https://mictoo.com/it/mp3-to-m4a',
  'pt': 'https://mictoo.com/pt/mp3-to-m4a',
  'pl': 'https://mictoo.com/pl/mp3-to-m4a',
  'ja': 'https://mictoo.com/ja/mp3-to-m4a',
  'ko': 'https://mictoo.com/ko/mp3-to-m4a',
  'x-default': 'https://mictoo.com/mp3-to-m4a',
}

export const metadata = {
  title: 'MP3 zu M4A, kostenloser Online-Konverter | Mictoo',
  description:
    'Konvertieren Sie MP3 in M4A kostenlos online. Kodieren Sie MP3 in AAC innerhalb eines M4A-Containers für iPhone, iTunes und das Apple-Ökosystem. Keine Anmeldung, kein Wasserzeichen.',
  alternates: { canonical: 'https://mictoo.com/de/mp3-to-m4a', languages: LANGS },
  openGraph: {
    title: 'MP3 zu M4A, kostenloser Online-Konverter | Mictoo',
    description: 'MP3 zu AAC innerhalb von M4A. iPhone-freundlich. Keine Anmeldung.',
    url: 'https://mictoo.com/de/mp3-to-m4a',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MP3 zu M4A, kostenloser Online-Konverter',
    description: 'iPhone-freundliches AAC-in-MP4.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function DeMp3ToM4aPage() {
  return (
    <ConverterPageLayout
      locale="de"
      mode="converter" from="mp3" to="m4a" currentHref="/de/mp3-to-m4a"
      badge="MP3 → M4A · Kostenlos · iPhone-freundlich"
      h1First="MP3 zu M4A"
      h1Second="Kostenloser Online-Konverter"
      subtitle="Laden Sie eine MP3 hoch und erhalten Sie eine M4A (AAC im MP4-Container) für iPhone-Sprachmemos, iTunes, GarageBand und das Apple-Ökosystem. Kein Wasserzeichen, keine E-Mail."
      outputFormat="M4A" outputQuality="128 kbps AAC" outputAudio="Stereo"
      stepsTitle="So funktioniert die MP3 zu M4A-Konvertierung"
      steps={[
        { icon: 'upload',   title: 'Laden Sie die MP3 hoch',        desc: 'Jede Bitrate MP3, bis zu 25 MB anonym.' },
        { icon: 'waveform', title: 'Wir kodieren in AAC um', desc: 'ffmpeg dekodiert die MP3 und kodiert sie als 128 kbps AAC in einen .m4a-Container um.' },
        { icon: 'download', title: 'Laden Sie die M4A herunter',   desc: 'iPhone-freundliche Datei mit dem ursprünglichen Namen plus .m4a-Erweiterung.' },
      ]}
      previewInputName="episode.mp3"
      previewInputSize="8.4 MB · 00:09:22"
      previewOutputName="episode.m4a"
      previewOutputSize="00:09:22 · 128 kbps AAC · 7.6 MB"
      whyTitle="Warum Mictoo für MP3 zu M4A verwenden?"
      whyCards={[
        { icon: 'target',    title: 'Apple-freundlicher Output',    desc: 'M4A funktioniert nativ mit gängigen iPhone-, iTunes-, GarageBand- und Apple-Medien-Workflows.' },
        { icon: 'fileAudio', title: 'Vorhersehbarer Output',       desc: 'Die Datei wird als 128 kbps AAC kodiert. Ihre endgültige Größe hängt hauptsächlich von der Aufnahmedauer ab.' },
        { icon: 'lock',      title: 'Dateien werden nach',      desc: 'Die hochgeladene MP3 wird nach der Konvertierung gelöscht; die M4A wird innerhalb einer Stunde entfernt.' },
        { icon: 'shield',    title: 'Kein Wasserzeichen oder Tag',      desc: 'Nur die Audio, neu kodiert. Kein gebrandeter Intro, keine Metadaten eingefügt.' },
      ]}
      scenariosTitle="Wann MP3 zu M4A nützlich ist"
      scenarios={[
        { icon: 'headphones', title: 'iTunes-Bibliothek importieren' },
        { icon: 'waveform',   title: 'GarageBand-Projekt' },
        { icon: 'video',      title: 'iMovie-Soundtrack' },
        { icon: 'mail',       title: 'AirDrop-Kompatibilität' },
        { icon: 'archive',    title: 'Apple-Ökosystem-Archiv' },
        { icon: 'editPen',    title: 'Logic Pro-Import' },
      ]}
      tipsTitle="Tipps für eine saubere MP3 zu M4A"
      tips={[
        'MP3 und AAC sind beide verlustbehaftet; das Neucodieren führt zu einem kleinen Qualitätsverlust.',
        'Für verlustfreie Konvertierung stattdessen in WAV konvertieren.',
        'ID3-Tags werden nicht in die M4A übertragen.',
        'Halten Sie die Quelldatei unter dem aktuellen Upload-Limit von 25 MB.',
      ]}
      processTitle="Was während der Konvertierung passiert"
      processSteps={['MP3-Stream', 'Dekodieren', 'AAC / M4A-Kodierung']}
      compareTitle="MP3 vs M4A"
      compareRows={[
        { fmt: 'MP3', contains: 'Nein', size: 'Klein', best: 'Universell, ältere Player' },
        { fmt: 'M4A', contains: 'Nein', size: 'Etwas kleiner', best: 'iPhone, iTunes, GarageBand, Apple-Apps' },
      ]}
      faq={[
        { q: 'Ist der MP3 zu M4A-Konverter kostenlos?', a: 'Ja. Dateien bis zu 25 MB können ohne ein Konto konvertiert werden, und der Output hat kein Wasserzeichen.' },
        { q: 'Verbessert die Konvertierung von MP3 in M4A die Qualität?', a: 'Nein. Das Neucodieren von einem verlustbehafteten Format in ein anderes kann nur geringfügig an Qualität verlieren. Machen Sie es nur für die Kompatibilität mit dem Apple-Ökosystem.' },
        { q: 'Funktioniert die M4A in iTunes und Apple Music?', a: 'Ja. Standard-AAC im MP4-Container ist das genaue Format, das iTunes verwendet.' },
        { q: 'Werden Dateien gespeichert?', a: 'Nein. Die hochgeladene MP3 wird nach der Konvertierung gelöscht; die M4A wird innerhalb einer Stunde entfernt.' },
        { q: 'Kann ich in verlustfreies M4A (ALAC) konvertieren?', a: 'Nicht von dieser Seite. Der Output ist verlustbehaftetes AAC. Für verlustfreies, konvertieren Sie MP3 zuerst in WAV und dann in ALAC in Ihrer DAW.' },
      ]}
      ctaHeadline="Konvertieren Sie Ihre MP3 jetzt in M4A"
      ctaSubtitle="Laden Sie Ihre MP3 hoch und erhalten Sie in wenigen Sekunden eine iPhone-freundliche M4A."
      ctaButton="Wählen Sie eine MP3-Datei aus"
      moreTools={[
        { href: '/de/m4a-to-mp3',  label: 'M4A zu MP3' },
        { href: '/de/mp3-to-wav',  label: 'MP3 zu WAV' },
        { href: '/de/mp4-to-mp3',  label: 'MP4 zu MP3' },
        { href: '/de/m4a-to-text', label: 'M4A zu Text' },
      ]}
    />
  )
}