import LandingLayout from '@/components/LandingLayout'
import ConverterZone from '@/components/ConverterZone'

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
  title: 'MP3 zu WAV — kostenloser Online-Konverter | Mictoo',
  description:
    'MP3 zu WAV kostenlos online konvertieren. Komprimierte MP3 zu unkomprimiertem 16-Bit/44,1 kHz WAV für die Audiobearbeitung erweitern. Ohne Anmeldung, ohne Wasserzeichen.',
  alternates: { canonical: 'https://mictoo.com/de/mp3-to-wav', languages: LANGS },

  openGraph: {
    title: "MP3 zu WAV — kostenloser Online-Konverter | Mictoo",
    description: "MP3 zu WAV kostenlos online konvertieren. Komprimierte MP3 zu unkomprimiertem 16-Bit/44,1 kHz WAV für die Audiobearbeitung erweitern. Ohne Anmeldung, ohne Wasserzeichen.",
    url: "https://mictoo.com/de/mp3-to-wav",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MP3 zu WAV — kostenloser Online-Konverter | Mictoo",
    description: "MP3 zu WAV kostenlos online konvertieren. Komprimierte MP3 zu unkomprimiertem 16-Bit/44,1 kHz WAV für die Audiobearbeitung erweitern. Ohne Anmeldung, ohne Wasserzeichen.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function DeMp3ToWavPage() {
  return (
    <LandingLayout
      defaultLanguage="de"
      badge="MP3 → WAV · Kostenlos · Ohne Anmeldung"
      h1={<>MP3 zu WAV<br /><span className="text-brand-600">Kostenloser Online-Konverter</span></>}
      subtitle="Legen Sie eine MP3 ab. Sie erhalten ein 16-Bit/44,1 kHz PCM-WAV, bereit für Audiobearbeitungssoftware. Ohne Wasserzeichen, ohne E-Mail."
      tool={<ConverterZone from="mp3" to="wav" />}
      howItWorks={[
        { icon: '📂', title: 'MP3 ablegen', desc: 'Ziehen Sie die MP3 in das Feld. Dateien bis 25 MB anonym, 60 MB nach Anmeldung.' },
        { icon: '⚡', title: 'ffmpeg dekodiert zu PCM', desc: '16-Bit PCM, 44,1 kHz, Kanal-Layout der Quelle bleibt erhalten. Wenige Sekunden für eine typische Datei.' },
        { icon: '⬇️', title: 'WAV herunterladen', desc: 'Die WAV-Datei ist etwa zehnmal größer als die MP3, da sie unkomprimiert ist. Innerhalb einer Stunde von unseren Servern entfernt.' },
      ]}
      whyUse={{ title: 'Warum MP3 zu WAV konvertieren', bullets: [
        { title: 'Audioeditoren bevorzugen WAV', desc: 'Audacity, Adobe Audition, Logic, Pro Tools, sie alle öffnen MP3, doch die meisten Operationen (präzises Schneiden, Effekte anwenden, Normalisieren) funktionieren auf WAV besser. Die vorherige Konvertierung vermeidet den leichten Qualitätsverlust wiederholter MP3-Kodierungen.' },
        { title: 'Kein zusätzlicher Qualitätsverlust beim Bearbeiten', desc: 'Jede MP3-Neukodierung verschlechtert das Audio leicht. Konvertieren Sie zu WAV, bearbeiten Sie, exportieren Sie am Ende wieder zu MP3, dieser einzelne Round-Trip ist das Beste, was geht.' },
        { title: 'Von mancher alten Hardware und Software vorgeschrieben', desc: 'Manche alte CD-Brennsoftware, Sampler und Aufnahmegeräte lesen nur WAV. Die Konvertierung ist die Brücke.' },
        { title: 'Forensik- und Broadcast-Einsatz', desc: 'Forensische Audioanalyse und Broadcast-Workflows nutzen traditionell WAV, weil das Format gut verstanden und unkomprimiert ist. MP3 ist als Quellmaterial akzeptabel, doch WAV ist das Arbeitsformat.' },
        { title: 'Kein Wasserzeichen, kein Upsell', desc: 'Einfach dekodiertes Audio in einem WAV-Container. Wir fügen nichts hinzu.' },
      ]}}
      useCases={{ title: 'Wann Sie MP3 zu WAV konvertieren würden', items: [
        { title: 'Audio in Audacity, Reaper, Logic bearbeiten', desc: 'Konvertieren Sie zuerst zu WAV, dann Effekte anwenden, schneiden, normalisieren, mischen. Am Ende zu MP3 exportieren, wenn Sie eine kleine Verteilungsdatei brauchen.' },
        { title: 'Mastering für Vinyl oder CD', desc: 'Beim Schneiden von Vinyl und beim CD-Pressen wird verlustfreies Audio gewünscht. Wenn Ihre einzige Quelle MP3 ist, gibt die Konvertierung zu WAV dem Mastering-Engineer etwas zum Arbeiten, auch wenn die Audioqualität durch die MP3-Quelle begrenzt bleibt.' },
        { title: 'Sample-Vorbereitung für einen Sampler', desc: 'Hardware-Sampler (Akai, Korg) wollen oft WAV-Dateien mit bestimmten Bittiefen und Abtastraten.' },
        { title: 'Voiceover-Arbeit für ein Video', desc: 'Manche Videoeditoren (DaVinci, Premiere) verarbeiten MP3 problemlos, zeigen aber bessere Wellenformen und wenden Effekte sauberer auf WAV an.' },
        { title: 'Forensische oder Transkriptionsanalyse', desc: 'Manche spezialisierten Analysetools verlangen WAV als Eingabe.' },
      ]}}
      proTips={{ title: 'Tipps für die MP3-zu-WAV-Konvertierung', tips: [
        { title: 'WAV wird zehnmal so groß wie die MP3', desc: 'Eine 5-MB-MP3 dehnt sich als 16-Bit/44,1 kHz WAV auf etwa 50 MB aus. Die Konvertierung stellt verlorene Qualität nicht wieder her, sie gibt Ihnen nur ein bearbeitbares Format.' },
        { title: 'Die WAV-Qualität ist durch die MP3 begrenzt', desc: 'Sie können eine 128-kbps-MP3 nicht durch die Konvertierung zu WAV nach CD klingen lassen. Die WAV macht nur das vorhandene Audio bearbeitbar, ohne weiteren Kompressionsverlust.' },
        { title: 'Für höhere Treue fragen Sie nach dem Original', desc: 'Wenn Sie ernsthaft mastern oder restaurieren, holen Sie sich das verlustfreie Original (WAV, FLAC, ALAC) von der Quelle. MP3 zu WAV ist ein Workaround, kein Upgrade.' },
        { title: 'Die Abtastrate zählt für die Hardware', desc: 'Die meisten Hardware wollen 44,1 kHz (CD) oder 48 kHz (Video). Unser Konverter gibt immer 44,1 aus. Brauchen Sie 48, öffnen Sie die WAV in Audacity und sampeln Sie neu.' },
        { title: '24-Bit-WAV, nutzen Sie Audacity', desc: 'Unser Konverter gibt 16-Bit-WAV aus. Für 24 Bit öffnen Sie die entstandene WAV in Audacity und exportieren neu mit 24-Bit-Float. Die zusätzliche Bittiefe gibt Bearbeitungs-Headroom, auch wenn das Quell-Audio nur 16-Bit-Äquivalent ist.' },
        { title: 'Mono rein, Mono raus, spart Platz', desc: 'Ist Ihre MP3 Mono, ist die WAV ebenfalls Mono, halb so groß wie eine Stereo-Konvertierung. Wir behalten das Kanal-Layout der Quelle bei.' },
      ]}}
      faq={[
        { q: 'Ist die MP3-zu-WAV-Konvertierung wirklich kostenlos?', a: 'Ja. Kein Konto bis 25 MB, kein Wasserzeichen, keine Zeitbegrenzung.' },
        { q: 'Warum ist die WAV so viel größer als die MP3?', a: 'MP3 nutzt perceptuelle Kompression, um Audiodaten wegzuwerfen, die Ihre Ohren kaum bemerken. WAV speichert jedes Sample mit voller Präzision. Eine typische MP3 ist ein Zehntel der Größe des WAV-Äquivalents.' },
        { q: 'Klingt die WAV besser als die MP3?', a: 'Nein. Die MP3 hat bei ihrer ursprünglichen Kodierung schon Daten verloren. WAV bewahrt das Audio wie es ist, sie stellt keine Qualität wieder her.' },
        { q: 'Welches WAV-Format geben Sie aus?', a: '16-Bit PCM, 44,1 kHz, Kanal-Layout der Quelle bleibt erhalten (Mono rein zu Mono raus, Stereo rein zu Stereo raus).' },
        { q: 'Wie lange dauert es?', a: 'Sekunden. MP3 zu dekodieren ist schnell.' },
        { q: 'Kann ich 24-Bit oder 32-Bit-Float-WAV bekommen?', a: 'Nicht aus diesem Konverter. Öffnen Sie unsere 16-Bit-WAV in Audacity und exportieren mit der gewünschten Bittiefe neu, die zusätzlichen Bits geben Bearbeitungs-Headroom, auch wenn die Präzision des Quell-Audios durch die MP3 begrenzt ist.' },
        { q: 'Behalten Sie meine Dateien?', a: 'Nein. Upload nach der Konvertierung gelöscht. Ausgabe innerhalb einer Stunde entfernt.' },
        { q: 'Kann ich im Batch konvertieren?', a: 'Im kostenlosen Tarif noch nicht. Öffnen Sie mehrere Browser-Tabs.' },
        { q: 'Was ist mit 48 kHz Abtastrate?', a: 'Wir geben 44,1 kHz (CD-Rate) aus. Für 48 kHz (Video-Arbeit) sampeln Sie die WAV nach der Konvertierung in Audacity neu.' },
        { q: 'Warum überhaupt konvertieren?', a: 'Hauptsächlich für die Audiobearbeitung. Audacity, Pro Tools, Logic, sie alle arbeiten auf WAV besser als auf MP3, besonders bei wiederholten Bearbeitungen.' },
        { q: 'Wird die Konvertierung bei manchen MP3s scheitern?', a: 'Selten. ffmpeg dekodiert praktisch jede Standard-MP3. Eine wirklich beschädigte Datei könnte scheitern, ansonsten ist es zuverlässig.' },
        { q: 'Sollte ich beide Dateien behalten?', a: 'Zum Bearbeiten in WAV arbeiten. Zur Verteilung auch die MP3 behalten. Ist die Bearbeitung fertig, am Ende der Kette von WAV zu einer frischen MP3 neu exportieren.' },
      ]}
      relatedLinks={[
        { href: '/de/wav-to-mp3', label: 'WAV zu MP3', desc: 'Die Gegenrichtung.' },
        { href: '/de/flac-to-mp3', label: 'FLAC zu MP3', desc: 'Verlustfreies FLAC zu tragbarer MP3.' },
        { href: '/de/wav-to-text', label: 'WAV zu Text', desc: 'WAV-Audio direkt transkribieren.' },
        { href: '/de/how-to-compress-audio', label: 'Audio komprimieren', desc: 'Für Dateien, die Sie kleiner machen müssen.' },
      ]}
    />
  )
}
