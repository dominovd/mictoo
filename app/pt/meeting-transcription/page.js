import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/meeting-transcription',
  'fr': 'https://mictoo.com/fr/meeting-transcription',
  'de': 'https://mictoo.com/de/meeting-transcription',
  'es': 'https://mictoo.com/es/meeting-transcription',
  'ru': 'https://mictoo.com/ru/meeting-transcription',
  'it': 'https://mictoo.com/it/meeting-transcription',
  'pt': 'https://mictoo.com/pt/meeting-transcription',
  'x-default': 'https://mictoo.com/meeting-transcription',
}

export const metadata = {
  title: 'Transcrição de reuniões — De calls Zoom/Teams/Meet a texto | Mictoo',
  description: 'Transcreva grátis gravações de reuniões Zoom, Teams ou Google Meet. Envie MP4 ou M4A e receba transcript + resumo IA em segundos. Sem cadastro.',
  alternates: { canonical: 'https://mictoo.com/pt/meeting-transcription', languages: LANGS },
}

export default function PtMeetingPage() {
  return (
    <LandingLayout
      badge="Zoom · Teams · Meet · Grátis"
      h1={<>Transcrição de reuniões<br /><span className="text-brand-600">Calls em texto, grátis</span></>}
      subtitle="Envie a gravação da sua reunião (Zoom, Teams, Google Meet ou qualquer MP4/M4A) e receba uma transcrição limpa e um resumo IA com action items. Sem conta."
      defaultLanguage="pt"
      features={[
        { icon: '🎥', title: 'Qualquer plataforma', desc: 'Funciona com Zoom, Microsoft Teams, Google Meet, Webex, Loom — qualquer plataforma que exporta MP4 ou M4A.' },
        { icon: '✨', title: 'Resumo IA + action items', desc: 'Após a transcrição, receba automaticamente um resumo, pontos-chave e action items — prontos para follow-up por email.' },
        { icon: '🔒', title: 'Privado', desc: 'Nenhum bot IA nas suas calls. Você grava, você envia, você controla. Os arquivos são processados e imediatamente excluídos.' },
      ]}
      faq={[
        { q: 'Como transcrever uma reunião do Zoom?', a: 'No Zoom: ative Local Recording ou Cloud Recording antes da call. Após a reunião, baixe o MP4 (ou M4A só áudio) e envie aqui.' },
        { q: 'Como transcrever uma reunião do Teams?', a: 'O Microsoft Teams salva as gravações no OneDrive ou SharePoint. Abra, clique em Baixar, receba um MP4 — envie direto ao Mictoo.' },
        { q: 'Como transcrever uma reunião do Google Meet?', a: 'O Google Meet exporta em MP4 no Google Drive (pasta "Meet Recordings"). Baixe e envie aqui.' },
        { q: 'Posso obter etiquetas de oradores automaticamente?', a: 'Não no plano grátis. A transcrição é um único fluxo. As etiquetas (Host / Participante 1 / Participante 2) podem ser adicionadas manualmente no editor do navegador.' },
        { q: 'Qual a duração máxima da reunião?', a: 'Até 25 MB por arquivo. Para reuniões de 30+ minutos, exporte em bitrate baixo ou extraia apenas a faixa de áudio (M4A) para caber no limite.' },
      ]}
      relatedLinks={[
        { href: '/pt/zoom-transcription', label: 'Transcrição do Zoom' },
        { href: '/pt/google-meet-transcription', label: 'Transcrição do Google Meet' },
        { href: '/pt/teams-meeting-transcription', label: 'Transcrição do Teams' },
        { href: '/pt', label: 'Todos os formatos' },
      ]}
    />
  )
}
