const LANGS = {
  'en': 'https://mictoo.com/how-to-split-audio',
  'fr': 'https://mictoo.com/fr/how-to-split-audio',
  'de': 'https://mictoo.com/de/how-to-split-audio',
  'es': 'https://mictoo.com/es/how-to-split-audio',
  'ru': 'https://mictoo.com/ru/how-to-split-audio',
  'it': 'https://mictoo.com/it/how-to-split-audio',
  'pt': 'https://mictoo.com/pt/how-to-split-audio',
  'pl': 'https://mictoo.com/pl/how-to-split-audio',
  'ja': 'https://mictoo.com/ja/how-to-split-audio',
  'ko': 'https://mictoo.com/ko/how-to-split-audio',
  'x-default': 'https://mictoo.com/how-to-split-audio',
}

export const metadata = {
  title: 'Lange Audiodatei für die Transkription aufteilen — Kostenlose Methoden | Mictoo',
  description: 'Drei kostenlose Wege, eine lange Aufnahme in kürzere Teile für die Transkription aufzuteilen: Online-Tools, Audacity oder ffmpeg. Funktioniert für MP3, M4A, WAV, MP4 und mehr.',
  alternates: { canonical: 'https://mictoo.com/de/how-to-split-audio', languages: LANGS },
}

export default function DeHowToSplitAudioPage() {
  return (
    <section className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-slate-900 mb-3">Lange Audiodatei für die Transkription aufteilen</h1>
      <p className="text-slate-500 mb-10 leading-relaxed">
        Mictoo transkribiert Dateien bis <strong>30 Minuten</strong> für anonyme Nutzer und
        <strong> 60 Minuten</strong>, wenn Sie angemeldet sind. Wenn Ihre Aufnahme länger ist, ist die
        sauberste Lösung, sie in zwei oder drei kürzere Teile zu zerlegen und jeden separat zu transkribieren.
        Unten finden Sie drei kostenlose Wege — wählen Sie den, der zu Ihrer Datei und Ihren Kenntnissen passt.
      </p>

      <div className="space-y-12 text-slate-600 text-sm leading-relaxed">

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Methode 1 — Online-Tools (keine Installation)</h2>
          <p className="mb-4">
            Die schnellste Option für einen einmaligen Schnitt. Datei ziehen, Start/Ende festlegen,
            Teil herunterladen. Für jedes Segment wiederholen.
          </p>

          <ul className="list-disc pl-5 space-y-1">
            <li><a href="https://mp3cut.net/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">mp3cut.net</a> — Datei reinziehen, Marker für Start/Ende schieben, Cut klicken, herunterladen. Läuft im Browser.</li>
            <li><a href="https://clideo.com/cut-audio" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">Clideo Cut Audio</a> — aufgeräumte Oberfläche, unterstützt MP3, M4A, WAV, FLAC, OGG und Videodateien.</li>
            <li><a href="https://online-audio-converter.com/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">Online Audio Converter</a> — bewältigt lange Dateien und erlaubt das Exportieren mehrerer Segmente im Stapel.</li>
          </ul>

          <p className="mt-3 text-xs text-slate-500">
            Tipp: Schneiden Sie an einer natürlichen Pause (zwischen Sätzen oder Sprechern),
            damit das Transkript nach dem Zusammenfügen flüssig liest.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Methode 2 — Audacity (kostenlose Desktop-App)</h2>
          <p className="mb-4">
            Am genauesten, besonders wenn Ihre Aufnahme Stille oder Pausen enthält, an denen Sie schneiden möchten.
            Audacity ist kostenlos und Open Source für macOS, Windows und Linux.
          </p>

          <ol className="list-decimal pl-5 space-y-1">
            <li>Laden Sie <a href="https://www.audacityteam.org/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">Audacity</a> herunter und öffnen Sie Ihre Audiodatei.</li>
            <li>Verwenden Sie ggf. <strong>Datei → Importieren → Audio</strong>. Audacity liest MP3, M4A, WAV, FLAC, OGG und mehr.</li>
            <li>Klicken Sie an der Schnittstelle auf die Wellenform (Strg/Cmd+B für eine Markierung oder Region für einen Teil markieren).</li>
            <li>Wählen Sie <strong>Datei → Exportieren → Ausgewähltes Audio exportieren</strong> und speichern Sie den ersten Teil als MP3 oder WAV.</li>
            <li>Nächste Region markieren, exportieren, wiederholen.</li>
          </ol>

          <p className="mt-3 text-xs text-slate-500">
            Für lange Aufnahmen findet das Tool <strong>Analyse → Sound Finder</strong> in Audacity stille Bereiche
            automatisch — praktisch, um Podcasts oder Interviews an natürlichen Pausen zu trennen.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Methode 3 — Kommandozeile (ffmpeg)</h2>
          <p className="mb-4">
            Ein Befehl teilt die gesamte Datei in gleich lange Teile. Ohne Neukodierung, also sofort —
            selbst bei einer 2-Stunden-Aufnahme. Am besten, wenn ffmpeg bereits installiert ist.
          </p>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">In 25-Minuten-Teile aufteilen</h3>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-xs"><code>{`ffmpeg -i input.mp3 -f segment -segment_time 1500 -c copy part_%03d.mp3`}</code></pre>
          <p className="text-xs text-slate-500 mt-2">
            <code className="font-mono">1500</code> ist die Segmentlänge in Sekunden (25 Min.).
            Ausgabedateien heißen <code className="font-mono">part_001.mp3</code>,{' '}
            <code className="font-mono">part_002.mp3</code> usw. Der Flag{' '}
            <code className="font-mono">-c copy</code> vermeidet Neukodierung — verlustfrei und schnell.
          </p>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">Einen bestimmten Zeitbereich extrahieren</h3>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-xs"><code>{`ffmpeg -i input.mp4 -ss 00:00:00 -t 00:25:00 -c copy part1.mp4
ffmpeg -i input.mp4 -ss 00:25:00 -t 00:25:00 -c copy part2.mp4`}</code></pre>
          <p className="text-xs text-slate-500 mt-2">
            <code className="font-mono">-ss</code> ist die Startzeit, <code className="font-mono">-t</code>{' '}
            ist die Dauer. Funktioniert auch für Videodateien — die Audiospur wird genauso getrennt.
          </p>

          <p className="mt-3">
            Noch kein ffmpeg installiert? Installieren über{' '}
            <a href="https://ffmpeg.org/download.html" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">ffmpeg.org/download</a>{' '}
            oder mit Homebrew auf macOS: <code className="font-mono">brew install ffmpeg</code>.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Transkripte wieder zusammenfügen</h2>
          <p className="mb-3">
            Transkribieren Sie jeden Teil in Mictoo und fügen Sie die Ergebnisse der Reihe nach in ein Dokument ein.
            Ein paar Tipps für ein sauberes Endtranskript:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Schneiden Sie nach Möglichkeit an einer Pause — Wörter werden nicht halbiert.</li>
            <li>Wenn der Schnitt mitten im Satz liegt, kann das erste Wort des nächsten Teils im Transkript großgeschrieben sein. Lässt sich in jedem Editor leicht korrigieren.</li>
            <li>Für SRT-/VTT-Untertitel: Addieren Sie die Gesamtdauer des vorherigen Teils zu jedem Zeitstempel der nächsten Datei. Ein Suchen-und-Ersetzen oder ein kleines Skript erledigt das in Sekunden.</li>
            <li>Die KI-Zusammenfassung von Mictoo funktioniert am besten auf einem zusammenhängenden Transkript — fügen Sie die Teile zuerst zusammen und starten Sie die Zusammenfassung neu auf dem vereinten Text.</li>
          </ul>
        </div>

        <div className="border-t border-slate-100 pt-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Alles bereit?</h2>
          <p className="mb-4">
            Sobald jeder Teil unter der Dauergrenze liegt, kehren Sie zur Startseite zurück und laden Sie sie nacheinander hoch.
          </p>
          <a href="/de" className="inline-flex items-center gap-2 btn-primary text-base px-6 py-3">
            ↑ Zurück zur Transkription
          </a>
        </div>

      </div>

      <div className="border-t border-slate-100 mt-12 pt-8">
        <p className="text-sm text-slate-400 mb-4 text-center">Mehr Transkriptions-Guides</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="/de/how-to-compress-audio" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">Audio komprimieren</a>
          <a href="/de/transcribe-mp3-to-text" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">MP3 zu Text</a>
          <a href="/de/podcast-transcription" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">Podcast-Transkription</a>
          <a href="/de" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">Alle Formate</a>
        </div>
      </div>
    </section>
  )
}
