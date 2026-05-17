// POST /api/export/pdf
// Body: { text, segments[], fileName, language }
// Returns: .pdf binary stream with Content-Disposition: attachment
//
// IMPORTANT: PDF currently uses the built-in Helvetica font which only
// supports Western European Latin. If the transcript contains other scripts
// (Cyrillic, Greek, CJK, Arabic, etc.) the route returns 422 with a clear
// message pointing the user at DOCX. This avoids generating a PDF full of
// rendering placeholders / squares.

import { NextResponse } from 'next/server'
import { requireUser } from '@/lib/exports/auth'
import { buildPdf, isPdfSupportedText } from '@/lib/exports/pdf'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
// PDF generation for very long transcripts can be slow on cold starts —
// match the queue worker's ceiling to stay safe.
export const maxDuration = 60

export async function POST(request) {
  const user = await requireUser()
  if (!user) {
    return NextResponse.json(
      { error: 'Sign in to export as PDF.' },
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

  // Script-coverage check. If the transcript or summary has non-Latin
  // characters, refuse cleanly rather than ship a broken PDF.
  const summaryBlob = summary
    ? [summary.summary, ...(summary.keyPoints || []), ...(summary.actionItems || [])].join(' ')
    : ''
  if (!isPdfSupportedText(text) || !isPdfSupportedText(summaryBlob)) {
    return NextResponse.json(
      {
        error:
          'PDF export currently supports Latin alphabets only. For Cyrillic, Greek, Asian, Arabic, or Hebrew scripts please use the Word (.docx) export instead.',
        code: 'unsupported_script',
      },
      { status: 422 }
    )
  }

  try {
    const bytes = await buildPdf({ text, segments, fileName, language, summary })
    const downloadName = (fileName || 'transcript').replace(/\.[^.]+$/, '') + '.pdf'

    return new Response(bytes, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${encodeURIComponent(downloadName)}"`,
        'Cache-Control': 'no-store',
      },
    })
  } catch (err) {
    console.error('[export/pdf] build failed', err?.message)
    return NextResponse.json({ error: 'Could not generate the PDF.' }, { status: 500 })
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
