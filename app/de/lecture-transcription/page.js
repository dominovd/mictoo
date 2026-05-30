import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/lecture-transcription',
  'fr': 'https://mictoo.com/fr/lecture-transcription',
  'de': 'https://mictoo.com/de/lecture-transcription',
  'es': 'https://mictoo.com/es/lecture-transcription',
  'ru': 'https://mictoo.com/ru/lecture-transcription',
  'it': 'https://mictoo.com/it/lecture-transcription',
  'pt': 'https://mictoo.com/pt/lecture-transcription',
  'pl': 'https://mictoo.com/pl/lecture-transcription',
  'ja': 'https://mictoo.com/ja/lecture-transcription',
  'ko': 'https://mictoo.com/ko/lecture-transcription',
  'x-default': 'https://mictoo.com/lecture-transcription',
}

export const metadata = {
  title: 'Vorlesungs-Transkription — kostenloser Transkript-Generator | Mictoo',
  description:
    'Kostenlose Vorlesungs-Transkription. Laden Sie die Aufnahme einer Vorlesung, eines Kurses oder Seminars (MP3, M4A, MP4) hoch und erhalten Sie in Sekunden sauberen Text. Gebaut für Studierende.',
  alternates: { canonical: 'https://mictoo.com/de/lecture-transcription', languages: LANGS },

  openGraph: {
    title: "Vorlesungs-Transkription — kostenloser Transkript-Generator | Mictoo",
    description: "Kostenlose Vorlesungs-Transkription. Laden Sie die Aufnahme einer Vorlesung, eines Kurses oder Seminars (MP3, M4A, MP4) hoch und erhalten Sie in Sekunden sauberen Text. Gebaut für Studierende.",
    url: "https://mictoo.com/de/lecture-transcription",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vorlesungs-Transkription — kostenloser Transkript-Generator | Mictoo",
    description: "Kostenlose Vorlesungs-Transkription. Laden Sie die Aufnahme einer Vorlesung, eines Kurses oder Seminars (MP3, M4A, MP4) hoch und erhalten Sie in Sekunden sauberen Text. Gebaut für Studierende.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function DeLecturePage() {
  return (
    <LandingLayout
      defaultLanguage="de"
      badge="Studierende · Akademiker · Kostenlos"
      h1={
        <>
          Vorlesungs-Transkription
          <br />
          <span className="text-brand-600">Kostenloses Tool für Vorlesungs-Transkripte</span>
        </>
      }
      subtitle="Verwandeln Sie jede aufgenommene Vorlesung in sauberen Text zum Lernen. Uni, Online-Kurs, Konferenzvortrag, berufliche Schulung. Ohne Anmeldung, ohne Tarif pro Minute."
      howItWorks={[
        {
          icon: '🎓',
          title: 'Vorlesungs-Audio oder -Video ablegen',
          desc: 'MP3 von einem Sprachrekorder, M4A von Ihrem Handy, MP4 von einer Zoom-Vorlesung oder einer Bildschirmaufnahme einer Online-Vorlesung. WAV von einem Forschungsrekorder. Alles geht.',
        },
        {
          icon: '⚡',
          title: 'KI transkribiert',
          desc: 'Whisper large-v3 liest das Audio. Eine 60-Minuten-Vorlesung ist in rund einer Minute fertig.',
        },
        {
          icon: '📋',
          title: 'Transkript holen',
          desc: 'Lesen, in Ihre Notizen kopieren oder als TXT oder SRT herunterladen. Korrigieren Sie falsche Fachbegriffe inline vor dem Export.',
        },
      ]}
      whyUse={{
        title: 'Warum Mictoo für Vorlesungen',
        bullets: [
          {
            title: 'Langform ist okay',
            desc: 'Bis zu 60 Minuten pro Datei nach kostenloser Anmeldung. Für eine 90-Minuten-Vorlesung in zwei 45-Minuten-Stücke teilen. Das Transkript ist zusammenfügbar.',
          },
          {
            title: 'Handhabt Fachvokabular besser als die meisten',
            desc: 'Whisper wurde auf einer riesigen Vielfalt von Audio trainiert, einschließlich akademischer Vorlesungen. Latein, Fachjargon, mathematische Begriffe, Code-Schnipsel kommen oft sauberer raus als erwartet.',
          },
          {
            title: 'Keine Kosten pro Vorlesung',
            desc: 'Für Studierende ist es Verschwendung, Transkription pro Kurs zu bezahlen. Kostenlos ohne Minuten-Zähler bedeutet, dass Sie jede Vorlesung in einem Semester transkribieren können.',
          },
          {
            title: 'Privatsphäre und Urheberrecht',
            desc: 'Die Datei wird zum Transkriptions-Anbieter gestreamt und verworfen. Wir behalten das Audio nicht. Nützlich, wenn Sie Material transkribieren, das Ihnen gehört (Ihre Aufnahmen), aber nicht zu einem Drittanbieter-Speicherdienst hochladen wollen.',
          },
          {
            title: 'Über 50 Sprachen',
            desc: 'Internationale Studierende und Online-Kurse in nicht-englischen Sprachen funktionieren alle. Auto-Erkennung deckt die meisten Fälle ab.',
          },
        ],
      }}
      useCases={{
        title: 'Wofür Studierende und Akademiker Vorlesungs-Transkripte nutzen',
        items: [
          {
            title: 'Durchsuchbare Lern-Notizen',
            desc: 'Transkript in Notion, Obsidian oder ein Word-Dokument ablegen. Strg+F nach jedem Begriff, den der Professor erwähnt hat. Besser, als eine 90-Minuten-Audiodatei zu durchsuchen.',
          },
          {
            title: 'Vorbereitung auf Klausuren',
            desc: 'Überfliegen Sie das Transkript, während Sie Ihre handgeschriebenen Notizen durchgehen. Fängt Dinge auf, die Sie während der Live-Vorlesung verpasst haben.',
          },
          {
            title: 'Übersetzen von Vorlesungen für Nicht-Muttersprachler',
            desc: 'In der Ausgangssprache transkribieren, dann durch DeepL oder ChatGPT zum Übersetzen jagen. Nützlich für Studierende, die Kurse in ihrer Zweitsprache hören.',
          },
          {
            title: 'Barrierefreiheit für gehörlose und schwerhörige Studierende',
            desc: 'Ein Transkript oder eine SRT-Datei liefert denselben Inhalt in einer anderen Modalität. Manche Unis schreiben das für aufgezeichneten Kursinhalt vor.',
          },
          {
            title: 'Karteikarten und Lernmaterialien erstellen',
            desc: 'Transkripte fließen in Anki-Karten, Zusammenfassungs-Dokumente oder KI-unterstützte Lerntools.',
          },
        ],
      }}
      proTips={{
        title: 'Tipps für Vorlesungs-Transkription',
        tips: [
          {
            title: 'Bei Präsenzvorlesungen nah am Professor sitzen',
            desc: 'Aus der letzten Reihe durch Raumgeräusche aufzunehmen produziert ein Transkript mit vielen Lücken. Handy in der ersten Reihe, Bildschirm nach unten, fängt saubere Sprache ein.',
          },
          {
            title: 'Für lange Vorlesungen einen dedizierten Sprachrekorder nutzen',
            desc: 'Handy-Aufnahmen haben aggressives Auto-Leveling und Rauschunterdrückung, was der Transkription schadet. Ein Zoom H1n oder ähnlicher Entry-Level-Rekorder gibt für 80 Euro deutlich saubereres Audio.',
          },
          {
            title: 'Für Online-Vorlesungen das System-Audio direkt aufnehmen',
            desc: 'OBS Studio auf Windows oder Mac kann das Vorlesungs-Audio direkt vom System aufnehmen. Sauberer als die Aufnahme durch das Laptop-Mikro.',
          },
          {
            title: 'Sprache manuell setzen',
            desc: 'Auto-Erkennung liegt meist richtig, kann aber durch Warmup des Professors in einer anderen Sprache verwirrt werden. Wählen Sie die Vorlesungssprache explizit aus dem Dropdown.',
          },
          {
            title: 'Die ersten 5 Minuten weglassen, wenn es Admin-Ankündigungen sind',
            desc: '„Habt ihr die Hausaufgabe gemacht? Habt ihr Kapitel 3 gelesen?" ist für das Transkript nicht nützlich. Schneiden Sie das in Audacity vor dem Upload weg, um Ihr Datei-Größen-Budget zu sparen.',
          },
          {
            title: 'Bei MINT-Vorlesungen mit Gleichungen fängt das Transkript gesprochene Mathematik ein, nicht die Gleichungen',
            desc: 'Mathematische Ausdrücke an der Tafel sind nicht im Audio, also nicht im Transkript. Sie müssen die trotzdem separat erfassen (Fotos von der Tafel, Screenshots der Folien).',
          },
          {
            title: 'Bei der ersten Durchsicht die Aufnahme noch einmal anhören, während Sie das Transkript lesen',
            desc: 'Das ist der beste Weg, um professorenspezifische Begriffe und Gleichungs-Verweise zu korrigieren. Einmal gereinigt, steht das Transkript für sich.',
          },
        ],
      }}
      faq={[
        {
          q: 'Ist das genau genug für Universitäts-Hausarbeiten?',
          a: 'Für die meisten Vorlesungsinhalte ja. Whisper large-v3 produziert 90 bis 95 Prozent Genauigkeit bei sauberem Vorlesungs-Audio. Fachbegriffe und Eigennamen brauchen oft Cleanup. Nutzen Sie das Transkript als Lern-Notizen, nicht als kanonische Quelle für Zitate.',
        },
        {
          q: 'Meine Vorlesung ist nicht auf Englisch. Wird es funktionieren?',
          a: 'Ja. Whisper unterstützt über 50 Sprachen mit guter Genauigkeit in den großen Sprachen und grundlegender Unterstützung für viele weitere. Wählen Sie die Sprache manuell aus dem Dropdown für die besten Ergebnisse.',
        },
        {
          q: 'Meine Vorlesung dauert 90 Minuten. Was tun?',
          a: 'Teilen Sie sie. Unser Cap ist 60 Minuten pro Datei. In zwei 45-Minuten-Stücke an einem natürlichen Pausenpunkt schneiden (Mittagspause oder Themenübergang).',
        },
        {
          q: 'Ist es legal, Vorlesungen zu transkribieren?',
          a: 'Für persönlichen Lernzweck in den meisten Jurisdiktionen generell ja, solange Sie legal Zugriff auf die Aufnahme haben. Für Weiterverbreitung (Veröffentlichung des Transkripts online, Verkauf von Lernmaterialien) brauchen Sie die Erlaubnis des Dozenten oder der Institution. Manche Unis haben explizite Richtlinien zur Aufnahme und Transkription von Vorlesungen. Prüfen Sie Ihre.',
        },
        {
          q: 'Kann ich eine Video-Vorlesung von Coursera, edX oder Khan Academy transkribieren?',
          a: 'Ja, wenn Sie die Videodatei herunterladen können. Manche Plattformen erlauben Downloads für Offline-Ansicht (Sie bekommen eine MP4). Hier hochladen. Für Plattformen, die keinen Download erlauben, prüfen Sie deren Bedingungen vor dem Scrapen.',
        },
        {
          q: 'Wird das Transkript Folien-Inhalte enthalten?',
          a: 'Nein. Wir transkribieren nur das Audio. Wenn der Professor Folien laut vorliest, ist dieser Text im Transkript. Wenn Folien Text am Bildschirm haben, den der Professor nicht vorgelesen hat, ist der nicht im Transkript. Kombinieren Sie mit Screenshots der Folien für vollständige Notizen.',
        },
        {
          q: 'Wie genau sind Fachbegriffe und Jargon?',
          a: 'Weniger genau als gängiges Vokabular. Für lateinische medizinische Begriffe, fortgeschrittene Mathe-Symbole, Nischen-Akronyme rechnen Sie damit, die manuell zu korrigieren. Der allgemeine Fluss der Vorlesung wird solide sein.',
        },
        {
          q: 'Kann ich das Transkript in meine Notiz-App exportieren?',
          a: 'Ja. Als TXT herunterladen und in Notion, Obsidian, OneNote, Bear oder jedes textfreundliche Tool einfügen. SRT funktioniert in Videoplayern, falls Sie Untertitel neben der Aufnahme wollen.',
        },
        {
          q: 'Wird mein Vorlesungs-Audio gespeichert?',
          a: 'Nein. Die Datei wird zu unserem Transkriptions-Anbieter gestreamt, verarbeitet und dann verworfen. Wir behalten das Audio nicht.',
        },
        {
          q: 'Wie lange dauert die Transkription einer Vorlesung?',
          a: 'Etwa 1 bis 2 Prozent der Audiolänge. Eine 60-Minuten-Vorlesung ist in rund 60 Sekunden fertig. Der Upload ist meist die längere Wartezeit.',
        },
        {
          q: 'Kann ich Zeitstempel bekommen, um zu bestimmten Momenten zurückzuspringen?',
          a: 'Ja. Als SRT herunterladen. Jede Zeile hat einen Zeitstempel, der mit dem Original-Audio abgeglichen ist. Nützlich, um während der Klausurvorbereitung zu einem bestimmten Punkt zurückzukehren.',
        },
        {
          q: 'Was, wenn die Vorlesung am Ende ein Q&A hat?',
          a: 'Q&A transkribiert sich genauso wie die Hauptvorlesung. Publikumsfragen kommen manchmal weniger klar rüber (Publikumsmitglieder sind meist weiter vom Mikro entfernt), aber die Professor-Antwort sollte sauber sein. Fügen Sie in Ihren Notizen einen „Q&A"-Abschnitt hinzu.',
        },
      ]}
      relatedLinks={[
        { href: '/de/transcribe-audio-to-text', label: 'Audio in Text', desc: 'Für allgemeine Audiodateien.' },
        { href: '/de/transcribe-video-to-text', label: 'Video in Text', desc: 'Für Video-Vorlesungen (MP4, MOV).' },
        { href: '/de/timestamped-transcription', label: 'Transkription mit Zeitstempeln', desc: 'Um zu bestimmten Momenten zurückzuspringen.' },
        { href: '/de/how-to-split-audio', label: 'Audio teilen', desc: 'Für Vorlesungen über 60 Minuten.' },
      ]}
    />
  )
}
