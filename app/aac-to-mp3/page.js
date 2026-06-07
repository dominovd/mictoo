import LandingLayout from '@/components/LandingLayout'
import ConverterZone from '@/components/ConverterZone'

export const metadata = {
  title: 'AAC to MP3: Free Online Converter (and When You Do Not Need It) | Mictoo',
  description:
    'Convert AAC to MP3 free, in seconds, with a clear explanation of when conversion actually helps and when it just costs you quality.',
  alternates: {
    canonical: 'https://mictoo.com/aac-to-mp3',
    languages: {
      'en': 'https://mictoo.com/aac-to-mp3',
      'fr': 'https://mictoo.com/fr/aac-to-mp3',
      'de': 'https://mictoo.com/de/aac-to-mp3',
      'es': 'https://mictoo.com/es/aac-to-mp3',
      'ru': 'https://mictoo.com/ru/aac-to-mp3',
      'it': 'https://mictoo.com/it/aac-to-mp3',
      'pt': 'https://mictoo.com/pt/aac-to-mp3',
      'pl': 'https://mictoo.com/pl/aac-to-mp3',
      'ja': 'https://mictoo.com/ja/aac-to-mp3',
      'ko': 'https://mictoo.com/ko/aac-to-mp3',
      'x-default': 'https://mictoo.com/aac-to-mp3',
    },
  },
  openGraph: {
    title: 'AAC to MP3: Free Online Converter | Mictoo',
    description: 'Convert AAC to MP3 in seconds. Also: how to tell if you actually need to convert at all.',
    url: 'https://mictoo.com/aac-to-mp3',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AAC to MP3: Free Online Converter',
    description: 'Convert AAC to MP3 in seconds. Free, no signup.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function AacToMp3Page() {
  return (
    <LandingLayout
      defaultLanguage="en"
      badge="AAC → MP3 · Free · No signup"
      h1={<>AAC to MP3<br /><span className="text-brand-600">Free online converter</span></>}
      subtitle="Drop a raw AAC stream or AAC inside an MP4 container, get an MP3 back in seconds. Useful when sending audio to a legacy player that does not understand AAC. Also worth knowing: most modern apps accept AAC directly, so the conversion is sometimes unnecessary."
      tool={<ConverterZone from="aac" to="mp3" />}

      valueBlock={
        <article className="prose-content">
          <p>
            AAC is the audio format most modern devices already produce
            and play natively: iPhone Voice Memos, Apple Music streams,
            YouTube downloads, podcast distribution on Apple Podcasts.
            MP3 is older, less efficient at the same bitrate, but still
            the only thing some legacy hardware understands.
          </p>
          <p>
            This page converts in either direction it needs to. But
            before you do, check whether your destination already accepts
            AAC. A 2024 car stereo, any Bluetooth speaker since 2015, any
            modern transcription tool (including Mictoo), most podcast
            apps, all current media players: AAC works. The conversion
            is only useful when you genuinely hit a device or platform
            that requires MP3.
          </p>
          <p className="text-sm text-slate-500">
            Want to transcribe instead of convert? Drop the AAC straight
            into <a href="/aac-to-text" className="text-brand-600 hover:underline">aac-to-text</a> and skip the conversion entirely.
          </p>
        </article>
      }

      howItWorks={[
        {
          icon: '📂',
          title: 'Upload your AAC',
          desc: 'Raw .aac (ADTS or ADIF stream), or AAC inside an MP4 container. We detect which and handle both. Files up to 25 MB anonymously, more with signup.',
        },
        {
          icon: '⚡',
          title: 'ffmpeg re-encodes to MP3',
          desc: '128 kbps constant bitrate, 44.1 kHz, channel layout preserved. A 5-minute file finishes in 2-5 seconds. Voice recordings can go lower (see Pro tips).',
        },
        {
          icon: '⬇️',
          title: 'Download the MP3',
          desc: 'Same filename with .mp3 extension. Uploaded file and result wiped from our servers within the hour. Nothing kept long-term.',
        },
      ]}

      whyUse={{
        title: 'Why this conversion exists',
        bullets: [
          {
            title: 'Legacy car stereos and home audio',
            desc: 'Anything from before roughly 2012-2015 may handle MP3 only. Some factory infotainment systems still hold this position in 2026. MP3 is the lowest-common-denominator audio file that every player on earth can read.',
          },
          {
            title: 'Some podcast hosts require MP3 upload',
            desc: 'A subset of podcast publishing platforms accept only MP3, not AAC. If your recording app exports M4A or AAC and your host rejects it, convert here, upload there.',
          },
          {
            title: 'Sharing with non-Apple users on older Android',
            desc: 'Modern Android plays AAC fine. Older Android (Android 5 and below) sometimes struggles. If you are sending audio to someone on an older device, MP3 is the safer bet.',
          },
          {
            title: 'Voice recordings that need to shrink',
            desc: 'A 64 kbps mono MP3 of a 30-minute interview is around 14 MB. The same as AAC is similar. The conversion does not save much for voice; the real shrinkage comes from setting mono and a low bitrate.',
          },
        ],
      }}

      useCases={{
        title: 'Real reasons people convert AAC to MP3',
        items: [
          {
            title: 'iPhone Voice Memo → podcast host',
            desc: 'Recorded on iPhone in M4A AAC, want to publish on a host that demands MP3. Convert once, upload to the host. Future episodes: check if the host added AAC support.',
          },
          {
            title: '2010-era car stereo',
            desc: 'Burning a CD or loading a USB stick for a car system that predates universal AAC support. MP3 is the only safe option.',
          },
          {
            title: 'Sending audio to a non-Apple older friend',
            desc: 'You are on iPhone, they are on an older Android. They cannot open your M4A. Convert to MP3, send via Signal or email, they play it without thinking.',
          },
          {
            title: 'Audio for a legacy DAW or sampler',
            desc: 'Older Pro Tools, hardware samplers, and some game-audio tools accept only MP3 or WAV. AAC support arrived later in some of these workflows.',
          },
        ],
      }}

      proTips={{
        title: 'Tips that save time and bytes',
        tips: [
          {
            title: 'Try uploading the AAC first, convert only if rejected',
            desc: 'Modern apps that say they accept "audio files" almost always include AAC. Test before converting. Mictoo transcription, all major podcast apps, every modern car stereo, every current Bluetooth speaker: AAC works directly.',
          },
          {
            title: 'For voice, use 64 kbps mono MP3',
            desc: 'Default conversion is 128 kbps stereo. For spoken-word recordings (interviews, voice notes, lectures), you can drop to 64 kbps mono with no perceptible quality loss. The resulting MP3 is roughly half the size.',
          },
          {
            title: 'If you need higher than 128 kbps, re-export in Audacity',
            desc: 'Our converter outputs 128 kbps. For 192 or 320 kbps (rarely useful for voice, sometimes useful for music), open the MP3 in Audacity and re-export at the higher rate.',
          },
        ],
      }}

      deepDive={
        <article className="prose-content">
          <h2>AAC and MP3 are doing the same job, two decades apart</h2>
          <p>
            MP3 (officially MPEG-1 Audio Layer III) was finalised in 1993.
            It was the first widely-adopted format that made digital music
            distribution practical: small enough to download over dial-up,
            good enough to listen to. The format had patents attached,
            which were a constant source of licensing friction until they
            expired in 2017.
          </p>
          <p>
            AAC (Advanced Audio Coding) is MP3 done better, released in
            1997 by the same MPEG group. It produces noticeably better
            quality at the same bitrate, especially below 128 kbps. Apple
            chose AAC for iTunes in 2003, Apple Music uses AAC,
            iPhone Voice Memos use AAC. By 2026, AAC is the default for
            almost any new audio that needs to be compressed.
          </p>
          <h3>Why does this conversion still get searched?</h3>
          <p>
            Two reasons. First, hardware lives a long time. A 2008 car
            stereo, a 2010-era USB-stick MP3 player, an early-generation
            Bluetooth speaker: all still in use, all MP3-only. Converting
            to MP3 is the path of least resistance when you cannot upgrade
            the playback device.
          </p>
          <p>
            Second, MP3 has the universality advantage. Nobody asks
            "does this play MP3?" anymore. The same is now true for AAC
            in modern contexts, but the question still comes up for
            non-mainstream players, hardware samplers, certain legacy
            broadcasting equipment, and a handful of older online platforms.
          </p>
          <h3>What you actually lose in the conversion</h3>
          <p>
            Going from AAC at 256 kbps to MP3 at 128 kbps does lose audio
            information. For music with critical listening on good
            headphones, you can sometimes hear it (especially in cymbals
            and other high-frequency content). For voice and spoken-word
            audio at any bitrate over 64 kbps, the loss is inaudible on
            consumer playback gear. For a smartphone, a car, a Bluetooth
            speaker, the result is identical.
          </p>
          <h3>The transcription edge case</h3>
          <p>
            If your goal is to transcribe AAC audio, do not convert first.
            Mictoo accepts both AAC and AAC-inside-M4A directly. Every
            extra encode is a small quality loss, and for already-low
            bitrate sources (Voice Memos at 32 kbps), that loss can hurt
            transcription accuracy. Upload the AAC straight to <a href="/aac-to-text" className="text-brand-600 hover:underline">aac-to-text</a> instead.
          </p>
        </article>
      }

      faq={[
        {
          q: 'Is AAC to MP3 conversion free?',
          a: 'Yes. Files up to 25 MB anonymously, larger with a free account. No watermark, no email signup, no time limit. Display ads on marketing pages cover server cost.',
        },
        {
          q: 'Do I actually need to convert AAC to MP3?',
          a: 'Probably not, unless you are targeting a legacy device or a platform that explicitly rejects AAC. Modern car stereos, Bluetooth speakers, podcast apps, transcription tools, and media players all accept AAC directly. Test before converting.',
        },
        {
          q: 'Will I lose audio quality?',
          a: 'Slightly. AAC at 128 kbps and MP3 at 128 kbps produce technically different audio, but the difference is inaudible on phones, in cars, and on consumer headphones. For studio listening, the AAC source is the cleaner version.',
        },
        {
          q: 'What is the largest AAC file I can upload?',
          a: '25 MB without an account, 60 MB with a free signup. A 30-minute Voice Memo at typical iPhone settings is around 14 MB, so most everyday recordings fit comfortably.',
        },
        {
          q: 'Does the converter work with AAC inside MP4 (M4A)?',
          a: 'Yes. We detect whether the AAC is a raw stream or wrapped inside an MP4 container (the usual M4A format) and handle both. If your file is an M4A from iPhone, drag it onto this page the same as any AAC.',
        },
        {
          q: 'What bitrate is the output MP3?',
          a: '128 kbps constant bitrate, 44.1 kHz sample rate, channel layout preserved (mono stays mono, stereo stays stereo). For voice recordings, this is more than enough. For music, it is acceptable on consumer playback.',
        },
        {
          q: 'How long does the conversion take?',
          a: 'A 5-minute file finishes in 2-5 seconds. A 30-minute file finishes in around 15 seconds. Upload speed is usually the longer step for larger files.',
        },
        {
          q: 'Does Mictoo save my AAC file?',
          a: 'No. The upload and the converted MP3 are both deleted within the hour by our cleanup process. Nothing is kept long-term, no copy made, no transcription run unless you separately upload to a transcription page.',
        },
        {
          q: 'Can I convert in the other direction (MP3 to AAC)?',
          a: 'Not on this specific page. The reverse conversion is rarely needed because everything that plays MP3 also plays AAC these days. If you specifically need it, try Audacity (free) for offline conversion.',
        },
      ]}

      epilogueSection={
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">
            Convert your AAC, or skip the step entirely
          </h2>
          <p className="text-sm text-slate-500 mb-6 max-w-xl mx-auto">
            If you need MP3 for a specific player, this page handles it. If you actually want a transcript or just want to play the file somewhere modern, you probably do not need to convert at all.
          </p>
          <a
            href="#tool"
            className="inline-block bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Convert AAC to MP3 now
          </a>
        </div>
      }

      relatedLinks={[
        { href: '/aac-to-text', label: 'AAC to Text', desc: 'Skip conversion entirely if you wanted a transcript.' },
        { href: '/m4a-to-mp3', label: 'M4A to MP3', desc: 'When your AAC is wrapped in an MP4 / M4A container.' },
        { href: '/wma-to-mp3', label: 'WMA to MP3', desc: 'For older Windows Media Audio files.' },
        { href: '/how-to-compress-audio', label: 'How to Compress Audio', desc: 'When the resulting MP3 still needs to be smaller.' },
      ]}
    />
  )
}
