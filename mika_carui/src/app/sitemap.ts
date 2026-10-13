import type { MetadataRoute } from 'next'

const BASE = 'https://mikacarui.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ['', '/sobre', '/cursos-e-protocolos']

  return paths.flatMap((path) => {
    const alternates = {
      languages: {
        pt: `${BASE}${path}`,
        en: `${BASE}/en${path}`,
      },
    }
    return [`${BASE}${path}`, `${BASE}/en${path}`].map((url) => ({
      url,
      lastModified: new Date('2026-10-13'),
      changeFrequency: 'monthly' as const,
      priority: path === '' ? 1 : 0.8,
      alternates,
    }))
  })
}
