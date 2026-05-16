import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/free-srt-generator',
  'fr': 'https://mictoo.com/fr/free-srt-generator',
  'de': 'https://mictoo.com/de/free-srt-generator',
  'es': 'https://mictoo.com/es/free-srt-generator',
  'ru': 'https://mictoo.com/ru/free-srt-generator',
  'it': 'https://mictoo.com/it/free-srt-generator',
  'pt': 'https://mictoo.com/pt/free-srt-generator',
  'pl': 'https://mictoo.com/pl/free-srt-generator',
  'ja': 'https://mictoo.com/ja/free-srt-generator',
  'x-default': 'https://mictoo.com/free-srt-generator',
}

export const metadata = {
  title: 'Gerador SRT grátis — Crie legendas online | Mictoo',
  description: 'Gere arquivos SRT a partir de qualquer áudio ou vídeo grátis. Envie seu arquivo, receba uma transcrição com timestamps e baixe um .srt pronto para uso. Sem cadastro.',
  alternates: { canonical: 'https://mictoo.com/pt/free-srt-generator', languages: LANGS },
}

export default function PtSrtGeneratorPage() {
  return (
    <LandingLayout
      badge="SRT · Legendas · Grátis"
      h1={<>Gerador SRT grátis<br /><span className="text-brand-600">Crie legendas online</span></>}
      subtitle="Envie qualquer arquivo de áudio ou vídeo e baixe um arquivo SRT pronto em segundos. Compatível com YouTube, Premiere Pro, DaVinci Resolve e qualquer editor de vídeo."
      defaultLanguage="pt"
      features={[
        { icon: '🎬', title: 'SRT pronto para YouTube', desc: 'Envie o arquivo .srt direto no YouTube Studio para adicionar legendas. Os timestamps sincronizam automaticamente.' },
        { icon: '⏱️', title: 'Timecodes precisos', desc: 'Cada segmento de legenda recebe um timestamp HH:MM:SS,ms — o formato padrão usado por todas as ferramentas profissionais de vídeo.' },
        { icon: '🌍', title: '50+ idiomas', desc: 'Gere SRT em todos os idiomas — português, inglês, espanhol, francês, japonês e mais 46. O idioma é detectado automaticamente.' },
      ]}
      faq={[
        { q: 'O que é um arquivo SRT?', a: 'Um arquivo SRT (SubRip Subtitle) é um arquivo de texto com entradas de legenda com timestamps. Cada entrada tem um número de sequência, horário início → fim e o texto da legenda. SRT é o formato de legenda mais amplamente suportado.' },
        { q: 'Como gerar um SRT a partir de um vídeo?', a: 'Envie seu arquivo de vídeo ou áudio acima. O Mictoo transcreve e adiciona timestamps em cada segmento. Após a transcrição, clique no botão .srt para baixar o arquivo de legendas.' },
        { q: 'Como adicionar legendas SRT a um vídeo do YouTube?', a: 'No YouTube Studio, abra seu vídeo e clique em Legendas. Selecione Adicionar idioma, depois Fazer upload do arquivo e escolha seu .srt. O YouTube sincroniza as legendas automaticamente.' },
        { q: 'O arquivo SRT funciona no Premiere Pro e DaVinci Resolve?', a: 'Sim. No Premiere Pro: Arquivo → Importar → selecione seu .srt. No DaVinci Resolve: abra a página Edit, vá em Arquivo → Importar Legendas e selecione o .srt.' },
        { q: 'O gerador SRT é realmente grátis?', a: 'Sim, totalmente grátis. Sem conta, sem assinatura, sem marca d\'água. Envie o arquivo e baixe o SRT — só isso.' },
        { q: 'Qual o tamanho máximo do arquivo?', a: 'Até 25 MB. Para vídeos mais longos, extraia primeiro a faixa de áudio para reduzir o tamanho, ou divida o vídeo em segmentos menores.' },
        { q: 'Posso gerar um SRT a partir de um arquivo de áudio (MP3, WAV)?', a: 'Sim. O Mictoo gera SRT a partir de qualquer formato de áudio ou vídeo: MP3, MP4, WAV, M4A, OGG, WEBM, FLAC.' },
        { q: 'Posso editar as legendas antes do download?', a: 'Sim. Após a transcrição, você pode editar o texto no navegador antes do download. A estrutura dos timestamps é preservada no SRT exportado.' },
      ]}
      relatedLinks={[
        { href: '/pt/timestamped-transcription', label: 'Transcrição com timestamps' },
        { href: '/pt/transcribe-video-to-text', label: 'Vídeo em texto' },
        { href: '/pt/transcribe-mp3-to-text', label: 'MP3 em texto' },
        { href: '/pt', label: 'Todos os formatos' },
      ]}
    />
  )
}
