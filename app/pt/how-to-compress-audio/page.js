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
  'ko': 'https://mictoo.com/ko/how-to-compress-audio',
  'x-default': 'https://mictoo.com/how-to-compress-audio',
}

export const metadata = {
  title: 'Como comprimir áudio para transcrição — Métodos grátis | Mictoo',
  description: 'Três formas gratuitas de reduzir um arquivo de áudio ou vídeo para menos de 25 MB para transcrição: extrair áudio, reduzir bitrate ou dividir o arquivo. Sem instalar software.',
  alternates: { canonical: 'https://mictoo.com/pt/how-to-compress-audio', languages: LANGS },

  openGraph: {
    title: "Como comprimir áudio para transcrição — Métodos grátis | Mictoo",
    description: "Três formas gratuitas de reduzir um arquivo de áudio ou vídeo para menos de 25 MB para transcrição: extrair áudio, reduzir bitrate ou dividir o arquivo. Sem instalar software.",
    url: "https://mictoo.com/pt/how-to-compress-audio",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Como comprimir áudio para transcrição — Métodos grátis | Mictoo",
    description: "Três formas gratuitas de reduzir um arquivo de áudio ou vídeo para menos de 25 MB para transcrição: extrair áudio, reduzir bitrate ou dividir o arquivo. Sem instalar software.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function PtHowToCompressAudioPage() {
  return (
    <section className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-slate-900 mb-3">Como comprimir áudio para transcrição</h1>
      <p className="text-slate-500 mb-10 leading-relaxed">
        O Mictoo aceita arquivos de até <strong>25 MB</strong> grátis. Se seu arquivo é maior, aqui estão três
        formas rápidas de reduzi-lo sem perder qualidade de transcrição. Escolha a que se adapta ao seu
        arquivo e habilidades.
      </p>

      <div className="space-y-12 text-slate-600 text-sm leading-relaxed">

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Método 1 — Extrair o áudio de um arquivo de vídeo</h2>
          <p className="mb-4">
            Se você tem um arquivo de vídeo (MP4, WEBM, MOV) que é principalmente fala, a faixa de áudio
            costuma ser 5-10× menor que o vídeo. O Mictoo só precisa do áudio — o vídeo não ajuda na
            transcrição. É a solução mais rápida para a maioria.
          </p>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">Online (sem instalação)</h3>
          <p className="mb-2">Use nosso próprio conversor de navegador — solte o arquivo, receba o MP3 em segundos. Grátis, sem cadastro, sem marca d\'água:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><a href="/mp4-to-mp3" className="text-brand-600 hover:underline">MP4 para MP3</a> — extrai o áudio de qualquer vídeo MP4.</li>
            <li><a href="/webm-to-mp3" className="text-brand-600 hover:underline">WEBM para MP3</a> — para downloads do YouTube e gravações de tela.</li>
            <li><a href="/wav-to-mp3" className="text-brand-600 hover:underline">WAV para MP3</a> — reduz um WAV não comprimido para um MP3 gerenciável.</li>
          </ul>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">Linha de comando (ffmpeg)</h3>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-xs"><code>{`ffmpeg -i input.mp4 -vn -acodec copy output.m4a`}</code></pre>
          <p className="text-xs text-slate-500 mt-2">
            <code className="font-mono">-vn</code> remove o vídeo, <code className="font-mono">-acodec copy</code> mantém a qualidade do áudio intacta. Rápido — sem recodificação.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Método 2 — Reduzir o bitrate de áudio</h2>
          <p className="mb-4">
            A maioria dos podcasts e reuniões é gravada a 128-192 kbps. Para transcrição, 64 kbps mono é
            mais que suficiente — a precisão é a mesma e o arquivo fica 2-3× menor. É o melhor método para
            arquivos de áudio longos.
          </p>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">Linha de comando (ffmpeg)</h3>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-xs"><code>{`ffmpeg -i input.mp3 -ac 1 -b:a 64k output.mp3`}</code></pre>
          <p className="text-xs text-slate-500 mt-2">
            <code className="font-mono">-ac 1</code> converte para mono (fala fica bem em mono),
            <code className="font-mono">-b:a 64k</code> define o bitrate de áudio em 64 kbps.
          </p>
          <p className="mt-3"><strong>Conta rápida:</strong> 64 kbps dá ~28 MB por hora. Uma entrevista de 1 hora cabe em uns 28 MB — perto do limite. Baixe para <code className="font-mono">-b:a 48k</code> para ~21 MB/hora sem perda notável de precisão.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Método 3 — Dividir em partes mais curtas</h2>
          <p className="mb-4">
            Se você precisa manter a qualidade original (jurídico, médico, arquivo), divida o arquivo em
            pedaços de 20-25 minutos e transcreva cada um separadamente. Depois junte as transcrições em
            qualquer editor de texto.
          </p>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">Linha de comando (ffmpeg)</h3>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-xs"><code>{`ffmpeg -i input.mp3 -f segment -segment_time 1200 -c copy part_%03d.mp3`}</code></pre>
          <p className="text-xs text-slate-500 mt-2">
            Divide a entrada em partes de 20 minutos (<code className="font-mono">1200</code> segundos) chamadas <code className="font-mono">part_001.mp3</code>, <code className="font-mono">part_002.mp3</code>, etc. Depois envie cada uma ao Mictoo.
          </p>
        </div>

        <div className="border-t border-slate-100 pt-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Tudo pronto?</h2>
          <p className="mb-4">
            Quando seu arquivo estiver abaixo de 25 MB, volte à página principal e envie-o à ferramenta de transcrição.
          </p>
          <a href="/pt" className="inline-flex items-center gap-2 btn-primary text-base px-6 py-3">
            ↑ Voltar à transcrição
          </a>
        </div>

      </div>

      <div className="border-t border-slate-100 mt-12 pt-8">
        <p className="text-sm text-slate-400 mb-4 text-center">Mais ferramentas de transcrição</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="/pt/transcribe-mp3-to-text" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">MP3 em texto</a>
          <a href="/pt/transcribe-video-to-text" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">Vídeo em texto</a>
          <a href="/pt/m4a-to-text" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">M4A em texto</a>
          <a href="/pt" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">Todos os formatos</a>
        </div>
      </div>
    </section>
  )
}
