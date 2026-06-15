import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/dictation-to-text',
  'fr': 'https://mictoo.com/fr/dictation-to-text',
  'de': 'https://mictoo.com/de/dictation-to-text',
  'es': 'https://mictoo.com/es/dictation-to-text',
  'ru': 'https://mictoo.com/ru/dictation-to-text',
  'it': 'https://mictoo.com/it/dictation-to-text',
  'pt': 'https://mictoo.com/pt/dictation-to-text',
  'pl': 'https://mictoo.com/pl/dictation-to-text',
  'ja': 'https://mictoo.com/ja/dictation-to-text',
  'ko': 'https://mictoo.com/ko/dictation-to-text',
  'x-default': 'https://mictoo.com/dictation-to-text',
}

export const metadata = {
  title: 'Ditado em texto — Transcrição grátis de ditado por voz | Mictoo',
  description: 'Converta gravações de ditado em texto grátis. Ideal para escritores, médicos, advogados e pesquisadores. Suporta MP3, M4A, WAV. Sem cadastro.',
  alternates: { canonical: 'https://mictoo.com/pt/dictation-to-text', languages: LANGS },

  openGraph: {
    title: "Ditado em texto — Transcrição grátis de ditado por voz | Mictoo",
    description: "Converta gravações de ditado em texto grátis. Ideal para escritores, médicos, advogados e pesquisadores. Suporta MP3, M4A, WAV. Sem cadastro.",
    url: "https://mictoo.com/pt/dictation-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ditado em texto — Transcrição grátis de ditado por voz | Mictoo",
    description: "Converta gravações de ditado em texto grátis. Ideal para escritores, médicos, advogados e pesquisadores. Suporta MP3, M4A, WAV. Sem cadastro.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function PtDictationPage() {
  return (
    <LandingLayout
      badge="Ditado · Voz → Texto · Grátis"
      h1={<>Ditado em texto<br /><span className="text-brand-600">Transcrição grátis de ditado por voz</span></>}
      subtitle="Grave seus pensamentos, dite um capítulo ou faça anotações — depois envie o arquivo aqui para uma transcrição em texto precisa. Sem cadastro, sem app para instalar."
      defaultLanguage="pt"
      valueBlock={
        <>
          <p>Ditado gravado não se comporta como uma reunião. Ele costuma ter ideias longas, pausas, correções e frases que depois viram rascunho.</p>
          <p>O Mictoo permite gravar primeiro, pensar sem pressão e converter depois o áudio em texto editável.</p>
        </>
      }
      howItWorks={[
        { title: 'Grave seu ditado', desc: 'Use celular, gravador ou qualquer app de voz.' },
        { title: 'Envie o áudio', desc: 'O Mictoo transcreve e mantém uma estrutura fácil de revisar.' },
        { title: 'Transforme em rascunho', desc: 'Edite frases, títulos, listas e notas até virar texto utilizável.' },
      ]}
      whyUse={{
        title: 'Por que Mictoo para ditados',
        bullets: [
          { title: 'Sem pressão em tempo real', desc: 'Você pode falar, pausar e retomar antes de editar.' },
          { title: 'Bom para ideias longas', desc: 'Transforma pensamentos completos em primeiro rascunho.' },
          { title: 'Útil com sotaques e idiomas', desc: 'Selecione o idioma quando a detecção automática tiver pouco contexto.' },
          { title: 'Edição posterior simples', desc: 'Corrija pontuação, nomes e seções no texto.' },
        ],
      }}
      useCases={{
        title: 'O que ditar',
        items: [
          { title: 'Artigos', desc: 'Fale um esboço e transforme em primeiro rascunho.' },
          { title: 'Notas de chamadas', desc: 'Resuma decisões logo depois de uma conversa.' },
          { title: 'Capítulos ou ideias de livro', desc: 'Capture texto longo quando digitar quebra o ritmo.' },
          { title: 'Notas profissionais', desc: 'Documente visitas, tarefas ou relatórios enquanto estão frescos.' },
        ],
      }}
      proTips={{
        title: 'Dicas para ditar melhor',
        tips: [
          { title: 'Fale em frases completas', desc: 'Pontuação e edição ficam melhores com ideias fechadas.' },
          { title: 'Pause entre seções', desc: 'Depois será mais fácil separar parágrafos e títulos.' },
          { title: 'Diga marcadores em voz alta', desc: 'Frases como “ponto um” ou “nova seção” ajudam na edição.' },
        ],
      }}
      faq={[
        { q: 'Como gravar um ditado no celular?', a: 'iPhone: app Voice Memos — export em .m4a. Android: gravador integrado ou Easy Voice Recorder — export em .mp3 ou .m4a. Envie o arquivo ao Mictoo.' },
        { q: 'O Mictoo é uma ferramenta de ditado em tempo real?', a: 'Não — o Mictoo transcreve arquivos de áudio existentes. Para ditado em tempo real (falar e ver o texto aparecer) use o ditado integrado do sistema operacional (macOS, Windows, iOS, Android). Use o Mictoo depois para limpar gravações longas.' },
        { q: 'Quão precisa é a transcrição do ditado?', a: 'Um ditado limpo com um único orador é transcrito tipicamente com 95%+ de precisão. Fale em ritmo natural, em ambiente silencioso, e use fone de ouvido para melhores resultados.' },
        { q: 'Posso usar para ditado médico ou jurídico?', a: 'Sim, mas verifique a regulamentação local sobre processamento IA de dados de pacientes ou clientes. O Mictoo não armazena arquivos — mas o áudio passa pelo nosso provedor IA para transcrição. Para fluxos regulamentados (HIPAA, LGPD sensível), consulte sua equipe de compliance.' },
        { q: 'Qual a duração máxima do ditado?', a: 'Até 25 MB. A 64 kbps mono são cerca de 50 minutos de ditado. Para gravações mais longas, divida em capítulos ou reduza o bitrate.' },
      ]}
      relatedLinks={[
        { href: '/pt/voice-memo-to-text', label: 'Memo de voz em texto' },
        { href: '/pt', label: 'Todos os formatos' },
      ]}
    />
  )
}
