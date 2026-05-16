import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/timestamped-transcription',
  'fr': 'https://mictoo.com/fr/timestamped-transcription',
  'de': 'https://mictoo.com/de/timestamped-transcription',
  'es': 'https://mictoo.com/es/timestamped-transcription',
  'ru': 'https://mictoo.com/ru/timestamped-transcription',
  'it': 'https://mictoo.com/it/timestamped-transcription',
  'pt': 'https://mictoo.com/pt/timestamped-transcription',
  'x-default': 'https://mictoo.com/timestamped-transcription',
}

export const metadata = {
  title: 'Transcrição com timestamps — Gerador grátis com timecode | Mictoo',
  description: 'Gere transcrições com timestamps grátis. Envie áudio ou vídeo e baixe um arquivo SRT com timecodes exatos. Sem cadastro.',
  alternates: { canonical: 'https://mictoo.com/pt/timestamped-transcription', languages: LANGS },
}

export default function PtTimestampedPage() {
  return (
    <LandingLayout
      badge="Timecode · SRT · Grátis"
      h1={<>Transcrição com timestamps<br /><span className="text-brand-600">Transcrição grátis com timecode</span></>}
      subtitle="Envie qualquer arquivo de áudio ou vídeo e receba uma transcrição com timestamps exatos. Baixe como SRT — pronto para YouTube, editores de vídeo e ferramentas de legendagem. Sem cadastro."
      defaultLanguage="pt"
      features={[
        { icon: '⏱️', title: 'Timecodes automáticos', desc: 'Cada segmento recebe um timestamp preciso de início e fim — gerado automaticamente do seu áudio.' },
        { icon: '📄', title: 'Download em .srt', desc: 'Exporte sua transcrição com timestamps como arquivo de legendas SRT. Envie direto para YouTube, Premiere, DaVinci ou qualquer ferramenta de legendagem.' },
        { icon: '✏️', title: 'Texto editável', desc: 'Releia e edite a transcrição no navegador antes do download. Sem necessidade de conta.' },
      ]}
      faq={[
        { q: 'O que é transcrição com timestamps?', a: 'Uma transcrição com timestamps (ou com timecode) é uma versão em texto de áudio ou vídeo em que cada linha inclui o horário exato em que foi falada — por exemplo "00:01:23 → Olá, bem-vindos ao programa". Permite sincronizar o texto com a mídia original.' },
        { q: 'Como criar uma transcrição com timestamps grátis?', a: 'Envie seu arquivo de áudio ou vídeo na ferramenta acima. O Mictoo gera automaticamente a transcrição com timestamps e permite baixá-la em SRT ou em texto simples com timecodes.' },
        { q: 'O que é um arquivo SRT?', a: 'SRT (SubRip Subtitle) é um formato padrão de arquivo de legendas com segmentos de texto e timestamps. Arquivos SRT são suportados pelo YouTube, Netflix, Premiere Pro, Final Cut, DaVinci Resolve e pela maioria das plataformas de vídeo e editores.' },
        { q: 'Posso usar o SRT para legendas no YouTube?', a: 'Sim. Depois de baixar o .srt, vá em YouTube Studio → Legendas → Adicionar idioma → Fazer upload do arquivo. Suas legendas com timestamps serão sincronizadas automaticamente com o vídeo.' },
        { q: 'Qual é a precisão dos timestamps?', a: 'Os timestamps são gerados no nível do segmento (geralmente a cada 5-15 segundos). A precisão é alta para áudio limpo. Vozes sobrepostas ou ruído de fundo significativo podem afetar a precisão.' },
        { q: 'Qual a diferença entre transcrição e transcrição com timestamps?', a: 'Uma transcrição simples é uma versão em texto do áudio. Uma transcrição com timestamps adiciona horários para que cada trecho possa ser associado a um momento exato da gravação — essencial para legendas e edição de vídeo.' },
        { q: 'Quais formatos são suportados?', a: 'MP3, MP4, WAV, M4A, OGG, WEBM, FLAC. Qualquer arquivo de áudio ou vídeo até 25 MB.' },
      ]}
      relatedLinks={[
        { href: '/pt/free-srt-generator', label: 'Gerador SRT' },
        { href: '/pt/transcribe-video-to-text', label: 'Vídeo em texto' },
        { href: '/pt/transcribe-audio-to-text', label: 'Áudio em texto' },
        { href: '/pt', label: 'Todos os formatos' },
      ]}
    />
  )
}
