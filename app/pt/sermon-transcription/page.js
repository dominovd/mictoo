import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/sermon-transcription',
  'fr': 'https://mictoo.com/fr/sermon-transcription',
  'de': 'https://mictoo.com/de/sermon-transcription',
  'es': 'https://mictoo.com/es/sermon-transcription',
  'ru': 'https://mictoo.com/ru/sermon-transcription',
  'it': 'https://mictoo.com/it/sermon-transcription',
  'pt': 'https://mictoo.com/pt/sermon-transcription',
  'pl': 'https://mictoo.com/pl/sermon-transcription',
  'ja': 'https://mictoo.com/ja/sermon-transcription',
  'ko': 'https://mictoo.com/ko/sermon-transcription',
  'x-default': 'https://mictoo.com/sermon-transcription',
}

export const metadata = {
  title: 'Transcrição de sermões — gerador grátis de transcrição | Mictoo',
  description: 'Transcreva grátis sermões e áudios de igreja em texto. Ideal para blogs, notas de estudo e acessibilidade. Suporta MP3, MP4, M4A. Sem cadastro.',
  alternates: { canonical: 'https://mictoo.com/pt/sermon-transcription', languages: LANGS },
}

export default function PtSermonPage() {
  return (
    <LandingLayout
      badge="Sermões · Igreja · Grátis"
      h1={<>Transcrição de sermões<br /><span className="text-brand-600">Gerador grátis de transcrição</span></>}
      subtitle="Transforme gravações de sermões em texto limpo em segundos. Ideal para blogs de igreja, guias de estudo, posts para redes sociais e para tornar as mensagens acessíveis a pessoas com deficiência auditiva."
      defaultLanguage="pt"
      features={[
        { icon: '📖', title: 'Reutilize cada sermão', desc: 'Transforme um sermão em post de blog, devocional, newsletter, guia de estudo e citações prontas para redes sociais. Amplie seu alcance sem trabalho extra.' },
        { icon: '♿', title: 'Acessibilidade', desc: 'Ofereça transcrições para que membros surdos, com deficiência auditiva ou participando remotamente possam vivenciar plenamente a mensagem.' },
        { icon: '🌐', title: 'Multilíngue', desc: 'Funciona com português, inglês, espanhol, coreano, francês, russo e mais de 45 outros idiomas. Ótimo para congregações multilíngues.' },
      ]}
      faq={[
        { q: 'Como transformar uma gravação de sermão em texto?', a: 'Exporte a gravação da mesa de som da igreja, do feed de podcast ou do YouTube como MP3, MP4 ou M4A. Envie o arquivo acima — o Mictoo transcreve em segundos.' },
        { q: 'Posso transcrever sermões do canal YouTube da nossa igreja?', a: 'Sim. Para seu canal: YouTube Studio → Conteúdo → clique no vídeo → Baixar. Envie o arquivo ao Mictoo. Para canais externos é preciso permissão — muitos ministérios compartilham downloads de áudio via feed de podcast.' },
        { q: 'E os versículos bíblicos e nomes próprios?', a: 'A transcrição IA lida bem com versículos e nomes comuns, mas às vezes erra nomes bíblicos raros ou terminologia específica da sua igreja. Corrija no editor do navegador antes do download — geralmente 30 segundos de revisão.' },
        { q: 'Qual a duração máxima do sermão?', a: 'Até 25 MB por arquivo. Um sermão de 30 minutos a 128 kbps cabe confortavelmente. Para mensagens mais longas (45-60 minutos) reduza o bitrate para 64 kbps mono ou divida em duas partes.' },
        { q: 'Os arquivos ficam privados?', a: 'Sim. Sermões são processados e imediatamente excluídos. Não armazenamos áudio nem o conteúdo da transcrição.' },
      ]}
      relatedLinks={[
        { href: '/pt/podcast-transcription', label: 'Transcrição de podcasts' },
        { href: '/pt/lecture-transcription', label: 'Transcrição de aulas' },
        { href: '/pt', label: 'Todos os formatos' },
      ]}
    />
  )
}
