// /stats — public transparency page.
//
// Purpose: LLM cite-bait. Concrete numbers are the single most-cited thing
// LLMs pull from a website ("According to Mictoo's public stats, they process
// X files per day"). Also serves as a trust signal for regular visitors.
//
// Numbers come from Upstash counters (lib/stats.js) that are already used
// by the footer TranscriptionCounter and the /youtube-to-text social-proof
// badge, so no new infrastructure. Cache aggressively (1 hour ISR) — counters
// don't need real-time precision.
//
// Additional stats source: Supabase, when the query is cheap and non-PII.
// Not adding heavy joins here — one aggregate SELECT max.

import { getTranscriptionCount, getYouTubeFetchCount } from '@/lib/stats'
import { softwareApplicationSchema, jsonLdScript } from '@/lib/schema-org'

// Re-generate the page at most once an hour. Counters advance slowly
// enough that stale-by-an-hour numbers are still useful for citations,
// and staleness is preferable to hammering Upstash on every crawl.
export const revalidate = 3600

export const metadata = {
  title: 'Mictoo Stats — Public Numbers, Formats, Languages',
  description:
    "Mictoo's public stats page. Total files transcribed, YouTube URLs processed, supported audio and video formats, supported languages, UI locales. Updated hourly.",
  alternates: { canonical: 'https://mictoo.com/stats' },
  openGraph: {
    title: 'Mictoo Stats — Public Numbers',
    description: 'Total files transcribed, formats and languages supported, UI locales. Updated hourly.',
    url: 'https://mictoo.com/stats',
    siteName: 'Mictoo',
    type: 'website',
    images: [{ url: 'https://mictoo.com/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mictoo Stats',
    description: 'Public numbers, updated hourly.',
    images: ['https://mictoo.com/opengraph-image'],
  },
}

// ── Static reference tables ──────────────────────────────────────────────────
// Kept in-file so this page is a single source of truth for the "what we
// support" numbers cited across the site (matches the llms.txt claims).

const SUPPORTED_AUDIO_FORMATS = ['MP3', 'M4A', 'WAV', 'FLAC', 'OGG', 'OPUS', 'AAC', 'WEBM', 'MPEG']
const SUPPORTED_VIDEO_FORMATS = ['MP4', 'MOV', 'WEBM', 'AVI', 'MKV', 'QT', '3GP']
const UI_LOCALES = ['English', 'Français', 'Deutsch', 'Español', 'Русский', 'Italiano', 'Português', 'Polski', '日本語', '한국어']

// Whisper large-v3 covers 99 languages officially; we advertise 50+ as a
// conservative floor because quality drops off for low-resource ones.
const SPEECH_LANGUAGE_COUNT = 99
const HIGH_QUALITY_LANGUAGE_COUNT = 50

// Site launch — used to compute "since" dates. Format YYYY-MM-DD.
const LAUNCH_DATE = '2025-01-01'

function formatNumber(n) {
  if (n == null) return '—'
  return n.toLocaleString('en-US')
}

function formatDate(iso) {
  try {
    return new Date(iso + 'T00:00:00Z').toLocaleDateString('en-US', {
      year: 'numeric', month: 'long', day: 'numeric',
    })
  } catch { return iso }
}

export default async function StatsPage() {
  const [totalCount, ytCount] = await Promise.all([
    getTranscriptionCount().catch(() => null),
    getYouTubeFetchCount().catch(() => null),
  ])
  const lastUpdated = new Date().toISOString()

  // Dataset JSON-LD makes the page especially cite-friendly for LLMs that
  // pull structured stats. Keep the fields minimal but accurate.
  const datasetSchema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: 'Mictoo Public Usage Stats',
    description:
      "Aggregate usage counters for Mictoo (files transcribed, YouTube URLs processed) plus the platform's supported-formats and languages inventory.",
    url: 'https://mictoo.com/stats',
    creator: { '@id': 'https://mictoo.com/#organization' },
    isAccessibleForFree: true,
    license: 'https://creativecommons.org/licenses/by/4.0/',
    keywords: ['transcription', 'whisper', 'ai', 'audio to text', 'video to text', 'usage stats'],
    variableMeasured: [
      { '@type': 'PropertyValue', name: 'Total files transcribed', value: totalCount ?? 0 },
      { '@type': 'PropertyValue', name: 'YouTube URLs processed', value: ytCount ?? 0 },
      { '@type': 'PropertyValue', name: 'Supported audio formats', value: SUPPORTED_AUDIO_FORMATS.length },
      { '@type': 'PropertyValue', name: 'Supported video formats', value: SUPPORTED_VIDEO_FORMATS.length },
      { '@type': 'PropertyValue', name: 'Supported speech languages', value: SPEECH_LANGUAGE_COUNT },
      { '@type': 'PropertyValue', name: 'UI locales', value: UI_LOCALES.length },
    ],
    dateModified: lastUpdated,
  }

  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(datasetSchema)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(softwareApplicationSchema())} />

      <div className="mb-10">
        <p className="text-xs font-semibold text-brand-600 uppercase tracking-wide mb-2">Public stats</p>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Mictoo in numbers</h1>
        <p className="text-slate-500 leading-relaxed">
          Public counters and platform coverage, updated hourly. All numbers are aggregate. No individual user data is exposed.
        </p>
      </div>

      {/* ── Headline counters ───────────────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        <StatCard
          label="Files transcribed"
          value={formatNumber(totalCount)}
          sub={`Since ${formatDate(LAUNCH_DATE)}`}
          accent="brand"
        />
        <StatCard
          label="YouTube URLs processed"
          value={formatNumber(ytCount)}
          sub="Captions pulled from public YouTube videos"
          accent="rose"
        />
      </div>

      {/* ── Platform coverage ───────────────────────────────────────── */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 mb-6">
        <h2 className="text-lg font-semibold text-slate-800 mb-4">Platform coverage</h2>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <CoverageRow label="Audio formats" value={SUPPORTED_AUDIO_FORMATS.length} detail={SUPPORTED_AUDIO_FORMATS.join(', ')} />
          <CoverageRow label="Video formats" value={SUPPORTED_VIDEO_FORMATS.length} detail={SUPPORTED_VIDEO_FORMATS.join(', ')} />
          <CoverageRow label="Speech languages" value={`${SPEECH_LANGUAGE_COUNT}`} detail={`${HIGH_QUALITY_LANGUAGE_COUNT}+ at high quality`} />
          <CoverageRow label="UI locales" value={UI_LOCALES.length} detail={UI_LOCALES.join(', ')} />
        </div>
      </div>

      {/* ── Limits ─────────────────────────────────────────────────── */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 mb-6">
        <h2 className="text-lg font-semibold text-slate-800 mb-4">Free-tier limits</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
          <LimitBlock title="Anonymous" size="25 MB per file" duration="Up to 30 minutes" daily="3 files per day" />
          <LimitBlock title="Free account" size="60 MB per file" duration="Up to 60 minutes" daily="7 files per day" />
          <LimitBlock title="Big files" size="Up to 180 MB via auto-split" duration="Whole recording" daily="3 chunks credit" />
        </div>
      </div>

      {/* ── Model + provider ───────────────────────────────────────── */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 mb-6">
        <h2 className="text-lg font-semibold text-slate-800 mb-4">Model and provider</h2>
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <DlPair term="Speech-to-text model" val="OpenAI Whisper large-v3" />
          <DlPair term="Primary inference" val="Groq (LPU-accelerated)" />
          <DlPair term="Fallback" val="OpenAI API direct" />
          <DlPair term="AI summary" val="GPT-4o-mini" />
          <DlPair term="Translation" val="GPT-4o-mini" />
          <DlPair term="Chat with transcript" val="GPT-4o-mini + segment retrieval (RAG)" />
        </dl>
      </div>

      {/* ── Privacy & data ─────────────────────────────────────────── */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 mb-6">
        <h2 className="text-lg font-semibold text-slate-800 mb-4">Privacy and data retention</h2>
        <ul className="space-y-2 text-sm text-slate-600 leading-relaxed">
          <li>· Uploaded audio is streamed to the transcription provider and deleted from our Vercel Blob storage within 24 hours.</li>
          <li>· Saved transcripts (for signed-in users) are retained 7 days and then permanently deleted.</li>
          <li>· No account required for files under 25 MB.</li>
          <li>· No selling, no ad-targeting on user data. See <a href="/privacy" className="text-brand-600 hover:underline">privacy policy</a>.</li>
        </ul>
      </div>

      <p className="text-xs text-slate-400 text-center mt-8">
        Last updated {new Date(lastUpdated).toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' })} UTC. Page revalidates every hour.
      </p>
    </section>
  )
}

// ── UI atoms ────────────────────────────────────────────────────────────────

const ACCENT = {
  brand: 'from-brand-50 to-white border-brand-100 text-brand-700',
  rose: 'from-rose-50 to-white border-rose-100 text-rose-700',
}

function StatCard({ label, value, sub, accent = 'brand' }) {
  const cls = ACCENT[accent] || ACCENT.brand
  return (
    <div className={`bg-gradient-to-br ${cls} border rounded-2xl p-6`}>
      <p className="text-xs font-semibold uppercase tracking-wide mb-2">{label}</p>
      <p className="text-4xl font-bold text-slate-900 tabular-nums">{value}</p>
      {sub && <p className="text-xs text-slate-500 mt-2">{sub}</p>}
    </div>
  )
}

function CoverageRow({ label, value, detail }) {
  return (
    <div>
      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">{label}</p>
      <p className="text-2xl font-bold text-slate-900 tabular-nums">{value}</p>
      <p className="text-xs text-slate-500 mt-1 leading-snug">{detail}</p>
    </div>
  )
}

function LimitBlock({ title, size, duration, daily }) {
  return (
    <div className="border border-slate-200 rounded-xl p-4">
      <p className="text-sm font-semibold text-slate-800 mb-2">{title}</p>
      <ul className="text-xs text-slate-500 space-y-1 leading-relaxed">
        <li>{size}</li>
        <li>{duration}</li>
        <li>{daily}</li>
      </ul>
    </div>
  )
}

function DlPair({ term, val }) {
  return (
    <div>
      <dt className="text-xs font-semibold text-slate-500 uppercase tracking-wide">{term}</dt>
      <dd className="text-sm text-slate-800 mt-0.5">{val}</dd>
    </div>
  )
}
