import LandingLayout from '@/components/LandingLayout'
import ConverterZone from '@/components/ConverterZone'

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
  title: 'MP4 zu MP3 — kostenloser Online-Konverter | Mictoo',
  description:
    'MP4 zu MP3 kostenlos online konvertieren. Video ablegen, in Sekunden eine saubere MP3-Audiodatei mit 128 kbps erhalten. Ohne Anmeldung, ohne Wasserzeichen, ohne E-Mail. Bis zu 25 MB.',
  alternates: { canonical: 'https://mictoo.com/de/mp4-to-mp3', languages: LANGS },

  openGraph: {
    title: "MP4 zu MP3 — kostenloser Online-Konverter | Mictoo",
    description: "MP4 zu MP3 kostenlos online konvertieren. Video ablegen, in Sekunden eine saubere MP3-Audiodatei mit 128 kbps erhalten. Ohne Anmeldung, ohne Wasserzeichen, ohne E-Mail. Bis zu 25 MB.",
    url: "https://mictoo.com/de/mp4-to-mp3",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MP4 zu MP3 — kostenloser Online-Konverter | Mictoo",
    description: "MP4 zu MP3 kostenlos online konvertieren. Video ablegen, in Sekunden eine saubere MP3-Audiodatei mit 128 kbps erhalten. Ohne Anmeldung, ohne Wasserzeichen, ohne E-Mail. Bis zu 25 MB.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function DeMp4ToMp3Page() {
  return (
    <LandingLayout
      defaultLanguage="de"
      badge="MP4 → MP3 · Kostenlos · Ohne Anmeldung"
      h1={<>MP4 zu MP3<br /><span className="text-brand-600">Kostenloser Online-Konverter</span></>}
      subtitle="Legen Sie ein MP4-Video ab. Sie erhalten eine MP3-Audiodatei. Ohne Wasserzeichen, ohne E-Mail, ohne Wartezimmer. Serverseitig durch ffmpeg verarbeitet, in Sekunden fertig."
      tool={<ConverterZone from="mp4" to="mp3" />}
      howItWorks={[
        { icon: '📂', title: 'MP4 ablegen', desc: 'Ziehen Sie ein beliebiges MP4-Video in das Feld oder klicken Sie, um eines auszuwählen. Dateien bis 25 MB laufen anonym durch. Melden Sie sich an, wenn Sie 60 MB benötigen.' },
        { icon: '⚡', title: 'Wir extrahieren das Audio', desc: 'ffmpeg läuft serverseitig, entfernt den Videostream und kodiert das Audio neu als 128 kbps Stereo-MP3 bei 44,1 kHz. Ein 25-MB-Video ist meist in 5 bis 15 Sekunden fertig.' },
        { icon: '⬇️', title: 'MP3 herunterladen', desc: 'Der Download-Button liefert Ihnen die Datei mit dem ursprünglichen Namen und der Endung .mp3. Upload und Ergebnis werden innerhalb einer Stunde von unseren Servern gelöscht.' },
      ]}
      whyUse={{ title: 'Warum Mictoo für MP4 zu MP3', bullets: [
        { title: 'Nur die Konvertierung. Sonst nichts', desc: 'Keine Popups, keine Countdown-Timer, kein gefälschter "Gratis"-Tarif, der zum Bezahlen drängt. Ablegen, konvertieren, herunterladen.' },
        { title: '128 kbps MP3, klein und universell', desc: 'Diese Bitrate ist der praktische Sweet Spot für Sprachaufnahmen: etwa 1 MB pro Minute, läuft überall, klingt sauber. Wir bieten keine Qualitätsauswahl an, weil Optionen Reibung erzeugen und für den typischen Anwendungsfall keinen Mehrwert bringen.' },
        { title: 'Dateien bleiben nicht auf unseren Servern', desc: 'Ihr MP4 landet im Vercel Blob Storage, wird konvertiert und sofort gelöscht. Die MP3 selbst wird durch unsere stündliche Bereinigung entfernt. Speichern Sie eine lokale Kopie.' },
        { title: 'Kein Wasserzeichen, kein Audio-Tag', desc: 'Viele kostenlose Konverter mischen ein eigenes "Converted by FreeMP3.com"-Intro ein. Wir fassen das Audio außer der Neukodierung nicht an.' },
        { title: 'Die meisten anderen Gratis-Konverter sind ein Werbenetzwerk im Tarnmantel', desc: 'Viele Seiten, die man bei Google für "mp4 to mp3" findet, sind AdSense-Türöffner, die den Zurück-Button kapern oder gefälschte Viruswarnungen auslösen. Wir sind ein unabhängiges SEO-Projekt, finanziert durch Display-Werbung auf den Marketingseiten, nicht im Konvertierungsablauf.' },
      ]}}
      useCases={{ title: 'Wann Sie MP4 zu MP3 konvertieren würden', items: [
        { title: 'Einen Podcast sichern, den Sie als Video haben', desc: 'Viele Podcast-Feeds werden auch als YouTube-Uploads oder Vimeo-MP4s veröffentlicht. Wenn Sie nur die Videoversion haben, macht MP3 sie handytauglich und zehnmal kleiner.' },
        { title: 'Musik oder Audio aus einer Vorlesungsaufnahme ziehen', desc: 'Zoom und Teams exportieren MP4. Sie brauchen nur das Audio, wenn Sie unterwegs hören, transkribieren oder es in eine Schnittsoftware einspeisen wollen.' },
        { title: 'Ein 1-GB-Video schrumpfen, damit Sie es per E-Mail senden können', desc: 'Ein einstündiges Video in 1080p kann leicht 1 GB erreichen. Das Audio derselben Aufnahme liegt bei voller Qualität bei 30 bis 60 MB, mit 128 kbps oft unter 30 MB. Plötzlich versendbar.' },
        { title: 'In eine Transkription einspeisen, die Audio erwartet', desc: 'Unser eigenes Transkriptionstool akzeptiert MP4 direkt, doch Drittanbieter-Tools, Audioeditoren und DAWs wollen meist reines Audio. MP3 ist der kleinste gemeinsame Nenner.' },
        { title: 'Hintergrundmusik für einen Screencast oder eine Diashow', desc: 'Viele MP4s in YouTube-Tutorials enthalten Musik oder Erzählung, die Sie als eigenständigen Clip nutzen möchten. Konvertieren und in iMovie, Audacity oder Logic einfügen.' },
      ]}}
      proTips={{ title: 'Tipps für eine saubere MP4-zu-MP3-Konvertierung', tips: [
        { title: 'Wenn das MP4 riesig ist, kürzen Sie es zuerst', desc: 'Unsere Grenze liegt bei 25 MB ohne Anmeldung, 60 MB mit. Ein 1080p-Video deutlich über zehn Minuten passt nicht hinein. Öffnen Sie es in QuickTime (Mac) oder der Fotos-App (Windows), kürzen Sie auf den nötigen Teil und exportieren Sie neu.' },
        { title: '128 kbps ist für Sprache übertrieben, für Musik genau richtig', desc: 'Für Sprache wäre eine MP3 mit 64 kbps halb so groß ohne hörbaren Verlust. Wir setzen 128 kbps als Standard, weil die meisten Nutzer nicht wissen, was im Video steckt, und 128 für beides sauber klingt.' },
        { title: 'Hat das Quellvideo mehrere Audiospuren, läuft nur die Standardspur', desc: 'Filme, DVD-Rips und manche Vorlesungsexporte enthalten mehrere Sprachspuren. Unser Konverter nimmt die Standardspur. Brauchen Sie die zweite Spur, ändern Sie die Standardauswahl im Videoeditor und exportieren Sie das MP4 vor dem Upload neu.' },
        { title: 'Alte MP4s von Camcordern lassen sich eventuell nicht dekodieren', desc: 'AVCHD und andere MP4s aus der Camcorder-Ära nutzen manchmal Codecs, die ffmpeg ohne zusätzliche Bibliotheken nicht lesen kann. Schlägt die Konvertierung fehl, öffnen Sie die Datei in HandBrake (kostenlos, alle Plattformen), exportieren sie als Standard-H.264-MP4 und versuchen es erneut.' },
        { title: 'Brauchen Sie 320 kbps oder VBR? Nutzen Sie danach Audacity', desc: 'Unsere MP3 hat konstante 128 kbps. Wenn Sie eine höhere Bitrate oder eine VBR-Datei brauchen, öffnen Sie die MP3 in Audacity (ebenfalls kostenlos) und exportieren mit Ihren bevorzugten Einstellungen. Der Qualitätsverlust durch die Neukodierung bei höherer Bitrate ist vernachlässigbar.' },
        { title: 'Bei geschützten Inhalten (iTunes-Filme, DRM) schlägt es fehl', desc: 'DRM-geschützte MP4s können von ffmpeg nicht gelesen werden. Wir entschlüsseln keine urheberrechtlich geschützten Inhalte. Stammt die Datei von einem Streamingdienst, haben Sie wahrscheinlich nicht das Recht zur Konvertierung.' },
      ]}}
      faq={[
        { q: 'Ist der MP4-zu-MP3-Konverter wirklich kostenlos?', a: 'Ja. Kein Konto nötig für Dateien bis 25 MB, keine Zeitbegrenzung, kein Wasserzeichen auf dem Ergebnis, kein "erste Konvertierung gratis, dann Upgrade"-Trick. Wir decken die Serverkosten durch Display-Werbung auf den Marketingseiten (nicht im Konverter selbst).' },
        { q: 'Wie groß darf die Datei maximal sein?', a: '25 MB ohne Konto, 60 MB mit Anmeldung (kostenlos). Das Funktionsbudget von Vercel ist die echte Grenze. Wir bleiben darunter, damit jede Konvertierung in unter 60 Sekunden fertig ist.' },
        { q: 'Wie lange dauert die Konvertierung?', a: 'Bei einem typischen MP4 von 10 bis 20 MB (ein paar Videominuten) dauert es 5 bis 15 Sekunden. Der Flaschenhals ist Ihre Upload-Geschwindigkeit, nicht die Konvertierung. ffmpeg arbeitet die Audio-Neukodierung deutlich schneller als in Echtzeit ab.' },
        { q: 'Welche Qualität hat die MP3?', a: '128 kbps konstante Bitrate, 44,1 kHz, Stereo. Das ist die universelle "gut genug für alles"-Einstellung: für die meisten Ohren bei Sprache und Musik vom Original kaum zu unterscheiden, etwa 1 MB pro Audiominute.' },
        { q: 'Behalten Sie meine Dateien?', a: 'Nein. Ihr Upload liegt im Vercel Blob Storage nur lange genug für die Konvertierung, dann löschen wir ihn. Die entstandene MP3 wird innerhalb einer Stunde durch unseren Cleanup-Cron entfernt. Speichern Sie die MP3 lokal, wir können sie nicht erneut versenden.' },
        { q: 'Enthält das Ergebnis ein Wasserzeichen oder Audio-Tag?', a: 'Nein. Wir mischen keine "Converted by Mictoo"-Intros oder Marken-Outros ein. Die MP3 ist einfach das neu kodierte Original-Audio.' },
        { q: 'Kann ich damit YouTube-Videos konvertieren?', a: 'Sie können jede MP4-Datei konvertieren, an der Sie die Rechte haben. Wir laden keine Videos von YouTube herunter, das würde uns auf die falsche Seite der YouTube-Nutzungsbedingungen bringen. Nutzen Sie ein Tool wie 4K Video Downloader oder yt-dlp, um das MP4 lokal zu speichern, und legen Sie es dann hier ab.' },
        { q: 'Warum ist das Format auf MP4 beschränkt?', a: 'Jeder Konverter ist eine URL mit einer Aufgabe. MP4 zu MP3 liegt unter /mp4-to-mp3, WAV zu MP3 unter /wav-to-mp3 und so weiter. Die richtige Auswahl sagt uns, was zu erwarten ist, und gibt Google eine saubere Seite zum Ranken.' },
        { q: 'Mein MP4 ist mit "unsupported codec" gescheitert. Was nun?', a: 'Ältere Camcorder-MP4s und manche DRM-geschützten Dateien nutzen Codecs, die ffmpeg von Haus aus nicht dekodieren kann. Öffnen Sie die Datei in HandBrake (kostenlos), exportieren Sie als Standard-H.264-MP4 und versuchen es erneut. Scheitert es weiterhin, ist die Datei wahrscheinlich DRM-gesperrt.' },
        { q: 'Funktioniert das auf dem Handy?', a: 'Ja. Die Seite ist mobil optimiert und Uploads funktionieren aus iOS-Safari und Android-Chrome. Auf dem iPhone müssen Sie das Video möglicherweise zuerst in Dateien teilen, damit der Dateiauswahldialog es erreichen kann.' },
        { q: 'Sind MP3s verlustbehaftet? Sollte ich mir Sorgen machen?', a: 'Ja, MP3 ist verlustbehaftet. Bei 128 kbps ist der Verlust für fast alle Hörer bei fast jedem Quellmaterial unhörbar. Wenn Sie verlustfrei brauchen (etwa fürs Musik-Mastering), konvertieren Sie MP4 stattdessen zu WAV.' },
        { q: 'Warum kein Batch-Upload?', a: 'Im kostenlosen Tarif ist eine Datei pro Vorgang möglich. Batch steht auf der Roadmap für den Pro-Tarif, wenn er startet. Vorerst können Sie mehrere Konvertierungen in parallelen Browser-Tabs laufen lassen.' },
      ]}
      relatedLinks={[
        { href: '/de/wav-to-mp3', label: 'WAV zu MP3', desc: 'Verlustfreie WAV-Dateien zu kompakten MP3s schrumpfen.' },
        { href: '/de/webm-to-mp3', label: 'WEBM zu MP3', desc: 'MP3 aus einem WEBM ziehen (was YouTube-Downloader oft liefern).' },
        { href: '/de/transcribe-video-to-text', label: 'Video zu Text', desc: 'Den MP3-Schritt überspringen, direkt zum Texttranskript des Videos.' },
        { href: '/de/how-to-compress-audio', label: 'Audio komprimieren', desc: 'Wenn Ihre MP3 immer noch zu groß zum Teilen ist.' },
      ]}
    />
  )
}
