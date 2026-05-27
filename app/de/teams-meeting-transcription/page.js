import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/teams-meeting-transcription',
  'fr': 'https://mictoo.com/fr/teams-meeting-transcription',
  'de': 'https://mictoo.com/de/teams-meeting-transcription',
  'es': 'https://mictoo.com/es/teams-meeting-transcription',
  'ru': 'https://mictoo.com/ru/teams-meeting-transcription',
  'it': 'https://mictoo.com/it/teams-meeting-transcription',
  'pt': 'https://mictoo.com/pt/teams-meeting-transcription',
  'pl': 'https://mictoo.com/pl/teams-meeting-transcription',
  'ja': 'https://mictoo.com/ja/teams-meeting-transcription',
  'ko': 'https://mictoo.com/ko/teams-meeting-transcription',
  'x-default': 'https://mictoo.com/teams-meeting-transcription',
}

export const metadata = {
  title: 'Microsoft Teams-Transkription — Meetings transkribieren | Mictoo',
  description:
    'Kostenlose Microsoft Teams-Transkription. Laden Sie Ihre Aufnahme (MP4) aus OneDrive oder SharePoint hoch und erhalten Sie in Sekunden ein sauberes KI-Transkript. Ohne Anmeldung.',
  alternates: { canonical: 'https://mictoo.com/de/teams-meeting-transcription', languages: LANGS },
}

export default function DeTeamsPage() {
  return (
    <LandingLayout
      defaultLanguage="de"
      badge="TEAMS · ONEDRIVE · KOSTENLOS"
      h1={
        <>
          Microsoft Teams-Transkription
          <br />
          <span className="text-brand-600">Kostenlose Teams-Meeting-Transkription</span>
        </>
      }
      subtitle="Verwandeln Sie Ihre Teams-Aufnahme in sauberen Text. Legen Sie die MP4 aus OneDrive oder SharePoint ab, in Sekunden bekommen Sie das Transkript. Ohne Anmeldung, ohne Tarif pro Minute."
      howItWorks={[
        {
          icon: '☁️',
          title: 'Aus OneDrive oder SharePoint herunterladen',
          desc: 'Teams-Aufnahmen werden im OneDrive des Organisators gespeichert (bei Nicht-Kanal-Meetings) oder auf der SharePoint-Seite (bei Kanal-Meetings). Als MP4 herunterladen. Für lange Meetings zuerst Audio extrahieren.',
        },
        {
          icon: '⚡',
          title: 'Datei ablegen',
          desc: 'Wir holen das Audio aus der MP4 und schicken es an Whisper large-v3. Ein 30-Minuten-Meeting ist in rund einer Minute fertig.',
        },
        {
          icon: '📋',
          title: 'Transkript holen',
          desc: 'Im Browser lesen, kopieren oder als TXT oder SRT herunterladen. Falsche Namen oder Fachbegriffe inline vor dem Export korrigieren.',
        },
      ]}
      whyUse={{
        title: 'Warum Mictoo für Teams-Meetings',
        bullets: [
          {
            title: 'Funktioniert ohne spezifischen Microsoft 365-Lizenzeintrag für Transkription',
            desc: 'Solange Sie die Aufnahme-Datei haben, können Sie sie hier transkribieren. Kein Teams Premium oder bestimmte Office-Pläne nötig.',
          },
          {
            title: 'Stärkere Nicht-Englisch- und Akzent-Abdeckung',
            desc: 'Microsoft Teams-Transkription funktioniert gut in Englisch und den großen westeuropäischen Sprachen. Whisper large-v3 deckt über 50 Sprachen mit stärkerer Behandlung von Akzenten und zweisprachigen Gesprächen ab.',
          },
          {
            title: 'Kostenlos, kein Minuten-Zähler',
            desc: 'Teams-Transkription ist in Ihre Lizenz eingebaut, aber durch Feature-Gates begrenzt. Mictoo hat keinen Meeting-Cap und kein monatliches Minuten-Limit.',
          },
          {
            title: 'SRT-Export für Video-Editoren',
            desc: 'Das Teams-Transkript lebt in der Teams-App oder lädt sich als VTT herunter. Wir exportieren beides, TXT und sauberes SRT, drop-in kompatibel mit Premiere, DaVinci, CapCut und YouTube Studio.',
          },
          {
            title: 'Standardmäßige Privatsphäre',
            desc: 'Die Datei wird zum Transkriptions-Anbieter gestreamt, verarbeitet und verworfen. Wir behalten Ihr Meeting-Audio nicht.',
          },
        ],
      }}
      useCases={{
        title: 'Wofür Leute Teams-Meetings transkribieren',
        items: [
          {
            title: 'Projekt-Meeting-Protokolle',
            desc: 'Transkript in Confluence, Notion oder eine SharePoint-Seite einfügen. Wer das Meeting verpasst hat, liest den Text in 5 Minuten statt 60 Minuten Video zu schauen.',
          },
          {
            title: 'Review von Kundengesprächen für Account-Teams',
            desc: 'Transkript neben dem Deal in Salesforce, Dynamics oder HubSpot speichern. Zitatsuche für Follow-up-Mails dauert Sekunden.',
          },
          {
            title: 'Übergreifendes Entscheidungs-Log',
            desc: 'Große Entscheidungen aus Teams-Calls werden im Transkript zusammengefasst. Nützlich für Governance und Audit-Trails.',
          },
          {
            title: 'Anbieter- und Dienstleister-Calls',
            desc: 'Wenn ein Projekt externe Parteien einbezieht, ist das Transkript die unmissverständliche Aufzeichnung dessen, was vereinbart wurde.',
          },
          {
            title: 'Compliance und regulierte Branchen',
            desc: 'Manche Branchen verlangen die Aufzeichnung bestimmter Gespräche. Transkripte machen Audioaufzeichnungen durchsuchbar und indexierbar.',
          },
        ],
      }}
      proTips={{
        title: 'Tipps für Teams-Transkription',
        tips: [
          {
            title: 'Audio aus der MP4 vor dem Upload extrahieren',
            desc: 'Teams-MP4s sind 720p- oder 1080p-Video, was für die Transkription irrelevant ist. Nur Audio holen: ffmpeg -i teams.mp4 -vn -ac 1 -b:a 64k teams.mp3. Eine 1,5-GB-MP4 sinkt auf 30 MB oder weniger.',
          },
          {
            title: 'Aus OneDrive oder SharePoint herunterladen, nicht streamen',
            desc: 'OneDrive spielt MP4s manchmal im Browser ab. Stellen Sie sicher, dass Sie die Datei wirklich heruntergeladen haben, bevor Sie versuchen, sie hier hochzuladen. SharePoint-Sharing-Links sind nicht dasselbe wie die Datei selbst.',
          },
          {
            title: 'Für Meetings über 60 Minuten vor dem Upload teilen',
            desc: 'In 30- oder 45-Minuten-Stücke schneiden. Transkripte lassen sich zusammenfügen. Lange Teams-Calls sind häufig und es lohnt sich, sie sorgfältig zu behandeln.',
          },
          {
            title: 'Hintergrund-Benachrichtigungen während des Meetings stumm schalten, wenn möglich',
            desc: 'Outlook-Desktop-Benachrichtigungen und Teams-Chat-Töne während des Calls landen im Audio und manchmal im Transkript. Nutzen Sie Focus Assist auf Windows oder „Nicht stören" auf Mac.',
          },
          {
            title: 'Konferenzraum-Mikros brauchen Cleanup',
            desc: 'Teams Rooms mit Deckenmikros haben variable Audioqualität. Echo und Fernfeld-Aufnahme schaden der Genauigkeit. Adobe Podcast Enhance (kostenloses Web-Tool) kann bei diesen Aufnahmen vor dem Upload helfen.',
          },
          {
            title: 'Für vertrauliche Meetings keinen Upload nach extern',
            desc: 'Auch nicht zu uns. Für HR-, Rechts- oder Vorstands-Gespräche bevorzugen Sie On-Premise-Transkription. Unser Service ist für nicht-vertrauliche Meetings, bei denen Cloud-KI-Verarbeitung akzeptabel ist.',
          },
        ],
      }}
      faq={[
        {
          q: 'Funktioniert Mictoo mit Microsoft Teams-Aufnahmen?',
          a: 'Ja. Laden Sie die MP4 aus OneDrive (das OneDrive Ihres Organisators bei Nicht-Kanal-Meetings) oder von der SharePoint-Kanal-Seite herunter. Hier hochladen. Audio-Extraktion zuerst beschleunigt es bei langen Meetings.',
        },
        {
          q: 'Brauche ich Teams Premium oder einen bestimmten Microsoft 365-Plan?',
          a: 'Sie brauchen einen Plan, der Sie Meetings aufnehmen lässt. Sobald die Aufnahme in OneDrive oder SharePoint ist, ist die Transkription hier unabhängig von Ihrer Lizenz kostenlos.',
        },
        {
          q: 'Wird meine Aufnahme zu Microsoft hochgeladen?',
          a: 'Nein. Die Datei geht zu unserem Transkriptions-Anbieter (Groq, mit OpenAI als Backup) und wird nach der Verarbeitung verworfen. Nichts geht zu Microsoft, Outlook oder einem Microsoft-Service.',
        },
        {
          q: 'Wie vergleicht sich das mit Teams\' eingebauter Transkription?',
          a: 'Teams-Transkription ist okay für englische Meetings, wenn Ihre Lizenz sie enthält. Unsere ist kostenlos, funktioniert in mehr Sprachen und Akzenten und exportiert sauberes SRT für Video-Editoren. Nutzen Sie das, was zum Meeting passt.',
        },
        {
          q: 'Meine Teams-Aufnahme ist über 60 MB. Was tun?',
          a: 'Nur Audio mit ffmpeg oder einem Audio-Tool extrahieren. Eine 1,5-GB-Teams-MP4 sinkt auf unter 30 MB als Audio. Wenn das Audio immer noch über 60 MB ist, in Stücke teilen.',
        },
        {
          q: 'Bekomme ich Sprecher-Labels?',
          a: 'Nicht automatisch. Für ein Meeting mit unterscheidbaren Stimmen können Sie Labels manuell basierend auf dem Gespräch hinzufügen. Wenn Ihr Meeting mit separaten Audiospuren pro Sprecher aufgenommen wurde (selten bei Teams), laden Sie jede Spur separat hoch für saubere Zuordnung.',
        },
        {
          q: 'Funktioniert es mit Teams-Chat-Nachrichten?',
          a: 'Nein. Chat-Nachrichten bleiben in Teams. Wir transkribieren nur das Audio. Kombinieren Sie beides selbst, wenn Sie beides brauchen.',
        },
        {
          q: 'Wie genau ist die Teams-Transkription?',
          a: 'Für Meetings mit guten Mikros (Laptop mit USB-Headset): 90 bis 95 Prozent. Für Meetings in Konferenzräumen mit Deckenmikros: 80 bis 90 Prozent. Namen, Fachbegriffe und Akronyme brauchen oft Cleanup.',
        },
        {
          q: 'Kann ich ein Teams-Meeting in Echtzeit transkribieren?',
          a: 'Nein. Wir arbeiten mit aufgenommenen Dateien. Für Echtzeit während des Meetings nutzen Sie Teams\' eigene Live-Captions oder Transcript-Funktion.',
        },
        {
          q: 'Welche Sprachen unterstützen Sie?',
          a: 'Über 50 Sprachen mit Auto-Erkennung. Für Meetings unter 5 Minuten oder Dateien mit nicht-sprachlichen Intros (Waiting-Room-Musik, Hold-Tones) wählen Sie die Sprache manuell.',
        },
        {
          q: 'Kann ich das Transkript in ein Word-Dokument oder OneDrive exportieren?',
          a: 'Wir exportieren reinen Text (TXT) und SRT. Kopieren und in Word einfügen, oder laden Sie das TXT selbst in OneDrive hoch. Eine Microsoft 365-Integration haben wir noch nicht.',
        },
        {
          q: 'Ist das DSGVO-konform für europäische Teams-Meetings?',
          a: 'Wir speichern Audio oder Transkript nicht auf unseren Servern, nachdem Sie die Seite verlassen. Wir sind in Europa, und unsere Anbieter (Groq US, OpenAI US) haben DPAs unterzeichnet. Für spezifische Compliance-Fragen siehe unsere Datenschutzerklärung oder schreiben Sie an info@mictoo.com.',
        },
      ]}
      relatedLinks={[
        { href: '/de/zoom-transcription', label: 'Zoom-Transkription', desc: 'Für Zoom Cloud- oder lokale Aufnahmen.' },
        { href: '/de/google-meet-transcription', label: 'Google Meet-Transkription', desc: 'Für Google Meet-Aufnahmen.' },
        { href: '/de/meeting-transcription', label: 'Meeting-Transkription', desc: 'Für Aufnahmen von anderen Plattformen.' },
        { href: '/de/business-transcription', label: 'Business-Transkription', desc: 'Für Vertriebs-Calls, Interviews und andere Business-Audios.' },
      ]}
    />
  )
}
