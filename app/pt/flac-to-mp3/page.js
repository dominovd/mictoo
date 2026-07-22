import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/flac-to-mp3',
  'fr': 'https://mictoo.com/fr/flac-to-mp3',
  'de': 'https://mictoo.com/de/flac-to-mp3',
  'es': 'https://mictoo.com/es/flac-to-mp3',
  'ru': 'https://mictoo.com/ru/flac-to-mp3',
  'it': 'https://mictoo.com/it/flac-to-mp3',
  'pt': 'https://mictoo.com/pt/flac-to-mp3',
  'pl': 'https://mictoo.com/pl/flac-to-mp3',
  'ja': 'https://mictoo.com/ja/flac-to-mp3',
  'ko': 'https://mictoo.com/ko/flac-to-mp3',
  'x-default': 'https://mictoo.com/flac-to-mp3',
}

export const metadata = {
  title: 'FLAC para MP3, conversor online gratuito | Mictoo',
  description:
    'Converta FLAC para MP3 gratuitamente online. Reduza o FLAC sem perdas para MP3 a 128 kbps em segundos. Sem registro, sem marca d’água. Até 25 MB.',
  alternates: { canonical: 'https://mictoo.com/pt/flac-to-mp3', languages: LANGS },
  openGraph: {
    title: 'FLAC para MP3, conversor online gratuito | Mictoo',
    description: 'Reduza o FLAC sem perdas para MP3 a 128 kbps. Sem registro.',
    url: 'https://mictoo.com/pt/flac-to-mp3',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FLAC para MP3, conversor online gratuito',
    description: 'Reduza o FLAC sem perdas para MP3 portátil.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function PtFlacToMp3Page() {
  return (
    <ConverterPageLayout
      locale="pt"
      mode="converter" from="flac" to="mp3" currentHref="/pt/flac-to-mp3"
      badge="FLAC → MP3 · Gratuito · Sem registro"
      h1First="FLAC para MP3"
      h1Second="Conversor online gratuito"
      subtitle="Coloque um arquivo FLAC sem perdas (de um rip de CD, download do Tidal ou fonte de alta resolução) e obtenha um MP3 portátil a 128 kbps em segundos."
      outputFormat="MP3" outputQuality="128 kbps" outputAudio="Estéreo"
      stepsTitle="Como funciona a conversão de FLAC para MP3"
      steps={[
        { icon: 'upload',   title: 'Coloque o FLAC',       desc: 'Qualquer FLAC (nativo ou FLAC em OGG). Até 25 MB anonimamente.' },
        { icon: 'waveform', title: 'Nós decodificamos e codificamos', desc: 'ffmpeg decodifica o FLAC sem perdas e re-codifica para MP3 estéreo a 128 kbps.' },
        { icon: 'download', title: 'Baixe o MP3',    desc: 'Obtenha seu MP3 5-8x menor, pronto para qualquer reprodutor.' },
      ]}
      previewInputName="album-track.flac"
      previewInputSize="42 MB · 00:05:12 · 16-bit / 44.1 kHz"
      previewOutputName="album-track.mp3"
      previewOutputSize="00:05:12 · 128 kbps · 4.8 MB"
      whyTitle="Por que usar Mictoo para FLAC para MP3?"
      whyCards={[
        { icon: 'target',    title: 'Mantém o master sem perdas', desc: 'Seu arquivo FLAC nunca é modificado. Nós apenas produzimos uma cópia.' },
        { icon: 'fileAudio', title: 'Cópia de audição menor',    desc: 'Um MP3 a 128 kbps é muitas vezes várias vezes menor que o FLAC. A conversão é com perdas, então mantenha o FLAC como seu master.' },
        { icon: 'lock',      title: 'Arquivos deletados após',       desc: 'O FLAC enviado é excluído após a conversão; o MP3 é eliminado dentro de uma hora.' },
        { icon: 'shield',    title: 'Sem marca d’água ou tag',       desc: 'Apenas o áudio, re-codificado. Sem splice de introdução, sem metadados de marca.' },
      ]}
      scenariosTitle="Quando FLAC para MP3 é útil"
      scenarios={[
        { icon: 'headphones', title: 'Rip de CD para telefone' },
        { icon: 'mail',       title: 'Enviar um arquivo menor por e-mail' },
        { icon: 'archive',    title: 'Biblioteca de música portátil' },
        { icon: 'editPen',    title: 'Importação para DAW' },
        { icon: 'waveform',   title: 'Cópia para ouvir podcast' },
        { icon: 'video',      title: 'Trilha sonora de vídeo' },
      ]}
      tipsTitle="Dicas para uma conversão limpa de FLAC para MP3"
      tips={[
        'Mantenha o FLAC como a cópia de arquivo sem perdas.',
        '128 kbps é transparente para a maioria das audições.',
        'Para faixas acima de 25 MB, corte ou divida a fonte antes de enviar.',
        'Tags de metadados Vorbis (título/artista) não são transferidas para o MP3.',
      ]}
      processTitle="O que acontece durante a conversão"
      processSteps={['Container FLAC', 'Decodificação sem perdas', 'Codificação MP3']}
      compareTitle="FLAC vs MP3"
      compareRows={[
        { fmt: 'FLAC', contains: 'Não', size: 'Grande (~5-8 MB/min)', best: 'Arquivamento, reprodução hi-fi' },
        { fmt: 'MP3',  contains: 'Não', size: 'Pequeno (~1 MB/min)',   best: 'Compartilhamento, telefones, em todo o lado' },
      ]}
      faq={[
        { q: 'O conversor de FLAC para MP3 é gratuito?', a: 'Sim. Arquivos de até 25 MB podem ser convertidos sem uma conta, e a saída não tem marca d’água.' },
        { q: 'Perco qualidade ao converter FLAC para MP3?', a: 'Tecnicamente sim (MP3 é com perdas), mas a 128 kbps a perda é inaudível para audições típicas. Mantenha o FLAC como a cópia de arquivo.' },
        { q: 'Arquivos FLAC em OGG são suportados?', a: 'Sim. Tanto FLAC nativo (bytes mágicos fLaC) quanto FLAC dentro de containers OGG funcionam.' },
        { q: 'Os arquivos são armazenados?', a: 'Não. O FLAC enviado é excluído após a conversão; o MP3 é eliminado dentro de uma hora.' },
        { q: 'Meu FLAC tem mais de 25 MB. E agora?', a: 'Corte ou divida a fonte, ou exporte uma cópia de audição de menor resolução antes de enviar.' },
      ]}
      ctaHeadline="Converta seu FLAC para MP3 agora"
      ctaSubtitle="Coloque seu FLAC e obtenha um MP3 portátil em segundos. Sem registro. Sem marca d’água."
      ctaButton="Escolha um arquivo FLAC"
      moreTools={[
        { href: '/pt/wav-to-mp3',  label: 'WAV para MP3' },
        { href: '/pt/mp4-to-mp3',  label: 'MP4 para MP3' },
        { href: '/pt/webm-to-mp3', label: 'WEBM para MP3' },
        { href: '/pt/flac-to-text', label: 'FLAC para Texto' },
      ]}
    />
  )
}