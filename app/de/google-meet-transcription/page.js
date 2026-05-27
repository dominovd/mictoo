import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/google-meet-transcription',
  'fr': 'https://mictoo.com/fr/google-meet-transcription',
  'de': 'https://mictoo.com/de/google-meet-transcription',
  'es': 'https://mictoo.com/es/google-meet-transcription',
  'ru': 'https://mictoo.com/ru/google-meet-transcription',
  'it': 'https://mictoo.com/it/google-meet-transcription',
  'pt': 'https://mictoo.com/pt/google-meet-transcription',
  'pl': 'https://mictoo.com/pl/google-meet-transcription',
  'ja': 'https://mictoo.com/ja/google-meet-transcription',
  'ko': 'https://mictoo.com/ko/google-meet-transcription',
  'x-default': 'https://mictoo.com/google-meet-transcription',
}

export const metadata = {
  title: 'Google Meet-Transkription — Meet-Aufnahmen kostenlos transkribieren | Mictoo',
  description:
    'Kostenlose Google Meet-Transkription. Laden Sie Ihre Meet-Aufnahme aus Drive (MP4 oder M4A) hoch und erhalten Sie in Sekunden ein sauberes KI-Transkript. Funktioniert mit kostenlosem Google Workspace.',
  alternates: { canonical: 'https://mictoo.com/de/google-meet-transcription', languages: LANGS },
}

export default function DeGoogleMeetPage() {
  return (
    <LandingLayout
      defaultLanguage="de"
      badge="GOOGLE MEET · MP4 · KOSTENLOS"
      h1={
        <>
          Google Meet-Transkription
          <br />
          <span className="text-brand-600">Meet-Aufnahmen transkribieren</span>
        </>
      }
      subtitle="Verwandeln Sie Ihre Google Meet-Aufnahme in sauberen Text. Legen Sie die MP4 aus Ihrem Drive ab, in Sekunden bekommen Sie das Transkript. Ohne Anmeldung, ohne Tarif pro Minute."
      howItWorks={[
        {
          icon: '☁️',
          title: 'Aus Google Drive herunterladen',
          desc: 'Google Meet-Aufnahmen werden in Ihrem Drive im Ordner „Meet Recordings" gespeichert. Als MP4 herunterladen (Rechtsklick, Download). Für lange Meetings extrahieren Sie zuerst das Audio, um Upload-Zeit zu sparen.',
        },
        {
          icon: '⚡',
          title: 'Datei ablegen',
          desc: 'Wir holen das Audio aus der MP4 und schicken es an Whisper large-v3. Ein 30-Minuten-Meeting ist in rund einer Minute fertig.',
        },
        {
          icon: '📋',
          title: 'Transkript holen',
          desc: 'Im Browser lesen, kopieren oder als TXT oder SRT herunterladen. Falsche Wörter inline vor dem Export korrigieren.',
        },
      ]}
      whyUse={{
        title: 'Warum Mictoo für Google Meet',
        bullets: [
          {
            title: 'Funktioniert auf jedem Workspace-Tier, auch dem kostenlosen',
            desc: 'Das Aufnehmen eines Meets selbst braucht einen Bezahl-Tier, aber sobald Sie die Datei haben, ist unsere Transkription unabhängig von Ihrem Workspace-Tier kostenlos.',
          },
          {
            title: 'Bessere Nicht-Englisch-Unterstützung',
            desc: 'Googles Transkription ist historisch am stärksten in Englisch. Whisper large-v3 deckt über 50 Sprachen mit Auto-Erkennung ab und ist deutlich besser bei Akzenten, zweisprachigen Gesprächen und Code-Switching.',
          },
          {
            title: 'Keine Daten gehen zurück an Google',
            desc: 'Wenn Sie für sensible Meetings bewusst Google-Ecosystem-Lock-in vermeiden, hält das Transkribieren hier den Text aus Google Workspace heraus.',
          },
          {
            title: 'SRT-Export funktioniert in jedem Video-Editor',
            desc: 'Googles Transkription gibt Ihnen den Text in Docs. Unsere exportiert sauberes SRT, fertig für Premiere, DaVinci oder YouTube Studio.',
          },
          {
            title: 'Privatsphäre',
            desc: 'Die Datei wird zum Transkriptions-Anbieter gestreamt und nach der Verarbeitung verworfen. Nichts wird auf unsere Server geschrieben.',
          },
        ],
      }}
      useCases={{
        title: 'Wofür Leute Google Meet-Aufnahmen transkribieren',
        items: [
          {
            title: 'Meeting-Notizen, die alle durchsuchen können',
            desc: 'Transkript in Google Docs oder Notion einfügen. Das zukünftige Ich erinnert sich nicht, was in Woche 14 des Projekts entschieden wurde. Durchsuchbarer Text hilft.',
          },
          {
            title: 'Asynchroner Catch-up für verteilte Teams',
            desc: 'Leute in anderen Zeitzonen, die das Live-Meeting verpasst haben, lesen das Transkript in Minuten, statt eine 60-Minuten-Aufnahme in 1,5x-Geschwindigkeit anzuschauen.',
          },
          {
            title: 'Review von Kundengesprächen',
            desc: 'Account Manager transkribieren wichtige Kundengespräche und speichern den Text im CRM. Schnelleres Erinnern, bessere Handoffs.',
          },
          {
            title: 'Webinar- und Town-Hall-Transkripte',
            desc: 'Für größere Events, die auf Meet aufgenommen wurden, ist das Transkript das, was Sie (neben der Aufnahme) für Barrierefreiheit und Auffindbarkeit veröffentlichen.',
          },
          {
            title: '1:1- und Performance-Gespräche (für die Führungskraft)',
            desc: 'Manche Manager transkribieren ihre 1:1s, um Notizen für Follow-up zu haben. Nützlich, aber seien Sie gegenüber dem Mitarbeitenden transparent, warum.',
          },
        ],
      }}
      proTips={{
        title: 'Tipps für Google Meet-Transkription',
        tips: [
          {
            title: 'Audio aus der MP4 vor dem Upload extrahieren',
            desc: 'Meet-Aufnahmen sind 720p-Video, was für ein Transkript verschwendete Bytes ist. Nur Audio holen: ffmpeg -i meet.mp4 -vn -ac 1 -b:a 64k meet.mp3. Eine 1 GB MP4 schrumpft auf 25 MB oder weniger.',
          },
          {
            title: 'MP4 herunterladen, nicht streamen',
            desc: 'Drive öffnet MP4s manchmal im Browser-Viewer. Stellen Sie sicher, dass Sie die Datei wirklich heruntergeladen haben, bevor Sie versuchen, sie hier hochzuladen. Drive-Sharing-Links sind keine Datei-Uploads.',
          },
          {
            title: 'Für Meetings über 60 Minuten vor dem Upload teilen',
            desc: 'Unser Cap ist 60 Minuten pro Datei mit Anmeldung. Audio zuerst in Stücke schneiden. Transkripte lassen sich danach zusammenfügen.',
          },
          {
            title: 'Hintergrund-Tabs und Apps während des Meetings stumm halten, wenn möglich',
            desc: 'Ein Spotify-Track, der unter Ihrer Meeting-Stimme läuft, landet im Transkript als zufällige Wörter. Gleiches bei Benachrichtigungstönen. Nicht immer nach der Aufnahme reparierbar.',
          },
          {
            title: 'Ein echtes Mikro verwenden, auch ein billiges Headset',
            desc: 'Eingebaute Laptop-Mikros nehmen Tastatur-Tippen, Lüftergeräusche und Raumecho auf. Ein kabelgebundenes 20-Dollar-USB-Headset transkribiert merklich sauberer.',
          },
          {
            title: 'Bei geteilten Aufnahmen die Drive-Freigabe-Einstellungen prüfen vor erneutem Hochladen anderswo',
            desc: 'Wenn jemand Ihnen eine Meet-Aufnahme geteilt hat, prüfen Sie doppelt, was Sie damit machen dürfen, bevor Sie sie für externe Nutzung transkribieren.',
          },
        ],
      }}
      faq={[
        {
          q: 'Funktioniert Mictoo mit Google Meet-Aufnahmen?',
          a: 'Ja. Laden Sie die MP4 aus Ihrem Drive-Meet-Recordings-Ordner herunter, dann hier hochladen. Audio-Extraktion (mit ffmpeg oder einem beliebigen Audio-Tool) beschleunigt das für lange Meetings.',
        },
        {
          q: 'Brauche ich einen bezahlten Google Workspace-Plan?',
          a: 'Sie brauchen einen bezahlten Workspace-Plan, um ein Meet überhaupt aufzunehmen. Sobald die Aufnahme in OneDrive oder SharePoint ist, ist die Transkription hier unabhängig von Ihrem Tier kostenlos.',
        },
        {
          q: 'Wird meine Aufnahme zurück zu Google hochgeladen?',
          a: 'Nein. Die Datei geht zu unserem Transkriptions-Anbieter (Groq, mit OpenAI als Backup) und wird nach der Verarbeitung verworfen. Nichts geht zu Google oder einem Google-Service.',
        },
        {
          q: 'Wie vergleicht sich das mit Googles eingebauter Transkription?',
          a: 'Unsere ist kostenlos und funktioniert auf jedem Workspace-Tier. Googles ist bequemer, wenn Ihr Plan sie enthält und Ihre Meetings auf Englisch sind. Für Nicht-Englisch, Akzente oder zweisprachige Meetings ist unsere genauer.',
        },
        {
          q: 'Meine Meet-Aufnahme ist über 60 MB. Was tun?',
          a: 'Nur Audio mit ffmpeg oder einem Audio-Tool extrahieren. Ein 1-GB-Video sinkt meist auf unter 30 MB als Audio. Wenn das Audio selbst über 60 MB ist, in Stücke teilen.',
        },
        {
          q: 'Bekomme ich Sprecher-Labels?',
          a: 'Nicht automatisch. Whisper macht standardmäßig keine Sprecher-Diarisierung. Sie müssen Sprecher-Labels manuell hinzufügen. Für ein 4-Personen-Meeting mit unterscheidbaren Stimmen dauert das meist 5 Minuten.',
        },
        {
          q: 'Funktioniert es mit Meet-Chat-Nachrichten?',
          a: 'Nein. Chat-Nachrichten werden separat von Google im Meet-Aufnahme-Ordner gespeichert. Wir transkribieren nur das Audio. Kombinieren Sie beides selbst, wenn Sie beides brauchen.',
        },
        {
          q: 'Wie genau ist die Google Meet-Transkription?',
          a: 'Für sauberes Audio (gute Mikros, kein Hintergrundlärm): 90 bis 95 Prozent. Konferenzraum-Aufnahmen mit mehreren Mikros oder Speakerphones sinken auf 80 bis 90 Prozent. Namen und Fachbegriffe brauchen oft Cleanup.',
        },
        {
          q: 'Kann ich einen Google Meet-Livestream transkribieren?',
          a: 'Nein. Wir arbeiten nur mit aufgenommenen Dateien, nicht mit Live-Streams. Sobald der Stream endet und die Aufnahme in Drive gespeichert ist, können Sie sie herunterladen und transkribieren.',
        },
        {
          q: 'Welche Sprachen unterstützen Sie?',
          a: 'Über 50 Sprachen mit Auto-Erkennung. Für Meetings unter 5 Minuten oder Dateien mit nicht-sprachlichen Intros wählen Sie die Sprache manuell für ein besseres Ergebnis.',
        },
        {
          q: 'Kann ich in ein Google Doc exportieren?',
          a: 'Wir exportieren reinen Text (TXT) und SRT. Kopieren und in Google Docs einfügen. Eine direkte Drive-Integration haben wir noch nicht.',
        },
        {
          q: 'Funktioniert das mit Meet-Aufnahmen aus anderen Workspace-Orgs?',
          a: 'Wenn Sie Zugriff haben, die Datei aus Ihrem Drive herunterzuladen, ja. Wir behandeln die Datei einfach als MP4. Wir prüfen oder kümmern uns nicht um ihren Ursprung.',
        },
      ]}
      relatedLinks={[
        { href: '/de/zoom-transcription', label: 'Zoom-Transkription', desc: 'Für Zoom Cloud- oder lokale Aufnahmen.' },
        { href: '/de/teams-meeting-transcription', label: 'Teams-Transkription', desc: 'Für Microsoft Teams-Aufnahmen.' },
        { href: '/de/meeting-transcription', label: 'Meeting-Transkription', desc: 'Für Aufnahmen von anderen Plattformen.' },
        { href: '/de/transcribe-video-to-text', label: 'Video in Text', desc: 'Generische Video-zu-Text-Seite.' },
      ]}
    />
  )
}
