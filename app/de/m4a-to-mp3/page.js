import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/m4a-to-mp3',
  'fr': 'https://mictoo.com/fr/m4a-to-mp3',
  'de': 'https://mictoo.com/de/m4a-to-mp3',
  'es': 'https://mictoo.com/es/m4a-to-mp3',
  'ru': 'https://mictoo.com/ru/m4a-to-mp3',
  'it': 'https://mictoo.com/it/m4a-to-mp3',
  'pt': 'https://mictoo.com/pt/m4a-to-mp3',
  'pl': 'https://mictoo.com/pl/m4a-to-mp3',
  'ja': 'https://mictoo.com/ja/m4a-to-mp3',
  'ko': 'https://mictoo.com/ko/m4a-to-mp3',
  'x-default': 'https://mictoo.com/m4a-to-mp3',
}

export const metadata = {
  title: 'M4A zu MP3: Kostenloser Konverter für Apple-Audio | Mictoo',
  description:
    'Konvertieren Sie iPhone-Sprachmemos, GarageBand-Bounces und M4A-Dateien aus dem Apple-Ökosystem in universelle MP3 für Podcast-Hosts, ältere Android-Telefone und Legacy-Player.',
  alternates: {
    canonical: 'https://mictoo.com/de/m4a-to-mp3',
    languages: LANGS,
  },
  openGraph: {
    title: 'M4A zu MP3: Kostenloser Konverter für Apple-Audio | Mictoo',
    description: 'iPhone-Sprachmemos und GarageBand-Bounces in universelle MP3.',
    url: 'https://mictoo.com/de/m4a-to-mp3',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'M4A zu MP3: Kostenloser Konverter',
    description: 'iPhone-Sprachmemos in universelle MP3.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function DeM4aToMp3Page() {
  return (
    <ConverterPageLayout
      locale="de"
      mode="converter" from="m4a" to="mp3" currentHref="/de/m4a-to-mp3"
      badge="M4A → MP3 · Kostenlos · Apple-Audio"
      h1First="M4A zu MP3"
      h1Second="Kostenloser Konverter für Apple-Audio"
      subtitle="Laden Sie ein iPhone-Sprachmemo, GarageBand-Bounce oder Apple Podcasts-Export hoch und erhalten Sie eine universelle MP3 für Podcast-Hosts, ältere Android-Telefone und Legacy-Player."
      outputFormat="MP3" outputQuality="128 kbps" outputAudio="Stereo"
      stepsTitle="So funktioniert die M4A zu MP3-Konvertierung"
      steps={[
        { icon: 'upload',   title: 'Laden Sie die M4A hoch',        desc: 'Von Sprachmemos, GarageBand, Apple Podcasts. Bis zu 25 MB anonym.' },
        { icon: 'waveform', title: 'Wir dekodieren und kodieren', desc: 'ffmpeg dekodiert das AAC im M4A-Container und kodiert es neu in 128 kbps MP3.' },
        { icon: 'download', title: 'Laden Sie die MP3 herunter',    desc: 'Erhalten Sie eine MP3, die mit den meisten aktuellen Playern und Audio-Editoren kompatibel ist.' },
      ]}
      previewInputName="voice-memo.m4a"
      previewInputSize="6,2 MB · 00:12:04"
      previewOutputName="voice-memo.mp3"
      previewOutputSize="00:12:04 · 128 kbps · 11,5 MB"
      whyTitle="Warum Mictoo für M4A zu MP3 verwenden?"
      whyCards={[
        { icon: 'target',   title: 'iPhone-freundlich',        desc: 'iPhone-Sprachmemos im nativen .m4a-Format werden direkt akzeptiert, keine Umbenennung erforderlich.' },
        { icon: 'fileAudio',title: 'MP3 für Legacy-Hosts',   desc: 'Einige Podcast-Hosts und ältere Android-Geräte bevorzugen immer noch MP3 gegenüber M4A.' },
        { icon: 'lock',     title: 'Dateien werden nachher gelöscht',    desc: 'Hochgeladene M4A wird nach der Konvertierung gelöscht; die MP3 wird innerhalb einer Stunde entfernt.' },
        { icon: 'shield',   title: 'Kein Wasserzeichen oder Tag',    desc: 'Nur die Audio, neu kodiert. Kein gebrandeter Intro, keine Metadaten eingefügt.' },
      ]}
      scenariosTitle="Wann M4A zu MP3 nützlich ist"
      scenarios={[
        { icon: 'headphones', title: 'iPhone-Sprachmemo' },
        { icon: 'waveform',   title: 'GarageBand-Bounce' },
        { icon: 'mail',       title: 'Legacy-Podcast-Host' },
        { icon: 'archive',    title: 'Konsistentes Bibliotheksformat' },
        { icon: 'editPen',    title: 'Ältere DAW-Import' },
        { icon: 'video',      title: 'Nicht-Apple-Video-Editor' },
      ]}
      tipsTitle="Tipps für eine saubere M4A zu MP3-Konvertierung"
      tips={[
        'Wenn Ihre Plattform M4A akzeptiert, müssen Sie möglicherweise nicht konvertieren.',
        'Beide Formate sind verlustbehaftet; das erneute Kodieren führt zu einem kleinen Qualitätsverlust.',
        'ID3- und iTunes-Metadaten werden nicht übertragen.',
        'Für Transkriptionen laden Sie die M4A direkt zu /de/m4a-to-text hoch.',
      ]}
      processTitle="Was während der Konvertierung passiert"
      processSteps={['M4A (MP4-Container)', 'AAC-Dekodierung', 'MP3-Kodierung']}
      compareTitle="M4A vs MP3"
      compareRows={[
        { fmt: 'M4A', contains: 'Nein', size: 'Klein (effizient)', best: 'Apple-Ökosystem, moderne Geräte' },
        { fmt: 'MP3', contains: 'Nein', size: 'Klein',             best: 'Universell, Legacy-Player, ältere Hosts' },
      ]}
      faq={[
        { q: 'Muss ich M4A in MP3 konvertieren?', a: 'Nur wenn ein bestimmtes Tool oder ein Host MP3 erfordert. Die meisten modernen Geräte (einschließlich aller Android- und Windows-Geräte im Jahr 2026) spielen M4A nativ ab.' },
        { q: 'Ist der Konverter kostenlos?', a: 'Ja. Dateien bis zu 25 MB können ohne ein Konto konvertiert werden, und die Ausgabe hat kein Wasserzeichen.' },
        { q: 'Werde ich Qualität verlieren?', a: 'M4A und MP3 sind beide verlustbehaftet. Das erneute Kodieren führt zu einem kleinen Verlust, der jedoch für typisches Hören nicht hörbar ist.' },
        { q: 'Funktioniert das native Format von iPhone-Sprachmemos?', a: 'Ja. iPhone-Sprachmemos schreiben standardmäßige .m4a, die direkt akzeptiert wird.' },
        { q: 'Werden Dateien gespeichert?', a: 'Nein. Hochgeladene M4A wird nach der Konvertierung gelöscht; die MP3 wird innerhalb einer Stunde entfernt.' },
      ]}
      ctaHeadline="Konvertieren Sie jetzt Ihr M4A in MP3"
      ctaSubtitle="Laden Sie Ihr iPhone-Sprachmemo oder Apple-Audio hoch und erhalten Sie eine tragbare MP3."
      ctaButton="Wählen Sie eine M4A-Datei"
      moreTools={[
        { href: '/de/aac-to-mp3',  label: 'AAC zu MP3' },
        { href: '/de/mp4-to-mp3',  label: 'MP4 zu MP3' },
        { href: '/de/mp3-to-m4a',  label: 'MP3 zu M4A' },
        { href: '/de/m4a-to-text', label: 'M4A zu Text' },
      ]}
    />
  )
}