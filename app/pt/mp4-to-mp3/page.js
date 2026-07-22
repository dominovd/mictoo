import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/mp4-to-mp3',
  'fr': 'https://mictoo.com/fr/mp4-to-mp3',
  'de': 'https://mictoo.com/de/mp4-to-mp3',
  'es': 'https://mictoo.com/es/mp4-to-mp3',
  'ru': 'https://mictoo.com/ru/mp4-to-mp3',
  'it': 'https://mictoo.com/it/mp4-to-mp3',
  'pt': 'https://mictoo.com/pt/mp4-to-mp3',
  'pl': 'https://mictoo.com/pl/mp4-to-mp3',
  'ja': 'https://mictoo.com/ja/mp4-to-mp3',
  'ko': 'https://mictoo.com/ko/mp4-to-mp3',
  'x-default': 'https://mictoo.com/mp4-to-mp3',
}

export const metadata = {
  title: 'MP4 para MP3, conversor online gratuito | Mictoo',
  description:
    'Converta MP4 para MP3 gratuitamente online. Carregue o seu vídeo e obtenha um arquivo de áudio MP3 limpo a 128 kbps em segundos. Sem registo, sem marca d’água, sem e-mail. Até 25 MB.',
  alternates: { canonical: 'https://mictoo.com/pt/mp4-to-mp3', languages: LANGS },
  openGraph: {
    title: 'MP4 para MP3, conversor online gratuito | Mictoo',
    description: 'Converta MP4 para MP3 gratuitamente online. 128 kbps, sem registo, sem marca d’água.',
    url: 'https://mictoo.com/pt/mp4-to-mp3',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MP4 para MP3, conversor online gratuito',
    description: 'Converta MP4 para MP3 gratuitamente online. 128 kbps, sem registo, sem marca d’água.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function PtMp4ToMp3Page() {
  return (
    <ConverterPageLayout
      locale="pt"
      mode="converter"
      from="mp4"
      to="mp3"
      currentHref="/pt/mp4-to-mp3"

      badge="MP4 → MP3 · Gratuito · Sem registo"
      h1First="MP4 para MP3"
      h1Second="Conversor online gratuito"
      subtitle="Carregue um vídeo MP4 e obtenha um arquivo de áudio MP3 limpo em segundos. Sem marca d’água, sem e-mail, sem espera."

      outputFormat="MP3"
      outputQuality="128 kbps"
      outputAudio="Estéreo"

      stepsTitle="Como funciona a conversão de MP4 para MP3"
      steps={[
        {
          icon: 'upload',
          title: 'Carregue o MP4',
          desc: 'Carregue o seu vídeo MP4. Aceitamos arquivos até 25 MB.',
        },
        {
          icon: 'waveform',
          title: 'Extraímos o áudio',
          desc: 'O nosso servidor extrai a faixa de áudio e a codifica para MP3.',
        },
        {
          icon: 'download',
          title: 'Descarregue o MP3',
          desc: 'Obtenha o seu arquivo MP3 limpo em segundos.',
        },
      ]}

      previewInputName="reuniao-gravacao.mp4"
      previewInputSize="128,4 MB · 00:45:32"
      previewOutputName="reuniao-gravacao.mp3"
      previewOutputSize="00:45:32 · 128 kbps"

      whyTitle="Por que usar o Mictoo para MP4 para MP3?"
      whyCards={[
        {
          icon: 'target',
          title: 'Apenas a conversão',
          desc: 'Focamo-nos numa única coisa ,  converter MP4 para MP3 de forma rápida e fiável.',
        },
        {
          icon: 'fileAudio',
          title: 'MP3 pequeno e universal',
          desc: 'MP3 funciona em todo o lado e mantém os tamanhos de arquivo pequenos.',
        },
        {
          icon: 'lock',
          title: 'Os arquivos são eliminados',
          desc: 'Os seus uploads são processados de forma segura e eliminados após a conversão.',
        },
        {
          icon: 'shield',
          title: 'Sem marca d’água ou tag de áudio',
          desc: 'Obtenha um MP3 limpo, sem marca d’água ou tags adicionadas.',
        },
      ]}

      scenariosTitle="Quando MP4 para MP3 é útil"
      scenarios={[
        { icon: 'headphones', title: 'Guardar um podcast em vídeo' },
        { icon: 'cap',        title: 'Extrair áudio de uma aula' },
        { icon: 'mail',       title: 'Enviar um arquivo menor por e-mail' },
        { icon: 'editPen',    title: 'Preparar para transcrição' },
        { icon: 'waveform',   title: 'Áudio de fundo' },
        { icon: 'archive',    title: 'Arquivar gravações de voz' },
      ]}

      tipsTitle="Dicas para uma conversão limpa"
      tips={[
        'Corte vídeos grandes primeiro.',
        '128 kbps funciona para voz e música.',
        'A faixa de áudio padrão é utilizada.',
        'Vídeos com proteção DRM não são suportados.',
      ]}
      processTitle="O que acontece durante a conversão"
      processSteps={[
        'Container MP4',
        'Extração da faixa de áudio',
        'Codificação MP3',
      ]}

      compareTitle="MP4 vs MP3"
      compareRows={[
        { fmt: 'MP4', contains: 'Sim', size: 'Grande', best: 'Assistir, compartilhar vídeo' },
        { fmt: 'MP3', contains: 'Não',  size: 'Pequeno', best: 'Ouvir, apenas áudio' },
      ]}

      faq={[
        { q: 'O conversor de MP4 para MP3 é gratuito?', a: 'Sim. Não é necessário conta para arquivos até 25 MB, sem limite de tempo, sem marca d’água na saída, sem prompts de atualização. Os anúncios exibidos nas páginas de marketing cobrem os custos do servidor.' },
        { q: 'A conversão reduz a qualidade do áudio?', a: 'Levemente. MP3 é um formato com perda, mas a 128 kbps a perda de qualidade é inaudível para voz e reprodução musical típica. Se precisar de qualidade sem perdas, converta para WAV em vez disso.' },
        { q: 'Os arquivos carregados são armazenados?', a: 'Não. O seu MP4 vai para o armazenamento Vercel Blob apenas o tempo suficiente para ser convertido, depois é eliminado. O MP3 resultante é purgado dentro de uma hora. Guarde o MP3 localmente.' },
        { q: 'Posso converter um MP4 grande?', a: 'O limite atual de upload é 25 MB. Se o seu MP4 for maior, corte-o no QuickTime, na aplicação Fotos ou em outro editor de vídeo antes de carregar.' },
        { q: 'Funciona em dispositivos móveis?', a: 'Sim. A página é amigável para dispositivos móveis e os uploads funcionam no iOS Safari e no Android Chrome. No iPhone, partilhe o vídeo para Arquivos primeiro para que o seletor possa aceder a ele.' },
      ]}

      ctaHeadline="Converta o seu MP4 para MP3 agora"
      ctaSubtitle="Carregue o seu vídeo e obtenha um MP3 limpo em segundos. Sem registo. Sem marca d’água."
      ctaButton="Escolha um arquivo MP4"

      moreTools={[
        { href: '/pt/wav-to-mp3',  label: 'WAV para MP3' },
        { href: '/pt/webm-to-mp3', label: 'WEBM para MP3' },
        { href: '/pt/flac-to-mp3', label: 'FLAC para MP3' },
        { href: '/pt/aac-to-mp3',  label: 'AAC para MP3' },
        { href: '/pt/m4a-to-mp3',  label: 'M4A para MP3' },
        { href: '/pt/mp3-to-wav',  label: 'MP3 para WAV' },
      ]}
    />
  )
}