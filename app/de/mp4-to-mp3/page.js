import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/mp4-to-mp3',
  'fr': 'https://mictoo.com/fr/mp4-to-mp3',
  'de': 'https://mictoo.com/de/mp4-to-mp3',
  'es': 'https://mictoo.com/es/mp4-to-mp3',
  'ru': 'https://mictoo.com/ru/mp4-to-mp3',
  'it': 'https://mictoo.com/it/mp4-to-mp3',
  'pt': 'https://mictoo.com/pt/mp4-to-mp3',
  'pl': 'https://mictoo.com/pl/mp4-to-mp3',
  'ja': 'https://mictoo.com/ja/mp4-to-mp3',
  'ko': 'https://mictoo.com/ko/mp4-to-mp3',
  'x-default': 'https://mictoo.com/mp4-to-mp3',
}

export const metadata = {
  title: 'MP4 zu MP3, kostenloser Online-Konverter | Mictoo',
  description:
    'Konvertieren Sie MP4 in MP3 kostenlos online. Laden Sie Ihr Video hoch und erhalten Sie in Sekunden eine saubere 128 kbps MP3-Audiodatei. Keine Anmeldung, kein Wasserzeichen, keine E-Mail. Bis zu 25 MB.',
  alternates: { canonical: 'https://mictoo.com/de/mp4-to-mp3', languages: LANGS },
  openGraph: {
    title: 'MP4 zu MP3, kostenloser Online-Konverter | Mictoo',
    description: 'Konvertieren Sie MP4 in MP3 kostenlos online. 128 kbps, keine Anmeldung, kein Wasserzeichen.',
    url: 'https://mictoo.com/de/mp4-to-mp3',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MP4 zu MP3, kostenloser Online-Konverter',
    description: 'Konvertieren Sie MP4 in MP3 kostenlos online. 128 kbps, keine Anmeldung, kein Wasserzeichen.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function DeMp4ToMp3Page() {
  return (
    <ConverterPageLayout
      locale="de"
      mode="converter"
      from="mp4"
      to="mp3"
      currentHref="/de/mp4-to-mp3"

      badge="MP4 → MP3 · Kostenlos · Keine Anmeldung"
      h1First="MP4 zu MP3"
      h1Second="Kostenloser Online-Konverter"
      subtitle="Laden Sie ein MP4-Video hoch und erhalten Sie in Sekunden eine saubere MP3-Audiodatei. Kein Wasserzeichen, keine E-Mail, kein Warten."

      outputFormat="MP3"
      outputQuality="128 kbps"
      outputAudio="Stereo"

      stepsTitle="So funktioniert die MP4 zu MP3-Konvertierung"
      steps={[
        {
          icon: 'upload',
          title: 'Laden Sie das MP4 hoch',
          desc: 'Laden Sie Ihr MP4-Video hoch. Wir akzeptieren Dateien bis zu 25 MB.',
        },
        {
          icon: 'waveform',
          title: 'Wir extrahieren den Audio',
          desc: 'Unser Server extrahiert die Audiospur und kodiert sie in MP3.',
        },
        {
          icon: 'download',
          title: 'Laden Sie die MP3 herunter',
          desc: 'Erhalten Sie Ihre saubere MP3-Datei in Sekunden.',
        },
      ]}

      previewInputName="meeting-recording.mp4"
      previewInputSize="128,4 MB · 00:45:32"
      previewOutputName="meeting-recording.mp3"
      previewOutputSize="00:45:32 · 128 kbps"

      whyTitle="Warum Mictoo für MP4 zu MP3 verwenden?"
      whyCards={[
        {
          icon: 'target',
          title: 'Nur die Konvertierung',
          desc: 'Wir konzentrieren uns auf eine Sache ,  MP4 schnell und zuverlässig in MP3 zu konvertieren.',
        },
        {
          icon: 'fileAudio',
          title: 'Klein, universell MP3',
          desc: 'MP3 funktioniert überall und hält die Dateigrößen klein.',
        },
        {
          icon: 'lock',
          title: 'Dateien werden gelöscht',
          desc: 'Ihre Uploads werden sicher verarbeitet und nach der Konvertierung gelöscht.',
        },
        {
          icon: 'shield',
          title: 'Kein Wasserzeichen oder Audio-Tag',
          desc: 'Erhalten Sie eine saubere MP3 ohne Wasserzeichen oder hinzugefügte Tags.',
        },
      ]}

      scenariosTitle="Wann MP4 zu MP3 nützlich ist"
      scenarios={[
        { icon: 'headphones', title: 'Ein Video-Podcast speichern' },
        { icon: 'cap',        title: 'Vorlesungs-Audio extrahieren' },
        { icon: 'mail',       title: 'Eine kleinere Datei per E-Mail senden' },
        { icon: 'editPen',    title: 'Für die Transkription vorbereiten' },
        { icon: 'waveform',   title: 'Hintergrundaudio' },
        { icon: 'archive',    title: 'Sprachaufnahmen archivieren' },
      ]}

      tipsTitle="Tipps für eine saubere Konvertierung"
      tips={[
        'Zuerst große Videos kürzen.',
        '128 kbps funktioniert für Sprache und Musik.',
        'Die Standard-Audiospur wird verwendet.',
        'DRM-geschütztes Video wird nicht unterstützt.',
      ]}
      processTitle="Was während der Konvertierung passiert"
      processSteps={[
        'MP4-Container',
        'Extraktion der Audiospur',
        'MP3-Kodierung',
      ]}

      compareTitle="MP4 vs MP3"
      compareRows={[
        { fmt: 'MP4', contains: 'Ja', size: 'Groß', best: 'Ansehen, Teilen von Videos' },
        { fmt: 'MP3', contains: 'Nein',  size: 'Klein', best: 'Anhören, nur Audio' },
      ]}

      faq={[
        { q: 'Ist der MP4 zu MP3-Konverter kostenlos?', a: 'Ja. Kein Konto erforderlich für Dateien bis zu 25 MB, keine Zeitbeschränkung, kein Wasserzeichen auf dem Ausgang, keine Upgrade-Aufforderungen. Anzeigen auf den Marketingseiten decken die Serverkosten.' },
        { q: 'Verringert die Konvertierung die Audioqualität?', a: 'Leicht. MP3 ist ein verlustbehaftetes Format, aber bei 128 kbps ist der Qualitätsverlust für Sprache und typische Musik-Wiedergabe nicht hörbar. Wenn Sie verlustfrei benötigen, konvertieren Sie stattdessen in WAV.' },
        { q: 'Werden hochgeladene Dateien gespeichert?', a: 'Nein. Ihr MP4 landet nur lange genug im Vercel Blob-Speicher, um konvertiert zu werden, dann wird es gelöscht. Die resultierende MP3 wird innerhalb einer Stunde gelöscht. Speichern Sie die MP3 lokal.' },
        { q: 'Kann ich ein großes MP4 konvertieren?', a: 'Das aktuelle Upload-Limit beträgt 25 MB. Wenn Ihr MP4 größer ist, kürzen Sie es in QuickTime, der Fotos-App oder einem anderen Video-Editor, bevor Sie es hochladen.' },
        { q: 'Funktioniert es auf Mobilgeräten?', a: 'Ja. Die Seite ist mobilfreundlich und Uploads funktionieren von iOS Safari und Android Chrome. Auf dem iPhone teilen Sie das Video zuerst mit Dateien, damit der Picker darauf zugreifen kann.' },
      ]}

      ctaHeadline="Konvertieren Sie Ihr MP4 jetzt in MP3"
      ctaSubtitle="Laden Sie Ihr Video hoch und erhalten Sie in Sekunden eine saubere MP3. Keine Anmeldung. Kein Wasserzeichen."
      ctaButton="Wählen Sie eine MP4-Datei"

      moreTools={[
        { href: '/de/wav-to-mp3',  label: 'WAV zu MP3' },
        { href: '/de/webm-to-mp3', label: 'WEBM zu MP3' },
        { href: '/de/flac-to-mp3', label: 'FLAC zu MP3' },
        { href: '/de/aac-to-mp3',  label: 'AAC zu MP3' },
        { href: '/de/m4a-to-mp3',  label: 'M4A zu MP3' },
        { href: '/de/mp3-to-wav',  label: 'MP3 zu WAV' },
      ]}
    />
  )
}