import LandingLayout from '@/components/LandingLayout'
import ConverterZone from '@/components/ConverterZone'

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
  title: 'WAV zu MP3 — kostenloser Online-Konverter | Mictoo',
  description:
    'WAV zu MP3 kostenlos online konvertieren. Verlustfreie WAV-Dateien in Sekunden auf tragbare 128-kbps-MP3 schrumpfen. Ohne Anmeldung, ohne Wasserzeichen. Bis zu 25 MB.',
  alternates: { canonical: 'https://mictoo.com/de/wav-to-mp3', languages: LANGS },

  openGraph: {
    title: "WAV zu MP3 — kostenloser Online-Konverter | Mictoo",
    description: "WAV zu MP3 kostenlos online konvertieren. Verlustfreie WAV-Dateien in Sekunden auf tragbare 128-kbps-MP3 schrumpfen. Ohne Anmeldung, ohne Wasserzeichen. Bis zu 25 MB.",
    url: "https://mictoo.com/de/wav-to-mp3",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "WAV zu MP3 — kostenloser Online-Konverter | Mictoo",
    description: "WAV zu MP3 kostenlos online konvertieren. Verlustfreie WAV-Dateien in Sekunden auf tragbare 128-kbps-MP3 schrumpfen. Ohne Anmeldung, ohne Wasserzeichen. Bis zu 25 MB.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function DeWavToMp3Page() {
  return (
    <LandingLayout
      defaultLanguage="de"
      badge="WAV → MP3 · Kostenlos · Ohne Anmeldung"
      h1={<>WAV zu MP3<br /><span className="text-brand-600">Kostenloser Online-Konverter</span></>}
      subtitle="Legen Sie eine WAV-Datei ab. Sie erhalten eine kompakte MP3, zehnmal kleiner, mit nahezu identischem Klang für Sprache oder Alltagsnutzung. Ohne Wasserzeichen, ohne E-Mail."
      tool={<ConverterZone from="wav" to="mp3" />}
      howItWorks={[
        { icon: '📂', title: 'WAV ablegen', desc: 'Ziehen Sie eine beliebige WAV-Datei (16-Bit, 24-Bit, Mono, Stereo) in das Feld. Bis 25 MB anonym, 60 MB mit Anmeldung.' },
        { icon: '⚡', title: 'Wir kodieren neu zu MP3', desc: 'ffmpeg serverseitig, 128 kbps konstante Bitrate, 44,1 kHz, Stereo. Eine 25-MB-WAV (etwa 2 Minuten bei 24-Bit/96 kHz oder 5 Minuten bei 16-Bit/44,1) ist in wenigen Sekunden fertig.' },
        { icon: '⬇️', title: 'MP3 herunterladen', desc: 'Das Ergebnis behält den Originalnamen mit getauschter Endung .mp3. Upload und Ergebnis werden innerhalb einer Stunde von unseren Servern gelöscht.' },
      ]}
      whyUse={{ title: 'Warum WAV zu MP3 konvertieren', bullets: [
        { title: 'WAV-Dateien sind riesig', desc: 'Eine 5-minütige WAV mit 16-Bit/44,1 kHz ist etwa 50 MB groß. Dasselbe Audio als 128-kbps-MP3 sind 5 MB. Für E-Mail, Podcast-Hoster oder das Smartphone wollen Sie MP3.' },
        { title: 'MP3 läuft überall', desc: 'WAV ist auf dem Desktop in Ordnung, aber auf älteren Autoradios, manchen Bluetooth-Lautsprechern und vielen Webplayern unzuverlässig. MP3 funktioniert einfach.' },
        { title: 'Der Qualitätsverlust bei 128 kbps ist beim normalen Hören unhörbar', desc: 'Sie werden zwischen einer 128-kbps-MP3 und der Original-WAV keinen Unterschied hören, es sei denn, Sie mastern Musik auf Studiomonitoren. Für Sprache, Podcast oder Alltagshören ist es der offensichtliche Kompromiss.' },
        { title: 'Kein Wasserzeichen, keine Popups', desc: 'Die MP3 ist einfach Ihr neu kodiertes Audio. Wir fügen kein Intro mit "Converted by..." ein und zeigen kein gefälschtes Popup mit 30 Sekunden Wartezeit.' },
        { title: 'Privatsphäre standardmäßig', desc: 'WAVs aus Feldaufnahmen können sensibel sein. Die Datei landet im Vercel Blob Storage, wird konvertiert und gelöscht. Wir schauen sie nicht an, wir behalten sie nicht.' },
      ]}}
      useCases={{ title: 'Wann Sie WAV zu MP3 konvertieren würden', items: [
        { title: 'Feldaufnahme zur E-Mail-tauglichen Datei', desc: 'Ein Zoom H1n oder ähnlicher Recorder speichert standardmäßig als WAV. Konvertieren Sie zu MP3, bevor Sie an einen Produzenten, Journalisten oder Transkribierer senden.' },
        { title: 'Studio-Export zum handytauglichen Hören', desc: 'Audacity, Reaper, Logic, sie alle exportieren standardmäßig WAV. Exportieren Sie den Rohmix als MP3, um ihn mit Mitarbeitern zu teilen oder unterwegs zu hören.' },
        { title: 'Podcast-Vorbereitung', desc: 'Die meisten Podcast-Hoster (Anchor, Buzzsprout, Transistor) akzeptieren WAV, empfehlen aber MP3, weil der Upload schneller geht und die Bandbreitenkosten geringer sind.' },
        { title: 'Sprachmemo-Aufräumarbeiten', desc: 'Hat Ihr Telefon oder Recorder als WAV gespeichert, konvertieren Sie zu MP3, bevor Sie es in Ihr Notion- oder Notes-Archiv legen. Spart Speicherplatz auf günstige Weise.' },
        { title: 'Audio-Cleanup-Pipeline', desc: 'Sie haben in WAV aufgenommen, geschnitten, und nun soll das Finale eine kleinere MP3 für die Verteilung sein. Das ist der letzte Schritt.' },
      ]}}
      proTips={{ title: 'Tipps für eine saubere WAV-zu-MP3-Konvertierung', tips: [
        { title: '24-Bit-WAV wird genauso konvertiert wie 16-Bit', desc: 'MP3 erhält die Bittiefe oberhalb dessen, was die perceptuelle Kodierung braucht, ohnehin nicht. Eine 24-Bit-WAV bringt Ihnen gegenüber 16-Bit beim Neukodieren auf 128-kbps-MP3 keinen hörbaren Vorteil.' },
        { title: 'Wenn die WAV größer als 25 MB ist, kürzen Sie zuerst', desc: 'Öffnen Sie sie in Audacity (kostenlos) oder QuickTime, schneiden Sie auf den benötigten Teil zu, exportieren Sie als kleinere WAV und konvertieren Sie dann. Oder melden Sie sich für die 60-MB-Grenze an.' },
        { title: 'Mono rein, Mono raus', desc: 'Ist Ihre Quell-WAV Mono (typisch für Sprachaufnahmen), wird die entstehende MP3 ebenfalls Mono sein. Mono-MP3 mit 128 kbps ist übertrieben, aber unser Konverter setzt 128 als Standard, um es einfach zu halten.' },
        { title: 'Für Mastering oder Archivierung kein MP3 verwenden', desc: 'Wenn Sie die Datei als Master für künftiges Re-Mastering aufbewahren, bleiben Sie bei WAV (oder FLAC). MP3 ist ein Verteilungsformat, kein Archivformat.' },
        { title: '320 kbps oder VBR? Öffnen Sie die MP3 danach in Audacity', desc: 'Wir exportieren mit konstanten 128 kbps. Für eine höhere Bitrate oder VBR nehmen Sie die MP3 in Audacity und exportieren neu. Der Qualitätsverlust durch eine zusätzliche Kodierung ist gering.' },
        { title: 'WAVs mit ungewöhnlichen Headern scheitern still', desc: 'Manche BWF-Dateien (Broadcast WAV) haben Header, die ffmpeg nicht lesen kann. Öffnen Sie sie in Audacity, speichern Sie als Standard-WAV und versuchen Sie es erneut.' },
      ]}}
      faq={[
        { q: 'Ist die WAV-zu-MP3-Konvertierung wirklich kostenlos?', a: 'Ja. Kein Konto nötig bis 25 MB, keine Zeitbegrenzung, kein Wasserzeichen auf dem Ergebnis. Display-Werbung auf den Marketingseiten bezahlt den Server.' },
        { q: 'Wie groß darf die Datei maximal sein?', a: '25 MB anonym, 60 MB mit kostenlosem Konto. Eine 25-MB-WAV entspricht etwa 5 Minuten bei 16-Bit/44,1 kHz Stereo oder etwa 2 Minuten bei 24-Bit/96 kHz.' },
        { q: 'Wie lange dauert es?', a: 'Sekunden. Die Konvertierung selbst läuft weit schneller als in Echtzeit. Eine 25-MB-WAV ist in 3 bis 8 Sekunden fertig. Der Flaschenhals ist die Upload-Geschwindigkeit.' },
        { q: 'Welche MP3-Qualität geben Sie aus?', a: '128 kbps konstante Bitrate, 44,1 kHz, gleiche Kanalanzahl wie die Quelle (Mono rein zu Mono raus, Stereo rein zu Stereo raus). Das ist die universelle "gut genug für alles"-Einstellung.' },
        { q: 'Behalten Sie meine Dateien?', a: 'Nein. Der Upload wird direkt nach der Konvertierung gelöscht. Das Ergebnis wird innerhalb einer Stunde durch unseren Cleanup-Cron entfernt. Speichern Sie es lokal.' },
        { q: 'Wird sich die MP3 anders anhören als die WAV?', a: 'Auf den meisten Wiedergabesystemen und bei den meisten Quellen nein. Beim Mastering auf Studiomonitoren mit frischen Ohren vielleicht, aber an dem Punkt würden Sie keinen Web-Konverter nutzen.' },
        { q: 'Kann ich eine höhere Bitrate (256 oder 320 kbps) erhalten?', a: 'Nicht direkt hier. Nehmen Sie unsere 128-kbps-MP3 in Audacity und exportieren Sie neu mit der gewünschten Bitrate. Die doppelte Kodierung fügt vernachlässigbaren hörbaren Verlust hinzu.' },
        { q: 'Was ist mit FLAC statt MP3?', a: 'FLAC ist verlustfreie Kompression, halb so groß wie WAV, kein Qualitätsverlust. Für die Archivierung die bessere Wahl. Wir geben aus diesem Konverter kein FLAC aus, aber unsere Seite /flac-to-mp3 deckt die andere Richtung ab.' },
        { q: 'Meine WAV ist 32-Bit Float. Wird sie konvertiert?', a: 'Ja. ffmpeg verarbeitet 32-Bit-Float-WAV problemlos. Die MP3-Ausgabe ist unabhängig von der Bittiefe der Quelle gleich.' },
        { q: 'Warum bekommt Mono-Audio eine Stereo-MP3?', a: 'Wir behalten das Kanal-Layout der Quelle. Eine Mono-WAV wird zu Mono-MP3. Eine Stereo-WAV wird zu Stereo-MP3. Wir mischen weder hoch noch runter.' },
        { q: 'Funktioniert das für Musik oder nur für Sprache?', a: 'Beides. 128-kbps-MP3 ist für Musik ein leichter perceptueller Kompromiss, geeignet fürs Autohören, Kopfhörer in lauter Umgebung oder Alltagswiedergabe. Für kritisches Musikhören behalten Sie die WAV oder nutzen FLAC.' },
        { q: 'Kann ich im Batch konvertieren?', a: 'Noch nicht. Eine Datei pro Vorgang im kostenlosen Tarif. Batch ist für einen zukünftigen Pro-Tarif geplant.' },
      ]}
      relatedLinks={[
        { href: '/de/mp4-to-mp3', label: 'MP4 zu MP3', desc: 'MP3-Audio aus einer Videodatei ziehen.' },
        { href: '/de/flac-to-mp3', label: 'FLAC zu MP3', desc: 'Verlustfreies FLAC in tragbares MP3 umwandeln.' },
        { href: '/de/mp3-to-wav', label: 'MP3 zu WAV', desc: 'Die Gegenrichtung, unkomprimiertes WAV aus MP3.' },
        { href: '/de/transcribe-audio-to-text', label: 'Audio zu Text', desc: 'Brauchen Sie die Worte, nicht das Audio? Überspringen Sie die MP3 und transkribieren Sie direkt.' },
      ]}
    />
  )
}
