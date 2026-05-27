import LandingLayout from '@/components/LandingLayout'
import ConverterZone from '@/components/ConverterZone'

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
  title: 'MP3 zu M4A — kostenloser Online-Konverter | Mictoo',
  description:
    'MP3 zu M4A kostenlos online konvertieren. MP3 zu AAC in einem M4A-Container für iPhone, iTunes und das Apple-Ökosystem neu kodieren. Ohne Anmeldung, ohne Wasserzeichen.',
  alternates: { canonical: 'https://mictoo.com/de/mp3-to-m4a', languages: LANGS },
}

export default function DeMp3ToM4aPage() {
  return (
    <LandingLayout
      defaultLanguage="de"
      badge="MP3 → M4A · Kostenlos · Ohne Anmeldung"
      h1={<>MP3 zu M4A<br /><span className="text-brand-600">Kostenloser Online-Konverter</span></>}
      subtitle="Legen Sie eine MP3 ab. Sie erhalten ein M4A, AAC-Audio in einem MP4-Container. Läuft nativ in iTunes, Apple Music und auf jedem iPhone. Ohne Wasserzeichen, ohne E-Mail."
      tool={<ConverterZone from="mp3" to="m4a" />}
      howItWorks={[
        { icon: '📂', title: 'MP3 ablegen', desc: 'Ziehen Sie eine beliebige MP3 in das Feld. Bis 25 MB anonym, 60 MB nach Anmeldung.' },
        { icon: '⚡', title: 'ffmpeg kodiert neu zu AAC', desc: '128 kbps AAC in einem M4A-Container, mit dem Faststart-Flag, sodass es beim Streaming sofort abspielt. Fertig in 3 bis 10 Sekunden.' },
        { icon: '⬇️', title: 'M4A herunterladen', desc: 'Das Ergebnis behält den Originalnamen mit .m4a. Dateien werden innerhalb einer Stunde von unseren Servern entfernt.' },
      ]}
      whyUse={{ title: 'Warum MP3 zu M4A konvertieren', bullets: [
        { title: 'Das Apple-Ökosystem bevorzugt M4A', desc: 'iTunes, Apple Music, iCloud-Musikmediathek, GarageBand, sie alle behandeln M4A als erstklassiges Format. MP3 funktioniert auch, doch M4A ist das, was sie nativ sprechen.' },
        { title: 'AAC klingt bei gleicher Bitrate leicht besser als MP3', desc: 'Bei 128 kbps ist der Unterschied klein aber real, besonders in den Hochfrequenzen. Ist Ihre Quell-MP3 schon verlustbehaftet, macht diese Neukodierung sie nicht schlechter.' },
        { title: 'M4A unterstützt Kapitelmarken und reichere Metadaten', desc: 'Wenn Sie Hörbücher, Podcast-Vorschaudateien oder etwas für das Apple-Ökosystem erstellen, verarbeitet M4A Kapitel sauber. Die MP3-Kapitelunterstützung ist lückenhaft.' },
        { title: 'iPhone-Klingeltöne müssen M4A sein', desc: 'Eigene iPhone-Klingeltöne nutzen die Endung .m4r, dasselbe AAC-in-MP4-Format wie M4A. Konvertieren und in .m4r umbenennen für die Nutzung als Klingelton.' },
        { title: 'Kein Wasserzeichen, kein Upsell', desc: 'Ihr Audio neu kodiert, sonst nichts.' },
      ]}}
      useCases={{ title: 'Wann Sie MP3 zu M4A konvertieren würden', items: [
        { title: 'Eine Musiksammlung in Apple Music importieren', desc: 'M4A importiert sauber und integriert sich in die iCloud-Musikmediathek. MP3s können beim Sync gelegentlich Metadaten-Probleme haben.' },
        { title: 'Einen iPhone-Klingelton erstellen', desc: 'MP3 zu M4A konvertieren, auf unter 40 Sekunden kürzen, in .m4r umbenennen, in Finder ziehen, während das iPhone verbunden ist.' },
        { title: 'Hörbuch mit Kapitelmarken', desc: 'M4A unterstützt Kapitel, die MP3-Unterstützung ist unzuverlässig. Für lange Hörbücher, in denen Hörer zwischen Kapiteln springen wollen, ist M4A das richtige Format.' },
        { title: 'Sprachmemo-Aufräumarbeit für iCloud', desc: 'Wenn Sie einen Ordner mit MP3-Sprachmemos haben und sie in iCloud oder Apple Sprachmemos haben wollen, ist M4A nativer und synchronisiert zuverlässiger.' },
        { title: 'GarageBand- oder Logic-Projekt', desc: 'Beim Import von Referenz-Audio in Apples Musiksoftware lässt sich M4A in manchen Workflows reibungsloser einfügen als MP3.' },
      ]}}
      proTips={{ title: 'Tipps für die MP3-zu-M4A-Konvertierung', tips: [
        { title: 'Die Neukodierung fügt einen winzigen Verlust hinzu', desc: 'Sie gehen von einem verlustbehafteten Format zum nächsten. Bei 128 kbps AAC aus einer 128-kbps-MP3 ist der Verlust real, aber für fast alle Menschen auf fast allem unhörbar. Für kritische Nutzung suchen Sie eine verlustfreie Quelle.' },
        { title: 'Für Klingeltöne vor der Konvertierung kürzen', desc: 'iPhone-Klingeltöne sind auf 40 Sekunden begrenzt. Kürzen Sie die MP3 zuerst in Audacity oder QuickTime und konvertieren Sie dann.' },
        { title: 'AAC mit 96 kbps schlägt meist MP3 mit 128 kbps', desc: 'Unser Konverter gibt mit 128 kbps für die Kompatibilität aus, doch wenn Sie volle Kontrolle hätten, könnten Sie mit AAC niedriger gehen und dennoch die MP3-Qualität erreichen. Wir bieten die Auswahl nicht an, um das Tool einfach zu halten.' },
        { title: 'M4A gegenüber MP4, gleicher Container, andere Konvention', desc: 'M4A-Dateien enthalten nur Audio. MP4-Dateien können Video, Audio oder beides enthalten. iTunes nutzt die Endung .m4a, um den Unterschied klar zu machen. Manche Player akzeptieren beide Endungen.' },
        { title: 'Kapitelmarken werden von uns nicht hinzugefügt', desc: 'Wir kodieren nur das Audio neu. Um Kapitelmarken hinzuzufügen, nutzen Sie Apple Books für Hörbücher oder ein spezielles Tool wie Chapter and Verse.' },
        { title: 'Für DRM-geschützte MP3s schlägt die Konvertierung fehl', desc: 'DRM ist 2026 für MP3 extrem selten, doch wenn Sie irgendwie eine haben, wird sie nicht dekodiert.' },
      ]}}
      faq={[
        { q: 'Ist die MP3-zu-M4A-Konvertierung wirklich kostenlos?', a: 'Ja. Kein Konto bis 25 MB, kein Wasserzeichen, keine Zeitbegrenzung.' },
        { q: 'Wie groß darf die Datei maximal sein?', a: '25 MB anonym, 60 MB mit kostenlosem Konto.' },
        { q: 'Klingt das M4A schlechter als die MP3?', a: 'Theoretisch ja, das Neukodieren jedes verlustbehafteten Formats fügt einen kleinen Verlust hinzu. Praktisch kann bei 128 kbps AAC aus einer 128-kbps-MP3 kein Mensch den Unterschied bei Consumer-Wiedergabe hören.' },
        { q: 'Was ist der Unterschied zwischen M4A und MP4?', a: 'M4A und MP4 sind dasselbe Container-Format. Die Endung .m4a signalisiert lediglich "nur Audio", damit iTunes weiß, was damit zu tun ist. Manche Player akzeptieren beide Endungen.' },
        { q: 'Wie lange dauert es?', a: 'Sekunden. Eine 25-MB-MP3 konvertiert in 3 bis 10 Sekunden.' },
        { q: 'Welche Qualität geben Sie aus?', a: '128 kbps AAC in einem M4A-Container, 44,1 kHz, Kanal-Layout der Quelle bleibt erhalten.' },
        { q: 'Behalten Sie meine Dateien?', a: 'Nein. Upload nach der Konvertierung gelöscht. Ausgabe innerhalb einer Stunde entfernt.' },
        { q: 'Kann ich damit einen iPhone-Klingelton erstellen?', a: 'Indirekt. Konvertieren Sie MP3 zu M4A, kürzen Sie in QuickTime auf unter 40 Sekunden, benennen Sie die .m4a in .m4r um, ziehen Sie sie in Finder mit verbundenem iPhone.' },
        { q: 'Akzeptiert iTunes das Ergebnis?', a: 'Ja. M4A ist das native Format von iTunes.' },
        { q: 'Meine MP3 hat schon 320 kbps. Sollte ich konvertieren?', a: 'Nur wenn Sie M4A speziell wegen der Kompatibilität brauchen. Das Ergebnis sind 128 kbps AAC, technisch ein Qualitätsabfall gegenüber 320-kbps-MP3, aber praktisch bei den meisten Wiedergaben unhörbar. Um die Qualität von 320 kbps zu erhalten, bräuchten Sie einen anderen Konverter, der höhere Bitraten zulässt.' },
        { q: 'Werden Tags übernommen?', a: 'Grundlegende Tags (Titel, Künstler, Album) meistens. Cover-Art und detaillierte Kommentare sind zwischen MP3-ID3 und M4A-iTunes-Metadaten unzuverlässig. Taggen Sie nach der Konvertierung in iTunes oder Mp3tag neu.' },
        { q: 'Kann ich im Batch konvertieren?', a: 'Im kostenlosen Tarif noch nicht. Öffnen Sie mehrere Browser-Tabs, um mehrere Dateien parallel zu konvertieren.' },
      ]}
      relatedLinks={[
        { href: '/de/m4a-to-mp3', label: 'M4A zu MP3', desc: 'Die Gegenrichtung.' },
        { href: '/de/wav-to-mp3', label: 'WAV zu MP3', desc: 'WAV zu tragbarer MP3 schrumpfen.' },
        { href: '/de/m4a-to-text', label: 'M4A zu Text', desc: 'M4A-Audio direkt transkribieren.' },
        { href: '/de/how-to-compress-audio', label: 'Audio komprimieren', desc: 'Für Dateien, die noch kleiner sein müssen.' },
      ]}
    />
  )
}
