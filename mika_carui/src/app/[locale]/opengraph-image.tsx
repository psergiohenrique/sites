import { ImageResponse } from 'next/og'

export const runtime = 'nodejs'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

async function getMetadata(locale: string) {
  return ((await import(`../../../messages/${locale}.json`)).default as {
    Metadata: { title: string; siteName: string; ogDescription: string }
  }).Metadata
}

export const alt = 'Mika Carui — Especialista em Desenvolvimento Humano'

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getMetadata(locale)
  const isPt = locale === 'pt'

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#0A0A0A',
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
            backgroundColor: '#FFFFFF',
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
                backgroundColor: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '26px',
                fontWeight: 700,
                color: '#0A0A0A',
              }}
            >
              M
            </div>
            <span
              style={{
                fontSize: '24px',
                fontWeight: 700,
                color: '#FFFFFF',
                letterSpacing: '-0.01em',
              }}
            >
              {t.siteName}
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div
              style={{
                display: 'flex',
                fontSize: '54px',
                fontWeight: 700,
                color: '#FFFFFF',
                lineHeight: 1.1,
                maxWidth: '900px',
              }}
            >
              {isPt ? (
                <>
                  Especialista em desenvolvimento humano.
                </>
              ) : (
                <>
                  Specialist in human development.
                </>
              )}
            </div>
            <div
              style={{
                fontSize: '20px',
                color: '#D6D6D6',
                lineHeight: 1.5,
                maxWidth: '640px',
                fontWeight: 400,
              }}
            >
              {t.ogDescription}
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
                color: '#9A9A9A',
                letterSpacing: '0.08em',
              }}
            >
              <span>{isPt ? 'PALESTRAS · CURSOS · PROTOCOLOS' : 'TALKS · COURSES · PROTOCOLS'}</span>
            </div>
            <span style={{ fontSize: '14px', color: '#D6D6D6' }}>
              mikacarui.com
            </span>
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
