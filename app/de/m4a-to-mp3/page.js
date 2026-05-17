const LANGS = {
  'en': 'https://mictoo.com/m4a-to-mp3',
  'fr': 'https://mictoo.com/fr/m4a-to-mp3',
  'de': 'https://mictoo.com/de/m4a-to-mp3',
  'es': 'https://mictoo.com/es/m4a-to-mp3',
  'ru': 'https://mictoo.com/ru/m4a-to-mp3',
  'it': 'https://mictoo.com/it/m4a-to-mp3',
  'pt': 'https://mictoo.com/pt/m4a-to-mp3',
  'pl': 'https://mictoo.com/pl/m4a-to-mp3',
  'ja': 'https://mictoo.com/ja/m4a-to-mp3',
  'ko': 'https://mictoo.com/ko/m4a-to-mp3',
  'x-default': 'https://mictoo.com/m4a-to-mp3',
}

export const metadata = {
  title: 'M4A in MP3 umwandeln — kostenlose Methoden (oder überspringen) | Mictoo',
  description: "M4A in Sekunden in MP3 umwandeln mit kostenlosen Online-Tools, QuickTime, VLC oder ffmpeg. Hinweis: Die meisten Apps (auch Mictoo) akzeptieren M4A direkt — Sie müssen womöglich gar nicht umwandeln.",
  alternates: { canonical: 'https://mictoo.com/de/m4a-to-mp3', languages: LANGS },
}

export default function DeM4aToMp3Page() {
  return (
    <section className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-slate-900 mb-3">M4A in MP3 umwandeln</h1>
      <p className="text-slate-500 mb-10 leading-relaxed">
        M4A ist das Standard-Audioformat für iPhone-Sprachmemos, Apple Podcasts-Downloads und die meisten macOS-Aufnahme-Apps. MP3 ist universeller, aber 2026 akzeptieren überraschend viele Tools M4A direkt — die meisten Browser, Audio-Editoren, Podcast-Apps und Transkriptionsdienste. Hier, wann Sie wirklich umwandeln müssen, und die schnellsten kostenlosen Wege.
      </p>

      <div className="bg-brand-50 border border-brand-100 rounded-2xl p-5 mb-10">
        <p className="text-sm text-slate-700 mb-2">
          <strong>Sie müssen wahrscheinlich nicht umwandeln.</strong> M4A und MP3 haben sehr ähnliche Audioqualität. Moderne Apps, die MP3 lesen, lesen fast immer auch M4A. Konkret:
        </p>
        <ul className="text-sm text-slate-700 list-disc pl-5 mt-2 space-y-1">
          <li><strong>Transkription:</strong> Mictoo akzeptiert <code className="font-mono text-xs bg-white px-1.5 py-0.5 rounded border border-slate-200">.m4a</code> direkt — Datei ablegen, Text bekommen. Keine Umwandlung nötig.</li>
          <li><strong>Audio-Bearbeitung:</strong> Audacity, GarageBand, Logic, Premiere, DaVinci Resolve lesen alle M4A.</li>
          <li><strong>Streaming/Wiedergabe:</strong> Spotify, Apple Music, YouTube Music, jeder moderne Browser und OS spielt M4A.</li>
        </ul>
        <p className="text-sm text-slate-700 mt-3">
          MP3 brauchen Sie wirklich nur, wenn die Ziel-App ausdrücklich nur MP3 verlangt — manche älteren Autoradios, Fitnessgeräte, einfache Voice-Recorder oder Legacy-Software.
        </p>
        <a href="/de" className="inline-flex items-center gap-2 text-sm text-brand-600 hover:underline mt-3">
          ↑ .m4a direkt mit Mictoo transkribieren
        </a>
      </div>

      <div className="space-y-12 text-slate-600 text-sm leading-relaxed">

        <p className="-mb-6 text-slate-700">
          <strong>Trotzdem MP3 nötig?</strong> Wählen Sie die Methode unten, die zu Ihrem Setup passt. Alle kostenlos.
        </p>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Methode 1 — Online-Konverter</h2>
          <p className="mb-4">
            Ziehen, ablegen, herunterladen — meist unter 10 Sekunden für ein typisches Sprachmemo:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><a href="https://cloudconvert.com/m4a-to-mp3" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">CloudConvert</a> — saubere Oberfläche, große Dateien.</li>
            <li><a href="https://convertio.co/m4a-mp3/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">Convertio</a> — schnell, MP3-Qualität wählbar.</li>
            <li><a href="https://online-audio-converter.com/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">Online Audio Converter</a> — feingranulare Qualitätskontrolle.</li>
          </ul>
          <p className="text-xs text-slate-500 mt-3">
            Datenschutz: Online-Tools laden Ihre Datei hoch. Überspringen Sie sie bei vertraulichen Aufnahmen — nutzen Sie eine Desktop-Methode.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Methode 2 — macOS (ohne Installation)</h2>

          <img
            src="/svg/macos-music-convert.svg"
            alt="macOS Musik-App: in der Menüleiste auf Datei klicken, im Dropdown auf Konvertieren zeigen, dann MP3-Version erstellen wählen."
            className="w-full rounded-2xl border border-slate-100 mb-5"
            width={640}
            height={280}
          />

          <p className="mb-3">
            <strong>Musik-App:</strong> Ziehen Sie die <code className="font-mono">.m4a</code> in Musik, markieren Sie sie, dann <strong>Datei → Konvertieren → MP3-Version erstellen</strong>. Das MP3 erscheint neben dem Original.
          </p>
          <p className="mb-3">
            <strong>QuickTime Player:</strong> Datei öffnen → <strong>Datei → Exportieren als → Nur Audio</strong>. QuickTime exportiert standardmäßig als M4A; kombinieren Sie es mit VLC oder Audacity unten, wenn Sie speziell MP3 brauchen.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Methode 3 — VLC (plattformübergreifend)</h2>
          <p className="mb-3">
            <a href="https://www.videolan.org/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">VLC</a> auf Windows/macOS/Linux:
          </p>
          <ol className="list-decimal pl-5 space-y-1">
            <li>VLC öffnen → <strong>Medien → Konvertieren / Speichern</strong>.</li>
            <li>Die <code className="font-mono">.m4a</code>-Datei hinzufügen, <strong>Konvertieren / Speichern</strong> klicken.</li>
            <li>Profil <code className="font-mono">Audio - MP3</code> wählen.</li>
            <li>Zieldatei mit <code className="font-mono">.mp3</code> wählen, <strong>Start</strong> klicken.</li>
          </ol>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Methode 4 — Kommandozeile (ffmpeg)</h2>
          <p className="mb-4">
            Eine Zeile mit <a href="https://ffmpeg.org/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">ffmpeg</a>:
          </p>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-xs"><code>{`ffmpeg -i input.m4a -acodec libmp3lame -ab 128k output.mp3`}</code></pre>
          <p className="text-xs text-slate-500 mt-2">
            Für Sprache/Transkription nutzen Sie <code className="font-mono">-ab 64k -ac 1</code> — 2–3× kleinere Datei ohne Qualitätsverlust bei Sprache.
          </p>
        </div>

        <div className="border-t border-slate-100 pt-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Transkript nötig?</h2>
          <p className="mb-4">
            Sowohl M4A als auch MP3 funktionieren direkt in Mictoo. Datei ablegen, Text mit Zeitstempeln, SRT-Untertiteln und KI-Zusammenfassung bekommen — kostenlos, keine Registrierung.
          </p>
          <a href="/de" className="inline-flex items-center gap-2 btn-primary text-base px-6 py-3">
            ↑ Audio kostenlos in Text umwandeln
          </a>
        </div>

      </div>

      <div className="border-t border-slate-100 mt-12 pt-8">
        <p className="text-sm text-slate-400 mb-4 text-center">Verwandte Anleitungen</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="/de/aac-to-mp3" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">AAC zu MP3</a>
          <a href="/de/wma-to-mp3" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">WMA zu MP3</a>
          <a href="/de/m4a-to-text" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">M4A zu Text</a>
          <a href="/de/how-to-compress-audio" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">Audio komprimieren</a>
        </div>
      </div>
    </section>
  )
}
