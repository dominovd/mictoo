// Deepgram fallback tier for transcription.
//
// Cost-tier-ordered fallback chain looks like this end-to-end:
//   1. Groq whisper-large-v3 (~$0.111/h) — primary, free tier covers most days
//   2. Deepgram Nova-3 (~$0.258/h)       — middle, $200 free credit ≈ 775h
//   3. OpenAI Whisper-1 ($0.36/h)        — last resort, capped at 10 MB
//
// Deepgram lives in the middle because (a) it's ~28% cheaper than OpenAI,
// (b) it has a huge starter credit that effectively zeroes the fallback bill
// at our current scale, and (c) Nova-3's multilingual mode handles the same
// ~40 languages we see in real traffic.
//
// Output is normalised to the same shape Groq/OpenAI Whisper returns
// (`{ text, segments[], language }`) so the rest of the pipeline — SRT
// export, paragraph splitting, transcript history — doesn't need to know
// which provider produced the result.

import { createClient } from '@deepgram/sdk'

const deepgram = process.env.DEEPGRAM_API_KEY
  ? createClient(process.env.DEEPGRAM_API_KEY)
  : null

export function isDeepgramAvailable() {
  return !!deepgram
}

/**
 * Transcribe an audio buffer using Deepgram Nova-3.
 *
 * @param {Buffer} buffer  Raw audio bytes (same buffer used for Whisper).
 * @param {object} opts
 * @param {string} [opts.fileType]  MIME type (e.g. "audio/mpeg"). Passed to
 *                                  Deepgram as `mimetype` to disambiguate
 *                                  containers it can't sniff from bytes alone.
 * @param {string} [opts.language]  Whisper-style ISO code ("en", "ru", "fr").
 *                                  If omitted, we use Nova-3 multilingual mode
 *                                  which auto-detects and can code-switch.
 *
 * @returns {Promise<{ text: string, segments: Array, language: string|null }>}
 *
 * Throws on transport errors, empty transcripts, or unsupported language.
 * The caller catches and continues down the fallback chain.
 */
export async function transcribeWithDeepgram(buffer, { fileType, language } = {}) {
  if (!deepgram) {
    throw new Error('Deepgram not configured (DEEPGRAM_API_KEY missing)')
  }

  // Nova-3 supports ~40 languages explicitly. If the user picked one we
  // honour it directly (better accuracy than auto-detect). Otherwise use
  // 'multi' — Nova-3's multilingual mode does auto-detection plus mid-clip
  // code-switching. Whisper-only languages (e.g. some less-common dialects)
  // may 400 here; the caller falls through to OpenAI in that case.
  const dgLanguage = language || 'multi'

  const { result, error } = await deepgram.listen.prerecorded.transcribeFile(
    buffer,
    {
      model: 'nova-3',
      smart_format: true,    // punctuation, paragraphs, date/number formatting
      punctuate: true,        // explicit even though smart_format implies it
      utterances: true,       // per-pause segmentation → Whisper-style segments[]
      language: dgLanguage,
      ...(fileType ? { mimetype: fileType } : {}),
    }
  )

  if (error) {
    // Deepgram SDK surfaces { error: <message-or-object> } on failure.
    // Re-throw as a real Error so the caller's try/catch sees a stack.
    const msg = typeof error === 'string' ? error : (error?.message || JSON.stringify(error))
    const e = new Error(`Deepgram error: ${msg}`)
    if (error?.status) e.status = error.status
    throw e
  }
  if (!result) {
    throw new Error('Deepgram returned no result')
  }

  return normalizeDeepgramResponse(result)
}

// Map Deepgram's response shape onto Whisper's verbose_json shape so callers
// can treat the two interchangeably. Specifically:
//
//   Whisper                           Deepgram
//   ──────────────                    ──────────────────────────────────────
//   text                              results.channels[0].alternatives[0].transcript
//   language                          results.channels[0].detected_language
//                                     (or metadata.language as fallback)
//   segments[].{start,end,text}       results.utterances[]
//
// If Deepgram returned no utterances (rare — happens on very short clips),
// we synthesise a single segment from the full transcript so SRT export
// still produces a valid file.
function normalizeDeepgramResponse(result) {
  const channel = result?.results?.channels?.[0]
  const alt = channel?.alternatives?.[0]

  const text = (alt?.transcript || '').trim()
  if (!text) {
    throw new Error('Deepgram returned empty transcript')
  }

  const utterances = result?.results?.utterances || []
  const segments = utterances.length > 0
    ? utterances.map((u, idx) => ({
        id: idx,
        start: Number(u.start) || 0,
        end: Number(u.end) || 0,
        text: (u.transcript || '').trim(),
      }))
    : [
        {
          id: 0,
          start: 0,
          end: Number(result?.metadata?.duration) || 0,
          text,
        },
      ]

  const language =
    channel?.detected_language ||
    result?.metadata?.language ||
    null

  return { text, segments, language }
}
