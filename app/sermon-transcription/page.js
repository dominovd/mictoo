import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'Sermon Transcription — Free Transcript Generator for Sermons | Mictoo',
  description:
    'Free sermon transcription. Upload your service recording (MP3, MP4, M4A, WAV) and get a clean AI transcript in seconds. Built for churches, pastors, and study notes.',
  alternates: {
    canonical: 'https://mictoo.com/sermon-transcription',
    languages: {
      'en': 'https://mictoo.com/sermon-transcription',
      'fr': 'https://mictoo.com/fr/sermon-transcription',
      'de': 'https://mictoo.com/de/sermon-transcription',
      'es': 'https://mictoo.com/es/sermon-transcription',
      'ru': 'https://mictoo.com/ru/sermon-transcription',
      'it': 'https://mictoo.com/it/sermon-transcription',
      'pt': 'https://mictoo.com/pt/sermon-transcription',
      'pl': 'https://mictoo.com/pl/sermon-transcription',
      'ja': 'https://mictoo.com/ja/sermon-transcription',
      'ko': 'https://mictoo.com/ko/sermon-transcription',
      'x-default': 'https://mictoo.com/sermon-transcription',
    },
  },

  openGraph: {
    title: "Sermon Transcription — Free Transcript Generator for Sermons | Mictoo",
    description: "Free sermon transcription. Upload your service recording (MP3, MP4, M4A, WAV) and get a clean AI transcript in seconds. Built for churches, pastors, and study notes.",
    url: "https://mictoo.com/sermon-transcription",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sermon Transcription — Free Transcript Generator for Sermons | Mictoo",
    description: "Free sermon transcription. Upload your service recording (MP3, MP4, M4A, WAV) and get a clean AI transcript in seconds. Built for churches, pastors, and study notes.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function SermonTranscriptionPage() {
  return (
    <LandingLayout
      badge="Churches · Pastors · Study · Free"
      h1={
        <>
          Sermon Transcription
          <br />
          <span className="text-brand-600">Free Sermon to Text</span>
        </>
      }
      subtitle="Turn any sermon recording into clean text. For church blogs, study notes, accessibility, and translation. No signup, no per-minute fee."
      howItWorks={[
        {
          icon: '⛪',
          title: 'Drop the sermon recording',
          desc: 'MP3 from a church mixer, MP4 from a livestream archive, M4A from a phone recording, WAV from a board recorder. All work.',
        },
        {
          icon: '⚡',
          title: 'AI transcribes it',
          desc: 'Whisper large-v3 reads the audio. A 30-minute sermon finishes in around a minute. A 45-minute sermon under 90 seconds.',
        },
        {
          icon: '📋',
          title: 'Get the transcript',
          desc: 'Read it, copy it, or download as TXT or SRT. Paste into your church blog, study guide, or printed program.',
        },
      ]}
      whyUse={{
        title: 'Why Mictoo for sermons',
        bullets: [
          {
            title: 'Long-form sermons fit',
            desc: 'Up to 60 minutes per file when you sign in (free). Most sermons are 25 to 45 minutes, well within the cap.',
          },
          {
            title: 'Multi-language services work',
            desc: 'For churches serving immigrant or international communities, sermons sometimes switch between two languages or include passages in the original (Hebrew, Greek, Latin). Whisper handles code-switching and supports 50+ languages.',
          },
          {
            title: 'Music intros are handled',
            desc: 'Most services start with worship music before the sermon. Whisper voice activity detection tags music as silence rather than inventing words. The transcript starts cleanly when the spoken sermon begins.',
          },
          {
            title: 'Free, suitable for nonprofit budgets',
            desc: 'Churches often have small budgets for tech. Mictoo is free, no monthly subscription, no per-minute charge. Transcribe every Sunday service without affecting the bookkeeping.',
          },
          {
            title: 'Privacy by default',
            desc: 'The sermon audio streams to the transcription provider and is discarded. Useful for churches that want a transcript without the recording sitting on a third-party server.',
          },
        ],
      }}
      useCases={{
        title: 'What people do with sermon transcripts',
        items: [
          {
            title: 'Church blog and weekly newsletter',
            desc: 'Turn the sermon into a written devotion for the next week. Members who missed the service can read it. SEO bonus: text content helps your church website rank for sermon topics.',
          },
          {
            title: 'Study guides and small group materials',
            desc: 'Pull discussion questions from the transcript. Reference specific quotes from the sermon in next week study guide. Faster than typing notes during the live sermon.',
          },
          {
            title: 'Accessibility for deaf and hard-of-hearing members',
            desc: 'A transcript or SRT subtitle file makes the sermon accessible to members who cannot hear or hear well. Some churches share the transcript via email after each service.',
          },
          {
            title: 'Translation for multilingual congregations',
            desc: 'Transcribe in the source language, then run through DeepL or ChatGPT to translate. Useful for sharing English sermons with Spanish or Korean-speaking members, or vice versa.',
          },
          {
            title: 'Archive and sermon library',
            desc: 'Years of recorded sermons become searchable when transcribed. Members and the pastor can find past references to specific Bible passages or topics by searching the text.',
          },
        ],
      }}
      proTips={{
        title: 'Pro tips for sermon transcription',
        tips: [
          {
            title: 'Record from the soundboard, not from a phone in the congregation',
            desc: 'A direct line from the church soundboard gives you clean speech without congregation noise, music bleed, or echo. Most churches with a mixer can run a stereo line into a recorder or laptop.',
          },
          {
            title: 'Trim the worship music before upload',
            desc: 'A 60-minute service is often 15 minutes of worship music, 30 minutes of sermon, 15 minutes of announcements and closing. Trim out the music sections in Audacity to save your file-size budget and avoid Whisper hallucinations during music.',
          },
          {
            title: 'Pick the language manually for non-English services',
            desc: 'Auto-detect samples the first few seconds. If your service opens with a hymn in Latin or Hebrew, detection might fall back to the wrong language. Pick the spoken language explicitly.',
          },
          {
            title: 'Names of Bible figures and theological terms often need cleanup',
            desc: 'Whisper handles common Bible names (Jesus, Moses, David) well. Less common names (Habakkuk, Shadrach, Meshach) and theological vocabulary (eschatology, justification) sometimes get mangled. Plan for 5 to 10 minutes of cleanup per transcript.',
          },
          {
            title: 'For congregational responses and call-and-response, expect imperfect capture',
            desc: 'When the congregation responds together, Whisper sometimes drops their part or transcribes it loosely. The pastor part remains accurate.',
          },
          {
            title: 'For sermons over 60 minutes, split at a natural transition',
            desc: 'Long teaching series sermons might exceed our 60-minute cap. Split at the prayer transition or topic change. Concatenate the transcripts after.',
          },
        ],
      }}
      faq={[
        {
          q: 'How accurate is sermon transcription?',
          a: 'For clean soundboard audio with a single pastor speaking, 90 to 95 percent. For services with congregational singing or response, accuracy on those sections drops to 70 to 80 percent. Pastor sermon portion remains the strongest.',
        },
        {
          q: 'Will Bible quotes come through accurately?',
          a: 'Common verses recited from memory come through well. Pastoral expansion on the verse (the actual sermon) is the most accurate part. For exact verse quotes, you may want to cross-reference against your preferred translation rather than trust the transcript.',
        },
        {
          q: 'My sermon is over 60 minutes. What do I do?',
          a: 'Split at a natural break (prayer, topic transition, congregational response section). Transcribe each chunk, concatenate the text afterwards. See our splitting guide.',
        },
        {
          q: 'My sermon is in Spanish, Korean, or another language. Will it work?',
          a: 'Yes. Whisper supports 50+ languages with strong accuracy in major languages. Pick the language manually from the dropdown for best results.',
        },
        {
          q: 'Can I transcribe sermons from a livestream archive (YouTube, Facebook)?',
          a: 'Yes, if you can download the recording from the platform. For YouTube archives, see our YouTube to Text page for download instructions. Facebook livestream archives can be downloaded with similar tools.',
        },
        {
          q: 'Will my sermon recording be stored on your servers?',
          a: 'No. The file streams to our transcription provider, gets processed, then is discarded. We do not retain the audio.',
        },
        {
          q: 'Can I edit the transcript before downloading?',
          a: 'Yes. Fix any mangled Bible names or theological terms inline in the result view, then download as TXT or SRT.',
        },
        {
          q: 'Is there a per-sermon charge?',
          a: 'No charges. Transcription is free with no per-minute meter. We are funded by display ads.',
        },
        {
          q: 'Will the transcript include music lyrics from hymns sung during the service?',
          a: 'Whisper attempts to transcribe sung lyrics, but the accuracy is much lower than for spoken word. For accurate hymn lyrics, use the songbook reference rather than the transcript.',
        },
        {
          q: 'Can I get timestamps for jumping back to specific moments?',
          a: 'Yes. Download as SRT and you get timestamps. Useful for sermon study materials that reference specific points in the audio.',
        },
        {
          q: 'How does this compare to dedicated sermon transcription services?',
          a: 'Dedicated services (Rev Sermon, Sermonary) charge per minute and offer human-edited transcripts. Mictoo is AI, free, and good enough for blog posts, study notes, and accessibility. For court-grade verbatim transcripts, hire a human.',
        },
        {
          q: 'Can I batch transcribe a year of sermons at once?',
          a: 'Not in one click yet. Right now you transcribe one file at a time. Batch upload is on the roadmap for the future Pro tier. For now, transcribing one sermon a week is manageable.',
        },
      ]}
      relatedLinks={[
        { href: '/lecture-transcription', label: 'Lecture Transcription', desc: 'For educational long-form audio with similar characteristics.' },
        { href: '/webinar-transcription', label: 'Webinar Transcription', desc: 'For long-form events with Q&A.' },
        { href: '/transcribe-audio-to-text', label: 'Audio to Text', desc: 'Generic audio transcription for any format.' },
        { href: '/multilingual-transcription', label: 'Multilingual Transcription', desc: 'For services with multi-language sections.' },
      ]}
    />
  )
}
