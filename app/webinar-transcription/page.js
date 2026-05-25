import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'Webinar Transcription — Free Transcript for Webinar Recordings | Mictoo',
  description:
    'Free webinar transcription. Upload your recording from Zoom, Webex, GoToWebinar, Demio, or any platform. Clean AI transcript with timestamps in seconds.',
  alternates: {
    canonical: 'https://mictoo.com/webinar-transcription',
    languages: {
      'en': 'https://mictoo.com/webinar-transcription',
      'fr': 'https://mictoo.com/fr/webinar-transcription',
      'de': 'https://mictoo.com/de/webinar-transcription',
      'es': 'https://mictoo.com/es/webinar-transcription',
      'ru': 'https://mictoo.com/ru/webinar-transcription',
      'it': 'https://mictoo.com/it/webinar-transcription',
      'pt': 'https://mictoo.com/pt/webinar-transcription',
      'pl': 'https://mictoo.com/pl/webinar-transcription',
      'ja': 'https://mictoo.com/ja/webinar-transcription',
      'ko': 'https://mictoo.com/ko/webinar-transcription',
      'x-default': 'https://mictoo.com/webinar-transcription',
    },
  },
}

export default function WebinarTranscriptionPage() {
  return (
    <LandingLayout
      badge="Webinars · Long-form · Free"
      h1={
        <>
          Webinar Transcription
          <br />
          <span className="text-brand-600">Free Webinar to Text</span>
        </>
      }
      subtitle="Turn your webinar recording into clean, citable text. Works with Zoom, Webex, GoToWebinar, Demio, Livestorm, ON24, anything that exports MP4 or M4A."
      howItWorks={[
        {
          icon: '🎤',
          title: 'Export the webinar recording',
          desc: 'Most platforms export as MP4 (video plus audio) or M4A (audio only). For long webinars, M4A is the smaller and faster option.',
        },
        {
          icon: '⚡',
          title: 'Drop the file',
          desc: 'We pull the audio if it is video, send it to Whisper large-v3. A 60-minute webinar usually finishes in just under two minutes.',
        },
        {
          icon: '📋',
          title: 'Get the transcript',
          desc: 'Read it, copy it, or download as TXT or SRT. The SRT works as YouTube subtitles if you republish the webinar.',
        },
      ]}
      whyUse={{
        title: 'Why Mictoo for webinars',
        bullets: [
          {
            title: 'Built-in webinar transcription is uneven across platforms',
            desc: 'Zoom Webinar transcripts require a paid tier. Webex and GoToWebinar transcripts exist but vary in quality. Mictoo is one consistent option across all platforms.',
          },
          {
            title: 'Long-form is fine, up to 60 minutes per file',
            desc: 'A typical webinar runs 45 to 75 minutes. Sign in (free) for the 60-minute cap. For longer ones, split before upload and stitch the transcripts.',
          },
          {
            title: 'Handles Q&A and audience questions',
            desc: 'Even if audience members are far from the mic, Whisper picks up most of their questions. You may need to clean up the worst-quality audience audio, but the host responses come through cleanly.',
          },
          {
            title: 'Multiple speakers, one transcript',
            desc: 'Webinars often have a host, a panelist or two, and audience Q&A. Whisper does not separate speakers, but the conversation flows in clear order. Adding "[Host]" and "[Guest]" tags takes 5 to 10 minutes per webinar.',
          },
          {
            title: 'No file is stored',
            desc: 'The recording streams to the transcription provider and is discarded. We do not retain your webinar audio.',
          },
        ],
      }}
      useCases={{
        title: 'What people do with webinar transcripts',
        items: [
          {
            title: 'Repurpose into blog posts and lead magnets',
            desc: 'A 60-minute webinar gives you 8000 to 10000 words. Edit into 3 to 4 blog posts, a lead magnet PDF, an email sequence, social posts. One webinar produces a quarter of content marketing.',
          },
          {
            title: 'Searchable training library',
            desc: 'If your team or community runs regular webinars, transcribing each one builds a searchable internal library. Past webinars become findable instead of disappearing into your Google Drive.',
          },
          {
            title: 'Send a follow-up to attendees',
            desc: 'Attendees appreciate a summary or transcript after a long webinar. Easier to revisit specific points without rewatching 60 minutes.',
          },
          {
            title: 'Quote pulling for social and ads',
            desc: 'Scan the transcript for the line that landed best. Use it as a quote graphic for LinkedIn or as ad creative for your next webinar campaign.',
          },
          {
            title: 'Translation for international audiences',
            desc: 'Transcribe in the source language, then run through DeepL or ChatGPT to translate. Useful for replaying a webinar to a non-English-speaking audience or producing subtitled versions.',
          },
        ],
      }}
      proTips={{
        title: 'Pro tips for webinar transcription',
        tips: [
          {
            title: 'Download the audio-only export when available',
            desc: 'Most webinar platforms offer both video (MP4) and audio-only (M4A or MP3) downloads. For transcription, audio-only is fine. Often 10x smaller than the video.',
          },
          {
            title: 'For multi-host webinars, ensure everyone has a real microphone',
            desc: 'Webinars with one speaker on a USB mic and another on laptop audio have noticeably uneven transcript quality. If you run webinars regularly, send USB headsets to your regular panelists.',
          },
          {
            title: 'Mute audience automatically (almost all platforms do this)',
            desc: 'For platforms that do not (Discord, casual Zoom meetings repurposed as webinars), make sure audience is muted by default. Open mics in the background hurt accuracy.',
          },
          {
            title: 'For panel webinars, transcribe the recording once, label speakers afterward',
            desc: 'Whisper produces one continuous transcript. Add "[Moderator]", "[Panelist 1]", etc. as you edit. Takes 10 minutes for a 60-minute webinar with 3 speakers.',
          },
          {
            title: 'For long Q&A sessions, split the recording at the Q&A boundary',
            desc: 'Easier to share just the main presentation transcript with attendees, and keep the Q&A as a separate file for internal use. Most platforms timestamp the Q&A start, use that as the split point.',
          },
          {
            title: 'For repeat webinars, create a glossary of recurring proper nouns',
            desc: 'Same product names, presenter names, and technical terms appear in every webinar. Keep a find-and-replace list to clean them up faster after each transcription.',
          },
        ],
      }}
      faq={[
        {
          q: 'What webinar platforms do you support?',
          a: 'All of them. We work with the recording file, not the platform. Zoom Webinar, GoToWebinar, Webex, Demio, Livestorm, ON24, BrightTALK, Discord stages used as webinars. If the export is MP4, M4A, MP3, WAV, FLAC, or OGG, we transcribe it.',
        },
        {
          q: 'My webinar is over 60 minutes. What do I do?',
          a: 'Split the recording at a natural break (after the main presentation, before Q&A is common). Each chunk transcribes separately, then you can concatenate the transcripts. See our splitting guide.',
        },
        {
          q: 'Will I get speaker labels for multi-host webinars?',
          a: 'Not automatically. Whisper does not do speaker diarization. For webinars with 2 to 4 distinct voices, adding speaker labels manually takes 5 to 10 minutes. Worth it for a polished transcript.',
        },
        {
          q: 'Does this work for paid Zoom Webinar recordings?',
          a: 'Yes. Once you have the Zoom Webinar MP4 or M4A in your Zoom recordings folder, drop it here. Mictoo does not need a Zoom subscription, only the file.',
        },
        {
          q: 'Can I get SRT subtitles to upload back to YouTube?',
          a: 'Yes. Download as SRT after transcription. If you republish the webinar on YouTube, upload the SRT in YouTube Studio under Subtitles. Better than YouTube auto-captions.',
        },
        {
          q: 'How accurate is webinar transcription?',
          a: 'For clean audio (host with good mic, panelists on USB headsets), 90 to 95 percent. For mixed-quality audio (some on USB, some on laptop mic), 85 to 90 percent. Q&A audience audio often drops to 70 to 80 percent due to far-field pickup.',
        },
        {
          q: 'Will my webinar be stored on your servers?',
          a: 'No. The file streams to our transcription provider, gets processed, then is discarded. We do not retain the recording or the transcript.',
        },
        {
          q: 'What if my webinar is in a non-English language?',
          a: 'Whisper supports 50+ languages with auto-detect. Most webinars are in English, but multilingual webinars (especially in EU markets) work too. Pick the dominant language manually for best results.',
        },
        {
          q: 'Can I transcribe a recorded webinar I attended but did not host?',
          a: 'You need access to the recording file. If the host shared it with you and you have download rights, yes. If you only have access to the recording playback (no download), you cannot transcribe it here. Check with the host.',
        },
        {
          q: 'How does this compare to Zoom Webinar built-in transcription?',
          a: "Zoom's built-in transcription is fine if you have the right Zoom plan and the webinar is in English. Ours is free, works on any Zoom tier, and handles non-English better. Use whichever fits your situation.",
        },
        {
          q: 'Can I batch upload multiple webinar recordings?',
          a: 'Not in one click yet. Right now you transcribe one file at a time. Batch upload is on the roadmap for the Pro tier.',
        },
        {
          q: 'Does the transcript include chat or poll responses?',
          a: 'No. We only transcribe the audio. Chat messages and poll responses are saved separately by your webinar platform. Combine the two yourself if you need both.',
        },
      ]}
      relatedLinks={[
        { href: '/meeting-transcription', label: 'Meeting Transcription', desc: 'For shorter meetings (under 60 minutes).' },
        { href: '/zoom-transcription', label: 'Zoom Transcription', desc: 'For non-webinar Zoom recordings.' },
        { href: '/lecture-transcription', label: 'Lecture Transcription', desc: 'For educational long-form audio.' },
        { href: '/free-srt-generator', label: 'Free SRT Generator', desc: 'For uploading clean subtitles back to YouTube or your webinar replay.' },
      ]}
    />
  )
}
