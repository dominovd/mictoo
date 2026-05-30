import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/teams-meeting-transcription',
  'fr': 'https://mictoo.com/fr/teams-meeting-transcription',
  'de': 'https://mictoo.com/de/teams-meeting-transcription',
  'es': 'https://mictoo.com/es/teams-meeting-transcription',
  'ru': 'https://mictoo.com/ru/teams-meeting-transcription',
  'it': 'https://mictoo.com/it/teams-meeting-transcription',
  'pt': 'https://mictoo.com/pt/teams-meeting-transcription',
  'pl': 'https://mictoo.com/pl/teams-meeting-transcription',
  'ja': 'https://mictoo.com/ja/teams-meeting-transcription',
  'ko': 'https://mictoo.com/ko/teams-meeting-transcription',
  'x-default': 'https://mictoo.com/teams-meeting-transcription',
}

export const metadata = {
  title: 'Transcrição Microsoft Teams — transcreva reuniões | Mictoo',
  description:
    'Transcrição Microsoft Teams grátis. Envie sua gravação (MP4) do OneDrive ou SharePoint e receba uma transcrição IA limpa em segundos. Sem cadastro.',
  alternates: { canonical: 'https://mictoo.com/pt/teams-meeting-transcription', languages: LANGS },

  openGraph: {
    title: "Transcrição Microsoft Teams — transcreva reuniões | Mictoo",
    description: "Transcrição Microsoft Teams grátis. Envie sua gravação (MP4) do OneDrive ou SharePoint e receba uma transcrição IA limpa em segundos. Sem cadastro.",
    url: "https://mictoo.com/pt/teams-meeting-transcription",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Transcrição Microsoft Teams — transcreva reuniões | Mictoo",
    description: "Transcrição Microsoft Teams grátis. Envie sua gravação (MP4) do OneDrive ou SharePoint e receba uma transcrição IA limpa em segundos. Sem cadastro.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function PtTeamsPage() {
  return (
    <LandingLayout
      defaultLanguage="pt"
      badge="TEAMS · ONEDRIVE · GRÁTIS"
      h1={<>Transcrição Microsoft Teams<br /><span className="text-brand-600">Transcrição grátis de reuniões Teams</span></>}
      subtitle="Transforme sua gravação Teams em texto limpo. Solte o MP4 do OneDrive ou SharePoint, em segundos você tem a transcrição. Sem cadastro, sem cobrança por minuto."
      howItWorks={[
        { icon: '☁️', title: 'Baixe do OneDrive ou SharePoint', desc: 'As gravações Teams ficam no OneDrive do organizador (reuniões fora de canal) ou no site SharePoint (reuniões de canal). Baixe como MP4. Para reuniões longas, extraia o áudio antes.' },
        { icon: '⚡', title: 'Solte o arquivo', desc: 'Pegamos o áudio do MP4 e mandamos para o Whisper large-v3. Uma reunião de 30 minutos termina em cerca de um minuto.' },
        { icon: '📋', title: 'Pegue a transcrição', desc: 'Leia no navegador, copie ou baixe como TXT ou SRT. Corrija nomes errados ou termos técnicos inline antes de exportar.' },
      ]}
      whyUse={{ title: 'Por que Mictoo para reuniões Teams', bullets: [
        { title: 'Funciona sem entry específica de licença Microsoft 365 para transcrição', desc: 'Enquanto você tem o arquivo da gravação, pode transcrever aqui. Não precisa de Teams Premium ou planos Office específicos.' },
        { title: 'Cobertura mais forte de não-inglês e sotaques', desc: 'A transcrição do Microsoft Teams funciona bem em inglês e nos grandes idiomas da Europa Ocidental. O Whisper large-v3 cobre mais de 50 idiomas com tratamento mais forte de sotaques e conversas bilíngues.' },
        { title: 'Grátis, sem contador por minuto', desc: 'A transcrição do Teams está embutida na sua licença, mas limitada por feature gates. O Mictoo não tem cap de reunião nem limite mensal de minutos.' },
        { title: 'Export SRT para editores de vídeo', desc: 'A transcrição do Teams vive no app Teams ou baixa como VTT. Nós exportamos os dois, TXT e SRT limpo, drop-in compatível com Premiere, DaVinci, CapCut e YouTube Studio.' },
        { title: 'Privacidade por padrão', desc: 'O arquivo vai ao provedor de transcrição, é processado e descartado. Não guardamos o áudio da sua reunião.' },
      ]}}
      useCases={{ title: 'Para que as pessoas transcrevem reuniões Teams', items: [
        { title: 'Atas de reunião de projeto', desc: 'Cole a transcrição no Confluence, Notion ou numa página SharePoint. Quem perdeu a reunião lê o texto em 5 minutos em vez de assistir 60 minutos de vídeo.' },
        { title: 'Revisão de calls com clientes para times de account', desc: 'Salve a transcrição ao lado do deal no Salesforce, Dynamics ou HubSpot. Buscar citação para email de follow-up leva segundos.' },
        { title: 'Log de decisões transversais', desc: 'Decisões grandes vindas de calls Teams ficam resumidas na transcrição. Útil para governance e audit trail.' },
        { title: 'Calls com fornecedores e prestadores', desc: 'Quando um projeto envolve partes externas, a transcrição é o registro inequívoco do que foi combinado.' },
        { title: 'Compliance e setores regulados', desc: 'Alguns setores exigem registro de certas conversas. Transcrições tornam gravações de áudio pesquisáveis e indexáveis.' },
      ]}}
      proTips={{ title: 'Dicas para transcrição Teams', tips: [
        { title: 'Extraia o áudio do MP4 antes do upload', desc: 'MP4s do Teams são vídeo 720p ou 1080p, irrelevante para transcrição. Pegue só o áudio: ffmpeg -i teams.mp4 -vn -ac 1 -b:a 64k teams.mp3. Um MP4 de 1,5 GB cai para 30 MB ou menos.' },
        { title: 'Baixe do OneDrive ou SharePoint, não faça stream', desc: 'O OneDrive às vezes toca MP4s no navegador. Garanta que você realmente baixou o arquivo antes de tentar enviar aqui. Links de compartilhamento SharePoint não são iguais ao arquivo em si.' },
        { title: 'Para reuniões acima de 60 minutos, divida antes do upload', desc: 'Corte em pedaços de 30 ou 45 minutos. As transcrições podem ser ricombinadas. Calls Teams longas são comuns e vale a pena tratar com cuidado.' },
        { title: 'Silencie notificações de fundo durante a reunião se possível', desc: 'Notificações desktop do Outlook e sons de chat do Teams durante a call entram no áudio e às vezes na transcrição. Use Focus Assist no Windows ou "Não perturbe" no Mac.' },
        { title: 'Microfones de sala de conferência precisam de cleanup', desc: 'Teams Rooms com microfones de teto têm qualidade de áudio variável. Eco e captura em campo distante prejudicam a precisão. Adobe Podcast Enhance (web grátis) pode ajudar nessas gravações antes do upload.' },
        { title: 'Para reuniões confidenciais, não suba para fora', desc: 'Nem mesmo para nós. Para conversas de RH, jurídicas ou de conselho, prefira transcrição on-premise. Nosso serviço é para reuniões não-confidenciais onde processamento IA em nuvem é aceitável.' },
      ]}}
      faq={[
        { q: 'O Mictoo funciona com gravações Microsoft Teams?', a: 'Sim. Baixe o MP4 do OneDrive (o OneDrive do seu organizador para reuniões fora de canal) ou do site SharePoint do canal. Envie aqui. Extrair o áudio antes acelera para reuniões longas.' },
        { q: 'Preciso de Teams Premium ou um plano Microsoft 365 específico?', a: 'Você precisa de um plano que deixe gravar reuniões. Uma vez que a gravação está no OneDrive ou SharePoint, a transcrição aqui é grátis independente da sua licença.' },
        { q: 'Minha gravação volta para a Microsoft?', a: 'Não. O arquivo vai para nosso provedor de transcrição (Groq, com OpenAI como backup) e é descartado após o processamento. Nada vai para Microsoft, Outlook ou qualquer serviço Microsoft.' },
        { q: 'Como se compara com a transcrição nativa do Teams?', a: 'A transcrição Teams é ok para reuniões em inglês se sua licença inclui. A nossa é grátis, funciona em mais idiomas e sotaques e exporta SRT limpo para editores de vídeo. Use o que se encaixa na reunião.' },
        { q: 'Minha gravação Teams passa de 60 MB. E agora?', a: 'Extraia só o áudio com ffmpeg ou uma ferramenta de áudio. Um Teams MP4 de 1,5 GB cai para menos de 30 MB como áudio. Se o áudio ainda passar de 60 MB, divida em pedaços.' },
        { q: 'Recebo etiquetas de orador?', a: 'Não automaticamente. Para uma reunião com vozes distinguíveis, você pode adicionar etiquetas manualmente em base à conversa. Se sua reunião foi gravada com faixas de áudio separadas por orador (raro no Teams), suba cada faixa separadamente para atribuição limpa.' },
        { q: 'Funciona com mensagens de chat do Teams?', a: 'Não. Mensagens de chat ficam no Teams. Só transcrevemos o áudio. Combine os dois você mesmo se precisa dos dois.' },
        { q: 'Quão precisa é a transcrição Teams?', a: 'Para reuniões com bons microfones (laptop com USB headset): 90-95%. Para reuniões em salas de conferência com microfones de teto: 80-90%. Nomes, termos técnicos e acrônimos costumam precisar de cleanup.' },
        { q: 'Posso transcrever uma reunião Teams em tempo real?', a: 'Não. Trabalhamos com arquivos gravados. Para tempo real durante a reunião, use as legendas ao vivo do próprio Teams ou a função Transcript.' },
        { q: 'Quais idiomas vocês suportam?', a: 'Mais de 50 idiomas com detecção automática. Para reuniões abaixo de 5 minutos ou arquivos com intros não-falados (música de sala de espera, hold tones), escolha o idioma manualmente.' },
        { q: 'Posso exportar a transcrição para um documento Word ou OneDrive?', a: 'Exportamos texto puro (TXT) e SRT. Copie e cole no Word, ou suba o TXT você mesmo para o OneDrive. Integração Microsoft 365 ainda não temos.' },
        { q: 'É GDPR-compliant para reuniões Teams na Europa?', a: 'Não guardamos áudio nem transcrição nos nossos servidores depois que você sai da página. Estamos na Europa, e nossos provedores (Groq US, OpenAI US) assinaram DPAs. Para dúvidas de compliance específicas, veja nossa privacy policy ou escreva para info@mictoo.com.' },
      ]}
      relatedLinks={[
        { href: '/pt/zoom-transcription', label: 'Transcrição Zoom', desc: 'Para gravações Zoom Cloud ou locais.' },
        { href: '/pt/google-meet-transcription', label: 'Transcrição Google Meet', desc: 'Para gravações do Google Meet.' },
        { href: '/pt/meeting-transcription', label: 'Transcrição de reuniões', desc: 'Para gravações de outras plataformas.' },
        { href: '/pt/business-transcription', label: 'Transcrição business', desc: 'Para calls vendas, entrevistas e outro áudio business.' },
      ]}
    />
  )
}
