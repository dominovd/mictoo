import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/youtube-to-text',
  'fr': 'https://mictoo.com/fr/youtube-to-text',
  'de': 'https://mictoo.com/de/youtube-to-text',
  'es': 'https://mictoo.com/es/youtube-to-text',
  'ru': 'https://mictoo.com/ru/youtube-to-text',
  'it': 'https://mictoo.com/it/youtube-to-text',
  'pt': 'https://mictoo.com/pt/youtube-to-text',
  'pl': 'https://mictoo.com/pl/youtube-to-text',
  'ja': 'https://mictoo.com/ja/youtube-to-text',
  'ko': 'https://mictoo.com/ko/youtube-to-text',
  'x-default': 'https://mictoo.com/youtube-to-text',
}

export const metadata = {
  title: 'YouTube em texto — transcreva vídeos do YouTube grátis | Mictoo',
  description:
    'Transcrição grátis YouTube em texto. Baixe o vídeo, solte o arquivo, receba uma transcrição IA precisa. Melhor que as legendas automáticas do YouTube, com timecode e export SRT.',
  alternates: { canonical: 'https://mictoo.com/pt/youtube-to-text', languages: LANGS },

  openGraph: {
    title: "YouTube em texto — transcreva vídeos do YouTube grátis | Mictoo",
    description: "Transcrição grátis YouTube em texto. Baixe o vídeo, solte o arquivo, receba uma transcrição IA precisa. Melhor que as legendas automáticas do YouTube, com timecode e export SRT.",
    url: "https://mictoo.com/pt/youtube-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "YouTube em texto — transcreva vídeos do YouTube grátis | Mictoo",
    description: "Transcrição grátis YouTube em texto. Baixe o vídeo, solte o arquivo, receba uma transcrição IA precisa. Melhor que as legendas automáticas do YouTube, com timecode e export SRT.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function PtYouTubeToTextPage() {
  return (
    <LandingLayout
      defaultLanguage="pt"
      enableYouTubeUrl
      badge="YouTube · SRT · GRÁTIS"
      h1={<>YouTube em texto<br /><span className="text-brand-600">Ferramenta grátis de transcrição do YouTube</span></>}
      subtitle="Pegue uma transcrição limpa e precisa de qualquer vídeo do YouTube. Baixe o arquivo, solte aqui, a IA faz o resto. Melhor que as legendas automáticas do YouTube, com pontuação adequada e timecode."
      howItWorks={[
        { icon: '🔗', title: 'Cole um link do YouTube', desc: 'Solte qualquer URL do YouTube no campo acima. Puxamos as legendas existentes em alguns segundos, sem download e sem esperar o Whisper retranscrever. Funciona com a maioria dos vídeos públicos com legendas automáticas ou enviadas pelo criador.' },
        { icon: '📂', title: 'Ou envie um arquivo', desc: 'O vídeo não tem legendas, é um upload privado ou você quer a qualidade do Whisper? Baixe o áudio com um app desktop grátis (veja nosso guia abaixo), solte na mesma página e passamos pelo Whisper large-v3.' },
        { icon: '📋', title: 'Pegue a transcrição', desc: 'Leia no navegador, copie para a área de transferência ou exporte como TXT, SRT, VTT ou DOCX. Traduza para 28 idiomas em um clique. Resumo IA grátis no topo.' },
      ]}
      whyUse={{ title: 'O que você recebe no Mictoo', bullets: [
        { title: 'Sem passo de download', desc: 'Cole uma URL do YouTube e a transcrição volta em segundos. Sem app desktop, sem gerenciar arquivos, sem esperar um vídeo longo subir.' },
        { title: 'Transcrição fresca do Whisper como fallback', desc: 'Se o vídeo não tem legendas, envie o áudio. O Whisper large-v3 lida com sotaques, música e nomes próprios melhor que as legendas automáticas do YouTube, com menos palavras inventadas e pontuação completa.' },
        { title: 'SRT limpo, pronto para edição', desc: 'Formato SRT padrão que importa direto no Premiere, DaVinci Resolve, Final Cut, CapCut. Sem XML, sem timecodes estranhos, sem limpeza manual.' },
        { title: 'Resumo IA grátis em toda transcrição', desc: 'Pontos-chave e itens de ação no topo de cada resultado, sem um clique extra. Os concorrentes geralmente cobram 15–20 US$/mês por isso.' },
        { title: 'Traduza para 28 idiomas', desc: 'Um clique depois da transcrição. Os timecodes originais são preservados, então o SRT traduzido continua sincronizado com o áudio.' },
        { title: 'Sem cadastro, sem marca d\'água, sem limites de tempo', desc: 'Uso anônimo até 25 MB. Cadastre-se grátis para arquivos de 60 MB e histórico privado das suas transcrições.' },
      ]}}
      useCases={{ title: 'Para que as pessoas usam transcrições do YouTube', items: [
        { title: 'Estudar aulas e tutoriais longos', desc: 'Uma aula do MIT de 90 minutos é mais fácil de estudar com a versão em texto. Escaneia a parte que você quer, pula para o timecode no vídeo para a explicação ao vivo.' },
        { title: 'Citações em trabalho acadêmico ou jornalístico', desc: 'Quando você referencia algo que alguém disse num vídeo, a transcrição com timecode deixa citar o momento exato. Muito mais rápido que rever para procurar a citação.' },
        { title: 'Reciclar seu próprio conteúdo do YouTube', desc: 'Transforme um vídeo do YouTube em post de blog, newsletter, thread no X, artigo no LinkedIn. A transcrição é o primeiro rascunho.' },
        { title: 'Traduzir vídeos para uso pessoal', desc: 'Pegue a transcrição no idioma original, jogue no DeepL ou ChatGPT, receba uma tradução. Útil para tutoriais ou entrevistas em outras línguas.' },
        { title: 'Substituir legendas automáticas ruins no próprio canal', desc: 'Gere um SRT limpo aqui, suba no YouTube Studio como faixa oficial. Experiência melhor para o espectador, SEO melhor.' },
      ]}}
      proTips={{ title: 'Dicas para transcrição do YouTube', tips: [
        { title: 'No downloader sempre escolha "Só áudio"', desc: 'Você não precisa do vídeo para a transcrição. Um M4A só de áudio tem um décimo do tamanho e baixa em segundos. Tanto 4K Video Downloader quanto ClipGrab têm a opção "Só áudio" no menu de formato. O M4A normalmente fica abaixo de 25 MB, mesmo em vídeos de 30 minutos.' },
        { title: 'Para vídeos acima de 30 minutos, só-áudio cabe sem dividir na maioria das vezes', desc: 'Só-áudio contorna o limite de tamanho na maioria dos vídeos. Se uma palestra de 90 minutos ainda passa de 60 MB, divida em três pedaços de 30 minutos. Nosso guia de divisão tem o passo a passo no Audacity, sem linha de comando.' },
        { title: 'Pule música de intro e outro', desc: 'Tutoriais do YouTube costumam ter 15 segundos de música tema no começo e no fim. Corte no Audacity antes do upload. O Whisper às vezes inventa palavras em trechos só musicais.' },
        { title: 'Para canais de tutorial com código na tela, você ainda precisa da versão em áudio', desc: 'Reconhecimento de texto na tela é outra categoria (OCR). Se o tutorial depende de mostrar código, você precisa tirar screenshots separados para a parte visual. A transcrição captura tudo que o apresentador fala.' },
        { title: 'Use as legendas ao vivo do YouTube como sanity-check', desc: 'Se o vídeo tem legendas automáticas, você pode comparar com a transcrição do Whisper para achar divergências. Geralmente o Whisper ganha, mas em gírias raras ou nomes próprios o YouTube às vezes pega algo que o Whisper perdeu.' },
        { title: 'Use um downloader que mantém o título do vídeo como nome do arquivo', desc: 'Tanto 4K Video Downloader quanto ClipGrab podem usar o título do YouTube como nome padrão. Isso mantém suas transcrições organizadas em vez de acabar com uma pasta cheia de "video.mp4", "video (1).mp4", "video (2).mp4".' },
      ]}}
      faq={[
        { q: 'Posso colar um link do YouTube direto no Mictoo?', a: 'Por enquanto não. O YouTube bloqueia ativamente servidores de terceiros que buscam vídeos. Você precisa baixar o vídeo ou áudio primeiro (um app desktop grátis como 4K Video Downloader ou ClipGrab faz isso em dois cliques), depois subir o arquivo no Mictoo. Suporte a URL exigiria rodar infraestrutura de download server-side que o YouTube quebra periodicamente.' },
        { q: 'É legal transcrever vídeos do YouTube?', a: 'Para estudo pessoal, pesquisa, jornalismo, acessibilidade e fair use, em geral sim na maioria das jurisdições. Para publicação comercial da transcrição, normalmente precisa da permissão do criador. Os termos do YouTube proíbem download de conteúdo a menos que o YouTube permita explicitamente (botão de download) ou você tenha permissão do criador. Cheque os termos para o seu caso. Isto não é aconselhamento jurídico.' },
        { q: 'Minha transcrição vai bater com as legendas automáticas do YouTube?', a: 'Não, a nossa vai ser melhor. As legendas automáticas não têm pontuação e têm precisão menor. O Whisper large-v3 produz frases completas com pontuação, capitalização e melhor precisão em música, sotaques e nomes próprios.' },
        { q: 'Qual o melhor downloader do YouTube?', a: 'Para a maioria: 4K Video Downloader ou ClipGrab. Os dois são grátis, têm app desktop limpo para Mac, Windows e Linux, e deixam pegar só áudio com um clique. Evite os sites "youtube downloader online" que aparecem no Google, a maioria está enterrada em anúncios de malware e quebra a cada poucos meses. Se você se vira na linha de comando, yt-dlp é a opção mais confiável (é o motor por baixo de muitos apps GUI).' },
        { q: 'Como baixo só o áudio?', a: 'No 4K Video Downloader: cole o link do YouTube, quando abrir a janela de formato, escolha "Extract Audio" e pegue M4A ou MP3. No ClipGrab: cole o link, no menu "Format" escolha MP3 ou "Original audio". Os dois produzem um arquivo de áudio único, pronto para subir aqui.' },
        { q: 'E se meu vídeo do YouTube está num idioma que eu não falo?', a: 'O Whisper detecta o idioma automaticamente e transcreve no idioma original. Depois você pode colar o resultado no DeepL ou ChatGPT para traduzir. Dois passos, mas o resultado costuma ser melhor que as legendas auto-traduzidas do YouTube.' },
        { q: 'Quanto demora para transcrever um vídeo do YouTube?', a: 'Só o passo de transcrição leva cerca de 1-2% da duração do áudio. Uma palestra de 30 minutos fica pronta em cerca de um minuto. O tempo de download depende da sua conexão e da velocidade do yt-dlp.' },
        { q: 'Recebo etiquetas de orador para vídeos do YouTube com vários oradores?', a: 'Não, o Whisper não faz diarização de orador por padrão. Para entrevistas e painéis com vários oradores, você precisa adicionar etiquetas manualmente em base ao fluxo da conversa.' },
        { q: 'Posso gerar legendas prontas para o YouTube?', a: 'Sim. Após a transcrição, baixe como SRT, depois suba o SRT no YouTube Studio em Legendas. Substitui as legendas automáticas por uma versão limpa.' },
        { q: 'O Mictoo guarda o vídeo do YouTube que eu envio?', a: 'Não. O arquivo vai ao nosso provedor de transcrição, é processado e descartado. Não guardamos vídeo nem áudio.' },
        { q: 'Meu vídeo do YouTube tem capítulos. A transcrição reflete isso?', a: 'Não extraímos metadados de capítulo do YouTube. A transcrição vem como um documento contínuo. Se você quer transcrições por capítulo, divida o arquivo de áudio antes do upload nos timecodes dos capítulos.' },
        { q: 'Posso transcrever um livestream do YouTube depois que termina?', a: 'Sim, enquanto o livestream estiver arquivado como vídeo regular. Baixe como qualquer outro (yt-dlp), depois suba. Transcrição ao vivo durante o stream em si não é suportada.' },
      ]}
      relatedLinks={[
        { href: '/pt/transcribe-video-to-text', label: 'Vídeo em texto', desc: 'Para arquivos de vídeo não-YouTube (Zoom, screencasts, vlogs).' },
        { href: '/pt/free-srt-generator', label: 'Gerador SRT', desc: 'Para subir legendas limpas de volta ao YouTube Studio.' },
        { href: '/pt/podcast-transcription', label: 'Transcrição de podcast', desc: 'Para áudio tipo podcast subido no YouTube.' },
        { href: '/pt/how-to-split-audio', label: 'Dividir áudio', desc: 'Para vídeos longos que passam do nosso limite de 60 minutos.' },
      ]}
    />
  )
}
