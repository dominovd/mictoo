// Next.js top-level middleware — runs on every matched request.
// Currently used only to refresh the Supabase auth session cookie so server
// renders see a fresh user state.
//
// Skip on static assets, public files, and the api/cleanup-blobs /
// api/transcribe-worker cron paths to keep their auth check (CRON_SECRET)
// independent of user sessions.

import { updateSession } from '@/lib/supabase/middleware'

export async function middleware(request) {
  return await updateSession(request)
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, icon, opengraph-image (Next.js generated)
     * - .* with a file extension (assets)
     * - api/cleanup-blobs, api/transcribe-worker (cron-only, CRON_SECRET-auth)
     */
    '/((?!_next/static|_next/image|favicon\\.ico|icon|opengraph-image|api/cleanup-blobs|api/transcribe-worker|.*\\.).*)',
  ],
}
