import AboutLayout from '@/components/AboutLayout'

const LOCALE_ALTERNATES = {
  'en': 'https://mictoo.com/about',
  'fr': 'https://mictoo.com/fr/about',
  'de': 'https://mictoo.com/de/about',
  'es': 'https://mictoo.com/es/about',
  'ru': 'https://mictoo.com/ru/about',
  'it': 'https://mictoo.com/it/about',
  'pt': 'https://mictoo.com/pt/about',
  'pl': 'https://mictoo.com/pl/about',
  'ja': 'https://mictoo.com/ja/about',
  'ko': 'https://mictoo.com/ko/about',
  'x-default': 'https://mictoo.com/about',
}

export const metadata = {
  title: 'About Mictoo — Free AI Transcription Tool',
  description: 'About Mictoo, a free AI audio and video transcription tool. Who built it, how it works, how we make money, and what we will and will not do with your files.',
  alternates: {
    canonical: 'https://mictoo.com/about',
    languages: LOCALE_ALTERNATES,
  },

  openGraph: {
    title: "About Mictoo — Free AI Transcription Tool",
    description: "About Mictoo, a free AI audio and video transcription tool. Who built it, how it works, how we make money, and what we will and will not do with your files.",
    url: "https://mictoo.com/about",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Mictoo — Free AI Transcription Tool",
    description: "About Mictoo, a free AI audio and video transcription tool. Who built it, how it works, how we make money, and what we will and will not do with your files.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function AboutPage() {
  return (
    <AboutLayout
      contactHref="/contact"
      strings={{
        h1: 'About Mictoo',
        lead:
          "Mictoo is a free, no-signup audio and video transcription tool built for anyone who needs to convert speech to text quickly and accurately.",
        ourWhy:
          "We built Mictoo because great transcription shouldn't require a subscription, an account, or technical skills. Drop your file, get your text. That's it.",

        whoBuiltHeading: 'Who built Mictoo',
        whoBuiltBody: [
          "Mictoo is an indie project, built and run by a small team that has worked on SEO, content, and developer tools for the past decade. We are not a venture-funded startup chasing a billion users. We are not a side project from a transcription giant trying to capture the free-tier market either. We are people who use transcription tools ourselves and got tired of every option being either gated, slow, or hostile to the user.",
          "If you want to reach the human behind the site directly, the email at the bottom of this page goes to a real inbox. Every message gets read.",
        ],

        whatPowersHeading: 'What powers Mictoo',
        whatPowersBody:
          "Mictoo runs on OpenAI's Whisper, the same speech recognition model used inside ChatGPT. Whisper large-v3 was trained on 680,000 hours of multilingual audio. It supports over 50 languages with automatic detection and is widely regarded as the strongest open speech model available. We serve Whisper through Groq's US-hosted API (whisper-large-v3) for speed and cost efficiency, with OpenAI's Whisper API kept as an automatic fallback if Groq is unavailable. Files are streamed directly to the transcription provider and never stored on Mictoo's servers. Neither Groq nor OpenAI uses API audio for model training, and OpenAI retains API data only for a maximum of 30 days of abuse monitoring before deletion.",

        securityHeading: 'Security and what happens to your file',
        securityBody: [
          "Your audio or video file uploads to Vercel Blob storage, gets streamed to the transcription provider, gets transcribed, and is deleted. The whole round trip takes under a minute for most files, and at the end there is no copy of your file on our infrastructure.",
          "We do not save your transcript either. It lives in the browser tab. If you want to keep it, hit the download button. Once you close the tab, we have no record of what you transcribed. The only thing we log is an anonymous count of how many files were processed, used to track usage and bill our providers.",
          "If you are signed in (free, optional), we keep a small history of your past transcripts in your account so you can re-open them. Anonymous transcription keeps no history of any kind.",
        ],

        moneyHeading: 'How we make money',
        moneyBody: [
          "Mictoo is funded by display ads. We have applied to Google AdSense and plan to run ads on the marketing pages (not on the actual tool flow). Ads are how we cover our hosting and API bills.",
          "Beyond ads, we are building a small Pro tier for users who need longer files, batch uploads, or speaker diarization once we ship it. The free tier is not going away. The free tier exists because most people only need to transcribe a file every now and then, and they should not have to pay a monthly subscription for that.",
          "We do not sell your data. We do not have data to sell, because we do not store your files or transcripts. The only thing third parties see about you is standard ad targeting (location, broad interests), which AdSense handles on Google's end.",
        ],

        principlesHeading: 'Our principles',
        principles: [
          { label: 'Free.', body: 'No hidden costs, no trial periods, no credit card required for the core tool.' },
          { label: 'Private.', body: 'Your files are never stored. They are processed and immediately discarded.' },
          { label: 'Simple.', body: 'One page, one tool, zero friction.' },
          { label: 'Accurate.', body: 'We use the best available AI model for transcription quality.' },
        ],

        editorialHeading: 'What we will not do',
        editorialBullets: [
          { label: 'No dark patterns.', body: 'No fake countdown timers, no "your file expires in 60 seconds, pay to download", no email walls in the middle of the upload flow.' },
          { label: 'No bait-and-switch pricing.', body: 'The free tier is genuinely free. We will not retroactively gate features that used to be free.' },
          { label: 'No transcript reselling.', body: 'We do not store your transcripts. We do not have a "training data" license tucked into the terms.' },
          { label: 'No deceptive ad networks.', body: 'We use Google AdSense, not networks that swap out your browser UI or hijack the back button.' },
          { label: 'No fake reviews.', body: 'If you see Mictoo on a review site, it got there organically. We do not pay for placement or write our own reviews.' },
        ],

        contactHeading: 'Get in touch',
        contactPrefix: 'Have feedback, a feature request, or a question?',
        contactCtaLabel: 'Contact us',
        contactSuffix: ' or email',
      }}
    />
  )
}
