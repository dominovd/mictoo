// Structured JSON export — for developers and pipelines that want to
// process the transcript programmatically. Includes the full segments
// array with start/end/text plus high-level metadata.
//
// Schema is intentionally close to OpenAI/Groq Whisper `verbose_json`
// response so it's drop-in usable in any code that already parses Whisper.

export function toJSON({ text, segments, language, fileName, fileSize, fileType, summary }) {
  const totalSeconds = segments?.length
    ? segments[segments.length - 1]?.end ?? 0
    : 0

  const payload = {
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
  }

  // Include the AI summary block only if it was opted in and is non-empty.
  // Keys use snake_case for consistency with the rest of the JSON schema.
  if (summary && (summary.summary || summary.keyPoints?.length || summary.actionItems?.length)) {
    payload.summary = {
      text: summary.summary || '',
      key_points: summary.keyPoints || [],
      action_items: summary.actionItems || [],
    }
  }

  return JSON.stringify(payload, null, 2)
}
