import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/aac-to-text',
  'fr': 'https://mictoo.com/fr/aac-to-text',
  'de': 'https://mictoo.com/de/aac-to-text',
  'es': 'https://mictoo.com/es/aac-to-text',
  'ru': 'https://mictoo.com/ru/aac-to-text',
  'it': 'https://mictoo.com/it/aac-to-text',
  'pt': 'https://mictoo.com/pt/aac-to-text',
  'x-default': 'https://mictoo.com/aac-to-text',
}

export const metadata = {
  title: 'AAC em texto — Transcrição de áudio AAC grátis online | Mictoo',
  description: 'Transcreva arquivos de áudio AAC em texto grátis. Arraste seu .aac, .m4a ou outro arquivo codificado em AAC e receba uma transcrição precisa em segundos.',
  alternates: { canonical: 'https://mictoo.com/pt/aac-to-text', languages: LANGS },
}

export default function PtAacToTextPage() {
  return (
    <LandingLayout
      badge="AAC · M4A · Grátis"
      h1={<>AAC em texto<br /><span className="text-brand-600">Transcrição de AAC grátis online</span></>}
      subtitle="Envie seu arquivo de áudio AAC e receba uma transcrição em texto precisa em segundos. Funciona com .aac e .m4a (AAC dentro de um contêiner MP4). Sem cadastro."
      defaultLanguage="pt"
      features={[
        { icon: '🎧', title: 'Suporte nativo a AAC', desc: 'AAC é o codec de áudio padrão dos dispositivos Apple, YouTube e da maioria dos serviços de streaming. O Mictoo aceita .aac e .m4a direto, sem conversão.' },
        { icon: '🎯', title: 'Alta precisão', desc: 'AAC mantém alta qualidade com arquivos pequenos — perfeito para transcrição IA. Gravações limpas são transcritas tipicamente com 95%+ de precisão.' },
        { icon: '📥', title: 'Editar e exportar', desc: 'Revise a transcrição no navegador, corrija nomes e pontuação, depois baixe como .txt simples ou legendas .srt.' },
      ]}
      faq={[
        { q: 'O que é um arquivo AAC?', a: 'AAC (Advanced Audio Coding) é um formato de compressão de áudio com perdas usado pelo iTunes, Apple Music, YouTube e pela maioria dos apps de podcast. Os arquivos têm extensão .aac ou .m4a. AAC oferece qualidade melhor que MP3 no mesmo bitrate.' },
        { q: 'Qual a diferença entre .aac e .m4a?', a: 'Ambos contêm áudio codificado em AAC. .aac é o fluxo de áudio bruto; .m4a o envolve em um contêiner MP4 (é assim que iTunes e Voice Memos do iPhone salvam). O Mictoo suporta os dois direto.' },
        { q: 'Como converto AAC em texto grátis?', a: 'Arraste seu arquivo AAC para a área de upload acima. O Mictoo o transcreve automaticamente com IA e mostra o texto em segundos. Copie ou baixe como .txt.' },
        { q: 'Qual o tamanho máximo do arquivo AAC?', a: 'Até 25 MB por upload. AAC a 128 kbps dá cerca de 25 minutos de áudio em 25 MB; a 64 kbps quase uma hora. Para arquivos mais longos, reduza o bitrate ou divida em segmentos.' },
        { q: 'Posso obter timestamps para uma transcrição AAC?', a: 'Sim. Após a transcrição, você pode baixar um arquivo .srt com timestamps precisos — útil para sincronizar a transcrição com o áudio ou vídeo original.' },
      ]}
      relatedLinks={[
        { href: '/pt/m4a-to-text', label: 'M4A em texto' },
        { href: '/pt/transcribe-mp3-to-text', label: 'MP3 em texto' },
        { href: '/pt', label: 'Todos os formatos' },
      ]}
    />
  )
}
