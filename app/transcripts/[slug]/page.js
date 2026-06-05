// Wave 8 SSG transcript page — /transcripts/{slug}.
//
// One static page per JSON file in data/transcripts/. Each page is a SEO
// landing for "{video title} transcript" queries: full transcript with
// timestamps, AI summary, and CTAs that funnel into Mictoo's main
// transcription product.
//
// Why static generation (not runtime fetch):
//   - Transcripts of public videos don't change.
//   - SSG = zero per-request infra cost + perfect Lighthouse score.
//   - Each page is indexable on first deploy (no client hydration races
//     hiding content from Googlebot).
//
// The build script (scripts/build-transcript-pages.mjs) is what produces
// the JSON files in data/transcripts/. This page is a pure consumer of
// that data; it doesn't talk to the transcript API itself.

import fs from 'node:fs'
import path from 'node:path'
import { notFound } from 'next/navigation'

const DATA_DIR = path.join(process.cwd(), 'data', 'transcripts')

// Discover all published transcripts. Filenames starting with "_" are
// dev-only samples and never become real pages.
function listSlugs() {
  let files = []
  try {
    files = fs.readdirSync(DATA_DIR)
  } catch {
    return []
  }
  return files
    .filter(f => f.endsWith('.json') && !f.startsWith('_'))
    .map(f => f.replace(/\.json$/, ''))
}

function loadTranscript(slug) {
  if (!/^[a-z0-9-]+$/i.test(slug)) return null
  const file = path.join(DATA_DIR, `${slug}.json`)
  try {
    const raw = fs.readFileSync(file, 'utf-8')
    const data = JSON.parse(raw)
    // Don't serve the placeholder sample in production.
    if (data?.slug?.startsWith('_')) return null
    return data
  } catch {
    return null
  }
}

// Build-time list of all params so Next.js pre-renders one HTML per slug.
export function generateStaticParams() {
  return listSlugs().map(slug => ({ slug }))
}

// Per-page metadata: title, description, canonical, OG, Twitter, video
// schema. This is the single most important file for SEO yield — Google
// uses these fields to decide whether the page deserves a SERP slot for
// "{video title} transcript" queries.
export function generateMetadata({ params }) {
  const data = loadTranscript(params.slug)
  if (!data) return { title: 'Transcript not found | Mictoo' }

  const author = data.author ? ` — ${data.author}` : ''
  const title = `${data.title}${author} — Summary & Key Quotes | Mictoo`
  // Description = the AI summary one-liner if present, fallback to notes.
  // We no longer use the speaker's own words for meta (used to be the
  // first 155 chars of transcript) — that was both a copyright concern
  // and made every preview sound the same.
  const oneLiner = (data.summary?.split('\n')[0] || '').replace(/^[*_]+|[*_]+$/g, '').trim()
  const description = oneLiner.slice(0, 155) ||
    data.notes?.slice(0, 155) ||
    `AI summary and key quotes from "${data.title}". Watch the original or transcribe your own.`

  const url = `https://mictoo.com/transcripts/${data.slug}`
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${data.title}${author} — Summary`,
      description,
      url,
      siteName: 'Mictoo',
      type: 'article',
      images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${data.title}${author} — Summary`,
      description,
      images: ['https://mictoo.com/opengraph-image'],
    },
  }
}

// ---------- helpers ----------

function formatTimestamp(seconds) {
  const s = Math.floor(seconds || 0)
  const m = Math.floor(s / 60)
  const h = Math.floor(m / 60)
  const ss = String(s % 60).padStart(2, '0')
  const mm = String(m % 60).padStart(2, '0')
  return h > 0 ? `${h}:${mm}:${ss}` : `${mm}:${ss}`
}

function formatDuration(seconds) {
  if (!seconds) return null
  const total = Math.round(seconds)
  const m = Math.floor(total / 60)
  if (m < 60) return `${m} min`
  const h = Math.floor(m / 60)
  const mm = m % 60
  return mm ? `${h}h ${mm}m` : `${h}h`
}

// Pick 3 related transcripts to show at the bottom — same category first,
// fall back to any other published transcript. Pure SEO move: every page
// gets 3 internal links to neighbors, improving discoverability and
// keeping users on-site after they finish reading.
function pickRelated(currentSlug, currentCategory, max = 3) {
  const others = listSlugs()
    .filter(s => s !== currentSlug)
    .map(loadTranscript)
    .filter(Boolean)
  const sameCat = others.filter(o => o.category === currentCategory)
  const otherCat = others.filter(o => o.category !== currentCategory)
  return [...sameCat, ...otherCat].slice(0, max)
}

// JSON-LD VideoObject schema. Helps Google understand the page is about
// a specific video, eligible for video-rich-result treatment in SERPs.
// We don't emit the full transcript here — the page no longer hosts it
// for copyright reasons (CC BY-NC-ND on TED, All Rights Reserved on
// most podcasts). Schema describes our SUMMARY page about the talk,
// not a reproduction of the talk itself.
function videoJsonLd(data) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: data.title,
    description: (data.summary?.split('\n')[0] || data.notes || `Summary of "${data.title}".`).replace(/^[*_]+|[*_]+$/g, ''),
    thumbnailUrl: [`https://i.ytimg.com/vi/${data.videoId}/maxresdefault.jpg`],
    contentUrl: data.videoUrl,
    embedUrl: `https://www.youtube.com/embed/${data.videoId}`,
    uploadDate: data.builtAt,
    duration: data.durationSec ? `PT${Math.floor(data.durationSec / 60)}M${data.durationSec % 60}S` : undefined,
    inLanguage: data.language || 'en',
    publisher: { '@type': 'Organization', name: 'Mictoo', url: 'https://mictoo.com' },
  }
}

// Source label for the attribution box at the bottom. Determined from
// the category — TED talks need the explicit CC BY-NC-ND mention, the
// rest just need a clean "watch the original" pointer.
function sourceAttribution(data) {
  if (data.category === 'ted-talks') {
    return {
      label: 'TED',
      licenseNote: 'TED talks are licensed under CC BY-NC-ND 4.0. This page presents an original AI-generated summary with short attributed quotes for commentary purposes — fair-use territory in most jurisdictions.',
    }
  }
  return {
    label: data.author || 'the original creator',
    licenseNote: 'This page is an original summary with short attributed quotes for commentary. Full talk and all rights belong to the original creator.',
  }
}

// ---------- summary renderer ----------
//
// The summary string from gpt-4o-mini follows a simple convention:
//   *italic one-liner*
//   <blank line>
//   Key insights:
//   • bullet 1
//   • bullet 2
//   ...
//   <blank line>
//   Memorable quote: "..."
// This parser is intentionally tolerant — if any section is missing, the
// rest renders fine.

function renderSummary(summary) {
  if (!summary) return null
  const lines = summary.split('\n').map(l => l.trim())
  // Group: leading italic line, then bullets, then quote
  let oneLiner = null
  const bullets = []
  let quote = null

  for (const line of lines) {
    if (!line) continue
    if (!oneLiner && (line.startsWith('*') || line.startsWith('_'))) {
      oneLiner = line.replace(/^[*_]+|[*_]+$/g, '').trim()
      continue
    }
    if (/^(•|-|\*)\s+/.test(line)) {
      bullets.push(line.replace(/^(•|-|\*)\s+/, '').trim())
      continue
    }
    if (/^memorable quote/i.test(line)) {
      quote = line.replace(/^memorable quote\s*[:\-]\s*/i, '').trim()
      continue
    }
    if (!oneLiner) {
      oneLiner = line
    }
  }

  return (
    <div className="rounded-2xl border border-brand-100 bg-brand-50/40 p-5 space-y-3">
      <h2 className="text-sm font-semibold text-brand-700 uppercase tracking-wide">AI summary</h2>
      {oneLiner && <p className="text-slate-700 italic">{oneLiner}</p>}
      {bullets.length > 0 && (
        <div>
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Key insights</p>
          <ul className="space-y-1.5 text-slate-700 text-sm">
            {bullets.map((b, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-brand-600 mt-0.5">•</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      {quote && (
        <p className="border-l-2 border-brand-300 pl-3 text-sm text-slate-600 italic">{quote}</p>
      )}
      <p className="text-[11px] text-slate-400 pt-2 border-t border-brand-100/50">
        Summary generated by AI from the transcript below. May contain minor inaccuracies.
      </p>
    </div>
  )
}

// ---------- page ----------

export default function TranscriptPage({ params }) {
  const data = loadTranscript(params.slug)
  if (!data) notFound()

  const duration = formatDuration(data.durationSec)
  const related = pickRelated(data.slug, data.category)
  const attribution = sourceAttribution(data)
  const quotes = Array.isArray(data.quotes) ? data.quotes : []

  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoJsonLd(data)) }}
      />

      {/* Breadcrumb */}
      <nav className="text-xs text-slate-500 mb-4">
        <a href="/" className="hover:underline">Home</a>
        <span className="mx-1.5">/</span>
        <a href="/transcripts" className="hover:underline">Transcripts</a>
        <span className="mx-1.5">/</span>
        <span className="text-slate-700">{data.title}</span>
      </nav>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-3">
        {data.title}
      </h1>
      <p className="text-sm text-slate-500 mb-6">
        Summary &amp; key quotes
        {data.author && (<> · <span>{data.author}</span></>)}
        {duration && (<> · <span>{duration}</span></>)}
        {data.language && (<> · <span className="uppercase">{data.language}</span></>)}
      </p>

      {data.notes && (
        <p className="text-slate-600 leading-relaxed mb-6">{data.notes}</p>
      )}

      {/* Watch-original button — comes first so people who want the real
          thing don't get held up by our summary. Direct attribution per
          CC BY-NC-ND requirements (and good practice for everything else). */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-slate-800">Watch the original on YouTube</p>
          <p className="text-xs text-slate-500 mt-0.5">{attribution.label} · {duration || 'Full talk'}</p>
        </div>
        <a
          href={data.videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold px-4 py-2 bg-white border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-100 transition-colors whitespace-nowrap text-center"
        >
          Open on YouTube ↗
        </a>
      </div>

      {/* AI summary block — our original paraphrase */}
      {renderSummary(data.summary)}

      {/* Key quotes — only renders when curated quotes are in the JSON.
          These are short attributed citations (one or two sentences each)
          used to support commentary — covered by the right-to-quote
          exception in most jurisdictions, distinct from republishing
          the whole transcript. */}
      {quotes.length > 0 && (
        <section className="mt-8">
          <h2 className="text-sm font-semibold text-slate-700 uppercase tracking-wide mb-4">Key quotes</h2>
          <div className="space-y-4">
            {quotes.map((q, i) => (
              <blockquote key={i} className="border-l-2 border-brand-300 pl-4 py-1">
                <p className="text-slate-700 italic leading-relaxed">&ldquo;{q.text}&rdquo;</p>
                <a
                  href={`${data.videoUrl}&t=${Math.floor(q.startSec || 0)}s`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-1.5 text-xs font-mono text-brand-600 hover:underline"
                >
                  {formatTimestamp(q.startSec || 0)} on YouTube ↗
                </a>
              </blockquote>
            ))}
          </div>
        </section>
      )}

      {/* CTA — transcribe your own. Same as before but moved below the
          summary instead of above (where the transcript wall used to be). */}
      <div className="mt-10 border-t border-slate-200 pt-8">
        <div className="bg-gradient-to-br from-brand-50 to-white border border-brand-100 rounded-2xl p-5">
          <p className="text-sm font-semibold text-slate-800 mb-2">
            Want a real transcript of your own video?
          </p>
          <p className="text-sm text-slate-600 mb-3">
            Drop any audio or video file (MP3, MP4, M4A, WAV, OGG, WebM, FLAC — up to 25 MB), or paste a YouTube link.
            Free, no signup, with AI summary included. Whisper-quality transcription with timestamps and SRT export.
          </p>
          <a
            href="/transcribe-video-to-text"
            className="inline-block text-sm font-semibold px-4 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700 transition-colors"
          >
            Transcribe your own video →
          </a>
        </div>
      </div>

      {/* Related summaries */}
      {related.length > 0 && (
        <section className="mt-12">
          <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">
            More summaries
          </h2>
          <ul className="space-y-2">
            {related.map(r => (
              <li key={r.slug}>
                <a
                  href={`/transcripts/${r.slug}`}
                  className="block p-3 rounded-lg border border-slate-200 hover:border-brand-300 hover:bg-brand-50/30 transition-colors"
                >
                  <p className="text-sm font-medium text-slate-800">{r.title}</p>
                  {r.author && <p className="text-xs text-slate-500 mt-0.5">{r.author}</p>}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Attribution / license note — important for CC BY-NC-ND content.
          For TED talks we explicitly call out the license; for everything
          else we still acknowledge the creator owns the work and we're
          offering commentary not republication. */}
      <div className="mt-12 pt-6 border-t border-slate-100 space-y-2">
        <p className="text-xs text-slate-500">
          <strong>Source:</strong>{' '}
          {data.title} by {attribution.label}.{' '}
          <a href={data.videoUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-600">
            Watch the original ↗
          </a>
        </p>
        <p className="text-xs text-slate-400">
          {attribution.licenseNote}
        </p>
      </div>
    </article>
  )
}
