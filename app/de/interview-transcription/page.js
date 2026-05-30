import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/interview-transcription',
  'fr': 'https://mictoo.com/fr/interview-transcription',
  'de': 'https://mictoo.com/de/interview-transcription',
  'es': 'https://mictoo.com/es/interview-transcription',
  'ru': 'https://mictoo.com/ru/interview-transcription',
  'it': 'https://mictoo.com/it/interview-transcription',
  'pt': 'https://mictoo.com/pt/interview-transcription',
  'pl': 'https://mictoo.com/pl/interview-transcription',
  'ja': 'https://mictoo.com/ja/interview-transcription',
  'ko': 'https://mictoo.com/ko/interview-transcription',
  'x-default': 'https://mictoo.com/interview-transcription',
}

export const metadata = {
  title: 'Interview-Transkription — kostenloser KI-Transkript-Generator | Mictoo',
  description:
    'Kostenlose KI-Interview-Transkription. Laden Sie Ihre Interview-Aufnahme (MP3, M4A, MP4, WAV) hoch und erhalten Sie in Sekunden ein sauberes, zeitstempel-versehenes Transkript. Gebaut für Journalisten und Forscher.',
  alternates: { canonical: 'https://mictoo.com/de/interview-transcription', languages: LANGS },

  openGraph: {
    title: "Interview-Transkription — kostenloser KI-Transkript-Generator | Mictoo",
    description: "Kostenlose KI-Interview-Transkription. Laden Sie Ihre Interview-Aufnahme (MP3, M4A, MP4, WAV) hoch und erhalten Sie in Sekunden ein sauberes, zeitstempel-versehenes Transkript. Gebaut für Journalisten und Forscher.",
    url: "https://mictoo.com/de/interview-transcription",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Interview-Transkription — kostenloser KI-Transkript-Generator | Mictoo",
    description: "Kostenlose KI-Interview-Transkription. Laden Sie Ihre Interview-Aufnahme (MP3, M4A, MP4, WAV) hoch und erhalten Sie in Sekunden ein sauberes, zeitstempel-versehenes Transkript. Gebaut für Journalisten und Forscher.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function DeInterviewPage() {
  return (
    <LandingLayout
      defaultLanguage="de"
      badge="Journalismus · Forschung · Kostenlos"
      h1={
        <>
          Interview-Transkription
          <br />
          <span className="text-brand-600">Kostenlose Interview-Transkripte</span>
        </>
      }
      subtitle="Verwandeln Sie jede Interview-Aufnahme in sauberen, zitierbaren Text. Für Journalisten, Forscher, Podcaster, Recruiting-Teams. Ohne Anmeldung, ohne Tarif pro Minute, ohne E-Mail."
      howItWorks={[
        {
          icon: '🎙️',
          title: 'Interview-Audio ablegen',
          desc: 'MP3 von einem Sprachrekorder, M4A von einem Handy, MP4 von einem Videoanruf, WAV von einem Field Recorder. Alles geht.',
        },
        {
          icon: '⚡',
          title: 'KI transkribiert',
          desc: 'Whisper large-v3 liest das Audio. Ein 30-Minuten-Interview ist meist in rund einer Minute fertig.',
        },
        {
          icon: '📋',
          title: 'Lesen, bearbeiten, exportieren',
          desc: 'Durchblättern des Transkripts mit Zeitstempeln. Korrigieren Sie falsche Namen oder Fachbegriffe inline. Laden Sie als TXT für Notizen herunter, als SRT für Video oder kopieren Sie in Ihre Coding-Software.',
        },
      ]}
      whyUse={{
        title: 'Warum Mictoo für Interview-Transkription',
        bullets: [
          {
            title: 'Whisper kommt mit Interviews gut zurecht',
            desc: 'Einzelne Aufnahmen mit zwei Stimmen und klarem Hin und Her sind der sauberste Fall für Spracherkennung. Die meisten Interviews kommen im ersten Durchgang auf 90 bis 95 Prozent Genauigkeit.',
          },
          {
            title: 'Zeitstempel für Zitate und Quellensuche',
            desc: 'Jede Zeile im SRT-Export hat einen Zeitstempel. Wenn Sie ein Zitat verifizieren oder zu einem bestimmten Moment in der Aufnahme zurückspringen müssen, sagt Ihnen der Zeitstempel genau, wo.',
          },
          {
            title: 'Keine Kosten pro Interview',
            desc: 'Manche Transkriptions-Services berechnen pro Minute oder pro Interview. Wir nicht. Transkribieren Sie eines oder fünfzig, der Preis ist derselbe (kostenlos).',
          },
          {
            title: 'Über 50 Sprachen, auch zweisprachige Interviews',
            desc: 'Sprachenübergreifende Interviews sind in Forschung und Journalismus üblich. Whisper handhabt Code-Switching besser als die meisten Services.',
          },
          {
            title: 'Privatsphäre und Quellenschutz',
            desc: 'Die Datei wird zum Transkriptions-Anbieter gestreamt und verworfen. Wir behalten das Audio nicht. Für sensibles Quellenmaterial zählt das.',
          },
        ],
      }}
      useCases={{
        title: 'Wer Interview-Transkripte nutzt',
        items: [
          {
            title: 'Journalismus und Feature-Schreiben',
            desc: 'Reporter transkribieren ihre Interviews, um präzise zu zitieren und lange Gespräche nach dem nützlichsten Material zu durchforsten. Ein 60-Minuten-Interview wird oft zu 3 bis 5 Schlüsselzitaten im veröffentlichten Stück.',
          },
          {
            title: 'Qualitative Forschung und akademische Studien',
            desc: 'Forscher transkribieren halbstrukturierte Interviews, um sie in Tools wie NVivo, Atlas.ti oder MAXQDA zu codieren und zu analysieren. Das Transkript ist der Datensatz.',
          },
          {
            title: 'Podcasting-Interviews',
            desc: 'Show-Hosts transkribieren Gast-Interviews für Show Notes, Episoden-Blog-Posts und Zitat-Grafiken für Social Media. Das Audio erreicht eine Audience, der Text erreicht über die Suche eine andere.',
          },
          {
            title: 'Recruiting und Kandidaten-Screening',
            desc: 'Recruiter und Hiring Manager transkribieren Interviews, um sie mit dem Team zu teilen. Einfacher als ein Video für Prüfer in verschiedenen Zeitzonen. Einfacher, Notizen zu vergleichen, wenn alle denselben Text haben.',
          },
          {
            title: 'User Research und Customer Interviews',
            desc: 'Produktteams transkribieren Gespräche mit Kunden, um Muster zu finden. Das Transkript landet im Research-Repository (Dovetail, Marvin oder ein geteiltes Notion).',
          },
        ],
      }}
      proTips={{
        title: 'Tipps für Interview-Transkription',
        tips: [
          {
            title: 'Ein echtes Mikro verwenden, auch beim Telefon-Interview',
            desc: 'Ein Lavalier oder USB-Mikro für die Vor-Ort-Person und ein anständiges Headset für den Interviewer am Telefon. Die Qualität der Aufnahme ist der größte Einzelfaktor für die Transkriptions-Genauigkeit.',
          },
          {
            title: 'In einer ruhigen Umgebung aufnehmen',
            desc: 'Café-Interviews sehen vor der Kamera toll aus und transkribieren schlecht. Hintergrundmusik und Geplapper schaden der Genauigkeit mehr, als die Leute denken.',
          },
          {
            title: 'Bei Zwei-Sprecher-Interviews zuerst die gesamte Aufnahme transkribieren, dann Sprecher-Labels manuell hinzufügen',
            desc: 'Whisper macht keine Sprecher-Diarisierung. Für ein sauberes Hin-und-Her-Interview dauert das Hinzufügen von „Interviewer:" und „Quelle:" rund 5 Minuten pro 30-Minuten-Interview.',
          },
          {
            title: 'Wenn Sie separate Audiospuren haben (Riverside, SquadCast), jede separat transkribieren',
            desc: 'Dann bekommen Sie eine saubere Zuordnung ohne Raterei. Manche Forschungsrekorder erfassen zwei Mikros in zwei Kanälen einer Stereo-Datei. Sie können das zuerst in zwei Mono-Dateien aufteilen.',
          },
          {
            title: 'Transkript mit Datum und Quellennamen speichern',
            desc: 'Eine Transkript-Datei namens 2026-05-25-jane-smith.txt ist sechs Monate später leichter zu finden als transcript-final-v2.txt.',
          },
          {
            title: 'Erste 50 Zeilen auf Genauigkeit bearbeiten, Rest lassen',
            desc: 'Leute überfliegen Transkripte. Der Anfangsteil zählt am meisten. Darüber hinaus nur die Zitate korrigieren, die Sie verwenden wollen.',
          },
          {
            title: 'Sprache manuell setzen, wenn das Interview nicht auf Englisch ist',
            desc: 'Auto-Erkennung funktioniert für die meisten Dateien, aber ein 5-Sekunden-Fehlstart am Anfang kann sie irreführen. Sprache explizit zu wählen ist zuverlässiger.',
          },
        ],
      }}
      faq={[
        {
          q: 'Ist das genau genug für Journalismus-Zitate?',
          a: 'Für wörtliches Zitieren sollten Sie immer gegen das Audio verifizieren. Whisper bekommt 90 bis 95 Prozent der Wörter bei sauberem Interview-Audio richtig. Die 5 bis 10 Prozent, die er verfehlt, beinhalten oft Namen, Fachbegriffe und überlappende Sprache. Nutzen Sie die SRT-Zeitstempel, um für jedes Zitat, das Sie veröffentlichen wollen, zur Aufnahme zurückzuspringen.',
        },
        {
          q: 'Bekomme ich Sprecher-Labels?',
          a: 'Nicht automatisch. Sie fügen sie basierend auf dem Gesprächsfluss hinzu. Bei einem 2-Sprecher-Interview ist das schnell. Bei Panels oder Fokusgruppen planen Sie mehr Zeit ein oder laden Sie die Spur jedes Sprechers separat hoch, falls vorhanden.',
        },
        {
          q: 'Kann ich ein Interview in einer anderen Sprache transkribieren?',
          a: 'Ja, über 50 Sprachen mit Auto-Erkennung. Für Interviews unter 5 Minuten oder nicht-englische Interviews, die mit englischem Small Talk beginnen, wählen Sie die Sprache manuell.',
        },
        {
          q: 'Mein Interview ist 90 Minuten. Was tun?',
          a: 'In Stücke unter unserem 60-Minuten-Cap teilen. Die natürliche Pause ist dort, wo das Gespräch innehält (Kaffee in der Mitte des Interviews, Themenwechsel). Unser Teil-Guide erklärt, wie es geht.',
        },
        {
          q: 'Wie genau sind Fachbegriffe und Eigennamen?',
          a: 'Weniger genau als gängiges Vokabular. Whisper kennt den Firmennamen Ihrer Quelle nicht, den medizinischen Begriff, den sie benutzt hat, oder die spezifische Software, auf die sie verwiesen hat. Rechnen Sie damit, das manuell zu korrigieren. Der Rest des Transkripts wird solide sein.',
        },
        {
          q: 'Wird das Audio gespeichert?',
          a: 'Nein. Die Datei wird zum Transkriptions-Anbieter (Groq, mit OpenAI als Backup) gestreamt, verarbeitet und dann verworfen. Wir behalten das Audio nicht auf unseren Servern.',
        },
        {
          q: 'Ist das mit Forschungsethik-Richtlinien konform?',
          a: 'Die meisten IRB-genehmigten Forschungsprotokolle verlangen zu wissen, wo Audio verarbeitet wird. Unsere Anbieter verarbeiten in den USA. Wir behalten nichts. Für spezifische IRB-Konformität dokumentieren Sie den Workflow und prüfen Sie mit Ihrem IRB. Für maximale Kontrolle nutzen Sie stattdessen eine lokale Whisper-Installation auf Ihrem eigenen Rechner.',
        },
        {
          q: 'Kann ich das Transkript in NVivo, Atlas.ti oder Dedoose importieren?',
          a: 'Ja. Als TXT herunterladen und in Ihr qualitatives Analyse-Tool importieren. Das Transkript ist reiner Text, kein spezielles Format nötig.',
        },
        {
          q: 'Wie lange dauert die Transkription?',
          a: 'Etwa 1 bis 2 Prozent der Audiolänge. Ein 30-Minuten-Interview ist in rund 60 Sekunden fertig.',
        },
        {
          q: 'Was, wenn das Interview schlechte Audioqualität hat?',
          a: 'Lassen Sie es zuerst durch ein Denoise-Tool laufen (Audacity Noise Reduction oder Adobe Podcast Enhance). Dann die saubere Version hochladen. Bessere Eingabe gibt deutlich bessere Ausgabe.',
        },
        {
          q: 'Kann ich ein Interview transkribieren, das ich auf meinem Handy aufgenommen habe?',
          a: 'Ja. iPhone Sprachmemos werden als M4A gespeichert, Android-Sprachrekorder meist als M4A oder MP3. Beides funktioniert. AirDrop oder E-Mail die Datei an Ihren Computer, dann hier hochladen.',
        },
        {
          q: 'Werden die Zeitstempel im SRT exakt mit der Originalaufnahme übereinstimmen?',
          a: 'Ja, auf die Millisekunde. Die SRT-Zeitstempel spiegeln die tatsächliche Zeit in der Audiodatei wider. Sie funktionieren, um in jedem Audio- oder Videoplayer zu einem bestimmten Moment zurückzuspringen.',
        },
      ]}
      relatedLinks={[
        { href: '/de/podcast-transcription', label: 'Podcast-Transkription', desc: 'Für Podcast-Interviews und Host-Gespräche.' },
        { href: '/de/timestamped-transcription', label: 'Transkription mit Zeitstempeln', desc: 'Für Zeitstempel auf Wort- oder Satzebene.' },
        { href: '/de/voice-memo-to-text', label: 'Sprachmemo in Text', desc: 'Für telefonisch aufgenommene Interviews.' },
        { href: '/de/business-transcription', label: 'Business-Transkription', desc: 'Für Vertriebs-Calls, Customer Calls, Fokusgruppen.' },
      ]}
    />
  )
}
