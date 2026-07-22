import LanguagePageLayout from '@/components/LanguagePageLayout'

export const metadata = {
  title: 'French Speech to Text: Liaisons, Accents, and Quebec French Transcription | Mictoo',
  description:
    'Transcribe French audio with proper handling of liaisons, nasal vowels, e-élision, and regional accents. Hexagonal, Quebec, Belgian, and Swiss French all supported.',
  alternates: {
    canonical: 'https://mictoo.com/french-speech-to-text',
    languages: {
      'en': 'https://mictoo.com/french-speech-to-text',
      'fr': 'https://mictoo.com/fr/french-speech-to-text',
      'de': 'https://mictoo.com/de/french-speech-to-text',
      'es': 'https://mictoo.com/es/french-speech-to-text',
      'ru': 'https://mictoo.com/ru/french-speech-to-text',
      'it': 'https://mictoo.com/it/french-speech-to-text',
      'pt': 'https://mictoo.com/pt/french-speech-to-text',
      'pl': 'https://mictoo.com/pl/french-speech-to-text',
      'ja': 'https://mictoo.com/ja/french-speech-to-text',
      'ko': 'https://mictoo.com/ko/french-speech-to-text',
      'x-default': 'https://mictoo.com/french-speech-to-text',
    },
  },
  openGraph: {
    title: 'French Speech to Text: Liaisons, Accents, Quebec French | Mictoo',
    description: 'Transcribe French audio accurately across regional varieties.',
    url: 'https://mictoo.com/french-speech-to-text',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'French Speech to Text',
    description: 'Transcribe French audio across regional varieties.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function FrenchSpeechToTextPage() {
  return (
    <LanguagePageLayout
      badge="French · Whisper large-v3 · Free"
      h1First="French Speech to Text"
      h1Second="Liaisons, accents, and Quebec French"
      subtitle="Upload French audio from France, Quebec, Belgium, Switzerland or Francophone Africa. Get a clean transcript with accurate accents, timestamps, AI summary and exports."
      defaultLanguage="fr"
      currentHref="/french-speech-to-text"

      chips={[
        { label: 'Free',            icon: 'gift' },
        { label: 'Private',         icon: 'shield' },
        { label: 'French variants', icon: 'globe' },
        { label: 'AI summary',      icon: 'sparkles' },
      ]}

      flags={[
        { flag: '🇫🇷', label: 'France French' },
        { flag: '🇨🇦', label: 'Quebec French' },
        { flag: '🇧🇪', label: 'Belgian French' },
        { flag: '🇨🇭', label: 'Swiss French' },
        { flag: '🌍', label: 'African French' },
      ]}

      stepsTitle="How French transcription works"
      steps={[
        { icon: 'upload',   title: 'Upload your French audio', desc: 'Upload MP3, MP4, WAV or other formats with clear French speech.' },
        { icon: 'sparkles', title: 'Whisper recognises regional accents', desc: 'Our AI understands liaisons, accents and vocabulary across French varieties.' },
        { icon: 'editPen',  title: 'Edit, translate, and export', desc: 'Review the transcript, get an AI summary, translate and export in many formats.' },
      ]}

      exampleTitle="Example French transcript & summary"
      exampleFileName="reunion-equipe-quebec.mp3"
      exampleDurationLabel="00:34"
      exampleLines={[
        { t: '00:00', line: 'Bonjour, aujourd\'hui nous allons parler de l\'expérience client.' },
        { t: '00:06', line: 'L\'équipe québécoise a partagé ses résultats.' },
        { t: '00:12', line: 'Les retours montrent une amélioration de 12% cette semaine.' },
        { t: '00:18', line: 'Parfait, continuons d\'explorer les données par région.' },
        { t: '00:24', line: 'Côté France, les réponses au sondage sont très positives.' },
        { t: '00:30', line: 'Merci à toutes et à tous pour votre travail. On se revoit la semaine prochaine.' },
      ]}
      summaryPoints={[
        'L\'équipe discute des retours clients et des résultats de la semaine.',
        'Les données montrent une amélioration de 12%.',
        'L\'équipe continue d\'analyser les données par région et partage des retours positifs sur le sondage en France.',
        'Une prochaine mise à jour est prévue.',
      ]}
      translateLabel="Translate to English"

      whyTitle="Why use Mictoo for French audio?"
      whyCards={[
        { icon: 'globe',    title: 'Diverse French varieties', desc: 'Supports France, Quebec, Belgium, Switzerland and Francophone Africa.' },
        { icon: 'accent',   title: 'Accent marks preserved',   desc: 'Accents are captured correctly for readability and proper meaning.' },
        { icon: 'quote',    title: 'French punctuation',        desc: 'Quotes, guillemets, spaces and punctuation follow French conventions.' },
        { icon: 'translate',title: 'Translation included',      desc: 'Translate transcripts to English with one click while keeping nuance.' },
      ]}

      worksWellTitle="French audio that works well"
      worksWell={[
        { icon: 'chat',       title: 'Interviews' },
        { icon: 'cap',        title: 'University lectures' },
        { icon: 'headphones', title: 'Podcasts' },
        { icon: 'briefcase',  title: 'Business meetings' },
        { icon: 'search',     title: 'Research recordings' },
        { icon: 'book',       title: 'Legal recordings' },
      ]}

      tipsTitle="Tips for accurate French transcripts"
      tips={[
        'Select French for short clips.',
        'Review regional vocabulary.',
        'Correct proper nouns.',
        'Use clear audio.',
      ]}
      challengesTitle="What makes French speech recognition difficult"
      challenges={[
        { title: 'Liaisons',           desc: 'Sounds connect between words in speech.',    example: 'les amis',   ipa: 'le.z_a.mi' },
        { title: 'Élisions',           desc: 'Vowels may drop in fast spoken French.',     example: 'je ai',      ipa: 'ʒe' },
        { title: 'The silent e',       desc: 'Final "e" is often silent but changes meaning.', example: 'parle', ipa: 'paʁl' },
        { title: 'Regional vocabulary', desc: 'Different words across French-speaking regions.', example: 'char',  ipa: 'voiture au Québec' },
      ]}

      varietiesTitle="French varieties supported"
      varieties={[
        { flag: '🇫🇷', name: 'France French',      differences: 'Voiture (car), Fichier (file)' },
        { flag: '🇨🇦', name: 'Quebec French',      differences: 'Char (car), Courriel (email)' },
        { flag: '🇧🇪', name: 'Belgian French',     differences: 'Gsm (mobile), Kot (student room)' },
        { flag: '🇨🇭', name: 'Swiss French',       differences: 'Natelu (mobile), Pompier (firefighter)' },
        { flag: '🌍', name: 'Francophone Africa', differences: 'Taxi-brousse (shared taxi), Marché (market)' },
      ]}

      faq={[
        { q: 'Can Mictoo transcribe Quebec French?',   a: 'Yes. Quebec vocabulary (char, courriel, magasiner) and typical prosody are handled well. Set the language to French for best results.' },
        { q: 'Are French accents preserved?',           a: 'Yes. Whisper preserves é, è, ê, à, ç, ï, ô and other accent marks in the transcript output.' },
        { q: 'Can I translate the transcript to English?', a: 'Yes. Pick English as the target language and click Translate after transcription. GPT-4o-mini handles the translation.' },
        { q: 'Is French transcription free?',           a: 'Yes. Files up to 25 MB anonymously, 60 MB signed in. No watermark, no per-minute fee.' },
        { q: 'Are my audio files stored?',              a: 'No. Audio streams to the transcription provider, gets processed once, and is dropped. Transcripts persist only on signed-in accounts.' },
        { q: 'Which French varieties are best for the model?', a: 'Standard Parisian French has the largest training-data coverage. Quebec, Belgian, Swiss and African French also work well; heavy dialectal speech may need manual review.' },
      ]}

      ctaHeadline="Transcribe your French audio"
      ctaSubtitle="Upload any French recording and get an accurate transcript, summary and exports in seconds."
      ctaButton="Upload French audio"

      exploreCards={[
        { href: '/spanish-audio-to-text',      flag: '🇪🇸', title: 'Spanish Audio to Text',       desc: 'Transcribe Spanish audio with high accuracy.' },
        { href: '/german-audio-transcription', flag: '🇩🇪', title: 'German Audio Transcription',  desc: 'Accurate German transcription with timestamps.' },
        { href: '/multilingual-transcription', flag: '🌐', title: 'Multilingual Transcription',   desc: 'Transcribe in 50+ languages with one platform.' },
      ]}
    />
  )
}
