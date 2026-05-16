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
  'x-default': 'https://mictoo.com/google-meet-transcription',
}

export const metadata = {
  title: 'Transcrição do Google Meet — Transcreva gravações Meet grátis | Mictoo',
  description: 'Transcreva grátis as gravações do Google Meet em texto. Funciona com MP4 exportados do Google Drive. Sem cadastro, sem instalação.',
  alternates: { canonical: 'https://mictoo.com/pt/google-meet-transcription', languages: LANGS },
}

export default function PtGoogleMeetPage() {
  return (
    <LandingLayout
      badge="Google Meet · MP4 · Grátis"
      h1={<>Transcrição do Google Meet<br /><span className="text-brand-600">Transforme gravações Meet em texto</span></>}
      subtitle="Envie o MP4 exportado do Google Meet e receba uma transcrição limpa em segundos. Grátis, sem cadastro. Complementa as legendas live do Google para uma ata pós-reunião organizada."
      defaultLanguage="pt"
      features={[
        { icon: '🎬', title: 'Suporte direto a MP4', desc: 'O Google Meet exporta gravações para o Google Drive como MP4. Baixe o arquivo e envie ao Mictoo — sem conversão ou extração.' },
        { icon: '🧾', title: 'Mais limpo que legendas live', desc: 'As legendas live do Google capturam o essencial, mas omitem pontuação e nomes. O Mictoo produz uma transcrição polida para colar em Docs, Notion ou um email de recap.' },
        { icon: '🔒', title: 'Privado', desc: 'Arquivos são processados e imediatamente excluídos. Não guardamos o áudio da reunião nem a transcrição.' },
      ]}
      faq={[
        { q: 'Como baixar uma gravação do Google Meet?', a: 'Abra o Google Drive → Meu Drive → Meet Recordings (pasta criada automaticamente). Encontre sua reunião, clique em ⋮ → Baixar. O arquivo é um MP4 — envie ao Mictoo como está.' },
        { q: 'Por que usar o Mictoo se o Google Meet já tem legendas live?', a: 'As legendas live são úteis durante a reunião, mas não são salvas por padrão e não têm pontuação nem maiúsculas corretas. O Mictoo te dá uma transcrição polida e editável, pronta para compartilhar ou reutilizar.' },
        { q: 'Posso obter etiquetas de oradores (Host, Convidado 1, etc.)?', a: 'Não automaticamente no plano grátis. A transcrição é um único fluxo de texto — as etiquetas podem ser adicionadas manualmente no editor do navegador.' },
        { q: 'Qual a duração máxima da gravação Meet?', a: 'Até 25 MB por arquivo. Um MP4 do Google Meet em qualidade padrão ocupa cerca de 50 MB por 30 minutos; considere extrair a faixa de áudio (M4A) ou comprimir o vídeo para caber no limite.' },
        { q: 'A função "Tomar notas para mim" do Google é a mesma coisa?', a: 'Não — "Tomar notas para mim" do Workspace gera um resumo IA, não uma transcrição palavra por palavra. O Mictoo te dá a transcrição verbatim, que você pode resumir separadamente se quiser.' },
      ]}
      relatedLinks={[
        { href: '/pt/zoom-transcription', label: 'Transcrição do Zoom' },
        { href: '/pt/meeting-transcription', label: 'Transcrição de reuniões' },
        { href: '/pt', label: 'Todos os formatos' },
      ]}
    />
  )
}
