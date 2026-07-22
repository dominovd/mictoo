import UseCaseLayout from '@/components/UseCaseLayout'

const LANGS = {
  'en': 'https://mictoo.com/voice-memo-to-text',
  'fr': 'https://mictoo.com/fr/voice-memo-to-text',
  'de': 'https://mictoo.com/de/voice-memo-to-text',
  'es': 'https://mictoo.com/es/voice-memo-to-text',
  'ru': 'https://mictoo.com/ru/voice-memo-to-text',
  'it': 'https://mictoo.com/it/voice-memo-to-text',
  'pt': 'https://mictoo.com/pt/voice-memo-to-text',
  'pl': 'https://mictoo.com/pl/voice-memo-to-text',
  'ja': 'https://mictoo.com/ja/voice-memo-to-text',
  'ko': 'https://mictoo.com/ko/voice-memo-to-text',
  'x-default': 'https://mictoo.com/voice-memo-to-text',
}

export const metadata = {
  title: 'Sprachnotiz zu Text für iPhone und Android | Mictoo',
  description:
    'Laden Sie eine Sprachnotiz von iPhone oder Android hoch und erhalten Sie zeitgestempelten Text, eine KI-Zusammenfassung und bearbeitbare Exporte.',
  alternates: {
    canonical: 'https://mictoo.com/de/voice-memo-to-text',
    languages: LANGS,
  },
  openGraph: {
    title: 'Sprachnotiz zu Text: Kostenlos | Mictoo',
    description: 'Laden Sie Ihre Sprachnotiz von iPhone oder Android hoch und erhalten Sie sauberen Text.',
    url: 'https://mictoo.com/de/voice-memo-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sprachnotiz zu Text',
    description: 'Kostenlose Transkription für Sprachnotizen.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function DeVoiceMemoToTextPage() {
  return (
    <UseCaseLayout
      locale="de"
      badge="iPhone · Android · Kostenlos"
      h1First="Sprachnotiz zu Text"
      h1Second="Kostenlose Transkription für Sprachnotizen"
      subtitle="Laden Sie Ihre iPhone-Sprachnotiz, Android-Sprachnotiz, WhatsApp-Sprachnotiz oder Telegram-Sprachnachricht hoch. Erhalten Sie in wenigen Sekunden ein sauberes Transkript. Keine Anmeldung, keine Gebühren pro Minute."
      currentHref="/de/voice-memo-to-text"

      platforms={[
        { name: 'iPhone',       iconKey: 'mic',       brandBg: '#0F172A' },
        { name: 'Google Rec',   iconKey: 'mic',       brandBg: '#4285F4' },
        { name: 'Samsung',      iconKey: 'mic',       brandBg: '#1428A0' },
        { name: 'WhatsApp',     iconKey: 'phone',     brandBg: '#25D366' },
        { name: 'Telegram',     iconKey: 'phone',     brandBg: '#0088CC' },
        { name: 'Audacity',     iconKey: 'soundwave', brandBg: '#0B60D6' },
      ]}

      howItWorksTitle="Wie die Transkription von Sprachnotizen funktioniert"
      steps={[
        {
          icon: 'folder',
          title: 'Teilen Sie die Aufnahme',
          desc: 'iPhone: Teilen Sie das Blatt aus der Sprachnotizen-App. Android: Datei aus der Dateien-App. WhatsApp: als Datei weiterleiten.',
        },
        {
          icon: 'upload',
          title: 'Laden Sie die Datei hier hoch',
          desc: 'M4A (iPhone), MP3 (Android), OPUS/OGG (WhatsApp, Telegram) funktionieren direkt.',
        },
        {
          icon: 'editPen',
          title: 'Transkript in Sekunden',
          desc: 'Eine 5-minütige Notiz wird in etwa 10 Sekunden fertig. Die KI-Zusammenfassung verwandelt wirre Ideen in eine prägnante Aktionsliste.',
        },
      ]}

      exampleTitle="Beispiel für ein Transkript einer Sprachnotiz"
      exampleFileName="voice-memo.m4a"
      exampleDurationLabel="3:22"
      exampleLines={[
        { t: '0:00',  line: 'Okay, schnelle Sprachnotiz, bevor ich die ganze Idee vergesse.' },
        { t: '0:04',  line: 'Also der Vorschlag ist, dass wir den Checkout-Prozess in zwei klare Schritte aufteilen, anstatt ein langes Formular zu haben.' },
        { t: '0:13',  line: 'Schritt eins, nur E-Mail und Karte. Schritt zwei, Versanddetails, nachdem sie die Bestätigungsnummer gesehen haben.' },
        { t: '0:22',  line: 'Der Grund, warum das wichtig ist, ist, dass der Abbruch bei dem aktuellen Ein-Seiten-Formular bei etwa achtunddreißig Prozent liegt.' },
        { t: '0:32',  line: 'Der größte Teil dieses Abbruchs geschieht im Versandbereich, nicht bei der Eingabe der Karte, was kontraintuitiv ist.' },
        { t: '0:42',  line: 'Wenn wir den Versand nach dem Kauf verschieben, können wir wahrscheinlich zwölf bis fünfzehn Prozent dieses Verkehrs zurückgewinnen.' },
        { t: '0:52',  line: 'Zeitlich denke ich, dass dies zwei Wochen Frontend, eine Woche Backend und vielleicht eine Woche Testen dauert.' },
      ]}
      summaryPoints={[
        'Idee: Checkout-Prozess in zwei Schritte aufteilen.',
        'Schritt 1: E-Mail + Karte. Schritt 2: Versand nach Bestätigung.',
        'Aktueller Abbruch: 38 %, hauptsächlich im Versandbereich.',
        'Geschätzte Wiederherstellung: 12-15 % des Verkehrs.',
      ]}
      actionItems={[
        'Entwurf eines Mockups für den zweistufigen Checkout',
        'Überprüfen Sie den 38 % Abbruch in der Analyse',
        'Umfang der Technik (~4 Wochen insgesamt)',
      ]}

      whyTitle="Warum Mictoo für Sprachnotizen"
      whyCards={[
        {
          icon: 'sparkles',
          title: 'KI-Zusammenfassung für wirre Notizen',
          desc: 'Sprachnotizen sind von Natur aus chaotisch. Die Zusammenfassung verwandelt einen fünfminütigen Gedankenstrom in eine zweizeilige Zusammenfassung.',
        },
        {
          icon: 'mic',
          title: 'iPhone .m4a nativ',
          desc: 'Apple Sprachnotizen schreibt .m4a (AAC in MP4). Wir akzeptieren es direkt, keine Konvertierung erforderlich.',
        },
        {
          icon: 'chat',
          title: 'Telegram .oga nativ',
          desc: 'Speichern Sie die Telegram-Sprachnachricht aus dem Chat und laden Sie die .oga-Datei hoch. Opus in OGG, nativ verarbeitet.',
        },
        {
          icon: 'globe',
          title: 'Übersetzen für mehrsprachige Notizen',
          desc: 'Notiz in Ihrer Muttersprache, englische Notizen für das Team. Ein Klick.',
        },
      ]}

      scenariosTitle="Häufige Szenarien für Sprachnotizen"
      scenarios={[
        { icon: 'sparkles', title: 'Ideen festhalten' },
        { icon: 'chat',     title: 'Besprechungsnotizen' },
        { icon: 'editPen',  title: 'Entwurf schreiben' },
        { icon: 'book',     title: 'Tagebuch führen' },
        { icon: 'phone',    title: 'Sprachnachricht' },
        { icon: 'globe',    title: 'Mehrsprachig' },
      ]}

      tipsTitle="Tipps für sauberere Sprachnotizen"
      tips={[
        'Halten Sie das Telefon nah, um Raumgeräusche zu reduzieren.',
        'Für lange Notizen über 60 MB, melden Sie sich an für die automatische Aufteilung.',
        'Sprechen Sie in einer Sprache pro Notiz für die sauberste Erkennung.',
        'Sagen Sie "neuer Absatz", wenn Sie möchten, dass das Transkript dort unterbrochen wird.',
      ]}

      guidesTitle="Verwandte Werkzeuge"
      guides={[
        { href: '/de/m4a-to-text',        icon: 'file',  title: 'M4A-Format',       desc: 'iPhone / GarageBand tiefgehende Analyse' },
        { href: '/de/ogg-to-text',        icon: 'file',  title: 'OGG / .oga',       desc: 'Telegram-Sprachnachricht tiefgehende Analyse' },
        { href: '/de/dictation-to-text',  icon: 'editPen', title: 'Diktat',      desc: 'Voice-first Schreibworkflow' },
        { href: '/de/interview-transcription', icon: 'chat', title: 'Interview',    desc: 'Telefon- oder persönliches Interview' },
      ]}

      faq={[
        {
          q: 'Kann ich iPhone-Sprachnotizen direkt transkribieren?',
          a: 'Ja. Teilen Sie die Notiz aus der Sprachnotizen-App (Teilen → in Dateien speichern oder sich selbst senden) und laden Sie die .m4a in Mictoo hoch. Keine Konvertierung erforderlich.',
        },
        {
          q: 'Transkribiert Mictoo WhatsApp- oder Telegram-Sprachnachrichten?',
          a: 'Ja. Speichern Sie die Sprachnachricht aus dem Chat (weiterleiten → als Datei speichern) und laden Sie sie hoch. WhatsApp-Sprachnotizen sind .opus, Telegram-Sprachnotizen sind .oga (beide sind OGG-Container). Beide funktionieren direkt.',
        },
        {
          q: 'Was ist die Dateigrößenbeschränkung?',
          a: '25 MB anonym, 60 MB bei Anmeldung. Eine 60-minütige Sprachnotiz hat bei typischer Bitrate etwa 20-30 MB, sodass die meisten unter die kostenlose Grenze fallen.',
        },
        {
          q: 'Transkribiert Mictoo nicht-englische Sprachnotizen?',
          a: 'Ja. Whisper large-v3 unterstützt über 50 Sprachen. Für kurze Notizen oder nicht-englische Inhalte, stellen Sie die Sprache explizit ein für eine sauberere Ersterkennung.',
        },
        {
          q: 'Kann ich eine Zusammenfassung einer wirren Brainstorming-Notiz erhalten?',
          a: 'Ja. Die KI-Zusammenfassung erscheint automatisch neben dem Transkript. Hervorragend geeignet, um Gedankenströme in prägnante Aktionslisten zu verwandeln.',
        },
        {
          q: 'Werden Sprachnotizen auf Ihren Servern gespeichert?',
          a: 'Nein. Der Audio-Stream wird an den Transkriptionsanbieter gesendet, einmal verarbeitet und dann gelöscht. Nur das Transkript bleibt erhalten, wenn Sie sich anmelden und es speichern.',
        },
        {
          q: 'Kann ich meine Sprachnotiz in eine andere Sprache übersetzen?',
          a: 'Ja. Wählen Sie eine Zielsprache und klicken Sie nach der Transkription auf Übersetzen. GPT-4o-mini übernimmt die Übersetzung und sie erscheint neben dem Original.',
        },
      ]}

      ctaHeadline="Verwandeln Sie Sprachnotizen in Text und Aktionspunkte"
      ctaSubtitle="iPhone, Android, WhatsApp, Telegram-Sprachnotizen. Alle Formate, ein Upload."
      ctaButton="Eine Sprachnotiz hochladen"

      relatedLinks={[
        { href: '/de/dictation-to-text',       label: 'Diktat zu Text' },
        { href: '/de/interview-transcription', label: 'Interviewtranskription' },
        { href: '/de/m4a-to-text',             label: 'M4A zu Text' },
        { href: '/de/ogg-to-text',             label: 'OGG zu Text' },
        { href: '/de/meeting-transcription',   label: 'Besprechungs-Transkription' },
      ]}
    />
  )
}