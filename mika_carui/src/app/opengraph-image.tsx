import { ImageResponse } from 'next/og'

export const runtime = 'nodejs'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'Mika Carui — Psicóloga Clínica | Terapia Integrativa'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#2A1D18',
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
            backgroundColor: '#FF66C4',
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
                backgroundColor: '#FF66C4',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '26px',
                fontWeight: 700,
                color: '#FFFFFF',
              }}
            >
              M
            </div>
            <span
              style={{
                fontSize: '24px',
                fontWeight: 700,
                color: '#F7EFE5',
                letterSpacing: '-0.01em',
              }}
            >
              Mika Carui — Psicóloga Clínica
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div
              style={{
                display: 'flex',
                fontSize: '54px',
                fontWeight: 700,
                color: '#F7EFE5',
                lineHeight: 1.1,
                maxWidth: '900px',
              }}
            >
              Sua mente merece&nbsp;
              <span style={{ color: '#FF66C4' }}>leveza</span>.
            </div>
            <div
              style={{
                fontSize: '20px',
                color: '#F0E4DC',
                lineHeight: 1.5,
                maxWidth: '640px',
                fontWeight: 400,
              }}
            >
              Terapia integrativa — atendimento online e presencial.
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
                color: '#FFD1EC',
                letterSpacing: '0.08em',
              }}
            >
              <span>ANSIEDADE · DEPRESSÃO · AUTOESTIMA</span>
            </div>
            <span style={{ fontSize: '14px', color: '#F0E4DC' }}>
              mikacarui.com
            </span>
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
