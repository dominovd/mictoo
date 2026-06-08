import { NextResponse } from 'next/server'
import { spawn } from 'node:child_process'
import { promises as fs } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { randomBytes } from 'node:crypto'
import { del, put } from '@vercel/blob'

export const runtime = 'nodejs'
// Vercel Pro allows up to 300s. Conversion of a 25 MB audio file to MP3 is
// normally 5-15s, but a 60 MB MP4→MP3 or long lossless source can take
// 60-120s on cold start. Log analysis 2026-06-05 → 2026-06-08 showed 6× 504
// hits at the old 60s cap; bumping to 300 gives ffmpeg breathing room.
export const maxDuration = 300

// Supported targets and their ffmpeg arguments. Each entry maps the target
// extension to the codec/bitrate/format chain that produces a portable,
// "good for voice" output. Keep these conservative — users land on these
// pages expecting a small, universal file, not lossless re-encoding.
const TARGETS = {
  mp3: { ext: 'mp3', mime: 'audio/mpeg', args: ['-vn', '-c:a', 'libmp3lame', '-b:a', '128k', '-ar', '44100'] },
  m4a: { ext: 'm4a', mime: 'audio/mp4',  args: ['-vn', '-c:a', 'aac',         '-b:a', '128k', '-movflags', '+faststart'] },
  wav: { ext: 'wav', mime: 'audio/wav',  args: ['-vn', '-c:a', 'pcm_s16le',   '-ar', '44100'] },
}

// Whitelist of supported source/target pairs. Each pair powers one landing
// page in /app/{slug}/page.js. Adding a new pair = add here + create the
// landing page + add to sitemap. We don't accept arbitrary combinations
// because each one is an SEO product (people land via Google looking for
// "mp4 to mp3", not "wav to flac").
const ALLOWED_PAIRS = new Set([
  'mp4>mp3',
  'wav>mp3',
  'webm>mp3',
  'flac>mp3',
  'mp3>m4a',
  'mp3>wav',
])

// Source extension → expected MIME prefix. Used to sanity-check the blob
// the user uploaded actually matches what they say it is. The browser's
// detected mime is unreliable for some formats (Safari + flac), so we accept
// application/octet-stream as a fallback.
const SOURCE_MIME_OK = {
  mp4:  ['video/mp4', 'audio/mp4'],
  wav:  ['audio/wav', 'audio/x-wav'],
  webm: ['audio/webm', 'video/webm'],
  flac: ['audio/flac'],
  mp3:  ['audio/mpeg', 'audio/mp3'],
}

// Resolve the ffmpeg binary path. @ffmpeg-installer/ffmpeg ships per-platform
// binaries; on Vercel that's linux-x64 (~70 MB unzipped, well within the
// 250 MB function budget on the Pro plan). Local dev resolves the same way.
function ffmpegPath() {
  // Lazy-loaded so the route module stays import-light if conversion is
  // never called on a particular cold start.
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const installer = require('@ffmpeg-installer/ffmpeg')
  return installer.path
}

function getIP(request) {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
    request.headers.get('x-real-ip') ||
    '127.0.0.1'
  )
}

// Lazy rate limit — same Upstash setup the transcribe pipeline uses, but on
// its own prefix so a heavy converter user doesn't burn their transcription
// budget. 20/hour/IP because conversion is cheaper than transcription
// (no AI call) and a user might legitimately batch a few files.
let ratelimit = null
async function getRatelimiter() {
  if (ratelimit) return ratelimit
  if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
    return null
  }
  const { Ratelimit } = await import('@upstash/ratelimit')
  const { Redis } = await import('@upstash/redis')
  ratelimit = new Ratelimit({
    redis: new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
    }),
    limiter: Ratelimit.slidingWindow(20, '1 h'),
    analytics: true,
    prefix: 'mictoo:convert',
  })
  return ratelimit
}

// Run ffmpeg with the resolved binary. Returns when the process exits 0,
// rejects with stderr on non-zero. We pipe stdin/stdout closed because we
// pass files via -i and -y instead of streaming — simpler, and 25 MB files
// don't pressure /tmp (Vercel allows 512 MB there).
function runFfmpeg(args) {
  return new Promise((resolve, reject) => {
    const proc = spawn(ffmpegPath(), args, { stdio: ['ignore', 'ignore', 'pipe'] })
    let stderr = ''
    proc.stderr.on('data', (chunk) => { stderr += chunk.toString() })
    proc.on('error', reject)
    proc.on('close', (code) => {
      if (code === 0) resolve()
      else reject(new Error(`ffmpeg exited with code ${code}: ${stderr.slice(-400)}`))
    })
  })
}

export async function POST(request) {
  // ── 1. Parse + validate request body ───────────────────────────────────────
  let body
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 })
  }

  const blobUrl = typeof body?.blobUrl === 'string' ? body.blobUrl : null
  const from = typeof body?.from === 'string' ? body.from.toLowerCase() : null
  const to = typeof body?.to === 'string' ? body.to.toLowerCase() : null
  const fileName = typeof body?.fileName === 'string' ? body.fileName : 'file'
  const fileType = typeof body?.fileType === 'string' ? body.fileType : ''

  if (!blobUrl || !from || !to) {
    return NextResponse.json({ error: 'Missing blobUrl/from/to.' }, { status: 400 })
  }
  if (!blobUrl.startsWith('https://')) {
    return NextResponse.json({ error: 'Invalid blobUrl.' }, { status: 400 })
  }
  if (!ALLOWED_PAIRS.has(`${from}>${to}`)) {
    return NextResponse.json(
      { error: `Conversion ${from} → ${to} is not supported.` },
      { status: 400 }
    )
  }

  // Soft check that the uploaded content type matches the declared source.
  // We log the mismatch but don't reject — the user might have a flac the
  // browser couldn't sniff, and ffmpeg will tell us authoritatively in a sec.
  const expectedMimes = SOURCE_MIME_OK[from] || []
  if (fileType && expectedMimes.length && !expectedMimes.includes(fileType) && fileType !== 'application/octet-stream') {
    console.warn(`[convert] mime mismatch: from=${from} fileType=${fileType}`)
  }

  // ── 2. Rate limit ──────────────────────────────────────────────────────────
  const limiter = await getRatelimiter()
  if (limiter) {
    const ip = getIP(request)
    const { success, reset } = await limiter.limit(ip)
    if (!success) {
      const resetIn = Math.ceil((reset - Date.now()) / 1000 / 60)
      return NextResponse.json(
        { error: `Too many conversions. Try again in ~${resetIn} min.` },
        { status: 429 }
      )
    }
  }

  // ── 3. Fetch the uploaded blob into /tmp ───────────────────────────────────
  // We give input/output deterministic random names to avoid collisions when
  // two requests hit the same warm instance. /tmp on Vercel is per-instance
  // and emphemeral, so we clean up in finally regardless of success.
  const tmpId = randomBytes(8).toString('hex')
  const inputPath = join(tmpdir(), `convert-${tmpId}-in.${from}`)
  const target = TARGETS[to]
  const outputPath = join(tmpdir(), `convert-${tmpId}-out.${target.ext}`)

  try {
    const blobRes = await fetch(blobUrl)
    if (!blobRes.ok) {
      return NextResponse.json(
        { error: `Could not fetch uploaded file (HTTP ${blobRes.status}).` },
        { status: 502 }
      )
    }
    const buf = Buffer.from(await blobRes.arrayBuffer())
    if (buf.length > 25 * 1024 * 1024) {
      // The upload-token guard already enforces this server-side, but a
      // belt-and-braces check protects against future config drift.
      return NextResponse.json({ error: 'File exceeds 25 MB.' }, { status: 413 })
    }
    await fs.writeFile(inputPath, buf)

    // ── 4. Convert ───────────────────────────────────────────────────────────
    await runFfmpeg(['-y', '-i', inputPath, ...target.args, outputPath])

    // ── 5. Upload result back to Vercel Blob ─────────────────────────────────
    // Public access so the browser can fetch it directly to trigger download.
    // Random suffix keeps the URL unguessable for the brief window before
    // /api/cleanup-blobs sweeps it (1h cron). Filename strips the original
    // extension and appends the new one so the download dialog shows what
    // the user expects ("recording.mp3" not "recording.mp4.mp3").
    const baseName = fileName.replace(/\.[^.]+$/, '') || 'file'
    const outName = `converted/${tmpId}/${baseName}.${target.ext}`
    const outBuf = await fs.readFile(outputPath)
    const uploaded = await put(outName, outBuf, {
      access: 'public',
      contentType: target.mime,
      addRandomSuffix: false, // tmpId already provides uniqueness
    })

    // Try to delete the original blob — best effort, don't fail the request
    // if cleanup hiccups. The hourly cron sweep is the real safety net.
    try { await del(blobUrl) } catch { /* swallow */ }

    return NextResponse.json({
      downloadUrl: uploaded.url,
      outputName: `${baseName}.${target.ext}`,
      outputSize: outBuf.length,
      outputMime: target.mime,
    })
  } catch (err) {
    console.error('[convert]', err)
    const msg = err?.message || 'Conversion failed.'
    // Surface a clean message for the common case (ffmpeg rejected the file).
    const friendly = msg.includes('Invalid data found') || msg.includes('moov atom not found')
      ? 'The file appears to be corrupted or in an unsupported codec.'
      : 'Conversion failed. The file may be malformed or use an unsupported codec.'
    return NextResponse.json({ error: friendly, detail: msg.slice(0, 200) }, { status: 422 })
  } finally {
    // Best-effort cleanup of /tmp. Vercel reuses warm instances so leaving
    // files behind would slowly fill the 512 MB budget.
    await Promise.all([
      fs.unlink(inputPath).catch(() => {}),
      fs.unlink(outputPath).catch(() => {}),
    ])
  }
}

const methodNotAllowed = () =>
  NextResponse.json(
    { error: 'Method not allowed.' },
    { status: 405, headers: { Allow: 'POST' } }
  )

export const GET = methodNotAllowed
export const HEAD = methodNotAllowed
export const PUT = methodNotAllowed
export const PATCH = methodNotAllowed
export const DELETE = methodNotAllowed
export const OPTIONS = methodNotAllowed
