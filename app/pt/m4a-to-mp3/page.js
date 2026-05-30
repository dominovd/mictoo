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
  title: 'Como converter M4A para MP3 — métodos grátis (ou pular) | Mictoo',
  description: "Converta M4A para MP3 em segundos com ferramentas online grátis, QuickTime, VLC ou ffmpeg. Aviso: a maioria dos apps (incluindo Mictoo) aceita M4A diretamente — pode ser que você não precise converter.",
  alternates: { canonical: 'https://mictoo.com/pt/m4a-to-mp3', languages: LANGS },

  openGraph: {
    title: "Como converter M4A para MP3 — métodos grátis (ou pular) | Mictoo",
    description: "Converta M4A para MP3 em segundos com ferramentas online grátis, QuickTime, VLC ou ffmpeg. Aviso: a maioria dos apps (incluindo Mictoo) aceita M4A diretamente — pode ser que você não precise converter.",
    url: "https://mictoo.com/pt/m4a-to-mp3",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Como converter M4A para MP3 — métodos grátis (ou pular) | Mictoo",
    description: "Converta M4A para MP3 em segundos com ferramentas online grátis, QuickTime, VLC ou ffmpeg. Aviso: a maioria dos apps (incluindo Mictoo) aceita M4A diretamente — pode ser que você não precise converter.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function PtM4aToMp3Page() {
  return (
    <section className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-slate-900 mb-3">Como converter M4A para MP3</h1>
      <p className="text-slate-500 mb-10 leading-relaxed">
        M4A é o formato de áudio padrão para memos de voz iPhone, downloads do Apple Podcasts e a maioria dos apps de gravação no macOS. MP3 é mais universal, mas em 2026 um número surpreendente de ferramentas aceita M4A diretamente — quase todos os navegadores, editores de áudio, apps de podcast e serviços de transcrição. Aqui está quando você realmente precisa converter, e os jeitos grátis mais rápidos de fazer.
      </p>

      <div className="bg-brand-50 border border-brand-100 rounded-2xl p-5 mb-10">
        <p className="text-sm text-slate-700 mb-2">
          <strong>Provavelmente você não precisa converter.</strong> M4A e MP3 têm qualidade de áudio muito similar. Apps modernos que leem MP3 quase sempre leem M4A também. Especificamente:
        </p>
        <ul className="text-sm text-slate-700 list-disc pl-5 mt-2 space-y-1">
          <li><strong>Transcrição:</strong> Mictoo aceita <code className="font-mono text-xs bg-white px-1.5 py-0.5 rounded border border-slate-200">.m4a</code> diretamente — solte o arquivo e obtenha o texto. Sem conversão.</li>
          <li><strong>Edição de áudio:</strong> Audacity, GarageBand, Logic, Premiere, DaVinci Resolve leem M4A.</li>
          <li><strong>Streaming/reprodução:</strong> Spotify, Apple Music, YouTube Music, qualquer navegador e SO moderno toca M4A.</li>
        </ul>
        <p className="text-sm text-slate-700 mt-3">
          Você só precisa de MP3 quando o app destino diz explicitamente «apenas MP3» — alguns autorrádios antigos, equipamentos de fitness, gravadores básicos ou software legado.
        </p>
        <a href="/pt" className="inline-flex items-center gap-2 text-sm text-brand-600 hover:underline mt-3">
          ↑ Tente transcrever o .m4a diretamente com o Mictoo
        </a>
      </div>

      <div className="space-y-12 text-slate-600 text-sm leading-relaxed">

        <p className="-mb-6 text-slate-700">
          <strong>Ainda precisa de MP3?</strong> Escolha o método abaixo que se encaixa no seu setup. Todos grátis.
        </p>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Método 1 — Conversor online</h2>
          <p className="mb-4">
            Arrasta, solta, baixa — geralmente abaixo de 10 segundos para um memo de voz típico:
          </p>
          <p className="text-xs text-slate-500 mt-3">
            Privacidade: ferramentas online enviam seu arquivo. Pule-as para gravações confidenciais — use um método desktop.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Método 2 — macOS (sem instalação)</h2>

          <img
            src="/svg/macos-music-convert.svg"
            alt="App Música no macOS: clique em Arquivo na barra de menu, passe sobre Converter, então escolha Criar versão MP3."
            className="w-full rounded-2xl border border-slate-100 mb-5"
            width={640}
            height={280}
          />

          <p className="mb-3">
            <strong>App Música:</strong> Arraste o <code className="font-mono">.m4a</code> para Música, selecione, depois <strong>Arquivo → Converter → Criar versão MP3</strong>. O MP3 aparece ao lado do original.
          </p>
          <p className="mb-3">
            <strong>QuickTime Player:</strong> Abra o arquivo → <strong>Arquivo → Exportar como → Apenas áudio</strong>. O QuickTime exporta como M4A por padrão; combine com VLC ou Audacity abaixo se você precisa de MP3.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Método 3 — VLC (multiplataforma)</h2>
          <p className="mb-3">
            <a href="https://www.videolan.org/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">VLC</a> no Windows/macOS/Linux:
          </p>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Abra o VLC → <strong>Mídia → Converter / Salvar</strong>.</li>
            <li>Adicione o arquivo <code className="font-mono">.m4a</code>, clique em <strong>Converter / Salvar</strong>.</li>
            <li>Escolha o perfil <code className="font-mono">Audio - MP3</code>.</li>
            <li>Escolha destino com <code className="font-mono">.mp3</code>, clique em <strong>Iniciar</strong>.</li>
          </ol>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Método 4 — Linha de comando (ffmpeg)</h2>
          <p className="mb-4">
            Uma linha com <a href="https://ffmpeg.org/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">ffmpeg</a>:
          </p>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-xs"><code>{`ffmpeg -i input.m4a -acodec libmp3lame -ab 128k output.mp3`}</code></pre>
          <p className="text-xs text-slate-500 mt-2">
            Para voz/transcrição use <code className="font-mono">-ab 64k -ac 1</code> — arquivo 2–3× menor sem perda de qualidade na fala.
          </p>
        </div>

        <div className="border-t border-slate-100 pt-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Precisa de transcrição?</h2>
          <p className="mb-4">
            Tanto M4A quanto MP3 funcionam direto no Mictoo. Solte o arquivo, obtenha texto com timestamps, legendas SRT e resumo de IA — grátis, sem cadastro.
          </p>
          <a href="/pt" className="inline-flex items-center gap-2 btn-primary text-base px-6 py-3">
            ↑ Transcrever áudio em texto grátis
          </a>
        </div>

      </div>

      <div className="border-t border-slate-100 mt-12 pt-8">
        <p className="text-sm text-slate-400 mb-4 text-center">Guias relacionados</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="/pt/aac-to-mp3" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">AAC para MP3</a>
          <a href="/pt/wma-to-mp3" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">WMA para MP3</a>
          <a href="/pt/m4a-to-text" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">M4A para texto</a>
          <a href="/pt/how-to-compress-audio" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">Comprimir áudio</a>
        </div>
      </div>
    </section>
  )
}
