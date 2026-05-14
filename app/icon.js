import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 8,
          background: '#0284c7',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Three waveform bars */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
          <div style={{ width: 3, height: 14, background: 'white', borderRadius: 2 }} />
          <div style={{ width: 3, height: 22, background: 'white', borderRadius: 2 }} />
          <div style={{ width: 3, height: 10, background: 'white', borderRadius: 2 }} />
        </div>
      </div>
    ),
    { ...size }
  )
}
