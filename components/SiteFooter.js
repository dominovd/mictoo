'use client'

import { usePathname } from 'next/navigation'
import { detectLocaleFromPath, localized, LOCALIZED_PATHS, t } from '@/lib/i18n'
import FooterIcon from '@/lib/footer-icons'
import TranscriptionCounter from './TranscriptionCounter'

// Footer is intentionally generous — every page in the sitemap gets at least
// one inbound link from the global footer so internal PageRank flows to all
// 90+ URLs. Items are now [path, label, iconName] triples; FooterIcon renders
// an inline SVG (16×16, currentColor) that picks up the link's color and
// animates with it on hover. Icons live in lib/footer-icons.js so this file
// stays focused on layout.
//
// Each section has its own accent color (use cases = brand, formats = sky,
// tools = amber, by language = emerald, compare = violet). Subtle — but it
// breaks up the "wall of links" the footer used to be.
export default function SiteFooter() {
  const pathname = usePathname() || '/'
  const locale = detectLocaleFromPath(pathname)

  // Resolves the right href for a link, preferring localized destinations when
  // they exist. Keeps the user inside their locale where possible.
  const hrefFor = (path) => {
    if (locale === 'en' || !LOCALIZED_PATHS.has(path)) return path
    return localized(path, locale)
  }

  const lab = (key) => t(locale, `footer.links.${key}`)

  const useCases = [
    ['/interview-transcription',     lab('interviewTranscription'),     'chat'],
    ['/podcast-transcription',       lab('podcastTranscription'),       'headphones'],
    ['/lecture-transcription',       lab('lectureTranscription'),       'cap'],
    ['/business-transcription',      lab('businessTranscription'),      'briefcase'],
    ['/meeting-transcription',       lab('meetingTranscription'),       'users'],
    ['/zoom-transcription',          lab('zoomTranscription'),          'video'],
    ['/google-meet-transcription',   lab('googleMeetTranscription'),    'video'],
    ['/teams-meeting-transcription', lab('teamsTranscription'),         'video'],
    ['/voice-memo-to-text',          lab('voiceMemoToText'),            'memo'],
    ['/webinar-transcription',       lab('webinarTranscription'),       'presentation'],
    ['/sermon-transcription',        lab('sermonTranscription'),        'book'],
    ['/dictation-to-text',           lab('dictationToText'),            'pen'],
  ]
  const formats = [
    ['/transcribe-audio-to-text', lab('audioToText'), 'fileAudio'],
    ['/transcribe-mp3-to-text',   lab('mp3ToText'),   'fileAudio'],
    ['/transcribe-video-to-text', lab('videoToText'), 'film'],
    ['/wav-to-text',              lab('wavToText'),   'fileAudio'],
    ['/m4a-to-text',              lab('m4aToText'),   'fileAudio'],
    ['/webm-to-text',             lab('webmToText'),  'film'],
    ['/flac-to-text',             lab('flacToText'),  'fileAudio'],
    ['/ogg-to-text',              lab('oggToText'),   'fileAudio'],
    ['/aac-to-text',              lab('aacToText'),   'fileAudio'],
  ]
  const tools = [
    ['/free-srt-generator',        lab('srtGenerator'),          'captions'],
    ['/timestamped-transcription', lab('timestampedTranscript'), 'clock'],
    ['/youtube-to-text',           lab('youtubeToText'),         'play'],
    // YouTube-downloader guide is EN-only for now; only inject it when the
    // current locale is English so non-EN visitors don't see a link to an
    // English-only page. Once localized, move it out of this conditional.
    ...(locale === 'en' ? [['/how-to-download-youtube-video', 'Download YouTube video', 'play']] : []),
    ['/how-to-compress-audio',     lab('howToCompress'),         'compress'],
    ['/how-to-split-audio',        lab('howToSplit'),            'scissors'],
    // Wave 6 — functional converters (real ffmpeg backend, not just SEO).
    ['/mp4-to-mp3',                lab('mp4ToMp3'),              'refresh'],
    ['/wav-to-mp3',                lab('wavToMp3'),              'refresh'],
    ['/webm-to-mp3',               lab('webmToMp3'),             'refresh'],
    ['/flac-to-mp3',               lab('flacToMp3'),             'refresh'],
    ['/mp3-to-m4a',                lab('mp3ToM4a'),              'refresh'],
    ['/mp3-to-wav',                lab('mp3ToWav'),              'refresh'],
    ['/aac-to-mp3',                lab('aacToMp3'),              'refresh'],
    ['/wma-to-mp3',                lab('wmaToMp3'),              'refresh'],
    ['/m4a-to-mp3',                lab('m4aToMp3'),              'refresh'],
  ]
  const byLanguage = [
    ['/french-speech-to-text',      lab('frenchSpeechToText'),       'globe'],
    ['/spanish-audio-to-text',      lab('spanishAudioToText'),       'globe'],
    ['/german-audio-transcription', lab('germanAudioTranscription'), 'globe'],
    ['/multilingual-transcription', lab('multilingualTranscription'), 'globe'],
  ]
  const compareLinks = [
    ['/descript-alternative',     lab('descriptAlternative'),     'compare'],
    ['/fireflies-alternative',    lab('firefliesAlternative'),    'compare'],
    ['/turboscribe-alternative',  lab('turboscribeAlternative'),  'compare'],
    ['/otter-alternative',        lab('otterAlternative'),        'compare'],
    ['/notta-alternative',        lab('nottaAlternative'),        'compare'],
  ]
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-100 bg-slate-50/60 py-14 mt-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main grid. 2 cols on mobile, 3 on tablet, 4 or 5 on desktop.
            The "By language" column is EN-only — those pages target US
            English-speakers searching for foreign-language transcription
            (see reference_mictoo_localization), so showing them on a /fr
            or /de page would confuse the locale. */}
        <div className={`grid grid-cols-2 md:grid-cols-3 ${locale === 'en' ? 'lg:grid-cols-5' : 'lg:grid-cols-4'} gap-x-6 gap-y-10 mb-10`}>
          <FooterCol accent="brand"   title={t(locale, 'footer.useCases')}   items={useCases}     hrefFor={hrefFor} />
          <FooterCol accent="sky"     title={t(locale, 'footer.formats')}    items={formats}      hrefFor={hrefFor} />
          <FooterCol accent="amber"   title={t(locale, 'footer.tools')}      items={tools}        hrefFor={hrefFor} />
          {locale === 'en' && (
            <FooterCol accent="emerald" title={t(locale, 'footer.byLanguage')} items={byLanguage}   hrefFor={hrefFor} />
          )}
          <FooterCol accent="violet"  title={t(locale, 'footer.compare')}    items={compareLinks} hrefFor={hrefFor} />
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <div className="flex flex-col items-center sm:items-start gap-1">
            <p>{t(locale, 'footer.copyright', { year })}</p>
            <TranscriptionCounter />
          </div>
          <div className="flex gap-4 flex-wrap justify-center sm:justify-end">
            <a href={localized('/about', locale)}   className="hover:text-slate-600 transition-colors">{t(locale, 'footer.about')}</a>
            <a href={localized('/contact', locale)} className="hover:text-slate-600 transition-colors">{t(locale, 'footer.contact')}</a>
            {/* Blog is EN-only — label is localized so non-EN users still see
                "Блог" / "ブログ" etc. */}
            <a href="/blog"                         className="hover:text-slate-600 transition-colors">{t(locale, 'footer.blog')}</a>
            <a href={localized('/privacy', locale)} className="hover:text-slate-600 transition-colors">{t(locale, 'footer.privacy')}</a>
            <a href={localized('/terms', locale)}   className="hover:text-slate-600 transition-colors">{t(locale, 'footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Tailwind tree-shakes classes that never appear as literal strings, so we
// can't build the accent class with template strings. This lookup keeps every
// accent variant in the build output and lets the column pick its color.
const ACCENT = {
  brand:   { dot: 'bg-brand-500',   title: 'text-brand-700',   hover: 'group-hover:text-brand-600' },
  sky:     { dot: 'bg-sky-500',     title: 'text-sky-700',     hover: 'group-hover:text-sky-600' },
  amber:   { dot: 'bg-amber-500',   title: 'text-amber-700',   hover: 'group-hover:text-amber-600' },
  emerald: { dot: 'bg-emerald-500', title: 'text-emerald-700', hover: 'group-hover:text-emerald-600' },
  violet:  { dot: 'bg-violet-500',  title: 'text-violet-700',  hover: 'group-hover:text-violet-600' },
}

function FooterCol({ title, items, hrefFor, accent = 'brand' }) {
  const a = ACCENT[accent] || ACCENT.brand
  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <span className={`inline-block w-1.5 h-1.5 rounded-full ${a.dot}`} aria-hidden="true" />
        <p className={`text-xs font-semibold uppercase tracking-wide ${a.title}`}>{title}</p>
      </div>
      <ul className="space-y-2.5">
        {items.map(([path, label, icon]) => (
          <li key={path}>
            <a
              href={hrefFor(path)}
              className="group flex items-center gap-2.5 text-sm text-slate-500 hover:text-slate-900 transition-colors"
            >
              <span className={`text-slate-300 ${a.hover} transition-colors`}>
                <FooterIcon name={icon} />
              </span>
              <span className="truncate">{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
