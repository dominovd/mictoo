import ConverterPageLayout from '@/components/ConverterPageLayout'

export const metadata = {
  title: 'AAC para MP3: Conversor Online Gratuito | Mictoo',
  description:
    'Converta AAC para MP3 gratuitamente, em segundos, com uma explicação clara de quando a conversão realmente ajuda e quando apenas compromete a qualidade.',
  alternates: {
    canonical: 'https://mictoo.com/pt/aac-to-mp3',
    languages: {
      'en': 'https://mictoo.com/aac-to-mp3',
      'fr': 'https://mictoo.com/fr/aac-to-mp3',
      'de': 'https://mictoo.com/de/aac-to-mp3',
      'es': 'https://mictoo.com/es/aac-to-mp3',
      'ru': 'https://mictoo.com/ru/aac-to-mp3',
      'it': 'https://mictoo.com/it/aac-to-mp3',
      'pt': 'https://mictoo.com/pt/aac-to-mp3',
      'pl': 'https://mictoo.com/pl/aac-to-mp3',
      'ja': 'https://mictoo.com/ja/aac-to-mp3',
      'ko': 'https://mictoo.com/ko/aac-to-mp3',
      'x-default': 'https://mictoo.com/aac-to-mp3',
    },
  },
  openGraph: {
    title: 'AAC para MP3: Conversor Online Gratuito | Mictoo',
    description: 'Converta AAC para MP3 gratuitamente, em segundos.',
    url: 'https://mictoo.com/pt/aac-to-mp3',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AAC para MP3: Conversor Online Gratuito',
    description: 'Converta AAC para MP3 em segundos. Gratuito, sem registo.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function PtAacToMp3Page() {
  return (
    <ConverterPageLayout
      locale="pt"
      mode="converter" from="aac" to="mp3" currentHref="/pt/aac-to-mp3"
      badge="AAC → MP3 · Gratuito · Sem registo"
      h1First="AAC para MP3"
      h1Second="Conversor online gratuito"
      subtitle="Coloque um ficheiro .aac bruto (fluxo ADTS, despejo de transmissão ou áudio extraído de iPhone) e obtenha um MP3 portátil em segundos."
      outputFormat="MP3" outputQuality="128 kbps" outputAudio="Estéreo"
      stepsTitle="Como funciona a conversão de AAC para MP3"
      steps={[
        { icon: 'upload',   title: 'Coloque o AAC',        desc: 'Framing ADTS ou ADIF, até 25 MB anonimamente.' },
        { icon: 'waveform', title: 'Nós decodificamos e codificamos', desc: 'ffmpeg lê o fluxo de bits AAC e re-codifica para MP3 estéreo a 128 kbps.' },
        { icon: 'download', title: 'Descarregue o MP3',    desc: 'Obtenha o seu MP3 limpo em segundos, pronto para qualquer reprodutor.' },
      ]}
      previewInputName="broadcast-clip.aac"
      previewInputSize="8.4 MB · 00:07:22 · 128 kbps AAC"
      previewOutputName="broadcast-clip.mp3"
      previewOutputSize="00:07:22 · 128 kbps MP3 · 6.8 MB"
      whyTitle="Por que usar Mictoo para AAC para MP3?"
      whyCards={[
        { icon: 'target',   title: 'AAC bruto tratado',        desc: 'Tanto ADTS como ADIF funcionam diretamente, sem reembalagem manual.' },
        { icon: 'fileAudio',title: 'MP3 toca em todo o lado',   desc: 'Dispositivos mais antigos e anfitriões de podcasts legados às vezes preferem MP3 em vez de AAC.' },
        { icon: 'lock',     title: 'Ficheiros eliminados após',    desc: 'O AAC carregado é eliminado após a conversão; o MP3 é purgado dentro da hora.' },
        { icon: 'shield',   title: 'Sem marca d’água ou etiqueta',    desc: 'Apenas o áudio, re-codificado. Sem introdução ou metadados de marca.' },
      ]}
      scenariosTitle="Quando a conversão de AAC para MP3 é útil"
      scenarios={[
        { icon: 'video',      title: 'Despejo de transmissão HLS' },
        { icon: 'headphones', title: 'Anfitrião de podcast requer MP3' },
        { icon: 'mail',       title: 'Compatibilidade com reprodutores legados' },
        { icon: 'editPen',    title: 'Importação em DAW (ferramentas mais antigas)' },
        { icon: 'archive',    title: 'Formato de arquivo consistente' },
        { icon: 'waveform',   title: 'AAC extraído de iPhone' },
      ]}
      tipsTitle="Dicas para uma conversão limpa de AAC para MP3"
      tips={[
        'Se o seu dispositivo reproduz AAC nativamente, pode não precisar converter.',
        'Tanto AAC como MP3 são com perda; a re-codificação adiciona uma pequena perda de qualidade.',
        'Mantenha o ficheiro fonte abaixo do limite atual de 25 MB para upload.',
        'Para transcrição, carregue o AAC diretamente para /pt/aac-to-text em vez disso.',
      ]}
      processTitle="O que acontece durante a conversão"
      processSteps={['Frames AAC ADTS', 'Decodificar', 'Codificação MP3']}
      compareTitle="AAC vs MP3"
      compareRows={[
        { fmt: 'AAC', contains: 'Não', size: 'Pequeno (eficiente)', best: 'Dispositivos modernos, streaming, iPhone' },
        { fmt: 'MP3', contains: 'Não', size: 'Pequeno',             best: 'Compatibilidade universal, reprodutores legados' },
      ]}
      faq={[
        { q: 'Preciso mesmo converter AAC para MP3?', a: 'Raramente. A maioria dos dispositivos modernos reproduz AAC nativamente. Converta apenas se uma ferramenta ou anfitrião específico exigir explicitamente MP3.' },
        { q: 'O conversor é gratuito?', a: 'Sim. Ficheiros até 25 MB podem ser convertidos sem uma conta, e a saída não tem marca d’água.' },
        { q: 'Qual é a perda de qualidade?', a: 'AAC e MP3 são ambos com perda. A re-codificação adiciona uma pequena perda extra, mas é inaudível para audições típicas a 128 kbps.' },
        { q: 'Quais framings AAC funcionam?', a: 'ADTS (mais comum), ADIF e LATM todos decodificam. AAC dentro de MP4/M4A também funciona, mas é um caminho de entrada diferente.' },
        { q: 'Os ficheiros são armazenados?', a: 'Não. O AAC carregado é eliminado após a conversão; o MP3 é purgado dentro da hora.' },
      ]}
      ctaHeadline="Converta o seu AAC para MP3 agora"
      ctaSubtitle="Coloque o seu AAC e obtenha um MP3 limpo em segundos. Sem registo. Sem marca d’água."
      ctaButton="Escolha um ficheiro AAC"
      moreTools={[
        { href: '/pt/m4a-to-mp3',  label: 'M4A para MP3' },
        { href: '/pt/mp4-to-mp3',  label: 'MP4 para MP3' },
        { href: '/pt/wav-to-mp3',  label: 'WAV para MP3' },
        { href: '/pt/aac-to-text', label: 'AAC para Texto' },
      ]}
    />
  )
}