import LanguagePageLayout from '@/components/LanguagePageLayout'

export const metadata = {
  title: 'Spanish Audio to Text: Castilian, Mexican, Argentine, and Caribbean Spanish | Mictoo',
  description:
    'Transcribe Spanish audio across regional varieties: Castilian, Mexican, Rioplatense, Caribbean, Andean. Handles seseo, voseo, ustedeo and dialect-specific vocabulary.',
  alternates: {
    canonical: 'https://mictoo.com/spanish-audio-to-text',
    languages: {
      'en': 'https://mictoo.com/spanish-audio-to-text',
      'fr': 'https://mictoo.com/fr/spanish-audio-to-text',
      'de': 'https://mictoo.com/de/spanish-audio-to-text',
      'es': 'https://mictoo.com/es/spanish-audio-to-text',
      'ru': 'https://mictoo.com/ru/spanish-audio-to-text',
      'it': 'https://mictoo.com/it/spanish-audio-to-text',
      'pt': 'https://mictoo.com/pt/spanish-audio-to-text',
      'pl': 'https://mictoo.com/pl/spanish-audio-to-text',
      'ja': 'https://mictoo.com/ja/spanish-audio-to-text',
      'ko': 'https://mictoo.com/ko/spanish-audio-to-text',
      'x-default': 'https://mictoo.com/spanish-audio-to-text',
    },
  },
  openGraph: {
    title: 'Spanish Audio to Text: All Regional Varieties | Mictoo',
    description: 'Transcribe Spanish audio. Castilian, Mexican, Argentine, Caribbean, Andean.',
    url: 'https://mictoo.com/spanish-audio-to-text',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spanish Audio to Text',
    description: 'Transcribe Spanish across regions. Free, no signup.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function SpanishAudioToTextPage() {
  return (
    <LanguagePageLayout
      badge="Spanish · Whisper large-v3 · Free"
      h1First="Spanish Audio to Text"
      h1Second="Castilian, Mexican, Argentine, and Caribbean Spanish"
      subtitle="Upload Spanish audio from Spain, Mexico, Argentina, Colombia, or anywhere Spanish is spoken. Get a clean transcript that respects regional vocabulary, seseo or distinción, voseo or ustedeo."
      defaultLanguage="es"
      currentHref="/spanish-audio-to-text"

      chips={[
        { label: 'Free',              icon: 'gift' },
        { label: 'Private',           icon: 'shield' },
        { label: 'Spanish variants',  icon: 'globe' },
        { label: 'AI summary',        icon: 'sparkles' },
      ]}

      flags={[
        { flag: '🇪🇸', label: 'Castilian' },
        { flag: '🇲🇽', label: 'Mexican' },
        { flag: '🇦🇷', label: 'Rioplatense' },
        { flag: '🇨🇴', label: 'Colombian' },
        { flag: '🇨🇱', label: 'Chilean' },
      ]}

      stepsTitle="How Spanish transcription works"
      steps={[
        { icon: 'upload',   title: 'Upload your Spanish audio',        desc: 'MP3, MP4, WAV, M4A or any common format with Spanish speech.' },
        { icon: 'sparkles', title: 'Whisper recognises regional accents', desc: 'Our AI handles seseo, voseo, ustedeo and regional vocabulary.' },
        { icon: 'editPen',  title: 'Edit, translate, and export',        desc: 'Review, get an AI summary, translate to English or 50+ languages, export.' },
      ]}

      exampleTitle="Example Spanish transcript & summary"
      exampleFileName="entrevista-cdmx.mp3"
      exampleDurationLabel="00:36"
      exampleLines={[
        { t: '00:00', line: 'Hola, hoy vamos a hablar sobre los resultados del trimestre.' },
        { t: '00:07', line: 'El equipo de México nos comparte los datos primero.' },
        { t: '00:14', line: 'Los ingresos crecieron un 15% comparado con el año pasado.' },
        { t: '00:22', line: 'Perfecto, y desde Argentina, ¿ustedes qué vieron?' },
        { t: '00:28', line: 'Che, viste que el rendimiento en el sur mejoró un montón.' },
        { t: '00:32', line: 'Gracias a todos por su trabajo. Nos vemos la próxima semana.' },
      ]}
      summaryPoints={[
        'Reunión de resultados del trimestre.',
        'México reporta un crecimiento de ingresos del 15% interanual.',
        'Argentina destaca la mejora del rendimiento en el sur.',
        'Se acuerda una nueva reunión la próxima semana.',
      ]}

      whyTitle="Why use Mictoo for Spanish audio?"
      whyCards={[
        { icon: 'globe',    title: 'Every major variety',        desc: 'Castilian, Mexican, Rioplatense, Andean, Caribbean, Chilean — all natively handled.' },
        { icon: 'accent',   title: 'Diacritics preserved',       desc: 'á, é, í, ó, ú, ñ and ¿?¡! are captured correctly with proper Spanish punctuation.' },
        { icon: 'quote',    title: 'Voseo and ustedeo handled',  desc: 'Recognises "vos tenés" as easily as "tú tienes" or "usted tiene".' },
        { icon: 'translate',title: 'Translation included',        desc: 'One-click translation to English (or any of 50+ languages).' },
      ]}

      worksWellTitle="Spanish audio that works well"
      worksWell={[
        { icon: 'chat',       title: 'Interviews' },
        { icon: 'cap',        title: 'University lectures' },
        { icon: 'headphones', title: 'Podcasts' },
        { icon: 'briefcase',  title: 'Business meetings' },
        { icon: 'search',     title: 'Research recordings' },
        { icon: 'book',       title: 'Legal recordings' },
      ]}

      tipsTitle="Tips for accurate Spanish transcripts"
      tips={[
        'Select Spanish for short clips.',
        'Review regional vocabulary after transcription.',
        'Correct proper nouns and place names.',
        'Use clear audio with minimal background noise.',
      ]}
      challengesTitle="What makes Spanish speech recognition difficult"
      challenges={[
        { title: 'Voseo',             desc: 'Argentine and some Central American speakers use "vos" instead of "tú".',    example: 'vos tenés',    ipa: 'boh te.nes' },
        { title: 'Seseo / distinción', desc: 'Some regions pronounce "z" and "c" as "s"; Spain distinguishes them.',       example: 'gracias',      ipa: 'ɡɾa.sjas / ɡɾa.θjas' },
        { title: 'll and y sounds',    desc: 'Yeísmo merges "ll" and "y" in most regions; Rioplatense turns them to "sh".', example: 'calle',        ipa: 'ka.ʝe / ka.ʃe' },
        { title: 'Regional slang',      desc: 'Vocabulary differences: "coche" (Spain) vs "carro" (Mexico) vs "auto" (Argentina).', example: 'carro',  ipa: 'car / coche / auto' },
      ]}

      varietiesTitle="Spanish varieties supported"
      varieties={[
        { flag: '🇪🇸', name: 'Castilian (Spain)',     differences: 'Coche, ordenador, tú' },
        { flag: '🇲🇽', name: 'Mexican',                differences: 'Carro, computadora, tú' },
        { flag: '🇦🇷', name: 'Rioplatense (Argentina/Uruguay)', differences: 'Auto, computadora, vos' },
        { flag: '🇨🇴', name: 'Colombian',              differences: 'Carro, celular, usted / tú' },
        { flag: '🇨🇱', name: 'Chilean',                differences: 'Auto, cabro (buddy), tú / vo' },
        { flag: '🌎', name: 'Caribbean and Andean',   differences: 'Fast-tempo, syllable-final /s/ aspiration' },
      ]}

      faq={[
        { q: 'Can Mictoo transcribe Mexican and Argentine Spanish?',  a: 'Yes. Set the language to Spanish; the model handles all major varieties including Mexican, Argentine (vos), Chilean, Colombian, and Peninsular Spanish.' },
        { q: 'Are diacritics (á, é, ñ, ¿?) preserved?',                a: 'Yes. Whisper outputs proper Spanish orthography including all diacritics and opening question / exclamation marks.' },
        { q: 'Can I translate the transcript to English?',              a: 'Yes. Pick English as the target and click Translate. GPT-4o-mini handles the translation and it appears alongside the original.' },
        { q: 'Is Spanish transcription free?',                          a: 'Yes. Up to 25 MB anonymously, 60 MB signed in. No watermark, no per-minute fee.' },
        { q: 'Are my audio files stored?',                              a: 'No. Audio streams to the transcription provider, gets processed once, and is dropped. Transcripts persist only on signed-in accounts.' },
        { q: 'Does it handle code-switching (Spanglish)?',              a: 'Yes. For English / Spanish mixed audio, use Auto-detect. Whisper handles mid-sentence language switches well.' },
      ]}

      ctaHeadline="Transcribe your Spanish audio"
      ctaSubtitle="Upload any Spanish recording and get an accurate transcript, summary and exports in seconds."
      ctaButton="Upload Spanish audio"

      exploreCards={[
        { href: '/french-speech-to-text',      flag: '🇫🇷', title: 'French Speech to Text',       desc: 'Liaisons, accents, and Quebec French supported.' },
        { href: '/german-audio-transcription', flag: '🇩🇪', title: 'German Audio Transcription',  desc: 'Compound words and regional varieties handled.' },
        { href: '/multilingual-transcription', flag: '🌐', title: 'Multilingual Transcription',   desc: 'Transcribe in 50+ languages with one platform.' },
      ]}
    />
  )
}
