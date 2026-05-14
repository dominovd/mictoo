import './globals.css'

export const metadata = {
  title: 'Mictoo — Free Audio & Video Transcription Online',
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
    title: 'Mictoo — Free Audio & Video Transcription',
    description: 'Transcribe audio and video to text instantly with AI. No signup required.',
    url: 'https://mictoo.com',
    siteName: 'Mictoo',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mictoo — Free AI Transcription',
    description: 'Upload audio or video and get a text transcript in seconds.',
  },
}

export default function RootLayout({ children }) {
  const adsenseId = process.env.NEXT_PUBLIC_ADSENSE_ID

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
        <header className="bg-white border-b border-slate-100 sticky top-0 z-10">
          <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2 font-bold text-xl text-brand-600">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="6" fill="#0284c7"/>
                <path d="M8 8v8M12 6v12M16 10v4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              mictoo
            </a>
            <nav className="flex items-center gap-1 text-sm text-slate-600">
              <a href="/" className="btn-ghost">Transcribe</a>
              <a href="/#how-it-works" className="btn-ghost">How it works</a>
              <a href="/about" className="btn-ghost">About</a>
              <a href="/contact" className="btn-ghost">Contact</a>
            </nav>
          </div>
        </header>

        <main className="flex-1">
          {children}
        </main>

        <footer className="border-t border-slate-100 py-8 mt-16">
          <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
            <p>© {new Date().getFullYear()} Mictoo. Free AI transcription tool.</p>
            <div className="flex gap-4">
              <a href="/about" className="hover:text-slate-600 transition-colors">About</a>
              <a href="/contact" className="hover:text-slate-600 transition-colors">Contact</a>
              <a href="/privacy" className="hover:text-slate-600 transition-colors">Privacy</a>
              <a href="/terms" className="hover:text-slate-600 transition-colors">Terms</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
