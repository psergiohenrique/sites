import { ImageResponse } from 'next/og'

export const runtime = 'nodejs'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'Regiane Paula — Psicóloga | Atendimento online'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#5B6B44',
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
            backgroundColor: '#7C2029',
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
                borderRadius: '50%',
                backgroundColor: '#F5EFE3',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '26px',
                fontWeight: 700,
                color: '#5B6B44',
                fontFamily: 'serif',
              }}
            >
              R
            </div>
            <span
              style={{
                fontSize: '24px',
                fontWeight: 700,
                color: '#F5EFE3',
                letterSpacing: '-0.01em',
              }}
            >
              Regiane Paula — Psicóloga
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div
              style={{
                fontSize: '48px',
                fontWeight: 700,
                color: '#F5EFE3',
                lineHeight: 1.15,
                maxWidth: '900px',
                fontFamily: 'serif',
                fontStyle: 'italic',
              }}
            >
              O mais importante em mim é o que eu não conheço.
            </div>
            <div
              style={{
                fontSize: '20px',
                color: '#EDE3D2',
                lineHeight: 1.5,
                maxWidth: '640px',
                fontWeight: 400,
              }}
            >
              Terapia Cognitivo-Comportamental, Neuropsicologia e Transtornos
              do Sono — atendimento 100% online.
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
                color: '#CDAB8D',
                letterSpacing: '0.08em',
              }}
            >
              <span>ATENDIMENTO 100% ONLINE</span>
            </div>
            <span style={{ fontSize: '14px', color: '#EDE3D2' }}>
              regianepsicologa.com.br
            </span>
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
