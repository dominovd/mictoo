import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/ogg-to-text',
  'fr': 'https://mictoo.com/fr/ogg-to-text',
  'de': 'https://mictoo.com/de/ogg-to-text',
  'es': 'https://mictoo.com/es/ogg-to-text',
  'ru': 'https://mictoo.com/ru/ogg-to-text',
  'it': 'https://mictoo.com/it/ogg-to-text',
  'pt': 'https://mictoo.com/pt/ogg-to-text',
  'pl': 'https://mictoo.com/pl/ogg-to-text',
  'x-default': 'https://mictoo.com/ogg-to-text',
}

export const metadata = {
  title: 'OGG em texto — Transcrição de áudio OGG grátis online | Mictoo',
  description: 'Converta arquivos de áudio OGG em texto grátis online. Envie qualquer gravação OGG Vorbis e receba uma transcrição precisa na hora. Sem cadastro.',
  alternates: { canonical: 'https://mictoo.com/pt/ogg-to-text', languages: LANGS },
}

export default function PtOggToTextPage() {
  return (
    <LandingLayout
      badge="OGG · Vorbis · Grátis · Instantâneo"
      h1={<>OGG em texto<br /><span className="text-brand-600">Transcrição de OGG grátis online</span></>}
      subtitle="Envie qualquer arquivo de áudio OGG e converta em texto em segundos. Suporta OGG Vorbis e OGG Opus. Sem conta."
      defaultLanguage="pt"
      features={[
        { icon: '🎙️', title: 'OGG Vorbis e Opus', desc: 'Suporta arquivos OGG de qualquer origem — gravadores de voz, navegadores web, apps de comunicação.' },
        { icon: '🌍', title: '50+ idiomas', desc: 'Idioma detectado automaticamente. Funciona com português, inglês, espanhol, francês e outros.' },
        { icon: '📄', title: 'Export .txt e .srt', desc: 'Baixe como texto simples ou como arquivo SRT com timestamps.' },
      ]}
      faq={[
        { q: 'Como converto OGG em texto?', a: 'Envie seu arquivo OGG acima. A transcrição é gerada automaticamente em segundos.' },
        { q: 'A conversão OGG em texto é grátis?', a: 'Sim, totalmente grátis. Sem cadastro ou conta.' },
        { q: 'Qual o tamanho máximo do arquivo OGG?', a: 'Até 25 MB.' },
        { q: 'Quais outros formatos de áudio são suportados?', a: 'Também são suportados MP3, MP4, WAV, M4A, FLAC, WEBM.' },
      ]}
      relatedLinks={[
        { href: '/pt/wav-to-text', label: 'WAV em texto' },
        { href: '/pt/flac-to-text', label: 'FLAC em texto' },
        { href: '/pt', label: 'Todos os formatos' },
      ]}
    />
  )
}
