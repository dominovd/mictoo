import FormatPageLayout from '@/components/FormatPageLayout'

export const metadata = {
  title: 'WAV para Texto: Transcrição Online Gratuita de WAV | Mictoo',
  description:
    'Carregue um ficheiro WAV, obtenha uma transcrição editável com marcas de tempo em segundos. Criado para bounces de estúdio, gravações de campo, exportações de DAW. Suporta PCM e Broadcast Wave (BWF). Gratuito, sem registo.',
  alternates: {
    canonical: 'https://mictoo.com/pt/wav-to-text',
    languages: {
      'en': 'https://mictoo.com/wav-to-text',
      'fr': 'https://mictoo.com/fr/wav-to-text',
      'de': 'https://mictoo.com/de/wav-to-text',
      'es': 'https://mictoo.com/es/wav-to-text',
      'ru': 'https://mictoo.com/ru/wav-to-text',
      'it': 'https://mictoo.com/it/wav-to-text',
      'pt': 'https://mictoo.com/pt/wav-to-text',
      'pl': 'https://mictoo.com/pl/wav-to-text',
      'ja': 'https://mictoo.com/ja/wav-to-text',
      'ko': 'https://mictoo.com/ko/wav-to-text',
      'x-default': 'https://mictoo.com/wav-to-text',
    },
  },

  openGraph: {
    title: "WAV para Texto: Transcrição Online Gratuita de WAV | Mictoo",
    description: "Carregue um ficheiro WAV, obtenha uma transcrição editável com marcas de tempo em segundos. Bounces de estúdio, gravações de campo, exportações de DAW. PCM e BWF suportados.",
    url: "https://mictoo.com/pt/wav-to-text",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "WAV para Texto: Transcrição Online Gratuita de WAV",
    description: "Carregue um WAV, obtenha uma transcrição editável com marcas de tempo em segundos. Bounces de estúdio, gravações de campo, exportações de DAW.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

const LANGS = {
  'en': 'https://mictoo.com/wav-to-text',
  'fr': 'https://mictoo.com/fr/wav-to-text',
  'de': 'https://mictoo.com/de/wav-to-text',
  'es': 'https://mictoo.com/es/wav-to-text',
  'ru': 'https://mictoo.com/ru/wav-to-text',
  'it': 'https://mictoo.com/it/wav-to-text',
  'pt': 'https://mictoo.com/pt/wav-to-text',
  'pl': 'https://mictoo.com/pl/wav-to-text',
  'ja': 'https://mictoo.com/ja/wav-to-text',
  'ko': 'https://mictoo.com/ko/wav-to-text',
  'x-default': 'https://mictoo.com/wav-to-text',
}

export default function PtWavToTextPage() {
  return (
    <FormatPageLayout
      locale="pt"
      badge="WAV · PCM · BWF · Gratuito"
      h1First="WAV para Texto"
      h1Second="Bounces de estúdio, gravações de campo, exportações de DAW"
      subtitle="WAV é o formato que a sua DAW utiliza para bounces, que o seu gravador de campo escreve no cartão, e que os estúdios de transmissão padronizam. Carregue um WAV PCM ou BWF e obtenha uma transcrição com marcas de tempo em segundos. Gratuito, sem registo."
      highlightFormat="wav"
      previewFileName="field-recording.wav"
      previewWordCount={166}
      previewDurationLabel="14:22"
      previewLines={[
        { t: '0:00',  line: 'Localização de scout, dia três. Estamos posicionados no lado leste da crista a cerca de seis mil pés.' },
        { t: '0:09',  line: 'O vento está a vir em rajadas do oeste, por isso tenho o blimp ligado e cortei a oitenta hertz.' },
        { t: '0:18',  line: 'Os níveis estão a atingir cerca de menos doze no microfone de entrevista, o que parece certo para esta ambiência.' },
        { t: '0:28',  line: 'Ao meu lado está o guarda que trabalha nesta secção do parque há vinte e dois anos.' },
        { t: '0:37',  line: 'Quando as pessoas perguntam o que mudou mais por aqui, eu sempre começo com os incêndios no verão de 2020.' },
        { t: '0:47',  line: 'A floresta nunca mais pareceu a mesma depois disso, e os padrões de vida selvagem levaram anos a restabelecer.' },
        { t: '0:57',  line: 'Pode explicar-me como foram aquelas primeiras semanas após os incêndios no terreno?' },
        { t: '1:05',  line: 'Claro. A fumaça ficou por cerca de seis semanas no total, e a visibilidade nunca ultrapassou meia milha.' },
      ]}
      whyTitle="Por que escolher a Mictoo para transcrição de WAV"
      whyCards={[
        {
          icon: 'waveform',
          title: 'PCM e BWF, sem conversão',
          desc: 'WAV PCM padrão de 16/24/32 bits e Broadcast Wave (BWF) com metadados. Aceitamos o ficheiro tal como está, sem necessidade de conversão.',
        },
        {
          icon: 'target',
          title: 'Sem artefatos de codec com perdas',
          desc: 'PCM não comprimido não adiciona artefatos de compressão com perdas. Uma gravação limpa pode ser uma fonte forte, mas o ruído ambiente e a colocação do microfone ainda importam.',
        },
        {
          icon: 'gear',
          title: 'Qualquer taxa de amostragem, qualquer profundidade de bits',
          desc: '44.1 kHz, 48 kHz, 96 kHz, 192 kHz. O Whisper reamostra para 16 kHz mono internamente, por isso a taxa de origem não afeta a qualidade.',
        },
        {
          icon: 'clip',
          title: 'Metadados BWF são preservados do seu lado',
          desc: 'Ignoramos os blocos de metadados iXML/bext durante a transcrição. O seu ficheiro WAV original (e os seus metadados) nunca é modificado.',
        },
      ]}
      scenariosTitle="Quando a transcrição de WAV é a escolha certa"
      scenarios={[
        {
          icon: 'mic',
          title: 'Captura de gravador de campo',
          desc: 'Zoom H4n, H5, H6, Tascam DR-40, Sound Devices MixPre. O que quer que o kit de campo escreva no cartão, carregue o WAV para uma transcrição limpa.',
        },
        {
          icon: 'waveform',
          title: 'Bounce de DAW para referência',
          desc: 'Mistura bruta ou bounce apenas vocal de Logic, Pro Tools ou Ableton. Obtenha uma versão em texto das letras ou diálogos para referência.',
        },
        {
          icon: 'briefcase',
          title: 'Entrevista de transmissão',
          desc: 'Gravação BWF de uma entrevista de rádio ou estúdio de podcast. A transcrição alimenta notas de show, citações e documentação de arquivo.',
        },
        {
          icon: 'book',
          title: 'Arquivo de história oral',
          desc: 'Gravação de história oral em formato longo capturada em WAV para preservação. A transcrição torna o arquivo pesquisável e citável.',
        },
        {
          icon: 'users',
          title: 'Deposição e gravação legal',
          desc: 'Processos gravados capturados como WAV não comprimido para qualidade de evidência. Transcrição para revisão e citação.',
        },
        {
          icon: 'sparkles',
          title: 'Trabalho de voz',
          desc: 'Passagem de ADR, gravação de narração ou sessão de voiceover convertida para WAV. A transcrição confirma que a leitura corresponde ao roteiro.',
        },
      ]}
      technicalTitle="O que está dentro de um ficheiro WAV"
      technicalIntro="WAV é um recipiente comumente utilizado para áudio PCM não comprimido. A sua resolução extra é útil para produção e arquivamento, enquanto as condições de gravação ainda determinam quão inteligível é a fala."
      technicalFacts={[
        {
          icon: 'waveform',
          title: 'PCM e Broadcast Wave',
          desc: 'Gravações padrão de WAV PCM e BWF podem transportar o mesmo áudio falado; BWF adiciona metadados de produção em torno dele.',
        },
        {
          icon: 'gear',
          title: 'Taxa de amostragem e profundidade de bits',
          desc: 'Taxas de amostragem altas e profundidades de bits preservam a margem de produção, mas não podem reparar ruído, clipping ou um microfone distante.',
        },
        {
          icon: 'cloud',
          title: 'Grande por design',
          desc: 'WAV não comprimido cresce rapidamente. Para entrevistas longas, divida a gravação ou faça uma cópia de fala mono menor se necessário.',
        },
        {
          icon: 'clip',
          title: 'Metadados ficam de fora',
          desc: 'BWF, iXML e metadados de cue não são adicionados à transcrição, e o ficheiro de origem original não é modificado.',
        },
      ]}
      faq={[
        {
          q: 'Que tipos de ficheiros WAV a Mictoo aceita?',
          a: 'WAV PCM padrão a 16 bits, 24 bits ou 32 bits flutuante, qualquer taxa de amostragem (44.1 kHz a 192 kHz), mono ou estéreo. Broadcast Wave (BWF) também é totalmente suportado com metadados iXML/bext preservados no seu ficheiro original.',
        },
        {
          q: 'Uma maior profundidade de bits ou taxa de amostragem melhora a transcrição?',
          a: 'Não. O Whisper reamostra todo o áudio para 16 kHz mono internamente antes da transcrição, por isso a profundidade de bits e a taxa de amostragem além desse limite não afetam a precisão. A qualidade da gravação (escolha do microfone, sala, nível de ruído) importa muito mais do que a especificação do recipiente.',
        },
        {
          q: 'O meu WAV de estúdio tem mais de 60 MB. E agora?',
          a: 'Um WAV estéreo de 24 bits a 48 kHz tem cerca de 17 MB por minuto, por isso qualquer gravação com mais de cerca de 3 minutos atinge o limite. Converta para WAV mono a 16 kHz (ou MP3 a 128 kbps) com ffmpeg -i in.wav -ar 16000 -ac 1 out.wav. A qualidade da transcrição é idêntica.',
        },
        {
          q: 'Vocês guardam o meu ficheiro WAV?',
          a: 'Não. O ficheiro é transmitido para o fornecedor de transcrição, processado uma vez e removido da memória. Nunca o escrevemos em disco. A transcrição é armazenada apenas se você fizer login e adicioná-la ao seu histórico.',
        },
        {
          q: 'Posso manter as marcas de tempo BWF originais na transcrição?',
          a: 'A transcrição utiliza marcas de tempo relativas a partir do início do ficheiro (0:00 de referência). Os metadados de tempo absoluto BWF não são transportados para a saída de texto. Combine os dois do seu lado se precisar de alinhamento de tempo de cena.',
        },
        {
          q: 'A Mictoo transcreve WAV não inglês?',
          a: 'Sim. O Whisper large-v3 suporta mais de 50 idiomas com deteção automática. Para gravações curtas ou sotaques incomuns, defina o idioma explicitamente no dropdown para uma deteção mais limpa na primeira passagem.',
        },
        {
          q: 'Posso obter legendas SRT para uma gravação WAV?',
          a: 'Sim. Baixe SRT ou VTT após a transcrição. Ambos os formatos incluem marcas de tempo alinhadas à linha do tempo original do WAV para uso em editores de vídeo ou ferramentas de acessibilidade.',
        },
        {
          q: 'Quanto tempo leva uma transcrição de WAV?',
          a: 'Um WAV de 15 minutos normalmente termina em 20-40 segundos do início ao fim. Ficheiros maiores perto do limite de upload levam 40-80 segundos. A velocidade de upload é muitas vezes o passo mais longo, uma vez que os ficheiros WAV são grandes.',
        },
        {
          q: 'Vocês suportam gravações de 32 bits flutuantes de Sound Devices?',
          a: 'Sim. Ficheiros WAV de 32 bits flutuantes de MixPre, F-series ou gravadores Zoom F-series são aceites e transcritos da mesma forma que o PCM padrão.',
        },
        {
          q: 'Posso traduzir a transcrição para outro idioma?',
          a: 'Sim. Após a transcrição, escolha um idioma alvo e clique em Traduzir. A tradução é feita com o GPT-4o-mini e aparece ao lado da transcrição original.',
        },
      ]}
      ctaHeadline="Carregue o seu WAV, obtenha uma transcrição limpa"
      ctaSubtitle="PCM, BWF, qualquer taxa de amostragem. Bounces de estúdio, gravações de campo, exportações de DAW."
      ctaButton="Carregar WAV para transcrever"
    />
  )
}