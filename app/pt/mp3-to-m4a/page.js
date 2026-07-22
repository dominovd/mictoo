import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/mp3-to-m4a',
  'fr': 'https://mictoo.com/fr/mp3-to-m4a',
  'de': 'https://mictoo.com/de/mp3-to-m4a',
  'es': 'https://mictoo.com/es/mp3-to-m4a',
  'ru': 'https://mictoo.com/ru/mp3-to-m4a',
  'it': 'https://mictoo.com/it/mp3-to-m4a',
  'pt': 'https://mictoo.com/pt/mp3-to-m4a',
  'pl': 'https://mictoo.com/pl/mp3-to-m4a',
  'ja': 'https://mictoo.com/ja/mp3-to-m4a',
  'ko': 'https://mictoo.com/ko/mp3-to-m4a',
  'x-default': 'https://mictoo.com/mp3-to-m4a',
}

export const metadata = {
  title: 'MP3 para M4A, conversor online gratuito | Mictoo',
  description:
    'Converta MP3 para M4A gratuitamente online. Re-encode MP3 para AAC dentro de um contêiner M4A para iPhone, iTunes e o ecossistema Apple. Sem registro, sem marca d’água.',
  alternates: { canonical: 'https://mictoo.com/pt/mp3-to-m4a', languages: LANGS },
  openGraph: {
    title: 'MP3 para M4A, conversor online gratuito | Mictoo',
    description: 'MP3 para AAC dentro de M4A. Amigável para iPhone. Sem registro.',
    url: 'https://mictoo.com/pt/mp3-to-m4a',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MP3 para M4A, conversor online gratuito',
    description: 'AAC amigável para iPhone.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function PtMp3ToM4aPage() {
  return (
    <ConverterPageLayout
      locale="pt"
      mode="converter" from="mp3" to="m4a" currentHref="/pt/mp3-to-m4a"
      badge="MP3 → M4A · Gratuito · Amigável para iPhone"
      h1First="MP3 para M4A"
      h1Second="Conversor online gratuito"
      subtitle="Arraste um MP3 e obtenha um M4A (AAC em contêiner MP4) para Notas de Voz do iPhone, iTunes, GarageBand e o ecossistema Apple. Sem marca d’água, sem e-mail."
      outputFormat="M4A" outputQuality="128 kbps AAC" outputAudio="Estéreo"
      stepsTitle="Como funciona a conversão de MP3 para M4A"
      steps={[
        { icon: 'upload',   title: 'Arraste o MP3',        desc: 'Qualquer MP3 de bitrate, até 25 MB anonimamente.' },
        { icon: 'waveform', title: 'Re-encode para AAC', desc: 'ffmpeg decodifica o MP3 e re-encode como 128 kbps AAC dentro de um contêiner .m4a.' },
        { icon: 'download', title: 'Baixe o M4A',   desc: 'Arquivo amigável para iPhone com o nome original mais a extensão .m4a.' },
      ]}
      previewInputName="episódio.mp3"
      previewInputSize="8.4 MB · 00:09:22"
      previewOutputName="episódio.m4a"
      previewOutputSize="00:09:22 · 128 kbps AAC · 7.6 MB"
      whyTitle="Por que usar Mictoo para MP3 para M4A?"
      whyCards={[
        { icon: 'target',    title: 'Saída amigável para Apple',    desc: 'M4A funciona nativamente com iPhone, iTunes, GarageBand e fluxos de trabalho de mídia da Apple.' },
        { icon: 'fileAudio', title: 'Saída previsível',       desc: 'O arquivo é re-encode como 128 kbps AAC. Seu tamanho final depende principalmente da duração da gravação.' },
        { icon: 'lock',      title: 'Arquivos excluídos após',      desc: 'MP3 enviado é excluído após a conversão; o M4A é eliminado dentro de uma hora.' },
        { icon: 'shield',    title: 'Sem marca d’água ou tag',      desc: 'Apenas o áudio, re-encode. Sem introdução com marca, sem metadados injetados.' },
      ]}
      scenariosTitle="Quando MP3 para M4A é útil"
      scenarios={[
        { icon: 'headphones', title: 'Importação para biblioteca do iTunes' },
        { icon: 'waveform',   title: 'Projeto do GarageBand' },
        { icon: 'video',      title: 'Trilha sonora do iMovie' },
        { icon: 'mail',       title: 'Compatibilidade com AirDrop' },
        { icon: 'archive',    title: 'Arquivo do ecossistema Apple' },
        { icon: 'editPen',    title: 'Importação para Logic Pro' },
      ]}
      tipsTitle="Dicas para uma conversão limpa de MP3 para M4A"
      tips={[
        'MP3 e AAC são ambos com perdas; re-encode adiciona uma pequena perda de qualidade.',
        'Para sem perdas, converta para WAV em vez disso.',
        'As tags ID3 não são transferidas para o M4A.',
        'Mantenha o arquivo de origem abaixo do limite atual de upload de 25 MB.',
      ]}
      processTitle="O que acontece durante a conversão"
      processSteps={['Stream MP3', 'Decodificar', 'Codificação AAC / M4A']}
      compareTitle="MP3 vs M4A"
      compareRows={[
        { fmt: 'MP3', contains: 'Não', size: 'Pequeno', best: 'Universal, players legados' },
        { fmt: 'M4A', contains: 'Não', size: 'Um pouco menor', best: 'iPhone, iTunes, GarageBand, apps da Apple' },
      ]}
      faq={[
        { q: 'O conversor de MP3 para M4A é gratuito?', a: 'Sim. Arquivos de até 25 MB podem ser convertidos sem uma conta, e a saída não tem marca d’água.' },
        { q: 'Converter MP3 para M4A melhora a qualidade?', a: 'Não. Re-encode de um formato com perdas para outro só pode perder qualidade ligeiramente. Faça isso apenas para compatibilidade com o ecossistema Apple.' },
        { q: 'O M4A funcionará no iTunes e Apple Music?', a: 'Sim. AAC padrão dentro do contêiner MP4 é o formato exato que o iTunes usa.' },
        { q: 'Os arquivos são armazenados?', a: 'Não. MP3 enviado é excluído após a conversão; o M4A é eliminado dentro de uma hora.' },
        { q: 'Posso converter para M4A sem perdas (ALAC)?', a: 'Não a partir desta página. A saída é AAC com perdas. Para sem perdas, converta MP3 para WAV primeiro, depois para ALAC no seu DAW.' },
      ]}
      ctaHeadline="Converta seu MP3 para M4A agora"
      ctaSubtitle="Arraste seu MP3 e obtenha um M4A amigável para iPhone em segundos."
      ctaButton="Escolha um arquivo MP3"
      moreTools={[
        { href: '/pt/m4a-to-mp3',  label: 'M4A para MP3' },
        { href: '/pt/mp3-to-wav',  label: 'MP3 para WAV' },
        { href: '/pt/mp4-to-mp3',  label: 'MP4 para MP3' },
        { href: '/pt/m4a-to-text', label: 'M4A para Texto' },
      ]}
    />
  )
}