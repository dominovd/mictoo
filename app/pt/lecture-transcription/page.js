import UseCaseLayout from '@/components/UseCaseLayout'

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
  title: 'Transcrição de Aulas e Seminários | Mictoo',
  description:
    'Carregue uma aula, palestra ou seminário gravado e obtenha texto pesquisável, marcas de tempo, um resumo de IA e arquivos de exportação.',
  alternates: {
    canonical: 'https://mictoo.com/pt/lecture-transcription',
    languages: LANGS,
  },
  openGraph: {
    title: 'Transcrição de Aulas: Gerador de Transcrições Gratuito | Mictoo',
    description: 'Carregue sua aula ou seminário gravado e obtenha texto limpo em segundos.',
    url: 'https://mictoo.com/pt/lecture-transcription',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transcrição de Aulas: Gerador Gratuito',
    description: 'Carregue a gravação da sua aula ou seminário.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function PtLectureTranscriptionPage() {
  return (
    <UseCaseLayout
      locale="pt"
      badge="Estudantes · Académicos · Gratuito"
      h1First="Transcrição de Aulas"
      h1Second="Transcrições gratuitas para aulas e seminários"
      subtitle="Carregue sua palestra gravada do Zoom, Panopto, YouTube, Kaltura ou do seu telefone. Obtenha uma transcrição pesquisável com marcas de tempo pronta para notas de estudo, revisão e citação."
      currentHref="/pt/lecture-transcription"

      platforms={[
        { name: 'Zoom',      iconKey: 'videoCameraFill', brandBg: '#2D8CFF', href: '/pt/zoom-transcription' },
        { name: 'YouTube',   iconKey: 'videoCameraFill', brandBg: '#FF0000' },
        { name: 'Panopto',   iconKey: 'cap',             brandBg: '#014A96' },
        { name: 'Kaltura',   iconKey: 'cap',             brandBg: '#FA6425' },
        { name: 'Camtasia',  iconKey: 'videoCameraFill', brandBg: '#00A651' },
        { name: 'Voice Memo',iconKey: 'mic',             brandBg: '#F97316', href: '/pt/voice-memo-to-text' },
      ]}

      howItWorksTitle="Como funciona a transcrição de aulas"
      steps={[
        {
          icon: 'folder',
          title: 'Exporte a aula',
          desc: 'Baixe do Panopto/Kaltura, salve do Zoom cloud ou grave no seu telefone durante a aula.',
        },
        {
          icon: 'upload',
          title: 'Solte o arquivo aqui',
          desc: 'MP3, MP4, M4A, WAV, MOV funcionam todos. Aulas longas são divididas automaticamente quando você está logado.',
        },
        {
          icon: 'editPen',
          title: 'Notas, resumo, citações',
          desc: 'Transcrição pesquisável com marcas de tempo, resumo de IA, DOCX para notas de estudo. Converse com a transcrição para se preparar para os exames.',
        },
      ]}

      exampleTitle="Exemplo de transcrição de aula"
      exampleFileName="intro-microeconomics-lecture-08.mp4"
      exampleDurationLabel="47:32"
      exampleLines={[
        { t: '0:00',  line: 'Tudo bem. Na semana passada, terminamos com o conceito de excedente do consumidor. Hoje, vamos construir sobre isso com o excedente do produtor.' },
        { t: '0:11',  line: 'O excedente do produtor é a diferença entre o que um produtor aceitaria por um bem e o que realmente recebe.' },
        { t: '0:23',  line: 'Juntos, o excedente do consumidor mais o excedente do produtor nos dá o bem-estar total em um mercado antes de introduzirmos impostos ou controles de preços.' },
        { t: '0:35',  line: 'Agora, por que nos importamos com esse conceito na prática? Porque nos permite avaliar se a política torna um mercado melhor ou pior.' },
        { t: '0:47',  line: 'Considere um imposto por unidade. Ele desloca a curva de oferta para cima pelo valor do imposto, e ambos os excedentes diminuem.' },
        { t: '0:58',  line: 'A lacuna que aparece entre o que os compradores pagam e o que os vendedores recebem é o que chamamos de perda de peso morto.' },
        { t: '1:08',  line: 'Por favor, abra o caderno na página trinta e um, e vamos trabalhar juntos em um exemplo numérico.' },
      ]}
      summaryPoints={[
        'Recapitulação: excedente do consumidor da aula anterior.',
        'Novo conceito: excedente do produtor e bem-estar total.',
        'Aplicado à análise de tributação.',
        'Perda de peso morto ilustrada numericamente.',
      ]}
      actionItems={[
        'Revise a página 31 do caderno',
        'Pratique o cálculo da perda de peso morto',
        'Leia o capítulo 4 antes de quinta-feira',
      ]}

      whyTitle="Por que escolher Mictoo para transcrição de aulas"
      whyCards={[
        {
          icon: 'search',
          title: 'Pesquisável dentro da transcrição',
          desc: 'Ctrl-F qualquer conceito da aula de 45 minutos em um segundo. Melhor do que procurar no vídeo.',
        },
        {
          icon: 'sparkles',
          title: 'Resumo de IA para notas de revisão',
          desc: 'O resumo é um bom ponto de partida para revisão. Corte o que você já sabe, mantenha o que perdeu.',
        },
        {
          icon: 'chat',
          title: 'Converse com a aula',
          desc: 'Faça perguntas sobre o material para se preparar para os exames. Respostas no estilo RAG citam a marca de tempo exata.',
        },
        {
          icon: 'globe',
          title: 'Traduza para estudantes não nativos',
          desc: 'A aula é em inglês, mas você estuda em português? Tradução com um clique para mais de 50 idiomas.',
        },
      ]}

      scenariosTitle="Cenários comuns de aulas"
      scenarios={[
        { icon: 'book',      title: 'Aula universitária' },
        { icon: 'cap' ,      title: 'Curso online' },
        { icon: 'search',    title: 'Revisão para exame' },
        { icon: 'editPen',   title: 'Notas de estudo' },
        { icon: 'globe',     title: 'Estudante não nativo' },
        { icon: 'headset',   title: 'Seminário gravado' },
      ]}

      tipsTitle="Dicas para transcrições de aula mais limpas"
      tips={[
        'Sente-se perto da frente e use seu telefone como um microfone de backup.',
        'Aulas longas acima de 60 MB são divididas automaticamente quando você faz login.',
        'Defina o idioma explicitamente para conteúdo técnico ou não inglês.',
        'Use o Chat para fazer perguntas de acompanhamento após a transcrição.',
      ]}

      guidesTitle="Ferramentas de aprendizado relacionadas"
      guides={[
        { href: '/pt/zoom-transcription',        icon: 'video', title: 'Transcrição de aula do Zoom',      desc: 'Download da gravação na nuvem' },
        { href: '/pt/youtube-to-text',           icon: 'video', title: 'Transcrição de aula do YouTube',   desc: 'Cole a URL ou carregue' },
        { href: '/pt/voice-memo-to-text',        icon: 'mic',   title: 'Gravação do telefone',   desc: 'iPhone Voice Memo na aula' },
        { href: '/pt/timestamped-transcription', icon: 'file',  title: 'Notas com marcas de tempo', desc: 'Exportações alinhadas ao tempo' },
      ]}

      faq={[
        {
          q: 'Posso transcrever uma gravação de aula do Zoom?',
          a: 'Sim. Baixe o MP4 ou M4A da gravação na nuvem e solte aqui. Veja o guia do Zoom para o caminho exato de download.',
        },
        {
          q: 'Minha aula tem mais de 60 MB. E agora?',
          a: 'Faça login para habilitar a divisão automática (até cerca de 3 horas). Ou reduza o tamanho para MP3 mono de 64 kbps com ffmpeg para uma redução de tamanho de 5x.',
        },
        {
          q: 'O Mictoo transcreve aulas em idiomas não ingleses?',
          a: 'Sim. O Whisper large-v3 suporta mais de 50 idiomas. Defina o idioma explicitamente para vocabulário técnico ou sotaques fortes.',
        },
        {
          q: 'Posso pesquisar dentro da transcrição?',
          a: 'Sim. A visualização do leitor inclui uma caixa de pesquisa com contagem de correspondências e realce. Ctrl-F seu termo e pule entre as ocorrências.',
        },
        {
          q: 'Posso fazer perguntas sobre o material da aula?',
          a: 'Sim. Conversar com a transcrição permite que você pergunte "explique a perda de peso morto" ou "quais páginas o professor mencionou". As respostas citam marcas de tempo.',
        },
        {
          q: 'Posso exportar notas de aula como DOCX ou PDF?',
          a: 'Sim. DOCX para qualquer um, PDF e JSON para usuários logados. TXT está sempre disponível.',
        },
        {
          q: 'As gravações de aula são mantidas em seus servidores?',
          a: 'Não. Os streams de áudio vão para o provedor de transcrição, são processados uma vez e são descartados. As transcrições só são salvas se você fizer login.',
        },
      ]}

      ctaHeadline="Transforme aulas em notas de estudo"
      ctaSubtitle="Transcrição pesquisável, resumo de IA, converse com o material. Gratuito por aula."
      ctaButton="Carregar uma aula"

      relatedLinks={[
        { href: '/pt/webinar-transcription',     label: 'Transcrição de Webinar' },
        { href: '/pt/sermon-transcription',      label: 'Transcrição de Sermão' },
        { href: '/pt/voice-memo-to-text',        label: 'Voice Memo para Texto' },
        { href: '/pt/interview-transcription',   label: 'Transcrição de Entrevista' },
        { href: '/pt/meeting-transcription',     label: 'Transcrição de Reunião' },
      ]}
    />
  )
}