import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/transcribe-mp3-to-text',
  'fr': 'https://mictoo.com/fr/transcribe-mp3-to-text',
  'de': 'https://mictoo.com/de/transcribe-mp3-to-text',
  'es': 'https://mictoo.com/es/transcribe-mp3-to-text',
  'ru': 'https://mictoo.com/ru/transcribe-mp3-to-text',
  'it': 'https://mictoo.com/it/transcribe-mp3-to-text',
  'pt': 'https://mictoo.com/pt/transcribe-mp3-to-text',
  'pl': 'https://mictoo.com/pl/transcribe-mp3-to-text',
  'ja': 'https://mictoo.com/ja/transcribe-mp3-to-text',
  'ko': 'https://mictoo.com/ko/transcribe-mp3-to-text',
  'x-default': 'https://mictoo.com/transcribe-mp3-to-text',
}

export const metadata = {
  title: 'MP3 em texto — transcrição grátis de MP3 com IA | Mictoo',
  description:
    'Conversor grátis MP3 em texto. Envie qualquer MP3 e receba transcrição IA em segundos. Funciona com podcasts, entrevistas, aulas. Mais de 50 idiomas, sem cadastro.',
  alternates: { canonical: 'https://mictoo.com/pt/transcribe-mp3-to-text', languages: LANGS },
}

export default function PtMp3ToTextPage() {
  return (
    <LandingLayout
      defaultLanguage="pt"
      badge="MP3 · GRÁTIS · SEM CADASTRO"
      h1={<>MP3 em texto<br /><span className="text-brand-600">Transcrição grátis de MP3</span></>}
      subtitle="Transcrição IA grátis para qualquer MP3. Solte o arquivo, receba o texto em segundos. Sem conta, sem cobrança por minuto, sem e-mail."
      howItWorks={[
        { icon: '📂', title: 'Solte o MP3', desc: 'Qualquer MP3 funciona. Download de podcast, export de memo de voz, rip de áudio, arquivos de voz gerada por IA. Arraste ou clique para escolher.' },
        { icon: '⚡', title: 'A IA transcreve', desc: 'O Whisper large-v3 lê o MP3 e converte a fala em texto. Um podcast típico de 30 minutos termina em cerca de um minuto. Um memo de voz de 5 minutos em cerca de 15 segundos.' },
        { icon: '📋', title: 'Copie, baixe ou edite', desc: 'Leia no navegador, copie para a área de transferência ou baixe como TXT ou SRT. Corrija palavras erradas inline antes de exportar.' },
      ]}
      whyUse={{ title: 'Por que Mictoo para MP3', bullets: [
        { title: 'Whisper large-v3, não um modelo encolhido para o tier grátis', desc: 'Não rodamos um modelo menor "para usuários free" e um maior para pagantes. Mesmo modelo, mesma precisão, todo arquivo.' },
        { title: 'Particularidades de MP3 bem tratadas', desc: 'MP3 é com perdas, e algumas ferramentas engasgam em arquivos muito comprimidos (32 kbps, mono, sample rate baixo). O Whisper lida sem reclamar. Já vimos transcrições legíveis de MP3 de chamadas a 24 kbps.' },
        { title: 'Sem conversão de arquivo necessária', desc: 'Algumas ferramentas "MP3 em texto" querem WAV por baixo e reencodam seu MP3 antes. Nós mandamos o MP3 direto ao modelo. Mais rápido, sem a perda de uma segunda encodagem.' },
        { title: 'Sem contador por minuto', desc: 'Alguns concorrentes te dão 60 minutos grátis por mês e depois cobram 25 centavos por minuto. Nós somos financiados por publicidade, sem limite de minutos. Transcreva um arquivo ou cem.' },
        { title: 'Privacidade por padrão', desc: 'O MP3 vai ao provedor de voz, é transcrito e descartado. Nunca gravamos seu áudio em disco do nosso lado.' },
      ]}}
      useCases={{ title: 'Para que as pessoas usam "MP3 em texto"', items: [
        { title: 'Episódios de podcast', desc: 'Arraste o MP3 do seu host de podcast (Anchor, Buzzsprout, Transistor) e ganhe o texto para show notes, reuso em blog ou acessibilidade.' },
        { title: 'Gravações de chamadas', desc: 'MP3 é o export padrão da maioria dos apps de gravação de chamada. Transcreva para escanear rápido uma call longa e achar a parte que importa.' },
        { title: 'Memos de voz exportados do celular', desc: 'Memos de Voz do iPhone são M4A por padrão, mas se você enviou um por AirDrop como MP3 ou usou um app Android que salva em MP3, esta é a ferramenta.' },
        { title: 'Trechos de audiobook ou rips de aula', desc: 'Para estudo, ter o texto ao lado do áudio dobra a retenção. Só fique do lado certo do copyright.' },
        { title: 'Vozes IA e saídas TTS', desc: 'Se você gerou voz com ElevenLabs, OpenAI TTS, Murf ou qualquer outra ferramenta de síntese, talvez queira a transcrição limpa de volta para trabalho de legenda ou alinhamento.' },
      ]}}
      proTips={{ title: 'Dicas para transcrição de MP3', tips: [
        { title: 'Bitrate constante melhor que variável para o Whisper', desc: 'MP3 VBR (variable bitrate) pode confundir alguns decoders de áudio em casos extremos. Se você controla o export, escolha CBR a 64 ou 96 kbps mono. Menos trabalho para o modelo.' },
        { title: '64 kbps mono é o ponto doce para voz em MP3', desc: 'Maior que isso é desperdício para fala. Um episódio de 60 minutos a 64 kbps mono tem cerca de 28 MB. Cabe no tier grátis de 25 MB, ou confortavelmente no tier de 60 MB com login.' },
        { title: 'Se o MP3 está enorme (acima de 60 MB), reencode antes de dividir', desc: 'Dividir e depois transcrever dois arquivos dá mais trabalho que reencodar uma vez a bitrate menor. ffmpeg: ffmpeg -i big.mp3 -ac 1 -b:a 64k small.mp3. Um original de 200 MB cai para 25-40 MB.' },
        { title: 'Remova metadados ID3 se o arquivo está no limite', desc: 'Tags ID3 (capa, letras, etc.) podem somar vários MB num MP3. Se você está 1-2 MB acima do limite, remover tags com ffmpeg -i in.mp3 -map_metadata -1 -c:a copy out.mp3 pode bastar.' },
        { title: 'Encodagem MP3 ruim de conversores velhos causa gaps de silêncio', desc: 'Se a transcrição pula trechos, o MP3 pode ter gaps reais de silêncio de um encoder bugado. Reencode da fonte se tiver, ou use o Find Silence do Audacity para confirmar.' },
        { title: 'Para MP3 de chamadas telefônicas (8 kHz mono), espere precisão um pouco menor', desc: 'Áudio de telefone perde as frequências altas, o que custa alguns pontos de precisão. Continua legível, só planeje mais limpeza em nomes e números.' },
      ]}}
      faq={[
        { q: 'MP3 é o melhor formato para transcrição?', a: 'Para a maioria dos usuários, sim. MP3 é pequeno, suportado em toda parte, e a precisão com o Whisper é praticamente idêntica a WAV ou FLAC. Use lossless (WAV, FLAC) só se você também precisa do áudio para edição depois.' },
        { q: 'Quais bitrates de MP3 funcionam melhor?', a: 'Qualquer um de 32 kbps mono a 320 kbps stereo. Para voz, 64-96 kbps mono é o ponto doce prático. Maior não melhora a transcrição, menor começa a perder inteligibilidade para o modelo.' },
        { q: 'Meu MP3 passa de 60 MB. E agora?', a: 'Duas opções. Reencodar a bitrate menor (64 kbps mono divide a maioria dos MP3 por 4 ou mais), ou dividir o arquivo em pedaços abaixo de 60 MB. Temos guias para os dois.' },
        { q: 'Quanto demora para transcrever um MP3?', a: 'Cerca de 1-2% da duração do áudio. Um MP3 de 60 minutos fica pronto em cerca de 60 segundos. Um de 10 minutos em 10-20 segundos. O upload pela rede costuma ser a espera mais longa.' },
        { q: 'Meu MP3 vai ser salvo ou compartilhado?', a: 'Não. O arquivo vai ao nosso provedor de voz (Groq, com OpenAI como backup), é transcrito e descartado. Não gravamos nos nossos servidores, e os provedores que usamos não treinam em dados de API.' },
        { q: 'Posso enviar vários MP3 em lote?', a: 'Ainda não num clique. Por enquanto você transcreve um arquivo por vez. Upload em lote está no roadmap para o plano Pro pago.' },
        { q: 'Quais idiomas vocês suportam?', a: 'Mais de 50 idiomas. Detecção automática lida com a maioria dos casos. Para arquivos abaixo de 5 minutos ou arquivos que começam com música ou silêncio, escolha o idioma manualmente.' },
        { q: 'Consigo timecode a partir de um MP3?', a: 'Sim. Baixe como SRT (arquivo de legenda) e receba timecode a cada poucos segundos. Ou use nossa página de Transcrição com timecode para granularidade por palavra.' },
        { q: 'O Mictoo funciona com MP3 de podcast com marcadores de capítulo?', a: 'Extraímos o áudio e ignoramos metadados de capítulo. Você recebe a transcrição completa como um documento. Se quiser transcrições alinhadas aos capítulos, divida o MP3 nos limites dos capítulos antes.' },
        { q: 'A transcrição do meu MP3 vai ter etiquetas de oradores?', a: 'Não automaticamente. O Whisper não faz diarização por padrão. Se precisar de etiquetas, envie a faixa de cada orador separadamente (se você as tem) e etiquete você mesmo.' },
        { q: 'Posso transcrever um MP3 de voz gerada por IA?', a: 'Sim. Áudio TTS (ElevenLabs, OpenAI, Murf, etc.) costuma transcrever mais limpo que voz humana, porque não tem ruído de fundo nem hesitação.' },
        { q: 'Meu MP3 está num idioma raro. Vai funcionar?', a: 'Se o Whisper suporta o idioma, sim. O modelo cobre mais de 50 idiomas com boa precisão e suporte básico para muitos outros. Teste. Se o resultado for inutilizável, o idioma provavelmente está fora dos dados de treino.' },
      ]}
      relatedLinks={[
        { href: '/pt/transcribe-audio-to-text', label: 'Áudio em texto', desc: 'Para formatos não-MP3 (WAV, M4A, FLAC, OGG).' },
        { href: '/pt/podcast-transcription', label: 'Transcrição de podcast', desc: 'Mesmo motor, dicas específicas para podcast.' },
        { href: '/pt/free-srt-generator', label: 'Gerador SRT', desc: 'Quando você precisa de legendas para vídeo, não só texto.' },
        { href: '/pt/how-to-compress-audio', label: 'Como comprimir áudio', desc: 'Quando o MP3 é grande demais.' },
      ]}
    />
  )
}
