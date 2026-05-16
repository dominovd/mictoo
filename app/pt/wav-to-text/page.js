import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/wav-to-text',
  'fr': 'https://mictoo.com/fr/wav-to-text',
  'de': 'https://mictoo.com/de/wav-to-text',
  'es': 'https://mictoo.com/es/wav-to-text',
  'ru': 'https://mictoo.com/ru/wav-to-text',
  'it': 'https://mictoo.com/it/wav-to-text',
  'pt': 'https://mictoo.com/pt/wav-to-text',
  'x-default': 'https://mictoo.com/wav-to-text',
}

export const metadata = {
  title: 'WAV em texto — Transcrição de WAV grátis online | Mictoo',
  description: 'Converta arquivos WAV em texto online grátis. Envie qualquer áudio WAV e receba uma transcrição precisa em segundos. Sem cadastro.',
  alternates: { canonical: 'https://mictoo.com/pt/wav-to-text', languages: LANGS },
}

export default function PtWavToTextPage() {
  return (
    <LandingLayout
      badge="WAV · Grátis · Instantâneo"
      h1={<>WAV em texto<br /><span className="text-brand-600">Transcrição de WAV grátis online</span></>}
      subtitle="Envie qualquer arquivo de áudio WAV e receba uma transcrição em texto precisa em segundos. Suporta todas as gravações WAV — entrevistas, chamadas, aulas, notas de voz. Sem conta."
      defaultLanguage="pt"
      features={[
        { icon: '🎙️', title: 'Qualquer WAV', desc: 'WAV padrão, PCM, broadcast WAV — qualquer formato WAV até 25 MB.' },
        { icon: '⏱️', title: 'Timestamps inclusos', desc: 'Baixe a transcrição como .txt ou como arquivo de legendas .srt com timecodes.' },
        { icon: '🌍', title: '50+ idiomas', desc: 'Idioma detectado automaticamente. Funciona com português, inglês, espanhol, francês, alemão, russo e muitos outros.' },
      ]}
      faq={[
        { q: 'Como converto um arquivo WAV em texto?', a: 'Envie seu arquivo WAV com a ferramenta acima. O Mictoo o transcreve automaticamente com IA e mostra o texto em segundos.' },
        { q: 'A conversão WAV em texto é grátis?', a: 'Sim, totalmente grátis. Sem conta. Envie seus WAVs — sem cota mensal de minutos, sem cadastro.' },
        { q: 'Qual o tamanho máximo do WAV?', a: 'Até 25 MB. Para gravações maiores, converta primeiro para MP3 ou divida a gravação em segmentos.' },
        { q: 'Posso obter uma transcrição com timestamps a partir de um WAV?', a: 'Sim. Após a transcrição, clique no botão .srt para baixar um arquivo de legendas com timestamps exatos para cada segmento.' },
        { q: 'Quais outros formatos de áudio são suportados?', a: 'O Mictoo também suporta MP3, MP4, M4A, OGG, WEBM e FLAC além do WAV.' },
      ]}
      relatedLinks={[
        { href: '/pt/transcribe-mp3-to-text', label: 'MP3 em texto' },
        { href: '/pt/transcribe-audio-to-text', label: 'Áudio em texto' },
        { href: '/pt', label: 'Todos os formatos' },
      ]}
    />
  )
}
