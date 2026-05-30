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
      features={[
        { icon: '📝', title: 'Para escritores e pesquisadores', desc: 'Dite um rascunho de capítulo, um esquema de artigo ou notas de entrevista. O Mictoo converte sua voz em texto limpo e editável em segundos.' },
        { icon: '👨‍⚕️', title: 'Para médicos e advogados', desc: 'Dite notas de caso, resumos de pacientes ou memorandos do seu telefone e converta em texto para seus registros. Os arquivos são processados e excluídos imediatamente.' },
        { icon: '🌍', title: '50+ idiomas', desc: 'Dite em português, inglês, espanhol, francês, alemão, japonês e muitos outros. O idioma é detectado automaticamente; pode ser substituído se necessário.' },
      ]}
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
