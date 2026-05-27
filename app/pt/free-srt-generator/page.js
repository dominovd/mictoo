import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/free-srt-generator',
  'fr': 'https://mictoo.com/fr/free-srt-generator',
  'de': 'https://mictoo.com/de/free-srt-generator',
  'es': 'https://mictoo.com/es/free-srt-generator',
  'ru': 'https://mictoo.com/ru/free-srt-generator',
  'it': 'https://mictoo.com/it/free-srt-generator',
  'pt': 'https://mictoo.com/pt/free-srt-generator',
  'pl': 'https://mictoo.com/pl/free-srt-generator',
  'ja': 'https://mictoo.com/ja/free-srt-generator',
  'ko': 'https://mictoo.com/ko/free-srt-generator',
  'x-default': 'https://mictoo.com/free-srt-generator',
}

export const metadata = {
  title: 'Gerador SRT — crie arquivos SRT de legenda online | Mictoo',
  description:
    'Gerador grátis de legendas SRT. Envie seu arquivo de áudio ou vídeo e receba um .srt limpo com timecode em segundos. Funciona com YouTube, Premiere, DaVinci, CapCut.',
  alternates: { canonical: 'https://mictoo.com/pt/free-srt-generator', languages: LANGS },
}

export default function PtSrtPage() {
  return (
    <LandingLayout
      defaultLanguage="pt"
      badge="SRT · Legendas · Grátis"
      h1={<>Gerador SRT<br /><span className="text-brand-600">Legendas IA de qualquer áudio ou vídeo</span></>}
      subtitle="Gere arquivos de legenda de qualquer áudio ou vídeo. Receba um .srt limpo com timecode preciso em segundos. Drop-in para YouTube, Premiere, DaVinci Resolve, CapCut, Final Cut."
      howItWorks={[
        { icon: '📂', title: 'Solte o áudio ou vídeo', desc: 'MP3, M4A, MP4, MOV, WAV, FLAC, OGG, WEBM, AAC. Extraímos o áudio do vídeo automaticamente.' },
        { icon: '⚡', title: 'A IA transcreve e alinha', desc: 'O Whisper large-v3 transcreve o áudio e gera timecodes para cada linha. Um vídeo de 10 minutos normalmente leva 15 segundos. Um de 30 minutos, cerca de um minuto.' },
        { icon: '💾', title: 'Baixe o .srt', desc: 'Clique "Baixar como SRT". O arquivo é formato padrão, drop-in compatível com todo editor de vídeo importante e YouTube Studio.' },
      ]}
      whyUse={{ title: 'Por que esse gerador SRT', bullets: [
        { title: 'Os timecodes Whisper large-v3 são frame-accurate', desc: 'Os timecodes são ao milissegundo, mais preciso que qualquer framerate comum de vídeo. Encaixam corretamente em 24, 25, 29.97, 30, 50 e 60 fps sem ajuste de offset.' },
        { title: 'Grátis, sem contador por minuto', desc: 'Transcreva 10 minutos ou 60. Mesmo preço (grátis). Sem gate "passe para Pro" depois do primeiro arquivo.' },
        { title: 'Mais de 50 idiomas', desc: 'Gere legendas para conteúdo em qualquer idioma importante. Útil para canais YouTube internacionais e faixas de legenda traduzidas.' },
        { title: 'Formato .srt padrão', desc: 'Sem extensões proprietárias, sem codificação estranha. Funciona em Premiere Pro, DaVinci Resolve, Final Cut, CapCut, Kapwing, Descript, YouTube Studio, VLC, MPV.' },
        { title: 'Nenhum arquivo guardado', desc: 'O áudio vai ao provedor de transcrição e é descartado após o processamento. Não guardamos seu vídeo.' },
      ]}}
      useCases={{ title: 'Para que as pessoas geram arquivos SRT', items: [
        { title: 'Uploads YouTube', desc: 'Substitua as legendas automáticas do YouTube por um .srt limpo. Pontuação melhor, menos erros, acessibilidade melhor para espectadores com deficiência auditiva. Bônus: a busca do YouTube indexa legendas enviadas de forma mais confiável que as auto-geradas.' },
        { title: 'Legendas para vídeos de redes sociais (TikTok, Reels, Shorts)', desc: 'Gere o .srt aqui, importe no CapCut ou Premiere, estilize as legendas a gosto, queime no vídeo. A maioria dos espectadores assiste sem som, então legendas não são mais opcionais.' },
        { title: 'Legendas para acessibilidade', desc: 'Gravações de talk de conferência, vídeos de treinamento interno, cursos online. Legendas os tornam usáveis para espectadores surdos e com deficiência auditiva, e para qualquer um em ambientes ruidosos.' },
        { title: 'Pipeline de tradução', desc: 'Gere o .srt no idioma de origem, cole no DeepL ou ChatGPT para traduzir, salve como .srt no idioma de destino. Resultado: legendas de qualidade dublagem em outro idioma sem pagar tradutor humano.' },
        { title: 'Edição de vídeo sob deadline', desc: 'Quando você precisa de legendas para ontem e não pode esperar um transcritor humano, legendas IA estão boas para o primeiro cut. Refine depois.' },
      ]}}
      proTips={{ title: 'Dicas para geração SRT', tips: [
        { title: 'Para vídeos longos, gere o .srt em pedaços de 10 minutos e junte', desc: 'Mais fácil corrigir timecodes errados no meio se aparecer drift. A maior parte dos editores deixa importar vários .srt e juntar.' },
        { title: 'Upload só-áudio é mais rápido que upload de vídeo para o mesmo conteúdo', desc: 'Extraia o áudio antes: ffmpeg -i video.mp4 -vn -ac 1 -b:a 64k audio.mp3. O .srt que você recebe funciona contra o vídeo original, porque timecode é timecode.' },
        { title: 'Queime as legendas só depois de terminar a edição', desc: 'Se você queima legendas no vídeo antes de fazer cortes, precisa refazer as legendas quando corta. Queime no fim, quando o vídeo está locked.' },
        { title: 'Mantenha o tamanho de linha do .srt gerenciável', desc: 'O Whisper às vezes produz legendas de linha única longas para frases longas. A maioria dos editores deixa quebrar linhas longas automaticamente, ou você pode quebrar manualmente para melhor legibilidade.' },
        { title: 'Em vídeos multilíngues, gere o .srt um idioma por vez', desc: 'Se o seu vídeo tem seções em inglês e espanhol, gere o .srt para cada seção separadamente (defina o idioma manualmente cada vez), depois junte em um .srt.' },
        { title: 'Edite o .srt num editor de texto, não num editor de vídeo', desc: 'Um .srt é só texto com timecode. Abra no VS Code, Notepad++ ou BBEdit para consertar typos rápido. Reimporte no editor de vídeo quando estiver pronto.' },
        { title: 'Para TikTok e Reels, encurte manualmente as legendas para uma linha curta por legenda', desc: 'As frases naturais do Whisper são mais longas que o estilo de legenda punchy do TikTok. Edite o .srt para combinar com o estilo da plataforma.' },
      ]}}
      faq={[
        { q: 'O que é um arquivo SRT?', a: 'SRT (SubRip Subtitle) é o formato de legenda mais comum. Texto puro com timecodes e o texto da legenda. Todo player e editor de vídeo importante lê arquivos .srt.' },
        { q: 'Como gero um arquivo SRT a partir de um vídeo?', a: 'Envie o vídeo aqui. Extraímos o áudio, transcrevemos e geramos o .srt. Clique "Baixar como SRT" quando estiver pronto.' },
        { q: 'Como adiciono legendas SRT a um vídeo YouTube?', a: 'No YouTube Studio abra seu vídeo, vá em Legendas, clique em Adicionar idioma, faça upload do arquivo .srt. O YouTube vai usar como legendas oficiais para esse idioma.' },
        { q: 'O arquivo SRT funciona no Premiere Pro e DaVinci Resolve?', a: 'Sim. No Premiere: Arquivo, Importar, selecione o .srt. No DaVinci: arraste o .srt para o project bin. Os dois tratam como faixa de legenda que você pode editar depois na timeline.' },
        { q: 'Funciona no CapCut e Final Cut?', a: 'Sim. CapCut: toque em Captions, Import SRT. Final Cut: Arquivo, Importar, Captions, escolha o .srt. Os dois posicionam as legendas nos tempos certos na timeline.' },
        { q: 'O gerador SRT é realmente grátis?', a: 'Sim. Sem cobrança por arquivo, sem contador por minuto, sem email exigido para arquivos abaixo de 25 MB. Arquivos entre 25 MB e 60 MB precisam de uma conta grátis.' },
        { q: 'Qual o tamanho máximo de arquivo?', a: '25 MB sem conta, 60 MB com conta grátis.' },
        { q: 'Posso gerar SRT a partir de arquivos de áudio (MP3, WAV)?', a: 'Sim. Solte o arquivo de áudio direto. Geramos o .srt com timecode como se fosse áudio de vídeo. Útil para adicionar legendas quando você vai sincronizar o áudio com imagens ou slides depois.' },
        { q: 'Os timecodes vão dar drift num vídeo longo?', a: 'Os timecodes do Whisper são alinhados ao áudio real, então drift é raro. Para arquivos muito longos (60 minutos) pode aparecer drift sub-segundo nas últimas legendas. Se você nota, corrija manualmente as legendas afetadas.' },
        { q: 'Posso editar as legendas antes de baixar?', a: 'Sim. Após a transcrição, corrija palavras erradas na view de resultado, depois baixe o .srt com suas alterações.' },
        { q: 'Quais idiomas o gerador SRT suporta?', a: 'Mais de 50 idiomas com detecção automática. Para vídeos mais curtos ou conteúdo não-inglês, escolha o idioma manualmente para resultados mais confiáveis.' },
        { q: 'O áudio é guardado?', a: 'Não. O arquivo vai ao nosso provedor de transcrição, é processado e descartado. Não guardamos nem o áudio nem o .srt gerado.' },
        { q: 'Posso gerar o SRT num idioma diferente do idioma do áudio?', a: 'Não diretamente. Gere o SRT no idioma de origem, depois traduza o texto do .srt com DeepL ou ChatGPT. Os timecodes permanecem iguais, só o texto muda.' },
      ]}
      relatedLinks={[
        { href: '/pt/transcribe-video-to-text', label: 'Vídeo em texto', desc: 'Mesmo motor, focado em output só texto.' },
        { href: '/pt/timestamped-transcription', label: 'Transcrição com timecode', desc: 'Para timecode por frase ou palavra em outros formatos.' },
        { href: '/pt/youtube-to-text', label: 'YouTube em texto', desc: 'Para substituir as legendas automáticas do YouTube.' },
        { href: '/pt/transcribe-audio-to-text', label: 'Áudio em texto', desc: 'Para pura transcrição de áudio.' },
      ]}
    />
  )
}
