import { ImageResponse } from 'next/og'

export const runtime = 'nodejs'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'FCA Transporte Executivo — Paulínia, Campinas e região'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#0c1c33',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '6px',
            backgroundColor: '#A9923A',
            display: 'flex',
          }}
        />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '64px 80px',
            height: '100%',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '10px',
                backgroundColor: '#A9923A',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '26px',
                fontWeight: 700,
                color: '#0c1c33',
                fontFamily: 'serif',
              }}
            >
              F
            </div>
            <span
              style={{
                fontSize: '24px',
                fontWeight: 700,
                color: '#F7F5EF',
                letterSpacing: '-0.01em',
              }}
            >
              FCA Transporte Executivo
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div
              style={{
                fontSize: '54px',
                fontWeight: 700,
                color: '#F7F5EF',
                lineHeight: 1.1,
                maxWidth: '900px',
                fontFamily: 'serif',
              }}
            >
              Transporte executivo à altura do seu compromisso.
            </div>
            <div
              style={{
                fontSize: '20px',
                color: '#a9b2c4',
                lineHeight: 1.5,
                maxWidth: '640px',
                fontWeight: 400,
              }}
            >
              Carros de luxo, motoristas discretos e pontualidade absoluta —
              para quem não pode chegar de qualquer jeito.
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                display: 'flex',
                gap: '20px',
                fontSize: '13px',
                color: '#C9B36A',
                letterSpacing: '0.08em',
              }}
            >
              <span>PAULÍNIA · CAMPINAS E REGIÃO</span>
            </div>
            <span style={{ fontSize: '14px', color: '#777777' }}>
              fcatransporteexecutivo.com.br
            </span>
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
