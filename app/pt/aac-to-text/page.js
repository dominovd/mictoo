import FormatPageLayout from '@/components/FormatPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/aac-to-text',
  'fr': 'https://mictoo.com/fr/aac-to-text',
  'de': 'https://mictoo.com/de/aac-to-text',
  'es': 'https://mictoo.com/es/aac-to-text',
  'ru': 'https://mictoo.com/ru/aac-to-text',
  'it': 'https://mictoo.com/it/aac-to-text',
  'pt': 'https://mictoo.com/pt/aac-to-text',
  'pl': 'https://mictoo.com/pl/aac-to-text',
  'ja': 'https://mictoo.com/ja/aac-to-text',
  'ko': 'https://mictoo.com/ko/aac-to-text',
  'x-default': 'https://mictoo.com/aac-to-text',
}

export const metadata = {
  title: 'AAC para Texto: Transcrição de Áudio AAC e ADTS | Mictoo',
  description:
    'Carregue ficheiros .aac brutos (fluxo ADTS ou ADIF) e obtenha uma transcrição editável em segundos. Comum para downloads de podcasts, arquivos de transmissão, áudio extraído de iPhone.',
  alternates: {
    canonical: 'https://mictoo.com/pt/aac-to-text',
    languages: LANGS,
  },
  openGraph: {
    title: 'AAC para Texto: Transcrição de Áudio AAC e ADTS | Mictoo',
    description: 'Carregue ficheiros .aac brutos (fluxo ADTS ou ADIF). Transcrição editável em segundos.',
    url: 'https://mictoo.com/pt/aac-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AAC para Texto: Transcrição de Fluxo AAC Bruto',
    description: 'Carregue .aac brutos (ADTS ou ADIF). Transcrição editável em segundos.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function PtAacToTextPage() {
  return (
    <FormatPageLayout
      locale="pt"
      badge="AAC · ADTS · Fluxo de codec bruto"
      h1First="AAC para Texto"
      h1Second="Fluxos ADTS brutos, arquivos de transmissão, áudio extraído"
      subtitle="Ficheiros .aac brutos frequentemente vêm de fluxos de transmissão, capturas de rádio e faixas de mídia extraídas. Deixe o ficheiro e a Mictoo inspeciona a sua estrutura antes de transcrever o áudio falado com o Whisper large-v3."
      highlightFormat="aac"
      previewFileName="broadcast-audio.aac"
      previewWordCount={142}
      previewDurationLabel="9:44"
      previewLines={[
        { t: '0:00',  line: 'Está a ouvir o programa da manhã. São sete e quinze e estamos de volta com a nossa história principal.' },
        { t: '0:08',  line: 'Durante a noite, o conselho da cidade aprovou a nova expansão do transporte após quase três anos de debate.' },
        { t: '0:17',  line: 'O plano irá adicionar duas novas linhas de metro ligeiro e estender a linha existente em cerca de oito milhas.' },
        { t: '0:27',  line: 'Para explicar o que isso significa para os passageiros diários, temos connosco no estúdio o nosso repórter de transporte.' },
        { t: '0:37',  line: 'Obrigado por me receber. A grande notícia é que o corredor em direção a leste finalmente terá uma opção ferroviária após vinte anos.' },
        { t: '0:47',  line: 'Para quem atualmente conduz nesse trecho durante a hora de ponta, isso é genuinamente transformador.' },
        { t: '0:56',  line: 'A construção começa na próxima primavera e a primeira nova linha deverá abrir em vinte e vinte e nove.' },
        { t: '1:06',  line: 'O conselho estima que cerca de quarenta mil passageiros diários utilizarão os novos segmentos assim que abrirem.' },
      ]}
      whyTitle="Por que a Mictoo para transcrição AAC"
      whyCards={[
        {
          icon: 'waveform',
          title: 'ADTS tratado nativamente',
          desc: 'A maioria dos ficheiros .aac brutos são estruturados em ADTS (Audio Data Transport Stream). Detectamos a palavra de sincronização 0xFFF e entregamos o fluxo ao Whisper.',
        },
        {
          icon: 'gear',
          title: 'ADIF e LATM também suportados',
          desc: 'Estruturas menos comuns ADIF (Audio Data Interchange Format) e LATM também funcionam. Nenhum reempacotamento manual ou passo ffmpeg necessário.',
        },
        {
          icon: 'clip',
          title: 'Nenhum contêiner necessário',
          desc: 'AAC geralmente vive dentro de M4A ou MP4, mas às vezes o fluxo bruto vai parar ao seu disco. A Mictoo aceita ambos sem perguntar.',
        },
        {
          icon: 'sparkles',
          title: 'Resumo de IA para segmentos de arquivo',
          desc: 'Segmento de transmissão, clipe de arquivo de rádio ou despejo de streaming. O resumo de IA permite que você classifique arquivos mais rapidamente.',
        },
      ]}
      scenariosTitle="Quando AAC para texto é a escolha certa"
      scenarios={[
        {
          icon: 'briefcase',
          title: 'Arquivo de rádio de transmissão',
          desc: 'Segmento gravado de um fluxo HLS ou Icecast que é enviado como AAC bruto. A transcrição torna o arquivo pesquisável.',
        },
        {
          icon: 'video',
          title: 'Captura de livestream HLS',
          desc: 'YouTube Live, Twitch ou fluxo de rádio HLS capturado como uma sequência de pedaços .aac. Deixe o ficheiro, obtenha o texto.',
        },
        {
          icon: 'mic',
          title: 'Áudio extraído de iPhone',
          desc: 'Áudio extraído de uma gravação de iPhone ou ficheiro compartilhado que perdeu seu contêiner M4A e saiu como AAC bruto.',
        },
        {
          icon: 'gear',
          title: 'Exportação de serviço de streaming',
          desc: 'Plataforma de podcast ou aplicativo de streaming que fornece downloads brutos de AAC. Pule a conversão e deixe o ficheiro diretamente.',
        },
        {
          icon: 'users',
          title: 'Entrevista de transmissão',
          desc: 'Entrevista hospedada em rádio arquivada como AAC bruto. A transcrição é a cópia pronta para citação para artigos ou programas.',
        },
        {
          icon: 'editPen',
          title: 'Saída intermediária do FFmpeg',
          desc: 'Você extraiu a faixa de áudio com ffmpeg -c:a copy e obteve um .aac. Deixe aqui em vez de re-muxing para M4A primeiro.',
        },
      ]}
      technicalTitle="AAC bruto comparado com M4A"
      technicalIntro="AAC é um codec de áudio. Um ficheiro que termina em .aac é frequentemente um fluxo bruto estruturado, enquanto M4A geralmente envolve áudio AAC em um contêiner MP4 com busca e metadados."
      technicalFacts={[
        {
          icon: 'waveform',
          title: 'ADTS é comum',
          desc: 'AAC bruto é comumente armazenado como quadros ADTS, especialmente quando o áudio foi extraído de um fluxo ou fluxo de transmissão.',
        },
        {
          icon: 'layers',
          title: 'M4A adiciona um contêiner',
          desc: 'M4A pode carregar o mesmo codec AAC com temporização, indexação e metadados fornecidos por um contêiner baseado em MP4.',
        },
        {
          icon: 'search',
          title: 'Extensão é apenas uma pista',
          desc: 'A estrutura do ficheiro é inspecionada durante o processamento, então uma extensão enganosa não se torna texto de transcrição.',
        },
        {
          icon: 'briefcase',
          title: 'Fluxos de transmissão',
          desc: 'AAC bruto frequentemente aparece após captura HLS ou extração de áudio. Mantenha a referência da fonte original para contexto de arquivamento.',
        },
      ]}
      faq={[
        {
          q: 'Que tipo de ficheiros AAC a Mictoo aceita?',
          a: 'AAC bruto em estrutura ADTS (mais comum), ADIF e LATM. Detectamos a palavra de sincronização no servidor e entregamos o fluxo ao Whisper. AAC dentro de M4A (veja a página M4A) também funciona, mas é um caminho de entrada diferente.',
        },
        {
          q: 'Qual é a diferença entre .aac e .m4a?',
          a: '.aac é tipicamente um fluxo de bits ADTS bruto: quadros AAC com pequenos cabeçalhos de 7 bytes, sem contêiner. .m4a é áudio AAC envolto em um contêiner MP4 com metadados e indexação de busca. Ambos usam o codec AAC, mas a estrutura do ficheiro difere.',
        },
        {
          q: 'Meu ficheiro AAC tem mais de 60 MB. E agora?',
          a: 'AAC em bitrates de transmissão típicos (128 kbps) é cerca de 1 MB por minuto, então 60 MB é aproximadamente uma gravação de uma hora. Se você estiver logado, dividimos automaticamente até cerca de 3 horas. Caso contrário, reduza a amostra: ffmpeg -i in.aac -b:a 64k -ac 1 out.aac.',
        },
        {
          q: 'A AAC bruta produz transcrições piores do que M4A?',
          a: 'Não. O fluxo de áudio é idêntico; apenas o contêiner difere. O Whisper reamostra para 16 kHz mono internamente de qualquer forma. A precisão depende da qualidade da gravação subjacente, não de ser estruturado em ADTS ou envolto em MP4.',
        },
        {
          q: 'A Mictoo transcreve AAC não inglês?',
          a: 'Sim. O Whisper large-v3 suporta mais de 50 idiomas com detecção automática. Para sotaques incomuns ou clipes de transmissão curtos, defina o idioma explicitamente para resultados mais limpos na primeira passagem.',
        },
        {
          q: 'Posso obter legendas SRT para o clipe de transmissão?',
          a: 'Sim. Baixe SRT ou VTT após a transcrição. Os timestamps alinham-se à linha do tempo do fluxo AAC original para uso em editores de vídeo, sobreposições de acessibilidade ou indexação de arquivamento.',
        },
        {
          q: 'Meu ficheiro AAC é mantido nos seus servidores?',
          a: 'Não. O áudio é transmitido para o provedor de transcrição, processado uma vez e excluído da memória. Nunca o escrevemos em disco. As transcrições são armazenadas apenas se você fizer login e salvar no histórico.',
        },
        {
          q: 'Posso traduzir a transcrição para outro idioma?',
          a: 'Sim. Após a transcrição, escolha um idioma-alvo e clique em Traduzir. A tradução é executada no GPT-4o-mini e aparece ao lado do original.',
        },
        {
          q: 'E se o ficheiro tiver uma extensão .aac, mas for na verdade M4A?',
          a: 'Inspecionamos os bytes mágicos, não a extensão. Se o ficheiro começar com ftyp (assinatura M4A/MP4), tratamos como M4A. Se começar com bytes de sincronização ADTS, tratamos como AAC bruto. De qualquer forma, a transcrição funciona.',
        },
        {
          q: 'Quanto tempo leva uma transcrição AAC?',
          a: 'Uma AAC de 10 minutos normalmente termina em 15-30 segundos do início ao fim. Ficheiros maiores próximos ao limite de upload levam 45-80 segundos. A velocidade de upload é frequentemente o passo mais longo.',
        },
      ]}
      ctaHeadline="Deixe o seu AAC bruto e obtenha a transcrição"
      ctaSubtitle="Estruturas ADTS, ADIF e LATM. Arquivos de transmissão, capturas HLS, áudio extraído."
      ctaButton="Carregar AAC para transcrever"
    />
  )
}