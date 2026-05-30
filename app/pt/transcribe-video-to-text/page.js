import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/transcribe-video-to-text',
  'fr': 'https://mictoo.com/fr/transcribe-video-to-text',
  'de': 'https://mictoo.com/de/transcribe-video-to-text',
  'es': 'https://mictoo.com/es/transcribe-video-to-text',
  'ru': 'https://mictoo.com/ru/transcribe-video-to-text',
  'it': 'https://mictoo.com/it/transcribe-video-to-text',
  'pt': 'https://mictoo.com/pt/transcribe-video-to-text',
  'pl': 'https://mictoo.com/pl/transcribe-video-to-text',
  'ja': 'https://mictoo.com/ja/transcribe-video-to-text',
  'ko': 'https://mictoo.com/ko/transcribe-video-to-text',
  'x-default': 'https://mictoo.com/transcribe-video-to-text',
}

export const metadata = {
  title: 'Vídeo em texto — transcrição online grátis | Mictoo',
  description:
    'Transcrição grátis de vídeo em texto. Envie MP4, MOV, WEBM, AVI e receba uma transcrição IA ou arquivo de legenda SRT. Funciona com screencasts, tutoriais, vlogs.',
  alternates: { canonical: 'https://mictoo.com/pt/transcribe-video-to-text', languages: LANGS },

  openGraph: {
    title: "Vídeo em texto — transcrição online grátis | Mictoo",
    description: "Transcrição grátis de vídeo em texto. Envie MP4, MOV, WEBM, AVI e receba uma transcrição IA ou arquivo de legenda SRT. Funciona com screencasts, tutoriais, vlogs.",
    url: "https://mictoo.com/pt/transcribe-video-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vídeo em texto — transcrição online grátis | Mictoo",
    description: "Transcrição grátis de vídeo em texto. Envie MP4, MOV, WEBM, AVI e receba uma transcrição IA ou arquivo de legenda SRT. Funciona com screencasts, tutoriais, vlogs.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function PtVideoToTextPage() {
  return (
    <LandingLayout
      defaultLanguage="pt"
      badge="MP4 · MOV · WEBM · GRÁTIS"
      h1={<>Vídeo em texto<br /><span className="text-brand-600">Transcrição IA grátis de vídeo</span></>}
      subtitle="Transcrição IA grátis para qualquer arquivo de vídeo. Extraímos o áudio automaticamente. Sem conta, sem cobrança por minuto, sem e-mail."
      howItWorks={[
        { icon: '🎬', title: 'Solte o vídeo', desc: 'MP4, MOV, WEBM, AVI ou qualquer container de vídeo comum. Screencasts, vlogs, exports de webinar, MP4s do Zoom. Arraste ou clique para escolher.' },
        { icon: '⚡', title: 'Extraímos o áudio, a IA transcreve', desc: 'Pegamos a trilha de áudio do vídeo e mandamos só ela para o Whisper large-v3. Não precisa converter para MP3 antes. Um vídeo de 30 minutos costuma ficar pronto em cerca de um minuto.' },
        { icon: '📋', title: 'Copie, baixe ou pegue legendas', desc: 'Baixe como TXT para notas, ou SRT para colocar como legenda num editor de vídeo. Corrija palavras erradas no navegador antes de exportar.' },
      ]}
      whyUse={{ title: 'Por que Mictoo para vídeo', bullets: [
        { title: 'Upload direto, sem desvio pelo YouTube', desc: 'Muitos transcritores grátis pedem para você subir o vídeo como "não listado" no YouTube, esperar as legendas automáticas e copiar o texto. Isso é lento e dá legendas medianas. Pule.' },
        { title: 'Extração de áudio é automática', desc: 'Você solta o MP4. Nós tiramos o áudio internamente e mandamos ao modelo de fala. Você não precisa rodar ffmpeg.' },
        { title: 'A saída funciona em editores de vídeo reais', desc: 'O SRT que geramos funciona no Premiere Pro, DaVinci Resolve, Final Cut, CapCut e YouTube Studio. Os timecodes são frame-accurate.' },
        { title: 'Arquivos de vídeo grandes? Comprima o áudio, não o vídeo', desc: 'Um vídeo de 200 MB costuma ser 195 MB de vídeo e 5 MB de áudio. Você não precisa comprimir tudo, só a trilha de áudio.' },
        { title: 'Nenhum arquivo é guardado', desc: 'O vídeo chega aqui, extraímos o áudio, mandamos ao provedor de transcrição e descartamos os dois. Não guardamos seu vídeo nem seu áudio nos nossos servidores.' },
      ]}}
      useCases={{ title: 'Para que a transcrição de vídeo serve', items: [
        { title: 'Legendas para vídeos de redes sociais', desc: 'TikTok, Instagram Reels, YouTube Shorts todos se beneficiam de legendas queimadas. Gere o SRT aqui, importe no CapCut ou Premiere, estilize as legendas ao gosto e queime no vídeo.' },
        { title: 'Tutoriais e conteúdo de cursos', desc: 'Se você grava tutoriais em screencast, ter uma versão em texto ajuda SEO, acessibilidade e tradução. Cole a transcrição no seu blog ou plataforma de curso ao lado do vídeo.' },
        { title: 'Follow-ups de webinar', desc: 'Você fez um webinar de uma hora. Transcreva a gravação, edite levemente e mande como e-mail de follow-up para os participantes que não conseguiram ficar até o fim.' },
        { title: 'Cortes de entrevista para edição', desc: 'Editando uma entrevista de vídeo longa, dá para fazer um "paper edit" com a transcrição num segundo monitor. Marca as linhas que quer, acha na timeline, muito mais rápido que ficar fazendo scrub.' },
        { title: 'Preparação para tradução e dublagem', desc: 'Transcreva no idioma original, passe o texto pelo DeepL ou ChatGPT para traduzir e use como roteiro para dublagem ou tradução de legendas.' },
      ]}}
      proTips={{ title: 'Dicas para transcrição de vídeo', tips: [
        { title: 'Extraia o áudio antes se o vídeo passa de 60 MB', desc: 'Um vídeo 1080p é principalmente bytes de pixels que jogamos fora de qualquer jeito. Pegue só a trilha de áudio: ffmpeg -i video.mp4 -vn -ac 1 -b:a 64k audio.mp3. Um vídeo de 500 MB encolhe para menos de 30 MB de áudio.' },
        { title: 'Silencie música de fundo no editor antes de exportar', desc: 'Se o vídeo tem música por baixo do diálogo (B-roll, intro, transições), abaixe ou silencie a trilha musical no editor antes de exportar a versão para upload. O Whisper às vezes inventa palavras quando a fala está enterrada sob música.' },
        { title: 'Screencasts sem música são os mais fáceis', desc: 'Gravações de Loom, Zoom, OBS de alguém falando sobre slides geram as transcrições mais limpas. Sem música, uma voz, microfone claro. Você pega precisão quase humana.' },
        { title: 'Em vídeos multi-orador, grave faixas separadas se possível', desc: 'Se você controla a gravação, grave cada orador na faixa dele. Transcreva cada faixa separadamente. Atribuição mais limpa, menos erros em sobreposição.' },
        { title: 'O framerate não importa, só a qualidade do áudio', desc: 'O Whisper não olha para o vídeo, só para o áudio. Um vídeo 4K com áudio ruim transcreve pior que um 480p com microfone lavalier. Coloque o esforço no áudio.' },
        { title: 'Timecodes de SRT precisam de um pequeno offset em alguns editores', desc: 'A maioria dos editores alinha timecodes de SRT perfeitamente. Alguns editores mais velhos esperam que a primeira legenda comece em 00:00:01,000 em vez de 00:00:00,000. Se as legendas estão deslocadas por um segundo, é normalmente isso.' },
      ]}}
      faq={[
        { q: 'Quais formatos de vídeo vocês suportam?', a: 'MP4, MOV, WEBM, AVI, MKV, FLV. Se o vídeo roda no VLC, quase certamente funciona aqui. Extraímos o áudio internamente, então o codec de vídeo quase não importa.' },
        { q: 'Meu arquivo de vídeo é grande demais para upload. E agora?', a: 'Duas opções. Extraia só o áudio primeiro (um comando ffmpeg, veja Dicas acima) e envie isso. Ou use um export menor do seu editor (resolução ou bitrate menor). Para arquivos acima de 60 MB, extrair áudio é mais rápido.' },
        { q: 'Posso pegar legendas SRT, não só texto puro?', a: 'Sim. Depois da transcrição, clique em "Baixar como SRT". O SRT funciona no YouTube Studio, Premiere Pro, DaVinci Resolve, Final Cut, CapCut e qualquer editor de vídeo padrão.' },
        { q: 'Os timings do SRT batem certinho com os frames do meu vídeo?', a: 'Sim. Timecodes de SRT são em milissegundos, mais preciso que qualquer framerate de vídeo. Calzam corretamente em 24, 25, 29.97, 30, 50 e 60 fps.' },
        { q: 'Posso transcrever um vídeo sem som (só texto na tela)?', a: 'Não. Transcrevemos áudio falado. Para reconhecer texto na tela você precisa de OCR, é outra ferramenta.' },
        { q: 'Quão precisa é vídeo em texto?', a: 'Depende do áudio. Voiceover limpo: precisão quase humana (95% ou melhor). Vídeos de conferência com acústica de sala ruim: cerca de 85-90%. Vídeos pesados em música com diálogo baixo: mais abaixo.' },
        { q: 'Meu vídeo é enviado para o YouTube ou serviços de terceiros?', a: 'Não. Seu vídeo é enviado ao nosso provedor de transcrição e descartado. Nada é enviado ao YouTube, Google ou outro lugar. Não estamos no negócio de cloud video storage.' },
        { q: 'Posso editar a transcrição antes do download?', a: 'Sim. Corrija palavras erradas no navegador antes de exportar. Útil para nomes próprios e termos técnicos.' },
        { q: 'Vocês suportam vídeo 360 ou formatos de VR?', a: 'O codec de vídeo não importa para nós. Enquanto o arquivo é um container padrão (MP4, MOV) com uma trilha de áudio, extraímos o áudio e transcrevemos.' },
        { q: 'E se meu vídeo tem várias trilhas de áudio (comentário, original, música)?', a: 'Usamos só a trilha padrão. Se você quer uma específica, reexporte o vídeo com aquela trilha como padrão, ou extraia a trilha desejada e envie como áudio.' },
        { q: 'Tem limite de duração para vídeos?', a: '30 minutos por arquivo grátis, 60 minutos com cadastro. Para vídeos mais longos, divida em pedaços. As transcrições podem ser recombinadas depois.' },
        { q: 'Posso transcrever um stream ao vivo?', a: 'Não. Trabalhamos só com arquivos gravados. Para transcrição ao vivo você precisa de outra categoria de ferramenta.' },
      ]}
      relatedLinks={[
        { href: '/pt/free-srt-generator', label: 'Gerador SRT', desc: 'A mesma ferramenta, focada em workflows de legenda.' },
        { href: '/pt/youtube-to-text', label: 'YouTube em texto', desc: 'Quando o vídeo já está no YouTube.' },
        { href: '/pt/zoom-transcription', label: 'Transcrição Zoom', desc: 'Específica para gravações MP4 do Zoom.' },
        { href: '/pt/how-to-compress-audio', label: 'Comprimir áudio', desc: 'Para vídeos cujo áudio passa do limite de tamanho.' },
      ]}
    />
  )
}
