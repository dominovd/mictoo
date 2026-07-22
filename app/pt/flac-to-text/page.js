import FormatPageLayout from '@/components/FormatPageLayout'

export const metadata = {
  title: 'FLAC para Texto: Transcrição Sem Perdas para Arquivos de Palavra Falada | Mictoo',
  description:
    'Carregue uma entrevista de história oral em FLAC, gravação de campo ou cópia de preservação e obtenha uma transcrição editável com marcas de tempo.',
  alternates: {
    canonical: 'https://mictoo.com/pt/flac-to-text',
    languages: {
      'en': 'https://mictoo.com/flac-to-text',
      'fr': 'https://mictoo.com/fr/flac-to-text',
      'de': 'https://mictoo.com/de/flac-to-text',
      'es': 'https://mictoo.com/es/flac-to-text',
      'ru': 'https://mictoo.com/ru/flac-to-text',
      'it': 'https://mictoo.com/it/flac-to-text',
      'pt': 'https://mictoo.com/pt/flac-to-text',
      'pl': 'https://mictoo.com/pl/flac-to-text',
      'ja': 'https://mictoo.com/ja/flac-to-text',
      'ko': 'https://mictoo.com/ko/flac-to-text',
      'x-default': 'https://mictoo.com/flac-to-text',
    },
  },
  openGraph: {
    title: 'FLAC para Texto: Transcrição de Áudio Sem Perdas | Mictoo',
    description: 'Carregue uma entrevista de história oral em FLAC, gravação de campo ou cópia de preservação. Obtenha uma transcrição editável com marcas de tempo.',
    url: 'https://mictoo.com/pt/flac-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FLAC para Texto: Transcrição de Áudio Sem Perdas',
    description: 'Carregue um arquivo de palavra falada em FLAC ou gravação de campo e obtenha uma transcrição editável com marcas de tempo.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function PtFlacToTextPage() {
  return (
    <FormatPageLayout
      locale="pt"
      badge="FLAC · Sem Perdas · Grátis"
      h1First="FLAC para Texto"
      h1Second="Áudio sem perdas para arquivos de palavra falada"
      subtitle="FLAC é utilizado por arquivos de história oral, gravadores de campo e fluxos de trabalho de preservação para armazenar áudio sem compressão com perdas. Carregue o arquivo .flac, mantenha a cópia original sem perdas e obtenha uma transcrição com marcas de tempo."
      highlightFormat="flac"
      previewFileName="gravação-arquivística.flac"
      previewWordCount={155}
      previewDurationLabel="18:04"
      previewLines={[
        { t: '0:00',  line: 'Esta gravação foi feita na casa da família em outubro de mil novecentos e setenta e oito.' },
        { t: '0:07',  line: 'O sujeito é a minha avó, nascida em Cracóvia em mil novecentos e quatorze, imigrou para Nova Iorque em mil novecentos e trinta e nove.' },
        { t: '0:18',  line: 'A qualidade da gravação é limitada pela fonte original da cassete. Por favor, tenha em mente o volume do entrevistador.' },
        { t: '0:27',  line: 'Vovó, pode me contar sobre o dia em que deixou Cracóvia pela última vez?' },
        { t: '0:34',  line: 'Estava a chover. Isso é o que eu lembro primeiro. Todos estavam de pé na plataforma na chuva.' },
        { t: '0:44',  line: 'Meu pai tinha duas malas e minha mãe tinha uma. Eu só tinha uma pequena bolsa que minha tia me tinha dado.' },
        { t: '0:54',  line: 'O trem deveria partir às seis da manhã, mas não partiu até quase às dez.' },
        { t: '1:04',  line: 'E quando finalmente partiu, ninguém naquela plataforma viu a cidade da mesma forma novamente.' },
      ]}
      whyTitle="Por que escolher a Mictoo para transcrição de FLAC"
      whyCards={[
        {
          icon: 'target',
          title: 'Sem compressão adicional com perdas',
          desc: 'O FLAC preserva o sinal gravado sem perda de compressão estilo MP3. A precisão da transcrição ainda depende da clareza da fala e da captura original.',
        },
        {
          icon: 'gear',
          title: 'Qualquer taxa de amostragem, qualquer profundidade de bits',
          desc: '44,1 kHz a 192 kHz, 16 bits a 24 bits. O Whisper reamostra para 16 kHz mono internamente, então a sua taxa de origem não afeta a qualidade.',
        },
        {
          icon: 'book',
          title: 'Fluxo de trabalho amigável à preservação',
          desc: 'Seu arquivo FLAC original nunca é modificado. Nós o transmitimos para o provedor de transcrição, extraímos o áudio na memória e descartamos depois.',
        },
        {
          icon: 'clip',
          title: 'FLAC dentro de OGG também é tratado',
          desc: 'FLAC nativo (bytes mágicos fLaC) e FLAC em OGG (OggS com um fluxo FLAC) funcionam. Sem reempacotamento manual.',
        },
      ]}
      scenariosTitle="Quando FLAC para texto é a escolha certa"
      scenarios={[
        {
          icon: 'book',
          title: 'Arquivo de história oral',
          desc: 'Entrevista longa preservada como FLAC sem perdas para o arquivo. A transcrição torna-a pesquisável, citável e pronta para citação.',
        },
        {
          icon: 'briefcase',
          title: 'Gravação institucional',
          desc: 'Palestra ou simpósio gravado por museu, biblioteca ou universidade mantido como FLAC para preservação. A transcrição é a camada de acesso.',
        },
        {
          icon: 'mic',
          title: 'Entrevista ou podcast ripado de CD',
          desc: 'Entrevista ou episódio de podcast mais antigo que você ripou de CD como FLAC. Carregue o arquivo para uma transcrição moderna.',
        },
        {
          icon: 'waveform',
          title: 'Gravação de campo, captura sem perdas',
          desc: 'Gravador de campo ou captura manual escrita como FLAC para economizar espaço no cartão sem perder qualidade. Transcrição completa com marcas de tempo.',
        },
        {
          icon: 'sparkles',
          title: 'Coleções de entrevistas restauradas',
          desc: 'Entrevistas digitalizadas em fita ou disco armazenadas como FLAC após restauração. Adicione texto pesquisável enquanto mantém a cópia de preservação.',
        },
        {
          icon: 'users',
          title: 'Cópia de preservação de depoimento',
          desc: 'Gravação legal preservada como FLAC para integridade arquivística. Transcrição para revisão, citação e descoberta posterior.',
        },
      ]}
      technicalTitle="O que o FLAC sem perdas preserva, e o que não preserva"
      technicalIntro="O FLAC preserva o sinal de origem sem compressão com perdas. Ele protege uma cópia de arquivo, mas não pode restaurar palavras já obscurecidas por ruído, recortes, sobreposição ou distância do microfone."
      technicalFacts={[
        {
          icon: 'waveform',
          title: 'Fonte sem perdas',
          desc: 'A decodificação retorna o sinal gravado sem perda de compressão estilo MP3, o que é útil para fluxos de trabalho de preservação.',
        },
        {
          icon: 'ear',
          title: 'Sem limpeza automática',
          desc: 'Uma cópia sem perdas de uma gravação ruidosa ainda é ruidosa. A clareza da fala na captura continua a ser o principal fator de precisão.',
        },
        {
          icon: 'clip',
          title: 'Comentários Vorbis separados',
          desc: 'Artista, ID de arquivo e outras tags não são inseridas na transcrição. Mantenha esse mapeamento no seu catálogo de arquivos.',
        },
        {
          icon: 'cloud',
          title: 'Cópia de arquivo eficiente',
          desc: 'O FLAC é menor que o WAV não comprimido, mas ainda pode ser grande para sessões longas. Divida gravações longas se necessário.',
        },
      ]}
      faq={[
        {
          q: 'Quais arquivos FLAC a Mictoo aceita?',
          a: 'FLAC nativo (bytes mágicos fLaC) e contêineres FLAC em OGG, mono ou estéreo, qualquer taxa de amostragem até 192 kHz e profundidade de 16 ou 24 bits. Aceitamos o arquivo diretamente sem conversão.',
        },
        {
          q: 'A entrada sem perdas produz uma transcrição melhor?',
          a: 'Para gravações de origem limpas, a entrada sem perdas corresponde ao teto do que o Whisper pode extrair. Para fontes ruidosas ou degradadas (um rip de cassete, por exemplo), a entrada sem perdas preserva a degradação fielmente, mas não a corrige. A qualidade da gravação é mais importante que o contêiner.',
        },
        {
          q: 'Meu arquivo FLAC tem mais de 60 MB. E agora?',
          a: 'Um FLAC estéreo de 44,1 kHz e 16 bits tem cerca de 5 MB por minuto, então qualquer gravação com mais de cerca de 12 minutos atinge o limite. Se estiver logado, nós dividimos automaticamente até cerca de 3 horas. Caso contrário, converta para FLAC mono de 16 kHz ou MP3 primeiro: ffmpeg -i in.flac -ar 16000 -ac 1 out.flac.',
        },
        {
          q: 'Posso manter os metadados do FLAC (álbum, artista, ano)?',
          a: 'A transcrição é texto simples sem metadados do FLAC. As tags de comentários Vorbis são ignoradas durante a transcrição. Mantenha o mapeamento de metadados no seu sistema de arquivos se precisar dele posteriormente.',
        },
        {
          q: 'A Mictoo transcreve FLAC em idiomas não ingleses?',
          a: 'Sim. O Whisper large-v3 suporta mais de 50 idiomas com detecção automática. Para sotaques incomuns ou gravações mais antigas, defina o idioma explicitamente para uma detecção mais limpa na primeira passagem.',
        },
        {
          q: 'Posso obter legendas SRT para um vídeo que usa este áudio?',
          a: 'Sim. Baixe SRT ou VTT após a transcrição. As marcas de tempo alinham-se à linha do tempo original do FLAC para uso em editores de vídeo ou ferramentas de acessibilidade.',
        },
        {
          q: 'Meu arquivo FLAC é mantido nos seus servidores?',
          a: 'Não. O áudio é transmitido para o provedor de transcrição, processado uma vez e descartado da memória. Nós nunca gravamos o áudio em disco. As transcrições são armazenadas apenas se você estiver logado.',
        },
        {
          q: 'Posso traduzir a transcrição para outro idioma?',
          a: 'Sim. Após a transcrição, escolha um idioma-alvo e clique em Traduzir. A tradução é realizada no GPT-4o-mini e aparece ao lado do original.',
        },
        {
          q: 'Quanto tempo leva uma transcrição de FLAC?',
          a: 'Um FLAC de 15 minutos geralmente termina em 25-45 segundos do início ao fim. Arquivos maiores próximos do limite de upload levam 45-90 segundos. A velocidade de upload é frequentemente o passo mais longo, já que os arquivos FLAC são grandes.',
        },
        {
          q: 'Vocês aceitam FLAC hi-res de 24 bits?',
          a: 'Sim. FLAC de 24 bits a 96 kHz ou 192 kHz é totalmente suportado. O Whisper reamostra internamente, então a alta resolução não melhora a precisão em relação ao FLAC de 16 bits a 44,1 kHz para áudio limpo, mas também não prejudica.',
        },
      ]}
      ctaHeadline="Carregue seu FLAC, obtenha uma transcrição pronta para arquivo"
      ctaSubtitle="Fonte sem perdas entra, texto pesquisável sai. História oral, gravações de campo e cópias de preservação."
      ctaButton="Carregar FLAC para transcrever"
    />
  )
}