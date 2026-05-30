import LandingLayout from '@/components/LandingLayout'
import ConverterZone from '@/components/ConverterZone'

const LANGS = {
  'en': 'https://mictoo.com/flac-to-mp3',
  'fr': 'https://mictoo.com/fr/flac-to-mp3',
  'de': 'https://mictoo.com/de/flac-to-mp3',
  'es': 'https://mictoo.com/es/flac-to-mp3',
  'ru': 'https://mictoo.com/ru/flac-to-mp3',
  'it': 'https://mictoo.com/it/flac-to-mp3',
  'pt': 'https://mictoo.com/pt/flac-to-mp3',
  'pl': 'https://mictoo.com/pl/flac-to-mp3',
  'ja': 'https://mictoo.com/ja/flac-to-mp3',
  'ko': 'https://mictoo.com/ko/flac-to-mp3',
  'x-default': 'https://mictoo.com/flac-to-mp3',
}

export const metadata = {
  title: 'FLAC zu MP3 — kostenloser Online-Konverter | Mictoo',
  description:
    'FLAC zu MP3 kostenlos online konvertieren. Verlustfreies FLAC in Sekunden auf 128-kbps-MP3 schrumpfen. Ohne Anmeldung, ohne Wasserzeichen. Bis zu 25 MB.',
  alternates: { canonical: 'https://mictoo.com/de/flac-to-mp3', languages: LANGS },

  openGraph: {
    title: "FLAC zu MP3 — kostenloser Online-Konverter | Mictoo",
    description: "FLAC zu MP3 kostenlos online konvertieren. Verlustfreies FLAC in Sekunden auf 128-kbps-MP3 schrumpfen. Ohne Anmeldung, ohne Wasserzeichen. Bis zu 25 MB.",
    url: "https://mictoo.com/de/flac-to-mp3",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FLAC zu MP3 — kostenloser Online-Konverter | Mictoo",
    description: "FLAC zu MP3 kostenlos online konvertieren. Verlustfreies FLAC in Sekunden auf 128-kbps-MP3 schrumpfen. Ohne Anmeldung, ohne Wasserzeichen. Bis zu 25 MB.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function DeFlacToMp3Page() {
  return (
    <LandingLayout
      defaultLanguage="de"
      badge="FLAC → MP3 · Kostenlos · Ohne Anmeldung"
      h1={<>FLAC zu MP3<br /><span className="text-brand-600">Kostenloser Online-Konverter</span></>}
      subtitle="Legen Sie eine FLAC-Datei ab. Sie erhalten eine tragbare MP3, ein Drittel der Größe, läuft überall. Ohne Wasserzeichen, ohne E-Mail."
      tool={<ConverterZone from="flac" to="mp3" />}
      howItWorks={[
        { icon: '📂', title: 'FLAC ablegen', desc: 'Ziehen Sie Ihre FLAC in das Feld. Dateien bis 25 MB anonym, 60 MB mit Anmeldung.' },
        { icon: '⚡', title: 'ffmpeg kodiert neu zu MP3', desc: '128 kbps konstante Bitrate, 44,1 kHz, Kanal-Layout bleibt erhalten. Eine typische 25-MB-FLAC ist in 3 bis 10 Sekunden fertig.' },
        { icon: '⬇️', title: 'MP3 herunterladen', desc: 'Das Ergebnis behält den ursprünglichen Dateinamen mit .mp3. Innerhalb einer Stunde von unseren Servern entfernt.' },
      ]}
      whyUse={{ title: 'Warum FLAC zu MP3 konvertieren', bullets: [
        { title: 'FLAC ist verlustfrei, aber riesig', desc: 'Eine 5-minütige FLAC bei typischen Bitraten ist 25 bis 40 MB groß. Dasselbe Audio als 128-kbps-MP3 sind 5 MB. Für Handys, Autos und Bluetooth zählt diese Größe.' },
        { title: 'Die meisten Autoradios und Bluetooth-Lautsprecher spielen kein FLAC ab', desc: 'Selbst 2026 ist die werkseitige Auto-Infotainment-Anlage und viele Mittelklasse-Bluetooth-Geräte MP3-oder-nichts. MP3 funktioniert einfach.' },
        { title: 'Bei 128 kbps ist der Qualitätsverlust für fast jeden unhörbar', desc: 'Auf Consumer-Kopfhörern, im Auto, auf Handy-Lautsprechern wird niemand den Unterschied bemerken. Der Kompromiss zeigt sich nur auf Studiomonitoren beim kritischen Hören.' },
        { title: 'iPods, alte MP3-Player, einfache Musik-Apps, MP3 gewinnt', desc: 'Wenn Sie Musik auf etwas Älteres als ein aktuelles iPhone laden, ist MP3 die sicherere Wahl. FLAC-Unterstützung auf älterer Hardware ist Glückssache.' },
        { title: 'Kein Wasserzeichen, kein Upsell', desc: 'Einfach Ihr neu kodiertes Audio. Wir mischen nichts ein.' },
      ]}}
      useCases={{ title: 'Wann Sie FLAC zu MP3 konvertieren würden', items: [
        { title: 'Bandcamp- oder Qobuz-Download zur Handy-Bibliothek', desc: 'Bandcamp liefert bei bezahlten Downloads standardmäßig FLAC. Konvertieren Sie zu MP3, damit eine Musiksammlung auf ein Handy passt oder mit einem Autosystem synchronisiert, das kein FLAC verarbeitet.' },
        { title: 'CD-Rip zur tragbaren Bibliothek', desc: 'Wenn Sie CDs zur Archivierung als FLAC gerippt haben, konvertieren Sie jedes Album zu MP3 für den Alltag. Behalten Sie die FLACs als Master.' },
        { title: 'Studio-Export zur Verteilung', desc: 'Ihr Musikproduzent schickt Ihnen vielleicht FLAC. Konvertieren Sie zu MP3 für Podcast-Hoster, Webplayer oder einfach, um den Rohmix einem Mitarbeiter zu mailen.' },
        { title: 'Feldaufnahmen zur schnellen Weitergabe', desc: 'Feldrecorder wie der Tascam DR-40X oder Zoom F3 können in FLAC aufnehmen. Konvertieren Sie, bevor Sie an einen Produzenten oder Sound-Editor weitergeben, der mit MP3 arbeitet.' },
        { title: 'Bibliothek aufräumen', desc: 'Beim Aufräumen einer alten Festplatte voller FLACs: Originale auf einem NAS behalten, zu MP3 konvertieren für die aktive Nutzung.' },
      ]}}
      proTips={{ title: 'Tipps für eine saubere FLAC-zu-MP3-Konvertierung', tips: [
        { title: 'FLAC ist verlustfrei, die erste Kodierung ist also in Ordnung', desc: 'Es gibt keinen Qualitätsverlust, wenn Sie einmal von FLAC zu MP3 wechseln. Artefakte hören Sie erst, wenn Sie die MP3 erneut kodieren oder von MP3 zu anderen verlustbehafteten Formaten wechseln.' },
        { title: 'Für audiophile Nutzung behalten Sie die FLAC', desc: 'Wenn Sie auf High-End-Kopfhörern, an einem dedizierten DAC oder beim kritischen Hören hören, lohnt sich das Behalten der FLAC. MP3 ist für Verteilung und Alltagsnutzung.' },
        { title: 'Tags werden nicht immer übernommen', desc: 'FLAC-Tags (Vorbis-Kommentare) und MP3-Tags (ID3) sind verschiedene Formate. Unser Konverter überträgt Cover-Art und detaillierte Metadaten nicht zwischen ihnen. Fügen Sie Tags selbst in MusicBrainz Picard oder Mp3tag nach der Konvertierung hinzu.' },
        { title: '24-Bit/96 kHz FLAC wird genauso konvertiert wie 16-Bit/44,1', desc: 'MP3 ist effektiv bei 16-Bit/48 kHz ausgereizt. Zusätzliche Bittiefe und Abtastrate in der Quelle überstehen die MP3-Kodierung nicht, schaden aber auch nicht.' },
        { title: 'Für verlustfreie Konvertierung nutzen Sie stattdessen ALAC', desc: 'Wenn Sie verlustfreies Audio brauchen, das in iTunes/Apple Music läuft, konvertieren Sie FLAC stattdessen zu ALAC (Apple Lossless), gleiche Audioqualität, etwa halbes FLAC bei Metadaten-Fußabdruck, läuft nativ im Apple-Ökosystem.' },
        { title: 'Für höhere MP3-Bitrate erneut aus Audacity exportieren', desc: 'Unser Konverter gibt 128 kbps aus. Für 320 kbps öffnen Sie die MP3 in Audacity (kostenlos) und exportieren neu. Die doppelte Kodierung ist kaum hörbar.' },
      ]}}
      faq={[
        { q: 'Ist die FLAC-zu-MP3-Konvertierung wirklich kostenlos?', a: 'Ja. Kein Konto bis 25 MB, kein Wasserzeichen, keine Zeitbegrenzung. Display-Werbung auf Marketingseiten deckt die Serverkosten.' },
        { q: 'Wie groß darf die Datei maximal sein?', a: '25 MB anonym, 60 MB mit kostenlosem Konto. Ein typischer 5-minütiger Song als FLAC ist 30 bis 40 MB, für ganze Alben müssen Sie also Spur für Spur konvertieren.' },
        { q: 'Werde ich einen Qualitätsunterschied hören?', a: 'Auf Handy-Lautsprechern, im Auto, auf günstigen Kopfhörern nein. Auf Studiomonitoren beim kritischen Hören möglicherweise. Der Kompromiss ist angemessen für alles außer Mastering und audiophiler Wiedergabe.' },
        { q: 'Werden Cover-Art und Metadaten übernommen?', a: 'Teilweise. Grundlegende Tags (Künstler, Titel, Album) werden meist übernommen. Cover-Art und detaillierte Vorbis-Kommentare oft nicht. Nutzen Sie MusicBrainz Picard oder Mp3tag nach der Konvertierung für saubere Tags.' },
        { q: 'Welche MP3-Qualität geben Sie aus?', a: '128 kbps konstante Bitrate, 44,1 kHz, behält das Kanal-Layout der Quelle bei.' },
        { q: 'Wie lange dauert es?', a: 'Sekunden. Eine 25-MB-FLAC konvertiert in 3 bis 10 Sekunden. Der Upload ist der Flaschenhals.' },
        { q: 'Behalten Sie meine Dateien?', a: 'Nein. Upload nach der Konvertierung gelöscht. Ausgabe innerhalb einer Stunde durch unseren Cleanup-Cron entfernt.' },
        { q: 'Kann ich ein ganzes Album im Batch konvertieren?', a: 'Noch nicht, kostenloser Tarif ist eine Datei pro Vorgang. Öffnen Sie mehrere Browser-Tabs als Workaround.' },
        { q: 'Klingt meine 24-Bit/96 kHz FLAC genauso wie die MP3?', a: 'Bei Consumer-Wiedergabe fast sicher. Die 24 Bit und die hohe Abtastrate sind wichtig für Bearbeitung und Mastering, nicht für das Hören über MP3-Audioketten.' },
        { q: 'Sollte ich stattdessen zu ALAC konvertieren?', a: 'Wenn Sie verlustfreies Audio in Apple Music oder iTunes brauchen, ja, ALAC ist das Apple-Äquivalent zu FLAC. Wir geben kein ALAC aus, aber Audacity schon.' },
        { q: 'Meine FLAC stammt aus einem Hi-Res-Download. Lohnt sich die Konvertierung?', a: 'Beim Hören auf Handy oder im Auto klingt die MP3 identisch. Behalten Sie das Original für jede künftige Bearbeitung.' },
        { q: 'Kann ich mehr als 128 kbps bekommen?', a: 'Nicht aus diesem Konverter. Kodieren Sie die MP3 in Audacity mit Ihrer bevorzugten Bitrate neu.' },
      ]}
      relatedLinks={[
        { href: '/de/wav-to-mp3', label: 'WAV zu MP3', desc: 'Verlustfreies WAV zu MP3 konvertieren.' },
        { href: '/de/mp3-to-wav', label: 'MP3 zu WAV', desc: 'Die Gegenrichtung, MP3 zu unkomprimiertem WAV erweitert.' },
        { href: '/de/flac-to-text', label: 'FLAC zu Text', desc: 'FLAC-Audio direkt zu Text transkribieren.' },
        { href: '/de/how-to-compress-audio', label: 'Audio komprimieren', desc: 'Wenn die MP3 noch kleiner sein muss.' },
      ]}
    />
  )
}
