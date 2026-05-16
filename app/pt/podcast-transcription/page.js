import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/podcast-transcription',
  'fr': 'https://mictoo.com/fr/podcast-transcription',
  'de': 'https://mictoo.com/de/podcast-transcription',
  'es': 'https://mictoo.com/es/podcast-transcription',
  'ru': 'https://mictoo.com/ru/podcast-transcription',
  'it': 'https://mictoo.com/it/podcast-transcription',
  'pt': 'https://mictoo.com/pt/podcast-transcription',
  'pl': 'https://mictoo.com/pl/podcast-transcription',
  'ja': 'https://mictoo.com/ja/podcast-transcription',
  'ko': 'https://mictoo.com/ko/podcast-transcription',
  'x-default': 'https://mictoo.com/podcast-transcription',
}

export const metadata = {
  title: 'Transcrição de podcasts — Gerador grátis de transcript | Mictoo',
  description: 'Transcreva episódios de podcast em texto grátis. Envie o arquivo de áudio e obtenha a transcrição na hora. Suporta MP3, M4A, WAV. Sem cadastro.',
  alternates: { canonical: 'https://mictoo.com/pt/podcast-transcription', languages: LANGS },
}

export default function PtPodcastPage() {
  return (
    <LandingLayout
      badge="Podcasters · YouTube · Grátis"
      h1={<>Transcrição de podcasts<br /><span className="text-brand-600">Gerador grátis de transcript</span></>}
      subtitle="Transforme qualquer episódio de podcast em transcrição completa em segundos. Ótimo para show notes, posts de blog, SEO e acessibilidade. Envie MP3, M4A ou WAV — sem conta."
      defaultLanguage="pt"
      features={[
        { icon: '🎙️', title: 'Todos os formatos de podcast', desc: 'Envie seus arquivos MP3, M4A, WAV, OGG ou FLAC. Funciona com todos os exports de plataformas de hospedagem.' },
        { icon: '📝', title: 'Show notes e artigos', desc: 'Transforme a transcrição em conteúdo otimizado para SEO, show notes ou arquivo pesquisável.' },
        { icon: '♿', title: 'Acessibilidade', desc: 'Ofereça a transcrição para tornar seu podcast acessível a pessoas surdas ou com deficiência auditiva.' },
      ]}
      faq={[
        { q: 'Como transcrever um episódio de podcast grátis?', a: 'Baixe seu episódio em MP3 ou M4A, envie acima e receba a transcrição completa em segundos.' },
        { q: 'Posso transcrever um podcast do Spotify?', a: 'Se você tem acesso ao arquivo de áudio (por exemplo, seu próprio programa), envie diretamente. Para podcasts de terceiros, baixe o episódio via um app que permite ouvir offline e depois envie o arquivo.' },
        { q: 'Por que criar uma transcrição do podcast?', a: 'Transcrições melhoram o SEO (Google indexa o texto), tornam o conteúdo acessível, podem ser reaproveitadas em artigos ou newsletters e ajudam os ouvintes a navegar pelo episódio.' },
        { q: 'A transcrição é precisa?', a: 'Para um podcast bem gravado com um único locutor ou dupla clara, a precisão normalmente passa de 95%. Cai com vozes sobrepostas, sotaques marcantes ou áudio ruim.' },
        { q: 'Posso transcrever uma entrevista a duas vozes?', a: 'Sim. A transcrição captura toda a fala. As etiquetas de orador (Host / Convidado) podem ser adicionadas manualmente no editor do navegador.' },
        { q: 'Qual o tamanho máximo?', a: 'Até 25 MB. A maioria dos MP3 a 128 kbps cabe nesse limite para 25 minutos. Para episódios mais longos, reduza o bitrate ou divida o arquivo.' },
      ]}
      relatedLinks={[
        { href: '/pt/transcribe-mp3-to-text', label: 'MP3 em texto' },
        { href: '/pt/m4a-to-text', label: 'M4A em texto' },
        { href: '/pt/interview-transcription', label: 'Transcrição de entrevistas' },
        { href: '/pt', label: 'Todos os formatos' },
      ]}
    />
  )
}
