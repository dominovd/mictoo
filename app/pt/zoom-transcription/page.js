import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/zoom-transcription',
  'fr': 'https://mictoo.com/fr/zoom-transcription',
  'de': 'https://mictoo.com/de/zoom-transcription',
  'es': 'https://mictoo.com/es/zoom-transcription',
  'ru': 'https://mictoo.com/ru/zoom-transcription',
  'it': 'https://mictoo.com/it/zoom-transcription',
  'pt': 'https://mictoo.com/pt/zoom-transcription',
  'pl': 'https://mictoo.com/pl/zoom-transcription',
  'ja': 'https://mictoo.com/ja/zoom-transcription',
  'ko': 'https://mictoo.com/ko/zoom-transcription',
  'x-default': 'https://mictoo.com/zoom-transcription',
}

export const metadata = {
  title: 'Transcrição do Zoom — transcreva gravações Zoom grátis | Mictoo',
  description:
    'Transcrição Zoom grátis. Envie sua Cloud Recording (MP4) ou gravação local (M4A) e receba uma transcrição IA precisa em segundos. Sem cadastro, sem cobrança por minuto.',
  alternates: { canonical: 'https://mictoo.com/pt/zoom-transcription', languages: LANGS },
}

export default function PtZoomPage() {
  return (
    <LandingLayout
      defaultLanguage="pt"
      badge="ZOOM · MP4 · M4A · GRÁTIS"
      h1={<>Transcrição do Zoom<br /><span className="text-brand-600">Converta gravações Zoom em texto</span></>}
      subtitle="Transforme sua gravação Zoom em texto limpo. Cloud Recording MP4 ou M4A local, os dois funcionam. Solte o arquivo, ganhe a transcrição em segundos."
      howItWorks={[
        { icon: '🎬', title: 'Exporte a gravação Zoom', desc: 'Cloud Recordings baixam como MP4 (vídeo + áudio) ou M4A (só áudio). Local Recording salva no seu dispositivo como MP4 + M4A. Os dois formatos funcionam aqui.' },
        { icon: '⚡', title: 'Solte o arquivo', desc: 'Arraste. Pegamos o áudio (se for vídeo) e mandamos para o Whisper large-v3. Uma reunião de 30 minutos normalmente termina em menos de um minuto.' },
        { icon: '📋', title: 'Pegue a transcrição', desc: 'Leia, copie ou baixe como TXT ou SRT. Corrija nomes errados ou termos técnicos inline antes de exportar.' },
      ]}
      whyUse={{ title: 'Por que Mictoo para gravações Zoom', bullets: [
        { title: 'Funciona em qualquer plano Zoom, inclusive o grátis', desc: 'A transcrição do Zoom é limitada a certos planos pagos. A nossa não exige plano Zoom. Grave, baixe, envie, pronto.' },
        { title: 'Melhor em inglês não-nativo e code-switching', desc: 'O Whisper large-v3 lida com sotaques e reuniões bilíngues melhor que a transcrição nativa do Zoom, historicamente inglês-first.' },
        { title: 'O M4A só de áudio é pequeno o bastante para upload direto', desc: 'A maior parte de reuniões Zoom de 30 minutos fica em 15-25 MB como M4A. Cabe confortavelmente no tier grátis sem nenhuma compressão.' },
        { title: 'Sem dor de cabeça de retenção de 14 dias', desc: 'Cloud Recordings do Zoom podem sumir após 14-30 dias dependendo do plano. Depois que você baixou e transcreveu aqui, o arquivo é seu para sempre.' },
        { title: 'Privacidade', desc: 'O arquivo é enviado ao provedor de transcrição e descartado. Não gravamos a Zoom recording em nosso banco de dados ou storage.' },
      ]}}
      useCases={{ title: 'Para que as pessoas transcrevem gravações Zoom', items: [
        { title: 'Atas de reuniões internas', desc: 'Roda a gravação, pega o texto, cola no Notion ou Confluence. Quem perdeu a reunião pega o conteúdo em cinco minutos de leitura em vez de uma hora de vídeo.' },
        { title: 'Calls de clientes e vendas', desc: 'Salve a transcrição no CRM ao lado do deal. O você do futuro, seis meses depois, vai agradecer.' },
        { title: 'Stand-ups assíncronos para times distribuídos', desc: 'Alguns times gravam stand-ups assíncronos em vez de fazer reuniões ao vivo. As transcrições os tornam pesquisáveis e escaneáveis.' },
        { title: 'Entrevistas de pesquisa', desc: 'Pesquisa qualitativa, user interviews, calls de screening de candidatos. O que você codifica e taga é o texto, não o vídeo.' },
        { title: 'Transcrições de webinar e painel', desc: 'Publique a transcrição ao lado da gravação para acessibilidade e SEO. Buscadores indexam o texto, não o vídeo.' },
      ]}}
      proTips={{ title: 'Dicas para transcrição do Zoom', tips: [
        { title: 'Baixe o M4A só de áudio, não o MP4', desc: 'O Cloud Recording do Zoom oferece os dois. O M4A é um décimo do tamanho do MP4 com qualidade de áudio idêntica. Upload mais rápido, bem abaixo do nosso cap de 60 MB para a maioria das reuniões.' },
        { title: 'Ative "Record a separate audio file for each participant" para reuniões multi-orador', desc: 'Em Configurações Zoom, Recording. Isso te dá um M4A por orador. Transcreva cada um separadamente para atribuição limpa, sem precisar de diarização.' },
        { title: 'Silencie participantes que não falam', desc: 'Ruído de fundo de microfones abertos durante uma apresentação produz palavras fantasma na transcrição. Em calls grandes, vale a pena forçar isso.' },
        { title: 'Gravação local e em nuvem têm a mesma qualidade', desc: 'As duas gravam por padrão com as mesmas configurações de áudio. Local é mais rápido (sem upload para o Zoom antes), mas exige espaço em disco.' },
        { title: 'Para conteúdo sensível, use gravação local', desc: 'A Cloud Recording guarda sua reunião nos servidores Zoom. A local fica no seu dispositivo até você escolher para onde vai. Para calls confidenciais de cliente ou de RH, local + direto para nós é o caminho que preserva privacidade.' },
        { title: 'Reuniões Zoom longas (acima de 60 minutos) precisam ser divididas', desc: 'Nosso cap de arquivo é 60 minutos com cadastro. Para uma call de 90 minutos, divida em dois pedaços de 45 minutos. Fácil no Audacity (File, Export, Multiple) ou com ffmpeg.' },
      ]}}
      faq={[
        { q: 'O Mictoo funciona com Cloud Recordings do Zoom?', a: 'Sim. Baixe o MP4 ou M4A da sua biblioteca de gravações Zoom, depois envie aqui. O export M4A só-áudio é mais rápido e menor.' },
        { q: 'Funciona com gravações Zoom Phone?', a: 'Sim. O Zoom Phone grava como MP3 ou M4A. Os dois funcionam. Áudio em qualidade de telefone (8 kHz mono) transcreve um pouco menos preciso que áudio de reunião de vídeo, mas o resultado continua legível.' },
        { q: 'E as gravações Zoom locais?', a: 'Mesma história. O Zoom salva como MP4 + M4A na sua pasta padrão do Zoom. Solte o M4A aqui.' },
        { q: 'Recebo etiquetas de orador?', a: 'Não automaticamente. Se você habilitou "Record a separate audio file for each participant" nas configurações Zoom, pode transcrever o arquivo de cada orador separadamente. Senão, precisa adicionar etiquetas manualmente em base ao fluxo da conversa.' },
        { q: 'Minha gravação Zoom passa de 60 MB. E agora?', a: 'Use o download M4A só-áudio em vez do MP4. Se ainda está grande demais, divida em pedaços ou reencode em bitrate menor. Veja nossos guias de compressão e divisão.' },
        { q: 'Como o Mictoo se compara com a transcrição nativa do Zoom?', a: 'Somos melhores em inglês não-nativo, melhores em sotaques e temos suporte mais amplo de idiomas (mais de 50). A transcrição nativa do Zoom é mais conveniente se você já paga o plano Zoom certo. A nossa é grátis e funciona independente do seu tier Zoom.' },
        { q: 'Minha gravação Zoom é guardada nos seus servidores?', a: 'Não. O arquivo é enviado ao provedor de transcrição (Groq, com OpenAI como backup), transcrito e descartado. Não escrevemos a gravação no disco.' },
        { q: 'Posso transcrever uma reunião Zoom em tempo real?', a: 'Não. Trabalhamos só com arquivos gravados. Para tempo real durante a reunião, a ferramenta nativa do Zoom ou um assistente de reunião dedicado seria a escolha certa.' },
        { q: 'E webinars Zoom e grandes reuniões?', a: 'Mesmo workflow. Baixe a gravação, envie, transcreva. Para webinars muito longos (acima de 60 minutos), divida antes.' },
        { q: 'Mensagens do chat da reunião são transcritas?', a: 'Não. Mensagens de chat são salvas separadamente pelo Zoom (como TXT na sua pasta Zoom). Transcrevemos só o áudio. Combine os dois você mesmo se precisa dos dois.' },
        { q: 'Quão precisa é a transcrição de áudio Zoom?', a: 'Para áudio limpo de reunião com bons microfones: 90-95%. Para reuniões com áudio ruim (microfone de laptop, sala barulhenta, wifi fraco), a precisão cai um pouco. Nomes e termos técnicos costumam precisar de cleanup.' },
        { q: 'Funciona também para gravações Microsoft Teams ou Google Meet?', a: 'Sim, mesmo motor. Temos páginas dedicadas para Google Meet e Microsoft Teams.' },
      ]}
      relatedLinks={[
        { href: '/pt/google-meet-transcription', label: 'Transcrição Google Meet', desc: 'Mesmo workflow para gravações do Google Meet.' },
        { href: '/pt/teams-meeting-transcription', label: 'Transcrição Teams', desc: 'Para gravações do Microsoft Teams.' },
        { href: '/pt/meeting-transcription', label: 'Transcrição de reuniões', desc: 'Página genérica se sua gravação vem de outra plataforma.' },
        { href: '/pt/interview-transcription', label: 'Transcrição de entrevista', desc: 'Para conversas um-a-um e entrevistas qualitativas.' },
      ]}
    />
  )
}
