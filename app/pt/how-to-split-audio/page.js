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
  title: 'Como dividir um áudio longo para transcrição — Métodos gratuitos | Mictoo',
  description: 'Três maneiras gratuitas de dividir uma gravação longa em partes menores para transcrição: ferramentas online, Audacity ou ffmpeg. Funciona com MP3, M4A, WAV, MP4 e mais.',
  alternates: { canonical: 'https://mictoo.com/pt/how-to-split-audio', languages: LANGS },
}

export default function PtHowToSplitAudioPage() {
  return (
    <section className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-slate-900 mb-3">Como dividir um áudio longo para transcrição</h1>
      <p className="text-slate-500 mb-10 leading-relaxed">
        O Mictoo transcreve arquivos de até <strong>30 minutos</strong> para usuários anônimos e
        <strong> 60 minutos</strong> quando você está logado. Se sua gravação for mais longa, a solução
        mais limpa é dividi-la em duas ou três partes menores e transcrever cada uma separadamente.
        Abaixo estão três maneiras gratuitas de fazer isso — escolha a que se encaixa no seu arquivo e nas suas habilidades.
      </p>

      <div className="space-y-12 text-slate-600 text-sm leading-relaxed">

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Método 1 — Ferramentas online (sem instalação)</h2>
          <p className="mb-4">
            A opção mais rápida para uma divisão pontual. Arraste o arquivo, defina início/fim, baixe o trecho.
            Repita para cada segmento.
          </p>


          <p className="mt-3 text-xs text-slate-500">
            Dica: corte em uma pausa natural (entre frases ou troca de falantes) para que a transcrição
            seja lida com fluidez depois de juntar as partes.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Método 2 — Audacity (aplicativo gratuito)</h2>
          <p className="mb-4">
            Melhor escolha para precisão, especialmente se sua gravação tem silêncios ou pausas onde você quer cortar.
            O Audacity é gratuito e open-source para macOS, Windows e Linux.
          </p>

          <ol className="list-decimal pl-5 space-y-1">
            <li>Baixe o <a href="https://www.audacityteam.org/" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">Audacity</a> e abra seu arquivo de áudio.</li>
            <li>Use <strong>Arquivo → Importar → Áudio</strong> se necessário. O Audacity lê MP3, M4A, WAV, FLAC, OGG e mais.</li>
            <li>Clique na forma de onda no ponto de divisão (Ctrl/Cmd+B para colocar um marcador, ou selecione a região para uma parte).</li>
            <li>Escolha <strong>Arquivo → Exportar → Exportar áudio selecionado</strong> e salve a primeira parte como MP3 ou WAV.</li>
            <li>Selecione a próxima região, exporte, repita.</li>
          </ol>

          <p className="mt-3 text-xs text-slate-500">
            Para gravações longas, a ferramenta <strong>Analisar → Sound Finder</strong> do Audacity encontra
            regiões silenciosas automaticamente — útil para dividir podcasts ou entrevistas em pausas naturais.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Método 3 — Linha de comando (ffmpeg)</h2>
          <p className="mb-4">
            Um comando divide o arquivo inteiro em partes de duração igual. Sem recodificação, portanto instantâneo
            mesmo em uma gravação de 2 horas. Ideal se você já tem o ffmpeg instalado.
          </p>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">Dividir em partes de 25 minutos</h3>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-xs"><code>{`ffmpeg -i input.mp3 -f segment -segment_time 1500 -c copy part_%03d.mp3`}</code></pre>
          <p className="text-xs text-slate-500 mt-2">
            <code className="font-mono">1500</code> é a duração do segmento em segundos (25 min).
            Os arquivos de saída serão <code className="font-mono">part_001.mp3</code>,{' '}
            <code className="font-mono">part_002.mp3</code>, etc. A flag{' '}
            <code className="font-mono">-c copy</code> evita recodificação — divisão sem perdas e rápida.
          </p>

          <h3 className="font-semibold text-slate-700 mt-4 mb-2">Extrair um intervalo específico</h3>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-xs"><code>{`ffmpeg -i input.mp4 -ss 00:00:00 -t 00:25:00 -c copy part1.mp4
ffmpeg -i input.mp4 -ss 00:25:00 -t 00:25:00 -c copy part2.mp4`}</code></pre>
          <p className="text-xs text-slate-500 mt-2">
            <code className="font-mono">-ss</code> é o tempo de início, <code className="font-mono">-t</code>{' '}
            é a duração. Funciona também para vídeo — a faixa de áudio é dividida do mesmo jeito.
          </p>

          <p className="mt-3">
            Não tem ffmpeg ainda? Instale em{' '}
            <a href="https://ffmpeg.org/download.html" target="_blank" rel="noopener noreferrer nofollow" className="text-brand-600 hover:underline">ffmpeg.org/download</a>{' '}
            ou com Homebrew no macOS: <code className="font-mono">brew install ffmpeg</code>.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Juntando as transcrições</h2>
          <p className="mb-3">
            Transcreva cada parte no Mictoo, depois cole os resultados em um único documento na ordem certa.
            Algumas dicas para uma transcrição final limpa:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Corte em uma pausa quando possível — palavras não ficam cortadas pela metade.</li>
            <li>Se o corte cair no meio de uma frase, a primeira palavra da próxima parte pode aparecer em maiúscula. Fácil de corrigir em qualquer editor.</li>
            <li>Para legendas SRT/VTT: some a duração total da parte anterior a cada timestamp no próximo arquivo. Um find-and-replace ou um script pequeno resolve em segundos.</li>
            <li>O resumo IA do Mictoo funciona melhor em uma transcrição única — junte primeiro as partes e depois rode o resumo no texto combinado.</li>
          </ul>
        </div>

        <div className="border-t border-slate-100 pt-8">
          <h2 className="text-xl font-semibold text-slate-800 mb-3">Tudo pronto?</h2>
          <p className="mb-4">
            Quando cada parte estiver dentro do limite de duração, volte à página inicial e envie uma por uma.
          </p>
          <a href="/pt" className="inline-flex items-center gap-2 btn-primary text-base px-6 py-3">
            ↑ Voltar para a transcrição
          </a>
        </div>

      </div>

      <div className="border-t border-slate-100 mt-12 pt-8">
        <p className="text-sm text-slate-400 mb-4 text-center">Mais guias de transcrição</p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="/pt/how-to-compress-audio" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">Como comprimir áudio</a>
          <a href="/pt/transcribe-mp3-to-text" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">MP3 para texto</a>
          <a href="/pt/podcast-transcription" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">Transcrição de podcast</a>
          <a href="/pt" className="text-sm px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:border-brand-400 hover:text-brand-600 transition-colors">Todos os formatos</a>
        </div>
      </div>
    </section>
  )
}
