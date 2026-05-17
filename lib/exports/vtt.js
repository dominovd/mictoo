// WebVTT — subtitle format used by HTML5 <video>, YouTube, and most modern
// players. Almost identical to SRT but uses '.' instead of ',' for the
// milliseconds separator and includes a "WEBVTT" header.
//
// Spec: https://www.w3.org/TR/webvtt1/

export function toVTT(segments) {
  if (!segments?.length) return 'WEBVTT\n\n'

  const fmt = (s) => {
    const h = Math.floor(s / 3600)
    const m = Math.floor((s % 3600) / 60)
    const sec = Math.floor(s % 60)
    const ms = Math.round((s % 1) * 1000)
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}.${String(ms).padStart(3, '0')}`
  }

  const cues = segments
    .map((seg, i) => `${i + 1}\n${fmt(seg.start)} --> ${fmt(seg.end)}\n${seg.text.trim()}`)
    .join('\n\n')

  return `WEBVTT\n\n${cues}\n`
}
