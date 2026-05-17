// Email template — "Your transcript is ready".
// Plain inline-styled HTML for max email-client compatibility.
//
// `name` is optional; falls back to "there" so we never write "Hi ,".

const ESCAPE_MAP = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }
function esc(s) {
  return String(s || '').replace(/[&<>"']/g, (c) => ESCAPE_MAP[c])
}

function brandHeader() {
  return `
    <div style="text-align:center; margin-bottom: 28px;">
      <div style="display:inline-block; font-size:22px; font-weight:700; color:#0284c7;">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:-3px; margin-right:4px;">
          <rect width="24" height="24" rx="6" fill="#0284c7"/>
          <path d="M8 8v8M12 6v12M16 10v4" stroke="white" stroke-width="2" stroke-linecap="round"/>
        </svg>
        mictoo
      </div>
    </div>
  `
}

function brandFooter() {
  return `
    <hr style="border:none; border-top:1px solid #e2e8f0; margin:28px 0;">
    <p style="font-size:12px; color:#94a3b8; text-align:center; margin:0;">
      You're receiving this because you opted in to transcript-ready notifications.
      Stop these emails in your <a href="https://mictoo.com/account" style="color:#94a3b8; text-decoration:underline;">account settings</a>.
    </p>
    <p style="font-size:12px; color:#94a3b8; text-align:center; margin:8px 0 0;">
      <a href="https://mictoo.com" style="color:#94a3b8; text-decoration:none;">mictoo.com</a> · free audio transcription
    </p>
  `
}

// Build subject + html + text for a "transcript ready" email.
//
// Inputs:
//   - name (optional): user's display name
//   - fileName: name of the file they uploaded
//   - preview: first ~200 chars of the transcript (already trimmed by caller)
//   - summary (optional): { summary, keyPoints[], actionItems[] }
//
// The text fallback is rendered for plain-text email clients (and for some
// spam filters that down-rank HTML-only mail).
export function transcriptReadyEmail({ name, fileName, preview, summary }) {
  const subject = `Your transcript is ready — ${fileName}`

  const greeting = name ? `Hi ${esc(name)},` : 'Hi there,'

  const summaryBlockHtml = summary && (summary.summary || summary.keyPoints?.length || summary.actionItems?.length)
    ? `
      <div style="background-color:#f0f9ff; border:1px solid #e0f2fe; border-radius:12px; padding:16px; margin:20px 0;">
        <p style="font-size:11px; font-weight:600; color:#0369a1; text-transform:uppercase; letter-spacing:0.05em; margin:0 0 8px;">AI Summary</p>
        ${summary.summary ? `<p style="font-size:14px; line-height:1.6; color:#0f172a; margin:0 0 12px;">${esc(summary.summary)}</p>` : ''}
        ${summary.keyPoints?.length ? `
          <p style="font-size:12px; font-weight:600; color:#475569; margin:12px 0 4px;">Key Points</p>
          <ul style="font-size:13px; line-height:1.6; color:#334155; padding-left:18px; margin:0;">
            ${summary.keyPoints.slice(0, 5).map((p) => `<li>${esc(p)}</li>`).join('')}
          </ul>
        ` : ''}
        ${summary.actionItems?.length ? `
          <p style="font-size:12px; font-weight:600; color:#475569; margin:12px 0 4px;">Action Items</p>
          <ul style="font-size:13px; line-height:1.6; color:#334155; padding-left:18px; margin:0;">
            ${summary.actionItems.slice(0, 5).map((p) => `<li>${esc(p)}</li>`).join('')}
          </ul>
        ` : ''}
      </div>
    `
    : ''

  const previewHtml = preview
    ? `
      <div style="background-color:#f8fafc; border:1px solid #e2e8f0; border-radius:12px; padding:16px; margin:20px 0;">
        <p style="font-size:11px; font-weight:600; color:#64748b; text-transform:uppercase; letter-spacing:0.05em; margin:0 0 8px;">Preview</p>
        <p style="font-size:14px; line-height:1.6; color:#334155; margin:0; white-space:pre-wrap;">${esc(preview)}…</p>
      </div>
    `
    : ''

  const html = `
    <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif; max-width:520px; margin:40px auto; padding:0 24px; color:#0f172a;">
      ${brandHeader()}
      <h1 style="font-size:22px; font-weight:700; margin:0 0 14px;">Your transcript is ready</h1>
      <p style="font-size:15px; line-height:1.6; color:#475569; margin:0 0 6px;">${greeting}</p>
      <p style="font-size:15px; line-height:1.6; color:#475569; margin:0 0 6px;">
        We've finished transcribing <strong style="color:#0f172a;">${esc(fileName)}</strong>.
      </p>
      ${summaryBlockHtml}
      ${previewHtml}
      <p style="text-align:center; margin:28px 0;">
        <a href="https://mictoo.com/history" style="display:inline-block; background-color:#0284c7; color:white; font-weight:600; font-size:15px; padding:12px 28px; border-radius:10px; text-decoration:none;">
          View your transcript
        </a>
      </p>
      <p style="font-size:13px; line-height:1.6; color:#94a3b8; margin:24px 0 0;">
        Mictoo keeps transcripts for 7 days. Download as Word, PDF, SRT, VTT, or JSON from your history page.
      </p>
      ${brandFooter()}
    </div>
  `

  // Plain text fallback. Keep narrow lines (~72 cols) for traditional clients.
  const lines = [
    'Your transcript is ready',
    '',
    greeting,
    `We've finished transcribing "${fileName}".`,
    '',
  ]
  if (summary?.summary) {
    lines.push('AI SUMMARY')
    lines.push(summary.summary)
    lines.push('')
  }
  if (summary?.keyPoints?.length) {
    lines.push('KEY POINTS')
    summary.keyPoints.slice(0, 5).forEach((p) => lines.push(`- ${p}`))
    lines.push('')
  }
  if (preview) {
    lines.push('PREVIEW')
    lines.push(`${preview}…`)
    lines.push('')
  }
  lines.push('View your transcript: https://mictoo.com/history')
  lines.push('')
  lines.push('—')
  lines.push('You can stop these emails in your account: https://mictoo.com/account')
  const text = lines.join('\n')

  return { subject, html, text }
}
