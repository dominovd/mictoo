import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/business-transcription',
  'fr': 'https://mictoo.com/fr/business-transcription',
  'de': 'https://mictoo.com/de/business-transcription',
  'es': 'https://mictoo.com/es/business-transcription',
  'ru': 'https://mictoo.com/ru/business-transcription',
  'it': 'https://mictoo.com/it/business-transcription',
  'pt': 'https://mictoo.com/pt/business-transcription',
  'pl': 'https://mictoo.com/pl/business-transcription',
  'ja': 'https://mictoo.com/ja/business-transcription',
  'ko': 'https://mictoo.com/ko/business-transcription',
  'x-default': 'https://mictoo.com/business-transcription',
}

export const metadata = {
  title: 'Transcrição business — ferramenta grátis para meetings e calls | Mictoo',
  description:
    'Transcrição business grátis. Calls de vendas, customer interview, focus groups, reuniões de conselho, conferências. Envie e receba uma transcrição IA limpa em segundos. Sem cadastro.',
  alternates: { canonical: 'https://mictoo.com/pt/business-transcription', languages: LANGS },

  openGraph: {
    title: "Transcrição business — ferramenta grátis para meetings e calls | Mictoo",
    description: "Transcrição business grátis. Calls de vendas, customer interview, focus groups, reuniões de conselho, conferências. Envie e receba uma transcrição IA limpa em segundos. Sem cadastro.",
    url: "https://mictoo.com/pt/business-transcription",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Transcrição business — ferramenta grátis para meetings e calls | Mictoo",
    description: "Transcrição business grátis. Calls de vendas, customer interview, focus groups, reuniões de conselho, conferências. Envie e receba uma transcrição IA limpa em segundos. Sem cadastro.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function PtBusinessPage() {
  return (
    <LandingLayout
      defaultLanguage="pt"
      badge="Vendas · Pesquisa · Compliance · Grátis"
      h1={<>Transcrição business<br /><span className="text-brand-600">Áudio business em texto, grátis</span></>}
      subtitle="Transforme qualquer áudio business em texto limpo. Calls de vendas, customer interview, focus groups, conferências, reuniões de conselho. Sem cadastro, sem cobrança por minuto."
      howItWorks={[
        { icon: '🎙️', title: 'Solte o áudio ou vídeo', desc: 'MP3 de um gravador de chamada, M4A de um telefone, MP4 de uma videoconferência, WAV de um gravador de campo. Call de vendas do Gong, gravação Zoom de customer interview, M4A de reunião de conselho. Tudo funciona.' },
        { icon: '⚡', title: 'A IA transcreve', desc: 'O Whisper large-v3 processa o áudio. Uma call de 30 minutos termina em cerca de um minuto. Um meeting de 60 minutos em pouco menos de dois.' },
        { icon: '📋', title: 'Pegue a transcrição', desc: 'Leia, copie ou baixe como TXT ou SRT. Cole no seu CRM, research repository, doc de projeto ou arquivo de compliance.' },
      ]}
      whyUse={{ title: 'Por que Mictoo para áudio business', bullets: [
        { title: 'Mesma precisão das opções caras', desc: 'O Whisper large-v3 é o modelo por trás de muitas ferramentas enterprise pagas de transcrição. Nós rodamos sem o custo de licença por seat.' },
        { title: 'Funciona para uso esporádico', desc: 'Se você transcreve uma call de vendas por semana, é desperdício pagar o seat mensal de uma ferramenta enterprise. Grátis sem contador por minuto se encaixa no padrão de uso esporádico.' },
        { title: 'Mais de 50 idiomas, útil para business internacional', desc: 'Customer interview multilíngues, calls de vendas cross-border, painéis com falantes não-nativos de inglês. Todos cobertos.' },
        { title: 'Nenhum arquivo guardado', desc: 'A gravação vai ao provedor de transcrição e é descartada. Para áudio business que você não quer ver parado num servidor de terceiros, isso conta.' },
        { title: 'Export SRT para editores de vídeo', desc: 'Se o seu áudio business vem de um vídeo (painel de conferência, town hall), o SRT entra direto em Premiere, DaVinci ou YouTube Studio para trabalho de legenda.' },
      ]}}
      useCases={{ title: 'Casos de uso comuns de transcrição business', items: [
        { title: 'Resumos de call de vendas', desc: 'Account Executives colocam gravações de call no CRM ao lado do deal. Handoffs mais rápidos, busca melhor de citação para email de follow-up, coaching mais fácil para sales managers.' },
        { title: 'Customer interview para pesquisa de produto', desc: 'Product managers e UX researchers transcrevem conversas com clientes para codificar padrões, escrever user stories e construir research repositories.' },
        { title: 'Transcrições de focus group', desc: 'Agências de pesquisa de mercado transcrevem sessões de focus group para análise. O que se codifica é a transcrição, não o vídeo.' },
        { title: 'Reuniões de conselho e leadership offsite', desc: 'Transcrições tornam decisões corporativas pesquisáveis e reduzem ambiguidade meses depois. Útil para governance, comunicação com colaboradores e audit trail.' },
        { title: 'Gravações de painel de conferência', desc: 'Times de marketing e PR transcrevem painéis onde seus executivos falaram. Posts de blog, gráficos de citação para social, conteúdo de sales enablement. Tudo começa pela transcrição.' },
      ]}}
      proTips={{ title: 'Dicas para transcrição business', tips: [
        { title: 'Para gravações de call de vendas, use uma ferramenta tipo Gong ou Chorus se puder', desc: 'Essas ferramentas fazem gravação, transcrição e logging no CRM juntos. O Mictoo é a escolha certa para transcrição ocasional, não para uma operação de vendas de alto volume.' },
        { title: 'Em customer interview, obtenha consentimento e explique como o áudio será usado', desc: '"Estou gravando essa conversa para não precisar tomar notas. O áudio é transcrito e fica no nosso research repository." Em muitas jurisdições isso também é exigência legal para qualquer gravação de call.' },
        { title: 'Use um microfone decente, especialmente para o cliente', desc: 'Vozes de clientes capturadas via linha telefônica transcrevem 5-10% menos preciso que calls dial-in com USB headset do lado do cliente. Para interviews de alto valor, mande um headset antes da call.' },
        { title: 'Corte o small talk antes do upload para economizar budget de tamanho de arquivo', desc: 'A maioria das calls business começa com 2-5 minutos de tempo e cordialidades. Corte no Audacity antes do upload se o seu arquivo está perto do limite.' },
        { title: 'Escolha o idioma manualmente para calls internacionais', desc: 'Se uma call de vendas abre em inglês mas passa para o francês, a detecção automática pode confundir. Escolha o idioma dominante manualmente.' },
        { title: 'Para áudio business confidencial, não use transcrição cloud, nem a nossa', desc: 'Conversas de RH, discussões M&A, calls jurídicas, qualquer coisa coberta por privilégio. Use uma instalação local do Whisper. Mesmo modelo, roda offline, sem processamento de terceiros.' },
      ]}}
      faq={[
        { q: 'O Mictoo é adequado para uso business?', a: 'Para transcrição ocasional (calls de vendas, interviews, painéis) sim. Para operações de alto volume (um time de vendas que transcreve 50 calls por dia), uma ferramenta dedicada como Gong ou Chorus se encaixa melhor porque empacota integração CRM, workflows de coaching e analytics de time.' },
        { q: 'Meu áudio business é guardado nos seus servidores?', a: 'Não. O arquivo vai ao nosso provedor de transcrição (Groq, com OpenAI como backup) e é descartado após o processamento. Não guardamos nem o áudio nem a transcrição.' },
        { q: 'É compatível com LGPD?', a: 'Não guardamos áudio ou transcrição depois que você sai da página. Nossos provedores (Groq US, OpenAI US) assinaram DPAs. Para sua situação específica de LGPD (obrigações do controlador, base legal para gravações), veja nossa privacy policy e consulte seu encarregado de proteção de dados.' },
        { q: 'Posso usar para gravar calls com clientes UE ou Califórnia?', a: 'Você pode usar a transcrição. A gravação em si exige consentimento da outra parte em muitas jurisdições (two-party consent na Califórnia e partes da UE). Obtenha o consentimento antes de gravar.' },
        { q: 'Quão precisa é a transcrição para nomes próprios e nomes de empresa?', a: 'Menos precisa que palavras comuns. O Whisper não sabe o nome do seu cliente, o nome do produto ou a terminologia específica da sua empresa. Espere corrigir manualmente. O resto da transcrição vai ser sólido.' },
        { q: 'Vou ter etiquetas de orador (Vendedor vs. Cliente)?', a: 'Não automaticamente. Para calls de 2 oradores, adicione etiquetas manualmente em base à conversa. Para calls multi-party com faixas de áudio separadas por orador, transcreva cada faixa separadamente.' },
        { q: 'Como se compara com Gong, Chorus ou Fireflies?', a: 'Essas são plataformas completas para call de vendas com integração CRM, coaching automático, tagging de deal stage e analytics de chamadas. Nós somos pura transcrição, sem integrações, sem camada de coaching. Mais barato (grátis), bem mais estreito em escopo. Use aquelas se precisa da plataforma completa. Use a gente se só precisa do texto.' },
        { q: 'Posso transcrever uma call business confidencial?', a: 'Para calls business não-sensíveis sim. Para as confidenciais (RH, jurídicas, M&A, qualquer coisa privilegiada), evite qualquer transcrição cloud, inclusive a nossa. Use uma instalação local do Whisper em vez.' },
        { q: 'Quanto demora a transcrição de uma call business?', a: 'Cerca de 1-2% da duração do áudio. Uma call de 30 minutos termina em cerca de 30-60 segundos.' },
        { q: 'Quais formatos de saída tem?', a: 'Texto puro (TXT) e SRT (arquivo de legenda com timecodes). Copiar para a área de transferência também funciona para colar direto num CRM ou documento.' },
        { q: 'Posso enviar várias calls de vendas em lote?', a: 'Ainda não com um clique. Por enquanto você envia um arquivo por vez. Lote está no roadmap para o futuro plano Pro.' },
        { q: 'E se meu áudio business passa de 60 minutos?', a: 'Divida em pedaços abaixo de 60 minutos. As transcrições podem ser recombinadas depois.' },
      ]}
      relatedLinks={[
        { href: '/pt/interview-transcription', label: 'Transcrição de entrevista', desc: 'Para conversas um-a-um e pesquisa qualitativa.' },
        { href: '/pt/meeting-transcription', label: 'Transcrição de reuniões', desc: 'Para qualquer gravação de reunião, qualquer plataforma.' },
        { href: '/pt/zoom-transcription', label: 'Transcrição Zoom', desc: 'Para calls gravadas no Zoom.' },
        { href: '/pt/teams-meeting-transcription', label: 'Transcrição Teams', desc: 'Para calls Microsoft Teams.' },
      ]}
    />
  )
}
