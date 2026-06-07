import LandingLayout from '@/components/LandingLayout'
import ConverterZone from '@/components/ConverterZone'

const LANGS = {
  'en': 'https://mictoo.com/mp3-to-m4a',
  'fr': 'https://mictoo.com/fr/mp3-to-m4a',
  'de': 'https://mictoo.com/de/mp3-to-m4a',
  'es': 'https://mictoo.com/es/mp3-to-m4a',
  'ru': 'https://mictoo.com/ru/mp3-to-m4a',
  'it': 'https://mictoo.com/it/mp3-to-m4a',
  'pt': 'https://mictoo.com/pt/mp3-to-m4a',
  'pl': 'https://mictoo.com/pl/mp3-to-m4a',
  'ja': 'https://mictoo.com/ja/mp3-to-m4a',
  'ko': 'https://mictoo.com/ko/mp3-to-m4a',
  'x-default': 'https://mictoo.com/mp3-to-m4a',
}

export const metadata = {
  title: 'MP3 to M4A, free online converter | Mictoo',
  description:
    'Convert MP3 to M4A free online. Re-encode MP3 to AAC inside an M4A container for iPhone, iTunes, and Apple ecosystem. No signup, no watermark.',
  alternates: { canonical: 'https://mictoo.com/mp3-to-m4a', languages: LANGS },

  openGraph: {
    title: "MP3 to M4A, free online converter | Mictoo",
    description: "Convert MP3 to M4A free online. Re-encode MP3 to AAC inside an M4A container for iPhone, iTunes, and Apple ecosystem. No signup, no watermark.",
    url: "https://mictoo.com/mp3-to-m4a",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MP3 to M4A, free online converter | Mictoo",
    description: "Convert MP3 to M4A free online. Re-encode MP3 to AAC inside an M4A container for iPhone, iTunes, and Apple ecosystem. No signup, no watermark.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function Mp3ToM4aPage() {
  return (
    <LandingLayout
      defaultLanguage="en"
      badge="MP3 → M4A · Free · No signup"
      h1={<>MP3 to M4A<br /><span className="text-brand-600">Free online converter</span></>}
      subtitle="Drop an MP3. Get an M4A, AAC audio inside an MP4 container. Plays natively in iTunes, Apple Music, and on every iPhone. No watermark, no email."
      tool={<ConverterZone from="mp3" to="m4a" />}
      howItWorks={[
        { icon: '📂', title: 'Drop the MP3', desc: 'Drag any MP3 into the box. Up to 25 MB anonymously, 60 MB after signup.' },
        { icon: '⚡', title: 'ffmpeg re-encodes to AAC', desc: '128 kbps AAC inside an M4A container, with the faststart flag so it plays immediately when streamed. Finishes in 3-10 seconds.' },
        { icon: '⬇️', title: 'Download the M4A', desc: 'Result has the original name with .m4a. Files are wiped from our servers within the hour.' },
      ]}
      whyUse={{ title: 'Why convert MP3 to M4A', bullets: [
        { title: 'Apple ecosystem prefers M4A', desc: 'iTunes, Apple Music, iCloud Music Library, GarageBand, they all handle M4A as the first-class format. MP3 works too, but M4A is what they speak natively.' },
        { title: 'AAC sounds slightly better than MP3 at the same bitrate', desc: 'At 128 kbps the difference is small but real, especially in the high frequencies. If your source MP3 is already lossy, this re-encode does not make it worse.' },
        { title: 'M4A supports chapter markers and richer metadata', desc: 'If you are making audiobooks, podcast preview files, or anything for the Apple ecosystem, M4A handles chapters cleanly. MP3 chapter support is patchy.' },
        { title: 'iPhone ringtones must be M4A', desc: 'Custom iPhone ringtones use the M4R extension, same AAC-in-MP4 format as M4A. Convert and rename to .m4r for ringtone use.' },
        { title: 'No watermark, no upsell', desc: 'Your audio re-encoded, nothing else.' },
      ]}}
      useCases={{ title: 'When you would convert MP3 to M4A', items: [
        { title: 'Importing a music collection into Apple Music', desc: 'M4A imports cleanly and integrates with iCloud Music Library. MP3s can occasionally have metadata issues during sync.' },
        { title: 'Making an iPhone ringtone', desc: 'Convert MP3 → M4A, trim to under 40 seconds, rename to .m4r, drop into Finder while iPhone is connected.' },
        { title: 'Audiobook with chapter markers', desc: 'M4A supports chapters; MP3 support is unreliable. For long audiobooks where listeners want to jump between chapters, M4A is the right format.' },
        { title: 'Voice memo cleanup for iCloud', desc: 'If you have a folder of MP3 voice memos and want them in iCloud or Apple Voice Memos, M4A is more native and syncs more reliably.' },
        { title: 'GarageBand or Logic project', desc: 'When importing reference audio into Apple\'s music software, M4A drops in smoother than MP3 in some workflows.' },
      ]}}
      proTips={{ title: 'Tips for MP3 to M4A conversion', tips: [
        { title: 'Re-encoding does add a tiny amount of loss', desc: 'You are going from one lossy format to another. At 128 kbps AAC from a 128 kbps MP3, the loss is real but inaudible to almost everyone on almost everything. For critical use, find a lossless source.' },
        { title: 'For ringtones, trim before converting', desc: 'iPhone ringtones cap at 40 seconds. Trim the MP3 in Audacity or QuickTime first, then convert.' },
        { title: 'AAC at 96 kbps usually beats MP3 at 128 kbps', desc: 'Our converter outputs at 128 kbps for compatibility, but if you have full control you could go lower with AAC and still match MP3 quality. We do not offer the picker to keep the tool simple.' },
        { title: 'M4A vs MP4, same container, different convention', desc: 'M4A files contain only audio. MP4 files can contain video, audio, or both. iTunes uses the .m4a extension to make the distinction obvious. Some players accept either extension.' },
        { title: 'Chapter markers are not added by us', desc: 'We just re-encode the audio. To add chapter markers, use Apple Books for audiobooks or a dedicated tool like Chapter and Verse.' },
        { title: 'For DRM-protected MP3s, conversion will fail', desc: 'DRM is extremely rare for MP3 in 2026, but if you somehow have one, it will not decode.' },
      ]}}
      faq={[
        { q: 'Is MP3 to M4A conversion really free?', a: 'Yes. No account up to 25 MB, no watermark, no time limit.' },
        { q: 'What is the maximum file size?', a: '25 MB anonymously, 60 MB with a free account.' },
        { q: 'Will the M4A sound worse than the MP3?', a: 'Theoretically yes, re-encoding any lossy format adds a small amount of loss. Practically, at 128 kbps AAC from a 128 kbps MP3, no human can hear the difference on consumer playback.' },
        { q: 'What is the difference between M4A and MP4?', a: 'M4A and MP4 are the same container format. The .m4a extension just signals "audio only" so iTunes knows what to do with it. Some players accept either extension.' },
        { q: 'How long does it take?', a: 'Seconds. A 25 MB MP3 converts in 3-10 seconds.' },
        { q: 'What quality do you output?', a: '128 kbps AAC inside an M4A container, 44.1 kHz, source channel layout preserved.' },
        { q: 'Do you keep my files?', a: 'No. Upload deleted after conversion. Output purged within the hour.' },
        { q: 'Can I make an iPhone ringtone with this?', a: 'Indirectly. Convert MP3 to M4A, trim to under 40 seconds in QuickTime, rename the .m4a to .m4r, drop into Finder with your iPhone connected.' },
        { q: 'Will iTunes accept the result?', a: 'Yes. M4A is iTunes\' native format.' },
        { q: 'My MP3 is already 320 kbps. Should I convert?', a: 'Only if you specifically need M4A for compatibility. The result will be 128 kbps AAC, technically a quality drop from 320 kbps MP3, but practically inaudible on most playback. To preserve the 320 kbps quality you would need a different converter that lets you set higher bitrates.' },
        { q: 'Do tags transfer?', a: 'Basic tags (title, artist, album) usually do. Cover art and detailed comments are flaky between MP3 ID3 and M4A iTunes metadata. Re-tag in iTunes or Mp3tag after conversion.' },
        { q: 'Can I batch convert?', a: 'Not yet on the free tier. Open multiple browser tabs to convert several files in parallel.' },
      ]}
      deepDive={
        <article className="prose-content">
          <h2>MP3 to M4A is bringing audio into the Apple ecosystem</h2>
          <p>
            MP3 plays everywhere, including in iTunes and Apple Music.
            So why convert? The reasons are narrow but real. iPhone
            ringtones require .m4r (which is just M4A renamed). The
            Apple Music app handles M4A metadata more cleanly than MP3
            ID3 tags. Audiobook chapter markers only work in M4B
            (another M4A variant). And some Apple-ecosystem workflows
            (Sidecar, Continuity, AirDrop) feel more native with M4A.
          </p>
          <h3>What you actually gain in the conversion</h3>
          <p>
            Better tagging in Apple Music. iTunes-style metadata fields
            (sort artist, sort album, compilation flag) that MP3 ID3
            handles awkwardly. Native Apple ecosystem feel: the file
            looks like a first-class Apple Music item, not an imported
            stranger. Album artwork tends to survive better in M4A than
            in MP3 when shared between Apple devices.
          </p>
          <h3>What you do not gain: audio quality</h3>
          <p>
            MP3 to AAC (the codec inside M4A) is a lossy-to-lossy
            re-encode. The AAC output cannot be better than the MP3 it
            came from. Going through two lossy codecs adds a small
            quality loss compared to the original MP3. At 128 kbps each,
            the loss is inaudible on consumer playback. For audiophile
            sources, do not chain lossy formats; keep one canonical
            lossless master and encode lossy versions from it.
          </p>
          <h3>The ringtone case (.m4r)</h3>
          <p>
            iPhone ringtones must be M4A under 40 seconds, renamed to
            .m4r. The workflow: convert MP3 to M4A here, open in
            QuickTime, trim to under 40 seconds, save, rename the .m4a
            extension to .m4r in Finder, drag the .m4r into the
            Finder iPhone sidebar (or the iPhone app on newer macOS).
            Without the M4A conversion step, none of this works because
            iPhone ringtones do not accept MP3.
          </p>
          <h3>The audiobook case (.m4b)</h3>
          <p>
            M4B is M4A with chapter markers, used for audiobooks in
            Apple Books. If you have a long-form recording you want as
            an audiobook with chapters, the workflow is: convert MP3 to
            M4A here, then use an audiobook tool (M4B Tool, Audiobook
            Binder on Mac) to add chapter markers and rename to .m4b.
            The MP3 to M4A step is the foundation; the chapter markers
            are added on top.
          </p>
        </article>
      }
      relatedLinks={[
        { href: '/m4a-to-mp3', label: 'M4A to MP3', desc: 'The reverse direction.' },
        { href: '/wav-to-mp3', label: 'WAV to MP3', desc: 'Shrink WAV to portable MP3.' },
        { href: '/m4a-to-text', label: 'M4A to text', desc: 'Transcribe M4A audio directly.' },
        { href: '/how-to-compress-audio', label: 'Compress audio', desc: 'For files that need to be even smaller.' },
      ]}
    />
  )
}
