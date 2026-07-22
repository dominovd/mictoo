import FormatPageLayout from '@/components/FormatPageLayout'

export const metadata = {
  title: 'MP3 para Texto: Transcrição Online Gratuita de MP3 para Podcasts e Gravações de Voz | Mictoo',
  description:
    'Transcreva arquivos de áudio MP3 com timestamps, resumo de IA e exportações. Otimizado para podcasts, notas de voz e áudio baixado. Coloque o seu MP3, obtenha o texto em segundos.',
  alternates: {
    canonical: 'https://mictoo.com/pt/transcribe-mp3-to-text',
    languages: {
      'en': 'https://mictoo.com/transcribe-mp3-to-text',
      'fr': 'https://mictoo.com/fr/transcribe-mp3-to-text',
      'de': 'https://mictoo.com/de/transcribe-mp3-to-text',
      'es': 'https://mictoo.com/es/transcribe-mp3-to-text',
      'ru': 'https://mictoo.com/ru/transcribe-mp3-to-text',
      'it': 'https://mictoo.com/it/transcribe-mp3-to-text',
      'pt': 'https://mictoo.com/pt/transcribe-mp3-to-text',
      'pl': 'https://mictoo.com/pl/transcribe-mp3-to-text',
      'ja': 'https://mictoo.com/ja/transcribe-mp3-to-text',
      'ko': 'https://mictoo.com/ko/transcribe-mp3-to-text',
      'x-default': 'https://mictoo.com/transcribe-mp3-to-text',
    },
  },
  openGraph: {
    title: 'MP3 para Texto: Transcrição Online Gratuita de MP3 | Mictoo',
    description: 'Coloque o seu podcast MP3 ou gravação de voz, obtenha uma transcrição com resumo em segundos.',
    url: 'https://mictoo.com/pt/transcribe-mp3-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MP3 para Texto: Transcrição Online Gratuita de MP3',
    description: 'Coloque o seu MP3, obtenha uma transcrição.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

const LANGS = {
  'en': 'https://mictoo.com/transcribe-mp3-to-text',
  'fr': 'https://mictoo.com/fr/transcribe-mp3-to-text',
  'de': 'https://mictoo.com/de/transcribe-mp3-to-text',
  'es': 'https://mictoo.com/es/transcribe-mp3-to-text',
  'ru': 'https://mictoo.com/ru/transcribe-mp3-to-text',
  'it': 'https://mictoo.com/it/transcribe-mp3-to-text',
  'pt': 'https://mictoo.com/pt/transcribe-mp3-to-text',
  'pl': 'https://mictoo.com/pl/transcribe-mp3-to-text',
  'ja': 'https://mictoo.com/ja/transcribe-mp3-to-text',
  'ko': 'https://mictoo.com/ko/transcribe-mp3-to-text',
  'x-default': 'https://mictoo.com/transcribe-mp3-to-text',
}

export default function PtTranscribeMp3ToTextPage() {
  return (
    <FormatPageLayout
      locale="pt"
      badge="MP3 · Amigável para Podcasts · Gratuito"
      h1First="MP3 para Texto"
      h1Second="Para podcasts, notas de voz e entrevistas"
      subtitle="MP3 é um formato comum para podcasts e gravações de voz. Coloque o seu episódio, nota de voz ou entrevista baixada e obtenha uma transcrição com timestamps, resumo de IA e exportações limpas para notas do programa."
      highlightFormat="mp3"
      previewFileName="episódio-podcast.mp3"
      previewWordCount={182}
      previewDurationLabel="28:14"
      previewLines={[
        { t: '0:00',  line: 'Bem-vindo de volta ao programa. Hoje estamos a falar sobre o estado do podcasting independente em 2026.' },
        { t: '0:07',  line: 'O meu convidado tem um programa semanal há oito anos sem perder um episódio.' },
        { t: '0:14',  line: 'Obrigado por me receber. É louco pensar que começámos isto quando todos diziam que o áudio já estava saturado.' },
        { t: '0:22',  line: 'Vamos começar por aí. O que era diferente ao lançar um podcast em 2018 em comparação com agora?' },
        { t: '0:30',  line: 'A distribuição era mais difícil de penetrar, mas o público era mais paciente.' },
        { t: '0:37',  line: 'Hoje as ferramentas são incríveis, transcrição em segundos, resumos de IA para notas do programa, mas a atenção é mais escassa.' },
        { t: '0:47',  line: 'Isso é uma boa transição. Qual é o seu fluxo de trabalho para notas do programa agora que as transcrições são basicamente gratuitas?' },
        { t: '0:55',  line: 'Eu exporto o MP3, coloco-o numa ferramenta de transcrição e uso o resumo de IA como o primeiro rascunho das notas.' },
      ]}
      whyTitle="Por que escolher a Mictoo para transcrição de MP3"
      whyCards={[
        {
          icon: 'mic',
          title: 'Construído para podcasts e voz',
          desc: 'MP3 é o que as redes de podcasts distribuem e as aplicações de voz exportam. Ajustado para conteúdo de fala com timestamps prontos para notas do programa e legendas.',
        },
        {
          icon: 'gear',
          title: 'Configurações MP3 comuns aceites',
          desc: 'Bitrate constante ou variável, mono ou estéreo. A clareza da fala é o mais importante; bitrates muito baixos e artefatos de compressão audíveis podem reduzir a precisão.',
        },
        {
          icon: 'sparkles',
          title: 'Resumo de IA para notas do programa',
          desc: 'Um resumo aparece ao lado da transcrição automaticamente. Um sólido primeiro rascunho para notas de episódios, descrições e resumos amigáveis para SEO.',
        },
        {
          icon: 'globe',
          title: 'SRT, VTT e 50+ idiomas',
          desc: 'Exporte SRT ou VTT para a versão em vídeo do YouTube do episódio. Traduza para espanhol, francês, alemão e mais de 45 outros idiomas com um clique.',
        },
      ]}
      scenariosTitle="Quando MP3 para texto é a escolha certa"
      scenarios={[
        {
          icon: 'mic',
          title: 'Notas do programa de podcast',
          desc: 'Você publicou o episódio, carregou para o seu host. Coloque o mesmo MP3 aqui para a transcrição e resumo de IA que se tornam as notas do programa.',
        },
        {
          icon: 'layers',
          title: 'Catálogo de podcasts',
          desc: 'Anos de episódios já publicados sem transcrições. Processe-os um a um para preencher o arquivo e tornar cada episódio pesquisável.',
        },
        {
          icon: 'editPen',
          title: 'Nota de voz para documento',
          desc: 'Notas de voz gravadas no seu telefone (muitos aplicativos exportam MP3). Transforme ideias confusas em texto pesquisável e editável para o seu aplicativo de notas.',
        },
        {
          icon: 'clip',
          title: 'Entrevistas baixadas',
          desc: 'Entrevista de podcast que você deseja citar em um artigo, MP3 de palestra que você deseja referenciar, aula baixada que você deseja estudar.',
        },
        {
          icon: 'book',
          title: 'Capítulos de audiolivro',
          desc: 'Capítulo de audiolivro MP3 que você deseja como texto impresso para anotações. Arquivos grandes de audiolivro frequentemente excedem 60 MB e precisam ser divididos primeiro.',
        },
        {
          icon: 'video',
          title: 'Áudio do YouTube para MP3',
          desc: 'Extratores de áudio do YouTube frequentemente produzem MP3 para compatibilidade. Coloque o arquivo extraído para uma transcrição limpa com timestamps.',
        },
      ]}
      technicalTitle="O que importa num MP3"
      technicalIntro="As configurações do MP3 afetam o tamanho do arquivo e podem afetar a inteligibilidade nos extremos. Esses detalhes ajudam você a decidir se deve carregar o arquivo como está ou fazer uma cópia de fala menor primeiro."
      technicalFacts={[
        {
          icon: 'waveform',
          title: 'Bitrate e clareza',
          desc: 'Fala a um bitrate moderado é geralmente adequada. Bitrate extremamente baixo, clipping ou artefatos fortes podem esconder consoantes e nomes.',
        },
        {
          icon: 'gear',
          title: 'CBR e VBR',
          desc: 'Tanto arquivos MP3 de bitrate constante quanto variável podem ser carregados; os timestamps seguem a linha do tempo do áudio decodificado.',
        },
        {
          icon: 'clip',
          title: 'Tags ID3 permanecem separadas',
          desc: 'Artista, título, arte e metadados de capítulos não são inseridos na transcrição. Mantenha esses metadados no seu sistema de publicação.',
        },
        {
          icon: 'cloud',
          title: 'Episódios longos',
          desc: 'Se um episódio exceder o limite de upload, exporte uma cópia de fala mono a um bitrate mais baixo ou divida-o em uma pausa natural.',
        },
      ]}
      faq={[
        {
          q: 'A Mictoo transcreve qualquer arquivo MP3?',
          a: 'A Mictoo aceita arquivos MP3 comuns com bitrate constante ou variável, áudio mono ou estéreo. Arquivos danificados, variantes não suportadas ou gravações com artefatos de compressão severos podem precisar de re-exportação. O limite é 60 MB quando logado e 25 MB anonimamente.',
        },
        {
          q: 'O bitrate do MP3 afeta a qualidade da transcrição?',
          a: 'A clareza da gravação importa mais do que um bitrate alto, mas o bitrate não é irrelevante. Uma gravação de voz limpa a um bitrate moderado é geralmente adequada; compressão agressiva, clipping ou bitrate muito baixo podem remover detalhes da fala e reduzir a precisão.',
        },
        {
          q: 'Meu MP3 de podcast tem mais de 60 MB. E agora?',
          a: 'Crie uma cópia de fala mono menor com ffmpeg: ffmpeg -i podcast.mp3 -b:a 64k -ac 1 output.mp3. Verifique o resultado quanto a artefatos audíveis antes de carregar, ou divida o episódio em uma pausa natural.',
        },
        {
          q: 'Posso obter um resumo de IA do episódio?',
          a: 'Sim. O resumo de IA aparece ao lado da transcrição automaticamente após a transcrição terminar. É um sólido primeiro rascunho para notas de programa de podcast, descrições de episódios e resumos amigáveis para SEO.',
        },
        {
          q: 'Posso baixar legendas SRT para a versão do YouTube?',
          a: 'Sim. Exporte como SRT ou VTT após a transcrição. Ambos os formatos incluem timestamps alinhados à linha do tempo original do MP3. Coloque no seu upload do YouTube ou editor de vídeo para legendas.',
        },
        {
          q: 'A Mictoo transcreve arquivos MP3 não em inglês?',
          a: 'Sim. O Whisper large-v3 suporta mais de 50 idiomas com detecção automática. Para MP3 curtos ou conteúdo não em inglês, defina o idioma explicitamente no menu suspenso para uma detecção mais limpa na primeira passagem.',
        },
        {
          q: 'Posso traduzir a transcrição para outro idioma?',
          a: 'Sim. Após a transcrição terminar, escolha um idioma-alvo e clique em Traduzir. A tradução é gerada pelo GPT-4o-mini e aparece ao lado da transcrição original.',
        },
        {
          q: 'Meu arquivo MP3 será salvo nos seus servidores?',
          a: 'Não. O MP3 é transmitido para o provedor de transcrição, processado uma vez e removido da memória. Nunca gravamos o áudio em disco. A transcrição de texto é armazenada apenas se você fizer login e optar por adicioná-la ao seu histórico.',
        },
        {
          q: 'Os metadados ID3 (artista, título, álbum) aparecerão na transcrição?',
          a: 'Não. A transcrição é texto simples sem metadados MP3. As tags ID3 são ignoradas durante a transcrição. Se você precisar que a transcrição corresponda aos metadados do episódio, mantenha esse mapeamento no seu próprio sistema de arquivo.',
        },
        {
          q: 'Quanto tempo leva uma transcrição de MP3?',
          a: 'Um MP3 de podcast de 30 minutos normalmente termina em 30-50 segundos do início ao fim. Arquivos maiores próximos ao limite de upload levam 60-90 segundos. A velocidade de upload é frequentemente o passo mais longo do processo.',
        },
      ]}
      ctaHeadline="Coloque o seu MP3, escreva notas do programa mais rápido"
      ctaSubtitle="Episódio de podcast, nota de voz, entrevista baixada, capítulo de audiolivro. Obtenha o texto e o resumo em segundos."
      ctaButton="Carregar MP3 para transcrever"
    />
  )
}