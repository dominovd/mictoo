import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/meeting-transcription',
  'fr': 'https://mictoo.com/fr/meeting-transcription',
  'de': 'https://mictoo.com/de/meeting-transcription',
  'es': 'https://mictoo.com/es/meeting-transcription',
  'ru': 'https://mictoo.com/ru/meeting-transcription',
  'it': 'https://mictoo.com/it/meeting-transcription',
  'pt': 'https://mictoo.com/pt/meeting-transcription',
  'pl': 'https://mictoo.com/pl/meeting-transcription',
  'ja': 'https://mictoo.com/ja/meeting-transcription',
  'ko': 'https://mictoo.com/ko/meeting-transcription',
  'x-default': 'https://mictoo.com/meeting-transcription',
}

export const metadata = {
  title: 'Transcrição de reuniões — transcrição IA grátis para calls e reuniões | Mictoo',
  description:
    'Transcrição IA grátis de reuniões. Envie qualquer gravação de reunião (de qualquer plataforma) e receba texto limpo em segundos. Sem cadastro, sem cobrança por minuto, mais de 50 idiomas.',
  alternates: { canonical: 'https://mictoo.com/pt/meeting-transcription', languages: LANGS },

  openGraph: {
    title: "Transcrição de reuniões — transcrição IA grátis para calls e reuniões | Mictoo",
    description: "Transcrição IA grátis de reuniões. Envie qualquer gravação de reunião (de qualquer plataforma) e receba texto limpo em segundos. Sem cadastro, sem cobrança por minuto, mais de 50 idiomas.",
    url: "https://mictoo.com/pt/meeting-transcription",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Transcrição de reuniões — transcrição IA grátis para calls e reuniões | Mictoo",
    description: "Transcrição IA grátis de reuniões. Envie qualquer gravação de reunião (de qualquer plataforma) e receba texto limpo em segundos. Sem cadastro, sem cobrança por minuto, mais de 50 idiomas.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function PtMeetingPage() {
  return (
    <LandingLayout
      defaultLanguage="pt"
      badge="Qualquer plataforma · Grátis · 50+ idiomas"
      h1={<>Transcrição de reuniões<br /><span className="text-brand-600">Transcrições IA grátis para reuniões</span></>}
      subtitle="Transforme qualquer gravação de reunião em texto limpo. Funciona com Zoom, Meet, Teams, Webex, Discord, Skype, gravadores de voz, qualquer coisa. Sem cadastro, sem cobrança por minuto."
      howItWorks={[
        { icon: '🎙️', title: 'Pegue a gravação da reunião', desc: 'Não importa qual plataforma você usou (Zoom, Meet, Teams, Webex, Discord, GoToMeeting, gravador de voz presencial), exporte a gravação como MP4, MP3, M4A, WAV, FLAC ou OGG.' },
        { icon: '⚡', title: 'Solte o arquivo', desc: 'Extraímos o áudio se necessário e mandamos para o Whisper large-v3. Uma reunião de 30 minutos termina em cerca de um minuto.' },
        { icon: '📋', title: 'Pegue a transcrição', desc: 'Leia, copie ou baixe como TXT ou SRT. Corrija palavras erradas ou termos técnicos inline antes de exportar.' },
      ]}
      whyUse={{ title: 'Por que Mictoo para reuniões', bullets: [
        { title: 'A plataforma de origem não importa', desc: 'Zoom, Meet, Teams, Webex, Discord, GoToMeeting, BlueJeans, gravador presencial. Se você tem o arquivo, transcrevemos.' },
        { title: 'Um modelo para todas as reuniões', desc: 'Mesmo Whisper large-v3 para a call de vendas que você gravou no Zoom e a retro de time que você capturou no Teams. Precisão consistente, formato de saída consistente.' },
        { title: 'Grátis, sem contador por minuto', desc: 'A maioria das transcrições nativas de ferramentas de reunião está embutida num tier de licença que tem seu próprio custo. A nossa é grátis de verdade, sem cap mensal.' },
        { title: 'Mais de 50 idiomas', desc: 'Reuniões cross-border, conversas bilíngues, times internacionais. O Whisper lida com tudo, com detecção automática ou seleção manual de idioma.' },
        { title: 'Nada é guardado', desc: 'O arquivo vai ao provedor de transcrição e é descartado. Não escrevemos o áudio da sua reunião nos nossos servidores.' },
      ]}}
      useCases={{ title: 'Tipos comuns de reunião que as pessoas transcrevem', items: [
        { title: 'Stand-ups e retros de time', desc: 'Times assíncronos transcrevem stand-ups para que pessoas em outros fusos possam acompanhar. Retros se beneficiam de um registro escrito para ações de follow-up.' },
        { title: 'Calls com cliente e customer', desc: 'Calls de vendas, check-ins de account, customer interviews. Salve a transcrição no CRM ao lado do deal ou contato.' },
        { title: 'Sessões internas de treinamento e onboarding', desc: 'Novos contratados leem a transcrição enquanto assistem o vídeo. Retenção melhor, pesquisável depois quando esquecem um passo.' },
        { title: 'Reuniões de conselho, leadership offsites, all-hands', desc: 'Transcrições tornam a comunicação corporativa mais acessível. Útil para colaboradores que não puderam participar e para documentação.' },
        { title: 'Entrevistas e pesquisa qualitativa', desc: 'Seja triagem de candidato, user interview ou jornalismo, a transcrição é o entregável real.' },
      ]}}
      proTips={{ title: 'Dicas para transcrição de reuniões', tips: [
        { title: 'Extraia o áudio quando a origem é vídeo', desc: 'Plataformas de reunião exportam MP4 com áudio e vídeo. Precisamos só do áudio. ffmpeg -i meeting.mp4 -vn -ac 1 -b:a 64k meeting.mp3 transforma um MP4 de 1 GB em 25 MB ou menos. Upload mais rápido, mesma transcrição.' },
        { title: 'Garanta que todo mundo tem um microfone de verdade', desc: 'Microfones embutidos de laptop numa call por wifi produzem áudio ruidoso e com eco. Um USB headset com fio de 100 reais para cada participante se paga em precisão de transcrição.' },
        { title: 'Silencie participantes que não falam', desc: 'Microfones abertos durante uma apresentação capturam digitação, ruído de fundo da sala e conversas paralelas. O Whisper às vezes transcreve isso como palavras sem sentido.' },
        { title: 'Em reuniões com falantes não-nativos de inglês, não divida sem necessidade', desc: 'O Whisper se beneficia de contexto mais longo para frases menos comuns. Um arquivo contínuo de 30 minutos transcreve melhor que três pedaços de 10 minutos, se você tem escolha.' },
        { title: 'Reuniões longas dividem melhor em pausas naturais', desc: 'Se você tem que dividir uma reunião de 90 minutos em pedaços, procure pausas naturais (uma pausa para café, uma transição de agenda) e divida ali. Menos risco de cortar uma frase no meio.' },
        { title: 'Escolha o idioma manualmente em reuniões curtas ou incomuns', desc: 'A detecção automática amostra o primeiro chunk de áudio. Para reuniões que começam com música de espera, uma saudação curta ou silêncio, a seleção manual de idioma é mais confiável.' },
      ]}}
      faq={[
        { q: 'Quais plataformas de reunião vocês suportam?', a: 'Todas. Trabalhamos com o arquivo da gravação, não com a plataforma. Zoom, Microsoft Teams, Google Meet, Webex, Discord, Skype, GoToMeeting, BlueJeans, gravador de voz presencial. Se o arquivo for MP4, MP3, M4A, WAV, FLAC, OGG ou WEBM, transcrevemos.' },
        { q: 'Minha reunião foi no Zoom (ou Meet, ou Teams). Devo usar esta página ou a específica da plataforma?', a: 'Mesmo motor, mesma precisão. As páginas específicas de plataforma te dão dicas mais direcionadas. Use o que for mais fácil.' },
        { q: 'Recebo etiquetas de orador?', a: 'Não automaticamente. O Whisper não faz diarização por padrão. Para uma reunião com vozes distinguíveis, adicione etiquetas manualmente em base à conversa. Para reuniões com faixas de áudio separadas por orador (Riverside, SquadCast, às vezes Zoom), transcreva cada faixa separadamente.' },
        { q: 'Minha gravação de reunião passa de 60 MB. E agora?', a: 'Duas opções. Extrair só o áudio do vídeo (um comando ffmpeg), ou dividir a reunião em pedaços.' },
        { q: 'Quão precisa é a transcrição de reunião?', a: 'Para áudio limpo (bons microfones, sem ruído de fundo): 90-95%. Para microfones de sala de conferência ou speakerphones: 80-90%. Nomes e termos técnicos costumam precisar de cleanup.' },
        { q: 'Minha reunião é guardada nos seus servidores?', a: 'Não. O arquivo vai ao provedor de transcrição e é descartado após o processamento. Não escrevemos nem o áudio da sua reunião nem a transcrição no nosso banco.' },
        { q: 'A transcrição de reunião no Mictoo é GDPR-compliant?', a: 'Não retemos áudio nem transcrição depois que você sai da página. Estamos na Europa, e nossos provedores (Groq US, OpenAI US) têm DPAs. Para dúvidas de compliance específicas, veja nossa privacy policy.' },
        { q: 'Posso ter um resumo da reunião, não só a transcrição?', a: 'Por enquanto entregamos a transcrição completa. Para resumo, cole a transcrição no ChatGPT ou Claude com prompt tipo "Resuma esta transcrição de reunião em decisões-chave e action items".' },
        { q: 'Quais idiomas são suportados?', a: 'Mais de 50, com detecção automática. Para reuniões abaixo de 5 minutos ou arquivos com intros não-falados, escolha o idioma manualmente para resultados mais confiáveis.' },
        { q: 'Posso transcrever uma reunião em tempo real?', a: 'Não. Trabalhamos com arquivos gravados. Para tempo real, use a transcrição ao vivo da própria plataforma ou um meeting assistant dedicado.' },
        { q: 'Como obtenho o SRT alinhado com o vídeo da minha reunião?', a: 'Baixe o SRT após a transcrição. A maioria dos editores de vídeo (Premiere, DaVinci, CapCut, Final Cut) importa SRTs que se alinham automaticamente, desde que o áudio do vídeo bata com o que você transcreveu.' },
        { q: 'Posso transcrever reuniões confidenciais?', a: 'Para reuniões confidenciais (RH, jurídico, M&A, conselho), tome cuidado com qualquer serviço de transcrição em nuvem, inclusive o nosso. Nosso arquivo não é guardado, mas passa por um provedor de fala de terceiros para processamento. Para privacidade máxima, use uma instalação local do Whisper.' },
      ]}
      relatedLinks={[
        { href: '/pt/zoom-transcription', label: 'Transcrição Zoom', desc: 'Dicas específicas de Zoom e fluxo de export.' },
        { href: '/pt/google-meet-transcription', label: 'Transcrição Google Meet', desc: 'Para gravações do Google Meet.' },
        { href: '/pt/teams-meeting-transcription', label: 'Transcrição Teams', desc: 'Para gravações do Microsoft Teams.' },
        { href: '/pt/business-transcription', label: 'Transcrição business', desc: 'Para calls com cliente, conferências e calls de vendas.' },
      ]}
    />
  )
}
