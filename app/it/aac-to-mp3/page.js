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
  title: 'Come convertire AAC in MP3 — metodi gratuiti (2026) | Mictoo',
  description: "Converti gratis file audio AAC in MP3. Tre modi rapidi — convertitore online, QuickTime/VLC o ffmpeg da riga di comando. Inoltre: Mictoo trascrive la maggior parte dei file AAC direttamente, senza conversione.",
  alternates: { canonical: 'https://mictoo.com/it/aac-to-mp3', languages: LANGS },
}

export default function ItAacToMp3Page() {
  return (
    <section className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-slate-900 mb-3">Come convertire AAC in MP3</h1>
      <p className="text-slate-500 mb-10 leading-relaxed">
        AAC (Advanced Audio Coding) è il formato predefinito per i memo vocali iPhone, i registratori Android e l'audio dentro i video MP4. MP3 è più universale e funziona con qualsiasi lettore, editor e strumento di trascrizione. Sotto — tre modi gratuiti più una nota su quando serve davvero convertire.
      </p>

      <div className="bg-brand-50 border border-brand-100 rounded-2xl p-5 mb-10">
        <p className="text-sm text-slate-700 mb-2">
          <strong>Prima di convertire:</strong> se l'obiettivo è la trascrizione, Mictoo accetta la maggior parte dei file AAC direttamente — compresi i file <code className="font-mono text-xs bg-white px-1.5 py-0.5 rounded border border-slate-200">.aac</code> dentro contenitori MP4 (memo vocali iPhone, export dal menu condividi, quasi tutti i registratori Android). Prova prima; converti solo se il file viene rifiutato.
        </p>
        <a href="/it" className="inline-flex items-center gap-2 text-sm text-brand-600 hover:underline">
          ↑ Trascrivi il .aac direttamente
        </a>
      </div>

      <div className="space-y-12 text-slate-600 text-sm leading-relaxed">

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Metodo 1 — Convertitore online (senza installazione)</h2>

          <img
            src="/svg/online-converter-3step.svg"
            alt="Tre passi: rilascia il file AAC, scegli MP3 come formato di output, scarica il risultato."
            className="w-full rounded-2xl border border-slate-100 mb-5"
            width={640}
            height={240}
          />

          <p className="mb-4">
            Il più veloce per file sotto ~200 MB. Trascina nel browser, ottieni l'MP3 in pochi secondi. Tutti senza registrazione:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><a href="https://cloudconvert.com/aac-to-mp3" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">CloudConvert</a> — interfaccia pulita, supporta batch.</li>
            <li><a href="https://convertio.co/aac-mp3/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">Convertio</a> — veloce, qualità MP3 selezionabile.</li>
            <li><a href="https://online-audio-converter.com/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">Online Audio Converter</a> — permette di scegliere mono/64 kbps per la trascrizione.</li>
          </ul>
          <p className="text-xs text-slate-500 mt-3">
            Privacy: i convertitori online caricano il file sui loro server. Per registrazioni sensibili (medico, legale, chiamate di lavoro) usa un metodo desktop sotto.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Metodo 2 — App desktop (offline)</h2>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">macOS — QuickTime + iMovie</h3>
          <p className="mb-2">
            QuickTime apre i file AAC. Usa <strong>File → Esporta come → Solo audio</strong> e scegli MP3 nella finestra. Incluso in ogni Mac.
          </p>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">Windows / macOS / Linux — Audacity (gratis)</h3>
          <p>
            Apri il file AAC in <a href="https://www.audacityteam.org/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">Audacity</a>, poi <strong>File → Esporta → Esporta come MP3</strong>. Scegli mono e 64–96 kbps se l'audio è voce.
          </p>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">Multipiattaforma — VLC</h3>
          <p>
            VLC converte tramite <strong>Media → Converti / Salva</strong>. Aggiungi il .aac, scegli il profilo <code className="font-mono text-xs bg-slate-100 px-1.5 py-0.5 rounded mx-1">Audio - MP3</code>, scegli destinazione, clicca Avvia.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Metodo 3 — Riga di comando (ffmpeg)</h2>
          <p className="mb-4">
            Una riga con <a href="https://ffmpeg.org/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">ffmpeg</a> installato:
          </p>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-xs"><code>{`ffmpeg -i input.aac -acodec libmp3lame -ab 128k output.mp3`}</code></pre>
          <p className="text-xs text-slate-500 mt-2">
            Per voce/trascrizione scendi a <code className="font-mono">-ab 64k -ac 1</code> — file 2–3× più piccolo senza perdita di precisione.
          </p>
        </div>

        <div className="border-t border-slate-100 pt-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-3">MP3 pronto?</h2>
          <p className="mb-4">
            Trascinalo in Mictoo per una trascrizione gratis con timestamp, sottotitoli SRT e riassunto IA. Senza registrazione.
          </p>
          <a href="/it" className="inline-flex items-center gap-2 btn-primary text-base px-6 py-3">
            ↑ Trascrivi MP3 in testo gratis
          </a>
        </div>

      </div>

      <div className="border-t border-slate-100 mt-12 pt-8">
        <p className="text-sm text-slate-400 mb-4 text-center">Guide correlate</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="/it/wma-to-mp3" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">WMA in MP3</a>
          <a href="/it/m4a-to-mp3" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">M4A in MP3</a>
          <a href="/it/aac-to-text" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">AAC in testo</a>
          <a href="/it/how-to-compress-audio" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">Comprimere audio</a>
        </div>
      </div>
    </section>
  )
}
