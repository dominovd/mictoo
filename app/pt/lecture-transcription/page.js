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
  'ko': 'https://mictoo.com/ko/lecture-transcription',
  'x-default': 'https://mictoo.com/lecture-transcription',
}

export const metadata = {
  title: 'Transcrição de aula — gerador gratuito IA | Mictoo',
  description:
    'Transcrição grátis de aulas. Envie a gravação de uma aula, curso ou seminário (MP3, M4A, MP4) e receba texto limpo em segundos. Feito para estudantes.',
  alternates: { canonical: 'https://mictoo.com/pt/lecture-transcription', languages: LANGS },

  openGraph: {
    title: "Transcrição de aula — gerador gratuito IA | Mictoo",
    description: "Transcrição grátis de aulas. Envie a gravação de uma aula, curso ou seminário (MP3, M4A, MP4) e receba texto limpo em segundos. Feito para estudantes.",
    url: "https://mictoo.com/pt/lecture-transcription",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Transcrição de aula — gerador gratuito IA | Mictoo",
    description: "Transcrição grátis de aulas. Envie a gravação de uma aula, curso ou seminário (MP3, M4A, MP4) e receba texto limpo em segundos. Feito para estudantes.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function PtLecturePage() {
  return (
    <LandingLayout
      defaultLanguage="pt"
      badge="Estudantes · Acadêmicos · Grátis"
      h1={<>Transcrição de aula<br /><span className="text-brand-600">Ferramenta grátis para transcrições de aula</span></>}
      subtitle="Transforme qualquer aula gravada em texto limpo para estudar. Universidade, curso online, talk de conferência, treinamento profissional. Sem cadastro, sem cobrança por minuto."
      howItWorks={[
        { icon: '🎓', title: 'Solte o áudio ou vídeo da aula', desc: 'MP3 de um gravador de voz, M4A do seu telefone, MP4 de uma aula no Zoom ou de uma gravação de tela de uma aula online. WAV de um gravador de campo. Tudo funciona.' },
        { icon: '⚡', title: 'A IA transcreve', desc: 'O Whisper large-v3 lê o áudio. Uma aula de 60 minutos termina em cerca de um minuto.' },
        { icon: '📋', title: 'Pegue a transcrição', desc: 'Leia, copie nas suas notas ou baixe como TXT ou SRT. Corrija termos técnicos errados inline antes de exportar.' },
      ]}
      whyUse={{ title: 'Por que Mictoo para aulas', bullets: [
        { title: 'Formato longo está ok', desc: 'Até 60 minutos por arquivo após cadastro grátis. Para uma aula de 90 minutos, divida em dois pedaços de 45 minutos. A transcrição é recomponível.' },
        { title: 'Lida com vocabulário técnico melhor que a maioria', desc: 'O Whisper foi treinado em uma variedade vasta de áudio, incluindo aulas acadêmicas. Latim, jargão de especialidade, termos matemáticos, snippets de código frequentemente saem mais limpos do que esperado.' },
        { title: 'Sem custo por aula', desc: 'Para um estudante, pagar transcrição por curso é desperdício. Grátis sem contador por minuto significa que você pode transcrever toda aula de um semestre.' },
        { title: 'Privacidade e copyright', desc: 'O arquivo vai ao provedor de transcrição e é descartado. Não guardamos o áudio. Útil quando você transcreve material que é seu (suas gravações) mas não quer subir para um serviço de armazenamento de terceiros.' },
        { title: 'Mais de 50 idiomas', desc: 'Estudantes internacionais e cursos online em idiomas diferentes do inglês funcionam todos. A detecção automática cobre a maioria dos casos.' },
      ]}}
      useCases={{ title: 'Para que servem as transcrições de aula para estudantes e acadêmicos', items: [
        { title: 'Notas de estudo pesquisáveis', desc: 'Coloque a transcrição em Notion, Obsidian ou um documento Word. Ctrl+F em qualquer termo que o professor citou. Melhor que escanear 90 minutos de áudio.' },
        { title: 'Preparação para prova', desc: 'Escaneie a transcrição enquanto revisa suas notas manuscritas. Pega coisas que você perdeu durante a aula ao vivo.' },
        { title: 'Traduzir aulas para não nativos', desc: 'Transcreva no idioma de origem, depois passe pelo DeepL ou ChatGPT para traduzir. Útil para estudantes seguindo cursos na sua segunda língua.' },
        { title: 'Acessibilidade para estudantes surdos e com deficiência auditiva', desc: 'Uma transcrição ou arquivo SRT fornece o mesmo conteúdo em outra modalidade. Algumas universidades exigem isso para conteúdo didático gravado.' },
        { title: 'Criar flashcards e materiais de estudo', desc: 'Transcrições alimentam cartões Anki, documentos de resumo ou ferramentas de estudo assistidas por IA.' },
      ]}}
      proTips={{ title: 'Dicas para transcrição de aula', tips: [
        { title: 'Em aulas presenciais, sente perto do professor', desc: 'Gravar da última fileira através de ruído de sala produz uma transcrição com muitas lacunas. Telefone na primeira fileira, tela para baixo, captura voz limpa.' },
        { title: 'Para aulas longas, use um gravador de voz dedicado', desc: 'Gravações de telefone têm auto-leveling agressivo e redução de ruído, que prejudicam a transcrição. Um Zoom H1n ou gravador entry-level similar dá áudio notavelmente mais limpo por 80 dólares.' },
        { title: 'Para aulas online, grave o áudio do sistema diretamente', desc: 'O OBS Studio no Windows ou Mac pode gravar o áudio da aula direto do sistema. Mais limpo que gravar através do microfone do laptop.' },
        { title: 'Defina o idioma manualmente', desc: 'A detecção automática normalmente acerta, mas pode ser confundida por warmup do professor em outro idioma. Escolha o idioma da aula explicitamente no menu.' },
        { title: 'Corte os primeiros 5 minutos se forem avisos administrativos', desc: '"Vocês fizeram a tarefa? Leram o capítulo 3?" não é útil para a transcrição. Corte no Audacity antes do upload para economizar o budget de tamanho de arquivo.' },
        { title: 'Para aulas STEM com equações, a transcrição captura a matemática falada, não as equações', desc: 'Expressões matemáticas no quadro não estão no áudio, então não estão na transcrição. Você precisa capturá-las separadamente do mesmo jeito (fotos do quadro, screenshots das slides).' },
        { title: 'Na primeira revisão, reouça a gravação enquanto lê a transcrição', desc: 'É a melhor forma de corrigir termos específicos do professor e referências a equações. Uma vez limpa, a transcrição se sustenta sozinha.' },
      ]}}
      faq={[
        { q: 'É preciso o bastante para trabalhos universitários?', a: 'Para a maior parte do conteúdo de aula, sim. O Whisper large-v3 produz 90-95% de precisão em áudio de aula limpo. Termos técnicos e nomes próprios frequentemente precisam de cleanup. Use a transcrição como nota de estudo, não como fonte canônica para citação.' },
        { q: 'Minha aula não é em inglês. Vai funcionar?', a: 'Sim. O Whisper suporta mais de 50 idiomas com boa precisão nos grandes e suporte básico para muitos outros. Escolha o idioma manualmente no menu para melhores resultados.' },
        { q: 'Minha aula tem 90 minutos. O que faço?', a: 'Divida. Nosso cap é 60 minutos por arquivo. Corte em dois pedaços de 45 minutos num ponto de pausa natural (intervalo para almoço ou transição de tópico).' },
        { q: 'É legal transcrever aulas?', a: 'Para uso pessoal de estudo, em geral sim na maioria das jurisdições, desde que você tenha acesso legal à gravação. Para redistribuição (publicar a transcrição online, vender materiais de estudo) você precisa de permissão do docente ou da instituição. Algumas universidades têm políticas explícitas sobre gravação e transcrição de aulas. Verifique a sua.' },
        { q: 'Posso transcrever uma vídeo-aula de Coursera, edX ou Khan Academy?', a: 'Sim, se você pode baixar o arquivo de vídeo. Algumas plataformas permitem download para visualização offline (você pega um MP4). Suba aqui. Para plataformas que não permitem download, cheque os termos antes de scraping.' },
        { q: 'A transcrição vai conter o conteúdo das slides?', a: 'Não. Transcrevemos só o áudio. Se o professor lê as slides em voz alta, esse texto está na transcrição. Se as slides têm texto na tela que o professor não leu, isso não está na transcrição. Combine com screenshots das slides para notas completas.' },
        { q: 'Quão precisos são termos técnicos e jargão?', a: 'Menos precisos que o vocabulário comum. Para termos médicos em latim, símbolos matemáticos avançados, acrônimos de nicho, espere corrigir manualmente. O fluxo geral da aula vai ser sólido.' },
        { q: 'Posso exportar a transcrição para meu app de notas?', a: 'Sim. Baixe como TXT e cole em Notion, Obsidian, OneNote, Bear ou qualquer ferramenta text-friendly. SRT funciona em video players se você quer legendas ao lado da gravação.' },
        { q: 'O áudio da minha aula é guardado?', a: 'Não. O arquivo vai ao nosso provedor de transcrição, é processado, depois descartado. Não guardamos o áudio.' },
        { q: 'Quanto demora a transcrição de uma aula?', a: 'Cerca de 1-2% da duração do áudio. Uma aula de 60 minutos termina em cerca de 60 segundos. O upload normalmente é a espera mais longa.' },
        { q: 'Posso ter timecode para pular para momentos específicos?', a: 'Sim. Baixe como SRT. Cada linha tem um timecode alinhado ao áudio original. Útil para voltar a um ponto preciso durante a preparação de prova.' },
        { q: 'E se a aula tem um Q&A no fim?', a: 'O Q&A transcreve igual à aula principal. Perguntas do público às vezes vêm menos claras (quem está na sala normalmente está mais longe do microfone), mas a resposta do professor deve estar limpa. Adicione uma seção "Q&A" nas suas notas.' },
      ]}
      relatedLinks={[
        { href: '/pt/transcribe-audio-to-text', label: 'Áudio em texto', desc: 'Para arquivos de áudio genéricos.' },
        { href: '/pt/transcribe-video-to-text', label: 'Vídeo em texto', desc: 'Para vídeo-aulas (MP4, MOV).' },
        { href: '/pt/timestamped-transcription', label: 'Transcrição com timecode', desc: 'Para pular para momentos específicos.' },
        { href: '/pt/how-to-split-audio', label: 'Dividir áudio', desc: 'Para aulas acima de 60 minutos.' },
      ]}
    />
  )
}
