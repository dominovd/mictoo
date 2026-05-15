import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

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

  // NOTE: <html lang="en"> is a safe default; localized locale pages override it
  // visually for users via the LanguageSwitcher and via per-page metadata
  // (canonical + hreflang). Setting lang dynamically would require turning the
  // root layout into a client component or using a middleware-driven approach;
  // both add complexity without measurable SEO benefit because Google relies on
  // canonical + hreflang, not on <html lang>, to assign locale.
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
      </head>
      <body className="min-h-screen flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <Analytics />
        <SiteFooter />
      </body>
    </html>
  )
}
