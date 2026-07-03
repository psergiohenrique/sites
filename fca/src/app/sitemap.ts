import type { MetadataRoute } from 'next'

const BASE = 'https://fcatransporteexecutivo.com.br'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE,
      lastModified: new Date('2026-07-02'),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
