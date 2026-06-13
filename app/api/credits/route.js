// GET /api/credits — read-only credits status for the signed-in user.
//
// Reads the existing authDaily sliding window (7/24h, same bucket used by
// /api/transcribe and /api/translate) using getRemaining() so this endpoint
// itself does NOT consume a credit. Returns a tiny JSON the CreditsWidget
// in the site header can poll on mount and after every transcribe.
//
// Returns:
//   { signedIn: false }
//     when the user is anonymous — widget hides itself
//
//   { signedIn: true, used: 2, limit: 7, remaining: 5, resetAtMs: 1781001600000 }
//     when the user is signed in
//
// On Redis misconfiguration: returns { signedIn: true, available: false }
// so the widget can degrade gracefully (show "—") without breaking the UI.

import { NextResponse } from 'next/server'
import { createClient as createSupabaseServerClient } from '@/lib/supabase/server'

export const runtime = 'nodejs'
// This endpoint is cheap; keep the default timeout. We don't want it to
// cache across users either, so force-dynamic.
export const dynamic = 'force-dynamic'

// Same daily cap as /api/transcribe and /api/translate authDaily buckets.
// Source of truth for the limit so the widget always agrees with what
// transcribe actually enforces.
const AUTH_DAILY_LIMIT = 7

let cachedLimiter = null
async function getDailyLimiter() {
  if (cachedLimiter) return cachedLimiter
  if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
    return null
  }
  const { Ratelimit } = await import('@upstash/ratelimit')
  const { Redis } = await import('@upstash/redis')
  const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
  })
  cachedLimiter = new Ratelimit({
    redis,
    // MUST match /api/transcribe authDaily exactly (same window, same prefix)
    // so getRemaining() reads the same bucket transcribe consumes from.
    limiter: Ratelimit.slidingWindow(AUTH_DAILY_LIMIT, '24 h'),
    prefix: 'mictoo:rl:auth:d',
    // Disable analytics on read — we don't want every widget poll to count.
    analytics: false,
  })
  return cachedLimiter
}

export async function GET() {
  // Auth lookup. If anon → just tell the client to hide the widget.
  let authUser = null
  try {
    const supabase = createSupabaseServerClient()
    const { data } = await supabase.auth.getUser()
    authUser = data?.user ?? null
  } catch {
    // Treat as anonymous on lookup failure.
  }
  if (!authUser) {
    return NextResponse.json({ signedIn: false }, {
      headers: { 'Cache-Control': 'no-store' },
    })
  }

  const limiter = await getDailyLimiter()
  if (!limiter) {
    // Redis missing/misconfigured. Surface so the widget can render "—".
    return NextResponse.json(
      { signedIn: true, available: false, limit: AUTH_DAILY_LIMIT },
      { headers: { 'Cache-Control': 'no-store' } }
    )
  }

  try {
    // getRemaining is a non-consuming read against the same bucket .limit()
    // would write to. Returns { remaining, reset } per the upstash docs.
    const { remaining, reset } = await limiter.getRemaining(authUser.id)
    const used = Math.max(0, AUTH_DAILY_LIMIT - remaining)
    return NextResponse.json(
      {
        signedIn: true,
        available: true,
        used,
        limit: AUTH_DAILY_LIMIT,
        remaining,
        resetAtMs: reset,
      },
      { headers: { 'Cache-Control': 'no-store' } }
    )
  } catch (err) {
    console.error('credits route error:', err?.message || err)
    return NextResponse.json(
      { signedIn: true, available: false, limit: AUTH_DAILY_LIMIT },
      { headers: { 'Cache-Control': 'no-store' } }
    )
  }
}
