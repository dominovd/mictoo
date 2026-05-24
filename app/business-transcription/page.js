import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'Business Transcription — Free Meeting & Call Transcript Tool | Mictoo',
  description:
    'Free business transcription. Sales calls, customer interviews, focus groups, board meetings, conferences. Upload, get a clean AI transcript in seconds. No signup.',
  alternates: {
    canonical: 'https://mictoo.com/business-transcription',
    languages: {
      'en': 'https://mictoo.com/business-transcription',
      'fr': 'https://mictoo.com/fr/business-transcription',
      'de': 'https://mictoo.com/de/business-transcription',
      'es': 'https://mictoo.com/es/business-transcription',
      'ru': 'https://mictoo.com/ru/business-transcription',
      'it': 'https://mictoo.com/it/business-transcription',
      'pt': 'https://mictoo.com/pt/business-transcription',
      'pl': 'https://mictoo.com/pl/business-transcription',
      'ja': 'https://mictoo.com/ja/business-transcription',
      'ko': 'https://mictoo.com/ko/business-transcription',
      'x-default': 'https://mictoo.com/business-transcription',
    },
  },
}

export default function BusinessTranscriptionPage() {
  return (
    <LandingLayout
      badge="Sales · Research · Compliance · Free"
      h1={
        <>
          Business Transcription
          <br />
          <span className="text-brand-600">Free Business Audio to Text</span>
        </>
      }
      subtitle="Turn any business audio into clean text. Sales calls, customer interviews, focus groups, conferences, board meetings. No signup, no per-minute fee."
      howItWorks={[
        {
          icon: '🎙️',
          title: 'Drop the audio or video',
          desc: 'MP3 from a call recorder, M4A from a phone, MP4 from a video conference, WAV from a field recorder. Sales call from Gong, Zoom recording from a customer interview, M4A from a board meeting. All work.',
        },
        {
          icon: '⚡',
          title: 'AI transcribes it',
          desc: 'Whisper large-v3 processes the audio. A 30-minute call finishes in about a minute. A 60-minute meeting in just under two.',
        },
        {
          icon: '📋',
          title: 'Get the transcript',
          desc: 'Read it, copy it, or download as TXT or SRT. Paste into your CRM, research repository, project doc, or compliance archive.',
        },
      ]}
      whyUse={{
        title: 'Why Mictoo for business audio',
        bullets: [
          {
            title: 'Same accuracy as the expensive options',
            desc: 'Whisper large-v3 is the model behind a lot of paid enterprise transcription tools. We run it without the per-seat license cost.',
          },
          {
            title: 'Works for sporadic use',
            desc: 'If you transcribe one sales call a week, paying for an enterprise tool monthly seat is wasteful. Free with no minute meter fits the sporadic-use pattern.',
          },
          {
            title: '50+ languages, useful for international business',
            desc: 'Multilingual customer interviews, cross-border sales calls, panels with non-native English speakers. All handled.',
          },
          {
            title: 'No file is stored',
            desc: 'The recording streams to the transcription provider and is discarded. For business audio that you do not want sitting on a third-party server, this matters.',
          },
          {
            title: 'SRT export for video editors',
            desc: 'If your business audio is from a video (conference panel, town hall), the SRT plugs into Premiere, DaVinci, or YouTube Studio for caption work.',
          },
        ],
      }}
      useCases={{
        title: 'Common business transcription use cases',
        items: [
          {
            title: 'Sales call summaries',
            desc: 'Account executives drop call recordings into the CRM next to the deal. Faster handoffs, better quote retrieval for follow-up emails, easier coaching for sales managers.',
          },
          {
            title: 'Customer interviews for product research',
            desc: 'Product managers and UX researchers transcribe customer conversations to code patterns, write user stories, and build research repositories.',
          },
          {
            title: 'Focus group transcripts',
            desc: 'Market research firms transcribe focus group sessions for analysis. The transcript is what gets coded, not the video.',
          },
          {
            title: 'Board meetings and leadership offsites',
            desc: 'Transcripts make corporate decisions searchable and reduce ambiguity months later. Useful for governance, employee communications, and audit trails.',
          },
          {
            title: 'Conference panel recordings',
            desc: 'Marketing and PR teams transcribe panel discussions where their leaders spoke. Blog posts, social media quote graphics, sales enablement content. All start from the transcript.',
          },
        ],
      }}
      proTips={{
        title: 'Pro tips for business transcription',
        tips: [
          {
            title: 'For sales call recordings, use a tool like Gong or Chorus if you can',
            desc: 'Those tools handle recording, transcription, and CRM logging together. Mictoo is the right fit for occasional transcription, not for a high-volume sales operation.',
          },
          {
            title: 'For customer interviews, ask consent and explain how the audio is used',
            desc: 'I am going to record this conversation so I do not have to take notes. The audio gets transcribed and stays on our research repository. This is also legally required in many jurisdictions for any call recording.',
          },
          {
            title: 'Use a good mic, especially for the customer',
            desc: 'Customer voices captured through a phone line transcribe with 5 to 10 percent lower accuracy than dial-in calls with a USB headset on the customer side. For high-value interviews, mail a headset before the call.',
          },
          {
            title: 'Trim the small talk before upload to save your file-size budget',
            desc: 'Most business calls open with 2 to 5 minutes of weather and pleasantries. Trim that in Audacity before upload if your file is close to the size limit.',
          },
          {
            title: 'Pick the language manually for international calls',
            desc: 'If a sales call opens in English but moves to French, auto-detect can get confused. Pick the dominant language manually.',
          },
          {
            title: 'For confidential business audio, do not use any cloud transcription, including ours',
            desc: 'HR conversations, M&A discussions, legal calls, anything privileged. Use a local Whisper installation on your own machine. Same model, runs offline, no third-party processing.',
          },
        ],
      }}
      faq={[
        {
          q: 'Is Mictoo suitable for business use?',
          a: 'For occasional transcription (sales calls, interviews, panels), yes. For high-volume operations (a sales team transcribing 50 calls a day), a dedicated tool like Gong or Chorus is a better fit because they bundle CRM integration, coaching workflows, and team analytics.',
        },
        {
          q: 'Is my business audio stored on your servers?',
          a: 'No. The file streams to our transcription provider (Groq, with OpenAI as backup) and is discarded after processing. We do not retain the audio or the transcript.',
        },
        {
          q: 'Is this GDPR compliant?',
          a: 'We do not store the audio or transcript after the page closes. We are based in Europe, and our providers (Groq US, OpenAI US) have data processing agreements. For your specific GDPR situation (data controller obligations, lawful basis for recording), see our Privacy Policy and consult your data protection officer.',
        },
        {
          q: 'Can I use this for recording calls with EU or California customers?',
          a: 'You can use the transcription. Recording itself requires consent from the other party in many jurisdictions (two-party consent in California and parts of the EU). Get consent before you record.',
        },
        {
          q: 'How accurate is the transcript for proper nouns and company names?',
          a: 'Less accurate than common words. Whisper does not know your customer name, the product name, or the specific terminology your company uses. Expect to fix these manually. The rest of the transcript will be solid.',
        },
        {
          q: 'Will I get speaker labels (rep vs customer)?',
          a: 'Not automatically. For 2-speaker calls, add labels manually based on the conversation. For multi-party calls with separate audio tracks per speaker, transcribe each track separately.',
        },
        {
          q: 'How does this compare to Gong, Chorus, or Fireflies?',
          a: 'Those are full sales-call platforms with CRM integration, automated coaching, deal-stage tagging, and call analytics. We are pure transcription, no integrations, no coaching layer. Cheaper (free), much narrower. Use them if you need the full platform. Use us if you just need the text.',
        },
        {
          q: 'Can I transcribe a confidential business call?',
          a: 'For non-sensitive business calls, yes. For confidential calls (HR, legal, M&A, anything privileged), avoid all cloud transcription including ours. Use a local Whisper installation instead.',
        },
        {
          q: 'How long does a business call take to transcribe?',
          a: 'About 1 to 2 percent of the audio length. A 30-minute call finishes in around 30 to 60 seconds.',
        },
        {
          q: 'What output formats are available?',
          a: 'Plain text (TXT) and SRT (subtitle file with timestamps). Copy-to-clipboard also works for pasting straight into a CRM or doc.',
        },
        {
          q: 'Can I batch upload multiple sales calls?',
          a: 'Not in one click yet. Right now you upload one file at a time. Batch is on the roadmap for the future Pro tier.',
        },
        {
          q: 'What if my business audio is over 60 minutes?',
          a: 'Split into chunks under 60 minutes. The transcripts can be concatenated afterwards.',
        },
      ]}
      relatedLinks={[
        { href: '/interview-transcription', label: 'Interview Transcription', desc: 'For one-on-one interviews and qualitative research.' },
        { href: '/meeting-transcription', label: 'Meeting Transcription', desc: 'For any meeting recording, any platform.' },
        { href: '/zoom-transcription', label: 'Zoom Transcription', desc: 'For Zoom-recorded calls.' },
        { href: '/teams-meeting-transcription', label: 'Teams Meeting Transcription', desc: 'For Microsoft Teams calls.' },
      ]}
    />
  )
}
