import LanguagePageLayout from '@/components/LanguagePageLayout'

export const metadata = {
  title: 'German Audio Transcription for Regional Speech | Mictoo',
  description:
    'Transcribe German audio from Germany, Austria, Switzerland, and Liechtenstein. Review compound words, timestamps, summaries, translations, and exports.',
  alternates: {
    canonical: 'https://mictoo.com/german-audio-transcription',
    languages: {
      'en': 'https://mictoo.com/german-audio-transcription',
      'fr': 'https://mictoo.com/fr/german-audio-transcription',
      'de': 'https://mictoo.com/de/german-audio-transcription',
      'es': 'https://mictoo.com/es/german-audio-transcription',
      'ru': 'https://mictoo.com/ru/german-audio-transcription',
      'it': 'https://mictoo.com/it/german-audio-transcription',
      'pt': 'https://mictoo.com/pt/german-audio-transcription',
      'pl': 'https://mictoo.com/pl/german-audio-transcription',
      'ja': 'https://mictoo.com/ja/german-audio-transcription',
      'ko': 'https://mictoo.com/ko/german-audio-transcription',
      'x-default': 'https://mictoo.com/german-audio-transcription',
    },
  },
  openGraph: {
    title: 'German Audio Transcription: Compound Words and Regional Varieties | Mictoo',
    description: 'Transcribe German audio. Hochdeutsch, Swiss German, Austrian German.',
    url: 'https://mictoo.com/german-audio-transcription',
    siteName: 'Mictoo', type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'German Audio Transcription',
    description: 'Transcribe German audio across regional varieties.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function GermanAudioTranscriptionPage() {
  return (
    <LanguagePageLayout
      badge="German · Whisper large-v3 · Free"
      h1First="German Audio Transcription"
      h1Second="Compound words, Sie/du, and regional varieties"
      subtitle="Upload German audio from Germany, Austria, Switzerland, or Liechtenstein. Get a timestamped first draft designed for compound words, separable verbs, and regional speech."
      defaultLanguage="de"
      currentHref="/german-audio-transcription"

      chips={[
        { label: 'Free',            icon: 'gift' },
        { label: 'Auto-deleted',    icon: 'shield' },
        { label: 'German variants', icon: 'globe' },
        { label: 'AI summary',      icon: 'sparkles' },
      ]}

      flags={[
        { flag: '🇩🇪', label: 'Hochdeutsch' },
        { flag: '🇦🇹', label: 'Austrian' },
        { flag: '🇨🇭', label: 'Swiss German' },
        { flag: '🇱🇮', label: 'Liechtenstein' },
        { flag: '🌍', label: 'Bavarian / Northern' },
      ]}

      stepsTitle="How German transcription works"
      steps={[
        { icon: 'upload',   title: 'Upload your German audio',        desc: 'MP3, MP4, WAV, M4A or any common format with clear German speech.' },
        { icon: 'sparkles', title: 'German-aware first draft', desc: 'Whisper can preserve compound words and separable verb structures; review unusual terms and strong dialects.' },
        { icon: 'editPen',  title: 'Edit, translate, and export',      desc: 'Review, summarise, translate and export as TXT, SRT, VTT, DOCX.' },
      ]}

      exampleTitle="Example German transcript & summary"
      exampleFileName="team-besprechung.mp3"
      exampleDurationLabel="00:34"
      exampleLines={[
        { t: '00:00', line: 'Guten Morgen zusammen. Heute besprechen wir die Ergebnisse der Woche.' },
        { t: '00:08', line: 'Das Berliner Team hat die neuen Kundendaten geteilt.' },
        { t: '00:15', line: 'Der Umsatz ist gegenüber dem Vorquartal um zwölf Prozent gestiegen.' },
        { t: '00:22', line: 'Wunderbar. Und aus Wien, was habt ihr beobachtet?' },
        { t: '00:27', line: 'Die Kundenzufriedenheit hat sich in Österreich deutlich verbessert.' },
        { t: '00:32', line: 'Danke euch. Wir sehen uns nächste Woche wieder.' },
      ]}
      summaryPoints={[
        'Wöchentliche Team-Besprechung zu Kunden- und Umsatzergebnissen.',
        'Berlin meldet einen Umsatzanstieg von zwölf Prozent im Quartalsvergleich.',
        'Wien berichtet über eine deutliche Verbesserung der Kundenzufriedenheit.',
        'Nächste Besprechung findet nächste Woche statt.',
      ]}

      whyTitle="Why use Mictoo for German audio?"
      whyCards={[
        { icon: 'globe',    title: 'Regional speech support',     desc: 'Designed for Hochdeutsch, Austrian German, Swiss German, Bavarian and Northern varieties.' },
        { icon: 'accent',   title: 'German orthography',          desc: 'The transcript can preserve umlauts and ß; review names, dialect spellings, and specialist terms.' },
        { icon: 'quote',    title: 'Compound-word review',        desc: 'Long compounds are kept when recognised, with Editor mode available for correcting unusual words.' },
        { icon: 'translate',title: 'Translation included',        desc: 'Translate the finished transcript into any of the 36 supported target languages.' },
      ]}

      worksWellTitle="German audio that works well"
      worksWell={[
        { icon: 'chat',       title: 'Interviews' },
        { icon: 'cap',        title: 'University lectures' },
        { icon: 'headphones', title: 'Podcasts' },
        { icon: 'briefcase',  title: 'Business meetings' },
        { icon: 'search',     title: 'Research recordings' },
        { icon: 'book',       title: 'Legal recordings' },
      ]}

      tipsTitle="Tips for accurate German transcripts"
      tips={[
        'Select German (not "auto") for short clips.',
        'Review compound-word joins in Editor mode.',
        'Correct proper nouns and place names.',
        'For Swiss German, review whether the output uses dialect spelling or Standard German.',
      ]}
      challengesTitle="What makes German speech recognition difficult"
      challenges={[
        { title: 'Compound words',      desc: 'German joins nouns into long compounds that speech recognition must keep or reconstruct.', example: 'Krankenversicherung', ipa: 'kʁaŋk.n̩.fɛɐ.ziç.ə.ʁʊŋ' },
        { title: 'Separable verbs',     desc: 'Verb prefixes move to the end of the clause and must reconnect at parsing time.', example: 'ich rufe an', ipa: '' },
        { title: 'Formal vs informal',  desc: 'Sie / du register affects verb endings and pronoun choice throughout.',       example: 'Sie kommen / du kommst', ipa: '' },
        { title: 'Swiss German',         desc: 'Spoken dialect differs substantially from Standard German, so output may require manual normalisation.', example: 'Grüezi', ipa: '' },
      ]}

      varietiesTitle="German varieties supported"
      varieties={[
        { flag: '🇩🇪', name: 'Hochdeutsch (Germany)',     differences: 'Standard German, Duden orthography' },
        { flag: '🇦🇹', name: 'Austrian German',            differences: 'Jänner (January), Marille (apricot)' },
        { flag: '🇨🇭', name: 'Swiss German',                differences: 'Spoken dialect, written as Hochdeutsch' },
        { flag: '🇱🇮', name: 'Liechtenstein German',       differences: 'Alemannic influence, Hochdeutsch written' },
        { flag: '🌍', name: 'Bavarian / Northern',        differences: 'Regional vocabulary, dialect intonation' },
      ]}

      faq={[
        { q: 'Does Mictoo handle Swiss German?',            a: 'Whisper can transcribe many Swiss German recordings. Set the language to German and review dialect vocabulary because the output may mix dialect spelling and Standard German.' },
        { q: 'Are compound words joined correctly?',        a: 'Common compounds are usually kept as single words. Review uncommon names and specialist terminology in Editor mode.' },
        { q: 'Are umlauts (ä, ö, ü, ß) preserved?',         a: 'Yes. Whisper outputs proper German orthography including all umlauts and the sharp s (ß).' },
        { q: 'Can I translate the transcript to English?',  a: 'Yes. Pick English as the target and click Translate. GPT-4o-mini translates and appears alongside the original.' },
        { q: 'Is German transcription free?',               a: 'Yes. Files up to 25 MB can be transcribed anonymously or up to 180 MB when signed in. No watermark and no per-minute fee.' },
        { q: 'Are my audio files stored?',                  a: 'No. Audio streams to the transcription provider, gets processed once, and is dropped. Transcripts persist only on signed-in accounts.' },
      ]}

      ctaHeadline="Transcribe your German audio"
      ctaSubtitle="Upload any German recording and get an accurate transcript, summary and exports in seconds."
      ctaButton="Upload German audio"

      exploreCards={[
        { href: '/french-speech-to-text',      flag: '🇫🇷', title: 'French Speech to Text',       desc: 'Liaisons, accents, and Quebec French supported.' },
        { href: '/spanish-audio-to-text',      flag: '🇪🇸', title: 'Spanish Audio to Text',       desc: 'Regional Spanish varieties with editable output.' },
        { href: '/multilingual-transcription', flag: '🌐', title: 'Multilingual Transcription',   desc: 'Choose from 36 languages or use automatic detection.' },
      ]}
    />
  )
}
