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
  'x-default': 'https://mictoo.com/about',
}

export const metadata = {
  title: 'About Mictoo — Free AI Transcription Tool',
  description: 'Learn about Mictoo, a free audio and video transcription tool powered by AI. No signup required.',
  alternates: {
    canonical: 'https://mictoo.com/about',
    languages: LOCALE_ALTERNATES,
  },
}

export default function AboutPage() {
  return (
    <AboutLayout
      contactHref="/contact"
      strings={{
        h1: 'About Mictoo',
        lead: "Mictoo is a free, no-signup audio and video transcription tool built for anyone who needs to convert speech to text quickly and accurately.",
        ourWhy: "We built Mictoo because great transcription shouldn't require a subscription, an account, or technical skills. Drop your file, get your text. That's it.",
        whatPowersHeading: 'What powers Mictoo?',
        whatPowersBody: "Mictoo is powered by OpenAI's Whisper — the same speech recognition model used inside ChatGPT, trained on 680,000 hours of multilingual audio. It supports over 50 languages with automatic detection and is widely regarded as one of the most accurate open speech models available. We run Whisper via Groq's US-hosted API (whisper-large-v3) for speed and cost efficiency, with OpenAI's Whisper API kept as an automatic fallback. Files are streamed directly to the transcription provider and never stored on Mictoo's servers; neither Groq nor OpenAI uses API audio for model training, and OpenAI retains API data only for a maximum of 30 days of abuse monitoring before deletion.",
        principlesHeading: 'Our principles',
        principles: [
          { label: 'Free.', body: 'No hidden costs, no trial periods, no credit card required.' },
          { label: 'Private.', body: 'Your files are never stored. They are processed and immediately discarded.' },
          { label: 'Simple.', body: 'One page, one tool, zero friction.' },
          { label: 'Accurate.', body: 'We use the best available AI model for transcription quality.' },
        ],
        contactHeading: 'Get in touch',
        contactPrefix: 'Have feedback, a feature request, or a question?',
        contactCtaLabel: 'Contact us',
        contactSuffix: ' or email',
      }}
    />
  )
}
