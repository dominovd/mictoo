import LandingLayout from '@/components/LandingLayout'

const LANGS = {
  'en': 'https://mictoo.com/transcribe-audio-to-text',
  'fr': 'https://mictoo.com/fr/transcribe-audio-to-text',
  'de': 'https://mictoo.com/de/transcribe-audio-to-text',
  'es': 'https://mictoo.com/es/transcribe-audio-to-text',
  'ru': 'https://mictoo.com/ru/transcribe-audio-to-text',
  'it': 'https://mictoo.com/it/transcribe-audio-to-text',
  'pt': 'https://mictoo.com/pt/transcribe-audio-to-text',
  'pl': 'https://mictoo.com/pl/transcribe-audio-to-text',
  'ja': 'https://mictoo.com/ja/transcribe-audio-to-text',
  'x-default': 'https://mictoo.com/transcribe-audio-to-text',
}

export const metadata = {
  title: 'Áudio em texto — Transcrição de áudio grátis online | Mictoo',
  description: 'Transcreva áudio em texto online grátis. Envie qualquer arquivo de áudio e receba uma transcrição precisa na hora. 50+ idiomas. IA.',
  alternates: { canonical: 'https://mictoo.com/pt/transcribe-audio-to-text', languages: LANGS },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Áudio em texto — Mictoo',
  url: 'https://mictoo.com/pt/transcribe-audio-to-text',
  description: 'Conversor de áudio em texto online grátis. Suporta MP3, WAV, M4A, OGG, FLAC e outros.',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
}

export default function PtAudioToTextPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LandingLayout
        badge="MP3 · WAV · M4A · FLAC · Grátis"
        h1={<>Áudio em texto<br /><span className="text-brand-600">Transcrição IA grátis</span></>}
        subtitle="O jeito mais rápido de converter qualquer gravação de áudio em texto. Envie seu arquivo — sem conta, sem assinatura, sem espera."
        defaultLanguage="pt"
        features={[
          { icon: '🎙️', title: 'Todos os formatos de áudio', desc: 'MP3, WAV, M4A, OGG, FLAC, WEBM — qualquer arquivo de áudio até 25 MB.' },
          { icon: '🧠', title: 'Precisão IA', desc: 'Nossa IA é treinada em centenas de milhares de horas de áudio multilíngue, oferecendo precisão líder do setor.' },
          { icon: '🔒', title: 'Privado e seguro', desc: 'Seu áudio nunca é armazenado. Os arquivos são processados uma vez e excluídos imediatamente.' },
        ]}
        faq={[
          { q: 'Qual o melhor conversor grátis de áudio em texto?', a: 'O Mictoo usa IA, considerada um dos modelos de reconhecimento de voz grátis mais precisos disponíveis. Suporta mais de 50 idiomas e não exige conta.' },
          { q: 'Quão precisa é a transcrição de áudio?', a: 'Nossa IA atinge 95%+ de precisão em gravações limpas. Ruído de fundo ou sotaques marcantes podem reduzir levemente.' },
          { q: 'Quais formatos de áudio são suportados?', a: 'MP3, WAV, M4A, OGG, FLAC, WEBM, MPEG. Arquivos de vídeo (MP4) também são aceitos.' },
          { q: 'Quanto tempo leva para transcrever áudio?', a: 'Uma gravação de 10 minutos é normalmente transcrita em 15-30 segundos. Sem fila — seu arquivo é processado imediatamente.' },
          { q: 'Posso transcrever a gravação de uma ligação?', a: 'Sim. Gravações de chamadas em MP3, WAV ou M4A funcionam bem. Áudio com múltiplos oradores é transcrito como um único bloco de texto (etiquetas de orador exigem ferramenta pro).' },
          { q: 'Preciso selecionar o idioma?', a: 'Não — o idioma é detectado automaticamente. Se a detecção der resultados ruins, você pode selecionar o idioma manualmente no dropdown.' },
        ]}
        relatedLinks={[
          { href: '/pt/transcribe-mp3-to-text', label: 'MP3 em texto' },
          { href: '/pt/transcribe-video-to-text', label: 'Vídeo em texto' },
          { href: '/pt', label: 'Todos os formatos' },
        ]}
      />
    </>
  )
}
