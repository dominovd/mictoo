import LandingLayout from '@/components/LandingLayout'
import ConverterZone from '@/components/ConverterZone'

export const metadata = {
  title: 'WMA to MP3: Free Converter for Legacy Windows Media Audio | Mictoo',
  description:
    'Convert old WMA files to universal MP3. Built for rescuing legacy Windows Media archives, voicemail exports, and ripped CDs that nothing modern wants to open.',
  alternates: {
    canonical: 'https://mictoo.com/wma-to-mp3',
    languages: {
      'en': 'https://mictoo.com/wma-to-mp3',
      'fr': 'https://mictoo.com/fr/wma-to-mp3',
      'de': 'https://mictoo.com/de/wma-to-mp3',
      'es': 'https://mictoo.com/es/wma-to-mp3',
      'ru': 'https://mictoo.com/ru/wma-to-mp3',
      'it': 'https://mictoo.com/it/wma-to-mp3',
      'pt': 'https://mictoo.com/pt/wma-to-mp3',
      'pl': 'https://mictoo.com/pl/wma-to-mp3',
      'ja': 'https://mictoo.com/ja/wma-to-mp3',
      'ko': 'https://mictoo.com/ko/wma-to-mp3',
      'x-default': 'https://mictoo.com/wma-to-mp3',
    },
  },
  openGraph: {
    title: 'WMA to MP3: Free Converter for Legacy Windows Media Audio | Mictoo',
    description: 'Convert old WMA archives to MP3 in seconds. Free, no signup, no software install.',
    url: 'https://mictoo.com/wma-to-mp3',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WMA to MP3: Free Converter for Legacy Windows Media Audio',
    description: 'Rescue old WMA archives. Convert to universal MP3 in seconds.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function WmaToMp3Page() {
  return (
    <LandingLayout
      defaultLanguage="en"
      badge="WMA → MP3 · Legacy rescue · Free"
      h1={<>WMA to MP3<br /><span className="text-brand-600">Rescue legacy Windows Media audio</span></>}
      subtitle="WMA stopped being relevant around 2010 but archives full of old WMA files still exist: ripped CDs from the Windows Media Player era, old voicemails, educational audio CDs, business voice recordings. Drop a WMA in, get a universal MP3 out, no Windows-only software required."
      tool={<ConverterZone from="wma" to="mp3" />}

      valueBlock={
        <article className="prose-content">
          <p>
            WMA (Windows Media Audio) was Microsoft attempt to displace
            MP3 in the early 2000s. It was the default ripping format in
            Windows Media Player from Windows XP through Windows 7. Many
            home CD collections, lecture archives, voicemail systems, and
            corporate audio from that era are stored as WMA, sometimes
            with DRM attached.
          </p>
          <p>
            Today, WMA support has effectively disappeared. iPhones do not
            play it. Most car stereos do not play it. macOS and Linux need
            extra software to play it. If you have a WMA archive you want
            to keep using, converting to MP3 is the safest long-term move.
          </p>
          <p className="text-sm text-slate-500">
            Heads up: if your WMA files have DRM (the older Microsoft
            PlaysForSure or Windows Media DRM 10 schemes), this converter
            cannot decrypt them. See the deep-dive below for the DRM
            situation and what your options are.
          </p>
        </article>
      }

      howItWorks={[
        {
          icon: '📂',
          title: 'Drop your WMA',
          desc: 'Upload a single WMA file. We accept WMA standard (the lossy default), WMA Pro, WMA Lossless, and WMA Voice. Up to 25 MB anonymously.',
        },
        {
          icon: '⚡',
          title: 'ffmpeg decodes and re-encodes',
          desc: 'Our backend decodes the WMA using the open-source FFmpeg WMA decoder and re-encodes to 128 kbps MP3 at 44.1 kHz. Finishes in seconds for typical files.',
        },
        {
          icon: '⬇️',
          title: 'Download MP3',
          desc: 'Same filename with .mp3 extension. Plays on everything: iPhone, Android, every car stereo, every modern media player.',
        },
      ]}

      whyUse={{
        title: 'Why convert WMA to MP3',
        bullets: [
          {
            title: 'WMA is effectively dead, MP3 is universal',
            desc: 'WMA peaked around 2008. Today, the only thing that plays WMA by default is Windows Media Player on Windows, which itself is being phased out. MP3 plays everywhere with no future risk.',
          },
          {
            title: 'Recover content from old CD rips',
            desc: 'If you ripped your CD collection through Windows Media Player in 2005-2010, the default format was WMA. Convert those files to MP3 to keep listening on modern phones, cars, and speakers.',
          },
          {
            title: 'Office voicemail and call recording exports',
            desc: 'Many corporate PBX systems and voicemail exports from the Office 2007-2013 era output WMA. Converting to MP3 lets you archive and share those recordings without needing legacy Microsoft software.',
          },
          {
            title: 'No special Windows software needed',
            desc: 'Mictoo runs in any browser on macOS, Linux, Windows, ChromeOS. The Windows-only WMA tools of the 2000s are not required. Drag, click, download.',
          },
        ],
      }}

      useCases={{
        title: 'Where old WMA files still show up',
        items: [
          {
            title: 'Old home CD collection rips',
            desc: 'Music or audiobook CDs ripped through Windows Media Player in the 2000s. Convert each track to MP3 for current music apps, phones, and cars.',
          },
          {
            title: 'Educational and reference CDs',
            desc: 'Language-learning CDs, lecture recordings, audiobook CDs distributed in WMA format. Converting preserves the content for modern playback.',
          },
          {
            title: 'Corporate voicemail and call recording exports',
            desc: 'PBX systems and corporate voicemail platforms from the 2005-2015 era often exported WMA. Convert before archiving important historical recordings.',
          },
          {
            title: 'Hand-me-down USB drives and external HDDs',
            desc: 'Inherited or transferred storage from old computers. WMA files mixed in with other formats, needing conversion to fit current playback workflows.',
          },
          {
            title: 'Radio broadcast and podcast archives',
            desc: 'Some radio stations and early podcast archives stored content as WMA for the Windows Media Streaming Server era. Convert to MP3 for re-distribution and modern player support.',
          },
        ],
      }}

      proTips={{
        title: 'WMA-specific gotchas worth knowing',
        tips: [
          {
            title: 'Check for DRM before converting many files',
            desc: 'Right-click a WMA in Windows Explorer, check Properties. If you see "Protected" or any DRM-related field, the file is encrypted and this converter cannot read it. See the deep-dive below for what to do.',
          },
          {
            title: 'WMA Voice is much smaller, but quality is poor',
            desc: 'Some voicemail and call recording exports use WMA Voice mode at very low bitrates. Conversion preserves whatever quality is in the source, which for WMA Voice may be limited to telephone-grade audio.',
          },
          {
            title: 'WMA Lossless decodes to a much larger MP3',
            desc: 'If your WMA is actually WMA Lossless (rare, but possible for archive masters), the source file is much larger than typical WMA. The output MP3 at 128 kbps is dramatically smaller, with the usual lossy quality trade-off.',
          },
        ],
      }}

      deepDive={
        <article className="prose-content">
          <h2>The DRM problem with old WMA files</h2>
          <p>
            Many WMA files from the 2005-2010 era carried Microsoft DRM
            (PlaysForSure or Windows Media DRM 10). The DRM was tied to
            your Windows user account and license server, which Microsoft
            shut down years ago. Files protected this way cannot be opened
            by any current software, including this converter. There is
            no workaround built into legitimate tools.
          </p>
          <p>
            How to check: right-click the WMA file in Windows Explorer,
            Properties, look for "Protected" or any DRM-related metadata.
            If you see it, the file is locked. Your only path is to find a
            non-protected copy (re-rip from the original CD if you have
            it) or accept the file as a relic.
          </p>
          <h3>WMA flavours and what they mean for the conversion</h3>
          <p>
            "WMA" is actually four different codecs sharing one name.
            WMA standard is the original lossy codec from 1999. WMA Pro
            improved efficiency in 2003 and added multichannel surround.
            WMA Lossless arrived in 2003 too and preserves audio
            bit-for-bit like FLAC. WMA Voice (also Windows Media Audio 9
            Voice) is a very low-bitrate codec tuned for speech, used in
            voicemail and dictation systems. Our converter handles all
            four through the open-source FFmpeg WMA decoder.
          </p>
          <h3>Why WMA lost the format wars</h3>
          <p>
            Three reasons. First, Microsoft tied WMA tightly to Windows
            Media Player and the Zune ecosystem, which never caught on
            against the iPod and iTunes. Second, the licensing situation
            for WMA was complicated for non-Microsoft players, slowing
            adoption on phones and cars. Third, when AAC and free
            alternatives like Vorbis arrived with comparable quality and
            simpler licensing, there was no compelling reason for new
            hardware to support WMA.
          </p>
          <p>
            By 2015, WMA was effectively obsolete. The remaining users
            were people with existing archives, not new ones being
            created. Today, "WMA to MP3" is a rescue operation, not a
            workflow choice.
          </p>
        </article>
      }

      faq={[
        {
          q: 'Is WMA to MP3 conversion free?',
          a: 'Yes. Files up to 25 MB without an account, more with signup. No watermark, no email required, no time limit. Ads on the page cover server cost.',
        },
        {
          q: 'My WMA file says "Protected" or "DRM" in Windows. Will this work?',
          a: 'No. Files with Microsoft DRM (PlaysForSure or Windows Media DRM 10) cannot be decrypted by any current tool because the original license servers no longer exist. You would need to find or re-create an unprotected copy of the audio.',
        },
        {
          q: 'What WMA variants do you support?',
          a: 'All four common ones: WMA standard (the lossy default), WMA Pro (improved efficiency), WMA Lossless (bit-for-bit lossless), and WMA Voice (low-bitrate speech). FFmpeg under the hood handles them all transparently.',
        },
        {
          q: 'Why is my output MP3 quality limited?',
          a: 'The output cannot exceed what was in the source. A 32 kbps WMA Voice file produces an MP3 with telephone-grade audio quality. A 128 kbps WMA standard produces near-original quality MP3. We do not magically upscale.',
        },
        {
          q: 'How long does conversion take?',
          a: 'Seconds for typical files. A 5-minute WMA at standard bitrates converts in 2-5 seconds. Upload speed is usually the bottleneck for larger files.',
        },
        {
          q: 'Does the converter preserve metadata (artist, album, year)?',
          a: 'Basic tags carry over in most cases. Detailed ASF (Advanced Systems Format) metadata that WMA supports beyond basic tags may not transfer. For clean tagging of converted files, use MusicBrainz Picard or Mp3tag after conversion.',
        },
        {
          q: 'Can I convert a whole album of WMA tracks at once?',
          a: 'Not yet in the free tier, one file at a time. For batch conversion of large CD archives, dBpoweramp (Windows/Mac, free trial) or fre:ac (free, all platforms) handle bulk conversion well.',
        },
        {
          q: 'My WMA opens in Windows Media Player but not in VLC. Why?',
          a: 'Some older WMA files use Microsoft proprietary extensions that VLC handles inconsistently. FFmpeg (which we use server-side) has better legacy WMA support than VLC for some edge cases. Try uploading; if it fails here, the file may be DRM-protected.',
        },
        {
          q: 'Do you save my WMA file on your servers?',
          a: 'No. Both the upload and the output MP3 are deleted within the hour by our cleanup process. Nothing kept long-term.',
        },
      ]}

      epilogueSection={
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">
            Rescue your WMA archive
          </h2>
          <p className="text-sm text-slate-500 mb-6 max-w-xl mx-auto">
            Upload a single WMA file, get an MP3 that plays on everything. No Windows-only software, no software install at all.
          </p>
          <a
            href="#tool"
            className="inline-block bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Convert WMA to MP3 now
          </a>
        </div>
      }

      relatedLinks={[
        { href: '/aac-to-mp3', label: 'AAC to MP3', desc: 'For modern AAC files (iPhone audio, Apple ecosystem).' },
        { href: '/m4a-to-mp3', label: 'M4A to MP3', desc: 'For iPhone Voice Memos and Apple-ecosystem M4A files.' },
        { href: '/transcribe-mp3-to-text', label: 'MP3 to Text', desc: 'Transcribe the resulting MP3 to a searchable text version.' },
        { href: '/how-to-compress-audio', label: 'How to Compress Audio', desc: 'When the MP3 result needs to be smaller still.' },
      ]}
    />
  )
}
