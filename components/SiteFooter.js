'use client'

import { usePathname } from 'next/navigation'
import { detectLocaleFromPath, localized, t } from '@/lib/i18n'
import TranscriptionCounter from './TranscriptionCounter'

// Footer is intentionally generous — every page in the sitemap gets at least one
// inbound link from the global footer so internal PageRank flows to all 70+ URLs.
// On mobile this wraps to 2 cols; tablet 3; desktop 5.
export default function SiteFooter() {
  const pathname = usePathname() || '/'
  const locale = detectLocaleFromPath(pathname)

  const useCases = [
    ['/interview-transcription',  'Interview Transcription'],
    ['/podcast-transcription',    'Podcast Transcription'],
    ['/lecture-transcription',    'Lecture Transcription'],
    ['/business-transcription',   'Business Transcription'],
    ['/meeting-transcription',    'Meeting Transcription'],
    ['/zoom-transcription',       'Zoom Transcription'],
    ['/google-meet-transcription','Google Meet Transcription'],
    ['/teams-meeting-transcription', 'Teams Meeting Transcription'],
    ['/voice-memo-to-text',       'Voice Memo to Text'],
    ['/webinar-transcription',    'Webinar Transcription'],
    ['/sermon-transcription',     'Sermon Transcription'],
    ['/dictation-to-text',        'Dictation to Text'],
  ]
  const formats = [
    ['/transcribe-audio-to-text', 'Audio to Text'],
    ['/transcribe-mp3-to-text',   'MP3 to Text'],
    ['/transcribe-video-to-text', 'Video to Text'],
    ['/wav-to-text',              'WAV to Text'],
    ['/m4a-to-text',              'M4A to Text'],
    ['/webm-to-text',             'WEBM to Text'],
    ['/flac-to-text',             'FLAC to Text'],
    ['/ogg-to-text',              'OGG to Text'],
    ['/aac-to-text',              'AAC to Text'],
  ]
  const tools = [
    ['/free-srt-generator',        'SRT Generator'],
    ['/timestamped-transcription', 'Timestamped Transcript'],
    ['/youtube-to-text',           'YouTube to Text'],
    ['/how-to-compress-audio',     'How to Compress Audio'],
  ]
  const byLanguage = [
    ['/french-speech-to-text',     'French Speech to Text'],
    ['/spanish-audio-to-text',     'Spanish Audio to Text'],
    ['/german-audio-transcription','German Audio Transcription'],
    ['/multilingual-transcription','Multilingual Transcription'],
  ]
  const compareLinks = [
    ['/descript-alternative',     'Descript Alternative'],
    ['/fireflies-alternative',    'Fireflies Alternative'],
    ['/turboscribe-alternative',  'TurboScribe Alternative'],
    ['/otter-alternative',        'Otter Alternative'],
    ['/notta-alternative',        'Notta Alternative'],
  ]
  const siteLocales = [
    ['/',   '🇬🇧 English'],
    ['/fr', '🇫🇷 Français'],
    ['/de', '🇩🇪 Deutsch'],
    ['/es', '🇪🇸 Español'],
    ['/ru', '🇷🇺 Русский'],
  ]

  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-100 py-12 mt-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main 5-column grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-10">
          <FooterCol title={t(locale, 'footer.useCases')} items={useCases} />
          <FooterCol title={t(locale, 'footer.formats')}  items={formats} />
          <FooterCol title={t(locale, 'footer.tools')}    items={tools} />
          <FooterCol title="By Language"                  items={byLanguage} />
          <FooterCol title="Compare"                      items={compareLinks} />
        </div>

        {/* Site languages — separate row, smaller, since it's locale switcher not content */}
        <div className="border-t border-slate-100 pt-6 mb-6">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3 text-center">
            {t(locale, 'footer.languages')}
          </p>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {siteLocales.map(([href, label]) => (
              <a key={href} href={href} className="text-sm text-slate-500 hover:text-brand-600 transition-colors">
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <div className="flex flex-col items-center sm:items-start gap-1">
            <p>{t(locale, 'footer.copyright', { year })}</p>
            <TranscriptionCounter />
          </div>
          <div className="flex gap-4">
            <a href={localized('/about', locale)} className="hover:text-slate-600 transition-colors">{t(locale, 'footer.about')}</a>
            <a href={localized('/contact', locale)} className="hover:text-slate-600 transition-colors">{t(locale, 'footer.contact')}</a>
            <a href={localized('/privacy', locale)} className="hover:text-slate-600 transition-colors">{t(locale, 'footer.privacy')}</a>
            <a href={localized('/terms', locale)} className="hover:text-slate-600 transition-colors">{t(locale, 'footer.terms')}</a>
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
