import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/webinar-transcription',
  'fr': 'https://mictoo.com/fr/webinar-transcription',
  'de': 'https://mictoo.com/de/webinar-transcription',
  'es': 'https://mictoo.com/es/webinar-transcription',
  'ru': 'https://mictoo.com/ru/webinar-transcription',
  'it': 'https://mictoo.com/it/webinar-transcription',
  'pt': 'https://mictoo.com/pt/webinar-transcription',
  'pl': 'https://mictoo.com/pl/webinar-transcription',
  'ja': 'https://mictoo.com/ja/webinar-transcription',
  'x-default': 'https://mictoo.com/webinar-transcription',
}

export const metadata = {
  title: 'Transcrição de webinar — Transcript grátis para gravações | Mictoo',
  description: 'Transcreva grátis gravações de webinar em texto e legendas SRT. Funciona com Zoom, Webex, GoToWebinar e qualquer export MP4 ou MP3. Sem cadastro.',
  alternates: { canonical: 'https://mictoo.com/pt/webinar-transcription', languages: LANGS },
}

export default function PtWebinarPage() {
  return (
    <LandingLayout
      badge="Webinars · MP4 · Grátis"
      h1={<>Transcrição de webinar<br /><span className="text-brand-600">Gerador grátis de transcript</span></>}
      subtitle="Transforme a gravação do seu webinar em uma transcrição em texto pesquisável ou em um arquivo de legendas SRT. Funciona com Zoom, Webex, GoToWebinar e qualquer export MP4/MP3."
      defaultLanguage="pt"
      features={[
        { icon: '🎥', title: 'Qualquer export de plataforma', desc: 'Zoom, Webex, GoToWebinar, Demio, Livestorm — todos exportam em MP4 ou M4A. Envie o arquivo direto, sem conversão.' },
        { icon: '📝', title: 'Reutilize seu webinar', desc: 'Transforme um webinar em post de blog, posts para redes sociais, newsletter e documento de follow-up para os participantes.' },
        { icon: '📺', title: 'SRT para replay on-demand', desc: 'Baixe o arquivo .srt e use como legendas quando publicar o replay no YouTube, Vimeo ou seu site.' },
      ]}
      faq={[
        { q: 'Como baixar a gravação do meu webinar Zoom ou Webex?', a: 'No Zoom: portal web → Gravações → clique no webinar → Baixar. No Webex: abra a gravação em Minhas Gravações → Baixar. Ambos exportam em MP4 por padrão.' },
        { q: 'Posso obter transcrição enquanto o webinar está ao vivo?', a: 'O Mictoo trabalha sobre arquivos gravados, não sobre stream live. Para legendas em tempo real, use a função de live captions da plataforma de webinar e depois envie a gravação para uma transcrição polida.' },
        { q: 'E com múltiplos oradores e sessões de Q&A?', a: 'O Mictoo gera uma transcrição única com tudo o que foi falado. As etiquetas de orador (Host, Painelista 1, Plateia) podem ser adicionadas manualmente no editor do navegador antes do download.' },
        { q: 'Qual a duração máxima do webinar?', a: 'Até 25 MB por arquivo. Um webinar de 60 minutos em áudio mono a 64 kbps cabe facilmente; exporte em bitrate menor ou extraia o áudio M4A para sessões mais longas.' },
        { q: 'A transcrição é precisa para termos técnicos ou de setor?', a: 'A precisão é alta para áudio limpo. Nomes de marcas, siglas e terminologia incomum às vezes saem errados — fáceis de corrigir no editor do navegador antes do export.' },
      ]}
      relatedLinks={[
        { href: '/pt/meeting-transcription', label: 'Transcrição de reuniões' },
        { href: '/pt/zoom-transcription', label: 'Transcrição do Zoom' },
        { href: '/pt/free-srt-generator', label: 'Gerador SRT' },
        { href: '/pt', label: 'Todos os formatos' },
      ]}
    />
  )
}
