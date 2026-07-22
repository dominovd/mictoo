import UseCaseLayout from '@/components/UseCaseLayout'

export const metadata = {
  title: 'Dictation to Text for Recorded Voice Drafts | Mictoo',
  description:
    'Record a voice draft, upload the file, and get editable text with timestamps and export options for your writing workflow.',
  alternates: {
    canonical: 'https://mictoo.com/dictation-to-text',
    languages: {
      'en': 'https://mictoo.com/dictation-to-text',
      'fr': 'https://mictoo.com/fr/dictation-to-text',
      'de': 'https://mictoo.com/de/dictation-to-text',
      'es': 'https://mictoo.com/es/dictation-to-text',
      'ru': 'https://mictoo.com/ru/dictation-to-text',
      'it': 'https://mictoo.com/it/dictation-to-text',
      'pt': 'https://mictoo.com/pt/dictation-to-text',
      'pl': 'https://mictoo.com/pl/dictation-to-text',
      'ja': 'https://mictoo.com/ja/dictation-to-text',
      'ko': 'https://mictoo.com/ko/dictation-to-text',
      'x-default': 'https://mictoo.com/dictation-to-text',
    },
  },
  openGraph: {
    title: 'Dictation to Text: Free | Mictoo',
    description: 'Record a draft by voice, drop the file, get clean text.',
    url: 'https://mictoo.com/dictation-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dictation to Text',
    description: 'Voice-first writing for professionals.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function DictationToTextPage() {
  return (
    <UseCaseLayout
      badge="Writers · Professionals · Free"
      h1First="Dictation to Text"
      h1Second="Voice-first writing for anyone who thinks faster than they type"
      subtitle="Record a draft with your phone, laptop, or any voice recorder. Drop the file. Get clean, punctuated text ready to paste into your editor. Better accuracy than built-in phone dictation for long-form content."
      currentHref="/dictation-to-text"

      platforms={[
        { name: 'iPhone',       iconKey: 'mic',       brandBg: '#0F172A' },
        { name: 'Google Rec',   iconKey: 'mic',       brandBg: '#4285F4' },
        { name: 'Windows Rec',  iconKey: 'mic',       brandBg: '#0078D4' },
        { name: 'QuickTime',    iconKey: 'videoCameraFill', brandBg: '#374151' },
        { name: 'Audacity',     iconKey: 'soundwave', brandBg: '#0B60D6' },
        { name: 'Dragon',       iconKey: 'mic',       brandBg: '#DC2626' },
      ]}

      howItWorksTitle="How dictation to text works"
      steps={[
        {
          icon: 'folder',
          title: 'Record your draft',
          desc: 'Any recorder: phone Voice Memo, laptop Voice Recorder, or a dedicated dictation app.',
        },
        {
          icon: 'upload',
          title: 'Drop the file here',
          desc: 'M4A (iPhone), MP3 (Android), WAV (recorder). Free up to 25 MB anonymously, 60 MB signed in.',
        },
        {
          icon: 'editPen',
          title: 'Clean text, ready to paste',
          desc: 'Automatic punctuation, sentence breaks, and formatting. Switch to Editor mode for tweaks before export.',
        },
      ]}

      exampleTitle="Example dictated draft"
      exampleFileName="chapter-3-draft.m4a"
      exampleDurationLabel="12:44"
      exampleLines={[
        { t: '0:00',  line: 'Chapter three. The morning of the trial.' },
        { t: '0:06',  line: 'Alex had barely slept. Not from anxiety, exactly, but from the strange stillness that follows a long preparation.' },
        { t: '0:20',  line: 'For six months, every waking hour had been consumed by the case. And now, suddenly, there was nothing left to do but show up.' },
        { t: '0:36',  line: 'The courthouse was three blocks from her apartment. She walked slowly, letting the cold March air work through her.' },
        { t: '0:50',  line: 'By the time she reached the front steps, the reporters were already gathered, waiting for a face they recognized.' },
        { t: '1:04',  line: 'She kept her head down and walked past them. There would be time for questions later. Not before.' },
        { t: '1:18',  line: 'Inside, the lobby was mostly empty. A few clerks, one janitor, and the security guard she had seen every day this week.' },
      ]}
      summaryPoints={[
        'Opening of chapter 3: morning of the trial.',
        'Character: Alex, protagonist, sleepless not anxious.',
        'Setting: cold March morning, courthouse three blocks away.',
        'Media presence outside; empty lobby inside.',
      ]}
      actionItems={[]}

      whyTitle="Why Mictoo for dictation"
      whyCards={[
        {
          icon: 'target',
          title: 'Designed for recorded drafts',
          desc: 'Record a complete draft first, then transcribe it as one file. This keeps the original audio available while you review and edit the text.',
        },
        {
          icon: 'editPen',
          title: 'Editor for post-dictation cleanup',
          desc: 'Switch to Editor mode, fix names, add paragraph breaks, and export as DOCX ready for your writing app.',
        },
        {
          icon: 'sparkles',
          title: 'AI summary for outline extraction',
          desc: 'Solid first draft for the chapter beats, memo bullet points, or article structure.',
        },
        {
          icon: 'globe',
          title: 'Dictate in any language',
          desc: '50+ languages with auto-detect. Multilingual writers can switch languages between recordings without changing settings.',
        },
      ]}

      scenariosTitle="Common dictation scenarios"
      scenarios={[
        { icon: 'editPen', title: 'First draft' },
        { icon: 'book',    title: 'Chapter dictation' },
        { icon: 'briefcase', title: 'Memo / email' },
        { icon: 'chat',    title: 'Journaling' },
        { icon: 'search',  title: 'Research notes' },
        { icon: 'globe',   title: 'Multilingual' },
      ]}

      tipsTitle="Tips for cleaner dictation"
      tips={[
        'Say "comma", "period", "new paragraph" if you want explicit punctuation.',
        'Record in a quiet room so words are easier to distinguish.',
        'For long chapters over 60 MB, sign in for auto-split.',
        'Review Editor mode before export for names and technical terms.',
      ]}

      guidesTitle="Related tools"
      guides={[
        { href: '/voice-memo-to-text',      icon: 'mic',    title: 'Voice memo',   desc: 'Idea capture, not draft writing' },
        { href: '/m4a-to-text',             icon: 'file',   title: 'M4A format',   desc: 'iPhone / Apple exports' },
        { href: '/transcribe-mp3-to-text',  icon: 'file',   title: 'MP3 format',   desc: 'Android recorder exports' },
        { href: '/interview-transcription', icon: 'chat',   title: 'Interview',    desc: 'Two-person recorded conversation' },
      ]}

      faq={[
        {
          q: 'How is Mictoo different from live phone dictation?',
          a: 'Mictoo works from a saved recording rather than listening live as you type. That makes it useful for reviewing longer drafts against the original audio, subject to the current file-size and duration limits.',
        },
        {
          q: 'Can I dictate technical or medical terms?',
          a: 'Whisper handles common technical vocabulary well. For rare or proprietary terms, use Editor mode after transcription to fix any misses. Faster than dictating and re-correcting inline.',
        },
        {
          q: 'What is the file size limit for dictation?',
          a: '25 MB anonymously, 60 MB when signed in. A 60-minute voice recording at typical bitrate is 20-30 MB, so most dictation sessions fit under the free cap.',
        },
        {
          q: 'Does Mictoo add punctuation automatically?',
          a: 'Yes. Sentences and paragraphs are detected from the speech rhythm. Say "comma" or "period" if you want explicit punctuation at a specific point.',
        },
        {
          q: 'Can I edit the transcript before exporting?',
          a: 'Yes. Switch to Editor mode to edit any word or line inline. Save the changes and export as TXT, DOCX, or PDF (signed-in).',
        },
        {
          q: 'Can I translate my dictated draft?',
          a: 'Yes. Pick a target language and click Translate. Useful for writers producing in a second language, or translators drafting a working version.',
        },
        {
          q: 'Are dictations stored on your servers?',
          a: 'No. The audio streams to the transcription provider, gets processed once, and is dropped. Only the transcript persists if you sign in and save it.',
        },
      ]}

      ctaHeadline="Turn spoken drafts into text"
      ctaSubtitle="Chapter, memo, article, journal entry. Faster than typing when you already know what you want to say."
      ctaButton="Upload a dictation"

      relatedLinks={[
        { href: '/voice-memo-to-text',      label: 'Voice Memo to Text' },
        { href: '/interview-transcription', label: 'Interview Transcription' },
        { href: '/lecture-transcription',   label: 'Lecture Transcription' },
        { href: '/m4a-to-text',             label: 'M4A to Text' },
        { href: '/transcribe-mp3-to-text',  label: 'MP3 to Text' },
      ]}
    />
  )
}
