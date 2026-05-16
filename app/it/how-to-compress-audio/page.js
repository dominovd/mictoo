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
  title: 'Come comprimere audio per la trascrizione — Metodi gratis | Mictoo',
  description: "Tre modi gratuiti per ridurre un file audio o video sotto i 25 MB per la trascrizione: estrai audio, abbassa il bitrate o dividi il file. Senza installare software.",
  alternates: { canonical: 'https://mictoo.com/it/how-to-compress-audio', languages: LANGS },
}

export default function ItHowToCompressAudioPage() {
  return (
    <section className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-slate-900 mb-3">Come comprimere audio per la trascrizione</h1>
      <p className="text-slate-500 mb-10 leading-relaxed">
        Mictoo accetta file fino a <strong>25 MB</strong> gratis. Se il tuo file è più grande, ecco tre modi
        rapidi per ridurlo senza perdere qualità di trascrizione. Scegli quello adatto al tuo file e alle tue
        competenze.
      </p>

      <div className="space-y-12 text-slate-600 text-sm leading-relaxed">

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Metodo 1 — Estrai l&apos;audio da un file video</h2>
          <p className="mb-4">
            Se hai un file video (MP4, WEBM, MOV) prevalentemente parlato, la traccia audio è di solito
            5-10× più piccola del video. Mictoo ha bisogno solo dell&apos;audio — il video non aiuta la
            trascrizione. È la soluzione più rapida per la maggior parte degli utenti.
          </p>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">Online (senza installazione)</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><a href="https://convertio.co/mp4-mp3/" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">Convertio</a> — trascina MP4, scegli MP3 o M4A, scarica.</li>
            <li><a href="https://cloudconvert.com/mp4-to-mp3" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">CloudConvert</a> — supporta MP4 → MP3 / M4A / WAV.</li>
            <li><a href="https://www.media.io/audio-converter.html" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">Media.io</a> — conversione rapida nel browser.</li>
          </ul>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">Riga di comando (ffmpeg)</h3>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-xs"><code>{`ffmpeg -i input.mp4 -vn -acodec copy output.m4a`}</code></pre>
          <p className="text-xs text-slate-500 mt-2">
            <code className="font-mono">-vn</code> rimuove il video, <code className="font-mono">-acodec copy</code> mantiene la qualità audio intatta. Veloce — nessuna ricodifica.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Metodo 2 — Abbassa il bitrate audio</h2>
          <p className="mb-4">
            La maggior parte dei podcast e delle riunioni viene registrata a 128-192 kbps. Per la trascrizione
            64 kbps mono è più che sufficiente — l&apos;accuratezza rimane uguale e il file diventa 2-3× più piccolo.
            È il metodo migliore per file audio lunghi.
          </p>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">Online</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><a href="https://online-audio-converter.com/" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">Online Audio Converter</a> — imposta lo slider qualità a 64 kbps, mono.</li>
            <li><a href="https://www.freeconvert.com/audio-compressor" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">FreeConvert Audio Compressor</a> — scegli la dimensione target.</li>
          </ul>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">Riga di comando (ffmpeg)</h3>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-xs"><code>{`ffmpeg -i input.mp3 -ac 1 -b:a 64k output.mp3`}</code></pre>
          <p className="text-xs text-slate-500 mt-2">
            <code className="font-mono">-ac 1</code> converte in mono (il parlato va bene in mono),
            <code className="font-mono">-b:a 64k</code> imposta il bitrate audio a 64 kbps.
          </p>
          <p className="mt-3"><strong>Conto rapido:</strong> 64 kbps dà ~28 MB all&apos;ora. Un&apos;intervista di 1 ora entra in circa 28 MB — vicino al limite. Scendi a <code className="font-mono">-b:a 48k</code> per ~21 MB/ora senza perdita notevole di precisione.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Metodo 3 — Dividi in parti più brevi</h2>
          <p className="mb-4">
            Se devi mantenere la qualità originale (legale, medico, archivio), dividi il file in pezzi di
            20-25 minuti e trascrivili separatamente. Poi unisci le trascrizioni in qualsiasi editor di testo.
          </p>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">Online</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><a href="https://mp3cut.net/" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">mp3cut.net</a> — trascina MP3, imposta inizio/fine, scarica.</li>
            <li><a href="https://clideo.com/cut-audio" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">Clideo Cut Audio</a> — UI pulita, supporta la maggior parte dei formati.</li>
          </ul>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">Riga di comando (ffmpeg)</h3>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-xs"><code>{`ffmpeg -i input.mp3 -f segment -segment_time 1200 -c copy part_%03d.mp3`}</code></pre>
          <p className="text-xs text-slate-500 mt-2">
            Divide l&apos;input in parti da 20 minuti (<code className="font-mono">1200</code> secondi) chiamate <code className="font-mono">part_001.mp3</code>, <code className="font-mono">part_002.mp3</code>, ecc. Poi carica ciascuna su Mictoo.
          </p>
        </div>

        <div className="border-t border-slate-100 pt-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Tutto pronto?</h2>
          <p className="mb-4">
            Una volta che il tuo file è sotto i 25 MB, torna alla home e caricalo nello strumento di trascrizione.
          </p>
          <a href="/it" className="inline-flex items-center gap-2 btn-primary text-base px-6 py-3">
            ↑ Torna alla trascrizione
          </a>
        </div>

      </div>

      <div className="border-t border-slate-100 mt-12 pt-8">
        <p className="text-sm text-slate-400 mb-4 text-center">Altri strumenti di trascrizione</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="/it/transcribe-mp3-to-text" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">MP3 in testo</a>
          <a href="/it/transcribe-video-to-text" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">Video in testo</a>
          <a href="/it/m4a-to-text" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">M4A in testo</a>
          <a href="/it" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">Tutti i formati</a>
        </div>
      </div>
    </section>
  )
}
