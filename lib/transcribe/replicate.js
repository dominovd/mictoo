// Replicate fallback tier for transcription.
//
// Replaces Deepgram as the primary fallback tier because it's significantly
// cheaper at our scale:
//
//   Replicate insanely-fast-whisper (A40 GPU): ~$0.04/h audio
//   Deepgram Nova-3:                            ~$0.26/h audio  (5x more)
//   OpenAI Whisper-1:                            $0.36/h audio  (≤10MB cap)
//
// Updated cost-tier-ordered fallback chain:
//   1. Groq whisper-large-v3 (~$0.111/h, free 8h/day)  — primary
//   2. Replicate insanely-fast-whisper (~$0.04/h)       — middle (NEW)
//   3. Deepgram Nova-3 (~$0.26/h, $200 free credit)     — safety net
//   4. OpenAI Whisper-1 ($0.36/h)                       — last resort, ≤10MB
//
// Replicate uses whisper-large-v3 (same model as Groq) with int8 quantization
// + optimized inference (batch_size=24, A40 GPU). Real-world ~70x realtime.
// Cold-start ~10-20s acceptable in our async queue context.
//
// Audio input: we pass the Vercel Blob URL directly so Replicate fetches the
// audio from there. Avoids re-uploading the bytes (Replicate's prediction API
// accepts URLs natively).

import Replicate from 'replicate'

const replicate = process.env.REPLICATE_API_TOKEN
  ? new Replicate({ auth: process.env.REPLICATE_API_TOKEN })
  : null

// Pinned model version. Replicate SDK accepts either "owner/model" (uses
// latest) or "owner/model:hash" (pinned). Pinning protects us from breaking
// changes in the model. Bump this constant to update.
//
// Model: https://replicate.com/vaibhavs10/incredibly-fast-whisper
const MODEL = 'vaibhavs10/incredibly-fast-whisper'

export function isReplicateAvailable() {
  return !!replicate
}

/**
 * Transcribe an audio file using Replicate's insanely-fast-whisper.
 *
 * @param {object} opts
 * @param {string} opts.audioUrl   Public URL of the audio file (Vercel Blob).
 *                                 Replicate fetches it directly — no re-upload.
 * @param {string} [opts.language] Whisper-style ISO code ("en", "ru", "fr").
 *                                 If omitted, the model auto-detects.
 *
 * @returns {Promise<{ text: string, segments: Array, language: string|null }>}
 *
 * Throws on transport errors or empty results. The caller catches and
 * continues down the fallback chain.
 */
export async function transcribeWithReplicate({ audioUrl, language } = {}) {
  if (!replicate) {
    throw new Error('Replicate not configured (REPLICATE_API_TOKEN missing)')
  }
  if (!audioUrl) {
    throw new Error('Replicate requires audioUrl (publicly fetchable)')
  }

  // The model's `language` input expects ISO codes or "None" for auto.
  // Passing the user's selection improves accuracy noticeably for non-English.
  const replicateLanguage = language || 'None'

  // `replicate.run` handles polling internally until prediction completes
  // (or fails). For a 25 MB file at 70x realtime: ~20s GPU + ~15s cold
  // start. Vercel function has 300s budget — plenty of headroom.
  const output = await replicate.run(MODEL, {
    input: {
      audio: audioUrl,
      task: 'transcribe',
      language: replicateLanguage,
      batch_size: 24,
      timestamp: 'chunk',
      diarization: false,
    },
  })

  return normalizeReplicateResponse(output, language)
}

// Map insanely-fast-whisper's response shape onto Whisper's verbose_json
// shape so callers can treat all providers interchangeably.
//
// insanely-fast-whisper returns:
//   {
//     text: "full transcript",
//     chunks: [
//       { text: " hello world", timestamp: [0.0, 1.2] },
//       { text: " how are you", timestamp: [1.2, 2.8] },
//       ...
//     ]
//   }
//
// The model does internal language detection but doesn't expose the result
// in its output schema. If the caller passed a language hint we preserve it;
// otherwise we leave language as null (downstream code, like AI summary,
// handles that case).
function normalizeReplicateResponse(output, requestedLanguage) {
  const text = (output?.text || '').trim()
  if (!text) {
    throw new Error('Replicate returned empty transcript')
  }

  const chunks = Array.isArray(output?.chunks) ? output.chunks : []
  const segments = chunks.length > 0
    ? chunks.map((c, idx) => {
        const start = Array.isArray(c.timestamp) ? Number(c.timestamp[0]) || 0 : 0
        const end = Array.isArray(c.timestamp) ? Number(c.timestamp[1]) || 0 : 0
        return {
          id: idx,
          start,
          end,
          text: (c.text || '').trim(),
        }
      })
    : [
        // Defensive fallback — if chunks weren't returned for some reason,
        // produce a single-segment payload so SRT export doesn't break.
        { id: 0, start: 0, end: 0, text },
      ]

  return {
    text,
    segments,
    language: requestedLanguage || null,
  }
}
