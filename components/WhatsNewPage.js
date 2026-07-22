// Shared renderer for /whats-new and its 9 locale variants.
//
// Data source: data/changelog.json. Each entry can carry a
// `translations: { fr: {title,body}, de: ..., ... }` block; this renderer
// picks the correct locale's title+body and falls back to top-level
// English if a translation is missing for a given entry.
//
// SSG-friendly: reads JSON at build time (no runtime fetch, no headers()).

import fs from 'node:fs'
import path from 'node:path'
import { t } from '@/lib/i18n'

const DATA_PATH = path.join(process.cwd(), 'data', 'changelog.json')

function loadEntries() {
  try {
    const raw = fs.readFileSync(DATA_PATH, 'utf-8')
    const parsed = JSON.parse(raw)
    const entries = Array.isArray(parsed.entries) ? parsed.entries : []
    return entries.slice().sort((a, b) => (b.date || '').localeCompare(a.date || ''))
  } catch {
    return []
  }
}

function localizeEntry(entry, locale) {
  const tr = entry.translations?.[locale]
  return {
    date: entry.date,
    tags: entry.tags,
    title: tr?.title ?? entry.title,
    body: tr?.body ?? entry.body,
  }
}

function tagClass(tag) {
  if (tag === 'new') return 'bg-brand-100 text-brand-700 border-brand-200'
  if (tag === 'feature') return 'bg-emerald-50 text-emerald-700 border-emerald-200'
  if (tag === 'youtube') return 'bg-red-50 text-red-700 border-red-200'
  if (tag === 'seo') return 'bg-amber-50 text-amber-700 border-amber-200'
  if (tag === 'reliability') return 'bg-sky-50 text-sky-700 border-sky-200'
  if (tag === 'i18n' || tag === 'l10n') return 'bg-violet-50 text-violet-700 border-violet-200'
  return 'bg-slate-100 text-slate-600 border-slate-200'
}

// Map short locale codes to BCP-47 tags for Intl.DateTimeFormat
const BCP47 = {
  en: 'en-US', fr: 'fr-FR', de: 'de-DE', es: 'es-ES', ru: 'ru-RU',
  it: 'it-IT', pt: 'pt-PT', pl: 'pl-PL', ja: 'ja-JP', ko: 'ko-KR',
}

function formatDate(iso, locale) {
  if (!iso) return ''
  try {
    return new Date(iso + 'T12:00:00Z').toLocaleDateString(BCP47[locale] || 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'UTC',
    })
  } catch {
    return iso
  }
}

// Inline markdown-style link parser: turns "[label](url)" into <a>.
function renderInline(text, keyPrefix, prefix) {
  const parts = []
  const re = /\[([^\]]+)\]\(([^)]+)\)/g
  let last = 0
  let m
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index))
    // Auto-prefix internal links with the current locale so e.g. /contact on
    // /fr/whats-new becomes /fr/contact instead of jumping back to EN.
    const href = (prefix && m[2].startsWith('/') && !m[2].startsWith(`/${prefix}/`) && !m[2].startsWith('http'))
      ? `/${prefix}${m[2]}`
      : m[2]
    parts.push(
      <a
        key={`${keyPrefix}-${m.index}`}
        href={href}
        className="text-brand-600 hover:underline font-medium"
      >
        {m[1]}
      </a>
    )
    last = m.index + m[0].length
  }
  if (last < text.length) parts.push(text.slice(last))
  return parts
}

function renderBody(body, hrefPrefix) {
  if (!body) return null
  const paragraphs = body.split(/\n\s*\n/).map(p => p.trim()).filter(Boolean)
  return paragraphs.map((p, i) => (
    <p key={i} className="text-slate-600 leading-relaxed mb-3 last:mb-0">
      {renderInline(p, `p${i}`, hrefPrefix)}
    </p>
  ))
}

export default function WhatsNewPage({ locale = 'en' }) {
  const rawEntries = loadEntries()
  const entries = rawEntries.map((e) => localizeEntry(e, locale))
  const latestDate = entries[0]?.date || ''
  const markReadScript = `try{localStorage.setItem('mictoo:changelog_lastSeen', ${JSON.stringify(latestDate)});}catch(e){}`

  const hrefPrefix = locale === 'en' ? '' : locale
  const homeHref = locale === 'en' ? '/' : `/${locale}`
  const contactHref = locale === 'en' ? '/contact' : `/${locale}/contact`

  return (
    <section className="max-w-2xl mx-auto px-4 py-12">
      <script dangerouslySetInnerHTML={{ __html: markReadScript }} />

      <nav className="text-xs text-slate-500 mb-4">
        <a href={homeHref} className="hover:underline">{t(locale, 'whatsNew.breadcrumbHome')}</a>
        <span className="mx-1.5">/</span>
        <span className="text-slate-700">{t(locale, 'whatsNew.h1')}</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
        {t(locale, 'whatsNew.h1')}
      </h1>
      <p className="text-slate-600 leading-relaxed mb-10">
        {t(locale, 'whatsNew.intro')}{' '}
        <a href={contactHref} className="text-brand-600 hover:underline font-medium">
          {contactHref}
        </a>.
      </p>

      {entries.length === 0 && (
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center">
          <p className="text-slate-600 text-sm">{t(locale, 'whatsNew.empty')}</p>
        </div>
      )}

      <div className="space-y-8">
        {entries.map((entry, i) => (
          <article key={i} className="border-l-2 border-slate-200 pl-5 hover:border-brand-300 transition-colors">
            <header className="mb-2">
              <time className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                {formatDate(entry.date, locale)}
              </time>
              <h2 className="text-lg font-semibold text-slate-900 mt-1 mb-2 leading-snug">
                {entry.title}
              </h2>
              {entry.tags?.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {entry.tags.map(tag => (
                    <span
                      key={tag}
                      className={`text-[10px] uppercase tracking-wide font-semibold px-2 py-0.5 rounded-full border ${tagClass(tag)}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </header>
            <div>{renderBody(entry.body, hrefPrefix)}</div>
          </article>
        ))}
      </div>

      <div className="mt-16 border-t border-slate-200 pt-8">
        <div className="bg-gradient-to-br from-brand-50 to-white border border-brand-100 rounded-2xl p-6 text-center">
          <p className="text-base font-semibold text-slate-800 mb-2">
            {t(locale, 'whatsNew.ctaHeadline')}
          </p>
          <p className="text-sm text-slate-600 mb-4">
            {t(locale, 'whatsNew.ctaSubtitle')}
          </p>
          <a
            href={homeHref}
            className="inline-block text-sm font-semibold px-5 py-2.5 bg-brand-600 text-white rounded-lg hover:bg-brand-700 transition-colors"
          >
            {t(locale, 'whatsNew.ctaButton')}
          </a>
        </div>
      </div>
    </section>
  )
}
