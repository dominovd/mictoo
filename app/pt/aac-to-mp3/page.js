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
  title: 'Como converter AAC para MP3 — métodos grátis (2026) | Mictoo',
  description: "Converta arquivos AAC para MP3 grátis. Três formas rápidas — conversor online, QuickTime/VLC ou ffmpeg na linha de comando. Dica: o Mictoo transcreve a maioria dos arquivos AAC diretamente, sem conversão.",
  alternates: { canonical: 'https://mictoo.com/pt/aac-to-mp3', languages: LANGS },

  openGraph: {
    title: "Como converter AAC para MP3 — métodos grátis (2026) | Mictoo",
    description: "Converta arquivos AAC para MP3 grátis. Três formas rápidas — conversor online, QuickTime/VLC ou ffmpeg na linha de comando. Dica: o Mictoo transcreve a maioria dos arquivos AAC diretamente, sem conversão.",
    url: "https://mictoo.com/pt/aac-to-mp3",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Como converter AAC para MP3 — métodos grátis (2026) | Mictoo",
    description: "Converta arquivos AAC para MP3 grátis. Três formas rápidas — conversor online, QuickTime/VLC ou ffmpeg na linha de comando. Dica: o Mictoo transcreve a maioria dos arquivos AAC diretamente, sem conversão.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function PtAacToMp3Page() {
  return (
    <section className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-slate-900 mb-3">Como converter AAC para MP3</h1>
      <p className="text-slate-500 mb-10 leading-relaxed">
        AAC (Advanced Audio Coding) é o formato padrão para memos de voz do iPhone, gravadores Android e áudio dentro de vídeos MP4. MP3 é mais universal e funciona com qualquer player, editor e ferramenta de transcrição. Abaixo — três formas grátis e uma nota rápida sobre quando você realmente precisa converter.
      </p>

      <div className="bg-brand-50 border border-brand-100 rounded-2xl p-5 mb-10">
        <p className="text-sm text-slate-700 mb-2">
          <strong>Antes de converter:</strong> se o objetivo é transcrever, o Mictoo aceita a maioria dos arquivos AAC diretamente — incluindo arquivos <code className="font-mono text-xs bg-white px-1.5 py-0.5 rounded border border-slate-200">.aac</code> dentro de contêineres MP4 (memos de voz iPhone, exportações via Compartilhar, quase todos os gravadores Android). Tente primeiro; só precisa converter se o arquivo for rejeitado.
        </p>
        <a href="/pt" className="inline-flex items-center gap-2 text-sm text-brand-600 hover:underline">
          ↑ Transcrever o .aac diretamente
        </a>
      </div>

      <div className="space-y-12 text-slate-600 text-sm leading-relaxed">

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Método 1 — Conversor online (sem instalação)</h2>

          <img
            src="/svg/online-converter-3step.svg"
            alt="Três passos: soltar o arquivo AAC, escolher MP3 como formato de saída, baixar o resultado."
            className="w-full rounded-2xl border border-slate-100 mb-5"
            width={640}
            height={240}
          />

          <p className="mb-4">
            O mais rápido para arquivos abaixo de ~200 MB. Arraste no navegador, receba o MP3 em segundos. Todos sem cadastro:
          </p>
          <p className="text-xs text-slate-500 mt-3">
            Privacidade: conversores online enviam seu arquivo para os servidores deles. Para gravações sensíveis (médicas, jurídicas, chamadas de trabalho) use um método desktop abaixo.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Método 2 — Apps de desktop (offline)</h2>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">macOS — QuickTime + iMovie</h3>
          <p className="mb-2">
            O QuickTime abre arquivos AAC. Use <strong>Arquivo → Exportar como → Apenas áudio</strong> e escolha MP3 na caixa de diálogo. Vem em todo Mac.
          </p>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">Windows / macOS / Linux — Audacity (grátis)</h3>
          <p>
            Abra o arquivo AAC no <a href="https://www.audacityteam.org/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">Audacity</a>, depois <strong>Arquivo → Exportar → Exportar como MP3</strong>. Escolha mono e 64–96 kbps se o áudio for voz.
          </p>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">Multiplataforma — VLC</h3>
          <p>
            O VLC converte via <strong>Mídia → Converter / Salvar</strong>. Adicione o .aac, escolha o perfil <code className="font-mono text-xs bg-slate-100 px-1.5 py-0.5 rounded mx-1">Audio - MP3</code>, escolha o destino, clique em Iniciar.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Método 3 — Linha de comando (ffmpeg)</h2>
          <p className="mb-4">
            Uma linha com <a href="https://ffmpeg.org/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">ffmpeg</a> instalado:
          </p>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-xs"><code>{`ffmpeg -i input.aac -acodec libmp3lame -ab 128k output.mp3`}</code></pre>
          <p className="text-xs text-slate-500 mt-2">
            Para voz/transcrição, reduza para <code className="font-mono">-ab 64k -ac 1</code> — arquivo 2–3× menor sem perda de precisão.
          </p>
        </div>

        <div className="border-t border-slate-100 pt-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-3">MP3 pronto?</h2>
          <p className="mb-4">
            Solte no Mictoo para uma transcrição grátis com timestamps, legendas SRT e resumo de IA. Sem cadastro.
          </p>
          <a href="/pt" className="inline-flex items-center gap-2 btn-primary text-base px-6 py-3">
            ↑ Transcrever MP3 em texto grátis
          </a>
        </div>

      </div>

      <div className="border-t border-slate-100 mt-12 pt-8">
        <p className="text-sm text-slate-400 mb-4 text-center">Guias relacionados</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="/pt/wma-to-mp3" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">WMA para MP3</a>
          <a href="/pt/m4a-to-mp3" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">M4A para MP3</a>
          <a href="/pt/aac-to-text" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">AAC para texto</a>
          <a href="/pt/how-to-compress-audio" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">Comprimir áudio</a>
        </div>
      </div>
    </section>
  )
}
