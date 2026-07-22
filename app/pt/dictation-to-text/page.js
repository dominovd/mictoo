import UseCaseLayout from '@/components/UseCaseLayout'

export const metadata = {
  title: 'Transcrição de Ditado para Textos de Voz Gravados | Mictoo',
  description:
    'Grave um rascunho de voz, faça o upload do arquivo e obtenha texto editável com timestamps e opções de exportação para o seu fluxo de trabalho de escrita.',
  alternates: {
    canonical: 'https://mictoo.com/pt/dictation-to-text',
    languages: {
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
    },
  },
  openGraph: {
    title: 'Transcrição de Ditado: Grátis | Mictoo',
    description: 'Grave um rascunho por voz, faça o upload do arquivo, obtenha texto limpo.',
    url: 'https://mictoo.com/pt/dictation-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transcrição de Ditado',
    description: 'Escrita por voz para profissionais.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function PtDictationToTextPage() {
  return (
    <UseCaseLayout
      locale="pt"
      badge="Escritores · Profissionais · Grátis"
      h1First="Transcrição de Ditado"
      h1Second="Escrita por voz para quem pensa mais rápido do que digita"
      subtitle="Grave um rascunho com o seu telefone, laptop ou qualquer gravador de voz. Faça o upload do arquivo. Obtenha texto limpo e pontuado pronto para colar no seu editor. Melhor precisão do que a transcrição integrada do telefone para conteúdo longo."
      currentHref="/pt/dictation-to-text"

      platforms={[
        { name: 'iPhone',       iconKey: 'mic',       brandBg: '#0F172A' },
        { name: 'Google Rec',   iconKey: 'mic',       brandBg: '#4285F4' },
        { name: 'Windows Rec',  iconKey: 'mic',       brandBg: '#0078D4' },
        { name: 'QuickTime',    iconKey: 'videoCameraFill', brandBg: '#374151' },
        { name: 'Audacity',     iconKey: 'soundwave', brandBg: '#0B60D6' },
        { name: 'Dragon',       iconKey: 'mic',       brandBg: '#DC2626' },
      ]}

      howItWorksTitle="Como funciona a transcrição de ditado"
      steps={[
        {
          icon: 'folder',
          title: 'Grave o seu rascunho',
          desc: 'Qualquer gravador: gravação de voz do telefone, gravador de voz do laptop ou um aplicativo de ditado dedicado.',
        },
        {
          icon: 'upload',
          title: 'Faça o upload do arquivo aqui',
          desc: 'M4A (iPhone), MP3 (Android), WAV (gravador). Grátis até 25 MB anonimamente, 60 MB com login.',
        },
        {
          icon: 'editPen',
          title: 'Texto limpo, pronto para colar',
          desc: 'Pontuação automática, quebras de frase e formatação. Mude para o modo Editor para ajustes antes da exportação.',
        },
      ]}

      exampleTitle="Exemplo de rascunho ditado"
      exampleFileName="chapter-3-draft.m4a"
      exampleDurationLabel="12:44"
      exampleLines={[
        { t: '0:00',  line: 'Capítulo três. A manhã do julgamento.' },
        { t: '0:06',  line: 'Alex mal havia dormido. Não por ansiedade, exatamente, mas pela estranha calmaria que se segue a uma longa preparação.' },
        { t: '0:20',  line: 'Durante seis meses, cada hora acordada foi consumida pelo caso. E agora, de repente, não havia mais nada a fazer, a não ser aparecer.' },
        { t: '0:36',  line: 'O tribunal ficava a três quarteirões do seu apartamento. Ela caminhou devagar, deixando o ar frio de março penetrar.' },
        { t: '0:50',  line: 'Quando chegou aos degraus da frente, os repórteres já estavam reunidos, esperando por um rosto que reconhecessem.' },
        { t: '1:04',  line: 'Ela manteve a cabeça baixa e passou por eles. Haveria tempo para perguntas depois. Não antes.' },
        { t: '1:18',  line: 'Dentro, o saguão estava quase vazio. Alguns funcionários, um zelador e o segurança que ela tinha visto todos os dias daquela semana.' },
      ]}
      summaryPoints={[
        'Abertura do capítulo 3: manhã do julgamento.',
        'Personagem: Alex, protagonista, sem sono, não ansioso.',
        'Cenário: manhã fria de março, tribunal a três quarteirões de distância.',
        'Presença da mídia do lado de fora; saguão vazio por dentro.',
      ]}
      actionItems={[]}

      whyTitle="Por que escolher Mictoo para ditado"
      whyCards={[
        {
          icon: 'target',
          title: 'Projetado para rascunhos gravados',
          desc: 'Grave um rascunho completo primeiro, depois transcreva-o como um único arquivo. Isso mantém o áudio original disponível enquanto você revisa e edita o texto.',
        },
        {
          icon: 'editPen',
          title: 'Editor para limpeza pós-ditado',
          desc: 'Mude para o modo Editor, corrija nomes, adicione quebras de parágrafo e exporte como DOCX pronto para o seu aplicativo de escrita.',
        },
        {
          icon: 'sparkles',
          title: 'Resumo de IA para extração de esboços',
          desc: 'Rascunho sólido para os pontos principais do capítulo, pontos de memória ou estrutura de artigo.',
        },
        {
          icon: 'globe',
          title: 'Ditado em qualquer idioma',
          desc: 'Mais de 50 idiomas com detecção automática. Escritores multilíngues podem mudar de idioma entre gravações sem alterar configurações.',
        },
      ]}

      scenariosTitle="Cenários comuns de ditado"
      scenarios={[
        { icon: 'editPen', title: 'Primeiro rascunho' },
        { icon: 'book',    title: 'Ditado de capítulo' },
        { icon: 'briefcase', title: 'Memorando / e-mail' },
        { icon: 'chat',    title: 'Diário' },
        { icon: 'search',  title: 'Notas de pesquisa' },
        { icon: 'globe',   title: 'Multilíngue' },
      ]}

      tipsTitle="Dicas para um ditado mais limpo"
      tips={[
        'Diga "vírgula", "ponto", "novo parágrafo" se quiser pontuação explícita.',
        'Grave em um ambiente silencioso para que as palavras sejam mais fáceis de distinguir.',
        'Para capítulos longos acima de 60 MB, faça login para auto-dividir.',
        'Revise o modo Editor antes da exportação para nomes e termos técnicos.',
      ]}

      guidesTitle="Ferramentas relacionadas"
      guides={[
        { href: '/pt/voice-memo-to-text',      icon: 'mic',    title: 'Gravação de voz',   desc: 'Captura de ideias, não escrita de rascunhos' },
        { href: '/pt/m4a-to-text',             icon: 'file',   title: 'Formato M4A',   desc: 'Exportações do iPhone / Apple' },
        { href: '/pt/transcribe-mp3-to-text',  icon: 'file',   title: 'Formato MP3',   desc: 'Exportações do gravador Android' },
        { href: '/pt/interview-transcription', icon: 'chat',   title: 'Entrevista',    desc: 'Conversa gravada entre duas pessoas' },
      ]}

      faq={[
        {
          q: 'Como é que o Mictoo é diferente da transcrição ao vivo pelo telefone?',
          a: 'O Mictoo funciona a partir de uma gravação salva em vez de ouvir ao vivo enquanto você digita. Isso torna útil para revisar rascunhos mais longos em relação ao áudio original, sujeito aos limites atuais de tamanho de arquivo e duração.',
        },
        {
          q: 'Posso ditar termos técnicos ou médicos?',
          a: 'O Whisper lida bem com vocabulário técnico comum. Para termos raros ou proprietários, use o modo Editor após a transcrição para corrigir quaisquer erros. Mais rápido do que ditar e corrigir novamente inline.',
        },
        {
          q: 'Qual é o limite de tamanho de arquivo para ditado?',
          a: '25 MB anonimamente, 60 MB quando logado. Uma gravação de voz de 60 minutos a uma taxa de bits típica é de 20-30 MB, então a maioria das sessões de ditado se encaixa no limite gratuito.',
        },
        {
          q: 'O Mictoo adiciona pontuação automaticamente?',
          a: 'Sim. Frases e parágrafos são detectados a partir do ritmo da fala. Diga "vírgula" ou "ponto" se quiser pontuação explícita em um ponto específico.',
        },
        {
          q: 'Posso editar a transcrição antes de exportar?',
          a: 'Sim. Mude para o modo Editor para editar qualquer palavra ou linha inline. Salve as alterações e exporte como TXT, DOCX ou PDF (com login).',
        },
        {
          q: 'Posso traduzir meu rascunho ditado?',
          a: 'Sim. Escolha um idioma de destino e clique em Traduzir. Útil para escritores que produzem em um segundo idioma, ou tradutores que redigem uma versão de trabalho.',
        },
        {
          q: 'As gravações de ditado são armazenadas nos seus servidores?',
          a: 'Não. O áudio é transmitido para o provedor de transcrição, processado uma vez e descartado. Apenas a transcrição persiste se você fizer login e salvá-la.',
        },
      ]}

      ctaHeadline="Transforme rascunhos falados em texto"
      ctaSubtitle="Capítulo, memorando, artigo, entrada de diário. Mais rápido do que digitar quando você já sabe o que quer dizer."
      ctaButton="Faça o upload de um ditado"

      relatedLinks={[
        { href: '/pt/voice-memo-to-text',      label: 'Gravação de Voz para Texto' },
        { href: '/pt/interview-transcription', label: 'Transcrição de Entrevista' },
        { href: '/pt/lecture-transcription',   label: 'Transcrição de Aula' },
        { href: '/pt/m4a-to-text',             label: 'M4A para Texto' },
        { href: '/pt/transcribe-mp3-to-text',  label: 'MP3 para Texto' },
      ]}
    />
  )
}