import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/interview-transcription',
  'fr': 'https://mictoo.com/fr/interview-transcription',
  'de': 'https://mictoo.com/de/interview-transcription',
  'es': 'https://mictoo.com/es/interview-transcription',
  'ru': 'https://mictoo.com/ru/interview-transcription',
  'it': 'https://mictoo.com/it/interview-transcription',
  'pt': 'https://mictoo.com/pt/interview-transcription',
  'pl': 'https://mictoo.com/pl/interview-transcription',
  'ja': 'https://mictoo.com/ja/interview-transcription',
  'x-default': 'https://mictoo.com/interview-transcription',
}

export const metadata = {
  title: 'Transcrição de entrevistas — De áudio a texto grátis | Mictoo',
  description: 'Transcreva entrevistas, pesquisa de usuário e podcasts a duas vozes. Grátis, sem conta. Envie MP3, M4A ou WAV e receba a transcrição em segundos.',
  alternates: { canonical: 'https://mictoo.com/pt/interview-transcription', languages: LANGS },
}

export default function PtInterviewPage() {
  return (
    <LandingLayout
      badge="Jornalistas · Pesquisa · Grátis"
      h1={<>Transcrição de entrevistas<br /><span className="text-brand-600">De áudio a texto, grátis</span></>}
      subtitle="Envie a gravação da entrevista e receba uma transcrição limpa em segundos. Ideal para jornalismo, pesquisa de usuário, citações em artigos, podcasts a duas vozes."
      defaultLanguage="pt"
      features={[
        { icon: '🎤', title: 'Para jornalistas', desc: 'Transforme entrevistas gravadas em citações prontas para colar no artigo. Busque no texto em vez de reouvir o áudio.' },
        { icon: '🧪', title: 'Para pesquisa de usuário', desc: 'Sessões de user research viram texto pesquisável. Encontre rapidamente padrões, citações e insights em dados qualitativos.' },
        { icon: '🌍', title: '50+ idiomas', desc: 'Funciona com entrevistas em português, inglês, espanhol, francês, alemão e muitos outros idiomas.' },
      ]}
      faq={[
        { q: 'Como transcrever uma entrevista a duas vozes?', a: 'Envie o arquivo de áudio (MP3, M4A, WAV) — o Mictoo transcreve tudo em um único fluxo. Para separar as vozes (Entrevistador / Entrevistado), adicione as etiquetas manualmente no editor do navegador.' },
        { q: 'Quão precisa é a transcrição?', a: 'Para gravações limpas com vozes bem separadas, a precisão passa de 95%. Vozes sobrepostas, sotaques muito fortes ou ruído de fundo podem reduzir.' },
        { q: 'Posso obter etiquetas de oradores automaticamente?', a: 'Não no plano grátis. A transcrição é um único bloco de texto. As etiquetas podem ser adicionadas em 30-60 segundos no editor antes do download.' },
        { q: 'Como gravar uma entrevista para transcrever?', a: 'Presencial: app Gravador no iPhone ou gravador Android. Remoto: grave a call Zoom/Meet/Teams. Exporte em MP3 ou M4A e envie aqui.' },
        { q: 'As entrevistas são privadas?', a: 'Sim. Os arquivos são enviados ao provedor IA apenas para transcrição e excluídos imediatamente. O Mictoo não armazena nada em seus servidores.' },
      ]}
      relatedLinks={[
        { href: '/pt/podcast-transcription', label: 'Transcrição de podcasts' },
        { href: '/pt/business-transcription', label: 'Transcrição empresarial' },
        { href: '/pt/transcribe-mp3-to-text', label: 'MP3 em texto' },
        { href: '/pt', label: 'Todos os formatos' },
      ]}
    />
  )
}
