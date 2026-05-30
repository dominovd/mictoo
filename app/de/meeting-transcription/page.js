import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/meeting-transcription',
  'fr': 'https://mictoo.com/fr/meeting-transcription',
  'de': 'https://mictoo.com/de/meeting-transcription',
  'es': 'https://mictoo.com/es/meeting-transcription',
  'ru': 'https://mictoo.com/ru/meeting-transcription',
  'it': 'https://mictoo.com/it/meeting-transcription',
  'pt': 'https://mictoo.com/pt/meeting-transcription',
  'pl': 'https://mictoo.com/pl/meeting-transcription',
  'ja': 'https://mictoo.com/ja/meeting-transcription',
  'ko': 'https://mictoo.com/ko/meeting-transcription',
  'x-default': 'https://mictoo.com/meeting-transcription',
}

export const metadata = {
  title: 'Meeting-Transkription — kostenloses KI-Transkript für Calls und Meetings | Mictoo',
  description:
    'Kostenlose KI-Meeting-Transkription. Laden Sie eine beliebige Meeting-Aufnahme (von jeder Plattform) hoch und erhalten Sie in Sekunden sauberen Text. Ohne Anmeldung, ohne Tarif pro Minute, über 50 Sprachen.',
  alternates: { canonical: 'https://mictoo.com/de/meeting-transcription', languages: LANGS },

  openGraph: {
    title: "Meeting-Transkription — kostenloses KI-Transkript für Calls und Meetings | Mictoo",
    description: "Kostenlose KI-Meeting-Transkription. Laden Sie eine beliebige Meeting-Aufnahme (von jeder Plattform) hoch und erhalten Sie in Sekunden sauberen Text. Ohne Anmeldung, ohne Tarif pro Minute, über 50 Sprachen.",
    url: "https://mictoo.com/de/meeting-transcription",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meeting-Transkription — kostenloses KI-Transkript für Calls und Meetings | Mictoo",
    description: "Kostenlose KI-Meeting-Transkription. Laden Sie eine beliebige Meeting-Aufnahme (von jeder Plattform) hoch und erhalten Sie in Sekunden sauberen Text. Ohne Anmeldung, ohne Tarif pro Minute, über 50 Sprachen.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function DeMeetingPage() {
  return (
    <LandingLayout
      defaultLanguage="de"
      badge="Jede Plattform · Kostenlos · 50+ Sprachen"
      h1={
        <>
          Meeting-Transkription
          <br />
          <span className="text-brand-600">Kostenlose KI-Meeting-Transkripte</span>
        </>
      }
      subtitle="Verwandeln Sie jede Meeting-Aufnahme in sauberen Text. Funktioniert mit Zoom, Meet, Teams, Webex, Discord, Skype, Sprachrekordern, allem. Ohne Anmeldung, ohne Tarif pro Minute."
      howItWorks={[
        {
          icon: '🎙️',
          title: 'Meeting-Aufnahme besorgen',
          desc: 'Egal welche Plattform Sie genutzt haben (Zoom, Meet, Teams, Webex, Discord, GoToMeeting, Vor-Ort-Sprachrekorder), exportieren Sie die Aufnahme als MP4, MP3, M4A, WAV, FLAC oder OGG.',
        },
        {
          icon: '⚡',
          title: 'Datei ablegen',
          desc: 'Wir extrahieren das Audio bei Bedarf und schicken es an Whisper large-v3. Ein 30-Minuten-Meeting ist in rund einer Minute fertig.',
        },
        {
          icon: '📋',
          title: 'Transkript holen',
          desc: 'Lesen, kopieren oder als TXT oder SRT herunterladen. Korrigieren Sie falsche Wörter oder Fachbegriffe inline vor dem Export.',
        },
      ]}
      whyUse={{
        title: 'Warum Mictoo für Meetings',
        bullets: [
          {
            title: 'Quell-Plattform spielt keine Rolle',
            desc: 'Zoom, Meet, Teams, Webex, Discord, GoToMeeting, BlueJeans, Vor-Ort-Rekorder. Wenn Sie die Datei haben, transkribieren wir sie.',
          },
          {
            title: 'Ein Modell für alle Meetings',
            desc: 'Dasselbe Whisper large-v3 für den Vertriebs-Call, den Sie auf Zoom aufgenommen haben, und die Team-Retro, die Sie auf Teams erfasst haben. Konsistente Genauigkeit, konsistentes Ausgabeformat.',
          },
          {
            title: 'Kostenlos, kein Minuten-Zähler',
            desc: 'Die meisten Meeting-Tool-Transkriptionen sind in eine Lizenz-Stufe eingebaut, die ihre eigenen Kosten hat. Unsere ist echt kostenlos, kein monatliches Cap.',
          },
          {
            title: 'Über 50 Sprachen',
            desc: 'Grenzüberschreitende Meetings, zweisprachige Gespräche, internationale Teams. Whisper kommt mit allen klar, mit Auto-Erkennung oder manueller Sprachauswahl.',
          },
          {
            title: 'Nichts wird gespeichert',
            desc: 'Die Datei wird zum Transkriptions-Anbieter gestreamt und verworfen. Wir schreiben Ihr Meeting-Audio nicht auf unsere Server.',
          },
        ],
      }}
      useCases={{
        title: 'Gängige Meeting-Typen, die Leute transkribieren',
        items: [
          {
            title: 'Team-Stand-ups und Retros',
            desc: 'Asynchrone Teams transkribieren Stand-ups, damit Leute in anderen Zeitzonen aufholen können. Retros profitieren von einer schriftlichen Aufzeichnung für Follow-up-Aktionen.',
          },
          {
            title: 'Kunden- und Customer-Calls',
            desc: 'Vertriebs-Calls, Account-Check-ins, Customer Interviews. Speichern Sie das Transkript im CRM neben dem Deal oder Kontakt.',
          },
          {
            title: 'Interne Trainings und Onboarding-Sessions',
            desc: 'Neue Mitarbeitende lesen das Transkript, während sie das Video schauen. Bessere Behaltensleistung, später durchsuchbar, wenn sie einen Schritt vergessen.',
          },
          {
            title: 'Vorstandssitzungen, Leadership-Offsites, All-Hands',
            desc: 'Transkripte machen Unternehmenskommunikation zugänglicher. Nützlich für Mitarbeitende, die nicht teilnehmen konnten, und für die Dokumentation.',
          },
          {
            title: 'Interviews und qualitative Forschung',
            desc: 'Ob es um Kandidaten-Screening, User Interviews oder Journalismus geht, das Transkript ist das eigentliche Arbeitsergebnis.',
          },
        ],
      }}
      proTips={{
        title: 'Tipps für Meeting-Transkription',
        tips: [
          {
            title: 'Audio extrahieren, wenn die Quelle Video ist',
            desc: 'Meeting-Plattformen exportieren MP4 mit Audio und Video. Wir brauchen nur das Audio. ffmpeg -i meeting.mp4 -vn -ac 1 -b:a 64k meeting.mp3 macht aus einem 1-GB-MP4 25 MB oder weniger. Schnellerer Upload, gleiches Transkript.',
          },
          {
            title: 'Stellen Sie sicher, dass alle ein echtes Mikro haben',
            desc: 'Eingebaute Laptop-Mikros bei einem WLAN-Call produzieren verrauschtes, echohaltiges Audio. Ein kabelgebundenes 20-Dollar-USB-Headset für jeden Teilnehmer zahlt sich in Transkript-Genauigkeit aus.',
          },
          {
            title: 'Teilnehmer stummschalten, die nicht sprechen',
            desc: 'Offene Mikros während einer Präsentation nehmen Tastatur-Tippen, Hintergrundgeräusche im Raum und Nebengespräche auf. Whisper transkribiert das manchmal als Unsinn-Wörter.',
          },
          {
            title: 'Bei Meetings mit nicht-muttersprachlichen Englisch-Sprechern nicht unnötig teilen',
            desc: 'Whisper profitiert von längerem Kontext für seltenere Phrasen. Eine durchgängige 30-Minuten-Datei transkribiert besser als drei 10-Minuten-Stücke, wenn Sie die Wahl haben.',
          },
          {
            title: 'Lange Meetings teilen sich besser an natürlichen Pausen',
            desc: 'Wenn Sie ein 90-Minuten-Meeting in Stücke teilen müssen, suchen Sie nach natürlichen Pausen (eine Kaffeepause, ein Agenda-Übergang) und teilen Sie dort. Geringeres Risiko, einen Satz in der Mitte zu schneiden.',
          },
          {
            title: 'Sprache manuell wählen für kurze oder ungewöhnliche Meetings',
            desc: 'Auto-Erkennung samplet den ersten Audio-Chunk. Für Meetings, die mit Warteschleifen-Musik, einer kurzen Begrüßung oder Stille beginnen, ist manuelle Sprachauswahl zuverlässiger.',
          },
        ],
      }}
      faq={[
        {
          q: 'Welche Meeting-Plattformen unterstützen Sie?',
          a: 'Alle. Wir arbeiten mit der Aufnahme-Datei, nicht mit der Plattform. Zoom, Microsoft Teams, Google Meet, Webex, Discord, Skype, GoToMeeting, BlueJeans, Vor-Ort-Sprachrekorder. Wenn die Datei MP4, MP3, M4A, WAV, FLAC, OGG oder WEBM ist, transkribieren wir sie.',
        },
        {
          q: 'Mein Meeting war auf Zoom (oder Meet, oder Teams). Soll ich diese Seite nutzen oder die plattformspezifische?',
          a: 'Gleicher Motor, gleiche Genauigkeit. Die plattformspezifischen Seiten geben Ihnen gezieltere Tipps. Nutzen Sie das, was Ihnen leichter fällt.',
        },
        {
          q: 'Bekomme ich Sprecher-Labels?',
          a: 'Nicht automatisch. Whisper macht standardmäßig keine Sprecher-Diarisierung. Für ein Meeting mit unterscheidbaren Stimmen fügen Sie Labels manuell basierend auf dem Gespräch hinzu. Für Meetings mit separaten Audiospuren pro Sprecher (Riverside, SquadCast, manchmal Zoom) transkribieren Sie jede Spur separat.',
        },
        {
          q: 'Meine Meeting-Aufnahme ist über 60 MB. Was tun?',
          a: 'Zwei Optionen. Nur Audio aus dem Video extrahieren (ein ffmpeg-Befehl), oder das Meeting in Stücke teilen.',
        },
        {
          q: 'Wie genau ist die Meeting-Transkription?',
          a: 'Für sauberes Audio (gute Mikros, kein Hintergrundlärm): 90 bis 95 Prozent. Für Konferenzraum-Mikros oder Speakerphones: 80 bis 90 Prozent. Namen und Fachbegriffe brauchen oft Cleanup.',
        },
        {
          q: 'Wird mein Meeting auf Ihren Servern gespeichert?',
          a: 'Nein. Die Datei wird zum Transkriptions-Anbieter gestreamt und nach der Verarbeitung verworfen. Wir schreiben weder Ihr Meeting-Audio noch das Transkript in unsere Datenbank.',
        },
        {
          q: 'Ist die Meeting-Transkription auf Mictoo DSGVO-konform?',
          a: 'Wir behalten Audio oder Transkript nicht, nachdem Sie die Seite verlassen. Wir sind in Europa, und unsere Anbieter (Groq US, OpenAI US) haben DPAs. Für spezifische Compliance-Fragen siehe unsere Datenschutzerklärung.',
        },
        {
          q: 'Kann ich eine Zusammenfassung des Meetings bekommen, nicht nur das Transkript?',
          a: 'Derzeit liefern wir das vollständige Transkript. Für Zusammenfassungen fügen Sie das Transkript in ChatGPT oder Claude ein mit einem Prompt wie „Fasse dieses Meeting-Transkript in Schlüsselentscheidungen und Aktionspunkte zusammen".',
        },
        {
          q: 'Welche Sprachen werden unterstützt?',
          a: 'Über 50, mit Auto-Erkennung. Für Meetings unter 5 Minuten oder Dateien mit nicht-sprachlichen Intros wählen Sie die Sprache manuell für zuverlässigere Ergebnisse.',
        },
        {
          q: 'Kann ich ein Meeting in Echtzeit transkribieren?',
          a: 'Nein. Wir arbeiten mit aufgenommenen Dateien. Für Echtzeit nutzen Sie die eigene Live-Transkription der Meeting-Plattform oder einen dedizierten Meeting-Assistenten.',
        },
        {
          q: 'Wie bekomme ich die SRT-Datei passend zu meinem Meeting-Video?',
          a: 'Laden Sie die SRT nach der Transkription herunter. Die meisten Video-Editoren (Premiere, DaVinci, CapCut, Final Cut) importieren SRTs, die sich automatisch ausrichten, solange das Audio im Video mit dem übereinstimmt, was Sie transkribiert haben.',
        },
        {
          q: 'Kann ich vertrauliche Meetings transkribieren?',
          a: 'Für vertrauliche Meetings (HR, Recht, M&A, Vorstand) seien Sie vorsichtig mit jedem Cloud-Transkriptions-Service, einschließlich unserem. Unsere Datei wird nicht gespeichert, aber sie geht durch einen Drittanbieter-Sprach-Anbieter zur Verarbeitung. Für maximale Privatsphäre nutzen Sie stattdessen eine lokale Whisper-Installation.',
        },
      ]}
      relatedLinks={[
        { href: '/de/zoom-transcription', label: 'Zoom-Transkription', desc: 'Zoom-spezifische Tipps und Export-Workflow.' },
        { href: '/de/google-meet-transcription', label: 'Google Meet-Transkription', desc: 'Für Google Meet-Aufnahmen.' },
        { href: '/de/teams-meeting-transcription', label: 'Teams-Transkription', desc: 'Für Microsoft Teams-Aufnahmen.' },
        { href: '/de/business-transcription', label: 'Business-Transkription', desc: 'Für Kundengespräche, Konferenzen und Vertriebs-Calls.' },
      ]}
    />
  )
}
