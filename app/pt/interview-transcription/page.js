import UseCaseLayout from '@/components/UseCaseLayout'

export const metadata = {
  title: 'Transcrição de Entrevista para Áudio e Vídeo | Mictoo',
  description:
    'Carregue uma gravação de entrevista e obtenha texto com carimbo de tempo, um resumo da IA e exportações para relatórios, pesquisa ou revisão.',
  alternates: {
    canonical: 'https://mictoo.com/pt/interview-transcription',
    languages: {
      'en': 'https://mictoo.com/interview-transcription',
      'fr': 'https://mictoo.com/fr/interview-transcription',
      'de': 'https://mictoo.com/de/interview-transcription',
      'es': 'https://mictoo.com/es/interview-transcription',
      'ru': 'https://mictoo.com/ru/interview-transcription',
      'it': 'https://mictoo.com/it/interview-transcription',
      'pt': 'https://mictoo.com/pt/interview-transcription',
      'pl': 'https://mictoo.com/pl/interview-transcription',
      'ja': 'https://mictoo.com/ja/interview-transcription',
      'ko': 'https://mictoo.com/ko/interview-transcription',
      'x-default': 'https://mictoo.com/interview-transcription',
    },
  },
  openGraph: {
    title: 'Ferramenta Gratuita de Transcrição de Entrevistas | Mictoo',
    description: 'Transcrição de entrevistas gratuita com IA. Carregue áudio ou vídeo, obtenha uma transcrição limpa em minutos.',
    url: 'https://mictoo.com/pt/interview-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transcrição de Entrevista Gratuita',
    description: 'Carregue áudio ou vídeo, obtenha uma transcrição limpa em minutos.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function PtInterviewTranscriptionPage() {
  return (
    <UseCaseLayout
      locale="pt"
      badge="Jornalistas · Pesquisadores · UX · Gratuito"
      h1First="Transcrição de Entrevista"
      h1Second="Ferramenta gratuita para jornalistas, pesquisadores e equipas de UX"
      subtitle="Carregue uma entrevista 1:1 ou em painel de qualquer gravador ou aplicação de reunião. Obtenha uma transcrição limpa, com carimbo de tempo, resumo da IA e exportações prontas para o artigo, trabalho ou repositório de pesquisa."
      currentHref="/pt/interview-transcription"

      platforms={[
        { name: 'Zoom',        iconKey: 'videoCameraFill', brandBg: '#2D8CFF', href: '/pt/zoom-transcription' },
        { name: 'Google Meet', iconKey: 'videoCameraFill', brandBg: '#00832D', href: '/pt/google-meet-transcription' },
        { name: 'MS Teams',    iconKey: 'videoCameraFill', brandBg: '#4B53BC', href: '/pt/teams-meeting-transcription' },
        { name: 'Riverside',   iconKey: 'waveMic',         brandBg: '#4B2AF7' },
        { name: 'Voice Memo',  iconKey: 'mic',             brandBg: '#F97316', href: '/pt/voice-memo-to-text' },
        { name: 'Phone call',  iconKey: 'phone',           brandBg: '#0EA5A4' },
      ]}

      howItWorksTitle="Como funciona a transcrição de entrevistas"
      steps={[
        {
          icon: 'folder',
          title: 'Exporte sua entrevista',
          desc: 'Qualquer gravação serve. Gravação de voz, gravação em nuvem do Zoom, faixa de áudio do Riverside, exportação de chamada telefónica.',
        },
        {
          icon: 'upload',
          title: 'Coloque o arquivo aqui',
          desc: 'Carregue MP3, MP4, M4A, WAV, MOV ou qualquer formato comum de áudio e vídeo até 60 MB.',
        },
        {
          icon: 'editPen',
          title: 'Transcrição, citações, exportações',
          desc: 'Transcrição com carimbo de tempo, resumo da IA, exportações em TXT / SRT / VTT / DOCX. Pronto para o artigo ou trabalho de pesquisa.',
        },
      ]}

      exampleTitle="Exemplo de transcrição de entrevista"
      exampleFileName="researcher-interview.m4a"
      exampleDurationLabel="42:18"
      exampleLines={[
        { t: '0:00',  line: 'Obrigado por dedicar o seu tempo. Poderia começar por descrever o seu papel e há quanto tempo está nele.' },
        { t: '0:08',  line: 'Claro. Eu lidero a equipa de análise numa fintech de médio porte, e estou neste papel há pouco mais de dois anos.' },
        { t: '0:20',  line: 'Antes disso, estive num banco maior, a trabalhar principalmente em retenção de clientes e modelagem de valor de vida.' },
        { t: '0:32',  line: 'Portanto, a mudança de um grande banco para uma fintech foi principalmente sobre o ritmo e a liberdade de experimentar novas coisas.' },
        { t: '0:44',  line: 'E as ferramentas evoluíram muito. O que antes levava uma semana na antiga estrutura agora leva uma tarde.' },
        { t: '0:56',  line: 'Pode dar-me um exemplo desse tipo de mudança? Algo concreto que não teria tentado antes.' },
        { t: '1:04',  line: 'O óbvio é os experimentos de coorte em tempo real. Enviamos uma ideia de manhã e vemos dados significativos até àquela noite.' },
      ]}
      summaryPoints={[
        'Líder de análise na fintech, mais de 2 anos no papel.',
        'Papel anterior em grande banco focado em modelagem de retenção.',
        'Mudança para fintech impulsionada pelo ritmo e liberdade de experimentar.',
        'Experimentos de coorte em tempo real possíveis com ferramentas modernas.',
      ]}
      actionItems={[
        'Acompanhar a comparação de modelagem de retenção',
        'Pedir exemplo de experimento de coorte em tempo real',
        'Obter introdução ao contacto do empregador anterior',
      ]}

      whyTitle="Por que escolher Mictoo para transcrição de entrevistas"
      whyCards={[
        {
          icon: 'target',
          title: 'Reveja nomes e substantivos próprios',
          desc: 'Use os carimbos de tempo para verificar nomes, cidades, organizações e termos especializados contra a gravação original da entrevista.',
        },
        {
          icon: 'sparkles',
          title: 'Resumo da IA e extração de citações',
          desc: 'O resumo da IA é um bom primeiro rascunho para a lista de citações, o memorando de pesquisa ou a introdução do artigo.',
        },
        {
          icon: 'lock',
          title: 'Modelo de processamento claro',
          desc: 'A gravação é enviada a um fornecedor de transcrição para processamento e não é retida pela Mictoo após a conclusão do trabalho.',
        },
        {
          icon: 'globe',
          title: 'Traduza para trabalho em várias línguas',
          desc: 'Entrevista realizada em espanhol, alemão ou japonês. Traduza para a sua língua de trabalho com um clique.',
        },
      ]}

      scenariosTitle="Cenários comuns de entrevistas"
      scenarios={[
        { icon: 'chat',      title: 'Jornalismo' },
        { icon: 'search',    title: 'Pesquisa UX' },
        { icon: 'users',     title: 'Recrutamento' },
        { icon: 'book',      title: 'História oral' },
        { icon: 'briefcase', title: 'Depoimento legal' },
        { icon: 'globe',     title: 'Multilingue' },
      ]}

      tipsTitle="Dicas para transcrições de entrevistas mais limpas"
      tips={[
        'Grave com um microfone de lapela ou portátil perto do sujeito.',
        'Peça ao sujeito para pausar brevemente entre respostas longas.',
        'Defina a língua explicitamente para não inglês ou acentos fortes.',
        'Revise nomes e termos incomuns após a transcrição.',
      ]}

      guidesTitle="Escolha o guia do gravador certo"
      guides={[
        { href: '/pt/zoom-transcription',        icon: 'video', title: 'Entrevista Zoom',    desc: 'Gravação em nuvem MP4 ou M4A' },
        { href: '/pt/google-meet-transcription', icon: 'video', title: 'Entrevista Meet',    desc: 'Download da gravação do Drive' },
        { href: '/pt/voice-memo-to-text',        icon: 'mic',   title: 'Gravação de Voz do iPhone', desc: 'Qualquer gravação de voz em M4A' },
        { href: '/pt/podcast-transcription',     icon: 'headset', title: 'Estilo de Podcast',   desc: 'Riverside, Zencastr, Cleanfeed' },
      ]}

      faq={[
        {
          q: 'Quais formatos de arquivo a Mictoo aceita para entrevistas?',
          a: 'MP3, MP4, M4A, WAV, MOV, WEBM, FLAC, OGG, AAC e a maioria dos outros formatos comuns de áudio e vídeo. Os arquivos de vídeo são automaticamente demuxados no servidor.',
        },
        {
          q: 'A Mictoo identifica quem está a falar?',
          a: 'Não. A transcrição atual é texto contínuo com carimbos de tempo por linha e sem rótulos automáticos de "Entrevistador / Sujeito".',
        },
        {
          q: 'A transcrição de entrevistas é gratuita?',
          a: 'Sim. Gratuita por arquivo até 25 MB anonimamente, 60 MB para utilizadores autenticados. Entrevistas mais longas podem ser divididas automaticamente para utilizadores autenticados.',
        },
        {
          q: 'Posso redigir nomes antes de publicar a transcrição?',
          a: 'Sim. Mude para o modo Editor após a transcrição para editar qualquer palavra ou linha. Salve a versão editada e exporte.',
        },
        {
          q: 'As gravações são mantidas nos seus servidores?',
          a: 'Não. Os fluxos de áudio são enviados ao fornecedor de transcrição, processados uma vez e descartados. As transcrições são armazenadas apenas se você fizer login.',
        },
        {
          q: 'Posso traduzir a transcrição da entrevista?',
          a: 'Sim. Escolha uma língua-alvo e clique em Traduzir. Útil para pesquisa de campo em várias línguas ou relatórios multilingues.',
        },
        {
          q: 'Quais formatos de exportação estão disponíveis?',
          a: 'TXT, SRT, VTT, DOCX. Utilizadores autenticados também obtêm PDF e JSON. Os carimbos de tempo em SRT e VTT alinham-se com a gravação original.',
        },
      ]}

      ctaHeadline="Transforme entrevistas em texto publicável"
      ctaSubtitle="Carregue sua gravação e obtenha uma transcrição, resumo e exportações prontas para o artigo ou repositório de pesquisa."
      ctaButton="Carregar uma entrevista"

      relatedLinks={[
        { href: '/pt/meeting-transcription',      label: 'Transcrição de Reuniões' },
        { href: '/pt/podcast-transcription',      label: 'Transcrição de Podcast' },
        { href: '/pt/voice-memo-to-text',         label: 'Gravação de Voz para Texto' },
        { href: '/pt/business-transcription',     label: 'Transcrição de Negócios' },
        { href: '/pt/lecture-transcription',      label: 'Transcrição de Aulas' },
      ]}
    />
  )
}