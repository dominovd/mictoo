import FormatPageLayout from '@/components/FormatPageLayout'

export const metadata = {
  title: 'Video to Text: Free Online Video Transcription for MP4, MOV, WebM | Mictoo',
  description:
    'Upload an MP4, MOV, WebM, AVI, or MKV video and get a transcript with timestamps, AI summary, and SRT subtitles. For screen recordings, tutorials, vlogs, and webinars.',
  alternates: {
    canonical: 'https://mictoo.com/transcribe-video-to-text',
    languages: {
      'en': 'https://mictoo.com/transcribe-video-to-text',
      'fr': 'https://mictoo.com/fr/transcribe-video-to-text',
      'de': 'https://mictoo.com/de/transcribe-video-to-text',
      'es': 'https://mictoo.com/es/transcribe-video-to-text',
      'ru': 'https://mictoo.com/ru/transcribe-video-to-text',
      'it': 'https://mictoo.com/it/transcribe-video-to-text',
      'pt': 'https://mictoo.com/pt/transcribe-video-to-text',
      'pl': 'https://mictoo.com/pl/transcribe-video-to-text',
      'ja': 'https://mictoo.com/ja/transcribe-video-to-text',
      'ko': 'https://mictoo.com/ko/transcribe-video-to-text',
      'x-default': 'https://mictoo.com/transcribe-video-to-text',
    },
  },
  openGraph: {
    title: 'Video to Text: Free Online Video Transcription | Mictoo',
    description: 'MP4, MOV, WebM video transcription with SRT, summary, and translation.',
    url: 'https://mictoo.com/transcribe-video-to-text',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Video to Text: Free Online Video Transcription',
    description: 'MP4, MOV, WebM video transcription with SRT and summary.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function TranscribeVideoToTextPage() {
  return (
    <FormatPageLayout
      badge="Video files · MP4 · MOV · WebM · Free"
      h1First="Video to Text"
      h1Second="For screen recordings, tutorials, and vlogs"
      subtitle="Upload an MP4, MOV, WebM, MKV, or AVI file. We extract the audio track, transcribe with Whisper large-v3, and return a transcript with timestamps, AI summary, and SRT subtitles ready to drop back onto the video."
      highlightFormat="video"
      relatedFormatsTitle="Video containers you can upload"
      relatedFormats={[
        { key: 'video', name: 'MP4', ext: '.mp4' },
        { key: 'mov', name: 'MOV', ext: '.mov' },
        { key: 'webm', name: 'WebM', ext: '.webm', href: '/webm-to-text' },
        { key: 'mkv', name: 'MKV', ext: '.mkv' },
        { key: 'avi', name: 'AVI', ext: '.avi' },
        { key: 'mpeg', name: 'MPEG', ext: '.mpeg' },
      ]}
      previewFileName="keynote-recording.mp4"
      previewWordCount={205}
      previewDurationLabel="32:47"
      enableYouTubeUrl={true}
      previewLines={[
        { t: '0:00',  line: 'Good morning everyone, and thanks for making the trip out here today.' },
        { t: '0:06',  line: 'We are going to spend the next thirty minutes on where video changed in 2026 and what that means for creators.' },
        { t: '0:15',  line: 'Three quick numbers before we start. Ninety-two percent of internet users watch video every week.' },
        { t: '0:24',  line: 'Short-form now accounts for more watch time than long-form on every major platform.' },
        { t: '0:32',  line: 'And searches that lead to a video result have grown two-and-a-half times year over year.' },
        { t: '0:41',  line: 'So the platforms are pushing video. The audience is watching more video. That part is not controversial.' },
        { t: '0:50',  line: 'What is controversial is what actually earns attention in that video ocean.' },
        { t: '0:58',  line: 'Let me walk through the three patterns we have seen work for creators shipping every week.' },
      ]}
      whyTitle="Why Mictoo for video transcription"
      whyCards={[
        {
          icon: 'video',
          title: 'Every common video container',
          desc: 'MP4, MOV, WebM, MKV, AVI. We demux the audio track server-side, so you upload the video as-is with no conversion step.',
        },
        {
          icon: 'clip',
          title: 'SRT and VTT ready for the timeline',
          desc: 'Timestamps align to the original video timeline. Download SRT or VTT and drop it straight into Premiere, DaVinci, CapCut, or your YouTube upload.',
        },
        {
          icon: 'sparkles',
          title: 'AI summary for descriptions',
          desc: 'Auto-generated summary alongside the transcript. Solid first draft for video descriptions, blog recaps, and chapter titles.',
        },
        {
          icon: 'globe',
          title: 'Translate captions to 50+ languages',
          desc: 'After the transcript is ready, translate captions to Spanish, French, German, Portuguese, and 45+ other languages in one click.',
        },
      ]}
      scenariosTitle="When video to text is the right fit"
      scenarios={[
        {
          icon: 'video',
          title: 'YouTube video captions',
          desc: 'Recorded, edited, and exported to MP4. Drop the file for SRT captions and a description-ready summary.',
        },
        {
          icon: 'briefcase',
          title: 'Loom and screen recordings',
          desc: 'WebM or MP4 from Loom, OBS, or browser screen capture. Get a clean text version of the walkthrough.',
        },
        {
          icon: 'users',
          title: 'Webinar and workshop recordings',
          desc: 'Long-form event recording. Transcript becomes the follow-up blog post, LinkedIn recap, and searchable archive.',
        },
        {
          icon: 'editPen',
          title: 'Vlog and tutorial content',
          desc: 'Vlog cut, tutorial explainer, or product demo. Transcript feeds show notes, closed captions, and repurposing to social.',
        },
        {
          icon: 'book',
          title: 'Course lesson archive',
          desc: 'Recorded lecture or lesson MP4. Give students a searchable text version and lock in captions for accessibility.',
        },
        {
          icon: 'mic',
          title: 'Interview and testimonial video',
          desc: 'Sit-down interview or customer testimonial. Transcript makes quoting, editing, and translation dramatically easier.',
        },
      ]}
      technicalTitle="What happens to the video file"
      technicalIntro="Mictoo uses the spoken audio track for transcription. The container and picture quality do not improve speech recognition, but they affect upload size and whether an audio stream is available."
      technicalFacts={[
        {
          icon: 'video',
          title: 'Audio track extracted',
          desc: 'The speech track is decoded from the video container. You do not need to export a separate MP3 before uploading.',
        },
        {
          icon: 'clip',
          title: 'Original timeline kept',
          desc: 'Transcript segments and subtitle exports use the original media timeline so they can be matched back to the video.',
        },
        {
          icon: 'layers',
          title: 'Container is not the codec',
          desc: 'MP4, MOV, WebM, MKV, and AVI can contain different audio codecs. The file is inspected when it is processed.',
        },
        {
          icon: 'ear',
          title: 'Speech is required',
          desc: 'Silent clips and music-only videos have no reliable spoken transcript. Check that the intended audio track is audible first.',
        },
      ]}
      faq={[
        {
          q: 'What video formats does Mictoo accept?',
          a: 'MP4, MOV, WebM, MKV, AVI, and most other common containers. We demux the audio track server-side, so you can upload any of these directly without converting to audio first.',
        },
        {
          q: 'How large a video file can I upload?',
          a: 'Up to 25 MB anonymously, 60 MB when signed in. For longer videos, we auto-split files up to about 3 hours if you are signed in. For very large exports, downsample the video first or extract the audio track and upload the audio.',
        },
        {
          q: 'Can I paste a YouTube URL instead?',
          a: 'Yes. On this page you can paste a YouTube video URL and Mictoo will fetch captions when available. When no captions exist, upload the video file or extracted audio for a full Whisper transcription.',
        },
        {
          q: 'Do the timestamps align with the original video?',
          a: 'Yes. Transcript and SRT/VTT timestamps use the original video timeline. They provide a useful first-pass caption track, but you should review timing and line breaks in your editor before publishing.',
        },
        {
          q: 'Can I get SRT subtitles for the video?',
          a: 'Yes. Download as SRT or VTT after transcription. Both formats work in Premiere, DaVinci Resolve, Final Cut, CapCut, YouTube Studio, and most modern video players.',
        },
        {
          q: 'Do you extract audio from silent-video clips?',
          a: 'No. If the video has no audible speech, there is nothing to transcribe. For clips with music only, the transcript will typically be empty or short lyric fragments.',
        },
        {
          q: 'Can I translate the captions to another language?',
          a: 'Yes. After transcription, pick a target language and click Translate. Translation runs on GPT-4o-mini and appears alongside the original. Export the translated SRT for foreign-language captions.',
        },
        {
          q: 'Will my video file be saved on your servers?',
          a: 'No. The video streams to the transcription provider, we extract the audio in memory, transcribe once, and drop everything from memory. The transcript is only stored if you sign in and choose to save it to history.',
        },
        {
          q: 'Does Mictoo transcribe non-English video?',
          a: 'Yes. Whisper large-v3 supports 50+ languages with auto-detection. For short videos or non-English content, set the language explicitly in the dropdown for cleaner first-pass detection.',
        },
        {
          q: 'How long does a video transcription take?',
          a: 'A 30-minute MP4 typically finishes in 40-70 seconds end to end. Upload time and video file size are usually the longer step because we need to receive the file before demuxing the audio.',
        },
      ]}
      ctaHeadline="Drop your video, get captions and a transcript"
      ctaSubtitle="MP4, MOV, WebM, MKV, AVI. SRT, VTT, DOCX, and a summary in seconds."
      ctaButton="Upload video to transcribe"
    />
  )
}
