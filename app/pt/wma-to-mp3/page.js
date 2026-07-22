import ConverterPageLayout from '@/components/ConverterPageLayout'

export const metadata = {
  title: 'WMA para MP3: Conversor Gratuito para Windows Media Audio Antigo | Mictoo',
  description:
    'Converta arquivos WMA antigos para MP3 universal. Criado para resgatar arquivos antigos de Windows Media, exportações de correio de voz e CDs ripados que nada moderno consegue abrir.',
  alternates: {
    canonical: 'https://mictoo.com/pt/wma-to-mp3',
    languages: {
      'en': 'https://mictoo.com/wma-to-mp3',
      'fr': 'https://mictoo.com/fr/wma-to-mp3',
      'de': 'https://mictoo.com/de/wma-to-mp3',
      'es': 'https://mictoo.com/es/wma-to-mp3',
      'ru': 'https://mictoo.com/ru/wma-to-mp3',
      'it': 'https://mictoo.com/it/wma-to-mp3',
      'pt': 'https://mictoo.com/pt/wma-to-mp3',
      'pl': 'https://mictoo.com/pl/wma-to-mp3',
      'ja': 'https://mictoo.com/ja/wma-to-mp3',
      'ko': 'https://mictoo.com/ko/wma-to-mp3',
      'x-default': 'https://mictoo.com/wma-to-mp3',
    },
  },
  openGraph: {
    title: 'WMA para MP3: Conversor de Windows Media Antigo | Mictoo',
    description: 'Resgate arquivos WMA antigos, exportações de correio de voz, CDs ripados.',
    url: 'https://mictoo.com/pt/wma-to-mp3',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WMA para MP3: Conversor Gratuito',
    description: 'Resgate arquivos WMA antigos. Gratuito.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function PtWmaToMp3Page() {
  return (
    <ConverterPageLayout
      locale="pt"
      mode="converter" from="wma" to="mp3" currentHref="/pt/wma-to-mp3"
      badge="WMA → MP3 · Gratuito · Resgate de legado"
      h1First="WMA para MP3"
      h1Second="Conversor gratuito de Windows Media antigo"
      subtitle="Coloque um arquivo WMA antigo (exportação de correio de voz, CD ripado, arquivo de Windows Media antigo) e obtenha um MP3 universal que qualquer dispositivo ou reprodutor moderno abrirá."
      outputFormat="MP3" outputQuality="128 kbps" outputAudio="Estéreo"
      stepsTitle="Como funciona a conversão de WMA para MP3"
      steps={[
        { icon: 'upload',   title: 'Coloque o WMA',        desc: 'Qualquer versão de Windows Media Audio, até 25 MB anonimamente.' },
        { icon: 'waveform', title: 'Nós decodificamos e codificamos', desc: 'ffmpeg lê o WMA e re-encoda para MP3 estéreo de 128 kbps a 44.1 kHz.' },
        { icon: 'download', title: 'Baixe o MP3',    desc: 'Obtenha um MP3 compatível com a maioria dos reprodutores atuais, telefones e editores de áudio.' },
      ]}
      previewInputName="correio-voz-2011.wma"
      previewInputSize="1.2 MB · 00:02:34"
      previewOutputName="correio-voz-2011.mp3"
      previewOutputSize="00:02:34 · 128 kbps · 2.4 MB"
      whyTitle="Por que usar Mictoo para WMA para MP3?"
      whyCards={[
        { icon: 'target',   title: 'Arquivos legados tratados',    desc: 'Arquivos antigos de Windows Media Audio que iTunes, Apple Music e reprodutores modernos se recusam a abrir.' },
        { icon: 'fileAudio',title: 'Ampla compatibilidade com MP3', desc: 'MP3 é amplamente suportado em macOS, Linux, iPhone, Android e reprodutores de música comuns.' },
        { icon: 'lock',     title: 'Arquivos deletados após',     desc: 'O WMA enviado é excluído após a conversão; o MP3 é eliminado dentro de uma hora.' },
        { icon: 'shield',   title: 'Sem marca d’água ou tag',     desc: 'Apenas o áudio, re-encodado. Sem introdução marcada, sem metadados injetados.' },
      ]}
      scenariosTitle="Quando WMA para MP3 é útil"
      scenarios={[
        { icon: 'archive',    title: 'Ripe de CD legado' },
        { icon: 'headphones', title: 'Exportação antiga de correio de voz' },
        { icon: 'editPen',    title: 'Saída do Windows Movie Maker' },
        { icon: 'mail',       title: 'Compartilhar em dispositivo não-Windows' },
        { icon: 'video',      title: 'Importar para editor moderno' },
        { icon: 'waveform',   title: 'Resgatar arquivo de fita' },
      ]}
      tipsTitle="Dicas para uma conversão limpa de WMA para MP3"
      tips={[
        'WMA protegido por DRM (alugueres antigos do Windows Media Player) não pode ser decodificado.',
        'WMA de bitrate muito baixo (correio de voz) soará igual à fonte.',
        'Vídeo WMV antigo não é suportado aqui; use MP4 para MP3 em vez disso.',
        'Para gravações acima de 25 MB, corte ou divida a fonte antes de enviar.',
      ]}
      processTitle="O que acontece durante a conversão"
      processSteps={['WMA (ASF)', 'Decodificar Windows Media', 'Codificação MP3']}
      compareTitle="WMA vs MP3"
      compareRows={[
        { fmt: 'WMA', contains: 'Não', size: 'Pequeno', best: 'Fluxos de trabalho legados do Windows (descontinuado)' },
        { fmt: 'MP3', contains: 'Não', size: 'Pequeno', best: 'Compatibilidade universal, dispositivos modernos' },
      ]}
      faq={[
        { q: 'O conversor de WMA para MP3 é gratuito?', a: 'Sim. Arquivos de até 25 MB podem ser convertidos sem uma conta, e a saída não tem marca d’água.' },
        { q: 'Por que os reprodutores modernos se recusam a abrir WMA?', a: 'A Apple nunca suportou WMA. Alguns reprodutores Android o abandonaram. WMA é um formato legado da Microsoft que o Windows tem se afastado.' },
        { q: 'Você pode converter WMA protegido por DRM?', a: 'Não. Alugueres antigos do Windows Media Player usavam DRM que o ffmpeg não consegue decodificar. Nunca burlamos a proteção de direitos autorais.' },
        { q: 'Os arquivos são armazenados?', a: 'Não. O WMA enviado é excluído após a conversão; o MP3 é eliminado dentro de uma hora.' },
        { q: 'E quanto ao WMA sem perdas?', a: 'O conversor também lê WMA sem perdas, mas a saída ainda é MP3 de 128 kbps (com perdas). Para saída sem perdas, converta para WAV em vez disso.' },
      ]}
      ctaHeadline="Converta seu WMA para MP3 agora"
      ctaSubtitle="Resgate o Windows Media Audio legado. Obtenha um MP3 portátil em segundos."
      ctaButton="Escolha um arquivo WMA"
      moreTools={[
        { href: '/pt/mp4-to-mp3',  label: 'MP4 para MP3' },
        { href: '/pt/wav-to-mp3',  label: 'WAV para MP3' },
        { href: '/pt/flac-to-mp3', label: 'FLAC para MP3' },
        { href: '/pt/aac-to-mp3',  label: 'AAC para MP3' },
      ]}
    />
  )
}