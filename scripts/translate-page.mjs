#!/usr/bin/env node
/**
 * Translate an EN page.js into one or more locales using OpenAI.
 *
 * Why this exists:
 *   Wave-rewrite (Tier 1-2 AdSense doorway fix) produced 32 long-form
 *   EN landing pages. Translating them to 9 locales by hand is ~288
 *   files. This script translates JSX string content while preserving
 *   imports, component structure, hrefs (re-prefixed with locale),
 *   classNames, hreflang LANGS, schema markup. Output is reviewable
 *   per-file like any other page.js.
 *
 * Usage:
 *   node scripts/translate-page.mjs <src-slug> <locale> [locale...]
 *   node scripts/translate-page.mjs wav-to-text fr de es
 *   node scripts/translate-page.mjs --wave=wave4 fr   # all 6 wave-4 pages
 *
 * Output: app/<locale>/<src-slug>/page.js
 *
 * Cost: roughly $0.02 per page via gpt-4o-mini, $0.20 via gpt-4o.
 * Default is gpt-4o (better at preserving complex JSX).
 */

import fs from 'node:fs'
import path from 'node:path'
import { execFileSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import dotenv from 'dotenv'
import OpenAI from 'openai'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
dotenv.config({ path: path.join(ROOT, '.env.local') })

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
const MODEL = process.env.TRANSLATE_MODEL || 'gpt-4o'

const LOCALES = {
  fr: 'French (France)',
  de: 'German',
  es: 'Spanish (Spain)',
  ru: 'Russian',
  it: 'Italian',
  pt: 'Portuguese (Portugal)',
  pl: 'Polish',
  ja: 'Japanese',
  ko: 'Korean',
}

const WAVES = {
  // Format landings on FormatPageLayout (7 pages — mp3 already piloted by hand)
  formats: ['transcribe-video-to-text', 'wav-to-text', 'm4a-to-text', 'flac-to-text', 'ogg-to-text', 'webm-to-text', 'aac-to-text'],

  // Use-case landings on UseCaseLayout (13 pages, includes youtube-to-text)
  usecases: ['meeting-transcription', 'zoom-transcription', 'google-meet-transcription', 'teams-meeting-transcription',
             'interview-transcription', 'lecture-transcription', 'business-transcription',
             'webinar-transcription', 'sermon-transcription', 'dictation-to-text',
             'podcast-transcription', 'voice-memo-to-text', 'youtube-to-text'],

  // Tool landings on ConverterPageLayout (11 pages)
  tools: ['mp4-to-mp3', 'wav-to-mp3', 'webm-to-mp3', 'flac-to-mp3', 'aac-to-mp3', 'wma-to-mp3', 'm4a-to-mp3',
          'mp3-to-m4a', 'mp3-to-wav', 'free-srt-generator', 'timestamped-transcription'],

  // Language landings on LanguagePageLayout (4 pages)
  languages: ['french-speech-to-text', 'spanish-audio-to-text', 'german-audio-transcription', 'multilingual-transcription'],

  // Legacy wave names kept for reverse compat with old runs
  wave4: ['wav-to-text', 'm4a-to-text', 'flac-to-text', 'ogg-to-text', 'webm-to-text', 'aac-to-text'],
  alternatives: ['descript-alternative', 'fireflies-alternative', 'otter-alternative', 'notta-alternative', 'turboscribe-alternative'],
  converters: ['aac-to-mp3', 'wma-to-mp3', 'm4a-to-mp3', 'flac-to-mp3', 'wav-to-mp3', 'webm-to-mp3', 'mp4-to-mp3', 'mp3-to-wav', 'mp3-to-m4a'],
  meetings: ['zoom-transcription', 'google-meet-transcription', 'teams-meeting-transcription', 'meeting-transcription', 'business-transcription'],
  generic: ['transcribe-audio-to-text', 'transcribe-mp3-to-text', 'transcribe-video-to-text', 'free-srt-generator', 'youtube-to-text'],
}

function camelCase(s) {
  return s.split('-').map(w => w[0].toUpperCase() + w.slice(1)).join('')
}

function buildHomepageSystemPrompt(localeCode, localeName) {
  return `You are translating the Mictoo homepage from English to ${localeName}.

This file is app/page.js — it has NO layout wrapper, all sections are inlined.
The output goes to app/${localeCode}/page.js.

PRESERVE EXACTLY (do not translate, do not modify):
- All import statements (Image, UploadZone, HeroChips, HeroCounter)
- The Icons const with all SVG paths (SVG code stays byte-identical)
- The webAppSchema and faqSchema JSON-LD structure and keys — translate only the string VALUES (name, description, featureList items) into ${localeName}
- JSX tag names, attributes, classNames, className strings, event handlers
- The FAQ constant structure (array of {q, a}) — translate the q and a string values
- Function name (rename Home → ${camelCase(localeCode)}Home)

TRANSLATE INTO ${localeName.toUpperCase()}:
- metadata.title (add if missing — infer from EN homepage: "Free AI Audio & Video Transcription to Text — Mictoo")
- metadata.description
- openGraph.title, openGraph.description
- twitter.title, twitter.description
- webAppSchema.description, webAppSchema.featureList[] strings
- faqSchema is auto-derived from FAQ — only FAQ needs translation
- The Eyebrow badge text (e.g. "Free AI transcription · No signup")
- The h1 first line and second line (span)
- The subtitle <p>
- Section h2 titles ("Convert any file to text", "How Mictoo works", "Why choose Mictoo?", "Built for every voice", "Free transcription without the subscription", "Frequently asked questions")
- All tool grid labels ("MP3 to Text", "Video to Text", etc.)
- All howItWorks step titles and descriptions
- All whyChoose card titles and descriptions
- All audience segment labels + desc ("Students", "Podcasters", etc.)
- Comparison table headers ("Free", "No signup", "AI Summary", "Translation")
- Comparison Mictoo row tag ("Free for everyone") and cell labels
- Competitor tag descriptions ("Editor-first workflow", etc.)
- Table caption below the comparison
- Bottom CTA plate: headline, subtitle, trust chips (No signup / No credit card / 50+ languages), CTA button ("Start Transcribing")

STYLE RULES (very important):
- Conversational specialist voice. Short sentences. No corporate buzzwords ("synergy", "leverage", "robust", "cutting-edge", "seamless").
- NO em-dashes (—) or en-dashes (–) anywhere. Use commas, parentheses, colons, or periods instead.
- Keep brand names in original English: Mictoo, Whisper, OpenAI, Groq, Vercel, Descript, Fireflies, TurboScribe, Otter, Notta, GPT-4o, ChatGPT.
- For German: 'Sie' formal address. For French: 'vous'. For Spanish: 'tú'. For Russian: 'вы' (formal). For Japanese: です/ます form. For Korean: 합니다 form.

CRITICAL — APOSTROPHES:
- For ANY language with apostrophes in normal words (French l'audio / d'un, Italian un'altra, Portuguese p'ra) you MUST use TYPOGRAPHIC ’ (U+2019), NOT ASCII '.
- Correct: 'l’audio'  Wrong: 'l'audio' (breaks JS parsing)
- In JSX text between tags, use ’ for typographic quality.

URL REWRITING:
- alternates.canonical: change 'https://mictoo.com' → 'https://mictoo.com/${localeCode}'
- alternates.languages: KEEP the object as-is (all URLs stay pointing to original absolute paths for hreflang)
- openGraph.url: same change as canonical (add /${localeCode})
- webAppSchema.url: change to 'https://mictoo.com/${localeCode}'
- All <a href="/SLUG"> in the tool grid, audience segments, and comparison table become <a href="/${localeCode}/SLUG">
- Do NOT touch href="#tool" or href="#how-it-works" or href="#faq" (fragment anchors stay as-is)

LOCALIZATION PROPS (required):
- HeroChips receives locale="${localeCode}" (add if missing)
- HeroCounter receives locale="${localeCode}" (add if missing)
- UploadZone receives BOTH defaultLanguage="${localeCode}" AND locale="${localeCode}" (add if missing). Existing enableYouTubeUrl or other props stay.

OUTPUT:
- Return the COMPLETE translated page.js as raw code, no markdown fences, no explanation.
- Must parse as valid JSX. Same imports, same overall structure. Only text content and hrefs change.`
}

function buildSystemPrompt(localeCode, localeName) {
  return `You are translating a Next.js page.js file from English to ${localeName}.

PRESERVE EXACTLY (do not translate, do not modify):
- All import statements
- All JSX tag names, attributes, classNames, href values
- Variable names, function names, const names
- The LANGS hreflang object structure (you will update its keys per rules below)
- URL paths in canonical and openGraph url (you will prefix with locale per rules below)
- JSX structure, indentation, braces, fragments
- HTML entities, code samples inside <pre><code>
- Emoji characters
- The schema-org JSON markup if present (Article, FAQPage, etc.) — translate "headline" / "description" / "name" / "text" string values, leave keys and structure intact
- href="/some-slug" attribute values — re-prefix with locale: href="/${localeCode}/some-slug"
- The "/" root href stays as "/${localeCode}"

TRANSLATE INTO ${localeName.toUpperCase()}:
- All user-facing prose: badge, h1, subtitle, all howItWorks/whyUse/useCases/proTips titles and descriptions, valueBlock prose, deepDive prose, all FAQ questions and answers, epilogueSection text, relatedLinks labels and desc fields
- The metadata.title, metadata.description, openGraph.title, openGraph.description, twitter.title, twitter.description
- Pricing units, time units, ordinal numbers (use locale-correct conventions)

STYLE RULES (very important):
- Conversational specialist voice. Like an experienced engineer talking to a peer. Short sentences. No corporate buzzwords ("synergy", "leverage", "robust", "cutting-edge", "seamless").
- NO em-dashes (—) or en-dashes (–) anywhere. Use commas, parentheses, colons, or periods instead.
- Keep technical terms in their natural ${localeName} form. Brand names (Mictoo, Whisper, GPT-4o, ffmpeg, Premiere, YouTube, Zoom, Google Meet, Microsoft Teams, AdSense, Vercel) stay in original English.
- For German: use 'Sie' formal address. For French: use 'vous'. For Spanish: use 'tú'. For Russian: use 'вы' (formal). For Japanese: use です/ます form. For Korean: use 합니다 form.
- Numbers in metric: "60 MB", "30 minutes" → keep "MB" and similar units; translate "minutes" / "seconds" / "hours" to locale word.

CRITICAL — APOSTROPHES (this WILL break the build if you get it wrong):
- For ANY language containing apostrophes in normal words (French l'audio / d'un / qu'il, Italian un'altra / l'audio, Portuguese p'ra, Polish ż'em, etc.) you MUST use the TYPOGRAPHIC right-single-quotation-mark character: U+2019 ’ (right single quote, looks like a slanted apostrophe).
- DO NOT use the ASCII straight apostrophe (U+0027 ') inside JavaScript string literals — it will collide with the surrounding single quotes and break parsing.
- Correct: desc: 'taux d’échantillonnage de l’audio'  (note the ’ character)
- Wrong:   desc: 'taux d'échantillonnage de l'audio'   (ASCII ', breaks JS)
- Inside JSX text (between tags), both work, but use ’ consistently for typographic quality.
- In double-quoted JS strings ("..."), ASCII apostrophe is safe — but stay consistent: prefer ’ everywhere for clean French/Italian/Portuguese typography.
- For quotation marks around quoted phrases inside prose, use locale-appropriate marks (French «…», German „…", Spanish «…» or "…", Italian «…», Russian «…», Japanese 「…」, Korean "…", Polish „…").

URL REWRITING RULES:
- The LANGS object keys stay the same (en, fr, de, es, ru, it, pt, pl, ja, ko, x-default). Values keep their existing URL — DO NOT modify.
- alternates.canonical: change from 'https://mictoo.com/SLUG' to 'https://mictoo.com/${localeCode}/SLUG' (keep the same SLUG, just add /${localeCode}/)
- openGraph.url: same change as canonical
- All <a href="/SLUG"> in JSX become <a href="/${localeCode}/SLUG">
- href="/" stays as href="/${localeCode}"

COMPONENT NAME:
- The export default function name should be prefixed with ${camelCase(localeCode)} (e.g. function WavToTextPage → function ${camelCase(localeCode)}WavToTextPage)

LOCALE PROP (required for new-shell layouts):
- If the source uses FormatPageLayout, UseCaseLayout, ConverterPageLayout, or LanguagePageLayout, you MUST add locale="${localeCode}" as the first prop (before any existing prop). Example:
    <FormatPageLayout
      locale="${localeCode}"
      badge="…"
      ...
    />
  This tells the layout to render its internal chrome (tabs, sidebar labels, FAQ header, table headers, More-tools cards) in ${localeName}.
- Do NOT add locale prop to LandingLayout or ComparisonLayout (they use their own defaultLanguage prop, which stays untouched).

LANGS CONST:
- If the source has hreflang URLs inline in alternates.languages, refactor them into a LANGS const at the top of the file (above metadata) following this template:

const LANGS = {
  'en': 'https://mictoo.com/SLUG',
  'fr': 'https://mictoo.com/fr/SLUG',
  'de': 'https://mictoo.com/de/SLUG',
  'es': 'https://mictoo.com/es/SLUG',
  'ru': 'https://mictoo.com/ru/SLUG',
  'it': 'https://mictoo.com/it/SLUG',
  'pt': 'https://mictoo.com/pt/SLUG',
  'pl': 'https://mictoo.com/pl/SLUG',
  'ja': 'https://mictoo.com/ja/SLUG',
  'ko': 'https://mictoo.com/ko/SLUG',
  'x-default': 'https://mictoo.com/SLUG',
}

Then alternates: { canonical: 'https://mictoo.com/${localeCode}/SLUG', languages: LANGS }

OUTPUT:
- Return the COMPLETE translated page.js as a single code block, no explanation, no markdown wrapping, just the raw .js source.
- The output must parse as valid JSX. Same import paths, same component used (LandingLayout or ComparisonLayout etc).
- Preserve every prop the source page passes to the layout, including enableYouTubeUrl, defaultLanguage, deepDive, valueBlock, epilogueSection.`
}

async function translateOne(slug, localeCode) {
  const localeName = LOCALES[localeCode]
  if (!localeName) {
    console.error(`✗ Unknown locale: ${localeCode}`)
    return false
  }
  // Special case: --homepage source is app/page.js, dst is app/<locale>/page.js
  const isHomepage = slug === '__homepage__'
  const srcPath = isHomepage
    ? path.join(ROOT, 'app', 'page.js')
    : path.join(ROOT, 'app', slug, 'page.js')
  if (!fs.existsSync(srcPath)) {
    console.error(`✗ Source not found: ${srcPath}`)
    return false
  }
  const dstPath = isHomepage
    ? path.join(ROOT, 'app', localeCode, 'page.js')
    : path.join(ROOT, 'app', localeCode, slug, 'page.js')
  fs.mkdirSync(path.dirname(dstPath), { recursive: true })

  const src = fs.readFileSync(srcPath, 'utf8')
  const sys = isHomepage
    ? buildHomepageSystemPrompt(localeCode, localeName)
    : buildSystemPrompt(localeCode, localeName)
  const user = isHomepage
    ? `HOMEPAGE (/) → /${localeCode}/\n\nSOURCE FILE:\n\n${src}`
    : `SLUG: ${slug}\n\nSOURCE FILE:\n\n${src}`

  const displaySlug = isHomepage ? '(homepage)' : slug
  console.log(`→ ${localeCode}/${displaySlug} (${(src.length / 1024).toFixed(1)} KB in)`)
  const t0 = Date.now()
  const resp = await openai.chat.completions.create({
    model: MODEL,
    messages: [
      { role: 'system', content: sys },
      { role: 'user', content: user },
    ],
    temperature: 0.3,
    max_tokens: 16000,
  })
  const out = resp.choices[0].message.content
  // Strip ``` fences if model added them
  let cleaned = out.replace(/^```(?:jsx?|javascript)?\n?/m, '').replace(/\n?```\s*$/m, '')

  // POST-FIX: ASCII apostrophes inside French/Italian/Portuguese/Polish
  // contractions break JS parsing when they land inside single-quoted strings
  // (e.g. desc: 'taux d'échantillonnage'). The model is instructed to use
  // U+2019 ’ but slips occasionally. We target ONLY the contraction pattern
  // (letter + ' + letter) globally — this is too narrow to false-match real
  // JS syntax (which never has letter'letter as a delimiter pattern: '/fr/...'
  // has space-or-slash on each side, not a letter).
  //
  // Examples of what this fixes:
  //   d'échantillonnage  → d’échantillonnage
  //   l'audio            → l’audio
  //   qu'il              → qu’il
  //   un'altra (italian) → un’altra
  //
  // What this leaves alone:
  //   '/fr/some-slug'    (slash before/after, not letters)
  //   'PCM 8 bits'       (space after ', not letter)
  //   'wav-to-text'      (letter on each side of -, no ' between letters)
  //   "double quoted"    (no ASCII apostrophe to worry about)
  //
  // Includes Latin Extended (À-ÖØ-öø-ÿ) and Latin Extended-A (Ā-ſ) for
  // Polish (ż, ó, ł), French (é, è, à, ç), Italian (ò, ù), Portuguese (ã, õ),
  // Spanish (ñ), German (ä, ö, ü). Cyrillic and CJK don't use ASCII contractions.
  cleaned = cleaned.replace(
    /([a-zA-ZÀ-ÖØ-öø-ÿĀ-ſ])'([a-zA-ZÀ-ÖØ-öø-ÿĀ-ſ])/g,
    '$1’$2'
  )

  fs.writeFileSync(dstPath, cleaned)
  const dt = ((Date.now() - t0) / 1000).toFixed(1)
  const inTok = resp.usage?.prompt_tokens ?? 0
  const outTok = resp.usage?.completion_tokens ?? 0
  console.log(`  ✓ ${(cleaned.length / 1024).toFixed(1)} KB out in ${dt}s (${inTok}/${outTok} tok)`)

  // VALIDATION 1: structural sanity
  const checks = ['import LandingLayout', 'import ComparisonLayout',
                  'import FormatPageLayout', 'import UseCaseLayout',
                  'import ConverterPageLayout', 'import LanguagePageLayout',
                  'export default function']
  if (!checks.some(c => cleaned.includes(c))) {
    console.warn(`  ⚠ Output may be missing structural elements: ${dstPath}`)
  }
  // VALIDATION 1b: locale prop presence when new-shell layout is used
  const usesNewShell = /FormatPageLayout|UseCaseLayout|ConverterPageLayout|LanguagePageLayout/.test(cleaned)
  if (usesNewShell && !cleaned.includes(`locale="${localeCode}"`)) {
    console.warn(`  ⚠ Missing locale="${localeCode}" on new-shell layout: ${dstPath}`)
  }
  // VALIDATION 2: style rule (em/en dash)
  if (/—|–/.test(cleaned)) {
    console.warn(`  ⚠ Output contains em/en dashes (style rule violated): ${dstPath}`)
  }
  // VALIDATION 3: REAL parse via esbuild JSX (node --check ignores JSX so it
  // happily passes broken apostrophes; esbuild catches them)
  try {
    execFileSync('npx', ['--yes', 'esbuild', '--loader:.js=jsx', dstPath], {
      stdio: ['ignore', 'ignore', 'pipe'],
    })
  } catch (e) {
    const stderr = e.stderr ? e.stderr.toString() : ''
    const firstLine = stderr.split('\n').find(l => l.includes('ERROR')) || stderr.slice(0, 200)
    console.error(`  ✗ JSX PARSE ERROR in ${dstPath}`)
    console.error(`    ${firstLine.trim()}`)
    console.error(`    (post-fix did not catch this case — please review the file)`)
  }
  return true
}

async function main() {
  const args = process.argv.slice(2)
  if (args.length < 2) {
    console.log(`Usage:
  node scripts/translate-page.mjs <slug-or-wave> <locale> [locale...]

Examples:
  node scripts/translate-page.mjs wav-to-text fr
  node scripts/translate-page.mjs wav-to-text fr de es
  node scripts/translate-page.mjs --wave=wave4 fr
  node scripts/translate-page.mjs --wave=generic fr de es ru it pt pl ja ko
  node scripts/translate-page.mjs --homepage de es ru it pt pl ja ko

Waves: ${Object.keys(WAVES).join(', ')}
Locales: ${Object.keys(LOCALES).join(', ')}
`)
    process.exit(1)
  }

  let slugs
  let localeArgs
  if (args[0] === '--homepage') {
    slugs = ['__homepage__']
    localeArgs = args.slice(1)
  } else if (args[0].startsWith('--wave=')) {
    const wave = args[0].slice(7)
    slugs = WAVES[wave]
    if (!slugs) {
      console.error(`Unknown wave: ${wave}`)
      process.exit(1)
    }
    localeArgs = args.slice(1)
  } else {
    slugs = [args[0]]
    localeArgs = args.slice(1)
  }

  console.log(`Slugs: ${slugs.join(', ')}`)
  console.log(`Locales: ${localeArgs.join(', ')}`)
  console.log(`Model: ${MODEL}`)
  console.log('')

  let ok = 0, fail = 0
  for (const slug of slugs) {
    for (const locale of localeArgs) {
      try {
        const r = await translateOne(slug, locale)
        if (r) ok++; else fail++
      } catch (e) {
        console.error(`✗ ${locale}/${slug}: ${e.message}`)
        fail++
      }
    }
  }
  console.log(`\nDone: ${ok} ok, ${fail} failed`)
}

main()
