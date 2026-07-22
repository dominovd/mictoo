import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/mp3-to-wav',
  'fr': 'https://mictoo.com/fr/mp3-to-wav',
  'de': 'https://mictoo.com/de/mp3-to-wav',
  'es': 'https://mictoo.com/es/mp3-to-wav',
  'ru': 'https://mictoo.com/ru/mp3-to-wav',
  'it': 'https://mictoo.com/it/mp3-to-wav',
  'pt': 'https://mictoo.com/pt/mp3-to-wav',
  'pl': 'https://mictoo.com/pl/mp3-to-wav',
  'ja': 'https://mictoo.com/ja/mp3-to-wav',
  'ko': 'https://mictoo.com/ko/mp3-to-wav',
  'x-default': 'https://mictoo.com/mp3-to-wav',
}

export const metadata = {
  title: 'MP3 para WAV, conversor online gratuito | Mictoo',
  description:
    'Converta MP3 para WAV gratuitamente online. Expanda MP3 comprimido em WAV descomprimido de 16 bits/44,1 kHz para edição de áudio. Sem registro, sem marca d’água.',
  alternates: { canonical: 'https://mictoo.com/pt/mp3-to-wav', languages: LANGS },
  openGraph: {
    title: 'MP3 para WAV, conversor online gratuito | Mictoo',
    description: 'MP3 em WAV descomprimido de 16 bits/44,1 kHz. Para edição.',
    url: 'https://mictoo.com/pt/mp3-to-wav',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MP3 para WAV, conversor online gratuito',
    description: 'Para edição e masterização em DAW.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function PtMp3ToWavPage() {
  return (
    <ConverterPageLayout
      locale="pt"
      mode="converter" from="mp3" to="wav" currentHref="/pt/mp3-to-wav"
      badge="MP3 → WAV · Grátis · Amigável para editores"
      h1First="MP3 para WAV"
      h1Second="Conversor online gratuito"
      subtitle="Coloque um MP3 e obtenha um WAV descomprimido de 16 bits / 44,1 kHz para edição em DAW, masterização ou gravação em CD. Sem marca d’água, sem e-mail."
      outputFormat="WAV" outputQuality="16 bits / 44,1 kHz" outputAudio="Estéreo"
      stepsTitle="Como funciona a conversão de MP3 para WAV"
      steps={[
        { icon: 'upload',   title: 'Coloque o MP3',       desc: 'Qualquer MP3 com bitrate, até 25 MB anonimamente.' },
        { icon: 'waveform', title: 'Decodificamos para PCM',   desc: 'ffmpeg decodifica o MP3 em PCM descomprimido de 16 bits / 44,1 kHz envolto em um container WAV.' },
        { icon: 'download', title: 'Baixe o WAV',   desc: 'Pronto para Audacity, Pro Tools, Logic, Ableton e qualquer editor de áudio.' },
      ]}
      previewInputName="voiceover.mp3"
      previewInputSize="4,6 MB · 00:05:00 · 128 kbps"
      previewOutputName="voiceover.wav"
      previewOutputSize="00:05:00 · 16 bits / 44,1 kHz · 50 MB"
      whyTitle="Por que usar Mictoo para MP3 para WAV?"
      whyCards={[
        { icon: 'target',   title: 'Saída pronta para DAW',       desc: 'PCM descomprimido é o que editores de áudio e ferramentas de masterização esperam.' },
        { icon: 'fileAudio',title: 'Padrão 16 bits / 44,1', desc: 'Uma configuração PCM amplamente suportada para editores de áudio, ferramentas de masterização e software de autoria de CD.' },
        { icon: 'lock',     title: 'Arquivos excluídos após',    desc: 'MP3 enviado é descartado após a conversão; o WAV é eliminado dentro de uma hora.' },
        { icon: 'shield',   title: 'Sem marca d’água ou etiqueta',    desc: 'Apenas o áudio, decodificado para PCM. Sem introdução com marca, sem metadados injetados.' },
      ]}
      scenariosTitle="Quando MP3 para WAV é útil"
      scenarios={[
        { icon: 'editPen',    title: 'Edição no Audacity' },
        { icon: 'waveform',   title: 'Importação no Pro Tools' },
        { icon: 'headphones', title: 'Fluxo de trabalho de masterização' },
        { icon: 'archive',    title: 'Gravação em CD' },
        { icon: 'video',      title: 'Editor de vídeo com requisito WAV' },
        { icon: 'target',     title: 'Entrada para treinamento de clonagem de voz' },
      ]}
      tipsTitle="Dicas para uma conversão limpa de MP3 para WAV"
      tips={[
        'WAV é 10× maior que MP3 (cerca de 10 MB por minuto).',
        'A saída não é "verdadeiramente" sem perdas ,  ela preserva o sinal MP3.',
        'Para áudio realmente sem perdas, comece a partir de um master FLAC ou WAV original.',
        'Mantenha o arquivo fonte abaixo do limite atual de upload de 25 MB.',
      ]}
      processTitle="O que acontece durante a conversão"
      processSteps={['Stream MP3', 'Decodificar para PCM', 'Container WAV']}
      compareTitle="MP3 vs WAV"
      compareRows={[
        { fmt: 'MP3', contains: 'Não', size: 'Pequeno (~1 MB/min)', best: 'Compartilhamento, telemóveis, streaming' },
        { fmt: 'WAV', contains: 'Não', size: 'Grande (~10 MB/min)', best: 'Edição, masterização, gravação em CD' },
      ]}
      faq={[
        { q: 'Converter MP3 para WAV recupera qualidade sem perdas?', a: 'Não. MP3 é com perdas; o WAV preserva o sinal MP3, mas nada mais. Para verdadeiramente sem perdas, você precisa começar a partir de um FLAC ou WAV original.' },
        { q: 'O conversor é gratuito?', a: 'Sim. Arquivos de até 25 MB podem ser convertidos sem uma conta, e a saída não tem marca d’água.' },
        { q: 'Por que o arquivo WAV é tão maior?', a: 'WAV é PCM descomprimido. Um MP3 de 5 MB se torna aproximadamente um WAV de 50 MB. Isso é normal.' },
        { q: 'Qual profundidade de bits e taxa de amostragem?', a: '16 bits / 44,1 kHz estéreo (qualidade de CD). Este é o formato padrão de importação em DAW.' },
        { q: 'Os arquivos são armazenados?', a: 'Não. O MP3 enviado é descartado após a conversão; o WAV é eliminado dentro de uma hora.' },
      ]}
      ctaHeadline="Converta seu MP3 para WAV agora"
      ctaSubtitle="Coloque seu MP3 e obtenha um WAV descomprimido pronto para edição."
      ctaButton="Escolha um arquivo MP3"
      moreTools={[
        { href: '/pt/wav-to-mp3',  label: 'WAV para MP3' },
        { href: '/pt/mp3-to-m4a',  label: 'MP3 para M4A' },
        { href: '/pt/flac-to-mp3', label: 'FLAC para MP3' },
        { href: '/pt/wav-to-text', label: 'WAV para Texto' },
      ]}
    />
  )
}