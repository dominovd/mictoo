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
  title: 'Come dividere un file audio lungo per la trascrizione — Metodi gratuiti | Mictoo',
  description: 'Tre modi gratuiti per dividere una registrazione lunga in parti più brevi per la trascrizione: strumenti online, Audacity o ffmpeg. Funziona con MP3, M4A, WAV, MP4 e altri.',
  alternates: { canonical: 'https://mictoo.com/it/how-to-split-audio', languages: LANGS },

  openGraph: {
    title: "Come dividere un file audio lungo per la trascrizione — Metodi gratuiti | Mictoo",
    description: "Tre modi gratuiti per dividere una registrazione lunga in parti più brevi per la trascrizione: strumenti online, Audacity o ffmpeg. Funziona con MP3, M4A, WAV, MP4 e altri.",
    url: "https://mictoo.com/it/how-to-split-audio",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Come dividere un file audio lungo per la trascrizione — Metodi gratuiti | Mictoo",
    description: "Tre modi gratuiti per dividere una registrazione lunga in parti più brevi per la trascrizione: strumenti online, Audacity o ffmpeg. Funziona con MP3, M4A, WAV, MP4 e altri.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function ItHowToSplitAudioPage() {
  return (
    <section className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-slate-900 mb-3">Come dividere un file audio lungo per la trascrizione</h1>
      <p className="text-slate-500 mb-10 leading-relaxed">
        Mictoo trascrive file fino a <strong>30 minuti</strong> per utenti anonimi e
        <strong> 60 minuti</strong> quando hai effettuato l&apos;accesso. Se la tua registrazione è più lunga,
        la soluzione più pulita è dividerla in due o tre parti più brevi e trascrivere ciascuna separatamente.
        Di seguito tre modi gratuiti per farlo — scegli quello che fa per il tuo file e per le tue competenze.
      </p>

      <div className="space-y-12 text-slate-600 text-sm leading-relaxed">

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Metodo 1 — Strumenti online (senza installazione)</h2>
          <p className="mb-4">
            L&apos;opzione più rapida per una divisione occasionale. Trascina il file, imposta inizio/fine,
            scarica il pezzo. Ripeti per ogni segmento.
          </p>


          <p className="mt-3 text-xs text-slate-500">
            Consiglio: taglia in una pausa naturale (tra frasi o cambi di interlocutore) così la trascrizione
            si legge in modo fluido quando ricomponi le parti.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Metodo 2 — Audacity (app gratuita)</h2>
          <p className="mb-4">
            La scelta migliore per la precisione, soprattutto se la registrazione ha silenzi o pause su cui vuoi tagliare.
            Audacity è gratuito e open-source per macOS, Windows e Linux.
          </p>

          <ol className="list-decimal pl-5 space-y-1">
            <li>Scarica <a href="https://www.audacityteam.org/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">Audacity</a> e apri il tuo file audio.</li>
            <li>Usa <strong>File → Importa → Audio</strong> se necessario. Audacity legge MP3, M4A, WAV, FLAC, OGG e altri.</li>
            <li>Fai clic sulla forma d&apos;onda nel punto di taglio (Ctrl/Cmd+B per inserire un marker, o seleziona la regione per una parte).</li>
            <li>Scegli <strong>File → Esporta → Esporta audio selezionato</strong> e salva la prima parte come MP3 o WAV.</li>
            <li>Seleziona la regione successiva, esporta, ripeti.</li>
          </ol>

          <p className="mt-3 text-xs text-slate-500">
            Per registrazioni lunghe, lo strumento <strong>Analizza → Sound Finder</strong> di Audacity trova
            automaticamente le regioni silenziose — utile per dividere podcast o interviste sulle pause naturali.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Metodo 3 — Riga di comando (ffmpeg)</h2>
          <p className="mb-4">
            Un solo comando divide l&apos;intero file in parti di pari durata. Senza ri-codifica, quindi istantaneo
            anche su una registrazione di 2 ore. Ideale se hai già ffmpeg installato.
          </p>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">Dividere in parti da 25 minuti</h3>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-xs"><code>{`ffmpeg -i input.mp3 -f segment -segment_time 1500 -c copy part_%03d.mp3`}</code></pre>
          <p className="text-xs text-slate-500 mt-2">
            <code className="font-mono">1500</code> è la durata del segmento in secondi (25 min).
            I file in uscita saranno <code className="font-mono">part_001.mp3</code>,{' '}
            <code className="font-mono">part_002.mp3</code> ecc. Il flag{' '}
            <code className="font-mono">-c copy</code> evita la ri-codifica — divisione senza perdita e veloce.
          </p>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">Estrarre un intervallo specifico</h3>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-xs"><code>{`ffmpeg -i input.mp4 -ss 00:00:00 -t 00:25:00 -c copy part1.mp4
ffmpeg -i input.mp4 -ss 00:25:00 -t 00:25:00 -c copy part2.mp4`}</code></pre>
          <p className="text-xs text-slate-500 mt-2">
            <code className="font-mono">-ss</code> è l&apos;istante di inizio, <code className="font-mono">-t</code>{' '}
            è la durata. Funziona anche per i file video — la traccia audio si divide allo stesso modo.
          </p>

          <p className="mt-3">
            Non hai ancora ffmpeg? Installa da{' '}
            <a href="https://ffmpeg.org/download.html" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">ffmpeg.org/download</a>{' '}
            o con Homebrew su macOS: <code className="font-mono">brew install ffmpeg</code>.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Riunire le trascrizioni</h2>
          <p className="mb-3">
            Trascrivi ogni parte su Mictoo, poi incolla i risultati in un unico documento in ordine.
            Alcuni consigli per una trascrizione finale pulita:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Quando possibile taglia in una pausa — le parole non vengono spezzate a metà.</li>
            <li>Se il taglio cade in mezzo a una frase, la prima parola della parte successiva potrebbe risultare con la maiuscola. Facile da sistemare in qualsiasi editor.</li>
            <li>Per sottotitoli SRT/VTT: somma la durata totale della parte precedente a ogni timestamp del file successivo. Un find-and-replace o un piccolo script bastano.</li>
            <li>Il riepilogo AI di Mictoo funziona meglio su una trascrizione unica — unisci prima le parti, poi rilancia il riepilogo sul testo combinato.</li>
          </ul>
        </div>

        <div className="border-t border-slate-100 pt-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Tutto pronto?</h2>
          <p className="mb-4">
            Quando ogni parte è sotto il limite di durata, torna alla home e caricale una alla volta.
          </p>
          <a href="/it" className="inline-flex items-center gap-2 btn-primary text-base px-6 py-3">
            ↑ Torna alla trascrizione
          </a>
        </div>

      </div>

      <div className="border-t border-slate-100 mt-12 pt-8">
        <p className="text-sm text-slate-400 mb-4 text-center">Altre guide di trascrizione</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="/it/how-to-compress-audio" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">Come comprimere l&apos;audio</a>
          <a href="/it/transcribe-mp3-to-text" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">MP3 in testo</a>
          <a href="/it/podcast-transcription" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">Trascrizione podcast</a>
          <a href="/it" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">Tutti i formati</a>
        </div>
      </div>
    </section>
  )
}
