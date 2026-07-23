import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import HtmlLangEffect from '@/components/HtmlLangEffect'
import { organizationSchema, jsonLdScript } from '@/lib/schema-org'

export const metadata = {
  title: 'Mictoo — Free AI Audio & Video Transcription Online',
  description:
    'Transcribe audio and video to text instantly with AI. No signup required. Supports MP3, MP4, WAV, M4A and 50+ languages. Free online transcription tool.',
  keywords: [
    'audio to text',
    'video to text',
    'transcribe audio free',
    'transcription tool online',
    'mp3 to text',
    'speech to text',
  ],
  metadataBase: new URL('https://mictoo.com'),
  alternates: {
    canonical: 'https://mictoo.com',
  },
  verification: {
    google: 'DZsZ0lg5tAyFAYi-4nZBiSRtjTVgtH6F4dtsBCXJSE4',
  },
  other: {
    'google-adsense-account': 'ca-pub-8760387849932146',
  },
  openGraph: {
    title: 'Mictoo — Free AI Audio & Video Transcription',
    description: 'Transcribe audio and video to text instantly with AI. No signup required.',
    url: 'https://mictoo.com',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mictoo — Free AI Transcription',
    description: 'Upload audio or video and get a text transcript in seconds.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function RootLayout({ children }) {
  const adsenseId = process.env.NEXT_PUBLIC_ADSENSE_ID

  // <html lang="en"> is a static default so the app router can still
  // pre-render all 480+ pages as static content (using headers() in this
  // root layout would force every page into dynamic server-render mode
  // and 8x Vercel invocations). HtmlLangEffect patches the DOM on the
  // client with the URL-derived locale, so screen readers and Google's
  // JS rendering pipeline see the correct value. Crawler correctness on
  // the raw HTML (no JS) is provided by canonical + hreflang metadata
  // already present on every localized page.
  return (
    <html lang="en">
      <head>
        {adsenseId && (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseId}`}
            crossOrigin="anonymous"
          />
        )}
        {/* Site-wide Organization schema — gives LLMs a stable entity node
            every other schema on the site (@id: /#organization) can attach to. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(organizationSchema())}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <HtmlLangEffect />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <Analytics />
        <GoogleAnalytics />
        <SiteFooter />
      </body>
    </html>
  )
}
