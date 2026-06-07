import LandingLayout from '@/components/LandingLayout'
import ConverterZone from '@/components/ConverterZone'

export const metadata = {
  title: 'M4A to MP3: Free Converter (When iPhone Audio Needs to Travel) | Mictoo',
  description:
    'Convert iPhone Voice Memos, GarageBand bounces, and Apple-ecosystem M4A files to universal MP3 for podcast hosts, older Android phones, and legacy players.',
  alternates: {
    canonical: 'https://mictoo.com/m4a-to-mp3',
    languages: {
      'en': 'https://mictoo.com/m4a-to-mp3',
      'fr': 'https://mictoo.com/fr/m4a-to-mp3',
      'de': 'https://mictoo.com/de/m4a-to-mp3',
      'es': 'https://mictoo.com/es/m4a-to-mp3',
      'ru': 'https://mictoo.com/ru/m4a-to-mp3',
      'it': 'https://mictoo.com/it/m4a-to-mp3',
      'pt': 'https://mictoo.com/pt/m4a-to-mp3',
      'pl': 'https://mictoo.com/pl/m4a-to-mp3',
      'ja': 'https://mictoo.com/ja/m4a-to-mp3',
      'ko': 'https://mictoo.com/ko/m4a-to-mp3',
      'x-default': 'https://mictoo.com/m4a-to-mp3',
    },
  },
  openGraph: {
    title: 'M4A to MP3: Free Converter for Apple Audio | Mictoo',
    description: 'Convert iPhone Voice Memos and Apple M4A to MP3 in seconds. Free, no signup.',
    url: 'https://mictoo.com/m4a-to-mp3',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'M4A to MP3: Free Converter for Apple Audio',
    description: 'Convert iPhone Voice Memos and Apple M4A to MP3 in seconds.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function M4aToMp3Page() {
  return (
    <LandingLayout
      defaultLanguage="en"
      badge="M4A → MP3 · iPhone audio · Free"
      h1={<>M4A to MP3<br /><span className="text-brand-600">When iPhone audio has to leave the Apple ecosystem</span></>}
      subtitle="iPhone Voice Memos, GarageBand exports, FaceTime audio recordings all save as M4A. Most modern destinations accept M4A directly. But for podcast hosts that demand MP3, older Android phones, and a few specific players, this converter does the round-trip in seconds."
      tool={<ConverterZone from="m4a" to="mp3" />}

      valueBlock={
        <article className="prose-content">
          <p>
            M4A is just AAC audio inside an MP4 container, the Apple
            default since the iTunes era. It is what comes out of your
            iPhone Voice Memos app, GarageBand on Mac and iPhone, the
            QuickTime audio recorder, FaceTime call exports, and the
            Apple Music download library.
          </p>
          <p>
            Most places that ask for audio accept M4A these days. The
            conversion to MP3 is needed in narrower situations:
            podcast-hosting platforms that explicitly require MP3,
            certain older Android devices, and legacy hardware that does
            not understand the M4A container. This page handles those
            cases.
          </p>
          <p className="text-sm text-slate-500">
            Just need a transcript? Skip the conversion. Drop your M4A
            directly into <a href="/m4a-to-text" className="text-brand-600 hover:underline">m4a-to-text</a> and we will handle the AAC decode internally.
          </p>
        </article>
      }

      howItWorks={[
        {
          icon: '🎙️',
          title: 'Upload your M4A',
          desc: 'iPhone Voice Memo share-sheet export, GarageBand audio bounce, FaceTime audio recording, QuickTime audio file. Up to 25 MB anonymously, more with signup.',
        },
        {
          icon: '⚡',
          title: 'AAC decoded, MP3 encoded',
          desc: 'We unpack the AAC track inside the MP4 container and re-encode to 128 kbps MP3 at 44.1 kHz. A 10-minute Voice Memo finishes in under 5 seconds.',
        },
        {
          icon: '⬇️',
          title: 'Download the MP3',
          desc: 'Drop straight into your podcast host, AirDrop to the older device, or email to whoever could not open the M4A.',
        },
      ]}

      whyUse={{
        title: 'Why this conversion is still needed',
        bullets: [
          {
            title: 'Podcast hosts that only accept MP3',
            desc: 'A handful of podcast publishing platforms still require MP3 specifically. If you recorded in GarageBand and got an M4A bounce, this is the round-trip your workflow needs.',
          },
          {
            title: 'Older Android devices and software',
            desc: 'Modern Android (10+) handles M4A natively. Anything older, including some budget devices still in circulation, sometimes struggles. MP3 is the safe fallback.',
          },
          {
            title: 'Voice Memos sharing with non-Apple friends',
            desc: 'AirDrop sends the M4A. If your recipient is on Windows or Android and not familiar with audio formats, an MP3 attachment in email is friendlier than asking them to install a codec.',
          },
          {
            title: 'Embedding in older websites or platforms',
            desc: 'Some older CMS systems, learning management platforms, and forum software accept only MP3 uploads for audio attachments. Convert once, upload, done.',
          },
        ],
      }}

      useCases={{
        title: 'Real situations people convert M4A to MP3',
        items: [
          {
            title: 'GarageBand podcast bounce → host that requires MP3',
            desc: 'You produced your episode in GarageBand and the default export is M4A AAC at 256 kbps. Your podcast host wants MP3. Convert here, upload there. Episode goes live.',
          },
          {
            title: 'iPhone Voice Memo → Windows friend',
            desc: 'You recorded an idea or a memory on your iPhone and want to send it to a Windows-using family member who said "I cannot open that file". MP3 plays without thinking on any computer.',
          },
          {
            title: 'FaceTime call recording → archive',
            desc: 'A recorded conversation you want to keep long-term. MP3 is more future-proof for personal archives than the iPhone-default M4A container.',
          },
          {
            title: 'Apple Music download → DAW or sampler',
            desc: 'Some older audio production tools and hardware samplers only accept MP3 or WAV. Convert your M4A music file before importing.',
          },
        ],
      }}

      proTips={{
        title: 'Tips that save bytes and headaches',
        tips: [
          {
            title: 'Check first whether you actually need to convert',
            desc: 'Most modern apps (every current podcast app, every car stereo since 2015, all transcription tools including Mictoo, every modern web platform) accept M4A directly. Test the upload before converting unnecessarily.',
          },
          {
            title: 'For voice, set lower bitrate after conversion',
            desc: 'Our converter outputs 128 kbps stereo. For voice-only content (interviews, voice notes), drop to 64 kbps mono in Audacity afterwards. The file shrinks to half the size with no perceptible voice quality loss.',
          },
          {
            title: 'GarageBand exports already include podcast-friendly metadata',
            desc: 'If your M4A comes from GarageBand, the artist and title fields are usually set correctly. Basic tags carry over to MP3 in most cases. Full metadata (chapter markers, podcast-specific fields) sometimes does not.',
          },
        ],
      }}

      deepDive={
        <article className="prose-content">
          <h2>M4A is AAC in a wrapper, MP3 is its older cousin</h2>
          <p>
            M4A files are MP4 containers carrying an AAC audio track and
            nothing else (no video). Apple uses .m4a to distinguish
            audio-only MP4 from video MP4, but technically you could open
            an M4A as .mp4 and most players would handle it. The audio
            codec inside, AAC, is the direct successor to MP3, designed
            to produce better quality at the same bitrate.
          </p>
          <p>
            The conversion to MP3 is, in a sense, a downgrade by design.
            You go from a newer, more efficient codec to an older one
            with worse efficiency. The reason we do it anyway is
            compatibility: nothing on the planet refuses to play MP3,
            while M4A still gets the occasional "I cannot open this".
          </p>
          <h3>The naming confusion: .m4a, .mp4, .m4r, .m4b</h3>
          <p>
            Same container, different file extensions to signal intent.
            .m4a is plain audio. .m4r is an iPhone ringtone (identical to
            .m4a internally). .m4b is an audiobook with chapter markers.
            .mp4 with an audio-only track is what some non-Apple tools
            write instead of .m4a. Our converter accepts all four as
            equivalent inputs, decodes the AAC audio inside, and produces
            a standard .mp3 output.
          </p>
          <h3>The Voice Memos two-mode situation</h3>
          <p>
            iPhone Voice Memos has two recording modes: Compressed (the
            default, AAC at 32 kbps mono) and Lossless (ALAC inside the
            same M4A container). For voice transcription and casual
            playback, Compressed is more than enough. For conversion to
            MP3, both decode fine; the Compressed mode produces a smaller
            MP3 simply because the source has less audio information to
            re-encode.
          </p>
          <h3>Quality lost in the round-trip</h3>
          <p>
            Going from AAC 256 kbps (GarageBand default) to MP3 128 kbps
            does lose some audio fidelity. On consumer headphones or in a
            car, you will not notice. On studio monitors with critical
            listening to music, you might hear differences in cymbal
            attacks and other high-frequency content. For spoken-word
            audio at any bitrate above 64 kbps, the loss is inaudible
            even to trained ears.
          </p>
        </article>
      }

      faq={[
        {
          q: 'Is the M4A to MP3 conversion free?',
          a: 'Yes. Files up to 25 MB without an account, more with signup. No watermark, no email required, no time limit. Display ads on marketing pages cover server cost.',
        },
        {
          q: 'Do I actually need to convert my M4A?',
          a: 'Probably not, unless you are targeting a specific podcast host or older device that rejects M4A. Modern car stereos, Bluetooth speakers, every current podcast app, all transcription tools, and modern web platforms accept M4A directly.',
        },
        {
          q: 'Will my iPhone Voice Memo sound the same after conversion?',
          a: 'Practically yes for voice. The AAC source decodes cleanly, the MP3 re-encode at 128 kbps preserves voice clarity. For music, there is a small theoretical quality loss but it is inaudible on phone speakers and consumer headphones.',
        },
        {
          q: 'What is the largest M4A I can upload?',
          a: '25 MB anonymously, 60 MB with a free account. A 30-minute Voice Memo at Compressed quality is around 14 MB. Lossless mode files can be 5-10x bigger.',
        },
        {
          q: 'Does the converter handle GarageBand exports?',
          a: 'Yes. GarageBand default export is M4A AAC at 256 kbps stereo. We decode and re-encode without any GarageBand-specific quirks. Works for iOS and Mac GarageBand both.',
        },
        {
          q: 'What about M4B audiobooks with chapter markers?',
          a: 'We decode the audio and produce an MP3. The chapter markers do not survive the conversion because MP3 has limited support for chapter metadata compared to M4B. For audiobook listening, consider keeping the M4B and using a player that supports it.',
        },
        {
          q: 'Will basic tags (artist, title, album) carry over?',
          a: 'Most basic ID3-compatible tags transfer correctly. Detailed iTunes-specific metadata (purchase info, sort fields, podcast metadata) may not. For clean tagging of converted files, use MusicBrainz Picard or Mp3tag after conversion.',
        },
        {
          q: 'How long does the conversion take?',
          a: 'Seconds. A 5-minute file finishes in 2-5 seconds. A 30-minute Voice Memo finishes in 10-15 seconds. Upload speed is usually the bigger factor for larger files.',
        },
        {
          q: 'Does Mictoo save my M4A file?',
          a: 'No. The upload and the resulting MP3 are both deleted within the hour by our cleanup process. Nothing kept long-term unless you explicitly transcribe and sign in.',
        },
      ]}

      epilogueSection={
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">
            Convert your M4A when you actually need to
          </h2>
          <p className="text-sm text-slate-500 mb-6 max-w-xl mx-auto">
            For most modern destinations, M4A works directly. When it does not, this page gives you an MP3 in seconds.
          </p>
          <a
            href="#tool"
            className="inline-block bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Convert M4A to MP3 now
          </a>
        </div>
      }

      relatedLinks={[
        { href: '/m4a-to-text', label: 'M4A to Text', desc: 'Skip conversion entirely if you wanted a transcript.' },
        { href: '/aac-to-mp3', label: 'AAC to MP3', desc: 'For raw .aac files outside an M4A container.' },
        { href: '/mp4-to-mp3', label: 'MP4 to MP3', desc: 'For MP4 video files where you want only the audio.' },
        { href: '/voice-memo-to-text', label: 'Voice Memo to Text', desc: 'Transcribe iPhone Voice Memos directly.' },
      ]}
    />
  )
}
