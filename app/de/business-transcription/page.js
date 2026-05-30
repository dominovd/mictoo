import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/business-transcription',
  'fr': 'https://mictoo.com/fr/business-transcription',
  'de': 'https://mictoo.com/de/business-transcription',
  'es': 'https://mictoo.com/es/business-transcription',
  'ru': 'https://mictoo.com/ru/business-transcription',
  'it': 'https://mictoo.com/it/business-transcription',
  'pt': 'https://mictoo.com/pt/business-transcription',
  'pl': 'https://mictoo.com/pl/business-transcription',
  'ja': 'https://mictoo.com/ja/business-transcription',
  'ko': 'https://mictoo.com/ko/business-transcription',
  'x-default': 'https://mictoo.com/business-transcription',
}

export const metadata = {
  title: 'Business-Transkription — kostenloses Tool für Meetings und Calls | Mictoo',
  description:
    'Kostenlose Business-Transkription. Vertriebs-Calls, Customer Interviews, Fokusgruppen, Vorstandssitzungen, Konferenzen. Hochladen und in Sekunden ein sauberes KI-Transkript erhalten. Ohne Anmeldung.',
  alternates: { canonical: 'https://mictoo.com/de/business-transcription', languages: LANGS },

  openGraph: {
    title: "Business-Transkription — kostenloses Tool für Meetings und Calls | Mictoo",
    description: "Kostenlose Business-Transkription. Vertriebs-Calls, Customer Interviews, Fokusgruppen, Vorstandssitzungen, Konferenzen. Hochladen und in Sekunden ein sauberes KI-Transkript erhalten. Ohne Anmeldung.",
    url: "https://mictoo.com/de/business-transcription",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Business-Transkription — kostenloses Tool für Meetings und Calls | Mictoo",
    description: "Kostenlose Business-Transkription. Vertriebs-Calls, Customer Interviews, Fokusgruppen, Vorstandssitzungen, Konferenzen. Hochladen und in Sekunden ein sauberes KI-Transkript erhalten. Ohne Anmeldung.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function DeBusinessPage() {
  return (
    <LandingLayout
      defaultLanguage="de"
      badge="Vertrieb · Forschung · Compliance · Kostenlos"
      h1={
        <>
          Business-Transkription
          <br />
          <span className="text-brand-600">Kostenloses Business-Audio in Text</span>
        </>
      }
      subtitle="Verwandeln Sie jedes Business-Audio in sauberen Text. Vertriebs-Calls, Customer Interviews, Fokusgruppen, Konferenzen, Vorstandssitzungen. Ohne Anmeldung, ohne Tarif pro Minute."
      howItWorks={[
        {
          icon: '🎙️',
          title: 'Audio oder Video ablegen',
          desc: 'MP3 von einem Anruf-Rekorder, M4A von einem Handy, MP4 von einer Videokonferenz, WAV von einem Field Recorder. Vertriebs-Call aus Gong, Zoom-Aufnahme eines Customer Interviews, M4A einer Vorstandssitzung. Alles geht.',
        },
        {
          icon: '⚡',
          title: 'KI transkribiert',
          desc: 'Whisper large-v3 verarbeitet das Audio. Ein 30-Minuten-Call ist in rund einer Minute fertig. Ein 60-Minuten-Meeting in etwas unter zwei.',
        },
        {
          icon: '📋',
          title: 'Transkript holen',
          desc: 'Lesen, kopieren oder als TXT oder SRT herunterladen. In Ihr CRM, Research-Repository, Projekt-Dokument oder Compliance-Archiv einfügen.',
        },
      ]}
      whyUse={{
        title: 'Warum Mictoo für Business-Audio',
        bullets: [
          {
            title: 'Gleiche Genauigkeit wie die teuren Optionen',
            desc: 'Whisper large-v3 ist das Modell, das hinter vielen bezahlten Enterprise-Transkriptions-Tools steckt. Wir lassen es ohne die Pro-Seat-Lizenzkosten laufen.',
          },
          {
            title: 'Funktioniert für sporadische Nutzung',
            desc: 'Wenn Sie einen Vertriebs-Call pro Woche transkribieren, ist es Verschwendung, den monatlichen Seat eines Enterprise-Tools zu bezahlen. Kostenlos ohne Minuten-Zähler passt zum sporadischen Nutzungs-Pattern.',
          },
          {
            title: 'Über 50 Sprachen, nützlich für internationales Business',
            desc: 'Mehrsprachige Customer Interviews, grenzüberschreitende Vertriebs-Calls, Panels mit nicht-muttersprachlichen Englisch-Sprechern. Alle abgedeckt.',
          },
          {
            title: 'Keine Datei wird gespeichert',
            desc: 'Die Aufnahme wird zum Transkriptions-Anbieter gestreamt und verworfen. Für Business-Audio, das Sie nicht auf einem Drittanbieter-Server liegen sehen wollen, zählt das.',
          },
          {
            title: 'SRT-Export für Video-Editoren',
            desc: 'Wenn Ihr Business-Audio aus einem Video stammt (Konferenz-Panel, Town Hall), passt das SRT direkt in Premiere, DaVinci oder YouTube Studio für Untertitel-Arbeit.',
          },
        ],
      }}
      useCases={{
        title: 'Gängige Business-Transkriptions-Anwendungsfälle',
        items: [
          {
            title: 'Vertriebs-Call-Zusammenfassungen',
            desc: 'Account Executives legen Call-Aufnahmen ins CRM neben den Deal. Schnellere Handoffs, bessere Zitatsuche für Follow-up-Mails, einfacheres Coaching für Vertriebs-Manager.',
          },
          {
            title: 'Customer Interviews für Produkt-Research',
            desc: 'Product Manager und UX-Researcher transkribieren Kundengespräche, um Muster zu codieren, User Stories zu schreiben und Research-Repositories aufzubauen.',
          },
          {
            title: 'Fokusgruppen-Transkripte',
            desc: 'Marktforschungs-Agenturen transkribieren Fokusgruppen-Sessions zur Analyse. Was codiert wird, ist das Transkript, nicht das Video.',
          },
          {
            title: 'Vorstandssitzungen und Leadership-Offsites',
            desc: 'Transkripte machen Unternehmensentscheidungen durchsuchbar und reduzieren Mehrdeutigkeit Monate später. Nützlich für Governance, Mitarbeiter-Kommunikation und Audit-Trails.',
          },
          {
            title: 'Konferenz-Panel-Aufnahmen',
            desc: 'Marketing- und PR-Teams transkribieren Paneldiskussionen, in denen ihre Führungskräfte gesprochen haben. Blog-Posts, Zitat-Grafiken für Social Media, Sales-Enablement-Inhalte. Alles beginnt beim Transkript.',
          },
        ],
      }}
      proTips={{
        title: 'Tipps für Business-Transkription',
        tips: [
          {
            title: 'Für Vertriebs-Call-Aufnahmen ein Tool wie Gong oder Chorus nutzen, wenn möglich',
            desc: 'Diese Tools übernehmen Aufnahme, Transkription und CRM-Logging zusammen. Mictoo ist die richtige Wahl für gelegentliche Transkription, nicht für einen High-Volume-Vertriebs-Betrieb.',
          },
          {
            title: 'Bei Customer Interviews Einverständnis einholen und erklären, wie das Audio verwendet wird',
            desc: '„Ich nehme dieses Gespräch auf, damit ich keine Notizen machen muss. Das Audio wird transkribiert und bleibt in unserem Research-Repository." Das ist in vielen Jurisdiktionen auch rechtlich vorgeschrieben für jede Anruf-Aufnahme.',
          },
          {
            title: 'Ein gutes Mikro nutzen, besonders für den Kunden',
            desc: 'Kundenstimmen, die über eine Telefonleitung erfasst werden, transkribieren 5 bis 10 Prozent weniger genau als Dial-in-Calls mit USB-Headset auf der Kundenseite. Für hochwertige Interviews schicken Sie ein Headset vor dem Call.',
          },
          {
            title: 'Small Talk vor dem Upload kürzen, um Datei-Größen-Budget zu sparen',
            desc: 'Die meisten Business-Calls beginnen mit 2 bis 5 Minuten Wetter und Höflichkeiten. Schneiden Sie das in Audacity vor dem Upload weg, wenn Ihre Datei nah am Limit ist.',
          },
          {
            title: 'Sprache manuell wählen für internationale Calls',
            desc: 'Wenn ein Vertriebs-Call auf Englisch öffnet, aber zu Französisch wechselt, kann die Auto-Erkennung verwirrt werden. Wählen Sie die dominante Sprache manuell.',
          },
          {
            title: 'Für vertrauliches Business-Audio keine Cloud-Transkription nutzen, auch nicht unsere',
            desc: 'HR-Gespräche, M&A-Diskussionen, juristische Calls, alles Privilegierte. Nutzen Sie eine lokale Whisper-Installation. Gleiches Modell, läuft offline, keine Drittanbieter-Verarbeitung.',
          },
        ],
      }}
      faq={[
        {
          q: 'Ist Mictoo für Business-Nutzung geeignet?',
          a: 'Für gelegentliche Transkription (Vertriebs-Calls, Interviews, Panels) ja. Für High-Volume-Betriebe (ein Vertriebs-Team, das 50 Calls pro Tag transkribiert) passt ein dediziertes Tool wie Gong oder Chorus besser, weil sie CRM-Integration, Coaching-Workflows und Team-Analytics bündeln.',
        },
        {
          q: 'Wird mein Business-Audio auf Ihren Servern gespeichert?',
          a: 'Nein. Die Datei wird zu unserem Transkriptions-Anbieter (Groq, mit OpenAI als Backup) gestreamt und nach der Verarbeitung verworfen. Wir behalten weder das Audio noch das Transkript.',
        },
        {
          q: 'Ist das DSGVO-konform?',
          a: 'Wir speichern Audio oder Transkript nicht, nachdem Sie die Seite verlassen. Wir sind in Europa, und unsere Anbieter (Groq US, OpenAI US) haben DPAs unterzeichnet. Für Ihre spezifische DSGVO-Situation (Verantwortlicher-Pflichten, Rechtsgrundlage für Aufnahmen) siehe unsere Datenschutzerklärung und konsultieren Sie Ihren Datenschutzbeauftragten.',
        },
        {
          q: 'Kann ich das nutzen, um Calls mit EU- oder Kalifornien-Kunden aufzunehmen?',
          a: 'Sie können die Transkription nutzen. Die Aufnahme selbst erfordert in vielen Jurisdiktionen das Einverständnis der anderen Partei (Two-Party-Consent in Kalifornien und Teilen der EU). Holen Sie das Einverständnis ein, bevor Sie aufnehmen.',
        },
        {
          q: 'Wie genau ist das Transkript für Eigennamen und Firmennamen?',
          a: 'Weniger genau als gängige Wörter. Whisper kennt den Namen Ihres Kunden, den Produktnamen oder die spezifische Terminologie Ihrer Firma nicht. Rechnen Sie damit, das manuell zu korrigieren. Der Rest des Transkripts wird solide sein.',
        },
        {
          q: 'Bekomme ich Sprecher-Labels (Vertriebler vs. Kunde)?',
          a: 'Nicht automatisch. Bei 2-Sprecher-Calls Labels manuell basierend auf dem Gespräch hinzufügen. Bei Multi-Party-Calls mit separaten Audiospuren pro Sprecher jede Spur separat transkribieren.',
        },
        {
          q: 'Wie vergleicht sich das mit Gong, Chorus oder Fireflies?',
          a: 'Das sind vollständige Vertriebs-Call-Plattformen mit CRM-Integration, automatisiertem Coaching, Deal-Stage-Tagging und Call-Analytics. Wir sind reine Transkription, keine Integrationen, keine Coaching-Schicht. Billiger (kostenlos), viel schmaler. Nutzen Sie sie, wenn Sie die vollständige Plattform brauchen. Nutzen Sie uns, wenn Sie nur den Text brauchen.',
        },
        {
          q: 'Kann ich einen vertraulichen Business-Call transkribieren?',
          a: 'Für nicht-sensible Business-Calls ja. Für vertrauliche (HR, Recht, M&A, alles Privilegierte) vermeiden Sie jede Cloud-Transkription, einschließlich unserer. Nutzen Sie stattdessen eine lokale Whisper-Installation.',
        },
        {
          q: 'Wie lange dauert die Transkription eines Business-Calls?',
          a: 'Etwa 1 bis 2 Prozent der Audiolänge. Ein 30-Minuten-Call ist in rund 30 bis 60 Sekunden fertig.',
        },
        {
          q: 'Welche Ausgabeformate gibt es?',
          a: 'Reiner Text (TXT) und SRT (Untertiteldatei mit Zeitstempeln). Kopieren in die Zwischenablage funktioniert auch zum direkten Einfügen in ein CRM oder Dokument.',
        },
        {
          q: 'Kann ich mehrere Vertriebs-Calls im Batch hochladen?',
          a: 'Noch nicht mit einem Klick. Derzeit laden Sie eine Datei nach der anderen hoch. Batch ist auf der Roadmap für den zukünftigen Pro-Tarif.',
        },
        {
          q: 'Was, wenn mein Business-Audio über 60 Minuten ist?',
          a: 'In Stücke unter 60 Minuten teilen. Die Transkripte lassen sich danach zusammenfügen.',
        },
      ]}
      relatedLinks={[
        { href: '/de/interview-transcription', label: 'Interview-Transkription', desc: 'Für Einzelgespräche und qualitative Forschung.' },
        { href: '/de/meeting-transcription', label: 'Meeting-Transkription', desc: 'Für jede Meeting-Aufnahme, jede Plattform.' },
        { href: '/de/zoom-transcription', label: 'Zoom-Transkription', desc: 'Für Zoom-aufgenommene Calls.' },
        { href: '/de/teams-meeting-transcription', label: 'Teams-Transkription', desc: 'Für Microsoft Teams-Calls.' },
      ]}
    />
  )
}
