import FormatPageLayout from '@/components/FormatPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/m4a-to-text',
  'fr': 'https://mictoo.com/fr/m4a-to-text',
  'de': 'https://mictoo.com/de/m4a-to-text',
  'es': 'https://mictoo.com/es/m4a-to-text',
  'ru': 'https://mictoo.com/ru/m4a-to-text',
  'it': 'https://mictoo.com/it/m4a-to-text',
  'pt': 'https://mictoo.com/pt/m4a-to-text',
  'pl': 'https://mictoo.com/pl/m4a-to-text',
  'ja': 'https://mictoo.com/ja/m4a-to-text',
  'ko': 'https://mictoo.com/ko/m4a-to-text',
  'x-default': 'https://mictoo.com/m4a-to-text',
}

export const metadata = {
  title: 'M4A in Text: Kostenlose iPhone Sprachmemo und Apple Audio Transkription | Mictoo',
  description:
    'Laden Sie eine M4A-Datei von iPhone Sprachmemos, GarageBand, Apple Podcasts oder FaceTime hoch und erhalten Sie in wenigen Sekunden ein bearbeitbares Transkript. AAC in MP4, keine Konvertierung erforderlich.',
  alternates: {
    canonical: 'https://mictoo.com/de/m4a-to-text',
    languages: LANGS,
  },
  openGraph: {
    title: 'M4A in Text: iPhone Sprachmemo und Apple Audio Transkription | Mictoo',
    description: 'Laden Sie M4A von Sprachmemos, GarageBand, Apple Podcasts oder FaceTime hoch. Bearbeitbares Transkript in Sekunden.',
    url: 'https://mictoo.com/de/m4a-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'M4A in Text: Kostenlose iPhone Sprachmemo Transkription',
    description: 'Laden Sie M4A von Sprachmemos, GarageBand, Apple Podcasts hoch. Bearbeitbares Transkript in Sekunden.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function DeM4aToTextPage() {
  return (
    <FormatPageLayout
      locale="de"
      badge="M4A · AAC · iPhone · Kostenlos"
      h1First="M4A in Text"
      h1Second="Für iPhone Sprachmemos und Apple Audio"
      subtitle="M4A ist das, was Ihre iPhone Sprachmemos-App schreibt, was GarageBand exportiert und was Apple Podcasts verteilt. Ziehen Sie die Datei direkt von Ihrem Gerät, behalten Sie das AAC, und erhalten Sie ein Transkript mit Zeitstempeln in Sekunden."
      highlightFormat="m4a"
      previewFileName="voice-memo.m4a"
      previewWordCount={148}
      previewDurationLabel="6:18"
      previewLines={[
        { t: '0:00',  line: 'Okay, schnelles Sprachmemo, bevor ich die ganze Idee vergesse.' },
        { t: '0:04',  line: 'Die Idee ist, dass wir den Checkout-Prozess in zwei klare Schritte aufteilen, anstatt ein langes Formular zu haben.' },
        { t: '0:13',  line: 'Schritt eins, nur E-Mail und Karte. Schritt zwei, Versanddetails, nachdem sie die Bestätigungsnummer gesehen haben.' },
        { t: '0:22',  line: 'Der Grund, warum das wichtig ist, ist, dass der Abbruch bei dem aktuellen einseitigen Formular bei etwa achtunddreißig Prozent liegt.' },
        { t: '0:32',  line: 'Der Großteil dieses Abbruchs passiert im Versandbereich, nicht bei der Karteneingabe, was kontraintuitiv ist.' },
        { t: '0:42',  line: 'Wenn wir den Versand nach dem Kauf verschieben, können wir wahrscheinlich zwölf bis fünfzehn Prozent dieses Traffics zurückgewinnen.' },
        { t: '0:52',  line: 'Zeitlich denke ich, dass dies zwei Wochen Frontend, eine Woche Backend und vielleicht eine Woche Testen dauert.' },
        { t: '1:02',  line: 'Folgen Sie morgen dem Checkout-Team, um zu sehen, ob es etwas gibt, das sie bereits ausprobiert haben und das gescheitert ist.' },
      ]}
      whyTitle="Warum Mictoo für M4A Transkription"
      whyCards={[
        {
          icon: 'mic',
          title: 'Für iPhone Sprachmemos entwickelt',
          desc: 'Ziehen Sie das .m4a direkt von Ihrem Sprachmemos-Teilen oder von iCloud. Kein Format-Nagging, kein Konvertierungsschritt.',
        },
        {
          icon: 'gear',
          title: 'AAC in MP4, nativ verarbeitet',
          desc: 'M4A ist AAC-Audio in einem MP4-Container. Wir analysieren die ftyp-Box, extrahieren den AAC-Track und geben ihn ohne Neukodierung an Whisper weiter.',
        },
        {
          icon: 'sparkles',
          title: 'KI-Zusammenfassung für Sprachmemo-Ideen',
          desc: 'Die Zusammenfassung erscheint neben dem Transkript. Wandelt wirres Brainstorming in eine prägnante Aktionsliste um.',
        },
        {
          icon: 'globe',
          title: 'In über 50 Sprachen übersetzen',
          desc: 'Sprachmemo auf Spanisch, Notiz während eines französischen Meetings, Diktat auf Japanisch. Übersetzen Sie nach der Transkription ins Englische (oder in jede andere Zielsprache).',
        },
      ]}
      scenariosTitle="Wann M4A in Text die richtige Wahl ist"
      scenarios={[
        {
          icon: 'mic',
          title: 'iPhone Sprachmemos',
          desc: 'Jede Aufnahme aus der integrierten Sprachmemos-App auf iPhone oder iPad. Ideen, Besprechungsnotizen, Interviewausschnitte, Vorträge.',
        },
        {
          icon: 'briefcase',
          title: 'FaceTime- und Anrufaufzeichnungen',
          desc: 'Audio, das aus FaceTime, WhatsApp-Anrufen oder Zoom-Sitzungen exportiert wird, landet oft als M4A. Ziehen Sie die Datei für eine saubere Textversion hierher.',
        },
        {
          icon: 'sparkles',
          title: 'GarageBand- und Logic-Exporte',
          desc: 'Vokal-only Bounce, Podcast-Episode oder Interview-Edit aus GarageBand oder Logic Pro. Erhalten Sie ein Transkript, um Show-Notizen zu erstellen.',
        },
        {
          icon: 'video',
          title: 'Apple Podcasts Episoden',
          desc: 'Heruntergeladene Episode von Apple Podcasts (M4A auf iOS standardmäßig). Transkript zum Zitieren, Referenzieren oder Wiederverwenden.',
        },
        {
          icon: 'editPen',
          title: 'Diktat und lange Notizen',
          desc: 'Sie haben ein Kapitel, ein Memo oder einen Tagebucheintrag in Sprachmemos diktiert. Wandeln Sie es in bearbeitbaren Text um, bereit für Ihre Schreib-App.',
        },
        {
          icon: 'users',
          title: 'Feldinterview',
          desc: 'Journalismus, Forschung oder mündliche Geschichtsinterviews, die auf dem iPhone aufgezeichnet wurden. Transkript ist das Rohmaterial für die Geschichte oder Arbeit.',
        },
      ]}
      technicalTitle="Was Sie über M4A wissen sollten"
      technicalIntro="M4A beschreibt einen auf MP4 basierenden Audio-Container, nicht einen einzelnen Codec. Die meisten Sprachaufnahmen verwenden AAC, während einige Dateien verlustfreies ALAC verwenden."
      technicalFacts={[
        {
          icon: 'layers',
          title: 'Container und Codec',
          desc: 'Eine .m4a-Datei enthält häufig AAC- oder ALAC-Audio. Der Container bietet Timing und Metadaten um diesen Audiostream.',
        },
        {
          icon: 'mic',
          title: 'Sprachmemos-Workflow',
          desc: 'Sie können die Originalaufnahme von einem iPhone oder Mac teilen und hochladen, ohne sie zuerst in MP3 umzubenennen.',
        },
        {
          icon: 'clip',
          title: 'Metadaten sind separat',
          desc: 'Titel, Artwork und Apple-Metadaten werden nicht in den Transkripttext eingefügt. Behalten Sie sie in Ihren Notizen oder Ihrem Veröffentlichungssystem.',
        },
        {
          icon: 'cloud',
          title: 'Lange Aufnahmen',
          desc: 'M4A ist normalerweise kompakt, aber lange Sprachmemos können trotzdem die Upload-Grenzen überschreiten. Teilen oder exportieren Sie eine kleinere Sprachkopie, wenn nötig.',
        },
      ]}
      faq={[
        {
          q: 'Akzeptieren Sie M4A direkt von iPhone Sprachmemos?',
          a: 'Ja. Sprachmemos schreibt standardmäßiges M4A (AAC im MP4-Container). Teilen Sie die Datei aus der App, speichern Sie sie in iCloud oder Dateien und ziehen Sie sie hierher. Keine Konvertierung erforderlich.',
        },
        {
          q: 'Was ist der Unterschied zwischen M4A und MP4?',
          a: 'M4A ist die Audio-only-Version des MP4-Containers. Beide verwenden den ftyp-Header und den AAC-Codec. .m4a signalisiert Audio-only-Inhalte, während .mp4 typischerweise Video impliziert. Mictoo akzeptiert beide direkt.',
        },
        {
          q: 'Meine iPhone-Aufnahme ist über 60 MB. Was nun?',
          a: 'Ein 90-minütiges Sprachmemo kann 60 MB überschreiten. Wenn Sie angemeldet sind, teilen wir automatisch bis zu etwa 3 Stunden auf. Für anonyme Benutzer zuerst herunterskalieren: ffmpeg -i in.m4a -b:a 64k -ac 1 out.m4a. Die Sprachqualität bleibt sauber.',
        },
        {
          q: 'Werden iPhone-Metadaten (Titel, Ort, Datum) angezeigt?',
          a: 'Nein. Das Transkript ist einfacher Text ohne Gerätemetadaten. Wenn Sie auf das Aufnahmedatum oder den Standort angewiesen sind, behalten Sie diese Zuordnung in Ihren Notizen.',
        },
        {
          q: 'Transkribiert Mictoo nicht-englische M4A-Dateien?',
          a: 'Ja. Whisper large-v3 unterstützt über 50 Sprachen mit automatischer Erkennung. Für kurze Sprachmemos oder nicht-englische Akzente setzen Sie die Sprache explizit für sauberere Ergebnisse in der ersten Durchlauf.',
        },
        {
          q: 'Kann ich SRT-Untertitel für ein Video herunterladen, das dieses M4A verwendet?',
          a: 'Ja. Laden Sie SRT oder VTT nach der Transkription herunter. Zeitstempel stimmen mit der ursprünglichen M4A-Zeitleiste überein, sodass, wenn Sie das M4A mit einem Videotrack synchronisieren, die Untertitel rahmen-genau übereinstimmen.',
        },
        {
          q: 'Kann ich das Transkript in eine andere Sprache übersetzen?',
          a: 'Ja. Wählen Sie nach der Transkription eine Zielsprache aus und klicken Sie auf Übersetzen. Die Übersetzung erfolgt mit GPT-4o-mini und erscheint neben dem Original.',
        },
        {
          q: 'Wird meine M4A-Datei auf Ihren Servern gespeichert?',
          a: 'Nein. Der Audio streamt zum Transkriptionsanbieter, wird einmal verarbeitet und aus dem Speicher gelöscht. Wir schreiben es niemals auf die Festplatte. Transkripte werden nur gespeichert, wenn Sie sich anmelden und in der Historie speichern.',
        },
        {
          q: 'Beeinflusst die M4A-Qualität das Transkript?',
          a: 'Kaum. iPhone Sprachmemos zeichnet mit etwa 32-64 kbps AAC auf, was für Whisper ausreichend ist. Whisper resampelt intern auf 16 kHz Mono, sodass die Codec-Bitrate minimale Auswirkungen auf saubere Sprache hat.',
        },
        {
          q: 'Wie lange dauert eine M4A-Transkription?',
          a: 'Ein 10-minütiges Sprachmemo benötigt typischerweise 15-30 Sekunden von Anfang bis Ende. Ein 60-minütiges Interview dauert 60-90 Sekunden. Die Upload-Geschwindigkeit ist oft der längere Schritt.',
        },
      ]}
      ctaHeadline="Laden Sie Ihr Sprachmemo hoch, erhalten Sie ein sauberes Transkript"
      ctaSubtitle="iPhone Sprachmemos, GarageBand, FaceTime, Apple Podcasts. AAC in MP4, keine Konvertierung erforderlich."
      ctaButton="M4A hochladen zur Transkription"
    />
  )
}