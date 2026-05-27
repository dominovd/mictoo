import LandingLayout from '@/components/LandingLayout'
import ConverterZone from '@/components/ConverterZone'

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
  title: 'WEBM zu MP3 — kostenloser Online-Konverter | Mictoo',
  description:
    'WEBM zu MP3 kostenlos online konvertieren. MP3-Audio aus jedem WEBM-Video oder jeder WEBM-Audiodatei in Sekunden ziehen. Ohne Anmeldung, ohne Wasserzeichen. Bis zu 25 MB.',
  alternates: { canonical: 'https://mictoo.com/de/webm-to-mp3', languages: LANGS },
}

export default function DeWebmToMp3Page() {
  return (
    <LandingLayout
      defaultLanguage="de"
      badge="WEBM → MP3 · Kostenlos · Ohne Anmeldung"
      h1={<>WEBM zu MP3<br /><span className="text-brand-600">Kostenloser Online-Konverter</span></>}
      subtitle="Legen Sie eine WEBM-Datei ab (das Format, das Browser-Recorder, YouTube-Downloader und Bildschirmaufnahme-Tools gerne speichern). Sie erhalten eine saubere MP3. Ohne Wasserzeichen, ohne E-Mail."
      tool={<ConverterZone from="webm" to="mp3" />}
      howItWorks={[
        { icon: '📂', title: 'WEBM ablegen', desc: 'Audio-only oder Video-WEBM, beides funktioniert. Bis 25 MB anonym, 60 MB nach Anmeldung.' },
        { icon: '⚡', title: 'Wir extrahieren und kodieren neu', desc: 'ffmpeg zieht den Audiostream (Opus oder Vorbis) aus dem WEBM-Container und kodiert ihn zu 128-kbps-MP3 bei 44,1 kHz neu. Typisch 3 bis 10 Sekunden.' },
        { icon: '⬇️', title: 'MP3 herunterladen', desc: 'Die Ausgabe behält den Originalnamen mit .mp3. Dateien werden innerhalb einer Stunde von unseren Servern entfernt.' },
      ]}
      whyUse={{ title: 'Warum WEBM zu MP3 konvertieren', bullets: [
        { title: 'WEBM ist im Browser super, sonst überall schlecht', desc: 'iPhones spielen kein WEBM ab. Die meisten Autoradios auch nicht. Viele ältere Bluetooth-Lautsprecher ebenfalls nicht. MP3 läuft auf allem, was Sie kennen.' },
        { title: 'Sprachmemo-Apps und Browser-Recorder speichern WEBM', desc: 'Web-basierte Aufnahmetools (Loom, die MDN MediaRecorder API, Browser-Audiorecorder) bevorzugen WEBM, weil Chrome und Firefox es nativ unterstützen. Möchten Sie die Aufnahme weiterleiten, ist MP3 das sicherere Format.' },
        { title: 'YouTube-Downloader liefern standardmäßig WEBM', desc: 'Wenn Sie in 4K Video Downloader oder yt-dlp "nur Audio" wählen, ohne ein Format anzugeben, bekommen Sie oft eine WEBM-Opus-Datei. Die Konvertierung zu MP3 macht sie auf iOS und in Audio-Editoren abspielbar.' },
        { title: 'Opus ist technisch besser, doch Kompatibilität gewinnt', desc: 'Der Opus-Codec im WEBM-Container ist Byte für Byte besser als MP3. Aber wenn Ihr Publikum es nicht abspielen kann, spielt das keine Rolle. MP3 ist die Lingua franca.' },
        { title: 'Kein Wasserzeichen, kein Upsell', desc: 'Die MP3 ist einfach das neu kodierte Audio. Wir fügen weder Intro noch Tag noch "Pro kaufen"-Overlay auf der Ergebnisseite hinzu.' },
      ]}}
      useCases={{ title: 'Wann Sie WEBM zu MP3 konvertieren würden', items: [
        { title: 'Browser-Audioaufnahme zur tragbaren Datei', desc: 'Sie haben einen Web-basierten Recorder genutzt (integriertes Mikrofontool, Online-Sprachrecorder etc.) und eine WEBM erhalten. Konvertieren Sie zu MP3, um sie in Ihren Podcast-Editor zu ziehen oder an einen Transkribierer zu senden.' },
        { title: 'Loom- oder Vidyard-Download zum reinen Audioclip', desc: 'Loom-Downloads können WEBM sein. Wenn Sie nur das Audio der Aufnahme brauchen, konvertieren Sie und speichern die kleinere Datei.' },
        { title: 'YouTube-Audio-Download in universellem Format', desc: 'Wenn Sie Audio-only von YouTube mit einem Downloader herunterladen, der standardmäßig Opus/WEBM nutzt, macht die MP3-Konvertierung die Datei überall abspielbar.' },
        { title: 'Bildschirmaufnahme nur mit der Erzählung', desc: 'OBS, der eingebaute Bildschirmrecorder von Chrome und ähnliche Tools geben oft WEBM aus. Möchten Sie nur den Voiceover für Transkription oder einen Podcast, konvertieren Sie.' },
        { title: 'WebRTC-Anrufaufzeichnungen', desc: 'Manche Videokonferenz-Tools nehmen in WEBM auf. Konvertieren Sie, bevor Sie an Kunden senden oder in einem CRM speichern, das MP3 erwartet.' },
      ]}}
      proTips={{ title: 'Tipps für eine saubere WEBM-zu-MP3-Konvertierung', tips: [
        { title: 'WEBM mit VP9-Video ist in Ordnung, wir ignorieren den Videostream', desc: 'Sie können ein Video-WEBM (VP9 + Opus) in den Konverter legen. Wir entfernen das Video und behalten nur Audio. Das Ergebnis ist genauso groß wie bei einer reinen Audio-Datei.' },
        { title: 'Opus-Audio dekodiert in ffmpeg verlustfrei', desc: 'Es gibt kein Problem mit doppeltem Verlust beim Wechsel Opus zu MP3. Nur die perceptuelle Kodierung der MP3 bei 128 kbps beeinflusst das Ergebnis, nicht die Tatsache, dass die Eingabe ein verlustbehaftetes Format ist.' },
        { title: 'Für Sprache reicht Mono, wir behalten aber Stereo', desc: 'Unser Konverter behält das Kanal-Layout der Quelle. Ist Ihr WEBM Mono (typisch für Sprachaufnahmen), ist die MP3 Mono. Wir mischen nicht hoch.' },
        { title: 'Schlägt die Konvertierung fehl, ist das WEBM wahrscheinlich unvollständig', desc: 'WEBM-Streams werden manchmal mittendrin abgeschnitten, sodass der Container halb kaputt ist. Öffnen Sie ihn in VLC und exportieren als neues WEBM, oder in einem Videoeditor, und versuchen Sie es erneut.' },
        { title: 'Für YouTube-Downloads M4A bevorzugen, wenn Ihr Downloader es unterstützt', desc: 'Wenn Sie den Download steuern, überspringt die Wahl von M4A (AAC in einem MP4-Container) diesen Schritt komplett, M4A läuft überall dort, wo MP3 läuft. Nutzen Sie in 4K Video Downloader die Option "M4A".' },
        { title: 'Verschlüsselte WEBMs aus DRM scheitern', desc: 'Manche Streamingdienste nutzen WEBM mit DRM. ffmpeg kann sie nicht entschlüsseln, und wir auch nicht. Das Original-WEBM muss ungeschützt sein.' },
      ]}}
      faq={[
        { q: 'Ist die WEBM-zu-MP3-Konvertierung wirklich kostenlos?', a: 'Ja. Kein Konto bis 25 MB, kein Wasserzeichen, kein zeitlich begrenzter "Test". Display-Werbung auf den Marketingseiten deckt die Serverkosten.' },
        { q: 'Wie groß darf die Datei maximal sein?', a: '25 MB anonym, 60 MB mit kostenlosem Konto. WEBM ist effizient, 25 MB entsprechen meist 20 bis 40 Minuten Audio.' },
        { q: 'Kann ich WEBM-Video zu MP3 konvertieren?', a: 'Ja. Wir entfernen den Videostream und geben nur das Audio aus. Die MP3 ist gleich groß, egal ob die Quelle Video- oder Audio-WEBM war.' },
        { q: 'Klingt die MP3 schlechter als die WEBM?', a: 'Theoretisch leicht. Opus bei gleicher Bitrate ist besser als MP3. Bei 128 kbps ist der Unterschied für nahezu alle Hörer und bei nahezu jedem Material unhörbar.' },
        { q: 'Wie lange dauert es?', a: 'Sekunden. Eine 25-MB-WEBM-Datei konvertiert in 3 bis 10 Sekunden. Der Flaschenhals ist die Upload-Geschwindigkeit.' },
        { q: 'Welche MP3-Einstellungen nutzen Sie?', a: '128 kbps konstante Bitrate, 44,1 kHz, behält das Kanal-Layout der Quelle bei (Mono rein zu Mono raus, Stereo rein zu Stereo raus).' },
        { q: 'Behalten Sie meine Dateien?', a: 'Nein. Der Upload wird nach der Konvertierung gelöscht. Die Ausgabe wird innerhalb einer Stunde entfernt. Speichern Sie sie lokal.' },
        { q: 'Mein WEBM von Loom ist gescheitert. Warum?', a: 'Manche Loom-Downloads verwenden ein fragmentiertes MP4 innerhalb eines WEBM-Containers oder haben nicht standardisierte Header. Öffnen Sie es in VLC, exportieren Sie erneut und versuchen Sie es noch einmal. Oder laden Sie aus Loom direkt als MP4 herunter, wenn die Option vorhanden ist.' },
        { q: 'Funktioniert das speziell für Opus-Dateien?', a: 'Wenn Ihre Datei auf .opus statt .webm endet, benennen Sie sie zuerst in .webm um. Der Container ist funktional derselbe, und ffmpeg liest sie identisch.' },
        { q: 'Kann ich damit YouTube-Videos herunterladen?', a: 'Nein. Wir holen keine URLs ab. Nutzen Sie eine Downloader-App (4K Video Downloader, yt-dlp, ClipGrab), um das WEBM zuerst lokal zu speichern, und legen Sie es dann hier ab.' },
        { q: 'Spielt iPhone oder iTunes die Ausgabe ab?', a: 'Ja. MP3 läuft überall, einschließlich aller Apple-Geräte und -Software.' },
        { q: 'Warum konvertieren statt einfach WEBM zu behalten?', a: 'WEBM ist in Chrome und Firefox in Ordnung, doch iOS, viele Autoradios, ältere Bluetooth-Lautsprecher und viele professionelle Audiosoftware kommen damit nicht klar. MP3 ist universell.' },
      ]}
      relatedLinks={[
        { href: '/de/mp4-to-mp3', label: 'MP4 zu MP3', desc: 'Gleiche Idee, MP4-Quelle statt WEBM.' },
        { href: '/de/wav-to-mp3', label: 'WAV zu MP3', desc: 'Verlustfreies WAV zu tragbarer MP3.' },
        { href: '/de/webm-to-text', label: 'WEBM zu Text', desc: 'MP3 überspringen, direkt zum Transkript.' },
        { href: '/de/how-to-compress-audio', label: 'Audio komprimieren', desc: 'Wenn die MP3 immer noch zu groß zum Teilen ist.' },
      ]}
    />
  )
}
