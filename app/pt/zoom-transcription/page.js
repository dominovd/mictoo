import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/zoom-transcription',
  'fr': 'https://mictoo.com/fr/zoom-transcription',
  'de': 'https://mictoo.com/de/zoom-transcription',
  'es': 'https://mictoo.com/es/zoom-transcription',
  'ru': 'https://mictoo.com/ru/zoom-transcription',
  'it': 'https://mictoo.com/it/zoom-transcription',
  'pt': 'https://mictoo.com/pt/zoom-transcription',
  'x-default': 'https://mictoo.com/zoom-transcription',
}

export const metadata = {
  title: 'Transcrição do Zoom — De gravações Zoom a texto grátis | Mictoo',
  description: 'Transcreva grátis gravações de reuniões do Zoom em texto. Funciona com MP4 e M4A exportados pelo Zoom Cloud ou Local Recording. Sem cadastro.',
  alternates: { canonical: 'https://mictoo.com/pt/zoom-transcription', languages: LANGS },
}

export default function PtZoomPage() {
  return (
    <LandingLayout
      badge="Zoom · MP4 · Grátis"
      h1={<>Transcrição do Zoom<br /><span className="text-brand-600">Gravações Zoom em texto</span></>}
      subtitle="Envie a gravação da sua call Zoom e receba uma transcrição limpa em segundos. Grátis, sem conta. Funciona com MP4 do Cloud Recording ou Local Recording."
      defaultLanguage="pt"
      features={[
        { icon: '⚡', title: 'Rápido e grátis', desc: 'Uma reunião Zoom de 25 minutos costuma ser transcrita em menos de 30 segundos. 100% grátis, sem conta, sem cartão de crédito.' },
        { icon: '🎯', title: 'Alta precisão', desc: 'O áudio do Zoom (geralmente limpo e com um orador por vez) tem ótimos resultados com o Whisper — precisão tipicamente >95%.' },
        { icon: '📥', title: 'Export .txt ou .srt', desc: 'Baixe a transcrição como texto simples ou como arquivo de legendas SRT com timecodes.' },
      ]}
      faq={[
        { q: 'Como habilitar a gravação no Zoom?', a: 'Nas configurações do Zoom: vá em Recording → habilite Local Recording (no seu computador) ou Cloud Recording (na nuvem Zoom, requer plano pago). Durante a call, clique em Record.' },
        { q: 'O Zoom já tem transcrição automática?', a: 'Sim, o Zoom oferece live transcription se ativada, mas o arquivo fica no ecossistema Zoom e nem sempre pode ser baixado como .txt portátil. O Mictoo te dá um .txt ou .srt portátil para usar onde quiser.' },
        { q: 'Posso obter legendas SRT para o vídeo Zoom?', a: 'Sim. Após a transcrição, baixe um arquivo .srt com timecodes e use como legendas no YouTube, Vimeo ou em qualquer editor de vídeo.' },
        { q: 'E os conteúdos confidenciais?', a: 'O Mictoo não armazena arquivos. O áudio é enviado ao nosso provedor IA para transcrição e descartado. Para calls com dados regulamentados, verifique a política da empresa sobre serviços IA de terceiros.' },
        { q: 'Qual a duração máxima da gravação Zoom?', a: 'Até 25 MB por arquivo. Uma call de 30 minutos em mono a 64 kbps cabe; para calls mais longas, extraia só o áudio (M4A) ou comprima o vídeo.' },
      ]}
      relatedLinks={[
        { href: '/pt/meeting-transcription', label: 'Transcrição de reuniões' },
        { href: '/pt/google-meet-transcription', label: 'Transcrição do Google Meet' },
        { href: '/pt/teams-meeting-transcription', label: 'Transcrição do Teams' },
        { href: '/pt', label: 'Todos os formatos' },
      ]}
    />
  )
}
