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
  title: 'Come convertire WMA in MP3 — metodi gratuiti (2026) | Mictoo',
  description: "Converti WMA (Windows Media Audio) in MP3 gratis. Convertitori online, VLC, Audacity e ffmpeg — scegli quello che ti va. Poi trascrivi l'MP3 in testo con Mictoo.",
  alternates: { canonical: 'https://mictoo.com/it/wma-to-mp3', languages: LANGS },

  openGraph: {
    title: "Come convertire WMA in MP3 — metodi gratuiti (2026) | Mictoo",
    description: "Converti WMA (Windows Media Audio) in MP3 gratis. Convertitori online, VLC, Audacity e ffmpeg — scegli quello che ti va. Poi trascrivi l'MP3 in testo con Mictoo.",
    url: "https://mictoo.com/it/wma-to-mp3",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Come convertire WMA in MP3 — metodi gratuiti (2026) | Mictoo",
    description: "Converti WMA (Windows Media Audio) in MP3 gratis. Convertitori online, VLC, Audacity e ffmpeg — scegli quello che ti va. Poi trascrivi l'MP3 in testo con Mictoo.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function ItWmaToMp3Page() {
  return (
    <section className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-slate-900 mb-3">Come convertire WMA in MP3</h1>
      <p className="text-slate-500 mb-10 leading-relaxed">
        WMA (Windows Media Audio) era il formato Microsoft predefinito negli anni 2000 per registratori Windows e rip di Windows Media Player. Funziona su Windows ma è scomodo quasi ovunque altro — telefoni moderni, strumenti web e motori di trascrizione di solito non lo accettano. MP3 è il sostituto universale. Ecco quattro modi gratuiti per convertire.
      </p>

      <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5 mb-10">
        <p className="text-sm text-slate-700">
          <strong>Perché convertire:</strong> Mictoo (e la maggior parte degli strumenti di trascrizione moderni) non legge WMA direttamente — usa un codec proprietario. Devi prima convertire in MP3, M4A o WAV. Il risultato MP3 sarà leggermente più piccolo e si riproduce ovunque.
        </p>
      </div>

      <div className="space-y-12 text-slate-600 text-sm leading-relaxed">

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Metodo 1 — Convertitore online (senza installazione)</h2>
          <p className="mb-4">
            Il modo più semplice se il file è sotto ~200 MB e la registrazione non è sensibile. Trascina, rilascia, scarica — di solito 5–15 secondi:
          </p>
          <p className="text-xs text-slate-500 mt-3">
            Privacy: per registrazioni confidenziali (interviste, chiamate di lavoro, medico) preferisci i metodi desktop — il tuo audio non lascia mai il computer.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Metodo 2 — VLC (Windows / macOS / Linux)</h2>

          <img
            src="/svg/vlc-convert-dialog.svg"
            alt="Finestra Converti di VLC: origine recording.wma, profilo Audio – MP3, file destinazione .mp3, pulsante Avvia."
            className="w-full rounded-2xl border border-slate-100 mb-5"
            width={640}
            height={300}
          />

          <p className="mb-3">
            <a href="https://www.videolan.org/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">VLC</a> è gratis e legge WMA nativamente su tutti i sistemi. Converti in quattro clic:
          </p>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Apri VLC. Clicca <strong>Media → Converti / Salva</strong>.</li>
            <li>Aggiungi il file <code className="font-mono">.wma</code>, clicca di nuovo <strong>Converti / Salva</strong>.</li>
            <li>In <strong>Profilo</strong> scegli <code className="font-mono">Audio - MP3</code>.</li>
            <li>Scegli una destinazione che termini con <code className="font-mono">.mp3</code> e clicca <strong>Avvia</strong>.</li>
          </ol>
          <p className="mt-3">Fatto. La barra di progresso in basso in VLC diventa l'indicatore di conversione.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Metodo 3 — Audacity (gratis, tutte le piattaforme)</h2>
          <p className="mb-3">
            <a href="https://www.audacityteam.org/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">Audacity</a> è utile se vuoi anche pulire l'audio (tagliare silenzi, alzare voce bassa, rimuovere ronzio di fondo) prima della trascrizione.
          </p>
          <ol className="list-decimal pl-5 space-y-1">
            <li><strong>File → Importa → Audio</strong> → scegli il <code className="font-mono">.wma</code></li>
            <li>(Opzionale) modifica, normalizza, riduci rumore.</li>
            <li><strong>File → Esporta → Esporta come MP3</strong>. Scegli mono e 64–96 kbps per la voce.</li>
          </ol>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Metodo 4 — Riga di comando (ffmpeg)</h2>
          <p className="mb-4">
            Una riga con <a href="https://ffmpeg.org/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">ffmpeg</a>:
          </p>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-xs"><code>{`ffmpeg -i input.wma -acodec libmp3lame -ab 128k output.mp3`}</code></pre>
          <p className="text-xs text-slate-500 mt-2">
            Per voce/trascrizione scendi a <code className="font-mono">-ab 64k -ac 1</code> (mono, 64 kbps) — stessa precisione, file 2–3× più piccolo.
          </p>
        </div>

        <div className="border-t border-slate-100 pt-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-3">MP3 pronto?</h2>
          <p className="mb-4">
            Trascinalo in Mictoo per una trascrizione gratis — funziona con 50+ lingue, restituisce timestamp, sottotitoli SRT e riassunto IA. Senza registrazione.
          </p>
          <a href="/it" className="inline-flex items-center gap-2 btn-primary text-base px-6 py-3">
            ↑ Trascrivi MP3 in testo gratis
          </a>
        </div>

      </div>

      <div className="border-t border-slate-100 mt-12 pt-8">
        <p className="text-sm text-slate-400 mb-4 text-center">Guide correlate</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="/it/aac-to-mp3" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">AAC in MP3</a>
          <a href="/it/m4a-to-mp3" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">M4A in MP3</a>
          <a href="/it/transcribe-audio-to-text" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">Trascrivere audio</a>
          <a href="/it/how-to-compress-audio" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">Comprimere audio</a>
        </div>
      </div>
    </section>
  )
}
