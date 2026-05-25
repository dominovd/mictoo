import LandingLayout from '@/components/LandingLayout'

export const metadata = {
  title: 'WAV to Text — Free WAV File Transcription Online | Mictoo',
  description:
    'Free WAV to text converter. Upload any WAV audio file and get a clean AI transcript in seconds. Lossless audio, 50+ languages, no signup.',
  alternates: {
    canonical: 'https://mictoo.com/wav-to-text',
    languages: {
      'en': 'https://mictoo.com/wav-to-text',
      'fr': 'https://mictoo.com/fr/wav-to-text',
      'de': 'https://mictoo.com/de/wav-to-text',
      'es': 'https://mictoo.com/es/wav-to-text',
      'ru': 'https://mictoo.com/ru/wav-to-text',
      'it': 'https://mictoo.com/it/wav-to-text',
      'pt': 'https://mictoo.com/pt/wav-to-text',
      'pl': 'https://mictoo.com/pl/wav-to-text',
      'ja': 'https://mictoo.com/ja/wav-to-text',
      'ko': 'https://mictoo.com/ko/wav-to-text',
      'x-default': 'https://mictoo.com/wav-to-text',
    },
  },
}

export default function WavToTextPage() {
  return (
    <LandingLayout
      badge="WAV · Lossless · Free"
      h1={
        <>
          WAV to Text
          <br />
          <span className="text-brand-600">Free WAV File Transcription</span>
        </>
      }
      subtitle="Free AI transcription for WAV files. Drop the file, get the text in seconds. Works with WAV from field recorders, DAWs, voice recorders, and any audio editor."
      howItWorks={[
        {
          icon: '📂',
          title: 'Drop the WAV',
          desc: 'Any WAV file works. 16-bit, 24-bit, 32-bit float, any sample rate from 8 kHz to 192 kHz, mono or stereo. We accept them all.',
        },
        {
          icon: '⚡',
          title: 'AI transcribes it',
          desc: 'Whisper large-v3 reads the WAV and converts speech to text. A 5-minute file takes around 10 seconds. A 30-minute file finishes in under a minute.',
        },
        {
          icon: '📋',
          title: 'Copy, download, or edit',
          desc: 'Read the transcript in the browser, copy to clipboard, or download as TXT or SRT. Fix any wrong words inline before exporting.',
        },
      ]}
      whyUse={{
        title: 'Why Mictoo for WAV transcription',
        bullets: [
          {
            title: 'Lossless in, lossless processing',
            desc: 'WAV is uncompressed audio. We send it straight to Whisper without re-encoding to MP3 first. Some tools secretly downsample your WAV to save bandwidth, which costs you accuracy. We do not.',
          },
          {
            title: 'Handles weird sample rates',
            desc: 'Whisper internally resamples to 16 kHz, which is plenty for speech. So your 96 kHz 24-bit field recording transcribes just as well as a 16 kHz phone call. The high sample rate is a recording-quality flex, not a transcription advantage.',
          },
          {
            title: 'No file conversion friction',
            desc: 'Some free transcribers reject WAV and tell you to convert to MP3 first. We accept WAV directly. One step less.',
          },
          {
            title: 'Big WAVs are common, we plan for them',
            desc: 'WAV is uncompressed, so a 30-minute file at 44.1 kHz stereo 16-bit is around 300 MB. That is over our 60 MB cap. Below in Pro tips we walk through the right way to get a big WAV ready for upload.',
          },
          {
            title: 'No file is stored',
            desc: 'Your WAV streams to the transcription provider, gets processed, and is discarded. We never write your audio to our database or object storage.',
          },
        ],
      }}
      useCases={{
        title: 'Where WAV files come from',
        items: [
          {
            title: 'Field recorders',
            desc: 'Zoom H1n, H5, H6, Tascam DR-40, similar handheld recorders. Default export is WAV. Used by journalists, podcasters recording on location, nature recordists.',
          },
          {
            title: 'DAW exports',
            desc: 'Pro Tools, Logic, Ableton, Reaper, Audacity. When you mix a podcast or interview, the master bounce is usually WAV. Drop the WAV here for transcription before you compress to MP3 for distribution.',
          },
          {
            title: 'USB microphones and audio interfaces',
            desc: 'If you record into Audacity or QuickTime with a USB mic, the default export is often WAV. Useful for clean voice-over and dictation recordings.',
          },
          {
            title: 'Lecture and meeting recorders',
            desc: 'Some recording apps (especially Mac and Linux apps) default to WAV. Larger files than M4A or MP3, but lossless.',
          },
          {
            title: 'Music transcription (lyrics)',
            desc: 'For songwriters or lyric transcription, WAV preserves quality during the speech-recognition pass. Music will throw off Whisper, but isolated vocals work well.',
          },
        ],
      }}
      proTips={{
        title: 'Pro tips for WAV transcription',
        tips: [
          {
            title: 'Mono is fine for speech, halves the file size',
            desc: 'Stereo doubles the file size with no transcription benefit. If your WAV is from a single voice (interview, dictation, voice-over), convert to mono before upload. In Audacity: Tracks, Mix, Mix Stereo Down to Mono. File size drops by half.',
          },
          {
            title: '16-bit 16 kHz is the sweet spot for big WAVs',
            desc: 'Whisper resamples to 16 kHz internally anyway. If you have a giant 32-bit 96 kHz file, down-sampling to 16-bit 16 kHz mono before upload makes the file 12x smaller with no transcript quality loss. Audacity: Tracks, Resample, then Export at 16-bit.',
          },
          {
            title: 'Strip long silence at the start and end',
            desc: 'Field recordings often have 30 to 60 seconds of dead air before the first word and after the last. Trim in Audacity (Effect, Truncate Silence). Saves your file-size budget for the actual content.',
          },
          {
            title: 'For 60+ minute WAVs, just re-encode to MP3 first',
            desc: 'A 90-minute WAV at default settings is 900 MB or more. That is too big to even upload comfortably. Re-encode to a 64 kbps mono MP3, you get a 40 MB file with identical transcription accuracy.',
          },
          {
            title: 'Whisper does not care about WAV bit depth',
            desc: '24-bit and 32-bit float are great for editing because they give you headroom. For transcription, 16-bit is identical. Do not waste upload time on the higher bit depth.',
          },
          {
            title: 'For poor field recordings, denoise before upload',
            desc: 'A WAV with a lot of wind, traffic, or HVAC hum transcribes worse than a cleaned version. Audacity Noise Reduction or Adobe Podcast Enhance (free web tool) both help. Run the cleaning pass first, export to WAV again, then upload.',
          },
        ],
      }}
      faq={[
        {
          q: 'What WAV formats do you support?',
          a: 'Any standard WAV. PCM 8-bit, 16-bit, 24-bit, 32-bit integer, 32-bit float. Mono or stereo. Sample rates from 8 kHz to 192 kHz. We even handle BWF (Broadcast Wave Format) files from professional recorders.',
        },
        {
          q: 'Is WAV better than MP3 for transcription accuracy?',
          a: 'Slightly, for very low-quality MP3s (32 kbps or below) or noisy environments. For normal-quality audio, transcription accuracy from WAV and 128 kbps MP3 is essentially identical. WAV is better if you also need the audio for editing later.',
        },
        {
          q: 'My WAV is over 60 MB. What do I do?',
          a: 'Most likely your WAV is stereo and at a high sample rate. Convert to mono and 16 kHz, the file shrinks dramatically. Audacity does this in two menu clicks. Alternatively, re-encode to a 64 kbps mono MP3 for the smallest possible file.',
        },
        {
          q: 'How long does a WAV take to transcribe?',
          a: 'About 1 to 2 percent of the audio length. A 30-minute WAV finishes in around 30 to 60 seconds. Upload time is usually longer than transcription time for large WAVs.',
        },
        {
          q: 'Will my WAV be stored on your servers?',
          a: 'No. The file streams to our transcription provider (Groq, with OpenAI as backup), gets transcribed, then is discarded. We do not write it to our servers, and the providers we use do not train on API data.',
        },
        {
          q: 'Can I batch upload multiple WAVs?',
          a: 'Not in one click yet. Right now you transcribe one file at a time. Batch upload is on the roadmap for the future Pro tier.',
        },
        {
          q: 'What languages do you support for WAV transcription?',
          a: 'Over 50 languages with auto-detect. For files under 5 minutes or files with non-speech intros, pick the language manually for more reliable results.',
        },
        {
          q: 'Can I get timestamps from a WAV?',
          a: 'Yes. Download as SRT (subtitle file) and you get timestamps every few seconds. Or use our Timestamped Transcription page for word-level granularity.',
        },
        {
          q: 'Does Mictoo work with BWF (Broadcast Wave) files from professional recorders?',
          a: 'Yes. BWF is a standard WAV with extra metadata. We transcribe the audio and ignore the metadata. The bext chunk (broadcast extension with timecode, etc.) does not affect transcription.',
        },
        {
          q: 'Will my WAV transcript have speaker labels?',
          a: 'Not automatically. Whisper does not do speaker diarization out of the box. If you have separate WAV tracks per speaker, transcribe each one separately for clean attribution.',
        },
        {
          q: 'Can I transcribe a WAV that contains music as well as speech?',
          a: 'Yes, but expect lower accuracy during music-only sections. Whisper sometimes inserts hallucinated words when speech is buried under music. For best results, mute the music in your DAW before exporting the WAV you upload.',
        },
        {
          q: 'My WAV came from a vintage tape or vinyl rip. Will it work?',
          a: 'Yes, although tape hiss and vinyl crackle reduce accuracy. Run the WAV through Audacity Noise Reduction first to clean up the noise floor, then upload the cleaned version.',
        },
      ]}
      relatedLinks={[
        { href: '/transcribe-audio-to-text', label: 'Audio to Text', desc: 'Generic audio transcription for any format.' },
        { href: '/flac-to-text', label: 'FLAC to Text', desc: 'For lossless FLAC files, similar to WAV but compressed.' },
        { href: '/m4a-to-text', label: 'M4A to Text', desc: 'For M4A files (iPhone Voice Memos, Apple ecosystem).' },
        { href: '/how-to-compress-audio', label: 'How to Compress Audio', desc: 'When your WAV is too big to upload.' },
      ]}
    />
  )
}
