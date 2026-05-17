// Manual smoke-test for the Resend email pipeline. Use this to verify that
// RESEND_API_KEY is valid, the mictoo.com domain is DKIM/SPF-verified, the
// from address `notifications@mictoo.com` doesn't bounce, and the
// transcript-ready template renders correctly in real mail clients.
//
// Usage (curl):
//   curl -H "Authorization: Bearer $CRON_SECRET" \
//        "https://mictoo.com/api/test-email?to=you@example.com"
//
// Returns:
//   200 { ok: true, id: 're_...' }  on success
//   401                              if the Bearer token is wrong
//   400                              if `to` is missing or invalid
//   500 { error: '...' }             on Resend / template error
//
// This route is NOT linked from anywhere — it's a developer tool, intended
// to be hit manually. CRON_SECRET gating means even if it gets indexed it
// won't be useful to anyone without the secret.

import { NextResponse } from 'next/server'
import { sendEmail } from '@/lib/email/send'
import { transcriptReadyEmail } from '@/lib/email/templates/transcript-ready'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET(request) {
  const authHeader = request.headers.get('authorization')
  if (!process.env.CRON_SECRET || authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new Response('Unauthorized', { status: 401 })
  }

  const { searchParams } = new URL(request.url)
  const to = searchParams.get('to')
  if (!to || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(to)) {
    return NextResponse.json(
      { error: 'Provide a valid email via ?to=address@example.com' },
      { status: 400 }
    )
  }

  // Build a fake-but-realistic transcript-ready email so we exercise the
  // actual production template (not a stripped-down test message). Includes
  // an AI-summary block so visual styling of every section is verified.
  const { subject, html, text } = transcriptReadyEmail({
    name: 'Test',
    fileName: 'demo-podcast-episode-42.mp3',
    preview:
      'In this episode we explore the unintuitive economics of self-hosted AI inference vs commercial APIs. ' +
      'The break-even point depends less on raw compute price and more on the operational overhead of keeping ' +
      'the infrastructure healthy. We walk through three case studies where the math flips in unexpected ways',
    summary: {
      summary:
        'Self-hosted AI inference becomes economically viable only after a specific scale threshold — usually higher than founders expect. Operational overhead dominates the cost curve below that line.',
      keyPoints: [
        'Break-even depends on operations cost, not just compute price',
        'GPU hosting at ~$100/mo only pays off above ~$120/mo API spend',
        'Quality degradation on smaller models is real for non-English audio',
      ],
      actionItems: [
        'Track monthly API spend against the break-even threshold',
        'Revisit decision when authed queue traffic exceeds 15 jobs/day',
      ],
    },
  })

  const result = await sendEmail({ to, subject, html, text })

  if (!result.ok) {
    console.error('[test-email] send failed', result.error)
    return NextResponse.json({ error: result.error }, { status: 500 })
  }
  return NextResponse.json({ ok: true, id: result.id, to, subject })
}

const methodNotAllowed = () =>
  NextResponse.json(
    { error: 'Method not allowed. Use GET with ?to= query and Bearer CRON_SECRET.' },
    { status: 405, headers: { Allow: 'GET' } }
  )

export const POST = methodNotAllowed
export const PUT = methodNotAllowed
export const PATCH = methodNotAllowed
export const DELETE = methodNotAllowed
export const HEAD = methodNotAllowed
export const OPTIONS = methodNotAllowed
