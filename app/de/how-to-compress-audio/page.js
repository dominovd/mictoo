const LANGS = {
  'en': 'https://mictoo.com/how-to-compress-audio',
  'fr': 'https://mictoo.com/fr/how-to-compress-audio',
  'de': 'https://mictoo.com/de/how-to-compress-audio',
  'es': 'https://mictoo.com/es/how-to-compress-audio',
  'ru': 'https://mictoo.com/ru/how-to-compress-audio',
  'it': 'https://mictoo.com/it/how-to-compress-audio',
  'pt': 'https://mictoo.com/pt/how-to-compress-audio',
  'pl': 'https://mictoo.com/pl/how-to-compress-audio',
  'ja': 'https://mictoo.com/ja/how-to-compress-audio',
  'x-default': 'https://mictoo.com/how-to-compress-audio',
}

export const metadata = {
  title: 'Audio für Transkription komprimieren — Kostenlose Methoden | Mictoo',
  description: 'Drei kostenlose Wege, eine Audio- oder Videodatei für die Transkription unter 25 MB zu bringen: Audio extrahieren, Bitrate senken oder die Datei aufteilen. Ohne Software-Installation.',
  alternates: { canonical: 'https://mictoo.com/de/how-to-compress-audio', languages: LANGS },
}

export default function DeHowToCompressAudioPage() {
  return (
    <section className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-slate-900 mb-3">Audio für die Transkription komprimieren</h1>
      <p className="text-slate-500 mb-10 leading-relaxed">
        Mictoo akzeptiert Dateien bis <strong>25 MB</strong> kostenlos. Wenn Ihre Datei größer ist, hier sind
        drei schnelle Wege, sie ohne Qualitätsverlust für die Transkription zu verkleinern. Wählen Sie
        den passenden Weg für Ihre Datei und Ihr Können.
      </p>

      <div className="space-y-12 text-slate-600 text-sm leading-relaxed">

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Methode 1 — Audio aus einer Videodatei extrahieren</h2>
          <p className="mb-4">
            Wenn Sie eine Videodatei (MP4, WEBM, MOV) haben, die hauptsächlich Sprache enthält, ist die Audiospur
            meist 5-10× kleiner als das Video. Mictoo braucht nur das Audio — das Video hilft der Transkription nicht.
            Das ist die schnellste Lösung für die meisten Nutzer.
          </p>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">Online (ohne Installation)</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><a href="https://convertio.co/mp4-mp3/" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">Convertio</a> — MP4 ablegen, MP3 oder M4A wählen, herunterladen.</li>
            <li><a href="https://cloudconvert.com/mp4-to-mp3" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">CloudConvert</a> — unterstützt MP4 → MP3 / M4A / WAV.</li>
            <li><a href="https://www.media.io/audio-converter.html" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">Media.io</a> — schnelle Konvertierung im Browser.</li>
          </ul>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">Kommandozeile (ffmpeg)</h3>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-xs"><code>{`ffmpeg -i input.mp4 -vn -acodec copy output.m4a`}</code></pre>
          <p className="text-xs text-slate-500 mt-2">
            <code className="font-mono">-vn</code> entfernt das Video, <code className="font-mono">-acodec copy</code> behält die Audio-Qualität bei. Schnell — kein Re-Encoding.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Methode 2 — Audio-Bitrate senken</h2>
          <p className="mb-4">
            Die meisten Podcasts und Meetings werden mit 128-192 kbps aufgenommen. Für die Transkription reichen 64 kbps mono
            völlig aus — die Genauigkeit bleibt gleich und die Datei wird 2-3× kleiner. Das ist die beste Methode
            für lange Audiodateien.
          </p>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">Online</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><a href="https://online-audio-converter.com/" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">Online Audio Converter</a> — Qualitätsregler auf 64 kbps, Mono.</li>
            <li><a href="https://www.freeconvert.com/audio-compressor" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">FreeConvert Audio Compressor</a> — Zielgröße wählen.</li>
          </ul>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">Kommandozeile (ffmpeg)</h3>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-xs"><code>{`ffmpeg -i input.mp3 -ac 1 -b:a 64k output.mp3`}</code></pre>
          <p className="text-xs text-slate-500 mt-2">
            <code className="font-mono">-ac 1</code> konvertiert nach Mono (Sprache reicht in Mono),
            <code className="font-mono">-b:a 64k</code> setzt die Audio-Bitrate auf 64 kbps.
          </p>
          <p className="mt-3"><strong>Grobe Rechnung:</strong> 64 kbps ergibt ~28 MB pro Stunde. Ein 1-stündiges Interview passt knapp in 28 MB. Senken Sie auf <code className="font-mono">-b:a 48k</code> für ~21 MB/Stunde ohne spürbaren Genauigkeitsverlust.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Methode 3 — In kürzere Teile aufteilen</h2>
          <p className="mb-4">
            Wenn Sie die Originalqualität behalten müssen (rechtlich, medizinisch, Archiv), teilen Sie die Datei
            in 20-25-Minuten-Stücke und transkribieren jedes separat. Dann fügen Sie die Transkripte in einem beliebigen
            Texteditor zusammen.
          </p>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">Online</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><a href="https://mp3cut.net/" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">mp3cut.net</a> — MP3 ablegen, Anfang/Ende setzen, herunterladen.</li>
            <li><a href="https://clideo.com/cut-audio" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">Clideo Cut Audio</a> — saubere UI, unterstützt die meisten Formate.</li>
          </ul>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">Kommandozeile (ffmpeg)</h3>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-xs"><code>{`ffmpeg -i input.mp3 -f segment -segment_time 1200 -c copy part_%03d.mp3`}</code></pre>
          <p className="text-xs text-slate-500 mt-2">
            Teilt die Eingabe in 20-Minuten-Stücke (<code className="font-mono">1200</code> Sekunden) mit den Namen <code className="font-mono">part_001.mp3</code>, <code className="font-mono">part_002.mp3</code> usw. Dann jede in Mictoo hochladen.
          </p>
        </div>

        <div className="border-t border-slate-100 pt-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Fertig?</h2>
          <p className="mb-4">
            Sobald Ihre Datei unter 25 MB ist, gehen Sie zurück zur Startseite und legen sie ins Transkriptions-Tool.
          </p>
          <a href="/de" className="inline-flex items-center gap-2 btn-primary text-base px-6 py-3">
            ↑ Zurück zur Transkription
          </a>
        </div>

      </div>

      <div className="border-t border-slate-100 mt-12 pt-8">
        <p className="text-sm text-slate-400 mb-4 text-center">Mehr Transkriptions-Tools</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="/de/transcribe-mp3-to-text" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">MP3 zu Text</a>
          <a href="/de/transcribe-video-to-text" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">Video zu Text</a>
          <a href="/de/m4a-to-text" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">M4A zu Text</a>
          <a href="/de" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">Alle Formate</a>
        </div>
      </div>
    </section>
  )
}
