import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'Transcrição IA de Áudio e Vídeo em Texto, Grátis — Mictoo',
  description: "Transcreva arquivos de áudio e vídeo em texto grátis. Sem cadastro. Com OpenAI Whisper. MP3, MP4, WAV e mais de 50 idiomas.",
  alternates: {
    canonical: 'https://mictoo.com/pt',
    languages: {
      'en': 'https://mictoo.com',
      'fr': 'https://mictoo.com/fr',
      'de': 'https://mictoo.com/de',
      'es': 'https://mictoo.com/es',
      'ru': 'https://mictoo.com/ru',
      'it': 'https://mictoo.com/it',
      'pt': 'https://mictoo.com/pt',
      'pl': 'https://mictoo.com/pl',
      'ja': 'https://mictoo.com/ja',
      'ko': 'https://mictoo.com/ko',
      'x-default': 'https://mictoo.com',
    },
  },
  openGraph: {
    title: 'Mictoo — Transcrição IA de Áudio & Vídeo Grátis',
    description: "Envie um arquivo de áudio ou vídeo e receba a transcrição em segundos.",
    url: 'https://mictoo.com/pt',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630, alt: 'Mictoo — Transcrição de Áudio & Vídeo Grátis' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mictoo — Transcrição IA Grátis',
    description: "Envie um arquivo de áudio ou vídeo e receba a transcrição em segundos.",
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function PortuguesePage() {
  return (
    <LandingLayout
      defaultLanguage="pt"
      badge="IA · Grátis · Sem cadastro · 50+ idiomas"
      h1={<>Transcrever Áudio e Vídeo em Texto<br /><span className="text-brand-600">com IA, Grátis Online</span></>}
      subtitle="Envie qualquer arquivo de áudio ou vídeo e receba uma transcrição IA precisa em segundos. Nenhuma conta necessária."
      howItWorks={[
        { icon: '📂', title: 'Envie o arquivo', desc: "Arraste e solte ou clique para enviar. MP3, MP4, WAV, M4A, OGG, WEBM, FLAC. Até 25 MB sem cadastro, 60 MB após cadastro." },
        { icon: '⚡', title: 'A IA transcreve', desc: "O Whisper da OpenAI converte o áudio em texto com alta precisão em mais de 50 idiomas. Um arquivo de 10 minutos costuma terminar em menos de 30 segundos." },
        { icon: '📋', title: 'Copie ou baixe', desc: "Edite a transcrição direto no navegador. Copie para a área de transferência ou exporte em .txt, .srt, .pdf, .docx." },
      ]}
      whyUse={{ title: 'Por que o Mictoo', bullets: [
        { title: '100% grátis', desc: "Sem assinatura, sem trial limitado. O Mictoo é gratuito, sem teto mensal nem contador de minutos." },
        { title: 'Privacidade por padrão', desc: "Seus arquivos são enviados direto para a API do Whisper (Groq como principal, OpenAI como backup), processados e apagados em segundos. Não guardamos nada e não treinamos nenhum modelo com seus dados." },
        { title: 'Mais de 50 idiomas', desc: "Detecção automática de idioma. Funciona com português, inglês, espanhol, francês, alemão, russo, japonês e muitos outros." },
        { title: 'Alta precisão', desc: "Movido pelo Whisper da OpenAI, o mesmo modelo de reconhecimento de fala usado no ChatGPT e pelos principais serviços de transcrição." },
        { title: 'Resultados rápidos', desc: "Um arquivo de 10 minutos é transcrito em menos de 30 segundos. Sem fila de espera, sem pop-up de 'aguarde 30 segundos'." },
        { title: 'Saída editável', desc: "Releia e corrija a transcrição no navegador, depois copie para a área de transferência ou baixe em .txt, .srt ou .pdf." },
        { title: "Resumo com IA incluso", desc: "Após cada transcrição, geramos um resumo grátis com os pontos-chave e as ações a tomar. Os concorrentes geralmente cobram US$15–20/mês por esta função. Sem clique extra, sem convite para upgrade." },
        { title: "Tradução para 28 idiomas", desc: "Um clique traduz a transcrição completa para espanhol, francês, alemão, japonês e mais 24. Os timestamps originais ficam preservados, então o SRT traduzido continua sincronizado com o áudio." },
      ]}}
      useCases={{ title: 'Quem usa o Mictoo', items: [
        { title: 'Estudantes', desc: "Transcreva aulas, entrevistas e gravações de pesquisa. Texto pesquisável, mais fácil de revisar do que ficar varrendo o áudio." },
        { title: 'Podcasters', desc: "Transforme episódios em artigos de blog, show notes ou legendas. Bônus de SEO e acessibilidade imediata." },
        { title: 'Jornalistas', desc: "Converta entrevistas gravadas em texto em segundos. Citações precisas com timestamps para checagem." },
        { title: 'Equipes corporativas', desc: "Transcreva reuniões, calls com clientes e apresentações. Depois você busca por palavra-chave em vez de reescutar tudo." },
        { title: 'Criadores de conteúdo', desc: "Gere legendas para YouTube, TikTok ou Instagram Reels. Export em SRT pronto para subir no YouTube Studio." },
        { title: 'Áreas jurídica e médica', desc: "Rascunhos rápidos de transcrições para anotações e documentação. Mantenha o arquivo original para a versão final." },
      ]}}
      proTips={{ title: 'Dicas para uma transcrição melhor', tips: [
        { title: 'Áudio mono a 64 kbps já basta para fala', desc: "O Mictoo aceita até 25 MB. Para voz, mono a 64 kbps dá cerca de 28 MB por hora sem perda perceptível de precisão. Veja nosso guia para comprimir áudio." },
        { title: 'Se o arquivo passar de 30 minutos, faça cadastro', desc: "Anônimo: máximo 30 minutos. Cadastro grátis: 60 minutos. Acima disso: divida o arquivo em partes e depois junte as transcrições." },
        { title: 'Especifique o idioma se a detecção automática errar', desc: "O Whisper acerta em 99% dos casos. Em arquivos muito curtos (menos de 10 segundos) ou bem multilíngues, o seletor manual de idioma garante o resultado." },
        { title: 'Para transcrever um vídeo, o áudio é suficiente', desc: "O Mictoo aceita MP4 direto, mas você também pode extrair o áudio (com nosso conversor MP4 para MP3) e enviar um arquivo 10 vezes menor." },
        { title: 'Resumo IA incluso no resultado', desc: "Depois da transcrição, o Mictoo gera automaticamente um resumo do conteúdo, os pontos-chave e as ações. Útil para reuniões longas e podcasts." },
        { title: 'Traduza a transcrição em 28 idiomas', desc: "Quando a transcrição estiver pronta, clique em Traduzir na visualização Leitor. O Whisper transcreve o idioma de origem, depois o GPT-4o-mini traduz para o idioma alvo." },
      ]}}
      faq={[
        {
          q: 'Como transcrever um arquivo de áudio em texto grátis?',
          a: "Envie seu arquivo de áudio acima. O Mictoo transcreve automaticamente com o Whisper da OpenAI e mostra o texto em segundos. Sem cadastro para arquivos de até 25 MB.",
        },
        {
          q: 'O Mictoo funciona bem para português brasileiro?',
          a: "Sim. O Whisper, modelo da OpenAI no qual o Mictoo se baseia, foi treinado em muitas horas de áudio em português e oferece ótima precisão, incluindo sotaques regionais e vocabulário técnico.",
        },
        {
          q: 'Meus arquivos ficam armazenados?',
          a: "Não. Seus arquivos vão direto para a API de transcrição, são processados e apagados em segundos. Não guardamos nada em nossos servidores e não usamos seus dados para treinar modelos.",
        },
        {
          q: 'Qual é o tamanho máximo de arquivo?',
          a: "25 MB para usuários anônimos, 60 MB após um cadastro grátis. Um MP3 mono a 64 kbps equivale a cerca de uma hora de áudio em 25 MB.",
        },
        {
          q: 'Quanto tempo leva a transcrição?',
          a: "Um arquivo de 10 minutos costuma ser transcrito em menos de 30 segundos. Arquivos mais longos demoram proporcionalmente mais, mas continuam muito mais rápidos que o tempo real.",
        },
        {
          q: 'Quais formatos de áudio e vídeo são aceitos?',
          a: "MP3, MP4, WAV, M4A, OGG, WEBM, FLAC, MPEG. Para arquivos de vídeo, o Mictoo extrai a faixa de áudio automaticamente. Se o seu formato não estiver na lista, converta primeiro para MP3 ou WAV com nossos conversores integrados.",
        },
        {
          q: 'Posso baixar as legendas em SRT?',
          a: "Sim. Depois da transcrição, clique no botão .srt para baixar um arquivo de legendas com timestamps, pronto para subir no YouTube Studio, Premiere ou Final Cut.",
        },
        {
          q: 'O Mictoo gera resumo do conteúdo?',
          a: "Sim. Depois de cada transcrição, o Mictoo cria automaticamente um resumo IA com os pontos-chave e ações. Bem útil para podcasts longos, reuniões e aulas.",
        },
        {
          q: 'Posso transcrever um vídeo do YouTube?',
          a: "Direto pela URL, não. O YouTube bloqueia servidores de terceiros. Baixe o vídeo localmente primeiro com uma ferramenta como 4K Video Downloader, depois envie o arquivo MP4 aqui. Nosso guia de download do YouTube explica o passo a passo.",
        },
        {
          q: 'O Mictoo tem app para celular?',
          a: "Ainda não tem app nativo, mas o site funciona perfeitamente no iOS Safari e no Android Chrome. Envie da sua galeria ou de um gravador de voz direto pelo celular.",
        },
      ]}
      relatedLinks={[
        { href: '/pt/transcribe-mp3-to-text', label: 'MP3 em texto', desc: 'Transcreva especificamente arquivos MP3, podcasts, gravações de voz, chamadas.' },
        { href: '/pt/transcribe-video-to-text', label: 'Vídeo em texto', desc: "Transcreva MP4, MOV, WEBM, para gravações do Zoom, vídeos do YouTube, screencasts." },
        { href: '/pt/podcast-transcription', label: 'Transcrição de podcast', desc: 'Mesmo motor com dicas específicas para podcasts longos e edição.' },
        { href: '/pt/free-srt-generator', label: 'Gerador SRT grátis', desc: 'Legendas com timestamps prontas para YouTube Studio, Premiere, DaVinci Resolve.' },
      ]}
    />
  )
}
