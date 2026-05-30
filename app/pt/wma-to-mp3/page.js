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
  title: 'Como converter WMA para MP3 — métodos grátis (2026) | Mictoo',
  description: "Converta WMA (Windows Media Audio) para MP3 grátis. Conversores online, VLC, Audacity e ffmpeg — escolha o que serve. Depois transcreva o MP3 em texto com o Mictoo.",
  alternates: { canonical: 'https://mictoo.com/pt/wma-to-mp3', languages: LANGS },

  openGraph: {
    title: "Como converter WMA para MP3 — métodos grátis (2026) | Mictoo",
    description: "Converta WMA (Windows Media Audio) para MP3 grátis. Conversores online, VLC, Audacity e ffmpeg — escolha o que serve. Depois transcreva o MP3 em texto com o Mictoo.",
    url: "https://mictoo.com/pt/wma-to-mp3",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Como converter WMA para MP3 — métodos grátis (2026) | Mictoo",
    description: "Converta WMA (Windows Media Audio) para MP3 grátis. Conversores online, VLC, Audacity e ffmpeg — escolha o que serve. Depois transcreva o MP3 em texto com o Mictoo.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function PtWmaToMp3Page() {
  return (
    <section className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-slate-900 mb-3">Como converter WMA para MP3</h1>
      <p className="text-slate-500 mb-10 leading-relaxed">
        WMA (Windows Media Audio) foi o formato padrão da Microsoft nos anos 2000 para gravadores Windows e rips do Windows Media Player. Funciona no Windows mas é desajeitado em quase todo o resto — celulares modernos, ferramentas web e mecanismos de transcrição geralmente não aceitam. MP3 é o substituto universal. Aqui quatro formas grátis de converter.
      </p>

      <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5 mb-10">
        <p className="text-sm text-slate-700">
          <strong>Por que converter:</strong> O Mictoo (e a maioria das ferramentas modernas de transcrição) não lê WMA diretamente — é um codec proprietário. Você precisa converter primeiro para MP3, M4A ou WAV. O resultado MP3 será um pouco menor e toca em qualquer lugar.
        </p>
      </div>

      <div className="space-y-12 text-slate-600 text-sm leading-relaxed">

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Método 1 — Conversor online (sem instalação)</h2>
          <p className="mb-4">
            O caminho mais fácil se o arquivo tem menos de ~200 MB e a gravação não é sensível. Arrasta, solta, baixa — geralmente 5–15 segundos:
          </p>
          <p className="text-xs text-slate-500 mt-3">
            Privacidade: para gravações confidenciais (entrevistas, chamadas de trabalho, médico) prefira os métodos desktop — seu áudio nunca sai do computador.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Método 2 — VLC (Windows / macOS / Linux)</h2>

          <img
            src="/svg/vlc-convert-dialog.svg"
            alt="Diálogo Converter do VLC: origem recording.wma, perfil Audio – MP3, arquivo destino .mp3, botão Iniciar."
            className="w-full rounded-2xl border border-slate-100 mb-5"
            width={640}
            height={300}
          />

          <p className="mb-3">
            <a href="https://www.videolan.org/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">VLC</a> é grátis e lê WMA nativamente em todos os sistemas. Converte em quatro cliques:
          </p>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Abra o VLC. Clique <strong>Mídia → Converter / Salvar</strong>.</li>
            <li>Adicione seu arquivo <code className="font-mono">.wma</code>, clique novamente em <strong>Converter / Salvar</strong>.</li>
            <li>Em <strong>Perfil</strong> escolha <code className="font-mono">Audio - MP3</code>.</li>
            <li>Escolha um destino terminando em <code className="font-mono">.mp3</code> e clique em <strong>Iniciar</strong>.</li>
          </ol>
          <p className="mt-3">Pronto. A barra de progresso no rodapé do VLC vira o medidor de conversão.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Método 3 — Audacity (grátis, todas as plataformas)</h2>
          <p className="mb-3">
            <a href="https://www.audacityteam.org/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">Audacity</a> é útil se você também quer limpar o áudio (cortar silêncios, aumentar voz baixa, remover zumbido de fundo) antes de transcrever.
          </p>
          <ol className="list-decimal pl-5 space-y-1">
            <li><strong>Arquivo → Importar → Áudio</strong> → escolha o <code className="font-mono">.wma</code></li>
            <li>(Opcional) edite, normalize, reduza ruído.</li>
            <li><strong>Arquivo → Exportar → Exportar como MP3</strong>. Escolha mono e 64–96 kbps para voz.</li>
          </ol>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Método 4 — Linha de comando (ffmpeg)</h2>
          <p className="mb-4">
            Uma linha com <a href="https://ffmpeg.org/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">ffmpeg</a>:
          </p>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-xs"><code>{`ffmpeg -i input.wma -acodec libmp3lame -ab 128k output.mp3`}</code></pre>
          <p className="text-xs text-slate-500 mt-2">
            Para voz/transcrição reduza para <code className="font-mono">-ab 64k -ac 1</code> (mono, 64 kbps) — mesma precisão, arquivo 2–3× menor.
          </p>
        </div>

        <div className="border-t border-slate-100 pt-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-3">MP3 pronto?</h2>
          <p className="mb-4">
            Solte no Mictoo para uma transcrição grátis — funciona com 50+ idiomas, devolve timestamps, legendas SRT e resumo de IA. Sem cadastro.
          </p>
          <a href="/pt" className="inline-flex items-center gap-2 btn-primary text-base px-6 py-3">
            ↑ Transcrever MP3 em texto grátis
          </a>
        </div>

      </div>

      <div className="border-t border-slate-100 mt-12 pt-8">
        <p className="text-sm text-slate-400 mb-4 text-center">Guias relacionados</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="/pt/aac-to-mp3" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">AAC para MP3</a>
          <a href="/pt/m4a-to-mp3" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">M4A para MP3</a>
          <a href="/pt/transcribe-audio-to-text" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">Transcrever áudio</a>
          <a href="/pt/how-to-compress-audio" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">Comprimir áudio</a>
        </div>
      </div>
    </section>
  )
}
