const LANGS = {
  'en': 'https://mictoo.com/wma-to-mp3',
  'fr': 'https://mictoo.com/fr/wma-to-mp3',
  'de': 'https://mictoo.com/de/wma-to-mp3',
  'es': 'https://mictoo.com/es/wma-to-mp3',
  'ru': 'https://mictoo.com/ru/wma-to-mp3',
  'it': 'https://mictoo.com/it/wma-to-mp3',
  'pt': 'https://mictoo.com/pt/wma-to-mp3',
  'pl': 'https://mictoo.com/pl/wma-to-mp3',
  'ja': 'https://mictoo.com/ja/wma-to-mp3',
  'ko': 'https://mictoo.com/ko/wma-to-mp3',
  'x-default': 'https://mictoo.com/wma-to-mp3',
}

export const metadata = {
  title: 'WMA in MP3 umwandeln — kostenlose Methoden (2026) | Mictoo',
  description: "WMA (Windows Media Audio) kostenlos in MP3 umwandeln. Online-Konverter, VLC, Audacity und ffmpeg — wählen Sie das Passende. Dann das MP3 mit Mictoo in Text transkribieren.",
  alternates: { canonical: 'https://mictoo.com/de/wma-to-mp3', languages: LANGS },
}

export default function DeWmaToMp3Page() {
  return (
    <section className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-slate-900 mb-3">WMA in MP3 umwandeln</h1>
      <p className="text-slate-500 mb-10 leading-relaxed">
        WMA (Windows Media Audio) war in den 2000ern das Standardformat von Microsoft für Windows-Recorder und Windows Media Player Rips. Es funktioniert unter Windows, ist aber fast überall sonst sperrig — moderne Smartphones, Web-Tools und Transkriptions-Engines akzeptieren es meist nicht. MP3 ist der universelle Ersatz. Hier vier kostenlose Methoden.
      </p>

      <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5 mb-10">
        <p className="text-sm text-slate-700">
          <strong>Warum umwandeln:</strong> Mictoo (und die meisten modernen Transkriptionstools) kann WMA nicht direkt lesen — es nutzt einen proprietären Codec. Sie müssen erst in MP3, M4A oder WAV umwandeln. Das MP3-Ergebnis ist leicht kleiner und spielt überall.
        </p>
      </div>

      <div className="space-y-12 text-slate-600 text-sm leading-relaxed">

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Methode 1 — Online-Konverter (ohne Installation)</h2>
          <p className="mb-4">
            Am einfachsten für Dateien unter ~200 MB und nicht-sensible Aufnahmen. Ziehen, ablegen, herunterladen — meist 5–15 Sekunden:
          </p>
          <p className="text-xs text-slate-500 mt-3">
            Datenschutz: für vertrauliche Aufnahmen (Interviews, Geschäftsanrufe, medizinisch) nutzen Sie die Desktop-Methoden — Ihre Audio verlässt nie Ihren Computer.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Methode 2 — VLC (Windows / macOS / Linux)</h2>

          <img
            src="/svg/vlc-convert-dialog.svg"
            alt="VLC-Konvertierdialog: Quelle ist recording.wma, Profil-Dropdown auf Audio – MP3, Zieldateiname endet auf .mp3, mit Start-Knopf."
            className="w-full rounded-2xl border border-slate-100 mb-5"
            width={640}
            height={300}
          />

          <p className="mb-3">
            <a href="https://www.videolan.org/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">VLC</a> ist kostenlos und liest WMA nativ auf allen Systemen. Umwandlung in vier Klicks:
          </p>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Öffnen Sie VLC. Klicken Sie <strong>Medien → Konvertieren / Speichern</strong>.</li>
            <li>Fügen Sie Ihre <code className="font-mono">.wma</code>-Datei hinzu, klicken Sie erneut <strong>Konvertieren / Speichern</strong>.</li>
            <li>Bei <strong>Profil</strong> wählen Sie <code className="font-mono">Audio - MP3</code>.</li>
            <li>Geben Sie einen Zieldateinamen mit <code className="font-mono">.mp3</code> an und klicken Sie <strong>Start</strong>.</li>
          </ol>
          <p className="mt-3">Fertig. Die Fortschrittsleiste am unteren Rand von VLC wird zur Konvertierungsanzeige.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Methode 3 — Audacity (kostenlos, alle Plattformen)</h2>
          <p className="mb-3">
            <a href="https://www.audacityteam.org/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">Audacity</a> ist nützlich, wenn Sie das Audio auch aufräumen wollen (Stille schneiden, leise Stimme verstärken, Hintergrundbrummen entfernen) vor der Transkription.
          </p>
          <ol className="list-decimal pl-5 space-y-1">
            <li><strong>Datei → Importieren → Audio</strong> → wählen Sie die <code className="font-mono">.wma</code></li>
            <li>(Optional) bearbeiten, normalisieren, entrauschen.</li>
            <li><strong>Datei → Exportieren → Als MP3 exportieren</strong>. Wählen Sie Mono und 64–96 kbps für Sprache.</li>
          </ol>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Methode 4 — Kommandozeile (ffmpeg)</h2>
          <p className="mb-4">
            Eine Zeile mit <a href="https://ffmpeg.org/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">ffmpeg</a>:
          </p>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-xs"><code>{`ffmpeg -i input.wma -acodec libmp3lame -ab 128k output.mp3`}</code></pre>
          <p className="text-xs text-slate-500 mt-2">
            Für Sprache/Transkription auf <code className="font-mono">-ab 64k -ac 1</code> setzen (Mono, 64 kbps) — gleiche Genauigkeit, 2–3× kleinere Datei.
          </p>
        </div>

        <div className="border-t border-slate-100 pt-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-3">MP3 fertig?</h2>
          <p className="mb-4">
            Ziehen Sie es in Mictoo für eine kostenlose Transkription — funktioniert in über 50 Sprachen, liefert Zeitstempel, SRT-Untertitel und KI-Zusammenfassung. Keine Registrierung.
          </p>
          <a href="/de" className="inline-flex items-center gap-2 btn-primary text-base px-6 py-3">
            ↑ MP3 kostenlos in Text umwandeln
          </a>
        </div>

      </div>

      <div className="border-t border-slate-100 mt-12 pt-8">
        <p className="text-sm text-slate-400 mb-4 text-center">Verwandte Anleitungen</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="/de/aac-to-mp3" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">AAC zu MP3</a>
          <a href="/de/m4a-to-mp3" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">M4A zu MP3</a>
          <a href="/de/transcribe-audio-to-text" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">Audio transkribieren</a>
          <a href="/de/how-to-compress-audio" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">Audio komprimieren</a>
        </div>
      </div>
    </section>
  )
}
