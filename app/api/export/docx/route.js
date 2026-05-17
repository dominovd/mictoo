// POST /api/export/docx
// Body: { text, segments[], fileName, language }
// Returns: .docx binary stream with Content-Disposition: attachment
//
// Requires an authenticated session. Anonymous callers get 401 so the
// client can redirect them to /sign-in.

import { NextResponse } from 'next/server'
import { requireUser } from '@/lib/exports/auth'
import { buildDocx } from '@/lib/exports/docx'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(request) {
  const user = await requireUser()
  if (!user) {
    return NextResponse.json(
      { error: 'Sign in to export as Word.' },
      { status: 401 }
    )
  }

  let body
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 })
  }

  const { text, segments, fileName, language, summary } = body || {}
  const hasTranscript = !!text || !!segments?.length
  const hasSummary = !!summary && (summary.summary || summary.keyPoints?.length || summary.actionItems?.length)
  if (!hasTranscript && !hasSummary) {
    return NextResponse.json({ error: 'Nothing to export.' }, { status: 400 })
  }

  try {
    const buffer = await buildDocx({ text, segments, fileName, language, summary })
    const downloadName = (fileName || 'transcript').replace(/\.[^.]+$/, '') + '.docx'

    return new Response(buffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'Content-Disposition': `attachment; filename="${encodeURIComponent(downloadName)}"`,
        'Cache-Control': 'no-store',
      },
    })
  } catch (err) {
    console.error('[export/docx] build failed', err?.message)
    return NextResponse.json({ error: 'Could not generate the Word document.' }, { status: 500 })
  }
}

const methodNotAllowed = () =>
  NextResponse.json(
    { error: 'Method not allowed. Use POST with JSON.' },
    { status: 405, headers: { Allow: 'POST' } }
  )

export const GET = methodNotAllowed
export const PUT = methodNotAllowed
export const DELETE = methodNotAllowed
export const HEAD = methodNotAllowed
export const OPTIONS = methodNotAllowed
