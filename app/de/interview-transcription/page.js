import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/interview-transcription',
  'fr': 'https://mictoo.com/fr/interview-transcription',
  'de': 'https://mictoo.com/de/interview-transcription',
  'es': 'https://mictoo.com/es/interview-transcription',
  'ru': 'https://mictoo.com/ru/interview-transcription',
  'it': 'https://mictoo.com/it/interview-transcription',
  'x-default': 'https://mictoo.com/interview-transcription',
}

export const metadata = {
  title: 'Interview-Transkription — Kostenloser Transkript-Generator | Mictoo',
  description: 'Interviews kostenlos in Text umwandeln. Aufnahme hochladen und eine präzise Transkription mit Zeitstempeln erhalten. Mit Beispielen und Vorlagen.',
  alternates: { canonical: 'https://mictoo.com/de/interview-transcription', languages: LANGS },
}

const INTERVIEW_TRANSCRIPT_EXAMPLE = `Interviewer: Können Sie mir Ihre Forschungsmethodik beschreiben?

Befragter: Sicher. Wir haben einen Mixed-Methods-Ansatz verwendet, zunächst eine Umfrage mit 400 Teilnehmenden, dann ausführliche Interviews mit 20 davon, um die quantitativen Ergebnisse genauer zu untersuchen.

Interviewer: Was waren die größten Herausforderungen?

Befragter: Die Rekrutierung der Teilnehmenden war die größte Hürde. Wir haben schließlich mit drei lokalen Organisationen zusammengearbeitet, um eine vielfältigere Stichprobe zu erreichen.`

export default function DeInterviewPage() {
  return (
    <>
      <LandingLayout
        badge="Forschung · Journalismus · Kostenlos"
        h1={<>Interview-Transkription<br /><span className="text-brand-600">Kostenloses Transkript-Tool</span></>}
        subtitle="Laden Sie die Interview-Aufnahme hoch und erhalten Sie in Sekunden eine genaue Texttranskription. Geeignet für qualitative Forschung, Journalismus, HR-Interviews und Podcasts. Kein Konto nötig."
        defaultLanguage="de"
        features={[
          { icon: '🎙️', title: 'Jedes Interview-Format', desc: 'Persönliche Aufnahmen, Telefonate, Zoom-Interviews, Fokusgruppen — als MP3, MP4, WAV oder M4A hochladen.' },
          { icon: '📋', title: 'Bearbeitbare Ausgabe', desc: 'Transkript direkt im Browser bearbeiten. Sprecher-Labels hinzufügen, Namen und Fachbegriffe korrigieren, dann herunterladen.' },
          { icon: '⏱️', title: 'Zeitstempel pro Segment', desc: 'Als .srt herunterladen für zeitcodierte Segmente — nützlich für qualitative Codierung und das Auffinden bestimmter Momente.' },
        ]}
        faq={[
          { q: 'Wie transkribiere ich ein Interview kostenlos?', a: 'Laden Sie Ihre Interview-Aufnahme (MP3, MP4, WAV oder M4A) mit dem Tool oben hoch. Das Transkript wird in Sekunden automatisch erstellt.' },
          { q: 'Wie sieht ein Interview-Transkript aus?', a: 'Ein Interview-Transkript ist eine wortgetreue Textaufzeichnung. Es enthält üblicherweise Sprechertürme mit Bezeichnungen wie „Interviewer" und „Befragter" (oder Namen), mit dem gesprochenen Text in jeder Zeile.' },
          { q: 'Welches Format ist für ein Interview-Transkript korrekt?', a: 'Standard: (1) Sprecher-Label gefolgt von Doppelpunkt, (2) wortgetreuer Text, (3) Leerzeile zwischen Sprechern. Für Forschung: Zeitstempel an jedem Turn. Für Journalismus: aufeinanderfolgende Aussagen einer Person können zusammengefasst werden.' },
          { q: 'Wie formatiere ich ein Transkript für qualitative Forschung?', a: 'Wortgetreu transkribieren inklusive Pausen und Füllwörter. Zeitstempel alle 30–60 Sekunden. Sprecher konsistent benennen (z.B. „P1", „P2" für Anonymität). Namen und identifizierende Details anpassen, wenn vom Ethikprotokoll verlangt.' },
          { q: 'Fügt Mictoo Sprecher-Labels automatisch hinzu?', a: 'Nicht automatisch — das Transkript wird als einzelner Textblock ausgegeben. Sie können Sprecher-Labels manuell hinzufügen, indem Sie das Transkript im Browser bearbeiten.' },
          { q: 'Unterschied zwischen Transkription und Interview-Notizen?', a: 'Interview-Notizen fassen Kernpunkte zusammen. Eine Transkription ist eine wortgetreue Aufzeichnung jedes gesprochenen Wortes — genauer und für die meisten Forschungs- und rechtlichen Kontexte erforderlich.' },
          { q: 'Wie lange dauert ein 1-Stunden-Interview?', a: 'Mit Mictoo wird ein 1-Stunden-Interview in unter 2 Minuten transkribiert. Manuelle Transkription dauert 4–6 Stunden.' },
        ]}
        relatedLinks={[
          { href: '/transcribe-audio-to-text', label: 'Audio in Text' },
          { href: '/de/timestamped-transcription', label: 'Transkript mit Zeitstempeln' },
          { href: '/de/business-transcription', label: 'Business-Transkription' },
          { href: '/de', label: 'Alle Formate' },
        ]}
      />

      <section className="max-w-2xl mx-auto px-4 pb-16">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Beispiel eines Interview-Transkripts</h2>
        <p className="text-sm text-slate-500 mb-4">Ein einfaches qualitatives Forschungs-Interview-Transkript sieht so aus:</p>
        <pre className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-sm text-slate-700 whitespace-pre-wrap leading-relaxed font-mono">
          {INTERVIEW_TRANSCRIPT_EXAMPLE}
        </pre>
        <p className="text-xs text-slate-400 mt-3">
          Nach der Transkription mit Mictoo direkt im Browser bearbeiten, um vor dem Download Sprecher-Labels hinzuzufügen.
        </p>
      </section>
    </>
  )
}
