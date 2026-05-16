import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/lecture-transcription',
  'fr': 'https://mictoo.com/fr/lecture-transcription',
  'de': 'https://mictoo.com/de/lecture-transcription',
  'es': 'https://mictoo.com/es/lecture-transcription',
  'ru': 'https://mictoo.com/ru/lecture-transcription',
  'it': 'https://mictoo.com/it/lecture-transcription',
  'pt': 'https://mictoo.com/pt/lecture-transcription',
  'pl': 'https://mictoo.com/pl/lecture-transcription',
  'ja': 'https://mictoo.com/ja/lecture-transcription',
  'x-default': 'https://mictoo.com/lecture-transcription',
}

export const metadata = {
  title: 'Transcrição de aulas — De áudio a texto para estudantes | Mictoo',
  description: 'Transforme gravações de aulas em texto para estudo. Grátis, sem conta. Envie MP3 ou M4A e receba uma transcrição limpa em segundos.',
  alternates: { canonical: 'https://mictoo.com/pt/lecture-transcription', languages: LANGS },
}

export default function PtLecturePage() {
  return (
    <LandingLayout
      badge="Estudantes · Universidade · Grátis"
      h1={<>Transcrição de aulas<br /><span className="text-brand-600">De áudio a anotações</span></>}
      subtitle="Envie a gravação da aula e receba a transcrição completa. Ideal para revisar, estudar e anotar. Sem conta, sem aplicativo."
      defaultLanguage="pt"
      features={[
        { icon: '🎓', title: 'Para estudantes', desc: 'Grave a aula, envie ao Mictoo e receba um texto pesquisável em segundos. Adicione seus comentários no navegador.' },
        { icon: '🔍', title: 'Busque dentro das aulas', desc: 'Transforme horas de áudio em texto pesquisável. Encontre rapidamente a definição, o conceito ou a referência que precisa.' },
        { icon: '🌍', title: '50+ idiomas', desc: 'Funciona com aulas em português, inglês, espanhol, francês, alemão e muitos outros idiomas acadêmicos.' },
      ]}
      faq={[
        { q: 'Como gravar uma aula para transcrever?', a: 'iPhone: app Gravador. Android: gravador integrado. Laptop: QuickTime (Mac) ou Voice Recorder (Windows). Exporte em MP3 ou M4A e envie aqui.' },
        { q: 'É legal gravar uma aula?', a: 'Depende da política da sua universidade e da lei local. Muitas instituições permitem a gravação para uso pessoal; outras exigem consentimento do professor. Verifique antes.' },
        { q: 'Quão precisa é a transcrição de uma aula?', a: 'Para um professor que fala com clareza em uma sala com pouco ruído, a precisão passa de 95%. Ruído ambiente, sotaques fortes ou salas muito grandes podem reduzir.' },
        { q: 'Posso transcrever uma aula em idioma estrangeiro?', a: 'Sim. O Mictoo suporta mais de 50 idiomas com detecção automática. Funciona muito bem para aulas em inglês, espanhol, francês, alemão e muitos outros.' },
        { q: 'Qual a duração máxima da aula?', a: 'Até 25 MB por arquivo. Para uma aula de 60-90 minutos, exporte em mono a 64 kbps ou divida em segmentos menores.' },
      ]}
      relatedLinks={[
        { href: '/pt/transcribe-mp3-to-text', label: 'MP3 em texto' },
        { href: '/pt/m4a-to-text', label: 'M4A em texto' },
        { href: '/pt/voice-memo-to-text', label: 'Memo de voz em texto' },
        { href: '/pt', label: 'Todos os formatos' },
      ]}
    />
  )
}
