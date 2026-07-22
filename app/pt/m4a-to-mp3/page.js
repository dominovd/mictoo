import ConverterPageLayout from '@/components/ConverterPageLayout'

export const metadata = {
  title: 'M4A para MP3: Conversor Gratuito para Áudio Apple | Mictoo',
  description:
    'Converta gravações de voz do iPhone, bounces do GarageBand e arquivos M4A do ecossistema Apple para MP3 universal para anfitriões de podcast, telemóveis Android mais antigos e leitores legados.',
  alternates: {
    canonical: 'https://mictoo.com/pt/m4a-to-mp3',
    languages: {
      'en': 'https://mictoo.com/m4a-to-mp3',
      'fr': 'https://mictoo.com/fr/m4a-to-mp3',
      'de': 'https://mictoo.com/de/m4a-to-mp3',
      'es': 'https://mictoo.com/es/m4a-to-mp3',
      'ru': 'https://mictoo.com/ru/m4a-to-mp3',
      'it': 'https://mictoo.com/it/m4a-to-mp3',
      'pt': 'https://mictoo.com/pt/m4a-to-mp3',
      'pl': 'https://mictoo.com/pl/m4a-to-mp3',
      'ja': 'https://mictoo.com/ja/m4a-to-mp3',
      'ko': 'https://mictoo.com/ko/m4a-to-mp3',
      'x-default': 'https://mictoo.com/m4a-to-mp3',
    },
  },
  openGraph: {
    title: 'M4A para MP3: Conversor Gratuito para Áudio Apple | Mictoo',
    description: 'Gravações de voz do iPhone e bounces do GarageBand para MP3 universal.',
    url: 'https://mictoo.com/pt/m4a-to-mp3',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'M4A para MP3: Conversor Gratuito',
    description: 'Gravações de voz do iPhone para MP3 universal.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function PtM4aToMp3Page() {
  return (
    <ConverterPageLayout
      locale="pt"
      mode="converter" from="m4a" to="mp3" currentHref="/pt/m4a-to-mp3"
      badge="M4A → MP3 · Gratuito · Áudio Apple"
      h1First="M4A para MP3"
      h1Second="Conversor gratuito para áudio do ecossistema Apple"
      subtitle="Coloque uma gravação de voz do iPhone, um bounce do GarageBand ou uma exportação do Apple Podcasts e obtenha um MP3 universal para anfitriões de podcast, telemóveis Android mais antigos e leitores legados."
      outputFormat="MP3" outputQuality="128 kbps" outputAudio="Estéreo"
      stepsTitle="Como funciona a conversão de M4A para MP3"
      steps={[
        { icon: 'upload',   title: 'Coloque o M4A',        desc: 'De gravações de voz, GarageBand, Apple Podcasts. Até 25 MB anonimamente.' },
        { icon: 'waveform', title: 'Nós decodificamos e codificamos', desc: 'ffmpeg decodifica o AAC dentro do contêiner M4A e re-codifica para MP3 a 128 kbps.' },
        { icon: 'download', title: 'Baixe o MP3',    desc: 'Obtenha um MP3 compatível com a maioria dos leitores e editores de áudio atuais.' },
      ]}
      previewInputName="voice-memo.m4a"
      previewInputSize="6.2 MB · 00:12:04"
      previewOutputName="voice-memo.mp3"
      previewOutputSize="00:12:04 · 128 kbps · 11.5 MB"
      whyTitle="Por que usar o Mictoo para M4A para MP3?"
      whyCards={[
        { icon: 'target',   title: 'Amigável para iPhone',        desc: 'Gravações de voz do iPhone em .m4a são aceites diretamente, sem necessidade de renomear.' },
        { icon: 'fileAudio',title: 'MP3 para anfitriões legados',   desc: 'Alguns anfitriões de podcast e dispositivos Android mais antigos ainda preferem MP3 em vez de M4A.' },
        { icon: 'lock',     title: 'Arquivos excluídos após',    desc: 'O M4A carregado é excluído após a conversão; o MP3 é eliminado dentro da hora.' },
        { icon: 'shield',   title: 'Sem marca d’água ou tag',    desc: 'Apenas o áudio, re-codificado. Sem introdução com marca, sem metadados injetados.' },
      ]}
      scenariosTitle="Quando M4A para MP3 é útil"
      scenarios={[
        { icon: 'headphones', title: 'Gravação de voz do iPhone' },
        { icon: 'waveform',   title: 'Bounce do GarageBand' },
        { icon: 'mail',       title: 'Anfitrião de podcast legado' },
        { icon: 'archive',    title: 'Formato de biblioteca consistente' },
        { icon: 'editPen',    title: 'Importação em DAW mais antiga' },
        { icon: 'video',      title: 'Editor de vídeo não Apple' },
      ]}
      tipsTitle="Dicas para uma conversão limpa de M4A para MP3"
      tips={[
        'Se a sua plataforma aceita M4A, pode não ser necessário converter.',
        'Ambos os formatos são com perda; a re-codificação adiciona uma pequena perda de qualidade.',
        'Os metadados ID3 e iTunes não são transferidos.',
        'Para transcrição, carregue o M4A diretamente para /pt/m4a-to-text.',
      ]}
      processTitle="O que acontece durante a conversão"
      processSteps={['M4A (contêiner MP4)', 'Decodificação AAC', 'Codificação MP3']}
      compareTitle="M4A vs MP3"
      compareRows={[
        { fmt: 'M4A', contains: 'Não', size: 'Pequeno (eficiente)', best: 'Ecossistema Apple, dispositivos modernos' },
        { fmt: 'MP3', contains: 'Não', size: 'Pequeno',             best: 'Universal, leitores legados, anfitriões mais antigos' },
      ]}
      faq={[
        { q: 'Preciso converter M4A para MP3?', a: 'Apenas se uma ferramenta ou anfitrião específico exigir MP3. A maioria dos dispositivos modernos (incluindo todos os Android e Windows em 2026) reproduz M4A nativamente.' },
        { q: 'O conversor é gratuito?', a: 'Sim. Arquivos até 25 MB podem ser convertidos sem uma conta, e a saída não tem marca d’água.' },
        { q: 'Vou perder qualidade?', a: 'M4A e MP3 são ambos com perda. A re-codificação adiciona uma pequena perda, mas é inaudível para audições típicas.' },
        { q: 'O formato nativo das gravações de voz do iPhone funciona?', a: 'Sim. As gravações de voz do iPhone escrevem .m4a padrão que são aceites diretamente.' },
        { q: 'Os arquivos são armazenados?', a: 'Não. O M4A carregado é excluído após a conversão; o MP3 é eliminado dentro da hora.' },
      ]}
      ctaHeadline="Converta o seu M4A para MP3 agora"
      ctaSubtitle="Coloque a sua gravação de voz do iPhone ou áudio Apple e obtenha um MP3 portátil."
      ctaButton="Escolha um arquivo M4A"
      moreTools={[
        { href: '/pt/aac-to-mp3',  label: 'AAC para MP3' },
        { href: '/pt/mp4-to-mp3',  label: 'MP4 para MP3' },
        { href: '/pt/mp3-to-m4a',  label: 'MP3 para M4A' },
        { href: '/pt/m4a-to-text', label: 'M4A para Texto' },
      ]}
    />
  )
}