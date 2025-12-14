import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export function GET(request) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get('title') || 'Bernis Nukic'
  const description = searchParams.get('description') || 'bernis.dev'
  const tag = searchParams.get('tag') || 'Blog'
  const date = searchParams.get('date') || ''
  const code = searchParams.get('code') || ''

  const width = clampInt(searchParams.get('w'), 1200, 800, 2400)
  const height = clampInt(searchParams.get('h'), 630, 420, 1350)

  const titleSize = title.length > 60 ? 52 : title.length > 42 ? 56 : 60

  return new ImageResponse(
    (
      <div
        style={{
          width: `${width}px`,
          height: `${height}px`,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px',
          backgroundColor: '#030712',
          color: '#f9fafb',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(135deg, rgba(17, 24, 39, 1) 0%, rgba(3, 7, 18, 1) 45%, rgba(17, 24, 39, 1) 100%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(45deg, rgba(136, 19, 55, 0.35) 0%, rgba(0, 0, 0, 0) 35%, rgba(49, 46, 129, 0.35) 100%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(315deg, rgba(136, 19, 55, 0.18) 0%, rgba(0, 0, 0, 0) 50%, rgba(136, 19, 55, 0.12) 100%)',
          }}
        />

        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '8px 14px',
                borderRadius: 999,
                fontSize: 18,
                color: 'rgba(244, 244, 245, 0.88)',
                background: 'rgba(24, 24, 27, 0.55)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
              }}
            >
              {tag}
            </div>
            {date ? (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '8px 14px',
                  borderRadius: 999,
                  fontSize: 18,
                  color: 'rgba(244, 244, 245, 0.7)',
                  background: 'rgba(24, 24, 27, 0.35)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                {date}
              </div>
            ) : null}
          </div>

          <div style={{ fontSize: titleSize, fontWeight: 750, lineHeight: 1.06, letterSpacing: -1.2 }}>
            {title}
          </div>

          {description ? (
            <div style={{ fontSize: 26, color: 'rgba(244, 244, 245, 0.82)', lineHeight: 1.3, maxWidth: 980 }}>
              {description}
            </div>
          ) : null}
        </div>

        <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          {code ? (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
                padding: '18px 20px',
                borderRadius: 18,
                background: 'rgba(9, 10, 15, 0.75)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                width: 760,
              }}
            >
              <div style={{ display: 'flex', gap: 8 }}>
                <div style={{ width: 10, height: 10, borderRadius: 999, background: 'rgba(244, 63, 94, 0.7)' }} />
                <div style={{ width: 10, height: 10, borderRadius: 999, background: 'rgba(250, 204, 21, 0.65)' }} />
                <div style={{ width: 10, height: 10, borderRadius: 999, background: 'rgba(34, 197, 94, 0.6)' }} />
              </div>
              <div style={{ fontSize: 22, color: 'rgba(244, 244, 245, 0.92)', whiteSpace: 'pre-wrap' }}>{code}</div>
            </div>
          ) : (
            <div />
          )}

          <div
            style={{
              fontSize: 20,
              color: 'rgba(244, 244, 245, 0.6)',
              letterSpacing: 0.2,
            }}
          >
            bernis.dev
          </div>
        </div>
      </div>
    ),
    {
      width,
      height,
    }
  )
}

function clampInt(value, fallback, min, max) {
  const n = Number.parseInt(String(value || ''), 10)
  if (!Number.isFinite(n)) return fallback
  return Math.min(max, Math.max(min, n))
}
