import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/podcast-transcription',
  'fr': 'https://mictoo.com/fr/podcast-transcription',
  'de': 'https://mictoo.com/de/podcast-transcription',
  'es': 'https://mictoo.com/es/podcast-transcription',
  'ru': 'https://mictoo.com/ru/podcast-transcription',
  'it': 'https://mictoo.com/it/podcast-transcription',
  'pt': 'https://mictoo.com/pt/podcast-transcription',
  'pl': 'https://mictoo.com/pl/podcast-transcription',
  'ja': 'https://mictoo.com/ja/podcast-transcription',
  'ko': 'https://mictoo.com/ko/podcast-transcription',
  'x-default': 'https://mictoo.com/podcast-transcription',
}

export const metadata = {
  title: 'Transcrição de podcast — gerador IA grátis | Mictoo',
  description:
    'Transcrição de podcast com IA, grátis. Envie seu episódio (MP3, MP4, M4A, WAV) e receba uma transcrição limpa com timecode em segundos. Sem cadastro, sem cobrança por minuto.',
  alternates: { canonical: 'https://mictoo.com/pt/podcast-transcription', languages: LANGS },
}

export default function PtPodcastPage() {
  return (
    <LandingLayout
      defaultLanguage="pt"
      badge="Podcasters · Hosts · Grátis"
      h1={<>Transcrição de podcast<br /><span className="text-brand-600">Gerador grátis de transcrição</span></>}
      subtitle="Transforme qualquer episódio em texto limpo. Envie seu MP3, MP4 ou M4A e receba a transcrição em segundos. Sem conta, sem cobrança por minuto."
      howItWorks={[
        { icon: '📂', title: 'Solte o episódio', desc: 'MP3, MP4, M4A, WAV ou FLAC. Cloud recording do Riverside, exports do Descript, áudio bruto do Zoom, arquivos do Anchor.fm. Tudo funciona.' },
        { icon: '⚡', title: 'A IA faz o trabalho', desc: 'O Whisper large-v3 roda no nosso backend e converte o áudio em texto. A maioria dos episódios de 30 minutos termina em menos de um minuto.' },
        { icon: '📋', title: 'Copie, baixe ou edite', desc: 'Pegue o texto como TXT, como SRT para legendas, ou cole direto no editor de show notes. Corrija palavras erradas no nosso visualizador antes de exportar.' },
      ]}
      whyUse={{ title: 'Por que podcasters usam Mictoo', bullets: [
        { title: 'Episódios longos não são problema', desc: 'Até 60 minutos por arquivo após cadastro grátis. Se dividir em duas partes, mantemos os timecodes relativos, para que você possa juntar os SRTs sem matemática.' },
        { title: 'Sotaques e crosstalk seguram firme', desc: 'O Whisper large-v3 é o modelo aberto mais forte que conhecemos para inglês não-nativo. Se seu co-host vem de Berlim ou São Paulo, a transcrição não vira mingau.' },
        { title: 'Music beds não quebram', desc: 'Nosso pipeline roda Voice Activity Detection antes da transcrição. Intros instrumentais longos são marcados como silêncio, não como palavras inventadas. Sponsor reads com cama musical também passam limpos.' },
        { title: 'Sem assinatura', desc: 'Muitos podcasters transcrevem um ou dois episódios por mês. Pagar 15 dólares por um seat mensal para isso é desperdício. Suba o arquivo conforme a necessidade. Ganhamos com publicidade e um plano Pro planejado para power users.' },
        { title: 'Seu áudio não é guardado', desc: 'Os arquivos são enviados direto ao provedor de fala, transcritos e apagados. Não guardamos seus episódios, e os provedores (Groq, OpenAI) não treinam em dados de API.' },
      ]}}
      useCases={{ title: 'O que podcasters realmente fazem com a transcrição', items: [
        { title: 'Show notes e posts de blog', desc: 'Cole a transcrição no seu CMS, marque capítulos, adicione links, publique o post. Um episódio de 45 minutos costuma render 6000 a 8000 palavras de material-fonte. Três ou quatro posts levemente editados a partir de uma gravação.' },
        { title: 'Citações do episódio para social', desc: 'Escaneie a transcrição pela linha que mandou bem e transforme num gráfico. Muito mais rápido do que catar o timecode no áudio em 1,5x.' },
        { title: 'Arquivo pesquisável do catálogo antigo', desc: 'Passe seus episódios velhos por transcrição em lote, e de repente você tem um Ctrl+F sobre anos de conversa. Útil quando um convidado volta e você quer lembrar do que falaram da última vez.' },
        { title: 'Substituto para as legendas automáticas do YouTube', desc: 'As legendas automáticas do YouTube são medianas para podcasts com duas vozes e música. Suba um SRT do Mictoo no lugar. Pontuação melhor, menos erros, acessibilidade melhor.' },
        { title: 'Link de transcrição para acessibilidade', desc: 'Muitos podcasters põem um link "Ler transcrição" nas show notes do RSS. Ajuda ouvintes surdos e com deficiência auditiva, e ajuda buscadores a encontrar seu conteúdo.' },
      ]}}
      proTips={{ title: 'Dicas para transcrições de podcast mais limpas', tips: [
        { title: 'Tire intro e outro musical antes', desc: 'O Whisper ignora música bem, mas um cold open instrumental de 90 segundos às vezes dispara palavras fantasma. Se sua intro é igual em todo episódio, corte os primeiros 1:30 no Audacity antes do upload. Economiza alguns minutos de cleanup depois.' },
        { title: 'Exporte em mono 64 kbps se o arquivo bruto está enorme', desc: 'Voz não precisa de stereo, e 64 kbps basta para fala. Um episódio de 2 horas a 64 kbps mono fica em torno de 55 MB. Cabe no limite de 60 MB com login, sem dividir. ffmpeg: ffmpeg -i episode.wav -ac 1 -b:a 64k episode.mp3.' },
        { title: 'Para entrevistas com áudio ruim do convidado, transcreva cada faixa separadamente', desc: 'Se você grava no Riverside ou SquadCast e tem faixas de áudio separadas por orador, suba cada uma sozinha. O Whisper lida com uma voz por vez mais fácil. Atribuição mais limpa, menos palavras perdidas em sobreposição.' },
        { title: 'Em episódios curtos, defina o idioma explicitamente', desc: 'A detecção automática amostra o primeiro chunk de áudio. Se você abre com uma única palavra ou uma risada, a detecção pode cair no idioma errado. Para qualquer coisa abaixo de 5 minutos, escolha o idioma manualmente.' },
        { title: 'A pontuação vai ser imperfeita. Corrija as 10 primeiras linhas, deixe o resto', desc: 'O Whisper acerta a maior parte da pontuação, mas às vezes perde ponto-e-vírgula e fala direta. Para show notes, as 10 primeiras linhas é que importam (as pessoas escaneiam). Daí em diante: manda como está.' },
        { title: 'Use export SRT mesmo que você não precise de legenda', desc: 'O SRT te dá timecodes a cada poucos segundos. Mesmo que você cole num post de blog, esses timecodes ajudam a voltar no áudio para verificar uma citação. Temos um gerador SRT grátis aqui mesmo.' },
      ]}}
      faq={[
        { q: 'Posso transcrever um episódio de 2 horas?', a: 'Sim, mas divida antes. Nosso cap de arquivo é 30 minutos grátis, ou 60 minutos após cadastro. Para um episódio de 2 horas, divida em duas ou três partes e transcreva cada. Nosso guia de divisão de áudio explica como em 60 segundos com ffmpeg ou Audacity.' },
        { q: 'Recebo etiquetas de orador (Host vs. Convidado)?', a: 'Por enquanto não automaticamente. O Whisper em si não faz diarização. Se você tem faixas separadas por orador (comum em Riverside, SquadCast, Zencastr), suba cada uma separadamente e etiquete na transcrição final. Estamos olhando diarização, mas só lançamos se acertarmos.' },
        { q: 'Como lida com sotaques e podcasts bilíngues?', a: 'O Whisper large-v3 foi treinado em 680.000 horas de áudio multilíngue. Inglês não-nativo, sotaques regionais e code-switching funcionam melhor do que em modelos menores. Para um podcast que troca entre inglês e espanhol no meio do episódio, escolha "Detecção automática" como idioma, e o Whisper acompanha a troca.' },
        { q: 'Quais formatos de áudio vocês suportam para podcasts?', a: 'MP3, M4A, WAV, FLAC, OGG, WEBM e AAC. Mais arquivos de vídeo como MP4 e MOV (extraímos o áudio). Se seu host de podcast oferece download num desses, está pronto. AIFF e ALAC não são suportados diretamente, converta para WAV antes.' },
        { q: 'Tem limite de palavras por episódio?', a: 'Sem limite de palavras. Só o limite de tamanho de arquivo (25 MB grátis, 60 MB com cadastro) e duração (30 min grátis, 60 min com cadastro). Um episódio típico de 60 minutos produz cerca de 9000 a 11.000 palavras.' },
        { q: 'Quão precisa é a transcrição de podcast comparada a transcritores humanos?', a: 'Para áudio limpo de estúdio, o Whisper large-v3 fica tipicamente em 5 a 10% de taxa de erro por palavra. Transcritores humanos ficam em 3 a 5%. Para a maior parte de show notes e repurposing em blog, a IA basta. Para depoimentos em juízo ou citação acadêmica, contrate um humano.' },
        { q: 'Meu episódio é guardado nos seus servidores?', a: 'Não. Encaminhamos o áudio direto ao provedor de transcrição (Groq, com OpenAI como backup). Eles processam, e descartamos. Nunca gravamos seu arquivo de podcast em banco ou storage nosso.' },
        { q: 'Posso baixar como SRT para legendas?', a: 'Sim. Após a transcrição, clique no botão de download SRT. Use direto no YouTube Studio, Premiere Pro, DaVinci Resolve ou qualquer editor de vídeo.' },
        { q: 'Vocês cobram por minuto?', a: 'Não. Transcrição no Mictoo é grátis. Estamos atualmente financiados por publicidade, com plano Pro pago vindo depois para usuários que precisam de arquivos mais longos ou upload em lote.' },
        { q: 'Meu episódio tem linguagem explícita. Vai ser censurado?', a: 'Sem filtragem. A transcrição reflete exatamente o que foi dito. Se você quer editar palavrões para uma versão limpa, faça depois do download.' },
        { q: 'Posso editar a transcrição antes do download?', a: 'Sim. Tem um editor simples no view de resultado. Corrija palavras erradas, depois baixe a versão editada como TXT ou SRT.' },
        { q: 'A transcrição de podcast no Mictoo é GDPR-compliant?', a: 'Não guardamos áudio nem transcrição nos nossos servidores depois que você sai da página. Estamos na Europa, e nossos provedores (Groq US, OpenAI US) têm DPAs assinados. Para dúvidas específicas de compliance, veja nossa privacy policy ou escreva para info@mictoo.com.' },
      ]}
      relatedLinks={[
        { href: '/pt/free-srt-generator', label: 'Gerador SRT', desc: 'Arquivos de legenda prontos para podcast, não só texto puro.' },
        { href: '/pt/timestamped-transcription', label: 'Transcrição com timecode', desc: 'Para marcadores de capítulo, edits e busca de citações.' },
        { href: '/pt/interview-transcription', label: 'Transcrição de entrevista', desc: 'Mesmo motor, otimizado para o formato um-a-um.' },
        { href: '/pt/youtube-to-text', label: 'YouTube em texto', desc: 'Seu episódio já está no YouTube? Pegue o áudio de lá.' },
      ]}
    />
  )
}
