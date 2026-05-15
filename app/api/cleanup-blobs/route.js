import { NextResponse } from 'next/server'
import { list, del } from '@vercel/blob'

export const runtime = 'nodejs'
export const maxDuration = 60

// Hourly safety net for orphaned blobs — files that were uploaded but whose
// /api/transcribe call never ran the finally-block del() (function crash,
// client navigated away mid-flight, etc.). Without this we'd slowly pay for
// storage of leaked uploads.
//
// Triggered by Vercel Cron (see vercel.json). Vercel signs cron requests with
// `Authorization: Bearer ${CRON_SECRET}` — we reject anything else so the
// endpoint can't be invoked publicly to nuke fresh in-flight uploads.

const MAX_AGE_MS = 60 * 60 * 1000 // 1 hour

export async function GET(request) {
  const authHeader = request.headers.get('authorization')
  if (!process.env.CRON_SECRET || authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new Response('Unauthorized', { status: 401 })
  }

  const cutoff = Date.now() - MAX_AGE_MS
  let cursor
  let scanned = 0
  let deleted = 0
  const errors = []

  try {
    do {
      const result = await list({ cursor, limit: 1000 })
      for (const blob of result.blobs) {
        scanned++
        const uploadedAt = new Date(blob.uploadedAt).getTime()
        if (Number.isFinite(uploadedAt) && uploadedAt < cutoff) {
          try {
            await del(blob.url)
            deleted++
          } catch (err) {
            errors.push({ url: blob.url, message: err?.message })
          }
        }
      }
      cursor = result.cursor
    } while (cursor)

    return NextResponse.json({ scanned, deleted, errors: errors.length })
  } catch (err) {
    console.error('[cleanup-blobs]', err)
    return NextResponse.json(
      { error: err?.message || 'Cleanup failed.', scanned, deleted },
      { status: 500 }
    )
  }
}
