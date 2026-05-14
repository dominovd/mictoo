import { NextResponse } from 'next/server'
import OpenAI from 'openai'

export const runtime = 'nodejs'
export const maxDuration = 60 // seconds (Vercel Pro allows up to 300s)

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(request) {
  try {
    // Parse the multipart form
    const formData = await request.formData()
    const file = formData.get('file')

    if (!file || typeof file === 'string') {
      return NextResponse.json({ error: 'No file provided.' }, { status: 400 })
    }

    // File size guard (25MB — Whisper limit)
    const MAX_BYTES = 25 * 1024 * 1024
    if (file.size > MAX_BYTES) {
      return NextResponse.json(
        { error: 'File too large. Maximum size is 25MB.' },
        { status: 413 }
      )
    }

    // Convert File → Buffer → OpenAI-compatible File object
    const arrayBuffer = await file.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    // Whisper API expects a File-like object with a name
    const whisperFile = new File([buffer], file.name || 'audio.mp3', {
      type: file.type || 'audio/mpeg',
    })

    // Call Whisper
    const transcription = await openai.audio.transcriptions.create({
      file: whisperFile,
      model: 'whisper-1',
      response_format: 'text',
    })

    return NextResponse.json({ text: transcription })
  } catch (err) {
    console.error('[transcribe]', err)

    // Surface OpenAI errors clearly
    if (err?.status === 401) {
      return NextResponse.json({ error: 'Invalid API key.' }, { status: 500 })
    }
    if (err?.status === 429) {
      return NextResponse.json(
        { error: 'Too many requests. Please wait a moment and try again.' },
        { status: 429 }
      )
    }

    return NextResponse.json(
      { error: err.message || 'Transcription failed. Please try again.' },
      { status: 500 }
    )
  }
}
