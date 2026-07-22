import LanguagePageLayout from '@/components/LanguagePageLayout'

export const metadata = {
  title: 'Multilingual Transcription: Free AI Tool for 50+ Languages | Mictoo',
  description:
    'Free multilingual transcription. Auto-detect across 50+ languages. Code-switching, bilingual interviews, mid-recording language changes all handled. No signup.',
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
    title: 'Multilingual Transcription: 50+ Languages | Mictoo',
    description: 'Auto-detect across 50+ languages. Bilingual interviews, code-switching supported.',
    url: 'https://mictoo.com/multilingual-transcription',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Multilingual Transcription: 50+ Languages',
    description: 'Auto-detect and transcribe across 50+ languages.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function MultilingualTranscriptionPage() {
  return (
    <LanguagePageLayout
      badge="50+ Languages · Auto-detect · Free"
      h1First="Multilingual Transcription"
      h1Second="One platform for 50+ languages and code-switching"
      subtitle="Auto-detect across 50+ languages, transcribe bilingual interviews with mid-sentence switches, or pick a specific language for a cleaner first pass. All in one upload."
      currentHref="/multilingual-transcription"

      chips={[
        { label: 'Free',            icon: 'gift' },
        { label: 'Private',         icon: 'shield' },
        { label: '50+ languages',   icon: 'globe' },
        { label: 'AI summary',      icon: 'sparkles' },
      ]}

      flags={[
        { flag: '🇬🇧', label: 'English' },
        { flag: '🇫🇷', label: 'French' },
        { flag: '🇪🇸', label: 'Spanish' },
        { flag: '🇩🇪', label: 'German' },
        { flag: '🌐', label: '50+ more' },
      ]}

      stepsTitle="How multilingual transcription works"
      steps={[
        { icon: 'upload',   title: 'Upload audio in any language',    desc: 'Any MP3, MP4, WAV, M4A. Auto-detect handles the language for you.' },
        { icon: 'sparkles', title: 'Whisper detects and transcribes',  desc: 'Whisper large-v3 recognises 50+ languages and follows mid-sentence switches.' },
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
        { icon: 'globe',    title: '50+ languages, one tool',        desc: 'Whisper large-v3 covers major world languages with strong accuracy across scripts and phonologies.' },
        { icon: 'translate',title: 'Code-switching handled',         desc: 'Mid-sentence language switches (Spanglish, Franglais, mixed teams) are transcribed in their original languages.' },
        { icon: 'search',   title: 'Auto-detect or explicit choice', desc: 'Let Whisper detect the language for short clips, or pin the language for cleaner first-pass results.' },
        { icon: 'sparkles', title: 'Translate any pair',             desc: 'After transcription, translate the transcript into any of 50+ target languages in one click.' },
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
        { title: 'Language ID on short clips',    desc: 'Under about 5 seconds Whisper may misidentify the language.',        example: 'Auto-detect',   ipa: 'pin language for short audio' },
        { title: 'Code-switching mid-sentence',    desc: 'Mixed languages within one sentence stay in their original languages.', example: 'Vamos a la meeting', ipa: 'ES → EN' },
        { title: 'Named entities',                 desc: 'Proper nouns can look like foreign words. Review them post-transcription.', example: 'Björk / San José',  ipa: '' },
        { title: 'Non-Latin scripts',              desc: 'Japanese, Chinese, Korean, Arabic, Cyrillic all work — check punctuation.', example: '昨日 / вчера', ipa: '' },
      ]}

      varietiesTitle="Language families supported"
      varieties={[
        { flag: '🌍', name: 'European (Romance + Germanic)', differences: 'FR, ES, IT, PT, DE, EN, NL, SV, DA, NO...' },
        { flag: '🌏', name: 'East Asian',                    differences: 'JA, ZH-CN, ZH-TW, KO' },
        { flag: '🌏', name: 'Slavic and Baltic',              differences: 'RU, UK, PL, CS, SK, BG, LT, LV' },
        { flag: '🌍', name: 'Middle Eastern and African',    differences: 'AR, HE, TR, FA, SW, HA' },
        { flag: '🌏', name: 'South and Southeast Asian',     differences: 'HI, TA, TE, ID, TH, VI, MS' },
      ]}

      faq={[
        { q: 'Which 50+ languages exactly?',           a: 'Every major world language Whisper large-v3 supports, including English, French, Spanish, German, Portuguese, Italian, Dutch, Polish, Russian, Ukrainian, Japanese, Chinese (Mandarin), Korean, Arabic, Hebrew, Hindi, Turkish, Swedish, Norwegian, and many more. See the language picker in the upload widget for the full list.' },
        { q: 'Does it handle code-switching?',          a: 'Yes. Mid-sentence language switches are transcribed in their original languages. Use Auto-detect for bilingual conversations rather than pinning a single language.' },
        { q: 'Can I translate the transcript?',         a: 'Yes. After transcription, pick any target language and click Translate. GPT-4o-mini handles the translation and it appears alongside the original.' },
        { q: 'How accurate is auto-detect?',            a: 'Very accurate for clips over 5-10 seconds. For very short audio, pin the primary language explicitly for cleaner first-pass detection.' },
        { q: 'Is multilingual transcription free?',     a: 'Yes. Up to 25 MB anonymously, 60 MB signed in. No watermark, no per-minute fee.' },
        { q: 'Are my audio files stored?',              a: 'No. Audio streams to the transcription provider, gets processed once, and is dropped. Transcripts persist only on signed-in accounts.' },
      ]}

      ctaHeadline="Transcribe audio in any language"
      ctaSubtitle="One upload page for 50+ languages. Auto-detect, code-switching, and one-click translation."
      ctaButton="Upload audio in any language"

      exploreCards={[
        { href: '/french-speech-to-text',      flag: '🇫🇷', title: 'French Speech to Text',       desc: 'Liaisons, accents, and Quebec French supported.' },
        { href: '/spanish-audio-to-text',      flag: '🇪🇸', title: 'Spanish Audio to Text',       desc: 'All regional Spanish varieties handled.' },
        { href: '/german-audio-transcription', flag: '🇩🇪', title: 'German Audio Transcription',  desc: 'Compound words and regional varieties handled.' },
      ]}
    />
  )
}
