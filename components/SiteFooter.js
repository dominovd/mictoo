'use client'

import { usePathname } from 'next/navigation'
import { detectLocaleFromPath, t } from '@/lib/i18n'

// Footer content is rendered through the locale dictionary so that EN/FR/DE/ES/RU
// users see fully translated column titles, link labels, and copyright.
export default function SiteFooter() {
  const pathname = usePathname() || '/'
  const locale = detectLocaleFromPath(pathname)

  const useCases = [
    ['/interview-transcription', 'Interview Transcription'],
    ['/podcast-transcription',   'Podcast Transcription'],
    ['/lecture-transcription',   'Lecture Transcription'],
    ['/business-transcription',  'Business Transcription'],
    ['/meeting-transcription',   'Meeting Transcription'],
    ['/zoom-transcription',      'Zoom Transcription'],
    ['/voice-memo-to-text',      'Voice Memo to Text'],
  ]
  const formats = [
    ['/transcribe-audio-to-text', 'Audio to Text'],
    ['/transcribe-mp3-to-text',   'MP3 to Text'],
    ['/transcribe-video-to-text', 'Video to Text'],
    ['/wav-to-text',              'WAV to Text'],
    ['/m4a-to-text',              'M4A to Text'],
    ['/webm-to-text',             'WEBM to Text'],
    ['/aac-to-text',              'AAC to Text'],
  ]
  const tools = [
    ['/timestamped-transcription', 'Timestamped Transcript'],
    ['/free-srt-generator',        'SRT Generator'],
    ['/youtube-to-text',           'YouTube to Text'],
    ['/flac-to-text',              'FLAC to Text'],
    ['/ogg-to-text',               'OGG to Text'],
  ]
  const langs = [
    ['/',   '🇬🇧 English'],
    ['/fr', '🇫🇷 Français'],
    ['/de', '🇩🇪 Deutsch'],
    ['/es', '🇪🇸 Español'],
    ['/ru', '🇷🇺 Русский'],
  ]

  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-100 py-12 mt-16">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-10">
          <FooterCol title={t(locale, 'footer.useCases')} items={useCases} />
          <FooterCol title={t(locale, 'footer.formats')}  items={formats} />
          <FooterCol title={t(locale, 'footer.tools')}    items={tools} />
          <FooterCol title={t(locale, 'footer.languages')} items={langs} />
        </div>
        <div className="border-t border-slate-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <p>{t(locale, 'footer.copyright', { year })}</p>
          <div className="flex gap-4">
            <a href="/about" className="hover:text-slate-600 transition-colors">{t(locale, 'footer.about')}</a>
            <a href="/contact" className="hover:text-slate-600 transition-colors">{t(locale, 'footer.contact')}</a>
            <a href="/privacy" className="hover:text-slate-600 transition-colors">{t(locale, 'footer.privacy')}</a>
            <a href="/terms" className="hover:text-slate-600 transition-colors">{t(locale, 'footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, items }) {
  return (
    <div>
      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">{title}</p>
      <ul className="space-y-2">
        {items.map(([href, label]) => (
          <li key={href}>
            <a href={href} className="text-sm text-slate-400 hover:text-brand-600 transition-colors">{label}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
