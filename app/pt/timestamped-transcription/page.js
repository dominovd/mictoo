import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/timestamped-transcription',
  'fr': 'https://mictoo.com/fr/timestamped-transcription',
  'de': 'https://mictoo.com/de/timestamped-transcription',
  'es': 'https://mictoo.com/es/timestamped-transcription',
  'ru': 'https://mictoo.com/ru/timestamped-transcription',
  'it': 'https://mictoo.com/it/timestamped-transcription',
  'pt': 'https://mictoo.com/pt/timestamped-transcription',
  'pl': 'https://mictoo.com/pl/timestamped-transcription',
  'ja': 'https://mictoo.com/ja/timestamped-transcription',
  'ko': 'https://mictoo.com/ko/timestamped-transcription',
  'x-default': 'https://mictoo.com/timestamped-transcription',
}

export const metadata = {
  title: 'Transcrição com timecode — gerador grátis | Mictoo',
  description:
    'Transcrição grátis com timecode. Receba timecode por palavra ou frase para qualquer áudio ou vídeo. Perfeito para jornalismo, pesquisa, podcasting, edição de vídeo.',
  alternates: { canonical: 'https://mictoo.com/pt/timestamped-transcription', languages: LANGS },

  openGraph: {
    title: "Transcrição com timecode — gerador grátis | Mictoo",
    description: "Transcrição grátis com timecode. Receba timecode por palavra ou frase para qualquer áudio ou vídeo. Perfeito para jornalismo, pesquisa, podcasting, edição de vídeo.",
    url: "https://mictoo.com/pt/timestamped-transcription",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Transcrição com timecode — gerador grátis | Mictoo",
    description: "Transcrição grátis com timecode. Receba timecode por palavra ou frase para qualquer áudio ou vídeo. Perfeito para jornalismo, pesquisa, podcasting, edição de vídeo.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function PtTimestampedPage() {
  return (
    <LandingLayout
      defaultLanguage="pt"
      badge="Timecode · Citações · Grátis"
      h1={<>Transcrição com timecode<br /><span className="text-brand-600">Transcrições time-coded grátis</span></>}
      subtitle="Timecode preciso para cada linha ou palavra no seu áudio. Volte a momentos exatos, cite trechos específicos, construa capítulos. Grátis, sem cadastro."
      howItWorks={[
        { icon: '📂', title: 'Solte o arquivo', desc: 'MP3, M4A, MP4, WAV, FLAC, OGG, WEBM, AAC. Trabalhamos com formatos de áudio e vídeo.' },
        { icon: '⚡', title: 'A IA transcreve e adiciona timecode', desc: 'O Whisper large-v3 gera a transcrição com timecodes ao milissegundo para cada segmento (e opcionalmente cada palavra).' },
        { icon: '💾', title: 'Escolha granularidade e baixe', desc: 'Escolha timecode por frase (o mais comum) ou por palavra (para trabalho de alinhamento preciso). Baixe como TXT com timecode inline, como SRT para workflows de legenda, ou copie para a área de transferência.' },
      ]}
      whyUse={{ title: 'Por que Mictoo para transcrição com timecode', bullets: [
        { title: 'Timecode ao milissegundo', desc: 'O Whisper produz timecodes com precisão de milissegundo. Mais preciso que qualquer framerate comum de vídeo, mais que suficiente para trabalho de citação.' },
        { title: 'Por frase por padrão, por palavra quando preciso', desc: 'Nível frase mantém transcrições legíveis. Nível palavra é exagero para notas, mas essencial para edição de vídeo e alinhamento musical.' },
        { title: 'Grátis', desc: 'Sem contador por minuto. Sem tier "timecode custa extra". Mesmo preço da transcrição simples (grátis).' },
        { title: 'Export SRT para workflows de vídeo', desc: 'Timecodes em formato SRT funcionam direto em Premiere, DaVinci, CapCut e YouTube Studio como faixas de legenda.' },
        { title: 'Timecode inline no TXT para citações', desc: 'Texto puro com marcadores [00:01:23] no começo de cada segmento. Fácil de colar em notas de pesquisa, posts de blog ou rascunhos jornalísticos.' },
        { title: 'Nenhum arquivo guardado', desc: 'O áudio vai ao provedor de transcrição e é descartado. Nada fica nos nossos servidores.' },
      ]}}
      useCases={{ title: 'Para que as pessoas usam transcrições com timecode', items: [
        { title: 'Jornalismo e citações', desc: 'Citando uma fonte de uma entrevista? Coloque o timecode ao lado da citação nas suas notas. Quando a editoria ou o fact-checker pergunta "onde exatamente ele disse isso", você tem a resposta em dois segundos.' },
        { title: 'Marcadores de capítulo para podcasts', desc: 'Gere a transcrição, escaneie por transições de seção naturais, copie esses timecodes para a função de capítulo do seu host de podcast. Players modernos mostram capítulos na barra de reprodução.' },
        { title: 'Rough cuts de edição de vídeo', desc: 'Pegue a transcrição, marque as linhas que quer manter, ache na timeline pelo timecode. "Paper editing" é muito mais rápido que dar scrub.' },
        { title: 'Pesquisa acadêmica e coding qualitativo', desc: 'Pesquisadores em NVivo, Atlas.ti ou MAXQDA tagueiam segmentos de transcrição com códigos. Timecodes te deixam voltar ao áudio no momento exato quando codifica passagens ambíguas.' },
        { title: 'Alinhamento musical para vídeos sing-along', desc: 'Timecode por palavra para projetos tipo karaokê ou lyric video. Cada palavra acende no momento exato em que é cantada.' },
      ]}}
      proTips={{ title: 'Dicas para transcrição com timecode', tips: [
        { title: 'Timecode por frase funciona para 95% dos casos', desc: 'A menos que você esteja fazendo alinhamento musical ou legendagem palavra-por-palavra, nível frase é o que você quer. Mais legível, mais fácil de editar.' },
        { title: 'Timecode por palavra incha tamanho de arquivo e complexidade', desc: 'Um SRT por palavra para uma palestra de 30 minutos tem milhares de entries. Use só quando precisa mesmo de precisão por palavra.' },
        { title: 'Para podcasts, gere marcadores de capítulo a partir de pausas naturais', desc: 'Procure na transcrição transições de tópico, mudanças de agenda ou introduções de convidado. Copie esses timecodes para o seu host de podcast como marcadores de capítulo.' },
        { title: 'Para jornalismo, salve o timecode com toda citação que você poderia usar', desc: 'O você do futuro, 3 semanas depois, não vai lembrar de qual entrevista veio uma citação, muito menos onde na entrevista. O timecode resolve.' },
        { title: 'Timecodes SRT são zero-padded, os TXT não', desc: 'SRT usa 00:01:23,456. TXT geralmente usa [1:23]. Se você cola num CMS que espera um formato, converta antes de colar.' },
        { title: 'Para edição de vídeo, o timecode no nosso SRT se alinha ao áudio no arquivo original', desc: 'Se você reexporta o vídeo a um framerate diferente, os timecodes encaixam do mesmo jeito, porque são em tempo absoluto (milissegundos), não em frames.' },
        { title: 'Timecodes dão drift em áudio ruim', desc: 'Se o Whisper alucina palavras durante música ou silêncio, os timecodes dessas palavras fantasma são estimativas. Os timecodes da fala real ficam precisos. Confie só nas seções de fala, ignore as seções musicais.' },
      ]}}
      faq={[
        { q: 'Qual a diferença entre timecode por frase e por palavra?', a: 'Nível frase: um timecode por linha de texto (normalmente uma frase). Nível palavra: um timecode por palavra. Nível frase é legível e bom para citações, podcasting e a maior parte do trabalho de vídeo. Nível palavra é para alinhamento musical, vídeos karaokê e animações de legenda palavra-a-palavra.' },
        { q: 'Quão precisos são os timecodes?', a: 'O Whisper produz timecodes ao milissegundo. Encaixam corretamente em qualquer framerate comum (24, 25, 29.97, 30, 50, 60 fps) sem offset.' },
        { q: 'Os timecodes dão drift num arquivo longo?', a: 'Raramente. O Whisper alinha os timecodes ao áudio real, então ficam precisos mesmo em arquivos de 60 minutos. Drift sub-segundo pode aparecer nos últimos segmentos de arquivos muito longos. Se você nota, ajuste manualmente.' },
        { q: 'Posso ter um TXT com timecode inline, tipo [00:01:23] antes de cada linha?', a: 'Sim. Baixe como TXT e inserimos timecodes por frase inline. Formato: [00:01:23] texto da frase aqui.' },
        { q: 'O SRT contém timecode?', a: 'Sim, é o sentido todo do formato SRT. Toda entry de legenda tem timecode de início e fim.' },
        { q: 'Como se compara com as legendas automáticas do YouTube com timecode?', a: 'As legendas automáticas do YouTube têm timecode, mas sem pontuação e com precisão menor. As nossas têm pontuação completa, precisão melhor e output SRT padrão que funciona em qualquer editor de vídeo.' },
        { q: 'Posso pular da transcrição para um timecode específico no áudio?', a: 'Na nossa view de resultado, clique em qualquer timecode para posicionar o player de áudio nesse momento. Após o download, você precisa de um player de áudio separado para isso.' },
        { q: 'Os timecodes vão funcionar em Premiere ou DaVinci Resolve?', a: 'Sim. Importe o SRT na timeline. As legendas aparecem automaticamente nos momentos certos.' },
        { q: 'Quais idiomas são suportados para transcrição com timecode?', a: 'Os mesmos mais de 50 idiomas da transcrição simples. Os timecodes vêm automaticamente com toda transcrição, independente do idioma.' },
        { q: 'O áudio é guardado?', a: 'Não. O arquivo vai ao provedor de transcrição e é descartado após o processamento.' },
        { q: 'Posso usar timecode por palavra para fazer um vídeo karaokê?', a: 'Sim, mas você precisa de software de vídeo que possa renderizar highlight palavra-a-palavra a partir de um formato JSON ou SRT. Algumas ferramentas (Premiere, After Effects, software karaokê especializado) suportam direto.' },
        { q: 'Quanto demora para gerar transcrições com timecode?', a: 'Igual à transcrição simples, cerca de 1-2% da duração do áudio. Os timecodes vêm automaticamente, sem tempo extra de processamento.' },
      ]}
      relatedLinks={[
        { href: '/pt/free-srt-generator', label: 'Gerador SRT', desc: 'Mesmos timecodes, focado em workflows de legenda.' },
        { href: '/pt/podcast-transcription', label: 'Transcrição de podcast', desc: 'Timecodes para show notes e marcadores de capítulo.' },
        { href: '/pt/interview-transcription', label: 'Transcrição de entrevista', desc: 'Timecodes para citação e busca de fonte.' },
        { href: '/pt/transcribe-audio-to-text', label: 'Áudio em texto', desc: 'Para output só texto sem timecode.' },
      ]}
    />
  )
}
