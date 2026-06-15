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

  openGraph: {
    title: "Transcrição de sermões — gerador grátis de transcrição | Mictoo",
    description: "Transcreva grátis sermões e áudios de igreja em texto. Ideal para blogs, notas de estudo e acessibilidade. Suporta MP3, MP4, M4A. Sem cadastro.",
    url: "https://mictoo.com/pt/sermon-transcription",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Transcrição de sermões — gerador grátis de transcrição | Mictoo",
    description: "Transcreva grátis sermões e áudios de igreja em texto. Ideal para blogs, notas de estudo e acessibilidade. Suporta MP3, MP4, M4A. Sem cadastro.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function PtSermonPage() {
  return (
    <LandingLayout
      badge="Sermões · Igreja · Grátis"
      h1={<>Transcrição de sermões<br /><span className="text-brand-600">Gerador grátis de transcrição</span></>}
      subtitle="Transforme gravações de sermões em texto limpo em segundos. Ideal para blogs de igreja, guias de estudo, posts para redes sociais e para tornar as mensagens acessíveis a pessoas com deficiência auditiva."
      defaultLanguage="pt"
      valueBlock={
        <>
          <p>Um sermão transcrito pode virar notas para a igreja, legendas do YouTube, material de pequenos grupos, citações e um arquivo pesquisável.</p>
          <p>O Mictoo ajuda a transformar áudio ou vídeo do culto em texto editável para publicar, revisar e reutilizar.</p>
        </>
      }
      howItWorks={[
        { title: 'Envie o áudio do sermão', desc: 'Use MP3, WAV, M4A ou vídeo exportado do culto.' },
        { title: 'Receba um rascunho', desc: 'O Mictoo gera transcrição com timestamps para revisar passagens e nomes.' },
        { title: 'Publique ou reutilize', desc: 'Exporte texto para site, notas, legendas ou arquivo interno.' },
      ]}
      whyUse={{
        title: 'Por que transcrever sermões',
        bullets: [
          { title: 'Acessibilidade', desc: 'Ajuda pessoas que preferem ler ou precisam de apoio escrito.' },
          { title: 'Reuso de conteúdo', desc: 'Transforme mensagens em posts, boletins, devocionais ou citações.' },
          { title: 'Arquivo pesquisável', desc: 'Encontre temas, séries e referências bíblicas mais rápido.' },
          { title: 'Apoio ao time de mídia', desc: 'Facilita legendas e descrições para vídeos.' },
        ],
      }}
      useCases={{
        title: 'Usos para igrejas',
        items: [
          { title: 'Página do sermão', desc: 'Publique o texto junto com áudio ou vídeo.' },
          { title: 'Legendas do YouTube', desc: 'Crie uma base para captions e revisão manual.' },
          { title: 'Material de grupo', desc: 'Extraia perguntas, pontos principais e citações.' },
          { title: 'Séries pregadas', desc: 'Pesquise temas repetidos em meses ou anos de mensagens.' },
        ],
      }}
      proTips={{
        title: 'Dicas para sermões',
        tips: [
          { title: 'Extraia áudio de vídeos grandes', desc: 'Enviar apenas a faixa de voz costuma ser mais rápido.' },
          { title: 'Revise nomes bíblicos', desc: 'Nomes próprios e referências podem precisar de correção.' },
          { title: 'Divida conferências longas', desc: 'Um arquivo por sessão facilita revisão e publicação.' },
        ],
      }}
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
