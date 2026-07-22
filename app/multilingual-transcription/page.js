import LanguagePageLayout from '@/components/LanguagePageLayout'

export const metadata = {
  title: 'Multilingual Transcription in 36 Languages | Mictoo',
  description:
    'Transcribe audio in 36 selectable languages or use automatic detection. Review bilingual recordings, timestamps, summaries, translations, and exports.',
  alternates: {
    canonical: 'https://mictoo.com/multilingual-transcription',
    languages: {
      'en': 'https://mictoo.com/multilingual-transcription',
      'fr': 'https://mictoo.com/fr/multilingual-transcription',
      'de': 'https://mictoo.com/de/multilingual-transcription',
      'es': 'https://mictoo.com/es/multilingual-transcription',
      'ru': 'https://mictoo.com/ru/multilingual-transcription',
      'it': 'https://mictoo.com/it/multilingual-transcription',
      'pt': 'https://mictoo.com/pt/multilingual-transcription',
      'pl': 'https://mictoo.com/pl/multilingual-transcription',
      'ja': 'https://mictoo.com/ja/multilingual-transcription',
      'ko': 'https://mictoo.com/ko/multilingual-transcription',
      'x-default': 'https://mictoo.com/multilingual-transcription',
    },
  },
  openGraph: {
    title: 'Multilingual Transcription in 36 Languages | Mictoo',
    description: 'Choose from 36 languages or use automatic detection for multilingual recordings.',
    url: 'https://mictoo.com/multilingual-transcription',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Multilingual Transcription in 36 Languages',
    description: 'Choose a language or use automatic detection for multilingual audio.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function MultilingualTranscriptionPage() {
  return (
    <LanguagePageLayout
      badge="36 Languages · Auto-detect · Free"
      h1First="Multilingual Transcription"
      h1Second="One platform for 36 languages and mixed-language audio"
      subtitle="Choose one of 36 languages or use Auto-detect for bilingual interviews and recordings that switch languages. Review short switches and proper nouns after transcription."
      currentHref="/multilingual-transcription"

      chips={[
        { label: 'Free',            icon: 'gift' },
        { label: 'Auto-deleted',    icon: 'shield' },
        { label: '36 languages',    icon: 'globe' },
        { label: 'AI summary',      icon: 'sparkles' },
      ]}

      flags={[
        { flag: '🇬🇧', label: 'English' },
        { flag: '🇫🇷', label: 'French' },
        { flag: '🇪🇸', label: 'Spanish' },
        { flag: '🇩🇪', label: 'German' },
        { flag: '🌐', label: '32 more' },
      ]}

      stepsTitle="How multilingual transcription works"
      steps={[
        { icon: 'upload',   title: 'Upload supported audio',           desc: 'Use MP3, MP4, WAV, M4A, and other common formats, then choose a language or Auto-detect.' },
        { icon: 'sparkles', title: 'Whisper detects and transcribes',  desc: 'Whisper large-v3 can follow many language changes, but short switches and names may need review.' },
        { icon: 'editPen',  title: 'Translate to your working language', desc: 'One-click translation between any of the supported languages after transcription.' },
      ]}

      exampleTitle="Example multilingual transcript & summary"
      exampleFileName="global-team-standup.mp3"
      exampleDurationLabel="00:38"
      exampleLines={[
        { t: '00:00', line: 'Good morning everyone. Let\'s get started with today\'s standup.' },
        { t: '00:06', line: 'Aus Berlin: die Serverauslastung war gestern sehr hoch.' },
        { t: '00:14', line: 'From Buenos Aires: acabamos de terminar el sprint de reportes.' },
        { t: '00:22', line: 'Tokyo team: 昨日のバグは今朝修正しました。' },
        { t: '00:30', line: 'Great. Let\'s sync on next week\'s release before we wrap.' },
        { t: '00:35', line: 'Thanks everyone. See you tomorrow.' },
      ]}
      summaryPoints={[
        'Global team standup across Berlin, Buenos Aires, and Tokyo.',
        'Server load spike reported from Berlin.',
        'Reports sprint completed by the Argentina team.',
        'Yesterday\'s bug fixed by the Tokyo team this morning.',
        'Next-week release sync scheduled before wrap.',
      ]}
      translateLabel="Translate to English"

      whyTitle="Why use Mictoo for multilingual audio?"
      whyCards={[
        { icon: 'globe',    title: '36 selectable languages',        desc: 'Choose from the languages in the upload widget or use automatic detection for a first pass.' },
        { icon: 'translate',title: 'Mixed-language support',          desc: 'Many Spanglish, Franglais, and international-team recordings can be transcribed with Auto-detect.' },
        { icon: 'search',   title: 'Auto-detect or explicit choice', desc: 'Let Whisper detect the language for short clips, or pin the language for cleaner first-pass results.' },
        { icon: 'sparkles', title: 'Translate between 36 languages', desc: 'After transcription, choose any supported target language from the same 36-language list.' },
      ]}

      worksWellTitle="Multilingual audio that works well"
      worksWell={[
        { icon: 'chat',       title: 'Bilingual interviews' },
        { icon: 'briefcase',  title: 'International standups' },
        { icon: 'headphones', title: 'Global podcasts' },
        { icon: 'cap',        title: 'MOOC lectures' },
        { icon: 'search',     title: 'Diaspora research' },
        { icon: 'book',       title: 'Cross-border legal' },
      ]}

      tipsTitle="Tips for multilingual accuracy"
      tips={[
        'For very short clips, pin the primary language explicitly.',
        'For mid-sentence code-switching, use Auto-detect.',
        'Review proper nouns and place names, which often cross languages.',
        'Translate after transcribing rather than before.',
      ]}
      challengesTitle="What makes multilingual recognition difficult"
      challenges={[
        { title: 'Language ID on short clips',    desc: 'Very short clips may be assigned the wrong language.', example: 'Choose the primary language', ipa: '' },
        { title: 'Code-switching mid-sentence',   desc: 'Short switches can be missed or normalised, so bilingual output should be reviewed.', example: 'Vamos a la meeting', ipa: '' },
        { title: 'Named entities',                 desc: 'Proper nouns can look like foreign words. Review them post-transcription.', example: 'Björk / San José',  ipa: '' },
        { title: 'Non-Latin scripts',              desc: 'Japanese, Chinese, Korean, Arabic, and Cyrillic scripts are supported; review punctuation and names.', example: '昨日 / вчера', ipa: '' },
      ]}

      varietiesTitle="Language families supported"
      varieties={[
        { flag: '🌍', name: 'European (Romance + Germanic)', differences: 'FR, ES, IT, PT, DE, EN, NL, SV, DA, NO...' },
        { flag: '🌏', name: 'East Asian',                    differences: 'JA, ZH, KO' },
        { flag: '🌏', name: 'Slavic',                        differences: 'RU, UK, PL, CS, SK, BG' },
        { flag: '🌍', name: 'Middle Eastern',                differences: 'AR, HE, TR, FA' },
        { flag: '🌏', name: 'South and Southeast Asian',     differences: 'HI, BN, TA, UR, ID, TH, VI, MS' },
      ]}

      faq={[
        { q: 'Which languages are available?',          a: 'The upload and translation controls currently offer 36 languages, including English, French, Spanish, German, Portuguese, Italian, Dutch, Polish, Russian, Ukrainian, Japanese, Chinese, Korean, Arabic, Hebrew, Hindi, Turkish, and others. See the language picker for the full list.' },
        { q: 'Does it handle code-switching?',          a: 'It can transcribe many recordings that switch languages. Use Auto-detect for bilingual conversations and review short switches, proper nouns, and ambiguous phrases.' },
        { q: 'Can I translate the transcript?',         a: 'Yes. After transcription, pick any target language and click Translate. GPT-4o-mini handles the translation and it appears alongside the original.' },
        { q: 'How accurate is auto-detect?',            a: 'It works best when the recording contains enough clear speech. For short or noisy audio, choose the primary language explicitly and review the first draft.' },
        { q: 'Is multilingual transcription free?',     a: 'Yes. Files up to 25 MB can be transcribed anonymously or up to 180 MB when signed in. No watermark and no per-minute fee.' },
        { q: 'Are my audio files stored?',              a: 'No. Audio streams to the transcription provider, gets processed once, and is dropped. Transcripts persist only on signed-in accounts.' },
      ]}

      ctaHeadline="Transcribe audio in any language"
      ctaSubtitle="One upload page for 36 languages, automatic detection, mixed-language audio, and translation."
      ctaButton="Upload audio in any language"

      exploreCards={[
        { href: '/french-speech-to-text',      flag: '🇫🇷', title: 'French Speech to Text',       desc: 'Liaisons, accents, and Quebec French supported.' },
        { href: '/spanish-audio-to-text',      flag: '🇪🇸', title: 'Spanish Audio to Text',       desc: 'All regional Spanish varieties handled.' },
        { href: '/german-audio-transcription', flag: '🇩🇪', title: 'German Audio Transcription',  desc: 'Compound words and regional varieties handled.' },
      ]}
    />
  )
}
