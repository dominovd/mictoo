import FormatPageLayout from '@/components/FormatPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/wav-to-text',
  'fr': 'https://mictoo.com/fr/wav-to-text',
  'de': 'https://mictoo.com/de/wav-to-text',
  'es': 'https://mictoo.com/es/wav-to-text',
  'ru': 'https://mictoo.com/ru/wav-to-text',
  'it': 'https://mictoo.com/it/wav-to-text',
  'pt': 'https://mictoo.com/pt/wav-to-text',
  'pl': 'https://mictoo.com/pl/wav-to-text',
  'ja': 'https://mictoo.com/ja/wav-to-text',
  'ko': 'https://mictoo.com/ko/wav-to-text',
  'x-default': 'https://mictoo.com/wav-to-text',
}

export const metadata = {
  title: 'WAV zu Text: Kostenlose Online WAV Transkription | Mictoo',
  description:
    'Laden Sie eine WAV-Datei hoch und erhalten Sie ein bearbeitbares Transkript mit Zeitstempeln in Sekunden. Entwickelt für Studio-Bounces, Feldaufnahmen, DAW-Exporte. Unterstützt PCM und Broadcast Wave (BWF). Kostenlos, keine Anmeldung erforderlich.',
  alternates: {
    canonical: 'https://mictoo.com/de/wav-to-text',
    languages: LANGS,
  },

  openGraph: {
    title: "WAV zu Text: Kostenlose Online WAV Transkription | Mictoo",
    description: "Laden Sie eine WAV-Datei hoch und erhalten Sie ein bearbeitbares Transkript mit Zeitstempeln in Sekunden. Studio-Bounces, Feldaufnahmen, DAW-Exporte. PCM und BWF unterstützt.",
    url: "https://mictoo.com/de/wav-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "WAV zu Text: Kostenlose Online WAV Transkription",
    description: "Laden Sie eine WAV-Datei hoch und erhalten Sie ein bearbeitbares Transkript mit Zeitstempeln in Sekunden. Studio-Bounces, Feldaufnahmen, DAW-Exporte.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function DeWavToTextPage() {
  return (
    <FormatPageLayout
      locale="de"
      badge="WAV · PCM · BWF · Kostenlos"
      h1First="WAV zu Text"
      h1Second="Studio-Bounces, Feldaufnahmen, DAW-Exporte"
      subtitle="WAV ist das Format, das Ihre DAW ausgibt, Ihr Feldrekorder auf die Karte schreibt und das in Rundfunkstudios standardisiert ist. Laden Sie eine PCM- oder BWF-WAV-Datei hoch und erhalten Sie ein Transkript mit Zeitstempeln in Sekunden. Kostenlos, keine Anmeldung erforderlich."
      highlightFormat="wav"
      previewFileName="feldaufnahme.wav"
      previewWordCount={166}
      previewDurationLabel="14 Minuten 22 Sekunden"
      previewLines={[
        { t: '0:00',  line: 'Standortscouting, Tag drei. Wir sind auf der Ostseite des Kamms auf etwa sechstausend Fuß eingerichtet.' },
        { t: '0:09',  line: 'Der Wind kommt in Bögen aus dem Westen, also habe ich die Blimp eingeschaltet und bei achtzig Hertz abgerollt.' },
        { t: '0:18',  line: 'Die Pegel erreichen etwa minus zwölf beim Interviewmikrofon, was für diese Umgebung richtig erscheint.' },
        { t: '0:28',  line: 'Neben mir steht der Ranger, der seit zweiundzwanzig Jahren in diesem Abschnitt des Parks arbeitet.' },
        { t: '0:37',  line: 'Wenn Leute fragen, was sich hier am meisten verändert hat, beginne ich immer mit den Bränden im Sommer 2020.' },
        { t: '0:47',  line: 'Der Wald sah danach nie wieder ganz gleich aus, und die Wildtiermuster benötigten Jahre, um sich zurückzusetzen.' },
        { t: '0:57',  line: 'Könnten Sie mir erzählen, wie die ersten Wochen nach den Bränden vor Ort waren?' },
        { t: '1:05',  line: 'Sicher. Der Rauch blieb insgesamt etwa sechs Wochen, und die Sicht war nie besser als eine halbe Meile.' },
      ]}
      whyTitle="Warum Mictoo für WAV-Transkription"
      whyCards={[
        {
          icon: 'waveform',
          title: 'PCM und BWF, keine Konvertierung',
          desc: 'Standard 16/24/32-Bit PCM WAV und Broadcast Wave (BWF) mit Metadaten. Wir akzeptieren die Datei so, wie sie ist, ohne erforderlichen Konvertierungsschritt.',
        },
        {
          icon: 'target',
          title: 'Keine verlustbehafteten Codec-Artefakte',
          desc: 'Unkomprimiertes PCM fügt keine verlustbehafteten Kompressionsartefakte hinzu. Eine saubere Aufnahme kann eine starke Quelle sein, aber Raumgeräusche und Mikrofonplatzierung sind ebenfalls wichtig.',
        },
        {
          icon: 'gear',
          title: 'Jede Abtastrate, jede Bit-Tiefe',
          desc: '44,1 kHz, 48 kHz, 96 kHz, 192 kHz. Whisper resampelt intern auf 16 kHz Mono, sodass Ihre Quellrate die Qualität nicht beeinflusst.',
        },
        {
          icon: 'clip',
          title: 'BWF-Metadaten bleiben auf Ihrer Seite erhalten',
          desc: 'Wir ignorieren die iXML/bext-Metadatenblöcke während der Transkription. Ihre ursprüngliche WAV-Datei (und ihre Metadaten) wird niemals verändert.',
        },
      ]}
      scenariosTitle="Wann WAV zu Text die richtige Wahl ist"
      scenarios={[
        {
          icon: 'mic',
          title: 'Feldrekorderaufnahme',
          desc: 'Zoom H4n, H5, H6, Tascam DR-40, Sound Devices MixPre. Was auch immer das Feldkit auf die Karte schreibt, laden Sie die WAV-Datei hoch für ein sauberes Transkript.',
        },
        {
          icon: 'waveform',
          title: 'DAW-Bounce zur Referenz',
          desc: 'Rohmix oder nur Gesangsbounce aus Logic, Pro Tools oder Ableton. Erhalten Sie eine Textversion der Lyrics oder des Dialogs zur Referenz.',
        },
        {
          icon: 'briefcase',
          title: 'Rundfunkinterview',
          desc: 'BWF-Aufnahme aus einem Radiointerview oder Podcast-Studio. Transkript dient zur Erstellung von Show-Notizen, Zitaten und Archivdokumentationen.',
        },
        {
          icon: 'book',
          title: 'Mundliche Geschichtsarchive',
          desc: 'Langzeitaufnahmen für die mündliche Geschichte, die zur WAV-Datei zur Erhaltung aufgenommen wurden. Das Transkript macht das Archiv durchsuchbar und zitierfähig.',
        },
        {
          icon: 'users',
          title: 'Deposition und rechtliche Aufnahmen',
          desc: 'Aufgezeichnete Verfahren, die als unkomprimierte WAV-Datei für evidenzbasierte Qualität erfasst wurden. Transkript zur Überprüfung und Zitation.',
        },
        {
          icon: 'sparkles',
          title: 'Voiceover-Arbeit',
          desc: 'ADR-Pass, Erzählaufnahme oder Voiceover-Session, die auf WAV ausgegeben wurde. Das Transkript bestätigt, dass das Lesen mit dem Skript übereinstimmt.',
        },
      ]}
      technicalTitle="Was sich in einer WAV-Datei befindet"
      technicalIntro="WAV ist ein Container, der häufig für unkomprimiertes PCM-Audio verwendet wird. Seine zusätzliche Auflösung ist nützlich für Produktion und Archivierung, während die Aufnahmebedingungen bestimmen, wie verständlich die Sprache ist."
      technicalFacts={[
        {
          icon: 'waveform',
          title: 'PCM und Broadcast Wave',
          desc: 'Standard PCM WAV und BWF-Aufnahmen können das gleiche gesprochene Audio tragen; BWF fügt Produktionsmetadaten hinzu.',
        },
        {
          icon: 'gear',
          title: 'Abtastrate und Bit-Tiefe',
          desc: 'Hohe Abtastraten und Bit-Tiefen erhalten den Produktionsspielraum, können jedoch Rauschen, Clipping oder ein entferntes Mikrofon nicht reparieren.',
        },
        {
          icon: 'cloud',
          title: 'Groß durch Design',
          desc: 'Unkomprimierte WAV-Dateien wachsen schnell. Für lange Interviews teilen Sie die Aufnahme oder erstellen Sie bei Bedarf eine kleinere Mono-Sprachkopie.',
        },
        {
          icon: 'clip',
          title: 'Metadaten bleiben außen',
          desc: 'BWF-, iXML- und Cue-Metadaten werden nicht in das Transkript aufgenommen, und die ursprüngliche Quelldatei wird nicht verändert.',
        },
      ]}
      faq={[
        {
          q: 'Welche Arten von WAV-Dateien akzeptiert Mictoo?',
          a: 'Standard PCM WAV mit 16-Bit, 24-Bit oder 32-Bit Float, jede Abtastrate (44,1 kHz bis 192 kHz), Mono oder Stereo. Broadcast Wave (BWF) wird ebenfalls vollständig unterstützt, wobei die iXML/bext-Metadaten in Ihrer Originaldatei erhalten bleiben.',
        },
        {
          q: 'Verbessert eine höhere Bit-Tiefe oder Abtastrate das Transkript?',
          a: 'Nein. Whisper resampelt alle Audios intern auf 16 kHz Mono vor der Transkription, sodass Bit-Tiefe und Abtastrate über diesem Limit die Genauigkeit nicht beeinflussen. Die Aufnahmequalität (Mikrofonwahl, Raum, Geräuschpegel) ist viel wichtiger als die Container-Spezifikation.',
        },
        {
          q: 'Meine Studio-WAV ist über 60 MB. Was nun?',
          a: 'Eine Stereo 24-Bit 48 kHz WAV-Datei hat etwa 17 MB pro Minute, sodass jede Aufnahme über etwa 3 Minuten das Limit erreicht. Konvertieren Sie zu einer 16 kHz Mono WAV (oder 128 kbps MP3) mit ffmpeg -i in.wav -ar 16000 -ac 1 out.wav. Die Transkriptionsqualität ist identisch.',
        },
        {
          q: 'Bewahren Sie meine WAV-Datei auf?',
          a: 'Nein. Die Datei wird an den Transkriptionsanbieter gestreamt, einmal verarbeitet und aus dem Speicher gelöscht. Wir schreiben sie niemals auf die Festplatte. Das Transkript wird nur gespeichert, wenn Sie sich anmelden und es zu Ihrer Historie hinzufügen.',
        },
        {
          q: 'Kann ich die ursprünglichen BWF-Zeitstempel im Transkript behalten?',
          a: 'Das Transkript verwendet relative Zeitstempel vom Beginn der Datei (0:00 Basislinie). BWF-Absolute-Zeit-Metadaten werden nicht in die Textausgabe übernommen. Passen Sie die beiden auf Ihrer Seite an, wenn Sie eine Übereinstimmung mit der Szenen-Zeitcode-Alignierung benötigen.',
        },
        {
          q: 'Transkribiert Mictoo nicht-englische WAV-Dateien?',
          a: 'Ja. Whisper large-v3 unterstützt über 50 Sprachen mit automatischer Erkennung. Bei kurzen Aufnahmen oder ungewöhnlichen Akzenten stellen Sie die Sprache explizit im Dropdown-Menü ein, um eine sauberere Erkennung beim ersten Durchgang zu erhalten.',
        },
        {
          q: 'Kann ich SRT-Untertitel für eine WAV-Aufnahme erhalten?',
          a: 'Ja. Laden Sie SRT oder VTT nach der Transkription herunter. Beide Formate enthalten Zeitstempel, die mit der ursprünglichen WAV-Zeitleiste ausgerichtet sind, um sie in Video-Editoren oder Barrierefreiheits-Tools zu verwenden.',
        },
        {
          q: 'Wie lange dauert eine WAV-Transkription?',
          a: 'Eine 15-minütige WAV-Datei benötigt normalerweise 20-40 Sekunden von Anfang bis Ende. Größere Dateien, die nahe am Upload-Limit liegen, benötigen 40-80 Sekunden. Die Upload-Geschwindigkeit ist oft der längere Schritt, da WAV-Dateien groß sind.',
        },
        {
          q: 'Unterstützen Sie 32-Bit-Float-Aufnahmen von Sound Devices?',
          a: 'Ja. 32-Bit-Float WAV-Dateien von MixPre, F-Serie oder Zoom F-Serie Rekordern werden akzeptiert und auf die gleiche Weise wie Standard PCM transkribiert.',
        },
        {
          q: 'Kann ich das Transkript in eine andere Sprache übersetzen?',
          a: 'Ja. Nach der Transkription wählen Sie eine Zielsprache aus und klicken Sie auf Übersetzen. Die Übersetzung erfolgt mit GPT-4o-mini und erscheint neben dem ursprünglichen Transkript.',
        },
      ]}
      ctaHeadline="Laden Sie Ihre WAV hoch, erhalten Sie ein sauberes Transkript"
      ctaSubtitle="PCM, BWF, jede Abtastrate. Studio-Bounces, Feldaufnahmen, DAW-Exporte."
      ctaButton="WAV hochladen zur Transkription"
    />
  )
}