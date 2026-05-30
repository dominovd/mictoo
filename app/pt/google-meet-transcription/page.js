import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/google-meet-transcription',
  'fr': 'https://mictoo.com/fr/google-meet-transcription',
  'de': 'https://mictoo.com/de/google-meet-transcription',
  'es': 'https://mictoo.com/es/google-meet-transcription',
  'ru': 'https://mictoo.com/ru/google-meet-transcription',
  'it': 'https://mictoo.com/it/google-meet-transcription',
  'pt': 'https://mictoo.com/pt/google-meet-transcription',
  'pl': 'https://mictoo.com/pl/google-meet-transcription',
  'ja': 'https://mictoo.com/ja/google-meet-transcription',
  'ko': 'https://mictoo.com/ko/google-meet-transcription',
  'x-default': 'https://mictoo.com/google-meet-transcription',
}

export const metadata = {
  title: 'Transcrição do Google Meet — transcreva gravações Meet grátis | Mictoo',
  description:
    'Transcrição Google Meet grátis. Envie sua gravação do Drive (MP4 ou M4A) e receba uma transcrição IA limpa em segundos. Funciona com Google Workspace grátis.',
  alternates: { canonical: 'https://mictoo.com/pt/google-meet-transcription', languages: LANGS },

  openGraph: {
    title: "Transcrição do Google Meet — transcreva gravações Meet grátis | Mictoo",
    description: "Transcrição Google Meet grátis. Envie sua gravação do Drive (MP4 ou M4A) e receba uma transcrição IA limpa em segundos. Funciona com Google Workspace grátis.",
    url: "https://mictoo.com/pt/google-meet-transcription",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Transcrição do Google Meet — transcreva gravações Meet grátis | Mictoo",
    description: "Transcrição Google Meet grátis. Envie sua gravação do Drive (MP4 ou M4A) e receba uma transcrição IA limpa em segundos. Funciona com Google Workspace grátis.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function PtGoogleMeetPage() {
  return (
    <LandingLayout
      defaultLanguage="pt"
      badge="GOOGLE MEET · MP4 · GRÁTIS"
      h1={<>Transcrição do Google Meet<br /><span className="text-brand-600">Transcrever gravações Meet</span></>}
      subtitle="Transforme sua gravação Google Meet em texto limpo. Solte o MP4 do seu Drive, em segundos você tem a transcrição. Sem cadastro, sem cobrança por minuto."
      howItWorks={[
        { icon: '☁️', title: 'Baixe do Google Drive', desc: 'As gravações do Google Meet são salvas no seu Drive na pasta "Meet Recordings". Baixe como MP4 (clique direito, Baixar). Para reuniões longas, extraia o áudio antes para economizar tempo de upload.' },
        { icon: '⚡', title: 'Solte o arquivo', desc: 'Pegamos o áudio do MP4 e mandamos para o Whisper large-v3. Uma reunião de 30 minutos termina em cerca de um minuto.' },
        { icon: '📋', title: 'Pegue a transcrição', desc: 'Leia no navegador, copie ou baixe como TXT ou SRT. Corrija palavras erradas inline antes de exportar.' },
      ]}
      whyUse={{ title: 'Por que Mictoo para Google Meet', bullets: [
        { title: 'Funciona em qualquer tier Workspace, inclusive o grátis', desc: 'Gravar um Meet em si exige um tier pago, mas uma vez que você tem o arquivo, nossa transcrição é grátis independente do seu tier Workspace.' },
        { title: 'Melhor suporte a idiomas não-ingleses', desc: 'A transcrição do Google é historicamente mais forte em inglês. O Whisper large-v3 cobre mais de 50 idiomas com detecção automática e é notavelmente melhor em sotaques, conversas bilíngues e code-switching.' },
        { title: 'Nenhum dado volta para o Google', desc: 'Se você está conscientemente evitando lock-in no ecossistema Google para reuniões sensíveis, transcrever aqui mantém o texto fora do Google Workspace.' },
        { title: 'Export SRT funciona em qualquer editor de vídeo', desc: 'A transcrição do Google entrega o texto em Docs. A nossa exporta SRT limpo, pronto para Premiere, DaVinci ou YouTube Studio.' },
        { title: 'Privacidade', desc: 'O arquivo é enviado ao provedor de transcrição e descartado após o processamento. Nada é gravado em nossos servidores.' },
      ]}}
      useCases={{ title: 'Para que as pessoas transcrevem gravações Google Meet', items: [
        { title: 'Notas de reunião que todo mundo pode pesquisar', desc: 'Cole a transcrição em Google Docs ou Notion. O você do futuro não vai lembrar o que foi decidido na semana 14 do projeto. Texto pesquisável ajuda.' },
        { title: 'Catch-up assíncrono para times distribuídos', desc: 'Pessoas em outros fusos que perderam a reunião ao vivo leem a transcrição em minutos em vez de assistir uma gravação de 60 minutos em 1,5x.' },
        { title: 'Revisão de calls com clientes', desc: 'Account managers transcrevem calls importantes com clientes e salvam o texto no CRM. Lembrança mais rápida, handoffs melhores.' },
        { title: 'Transcrições de webinar e town hall', desc: 'Para eventos maiores gravados no Meet, a transcrição é o que você publica (junto com a gravação) para acessibilidade e descoberta.' },
        { title: 'Conversas 1:1 e de performance (para o gestor)', desc: 'Alguns managers transcrevem seus 1:1s para ter notas para follow-up. Útil, mas seja transparente com o colaborador sobre por quê.' },
      ]}}
      proTips={{ title: 'Dicas para transcrição Google Meet', tips: [
        { title: 'Extraia o áudio do MP4 antes do upload', desc: 'Gravações Meet são vídeo 720p, que é byte desperdiçado para transcrição. Pegue só o áudio: ffmpeg -i meet.mp4 -vn -ac 1 -b:a 64k meet.mp3. Um MP4 de 1 GB encolhe para 25 MB ou menos.' },
        { title: 'Baixe o MP4, não faça stream', desc: 'O Drive às vezes abre MP4s no visualizador do navegador. Garanta que você realmente baixou o arquivo antes de tentar enviar aqui. Links de compartilhamento do Drive não são upload de arquivo.' },
        { title: 'Para reuniões acima de 60 minutos, divida antes do upload', desc: 'Nosso cap é 60 minutos por arquivo com cadastro. Corte o áudio em pedaços antes. As transcrições podem ser recombinadas depois.' },
        { title: 'Silencie tabs e apps de fundo durante a reunião se possível', desc: 'Uma música do Spotify rodando sob a sua voz na reunião acaba na transcrição como palavras aleatórias. Mesma coisa com sons de notificação. Nem sempre dá para consertar depois da gravação.' },
        { title: 'Use um microfone de verdade, mesmo um headset barato', desc: 'Microfones embutidos de laptop pegam digitação, ruído de fan e eco de sala. Um USB headset com fio de 100 reais transcreve notavelmente mais limpo.' },
        { title: 'Em gravações compartilhadas, cheque as configurações de compartilhamento do Drive antes de subir em outro lugar', desc: 'Se alguém te compartilhou uma gravação Meet, confirme o que você pode fazer com ela antes de transcrever para uso externo.' },
      ]}}
      faq={[
        { q: 'O Mictoo funciona com gravações Google Meet?', a: 'Sim. Baixe o MP4 da sua pasta Meet Recordings no Drive, depois envie aqui. Extrair o áudio (com ffmpeg ou qualquer ferramenta de áudio) acelera isso para reuniões longas.' },
        { q: 'Preciso de um plano Google Workspace pago?', a: 'Você precisa de um plano Workspace pago para gravar um Meet, ponto. Uma vez que a gravação está no Drive, transcrever aqui é grátis independente do seu tier.' },
        { q: 'Minha gravação volta para o Google?', a: 'Não. O arquivo vai para nosso provedor de transcrição (Groq, com OpenAI como backup) e é descartado após o processamento. Nada volta para o Google ou qualquer serviço Google.' },
        { q: 'Como se compara com a transcrição nativa do Google?', a: 'A nossa é grátis e funciona em qualquer tier Workspace. A do Google é mais conveniente se seu plano inclui e suas reuniões são em inglês. Para não-inglês, sotaques ou reuniões bilíngues, a nossa é mais precisa.' },
        { q: 'Minha gravação Meet passa de 60 MB. E agora?', a: 'Extraia só o áudio com ffmpeg ou uma ferramenta de áudio. Um vídeo de 1 GB normalmente cai para menos de 30 MB como áudio. Se o próprio áudio passa de 60 MB, divida em pedaços.' },
        { q: 'Recebo etiquetas de orador?', a: 'Não automaticamente. O Whisper não faz diarização por padrão. Você precisa adicionar etiquetas manualmente. Para uma reunião de 4 pessoas com vozes distinguíveis, isso costuma levar 5 minutos.' },
        { q: 'Funciona com mensagens de chat do Meet?', a: 'Não. Mensagens de chat são salvas separadamente pelo Google na pasta Meet Recordings. Só transcrevemos o áudio. Combine os dois você mesmo se precisa dos dois.' },
        { q: 'Quão precisa é a transcrição Google Meet?', a: 'Para áudio limpo (bons microfones, sem ruído de fundo): 90-95%. Gravações de sala de conferência com múltiplos microfones ou speakerphones caem para 80-90%. Nomes e termos técnicos costumam precisar de cleanup.' },
        { q: 'Posso transcrever um livestream Google Meet?', a: 'Não. Trabalhamos só com arquivos gravados, não com streams ao vivo. Quando o stream termina e a gravação fica salva no Drive, dá para baixar e transcrever.' },
        { q: 'Quais idiomas vocês suportam?', a: 'Mais de 50 idiomas com detecção automática. Para reuniões abaixo de 5 minutos ou arquivos com intros não-falados, escolha o idioma manualmente para um resultado melhor.' },
        { q: 'Posso exportar para um Google Doc?', a: 'Exportamos texto puro (TXT) e SRT. Copie e cole no Google Docs. Integração direta com Drive ainda não temos.' },
        { q: 'Funciona com gravações Meet de outras orgs Workspace?', a: 'Se você tem acesso para baixar o arquivo do seu Drive, sim. Tratamos o arquivo simplesmente como MP4. Não verificamos nem nos importamos com a origem.' },
      ]}
      relatedLinks={[
        { href: '/pt/zoom-transcription', label: 'Transcrição Zoom', desc: 'Para gravações Zoom Cloud ou locais.' },
        { href: '/pt/teams-meeting-transcription', label: 'Transcrição Teams', desc: 'Para gravações Microsoft Teams.' },
        { href: '/pt/meeting-transcription', label: 'Transcrição de reuniões', desc: 'Para gravações de outras plataformas.' },
        { href: '/pt/transcribe-video-to-text', label: 'Vídeo em texto', desc: 'Página genérica de vídeo em texto.' },
      ]}
    />
  )
}
