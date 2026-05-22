#!/usr/bin/env node
// One-off feedback-survey email blast for early Mictoo users.
//
// Reads users from Supabase auth.users via the service-role client and sends
// each one a short personal-style email asking what to build next. Replies
// route to dominov.denis@gmail.com via Resend's replyTo header.
//
// Modes (env var FEEDBACK_MODE):
//   test      — send only to dominov.denis@gmail.com (default; safe for first run)
//   active    — send to users with at least 1 row in `transcripts` table
//   all       — send to every confirmed user
//   dry-run   — print what would be sent, send nothing
//
// Usage:
//   FEEDBACK_MODE=test    node scripts/send-feedback-survey.mjs
//   FEEDBACK_MODE=dry-run node scripts/send-feedback-survey.mjs
//   FEEDBACK_MODE=all     node scripts/send-feedback-survey.mjs
//
// Required env:
//   NEXT_PUBLIC_SUPABASE_URL
//   SUPABASE_SERVICE_ROLE_KEY
//   RESEND_API_KEY
//
// Output: per-user log + JSON summary written to ./feedback-survey-log.json
//
// Notes:
// - Each email is sent individually (not BCC). Slightly slower but allows
//   per-recipient personalization and per-recipient failure tracking.
// - 200 ms delay between sends keeps us well under Resend's 100 req/sec
//   default limit. With 60 users this finishes in ~12 sec.
// - Idempotent re-runs are NOT guarded — if you run twice everyone gets two
//   emails. Use dry-run first.

import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'
import { writeFileSync } from 'node:fs'

// ── Config ──────────────────────────────────────────────────────────────────
const MODE = (process.env.FEEDBACK_MODE || 'test').toLowerCase()
const VALID_MODES = ['test', 'active', 'all', 'dry-run']
if (!VALID_MODES.includes(MODE)) {
  console.error(`Invalid FEEDBACK_MODE=${MODE}. Use one of: ${VALID_MODES.join(', ')}`)
  process.exit(1)
}

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY
const RESEND_API_KEY = process.env.RESEND_API_KEY

for (const [name, val] of Object.entries({
  NEXT_PUBLIC_SUPABASE_URL: SUPABASE_URL,
  SUPABASE_SERVICE_ROLE_KEY,
  RESEND_API_KEY,
})) {
  if (!val) {
    console.error(`Missing env var: ${name}`)
    process.exit(1)
  }
}

const FROM = 'Mictoo <hello@mictoo.com>'
const REPLY_TO = 'dominov.denis@gmail.com'
const TEST_EMAIL = 'dominov.denis@gmail.com'
const DELAY_MS = 200

// ── Email template ──────────────────────────────────────────────────────────
function renderEmail({ name }) {
  const greeting = name ? `Hi ${name},` : 'Hi,'
  const subject = "Quick favor — what should I build next on Mictoo?"

  const text = `${greeting}

I'm Denis, the guy who built Mictoo. You signed up recently — thank you for trying it.

I'm working on what to build next and would love a quick reality check from you (literally 1 minute):

  1. What's the ONE feature you'd want most that Mictoo doesn't have today?
  2. What's the biggest annoyance you've hit using it so far?

Even one-line replies help a lot. Just reply to this email in any language you prefer — I read everything personally.

— Denis
mictoo.com
`

  // Plain HTML — no marketing chrome, no logo banner. Reads like a personal
  // founder email, not a campaign. Inline styles only (no external CSS) so
  // it renders identically in Gmail/Outlook/Apple Mail.
  const html = `<!doctype html>
<html><body style="margin:0;padding:0;background:#ffffff;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;color:#0f172a;line-height:1.6;">
<table cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:560px;margin:0 auto;padding:32px 24px;">
  <tr><td>
    <p style="margin:0 0 16px 0;">${greeting}</p>
    <p style="margin:0 0 16px 0;">I'm Denis, the guy who built <a href="https://mictoo.com" style="color:#2563eb;text-decoration:none;">Mictoo</a>. You signed up recently — thank you for trying it.</p>
    <p style="margin:0 0 16px 0;">I'm working on what to build next and would love a quick reality check from you (literally 1 minute):</p>
    <ol style="margin:0 0 16px 0;padding-left:24px;">
      <li style="margin:0 0 8px 0;">What's the <strong>one feature</strong> you'd want most that Mictoo doesn't have today?</li>
      <li style="margin:0 0 8px 0;">What's the <strong>biggest annoyance</strong> you've hit using it so far?</li>
    </ol>
    <p style="margin:0 0 16px 0;">Even one-line replies help a lot. Just reply to this email in any language you prefer — I read everything personally.</p>
    <p style="margin:24px 0 0 0;">— Denis<br/><a href="https://mictoo.com" style="color:#64748b;text-decoration:none;font-size:13px;">mictoo.com</a></p>
  </td></tr>
</table>
</body></html>`

  return { subject, html, text }
}

// ── Pick recipients based on mode ────────────────────────────────────────────
async function getRecipients(supabase, mode) {
  if (mode === 'test' || mode === 'dry-run') {
    // Single recipient (you) — used to verify rendering in inbox.
    // In dry-run mode we still load this so the preview shows a realistic name.
    return [{ id: 'test', email: TEST_EMAIL, name: 'Denis' }]
  }

  // Paginate through auth.users (admin API caps at 1000/page but we have ~60).
  let page = 1
  const allUsers = []
  while (true) {
    const { data, error } = await supabase.auth.admin.listUsers({ page, perPage: 200 })
    if (error) throw new Error(`listUsers failed: ${error.message}`)
    const batch = data?.users || []
    if (batch.length === 0) break
    allUsers.push(...batch)
    if (batch.length < 200) break
    page++
  }

  // Filter: must have confirmed email (no point spamming unverified addresses)
  // and must not be a deleted account.
  const eligible = allUsers.filter(
    (u) => u.email && u.email_confirmed_at && !u.deleted_at
  )

  if (mode === 'all') {
    return eligible.map(toRecipient)
  }

  if (mode === 'active') {
    // Restrict to users who actually have at least one transcript row.
    // Cheaper than per-user counts: one query, distinct user_ids.
    const { data, error } = await supabase
      .from('transcripts')
      .select('user_id')
      .not('user_id', 'is', null)
    if (error) throw new Error(`transcripts select failed: ${error.message}`)
    const activeIds = new Set(data.map((r) => r.user_id))
    return eligible.filter((u) => activeIds.has(u.id)).map(toRecipient)
  }

  throw new Error(`Unhandled mode: ${mode}`)
}

function toRecipient(u) {
  const meta = u.user_metadata || {}
  // Prefer full_name → name → email-localpart. Title-case the localpart
  // fallback so it doesn't look like a database leak ("john.smith" → "John").
  let name = meta.full_name || meta.name || null
  if (!name) {
    const local = (u.email || '').split('@')[0].split(/[._-]/)[0]
    name = local ? local.charAt(0).toUpperCase() + local.slice(1).toLowerCase() : null
  }
  return { id: u.id, email: u.email, name }
}

// ── Main ────────────────────────────────────────────────────────────────────
async function main() {
  console.log(`Mode: ${MODE}`)
  console.log(`From: ${FROM}`)
  console.log(`Reply-to: ${REPLY_TO}\n`)

  const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
    auth: { autoRefreshToken: false, persistSession: false },
  })
  const resend = new Resend(RESEND_API_KEY)

  const recipients = await getRecipients(supabase, MODE)
  console.log(`Recipients: ${recipients.length}`)
  recipients.slice(0, 5).forEach((r) =>
    console.log(`  • ${r.email}${r.name ? ` (${r.name})` : ''}`)
  )
  if (recipients.length > 5) console.log(`  • … and ${recipients.length - 5} more`)
  console.log()

  if (MODE === 'dry-run') {
    const sample = renderEmail({ name: recipients[0]?.name || null })
    console.log('--- DRY RUN: sample email below, NOTHING SENT ---\n')
    console.log(`Subject: ${sample.subject}\n`)
    console.log(sample.text)
    console.log('\n--- END ---')
    return
  }

  // Confirm before real send for non-test modes.
  if (MODE !== 'test') {
    console.log(`\n⚠  About to send ${recipients.length} REAL emails.`)
    console.log('   Press Ctrl-C in the next 5 seconds to abort…\n')
    await new Promise((r) => setTimeout(r, 5000))
  }

  const results = []
  let okCount = 0
  let failCount = 0

  for (const r of recipients) {
    const { subject, html, text } = renderEmail({ name: r.name })
    try {
      const { data, error } = await resend.emails.send({
        from: FROM,
        to: r.email,
        subject,
        html,
        text,
        replyTo: REPLY_TO,
      })
      if (error) {
        console.log(`  ✗ ${r.email}  ${error.message || error}`)
        results.push({ email: r.email, ok: false, error: error.message || String(error) })
        failCount++
      } else {
        console.log(`  ✓ ${r.email}  id=${data?.id}`)
        results.push({ email: r.email, ok: true, id: data?.id })
        okCount++
      }
    } catch (err) {
      console.log(`  ✗ ${r.email}  ${err?.message || err}`)
      results.push({ email: r.email, ok: false, error: err?.message || String(err) })
      failCount++
    }
    await new Promise((res) => setTimeout(res, DELAY_MS))
  }

  // Write log so failures can be retried without re-sending to everyone.
  const logPath = `./feedback-survey-log-${new Date().toISOString().slice(0, 10)}.json`
  writeFileSync(
    logPath,
    JSON.stringify(
      {
        mode: MODE,
        sentAt: new Date().toISOString(),
        from: FROM,
        replyTo: REPLY_TO,
        total: recipients.length,
        ok: okCount,
        fail: failCount,
        results,
      },
      null,
      2
    )
  )
  console.log(`\nSummary: ${okCount} ok / ${failCount} fail`)
  console.log(`Log written to ${logPath}`)
}

main().catch((err) => {
  console.error('Fatal:', err?.message || err)
  process.exit(1)
})
