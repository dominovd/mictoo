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
  title: 'Come convertire M4A in MP3 — metodi gratuiti (o saltarlo) | Mictoo',
  description: "Converti M4A in MP3 in secondi con strumenti online gratuiti, QuickTime, VLC o ffmpeg. Nota: la maggior parte delle app (incluso Mictoo) accetta M4A direttamente — potresti non aver bisogno di convertire.",
  alternates: { canonical: 'https://mictoo.com/it/m4a-to-mp3', languages: LANGS },
}

export default function ItM4aToMp3Page() {
  return (
    <section className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-slate-900 mb-3">Come convertire M4A in MP3</h1>
      <p className="text-slate-500 mb-10 leading-relaxed">
        M4A è il formato audio predefinito per i memo vocali iPhone, i download di Apple Podcasts e la maggior parte delle app di registrazione macOS. MP3 è più universale, ma nel 2026 un numero sorprendente di strumenti accetta M4A direttamente — quasi tutti i browser, editor audio, app di podcast e servizi di trascrizione. Ecco quando ti serve davvero convertire e i modi gratuiti più veloci per farlo.
      </p>

      <div className="bg-brand-50 border border-brand-100 rounded-2xl p-5 mb-10">
        <p className="text-sm text-slate-700 mb-2">
          <strong>Probabilmente non hai bisogno di convertire.</strong> M4A e MP3 hanno qualità audio molto simile. Le app moderne che leggono MP3 leggono quasi sempre anche M4A. In particolare:
        </p>
        <ul className="text-sm text-slate-700 list-disc pl-5 mt-2 space-y-1">
          <li><strong>Trascrizione:</strong> Mictoo accetta <code className="font-mono text-xs bg-white px-1.5 py-0.5 rounded border border-slate-200">.m4a</code> direttamente — rilascia il file e ottieni il testo. Senza conversione.</li>
          <li><strong>Editing audio:</strong> Audacity, GarageBand, Logic, Premiere, DaVinci Resolve leggono tutti M4A.</li>
          <li><strong>Streaming/riproduzione:</strong> Spotify, Apple Music, YouTube Music, qualsiasi browser e OS moderno riproduce M4A.</li>
        </ul>
        <p className="text-sm text-slate-700 mt-3">
          Serve davvero MP3 solo quando l'app di destinazione richiede esplicitamente solo MP3 — alcune autoradio vecchie, attrezzi fitness, registratori vocali base o software legacy.
        </p>
        <a href="/it" className="inline-flex items-center gap-2 text-sm text-brand-600 hover:underline mt-3">
          ↑ Prova a trascrivere il .m4a direttamente con Mictoo
        </a>
      </div>

      <div className="space-y-12 text-slate-600 text-sm leading-relaxed">

        <p className="-mb-6 text-slate-700">
          <strong>Ti serve comunque MP3?</strong> Scegli il metodo sotto adatto al tuo setup. Tutti gratuiti.
        </p>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Metodo 1 — Convertitore online</h2>
          <p className="mb-4">
            Trascina, rilascia, scarica — di solito sotto i 10 secondi per un memo vocale tipico:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><a href="https://cloudconvert.com/m4a-to-mp3" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">CloudConvert</a> — interfaccia pulita, supporta file grandi.</li>
            <li><a href="https://convertio.co/m4a-mp3/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">Convertio</a> — veloce, qualità MP3 selezionabile.</li>
            <li><a href="https://online-audio-converter.com/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">Online Audio Converter</a> — controlli di qualità fini.</li>
          </ul>
          <p className="text-xs text-slate-500 mt-3">
            Privacy: gli strumenti online caricano il file. Saltali per registrazioni confidenziali — usa un metodo desktop.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Metodo 2 — macOS (senza installazione)</h2>

          <img
            src="/svg/macos-music-convert.svg"
            alt="App Musica macOS: clic su File nella barra menu, passa su Converti, poi scegli Crea versione MP3."
            className="w-full rounded-2xl border border-slate-100 mb-5"
            width={640}
            height={280}
          />

          <p className="mb-3">
            <strong>App Musica:</strong> Trascina il <code className="font-mono">.m4a</code> in Musica, selezionalo, poi <strong>File → Converti → Crea versione MP3</strong>. L'MP3 appare accanto all'originale.
          </p>
          <p className="mb-3">
            <strong>QuickTime Player:</strong> Apri il file → <strong>File → Esporta come → Solo audio</strong>. QuickTime esporta in M4A per default; abbinarlo a VLC o Audacity sotto se ti serve MP3.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Metodo 3 — VLC (multipiattaforma)</h2>
          <p className="mb-3">
            <a href="https://www.videolan.org/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">VLC</a> su Windows/macOS/Linux:
          </p>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Apri VLC → <strong>Media → Converti / Salva</strong>.</li>
            <li>Aggiungi il file <code className="font-mono">.m4a</code>, clicca <strong>Converti / Salva</strong>.</li>
            <li>Scegli il profilo <code className="font-mono">Audio - MP3</code>.</li>
            <li>Scegli destinazione con <code className="font-mono">.mp3</code>, clicca <strong>Avvia</strong>.</li>
          </ol>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Metodo 4 — Riga di comando (ffmpeg)</h2>
          <p className="mb-4">
            Una riga con <a href="https://ffmpeg.org/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">ffmpeg</a>:
          </p>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-xs"><code>{`ffmpeg -i input.m4a -acodec libmp3lame -ab 128k output.mp3`}</code></pre>
          <p className="text-xs text-slate-500 mt-2">
            Per voce/trascrizione usa <code className="font-mono">-ab 64k -ac 1</code> — file 2–3× più piccolo senza perdita di qualità sul parlato.
          </p>
        </div>

        <div className="border-t border-slate-100 pt-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Serve una trascrizione?</h2>
          <p className="mb-4">
            Sia M4A che MP3 funzionano direttamente in Mictoo. Rilascia il file, ottieni testo con timestamp, sottotitoli SRT e riassunto IA — gratis, senza registrazione.
          </p>
          <a href="/it" className="inline-flex items-center gap-2 btn-primary text-base px-6 py-3">
            ↑ Trascrivi audio in testo gratis
          </a>
        </div>

      </div>

      <div className="border-t border-slate-100 mt-12 pt-8">
        <p className="text-sm text-slate-400 mb-4 text-center">Guide correlate</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="/it/aac-to-mp3" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">AAC in MP3</a>
          <a href="/it/wma-to-mp3" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">WMA in MP3</a>
          <a href="/it/m4a-to-text" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">M4A in testo</a>
          <a href="/it/how-to-compress-audio" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">Comprimere audio</a>
        </div>
      </div>
    </section>
  )
}
