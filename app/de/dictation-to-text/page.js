import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/dictation-to-text',
  'fr': 'https://mictoo.com/fr/dictation-to-text',
  'de': 'https://mictoo.com/de/dictation-to-text',
  'es': 'https://mictoo.com/es/dictation-to-text',
  'ru': 'https://mictoo.com/ru/dictation-to-text',
  'it': 'https://mictoo.com/it/dictation-to-text',
  'pt': 'https://mictoo.com/pt/dictation-to-text',
  'pl': 'https://mictoo.com/pl/dictation-to-text',
  'ja': 'https://mictoo.com/ja/dictation-to-text',
  'ko': 'https://mictoo.com/ko/dictation-to-text',
  'x-default': 'https://mictoo.com/dictation-to-text',
}

export const metadata = {
  title: 'Diktat zu Text für aufgezeichnete Sprachentwürfe | Mictoo',
  description:
    'Nehmen Sie einen Sprachentwurf auf, laden Sie die Datei hoch und erhalten Sie bearbeitbaren Text mit Zeitstempeln und Exportoptionen für Ihren Schreibworkflow.',
  alternates: {
    canonical: 'https://mictoo.com/de/dictation-to-text',
    languages: LANGS,
  },
  openGraph: {
    title: 'Diktat zu Text: Kostenlos | Mictoo',
    description: 'Nehmen Sie einen Entwurf per Sprache auf, laden Sie die Datei hoch, und erhalten Sie sauberen Text.',
    url: 'https://mictoo.com/de/dictation-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diktat zu Text',
    description: 'Sprachgesteuertes Schreiben für Profis.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function DeDictationToTextPage() {
  return (
    <UseCaseLayout
      locale="de"
      badge="Schreiber · Profis · Kostenlos"
      h1First="Diktat zu Text"
      h1Second="Sprachgesteuertes Schreiben für alle, die schneller denken als sie tippen"
      subtitle="Nehmen Sie einen Entwurf mit Ihrem Telefon, Laptop oder einem beliebigen Diktiergerät auf. Laden Sie die Datei hoch. Erhalten Sie sauberen, punktierten Text, bereit zum Einfügen in Ihren Editor. Bessere Genauigkeit als die integrierte Diktierfunktion des Telefons für längere Inhalte."
      currentHref="/de/dictation-to-text"

      platforms={[
        { name: 'iPhone',       iconKey: 'mic',       brandBg: '#0F172A' },
        { name: 'Google Rec',   iconKey: 'mic',       brandBg: '#4285F4' },
        { name: 'Windows Rec',  iconKey: 'mic',       brandBg: '#0078D4' },
        { name: 'QuickTime',    iconKey: 'videoCameraFill', brandBg: '#374151' },
        { name: 'Audacity',     iconKey: 'soundwave', brandBg: '#0B60D6' },
        { name: 'Dragon',       iconKey: 'mic',       brandBg: '#DC2626' },
      ]}

      howItWorksTitle="Wie Diktat zu Text funktioniert"
      steps={[
        {
          icon: 'folder',
          title: 'Nehmen Sie Ihren Entwurf auf',
          desc: 'Jedes Aufnahmegerät: Telefon-Sprachmemo, Laptop-Sprachrekorder oder eine spezielle Diktieranwendung.',
        },
        {
          icon: 'upload',
          title: 'Laden Sie die Datei hier hoch',
          desc: 'M4A (iPhone), MP3 (Android), WAV (Recorder). Kostenlos bis zu 25 MB anonym, 60 MB angemeldet.',
        },
        {
          icon: 'editPen',
          title: 'Sauberer Text, bereit zum Einfügen',
          desc: 'Automatische Zeichensetzung, Satzpausen und Formatierung. Wechseln Sie in den Editor-Modus für Anpassungen vor dem Export.',
        },
      ]}

      exampleTitle="Beispiel für einen diktierten Entwurf"
      exampleFileName="kapitel-3-entwurf.m4a"
      exampleDurationLabel="12:44"
      exampleLines={[
        { t: '0:00',  line: 'Kapitel drei. Der Morgen des Prozesses.' },
        { t: '0:06',  line: 'Alex hatte kaum geschlafen. Nicht aus Angst, genau genommen, sondern aus der seltsamen Stille, die auf eine lange Vorbereitung folgt.' },
        { t: '0:20',  line: 'Sechs Monate lang war jede wache Stunde mit dem Fall beschäftigt gewesen. Und jetzt, plötzlich, gab es nichts mehr zu tun, als zu erscheinen.' },
        { t: '0:36',  line: 'Das Gerichtsgebäude war drei Straßenblocks von ihrer Wohnung entfernt. Sie ging langsam, ließ die kalte Märzluft durch sich wirken.' },
        { t: '0:50',  line: 'Als sie die vorderen Stufen erreichte, hatten sich die Reporter bereits versammelt und warteten auf ein bekanntes Gesicht.' },
        { t: '1:04',  line: 'Sie hielt den Kopf gesenkt und ging an ihnen vorbei. Später würde es Zeit für Fragen geben. Nicht vorher.' },
        { t: '1:18',  line: 'Drinnen war die Lobby größtenteils leer. Ein paar Angestellte, ein Hausmeister und der Sicherheitsbeamte, den sie diese Woche jeden Tag gesehen hatte.' },
      ]}
      summaryPoints={[
        'Eröffnung von Kapitel 3: Morgen des Prozesses.',
        'Charakter: Alex, Protagonistin, schlaflos, nicht ängstlich.',
        'Setting: kalter Märzmorgen, Gerichtsgebäude drei Straßenblocks entfernt.',
        'Medienpräsenz draußen; leere Lobby drinnen.',
      ]}
      actionItems={[]}

      whyTitle="Warum Mictoo für Diktate"
      whyCards={[
        {
          icon: 'target',
          title: 'Entwickelt für aufgezeichnete Entwürfe',
          desc: 'Nehmen Sie zuerst einen vollständigen Entwurf auf, dann transkribieren Sie ihn als eine Datei. Dadurch bleibt das Originalaudio verfügbar, während Sie den Text überprüfen und bearbeiten.',
        },
        {
          icon: 'editPen',
          title: 'Editor für die Nachbearbeitung des Diktats',
          desc: 'Wechseln Sie in den Editor-Modus, korrigieren Sie Namen, fügen Sie Absatzpausen hinzu und exportieren Sie als DOCX, bereit für Ihre Schreibanwendung.',
        },
        {
          icon: 'sparkles',
          title: 'KI-Zusammenfassung zur Gliederungsextraktion',
          desc: 'Solider erster Entwurf für die Kapitelstruktur, Memo-Stichpunkte oder Artikelstruktur.',
        },
        {
          icon: 'globe',
          title: 'Diktieren in jeder Sprache',
          desc: 'Über 50 Sprachen mit automatischer Erkennung. Mehrsprachige Schreiber können zwischen den Aufnahmen die Sprache wechseln, ohne die Einstellungen zu ändern.',
        },
      ]}

      scenariosTitle="Häufige Diktatszenarien"
      scenarios={[
        { icon: 'editPen', title: 'Erster Entwurf' },
        { icon: 'book',    title: 'Kapitel-Diktat' },
        { icon: 'briefcase', title: 'Memo / E-Mail' },
        { icon: 'chat',    title: 'Tagebuchführung' },
        { icon: 'search',  title: 'Forschungsnotizen' },
        { icon: 'globe',   title: 'Mehrsprachig' },
      ]}

      tipsTitle="Tipps für ein saubereres Diktat"
      tips={[
        'Sagen Sie "Komma", "Punkt", "neuer Absatz", wenn Sie explizite Zeichensetzung möchten.',
        'Nehmen Sie in einem ruhigen Raum auf, damit die Wörter leichter zu unterscheiden sind.',
        'Für lange Kapitel über 60 MB, melden Sie sich an für die automatische Aufteilung.',
        'Überprüfen Sie den Editor-Modus vor dem Export auf Namen und technische Begriffe.',
      ]}

      guidesTitle="Verwandte Werkzeuge"
      guides={[
        { href: '/de/voice-memo-to-text',      icon: 'mic',    title: 'Sprachmemo',   desc: 'Ideen festhalten, nicht Entwurf schreiben' },
        { href: '/de/m4a-to-text',             icon: 'file',   title: 'M4A-Format',   desc: 'iPhone / Apple-Exporte' },
        { href: '/de/transcribe-mp3-to-text',  icon: 'file',   title: 'MP3-Format',   desc: 'Android-Recorder-Exporte' },
        { href: '/de/interview-transcription', icon: 'chat',   title: 'Interview',    desc: 'Aufgezeichnetes Gespräch zwischen zwei Personen' },
      ]}

      faq={[
        {
          q: 'Wie unterscheidet sich Mictoo von live Diktaten am Telefon?',
          a: 'Mictoo arbeitet mit einer gespeicherten Aufnahme, anstatt live zuzuhören, während Sie tippen. Das macht es nützlich, um längere Entwürfe im Vergleich zum Originalaudio zu überprüfen, unter Berücksichtigung der aktuellen Dateigrößen- und Dauergrenzen.',
        },
        {
          q: 'Kann ich technische oder medizinische Begriffe diktieren?',
          a: 'Whisper verarbeitet gängige technische Begriffe gut. Für seltene oder proprietäre Begriffe verwenden Sie den Editor-Modus nach der Transkription, um eventuelle Fehler zu korrigieren. Schneller als Diktieren und Inline-Korrekturen.',
        },
        {
          q: 'Was ist die Dateigrößenbeschränkung für Diktate?',
          a: '25 MB anonym, 60 MB bei Anmeldung. Eine 60-minütige Sprachaufnahme bei typischer Bitrate beträgt 20-30 MB, sodass die meisten Diktatsitzungen unter dem kostenlosen Limit liegen.',
        },
        {
          q: 'Fügt Mictoo automatisch Zeichensetzung hinzu?',
          a: 'Ja. Sätze und Absätze werden aus dem Sprachrhythmus erkannt. Sagen Sie "Komma" oder "Punkt", wenn Sie an einem bestimmten Punkt explizite Zeichensetzung wünschen.',
        },
        {
          q: 'Kann ich das Transkript vor dem Export bearbeiten?',
          a: 'Ja. Wechseln Sie in den Editor-Modus, um jedes Wort oder jede Zeile inline zu bearbeiten. Speichern Sie die Änderungen und exportieren Sie als TXT, DOCX oder PDF (bei Anmeldung).',
        },
        {
          q: 'Kann ich meinen diktierten Entwurf übersetzen?',
          a: 'Ja. Wählen Sie eine Zielsprache und klicken Sie auf Übersetzen. Nützlich für Autoren, die in einer zweiten Sprache produzieren, oder für Übersetzer, die eine Arbeitsversion erstellen.',
        },
        {
          q: 'Werden Diktate auf Ihren Servern gespeichert?',
          a: 'Nein. Die Audiodaten werden an den Transkriptionsanbieter gestreamt, einmal verarbeitet und dann verworfen. Nur das Transkript bleibt bestehen, wenn Sie sich anmelden und es speichern.',
        },
      ]}

      ctaHeadline="Gesprochene Entwürfe in Text umwandeln"
      ctaSubtitle="Kapitel, Memo, Artikel, Tagebucheintrag. Schneller als Tippen, wenn Sie bereits wissen, was Sie sagen möchten."
      ctaButton="Ein Diktat hochladen"

      relatedLinks={[
        { href: '/de/voice-memo-to-text',      label: 'Sprachmemo zu Text' },
        { href: '/de/interview-transcription', label: 'Interviewtranskription' },
        { href: '/de/lecture-transcription',   label: 'Vorlesungstranskription' },
        { href: '/de/m4a-to-text',             label: 'M4A zu Text' },
        { href: '/de/transcribe-mp3-to-text',  label: 'MP3 zu Text' },
      ]}
    />
  )
}