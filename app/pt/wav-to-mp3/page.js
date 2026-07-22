import ConverterPageLayout from '@/components/ConverterPageLayout'

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
  title: 'WAV para MP3, conversor online gratuito | Mictoo',
  description:
    'Converta WAV para MP3 gratuitamente online. Reduza arquivos WAV sem perdas para MP3 portátil a 128 kbps em segundos. Sem registro, sem marca d’água. Até 25 MB.',
  alternates: { canonical: 'https://mictoo.com/pt/wav-to-mp3', languages: LANGS },
  openGraph: {
    title: 'WAV para MP3, conversor online gratuito | Mictoo',
    description: 'Reduza WAV sem perdas para MP3 portátil a 128 kbps. Sem registro.',
    url: 'https://mictoo.com/pt/wav-to-mp3',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WAV para MP3, conversor online gratuito',
    description: 'Reduza WAV para MP3 portátil.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function PtWavToMp3Page() {
  return (
    <ConverterPageLayout
      locale="pt"
      mode="converter" from="wav" to="mp3" currentHref="/pt/wav-to-mp3"
      badge="WAV → MP3 · Gratuito · Sem registro"
      h1First="WAV para MP3"
      h1Second="Conversor online gratuito"
      subtitle="Arraste um arquivo WAV não comprimido e obtenha um pequeno MP3 portátil em segundos. Sem marca d’água, sem e-mail, sem espera."
      outputFormat="MP3" outputQuality="128 kbps" outputAudio="Estéreo"
      stepsTitle="Como funciona a conversão de WAV para MP3"
      steps={[
        { icon: 'upload',   title: 'Arraste o WAV',         desc: 'Carregue um arquivo WAV de até 25 MB. Não é necessário criar uma conta.' },
        { icon: 'waveform', title: 'Nós codificamos para MP3', desc: 'ffmpeg codifica para MP3 estéreo a 128 kbps a 44.1 kHz. Um WAV de 25 MB termina em cerca de 10 segundos.' },
        { icon: 'download', title: 'Baixe o MP3',          desc: 'Obtenha um MP3 menor a 128 kbps com o nome de arquivo base original.' },
      ]}
      previewInputName="studio-bounce.wav"
      previewInputSize="120 MB · 00:12:34 · 16-bit / 44.1 kHz"
      previewOutputName="studio-bounce.mp3"
      previewOutputSize="00:12:34 · 128 kbps · 11.5 MB"
      whyTitle="Por que usar Mictoo para WAV para MP3?"
      whyCards={[
        { icon: 'target',   title: 'Um trabalho bem feito',      desc: 'Apenas a conversão. Sem pop-up de newsletter, sem barra de progresso falsa.' },
        { icon: 'fileAudio',title: 'Saída muito menor',         desc: 'Arquivos WAV PCM não comprimidos geralmente ficam 8, 12× menores a 128 kbps. A relação exata depende da fonte.' },
        { icon: 'lock',     title: 'Arquivos excluídos após',   desc: 'Seu upload é excluído assim que a conversão termina; o MP3 é removido dentro de uma hora.' },
        { icon: 'shield',   title: 'Sem marca d’água ou tag',   desc: 'Sem introdução com marca, sem metadados injetados. Apenas o áudio, re-codificado.' },
      ]}
      scenariosTitle="Quando WAV para MP3 é útil"
      scenarios={[
        { icon: 'headphones', title: 'Studio bounce para telefone' },
        { icon: 'mail',       title: 'Enviar um arquivo menor' },
        { icon: 'archive',    title: 'Arquivar em tamanho menor' },
        { icon: 'editPen',    title: 'Preparar para transcrição' },
        { icon: 'waveform',   title: 'Importação de biblioteca de música' },
        { icon: 'video',      title: 'Dublagem para vídeo' },
      ]}
      tipsTitle="Dicas para uma conversão limpa de WAV para MP3"
      tips={[
        '128 kbps é transparente para a maioria das audições.',
        'Se o WAV tiver mais de 25 MB, corte ou comprima antes de carregar.',
        'WAV multicanal é misturado para estéreo.',
        'Para preservação sem perdas, mantenha o WAV como cópia de arquivo.',
      ]}
      processTitle="O que acontece durante a conversão"
      processSteps={['Container WAV', 'Decodificar PCM', 'Codificação MP3']}
      compareTitle="WAV vs MP3"
      compareRows={[
        { fmt: 'WAV', contains: 'Não', size: 'Grande (~10 MB/min)', best: 'Edição, arquivamento, estúdio' },
        { fmt: 'MP3', contains: 'Não', size: 'Pequeno (~1 MB/min)',  best: 'Compartilhamento, reprodução, audição' },
      ]}
      faq={[
        { q: 'O conversor de WAV para MP3 é gratuito?', a: 'Sim. Não é necessário criar uma conta para arquivos de até 25 MB, e a saída não tem marca d’água.' },
        { q: 'A conversão reduz a qualidade do áudio?', a: 'Levemente. MP3 a 128 kbps é um formato com perdas, mas a queda de qualidade é inaudível para voz e reprodução musical típica. Mantenha seu WAV como o original.' },
        { q: 'Os arquivos carregados são armazenados?', a: 'Não. Seu WAV vai para o armazenamento Vercel Blob apenas o tempo necessário para converter, depois é excluído. O MP3 é removido dentro de uma hora.' },
        { q: 'Posso converter um WAV grande?', a: 'O limite atual de upload é 25 MB. Para um arquivo maior, corte ou exporte uma cópia mono ou com taxa de amostragem inferior antes de carregar.' },
        { q: 'Funciona em dispositivos móveis?', a: 'Sim. Os uploads funcionam no iOS Safari e no Android Chrome.' },
      ]}
      ctaHeadline="Converta seu WAV para MP3 agora"
      ctaSubtitle="Arraste seu WAV e obtenha um MP3 portátil em segundos. Sem registro. Sem marca d’água."
      ctaButton="Escolha um arquivo WAV"
      moreTools={[
        { href: '/pt/mp4-to-mp3',  label: 'MP4 para MP3' },
        { href: '/pt/webm-to-mp3', label: 'WEBM para MP3' },
        { href: '/pt/flac-to-mp3', label: 'FLAC para MP3' },
        { href: '/pt/mp3-to-wav',  label: 'MP3 para WAV' },
        { href: '/pt/wav-to-text', label: 'WAV para Texto' },
      ]}
    />
  )
}