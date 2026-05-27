import LandingLayout from '@/components/LandingLayout'

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
  title: 'Sprachmemo in Text — iPhone-Sprachmemos kostenlos transkribieren | Mictoo',
  description:
    'Kostenlose Sprachmemo-Transkription. Legen Sie Ihr iPhone-Sprachmemo oder Ihre Android-Sprachaufnahme (M4A, MP3) ab und erhalten Sie in Sekunden sauberen Text. Ohne Anmeldung.',
  alternates: { canonical: 'https://mictoo.com/de/voice-memo-to-text', languages: LANGS },
}

export default function DeVoiceMemoPage() {
  return (
    <LandingLayout
      defaultLanguage="de"
      badge="iPhone · Android · Kostenlos"
      h1={
        <>
          Sprachmemo in Text
          <br />
          <span className="text-brand-600">Kostenloser Sprachmemo-Transkribierer</span>
        </>
      }
      subtitle="Verwandeln Sie Sprachmemos in sauberen Text. iPhone, Android, dedizierter Rekorder, jede Sprach-Datei. Ablegen, in Sekunden das Transkript bekommen. Ohne Anmeldung, ohne Tarif pro Minute."
      howItWorks={[
        {
          icon: '📱',
          title: 'Memo auf den Computer bringen (oder vom Handy hochladen)',
          desc: 'iPhone: Sprachmemos öffnen, Teilen antippen, per AirDrop oder E-Mail an sich selbst senden. Android: Aufnahme in Dateien oder dem Ordner Ihrer Recorder-App finden. Oder den mobilen Browser nutzen, um direkt vom Handy hochzuladen.',
        },
        {
          icon: '📂',
          title: 'Datei ablegen',
          desc: 'M4A vom iPhone, M4A oder MP3 von Android, WAV von manchen Rekordern. Alles geht.',
        },
        {
          icon: '📋',
          title: 'Transkript holen',
          desc: 'Im Browser lesen, in die Zwischenablage kopieren oder als TXT herunterladen. In Notion, Apple Notes, Google Docs einfügen oder wo Ihre Notizen leben.',
        },
      ]}
      whyUse={{
        title: 'Warum Mictoo für Sprachmemos',
        bullets: [
          {
            title: 'Native M4A-Unterstützung',
            desc: 'iPhone-Sprachmemos werden als M4A gespeichert. Wir akzeptieren M4A direkt. Keine Konvertierung nötig.',
          },
          {
            title: 'Kostenlos, kein Minuten-Zähler',
            desc: 'Sprachmemos sind ein „eines nach dem anderen"-Format. Pro Minute für eine 2-Minuten-Idee zu zahlen, ist albern. Kostenlos ohne Cap passt zum Anwendungsfall.',
          },
          {
            title: 'Schnell für kurze Dateien',
            desc: 'Ein 2-Minuten-Sprachmemo transkribiert in etwa 5 Sekunden. Schneller, als die Idee selbst zu tippen.',
          },
          {
            title: 'Privatsphäre',
            desc: 'Sprachmemos sind oft persönlich. Ihr Audio wird zum Transkriptions-Anbieter gestreamt, verarbeitet und verworfen. Wir speichern es nicht.',
          },
          {
            title: 'Mobile-freundlich',
            desc: 'Direkt vom Handy über den Browser hochladen. iOS und Android funktionieren beide.',
          },
          {
            title: 'Auto-Erkennung handhabt Ihre Sprache',
            desc: 'Sprachmemos in jeder der über 50 Sprachen. Nützlich, wenn Sie in zwei Sprachen denken und Ihre Memos wechseln.',
          },
        ],
      }}
      useCases={{
        title: 'Wofür Leute Sprachmemo-Transkripte nutzen',
        items: [
          {
            title: 'Ideen-Erfassung unterwegs',
            desc: 'Sie hatten einen Gedanken während eines Spaziergangs, in Ihr Handy diktiert. Jetzt wollen Sie danach handeln. Transkribieren, in Ihren Task-Manager oder Ihre Notiz-App einfügen.',
          },
          {
            title: 'Diktieren langer Texte',
            desc: 'Manche entwerfen Essays, Blog-Posts oder E-Mails durch Sprechen. Sprachmemo transkribieren, Text bearbeiten, versenden.',
          },
          {
            title: 'Aktionspunkte nach einem Meeting',
            desc: 'Sie haben sich auf dem Rückweg aus dem Konferenzraum eine Zusammenfassung diktiert. Transkribieren, in das Projektdokument einfügen.',
          },
          {
            title: 'Feldnotizen für Journalisten und Forscher',
            desc: 'Beobachtungen und Zitate vor Ort erfassen. Später transkribieren für geordnete Notizen.',
          },
          {
            title: 'Erinnerungs-Listen (Einkauf, Vorbereitung, Projekt-Pläne)',
            desc: 'Sprachmemos sind schneller, als auf einem Handy zu tippen. Transkribieren für eine durchsuchbare, bearbeitbare Textversion.',
          },
        ],
      }}
      proTips={{
        title: 'Tipps für Sprachmemo-Transkription',
        tips: [
          {
            title: 'Das Handy nah halten, aber nicht zu nah',
            desc: '10 bis 15 cm vom Mund ist der Sweet Spot. Näher und das Mikro fängt Plosivlaute und Atem auf. Weiter weg und Sie verlieren Verständlichkeit in lauten Umgebungen.',
          },
          {
            title: 'Wind ist der Feind',
            desc: 'Ein 10-Sekunden-Sprachmemo auf einer windigen Straße kann unbrauchbar sein. Wenn Sie können, stehen bleiben, dem Wind den Rücken zudrehen, dann aufnehmen. Oder Kopfhörer mit windresistentem Mikro nutzen.',
          },
          {
            title: 'Pause vor Schlüsselwörtern',
            desc: 'Beim Diktieren eines Namens, einer Adresse oder eines Fachbegriffs kurz davor pausieren. Whisper handhabt isolierte Wörter besser als schnelles Sprechen für Eigennamen.',
          },
          {
            title: 'iPhone Sprachmemos ist standardmäßig auf verlustfreiem M4A, aber Sie können auf verlustbehaftet umstellen',
            desc: 'Settings, Sprachmemos, Audioqualität. Verlustfrei ist für Transkription übertrieben. Verlustbehaftet ist ein Drittel der Größe ohne Genauigkeits-Unterschied.',
          },
          {
            title: 'Stille am Anfang und Ende vor dem Upload abschneiden',
            desc: 'Sprachmemos fangen manchmal 3 bis 5 Sekunden tote Luft ein. In der Sprachmemos-App schneiden (Edit antippen), bevor Sie teilen. Kleinere Datei, schneller transkribiert.',
          },
          {
            title: 'Für lange Diktate (einen Entwurf per Stimme schreiben) in 5- bis 10-Minuten-Stücke teilen',
            desc: 'Einfacher zu bearbeiten. Einfacher, ein einzelnes Stück neu aufzunehmen, wenn es schiefgeht.',
          },
          {
            title: 'Whisper handhabt Ihren Akzent besser als die eingebaute Diktier-Funktion Ihres Handys',
            desc: 'iOS hat eingebautes Diktieren, aber es ist Englisch-first und schwächer bei Akzenten. Whisper deckt über 50 Sprachen mit besserer Genauigkeit ab.',
          },
        ],
      }}
      faq={[
        {
          q: 'Unterstützt Mictoo iPhone-Sprachmemos?',
          a: 'Ja. iPhone-Sprachmemos werden als M4A gespeichert (manchmal verlustfrei als ALAC). Die M4A funktioniert direkt. Für ALAC zuerst in WAV oder M4A AAC konvertieren.',
        },
        {
          q: 'Wie bringe ich das Sprachmemo vom iPhone zu Mictoo?',
          a: 'Drei Optionen. Das Memo in Sprachmemos öffnen, Teilen antippen, AirDrop zum Mac wählen (am schnellsten) oder per E-Mail an sich selbst. Oder Safari auf dem iPhone nutzen, um mictoo.com zu öffnen und direkt aus der Dateien-App hochzuladen.',
        },
        {
          q: 'Was ist mit Android-Sprachaufnahmen?',
          a: 'Android-Sprachrekorder speichern meist als M4A oder MP3. Beides funktioniert. Datei in der Dateien-App finden, auf den Computer teilen oder vom mobilen Browser hochladen.',
        },
        {
          q: 'Kann ich direkt vom Handy hochladen?',
          a: 'Ja. Die Seite ist mobile-freundlich. Upload-Bereich antippen, Datei aus der Dateien-App Ihres Handys oder dem Aufnahmen-Ordner wählen.',
        },
        {
          q: 'Wie lang darf mein Sprachmemo sein?',
          a: 'Bis zu 30 Minuten pro Datei kostenlos, 60 Minuten mit Anmeldung. Die meisten Sprachmemos sind unter 5 Minuten, gut innerhalb jeder Grenze.',
        },
        {
          q: 'Wie genau ist die Sprachmemo-Transkription?',
          a: 'Für klare Sprache in ruhiger Umgebung: 90 bis 95 Prozent. Für genuschelte Sprache, Hintergrundlärm (Straße, Café, Auto) sinkt die Genauigkeit. Eigennamen brauchen oft Cleanup.',
        },
        {
          q: 'Wird das Transkript Zeichensetzung enthalten?',
          a: 'Ja. Whisper fügt Zeichensetzung automatisch hinzu. Nicht immer perfekt für diktierte Sprache (die weniger natürliche Satzgrenzen hat), aber so nutzbar.',
        },
        {
          q: 'Funktioniert es zum Diktieren in einer nicht-englischen Sprache?',
          a: 'Ja, über 50 Sprachen. Wählen Sie die Sprache manuell aus dem Dropdown für kurze Memos (Auto-Erkennung braucht mehr Audio, um zuverlässig zu sein).',
        },
        {
          q: 'Wird mein Sprachmemo gespeichert?',
          a: 'Nein. Die Datei wird zu unserem Transkriptions-Anbieter gestreamt, verarbeitet und dann verworfen.',
        },
        {
          q: 'Kann ich das Transkript vor dem Download bearbeiten?',
          a: 'Ja. Falsche Wörter im Browser vor dem Export korrigieren.',
        },
        {
          q: 'Funktioniert das zum Aufnehmen von Telefonanrufen?',
          a: 'Wir transkribieren die Datei, die Sie hochladen, unabhängig davon, wie sie aufgenommen wurde. Anruf-Aufnahme selbst erfordert in den meisten Jurisdiktionen Einverständnis. Holen Sie das Einverständnis ein, bevor Sie aufnehmen.',
        },
        {
          q: 'Was ist der Unterschied zwischen dem und der eingebauten iOS-Diktier-Funktion?',
          a: 'iOS-Diktieren ist in Echtzeit, während Sie sprechen, auf bestimmte Sprachen begrenzt und schwächer bei Akzenten. Mictoo transkribiert nach der Aufnahme, unterstützt über 50 Sprachen und nutzt ein präziseres Modell (Whisper large-v3).',
        },
      ]}
      relatedLinks={[
        { href: '/de/m4a-to-text', label: 'M4A in Text', desc: 'Speziell für M4A-Dateien.' },
        { href: '/de/dictation-to-text', label: 'Diktat in Text', desc: 'Für diktierte Text-Entwürfe und Langform-Stimmen-Schreiben.' },
        { href: '/de/interview-transcription', label: 'Interview-Transkription', desc: 'Für telefonisch aufgenommene Interviews.' },
        { href: '/de/transcribe-audio-to-text', label: 'Audio in Text', desc: 'Für andere Audioformate.' },
      ]}
    />
  )
}
