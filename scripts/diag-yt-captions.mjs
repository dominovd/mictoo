#!/usr/bin/env node
// Diagnostic — manually replay the YouTube captions fetch flow with
// verbose logging at each step. Shows exactly which step fails for
// the 4 problematic videos.
//
// Usage: node scripts/diag-yt-captions.mjs [videoId]

import { extractYouTubeVideoId } from '../lib/youtube-captions.js'

const VIDEO_ID = process.argv[2] || 'arj7oStGLkU'

const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36'

async function main() {
  console.log(`\n=== Diagnostic for ${VIDEO_ID} ===\n`)

  // Step 1: fetch watch page
  const watchUrl = `https://www.youtube.com/watch?v=${VIDEO_ID}&hl=en`
  console.log('1. Fetching', watchUrl)
  const watchRes = await fetch(watchUrl, {
    headers: { 'User-Agent': UA, 'Accept-Language': 'en-US,en;q=0.9' },
  })
  console.log('   →', watchRes.status, watchRes.statusText)
  const html = await watchRes.text()
  console.log('   HTML size:', html.length, 'bytes')

  // Step 2: extract ytInitialPlayerResponse
  const m = html.match(/ytInitialPlayerResponse\s*=\s*({.+?});\s*(?:var|<\/script>)/s)
  if (!m) {
    console.log('   ❌ ytInitialPlayerResponse NOT FOUND in HTML')
    // try alternative pattern
    const m2 = html.match(/var\s+ytInitialPlayerResponse\s*=\s*({.+)/s)
    console.log('   alt pattern:', m2 ? 'found, but not terminated' : 'not found either')
    return
  }
  // The JSON may be greedy-terminated; extract balanced braces
  const rawSlice = m[1]
  let depth = 0, end = -1
  for (let i = 0; i < rawSlice.length; i++) {
    const c = rawSlice[i]
    if (c === '{') depth++
    else if (c === '}') { depth--; if (depth === 0) { end = i; break } }
  }
  const jsonText = end > 0 ? rawSlice.slice(0, end + 1) : rawSlice
  let player
  try { player = JSON.parse(jsonText) } catch (e) {
    console.log('   ❌ JSON parse failed:', e.message)
    console.log('   first 200 chars:', jsonText.slice(0, 200))
    return
  }

  // Step 3: caption tracks list
  const tracks = player?.captions?.playerCaptionsTracklistRenderer?.captionTracks
  if (!tracks || !tracks.length) {
    console.log('   ❌ No captionTracks in player response')
    console.log('   keys at captions:', Object.keys(player?.captions || {}))
    return
  }
  console.log(`\n2. Found ${tracks.length} caption tracks:`)
  for (const t of tracks) {
    console.log(`   - lang=${t.languageCode}\tkind=${t.kind || '-'}\tname=${t?.name?.simpleText || ''}`)
  }

  // Step 4: pick English track
  const enNonAsr = tracks.find(t => t.languageCode === 'en' && t.kind !== 'asr')
  const enAsr = tracks.find(t => t.languageCode === 'en')
  const track = enNonAsr || enAsr || tracks[0]
  console.log(`\n3. Picked: lang=${track.languageCode} kind=${track.kind || '-'}`)
  console.log('   baseUrl:', track.baseUrl?.slice(0, 200))

  // Step 5: fetch captions
  const capUrl = track.baseUrl + (track.baseUrl.includes('?') ? '&' : '?') + 'fmt=json3'
  console.log('\n4. Fetching captions:', capUrl.slice(0, 200))
  const capRes = await fetch(capUrl, { headers: { 'User-Agent': UA } })
  console.log('   →', capRes.status, capRes.statusText)
  console.log('   Content-Type:', capRes.headers.get('content-type'))
  const capText = await capRes.text()
  console.log('   body size:', capText.length, 'bytes')
  console.log('   first 400 chars:', capText.slice(0, 400))

  // Try to parse
  try {
    const data = JSON.parse(capText)
    const eventCount = (data.events || []).length
    console.log(`\n5. ✅ Parsed JSON, ${eventCount} events`)
    if (eventCount > 0) {
      const firstSegs = (data.events[0]?.segs || []).map(s => s.utf8).join('')
      console.log('   first segment text:', firstSegs.slice(0, 100))
    }
  } catch (e) {
    console.log('   ❌ JSON parse failed:', e.message)
  }
}

main().catch(e => console.error('Fatal:', e))
