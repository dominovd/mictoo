import { NextResponse } from 'next/server'
import OpenAI from 'openai'

export const runtime = 'nodejs'
export const maxDuration = 30

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

// Map both ISO codes (from user picker) and Whisper's full-name responses
// to display names. Whisper returns lowercase full names like "ukrainian",
// "english", "portuguese"; the user picker uses ISO codes like "en", "uk".
// We accept either form and normalize to the English display name.
const LANG_NAMES = {
  en: 'English',           english: 'English',
  fr: 'French',            french: 'French',
  de: 'German',            german: 'German',
  es: 'Spanish',           spanish: 'Spanish',
  ru: 'Russian',           russian: 'Russian',
  uk: 'Ukrainian',         ukrainian: 'Ukrainian',
  pt: 'Portuguese',        portuguese: 'Portuguese',
  it: 'Italian',           italian: 'Italian',
  nl: 'Dutch',             dutch: 'Dutch',
  pl: 'Polish',            polish: 'Polish',
  tr: 'Turkish',           turkish: 'Turkish',
  ja: 'Japanese',          japanese: 'Japanese',
  ko: 'Korean',            korean: 'Korean',
  zh: 'Chinese',           chinese: 'Chinese',
  ar: 'Arabic',            arabic: 'Arabic',
  hi: 'Hindi',             hindi: 'Hindi',
  cs: 'Czech',             czech: 'Czech',
  sv: 'Swedish',           swedish: 'Swedish',
  fi: 'Finnish',           finnish: 'Finnish',
  no: 'Norwegian',         norwegian: 'Norwegian',
  da: 'Danish',            danish: 'Danish',
  he: 'Hebrew',            hebrew: 'Hebrew',
  id: 'Indonesian',        indonesian: 'Indonesian',
  th: 'Thai',              thai: 'Thai',
  vi: 'Vietnamese',        vietnamese: 'Vietnamese',
  el: 'Greek',             greek: 'Greek',
  hu: 'Hungarian',         hungarian: 'Hungarian',
  ro: 'Romanian',          romanian: 'Romanian',
  ms: 'Malay',             malay: 'Malay',
}

function resolveLanguageName(value) {
  if (!value || typeof value !== 'string') return null
  const key = value.toLowerCase().trim()
  if (LANG_NAMES[key]) return LANG_NAMES[key]
  // Unknown — fall back to capitalized form so the model still has a hint.
  return key.charAt(0).toUpperCase() + key.slice(1)
}

// Hard cap on the transcript we send to the model. gpt-4o-mini takes 128k
// context, but charging stays cheap and replies stay focused if we trim.
const MAX_CHARS = 40000

function buildPrompt(transcript, targetLanguageName) {
  return `You analyze transcripts of recorded audio and produce a brief, structured summary.

Write your output in ${targetLanguageName}. Use natural, idiomatic ${targetLanguageName}.

Output strictly valid JSON with these fields:
- "summary": a 2-3 sentence overview. No introductory phrases like "This transcript is about". Just the substance.
- "keyPoints": an array of 3-5 short bullet strings (each under 120 chars). Factual, specific. No filler.
- "actionItems": an array of action items mentioned in the recording (each under 120 chars). Empty array if none.

Transcript:
"""
${transcript}
"""`
}

export async function POST(request) {
  try {
    const body = await request.json().catch(() => null)
    if (!body || typeof body.transcript !== 'string') {
      return NextResponse.json({ error: 'No transcript provided.' }, { status: 400 })
    }

    const transcript = body.transcript.trim().slice(0, MAX_CHARS)
    if (transcript.length < 30) {
      // Too short — skip the model call, would just produce noise.
      return NextResponse.json(
        { error: 'Transcript too short to summarize.' },
        { status: 400 }
      )
    }

    // Priority: explicit spokenLanguage (from Whisper or user picker) → UI locale → English.
    // We prefer spoken language so a Ukrainian recording gets a Ukrainian summary
    // even when the visitor is browsing the EN locale of the site.
    const targetLanguageName =
      resolveLanguageName(body.spokenLanguage) ||
      resolveLanguageName(body.locale) ||
      'English'

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      response_format: { type: 'json_object' },
      messages: [
        { role: 'system', content: 'You are a precise summarizer that outputs only valid JSON.' },
        { role: 'user', content: buildPrompt(transcript, targetLanguageName) },
      ],
      temperature: 0.3,
    })

    const raw = completion.choices?.[0]?.message?.content ?? '{}'
    let parsed
    try {
      parsed = JSON.parse(raw)
    } catch {
      return NextResponse.json({ error: 'Could not parse summary.' }, { status: 502 })
    }

    // Normalize shape — guard against missing fields or wrong types.
    const summary = typeof parsed.summary === 'string' ? parsed.summary.trim() : ''
    const keyPoints = Array.isArray(parsed.keyPoints)
      ? parsed.keyPoints.filter(s => typeof s === 'string').map(s => s.trim()).filter(Boolean)
      : []
    const actionItems = Array.isArray(parsed.actionItems)
      ? parsed.actionItems.filter(s => typeof s === 'string').map(s => s.trim()).filter(Boolean)
      : []

    return NextResponse.json({ summary, keyPoints, actionItems })
  } catch (err) {
    console.error('[summarize]', err?.status, err?.message)
    if (err?.status === 429) {
      return NextResponse.json(
        { error: 'Too many requests. Please wait and try again.' },
        { status: 429 }
      )
    }
    return NextResponse.json(
      { error: err?.message || 'Summary failed.' },
      { status: 500 }
    )
  }
}

const methodNotAllowed = () =>
  NextResponse.json({ error: 'Method not allowed.' }, { status: 405, headers: { Allow: 'POST' } })

export const GET = methodNotAllowed
export const HEAD = methodNotAllowed
export const PUT = methodNotAllowed
export const PATCH = methodNotAllowed
export const DELETE = methodNotAllowed
export const OPTIONS = methodNotAllowed
