// Structured JSON export — for developers and pipelines that want to
// process the transcript programmatically. Includes the full segments
// array with start/end/text plus high-level metadata.
//
// Schema is intentionally close to OpenAI/Groq Whisper `verbose_json`
// response so it's drop-in usable in any code that already parses Whisper.

export function toJSON({ text, segments, language, fileName, fileSize, fileType }) {
  const totalSeconds = segments?.length
    ? segments[segments.length - 1]?.end ?? 0
    : 0

  return JSON.stringify({
    file: {
      name: fileName || null,
      size_bytes: fileSize || null,
      mime_type: fileType || null,
    },
    transcription: {
      text: text || '',
      language: language || null,
      duration_seconds: totalSeconds,
      segments: (segments || []).map((s, i) => ({
        index: i,
        start: s.start,
        end: s.end,
        text: (s.text || '').trim(),
      })),
    },
    source: {
      provider: 'mictoo',
      url: 'https://mictoo.com',
      exported_at: new Date().toISOString(),
    },
  }, null, 2)
}
