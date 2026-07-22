import FormatPageLayout from '@/components/FormatPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/flac-to-text',
  'fr': 'https://mictoo.com/fr/flac-to-text',
  'de': 'https://mictoo.com/de/flac-to-text',
  'es': 'https://mictoo.com/es/flac-to-text',
  'ru': 'https://mictoo.com/ru/flac-to-text',
  'it': 'https://mictoo.com/it/flac-to-text',
  'pt': 'https://mictoo.com/pt/flac-to-text',
  'pl': 'https://mictoo.com/pl/flac-to-text',
  'ja': 'https://mictoo.com/ja/flac-to-text',
  'ko': 'https://mictoo.com/ko/flac-to-text',
  'x-default': 'https://mictoo.com/flac-to-text',
}

export const metadata = {
  title: 'FLAC zu Text: Verlustfreie Transkription für Spracharchive | Mictoo',
  description:
    'Laden Sie ein FLAC-Interview zur Oral History, eine Feldaufnahme oder eine Erhaltungs-Kopie hoch und erhalten Sie ein bearbeitbares Transkript mit Zeitstempeln.',
  alternates: {
    canonical: 'https://mictoo.com/de/flac-to-text',
    languages: LANGS,
  },
  openGraph: {
    title: 'FLAC zu Text: Verlustfreie Audio-Transkription | Mictoo',
    description: 'Laden Sie ein FLAC-Interview zur Oral History, eine Feldaufnahme oder eine Erhaltungs-Kopie hoch. Erhalten Sie ein bearbeitbares Transkript mit Zeitstempeln.',
    url: 'https://mictoo.com/de/flac-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FLAC zu Text: Verlustfreie Audio-Transkription',
    description: 'Laden Sie ein FLAC-Archiv oder eine Feldaufnahme hoch und erhalten Sie ein bearbeitbares Transkript mit Zeitstempeln.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function DeFlacToTextPage() {
  return (
    <FormatPageLayout
      locale="de"
      badge="FLAC · Verlustfrei · Kostenlos"
      h1First="FLAC zu Text"
      h1Second="Verlustfreies Audio für Spracharchive"
      subtitle="FLAC wird von Archiven zur Oral History, Feldrekordern und Erhaltungs-Workflows verwendet, um Audio ohne verlustbehaftete Kompression zu speichern. Laden Sie die .flac-Datei hoch, behalten Sie das verlustfreie Master und erhalten Sie ein Transkript mit Zeitstempeln."
      highlightFormat="flac"
      previewFileName="archivaufnahme.flac"
      previewWordCount={155}
      previewDurationLabel="18:04"
      previewLines={[
        { t: '0:00',  line: 'Diese Aufnahme wurde im Familienhaus im Oktober neunzehnhundertachtundsiebzig gemacht.' },
        { t: '0:07',  line: 'Das Thema ist meine Großmutter, geboren in Kraków neunzehnhundertvierzehn, die neunzehnhundertneununddreißig nach New York immigrierte.' },
        { t: '0:18',  line: 'Die Aufnahmequalität ist durch die ursprüngliche Kassette begrenzt. Bitte beachten Sie die Lautstärke des Interviewers.' },
        { t: '0:27',  line: 'Oma, kannst du mir von dem Tag erzählen, an dem du Kraków zum letzten Mal verlassen hast?' },
        { t: '0:34',  line: 'Es regnete. Das ist das Erste, an das ich mich erinnere. Alle standen im Regen auf dem Bahnsteig.' },
        { t: '0:44',  line: 'Mein Vater hatte zwei Koffer und meine Mutter hatte einen. Ich hatte nur eine kleine Tasche, die mir meine Tante gegeben hatte.' },
        { t: '0:54',  line: 'Der Zug sollte um sechs Uhr morgens abfahren, aber er fuhr erst gegen zehn.' },
        { t: '1:04',  line: 'Und als er endlich fuhr, sah niemand auf diesem Bahnsteig die Stadt jemals wieder auf die gleiche Weise.' },
      ]}
      whyTitle="Warum Mictoo für FLAC-Transkription"
      whyCards={[
        {
          icon: 'target',
          title: 'Keine zusätzliche verlustbehaftete Kompression',
          desc: 'FLAC bewahrt das aufgezeichnete Signal ohne MP3-ähnlichen Kompressionsverlust. Die Genauigkeit des Transkripts hängt weiterhin von der Sprachklarheit und der ursprünglichen Aufnahme ab.',
        },
        {
          icon: 'gear',
          title: 'Jede Abtastrate, jede Bit-Tiefe',
          desc: '44,1 kHz bis 192 kHz, 16-Bit bis 24-Bit. Whisper wandelt intern auf 16 kHz Mono um, sodass Ihre Quellrate die Qualität nicht beeinflusst.',
        },
        {
          icon: 'book',
          title: 'Erhaltungsfreundlicher Workflow',
          desc: 'Ihre ursprüngliche FLAC-Datei wird nie verändert. Wir streamen sie an den Transkriptionsanbieter, extrahieren das Audio im Speicher und löschen es danach.',
        },
        {
          icon: 'clip',
          title: 'FLAC-in-OGG wird ebenfalls verarbeitet',
          desc: 'Native FLAC (magic bytes fLaC) und FLAC-in-OGG (OggS mit einem FLAC-Stream) funktionieren beide. Keine manuelle Neupackung.',
        },
      ]}
      scenariosTitle="Wann FLAC zu Text die richtige Wahl ist"
      scenarios={[
        {
          icon: 'book',
          title: 'Oral History Archiv',
          desc: 'Langfristiges Interview als verlustfreies FLAC für das Archiv bewahrt. Das Transkript macht es durchsuchbar, zitierbar und bereit für die Quellenangabe.',
        },
        {
          icon: 'briefcase',
          title: 'Institutionelle Aufnahme',
          desc: 'Museum, Bibliothek oder Universität aufgezeichnete Vorlesung oder Symposium als FLAC zur Erhaltung. Das Transkript ist die Zugriffsebene.',
        },
        {
          icon: 'mic',
          title: 'CD-geripptes Interview oder Podcast',
          desc: 'Älteres Interview oder Podcast-Episode, die Sie von CD als FLAC gerippt haben. Laden Sie die Datei für ein modernes Transkript hoch.',
        },
        {
          icon: 'waveform',
          title: 'Feldaufnahme, verlustfreie Erfassung',
          desc: 'Feldrekorder oder Handheld-Aufnahme als FLAC geschrieben, um Kartenspeicherplatz zu sparen, ohne Qualität zu verlieren. Vollständige Transkription mit Zeitstempeln.',
        },
        {
          icon: 'sparkles',
          title: 'Wiederhergestellte Interviewkollektionen',
          desc: 'Digitalisierte Tape- oder Disc-Interviews, die nach der Wiederherstellung als FLAC gespeichert wurden. Fügen Sie durchsuchbaren Text hinzu, während Sie die Erhaltungs-Kopie beibehalten.',
        },
        {
          icon: 'users',
          title: 'Erhaltungs-Kopie der Aussage',
          desc: 'Rechtliche Aufnahme als FLAC zur Archivintegrität bewahrt. Transkript zur Überprüfung, Zitation und nachgelagerter Entdeckung.',
        },
      ]}
      technicalTitle="Was verlustfreies FLAC bewahrt ,  und was nicht"
      technicalIntro="FLAC bewahrt das Quellsignal ohne verlustbehaftete Kompression. Es schützt eine Archivkopie, kann jedoch keine Wörter wiederherstellen, die bereits durch Rauschen, Clipping, Überlappung oder Mikrofonabstand verdeckt sind."
      technicalFacts={[
        {
          icon: 'waveform',
          title: 'Verlustfreie Quelle',
          desc: 'Das Decodieren gibt das aufgezeichnete Signal ohne MP3-ähnlichen Kompressionsverlust zurück, was für Erhaltungs-Workflows nützlich ist.',
        },
        {
          icon: 'ear',
          title: 'Keine automatische Bereinigung',
          desc: 'Eine verlustfreie Kopie einer rauschhaften Aufnahme ist immer noch rauschhaft. Die Klarheit der Sprache bei der Aufnahme bleibt der Hauptfaktor für die Genauigkeit.',
        },
        {
          icon: 'clip',
          title: 'Vorbis-Kommentare separat',
          desc: 'Künstler, Archiv-ID und andere Tags werden nicht in das Transkript eingefügt. Behalten Sie diese Zuordnung in Ihrem Archivkatalog.',
        },
        {
          icon: 'cloud',
          title: 'Effiziente Archivkopie',
          desc: 'FLAC ist kleiner als unkomprimiertes WAV, kann aber für lange Sitzungen immer noch groß sein. Teilen Sie längere Aufnahmen bei Bedarf auf.',
        },
      ]}
      faq={[
        {
          q: 'Welche FLAC-Dateien akzeptiert Mictoo?',
          a: 'Native FLAC (magic bytes fLaC) und FLAC-in-OGG-Container, mono oder stereo, jede Abtastrate bis 192 kHz und 16 oder 24-Bit-Tiefe. Wir akzeptieren die Datei direkt ohne Konvertierung.',
        },
        {
          q: 'Erzeugt verlustfreier Input ein besseres Transkript?',
          a: 'Für saubere Quellaufnahmen entspricht verlustfreier Input dem Maximum dessen, was Whisper extrahieren kann. Bei rauschhaften oder degradierten Quellen (zum Beispiel ein Kassettenschnitt) bewahrt verlustfrei die Degradation treu, behebt sie jedoch nicht. Die Aufnahmequalität ist wichtiger als der Container.',
        },
        {
          q: 'Meine FLAC-Datei ist über 60 MB. Was nun?',
          a: 'Eine Stereo 44,1 kHz 16-Bit FLAC ist etwa 5 MB pro Minute, sodass jede Aufnahme über etwa 12 Minuten die Grenze erreicht. Wenn Sie angemeldet sind, teilen wir automatisch bis zu etwa 3 Stunden. Andernfalls konvertieren Sie zuerst zu 16 kHz Mono FLAC oder MP3: ffmpeg -i in.flac -ar 16000 -ac 1 out.flac.',
        },
        {
          q: 'Kann ich die FLAC-Metadaten (Album, Künstler, Jahr) behalten?',
          a: 'Das Transkript ist reiner Text ohne FLAC-Metadaten. Vorbis-Kommentartags werden während der Transkription ignoriert. Behalten Sie die Metadatenzuordnung in Ihrem Archivsysten, wenn Sie sie nachgelagert benötigen.',
        },
        {
          q: 'Transkribiert Mictoo nicht-englische FLAC?',
          a: 'Ja. Whisper large-v3 unterstützt über 50 Sprachen mit automatischer Erkennung. Für ungewöhnliche Akzente oder ältere Aufnahmen stellen Sie die Sprache explizit ein, um eine sauberere Erstpass-Erkennung zu erhalten.',
        },
        {
          q: 'Kann ich SRT-Untertitel für ein Video erhalten, das diesen Ton verwendet?',
          a: 'Ja. Laden Sie SRT oder VTT nach der Transkription herunter. Die Zeitstempel stimmen mit der ursprünglichen FLAC-Zeitleiste überein, um sie in Video-Editoren oder Barrierefreiheitswerkzeugen zu verwenden.',
        },
        {
          q: 'Wird meine FLAC-Datei auf Ihren Servern gespeichert?',
          a: 'Nein. Das Audio wird an den Transkriptionsanbieter gestreamt, einmal verarbeitet und aus dem Speicher gelöscht. Wir schreiben das Audio niemals auf die Festplatte. Transkripte werden nur gespeichert, wenn Sie sich anmelden.',
        },
        {
          q: 'Kann ich das Transkript in eine andere Sprache übersetzen?',
          a: 'Ja. Nach der Transkription wählen Sie eine Zielsprache und klicken Sie auf Übersetzen. Die Übersetzung läuft auf GPT-4o-mini und erscheint neben dem Original.',
        },
        {
          q: 'Wie lange dauert eine FLAC-Transkription?',
          a: 'Eine 15-minütige FLAC dauert typischerweise 25-45 Sekunden von Anfang bis Ende. Größere Dateien, die nahe der Upload-Grenze liegen, benötigen 45-90 Sekunden. Die Upload-Geschwindigkeit ist oft der längere Schritt, da FLAC-Dateien groß sind.',
        },
        {
          q: 'Akzeptieren Sie 24-Bit Hi-Res FLAC?',
          a: 'Ja. 24-Bit FLAC bei 96 kHz oder 192 kHz wird vollständig unterstützt. Whisper wandelt intern um, sodass Hi-Res die Genauigkeit bei sauberem Audio nicht verbessert, aber auch nicht schadet.',
        },
      ]}
      ctaHeadline="Laden Sie Ihre FLAC hoch, erhalten Sie ein archivbereites Transkript"
      ctaSubtitle="Verlustfreies Quellmaterial rein, durchsuchbarer Text raus. Oral History, Feldaufnahmen und Erhaltungs-Kopien."
      ctaButton="FLAC hochladen zur Transkription"
    />
  )
}