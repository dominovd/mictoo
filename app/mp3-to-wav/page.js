import LandingLayout from '@/components/LandingLayout'
import ConverterZone from '@/components/ConverterZone'

const LANGS = {
  'en': 'https://mictoo.com/mp3-to-wav',
  'fr': 'https://mictoo.com/fr/mp3-to-wav',
  'de': 'https://mictoo.com/de/mp3-to-wav',
  'es': 'https://mictoo.com/es/mp3-to-wav',
  'ru': 'https://mictoo.com/ru/mp3-to-wav',
  'it': 'https://mictoo.com/it/mp3-to-wav',
  'pt': 'https://mictoo.com/pt/mp3-to-wav',
  'pl': 'https://mictoo.com/pl/mp3-to-wav',
  'ja': 'https://mictoo.com/ja/mp3-to-wav',
  'ko': 'https://mictoo.com/ko/mp3-to-wav',
  'x-default': 'https://mictoo.com/mp3-to-wav',
}

export const metadata = {
  title: 'MP3 to WAV — free online converter | Mictoo',
  description:
    'Convert MP3 to WAV free online. Expand compressed MP3 into uncompressed 16-bit/44.1 kHz WAV for audio editing. No signup, no watermark.',
  alternates: { canonical: 'https://mictoo.com/mp3-to-wav', languages: LANGS },
}

export default function Mp3ToWavPage() {
  return (
    <LandingLayout
      defaultLanguage="en"
      badge="MP3 → WAV · Free · No signup"
      h1={<>MP3 to WAV<br /><span className="text-brand-600">Free online converter</span></>}
      subtitle="Drop an MP3. Get a 16-bit/44.1 kHz PCM WAV ready for audio editing software. No watermark, no email."
      tool={<ConverterZone from="mp3" to="wav" />}
      howItWorks={[
        { icon: '📂', title: 'Drop the MP3', desc: 'Drag the MP3 into the box. Files up to 25 MB anonymously, 60 MB after signup.' },
        { icon: '⚡', title: 'ffmpeg decodes to PCM', desc: '16-bit PCM, 44.1 kHz, source channel layout preserved. A few seconds for a typical file.' },
        { icon: '⬇️', title: 'Download the WAV', desc: 'The WAV file is about ten times larger than the MP3 because it is uncompressed. Wiped from our servers within the hour.' },
      ]}
      whyUse={{ title: 'Why convert MP3 to WAV', bullets: [
        { title: 'Audio editors prefer WAV', desc: 'Audacity, Adobe Audition, Logic, Pro Tools — they all open MP3 but most operations (precise editing, applying effects, normalising) work better on WAV. Converting first avoids the slight quality loss of repeated MP3 encodes.' },
        { title: 'No additional quality loss on edits', desc: 'Each MP3 re-encode degrades audio slightly. Convert to WAV, do your edits, export back to MP3 at the end — that single round-trip is the best you can do.' },
        { title: 'Required by some legacy hardware and software', desc: 'Some old CD burning software, samplers, and recording gear only read WAV. Conversion is the bridge.' },
        { title: 'Forensic and broadcast use', desc: 'Forensic audio analysis and broadcast workflows traditionally use WAV because the format is well-understood and uncompressed. MP3 is acceptable for source material but WAV is the working format.' },
        { title: 'No watermark, no upsell', desc: 'Just decoded audio in a WAV container. We add nothing.' },
      ]}}
      useCases={{ title: 'When you would convert MP3 to WAV', items: [
        { title: 'Editing audio in Audacity, Reaper, Logic', desc: 'Convert to WAV first, then apply effects, cut, normalise, mix. Re-export to MP3 at the end if you need a small distribution file.' },
        { title: 'Mastering for vinyl or CD', desc: 'Vinyl cutting and CD pressing both want lossless audio. If your only source is MP3, converting to WAV gives the mastering engineer something they can work with — though the audio quality is bounded by the MP3 source.' },
        { title: 'Sample preparation for a sampler', desc: 'Hardware samplers (Akai, Korg) often want WAV files at specific bit depths and sample rates.' },
        { title: 'Voiceover work for a video', desc: 'Some video editors (DaVinci, Premiere) handle MP3 fine but show better waveforms and apply effects more cleanly on WAV.' },
        { title: 'Forensic or transcription analysis', desc: 'Some specialised analysis tools require WAV input.' },
      ]}}
      proTips={{ title: 'Tips for MP3 to WAV conversion', tips: [
        { title: 'WAV will be 10x the size of the MP3', desc: 'A 5 MB MP3 expands to roughly 50 MB as 16-bit/44.1 kHz WAV. The conversion does not restore lost quality — it just gives you a workable format.' },
        { title: 'WAV quality is capped by the MP3', desc: 'You cannot make a 128 kbps MP3 sound like a CD by converting to WAV. The WAV just makes the existing audio editable without further compression loss.' },
        { title: 'For higher fidelity, ask for the original', desc: 'If you are doing serious mastering or restoration, get the lossless original (WAV, FLAC, ALAC) from the source. MP3 → WAV is a workaround, not an upgrade.' },
        { title: 'Sample rate matters for hardware', desc: 'Most hardware wants 44.1 kHz (CD) or 48 kHz (video). Our converter always outputs 44.1. If you need 48, open the WAV in Audacity and resample.' },
        { title: '24-bit WAV — use Audacity', desc: 'Our converter outputs 16-bit WAV. For 24-bit, open the resulting WAV in Audacity and re-export with 24-bit float. The extra bit depth gives editing headroom even though the source audio is just 16-bit equivalent.' },
        { title: 'Mono in, mono out — saves space', desc: 'If your MP3 is mono, the WAV is mono too — half the size of a stereo conversion. We preserve the source channel layout.' },
      ]}}
      faq={[
        { q: 'Is MP3 to WAV conversion really free?', a: 'Yes. No account up to 25 MB, no watermark, no time limit.' },
        { q: 'Why is the WAV so much bigger than the MP3?', a: 'MP3 uses perceptual compression to throw away audio data your ears barely notice. WAV stores every sample at full precision. A typical MP3 is one-tenth the size of the WAV equivalent.' },
        { q: 'Will the WAV sound better than the MP3?', a: 'No. The MP3 already lost data during its original encoding. WAV preserves the audio as-is — it does not restore quality.' },
        { q: 'What WAV format do you output?', a: '16-bit PCM, 44.1 kHz, source channel layout preserved (mono in → mono out, stereo in → stereo out).' },
        { q: 'How long does it take?', a: 'Seconds. Decoding MP3 is fast.' },
        { q: 'Can I get 24-bit or 32-bit float WAV?', a: 'Not from this converter. Open our 16-bit WAV in Audacity and re-export with the bit depth you want — the extra bits give editing headroom even if the source audio precision is bounded by the MP3.' },
        { q: 'Do you keep my files?', a: 'No. Upload deleted after conversion. Output purged within the hour.' },
        { q: 'Can I batch convert?', a: 'Not yet on the free tier. Open multiple browser tabs.' },
        { q: 'What about 48 kHz sample rate?', a: 'We output 44.1 kHz (CD rate). For 48 kHz (video work), resample the WAV in Audacity after conversion.' },
        { q: 'Why bother converting at all?', a: 'Mostly for audio editing. Audacity, Pro Tools, Logic — they all work better on WAV than on MP3, especially for repeated edits.' },
        { q: 'Will the conversion fail for some MP3s?', a: 'Rarely. ffmpeg decodes essentially every standard MP3. A genuinely corrupted file might fail; otherwise it is reliable.' },
        { q: 'Should I keep both files?', a: 'For editing, work in WAV. For distribution, keep the MP3 too. Once editing is done, re-export from WAV to a fresh MP3 at the end of the chain.' },
      ]}
      relatedLinks={[
        { href: '/wav-to-mp3', label: 'WAV to MP3', desc: 'The reverse direction.' },
        { href: '/flac-to-mp3', label: 'FLAC to MP3', desc: 'Lossless FLAC to portable MP3.' },
        { href: '/wav-to-text', label: 'WAV to text', desc: 'Transcribe WAV audio directly.' },
        { href: '/how-to-compress-audio', label: 'Compress audio', desc: 'For files you need to make smaller.' },
      ]}
    />
  )
}
