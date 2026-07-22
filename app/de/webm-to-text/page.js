import FormatPageLayout from '@/components/FormatPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/webm-to-text',
  'fr': 'https://mictoo.com/fr/webm-to-text',
  'de': 'https://mictoo.com/de/webm-to-text',
  'es': 'https://mictoo.com/es/webm-to-text',
  'ru': 'https://mictoo.com/ru/webm-to-text',
  'it': 'https://mictoo.com/it/webm-to-text',
  'pt': 'https://mictoo.com/pt/webm-to-text',
  'pl': 'https://mictoo.com/pl/webm-to-text',
  'ja': 'https://mictoo.com/ja/webm-to-text',
  'ko': 'https://mictoo.com/ko/webm-to-text',
  'x-default': 'https://mictoo.com/webm-to-text',
}

export const metadata = {
  title: 'WebM zu Text: Loom, OBS und Browser-Bildschirmaufnahme-Transkription | Mictoo',
  description:
    'Laden Sie WebM-Bildschirmaufnahmen von Loom, OBS oder der MediaRecorder-API des Browsers hoch. Wir entfernen das Video und transkribieren den Ton. Bearbeitbares Transkript mit Zeitstempeln in Sekunden.',
  alternates: {
    canonical: 'https://mictoo.com/de/webm-to-text',
    languages: LANGS,
  },
  openGraph: {
    title: 'WebM zu Text: Loom, OBS, Transkription von Bildschirmaufnahmen | Mictoo',
    description: 'Laden Sie eine WebM-Bildschirmaufnahme hoch. Wir extrahieren den Ton und liefern ein bearbeitbares Transkript mit Zeitstempeln.',
    url: 'https://mictoo.com/de/webm-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WebM zu Text: Loom, OBS, Transkription von Bildschirmaufnahmen',
    description: 'Laden Sie eine WebM-Bildschirmaufnahme hoch. Wir extrahieren den Ton und liefern ein bearbeitbares Transkript.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function DeWebmToTextPage() {
  return (
    <FormatPageLayout
      locale="de"
      badge="WebM · Loom · OBS · Bildschirmaufnahme"
      h1First="WebM zu Text"
      h1Second="Für Loom, OBS und Browser-Bildschirmaufnahmen"
      subtitle="WebM ist das, was Loom exportiert, was OBS standardmäßig in neueren Versionen aufnimmt und was Browser schreiben, wenn Ihre App die MediaRecorder-API verwendet. Ziehen Sie die Datei hinein, wir entfernen das Video und transkribieren den Ton in Sekunden."
      highlightFormat="webm"
      previewFileName="loom-recording.webm"
      previewWordCount={172}
      previewDurationLabel="7:36"
      previewLines={[
        { t: '0:00',  line: 'Hey Team, ich wollte den neuen Onboarding-Prozess durchgehen, bevor wir ihn am Donnerstag veröffentlichen.' },
        { t: '0:07',  line: 'Das ist mein Bildschirm. Was Sie sehen, ist die Landing Page nach einer frischen Anmeldung.' },
        { t: '0:14',  line: 'Das erste, was auffällt, ist, dass das Willkommensmodal jetzt über dem Dashboard sitzt, anstatt die gesamte Ansicht zu blockieren.' },
        { t: '0:23',  line: 'Das ist absichtlich. Die Benutzer waren verwirrt, wenn das Dashboard vollständig durch die Tour verborgen war.' },
        { t: '0:32',  line: 'Zweitens sind die drei Tour-Schritte kürzer. Wir haben den Text ungefähr halbiert, basierend auf der letzten Feedbackrunde.' },
        { t: '0:41',  line: 'Wenn ich hier auf Tour überspringen klicke, schließt sich das Modal und wir bringen den Benutzer direkt in einen leeren Coach-Hinweis.' },
        { t: '0:51',  line: 'Dieser Coach-Hinweis zeigt auf die primäre Upload-Schaltfläche, die die einzige Aktion ist, die jeder Benutzer zuerst durchführen muss.' },
        { t: '1:00',  line: 'Lassen Sie mich wissen, was Sie denken. Probleme, die den Versand blockieren, bis Mittwochmorgen, wenn möglich.' },
      ]}
      whyTitle="Warum Mictoo für WebM-Transkription"
      whyCards={[
        {
          icon: 'video',
          title: 'Video WebM serverseitig verarbeitet',
          desc: 'WebM-Bildschirmaufnahme mit intaktem Video-Track. Wir demuxen, entfernen das Video und transkribieren den Ton. Keine lokale Extraktion erforderlich.',
        },
        {
          icon: 'gear',
          title: 'Opus und Vorbis werden beide unterstützt',
          desc: 'Die meisten WebM-Dateien enthalten Opus-Audio (neuere) oder Vorbis (ältere). Wir verarbeiten beide Codecs, keine manuelle Konvertierung erforderlich.',
        },
        {
          icon: 'clip',
          title: 'SRT-Untertitel für die Anleitung',
          desc: 'Laden Sie SRT oder VTT nach der Transkription herunter. Zeitstempel stimmen mit dem ursprünglichen WebM überein, sodass die Untertitel genau mit der Bildschirmaufnahme übereinstimmen.',
        },
        {
          icon: 'sparkles',
          title: 'KI-Zusammenfassung für Versionshinweise',
          desc: 'Die KI-Zusammenfassung ist ein solider erster Entwurf für die Ticketbeschreibung, die Versionsnotiz oder das asynchrone Update, das durch eine Anleitung ersetzt wurde.',
        },
      ]}
      scenariosTitle="Wann WebM zu Text die richtige Wahl ist"
      scenarios={[
        {
          icon: 'video',
          title: 'Loom-Anleitung',
          desc: 'Produktdemo, Codeüberprüfung oder asynchrones Update, das in Loom aufgezeichnet wurde. Das Transkript fließt in das Ticket, das Notion-Dokument oder die Follow-up-E-Mail.',
        },
        {
          icon: 'briefcase',
          title: 'OBS-Bildschirmaufnahme',
          desc: 'Tutorial oder Gameplay-Aufnahme, die mit OBS Studio aufgezeichnet wurde. Das Transkript wird zur YouTube-Beschreibung oder Blogbeschreibung.',
        },
        {
          icon: 'gear',
          title: 'Browser MediaRecorder-Ausgabe',
          desc: 'App-aufgezeichnetes Audio über die MediaRecorder-API. Ziehen Sie das .webm, das Ihre App produziert hat, ohne einen Konvertierungsschritt hinein.',
        },
        {
          icon: 'users',
          title: 'Google Meet oder Firefox-Aufnahme',
          desc: 'Einige Meeting-Tools und Browser nehmen standardmäßig in WebM auf. Ziehen Sie die Datei für eine durchsuchbare Textversion des Gesprächs hinein.',
        },
        {
          icon: 'editPen',
          title: 'Asynchrone Designüberprüfung',
          desc: 'Designer zeichnet ein WebM auf, während er ein Mockup durchgeht. Gutachter erhalten ein schriftliches Transkript, damit sie vor dem Anschauen überfliegen können.',
        },
        {
          icon: 'book',
          title: 'Vorlesung Bildschirmaufnahme',
          desc: 'Dozent hat Folien mit Erzählung aufgezeichnet und als WebM geteilt. Studenten erhalten ein durchsuchbares Transkript neben dem Video.',
        },
      ]}
      technicalTitle="Was Sie über WebM-Aufnahmen wissen sollten"
      technicalIntro="WebM ist ein browserfreundlicher Container, der Video plus Audio oder nur Audio enthalten kann. Die Einstellungen des Browsers und des Recorders bestimmen, welche Tracks und Codecs vorhanden sind."
      technicalFacts={[
        {
          icon: 'layers',
          title: 'Opus- oder Vorbis-Audio',
          desc: 'Die meisten aktuellen WebM-Sprachaufnahmen verwenden Opus; ältere Dateien können Vorbis verwenden. Beide befinden sich im WebM-Container.',
        },
        {
          icon: 'video',
          title: 'Nur Audio oder mit Video',
          desc: 'Ein WebM kann eine Bildschirmaufnahme oder nur einen Mikrofon-Track enthalten. Die Transkription verwendet den hörbaren Sprachstream.',
        },
        {
          icon: 'clip',
          title: 'Timeline-basierte Exporte',
          desc: 'Transkript-Zeitstempel folgen der dekodierten Aufnahme-Zeitachse für spätere Untertitel- oder Bearbeitungsarbeiten.',
        },
        {
          icon: 'gear',
          title: 'Browser-Recorder-Ausgabe',
          desc: 'MediaRecorder-Einstellungen variieren je nach Browser. Wenn eine Aufnahme keine Mikrofonberechtigung hat, kann sie keine Sprache enthalten, die transkribiert werden kann.',
        },
      ]}
      faq={[
        {
          q: 'Welche Art von WebM-Dateien akzeptiert Mictoo?',
          a: 'Jedes Standard-WebM: Video mit Opus- oder Vorbis-Audio (Loom, OBS, Browser MediaRecorder) oder Audio-only WebM. Wir demuxen den Audiotrack serverseitig und transkribieren mit Whisper large-v3.',
        },
        {
          q: 'Muss ich den Ton zuerst selbst extrahieren?',
          a: 'Nein. Laden Sie das WebM-Video so hoch, wie es ist. Wir kümmern uns serverseitig um das Demuxen und transkribieren nur den Audiotrack. Wenn Sie den Ton bereits extrahiert haben (Opus oder Vorbis), funktioniert das auch.',
        },
        {
          q: 'Mein Loom ist über 60 MB. Was nun?',
          a: 'Ein 20-30-minütiges Loom überschreitet oft 60 MB. Wenn Sie angemeldet sind, teilen wir lange Dateien automatisch in bis zu etwa 3 Stunden auf. Andernfalls verwenden Sie die Loom-Download-Einstellungen, um die Qualität zu reduzieren, oder exportieren Sie den Ton und laden Sie diesen hoch.',
        },
        {
          q: 'Stimmen die Zeitstempel mit meiner Bildschirmaufnahme überein?',
          a: 'Ja. Zeitstempel im Transkript und in SRT/VTT-Exporte stimmen mit der ursprünglichen WebM-Zeitachse überein, sodass die Untertitel genau mit der Bildschirmaufnahme übereinstimmen, wenn sie wieder auf das Video gelegt werden.',
        },
        {
          q: 'Kann ich SRT-Untertitel für die Anleitung erhalten?',
          a: 'Ja. Laden Sie SRT oder VTT nach der Transkription herunter. Ziehen Sie es in Ihren Video-Editor, YouTube-Upload oder Loom-Neu-Render-Workflow.',
        },
        {
          q: 'Transkribiert Mictoo nicht-englische WebM?',
          a: 'Ja. Whisper large-v3 unterstützt über 50 Sprachen mit automatischer Erkennung. Für kurze Aufnahmen oder nicht-englische Inhalte setzen Sie die Sprache explizit für sauberere Ergebnisse beim ersten Durchgang.',
        },
        {
          q: 'Was ist, wenn das WebM keine Audiospur hat?',
          a: 'Das Transkript wird leer sein. WebM-Dateien ohne Audiospur (stille Bildschirmaufnahmen, GIF-ähnliche Aufnahmen) haben nichts, was Whisper transkribieren kann.',
        },
        {
          q: 'Kann ich das Transkript in eine andere Sprache übersetzen?',
          a: 'Ja. Wählen Sie nach der Transkription eine Zielsprache aus und klicken Sie auf Übersetzen. Die Übersetzung erfolgt mit GPT-4o-mini und wird neben dem Original angezeigt.',
        },
        {
          q: 'Wird meine WebM-Datei auf Ihren Servern gespeichert?',
          a: 'Nein. Das WebM wird an den Transkriptionsanbieter gestreamt, wir demuxen und transkribieren im Speicher und löschen dann alles. Das Transkript wird nur gespeichert, wenn Sie sich anmelden und es in der Historie speichern.',
        },
        {
          q: 'Wie lange dauert eine WebM-Transkription?',
          a: 'Ein 10-minütiges Loom dauert typischerweise 20-40 Sekunden von Anfang bis Ende. Längere WebM-Dateien (30-45 Minuten) benötigen 60-90 Sekunden. Die Upload-Geschwindigkeit ist oft der längere Schritt bei großen Bildschirmaufnahmen.',
        },
      ]}
      ctaHeadline="Laden Sie Ihre Loom- oder OBS-Aufnahme hoch"
      ctaSubtitle="WebM-Bildschirmaufnahmen, Ausgabe des Browser-MediaRecorders. Video serverseitig demuxed."
      ctaButton="WebM hochladen, um zu transkribieren"
    />
  )
}