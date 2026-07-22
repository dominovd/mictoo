import ConverterPageLayout from '@/components/ConverterPageLayout'

export const metadata = {
  title: 'Transcrição com Marcação de Tempo: Gerador de Transcrições com Códigos de Tempo Grátis | Mictoo',
  description:
    'Transcrição com marcação de tempo gratuita com códigos de tempo a nível de segmento para áudio ou vídeo. Útil para jornalismo, pesquisa, podcasting e edição de vídeo.',
  alternates: {
    canonical: 'https://mictoo.com/pt/timestamped-transcription',
    languages: {
      'en': 'https://mictoo.com/timestamped-transcription',
      'fr': 'https://mictoo.com/fr/timestamped-transcription',
      'de': 'https://mictoo.com/de/timestamped-transcription',
      'es': 'https://mictoo.com/es/timestamped-transcription',
      'ru': 'https://mictoo.com/ru/timestamped-transcription',
      'it': 'https://mictoo.com/it/timestamped-transcription',
      'pt': 'https://mictoo.com/pt/timestamped-transcription',
      'pl': 'https://mictoo.com/pl/timestamped-transcription',
      'ja': 'https://mictoo.com/ja/timestamped-transcription',
      'ko': 'https://mictoo.com/ko/timestamped-transcription',
      'x-default': 'https://mictoo.com/timestamped-transcription',
    },
  },
  openGraph: {
    title: 'Transcrição com Marcação de Tempo: Gerador de Transcrições com Códigos de Tempo Grátis | Mictoo',
    description: 'Códigos de tempo a nível de frase para qualquer áudio ou vídeo.',
    url: 'https://mictoo.com/pt/timestamped-transcription',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transcrição com Marcação de Tempo: Grátis',
    description: 'Transcrições com códigos de tempo para jornalismo, pesquisa, edição.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function PtTimestampedTranscriptionPage() {
  return (
    <ConverterPageLayout
      locale="pt"
      mode="upload" currentHref="/pt/timestamped-transcription"
      badge="Com Marcação de Tempo · Áudio ou vídeo · Grátis"
      h1First="Transcrição com Marcação de Tempo"
      h1Second="Transcrições com códigos de tempo para jornalismo, pesquisa, edição"
      subtitle="Carregue áudio ou vídeo e obtenha uma transcrição com códigos de tempo por segmento. Clique em qualquer código de tempo para saltar para aquele momento no reprodutor de áudio. Grátis, sem registo."
      stepsTitle="Como funciona a transcrição com marcação de tempo"
      steps={[
        { icon: 'upload',   title: 'Coloque áudio ou vídeo',       desc: 'MP3, MP4, WAV, M4A, WEBM, FLAC e mais. Até 25 MB anonimamente ou 180 MB com registo.' },
        { icon: 'waveform', title: 'Whisper marca códigos de tempo por segmentos', desc: 'Whisper large-v3 fornece códigos de tempo por segmento alinhados ao áudio original.' },
        { icon: 'download', title: 'Exportar com códigos de tempo',      desc: 'TXT com códigos de tempo inline, SRT / VTT para legendas, DOCX para revisão.' },
      ]}
      whyTitle="Por que usar a Mictoo para transcrições com marcação de tempo?"
      whyCards={[
        { icon: 'clock',    title: 'Códigos de tempo clicáveis',   desc: 'Cada código de tempo é clicável na visualização do Leitor. Salte para qualquer momento no reprodutor de áudio.' },
        { icon: 'target',   title: 'Transcrição de qualidade Whisper', desc: 'Whisper large-v3 adiciona pontuação e lida com muitas línguas, sotaques e tipos de gravação.' },
        { icon: 'captions', title: 'SRT + VTT incluídos',         desc: 'Os códigos de tempo são transferidos para exportações SRT e VTT para legendagem de vídeo.' },
        { icon: 'lock',     title: 'Arquivos apagados após',        desc: 'O áudio carregado é eliminado após a transcrição; a transcrição persiste apenas em contas com registo.' },
      ]}
      scenariosTitle="Quando as transcrições com marcação de tempo são úteis"
      scenarios={[
        { icon: 'editPen',    title: 'Caça a citações no jornalismo' },
        { icon: 'target',     title: 'Citação em pesquisa UX' },
        { icon: 'video',      title: 'Lista de cues para edição de vídeo' },
        { icon: 'headphones', title: 'Notas de programa de podcast' },
        { icon: 'archive',    title: 'Legal / descoberta' },
        { icon: 'waveform',   title: 'Marcação de áudio' },
      ]}
      tipsTitle="Dicas para uma saída com marcação de tempo mais limpa"
      tips={[
        'A visualização do Leitor é a melhor para navegação clicável.',
        'Para exportação SRT / VTT, os códigos de tempo alinham-se à linha do tempo do arquivo original.',
        'Para gravações longas, registe-se para divisão automática até cerca de 3 horas.',
        'A barra de pesquisa destaca correspondências e mostra o seu código de tempo instantaneamente.',
      ]}
      processTitle="O que acontece durante a transcrição"
      processSteps={['Áudio / vídeo', 'Whisper large-v3', 'Texto com marcação de tempo']}
      faq={[
        { q: 'Qual é a granularidade dos códigos de tempo?', a: 'Por segmento (aproximadamente por frase). Whisper produz nativamente códigos de tempo a nível de segmento alinhados ao áudio.' },
        { q: 'Posso clicar num código de tempo para saltar no áudio?', a: 'Sim. Na visualização do Leitor, cada código de tempo é clicável e move o reprodutor de áudio para aquele momento.' },
        { q: 'A ferramenta é gratuita?', a: 'Sim. Até 25 MB anonimamente ou 180 MB quando registado. Sem marca d’água e sem taxa por minuto.' },
        { q: 'Quais formatos de exportação são suportados?', a: 'TXT (com códigos de tempo inline), SRT, VTT, DOCX. Os utilizadores registados também obtêm PDF e JSON com dados de timestamp estruturados.' },
        { q: 'Identificam os falantes?', a: 'Ainda não. Texto contínuo com códigos de tempo sem rótulos de falantes. A diarização está no roteiro Pro.' },
        { q: 'As gravações são mantidas nos seus servidores?', a: 'Não. O áudio é enviado para o fornecedor de transcrição, processado uma vez e eliminado. As transcrições persistem apenas em contas com registo.' },
      ]}
      ctaHeadline="Obtenha uma transcrição com marcação de tempo clicável"
      ctaSubtitle="Jornalismo, pesquisa UX, edição de vídeo, notas de programa de podcast. Grátis por arquivo."
      ctaButton="Carregar áudio ou vídeo"
      moreTools={[
        { href: '/pt/free-srt-generator',       label: 'Gerador SRT' },
        { href: '/pt/youtube-to-text',          label: 'YouTube para Texto' },
        { href: '/pt/transcribe-audio-to-text', label: 'Áudio para Texto' },
        { href: '/pt/transcribe-video-to-text', label: 'Vídeo para Texto' },
      ]}
    />
  )
}