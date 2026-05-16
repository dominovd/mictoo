import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/youtube-to-text',
  'fr': 'https://mictoo.com/fr/youtube-to-text',
  'de': 'https://mictoo.com/de/youtube-to-text',
  'es': 'https://mictoo.com/es/youtube-to-text',
  'ru': 'https://mictoo.com/ru/youtube-to-text',
  'it': 'https://mictoo.com/it/youtube-to-text',
  'pt': 'https://mictoo.com/pt/youtube-to-text',
  'pl': 'https://mictoo.com/pl/youtube-to-text',
  'ja': 'https://mictoo.com/ja/youtube-to-text',
  'ko': 'https://mictoo.com/ko/youtube-to-text',
  'x-default': 'https://mictoo.com/youtube-to-text',
}

export const metadata = {
  title: 'YouTube em texto — Transcrição grátis de vídeos do YouTube | Mictoo',
  description: 'Transcreva vídeos do YouTube em texto e legendas SRT grátis. Baixe o áudio primeiro e envie ao Mictoo. MP3, MP4, M4A. Sem cadastro.',
  alternates: { canonical: 'https://mictoo.com/pt/youtube-to-text', languages: LANGS },
}

export default function PtYouTubeToTextPage() {
  return (
    <LandingLayout
      badge="YouTube · SRT · Grátis"
      h1={<>YouTube em texto<br /><span className="text-brand-600">Transcrição grátis de vídeos do YouTube</span></>}
      subtitle="Transforme qualquer vídeo do YouTube em transcrição ou arquivo SRT. Grátis, sem cadastro. Baixe o áudio ou vídeo e envie o arquivo ao Mictoo."
      defaultLanguage="pt"
      features={[
        { icon: '🎬', title: 'Qualquer vídeo do YouTube', desc: 'Tutoriais, podcasts, entrevistas, aulas, vlogs — qualquer vídeo com fala clara. Idiomas detectados automaticamente, mais de 50 suportados.' },
        { icon: '📺', title: 'SRT para legendas', desc: 'Após a transcrição, baixe um arquivo .srt pronto. Faça upload no YouTube Studio para adicionar legendas precisas aos seus vídeos em segundos.' },
        { icon: '📝', title: 'Reutilize seu conteúdo', desc: 'Transforme um vídeo em post de blog, show notes, frases para redes sociais ou script para tradução. A transcrição é totalmente editável no navegador.' },
      ]}
      faq={[
        { q: 'Como obter o áudio de um vídeo do YouTube?', a: 'Para seus próprios vídeos: abra YouTube Studio → Conteúdo → clique no vídeo → Baixar. Para vídeos de terceiros, as opções dependem da licença do vídeo e dos Termos do YouTube. Muitos usuários baixam primeiro seu próprio conteúdo e enviam aqui.' },
        { q: 'O Mictoo pode baixar diretamente de uma URL do YouTube?', a: 'Não — para respeitar os Termos do YouTube e os direitos dos criadores, o Mictoo não busca conteúdo por URL. Envie um arquivo de áudio ou vídeo que você tenha direito de transcrever.' },
        { q: 'Como adicionar legendas do Mictoo ao meu vídeo do YouTube?', a: 'Após a transcrição, clique em "Baixar .srt" para obter o arquivo de legendas. No YouTube Studio: abra o vídeo → Legendas → Adicionar idioma → Fazer upload do arquivo → escolha o .srt. As legendas sincronizam automaticamente.' },
        { q: 'A transcrição funciona para vídeos em outros idiomas?', a: 'Sim. O Mictoo detecta automaticamente o idioma falado e suporta mais de 50 idiomas — português, espanhol, francês, alemão, russo, japonês, chinês, árabe, etc. Defina o idioma manualmente se a detecção errar.' },
        { q: 'Qual o tamanho máximo do vídeo?', a: 'Até 25 MB por upload. Um export de áudio de 25 minutos a 128 kbps cabe. Para vídeos mais longos, extraia a faixa de áudio (M4A é o mais eficiente) ou divida o arquivo em várias partes.' },
      ]}
      relatedLinks={[
        { href: '/pt/transcribe-video-to-text', label: 'Vídeo em texto' },
        { href: '/pt/free-srt-generator', label: 'Gerador SRT' },
        { href: '/pt/podcast-transcription', label: 'Transcrição de podcasts' },
        { href: '/pt', label: 'Todos os formatos' },
      ]}
    />
  )
}
