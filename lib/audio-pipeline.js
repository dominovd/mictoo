// Audio pipeline helpers — ffmpeg / ffprobe wrappers for the big-file
// auto-split feature.
//
// Three primitive operations:
//   - getMediaInfo(buf, filename) → { durationSec, hasVideo, audioSizeEstimateMb }
//   - extractAudio(buf, srcExt)   → Buffer (audio-only m4a)
//   - splitAudio(buf, n, durationSec) → Buffer[] (n equal-time chunks, m4a)
//
// All work via /tmp file I/O — ffmpeg streams are awkward in Node spawn and
// /tmp has 512 MB on Vercel Pro, plenty for our 180 MB cap × 2-3 temp files.
//
// ffmpeg binary comes from @ffmpeg-installer/ffmpeg which ships per-platform
// (linux-x64 on Vercel). ffprobe rides along in the same package on most
// installs; if missing we fall back to parsing ffmpeg's stderr output.

import { spawn } from 'node:child_process'
import { promises as fs } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { randomBytes } from 'node:crypto'

// Lazy resolve so importing this module costs ~nothing if no split is needed.
function ffmpegPath() {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  return require('@ffmpeg-installer/ffmpeg').path
}
function ffprobePath() {
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    return require('@ffprobe-installer/ffprobe').path
  } catch {
    // Older or alternative installer setups: try the ffmpeg one with
    // ffmpeg/ffprobe sibling. We don't critically need ffprobe — getMediaInfo
    // falls back to parsing ffmpeg stderr.
    return null
  }
}

// Spawn a child process and capture stderr/stdout. Resolves with the
// stderr text (ffmpeg/ffprobe write metadata to stderr) on exit 0; rejects
// on non-zero with the same stderr.
function run(bin, args) {
  return new Promise((resolve, reject) => {
    const proc = spawn(bin, args, { stdio: ['ignore', 'pipe', 'pipe'] })
    let stderr = ''
    let stdout = ''
    proc.stderr.on('data', (c) => { stderr += c.toString() })
    proc.stdout.on('data', (c) => { stdout += c.toString() })
    proc.on('error', reject)
    proc.on('close', (code) => {
      if (code === 0) resolve({ stdout, stderr })
      else reject(new Error(`${bin} exited ${code}: ${stderr.slice(-400)}`))
    })
  })
}

function tmpPath(suffix) {
  return join(tmpdir(), `mictoo-${randomBytes(8).toString('hex')}.${suffix}`)
}

// Parse "Duration: HH:MM:SS.SS" out of ffmpeg/ffprobe stderr. Used as a
// fallback when ffprobe JSON isn't available.
function parseDurationFromStderr(stderr) {
  const m = /Duration:\s*(\d+):(\d{2}):(\d{2}(?:\.\d+)?)/.exec(stderr)
  if (!m) return null
  const h = parseInt(m[1], 10)
  const min = parseInt(m[2], 10)
  const s = parseFloat(m[3])
  return h * 3600 + min * 60 + s
}

// Detect whether the input has a video stream by looking for "Stream … Video:"
// in ffmpeg stderr. Cheap, reliable for most containers.
function hasVideoStream(stderr) {
  return /Stream\s+#\d+:\d+.*Video:/.test(stderr)
}

/**
 * Get duration + video/audio shape of an input buffer.
 *
 * Strategy: prefer ffprobe -show_format -of json (most accurate), fall back
 * to a no-op ffmpeg call whose stderr leaks the Duration: line.
 *
 * Returns { durationSec, hasVideo }. Throws on completely unreadable input.
 */
export async function getMediaInfo(buf, srcExt = 'bin') {
  const input = tmpPath(srcExt)
  await fs.writeFile(input, buf)
  try {
    const probe = ffprobePath()
    if (probe) {
      const { stdout, stderr } = await run(probe, [
        '-v', 'error',
        '-show_format',
        '-show_streams',
        '-of', 'json',
        input,
      ])
      try {
        const j = JSON.parse(stdout)
        const dur = parseFloat(j?.format?.duration)
        const streams = Array.isArray(j?.streams) ? j.streams : []
        const hasVideo = streams.some(s => s.codec_type === 'video')
        if (Number.isFinite(dur) && dur > 0) return { durationSec: dur, hasVideo }
      } catch {
        // fall through to fallback
      }
      // Couldn't parse ffprobe JSON — last-resort stderr scrape.
      const dur = parseDurationFromStderr(stderr)
      if (dur) return { durationSec: dur, hasVideo: hasVideoStream(stderr) }
    }
    // No ffprobe at all — let ffmpeg dump info to stderr by asking it to read
    // and write nothing useful.
    const { stderr } = await run(ffmpegPath(), [
      '-hide_banner',
      '-i', input,
      '-f', 'null',
      '-',
    ]).catch(e => ({ stderr: e.message })) // ffmpeg may exit non-zero on -i info, the stderr is what we want either way
    const dur = parseDurationFromStderr(stderr)
    if (!dur) throw new Error('Could not determine media duration')
    return { durationSec: dur, hasVideo: hasVideoStream(stderr) }
  } finally {
    await fs.unlink(input).catch(() => {})
  }
}

/**
 * Extract the audio track from a video file as M4A (AAC).
 * Returns a Buffer.
 *
 * We pick M4A so:
 *   - Whisper accepts it directly
 *   - File size drops 10-30× compared to the source video
 *   - The original codec is preserved if it's already AAC (-c:a copy)
 */
export async function extractAudio(buf, srcExt = 'mp4') {
  const input = tmpPath(srcExt)
  const output = tmpPath('m4a')
  await fs.writeFile(input, buf)
  try {
    await run(ffmpegPath(), [
      '-hide_banner', '-loglevel', 'error',
      '-y',
      '-i', input,
      '-vn',                // drop video
      // Voice-optimized AAC: mono 16 kHz at 48 kbps. This is what Whisper
      // consumes internally (it downsamples to 16 kHz mono regardless of
      // input), so transcription quality is unaffected — and chunk size
      // drops to roughly 22 MB for a 60-minute chunk, well under Groq's
      // per-file upload cap. Earlier 128k stereo 44.1k produced ~30 MB
      // for 30-minute chunks which Groq rejected with 413.
      '-c:a', 'aac',
      '-b:a', '48k',
      '-ar', '16000',
      '-ac', '1',
      '-movflags', '+faststart',
      output,
    ])
    return await fs.readFile(output)
  } finally {
    await fs.unlink(input).catch(() => {})
    await fs.unlink(output).catch(() => {})
  }
}

/**
 * Split an audio buffer into N equal-time-length M4A chunks.
 *
 * Inputs:
 *   buf          - audio bytes (m4a / mp3 / wav / etc — anything ffmpeg can read)
 *   n            - number of chunks (1, 2, or 3)
 *   durationSec  - total duration (must be > 0, get from getMediaInfo)
 *   srcExt       - extension hint for the input temp file
 *
 * Returns an array of objects:
 *   [{ buffer: Buffer, startSec: number, endSec: number, durationSec: number }]
 *
 * Each chunk re-encodes to voice-optimized AAC (48 kbps mono 16 kHz) in a
 * fresh m4a container, so the chunk's internal timestamps start at zero AND
 * the chunk size stays comfortably under Groq's per-file upload cap even for
 * 60-minute chunks. The caller is responsible for offsetting transcription
 * timestamps by `startSec` at merge time.
 */
export async function splitAudio(buf, n, durationSec, srcExt = 'm4a') {
  if (!(n >= 2 && n <= 3)) throw new Error(`splitAudio: n must be 2 or 3, got ${n}`)
  if (!Number.isFinite(durationSec) || durationSec <= 0) {
    throw new Error('splitAudio: durationSec must be positive')
  }
  const input = tmpPath(srcExt)
  await fs.writeFile(input, buf)
  const chunkLen = durationSec / n

  // Run all N ffmpeg jobs in parallel — each reads the same input, writes its
  // own /tmp output. With 2-3 chunks on a single function instance this is
  // well within memory and disk budget.
  const jobs = []
  for (let i = 0; i < n; i++) {
    const startSec = i * chunkLen
    const lenSec = (i === n - 1) ? (durationSec - startSec) : chunkLen
    const output = tmpPath('m4a')
    jobs.push((async () => {
      try {
        await run(ffmpegPath(), [
          '-hide_banner', '-loglevel', 'error',
          '-y',
          '-ss', startSec.toFixed(3),
          '-i', input,
          '-t', lenSec.toFixed(3),
          // Voice-optimized AAC profile. See extractAudio() above for the
          // sizing math — at 48 kbps mono 16 kHz a 60-minute chunk lands
          // around 22 MB, well under Groq's per-file upload cap. Whisper
          // resamples to 16 kHz mono internally so transcription quality
          // is unaffected.
          '-c:a', 'aac',
          '-b:a', '48k',
          '-ar', '16000',
          '-ac', '1',
          '-movflags', '+faststart',
          output,
        ])
        const buffer = await fs.readFile(output)
        return { buffer, startSec, endSec: startSec + lenSec, durationSec: lenSec }
      } finally {
        await fs.unlink(output).catch(() => {})
      }
    })())
  }
  try {
    return await Promise.all(jobs)
  } finally {
    await fs.unlink(input).catch(() => {})
  }
}

/**
 * Convenience: given a buffer and a per-chunk size budget (default 60 MB),
 * return how many chunks the auto-split should produce (1, 2, or 3).
 *
 * For video files, callers should call extractAudio() first and then run
 * this on the audio bytes — the count is based on audio size, not source
 * file size.
 */
export function chunkCountForSize(byteSize, perChunkMb = 60, maxChunks = 3) {
  // Decimal MB to match user-visible file sizes (Finder/Explorer use 1 MB
  // = 1,000,000 bytes). The transcribe routes' per-file caps follow the
  // same convention so this comparison agrees with the upload-token cap.
  const mb = byteSize / (1000 * 1000)
  if (mb <= perChunkMb) return 1
  return Math.min(maxChunks, Math.ceil(mb / perChunkMb))
}
