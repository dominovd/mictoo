import LandingLayout from '@/components/LandingLayout'
import ConverterZone from '@/components/ConverterZone'

const LANGS = {
  'en': 'https://mictoo.com/wav-to-mp3',
  'fr': 'https://mictoo.com/fr/wav-to-mp3',
  'de': 'https://mictoo.com/de/wav-to-mp3',
  'es': 'https://mictoo.com/es/wav-to-mp3',
  'ru': 'https://mictoo.com/ru/wav-to-mp3',
  'it': 'https://mictoo.com/it/wav-to-mp3',
  'pt': 'https://mictoo.com/pt/wav-to-mp3',
  'pl': 'https://mictoo.com/pl/wav-to-mp3',
  'ja': 'https://mictoo.com/ja/wav-to-mp3',
  'ko': 'https://mictoo.com/ko/wav-to-mp3',
  'x-default': 'https://mictoo.com/wav-to-mp3',
}

export const metadata = {
  title: 'WAV para MP3 — conversor online gratuito | Mictoo',
  description:
    'Converta WAV para MP3 online grátis. Encolha arquivos WAV sem perdas em MP3 portátil a 128 kbps em segundos. Sem cadastro, sem marca d\'água. Até 25 MB.',
  alternates: { canonical: 'https://mictoo.com/pt/wav-to-mp3', languages: LANGS },
}

export default function PtWavToMp3Page() {
  return (
    <LandingLayout
      defaultLanguage="pt"
      badge="WAV → MP3 · Grátis · Sem cadastro"
      h1={<>WAV para MP3<br /><span className="text-brand-600">Conversor online gratuito</span></>}
      subtitle="Solte um arquivo WAV. Receba um MP3 compacto dez vezes menor, som quase idêntico para fala ou escuta casual. Sem marca d&apos;água, sem email."
      tool={<ConverterZone from="wav" to="mp3" />}
      howItWorks={[
        { icon: '📂', title: 'Solte o WAV', desc: 'Arraste qualquer WAV (16-bit, 24-bit, mono, estéreo) para a caixa. Arquivos até 25 MB passam anonimamente, 60 MB com cadastro.' },
        { icon: '⚡', title: 'Re-codificamos para MP3', desc: 'ffmpeg do lado servidor, taxa constante de 128 kbps, 44.1 kHz, estéreo. Um WAV de 25 MB (cerca de 2 minutos a 24-bit/96 kHz, ou 5 minutos a 16-bit/44.1) termina em poucos segundos.' },
        { icon: '⬇️', title: 'Baixe o MP3', desc: 'O resultado é nomeado igual ao original com .mp3 trocado. Tanto o upload quanto a saída são deletados dos nossos servidores em até uma hora.' },
      ]}
      whyUse={{ title: 'Por que converter WAV para MP3', bullets: [
        { title: 'Arquivos WAV são enormes', desc: 'Um WAV de 5 minutos a 16-bit/44.1 kHz tem cerca de 50 MB. O mesmo áudio como MP3 a 128 kbps tem 5 MB. Para enviar por email, fazer upload em um host de podcast ou enfiar num celular, MP3 é o formato que você quer.' },
        { title: 'MP3 toca em todo lugar', desc: 'WAV vai bem no desktop mas é instável em estéreos de carro mais antigos, alguns alto-falantes Bluetooth e muitos players web. MP3 simplesmente funciona.' },
        { title: 'A perda de qualidade a 128 kbps é inaudível para a maior parte das escutas', desc: 'Você não vai ouvir a diferença entre um MP3 a 128 kbps e o WAV original a menos que esteja masterizando música em monitores de estúdio. Para voz, podcast ou escuta casual é a troca óbvia.' },
        { title: 'Sem marca d\'água, sem popups', desc: 'O MP3 é só seu áudio re-codificado. Não adicionamos uma intro dizendo "Converted by..." e não mostramos um falso popup que você precisa esperar 30 segundos.' },
        { title: 'Privacidade por padrão', desc: 'WAVs de uma gravação de campo podem ser sensíveis. O arquivo cai no Vercel Blob storage, é convertido e apagado. Não olhamos para ele, não guardamos.' },
      ]}}
      useCases={{ title: 'Quando você converteria WAV para MP3', items: [
        { title: 'Gravação de campo → clipe pronto para email', desc: 'Um Zoom H1n ou gravador similar geralmente salva em WAV por padrão. Converta para MP3 antes de compartilhar com um produtor, jornalista ou transcritor.' },
        { title: 'Export de estúdio → escuta amigável ao celular', desc: 'Audacity, Reaper, Logic, todos saem em WAV por padrão. Exporte o mix bruto como MP3 para compartilhar com colaboradores ou ouvir em movimento.' },
        { title: 'Preparação de podcast', desc: 'A maioria dos hosts de podcast (Anchor, Buzzsprout, Transistor) aceita WAV mas recomenda MP3 porque o upload é mais rápido e os custos de banda são menores.' },
        { title: 'Limpeza de notas de voz', desc: 'Se seu celular ou gravador salvou em WAV, converta para MP3 antes de enfiar no seu arquivo Notion ou Notas, economiza armazenamento barato.' },
        { title: 'Pipeline de limpeza de áudio', desc: 'Você gravou em WAV para edição, fez seus edits, e agora quer que o final seja um MP3 menor para distribuição. Esse é o último passo.' },
      ]}}
      proTips={{ title: 'Dicas para conversão WAV para MP3 limpa', tips: [
        { title: 'WAV de 24-bit converte igual ao 16-bit', desc: 'MP3 não preserva profundidade de bit acima do que a codificação perceptual precisa. Um WAV de 24-bit não te dá vantagem audível sobre 16-bit quando re-codificado para MP3 a 128 kbps.' },
        { title: 'Se o WAV for maior que 25 MB, corte primeiro', desc: 'Abra no Audacity (grátis) ou QuickTime, corte para a parte que você realmente precisa, exporte como WAV menor, depois converta. Ou faça login para o limite de 60 MB.' },
        { title: 'Mono entra, mono sai', desc: 'Se seu WAV fonte é mono (típico para gravações de voz), o MP3 resultante será mono também. MP3 mono a 128 kbps é exagero, mas nosso conversor padroniza em 128 por simplicidade.' },
        { title: 'Para masterização ou arquivamento, não use MP3', desc: 'Se você está guardando o arquivo como cópia master para futura re-masterização, fique em WAV (ou FLAC). MP3 é um formato de distribuição, não arquivamento.' },
        { title: '320 kbps ou VBR? Abra o MP3 no Audacity depois', desc: 'Exportamos a 128 kbps constante. Para uma taxa maior ou VBR, leve o MP3 para o Audacity e re-exporte, a perda de qualidade de uma codificação extra é pequena.' },
        { title: 'WAVs com cabeçalhos estranhos falham silenciosamente', desc: 'Alguns arquivos BWF (broadcast WAV) têm cabeçalhos que ffmpeg não lê. Abra no Audacity, salve como WAV padrão e tente de novo.' },
      ]}}
      faq={[
        { q: 'A conversão WAV para MP3 é realmente grátis?', a: 'Sim. Sem conta necessária até 25 MB, sem limite de tempo, sem marca d\'água na saída. Display ads nas páginas editoriais pagam o servidor.' },
        { q: 'Qual o tamanho máximo do arquivo?', a: '25 MB anonimamente, 60 MB com conta gratuita. Um WAV de 25 MB tem cerca de 5 minutos a 16-bit/44.1 kHz estéreo, ou cerca de 2 minutos a 24-bit/96 kHz.' },
        { q: 'Quanto tempo leva?', a: 'Segundos. A conversão em si é muito mais rápida que tempo real, um WAV de 25 MB termina em 3-8 segundos. Velocidade de upload é o gargalo.' },
        { q: 'Que qualidade de MP3 vocês geram?', a: '128 kbps em taxa constante, 44.1 kHz, combina com a contagem de canais da fonte (mono in → mono out, estéreo in → estéreo out). Essa é a configuração universal "boa o suficiente para tudo".' },
        { q: 'Vocês guardam meus arquivos?', a: 'Não. O upload é deletado logo após a conversão. O resultado é eliminado em até uma hora pelo nosso cron de limpeza. Salve localmente.' },
        { q: 'O MP3 vai soar diferente do WAV?', a: 'Na maioria dos sistemas de reprodução e na maioria do material fonte, não. Masterizando em monitores de estúdio com ouvidos frescos, talvez, mas nesse ponto você não estaria usando um conversor web.' },
        { q: 'Posso obter uma taxa maior (256 ou 320 kbps)?', a: 'Não diretamente aqui. Leve nosso MP3 de 128 kbps para o Audacity e re-exporte na taxa que você quiser. A codificação dupla adiciona perda audível desprezível.' },
        { q: 'E FLAC em vez de MP3?', a: 'FLAC é compressão sem perdas, metade do tamanho do WAV, sem perda de qualidade. Para uso de arquivamento é a melhor escolha. Não geramos FLAC deste conversor, mas nossa página /flac-to-mp3 lida com a outra direção.' },
        { q: 'Meu WAV é float de 32-bit. Vai converter?', a: 'Sim. ffmpeg lida com WAV float de 32-bit sem problema. A saída MP3 é a mesma independente da profundidade de bit de entrada.' },
        { q: 'Por que áudio mono está virando MP3 estéreo?', a: 'Mantemos o layout de canais da fonte. Um WAV mono → MP3 mono. Um WAV estéreo → MP3 estéreo. Não fazemos upmix ou downmix.' },
        { q: 'Funciona para música ou só para voz?', a: 'Ambos. MP3 a 128 kbps é um leve compromisso perceptual para música, ok para escuta em carro, fones em ambientes barulhentos, reprodução casual. Para escuta musical crítica mantenha o WAV ou use FLAC.' },
        { q: 'Posso converter em lote?', a: 'Ainda não. Um arquivo por vez no plano grátis. Lote está planejado para um futuro plano Pro.' },
      ]}
      relatedLinks={[
        { href: '/pt/mp4-to-mp3', label: 'MP4 para MP3', desc: 'Extraia áudio MP3 de um arquivo de vídeo.' },
        { href: '/pt/flac-to-mp3', label: 'FLAC para MP3', desc: 'Converta FLAC sem perdas em MP3 portátil.' },
        { href: '/pt/mp3-to-wav', label: 'MP3 para WAV', desc: 'O reverso, WAV não comprimido a partir de MP3.' },
        { href: '/pt/transcribe-audio-to-text', label: 'Áudio para texto', desc: 'Precisa das palavras, não do áudio? Pule o MP3 e transcreva direto.' },
      ]}
    />
  )
}
