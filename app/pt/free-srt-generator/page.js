import ConverterPageLayout from '@/components/ConverterPageLayout'

const LANGS = {
  'en': 'https://mictoo.com/free-srt-generator',
  'fr': 'https://mictoo.com/fr/free-srt-generator',
  'de': 'https://mictoo.com/de/free-srt-generator',
  'es': 'https://mictoo.com/es/free-srt-generator',
  'ru': 'https://mictoo.com/ru/free-srt-generator',
  'it': 'https://mictoo.com/it/free-srt-generator',
  'pt': 'https://mictoo.com/pt/free-srt-generator',
  'pl': 'https://mictoo.com/pl/free-srt-generator',
  'ja': 'https://mictoo.com/ja/free-srt-generator',
  'ko': 'https://mictoo.com/ko/free-srt-generator',
  'x-default': 'https://mictoo.com/free-srt-generator',
}

export const metadata = {
  title: 'Gerador de SRT Gratuito: Crie Ficheiros de Legendas SRT Online a Partir de Áudio ou Vídeo | Mictoo',
  description:
    'Gere ficheiros de legendas SRT limpos a partir de qualquer áudio ou vídeo. Marcação de tempo com qualidade Whisper, pronta para YouTube, Premiere, Final Cut, DaVinci Resolve, CapCut. Gratuito, sem registo.',
  alternates: {
    canonical: 'https://mictoo.com/pt/free-srt-generator',
    languages: LANGS,
  },
  openGraph: {
    title: 'Gerador de SRT Gratuito | Mictoo',
    description: 'Gere ficheiros de legendas SRT a partir de áudio ou vídeo. Pronto para YouTube, Premiere, Final Cut.',
    url: 'https://mictoo.com/pt/free-srt-generator',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gerador de SRT Gratuito',
    description: 'Legendas SRT com qualidade Whisper a partir de áudio ou vídeo.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function PtFreeSrtGeneratorPage() {
  return (
    <ConverterPageLayout
      locale="pt"
      mode="upload" currentHref="/pt/free-srt-generator"
      badge="SRT · Áudio ou vídeo · Gratuito"
      h1First="Gerador de SRT Gratuito"
      h1Second="Legendas com qualidade Whisper a partir de qualquer áudio ou vídeo"
      subtitle="Carregue áudio ou vídeo, obtenha um ficheiro de legendas SRT pronto para YouTube, Premiere, Final Cut, DaVinci Resolve ou CapCut. Sem registo, sem taxa por minuto."
      stepsTitle="Como funciona a geração de SRT"
      steps={[
        { icon: 'upload',   title: 'Coloque áudio ou vídeo', desc: 'MP3, MP4, WAV, M4A, WEBM, FLAC e mais. Até 25 MB anonimamente, 180 MB com conta.' },
        { icon: 'waveform', title: 'Whisper transcreve', desc: 'Whisper large-v3 produz marcas de tempo por segmento alinhadas ao áudio original.' },
        { icon: 'download', title: 'Baixe SRT',        desc: 'Exportações SRT e VTT incluídas. Coloque no seu editor de vídeo ou carregue para o YouTube.' },
      ]}
      whyTitle="Por que usar Mictoo para geração de SRT?"
      whyCards={[
        { icon: 'target',   title: 'Legendas multilingues precisas', desc: 'Whisper large-v3 adiciona pontuação e lida com muitas línguas, sotaques e tipos de gravação.' },
        { icon: 'captions', title: 'SRT + VTT incluídos',                desc: 'Ambos os formatos de legendas gerados automaticamente. VTT para reprodutores web, SRT para editores.' },
        { icon: 'lock',     title: 'Ficheiros apagados após',               desc: 'O áudio carregado é eliminado após a transcrição; a transcrição persiste apenas em contas com sessão iniciada.' },
        { icon: 'shield',   title: 'Sem marca d’água ou etiqueta',               desc: 'SRT limpo sem introdução com marca ou etiqueta "Feito com X".' },
      ]}
      scenariosTitle="Quando a geração de SRT é útil"
      scenarios={[
        { icon: 'video',      title: 'Legendas para carregamento no YouTube' },
        { icon: 'editPen',    title: 'Importação no Premiere / DaVinci' },
        { icon: 'headphones', title: 'Versão em vídeo de podcast' },
        { icon: 'mail',       title: 'Cópia para revisão do cliente' },
        { icon: 'archive',    title: 'Arquivo de acessibilidade' },
        { icon: 'target',     title: 'Legendas em língua estrangeira' },
      ]}
      tipsTitle="Dicas para legendas mais limpas"
      tips={[
        'Para ficheiros com mais de 25 MB, inicie sessão para carregamentos automáticos até 180 MB.',
        'Defina a língua explicitamente para conteúdo não inglês ou técnico.',
        'Revise nomes e termos incomuns no modo Editor antes da exportação.',
        'Traduza a transcrição primeiro, depois exporte SRT para legendas estrangeiras.',
      ]}
      processTitle="O que acontece durante a geração"
      processSteps={['Áudio / vídeo', 'Transcrição Whisper', 'Exportação SRT + VTT']}
      faq={[
        { q: 'O gerador de SRT é gratuito?', a: 'Sim. Até 25 MB anonimamente ou 180 MB quando está com sessão iniciada. Sem marca d’água no SRT e sem taxa por minuto.' },
        { q: 'Quais formatos de legendas recebo?', a: 'SRT e VTT estão ambos incluídos. TXT (texto simples) e DOCX também estão disponíveis. Os utilizadores com sessão iniciada recebem ainda PDF e JSON.' },
        { q: 'Quão precisas são as marcas de tempo?', a: 'Whisper large-v3 fornece marcas de tempo por segmento alinhadas ao áudio original. Precisas o suficiente para legendas no YouTube e na maioria dos casos de edição de vídeo.' },
        { q: 'Vocês identificam os falantes (diarização)?', a: 'Ainda não. Legendas contínuas com marcas de tempo, mas sem rótulos de falantes. A diarização está no roteiro do Pro.' },
        { q: 'O Mictoo transcreve áudio não inglês?', a: 'Sim. Whisper large-v3 suporta mais de 50 línguas com deteção automática. Defina a língua explicitamente para resultados mais limpos.' },
        { q: 'As gravações são mantidas nos seus servidores?', a: 'Não. O áudio é transmitido para o fornecedor de transcrição, processado uma vez e eliminado. As transcrições persistem apenas em contas com sessão iniciada.' },
      ]}
      ctaHeadline="Gere legendas SRT a partir de qualquer gravação"
      ctaSubtitle="YouTube, Premiere, Final Cut, DaVinci, CapCut. Marcação de tempo com qualidade Whisper."
      ctaButton="Carregar áudio ou vídeo"
      moreTools={[
        { href: '/pt/timestamped-transcription', label: 'Transcrição com Marcação de Tempo' },
        { href: '/pt/youtube-to-text',           label: 'YouTube para Texto' },
        { href: '/pt/transcribe-video-to-text',  label: 'Vídeo para Texto' },
        { href: '/pt/transcribe-audio-to-text',  label: 'Áudio para Texto' },
      ]}
    />
  )
}