const LANGS = {
  'en': 'https://mictoo.com/aac-to-mp3',
  'fr': 'https://mictoo.com/fr/aac-to-mp3',
  'de': 'https://mictoo.com/de/aac-to-mp3',
  'es': 'https://mictoo.com/es/aac-to-mp3',
  'ru': 'https://mictoo.com/ru/aac-to-mp3',
  'it': 'https://mictoo.com/it/aac-to-mp3',
  'pt': 'https://mictoo.com/pt/aac-to-mp3',
  'pl': 'https://mictoo.com/pl/aac-to-mp3',
  'ja': 'https://mictoo.com/ja/aac-to-mp3',
  'ko': 'https://mictoo.com/ko/aac-to-mp3',
  'x-default': 'https://mictoo.com/aac-to-mp3',
}

export const metadata = {
  title: 'AAC in MP3 umwandeln — kostenlose Methoden (2026) | Mictoo',
  description: "AAC-Audiodateien kostenlos in MP3 umwandeln. Drei schnelle Wege — Online-Konverter, QuickTime/VLC oder ffmpeg per Kommandozeile. Tipp: Mictoo transkribiert die meisten AAC-Dateien direkt, ohne Umwandlung.",
  alternates: { canonical: 'https://mictoo.com/de/aac-to-mp3', languages: LANGS },
}

export default function DeAacToMp3Page() {
  return (
    <section className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-slate-900 mb-3">AAC in MP3 umwandeln</h1>
      <p className="text-slate-500 mb-10 leading-relaxed">
        AAC (Advanced Audio Coding) ist das Standardformat für iPhone-Sprachmemos, Android-Recorder und Audiospuren in MP4-Videos. MP3 ist universeller und funktioniert mit jedem Player, Editor und Transkriptionstool. Unten — drei kostenlose Methoden plus ein kurzer Hinweis, ob Sie überhaupt umwandeln müssen.
      </p>

      <div className="bg-brand-50 border border-brand-100 rounded-2xl p-5 mb-10">
        <p className="text-sm text-slate-700 mb-2">
          <strong>Vor dem Umwandeln:</strong> Wenn Ihr Ziel die Transkription ist, akzeptiert Mictoo die meisten AAC-Dateien direkt — auch <code className="font-mono text-xs bg-white px-1.5 py-0.5 rounded border border-slate-200">.aac</code>-Dateien in MP4-Containern (iPhone-Sprachmemos, Share-Sheet-Exporte, die meisten Android-Recorder). Probieren Sie es zuerst; konvertieren müssen Sie nur, wenn die Datei abgelehnt wird.
        </p>
        <a href="/de" className="inline-flex items-center gap-2 text-sm text-brand-600 hover:underline">
          ↑ .aac direkt transkribieren
        </a>
      </div>

      <div className="space-y-12 text-slate-600 text-sm leading-relaxed">

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Methode 1 — Online-Konverter (ohne Installation)</h2>

          <img
            src="/svg/online-converter-3step.svg"
            alt="Drei Schritte: AAC-Datei ablegen, MP3 als Ausgabeformat wählen, Ergebnis herunterladen."
            className="w-full rounded-2xl border border-slate-100 mb-5"
            width={640}
            height={240}
          />

          <p className="mb-4">
            Am schnellsten für Dateien unter ~200 MB. Im Browser ablegen, MP3 in Sekunden zurückbekommen. Alle ohne Registrierung:
          </p>
          <p className="text-xs text-slate-500 mt-3">
            Datenschutz-Hinweis: Online-Konverter laden Ihre Datei auf ihre Server. Für vertrauliche Aufnahmen (medizinisch, juristisch, Geschäftsanrufe) nutzen Sie eine Desktop-Methode unten.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Methode 2 — Desktop-Apps (offline)</h2>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">macOS — QuickTime + iMovie</h3>
          <p className="mb-2">
            QuickTime kann AAC-Dateien öffnen. Nutzen Sie <strong>Datei → Exportieren als → Nur Audio</strong> und wählen Sie MP3 im Dialog. Auf jedem Mac vorinstalliert.
          </p>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">Windows / macOS / Linux — Audacity (kostenlos)</h3>
          <p>
            Öffnen Sie die AAC-Datei in <a href="https://www.audacityteam.org/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">Audacity</a>, dann <strong>Datei → Exportieren → Als MP3 exportieren</strong>. Wählen Sie Mono und 64–96 kbps für Sprachaufnahmen.
          </p>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">Plattformübergreifend — VLC</h3>
          <p>
            VLC konvertiert über <strong>Medien → Konvertieren / Speichern</strong>. Fügen Sie die .aac hinzu, wählen Sie das Profil <code className="font-mono text-xs bg-slate-100 px-1.5 py-0.5 rounded mx-1">Audio - MP3</code>, Ziel angeben, Start drücken.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Methode 3 — Kommandozeile (ffmpeg)</h2>
          <p className="mb-4">
            Eine Zeile mit installiertem <a href="https://ffmpeg.org/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">ffmpeg</a>:
          </p>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-xs"><code>{`ffmpeg -i input.aac -acodec libmp3lame -ab 128k output.mp3`}</code></pre>
          <p className="text-xs text-slate-500 mt-2">
            Für Sprache/Transkription auf <code className="font-mono">-ab 64k -ac 1</code> setzen — 2–3× kleinere Datei ohne Genauigkeitsverlust.
          </p>
        </div>

        <div className="border-t border-slate-100 pt-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-3">MP3 fertig?</h2>
          <p className="mb-4">
            Ziehen Sie es in Mictoo für eine kostenlose Transkription mit Zeitstempeln, SRT-Untertiteln und KI-Zusammenfassung. Keine Registrierung nötig.
          </p>
          <a href="/de" className="inline-flex items-center gap-2 btn-primary text-base px-6 py-3">
            ↑ MP3 kostenlos in Text umwandeln
          </a>
        </div>

      </div>

      <div className="border-t border-slate-100 mt-12 pt-8">
        <p className="text-sm text-slate-400 mb-4 text-center">Verwandte Anleitungen</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="/de/wma-to-mp3" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">WMA zu MP3</a>
          <a href="/de/m4a-to-mp3" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">M4A zu MP3</a>
          <a href="/de/aac-to-text" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">AAC zu Text</a>
          <a href="/de/how-to-compress-audio" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">Audio komprimieren</a>
        </div>
      </div>
    </section>
  )
}
