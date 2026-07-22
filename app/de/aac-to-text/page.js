import FormatPageLayout from '@/components/FormatPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/aac-to-text',
  'fr': 'https://mictoo.com/fr/aac-to-text',
  'de': 'https://mictoo.com/de/aac-to-text',
  'es': 'https://mictoo.com/es/aac-to-text',
  'ru': 'https://mictoo.com/ru/aac-to-text',
  'it': 'https://mictoo.com/it/aac-to-text',
  'pt': 'https://mictoo.com/pt/aac-to-text',
  'pl': 'https://mictoo.com/pl/aac-to-text',
  'ja': 'https://mictoo.com/ja/aac-to-text',
  'ko': 'https://mictoo.com/ko/aac-to-text',
  'x-default': 'https://mictoo.com/aac-to-text',
}

export const metadata = {
  title: 'AAC zu Text: Roh-AAC- und ADTS-Audio-Transkription | Mictoo',
  description:
    'Laden Sie rohe .aac-Dateien (ADTS-Stream oder ADIF) hoch und erhalten Sie in Sekunden ein bearbeitbares Transkript. Häufig bei Podcast-Downloads, Rundfunkarchiven, geripptem iPhone-Audio.',
  alternates: {
    canonical: 'https://mictoo.com/de/aac-to-text',
    languages: LANGS,
  },
  openGraph: {
    title: 'AAC zu Text: Roh-AAC- und ADTS-Audio-Transkription | Mictoo',
    description: 'Laden Sie rohe .aac-Dateien (ADTS-Stream oder ADIF) hoch. Bearbeitbares Transkript in Sekunden.',
    url: 'https://mictoo.com/de/aac-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AAC zu Text: Roh-AAC-Stream-Transkription',
    description: 'Laden Sie rohe .aac (ADTS oder ADIF) hoch. Bearbeitbares Transkript in Sekunden.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function DeAacToTextPage() {
  return (
    <FormatPageLayout
      locale="de"
      badge="AAC · ADTS · Roh-Codec-Stream"
      h1First="AAC zu Text"
      h1Second="Roh-ADTS-Streams, Rundfunkarchive, geripptes Audio"
      subtitle="Rohe .aac-Dateien stammen häufig aus Rundfunkstreams, Radioaufnahmen und extrahierten Medientracks. Legen Sie die Datei ab und Mictoo prüft ihre Struktur, bevor es das gesprochene Audio mit Whisper large-v3 transkribiert."
      highlightFormat="aac"
      previewFileName="broadcast-audio.aac"
      previewWordCount={142}
      previewDurationLabel="9:44"
      previewLines={[
        { t: '0:00',  line: 'Sie hören die Morgenshow. Es ist sieben Uhr fünfzehn und wir sind zurück mit unserer Hauptgeschichte.' },
        { t: '0:08',  line: 'Über Nacht hat der Stadtrat die neue Verkehrserweiterung nach fast drei Jahren Debatte verabschiedet.' },
        { t: '0:17',  line: 'Der Plan wird zwei neue Straßenbahnlinien hinzufügen und die bestehende um ungefähr acht Meilen verlängern.' },
        { t: '0:27',  line: 'Um zu erklären, was das für die täglichen Pendler bedeutet, haben wir unseren Verkehrsreporter im Studio.' },
        { t: '0:37',  line: 'Danke, dass ich hier sein darf. Die Schlagzeile ist, dass der ostwärts gerichtete Korridor nach zwanzig Jahren endlich eine Schienenoption erhält.' },
        { t: '0:47',  line: 'Für alle, die diesen Abschnitt während der Hauptverkehrszeit fahren, ist das wirklich transformativ.' },
        { t: '0:56',  line: 'Der Bau beginnt nächsten Frühling und die erste neue Linie soll im Jahr zweitausendneunundzwanzig eröffnet werden.' },
        { t: '1:06',  line: 'Der Rat schätzt, dass ungefähr vierzigtausend tägliche Fahrgäste die neuen Abschnitte nutzen werden, sobald sie eröffnet sind.' },
      ]}
      whyTitle="Warum Mictoo für AAC-Transkription"
      whyCards={[
        {
          icon: 'waveform',
          title: 'Roh-ADTS nativ verarbeitet',
          desc: 'Die meisten rohen .aac-Dateien sind ADTS-rahmen (Audio Data Transport Stream). Wir erkennen das Synchronisationswort 0xFFF und übergeben den Stream an Whisper.',
        },
        {
          icon: 'gear',
          title: 'ADIF und LATM ebenfalls unterstützt',
          desc: 'Weniger verbreitete ADIF (Audio Data Interchange Format) und LATM-Rahmungen funktionieren ebenfalls. Kein manuelles Repackaging oder ffmpeg-Schritt erforderlich.',
        },
        {
          icon: 'clip',
          title: 'Kein Container erforderlich',
          desc: 'AAC befindet sich normalerweise in M4A oder MP4, aber manchmal landet der rohe Stream auf Ihrer Festplatte. Mictoo akzeptiert beides, ohne zu fragen.',
        },
        {
          icon: 'sparkles',
          title: 'KI-Zusammenfassung für Archivsegmente',
          desc: 'Broadcast-Segment, Radioarchivclip oder Streaming-Dump. Die KI-Zusammenfassung ermöglicht es Ihnen, Archive schneller zu sichten.',
        },
      ]}
      scenariosTitle="Wann AAC zu Text die richtige Wahl ist"
      scenarios={[
        {
          icon: 'briefcase',
          title: 'Broadcast-Radioarchiv',
          desc: 'Segment, das von einem HLS- oder Icecast-Stream aufgenommen wurde und als rohes AAC versendet wird. Das Transkript macht das Archiv durchsuchbar.',
        },
        {
          icon: 'video',
          title: 'HLS-Livestream-Aufnahme',
          desc: 'YouTube Live, Twitch oder Radio-HLS-Stream, der als .aac-Chunk-Sequenz erfasst wurde. Legen Sie die Datei ab, erhalten Sie den Text.',
        },
        {
          icon: 'mic',
          title: 'Geripptes iPhone-Audio',
          desc: 'Audio, das aus einer iPhone-Aufnahme oder einer freigegebenen Datei extrahiert wurde, die ihren M4A-Container verloren hat und als rohes AAC herauskam.',
        },
        {
          icon: 'gear',
          title: 'Streaming-Service-Export',
          desc: 'Podcast-Plattform oder Streaming-App, die rohe AAC-Downloads bereitstellt. Überspringen Sie die Konvertierung und legen Sie die Datei direkt ab.',
        },
        {
          icon: 'users',
          title: 'Broadcast-Interview',
          desc: 'Radio-Interview, das als rohes AAC archiviert wurde. Das Transkript ist die zitierfähige Kopie für Artikel oder Shows.',
        },
        {
          icon: 'editPen',
          title: 'FFmpeg-Zwischenausgabe',
          desc: 'Sie haben die Audiospur mit ffmpeg -c:a copy extrahiert und eine .aac erhalten. Legen Sie sie hier ab, anstatt sie zuerst nach M4A umzuwandeln.',
        },
      ]}
      technicalTitle="Roh-AAC im Vergleich zu M4A"
      technicalIntro="AAC ist ein Audio-Codec. Eine Datei, die auf .aac endet, ist oft ein roh gerahmter Stream, während M4A normalerweise AAC-Audio in einem MP4-Container mit Suche und Metadaten umschließt."
      technicalFacts={[
        {
          icon: 'waveform',
          title: 'ADTS ist verbreitet',
          desc: 'Roh-AAC wird häufig als ADTS-Rahmen gespeichert, insbesondere wenn Audio aus einem Stream oder Rundfunkworkflow extrahiert wurde.',
        },
        {
          icon: 'layers',
          title: 'M4A fügt einen Container hinzu',
          desc: 'M4A kann denselben AAC-Codec mit Timing, Indizierung und Metadaten, die von einem MP4-basierten Container bereitgestellt werden, tragen.',
        },
        {
          icon: 'search',
          title: 'Erweiterung ist nur ein Hinweis',
          desc: 'Die Dateistruktur wird während der Verarbeitung geprüft, sodass eine irreführende Erweiterung nicht zu Transkripttext wird.',
        },
        {
          icon: 'briefcase',
          title: 'Broadcast-Workflows',
          desc: 'Roh-AAC erscheint häufig nach HLS-Aufnahme oder Audioextraktion. Behalten Sie den ursprünglichen Quellenverweis für den Archivkontext.',
        },
      ]}
      faq={[
        {
          q: 'Welche Art von AAC-Dateien akzeptiert Mictoo?',
          a: 'Roh-AAC in ADTS-Rahmung (am häufigsten), ADIF und LATM-Rahmungen. Wir erkennen das Synchronisationswort serverseitig und übergeben den Stream an Whisper. AAC in M4A (siehe die M4A-Seite) funktioniert ebenfalls, ist aber ein anderer Aufnahmeweg.',
        },
        {
          q: 'Was ist der Unterschied zwischen .aac und .m4a?',
          a: '.aac ist typischerweise ein rohes ADTS-Bitstream: AAC-Rahmen mit kleinen 7-Byte-Headern, kein Container. .m4a ist AAC-Audio, das in einem MP4-Container mit Metadaten und Suchindizierung verpackt ist. Beide verwenden den AAC-Codec, aber die Dateistruktur unterscheidet sich.',
        },
        {
          q: 'Meine AAC-Datei ist über 60 MB. Was nun?',
          a: 'AAC bei typischen Rundfunk-Bitraten (128 kbps) liegt bei etwa 1 MB pro Minute, sodass 60 MB ungefähr eine einstündige Aufnahme sind. Wenn Sie angemeldet sind, teilen wir automatisch bis zu etwa 3 Stunden auf. Andernfalls reduzieren Sie die Abtastrate: ffmpeg -i in.aac -b:a 64k -ac 1 out.aac.',
        },
        {
          q: 'Produziert rohes AAC schlechtere Transkripte als M4A?',
          a: 'Nein. Der Audio-Stream ist identisch; nur der Container unterscheidet sich. Whisper resampelt intern entweder way auf 16 kHz mono. Die Genauigkeit hängt von der Qualität der zugrunde liegenden Aufnahme ab, nicht davon, ob sie ADTS-gerahmt oder MP4-verpackt ist.',
        },
        {
          q: 'Transkribiert Mictoo nicht-englisches AAC?',
          a: 'Ja. Whisper large-v3 unterstützt über 50 Sprachen mit automatischer Erkennung. Für ungewöhnliche Akzente oder kurze Rundfunkclips stellen Sie die Sprache ausdrücklich ein, um sauberere Ergebnisse beim ersten Durchlauf zu erzielen.',
        },
        {
          q: 'Kann ich SRT-Untertitel für den Broadcast-Clip erhalten?',
          a: 'Ja. Laden Sie SRT oder VTT nach der Transkription herunter. Die Zeitstempel stimmen mit dem ursprünglichen AAC-Stream-Zeitplan überein, um in Video-Editoren, Barrierefreiheitsüberlagerungen oder Archivindizes verwendet zu werden.',
        },
        {
          q: 'Wird meine AAC-Datei auf Ihren Servern gespeichert?',
          a: 'Nein. Der Audio-Stream wird an den Transkriptionsanbieter gesendet, einmal verarbeitet und aus dem Speicher gelöscht. Wir schreiben es niemals auf die Festplatte. Transkripte werden nur gespeichert, wenn Sie sich anmelden und in der Historie speichern.',
        },
        {
          q: 'Kann ich das Transkript in eine andere Sprache übersetzen?',
          a: 'Ja. Wählen Sie nach der Transkription eine Zielsprache aus und klicken Sie auf Übersetzen. Die Übersetzung erfolgt mit GPT-4o-mini und erscheint neben dem Original.',
        },
        {
          q: 'Was ist, wenn die Datei eine .aac-Erweiterung hat, aber tatsächlich M4A ist?',
          a: 'Wir prüfen die magischen Bytes, nicht die Erweiterung. Wenn die Datei mit ftyp (M4A/MP4-Signatur) beginnt, behandeln wir sie als M4A. Wenn sie mit ADTS-Synchronisationsbytes beginnt, behandeln wir sie als rohes AAC. In jedem Fall funktioniert die Transkription.',
        },
        {
          q: 'Wie lange dauert eine AAC-Transkription?',
          a: 'Eine 10-minütige AAC dauert typischerweise 15-30 Sekunden von Anfang bis Ende. Größere Dateien, die nahe am Upload-Limit liegen, benötigen 45-80 Sekunden. Die Upload-Geschwindigkeit ist oft der längere Schritt.',
        },
      ]}
      ctaHeadline="Laden Sie Ihr rohes AAC hoch und erhalten Sie das Transkript"
      ctaSubtitle="ADTS-, ADIF- und LATM-Rahmungen. Rundfunkarchive, HLS-Aufnahmen, geripptes Audio."
      ctaButton="AAC hochladen zur Transkription"
    />
  )
}