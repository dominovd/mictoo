'use client'

import { usePathname } from 'next/navigation'
import { detectLocaleFromPath, localized, LOCALIZED_PATHS, t } from '@/lib/i18n'
import TranscriptionCounter from './TranscriptionCounter'

// Footer is intentionally generous — every page in the sitemap gets at least one
// inbound link from the global footer so internal PageRank flows to all 70+ URLs.
// On mobile this wraps to 2 cols; tablet 3; desktop 5.
//
// Link labels are localized via lib/i18n footer.links.*. Destinations route to
// localized version of the page if one exists (LOCALIZED_PATHS), otherwise to
// the English version — better to land on EN than to land on 404.
export default function SiteFooter() {
  const pathname = usePathname() || '/'
  const locale = detectLocaleFromPath(pathname)

  // Resolves the right href for a link, preferring localized destinations when
  // they exist. Keeps the user inside their locale where possible.
  const hrefFor = (path) => {
    if (locale === 'en' || !LOCALIZED_PATHS.has(path)) return path
    return localized(path, locale)
  }

  const linkLabel = (key) => t(locale, `footer.links.${key}`)

  const useCases = [
    ['/interview-transcription',     linkLabel('interviewTranscription')],
    ['/podcast-transcription',       linkLabel('podcastTranscription')],
    ['/lecture-transcription',       linkLabel('lectureTranscription')],
    ['/business-transcription',      linkLabel('businessTranscription')],
    ['/meeting-transcription',       linkLabel('meetingTranscription')],
    ['/zoom-transcription',          linkLabel('zoomTranscription')],
    ['/google-meet-transcription',   linkLabel('googleMeetTranscription')],
    ['/teams-meeting-transcription', linkLabel('teamsTranscription')],
    ['/voice-memo-to-text',          linkLabel('voiceMemoToText')],
    ['/webinar-transcription',       linkLabel('webinarTranscription')],
    ['/sermon-transcription',        linkLabel('sermonTranscription')],
    ['/dictation-to-text',           linkLabel('dictationToText')],
  ]
  const formats = [
    ['/transcribe-audio-to-text', linkLabel('audioToText')],
    ['/transcribe-mp3-to-text',   linkLabel('mp3ToText')],
    ['/transcribe-video-to-text', linkLabel('videoToText')],
    ['/wav-to-text',              linkLabel('wavToText')],
    ['/m4a-to-text',              linkLabel('m4aToText')],
    ['/webm-to-text',             linkLabel('webmToText')],
    ['/flac-to-text',             linkLabel('flacToText')],
    ['/ogg-to-text',              linkLabel('oggToText')],
    ['/aac-to-text',              linkLabel('aacToText')],
  ]
  const tools = [
    ['/free-srt-generator',        linkLabel('srtGenerator')],
    ['/timestamped-transcription', linkLabel('timestampedTranscript')],
    ['/youtube-to-text',           linkLabel('youtubeToText')],
    ['/how-to-compress-audio',     linkLabel('howToCompress')],
  ]
  const byLanguage = [
    ['/french-speech-to-text',     linkLabel('frenchSpeechToText')],
    ['/spanish-audio-to-text',     linkLabel('spanishAudioToText')],
    ['/german-audio-transcription',linkLabel('germanAudioTranscription')],
    ['/multilingual-transcription',linkLabel('multilingualTranscription')],
  ]
  const compareLinks = [
    ['/descript-alternative',     linkLabel('descriptAlternative')],
    ['/fireflies-alternative',    linkLabel('firefliesAlternative')],
    ['/turboscribe-alternative',  linkLabel('turboscribeAlternative')],
    ['/otter-alternative',        linkLabel('otterAlternative')],
    ['/notta-alternative',        linkLabel('nottaAlternative')],
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
          <FooterCol title={t(locale, 'footer.useCases')}   items={useCases}     hrefFor={hrefFor} />
          <FooterCol title={t(locale, 'footer.formats')}    items={formats}      hrefFor={hrefFor} />
          <FooterCol title={t(locale, 'footer.tools')}      items={tools}        hrefFor={hrefFor} />
          <FooterCol title={t(locale, 'footer.byLanguage')} items={byLanguage}   hrefFor={hrefFor} />
          <FooterCol title={t(locale, 'footer.compare')}    items={compareLinks} hrefFor={hrefFor} />
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

function FooterCol({ title, items, hrefFor }) {
  return (
    <div>
      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">{title}</p>
      <ul className="space-y-2">
        {items.map(([path, label]) => (
          <li key={path}>
            <a href={hrefFor(path)} className="text-sm text-slate-400 hover:text-brand-600 transition-colors">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
