// Wave 8 transcripts index — /transcripts.
//
// Lists every published transcript grouped by category. This is the hub
// page the footer links to. Each transcript page also links back here
// in its breadcrumb, so internal PageRank flows both ways.
//
// Categories mirror what's set in scripts/seed-videos.json. New
// categories appear automatically once any transcript in that category
// is published — no code change required.

import fs from 'node:fs'
import path from 'node:path'

const DATA_DIR = path.join(process.cwd(), 'data', 'transcripts')

// Display-friendly labels per category slug. Anything not listed here
// falls back to a humanized version of the slug itself.
const CATEGORY_LABELS = {
  'ted-talks': 'TED Talks',
  'long-form-podcasts': 'Long-form podcasts',
  'viral-classics': 'Speeches and viral classics',
}
const CATEGORY_DESCRIPTIONS = {
  'ted-talks': 'Full transcripts of the most-watched TED talks.',
  'long-form-podcasts': 'Lex Fridman, Huberman Lab, Tim Ferriss and friends — long episodes turned into readable, searchable text.',
  'viral-classics': 'Commencement addresses, speeches, and short videos that shaped the internet.',
}
const CATEGORY_ORDER = ['ted-talks', 'long-form-podcasts', 'viral-classics']

function humanize(slug) {
  return slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
}

function loadAllTranscripts() {
  let files = []
  try {
    files = fs.readdirSync(DATA_DIR)
  } catch {
    return []
  }
  return files
    .filter(f => f.endsWith('.json') && !f.startsWith('_'))
    .map(f => {
      try {
        const data = JSON.parse(fs.readFileSync(path.join(DATA_DIR, f), 'utf-8'))
        if (data?.slug?.startsWith('_')) return null
        return data
      } catch { return null }
    })
    .filter(Boolean)
}

export const metadata = {
  title: 'YouTube Transcripts — Famous Talks & Podcasts | Mictoo',
  description:
    'Full transcripts of famous YouTube videos — TED talks, long-form podcasts (Lex Fridman, Huberman Lab), and viral classics. Free, searchable, with timestamps.',
  alternates: {
    canonical: 'https://mictoo.com/transcripts',
  },
  openGraph: {
    title: 'YouTube Transcripts — Famous Talks & Podcasts',
    description: 'Full transcripts of famous YouTube videos with timestamps. Free, no signup.',
    url: 'https://mictoo.com/transcripts',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YouTube Transcripts — Famous Talks & Podcasts',
    description: 'Full transcripts of famous YouTube videos with timestamps. Free, no signup.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

export default function TranscriptsIndexPage() {
  const all = loadAllTranscripts()

  // Group by category, then sort each group by title.
  const byCat = {}
  for (const t of all) {
    const cat = t.category || 'other'
    if (!byCat[cat]) byCat[cat] = []
    byCat[cat].push(t)
  }
  for (const cat of Object.keys(byCat)) {
    byCat[cat].sort((a, b) => (a.title || '').localeCompare(b.title || ''))
  }

  // Sort category sections: known order first, anything else alphabetical.
  const knownCats = CATEGORY_ORDER.filter(c => byCat[c]?.length)
  const otherCats = Object.keys(byCat).filter(c => !CATEGORY_ORDER.includes(c)).sort()
  const orderedCats = [...knownCats, ...otherCats]

  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <nav className="text-xs text-slate-500 mb-4">
        <a href="/" className="hover:underline">Home</a>
        <span className="mx-1.5">/</span>
        <span className="text-slate-700">Transcripts</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
        YouTube transcripts
      </h1>
      <p className="text-slate-600 leading-relaxed mb-10">
        Full transcripts of famous YouTube videos — searchable, with timestamps that link back
        to the original moment in the video. Free to read, free to copy. Want a transcript of
        your own video? <a href="/transcribe-video-to-text" className="text-brand-600 hover:underline font-medium">Drop a file into Mictoo</a> — we'll have it back to you in about 30 seconds.
      </p>

      {orderedCats.length === 0 && (
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center">
          <p className="text-slate-600 text-sm">
            Transcripts haven't been published yet. Check back soon, or{' '}
            <a href="/transcribe-video-to-text" className="text-brand-600 hover:underline font-medium">
              transcribe your own video
            </a>.
          </p>
        </div>
      )}

      <div className="space-y-12">
        {orderedCats.map(cat => (
          <section key={cat}>
            <h2 className="text-xl font-semibold text-slate-800 mb-1">
              {CATEGORY_LABELS[cat] || humanize(cat)}
            </h2>
            <p className="text-sm text-slate-500 mb-4">
              {CATEGORY_DESCRIPTIONS[cat] || `${byCat[cat].length} transcripts`}
            </p>
            <ul className="space-y-2">
              {byCat[cat].map(t => (
                <li key={t.slug}>
                  <a
                    href={`/transcripts/${t.slug}`}
                    className="block p-4 rounded-xl border border-slate-200 hover:border-brand-300 hover:bg-brand-50/30 transition-colors"
                  >
                    <p className="text-sm font-semibold text-slate-800">{t.title}</p>
                    {(t.author || t.durationSec) && (
                      <p className="text-xs text-slate-500 mt-1">
                        {t.author}
                        {t.author && t.durationSec ? ' · ' : ''}
                        {t.durationSec ? `${Math.round(t.durationSec / 60)} min` : ''}
                      </p>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 border-t border-slate-200 pt-8">
        <div className="bg-gradient-to-br from-brand-50 to-white border border-brand-100 rounded-2xl p-6 text-center">
          <p className="text-base font-semibold text-slate-800 mb-2">
            Transcribe your own video for free
          </p>
          <p className="text-sm text-slate-600 mb-4">
            Same tool that made the transcripts above. Drop any audio or video file, get text
            back in about 30 seconds. No signup, AI summary included.
          </p>
          <a
            href="/transcribe-video-to-text"
            className="inline-block text-sm font-semibold px-5 py-2.5 bg-brand-600 text-white rounded-lg hover:bg-brand-700 transition-colors"
          >
            Try Mictoo →
          </a>
        </div>
      </div>
    </section>
  )
}
