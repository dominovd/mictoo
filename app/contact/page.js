import ContactLayout from '@/components/ContactLayout'

const LOCALE_ALTERNATES = {
  'en': 'https://mictoo.com/contact',
  'fr': 'https://mictoo.com/fr/contact',
  'de': 'https://mictoo.com/de/contact',
  'es': 'https://mictoo.com/es/contact',
  'ru': 'https://mictoo.com/ru/contact',
  'it': 'https://mictoo.com/it/contact',
  'pt': 'https://mictoo.com/pt/contact',
  'pl': 'https://mictoo.com/pl/contact',
  'ja': 'https://mictoo.com/ja/contact',
  'ko': 'https://mictoo.com/ko/contact',
  'x-default': 'https://mictoo.com/contact',
}

export const metadata = {
  title: 'Contact — Mictoo',
  description: 'Contact Mictoo. info@mictoo.com goes to a real human inbox. Reply within one business day. Support scope, business inquiries, and FAQ shortcuts listed here.',
  alternates: {
    canonical: 'https://mictoo.com/contact',
    languages: LOCALE_ALTERNATES,
  },

  openGraph: {
    title: "Contact — Mictoo",
    description: "Contact Mictoo. info@mictoo.com goes to a real human inbox. Reply within one business day. Support scope, business inquiries, and FAQ shortcuts listed here.",
    url: "https://mictoo.com/contact",
    siteName: "Mictoo",
    type: "website",
    images: [{ url: "https://mictoo.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact — Mictoo",
    description: "Contact Mictoo. info@mictoo.com goes to a real human inbox. Reply within one business day. Support scope, business inquiries, and FAQ shortcuts listed here.",
    images: ["https://mictoo.com/opengraph-image"],
  },
}

export default function ContactPage() {
  return (
    <ContactLayout
      privacyHref="/privacy"
      strings={{
        h1: 'Contact us',
        lead:
          "Have a question, feedback, or feature request? We'd love to hear from you. We read every message and aim to reply within one business day.",
        privacyPrefix: 'For privacy matters, see our',
        privacyLinkLabel: 'Privacy Policy',
        privacySuffix: '.',

        responseTimeHeading: 'Response time',
        responseTimeBody:
          "info@mictoo.com goes to a real human inbox, not a ticketing system. We reply Monday to Friday, Central European Time, usually within one business day. If you write on a Friday evening, expect a reply by Monday. We are not a 24/7 support desk and we do not pretend to be one.",

        supportScopeHeading: 'What we can help with',
        supportScopeItems: [
          { label: 'Bug reports.', body: 'Something broken in the uploader, transcripts coming back garbled, the SRT not playing in your video editor. Include the file name and the time you uploaded if you can.' },
          { label: 'Feature requests.', body: 'Tell us what you wish Mictoo did. We will not promise anything, but we genuinely read these and have shipped features users asked for.' },
          { label: 'Transcription quality questions.', body: 'If a specific file came back with bad accuracy, send the file (or describe it) and we will help diagnose whether it is a recording issue or a model issue.' },
          { label: 'Account or billing.', body: 'For the free tier, there is no billing. For the Pro tier (when it launches), billing questions go here too.' },
          { label: 'Partnerships and integrations.', body: 'If you want to integrate Mictoo into your own product, or you are building something complementary, we are open to chat.' },
        ],

        faqShortcutHeading: 'Faster than email',
        faqShortcutBody: [
          "If your question is one of the common ones, the FAQ on the matching landing page probably already has the answer. Quick links: pricing, file size and length limits, supported formats, and privacy questions are answered at the bottom of any landing page (for example, on the Audio to Text page).",
          "For anything else, email is the right channel.",
        ],

        businessHeading: 'Business and press inquiries',
        businessBody: [
          "Same email: info@mictoo.com. Use [Press] or [Business] in the subject line so we route the message correctly. We are open to interviews about the indie SEO and AI tools space, but we do not do paid placements or sponsored content.",
          "If you are a journalist writing about transcription tools or AI in productivity software, we will give you straight answers about how Mictoo works under the hood, what it costs to run, and what we think about the competitive landscape.",
        ],

        languagesHeading: 'Languages',
        languagesBody:
          "We provide support in English. Russian and Spanish responses are best-effort. If you write in another language, we will reply in English unless we can find a fluent speaker on the team.",
      }}
    />
  )
}
