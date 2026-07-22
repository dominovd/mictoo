import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/webm-to-mp3',
  'fr': 'https://mictoo.com/fr/webm-to-mp3',
  'de': 'https://mictoo.com/de/webm-to-mp3',
  'es': 'https://mictoo.com/es/webm-to-mp3',
  'ru': 'https://mictoo.com/ru/webm-to-mp3',
  'it': 'https://mictoo.com/it/webm-to-mp3',
  'pt': 'https://mictoo.com/pt/webm-to-mp3',
  'pl': 'https://mictoo.com/pl/webm-to-mp3',
  'ja': 'https://mictoo.com/ja/webm-to-mp3',
  'ko': 'https://mictoo.com/ko/webm-to-mp3',
  'x-default': 'https://mictoo.com/webm-to-mp3',
}

export const metadata = {
  title: 'WEBM para MP3, conversor online gratuito | Mictoo',
  description:
    'Converta WEBM para MP3 gratuitamente online. Extraia áudio MP3 de qualquer vídeo ou arquivo de áudio WEBM em segundos. Sem registro, sem marca d’água. Até 25 MB.',
  alternates: { canonical: 'https://mictoo.com/pt/webm-to-mp3', languages: LANGS },
  openGraph: {
    title: 'WEBM para MP3, conversor online gratuito | Mictoo',
    description: 'Extraia MP3 de qualquer WEBM. Sem registro, sem marca d’água.',
    url: 'https://mictoo.com/pt/webm-to-mp3',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WEBM para MP3, conversor online gratuito',
    description: 'Extraia MP3 de qualquer WEBM.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function PtWebmToMp3Page() {
  return (
    <ConverterPageLayout
      locale="pt"
      mode="converter" from="webm" to="mp3" currentHref="/pt/webm-to-mp3"
      badge="WEBM → MP3 · Gratuito · Sem registro"
      h1First="WEBM para MP3"
      h1Second="Conversor online gratuito"
      subtitle="Coloque um WEBM (do Loom, OBS, gravação do Firefox, ou um downloader do YouTube) e obtenha um MP3 limpo em segundos. Sem marca d’água, sem e-mail."
      outputFormat="MP3" outputQuality="128 kbps" outputAudio="Estéreo"
      stepsTitle="Como funciona a conversão de WEBM para MP3"
      steps={[
        { icon: 'upload',   title: 'Coloque o WEBM',   desc: 'Vídeo ou áudio apenas WEBM, ambos funcionam. Até 25 MB anonimamente.' },
        { icon: 'waveform', title: 'Nós demuxamos e codificamos', desc: 'ffmpeg remove a faixa de vídeo (se houver) e re-codifica o áudio Opus ou Vorbis para MP3 a 128 kbps.' },
        { icon: 'download', title: 'Baixe o MP3', desc: 'Obtenha seu MP3 limpo em segundos. Nome de arquivo original com extensão .mp3.' },
      ]}
      previewInputName="loom-walkthrough.webm"
      previewInputSize="72 MB · 00:08:12"
      previewOutputName="loom-walkthrough.mp3"
      previewOutputSize="00:08:12 · 128 kbps · 7.5 MB"
      whyTitle="Por que usar Mictoo para WEBM para MP3?"
      whyCards={[
        { icon: 'target',   title: 'Suporta Opus e Vorbis', desc: 'Ambos os codecs de áudio WEBM funcionam diretamente, sem reempacotamento manual.' },
        { icon: 'video',    title: 'Vídeo em WEBM tratado',   desc: 'Nós demuxamos a faixa de vídeo no servidor. Você nunca precisa extrair o áudio você mesmo.' },
        { icon: 'lock',     title: 'Arquivos excluídos após',     desc: 'WEBM enviado é removido após a conversão; o MP3 é eliminado dentro de uma hora.' },
        { icon: 'shield',   title: 'Sem marca d’água ou tag',     desc: 'O MP3 de saída não tem emenda de introdução, nem metadados com marca.' },
      ]}
      scenariosTitle="Quando WEBM para MP3 é útil"
      scenarios={[
        { icon: 'video',      title: 'Tutorial do Loom' },
        { icon: 'headphones', title: 'Saída de downloader do YouTube' },
        { icon: 'mail',       title: 'Enviar um arquivo menor por e-mail' },
        { icon: 'editPen',    title: 'Preparar para transcrição' },
        { icon: 'waveform',   title: 'Gravação no navegador' },
        { icon: 'archive',    title: 'Arquivar apenas áudio' },
      ]}
      tipsTitle="Dicas para uma conversão limpa de WEBM para MP3"
      tips={[
        'WEBM de vídeo é auto-demuxado, não há necessidade de remover primeiro.',
        'Para gravações acima de 25 MB, corte ou divida a fonte antes de enviar.',
        'A faixa de áudio padrão é usada se múltiplas existirem.',
        'Para transcrição do Whisper, envie o WEBM diretamente para /webm-to-text.',
      ]}
      processTitle="O que acontece durante a conversão"
      processSteps={['Container WEBM', 'Extração da faixa de áudio', 'Codificação MP3']}
      compareTitle="WEBM vs MP3"
      compareRows={[
        { fmt: 'WEBM', contains: 'Frequentemente sim', size: 'Médio-grande', best: 'Gravação na web, vídeo do navegador' },
        { fmt: 'MP3',  contains: 'Não',        size: 'Pequeno',        best: 'Compartilhamento, reprodução, em todo o lado' },
      ]}
      faq={[
        { q: 'O conversor de WEBM para MP3 é gratuito?', a: 'Sim. Arquivos até 25 MB podem ser convertidos sem uma conta, e a saída não tem marca d’água.' },
        { q: 'E se meu WEBM tiver vídeo?', a: 'Nós demuxamos a faixa de vídeo no servidor e apenas codificamos o áudio. Você não precisa remover nada previamente.' },
        { q: 'Quais codecs de áudio WEBM funcionam?', a: 'Opus (moderno, mais comum) e Vorbis (mais antigo). Ambos são suportados diretamente.' },
        { q: 'Os arquivos enviados são armazenados?', a: 'Não. O WEBM é removido após a conversão; o MP3 é eliminado dentro de uma hora.' },
        { q: 'Meu WEBM tem mais de 25 MB. E agora?', a: 'Corte a fonte antes de enviar, ou extraia um WEBM apenas de áudio primeiro para reduzir o tamanho do arquivo.' },
      ]}
      ctaHeadline="Converta seu WEBM para MP3 agora"
      ctaSubtitle="Coloque seu WEBM e obtenha um MP3 limpo em segundos. Sem registro. Sem marca d’água."
      ctaButton="Escolha um arquivo WEBM"
      moreTools={[
        { href: '/pt/mp4-to-mp3',  label: 'MP4 para MP3' },
        { href: '/pt/wav-to-mp3',  label: 'WAV para MP3' },
        { href: '/pt/flac-to-mp3', label: 'FLAC para MP3' },
        { href: '/pt/webm-to-text', label: 'WEBM para Texto' },
      ]}
    />
  )
}