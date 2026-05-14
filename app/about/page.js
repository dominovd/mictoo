import AboutLayout from '@/components/AboutLayout'

const LOCALE_ALTERNATES = {
  'en': 'https://mictoo.com/about',
  'fr': 'https://mictoo.com/fr/about',
  'de': 'https://mictoo.com/de/about',
  'es': 'https://mictoo.com/es/about',
  'ru': 'https://mictoo.com/ru/about',
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
        whatPowersBody: 'Mictoo is powered by a state-of-the-art AI speech recognition model trained on hundreds of thousands of hours of multilingual audio. It supports over 50 languages with automatic language detection and is widely regarded as one of the most accurate free transcription engines available.',
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
