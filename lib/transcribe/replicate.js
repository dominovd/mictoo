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

// Community models on Replicate (not officially supported endpoints) require
// an explicit version hash. Passing just "owner/model" 404s because the SDK
// tries to use the official-models endpoint which only works for first-party
// models. We resolve and cache the latest version on first use, then reuse
// it for the lifetime of the function instance.
//
// To pin a specific version (recommended for reproducible behavior on
// model updates), set REPLICATE_WHISPER_VERSION env var to the version
// hash from https://replicate.com/vaibhavs10/incredibly-fast-whisper/versions
const MODEL_OWNER = 'vaibhavs10'
const MODEL_NAME = 'incredibly-fast-whisper'

let cachedVersionId = null

async function resolveModelVersion() {
  if (cachedVersionId) return cachedVersionId

  // Explicit pin via env var — preferred for production where you want
  // deterministic behavior across model updates.
  if (process.env.REPLICATE_WHISPER_VERSION) {
    cachedVersionId = process.env.REPLICATE_WHISPER_VERSION
    return cachedVersionId
  }

  // Otherwise look up the latest version via Replicate's models API.
  const url = `https://api.replicate.com/v1/models/${MODEL_OWNER}/${MODEL_NAME}`
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${process.env.REPLICATE_API_TOKEN}` },
  })
  if (!res.ok) {
    throw new Error(`Failed to resolve Replicate model version: HTTP ${res.status}`)
  }
  const data = await res.json()
  const versionId = data?.latest_version?.id
  if (!versionId) {
    throw new Error(`Replicate model ${MODEL_OWNER}/${MODEL_NAME} has no latest_version`)
  }
  cachedVersionId = versionId
  return cachedVersionId
}

export function isReplicateAvailable() {
  return !!replicate
}

// Extension-from-MIME map. Replicate's audio pipeline routes through ffmpeg
// which sometimes derives the decoder from filename extension. Vercel Blob
// URLs for iOS Voice Memo uploads end in ".mp4" even though the content is
// AAC-in-MP4, and Replicate's specific pipeline trips on that combination.
// Passing the audio as a File buffer through Replicate's Files API gives us
// control over the filename it sees.
const EXT_BY_MIME = {
  'audio/mpeg':       '.mp3',
  'audio/mp3':        '.mp3',
  'audio/mp4':        '.m4a',
  'audio/m4a':        '.m4a',
  'audio/x-m4a':      '.m4a',
  'audio/aac':        '.m4a', // AAC-in-MP4 — m4a extension is what whisper accepts
  'audio/x-aac':      '.m4a',
  'audio/wav':        '.wav',
  'audio/wave':       '.wav',
  'audio/x-wav':      '.wav',
  'audio/ogg':        '.ogg',
  'audio/opus':       '.ogg',
  'audio/flac':       '.flac',
  'audio/x-flac':     '.flac',
  'audio/webm':       '.webm',
  'video/mp4':        '.mp4',
  'video/quicktime':  '.mp4',
  'video/3gpp':       '.mp4',
  'video/webm':       '.webm',
}

function pickExtension(fileType, fileName) {
  if (fileType && EXT_BY_MIME[fileType.toLowerCase()]) {
    return EXT_BY_MIME[fileType.toLowerCase()]
  }
  if (fileName) {
    const m = fileName.match(/\.([a-z0-9]{2,5})$/i)
    if (m) return `.${m[1].toLowerCase()}`
  }
  return '.mp3'
}

/**
 * Transcribe an audio file using Replicate's insanely-fast-whisper.
 *
 * Audio is passed as a File buffer (not a URL) so Replicate hosts a copy
 * on their CDN with a clean filename before running the model. This avoids
 * a known issue where ffmpeg in the model's pipeline misinterprets the
 * extension from Vercel Blob URLs ending in ".mp4" for AAC-in-MP4 content
 * (iPhone Voice Memo exports etc.).
 *
 * @param {object} opts
 * @param {Buffer} opts.buffer     Raw audio bytes.
 * @param {string} [opts.fileType] MIME type, used to pick the right extension.
 * @param {string} [opts.fileName] Original filename (optional, used as fallback
 *                                 when fileType MIME isn't in the map).
 * @param {string} [opts.language] Whisper-style ISO code ("en", "ru", "fr").
 *                                 If omitted, the model auto-detects.
 *
 * @returns {Promise<{ text: string, segments: Array, language: string|null }>}
 */
export async function transcribeWithReplicate({ buffer, fileType, fileName, language } = {}) {
  if (!replicate) {
    throw new Error('Replicate not configured (REPLICATE_API_TOKEN missing)')
  }
  if (!buffer) {
    throw new Error('Replicate requires audio buffer')
  }

  // Build a File with a Replicate-friendly extension/MIME so the model's
  // pipeline picks the right decoder.
  const ext = pickExtension(fileType, fileName)
  const safeMime = fileType || 'audio/mpeg'
  const audioFile = new File([buffer], `audio${ext}`, { type: safeMime })

  // The model's `language` input expects ISO codes or "None" for auto.
  const replicateLanguage = language || 'None'

  // Resolve version (cached after first call). Community models require an
  // explicit version hash — see resolveModelVersion comment.
  const versionId = await resolveModelVersion()

  // `replicate.run` handles file upload to Replicate's Files API for Blob/
  // File inputs, then polls the prediction until completion. For a 25 MB
  // file at 70x realtime: ~5s upload + ~15s cold start + ~20s GPU. Vercel
  // function has 300s budget — plenty of headroom.
  const output = await replicate.run(`${MODEL_OWNER}/${MODEL_NAME}:${versionId}`, {
    input: {
      audio: audioFile,
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
