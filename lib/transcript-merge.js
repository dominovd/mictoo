// Transcript merge — pure function, no I/O.
//
// Given N transcripts produced by transcribing audio chunks (each chunk's
// timestamps start at 0), produce a single unified transcript whose
// timestamps are continuous across the original audio.
//
// Each input chunk's segments have local timestamps (chunk-relative). We
// offset every segment by the chunk's absolute start time in the original
// audio. Concatenation order is the chunk order in the input array.
//
// Schema we expect for each chunk:
//   {
//     startSec: number,           // chunk's absolute start in original audio
//     endSec: number,              // chunk's absolute end (informational)
//     durationSec: number,         // chunk length
//     transcript: {
//       text: string,
//       segments: [{ start, end, text, ... }],
//       language?: string,
//     }
//   }
//
// Returns the same shape as a single-file transcription would:
//   { text, segments: [...], language }
//
// Note: gaps between chunk boundaries (silence detection) and overlap dedup
// are NOT handled here. Phase 1 splits at hard time boundaries so the merged
// transcript may have a 1-2 word seam loss. Phase 2 polish goal: overlap +
// dedup. For now we accept the seam in exchange for simplicity.

/**
 * Merge an ordered array of chunk transcripts into one continuous transcript.
 *
 * @param {Array<{startSec: number, transcript: {text: string, segments: Array, language?: string}}>} chunks
 * @returns {{text: string, segments: Array, language: string | undefined}}
 */
export function mergeChunks(chunks) {
  if (!Array.isArray(chunks) || chunks.length === 0) {
    return { text: '', segments: [], language: undefined }
  }

  // Pick language from the first chunk that has one. They should all agree
  // unless the model misclassified a single chunk; we trust the first.
  let language
  for (const c of chunks) {
    if (c?.transcript?.language) { language = c.transcript.language; break }
  }

  // Concat text with a single space, segments with absolute offsets.
  const textParts = []
  const segments = []
  for (const chunk of chunks) {
    const offset = Number.isFinite(chunk.startSec) ? chunk.startSec : 0
    const t = chunk?.transcript
    if (!t) continue
    if (typeof t.text === 'string' && t.text.trim()) {
      textParts.push(t.text.trim())
    }
    if (Array.isArray(t.segments)) {
      for (const seg of t.segments) {
        segments.push({
          ...seg,
          start: (Number.isFinite(seg.start) ? seg.start : 0) + offset,
          end: (Number.isFinite(seg.end) ? seg.end : 0) + offset,
        })
      }
    }
  }

  return {
    text: textParts.join(' ').replace(/\s+/g, ' ').trim(),
    segments,
    language,
  }
}

/**
 * Identify failed chunks (those whose transcript is null/undefined or empty)
 * for the partial-result UX. Returns the indices of missing chunks plus the
 * absolute time range they cover.
 *
 * Used by the orchestrator to build the "1 of 3 chunks failed" banner.
 */
export function findFailedChunks(chunks) {
  const failed = []
  for (let i = 0; i < chunks.length; i++) {
    const c = chunks[i]
    const ok = c?.transcript?.text && c.transcript.text.length > 0
    if (!ok) {
      failed.push({
        index: i,
        startSec: c?.startSec ?? null,
        endSec: c?.endSec ?? null,
      })
    }
  }
  return failed
}
