// Thin Resend wrapper. Only used from server-side code (worker, route
// handlers) — never from the browser, since RESEND_API_KEY is a secret.
//
// Returns { ok: true, id } on success or { ok: false, error } on failure.
// Never throws — the caller decides whether a missing email should fail
// the parent operation (it almost never should for our queue worker).

const FROM_ADDRESS = process.env.MICTOO_EMAIL_FROM || 'Mictoo <notifications@mictoo.com>'

// Optional `from` override is used by one-off campaigns (e.g. feedback survey
// from hello@mictoo.com instead of notifications@mictoo.com) without changing
// the default for transactional emails. Optional `replyTo` lets us collect
// replies on a different address than the FROM — useful when FROM is a
// branded address but we want replies in a real inbox.
export async function sendEmail({ to, subject, html, text, from, replyTo }) {
  if (!process.env.RESEND_API_KEY) {
    return { ok: false, error: 'RESEND_API_KEY not set' }
  }
  if (!to || !subject || (!html && !text)) {
    return { ok: false, error: 'sendEmail: missing required fields' }
  }

  try {
    const { Resend } = await import('resend')
    const resend = new Resend(process.env.RESEND_API_KEY)
    const { data, error } = await resend.emails.send({
      from: from || FROM_ADDRESS,
      to,
      subject,
      html,
      text,
      ...(replyTo ? { replyTo } : {}),
    })
    if (error) {
      return { ok: false, error: error.message || String(error) }
    }
    return { ok: true, id: data?.id }
  } catch (err) {
    return { ok: false, error: err?.message || String(err) }
  }
}
