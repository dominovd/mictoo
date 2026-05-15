import { NextResponse } from 'next/server'
import OpenAI from 'openai'

export const runtime = 'nodejs'
export const maxDuration = 30

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

// Friendly language names for the system prompt (so the model writes
// output in the user's UI language, not necessarily the spoken language).
const LANG_NAMES = {
  en: 'English',
  fr: 'French',
  de: 'German',
  es: 'Spanish',
  ru: 'Russian',
}

// Hard cap on the transcript we send to the model. gpt-4o-mini takes 128k
// context, but charging stays cheap and replies stay focused if we trim.
const MAX_CHARS = 40000

function buildPrompt(transcript, locale) {
  const lang = LANG_NAMES[locale] || 'English'
  return `You analyze transcripts of recorded audio and produce a brief, structured summary.

Always write your output in ${lang}, regardless of the transcript's spoken language.

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

    const locale = typeof body.locale === 'string' && LANG_NAMES[body.locale] ? body.locale : 'en'

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      response_format: { type: 'json_object' },
      messages: [
        { role: 'system', content: 'You are a precise summarizer that outputs only valid JSON.' },
        { role: 'user', content: buildPrompt(transcript, locale) },
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
