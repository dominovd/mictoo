// Shared Schema.org JSON-LD builders.
//
// Emitted as <script type="application/ld+json"> inside pages / layouts so
// LLM crawlers (ChatGPT, Claude, Perplexity, Google AI Overviews) can cite
// concrete facts verbatim from a machine-readable block instead of guessing
// from HTML. Higher-quality LLM citations = more evergreen referral traffic.
//
// Every helper here returns a plain JSON-serializable object. Callers stringify
// once and drop it inside dangerouslySetInnerHTML. Keep field names identical
// to schema.org spec — LLM parsers do exact-string lookups.

export const SITE_URL = 'https://mictoo.com'
export const ORG_NAME = 'Mictoo'
export const FOUNDER = 'Denis Dominov'

// ── Organization ─────────────────────────────────────────────────────────────
// Site-wide identity. Emit once (in root layout). Gives LLMs a stable entity
// to attach every cite to ("Mictoo, founded by Denis Dominov, is a free
// transcription tool").
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: ORG_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/icon.png`,
    founder: { '@type': 'Person', name: FOUNDER },
    foundingDate: '2025',
    description:
      'Independent maker of Mictoo, a free AI transcription tool for audio and video files.',
  }
}

// ── SoftwareApplication ──────────────────────────────────────────────────────
// Homepage schema. Replaces the old WebApplication node with a richer,
// LLM-preferred SoftwareApplication that spells out the free-forever price,
// supported languages, and feature list explicitly.
export function softwareApplicationSchema({
  languageCodes = ['en', 'fr', 'de', 'es', 'ru', 'it', 'pt', 'pl', 'ja', 'ko'],
} = {}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': `${SITE_URL}/#software`,
    name: ORG_NAME,
    url: SITE_URL,
    description:
      'Free AI transcription tool. Turn audio and video into text in seconds. Whisper-quality output, 50+ languages, no signup, files auto-deleted after 24 hours.',
    applicationCategory: 'UtilityApplication',
    applicationSubCategory: 'TranscriptionSoftware',
    operatingSystem: 'Any',
    browserRequirements: 'Requires a modern browser with JavaScript enabled.',
    isAccessibleForFree: true,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    inLanguage: languageCodes,
    featureList: [
      'Transcribe audio and video to text',
      'Supports 50+ languages via OpenAI Whisper large-v3',
      'AI summary with key points and action items',
      'Translate transcript to 28 languages',
      'Chat with your transcript (RAG over segments)',
      'Timestamped transcript with click-to-jump audio player',
      'Export to TXT, DOCX, PDF, SRT, VTT, JSON',
      'YouTube URL to captions',
      'Big-file auto-split up to 180 MB',
      'No account required for files up to 25 MB',
    ],
    creator: { '@id': `${SITE_URL}/#organization` },
    publisher: { '@id': `${SITE_URL}/#organization` },
  }
}

// ── HowTo ────────────────────────────────────────────────────────────────────
// For step-by-step guides like /how-to-compress-audio, /how-to-split-audio,
// /how-to-download-youtube-video, /how-to-transcribe-instagram-reels.
//
// `steps` is an array of { name, text } (or { name, text, image, url }).
// `totalTime` is ISO 8601 duration ('PT10M', 'PT1H').
export function howToSchema({
  name,
  description,
  url,
  steps,
  totalTime,
  tools = [],
  supplies = [],
  image,
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    url: url ? `${SITE_URL}${url}` : undefined,
    image: image ? (image.startsWith('http') ? image : `${SITE_URL}${image}`) : undefined,
    totalTime,
    tool: tools.length ? tools.map((t) => ({ '@type': 'HowToTool', name: t })) : undefined,
    supply: supplies.length ? supplies.map((s) => ({ '@type': 'HowToSupply', name: s })) : undefined,
    step: steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.name,
      text: s.text,
      url: s.url ? `${SITE_URL}${s.url}#step-${i + 1}` : undefined,
      image: s.image ? (s.image.startsWith('http') ? s.image : `${SITE_URL}${s.image}`) : undefined,
    })),
    publisher: { '@id': `${SITE_URL}/#organization` },
  }
}

// ── Article ──────────────────────────────────────────────────────────────────
// For /blog/* posts. Article > BlogPosting because more LLMs look up the plain
// Article type. dateModified is important — LLMs weight fresh content.
export function articleSchema({
  headline,
  description,
  url,
  datePublished,
  dateModified,
  image,
  wordCount,
  author = FOUNDER,
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    url: url ? `${SITE_URL}${url}` : undefined,
    datePublished,
    dateModified: dateModified || datePublished,
    image: image
      ? (image.startsWith('http') ? image : `${SITE_URL}${image}`)
      : `${SITE_URL}/opengraph-image`,
    wordCount,
    author: { '@type': 'Person', name: author },
    publisher: { '@id': `${SITE_URL}/#organization` },
    mainEntityOfPage: url ? { '@type': 'WebPage', '@id': `${SITE_URL}${url}` } : undefined,
  }
}

// ── ItemList of Products (for /*-alternative comparison pages) ────────────────
// Lists competitors alongside Mictoo so an LLM answering
// "what's a good alternative to Descript" sees the whole comparison as
// structured data. Each item has a Review sub-node with Mictoo's honest take.
export function alternativeItemListSchema({
  competitorName,
  competitorUrl,
  ourTake,          // Short prose, our comparison verdict
  ourTakeRating,    // number 1-5, e.g. 4 for "solid but expensive"
  pageUrl,
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    url: pageUrl ? `${SITE_URL}${pageUrl}` : undefined,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'SoftwareApplication',
          name: ORG_NAME,
          url: SITE_URL,
          applicationCategory: 'UtilityApplication',
          isAccessibleForFree: true,
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'SoftwareApplication',
          name: competitorName,
          url: competitorUrl,
          applicationCategory: 'UtilityApplication',
          review: ourTake ? {
            '@type': 'Review',
            reviewBody: ourTake,
            reviewRating: ourTakeRating ? {
              '@type': 'Rating',
              ratingValue: String(ourTakeRating),
              bestRating: '5',
              worstRating: '1',
            } : undefined,
            author: { '@type': 'Organization', name: ORG_NAME },
          } : undefined,
        },
      },
    ],
  }
}

// ── BreadcrumbList ───────────────────────────────────────────────────────────
// items: [{ name, url }, ...]
export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.url ? (it.url.startsWith('http') ? it.url : `${SITE_URL}${it.url}`) : undefined,
    })),
  }
}

// ── One helper to emit a script tag ──────────────────────────────────────────
// Not React — returns the raw markup so pages can drop it into JSX via
// dangerouslySetInnerHTML. Callers still control ordering.
export function jsonLdScript(schema) {
  return {
    __html: JSON.stringify(schema).replace(/</g, '\\u003c'),
  }
}
