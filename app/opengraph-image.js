import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Mictoo — Free Audio & Video Transcription'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: 'linear-gradient(135deg, #0f172a 0%, #0c4a6e 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          padding: '80px',
        }}
      >
        {/* Logo row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 40 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: '#0284c7',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <div style={{ width: 8, height: 32, background: 'white', borderRadius: 4 }} />
              <div style={{ width: 8, height: 52, background: 'white', borderRadius: 4 }} />
              <div style={{ width: 8, height: 24, background: 'white', borderRadius: 4 }} />
            </div>
          </div>
          <span style={{ fontSize: 40, fontWeight: 700, color: 'white', letterSpacing: '-1px' }}>
            mictoo
          </span>
        </div>

        {/* Headline — Satori needs explicit display:flex on any element with
             more than one child, otherwise it logs a warning on every fetch.
             We also can't use <br/> inside a flex container, so the line
             break is achieved by stacking two spans in a column. */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontSize: 64,
            fontWeight: 800,
            color: 'white',
            textAlign: 'center',
            lineHeight: 1.1,
            marginBottom: 24,
          }}
        >
          <span>Free AI Audio &amp; Video</span>
          <span style={{ color: '#38bdf8' }}>Transcription</span>
        </div>

        {/* Subtitle */}
        <div style={{ fontSize: 28, color: '#94a3b8', textAlign: 'center', marginBottom: 48 }}>
          Upload any file → Get text in seconds
        </div>

        {/* Badges */}
        <div style={{ display: 'flex', gap: 16 }}>
          {['No signup', '50+ languages', 'AI'].map(label => (
            <div
              key={label}
              style={{
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: 32,
                padding: '10px 24px',
                fontSize: 22,
                color: 'white',
              }}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  )
}
