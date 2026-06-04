// Tiny endpoint that returns the date of the most recent changelog
// entry so the SiteHeader's red-dot indicator can compare against
// localStorage's mictoo:changelog_lastSeen. The full entries are SSG
// on /whats-new — this route is just for the unread check.
//
// Aggressive edge cache: changelog moves at most a few times a week,
// and we don't need real-time precision for the unread indicator —
// being a few minutes stale is fine.

import { NextResponse } from 'next/server'
import fs from 'node:fs'
import path from 'node:path'

export const runtime = 'nodejs'
export const dynamic = 'force-static'

function latestDate() {
  try {
    const raw = fs.readFileSync(path.join(process.cwd(), 'data', 'changelog.json'), 'utf-8')
    const data = JSON.parse(raw)
    const dates = (data?.entries || [])
      .map(e => e?.date)
      .filter(Boolean)
      .sort()
    return dates[dates.length - 1] || null
  } catch {
    return null
  }
}

export async function GET() {
  const latest = latestDate()
  return NextResponse.json(
    { latest },
    {
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=3600',
      },
    }
  )
}
