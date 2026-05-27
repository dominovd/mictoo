import LandingLayout from '@/components/LandingLayout'
import ConverterZone from '@/components/ConverterZone'

const LANGS = {
  'en': 'https://mictoo.com/flac-to-mp3',
  'fr': 'https://mictoo.com/fr/flac-to-mp3',
  'de': 'https://mictoo.com/de/flac-to-mp3',
  'es': 'https://mictoo.com/es/flac-to-mp3',
  'ru': 'https://mictoo.com/ru/flac-to-mp3',
  'it': 'https://mictoo.com/it/flac-to-mp3',
  'pt': 'https://mictoo.com/pt/flac-to-mp3',
  'pl': 'https://mictoo.com/pl/flac-to-mp3',
  'ja': 'https://mictoo.com/ja/flac-to-mp3',
  'ko': 'https://mictoo.com/ko/flac-to-mp3',
  'x-default': 'https://mictoo.com/flac-to-mp3',
}

export const metadata = {
  title: 'FLAC to MP3 — free online converter | Mictoo',
  description:
    'Convert FLAC to MP3 free online. Shrink lossless FLAC down to 128 kbps MP3 in seconds. No signup, no watermark. Up to 25 MB.',
  alternates: { canonical: 'https://mictoo.com/flac-to-mp3', languages: LANGS },
}

export default function FlacToMp3Page() {
  return (
    <LandingLayout
      defaultLanguage="en"
      badge="FLAC → MP3 · Free · No signup"
      h1={<>FLAC to MP3<br /><span className="text-brand-600">Free online converter</span></>}
      subtitle="Drop a FLAC file. Get a portable MP3 one-third the size, plays everywhere. No watermark, no email."
      tool={<ConverterZone from="flac" to="mp3" />}
      howItWorks={[
        { icon: '📂', title: 'Drop the FLAC', desc: 'Drag your FLAC into the box. Files up to 25 MB anonymously, 60 MB with signup.' },
        { icon: '⚡', title: 'ffmpeg re-encodes to MP3', desc: '128 kbps constant bitrate, 44.1 kHz, channel layout preserved. A typical 25 MB FLAC finishes in 3-10 seconds.' },
        { icon: '⬇️', title: 'Download the MP3', desc: 'Result keeps the original filename with .mp3. Wiped from our servers within the hour.' },
      ]}
      whyUse={{ title: 'Why convert FLAC to MP3', bullets: [
        { title: 'FLAC is lossless but huge', desc: 'A 5-minute FLAC at typical bitrates is 25-40 MB. The same audio as 128 kbps MP3 is 5 MB. For phones, cars, and Bluetooth, that size matters.' },
        { title: 'Most car stereos and Bluetooth speakers do not play FLAC', desc: 'Even in 2026, factory car infotainment and a lot of mid-range Bluetooth gear is MP3-or-nothing. MP3 just works.' },
        { title: 'At 128 kbps the quality loss is inaudible to almost everyone', desc: 'On consumer headphones, in cars, on phone speakers — no one will tell the difference. The compromise only shows up on studio monitors with critical listening.' },
        { title: 'iPods, old MP3 players, basic music apps — MP3 wins', desc: 'If you are loading music onto anything older than a recent iPhone, MP3 is the safer bet. FLAC support on legacy hardware is hit-or-miss.' },
        { title: 'No watermark, no upsell', desc: 'Just your audio re-encoded. We do not splice in anything.' },
      ]}}
      useCases={{ title: 'When you would convert FLAC to MP3', items: [
        { title: 'Bandcamp / Qobuz download → phone library', desc: 'Bandcamp gives you FLAC by default for paid downloads. Convert to MP3 to fit a music collection on a phone or sync to a car system that does not handle FLAC.' },
        { title: 'CD rip → portable library', desc: 'If you ripped CDs to FLAC for archival, convert each album to MP3 for everyday listening — keep the FLACs as the master.' },
        { title: 'Studio export → distribution', desc: 'Your music producer might send you FLAC. Convert to MP3 for podcast hosts, web players, or just for emailing the rough mix to a collaborator.' },
        { title: 'Field recordings → quick share', desc: 'Field recorders like the Tascam DR-40X or Zoom F3 can record to FLAC. Convert before sharing with a producer or sound editor who works in MP3.' },
        { title: 'Library cleanup', desc: 'Cleaning up an old hard drive of FLACs — keep the originals on a NAS, convert to MP3 for active use.' },
      ]}}
      proTips={{ title: 'Tips for clean FLAC to MP3 conversion', tips: [
        { title: 'FLAC is lossless so first encode is fine', desc: 'There is no quality penalty for going FLAC → MP3 once. You only start hearing artifacts when you re-encode the MP3 again, or when you go MP3 → other lossy formats.' },
        { title: 'For audiophile use, keep the FLAC', desc: 'If you are listening on high-end headphones, on a dedicated DAC, or doing critical listening, the FLAC is worth keeping. MP3 is for distribution and casual use.' },
        { title: 'Tags do not always carry over', desc: 'FLAC tags (Vorbis comments) and MP3 tags (ID3) are different formats. Our converter does not transfer cover art and detailed metadata between them. Add tags yourself in MusicBrainz Picard or Mp3tag after conversion.' },
        { title: '24-bit/96 kHz FLAC converts the same as 16-bit/44.1', desc: 'MP3 maxes out at 16-bit/48 kHz effectively. Extra bit depth and sample rate in the source do not survive the MP3 encode, but they do not hurt anything either.' },
        { title: 'For lossless conversion, use ALAC instead', desc: 'If you need lossless that plays in iTunes/Apple Music, convert FLAC to ALAC (Apple Lossless) instead — same audio quality, half the FLAC size in metadata footprint, plays natively in Apple\'s ecosystem.' },
        { title: 'For a higher MP3 bitrate, re-export from Audacity', desc: 'Our converter outputs 128 kbps. For 320 kbps, open the MP3 in Audacity (free) and re-export. The double encode is barely audible.' },
      ]}}
      faq={[
        { q: 'Is FLAC to MP3 conversion really free?', a: 'Yes. No account up to 25 MB, no watermark, no time limit. Display ads on marketing pages cover server cost.' },
        { q: 'What is the maximum file size?', a: '25 MB anonymously, 60 MB with a free account. A typical 5-minute song at FLAC is 30-40 MB, so for full albums you may need to convert track by track.' },
        { q: 'Will I hear a quality difference?', a: 'On phone speakers, in cars, on cheap headphones — no. On studio monitors with critical listening, possibly. The compromise is reasonable for everything except mastering and audiophile playback.' },
        { q: 'Does cover art and metadata transfer?', a: 'Partially. Basic tags (artist, title, album) usually carry over. Cover art and detailed Vorbis comments often do not. Use MusicBrainz Picard or Mp3tag after conversion for clean tags.' },
        { q: 'What MP3 quality do you output?', a: '128 kbps constant bitrate, 44.1 kHz, preserves source channel layout.' },
        { q: 'How long does it take?', a: 'Seconds. A 25 MB FLAC converts in 3-10 seconds. Upload is the bottleneck.' },
        { q: 'Do you keep my files?', a: 'No. Upload deleted after conversion. Output purged within the hour by our cleanup cron.' },
        { q: 'Can I batch-convert a whole album?', a: 'Not yet — free tier is one file at a time. Open multiple browser tabs as a workaround.' },
        { q: 'My 24-bit/96 kHz FLAC sounds the same as the MP3?', a: 'Almost certainly, on consumer playback. The 24-bit and high sample rate matter for processing and mastering, not for listening through MP3-grade audio chains.' },
        { q: 'Should I convert to ALAC instead?', a: 'If you need lossless audio in Apple Music or iTunes, yes — ALAC is the Apple equivalent of FLAC. We do not output ALAC, but Audacity does.' },
        { q: 'My FLAC is from a Hi-Res download. Worth converting?', a: 'For listening on a phone or in a car, the MP3 will sound identical. Keep the original for any future processing.' },
        { q: 'Can I get higher than 128 kbps?', a: 'Not from this converter. Re-encode the MP3 in Audacity with your preferred bitrate.' },
      ]}
      relatedLinks={[
        { href: '/wav-to-mp3', label: 'WAV to MP3', desc: 'Convert lossless WAV to MP3.' },
        { href: '/mp3-to-wav', label: 'MP3 to WAV', desc: 'The reverse direction — MP3 expanded to uncompressed WAV.' },
        { href: '/flac-to-text', label: 'FLAC to text', desc: 'Transcribe FLAC audio directly to text.' },
        { href: '/how-to-compress-audio', label: 'Compress audio', desc: 'When the MP3 still needs to be smaller.' },
      ]}
    />
  )
}
