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
  const title = `${data.title}${author} — Full Transcript | Mictoo`
  // Description = first 155 chars of transcript text. Real preview from
  // the speaker's own words; tends to outperform hand-written meta for
  // long-tail queries because it matches whatever the user is searching.
  const previewText = (data.text || '').replace(/\s+/g, ' ').trim().slice(0, 155)
  const description = previewText.length === 155
    ? previewText.replace(/\s+\S*$/, '') + '...'
    : previewText || `Full transcript of "${data.title}" with timestamps. Free, no signup.`

  const url = `https://mictoo.com/transcripts/${data.slug}`
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${data.title}${author} — Full Transcript`,
      description,
      url,
      siteName: 'Mictoo',
      type: 'article',
      images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${data.title}${author} — Full Transcript`,
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
function videoJsonLd(data) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: data.title,
    description: (data.summary?.split('\n')[0] || data.notes || `Full transcript of "${data.title}".`).replace(/^[*_]+|[*_]+$/g, ''),
    thumbnailUrl: [`https://i.ytimg.com/vi/${data.videoId}/maxresdefault.jpg`],
    contentUrl: data.videoUrl,
    embedUrl: `https://www.youtube.com/embed/${data.videoId}`,
    uploadDate: data.builtAt,
    duration: data.durationSec ? `PT${Math.floor(data.durationSec / 60)}M${data.durationSec % 60}S` : undefined,
    inLanguage: data.language || 'en',
    transcript: data.text,
    publisher: { '@type': 'Organization', name: 'Mictoo', url: 'https://mictoo.com' },
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
        Full transcript
        {data.author && (<> · <span>{data.author}</span></>)}
        {duration && (<> · <span>{duration}</span></>)}
        {data.language && (<> · <span className="uppercase">{data.language}</span></>)}
      </p>

      {data.notes && (
        <p className="text-slate-600 leading-relaxed mb-8">{data.notes}</p>
      )}

      {/* Top CTA — funnel into Mictoo before user reads the wall of text */}
      <div className="bg-gradient-to-br from-brand-50 to-white border border-brand-100 rounded-2xl p-5 mb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-slate-800">Want a transcript like this for your own video?</p>
          <p className="text-xs text-slate-600 mt-0.5">Free, no signup. Drag and drop an audio or video file — get text back in ~30 seconds.</p>
        </div>
        <a
          href="/transcribe-video-to-text"
          className="text-sm font-semibold px-4 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700 transition-colors whitespace-nowrap text-center"
        >
          Transcribe yours →
        </a>
      </div>

      {/* AI summary block */}
      {renderSummary(data.summary)}

      {/* Transcript */}
      <section className="mt-10">
        <h2 className="text-lg font-semibold text-slate-800 mb-4">Transcript</h2>
        <div className="space-y-2 text-slate-700 leading-relaxed text-[15px]">
          {data.segments.map((seg, i) => (
            <p key={i} className="flex gap-3">
              <a
                href={`${data.videoUrl}&t=${Math.floor(seg.start)}s`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-slate-400 hover:text-brand-600 pt-1 shrink-0 min-w-[3.5rem] no-underline"
                title="Jump to this moment on YouTube"
              >
                {formatTimestamp(seg.start)}
              </a>
              <span className="flex-1">{seg.text}</span>
            </p>
          ))}
        </div>
      </section>

      {/* Bottom CTA — repeat after they've consumed the content */}
      <div className="mt-12 border-t border-slate-200 pt-8">
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
          <p className="text-sm font-semibold text-slate-800 mb-2">
            This transcript was made the same way Mictoo can transcribe yours.
          </p>
          <p className="text-sm text-slate-600 mb-3">
            Drop any audio or video file (MP3, MP4, M4A, WAV, OGG, WebM, FLAC — up to 25 MB),
            get text back in ~30 seconds. Free, no signup, with AI summary included.
          </p>
          <a
            href="/transcribe-video-to-text"
            className="inline-block text-sm font-semibold px-4 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700 transition-colors"
          >
            Transcribe your own video →
          </a>
        </div>
      </div>

      {/* Related transcripts */}
      {related.length > 0 && (
        <section className="mt-12">
          <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">
            More transcripts
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

      {/* Attribution / original source link */}
      <p className="text-xs text-slate-400 mt-12 pt-6 border-t border-slate-100">
        Transcript generated from{' '}
        <a href={data.videoUrl} target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-brand-600">
          the original YouTube video
        </a>.
        Captions courtesy of YouTube/the original creator.
      </p>
    </article>
  )
}
